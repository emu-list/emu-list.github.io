document.addEventListener("DOMContentLoaded", () => {
    const downloadItems = document.querySelectorAll(".descarga-item");
    const searchInput = document.getElementById("search-input");
    const descargasSection = document.querySelector(".descargas-section");

    // Function to filter items based on search query
    function filterItems(query) {
        query = query.toLowerCase();
        const matchedItems = [];
        const unmatchedItems = [];

        downloadItems.forEach(item => {
            const categories = item.getAttribute("data-category").toLowerCase().split(",");
            const title = item.querySelector("h2").innerText.toLowerCase();
            let isMatch = categories.some(category => category.includes(query)) || title.includes(query);

            if (!isMatch) {
                isMatch = categories.some(category => fuzzyMatch(query, category)) || fuzzyMatch(query, title);
            }

            if (isMatch) {
                matchedItems.push(item);
            } else {
                unmatchedItems.push(item);
            }
        });

        // Clear the section and re-add items
        descargasSection.innerHTML = '<h1 class="oswald-bold">Descargas</h1>';
        matchedItems.forEach(item => {
            item.classList.add("show");
            descargasSection.appendChild(item);
        });
        unmatchedItems.forEach(item => {
            item.classList.remove("show");
            descargasSection.appendChild(item);
        });
    }

    // Basic fuzzy matching function
    function fuzzyMatch(query, text) {
        const words = text.split(' ');
        return words.some(word => word.startsWith(query));
    }

    // Event listener for search input
    searchInput.addEventListener("input", (e) => {
        filterItems(e.target.value);
    });

    // Initial observer setup
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    downloadItems.forEach(item => {
        observer.observe(item);
    });
});

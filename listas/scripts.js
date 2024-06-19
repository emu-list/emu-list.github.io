document.addEventListener('DOMContentLoaded', () => {
    const games = [
    { name: '20 minutes till dawn', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Afterimage', compatibility: 'orange', code: 'SD720G', console: 'Mobox WOW64' },
    { name: 'Alcatraz', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: "American McGee's Alice", compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Audacity', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Blades Of Times', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Blender', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Bob esponja the cosmic shake', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Call of duty 1', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Call of duty 2', compatibility: 'yellow', code: 'SD720G', console: 'Mobox WOW64' },
    { name: 'Call of duty 4 mw', compatibility: 'yellow', code: 'SD720G', console: 'Mobox WOW64' },
    { name: 'Call of duty World at War', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Call of Juarez: The Cartel', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Carmageddon 2', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'C&C Renegade', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Carnivores 2', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: "Clive Barker's Jericho", compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'COD Black Ops', compatibility: 'red', code: 'SD720G', console: 'Mobox Wow64' },
    { name: 'COD Black 1', compatibility: 'orange', code: 'SD720G', console: 'Mobox Wow64' },
    { name: 'Dead Space', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Dead Space 2', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Deluxe Pacman', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Dragon Ball Z fighter mugen', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Feeding Frenzy', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Flatout 2', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Floating sandbox', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: "Five Nights at Freddy's 1", compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: "Five Nights at Freddy's 2", compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Grand Theft Auto: San Andreas', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Grand Theft Auto 3', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Grand Theft Auto: Vice City', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Halo CE', compatibility: 'yellow', code: 'SD720G', console: 'Mobox WOW64' },
    { name: 'Halo 2', compatibility: 'yellow', code: 'SD720G', console: 'Mobox WOW64' },
    { name: 'Half Life 2', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Hyper dbz', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Igi', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Igi 2', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Infernal', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'KOF XIII mugen', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Left for dead 2', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Macromedia Freehand', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'MDK', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Max Payne 1', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Max Payne 2', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Metal slug SB Fantholgy', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Mikyaku impact', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Midtown Madness', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'NFS carbon', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'NFS Hot putsuit 2', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'NFS Most wanted', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'NFS underground 2', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Neón génesis evangelion mugen', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'NFS Postreet', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Oceanhorn 2', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Office 2007', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Pes 2013', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Planta vs zombie', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Portal', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Project Snowblind', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Raft', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Red Ocean', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1'},
    { name: 'Remember Me', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Resident evil 5', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Serious Sam 2', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Shank', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Shrek 2', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Silent Hill 3', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Silent Hill 4', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Skullgirl 2nd encore', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Slender the eight pages', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Sonic boll', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Sonic manía', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Spiderman 3', compatibility: 'red', code: 'SD720G', console: 'Mobox Wow64' },
    { name: 'Splinter Cell Chaos Theory', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Splinter Cell: Pandora Tomorrow', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Super smash flash 2', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Tarzán', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Teenage mutant turttle ninja', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'The blinding of Isaac rebirth', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'The Cursed Crusade', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'The legend of korra', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'The strangers thing 3', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'The super new luckys tales', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'TimeShift', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Tomb Raider - Underworld', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Transformers the game', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Ultimate Spiderman', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Vampire bloodlines', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Warcraft 3', compatibility: 'yellow', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Zombie kill of the week', compatibility: 'green', code: 'SD720G', console: 'Winlator 6.1' },
    ];    
    const compatibilityText = {
        green: 'Si',
        yellow: 'Medio',
        red: 'No',
        orange: 'poco'
    };

    const tableBody = document.querySelector('#gameTable tbody');

    games.forEach(game => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = game.name;
        row.appendChild(nameCell);

        const compatibilityCell = document.createElement('td');
        compatibilityCell.className = 'compatibility';
        const circle = document.createElement('div');
        circle.className = `circle ${game.compatibility}`;
        compatibilityCell.appendChild(circle);
        compatibilityCell.appendChild(document.createTextNode(compatibilityText[game.compatibility]));
        row.appendChild(compatibilityCell);

        const codeCell = document.createElement('td');
        codeCell.textContent = game.code;
        row.appendChild(codeCell);

        const consoleCell = document.createElement('td');
        consoleCell.textContent = game.console;
        row.appendChild(consoleCell);

        tableBody.appendChild(row);
    });
});

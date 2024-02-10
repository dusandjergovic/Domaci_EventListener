
let pitanja = [
    'Koliko je 2 + 2?',
    'Glavni grad Srbije?',
    'Najveca reka na svetu?'
];

document.querySelector("#btn").addEventListener('click', function() {

    let randomPitanje = pitanja[Math.floor(Math.random() * pitanja.length)];
    let odgovor = prompt(randomPitanje);

    if (randomPitanje === 'Koliko je 2 + 2?') {
        if (odgovor == 4) {
            console.log('Tacan odgovor!');
        }
    } else if (randomPitanje === 'Glavni grad Srbije?') {
        if (odgovor.toLowerCase() === 'beograd') {
            console.log('Tacan odgovor!');
        }
    } else if (randomPitanje === 'Najveca reka na svetu?') {
        if (odgovor.toLowerCase() === 'nil') {
            console.log('Tacan odgovor!');
        }
    } else {
        console.log('Nepoznato pitanje.');
    }


    // PRVOBITNI KOD
    // OVAJ KOD SAM IZBACIO ZATO STO KOD IZNAD RAZUMEM BOLJE I PROSTIJI MI JE

        // switch(randomPitanje) {
    //     case 'Koliko je 2 + 2?':
    //         if (odgovor == 4) {
    //             console.log('Tacan odgovor!');
    //         }
    //         break;
    //     case 'Glavni grad Srbije?':
    //         if (odgovor.toLowerCase() == 'beograd') {
    //             console.log('Tacan odgovor!');
    //         }
    //         break;
    //     case 'Najveca reka na svetu?':
    //         if (odgovor.toLowerCase() == 'nil') {
    //             console.log('Tacan odgovor!');
    //         }
    //         break;
    //     default:
    //         console.log('Nepoznato pitanje.');
    // }
    
    //
});

    




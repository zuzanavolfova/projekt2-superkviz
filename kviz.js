const otazky = [
{
    kvizOtazka: 'Co je ikonická hračka z 80. let',
    obrazek: 'obrazky/moncicak.jpg',
    odpoved: ['Kočičák', 'Mončičák', 'Opičák'],
    indexOdpovedi: 1,
},
{
    kvizOtazka: 'Jaké je Matějovo nejoblíbenější ovoce?',
    obrazek: 'obrazky/ovoce.jpg',
    odpoved: ['Kokos', 'Meloun', 'Jahoda', 'Ani jedna z možností'],
    indexOdpovedi: 1,
},
{
    kvizOtazka: 'Pro úspěšné absolvování kurzu je potřeba...',
    obrazek: 'obrazky/pivo.jpg',
    odpoved: ['Umět JavaScript', 'Chodit po kurzu do hospody'],
    indexOdpovedi: 0,
}
]
let indexOtazky = 0;

function novaOtazka(){

    //pricist 1 k poradi otazky


   

    //kdyz je poradi otazky vetsi nez 3 zobraz vysledky
    if (indexOtazky === otazky.length){
        let kviz = document.querySelector('.kviz');
        let obsah = document.querySelector('.obsah');
        kviz.removeChild(obsah);
        
        //zobraz vysledek
        let vysledek = document.createElement('div')
        kviz.appendChild(vysledek);
        vysledek.innerHTML = 'pokus';
        // jmenoZvirete.className = 'jmeno'
    }
    else {
        document.querySelector('#poradiOtazky').textContent = " "+ (indexOtazky+1);
        document.querySelector('#otazka').textContent = otazky[indexOtazky].kvizOtazka;
        indexOtazky += 1;
    }
}


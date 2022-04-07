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
let poradiOtazky = 0;
let indexOtazky = -1;

function novaOtazka(){

//pricist 1 k poradi otazky
// poradiOtazky+= 1;
poradiOtazky += 1;
indexOtazky += 1;


document.querySelector('#poradiOtazky').textContent = " "+ poradiOtazky;
document.querySelector('#otazka').textContent = otazky[indexOtazky].kvizOtazka;

//kdyz je poradi otazky vetsi nez 3 zobraz vysledky
if (poradiOtazky===3){
    let kviz = document.querySelector('.kviz');
    let obsah = document.querySelector('.obsah');
    kviz.removeChild(obsah);
let vysledek = document.querySelector('.kviz');
kviz.appendChild(vysledek);
}

}


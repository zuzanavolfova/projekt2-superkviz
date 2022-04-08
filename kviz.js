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
let foto = document.querySelector('.foto');

function zmenText() {
    document.querySelector('#poradiOtazky').textContent = " "+ (indexOtazky+1);
    document.querySelector('#otazka').textContent = otazky[indexOtazky].kvizOtazka;
}

function zacniHru () {
    fotoOtazka = document.createElement ('img');
    fotoOtazka.className = 'obrazek';
    fotoOtazka.src = otazky[indexOtazky].obrazek;
    foto.appendChild(fotoOtazka);
    let moznosti = document.querySelector('#moznosti');
    moznosti.style.display= "block";
    zmenText();
    novaOtazka();
}

function zmenObrazek(){
    fotoOtazka.src = otazky[indexOtazky].obrazek;
  }

function zmenOdpovedi(){

}

function novaOtazka(){
    if (indexOtazky < otazky.length){
        zmenText();
        zmenObrazek();
        zmenOdpovedi();
        indexOtazky += 1;
    }
    else {let kviz = document.querySelector('.kviz');
        let kontejner = document.querySelector('.kontejner');
        kviz.removeChild(kontejner);
        
        //zobraz vysledek
        let vysledek = document.createElement('div')
        kviz.appendChild(vysledek);
        vysledek.innerHTML = 'pokus';
        // jmenoZvirete.className = 'jmeno'
        
    }
}


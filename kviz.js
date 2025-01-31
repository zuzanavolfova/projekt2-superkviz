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

let tvojeOdpovedi = [];
let tvojeOdpovediIndex = 0;

let indexOtazky = 0;
let indexOdpoved = 0;

let foto = document.querySelector('.foto');
let seznamOtazek = document.querySelector('ul');

let spravne = 0; 
let procentaUspesnost = 0; 
let tvojeOdpoved
let vysledek
let spravnaOdpovedText

function zmenText() {
    document.querySelector('#poradiOtazky').textContent = " "+ (indexOtazky+1);
    document.querySelector('#otazka').textContent = otazky[indexOtazky].kvizOtazka;
}

function zmenObrazek(){
    fotoOtazka.src = otazky[indexOtazky].obrazek;
}

function zmenOdpovedi(){
    //vytvorim seznam otazek
    let otazka = document.createElement ('li');
    otazka.innerHTML = otazky[indexOtazky].odpoved[indexOdpoved];
    seznamOtazek.appendChild(otazka);
    
    //k otazkam vlozim data
    otazka.setAttribute('data-odpoved', indexOdpoved);
    
    //k otazkam vlozim event listener
    otazka.addEventListener('click', novaOtazka);

    //zmenim index, abych mohla prejit k dalsi otazce
    indexOdpoved+=1;
}

function zacniHru () {
    //vypisu otazku
    zmenText();
    
    //vytvorim element obrazek
    fotoOtazka = document.createElement ('img');
    fotoOtazka.className = 'obrazek';
    fotoOtazka.src = otazky[indexOtazky].obrazek;
    foto.appendChild(fotoOtazka);
    
    //vygeneruju odpovedi
    otazky[indexOtazky].odpoved.forEach(zmenOdpovedi);
   
    //skruju tlacitko nova hra
    let novaHra=document.querySelector('.novaHra');
    novaHra.style.display='none';
    }

function novaOtazka(kliknutaOdpoved){
    //ulozi odpoved do pole  
    tvojeOdpovedi.push(kliknutaOdpoved.target.getAttribute('data-odpoved'));

    if (indexOtazky < (otazky.length-1)){       
       // vymazu predchozi seznam
        let li =document.querySelectorAll('li');
        let ul =document.querySelector('ul');

        for (let i = 0; i<otazky[indexOtazky].odpoved.length; i++){
        ul.removeChild(li[i]);
        }
        //proc to nefunguje?
        // document.querySelector('ul').removeChild(document.querySelectorAll('li'))
        
        //prictu 1 k indexu abych mohla pracovat s dalsim indexem v poli
        indexOtazky++;
        zmenText();
        zmenObrazek();
        
        indexOdpoved = 0;
        
        //vygeneruju nove odpovedi
        otazky[indexOtazky].odpoved.forEach(zmenOdpovedi);

        }   else {
            console.log(tvojeOdpovedi);
        //odstrani kviz
        let kviz = document.querySelector('.kviz');
        let kontejner = document.querySelector('.kontejner');
        kviz.removeChild(kontejner);

        //zobraz vysledek
        //indexOtazky nastavim na 0, abych zacala od zazatku
        indexOtazky = 0;
        vysledek = document.createElement ('div');
        kviz.appendChild(vysledek);
        
        let nadpis = document.createElement ('h1');
        vysledek.appendChild(nadpis);
        nadpis.className='nadpisVysledek';
        nadpis.innerHTML = 'Tvoje hodnocení';
        
        //vypise sekci pro kazdou odpoved
        otazky.forEach(vypisOdpovedi);
        
        //vypocita a vypise uspesnost
        let vysledekProcenta = document.createElement ('h1');
        vysledek.appendChild(vysledekProcenta);
        vysledekProcenta.className='nadpisVysledek';
        procentaUspesnost = Math.round(100*spravne/otazky.length);
        vysledekProcenta.innerHTML = 'Spravně ' + spravne + ' ze '
            + otazky.length + ' otázek. Úspěšnost ' + procentaUspesnost + ' %.';
    }
}

function vypisOdpovedi () {
    let i = otazky[indexOtazky].indexOdpovedi;

    let odpovedText = document.createElement ('h2');
    vysledek.appendChild(odpovedText);
    odpovedText.innerHTML = (indexOtazky+1) + '. ' 
        + otazky[indexOtazky].kvizOtazka;
    
    let tvojeOdpovedText = document.createElement ('p');
    vysledek.appendChild(tvojeOdpovedText);
    tvojeOdpovedText.className='vysledekText';
    tvojeOdpovedText.innerHTML = 'Tvoje odpověď: '
        + otazky[indexOtazky].odpoved[tvojeOdpovedi[tvojeOdpovediIndex]];
    
    let spravnaOdpovedText = document.createElement ('p');
    vysledek.appendChild(spravnaOdpovedText);
    spravnaOdpovedText.className='vysledekText';
    
    //zjistuju, jestli je odpoved spravna a
    // podle toho vypisuju hlasku a pripadne scitam spravne odpovedi
    if (otazky[indexOtazky].indexOdpovedi==tvojeOdpovedi[tvojeOdpovediIndex]) {
        spravnaOdpovedText.innerHTML = 'To je SPRAVNĚ';
        spravne++;
    } else {
        spravnaOdpovedText.innerHTML = 'Spravná odpověď: '
        + otazky[indexOtazky].odpoved[i];
    };
    indexOtazky ++;
    tvojeOdpovediIndex++;   
}

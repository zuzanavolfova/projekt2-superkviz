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
let indexOdpoved = 0;
let foto = document.querySelector('.foto');
let seznamOtazek = document.querySelector('ul');

let spravne = 0; //pomocna promenna pro stylovani 
let procentaUspesnost = 100; //pomocna promenna pro stylovani 
let tvojeOdpoved= 'pomocny padouch'; //pomocna promenna pro stylovani 
let vysledek

function zmenText() {
    document.querySelector('#poradiOtazky').textContent = " "+ (indexOtazky+1);
    document.querySelector('#otazka').textContent = otazky[indexOtazky].kvizOtazka;
}

function zmenObrazek(){
    fotoOtazka.src = otazky[indexOtazky].obrazek;
}

function zmenOdpovedi(){
    let otazka = document.createElement ('li');
    otazka.innerHTML = otazky[indexOtazky].odpoved[indexOdpoved];
    seznamOtazek.appendChild(otazka);
    otazka.onclick= novaOtazka;
    indexOdpoved+=1;
}

function zacniHru () {
    zmenText();

    fotoOtazka = document.createElement ('img');
    fotoOtazka.className = 'obrazek';
    fotoOtazka.src = otazky[indexOtazky].obrazek;
    foto.appendChild(fotoOtazka);
    
    otazky[indexOtazky].odpoved.forEach(zmenOdpovedi);
   
    let novaHra=document.querySelector('.novaHra');
    novaHra.style.display='none';
   
    indexOtazky++;
   }


function vypisOdpovedi () {
        let odpovedText = document.createElement ('h2');
            vysledek.appendChild(odpovedText);
            odpovedText.innerHTML = (indexOtazky+1) + '. ' + otazky[indexOtazky].kvizOtazka;
            
            let tvojeOdpovedText = document.createElement ('p');
            vysledek.appendChild(tvojeOdpovedText);
            tvojeOdpovedText.className='vysledekText';
            tvojeOdpovedText.innerHTML = 'Tvoje odpověď: ' + tvojeOdpoved;
            
            let spravnaOdpovedText = document.createElement ('p');
            vysledek.appendChild(spravnaOdpovedText);
            spravnaOdpovedText.className='vysledekText';

            // spravnaOdpoved();

            indexOtazky += 1;
            }

function novaOtazka(){
    if (indexOtazky < otazky.length){       
        zmenText();
        zmenObrazek();
        //vymazat vsechny li - nefunguje
        // document.querySelector('ul').removeChild(document.querySelectorAll('li'));
        indexOdpoved = 0;
      
        otazky[indexOtazky].odpoved.forEach(zmenOdpovedi);
        indexOtazky += 1;
        
    }
    else {let kviz = document.querySelector('.kviz');
        let kontejner = document.querySelector('.kontejner');
        kviz.removeChild(kontejner);

        indexOtazky = 0;
              
        //zobraz vysledek
        vysledek = document.createElement ('div');
        kviz.appendChild(vysledek);
        
        let nadpis = document.createElement ('h1');
        vysledek.appendChild(nadpis);
        nadpis.className='nadpisVysledek';
        nadpis.innerHTML = 'Tvoje hodnocení';

        otazky.forEach(vypisOdpovedi);

        let vysledekProcenta = document.createElement ('h1');
        vysledek.appendChild(vysledekProcenta);
        vysledekProcenta.className='nadpisVysledek';
        vysledekProcenta.innerHTML = 'Spravně ' + spravne + ' ze ' + otazky.length + ' otázek. Úspěšnost ' + procentaUspesnost + ' %.';
        
    }
}

// function spravnaOdpoved () {

// }
 

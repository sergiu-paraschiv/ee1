var DATA_ADDRESSES = [
    {
        name: 'Cluj',
        children: [
            {
                name: 'Cluj-Napoca',
                children: [
                    'Andrei Muresanu',
                    'Bulgaria',
                    'Buna Ziua',
                    'Becas',
                    'Centru',
                    'Dâmbul Rotund',
                    'Faget',
                    'Floresti',
                    'Gara',
                    'Gheorgheni',
                    'Gradini Manastur',
                    'Grigorescu',
                    'Gruia',
                    'Iris',
                    'Între Lacuri',
                    'Manastur',
                    'Marasti',
                    'Someseni',
                    'Zorilor',
                    
                ]
            },
            
            {
                name: 'Turda',
                children: [
                    'Centru'
                ]
            }
        ]
    },
    
    {
        name: 'Alba',
        children: [
            {
                name: 'Alba Iulia',
                children: [
                    'ASDF',
                    'QQQ'
                ]
            },
            
            {
                name: 'Aiud',
                children: []
            }
        ]
    },
    
    {
        name: 'Mures',
        children: [
            {
                name: 'Sighisoara',
                children: []
            }
        ]
    }
];

var DATA_CAPACITY = [
    {
        name: '< 50',
        limits: [0, 50]
    },
    
    {
        name: '50 - 100',
        limits: [50, 100]
    },
    
    {
        name: '100 - 150',
        limits: [100, 150]
    },
    
    {
        name: '150 - 300',
        limits: [150, 300]
    },
    
    {
        name: '300 - 500',
        limits: [300, 500]
    },
    
    {
        name: '>500',
        limits: [500, 9999]
    }
];

var DATA_LOCATIONS = [
    {
        "id": 1111111111,
        "title": "DaVinci Ristorante",
        "description": "Placerea noastra este sa va recomandam si sa va oferim atentie pana la cel mai mic detaliu, astfel incat sa va puteti bucura cu adevarat de aceasta zi magica. Relaxati-va, bucurati-va si permiteti-ne sa va rasfatam in stil DaVinci Ristorante.<br/> Aresa: Str Fagului nr. 87.<br/> Telefon: +40726689933, 0264276876",
        "capacity": 250,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Buna Ziua",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/davinci.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/davinci1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/davinci2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/davinci3.jpg"
            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=predeal,cluj-napoca,cluj&zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.753007, 23.611109&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111112,
        "title": "Grand Hotel Italia",
        "description": "Grand Hotel Italia este locul ideal pentru a celebra un moment atat de frumos din viata Dumneavoastra precum  este ziua nuntii.Eleganta spatiilor interioare si exterioare vor transforma acest eveniment intr-unul de neuitat. Impactul nu va fi doar unul estetic dar si unul senzorial dirijat de ultimele tendinte ale culturii gastronomice moderne. Competenta si profesionalismul personalului sunt garantia succesului nuntii Dumneavoastra.<br/> Aresa:  Strada Trifoiului 2<br/> Telefon:0364111333",
        "capacity": 400,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Buna Ziua",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/grand.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/grand1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/grand2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/grand3.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=vulcan,cluj-napoca,cluj&zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.752714, 23.606046&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111112,
        "title": "Restaurant View",
        "description": "View  Restaurant & Ballroom este o locatie unica in Cluj-Napoca, oferind o panorama superba clientilor sai. Indiferent de anotimp, poti admira zi si noapte intregul oras chiar din mijlocul lui, privelistea fiind deosebita.<br/> Aresa: Piata Mihai Viteazul, Multiplex Leul, etaj 7<br/> Telefon:0755120005 ",
        "capacity": 250,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Centru",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/grand.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/grand1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/grand2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/grand3.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=arges,cluj-napoca,cluj&zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.774157, 23.593890&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111113,
        "title": "Coratim Events Hall",
        "description": " Intr-o design clasic si elegant Coratim Events Hall va poate garanta servicii ireprosabile pentru organizarea de conferinte, nunti, botezuri, prezentari, concerte, simpozioane, congrese sau petreceri corporate.<br/> Aresa: Str. Campul Painii, Nr. 3-5<br/> Telefon: 0731018371, 0264432343",
        "capacity": 550,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Marasti",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/coratim.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/coratim1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/coratim2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/coratim3.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=rasaritului,cluj-napoca,cluj&zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.785835, 23.607852&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111114,
        "title": "Farmec",
        "description": " FARMEC PREMIUM BALLROOM situat în Cluj-Napoca pe strada Bucuresti, este o îmbinare perfecta între eleganta, stil, rafinament si modernitate.  Arhitectura unica a cladirii, detaliile pe care designerul a avut grija sa le puna în valoare atât în exterior cât si în  interiorul restaurantului, atmosfera glamour, calda, relaxanta si primitoare, te fac sa te simti pe tarâm de basm.<br/> Aresa:  Str.Bucuresti 55A, Cluj-Napoca, Cluj<br/> Telefon: 0745133960",
        "capacity": 550,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Marasti",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/farmec.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/farmec1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/farmec2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/farmec3.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=paris,cluj-napoca,cluj&zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.781361,23.605406&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111115,
        "title": "Farmec",
        "description": " FARMEC PREMIUM BALLROOM situat în Cluj-Napoca pe strada Bucuresti, este o îmbinare perfecta între eleganta, stil, rafinament si modernitate.  Arhitectura unica a cladirii, detaliile pe care designerul a avut grija sa le puna în valoare atât în exterior cât si în  interiorul restaurantului, atmosfera glamour, calda, relaxanta si primitoare, te fac sa te simti pe tarâm de basm.<br/> Aresa:  Str.Bucuresti 55A, Cluj-Napoca, Cluj<br/> Telefon: 0745133960",
        "capacity": 290,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Marasti",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/farmec.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/farmec1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/farmec2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/farmec3.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=paris,cluj-napoca,cluj&zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.781361,23.605406&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111116,
        "title": "Safir",
        "description": " Restaurant Safir dispune de o sala generoasa, recent renovata si decorata, cu o arhitectura deosebita, avand o capacitate de 320 locuri. Ambianta placuta si gustul mâncarurilor preparate ca la mama acasa fac ca cine a trecut o data pragul nostru sa-si doreasca sa revina.<br/> Aresa: P-ta 1 Mai nr. 3, Cluj-Napoca, Cluj<br/> Telefon: 0752283291",
        "capacity": 320,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Marasti",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/safir.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/safir1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/safir2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/safir3.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=rasaritului,cluj-napoca,cluj&zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.789409, 23.605147&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111117,
        "title": "Segra",
        "description": " Sala de nunta se afla localizata intr-un parculet. Atat pretul, locatia salii de nunta in Cluj-Napoca, cat si multumirile primite de la clienti satisfacuti pe deplin de serviciile noastre ne recomanda ca fiind firma ce va poate ajuta sa stati cu fruntea sus la incheierea unei zile atat de importante, precum e cea a nuntii.<br/> Aresa: Str. Paris nr.60, Cluj-Napoca, Cluj<br/> Telefon: 0720660485, 0264434550",
        "capacity": 170,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Marasti",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/segra.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/segra1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/segra2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/segra3.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=ploiesti,cluj-napoca,cluj&zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.779392, 23.600037&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111118,
        "title": "Adryss",
        "description": " Restaurantul Adryss va ofera conditii ideale pentru organizarea evenimentelor importante pentru dumneavoastra.De la o mica si cocheta sarbatorire a zilei de nastere, la petreceri de nunta sau botez si pana la elegante evenimente din viata unei firme, restaurantul Adryss este locul ideal.<br/> Aresa: Strada Orastie Nr. 10, Cluj-Napoca, Cluj<br/> Telefon: 0740188010",
        "capacity": 250,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Someseni",
        "images": [
            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=orastiei,cluj-napoca,cluj&zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.779814, 23.659274&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111119,
        "title": "Agape",
        "description": " Cu o capacitate de 80-100 de locuri, elegantul Salon HELTAI GÁSPÁR va ofera mancaruri cu specific international, fiind ideal pentru organizarea unor nunti, intalniri si petreceri de mari dimensiuni.<br/> Aresa: Str. Iuliu Maniu Nr. 6, Cluj-Napoca, Cluj<br/> Telefon: 0264406523",
        "capacity": 100,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Centru",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/agape.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/agape1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/agape2.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=maniu,cluj-napoca,cluj&zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.770381, 23.591632&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111120,
        "title": "Akantus",
        "description": "Alegeti AKANTUS Restaurant pentru o experienta culinara deosebita, intr-o atmosfera moderna, de o eleganta discreta!<br/> Aresa: Calea Turzii nr 43-49, Cluj-Napoca, Cluj<br/> Telefon: 0372743143",
        "capacity": 220,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Andrei Muresanu",
        "images": [
            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=novac,cluj-napoca,cluj&zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.763871, 23.598869&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111121,
        "title": "Aimee",
        "description": "Sala de nunta este locul ideal pentru a celebra un moment atat de frumos din viata Dumneavoastra precum este ziua nuntii. Eleganta spatiilor interioare si exterioare vor transforma acest eveniment intr-unul de neuitat. Impactul nu va fi doar unul estetic dar si unul senzorial dirijat de ultimele tendinte ale culturii gastronomice moderne. Competenta si profesionalismul personalului sunt garantia succesului nuntii Dumneavoastra.<br/> Aresa:  Str. Avram Iancu nr. 418, Cluj-Napoca, Cluj<br/> Telefon: 0740643243",
        "capacity": 150,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Floresti",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/aimee.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/aimee1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/aimee2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/aimee3.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.751035, 23.521513&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111122,
        "title": "Vila Rosa",
        "description": "Vila Rosa organizeaza mese festive, seminarii, conferin?e, nun?i, botezuri, evenimente de zi ?i catering cu servicii de calitate irepro?abila.<br/> Aresa:  Str. Frunzisului nr. 4, Cluj-Napoca, Cluj<br/> Telefon: 0747111961",
        "capacity": 50,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Manastur",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/rosa.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/rosa1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/rosa2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/rosa3.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=islazului,cluj-napoca,cluj&zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.756563,%2023.566199&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111123,
        "title": "Alex & George",
        "description": "În incinta restaurantului se pot organiza o gamã largã de evenimente: nun?i, botezuri, aniversãri,întâlniri de afaceri, conferinte, in limita a 100 locuri.<br/> Aresa: Calea Turzii nr. 86, Cluj-Napoca, Cluj<br/> Telefon: 0364800730",
        "capacity": 100,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Andrei Muresanu",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/alexgeorge.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/alexgeorge1.jpg"                       
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.759231, 23.598142&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111124,
        "title": "Casa de Luxe",
        "description": "Cauti un altfel de restaurant unde evenimentul tau sa poarte pecetea reusitei depline? Te asteptam! Pentru ca aici ambianta, gustul desavarsit al mancarii si serviciile ireprosabile te vor face sa revii ori de cate ori vei avea ocazia.<br/> Aresa: Str. Fabricii, nr. 13, Cluj-Napoca, Cluj<br/> Telefon: 0747111961",
        "capacity": 400,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Marasti",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/luxe.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/luxe1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/luxe2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/luxe3.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.783640, 23.612768&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111125,
        "title": "Chicago's",
        "description": "Restaurant Chicago's organizeaza nunti, aniversari, botezuri, banchete, petreceri corporate, etc. Sala poate fi impartita in 2 parti decorate intr-o forma cu totul speciala, intime si rafinate, destinate intalnirilor de afaceri si evenimentelor speciale: aniversari, onomastici, etc.<br/> Aresa: Str. Govora nr 6, Cluj-Napoca, Cluj<br/> Telefon: 0264426431",
        "capacity": 200,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Manastur",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/chicago.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/chicago1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/chicago2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/chicago3.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.759953, 23.565390&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111126,
        "title": "Olimp",
        "description": "Locatia perfecta atunci cand doresti sa organizezi un eveniment, fie el nunta, botez, cununie, zi de nastere, petrecere corporate, petrecere tematica, bal de absolvire sau altele.<br/> Aresa: str. Observatorului, nr. 82-86 , Cluj-Napoca, Cluj<br/> Telefon: 0722116699",
        "capacity": 280,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Zorilor",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/olimp.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/olimp1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/olimp2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/olimp3.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.755204, 23.585074&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111127,
        "title": "Sunny Hill",
        "description": "Restaurant  Sunny Hill Cluj, amplasat in inima padurii Faget la numai 2 km de soseaua Europeana E-60, Cluj-Bucuresti si la numai cateva minute de Gradina Botanica-CLUJ si Centrul Istoric al orasului CLUJ -NAPOCA, va pune la dispozitie mai multe variante pentru nunta dumneavoastra.<br/> Aresa: Strada Fagetului, nr. 31A , Cluj-Napoca, Cluj<br/> Telefon: 0264480325",
        "capacity": 350,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Faget",
        "images": [
                       
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.716621,23.575326&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111128,
        "title": "Royal Classic",
        "description": "Fiecare nunta este unica, iar fiecare pereche fericita de miri doreste ca toate dorintele sa le fie implinite. Cu ajutorul profesionistilor de la Royal Classic Hotel, chiar si cele mai exigente pretentii vor fi satisfacute!<br/> Aresa: Str. Liviu Rebreanu nr.39 , Cluj-Napoca, Cluj<br/> Telefon: 0264202040",
        "capacity": 270,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Gehorgheni",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/royal.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/royal1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/royal2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/royal3.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.764247,23.620965&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111129,
        "title": "Hotel Stil - Restaurant Madrigal",
        "description": "Madrigal este decorat intr-un stil elegant si luxos fiind alegerea numarul 1 a clientilor pentru a organiza evenimentul special din viata dumneavoastra.<br/> Aresa: Str. Fagetului 5B , Cluj-Napoca, Cluj<br/> Telefon: 0264438171",
        "capacity": 250,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Faget",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_madrigal.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_madrigal1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_madrigal2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_madrigal3.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.733736, 23.588727&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111130,
        "title": "Hotel Stil - Restaurant Stil",
        "description": "Restaurantul Stil are o capacitate de 80 de locuri si se afla in incinta hotelului, adresandu-se atat oaspetilor hotelului cat si vizitatorilor ocazionali.<br/> Aresa: Str. Fagetului 5B , Cluj-Napoca, Cluj<br/> Telefon: 0264438171",
        "capacity": 80,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Faget",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_stil.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_stil1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_stil2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_stil3.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.733736, 23.588727&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111131,
        "title": "Hotel Stil - Restaurant Baroc",
        "description": "Restaurantul Stil are o capacitate de 80 de locuri si se afla in incinta hotelului, adresandu-se atat oaspetilor hotelului cat si vizitatorilor ocazionali.<br/> Aresa: Str. Fagetului 5B , Cluj-Napoca, Cluj<br/> Telefon: 0264438171",
        "capacity": 180,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Faget",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_baroc.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_baroc1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_baroc2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_baroc3.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.733736, 23.588727&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111132,
        "title": "Hotel Stil - Restaurant Royal",
        "description": "Atunci cand alegeti Stil puteti avea incredere ca noi intelegem nevoia de flexibilitate si si de atentie asupra detaliilor in organizarea oricarui tip de eveniment.<br/> Aresa: Str. Fagetului 5B , Cluj-Napoca, Cluj<br/> Telefon: 0264438171",
        "capacity": 180,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Faget",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_royal.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_royal1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_royal2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/stil_royal3.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.733736, 23.588727&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111133,
        "title": "Casa Universitarilor - Piramida",
        "description": "Va asteptam intr-o locatie deosebita aflata in centrul Clujului dispunand de o sala eleganta acoperita de o piramida de sticla, destinata atat clientilor de zi cu zi cat si organizarii de evenimente speciale: nunti, botezuri, petreceri Corporate.<br/> Aresa:  Str.Emmanuel de Martonne, Nr. 1 , Cluj-Napoca, Cluj<br/> Telefon: 0744251471",
        "capacity": 180,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Centru",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/piramida.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/piramida1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/piramida2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/piramida3.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.768067, 23.592933&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111134,
        "title": "City Plaza - Ballroom",
        "description": "Cu un design contemporan, un foaier generos si servicii cu stil, va asteptam sa va bucurati de momentul unic al nuntii voastre!<br/> Aresa:  Str. Sindicatelor, 9-13 , Cluj-Napoca, Cluj<br/> Telefon: 0264450101",
        "capacity": 200,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Centru",
        "images": [
                       
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.769733, 23.584120&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111135,
        "title": "City Plaza - Marco Polo",
        "description": "Restaurantul Marco Polo este locul perfect pentru o nunta intima, intr-o atmosfera calda si un decor clasic. <br/> Aresa:  Str. Sindicatelor, 9-13 , Cluj-Napoca, Cluj<br/> Telefon: 0264450101",
        "capacity": 120,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Centru",
        "images": [
                     
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.769733, 23.584120&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111136,
        "title": "Orizont",
        "description": "<br/> Aresa: Calea Turzii 203A, Cluj-Napoca, Cluj<br/> Telefon: 0745588257",
        "capacity": 400,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Buna Ziua",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/orizont.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/orizont1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/orizont2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/orizont3.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.749186, 23.593691&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111137,
        "title": "Hotel Pami",
        "description": "Alegerea si rezervarea salii de restaurant, reprezinta primul si cel mai important pas in organizarea unei nunti. Restaurantul Pami va pune la dispozitie una din cele mai moderne sali de nunti din Cluj–Napoca.<br/> Aresa: Calea Manastur,nr. 39, Cluj-Napoca, Cluj<br/> Telefon: 0264406333",
        "capacity": 200,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Manastur",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/pami.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/pami1.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/pami2.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/pami3.jpg"            
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.761306, 23.567164&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111138,
        "title": "Hotel Napoca - Grand Ballroom",
        "description": "Grand Hotel Napoca 4* va pune la dispozitie cele 5 saloane de restaurant pentru celebrarea de nunti, botezuri,aniversari sau banchete integral renovate si clasificate la standarde de 4*<br/> Aresa: strada Octavian Goga nr.1 , Cluj-Napoca, Cluj<br/> Telefon: 0733410172",
        "capacity": 900,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Grigorescu",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/napoca.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/napoca_g1.jpg",
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.771701, 23.576267&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111139,
        "title": "Hotel Napoca - Atena Ballroom",
        "description": "Grand Hotel Napoca 4* va pune la dispozitie cele 5 saloane de restaurant pentru celebrarea de nunti, botezuri,aniversari sau banchete integral renovate si clasificate la standarde de 4*<br/> Aresa: strada Octavian Goga nr.1 , Cluj-Napoca, Cluj<br/> Telefon: 0733410172",
        "capacity": 300,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Grigorescu",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/napoca.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/napoca_atena1.jpg",
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.771701, 23.576267&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111140,
        "title": "Hotel Napoca - Roma Ballroom",
        "description": "Grand Hotel Napoca 4* va pune la dispozitie cele 5 saloane de restaurant pentru celebrarea de nunti, botezuri,aniversari sau banchete integral renovate si clasificate la standarde de 4*<br/> Aresa: strada Octavian Goga nr.1 , Cluj-Napoca, Cluj<br/> Telefon: 0733410172",
        "capacity": 580,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Grigorescu",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/napoca.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/napoca_r1.jpg",
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.771701, 23.576267&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111141,
        "title": "Hotel Napoca - Atrium Ballroom",
        "description": "Grand Hotel Napoca 4* va pune la dispozitie cele 5 saloane de restaurant pentru celebrarea de nunti, botezuri,aniversari sau banchete integral renovate si clasificate la standarde de 4*<br/> Aresa: strada Octavian Goga nr.1 , Cluj-Napoca, Cluj<br/> Telefon: 0733410172",
        "capacity": 290,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Grigorescu",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/napoca.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/napoca_atrium1.jpg",
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.771701, 23.576267&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111142,
        "title": "Hotel Napoca - Forum Ballroom",
        "description": "Grand Hotel Napoca 4* va pune la dispozitie cele 5 saloane de restaurant pentru celebrarea de nunti, botezuri,aniversari sau banchete integral renovate si clasificate la standarde de 4*<br/> Aresa: strada Octavian Goga nr.1 , Cluj-Napoca, Cluj<br/> Telefon: 0733410172",
        "capacity": 250,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Grigorescu",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/napoca.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/napoca_f1.jpg",
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.771701, 23.576267&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111143,
        "title": "Hotel Napoca - Ambasador Ballroom",
        "description": "Grand Hotel Napoca 4* va pune la dispozitie cele 5 saloane de restaurant pentru celebrarea de nunti, botezuri,aniversari sau banchete integral renovate si clasificate la standarde de 4*<br/> Aresa: strada Octavian Goga nr.1 , Cluj-Napoca, Cluj<br/> Telefon: 0733410172",
        "capacity": 120 ,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Grigorescu",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/napoca.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/600315\/napoca_ambasador1.jpg",
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.771701, 23.576267&sensor=false&maptype=roadmap"
    }
    
];
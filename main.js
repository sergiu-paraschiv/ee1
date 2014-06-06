var DATA_CONFIG = {
    INTRO_LENGTH: 7000,
    CONTACT_URL: 'http://www.estudioespana.ro/shop/en/contact-us',
    
    INTRO_IMAGE: 'https://rawgit.com/sergiu-paraschiv/ee1/data/intro.gif',
    BANNER_IMAGE: 'images/banner.jpg',
    BANNER_LINK: 'http://www.estudioespana.ro/'
};

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
            "https://lh6.googleusercontent.com/-Us5odhbSViQ/U3NZwWD5JrI/AAAAAAAAAK0/PjPzmMNHuMs/s800/davinci.jpg",
            "https://lh6.googleusercontent.com/-fr3irOG80rk/U3MwGEui9uI/AAAAAAAAACI/Wt8npmFi1Ak/s400/davinci1.jpg",
            "https://lh3.googleusercontent.com/-Px7Ky0H22Mg/U3MwGwycxQI/AAAAAAAAACQ/aZYEy9xMZsg/s400/davinci2.jpg",
            "https://lh6.googleusercontent.com/-JZt6TPWDZ7M/U3MwHQHdxNI/AAAAAAAAACY/ZFQ5YKZILYc/s400/davinci3.jpg"

        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=predeal,cluj-napoca,cluj&zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.753007, 23.611109&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111112,
        "title": "Grand Hotel Italia",
        "description": "Grand Hotel Italia este locul ideal pentru a celebra un moment atat de frumos din viata Dumneavoastra precum este ziua nuntii.Eleganta spatiilor interioare si exterioare vor transforma acest eveniment intr-unul de neuitat. Impactul nu va fi doar unul estetic dar si unul senzorial dirijat de ultimele tendinte ale culturii gastronomice moderne. Competenta si profesionalismul personalului sunt garantia succesului nuntii Dumneavoastra.<br/> Aresa: Strada Trifoiului 2<br/> Telefon:0364111333",
        "capacity": 400,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Buna Ziua",
        "images": [
            "https://lh6.googleusercontent.com/-8zRgP8smkyY/U3NZzeSdkTI/AAAAAAAAALU/x4vNOGyH-vc/s800/grand.jpg",
            "https://lh3.googleusercontent.com/-sLWPMqnA_Zc/U3MwH6l4SAI/AAAAAAAAACg/C5Ct1L30QoU/s400/grand1.jpg",
            "https://lh5.googleusercontent.com/-HQ4fwhttyik/U3MwIdI4ZCI/AAAAAAAAACo/KpzvLwlA__4/s400/grand2.jpg",
            "https://lh4.googleusercontent.com/-P9phh-z2KHk/U3MwJTIHYKI/AAAAAAAAACw/OmbDWcY7KiQ/s400/grand3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=vulcan,cluj-napoca,cluj&zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.752714, 23.606046&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111112,
        "title": "Restaurant View",
        "description": "View Restaurant & Ballroom este o locatie unica in Cluj-Napoca, oferind o panorama superba clientilor sai. Indiferent de anotimp, poti admira zi si noapte intregul oras chiar din mijlocul lui, privelistea fiind deosebita.<br/> Aresa: Piata Mihai Viteazul, Multiplex Leul, etaj 7<br/> Telefon:0755120005 ",
        "capacity": 250,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Centru",
        "images": [
            "https://lh4.googleusercontent.com/-v6KbjRXAwqs/U3NaA8nJ4iI/AAAAAAAAANI/115T_H8n-XU/s800/view.jpg",
            "https://lh4.googleusercontent.com/-dfqnanNBtkw/U3MwLNGcf2I/AAAAAAAAAC4/KmGbRaWJW6g/s400/view1.jpg",
            "https://lh3.googleusercontent.com/-O-6wBrDM9kk/U3MwL-4srOI/AAAAAAAAADA/vTK5FLGx26s/s400/view2.jpg",
            "https://lh6.googleusercontent.com/-uv2AED6pyH8/U3MwMnAQhEI/AAAAAAAAADI/eZtKfZ0QWuM/s400/view3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh5.googleusercontent.com/-SnwsBNwqoi4/U3NZxKAtNhI/AAAAAAAAALE/8mR-p-pLU7c/s800/coratim.jpg",
            "https://lh5.googleusercontent.com/-XgIK6BvMoGI/U3MwDCl94gI/AAAAAAAAABg/up4mrz-5UUs/s400/coratim1.jpg",
            "https://lh6.googleusercontent.com/-DzFoLPZcuig/U3MwCWyl1HI/AAAAAAAAABY/_pzZ9Mj6-hQ/s400/coratim2.jpg",
            "https://lh6.googleusercontent.com/-fXzYuKxmUis/U3MwD5w_SuI/AAAAAAAAABs/JdRXfQKvO_U/s400/coratim3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=rasaritului,cluj-napoca,cluj&zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.785835, 23.607852&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111114,
        "title": "Farmec",
        "description": " FARMEC PREMIUM BALLROOM situat în Cluj-Napoca pe strada Bucuresti, este o îmbinare perfecta între eleganta, stil, rafinament si modernitate. Arhitectura unica a cladirii, detaliile pe care designerul a avut grija sa le puna în valoare atât în exterior cât si în interiorul restaurantului, atmosfera glamour, calda, relaxanta si primitoare, te fac sa te simti pe tarâm de basm.<br/> Aresa: Str.Bucuresti 55A, Cluj-Napoca, Cluj<br/> Telefon: 0745133960",
        "capacity": 290,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Marasti",
        "images": [
            "https://lh4.googleusercontent.com/-aFpzk9X2-tA/U3NZw135jUI/AAAAAAAAAK4/ERD3vLP8wTU/s800/farmec.jpg",
            "https://lh6.googleusercontent.com/-QYmJvxqykjw/U3MwM2XHEjI/AAAAAAAAADQ/SDUgk3gM9d4/s400/farmec1.jpg",
            "https://lh6.googleusercontent.com/-lO8pVMFz8sQ/U3MwNgwI5MI/AAAAAAAAADY/WJ4ED7P1qx0/s400/farmec2.jpg",
            "https://lh6.googleusercontent.com/-2OOZq7RThac/U3MwOcRNZUI/AAAAAAAAADg/b8l0e0yTw_o/s400/farmec3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh3.googleusercontent.com/--sCFYaVx7PY/U3NZ77xkbcI/AAAAAAAAAMs/gIUeJN_e980/s400/safir.jpg",
            "https://lh5.googleusercontent.com/-0_yhm0UtxGc/U3MwPIHN3GI/AAAAAAAAADo/zlBCCWPAJaI/s400/safir1.jpg",
            "https://lh3.googleusercontent.com/-nBfwx-_ceaY/U3MwPnRRu4I/AAAAAAAAADw/FspmW5gB2Bk/s400/safir2.jpg",
            "https://lh6.googleusercontent.com/-ehi5Opr3P8I/U3MwQTIZjHI/AAAAAAAAAD4/n9C2S43J0TQ/s400/safir3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh4.googleusercontent.com/-cfhuh3Tk2w4/U3NZ7AmY24I/AAAAAAAAAMg/ec1JGTCWWH0/s800/segra.jpg",
            "https://lh5.googleusercontent.com/-Xy-aQ7J8Ozo/U3MwRiCvWTI/AAAAAAAAAEI/kv3Xun043LE/s400/segra1.jpg",
            "https://lh6.googleusercontent.com/-6j0oalF4LUY/U3MwST8JvtI/AAAAAAAAAEU/oZcC7fWCLDU/s400/segra2.jpg",
            "https://lh5.googleusercontent.com/-GKdI26t0F8I/U3MwEzS2kbI/AAAAAAAAAB4/PjdRVLBuL34/s400/segra3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh6.googleusercontent.com/-4a8BmKpamC8/U3nDHHTMgqI/AAAAAAAAAOU/tQ5-_zB0L34/s800/no_image.jpg"

        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh3.googleusercontent.com/-xSi35PiEw58/U3NZq6r8EqI/AAAAAAAAAKQ/JIdNs9q5WUQ/s800/agape.jpg",
            "https://lh3.googleusercontent.com/-b9Rxq1fhhIs/U3MwS3NcRFI/AAAAAAAAAEc/4S-bbP58Od0/s400/agape1.jpg",
            "https://lh4.googleusercontent.com/-oy__H1ROfcA/U3MwTXxDkEI/AAAAAAAAAEg/GZDGaOwxxpM/s400/agape2.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh6.googleusercontent.com/-4a8BmKpamC8/U3nDHHTMgqI/AAAAAAAAAOU/tQ5-_zB0L34/s800/no_image.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=novac,cluj-napoca,cluj&zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.763871, 23.598869&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111121,
        "title": "Aimee",
        "description": "Sala de nunta este locul ideal pentru a celebra un moment atat de frumos din viata Dumneavoastra precum este ziua nuntii. Eleganta spatiilor interioare si exterioare vor transforma acest eveniment intr-unul de neuitat. Impactul nu va fi doar unul estetic dar si unul senzorial dirijat de ultimele tendinte ale culturii gastronomice moderne. Competenta si profesionalismul personalului sunt garantia succesului nuntii Dumneavoastra.<br/> Aresa: Str. Avram Iancu nr. 418, Cluj-Napoca, Cluj<br/> Telefon: 0740643243",
        "capacity": 150,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Floresti",
        "images": [
            "https://lh6.googleusercontent.com/-A5UPEenpcds/U3NZvB4i32I/AAAAAAAAAKg/xe1zQKCRZsE/s800/aimee.jpg",
            "https://lh3.googleusercontent.com/-w1C6GVKSaG0/U3MwTzvcy2I/AAAAAAAAAEo/qSe_ics8qGs/s400/aimee1.jpg",
            "https://lh6.googleusercontent.com/-zSJuZnSenFw/U3MwUm3MRcI/AAAAAAAAAEw/DRjua7x7JnA/s400/aimee2.jpg",
            "https://lh6.googleusercontent.com/-2zPbBQ4o108/U3MwVChajaI/AAAAAAAAAE4/QppIEwJFV6M/s400/aimee3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=14&size=500x500&maptype=roadmap&markers=color:red|label:R|46.751035, 23.521513&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111122,
        "title": "Vila Rosa",
        "description": "Vila Rosa organizeaza mese festive, seminarii, conferin?e, nun?i, botezuri, evenimente de zi ?i catering cu servicii de calitate irepro?abila.<br/> Aresa: Str. Frunzisului nr. 4, Cluj-Napoca, Cluj<br/> Telefon: 0747111961",
        "capacity": 50,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Manastur",
        "images": [
            "https://lh5.googleusercontent.com/-YcDsPQo95r8/U3NZ5hqP_ZI/AAAAAAAAAMU/nQnxuBne6Cs/s800/rosa.jpg",
            "https://lh4.googleusercontent.com/-DVlMh_S0CqE/U3MwV2KxVoI/AAAAAAAAAFA/_9c-T86vjks/s400/rosa1.jpg",
            "https://lh3.googleusercontent.com/-VDGoVvDSb8Q/U3MwWee-vwI/AAAAAAAAAFI/QTm7ci17Rr8/s400/rosa2.jpg",
            "https://lh4.googleusercontent.com/-85rnfLCU4M8/U3MwXKJYHHI/AAAAAAAAAFQ/CS85qhoCHFE/s400/rosa3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh3.googleusercontent.com/-6OGrgwSTy_M/U3MwYe_WB7I/AAAAAAAAAFg/UzoJhifQjcw/s400/alexgeorge.jpg",
            "https://lh6.googleusercontent.com/-FhkVbyqwDx4/U3MwXpmghdI/AAAAAAAAAFc/S4fPaBbaIcI/s400/alexgeorge1.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh3.googleusercontent.com/-P7CSK1A2pZg/U3NZzvGVjkI/AAAAAAAAALY/rWR_vpD1Xq0/s800/luxe.jpg",
            "https://lh5.googleusercontent.com/-fTPVok3tjBY/U3MwY8qyf4I/AAAAAAAAAFo/XNykn9lRaM4/s400/luxe1.jpg",
            "https://lh6.googleusercontent.com/-QOSqU89LvAA/U3MwZYN1ipI/AAAAAAAAAFw/tBrRUHFv7ig/s400/luxe2.jpg",
            "https://lh3.googleusercontent.com/-baqUl3MeG4w/U3MwaBwrCjI/AAAAAAAAAF4/mxbEQxhp5FY/s400/luxe3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh5.googleusercontent.com/-ay2x1gBXqkw/U3NZuBG5BpI/AAAAAAAAAKY/DjS7IW6LCxI/s800/chicago.JPG",
            "https://lh3.googleusercontent.com/-7UT9MVicS38/U3Mwa5OkSuI/AAAAAAAAAGA/c23tCmTkb0s/s400/chicago1.jpg",
            "https://lh4.googleusercontent.com/-lLvrAFcQT1Y/U3MwEQH_uOI/AAAAAAAAABw/jZH218rFZG8/s400/chicago2.jpg",
            "https://lh3.googleusercontent.com/-IZcGOe3c5KI/U3Mv90VYkzI/AAAAAAAAAAg/89220p_LONs/s400/chicago3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh4.googleusercontent.com/-A8tymQQ-SaU/U3NZ3OyAiXI/AAAAAAAAALo/dfhfvAjtQBo/s800/olimp.jpg",
            "https://lh5.googleusercontent.com/-OmroohsT2vw/U3Mwbe-QpVI/AAAAAAAAAGI/35I2CS5VMjs/s400/olimp1.jpg",
            "https://lh3.googleusercontent.com/-mCeGWQpmNRo/U3MwbyZIoRI/AAAAAAAAAGQ/ELQoKyXAUw0/s400/olimp2.jpg",
            "https://lh3.googleusercontent.com/-X7aop4XMFAE/U3MwclbNPKI/AAAAAAAAAGc/SKRQ1G2uCmk/s400/olimp3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.755204, 23.585074&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111127,
        "title": "Sunny Hill",
        "description": "Restaurant Sunny Hill Cluj, amplasat in inima padurii Faget la numai 2 km de soseaua Europeana E-60, Cluj-Bucuresti si la numai cateva minute de Gradina Botanica-CLUJ si Centrul Istoric al orasului CLUJ -NAPOCA, va pune la dispozitie mai multe variante pentru nunta dumneavoastra.<br/> Aresa: Strada Fagetului, nr. 31A , Cluj-Napoca, Cluj<br/> Telefon: 0264480325",
        "capacity": 350,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Faget",
        "images": [
            "https://lh3.googleusercontent.com/-RLiAofkHq1A/U3SJM6Uvb1I/AAAAAAAAAN4/cbpLLvTTRyE/s400/sunny.JPG",
            "https://lh5.googleusercontent.com/-BURLnQtLvlc/U3SJKaAHD0I/AAAAAAAAANg/xjSMzo0q-VU/s400/sunny1.jpg",
            "https://lh5.googleusercontent.com/-fu2fVWDBj0o/U3SJLNrEStI/AAAAAAAAANo/jsmt_Ltog_w/s400/sunny2.jpg",
            "https://lh4.googleusercontent.com/-LW4Q2xgDJyI/U3SJL0RwmxI/AAAAAAAAANw/DiWphXQjLx8/s400/sunny3.jpg"

        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh4.googleusercontent.com/-OOuLaUXnmQk/U3NZ6HPY9iI/AAAAAAAAAMY/gCajpt-_zWE/s800/royal.jpg",
            "https://lh4.googleusercontent.com/-Ys_-tda-nQ0/U3MwAU1XIYI/AAAAAAAAABA/x8xlN7amyUg/s800/royal1.jpg",
            "https://lh5.googleusercontent.com/-vO158EIOC8g/U3MwBDyJe2I/AAAAAAAAABI/7zUlm1LiUi4/s400/royal2.jpg",
            "https://lh4.googleusercontent.com/-5PYzzpKs_0Y/U3MwB2UVhpI/AAAAAAAAABQ/IgLHJZd5kSg/s400/royal3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh4.googleusercontent.com/-h3ia8SZUwM0/U3NZ8V1nlfI/AAAAAAAAAMw/xzsJGEgwEQA/s800/stil_baroc.jpg",
            "https://lh3.googleusercontent.com/-QQa-TQU0Ww4/U3MwhYXubpI/AAAAAAAAAHQ/rQp0-aVC_J8/s400/stil_madrigal1.jpg",
            "https://lh3.googleusercontent.com/-s7oGPRcL7ew/U3Mwh7IAU7I/AAAAAAAAAHY/0PaiTAuGEjQ/s400/stil_madrigal2.jpg",
            "https://lh5.googleusercontent.com/-CaaOOxRgMYw/U3Mwiui7pgI/AAAAAAAAAHk/hzC-VrNb5d8/s400/stil_madrigal3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh4.googleusercontent.com/-h3ia8SZUwM0/U3NZ8V1nlfI/AAAAAAAAAMw/xzsJGEgwEQA/s800/stil_baroc.jpg",
            "https://lh3.googleusercontent.com/-anHenf11mcw/U3MwkYZWBYI/AAAAAAAAAH8/h3dNOlJEKDc/s400/stil_stil1.jpg",
            "https://lh4.googleusercontent.com/-_nOaIBu0Tlw/U3Mwk45Vk7I/AAAAAAAAAIE/rqPwGLsOxG4/s400/stil_stil2.jpg",
            "https://lh6.googleusercontent.com/-VRIef23qWX4/U3MwlCiK0vI/AAAAAAAAAII/q4wl6bjjZMc/s400/stil_stil3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh4.googleusercontent.com/-h3ia8SZUwM0/U3NZ8V1nlfI/AAAAAAAAAMw/xzsJGEgwEQA/s800/stil_baroc.jpg",
            "https://lh3.googleusercontent.com/-R69MKvK7UKU/U3Mwe_-UrZI/AAAAAAAAAG4/1gEu94IWp-E/s400/stil_baroc1.jpg",
            "https://lh5.googleusercontent.com/-TCq1Xa91Qww/U3MwfsenZJI/AAAAAAAAAHA/JT0Cia_D7uk/s400/stil_baroc2.jpg",
            "https://lh5.googleusercontent.com/-rtYxUpsHsSQ/U3MwgpQLXGI/AAAAAAAAAHM/6mVW95al4ok/s400/stil_baroc3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh4.googleusercontent.com/-h3ia8SZUwM0/U3NZ8V1nlfI/AAAAAAAAAMw/xzsJGEgwEQA/s800/stil_baroc.jpg",
            "https://lh6.googleusercontent.com/-31zjdWgFt6U/U3MwjA0GXcI/AAAAAAAAAHo/m7UU0G-ZISc/s400/stil_royal1.jpg",
            "https://lh6.googleusercontent.com/-4vU_YCpM5Zo/U3MwjkxIglI/AAAAAAAAAHw/ybjadRr7jpg/s400/stil_royal2.jpg",
            "https://lh5.googleusercontent.com/-fl9pGKc2-W8/U3MwFtXXOvI/AAAAAAAAACA/nlonKy9Sfz4/s400/stil_royal3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.733736, 23.588727&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111133,
        "title": "Casa Universitarilor - Piramida",
        "description": "Va asteptam intr-o locatie deosebita aflata in centrul Clujului dispunand de o sala eleganta acoperita de o piramida de sticla, destinata atat clientilor de zi cu zi cat si organizarii de evenimente speciale: nunti, botezuri, petreceri Corporate.<br/> Aresa: Str.Emmanuel de Martonne, Nr. 1 , Cluj-Napoca, Cluj<br/> Telefon: 0744251471",
        "capacity": 180,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Centru",
        "images": [
            "https://lh5.googleusercontent.com/-adgTAcOaoDE/U3NZ5PVptjI/AAAAAAAAAMM/oOEIoXDPezo/s800/piramida.jpg",
            "https://lh3.googleusercontent.com/-Xcu4hwqa4mk/U3MwluWVxRI/AAAAAAAAAIQ/xZ3Z9gmkCk4/s400/piramida1.jpg",
            "https://lh6.googleusercontent.com/-xWe_D0lBa_o/U3Mwmdd5URI/AAAAAAAAAIY/IKIcrapoZZo/s400/piramida2.jpg",
            "https://lh4.googleusercontent.com/-Kk6FnBMzMO0/U3MwnMtwyPI/AAAAAAAAAIg/_8F6_-xtqxE/s400/piramida3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.768067, 23.592933&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111134,
        "title": "City Plaza - Ballroom",
        "description": "Cu un design contemporan, un foaier generos si servicii cu stil, va asteptam sa va bucurati de momentul unic al nuntii voastre!<br/> Aresa: Str. Sindicatelor, 9-13 , Cluj-Napoca, Cluj<br/> Telefon: 0264450101",
        "capacity": 200,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Centru",
        "images": [
            "https://lh6.googleusercontent.com/-4a8BmKpamC8/U3nDHHTMgqI/AAAAAAAAAOU/tQ5-_zB0L34/s800/no_image.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.769733, 23.584120&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111135,
        "title": "City Plaza - Marco Polo",
        "description": "Restaurantul Marco Polo este locul perfect pentru o nunta intima, intr-o atmosfera calda si un decor clasic. <br/> Aresa: Str. Sindicatelor, 9-13 , Cluj-Napoca, Cluj<br/> Telefon: 0264450101",
        "capacity": 120,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Centru",
        "images": [
            "https://lh6.googleusercontent.com/-4a8BmKpamC8/U3nDHHTMgqI/AAAAAAAAAOU/tQ5-_zB0L34/s800/no_image.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh4.googleusercontent.com/-YSCU9E66zaY/U3NZ4NEkYlI/AAAAAAAAAL8/sKaBtMAHt3I/s800/orizont.jpg",
            "https://lh6.googleusercontent.com/-gshENfRfPEA/U3Mv_AlGMaI/AAAAAAAAAAw/NpAwtKGu5AY/s800/orizont1.jpg",
            "https://lh3.googleusercontent.com/-wVTnBEu8_o8/U3Mv_wnI66I/AAAAAAAAAA4/2S2HZ87xMJ0/s800/orizont2.jpg",
            "https://lh6.googleusercontent.com/-LshyWHNP11k/U3Mv-VA9xpI/AAAAAAAAAAo/Vfl9rRBxEDI/s800/orizont3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh4.googleusercontent.com/-4Yrt4T6AuXU/U3NZ4qi-IMI/AAAAAAAAAME/fcp_2aLYfXk/s400/pami.jpg",
            "https://lh4.googleusercontent.com/-nk7oSmzYkak/U3Mwpmg6AJI/AAAAAAAAAJA/ukmZ7ig2Gd4/s400/pami1.jpg",
            "https://lh3.googleusercontent.com/-z3V5ZfDE1EM/U3MwqekyjLI/AAAAAAAAAJI/m4afUY7hFoc/s400/pami2.jpg",
            "https://lh6.googleusercontent.com/-zwtWfoVQL1U/U3MwrIuWH-I/AAAAAAAAAJQ/D3IPqD8__bE/s400/pami3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh5.googleusercontent.com/-0u1AAZgPLWc/U3NZ0FHVAJI/AAAAAAAAALg/gPzOfdOp3Hc/s800/napoca.jpg",
            "https://lh4.googleusercontent.com/-Cgh9JGtPA0A/U3MwuPBEC8I/AAAAAAAAAJ4/hrPJaP_AmHI/s400/napoca_g1.jpg",
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh5.googleusercontent.com/-0u1AAZgPLWc/U3NZ0FHVAJI/AAAAAAAAALg/gPzOfdOp3Hc/s800/napoca.jpg",
            "https://lh6.googleusercontent.com/-L-BAXuRgGuo/U3MwsTEt3YI/AAAAAAAAAJg/qt9Co7VTBs0/s400/napoca_atena1.jpg",
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh5.googleusercontent.com/-0u1AAZgPLWc/U3NZ0FHVAJI/AAAAAAAAALg/gPzOfdOp3Hc/s800/napoca.jpg",
            "https://lh6.googleusercontent.com/-M8qdPtkVKWc/U3Mwu0w3tQI/AAAAAAAAAKA/0HG2RpcDcU0/s400/napoca_r1.jpg",
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh5.googleusercontent.com/-0u1AAZgPLWc/U3NZ0FHVAJI/AAAAAAAAALg/gPzOfdOp3Hc/s800/napoca.jpg",
            "https://lh3.googleusercontent.com/-YsO-YHFDYB4/U3Mws3B4PgI/AAAAAAAAAJo/cQfYKn56vfk/s400/napoca_atrium1.jpg",
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh5.googleusercontent.com/-0u1AAZgPLWc/U3NZ0FHVAJI/AAAAAAAAALg/gPzOfdOp3Hc/s800/napoca.jpg",
            "https://lh5.googleusercontent.com/-m1SX5SEDUvA/U3MwtnyHuRI/AAAAAAAAAJw/hU4ipPnYjSo/s400/napoca_f1.jpg",
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
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
            "https://lh5.googleusercontent.com/-0u1AAZgPLWc/U3NZ0FHVAJI/AAAAAAAAALg/gPzOfdOp3Hc/s800/napoca.jpg",
            "https://lh6.googleusercontent.com/-XtIpvOUhPXw/U3MwrhlwcQI/AAAAAAAAAJY/uSpTKZVcLJk/s400/napoca_ambasador1.jpg",
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.771701, 23.576267&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111144,
        "title": "Salon Sofia",
        "description": "In viata fiecarui om exista momente speciale care merita sarbatorite alaturi de cei dragi, si care raman in amintire pentru totdeauna. Pentru astfel de evenimente, Salon Sofia va pune la dispozitie in Cluj-Napoca o sala moderna si eleganta, unde acordam insemnatatea si atentia cuvenita fiecarui eveniment si promitem transformarea lui intr-un succes.<br/> Aresa: Str. Fabricii nr. 76 , Cluj-Napoca, Cluj<br/> Telefon: 0740593158",
        "capacity": 300 ,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Marasti",
        "images": [
            "https://lh3.googleusercontent.com/-ELgeGvGYNQU/U3nHlsAL_YI/AAAAAAAAAQs/seg_csQkY3A/s400/sofia.JPG",
            "https://lh5.googleusercontent.com/-phtR1984LzQ/U3nHl7GsAkI/AAAAAAAAAQo/DBMa82zc5UQ/s400/sofia1.JPG",
            "https://lh4.googleusercontent.com/-jc294WDQcpA/U3nHmrzA80I/AAAAAAAAAR8/I7pC1THRyyw/s400/sofia2.JPG",
            "https://lh4.googleusercontent.com/-STCKz0-vUQ8/U3nHm2LruQI/AAAAAAAAASE/Nr9LhfufPZs/s640/sofia3.JPG",
            "https://lh4.googleusercontent.com/-jc294WDQcpA/U3nHmrzA80I/AAAAAAAAAR8/I7pC1THRyyw/s800/sofia2.JPG"

        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.788594, 23.615074&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111145,
        "title": "Imperial Ballroom",
        "description": "Designul deosebit al salonului, cu o receptie unica foarte spatioasa si eleganta, curtea interioara in care verdele este culoarea predominanta, parcarea proprie cat si profesionalismul personalului fac din restaurant Imperial Ballroom locatia ideala pentru evenimente unice in viata dumneavoastra.<br/> Aresa: Str. Timisului, Nr. 3, Cluj-Napoca, Cluj<br/> Telefon: 0754279131",
        "capacity": 250 ,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Marasti",
        "images": [
            "https://lh5.googleusercontent.com/-Jb-hKKDLhlY/U3nHf0kwtJI/AAAAAAAAAPU/nNdY28Kjvgc/s640/imperial.jpg",
            "https://lh3.googleusercontent.com/-dMLtg7Zsl8c/U3nHgNG1hnI/AAAAAAAAAO8/DeUvLFl7mEQ/s640/imperial1.jpg",
            "https://lh4.googleusercontent.com/-QSlBaGf9cGE/U3nHgpPQJWI/AAAAAAAAAPQ/QGJKPtD_q-M/s400/imperial2.jpg",
            "https://lh6.googleusercontent.com/-Otcpk_XVuIU/U3nHgoZKE9I/AAAAAAAAAPI/2oODdL9S1HM/s400/imperial3.jpg"

        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.784032, 23.640761&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111146,
        "title": "Pedagogic",
        "description": "Cu o experienta de peste 15 ani în organizarea nuntilor, Sala de nunti Pedagogic, din Cluj - Napoca, vine în întâmpinarea dumneavoastra cu un pachet bogat de servicii.<br/> Aresa: str. Al. Vaida Voevod nr.55, Cluj-Napoca, Cluj<br/> Telefon: 0740243747",
        "capacity": 300 ,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Gheorgheni",
        "images": [
            "https://lh4.googleusercontent.com/-8FWMeuJ80cA/U3nHjHpmVRI/AAAAAAAAAPw/C2wi6o3AOmc/s400/pedagogic.jpg",
            "https://lh3.googleusercontent.com/-IkhkdYTGx_4/U3nHjfLk1_I/AAAAAAAAAP4/kDkp6gDVBKA/s400/pedagogic1.jpg",
            "https://lh3.googleusercontent.com/-kMzyPgSkVQQ/U3nHjpM__II/AAAAAAAAARA/gveTeGBotUU/s400/pedagogic2.jpg",
            "https://lh5.googleusercontent.com/-e7S8xtHZAn4/U3nHj5rA4eI/AAAAAAAAAP8/2liZBFNKwcc/s400/pedagogic3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.771666,23.628972&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111147,
        "title": "Talisman",
        "description": "Sarbatoriti momente importante din viata dumneavoastra la Sala Talisman!Scopul salii noastre de nunti este de a facilita clientilor nostri transformarea evenimentelor in amintiri de neuitat. <br/> Aresa: str.Observator nr. 109, Cluj-Napoca, Cluj<br/> Telefon: 0751059002",
        "capacity": 350 ,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Zorilor",
        "images": [
            "https://lh5.googleusercontent.com/-Km4vxQr-Oxc/U3nHo8fQqEI/AAAAAAAAARc/nFULa3_w9ug/s400/talisman.jpg",
            "https://lh4.googleusercontent.com/-G4l9zDmOHe4/U3nHpRXFoVI/AAAAAAAAARk/w4UAaHmYc3A/s400/talisman1.jpg",
            "https://lh5.googleusercontent.com/-c--8W479KhQ/U3nHpgRtFpI/AAAAAAAAARo/R1OgRr8fQYo/s400/talisman2.jpg",
            "https://lh6.googleusercontent.com/-4haEEhcDTuY/U3nHqA8UJTI/AAAAAAAAAR4/NeCcT6Piap4/s400/talisman3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=16&size=500x500&maptype=roadmap&markers=color:red|label:R|46.754136, 23.584892&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111148,
        "title": "Restaurant Mures",
        "description": "Beneficiind de bucatarie proprie, echipata complet cu utilaje profesionale de ultima generatie, de personal calificat cu mare experienta in domeniu Restaurantul Mures poate satisface cele mai exigente gusturi in materie de preparate culinare. <br/> Aresa: Strada Corneliu Coposu 172, Cluj-Napoca, Cluj<br/> Telefon: 0755106645",
        "capacity": 400 ,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Dâmbul Rotund",
        "images": [
            "https://lh4.googleusercontent.com/-0mynfJ0PSxo/U3nHhkIwJII/AAAAAAAAASI/2s9b9Hb7ZlQ/s400/mures.jpg",
            "https://lh4.googleusercontent.com/-MFw1IMz1FaU/U3nHh9Wz1WI/AAAAAAAAASI/vFbYw5FO_ZU/s400/mures1.jpg",
            "https://lh3.googleusercontent.com/-pdK-a3k8puI/U3nHiccMeQI/AAAAAAAAASI/my8q_07RKHU/s400/mures2.jpg",
            "https://lh6.googleusercontent.com/-ZgGabStxdoU/U3nHiy21xzI/AAAAAAAAASI/FgBRkz9NLQ8/s400/mures3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=15&size=500x500&maptype=roadmap&markers=color:red|label:R|46.784369, 23.559564&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111149,
        "title": "Hotel Premier",
        "description": "Pentru o receptie de neuitat, fie ca e o petrecere aniversara, o nunta sau un business cocktail, COMPLEXUL HOTELIER PREMIER va poate oferi tot ceea ce aveti nevoie. <br/> Aresa: Str. Donath, Nr 100, Cluj-Napoca, Cluj<br/> Telefon: 0748233335",
        "capacity": 200 ,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Grigorescu",
        "images": [
            "https://lh6.googleusercontent.com/-bRWhyVI-B6o/U3nHkNN4HEI/AAAAAAAAAQU/tYIdSxGIUIg/s400/premier.jpg",
            "https://lh5.googleusercontent.com/-8XEMDOGXixc/U3nHkTk27aI/AAAAAAAAAQI/AHU34n2uoy8/s400/premier1.jpg",
            "https://lh3.googleusercontent.com/-uP68HP-4tMw/U3nHlBclvHI/AAAAAAAAAQY/lT5GIqu53Tk/s400/premier2.jpg",
            "https://lh6.googleusercontent.com/-3K_kNJG97C8/U3nHlaAPBKI/AAAAAAAAAQc/RFnTT-cmr9c/s800/premier3.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=16&size=500x500&maptype=roadmap&markers=color:red|label:R|46.771098, 23.552023&sensor=false&maptype=roadmap"
    },
    {
        "id": 1111111150,
        "title": "Bonjour",
        "description": "Restaurant Bonjour este locul perfect pentru organizarea celor mai rafinate evenimente, de la mese festive, nunti si botezuri, la aniversari, reuniuni sau intalniri de afaceri sau corporate. <br/> Aresa:Str. Costache Negri nr. 1, Cluj-Napoca, Cluj<br/> Telefon: 0748777204",
        "capacity": 170 ,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Buna Ziua",
        "images": [
            "https://lh5.googleusercontent.com/-s0Kgymb6hOE/U3nHfJIv2zI/AAAAAAAAAOo/OtjdoZ6YSYQ/s400/bonjour1.jpg",
            "https://lh5.googleusercontent.com/-s0Kgymb6hOE/U3nHfJIv2zI/AAAAAAAAAOo/OtjdoZ6YSYQ/s400/bonjour1.jpg",
            "https://lh5.googleusercontent.com/-j5cvMEe5Ies/U3nHfOkHnRI/AAAAAAAAAO4/QSu3Zi0dEMA/s400/bonjour2.jpg"
        ],
        "mapLink" : "https://www.google.com/maps/@46.3533379,24.4217063,10z",
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?zoom=16&size=500x500&maptype=roadmap&markers=color:red|label:R|46.749212, 23.603812&sensor=false&maptype=roadmap"
    }

];
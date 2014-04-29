var DATA_ADDRESSES = [
    {
        name: 'Cluj',
        children: [
            {
                name: 'Cluj-Napoca',
                children: [
                    'Floresti',
                    'Centru'
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
        "id": 4614412,
        "title": "Ansamblu de locuinte - Floresti - apartamente 2 si 3 camere",
        "description": "Ansamblu de locuinte - Floresti central - Direct de la constructor - apartamente 2 camere - 22.000 euro; apartamente 3 camere - de la 23.500 euro. Apartamentele se predau semifinisate, cu centrala termica si calorifere, in glet, cu posibilitate de achizitionare si garaj sub bloc sau loc de parcare.",
        "capacity": 550,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Floresti",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/600315\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/599905\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.746914546398,23.49390310669&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 811806,
        "title": "PHP Rent a Car",
        "description": "<b>www.phprentcar.ro<\/b> - Inchirieri AUTOTURISME (* economy * compact * premium * luxury), MICROBUZE, AUTOUTILITARE, peste 100 de automobile noi - Cluj-Napoca, Sibiu, Baia Mare, Targu Mures, Alba Iulia)",
        "capacity": 70,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/139221\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4807025,
        "title": "Vand ap. 2 camere, Micro 3, zona excelenta",
        "description": "Vand apartament 2 cam in Micro 3, etajul 3 din 4, 53 mp, finisat, parchet, gresie, faianta, usa antiefractie, geamuri termopan, centrala termica, contoare apa, contoare gaz. Pret negociabil. Zona excelenta, linistita, aproape de piata. Trimit poze pe email.",
        "capacity": 830,
        "county": "Cluj",
        "city": "Turda",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/319741\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.556583963715,23.816047138215&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4952457,
        "title": "Casa in Sighisoara in Centru zona A",
        "description": "Casa este situata in centrul orasului, zona A cu vedere la cetatea medievala. Casa se compune din : DEMISOL ( pivnita si spalator ) , PARTER care este compus din 2 camere , baie , grup sanitar , bucatarie , debara,  veranda , hol , si scara interioara. Suprafata parterului este de 110 mp si ETAJ : Etajul este compus din 2 camere , bucatarie , baie , grup sanitar , hol  si balcon. Suprafata 80 mp. Balconul este cu vedere la cetate.  \r\nDispune de curte si gradina.\r\nAcoperisul casei este din tigla . Casa este construita din caramida, grosime 30cm.\r\nGarajul este construit din caramida,20mp.",
        "capacity": 740,
        "county": "Mures",
        "city": "Sighisoara",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/135435\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4952638,
        "title": "passat 2001, 1.6, Taxa nerecuperata",
        "description": "inmatriculat in februarie2012,cumparat de la primul proprietar din germania,rulat putin in tara,carte service,stare f buna,tapiterie curata,nu sa fumat in masina,consumabile schimbate cu factura( placute,filtre,ulei ),climatronic,esp,etc.,totul este functional pe masina,mai multe poze pe mail,itp facut in 15.01.2014, taxa nu este recuperata!!!!",
        "capacity": 270,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/553904\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/553905\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/553906\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4955620,
        "title": "V\u00e2nd 1373 mp",
        "description": "Situat \u00een partea de sus a Dealului Morii (de la Real \u00een sus). Panorama deosebita.",
        "capacity": 760,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/207013\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4956810,
        "title": "Vand",
        "description": "Vand apartament, 3 camere, in Andrei Muresanu, etaj intermediar,  finisaje moderne. Pret EUR, negociabil.  Apartamentul este complet mobilat si utilat,momentan fiind inchiriat cu 500 euro pe luna,se poate prelua si cu chiriasi.",
        "capacity": 100,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4960094,
        "title": "scolarizare cat.b!",
        "description": "Scolarizare cat. B de peste 19 ani cu foarte mult calm si rabdare! Program flexibil, material didactic gratuit, ajutor pt. Obtinerea analizelor medicale, psihologic, cazier necesare pt. Inscriere, Reducere la plata integrala! Reduceri pt. Elevi, studenti, reduceri pt. Cei ce implinesc 18 ani peste 2, 3 luni si se inscriu acum. 30 de ore conducere, teorie. Orele incep si se termina unde doresti tu, masina la examen. Oferim ore suplimentare pt. Cei cu sau fara permis!!",
        "capacity": 920,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/297627\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4961052,
        "title": "Cauciucuri Agricole-Industriale",
        "description": "Vindem o gama larga de anvelope noi si sh pt tractoare, combine, remorci, buldoexcavatoare, orice fel din stoc sau la comanda, trimitem oriunde in tara foarte avantajos, la preturi imbatabile, pt mai multe de detalii contactati- ne!!",
        "capacity": 700,
        "county": "Mures",
        "city": "Targu Mures",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/70349\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/70350\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/70351\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4961277,
        "title": "Inchiriez buldoexcavator si autobasculanta 3,5 T",
        "description": "Inchiriez buldoexcavator, execut, fundatii, sapaturi generale, santuri, rigole, retele de apa, canalizare, electrice, nivelari, terasari, taluzari, incarc moloz asigur transport cu autobasculanta de 3, 5 t",
        "capacity": 840,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/664485\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/70364\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4961804,
        "title": "inchiriez schele",
        "description": "dau in chirie \r\n  schele metalice de fatada dou modele cu tronsoane la schela  de lungime 2,5m  si 1,8m pret\r\n  5,8 lei\/mp\/luna \r\n  vibrator beton  50 lei\/zi\r\n  pompa de suflat  vopsea lavabila   profesionala 100 lei\/zi .\r\n  ",
        "capacity": 610,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4962176,
        "title": "PF vand casa",
        "description": "casa spatioasa, finisata, cu centrala termica si geamuri termopan noi, garaj, curte si teren aferent 1200m2, compus din gradina zarzavaturi,pomi fructiferi, vita de vie",
        "capacity": 420,
        "county": "Cluj",
        "city": "Turda",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4962220,
        "title": "PF vand parcele teren intravilan",
        "description": "Persoana fizica vand teren intravilan parcelabil, in sat Corpadea (8km de Apahida), utilitati la marginea terenului. Pret 5 EUR\/mp, negociabil.",
        "capacity": 140,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4962262,
        "title": "pf vand",
        "description": "Persoana fizica vand teren extravilan agricol in Corpadea (la 8km de Apahida), carte funciara, utilitati la 100m. Pret 1 EUR\/m2, negociabil.",
        "capacity": 750,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4962969,
        "title": "inchiriez",
        "description": "Pensiunea CASA BATIN situata la 13 km de Cluj in sat Mera,pe sos de Zalau, va ofera cazare ,un mediu linistit, loc pt. gratar, livada pt plimbari, si alte activitati, la un pret foarte bun. Va asteptam cu drag. Telefon 0743049003.Poze gasiti pe:Casa Batin",
        "capacity": 620,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/562836\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4807532,
        "title": "Persoana fizica cumpar teren pentru constructie casa",
        "description": "Persoana fizica cumpar teren cu utilitati (drum asfaltat, curent, gaz, apa-canal) pentru constructie casa, ofer pret in functie de zona. Front de minim 18 ml. Sunt interesat de zona Cimpului, Europa.",
        "capacity": 350,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4649935,
        "title": "Drumul Tautiului",
        "description": "Zona retrasa spre Manastirea Floresti, la capete are drumul asfaltat (peste drum este padure) si paraul Bosorului (peste parau este dealul Garbau), front de 25m la drum asfaltat, CU=P+E+M, utilitati la teren.",
        "capacity": 200,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.735753606541,23.509846157074&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4649934,
        "title": "Campului Nr. 251",
        "description": "Front de 39m la drum public al primariei, utilitati la Str. Campului (60m), CU=P+2E.",
        "capacity": 920,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.742768063781,23.572470373154&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4973742,
        "title": "vand piese renault megane 2 din dezmembrari",
        "description": "Vand piese din dezmembrari Renault Megane 2. \r\nAm diverse motorizari. \r\nSe vinde orice element de caroserie (usa, capota, bara fata, bara spate, haion, prag, stalp, aripa), elemente de interior (volan, ornamente, scaun, bancheta), elemente de siguranta (centuri, airbag, calculator airbag, senzori de impact), motor sau anexe (electromotor, alternator, injectoare, pompa injectie, kit ambreiaj, volanta, disc ambreiaj, turbo, radiator), elemente electrice (far, stop, calculator, modul, ceas bord, senzori), transmisie, directie si suspensie (cutie de viteze, planetare, fuzeta, telescop, arc), etc.",
        "capacity": 240,
        "county": "Mures",
        "city": "Targu Mures",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/72804\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/72805\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/72806\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/72807\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/72808\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/72809\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4973776,
        "title": "Piese Skoda Octavia 2 din dezmembrari",
        "description": "Vand piese din dezmembrari pentru Skoda Octavia 2, 04- 12, motor 1. 9 TDI(cod BKC, 105CP). \r\nVand orice fel de piese sau accesorii, elemente de caroserie (usa, capota, bara fata, bara spate, haion, lonjeron, prag, stalp), motor sau anexe motor (bloc, chiuloasa, injectoare, radiator, alternator, electromotor), cutie de viteze, elemente de transmisie si suspensie (planetare, jante, fuzete, arcuri, telescoape), elemente electrice si de siguranta (far, stop, airbag, calculator airbag, centuri, ceasuri de bord) si orice alta piesa.",
        "capacity": 500,
        "county": "Mures",
        "city": "Targu Mures",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/72834\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/72832\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/72833\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/72835\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/72836\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4973794,
        "title": "vand piese vw polo din dezmembrari",
        "description": "Dezmembrez VW Polo IV 2002- 2005, vand orice piesa sau accesoriu, motor, cutie de viteze, ambreiaj, volanta, catalizator, pompa servo, aripa, far, stop, capota, haion, usa, airbag, bara fata, bara spate, macara electrica sau manuala, oglinzi si orice alte piese. Livrez prin curier cu plata ramburs",
        "capacity": 550,
        "county": "Mures",
        "city": "Targu Mures",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/72837\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/72838\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/72839\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/72840\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/72841\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4973824,
        "title": "vand piese skoda fabia din dezmembrari",
        "description": "Vand piese sh  pentru Skoda Fabia I, 00- 08. \r\nAm motoare 1. 4 16v tip AUB de 101CP sau AUA de 75 CP.\r\nSe vinde orice componenta sau piesa a masiniii la preturi foare bune. \r\nElemente caroserie(usa, capota, haion, aripa fata - spate, pavilion, prag, bara protectie)elemente optice(far, stop, geam usa, parbriz, luneta)elemente motor(chiulasa, bloc motor, pistoane, planetare, radiator, compresor clima, alternator)elemente directie si suspensie(amortizoare, arcuri, brate, bieleta, )elemente interior(ceasuri bord, cd, scaune)elemente siguranta(airbag - uri , calculator airbag, centuri siguranta)",
        "capacity": 910,
        "county": "Mures",
        "city": "Targu Mures",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/72842\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/72843\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/72844\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/72845\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4973865,
        "title": "vand piese golf 4 din dezmembrari",
        "description": "Vand piese din dezmembrarari VW Golf IV 1. 9tdi, 101CP(ATD), 90CP(ALH)sau 116CP(AJM)\r\nSe vinde orice componenta sau piesa a masiniii la preturi foare bune. \r\nElemente caroserie(usa, capota, haion, aripa fata - spate, pavilion, prag, bara protectie)elemente de caroserie(far, stop, geam usa, parbriz, luneta)elemente motor(chiulasa, bloc motor, pistoane, turbina, planetare, radiator)elemente directie(amortizoare, arcuri, brate, caseta directie)elemente interior(ceasuri bord, cd, scaune, banchete, ornamente plastic)elemente siguranta(airbag - uri , calculator airbag, centuri siguranta)",
        "capacity": 740,
        "county": "Mures",
        "city": "Targu Mures",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/72859\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/72860\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/72861\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/72862\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/72863\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4975043,
        "title": "Caricaturi, portrete, picturi",
        "description": "Caricaturi, portrete, picturi, invitatii de nunta, diverse lucrari la cererea si specificatiile clientului, cu livrare in toata tara, ori in format electronic ori prin curier rapid! Pentru mai multe informatii si exemple de lucrari va rugam sa ne contactati!",
        "capacity": 710,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/530155\/760_567_fit.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/73059\/760\/567\/fit\/ad49750431.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/73060\/760\/567\/fit\/ad49750432.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/73061\/760\/567\/fit\/ad49750433.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/73062\/760\/567\/fit\/ad49750434.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/73063\/760\/567\/fit\/ad49750435.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4975785,
        "title": "rochie mireasa",
        "description": "Vand rochie mireasa din voal alb cu flori mov,marimea 42-44.Pret negociabil.Telefon 0744-575.236. Merita vazuta si probata.",
        "capacity": 230,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/253479\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4975946,
        "title": "oferta scolarizare cat.b!",
        "description": "Scolarizare cat. B de peste 19 ani cu foarte mult calm si rabdare! Program flexibil, material didactic gratuit, ajutor pt. Obtinerea analizelor medicale, psihologic, cazier necesare pt. Inscriere, Reducere la plata integrala! Reduceri pt. Elevi, studenti, reduceri pt. Cei ce implinesc 18 ani peste 2, 3 luni si se inscriu acum. 30 de ore conducere, teorie. Orele incep si se termina unde doresti tu, masina la examen. Oferim ore suplimentare pt. Cei cu sau fara permis!!",
        "capacity": 400,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/373996\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4976026,
        "title": "repar magnetofon akai, teac, philips",
        "description": "Tehnician in domeniul electronicii, repar magnetofane TEAC, AKAI, PHILIPS  diverse modele",
        "capacity": 190,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/245027\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4977553,
        "title": "meditatii la limba germana",
        "description": "Profesor, etnic german, cu experienta ofer meditatii de limba germana. Ma implic pentru ca elevul sa asimileze cat mai bine, folosind metode adaptate in functie de nevoile si de domeniul de interes al fiecaruia. Detin materiale didactice. Pret: 50 lei \/ sedinta de 2h. Telefon 0755707380\r\ne-mail:   stardan2003@yahoo.com",
        "capacity": 60,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4977602,
        "title": "meditatii la limba germana",
        "description": "Profesor, etnic german, cu experienta ofer meditatii de limba germana. Ma implic pentru ca elevul sa asimileze cat mai bine, folosind metode adaptate in functie de nevoile si de domeniul de interes al fiecaruia. Detin materiale didactice. Pret: 50 lei \/ sedinta de 2h. Telefon 0755707380\r\ne-mail:   stardan2003@yahoo.com",
        "capacity": 790,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4253168,
        "title": "Vand Cutii iPhone 5s 5 3GS 4 4S 8Gb 16Gb 32Gb 64Gb",
        "description": "Vand Cutii iPhone 5 4s 4 3GS 4 4S 8Gb 16Gb 32Gb 64Gb. Vand \/ Tai microsim micro sim iPad iPhone 4. Vand folii de protectie, huse, incarcatoare, cabluri, piese iPhone. Contact mail, messenger, telefonic.",
        "capacity": 930,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/188713\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4981645,
        "title": "inchiriez casa",
        "description": "Persoana fizica vand\/inchiriez casa duplex in Floresti, Cluj Napoca. Casa are suprafata de 139 mp, este cu etaj, are 4 camere, 2 bai, bucatarie, balcon, loc parcare, partial finisat, incalzire centrala. Are teren de 80 mp. Casa are carte funciara (CF). \r\n Tel. 0755707380\r\ne-mail   stardan2003@yahoo.com",
        "capacity": 780,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4981712,
        "title": "stomatolog",
        "description": "Medic dentist specialist cu o vasta  experienta  ofera  tratamente stomatologice pentru adulti si copii, la preturi minime. Cabinetul este localizat in Cluj Napoca, central.\r\nTelefon:  0742364373",
        "capacity": 900,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4876426,
        "title": "vand  urgent  casa de vacanta",
        "description": "vand  urgent casa  de vacanta  din bca,izolata  interior  si exterior,4 camere,bucatrie,living,2 bai,teren 550 mp,centrala  ,fosa septica ,foisor ,gratar  in curte,acces la rau.casa  se afla in baisoara (frasinet)\r\naccept si schimb  cu apartament de 2 camere la cluj + diferenta\r\ntel  0740299454",
        "capacity": 720,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/327720\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.617340959006,23.39618486786&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4981966,
        "title": "inchiriez  buldoexcavator",
        "description": "inchiriez buldoexcavator  pt. santuri, fundatii, nivelari, terasari, taluzari, retele de apa, canalizare, electrice, drumuri, fose, etc.  asigur transport cu autobasculanta de 3,5 T",
        "capacity": 870,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/664480\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/74750\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4718992,
        "title": "Uscare si Prelucrare cherestea",
        "description": "Uscam si prelucram cherestea cu materialele clientului sau ale noastre . \r\n",
        "capacity": 690,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/167526\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4719019,
        "title": "Executam structuri de case din lemn",
        "description": "Executam structuri de case din lemn . Lucram doar cu marfa uscata (o uscam in propriul uscator ) .Asiguram calitate si garantie . Pentru mai multe detalii sau pentru poze de la lucrarile efectuate pana acum contactati-ma .Am atasat 2 din cele mai vandute modele de case din lemn . Avem si altele mult mai ieftine dar nu au aceeasi calitate la materiale . ",
        "capacity": 550,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/167523\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4982652,
        "title": "handsfree pe microvibratie- nu incurajez copi",
        "description": "handsfree pe microvibratii pe timpan la cel mai mic pret - doar 30 lei - expediere in tara prin posta romana - cel mai mic pret - pachet complet cu 4 microcasti inoxidabile de neodim, garantie nelimitata - nu livrez personal, doar  expediez prin posta in orice localitate - pret total mult  mai mic decat la cei din camin! (comanda din timp pentru a nu  ajunge sa cumperi la preturi mari la graba!)",
        "capacity": 90,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/75020\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4982661,
        "title": "microvibratii la 30 lei !",
        "description": "microvibratia - singurul sistem de comunicare discreta accesibil  si cu cel mai bun raport caliutate pret handsfree pe microvibratii pe timpan la cel mai mic pret - doar 30 lei - expediere in tara prin posta romana - cel mai mic pret - pachet complet cu 4 microcasti inoxidabile de neodim, garantie nelimitata 0 nu incurajez copiat examene - casca e facuta pt a comunica  invizibil - nu imi asum raspunderea pentru folosire - numai cu expediere pe posta! (pret mult mai mic decat la  producatorii  de camin din cluj!)",
        "capacity": 370,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/75046\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3956232,
        "title": "vand  feliator  mezeluri",
        "description": "vand feliator  mezeluri  sau  carne  se poate  folosi  si  la  carne  congelata  ideal pt  magazine  de mezeluri .mai  multe  informati  la  telefon 0752034095",
        "capacity": 640,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/54704\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/54705\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/54706\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3956228,
        "title": "vand  masina  de tocat  carne",
        "description": "vand  masina  de tocat  carne  profesionala din  inox mai  multe  informati  l;a telefon  0752034095",
        "capacity": 640,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/54701\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/54702\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/54703\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4961317,
        "title": "VAND (inchiriez) casa cu gradina in Sighetu Marmatiei",
        "description": "Vand (inchiriez) casa mobilata cu gradina de 1500 mp (1814 mp), centrala pe lemne, curent mono si trifazic, sera, doua drumuri de acces, posibilitate de parcelare, NEGOCIABIL.",
        "capacity": 140,
        "county": "Maramures",
        "city": "Sighetu-Marmatiei",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4509272,
        "title": "mercedes e220 cdi 31\/12\/2004",
        "description": "FABRICATA IN 31\/12\/2004 full electric 150cp,piele,senzori ploaie lumini,scaune actionate electric,OGLINZI ELECTRICE,cotiere fata spate,computer bord,pilot automat,dublu climatronic,10 air-bag,argintiu,cutie tiptronica,etc Primul proprietar in tara inmatriculat in 2010,SCHIMB CU CAMIONETA BASCULABILA SAU CU MERCEDES A KLASSE DIESEL vw golfIV URGENT!!!pret 8000euro.Toate taxele la zi",
        "capacity": 920,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/185204\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/57530\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/57529\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/57532\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/57533\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/57534\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4877131,
        "title": "confectionez si vand balansoare rustice",
        "description": "vand balansoare rustice,cu acoperis si fara,natur sau lacuite+bait,diferite modele si culori.",
        "capacity": 60,
        "county": "Cluj",
        "city": "Gherla",
        "area": null,
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/194873\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/63344\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/63345\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/537975\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/537976\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/63347\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/63348\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/537977\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/537978\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4524079,
        "title": "umidificator lb 20",
        "description": "Umidificator lb 20 ,putin folosit,in stare excelenta de functionare,700 w,230 v,50 hz.",
        "capacity": 820,
        "county": "Cluj",
        "city": "Gherla",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/57688\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/57684\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/57685\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/57686\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/57687\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/57689\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4435242,
        "title": "mochete auto originale nemtesti",
        "description": "mochete auto putin folosite,in stare excelenta,pt vw polo,ford fiesta,seat cordoba,seat ibiza.",
        "capacity": 680,
        "county": "Cluj",
        "city": "Gherla",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/630957\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/537982\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/537983\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/537984\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/537985\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/626107\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/626108\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/626109\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/626110\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3164696,
        "title": "vand sau schimb,regulator relanti (supapa mers in gol )",
        "description": "vand sau schimb cu bonuri de benzina sau casetofon cu cd auto,regulator relanti (supapa mers in gol )pt renault clio symbol,an 2001,1,4 cc,75 cp,benzina.",
        "capacity": 210,
        "county": "Cluj",
        "city": "Gherla",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/265237\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/537993\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/537994\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/537995\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/537996\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/537997\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/537998\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/537999\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/538000\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4912515,
        "title": "dezumidificatoare !!!!!!!",
        "description": "Inchirieri dezumidificatoare profesionale si casnice. Acestea ajuta la rezolvarea problemelor legate de condens, mucegai, igrasie, eliminarea umiditatii in exces din apartamente, uscarea sapelor si tencuileii, reducerea timpului de eliminare a umezelii Pret15 lei\/zi",
        "capacity": 960,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4991296,
        "title": "vand\/schimb rochie de mireasa",
        "description": "vand\/schimb rochie de mireasa model printesa,culoare alb imaculat,2 piese. Pretul e negociabil. Mai multe poze trimit la cerere.",
        "capacity": 70,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/77475\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/77476\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4905891,
        "title": "Licitatie publica - vanzari echipamente",
        "description": "SC PLAST CAP SRL \u2013 in faliment, organizeaza LICITATIE PUBLICA CU STRIGARE DE TIP COMPETITIV privind valorificarea urmatoarelor active: Sistem formare prin injectie dopuri plastic; masina de injectie, pompa, matrita, etc.",
        "capacity": 910,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/666723\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4991727,
        "title": "vand cartus samsung ml2010d3 original refilat prima data ",
        "description": "pentru aprox. 3000 pagini (acoperire 5%)\r\nsamsung ml2010, ml2510, ml2570, ml2571\r\nrefilat prima data",
        "capacity": 830,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/77552\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4991748,
        "title": "cartus samsung mlt-d1092s refilat",
        "description": "toner samsung original mlt-d1092s. culoare: black. compatibil cu: samsung scx-4300 refilat prima data",
        "capacity": 640,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/piata-az.loc\/media\/resize\/77560\/760\/567\/fit\/ad4991748.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4991318,
        "title": "lexmark c500s2yg",
        "description": "pret magazin 400 ron\r\nvand\/schimb\r\n\r\ncartus laser toner lexmark c500s2yg yellow\r\nimprimante compatibile \tlexmark c500n\r\nlexmark x500n\r\nlexmark x502n\r\ncapacitate \t1500,la 5% acoperire\r\ncod produs \tc500s2yg\r\nproducator \tlexmark",
        "capacity": 120,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/77595\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4775181,
        "title": "Teren intravilan situat in loc. Luna de Sus, zona Pietris (RAR). ",
        "description": "HB INSOLV SPRL lichidatorul judiciar al SC STYLMEX ROMANIA SRL \u2013 \u00een faliment vinde prin licita\u0163ie public\u0103 cu strigare teren intravilan \u00een suprafa\u0163\u0103 de 2000 mp, situat \u00een loc. Luna de sus, zona Pietris (RAR). ",
        "capacity": 640,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Floresti",
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/666484\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.74444433984,23.43304914856&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4991882,
        "title": "Service calculatoare",
        "description": "service calculatoare, laptopuri, monitoare, imprimante, copiatoare, carti vizita, stampile, montare sisteme de supraveghere, reumplere cartuse laser si cerneala, instalari softuri",
        "capacity": 650,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/281358\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4994827,
        "title": "mega oferta",
        "description": "Terenul se afla situat la aprox 3 km de tetarom 2 inspre sannicoara avand frontul direct in centura muncii apahida. Ideal constructii ce au legatura cu domeniul auto.",
        "capacity": 940,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.799937854416,23.69560522461&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4994862,
        "title": "super oferta",
        "description": "Terenul se afla situat la aprox 3 km de depoul tramvaielor inspre sannicoara si la aprox 400 m de centura muncii apahida. Tel 0744-361695",
        "capacity": 310,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.803933060849,23.696978515625&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4994876,
        "title": "super teren",
        "description": "Terenul se afla situat la 3 km de calea Baciului inspre Popesti, in zona cu constructii noi ( zona noua de constructii, fara constructii vechi). Terenul se afla aproape de padure si beneficiaza de o panorama deosebita. Accesul se face direct din sosea. Merita vazut",
        "capacity": 530,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.816504274523,23.519995635987&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4995501,
        "title": "PF vand apartament 3 cam",
        "description": "PF schimb\/vand apartament 3 cam\r\n\r\nPersoana fizica vand\/schimb apartament, constructie 2006, 3 camere+ living, bucatarie, baie cu geam, str. Fabricii, parter, decomandat, 74 mp, fara balcon, parchet, gresie, faianta, zugravit lavabil, usa antiefractie, geamuri termopan, centrala termica, contoare apa, contoare gaz, beci, curte, liber, intabulat, 300m pana la kaufland, 150 pana la statia de autobuz. Pret 57500 EUR, negociabil. La schimb cer un ap. 2 cam, 50-54 mp+diferenta.",
        "capacity": 360,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/221985\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4995601,
        "title": "Cautam sponsor\/donator",
        "description": "Cautam sponsor\/donator\r\n\r\nEchipa de fotbal FORTUNA LUNCA MURESULUI din campionatul judetean Alba, cauta sponsor, care doreste sa ne spijine pentru continuarea activitatii pe plan sportiv. Echipa noastra a promovat 3 jucatori [Coman Viorel (CFR Cj, Gl. B-ta, Rapid Buc, Lotul national al Romaniei de juniori si tineret) -Ionut V (Poli Tim) -Toasnadi I (CFR Cj] care au jucat in Liga I\/II.",
        "capacity": 490,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4995734,
        "title": "Cautam sponsor\/donator",
        "description": "Cautam sponsor\/donator\r\n\r\n Echipa de fotbal FORTUNA LUNCA MURESULUI din campionatul judetean Alba, cauta sponsor, care doreste sa ne spijine pentru continuarea activitatii pe plan sportiv. Echipa noastra a promovat 3 jucatori [Coman Viorel (CFR Cj, Gl. B-ta, Rapid Buc, Lotul national al Romaniei de juniori si tineret) -Ionut V (Poli Tim) -Toasnadi I (CFR Cj] care au jucat in Liga I\/II.",
        "capacity": 350,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4719903,
        "title": "PF cumpar apartament cu 2 sau 3 camere",
        "description": "Persoana fizica cumpar apartament, 2-3 camere, in Grigorescu, Sesului, Marasti (Nasaud) etaj intermediar, decomandat, 65 mp. Pret 60000 EUR, negociabil.",
        "capacity": 250,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Grigorescu",
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.761762807148,23.561065620423&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4997965,
        "title": "Toalete ecologice Saloti",
        "description": "Inchirem toalete ecologice ideale pentru santiere, cabane ,terenuri de sport ,echipe de izolatori, manifestatii in aer liber, etc,locuri fara canalizare. Dispecerat non-stop, interventie rapida 1 ora.",
        "capacity": 950,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/79185\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/79184\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5001458,
        "title": "Vand palinca \/ tuica de prune",
        "description": "Vand palinca de prune, veche, produsa traditional, origine  Salaj, tarie 52 grade, calitate deosebita. Pret 25 lei\/litru. La cerere asigur gratuit transportul la locatia clientului, pe raza orasului Cluj-Napoca. ",
        "capacity": 690,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/80291\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4329093,
        "title": "chirie schela",
        "description": "dau in chirie\r\n         schela metalica omologata 5,5ei \/mp \/ luna         pompa de suflat vopsea lavabila 6 atm.  100 lei\/zi ;  vibrator beton 50 lei\/zi ;\r\n  ",
        "capacity": 320,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3444763,
        "title": "vand carcasa nokia 6700 gold  full metal",
        "description": "Vand Carcasa NOKIA 6700 GOLD  FULL Metal . Vand folii de protectie, huse, incarcatoare, cabluri, piese iPhone. Contact mail, messenger, telefonic",
        "capacity": 220,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/188709\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5004449,
        "title": "Vand",
        "description": "Vand autoturism Dacia Logan, euro 3, inmatriculat in ro, an fabricatie 2006, berlina, culoare verde cameleon. Motor pe benzina, capacitate cilindrica 1400 cmc, rulaj 118000 km. Transmisia manuala, 5 viteze, tractiune fata. Are: abs, inchidere centralizata, oglinzi electrice, geamuri electrice, airbaguri, aer conditionat, servo frana, servo directie, jante al, cd. Pret 3000 EUR, negociabil.",
        "capacity": 690,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4841356,
        "title": "apartament in Grigorescu - 2 camere, complet utilat-mobilat",
        "description": "+3 mp balcon. Apartamentul se vinde complet mobilat, finisat si utilat cu electrocasnice noi, facandu-l ideal pentru tinerii casatoriti, studenti care s-au saturat de chirie sau orice alta persoana la inceput de drum. Blocul este izolat termic.\r\n\r\nPentru varianta nemobilat si neutilat, pretul este negociabil.",
        "capacity": 510,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/144537\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.764908349035,23.546946472168&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5005354,
        "title": "vand baterie externa iphone 5 4 4s 3g 3gs noua",
        "description": "Vand Baterie Externa iPhone 4 4S 3G 3GS NOUA .Vand Cutii iPhone 3GS 4 4S 8Gb 16Gb 32Gb 64Gb. Vand \/ Tai microsim micro sim iPad iPhone 4. Vand folii de protectie, huse, incarcatoare, cabluri, piese iPhone. Contact mail, messenger, telefonic.",
        "capacity": 410,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/188719\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5007340,
        "title": "Piese de schimb electrocasnice",
        "description": "SC DUTCH SRL reparam masini de spalat haine sau vase, uscatoare, la domiciliu si in atelier in functie de defecte. Reparam electrocasnice mici: microunde, aspiratoare, boilere electrice, cuptoare, fiare de calcat, cafetiere, la atelier Str. Bihorului 13 (Cart. Grigorescu) orar L-V 12-18. Asiguram piese de schimb, reprezentanta el, maxwel, eurotech, platinium, ufesa, albatros, toate cu garantie. Asiguram mentenanta pe baza de contract, reparatii in instalatii electrice. Executie instalatie electrica noua toate cu garantie.",
        "capacity": 930,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5008930,
        "title": "Vand",
        "description": "Vand casa in centrul localitatii Valea Draganului ,P+1, compusa din 4 camere mari, bucarie, utilitati, bucatarie de vara, teren 500 mp etc...",
        "capacity": 410,
        "county": "Cluj",
        "city": "Huedin",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4969619,
        "title": "vand teren",
        "description": "Persoana fizica vand teren pt constructii, in Floresti, str. Fagului, parcelabil, suprafata 6000 mp, front de 100 m, carte funciara, curent, apa,  canalizare. Pret 42 EUR, negociabil pret pe mp.",
        "capacity": 310,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3304154,
        "title": "Apartament  3 camere Grigorescu",
        "description": "Agentia Mobitim vinde apartament, 3 camere,zona Profi,,65 mp utili,1 balcon,cu centrala termica,geamuri termopan,etajintermediar,,la pretul de 60000 euro,..",
        "capacity": 730,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3558498,
        "title": "Apartament cu 3 camere Gheorgheni",
        "description": "Agentia Mobitim vinde apartament cu 3 camere, Gheorgheni,zona Hotel Royal,,65mp, ,etaj 2\/4, cu  geamuri termopan,parchet,lavabil., centrala termica ,bloc izolat.. Pret 62000euro.",
        "capacity": 260,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5013805,
        "title": "decodez si fac jailbreak la orice iphone ipad",
        "description": "Ofer urmatoarele servicii pentru iphone\/ipod 2g 3g 3gs, 4, ipad: deblochez operator (unlock) 30 ron. Jailbreak (decodez ca sa se poata instala orice aplicatie) + unlock pret 50 ron. Decodez si iphone 4 cu cartele gevey. Ma ocup cu toate problemele de soft care au legatura cu aceste modele. De asemenea pentru serviciul de jailbreak va puteti alege dintro gama larga de aplicatii sa va instalati pe telefon absolut gratis!!! Ofer garantie pentru serviciile oferite. Vand de la cabluri la carcase la carkituri si alte accesorii pt iphone",
        "capacity": 480,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/243757\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5013820,
        "title": "Schimb ecran, capac spate iphone 3g,3gs,4,4s",
        "description": "schimb ecran sticla pentru iphone:\r\n3g-3gs: 100 ron cu manopera inclusa, 70 ron doar sticla cu digitezer\r\n4-4s 300 ron cu manopera inclusa. Sticla la 4 si 4s vine doar impreuna cu lcd, deaia ii mai scumpa. \r\ncapac spate iphone 3g-3gs 100 ron cu montaj, 70 fara\r\ncapac spate iphone 4-4s 70 ron\r\n\r\nToate produsele sunt originale",
        "capacity": 360,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/84120\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/84121\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/84122\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/84123\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/84124\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/84125\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5013837,
        "title": "vand accesorii, carcase, bumpere, huse iphone",
        "description": "vand incarcator si cablu de date pentru iphone. Produsele sunt noi si sunt originale. Pret incarcator : 25 ron, cablu 20 ron. Impreuna 40 ron. De asemenea vand toate accesoriile posibile pentru ele de la carcase, bumpere, accesorii auto, holdere, docking station, folii. Ma ocup si cu service, decodare si jailbreak pentru iphone",
        "capacity": 620,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/84136\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/84132\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/84133\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/84134\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/84135\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/84137\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3439944,
        "title": "Vand piese schimb Iphone 5 4s 4 3GS 3G 2G",
        "description": "Vand piese schimb Iphone 5 4s 4 3GS 3G 2G, sticle touch, butoane, lcd. Vand folii de protectie, huse, incarcatoare, cabluri, piese iPhone. Contact mail, messenger, telefonic",
        "capacity": 970,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/188706\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5017232,
        "title": "service aparatura electrocasnica in dej",
        "description": "Efectuam reparatii aparatura electrocasnica si electronica de orice fel Reparam toata gama de electrocasnice, tv, audio, masini de spalat, module masini de spalat cuptoare cu microunde, aspiratoare etc.",
        "capacity": 510,
        "county": "Cluj",
        "city": "Dej",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5017241,
        "title": "service aparatura electronica in dej",
        "description": "Efectuam reparatii aparatura electronica de orice fel inclusiv auto. Reparam toata gama de electronice, tv, audio, module masini de spalat, cuptoare cu microunde etc.",
        "capacity": 550,
        "county": "Cluj",
        "city": "Dej",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5017248,
        "title": "colaborare afacere service",
        "description": "Societate comerciala cu profil service electrocasnice si electronice, caut pentru colaborare firme de service, magazine sau distribuitori in vederea efectuarii de service la aparatura electrocasnica si electronica ce o comercializeaza si au de asigurat garantie in zona Dej",
        "capacity": 880,
        "county": "Cluj",
        "city": "Dej",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4920271,
        "title": "Vand teren intravilan 11800mp C.Turzii str. George Enescu",
        "description": "Persoana fizica vand teren intravilan, in Sancrai, parcelabil, suprafata 11800 mp, front de 28 m, carte funciara, certificat de urbanism, curent, canalizare.",
        "capacity": 900,
        "county": "Cluj",
        "city": "Campia Turzii",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.534756770647,23.891170448304&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4920246,
        "title": "Vand teren intravilan 3860mp C.Turzii str. Gh. Baritiu",
        "description": "Persoana fizica vand teren intravilan, in Sancrai, parcelabil, suprafata 3860 mp, front de 28 m, carte funciara, certificat de urbanism, curent, apa, gaz, canalizare.",
        "capacity": 10,
        "county": "Cluj",
        "city": "Campia Turzii",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.532468760921,23.88546270752&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5018107,
        "title": "productie publicitara florysdesignevents.ro",
        "description": " \u2022 Carti de vizita \u2022 Pliante \u2022 Flyere \u2022 Mape\u2022 Ecusoane \u2022 Agende \u2022 Calendare \u2022 Inscriptionari auto \u2022 Inscriptionari vitrine\u2022 Sablari vitrine \u2022 Inscriptionari tricouri \u2022 Inscriptionari echipamente de lucru\u2022 Firme luminoase \u2022 Totemuri \u2022 Panouri \u2022 Bannere, Meshuri, Steaguri, Litere volumetrice luminoase sau neluminoase, Indicatoare rutiere, Indicatoare stradale, Placute usi, Semnalistica interior, Numere de case, Totemuri intrare comune, Materiale didactice, Diplome, Trofee, Cupe \u2022 Afise, Postere, Tablouri pe canvas Promotionale, Web design, Sampling\r\nwww.florysdesignevents.ro",
        "capacity": 860,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/345822\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5018129,
        "title": "Productie publicitara",
        "description": "CELE MAI BUNE PRETURI DE PE PIATA CLUJEANA!!Florys design events - va ofera toate categoriile de obiecte promotionale precum si posibilitatea personalizarii acestora: agende personalizate, calendare,diplome, obiecte de scris, meniuri,cataloage personalizate,mape personalizate,cutii de pizza personalizare,etichete personalizate, pungi personalizate, odorizante personalizate, accesorii pentru de birou, electronice si muzica, accesorii pentru calatorii, timp liber si jocuri, unelte si medical,imbracaminte personalizata si materiale didactice(harti, planse etc)0752121279 www.florysdesignevents.ro",
        "capacity": 330,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/345833\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5018151,
        "title": "Productie publicitara-inscriptionari auto",
        "description": "Inscriptionari Auto-Masinile datorita faptului ca sunt mobile ofera un foarte bun mod de promovare a unui brand, produs sau serviciu. La fel de bine si masinile personale pot fi decorate intr-un mod elegant pentru imbunatatirea aspectului exterior. Inscriptionarile auto se fac cu autocolant taiat la cutter plotter sau printat full color Se pot inscriptiona parti ale masinii sau se poate face o colantare integrala. www.florysdesignevents.ro",
        "capacity": 720,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/345801\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5018169,
        "title": "productie publicitara florysdesignevents.ro",
        "description": "Produse outdoor:\r\n\r\nCasete luminoase profil Aluminiu\r\nPeople Stopper profil Aluminiu\r\nRoll-up banner\r\nPanouri publicitare\r\nLitere volumetrice\r\nTuburi spectrale \/ neon sign\r\nTotemuri\r\n\r\nProduse indoor:\r\n\r\nRame Click profil Aluminiu\r\nRoll-up banner\r\nAviziere\r\nStanduri expozitionale",
        "capacity": 110,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/345812\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3736555,
        "title": "Teren valea seaca (popesti vale)",
        "description": "Vind 2 parcele teren intravilan 4300 metri patrati respectiv 500 metri patrati situat in valea seaca, utilitati la poarta acte la zi, zona in dezvoltare panorama deosebita . Pret 11 \u20ac respectiv 15 \u20ac mp accept schimb cu casa sau apartament. Negociabil. Tel 0744804555.",
        "capacity": 70,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Baciu",
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/188324\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/188325\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/188326\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/188327\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/188328\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.809264436676,23.528707450867&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4808066,
        "title": "Casa Andrei Muresanu",
        "description": "Exclusiv prin Ag Imobiliarul, colaborez si cu alte agentii la vanzare cheia se afla la agentie. 446 mp teren pe un front de 18",
        "capacity": 980,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/570538\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4808034,
        "title": "Observator 4 camere",
        "description": "Exclusiv prin Ag Imobiliarul, colaborez si cu alte agentii la vanzare cheia se afla la agentie",
        "capacity": 1000,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/268558\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4808044,
        "title": "gara 80 mp la 20000Euro",
        "description": "Exclusiv prin Ag Imobiliarul, colaborez si cu alte agentii la vanzare cheia se afla la agentie. Spatiul se afla la demisol si se afla in zona BCR de pe Horea",
        "capacity": 500,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/341810\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3723959,
        "title": "Alatura-te echipei de vanzare RCS & RDS",
        "description": "Esti o persoana dinamica?\r\nAlatura-te echipei de vanzare RCS & RDS din Cluj.\r\n\r\nParticipa activ in cel mai nou proiect!",
        "capacity": 190,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/201977\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/626479\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5019240,
        "title": "masini cafea esspresso",
        "description": "Masini cafea espresso automate tara de origine Italia \/ Elvetia, impecabile functional \/ estetic, revizie capitala, garantie 12 luni, postgarantie nelimitat. Va asteptam! L-S, 8-18",
        "capacity": 580,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/265307\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5019264,
        "title": "masini cafea si accesorii",
        "description": "AFT ELECTRONIC SRL produce, instaleaza si comercializeaza urmatoarele repere pantru masini cafea: 1. Contoare electronice pentru orice model de masini cafea (automate, profesionale cu 2 sau 3 grupe) -15 modele 2. Dozatoare apa electronice 3. Programator electronic 4. Comanda electronica pentru autonivel la profesionale (GICAR) SERVICE, VANZARI, INCHIRIERI AUTOMATE CAFEA Informatii si comenzi: AFT ELECTRONIC SRL CLUJ STR GUTINULUI NR 7, tel sau email, L-S orele 9-18",
        "capacity": 480,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/265309\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3916509,
        "title": "Contabilitate completa (si in limba engleza si italiana!)",
        "description": "Exxpert contabil, membru CECCAR cu experienta de peste 10 ani in domeniu, ofer servicii complete de contabilitate generala (inclusiv bilant) si resurse umane (evidenta personal\/salarizare\/Revisal). Profesionalism. Seriozitate. Preturi negociabile (in functie de volumul de documente)! \r\n\r\nAcum ne gasiti si pe Facebook la Conta.H\u0103\u015fm\u0103\u015fan!",
        "capacity": 830,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/585475\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5019283,
        "title": "automate cafea",
        "description": "AUTOMATE CAFEA IMPECABILE FUNCTIONAL \/ ESTETIC, CONTORIZATE, PENTRU CAF\u00c9 BAR, MAGAZINE MICI, BIROU, LOCUINTA. Service, vanzari, inchirieri (pe baza de contract), instalari contoare electronice pentru orice model de masini cafea (profesionale 1-2-3 grupe sau masini automate). Contracte service pentru firme! Garantie, postgarantie, calitate. Inf: AFT Electronic srl Cluj Napoca str Gutinului nr 7, tel sau email, l-s orele 9-18",
        "capacity": 360,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/265310\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5019357,
        "title": "masini cafea esspresso",
        "description": "AUTOMATE CAFEA IMPECABILE FUNCTIONAL \/ ESTETIC, CONTORIZATE,  PENTRU MAGAZINE MICI, BIROU, LOCUINTA. \r\n Service, vanzari, inchirieri (pe baza de contract), instalari contoare electronice pentru orice model de masini cafea (profesionale 1-2-3 grupe sau masini automate). Contracte service pentru firme! Garantie, postgarantie, calitate. \r\n Inf: AFT Electronic srl Cluj Napoca str Gutinului nr 7, tel sau email, l-s orele 9-18",
        "capacity": 350,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/265311\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5021195,
        "title": "Cocktail bar pentru evenimentul tau!",
        "description": "Iti doresti un eveniment de neuitat? Vrei sa impresionezi invitatii? Noi iti oferim cele mai delicioase cocktail-uri,cu arome exotice, in cele mai variate culori. Cu experienta de peste 6 ani iti oferim serviciile noastre pentru ca evenimentul tau sa fie perfect! Servicii oferite: Barmani profesionisti, Bar mobil, Consultanta pentru evenimente, Pahare, Ingrediente, Echipamente,Flair, Gheata carbonica, cel mai avantajos distribuitor de bauturi alcoolice, dj, la cele mai avantajoase preturi.",
        "capacity": 130,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/325954\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5021472,
        "title": "Vand",
        "description": "Casa este in comuna Sauca judetul Satu-mare, la 6 km de orasul Tasnad, cu curte si teren 4000 mp.",
        "capacity": 560,
        "county": "Satu-Mare",
        "city": "Tasnad",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4974676,
        "title": "vand tricouri originale",
        "description": "vand tricouri originale barbatesti:adidas,lacoste,tommy hilfinger 100% bumbac,calitate ireprosabila,marimile s,m,l,xl,xxl,atat pt adolescenti cat si pt persoane mature.oferta de nerefuzat la 5 tricouri cumparate ai pret de 4",
        "capacity": 490,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/337379\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4921316,
        "title": "Apartament 4 camere zona Ion Mesteru",
        "description": "Agentia Mobitim vinde apartament, 4 camere, in Manastur,zona Ion Mesteru,,etaj 3,2 balcoane,2 bai , 80 mp, confort: i,  parchet, gresie, faianta, usa antiefractie, geamuri termopan, centrala termica, contoare apa, contoare gaz. Pret 70000 EUR.neg.",
        "capacity": 1000,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4921290,
        "title": "Apartamen 3 camere zona Hotel Royal",
        "description": "Agentia Mobitim vinde apartament, cu 3 camere in Gheorgheni zona hotel Royal,65 mp+3 balcoane, etaj intermediar, cu centrala termica, geamuri termopan,contorizat, usa metal, parchet stejar ,mobilat modernPret 60000 euro..",
        "capacity": 990,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4921306,
        "title": "Apartament 3 camere in Marasti",
        "description": "Agentia Mobitim vinde apartament, 3 camere, in Marastii, zona Sensului Girator ,etajul 5 , 2 bai,2 balcoane,decomandat, 68 mp, confort: i, , parchet, gresie, faianta, usa antiefractie, geamuri termopan, centrala termica,,contoare apa, contoare gaz., Pret 66000 EUR.",
        "capacity": 570,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3827697,
        "title": "Vand Cutiii iPhone 5 4S 4 16Gb 32Gb 64Gb Pret 50 lei",
        "description": "Vand Cutiii iPhone 5 4s 4 16Gb 32Gb 64Gb Pret 50 lei. Vand \/ Tai microsim micro sim iPad iPhone 4. Vand folii de protectie, huse, incarcatoare, cabluri, piese iPhone. Contact mail, messenger, telefonic.",
        "capacity": 300,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/188723\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5025443,
        "title": "bmw 316 imatriculat ro 1750eur",
        "description": "Vand autoturism BMW 316, euro 2, inmatriculat in ro, an fabricatie 1996 cu 3 usi. Motor pe benzina, putere 116 cp, capacitate cilindrica 1598 cmc, rulaj 145600 km. Transmisia manuala, 5 viteze, tractiune spate. Are: abs, inchidere centralizata, oglinzi electrice, oglinzi incalzite, geamuri electrice, airbaguri, servo frana, servo directie, alarma, jante al, radio, cd. Pret 2650 EUR.",
        "capacity": 820,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/207811\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/88519\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/88520\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/88521\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/88522\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/88523\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4917191,
        "title": "4 jante aliaj cu anvelope iarna dunlop bmw seria3",
        "description": "4 buc jante aliaj anvelope vara  pt bmw  pe15 merg pe seria3 an fab(1995-2004) originale in stare foarte buna",
        "capacity": 430,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/207812\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/64581\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/64582\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/64583\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/64584\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/64585\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4752768,
        "title": "toyota rav4 2.0 d4d diesel imaticulata ro",
        "description": "se poate vedea dupa intre orele 17-20,imatriculata in ro 9\/2008",
        "capacity": 690,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/60186\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/60187\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/60188\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5026115,
        "title": "vand teren",
        "description": "Vand teren pt constructii, intravilan, suprafata 3300 mp, latime 14m, terenul are drum de servitute de 7 m pe toata lungimea lui. Toate utilitatile.",
        "capacity": 320,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4987596,
        "title": "PF vand in sat Mera, Cluj",
        "description": "PF vand in sat Mera la 13 km de Cluj pe sos. de Zalau,casa moderna compusa din 1 living,3 dormitoare,2 bai,bucatarie si la parter o garsoniera cu tot confortul,intrari separate, ideal pt 2 familii,teren 1500 mp,pe care se gasesc diversi pomi fructiferi ,incalzire cu centrala pe lemne etc. relatii mai multe la tel:0743340253 sau 0743049003.Acceptam variante.Poze gasiti pe:Casa Batin SRL.Va asteptam.",
        "capacity": 720,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/562835\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5014160,
        "title": "PF vand casa in sat Mera Cluj",
        "description": "casa e situata la 13 km de Cluj,pe sos de Zalau,constructie de 10 ani ,compusa din 1 living,3 dormitoare,2 bai,bucatarie si la parter o garsoniera cu tot confortul,intrari separate, ideal ptr. 2 familii, teren 1500mp,pe care se gasesc pomi diversi pomi fructiferi.Incalzirea se realizeaza cu centrala pe lemne,etc.Relatii mai multe la tel:0743340253 sau 0743049003.Acceptam variante. Poze gasiti pe :pensiunea Casa Batin .va asteptam.",
        "capacity": 620,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/562801\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5019404,
        "title": "vand casa in sat Mera",
        "description": "pf vand casa in sat Mera,la 13 km de Cluj pe sos de Zalau,casa moderna compusa din 1 living,3 dormitoare,2 bai,bucatarie,la parter o garsoniera cu tot confortul,intrari separate, ideal ptr.2 familii,teren1500mp,pe care se gasesc diversi pomi fructiferi,incalzire cu centrala pe lemne,etc.Acceptam variante.Relatii mai multe la tel:0743340253 sau 0743049003.poze gasiti pe:Pensiunea Casa Batin.Va asteptam.",
        "capacity": 80,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/562834\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4971585,
        "title": "transport marfa cluj ,intern si international",
        "description": "Firma de transport marfa efectuaza transport cu autoutilitare de la 1-2000kg si volum de la 1-24m3,marfa este asigurata pe tot parcursul transportului.\r\nVA MULTUMIM PT ALEGEREA FACUTA,",
        "capacity": 280,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/198296\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4937577,
        "title": "Casti cu volum apple ipad iphone 4s 4 3gs 3g",
        "description": "Casti cu volum apple ipad iphone 4s 4 3gs 3g . Vand Cutii iPhone 3GS 4 4S 8Gb 16Gb 32Gb 64Gb. Vand \/ Tai microsim micro sim iPad iPhone 4. Vand folii de protectie, huse, incarcatoare, cabluri, piese iPhone. Contact mail, messenger, telefonic.",
        "capacity": 280,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/188727\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4707841,
        "title": "Vand Adaptor \/ Transform Cartele Nano Sim Micro Sim iPhone 5 4s 4 3Gs 3G iPad",
        "description": "Tai Decupez MicroSim iPhone 5 4 4S iPad iPad 2. Vand folii de protectie, huse, incarcatoare, cabluri, piese iPhone. Contact mail, messenger, telefonic .",
        "capacity": 90,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/188710\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5029631,
        "title": "Vind peugeot boxer 2.0 hdi",
        "description": "Boxer 2.0 hdi, din noiembrie 2002, 190.000 km, inmatriculat in iulie 2012 luni, stare perfecta de functionare, servo, abs, airbag, schimbata distributia de 5000 de km",
        "capacity": 10,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/188472\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/90460\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/90461\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/90462\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/90463\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/90464\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5029652,
        "title": "vind amplif. pioner 250 w.",
        "description": "stereo power amplificator PIONER model M-J 200,250W si tuner control amplificator model cx-j 300.",
        "capacity": 560,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/212421\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/90490\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/90491\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/90492\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3431821,
        "title": "Vand Suport Masina Parbriz iPhone 5 4s 4 3Gs 3G",
        "description": "Vand Suport Masina Parbriz iPhone 5 4s 4G 4 3Gs 3G. Vand folii de protectie, huse, incarcatoare, cabluri, piese iPhone. Contact mail, messenger, telefonic",
        "capacity": 470,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/188726\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4837477,
        "title": "vand teren de casa in someseni",
        "description": "Persoana fizica vand teren in someseni la hodai 3 parcele de 640 mp fiecare, front de 22 m, plan, drum pietruit accesibil permanent, panorama superba, expozitie sudica, langa vilele nou construite, curent la limita terenului, posibilitate apa si gaz, acte in regula, cf. Pret 12.000 eurg",
        "capacity": 50,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.802288011777,23.693373626709&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4136292,
        "title": "Accesorii Apple Ipod iPad Iphone 5 4s 4 3GS 3G 2G",
        "description": "Accesorii Apple Ipod iPad Iphone 5 4s 4 3GS 3G 2G .  Vand piese schimb Iphone 5 4 3GS 3G 2G, sticle touch, butoane, lcd. Vand folii de protectie, huse, incarcatoare, cabluri, piese iPhone. Contact mail, messenger, telefonic",
        "capacity": 710,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/188712\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3496763,
        "title": "Vand Accesorii Apple Ipod Iphone 5 4s 4 3GS 3G 2G",
        "description": "Vand Accesorii Apple Ipod Iphone 5 4s 4 3GS 3G 2G . Vand folii de protectie, huse, incarcatoare, cabluri, piese iPhone. Contact mail, messenger, telefonic",
        "capacity": 20,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/188728\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4837471,
        "title": "vand urgent teren de casa in dealul morii",
        "description": "Persoana fizica vand teren intravilan constructie casa in Dealul Morii pe str. Valea Fanatelor, de 400 mp front 17 m, plus 52 mp cota parte de drum, UTR=ULiu (locuinte individuale unifamiliale ), POT (procentul de ocupare a terenului )=35%, D+P+1+M, panorama superba la 3 min deasupra supermarketului REAL curent in curs de introducere la parcela , drum pietruit accesibil permanent. Pret 12600 euro\/parcela.",
        "capacity": 280,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.802288011777,23.616297668457&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4099785,
        "title": "vand vila la rosu in chinteni",
        "description": "vila se vinde in functie de cerintele clientului:semifinisata la pretul 80000 inclunzind:geamuri termopan,izolatie cu polistiren,vata minerala si rigips si instalatia electrica si curentul sa mearga.poze cu vila pot trimite la cerere",
        "capacity": 330,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/183376\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.822612588452,23.575098937989&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4099775,
        "title": "vand vila in chinteni super finisata",
        "description": "va trimit mai multe poze la cerere,drum asfaltat,toate utilitatile existente",
        "capacity": 1000,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Chinteni",
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/183380\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4789886,
        "title": "Inchiriez remorca",
        "description": "Inchiriez remorca\/remorci diferite mase maxime autorizate si dimensiuni. Detalii in fotografii. Se conduc cu permis de categorie B indiferent de masa maxim autorizata a vehiculului tragator chiar daca masa ansamblului depaseste 3500 kg.Preturi incepand cu 50 ron\/24 h.",
        "capacity": 30,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/60861\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/60857\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/60858\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/60859\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/60860\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/60862\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4572072,
        "title": "Vand Remorci 700 Euro",
        "description": "Cele mai ieftine si cele ma bune de pe piata!!!\r\nMasa maxim autorizata: 350 - 750 kg;\r\nSarcina utila: 190 - 590 kg;\r\nDimensiuni utile: 2000 x 1200 x 380 mm\r\n \r\nDotari standard:\r\n- Axe AL-KO\r\n- Sasiu, obloane si protap din otel complet galvanizat;\r\n- Oblon spate placat cu lemn stratificat;\r\n- Fara sistem de franare;\r\n- Podea din lemn stratificat, impermeabil, antiderapant, 9 mm grosime;\r\n- Mufa cu 7 pini;\r\n- Instalatie electrica 12V;\r\n- Aparatori de noroi din material plastic reciclabil (GRP);\r\n- Anvelope 145 R13\r\n- Basculare pe spate (ideale pentru transportul ATV-urilor).",
        "capacity": 770,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/57994\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/57995\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4132204,
        "title": "Vand zambile en gros",
        "description": "ZAMBILE,CYCLAMEN,MUSCATE-EN GROS.\r\nCultivarea si cresterea florilor de gradina si de balcon, anuale si perene este principala noastra activitate desfasurata pe o suprafata de aproximativ 1600 mp. Pentru ca fiecare cerere este importanta pentru progresul companiei noastre, veti gasi \u00een noi un partener profesionist, de \u00eencredere, veti fi tratat cu respect si veti cumpara produse de cea mai \u00eenalta calitate.vvvvvv.floridepoveste.ro sau flori de poveste pe facebook",
        "capacity": 670,
        "county": "Mures",
        "city": "Targu Mures",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/196256\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/55237\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4057442,
        "title": "Inchiriez remorca\/remorci",
        "description": "Inchiriez Remorca Humbaur,NOUA, 1300 kg masa maxim autorizata,detarata la 750kg,1050 kg util, suprafata utila de incarcare 2510x 1310x 1500 mm, cu prelata pe cadru metalic, cu dispozitiv de franare. Se conduc cu permis de categorie \"B\" indiferent daca masa max aut a ansamblului depaseste 3500 kg, de accea au suferit detarareala 750 kg. Ideale pt a marii suprafata volumica de transport, se inchiriaza cu toate actele la zi.",
        "capacity": 280,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/144280\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3671101,
        "title": "Vand carlige pentru remorcat si piese remorci",
        "description": "Vand o gama larga de carlige pentru remorcat si intreaga gama de piese pentru remorca marca Humbaur.\r\nLa nevoie pot asigura si montajul acestora.",
        "capacity": 930,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/53734\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/53729\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/53730\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/53731\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/53732\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/53733\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3562964,
        "title": "Cumpar Teren",
        "description": "PF cumpar apox 1000 m p teren cu utilitati, fara sarcini, situatie clara, la maxim 15 km de Cluj-Napoca, pentru constructie casa, prefer teren in plan drept.\r\nOfer plata cash la oferte sub pretul pietei.\r\n\"Rog sa nu fiu deranjat de persoane care considera ca in pamant pot gasi zacaminte de petrol , aur, sau alte metale pretioase\" Multumesc!",
        "capacity": 840,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4030762,
        "title": "Inchiriez remorci",
        "description": "Inchiriez Remorca Humbaur 750 masa maxim autorizata, 600 kg util, suprafata utila de incarcare 2010x 1020x 1000 mm, cu prelata pe cadru metalic, fara dispozitiv de franare. Se conduc cu permis de categorie \"B\" indiferent daca masa max autorizata a ansamblului depaseste 3500 kg. Ideale pt a marii suprafata volumica de transport, se inchiriaza cu toate actele la zi.",
        "capacity": 170,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/184522\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3894200,
        "title": "vand",
        "description": "Vand antena parabolica cu motor H-H,receptor cu slot card, doua LNB-uri si oala de 1 m. pret 400 lei. Peste 1000 de programe romanesti si straine.",
        "capacity": 510,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/196257\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4559510,
        "title": "Masina",
        "description": "Vand mercedes w123 (cobra) diesel si multe piese de schimb.",
        "capacity": 720,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/391876\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4303875,
        "title": "caut imprumut pt o locuinta",
        "description": "Familie serioasa cu doi copii locuim cu chirie si am dori un imprumut de 160000 lei pt a cumpara un apartament.( pt 25 ani)pot plati 200 euro lunar.",
        "capacity": 290,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/196169\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3142543,
        "title": "colectie",
        "description": "vand discuri vechi si foarte vechi de vinil. astept oferte 0744216036 .",
        "capacity": 630,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/195686\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/52746\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/52747\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/52748\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/52749\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4047127,
        "title": "Cantar Digital Monede Bijuterii 1Kg \/ 0.1 gr \/ 0.01 gr",
        "description": "Cantar Digital Diete Bijuterii 1Kg \/ 0.1 gr \/ 0.01 gr . Pret 50 LEI. Contact mail, messenger, telefonic si site (site ca idu de mess ).",
        "capacity": 60,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/399472\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4721113,
        "title": "Vand piese schimb iphone 5 4s 4 3gs 3g 2g",
        "description": "Vand piese schimb iphone 4 3gs 3g 2g, sticle touch, butoane, lcd. Vand folii de protectie, huse, incarcatoare, cabluri, piese iphone. Contact mail, messenger, telefonic",
        "capacity": 230,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/217515\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4981043,
        "title": "vand comoda veche si masina de cusut singer",
        "description": "Vand comoda veche 300 si masina de cusut Singer veche in stare buna 200 ron neg",
        "capacity": 330,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/191857\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5032215,
        "title": "Cumpar licenta taxi",
        "description": "PF cumpar licenta de taxi, maxim 3 buc, fara masina.",
        "capacity": 680,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3887664,
        "title": "vand garsoniera mobilata recent.",
        "description": "vand garsoniera finisata si mobilata la pretul de 20500euro sau la 19500euro nemobilata.loc de parcare se poate inchiria la pretul de 20 lei pe luna.SCHIMB CU APARTAMENT CU 2 CAMERE.",
        "capacity": 710,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/238959\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4957184,
        "title": "Vand arbusti fructiferi - mur fara spini, zmeur, catina, afin si coacaz",
        "description": "Ofer spre vanzare diferite soiuri productive de mur (Loch Ness si Smoothstem) - fara spini la ghiveci de 0,5-2 litri - 5-8 lei\/buc. Vand si coacaz negru si rosu, afin de cultura, zmeur si catina - preturi incepand cu 3 lei\/buc. Toate plantele se pot vedea in Campia Turzii. Pentru comenzi mai mari, rog a se suna din timp.  Ing. Adrian Vescan, 0755826736",
        "capacity": 640,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/272299\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/68868\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/68869\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/68870\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/68871\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4957169,
        "title": "Vand zmeur, coacaz, mur fara spini, catina, afin",
        "description": "Ofer spre vanzare diferite soiuri productive de mur fara spini si zmeur la ghiveci - se pot planta oricand-pret 4,5-5 lei\/buc.\r\n Din aceasta luna vand si coacaz negru si rosu (strugurasi), catina, drajoni zmeur si afin la preturi incepand cu 3 lei\/buc.Preturile sunt negociabile la cantitati mai mari. Adrian Vescan, 0755826736",
        "capacity": 270,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/556185\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/68862\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/68864\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/68865\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4458381,
        "title": "haine import marea britanie",
        "description": "Calitatea pe care o oferim este exceptionala iar pretul este cel mai bun de pe piata. \r\n\r\nVindem en-detail \/ en-gros. \r\n\r\nPrintre brandurile pe care le oferim spre vanzare se numara: Zara, Disney, Marks & Spencer, Nike, New Look, George, Dorothy Perkins, Laura Ashley, Dolce Gabbana, Topman, Esprit, Adidas, Cherokee, F&F, Umbro, Gap, Regatta, The North Face, Mammut, TOPSHOP  si altele.\r\n\r\n orar: 10: 00-18: 00\r\n telefon: 0745640585\r\n \r\nPentru intrebari va stam la dispozitie la numarul de telefon de mai sus.\r\n\r\nMomentan avem:\r\n1. Pantaloni trening 18 lei\/kg + TVA. Diferite dimensiuni, culori, branduri. Balot minim 130 kg!\r\n2. Polare 25 lei\/kg + TVA. Diferite dimensiuni, culori, branduri. Balot minim 80 kg!\r\n3. Haine copii CREMA + CATEGORIA 1. FARA incaltaminte si gunoaie! 30 lei + TVA.\r\n\r\n Va multumim!",
        "capacity": 390,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/139556\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4164579,
        "title": "Porumbei albi la nunti oricati...pret f bun",
        "description": "Porumbei de inchiriat pentru nunti. TELEFON 0747929396\r\nVa rog sa sunati. Nu trimite-ti  email. Va multumesc.",
        "capacity": 890,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/146977\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4100914,
        "title": "VAND porumbei diferite rase",
        "description": "vand porumbei de diferite rase. \r\nva rog sa sunati pentru detalii.\r\nva multumesc.",
        "capacity": 520,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3510355,
        "title": "Filmari video",
        "description": "Filmari video nunti sau diverse evenimente editate pe DVD-uri personalizate.Filmari video......................",
        "capacity": 460,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4934949,
        "title": "Vand teren in loc. Fundatura",
        "description": "Curent, apa, gaz la poarta. Cu Autorizatie de Constructie pentru locuinta.",
        "capacity": 20,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.94310960888,23.79220766449&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4934987,
        "title": "Vand spatiu comercial in cart. Zorilor",
        "description": "Suprafata constructie 60mp, teren 130mp, front la strada, in spatele caminelor studentesti din Observator. Poate fi folosit si ca locuinta cu 2 camere, bucatarie si baie.",
        "capacity": 370,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.756720737754,23.589368289948&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4396976,
        "title": "superoferta cimitir zorilor manastur",
        "description": "Vand loc de veci in cimitirul manastur zorilor cu CF cer si ofer seriozitate se poate si in rate de la 1700 eur neg",
        "capacity": 260,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/56856\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4280427,
        "title": "vand alarme moto",
        "description": "Vand alarma moto\u00bb DESCRIERE Compatibilitate: moto, scuter, atv, etc. -Senzor de soc incorporat. -Functii: pornire\/oprire motor din telecomanda, armare\/ dezarmare cu confirmare, rearmare, prealarmare, armare silentioasa, blocarea automata a motorului, anti-robbery, anti- hacking, cautare in parcare, alarmare pentru ajutor, overtaking warning, functie panica, etc. -Pornirea (si oprirea) motorului din telecomanda (fara introducerea cheii in contact, asigur si montaj pret de la 150 ron",
        "capacity": 150,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/196840\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4279053,
        "title": "vand tobe sport",
        "description": "Vand tobe sport pt scutere de 49 cc tobele sant noii dar si second montaj gratuit pret de la 100 ron",
        "capacity": 50,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/56160\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4899226,
        "title": "transport persoane in germania olanda austria",
        "description": "trasport persoane cu bus caravelle 7+1 locuri clima in austria, germania, belgia si olanda pe ruta: viena, linz, vels, passau, regensburg, nuremberg, wurzburg, koln, kassel, dormunt, hanover, bremen, jena, berlin, hamburg, emmen, groningen, leeuwarden, etc.), la destinatie (pentru achizitionarea de autoturisme sau orice altceva) asigur si transport pe platforma. plecari din cluj napoca pentru informati : 0744924611",
        "capacity": 450,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/135671\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4834539,
        "title": "transport persoane in austria germania olanda",
        "description": "trasport persoane cu bus caravelle 7+1 locuri clima in austria, germania, belgia si olanda pe ruta: viena, linz, vels, passau, regensburg, nuremberg, wurzburg, koln, kassel, dormunt, hanover, bremen, jena, berlin, hamburg, emmen, groningen, leeuwarden, etc.), la destinatie (pentru achizitionarea de autoturisme sau orice altceva) asigur si transport pe platforma. plecari din cluj napoca pentru informati : 0744924611 ",
        "capacity": 120,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/243835\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4793300,
        "title": "vand caucicuri ",
        "description": "185\\65\\15 cu cauciuc,185\\60R14 5 buc miselin,185\\60r15 3 buc,265\/35zr18 2 buc\r\n\r\n",
        "capacity": 480,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/578651\/760_567_fit.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/60908\/760\/567\/fit\/ad47933001.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/60907\/760\/567\/fit\/ad47933005.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/74396\/760\/567\/fit\/ad47933006.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4793309,
        "title": "vand usa ford mondeo an 1998",
        "description": "vaind usa ford mondeo partea stanga cu macara electrica cu oglinda,Dezmebrez ford Mondeo Anglia 2l an 2004",
        "capacity": 860,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/250904\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4587228,
        "title": "vand piese de audi A4 doar din anunt",
        "description": "debigmetru aer cu tot cu filtri aer 50 eur,termoflot 30 eur,chit ambreaj 100 eur,volata dubla 1,6 bezina350 lei ,injectoare cod motor ANA Eghere mecanic,termocupla",
        "capacity": 60,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/400088\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/58116\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/58117\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/58118\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/58119\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/58120\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4560172,
        "title": "Receptionera",
        "description": "",
        "capacity": 660,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/439130\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/439131\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4560167,
        "title": "Doresti sa lucrezi intr-un ambient de lux?",
        "description": "Doresti sa lucrezi intr-un ambient de lux? Te platim la zi!",
        "capacity": 230,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/439135\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/439136\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4560180,
        "title": "Fete minim 18 ani",
        "description": "Angajam fete minim 18 ani, cu sau fara experienta, intr-un salon de masaj de lux, cu posibilitate de cazare. 1000-3500 EUR\/luna, cu plata la zi! (detalii in imaginea alaturata)",
        "capacity": 170,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/497027\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/497028\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3861483,
        "title": "Technics rs-b305",
        "description": "DECK TECHNICS RS-B305 dolby,2 motors,full digital.Stare impecabila.Pret 100 lei neg.Inf tel  sau mail",
        "capacity": 530,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/200500\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4802130,
        "title": "technics rs-671us",
        "description": "TECHNICS RS-671US real vintage.An fabricatie 1974 2 motoare,inregistrare redare impecabila.Fara urme de uzura sau zgarieturi.Pret 170 lei neg.Inf la tel sau mail.",
        "capacity": 950,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/200464\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/61019\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/61020\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/61021\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3731027,
        "title": "Tren electric piko scara 120mm",
        "description": "Tren electric compus din :locomotiva electrica vagoane,sine drepte,sine curbe,macaze,cantoane,variator de tensiune.Vand mai multe seturi de trenulete electrice.Stare impecabila.pret 520 lei neg.Inf la tl 0755511800sau mail.",
        "capacity": 410,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/259035\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/53916\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4739266,
        "title": "schimb apartament 3 camere cu o garsoniera",
        "description": "P. F. Schimb apart. Conf. 1 decomandat, 3 camere, etaj2, in Turda, micro 3, bloc caramida IZOLAT TERMIC, supraf. 64 mp, acoperis tabla, baie mare cu geam, balcon inchis, 2 pivnite, garaj, loc de parcare, apometre, centrala, termopane Veka culoare mahon, glafuri din marmura, parchet masiv stejar, usa capitonata la intrare, interfon, telefon, tv cablu, zona verde linistita amenajata de exceptie, peisaj, OCUPABIL IMEDIAT, mobilat PLUS aragaz, frigider, masina de spalat,lustre, covoare persane, etc. . CU APART CU O CAMERA SAU O GARSONIERA PLUS DIFERENTA. INFO: 0760 280024.",
        "capacity": 720,
        "county": "Cluj",
        "city": "Turda",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4739280,
        "title": "inchiriez apartament 3 camere,confort1,dec.",
        "description": "Inchiriez  pana in momentul vanzarii,apart. Conf. 1 decomandat, 3 camere, etaj2, in Turda, micro 3, bloc caramida IZOLAT TERMIC, supraf. 64 mp, acoperis tabla, baie mare cu geam, balcon inchis, 2 pivnite, garaj, loc de parcare, apometre, centrala, termopane Veka culoare mahon, glafuri din marmura, parchet masiv stejar, usa capitonata la intrare, interfon, telefon, tv cablu, zona verde linistita amenajata de exceptie, peisaj, OCUPABIL IMEDIAT,APROAPE DE KAUFLAND,LIDL., mobila PLUS aragaz, frigider, masina de spalat, covoare persane, etc. INFO. 0760 280024. Chirie 210 euro plus garantie.",
        "capacity": 630,
        "county": "Cluj",
        "city": "Turda",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5015338,
        "title": "Vand teren in Vlaha intravilan",
        "description": "Terenul intravilan este de aprox 550 mp in zona linistita cu strada asfaltata. Utilitati la poarta. Pretul este negociabil iar terenul se poate vedea oricand. Cu CF in ordine.",
        "capacity": 200,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3312239,
        "title": "Cumpar tv-uri LCD, LED 26\"-50\" defecte",
        "description": "Cumpar Tv-uri LCD, LED cu diagonala de 26\"-50\" (66cm-127cm) DEFECTE. Ofer 80-180 Lei pentru cele cu display fisurat si 120-300 Lei pentru cele cu display nefisurat in functie de marca\/model\/stare tehnica si estetica. Aparatele trebuiesc aduse in cartierul Marasti pe str: Teleorman. Detalii Suplimentare Zilnic: L-S in intervalul orar: 10:00-20:00.",
        "capacity": 520,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/197879\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/62005\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/62006\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/62007\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/62008\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2683050,
        "title": "ocazie apartamente noi Apahida la doar 16000 euro",
        "description": "Am finalizat vanzari si prin programul prima casa. cel mai mic pret din zona. vindem si cu avans 50 % si rate pe 5 ani.Toate utilitatile, internet, tv cablu, telefonie fixa la usa. Blocul este locuit  de 3 ani. Pretul afisat este valabil doar la plata integrala. extras CF.",
        "capacity": 330,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Apahida",
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/236354\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.815564472326,23.740580505372&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2823341,
        "title": "apartamente Apahida 2 cam 76 mp 28000 euro si in rate",
        "description": "cele mai spatioase apartamente de 2 camere. vanzari finalizate prin programul prima casa. vindem si direct cu avans minim 70% si rate pe max 5 ani. Toate utilitatile, internet, telefonie fixa, tv cablu la usa. Apartamentul poate fi folosit ca si unul de 3 camere. Blocul este locuit de 3 ani. Pretul afisat este valabil doar pentru plata integrala apartamente la parter si etajul 3.avem pe stoc si apartamente finisate complect. Extras CF.",
        "capacity": 610,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Apahida",
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/236350\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.814624653704,23.738520568848&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3644571,
        "title": "apartamente in apahida etaj 1 si 2 la 18500 Euro",
        "description": ". Vanzari finalizate prin programul prima casa. Vindem si direct cu avans minim 50% si rate pe max 5 ani. Toate utilitatile, internet, telefonie fixa, tv cablu la usa. Apartamentul se poate folosi ca si unul de 2 camere. toate utilitatile, extras cf, internet si telefonie fixa disponibile la usa. Blocul este deja locuit. Pretul afisat este valabil doar pentru plata integrala. EXTRAS CF.",
        "capacity": 120,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Apahida",
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/236346\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.815094565068,23.739207214356&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3501720,
        "title": "Apartament 1 camera  Zorilor",
        "description": "Agentia Imobiliara Mobitim vinde apartament living cu bucatarie si dormitor, etaj intermediar, zona Observatorului, imobil nou finalizat cu Cf, 39,43 mp,  Pret 40500 euro.",
        "capacity": 430,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/276459\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4709328,
        "title": "Rochie de mireasa model 2012",
        "description": "Vand rochie de mireasa absolut SUPERBA, care-ti pune in evident corpul si te subtiaza vizibil datorita croiului. La spate este prevazuta cu fermoar si corset, astfel ca marimea este reglabila. Ofer ca BONUS geantutza si cosuletzul pentru florile de pus in piept. Pret 650 lei. (o dau la jumatate din pretul de achizitie), este in stare excelenta-las pozele sa vorbeasca. Te astept la proba sau daca vrei mai multe poze cu ea, da-mi un mail. Detalii la tel 0756462800.",
        "capacity": 690,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/383493\/760_567_fit.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/59465\/760\/567\/fit\/ad47093283.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/59466\/760\/567\/fit\/ad47093284.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/59467\/760\/567\/fit\/ad47093285.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5027126,
        "title": "mrm vinde ferma agricola",
        "description": "Ferma detine in proprietate un teren de 15000 mp si mai are in arenda pe 9 ani un teren in suprafata de 460 de ha. Efectivul de animale este la ora actuala de 780 de bovine. Atat pt teren cat si pt animale ferma beneficiaza de subventii.Intreaga productie de lapte este contractata. Ferma dispune de utilaje ,constructii si personal calificat pt a-si putea desfasura activitatea la standarde europene .",
        "capacity": 780,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5032455,
        "title": "Rochie super eleganta",
        "description": "Vand URGENT rochie de gala super eleganta, culoare verde chinezesc, din matase naturala plina iar in partea de sus este aplicata dantela. Rochia a fost purtata o singura data si arata impecabil. A fost purtata de o persoana cu inaltimea de 1.65 m si avand 53 kg ( aprox. Marimea 38). Dantela care este aplicata in partea de sus este facuta manual si este UNICAT",
        "capacity": 900,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/93132\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/93133\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/93134\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3968921,
        "title": "Cablu Date Apple Ipad Iphone 5 4S 4 3GS 3G 2G",
        "description": "Cablu Date Apple Ipad Iphone 4S 4 3GS 3G 2G . Incarcator Apple Ipad Iphone 4S 4 3GS 3G 2G, Vand piese schimb Iphone 4 3GS 3G 2G, sticle touch, butoane, lcd. Vand folii de protectie, huse, incarcatoare, cabluri, piese iPhone. Contact mail, messenger, telefonic",
        "capacity": 710,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/182718\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4768458,
        "title": "Vrei sa iti pui in valoare inteligenta? Hai in echipa noastra si poti avea castiguri substantiale de peste 3500 lei lunar. In plus, iti oferim o surpriza la interviu!",
        "description": "Exquisite Studio angajeaza tinere misterioase pentru discutii prin intermediul camerei web. Noi asteptam sa intalnim o fire sociabila, cu aspect fizic placut, cu varsta de minim 18 ani si cunostinte la nivel mediu de limba Engleza.\r\n\r\nVrei sa iti pui in valoare inteligenta? Vrei sa castigi peste 3500 lei lunar? \r\nExquisite Studio iti ofera cel mai bine platit job din Cluj, 100% legal si discret.\r\n\r\nCrezi ca am acumulat o experienta de peste 3 ani pe piata din Cluj cu baloane de sapun? Vezi testimonialul din anunt si vino intr-o proba de lucru platita.\r\nTe vei convinge singura!",
        "capacity": 190,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/piata-az.loc\/media\/resize\/611355\/760\/567\/fit\/logo-anunt-piata.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/629893\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/507160\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/507161\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/507162\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/507163\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/507164\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/507165\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/507166\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3356139,
        "title": "Vand proprietate in GRUIA!!!",
        "description": "Persoana fizica v\u00e2nd \u00een Gruia, str. V\u00eenatorului, nivelul 1 al unei vile, decomandat, compus din 3 camere, baie, bucatarie, 2 terase foarte mari, pivnita si garaj cu usa automatizata la demisol, suprafata totala de 180 mp, finisat, parchet, gresie, faianta, zugravit lavabil modern, modificari interioare, usa antiefractie, centrala termica, contoare gaz, telefon, tv. Cablu, internet, izolatie de 10 cm. Curte comuna 1500 mp, cu acces automatizat si gradina (livada) 160 mp. Zona este foarte linistita, la 10 minute de mers pe jos de centru, cu o panorama deosebita. Poze la cerere pe email. Merita vazuta!!! Pret 150000 EUR.",
        "capacity": 460,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4606519,
        "title": "cumpar timbre",
        "description": "Cumpar timbre clasoare colectie de timbre si  serii colite etc.",
        "capacity": 990,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5038998,
        "title": "SC ang. soferi de taxi cu\/fara atestat",
        "description": "SC ang. soferi de taxi cu\/fara atestat, oferim conditii foarte avantajoase. Masini: Renault Fluence, Clio, Dacia Logan model nou. Inf. pe str. Meteor nr. 44, zilnic, orele 17.00-18.00.\r\nTel: 0725-218812, 0725-218814, 0725-218816, 0747-111166",
        "capacity": 440,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5040237,
        "title": "Sonorizari evenimente",
        "description": "Sonorizez diferite evenimente (nunti, botezuri, petreceri private). Dj experimentat cu aparatura profesionala de sunet si lumini.",
        "capacity": 900,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4921586,
        "title": "vand renault laguna inmatriculat",
        "description": "Masina merita vazuta.Climatronic,geamuri el.oglinzi el.si incalzite,airbag,abs,.Taxa platita si nerecuperata.masina este ok.ITP valabil 2016.",
        "capacity": 710,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/238982\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/64804\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/64806\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/64807\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/64808\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/64809\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4539213,
        "title": "Dezmembrez BMW  E36\/E46 - 316 323, 328, 325, 318",
        "description": "E46 sedan, compact, touring\r\nE39\/E34 sedan, \r\nE36 coupe\/cabrio\/sedan.touring. Motoare diesel si benzina, M paket.",
        "capacity": 430,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/252220\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/57738\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/57737\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/57741\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/59402\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4785221,
        "title": "cumpar auto intreg\/lovit\/volan dreapta",
        "description": "BMW, Audi, Vw sau alte marci, lovite, cu volan pe dreapta, functionale sau defecte!!",
        "capacity": 250,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/379486\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5040329,
        "title": "schimb casa  de vacanta",
        "description": "schimb casa de vacanta  in com baisoara const  2009,din bca,4 camere,bucatarie,living,2  bai,550mp teren 110mp construiti cu  ap  2 camere   sau ap  cu 1 camera +difernta  in cluj napoca sau  floresti",
        "capacity": 300,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.617959975796,23.393137878418&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5040341,
        "title": "Innoieste parchetul din casa ta!",
        "description": "Parchetul va arata ca nou in cel mai scurt timp si la un tarif decent! Se lucreaza cu tehnologie ultramoderna: masina de raschetat nr 1 mondial Laegler-Hummel, masina de margini, buffer profesional, etc, cu chituri ecologice gata preparate, lacuri ecologice fara miros, antiderapante, de cea mai buna calitate de pe piata!",
        "capacity": 830,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/202417\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3961997,
        "title": "Incarcator Apple Ipad Iphone 5 4S 4 3GS 3G 2G",
        "description": "Incarcator Apple Ipad Iphone 5 4S 4 3GS 3G 2G , Vand piese schimb Iphone 4 3GS 3G 2G, sticle touch, butoane, lcd. Vand folii de protectie, huse, incarcatoare, cabluri, piese iPhone. Contact mail, messenger, telefonic",
        "capacity": 90,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/214733\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4744251,
        "title": "Vand folii huse incarcatoare iphone 5 4s 4 3gs 3 2g",
        "description": "Vand folii de protectie, huse, incarcatoare, cabluri, piese iPhone. Contact mail, messenger, telefonic",
        "capacity": 670,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/214578\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4966836,
        "title": "vand \/schimb vila LUX  noua sucutard la lac si parcele de 500 mp ",
        "description": "vand\/schimb cu imobil cluj ofer in functie de valore sidiferenta, vila din 2010 p+m 2 living,4 DORMITOARE MARI,2 BAI,1 TERASA 36 MP,1 BALCON ,beci,bucatarie,TEREN 2000 MP,langa sosea,apa,gaz,curent,canal,vedere lac de peste sosea ,zona superba,45 km de cluj,pe asfalt,posibil agroturism,ciupearcarie,fonduri nerambursabile,magazin la parter si locuinta la etaj sau schimb cu casa,apartament,teren in cluj,se poate parcela,izolata termic,termopane,cemtrala,tot confortul pentru pretentiosi,sau schimb cu teren sau imobiil in cluj,eventual ofer diferenta",
        "capacity": 610,
        "county": "Cluj",
        "city": "Gherla",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/165859\/760_567_fit.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/71367\/760\/567\/fit\/ad49668361.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/71368\/760\/567\/fit\/ad49668362.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/71369\/760\/567\/fit\/ad49668363.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/71370\/760\/567\/fit\/ad49668364.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/71371\/760\/567\/fit\/ad49668365.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.901876889596,24.064848846436&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4965902,
        "title": "vand gradina la sosea 18 km toate utilitatil",
        "description": "vand gadina pozitie superba in rascruci la 60 m de soseaua cluj-dej,livada,langa case,panorama,15 minute cu masina din cluj,se preteaza la orice,toate utilitatile,sau fac schimb cu teren in cluj +diferenta",
        "capacity": 890,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4733506,
        "title": "Apartamente cu CF finalizate in Floresti",
        "description": "Ansamblul Multiserv vinde DIRECT DE LA CONSTRUCTOR \u00een Floresti, apartamente cu CF finalizate, - ap. 1 cam. - Preturi incepand de la 14.000 euro;  - ap. 2 cam. - Preturi incepand de la 18.900 euro;  - ap. 3 cam. - Preturi incepand de la 24.500 euro",
        "capacity": 630,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Floresti",
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/607477\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4733527,
        "title": "Inchiriez SPATII COMERCIALE intre 60-120 mp utili",
        "description": "Inchiriez SPATII COMERCIALE intre 60-120 mp utili, Floresti, zona comerciala, pret incepand de la 150 EUR\/luna.",
        "capacity": 530,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Floresti",
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/607476\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5040507,
        "title": "Cursuri Autorizate:",
        "description": "Scoala Nationala de Meserii (ONG), deschide cursuri autorizate: \u2022 bucatar; ospatar, barman; \u2022 macelar, carmanger, transator; \u2022 croitor; \u2022 brutar, patiser, cofetar;  \u2022 lucrator in comert; \u2022 stilist protezist unghii;\u2022 frizer, coafor, mani-pedi; \u2022 cosmetician; \u2022 tehnician maseur, reflexo; \u2022 constructor; \u2022 agent securitate; \u2022 ORICE MESERIE  www.cursuri-calificare-autorizate.ro\r\n\r\nPreturi minime 300 lei in rate, sprijin angajare, program flexibil cursuri.\r\n",
        "capacity": 470,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/634591\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3373849,
        "title": "Telecomanda tv LCD-Led-Plasma",
        "description": "Vand telecomanda ce poate clona orice alt tip de telecomanda ( cd-auto, dvd-recorder, tv lcd\/led\/plasma, receiver, proiector, tuner tv, sistem5.1) sau poate fi programata dupa marca si modelul aparatului. Pretul este pentru telecomanda programata pentru Marca si Modelul aparatului care-l doriti. Detalii suplimentare de L-S in intervalul orar: 10:00-20:00. \r\n\r\n",
        "capacity": 350,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/302410\/760_567_fit.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/53429\/760\/567\/fit\/ad33738493.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5040618,
        "title": "Electrician",
        "description": "Schimb tablouri de siguranta, prize, montez corpuri de iluminat, execut instalatii electrice la case, apartamente, cabane, de la A-Z, PRETURI NEGOCIABILE, ma deplasez si in afara jud. pentru lucrari mai mari, ofer calitate si seriozitate.",
        "capacity": 370,
        "county": "Cluj",
        "city": "Turda",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/601203\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4894010,
        "title": "Casa pe 2 nivele, 78000 euro",
        "description": "1%comision! Agentie imobiliara vand casa ultracentral, 3 camere, in Centru, suprafata 70 mp, pe 2 nivele, finisaje moderne, parchet, gresie, faianta, usa antiefractie, geamuri termopan, centrala termica, terasa de aproximativ 30 mp, preteabil locuit, sediu firma, cabinete, etc Pret 78000 EUR, negociabil. Ideal Investitie! ",
        "capacity": 450,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/141603\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4893954,
        "title": "1%comision! 2 camere, c-tie noua, 45000",
        "description": "Agentie imobiliara vinde  apartamente in constructie noua, 2 camere, in Manastur,suprafete intre 58 - 60 mp,  2 balcoane, finisate sau semifinisate usa antiefractie, geamuri termopan, centrala termica, 2 tipuri de structuri,cu CF. Zona linistita, spatii verzi, priveliste deosebita.Preturi incepand de la 45000 EUR, se poate cu prima casa, credit, transe. Merita vazut!.",
        "capacity": 850,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/304718\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4861171,
        "title": "amenajare si intretinere spatii verzi !!!",
        "description": "T\u00e2nar inginer ofer la cele mai bune tarife si cu maxim de profesionalism urmatoarele servicii: AMENAJARE si  \u00ceNTRETINERE SPATII VERZI(tuns gazon, gard viu, fasonat arbori pana la 4m inaltime). Va invit sa cautati Evas Servicii pe F-book si Google pentru a va convinge! Tel: 0742.856.568 sau ionuthosu@ymail.com",
        "capacity": 40,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/462312\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4861201,
        "title": "deratizare, dezinfectie, dezinsectie",
        "description": "T\u00e2nar inginer ofer la cele mai bune tarife si cu maxim de profesionalism urmatoarele servicii: DERATIZARE, DEZINFECTIE, DEZINSECTIE (detin autorizatie sanitar-veterinara si folosesc produse de ultima generatie, eficiente si de calitate). Tel: 0742.856.568 sau ionuthosu@ymail.com",
        "capacity": 830,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/437774\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4542134,
        "title": "CENTRU DE TERAPIE SEXOLOGICA",
        "description": "CENTRU DE TERAPIE SEXOLOGICA acorda consultanta, diagnostic si tratament\r\npentru disfunctiile sexuale masculine si feminine. Program cu publicul\r\neste de luni-sambata ora 9-19. Programari la numarul de mobil 0742885979\r\nsau pe adresa de e-mail office@sex-man.ro. Pentru mai multe informatii\r\naccesati pagina de website a cabinetului www.sex-man.ro",
        "capacity": 230,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/190488\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4882581,
        "title": "apartament 1 camera zorilor",
        "description": "Agentia imobiliara MOBITIM vinde apartament 1 camera in zorilor zona str. observator , 40 mp ,semifinisat ,et. int.cu parcare subterana inclusa in pret ,imobil nou finalizat cu extras de carte funciara.\r\npret 39900 eur.",
        "capacity": 750,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/124337\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4892961,
        "title": "Apartament cu 2 camere Manastur",
        "description": ". Agentia imobiliara MOBITIM vinde in cart.Manastur apartament 2 camere ,57 mp util,et 3\/4,semifinisat cu centrala termica si calorifere.Apartamentul este situat in zona foarte buna si este in imobil nou finalizat cu extras de carte funciara ,pretabil pentru orice tip de credit. Pret 54000 eur.",
        "capacity": 520,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Manastur",
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/124314\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4890062,
        "title": "vand 10 m gard balustrada metalic",
        "description": "in plus 3 m mana curenta acces pe scara, rezultate din demolare. Inaltime 1 m.\r\npret 150 lei\/ml",
        "capacity": 390,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/237039\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/63614\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/63615\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/63616\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/63617\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/63618\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3979604,
        "title": "Cumpar LCD TV FULLHD diag mare 82-106-117cm 800 lei",
        "description": "Cumpar televizor color LCD fullHD. Ofer 800 LEI. Doar lcd si diagonala mare.",
        "capacity": 120,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/55299\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4970837,
        "title": "Meditez sedinte de chitara acustica, electric",
        "description": "Meditez  sedinte de chitara  acustica, electrica, solo ,blues, roch,  speed, Detin sala, chitari de toate felurile, amplificatoare si materiale pt studiu.garantez  rezultatele !!!! RABDATOR ,   DISCIPLINAT si PERSEVERENT pentru toate varstele. Peste 15 studenti  copii femei, adolescenti si barbati  studiem  impreuna chitara de 5 ani",
        "capacity": 790,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/276557\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4992732,
        "title": "Vand Cap  marshall nou in garantie 2 ani   mo",
        "description": "Vand  Cap  marshall   nou in garantie 2 ani   model  AVT150",
        "capacity": 150,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/77789\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4970266,
        "title": "Oferta teren constructii",
        "description": "Teren situat pe str. Sesul de sus intre ansamblul ALE-AVIS si ansamblul MAGIC. Se accepta si alte variante de plata. Front 34 ml. Se poate cumpara si mai mult teren in acelasi loc. Sunt toate utilitatile in fata terenului, iar drumul este asfaltat. Se poate cumpara si 7000 mp cu front 22 ml sau 8148 mp cu front 25 ml sau 9440 mp cu front 29 ml.Se poate cumpara pina la 35000 mp.",
        "capacity": 640,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.740797637563,23.467295593262&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4970285,
        "title": "Oferta teren constructii",
        "description": "Este si drum de servitute pe lungimea terenului de 136m. Se accepta si schimb cu apartamente,asociere sau altceva.Se poate construi P+2ET+M. Este pe str. TEIULUI.",
        "capacity": 780,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.733621148324,23.476565307618&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5042433,
        "title": "Vand  Teren    11. 800 metri patrati 1Ha in T",
        "description": "Teren    11. 800 metri patrati 1Ha in Turda zona Costesti(in turda Noua)30 km de cluj extravilan. 2 euro mp posibilitate de intravilan si constructie.Titlu de proprietate. 700 metri   de la soseaua principala. Se poate si parcela",
        "capacity": 80,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/472323\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4717929,
        "title": "Vand proprietate in GRUIA!!!",
        "description": "Persoana fizica v\u00e2nd \u00een Gruia, str. V\u00eenatorului, nivelul 1 al unei vile, decomandat, compus din 3 camere, baie, bucatarie, 2 terase foarte mari, pivnita si garaj cu usa automatizata la demisol, suprafata totala de 180 mp, finisat, parchet, gresie, faianta, zugravit lavabil modern, modificari interioare, usa antiefractie, centrala termica, contoare gaz, telefon, tv. Cablu, internet, izolatie de 10 cm. Curte comuna 1500 mp, cu acces automatizat si gradina (livada) 160 mp. Zona este foarte linistita, la 10 minute de mers pe jos de centru, cu o panorama deosebita. Poze la cerere pe email. Merita vazuta!!! Pret 150000 EUR.",
        "capacity": 800,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3518583,
        "title": "resoftez  iphone 2g, 3g , 3gs , 4g, 4s",
        "description": "Resoftez(upgrade) APPLE IPHONE 2G,3G,3GS,4G,4S, IPAD 1,IPAD 2,IPOD TOUCH.Resoftez cu sau fara upgrade de baseband(daca primesti la restore din Itunes eroarea 10xx sau iti intra in recovery mode).Resoftez daca ai dat reset all settings si nu iti mai porneste..Creez cont gratuit pe Itunes(NU necesita card).DECODEZ OFICIAL PRIN IMEI.Fac jailbreak si repar orice problema legata de soft.",
        "capacity": 870,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/135006\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4003741,
        "title": " jailbreak  ipad 1,2 Ipod  Iphone",
        "description": "Fac jailbreak pentru Orice produs Apple(Ipad, Iphone,Ipod touch) inclusiv pentru IOS 6, 6.0.1, 6.1.(UNTethered Jailbreak) pentru Iphone 3GS, 4G, 4GS, IPAD 1, IPAD 2, IPOD TOUCH.Instalez aplicatii, jocuri ,navigatie.",
        "capacity": 30,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4250550,
        "title": "Evidenta contabila completa",
        "description": "Tin evidenta contabila completa inclusiv bilant,Intrastat, REVISAL pentru SRL, PFA,ONG-uri ,Preturi de criza\r\n Preiau si firme cu evidenta contabila neglijata...",
        "capacity": 640,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5043686,
        "title": "Vand Renault Megane 2 1.6 16v",
        "description": "Reviziile tehnice la zi, ITP valabil oct.2013, 6 airbag-uri, volan piele, comenzi pe volan, volan+scaun sofer reglabil inaltime, cotiera, senzori lumini+ploaie, tetiere pentru fiecare loc, proiectoare ceata.",
        "capacity": 660,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/98111\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/98112\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/98113\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/98114\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/98115\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/98116\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3715713,
        "title": "Vrei 2500 Ron pe luna? Sti limba engleza? Te asteptam la VideoChat Cluj !",
        "description": "VideoChat Cluj iti ofera acum oportunitatea unica, de care cu siguranta vei dori sa profiti! Alatura-te echipei noastre si vei scapa de greutatile financiare, vei avea un job cu program flexibil, situat intr-o locatie centrala, cu training specializat si procente intre 50 si 70%. Ai acum sansa sa castigi, legal, un salariu care sa-ti acopere toate cheltuielile, din care sa-ti permiti, in timp, o masina sau sa platesti o rata la o casa.  Pe scurt, poti catiga toti banii de care ai nevoie !\r\n\r\nYM: videochat_cluj \/ instinct_studio \r\nTel: 0746 074 373\r\noffice@videochatcluj.ro\r\n\r\nVideoChat Cluj este cel mai serios, performant si profesional studio din Cluj-Napoca.\r\nA fi model la VideoChat Cluj este placut si distractiv atunci cand lucrurile sunt facute cu seriozitate si profesionalism. Din acest motiv venim in ajutorul modelelor cu care colaboram cu urmatoarele :\r\n\r\n- Confidentialitate, discretie si securitate maxima;\r\n- Programul de lucru flexibil, fiecare model isi stabileste programul dupa care doreste sa lucreze;\r\n- Cadrul legal de munca cu contract si carte de munca;\r\n- Acces instant la incasari si plati bilunare la cursul oficial;\r\n- Sistem de bonusare de la 50 pana la 70%;\r\n- Spatii individuale de lucru;\r\n- Sistem on-line de managment si programare a timpului de lucru;\r\n- Aparatura tehnica special conceputa pentru acest domeniu;\r\n- Conexiune la internet prin fibra optica de mare viteza;\r\n- Suport tehnic non-stop;\r\n- Trainning pentru a lucra in videochat;\r\n- Sedinte foto pentru fiecare model in parte;\r\n- Cursuri de limba engleza si franceza pentru perfectionare;\r\n- Concursuri si bonusuri pentru modele.\r\n\r\nYM: videochat_cluj \/ instinct_studio \r\nTel: 0746 074 373\r\noffice@videochatcluj.ro\r\n\r\nAngajam fete pentru a lucra la Videochat Cluj.\r\nCerinte :\r\n- Varsta min. 18 ani;\r\n- Cunostinte de limba engleza;\r\n- Dorinta de a fi independeta financiar;\r\n\r\nYM: videochat_cluj \/ instinct_studio \r\nTel: 0746 074 373\r\noffice@videochatcluj.ro\r\n\r\nDe ce sa aleg VideoChatCluj?\r\n- Este ideal pentru domnisoarele si doamnele intre 18 si 35 de ani;\r\n- Este ideal pentru ca puteti castiga sume mari de bani intr-un timp relativ scurt;\r\n- Este ideal pentru ca puteti sa va achizitionati sau satisface diferite nevoi;\r\n- Este ideal pentru ca lucrati intr-un mediu relaxant si prietenos;\r\n- Este ideal pentru ca va puteti imbunatati cunostintele de limba engleza, franceaza, germana, italiana;\r\n- Este ideal pentru ca va puteti pune in lumina frumusetea, senzualitatea si imaginatia;\r\n\r\nFiecare model lucreaza singura in camera. Nu se lucreaza cu moderatori.\r\n\r\nYM: videochat_cluj \/ instinct_studio \r\nTel: 0746 074 373\r\noffice@videochatcluj.ro\r\n",
        "capacity": 420,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/223722\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/223723\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/223724\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/223725\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/223726\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/223727\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/223728\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/223729\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/223731\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4629773,
        "title": "Vand proprietate in GRUIA",
        "description": "Persoana fizica v\u00e2nd \u00een Gruia, str. V\u00eenatorului, nivelul 1 al unei vile, decomandat, compus din 3 camere, baie, bucatarie, 2 terase foarte mari, pivnita si garaj cu usa automatizata la demisol, suprafata totala de 180 mp, finisat, parchet, gresie, faianta, zugravit lavabil modern, modificari interioare, usa antiefractie, centrala termica, contoare gaz, telefon, tv. Cablu, internet, izolatie de 10 cm. Curte comuna 1500 mp, cu acces automatizat si gradina (livada) 160 mp. Zona este foarte linistita, la 10 minute de mers pe jos de centru, cu o panorama deosebita. Poze la cerere pe email. Merita vazuta!!! Pret 150000 EUR.",
        "capacity": 950,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5044110,
        "title": "Vand hala",
        "description": " Vand hala de caramida pe cadre de beton 350 mp (constructie veche) cu teren. Suprafata totala proprietate : 1156 Mp, in Jucu de Mijloc, la 200 m de soseaua Cluj- Dej, in complex de hale. Apa, curent 220-380V, etc. Pretabil orice activitate. Necesita reparatii. Se poate finisa la cerere. Zona industriala cu mare potential de dezvoltare. Rog seriozitate.",
        "capacity": 540,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/548135\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4714895,
        "title": "Amanet-cu diverse, str: Memorandumului nr: 23.",
        "description": "Oferim imprumuturi pe loc, rambursabile si in rate, fara TVA foarte avantajoase, rapide pe loc cu garantii diverse: AUTO ,Foto de marca ,AUR, ARGINT,Iphonuri,LAPTOPURI  Ipaduri,elecronice,TV LCD ,Telefoane de marca, tablete,ceasuri  de aur si argint sau alte garantii-reale!! Doar noi va evaluam produsele la valori maxime ! Platim AUR de 14K cu 70 lei\/gram si ARGINTUL cu 2 Lei sau 2,50 Lei !!!La intelegere si pe termen lung in 10 rate Platim cel mai bine AURUL  si ARGINTUL!.Oferim seriozitat si practicam cele mai mici comisioane!!!.VINDEM IEFTIN LAPTOPURI, si TELEFOANE intre 200 si 600 de lei!!Vindem bijuterii ARGINT la 6 lei\/gram  !Zilnic intre orele 9 si 19. Sambata 10 - 15.Tel 0745377043. STR MEMORANDUMULUI NR 23. IN AMANET !",
        "capacity": 890,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4410995,
        "title": "Vand Casa caramida, Uzina,Somesu-Rece !!!",
        "description": "Casa din caramida P+E solida,toata din caramida mare,foarte calduroasa si luminoasa in zona turistica deosebita,la sosea.Se vinde total mobilata si utilata,mobila moderna din 2008, teren 500 mp,garaj si foisor de lemn masiv 28mp,gratar zidit,bucatarie de vara zidita, drum perfect si asfaltat  pana in curte !!! Casa se preteaza la oameni care se respecta si  doresc confort maxim  in mijlocul naturii !!!",
        "capacity": 60,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/576036\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4993836,
        "title": "Memorandumului 23 Amanet  student !!!",
        "description": "Amanet oferim pe loc fara birocratie si fara timp pierdut imprumuturi rapide cu comisioane mici, fara tva, . Noi va asteptam cand aveti nevoie de bani! Puteti plati si in  rate !!! In maxim 5 minute aveti banii indiferent de suma ! Platim foarte bine AURUL si ARGINTUL sub orice forma !!!Vindem aur la 110lei\/gram si bijuterii de argint superbe la doar 6 lei\/gram Luam si electronice,laptopuri, telefoane,diverse,aur,argint ,,nootbuk,TV leed si Lcd,tablete si aparate Foto DSLR,obiective foto.....  ! Avem la vanzare IPON 4 de 16 G negru si Acer S 500 impecabile,aparat foto Nikon DSLR,si leptopuri de 300-700 lei !!! Oferim imprumuturi cu garantii AUTO !\r\nStr: Memorandumului nr 23. Tel: 0745377043.Zilnic: 9 - 19  Sambata 10- 15.",
        "capacity": 720,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4763066,
        "title": "Amanet cu diverse electronice,telefoane,laptopuri,foto !",
        "description": "AMANET oferim imprumuturi avantajoase fara TVA cu termene lungi sau scurt,la intelegere,comisioane mici ,cerem garantii diverse electronice :laptopuri, nootbuk,Iphonuri,tablete de marca,autoturisme.atv,si electronice,TV LCD ,aparate si obiective  FOTO, de marca sau bijuterii argint  si   aur si rupturi,telefoane diverse!  Vindem diverse electronice,telefoane,laptopuri,tablete si aparate foto,foarte ieftine, ieftine! Platim cel mai bine AURUL ! ARGINTUL !!!.Zilnic intre orele 8,30 si 19,30 . Sambata: 10 - 16.Tel 0745377043.Doar noi venim in sprijinul vostru PUTETI PLATII SI IN  10 RATE! De la noi plecati foarte multumiti si  cu banii in buzunar!!! STR MEMORANDUMULUI NR 23 .L - V : 9  - 19. S: 10 - 15.",
        "capacity": 240,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3431170,
        "title": "efectuez diagnoza auto: vw, skoda, seat, audi",
        "description": "efectuez diagnoza auto: vw, skoda, seat, audi pret 30 lei.     ",
        "capacity": 780,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/53194\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4859852,
        "title": "Vanzare casa 6 camere in cart Manastur",
        "description": "REMAX Grup de Lux ofera la vanzare o casa frumoasa, in cartierul Manastur, D+P+M, suprafata utila 280 mp, teren aferent 1000 mp, 6 camere, 2 bucatarii, 3 bai, garaj. Se accepta si schimb cu apt si diferenta de bani.\r\nPret 249.000 euro. Inf str C Brancusi nr. 99 ( ciuperca) tel 0264 - 45 00 00 sau \r\n0731- 066114.",
        "capacity": 410,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/231510\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 863538,
        "title": "B-Plast profile REHAU Germania - REDUCERE 50%",
        "description": "B-Plast - Cluj-Napoca, B-dul 21 Decembrie nr.18 (vis-a-vis de Sora) IN CURTE - profile REHAU Germania - Pachet TERMOPAN Low-E cu Argon - Feronerie Roto Germania... (vezi anuntul in imaginea alaturata)",
        "capacity": 550,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/497974\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4389143,
        "title": "LUCRARI CONSTRUCTII",
        "description": "LUCRARI CONSTRUCTII - izolari fatade - case la rosu - finisaje int. - garduri - izolatii acoperisuri ... (vezi anuntul in imaginea alaturata)",
        "capacity": 210,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/56826\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4219661,
        "title": "ARHITECH - birou de arhitectura",
        "description": "ARHITECH - birou de arhitectura (arhitect Nicolae Mirisan) \u2022 Locuinte, vile \u2022 Imobile de birouri, centre comerciale \u2022 Hale, constructii industriale \u2022 Constructii agricole\r\n\u2022 Renovari, mansardari, extinderi \u2022 Turism, hoteluri \u2022 Fonduri Europene nerambursabile ... (vezi anuntul in imaginea alaturata)",
        "capacity": 50,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/55629\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2625842,
        "title": "Cursuri generale pentru adulti 10 martie - 18 aprilie",
        "description": "Cursuri generale pentru adulti: 10 martie - 18 aprilie: Engleza, Germana, Franceza, Spaniola, Italiana, Olandeza, Norvegiana, Suedeza, Maghiara si Romana.",
        "capacity": 540,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/639444\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2651753,
        "title": "BaCons - tehnica parasolara",
        "description": "JALUZELE ORIZONTALE; - PERDELE PANGLICA; - RULOURI TEXTILE - Prezentare gratuita la sediul, locuinta Dvs. ... (vezi anuntul in imaginea alaturata)",
        "capacity": 150,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/336333\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3701166,
        "title": "BETA SYSTEM SRL, service imprimante",
        "description": "Service specializat imprimante. Reincarca, reconditioneaza cartuse laser si cerneala.\r\nComercializeaza imprimante matriciale, laser, cerneala si consumabile.",
        "capacity": 260,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/53861\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4251718,
        "title": "PLASA DE SARMA, confectii metalice, garduri..",
        "description": "SC Bimetalica SRL, str. Octav Bancila nr. 39, Cluj-Napoca, Someseni, langa Caminul Cultural: PLASA DE SARMA, CONFECTII METALICE: garduri fier forjat, porti, usi metalice, grilaje, copertine, balcoane...(vezi detalii in imaginea atasata)",
        "capacity": 880,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/55990\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2740398,
        "title": "Apartamente cu 1, 2 si 3 camere",
        "description": "Vanzare in rate direct de la constructor si prin PRIMA CASA sau schimb cu TEREN!! De vanzare direct de la constructor cu plata integrala sau in rate direct de la constructor APARTAMENTE CU 1, 2, 3 CAMERE, Floresti str. Eroilor ... (vezi anuntul in imaginea alaturata)",
        "capacity": 440,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Floresti",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/59372\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2554986,
        "title": "Apartamente str. Viorelelor",
        "description": "Apartamente str. Viorelelor: apartament 2 camere, 42 mp + balcon, 35.000 euro. Carte funciara ... (vezi anuntul in imaginea alaturata)",
        "capacity": 220,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Marasti",
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/488866\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4220616,
        "title": "Lucrari de instalatii in compensare cu ap. sau gars.",
        "description": "SC de instalatii executa <b>lucrari de instalatii in compensare<\/b> cu apartament sau garsoniera in zona centrala\/semicentrala Cluj. Carpat Instal - proiectare si executie lucrari de apa, canal, electrice si termice.",
        "capacity": 710,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/607939\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/201795\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4396810,
        "title": "Husqvarna - Magazin nou in Marasti!!!",
        "description": "Am deschis un nou magazin in Marasti, langa Baumax - str. Aurel Vlaicu nr. 152, tel: 0264-433072, orar Luni-Vineri 09-17. Comenzi online pe site!",
        "capacity": 570,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/421264\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 1564026,
        "title": "AER CONDITIONAT, CLIMATIZARE, VENTILATIE",
        "description": "AER CONDITIONAT, CLIMATIZARE, VENTILATIE - <b>www.climavent-construct.ro<\/b> - vanzare, montaj, service ... (vezi anuntul in imaginea alaturata)",
        "capacity": 880,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/57111\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3616892,
        "title": "Firma de constructii vindem SPATII COMERCIALE",
        "description": "Firma de constructii vindem SPATII COMERCIALE, cu CF in ansamblu nou (Calea Turzii nr. 162-168), suprafere cuprinse intre 80-100 mp, semifinisate cu curent trifazic si PARCARI EXTERIOARE. ",
        "capacity": 130,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Zorilor",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/573827\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.749031776212,23.594325012207&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 540930,
        "title": "Mocheta la pret mic",
        "description": "MOCHETA GILAU vinde mocheta second-hand si noua, linoleum si saltele la preturi mici. Preturile si modelele le gasiti pe:",
        "capacity": 960,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/148711\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/148712\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4392143,
        "title": "Mocheta copii",
        "description": "Mocheta copii,online ieftina, destinata pentru camere de copii, spatii de joaca,gradinite,etc. modele apreciate de copii Little Village,Hello Kitty,Cars,Princess, Winne,Stradute,sosele,baieti,fetite,altele.Mocheta imprimata cu suport de pasla latime rola 4m, grosime cca 5-7mm , cu livrare in toata tara prin CURIER si POSTA ROMANA plata RAMBURS a produselor.Confectionam la orice dimensiune covoare de copii cu marginile surfilate din mocheta.Oferim discount, transport gratuit. www.mochetagilau.ro",
        "capacity": 80,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/642080\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4392153,
        "title": "Transportam in oras si pe raza jud.Cluj moloz",
        "description": "Transportam in oras si pe raza jud.Cluj moloz, pamant si aducem la comanda nisip, sort, balast, piatra, material umplutura, pamant gazon la preturi mici.",
        "capacity": 250,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/56838\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3773600,
        "title": "Vand apartament Floresti",
        "description": "Constructor vand - ap. 2 cam. - de la 17.900 euro; - ap. 2 cam. - cu gr\u00e3din\u00e3, supr. total\u00e3 \r\n74 mp - 21.900 euro; - ap. 3 cam. - de la 25.900 euro; - ap. 6 cam. - 178 mp, 52.900 euro Oferim consultanta la creditare prin programul PRIMA CASA.",
        "capacity": 480,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Floresti",
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/666713\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4926022,
        "title": "<b> CONSTRUCTOR <\/b> vinde apartamente pe str. Alverna",
        "description": "SDC IMOBILIARE - <b> PROIECT ALVERNA - APARTAMENTE <\/b>\r\n<p> de la 920 euro\/mp <\/b> \u2022 45 mp suprafata utila + 6 m balcon  <\/p>\r\n<p> \u2022 53 mp suprafata utila + 6 m balcon <\/p>\r\n<\/p> \u2022 55 mp suprafata utila + 6 m balcon <\/p>\r\n<p> \u2022 71 mp suprafata utila + 6 m balcon <\/p>\r\n\r\nPARCARI EXTERIOARE LA 4000 EURO SAU GARAJE LA 6000 EURO\r\n\r\nRATE LA CONSTRUCTOR PE MAXIM 12 LUNI. ACCEPTAM PROGRAMUL \u201cPRIMA CASA\u201d\r\n\r\n<p> <b> PRETURILE SUNT LA STADIUL DE SEMIFINISAT SI INCLUDE 5 % TVA <\/b>  <\/p>\r\n<p> <\/p> \r\n<p> **** <b> PROIECT CASA TINERETULUI (DUNARII) <\/b> <\/p> \r\n\r\npret <b> 1.025 EUR\/mp <\/b> cu TVA 5 % inclus la stadiul de semifinisat. Parcari exterioare la 4.000 EUR si parcari subterane la 6.000 EUR. ****\r\n",
        "capacity": 310,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Centru",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/634311\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/587779\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.757264657155,23.613551086426&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 465362,
        "title": "DETECT SERV va ofera case de marcat omologate",
        "description": "<b>www.detectserv.ro<\/b> - SC DETECT SERV SRL comercializeaza case de marcat fiscale, cantare electronice, cititoare cod de bare, role case de marcat, etichetatoare, role etichete pret, role etichete cod bare, imprimante si mini-imprimante, monitoare touchscreen, si alte comsumabile. Asiguram service pentru toate echipamentele, garantie si post garantie. Firma autorizata de Ministerul de Finante pentru comercializare si service case de marcat fiscale. Ne gasiti la adresa: Str. Nasaud nr. 8 apt. 35.  ... (vezi imaginea atasata)",
        "capacity": 490,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 624130,
        "title": "DIGITAL SATELIT  www.digitalsatelit.ro",
        "description": "DIGITAL SATELIT - Cluj-Napoca, str. Almasului, nr. 5\/1 - www.digitalsatelit.ro - magazin online, produse si servicii de calitate la preturi competitive, 70 programe pachet FAMILIA la 26 lei\/luna, etc.",
        "capacity": 710,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/320918\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 269750,
        "title": "SoftConsulting - www. softconsulting.[...]",
        "description": "SoftConsulting - <b>www.softconsulting.ro<\/b> - Your Business Software Center: WinMENTOR - pentru calculatoare care nu stiu contabilitate!... (vezi anuntul in imaginea alaturata)",
        "capacity": 780,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/469903\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 1965196,
        "title": "Apartamente cu CF cu 2 si 3 camere, Floresti zona Terra",
        "description": "PROIECT NOU! Constructor Floresti - zona Terra - <b> apartamente cu CF <\/b> 2 si 3 camere, cu garaje subterane, suprafate utile de 46 mp, 54 mp, 59 mp, 61 mp, 76 mp. Preturi de la <b> 400 EUR\/mp <\/b>",
        "capacity": 730,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Floresti",
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/357979\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/114522\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/114524\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/357952\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.741341717671,23.471286720276&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5034050,
        "title": "EXCLUSIV! Comision 0% la cumparare! Vanzare vila 4 camere zona Lac Gilau",
        "description": "EXCLUSIV! Comision 0% la cumparare! \r\nREMAX Grup de Lux ofera la vanzare vila la pret de apartament, in zona Motelului Gilau. Situata la 20 minute de Cluj, intr-o zona superba, in apropierea lacului Gilau, vila are suprafata utila de 120 mp, teren aferent 340 mp, structurata parter si etaj,( P: hol, living, loc de luat masa, bucat, camara, baie, casa scarii, terasa; E: 3 dormitoare, 1 baie, 3 tersase) are o compartimentare foarte bine gandita si este racordata la toate utilitatile: canalizare, gaz, electricitate.\r\nPret 78.000 euro neg.\r\nInf str C Brancusi nr. 99 ( ciuperca), tel 0264- 45 00 00 sau 0731-066114.",
        "capacity": 870,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/331663\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2154291,
        "title": "Locuri de munca domeniul hotelier - ITALIA!",
        "description": "Plecari sigure - Locuri de munca pentru FEMEI sezonul de VARA 2014.",
        "capacity": 500,
        "county": null,
        "city": null,
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/622101\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/622102\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 5034062,
        "title": "EXCLUSIVITATE! Comision 0% la cumparare! Vanzare casa cu 6 camere in cart Gheorgheni",
        "description": "EXCLUSIVITATE! Comision 0%  la cumparare!\r\nREMAX Grup de Lux ofera la vanzare casa cu 6 camere in cartierul Gheorgheni, zona Liviu Rebreanu. Cu regim de inaltime parter + mansarda, casa are suprafata utila de 183 mp, iar terenul aferent este de 239 mp.\r\nParterul casei se compune din holul de acces, bucataria, 3 camere spatioase, o baie si casa scarii.\r\nEtajul are o compartimentare  bine gandita si functionala si cuprinde doua dormitoare luminoase, o baie modern utilata si un open space care include livingul spatios si o bucatarie.\r\nIn curte este un garaj incapator, iar gradina este amenjata cu pomi fructiferi si flori perene.\r\nOferta este foarte atractiva datorita posibilitatii amenajarii casei ca resedinta pentru 2 familii ( parinti si copii), sau resedinta la etajul casei, iar parterului i se poate da o destinatie comerciala.\r\nPentru agentii imobiliari din piata\/colaboratori:\r\nOFERIM COMISION pentru colaborare in vederea vanzarii! \r\nPret 167.000 euro, negociabil.\r\nInf str C Brancusi 99 ( ciuperca) tel 0264 45 00 00 sau 0731 06114",
        "capacity": 710,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/387670\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 823368,
        "title": "TRANSPORT PERSOANE, zilnic",
        "description": "TRANSPORT PERSOANE, zilnic, la destinatie: - FRANTA, BELGIA, GERMANIA, OLANDA, AUSTRIA, ANGLIA ... (vezi anuntul in imaginea alaturata)",
        "capacity": 660,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/609004\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2443601,
        "title": "TRANSPORT PERSOANE zilnic in: Franta, Belgia",
        "description": "Transport persoane zilnic in FRANTA, BELGIA, OLANDA, GERMANIA, ANGLIA, la destinatie ... (vezi anuntul in imaginea alaturata)",
        "capacity": 220,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/609005\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 1941931,
        "title": "www.casabaciu.ro",
        "description": "Apartamente noi in Baciu, 2, 3 si 4 camere, in vile cu 2 etaje + mansarda, de la 41 mp pana la 110 mp ... (vezi anuntul in imaginea alaturata)",
        "capacity": 560,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Baciu",
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/63021\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/63019\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2674322,
        "title": "Funda\u0163ia Cultural Umanitar\u0103 \u201dHenri Coand\u0103\u201d organizeaza cursuri de calificare:",
        "description": "Centrul de perfec\u0163ionare Funda\u0163ia Cultural Umanitar\u0103 \u201dHenri Coand\u0103\u201d Cluj Napoca\r\nStr. Sarmizegetusa, nr. 15 Organizeaz\u0103 cursuri de calificare: - Cosmetician - Tehnician maseur - Frizer-coafor-manichiurist-pedichiurist - Coafor - Buc\u0103tar - Osp\u0103tar - Lucr\u0103tor comercial - \u00censu\u015firea no\u0163iunilor fundamentale de igien\u0103.",
        "capacity": 260,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/587919\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 280020,
        "title": "CURSURI DE CALIFICARE\/RECALIFICARE -[...]",
        "description": "CURSURI DE CALIFICARE\/RECALIFICARE - Fundatia A. P. T. International, Cluj-Napoca str. Izlazului, nr. 6, ap. 1 - Certificate de calificare eliberate de Ministerul Muncii si Ministerul Educatiei ... (vezi lista cursurilor disponibile in imaginea alaturata)",
        "capacity": 70,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/613575\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 789314,
        "title": "GENERIC SRL produce USI SI FERESTRE ...",
        "description": "www.genericusiferestre.ro - SC GENERIC SRL produce: \u2022  din LEMN TRIPLUSTRATIFICAT cu termopan \u2022  din LEMN MASIV \u2022  pe STOC gama larga de USI si FERESTRE, diferite modele si esente, la preturile cele   mai mici de productie \u2022  preluam orice tip de COMENZI \u2022  executam pardoseli, lambriuri etc. din lemn LICHIDARE STOC Usi lemn vopsite 200 lei\/buc.\r\n",
        "capacity": 20,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/301812\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 394675,
        "title": "SC SOF AMA DISTRIB SRL - Cluj - INCHIRIAZA AUTO NOI",
        "description": "SC SOF AMA DISTRIB SRL - Cluj - \u00ceNCHIRIAZ\u00c3 AUTO NOI fabricatie 2007, la cel mai mic pret din oras NON STOP \u2022 Dacia Logan 15 euro\/zi \u2022 Renault Symbol Clio 20 euro\/zi\r\n",
        "capacity": 370,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/523134\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2397390,
        "title": "Ferestre si usi din profile PVC ...",
        "description": "<b>www.ghenautrade.ro<\/b> - Ghenau Trade - Ferestre si usi din profile PVC - o gama larga de nuante si modele de usi - profile cu 3, 4, 5 si 6 camere, gratuit plasa fixa antiinsecte, consultanta si montaj gratuit ... (vezi anuntul in imaginea alaturata)",
        "capacity": 430,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/59371\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 626299,
        "title": "GUCKI - KID SRL Cluj -  Rent A Car inchiriaza",
        "description": "GUCKI - KID SRLCLUJ - RENT A CAR inchiriaza AUTOUTILITARE, VAN - la cele mai bune preturi!",
        "capacity": 210,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/470458\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3617076,
        "title": "Apartamente cu 2 camere si 3 camere Floresti",
        "description": "Constructor vinde in Floresti - zona Terra - Ap. finalizate cu CF - cu 2 cam. 48-54 mp si 3 cam. 55-68 mp, semifinisate: - centrala termica  - calorifere - inst. electrice si termice pozitionate - pereti tencuiti si gletuiti  - sapa egalizare - usa metalica. \u2022 ap. 2 cam., de la 20650 EUR, \u2022 ap. 3 cam., de la 27.800 euro. La plata integrala ap. semifinisatre <b> 450 euro\/mp <\/b>. La plata integrala ap. FINISATE <b> 540 euro\/mp <\/b>  !!! Modalitati de plata:  \u2022 rate pe 3 ani direct la constructor cu avans de 10.000 EUR \u2022 credit ipotecar\/Prima Casa. Pt. informatii va rog sa sunati la tel.",
        "capacity": 440,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Floresti",
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/609842\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/219751\/760_567_fit.jpg",
            "http:\/\/images2.piata-az.ro\/resized\/219752\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.740121205989,23.469655937195&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4846511,
        "title": "Exclusivitate! Vanzare doua corpuri de casa in Dambul Rotund",
        "description": "EXCLUSIVITATE! Comision 0% la cumparare! \r\nREMAX Grup de Lux ofera la vanzare in Dambul Rotund o proprietate formata din doua corpuri de cladire, fiecare cu suprafata utila de 120 mp.\r\n Corpul principal de cladire are regimul de inaltime S+P+M si o compartimentare functionala si bine gandita.\r\nSubsolul este format din 2 incaperi destinate depozitarii la rece.\r\nParterul casei are holul de acces, 2 camere spatioase, bucataria , 1 baie si 1 WC de serviciu, casa scarii, camera tehnica ( cu doua centrale: una pe gaz si a doua, pe lemne), garajul si o terasa.\r\nMansarda inalta contine holul de acces, 4 camere, 1 dressing, 2 bai si o terasa mare.\r\nPodul casei este folosit pentru depozitare.\r\nAl doilea corp de cladire are regim de inaltime P+M, la parter avand un hol de acces, 1 camera spatioasa, 1 WC de serviciu si casa scarii. Mansarda are un hol mare si doua camere.\r\nCurtea este amenajata cu spatiu pentru parcare, iar spatiul verde este plin de flori si arbusti.  Gradina frumoasa are pomi fructiferi, zona pentru gradinarit si un spatiu mare destinat zonei de relaxare ( cu gratar si zona de odihna).\r\nProprietarii accepate si variante de schimb cu diferenta de bani.\r\nOferta este ideala pentru o familie care isi cauta atat locuinta cat si un spatiu pentru un business, proprietatea fiind gandita astfel!\r\nPret 249.000 euro,neg. Inf str C Brancusi 99 ( ciuperca) tel 0264 450 000 sau 0731 066114.",
        "capacity": 220,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/619857\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4518076,
        "title": "Eliberam CERTIFICATE ENERGETICE",
        "description": "<b>www.iveserv.ro<\/b> - Eliberam CERTIFICATE ENERGETICE pentru apartamente ...",
        "capacity": 480,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Andrei Muresanu",
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/575004\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2374885,
        "title": "Apartamente finalizate, cu CF, in Floresti...",
        "description": "DIRECT DE LA CONSTRUCTOR - www.ibercarpati.ro - Apartamente finalizate, cu CF, in Floresti, departe de griji, aproape de natura, 1-2-3 camere, suprafete intre 38 si 79 mp, terase generoase. Preturi incepand de la 17.000 euro. Acceptam si PRIMA CASA.",
        "capacity": 290,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Floresti",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/55376\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/55378\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/55379\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/55380\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/55381\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 1409986,
        "title": "SOLUTIA PROBLEMELOR DUMNEAVOSTRA ...",
        "description": "Service si mentenanta \r\n     \u00b7  \tCalculatoare, notebook-uri, retele\r\nReparatii si revizii capitale \r\n     \u00b7  \tImprimante, copiatoare, multifunctionale\r\nReumpleri si reconditionari \r\n     cartuse laser & inkjet.\r\nPreturi imbatabile. Calitate garantata.\r\n\r\nStr. Motilor nr.14    \r\n\r\n",
        "capacity": 330,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/106939\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3558788,
        "title": "Interfoane de bloc si de vila, videointerfoane ...",
        "description": "SC INTEL PRIM EXPERT SRL instaleaza: - interfoane de bloc \u015fi de vil\u0103;  - videointerfoane;          - l\u0103mpi de iluminat cu senzori; - sisteme de control acces cu cod sau cartele; - camere de luat vederi. Service pentru diferite tipuri de interfoane.",
        "capacity": 730,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/290691\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2853932,
        "title": "TAMPLARIE PVC si Al",
        "description": "TAMPLARIE PVS si AL - Plata si in rate fara dobanda la sediul firmei. Te ajutam sa faci economii! Ai o oferta mai buna? Cauta-ne! Vei ramane surprins la ce raport PRET\/CALITATE iti oferim!",
        "capacity": 600,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/497971\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4469185,
        "title": "vand rochie de mireasa white lady",
        "description": "Rochia este superba,purtata o singura data,in stare perfecta,de culoare ivory,stil sirena,dintr-o singura bucata,din dantela brodata manual,cu margelute,cu snur la spate care poate regla eventualele diferente de marime,cu o usoara trena.\r\nEste potrivita pentru o persoana de inaltime 165-170 cm si greutate 53-60 kg.\r\nVoalul brodat,in stil spaniol este cadou.PRETUL ESTE DE 1200 RON NEGOCIABIL.Rochia a fost cumparata cu pretul initial de 2500 ron.\r\nPriviti cu atentie poza si va veti convinge !!",
        "capacity": 190,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/536556\/760_567_fit.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/57224\/760\/567\/fit\/ad44691851.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/57225\/760\/567\/fit\/ad44691852.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/57226\/760\/567\/fit\/ad44691853.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/57227\/760\/567\/fit\/ad44691855.jpg",
            "http:\/\/piata-az.loc\/media\/resize\/57223\/760\/567\/fit\/ad44691857.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4537059,
        "title": "USI DE GARAJ - automatizari porti",
        "description": "SC Marantec SRL - USI GARAJ - AUTOMATIZARI PORTI - Direct de la producator. Livrare in 48 de ore, www.maranteck.ro",
        "capacity": 120,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/424955\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2235087,
        "title": "Execut si repar orice tip de jaluzele si rulouri",
        "description": "Execut si repar ORICE TIP DE JALUZELE si RULOURI exterioare si interioare - RULOURI ext. Al, lemn si PVC - RULOURI int. textil si bambus - Jaluzele int. verticale\/orizontale - din aluminiu si lemn - USI CULISANTE (Italia) - USI GARAJ - PLASE ANTIINSECTE-RULOU ... (vezi anuntul in imaginea alaturata)",
        "capacity": 820,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/239883\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4193144,
        "title": "PANOURI SANDWICH",
        "description": " Panouri Sandwich - calitatea I si II pe stoc sau la comanda prin depozitul din:\r\nSibiu, la DN1, zona Aeroport, Timisoara - com. Sacalaz, fostul C.A.P., asiguram transportul oriunde in tara.",
        "capacity": 990,
        "county": "Sibiu",
        "city": "Sibiu",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/100306\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 735449,
        "title": "Promotie! Ansamblul Rezidential Iris",
        "description": "PROMOTIE! - ANSAMBLUL REZIDENTIAL IRIS - www.apartamente-iris.ro - Noul cartier al Clujului. Preturi incepand de la 24.000 Euro, TVA inclus ... (vezi anuntul in imaginea alaturata)",
        "capacity": 870,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Iris",
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/575450\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 557714,
        "title": "TAMPLARIE CU PROFILE din PVC sau Aluminiu",
        "description": "MODERN BAU: TAMPLARIE CU PROFILE din PVC sau Aluminiu. Posibilitate de plata in rate, preturi promotionale ... (vezi anuntul in imaginea alaturata)",
        "capacity": 880,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/61485\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 352799,
        "title": "MUTARI MOBILA SI DEPOZITARE",
        "description": "www.mutam.eu - MUTARI MOBILA si DEPOZITARE! Ai o problema? O mutam noi!!! dezmembrare\/asamblare mobila; impachetare folie profesionala; asigurare ambalaj; transp. intern\/international ... (vezi anuntul in imaginea alaturata)",
        "capacity": 60,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/314099\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4362051,
        "title": "Profesional Academy organizeaza curs de:",
        "description": "Nou! Plata in 5 rate! Profesional Academy organizeaza curs de: \u2022 manichiura-pedichiura-unghii tehnice \u2022 stilist protezist unghii \u2022 cosmetica  \u2022 make-up artist\/machior  \u2022 coafor stilist  \u2022 tehnician maseur, etc. Str. C-tin Brancusi nr.1, et.1, langa fosta sala Gimmy.",
        "capacity": 90,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/545284\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 269791,
        "title": "Cele mai avantajoase solutii in[...]",
        "description": "Cele mai avantajoase solutii in imprimare - <b>www.printforce.ro<\/b> - Reincarcare cartuse a-n & color, ink & laser - Vanzare cartuse noi - Tonber & piese de schimb copiatoare - Copycenter a-n & color - Tiparire in tiraje mici. SC PRINTFORCE SRL - Str. A. Iancu nr.1... (vezi anuntul in imaginea alaturata)",
        "capacity": 260,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/314103\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4739758,
        "title": "Lucrari AGRICOLE",
        "description": "Lucrari AGRICOLE, vanzari MASINI AGRICOLE, curatiri PASUNI.",
        "capacity": 620,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/59975\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4735936,
        "title": "Vand teren constructii intravilan Cluj",
        "description": "Vand teren constructii intravilan Cluj, cartier Someseni, str Tractoristilor nr 2, zona linistita la 2 minute de mijloc de transport in comun, utilitati gaz, curent, apa, canalizare, parcele (500 mp, 496 mp, 400 mp, 486mp, 427 mp), pret 70 eu\/mp. Telefon: 0755835438",
        "capacity": 470,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/170476\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 884838,
        "title": "PROKA SERVICE- TERMOPANE, JALUZELE, USI GARAJ",
        "description": "Va asteptam in magazin pt. a beneficia de oferta: \r\n\r\n<\/b> Show ROOM pe <b> CALEA MANASTUR NR. 42 <\/b>  PROKA SERVICE-www.proka.ro \r\n\r\n<b> TERMOPANE, JALUZELE, USI DE GARAJ, PLASE TANTARI <\/b> \r\n<p> <\/p>\r\n<p><b>10% REDUCERE la toate produsele de umbrire pana la 1 martie 2014<\/b><\/p>\r\n<p> <\/p>\r\n<b> Facem contracte \r\nde service pt. termopane,\r\nusi de garaj,\r\nmotoare cu telecomenzi\r\nsi bariere\r\n<\/b>\r\n ... (vezi anuntul in imaginea alaturata)",
        "capacity": 60,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/627277\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/104898\/760_567_fit.jpg",
            "http:\/\/images6.piata-az.ro\/resized\/131125\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/612013\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3393824,
        "title": "PYROSTOP SECURITY",
        "description": "PYROSTOP SECURITY - firma cu experienta de peste 17 ani in domeniul sistemelor de securitate electronica - va ofera serviciile sale: - instalare sisteme de alarma antiefractie si antiincendiu; - instalare sisteme de supraveghere video si control acces; - instalare sisteme de interfonie; - monitorizare sisteme prin dispecerat propriu GSM\/ GPRS si cablu ...  (vezi detalii in imaginea alaturata)",
        "capacity": 390,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/53185\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/53187\/760_567_fit.jpg",
            "http:\/\/images1.piata-az.ro\/resized\/53188\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/53189\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/53190\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4214133,
        "title": "vand  vw passat",
        "description": "Vand VW Passat limuzina 1.6 benzina, 1991, neinmatriculat, in stare de functionare, stare buna, pret 600 euro, telefon 0751200864.",
        "capacity": 60,
        "county": "Maramures",
        "city": "Baia Mare",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/55614\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4446768,
        "title": "\u2022  CONDUCATOR AUTO TIR \u2022  CONDUCATOR AUTO \u2022  MECANIC AUTO  \u2022  VULCANIZATOR",
        "description": "S.C. SALAMONT IMP EXP SRL angajeaza \r\n\u2022  CONDUCATOR AUTO TIR\r\n\u2022  CONDUCATOR AUTO \r\n          - categoria C, C+E \r\n            cu atestat agabaritic\r\n\u2022  MECANIC AUTO\r\n\u2022  VULCANIZATOR\r\nTel.sau e-mailul din imaginea atasata",
        "capacity": 850,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/596721\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 278625,
        "title": "SALAMONT IMPORT EXPORT",
        "description": "SALAMONT IMPORT EXPORT - GRUPAJE AGABARITICE; - DISTRIBUTIE AUTOBASCULANTE; - EXPEDITII RUTIERE EXCAVATOARE ... (vezi anuntul in imaginea alaturata)",
        "capacity": 250,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/55347\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2481809,
        "title": "Sablez: camioane, semiremorci, bascule...",
        "description": "Sablez: camioane, semiremorci, bascule, cisterne. Pentru informatii suplimentare \r\nva rugam sa ne contactati... (vezi anuntul in imaginea alaturata)",
        "capacity": 710,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 278712,
        "title": "Parbrize - vanzare, montare, reparatii",
        "description": "PARBRIZE - vanzare, montare, reparatii, FOLIE antiefractie, solara, auto omologat RAR ... (vezi anuntul in imaginea alaturata)",
        "capacity": 890,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images2.piata-az.ro\/resized\/314325\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 2503307,
        "title": "SCANROM - ALARME AUTO",
        "description": "SCANROM - Supraveghere video prin internet - Alarme imobil fara abonament - ALARME AUTO - Inchideri centralizate - Senzori parcare - LOCATOR AUTO GPS.",
        "capacity": 540,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/439142\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4614386,
        "title": "CONSTRUCTOR Vinde apartamente",
        "description": "Proiect \"Traian\" - CONSTRUCTOR Vinde apartamente cu suprafete intre 36-100 mp + spatii comerciale, garaje, parcari preturi incepand cu 950 EUR\/mp. Modalitati de plata: \u2022 Plata se poate face integral sau in rate \u2022 Rate direct la constructor pe maxim 12 luni, fara dobanda! ... (vezi anuntul in imaginea alaturata)",
        "capacity": 730,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Centru",
        "images": [
            "http:\/\/images9.piata-az.ro\/resized\/65819\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.781250451147,23.59981817627&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 280099,
        "title": "SM WOOD PRODCOM - www.smwoodprodcom.ro",
        "description": "SC S.M. WOOD PRODCOM SRL - www.smwoodprodcom.ro \r\n\u2022  Constructii case din lemn\r\n\u2022  Scari interioare, placari cu lemn (podele si lambriuri)\r\n\u2022  Pergole, foi}oare, terase, usi din lemn masiv\r\n\u2022  Mobilier pentru baruri, restaurante si pensiuni\r\n\u2022  Uscare si prelucrare cherestea de la clienti",
        "capacity": 60,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/580326\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3034189,
        "title": "Case tip duplex, semifinisate, finalizate cu CF, Floresti, zona Terra",
        "description": "CASE TIP DUPLEX, SEMIFINISATE, FINALIZATE CU CF - FLORESTI, ZONA TERRA - P+E+teren, suprafata utila 105 mp - 108 mp + 2 balcoane, cu toate utilitatile. Pret neg. 55.000 EUR, TVA 5% inclus. Oferta promotionala: Reducere la plata integrala!",
        "capacity": 910,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": "Floresti",
        "images": [
            "http:\/\/images8.piata-az.ro\/resized\/601218\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/154163\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.741415241589,23.471372550965&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3118271,
        "title": "Servicii profesionale de curatenie",
        "description": "Servicii profesionale de curatenie: - curatenie zilnica de intretinere; - curatenie generala; - curatenie dupa constructor; - spal mochete si covoare ... (vezi anuntul in imaginea alaturata)",
        "capacity": 770,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images4.piata-az.ro\/resized\/52719\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4565462,
        "title": "RENT A CAR de la 9 EUR\/zi",
        "description": "<b> RENT A CAR <\/b> Dacia Logan, Ford, Renault .... <b> de la 9 EUR\/zi <\/b> Dacia Logan de la 9 EUR; Ford, Renault megane de la 19 EUR; Renault Fluence de la 29 EUR ...",
        "capacity": 600,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/441793\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 279657,
        "title": "ESAPAMENTE AUTO! Catalizatori, tobe",
        "description": "Catalizatori, tobe de esapament sport, tuburi flexibile - garantie 18-24 luni ... (vezi anuntul in imaginea alaturata)",
        "capacity": 420,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/58162\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 1848189,
        "title": "Cel mai rapid service de calculatoare",
        "description": "Cel mai rapid service de calculatoare, laptopuri si monitoare - reparam calculatoare si laptop-uri cu orice defectiune, inlocuire componente. (vezi anuntul in imaginea alaturata)",
        "capacity": 880,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images3.piata-az.ro\/resized\/58605\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 1826522,
        "title": "REINCARCARE CARTUSE LASER SI CERNEALA",
        "description": "Reincarcare cartuse laser si cerneala cu praf original - Garantie; - Schimbare cilindre; - Schimbare cip; - Schimbare lamela. Reparam imprimante!!! ... (vezi anuntul in imaginea alaturata)",
        "capacity": 590,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/58604\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 1009318,
        "title": "Sisteme complete de instalatii termice ...",
        "description": "Instalatii: - termice si sanitare pentru: HALE, CASE, APARTAMENTE, autorizat ISCIR: montare\/instalare PIF, Service, VTP; - PANOURI SOLARE; - DEDURIZARE; - TUBURI RADIANTE; - AMENAJARI INTERIOARE SI EXTERIOARE ... (vezianuntul in imaginea alaturata)",
        "capacity": 180,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/164290\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3746663,
        "title": "TAMPLARIE DIN ALUMINIU",
        "description": "Theta Invest SRL EXECUTA TAMPLARIE DIN ALUMINIU cu si fara bariera termica, \r\nin diverse culori RAL, pereti cortina, cupole, sere, luminatoare, usi glisante, inchideri piscine. PVC Culoare: alb, stejar, mahon Feronerie Maco-Germania Geam termoizolator\r\nLowE ... (vezi anuntul in imaginea alaturata)",
        "capacity": 950,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/53928\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3374974,
        "title": "Folii omologate RAR",
        "description": "Folii solare omologate RAR 7 ani garantie. Montare profesionala la atelier omologat RAR, oferim certificat de garantie.\r\nMontarea foliei auto  se face direct pe geam fara a demonta fetele de usi, iar folia auto pe luneta se monteaza dintr-o singura bucata\r\nTot aici: colantari carbon (6 culori), mate, la cele mai bune preturi, de la cele mai renumite producatori (3M,Mactac, Avery, Skyfol Cougar). \r\nMontam kituri Paint Gard, folie de protectie caroserie.",
        "capacity": 600,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/53177\/760_567_fit.jpg",
            "http:\/\/images4.piata-az.ro\/resized\/53199\/760_567_fit.jpg",
            "http:\/\/images8.piata-az.ro\/resized\/56970\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/56971\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/56978\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3440918,
        "title": "Folii solare,carbon, mate",
        "description": "Vanzare si montare folii solare omologate RAR ,7 ani garantie. Carbon (6 culori), mate, la cele mai bune preturi, de la cele mai renumite producatori (3M,Mactac, Avery, Skyfol Cougar). \r\nPaint Gard, folie de protectie caroserie. Vanzare folii en gros si en detail.",
        "capacity": 340,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images7.piata-az.ro\/resized\/56967\/760_567_fit.jpg",
            "http:\/\/images5.piata-az.ro\/resized\/56969\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3524543,
        "title": "Folii auto,omolgate RA.R,colantari auto",
        "description": "Montaj folii solare auto,omologate R.A.R,garantie 3-7ani,marca Skyfol,fabricate in SUA.Montaj folii carbon disponibil in 6culori,folii mate,special pentru colantari auto.Str.Eftimie Murgu nr 24A",
        "capacity": 740,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 3411541,
        "title": "Folii cladiri",
        "description": "Foliile pentru suprafetele de sticla a cladirilor aduc protectie solara, protectie impotriva distrugerii lor (prin lovire, explozie,etc) si imbunatatesc semnificativ estetica.\r\nOferim consultanta si deplasare gratuita.",
        "capacity": 310,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4736132,
        "title": "Apartament 3 cam.",
        "description": "Bloc nou cu CF, semifinisat, 70 mp, centrala termica si calorifere",
        "capacity": 30,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.812040067804,23.751051849366&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4676968,
        "title": "Folii solare si antiefractie!",
        "description": "Avantaje pentru montarea de folie pe geamurile cladirii\r\n\r\n? Protectie solara\r\n? Economie electricitate\r\n? Protectie cu pana la 98% pentru razele ultraviolete\r\n? Confort termic\r\n? Intimitate crescuta\r\n? Protectie antiefractie\r\n? Nu schimba lumina naturala din interior\r\n? Scade temperatura cu pana la 5-7 grade",
        "capacity": 870,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images1.piata-az.ro\/resized\/59040\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4677227,
        "title": "Gama foliilor Skyfol",
        "description": "Alegeti din numeroasele noastre folii auto. Solicitati asistenta specialistilor nostri pentru alegerea foliilor de cladiri potrivite casei si gusturilor Dvs sau protejati-va cei dragi de riscul ranirii grave cu cioburile provenite din spargerea sticlei. Din multitudinea de tipuri veti gasi cu siguranta solutia perfecta pentru Dvs.",
        "capacity": 50,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images6.piata-az.ro\/resized\/59046\/760_567_fit.jpg",
            "http:\/\/images3.piata-az.ro\/resized\/59044\/760_567_fit.jpg",
            "http:\/\/images7.piata-az.ro\/resized\/59045\/760_567_fit.jpg",
            "http:\/\/images9.piata-az.ro\/resized\/59043\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4677065,
        "title": "Folii solare si antiefractie!",
        "description": "Avantaje pentru montarea de folie pe geamurile cladirii\r\n\r\n? Protectie solara\r\n? Economie electricitate\r\n? Protectie cu pana la 98% pentru razele ultraviolete\r\n? Confort termic\r\n? Intimitate crescuta\r\n? Protectie antiefractie\r\n? Nu schimba lumina naturala din interior\r\n? Scade temperatura cu pana la 5-7 grade\r\n\r\nFolii Skyfol direct de la importator!",
        "capacity": 800,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [
            "http:\/\/images5.piata-az.ro\/resized\/631725\/760_567_fit.jpg"
        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4890237,
        "title": "Vand ap. 2 camere",
        "description": "Bloc in constructie, semifinisat, centrala termica si calorifere. Etaj intermediar si parte",
        "capacity": 900,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=46.814095998512,23.750451034546&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4928032,
        "title": "ore de canto pt viitoarele vedete",
        "description": "Vrei sa participi la concursuri gen X-Factor, Vocea Romaniei, Mamaia copiilor... etc?\r\nAi nevoie de mai mult decat sa fredonezi prin casa. Daca ai ceva talent si vrei sa inveti sa canti frumos, nu ezita sa ma contactezi. ",
        "capacity": 290,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    },
    {
        "id": 4927891,
        "title": "predau ore de pian",
        "description": "Profesoara de muzica predau ore de pian pentru incepatori. Am experienta, rabdare si intelegere. ",
        "capacity": 200,
        "county": "Cluj",
        "city": "Cluj-Napoca",
        "area": null,
        "images": [

        ],
        "map": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?center=,&zoom=13&size=300x300&maptype=roadmap&sensor=false"
    }
];
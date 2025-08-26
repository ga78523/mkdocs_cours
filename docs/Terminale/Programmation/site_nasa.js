const MY_NASA_KEY = "..."

// La variable suivante contiendra la liste de tous les objets rÃ©cupÃ©rÃ©s par la requÃªte.
// c'est un objet de type Array, regardez sur le net pour en connaÃ®tre les propriÃ©tÃ©s.

var imgArray = [];

// La variable suivante est un objet de type Map, c'est-Ã -dire comme un dictionnaire.
// Il doit contenir les paramÃ¨tres de la requÃªte comme, le nom du rover, le nom de la camÃ©ra,
// et la date terreinne ou le nombre de jours solaires.
// Pour ajouter une paire clÃ©/valeur, il faut utiliser la mÃ©thode set, comme par exemple :
// request_parameters.set('rover', 'curiosity');
// request_parameters.set('sol', 50);
// request_parameters.set('earth_date', '2019-5-7')
// request_parameters.set('camera','NAVCAM');

request_parameters =  new Map()

// La fonction suivante est largmenet hors programme dans sa conception, mais
// son utilisation est simple. AprÃ¨s l'exÃ©cution des 4 lignes suivantes :

// request_parameters.set('rover','curiosity');
// request_parameters.set('sol',50);
// request_parameters.set('camera','NAVCAM');
// request_to_nasa(request_parameters);

// alors la variable imgArray contiendra le rÃ©sultat de la requáº¿tÃ© pour les photos de la NAVCAM 
// de curiosity au sol 50.

async function request_to_nasa(parameters){
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/";
    if ((parameters.has('rover'))&&(['curiosity', 'opportunity', 'spirit'].includes(parameters.get('rover')))){
        url += parameters.get('rover')+"/photos";        
        if (parameters.size>1){
            url += "?";
            let parameters_accepted = ['camera', 'earth_date', 'sol'];
            parameters_accepted.forEach(item => {
                if (parameters.has(item)){
                    url += item+"="+parameters.get(item)+"&";
                }

            }
            );
        }
        url +="api_key="+MY_NASA_KEY;
        console.log(url);
        return fetch(url).then( (reponse) => {
                if(reponse.ok) {
                    return  reponse.json();                    
                } else {
                    throw new Error('Server response wasn\'t OK');
                }
            }).then(jsonobj => imgArray=jsonobj.photos.map(p => p));
    }
    else {
        throw new Error('Unable to find rover');
    }
}

// LES FONCTIONS CI-DESSUS NE DOIVENT PAS ETRE MODIFIEES !!!

// Les Ã©lements ci-dessous peuvent Ãªtre modifiÃ©s.



// La fonction main ci-dessous permet plusieurs choses :
// 1) elle fait apparaÃ®tre/disparaÃ®tre deux divisions d'id "en_attendant" et "Contenu", selon l'Ã©tat
// de la requÃªte.
// 2) Elle peuple l'attribut "src" d'une balise image d'ID "photo" avec l'image de numÃ©ro "actualImage"
//, ainsi que le contenu d'une balise d'ID  "photo_info" avec une numÃ©rotation de type "3/5"


async function main(request_parameters){
    let attente_div = document.getElementById("en_attendant");
    let contenu_div = document.getElementById("Contenu");
    attente_div.style.display = 'block';
    contenu_div.style.display = 'none';
    
    await request_to_nasa(request_parameters).then(()=>{
        if (imgArray.length !=0){
            let image = imgArray[actualImage];
            
            document.getElementById("photo").src =  image['img_src'];
            document.getElementById("photo_info").innerText =  (parseInt(image['id'])- parseInt(imgArray[0]['id']))+ " / " + (parseInt(imgArray[imgArray.length-1]['id'])-parseInt(imgArray[imgArray.length-1]['id']));
        } else {
            document.getElementById("photo").src =  '';
            document.getElementById("photo_info").innerText =  'No data found !'
        }
        });
    attente_div.style.display = 'none';
    contenu_div.style.display = 'block';
        
    }



var actualImage = 0

let previous_button = document.getElementById('previous');
previous_button.addEventListener('click', previous_img);
let next_button = document.getElementById('next');
next_button.addEventListener('click', next_img);

let photo_date=document.getElementById('date');
photo_date.addEventListener('change', get_parameters);
let rover = document.getElementById('rover');
rover.addEventListener('click', get_parameters);
let camera = document.getElementById('camera');
camera.addEventListener('click', get_parameters);

function get_parameters(){
    request_parameters.set('rover',rover.value);
    request_parameters.set('earth_date',photo_date.value);
    request_parameters.set('camera',camera.value);
    main(request_parameters);

}

function previous_img(){
    if (actualImage > 0){ actualImage = actualImage -1;} 
    document.getElementById("photo").src =  imgArray[actualImage]['img_src'];
	document.getElementById("photo_info").innerText =  (parseInt(imgArray[actualImage]['id'])- parseInt(imgArray[0]['id']))+ " / " + (parseInt(imgArray[imgArray.length-1]['id'])-parseInt(imgArray[0]['id']));
}

function next_img(){
    if (actualImage <imgArray.length-1){ actualImage = actualImage +1;} 
    document.getElementById("photo").src =  imgArray[actualImage]['img_src'];
	document.getElementById("photo_info").innerText =  (parseInt(imgArray[actualImage]['id'])- parseInt(imgArray[0]['id']))+ " / " + (parseInt(imgArray[imgArray.length-1]['id'])-parseInt(imgArray[0]['id']));
}


get_parameters();
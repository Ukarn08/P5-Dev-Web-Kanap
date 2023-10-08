console.log("Window Location:", window.location); // récuperer les informations  des clés & valeurs dans l'URL avec Window Location
const myKeysValues = window.location.search;
console.log("Keys & Values:" , myKeysValues); // exemple pour un produit (Keys & Values: ?id=107fb5b75607497b96722bda5b504926)

//UrlSearchParams pour log les clés & valeurs dans la console

const urlParams = new URLSearchParams(myKeysValues);

const param1 = urlParams.get('id') 
console.log("id" , param1);


//UrlSearchParams pour chaque id qui est attribué a 1 produit dans la page d'acceuil 

let url = new URL(location.href);
let kanapPageId = url.searchParams.get("id");


//
const Kanap = document.getElementById("items"); //tout les items 'kanap' grace a cet variable
fetch("http://localhost:3000/api/products/")
.then((res) => res.json())
.then((data) => {

    for (let product of data) {
        const prixKanap = product.price;
        const descriptionKanap = product.description;
        const titleKanap = product.title;
        const colorsKanap = product.colors;
        const photoKanap = product.imageUrl;
        Kanap.innerHTML += ` <img src="${photoKanap}">`
    }
})







	











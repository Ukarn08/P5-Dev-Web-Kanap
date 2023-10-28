console.log("Window Location:", window.location); // récuperer les informations  des clés & valeurs dans l'URL avec Window Location
const myKeysValues = window.location.search;
console.log("Keys & Values:" , myKeysValues); // exemple pour un produit (Keys & Values: ?id=107fb5b75607497b96722bda5b504926)

//UrlSearchParams pour log les clés & valeurs dans la console

const params = new URL(document.location).searchParams
const id = params.get("id")


const url = `http://localhost:3000/api/products/${id}` //fetch l'id selectionné

const getItems = () => {
    fetch(url) // on recupere l'url de l'id
    // retour json 
    .then(function(res) {
        return res.json()
    })
    .then(function(data){             // 5 variables , titre , couleurs
                                      // prix , image , description
        console.log(data)
        const myPrice = (document.getElementById("price").innerHTML = data.price)
        const myTitle = (document.getElementById("title").innerHTML = data.name)
        const newImg = document.createElement("img")
        document.querySelector(".item__img").appendChild(newImg)
        newImg.setAttribute("src" , `${data.imageUrl}`)

        const myDescription = (document.getElementById("description").innerHTML = data.description)
        const myColors = document.getElementById("colors")
        for (color in data.colors){
            myColors.innerHTML += `<option value="${data.colors[color]}">${data.colors[color]}</option>`
        }
    })

}

const addinCart = document.getElementById("addToCart");

addinCart.addEventListener("click", () => {
    const quantityInput = document.getElementById("quantity");
    const colorSelect = document.getElementById("colors");
    const maxQuantity = 100; // limite la quantité a 100 du panier

    let enteredQuantity = parseInt(quantityInput.value, 10);
    let selectedColor = colorSelect.value;

    // bloque la quantité a 1 minimum , meme si on met une valeur négative
    if (enteredQuantity < 1) {
        enteredQuantity = 1;
        quantityInput.value = enteredQuantity; // met a jour la quantité a chaque input 
    }

    if (selectedColor === "") {
        alert("Veuillez choisir une couleur avant d'ajouter au panier.");
        return; // alerte qui empeche l'ajout au panier quand aucune couleur est choisi
    }

    if (enteredQuantity > maxQuantity) {
        alert("La quantité ne peut pas dépasser 100. Veuillez réduire la quantité.");
    } else {
        const myProduct = {
            quantity: enteredQuantity,
            color: selectedColor,
            id: id
        };

        let myProductLocalStorage = [];

        if (localStorage.getItem("addToCart") !== null) {
            myProductLocalStorage = JSON.parse(localStorage.getItem("addToCart"));
        }

        // bloque la quantité maximum dans le localStorage a 100
        if (enteredQuantity + getTotalQuantityInCart(myProductLocalStorage) <= maxQuantity) {
            myProductLocalStorage.push(myProduct);
            localStorage.setItem("addToCart", JSON.stringify(myProductLocalStorage));
        } else {
            alert("La quantité totale dans le panier ne peut pas dépasser 100.");
        }
    }
});

// fonction pour calculé la quantité maximum dans le panier
function getTotalQuantityInCart(cart) {
    let totalQuantity = 0;
    for (const product of cart) {
        totalQuantity += product.quantity;
    }
    return totalQuantity;
}


getItems()      









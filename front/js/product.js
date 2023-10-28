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
    const maxQuantity = 100; // la variable qui définit la quantité maximum

    const enteredQuantity = parseInt(quantityInput.value, 10);

    if (enteredQuantity > maxQuantity) {
        alert("La quantité ne peut pas dépasser 100. Veuillez réduire la quantité.");
    } else {
        const myProduct = {
            quantity: enteredQuantity,
            color: document.getElementById("colors").value,
            id: id
        };

        let myProductLocalStorage = [];

        if (localStorage.getItem("addToCart") !== null) {
            myProductLocalStorage = JSON.parse(localStorage.getItem("addToCart"));
        }

        // Ici la quantité qui ne peut pas  être supérieur a 100 dans le localStorage
        if (enteredQuantity + getTotalQuantityInCart(myProductLocalStorage) <= maxQuantity) {
            myProductLocalStorage.push(myProduct);
            localStorage.setItem("addToCart", JSON.stringify(myProductLocalStorage));
        } else {
            alert("La quantité totale dans le panier ne peut pas dépasser 100.");
        }
    }
});

// Fonction qui calcul la quantité total dans le panier
function getTotalQuantityInCart(cart) {
    let totalQuantity = 0;
    for (const product of cart) {
        totalQuantity += product.quantity;
    }
    return totalQuantity;
}




getItems()      









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

getItems()                           












const url = `http://localhost:3000/api/products/${id}` //fetch l'id selectionné


// On passe a la quantité choisi avec une autre fonction fléchée

const addinCart = () => {
    fetch(url)
    // on recupere l'url de l'id
    // retour json 
    .then(function(res) {
        return res.json()
    })

    
}






addinCart()

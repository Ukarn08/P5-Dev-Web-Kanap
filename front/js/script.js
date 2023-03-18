
// Récupération de l'ID de chaques images (8) sur la page principal 

const img = document.getElementById('107fb5b75607497b96722bda5b504926');


















// Fetching de la data sur l'api 

fetch('http://localhost:3000/api/products')
.then(res => res.json())
.then(data => console.log(data))
.then(data => img.src = data[0].url)

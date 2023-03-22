const Kanap = document.getElementById("items"); //tout les items 'kanap' grace a cet variable

fetch("http://localhost:3000/api/products/") //Fetching de la data sur l'api
	.then((res) => res.json()) //transformation des données en json
	.then((data) => {
		//tableau des données json
		for (let champ of data) {
			//une variable attribué a chaques élements trouvé dans l'api 
			const idKanap = champ._id;
			const photoKanap = champ.imageUrl;
			const altTexte = champ.altTxt;
			const nomKanap = champ.name;
			const descriptionKanap = champ.description;
			Kanap.innerHTML += `<a href="./product.html?id=${idKanap}">
        <article>
          <img src="${photoKanap}" alt="${altTexte}">
            <h3 class="productName">${nomKanap}</h3>
            <p class="productDescription">${descriptionKanap}</p>
        </article>
    </a>`; //récupération des données sur le html commenté( photos,texte)
		}
	})
	.catch(function (err) {  // la console nous prévient en cas d'erreur 
		console.log(err);
	});
















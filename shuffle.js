paintings = ["The Starry Night (Van Gogh)","The Son of Man (Magritte)","Groovin High (Ringgold)","The Persistence of Memory (Dali)","Cow's Skull with Calico Roses (O'Keeffe)","Guernica (Picasso)","A Sunday on La Grande Jatte (Seurat)","American Gothic (Wood)","The Scream (Munch)","The Broken Column (Kahlo)","Jael and Sisera (Gentileschi)","The Wounded Deer (Kahlo)","The Birth of Venus (Botticelli)"]

characters = ["Steven Universe","Sailor Moon","Megan Thee Stallion","Janelle Monae","Nina Simone","Angelina Jolie in her Academy Award-winning role as Lisa Rowe in Girl, Interrupted","Ice Bear","Carole Baskin","A fuckbo(i/y)","Joe Exotic"]

document.getElementById("shuffle").addEventListener("click", shuffle);

function shuffle() {
	var x = Math.floor((Math.random() * paintings.length) +1) -1;
	var output1 = paintings[x];

	var y = Math.floor((Math.random() * characters.length) +1) -1;
	var output2 = characters[y];

	document.getElementById("outputpaint").innerHTML =  output1;
	document.getElementById("outputchar").innerHTML = output2;
}
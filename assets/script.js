//***TABLEAU DES IMAGES ***//
let currentSlide = 0 //première image du tableau
const slides = [//array des images et texte
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//***CREATION DES BULLET POINTS ***//
const DotsContainer = document.querySelector(".dots")//déclaration de la variable dotscontainer via la classe .dots(pour pouvoir manipuler/dynamiser)

slides.forEach((slide, index) => {// forEach = pour chaque élément de mon array, ajoute un point
	const dot = document.createElement("div");
	dot.classList.add("dot");//on associe la varibale dot à la classe .dot
	DotsContainer.appendChild(dot);//on met cette classe .dot dans le parent dotsContainer
})

function dotSelected(index) {
	const dots = document.querySelectorAll(".dot"); // on sélectionne tous les dots
	dots.forEach((dot, i) => {//vu qu'on a utilise le queryselectorall, on a crée un nodelist, pour manipuler tous les dots il faut utiliser le foreach
		if (i === index) { // Si l'index du dot correspond à celui de l'image active
			dot.classList.add("dot_selected"); // Ajoute la classe .dot_selected au dot
		} else {
			dot.classList.remove("dot_selected"); // Supprime la classe .dot_selected des autres dots
		}
	});
}
dotSelected(0)

//***CREATION DU CARROUSEL ***//
function updateCarousel(image, tagLine) {//fonction qui fait fonctionner le carrousel d'image

	const imageElement = document.querySelector(".banner-img");
	imageElement.src = `./assets/images/slideshow/${image}`;//chemin de l'image avec une variable d'ou le "`"


	const textElement = document.querySelector("#banner p");
	textElement.innerHTML = tagLine; //le commentaire avec l'image

}

const Clickflechedroite = document.querySelector(".arrow_right");
Clickflechedroite.addEventListener("click", () => {
	currentSlide++;//lorsqu'on click (eventlistener) flèche droite, alors on avance de +1 par rapporta l'array
	if (currentSlide >= slides.length) {
		currentSlide = 0;//SI la slide actuelle est au dela de la longueur du tableau, alors l'image revient a 0 (première image)
	}
	updateCarousel(slides[currentSlide].image, slides[currentSlide].tagLine);//execution de la fontion
	dotSelected(currentSlide)
});

const Clickflechegauche = document.querySelector(".arrow_left");
Clickflechegauche.addEventListener("click", () => {
	currentSlide--;//lorsqu'on click (eventlistener) flèche gauche, alors on recule de -1 par rapporta l'array
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;//SI la slide actuelle est inférieur à 0 (avant la première image), alors l'image revient a la dernière image
	}
	updateCarousel(slides[currentSlide].image, slides[currentSlide].tagLine);//execution de la fontion
	dotSelected(currentSlide)
});






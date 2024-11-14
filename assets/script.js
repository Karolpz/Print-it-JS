//***TABLEAU DES IMAGES ***//
let currentSlide = 0 //première image du tableau
const slides = [//array des images et texte
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
] 


//***CREATION DES BULLET POINTS ***//
const DotsContainer = document.querySelector(".dots")//déclaration de la variable dotscontainer via la classe .dots(pour pouvoir manipuler/dynamiser)

function CreateDots(){
	slides.forEach((slide,index) => {// forEach = pour chaque élément de mon array, ajoute un point
	const dot = document.createElement("div");
	dot.classList.add("dot");//on associe la varibale dot à la classe .dot
	DotsContainer.appendChild(dot);//on met cette classe .dot dans le parent dotsContainer
	})
}
CreateDots();//appel de la fonction

let DotSelected = document.querySelector(".dot")
DotSelected.classList.add("dot_selected")//on met le dot le plus foncé à la première image


//***CREATION DU CARROUSEL ***//
function updateCarousel() {//fonction qui fait fonctionner le carrousel d'image

    const imageElement = document.querySelector(".banner-img");
    imageElement.src = `./assets/images/slideshow/${slides[currentSlide].image}`;//chemin de l'image avec une variable d'ou le "`"
    

    const textElement = document.querySelector("#banner p");
    textElement.innerHTML = slides[currentSlide].tagLine; //le commentaire avec l'image


    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('dot_selected'));//on enlève le dot slectionné sur la première image
    dots[currentSlide].classList.add('dot_selected');//on ajoute le dot selectionné selon l'image que l'on voit
}

const Clickflechedroite = document.querySelector(".arrow_right");
Clickflechedroite.addEventListener("click", () => {
	currentSlide = currentSlide + 1;//lorsqu'on click (eventlistener) flèche droite, alors on avance de +1 par rapporta l'array
	if (currentSlide >= slides.length) {
        currentSlide = 0;//SI la slide actuelle est au dela de la longueur du tableau, alors l'image revient a 0 (première image)
    }
	updateCarousel ();//execution de la fontion
});

const Clickflechegauche = document.querySelector(".arrow_left");
Clickflechegauche.addEventListener("click", () => {
	currentSlide = currentSlide - 1;//lorsqu'on click (eventlistener) flèche gauche, alors on recule de -1 par rapporta l'array
	if (currentSlide < 0) {
        currentSlide = slides.length - 1;//SI la slide actuelle est inférieur à 0 (avant la première image), alors l'image revient a la dernière image
    }
	updateCarousel ();//execution de la fontion
});






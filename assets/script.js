let currentSlide = 0
const slides = [
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

function updateCarousel() {

    const imageElement = document.querySelector(".banner-img");
    imageElement.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    

    const textElement = document.querySelector("#banner p");
    textElement.innerHTML = slides[currentSlide].tagLine;


    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    dots[currentSlide].classList.add('dot_selected');
}

const Clickflechedroite = document.querySelector(".arrow_right");
Clickflechedroite.addEventListener("click", () => {
	currentSlide = currentSlide + 1;
	if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
	updateCarousel ();
});

const Clickflechegauche = document.querySelector(".arrow_left");
Clickflechegauche.addEventListener("click", () => {
	currentSlide = currentSlide - 1;
	if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
	updateCarousel ();
});

const DotsContainer = document.querySelector(".dots")

function CreateDots(){
	slides.forEach((slide,index) => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	DotsContainer.appendChild(dot);
	})
}

CreateDots();

let DotSelected = document.querySelector(".dot")
DotSelected.classList.add("dot_selected")




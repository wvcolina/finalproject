function set_img(){
	options = ["cupcake.png","ham_bread.png","hamburger2.png","mini_cupcake.png",
	"mini_ham_bread.png","patacon2.png"]

	//texto = ["Cupcake","Ham Bread","Hamburger","Mini Cupcake","Mini Ham Bread","Patacon"]

	currentImages = document.querySelectorAll("img_header")
	for (let i = 0; i < currentImages.length; i++){
		console.log("Image " + i)

		numRandom = Math.floor(Math.random() * options.length)
		randomImg = "images/" + options[numRandom]

		currentImages[i].src = randomImg
		//currentImages[i].alt = texto[numRandom]
		//currentImages[i].setAttribute("tabindex", "0")
		
	}
}
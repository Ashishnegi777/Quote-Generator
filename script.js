const btn = document.getElementById('N-q');
const quote = document.querySelector('.quotes-line');
const  writer = document.querySelector(".writer");
const image = document.querySelector(".img-section");
let index = 0;// track of images

const quotesArr = [
    {
		quote: `"The End Is The Beginning And The Beginning Is The End."`,
		writer: `Adam (Dietrich Hollinderbaumer)`,
	},
	{
		quote: `"Our Mistake In All Of Our Thinking Is That We Each Believe Ourselves To Be An Independent Entity; One Self Beside Countless Other Selves."`,
		writer: `Eve (Barbara Nüsse)`,
	},
	{
		quote: `"The Distinction Between Past, Present, And Future Is Nothing But An Illusion."`,
		writer: `Opening Narration`,
	},
	{
		quote: `"I've Woken Up And I No Longer Know If I'm A Person Who Dreamed He's A Butterfly Or If I'm A Butterfly Who's Dreaming It's A Person."`,
		writer: `Ines Kahnwald (Angela Winkler)`,
	},
];


// toggling between the qoutes
btn.addEventListener('click', function(){
    const random = Math.floor(Math.random() * quotesArr.length);// random nummber for the quotes array
    quote.textContent = quotesArr[random].quote;
    writer.textContent = quotesArr[random].writer;
    display();
});

function display(){
    const images = document.querySelectorAll('.slide');

    console.log(images)
    //setting the all images display none
    for(let i = 0; i < images.length; i++){
        images[i].style.display = 'none';
    }
    index++;
    if(index > images.length) index = 0; // if index exeeded over the images array

	void images[index -1].offsetWidth; // trigger a reflow of the DOM
    images[index - 1].style.display = 'block';
}

// handling the enter keypress event
document.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		display();
	}
});


//activate when Mouse Move event occurs 
document.addEventListener("mousemove", function (event, elementPre) {
	tilt(event);
});

function tilt(event) {
	
	const x = event.clientX;// get the horizontal mouse cursor coordinates from left
	const y = event.clientY;// get the verticale mouse cursor coordinates from top

	//finding the middle
	const mWidth = window.innerWidth / 2;
	const mHeight = window.innerHeight / 2;

	//offset form middle
	const offsetX = ((x - mWidth) / mWidth) * 5;
	const offsetY = ((y - mHeight) / mWidth) * 4;

	//Updating the CSS Variable
	image.style.setProperty("--rotateX",  offsetX + "deg");// converts the value to the string and then assign it to the CSS Variable
	image.style.setProperty("--rotateY", offsetY + "deg");
}
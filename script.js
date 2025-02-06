const btn = document.getElementById('N-q');
const quote = document.querySelector('.quotes-line');
const  writer = document.querySelector(".writer");
const image = document.querySelector(".img-section");
let index = 0;// track of images

const quotes = [
	{
		quote: `"The End Is The Beginning And The Beginning Is The End."`,
		writer: `Adam (Dietrich Hollinderbaumer)`,
		exp: `"There are beliefs throughout the world that death is only the beginning of a new stage of existence. In Dark, with the show's time travel element, that idea is shown to be a literal starting over of the timeline and attempting to fix the mistakes of the past."`,
	},
	{
		quote: `"Our Mistake In All Of Our Thinking Is That We Each Believe Ourselves To Be An Independent Entity; One Self Beside Countless Other Selves."`,
		writer: `Eve (Barbara Nüsse)`,
		exp: `"Stories about the multiverse have become extremely popular to the point of some feeling the concept has grown stale. However, Dark was early to the trend, using the concept for some of its biggest twists and most exciting storytelling developments. It also introduced the idea that each person is connected to their existence in other realities."`,
	},
	{
		quote: `"The Distinction Between Past, Present, And Future Is Nothing But An Illusion."`,
		writer: `Opening Narration`,
		exp: `"esterday, Today, and Tomorrow Are Not Consecutive, They Are Connected In A Never-Ending Circle. Everything Is Connected."`,
	},
	{
		quote: `"I've Woken Up And I No Longer Know If I'm A Person Who Dreamed He's A Butterfly Or If I'm A Butterfly Who's Dreaming It's A Person."`,
		writer: `Ines Kahnwald (Angela Winkler)`,
		exp: `"There is a lot to unpack in Dark, both for the viewers and for the characters themselves. Many characters know this and admit as much, allowing the audience to breathe a sigh of relief when they struggle to figure out what is in the series."`,
	},
	{
		quote: `"Expectations Lead To Disappointment. Have Hope, Not Expectations. You Might Just Be Surprised, But Not Disappointed."`,
		writer: `Inspector Clausen (Sylvester Groth)`,
		exp: ``,
	},
	{
		quote: `"Your Pain Defines Who You Are, But It No Longer Holds Power Over You."`,
		writer: `Noah (Mark Waschke)`,
		exp: `"It is a powerful idea and a reminder that a person's past, whether it be good or bad, does not have to set them down a preordained path. Using the lessons and determination that come from suffering allows them to build a new future for themselves."`,
	},
	{
		quote: `"You And I Are Perfect For Each Other. Never Believe Anything Else."`,
		writer: `Jonas Kahnwald `,
		exp: `"gsap.min.js:10 Invalid property easing set to power4.out Missing plugin? gsap.registerPlugin()"`,
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



setTimeout(grained('#body', {
	'animate': false, 
	'patternWidth': 1000, // Width of the grain pattern
	'patternHeight': 1000, 
	'grainOpacity': 0.2, // Opacity of the grain
	'grainDensity': 10, // Grain density
	'grainWidth': 1, // Grain particle width
	'grainHeight': 1,
	'grainColor': '#000' 
}),5000);


//pre loader counter
function startloader() {
	let count = 0;

	function updateCounter() {
		// if the reached to the 100 then return
		if (count === 100) {
			return;
		}
		//generating the random number between 0 to 10
		count += Math.floor(Math.random() * 10) + 1;

		//if number get out of the 100, initializinf with 100 again
		if (count > 100) count = 100;

		//updating the HTML element
		counter.textContent = count + "%";

		// updating the browser loading bar according to the count progress
		bar.style.width = `${count}%`;

		// generating a fake delay
		let delay = Math.floor(Math.random() * 200) + 50;
		setTimeout(updateCounter, delay);
	}

	requestAnimationFrame(updateCounter);
}
startloader();


gsap.from(".base", {
	duration: 1.5,
	delay: 4,
	scale: 0.7,
	ease: "power4.out",
});
gsap.ticker.lagSmoothing(10000, 16);// for smooth animation

const timeLine = gsap.timeline({ default: { duration: 2 } });
timeLine
	.to(".pre-loader", {
		// duration: 1,
		delay: 4,
		opacity: 0,
		scale: 2,
		ease: "power4.in",
		force3D: true,
	},"-=0")
	.from(".body", {
		background: "#ffff",
		ease: "power.out",
	});

	function flip() {
	gsap.to(".base", {
		duration: 1,
		scale: 0.6,
		delay: 0.8,
		ease: "power3.in",
	});
};

function unFlip() {
	gsap.to(".base", {
		duration: 1,
		scale: 0.7,
		delay: 1,
		ease: "power2.out",
	});
};
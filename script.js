
let btn = document.querySelector("#N-q");
let quote = document.querySelector(".quotes-line");
let writer = document.querySelector(".writer");
const exp = document.querySelector(".ex-text");
const image = document.querySelector(".img-section");
const card = document.querySelector(".glass-bg");
const loader = document.querySelector(".pre-loader");
const counter = document.querySelector(".counter");
const loadingBar = document.querySelector(".loading-bar");
const bar = document.querySelector(".bar");
const video = document.querySelector(".video");
let index = 0;
const dark = document.getElementById("dark");


// quotes array
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
		exp: `"Yesterday, Today, and Tomorrow Are Not Consecutive, They Are Connected In A Never-Ending Circle. Everything Is Connected."`,
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
		exp: `"Both Martha and Jonas are destined to play their part in their time loops, continuously failing to change the course of time until they realize that their stories are not the origin of their worlds."`,
	},
];


btn.addEventListener("click", function quoteGen() {
	let random = Math.floor(Math.random() * quotes.length); // generating a ramdom number based on quotes length
	quote.textContent = quotes[random].quote;
	writer.innerText = quotes[random].writer;
	exp.textContent = quotes[random].exp;

	if (quotes[random].exp == ``) {
		document.querySelector(".ex-img").style.display = "block";
	} else {
		document.querySelector(".ex-img").style.display = "none";
	}
	display();
});

function display() {
	let i;
	const images = document.querySelectorAll(".slide");

	for (i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}

	images.forEach((images) => images.classList.remove("fade"));
	index++;
	if (index > images.length) index = 1; // to prevent the error, if index value goes out of images length
	images[index - 1].style.display = "block";

	if (index == 3) {
		flip();
		video.play();
		moveOut();
	} else {
		unFlip();
		video.pause();
		moveIn();
	}
	void images[index - 1].offsetWidth;
	images[index - 1].classList.add("fade");

	let audio = document.getElementById("music");
	audio.play();
	let bgScore = document.getElementById("bg-score");
	bgScore.play();
}

document.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		display();
	}
});


document.addEventListener("mousemove", function (event, elementPre) {
	tilt(event, elementPre);
});

function tilt(event, element) {
	const x = event.clientX;
	const y = event.clientY;

	//finding the middle
	const mWidth = window.innerWidth / 2;
	const mHeight = window.innerHeight / 2;

	//offset form middle
	const offsetX = ((x - mWidth) / mWidth) * 5;
	const offsetY = ((y - mHeight) / mWidth) * 4;

	// console.log(offsetX, offsetY)
	image.style.setProperty("--rotateX", -1 * offsetX + "deg");
	image.style.setProperty("--rotateY", offsetY + "deg");
}

// gradient function
setTimeout(grained('#body', {
		'animate': false, // Enables animation
		'patternWidth': 1000, // Width of the grain pattern
		'patternHeight': 1000, 
		'grainOpacity': 0.2, // Opacity of the grain
		'grainDensity': 10, // Grain density
		'grainWidth': 1, // Grain particle width
		'grainHeight': 1, 
		'grainColor': '#000' 
}),5000)

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
gsap.ticker.lagSmoothing(10000, 16);

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

function moveOut() {
	const t2 = gsap.timeline({ default: { duration: 1.2 } });
	t2.to(".explaination", {
		x: -100,
		y: -80,
		delay: 1.5,
		ease: "power4.out",
	});
};

function moveIn() {
	gsap.to(".explaination", {
		duration: 1,
		x: 1,
		y: 1,
		ease: "power.out",
	});
};


preTextLoader();
function preTextLoader(){
	
		const loaderTimeline = gsap.timeline({default: {ease: "power4.out"}})
	
		loaderTimeline.from('.pre-text',{
			duration: 2,
			y: 50,
			color: "red",
			opacity: 0,
			stagger: .141,
		}).to(".circle",{
			duration: 3,
			scale: 1500,
			ease: "power4.inOut",
		}, '-=1')
		.from(".base", {
			duration: 2,
			scale: 0.6,
			ease: "power4.out",
		}, "-=1");
		
	};

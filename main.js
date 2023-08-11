/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/*Validate if nav exist*/
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/*=============== HIDE MENU ===============*/
/*Validate if nav exist*/
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () => {
	const header = document.getElementById("header");
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 200) header.classList.add("blur-header");
	else header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
	contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
	e.preventDefault();

	emailjs
		.sendForm(
			"service_f4bazfv",
			"template_2wrheb9",
			"#contact-form",
			"SHkkvLN2NrovVUFo7"
		)
		.then(
			function (response) {
				console.log("SUCCESS!", response.status, response.text);
				contactMessage.textContent = "Message sent successfully! 🎉";

				setTimeout(() => {
					contactMessage.textContent = "";
				}, 3000);

				contactForm.reset();
			},
			function (error) {
				console.log("FAILED...", error);
				contactMessage.textContent = "Message failed to send! 😢";

				setTimeout(() => {
					contactMessage.textContent = "";
				}, 3000);
			}
		);
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
	const scrollUp = document.getElementById("scroll-up");
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
	const scrollY = window.scrollY;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		const sectionId = current.getAttribute("id");
		const sectionClass = document.querySelector(
			"nav__menu a[href*=" + sectionId + "]"
		);

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionClass.classList.add("active-link");
		} else {
			sectionClass.classList.remove("active-link");
		}
	});
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

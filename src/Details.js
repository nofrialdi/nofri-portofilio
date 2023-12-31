// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/picture.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import codeigniter from "./assets/techstack/codeigniter.png";
import nest from "./assets/techstack/nest.png";
import next from "./assets/techstack/nextjs.png";
import php from "./assets/techstack/php.png";
import postgresql from "./assets/techstack/postgresql.png";

// Porject Images
import projectImage1 from "./assets/projects/markilang.jpeg";
import projectImage2 from "./assets/projects/wareg.png";
import projectImage3 from "./assets/projects/pokemon.png";
import projectImage4 from "./assets/projects/teledoc.png";
import projectImage5 from "./assets/projects/growink.png";

// Logos
export const logos = {
	logogradient: logogradient,
	logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
	name: "Nofrialdi",
	tagline: "I am a full stack engineer",
	img: profile,
	about: `I'm Nofrialdi, and I love coding! I am a graduate of Informatics Systems with an interest in programming. Have an understanding of application and web development, as well as database management. Skilled in Java and PHP programming languages and familiar with HTML, CSS, Javascript, TypeScript, React.js framework, Next.js codeigniter, Postgresql, and MySQL.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
	linkdein: "https://www.linkedin.com/in/nofrialdi",
	github: "https://github.com/nofrialdi",
	twitter: "https://twitter.com/",
	instagram: "https://www.instagram.com/nofrialdii/",
};

// Enter your Work Experience here
export const workDetails = [
	{
		Position: "Assistant Instructure",
		Company: `Cv. Bina Kreasi Informatika`,
		Location: "Bekasi",
		Type: "Full Time",
		Duration: "Jan 2018 - Nov 2019",
	},
	{
		Position: "Android Developer",
		Company: `PT. Fedora`,
		Location: "Jakarta",
		Type: "Full Time",
		Duration: "Sep 2016 - Dec 2017",
	},
	{
		Position: "Assistant Professor",
		Company: `STMIK Jayakarta`,
		Location: "Jakarta",
		Type: "Full Time",
		Duration: "Aug 2015 - Jul 2016",
	},
];

// Enter your Education Details here
export const eduDetails = [
	{
		Position: "Software Engineering",
		Company: "RevoU",
		Location: "Jakarta",
		Duration: "Jan 2023 - Jul 2023",
	},
	{
		Position: "Bachelor Degree in Information System",
		Company: "STMIK Jayakarta",
		Location: "Jakarta",
		Duration: "Jan 2013 - Apr 2017",
	},
];

// Tech Stack and Tools
export const techStackDetails = {
	html: html,
	css: css,
	js: js,
	react: react,
	tailwind: tailwind,
	bootstrap: bootstrap,
	vscode: vscode,
	postman: postman,
	npm: npm,
	git: git,
	github: github,
	figma: figma,
	codeigniter: codeigniter,
	next: next,
	php: php,
	nest: nest,
	postgresql: postgresql,
};

// Enter your Project Details here
export const projectDetails = [
	{
		title: "Markilang Web App",
		image: projectImage1,
		description: `An online auction platform for those wanting to sell or find rare collectibles and small valuables. 
		Registered users can bid on their favourite selections and keep track of their bidding list or manage their auctioned assets.`,
		techstack: "JavaScript, Next JS, Tailwind CSS, PostgreSQL",
		previewLink: "https://markilang.vercel.app/",
		githubLink: "https://github.com",
	},
	{
		title: "Wareg Web App",
		image: projectImage2,
		description: `wareg app is a website that provides or sells healthy food `,
		techstack: "Tailwind CSS, TypeScript, Next JS, Nest JS, PostgreSQL",
		previewLink: "https://w23-vercel-cub24rt71-anggr.vercel.app/",
		githubLink: "https://github.com/nofrialdi/wareg-web-app",
	},
	{
		title: "Pokemon Web App",
		image: projectImage3,
		description: `Pokemon web app is a website that displays a list of Pokemon and details of those Pokemon`,
		techstack: "HTML/CSS, Next JS, JavaScript",
		previewLink: "https://pokemons-apps.vercel.app/",
		githubLink: "https://github.com/nofrialdi/pokemon-app",
	},

	{
		title: "Teledoc App",
		image: projectImage4,
		description: `The Teladoc application is a mobile web-based application that aims to make it easier for users or patients to make appointments with doctors online`,
		techstack: "Tailwind CSS, Next JS, TypeScript, PostgreSQL",
		previewLink: "https://www.teledoc.tech/",
		githubLink: "https://github.com/Teledoc-App/teledoc-app",
	},

	{
		title: "Growink App",
		image: projectImage5,
		description: `Growink App is a website with a mobile web base which aims to make it easier for farmers to make agricultural records, view agricultural history, and monitor their agriculture, apart from that there is a financial feature which aims to record their expenses and income and can see the history of their expenses and income and can also see their balance In the design stage, this website was created using Next Js technology as the frontend, Nest Js as the backend and using PostgresQL for the database.`,
		techstack: "Material UI, Next JS, TypeScript, PostgreSQL, Nest JS",
		previewLink: "https://growink.vercel.app/",
		githubLink: "https://github.com/growink-app/growink-app",
	},
];

// Enter your Contact Details here
export const contactDetails = {
	email: "aldi.fasive@gmail.com",
	phone: "+62 89612022458",
};

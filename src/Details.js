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
// Porject Images
import projectImage1 from "./assets/projects/markilang.jpeg";
import projectImage2 from "./assets/projects/wareg.png";
import projectImage3 from "./assets/projects/pokemon.png";
import projectImage4 from "./assets/projects/teledoc.png";

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
	about: `Experienced Software Developer with expertise in design, installation, testing and maintenance of software systems. Equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and embedded systems. Experienced with cutting-edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.`,
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
		Position: "Bachelor Degree in Information System",
		Company: "STMIK Jayakarta",
		Location: "Jakarta",
		Duration: "Jan 2013 - Apr 2017",
	},
	{
		Position: "High School",
		Company: `SMA Negeri 11`,
		Location: "Ambon",
		Duration: "Jan 2009 - May 2012",
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
	// 	{
	// 		title: 'Project title 4',
	// 		image: projectImage4,
	// 		description: `This is sample project description random things are here in description This is sample
	// project lorem ipsum generator for dummy content`,
	// 		techstack: 'HTML/CSS, JavaScript',
	// 		previewLink: 'https://google.com',
	// 		githubLink: 'https://github.com',
	// 	},
	// 	{
	// 		title: 'Project title 5',
	// 		image: projectImage5,
	// 		description: `This is sample project description random things are here in description This is sample
	// project lorem ipsum generator for dummy content`,
	// 		techstack: 'HTML/CSS, JavaScript',
	// 		previewLink: 'https://google.com',
	// 		githubLink: 'https://github.com',
	// 	},
	// 	{
	// 		title: 'Project title 6',
	// 		image: projectImage6,
	// 		description: `This is sample project description random things are here in description This is sample
	// project lorem ipsum generator for dummy content`,
	// 		techstack: 'HTML/CSS, JavaScript',
	// 		previewLink: 'https://google.com',
	// 		githubLink: 'https://github.com',
	// 	},
];

// Enter your Contact Details here
export const contactDetails = {
	email: "aldi.fasive@gmail.com",
	phone: "+62 89612022458",
};

import React from "react";
import { homeObjOne, settings } from "./Data";
import {
	HeroSection,
	AboutUs,
	JOC,
	Carousel,
	Sponsors,
} from "../../components";

function Home() {
	return (
		<>
			<HeroSection />
			<AboutUs {...homeObjOne} />
			<JOC />
			<Carousel settings={settings} />
			<Sponsors />
		</>
	);
}

export default Home;

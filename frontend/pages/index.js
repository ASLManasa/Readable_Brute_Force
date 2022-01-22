import { Instruction } from "@components/LandingPage/Instruction";
import Head from "next/head";
import { FeaturesList } from "@components/LandingPage/FeaturesList";
import { Footer } from "@components/LandingPage/Footer";
import { MainSection } from "@components/LandingPage/MainSection";
import { NavBar } from "@components/LandingPage/NavBar";
import { PricingComp } from "@components/LandingPage/PricingComp";

export default function Home() {
	return (
		<>
			<Head>
				<title>Readable: Your Reading Partner</title>
			</Head>
			<NavBar />
			<MainSection />
			<FeaturesList />
			<Instruction />
			{/* <PricingComp /> */}
			<Footer />
		</>
	);
}

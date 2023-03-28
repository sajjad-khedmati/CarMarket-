import TestDriveBanner from "@/components/modules/TestDriveBanner";
import CarRecomendationList from "@/components/templates/CarRecomendationList";
import HomeHeader from "@/components/templates/HomeHeader";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Home() {
	return (
		<section className="w-screen h-screen flex flex-col">
			<HomeHeader />
			<div className="overflow-y-scroll h-full pb-32">
				<CarRecomendationList />
				<TestDriveBanner />
			</div>
		</section>
	);
}

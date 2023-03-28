import AvailableCars from "@/components/templates/AvailableCars";
import CarRecomendationList from "@/components/templates/CarRecomendationList";
import HomeHeader from "@/components/templates/HomeHeader";

export default function Home() {
	return (
		<section className="w-screen h-screen flex flex-col">
			<HomeHeader />
			<div className="overflow-y-scroll h-full pb-32">
				<CarRecomendationList />
				<AvailableCars />
			</div>
		</section>
	);
}

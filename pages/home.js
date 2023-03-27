import CarRecomendationList from "@/components/templates/CarRecomendationList";
import HomeHeader from "@/components/templates/HomeHeader";

export default function Home() {
	return (
		<section className="w-screen h-screen flex flex-col">
			<HomeHeader />
			<CarRecomendationList />
		</section>
	);
}

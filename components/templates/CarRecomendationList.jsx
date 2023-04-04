import Link from "next/link";

import carsList from "@/data/carsData";
import CarCard from "../modules/CarCard";
import TestDriveBanner from "../modules/TestDriveBanner";

export default function CarRecomendationList() {
	return (
		<main className="container">
			<div className="flex justify-between items-center ">
				<h2 className="text-xl font-bold">Car Recomendations</h2>
				<Link
					href="/cars/recomendations"
					className="text-lg text-slate-400 font-semibold hover:text-slate-800 transition-all duration-300"
				>
					view all
				</Link>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-6 lg:gap-8 xl:gap-12">
				{carsList
					.filter((item) => item.recomended)
					.slice(0, 3)
					.map((item) => (
						<CarCard key={item.id} data={item} />
					))}
			</div>
			<TestDriveBanner />
		</main>
	);
}

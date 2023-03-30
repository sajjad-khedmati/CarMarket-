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
			<div className="grid grid-cols-1 gap-2">
				{carsList
					.filter((item) => item.recomended)
					.slice(0, 2)
					.map((item) => (
						<CarCard key={item.id} data={item} />
					))}
			</div>
			<TestDriveBanner />
		</main>
	);
}

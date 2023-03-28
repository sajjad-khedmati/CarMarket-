import carsList from "@/data/carsData";
import Link from "next/link";
import CarListCard from "../modules/CarListCard";

export default function AvailableCars() {
	return (
		<section className="container">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-xl font-bold">Available Cars</h2>
				<Link
					href="/cars"
					className="text-lg text-slate-400 font-semibold hover:text-slate-800 transition-all duration-300"
				>
					view all
				</Link>
			</div>

			<div className="grid grid-cols-1 gap-6">
				{carsList.slice(0, 4).map((item) => (
					<CarListCard key={item.id} data={item} />
				))}
			</div>
		</section>
	);
}

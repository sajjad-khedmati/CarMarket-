import CarListCard from "@/components/modules/CarListCard";
import { UilArrowLeft, UilSearch } from "@iconscout/react-unicons";
import Link from "next/link";
import { useState } from "react";

import carsList from "@/data/carsData";

export default function Recomendations(props) {
	const [data, setData] = useState(carsList.filter((item) => item.recomended));

	return (
		<section className="w-scren h-screen overflow-y-scroll container">
			<div>
				<nav className="flex items-center py-4">
					<Link
						href="/home"
						className="p-2 rounded-full hover:bg-slate-100/70 hover:scale-95  transition-all duration-300"
					>
						<UilArrowLeft className="w-8 h-8" />
					</Link>
					<p className="text-lg font-bold mx-auto">Recomendation Cars</p>
					<div className="p-3 rounded-full hover:bg-slate-100/70 hover:scale-95  transition-all duration-300">
						<UilSearch className="w-6 h-6" />
					</div>
				</nav>
			</div>
			<div>
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-4">
					{data.length > 0 ? (
						data.map((item) => <CarListCard key={item.id} data={item} />)
					) : (
						<div className="w-full h-full flex items-center justify-center">
							<p className="animate-bounce mt-12 font-semibold text-lg">
								Item not found
							</p>
						</div>
					)}
				</section>
			</div>
		</section>
	);
}

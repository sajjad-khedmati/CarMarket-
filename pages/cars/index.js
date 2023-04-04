import Link from "next/link";

import { UilArrowLeft, UilSearch, UilFilter } from "@iconscout/react-unicons";

import DropDown from "@/components/modules/DropDown";

import carsList from "@/data/carsData";
import CarListCard from "@/components/modules/CarListCard";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CarsIndex() {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState({ type: "all" });
	const router = useRouter();

	useEffect(() => {
		if (Object.keys(router.query).length > 0) {
			if (filter.type.toLowerCase() !== "all") {
				setData(
					carsList.filter(
						(item) =>
							item.category === router.query.category && item.recomended,
					),
				);
			} else {
				setData(
					carsList.filter((item) => item.category === router.query.category),
				);
			}
		} else {
			if (filter.type.toLowerCase() !== "all") {
				setData(carsList.filter((item) => item.recomended));
			} else {
				setData(carsList);
			}
		}
	}, [router, filter]);

	return (
		<section className="w-scren h-screen container">
			<header>
				<nav className="flex items-center py-4">
					<Link
						href="/home"
						className="p-2 rounded-full hover:bg-slate-100/70 hover:scale-95  transition-all duration-300"
					>
						<UilArrowLeft className="w-8 h-8" />
					</Link>
					<p className="text-lg font-bold mx-auto">Available Cars</p>
					<div className="p-3 rounded-full hover:bg-slate-100/70 hover:scale-95  transition-all duration-300">
						<UilSearch className="w-6 h-6" />
					</div>
				</nav>

				<div>
					<div className="duration-300 rounded-2xl transition-all mt-4 py-4 flex justify-between gap-4">
						<DropDown
							options={["All", "Recomended"]}
							setter={setFilter}
							filter={filter}
						/>
						<div className="border-2 min-w-max border-slate-200/70  shadow-xl shadow-slate-100/80 rounded-2xl px-6 py-3 flex items-center gap-2">
							<UilFilter className="w-6 h-6" />
							<span className="font-semibold">filter</span>
						</div>
					</div>
				</div>
			</header>
			<body className="overflow-hidden">
				<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 my-4">
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
			</body>
		</section>
	);
}

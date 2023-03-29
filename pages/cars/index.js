import Link from "next/link";

import { UilArrowLeft, UilSearch, UilFilter } from "@iconscout/react-unicons";


import DropDown from "@/components/modules/DropDown";

export default function CarsIndex() {


	return (
		<section className="w-scren h-screen overflow-y-scroll container">
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
				<div
					
					className="duration-300 rounded-2xl transition-all mt-4 py-4 flex gap-4"
					
				>
					<div className="border-2 min-w-max border-slate-100 rounded-2xl px-4 py-2 flex items-center gap-2">
						<UilFilter className="w-5 h-5" />
						<span>filter</span>
					</div>

					<DropDown options={["All", "Recomended"]} />
				</div>

			
			</div>
		</section>
	);
}

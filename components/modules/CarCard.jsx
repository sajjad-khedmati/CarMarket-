import Image from "next/image";

import { UilHeartAlt, UilStar } from "@iconscout/react-unicons";

export default function CarCard({ data }) {
	return (
		<>
			{/* card */}
			<div className="rounded-xl px-4 py-8 shadow-xl shadow-slate-200/80">
				{/* card Hedaer */}
				<div className="flex items-center justify-between drop-shadow-md shadow-slate-200/50">
					{data.freeTestDrive && (
						<span className="px-3 py-2 rounded-xl bg-primary text-white text-xs font-semibold tracking-wider">
							Free Test Drive
						</span>
					)}

					<UilHeartAlt className="w-8 h-8 text-slate-500" />
				</div>
				{/* card body */}
				<div className="flex flex-col gap-3 w-full">
					<div className="relative w-full h-48 mt-7">
						<Image src={data.image} className="p-4" alt={data.model} fill />
					</div>
					<div className="flex items-center justify-between">
						<p className="font-semibold text-lg">
							{data.name} {data.model}
						</p>
						<div className="flex items-center gap-1">
							<UilStar className="w-6 h-6 text-amber-500" />
							<span className="font-semibold text-slate-500">
								{data.rating}
							</span>
						</div>
					</div>
				</div>

				<hr className="my-4 mx-6" />
				{/* card footer */}
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-6">
						<div className="flex items-center gap-2">
							<Image
								src="/icons/engine.svg"
								alt="engine"
								width={20}
								height={20}
							/>
							<p className="text-slate-600">
								<span className="text-slate-700 font-bold">{data.power}</span>{" "}
								hp
							</p>
						</div>

						<div className="flex items-center gap-2">
							<Image
								src="/icons/gearbox.svg"
								alt="gearbox"
								width={20}
								height={20}
							/>
							<p className="text-slate-600">{data.gearbox}</p>
						</div>
					</div>

					<p className="text-slate-500">
						${" "}
						<span className="font-bold text-slate-800">
							{data.price.toLocaleString()}
						</span>
					</p>
				</div>
			</div>
		</>
	);
}

import Image from "next/image";

import { UilStar } from "@iconscout/react-unicons";

import { motion } from "framer-motion";

export default function CarListCard({ data }) {
	return (
		<>
			{/* card */}
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ type: "spring", delay: 0.3 }}
				className="w-full bg-slate-50 px-6 py-2 rounded-2xl shadow-xl shadow-slate-200/60"
			>
				{/* card header */}
				<div className="flex gap-4 items-center">
					<div className="relative w-40 h-32">
						<Image
							src={data.image}
							alt={data.model}
							fill
							style={{ objectFit: "contain" }}
						/>
					</div>

					<div className="flex flex-col gap-3">
						<h3 className="break-words text-lg font-semibold">{data.model}</h3>
						<div className="flex items-center justify-between flex-wrap gap-2">
							<p className="font-bold text-sm text-slate-500 uppercase">
								{data.name}
							</p>
							<div className="flex items-center gap-1">
								<UilStar className="w-6 h-6 text-amber-400" />
								<span className="text-slate-500 font-semibold">
									{data.rating}
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* card body */}
				<hr className="mx-6 my-2" />
				{/* card footer */}
				<div className="flex items-center justify-between mt-5 mb-3">
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-2">
							<Image
								src="/icons/engine.svg"
								alt="engine"
								width={18}
								height={18}
							/>
							<p className="text-slate-600">
								<span className="text-slate-700 font-bold">{data.power}</span>{" "}
								hp
							</p>
						</div>

						<div className="flex items-center gap-1">
							<Image
								src="/icons/gearbox.svg"
								alt="gearbox"
								width={20}
								height={20}
							/>
							<p className="text-slate-600">{data.gearbox}</p>
						</div>
					</div>

					<p className="text-primary/80">
						${" "}
						<span className="font-bold text-primary text-lg">
							{data.price.toLocaleString("en")}
						</span>
					</p>
				</div>
			</motion.div>
		</>
	);
}

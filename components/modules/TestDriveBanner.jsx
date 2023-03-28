import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

export default function TestDriveBanner() {
	return (
		<motion.section
			initial={{ y: 50 }}
			whileInView={{ y: 0 }}
			transition={{ type: "spring", delay: 0.3 }}
			className="mt-12 mb-8"
		>
			<div
				className="group relative overflow-hidden flex flex-col gap-6 justify-between 
            w-full p-6 h-max bg-slate-800 rounded-2xl shadow-xl shadow-slate-200/80"
			>
				<div>
					<p className="text-white text-xl">Test Drive in Your Area</p>
					<p className="text-slate-500 w-[60%] mt-2 break-words">
						test drive from your home or carline hub
					</p>
				</div>
				<Link
					className="w-max px-6 py-2 border-2 border-slate-400 text-slate-300 rounded-xl text-center"
					href="cars"
				>
					view Cars
				</Link>

				<div className="w-72 h-full z-50 duration-500 delay-75 transition-all absolute bg-transparent -bottom-10 -right-20 group-hover:-right-16">
					<Image
						src="/assets/lamborghini-aventador.png"
						alt=""
						fill
						style={{ objectFit: "contain" }}
					/>
				</div>

				<span className="w-72 h-72 border-2 rounded-full border-slate-50/20 absolute -top-2 -right-32"></span>
			</div>
		</motion.section>
	);
}

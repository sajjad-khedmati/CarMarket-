import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GetStarted() {
	return (
		<motion.section
			initial={{ opacity: 0.1, scale: 0.3 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3 }}
			className="w-screen h-screen relative bg-fixed bg-center bg-cover bg-no-repeat bg-[url('/assets/main-background.jfif')]"
		>
			<main className="container bg-black/60 fixed text-white top-0 left-0 w-full h-full">
				<div className="break-words h-full w-full flex flex-col justify-between">
					<div className=" pr-10 mt-32 ">
						<h1 className="text-4xl  font-semibold">
							find the best car without headaches
						</h1>
						<p className="mt-4 text-lg text-gray-500">
							you choose your car online we inspect it and deliver it
						</p>
					</div>

					<Link
						href="/home"
						className="bg-primary rounded-xl py-4 shadow-2xl shadow-primary/40 px-4
                         text-center text-xl tracking-wider font-medium hover:bg-priamry/80 hover:scale-95
                         transition-all duration-300 cursor-pointer mb-6"
					>
						Get Started
					</Link>
				</div>
			</main>
		</motion.section>
	);
}

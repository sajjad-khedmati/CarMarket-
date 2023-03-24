import React from "react";

import { motion } from "framer-motion";

export default function GetStarted() {
	return (
		<motion.section
			initial={{ opacity: 0.1, scale: 0.3 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3 }}
			className="w-screen h-screen relative bg-fixed bg-center bg-cover bg-no-repeat bg-[url('/assets/main-background.jfif')]"
		>
			<main className="bg-black/40 fixed text-white top-0 left-0 w-full h-full">
                
            </main>
		</motion.section>
	);
}

import { motion } from "framer-motion";
export default function BottomNavItem({ title, icon, isActive }) {
	return (
		<>
			{isActive ? (
				<motion.div
					initial={{ y: 0 }}
					animate={{ y: -5 }}
					transition={{
						type: "spring",
						duration: 0.1,
					}}
					className="flex flex-col gap-1 items-center transition-all duration-300"
				>
					<span className="w-6 h-6 text-primary">{icon}</span>
					<p className=" text-sm font-bold text-primary">{title}</p>
				</motion.div>
			) : (
				<motion.div
					initial={{ y: -5 }}
					animate={{ y: 0 }}
					transition={{
						type: "spring",
						duration: 0.2,
					}}
					className="flex flex-col gap-1 items-center transition-all duration-300"
				>
					<span className="w-6 h-6 text-gray-400">{icon}</span>
					<p className=" text-sm  text-gray-400">{title}</p>
				</motion.div>
			)}
		</>
	);
}

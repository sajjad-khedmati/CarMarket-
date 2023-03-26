import Link from "next/link";

import {
	UilEstate,
	UilHeartAlt,
	UilCommentAltMessage,
	UilUser,
} from "@iconscout/react-unicons";
import { useRouter } from "next/router";

export default function BottomNavigation() {
	const router = useRouter();
	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-transparent px-8 pt-2 pb-12 flex items-center justify-between">
			<Link href="/home">
				{router.pathname === "/home" ? (
					<div className="flex flex-col gap-1 items-center transition-all duration-300">
						<UilEstate className="w-6 h-6 text-primary" />
						<p className=" text-sm font-bold text-primary">Home</p>
					</div>
				) : (
					<div className="flex flex-col gap-1 items-center transition-all duration-300">
						<UilEstate className="w-6 h-6 text-gray-400" />
						<p className=" text-sm text-gray-400">Home</p>
					</div>
				)}
			</Link>

			<Link href="/favorites">
				{router.pathname === "/favorites" ? (
					<div className="flex flex-col gap-1 items-center transition-all duration-300">
						<UilHeartAlt className="w-6 h-6 text-primary" />
						<p className=" text-sm font-bold text-primary">Favorites</p>
					</div>
				) : (
					<div className="flex flex-col gap-1 items-center transition-all duration-300">
						<UilHeartAlt className="w-6 h-6 text-gray-400" />
						<p className=" text-sm  text-gray-400">Favorites</p>
					</div>
				)}
			</Link>

			<Link href="/message">
				{router.pathname === "/message" ? (
					<div className="flex flex-col gap-1 items-center transition-all duration-300">
						<UilCommentAltMessage className="w-6 h-6 text-primary" />
						<p className=" text-sm font-bold text-primary">Message</p>
					</div>
				) : (
					<div className="flex flex-col gap-1 items-center transition-all duration-300">
						<UilCommentAltMessage className="w-6 h-6 text-gray-400" />
						<p className=" text-sm  text-gray-400">Message</p>
					</div>
				)}
			</Link>

			<Link href="/profile" className="text-primary flex flex-col items-center">
				{router.pathname === "/profile" ? (
					<div className="flex flex-col gap-1 items-center transition-all duration-300">
						<UilUser className="w-6 h-6 text-primary" />
						<p className=" text-sm font-bold text-primary">Profile</p>
					</div>
				) : (
					<div className="flex flex-col gap-1 items-center transition-all duration-300">
						<UilUser className="w-6 h-6 text-gray-400" />
						<p className=" text-sm  text-gray-400">Profile</p>
					</div>
				)}
			</Link>
		</nav>
	);
}

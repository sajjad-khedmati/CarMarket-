import Link from "next/link";

import {
	UilEstate,
	UilHeartAlt,
	UilCommentAltMessage,
	UilUser,
} from "@iconscout/react-unicons";
import { useRouter } from "next/router";

import BottomNavItem from "../BottomNavItem";

export default function BottomNavigation() {
	const router = useRouter();
	return (
		<nav
			className="fixed bottom-0 md:bottom-2 left-0 md:inset-x-1/2 md:w-max md:-translate-x-1/2 right-0 bg-white 
		z-50 px-8 pt-4 pb-10 md:pb-4 md:pt-4 flex items-center justify-between md:gap-16 lg:gap-20 md:rounded-2xl md:shadow-xl"
		>
			<Link href="/home">
				{router.pathname === "/home" ? (
					<BottomNavItem title="Home" icon={<UilEstate />} isActive={true} />
				) : (
					<BottomNavItem title="Home" icon={<UilEstate />} isActive={false} />
				)}
			</Link>

			<Link href="/favorites">
				{router.pathname === "/favorites" ? (
					<BottomNavItem
						title="favorites"
						icon={<UilHeartAlt />}
						isActive={true}
					/>
				) : (
					<BottomNavItem
						title="favorites"
						icon={<UilHeartAlt />}
						isActive={false}
					/>
				)}
			</Link>

			<Link href="/message">
				{router.pathname === "/message" ? (
					<BottomNavItem
						title="message"
						icon={<UilCommentAltMessage />}
						isActive={true}
					/>
				) : (
					<BottomNavItem
						title="message"
						icon={<UilCommentAltMessage />}
						isActive={false}
					/>
				)}
			</Link>

			<Link href="/profile" className="text-primary flex flex-col items-center">
				{router.pathname === "/profile" ? (
					<BottomNavItem title="profile" icon={<UilUser />} isActive={true} />
				) : (
					<BottomNavItem title="profile" icon={<UilUser />} isActive={false} />
				)}
			</Link>
		</nav>
	);
}

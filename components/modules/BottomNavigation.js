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
		<nav className="fixed bottom-0 left-0 right-0 bg-white z-50 px-8 pt-4 pb-10 flex items-center justify-between">
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

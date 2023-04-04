import { UilMapMarker, UilBell } from "@iconscout/react-unicons";
import CategoryScrollList from "../modules/CategoryScrollList";
import SearchInput from "../modules/SearchInput";

export default function HomeHeader() {
	return (
		<header className="container w-screen h-max my-4">
			<div className="flex justify-between items-center">
				<div className="flex gap-3 items-center">
					<UilMapMarker className="w-8 h-8 text-gray-600" />
					<div className="flex flex-col">
						<span className="text-gray-400 text-sm">location</span>
						<p className="text-lg font-semibold">San Fransisco</p>
					</div>
				</div>

				<div className="relative w-8 h-8">
					<span className="w-2 h-2 rounded-full bg-red-500 shadow shadow-red-400 absolute -top-1 right-0"></span>
					<UilBell className="w-full h-full text-gray-600" />
				</div>
			</div>
			<div className="md:flex lg:flex-row-reverse gap-20 items-center justify-between">
				<SearchInput />
				<CategoryScrollList />
			</div>
		</header>
	);
}

import { UilSearch } from "@iconscout/react-unicons";

export default function SearchInput() {
	return (
		<div className="w-full lg:w-96 mt-10 md:mt-4 relative group">
			<input
				type="text"
				className="bg-slate-100  py-4 px-4 rounded-2xl shadow-lg shadow-slate-200/40 w-full placeholder:text-lg placeholder:text-slate-400/70 
					outline-none border-2 border-transparent focus-within:border-slate-200 transition-all duration-300 focus-within:placeholder:text-slate-500
					focus:text-lg font-semibold text-slate-600 tracking-wide"
				placeholder="Search Cars ..."
			/>
			<UilSearch className="absolute right-4 inset-y-1/2 -translate-y-1/2 text-gray-400/70 h-8 w-8 transition-all duration-300 group-focus-within:text-slate-600" />
		</div>
	);
}

import { cn } from "@/lib/utils";
import React from "react";

const CodeEditor = () => {
	return (
		<div
			className={cn(
				"min-w-[400px] border-2 rounded-xl shadow-2xl bg-black/75 border-gray-600/40"
			)}
		>
			<header className="grid grid-cols-6 gap-3 items-center px-4 py-3">
				<div className="flex gap-1 5">
					<div className="rounded-full h-3 w-3 bg-red-500" />
					<div className="rounded-full h-3 w-3 bg-yellow-500" />
					<div className="rounded-full h-3 w-3 bg-green-500" />
				</div>
			</header>
			CodeEditor
		</div>
	);
};

export default CodeEditor;

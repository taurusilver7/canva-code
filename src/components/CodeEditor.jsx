import { cn } from "@/lib/utils";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import { codeSnippets, fonts } from "@/options";
import useStore from "@/store";
import { useEffect } from "react";
import flourite from "flourite";

const CodeEditor = () => {
	const store = useStore();

	// Create a random code-snippet on every render
	useEffect(() => {
		const randomSnippet =
			codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
		useStore.setState(randomSnippet);
	}, []);

	useEffect(() => {
		if (store.autoDetectLanguage) {
			const { language } = flourite(store.code, { noUnknown: true });
			useStore.setState({
				language: language.toLowerCase() || 'plainText',
			});
		}
	}, [store.autoDetectLanguage, store.code]);

	return (
		<div
			className={cn(
				"min-w-[400px] border-2 rounded-xl shadow-2xl",
				store.darkMode
					? "bg-black/75 border-gray-600/40"
					: "bg-white/75 border-gray-200/20"
			)}
			onClick={() => useStore.setState({ darkMode: !store.darkMode })}
		>
			<header className="grid grid-cols-6 gap-3 items-center px-4 py-3">
				<div className="flex gap-1 5">
					<div className="rounded-full h-3 w-3 bg-red-500" />
					<div className="rounded-full h-3 w-3 bg-yellow-500" />
					<div className="rounded-full h-3 w-3 bg-green-500" />
				</div>

				<div className="col-span-4 flex justify-center">
					<input
						type="text"
						spellChecked={false}
						onClick={(e) => e.target.select()}
						onChange={(e) => useStore.setState({ title: e.target.value })}
						value={store.title}
						className="bg-transparent text-center text-gray-400 text-sm font-medium focus:outline-none"
					/>
				</div>
			</header>

			{/* Code Editor */}
			<div
				className={cn(
					"px-4 pb-4",
					store.darkMode
						? "bridgtness-110"
						: "text-gray-800 brightness-50 saturate-200 contrast-200"
				)}
			>
				<Editor
					value={store.code}
					onValueChange={(code) => useStore.setState({ code })}
					highlight={(code) =>
						hljs.highlight(code, {
							language: store.language || "plainText",
						}).value
					}
					style={{
						fontStyle: fonts[store.fontStyle].name,
						fontSize: store.fontSize,
					}}
					textAreaClassName="focus:outline-none"
					onClick={(e) => e.target.select()}
				/>
			</div>
		</div>
	);
};

export default CodeEditor;

import CodeEditor from "./components/CodeEditor";
import ExportOptions from "./components/controls/ExportOptions";
import { Card, CardContent } from "./components/ui/card";
import { cn } from "./lib/utils";
import { fonts, themes } from "./options";
import useStore from "./store";
import { useRef } from "react";

function App() {
	const theme = useStore((state) => state.theme);
	const padding = useStore((state) => state.padding);
	const fontStyle = useStore((state) => state.fontStyle);
	const showBackground = useStore((state) => state.showBackground);

	const editorRef = useRef(null);
	return (
		<main className="dark bg-neutral-950 text-white flex gap-5 min-h-screen justify-center items-center">
			<link
				rel="stylesheet"
				href={themes[theme].theme}
				crossOrigin="anonymous"
			/>
			<link
				rel="stylesheet"
				href={fonts[fontStyle].src}
				crossOrigin="anonymous"
			/>
			<div
				className={cn(
					"overflow-hidden mb-2 transition-all ease-out",
					showBackground
						? themes[theme].background
						: "ring ring-neutral-900"
				)}
				style={{ padding }}
				ref={editorRef}
			>
				<CodeEditor />
			</div>

			<Card className="fixed top-8 py-6 px-8 mx-6 bg-neutral-900/90 backdrop-blur">
				<CardContent className="flex flex-wrap gap-6 p-0">
					<ExportOptions />
				</CardContent>
			</Card>
		</main>
	);
}

export default App;

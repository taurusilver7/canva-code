import CodeEditor from "./components/CodeEditor";
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
		<div className="dark bg-neutral-950 text-white flex flex-col gap-5 min-h-screen justify-center items-center">
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
		</div>
	);
}

export default App;

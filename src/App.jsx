import CodeEditor from "./components/CodeEditor";
import BackgroundSwitch from "./components/controls/BackgroundSwitch";
import DarkModeSwitch from "./components/controls/DarkModeSwitch";
import ExportOptions from "./components/controls/ExportOptions";
import FontSelect from "./components/controls/FontSelection";
import FontSizeInput from "./components/controls/FontSizeInput";
import LanguageSelect from "./components/controls/LanguageSelect";
import PaddingSlider from "./components/controls/PaddingSlider";
import ThemeSelect from "./components/controls/ThemeSelect";
import { Card, CardContent } from "./components/ui/card";
import { cn } from "./lib/utils";
import { fonts, themes } from "./options";
import useStore from "./store";
import { useRef, useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import { Button } from "./components/ui/button";
import { ResetIcon } from "@radix-ui/react-icons";
import WidthMeasure from "./components/WidthMeasure";

function App() {
	const [width, setWidth] = useState("auto");
	const [showWidth, setShowWidth] = useState(false);

	const theme = useStore((state) => state.theme);
	const padding = useStore((state) => state.padding);
	const fontStyle = useStore((state) => state.fontStyle);
	const showBackground = useStore((state) => state.showBackground);

	const editorRef = useRef(null);
	// console.log(theme);

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		if (queryParams.size === 0) return;
		const state = Object.fromEntries(queryParams);

		useStore.setState({
			...state,
			code: state.code ? atob(state.code) : "",
			autoDetectLanguage: state.autoDetectLanguage === "true",
			darkMode: state.darkMode === "true",
			fontSize: Number(state.fontSize || 18),
			padding: Number(state.padding || 64),
		});
	}, []);
	return (
		<main className="dark bg-neutral-950 text-white flex gap-2 min-h-screen justify-center items-center">
			<link
				rel="stylesheet"
				href={themes[theme]?.theme}
				crossOrigin="anonymous"
			/>
			<link
				rel="stylesheet"
				href={fonts[fontStyle].src}
				crossOrigin="anonymous"
			/>
			<Resizable
				enable={{ left: true, right: true }}
				minWidth={padding * 2 + 400}
				size={{ width }}
				onResize={(e, dir, ref) => setWidth(ref.offsetWidth)}
				onResizeStart={() => setShowWidth(true)}
				onResizeStop={() => setShowWidth(false)}
			>
				<div
					className={cn(
						"transition-opacity w-fit mx-auto pb-4",
						showWidth || width === "auto"
							? "invisible opacity-0"
							: "visible opacity-100"
					)}
				>
					<Button
						size="sm"
						onClick={() => setWidth("auto")}
						variant="ghost"
					>
						<ResetIcon className="mr-2" />
						Reset width
					</Button>
				</div>
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
				<WidthMeasure show={showWidth} width={width} />
			</Resizable>

			<Card className="fixed bottom-4 py-6 px-8 mx-6 bg-neutral-900/90 backdrop-blur">
				<CardContent className="flex flex-wrap gap-6 p-0">
					<LanguageSelect />
					<FontSelect />
					<FontSizeInput />
					<PaddingSlider />
					<BackgroundSwitch />
					<DarkModeSwitch />
					<ThemeSelect />
					<div className="w-px bg-neutral-800" />
					<div className="place-self-center">
						<ExportOptions targetRef={editorRef} />
					</div>
				</CardContent>
			</Card>
		</main>
	);
}

export default App;

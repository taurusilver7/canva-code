import CodeEditor from "./components/CodeEditor";
import { fonts, themes } from "./options";
import useStore from "./store";

function App() {
	const theme = useStore((state) => state.theme);
	const padding = useStore((state) => state.padding);
	const fontStyle = useStore((state) => state.fontStyle);
	const showBackground = useStore((state) => state.showBackground);
	return (
		<div className="dark bg-neutral-950 text-white flex flex-col gap-5 min-h-screen justify-center items-center">
			Canva Code | Make you code look like a canvas
			<CodeEditor />
		</div>
	);
}

export default App;

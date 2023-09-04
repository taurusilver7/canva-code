import CodeEditor from "./components/CodeEditor";

function App() {
	return (
		<div className="dark bg-neutral-950 text-white flex flex-col gap-5 min-h-screen justify-center items-center">
			Canva Code | Make you code look like a canvas
      <CodeEditor />
		</div>
	);
}

export default App;

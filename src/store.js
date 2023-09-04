import { create } from "zustand";
import { persist } from "zustand/middleware";
import { codeSnippets } from "./options";

const useStore = create(
	persist(
		() => ({
			code: "",
			title: "Untitled",
			theme: "hyper",
			darkMode: true,
			showBackground: true,
			language: "plainText",
			autoDetectLanguage: false,
			fontStyle: "jetBrainsMono",
			fontSize: 18,
			padding: 64,
		}),
		{
			name: "user-preferences",
		}
	)
);

export default useStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
	persist(
		() => ({
			code: "",
			title: "Untitled",
			theme: "oceanic",
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

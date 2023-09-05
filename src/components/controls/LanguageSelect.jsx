import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import useStore from "@/store";
import { languages } from "@/options";
import { MagicWandIcon } from "@radix-ui/react-icons";

const LanguageSelect = () => {
	const language = useStore((state) => state.language);
	const autoDetectLanguage = useStore((state) => state.autoDetectLanguage);

	const handleChange = (language) => {
		if (language === "auto-detect") {
			useStore.setState({ autoDetectLanguage: true, language: "plainText" });
		} else {
			useStore.setState({ autoDetectLanguage: false, language });
		}
	};

	return (
		<div>
			<label className="block mb-2 text-xs font-medium">Theme</label>
			<Select defaultValue={language} onValueChange={handleChange}>
				<SelectTrigger className="w-40">
					{autoDetectLanguage && <MagicWandIcon className="mr-2" />}
					<SelectValue placeholder="Select language" />
				</SelectTrigger>
				<SelectContent className="dark">
					<SelectItem value="auto-detect">Auto Detect</SelectItem>
					{Object.entries(languages).map(([lang, name]) => (
						<SelectItem key={lang} value={lang}>
							{name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default LanguageSelect;

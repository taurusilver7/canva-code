import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import useStore from "@/store";
import { fonts } from "@/options";
import { MagicWandIcon } from "@radix-ui/react-icons";

const LanguageSelect = () => {
	const fontStyle = useStore((state) => state.fontStyle);

	return (
		<div>
			<label className="block mb-2 text-xs font-medium">Font</label>
			<Select
				defaultValue={fontStyle}
				onValueChange={(fontStyle) => useStore.setState({ fontStyle })}
			>
				<SelectTrigger className="w-40">
					{autoDetectLanguage && <MagicWandIcon className="mr-2" />}
					<SelectValue placeholder="Select font" />
				</SelectTrigger>
				<SelectContent className="dark max-h-[400px]">
					{Object.entries(languages).map(([id, font]) => (
						<SelectItem key={id} value={id}>
							{font}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default LanguageSelect;

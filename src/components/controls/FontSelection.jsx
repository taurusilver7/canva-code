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

const FontSelect = () => {
	const fontStyle = useStore((state) => state.fontStyle);

	return (
		<div>
			<label className="block mb-2 text-xs font-medium">Font</label>
			<Select
				defaultValue={fontStyle}
				onValueChange={(fontStyle) => useStore.setState({ fontStyle })}
			>
				<SelectTrigger className="w-40">
					<SelectValue placeholder="Select font" />
				</SelectTrigger>
				<SelectContent className="dark max-h-[300px]">
					{Object.entries(fonts).map(([id, font]) => (
						<SelectItem key={id} value={id}>
							{font.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default FontSelect;

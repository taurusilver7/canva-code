import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import useStore from "@/store";
import { cn } from "@/lib/utils";
import { themes } from "@/options";

const ThemeSelect = () => {
	const store = useStore();
	console.log(store.theme);
	return (
		<div>
			<label className="block mb-2 text-xs font-medium">Theme</label>
			<Select
				defaultValue={store.theme}
				onValueChange={(theme) => useStore.setState({ theme: theme })}
			>
				<SelectTrigger className="w-40">
					<SelectValue placeholder="Select Theme" />
				</SelectTrigger>
				<SelectContent className="dark max-h-[400px]">
					{Object.entries(themes).map(([name, theme]) => (
						<SelectItem key={name} value={name}>
							<div className="flex gap-2 items-center">
								<div
									className={cn(
										"h-4 w-4 rounded-full",
										theme.background
									)}
								/>
								<span className="capitalize">{name}</span>
							</div>
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default ThemeSelect;

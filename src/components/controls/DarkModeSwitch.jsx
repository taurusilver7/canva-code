import useStore from "@/store";
import React from "react";
import { Switch } from "../ui/switch";

const DarkModeSwitch = () => {
	const darkMode = useStore((state) => state.darkMode);
	return (
		<div>
			<label className="block mb-2 text-xs font-medium text-neutral-400">
				Dark Mode
			</label>
			<Switch
				className="my-1.5"
				checked={darkMode}
				onCheckedChange={(checked) =>
					useStore.setState({ darkMode: checked })
				}
			/>
		</div>
	);
};

export default DarkModeSwitch;

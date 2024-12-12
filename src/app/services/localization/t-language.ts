import { DeepRequired } from "../../models/t-deep-required";

type TContentSection = {
	caption: string;
	content: string[];
}

export type TLanguage = DeepRequired<{
	header: {
		for: string;
		author: string;
	},
	tabs: {
		information: {
			caption: string;
			sections: {
				generalInformation: TContentSection;
				preview: TContentSection;
				workingWithEditor: TContentSection;
				usingInTheGame: TContentSection;
			},
			toc: string;
		},
		editor: {
			caption: string;
			addMenu: string;
			loadMenu: string;
			menu: {
				removeMenu: string;
				menuLabel: string;
				item: {
					text: string;
					command: string;
					enabled: string;
					northWest: string;
					north: string;
					northEast: string;
					west: string;
					center: string;
					east: string;
					southWest: string;
					south: string;
					southEast: string;
				},				
			},
		},
		result: {
			caption: string;
			saveToFile: string;
		}
	}
}>

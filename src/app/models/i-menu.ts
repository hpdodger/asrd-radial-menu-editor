export interface IMenu {
	label: string;
	items: IMenuItem[];
}

export interface IMenuItem {
	label: TMenuItemLabel;
	command: string;
	text: string;
	enabled: boolean;
}

export type TMenuItemLabel = "Center" 
	| "North"
	| "NorthEast"
	| "East"
	| "SouthEast"
	| "South"
	| "SouthWest"
	| "West"
	| "NorthWest";
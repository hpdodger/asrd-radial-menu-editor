import { TMenuItemLabel } from "./t-menu-item-label";

export interface IMenuItem {
	label: TMenuItemLabel;
	command: string;
	text: string;
	enabled: boolean;
}
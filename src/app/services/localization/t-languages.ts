import { TLanguage } from "./t-language";
import { TLanguageId } from "./t-language-id";

export type TLanguages = {
	[k in TLanguageId]: TLanguage;
}
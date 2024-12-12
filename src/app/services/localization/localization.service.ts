import { Injectable } from "@angular/core";
import { TLanguages } from "./t-languages";
import { TLanguageId } from "./t-language-id";
import { TLanguage } from "./t-language";
import { CRuLocalization } from "./c-ru-localization";
import { CEnLocalization } from "./c-en-localization";
import { TStorageSettings } from "../../models/t-storage-settings";
import { ELanguage } from "./e-language";

@Injectable({
	providedIn: "root"
})
export class LocalizationService {	

	public get translation(): TLanguage {
		return this._translation;
	}

	public get currentLanguage(): TLanguageId {
		return this._currentLanguage;
	}

	public set currentLanguage(language: TLanguageId) {
		this._currentLanguage = language;
		this._translation = this._process();

		const settings: TStorageSettings = {
			currentLanguage: language,
		}
		localStorage.setItem(this._localStorageKey, JSON.stringify(settings));
	}

	private _currentLanguage: TLanguageId;
	private _translation: TLanguage;

	private readonly _translates: TLanguages = {
		ru: CRuLocalization,
		en: CEnLocalization,
	} as const;

	private _localStorageKey = "asrd";

	constructor () {

		try {
			const settings: TStorageSettings = JSON.parse(localStorage.getItem(this._localStorageKey));
			this.currentLanguage = settings.currentLanguage;
		} catch (e) {
			this.currentLanguage = ELanguage.en;
		}
		
	}

	public getLanguages(): TLanguageId[] {
		return Object.keys(this._translates).sort((a, b) => -1) as TLanguageId[];
	}	

	private _process(): TLanguage {
		const newTranslation: TLanguage = JSON.parse(JSON.stringify(Object.values(this._translates)[0]));
		const keys = Object.keys(newTranslation);

		for (let i = 0; i < keys.length; i++) {
			const key: keyof TLanguage = keys[i] as keyof TLanguage;
			const val = (newTranslation as any)[key];
			if (typeof val === "string") continue;
			const t: TLanguage = this._translates[this._currentLanguage];
			(newTranslation as any)[key] = t[key];
		}

		return newTranslation;
	}
}

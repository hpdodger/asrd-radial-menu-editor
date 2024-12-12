import { Component, Input } from "@angular/core";
import { TNullable } from "../../models/t-nullable";
import { CommonModule } from "@angular/common";
import { MenuItemNode } from "../../models/nodes/menu-item-node";
import { FormsModule } from "@angular/forms";
import { LocalizationService } from "../../services/localization/localization.service";
import { TLanguageId } from "../../services/localization/t-language-id";
import { ELanguage } from "../../services/localization/e-language";

@Component({
	selector: "app-menu-item",
	standalone: true,
	imports: [
		CommonModule,
		FormsModule
	],
	templateUrl: "./menu-item.component.html",
	styleUrl: "./menu-item.component.scss"
})
export class MenuItemComponent {

	@Input() public model: TNullable<MenuItemNode> = null;

	constructor(public readonly localizationService: LocalizationService) {

	}

	public getDefaultLanguage(): TLanguageId {
		return ELanguage.en;
	}

	public getLocalizedItemLabel(label: string): string {
		const normalizedLabel = this._normalizeToCamelCase(label);
		return (this.localizationService.translation.tabs.editor.menu.item as any)[normalizedLabel] || "label not found";
	}

	public shouldContainEnabledCheckbox(): boolean {
		return this.model?.label !== "Center";
	}

	private _normalizeToCamelCase(str: string): string {
		const t = str.split("");
		t[0] = t[0].toLocaleLowerCase();
		return t.join("");
	}
}

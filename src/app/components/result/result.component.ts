import { Component, ElementRef } from "@angular/core";
import { MenuStoreService } from "../../services/menu-store-service";
import { TNullable } from "../../models/t-nullable";
import { MenuRootNode } from "../../models/nodes/menu-root-node";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-result",
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
	],
	templateUrl: "./result.component.html",
	styleUrl: "./result.component.scss"
})
export class ResultComponent {

	public readonly menuRootNode: TNullable<MenuRootNode> = this._menuStoreService.menuRootNode;

	constructor(
		private _elementRef: ElementRef,
		private _menuStoreService: MenuStoreService) {
		
	}

	public saveToFile(type: "text" | "json"): void {
		let mime;
		let fileContent;
		let fileName;
		let btnSelector;
		if (type === "text") {
			mime = "text/plain";
			fileContent = this.menuRootNode!.serializeToASRD();
			fileName = "RadialMenu.txt";
			btnSelector = "downloadTextBtn";
		} else {
			mime = "application/json";
			fileContent = this.menuRootNode!.serializeToJSON();
			fileName = "RadialMenu.json";
			btnSelector = "downloadJsonBtn";
		}
		const myFile = new Blob([fileContent!], { type: mime });
		window.URL = window.URL || window.webkitURL;

		const dlBtn: HTMLAnchorElement = this._elementRef.nativeElement.querySelector(`.${btnSelector}`) as HTMLAnchorElement;
		dlBtn.setAttribute("href", window.URL.createObjectURL(myFile));
		dlBtn.setAttribute("download", fileName);
		// dlBtn.click();
	}

}

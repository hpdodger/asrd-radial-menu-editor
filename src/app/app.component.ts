import { Component, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { MenuComponent } from "./components/menu/menu.component";
import { FormsModule } from "@angular/forms";
import { MenuStoreService } from "./services/menu-store-service";
import { MenuNode } from "./models/nodes/menu-node";
import { MenuRootNode } from "./models/nodes/menu-root-node";
import { TNullable } from "./models/t-nullable";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		MenuComponent,
		FormsModule
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss"
})
export class AppComponent {

	public title = "ASRD Radial menu editor";

	public menuRootNode: TNullable<MenuRootNode>;

	public safeYoutubeUrl: string = "";

	

	public activeTabIndex: number = 2;

	constructor(
		private _elementRef: ElementRef,		
		private _domSanitizer: DomSanitizer,
	) {

		this.safeYoutubeUrl = this._domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/7WEjaydZOYs") as string;

	}


	public addMenu(): void {
		
		if (!this.menuRootNode) {
			this.menuRootNode = new MenuRootNode({
				label: "RadialMenu",
				items: []
			});			
		}
		
		const newMenu: MenuNode = new MenuNode(null);		
		this.menuRootNode.addItem(newMenu);
		
		const ml = newMenu.label;
		newMenu.label = `${ml}${this.menuRootNode.items.length}`;
	}

	public removeMenu(index: number): void {
		this.menuRootNode?.removeItem(index);
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
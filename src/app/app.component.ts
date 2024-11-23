import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { MenuComponent } from "./components/menu/menu.component";
import { FormsModule } from "@angular/forms";
import { MenuStoreService } from "./services/menu-store-service";
import { MenuNode } from "./models/menu-node";
import { CBrMark } from "./models/c-br-mark";
import { CTabMark } from "./models/c-tab-mark";

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

	public rootMenu: MenuNode = new MenuNode(null);

	public menus: MenuNode[] = [];

	public result: string = "";

	public activeTabIndex: number = 0;

	constructor(private _menuService: MenuStoreService) {
		this.menus.push();
	}

	public setEditorView(): void {
		this.activeTabIndex = 0;
	}

	public setResultView(): void {
		this._generate();
		this.activeTabIndex = 1;
	}

	public addMenu(): void {
		const newMenu: MenuNode = new MenuNode(null);		
		this.menus.push(newMenu);
		const ml = newMenu.label;
		newMenu.label = `${ml}${this.menus.length}`;
	}

	public removeMenu(index: number): void {
		this.menus.splice(index, 1);
	}

	private _generate(): void {
		
		const leftBrace = `${CBrMark}{`;
		const rightBrace = `${CBrMark}}`;
		const menus = `${CBrMark}${CTabMark}${this.menus.map(menu => menu.serializeToASRD()).join(`${CBrMark}${CTabMark}`)}`;

		this.result = `"RadialMenu"${leftBrace}${menus}${rightBrace}`
			.replaceAll(CBrMark, "\n")
			.replaceAll(CTabMark, "\t");
		
	}

	private _isMenuValid(): boolean {
		if (this.menus.length === 0) return false;
		// TODO check uniq names
		return true;
	}
}

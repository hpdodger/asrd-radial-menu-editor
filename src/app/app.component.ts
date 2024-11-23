import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { IMenu } from "./models/i-menu";
import { MenuComponent } from "./components/menu/menu.component";
import { FormsModule } from "@angular/forms";

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
	title = "asrd-menu-editor";

	public menus: IMenu[] = [];

	public result: string = "";

	constructor() { 

		const rootMenuModel: IMenu[] = [];

		this.menus.push();

	
		
	}

	public addMenu(): void { 
		const t: IMenu = {
			label: "New menu",
			items: [

				{ label: "NorthWest", command: "NorthWest", text: "NorthWest", enabled: true },
				{ label: "North", command: "North", text: "North", enabled: true },
				{ label: "NorthEast", command: "NorthhEast", text: "NorthhEast", enabled: true },

				{ label: "West", command: "West", text: "West", enabled: true },
				{ label: "Center", command: "Center", text: "Center", enabled: true },
				{ label: "East", command: "East", text: "East", enabled: true },

				{ label: "SouthWest", command: "South", text: "South", enabled: true },
				{ label: "South", command: "South", text: "South", enabled: true },
				{ label: "SouthEast", command: "West", text: "West", enabled: true },


			]
		}

		this.menus.push(t);
	}

	public removeMenu(index: number): void { 
		this.menus.splice(index, 1);
	}

	public generate(): void {
		if (!this._isMenuValid()) return;

		this.result = `"RadialMenu"\r\n{`;

		this.menus.map((menu, index) => {
			
		})
	}

	private _isMenuValid(): boolean {
		if (this.menus.length === 0) return false;
		// TODO check uniq names
		return true;
	}
}

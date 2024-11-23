import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IMenu, IMenuItem, TMenuItemLabel } from "../../models/i-menu";
import { TNullable } from "../../models/t-nullable";
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-menu",
	standalone: true,
	imports: [
		MenuItemComponent,
		FormsModule
	],
	templateUrl: "./menu.component.html",
	styleUrl: "./menu.component.scss"
})
export class MenuComponent {
	@Input() public model: TNullable<IMenu> = null;
	@Input() public index: number = 0;

	@Output() public onRemoveMenu: EventEmitter<number> = new EventEmitter<number>();	

	public constructor() {
	}

	public getItemByLabel(label: TMenuItemLabel): TNullable<IMenuItem> {
		return this.model?.items.find(item => item.label === label);
	}

	
	public removeMenu(): void {
		this.onRemoveMenu.emit(this.index);
	}
}

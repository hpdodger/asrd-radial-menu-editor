import { Component, Input } from "@angular/core";
import { TNullable } from "../../models/t-nullable";
import { CommonModule } from "@angular/common";
import { MenuItemNode } from "../../models/menu-item-node";
import { FormsModule } from "@angular/forms";

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

}

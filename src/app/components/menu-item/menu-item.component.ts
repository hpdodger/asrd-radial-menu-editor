import { Component, Input } from '@angular/core';
import { TNullable } from "../../models/t-nullable";
import { IMenuItem } from "../../models/i-menu";
import { CommonModule } from "@angular/common";

@Component({
	selector: 'app-menu-item',
	standalone: true,
	imports: [
		CommonModule
	],
	templateUrl: './menu-item.component.html',
	styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

	@Input() public model: TNullable<IMenuItem> = null;

}

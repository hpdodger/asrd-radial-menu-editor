import { ApplicationRef, ChangeDetectorRef, Component } from "@angular/core";
import { MenuComponent } from "../menu/menu.component";
import { MenuRootNode } from "../../models/nodes/menu-root-node";
import { MenuNode } from "../../models/nodes/menu-node";
import { MenuStoreService } from "../../services/menu-store-service";
import { TNullable } from "../../models/t-nullable";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-editor",
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		MenuComponent,
	],
	templateUrl: "./editor.component.html",
	styleUrl: "./editor.component.scss"
})
export class EditorComponent {

	public menuRootNode: TNullable<MenuRootNode> = this._menuStoreService.menuRootNode;

	constructor(
		private _menuStoreService: MenuStoreService,
		private _cdr: ChangeDetectorRef
	) { }

	public loadFromFile(event: Event): void {
		try {
			const file = (event.target as HTMLInputElement).files![0];
			file.text().then((text) => {
				this._menuStoreService.menuRootNode = new MenuRootNode(JSON.parse(text));
				this.menuRootNode = this._menuStoreService.menuRootNode;
				// this._cdr.detectChanges();
				// this._cdr.markForCheck();
			});
		} catch (e) {
			if (e instanceof Error) window.alert(`Cannot load file: ${e.message}`);
			else window.alert(`Unknown error while parsng file`);
		}

	}

	public addMenu(): void {

		const newMenu: MenuNode = new MenuNode(null);
		this.menuRootNode!.addItem(newMenu);

		const ml = newMenu.label;
		newMenu.label = `${ml}${this.menuRootNode!.items.length}`;
	}

	public removeMenu(index: number): void {
		this.menuRootNode?.removeItem(index);
	}

}

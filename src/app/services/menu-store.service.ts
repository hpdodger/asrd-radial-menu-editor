import { Injectable } from "@angular/core";
import { TNullable } from "../models/t-nullable";
import { MenuRootNode } from "../models/nodes/menu-root-node";

@Injectable({
	providedIn: "root"
})
export class MenuStoreService {

	public get menuRootNode(): TNullable<MenuRootNode> { return this._menuRootNode; }
	public set menuRootNode(value: TNullable<MenuRootNode>) { this._menuRootNode = value; }

	private _menuRootNode: TNullable<MenuRootNode>;

	constructor() { 

		this._menuRootNode = new MenuRootNode({
			label: "RadialMenu",
			items: []
		});

	}

}
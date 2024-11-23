import { BaseNode } from "./base-node";
import { CBrMark } from "../c-br-mark";
import { CTabMark } from "../c-tab-mark";
import { IMenuDomainModel } from "./i-menu-domain-model";
import { MenuItemNode } from "./menu-item-node";
import { TNullable } from "../t-nullable";
import { IMenuItem } from "./i-menu-item";

export class MenuNode extends BaseNode<IMenuDomainModel, IMenuItem, MenuItemNode> {

	public override get items(): MenuItemNode[] { return this._items; }
	protected override _items: MenuItemNode[] = [];

	constructor(_domainModel: TNullable<IMenuDomainModel>) {

		super(_domainModel);

		if (!_domainModel) this._domainModel = {
			label: "Menu",
			items: [

				{ label: "NorthWest", command: "", text: "", enabled: true },
				{ label: "North", command: "", text: "", enabled: true },
				{ label: "NorthEast", command: "", text: "", enabled: true },

				{ label: "West", command: "", text: "", enabled: true },
				{ label: "Center", command: "", text: "", enabled: true },
				{ label: "East", command: "", text: "", enabled: true },

				{ label: "SouthWest", command: "", text: "", enabled: true },
				{ label: "South", command: "", text: "", enabled: true },
				{ label: "SouthEast", command: "", text: "", enabled: true },
			]
		}

		

		this._items = this._domainModel!.items.map(item => new MenuItemNode(item));
	}


	public override serializeToJSON(): TNullable<string> {
		return null;
	}

	public override serializeToASRD(): string {
		const label = `"${this.label}"`;
		const items = `${CBrMark}${CTabMark}${CTabMark}${this.items
			.map(item => item.serializeToASRD())
			.filter(item => item)
			.join(`${CBrMark}${CTabMark}${CTabMark}`)}`;
		
		const leftBrace = `${CBrMark}${CTabMark}{`;
		const rightBrace = `${CBrMark}${CTabMark}}`;

		const result: string = `${label}${leftBrace}${items}${rightBrace}`;
		return result;
	}
}

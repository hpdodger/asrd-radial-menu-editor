import { CBrMark } from "./c-br-mark";
import { CTabMark } from "./c-tab-mark";
import { IMenu } from "./i-menu";
import { ISerializable } from "./i-serializable";
import { MenuItemNode } from "./menu-item-node";
import { TNullable } from "./t-nullable";

export class MenuNode implements ISerializable {

	public label: string;

	public get items(): MenuItemNode[] { return this._items; }
	private _items: MenuItemNode[] = [];

	constructor(private _domainModel: TNullable<IMenu>) {

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

		this.label = this._domainModel!.label;

		this._items = this._domainModel!.items.map(item => new MenuItemNode(item));
	}


	public serializeToJSON(): TNullable<string> {
		return null;
	}

	public serializeToASRD(): string {
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

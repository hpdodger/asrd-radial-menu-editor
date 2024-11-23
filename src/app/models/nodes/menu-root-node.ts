import { CBrMark } from "../c-br-mark";
import { CTabMark } from "../c-tab-mark";
import { TNullable } from "../t-nullable";
import { BaseNode } from "./base-node";
import { IMenuDomainModel } from "./i-menu-domain-model";
import { IMenuRootNode } from "./i-menu-root-node";
import { MenuNode } from "./menu-node";



export class MenuRootNode extends BaseNode<IMenuRootNode, IMenuDomainModel, MenuNode> {

	constructor(_domainModel: TNullable<IMenuRootNode>) {
		super(_domainModel);
	}

	public override serializeToJSON(): TNullable<string> {
		return JSON.stringify(this._domainModel, undefined, 4);		
	}

	public override serializeToASRD(): TNullable<string> {
		try {
			const label = `"${this.label}"`;
			const leftBrace = `${CBrMark}{`;
			const rightBrace = `${CBrMark}}`;
			const menus = `${CBrMark}${CTabMark}${this.items.map(item => item.serializeToASRD()).join(`${CBrMark}${CTabMark}`)}`;

			const result = `${label}${leftBrace}${menus}${rightBrace}`
				.replaceAll(CBrMark, "\n")
				.replaceAll(CTabMark, "\t");

			return result;
		} catch (e) {
			if (e instanceof Error) return e.message;
			return "Unknown erorr, cant serialize to ASRD-format";
		}
	}
}
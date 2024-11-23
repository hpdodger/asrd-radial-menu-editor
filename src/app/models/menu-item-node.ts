import { CBrMark } from "./c-br-mark";
import { CTabMark } from "./c-tab-mark";
import { IMenuItem } from "./i-menu-item";
import { ISerializable } from "./i-serializable";
import { TMenuItemLabel } from "./t-menu-item-label";
import { TNullable } from "./t-nullable";

export class MenuItemNode implements ISerializable {

	public get label(): string { return this._domainModel.label; }
	// public set label(value: TMenuItemLabel) { this._domainModel.label = value; }

	public get command(): string { return this._domainModel.command; }
	public set command(value: string) { this._domainModel.command = value; }

	public get text(): string { return this._domainModel.text; }
	public set text(value: string) { this._domainModel.text = value; }

	public get enabled(): boolean { return this._domainModel.enabled; }
	public set enabled(value: boolean) { this._domainModel.enabled = value; }

	

	constructor(private _domainModel: IMenuItem) {

	}

	public serializeToJSON(): TNullable<string> {
		return null;
	}


	public serializeToASRD(): TNullable<string> {
		
		if (!this.enabled) return null;

		const label = `"${this.label}"` as TMenuItemLabel;
		const command = `${CTabMark}"${this.command}"`;
		const text = `${CTabMark}${CTabMark}"${this.text}"`;

		const leftBrace = `${CBrMark}${CTabMark}${CTabMark}{`;
		const rightBrace = `${CBrMark}${CTabMark}${CTabMark}}`;
		const commandLabel = `${CBrMark}${CTabMark}${CTabMark}${CTabMark}"command"`;
		const textLabel = `${CBrMark}${CTabMark}${CTabMark}${CTabMark}"text"`;

		const result: string = `${label}${leftBrace}${commandLabel}${command}${textLabel}${text}${rightBrace}`;
		return result;
	} 

}
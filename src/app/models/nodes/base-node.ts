import { IBaseDomainNode } from "./i-base-domain-node";
import { ISerializable } from "../i-serializable";
import { TNullable } from "../t-nullable";
import { IHasDomainModel } from "../i-has-domain-model";

export abstract class BaseNode<
	TDomainModel extends IBaseDomainNode<TItemDomainModel>, 
	TItemDomainModel, 
	TItemNodeModel extends IHasDomainModel> implements ISerializable, IHasDomainModel {

	public get label(): string { return this._domainModel!.label; }
	public set label(value: string) { this._domainModel!.label = value; }
	public get items(): TItemNodeModel[] { return this._items; }
	protected _items: TItemNodeModel[] = [];

	constructor(protected _domainModel: TNullable<TDomainModel>) { }

	public getDomainModel(): IBaseDomainNode<any> {
		return this._domainModel!;
	}

	public addItem(item: TItemNodeModel): void { 
		this._domainModel?.items.push(item.getDomainModel()!);
		this._items.push(item); 
	}
	public removeItem(itemIndex: number): void { 		
		this._domainModel?.items.splice(itemIndex, 1);
		this._items.splice(itemIndex, 1);
	}

	public serializeToASRD(): TNullable<string> {
		throw new Error("Method not implemented.");
	}
	public serializeToJSON(): TNullable<string> {
		throw new Error("Method not implemented.");
	}

}
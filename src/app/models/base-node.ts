import { ISerializable } from "./i-serializable";
import { TNullable } from "./t-nullable";

export abstract class BaseNode<TDomainModel> implements ISerializable {

	public label: string;

	constructor(protected _domainModel: TNullable<TDomainModel>) { }

	public serializeToASRD(): TNullable<string> {
		throw new Error("Method not implemented.");
	}
	public serializeToJSON(): TNullable<string> {
		throw new Error("Method not implemented.");
	}

}
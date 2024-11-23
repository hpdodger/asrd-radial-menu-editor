import { TNullable } from "./t-nullable";

export interface ISerializable {
	serializeToASRD(): TNullable<string>;
	serializeToJSON(): TNullable<string>;
}
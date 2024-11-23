import { IBaseDomainNode } from "./i-base-domain-node";
import { IMenuItem } from "./i-menu-item";

export interface IMenuDomainModel extends IBaseDomainNode<IMenuItem> {	
	items: IMenuItem[];
}

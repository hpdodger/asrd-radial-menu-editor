import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from "./components/about/about.component";
import { ResultComponent } from "./components/result/result.component";
import { EditorComponent } from "./components/editor/editor.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		CommonModule,
		// RouterOutlet,
		FormsModule,
		
		AboutComponent,
		ResultComponent,
		EditorComponent
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss"
})
export class AppComponent {

	public title = "ASRD Radial menu editor";	

	public activeTabIndex: number = 2;

	constructor() {	

	}
	

}

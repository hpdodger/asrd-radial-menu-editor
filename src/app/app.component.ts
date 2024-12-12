import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from "./components/about/about.component";
import { ResultComponent } from "./components/result/result.component";
import { EditorComponent } from "./components/editor/editor.component";
import { LocalizationService } from "./services/localization/localization.service";
import { ELanguage } from "./services/localization/e-language";
import { TLanguageId } from "./services/localization/t-language-id";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		CommonModule,
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

	constructor(public readonly localizationService: LocalizationService) {	

	}
	
	public getLanguages(): TLanguageId[] {
		return this.localizationService.getLanguages();
	}

}

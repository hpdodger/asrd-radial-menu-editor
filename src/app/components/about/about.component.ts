import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { LocalizationService } from "../../services/localization/localization.service";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-about",
	standalone: true,
	imports: [
		CommonModule
	],
	templateUrl: "./about.component.html",
	styleUrl: "./about.component.scss"
})
export class AboutComponent {

	public safeYoutubeUrl: string = "";

	constructor(
		public readonly localizationService: LocalizationService,
		private _domSanitizer: DomSanitizer
	) {

		
		
		this.safeYoutubeUrl = this._domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/7WEjaydZOYs") as string;

	}

}

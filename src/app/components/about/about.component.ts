import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
	selector: "app-about",
	standalone: true,
	imports: [],
	templateUrl: "./about.component.html",
	styleUrl: "./about.component.scss"
})
export class AboutComponent {

	public safeYoutubeUrl: string = "";

	constructor(private _domSanitizer: DomSanitizer) {

		
		
		this.safeYoutubeUrl = this._domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/7WEjaydZOYs") as string;

	}

}

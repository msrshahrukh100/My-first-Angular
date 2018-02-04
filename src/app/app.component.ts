import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	diaryEntries = [{text: "# Shddahrukh"}]


	addEntry(data:{text:string}){
		this.diaryEntries.push({text: data.text})
	}
}

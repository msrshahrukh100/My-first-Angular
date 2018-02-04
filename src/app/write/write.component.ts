import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

	@Output() addToDisplay = new EventEmitter<{text: string}>()
	diaryText = ""
  constructor() { }

  ngOnInit() {
  }

  onEntryAdded(){
  	this.addToDisplay.emit({text: this.diaryText})
  }
}

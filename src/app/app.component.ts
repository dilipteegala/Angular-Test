import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
 

@Component({
  selector: 'app-root',
  template: `
  	<h2 [style.color]="'orange'">welcome  {{ciya}}</h2>
		<h2 [ngStyle]="higlight"> hello {{ciya}}</h2>
		<h3>{{ note }} //ts file calling from this.note</h3>
		
		<app-customers></app-customers>

		`,
  styles:[`	
  `]
})
export class AppComponent {
		note:string;
    public ciya="ciya";
  
  	public higlight = {
  	color:"blue",
  	fontStyle:"italic",
  	text:"center",
			}
	pageTitle: string ='hiang';
	title = 'angtest';

  ngOnInit() {
    // We call a service that gets us the data
    this.note = 'Hello World using Data binding';
  }
}

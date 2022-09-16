import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	constructor() {}

	item: any = 'test';

	ngOnInit(): void {
		console.log('test');
		const test = 'test123';
		const test2 = 'test2';
	}
}

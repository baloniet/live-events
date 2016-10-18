import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'navbar',
	templateUrl: './app/navbar/navbar.component.html'
})

export class NavbarComponent implements OnInit {

	ngOnInit() { }

	constructor(private router: Router){

	}
	onSelect(link) {
    	this.router.navigate(link);
    }
}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService} from '../../shared/data/data.service';
//import {ValuesPipe} from '../../shared/valuesPipe'

@Component({
	selector: 'genlist',
	templateUrl: './app/ui/genlist/genlist.component.html',
	providers: [DataService]
})

export class GenlistComponent implements OnInit {

	private id;

	private data = [];

	constructor(
    	private route: ActivatedRoute,
    	private router: Router,
		private _service: DataService
  	) {}
	
	ngOnInit() { 
		console.log(this.id);
		this.route.params
      		      .subscribe(
						res => 
						 (
							 this.id=res,this.
							 selectData(this.id)
						 )						
					);
	}

	selectData(id){
		switch (id.id) {
			case "post":
				this.data=this._service.getPosts(); //tole je seveda http klic 
				break;
		
			default:
				this.data=[];
				break;
		}
	}

	
}
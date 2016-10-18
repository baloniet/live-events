import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../shared/data/data.service';
import { LocalLabels } from '../../shared/strings/sl_lables';

@Component({
	selector: 'genlist',
	templateUrl: './app/ui/genlist/genlist.component.html',
	providers: [DataService, LocalLabels]
})

export class GenlistComponent implements OnInit {

	private id;

	private data = [];

	private title;
	private tableLabels;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private _service: DataService,
		private _labels: LocalLabels
	) {	}

	ngOnInit() {

		this.route.params
			.subscribe(
			res =>
				(
					this.id = res, this.
						selectData(this.id)
				)
			);
	}

	selectData(id) {
		switch (id.id) {
			case "post":
				this.data = this._service.getPosts(); //tole je seveda http klic 
				break;

			default:
				this.data = [];
				break;
		}
		
		this.title = this._labels.labels.components.genlist.title;
		this.tableLabels = this._labels.labels.components.genlist[this.id.id];
	}


}
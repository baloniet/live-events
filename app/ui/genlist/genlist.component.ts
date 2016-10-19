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
	) { }

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
		this.data = this._service.getData(id.id); //tole je seveda http klic in vsi ti klici bi bili lahko parametrski in bi se service ukvarjal s switchom

		this.title = this._labels.labels.components.genlist.title;
		this.tableLabels = this._labels.labels.components.genlist[this.id.id];
	}

	newRecord(link){
		this.router.navigate([link]);
	}


}
import { TestBed, inject } from '@angular/core/testing';

import { GenlistComponent } from './genlist.component';

describe('a genlist component', () => {
	let component: GenlistComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				GenlistComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([GenlistComponent], (GenlistComponent) => {
		component = GenlistComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
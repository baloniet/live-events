import { TestBed, inject } from '@angular/core/testing';

import { ProcbarComponent } from './procbar.component';

describe('a procbar component', () => {
	let component: ProcbarComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProcbarComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProcbarComponent], (ProcbarComponent) => {
		component = ProcbarComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
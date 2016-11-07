import { TestBed, inject } from '@angular/core/testing';

import { AddressComponent } from './address.component';

describe('a address component', () => {
	let component: AddressComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AddressComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AddressComponent], (AddressComponent) => {
		component = AddressComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
import { TestBed } from '@angular/core/testing';

import { ComponentesService } from './componentes.service';

describe('ComponentesService', () => {
    let service: ComponentesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ComponentesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

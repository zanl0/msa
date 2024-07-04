import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponentesComponent } from './modal-componentes.component';

describe('ModalComponentesComponent', () => {
    let component: ModalComponentesComponent;
    let fixture: ComponentFixture<ModalComponentesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ModalComponentesComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ModalComponentesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

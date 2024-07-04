import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsuariosComponent } from './modal-usuarios.component';

describe('ModalUsuariosComponent', () => {
    let component: ModalUsuariosComponent;
    let fixture: ComponentFixture<ModalUsuariosComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ModalUsuariosComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ModalUsuariosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

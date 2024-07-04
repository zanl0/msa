import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPedidosComponent } from './modal-pedidos.component';

describe('ModalPedidosComponent', () => {
    let component: ModalPedidosComponent;
    let fixture: ComponentFixture<ModalPedidosComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ModalPedidosComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ModalPedidosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

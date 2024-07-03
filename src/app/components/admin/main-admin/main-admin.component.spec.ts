import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdminComponent } from './main-admin.component';

describe('MainAdminComponent', () => {
    let component: MainAdminComponent;
    let fixture: ComponentFixture<MainAdminComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MainAdminComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MainAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

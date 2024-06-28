import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-modal-content',
    standalone: true,
    imports: [],
    templateUrl: './modal-content.component.html',
    styleUrl: './modal-content.component.scss',
})
export class ModalContentComponent {
    @Input() title: string = '';
    @Input() image: string = '';
}

import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-modal-image',
    standalone: true,
    imports: [],
    templateUrl: './modal-image.component.html',
    styleUrl: './modal-image.component.scss',
})
export class ModalImageComponent {
    @Input() title: string = 'componente';
    @Input() image: string = 'https://placehold.co/250x250';
}

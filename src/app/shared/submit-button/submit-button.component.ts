import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [],
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.scss',
})
export class SubmitButtonComponent {
  @Input() buttonText: string = 'Default Text';
  @Input() disabled: boolean = false;
}

import {Component, Input} from '@angular/core'

@Component({
    selector: 'app-custom-modal',
    templateUrl: './custom-modal.component.html',
  })
  export class CustomModalComponent {
    @Input() visibility: boolean = true
    @Input() width: string = '40vw'
  }
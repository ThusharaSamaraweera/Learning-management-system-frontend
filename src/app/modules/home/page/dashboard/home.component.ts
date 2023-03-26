import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    private translocoService: TranslocoService,
  ) {}
  images: any = [
    '../../../../../assets/images/img1.jpg',
    '../../../../../assets/images/img2.jpg'
  ]
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 2,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 2,
    },
  ];
}

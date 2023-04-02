import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  signInModalVisibility: boolean = false
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
  constructor(
  ) {}

  toggleSignInModal(visibility: boolean){
    this.signInModalVisibility = visibility
  }
}

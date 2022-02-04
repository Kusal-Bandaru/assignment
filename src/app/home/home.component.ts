import { Component, OnInit } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public imageSources = [
    { path: '../../assets/image2.jpg' },
    { path: '../../assets/image1.jpg' },
    { path: 'http://ak2.picdn.net/shutterstock/videos/18324082/thumb/3.jpg' },
    {
      path: 'https://ak8.picdn.net/shutterstock/videos/3159418/thumb/7.jpg?i10c=img.resize(height:160)',
    },
    { path: '../../assets/image1_resized.jpg' },
    { path: 'https://ak8.picdn.net/shutterstock/videos/11062748/thumb/1.jpg' },
    { path: 'https://ak1.picdn.net/shutterstock/videos/8221801/thumb/1.jpg' },
  ];

  constructor() {}

  public config: IvyCarouselModule = {
    animation: true,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768,
  };

  ngOnInit(): void {}
}

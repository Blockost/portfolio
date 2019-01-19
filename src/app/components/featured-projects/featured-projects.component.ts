import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Audio Visualization',
      img: '/assets/img/featured-projects/sudoku-game.png',
      url: 'https://sudoku.blockost.com'
    },
    {
      name: 'Sudoku Game',
      img: '/assets/img/featured-projects/sudoku-game.png',
      url: 'https://sudoku.blockost.com'
    },
    {
      name: 'Url Shortener',
      img: '/assets/img/featured-projects/url-shortener.png',
      url: 'https://sudoku.blockost.com'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

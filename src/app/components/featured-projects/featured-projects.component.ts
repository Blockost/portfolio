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
      description:
        "Simple sound spectrum visualizer using Three.js. Note: there's a pretty cool music playing!",
      img: '/assets/img/featured-projects/sudoku-game.png',
      url: 'https://audio-visualization.blockost.com/',
      repoUrl: 'https://github.com/Blockost/audio-visualization'
    },
    {
      name: 'Sudoku Game',
      description:
        'In-browser single-player Sudoku game board generator and solver with random generation using recursion and backtracking',
      img: '/assets/img/featured-projects/sudoku-game.png',
      url: 'https://sudoku.blockost.com',
      repoUrl: 'https://github.com/Blockost/sudoku'
    },
    {
      name: 'Url Shortener',
      description:
        'Shorten long, unfriendly links in a matter of seconds using this simple link management platform.',
      img: '/assets/img/featured-projects/url-shortener.png',
      url: undefined,
      repoUrl: 'https://github.com/Blockost/url-shortener'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

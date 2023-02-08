import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const nav = document.querySelector('nav')!;

    window.addEventListener('scroll', (): void => {
      if (window.pageYOffset > 20) {
        nav.classList.add('bg-light', 'shadow');
      } else {
        nav.classList.remove('bg-light', 'shadow');
      }
    });

  }

}


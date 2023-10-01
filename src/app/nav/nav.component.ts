import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.handleScroll();
  }

  handleScroll() {
    const header = this.el.nativeElement.querySelector('.header');
    const navbar = this.el.nativeElement.querySelector('.navbar');
    const headerBottom = this.el.nativeElement.querySelector('.header-bottom');
    const body = document.body;

    if (body) { // Check if body exists
      this.renderer.listen('window', 'scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > headerBottom.offsetTop) {
          this.renderer.addClass(navbar, 'fixed-navbar');
          body.style.marginTop = `${navbar.offsetHeight}px`;
        } else {
          this.renderer.removeClass(navbar, 'fixed-navbar');
          body.style.marginTop = '0';
        }
      });
    }
  }
}

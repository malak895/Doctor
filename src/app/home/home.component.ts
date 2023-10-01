import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selected: Data = {};


  constructor() { }

  ngOnInit(): void {
    // Vous pouvez placer votre code JavaScript ici
    this.setupNavbar();
    this.setupHeader();
  }

  setupNavbar() {
    const navbar = document.querySelector<HTMLElement>("[data-navbar]");
    const navbarLinks = document.querySelectorAll<HTMLElement>("[data-nav-link]");
    const navbarToggler = document.querySelector<HTMLElement>("[data-nav-toggler]");

    if (navbar && navbarLinks && navbarToggler) {
      const toggleNav = () => {
        navbar.classList.toggle("active");
        navbarToggler.classList.toggle("active");
      };

      this.addEventOnElem(navbarToggler, "click", toggleNav);

      const closeNav = () => {
        navbar.classList.remove("active");
        navbarToggler.classList.remove("active");
      };

      this.addEventOnElem(navbarLinks, "click", closeNav);
    }
  }

  setupHeader() {
    const header = document.querySelector<HTMLElement>("[data-header]");
    const backTopBtn = document.querySelector<HTMLElement>("[data-back-top-btn]");

    if (header && backTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 100) {
          header.classList.add("active");
          backTopBtn.classList.add("active");
        } else {
          header.classList.remove("active");
          backTopBtn.classList.remove("active");
        }
      });
    }
  }

  addEventOnElem(elem: Element | NodeListOf<Element>, type: string, callback: EventListenerOrEventListenerObject) {
    if (elem instanceof NodeList) {
      for (let i = 0; i < elem.length; i++) {
        (elem[i] as Element).addEventListener(type, callback);
      }
    } else if (elem) {
      (elem as Element).addEventListener(type, callback);
    }
  }
}

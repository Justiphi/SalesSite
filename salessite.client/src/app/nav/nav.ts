import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  path: string;
  label: string;
  exact: boolean;
}

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected readonly links: NavLink[] = [
    { path: '/', label: 'Home', exact: true },
    { path: '/products', label: 'Products', exact: false },
    { path: '/about', label: 'About', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // If the user scrolls past 50px, set isScrolled to true
    this.isScrolled = window.scrollY > 50;
  }

  protected readonly menuOpen = signal(false);

  protected toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu() {
    this.menuOpen.set(false);
  }
}

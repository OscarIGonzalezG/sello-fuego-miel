import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((open) => {
      const newState = !open;
      document.body.classList.toggle('menu-open', newState);
      return newState;
    });
  }
}

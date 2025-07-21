import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn.html'
})
export class Btn implements OnInit {
  @Input() typeBtn: 'submit' | 'button' | 'reset' = 'button';
  @Input() color: 'success' | 'primary' | 'danger' | 'light' = 'primary';

  constructor() { }

  mapColors = {
    success: {
      'bg-success-700': true,
      'hover:bg-success-800': true,
      'focus:ring-success-300': true,
      'text-white': true,
    },
    primary: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true,
      'text-white': true,
    },
    danger: {
      'bg-red-700': true,
      'hover:bg-red-800': true,
      'focus:ring-red-300': true,
      'text-white': true,
    },
    light: {
      'bg-gray-200': true,
      'hover:bg-gray-300': true,
      'focus:ring-gray-300': true,
      'text-gray-700': true,
    }
  }

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  get colors() {
    const colors = this.mapColors[this.color];
    if (colors) {
      return colors
    }
    return {}
  }
}

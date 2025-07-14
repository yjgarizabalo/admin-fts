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
  @Input() color = 'primary';

  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  get colors() {
    return {
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-red-700': this.color === 'red',
      'hover:bg-red-800': this.color === 'red',
      'focus:ring-red-300': this.color === 'red',
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Navbar } from "../../components/navbar/navbar";
import { ScrollingModule } from '@angular/cdk/scrolling'
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-scroll',
  imports: [Navbar, CommonModule, ScrollingModule],
  templateUrl: './scroll.html'
})

export class Scroll implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe(data => {
      this.products = data;
    });
  }
}

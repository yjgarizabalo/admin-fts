import { Component, OnInit } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Navbar } from "../../components/navbar/navbar";
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-table',
  imports: [CdkTableModule, Navbar, CommonModule],
  templateUrl: './table.html'
})
export class Table implements OnInit {
  products: Product[] = [];
  columns: string[] = ['N', 'title', 'price', 'images'];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe(data => {
      this.products = data;
    });
}
}

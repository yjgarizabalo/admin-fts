import { Component, OnInit } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Navbar } from "../../components/navbar/navbar";
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { DataSourceProducts } from './data-sources';
import { debounceTime } from 'rxjs';



@Component({
  selector: 'app-table',
  imports: [CdkTableModule, Navbar, CommonModule, ReactiveFormsModule],
  templateUrl: './table.html'
})
export class Table implements OnInit {
  dataSource = new DataSourceProducts();
  columns: string[] = ['N', 'title', 'price', 'images', 'actions'];
  total = 0;
  input = new FormControl('', { nonNullable: true });

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe(data => {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal();
    });

    this.input.valueChanges
    .pipe(
      debounceTime(500),
      // distinctUntilChanged()
    ).subscribe(value => {
      this.dataSource.find(value);

    });
  }





  update(product: Product) {
    this.dataSource.update(product, { price: 200 });

  }
}

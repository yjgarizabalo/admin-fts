
import {  DataSource } from '@angular/cdk/collections'
import { Product } from '../../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourceProducts extends DataSource<Product> {

  data= new BehaviorSubject<Product[]>([]);
  orginalData: Product[] = [];

  connect(): Observable<Product[]> {
    return this.data;
  }

  init(products: Product[]) {
    this.orginalData = products;
    this.data.next(products);
  }

  getTotal() {
    const products = this.data.getValue();
    return products.map(item => item.price).reduce((preci, total) => preci + total, 0);
  }

  update(product: Product, changes: Partial<Product>) {
    const products = this.data.getValue();
    const index = products.findIndex(item => item.id === product.id);
    if(index !== -1) {
      products[index] = { ...products[index], ...changes };
      this.data.next(products);
    }
  }

  find(query: string) {
    const newProducts = this.orginalData
    .filter(item => {
      const word = `${item.id} ${item.title} ${item.price}`;
      return word.toLowerCase().includes(query.toLowerCase());
    });
    this.data.next(newProducts);
  }

  disconnect() {
    // this.data.complete();
  }
}

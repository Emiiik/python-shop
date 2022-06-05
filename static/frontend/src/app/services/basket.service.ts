import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  public changeEvent = new EventEmitter();
  products: any[] = []

  constructor() {
  }

  addProduct(product: any) {
    this.products.push(product);
    this.changeEvent.emit();
  }

  submitOrder() {
  }

  getProducts() {
    return this.products
  }

  removeProduct(index: number) {
    this.products.splice(index,1);
    this.changeEvent.emit();
  }

  getSum() {
    return this.products.reduce((partialSum, a) => partialSum + a.attributes.price, 0);
  }

}

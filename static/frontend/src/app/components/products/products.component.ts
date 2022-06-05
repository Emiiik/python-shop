import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;

  constructor(private http: HttpClient, private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.http.get<{ data: any }>('http://localhost:8000/products').pipe().subscribe((result) => {
      return this.products = result.data;
    })
  }

  addToBasket(product: any) {
    this.basketService.addProduct(product)
  }

}

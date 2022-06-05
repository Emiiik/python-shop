import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  @Output() orderSubmit = new EventEmitter()

  basket: any[] = []
  sum: number = 0;

  constructor(private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.basketService.changeEvent.subscribe(() => {
      this.basket = this.basketService.products
      this.sum = this.basketService.getSum()
    })
  }

  removeFromBasket(basketItem: any) {
    this.basketService.removeProduct(basketItem)
  }

  order() {
    this.orderSubmit.emit()
  }
}

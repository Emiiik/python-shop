import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private http: HttpClient ) {
    http.get('http://localhost:8000/products').subscribe((result) => console.log(result))
  }
}

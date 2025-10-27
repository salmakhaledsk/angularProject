import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from "./components/order/order.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, OrderComponent, FooterComponent, OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProject';
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './home/home-module';
import { ReservationModule } from './reservation/reservation-module';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeModule, ReservationModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('hotel-app');
}

import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation';
import { Reservation } from '../models/reservation';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { HomeModule } from '../home/home-module';

@Component({
  selector: 'app-reservation-list',
  imports: [CommonModule, RouterLink, RouterModule, HomeModule],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css',
})
export class ReservationList implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
  }
}

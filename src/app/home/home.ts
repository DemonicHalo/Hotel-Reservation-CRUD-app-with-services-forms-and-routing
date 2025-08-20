import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

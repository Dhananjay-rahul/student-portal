import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from 'src/app/pages/list/list.component';
import { AluminiListComponent } from 'src/app/pages/alumini-list/alumini-list.component';
import { EventsComponent } from '../events/events.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListComponent, AluminiListComponent, EventsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}

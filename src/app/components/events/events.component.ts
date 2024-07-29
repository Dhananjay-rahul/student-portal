import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  events: any[] = [];
  constructor(private api: ApiService, private loader: LoaderService) {}

  ngAfterViewInit() {
    this.loader.showLoader(true);
    this.api.getEvents().subscribe(
      (res: any[]) => {
        this.events = res;
        this.loader.showLoader(false);
      },
      (err: any) => {
        this.loader.showLoader(false);
      }
    );
  }
}

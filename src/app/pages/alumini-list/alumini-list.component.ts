import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-alumini-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alumini-list.component.html',
  styleUrls: ['./alumini-list.component.css'],
})
export class AluminiListComponent {
  alumnies: any[] = [];
  constructor(private api: ApiService, private loader: LoaderService) {}

  ngAfterViewInit() {
    this.loader.showLoader(true);
    this.api.getAlumnies().subscribe(
      (res: any[]) => {
        this.alumnies = res;
        this.loader.showLoader(false);
      },
      (err: any) => {
        this.loader.showLoader(false);
      }
    );
  }
}

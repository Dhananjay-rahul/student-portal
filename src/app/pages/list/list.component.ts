import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { RouterModule } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  courses: any[] = [];
  constructor(private api: ApiService, private loader: LoaderService) {}

  ngAfterViewInit() {
    this.loader.showLoader(true);
    this.api.getCourses().subscribe(
      (res: any[]) => {
        this.courses = res;
        this.loader.showLoader(false);
      },
      (err: any) => {
        this.loader.showLoader(false);
      }
    );
  }
}

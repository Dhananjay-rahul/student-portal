import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from 'src/app/pages/list/list.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {}

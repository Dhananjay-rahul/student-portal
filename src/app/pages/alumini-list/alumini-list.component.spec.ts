import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiListComponent } from './alumini-list.component';

describe('AluminiListComponent', () => {
  let component: AluminiListComponent;
  let fixture: ComponentFixture<AluminiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AluminiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AluminiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

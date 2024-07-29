import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public loading: boolean = false;
  private parentId = new BehaviorSubject<any>({});
  parentId$ = this.parentId.asObservable();

  public loader = new BehaviorSubject<boolean>(false);
  loader$ = this.loader.asObservable();

  showLoader(status: boolean) {
    this.loading = status;
    this.loader.next(status);
  }

  isLoading() {
    return this.loading ?? false;
  }

  constructor() {}
}

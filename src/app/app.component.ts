import { ChangeDetectorRef, Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aluminiSystem';
  isLoading: boolean = false;
  constructor(
    public loader: LoaderService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    this.loader.showLoader(true);
    this.router.events.subscribe((e: any) => {
      this.navigationInterceptor(e);
    });
  }

  ngOnChanges() {}

  ngOnInit() {
    this.cd.markForCheck();
    this.isLoading = false;
  }

  ngAfterContentChecked() {
    this.cd.detectChanges();
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loader.showLoader(true);
    }
    if (event instanceof NavigationEnd) {
      this.loader.showLoader(false);
    }

    // Set isLoading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loader.showLoader(false);
    }
    if (event instanceof NavigationError) {
      this.loader.showLoader(false);
    }
  }
}

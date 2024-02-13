import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './services/loader/loader.service';
import { ComponentsModule } from './components/components.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ComponentsModule]
})
export class AppComponent implements OnInit{
  title = 'storeFront';
  isLoading: boolean = true;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.loading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

}

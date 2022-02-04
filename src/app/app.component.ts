import { Component } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gator-desk';
  constructor(faConfig: FaConfig) {
    faConfig.fixedWidth = true;
  }
}

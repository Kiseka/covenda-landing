import { Component } from '@angular/core';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.css'
})
export class HeaderSectionComponent {
  faBars = faBars;
  faClose = faClose;
  drawerOpen=false;
}

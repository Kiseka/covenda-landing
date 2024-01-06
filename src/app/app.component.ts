import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FeaturesSectionComponent } from "./landing/features-section/features-section.component";
import { FrameworksSectionComponent } from "./landing/frameworks-section/frameworks-section.component";
import { HowCovendaWorksSectionComponent } from "./landing/how-covenda-works-section/how-covenda-works-section.component";
import { FooterSectionComponent } from "./landing/footer-section/footer-section.component";
import { HeaderSectionComponent } from "./landing/header-section/header-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, FeaturesSectionComponent, FrameworksSectionComponent, HowCovendaWorksSectionComponent, FooterSectionComponent, HeaderSectionComponent]
})
export class AppComponent {
  title = 'covenda-landing';
}

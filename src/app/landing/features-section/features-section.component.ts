import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

interface FeatureData {
  title: string
  topText: string;
  bottomText: string;
  border: string;
  dropDownOpen: boolean;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.css'
})
export class FeaturesSectionComponent {
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  featuresData: FeatureData[] = [
    {
      title: "Privacy & Security Framework",
      border: "hover:border-b-flame-600",
      dropDownOpen: false,
      topText: "Our fortified control capability for systems and organizations adapts to different business environments.",
      bottomText: "We assembled technical and non-technical protections to meet legal, regulatory, and policy requirements with countermeasures to strengthen security and privacy baselines."
    },
    {
      title: "AI-Powered Threat Modelling",
      border: "hover:border-b-blue-600",
      dropDownOpen: false,
      topText: "Our fortified control capability for systems and organizations adapts to different business environments.",
      bottomText: "We probe and trigger vulnerabilities to simulate privacy and security threats to organizations and systems."
    },
    {
      title: "ML Powered Risk Prediction",
      border: "hover:border-b-green-600",
      dropDownOpen: false,
      topText: "Our patent-pending method predicts risks to enterprises and consumers from cyberthreats and attacks.",
      bottomText: "We incorporate multiple threat simulations, factoring in the controls organizations and systems implement to determine risk and forecast the privacy and security landscape."
    },
    {
      title: "Intuitive Security & Privacy Response",
      border: "hover:border-b-yellow-300",
      dropDownOpen: false,
      topText: "Our system coordinates tasks between various people and tools in your organization within a single platform to observe, understand, and prevent future incidents.",
      bottomText: "We built easy-to-use workflows that consider control maturity to improve safeguards, ensure they operate effectively, monitor risk levels, and generate efficiencies."
    },
    {
      title: "Security Consensus Protocol",
      border: "hover:border-b-blue-600",
      dropDownOpen: false,
      topText: "We map responsibility assignments and performance of all security and privacy measures as records on a secure distributed ledger.",
      bottomText: "Auditors and Examiners can verify and validate if selected security and privacy controls are operating as intended, satisfy regulatory requirements, and adequately manage risk."
    }
  ];

  selectedFeature: FeatureData = this.featuresData[0];

  onFeatureHover(feature: FeatureData): void {
    this.selectedFeature = feature;
  }

  clearSelectedFeature(): void {
    this.selectedFeature = this.featuresData[0];
  }
}

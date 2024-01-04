import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-frameworks-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frameworks-section.component.html',
  styleUrl: './frameworks-section.component.css'
})
export class FrameworksSectionComponent {
  frameworks: string[] = [
    "Business drivers to manage and reduce cybersecurity risk and improve Critical Infrastructure Protection (cip)",
    "Cyber Threat Framework improves business decisions with Covenda threat intelligence and adversary trends.",
    "Information Security Management System (ISMS).",
    "Payment Card Industry Data Security Standard",
    "Security and Privacy Controls for Information System and Organizations",
    "Managing customer data for security, availability, processing integrity, confidentiality, and privacy.",
    "General Data Protection Regulation for privacy in the European Union and European Economic Area.",
    "Data Protection Regulation by the Nigerian Data Protection Bureau.",
    "Improving Privacy through Enterprise Risk Management.",
    "Health Insurance Portability and Accountability Act for the protection for the protection of health Information.",
    "Health Insurance Portability and Accountability Act for the protection for the protection of health Information.",
    "Information technology service management (ITSM)."
  ]

  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactInfo = {
    name: 'Beau Matsobane Monese',
    title: 'Software Engineer',
    email: 'beaumonesem@gmail.com',
    phone: '+27677309589',
    location: 'Centurion, Pretoria',
    linkedin: 'www.linkedin.com/in/beau-monese-3888y4166'
  };
}

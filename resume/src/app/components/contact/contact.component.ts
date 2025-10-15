import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  name = '';
  email = '';
  message = '';

  submitForm() {
    console.log('Contact form submitted:', { name: this.name, email: this.email, message: this.message });
    alert('Thank you for reaching out, ' + this.name + '! Your message has been received.');
    this.name = this.email = this.message = '';
  }

}

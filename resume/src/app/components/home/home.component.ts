import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  profile = {
    name: 'Beau Matsobane Monese',
    title: 'Software Engineer',
    description: [
      'I am a logical and analytical thinker with a strong passion for advancing my engineering career and mastering new technologies. As an aspiring Full-Stack Engineer, I bring expertise in hardware design, firmware, backend, and frontend development, along with project management (Jira, Trello, SCRUM, Agile) and technical problem-solving.',
      'Proficient in tools such as Visual Studio, VS Code, and Docker, I have extensive experience with relational databases (MSSQL, MySQL, SQLite) and non-relational databases (Firebase). My skills also include requirement gathering, documentation, UML design, and white-box/black-box testing.',
      'I excel at communicating complex technical concepts to diverse stakeholders and am eager to contribute to innovative projects in a dynamic, growth-oriented environment.'
    ]
  };
}

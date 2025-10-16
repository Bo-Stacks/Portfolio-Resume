import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  // projects = [
  //   { name: 'City of Joburg Management', desc: 'Emergency forms & filing web app', url: 'https://verisec.dedicated.co.za/cojweb' },
  //   { name: 'People Track', desc: 'HR system with employee tracking', url: 'https://people-track-c20d1.web.app/' }
  // ];

  projects = [
    {
      name: 'COJ Management System',
      period: '09/2023 – 12/2023',
      description: 'City of Johannesburg Management Systems is web application that handles COJ Emergency fire Safety forms and filing system.',
      link: 'https://verisec.dedicated.co.za/cojweb'
    },
    {
      name: 'People Track',
      period: '01/2022 – 09/2022',
      description: 'People Track it\'s an HR Systems that helps organization internally were employees book, view status, calculate leave days and employee assets.',
      link: 'https://people-track-c20d1.web.app/'
    },
    {
      name: 'Kiosk Application',
      period: '2023 – present',
      description: 'Mining Management Tool - HR Systems, Operations, Reporting, Survey Occupational Health Safety.',
      link: null
    }
  ];

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    { name: 'City of Joburg Management', desc: 'Emergency forms & filing web app', url: 'https://verisec.dedicated.co.za/cojweb' },
    { name: 'People Track', desc: 'HR system with employee tracking', url: 'https://people-track-c20d1.web.app/' }
  ];

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

    education = [
    {
      qualification: 'National Senior Certificate',
      institution: 'Jordan Secondary School',
      location: 'Sebokeng, South Africa'
    },
    {
      qualification: 'N.Dip Computer Systems Engineering',
      institution: 'Tshwane University of Technology',
      location: 'Pretoria, South Africa'
    }
  ];

  programmingLanguages = [
    { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
    { name: 'GoLang', icon: 'devicon-go-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'C#', icon: 'devicon-csharp-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS', icon: 'devicon-css3-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' }
  ];

  embeddedSystems = [
    { name: 'Arduino', icon: 'fas fa-microchip text-blue-500' },
    { name: 'Raspberry Pi', icon: 'fas fa-raspberry-pi text-red-500' },
    { name: 'ESP32', icon: 'fas fa-wifi text-green-500' },
    { name: 'Mosquito MQTT', icon: 'fas fa-server text-purple-500' }
  ];

  webFrameworks = [
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'Ionic', icon: 'devicon-ionic-original text-blue-500' },
    { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
    { name: 'Android Native', icon: 'devicon-android-plain colored' }
  ];

  codeManagement = [
    { name: 'GitHub', icon: 'devicon-github-plain colored' },
    { name: 'Gitflow', icon: 'devicon-git-plain colored' },
    { name: 'Jira', icon: 'devicon-jira-plain colored' },
    { name: 'Bitbucket', icon: 'devicon-bitbucket-plain colored' }
  ];

  training = [
    {
      course: 'Transitioning From C# to Python',
      provider: 'LinkedIn Learning'
    },
    {
      course: 'Project Planning: All You need to Know',
      provider: 'Internal Company Course (Macrocomm)'
    },
    {
      course: 'ESAT Cyber Security Assessment',
      provider: 'Internal Company Course (Macrocomm)'
    }
  ];

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  experiences = [
    {
      company: 'Verisec SA',
      period: '06/2023 – present',
      position: 'Junior Software Engineer',
      location: 'Randburg, South Africa',
      technicalExpertise: [
        'Developing firmware drivers in Golang for scanners, printers, proximity sensors, fingerprint readers, RFID tag readers, and automated shutter doors.',
        'Implementing AI-based facial recognition and culture mapping using Dlib.',
        'Developing RESTful APIs and handlers in Golang, integrating with external APIs, databases, and front-end services.',
        'Designing and implementing self-service kiosk applications with user authentication, API services, and security features.',
        'Troubleshooting and testing hardware components and software code to ensure system stability and performance.'
      ],
      responsibilities: [
        'Designing, developing, and integrating new features into applications.',
        'Maintaining and updating software drivers for self-service kiosks and embedded systems.',
        'Installing, configuring, and deploying software updates across multiple devices.',
        'Ensuring real-time monitoring of kiosks and embedded devices for seamless operation.',
        'Diagnosing and resolving hardware/software issues for optimized system performance.',
        'Participating in organizational software projects, contributing to new application development.',
        'Preparing technical reports, documenting findings, and presenting insights to stakeholders.'
      ]
    },
    {
      company: 'Macrocomm',
      period: '09/2019 – 01/2023',
      position: 'Junior Software Engineer',
      location: 'Midrand, Waterfall, South Africa',
      technicalExpertise: [
        'Writing firmware code in C++ for Raspberry Pi, Arduino, and ESP32 microcontrollers.',
        'IoT & Embedded Systems Development: Building prototypes for smart farming solutions using soil, humidity, temperature, pH, and water level sensors.',
        'Developing fleet management solutions with GPS modules for real-time tracking.',
        'Implementing Mosquito MQTT to enable device-to-device communication over the MQTT protocol.',
        'Designing backend APIs and handlers in C# for seamless integration with MQTT, front-end services, and databases.',
        'Developing Angular applications for frontend services, authentication, and security.',
        'Building HR system prototypes for internal operations, focusing on efficiency and automation.'
      ],
      responsibilities: [
        'Collaborating with management, departments, and customers to identify end-user requirements and specifications.',
        'Designing algorithms and flowcharts to create new software programs and systems.',
        'Testing, deploying, and maintaining software applications.',
        'Troubleshooting, debugging, and improving existing software solutions.',
        'Conducting research and feasibility studies on potential areas of improvement.',
        'Gathering and analyzing user feedback to enhance software performance.',
        'Performing unit testing, root cause analysis, and code reviews to ensure software quality.',
        'Developing technical specifications and project plans to guide development.'
      ]
    }
  ];

  references = [
    {
      name: 'Mahlatse Madiseng',
      position: 'Technical Support, Verisec',
      contact: 'madiseng26@gmail.com, 073 597 9152'
    },
    {
      name: 'Tropic Ngoepe',
      position: 'Software Dev, Macrocomm',
      contact: 'tropiongoepe1@gmail.com, 081 879 3942'
    },
    {
      name: 'Emmaculate Malesa',
      position: 'Human Resources, Macrocomm',
      contact: '073 881 9742'
    },
    {
      name: 'James Wiles',
      position: 'Senior Dev, Macrocomm',
      contact: '079 915 0848'
    },
    {
      name: 'Bongani Mtimkhulu',
      position: 'CTO, Verisec',
      contact: 'b.v.mtimkulu@gmail.com, 0637857737'
    }
  ];

}

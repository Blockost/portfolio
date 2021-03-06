import { Component, OnInit } from '@angular/core';
import { EducationTimelineEvent } from '../../models/educationTimelineEvent';
import { ExperienceTimelineEvent } from '../../models/experienceTimelineEvent';
import { ITimelineEvent } from '../../models/timelineEvent';

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.scss']
})
export class VerticalTimelineComponent implements OnInit {
  public timelineEvents: ITimelineEvent[];

  constructor() {
    this.timelineEvents = this.initializeTimeline();
  }

  ngOnInit() {}

  private initializeTimeline(): ITimelineEvent[] {
    return [
      new EducationTimelineEvent(
        "Engineer's degree, Computer Science",
        'EISTI',
        'France',
        '2012',
        '2017',
        [
          'Software Engineering: design patterns, software design, agile development',
          'Parallel Computing: concurrency, priority, mutexes, semaphores, OpenMP, load balancing',
          'Web applications and services: SOAP, REST, service-oriented architecture (SOA), full-stack development',
          "Operating Systems: computer's architecture, IPCs, scheduling"
        ]
      ),
      new ExperienceTimelineEvent(
        'Softare Developer',
        'Amaris',
        'Vienna, Austria',
        'May 2016',
        'September 2016',
        [
          'Main technologies : C# .net ASP/MVC, Entity Framework, SQL Server, jQuery, Highcharts',
          'Working methodology : adapted Scrum implemented with Team Foundation Server'
        ]
      ),
      new EducationTimelineEvent(
        'Master’s Degree, Mathematics and Computer Science',
        'Heriot-Watt University',
        'Edinburgh, Scotland',
        '2016',
        '2017',
        [
          'Double diploma with Heriot-Watt University in Scotland, with distinction',
          'Software Engineering: design patterns, software design, agile development and resources planning',
          'Computer Network Security: cryptography, secured Internet connections',
          'Network Applications: Internet protocols, (web)Sockets, Web Security, reliable connections',
          'Relational and Non Relational Databases',
          'E-commerce Technology: technical and business-orientated concepts',
          'Artificial Intelligence: Natural Language Processing (NLP) and Deep Learning'
        ]
      ),
      new ExperienceTimelineEvent(
        'Software Engineer (back-end)',
        'Zimmer Biomet',
        'Montréal, Canada',
        'November 2017',
        'February 2019',
        [
          `Developed and maintained a series of REST and SOAP web services to support the
          manufacturing of Zimmer Biomet bone implants and cut guides`,
          'Java, Spring, Hibernate, Atomikos, SQL Server, Graylog'
        ]
      ),
      new ExperienceTimelineEvent(
        'Software Engineer (fullstack)',
        'Mantu',
        'Montréal, Canada',
        'March 2019',
        'March 2019',
        [
          'Designed and implemented the Amaris Welcome Application for their office in Montréal',
          'Cross-platoform iOS/Android development with React Native and Expo',
          'Node.js, React Native, Typescript, Javascript'
        ]
      ),
      new ExperienceTimelineEvent(
        'Software Engineer (fullstack)',
        'Amaris Foundation',
        'Montréal, Canada',
        'April 2019',
        'April 2019',
        [
          'Designed and implemented a brand new web application that helps bring volunteers and charitable organizations together',
          'Node.js, Vue.js, Vuetify'
        ]
      ),
      new ExperienceTimelineEvent(
        'Software Engineer (fullstack)',
        'Morgan Stanley',
        'Montréal, Canada',
        'May 2019',
        'October 2019',
        [
          'Risk Aggregation department',
          'In charge of developing a series of web applications and tools for reviewing and rating/ranking risk models.',
          'Java, Spring, Angular, Typescript, Javascript'
        ]
      ),
      new ExperienceTimelineEvent(
        'Freelance Software Engineer',
        'Llyoka',
        'Worldwide',
        'January 2019',
        'Now',
        [
          'Freelance software engineer, open to new opportunities. Feel free to contact me!'
        ]
      )
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { ITimelineEvent } from '../../models/timelineEvent';
import { EducationTimelineEvent } from '../../models/educationTimelineEvent';
import { ExperienceTimelineEvent } from '../../models/experienceTimelineEvent';

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
        'IT Consultant',
        'Amaris',
        'Montréal, Canada',
        '2017',
        'Present',
        ['Zimmer Biomet']
      )
    ];
  }
}

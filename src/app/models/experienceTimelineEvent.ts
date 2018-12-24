import { ITimelineEvent } from './timelineEvent';

export class ExperienceTimelineEvent implements ITimelineEvent {
  type = 'Experience';

  constructor(
    public title: string,
    public schoolOrCompany: string,
    public location: string,
    public from: string,
    public to: string,
    public description: string[]
  ) {}
}

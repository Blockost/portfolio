import { ITimelineEvent } from './timelineEvent';

export class EducationTimelineEvent implements ITimelineEvent {
  type = 'Education';

  constructor(
    public title: string,
    public schoolOrCompany: string,
    public location: string,
    public from: string,
    public to: string,
    public description: string[]
  ) {}
}

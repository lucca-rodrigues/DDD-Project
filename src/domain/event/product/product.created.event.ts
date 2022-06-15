import { EventInterface } from "../@shared/event.interface";

export class ProductCreatedEvent implements EventInterface {
  dataTimeOccuded: Date;
  eventData: any;

  constructor(data: any) {
    this.dataTimeOccuded = new Date();
    this.eventData = data;
  }
}

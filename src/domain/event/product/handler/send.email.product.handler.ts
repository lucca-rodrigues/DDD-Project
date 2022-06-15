import { EventHandlerInterface } from "../../@shared/event.handler.interface";
import { ProductCreatedEvent } from "../product.created.event";

export class SendEmailWhenProductCreatedHandler
  implements EventHandlerInterface<ProductCreatedEvent>
{
  handle(event: ProductCreatedEvent): void {
    console.log(`Send email to ${event.eventData.email} when product created`);
  }
}

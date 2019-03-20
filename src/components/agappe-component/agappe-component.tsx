import { Component, Prop } from '@stencil/core';
import { user_name } from '../../utils/utils';
import { event_title } from '../../utils/utils';
//import { day_time } from '../../utils/utils';

@Component({
  tag: 'agappe-component',
  styleUrl: 'agappe-component.css',
  shadow: true
})
export class AgappeComponent {
  /**
   * The first name
   */
  @Prop() first: string;

 /**
   * The last name
   */
  @Prop() last: string;



  private getName(): string {
    return user_name(this.first, this.last);
  }
    /**
   * The title of the event
   */
  @Prop() title_event: string;

  private getTitle(): string {
    return event_title(this.title_event);
  }
  @Prop() day: string;
  @Prop() time: string;

 

  render() {
    return <div class="card">
      <h1>{this.getTitle()}</h1>
      <time>{this.day}</time>
      <h3>{this.getName()}</h3>
      <address>Box 564, Disneyland</address> 
      <div class="rating" ><div class="star"></div><div class="star"></div>  </div>
         
      <time>{this.time}</time>      
      </div>;
    
  }
}

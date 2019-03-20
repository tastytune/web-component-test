import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

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
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div class="card">
      <h1>{this.getText()}</h1>
      <time>14-03-2019</time>
      <h3>Fulanito Perez</h3>
      <address>Box 564, Disneyland</address> 
      <div class="rating" ><div class="star"></div><div class="star"></div>  </div>
         
      <time>20:00</time>      
      </div>;
    
  }
}

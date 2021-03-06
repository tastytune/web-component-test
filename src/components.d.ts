/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AgappeComponent {
    'address': string;
    'day': string;
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    'time': string;
    /**
    * The title of the event
    */
    'title_event': string;
  }
  interface AgappeComponentAttributes extends StencilHTMLAttributes {
    'address'?: string;
    'day'?: string;
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    'time'?: string;
    /**
    * The title of the event
    */
    'title_event'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AgappeComponent': Components.AgappeComponent;
  }

  interface StencilIntrinsicElements {
    'agappe-component': Components.AgappeComponentAttributes;
  }


  interface HTMLAgappeComponentElement extends Components.AgappeComponent, HTMLStencilElement {}
  var HTMLAgappeComponentElement: {
    prototype: HTMLAgappeComponentElement;
    new (): HTMLAgappeComponentElement;
  };

  interface HTMLElementTagNameMap {
    'agappe-component': HTMLAgappeComponentElement
  }

  interface ElementTagNameMap {
    'agappe-component': HTMLAgappeComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}


// base eelement is like a div with: 
// props settings 
// render metho
export interface IBaseElement {
    rendereable?: boolean;
    template?: string | HTMLElement;
    observedAttributes: string[];
    shadowRoot?: any;
    connectedCallback(): any;
}
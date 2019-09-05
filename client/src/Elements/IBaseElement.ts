export interface IBaseElement {
    rendereable?: boolean;
    template?: string;
    stylesheet?: string
    observedAttributes: string[];
    shadowRoot?: boolean | any;
    connectedCallback(): any;
}
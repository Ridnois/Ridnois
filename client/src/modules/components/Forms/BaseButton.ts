import { Prop } from '../../../utils';
import scss from './style.scss';
export class BaseButton extends HTMLElement {
    @Prop() public payLoad: string;
    constructor(){
        super();
    }

    public render(): string {
        console.info(`payLoad: ${this.payLoad}`)
        return `${this.cssStyle} ${this.template}
        `
    }
    public connectedCallback() {
        this.refresh();
    }

    static get observedAttributes(): string[] {
        return ['pay-load'];
    }

    public attributeChangedCallback(): void {
        this.refresh();
    }

    public refresh() {
        this.innerHTML = this.render();
    }

    get template(): string {
        return `
            <button>${this.payLoad}</button>
        `
    }
    get cssStyle(): string {
        return `
        <link href="https://fonts.googleapis.com/css?family=Lobster|Roboto&display=swap" rel="stylesheet">
        <style>
                ${scss}
        </style>
        `
    }
}
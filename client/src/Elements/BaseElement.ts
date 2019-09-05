import { Prop } from '../utils';
import { IBaseElement } from './IBaseElement';



export class BaseElement extends HTMLElement {
    private base: IBaseElement;
    private init: boolean;
    constructor() {
        super();
        this.init = true;
    }
    
    observedAttributes() {
        return this.base.observedAttributes ? [...this.base.observedAttributes] : ['foo'] ;
    }
    connectedCallback() {
        if (this.init) {
            this.refresh();
        }
    }
    render() {
        return this.template;
    }
    refresh () {
       this.innerHTML = this.render();
    }

    set template(template: string) {
        this.template = template
    }
    get template() {
        return '<div>Base element</div>';
    }
    
    setProp(key: string, value: string): any {
        return '';
    }
}

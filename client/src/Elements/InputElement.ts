import { Prop } from '../utils';
import { BaseElement } from './BaseElement';
import {IBaseElement} from './IBaseElement';
import {inputStyle} from '../Styles';

const base:  IBaseElement = {
    rendereable: true,
    shadowRoot: false,
    template: `<div><input type="text"/></div>`,
    observedAttributes : ['payload'],
    connectedCallback: ()=>{},
    stylesheet: inputStyle
};


export class MyInput extends BaseElement {
    @Prop() isEmpty: any;
    private state: object;
    constructor() {
        super();
        this.isEmpty = true;
    }
    observedAttributes() {
        return [...Object.keys(this.state)]
    }
    setState(p: object) {
        if(!this.state) {
            this.state = {...p}
        }
        console.log(this.state)
    }
    handleChange(p) {
        this.setState({payload: p});
    }
    render(): string {
        const { stylesheet,template } = base;
        return `${'<style>'+stylesheet+'</style>'}${template}`;
    }
}

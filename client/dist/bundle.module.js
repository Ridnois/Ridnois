
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

// export { IteratorResult } from './IteratorResult';
// export { Iterator } from './Iterator';
const camelToKebab = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
const Prop = () => {
    return (target, propName) => {
        const attrName = camelToKebab(propName);
        function get() {
            return this.getAttribute(attrName);
        }
        function set(value) {
            if (typeof value === 'undefined') {
                this.removeAttribute(attrName);
            }
            else {
                this.setAttribute(attrName, value);
            }
        }
        Object.defineProperty(target, propName, { get, set });
    };
};
//# sourceMappingURL=index.js.map

class BaseElement extends HTMLElement {
    constructor() {
        super();
        this.init = true;
    }
    observedAttributes() {
        return this.base.observedAttributes ? [...this.base.observedAttributes] : ['foo'];
    }
    connectedCallback() {
        console.log('init');
        if (this.init) {
            this.refresh();
        }
    }
    render() {
        return this.template;
    }
    refresh() {
        this.innerHTML = this.render();
    }
    get template() {
        return '<div>Base element</div>';
    }
    setProp(key, value) {
        return '';
    }
}
__decorate([
    Prop(),
    __metadata("design:type", String)
], BaseElement.prototype, "foo", void 0);
//# sourceMappingURL=BaseElement.js.map

window.customElements.define('base-element', BaseElement);
//# sourceMappingURL=main.es.js.map
//# sourceMappingURL=bundle.module.js.map

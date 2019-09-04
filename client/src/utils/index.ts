// export { IteratorResult } from './IteratorResult';
// export { Iterator } from './Iterator';

export const camelToKebab = (str: string): string => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const Prop = () => {
    return (target: any, propName: any) => {
      const attrName = camelToKebab(propName);
      function get() {
        return this.getAttribute(attrName);
      }
  
      function set(value: any) {
        if (typeof value === 'undefined') {
          this.removeAttribute(attrName);
        } else {
          this.setAttribute(attrName, value);
        }
      }
  
      Object.defineProperty(target, propName, { get, set });
    };
};



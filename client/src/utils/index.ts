export const Prop = (): any => {
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
  
  export const Element = (): any => {
    return (target: any, elementName: any) => {
      const attrName = camelToKebab(elementName);
  
      function get() {
        return this.getElementById(attrName);
      }
  
      Object.defineProperty(target, elementName, { get });
    };
  };
  
  const camelToKebab = (str: string) => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };
  
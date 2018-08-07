/**
 * package.json
 */
declare module "*package.json" {
    const name: string;
    const version: string;
    const description: string;
    const author: string;
    const license: string;
    const keywords: Array<string>;
    const module: string;
    const main: string;
    export {name, version, description, author, license, keywords, module, main};
  }

/**
 * JSON file definition
 */
declare module "*.json" {
  const value: any;
  export default value;
}

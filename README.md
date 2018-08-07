# json-types
TypeScript declarations for json files

* General json file definition
* Definition for package.json

# Usage

`npm install veridict/json-types`

Add the following to `tsconfig.json`

```json
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@types/",
      "./node_modules/@vtypes/"
    ]
  }
}
```

# Issues

The name of the bundle is `@vtypes/json-types` because naming it just `json-types` didn't work (even if the folder was specified in tsconfig.json). 
Naming it @types/json-types didn't work either, because `npm install`(?) removed @types. 

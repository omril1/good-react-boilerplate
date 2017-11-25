/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}
// https://stackoverflow.com/a/41946697
// apparently typescript needs to know what it can import
declare module '*.scss' {
  const styles: { [x: string]: string };
  export = styles;
}

// for redux devtools extension
declare interface Window {
  devToolsExtension?(): (args?: any) => any;
}

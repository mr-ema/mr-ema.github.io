// * Declare Here Your Assets Files ( .jpg | .png | .svg )
// * You Have To Declare Them In Webpack.common.js Too 

declare module '*.gif' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

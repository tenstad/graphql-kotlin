"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"restricting-input-output",title:"Restricting Input and Output Types"},u=void 0,c={unversionedId:"schema-generator/customizing-schemas/restricting-input-output",id:"schema-generator/customizing-schemas/restricting-input-output",title:"Restricting Input and Output Types",description:"Since we are using Kotlin classes to represent both GraphQL input and output objects we can use the same class for both and the generator will handle type conflicts.",source:"@site/docs/schema-generator/customizing-schemas/restricting-input-output.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/restricting-input-output",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/restricting-input-output",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/restricting-input-output.md",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1653587892,formattedLastUpdatedAt:"5/26/2022",frontMatter:{id:"restricting-input-output",title:"Restricting Input and Output Types"},sidebar:"docs",previous:{title:"Custom Types",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/custom-type-reference"},next:{title:"Advanced Features",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/advanced-features"}},p={},l=[],m={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Since we are using Kotlin classes to represent both GraphQL input and output objects we can use the same class for both and the generator will handle type conflicts."),(0,o.kt)("p",null,"If you want to enforce that a type should never be used as an input or output you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@GraphQLValidObjectLocations")," annotation.\nIf the class was used in the schema in an invalid location an exception will be thrown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SimpleClass(val value: String)\n\n@GraphQLValidObjectLocations([Locations.INPUT_OBJECT])\nclass InputOnly(val value: String)\n\n@GraphQLValidObjectLocations([Locations.OBJECT])\nclass OutputOnly(val value: String)\n\n// Valid Usage\nfun output1() = SimpleClass("foo")\nfun output2() = OutputOnly("foo")\nfun input1(input: SimpleClass) = "value was ${input.value}"\nfun input2(input: InputOnly) = "value was ${input.value}"\n\n// Throws Exception\nfun output3() = InputOnly("foo")\nfun input3(input: OutputOnly) = "value was ${input.value}"\n')))}d.isMDXComponent=!0}}]);
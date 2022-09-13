"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"lists",title:"Lists"},l=void 0,p={unversionedId:"schema-generator/writing-schemas/lists",id:"schema-generator/writing-schemas/lists",title:"Lists",description:"kotlin.collections.List is automatically mapped to the GraphQL List type. Type arguments provided to Kotlin collections",source:"@site/docs/schema-generator/writing-schemas/lists.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/lists",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/lists",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/lists.md",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1663043830,formattedLastUpdatedAt:"Sep 13, 2022",frontMatter:{id:"lists",title:"Lists"},sidebar:"docs",previous:{title:"Enums",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/enums"},next:{title:"Interfaces",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/interfaces"}},c={},u=[{value:"Arrays and Unsupported Collection Types",id:"arrays-and-unsupported-collection-types",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kotlin.collections.List")," is automatically mapped to the GraphQL ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," type. Type arguments provided to Kotlin collections\nare used as the type arguments in the GraphQL ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class SimpleQuery {\n    fun generateList(): List<String> {\n        // some logic here that generates list\n    }\n\n    fun doSomethingWithIntList(ints: List<Int>): String {\n        // some logic here that processes list\n    }\n}\n")),(0,o.kt)("p",null,"The above Kotlin class would produce the following GraphQL schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    generateList: [String!]!\n    doSomethingWithIntList(ints: [Int!]!): String!\n}\n")),(0,o.kt)("h2",{id:"arrays-and-unsupported-collection-types"},"Arrays and Unsupported Collection Types"),(0,o.kt)("p",null,"Currently, the GraphQL spec only supports ",(0,o.kt)("inlineCode",{parentName:"p"},"Lists"),". Therefore, even though Java and Kotlin support number of other collection\ntypes, ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," only explicitly supports ",(0,o.kt)("inlineCode",{parentName:"p"},"Lists"),". Other collection types such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Sets")," (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/201"},"#201"),")\nand arbitrary ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," data structures are not supported out of the box. While we do not recommend using ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Set")," in the schema,\nthey could be supported with the use of the schema hooks."),(0,o.kt)("p",null,"Due to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/pull/1379"},"argument deserialization issues"),", arrays are currently not supported"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun willResolveMonad(type: KType): KType = when (type.classifier) {\n    Set::class -> List::class.createType(type.arguments)\n    else -> type\n}\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/discussions/1110"},"Discussion #1110")," for more details."))}d.isMDXComponent=!0}}]);
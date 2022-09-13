"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4998],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=s(a),h=n,u=g["".concat(p,".").concat(h)]||g[h]||c[h]||l;return a?r.createElement(u,o(o({ref:t},d),{},{components:a})):r.createElement(u,o({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},92524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"getting-started",title:"Getting Started",original_id:"getting-started",slug:"/"},p=void 0,s={unversionedId:"getting-started",id:"version-3.x.x/getting-started",title:"Getting Started",description:"GraphQL Kotlin is a collection of libraries, built on top of graphql-java, that aim to simplify running GraphQL in Kotlin",source:"@site/versioned_docs/version-3.x.x/getting-started.md",sourceDirName:".",slug:"/",permalink:"/graphql-kotlin/docs/3.x.x/",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/getting-started.md",tags:[],version:"3.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1663043830,formattedLastUpdatedAt:"Sep 13, 2022",frontMatter:{id:"getting-started",title:"Getting Started",original_id:"getting-started",slug:"/"},sidebar:"version-3.x.x/docs",next:{title:"Examples",permalink:"/graphql-kotlin/docs/3.x.x/examples"}},d={},c=[{value:"Modules",id:"modules",level:2},{value:"Installation",id:"installation",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Generating a Schema",id:"generating-a-schema",level:2},{value:"Apollo Federation",id:"apollo-federation",level:3},{value:"Running a Server",id:"running-a-server",level:2},{value:"Creating a Client",id:"creating-a-client",level:2},{value:"Examples",id:"examples",level:2},{value:"Blogs and Videos",id:"blogs-and-videos",level:2}],g={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin is a collection of libraries, built on top of ",(0,l.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/"},"graphql-java"),", that aim to simplify running GraphQL in Kotlin"),(0,l.kt)("h2",{id:"modules"},"Modules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/examples"},"examples"),"\n\u2014 Example apps that use graphql-kotlin libraries to test and demonstrate usages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-client"},"graphql-kotlin-client")," (",(0,l.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-client"},"Javadoc"),")\n\u2014 Lightweight GraphQL Kotlin HTTP client"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-schema-generator"},"graphql-kotlin-schema-generator")," (",(0,l.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-schema-generator"},"Javadoc"),")\n\u2014 Code only GraphQL schema generation for Kotlin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-federation"},"graphql-kotlin-federation")," (",(0,l.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-federation"},"Javadoc"),")\n\u2014 Schema generator extension to build federated GraphQL schemas"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-spring-server"},"graphql-kotlin-spring-server")," (",(0,l.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-spring-server"},"Javadoc"),")\n\u2014 Spring Boot auto-configuration library to create GraphQL server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-types"},"graphql-kotlin-types")," (",(0,l.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-types"},"Javadoc"),")\n\u2014 Core types used by both client and server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/plugins"},"plugins"),"\n\u2014 GraphQL Kotlin Gradle and Maven plugins")),(0,l.kt)("p",null,"If you encounter any problems using this library please open up a new\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues"},"Issue")),(0,l.kt)("p",null,"Additional resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.graphql-java.com/documentation/"},"graphql-java"))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Using a JVM dependency manager, link any ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-*")," library to your project. You can see the latest\nversion and other examples in ",(0,l.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.expediagroup/graphql-kotlin-spring-server"},"Sonatype Central\nRepository")),(0,l.kt)("h3",{id:"maven"},"Maven"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-spring-server</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n\n")),(0,l.kt)("h3",{id:"gradle"},"Gradle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nimplementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n\n')),(0,l.kt)("h2",{id:"generating-a-schema"},"Generating a Schema"),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," to generate a schema from Kotlin code and expose it with any server library."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/schema-generator-getting-started"},"Schema Generator Getting Started"),"."),(0,l.kt)("h3",{id:"apollo-federation"},"Apollo Federation"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation"),", you can generate an ",(0,l.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/"},"Apollo Federation")," compliant schema."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/federated/apollo-federation"},"Apollo Federation"),"."),(0,l.kt)("h2",{id:"running-a-server"},"Running a Server"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," is a combination of the schema generator, fedeation, and server libraries. If you are looking to run a GraphQL server, this is the place to start."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview"},"Spring Server Overview"),"."),(0,l.kt)("h2",{id:"creating-a-client"},"Creating a Client"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-plugins")," can be used to generate a ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," from an existing schema that is easy to use and type-safe."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/client/client-overview"},"Client Overview"),"."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"examples")," module is a collection of working code and examples on how to use all of the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," modules."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/examples"},"example docs")," for more info."),(0,l.kt)("h2",{id:"blogs-and-videos"},"Blogs and Videos"),(0,l.kt)("p",null,"You can find more posts and recorded conference talks on GraphQL and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," on our ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/blogs-and-videos"},"Blogs and Videos")," page."))}h.isMDXComponent=!0}}]);
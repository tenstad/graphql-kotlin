"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4913],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"graphql-java-comparison",title:"GraphQL Java Comparison"},s=void 0,c={unversionedId:"graphql-java-comparison",id:"version-3.x.x/graphql-java-comparison",title:"GraphQL Java Comparison",description:"graphql-java is one of the most popular JVM based GraphQL implemenations. GraphQL Kotlin is",source:"@site/versioned_docs/version-3.x.x/graphql-java-comparison.md",sourceDirName:".",slug:"/graphql-java-comparison",permalink:"/graphql-kotlin/docs/3.x.x/graphql-java-comparison",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/graphql-java-comparison.md",tags:[],version:"3.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1653587892,formattedLastUpdatedAt:"5/26/2022",frontMatter:{id:"graphql-java-comparison",title:"GraphQL Java Comparison"}},h={},p=[{value:"GraphQL Java Schema",id:"graphql-java-schema",level:3},{value:"GraphQL Kotlin Schema",id:"graphql-kotlin-schema",level:3}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://graphql-java.com/"},"graphql-java")," is one of the most popular JVM based GraphQL implemenations. GraphQL Kotlin is\nbuilt on top of ",(0,o.kt)("inlineCode",{parentName:"p"},"grahpql-java")," as it can be easily extended with additional functionality and this implementation\nhas been used and tested by many users."),(0,o.kt)("h3",{id:"graphql-java-schema"},"GraphQL Java Schema"),(0,o.kt)("p",null,"The most common way to create the schema in ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," is to first manually write the SDL file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"\nschema {\n    query: Query\n}\n\ntype Query {\n    bookById(id: ID): Book\n}\n\ntype Book {\n    id: ID!\n    name: String!\n    pageCount: Int!\n    author: Author\n}\n\ntype Author {\n    id: ID!\n    firstName: String!\n    lastName: String!\n}\n\n")),(0,o.kt)("p",null,"Then write the runtime code that matches this schema to build the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n// Internal DB class, not schema class\nclass Book(\n    val id: ID,\n    val name: String,\n    val totalPages: Int, // This needs to be renamed to pageCount\n    val authorId: ID // This is not in the schema\n)\n\n// Internal DB class, not schema class\nclass Author(\n    val id: ID,\n    val firstName: String,\n    val lastName: String\n)\n\nclass GraphQLDataFetchers {\n    private val books: List<Book> = booksFromDB()\n    private val authors: List<Author> = authorsFromDB()\n\n    fun getBookByIdDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val bookId: String = dataFetchingEnvironment.getArgument("id")\n        return books.firstOrNull { it.id == bookId }\n    }\n\n    fun getAuthorDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val book: Book = dataFetchingEnvironment.getSource() as Book\n        return authors.firstOrNull { it.id == book.authorId }\n    }\n\n    fun getPageCountDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val book: Book = dataFetchingEnvironment.getSource() as Book\n        return book.totalPages\n    }\n}\n\nval schemaParser = SchemaParser()\nval schemaGenerator = SchemaGenerator()\nval schemaFile = loadSchema("schema.graphqls")\nval typeRegistry = schemaParser.parse(schemaFile)\nval graphQLDataFetchers = GraphQLDataFetchers()\n\nval runtimeWiring = RuntimeWiring.newRuntimeWiring()\n    .type(\n        newTypeWiring("Query")\n            .dataFetcher("bookById", graphQLDataFetchers.getBookByIdDataFetcher())\n    )\n    .type(\n        newTypeWiring("Book")\n            .dataFetcher("author", graphQLDataFetchers.getAuthorDataFetcher())\n            .dataFetcher("pageCount", graphQLDataFetchers.getPageCountDataFetcher())\n    )\n    .build()\n\n// Combine the types and runtime code together to make a schema\nval graphQLSchema: GraphQLSchema = schemaGenerator.makeExecutableSchema(typeDefinitionRegistry, runtimeWiring)\n\n')),(0,o.kt)("p",null,"This means that there are two sources of truth for your schema and changes in either have to be reflected in both locations.\nAs your schema scales to hundreds of types and many different resolvers, it can get more difficult to track what code needs to be changed if you want to add a new field,\ndeprecate or delete an existing one, or fix a bug in the resolver code."),(0,o.kt)("p",null,"These errors will hopefully be caught by your build or automated tests, but it is another layer your have to be worried about when creating your API."),(0,o.kt)("h3",{id:"graphql-kotlin-schema"},"GraphQL Kotlin Schema"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," aims to simplify this process by using Kotlin reflection to generate the schema for you.\nAll you need to do is write your schema code in a Kotlin class with public functions or properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nprivate val books: List<Book> = booksFromDB()\nprivate val authors: List<Author> = authorsFromDB()\n\nclass Query {\n    fun bookById(id: ID): Book? = books.find { it.id == id }\n}\n\nclass Book(\n    val id: ID,\n    val name: String,\n    private val totalPages: Int,\n    private val authorId: ID\n) {\n    fun author(): Author? = authors.find { it.id == authorId }\n    fun pageCount(): Int = totalPages\n}\n\nclass Author(\n    val id: ID,\n    val firstName: String,\n    val lastName: String\n)\n\nval config = SchemaGeneratorConfig(supportedPackages = "com.example")\nval queries = listOf(TopLevelObject(Query()))\nval schema: GraphQLSchema = toSchema(config, queries)\n\n')),(0,o.kt)("p",null,"This makes changes in code directly reflect to your schema and you can still produce the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," to print and export an SDL file."))}m.isMDXComponent=!0}}]);
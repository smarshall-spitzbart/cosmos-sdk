(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{653:function(e,l,c){"use strict";c.r(l);var d=c(1),t=Object(d.a)({},(function(){var e=this,l=e.$createElement,c=e._self._c||l;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"query-services"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#query-services"}},[e._v("#")]),e._v(" Query Services")]),e._v(" "),c("p",{attrs:{synopsis:""}},[e._v("A Protobuf Query service processes "),c("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[c("code",[e._v("queries")])]),e._v(". Query services are specific to the module in which they are defined, and only process "),c("code",[e._v("queries")]),e._v(" defined within said module. They are called from "),c("code",[e._v("BaseApp")]),e._v("'s "),c("RouterLink",{attrs:{to:"/core/baseapp.html#query"}},[c("code",[e._v("Query")]),e._v(" method")]),e._v(".")],1),e._v(" "),c("h2",{attrs:{id:"pre-requisite-readings"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),c("ul",[c("li",{attrs:{prereq:""}},[c("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[e._v("Module Manager")])],1),e._v(" "),c("li",{attrs:{prereq:""}},[c("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html"}},[e._v("Messages and Queries")])],1)]),e._v(" "),c("h2",{attrs:{id:"querier-type"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#querier-type"}},[e._v("#")]),e._v(" "),c("code",[e._v("Querier")]),e._v(" type")]),e._v(" "),c("p",[e._v("The "),c("code",[e._v("querier")]),e._v(" type defined in the Cosmos SDK will be deprecated in favor of "),c("a",{attrs:{href:"#grpc-service"}},[e._v("gRPC Services")]),e._v(". It specifies the typical structure of a "),c("code",[e._v("querier")]),e._v(" function:")]),e._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSB0eXBlcwoKaW1wb3J0ICgKCWFiY2kgJnF1b3Q7Z2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYWJjaS90eXBlcyZxdW90OwopCgovLyBRdWVyaWVyIGRlZmluZXMgYSBmdW5jdGlvbiB0eXBlIHRoYXQgYSBtb2R1bGUgcXVlcmllciBtdXN0IGltcGxlbWVudCB0byBoYW5kbGUKLy8gY3VzdG9tIGNsaWVudCBxdWVyaWVzLgp0eXBlIFF1ZXJpZXIgPSBmdW5jKGN0eCBDb250ZXh0LCBwYXRoIFtdc3RyaW5nLCByZXEgYWJjaS5SZXF1ZXN0UXVlcnkpIChbXWJ5dGUsIGVycm9yKQo="}})],1),e._v(" "),c("p",[e._v("Let us break it down:")]),e._v(" "),c("ul",[c("li",[e._v("The "),c("RouterLink",{attrs:{to:"/core/context.html"}},[c("code",[e._v("Context")])]),e._v(" contains all the necessary information needed to process the "),c("code",[e._v("query")]),e._v(", as well as a branch of the latest state. It is primarily used by the "),c("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[c("code",[e._v("keeper")])]),e._v(" to access the state.")],1),e._v(" "),c("li",[e._v("The "),c("code",[e._v("path")]),e._v(" is an array of "),c("code",[e._v("string")]),e._v("s that contains the type of the query, and that can also contain "),c("code",[e._v("query")]),e._v(" arguments. See "),c("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[c("code",[e._v("queries")])]),e._v(" for more information.")],1),e._v(" "),c("li",[e._v("The "),c("code",[e._v("req")]),e._v(" itself is primarily used to retrieve arguments if they are too large to fit in the "),c("code",[e._v("path")]),e._v(". This is done using the "),c("code",[e._v("Data")]),e._v(" field of "),c("code",[e._v("req")]),e._v(".")]),e._v(" "),c("li",[e._v("The result in "),c("code",[e._v("[]byte")]),e._v(" returned to "),c("code",[e._v("BaseApp")]),e._v(", marshalled using the application's "),c("RouterLink",{attrs:{to:"/core/encoding.html"}},[c("code",[e._v("codec")])]),e._v(".")],1)]),e._v(" "),c("h2",{attrs:{id:"implementation-of-a-module-query-service"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#implementation-of-a-module-query-service"}},[e._v("#")]),e._v(" Implementation of a module query service")]),e._v(" "),c("h3",{attrs:{id:"grpc-service"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#grpc-service"}},[e._v("#")]),e._v(" gRPC Service")]),e._v(" "),c("p",[e._v("When defining a Protobuf "),c("code",[e._v("Query")]),e._v(" service, a "),c("code",[e._v("QueryServer")]),e._v(" interface is generated for each module with all the service methods:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBRdWVyeVNlcnZlciBpbnRlcmZhY2UgewoJUXVlcnlCYWxhbmNlKGNvbnRleHQuQ29udGV4dCwgKlF1ZXJ5QmFsYW5jZVBhcmFtcykgKCp0eXBlcy5Db2luLCBlcnJvcikKCVF1ZXJ5QWxsQmFsYW5jZXMoY29udGV4dC5Db250ZXh0LCAqUXVlcnlBbGxCYWxhbmNlc1BhcmFtcykgKCpRdWVyeUFsbEJhbGFuY2VzUmVzcG9uc2UsIGVycm9yKQp9Cg=="}}),e._v(" "),c("p",[e._v("These custom queries methods should be implemented by a module's keeper, typically in "),c("code",[e._v("./keeper/grpc_query.go")]),e._v(". The first parameter of these methods is a generic "),c("code",[e._v("context.Context")]),e._v(", whereas querier methods generally need an instance of "),c("code",[e._v("sdk.Context")]),e._v(" to read\nfrom the store. Therefore, the Cosmos SDK provides a function "),c("code",[e._v("sdk.UnwrapSDKContext")]),e._v(" to retrieve the "),c("code",[e._v("sdk.Context")]),e._v(" from the provided\n"),c("code",[e._v("context.Context")]),e._v(".")]),e._v(" "),c("p",[e._v("Here's an example implementation for the bank module:")]),e._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBrZWVwZXIKCmltcG9ydCAoCgkmcXVvdDtjb250ZXh0JnF1b3Q7CgoJJnF1b3Q7Z29vZ2xlLmdvbGFuZy5vcmcvZ3JwYy9jb2RlcyZxdW90OwoJJnF1b3Q7Z29vZ2xlLmdvbGFuZy5vcmcvZ3JwYy9zdGF0dXMmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3N0b3JlL3ByZWZpeCZxdW90OwoJc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMvcXVlcnkmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9iYW5rL3R5cGVzJnF1b3Q7CikKCnZhciBfIHR5cGVzLlF1ZXJ5U2VydmVyID0gQmFzZUtlZXBlcnt9CgovLyBCYWxhbmNlIGltcGxlbWVudHMgdGhlIFF1ZXJ5L0JhbGFuY2UgZ1JQQyBtZXRob2QKZnVuYyAoayBCYXNlS2VlcGVyKSBCYWxhbmNlKGN0eCBjb250ZXh0LkNvbnRleHQsIHJlcSAqdHlwZXMuUXVlcnlCYWxhbmNlUmVxdWVzdCkgKCp0eXBlcy5RdWVyeUJhbGFuY2VSZXNwb25zZSwgZXJyb3IpIHsKCWlmIHJlcSA9PSBuaWwgewoJCXJldHVybiBuaWwsIHN0YXR1cy5FcnJvcihjb2Rlcy5JbnZhbGlkQXJndW1lbnQsICZxdW90O2VtcHR5IHJlcXVlc3QmcXVvdDspCgl9CgoJaWYgcmVxLkFkZHJlc3MgPT0gJnF1b3Q7JnF1b3Q7IHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3IoY29kZXMuSW52YWxpZEFyZ3VtZW50LCAmcXVvdDthZGRyZXNzIGNhbm5vdCBiZSBlbXB0eSZxdW90OykKCX0KCglpZiByZXEuRGVub20gPT0gJnF1b3Q7JnF1b3Q7IHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3IoY29kZXMuSW52YWxpZEFyZ3VtZW50LCAmcXVvdDtpbnZhbGlkIGRlbm9tJnF1b3Q7KQoJfQoKCXNka0N0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChjdHgpCglhZGRyZXNzLCBlcnIgOj0gc2RrLkFjY0FkZHJlc3NGcm9tQmVjaDMyKHJlcS5BZGRyZXNzKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgc3RhdHVzLkVycm9yZihjb2Rlcy5JbnZhbGlkQXJndW1lbnQsICZxdW90O2ludmFsaWQgYWRkcmVzczogJXMmcXVvdDssIGVyci5FcnJvcigpKQoJfQoKCWJhbGFuY2UgOj0gay5HZXRCYWxhbmNlKHNka0N0eCwgYWRkcmVzcywgcmVxLkRlbm9tKQoKCXJldHVybiAmYW1wO3R5cGVzLlF1ZXJ5QmFsYW5jZVJlc3BvbnNle0JhbGFuY2U6ICZhbXA7YmFsYW5jZX0sIG5pbAp9CgovLyBBbGxCYWxhbmNlcyBpbXBsZW1lbnRzIHRoZSBRdWVyeS9BbGxCYWxhbmNlcyBnUlBDIG1ldGhvZApmdW5jIChrIEJhc2VLZWVwZXIpIEFsbEJhbGFuY2VzKGN0eCBjb250ZXh0LkNvbnRleHQsIHJlcSAqdHlwZXMuUXVlcnlBbGxCYWxhbmNlc1JlcXVlc3QpICgqdHlwZXMuUXVlcnlBbGxCYWxhbmNlc1Jlc3BvbnNlLCBlcnJvcikgewoJaWYgcmVxID09IG5pbCB7CgkJcmV0dXJuIG5pbCwgc3RhdHVzLkVycm9yKGNvZGVzLkludmFsaWRBcmd1bWVudCwgJnF1b3Q7ZW1wdHkgcmVxdWVzdCZxdW90OykKCX0KCglpZiByZXEuQWRkcmVzcyA9PSAmcXVvdDsmcXVvdDsgewoJCXJldHVybiBuaWwsIHN0YXR1cy5FcnJvcihjb2Rlcy5JbnZhbGlkQXJndW1lbnQsICZxdW90O2FkZHJlc3MgY2Fubm90IGJlIGVtcHR5JnF1b3Q7KQoJfQoKCWFkZHIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIocmVxLkFkZHJlc3MpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3JmKGNvZGVzLkludmFsaWRBcmd1bWVudCwgJnF1b3Q7aW52YWxpZCBhZGRyZXNzOiAlcyZxdW90OywgZXJyLkVycm9yKCkpCgl9CgoJc2RrQ3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGN0eCkKCgliYWxhbmNlcyA6PSBzZGsuTmV3Q29pbnMoKQoJYWNjb3VudFN0b3JlIDo9IGsuZ2V0QWNjb3VudFN0b3JlKHNka0N0eCwgYWRkcikKCglwYWdlUmVzLCBlcnIgOj0gcXVlcnkuUGFnaW5hdGUoYWNjb3VudFN0b3JlLCByZXEuUGFnaW5hdGlvbiwgZnVuYyhrZXksIHZhbHVlIFtdYnl0ZSkgZXJyb3IgewoJCXZhciBhbW91bnQgc2RrLkludAoJCWlmIGVyciA6PSBhbW91bnQuVW5tYXJzaGFsKHZhbHVlKTsgZXJyICE9IG5pbCB7CgkJCXJldHVybiBlcnIKCQl9CgkJYmFsYW5jZXMgPSBhcHBlbmQoYmFsYW5jZXMsIHNkay5OZXdDb2luKHN0cmluZyhrZXkpLCBhbW91bnQpKQoJCXJldHVybiBuaWwKCX0pCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3JmKGNvZGVzLkludmFsaWRBcmd1bWVudCwgJnF1b3Q7cGFnaW5hdGU6ICV2JnF1b3Q7LCBlcnIpCgl9CgoJcmV0dXJuICZhbXA7dHlwZXMuUXVlcnlBbGxCYWxhbmNlc1Jlc3BvbnNle0JhbGFuY2VzOiBiYWxhbmNlcywgUGFnaW5hdGlvbjogcGFnZVJlc30sIG5pbAp9CgovLyBTcGVuZGFibGVCYWxhbmNlcyBpbXBsZW1lbnRzIGEgZ1JQQyBxdWVyeSBoYW5kbGVyIGZvciByZXRyaWV2aW5nIGFuIGFjY291bnQncwovLyBzcGVuZGFibGUgYmFsYW5jZXMuCmZ1bmMgKGsgQmFzZUtlZXBlcikgU3BlbmRhYmxlQmFsYW5jZXMoY3R4IGNvbnRleHQuQ29udGV4dCwgcmVxICp0eXBlcy5RdWVyeVNwZW5kYWJsZUJhbGFuY2VzUmVxdWVzdCkgKCp0eXBlcy5RdWVyeVNwZW5kYWJsZUJhbGFuY2VzUmVzcG9uc2UsIGVycm9yKSB7CglpZiByZXEgPT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3IoY29kZXMuSW52YWxpZEFyZ3VtZW50LCAmcXVvdDtlbXB0eSByZXF1ZXN0JnF1b3Q7KQoJfQoKCWFkZHIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIocmVxLkFkZHJlc3MpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3JmKGNvZGVzLkludmFsaWRBcmd1bWVudCwgJnF1b3Q7aW52YWxpZCBhZGRyZXNzOiAlcyZxdW90OywgZXJyLkVycm9yKCkpCgl9CgoJc2RrQ3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGN0eCkKCgliYWxhbmNlcyA6PSBzZGsuTmV3Q29pbnMoKQoJYWNjb3VudFN0b3JlIDo9IGsuZ2V0QWNjb3VudFN0b3JlKHNka0N0eCwgYWRkcikKCXplcm9BbXQgOj0gc2RrLlplcm9JbnQoKQoKCXBhZ2VSZXMsIGVyciA6PSBxdWVyeS5QYWdpbmF0ZShhY2NvdW50U3RvcmUsIHJlcS5QYWdpbmF0aW9uLCBmdW5jKGtleSwgdmFsdWUgW11ieXRlKSBlcnJvciB7CgkJYmFsYW5jZXMgPSBhcHBlbmQoYmFsYW5jZXMsIHNkay5OZXdDb2luKHN0cmluZyhrZXkpLCB6ZXJvQW10KSkKCQlyZXR1cm4gbmlsCgl9KQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgc3RhdHVzLkVycm9yZihjb2Rlcy5JbnZhbGlkQXJndW1lbnQsICZxdW90O3BhZ2luYXRlOiAldiZxdW90OywgZXJyKQoJfQoKCXJlc3VsdCA6PSBzZGsuTmV3Q29pbnMoKQoJc3BlbmRhYmxlIDo9IGsuU3BlbmRhYmxlQ29pbnMoc2RrQ3R4LCBhZGRyKQoKCWZvciBfLCBjIDo9IHJhbmdlIGJhbGFuY2VzIHsKCQlyZXN1bHQgPSBhcHBlbmQocmVzdWx0LCBzZGsuTmV3Q29pbihjLkRlbm9tLCBzcGVuZGFibGUuQW1vdW50T2YoYy5EZW5vbSkpKQoJfQoKCXJldHVybiAmYW1wO3R5cGVzLlF1ZXJ5U3BlbmRhYmxlQmFsYW5jZXNSZXNwb25zZXtCYWxhbmNlczogcmVzdWx0LCBQYWdpbmF0aW9uOiBwYWdlUmVzfSwgbmlsCn0KCi8vIFRvdGFsU3VwcGx5IGltcGxlbWVudHMgdGhlIFF1ZXJ5L1RvdGFsU3VwcGx5IGdSUEMgbWV0aG9kCmZ1bmMgKGsgQmFzZUtlZXBlcikgVG90YWxTdXBwbHkoY3R4IGNvbnRleHQuQ29udGV4dCwgcmVxICp0eXBlcy5RdWVyeVRvdGFsU3VwcGx5UmVxdWVzdCkgKCp0eXBlcy5RdWVyeVRvdGFsU3VwcGx5UmVzcG9uc2UsIGVycm9yKSB7CglzZGtDdHggOj0gc2RrLlVud3JhcFNES0NvbnRleHQoY3R4KQoJdG90YWxTdXBwbHksIHBhZ2VSZXMsIGVyciA6PSBrLkdldFBhZ2luYXRlZFRvdGFsU3VwcGx5KHNka0N0eCwgcmVxLlBhZ2luYXRpb24pCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3IoY29kZXMuSW50ZXJuYWwsIGVyci5FcnJvcigpKQoJfQoKCXJldHVybiAmYW1wO3R5cGVzLlF1ZXJ5VG90YWxTdXBwbHlSZXNwb25zZXtTdXBwbHk6IHRvdGFsU3VwcGx5LCBQYWdpbmF0aW9uOiBwYWdlUmVzfSwgbmlsCn0KCi8vIFN1cHBseU9mIGltcGxlbWVudHMgdGhlIFF1ZXJ5L1N1cHBseU9mIGdSUEMgbWV0aG9kCmZ1bmMgKGsgQmFzZUtlZXBlcikgU3VwcGx5T2YoYyBjb250ZXh0LkNvbnRleHQsIHJlcSAqdHlwZXMuUXVlcnlTdXBwbHlPZlJlcXVlc3QpICgqdHlwZXMuUXVlcnlTdXBwbHlPZlJlc3BvbnNlLCBlcnJvcikgewoJaWYgcmVxID09IG5pbCB7CgkJcmV0dXJuIG5pbCwgc3RhdHVzLkVycm9yKGNvZGVzLkludmFsaWRBcmd1bWVudCwgJnF1b3Q7ZW1wdHkgcmVxdWVzdCZxdW90OykKCX0KCglpZiByZXEuRGVub20gPT0gJnF1b3Q7JnF1b3Q7IHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3IoY29kZXMuSW52YWxpZEFyZ3VtZW50LCAmcXVvdDtpbnZhbGlkIGRlbm9tJnF1b3Q7KQoJfQoKCWN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChjKQoJc3VwcGx5IDo9IGsuR2V0U3VwcGx5KGN0eCwgcmVxLkRlbm9tKQoKCXJldHVybiAmYW1wO3R5cGVzLlF1ZXJ5U3VwcGx5T2ZSZXNwb25zZXtBbW91bnQ6IHNkay5OZXdDb2luKHJlcS5EZW5vbSwgc3VwcGx5LkFtb3VudCl9LCBuaWwKfQoKLy8gUGFyYW1zIGltcGxlbWVudHMgdGhlIGdSUEMgc2VydmljZSBoYW5kbGVyIGZvciBxdWVyeWluZyB4L2JhbmsgcGFyYW1ldGVycy4KZnVuYyAoayBCYXNlS2VlcGVyKSBQYXJhbXMoY3R4IGNvbnRleHQuQ29udGV4dCwgcmVxICp0eXBlcy5RdWVyeVBhcmFtc1JlcXVlc3QpICgqdHlwZXMuUXVlcnlQYXJhbXNSZXNwb25zZSwgZXJyb3IpIHsKCWlmIHJlcSA9PSBuaWwgewoJCXJldHVybiBuaWwsIHN0YXR1cy5FcnJvcmYoY29kZXMuSW52YWxpZEFyZ3VtZW50LCAmcXVvdDtlbXB0eSByZXF1ZXN0JnF1b3Q7KQoJfQoKCXNka0N0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChjdHgpCglwYXJhbXMgOj0gay5HZXRQYXJhbXMoc2RrQ3R4KQoKCXJldHVybiAmYW1wO3R5cGVzLlF1ZXJ5UGFyYW1zUmVzcG9uc2V7UGFyYW1zOiBwYXJhbXN9LCBuaWwKfQoKLy8gRGVub21zTWV0YWRhdGEgaW1wbGVtZW50cyBRdWVyeS9EZW5vbXNNZXRhZGF0YSBnUlBDIG1ldGhvZC4KZnVuYyAoayBCYXNlS2VlcGVyKSBEZW5vbXNNZXRhZGF0YShjIGNvbnRleHQuQ29udGV4dCwgcmVxICp0eXBlcy5RdWVyeURlbm9tc01ldGFkYXRhUmVxdWVzdCkgKCp0eXBlcy5RdWVyeURlbm9tc01ldGFkYXRhUmVzcG9uc2UsIGVycm9yKSB7CglpZiByZXEgPT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3JmKGNvZGVzLkludmFsaWRBcmd1bWVudCwgJnF1b3Q7ZW1wdHkgcmVxdWVzdCZxdW90OykKCX0KCgljdHggOj0gc2RrLlVud3JhcFNES0NvbnRleHQoYykKCXN0b3JlIDo9IHByZWZpeC5OZXdTdG9yZShjdHguS1ZTdG9yZShrLnN0b3JlS2V5KSwgdHlwZXMuRGVub21NZXRhZGF0YVByZWZpeCkKCgltZXRhZGF0YXMgOj0gW110eXBlcy5NZXRhZGF0YXt9CglwYWdlUmVzLCBlcnIgOj0gcXVlcnkuUGFnaW5hdGUoc3RvcmUsIHJlcS5QYWdpbmF0aW9uLCBmdW5jKF8sIHZhbHVlIFtdYnl0ZSkgZXJyb3IgewoJCXZhciBtZXRhZGF0YSB0eXBlcy5NZXRhZGF0YQoJCWsuY2RjLk11c3RVbm1hcnNoYWwodmFsdWUsICZhbXA7bWV0YWRhdGEpCgoJCW1ldGFkYXRhcyA9IGFwcGVuZChtZXRhZGF0YXMsIG1ldGFkYXRhKQoJCXJldHVybiBuaWwKCX0pCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3IoY29kZXMuSW50ZXJuYWwsIGVyci5FcnJvcigpKQoJfQoKCXJldHVybiAmYW1wO3R5cGVzLlF1ZXJ5RGVub21zTWV0YWRhdGFSZXNwb25zZXsKCQlNZXRhZGF0YXM6ICBtZXRhZGF0YXMsCgkJUGFnaW5hdGlvbjogcGFnZVJlcywKCX0sIG5pbAp9CgovLyBEZW5vbU1ldGFkYXRhIGltcGxlbWVudHMgUXVlcnkvRGVub21NZXRhZGF0YSBnUlBDIG1ldGhvZC4KZnVuYyAoayBCYXNlS2VlcGVyKSBEZW5vbU1ldGFkYXRhKGMgY29udGV4dC5Db250ZXh0LCByZXEgKnR5cGVzLlF1ZXJ5RGVub21NZXRhZGF0YVJlcXVlc3QpICgqdHlwZXMuUXVlcnlEZW5vbU1ldGFkYXRhUmVzcG9uc2UsIGVycm9yKSB7CglpZiByZXEgPT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3JmKGNvZGVzLkludmFsaWRBcmd1bWVudCwgJnF1b3Q7ZW1wdHkgcmVxdWVzdCZxdW90OykKCX0KCglpZiByZXEuRGVub20gPT0gJnF1b3Q7JnF1b3Q7IHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3IoY29kZXMuSW52YWxpZEFyZ3VtZW50LCAmcXVvdDtpbnZhbGlkIGRlbm9tJnF1b3Q7KQoJfQoKCWN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChjKQoKCW1ldGFkYXRhLCBmb3VuZCA6PSBrLkdldERlbm9tTWV0YURhdGEoY3R4LCByZXEuRGVub20pCglpZiAhZm91bmQgewoJCXJldHVybiBuaWwsIHN0YXR1cy5FcnJvcmYoY29kZXMuTm90Rm91bmQsICZxdW90O2NsaWVudCBtZXRhZGF0YSBmb3IgZGVub20gJXMmcXVvdDssIHJlcS5EZW5vbSkKCX0KCglyZXR1cm4gJmFtcDt0eXBlcy5RdWVyeURlbm9tTWV0YWRhdGFSZXNwb25zZXsKCQlNZXRhZGF0YTogbWV0YWRhdGEsCgl9LCBuaWwKfQoKZnVuYyAoayBCYXNlS2VlcGVyKSBEZW5vbU93bmVycygKCWdvQ3R4IGNvbnRleHQuQ29udGV4dCwKCXJlcSAqdHlwZXMuUXVlcnlEZW5vbU93bmVyc1JlcXVlc3QsCikgKCp0eXBlcy5RdWVyeURlbm9tT3duZXJzUmVzcG9uc2UsIGVycm9yKSB7CglpZiByZXEgPT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3JmKGNvZGVzLkludmFsaWRBcmd1bWVudCwgJnF1b3Q7ZW1wdHkgcmVxdWVzdCZxdW90OykKCX0KCglpZiByZXEuRGVub20gPT0gJnF1b3Q7JnF1b3Q7IHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3IoY29kZXMuSW52YWxpZEFyZ3VtZW50LCAmcXVvdDtlbXB0eSBkZW5vbSZxdW90OykKCX0KCgljdHggOj0gc2RrLlVud3JhcFNES0NvbnRleHQoZ29DdHgpCglkZW5vbVByZWZpeFN0b3JlIDo9IGsuZ2V0RGVub21BZGRyZXNzUHJlZml4U3RvcmUoY3R4LCByZXEuRGVub20pCgoJdmFyIGRlbm9tT3duZXJzIFtdKnR5cGVzLkRlbm9tT3duZXIKCXBhZ2VSZXMsIGVyciA6PSBxdWVyeS5GaWx0ZXJlZFBhZ2luYXRlKAoJCWRlbm9tUHJlZml4U3RvcmUsCgkJcmVxLlBhZ2luYXRpb24sCgkJZnVuYyhrZXkgW11ieXRlLCB2YWx1ZSBbXWJ5dGUsIGFjY3VtdWxhdGUgYm9vbCkgKGJvb2wsIGVycm9yKSB7CgkJCWlmIGFjY3VtdWxhdGUgewoJCQkJYWRkcmVzcywgXywgZXJyIDo9IHR5cGVzLkFkZHJlc3NBbmREZW5vbUZyb21CYWxhbmNlc1N0b3JlKGtleSkKCQkJCWlmIGVyciAhPSBuaWwgewoJCQkJCXJldHVybiBmYWxzZSwgZXJyCgkJCQl9CgoJCQkJZGVub21Pd25lcnMgPSBhcHBlbmQoCgkJCQkJZGVub21Pd25lcnMsCgkJCQkJJmFtcDt0eXBlcy5EZW5vbU93bmVyewoJCQkJCQlBZGRyZXNzOiBhZGRyZXNzLlN0cmluZygpLAoJCQkJCQlCYWxhbmNlOiBrLkdldEJhbGFuY2UoY3R4LCBhZGRyZXNzLCByZXEuRGVub20pLAoJCQkJCX0sCgkJCQkpCgkJCX0KCgkJCXJldHVybiB0cnVlLCBuaWwKCQl9LAoJKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgc3RhdHVzLkVycm9yKGNvZGVzLkludGVybmFsLCBlcnIuRXJyb3IoKSkKCX0KCglyZXR1cm4gJmFtcDt0eXBlcy5RdWVyeURlbm9tT3duZXJzUmVzcG9uc2V7RGVub21Pd25lcnM6IGRlbm9tT3duZXJzLCBQYWdpbmF0aW9uOiBwYWdlUmVzfSwgbmlsCn0K"}})],1),e._v(" "),c("h3",{attrs:{id:"legacy-queriers"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#legacy-queriers"}},[e._v("#")]),e._v(" Legacy Queriers")]),e._v(" "),c("p",[e._v("Module legacy "),c("code",[e._v("querier")]),e._v("s are typically implemented in a "),c("code",[e._v("./keeper/querier.go")]),e._v(" file inside the module's folder. The "),c("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[e._v("module manager")]),e._v(" is used to add the module's "),c("code",[e._v("querier")]),e._v("s to the "),c("RouterLink",{attrs:{to:"/core/baseapp.html#query-routing"}},[e._v("application's "),c("code",[e._v("queryRouter")])]),e._v(" via the "),c("code",[e._v("NewQuerier()")]),e._v(" method. Typically, the manager's "),c("code",[e._v("NewQuerier()")]),e._v(" method simply calls a "),c("code",[e._v("NewQuerier()")]),e._v(" method defined in "),c("code",[e._v("keeper/querier.go")]),e._v(", which looks like the following:")],1),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdRdWVyaWVyKGtlZXBlciBLZWVwZXIpIHNkay5RdWVyaWVyIHsKCXJldHVybiBmdW5jKGN0eCBzZGsuQ29udGV4dCwgcGF0aCBbXXN0cmluZywgcmVxIGFiY2kuUmVxdWVzdFF1ZXJ5KSAoW11ieXRlLCBlcnJvcikgewoJCXN3aXRjaCBwYXRoWzBdIHsKCQljYXNlIFF1ZXJ5VHlwZTE6CgkJCXJldHVybiBxdWVyeVR5cGUxKGN0eCwgcGF0aFsxOl0sIHJlcSwga2VlcGVyKQoKCQljYXNlIFF1ZXJ5VHlwZTI6CgkJCXJldHVybiBxdWVyeVR5cGUyKGN0eCwgcGF0aFsxOl0sIHJlcSwga2VlcGVyKQoKCQlkZWZhdWx0OgoJCQlyZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcGYoc2RrZXJyb3JzLkVyclVua25vd25SZXF1ZXN0LCAmcXVvdDt1bmtub3duICVzIHF1ZXJ5IGVuZHBvaW50OiAlcyZxdW90OywgdHlwZXMuTW9kdWxlTmFtZSwgcGF0aFswXSkKCQl9Cgl9Cn0K"}}),e._v(" "),c("p",[e._v("This simple switch returns a "),c("code",[e._v("querier")]),e._v(" function specific to the type of the received "),c("code",[e._v("query")]),e._v(". At this point of the "),c("RouterLink",{attrs:{to:"/basics/query-lifecycle.html"}},[e._v("query lifecycle")]),e._v(", the first element of the "),c("code",[e._v("path")]),e._v(" ("),c("code",[e._v("path[0]")]),e._v(") contains the type of the query. The following elements are either empty or contain arguments needed to process the query.")],1),e._v(" "),c("p",[e._v("The "),c("code",[e._v("querier")]),e._v(" functions themselves are pretty straightforward. They generally fetch a value or values from the state using the "),c("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[c("code",[e._v("keeper")])]),e._v(". Then, they marshall the value(s) using the "),c("RouterLink",{attrs:{to:"/core/encoding.html"}},[c("code",[e._v("codec")])]),e._v(" and return the "),c("code",[e._v("[]byte")]),e._v(" obtained as result.")],1),e._v(" "),c("p",[e._v("For a deeper look at "),c("code",[e._v("querier")]),e._v("s, see this "),c("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/x/gov/keeper/querier.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("example implementation of a "),c("code",[e._v("querier")]),e._v(" function"),c("OutboundLink")],1),e._v(" from the bank module.")]),e._v(" "),c("h2",{attrs:{hide:"",id:"next"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),c("p",{attrs:{hide:""}},[e._v("Learn about "),c("RouterLink",{attrs:{to:"/building-modules/beginblock-endblock.html"}},[c("code",[e._v("BeginBlocker")]),e._v(" and "),c("code",[e._v("EndBlocker")])])],1)],1)}),[],!1,null,null,null);l.default=t.exports}}]);
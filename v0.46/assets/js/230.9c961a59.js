(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{754:function(a,t,e){"use strict";e.r(t);var n=e(1),l=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"begin-block"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#begin-block"}},[a._v("#")]),a._v(" Begin-Block")]),a._v(" "),e("p",[a._v("Minting parameters are recalculated and inflation\npaid at the beginning of each block.")]),a._v(" "),e("h2",{attrs:{id:"inflation-rate-calculation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inflation-rate-calculation"}},[a._v("#")]),a._v(" Inflation rate calculation")]),a._v(" "),e("p",[a._v('Inflation rate is calculated using an "inflation calculation function" that\'s\npassed to the '),e("code",[a._v("NewAppModule")]),a._v(" function. If no function is passed, then the SDK's\ndefault inflation function will be used ("),e("code",[a._v("NextInflationRate")]),a._v("). In case a custom\ninflation calculation logic is needed, this can be achieved by defining and\npassing a function that matches "),e("code",[a._v("InflationCalculationFn")]),a._v("'s signature.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBJbmZsYXRpb25DYWxjdWxhdGlvbkZuIGZ1bmMoY3R4IHNkay5Db250ZXh0LCBtaW50ZXIgTWludGVyLCBwYXJhbXMgUGFyYW1zLCBib25kZWRSYXRpbyBzZGsuRGVjKSBzZGsuRGVjCg=="}}),a._v(" "),e("h3",{attrs:{id:"nextinflationrate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nextinflationrate"}},[a._v("#")]),a._v(" NextInflationRate")]),a._v(" "),e("p",[a._v("The target annual inflation rate is recalculated each block.\nThe inflation is also subject to a rate change (positive or negative)\ndepending on the distance from the desired ratio (67%). The maximum rate change\npossible is defined to be 13% per year, however the annual inflation is capped\nas between 7% and 20%.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"TmV4dEluZmxhdGlvblJhdGUocGFyYW1zIFBhcmFtcywgYm9uZGVkUmF0aW8gc2RrLkRlYykgKGluZmxhdGlvbiBzZGsuRGVjKSB7CglpbmZsYXRpb25SYXRlQ2hhbmdlUGVyWWVhciA9ICgxIC0gYm9uZGVkUmF0aW8vcGFyYW1zLkdvYWxCb25kZWQpICogcGFyYW1zLkluZmxhdGlvblJhdGVDaGFuZ2UKCWluZmxhdGlvblJhdGVDaGFuZ2UgPSBpbmZsYXRpb25SYXRlQ2hhbmdlUGVyWWVhci9ibG9ja3NQZXJZcgoKCS8vIGluY3JlYXNlIHRoZSBuZXcgYW5udWFsIGluZmxhdGlvbiBmb3IgdGhpcyBuZXh0IGN5Y2xlCglpbmZsYXRpb24gKz0gaW5mbGF0aW9uUmF0ZUNoYW5nZQoJaWYgaW5mbGF0aW9uICZndDsgcGFyYW1zLkluZmxhdGlvbk1heCB7CgkJaW5mbGF0aW9uID0gcGFyYW1zLkluZmxhdGlvbk1heAoJfQoJaWYgaW5mbGF0aW9uICZsdDsgcGFyYW1zLkluZmxhdGlvbk1pbiB7CgkJaW5mbGF0aW9uID0gcGFyYW1zLkluZmxhdGlvbk1pbgoJfQoKCXJldHVybiBpbmZsYXRpb24KfQo="}}),a._v(" "),e("h2",{attrs:{id:"nextannualprovisions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nextannualprovisions"}},[a._v("#")]),a._v(" NextAnnualProvisions")]),a._v(" "),e("p",[a._v("Calculate the annual provisions based on current total supply and inflation\nrate. This parameter is calculated once per block.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"TmV4dEFubnVhbFByb3Zpc2lvbnMocGFyYW1zIFBhcmFtcywgdG90YWxTdXBwbHkgc2RrLkRlYykgKHByb3Zpc2lvbnMgc2RrLkRlYykgewoJcmV0dXJuIEluZmxhdGlvbiAqIHRvdGFsU3VwcGx5Cg=="}}),a._v(" "),e("h2",{attrs:{id:"blockprovision"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blockprovision"}},[a._v("#")]),a._v(" BlockProvision")]),a._v(" "),e("p",[a._v("Calculate the provisions generated for each block based on current annual provisions. The provisions are then minted by the "),e("code",[a._v("mint")]),a._v(" module's "),e("code",[a._v("ModuleMinterAccount")]),a._v(" and then transferred to the "),e("code",[a._v("auth")]),a._v("'s "),e("code",[a._v("FeeCollector")]),a._v(" "),e("code",[a._v("ModuleAccount")]),a._v(".")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"QmxvY2tQcm92aXNpb24ocGFyYW1zIFBhcmFtcykgc2RrLkNvaW4gewoJcHJvdmlzaW9uQW10ID0gQW5udWFsUHJvdmlzaW9ucy8gcGFyYW1zLkJsb2Nrc1BlclllYXIKCXJldHVybiBzZGsuTmV3Q29pbihwYXJhbXMuTWludERlbm9tLCBwcm92aXNpb25BbXQuVHJ1bmNhdGUoKSkK"}})],1)}),[],!1,null,null,null);t.default=l.exports}}]);
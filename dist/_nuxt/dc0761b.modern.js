(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{723:function(t,e,o){var content=o(805);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("32b4abe2",content,!0,{sourceMap:!1})},804:function(t,e,o){"use strict";o(723)},805:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,'html[data-v-7b099714]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-7b099714],h2[data-v-7b099714],h3[data-v-7b099714]{margin:0;color:var(--c-font-2);font-size:18px;font-weight:600;font-family:"Nunito","Roboto",sans-serif}.startSomething[data-v-7b099714]{display:flex;align-items:center;justify-content:center;padding:100px 0;flex-flow:column}.startSomething .options__item[data-v-7b099714]{margin-bottom:40px;padding:0 10px}.startSomething .options__text[data-v-7b099714]{padding-bottom:20px;text-align:center}.startSomething .options__or[data-v-7b099714]{position:relative;display:flex;align-items:center;justify-content:center;padding:26px 0;color:var(--c-font-3);text-align:center}.startSomething .options__or__text[data-v-7b099714]{position:relative;padding:16px;background:var(--c-bg-3)}.startSomething .options__or__border[data-v-7b099714]{position:absolute;top:50%;left:0;width:100%;height:1px;background:var(--c-bg-6)}',""]),n.locals={},t.exports=n},868:function(t,e,o){"use strict";o.r(e);var n={name:"StatNoStatActions"},r=(o(804),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"startSomething"},[t.$store.getters["wallets/hasWallets"]&&t.$store.getters["categories/hasCategories"]?o("div",{staticClass:"options__item"},[o("SharedButton",{staticClass:"_grey _center",attrs:{title:t.$t("createTrn")},on:{onClick:function(e){return t.$store.dispatch("trnForm/openTrnForm",{action:"create"})}}})],1):t._e(),t.$store.getters["wallets/hasWallets"]||t.$store.getters["categories/hasCategories"]?t._e():o("div",{staticClass:"options__item"},[o("div",{staticClass:"options__text"},[t._v(t._s(t.$t("welcome.firstRun.text")))]),o("SharedButton",{staticClass:"_text-center _blue2",attrs:{title:t.$t("welcome.firstRun.btn")},on:{onClick:function(e){return t.$router.push("/welcome")}}})],1)])}),[],!1,null,"7b099714",null);e.default=component.exports;installComponents(component,{SharedButton:o(225).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{694:function(t,e,n){var content=n(697);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("2becab96",content,!0,{sourceMap:!1})},696:function(t,e,n){"use strict";n(694)},697:function(t,e,n){var o=n(22)((function(i){return i[1]}));o.push([t.i,'html[data-v-63c4ed39]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-63c4ed39],h2[data-v-63c4ed39],h3[data-v-63c4ed39]{margin:0;color:var(--c-font-2);font-size:18px;font-weight:600;font-family:"Nunito","Roboto",sans-serif}.handler[data-v-63c4ed39]{z-index:2;position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:16px}.handler[data-v-63c4ed39]:after{content:"";display:block;width:32px;height:4px;background:var(--c-bg-8);border-radius:4px}.content[data-v-63c4ed39]{overflow:hidden;display:grid;padding-top:16px;background:var(--c-bg-3);border-radius:20px 20px 0 0}@media (min-width:600px){.content[data-v-63c4ed39]{border-radius:16px}}.content._withHeader[data-v-63c4ed39]{grid-template-rows:minmax(-webkit-min-content,auto) minmax(50px,-webkit-min-content);grid-template-rows:minmax(min-content,auto) minmax(50px,min-content)}.header[data-v-63c4ed39]{position:relative;display:flex;align-items:center;justify-content:center;padding:4px 16px 20px;color:var(--c-font-3);font-size:22px;font-weight:700;letter-spacing:1px;font-family:"Nunito","Roboto",sans-serif}.light .header[data-v-63c4ed39]{color:var(--c-font-4)}',""]),o.locals={},t.exports=o},699:function(t,e,n){"use strict";n.r(e);var o=n(2),d=Object(o.defineComponent)({setup:function(){var t=Object(o.ref)("100%");return Object(o.onMounted)((function(){t.value="".concat(document.documentElement.clientHeight,"px")})),{documentHeight:t}}}),c=(n(696),n(5)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Portal",{attrs:{to:"modal"}},[n("BaseBottomSheet",{attrs:{show:""},on:{closed:function(e){return t.$emit("closed")}},scopedSlots:t._u([{key:"handler",fn:function(t){var e=t.close;return[n("div",{staticClass:"handler"}),n("BaseBottomSheetClose",{on:{onClick:e}})]}},{key:"default",fn:function(e){var o=e.close;return[n("div",{staticClass:"content",class:{_withHeader:t.$slots.header},style:{maxHeight:t.documentHeight}},[t.$slots.header?n("div",{staticClass:"header"},[t._t("header")],2):t._e(),t._t("default",null,{close:o})],2)]}}],null,!0)})],1)}),[],!1,null,"63c4ed39",null);e.default=component.exports;installComponents(component,{BaseBottomSheetClose:n(145).default,BaseBottomSheet:n(405).default})}}]);
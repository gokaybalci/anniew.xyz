(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{695:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var n=r(19),o=r(2),c=r(8);r(13),r(9),r(12),r(11),r(29),r(20),r(30);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function f(){var t=Object(n.e)().$store,e=Object(o.computed)((function(){return t.state.ui.activeTabStat})),r=Object(o.computed)((function(){return t.getters["stat/statCurrentPeriod"]})),c=Object(o.computed)((function(){return t.getters["stat/statAverage"]})),d=Object(o.computed)((function(){return t.state.filter.period})),filter=Object(o.computed)((function(){return t.state.filter})),f=Object(o.computed)((function(){return t.state.filter.date})),v=Object(o.computed)((function(){return!!t.state.filter.categoryId||!!t.state.filter.walletId})),y=Object(o.computed)((function(){return t.getters["trns/hasTrns"]}));return{statPage:Object(o.reactive)({activeTab:e,average:c,current:r,filter:l(l({},filter),{},{isShow:v,period:d,date:f}),isHasTrns:y})}}},698:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(19),o=r(2),c=[{id:"expenses",type:0},{id:"incomes",type:1}];function d(){var t=Object(n.e)().$store,e=Object(o.computed)((function(){var e=t.getters["stat/statCurrentPeriod"];return"details"===t.state.ui.activeTabStat?0===e.total:"incomes"===t.state.ui.activeTabStat?0===e.incomes.total:"expenses"===t.state.ui.activeTabStat?0===e.expenses.total:void 0}));return{moneyTypes:c,isEmptyStat:e}}},750:function(t,e,r){var content=r(797);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("09d3a3fe",content,!0,{sourceMap:!1})},796:function(t,e,r){"use strict";r(750)},797:function(t,e,r){var n=r(22)((function(i){return i[1]}));n.push([t.i,'html[data-v-a915dd64]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-a915dd64],h2[data-v-a915dd64],h3[data-v-a915dd64]{margin:0;color:var(--c-font-2);font-size:18px;font-weight:600;font-family:"Nunito","Roboto",sans-serif}.items[data-v-a915dd64]{grid-template-columns:repeat(auto-fill,minmax(var(--minWidth),1fr))}',""]),n.locals={},t.exports=n},860:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(86),r(9),r(58),r(698)),c=r(695),d=r(147),l=Object(n.defineComponent)({props:{typeText:{type:String,required:!0}},setup:function(t){var e,r=Object(n.toRefs)(t).typeText,l=Object(c.a)().statPage,f=Object(o.a)().moneyTypes,v=Object(d.a)().ui,y=Object(n.ref)(null),m=Object(n.ref)(null),O=Object(n.computed)((function(){var t,e;return v.showRoundCats&&(null===(t=l.current[r.value])||void 0===t||null===(e=t.categoriesIds)||void 0===e?void 0:e.length)})),j=null===(e=f.find((function(t){return t.id===r.value})))||void 0===e?void 0:e.type;return Object(n.watch)((function(){var t;return null===(t=l.current[r.value])||void 0===t?void 0:t.categoriesIds}),(function(){setTimeout((function(){var t,e,n,o=60;if(n="incomes"===r.value?null===(t=y.value)||void 0===t?void 0:t.querySelectorAll(".js-getWidth"):null===(e=m.value)||void 0===e?void 0:e.querySelectorAll(".js-getWidth")){for(var c in n)n[c].clientWidth>o&&(o=n[c].clientWidth);"incomes"===r.value?y.value.style.setProperty("--minWidth","".concat(o+12,"px")):m.value.style.setProperty("--minWidth","".concat(o+12,"px"))}}),100)}),{immediate:!0}),{statPage:l,isShow:O,typeNumber:j,incomesRef:y,expensesRef:m}}}),f=(r(796),r(5)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isShow?r("div",{staticClass:"pb-5"},[r("div",{ref:t.typeText+"Ref",staticClass:"items grid"},[t._l(t.statPage.current[t.typeText].categoriesIds,(function(e){return t.isShow?r("LazyStatItemRound",{key:e,attrs:{category:t.$store.state.categories.items[e],categoryId:e,currency:t.$store.state.currencies.base,total:t.statPage.current.categories[e][t.typeText],type:t.typeNumber}}):t._e()})),t.statPage.filter.categoryId?[t._l(t.$store.getters["categories/getChildCategoriesIds"](t.statPage.filter.categoryId),(function(e){return[t.statPage.current[t.typeText].categoriesIds.includes(e)?t._e():[t.statPage.filter.categoryId?r("LazyStatItemRound",{key:e,attrs:{category:t.$store.state.categories.items[e],categoryId:e,currency:t.$store.state.currencies.base,total:0,type:t.typeNumber}}):t._e()]]}))]:t._e()],2)]):t._e()}),[],!1,null,"a915dd64",null);e.default=component.exports}}]);
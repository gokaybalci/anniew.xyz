(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{598:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var c=r(13),n=r(2),o=r(8);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(){var{$store:t}=Object(c.e)(),e=Object(n.computed)((()=>t.state.ui.activeTabStat)),r=Object(n.computed)((()=>t.getters["stat/statCurrentPeriod"])),o=Object(n.computed)((()=>t.getters["stat/statAverage"])),O=Object(n.computed)((()=>t.state.filter.period)),filter=Object(n.computed)((()=>t.state.filter)),d=Object(n.computed)((()=>t.state.filter.date)),j=Object(n.computed)((()=>!!t.state.filter.categoryId||!!t.state.filter.walletId)),f=Object(n.computed)((()=>t.getters["trns/hasTrns"]));return{statPage:Object(n.reactive)({activeTab:e,average:o,current:r,filter:l(l({},filter),{},{isShow:j,period:O,date:d}),isHasTrns:f})}}},761:function(t,e,r){"use strict";r.r(e);var c=r(2),n=r(598),o=r(103),O=Object(c.defineComponent)({props:{typeText:{type:String,required:!0}},setup(t){var{typeText:e}=Object(c.toRefs)(t),{statPage:r}=Object(n.a)(),{ui:O}=Object(o.a)();return{isShow:Object(c.computed)((()=>{var t,c;return O.showCatsVerticalChart&&(null===(t=r.current[e.value])||void 0===t||null===(c=t.categoriesIds)||void 0===c?void 0:c.length)}))}}}),l=r(5),component=Object(l.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isShow?r("LazyStatCatsPeriodCatsChart",{attrs:{type:t.typeText}}):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[58,59],{654:function(t,e,o){var content=o(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("03137396",content,!0,{sourceMap:!1})},701:function(t,e,o){"use strict";o(654)},702:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,'html[data-v-3e3ed72e]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-3e3ed72e],h2[data-v-3e3ed72e],h3[data-v-3e3ed72e]{margin:0;color:var(--c-font-2);font-size:18px;font-weight:600;font-family:"Nunito","Roboto",sans-serif}.summaryRowItem[data-v-3e3ed72e]{flex:1 0 0;position:relative;display:flex;justify-content:center;flex-flow:column}.summaryRowItem__title[data-v-3e3ed72e]{padding-bottom:6px;color:var(--c-font-4);font-size:12px}',""]),n.locals={},t.exports=n},728:function(t,e,o){var content=o(815);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("1d854361",content,!0,{sourceMap:!1})},764:function(t,e,o){"use strict";o.r(e);o(2);var n={name:"SummaryRowItem",props:{name:{type:String,required:!0},amount:{type:Number,required:!0},type:{type:Number,required:!0}},computed:{className(){return{_expenses:0===this.type,_incomes:1===this.type}}}},r=(o(701),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"summaryRowItem",class:t.className},[o("div",{staticClass:"summaryRowItem__title"},[t._v(t._s(t.name))]),o("div",{staticClass:"summaryRowItem__amount"},[o("Amount",{attrs:{currency:t.$store.state.currencies.base,type:t.type,value:t.amount||0,size:"md",vertical:"left"}})],1)])}),[],!1,null,"3e3ed72e",null);e.default=component.exports;installComponents(component,{Amount:o(100).default})},814:function(t,e,o){"use strict";o(728)},815:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,'html[data-v-8da4da24]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-8da4da24],h2[data-v-8da4da24],h3[data-v-8da4da24]{margin:0;color:var(--c-font-2);font-size:18px;font-weight:600;font-family:"Nunito","Roboto",sans-serif}.summary[data-v-8da4da24]{padding:0 16px 26px}.summary__name[data-v-8da4da24]{padding-bottom:10px;color:var(--c-font-2);font-size:18px;font-weight:600;white-space:nowrap;text-transform:uppercase;letter-spacing:.5px;font-family:"Unica One","Roboto Condensed",sans-serif}.summary__content[data-v-8da4da24]{display:flex}',""]),n.locals={},t.exports=n},873:function(t,e,o){"use strict";o.r(e);o(2);var n={name:"SummaryAverage",computed:{statCurrentPeriod(){return this.$store.getters["stat/statCurrentPeriod"]},statAverage(){return this.$store.getters["stat/statAverage"]}}},r=(o(814),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"summary"},[o("div",{staticClass:"summary__name"},[t._v(t._s(t.$t("stat.title"))+" "+t._s(t.$t("for"))+" "+t._s(Object.keys(t.$store.getters["stat/statByPeriods"]).length)+" "+t._s(t.$t("dates."+t.$store.state.filter.period+".simple")))]),o("div",{staticClass:"summary__content"},[0!==t.statAverage.incomes?o("SummaryRowItem",{attrs:{amount:t.statAverage.incomes,type:1,name:t.$t("money.average.incomes")}}):t._e(),0!==t.statAverage.expenses?o("SummaryRowItem",{attrs:{amount:t.statAverage.expenses,type:0,name:t.$t("money.average.expenses")}}):t._e(),0!==t.statAverage.total?o("SummaryRowItem",{attrs:{amount:t.statAverage.total,name:t.$t("money.averageTotal")}}):t._e()],1)])}),[],!1,null,"8da4da24",null);e.default=component.exports;installComponents(component,{SummaryRowItem:o(764).default})}}]);
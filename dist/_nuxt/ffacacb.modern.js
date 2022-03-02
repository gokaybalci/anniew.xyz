(window.webpackJsonp=window.webpackJsonp||[]).push([[1,48,72,73],{603:function(t,e,r){var content=r(608);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("0f95d04a",content,!0,{sourceMap:!1})},605:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(13),c=(r(50),r(9),r(10),r(37)),d=r(56),l=Object(n.defineComponent)({props:{categoryId:{type:String,default:null},expenses:{type:Boolean,default:!1},incomes:{type:Boolean,default:!1},isShowFilter:{type:Boolean,default:!1},limit:{type:Number,default:0},size:{type:Number,required:!1,default:30},ui:{type:String,default:"history"},classNames:{type:String,default:""}},setup(){var{$store:t}=Object(o.e)(),{setExpression:e}=Object(c.a)(),{setCategoryFilter:r}=Object(d.a)();return{actions:n=>({onOpenDetails:()=>{t.state.trns.modal.show||(t.commit("categories/hideCategoryModal"),t.commit("trns/showTrnModal"),t.commit("trns/setTrnModalId",n.id))},onOpenEdit:r=>{r.stopPropagation(),e(n.amount),t.dispatch("trnForm/openTrnForm",{action:"edit",trnId:n.id}),t.commit("stat/setCategoryModal",{id:null,type:null})},onSetFilter:e=>{e.stopPropagation(),r(n.categoryId),t.commit("filter/setFilterDateNow"),t.commit("trns/hideTrnModal"),t.commit("trns/setTrnModalId",null),t.commit("stat/setCategoryModal",{id:null,type:null}),t.dispatch("ui/setActiveTabStat","details")}})}},data:()=>({pageNumber:1,isShowTrnsWithDesc:!1}),computed:{trnsIds(){var t=this.$store.state.trns.items,e=this.$store.getters["trns/selectedTrnsIdsWithDate"];return this.categoryId&&(e=e.filter((e=>t[e].categoryId===this.categoryId))),this.incomes&&(e=e.filter((e=>1===t[e].type))),this.expenses&&(e=e.filter((e=>0===t[e].type))),e},isShowedAllTrns(){return this.paginatedTrnsIds.length===this.trnsIdsWithLimit.length},isTrnsWithDescription(){var t=this.$store.state.trns.items;return this.trnsIds.filter((e=>t[e].description)).length>0},trnsIdsWithLimit(){var t=this.$store.state.trns.items;return this.isShowFilter&&this.isShowTrnsWithDesc&&this.isTrnsWithDescription?this.trnsIds.filter((e=>t[e].description)):this.limit>0?this.trnsIds.slice(0,this.limit):this.trnsIds},paginatedTrnsIds(){var t=this.pageNumber*this.size;return this.trnsIdsWithLimit.slice(0,t)},groupedTrns(){var t=this.$store.state.trns.items,e={};for(var r of this.paginatedTrnsIds){var n=this.$day(t[r].date).startOf("day").valueOf();e[n]?e[n].push(r):e[n]=[r]}return e}},methods:{showMoreTrns(){this.pageNumber=this.pageNumber+1},showTrnsWithDesc(){this.isShowTrnsWithDesc=!this.isShowTrnsWithDesc}}}),h=(r(607),r(5)),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isShowFilter&&t.isTrnsWithDescription?r("div",{staticClass:"flex pb-3"},[r("SharedContextMenuItem",{attrs:{checkboxValue:t.isShowTrnsWithDesc,grow:!1,title:t.$t("trns.filter.showTrnsWithDesc"),icon:"mdi mdi-comment-text-outline",showCheckbox:""},on:{onClick:function(e){t.isShowTrnsWithDesc=!t.isShowTrnsWithDesc}}})],1):t._e(),t.trnsIds.length>0?r("div",["history"===t.ui?r("div",{staticClass:"grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-20",class:t.classNames},t._l(t.groupedTrns,(function(e,n){return r("div",{key:n,staticClass:"overflow-hidden rounded-md bg-white2 shadow-sm dark:bg-dark4"},[r("div",{staticClass:"pt-4"},[r("div",{staticClass:"pb-2 px-3"},[r("TrnsListDate",{attrs:{date:n}})],1),r("div",{staticClass:"overflow-hidden rounded-md"},t._l(e,(function(e){return r("TrnsItemHistory",{key:e,staticClass:"py-3 px-3 cursor-pointer",attrs:{actions:t.actions,trnId:e}})})),1)])])})),0):r("div",t._l(t.paginatedTrnsIds,(function(e){return r("TrnsItemWithoutCat",{key:e,staticClass:"py-3 px-3 cursor-pointer",attrs:{actions:t.actions,trnId:e}})})),1)]):t._e(),t.isShowedAllTrns?t._e():r("div",{staticClass:"py-4"},[r("div",{staticClass:"button",on:{click:t.showMoreTrns}},[t._v(t._s(t.$t("trns.more")))])])])}),[],!1,null,"72e4bdf1",null);e.default=component.exports;installComponents(component,{SharedContextMenuItem:r(336).default,TrnsListDate:r(339).default,TrnsItemHistory:r(338).default,TrnsItemWithoutCat:r(606).default})},606:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(226),c=Object(n.defineComponent)({props:{actions:{type:Object,required:!1,default:()=>({})},trnId:{type:String,required:!0}},setup(t){var{trnId:e,actions:r}=t,{formatTrnItem:c,formatDate:d}=Object(o.a)(),l=Object(n.computed)((()=>c(e))),{onOpenDetails:h,onOpenEdit:m,onSetFilter:f}=r(l.value);return{trnItem:l,onOpenDetails:h,onOpenEdit:m,onSetFilter:f,formatDate:d}}}),d=r(5),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cursor-context-menu space-x-4 flex text-neutral-500 dark:text-neutral-400 hocus:bg-neutral-100 dark:hocus:bg-neutral-800",on:{click:t.onOpenDetails}},[r("div",{staticClass:"truncate shrink-0 text-xs leading-none pt-[1px] min-w-[32px]"},[t._v(t._s(t.$t(t.formatDate(t.trnItem.date,"trnItem"))))]),r("div",{staticClass:"grow"},[r("div",{staticClass:"items-center flex"},[r("div",{staticClass:"grow"},[r("div",{staticClass:"space-x-2 items-baseline flex"},[2!==t.trnItem.type?r("div",{staticClass:"text-xs leading-none"},[t._v(t._s(t.trnItem.wallet.name))]):t._e(),t.trnItem.groups?r("div",{staticClass:"text-neutral-500 text-xs leading-none"},[t._v("In group")]):t._e()]),2===t.trnItem.type?r("div",{staticClass:"text-sm"},[r("div",{staticClass:"space-x-1 items-center flex"},[r("div",{staticClass:"text-neutral-600 dark:text-neutral-500"},[t._v(t._s(t.$t("trnForm.transfer.from"))+":")]),r("div",{staticClass:"text-neutral-500 dark:text-neutral-400"},[t._v(t._s(t.trnItem.walletFrom.name))])]),r("div",{staticClass:"space-x-1 items-center flex"},[r("div",{staticClass:"text-neutral-600 dark:text-neutral-500"},[t._v(t._s(t.$t("trnForm.transfer.to"))+":")]),r("div",{staticClass:"text-neutral-500 dark:text-neutral-400"},[t._v(t._s(t.trnItem.walletTo.name))])])]):t._e()]),r("div",{staticClass:"cursor-pointer"},[r("Amount2",{attrs:{amount:t.trnItem.amount,currency:t.trnItem.wallet.currency,type:t.trnItem.type,colorize:"incomes"},on:{click:t.onOpenEdit}})],1)]),t.trnItem.description?r("div",{staticClass:"pt-1 text-neutral-500 text-xs"},[t._v(t._s(t.trnItem.description))]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Amount2:r(340).default})},607:function(t,e,r){"use strict";r(603)},608:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,'html[data-v-72e4bdf1]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-72e4bdf1],h2[data-v-72e4bdf1],h3[data-v-72e4bdf1]{margin:0;color:var(--c-font-2);font-size:18px;font-weight:600;font-family:"Nunito","Roboto",sans-serif}.button[data-v-72e4bdf1]{cursor:pointer;display:flex;flex:1 1 50%;align-items:center;justify-content:center;height:44px;max-width:280px;margin:0 auto;padding:0 26px;color:var(--c-text-4);font-size:12px;text-decoration:none;background:var(--c-item-bg-main);border:1px solid var(--c-bg-4);border-radius:26px;transition:.3s cubic-bezier(.17,.04,.03,1)}.button[data-v-72e4bdf1]:active,.isNotTouchDevice .button[data-v-72e4bdf1]:hover{color:var(--c-text-1);background:var(--c-item-bg-hover);border:1px solid var(--c-item-bd-hover)}@media (min-width:700px){.button[data-v-72e4bdf1]{height:48px;max-width:280px}}',""]),n.locals={},t.exports=n},643:function(t,e,r){var content=r(679);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("aaccdebc",content,!0,{sourceMap:!1})},644:function(t,e,r){var content=r(681);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("163c3fd3",content,!0,{sourceMap:!1})},678:function(t,e,r){"use strict";r(643)},679:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,'html{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1,h2,h3{margin:0;color:var(--c-font-2);font-size:18px;font-weight:600;font-family:"Nunito","Roboto",sans-serif}.statItemChild .trnItem._stat{padding-right:6px;padding-left:10px}.statItemChild__icon .icon{width:36px!important;height:36px!important;background:var(--c-bg-4)}.statItemChild__icon .icon .icon__image{font-size:22px}',""]),n.locals={},t.exports=n},680:function(t,e,r){"use strict";r(644)},681:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,'html[data-v-ee4500ea]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-ee4500ea],h2[data-v-ee4500ea],h3[data-v-ee4500ea]{margin:0;color:var(--c-font-2);font-size:18px;font-weight:600;font-family:"Nunito","Roboto",sans-serif}.ins[data-v-ee4500ea],.ins2[data-v-ee4500ea]{position:relative;background:var(--c-item2-bg-hover)}.ins[data-v-ee4500ea]:active,.isNotTouchDevice .ins[data-v-ee4500ea]:hover{background:var(--c-item-bg-hover)}.statItem__graph__in[data-v-ee4500ea]{height:4px;min-width:2px;border-radius:3px}.statItem__name[data-v-ee4500ea]{overflow:hidden;align-self:center;color:var(--c-font-4);font-size:14px;white-space:nowrap;text-overflow:ellipsis}.statItem__icon[data-v-ee4500ea]{width:32px}',""]),n.locals={},t.exports=n},748:function(t,e,r){"use strict";r.r(e);r(2);var n=r(8);r(9),r(10),r(62);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={name:"StatItemChildCats",props:{categoryId:{type:String,required:!0},type:{type:Number,required:!0}},computed:{statCategories(){var t=this.$store.getters["categories/getChildCategoriesIds"](this.categoryId),e=[];for(var r of t){var n=this.getTrnsByCategoryId(r);if(n.length>0){var o=this.getCategoryStat({categoryId:r,trnsIds:n});e.push(o)}}return e=e.sort(((a,b)=>a[this.typeName]>b[this.typeName]?-1:a[this.typeName]<b[this.typeName]?1:0))},typeName(){return 1===this.type?"incomes":"expenses"}},methods:{getTrnsByCategoryId(t){var e=this.$store.state.trns.items,r=this.$store.getters["trns/selectedTrnsIdsWithDate"];return r=(r=r.filter((r=>e[r].categoryId===t))).filter((t=>e[t].type===this.type))},getCategoryStat(t){var{categoryId:e,trnsIds:r}=t;return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({categoryId:e},this.$store.getters["trns/getTotalOfTrnsIds"](r))}}},d=c,l=r(5),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.statCategories,(function(e){return[r("StatItemChildCatsItem",{key:e.categoryId,attrs:{biggest:t.$store.getters["stat/statCurrentPeriod"][t.typeName].biggest,category:t.$store.state.categories.items[e.categoryId],categoryId:e.categoryId,type:t.type,total:e[t.typeName]}})]}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{StatItemChildCatsItem:r(749).default})},749:function(t,e,r){"use strict";r.r(e);r(2);var n=r(56),o={props:{biggest:{type:Number,required:!0},category:{type:Object,required:!0},categoryId:{type:String,required:!0},total:{type:Number,required:!0},type:{type:Number,required:!0}},setup(){var{setCategoryFilter:t}=Object(n.a)();return{setCategoryFilter:t}},data:()=>({isShowInside:!1}),computed:{styles(){return{width:"".concat(Math.abs(this.total)/Math.abs(this.biggest)*100,"%"),background:this.category.color}}},methods:{toogleShowInside(){this.isShowInside=!this.isShowInside}}},c=(r(678),r(680),r(5)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"statItem",class:{_active:t.isShowInside},on:{click:t.toogleShowInside}},[r("div",{staticClass:"ins py-2 px-3 space-x-3 justify-between items-center flex border-t",class:[{_active:t.isShowInside},{"border-b-0 cursor-n-resize":t.isShowInside},{"cursor-s-resize":!t.isShowInside},"dark:border-neutral-800"]},[r("div",{staticClass:"text-neutral-50 text-xl leading-none w-8 h-8 rounded-full justify-center items-center flex",style:{background:t.category.color},on:{click:function(e){return e.stopPropagation(),t.setCategoryFilter(t.categoryId)}}},[r("div",{class:t.category.icon})]),r("div",{staticClass:"grow"},[r("div",{staticClass:"space-x-3 flex"},[r("div",{staticClass:"grow statItem__name"},[t._v(t._s(t.category.name))]),r("div",{staticClass:"statItem__amount"},[r("Amount",{attrs:{currency:t.$store.state.currencies.base,value:t.total,type:t.type,isColorize:!1,isShowPrefix:""}})],1)])])]),t.isShowInside?r("div",{staticClass:"statItemChild__trns",on:{click:function(t){t.stopPropagation()}}},[r("TrnsList",{attrs:{incomes:1===t.type,expenses:0===t.type,categoryId:t.categoryId,ui:"stat"}})],1):t._e()])}),[],!1,null,"ee4500ea",null);e.default=component.exports;installComponents(component,{Amount:r(100).default,TrnsList:r(605).default})}}]);
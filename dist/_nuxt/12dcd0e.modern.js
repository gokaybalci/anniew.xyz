(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{609:function(t,e,r){var content=r(623);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("1ee06c11",content,!0,{sourceMap:!1})},622:function(t,e,r){"use strict";r(609)},623:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,'html[data-v-264cd6c4]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-264cd6c4],h2[data-v-264cd6c4],h3[data-v-264cd6c4]{margin:0;color:var(--c-font-2);font-size:18px;font-weight:600;font-family:"Nunito","Roboto",sans-serif}.button[data-v-264cd6c4]{cursor:pointer;display:flex;flex:1 1 50%;align-items:center;justify-content:center;height:44px;max-width:280px;margin:0 auto;padding:0 26px;color:var(--c-text-4);font-size:12px;text-decoration:none;background:var(--c-item-bg-main);border:1px solid var(--c-bg-4);border-radius:26px;transition:.3s cubic-bezier(.17,.04,.03,1)}.button[data-v-264cd6c4]:active,.isNotTouchDevice .button[data-v-264cd6c4]:hover{color:var(--c-text-1);background:var(--c-item-bg-hover);border:1px solid var(--c-item-bd-hover)}@media (min-width:700px){.button[data-v-264cd6c4]{height:48px;max-width:280px}}',""]),n.locals={},t.exports=n},656:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(50),r(9),r(10),Object(n.defineComponent)({props:{isShowFilter:{type:Boolean,default:!1},limit:{type:Number,default:0},size:{type:Number,required:!1,default:30}},data:()=>({pageNumber:1,sortByEditDate:!1,isShowTrnsWithDesc:!1}),computed:{trnsIds(){return this.$store.getters["trns/selectedTrnsIds"]},isShowedAllTrns(){return this.paginatedTrnsIds.length===this.trnsIdsWithLimit.length},isTrnsWithDescription(){var t=this.$store.state.trns.items;return this.trnsIds.filter((e=>t[e].description)).length>0},trnsIdsWithLimit(){var t=this.$store.state.trns.items;return this.isShowFilter&&this.isShowTrnsWithDesc&&this.isTrnsWithDescription?this.trnsIds.filter((e=>t[e].description)):this.limit>0?this.trnsIds.slice(0,this.limit):this.trnsIds},paginatedTrnsIds(){var t=this.pageNumber*this.size;return this.trnsIdsWithLimit.slice(0,t)},groupedTrns(){var t=this.$store.state.trns.items,e={};for(var r of this.paginatedTrnsIds){var n=void 0;e[n=this.sortByEditDate?this.$day(t[r].edited).startOf("day").valueOf():this.$day(t[r].date).startOf("day").valueOf()]?e[n].push(r):e[n]=[r]}return e}},methods:{showMoreTrns(){this.pageNumber=this.pageNumber+1},showTrnsWithDesc(){this.isShowTrnsWithDesc=!this.isShowTrnsWithDesc}}})),d=(r(622),r(5)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isShowFilter&&t.isTrnsWithDescription?r("div",{staticClass:"flex pb-3"},[r("SharedContextMenuItem",{attrs:{checkboxValue:t.isShowTrnsWithDesc,grow:!1,title:t.$t("trns.filter.showTrnsWithDesc"),icon:"mdi mdi-comment-text-outline",showCheckbox:""},on:{onClick:function(e){t.isShowTrnsWithDesc=!t.isShowTrnsWithDesc}}})],1):t._e(),t.trnsIds.length>0?[r("div",{staticClass:"grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3"},t._l(t.groupedTrns,(function(e,n){return r("div",{key:n,staticClass:"overflow-hidden rounded-md bg-white2 dark:bg-dark4"},[r("div",{staticClass:"pt-4"},[r("div",{staticClass:"pb-2 px-3"},[r("TrnsListDate",{attrs:{date:n}})],1),r("div",{staticClass:"overflow-hidden rounded-md"},t._l(e,(function(t){return r("TrnsItemHistory",{key:t,staticClass:"py-3 px-3 cursor-pointer",attrs:{trnId:t}})})),1)])])})),0)]:t._e(),t.isShowedAllTrns?t._e():r("div",{staticClass:"py-4"},[r("div",{staticClass:"button",on:{click:t.showMoreTrns}},[t._v(t._s(t.$t("trns.more")))])])],2)}),[],!1,null,"264cd6c4",null);e.default=component.exports;installComponents(component,{SharedContextMenuItem:r(336).default,TrnsListDate:r(339).default,TrnsItemHistory:r(338).default})}}]);
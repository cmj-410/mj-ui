import{d as x,r as c,a,o as m,c as j,w as s,e as t,f as e,u as h,h as l,p as F,k as y,_ as k,g as V}from"./app.25c829e9.js";const E={B:"bottom",BL:"bottom-left",BR:"bottom-right",L:"left",LT:"left-top",LB:"left-bottom",R:"right",RT:"right-top",RB:"right-bottom",T:"top",TL:"top-left",TR:"top-right"},w=Object.values(E),S=p=>(F("data-v-405a785a"),p=p(),y(),p),D=l("\u5220\u9664"),I=S(()=>e("p",{class:"clearMargin"},"\u786E\u8BA4\u5220\u9664\uFF1F",-1)),N={class:"justify-end"},T=l("\u53D6\u6D88"),L=l("\u786E\u8BA4"),O={class:"showBoxMarginBotm"},P=x({__name:"quickShow",setup(p){const n=c(!1),d=c("top"),r=c(!1),f=w;return(b,o)=>{const i=a("mj-button"),v=a("mj-popover"),g=a("mj-select"),_=a("mj-checkbox"),B=a("show-box");return m(),j(B,{title:"mj-popover"},{left:s(()=>[t(v,{disabled:n.value,placement:d.value,borderless:r.value},{content:s(()=>[e("div",null,[I,e("div",N,[t(i,{size:"small"},{default:s(()=>[T]),_:1}),t(i,{size:"small",type:"danger",onClick:o[0]||(o[0]=()=>{n.value=!0,b.$Message.success({text:"Deleted"})})},{default:s(()=>[L]),_:1})])])]),default:s(()=>[t(i,null,{default:s(()=>[D]),_:1})]),_:1},8,["disabled","placement","borderless"])]),right:s(()=>[e("span",O,[t(g,{modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=u=>d.value=u),placeholder:"\u8BF7\u9009\u62E9","label-top":"\u4F4D\u7F6E",options:h(f)},null,8,["modelValue","options"]),t(_,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=u=>n.value=u),label:"\u662F\u5426\u5173\u95ED"},null,8,["modelValue"]),t(_,{modelValue:r.value,"onUpdate:modelValue":o[3]||(o[3]=u=>r.value=u),label:"\u53BB\u9664\u5185\u90E8padding"},null,8,["modelValue"])])]),_:1})}}});const q=k(P,[["__scopeId","data-v-405a785a"]]),A=[{property:"placement",type:"String",default:"top",description:"popover\u7684\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\uFF1A<br/>top,bottom,right,left,bottom-left,bottom-right,top-left,top-right,left-top,left-bottom,right-top,right-bottom",required:"N"},{property:"borderless",type:"Boolean",default:"false",description:"\u53BB\u9664\u5185\u90E8padding",required:"N"},{property:"disabled",type:"Boolean",default:"false",description:"\u662F\u5426\u7981\u7528",required:"N"}],C=e("h1",{id:"mj-popover-\u5F39\u51FA\u6846\u7EC4\u4EF6",tabindex:"-1"},[l("mj-popover \u5F39\u51FA\u6846\u7EC4\u4EF6 "),e("a",{class:"header-anchor",href:"#mj-popover-\u5F39\u51FA\u6846\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),R=e("h2",{id:"\u5FEB\u6377\u5C55\u793A",tabindex:"-1"},[l("\u5FEB\u6377\u5C55\u793A "),e("a",{class:"header-anchor",href:"#\u5FEB\u6377\u5C55\u793A","aria-hidden":"true"},"#")],-1),$=e("h2",{id:"api\u6587\u6863",tabindex:"-1"},[l("API\u6587\u6863 "),e("a",{class:"header-anchor",href:"#api\u6587\u6863","aria-hidden":"true"},"#")],-1),z=JSON.parse('{"title":"mj-popover \u5F39\u51FA\u6846\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FEB\u6377\u5C55\u793A","slug":"\u5FEB\u6377\u5C55\u793A","link":"#\u5FEB\u6377\u5C55\u793A","children":[]},{"level":2,"title":"API\u6587\u6863","slug":"api\u6587\u6863","link":"#api\u6587\u6863","children":[]}],"relativePath":"examples/popover/index.md"}'),M={name:"examples/popover/index.md"},J=Object.assign(M,{setup(p){return(n,d)=>{const r=a("props-table");return m(),V("div",null,[C,R,t(q),$,t(r,{descriptType:"Props",propsBody:h(A)},null,8,["propsBody"])])}}});export{z as __pageData,J as default};
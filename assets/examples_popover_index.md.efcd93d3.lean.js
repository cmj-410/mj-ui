import{d as v,r as i,a as d,o as m,c as x,w as t,e as o,f as e,h as a,p as B,k as g,_ as y,g as j,u as k}from"./app.e98b3995.js";const F=l=>(B("data-v-67bfbe27"),l=l(),g(),l),w=a("\u5220\u9664"),V=F(()=>e("p",{class:"clearMargin"},"\u786E\u8BA4\u5220\u9664\uFF1F",-1)),E={class:"justify-end"},S=a("\u53D6\u6D88"),N=a("\u786E\u8BA4"),q={class:"showBoxMarginBotm"},C=v({__name:"quickShow",setup(l){const n=i(!1),c=i("top"),r=i(!1);return(h,s)=>{const p=d("mj-button"),f=d("mj-popover"),_=d("mj-checkbox"),b=d("show-box");return m(),x(b,{title:"mj-popover"},{left:t(()=>[o(f,{disabled:n.value,placement:c.value,borderless:r.value},{content:t(()=>[e("div",null,[V,e("div",E,[o(p,{size:"small"},{default:t(()=>[S]),_:1}),o(p,{size:"small",type:"danger",onClick:s[0]||(s[0]=()=>{n.value=!0,h.$Message.success({text:"Deleted"})})},{default:t(()=>[N]),_:1})])])]),default:t(()=>[o(p,null,{default:t(()=>[w]),_:1})]),_:1},8,["disabled","placement","borderless"])]),right:t(()=>[e("span",q,[o(_,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=u=>n.value=u),label:"\u662F\u5426\u5173\u95ED"},null,8,["modelValue"]),o(_,{modelValue:r.value,"onUpdate:modelValue":s[2]||(s[2]=u=>r.value=u),label:"\u53BB\u9664\u5185\u90E8padding"},null,8,["modelValue"])])]),_:1})}}});const D=y(C,[["__scopeId","data-v-67bfbe27"]]),I=[{property:"placement",type:"String",default:"top",description:"popover\u7684\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\uFF1A<br/>top,bottom,right,left",required:"N"},{property:"borderless",type:"Boolean",default:"false",description:"\u53BB\u9664\u5185\u90E8padding",required:"N"},{property:"disabled",type:"Boolean",default:"false",description:"\u662F\u5426\u7981\u7528",required:"N"}],A=e("h1",{id:"mj-popover\u7EC4\u4EF6",tabindex:"-1"},[a("mj-popover\u7EC4\u4EF6 "),e("a",{class:"header-anchor",href:"#mj-popover\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),P=e("h2",{id:"\u5FEB\u6377\u5C55\u793A",tabindex:"-1"},[a("\u5FEB\u6377\u5C55\u793A "),e("a",{class:"header-anchor",href:"#\u5FEB\u6377\u5C55\u793A","aria-hidden":"true"},"#")],-1),$=e("h2",{id:"api\u6587\u6863",tabindex:"-1"},[a("API\u6587\u6863 "),e("a",{class:"header-anchor",href:"#api\u6587\u6863","aria-hidden":"true"},"#")],-1),O=JSON.parse('{"title":"mj-popover\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FEB\u6377\u5C55\u793A","slug":"\u5FEB\u6377\u5C55\u793A","link":"#\u5FEB\u6377\u5C55\u793A","children":[]},{"level":2,"title":"API\u6587\u6863","slug":"api\u6587\u6863","link":"#api\u6587\u6863","children":[]}],"relativePath":"examples/popover/index.md"}'),M={name:"examples/popover/index.md"},T=Object.assign(M,{setup(l){return(n,c)=>{const r=d("props-table");return m(),j("div",null,[A,P,o(D),$,o(r,{descriptType:"Props",propsBody:k(I)},null,8,["propsBody"])])}}});export{O as __pageData,T as default};

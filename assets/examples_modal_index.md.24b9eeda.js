import{d as F,r as t,a as u,o as _,c as E,w as v,b as C,v as g,e as o,f as a,g as j,u as w,h as b}from"./app.8a42eb09.js";const N={class:"showBoxMarginBotm"},A=F({__name:"quickShow",setup(f){const r=t(!0),s=t("\u6807\u9898"),n=t("\u8FD9\u91CC\u662F\u4E3B\u4F53\u5185\u5BB9"),i=t(!0),p=t(!1),m=t("primary"),V=["primary","success","danger","warning"],c=t(!1);return(T,e)=>{const h=u("mj-alert"),B=u("mj-select"),y=u("mj-input"),d=u("mj-checkbox"),x=u("show-box");return _(),E(x,{title:"mj-modal"},{left:v(()=>[C(o(h,{iconbox:c.value,type:m.value,"show-icon":i.value,closable:p.value,title:s.value,body:n.value,onOnClose:e[0]||(e[0]=l=>r.value=!1)},null,8,["iconbox","type","show-icon","closable","title","body"]),[[g,r.value]])]),right:v(()=>[a("span",N,[o(B,{modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=l=>m.value=l),placeholder:"Select type","label-top":"Alert type",options:V},null,8,["modelValue"]),o(y,{modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=l=>s.value=l),"label-top":"Alert title"},null,8,["modelValue"]),o(y,{modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=l=>n.value=l),"label-top":"Alert Body"},null,8,["modelValue"]),o(d,{modelValue:i.value,"onUpdate:modelValue":e[4]||(e[4]=l=>i.value=l),label:"Icon"},null,8,["modelValue"]),o(d,{modelValue:c.value,"onUpdate:modelValue":e[5]||(e[5]=l=>c.value=l),label:"Icon box"},null,8,["modelValue"]),o(d,{modelValue:p.value,"onUpdate:modelValue":e[6]||(e[6]=l=>p.value=l),label:"Closable"},null,8,["modelValue"]),o(d,{modelValue:r.value,"onUpdate:modelValue":e[7]||(e[7]=l=>r.value=l),label:"Visible"},null,8,["modelValue"])])]),_:1})}}}),k=[{property:"type",type:"String",default:"primary",description:"alert\u7EC4\u4EF6\u7684\u5185\u7F6E\u7C7B\u578B\uFF1A<br/>primary, success, danger, warning",required:"N"},{property:"title",type:"String",default:"-",description:"alert\u7EC4\u4EF6\u7684\u6807\u9898",required:"N"},{property:"body",type:"String",default:"-",description:"alert\u7EC4\u4EF6\u7684\u4E3B\u4F53\u5185\u5BB9",required:"N"},{property:"show-icon",type:"Boolean",default:"true",description:"\u662F\u5426\u663E\u793Aicon",required:"N"},{property:"iconbox",type:["Boolean"],default:"false",description:"\u662F\u5426\u4F7F\u7528box\u7684\u65B9\u5F0F\u663E\u793Aicon",required:"N"},{property:"closable",type:"Boolean",default:"false",description:"alert\u7EC4\u4EF6\u662F\u5426\u53EF\u4EE5\u5173\u95ED",required:"N"},{property:"visible",type:"Boolean",default:"true",description:"alert\u7EC4\u4EF6\u662F\u5426\u5C55\u793A",required:"N"}],q=a("h1",{id:"mj-modal\u7EC4\u4EF6",tabindex:"-1"},[b("mj-modal\u7EC4\u4EF6 "),a("a",{class:"header-anchor",href:"#mj-modal\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),S=a("h2",{id:"\u5FEB\u6377\u5C55\u793A",tabindex:"-1"},[b("\u5FEB\u6377\u5C55\u793A "),a("a",{class:"header-anchor",href:"#\u5FEB\u6377\u5C55\u793A","aria-hidden":"true"},"#")],-1),U=a("h2",{id:"api\u6587\u6863",tabindex:"-1"},[b("API\u6587\u6863 "),a("a",{class:"header-anchor",href:"#api\u6587\u6863","aria-hidden":"true"},"#")],-1),P=JSON.parse('{"title":"mj-modal\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FEB\u6377\u5C55\u793A","slug":"\u5FEB\u6377\u5C55\u793A","link":"#\u5FEB\u6377\u5C55\u793A","children":[]},{"level":2,"title":"API\u6587\u6863","slug":"api\u6587\u6863","link":"#api\u6587\u6863","children":[]}],"relativePath":"examples/modal/index.md"}'),I={name:"examples/modal/index.md"},O=Object.assign(I,{setup(f){return(r,s)=>{const n=u("props-table");return _(),j("div",null,[q,S,o(A),U,o(n,{descriptType:"Props",propsBody:w(k)},null,8,["propsBody"])])}}});export{P as __pageData,O as default};

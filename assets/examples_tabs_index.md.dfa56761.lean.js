import{d as x,r as c,a as s,o as b,c as v,w as l,e,f as t,h as n,g as T,u as j}from"./app.25c829e9.js";const B=n("First tab"),V=n("Second tab"),y=n("Third tab"),F={class:"showBoxMarginBotm"},k=x({__name:"quickShow",setup(_){const d=c(!1),r=c(!0),a=c(null);return(E,o)=>{const i=s("mj-tab"),m=s("mj-tabs"),p=s("mj-checkbox"),h=s("mj-select"),f=s("show-box");return b(),v(f,{title:"mj-tabs"},{left:l(()=>[e(m,{vertical:d.value,box:r.value},{default:l(()=>[e(i,{title:"Tab 1",disabled:a.value=="Tab 1"},{default:l(()=>[B]),_:1},8,["disabled"]),e(i,{title:"Tab 2",disabled:a.value=="Tab 2"},{default:l(()=>[V]),_:1},8,["disabled"]),e(i,{title:"Tab 3",disabled:a.value=="Tab 3"},{default:l(()=>[y]),_:1},8,["disabled"])]),_:1},8,["vertical","box"])]),right:l(()=>[t("span",F,[e(p,{modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=u=>d.value=u),label:"\u5782\u76F4\u663E\u793A"},null,8,["modelValue"]),e(p,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=u=>r.value=u),label:"\u76D2\u88C5"},null,8,["modelValue"]),e(h,{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=u=>a.value=u),"label-top":"\u7981\u7528\u67D0\u9009\u9879\u5361",placeholder:"\u8BF7\u9009\u62E9",options:["no","Tab 1","Tab 2","Tab 3"]},null,8,["modelValue"])])]),_:1})}}}),N=[{property:"initialTab",type:"Number",default:"0",description:"\u9ED8\u8BA4\u6253\u5F00\u7684tab\u7D22\u5F15",required:"N"},{property:"vertical",type:"Boolean",default:"false",description:"\u662F\u5426\u5782\u76F4\u663E\u793A",required:"N"},{property:"box",type:"Boolean",default:"false",description:"tab\u4E3A\u76D2\u6837\u5F0F",required:"N"}],g=t("h1",{id:"mj-tabs-\u9009\u9879\u5361\u7EC4\u4EF6",tabindex:"-1"},[n("mj-tabs \u9009\u9879\u5361\u7EC4\u4EF6 "),t("a",{class:"header-anchor",href:"#mj-tabs-\u9009\u9879\u5361\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),w=t("h2",{id:"\u5FEB\u6377\u5C55\u793A",tabindex:"-1"},[n("\u5FEB\u6377\u5C55\u793A "),t("a",{class:"header-anchor",href:"#\u5FEB\u6377\u5C55\u793A","aria-hidden":"true"},"#")],-1),A=t("h2",{id:"api\u6587\u6863",tabindex:"-1"},[n("API\u6587\u6863 "),t("a",{class:"header-anchor",href:"#api\u6587\u6863","aria-hidden":"true"},"#")],-1),C=JSON.parse('{"title":"mj-tabs \u9009\u9879\u5361\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FEB\u6377\u5C55\u793A","slug":"\u5FEB\u6377\u5C55\u793A","link":"#\u5FEB\u6377\u5C55\u793A","children":[]},{"level":2,"title":"API\u6587\u6863","slug":"api\u6587\u6863","link":"#api\u6587\u6863","children":[]}],"relativePath":"examples/tabs/index.md"}'),D={name:"examples/tabs/index.md"},P=Object.assign(D,{setup(_){return(d,r)=>{const a=s("props-table");return b(),T("div",null,[g,w,e(k),A,e(a,{descriptType:"Props",propsBody:j(N)},null,8,["propsBody"])])}}});export{C as __pageData,P as default};
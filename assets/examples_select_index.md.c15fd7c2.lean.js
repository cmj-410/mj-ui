import{d as f,r as a,a as s,o as v,c as g,w as B,e as l,f as o,u as _,g as j,h as m}from"./app.0c2bbc59.js";const t={B:"bottom",BL:"bottom-left",BR:"bottom-right",L:"left",LT:"left-top",LB:"left-bottom",R:"right",RT:"right-top",RB:"right-bottom",T:"top",TL:"top-left",TR:"top-right"},F=[t.T,t.B,t.L,t.R,t.TL,t.TR,t.BL,t.BR],A={class:"showBoxMarginBotm"},N=f({__name:"quickShow",setup(y){const d=a(""),r=a("\u6027\u522B"),n=a("\u8BF7\u9009\u62E9"),p=a(!1),i=a(!1),c=a(null),C=F,V=[{name:"\u7537",value:"male"},{name:"\u5973",value:"female"}];return(P,e)=>{const E=s("mj-select"),b=s("mj-input"),h=s("mj-checkbox"),x=s("show-box");return v(),g(x,{title:"mj-select"},{left:B(()=>[l(E,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=u=>d.value=u),"track-by":"value",placeholder:n.value,disabled:p.value,placement:c.value,"label-top":r.value,divided:i.value,options:V},null,8,["modelValue","placeholder","disabled","placement","label-top","divided"])]),right:B(()=>[o("span",A,[l(b,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=u=>r.value=u),"label-top":"Select label"},null,8,["modelValue"]),l(b,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=u=>n.value=u),"label-top":"Select placeholder"},null,8,["modelValue"]),l(E,{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=u=>c.value=u),placeholder:"Placement","label-top":"Placement",options:_(C)},null,8,["modelValue","options"]),l(h,{modelValue:i.value,"onUpdate:modelValue":e[4]||(e[4]=u=>i.value=u),label:"Divided"},null,8,["modelValue"]),l(h,{modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=u=>p.value=u),label:"Disabled"},null,8,["modelValue"])])]),_:1})}}}),S=[{property:"modelValue(v-model)",type:"String, Number, Object",default:"-",description:"Select\u5F53\u524D\u503C",required:"T"},{property:"label-top",type:"String",default:"-",description:"\u6807\u7B7E",required:"N"},{property:"options",type:"Array, Object[]",default:"-",description:"options\u6570\u7EC4\u6570\u636E\uFF0C\u53EF\u4EE5\u4E3A\u7B80\u5355\u6570\u7EC4\u6216\u5305\u542Bname\u5C5E\u6027\u7684\u5BF9\u8C61\u6570\u7EC4",required:"N"},{property:"track-by",type:"String",default:"value",description:"options\u4E2D\u7528\u4E8E\u7ED1\u5B9A\u7684\u503C",required:"N"},{property:"placeholder",type:"String",default:"-",description:"select\u7684placeholder",required:"N"},{property:"placement",type:"String",default:"bottom",description:`\u4E0B\u62C9options\u7684\u653E\u7F6E\u4F4D\u7F6E\uFF0C\u5185\u7F6E\u9009\u62E9\u9879\uFF1A<br/>${Object.values(F)}`,required:"N"},{property:"divided",type:"Boolean",default:"false",description:"\u9009\u9879\u4E4B\u95F4\u662F\u5426\u5206\u5272",required:"N"},{property:"disabled",type:["Boolean"],default:"false",description:"\u7981\u7528\u5F53\u524Dselect",required:"N"}],T=o("h1",{id:"mj-select-\u9009\u62E9\u7EC4\u4EF6",tabindex:"-1"},[m("mj-select \u9009\u62E9\u7EC4\u4EF6 "),o("a",{class:"header-anchor",href:"#mj-select-\u9009\u62E9\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),D=o("h2",{id:"\u5FEB\u6377\u5C55\u793A",tabindex:"-1"},[m("\u5FEB\u6377\u5C55\u793A "),o("a",{class:"header-anchor",href:"#\u5FEB\u6377\u5C55\u793A","aria-hidden":"true"},"#")],-1),L=o("h2",{id:"api\u6587\u6863",tabindex:"-1"},[m("API\u6587\u6863 "),o("a",{class:"header-anchor",href:"#api\u6587\u6863","aria-hidden":"true"},"#")],-1),O=JSON.parse('{"title":"mj-select \u9009\u62E9\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FEB\u6377\u5C55\u793A","slug":"\u5FEB\u6377\u5C55\u793A","link":"#\u5FEB\u6377\u5C55\u793A","children":[]},{"level":2,"title":"API\u6587\u6863","slug":"api\u6587\u6863","link":"#api\u6587\u6863","children":[]}],"relativePath":"examples/select/index.md"}'),k={name:"examples/select/index.md"},R=f({...k,setup(y){return(d,r)=>{const n=s("props-table");return v(),j("div",null,[T,D,l(N),L,l(n,{descriptType:"Props",propsBody:_(S)},null,8,["propsBody"])])}}});export{O as __pageData,R as default};
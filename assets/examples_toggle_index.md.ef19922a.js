import{d as p,r as d,a as t,o as c,c as B,w as i,e as a,g as h,u as F,f as u,h as n}from"./app.b2b5d52c.js";const C=p({__name:"quickShow",setup(E){const l=d("1"),e=d(!1);return(s,o)=>{const g=t("mj-toggle"),m=t("mj-checkbox"),_=t("show-box");return c(),B(_,{title:"mj-toggle"},{left:i(()=>[a(g,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=r=>l.value=r),round:e.value,toggleWidth:"300px",options:["\u4FEE\u732B","\u4FEE\u72D7","\u5154\u51E0","\u8111\u65A7"]},null,8,["modelValue","round"])]),right:i(()=>[a(m,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=r=>e.value=r),label:"\u5706\u89D2"},null,8,["modelValue"])]),_:1})}}}),f=[{property:"modalValue(v-model)",type:"String",default:"options[0]",description:"toggle\u7ED1\u5B9A\u7684\u9009\u4E2D\u503C\u3002\u521D\u59CBmodoleValue\u975Eoptions\u4E2D\u7684\u503C\u5219\u9ED8\u8BA4\u4E3Aoptions[0]",required:"T"},{property:"options",type:"Array",default:"-",description:"\u53C2\u6570\u7C7B\u578B\u4E3A\u9009\u9879\u540D\u6570\u7EC4\u6216material icon\u540D\u5B57\u7684\u6570\u7EC4",required:"T"},{property:"toggleWidth",type:"String",default:"-",description:"toggle\u7684\u5BBD\u5EA6\u3002\u6700\u5C0F\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A120px\uFF0C\u8BF7\u786E\u4FDD\u5BBD\u5EA6\u8DB3\u591F\u4F7F\u5F97toggle\u6B63\u5E38\u663E\u793A",required:"N"},{property:"round",type:"Boolean",default:"false",description:"\u5706\u89D2",required:"N"},{property:"icons",type:"Boolean",default:"false",description:"\u4F7F\u7528Material Icons\u4F5C\u4E3A\u9009\u9879",required:"N"}],A=u("h1",{id:"mj-toggle-\u5F00\u5173\u9009\u62E9\u7EC4\u4EF6",tabindex:"-1"},[n("mj-toggle \u5F00\u5173\u9009\u62E9\u7EC4\u4EF6 "),u("a",{class:"header-anchor",href:"#mj-toggle-\u5F00\u5173\u9009\u62E9\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),x=u("h2",{id:"\u5FEB\u6377\u5C55\u793A",tabindex:"-1"},[n("\u5FEB\u6377\u5C55\u793A "),u("a",{class:"header-anchor",href:"#\u5FEB\u6377\u5C55\u793A","aria-hidden":"true"},"#")],-1),D=u("h2",{id:"api\u6587\u6863",tabindex:"-1"},[n("API\u6587\u6863 "),u("a",{class:"header-anchor",href:"#api\u6587\u6863","aria-hidden":"true"},"#")],-1),v=JSON.parse('{"title":"mj-toggle \u5F00\u5173\u9009\u62E9\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FEB\u6377\u5C55\u793A","slug":"\u5FEB\u6377\u5C55\u793A","link":"#\u5FEB\u6377\u5C55\u793A","children":[]},{"level":2,"title":"API\u6587\u6863","slug":"api\u6587\u6863","link":"#api\u6587\u6863","children":[]}],"relativePath":"examples/toggle/index.md"}'),y={name:"examples/toggle/index.md"},b=p({...y,setup(E){return(l,e)=>{const s=t("props-table");return c(),h("div",null,[A,x,a(C),D,a(s,{descriptType:"Props",propsBody:F(f)},null,8,["propsBody"])])}}});export{v as __pageData,b as default};

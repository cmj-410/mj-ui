import{d as b,r as p,a as n,o as m,c as x,w as t,e as a,h as d,f as e,g as B,u as k}from"./app.25c829e9.js";const v="/mj-ui/mjUI_logo.png",j=d("Modal"),y=e("img",{src:v},null,-1),g=e("h3",null,"Header",-1),E=e("p",null,"Body",-1),V=d("\u786E\u5B9A"),M=b({__name:"quickShow",setup(c){const l=p(!1),r=p(!1);return(u,o)=>{const i=n("mj-button"),_=n("mj-modal"),h=n("mj-checkbox"),f=n("show-box");return m(),x(f,{title:"mj-modal"},{left:t(()=>[a(i,{onClick:o[0]||(o[0]=s=>l.value=!0)},{default:t(()=>[j]),_:1}),a(_,{modelValue:l.value,"onUpdate:modelValue":o[2]||(o[2]=s=>l.value=s),closableMask:r.value},{image:t(()=>[y]),header:t(()=>[g]),body:t(()=>[E]),actions:t(()=>[a(i,{type:"primary",onClick:o[1]||(o[1]=s=>(u.$Message({text:"ok"}),l.value=!1))},{default:t(()=>[V]),_:1})]),_:1},8,["modelValue","closableMask"])]),right:t(()=>[a(h,{modelValue:r.value,"onUpdate:modelValue":o[3]||(o[3]=s=>r.value=s),label:"\u70B9\u51FB\u906E\u7F69\u5173\u95ED"},null,8,["modelValue"])]),_:1})}}}),$=[{property:"modalValue(v-model)",type:"Boolean",default:"-",description:"modal\u7684\u663E\u793A\u4E0E\u5426",required:"T"},{property:"closableMask",type:"Boolean",default:"true",description:"\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5173\u95EDmodal",required:"N"},{property:"width",type:"String",default:"500px",description:"Modal\u7684\u5BBD\u5EA6",required:"N"}],w=e("h1",{id:"mj-modal-\u6A21\u6001\u6846\u7EC4\u4EF6",tabindex:"-1"},[d("mj-modal \u6A21\u6001\u6846\u7EC4\u4EF6 "),e("a",{class:"header-anchor",href:"#mj-modal-\u6A21\u6001\u6846\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),N=e("h2",{id:"\u5FEB\u6377\u5C55\u793A",tabindex:"-1"},[d("\u5FEB\u6377\u5C55\u793A "),e("a",{class:"header-anchor",href:"#\u5FEB\u6377\u5C55\u793A","aria-hidden":"true"},"#")],-1),A=e("h2",{id:"api\u6587\u6863",tabindex:"-1"},[d("API\u6587\u6863 "),e("a",{class:"header-anchor",href:"#api\u6587\u6863","aria-hidden":"true"},"#")],-1),q=JSON.parse('{"title":"mj-modal \u6A21\u6001\u6846\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FEB\u6377\u5C55\u793A","slug":"\u5FEB\u6377\u5C55\u793A","link":"#\u5FEB\u6377\u5C55\u793A","children":[]},{"level":2,"title":"API\u6587\u6863","slug":"api\u6587\u6863","link":"#api\u6587\u6863","children":[]}],"relativePath":"examples/modal/index.md"}'),C={name:"examples/modal/index.md"},D=Object.assign(C,{setup(c){return(l,r)=>{const u=n("props-table");return m(),B("div",null,[w,N,a(M),A,a(u,{descriptType:"Props",propsBody:k($)},null,8,["propsBody"])])}}});export{q as __pageData,D as default};

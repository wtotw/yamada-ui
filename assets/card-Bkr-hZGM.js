import{j as o}from"./jsx-runtime-CKrituN3.js";import{c as y,u as n,a as c}from"./factory-jQ8alorc.js";import{f as i}from"./forward-ref-DuAegr0M.js";import{u as p}from"./use-component-style-DOSk5UmJ.js";import{o as C}from"./theme-provider-C1GLE5Ir.js";const[_,d]=y({name:"CardContext",errorMessage:`useCard returned is 'undefined'. Seems you forgot to wrap the components in "<Card />" `}),b=i((e,t)=>{const[s,a]=p("Card",e),{className:r,direction:l="column",justify:m,align:u,...f}=C(a),x={display:"flex",flexDirection:l,justifyContent:m,alignItems:u,wordWrap:"break-word",...s.container};return o.jsx(_,{value:s,children:o.jsx(n.section,{ref:t,className:c("ui-card",r),__css:x,...f})})}),w=i(({className:e,...t},s)=>{const r={display:"flex",justifyContent:"flex-start",alignItems:"center",...d().header};return o.jsx(n.div,{ref:s,className:c("ui-card__header",e),__css:r,...t})}),I=i(({className:e,...t},s)=>{const r={display:"flex",flexDirection:"column",alignItems:"flex-start",...d().body};return o.jsx(n.div,{ref:s,className:c("ui-card__body",e),__css:r,...t})}),P=i(({className:e,...t},s)=>{const r={display:"flex",justifyContent:"flex-start",alignItems:"center",...d().footer};return o.jsx(n.div,{ref:s,className:c("ui-card__footer",e),__css:r,...t})});export{b as C,w as a,I as b,P as c};

import{j as a}from"./jsx-runtime-5BUNAZ9W.js";import{f as g}from"./forward-ref-A-8Arhkk.js";import{u as b}from"./use-component-style-lJBCD4Hi.js";import{o as v}from"./theme-provider-XorC6D0y.js";import{u as s,a as x}from"./factory-_mTQY6PK.js";const w=(o,r)=>{let e=[{bgImage:"linear-gradient(45deg, var(--ui-checkers) 25%, transparent 25%), linear-gradient(-45deg, var(--ui-checkers) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--ui-checkers) 75%), linear-gradient(-45deg, var(--ui-body) 75%, var(--ui-checkers) 75%)",bgSize:"8px 8px",bgPosition:"0 0, 0 4px, 4px -4px, -4px 0",var:[{name:"checkers",token:"colors",value:["blackAlpha.300","whiteAlpha.300"]},{name:"body",token:"colors",value:["whiteAlpha.500","blackAlpha.500"]}]},{background:o}];return r&&(e=[...e,{boxShadow:"rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset"}]),e},A=g((o,r)=>{const[e,i]=b("ColorSwatch",o),{className:n,color:l="#ffffff00",withShadow:c=!0,overlays:p=w(l,c),isRounded:t,__css:d,...u}=v(i),f={position:"relative",_before:{content:'""',display:"block",h:0,pb:"100%"},"& > *":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",w:"100%",h:"100%"},...e.container,...d};return a(s.div,{ref:r,className:x("ui-color-swatch",n),...t?{rounded:"full"}:{},__css:f,...u,children:a(s.div,{...t?{rounded:"full"}:{},children:p.map((h,m)=>a(s.div,{__css:{position:"absolute",top:0,left:0,right:0,bottom:0,...e.overlay},...t?{rounded:"full"}:{},...h},m))})})});export{A as C};

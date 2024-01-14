import{j as i,a as S}from"./jsx-runtime-5BUNAZ9W.js";import{d as b,a as M}from"./index-iI3DD0ZP.js";import{E as N}from"./environment-provider-7Jfup-Jr.js";import{T as j,R as I,G as g}from"./theme-provider-XorC6D0y.js";import{u as y,a as T,e as h,B as C,a3 as L}from"./factory-_mTQY6PK.js";import{r as l}from"./index-4g5l5LRQ.js";import{l as U,M as _,u as z,c as A,m as G}from"./motion-heeYkzTb.js";import{L as H}from"./loading-provider-o-I3OMrN.js";import{u as O}from"./index-Jg6JIUo6.js";import{n as v}from"./notice-ps6ctqpi.js";import{A as R}from"./index-eMn_GZVX.js";import{P as W}from"./container-portal-2rZsAQsm.js";function B({children:o,isValidProp:e,...t}){e&&U(e),t={...l.useContext(_),...t},t.isStatic=z(()=>t.isStatic);const r=l.useMemo(()=>t,[JSON.stringify(t.transition),t.transformPagePoint,t.reducedMotion]);return l.createElement(_.Provider,{value:r},o)}const F=({variants:o,gap:e="md",appendToParentPortal:t,containerRef:r})=>{const a=l.useSyncExternalStore(v.subscribe,v.getSnapshot,v.getSnapshot),d=Object.entries(a).map(([s,u])=>{const m=s.includes("top")?"env(safe-area-inset-top, 0px)":void 0,n=s.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,c=s.includes("left")?void 0:"env(safe-area-inset-right, 0px)",x=s.includes("right")?void 0:"env(safe-area-inset-left, 0px)",p={position:"fixed",zIndex:"zarbon",pointerEvents:"none",display:"flex",flexDirection:"column",margin:e,gap:e,top:m,bottom:n,right:c,left:x};return i(y.ul,{className:T("ui-notice__list",`ui-notice__list--${s}`),__css:p,children:i(R,{initial:!1,children:u.map(f=>i(P,{variants:o,...f},f.id))})},s)});return i(W,{appendToParentPortal:t,containerRef:r,children:d})},J={initial:({placement:o})=>({opacity:0,[["top","bottom"].includes(o)?"y":"x"]:(o==="bottom"||o.includes("right")?1:-1)*24}),animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.95,transition:{duration:.2,ease:[.4,0,1,1]}}},P=l.memo(({variants:o=J,placement:e,duration:t=5e3,message:r,onCloseComplete:a,isDelete:d=!1,onDelete:s,style:u})=>{const[m,n]=l.useState(t),c=A();h(()=>{c||a==null||a()},[c]),h(()=>{n(t)},[t]);const x=()=>n(null),p=()=>n(t),f=()=>{c&&s()};l.useEffect(()=>{c&&d&&s()},[c,d,s]),O(f,m);const E={pointerEvents:"auto",maxW:"2xl",minW:"sm",...u};return i(G.li,{layout:!0,className:"ui-notice__list__item",variants:o,initial:"initial",animate:"animate",exit:"exit",onHoverStart:x,onHoverEnd:p,custom:{placement:e},style:{display:"flex",justifyContent:e.includes("left")?"flex-start":e.includes("right")?"flex-end":"center"},children:i(y.div,{className:"ui-notice__list__item__inner",__css:E,children:C(r,{onClose:f})})})});P.displayName="NoticeComponent";const et=({theme:o=b,config:e=M,disableResetStyle:t,disableGlobalStyle:r,colorModeManager:a,themeSchemeManager:d,environment:s,disableEnvironment:u,children:m})=>{var n;return i(j,{theme:o,config:e,themeSchemeManager:d,children:i(L,{colorModeManager:a,config:e,children:i(N,{environment:s,disabled:u,children:i(B,{...(n=e.motion)==null?void 0:n.config,children:S(H,{...e.loading,children:[t?null:i(I,{}),r?null:i(g,{}),m,i(F,{...e.notice})]})})})})})};export{et as U};

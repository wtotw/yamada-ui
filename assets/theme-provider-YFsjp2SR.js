import{a as he,j as R}from"./jsx-runtime-TtYKBvr-.js";import{g as G,f as H,U as _e,l as pe,w as Q,a7 as U,i as ce,m as M,T as K,o as L,j as E,Q as T,x as O,O as W,a8 as Y,a9 as ge,aa as be,ab as N,e as ie,ac as le,ad as ye}from"./factory-xOnmJ4_k.js";import{r as k}from"./index-IybTgENJ.js";const ke=(e,t="")=>e.replace(/\s+/g,t),A=(e,...t)=>t.join(` ${e} `).replace(/calc/g,""),J=(...e)=>`calc(${A("+",...e)})`,X=(...e)=>`calc(${A("-",...e)})`,B=(...e)=>`calc(${A("*",...e)})`,Z=(...e)=>`calc(${A("/",...e)})`,ee=e=>e!=null&&!isNaN(parseFloat(e.toString()))?String(e).startsWith("-")?String(e).slice(1):`-${e}`:B(e,-1),y=Object.assign(e=>({add:(...t)=>y(J(e,...t)),subtract:(...t)=>y(X(e,...t)),multiply:(...t)=>y(B(e,...t)),divide:(...t)=>y(Z(e,...t)),negate:()=>y(ee(e))}),{add:J,subtract:X,multiply:B,divide:Z,negate:ee});function S(e,t,n){return Math.min(Math.max(e,n),t)}class Se extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var $=Se;function v(e){if(typeof e!="string")throw new $(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=Ce.test(e)?we(e):e;const n=xe.exec(t);if(n){const a=Array.from(n).slice(1);return[...a.slice(0,3).map(c=>parseInt(C(c,2),16)),parseInt(C(a[3]||"f",2),16)/255]}const s=$e.exec(t);if(s){const a=Array.from(s).slice(1);return[...a.slice(0,3).map(c=>parseInt(c,16)),parseInt(a[3]||"ff",16)/255]}const r=Te.exec(t);if(r){const a=Array.from(r).slice(1);return[...a.slice(0,3).map(c=>parseInt(c,10)),parseFloat(a[3]||"1")]}const o=ve.exec(t);if(o){const[a,c,l,i]=Array.from(o).slice(1).map(parseFloat);if(S(0,100,c)!==c)throw new $(e);if(S(0,100,l)!==l)throw new $(e);return[...Me(a,c,l),Number.isNaN(i)?1:i]}throw new $(e)}function je(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}const te=e=>parseInt(e.replace(/_/g,""),36),ze="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const n=te(t.substring(0,3)),s=te(t.substring(3)).toString(16);let r="";for(let o=0;o<6-s.length;o++)r+="0";return e[n]=`${r}${s}`,e},{});function we(e){const t=e.toLowerCase().trim(),n=ze[je(t)];if(!n)throw new $(e);return`#${n}`}const C=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),xe=new RegExp(`^#${C("([a-f0-9])",3)}([a-f0-9])?$`,"i"),$e=new RegExp(`^#${C("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),Te=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${C(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),ve=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,Ce=/^[a-z]+$/i,ne=e=>Math.round(e*255),Me=(e,t,n)=>{let s=n/100;if(t===0)return[s,s,s].map(ne);const r=(e%360+360)%360/60,o=(1-Math.abs(2*s-1))*(t/100),a=o*(1-Math.abs(r%2-1));let c=0,l=0,i=0;r>=0&&r<1?(c=o,l=a):r>=1&&r<2?(c=a,l=o):r>=2&&r<3?(l=o,i=a):r>=3&&r<4?(l=a,i=o):r>=4&&r<5?(c=a,i=o):r>=5&&r<6&&(c=o,i=a);const m=s-o/2,u=c+m,d=l+m,h=i+m;return[u,d,h].map(ne)};function ue(e,t,n,s){return`rgba(${S(0,255,e).toFixed()}, ${S(0,255,t).toFixed()}, ${S(0,255,n).toFixed()}, ${parseFloat(S(0,1,s).toFixed(3))})`}function de(e,t,n){const s=(D,me)=>me===3?D:D/255,[r,o,a,c]=v(e).map(s),[l,i,m,u]=v(t).map(s),d=u-c,h=n*2-1,f=((h*d===-1?h:h+d/(1+h*d))+1)/2,_=1-f,p=(r*_+l*f)*255,z=(o*_+i*f)*255,g=(a*_+m*f)*255,b=u*n+c*(1-n);return ue(p,z,g,b)}function Ee(e,t){const[n,s,r,o]=v(e);return ue(n,s,r,o-t)}function q(e){const[t,n,s,r]=v(e);let o=a=>{const c=S(0,255,a).toString(16);return c.length===1?`0${c}`:c};return`#${o(t)}${o(n)}${o(s)}${r<1?o(Math.round(r*255)):""}`}const Oe=[50,100,200,300,400,500,600,700,800,900,950],tt=e=>e==="gray"||e==="neutral",nt=e=>e==="yellow"||e==="cyan"||e==="lime",I=(e,t)=>(n={},s)=>{var l;const[r,o]=e.split("."),[,a]=Object.entries(((l=n.semantics)==null?void 0:l.colorSchemes)??{}).find(([i])=>r===i)??[];a&&(e=`${a}.${o}`);const c=G(n,`colors.${e}`,e);try{return H(c)?q(String(s!=="dark"?c[0]:c[1])):q(String(c))}catch{return t??"#000000"}},st=(e,t)=>(n,s)=>{const r=I(e,e)(n,s);return q(de(r,"#fff",t/100))},rt=(e,t)=>(n,s)=>{const r=I(e,e)(n,s);return q(de(r,"#000",t/100))},ot=(e,t)=>(n,s)=>{const r=I(e,e)(n,s);return Ee(r,1-t)},at=({string:e,colors:t}={})=>{const n=qe();return e&&t?Ve(e,t):e&&!t?Fe(e):t&&!e?Re(t):n},qe=()=>`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`,Fe=e=>{let t=0;if(e.length===0)return t.toString();for(let s=0;s<e.length;s+=1)t=e.charCodeAt(s)+((t<<5)-t),t=t&t;let n="#";for(let s=0;s<3;s+=1){const r=t>>s*8&255;n+=`00${r.toString(16)}`.substr(-2)}return n},Ve=(e,t)=>{let n=0;if(e.length===0)return t[0];for(let s=0;s<e.length;s+=1)n=e.charCodeAt(s)+((n<<5)-n),n=n&n;return n=(n%t.length+t.length)%t.length,t[n]},Re=e=>e[Math.floor(Math.random()*e.length)],Ae=e=>{const[t,n,s]=v(e);return(t*299+n*587+s*114)/1e3},Ie=e=>(t,n)=>{const s=t?I(e)(t,n):e;return Ae(s)<128?"dark":"light"},ct=e=>(t,n)=>Ie(e)(t,n)==="light",P=(e,t)=>{const n=["@media screen"];return e&&n.push("and",`(min-width: ${e}px)`),t&&n.push("and",`(max-width: ${t}px)`),n.length>1?n.join(" "):void 0},Pe=e=>Object.entries(e).map(([t,n],s,r)=>{let[,o]=r[s-1]??[];return n=t!=="base"?n:void 0,o&&(o+=1),{breakpoint:t,minW:o,maxW:n,maxWQuery:P(void 0,n),minWQuery:P(o),minMaxQuery:P(o,n)}}),He=e=>{const n=pe()?parseFloat(window.getComputedStyle(document.documentElement).fontSize):16;return Object.fromEntries(Object.entries(e).map(([s,r])=>r.includes("px")?(r=parseFloat(r),[s,r]):(r=parseFloat(r),r=r*n,[s,r])).sort((s,r)=>s[1]-r[1]))},We=e=>{if(!e)return;e.base="9999px",e=He(e);const t=_e(e),n=Pe(e);return{keys:t,isResponsive:s=>{const r=Object.keys(s);return r.length>0&&r.every(o=>t.includes(o))},queries:n}},Be=(e,t)=>{const n=`--${[t,ke(e,"-")].filter(Boolean).join("-")}`,s=`var(${n})`;return{variable:n,reference:s}},se=(e,t)=>(e=e.replace(/\./g,"-"),Be(e,t)),w=(e,t="ui")=>({baseTokens:n,cssMap:s={},cssVars:r={}}={})=>{for(let[o,{isSemantic:a,value:c}]of Object.entries(e)){const l=(f="")=>{const[_]=o.split("."),p=[_,f].join(".");if(!(e[p]??(n==null?void 0:n[p])))return[,f];const{variable:g,reference:b}=se(p,t);return[g,b]},{variable:i,reference:m}=se(o,t);let u,d;if(o.startsWith("animations."))H(c)?u=c.map(f=>Q(f,{__cssMap:s})).join(","):u=Q(c,{__cssMap:s});else{let[f,_]=H(c)?[...c]:[c];if(o.startsWith("gradients.")){const[p,z]=l(f),[g,b]=l(_);p?u=z:u=U(l(f)[1],{__cssMap:s}),g?d=b:d=U(_,{__cssMap:s})}else u=f,d=_}if(!a){if(o.startsWith("spaces")&&!ce(u)){const f=o.split("."),[_,...p]=f,z=`${_}.-${p.join(".")}`,g=y.negate(u),b=y.negate(m);s[z]={value:g,var:i,ref:b}}r[i]=u,d&&(r=M(r,{[K._dark]:{[i]:d}})),s[o]={value:u,var:i,ref:m};continue}const[h,j]=l(u);if(r=M(r,{[i]:j}),d){const[,f]=l(d);r=M(r,{[K._dark]:{[i]:f}})}s[o]={value:h??u,var:i,ref:m}}return{cssMap:s,cssVars:r}},re=["blurs","borders","colors","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","spaces","transitions","zIndices"],oe=["gradients"],Ge=(e,t)=>{var u;e=Le(e);const{breakpoints:n,themeSchemes:s}=e??{},r=(u=t==null?void 0:t.var)==null?void 0:u.prefix,o=x(e),a=x(e,"secondary"),c=x(e,"animation");let{cssMap:l,cssVars:i}=ae(w(o,r),w(a,r),w(c,r))();if(s)for(const[d,h]of Object.entries(s)){const j=x(h),f=x(h,"secondary"),_=x(h,"animation");let{cssVars:p}=ae(w(j,r),w(f,r),w(_,r))({...o,...a,...c});i={...i,[`[data-theme=${d}] &:not([data-theme]), &[data-theme=${d}]`]:p}}return Object.assign(e,{__config:t,__cssVars:{...{},...i},__cssMap:l,__breakpoints:We(n)}),e},x=(e,t="primary")=>{let n=[],s=[],r=[];switch(t){case"primary":n=[...re],s=[...re,"colorSchemes"];break;case"secondary":n=[...oe],s=[...oe];break;case"animation":n=["animations"],s=["animations"],r=["keyframes"];break}const o=W(e,n),a=W(e.semantics??{},s),c=Object.entries(Y(o,1/0,r)).map(([i,m])=>[i,{isSemantic:!1,value:m}]),l=Object.entries(Y(a,1/0,r)).reduce((i,[m,u])=>{if(m.startsWith("colorSchemes.")){const[,d]=m.split(".");Oe.forEach(h=>{const j={isSemantic:!0,value:`${u}.${h}`};i.push([`colors.${d}.${h}`,j])})}else{const d={isSemantic:!0,value:u};i.push([m,d])}return i},[]);return ge([...c,...l])},ae=(...e)=>t=>{let n={},s={};for(const r of e){const{cssMap:o,cssVars:a}=r({baseTokens:t,cssMap:n,cssVars:s});n={...n,...o},s={...s,...a}}return{cssMap:n,cssVars:s}},Le=e=>L(e,["__cssMap","__cssVar","__breakpoints"]),it=e=>L(e,["size","variant","colorScheme"]),lt=(e,...t)=>({omit:n=[],pick:s=[]}={})=>t.reduce((r,o)=>F(fe(r)({omit:n,pick:s}),o),e),ut=(e,...t)=>({omit:n=[],pick:s=[]}={})=>t.reduce((r,o)=>F(fe(r)({omit:n,pick:s,isMulti:!0}),o),e),F=(e,t)=>{let n=Object.assign({},e);if(E(t)&&E(e))for(const[s,r]of Object.entries(t)){const o=e[s];e.hasOwnProperty(s)?!T(o)&&!T(r)?n[s]=F(o,r):n[s]=a=>F(O(o,a),O(r,a)):Object.assign(n,{[s]:r})}else n=t;return n},fe=e=>({omit:t,pick:n,isMulti:s=!1})=>(E(e)&&(t.length&&(e=V(e,t,s)(L)),n.length&&(e=V(e,n,s)(W))),e),V=(e,t,n,s=[])=>r=>(E(e)&&(e=r(e,t),Object.entries(e??{}).forEach(([o,a])=>{const c=t.filter(i=>i!==o),l=[...s,o];Ne(l,n)&&(T(a)?e[o]=i=>V(a(i),c,n,l)(r):e[o]=V(a,c,n,l)(r))})),e),Ne=(e,t)=>{switch(e[0]){case"baseStyle":return e.length<(t?2:1);case"variants":case"sizes":return e.length<(t?3:2);default:return!1}},dt=(e,t,n=!0)=>{const s={};return Object.entries(e).forEach(([r,o])=>{switch(r){case"baseStyle":T(o)?s[r]=a=>o(a)[t]:s[r]=o[t];break;case"variants":case"sizes":s[r]=Object.entries(o).reduce((a,[c,l])=>(T(l)?a[c]=i=>l(i)[t]:a[c]=l[t],a),{});break;case"defaultProps":n&&(s[r]=o);break}}),s},De="ui-theme-scheme",Qe=!!(globalThis!=null&&globalThis.document),Ue=e=>({ssr:!1,type:"localStorage",get:(t="base")=>{if(!Qe)return t;try{return localStorage.getItem(e)||t}catch{return t}},set:t=>{try{localStorage.setItem(e,String(t))}catch{}}}),Ke=Ue(De),ft=({theme:e={},config:t,themeSchemeManager:n=Ke,children:s})=>{const[r,o]=k.useState(n.get(t==null?void 0:t.initialThemeScheme)),a=k.useCallback(l=>{const i=t!=null&&t.disableTransitionOnChange?Je():void 0;document.documentElement.dataset.theme=l,i==null||i(),o(l),n.set(l)},[t,n]),c=k.useMemo(()=>Ge(e,t),[e,t]);return k.useEffect(()=>{const l=n.get();l&&a(l)},[a,n]),he(be,{theme:{themeScheme:r,changeThemeScheme:a,...c},children:[R(Ye,{}),s]})},Ye=()=>R(N,{styles:({__cssVars:e})=>({":host, :root, [data-mode]":e})}),mt=()=>{const{colorMode:e}=ie();return R(N,{styles:t=>{const{themeScheme:n}=t;let s=G(t,"styles.resetStyle",{});const r=O(s,{theme:t,colorMode:e,themeScheme:n});if(r)return le(r)(t)}})},ht=()=>{const{colorMode:e}=ie();return R(N,{styles:t=>{const{themeScheme:n}=t;let s=G(t,"styles.globalStyle",{});const r=O(s,{theme:t,colorMode:e,themeScheme:n});if(r)return le(r)(t)}})},_t=()=>{const{themeScheme:e,changeThemeScheme:t,...n}=k.useContext(ye);if(!n)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`");const s=k.useMemo(()=>{var a;if(ce(e)||e==="base")return n;const o=(a=n.themeSchemes)==null?void 0:a[e];return o?M(n,o):n},[e,n]);return k.useMemo(()=>({themeScheme:e,changeThemeScheme:t,theme:s,internalTheme:n}),[e,t,s,n])},Je=()=>{const e=document.createElement("style"),t=document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}");return e.appendChild(t),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(e)})})}};export{ht as G,mt as R,ft as T,tt as a,ot as b,nt as c,lt as d,I as g,ct as i,ut as m,it as o,dt as p,at as r,rt as s,st as t,_t as u};

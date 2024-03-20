import{j as l}from"./jsx-runtime-CKrituN3.js";import{u as Dt}from"./index-cFajppJS.js";import{r as h,R as Pt}from"./index-CBqU2yxZ.js";import{c as Pe,a as It,u as Et,R as Nt}from"./Combination-DlzjZhkT.js";import{S as St}from"./slide-BK41eP-M.js";import{m as Mt}from"./motion-JgkBPv6g.js";import{f as jt}from"./fade-Dx-IvGd4.js";import{f as b}from"./forward-ref-DuAegr0M.js";import{am as kt,D as At,c as Ie,v as X,M as P,o as Bt,a as C,u as Z,h as Ye,a0 as Tt,a1 as Lt,f as ve}from"./factory-jQ8alorc.js";import{C as Ut}from"./close-button-BQItQjbS.js";import{u as Ee}from"./use-component-style-DOSk5UmJ.js";import{o as Ne}from"./theme-provider-C1GLE5Ir.js";import{A as Wt}from"./index-_tcQm2Fk.js";import{P as Ht}from"./container-portal-BaYItYzY.js";import{_ as Gt,a as Rt}from"./defineProperty-52jbkDff.js";import{_ as we}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import{_ as qt}from"./inheritsLoose-B7h9gheN.js";import{M as Vt}from"./motion-BMD8dy6a.js";import{B as me}from"./button-DKIDvKTK.js";import{s as ee}from"./slide-fade-DVJLEYao.js";import{s as $t}from"./scale-fade-BadkkXn8.js";var Fe="data-focus-lock",Ke="data-focus-lock-disabled",Yt="data-no-focus-lock",Kt="data-autofocus-inside",Xt="data-no-autofocus",he={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},Xe=Pe({},function(e){var t=e.target,r=e.currentTarget;return{target:t,currentTarget:r}}),Ze=Pe(),Zt=Pe(),Jt=It({async:!0}),Qt=[],Se=h.forwardRef(function(t,r){var n,o=h.useState(),a=o[0],s=o[1],u=h.useRef(),i=h.useRef(!1),f=h.useRef(null),d=t.children,c=t.disabled,m=t.noFocusGuards,v=t.persistentFocus,p=t.crossFrame,y=t.autoFocus;t.allowTextSelection;var x=t.group,w=t.className,g=t.whiteList,F=t.hasPositiveIndices,N=t.shards,j=N===void 0?Qt:N,S=t.as,k=S===void 0?"div":S,E=t.lockProps,M=E===void 0?{}:E,A=t.sideCar,O=t.returnFocus,D=t.focusOptions,_=t.onActivation,L=t.onDeactivation,Q=h.useState({}),ce=Q[0],le=h.useCallback(function(){f.current=f.current||document&&document.activeElement,u.current&&_&&_(u.current),i.current=!0},[_]),U=h.useCallback(function(){i.current=!1,L&&L(u.current)},[L]);h.useEffect(function(){c||(f.current=null)},[]);var W=h.useCallback(function(B){var $=f.current;if($&&$.focus){var fe=typeof O=="function"?O($):O;if(fe){var We=typeof fe=="object"?fe:void 0;f.current=null,B?Promise.resolve().then(function(){return $.focus(We)}):$.focus(We)}}},[O]),de=h.useCallback(function(B){i.current&&Xe.useMedium(B)},[]),z=Ze.useMedium,wt=h.useCallback(function(B){u.current!==B&&(u.current=B,s(B))},[]),Ft=we((n={},n[Ke]=c&&"disabled",n[Fe]=x,n),M),Ue=m!==!0,Ot=Ue&&m!=="tail",_t=Et([r,wt]);return h.createElement(h.Fragment,null,Ue&&[h.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:c?-1:0,style:he}),F?h.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:c?-1:1,style:he}):null],!c&&h.createElement(A,{id:ce,sideCar:Jt,observed:a,disabled:c,persistentFocus:v,crossFrame:p,autoFocus:y,whiteList:g,shards:j,onActivation:le,onDeactivation:U,returnFocus:W,focusOptions:D}),h.createElement(k,we({ref:_t},Ft,{className:w,onBlur:z,onFocus:de}),d),Ot&&h.createElement("div",{"data-focus-guard":!0,tabIndex:c?-1:0,style:he}))});Se.propTypes={};Se.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};const Je=Se;function zt(e,t){function r(n){return n.displayName||n.name||"Component"}return function(o){var a=[],s;function u(){s=e(a.map(function(f){return f.props})),t(s)}var i=function(f){qt(d,f);function d(){return f.apply(this,arguments)||this}d.peek=function(){return s};var c=d.prototype;return c.componentDidMount=function(){a.push(this),u()},c.componentDidUpdate=function(){u()},c.componentWillUnmount=function(){var v=a.indexOf(this);a.splice(v,1),u()},c.render=function(){return Pt.createElement(o,this.props)},d}(h.PureComponent);return Gt(i,"displayName","SideEffect("+r(o)+")"),i}}var I=function(e){for(var t=Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t},ne=function(e){return Array.isArray(e)?e:[e]},Qe=function(e){return Array.isArray(e)?e[0]:e},er=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},ze=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},et=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},tr=function(e,t){return!e||et(e)||!er(e)&&t(ze(e))},tt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=tr(t,tt.bind(void 0,e));return e.set(t,n),n},rr=function(e,t){return e&&!et(e)?ar(e)?t(ze(e)):!1:!0},rt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=rr(t,rt.bind(void 0,e));return e.set(t,n),n},nt=function(e){return e.dataset},nr=function(e){return e.tagName==="BUTTON"},ot=function(e){return e.tagName==="INPUT"},at=function(e){return ot(e)&&e.type==="radio"},or=function(e){return!((ot(e)||nr(e))&&(e.type==="hidden"||e.disabled))},ar=function(e){var t=e.getAttribute(Xt);return![!0,"true",""].includes(t)},Me=function(e){var t;return!!(e&&(!((t=nt(e))===null||t===void 0)&&t.focusGuard))},oe=function(e){return!Me(e)},sr=function(e){return!!e},ur=function(e,t){var r=e.tabIndex-t.tabIndex,n=e.index-t.index;if(r){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return r||n},st=function(e,t,r){return I(e).map(function(n,o){return{node:n,index:o,tabIndex:r&&n.tabIndex===-1?(n.dataset||{}).focusGuard?0:-1:n.tabIndex}}).filter(function(n){return!t||n.tabIndex>=0}).sort(ur)},ir=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],je=ir.join(","),cr="".concat(je,", [data-focus-guard]"),ut=function(e,t){return I((e.shadowRoot||e).children).reduce(function(r,n){return r.concat(n.matches(t?cr:je)?[n]:[],ut(n))},[])},lr=function(e,t){var r;return e instanceof HTMLIFrameElement&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?ie([e.contentDocument.body],t):[e]},ie=function(e,t){return e.reduce(function(r,n){var o,a=ut(n,t),s=(o=[]).concat.apply(o,a.map(function(u){return lr(u,t)}));return r.concat(s,n.parentNode?I(n.parentNode.querySelectorAll(je)).filter(function(u){return u===n}):[])},[])},dr=function(e){var t=e.querySelectorAll("[".concat(Kt,"]"));return I(t).map(function(r){return ie([r])}).reduce(function(r,n){return r.concat(n)},[])},ke=function(e,t){return I(e).filter(function(r){return tt(t,r)}).filter(function(r){return or(r)})},He=function(e,t){return t===void 0&&(t=new Map),I(e).filter(function(r){return rt(t,r)})},Oe=function(e,t,r){return st(ke(ie(e,r),t),!0,r)},Ge=function(e,t){return st(ke(ie(e),t),!1)},fr=function(e,t){return ke(dr(e),t)},G=function(e,t){return e.shadowRoot?G(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:I(e.children).some(function(r){var n;if(r instanceof HTMLIFrameElement){var o=(n=r.contentDocument)===null||n===void 0?void 0:n.body;return o?G(o,t):!1}return G(r,t)})},vr=function(e){for(var t=new Set,r=e.length,n=0;n<r;n+=1)for(var o=n+1;o<r;o+=1){var a=e[n].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(n)}return e.filter(function(s,u){return!t.has(u)})},it=function(e){return e.parentNode?it(e.parentNode):e},Ae=function(e){var t=ne(e);return t.filter(Boolean).reduce(function(r,n){var o=n.getAttribute(Fe);return r.push.apply(r,o?vr(I(it(n).querySelectorAll("[".concat(Fe,'="').concat(o,'"]:not([').concat(Ke,'="disabled"])')))):[n]),r},[])},mr=function(e){try{return e()}catch{return}},Y=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?Y(t.shadowRoot):t instanceof HTMLIFrameElement&&mr(function(){return t.contentWindow.document})?Y(t.contentWindow.document):t}},hr=function(e,t){return e===t},pr=function(e,t){return!!I(e.querySelectorAll("iframe")).some(function(r){return hr(r,t)})},ct=function(e,t){return t===void 0&&(t=Y(Qe(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:Ae(e).some(function(r){return G(r,t)||pr(r,t)})},yr=function(e){e===void 0&&(e=document);var t=Y(e);return t?I(e.querySelectorAll("[".concat(Yt,"]"))).some(function(r){return G(r,t)}):!1},gr=function(e,t){return t.filter(at).filter(function(r){return r.name===e.name}).filter(function(r){return r.checked})[0]||e},Be=function(e,t){return at(e)&&e.name?gr(e,t):e},br=function(e){var t=new Set;return e.forEach(function(r){return t.add(Be(r,e))}),e.filter(function(r){return t.has(r)})},Re=function(e){return e[0]&&e.length>1?Be(e[0],e):e[0]},qe=function(e,t){return e.length>1?e.indexOf(Be(e[t],e)):t},lt="NEW_FOCUS",xr=function(e,t,r,n){var o=e.length,a=e[0],s=e[o-1],u=Me(r);if(!(r&&e.indexOf(r)>=0)){var i=r!==void 0?t.indexOf(r):-1,f=n?t.indexOf(n):i,d=n?e.indexOf(n):-1,c=i-f,m=t.indexOf(a),v=t.indexOf(s),p=br(t),y=r!==void 0?p.indexOf(r):-1,x=y-(n?p.indexOf(n):i),w=qe(e,0),g=qe(e,o-1);if(i===-1||d===-1)return lt;if(!c&&d>=0)return d;if(i<=m&&u&&Math.abs(c)>1)return g;if(i>=v&&u&&Math.abs(c)>1)return w;if(c&&Math.abs(x)>1)return d;if(i<=m)return g;if(i>v)return w;if(c)return Math.abs(c)>1?d:(o+d+c)%o}},Cr=function(e){return function(t){var r,n=(r=nt(t))===null||r===void 0?void 0:r.autofocus;return t.autofocus||n!==void 0&&n!=="false"||e.indexOf(t)>=0}},wr=function(e,t,r){var n=e.map(function(a){var s=a.node;return s}),o=He(n.filter(Cr(r)));return o&&o.length?Re(o):Re(He(t))},_e=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&_e(e.parentNode.host||e.parentNode,t),t},pe=function(e,t){for(var r=_e(e),n=_e(t),o=0;o<r.length;o+=1){var a=r[o];if(n.indexOf(a)>=0)return a}return!1},dt=function(e,t,r){var n=ne(e),o=ne(t),a=n[0],s=!1;return o.filter(Boolean).forEach(function(u){s=pe(s||u,u)||s,r.filter(Boolean).forEach(function(i){var f=pe(a,i);f&&(!s||G(f,s)?s=f:s=pe(f,s))})}),s},Fr=function(e,t){return e.reduce(function(r,n){return r.concat(fr(n,t))},[])},Or=function(e,t){var r=new Map;return t.forEach(function(n){return r.set(n.node,n)}),e.map(function(n){return r.get(n)}).filter(sr)},_r=function(e,t){var r=Y(ne(e).length>0?document:Qe(e).ownerDocument),n=Ae(e).filter(oe),o=dt(r||e,e,n),a=new Map,s=Ge(n,a),u=Oe(n,a).filter(function(v){var p=v.node;return oe(p)});if(!(!u[0]&&(u=s,!u[0]))){var i=Ge([o],a).map(function(v){var p=v.node;return p}),f=Or(i,u),d=f.map(function(v){var p=v.node;return p}),c=xr(d,i,r,t);if(c===lt){var m=wr(s,d,Fr(n,a));if(m)return{node:m};console.warn("focus-lock: cannot find any node to move focus into");return}return c===void 0?c:f[c]}},Dr=function(e){var t=Ae(e).filter(oe),r=dt(e,e,t),n=new Map,o=Oe([r],n,!0),a=Oe(t,n).filter(function(s){var u=s.node;return oe(u)}).map(function(s){var u=s.node;return u});return o.map(function(s){var u=s.node,i=s.index;return{node:u,index:i,lockItem:a.indexOf(u)>=0,guard:Me(u)}})},Pr=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},ye=0,ge=!1,ft=function(e,t,r){r===void 0&&(r={});var n=_r(e,t);if(!ge&&n){if(ye>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),ge=!0,setTimeout(function(){ge=!1},1);return}ye++,Pr(n.node,r.focusOptions),ye--}};function Te(e){setTimeout(e,1)}var Ir=function(){return document&&document.activeElement===document.body},Er=function(){return Ir()||yr()},R=null,H=null,q=null,K=!1,Nr=function(){return!0},Sr=function(t){return(R.whiteList||Nr)(t)},Mr=function(t,r){q={observerNode:t,portaledElement:r}},jr=function(t){return q&&q.portaledElement===t};function Ve(e,t,r,n){var o=null,a=e;do{var s=n[a];if(s.guard)s.node.dataset.focusAutoGuard&&(o=s);else if(s.lockItem){if(a!==e)return;o=null}else break}while((a+=r)!==t);o&&(o.node.tabIndex=0)}var kr=function(t){return t&&"current"in t?t.current:t},Ar=function(t){return t?!!K:K==="meanwhile"},Br=function e(t,r,n){return r&&(r.host===t&&(!r.activeElement||n.contains(r.activeElement))||r.parentNode&&e(t,r.parentNode,n))},Tr=function(t,r){return r.some(function(n){return Br(t,n,n)})},ae=function(){var t=!1;if(R){var r=R,n=r.observed,o=r.persistentFocus,a=r.autoFocus,s=r.shards,u=r.crossFrame,i=r.focusOptions,f=n||q&&q.portaledElement,d=document&&document.activeElement;if(f){var c=[f].concat(s.map(kr).filter(Boolean));if((!d||Sr(d))&&(o||Ar(u)||!Er()||!H&&a)&&(f&&!(ct(c)||d&&Tr(d,c)||jr(d))&&(document&&!H&&d&&!a?(d.blur&&d.blur(),document.body.focus()):(t=ft(c,H,{focusOptions:i}),q={})),K=!1,H=document&&document.activeElement),document){var m=document&&document.activeElement,v=Dr(c),p=v.map(function(y){var x=y.node;return x}).indexOf(m);p>-1&&(v.filter(function(y){var x=y.guard,w=y.node;return x&&w.dataset.focusAutoGuard}).forEach(function(y){var x=y.node;return x.removeAttribute("tabIndex")}),Ve(p,v.length,1,v),Ve(p,-1,-1,v))}}}return t},vt=function(t){ae()&&t&&(t.stopPropagation(),t.preventDefault())},Le=function(){return Te(ae)},Lr=function(t){var r=t.target,n=t.currentTarget;n.contains(r)||Mr(n,r)},Ur=function(){return null},mt=function(){K="just",Te(function(){K="meanwhile"})},Wr=function(){document.addEventListener("focusin",vt),document.addEventListener("focusout",Le),window.addEventListener("blur",mt)},Hr=function(){document.removeEventListener("focusin",vt),document.removeEventListener("focusout",Le),window.removeEventListener("blur",mt)};function Gr(e){return e.filter(function(t){var r=t.disabled;return!r})}function Rr(e){var t=e.slice(-1)[0];t&&!R&&Wr();var r=R,n=r&&t&&t.id===r.id;R=t,r&&!n&&(r.onDeactivation(),e.filter(function(o){var a=o.id;return a===r.id}).length||r.returnFocus(!t)),t?(H=null,(!n||r.observed!==t.observed)&&t.onActivation(),ae(),Te(ae)):(Hr(),H=null)}Xe.assignSyncMedium(Lr);Ze.assignMedium(Le);Zt.assignMedium(function(e){return e({moveFocusInside:ft,focusInside:ct})});const qr=zt(Gr,Rr)(Ur);var ht=h.forwardRef(function(t,r){return h.createElement(Je,we({sideCar:qr,ref:r},t))}),pt=Je.propTypes||{};pt.sideCar;Rt(pt,["sideCar"]);ht.propTypes={};const Vr=ht,$r=kt(Vr),Yr=({initialFocusRef:e,finalFocusRef:t,contentRef:r,restoreFocus:n,children:o,isDisabled:a,autoFocus:s,persistentFocus:u,lockFocusAcrossFrames:i})=>{const f=h.useCallback(()=>{e!=null&&e.current?e.current.focus():r!=null&&r.current&&At(r.current).length===0&&requestAnimationFrame(()=>{var v;(v=r.current)==null||v.focus()})},[e,r]),d=h.useCallback(()=>{var m;(m=t==null?void 0:t.current)==null||m.focus()},[t]),c=n&&!t;return l.jsx($r,{crossFrame:i,persistentFocus:u,autoFocus:s,disabled:a,onActivation:f,onDeactivation:d,returnFocus:c,children:o})},[Kr,V]=Ie({name:"DrawerContext",errorMessage:`useDrawer returned is 'undefined'. Seems you forgot to wrap the components in "<Drawer />" `}),Cn=b(({size:e,placement:t="right",closeOnDrag:r,...n},o)=>{const[a,s]=Ee("Drawer",{size:e,placement:t,...n}),{children:u,isOpen:i,onClose:f,onOverlayClick:d,onEsc:c,onCloseComplete:m,withCloseButton:v=!0,withOverlay:p=!0,allowPinchZoom:y,autoFocus:x,restoreFocus:w,initialFocusRef:g,finalFocusRef:F,blockScrollOnMount:N,closeOnOverlay:j,closeOnEsc:S,lockFocusAcrossFrames:k,duration:E={enter:.4,exit:.3},portalProps:M,...A}=Ne(s),O=X(u),[D,..._]=P(O,De);return l.jsx(Kr,{value:a,children:l.jsxs(gt,{ref:o,isOpen:i,onClose:f,onOverlayClick:d,onEsc:c,onCloseComplete:m,withCloseButton:!1,withOverlay:!1,allowPinchZoom:y,autoFocus:x,restoreFocus:w,initialFocusRef:g,finalFocusRef:F,blockScrollOnMount:N,closeOnOverlay:j,closeOnEsc:S,lockFocusAcrossFrames:k,duration:E,portalProps:M,children:[D??(p?l.jsx(De,{}):null),l.jsx(yt,{closeOnDrag:r,withCloseButton:v,...Bt(A,["isFullHeight"]),placement:t,children:_})]})})}),yt=b(({className:e,children:t,placement:r,withCloseButton:n,closeOnDrag:o,...a},s)=>{const{isOpen:u,onClose:i,duration:f}=T(),d=V(),c=X(t),[m,...v]=P(c,$e),p={display:"flex",flexDirection:"column",width:"100%",outline:0,...d.container},y=h.useCallback(()=>{switch(r){case"top":return{bottom:0};case"bottom":return{top:0};case"left":return{right:0};case"right":return{left:0}}},[r]),x=h.useCallback(()=>{switch(r){case"top":case"bottom":return"y";case"left":case"right":return"x"}},[r]),w=h.useCallback(g=>{switch(r){case"top":return g.velocity.y<=-100||g.offset.y<=-80;case"bottom":return g.velocity.y>=100||g.offset.y>=80;case"left":return g.velocity.x<=-100||g.offset.x<=-80;case"right":return g.velocity.x>=100||g.offset.x>=80}},[r]);return l.jsxs(St,{ref:s,drag:o?x():!1,dragConstraints:y(),dragElastic:y(),dragSnapToOrigin:!0,dragMomentum:!1,onDragEnd:(g,F)=>{w(F)&&(i==null||i())},className:C("ui-drawer",e),tabIndex:-1,isOpen:u,placement:r,duration:f,__css:p,...a,children:[m??(n&&i?l.jsx($e,{}):null),v]})}),De=b(({className:e,...t},r)=>{const o={...V().overlay};return l.jsx(se,{ref:r,className:C("ui-drawer__overlay",e),__css:o,...t})}),$e=b(({className:e,...t},r)=>{const o={...V().closeButton};return l.jsx(ue,{ref:r,className:C("ui-drawer__close-button",e),__css:o,...t})}),wn=b(({className:e,...t},r)=>{const o={...V().header};return l.jsx(bt,{ref:r,className:C("ui-drawer__header",e),__css:o,...t})}),Fn=b(({className:e,...t},r)=>{const o={...V().body};return l.jsx(xt,{ref:r,className:C("ui-drawer__body",e),__css:o,...t})}),On=b(({className:e,...t},r)=>{const o={...V().footer};return l.jsx(Ct,{ref:r,className:C("ui-drawer__footer",e),__css:o,...t})}),[Xr,T]=Ie({name:"ModalContext",errorMessage:`useModal returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),gt=b(({size:e,...t},r)=>{const[n,o]=Ee("Modal",{size:e,...t}),{className:a,children:s,isOpen:u,onClose:i,onOverlayClick:f,onEsc:d,onCloseComplete:c,placement:m="center",outside:v="1rem",withCloseButton:p=!0,withOverlay:y=!0,allowPinchZoom:x=!1,scrollBehavior:w="inside",autoFocus:g,restoreFocus:F,initialFocusRef:N,finalFocusRef:j,blockScrollOnMount:S=!0,closeOnOverlay:k=!0,closeOnEsc:E=!0,lockFocusAcrossFrames:M=!0,animation:A="scale",duration:O,portalProps:D,..._}=Ne(o),L=h.useCallback(z=>{z.key==="Escape"&&(z.stopPropagation(),E&&(i==null||i()),d==null||d())},[E,i,d]),Q=X(s),[ce,...le]=P(Q,se,te,De);let[U]=P(Q,yt);U&&(U=h.cloneElement(U,{onKeyDown:L}));const W=Dt(m),de={position:"fixed",top:0,left:0,zIndex:110,w:"100vw",h:"100dvh",p:e!=="full"?v:void 0,display:"flex",justifyContent:W.includes("left")?"flex-start":W.includes("right")?"flex-end":"center",alignItems:W.includes("top")?"flex-start":W.includes("bottom")?"flex-end":"center"};return l.jsx(Xr,{value:{isOpen:u,onClose:i,onOverlayClick:f,withCloseButton:p,scrollBehavior:w,closeOnOverlay:k,animation:A,duration:O,styles:n},children:l.jsx(Wt,{onExitComplete:c,children:u?l.jsx(Ht,{...D,children:l.jsx(Yr,{autoFocus:g,initialFocusRef:N,finalFocusRef:j,restoreFocus:F,lockFocusAcrossFrames:M,children:l.jsx(Nt,{allowPinchZoom:x,enabled:S,forwardProps:!0,children:l.jsxs(Z.div,{__css:de,children:[ce??(y&&e!=="full"?l.jsx(se,{}):null),U??l.jsx(Jr,{ref:r,className:a,onKeyDown:L,..._,children:le})]})})})}):null})})}),Zr=(e="scale",t)=>{switch(e){case"scale":return{...$t,custom:{scale:.95,reverse:!0,duration:t}};case"top":return{...ee,custom:{offsetY:-16,reverse:!0,duration:t}};case"right":return{...ee,custom:{offsetX:16,reverse:!0,duration:t}};case"left":return{...ee,custom:{offsetX:-16,reverse:!0,duration:t}};case"bottom":return{...ee,custom:{offsetY:16,reverse:!0,duration:t}}}},Jr=b(({className:e,children:t,__css:r,...n},o)=>{const{styles:a,scrollBehavior:s,withCloseButton:u,onClose:i,animation:f,duration:d}=T(),c=X(t),[m,...v]=P(c,ue,re),p=f!=="none"?Zr(f,d):{},y={position:"relative",maxH:"100%",display:"flex",flexDirection:"column",overflow:s==="inside"?"hidden":"auto",outline:0,...r||a.container};return l.jsxs(Vt,{as:"section",ref:o,className:C("ui-modal",e),tabIndex:-1,__css:y,...p,...n,children:[m??(u&&i?l.jsx(ue,{}):null),v]})}),se=b(({className:e,__css:t,onClick:r,...n},o)=>{const{styles:a,closeOnOverlay:s,onOverlayClick:u,onClose:i,animation:f,duration:d}=T(),c={position:"fixed",top:0,left:0,w:"100vw",h:"100vh",...t||a.overlay},m=f!=="none"?jt:{};return l.jsx(Z.div,{as:Mt.div,ref:o,className:C("ui-modal__overlay",e),custom:{duration:d},__css:c,onClick:Ye(r,u,v=>{v.stopPropagation(),s&&(i==null||i())}),...m,...n})}),ue=b(({onClick:e,__css:t,...r},n)=>{const{styles:o,onClose:a}=T(),s={position:"absolute",...t||o.closeButton};return l.jsx(Ut,{ref:n,className:C("ui-modal__close-button"),__css:s,onClick:Ye(e,u=>{u.stopPropagation(),a==null||a()}),...r})}),bt=b(({className:e,__css:t,...r},n)=>{const{styles:o}=T(),a={display:"flex",alignItems:"center",justifyContent:"flex-start",...t||o.header};return l.jsx(Z.header,{ref:n,className:C("ui-modal__header",e),__css:a,...r})}),xt=b(({className:e,__css:t,...r},n)=>{const{styles:o,scrollBehavior:a}=T(),s={display:"flex",flexDirection:"column",alignItems:"flex-start",overflow:a==="inside"?"auto":void 0,...t||o.body};return l.jsx(Z.main,{ref:n,className:C("ui-modal__body",e),__css:s,...r})}),Ct=b(({className:e,__css:t,...r},n)=>{const{styles:o}=T(),a={display:"flex",alignItems:"center",justifyContent:"flex-end",...t||o.footer};return l.jsx(Z.footer,{ref:n,className:C("ui-modal__footer",e),__css:a,...r})}),[Qr,J]=Ie({name:"DialogContext",errorMessage:`useDialog returned is 'undefined'. Seems you forgot to wrap the components in "<Dialog />" `}),_n=b(({size:e,...t},r)=>{const[n,o]=Ee("Dialog",{size:e,...t}),{className:a,children:s,withOverlay:u=!0,withCloseButton:i=!0,header:f,footer:d,cancel:c,other:m,success:v,onClose:p,onCancel:y,onOther:x,onSuccess:w,...g}=Ne(o),F=X(s),[N]=P(F,te),[j]=P(F,re),[S]=P(F,be),[k]=P(F,xe),[E]=P(F,Ce),M=Tt(F)?s:Lt(F,te,re,be,xe,Ce),A={...n.container},O=ve(c)?{children:c}:c,D=ve(m)?{children:m}:m,_=ve(v)?{children:v}:v;return O&&!O.variant&&(O.variant="ghost"),D&&!D.colorScheme&&(D.colorScheme="secondary"),_&&!_.colorScheme&&(_.colorScheme="primary"),l.jsx(Qr,{value:n,children:l.jsxs(gt,{ref:r,className:C("ui-dialog",a),__css:A,size:e,onClose:p,withOverlay:!1,withCloseButton:!1,...g,children:[N??(u&&e!=="full"?l.jsx(te,{}):null),j??(i&&p?l.jsx(re,{}):null),S??(f?l.jsx(be,{children:f}):null),k??(M?l.jsx(xe,{children:M}):null),E??(d||O||D||_?l.jsx(Ce,{children:d??l.jsxs(l.Fragment,{children:[O?l.jsx(me,{onClick:()=>y==null?void 0:y(p),...O}):null,D?l.jsx(me,{onClick:()=>x==null?void 0:x(p),...D}):null,_?l.jsx(me,{onClick:()=>w==null?void 0:w(p),..._}):null]})}):null)]})})}),te=b(({className:e,...t},r)=>{const o={...J().overlay};return l.jsx(se,{ref:r,className:C("ui-dialog__overlay",e),__css:o,...t})}),re=b(({className:e,...t},r)=>{const o={...J().closeButton};return l.jsx(ue,{ref:r,className:C("ui-dialog__close-button",e),__css:o,...t})}),be=b(({className:e,...t},r)=>{const o={...J().header};return l.jsx(bt,{ref:r,className:C("ui-dialog__header",e),__css:o,...t})}),xe=b(({className:e,...t},r)=>{const o={...J().body};return l.jsx(xt,{ref:r,className:C("ui-dialog__body",e),__css:o,...t})}),Ce=b(({className:e,...t},r)=>{const o={...J().footer};return l.jsx(Ct,{ref:r,className:C("ui-dialog__footer",e),__css:o,...t})});export{_n as D,gt as M,be as a,xe as b,Ce as c,re as d,te as e,Cn as f,wn as g,Fn as h,On as i,$e as j,De as k,bt as l,xt as m,Ct as n,ue as o,se as p};

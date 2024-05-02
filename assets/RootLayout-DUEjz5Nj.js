import{_ as h,c as xe,s as ve,a as I,r as v,b as P,j as l,d as B,u as me,e as H,g as q,f as ge,R as F,h as _,T as se,i as ae,k as X,l as z,m as Y,n as Ee,o as le,p as J,q as be,t as Ce,v as ce,w as ke,S as x,D as ye,B as K,x as Q,y as Z,z as ee,O as Te}from"./index-BmMPfG9M.js";import{A as je}from"./Avatar-CURWeyYP.js";const Re=["className","component","disableGutters","fixed","maxWidth","classes"],Se=xe(),Ne=ve("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:r}=i;return[t.root,t[`maxWidth${I(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),Me=i=>me({props:i,name:"MuiContainer",defaultTheme:Se}),$e=(i,t)=>{const r=c=>q(t,c),{classes:s,fixed:o,disableGutters:e,maxWidth:n}=i,a={root:["root",n&&`maxWidth${I(String(n))}`,o&&"fixed",e&&"disableGutters"]};return H(a,r,s)};function Le(i={}){const{createStyledComponent:t=Ne,useThemeProps:r=Me,componentName:s="MuiContainer"}=i,o=t(({theme:n,ownerState:a})=>h({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}}),({theme:n,ownerState:a})=>a.fixed&&Object.keys(n.breakpoints.values).reduce((c,d)=>{const u=d,f=n.breakpoints.values[u];return f!==0&&(c[n.breakpoints.up(u)]={maxWidth:`${f}${n.breakpoints.unit}`}),c},{}),({theme:n,ownerState:a})=>h({},a.maxWidth==="xs"&&{[n.breakpoints.up("xs")]:{maxWidth:Math.max(n.breakpoints.values.xs,444)}},a.maxWidth&&a.maxWidth!=="xs"&&{[n.breakpoints.up(a.maxWidth)]:{maxWidth:`${n.breakpoints.values[a.maxWidth]}${n.breakpoints.unit}`}}));return v.forwardRef(function(a,c){const d=r(a),{className:u,component:f="div",disableGutters:m=!1,fixed:R=!1,maxWidth:S="lg"}=d,L=P(d,Re),b=h({},d,{component:f,disableGutters:m,fixed:R,maxWidth:S}),k=$e(b,s);return l.jsx(o,h({as:f,ownerState:b,className:B(k.root,u),ref:c},L))})}const te=i=>{let t;return i<1?t=5.11916*i**2:t=4.5*Math.log(i+1)+2,(t/100).toFixed(2)},ne={disabled:!1};var De=function(t){return t.scrollTop},w="unmounted",T="exited",j="entering",$="entered",A="exiting",E=function(i){ge(t,i);function t(s,o){var e;e=i.call(this,s,o)||this;var n=o,a=n&&!n.isMounting?s.enter:s.appear,c;return e.appearStatus=null,s.in?a?(c=T,e.appearStatus=j):c=$:s.unmountOnExit||s.mountOnEnter?c=w:c=T,e.state={status:c},e.nextCallback=null,e}t.getDerivedStateFromProps=function(o,e){var n=o.in;return n&&e.status===w?{status:T}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(o){var e=null;if(o!==this.props){var n=this.state.status;this.props.in?n!==j&&n!==$&&(e=j):(n===j||n===$)&&(e=A)}this.updateStatus(!1,e)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var o=this.props.timeout,e,n,a;return e=n=a=o,o!=null&&typeof o!="number"&&(e=o.exit,n=o.enter,a=o.appear!==void 0?o.appear:n),{exit:e,enter:n,appear:a}},r.updateStatus=function(o,e){if(o===void 0&&(o=!1),e!==null)if(this.cancelNextCallback(),e===j){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:F.findDOMNode(this);n&&De(n)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===T&&this.setState({status:w})},r.performEnter=function(o){var e=this,n=this.props.enter,a=this.context?this.context.isMounting:o,c=this.props.nodeRef?[a]:[F.findDOMNode(this),a],d=c[0],u=c[1],f=this.getTimeouts(),m=a?f.appear:f.enter;if(!o&&!n||ne.disabled){this.safeSetState({status:$},function(){e.props.onEntered(d)});return}this.props.onEnter(d,u),this.safeSetState({status:j},function(){e.props.onEntering(d,u),e.onTransitionEnd(m,function(){e.safeSetState({status:$},function(){e.props.onEntered(d,u)})})})},r.performExit=function(){var o=this,e=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:F.findDOMNode(this);if(!e||ne.disabled){this.safeSetState({status:T},function(){o.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:A},function(){o.props.onExiting(a),o.onTransitionEnd(n.exit,function(){o.safeSetState({status:T},function(){o.props.onExited(a)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(o,e){e=this.setNextCallback(e),this.setState(o,e)},r.setNextCallback=function(o){var e=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,e.nextCallback=null,o(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(o,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:F.findDOMNode(this),a=o==null&&!this.props.addEndListener;if(!n||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],d=c[0],u=c[1];this.props.addEndListener(d,u)}o!=null&&setTimeout(this.nextCallback,o)},r.render=function(){var o=this.state.status;if(o===w)return null;var e=this.props,n=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var a=P(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return _.createElement(se.Provider,{value:null},typeof n=="function"?n(o,a):_.cloneElement(_.Children.only(n),a))},t}(_.Component);E.contextType=se;E.propTypes={};function M(){}E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:M,onEntering:M,onEntered:M,onExit:M,onExiting:M,onExited:M};E.UNMOUNTED=w;E.EXITED=T;E.ENTERING=j;E.ENTERED=$;E.EXITING=A;const we=E,Ie=i=>i.scrollTop;function ie(i,t){var r,s;const{timeout:o,easing:e,style:n={}}=i;return{duration:(r=n.transitionDuration)!=null?r:typeof o=="number"?o:o[t.mode]||0,easing:(s=n.transitionTimingFunction)!=null?s:typeof e=="object"?e[t.mode]:e,delay:n.transitionDelay}}function Pe(i){return q("MuiPaper",i)}ae("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Oe=["className","component","elevation","square","variant"],We=i=>{const{square:t,elevation:r,variant:s,classes:o}=i,e={root:["root",s,!t&&"rounded",s==="elevation"&&`elevation${r}`]};return H(e,Pe,o)},Fe=X("div",{name:"MuiPaper",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:r}=i;return[t.root,t[r.variant],!r.square&&t.rounded,r.variant==="elevation"&&t[`elevation${r.elevation}`]]}})(({theme:i,ownerState:t})=>{var r;return h({backgroundColor:(i.vars||i).palette.background.paper,color:(i.vars||i).palette.text.primary,transition:i.transitions.create("box-shadow")},!t.square&&{borderRadius:i.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(i.vars||i).palette.divider}`},t.variant==="elevation"&&h({boxShadow:(i.vars||i).shadows[t.elevation]},!i.vars&&i.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${z("#fff",te(t.elevation))}, ${z("#fff",te(t.elevation))})`},i.vars&&{backgroundImage:(r=i.vars.overlays)==null?void 0:r[t.elevation]}))}),_e=v.forwardRef(function(t,r){const s=Y({props:t,name:"MuiPaper"}),{className:o,component:e="div",elevation:n=1,square:a=!1,variant:c="elevation"}=s,d=P(s,Oe),u=h({},s,{component:e,elevation:n,square:a,variant:c}),f=We(u);return l.jsx(Fe,h({as:e,ownerState:u,className:B(f.root,o),ref:r},d))}),oe=_e,Ge=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Ue={entering:{opacity:1},entered:{opacity:1}},Ve=v.forwardRef(function(t,r){const s=Ee(),o={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{addEndListener:e,appear:n=!0,children:a,easing:c,in:d,onEnter:u,onEntered:f,onEntering:m,onExit:R,onExited:S,onExiting:L,style:b,timeout:k=o,TransitionComponent:G=we}=t,O=P(t,Ge),N=v.useRef(null),U=le(N,a.ref,r),C=p=>g=>{if(p){const D=N.current;g===void 0?p(D):p(D,g)}},W=C(m),V=C((p,g)=>{Ie(p);const D=ie({style:b,timeout:k,easing:c},{mode:"enter"});p.style.webkitTransition=s.transitions.create("opacity",D),p.style.transition=s.transitions.create("opacity",D),u&&u(p,g)}),y=C(f),ue=C(L),pe=C(p=>{const g=ie({style:b,timeout:k,easing:c},{mode:"exit"});p.style.webkitTransition=s.transitions.create("opacity",g),p.style.transition=s.transitions.create("opacity",g),R&&R(p)}),fe=C(S),he=p=>{e&&e(N.current,p)};return l.jsx(G,h({appear:n,in:d,nodeRef:N,onEnter:V,onEntered:y,onEntering:W,onExit:pe,onExited:fe,onExiting:ue,addEndListener:he,timeout:k},O,{children:(p,g)=>v.cloneElement(a,h({style:h({opacity:0,visibility:p==="exited"&&!d?"hidden":void 0},Ue[p],b,a.props.style),ref:U},g))}))}),ze=Ve,Ae=Le({createStyledComponent:X("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:r}=i;return[t.root,t[`maxWidth${I(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:i=>Y({props:i,name:"MuiContainer"})}),Be=Ae;function He(i){return q("MuiLink",i)}const qe=ae("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Xe=qe,de={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Ye=i=>de[i]||i,Je=({theme:i,ownerState:t})=>{const r=Ye(t.color),s=J(i,`palette.${r}`,!1)||t.color,o=J(i,`palette.${r}Channel`);return"vars"in i&&o?`rgba(${o} / 0.4)`:z(s,.4)},Ke=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Qe=i=>{const{classes:t,component:r,focusVisible:s,underline:o}=i,e={root:["root",`underline${I(o)}`,r==="button"&&"button",s&&"focusVisible"]};return H(e,He,t)},Ze=X(be,{name:"MuiLink",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:r}=i;return[t.root,t[`underline${I(r.underline)}`],r.component==="button"&&t.button]}})(({theme:i,ownerState:t})=>h({},t.underline==="none"&&{textDecoration:"none"},t.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},t.underline==="always"&&h({textDecoration:"underline"},t.color!=="inherit"&&{textDecorationColor:Je({theme:i,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),t.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Xe.focusVisible}`]:{outline:"auto"}})),et=v.forwardRef(function(t,r){const s=Y({props:t,name:"MuiLink"}),{className:o,color:e="primary",component:n="a",onBlur:a,onFocus:c,TypographyClasses:d,underline:u="always",variant:f="inherit",sx:m}=s,R=P(s,Ke),{isFocusVisibleRef:S,onBlur:L,onFocus:b,ref:k}=Ce(),[G,O]=v.useState(!1),N=le(r,k),U=y=>{L(y),S.current===!1&&O(!1),a&&a(y)},C=y=>{b(y),S.current===!0&&O(!0),c&&c(y)},W=h({},s,{color:e,component:n,focusVisible:G,underline:u,variant:f}),V=Qe(W);return l.jsx(Ze,h({color:e,className:B(V.root,o),classes:d,component:n,onBlur:U,onFocus:C,ref:N,ownerState:W,variant:f,sx:[...Object.keys(de).includes(e)?[]:[{color:e}],...Array.isArray(m)?m:[m]]},R))}),re=et,tt=ce(l.jsx("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub"),nt=ce(l.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn"),it=()=>{const i=ke(),t=["C#","C/C++",".NET Framework","TypeScript","Node.js","React Framework","Python"],r=i.filter(d=>{var u;return!!((u=d.handle)!=null&&u.headerMenu)}).map(d=>{const u=d.handle.headerMenu(d.data);return l.jsx(x,{direction:"row",children:u},d.id)}),[s,o]=v.useState(0),[e,n]=v.useState(!0);v.useEffect(()=>{const d=setInterval(()=>{n(!1),setTimeout(()=>{o(u=>(u+1)%t.length),n(!0)},500)},5e3);return()=>clearInterval(d)},[]);const a=l.jsxs(x,{direction:"row",alignItems:"center",justifyContent:"flex-start",children:[l.jsx(K,{ml:1,children:l.jsx(je,{alt:"Florin",src:"/src/assets/images/Profile.jpg"})}),l.jsx(K,{ml:4,children:l.jsxs(x,{direction:"row",children:[l.jsx(x,{children:l.jsx(Q,{size:"large",disabled:!0,variant:"text",sx:{width:"100%",color:"inherit"},children:"Software Engineer |"})}),l.jsx(x,{children:l.jsx(ze,{in:e,children:l.jsx(Q,{size:"large",disabled:!0,variant:"text",sx:{width:"100%",color:"inherit"},children:`${t[s]}`})})})]})})]}),c=l.jsx(x,{direction:"row",alignItems:"center",justifyContent:"flex-start",marginLeft:10,children:r});return l.jsx(l.Fragment,{children:l.jsx(x,{sx:{backgroundColor:ye,zIndex:1,height:"40px"},p:4,children:l.jsxs(x,{direction:"row",alignItems:"center",justifyContent:"space-between",height:"100%",children:[l.jsx(x,{direction:"row",alignItems:"center",justifyContent:"left",height:"100%",children:a}),c]})})})},ot=i=>l.jsx(x,{sx:{backgroundColor:Z,width:"35px"},display:"flex",alignItems:"center",spacing:4,padding:4,children:l.jsxs(x,{gap:4,justifyContent:"flex-end",height:"100%",sx:{backgroundColor:Z,overflow:"auto"},children:[l.jsx(re,{href:"https://github.com/ftilie",underline:"none",rel:"noopener noreferrer",target:"_blank",children:l.jsx(tt,{fontSize:"large",sx:{color:ee}})}),l.jsx(re,{href:"https://www.linkedin.com/in/florin-tilie/",underline:"none",rel:"noopener noreferrer",target:"_blank",children:l.jsx(nt,{fontSize:"large",sx:{color:ee}})})]})}),at=()=>l.jsx("div",{children:l.jsx(oe,{children:l.jsxs(x,{direction:"column",spacing:0,children:[l.jsx(it,{}),l.jsxs(x,{direction:"row",spacing:0,sx:{height:"calc(100vh - 71px)"},alignItems:"stretch",children:[l.jsx(ot,{}),l.jsx(oe,{elevation:0,sx:{width:"100%",overflowY:"auto"},children:l.jsx(Be,{maxWidth:!1,sx:{padding:8},children:l.jsx(Te,{})})})]})]})})});export{at as default};
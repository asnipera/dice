(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Dl(s,e){const t=Object.create(null),n=s.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const ct={},ws=[],vn=()=>{},ap=()=>!1,lp=/^on[^a-z]/,Go=s=>lp.test(s),Ul=s=>s.startsWith("onUpdate:"),Rt=Object.assign,Fl=(s,e)=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)},cp=Object.prototype.hasOwnProperty,Je=(s,e)=>cp.call(s,e),He=Array.isArray,_r=s=>Wo(s)==="[object Map]",up=s=>Wo(s)==="[object Set]",Xe=s=>typeof s=="function",Nt=s=>typeof s=="string",Ol=s=>typeof s=="symbol",Mt=s=>s!==null&&typeof s=="object",gd=s=>Mt(s)&&Xe(s.then)&&Xe(s.catch),hp=Object.prototype.toString,Wo=s=>hp.call(s),dp=s=>Wo(s).slice(8,-1),fp=s=>Wo(s)==="[object Object]",Bl=s=>Nt(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,Ao=Dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=s=>{const e=Object.create(null);return t=>e[t]||(e[t]=s(t))},pp=/-(\w)/g,Is=Xo(s=>s.replace(pp,(e,t)=>t?t.toUpperCase():"")),mp=/\B([A-Z])/g,js=Xo(s=>s.replace(mp,"-$1").toLowerCase()),_d=Xo(s=>s.charAt(0).toUpperCase()+s.slice(1)),ca=Xo(s=>s?`on${_d(s)}`:""),No=(s,e)=>!Object.is(s,e),ua=(s,e)=>{for(let t=0;t<s.length;t++)s[t](e)},Do=(s,e,t)=>{Object.defineProperty(s,e,{configurable:!0,enumerable:!1,value:t})},gp=s=>{const e=parseFloat(s);return isNaN(e)?s:e};let wc;const al=()=>wc||(wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zl(s){if(He(s)){const e={};for(let t=0;t<s.length;t++){const n=s[t],i=Nt(n)?yp(n):zl(n);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Nt(s))return s;if(Mt(s))return s}}const _p=/;(?![^(]*\))/g,vp=/:([^]+)/,xp=/\/\*[^]*?\*\//g;function yp(s){const e={};return s.replace(xp,"").split(_p).forEach(t=>{if(t){const n=t.split(vp);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Hl(s){let e="";if(Nt(s))e=s;else if(He(s))for(let t=0;t<s.length;t++){const n=Hl(s[t]);n&&(e+=n+" ")}else if(Mt(s))for(const t in s)s[t]&&(e+=t+" ");return e.trim()}const Mp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ep=Dl(Mp);function vd(s){return!!s||s===""}let fn;class bp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=fn,!e&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=fn;try{return fn=this,e()}finally{fn=t}}}on(){fn=this}off(){fn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Sp(s,e=fn){e&&e.active&&e.effects.push(s)}function Tp(){return fn}const kl=s=>{const e=new Set(s);return e.w=0,e.n=0,e},xd=s=>(s.w&bi)>0,yd=s=>(s.n&bi)>0,wp=({deps:s})=>{if(s.length)for(let e=0;e<s.length;e++)s[e].w|=bi},Ap=s=>{const{deps:e}=s;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];xd(i)&&!yd(i)?i.delete(s):e[t++]=i,i.w&=~bi,i.n&=~bi}e.length=t}},ll=new WeakMap;let pr=0,bi=1;const cl=30;let mn;const ki=Symbol(""),ul=Symbol("");class Vl{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Sp(this,n)}run(){if(!this.active)return this.fn();let e=mn,t=vi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mn,mn=this,vi=!0,bi=1<<++pr,pr<=cl?wp(this):Ac(this),this.fn()}finally{pr<=cl&&Ap(this),bi=1<<--pr,mn=this.parent,vi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mn===this?this.deferStop=!0:this.active&&(Ac(this),this.onStop&&this.onStop(),this.active=!1)}}function Ac(s){const{deps:e}=s;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(s);e.length=0}}let vi=!0;const Md=[];function Ys(){Md.push(vi),vi=!1}function $s(){const s=Md.pop();vi=s===void 0?!0:s}function Kt(s,e,t){if(vi&&mn){let n=ll.get(s);n||ll.set(s,n=new Map);let i=n.get(t);i||n.set(t,i=kl()),Ed(i)}}function Ed(s,e){let t=!1;pr<=cl?yd(s)||(s.n|=bi,t=!xd(s)):t=!s.has(mn),t&&(s.add(mn),mn.deps.push(s))}function ti(s,e,t,n,i,r){const o=ll.get(s);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&He(s)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":He(s)?Bl(t)&&a.push(o.get("length")):(a.push(o.get(ki)),_r(s)&&a.push(o.get(ul)));break;case"delete":He(s)||(a.push(o.get(ki)),_r(s)&&a.push(o.get(ul)));break;case"set":_r(s)&&a.push(o.get(ki));break}if(a.length===1)a[0]&&hl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);hl(kl(l))}}function hl(s,e){const t=He(s)?s:[...s];for(const n of t)n.computed&&Rc(n);for(const n of t)n.computed||Rc(n)}function Rc(s,e){(s!==mn||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}const Rp=Dl("__proto__,__v_isRef,__isVue"),bd=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Ol)),Cp=Gl(),Lp=Gl(!1,!0),Pp=Gl(!0),Cc=Ip();function Ip(){const s={};return["includes","indexOf","lastIndexOf"].forEach(e=>{s[e]=function(...t){const n=it(this);for(let r=0,o=this.length;r<o;r++)Kt(n,"get",r+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(it)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{s[e]=function(...t){Ys();const n=it(this)[e].apply(this,t);return $s(),n}}),s}function Np(s){const e=it(this);return Kt(e,"has",s),e.hasOwnProperty(s)}function Gl(s=!1,e=!1){return function(n,i,r){if(i==="__v_isReactive")return!s;if(i==="__v_isReadonly")return s;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(s?e?$p:Rd:e?Ad:wd).get(n))return n;const o=He(n);if(!s){if(o&&Je(Cc,i))return Reflect.get(Cc,i,r);if(i==="hasOwnProperty")return Np}const a=Reflect.get(n,i,r);return(Ol(i)?bd.has(i):Rp(i))||(s||Kt(n,"get",i),e)?a:Wt(a)?o&&Bl(i)?a:a.value:Mt(a)?s?Cd(a):ql(a):a}}const Dp=Sd(),Up=Sd(!0);function Sd(s=!1){return function(t,n,i,r){let o=t[n];if(Sr(o)&&Wt(o)&&!Wt(i))return!1;if(!s&&(!dl(i)&&!Sr(i)&&(o=it(o),i=it(i)),!He(t)&&Wt(o)&&!Wt(i)))return o.value=i,!0;const a=He(t)&&Bl(n)?Number(n)<t.length:Je(t,n),l=Reflect.set(t,n,i,r);return t===it(r)&&(a?No(i,o)&&ti(t,"set",n,i):ti(t,"add",n,i)),l}}function Fp(s,e){const t=Je(s,e);s[e];const n=Reflect.deleteProperty(s,e);return n&&t&&ti(s,"delete",e,void 0),n}function Op(s,e){const t=Reflect.has(s,e);return(!Ol(e)||!bd.has(e))&&Kt(s,"has",e),t}function Bp(s){return Kt(s,"iterate",He(s)?"length":ki),Reflect.ownKeys(s)}const Td={get:Cp,set:Dp,deleteProperty:Fp,has:Op,ownKeys:Bp},zp={get:Pp,set(s,e){return!0},deleteProperty(s,e){return!0}},Hp=Rt({},Td,{get:Lp,set:Up}),Wl=s=>s,qo=s=>Reflect.getPrototypeOf(s);function Vr(s,e,t=!1,n=!1){s=s.__v_raw;const i=it(s),r=it(e);t||(e!==r&&Kt(i,"get",e),Kt(i,"get",r));const{has:o}=qo(i),a=n?Wl:t?$l:Yl;if(o.call(i,e))return a(s.get(e));if(o.call(i,r))return a(s.get(r));s!==i&&s.get(e)}function Gr(s,e=!1){const t=this.__v_raw,n=it(t),i=it(s);return e||(s!==i&&Kt(n,"has",s),Kt(n,"has",i)),s===i?t.has(s):t.has(s)||t.has(i)}function Wr(s,e=!1){return s=s.__v_raw,!e&&Kt(it(s),"iterate",ki),Reflect.get(s,"size",s)}function Lc(s){s=it(s);const e=it(this);return qo(e).has.call(e,s)||(e.add(s),ti(e,"add",s,s)),this}function Pc(s,e){e=it(e);const t=it(this),{has:n,get:i}=qo(t);let r=n.call(t,s);r||(s=it(s),r=n.call(t,s));const o=i.call(t,s);return t.set(s,e),r?No(e,o)&&ti(t,"set",s,e):ti(t,"add",s,e),this}function Ic(s){const e=it(this),{has:t,get:n}=qo(e);let i=t.call(e,s);i||(s=it(s),i=t.call(e,s)),n&&n.call(e,s);const r=e.delete(s);return i&&ti(e,"delete",s,void 0),r}function Nc(){const s=it(this),e=s.size!==0,t=s.clear();return e&&ti(s,"clear",void 0,void 0),t}function Xr(s,e){return function(n,i){const r=this,o=r.__v_raw,a=it(o),l=e?Wl:s?$l:Yl;return!s&&Kt(a,"iterate",ki),o.forEach((c,u)=>n.call(i,l(c),l(u),r))}}function qr(s,e,t){return function(...n){const i=this.__v_raw,r=it(i),o=_r(r),a=s==="entries"||s===Symbol.iterator&&o,l=s==="keys"&&o,c=i[s](...n),u=t?Wl:e?$l:Yl;return!e&&Kt(r,"iterate",l?ul:ki),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function ri(s){return function(...e){return s==="delete"?!1:this}}function kp(){const s={get(r){return Vr(this,r)},get size(){return Wr(this)},has:Gr,add:Lc,set:Pc,delete:Ic,clear:Nc,forEach:Xr(!1,!1)},e={get(r){return Vr(this,r,!1,!0)},get size(){return Wr(this)},has:Gr,add:Lc,set:Pc,delete:Ic,clear:Nc,forEach:Xr(!1,!0)},t={get(r){return Vr(this,r,!0)},get size(){return Wr(this,!0)},has(r){return Gr.call(this,r,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:Xr(!0,!1)},n={get(r){return Vr(this,r,!0,!0)},get size(){return Wr(this,!0)},has(r){return Gr.call(this,r,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:Xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=qr(r,!1,!1),t[r]=qr(r,!0,!1),e[r]=qr(r,!1,!0),n[r]=qr(r,!0,!0)}),[s,t,e,n]}const[Vp,Gp,Wp,Xp]=kp();function Xl(s,e){const t=e?s?Xp:Wp:s?Gp:Vp;return(n,i,r)=>i==="__v_isReactive"?!s:i==="__v_isReadonly"?s:i==="__v_raw"?n:Reflect.get(Je(t,i)&&i in n?t:n,i,r)}const qp={get:Xl(!1,!1)},jp={get:Xl(!1,!0)},Yp={get:Xl(!0,!1)},wd=new WeakMap,Ad=new WeakMap,Rd=new WeakMap,$p=new WeakMap;function Kp(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zp(s){return s.__v_skip||!Object.isExtensible(s)?0:Kp(dp(s))}function ql(s){return Sr(s)?s:jl(s,!1,Td,qp,wd)}function Jp(s){return jl(s,!1,Hp,jp,Ad)}function Cd(s){return jl(s,!0,zp,Yp,Rd)}function jl(s,e,t,n,i){if(!Mt(s)||s.__v_raw&&!(e&&s.__v_isReactive))return s;const r=i.get(s);if(r)return r;const o=Zp(s);if(o===0)return s;const a=new Proxy(s,o===2?n:t);return i.set(s,a),a}function As(s){return Sr(s)?As(s.__v_raw):!!(s&&s.__v_isReactive)}function Sr(s){return!!(s&&s.__v_isReadonly)}function dl(s){return!!(s&&s.__v_isShallow)}function Ld(s){return As(s)||Sr(s)}function it(s){const e=s&&s.__v_raw;return e?it(e):s}function Pd(s){return Do(s,"__v_skip",!0),s}const Yl=s=>Mt(s)?ql(s):s,$l=s=>Mt(s)?Cd(s):s;function Qp(s){vi&&mn&&(s=it(s),Ed(s.dep||(s.dep=kl())))}function em(s,e){s=it(s);const t=s.dep;t&&hl(t)}function Wt(s){return!!(s&&s.__v_isRef===!0)}function tm(s){return Wt(s)?s.value:s}const nm={get:(s,e,t)=>tm(Reflect.get(s,e,t)),set:(s,e,t,n)=>{const i=s[e];return Wt(i)&&!Wt(t)?(i.value=t,!0):Reflect.set(s,e,t,n)}};function Id(s){return As(s)?s:new Proxy(s,nm)}class im{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Vl(e,()=>{this._dirty||(this._dirty=!0,em(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=it(this);return Qp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function sm(s,e,t=!1){let n,i;const r=Xe(s);return r?(n=s,i=vn):(n=s.get,i=s.set),new im(n,i,r||!i,t)}function xi(s,e,t,n){let i;try{i=n?s(...n):s()}catch(r){jo(r,e,t)}return i}function xn(s,e,t,n){if(Xe(s)){const r=xi(s,e,t,n);return r&&gd(r)&&r.catch(o=>{jo(o,e,t)}),r}const i=[];for(let r=0;r<s.length;r++)i.push(xn(s[r],e,t,n));return i}function jo(s,e,t,n=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](s,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){xi(l,null,10,[s,o,a]);return}}rm(s,t,i,n)}function rm(s,e,t,n=!0){console.error(s)}let Tr=!1,fl=!1;const Ft=[];let Rn=0;const Rs=[];let Zn=null,Fi=0;const Nd=Promise.resolve();let Kl=null;function om(s){const e=Kl||Nd;return s?e.then(this?s.bind(this):s):e}function am(s){let e=Rn+1,t=Ft.length;for(;e<t;){const n=e+t>>>1;wr(Ft[n])<s?e=n+1:t=n}return e}function Zl(s){(!Ft.length||!Ft.includes(s,Tr&&s.allowRecurse?Rn+1:Rn))&&(s.id==null?Ft.push(s):Ft.splice(am(s.id),0,s),Dd())}function Dd(){!Tr&&!fl&&(fl=!0,Kl=Nd.then(Fd))}function lm(s){const e=Ft.indexOf(s);e>Rn&&Ft.splice(e,1)}function cm(s){He(s)?Rs.push(...s):(!Zn||!Zn.includes(s,s.allowRecurse?Fi+1:Fi))&&Rs.push(s),Dd()}function Dc(s,e=Tr?Rn+1:0){for(;e<Ft.length;e++){const t=Ft[e];t&&t.pre&&(Ft.splice(e,1),e--,t())}}function Ud(s){if(Rs.length){const e=[...new Set(Rs)];if(Rs.length=0,Zn){Zn.push(...e);return}for(Zn=e,Zn.sort((t,n)=>wr(t)-wr(n)),Fi=0;Fi<Zn.length;Fi++)Zn[Fi]();Zn=null,Fi=0}}const wr=s=>s.id==null?1/0:s.id,um=(s,e)=>{const t=wr(s)-wr(e);if(t===0){if(s.pre&&!e.pre)return-1;if(e.pre&&!s.pre)return 1}return t};function Fd(s){fl=!1,Tr=!0,Ft.sort(um);const e=vn;try{for(Rn=0;Rn<Ft.length;Rn++){const t=Ft[Rn];t&&t.active!==!1&&xi(t,null,14)}}finally{Rn=0,Ft.length=0,Ud(),Tr=!1,Kl=null,(Ft.length||Rs.length)&&Fd()}}function hm(s,e,...t){if(s.isUnmounted)return;const n=s.vnode.props||ct;let i=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=n[u]||ct;h&&(i=t.map(f=>Nt(f)?f.trim():f)),d&&(i=t.map(gp))}let a,l=n[a=ca(e)]||n[a=ca(Is(e))];!l&&r&&(l=n[a=ca(js(e))]),l&&xn(l,s,6,i);const c=n[a+"Once"];if(c){if(!s.emitted)s.emitted={};else if(s.emitted[a])return;s.emitted[a]=!0,xn(c,s,6,i)}}function Od(s,e,t=!1){const n=e.emitsCache,i=n.get(s);if(i!==void 0)return i;const r=s.emits;let o={},a=!1;if(!Xe(s)){const l=c=>{const u=Od(c,e,!0);u&&(a=!0,Rt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),s.extends&&l(s.extends),s.mixins&&s.mixins.forEach(l)}return!r&&!a?(Mt(s)&&n.set(s,null),null):(He(r)?r.forEach(l=>o[l]=null):Rt(o,r),Mt(s)&&n.set(s,o),o)}function Yo(s,e){return!s||!Go(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(s,e[0].toLowerCase()+e.slice(1))||Je(s,js(e))||Je(s,e))}let Pn=null,Bd=null;function Uo(s){const e=Pn;return Pn=s,Bd=s&&s.type.__scopeId||null,e}function dm(s,e=Pn,t){if(!e||s._n)return s;const n=(...i)=>{n._d&&Wc(-1);const r=Uo(e);let o;try{o=s(...i)}finally{Uo(r),n._d&&Wc(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function ha(s){const{type:e,vnode:t,proxy:n,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:f,ctx:g,inheritAttrs:_}=s;let m,p;const v=Uo(s);try{if(t.shapeFlag&4){const y=i||n;m=wn(u.call(y,y,d,r,f,h,g)),p=l}else{const y=e;m=wn(y.length>1?y(r,{attrs:l,slots:a,emit:c}):y(r,null)),p=e.props?l:fm(l)}}catch(y){xr.length=0,jo(y,s,1),m=Vi(Ar)}let x=m;if(p&&_!==!1){const y=Object.keys(p),{shapeFlag:w}=x;y.length&&w&7&&(o&&y.some(Ul)&&(p=pm(p,o)),x=Ns(x,p))}return t.dirs&&(x=Ns(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,Uo(v),m}const fm=s=>{let e;for(const t in s)(t==="class"||t==="style"||Go(t))&&((e||(e={}))[t]=s[t]);return e},pm=(s,e)=>{const t={};for(const n in s)(!Ul(n)||!(n.slice(9)in e))&&(t[n]=s[n]);return t};function mm(s,e,t){const{props:n,children:i,component:r}=s,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Uc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==n[h]&&!Yo(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Uc(n,o,c):!0:!!o;return!1}function Uc(s,e,t){const n=Object.keys(e);if(n.length!==Object.keys(s).length)return!0;for(let i=0;i<n.length;i++){const r=n[i];if(e[r]!==s[r]&&!Yo(t,r))return!0}return!1}function gm({vnode:s,parent:e},t){for(;e&&e.subTree===s;)(s=e.vnode).el=t,e=e.parent}const _m=s=>s.__isSuspense;function vm(s,e){e&&e.pendingBranch?He(s)?e.effects.push(...s):e.effects.push(s):cm(s)}const jr={};function da(s,e,t){return zd(s,e,t)}function zd(s,e,{immediate:t,deep:n,flush:i,onTrack:r,onTrigger:o}=ct){var a;const l=Tp()===((a=Ot)==null?void 0:a.scope)?Ot:null;let c,u=!1,d=!1;if(Wt(s)?(c=()=>s.value,u=dl(s)):As(s)?(c=()=>s,n=!0):He(s)?(d=!0,u=s.some(y=>As(y)||dl(y)),c=()=>s.map(y=>{if(Wt(y))return y.value;if(As(y))return Ss(y);if(Xe(y))return xi(y,l,2)})):Xe(s)?e?c=()=>xi(s,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),xn(s,l,3,[f])}:c=vn,e&&n){const y=c;c=()=>Ss(y())}let h,f=y=>{h=v.onStop=()=>{xi(y,l,4)}},g;if(Cr)if(f=vn,e?t&&xn(e,l,3,[c(),d?[]:void 0,f]):c(),i==="sync"){const y=gg();g=y.__watcherHandles||(y.__watcherHandles=[])}else return vn;let _=d?new Array(s.length).fill(jr):jr;const m=()=>{if(v.active)if(e){const y=v.run();(n||u||(d?y.some((w,C)=>No(w,_[C])):No(y,_)))&&(h&&h(),xn(e,l,3,[y,_===jr?void 0:d&&_[0]===jr?[]:_,f]),_=y)}else v.run()};m.allowRecurse=!!e;let p;i==="sync"?p=m:i==="post"?p=()=>jt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),p=()=>Zl(m));const v=new Vl(c,p);e?t?m():_=v.run():i==="post"?jt(v.run.bind(v),l&&l.suspense):v.run();const x=()=>{v.stop(),l&&l.scope&&Fl(l.scope.effects,v)};return g&&g.push(x),x}function xm(s,e,t){const n=this.proxy,i=Nt(s)?s.includes(".")?Hd(n,s):()=>n[s]:s.bind(n,n);let r;Xe(e)?r=e:(r=e.handler,t=e);const o=Ot;Ds(this);const a=zd(i,r.bind(n),t);return o?Ds(o):Gi(),a}function Hd(s,e){const t=e.split(".");return()=>{let n=s;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function Ss(s,e){if(!Mt(s)||s.__v_skip||(e=e||new Set,e.has(s)))return s;if(e.add(s),Wt(s))Ss(s.value,e);else if(He(s))for(let t=0;t<s.length;t++)Ss(s[t],e);else if(up(s)||_r(s))s.forEach(t=>{Ss(t,e)});else if(fp(s))for(const t in s)Ss(s[t],e);return s}function Ai(s,e,t,n){const i=s.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Ys(),xn(l,t,8,[s.el,a,s,e]),$s())}}function ym(s,e){return Xe(s)?(()=>Rt({name:s.name},e,{setup:s}))():s}const Ro=s=>!!s.type.__asyncLoader,kd=s=>s.type.__isKeepAlive;function Mm(s,e){Vd(s,"a",e)}function Em(s,e){Vd(s,"da",e)}function Vd(s,e,t=Ot){const n=s.__wdc||(s.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return s()});if($o(e,n,t),t){let i=t.parent;for(;i&&i.parent;)kd(i.parent.vnode)&&bm(n,e,t,i),i=i.parent}}function bm(s,e,t,n){const i=$o(e,s,n,!0);Wd(()=>{Fl(n[e],i)},t)}function $o(s,e,t=Ot,n=!1){if(t){const i=t[s]||(t[s]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ys(),Ds(t);const a=xn(e,t,s,o);return Gi(),$s(),a});return n?i.unshift(r):i.push(r),r}}const ii=s=>(e,t=Ot)=>(!Cr||s==="sp")&&$o(s,(...n)=>e(...n),t),Sm=ii("bm"),Gd=ii("m"),Tm=ii("bu"),wm=ii("u"),Am=ii("bum"),Wd=ii("um"),Rm=ii("sp"),Cm=ii("rtg"),Lm=ii("rtc");function Pm(s,e=Ot){$o("ec",s,e)}const Im=Symbol.for("v-ndc"),pl=s=>s?tf(s)?nc(s)||s.proxy:pl(s.parent):null,vr=Rt(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>pl(s.parent),$root:s=>pl(s.root),$emit:s=>s.emit,$options:s=>Jl(s),$forceUpdate:s=>s.f||(s.f=()=>Zl(s.update)),$nextTick:s=>s.n||(s.n=om.bind(s.proxy)),$watch:s=>xm.bind(s)}),fa=(s,e)=>s!==ct&&!s.__isScriptSetup&&Je(s,e),Nm={get({_:s},e){const{ctx:t,setupState:n,data:i,props:r,accessCache:o,type:a,appContext:l}=s;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return r[e]}else{if(fa(n,e))return o[e]=1,n[e];if(i!==ct&&Je(i,e))return o[e]=2,i[e];if((c=s.propsOptions[0])&&Je(c,e))return o[e]=3,r[e];if(t!==ct&&Je(t,e))return o[e]=4,t[e];ml&&(o[e]=0)}}const u=vr[e];let d,h;if(u)return e==="$attrs"&&Kt(s,"get",e),u(s);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==ct&&Je(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Je(h,e))return h[e]},set({_:s},e,t){const{data:n,setupState:i,ctx:r}=s;return fa(i,e)?(i[e]=t,!0):n!==ct&&Je(n,e)?(n[e]=t,!0):Je(s.props,e)||e[0]==="$"&&e.slice(1)in s?!1:(r[e]=t,!0)},has({_:{data:s,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:r}},o){let a;return!!t[o]||s!==ct&&Je(s,o)||fa(e,o)||(a=r[0])&&Je(a,o)||Je(n,o)||Je(vr,o)||Je(i.config.globalProperties,o)},defineProperty(s,e,t){return t.get!=null?s._.accessCache[e]=0:Je(t,"value")&&this.set(s,e,t.value,null),Reflect.defineProperty(s,e,t)}};function Fc(s){return He(s)?s.reduce((e,t)=>(e[t]=null,e),{}):s}let ml=!0;function Dm(s){const e=Jl(s),t=s.proxy,n=s.ctx;ml=!1,e.beforeCreate&&Oc(e.beforeCreate,s,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:v,destroyed:x,unmounted:y,render:w,renderTracked:C,renderTriggered:A,errorCaptured:I,serverPrefetch:M,expose:S,inheritAttrs:V,components:B,directives:L,filters:N}=e;if(c&&Um(c,n,null),o)for(const W in o){const X=o[W];Xe(X)&&(n[W]=X.bind(t))}if(i){const W=i.call(t,t);Mt(W)&&(s.data=ql(W))}if(ml=!0,r)for(const W in r){const X=r[W],ee=Xe(X)?X.bind(t,t):Xe(X.get)?X.get.bind(t,t):vn,se=!Xe(X)&&Xe(X.set)?X.set.bind(t):vn,j=pg({get:ee,set:se});Object.defineProperty(n,W,{enumerable:!0,configurable:!0,get:()=>j.value,set:G=>j.value=G})}if(a)for(const W in a)Xd(a[W],n,t,W);if(l){const W=Xe(l)?l.call(t):l;Reflect.ownKeys(W).forEach(X=>{km(X,W[X])})}u&&Oc(u,s,"c");function U(W,X){He(X)?X.forEach(ee=>W(ee.bind(t))):X&&W(X.bind(t))}if(U(Sm,d),U(Gd,h),U(Tm,f),U(wm,g),U(Mm,_),U(Em,m),U(Pm,I),U(Lm,C),U(Cm,A),U(Am,v),U(Wd,y),U(Rm,M),He(S))if(S.length){const W=s.exposed||(s.exposed={});S.forEach(X=>{Object.defineProperty(W,X,{get:()=>t[X],set:ee=>t[X]=ee})})}else s.exposed||(s.exposed={});w&&s.render===vn&&(s.render=w),V!=null&&(s.inheritAttrs=V),B&&(s.components=B),L&&(s.directives=L)}function Um(s,e,t=vn){He(s)&&(s=gl(s));for(const n in s){const i=s[n];let r;Mt(i)?"default"in i?r=Co(i.from||n,i.default,!0):r=Co(i.from||n):r=Co(i),Wt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[n]=r}}function Oc(s,e,t){xn(He(s)?s.map(n=>n.bind(e.proxy)):s.bind(e.proxy),e,t)}function Xd(s,e,t,n){const i=n.includes(".")?Hd(t,n):()=>t[n];if(Nt(s)){const r=e[s];Xe(r)&&da(i,r)}else if(Xe(s))da(i,s.bind(t));else if(Mt(s))if(He(s))s.forEach(r=>Xd(r,e,t,n));else{const r=Xe(s.handler)?s.handler.bind(t):e[s.handler];Xe(r)&&da(i,r,s)}}function Jl(s){const e=s.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=s.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>Fo(l,c,o,!0)),Fo(l,e,o)),Mt(e)&&r.set(e,l),l}function Fo(s,e,t,n=!1){const{mixins:i,extends:r}=e;r&&Fo(s,r,t,!0),i&&i.forEach(o=>Fo(s,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Fm[o]||t&&t[o];s[o]=a?a(s[o],e[o]):e[o]}return s}const Fm={data:Bc,props:zc,emits:zc,methods:mr,computed:mr,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:mr,directives:mr,watch:Bm,provide:Bc,inject:Om};function Bc(s,e){return e?s?function(){return Rt(Xe(s)?s.call(this,this):s,Xe(e)?e.call(this,this):e)}:e:s}function Om(s,e){return mr(gl(s),gl(e))}function gl(s){if(He(s)){const e={};for(let t=0;t<s.length;t++)e[s[t]]=s[t];return e}return s}function kt(s,e){return s?[...new Set([].concat(s,e))]:e}function mr(s,e){return s?Rt(Object.create(null),s,e):e}function zc(s,e){return s?He(s)&&He(e)?[...new Set([...s,...e])]:Rt(Object.create(null),Fc(s),Fc(e??{})):e}function Bm(s,e){if(!s)return e;if(!e)return s;const t=Rt(Object.create(null),s);for(const n in e)t[n]=kt(s[n],e[n]);return t}function qd(){return{app:null,config:{isNativeTag:ap,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zm=0;function Hm(s,e){return function(n,i=null){Xe(n)||(n=Rt({},n)),i!=null&&!Mt(i)&&(i=null);const r=qd(),o=new Set;let a=!1;const l=r.app={_uid:zm++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:_g,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Xe(c.install)?(o.add(c),c.install(l,...u)):Xe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=Vi(n,i);return h.appContext=r,u&&e?e(h,c):s(h,c,d),a=!0,l._container=c,c.__vue_app__=l,nc(h.component)||h.component.proxy}},unmount(){a&&(s(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Oo=l;try{return c()}finally{Oo=null}}};return l}}let Oo=null;function km(s,e){if(Ot){let t=Ot.provides;const n=Ot.parent&&Ot.parent.provides;n===t&&(t=Ot.provides=Object.create(n)),t[s]=e}}function Co(s,e,t=!1){const n=Ot||Pn;if(n||Oo){const i=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Oo._context.provides;if(i&&s in i)return i[s];if(arguments.length>1)return t&&Xe(e)?e.call(n&&n.proxy):e}}function Vm(s,e,t,n=!1){const i={},r={};Do(r,Zo,1),s.propsDefaults=Object.create(null),jd(s,e,i,r);for(const o in s.propsOptions[0])o in i||(i[o]=void 0);t?s.props=n?i:Jp(i):s.type.props?s.props=i:s.props=r,s.attrs=r}function Gm(s,e,t,n){const{props:i,attrs:r,vnode:{patchFlag:o}}=s,a=it(i),[l]=s.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=s.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Yo(s.emitsOptions,h))continue;const f=e[h];if(l)if(Je(r,h))f!==r[h]&&(r[h]=f,c=!0);else{const g=Is(h);i[g]=_l(l,a,g,f,s,!1)}else f!==r[h]&&(r[h]=f,c=!0)}}}else{jd(s,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!Je(e,d)&&((u=js(d))===d||!Je(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(i[d]=_l(l,a,d,void 0,s,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!Je(e,d))&&(delete r[d],c=!0)}c&&ti(s,"set","$attrs")}function jd(s,e,t,n){const[i,r]=s.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ao(l))continue;const c=e[l];let u;i&&Je(i,u=Is(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Yo(s.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=it(t),c=a||ct;for(let u=0;u<r.length;u++){const d=r[u];t[d]=_l(i,l,d,c[d],s,!Je(c,d))}}return o}function _l(s,e,t,n,i,r){const o=s[t];if(o!=null){const a=Je(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(Ds(i),n=c[t]=l.call(null,e),Gi())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===js(t))&&(n=!0))}return n}function Yd(s,e,t=!1){const n=e.propsCache,i=n.get(s);if(i)return i;const r=s.props,o={},a=[];let l=!1;if(!Xe(s)){const u=d=>{l=!0;const[h,f]=Yd(d,e,!0);Rt(o,h),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),s.extends&&u(s.extends),s.mixins&&s.mixins.forEach(u)}if(!r&&!l)return Mt(s)&&n.set(s,ws),ws;if(He(r))for(let u=0;u<r.length;u++){const d=Is(r[u]);Hc(d)&&(o[d]=ct)}else if(r)for(const u in r){const d=Is(u);if(Hc(d)){const h=r[u],f=o[d]=He(h)||Xe(h)?{type:h}:Rt({},h);if(f){const g=Gc(Boolean,f.type),_=Gc(String,f.type);f[0]=g>-1,f[1]=_<0||g<_,(g>-1||Je(f,"default"))&&a.push(d)}}}const c=[o,a];return Mt(s)&&n.set(s,c),c}function Hc(s){return s[0]!=="$"}function kc(s){const e=s&&s.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:s===null?"null":""}function Vc(s,e){return kc(s)===kc(e)}function Gc(s,e){return He(e)?e.findIndex(t=>Vc(t,s)):Xe(e)&&Vc(e,s)?0:-1}const $d=s=>s[0]==="_"||s==="$stable",Ql=s=>He(s)?s.map(wn):[wn(s)],Wm=(s,e,t)=>{if(e._n)return e;const n=dm((...i)=>Ql(e(...i)),t);return n._c=!1,n},Kd=(s,e,t)=>{const n=s._ctx;for(const i in s){if($d(i))continue;const r=s[i];if(Xe(r))e[i]=Wm(i,r,n);else if(r!=null){const o=Ql(r);e[i]=()=>o}}},Zd=(s,e)=>{const t=Ql(e);s.slots.default=()=>t},Xm=(s,e)=>{if(s.vnode.shapeFlag&32){const t=e._;t?(s.slots=it(e),Do(e,"_",t)):Kd(e,s.slots={})}else s.slots={},e&&Zd(s,e);Do(s.slots,Zo,1)},qm=(s,e,t)=>{const{vnode:n,slots:i}=s;let r=!0,o=ct;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Rt(i,e),!t&&a===1&&delete i._):(r=!e.$stable,Kd(e,i)),o=e}else e&&(Zd(s,e),o={default:1});if(r)for(const a in i)!$d(a)&&!(a in o)&&delete i[a]};function vl(s,e,t,n,i=!1){if(He(s)){s.forEach((h,f)=>vl(h,e&&(He(e)?e[f]:e),t,n,i));return}if(Ro(n)&&!i)return;const r=n.shapeFlag&4?nc(n.component)||n.component.proxy:n.el,o=i?null:r,{i:a,r:l}=s,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Nt(c)?(u[c]=null,Je(d,c)&&(d[c]=null)):Wt(c)&&(c.value=null)),Xe(l))xi(l,a,12,[o,u]);else{const h=Nt(l),f=Wt(l);if(h||f){const g=()=>{if(s.f){const _=h?Je(d,l)?d[l]:u[l]:l.value;i?He(_)&&Fl(_,r):He(_)?_.includes(r)||_.push(r):h?(u[l]=[r],Je(d,l)&&(d[l]=u[l])):(l.value=[r],s.k&&(u[s.k]=l.value))}else h?(u[l]=o,Je(d,l)&&(d[l]=o)):f&&(l.value=o,s.k&&(u[s.k]=o))};o?(g.id=-1,jt(g,t)):g()}}}const jt=vm;function jm(s){return Ym(s)}function Ym(s,e){const t=al();t.__VUE__=!0;const{insert:n,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=vn,insertStaticContent:g}=s,_=(b,O,q,Z=null,$=null,de=null,he=!1,te=null,ue=!!O.dynamicChildren)=>{if(b===O)return;b&&!tr(b,O)&&(Z=Pe(b),G(b,$,de,!0),b=null),O.patchFlag===-2&&(ue=!1,O.dynamicChildren=null);const{type:le,ref:Te,shapeFlag:R}=O;switch(le){case Ko:m(b,O,q,Z);break;case Ar:p(b,O,q,Z);break;case pa:b==null&&v(O,q,Z,he);break;case Jn:B(b,O,q,Z,$,de,he,te,ue);break;default:R&1?w(b,O,q,Z,$,de,he,te,ue):R&6?L(b,O,q,Z,$,de,he,te,ue):(R&64||R&128)&&le.process(b,O,q,Z,$,de,he,te,ue,ke)}Te!=null&&$&&vl(Te,b&&b.ref,de,O||b,!O)},m=(b,O,q,Z)=>{if(b==null)n(O.el=a(O.children),q,Z);else{const $=O.el=b.el;O.children!==b.children&&c($,O.children)}},p=(b,O,q,Z)=>{b==null?n(O.el=l(O.children||""),q,Z):O.el=b.el},v=(b,O,q,Z)=>{[b.el,b.anchor]=g(b.children,O,q,Z,b.el,b.anchor)},x=({el:b,anchor:O},q,Z)=>{let $;for(;b&&b!==O;)$=h(b),n(b,q,Z),b=$;n(O,q,Z)},y=({el:b,anchor:O})=>{let q;for(;b&&b!==O;)q=h(b),i(b),b=q;i(O)},w=(b,O,q,Z,$,de,he,te,ue)=>{he=he||O.type==="svg",b==null?C(O,q,Z,$,de,he,te,ue):M(b,O,$,de,he,te,ue)},C=(b,O,q,Z,$,de,he,te)=>{let ue,le;const{type:Te,props:R,shapeFlag:E,transition:k,dirs:re}=b;if(ue=b.el=o(b.type,de,R&&R.is,R),E&8?u(ue,b.children):E&16&&I(b.children,ue,null,Z,$,de&&Te!=="foreignObject",he,te),re&&Ai(b,null,Z,"created"),A(ue,b,b.scopeId,he,Z),R){for(const ae in R)ae!=="value"&&!Ao(ae)&&r(ue,ae,null,R[ae],de,b.children,Z,$,Re);"value"in R&&r(ue,"value",null,R.value),(le=R.onVnodeBeforeMount)&&En(le,Z,b)}re&&Ai(b,null,Z,"beforeMount");const oe=(!$||$&&!$.pendingBranch)&&k&&!k.persisted;oe&&k.beforeEnter(ue),n(ue,O,q),((le=R&&R.onVnodeMounted)||oe||re)&&jt(()=>{le&&En(le,Z,b),oe&&k.enter(ue),re&&Ai(b,null,Z,"mounted")},$)},A=(b,O,q,Z,$)=>{if(q&&f(b,q),Z)for(let de=0;de<Z.length;de++)f(b,Z[de]);if($){let de=$.subTree;if(O===de){const he=$.vnode;A(b,he,he.scopeId,he.slotScopeIds,$.parent)}}},I=(b,O,q,Z,$,de,he,te,ue=0)=>{for(let le=ue;le<b.length;le++){const Te=b[le]=te?fi(b[le]):wn(b[le]);_(null,Te,O,q,Z,$,de,he,te)}},M=(b,O,q,Z,$,de,he)=>{const te=O.el=b.el;let{patchFlag:ue,dynamicChildren:le,dirs:Te}=O;ue|=b.patchFlag&16;const R=b.props||ct,E=O.props||ct;let k;q&&Ri(q,!1),(k=E.onVnodeBeforeUpdate)&&En(k,q,O,b),Te&&Ai(O,b,q,"beforeUpdate"),q&&Ri(q,!0);const re=$&&O.type!=="foreignObject";if(le?S(b.dynamicChildren,le,te,q,Z,re,de):he||X(b,O,te,null,q,Z,re,de,!1),ue>0){if(ue&16)V(te,O,R,E,q,Z,$);else if(ue&2&&R.class!==E.class&&r(te,"class",null,E.class,$),ue&4&&r(te,"style",R.style,E.style,$),ue&8){const oe=O.dynamicProps;for(let ae=0;ae<oe.length;ae++){const xe=oe[ae],fe=R[xe],J=E[xe];(J!==fe||xe==="value")&&r(te,xe,fe,J,$,b.children,q,Z,Re)}}ue&1&&b.children!==O.children&&u(te,O.children)}else!he&&le==null&&V(te,O,R,E,q,Z,$);((k=E.onVnodeUpdated)||Te)&&jt(()=>{k&&En(k,q,O,b),Te&&Ai(O,b,q,"updated")},Z)},S=(b,O,q,Z,$,de,he)=>{for(let te=0;te<O.length;te++){const ue=b[te],le=O[te],Te=ue.el&&(ue.type===Jn||!tr(ue,le)||ue.shapeFlag&70)?d(ue.el):q;_(ue,le,Te,null,Z,$,de,he,!0)}},V=(b,O,q,Z,$,de,he)=>{if(q!==Z){if(q!==ct)for(const te in q)!Ao(te)&&!(te in Z)&&r(b,te,q[te],null,he,O.children,$,de,Re);for(const te in Z){if(Ao(te))continue;const ue=Z[te],le=q[te];ue!==le&&te!=="value"&&r(b,te,le,ue,he,O.children,$,de,Re)}"value"in Z&&r(b,"value",q.value,Z.value)}},B=(b,O,q,Z,$,de,he,te,ue)=>{const le=O.el=b?b.el:a(""),Te=O.anchor=b?b.anchor:a("");let{patchFlag:R,dynamicChildren:E,slotScopeIds:k}=O;k&&(te=te?te.concat(k):k),b==null?(n(le,q,Z),n(Te,q,Z),I(O.children,q,Te,$,de,he,te,ue)):R>0&&R&64&&E&&b.dynamicChildren?(S(b.dynamicChildren,E,q,$,de,he,te),(O.key!=null||$&&O===$.subTree)&&Jd(b,O,!0)):X(b,O,q,Te,$,de,he,te,ue)},L=(b,O,q,Z,$,de,he,te,ue)=>{O.slotScopeIds=te,b==null?O.shapeFlag&512?$.ctx.activate(O,q,Z,he,ue):N(O,q,Z,$,de,he,ue):D(b,O,ue)},N=(b,O,q,Z,$,de,he)=>{const te=b.component=lg(b,Z,$);if(kd(b)&&(te.ctx.renderer=ke),cg(te),te.asyncDep){if($&&$.registerDep(te,U),!b.el){const ue=te.subTree=Vi(Ar);p(null,ue,O,q)}return}U(te,b,O,q,$,de,he)},D=(b,O,q)=>{const Z=O.component=b.component;if(mm(b,O,q))if(Z.asyncDep&&!Z.asyncResolved){W(Z,O,q);return}else Z.next=O,lm(Z.update),Z.update();else O.el=b.el,Z.vnode=O},U=(b,O,q,Z,$,de,he)=>{const te=()=>{if(b.isMounted){let{next:Te,bu:R,u:E,parent:k,vnode:re}=b,oe=Te,ae;Ri(b,!1),Te?(Te.el=re.el,W(b,Te,he)):Te=re,R&&ua(R),(ae=Te.props&&Te.props.onVnodeBeforeUpdate)&&En(ae,k,Te,re),Ri(b,!0);const xe=ha(b),fe=b.subTree;b.subTree=xe,_(fe,xe,d(fe.el),Pe(fe),b,$,de),Te.el=xe.el,oe===null&&gm(b,xe.el),E&&jt(E,$),(ae=Te.props&&Te.props.onVnodeUpdated)&&jt(()=>En(ae,k,Te,re),$)}else{let Te;const{el:R,props:E}=O,{bm:k,m:re,parent:oe}=b,ae=Ro(O);if(Ri(b,!1),k&&ua(k),!ae&&(Te=E&&E.onVnodeBeforeMount)&&En(Te,oe,O),Ri(b,!0),R&&Be){const xe=()=>{b.subTree=ha(b),Be(R,b.subTree,b,$,null)};ae?O.type.__asyncLoader().then(()=>!b.isUnmounted&&xe()):xe()}else{const xe=b.subTree=ha(b);_(null,xe,q,Z,b,$,de),O.el=xe.el}if(re&&jt(re,$),!ae&&(Te=E&&E.onVnodeMounted)){const xe=O;jt(()=>En(Te,oe,xe),$)}(O.shapeFlag&256||oe&&Ro(oe.vnode)&&oe.vnode.shapeFlag&256)&&b.a&&jt(b.a,$),b.isMounted=!0,O=q=Z=null}},ue=b.effect=new Vl(te,()=>Zl(le),b.scope),le=b.update=()=>ue.run();le.id=b.uid,Ri(b,!0),le()},W=(b,O,q)=>{O.component=b;const Z=b.vnode.props;b.vnode=O,b.next=null,Gm(b,O.props,Z,q),qm(b,O.children,q),Ys(),Dc(),$s()},X=(b,O,q,Z,$,de,he,te,ue=!1)=>{const le=b&&b.children,Te=b?b.shapeFlag:0,R=O.children,{patchFlag:E,shapeFlag:k}=O;if(E>0){if(E&128){se(le,R,q,Z,$,de,he,te,ue);return}else if(E&256){ee(le,R,q,Z,$,de,he,te,ue);return}}k&8?(Te&16&&Re(le,$,de),R!==le&&u(q,R)):Te&16?k&16?se(le,R,q,Z,$,de,he,te,ue):Re(le,$,de,!0):(Te&8&&u(q,""),k&16&&I(R,q,Z,$,de,he,te,ue))},ee=(b,O,q,Z,$,de,he,te,ue)=>{b=b||ws,O=O||ws;const le=b.length,Te=O.length,R=Math.min(le,Te);let E;for(E=0;E<R;E++){const k=O[E]=ue?fi(O[E]):wn(O[E]);_(b[E],k,q,null,$,de,he,te,ue)}le>Te?Re(b,$,de,!0,!1,R):I(O,q,Z,$,de,he,te,ue,R)},se=(b,O,q,Z,$,de,he,te,ue)=>{let le=0;const Te=O.length;let R=b.length-1,E=Te-1;for(;le<=R&&le<=E;){const k=b[le],re=O[le]=ue?fi(O[le]):wn(O[le]);if(tr(k,re))_(k,re,q,null,$,de,he,te,ue);else break;le++}for(;le<=R&&le<=E;){const k=b[R],re=O[E]=ue?fi(O[E]):wn(O[E]);if(tr(k,re))_(k,re,q,null,$,de,he,te,ue);else break;R--,E--}if(le>R){if(le<=E){const k=E+1,re=k<Te?O[k].el:Z;for(;le<=E;)_(null,O[le]=ue?fi(O[le]):wn(O[le]),q,re,$,de,he,te,ue),le++}}else if(le>E)for(;le<=R;)G(b[le],$,de,!0),le++;else{const k=le,re=le,oe=new Map;for(le=re;le<=E;le++){const pe=O[le]=ue?fi(O[le]):wn(O[le]);pe.key!=null&&oe.set(pe.key,le)}let ae,xe=0;const fe=E-re+1;let J=!1,F=0;const ce=new Array(fe);for(le=0;le<fe;le++)ce[le]=0;for(le=k;le<=R;le++){const pe=b[le];if(xe>=fe){G(pe,$,de,!0);continue}let ge;if(pe.key!=null)ge=oe.get(pe.key);else for(ae=re;ae<=E;ae++)if(ce[ae-re]===0&&tr(pe,O[ae])){ge=ae;break}ge===void 0?G(pe,$,de,!0):(ce[ge-re]=le+1,ge>=F?F=ge:J=!0,_(pe,O[ge],q,null,$,de,he,te,ue),xe++)}const Ee=J?$m(ce):ws;for(ae=Ee.length-1,le=fe-1;le>=0;le--){const pe=re+le,ge=O[pe],Ne=pe+1<Te?O[pe+1].el:Z;ce[le]===0?_(null,ge,q,Ne,$,de,he,te,ue):J&&(ae<0||le!==Ee[ae]?j(ge,q,Ne,2):ae--)}}},j=(b,O,q,Z,$=null)=>{const{el:de,type:he,transition:te,children:ue,shapeFlag:le}=b;if(le&6){j(b.component.subTree,O,q,Z);return}if(le&128){b.suspense.move(O,q,Z);return}if(le&64){he.move(b,O,q,ke);return}if(he===Jn){n(de,O,q);for(let R=0;R<ue.length;R++)j(ue[R],O,q,Z);n(b.anchor,O,q);return}if(he===pa){x(b,O,q);return}if(Z!==2&&le&1&&te)if(Z===0)te.beforeEnter(de),n(de,O,q),jt(()=>te.enter(de),$);else{const{leave:R,delayLeave:E,afterLeave:k}=te,re=()=>n(de,O,q),oe=()=>{R(de,()=>{re(),k&&k()})};E?E(de,re,oe):oe()}else n(de,O,q)},G=(b,O,q,Z=!1,$=!1)=>{const{type:de,props:he,ref:te,children:ue,dynamicChildren:le,shapeFlag:Te,patchFlag:R,dirs:E}=b;if(te!=null&&vl(te,null,q,b,!0),Te&256){O.ctx.deactivate(b);return}const k=Te&1&&E,re=!Ro(b);let oe;if(re&&(oe=he&&he.onVnodeBeforeUnmount)&&En(oe,O,b),Te&6)we(b.component,q,Z);else{if(Te&128){b.suspense.unmount(q,Z);return}k&&Ai(b,null,O,"beforeUnmount"),Te&64?b.type.remove(b,O,q,$,ke,Z):le&&(de!==Jn||R>0&&R&64)?Re(le,O,q,!1,!0):(de===Jn&&R&384||!$&&Te&16)&&Re(ue,O,q),Z&&_e(b)}(re&&(oe=he&&he.onVnodeUnmounted)||k)&&jt(()=>{oe&&En(oe,O,b),k&&Ai(b,null,O,"unmounted")},q)},_e=b=>{const{type:O,el:q,anchor:Z,transition:$}=b;if(O===Jn){Me(q,Z);return}if(O===pa){y(b);return}const de=()=>{i(q),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(b.shapeFlag&1&&$&&!$.persisted){const{leave:he,delayLeave:te}=$,ue=()=>he(q,de);te?te(b.el,de,ue):ue()}else de()},Me=(b,O)=>{let q;for(;b!==O;)q=h(b),i(b),b=q;i(O)},we=(b,O,q)=>{const{bum:Z,scope:$,update:de,subTree:he,um:te}=b;Z&&ua(Z),$.stop(),de&&(de.active=!1,G(he,b,O,q)),te&&jt(te,O),jt(()=>{b.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},Re=(b,O,q,Z=!1,$=!1,de=0)=>{for(let he=de;he<b.length;he++)G(b[he],O,q,Z,$)},Pe=b=>b.shapeFlag&6?Pe(b.component.subTree):b.shapeFlag&128?b.suspense.next():h(b.anchor||b.el),Le=(b,O,q)=>{b==null?O._vnode&&G(O._vnode,null,null,!0):_(O._vnode||null,b,O,null,null,null,q),Dc(),Ud(),O._vnode=b},ke={p:_,um:G,m:j,r:_e,mt:N,mc:I,pc:X,pbc:S,n:Pe,o:s};let dt,Be;return e&&([dt,Be]=e(ke)),{render:Le,hydrate:dt,createApp:Hm(Le,dt)}}function Ri({effect:s,update:e},t){s.allowRecurse=e.allowRecurse=t}function Jd(s,e,t=!1){const n=s.children,i=e.children;if(He(n)&&He(i))for(let r=0;r<n.length;r++){const o=n[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=fi(i[r]),a.el=o.el),t||Jd(o,a)),a.type===Ko&&(a.el=o.el)}}function $m(s){const e=s.slice(),t=[0];let n,i,r,o,a;const l=s.length;for(n=0;n<l;n++){const c=s[n];if(c!==0){if(i=t[t.length-1],s[i]<c){e[n]=i,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,s[t[a]]<c?r=a+1:o=a;c<s[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const Km=s=>s.__isTeleport,Jn=Symbol.for("v-fgt"),Ko=Symbol.for("v-txt"),Ar=Symbol.for("v-cmt"),pa=Symbol.for("v-stc"),xr=[];let gn=null;function Zm(s=!1){xr.push(gn=s?null:[])}function Jm(){xr.pop(),gn=xr[xr.length-1]||null}let Rr=1;function Wc(s){Rr+=s}function Qm(s){return s.dynamicChildren=Rr>0?gn||ws:null,Jm(),Rr>0&&gn&&gn.push(s),s}function eg(s,e,t,n,i,r){return Qm(ef(s,e,t,n,i,r,!0))}function tg(s){return s?s.__v_isVNode===!0:!1}function tr(s,e){return s.type===e.type&&s.key===e.key}const Zo="__vInternal",Qd=({key:s})=>s??null,Lo=({ref:s,ref_key:e,ref_for:t})=>(typeof s=="number"&&(s=""+s),s!=null?Nt(s)||Wt(s)||Xe(s)?{i:Pn,r:s,k:e,f:!!t}:s:null);function ef(s,e=null,t=null,n=0,i=null,r=s===Jn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:s,props:e,key:e&&Qd(e),ref:e&&Lo(e),scopeId:Bd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pn};return a?(ec(l,t),r&128&&s.normalize(l)):t&&(l.shapeFlag|=Nt(t)?8:16),Rr>0&&!o&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const Vi=ng;function ng(s,e=null,t=null,n=0,i=null,r=!1){if((!s||s===Im)&&(s=Ar),tg(s)){const a=Ns(s,e,!0);return t&&ec(a,t),Rr>0&&!r&&gn&&(a.shapeFlag&6?gn[gn.indexOf(s)]=a:gn.push(a)),a.patchFlag|=-2,a}if(fg(s)&&(s=s.__vccOpts),e){e=ig(e);let{class:a,style:l}=e;a&&!Nt(a)&&(e.class=Hl(a)),Mt(l)&&(Ld(l)&&!He(l)&&(l=Rt({},l)),e.style=zl(l))}const o=Nt(s)?1:_m(s)?128:Km(s)?64:Mt(s)?4:Xe(s)?2:0;return ef(s,e,t,n,i,o,r,!0)}function ig(s){return s?Ld(s)||Zo in s?Rt({},s):s:null}function Ns(s,e,t=!1){const{props:n,ref:i,patchFlag:r,children:o}=s,a=e?rg(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:a,key:a&&Qd(a),ref:e&&e.ref?t&&i?He(i)?i.concat(Lo(e)):[i,Lo(e)]:Lo(e):i,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:o,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:e&&s.type!==Jn?r===-1?16:r|16:r,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&Ns(s.ssContent),ssFallback:s.ssFallback&&Ns(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce}}function sg(s=" ",e=0){return Vi(Ko,null,s,e)}function wn(s){return s==null||typeof s=="boolean"?Vi(Ar):He(s)?Vi(Jn,null,s.slice()):typeof s=="object"?fi(s):Vi(Ko,null,String(s))}function fi(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:Ns(s)}function ec(s,e){let t=0;const{shapeFlag:n}=s;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),ec(s,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(Zo in e)?e._ctx=Pn:i===3&&Pn&&(Pn.slots._===1?e._=1:(e._=2,s.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Pn},t=32):(e=String(e),n&64?(t=16,e=[sg(e)]):t=8);s.children=e,s.shapeFlag|=t}function rg(...s){const e={};for(let t=0;t<s.length;t++){const n=s[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=Hl([e.class,n.class]));else if(i==="style")e.style=zl([e.style,n.style]);else if(Go(i)){const r=e[i],o=n[i];o&&r!==o&&!(He(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=n[i])}return e}function En(s,e,t,n=null){xn(s,e,7,[t,n])}const og=qd();let ag=0;function lg(s,e,t){const n=s.type,i=(e?e.appContext:s.appContext)||og,r={uid:ag++,vnode:s,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new bp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yd(n,i),emitsOptions:Od(n,i),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:n.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=hm.bind(null,r),s.ce&&s.ce(r),r}let Ot=null,tc,es,Xc="__VUE_INSTANCE_SETTERS__";(es=al()[Xc])||(es=al()[Xc]=[]),es.push(s=>Ot=s),tc=s=>{es.length>1?es.forEach(e=>e(s)):es[0](s)};const Ds=s=>{tc(s),s.scope.on()},Gi=()=>{Ot&&Ot.scope.off(),tc(null)};function tf(s){return s.vnode.shapeFlag&4}let Cr=!1;function cg(s,e=!1){Cr=e;const{props:t,children:n}=s.vnode,i=tf(s);Vm(s,t,i,e),Xm(s,n);const r=i?ug(s,e):void 0;return Cr=!1,r}function ug(s,e){const t=s.type;s.accessCache=Object.create(null),s.proxy=Pd(new Proxy(s.ctx,Nm));const{setup:n}=t;if(n){const i=s.setupContext=n.length>1?dg(s):null;Ds(s),Ys();const r=xi(n,s,0,[s.props,i]);if($s(),Gi(),gd(r)){if(r.then(Gi,Gi),e)return r.then(o=>{qc(s,o,e)}).catch(o=>{jo(o,s,0)});s.asyncDep=r}else qc(s,r,e)}else nf(s,e)}function qc(s,e,t){Xe(e)?s.type.__ssrInlineRender?s.ssrRender=e:s.render=e:Mt(e)&&(s.setupState=Id(e)),nf(s,t)}let jc;function nf(s,e,t){const n=s.type;if(!s.render){if(!e&&jc&&!n.render){const i=n.template||Jl(s).template;if(i){const{isCustomElement:r,compilerOptions:o}=s.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Rt(Rt({isCustomElement:r,delimiters:a},o),l);n.render=jc(i,c)}}s.render=n.render||vn}Ds(s),Ys(),Dm(s),$s(),Gi()}function hg(s){return s.attrsProxy||(s.attrsProxy=new Proxy(s.attrs,{get(e,t){return Kt(s,"get","$attrs"),e[t]}}))}function dg(s){const e=t=>{s.exposed=t||{}};return{get attrs(){return hg(s)},slots:s.slots,emit:s.emit,expose:e}}function nc(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Id(Pd(s.exposed)),{get(e,t){if(t in e)return e[t];if(t in vr)return vr[t](s)},has(e,t){return t in e||t in vr}}))}function fg(s){return Xe(s)&&"__vccOpts"in s}const pg=(s,e)=>sm(s,e,Cr),mg=Symbol.for("v-scx"),gg=()=>Co(mg),_g="3.3.4",vg="http://www.w3.org/2000/svg",Oi=typeof document<"u"?document:null,Yc=Oi&&Oi.createElement("template"),xg={insert:(s,e,t)=>{e.insertBefore(s,t||null)},remove:s=>{const e=s.parentNode;e&&e.removeChild(s)},createElement:(s,e,t,n)=>{const i=e?Oi.createElementNS(vg,s):Oi.createElement(s,t?{is:t}:void 0);return s==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:s=>Oi.createTextNode(s),createComment:s=>Oi.createComment(s),setText:(s,e)=>{s.nodeValue=e},setElementText:(s,e)=>{s.textContent=e},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Oi.querySelector(s),setScopeId(s,e){s.setAttribute(e,"")},insertStaticContent(s,e,t,n,i,r){const o=t?t.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{Yc.innerHTML=n?`<svg>${s}</svg>`:s;const a=Yc.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function yg(s,e,t){const n=s._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?s.removeAttribute("class"):t?s.setAttribute("class",e):s.className=e}function Mg(s,e,t){const n=s.style,i=Nt(t);if(t&&!i){if(e&&!Nt(e))for(const r in e)t[r]==null&&xl(n,r,"");for(const r in t)xl(n,r,t[r])}else{const r=n.display;i?e!==t&&(n.cssText=t):e&&s.removeAttribute("style"),"_vod"in s&&(n.display=r)}}const $c=/\s*!important$/;function xl(s,e,t){if(He(t))t.forEach(n=>xl(s,e,n));else if(t==null&&(t=""),e.startsWith("--"))s.setProperty(e,t);else{const n=Eg(s,e);$c.test(t)?s.setProperty(js(n),t.replace($c,""),"important"):s[n]=t}}const Kc=["Webkit","Moz","ms"],ma={};function Eg(s,e){const t=ma[e];if(t)return t;let n=Is(e);if(n!=="filter"&&n in s)return ma[e]=n;n=_d(n);for(let i=0;i<Kc.length;i++){const r=Kc[i]+n;if(r in s)return ma[e]=r}return e}const Zc="http://www.w3.org/1999/xlink";function bg(s,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?s.removeAttributeNS(Zc,e.slice(6,e.length)):s.setAttributeNS(Zc,e,t);else{const r=Ep(e);t==null||r&&!vd(t)?s.removeAttribute(e):s.setAttribute(e,r?"":t)}}function Sg(s,e,t,n,i,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,r),s[e]=t??"";return}const a=s.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){s._value=t;const c=a==="OPTION"?s.getAttribute("value"):s.value,u=t??"";c!==u&&(s.value=u),t==null&&s.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof s[e];c==="boolean"?t=vd(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{s[e]=t}catch{}l&&s.removeAttribute(e)}function Tg(s,e,t,n){s.addEventListener(e,t,n)}function wg(s,e,t,n){s.removeEventListener(e,t,n)}function Ag(s,e,t,n,i=null){const r=s._vei||(s._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=Rg(e);if(n){const c=r[e]=Pg(n,i);Tg(s,a,c,l)}else o&&(wg(s,a,o,l),r[e]=void 0)}}const Jc=/(?:Once|Passive|Capture)$/;function Rg(s){let e;if(Jc.test(s)){e={};let n;for(;n=s.match(Jc);)s=s.slice(0,s.length-n[0].length),e[n[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):js(s.slice(2)),e]}let ga=0;const Cg=Promise.resolve(),Lg=()=>ga||(Cg.then(()=>ga=0),ga=Date.now());function Pg(s,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;xn(Ig(n,t.value),e,5,[n])};return t.value=s,t.attached=Lg(),t}function Ig(s,e){if(He(e)){const t=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{t.call(s),s._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const Qc=/^on[a-z]/,Ng=(s,e,t,n,i=!1,r,o,a,l)=>{e==="class"?yg(s,n,i):e==="style"?Mg(s,t,n):Go(e)?Ul(e)||Ag(s,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dg(s,e,n,i))?Sg(s,e,n,r,o,a,l):(e==="true-value"?s._trueValue=n:e==="false-value"&&(s._falseValue=n),bg(s,e,n,i))};function Dg(s,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in s&&Qc.test(e)&&Xe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&s.tagName==="INPUT"||e==="type"&&s.tagName==="TEXTAREA"||Qc.test(e)&&Nt(t)?!1:e in s}const Ug=Rt({patchProp:Ng},xg);let eu;function Fg(){return eu||(eu=jm(Ug))}const Og=(...s)=>{const e=Fg().createApp(...s),{mount:t}=e;return e.mount=n=>{const i=Bg(n);if(!i)return;const r=e._component;!Xe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Bg(s){return Nt(s)?document.querySelector(s):s}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="156",ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zg=0,tu=1,Hg=2,sf=1,kg=2,Kn=3,ni=0,$t=1,Cn=2,yi=0,Cs=1,nu=2,iu=3,su=4,Vg=5,bs=100,Gg=101,Wg=102,ru=103,ou=104,Xg=200,qg=201,jg=202,Yg=203,rf=204,of=205,$g=206,Kg=207,Zg=208,Jg=209,Qg=210,e_=0,t_=1,n_=2,yl=3,i_=4,s_=5,r_=6,o_=7,af=0,a_=1,l_=2,Mi=0,c_=1,u_=2,h_=3,d_=4,f_=5,lf=300,Us=301,Fs=302,Ml=303,El=304,Jo=306,Os=1e3,an=1001,Bo=1002,At=1003,bl=1004,Po=1005,Yt=1006,cf=1007,Yi=1008,Ei=1009,p_=1010,m_=1011,sc=1012,uf=1013,gi=1014,Qn=1015,Lr=1016,hf=1017,df=1018,Wi=1020,g_=1021,ln=1023,__=1024,v_=1025,Xi=1026,Bs=1027,x_=1028,ff=1029,y_=1030,pf=1031,mf=1033,_a=33776,va=33777,xa=33778,ya=33779,au=35840,lu=35841,cu=35842,uu=35843,M_=36196,hu=37492,du=37496,fu=37808,pu=37809,mu=37810,gu=37811,_u=37812,vu=37813,xu=37814,yu=37815,Mu=37816,Eu=37817,bu=37818,Su=37819,Tu=37820,wu=37821,Ma=36492,Au=36494,Ru=36495,E_=36283,Cu=36284,Lu=36285,Pu=36286,Pr=2300,zs=2301,Ea=2302,Iu=2400,Nu=2401,Du=2402,b_=2500,S_=0,gf=1,Sl=2,_f=3e3,qi=3001,T_=3200,w_=3201,vf=0,A_=1,ji="",nt="srgb",Ct="srgb-linear",Qo="display-p3",ba=7680,R_=519,C_=512,L_=513,P_=514,I_=515,N_=516,D_=517,U_=518,F_=519,Tl=35044,Uu="300 es",wl=1035,ei=2e3,zo=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fu=1234567;const yr=Math.PI/180,Hs=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[s&255]+Dt[s>>8&255]+Dt[s>>16&255]+Dt[s>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Lt(s,e,t){return Math.max(e,Math.min(t,s))}function rc(s,e){return(s%e+e)%e}function O_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function B_(s,e,t){return s!==e?(t-s)/(e-s):0}function Mr(s,e,t){return(1-t)*s+t*e}function z_(s,e,t,n){return Mr(s,e,1-Math.exp(-t*n))}function H_(s,e=1){return e-Math.abs(rc(s,e*2)-e)}function k_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function V_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function G_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function W_(s,e){return s+Math.random()*(e-s)}function X_(s){return s*(.5-Math.random())}function q_(s){s!==void 0&&(Fu=s);let e=Fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function j_(s){return s*yr}function Y_(s){return s*Hs}function Al(s){return(s&s-1)===0&&s!==0}function xf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ho(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $_(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*d,l*h,a*c);break;case"YZY":s.set(l*h,a*u,l*d,a*c);break;case"ZXZ":s.set(l*d,l*h,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const yf={DEG2RAD:yr,RAD2DEG:Hs,generateUUID:yn,clamp:Lt,euclideanModulo:rc,mapLinear:O_,inverseLerp:B_,lerp:Mr,damp:z_,pingpong:H_,smoothstep:k_,smootherstep:V_,randInt:G_,randFloat:W_,randFloatSpread:X_,seededRandom:q_,degToRad:j_,radToDeg:Y_,isPowerOfTwo:Al,ceilPowerOfTwo:xf,floorPowerOfTwo:Ho,setQuaternionFromProperEuler:$_,normalize:st,denormalize:Ln};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,r,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],y=i[7],w=i[2],C=i[5],A=i[8];return r[0]=o*_+a*v+l*w,r[3]=o*m+a*x+l*C,r[6]=o*p+a*y+l*A,r[1]=c*_+u*v+d*w,r[4]=c*m+u*x+d*C,r[7]=c*p+u*y+d*A,r[2]=h*_+f*v+g*w,r[5]=h*m+f*x+g*C,r[8]=h*p+f*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new We;function Mf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function K_(){const s=Ir("canvas");return s.style.display="block",s}const Ou={};function Er(s){s in Ou||(Ou[s]=!0,console.warn(s))}function Ls(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ta(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Z_=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),J_=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Q_(s){return s.convertSRGBToLinear().applyMatrix3(J_)}function ev(s){return s.applyMatrix3(Z_).convertLinearToSRGB()}const tv={[Ct]:s=>s,[nt]:s=>s.convertSRGBToLinear(),[Qo]:Q_},nv={[Ct]:s=>s,[nt]:s=>s.convertLinearToSRGB(),[Qo]:ev},tn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Ct},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=tv[e],i=nv[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let is;class Ef{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{is===void 0&&(is=Ir("canvas")),is.width=e.width,is.height=e.height;const n=is.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ls(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ls(t[n]/255)*255):t[n]=Ls(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iv=0;class bf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=yn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(wa(i[o].image)):r.push(wa(i[o]))}else r=wa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function wa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ef.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sv=0;class Pt extends Qi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=an,i=an,r=Yt,o=Yi,a=ln,l=Ei,c=Pt.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=yn(),this.name="",this.source=new bf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===qi?nt:ji),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nt?qi:_f}set encoding(e){Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qi?nt:ji}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=lf;Pt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,w=(p+1)/2,C=(u+h)/4,A=(d+_)/4,I=(g+m)/4;return x>y&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=C/n,r=A/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=C/i,r=I/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=A/r,i=I/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rv extends Qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qi?nt:ji),this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends rv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sf extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ov extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Dn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let m=1-a;const p=l*h+c*f+u*g+d*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),C=Math.atan2(w,p*v);m=Math.sin(m*C)/w,a=Math.sin(a*C)/w}const y=a*v;if(l=l*m+h*y,c=c*m+f*y,u=u*m+g*y,d=d*m+_*y,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(r/2),h=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,d=l*i+r*n-o*t,h=-r*t-o*n-a*i;return this.x=c*l+h*-r+u*-a-d*-o,this.y=u*l+h*-o+d*-r-c*-a,this.z=d*l+h*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new H,Bu=new Dn;class si{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox),ss.applyMatrix4(e.matrixWorld),this.union(ss);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)zn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(zn)}else i.boundingBox===null&&i.computeBoundingBox(),ss.copy(i.boundingBox),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Yr.subVectors(this.max,nr),rs.subVectors(e.a,nr),os.subVectors(e.b,nr),as.subVectors(e.c,nr),oi.subVectors(os,rs),ai.subVectors(as,os),Ci.subVectors(rs,as);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ci.z,Ci.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ci.z,0,-Ci.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ci.y,Ci.x,0];return!Ra(t,rs,os,as,Yr)||(t=[1,0,0,0,1,0,0,0,1],!Ra(t,rs,os,as,Yr))?!1:($r.crossVectors(oi,ai),t=[$r.x,$r.y,$r.z],Ra(t,rs,os,as,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new H,new H,new H,new H,new H,new H,new H,new H],zn=new H,ss=new si,rs=new H,os=new H,as=new H,oi=new H,ai=new H,Ci=new H,nr=new H,Yr=new H,$r=new H,Li=new H;function Ra(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Li.fromArray(s,r);const a=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const av=new si,ir=new H,Ca=new H;class Un{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):av.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ir,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Ca)),this.expandByPoint(ir.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new H,La=new H,Kr=new H,li=new H,Pa=new H,Zr=new H,Ia=new H;let Ur=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){La.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),li.copy(this.origin).sub(La);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Kr),a=li.dot(this.direction),l=-li.dot(Kr),c=li.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(La).addScaledVector(Kr,h),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,r){Pa.subVectors(t,e),Zr.subVectors(n,e),Ia.crossVectors(Pa,Zr);let o=this.direction.dot(Ia),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=a*this.direction.dot(Zr.crossVectors(li,Zr));if(l<0)return null;const c=a*this.direction.dot(Pa.cross(li));if(c<0||l+c>o)return null;const u=-a*li.dot(Ia);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class qe{constructor(e,t,n,i,r,o,a,l,c,u,d,h,f,g,_,m){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,d,h,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lv,e,cv)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ci.crossVectors(n,Qt),ci.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ci.crossVectors(n,Qt)),ci.normalize(),Jr.crossVectors(Qt,ci),i[0]=ci.x,i[4]=Jr.x,i[8]=Qt.x,i[1]=ci.y,i[5]=Jr.y,i[9]=Qt.y,i[2]=ci.z,i[6]=Jr.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],y=n[11],w=n[15],C=i[0],A=i[4],I=i[8],M=i[12],S=i[1],V=i[5],B=i[9],L=i[13],N=i[2],D=i[6],U=i[10],W=i[14],X=i[3],ee=i[7],se=i[11],j=i[15];return r[0]=o*C+a*S+l*N+c*X,r[4]=o*A+a*V+l*D+c*ee,r[8]=o*I+a*B+l*U+c*se,r[12]=o*M+a*L+l*W+c*j,r[1]=u*C+d*S+h*N+f*X,r[5]=u*A+d*V+h*D+f*ee,r[9]=u*I+d*B+h*U+f*se,r[13]=u*M+d*L+h*W+f*j,r[2]=g*C+_*S+m*N+p*X,r[6]=g*A+_*V+m*D+p*ee,r[10]=g*I+_*B+m*U+p*se,r[14]=g*M+_*L+m*W+p*j,r[3]=v*C+x*S+y*N+w*X,r[7]=v*A+x*V+y*D+w*ee,r[11]=v*I+x*B+y*U+w*se,r[15]=v*M+x*L+y*W+w*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*d-i*c*d-r*a*h+n*c*h+i*a*f-n*l*f)+_*(+t*l*f-t*c*h+r*o*h-i*o*f+i*c*u-r*l*u)+m*(+t*c*d-t*a*f-r*o*d+n*o*f+r*a*u-n*c*u)+p*(-i*a*u-t*l*d+t*a*h+i*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=d*m*c-_*h*c+_*l*f-a*m*f-d*l*p+a*h*p,x=g*h*c-u*m*c-g*l*f+o*m*f+u*l*p-o*h*p,y=u*_*c-g*d*c+g*a*f-o*_*f-u*a*p+o*d*p,w=g*d*l-u*_*l-g*a*h+o*_*h+u*a*m-o*d*m,C=t*v+n*x+i*y+r*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=v*A,e[1]=(_*h*r-d*m*r-_*i*f+n*m*f+d*i*p-n*h*p)*A,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(d*l*r-a*h*r-d*i*c+n*h*c+a*i*f-n*l*f)*A,e[4]=x*A,e[5]=(u*m*r-g*h*r+g*i*f-t*m*f-u*i*p+t*h*p)*A,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*A,e[7]=(o*h*r-u*l*r+u*i*c-t*h*c-o*i*f+t*l*f)*A,e[8]=y*A,e[9]=(g*d*r-u*_*r-g*n*f+t*_*f+u*n*p-t*d*p)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*A,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*f-t*a*f)*A,e[12]=w*A,e[13]=(u*_*i-g*d*i+g*n*h-t*_*h-u*n*m+t*d*m)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*h+t*a*h)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,_=o*u,m=o*d,p=a*d,v=l*c,x=l*u,y=l*d,w=n.x,C=n.y,A=n.z;return i[0]=(1-(_+p))*w,i[1]=(f+y)*w,i[2]=(g-x)*w,i[3]=0,i[4]=(f-y)*C,i[5]=(1-(h+p))*C,i[6]=(m+v)*C,i[7]=0,i[8]=(g+x)*A,i[9]=(m-v)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ls.set(i[0],i[1],i[2]).length();const o=ls.set(i[4],i[5],i[6]).length(),a=ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const c=1/r,u=1/o,d=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,t.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ei){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let f,g;if(a===ei)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===zo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ei){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(o-r),h=(t+e)*c,f=(n+i)*u;let g,_;if(a===ei)g=(o+r)*d,_=-2*d;else if(a===zo)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ls=new H,cn=new qe,lv=new H(0,0,0),cv=new H(1,1,1),ci=new H,Jr=new H,Qt=new H,zu=new qe,Hu=new Dn;class ea{constructor(e=0,t=0,n=0,i=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class Tf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uv=0;const ku=new H,cs=new Dn,kn=new qe,Qr=new H,sr=new H,hv=new H,dv=new Dn,Vu=new H(1,0,0),Gu=new H(0,1,0),Wu=new H(0,0,1),fv={type:"added"},pv={type:"removed"};class ut extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new H,t=new ea,n=new Dn,i=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new We}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Tf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(Gu,e)}rotateZ(e){return this.rotateOnAxis(Wu,e)}translateOnAxis(e,t){return ku.copy(e).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(Gu,e)}translateZ(e){return this.translateOnAxis(Wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(sr,Qr,this.up):kn.lookAt(Qr,sr,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(kn),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,hv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new H(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new H,Vn=new H,Na=new H,Gn=new H,us=new H,hs=new H,Xu=new H,Da=new H,Ua=new H,Fa=new H;let eo=!1;class pn{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){un.subVectors(i,t),Vn.subVectors(n,t),Na.subVectors(e,t);const o=un.dot(un),a=un.dot(Vn),l=un.dot(Na),c=Vn.dot(Vn),u=Vn.dot(Na),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gn),Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getUV(e,t,n,i,r,o,a,l){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Gn),l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),Vn.subVectors(e,t),un.cross(Vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),un.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;us.subVectors(i,n),hs.subVectors(r,n),Da.subVectors(e,n);const l=us.dot(Da),c=hs.dot(Da);if(l<=0&&c<=0)return t.copy(n);Ua.subVectors(e,i);const u=us.dot(Ua),d=hs.dot(Ua);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(us,o);Fa.subVectors(e,r);const f=us.dot(Fa),g=hs.dot(Fa);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(hs,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Xu.subVectors(r,i),a=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(Xu,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(us,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let mv=0,In=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Cs,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=of,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},to={h:0,s:0,l:0};function Oa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tn.workingColorSpace){return this.r=e,this.g=t,this.b=n,tn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tn.workingColorSpace){if(e=rc(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Oa(o,r,e+1/3),this.g=Oa(o,r,e),this.b=Oa(o,r,e-1/3)}return tn.toWorkingColorSpace(this,i),this}setStyle(e,t=nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){const n=wf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return tn.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Lt(Ut.r*255,0,255))*65536+Math.round(Lt(Ut.g*255,0,255))*256+Math.round(Lt(Ut.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tn.workingColorSpace){tn.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,i=Ut.g,r=Ut.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tn.workingColorSpace){return tn.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=nt){tn.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,i=Ut.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hn),hn.h+=e,hn.s+=t,hn.l+=n,this.setHSL(hn.h,hn.s,hn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(to);const n=Mr(hn.h,to.h,t),i=Mr(hn.s,to.s,t),r=Mr(hn.l,to.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new ze;ze.NAMES=wf;class _i extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new H,no=new Ue;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tl,this.updateRange={offset:0,count:-1},this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Af extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rf extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gv=0;const rn=new qe,Ba=new ut,ds=new H,en=new si,rr=new si,wt=new H;class It extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mf(e)?Rf:Af)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(en.min,rr.min),en.expandByPoint(wt),wt.addVectors(en.max,rr.max),en.expandByPoint(wt)):(en.expandByPoint(rr.min),en.expandByPoint(rr.max))}en.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)wt.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(e,c),wt.add(ds)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<a;S++)c[S]=new H,u[S]=new H;const d=new H,h=new H,f=new H,g=new Ue,_=new Ue,m=new Ue,p=new H,v=new H;function x(S,V,B){d.fromArray(i,S*3),h.fromArray(i,V*3),f.fromArray(i,B*3),g.fromArray(o,S*2),_.fromArray(o,V*2),m.fromArray(o,B*2),h.sub(d),f.sub(d),_.sub(g),m.sub(g);const L=1/(_.x*m.y-m.x*_.y);isFinite(L)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(L),v.copy(f).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(L),c[S].add(p),c[V].add(p),c[B].add(p),u[S].add(v),u[V].add(v),u[B].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let S=0,V=y.length;S<V;++S){const B=y[S],L=B.start,N=B.count;for(let D=L,U=L+N;D<U;D+=3)x(n[D+0],n[D+1],n[D+2])}const w=new H,C=new H,A=new H,I=new H;function M(S){A.fromArray(r,S*3),I.copy(A);const V=c[S];w.copy(V),w.sub(A.multiplyScalar(A.dot(V))).normalize(),C.crossVectors(I,V);const L=C.dot(u[S])<0?-1:1;l[S*4]=w.x,l[S*4+1]=w.y,l[S*4+2]=w.z,l[S*4+3]=L}for(let S=0,V=y.length;S<V;++S){const B=y[S],L=B.start,N=B.count;for(let D=L,U=L+N;D<U;D+=3)M(n[D+0]),M(n[D+1]),M(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Xt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qu=new qe,Pi=new Ur,io=new Un,ju=new H,fs=new H,ps=new H,ms=new H,za=new H,so=new H,ro=new Ue,oo=new Ue,ao=new Ue,Yu=new H,$u=new H,Ku=new H,lo=new H,co=new H;class pt extends ut{constructor(e=new It,t=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(za.fromBufferAttribute(d,e),o?so.addScaledVector(za,u):so.addScaledVector(za.sub(t),u))}t.add(so)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(io.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(io,ju)===null||Pi.origin.distanceToSquared(ju)>(e.far-e.near)**2))&&(qu.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(qu),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,w=x;y<w;y+=3){const C=a.getX(y),A=a.getX(y+1),I=a.getX(y+2);i=uo(this,p,e,n,c,u,d,C,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=uo(this,o,e,n,c,u,d,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,w=x;y<w;y+=3){const C=y,A=y+1,I=y+2;i=uo(this,p,e,n,c,u,d,C,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,y=m+2;i=uo(this,o,e,n,c,u,d,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function _v(s,e,t,n,i,r,o,a){let l;if(e.side===$t?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===ni,a),l===null)return null;co.copy(a),co.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(co);return c<t.near||c>t.far?null:{distance:c,point:co.clone(),object:s}}function uo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,fs),s.getVertexPosition(l,ps),s.getVertexPosition(c,ms);const u=_v(s,e,t,n,fs,ps,ms,lo);if(u){i&&(ro.fromBufferAttribute(i,a),oo.fromBufferAttribute(i,l),ao.fromBufferAttribute(i,c),u.uv=pn.getInterpolation(lo,fs,ps,ms,ro,oo,ao,new Ue)),r&&(ro.fromBufferAttribute(r,a),oo.fromBufferAttribute(r,l),ao.fromBufferAttribute(r,c),u.uv1=pn.getInterpolation(lo,fs,ps,ms,ro,oo,ao,new Ue),u.uv2=u.uv1),o&&(Yu.fromBufferAttribute(o,a),$u.fromBufferAttribute(o,l),Ku.fromBufferAttribute(o,c),u.normal=pn.getInterpolation(lo,fs,ps,ms,Yu,$u,Ku,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new H,materialIndex:0};pn.getNormal(fs,ps,ms,d.normal),u.face=d}return u}class Ki extends It{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function g(_,m,p,v,x,y,w,C,A,I,M){const S=y/A,V=w/I,B=y/2,L=w/2,N=C/2,D=A+1,U=I+1;let W=0,X=0;const ee=new H;for(let se=0;se<U;se++){const j=se*V-L;for(let G=0;G<D;G++){const _e=G*S-B;ee[_]=_e*v,ee[m]=j*x,ee[p]=N,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=C>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(G/A),d.push(1-se/I),W+=1}}for(let se=0;se<I;se++)for(let j=0;j<A;j++){const G=h+j+D*se,_e=h+j+D*(se+1),Me=h+(j+1)+D*(se+1),we=h+(j+1)+D*se;l.push(G,_e,we),l.push(_e,Me,we),X+=6}a.addGroup(f,X,M),f+=X,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(s){const e={};for(let t=0;t<s.length;t++){const n=ks(s[t]);for(const i in n)e[i]=n[i]}return e}function vv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Cf(s){return s.getRenderTarget()===null?s.outputColorSpace:Ct}const xv={clone:ks,merge:Vt};var yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yv,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lf extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends Lf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gs=-90,_s=1;class Ev extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Gt(gs,_s,e,t);i.layers=this.layers,this.add(i);const r=new Gt(gs,_s,e,t);r.layers=this.layers,this.add(r);const o=new Gt(gs,_s,e,t);o.layers=this.layers,this.add(o);const a=new Gt(gs,_s,e,t);a.layers=this.layers,this.add(a);const l=new Gt(gs,_s,e,t);l.layers=this.layers,this.add(l);const c=new Gt(gs,_s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Pf extends Pt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Us,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bv extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qi?nt:ji),this.texture=new Pf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ki(5,5,5),r=new Zi({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:yi});r.uniforms.tEquirect.value=t;const o=new pt(i,r),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Yt),new Ev(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ha=new H,Sv=new H,Tv=new We;let pi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ha.subVectors(n,t).cross(Sv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ha),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tv.getNormalMatrix(e),i=this.coplanarPoint(Ha).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ii=new Un,ho=new H;class oc{constructor(e=new pi,t=new pi,n=new pi,i=new pi,r=new pi,o=new pi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,h-c,m-f,y-p).normalize(),n[1].setComponents(l+r,h+c,m+f,y+p).normalize(),n[2].setComponents(l+o,h+u,m+g,y+v).normalize(),n[3].setComponents(l-o,h-u,m-g,y-v).normalize(),n[4].setComponents(l-a,h-d,m-_,y-x).normalize(),t===ei)n[5].setComponents(l+a,h+d,m+_,y+x).normalize();else if(t===zo)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ho.x=i.normal.x>0?e.max.x:e.min.x,ho.y=i.normal.y>0?e.max.y:e.min.y,ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function If(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function wv(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,f=s.createBuffer();s.bindBuffer(u,f),s.bufferData(u,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=s.SHORT;else if(d instanceof Uint32Array)g=s.UNSIGNED_INT;else if(d instanceof Int32Array)g=s.INT;else if(d instanceof Int8Array)g=s.BYTE;else if(d instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const h=u.array,f=u.updateRange;s.bindBuffer(d,c),f.count===-1?s.bufferSubData(d,0,h):(t?s.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):s.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class Vs extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*h-o;for(let x=0;x<c;x++){const y=x*d-r;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+c*p,y=v+c*(p+1),w=v+1+c*(p+1),C=v+1+c*p;f.push(x,y,C),f.push(y,w,C)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ov=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$v=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",nx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Px=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ux=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,I0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,X0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ey=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ny=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Av,alphahash_pars_fragment:Rv,alphamap_fragment:Cv,alphamap_pars_fragment:Lv,alphatest_fragment:Pv,alphatest_pars_fragment:Iv,aomap_fragment:Nv,aomap_pars_fragment:Dv,begin_vertex:Uv,beginnormal_vertex:Fv,bsdfs:Ov,iridescence_fragment:Bv,bumpmap_pars_fragment:zv,clipping_planes_fragment:Hv,clipping_planes_pars_fragment:kv,clipping_planes_pars_vertex:Vv,clipping_planes_vertex:Gv,color_fragment:Wv,color_pars_fragment:Xv,color_pars_vertex:qv,color_vertex:jv,common:Yv,cube_uv_reflection_fragment:$v,defaultnormal_vertex:Kv,displacementmap_pars_vertex:Zv,displacementmap_vertex:Jv,emissivemap_fragment:Qv,emissivemap_pars_fragment:ex,colorspace_fragment:tx,colorspace_pars_fragment:nx,envmap_fragment:ix,envmap_common_pars_fragment:sx,envmap_pars_fragment:rx,envmap_pars_vertex:ox,envmap_physical_pars_fragment:vx,envmap_vertex:ax,fog_vertex:lx,fog_pars_vertex:cx,fog_fragment:ux,fog_pars_fragment:hx,gradientmap_pars_fragment:dx,lightmap_fragment:fx,lightmap_pars_fragment:px,lights_lambert_fragment:mx,lights_lambert_pars_fragment:gx,lights_pars_begin:_x,lights_toon_fragment:xx,lights_toon_pars_fragment:yx,lights_phong_fragment:Mx,lights_phong_pars_fragment:Ex,lights_physical_fragment:bx,lights_physical_pars_fragment:Sx,lights_fragment_begin:Tx,lights_fragment_maps:wx,lights_fragment_end:Ax,logdepthbuf_fragment:Rx,logdepthbuf_pars_fragment:Cx,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Px,map_fragment:Ix,map_pars_fragment:Nx,map_particle_fragment:Dx,map_particle_pars_fragment:Ux,metalnessmap_fragment:Fx,metalnessmap_pars_fragment:Ox,morphcolor_vertex:Bx,morphnormal_vertex:zx,morphtarget_pars_vertex:Hx,morphtarget_vertex:kx,normal_fragment_begin:Vx,normal_fragment_maps:Gx,normal_pars_fragment:Wx,normal_pars_vertex:Xx,normal_vertex:qx,normalmap_pars_fragment:jx,clearcoat_normal_fragment_begin:Yx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:Zx,opaque_fragment:Jx,packing:Qx,premultiplied_alpha_fragment:e0,project_vertex:t0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:r0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:a0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:u0,skinning_pars_vertex:h0,skinning_vertex:d0,skinnormal_vertex:f0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:_0,transmission_fragment:v0,transmission_pars_fragment:x0,uv_pars_fragment:y0,uv_pars_vertex:M0,uv_vertex:E0,worldpos_vertex:b0,background_vert:S0,background_frag:T0,backgroundCube_vert:w0,backgroundCube_frag:A0,cube_vert:R0,cube_frag:C0,depth_vert:L0,depth_frag:P0,distanceRGBA_vert:I0,distanceRGBA_frag:N0,equirect_vert:D0,equirect_frag:U0,linedashed_vert:F0,linedashed_frag:O0,meshbasic_vert:B0,meshbasic_frag:z0,meshlambert_vert:H0,meshlambert_frag:k0,meshmatcap_vert:V0,meshmatcap_frag:G0,meshnormal_vert:W0,meshnormal_frag:X0,meshphong_vert:q0,meshphong_frag:j0,meshphysical_vert:Y0,meshphysical_frag:$0,meshtoon_vert:K0,meshtoon_frag:Z0,points_vert:J0,points_frag:Q0,shadow_vert:ey,shadow_frag:ty,sprite_vert:ny,sprite_frag:iy},ye={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},An={basic:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Vt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Vt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Vt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Vt([ye.points,ye.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Vt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Vt([ye.common,ye.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Vt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Vt([ye.sprite,ye.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Vt([ye.common,ye.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Vt([ye.lights,ye.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};An.physical={uniforms:Vt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const fo={r:0,b:0,g:0};function sy(s,e,t,n,i,r,o){const a=new ze(0);let l=r===!0?0:1,c,u,d=null,h=0,f=null;function g(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Jo)?(u===void 0&&(u=new pt(new Ki(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:ks(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=x.colorSpace!==nt,(d!==x||h!==x.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,f=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new pt(new Vs(2,2),new Zi({name:"BackgroundMaterial",uniforms:ks(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.colorSpace!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(fo,Cf(s)),n.buffers.color.setClear(fo.r,fo.g,fo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function ry(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function d(N,D,U,W,X){let ee=!1;if(o){const se=_(W,U,D);c!==se&&(c=se,f(c.object)),ee=p(N,W,U,X),ee&&v(N,W,U,X)}else{const se=D.wireframe===!0;(c.geometry!==W.id||c.program!==U.id||c.wireframe!==se)&&(c.geometry=W.id,c.program=U.id,c.wireframe=se,ee=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,I(N,D,U,W),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(N){return n.isWebGL2?s.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?s.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function _(N,D,U){const W=U.wireframe===!0;let X=a[N.id];X===void 0&&(X={},a[N.id]=X);let ee=X[D.id];ee===void 0&&(ee={},X[D.id]=ee);let se=ee[W];return se===void 0&&(se=m(h()),ee[W]=se),se}function m(N){const D=[],U=[],W=[];for(let X=0;X<i;X++)D[X]=0,U[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:W,object:N,attributes:{},index:null}}function p(N,D,U,W){const X=c.attributes,ee=D.attributes;let se=0;const j=U.getAttributes();for(const G in j)if(j[G].location>=0){const Me=X[G];let we=ee[G];if(we===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(we=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(we=N.instanceColor)),Me===void 0||Me.attribute!==we||we&&Me.data!==we.data)return!0;se++}return c.attributesNum!==se||c.index!==W}function v(N,D,U,W){const X={},ee=D.attributes;let se=0;const j=U.getAttributes();for(const G in j)if(j[G].location>=0){let Me=ee[G];Me===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor));const we={};we.attribute=Me,Me&&Me.data&&(we.data=Me.data),X[G]=we,se++}c.attributes=X,c.attributesNum=se,c.index=W}function x(){const N=c.newAttributes;for(let D=0,U=N.length;D<U;D++)N[D]=0}function y(N){w(N,0)}function w(N,D){const U=c.newAttributes,W=c.enabledAttributes,X=c.attributeDivisors;U[N]=1,W[N]===0&&(s.enableVertexAttribArray(N),W[N]=1),X[N]!==D&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,D),X[N]=D)}function C(){const N=c.newAttributes,D=c.enabledAttributes;for(let U=0,W=D.length;U<W;U++)D[U]!==N[U]&&(s.disableVertexAttribArray(U),D[U]=0)}function A(N,D,U,W,X,ee,se){se===!0?s.vertexAttribIPointer(N,D,U,X,ee):s.vertexAttribPointer(N,D,U,W,X,ee)}function I(N,D,U,W){if(n.isWebGL2===!1&&(N.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=W.attributes,ee=U.getAttributes(),se=D.defaultAttributeValues;for(const j in ee){const G=ee[j];if(G.location>=0){let _e=X[j];if(_e===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor)),_e!==void 0){const Me=_e.normalized,we=_e.itemSize,Re=t.get(_e);if(Re===void 0)continue;const Pe=Re.buffer,Le=Re.type,ke=Re.bytesPerElement,dt=n.isWebGL2===!0&&(Le===s.INT||Le===s.UNSIGNED_INT||_e.gpuType===uf);if(_e.isInterleavedBufferAttribute){const Be=_e.data,b=Be.stride,O=_e.offset;if(Be.isInstancedInterleavedBuffer){for(let q=0;q<G.locationSize;q++)w(G.location+q,Be.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let q=0;q<G.locationSize;q++)y(G.location+q);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let q=0;q<G.locationSize;q++)A(G.location+q,we/G.locationSize,Le,Me,b*ke,(O+we/G.locationSize*q)*ke,dt)}else{if(_e.isInstancedBufferAttribute){for(let Be=0;Be<G.locationSize;Be++)w(G.location+Be,_e.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Be=0;Be<G.locationSize;Be++)y(G.location+Be);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Be=0;Be<G.locationSize;Be++)A(G.location+Be,we/G.locationSize,Le,Me,we*ke,we/G.locationSize*Be*ke,dt)}}else if(se!==void 0){const Me=se[j];if(Me!==void 0)switch(Me.length){case 2:s.vertexAttrib2fv(G.location,Me);break;case 3:s.vertexAttrib3fv(G.location,Me);break;case 4:s.vertexAttrib4fv(G.location,Me);break;default:s.vertexAttrib1fv(G.location,Me)}}}}C()}function M(){B();for(const N in a){const D=a[N];for(const U in D){const W=D[U];for(const X in W)g(W[X].object),delete W[X];delete D[U]}delete a[N]}}function S(N){if(a[N.id]===void 0)return;const D=a[N.id];for(const U in D){const W=D[U];for(const X in W)g(W[X].object),delete W[X];delete D[U]}delete a[N.id]}function V(N){for(const D in a){const U=a[D];if(U[N.id]===void 0)continue;const W=U[N.id];for(const X in W)g(W[X].object),delete W[X];delete U[N.id]}}function B(){L(),u=!0,c!==l&&(c=l,f(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:L,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:y,disableUnusedAttributes:C}}function oy(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let h,f;if(i)h=s,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](r,c,u,d),t.update(u,r,d)}this.setMode=o,this.render=a,this.renderInstances=l}function ay(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,y=o||e.has("OES_texture_float"),w=x&&y,C=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:C}}function ly(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new pi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,x=v*4;let y=p.clippingState||null;l.value=y,y=u(g,h,x,f);for(let w=0;w!==x;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function cy(s){let e=new WeakMap;function t(o,a){return a===Ml?o.mapping=Us:a===El&&(o.mapping=Fs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ml||a===El)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bv(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ac extends Lf{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,Zu=[.125,.215,.35,.446,.526,.582],Bi=20,ka=new ac,Ju=new ze;let Va=null;const Ui=(1+Math.sqrt(5))/2,vs=1/Ui,Qu=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Ui,vs),new H(0,Ui,-vs),new H(vs,0,Ui),new H(-vs,0,Ui),new H(Ui,vs,0),new H(-Ui,vs,0)];class eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Va=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va),e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Lr,format:ln,colorSpace:Ct,depthBuffer:!1},i=th(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uy(r)),this._blurMaterial=hy(r,e,t)}return i}_compileMaterial(e){const t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,n,i){const a=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Ju),u.toneMapping=Mi,u.autoClear=!1;const f=new _i({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new pt(new Ki,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Ju),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;po(i,v*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Us||e.mapping===Fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Qu[(i-1)%Qu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new pt(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Bi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Bi;m>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const p=[];let v=0;for(let A=0;A<Bi;++A){const I=A/_,M=Math.exp(-I*I/2);p.push(M),A===0?v+=M:A<m&&(v+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const y=this._sizeLods[i],w=3*y*(i>x-Ts?i-x+Ts:0),C=4*(this._cubeSize-y);po(t,w,C,3*y,2*y),l.setRenderTarget(t),l.render(d,ka)}}function uy(s){const e=[],t=[],n=[];let i=s;const r=s-Ts+1+Zu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ts?l=Zu[o-s+Ts-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){const A=C%3*2/3-1,I=C>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];v.set(M,_*g*C),x.set(h,m*g*C);const S=[C,C,C,C,C,C];y.set(S,p*g*C)}const w=new It;w.setAttribute("position",new Xt(v,_)),w.setAttribute("uv",new Xt(x,m)),w.setAttribute("faceIndex",new Xt(y,p)),e.push(w),i>Ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function th(s,e,t){const n=new $i(s,e,t);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function hy(s,e,t){const n=new Float32Array(Bi),i=new H(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function nh(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ih(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dy(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ml||l===El,u=l===Us||l===Fs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new eh(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new eh(s));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fy(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function py(s,e,t,n){const i={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete i[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){const w=v[x+0],C=v[x+1],A=v[x+2];h.push(w,C,C,A,A,w)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const w=x+0,C=x+1,A=x+2;h.push(w,C,C,A,A,w)}}else return;const m=new(Mf(h)?Rf:Af)(h,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function my(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,f){s.drawElements(r,f,a,h*l),t.update(f,r,1)}function d(h,f,g){if(g===0)return;let _,m;if(i)_=s,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,f,a,h*l,g),t.update(f,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function gy(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _y(s,e){return s[0]-e[0]}function vy(s,e){return Math.abs(e[1])-Math.abs(s[1])}function xy(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let D=function(){L.dispose(),r.delete(u),u.removeEventListener("dispose",D)};var f=D;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),w===!0&&(M=3);let S=u.attributes.position.count*M,V=1;S>e.maxTextureSize&&(V=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const B=new Float32Array(S*V*4*_),L=new Sf(B,S,V,_);L.type=Qn,L.needsUpdate=!0;const N=M*4;for(let U=0;U<_;U++){const W=C[U],X=A[U],ee=I[U],se=S*V*4*U;for(let j=0;j<W.count;j++){const G=j*N;x===!0&&(o.fromBufferAttribute(W,j),B[se+G+0]=o.x,B[se+G+1]=o.y,B[se+G+2]=o.z,B[se+G+3]=0),y===!0&&(o.fromBufferAttribute(X,j),B[se+G+4]=o.x,B[se+G+5]=o.y,B[se+G+6]=o.z,B[se+G+7]=0),w===!0&&(o.fromBufferAttribute(ee,j),B[se+G+8]=o.x,B[se+G+9]=o.y,B[se+G+10]=o.z,B[se+G+11]=ee.itemSize===4?o.w:1)}}m={count:_,texture:L,size:new Ue(S,V)},r.set(u,m),u.addEventListener("dispose",D)}let p=0;for(let x=0;x<h.length;x++)p+=h[x];const v=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",h),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<g;y++){const w=_[y];w[0]=y,w[1]=h[y]}_.sort(vy);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(_y);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const w=a[y],C=w[0],A=w[1];C!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+y)!==m[C]&&u.setAttribute("morphTarget"+y,m[C]),p&&u.getAttribute("morphNormal"+y)!==p[C]&&u.setAttribute("morphNormal"+y,p[C]),i[y]=A,v+=A):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),p&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const x=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function yy(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Nf=new Pt,Df=new Sf,Uf=new ov,Ff=new Pf,sh=[],rh=[],oh=new Float32Array(16),ah=new Float32Array(9),lh=new Float32Array(4);function Ks(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=sh[i];if(r===void 0&&(r=new Float32Array(i),sh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function St(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ta(s,e){let t=rh[e];t===void 0&&(t=new Int32Array(e),rh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function My(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function by(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function Sy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function Ty(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(St(t,n))return;lh.set(n),s.uniformMatrix2fv(this.addr,!1,lh),Tt(t,n)}}function wy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(St(t,n))return;ah.set(n),s.uniformMatrix3fv(this.addr,!1,ah),Tt(t,n)}}function Ay(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(St(t,n))return;oh.set(n),s.uniformMatrix4fv(this.addr,!1,oh),Tt(t,n)}}function Ry(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Cy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function Ly(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function Py(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function Iy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ny(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function Dy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function Uy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function Fy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Nf,i)}function Oy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Uf,i)}function By(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ff,i)}function zy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Df,i)}function Hy(s){switch(s){case 5126:return My;case 35664:return Ey;case 35665:return by;case 35666:return Sy;case 35674:return Ty;case 35675:return wy;case 35676:return Ay;case 5124:case 35670:return Ry;case 35667:case 35671:return Cy;case 35668:case 35672:return Ly;case 35669:case 35673:return Py;case 5125:return Iy;case 36294:return Ny;case 36295:return Dy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return zy}}function ky(s,e){s.uniform1fv(this.addr,e)}function Vy(s,e){const t=Ks(e,this.size,2);s.uniform2fv(this.addr,t)}function Gy(s,e){const t=Ks(e,this.size,3);s.uniform3fv(this.addr,t)}function Wy(s,e){const t=Ks(e,this.size,4);s.uniform4fv(this.addr,t)}function Xy(s,e){const t=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qy(s,e){const t=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jy(s,e){const t=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Yy(s,e){s.uniform1iv(this.addr,e)}function $y(s,e){s.uniform2iv(this.addr,e)}function Ky(s,e){s.uniform3iv(this.addr,e)}function Zy(s,e){s.uniform4iv(this.addr,e)}function Jy(s,e){s.uniform1uiv(this.addr,e)}function Qy(s,e){s.uniform2uiv(this.addr,e)}function eM(s,e){s.uniform3uiv(this.addr,e)}function tM(s,e){s.uniform4uiv(this.addr,e)}function nM(s,e,t){const n=this.cache,i=e.length,r=ta(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Nf,r[o])}function iM(s,e,t){const n=this.cache,i=e.length,r=ta(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Uf,r[o])}function sM(s,e,t){const n=this.cache,i=e.length,r=ta(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ff,r[o])}function rM(s,e,t){const n=this.cache,i=e.length,r=ta(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Df,r[o])}function oM(s){switch(s){case 5126:return ky;case 35664:return Vy;case 35665:return Gy;case 35666:return Wy;case 35674:return Xy;case 35675:return qy;case 35676:return jy;case 5124:case 35670:return Yy;case 35667:case 35671:return $y;case 35668:case 35672:return Ky;case 35669:case 35673:return Zy;case 5125:return Jy;case 36294:return Qy;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return rM}}class aM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Hy(t.type)}}class lM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=oM(t.type)}}class cM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function ch(s,e){s.seq.push(e),s.map[e.id]=e}function uM(s,e,t){const n=s.name,i=n.length;for(Ga.lastIndex=0;;){const r=Ga.exec(n),o=Ga.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ch(t,c===void 0?new aM(a,s,e):new lM(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new cM(a),ch(t,d)),t=d}}}class Io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);uM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function uh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let hM=0;function dM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function fM(s){switch(s){case Ct:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function hh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+dM(s.getShaderSource(e),o)}else return i}function pM(s,e){const t=fM(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function mM(s,e){let t;switch(e){case c_:t="Linear";break;case u_:t="Reinhard";break;case h_:t="OptimizedCineon";break;case d_:t="ACESFilmic";break;case f_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gM(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gr).join(`
`)}function _M(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function gr(s){return s!==""}function dh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(s){return s.replace(xM,MM)}const yM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function MM(s,e){let t=Ge[e];if(t===void 0){const n=yM.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rl(t)}const EM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(s){return s.replace(EM,bM)}function bM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function mh(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===sf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===kg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function TM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Fs:e="ENVMAP_TYPE_CUBE";break;case Jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function AM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case af:e="ENVMAP_BLENDING_MULTIPLY";break;case a_:e="ENVMAP_BLENDING_MIX";break;case l_:e="ENVMAP_BLENDING_ADD";break}return e}function RM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function CM(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=SM(t),c=TM(t),u=wM(t),d=AM(t),h=RM(t),f=t.isWebGL2?"":gM(t),g=_M(r),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gr).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gr).join(`
`),p.length>0&&(p+=`
`)):(m=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),p=[f,mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Mi?mM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,pM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),o=Rl(o),o=dh(o,t),o=fh(o,t),a=Rl(a),a=dh(a,t),a=fh(a,t),o=ph(o),a=ph(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,y=v+p+a,w=uh(i,i.VERTEX_SHADER,x),C=uh(i,i.FRAGMENT_SHADER,y);if(i.attachShader(_,w),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(_).trim(),S=i.getShaderInfoLog(w).trim(),V=i.getShaderInfoLog(C).trim();let B=!0,L=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,C);else{const N=hh(i,w,"vertex"),D=hh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+N+`
`+D)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(S===""||V==="")&&(L=!1);L&&(this.diagnostics={runnable:B,programLog:M,vertexShader:{log:S,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(w),i.deleteShader(C);let A;this.getUniforms=function(){return A===void 0&&(A=new Io(i,_)),A};let I;return this.getAttributes=function(){return I===void 0&&(I=vM(i,_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=C,this}let LM=0;class PM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new IM(e),t.set(e,n)),n}}class IM{constructor(e){this.id=LM++,this.code=e,this.usedTimes=0}}function NM(s,e,t,n,i,r,o){const a=new Tf,l=new PM,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,S,V,B,L){const N=B.fog,D=L.geometry,U=M.isMeshStandardMaterial?B.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||U),X=W&&W.mapping===Jo?W.image.height:null,ee=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const se=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,j=se!==void 0?se.length:0;let G=0;D.morphAttributes.position!==void 0&&(G=1),D.morphAttributes.normal!==void 0&&(G=2),D.morphAttributes.color!==void 0&&(G=3);let _e,Me,we,Re;if(ee){const at=An[ee];_e=at.vertexShader,Me=at.fragmentShader}else _e=M.vertexShader,Me=M.fragmentShader,l.update(M),we=l.getVertexShaderID(M),Re=l.getFragmentShaderID(M);const Pe=s.getRenderTarget(),Le=L.isInstancedMesh===!0,ke=!!M.map,dt=!!M.matcap,Be=!!W,b=!!M.aoMap,O=!!M.lightMap,q=!!M.bumpMap,Z=!!M.normalMap,$=!!M.displacementMap,de=!!M.emissiveMap,he=!!M.metalnessMap,te=!!M.roughnessMap,ue=M.anisotropy>0,le=M.clearcoat>0,Te=M.iridescence>0,R=M.sheen>0,E=M.transmission>0,k=ue&&!!M.anisotropyMap,re=le&&!!M.clearcoatMap,oe=le&&!!M.clearcoatNormalMap,ae=le&&!!M.clearcoatRoughnessMap,xe=Te&&!!M.iridescenceMap,fe=Te&&!!M.iridescenceThicknessMap,J=R&&!!M.sheenColorMap,F=R&&!!M.sheenRoughnessMap,ce=!!M.specularMap,Ee=!!M.specularColorMap,pe=!!M.specularIntensityMap,ge=E&&!!M.transmissionMap,Ne=E&&!!M.thicknessMap,Ke=!!M.gradientMap,z=!!M.alphaMap,be=M.alphaTest>0,Q=!!M.alphaHash,me=!!M.extensions,ve=!!D.attributes.uv1,je=!!D.attributes.uv2,et=!!D.attributes.uv3;let ot=Mi;return M.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ot=s.toneMapping),{isWebGL2:u,shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:Me,defines:M.defines,customVertexShaderID:we,customFragmentShaderID:Re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:Le,instancingColor:Le&&L.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Pe===null?s.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Ct,map:ke,matcap:dt,envMap:Be,envMapMode:Be&&W.mapping,envMapCubeUVHeight:X,aoMap:b,lightMap:O,bumpMap:q,normalMap:Z,displacementMap:h&&$,emissiveMap:de,normalMapObjectSpace:Z&&M.normalMapType===A_,normalMapTangentSpace:Z&&M.normalMapType===vf,metalnessMap:he,roughnessMap:te,anisotropy:ue,anisotropyMap:k,clearcoat:le,clearcoatMap:re,clearcoatNormalMap:oe,clearcoatRoughnessMap:ae,iridescence:Te,iridescenceMap:xe,iridescenceThicknessMap:fe,sheen:R,sheenColorMap:J,sheenRoughnessMap:F,specularMap:ce,specularColorMap:Ee,specularIntensityMap:pe,transmission:E,transmissionMap:ge,thicknessMap:Ne,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===Cs,alphaMap:z,alphaTest:be,alphaHash:Q,combine:M.combine,mapUv:ke&&_(M.map.channel),aoMapUv:b&&_(M.aoMap.channel),lightMapUv:O&&_(M.lightMap.channel),bumpMapUv:q&&_(M.bumpMap.channel),normalMapUv:Z&&_(M.normalMap.channel),displacementMapUv:$&&_(M.displacementMap.channel),emissiveMapUv:de&&_(M.emissiveMap.channel),metalnessMapUv:he&&_(M.metalnessMap.channel),roughnessMapUv:te&&_(M.roughnessMap.channel),anisotropyMapUv:k&&_(M.anisotropyMap.channel),clearcoatMapUv:re&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:J&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:F&&_(M.sheenRoughnessMap.channel),specularMapUv:ce&&_(M.specularMap.channel),specularColorMapUv:Ee&&_(M.specularColorMap.channel),specularIntensityMapUv:pe&&_(M.specularIntensityMap.channel),transmissionMapUv:ge&&_(M.transmissionMap.channel),thicknessMapUv:Ne&&_(M.thicknessMap.channel),alphaMapUv:z&&_(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Z||ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:ve,vertexUv2s:je,vertexUv3s:et,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(ke||z),fog:!!N,useFog:M.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:G,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ke&&M.map.isVideoTexture===!0&&M.map.colorSpace===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Cn,flipSided:M.side===$t,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:me&&M.extensions.derivatives===!0,extensionFragDepth:me&&M.extensions.fragDepth===!0,extensionDrawBuffers:me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)S.push(V),S.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(v(S,M),x(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const S=g[M.type];let V;if(S){const B=An[S];V=xv.clone(B.uniforms)}else V=M.uniforms;return V}function w(M,S){let V;for(let B=0,L=c.length;B<L;B++){const N=c[B];if(N.cacheKey===S){V=N,++V.usedTimes;break}}return V===void 0&&(V=new CM(s,S,M,r),c.push(V)),V}function C(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:I}}function DM(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function UM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function gh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _h(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,h,f,g,_,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,h,f,g,_,m){const p=o(d,h,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,h,f,g,_,m){const p=o(d,h,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||UM),n.length>1&&n.sort(h||gh),i.length>1&&i.sort(h||gh)}function u(){for(let d=e,h=s.length;d<h;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function FM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new _h,s.set(n,[o])):i>=r.length?(o=new _h,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function OM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new ze};break;case"SpotLight":t={position:new H,direction:new H,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function BM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let zM=0;function HM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function kM(s,e){const t=new OM,n=BM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new H);const r=new H,o=new qe,a=new qe;function l(u,d){let h=0,f=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let _=0,m=0,p=0,v=0,x=0,y=0,w=0,C=0,A=0,I=0;u.sort(HM);const M=d===!0?Math.PI:1;for(let V=0,B=u.length;V<B;V++){const L=u[V],N=L.color,D=L.intensity,U=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*D*M,f+=N.g*D*M,g+=N.b*D*M;else if(L.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],D);else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){const ee=L.shadow,se=n.get(L);se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,i.directionalShadow[_]=se,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=L.shadow.matrix,y++}i.directional[_]=X,_++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(N).multiplyScalar(D*M),X.distance=U,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[p]=X;const ee=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,ee.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[p]=ee.matrix,L.castShadow){const se=n.get(L);se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,i.spotShadow[p]=se,i.spotShadowMap[p]=W,C++}p++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(N).multiplyScalar(D),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=X,v++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*M),X.distance=L.distance,X.decay=L.decay,L.castShadow){const ee=L.shadow,se=n.get(L);se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,se.shadowCameraNear=ee.camera.near,se.shadowCameraFar=ee.camera.far,i.pointShadow[m]=se,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=L.shadow.matrix,w++}i.point[m]=X,m++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(D*M),X.groundColor.copy(L.groundColor).multiplyScalar(D*M),i.hemi[x]=X,x++}}v>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=g;const S=i.hash;(S.directionalLength!==_||S.pointLength!==m||S.spotLength!==p||S.rectAreaLength!==v||S.hemiLength!==x||S.numDirectionalShadows!==y||S.numPointShadows!==w||S.numSpotShadows!==C||S.numSpotMaps!==A)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=C+A-I,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=I,S.directionalLength=_,S.pointLength=m,S.spotLength=p,S.rectAreaLength=v,S.hemiLength=x,S.numDirectionalShadows=y,S.numPointShadows=w,S.numSpotShadows=C,S.numSpotMaps=A,i.version=zM++)}function c(u,d){let h=0,f=0,g=0,_=0,m=0;const p=d.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const y=u[v];if(y.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),h++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function vh(s,e){const t=new kM(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function VM(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new vh(s,e),t.set(r,[l])):o>=a.length?(l=new vh(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class GM extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WM extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jM(s,e,t){let n=new oc;const i=new Ue,r=new Ue,o=new rt,a=new GM({depthPacking:w_}),l=new WM,c={},u=t.maxTextureSize,d={[ni]:$t,[$t]:ni,[Cn]:Cn},h=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:XM,fragmentShader:qM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sf;let p=this.type;this.render=function(w,C,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const I=s.getRenderTarget(),M=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),V=s.state;V.setBlending(yi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=p!==Kn&&this.type===Kn,L=p===Kn&&this.type!==Kn;for(let N=0,D=w.length;N<D;N++){const U=w[N],W=U.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const X=W.getFrameExtents();if(i.multiply(X),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/X.x),i.x=r.x*X.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/X.y),i.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||B===!0||L===!0){const se=this.type!==Kn?{minFilter:At,magFilter:At}:{};W.map!==null&&W.map.dispose(),W.map=new $i(i.x,i.y,se),W.map.texture.name=U.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ee=W.getViewportCount();for(let se=0;se<ee;se++){const j=W.getViewport(se);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),V.viewport(o),W.updateMatrices(U,se),n=W.getFrustum(),y(C,A,W.camera,U,this.type)}W.isPointLightShadow!==!0&&this.type===Kn&&v(W,A),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(I,M,S)};function v(w,C){const A=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $i(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,A,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,A,f,_,null)}function x(w,C,A,I){let M=null;const S=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)M=S;else if(M=A.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=M.uuid,B=C.uuid;let L=c[V];L===void 0&&(L={},c[V]=L);let N=L[B];N===void 0&&(N=M.clone(),L[B]=N),M=N}if(M.visible=C.visible,M.wireframe=C.wireframe,I===Kn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=s.properties.get(M);V.light=A}return M}function y(w,C,A,I,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const B=e.update(w),L=w.material;if(Array.isArray(L)){const N=B.groups;for(let D=0,U=N.length;D<U;D++){const W=N[D],X=L[W.materialIndex];if(X&&X.visible){const ee=x(w,X,I,M);s.renderBufferDirect(A,null,B,ee,w,W)}}}else if(L.visible){const N=x(w,L,I,M);s.renderBufferDirect(A,null,B,N,w,null)}}const V=w.children;for(let B=0,L=V.length;B<L;B++)y(V[B],C,A,I,M)}}function YM(s,e,t){const n=t.isWebGL2;function i(){let z=!1;const be=new rt;let Q=null;const me=new rt(0,0,0,0);return{setMask:function(ve){Q!==ve&&!z&&(s.colorMask(ve,ve,ve,ve),Q=ve)},setLocked:function(ve){z=ve},setClear:function(ve,je,et,ot,Zt){Zt===!0&&(ve*=ot,je*=ot,et*=ot),be.set(ve,je,et,ot),me.equals(be)===!1&&(s.clearColor(ve,je,et,ot),me.copy(be))},reset:function(){z=!1,Q=null,me.set(-1,0,0,0)}}}function r(){let z=!1,be=null,Q=null,me=null;return{setTest:function(ve){ve?Pe(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(ve){be!==ve&&!z&&(s.depthMask(ve),be=ve)},setFunc:function(ve){if(Q!==ve){switch(ve){case e_:s.depthFunc(s.NEVER);break;case t_:s.depthFunc(s.ALWAYS);break;case n_:s.depthFunc(s.LESS);break;case yl:s.depthFunc(s.LEQUAL);break;case i_:s.depthFunc(s.EQUAL);break;case s_:s.depthFunc(s.GEQUAL);break;case r_:s.depthFunc(s.GREATER);break;case o_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=ve}},setLocked:function(ve){z=ve},setClear:function(ve){me!==ve&&(s.clearDepth(ve),me=ve)},reset:function(){z=!1,be=null,Q=null,me=null}}}function o(){let z=!1,be=null,Q=null,me=null,ve=null,je=null,et=null,ot=null,Zt=null;return{setTest:function(at){z||(at?Pe(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(at){be!==at&&!z&&(s.stencilMask(at),be=at)},setFunc:function(at,Mn,Bt){(Q!==at||me!==Mn||ve!==Bt)&&(s.stencilFunc(at,Mn,Bt),Q=at,me=Mn,ve=Bt)},setOp:function(at,Mn,Bt){(je!==at||et!==Mn||ot!==Bt)&&(s.stencilOp(at,Mn,Bt),je=at,et=Mn,ot=Bt)},setLocked:function(at){z=at},setClear:function(at){Zt!==at&&(s.clearStencil(at),Zt=at)},reset:function(){z=!1,be=null,Q=null,me=null,ve=null,je=null,et=null,ot=null,Zt=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,d=new WeakMap;let h={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,y=null,w=null,C=null,A=null,I=null,M=!1,S=null,V=null,B=null,L=null,N=null;const D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,W=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(X)[1]),U=W>=1):X.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),U=W>=2);let ee=null,se={};const j=s.getParameter(s.SCISSOR_BOX),G=s.getParameter(s.VIEWPORT),_e=new rt().fromArray(j),Me=new rt().fromArray(G);function we(z,be,Q,me){const ve=new Uint8Array(4),je=s.createTexture();s.bindTexture(z,je),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<Q;et++)n&&(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)?s.texImage3D(be,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(be+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return je}const Re={};Re[s.TEXTURE_2D]=we(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=we(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[s.TEXTURE_2D_ARRAY]=we(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=we(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(s.DEPTH_TEST),l.setFunc(yl),$(!1),de(tu),Pe(s.CULL_FACE),q(yi);function Pe(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function Le(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function ke(z,be){return f[z]!==be?(s.bindFramebuffer(z,be),f[z]=be,n&&(z===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=be),z===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=be)),!0):!1}function dt(z,be){let Q=_,me=!1;if(z)if(Q=g.get(be),Q===void 0&&(Q=[],g.set(be,Q)),z.isWebGLMultipleRenderTargets){const ve=z.texture;if(Q.length!==ve.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let je=0,et=ve.length;je<et;je++)Q[je]=s.COLOR_ATTACHMENT0+je;Q.length=ve.length,me=!0}}else Q[0]!==s.COLOR_ATTACHMENT0&&(Q[0]=s.COLOR_ATTACHMENT0,me=!0);else Q[0]!==s.BACK&&(Q[0]=s.BACK,me=!0);me&&(t.isWebGL2?s.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Be(z){return m!==z?(s.useProgram(z),m=z,!0):!1}const b={[bs]:s.FUNC_ADD,[Gg]:s.FUNC_SUBTRACT,[Wg]:s.FUNC_REVERSE_SUBTRACT};if(n)b[ru]=s.MIN,b[ou]=s.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(b[ru]=z.MIN_EXT,b[ou]=z.MAX_EXT)}const O={[Xg]:s.ZERO,[qg]:s.ONE,[jg]:s.SRC_COLOR,[rf]:s.SRC_ALPHA,[Qg]:s.SRC_ALPHA_SATURATE,[Zg]:s.DST_COLOR,[$g]:s.DST_ALPHA,[Yg]:s.ONE_MINUS_SRC_COLOR,[of]:s.ONE_MINUS_SRC_ALPHA,[Jg]:s.ONE_MINUS_DST_COLOR,[Kg]:s.ONE_MINUS_DST_ALPHA};function q(z,be,Q,me,ve,je,et,ot){if(z===yi){p===!0&&(Le(s.BLEND),p=!1);return}if(p===!1&&(Pe(s.BLEND),p=!0),z!==Vg){if(z!==v||ot!==M){if((x!==bs||C!==bs)&&(s.blendEquation(s.FUNC_ADD),x=bs,C=bs),ot)switch(z){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nu:s.blendFunc(s.ONE,s.ONE);break;case iu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case su:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case iu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case su:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,w=null,A=null,I=null,v=z,M=ot}return}ve=ve||be,je=je||Q,et=et||me,(be!==x||ve!==C)&&(s.blendEquationSeparate(b[be],b[ve]),x=be,C=ve),(Q!==y||me!==w||je!==A||et!==I)&&(s.blendFuncSeparate(O[Q],O[me],O[je],O[et]),y=Q,w=me,A=je,I=et),v=z,M=!1}function Z(z,be){z.side===Cn?Le(s.CULL_FACE):Pe(s.CULL_FACE);let Q=z.side===$t;be&&(Q=!Q),$(Q),z.blending===Cs&&z.transparent===!1?q(yi):q(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const me=z.stencilWrite;c.setTest(me),me&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),te(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Pe(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function $(z){S!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),S=z)}function de(z){z!==zg?(Pe(s.CULL_FACE),z!==V&&(z===tu?s.cullFace(s.BACK):z===Hg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),V=z}function he(z){z!==B&&(U&&s.lineWidth(z),B=z)}function te(z,be,Q){z?(Pe(s.POLYGON_OFFSET_FILL),(L!==be||N!==Q)&&(s.polygonOffset(be,Q),L=be,N=Q)):Le(s.POLYGON_OFFSET_FILL)}function ue(z){z?Pe(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function le(z){z===void 0&&(z=s.TEXTURE0+D-1),ee!==z&&(s.activeTexture(z),ee=z)}function Te(z,be,Q){Q===void 0&&(ee===null?Q=s.TEXTURE0+D-1:Q=ee);let me=se[Q];me===void 0&&(me={type:void 0,texture:void 0},se[Q]=me),(me.type!==z||me.texture!==be)&&(ee!==Q&&(s.activeTexture(Q),ee=Q),s.bindTexture(z,be||Re[z]),me.type=z,me.texture=be)}function R(){const z=se[ee];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function F(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(z){_e.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),_e.copy(z))}function pe(z){Me.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Me.copy(z))}function ge(z,be){let Q=d.get(be);Q===void 0&&(Q=new WeakMap,d.set(be,Q));let me=Q.get(z);me===void 0&&(me=s.getUniformBlockIndex(be,z.name),Q.set(z,me))}function Ne(z,be){const me=d.get(be).get(z);u.get(be)!==me&&(s.uniformBlockBinding(be,me,z.__bindingPointIndex),u.set(be,me))}function Ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ee=null,se={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,y=null,w=null,C=null,A=null,I=null,M=!1,S=null,V=null,B=null,L=null,N=null,_e.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:Le,bindFramebuffer:ke,drawBuffers:dt,useProgram:Be,setBlending:q,setMaterial:Z,setFlipSided:$,setCullFace:de,setLineWidth:he,setPolygonOffset:te,setScissorTest:ue,activeTexture:le,bindTexture:Te,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:F,texImage3D:ce,updateUBOMapping:ge,uniformBlockBinding:Ne,texStorage2D:fe,texStorage3D:J,texSubImage2D:re,texSubImage3D:oe,compressedTexSubImage2D:ae,compressedTexSubImage3D:xe,scissor:Ee,viewport:pe,reset:Ke}}function $M(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,E){return p?new OffscreenCanvas(R,E):Ir("canvas")}function x(R,E,k,re){let oe=1;if((R.width>re||R.height>re)&&(oe=re/Math.max(R.width,R.height)),oe<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ae=E?Ho:Math.floor,xe=ae(oe*R.width),fe=ae(oe*R.height);_===void 0&&(_=v(xe,fe));const J=k?v(xe,fe):_;return J.width=xe,J.height=fe,J.getContext("2d").drawImage(R,0,0,xe,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+xe+"x"+fe+")."),J}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return Al(R.width)&&Al(R.height)}function w(R){return a?!1:R.wrapS!==an||R.wrapT!==an||R.minFilter!==At&&R.minFilter!==Yt}function C(R,E){return R.generateMipmaps&&E&&R.minFilter!==At&&R.minFilter!==Yt}function A(R){s.generateMipmap(R)}function I(R,E,k,re,oe=!1){if(a===!1)return E;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=E;return E===s.RED&&(k===s.FLOAT&&(ae=s.R32F),k===s.HALF_FLOAT&&(ae=s.R16F),k===s.UNSIGNED_BYTE&&(ae=s.R8)),E===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(ae=s.R8UI),k===s.UNSIGNED_SHORT&&(ae=s.R16UI),k===s.UNSIGNED_INT&&(ae=s.R32UI),k===s.BYTE&&(ae=s.R8I),k===s.SHORT&&(ae=s.R16I),k===s.INT&&(ae=s.R32I)),E===s.RG&&(k===s.FLOAT&&(ae=s.RG32F),k===s.HALF_FLOAT&&(ae=s.RG16F),k===s.UNSIGNED_BYTE&&(ae=s.RG8)),E===s.RGBA&&(k===s.FLOAT&&(ae=s.RGBA32F),k===s.HALF_FLOAT&&(ae=s.RGBA16F),k===s.UNSIGNED_BYTE&&(ae=re===nt&&oe===!1?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)),(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function M(R,E,k){return C(R,k)===!0||R.isFramebufferTexture&&R.minFilter!==At&&R.minFilter!==Yt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function S(R){return R===At||R===bl||R===Po?s.NEAREST:s.LINEAR}function V(R){const E=R.target;E.removeEventListener("dispose",V),L(E),E.isVideoTexture&&g.delete(E)}function B(R){const E=R.target;E.removeEventListener("dispose",B),D(E)}function L(R){const E=n.get(R);if(E.__webglInit===void 0)return;const k=R.source,re=m.get(k);if(re){const oe=re[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&N(R),Object.keys(re).length===0&&m.delete(k)}n.remove(R)}function N(R){const E=n.get(R);s.deleteTexture(E.__webglTexture);const k=R.source,re=m.get(k);delete re[E.__cacheKey],o.memory.textures--}function D(R){const E=R.texture,k=n.get(R),re=n.get(E);if(re.__webglTexture!==void 0&&(s.deleteTexture(re.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(k.__webglFramebuffer[oe]))for(let ae=0;ae<k.__webglFramebuffer[oe].length;ae++)s.deleteFramebuffer(k.__webglFramebuffer[oe][ae]);else s.deleteFramebuffer(k.__webglFramebuffer[oe]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[oe])}else{if(Array.isArray(k.__webglFramebuffer))for(let oe=0;oe<k.__webglFramebuffer.length;oe++)s.deleteFramebuffer(k.__webglFramebuffer[oe]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let oe=0;oe<k.__webglColorRenderbuffer.length;oe++)k.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[oe]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let oe=0,ae=E.length;oe<ae;oe++){const xe=n.get(E[oe]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(E[oe])}n.remove(E),n.remove(R)}let U=0;function W(){U=0}function X(){const R=U;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),U+=1,R}function ee(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function se(R,E){const k=n.get(R);if(R.isVideoTexture&&le(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(k,R,E);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+E)}function j(R,E){const k=n.get(R);if(R.version>0&&k.__version!==R.version){ke(k,R,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+E)}function G(R,E){const k=n.get(R);if(R.version>0&&k.__version!==R.version){ke(k,R,E);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+E)}function _e(R,E){const k=n.get(R);if(R.version>0&&k.__version!==R.version){dt(k,R,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+E)}const Me={[Os]:s.REPEAT,[an]:s.CLAMP_TO_EDGE,[Bo]:s.MIRRORED_REPEAT},we={[At]:s.NEAREST,[bl]:s.NEAREST_MIPMAP_NEAREST,[Po]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[cf]:s.LINEAR_MIPMAP_NEAREST,[Yi]:s.LINEAR_MIPMAP_LINEAR},Re={[C_]:s.NEVER,[F_]:s.ALWAYS,[L_]:s.LESS,[I_]:s.LEQUAL,[P_]:s.EQUAL,[U_]:s.GEQUAL,[N_]:s.GREATER,[D_]:s.NOTEQUAL};function Pe(R,E,k){if(k?(s.texParameteri(R,s.TEXTURE_WRAP_S,Me[E.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Me[E.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Me[E.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,we[E.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,we[E.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==an||E.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,S(E.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,S(E.minFilter)),E.minFilter!==At&&E.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===At||E.minFilter!==Po&&E.minFilter!==Yi||E.type===Qn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Lr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(R,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Le(R,E){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",V));const re=E.source;let oe=m.get(re);oe===void 0&&(oe={},m.set(re,oe));const ae=ee(E);if(ae!==R.__cacheKey){oe[ae]===void 0&&(oe[ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),oe[ae].usedTimes++;const xe=oe[R.__cacheKey];xe!==void 0&&(oe[R.__cacheKey].usedTimes--,xe.usedTimes===0&&N(E)),R.__cacheKey=ae,R.__webglTexture=oe[ae].texture}return k}function ke(R,E,k){let re=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=s.TEXTURE_3D);const oe=Le(R,E),ae=E.source;t.bindTexture(re,R.__webglTexture,s.TEXTURE0+k);const xe=n.get(ae);if(ae.version!==xe.__version||oe===!0){t.activeTexture(s.TEXTURE0+k),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const fe=w(E)&&y(E.image)===!1;let J=x(E.image,fe,!1,u);J=Te(E,J);const F=y(J)||a,ce=r.convert(E.format,E.colorSpace);let Ee=r.convert(E.type),pe=I(E.internalFormat,ce,Ee,E.colorSpace,E.isVideoTexture);Pe(re,E,F);let ge;const Ne=E.mipmaps,Ke=a&&E.isVideoTexture!==!0,z=xe.__version===void 0||oe===!0,be=M(E,J,F);if(E.isDepthTexture)pe=s.DEPTH_COMPONENT,a?E.type===Qn?pe=s.DEPTH_COMPONENT32F:E.type===gi?pe=s.DEPTH_COMPONENT24:E.type===Wi?pe=s.DEPTH24_STENCIL8:pe=s.DEPTH_COMPONENT16:E.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Xi&&pe===s.DEPTH_COMPONENT&&E.type!==sc&&E.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=gi,Ee=r.convert(E.type)),E.format===Bs&&pe===s.DEPTH_COMPONENT&&(pe=s.DEPTH_STENCIL,E.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Wi,Ee=r.convert(E.type))),z&&(Ke?t.texStorage2D(s.TEXTURE_2D,1,pe,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,pe,J.width,J.height,0,ce,Ee,null));else if(E.isDataTexture)if(Ne.length>0&&F){Ke&&z&&t.texStorage2D(s.TEXTURE_2D,be,pe,Ne[0].width,Ne[0].height);for(let Q=0,me=Ne.length;Q<me;Q++)ge=Ne[Q],Ke?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,ge.width,ge.height,ce,Ee,ge.data):t.texImage2D(s.TEXTURE_2D,Q,pe,ge.width,ge.height,0,ce,Ee,ge.data);E.generateMipmaps=!1}else Ke?(z&&t.texStorage2D(s.TEXTURE_2D,be,pe,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,ce,Ee,J.data)):t.texImage2D(s.TEXTURE_2D,0,pe,J.width,J.height,0,ce,Ee,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&z&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,pe,Ne[0].width,Ne[0].height,J.depth);for(let Q=0,me=Ne.length;Q<me;Q++)ge=Ne[Q],E.format!==ln?ce!==null?Ke?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,J.depth,ce,ge.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,pe,ge.width,ge.height,J.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,J.depth,ce,Ee,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,pe,ge.width,ge.height,J.depth,0,ce,Ee,ge.data)}else{Ke&&z&&t.texStorage2D(s.TEXTURE_2D,be,pe,Ne[0].width,Ne[0].height);for(let Q=0,me=Ne.length;Q<me;Q++)ge=Ne[Q],E.format!==ln?ce!==null?Ke?t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,ge.width,ge.height,ce,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,ge.width,ge.height,ce,Ee,ge.data):t.texImage2D(s.TEXTURE_2D,Q,pe,ge.width,ge.height,0,ce,Ee,ge.data)}else if(E.isDataArrayTexture)Ke?(z&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,pe,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ce,Ee,J.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,pe,J.width,J.height,J.depth,0,ce,Ee,J.data);else if(E.isData3DTexture)Ke?(z&&t.texStorage3D(s.TEXTURE_3D,be,pe,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ce,Ee,J.data)):t.texImage3D(s.TEXTURE_3D,0,pe,J.width,J.height,J.depth,0,ce,Ee,J.data);else if(E.isFramebufferTexture){if(z)if(Ke)t.texStorage2D(s.TEXTURE_2D,be,pe,J.width,J.height);else{let Q=J.width,me=J.height;for(let ve=0;ve<be;ve++)t.texImage2D(s.TEXTURE_2D,ve,pe,Q,me,0,ce,Ee,null),Q>>=1,me>>=1}}else if(Ne.length>0&&F){Ke&&z&&t.texStorage2D(s.TEXTURE_2D,be,pe,Ne[0].width,Ne[0].height);for(let Q=0,me=Ne.length;Q<me;Q++)ge=Ne[Q],Ke?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,ce,Ee,ge):t.texImage2D(s.TEXTURE_2D,Q,pe,ce,Ee,ge);E.generateMipmaps=!1}else Ke?(z&&t.texStorage2D(s.TEXTURE_2D,be,pe,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,Ee,J)):t.texImage2D(s.TEXTURE_2D,0,pe,ce,Ee,J);C(E,F)&&A(re),xe.__version=ae.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function dt(R,E,k){if(E.image.length!==6)return;const re=Le(R,E),oe=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);const ae=n.get(oe);if(oe.version!==ae.__version||re===!0){t.activeTexture(s.TEXTURE0+k),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const xe=E.isCompressedTexture||E.image[0].isCompressedTexture,fe=E.image[0]&&E.image[0].isDataTexture,J=[];for(let Q=0;Q<6;Q++)!xe&&!fe?J[Q]=x(E.image[Q],!1,!0,c):J[Q]=fe?E.image[Q].image:E.image[Q],J[Q]=Te(E,J[Q]);const F=J[0],ce=y(F)||a,Ee=r.convert(E.format,E.colorSpace),pe=r.convert(E.type),ge=I(E.internalFormat,Ee,pe,E.colorSpace),Ne=a&&E.isVideoTexture!==!0,Ke=ae.__version===void 0||re===!0;let z=M(E,F,ce);Pe(s.TEXTURE_CUBE_MAP,E,ce);let be;if(xe){Ne&&Ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,z,ge,F.width,F.height);for(let Q=0;Q<6;Q++){be=J[Q].mipmaps;for(let me=0;me<be.length;me++){const ve=be[me];E.format!==ln?Ee!==null?Ne?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,ve.width,ve.height,Ee,ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,ve.width,ve.height,Ee,pe,ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,ge,ve.width,ve.height,0,Ee,pe,ve.data)}}}else{be=E.mipmaps,Ne&&Ke&&(be.length>0&&z++,t.texStorage2D(s.TEXTURE_CUBE_MAP,z,ge,J[0].width,J[0].height));for(let Q=0;Q<6;Q++)if(fe){Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,J[Q].width,J[Q].height,Ee,pe,J[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ge,J[Q].width,J[Q].height,0,Ee,pe,J[Q].data);for(let me=0;me<be.length;me++){const je=be[me].image[Q].image;Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,je.width,je.height,Ee,pe,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,ge,je.width,je.height,0,Ee,pe,je.data)}}else{Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ee,pe,J[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ge,Ee,pe,J[Q]);for(let me=0;me<be.length;me++){const ve=be[me];Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Ee,pe,ve.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,ge,Ee,pe,ve.image[Q])}}}C(E,ce)&&A(s.TEXTURE_CUBE_MAP),ae.__version=oe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Be(R,E,k,re,oe,ae){const xe=r.convert(k.format,k.colorSpace),fe=r.convert(k.type),J=I(k.internalFormat,xe,fe,k.colorSpace);if(!n.get(E).__hasExternalTextures){const ce=Math.max(1,E.width>>ae),Ee=Math.max(1,E.height>>ae);oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,ae,J,ce,Ee,E.depth,0,xe,fe,null):t.texImage2D(oe,ae,J,ce,Ee,0,xe,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ue(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,oe,n.get(k).__webglTexture,0,te(E)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,oe,n.get(k).__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function b(R,E,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let re=s.DEPTH_COMPONENT16;if(k||ue(E)){const oe=E.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Qn?re=s.DEPTH_COMPONENT32F:oe.type===gi&&(re=s.DEPTH_COMPONENT24));const ae=te(E);ue(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,re,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,re,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,re,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const re=te(E);k&&ue(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,E.width,E.height):ue(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const re=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0;oe<re.length;oe++){const ae=re[oe],xe=r.convert(ae.format,ae.colorSpace),fe=r.convert(ae.type),J=I(ae.internalFormat,xe,fe,ae.colorSpace),F=te(E);k&&ue(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,F,J,E.width,E.height):ue(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,F,J,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,J,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function O(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se(E.depthTexture,0);const re=n.get(E.depthTexture).__webglTexture,oe=te(E);if(E.depthTexture.format===Xi)ue(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(E.depthTexture.format===Bs)ue(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function q(R){const E=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");O(E.__webglFramebuffer,R)}else if(k){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]=s.createRenderbuffer(),b(E.__webglDepthbuffer[re],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),b(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Z(R,E,k){const re=n.get(R);E!==void 0&&Be(re.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&q(R)}function $(R){const E=R.texture,k=n.get(R),re=n.get(E);R.addEventListener("dispose",B),R.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=E.version,o.memory.textures++);const oe=R.isWebGLCubeRenderTarget===!0,ae=R.isWebGLMultipleRenderTargets===!0,xe=y(R)||a;if(oe){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let J=0;J<E.mipmaps.length;J++)k.__webglFramebuffer[fe][J]=s.createFramebuffer()}else k.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)k.__webglFramebuffer[fe]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ae)if(i.drawBuffers){const fe=R.texture;for(let J=0,F=fe.length;J<F;J++){const ce=n.get(fe[J]);ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ue(R)===!1){const fe=ae?E:[E];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<fe.length;J++){const F=fe[J];k.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[J]);const ce=r.convert(F.format,F.colorSpace),Ee=r.convert(F.type),pe=I(F.internalFormat,ce,Ee,F.colorSpace,R.isXRRenderTarget===!0),ge=te(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,pe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,k.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),b(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,E,xe);for(let fe=0;fe<6;fe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)Be(k.__webglFramebuffer[fe][J],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,J);else Be(k.__webglFramebuffer[fe],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);C(E,xe)&&A(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const fe=R.texture;for(let J=0,F=fe.length;J<F;J++){const ce=fe[J],Ee=n.get(ce);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),Pe(s.TEXTURE_2D,ce,xe),Be(k.__webglFramebuffer,R,ce,s.COLOR_ATTACHMENT0+J,s.TEXTURE_2D,0),C(ce,xe)&&A(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?fe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,re.__webglTexture),Pe(fe,E,xe),a&&E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)Be(k.__webglFramebuffer[J],R,E,s.COLOR_ATTACHMENT0,fe,J);else Be(k.__webglFramebuffer,R,E,s.COLOR_ATTACHMENT0,fe,0);C(E,xe)&&A(fe),t.unbindTexture()}R.depthBuffer&&q(R)}function de(R){const E=y(R)||a,k=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let re=0,oe=k.length;re<oe;re++){const ae=k[re];if(C(ae,E)){const xe=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,fe=n.get(ae).__webglTexture;t.bindTexture(xe,fe),A(xe),t.unbindTexture()}}}function he(R){if(a&&R.samples>0&&ue(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],k=R.width,re=R.height;let oe=s.COLOR_BUFFER_BIT;const ae=[],xe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(R),J=R.isWebGLMultipleRenderTargets===!0;if(J)for(let F=0;F<E.length;F++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+F,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+F,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let F=0;F<E.length;F++){ae.push(s.COLOR_ATTACHMENT0+F),R.depthBuffer&&ae.push(xe);const ce=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ce===!1&&(R.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),J&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[F]),ce===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[xe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[xe])),J){const Ee=n.get(E[F]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,k,re,0,0,k,re,oe,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let F=0;F<E.length;F++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+F,s.RENDERBUFFER,fe.__webglColorRenderbuffer[F]);const ce=n.get(E[F]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+F,s.TEXTURE_2D,ce,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function te(R){return Math.min(d,R.samples)}function ue(R){const E=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function le(R){const E=o.render.frame;g.get(R)!==E&&(g.set(R,E),R.update())}function Te(R,E){const k=R.colorSpace,re=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===wl||k!==Ct&&k!==ji&&(k===nt||k===Qo?a===!1?e.has("EXT_sRGB")===!0&&re===ln?(R.format=wl,R.minFilter=Yt,R.generateMipmaps=!1):E=Ef.sRGBToLinear(E):(re!==ln||oe!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.setTexture2D=se,this.setTexture2DArray=j,this.setTexture3D=G,this.setTextureCube=_e,this.rebindTextures=Z,this.setupRenderTarget=$,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=ue}const KM=0,Et=1;function ZM(s,e,t){const n=t.isWebGL2;function i(r,o=ji){let a;const l=o===nt||o===Qo?Et:KM;if(r===Ei)return s.UNSIGNED_BYTE;if(r===hf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===df)return s.UNSIGNED_SHORT_5_5_5_1;if(r===p_)return s.BYTE;if(r===m_)return s.SHORT;if(r===sc)return s.UNSIGNED_SHORT;if(r===uf)return s.INT;if(r===gi)return s.UNSIGNED_INT;if(r===Qn)return s.FLOAT;if(r===Lr)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===g_)return s.ALPHA;if(r===ln)return s.RGBA;if(r===__)return s.LUMINANCE;if(r===v_)return s.LUMINANCE_ALPHA;if(r===Xi)return s.DEPTH_COMPONENT;if(r===Bs)return s.DEPTH_STENCIL;if(r===wl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===x_)return s.RED;if(r===ff)return s.RED_INTEGER;if(r===y_)return s.RG;if(r===pf)return s.RG_INTEGER;if(r===mf)return s.RGBA_INTEGER;if(r===_a||r===va||r===xa||r===ya)if(l===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===_a)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===_a)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===va)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ya)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===au||r===lu||r===cu||r===uu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===au)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===M_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===hu||r===du)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===hu)return l===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===du)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fu||r===pu||r===mu||r===gu||r===_u||r===vu||r===xu||r===yu||r===Mu||r===Eu||r===bu||r===Su||r===Tu||r===wu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===fu)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pu)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mu)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gu)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_u)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vu)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xu)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yu)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mu)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Eu)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bu)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Su)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tu)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wu)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ma||r===Au||r===Ru)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ma)return l===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Au)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ru)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===E_||r===Cu||r===Lu||r===Pu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ma)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Cu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wi?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class JM extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hi extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class eE extends Pt{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:Xi,u!==Xi&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xi&&(n=gi),n===void 0&&u===Bs&&(n=Wi),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tE extends Qi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const v=[],x=[],y=new Gt;y.layers.enable(1),y.viewport=new rt;const w=new Gt;w.layers.enable(2),w.viewport=new rt;const C=[y,w],A=new JM;A.layers.enable(1),A.layers.enable(2);let I=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let G=v[j];return G===void 0&&(G=new Wa,v[j]=G),G.getTargetRaySpace()},this.getControllerGrip=function(j){let G=v[j];return G===void 0&&(G=new Wa,v[j]=G),G.getGripSpace()},this.getHand=function(j){let G=v[j];return G===void 0&&(G=new Wa,v[j]=G),G.getHandSpace()};function S(j){const G=x.indexOf(j.inputSource);if(G===-1)return;const _e=v[G];_e!==void 0&&(_e.update(j.inputSource,j.frame,c||o),_e.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){i.removeEventListener("select",S),i.removeEventListener("selectstart",S),i.removeEventListener("selectend",S),i.removeEventListener("squeeze",S),i.removeEventListener("squeezestart",S),i.removeEventListener("squeezeend",S),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",B);for(let j=0;j<v.length;j++){const G=x[j];G!==null&&(x[j]=null,v[j].disconnect(G))}I=null,M=null,e.setRenderTarget(m),f=null,h=null,d=null,i=null,p=null,se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",S),i.addEventListener("selectstart",S),i.addEventListener("selectend",S),i.addEventListener("squeeze",S),i.addEventListener("squeezestart",S),i.addEventListener("squeezeend",S),i.addEventListener("end",V),i.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,G),i.updateRenderState({baseLayer:f}),p=new $i(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let G=null,_e=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=_.stencil?Bs:Xi,_e=_.stencil?Wi:gi);const we={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(we),i.updateRenderState({layers:[h]}),p=new $i(h.textureWidth,h.textureHeight,{format:ln,type:Ei,depthTexture:new eE(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Re=e.properties.get(p);Re.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(j){for(let G=0;G<j.removed.length;G++){const _e=j.removed[G],Me=x.indexOf(_e);Me>=0&&(x[Me]=null,v[Me].disconnect(_e))}for(let G=0;G<j.added.length;G++){const _e=j.added[G];let Me=x.indexOf(_e);if(Me===-1){for(let Re=0;Re<v.length;Re++)if(Re>=x.length){x.push(_e),Me=Re;break}else if(x[Re]===null){x[Re]=_e,Me=Re;break}if(Me===-1)break}const we=v[Me];we&&we.connect(_e)}}const L=new H,N=new H;function D(j,G,_e){L.setFromMatrixPosition(G.matrixWorld),N.setFromMatrixPosition(_e.matrixWorld);const Me=L.distanceTo(N),we=G.projectionMatrix.elements,Re=_e.projectionMatrix.elements,Pe=we[14]/(we[10]-1),Le=we[14]/(we[10]+1),ke=(we[9]+1)/we[5],dt=(we[9]-1)/we[5],Be=(we[8]-1)/we[0],b=(Re[8]+1)/Re[0],O=Pe*Be,q=Pe*b,Z=Me/(-Be+b),$=Z*-Be;G.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX($),j.translateZ(Z),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const de=Pe+Z,he=Le+Z,te=O-$,ue=q+(Me-$),le=ke*Le/he*de,Te=dt*Le/he*de;j.projectionMatrix.makePerspective(te,ue,le,Te,de,he),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function U(j,G){G===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(G.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;A.near=w.near=y.near=j.near,A.far=w.far=y.far=j.far,(I!==A.near||M!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,M=A.far);const G=j.parent,_e=A.cameras;U(A,G);for(let Me=0;Me<_e.length;Me++)U(_e[Me],G);_e.length===2?D(A,y,w):A.projectionMatrix.copy(y.projectionMatrix),W(j,A,G)};function W(j,G,_e){_e===null?j.matrix.copy(G.matrixWorld):(j.matrix.copy(_e.matrixWorld),j.matrix.invert(),j.matrix.multiply(G.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(G.projectionMatrix),j.projectionMatrixInverse.copy(G.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Hs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let X=null;function ee(j,G){if(u=G.getViewerPose(c||o),g=G,u!==null){const _e=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Me=!1;_e.length!==A.cameras.length&&(A.cameras.length=0,Me=!0);for(let we=0;we<_e.length;we++){const Re=_e[we];let Pe=null;if(f!==null)Pe=f.getViewport(Re);else{const ke=d.getViewSubImage(h,Re);Pe=ke.viewport,we===0&&(e.setRenderTargetTextures(p,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(p))}let Le=C[we];Le===void 0&&(Le=new Gt,Le.layers.enable(we),Le.viewport=new rt,C[we]=Le),Le.matrix.fromArray(Re.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Re.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),we===0&&(A.matrix.copy(Le.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Me===!0&&A.cameras.push(Le)}}for(let _e=0;_e<v.length;_e++){const Me=x[_e],we=v[_e];Me!==null&&we!==void 0&&we.update(Me,G,c||o)}X&&X(j,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}const se=new If;se.setAnimationLoop(ee),this.setAnimationLoop=function(j){X=j},this.dispose=function(){}}}function nE(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Cf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function iE(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(v,w);const C=e.render.frame;r[v.id]!==C&&(h(v),r[v.id]=C)}function u(v){const x=d();v.__bindingPointIndex=x;const y=s.createBuffer(),w=v.__size,C=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=i[v.id],y=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let C=0,A=y.length;C<A;C++){const I=y[C];if(f(I,C,w)===!0){const M=I.__offset,S=Array.isArray(I.value)?I.value:[I.value];let V=0;for(let B=0;B<S.length;B++){const L=S[B],N=_(L);typeof L=="number"?(I.__data[0]=L,s.bufferSubData(s.UNIFORM_BUFFER,M+V,I.__data)):L.isMatrix3?(I.__data[0]=L.elements[0],I.__data[1]=L.elements[1],I.__data[2]=L.elements[2],I.__data[3]=L.elements[0],I.__data[4]=L.elements[3],I.__data[5]=L.elements[4],I.__data[6]=L.elements[5],I.__data[7]=L.elements[0],I.__data[8]=L.elements[6],I.__data[9]=L.elements[7],I.__data[10]=L.elements[8],I.__data[11]=L.elements[0]):(L.toArray(I.__data,V),V+=N.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,I.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,y){const w=v.value;if(y[x]===void 0){if(typeof w=="number")y[x]=w;else{const C=Array.isArray(w)?w:[w],A=[];for(let I=0;I<C.length;I++)A.push(C[I].clone());y[x]=A}return!0}else if(typeof w=="number"){if(y[x]!==w)return y[x]=w,!0}else{const C=Array.isArray(y[x])?y[x]:[y[x]],A=Array.isArray(w)?w:[w];for(let I=0;I<C.length;I++){const M=C[I];if(M.equals(A[I])===!1)return M.copy(A[I]),!0}}return!1}function g(v){const x=v.uniforms;let y=0;const w=16;let C=0;for(let A=0,I=x.length;A<I;A++){const M=x[A],S={boundary:0,storage:0},V=Array.isArray(M.value)?M.value:[M.value];for(let B=0,L=V.length;B<L;B++){const N=V[B],D=_(N);S.boundary+=D.boundary,S.storage+=D.storage}if(M.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,A>0){C=y%w;const B=w-C;C!==0&&B-S.boundary<0&&(y+=w-C,M.__offset=y)}y+=S.storage}return C=y%w,C>0&&(y+=w-C),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Of{constructor(e={}){const{canvas:t=K_(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=nt,this._useLegacyLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1;const x=this;let y=!1,w=0,C=0,A=null,I=-1,M=null;const S=new rt,V=new rt;let B=null;const L=new ze(0);let N=0,D=t.width,U=t.height,W=1,X=null,ee=null;const se=new rt(0,0,D,U),j=new rt(0,0,D,U);let G=!1;const _e=new oc;let Me=!1,we=!1,Re=null;const Pe=new qe,Le=new Ue,ke=new H,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return A===null?W:1}let b=n;function O(P,Y){for(let ne=0;ne<P.length;ne++){const K=P[ne],ie=t.getContext(K,Y);if(ie!==null)return ie}return null}try{const P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ic}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",me,!1),b===null){const Y=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&Y.shift(),b=O(Y,P),b===null)throw O(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&b instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),b.getShaderPrecisionFormat===void 0&&(b.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let q,Z,$,de,he,te,ue,le,Te,R,E,k,re,oe,ae,xe,fe,J,F,ce,Ee,pe,ge,Ne;function Ke(){q=new fy(b),Z=new ay(b,q,e),q.init(Z),pe=new ZM(b,q,Z),$=new YM(b,q,Z),de=new gy(b),he=new DM,te=new $M(b,q,$,he,Z,pe,de),ue=new cy(x),le=new dy(x),Te=new wv(b,Z),ge=new ry(b,q,Te,Z),R=new py(b,Te,de,ge),E=new yy(b,R,Te,de),F=new xy(b,Z,te),xe=new ly(he),k=new NM(x,ue,le,q,Z,ge,xe),re=new nE(x,he),oe=new FM,ae=new VM(q,Z),J=new sy(x,ue,le,$,E,h,l),fe=new jM(x,E,Z),Ne=new iE(b,de,Z,$),ce=new oy(b,q,de,Z),Ee=new my(b,q,de,Z),de.programs=k.programs,x.capabilities=Z,x.extensions=q,x.properties=he,x.renderLists=oe,x.shadowMap=fe,x.state=$,x.info=de}Ke();const z=new tE(x,b);this.xr=z,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const P=q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(D,U,!1))},this.getSize=function(P){return P.set(D,U)},this.setSize=function(P,Y,ne=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=P,U=Y,t.width=Math.floor(P*W),t.height=Math.floor(Y*W),ne===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(D*W,U*W).floor()},this.setDrawingBufferSize=function(P,Y,ne){D=P,U=Y,W=ne,t.width=Math.floor(P*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(se)},this.setViewport=function(P,Y,ne,K){P.isVector4?se.set(P.x,P.y,P.z,P.w):se.set(P,Y,ne,K),$.viewport(S.copy(se).multiplyScalar(W).floor())},this.getScissor=function(P){return P.copy(j)},this.setScissor=function(P,Y,ne,K){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,Y,ne,K),$.scissor(V.copy(j).multiplyScalar(W).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(P){$.setScissorTest(G=P)},this.setOpaqueSort=function(P){X=P},this.setTransparentSort=function(P){ee=P},this.getClearColor=function(P){return P.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(P=!0,Y=!0,ne=!0){let K=0;if(P){let ie=!1;if(A!==null){const Ce=A.texture.format;ie=Ce===mf||Ce===pf||Ce===ff}if(ie){const Ce=A.texture.type,Ie=Ce===Ei||Ce===gi||Ce===sc||Ce===Wi||Ce===hf||Ce===df,Fe=J.getClearColor(),Oe=J.getClearAlpha(),Ye=Fe.r,De=Fe.g,Ve=Fe.b;Ie?(f[0]=Ye,f[1]=De,f[2]=Ve,f[3]=Oe,b.clearBufferuiv(b.COLOR,0,f)):(g[0]=Ye,g[1]=De,g[2]=Ve,g[3]=Oe,b.clearBufferiv(b.COLOR,0,g))}else K|=b.COLOR_BUFFER_BIT}Y&&(K|=b.DEPTH_BUFFER_BIT),ne&&(K|=b.STENCIL_BUFFER_BIT),b.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",me,!1),oe.dispose(),ae.dispose(),he.dispose(),ue.dispose(),le.dispose(),E.dispose(),ge.dispose(),Ne.dispose(),k.dispose(),z.dispose(),z.removeEventListener("sessionstart",at),z.removeEventListener("sessionend",Mn),Re&&(Re.dispose(),Re=null),Bt.stop()};function be(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const P=de.autoReset,Y=fe.enabled,ne=fe.autoUpdate,K=fe.needsUpdate,ie=fe.type;Ke(),de.autoReset=P,fe.enabled=Y,fe.autoUpdate=ne,fe.needsUpdate=K,fe.type=ie}function me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ve(P){const Y=P.target;Y.removeEventListener("dispose",ve),je(Y)}function je(P){et(P),he.remove(P)}function et(P){const Y=he.get(P).programs;Y!==void 0&&(Y.forEach(function(ne){k.releaseProgram(ne)}),P.isShaderMaterial&&k.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,ne,K,ie,Ce){Y===null&&(Y=dt);const Ie=ie.isMesh&&ie.matrixWorld.determinant()<0,Fe=ip(P,Y,ne,K,ie);$.setMaterial(K,Ie);let Oe=ne.index,Ye=1;if(K.wireframe===!0){if(Oe=R.getWireframeAttribute(ne),Oe===void 0)return;Ye=2}const De=ne.drawRange,Ve=ne.attributes.position;let ht=De.start*Ye,ft=(De.start+De.count)*Ye;Ce!==null&&(ht=Math.max(ht,Ce.start*Ye),ft=Math.min(ft,(Ce.start+Ce.count)*Ye)),Oe!==null?(ht=Math.max(ht,0),ft=Math.min(ft,Oe.count)):Ve!=null&&(ht=Math.max(ht,0),ft=Math.min(ft,Ve.count));const sn=ft-ht;if(sn<0||sn===1/0)return;ge.setup(ie,K,Fe,ne,Oe);let On,gt=ce;if(Oe!==null&&(On=Te.get(Oe),gt=Ee,gt.setIndex(On)),ie.isMesh)K.wireframe===!0?($.setLineWidth(K.wireframeLinewidth*Be()),gt.setMode(b.LINES)):gt.setMode(b.TRIANGLES);else if(ie.isLine){let $e=K.linewidth;$e===void 0&&($e=1),$.setLineWidth($e*Be()),ie.isLineSegments?gt.setMode(b.LINES):ie.isLineLoop?gt.setMode(b.LINE_LOOP):gt.setMode(b.LINE_STRIP)}else ie.isPoints?gt.setMode(b.POINTS):ie.isSprite&&gt.setMode(b.TRIANGLES);if(ie.isInstancedMesh)gt.renderInstances(ht,sn,ie.count);else if(ne.isInstancedBufferGeometry){const $e=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,ra=Math.min(ne.instanceCount,$e);gt.renderInstances(ht,sn,ra)}else gt.render(ht,sn)},this.compile=function(P,Y){function ne(K,ie,Ce){K.transparent===!0&&K.side===Cn&&K.forceSinglePass===!1?(K.side=$t,K.needsUpdate=!0,kr(K,ie,Ce),K.side=ni,K.needsUpdate=!0,kr(K,ie,Ce),K.side=Cn):kr(K,ie,Ce)}m=ae.get(P),m.init(),v.push(m),P.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(x._useLegacyLights),P.traverse(function(K){const ie=K.material;if(ie)if(Array.isArray(ie))for(let Ce=0;Ce<ie.length;Ce++){const Ie=ie[Ce];ne(Ie,P,K)}else ne(ie,P,K)}),v.pop(),m=null};let ot=null;function Zt(P){ot&&ot(P)}function at(){Bt.stop()}function Mn(){Bt.start()}const Bt=new If;Bt.setAnimationLoop(Zt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(P){ot=P,z.setAnimationLoop(P),P===null?Bt.stop():Bt.start()},z.addEventListener("sessionstart",at),z.addEventListener("sessionend",Mn),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(Y),Y=z.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,Y,A),m=ae.get(P,v.length),m.init(),v.push(m),Pe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),_e.setFromProjectionMatrix(Pe),we=this.localClippingEnabled,Me=xe.init(this.clippingPlanes,we),_=oe.get(P,p.length),_.init(),p.push(_),yc(P,Y,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,ee),this.info.render.frame++,Me===!0&&xe.beginShadows();const ne=m.state.shadowsArray;if(fe.render(ne,P,Y),Me===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(_,P),m.setupLights(x._useLegacyLights),Y.isArrayCamera){const K=Y.cameras;for(let ie=0,Ce=K.length;ie<Ce;ie++){const Ie=K[ie];Mc(_,P,Ie,Ie.viewport)}}else Mc(_,P,Y);A!==null&&(te.updateMultisampleRenderTarget(A),te.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(x,P,Y),ge.resetDefaultState(),I=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function yc(P,Y,ne,K){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)ne=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||_e.intersectsSprite(P)){K&&ke.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Pe);const Ie=E.update(P),Fe=P.material;Fe.visible&&_.push(P,Ie,Fe,ne,ke.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||_e.intersectsObject(P))){const Ie=E.update(P),Fe=P.material;if(K&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ke.copy(P.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ke.copy(Ie.boundingSphere.center)),ke.applyMatrix4(P.matrixWorld).applyMatrix4(Pe)),Array.isArray(Fe)){const Oe=Ie.groups;for(let Ye=0,De=Oe.length;Ye<De;Ye++){const Ve=Oe[Ye],ht=Fe[Ve.materialIndex];ht&&ht.visible&&_.push(P,Ie,ht,ne,ke.z,Ve)}}else Fe.visible&&_.push(P,Ie,Fe,ne,ke.z,null)}}const Ce=P.children;for(let Ie=0,Fe=Ce.length;Ie<Fe;Ie++)yc(Ce[Ie],Y,ne,K)}function Mc(P,Y,ne,K){const ie=P.opaque,Ce=P.transmissive,Ie=P.transparent;m.setupLightsView(ne),Me===!0&&xe.setGlobalState(x.clippingPlanes,ne),Ce.length>0&&np(ie,Ce,Y,ne),K&&$.viewport(S.copy(K)),ie.length>0&&Hr(ie,Y,ne),Ce.length>0&&Hr(Ce,Y,ne),Ie.length>0&&Hr(Ie,Y,ne),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function np(P,Y,ne,K){const ie=Z.isWebGL2;Re===null&&(Re=new $i(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?Lr:Ei,minFilter:Yi,samples:ie?4:0})),x.getDrawingBufferSize(Le),ie?Re.setSize(Le.x,Le.y):Re.setSize(Ho(Le.x),Ho(Le.y));const Ce=x.getRenderTarget();x.setRenderTarget(Re),x.getClearColor(L),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const Ie=x.toneMapping;x.toneMapping=Mi,Hr(P,ne,K),te.updateMultisampleRenderTarget(Re),te.updateRenderTargetMipmap(Re);let Fe=!1;for(let Oe=0,Ye=Y.length;Oe<Ye;Oe++){const De=Y[Oe],Ve=De.object,ht=De.geometry,ft=De.material,sn=De.group;if(ft.side===Cn&&Ve.layers.test(K.layers)){const On=ft.side;ft.side=$t,ft.needsUpdate=!0,Ec(Ve,ne,K,ht,ft,sn),ft.side=On,ft.needsUpdate=!0,Fe=!0}}Fe===!0&&(te.updateMultisampleRenderTarget(Re),te.updateRenderTargetMipmap(Re)),x.setRenderTarget(Ce),x.setClearColor(L,N),x.toneMapping=Ie}function Hr(P,Y,ne){const K=Y.isScene===!0?Y.overrideMaterial:null;for(let ie=0,Ce=P.length;ie<Ce;ie++){const Ie=P[ie],Fe=Ie.object,Oe=Ie.geometry,Ye=K===null?Ie.material:K,De=Ie.group;Fe.layers.test(ne.layers)&&Ec(Fe,Y,ne,Oe,Ye,De)}}function Ec(P,Y,ne,K,ie,Ce){P.onBeforeRender(x,Y,ne,K,ie,Ce),P.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ie.onBeforeRender(x,Y,ne,K,P,Ce),ie.transparent===!0&&ie.side===Cn&&ie.forceSinglePass===!1?(ie.side=$t,ie.needsUpdate=!0,x.renderBufferDirect(ne,Y,K,ie,P,Ce),ie.side=ni,ie.needsUpdate=!0,x.renderBufferDirect(ne,Y,K,ie,P,Ce),ie.side=Cn):x.renderBufferDirect(ne,Y,K,ie,P,Ce),P.onAfterRender(x,Y,ne,K,ie,Ce)}function kr(P,Y,ne){Y.isScene!==!0&&(Y=dt);const K=he.get(P),ie=m.state.lights,Ce=m.state.shadowsArray,Ie=ie.state.version,Fe=k.getParameters(P,ie.state,Ce,Y,ne),Oe=k.getProgramCacheKey(Fe);let Ye=K.programs;K.environment=P.isMeshStandardMaterial?Y.environment:null,K.fog=Y.fog,K.envMap=(P.isMeshStandardMaterial?le:ue).get(P.envMap||K.environment),Ye===void 0&&(P.addEventListener("dispose",ve),Ye=new Map,K.programs=Ye);let De=Ye.get(Oe);if(De!==void 0){if(K.currentProgram===De&&K.lightsStateVersion===Ie)return bc(P,Fe),De}else Fe.uniforms=k.getUniforms(P),P.onBuild(ne,Fe,x),P.onBeforeCompile(Fe,x),De=k.acquireProgram(Fe,Oe),Ye.set(Oe,De),K.uniforms=Fe.uniforms;const Ve=K.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ve.clippingPlanes=xe.uniform),bc(P,Fe),K.needsLights=rp(P),K.lightsStateVersion=Ie,K.needsLights&&(Ve.ambientLightColor.value=ie.state.ambient,Ve.lightProbe.value=ie.state.probe,Ve.directionalLights.value=ie.state.directional,Ve.directionalLightShadows.value=ie.state.directionalShadow,Ve.spotLights.value=ie.state.spot,Ve.spotLightShadows.value=ie.state.spotShadow,Ve.rectAreaLights.value=ie.state.rectArea,Ve.ltc_1.value=ie.state.rectAreaLTC1,Ve.ltc_2.value=ie.state.rectAreaLTC2,Ve.pointLights.value=ie.state.point,Ve.pointLightShadows.value=ie.state.pointShadow,Ve.hemisphereLights.value=ie.state.hemi,Ve.directionalShadowMap.value=ie.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ve.spotShadowMap.value=ie.state.spotShadowMap,Ve.spotLightMatrix.value=ie.state.spotLightMatrix,Ve.spotLightMap.value=ie.state.spotLightMap,Ve.pointShadowMap.value=ie.state.pointShadowMap,Ve.pointShadowMatrix.value=ie.state.pointShadowMatrix);const ht=De.getUniforms(),ft=Io.seqWithValue(ht.seq,Ve);return K.currentProgram=De,K.uniformsList=ft,De}function bc(P,Y){const ne=he.get(P);ne.outputColorSpace=Y.outputColorSpace,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function ip(P,Y,ne,K,ie){Y.isScene!==!0&&(Y=dt),te.resetTextureUnits();const Ce=Y.fog,Ie=K.isMeshStandardMaterial?Y.environment:null,Fe=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ct,Oe=(K.isMeshStandardMaterial?le:ue).get(K.envMap||Ie),Ye=K.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,De=!!ne.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!ne.morphAttributes.position,ht=!!ne.morphAttributes.normal,ft=!!ne.morphAttributes.color;let sn=Mi;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(sn=x.toneMapping);const On=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,gt=On!==void 0?On.length:0,$e=he.get(K),ra=m.state.lights;if(Me===!0&&(we===!0||P!==M)){const Jt=P===M&&K.id===I;xe.setState(K,P,Jt)}let _t=!1;K.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==ra.state.version||$e.outputColorSpace!==Fe||ie.isInstancedMesh&&$e.instancing===!1||!ie.isInstancedMesh&&$e.instancing===!0||ie.isSkinnedMesh&&$e.skinning===!1||!ie.isSkinnedMesh&&$e.skinning===!0||ie.isInstancedMesh&&$e.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&$e.instancingColor===!1&&ie.instanceColor!==null||$e.envMap!==Oe||K.fog===!0&&$e.fog!==Ce||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==xe.numPlanes||$e.numIntersection!==xe.numIntersection)||$e.vertexAlphas!==Ye||$e.vertexTangents!==De||$e.morphTargets!==Ve||$e.morphNormals!==ht||$e.morphColors!==ft||$e.toneMapping!==sn||Z.isWebGL2===!0&&$e.morphTargetsCount!==gt)&&(_t=!0):(_t=!0,$e.__version=K.version);let Ti=$e.currentProgram;_t===!0&&(Ti=kr(K,Y,ie));let Sc=!1,er=!1,oa=!1;const zt=Ti.getUniforms(),wi=$e.uniforms;if($.useProgram(Ti.program)&&(Sc=!0,er=!0,oa=!0),K.id!==I&&(I=K.id,er=!0),Sc||M!==P){zt.setValue(b,"projectionMatrix",P.projectionMatrix),zt.setValue(b,"viewMatrix",P.matrixWorldInverse);const Jt=zt.map.cameraPosition;Jt!==void 0&&Jt.setValue(b,ke.setFromMatrixPosition(P.matrixWorld)),Z.logarithmicDepthBuffer&&zt.setValue(b,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&zt.setValue(b,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,er=!0,oa=!0)}if(ie.isSkinnedMesh){zt.setOptional(b,ie,"bindMatrix"),zt.setOptional(b,ie,"bindMatrixInverse");const Jt=ie.skeleton;Jt&&(Z.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),zt.setValue(b,"boneTexture",Jt.boneTexture,te),zt.setValue(b,"boneTextureSize",Jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const aa=ne.morphAttributes;if((aa.position!==void 0||aa.normal!==void 0||aa.color!==void 0&&Z.isWebGL2===!0)&&F.update(ie,ne,Ti),(er||$e.receiveShadow!==ie.receiveShadow)&&($e.receiveShadow=ie.receiveShadow,zt.setValue(b,"receiveShadow",ie.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(wi.envMap.value=Oe,wi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),er&&(zt.setValue(b,"toneMappingExposure",x.toneMappingExposure),$e.needsLights&&sp(wi,oa),Ce&&K.fog===!0&&re.refreshFogUniforms(wi,Ce),re.refreshMaterialUniforms(wi,K,W,U,Re),Io.upload(b,$e.uniformsList,wi,te)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Io.upload(b,$e.uniformsList,wi,te),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&zt.setValue(b,"center",ie.center),zt.setValue(b,"modelViewMatrix",ie.modelViewMatrix),zt.setValue(b,"normalMatrix",ie.normalMatrix),zt.setValue(b,"modelMatrix",ie.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Jt=K.uniformsGroups;for(let la=0,op=Jt.length;la<op;la++)if(Z.isWebGL2){const Tc=Jt[la];Ne.update(Tc,Ti),Ne.bind(Tc,Ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ti}function sp(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function rp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,Y,ne){he.get(P.texture).__webglTexture=Y,he.get(P.depthTexture).__webglTexture=ne;const K=he.get(P);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=ne===void 0,K.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Y){const ne=he.get(P);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,ne=0){A=P,w=Y,C=ne;let K=!0,ie=null,Ce=!1,Ie=!1;if(P){const Oe=he.get(P);Oe.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(b.FRAMEBUFFER,null),K=!1):Oe.__webglFramebuffer===void 0?te.setupRenderTarget(P):Oe.__hasExternalTextures&&te.rebindTextures(P,he.get(P.texture).__webglTexture,he.get(P.depthTexture).__webglTexture);const Ye=P.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ie=!0);const De=he.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(De[Y])?ie=De[Y][ne]:ie=De[Y],Ce=!0):Z.isWebGL2&&P.samples>0&&te.useMultisampledRTT(P)===!1?ie=he.get(P).__webglMultisampledFramebuffer:Array.isArray(De)?ie=De[ne]:ie=De,S.copy(P.viewport),V.copy(P.scissor),B=P.scissorTest}else S.copy(se).multiplyScalar(W).floor(),V.copy(j).multiplyScalar(W).floor(),B=G;if($.bindFramebuffer(b.FRAMEBUFFER,ie)&&Z.drawBuffers&&K&&$.drawBuffers(P,ie),$.viewport(S),$.scissor(V),$.setScissorTest(B),Ce){const Oe=he.get(P.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,ne)}else if(Ie){const Oe=he.get(P.texture),Ye=Y||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Oe.__webglTexture,ne||0,Ye)}I=-1},this.readRenderTargetPixels=function(P,Y,ne,K,ie,Ce,Ie){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=he.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){$.bindFramebuffer(b.FRAMEBUFFER,Fe);try{const Oe=P.texture,Ye=Oe.format,De=Oe.type;if(Ye!==ln&&pe.convert(Ye)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=De===Lr&&(q.has("EXT_color_buffer_half_float")||Z.isWebGL2&&q.has("EXT_color_buffer_float"));if(De!==Ei&&pe.convert(De)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Qn&&(Z.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-K&&ne>=0&&ne<=P.height-ie&&b.readPixels(Y,ne,K,ie,pe.convert(Ye),pe.convert(De),Ce)}finally{const Oe=A!==null?he.get(A).__webglFramebuffer:null;$.bindFramebuffer(b.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(P,Y,ne=0){const K=Math.pow(2,-ne),ie=Math.floor(Y.image.width*K),Ce=Math.floor(Y.image.height*K);te.setTexture2D(Y,0),b.copyTexSubImage2D(b.TEXTURE_2D,ne,0,0,P.x,P.y,ie,Ce),$.unbindTexture()},this.copyTextureToTexture=function(P,Y,ne,K=0){const ie=Y.image.width,Ce=Y.image.height,Ie=pe.convert(ne.format),Fe=pe.convert(ne.type);te.setTexture2D(ne,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,ne.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,ne.unpackAlignment),Y.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,K,P.x,P.y,ie,Ce,Ie,Fe,Y.image.data):Y.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,K,P.x,P.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ie,Y.mipmaps[0].data):b.texSubImage2D(b.TEXTURE_2D,K,P.x,P.y,Ie,Fe,Y.image),K===0&&ne.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,ne,K,ie=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=P.max.x-P.min.x+1,Ie=P.max.y-P.min.y+1,Fe=P.max.z-P.min.z+1,Oe=pe.convert(K.format),Ye=pe.convert(K.type);let De;if(K.isData3DTexture)te.setTexture3D(K,0),De=b.TEXTURE_3D;else if(K.isDataArrayTexture)te.setTexture2DArray(K,0),De=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,K.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,K.unpackAlignment);const Ve=b.getParameter(b.UNPACK_ROW_LENGTH),ht=b.getParameter(b.UNPACK_IMAGE_HEIGHT),ft=b.getParameter(b.UNPACK_SKIP_PIXELS),sn=b.getParameter(b.UNPACK_SKIP_ROWS),On=b.getParameter(b.UNPACK_SKIP_IMAGES),gt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,gt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,gt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,P.min.x),b.pixelStorei(b.UNPACK_SKIP_ROWS,P.min.y),b.pixelStorei(b.UNPACK_SKIP_IMAGES,P.min.z),ne.isDataTexture||ne.isData3DTexture?b.texSubImage3D(De,ie,Y.x,Y.y,Y.z,Ce,Ie,Fe,Oe,Ye,gt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),b.compressedTexSubImage3D(De,ie,Y.x,Y.y,Y.z,Ce,Ie,Fe,Oe,gt.data)):b.texSubImage3D(De,ie,Y.x,Y.y,Y.z,Ce,Ie,Fe,Oe,Ye,gt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Ve),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ht),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ft),b.pixelStorei(b.UNPACK_SKIP_ROWS,sn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,On),ie===0&&K.generateMipmaps&&b.generateMipmap(De),$.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?te.setTextureCube(P,0):P.isData3DTexture?te.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?te.setTexture2DArray(P,0):te.setTexture2D(P,0),$.unbindTexture()},this.resetState=function(){w=0,C=0,A=null,$.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nt?qi:_f}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qi?nt:Ct}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class sE extends Of{}sE.prototype.isWebGL1Renderer=!0;class rE extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class oE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new H;class cc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xh=new H,yh=new rt,Mh=new rt,aE=new H,Eh=new qe,xs=new H,Xa=new Un,bh=new qe,qa=new Ur;class lE extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)xs.fromBufferAttribute(t,n),this.applyBoneTransform(n,xs),this.boundingBox.expandByPoint(xs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)xs.fromBufferAttribute(t,n),this.applyBoneTransform(n,xs),this.boundingSphere.expandByPoint(xs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(i),e.ray.intersectsSphere(Xa)!==!1&&(bh.copy(i).invert(),qa.copy(e.ray).applyMatrix4(bh),!(this.boundingBox!==null&&qa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;yh.fromBufferAttribute(i.attributes.skinIndex,e),Mh.fromBufferAttribute(i.attributes.skinWeight,e),xh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Mh.getComponent(r);if(o!==0){const a=yh.getComponent(r);Eh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(aE.copy(xh).applyMatrix4(Eh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Bf extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cE extends Pt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=At,u=At,d,h){super(null,o,a,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sh=new qe,uE=new qe;class uc{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:uE;Sh.multiplyMatrices(a,t[r]),Sh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new uc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=xf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new cE(t,e,e,ln,Qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Bf),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Th extends Xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ys=new qe,wh=new qe,mo=[],Ah=new si,hE=new qe,or=new pt,ar=new Un;class dE extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Th(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,hE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),Ah.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(Ah)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),ar.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),e.ray.intersectsSphere(ar)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ys),wh.multiplyMatrices(n,ys),or.matrixWorld=wh,or.raycast(e,mo);for(let o=0,a=mo.length;o<a;o++){const l=mo[o];l.instanceId=r,l.object=this,t.push(l)}mo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Th(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class hc extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rh=new H,Ch=new H,Lh=new qe,ja=new Ur,go=new Un;class Nr extends ut{constructor(e=new It,t=new hc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Rh.fromBufferAttribute(t,i-1),Ch.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rh.distanceTo(Ch);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(i),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;Lh.copy(i).invert(),ja.copy(e.ray).applyMatrix4(Lh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new H,u=new H,d=new H,h=new H,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=p,y=v-1;x<y;x+=f){const w=g.getX(x),C=g.getX(x+1);if(c.fromBufferAttribute(m,w),u.fromBufferAttribute(m,C),ja.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(h);I<e.near||I>e.far||t.push({distance:I,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let x=p,y=v-1;x<y;x+=f){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),ja.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Ph=new H,Ih=new H;class fE extends Nr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ph.fromBufferAttribute(t,i),Ih.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ph.distanceTo(Ih);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pE extends Nr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zf extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nh=new qe,Cl=new Ur,_o=new Un,vo=new H;class mE extends ut{constructor(e=new It,t=new zf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(i),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;Nh.copy(i).invert(),Cl.copy(e.ray).applyMatrix4(Nh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const m=c.getX(g);vo.fromBufferAttribute(d,m),Dh(vo,m,l,i,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,_=f;g<_;g++)vo.fromBufferAttribute(d,g),Dh(vo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Dh(s,e,t,n,i,r,o){const a=Cl.distanceSqToPoint(s);if(a<t){const l=new H;Cl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class dc extends It{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function v(){const y=new H,w=new H;let C=0;const A=(t-e)/n;for(let I=0;I<=r;I++){const M=[],S=I/r,V=S*(t-e)+e;for(let B=0;B<=i;B++){const L=B/i,N=L*l+a,D=Math.sin(N),U=Math.cos(N);w.x=V*D,w.y=-S*n+m,w.z=V*U,d.push(w.x,w.y,w.z),y.set(D,A,U).normalize(),h.push(y.x,y.y,y.z),f.push(L,1-S),M.push(g++)}_.push(M)}for(let I=0;I<i;I++)for(let M=0;M<r;M++){const S=_[M][I],V=_[M+1][I],B=_[M+1][I+1],L=_[M][I+1];u.push(S,V,L),u.push(V,B,L),C+=6}c.addGroup(p,C,0),p+=C}function x(y){const w=g,C=new Ue,A=new H;let I=0;const M=y===!0?e:t,S=y===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,m*S,0),h.push(0,S,0),f.push(.5,.5),g++;const V=g;for(let B=0;B<=i;B++){const N=B/i*l+a,D=Math.cos(N),U=Math.sin(N);A.x=M*U,A.y=m*S,A.z=M*D,d.push(A.x,A.y,A.z),h.push(0,S,0),C.x=D*.5+.5,C.y=U*.5*S+.5,f.push(C.x,C.y),g++}for(let B=0;B<i;B++){const L=w+B,N=V+B;y===!0?u.push(N,N+1,L):u.push(N+1,N,L),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ko extends It{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new H,h=new H,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const C=w/t;d.x=-e*Math.cos(i+C*r)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(i+C*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(C+y,1-x),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=u[p][v+1],y=u[p][v],w=u[p+1][v],C=u[p+1][v+1];(p!==0||o>0)&&f.push(x,y,C),(p!==n-1||l<Math.PI)&&f.push(y,w,C)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class na extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Si extends na{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ui(s,e,t){return Hf(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function xo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Hf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function gE(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Uh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function kf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Fr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _E extends Fr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Iu,endingEnd:Iu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nu:r=e,a=2*t-n;break;case Du:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nu:o=e,l=2*n-t;break;case Du:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,v=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+v*o[c+w]+x*o[l+w]+y*o[d+w];return r}}class vE extends Fr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}}class xE extends Fr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xo(t,this.TimeBufferType),this.values=xo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xo(e.times,Array),values:xo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _E(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case zs:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return zs;case this.InterpolantFactoryMethodSmooth:return Ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=ui(n,r,o),this.values=ui(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Hf(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ui(this.times),t=ui(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ea,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ui(e,0,o),this.values=ui(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ui(this.times,0),t=ui(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=zs;class Zs extends Fn{}Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Pr;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Vf extends Fn{}Vf.prototype.ValueTypeName="color";class Gs extends Fn{}Gs.prototype.ValueTypeName="number";class yE extends Fr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Dn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ji extends Fn{InterpolantFactoryMethodLinear(e){return new yE(this.times,this.values,this.getValueSize(),e)}}Ji.prototype.ValueTypeName="quaternion";Ji.prototype.DefaultInterpolation=zs;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends Fn{}Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Pr;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Fn{}Ws.prototype.ValueTypeName="vector";class ME{constructor(e,t=-1,n,i=b_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(bE(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Fn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=gE(l);l=Uh(l,1,u),c=Uh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Gs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,g,_){if(f.length!==0){const m=[],p=[];kf(f,m,p,g),m.length!==0&&_.push(new d(h,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)f[h[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==h[g].morphTargets.length;++v){const x=h[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Gs(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[d].name+"]";n(Ws,f+".position",h,"pos",i),n(Ji,f+".quaternion",h,"rot",i),n(Ws,f+".scale",h,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function EE(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gs;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return Vf;case"quaternion":return Ji;case"bool":case"boolean":return Zs;case"string":return Js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function bE(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=EE(s.type);if(s.times===void 0){const t=[],n=[];kf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Xs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class SE{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const TE=new SE;class Qs{constructor(e){this.manager=e!==void 0?e:TE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class wE extends Error{constructor(e,t){super(e),this.response=t}}class Gf extends Qs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Xs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:i});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wn[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=h?parseInt(h):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){d.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let C=0,A=u.length;C<A;C++){const I=u[C];I.onProgress&&I.onProgress(w)}p.enqueue(y),v()}})}}});return new Response(m)}else throw new wE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Xs.add(e,c);const u=Wn[e];delete Wn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class AE extends Qs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Xs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ir("img");function l(){u(),Xs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class RE extends Qs{constructor(e){super(e)}load(e,t,n,i){const r=new Pt,o=new AE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ia extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ya=new qe,Fh=new H,Oh=new H;class fc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class CE extends fc{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Hs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class LE extends ia{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new CE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bh=new qe,lr=new H,$a=new H;class PE extends fc{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(lr),$a.copy(n.position),$a.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($a),n.updateMatrixWorld(),i.makeTranslation(-lr.x,-lr.y,-lr.z),Bh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh)}}class IE extends ia{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new PE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class NE extends fc{constructor(){super(new ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wf extends ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new NE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class DE extends ia{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ll{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class UE extends Qs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Xs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Xs.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const pc="\\[\\]\\.:\\/",FE=new RegExp("["+pc+"]","g"),mc="[^"+pc+"]",OE="[^"+pc.replace("\\.","")+"]",BE=/((?:WC+[\/:])*)/.source.replace("WC",mc),zE=/(WCOD+)?/.source.replace("WCOD",OE),HE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc),kE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc),VE=new RegExp("^"+BE+zE+HE+kE+"$"),GE=["material","materials","bones","map"];class WE{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(FE,"")}static parseTrackName(e){const t=VE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);GE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=WE;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Hh=new H,yo=new H,kh=new H;class XE extends ut{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new It;i.setAttribute("position",new yt([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new hc({fog:!1,toneMapped:!1});this.lightPlane=new Nr(i,r),this.add(this.lightPlane),i=new It,i.setAttribute("position",new yt([0,0,0,0,0,1],3)),this.targetLine=new Nr(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Hh.setFromMatrixPosition(this.light.matrixWorld),yo.setFromMatrixPosition(this.light.target.matrixWorld),kh.subVectors(yo,Hh),this.lightPlane.lookAt(yo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(yo),this.targetLine.scale.z=kh.length()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);const Vh={type:"change"},Ka={type:"start"},Gh={type:"end"},Mo=new Ur,Wh=new pi,qE=Math.cos(70*yf.DEG2RAD);class jE extends Qi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",E),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Vh),n.update(),r=i.NONE},this.update=function(){const F=new H,ce=new Dn().setFromUnitVectors(e.up,new H(0,1,0)),Ee=ce.clone().invert(),pe=new H,ge=new Dn,Ne=new H,Ke=2*Math.PI;return function(be=null){const Q=n.object.position;F.copy(Q).sub(n.target),F.applyQuaternion(ce),a.setFromVector3(F),n.autoRotate&&r===i.NONE&&V(M(be)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let me=n.minAzimuthAngle,ve=n.maxAzimuthAngle;isFinite(me)&&isFinite(ve)&&(me<-Math.PI?me+=Ke:me>Math.PI&&(me-=Ke),ve<-Math.PI?ve+=Ke:ve>Math.PI&&(ve-=Ke),me<=ve?a.theta=Math.max(me,Math.min(ve,a.theta)):a.theta=a.theta>(me+ve)/2?Math.max(me,a.theta):Math.min(ve,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=ee(a.radius):a.radius=ee(a.radius*c),F.setFromSpherical(a),F.applyQuaternion(Ee),Q.copy(n.target).add(F),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let je=!1;if(n.zoomToCursor&&C){let et=null;if(n.object.isPerspectiveCamera){const ot=F.length();et=ee(ot*c);const Zt=ot-et;n.object.position.addScaledVector(y,Zt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ot=new H(w.x,w.y,0);ot.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),je=!0;const Zt=new H(w.x,w.y,0);Zt.unproject(n.object),n.object.position.sub(Zt).add(ot),n.object.updateMatrixWorld(),et=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;et!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(et).add(n.object.position):(Mo.origin.copy(n.object.position),Mo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Mo.direction))<qE?e.lookAt(n.target):(Wh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Mo.intersectPlane(Wh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),je=!0);return c=1,C=!1,je||pe.distanceToSquared(n.object.position)>o||8*(1-ge.dot(n.object.quaternion))>o||Ne.distanceToSquared(n.target)>0?(n.dispatchEvent(Vh),pe.copy(n.object.position),ge.copy(n.object.quaternion),Ne.copy(n.target),je=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",oe),n.domElement.removeEventListener("pointerdown",he),n.domElement.removeEventListener("pointercancel",ue),n.domElement.removeEventListener("wheel",R),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",ue),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new zh,l=new zh;let c=1;const u=new H,d=new Ue,h=new Ue,f=new Ue,g=new Ue,_=new Ue,m=new Ue,p=new Ue,v=new Ue,x=new Ue,y=new H,w=new Ue;let C=!1;const A=[],I={};function M(F){return F!==null?2*Math.PI/60*n.autoRotateSpeed*F:2*Math.PI/60/60*n.autoRotateSpeed}function S(){return Math.pow(.95,n.zoomSpeed)}function V(F){l.theta-=F}function B(F){l.phi-=F}const L=function(){const F=new H;return function(Ee,pe){F.setFromMatrixColumn(pe,0),F.multiplyScalar(-Ee),u.add(F)}}(),N=function(){const F=new H;return function(Ee,pe){n.screenSpacePanning===!0?F.setFromMatrixColumn(pe,1):(F.setFromMatrixColumn(pe,0),F.crossVectors(n.object.up,F)),F.multiplyScalar(Ee),u.add(F)}}(),D=function(){const F=new H;return function(Ee,pe){const ge=n.domElement;if(n.object.isPerspectiveCamera){const Ne=n.object.position;F.copy(Ne).sub(n.target);let Ke=F.length();Ke*=Math.tan(n.object.fov/2*Math.PI/180),L(2*Ee*Ke/ge.clientHeight,n.object.matrix),N(2*pe*Ke/ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(Ee*(n.object.right-n.object.left)/n.object.zoom/ge.clientWidth,n.object.matrix),N(pe*(n.object.top-n.object.bottom)/n.object.zoom/ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(F){if(!n.zoomToCursor)return;C=!0;const ce=n.domElement.getBoundingClientRect(),Ee=F.clientX-ce.left,pe=F.clientY-ce.top,ge=ce.width,Ne=ce.height;w.x=Ee/ge*2-1,w.y=-(pe/Ne)*2+1,y.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function ee(F){return Math.max(n.minDistance,Math.min(n.maxDistance,F))}function se(F){d.set(F.clientX,F.clientY)}function j(F){X(F),p.set(F.clientX,F.clientY)}function G(F){g.set(F.clientX,F.clientY)}function _e(F){h.set(F.clientX,F.clientY),f.subVectors(h,d).multiplyScalar(n.rotateSpeed);const ce=n.domElement;V(2*Math.PI*f.x/ce.clientHeight),B(2*Math.PI*f.y/ce.clientHeight),d.copy(h),n.update()}function Me(F){v.set(F.clientX,F.clientY),x.subVectors(v,p),x.y>0?U(S()):x.y<0&&W(S()),p.copy(v),n.update()}function we(F){_.set(F.clientX,F.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),D(m.x,m.y),g.copy(_),n.update()}function Re(F){X(F),F.deltaY<0?W(S()):F.deltaY>0&&U(S()),n.update()}function Pe(F){let ce=!1;switch(F.code){case n.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),ce=!0;break;case n.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),ce=!0;break;case n.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),ce=!0;break;case n.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),ce=!0;break}ce&&(F.preventDefault(),n.update())}function Le(){if(A.length===1)d.set(A[0].pageX,A[0].pageY);else{const F=.5*(A[0].pageX+A[1].pageX),ce=.5*(A[0].pageY+A[1].pageY);d.set(F,ce)}}function ke(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const F=.5*(A[0].pageX+A[1].pageX),ce=.5*(A[0].pageY+A[1].pageY);g.set(F,ce)}}function dt(){const F=A[0].pageX-A[1].pageX,ce=A[0].pageY-A[1].pageY,Ee=Math.sqrt(F*F+ce*ce);p.set(0,Ee)}function Be(){n.enableZoom&&dt(),n.enablePan&&ke()}function b(){n.enableZoom&&dt(),n.enableRotate&&Le()}function O(F){if(A.length==1)h.set(F.pageX,F.pageY);else{const Ee=J(F),pe=.5*(F.pageX+Ee.x),ge=.5*(F.pageY+Ee.y);h.set(pe,ge)}f.subVectors(h,d).multiplyScalar(n.rotateSpeed);const ce=n.domElement;V(2*Math.PI*f.x/ce.clientHeight),B(2*Math.PI*f.y/ce.clientHeight),d.copy(h)}function q(F){if(A.length===1)_.set(F.pageX,F.pageY);else{const ce=J(F),Ee=.5*(F.pageX+ce.x),pe=.5*(F.pageY+ce.y);_.set(Ee,pe)}m.subVectors(_,g).multiplyScalar(n.panSpeed),D(m.x,m.y),g.copy(_)}function Z(F){const ce=J(F),Ee=F.pageX-ce.x,pe=F.pageY-ce.y,ge=Math.sqrt(Ee*Ee+pe*pe);v.set(0,ge),x.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),U(x.y),p.copy(v)}function $(F){n.enableZoom&&Z(F),n.enablePan&&q(F)}function de(F){n.enableZoom&&Z(F),n.enableRotate&&O(F)}function he(F){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(F.pointerId),n.domElement.addEventListener("pointermove",te),n.domElement.addEventListener("pointerup",ue)),ae(F),F.pointerType==="touch"?k(F):le(F))}function te(F){n.enabled!==!1&&(F.pointerType==="touch"?re(F):Te(F))}function ue(F){xe(F),A.length===0&&(n.domElement.releasePointerCapture(F.pointerId),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",ue)),n.dispatchEvent(Gh),r=i.NONE}function le(F){let ce;switch(F.button){case 0:ce=n.mouseButtons.LEFT;break;case 1:ce=n.mouseButtons.MIDDLE;break;case 2:ce=n.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case ts.DOLLY:if(n.enableZoom===!1)return;j(F),r=i.DOLLY;break;case ts.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enablePan===!1)return;G(F),r=i.PAN}else{if(n.enableRotate===!1)return;se(F),r=i.ROTATE}break;case ts.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enableRotate===!1)return;se(F),r=i.ROTATE}else{if(n.enablePan===!1)return;G(F),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ka)}function Te(F){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;_e(F);break;case i.DOLLY:if(n.enableZoom===!1)return;Me(F);break;case i.PAN:if(n.enablePan===!1)return;we(F);break}}function R(F){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(F.preventDefault(),n.dispatchEvent(Ka),Re(F),n.dispatchEvent(Gh))}function E(F){n.enabled===!1||n.enablePan===!1||Pe(F)}function k(F){switch(fe(F),A.length){case 1:switch(n.touches.ONE){case ns.ROTATE:if(n.enableRotate===!1)return;Le(),r=i.TOUCH_ROTATE;break;case ns.PAN:if(n.enablePan===!1)return;ke(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ns.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(),r=i.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;b(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ka)}function re(F){switch(fe(F),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;O(F),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;q(F),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$(F),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(F),n.update();break;default:r=i.NONE}}function oe(F){n.enabled!==!1&&F.preventDefault()}function ae(F){A.push(F)}function xe(F){delete I[F.pointerId];for(let ce=0;ce<A.length;ce++)if(A[ce].pointerId==F.pointerId){A.splice(ce,1);return}}function fe(F){let ce=I[F.pointerId];ce===void 0&&(ce=new Ue,I[F.pointerId]=ce),ce.set(F.pageX,F.pageY)}function J(F){const ce=F.pointerId===A[0].pointerId?A[1]:A[0];return I[ce.pointerId]}n.domElement.addEventListener("contextmenu",oe),n.domElement.addEventListener("pointerdown",he),n.domElement.addEventListener("pointercancel",ue),n.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}function Xh(s,e){if(e===S_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Sl||e===gf){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Sl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class YE extends Qs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new QE(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new JE(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new hb(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Ll.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Gf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Xf){try{o[Ze.KHR_BINARY_GLTF]=new db(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Tb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case Ze.KHR_MATERIALS_UNLIT:o[d]=new ZE;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[d]=new fb(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[d]=new pb;break;case Ze.KHR_MESH_QUANTIZATION:o[d]=new mb;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function $E(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class KE{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ze(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ct);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Wf(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new IE(u),c.distance=d;break;case"spot":c=new LE(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class ZE{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return _i}extendParams(e,t,n){const i=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ct),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,nt))}return Promise.all(i)}}class JE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class QE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(r)}}class eb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class tb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ct)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,nt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class nb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class ib{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],Ct),Promise.all(r)}}class sb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class rb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],Ct),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,nt)),Promise.all(r)}}class ob{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class ab{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class lb{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cb{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ub{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,i.mode,i.filter),f})})}else return null}}class hb{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==on.TRIANGLES&&c.mode!==on.TRIANGLE_STRIP&&c.mode!==on.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const g of d){const _=new qe,m=new H,p=new Dn,v=new H(1,1,1),x=new dE(g.geometry,g.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,_.compose(m,p,v));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);ut.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Xf="glTF",cr=12,qh={JSON:1313821514,BIN:5130562};class db{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,cr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-cr,r=new DataView(e,cr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===qh.JSON){const c=new Uint8Array(e,cr+o,a);this.content=n.decode(c)}else if(l===qh.BIN){const c=cr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Pl[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Pl[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],f=Ps[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d){i.decodeDracoFile(u,function(h){for(const f in h.attributes){const g=h.attributes[f],_=l[f];_!==void 0&&(g.normalized=_)}d(h)},a,c)})})}}class pb{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class mb{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class qf extends Fr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,d=(n-t)/u,h=d*d,f=h*d,g=e*c,_=g-c,m=-2*f+3*h,p=f-h,v=1-m,x=p-h+d;for(let y=0;y!==a;y++){const w=o[_+y+a],C=o[_+y+l]*u,A=o[g+y+a],I=o[g+y]*u;r[y]=v*w+x*C+m*A+p*I}return r}}const gb=new Dn;class _b extends qf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return gb.fromArray(r).normalize().toArray(r),r}}const on={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jh={9728:At,9729:Yt,9984:bl,9985:cf,9986:Po,9987:Yi},Yh={33071:an,33648:Bo,10497:Os},Za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vb={CUBICSPLINE:void 0,LINEAR:zs,STEP:Pr},Ja={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new na({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),s.DefaultMaterial}function Ni(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yb(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function Mb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Eb(s){let e;const t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qa(t.attributes):e=s.indices+":"+Qa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Qa(s.targets[n]);return e}function Qa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Il(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Sb=new qe;class Tb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $E,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new RE(this.options.manager):this.textureLoader=new UE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Ni(r,a,i),mi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ll.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Za[i.type],a=Ps[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Xt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Za[i.type],c=Ps[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(h/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(v);x||(_=new c(a,p*f,i.count*f/u),x=new oE(_,f/u),t.cache.add(v,x)),m=new cc(x,l,h%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,h,i.count*l),m=new Xt(_,l,g);if(i.sparse!==void 0){const p=Za.SCALAR,v=Ps[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,w=new v(o[1],x,i.sparse.count*p),C=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,I=w.length;A<I;A++){const M=w[A];if(m.setX(M,C[A*l]),l>=2&&m.setY(M,C[A*l+1]),l>=3&&m.setZ(M,C[A*l+2]),l>=4&&m.setW(M,C[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=jh[h.magFilter]||Yt,u.minFilter=jh[h.minFilter]||Yi,u.wrapS=Yh[h.wrapS]||Os,u.wrapT=Yh[h.wrapT]||Os,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Pt(_);m.needsUpdate=!0,h(m)}),t.load(Ll.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||bb(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new zf,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new hc,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return na}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const d=i[Ze.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Ct),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,nt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Cn);const u=r.alphaMode||Ja.OPAQUE;if(u===Ja.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ja.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==_i&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==_i&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==_i){const d=r.emissiveFactor;a.emissive=new ze().setRGB(d[0],d[1],d[2],Ct)}return r.emissiveTexture!==void 0&&o!==_i&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,nt)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),mi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ni(i,d,r),d})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return $h(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Eb(c),d=i[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=$h(new It,c,t),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?xb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const v=c[f];if(m.mode===on.TRIANGLES||m.mode===on.TRIANGLE_STRIP||m.mode===on.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new lE(_,v):new pt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===on.TRIANGLE_STRIP?p.geometry=Xh(p.geometry,gf):m.mode===on.TRIANGLE_FAN&&(p.geometry=Xh(p.geometry,Sl));else if(m.mode===on.LINES)p=new fE(_,v);else if(m.mode===on.LINE_STRIP)p=new Nr(_,v);else if(m.mode===on.LINE_LOOP)p=new pE(_,v);else if(m.mode===on.POINTS)p=new mE(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Mb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),mi(p,r),m.extensions&&Ni(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Ni(i,d[0],r),d[0];const h=new Hi;r.extensions&&Ni(i,h,r),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(yf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ac(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new qe;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new uc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const f=i.channels[d],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let v=0,x=h.length;v<x;v++){const y=h[v],w=f[v],C=g[v],A=_[v],I=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const M=n._createAnimationTracks(y,w,C,A,I);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new ME(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,Sb)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Bf:c.length>1?u=new Hi:c.length===1?u=c[0]:u=new ut,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=o),mi(u,r),r.extensions&&Ni(n,u,r),r.matrix!==void 0){const d=new qe;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Hi;n.name&&(r.name=i.createUniqueName(n.name)),mi(r,n),n.extensions&&Ni(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const c=u=>{const d=new Map;for(const[h,f]of i.associations)(h instanceof In||h instanceof Pt)&&d.set(h,f);return u.traverse(h=>{const f=i.associations.get(h);f!=null&&d.set(h,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];hi[r.path]===hi.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(hi[r.path]){case hi.weights:c=Gs;break;case hi.rotation:c=Ji;break;case hi.position:case hi.scale:c=Ws;break;default:switch(n.itemSize){case 1:c=Gs;break;case 2:case 3:default:c=Ws;break}break}const u=i.interpolation!==void 0?vb[i.interpolation]:zs,d=this._getArrayFromAccessor(n);for(let h=0,f=l.length;h<f;h++){const g=new c(l[h]+"."+hi[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Il(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ji?_b:qf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function wb(s,e,t){const n=e.attributes,i=new si;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){const u=Il(Ps[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new H,l=new H;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const _=Il(Ps[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function $h(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Pl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return tn.workingColorSpace!==Ct&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tn.workingColorSpace}" not supported.`),mi(s,e),wb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?yb(s,e.targets,t):s})}var Ab=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rb(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var jf={exports:{}};(function(s,e){(function(t,n){s.exports=n()})(Ab,function(){var t=function(){function n(f){return o.appendChild(f.dom),f}function i(f){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===f?"block":"none";r=f}var r=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(f){f.preventDefault(),i(++r%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=n(new t.Panel("FPS","#0ff","#002")),d=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(d.update(f-a,200),f>l+1e3&&(u.update(1e3*c/(f-l),100),l=f,c=0,h)){var g=performance.memory;h.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return f},update:function(){a=this.end()},domElement:o,setMode:i}};return t.Panel=function(n,i,r){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,d=48*c,h=3*c,f=2*c,g=3*c,_=15*c,m=74*c,p=30*c,v=document.createElement("canvas");v.width=u,v.height=d,v.style.cssText="width:80px;height:48px";var x=v.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=r,x.fillRect(0,0,u,d),x.fillStyle=i,x.fillText(n,h,f),x.fillRect(g,_,m,p),x.fillStyle=r,x.globalAlpha=.9,x.fillRect(g,_,m,p),{dom:v,update:function(y,w){o=Math.min(o,y),a=Math.max(a,y),x.fillStyle=r,x.globalAlpha=1,x.fillRect(0,0,u,_),x.fillStyle=i,x.fillText(l(y)+" "+n+" ("+l(o)+"-"+l(a)+")",h,f),x.drawImage(v,g+c,_,m-c,p,g,_,m-c,p),x.fillRect(g+m-c,_,c,p),x.fillStyle=r,x.globalAlpha=.9,x.fillRect(g+m-c,_,c,l((1-y/w)*p))}}},t})})(jf);var Cb=jf.exports;const Lb=Rb(Cb),qs=new Lb;qs.dom.style.left="auto";qs.dom.style.top="10px";qs.dom.style.left="10px";document.body.appendChild(qs.dom);class _n{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new T);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new T);const n=this.elements,i=e.x,r=e.y,o=e.z;return t.x=n[0]*i+n[1]*r+n[2]*o,t.y=n[3]*i+n[4]*r+n[5]*o,t.z=n[6]*i+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new _n);const n=this.elements,i=e.elements,r=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],f=n[7],g=n[8],_=i[0],m=i[1],p=i[2],v=i[3],x=i[4],y=i[5],w=i[6],C=i[7],A=i[8];return r[0]=o*_+a*v+l*w,r[1]=o*m+a*x+l*C,r[2]=o*p+a*y+l*A,r[3]=c*_+u*v+d*w,r[4]=c*m+u*x+d*C,r[5]=c*p+u*y+d*A,r[6]=h*_+f*v+g*w,r[7]=h*m+f*x+g*C,r[8]=h*p+f*y+g*A,t}scale(e,t){t===void 0&&(t=new _n);const n=this.elements,i=t.elements;for(let r=0;r!==3;r++)i[3*r+0]=e.x*n[3*r+0],i[3*r+1]=e.y*n[3*r+1],i[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new T);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3+4*0]=e.x,r[3+4*1]=e.y,r[3+4*2]=e.z;let l=3;const c=l;let u;const d=4;let h;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){u=d;do h=d-u,r[h+i*o]+=r[h+i*a];while(--u);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const f=r[o+i*a]/r[o+i*o];u=d;do h=d-u,r[h+i*a]=h<=o?0:r[h+i*a]-r[h+i*o]*f;while(--u)}}while(--l);if(t.z=r[2*i+3]/r[2*i+2],t.y=(r[1*i+3]-r[1*i+2]*t.z)/r[1*i+1],t.x=(r[0*i+3]-r[0*i+2]*t.z-r[0*i+1]*t.y)/r[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new _n);const t=3,n=6,i=Pb;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const u=n;let d;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=u;do d=u-c,i[d+n*r]+=i[d+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const h=i[r+n*o]/i[r+n*r];c=u;do d=u-c,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{const h=i[r+n*o]/i[r+n*r];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{const h=1/i[r+n*r];c=n;do d=n-c,i[d+n*r]=i[d+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(d=i[t+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,d)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,r=e.w,o=t+t,a=n+n,l=i+i,c=t*o,u=t*a,d=t*l,h=n*a,f=n*l,g=i*l,_=r*o,m=r*a,p=r*l,v=this.elements;return v[3*0+0]=1-(h+g),v[3*0+1]=u-p,v[3*0+2]=d+m,v[3*1+0]=u+p,v[3*1+1]=1-(c+g),v[3*1+2]=f-_,v[3*2+0]=d-m,v[3*2+1]=f+_,v[3*2+2]=1-(c+h),this}transpose(e){e===void 0&&(e=new _n);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Pb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class T{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new T);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*i,t.y=l*n-o*r,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new T(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new T(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new _n([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new T);const t=this.x,n=this.y,i=this.z;let r=Math.sqrt(t*t+n*n+i*i);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=i*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new T);const n=this.x,i=this.y,r=this.z;return t.x=e*n,t.y=e*i,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new T),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new T),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new T),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=Ib,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=Nb;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,r=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Kh),Kh.almostEquals(e,t)}clone(){return new T(this.x,this.y,this.z)}}T.ZERO=new T(0,0,0);T.UNIT_X=new T(1,0,0);T.UNIT_Y=new T(0,1,0);T.UNIT_Z=new T(0,0,1);const Ib=new T,Nb=new T,Kh=new T;class nn{constructor(e){e===void 0&&(e={}),this.lowerBound=new T,this.upperBound=new T,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Zh),c=Zh),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new nn().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound,o=i.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound;return t.x<=i.x&&n.x>=r.x&&t.y<=i.y&&n.y>=r.y&&t.z<=i.z&&n.z>=r.z}getCorners(e,t,n,i,r,o,a,l){const c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){const n=Jh,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Jh,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(g<0||f>g)}}const Zh=new T,Jh=[new T,new T,new T,new T,new T,new T,new T,new T];class Qh{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:r}=t;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Yf{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,e)}return this}}class mt{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new T),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Db,i=Ub;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new mt);const n=this.x,i=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,u=e.w;return t.x=n*u+o*a+i*c-r*l,t.y=i*u+o*l+r*a-n*c,t.z=r*u+o*c+n*l-i*a,t.w=o*u-n*a-i*l-r*c,t}inverse(e){e===void 0&&(e=new mt);const t=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new mt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new T);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*i,d=c*i+l*n-o*r,h=c*r+o*i-a*n,f=-o*n-a*i-l*r;return t.x=u*c+f*-o+d*-l-h*-a,t.y=d*c+f*-a+h*-o-u*-l,t.z=h*c+f*-l+u*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const d=o*o,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),i=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=r}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):i==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):i==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):i==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):i==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):i==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new mt(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new mt);const i=this.x,r=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,u=e.z,d=e.w,h,f,g,_,m;return f=i*l+r*c+o*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),g=Math.sin(h),_=Math.sin((1-t)*h)/g,m=Math.sin(t*h)/g):(_=1-t,m=t),n.x=_*i+m*l,n.y=_*r+m*c,n.z=_*o+m*u,n.w=_*a+m*d,n}integrate(e,t,n,i){i===void 0&&(i=new mt);const r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=t*.5;return i.x+=h*(r*d+o*u-a*c),i.y+=h*(o*d+a*l-r*u),i.z+=h*(a*d+r*c-o*l),i.w+=h*(-r*l-o*c-a*u),i}}const Db=new T,Ub=new T,Fb={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Se{constructor(e){e===void 0&&(e={}),this.id=Se.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Se.idCounter=0;Se.types=Fb;class Qe{constructor(e){e===void 0&&(e={}),this.position=new T,this.quaternion=new mt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Qe.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Qe.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new T),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new T),n.vsub(e,i),t.conjugate(ed),ed.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new T),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new T),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new T),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const ed=new mt;class br extends Se{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=e;super({type:Se.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new T;for(let r=0;r!==e.length;r++){const o=e[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new T;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];br.computeNormal(i,r,o,t)}static computeNormal(e,t,n,i){const r=new T,o=new T;t.vsub(e,o),n.vsub(t,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,r,o,a,l,c){const u=new T;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),r.vmult(u,u);const _=u.dot(o);_>h&&(h=_,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],m=new T;m.copy(_),r.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,i,r,o,a,l){const c=new T,u=new T,d=new T,h=new T,f=new T,g=new T;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const v=m.testSepAxis(c,e,t,n,i,r);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let v=0;v<p;v++){const x=a?a[v]:v;c.copy(m.faceNormals[x]),n.vmult(c,c);const y=m.testSepAxis(c,e,t,n,i,r);if(y===!1)return!1;y<_&&(_=y,o.copy(c))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){r.vmult(e.uniqueAxes[p],u);const v=m.testSepAxis(u,e,t,n,i,r);if(v===!1)return!1;v<_&&(_=v,o.copy(u))}else{const p=l?l.length:e.faces.length;for(let v=0;v<p;v++){const x=l?l[v]:v;u.copy(e.faceNormals[x]),r.vmult(u,u);const y=m.testSepAxis(u,e,t,n,i,r);if(y===!1)return!1;y<_&&(_=y,o.copy(u))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],h);for(let v=0;v!==e.uniqueEdges.length;v++)if(r.vmult(e.uniqueEdges[v],f),h.cross(f,g),!g.almostZero()){g.normalize();const x=m.testSepAxis(g,e,t,n,i,r);if(x===!1)return!1;x<_&&(_=x,o.copy(g))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,r,o){const a=this;br.project(a,e,n,i,el),br.project(t,e,r,o,tl);const l=el[0],c=el[1],u=tl[0],d=tl[1];if(l<d||u<c)return!1;const h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(e,t){const n=new T,i=new T;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,r,o,a){const l=new T,c=new T,u=new T,d=new T,h=new T,f=new T,g=new T,_=new T,m=this,p=[],v=i,x=p;let y=-1,w=Number.MAX_VALUE;for(let S=0;S<m.faces.length;S++){l.copy(m.faceNormals[S]),n.vmult(l,l);const V=l.dot(e);V<w&&(w=V,y=S)}if(y<0)return;const C=m.faces[y];C.connectedFaces=[];for(let S=0;S<m.faces.length;S++)for(let V=0;V<m.faces[S].length;V++)C.indexOf(m.faces[S][V])!==-1&&S!==y&&C.connectedFaces.indexOf(S)===-1&&C.connectedFaces.push(S);const A=C.length;for(let S=0;S<A;S++){const V=m.vertices[C[S]],B=m.vertices[C[(S+1)%A]];V.vsub(B,c),u.copy(c),n.vmult(u,u),t.vadd(u,u),d.copy(this.faceNormals[y]),n.vmult(d,d),t.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(V),n.vmult(f,f),t.vadd(f,f);const L=C.connectedFaces[S];g.copy(this.faceNormals[L]);const N=this.getPlaneConstantOfFace(L);_.copy(g),n.vmult(_,_);const D=N-_.dot(t);for(this.clipFaceAgainstPlane(v,x,_,D);v.length;)v.shift();for(;x.length;)v.push(x.shift())}g.copy(this.faceNormals[y]);const I=this.getPlaneConstantOfFace(y);_.copy(g),n.vmult(_,_);const M=I-_.dot(t);for(let S=0;S<v.length;S++){let V=_.dot(v[S])+M;if(V<=r&&(console.log(`clamped: depth=${V} to minDist=${r}`),V=r),V<=o){const B=v[S];if(V<=1e-6){const L={point:B,normal:_,depth:V};a.push(L)}}}}clipFaceAgainstPlane(e,t,n,i){let r,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=n.dot(l)+i;for(let u=0;u<a;u++){if(c=e[u],o=n.dot(c)+i,r<0)if(o<0){const d=new T;d.copy(c),t.push(d)}else{const d=new T;l.lerp(c,r/(r-o),d),t.push(d)}else if(o<0){const d=new T;l.lerp(c,r/(r-o),d),t.push(d),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new T);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],i[r]),e.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new T);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const r=this.vertices;let o,a,l,c,u,d,h=new T;for(let f=0;f<r.length;f++){h.copy(r[f]),t.vmult(h,h),e.vadd(h,h);const g=h;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,l),i.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new T);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let r=0;r<n;r++){const o=i[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){const o=i[r];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,r=null,o=new T;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a];const c=t[n[a][0]],u=new T;e.vsub(c,u);const d=l.dot(u),h=new T;o.vsub(c,h);const f=l.dot(h);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(e,t,n,i,r){const o=e.vertices.length,a=Ob;let l=0,c=0;const u=Bb,d=e.vertices;u.setZero(),Qe.vectorToLocalFrame(n,i,t,a),Qe.pointToLocalFrame(n,i,u,u);const h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}r[0]=l,r[1]=c}}const el=[],tl=[];new T;const Ob=new T,Bb=new T;class sa extends Se{constructor(e){super({type:Se.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=T,r=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new br({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new T),sa.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)di.set(r[o][0],r[o][1],r[o][2]),t.vmult(di,di),e.vadd(di,di),n(di.x,di.y,di.z)}calculateWorldAABB(e,t,n,i){const r=this.halfExtents;bn[0].set(r.x,r.y,r.z),bn[1].set(-r.x,r.y,r.z),bn[2].set(-r.x,-r.y,r.z),bn[3].set(-r.x,-r.y,-r.z),bn[4].set(r.x,-r.y,-r.z),bn[5].set(r.x,r.y,-r.z),bn[6].set(-r.x,r.y,-r.z),bn[7].set(r.x,-r.y,r.z);const o=bn[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=bn[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,u=l.y,d=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),d>i.z&&(i.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const di=new T,bn=[new T,new T,new T,new T,new T,new T,new T,new T],gc={DYNAMIC:1,STATIC:2,KINEMATIC:4},_c={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ae extends Yf{constructor(e){e===void 0&&(e={}),super(),this.id=Ae.idCounter++,this.index=-1,this.world=null,this.vlambda=new T,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new T,this.previousPosition=new T,this.interpolatedPosition=new T,this.initPosition=new T,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new T,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new T,this.force=new T;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?Ae.STATIC:Ae.DYNAMIC,typeof e.type==typeof Ae.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=Ae.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new T,this.quaternion=new mt,this.initQuaternion=new mt,this.previousQuaternion=new mt,this.interpolatedQuaternion=new mt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new T,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new T,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new T,this.invInertia=new T,this.invInertiaWorld=new _n,this.invMassSolve=0,this.invInertiaSolve=new T,this.invInertiaWorldSolve=new _n,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new T(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new T(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new nn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new T,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=Ae.AWAKE,this.wakeUpAfterNarrowphase=!1,e===Ae.SLEEPING&&this.dispatchEvent(Ae.wakeupEvent)}sleep(){this.sleepState=Ae.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===Ae.AWAKE&&n<i?(this.sleepState=Ae.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(Ae.sleepyEvent)):t===Ae.SLEEPY&&n>i?this.wakeUp():t===Ae.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ae.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ae.SLEEPING||this.type===Ae.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new T),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new T),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new T),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new T),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new T,r=new mt;return t&&i.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let r=0;r!==n;r++){const o=e[r];o.updateBoundingSphereRadius();const a=t[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,r=zb,o=Hb,a=this.quaternion,l=this.aabb,c=kb;for(let u=0;u!==i;u++){const d=e[u];a.vmult(t[u],r),r.vadd(this.position,r),a.mult(n[u],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Vb,i=Gb;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new T),this.type!==Ae.DYNAMIC)return;this.sleepState===Ae.SLEEPING&&this.wakeUp();const n=Xb;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new T),this.type!==Ae.DYNAMIC)return;const n=qb,i=jb;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===Ae.DYNAMIC&&(this.sleepState===Ae.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new T),this.type!==Ae.DYNAMIC)return;this.sleepState===Ae.SLEEPING&&this.wakeUp();const n=t,i=Yb;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=$b;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new T),this.type!==Ae.DYNAMIC)return;const n=Kb,i=Zb;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=Jb;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),sa.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new T;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ae.DYNAMIC||this.type===Ae.KINEMATIC)||this.sleepState===Ae.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*e;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const g=d.elements,_=this.angularFactor,m=l.x*_.x,p=l.y*_.y,v=l.z*_.z;r.x+=e*(g[0]*m+g[1]*p+g[2]*v),r.y+=e*(g[3]*m+g[4]*p+g[5]*v),r.z+=e*(g[6]*m+g[7]*p+g[8]*v),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ae.idCounter=0;Ae.COLLIDE_EVENT_NAME="collide";Ae.DYNAMIC=gc.DYNAMIC;Ae.STATIC=gc.STATIC;Ae.KINEMATIC=gc.KINEMATIC;Ae.AWAKE=_c.AWAKE;Ae.SLEEPY=_c.SLEEPY;Ae.SLEEPING=_c.SLEEPING;Ae.wakeupEvent={type:"wakeup"};Ae.sleepyEvent={type:"sleepy"};Ae.sleepEvent={type:"sleep"};const zb=new T,Hb=new mt,kb=new nn,Vb=new _n,Gb=new _n,Wb=new _n,Xb=new T,qb=new T,jb=new T,Yb=new T,$b=new T,Kb=new T,Zb=new T,Jb=new T;class Qb{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&Ae.STATIC||e.sleepState===Ae.SLEEPING)&&(t.type&Ae.STATIC||t.sleepState===Ae.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const r=eS;t.position.vsub(e.position,r);const o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=tS,i=nS,r=iS,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(r[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new T;e.position.vsub(t.position,n);const i=e.shapes[0],r=t.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const eS=new T;new T;new mt;new T;const tS={keys:[]},nS=[],iS=[];new T;new T;new T;class sS extends Qb{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const r=e.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}}class Vo{constructor(){this.rayFromWorld=new T,this.rayToWorld=new T,this.hitNormalWorld=new T,this.hitPointWorld=new T,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let $f,Kf,Zf,Jf,Qf,ep,tp;const vc={CLOSEST:1,ANY:2,ALL:4};$f=Se.types.SPHERE;Kf=Se.types.PLANE;Zf=Se.types.BOX;Jf=Se.types.CYLINDER;Qf=Se.types.CONVEXPOLYHEDRON;ep=Se.types.HEIGHTFIELD;tp=Se.types.TRIMESH;class xt{get[$f](){return this._intersectSphere}get[Kf](){return this._intersectPlane}get[Zf](){return this._intersectBox}get[Jf](){return this._intersectConvex}get[Qf](){return this._intersectConvex}get[ep](){return this._intersectHeightfield}get[tp](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new T),t===void 0&&(t=new T),this.from=e.clone(),this.to=t.clone(),this.direction=new T,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=xt.ANY,this.result=new Vo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||xt.ANY,this.result=t.result||new Vo,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(td),nl.length=0,e.broadphase.aabbQuery(e,td,nl),this.intersectBodies(nl),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=rS,r=oS;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,r,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const r=this.from;if(yS(r,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,r)}_intersectPlane(e,t,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new T(0,0,1);t.vmult(c,c);const u=new T;o.vsub(n,u);const d=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(d*h>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new T,_=new T,m=new T;o.vsub(n,g);const p=-c.dot(g)/f;l.scale(p,_),o.vadd(_,m),this.reportIntersection(c,m,r,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,r=this.from;t.x=Math.min(i.x,r.x),t.y=Math.min(i.y,r.y),t.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(e,t,n,i,r){e.data,e.elementSize;const o=aS;o.from.copy(this.from),o.to.copy(this.to),Qe.pointToLocalFrame(n,t,o.from,o.from),Qe.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=lS;let l,c,u,d;l=c=0,u=d=e.data.length-1;const h=new nn;o.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,h),!!h.overlapsRay(o)){if(e.getConvexTrianglePillar(f,g,!1),Qe.pointToWorldFrame(n,t,e.pillarOffset,Eo),this._intersectConvex(e.pillarConvex,t,Eo,i,r,nd),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),Qe.pointToWorldFrame(n,t,e.pillarOffset,Eo),this._intersectConvex(e.pillarConvex,t,Eo,i,r,nd)}}}_intersectSphere(e,t,n,i,r){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*d,f=cS,g=uS;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1);else{const _=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1))}}_intersectConvex(e,t,n,i,r,o){const a=hS,l=id,c=o&&o.faceList||null,u=e.faces,d=e.vertices,h=e.faceNormals,f=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),p=c?c.length:u.length,v=this.result;for(let x=0;!v.shouldStop&&x<p;x++){const y=c?c[x]:x,w=u[y],C=h[y],A=t,I=n;l.copy(d[w[0]]),A.vmult(l,l),l.vadd(I,l),l.vsub(g,l),A.vmult(C,a);const M=f.dot(a);if(Math.abs(M)<this.precision)continue;const S=a.dot(l)/M;if(!(S<0)){f.scale(S,qt),qt.vadd(g,qt),dn.copy(d[w[0]]),A.vmult(dn,dn),I.vadd(dn,dn);for(let V=1;!v.shouldStop&&V<w.length-1;V++){Sn.copy(d[w[V]]),Tn.copy(d[w[V+1]]),A.vmult(Sn,Sn),A.vmult(Tn,Tn),I.vadd(Sn,Sn),I.vadd(Tn,Tn);const B=qt.distanceTo(g);!(xt.pointInTriangle(qt,dn,Sn,Tn)||xt.pointInTriangle(qt,Sn,dn,Tn))||B>m||this.reportIntersection(a,qt,r,i,y)}}}}_intersectTrimesh(e,t,n,i,r,o){const a=dS,l=vS,c=xS,u=id,d=fS,h=pS,f=mS,g=_S,_=gS,m=e.indices;e.vertices;const p=this.from,v=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(t),Qe.vectorToLocalFrame(n,t,x,d),Qe.pointToLocalFrame(n,t,p,h),Qe.pointToLocalFrame(n,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,d),d.normalize();const y=h.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let w=0,C=l.length;!this.result.shouldStop&&w!==C;w++){const A=l[w];e.getNormal(A,a),e.getVertex(m[A*3],dn),dn.vsub(h,u);const I=d.dot(a),M=a.dot(u)/I;if(M<0)continue;d.scale(M,qt),qt.vadd(h,qt),e.getVertex(m[A*3+1],Sn),e.getVertex(m[A*3+2],Tn);const S=qt.distanceSquared(h);!(xt.pointInTriangle(qt,Sn,dn,Tn)||xt.pointInTriangle(qt,dn,Sn,Tn))||S>y||(Qe.vectorToWorldFrame(t,a,_),Qe.pointToWorldFrame(n,t,qt,g),this.reportIntersection(_,g,r,i,A))}l.length=0}reportIntersection(e,t,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case xt.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case xt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case xt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,zi),n.vsub(t,ur),e.vsub(t,il);const r=zi.dot(zi),o=zi.dot(ur),a=zi.dot(il),l=ur.dot(ur),c=ur.dot(il);let u,d;return(u=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&u+d<r*l-o*o}}xt.CLOSEST=vc.CLOSEST;xt.ANY=vc.ANY;xt.ALL=vc.ALL;const td=new nn,nl=[],ur=new T,il=new T,rS=new T,oS=new mt,qt=new T,dn=new T,Sn=new T,Tn=new T;new T;new Vo;const nd={faceList:[0]},Eo=new T,aS=new xt,lS=[],cS=new T,uS=new T,hS=new T;new T;new T;const id=new T,dS=new T,fS=new T,pS=new T,mS=new T,gS=new T,_S=new T;new nn;const vS=[],xS=new Qe,zi=new T,bo=new T;function yS(s,e,t){t.vsub(s,zi);const n=zi.dot(e);return e.scale(n,bo),bo.vadd(s,bo),t.distanceTo(bo)}class MS{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class sd{constructor(){this.spatial=new T,this.rotational=new T}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Or{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Or.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new sd,this.jacobianElementB=new sd,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,r=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return r.scale(c,rd),a.scale(u,od),n.invInertiaWorldSolve.vmult(o,ad),i.invInertiaWorldSolve.vmult(l,ld),e.multiplyVectors(rd,ad)+t.multiplyVectors(od,ld)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(e.rotational,So),c+=So.dot(e.rotational),l.vmult(t.rotational,So),c+=So.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=ES;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Or.idCounter=0;const rd=new T,od=new T,ad=new T,ld=new T,So=new T,ES=new T;class bS extends Or{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new T,this.rj=new T,this.ni=new T}computeB(e){const t=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=SS,c=TS,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=r.velocity,f=r.angularVelocity;r.force,r.torque;const g=wS,_=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const v=p.dot(g),x=this.restitution+1,y=x*h.dot(p)-x*u.dot(p)+f.dot(c)-d.dot(l),w=this.computeGiMf();return-v*t-y*n-e*w}getImpactVelocityAlongNormal(){const e=AS,t=RS,n=CS,i=LS,r=PS;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,r),this.ni.dot(r)}}const SS=new T,TS=new T,wS=new T,AS=new T,RS=new T,CS=new T,LS=new T,PS=new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;class cd extends Or{constructor(e,t,n){super(e,t,-n,n),this.ri=new T,this.rj=new T,this.t=new T}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=IS,o=NS,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),d=this.computeGiMf();return-u*t-e*d}}const IS=new T,NS=new T;class Br{constructor(e,t,n){n=MS.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Br.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Br.idCounter=0;class zr{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=zr.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}zr.idCounter=0;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new xt;new T;new T;new T;new T(1,0,0),new T(0,1,0),new T(0,0,1);new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;class DS extends Se{constructor(){super({type:Se.types.PLANE}),this.worldNormal=new T,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new T),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){Xn.set(0,0,1),t.vmult(Xn,Xn);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),Xn.x===1?i.x=e.x:Xn.x===-1&&(n.x=e.x),Xn.y===1?i.y=e.y:Xn.y===-1&&(n.y=e.y),Xn.z===1?i.z=e.z:Xn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Xn=new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new nn;new T;new nn;new T;new T;new T;new T;new T;new T;new T;new nn;new T;new Qe;new nn;class US{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class FS extends US{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,u=e;let d,h,f,g,_,m;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const p=BS,v=zS,x=OS;p.length=a,v.length=a,x.length=a;for(let y=0;y!==a;y++){const w=o[y];x[y]=0,v[y]=w.computeB(u),p[y]=1/w.computeC()}if(a!==0){for(let C=0;C!==c;C++){const A=l[C],I=A.vlambda,M=A.wlambda;I.set(0,0,0),M.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let C=0;C!==a;C++){const A=o[C];d=v[C],h=p[C],m=x[C],_=A.computeGWlambda(),f=h*(d-_-A.eps*m),m+f<A.minForce?f=A.minForce-m:m+f>A.maxForce&&(f=A.maxForce-m),x[C]+=f,g+=f>0?f:-f,A.addToWlambda(f)}if(g*g<r)break}for(let C=0;C!==c;C++){const A=l[C],I=A.velocity,M=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),I.vadd(A.vlambda,I),A.wlambda.vmul(A.angularFactor,A.wlambda),M.vadd(A.wlambda,M)}let y=o.length;const w=1/u;for(;y--;)o[y].multiplier=x[y]*w}return n}}const OS=[],BS=[],zS=[];Ae.STATIC;class HS{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class kS extends HS{constructor(){super(...arguments),this.type=T}constructObject(){return new T}}const lt={sphereSphere:Se.types.SPHERE,spherePlane:Se.types.SPHERE|Se.types.PLANE,boxBox:Se.types.BOX|Se.types.BOX,sphereBox:Se.types.SPHERE|Se.types.BOX,planeBox:Se.types.PLANE|Se.types.BOX,convexConvex:Se.types.CONVEXPOLYHEDRON,sphereConvex:Se.types.SPHERE|Se.types.CONVEXPOLYHEDRON,planeConvex:Se.types.PLANE|Se.types.CONVEXPOLYHEDRON,boxConvex:Se.types.BOX|Se.types.CONVEXPOLYHEDRON,sphereHeightfield:Se.types.SPHERE|Se.types.HEIGHTFIELD,boxHeightfield:Se.types.BOX|Se.types.HEIGHTFIELD,convexHeightfield:Se.types.CONVEXPOLYHEDRON|Se.types.HEIGHTFIELD,sphereParticle:Se.types.PARTICLE|Se.types.SPHERE,planeParticle:Se.types.PLANE|Se.types.PARTICLE,boxParticle:Se.types.BOX|Se.types.PARTICLE,convexParticle:Se.types.PARTICLE|Se.types.CONVEXPOLYHEDRON,cylinderCylinder:Se.types.CYLINDER,sphereCylinder:Se.types.SPHERE|Se.types.CYLINDER,planeCylinder:Se.types.PLANE|Se.types.CYLINDER,boxCylinder:Se.types.BOX|Se.types.CYLINDER,convexCylinder:Se.types.CONVEXPOLYHEDRON|Se.types.CYLINDER,heightfieldCylinder:Se.types.HEIGHTFIELD|Se.types.CYLINDER,particleCylinder:Se.types.PARTICLE|Se.types.CYLINDER,sphereTrimesh:Se.types.SPHERE|Se.types.TRIMESH,planeTrimesh:Se.types.PLANE|Se.types.TRIMESH};class VS{get[lt.sphereSphere](){return this.sphereSphere}get[lt.spherePlane](){return this.spherePlane}get[lt.boxBox](){return this.boxBox}get[lt.sphereBox](){return this.sphereBox}get[lt.planeBox](){return this.planeBox}get[lt.convexConvex](){return this.convexConvex}get[lt.sphereConvex](){return this.sphereConvex}get[lt.planeConvex](){return this.planeConvex}get[lt.boxConvex](){return this.boxConvex}get[lt.sphereHeightfield](){return this.sphereHeightfield}get[lt.boxHeightfield](){return this.boxHeightfield}get[lt.convexHeightfield](){return this.convexHeightfield}get[lt.sphereParticle](){return this.sphereParticle}get[lt.planeParticle](){return this.planeParticle}get[lt.boxParticle](){return this.boxParticle}get[lt.convexParticle](){return this.convexParticle}get[lt.cylinderCylinder](){return this.convexConvex}get[lt.sphereCylinder](){return this.sphereConvex}get[lt.planeCylinder](){return this.planeConvex}get[lt.boxCylinder](){return this.boxConvex}get[lt.convexCylinder](){return this.convexConvex}get[lt.heightfieldCylinder](){return this.heightfieldCylinder}get[lt.particleCylinder](){return this.particleCylinder}get[lt.sphereTrimesh](){return this.sphereTrimesh}get[lt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new kS,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new bS(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,u=i.material||t.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||n.material,d=o.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,_=g.length?g.pop():new cd(n,i,h*f),m=g.length?g.pop():new cd(n,i,h*f);return _.bi=m.bi=n,_.bj=m.bj=i,_.minForce=m.minForce=-h*f,_.maxForce=m.maxForce=h*f,_.ri.copy(e.ri),_.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=m.enabled=e.enabled,t.push(_,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Di.setZero(),Ms.setZero(),Es.setZero();const r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(Di.vadd(t.ni,Di),Ms.vadd(t.ri,Ms),Es.vadd(t.rj,Es)):(Di.vsub(t.ni,Di),Ms.vadd(t.rj,Ms),Es.vadd(t.ri,Es));const o=1/e;Ms.scale(o,n.ri),Es.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Di.normalize(),Di.tangents(n.t,i.t)}getContacts(e,t,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=XS,c=qS,u=GS,d=WS;for(let h=0,f=e.length;h!==f;h++){const g=e[h],_=t[h];let m=null;g.material&&_.material&&(m=n.getContactMaterial(g.material,_.material)||null);const p=g.type&Ae.KINEMATIC&&_.type&Ae.STATIC||g.type&Ae.STATIC&&_.type&Ae.KINEMATIC||g.type&Ae.KINEMATIC&&_.type&Ae.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const x=g.shapes[v];for(let y=0;y<_.shapes.length;y++){_.quaternion.mult(_.shapeOrientations[y],c),_.quaternion.vmult(_.shapeOffsets[y],d),d.vadd(_.position,d);const w=_.shapes[y];if(!(x.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&x.collisionFilterGroup)||u.distanceTo(d)>x.boundingSphereRadius+w.boundingSphereRadius)continue;let C=null;x.material&&w.material&&(C=n.getContactMaterial(x.material,w.material)||null),this.currentContactMaterial=C||m||n.defaultContactMaterial;const A=x.type|w.type,I=this[A];if(I){let M=!1;x.type<w.type?M=I.call(this,x,w,u,d,l,c,g,_,x,w,p):M=I.call(this,w,x,d,u,c,l,_,g,x,w,p),M&&p&&(n.shapeOverlapKeeper.set(x.id,w.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(e,t,n,i,r,o,a,l,c,u,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const h=this.createContactEquation(a,l,e,t,c,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,n,i,r,o,a,l,c,u,d){const h=this.createContactEquation(a,l,e,t,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),n.vsub(i,To),h.ni.scale(h.ni.dot(To),ud),To.vsub(ud,h.rj),-To.dot(h.ni)<=e.radius){if(d)return!0;const f=h.ri,g=h.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,n,i,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,d)}sphereBox(e,t,n,i,r,o,a,l,c,u,d){const h=this.v3pool,f=vT;n.vsub(i,wo),t.getSideNormals(f,o);const g=e.radius;let _=!1;const m=yT,p=MT,v=ET;let x=null,y=0,w=0,C=0,A=null;for(let U=0,W=f.length;U!==W&&_===!1;U++){const X=mT;X.copy(f[U]);const ee=X.length();X.normalize();const se=wo.dot(X);if(se<ee+g&&se>0){const j=gT,G=_T;j.copy(f[(U+1)%3]),G.copy(f[(U+2)%3]);const _e=j.length(),Me=G.length();j.normalize(),G.normalize();const we=wo.dot(j),Re=wo.dot(G);if(we<_e&&we>-_e&&Re<Me&&Re>-Me){const Pe=Math.abs(se-ee-g);if((A===null||Pe<A)&&(A=Pe,w=we,C=Re,x=ee,m.copy(X),p.copy(j),v.copy(G),y++,d))return!0}}}if(y){_=!0;const U=this.createContactEquation(a,l,e,t,c,u);m.scale(-g,U.ri),U.ni.copy(m),U.ni.negate(U.ni),m.scale(x,m),p.scale(w,p),m.vadd(p,m),v.scale(C,v),m.vadd(v,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let I=h.get();const M=xT;for(let U=0;U!==2&&!_;U++)for(let W=0;W!==2&&!_;W++)for(let X=0;X!==2&&!_;X++)if(I.set(0,0,0),U?I.vadd(f[0],I):I.vsub(f[0],I),W?I.vadd(f[1],I):I.vsub(f[1],I),X?I.vadd(f[2],I):I.vsub(f[2],I),i.vadd(I,M),M.vsub(n,M),M.lengthSquared()<g*g){if(d)return!0;_=!0;const ee=this.createContactEquation(a,l,e,t,c,u);ee.ri.copy(M),ee.ri.normalize(),ee.ni.copy(ee.ri),ee.ri.scale(g,ee.ri),ee.rj.copy(I),ee.ri.vadd(n,ee.ri),ee.ri.vsub(a.position,ee.ri),ee.rj.vadd(i,ee.rj),ee.rj.vsub(l.position,ee.rj),this.result.push(ee),this.createFrictionEquationsFromContact(ee,this.frictionResult)}h.release(I),I=null;const S=h.get(),V=h.get(),B=h.get(),L=h.get(),N=h.get(),D=f.length;for(let U=0;U!==D&&!_;U++)for(let W=0;W!==D&&!_;W++)if(U%3!==W%3){f[W].cross(f[U],S),S.normalize(),f[U].vadd(f[W],V),B.copy(n),B.vsub(V,B),B.vsub(i,B);const X=B.dot(S);S.scale(X,L);let ee=0;for(;ee===U%3||ee===W%3;)ee++;N.copy(n),N.vsub(L,N),N.vsub(V,N),N.vsub(i,N);const se=Math.abs(X),j=N.length();if(se<f[ee].length()&&j<g){if(d)return!0;_=!0;const G=this.createContactEquation(a,l,e,t,c,u);V.vadd(L,G.rj),G.rj.copy(G.rj),N.negate(G.ni),G.ni.normalize(),G.ri.copy(G.rj),G.ri.vadd(i,G.ri),G.ri.vsub(n,G.ri),G.ri.normalize(),G.ri.scale(g,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),G.rj.vadd(i,G.rj),G.rj.vsub(l.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}h.release(S,V,B,L,N)}planeBox(e,t,n,i,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,d)}convexConvex(e,t,n,i,r,o,a,l,c,u,d,h,f){const g=OT;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,i,o,g,h,f)){const _=[],m=BT;e.clipAgainstHull(n,r,t,i,o,g,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(d)return!0;const x=this.createContactEquation(a,l,e,t,c,u),y=x.ri,w=x.rj;g.negate(x.ni),_[v].normal.negate(m),m.scale(_[v].depth,m),_[v].point.vadd(m,y),w.copy(_[v].point),y.vsub(n,y),w.vsub(i,w),y.vadd(n,y),y.vsub(a.position,y),w.vadd(i,w),w.vsub(l.position,w),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,n,i,r,o,a,l,c,u,d){const h=this.v3pool;n.vsub(i,bT);const f=t.faceNormals,g=t.faces,_=t.vertices,m=e.radius;let p=!1;for(let v=0;v!==_.length;v++){const x=_[v],y=AT;o.vmult(x,y),i.vadd(y,y);const w=wT;if(y.vsub(n,w),w.lengthSquared()<m*m){if(d)return!0;p=!0;const C=this.createContactEquation(a,l,e,t,c,u);C.ri.copy(w),C.ri.normalize(),C.ni.copy(C.ri),C.ri.scale(m,C.ri),y.vsub(i,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),C.rj.vadd(i,C.rj),C.rj.vsub(l.position,C.rj),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);return}}for(let v=0,x=g.length;v!==x&&p===!1;v++){const y=f[v],w=g[v],C=RT;o.vmult(y,C);const A=CT;o.vmult(_[w[0]],A),A.vadd(i,A);const I=LT;C.scale(-m,I),n.vadd(I,I);const M=PT;I.vsub(A,M);const S=M.dot(C),V=IT;if(n.vsub(A,V),S<0&&V.dot(C)>0){const B=[];for(let L=0,N=w.length;L!==N;L++){const D=h.get();o.vmult(_[w[L]],D),i.vadd(D,D),B.push(D)}if(pT(B,C,n)){if(d)return!0;p=!0;const L=this.createContactEquation(a,l,e,t,c,u);C.scale(-m,L.ri),C.negate(L.ni);const N=h.get();C.scale(-S,N);const D=h.get();C.scale(-m,D),n.vsub(i,L.rj),L.rj.vadd(D,L.rj),L.rj.vadd(N,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(l.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),h.release(N),h.release(D),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let U=0,W=B.length;U!==W;U++)h.release(B[U]);return}else for(let L=0;L!==w.length;L++){const N=h.get(),D=h.get();o.vmult(_[w[(L+1)%w.length]],N),o.vmult(_[w[(L+2)%w.length]],D),i.vadd(N,N),i.vadd(D,D);const U=ST;D.vsub(N,U);const W=TT;U.unit(W);const X=h.get(),ee=h.get();n.vsub(N,ee);const se=ee.dot(W);W.scale(se,X),X.vadd(N,X);const j=h.get();if(X.vsub(n,j),se>0&&se*se<U.lengthSquared()&&j.lengthSquared()<m*m){if(d)return!0;const G=this.createContactEquation(a,l,e,t,c,u);X.vsub(i,G.rj),X.vsub(n,G.ni),G.ni.normalize(),G.ni.scale(m,G.ri),G.rj.vadd(i,G.rj),G.rj.vsub(l.position,G.rj),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult);for(let _e=0,Me=B.length;_e!==Me;_e++)h.release(B[_e]);h.release(N),h.release(D),h.release(X),h.release(j),h.release(ee);return}h.release(N),h.release(D),h.release(X),h.release(j),h.release(ee)}for(let L=0,N=B.length;L!==N;L++)h.release(B[L])}}}planeConvex(e,t,n,i,r,o,a,l,c,u,d){const h=NT,f=DT;f.set(0,0,1),r.vmult(f,f);let g=0;const _=UT;for(let m=0;m!==t.vertices.length;m++)if(h.copy(t.vertices[m]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,_),f.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,c,u),x=FT;f.scale(f.dot(_),x),h.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(f),h.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}sphereHeightfield(e,t,n,i,r,o,a,l,c,u,d){const h=t.data,f=e.radius,g=t.elementSize,_=KT,m=$T;Qe.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,v=Math.ceil((m.x+f)/g)+1,x=Math.floor((m.y-f)/g)-1,y=Math.ceil((m.y+f)/g)+1;if(v<0||y<0||p>h.length||x>h[0].length)return;p<0&&(p=0),v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),p>=h.length&&(p=h.length-1),v>=h.length&&(v=h.length-1),y>=h[0].length&&(y=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const w=[];t.getRectMinMax(p,x,v,y,w);const C=w[0],A=w[1];if(m.z-f>A||m.z+f<C)return;const I=this.result;for(let M=p;M<v;M++)for(let S=x;S<y;S++){const V=I.length;let B=!1;if(t.getConvexTrianglePillar(M,S,!1),Qe.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.sphereConvex(e,t.pillarConvex,n,_,r,o,a,l,e,t,d)),d&&B||(t.getConvexTrianglePillar(M,S,!0),Qe.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.sphereConvex(e,t.pillarConvex,n,_,r,o,a,l,e,t,d)),d&&B))return!0;if(I.length-V>2)return}}boxHeightfield(e,t,n,i,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}convexHeightfield(e,t,n,i,r,o,a,l,c,u,d){const h=t.data,f=t.elementSize,g=e.boundingSphereRadius,_=jT,m=YT,p=qT;Qe.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-g)/f)-1,x=Math.ceil((p.x+g)/f)+1,y=Math.floor((p.y-g)/f)-1,w=Math.ceil((p.y+g)/f)+1;if(x<0||w<0||v>h.length||y>h[0].length)return;v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),w<0&&(w=0),v>=h.length&&(v=h.length-1),x>=h.length&&(x=h.length-1),w>=h[0].length&&(w=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const C=[];t.getRectMinMax(v,y,x,w,C);const A=C[0],I=C[1];if(!(p.z-g>I||p.z+g<A))for(let M=v;M<x;M++)for(let S=y;S<w;S++){let V=!1;if(t.getConvexTrianglePillar(M,S,!1),Qe.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(V=this.convexConvex(e,t.pillarConvex,n,_,r,o,a,l,null,null,d,m,null)),d&&V||(t.getConvexTrianglePillar(M,S,!0),Qe.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(V=this.convexConvex(e,t.pillarConvex,n,_,r,o,a,l,null,null,d,m,null)),d&&V))return!0}}sphereParticle(e,t,n,i,r,o,a,l,c,u,d){const h=VT;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(l,a,t,e,c,u);h.normalize(),g.rj.copy(h),g.rj.scale(e.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,r,o,a,l,c,u,d){const h=zT;h.set(0,0,1),a.quaternion.vmult(h,h);const f=HT;if(i.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(l,a,t,e,c,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=kT;h.scale(h.dot(i),m),i.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(e,t,n,i,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}convexParticle(e,t,n,i,r,o,a,l,c,u,d){let h=-1;const f=WT,g=XT;let _=null;const m=GT;if(m.copy(i),m.vsub(n,m),r.conjugate(hd),hd.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let p=0,v=e.faces.length;p!==v;p++){const x=[e.worldVertices[e.faces[p][0]]],y=e.worldFaceNormals[p];i.vsub(x[0],dd);const w=-y.dot(dd);if(_===null||Math.abs(w)<Math.abs(_)){if(d)return!0;_=w,h=p,f.copy(y)}}if(h!==-1){const p=this.createContactEquation(l,a,t,e,c,u);f.scale(_,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,x=p.rj;v.vadd(i,v),v.vsub(l.position,v),x.vadd(n,x),x.vsub(a.position,x),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,r,o,a,l,c,u,d){return this.convexHeightfield(t,e,i,n,o,r,l,a,c,u,d)}particleCylinder(e,t,n,i,r,o,a,l,c,u,d){return this.convexParticle(t,e,i,n,o,r,l,a,c,u,d)}sphereTrimesh(e,t,n,i,r,o,a,l,c,u,d){const h=eT,f=tT,g=nT,_=iT,m=sT,p=rT,v=cT,x=QS,y=ZS,w=uT;Qe.pointToLocalFrame(i,o,n,m);const C=e.radius;v.lowerBound.set(m.x-C,m.y-C,m.z-C),v.upperBound.set(m.x+C,m.y+C,m.z+C),t.getTrianglesInAABB(v,w);const A=JS,I=e.radius*e.radius;for(let L=0;L<w.length;L++)for(let N=0;N<3;N++)if(t.getVertex(t.indices[w[L]*3+N],A),A.vsub(m,y),y.lengthSquared()<=I){if(x.copy(A),Qe.pointToWorldFrame(i,o,x,A),A.vsub(n,y),d)return!0;let D=this.createContactEquation(a,l,e,t,c,u);D.ni.copy(y),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(e.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(A),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let L=0;L<w.length;L++)for(let N=0;N<3;N++){t.getVertex(t.indices[w[L]*3+N],h),t.getVertex(t.indices[w[L]*3+(N+1)%3],f),f.vsub(h,g),m.vsub(f,p);const D=p.dot(g);m.vsub(h,p);let U=p.dot(g);if(U>0&&D<0&&(m.vsub(h,p),_.copy(g),_.normalize(),U=p.dot(_),_.scale(U,p),p.vadd(h,p),p.distanceTo(m)<e.radius)){if(d)return!0;const X=this.createContactEquation(a,l,e,t,c,u);p.vsub(m,X.ni),X.ni.normalize(),X.ni.scale(e.radius,X.ri),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),Qe.pointToWorldFrame(i,o,p,p),p.vsub(l.position,X.rj),Qe.vectorToWorldFrame(o,X.ni,X.ni),Qe.vectorToWorldFrame(o,X.ri,X.ri),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}}const M=oT,S=aT,V=lT,B=KS;for(let L=0,N=w.length;L!==N;L++){t.getTriangleVertices(w[L],M,S,V),t.getNormal(w[L],B),m.vsub(M,p);let D=p.dot(B);if(B.scale(D,p),m.vsub(p,p),D=p.distanceTo(m),xt.pointInTriangle(p,M,S,V)&&D<e.radius){if(d)return!0;let U=this.createContactEquation(a,l,e,t,c,u);p.vsub(m,U.ni),U.ni.normalize(),U.ni.scale(e.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),Qe.pointToWorldFrame(i,o,p,p),p.vsub(l.position,U.rj),Qe.vectorToWorldFrame(o,U.ni,U.ni),Qe.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}w.length=0}planeTrimesh(e,t,n,i,r,o,a,l,c,u,d){const h=new T,f=jS;f.set(0,0,1),r.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,h);const _=new T;_.copy(h),Qe.pointToWorldFrame(i,o,_,h);const m=YS;if(h.vsub(n,m),f.dot(m)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,c,u);v.ni.copy(f);const x=$S;f.scale(m.dot(f),x),h.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Di=new T,Ms=new T,Es=new T,GS=new T,WS=new T,XS=new mt,qS=new mt,jS=new T,YS=new T,$S=new T,KS=new T,ZS=new T;new T;const JS=new T,QS=new T,eT=new T,tT=new T,nT=new T,iT=new T,sT=new T,rT=new T,oT=new T,aT=new T,lT=new T,cT=new nn,uT=[],To=new T,ud=new T,hT=new T,dT=new T,fT=new T;function pT(s,e,t){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=hT;s[(r+1)%i].vsub(o,a);const l=dT;a.cross(e,l);const c=fT;t.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const wo=new T,mT=new T,gT=new T,_T=new T,vT=[new T,new T,new T,new T,new T,new T],xT=new T,yT=new T,MT=new T,ET=new T,bT=new T,ST=new T,TT=new T,wT=new T,AT=new T,RT=new T,CT=new T,LT=new T,PT=new T,IT=new T;new T;new T;const NT=new T,DT=new T,UT=new T,FT=new T,OT=new T,BT=new T,zT=new T,HT=new T,kT=new T,VT=new T,hd=new mt,GT=new T;new T;const WT=new T,dd=new T,XT=new T,qT=new T,jT=new T,YT=[0],$T=new T,KT=new T;class fd{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=n[l];for(;u>i[a];)a++;c=u===i[a],c||pd(e,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=i[l];for(;u>n[a];)a++;c=n[a]===u,c||pd(t,u)}}}function pd(s,e){s.push((e&4294901760)>>16,e&65535)}const sl=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`;class ZT{constructor(){this.data={keys:[]}}get(e,t){const n=sl(e,t);return this.data[n]}set(e,t,n){const i=sl(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=sl(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class JT extends Yf{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new T,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new T,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new sS,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new FS,this.constraints=[],this.narrowphase=new VS(this),this.collisionMatrix=new Qh,this.collisionMatrixPrevious=new Qh,this.bodyOverlapKeeper=new fd,this.shapeOverlapKeeper=new fd,this.contactmaterials=[],this.contactMaterialTable=new ZT,this.defaultMaterial=new zr("default"),this.defaultContactMaterial=new Br(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Vo?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=xt.ALL,n.from=e,n.to=t,n.callback=i,rl.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=xt.ANY,n.from=e,n.to=t,n.result=i,rl.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=xt.CLOSEST,n.from=e,n.to=t,n.result=i,rl.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof Ae&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=bt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=bt.now();let r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(bt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=iw,i=sw,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=Ae.DYNAMIC;let h=-1/0;const f=this.constraints,g=nw;l.length();const _=l.x,m=l.y,p=l.z;let v=0;for(c&&(h=bt.now()),v=0;v!==r;v++){const L=o[v];if(L.type===d){const N=L.force,D=L.mass;N.x+=D*_,N.y+=D*m,N.z+=D*p}}for(let L=0,N=this.subsystems.length;L!==N;L++)this.subsystems[L].update();c&&(h=bt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=bt.now()-h);let x=f.length;for(v=0;v!==x;v++){const L=f[v];if(!L.collideConnected)for(let N=n.length-1;N>=0;N-=1)(L.bodyA===n[N]&&L.bodyB===i[N]||L.bodyB===n[N]&&L.bodyA===i[N])&&(n.splice(N,1),i.splice(N,1))}this.collisionMatrixTick(),c&&(h=bt.now());const y=tw,w=t.length;for(v=0;v!==w;v++)y.push(t[v]);t.length=0;const C=this.frictionEquations.length;for(v=0;v!==C;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,y,this.frictionEquations,g),c&&(u.narrowphase=bt.now()-h),c&&(h=bt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const A=t.length;for(let L=0;L!==A;L++){const N=t[L],D=N.bi,U=N.bj,W=N.si,X=N.sj;let ee;if(D.material&&U.material?ee=this.getContactMaterial(D.material,U.material)||this.defaultContactMaterial:ee=this.defaultContactMaterial,ee.friction,D.material&&U.material&&(D.material.friction>=0&&U.material.friction>=0&&D.material.friction*U.material.friction,D.material.restitution>=0&&U.material.restitution>=0&&(N.restitution=D.material.restitution*U.material.restitution)),a.addEquation(N),D.allowSleep&&D.type===Ae.DYNAMIC&&D.sleepState===Ae.SLEEPING&&U.sleepState===Ae.AWAKE&&U.type!==Ae.STATIC){const se=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),j=U.sleepSpeedLimit**2;se>=j*2&&(D.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===Ae.DYNAMIC&&U.sleepState===Ae.SLEEPING&&D.sleepState===Ae.AWAKE&&D.type!==Ae.STATIC){const se=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),j=D.sleepSpeedLimit**2;se>=j*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,U,!0),this.collisionMatrixPrevious.get(D,U)||(hr.body=U,hr.contact=N,D.dispatchEvent(hr),hr.body=D,U.dispatchEvent(hr)),this.bodyOverlapKeeper.set(D.id,U.id),this.shapeOverlapKeeper.set(W.id,X.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=bt.now()-h,h=bt.now()),v=0;v!==r;v++){const L=o[v];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(x=f.length,v=0;v!==x;v++){const L=f[v];L.update();for(let N=0,D=L.equations.length;N!==D;N++){const U=L.equations[N];a.addEquation(U)}}a.solve(e,this),c&&(u.solve=bt.now()-h),a.removeAllEquations();const I=Math.pow;for(v=0;v!==r;v++){const L=o[v];if(L.type&d){const N=I(1-L.linearDamping,e),D=L.velocity;D.scale(N,D);const U=L.angularVelocity;if(U){const W=I(1-L.angularDamping,e);U.scale(W,U)}}}this.dispatchEvent(ew),c&&(h=bt.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,V=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(e,S,V);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=bt.now()-h),this.stepnumber+=1,this.dispatchEvent(QT);let B=!0;if(this.allowSleep)for(B=!1,v=0;v!==r;v++){const L=o[v];L.sleepTick(this.time),L.sleepState!==Ae.SLEEPING&&(B=!0)}this.hasActiveBodies=B}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(qn,jn),e){for(let r=0,o=qn.length;r<o;r+=2)dr.bodyA=this.getBodyById(qn[r]),dr.bodyB=this.getBodyById(qn[r+1]),this.dispatchEvent(dr);dr.bodyA=dr.bodyB=null}if(t){for(let r=0,o=jn.length;r<o;r+=2)fr.bodyA=this.getBodyById(jn[r]),fr.bodyB=this.getBodyById(jn[r+1]),this.dispatchEvent(fr);fr.bodyA=fr.bodyB=null}qn.length=jn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(qn,jn),n){for(let r=0,o=qn.length;r<o;r+=2){const a=this.getShapeById(qn[r]),l=this.getShapeById(qn[r+1]);Yn.shapeA=a,Yn.shapeB=l,a&&(Yn.bodyA=a.body),l&&(Yn.bodyB=l.body),this.dispatchEvent(Yn)}Yn.bodyA=Yn.bodyB=Yn.shapeA=Yn.shapeB=null}if(i){for(let r=0,o=jn.length;r<o;r+=2){const a=this.getShapeById(jn[r]),l=this.getShapeById(jn[r+1]);$n.shapeA=a,$n.shapeB=l,a&&($n.bodyA=a.body),l&&($n.bodyB=l.body),this.dispatchEvent($n)}$n.bodyA=$n.bodyB=$n.shapeA=$n.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new nn;const rl=new xt,bt=globalThis.performance||{};if(!bt.now){let s=Date.now();bt.timing&&bt.timing.navigationStart&&(s=bt.timing.navigationStart),bt.now=()=>Date.now()-s}new T;const QT={type:"postStep"},ew={type:"preStep"},hr={type:Ae.COLLIDE_EVENT_NAME,body:null,contact:null},tw=[],nw=[],iw=[],sw=[],qn=[],jn=[],dr={type:"beginContact",bodyA:null,bodyB:null},fr={type:"endContact",bodyA:null,bodyB:null},Yn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},$n={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function rw(s,e,t){let{color:n=65280,scale:i=1,onInit:r,onUpdate:o}=t===void 0?{}:t;const a=[],l=new _i({color:n??65280,wireframe:!0}),c=new T,u=new T,d=new T,h=new mt,f=new ko(1),g=new Ki(1,1,1),_=new Vs(10,10,10,10);_.translate(0,0,1e-4);function m(I){const M=new It,S=[];for(let B=0;B<I.vertices.length;B++){const L=I.vertices[B];S.push(L.x,L.y,L.z)}M.setAttribute("position",new yt(S,3));const V=[];for(let B=0;B<I.faces.length;B++){const L=I.faces[B],N=L[0];for(let D=1;D<L.length-1;D++){const U=L[D],W=L[D+1];V.push(N,U,W)}}return M.setIndex(V),M.computeBoundingSphere(),M.computeVertexNormals(),M}function p(I){const M=new It,S=[],V=c,B=u,L=d;for(let N=0;N<I.indices.length/3;N++)I.getTriangleVertices(N,V,B,L),S.push(V.x,V.y,V.z),S.push(B.x,B.y,B.z),S.push(L.x,L.y,L.z);return M.setAttribute("position",new yt(S,3)),M.computeBoundingSphere(),M.computeVertexNormals(),M}function v(I){const M=new It,S=I.elementSize||1,V=I.data.flatMap((L,N)=>L.flatMap((D,U)=>[N*S,U*S,D])),B=[];for(let L=0;L<I.data.length-1;L++)for(let N=0;N<I.data[L].length-1;N++){const D=I.data[L].length,U=L*D+N;B.push(U+1,U+D,U+D+1),B.push(U+D,U+1,U)}return M.setIndex(B),M.setAttribute("position",new yt(V,3)),M.computeBoundingSphere(),M.computeVertexNormals(),M}function x(I){let M=new pt;const{SPHERE:S,BOX:V,PLANE:B,CYLINDER:L,CONVEXPOLYHEDRON:N,TRIMESH:D,HEIGHTFIELD:U}=Se.types;switch(I.type){case S:{M=new pt(f,l);break}case V:{M=new pt(g,l);break}case B:{M=new pt(_,l);break}case L:{const W=new dc(I.radiusTop,I.radiusBottom,I.height,I.numSegments);M=new pt(W,l),I.geometryId=W.id;break}case N:{const W=m(I);M=new pt(W,l),I.geometryId=W.id;break}case D:{const W=p(I);M=new pt(W,l),I.geometryId=W.id;break}case U:{const W=v(I);M=new pt(W,l),I.geometryId=W.id;break}}return s.add(M),M}function y(I,M){const{SPHERE:S,BOX:V,PLANE:B,CYLINDER:L,CONVEXPOLYHEDRON:N,TRIMESH:D,HEIGHTFIELD:U}=Se.types;switch(M.type){case S:{const{radius:W}=M;I.scale.set(W*i,W*i,W*i);break}case V:{I.scale.copy(M.halfExtents),I.scale.multiplyScalar(2*i);break}case B:break;case L:{I.scale.set(1*i,1*i,1*i);break}case N:{I.scale.set(1*i,1*i,1*i);break}case D:{I.scale.copy(M.scale).multiplyScalar(i);break}case U:{I.scale.set(1*i,1*i,1*i);break}}}function w(I,M){if(!I)return!1;const{geometry:S}=I;return S instanceof ko&&M.type===Se.types.SPHERE||S instanceof Ki&&M.type===Se.types.BOX||S instanceof Vs&&M.type===Se.types.PLANE||S.id===M.geometryId&&M.type===Se.types.CYLINDER||S.id===M.geometryId&&M.type===Se.types.CONVEXPOLYHEDRON||S.id===M.geometryId&&M.type===Se.types.TRIMESH||S.id===M.geometryId&&M.type===Se.types.HEIGHTFIELD}function C(I,M){let S=a[I],V=!1;return w(S,M)||(S&&s.remove(S),a[I]=S=x(M),V=!0),y(S,M),V}function A(){const I=a,M=c,S=h;let V=0;for(const B of e.bodies)for(let L=0;L!==B.shapes.length;L++){const N=B.shapes[L],D=C(V,N),U=I[V];U&&(B.quaternion.vmult(B.shapeOffsets[L],M),B.position.vadd(M,M),B.quaternion.mult(B.shapeOrientations[L],S),U.position.copy(M),U.quaternion.copy(S),D&&r instanceof Function&&r(B,U,N),!D&&o instanceof Function&&o(B,U,N)),V++}for(let B=V;B<I.length;B++){const L=I[B];L&&s.remove(L)}I.length=V}return{update:A}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class Nn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Nn.nextNameID=Nn.nextNameID||0,this.$name.id=`lil-gui-name-${++Nn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ow extends Nn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Nl(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const aw={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Nl,toHexString:Nl},Dr={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},lw={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const n=Dr.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Dr.toHexString(i)}},cw={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=Dr.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Dr.toHexString(i)}},uw=[aw,Dr,lw,cw];function hw(s){return uw.find(e=>e.match(s))}class dw extends Nn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=hw(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Nl(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ol extends Nn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class fw extends Nn{constructor(e,t,n,i,r,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},r=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let o=!1,a,l,c,u,d;const h=5,f=v=>{a=v.clientX,l=c=v.clientY,o=!0,u=this.getValue(),d=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=v=>{if(o){const x=v.clientX-a,y=v.clientY-l;Math.abs(y)>h?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>h&&_()}if(!o){const x=v.clientY-c;d-=x*this._step*this._arrowKeyMultiplier(v),u+d>this._max?d=this._max-u:u+d<this._min&&(d=this._min-u),this._snapClampSetValue(u+d)}c=v.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,v,x,y,w)=>(p-v)/(x-v)*(w-y)+y,t=p=>{const v=this.$slider.getBoundingClientRect();let x=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(x)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",h))},d=p=>{if(o){const v=p.touches[0].clientX-a,x=p.touches[0].clientY-l;Math.abs(v)>Math.abs(x)?c(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h))}else p.preventDefault(),t(p.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h)},f=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const x=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class pw extends Nn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class mw extends Nn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const gw=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function _w(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let md=!1;class xc{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!md&&a&&(_w(gw),md=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,r){if(Object(n)===n)return new pw(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new fw(this,e,t,n,i,r);case"boolean":return new ow(this,e,t);case"string":return new mw(this,e,t);case"function":return new ol(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new dw(this,e,t,n)}addFolder(e){const t=new xc({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof ol||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ol)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const vw={id:"mainCanvas",class:"webgl"},xw=ym({__name:"App",setup(s){return Gd(()=>{const e=document.querySelector("#mainCanvas");console.log(e);const t=new rE,n={width:window.innerWidth,height:window.innerHeight},i=new Gt(75,n.width/n.height,.1,100);i.position.set(4,4,15);const r=new jE(i,e);r.enableDamping=!0,r.zoomSpeed=.3;const o=new JT;o.gravity.set(0,-9.82,0);const a=new zr("default"),l=new Br(a,a,{friction:.8,restitution:.7});o.addContactMaterial(l);const c=new DS,u=new Ae({type:Ae.STATIC,shape:c,material:a});u.shapes,u.quaternion.setFromAxisAngle(new T(1,0,0),-Math.PI/2),o.addBody(u);const d=new YE;let h;function f(S){const B=new T(.5,.5,.5),L=new sa(B),N=[];for(let D=0;D<S;D++){const U=new Ae({mass:1,position:new T(D*1.5,4,2),shape:L,material:a});o.addBody(U),U.applyForce(new T((Math.random()-1)*(D+1),5,(Math.random()-1)*(D+1)),new T((Math.random()-1)*(D+1),5,(Math.random()-1)*(D+1))),N.push(U)}return console.log(N),N}let g=f(3);function _(S,V){const B=[];for(let L=0;L<S;L++){const N=V.clone();B.push(N),t.add(N)}return B}let m=[];d.load("./dice/scene.gltf",function(S){h=S.scene,m=_(3,S.scene),rw(t,o)},void 0,function(S){console.error(S)});const p=new na,v=new pt(new Vs(22,22),p);v.rotateX(-Math.PI/2),v.receiveShadow=!0,t.add(v);const x=new Wf;x.castShadow=!0,x.position.set(5,5,6);const y=new DE(new ze("#ffffff"),.3);t.add(y,x);const w=new XE(x,2);w.visible=!1,t.add(w);const C=new Of({canvas:e,antialias:!0});C.setSize(n.width,n.height),C.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.shadowMap.enabled=!0;const A=new xc,I={start(){for(let S=0;S<m.length;S++){const V=m[S];t.remove(V)}g=f(3),m=_(3,h)}};A.add(I,"start").name("重新开始");const M=()=>{if(qs.begin(),r.update(),o.fixedStep(),m.length&&g.length)for(let S=0;S<3;S++){const V=m[S],B=g[S];V.position.copy(B.position),V.quaternion.copy(B.quaternion)}C.render(t,i),qs.end(),requestAnimationFrame(M)};M()}),(e,t)=>(Zm(),eg("canvas",vw))}});Og(xw).mount("#app");

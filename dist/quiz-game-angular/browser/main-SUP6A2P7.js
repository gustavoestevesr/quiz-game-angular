import{f as j,g as d,h as A,m as x,n as C,p as z,u as V}from"./chunk-IA7IWAYP.js";import{b as T}from"./chunk-DHGNW6LR.js";import"./chunk-WXI33M2S.js";import{c as v,d as E,g as w,i as P}from"./chunk-OM2DCOQI.js";import{d as y}from"./chunk-DYT7YB66.js";import{Ma as M,Oa as h,Qa as u,S as D,Sa as f,U as p,Z as m,_ as c,_a as g,ba as R,ea as I,eb as F,fb as S,gb as b,va as a,yb as O}from"./chunk-CEPITATZ.js";var k=[{path:"",loadComponent:()=>import("./chunk-JV7JYWFI.js").then(o=>o.StartComponent)},{path:"autores",loadComponent:()=>import("./chunk-MBOTHRCS.js").then(o=>o.AuthorsComponent)},{path:"sobre",loadComponent:()=>import("./chunk-J3AWP6QT.js").then(o=>o.AboutComponent)},{path:"inicio",loadComponent:()=>import("./chunk-Y6UE5ADW.js").then(o=>o.HomeComponent)},{path:"quiz",loadComponent:()=>import("./chunk-6PZYSLNU.js").then(o=>o.QuizComponent)},{path:"ranking",loadComponent:()=>import("./chunk-GC4227OW.js").then(o=>o.HighscoreComponent)},{path:"emblemas",loadComponent:()=>import("./chunk-VQMEJ7VN.js").then(o=>o.BadgesComponent)}];var q="@",Z=(()=>{let e=class e{constructor(r,n,i,s,l){this.doc=r,this.delegate=n,this.zone=i,this.animationType=s,this.moduleImpl=l,this._rendererFactoryPromise=null,this.scheduler=c(h,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-EGJAAEKH.js")).catch(n=>{throw new D(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let s=new i(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,n){let i=this.delegate.createRenderer(r,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new N(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let _=l.createRenderer(r,n);s.use(_)}).catch(l=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){M()},e.\u0275prov=p({token:e,factory:e.\u0275fac});let o=e;return o})(),N=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,n){this.delegate.insertBefore(e,t,r,n)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,n){this.delegate.setAttribute(e,t,r,n)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,n){this.delegate.setStyle(e,t,r,n)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(q)}};function U(o="animations"){return f("NgAsyncAnimations"),I([{provide:u,useFactory:(e,t,r)=>new Z(e,t,r,o),deps:[y,v,g]},{provide:a,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Q=(()=>{let e=class e extends C{constructor(r,n,i){super(r,n,i,c(h,{optional:!0}))}ngOnDestroy(){this.flush()}};e.\u0275fac=function(n){return new(n||e)(m(y),m(d),m(A))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let o=e;return o})();function X(){return new x}function G(o,e,t){return new V(o,e,t)}var W=[{provide:A,useFactory:X},{provide:C,useClass:Q},{provide:u,useFactory:G,deps:[v,C,g]}],J=[{provide:d,useFactory:()=>new z},{provide:a,useValue:"BrowserAnimations"},...W],fe=[{provide:d,useClass:j},{provide:a,useValue:"NoopAnimations"},...W];function H(){return f("NgEagerAnimations"),[...J]}var L={providers:[P(k),U(),H(),T()]};var Y=(()=>{let e=class e{constructor(){this.title="quiz-game-angular"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=R({type:e,selectors:[["app-root"]],standalone:!0,features:[O],decls:2,vars:0,consts:[[1,"container","h-screen"]],template:function(n,i){n&1&&(F(0,"div",0),b(1,"router-outlet"),S())},dependencies:[w]});let o=e;return o})();E(Y,L).catch(o=>console.error(o));

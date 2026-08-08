import{c as fe,d as X,f as Z,g as N,h as G}from"./chunk-U3QUSVWF.js";import{C as me,G as ye,O as j,U as ve,V as Ce,ka as be,ma as B,na as q,pa as Q,r as ge,ra as J,ta as _e,y as he}from"./chunk-HQ53E7BF.js";import{Ab as ae,Ac as z,Bc as de,Cb as M,Cc as A,Db as l,Eb as E,Ec as H,Fb as P,Gb as C,Gc as R,Ib as b,Jb as _,La as te,Na as d,Nb as le,Ob as ce,Q as k,Ub as F,W as g,Wb as pe,Xb as W,Za as D,a as K,ab as O,ca as h,cb as L,da as m,db as p,fa as y,ic as T,jc as ue,ka as U,kb as ne,la as ee,lb as c,ob as ie,pb as $,ub as v,vb as S,wb as re,xb as oe,yb as se,yc as V}from"./chunk-T5T52CQ4.js";var Te=class n{static isArray(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}static isObject(t,e=!0){return typeof t=="object"&&!Array.isArray(t)&&t!=null&&(e||Object.keys(t).length!==0)}static equals(t,e,i){return i?this.resolveFieldData(t,i)===this.resolveFieldData(e,i):this.equalsByValue(t,e)}static equalsByValue(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var i=Array.isArray(t),o=Array.isArray(e),r,s,a;if(i&&o){if(s=t.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(t[r],e[r]))return!1;return!0}if(i!=o)return!1;var u=this.isDate(t),x=this.isDate(e);if(u!=x)return!1;if(u&&x)return t.getTime()==e.getTime();var I=t instanceof RegExp,w=e instanceof RegExp;if(I!=w)return!1;if(I&&w)return t.toString()==e.toString();var f=Object.keys(t);if(s=f.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,f[r]))return!1;for(r=s;r--!==0;)if(a=f[r],!this.equalsByValue(t[a],e[a]))return!1;return!0}return t!==t&&e!==e}static resolveFieldData(t,e){if(t&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")==-1)return t[e];{let i=e.split("."),o=t;for(let r=0,s=i.length;r<s;++r){if(o==null)return null;o=o[i[r]]}return o}}else return null}static isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)}static reorderArray(t,e,i){let o;t&&e!==i&&(i>=t.length&&(i%=t.length,e%=t.length),t.splice(i,0,t.splice(e,1)[0]))}static insertIntoOrderedArray(t,e,i,o){if(i.length>0){let r=!1;for(let s=0;s<i.length;s++)if(this.findIndexInList(i[s],o)>e){i.splice(s,0,t),r=!0;break}r||i.push(t)}else i.push(t)}static findIndexInList(t,e){let i=-1;if(e){for(let o=0;o<e.length;o++)if(e[o]==t){i=o;break}}return i}static contains(t,e){if(t!=null&&e&&e.length){for(let i of e)if(this.equals(t,i))return!0}return!1}static removeAccents(t){return t&&(t=t.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),t}static isDate(t){return Object.prototype.toString.call(t)==="[object Date]"}static isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!this.isDate(t)&&typeof t=="object"&&Object.keys(t).length===0}static isNotEmpty(t){return!this.isEmpty(t)}static compare(t,e,i,o=1){let r=-1,s=this.isEmpty(t),a=this.isEmpty(e);return s&&a?r=0:s?r=o:a?r=-o:typeof t=="string"&&typeof e=="string"?r=t.localeCompare(e,i,{numeric:!0}):r=t<e?-1:t>e?1:0,r}static sort(t,e,i=1,o,r=1){let s=n.compare(t,e,o,i),a=i;return(n.isEmpty(t)||n.isEmpty(e))&&(a=r===1?i:r),a*s}static merge(t,e){if(!(t==null&&e==null)){{if((t==null||typeof t=="object")&&(e==null||typeof e=="object"))return K(K({},t||{}),e||{});if((t==null||typeof t=="string")&&(e==null||typeof e=="string"))return[t||"",e||""].join(" ")}return e||t}}static isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)}static getItemValue(t,...e){return this.isFunction(t)?t(...e):t}static findLastIndex(t,e){let i=-1;if(this.isNotEmpty(t))try{i=t.findLastIndex(e)}catch{i=t.lastIndexOf([...t].reverse().find(e))}return i}static findLast(t,e){let i;if(this.isNotEmpty(t))try{i=t.findLast(e)}catch{i=[...t].reverse().find(e)}return i}static deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var i=Array.isArray(t),o=Array.isArray(e),r,s,a;if(i&&o){if(s=t.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(t[r],e[r]))return!1;return!0}if(i!=o)return!1;var u=t instanceof Date,x=e instanceof Date;if(u!=x)return!1;if(u&&x)return t.getTime()==e.getTime();var I=t instanceof RegExp,w=e instanceof RegExp;if(I!=w)return!1;if(I&&w)return t.toString()==e.toString();var f=Object.keys(t);if(s=f.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,f[r]))return!1;for(r=s;r--!==0;)if(a=f[r],!this.deepEquals(t[a],e[a]))return!1;return!0}return t!==t&&e!==e}static minifyCSS(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(t){return this.isString(t)?t.replace(/(-|_)/g,"").toLowerCase():t}static isString(t,e=!0){return typeof t=="string"&&(e||t!=="")}},xe=0;function Xe(n="pn_id_"){return xe++,`${n}${xe}`}function Se(){let n=[],t=(r,s)=>{let a=n.length>0?n[n.length-1]:{key:r,value:s},u=a.value+(a.key===r?0:s)+2;return n.push({key:r,value:u}),u},e=r=>{n=n.filter(s=>s.value!==r)},i=()=>n.length>0?n[n.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(t(r,a)))},clear:r=>{r&&(e(o(r)),r.style.zIndex="")},getCurrent:()=>i()}}var Y=Se(),Ge=n=>!!n;var Me=({dt:n})=>`
.p-popover {
    margin-top: ${n("popover.gutter")};
    background: ${n("popover.background")};
    color: ${n("popover.color")};
    border: 1px solid ${n("popover.border.color")};
    border-radius: ${n("popover.border.radius")};
    box-shadow: ${n("popover.shadow")};
    position: absolute
}

.p-popover-content {
    padding: ${n("popover.content.padding")};
}

.p-popover-flipped {
    margin-top: calc(${n("popover.gutter")} * -1);
    margin-bottom: ${n("popover.gutter")};
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: ${n("popover.arrow.offset")};
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(${n("popover.gutter")} - 2px);
    margin-left: calc(-1 * (${n("popover.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${n("popover.background")};
}

.p-popover:before {
    border-width: ${n("popover.gutter")};
    margin-left: calc(-1 * ${n("popover.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${n("popover.border.color")};
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${n("popover.background")};
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${n("popover.border.color")};
}

`,Ee={root:"p-popover p-component",content:"p-popover-content"},Ie=(()=>{class n extends Q{name="popover";theme=Me;classes=Ee;static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(n)))(o||n)}})();static \u0275prov=k({token:n,factory:n.\u0275fac})}return n})(),Pe=["content"],Fe=["*"],Ve=(n,t)=>({showTransitionParams:n,hideTransitionParams:t}),ze=(n,t)=>({value:n,params:t}),Ae=n=>({closeCallback:n});function He(n,t){}function Re(n,t){n&1&&p(0,He,0,0,"ng-template")}function Ze(n,t){if(n&1){let e=ae();v(0,"div",1),M("click",function(o){h(e);let r=l();return m(r.onOverlayClick(o))})("@animation.start",function(o){h(e);let r=l();return m(r.onAnimationStart(o))})("@animation.done",function(o){h(e);let r=l();return m(r.onAnimationEnd(o))}),v(1,"div",2),M("click",function(o){h(e);let r=l();return m(r.onContentClick(o))})("mousedown",function(o){h(e);let r=l();return m(r.onContentClick(o))}),P(2),p(3,Re,1,0,null,3),S()()}if(n&2){let e=l();$(e.styleClass),c("ngClass","p-popover p-component")("ngStyle",e.style)("@animation",W(13,ze,e.overlayVisible?"open":"close",W(10,Ve,e.showTransitionOptions,e.hideTransitionOptions))),ne("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),d(3),c("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",pe(16,Ae,e.onCloseClick.bind(e)))}}var bt=(()=>{class n extends J{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new U;onHide=new U;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=g(Ie);zone=g(ee);overlayService=g(be);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(R(this.platformId)&&!this.documentClickListener){let e=ve()?"touchstart":"click",i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,e,o=>{this.dismissable&&(!this.container?.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,i){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,i)&&(this.destroyCallback=()=>{this.show(null,i||e.currentTarget||e.target)}),this.hide()):this.show(e,i))}show(e,i){i&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=i||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let i=e.target;this.selfClick=e.offsetX<i.clientWidth&&e.offsetY<i.clientHeight}hasTargetChanged(e,i){return this.target!=null&&this.target!==(i||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):me(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&Y.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),he(this.container,this.target,!1);let e=j(this.container),i=j(this.target),o=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),r=0;e.left<i.left&&(r=i.left-e.left-parseFloat(o)*2),this.container?.style.setProperty("--overlayArrowLeft",`${r}px`),e.top<i.top&&ge(this.container,"p-popover-flipped")}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=i=>{this.container&&this.container.contains(i.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&Y.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=ye(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!Ce()&&this.hide()}bindDocumentResizeListener(){if(R(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){R(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new _e(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&Y.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(n)))(o||n)}})();static \u0275cmp=D({type:n,selectors:[["p-popover"]],contentQueries:function(i,o,r){if(i&1&&(C(r,Pe,4),C(r,B,4)),i&2){let s;b(s=_())&&(o.contentTemplate=s.first),b(s=_())&&(o.templates=s)}},hostBindings:function(i,o){i&1&&M("keydown.escape",function(s){return o.onEscapeKeydown(s)},!1,te)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",T],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",T],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",ue],focusOnShow:[2,"focusOnShow","focusOnShow",T],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[F([Ie]),L,O],ngContentSelectors:Fe,decls:1,vars:1,consts:[["role","dialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","dialog",3,"click","ngClass","ngStyle"],[1,"p-popover-content",3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&(E(),p(0,Ze,4,18,"div",0)),i&2&&c("ngIf",o.render)},dependencies:[H,V,z,A,de,q],encapsulation:2,data:{animation:[fe("animation",[N("void",Z({transform:"scaleY(0.8)",opacity:0})),N("close",Z({opacity:0})),N("open",Z({transform:"translateY(0)",opacity:1})),G("void => open",X("{{showTransitionParams}}")),G("open => close",X("{{hideTransitionParams}}"))])]},changeDetection:0})}return n})();var Ne=({dt:n})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${n("tag.primary.background")};
    color: ${n("tag.primary.color")};
    font-size: ${n("tag.font.size")};
    font-weight: ${n("tag.font.weight")};
    padding: ${n("tag.padding")};
    border-radius: ${n("tag.border.radius")};
    gap: ${n("tag.gap")};
}

.p-tag-icon {
    font-size: ${n("tag.icon.size")};
    width: ${n("tag.icon.size")};
    height:${n("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${n("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${n("tag.success.background")};
    color: ${n("tag.success.color")};
}

.p-tag-info {
    background: ${n("tag.info.background")};
    color: ${n("tag.info.color")};
}

.p-tag-warn {
    background: ${n("tag.warn.background")};
    color: ${n("tag.warn.color")};
}

.p-tag-danger {
    background: ${n("tag.danger.background")};
    color: ${n("tag.danger.color")};
}

.p-tag-secondary {
    background: ${n("tag.secondary.background")};
    color: ${n("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${n("tag.contrast.background")};
    color: ${n("tag.contrast.color")};
}
`,Be={root:({props:n})=>["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}],icon:"p-tag-icon",label:"p-tag-label"},we=(()=>{class n extends Q{name="tag";theme=Ne;classes=Be;static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(n)))(o||n)}})();static \u0275prov=k({token:n,factory:n.\u0275fac})}return n})();var qe=["icon"],Qe=["*"];function Je(n,t){if(n&1&&re(0,"span",4),n&2){let e=l(2);c("ngClass",e.icon)}}function Ye(n,t){if(n&1&&(oe(0),p(1,Je,1,1,"span",3),se()),n&2){let e=l();d(),c("ngIf",e.icon)}}function Ke(n,t){}function Ue(n,t){n&1&&p(0,Ke,0,0,"ng-template")}function We(n,t){if(n&1&&(v(0,"span",5),p(1,Ue,1,0,null,6),S()),n&2){let e=l();d(),c("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}var Ft=(()=>{class n extends J{get style(){return this._style}set style(e){this._style=e,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_style;_componentStyle=g(we);ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break}})}containerClass(){let e="p-tag p-component";return this.severity&&(e+=` p-tag-${this.severity}`),this.rounded&&(e+=" p-tag-rounded"),this.styleClass&&(e+=` ${this.styleClass}`),e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(n)))(o||n)}})();static \u0275cmp=D({type:n,selectors:[["p-tag"]],contentQueries:function(i,o,r){if(i&1&&(C(r,qe,4),C(r,B,4)),i&2){let s;b(s=_())&&(o.iconTemplate=s.first),b(s=_())&&(o.templates=s)}},hostVars:4,hostBindings:function(i,o){i&2&&(ie(o.style),$(o.containerClass()))},inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",T]},features:[F([we]),L,O],ngContentSelectors:Qe,decls:5,vars:3,consts:[[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(i,o){i&1&&(E(),P(0),p(1,Ye,2,1,"ng-container",0)(2,We,2,1,"span",1),v(3,"span",2),le(4),S()),i&2&&(d(),c("ngIf",!o.iconTemplate&&!o._iconTemplate),d(),c("ngIf",o.iconTemplate||o._iconTemplate),d(2),ce(o.value))},dependencies:[H,V,z,A,q],encapsulation:2,changeDetection:0})}return n})();export{Te as a,Xe as b,Y as c,Ge as d,bt as e,Ft as f};

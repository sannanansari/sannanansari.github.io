"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2773],{2773:(M,k,h)=>{h.r(k),h.d(k,{ion_select:()=>C,ion_select_option:()=>j,ion_select_popover:()=>D});var u=h(5861),o=h(1308),f=h(9658),v=h(5730),x=h(1312),O=h(2854);const a=(e,t)=>1!==e.nodeType?void 0:(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find(i=>i.value===e.value),C=class{constructor(e){(0,o.r)(this,e),this.ionChange=(0,o.e)(this,"ionChange",7),this.ionCancel=(0,o.e)(this,"ionCancel",7),this.ionDismiss=(0,o.e)(this,"ionDismiss",7),this.ionFocus=(0,o.e)(this,"ionFocus",7),this.ionBlur=(0,o.e)(this,"ionBlur",7),this.ionStyle=(0,o.e)(this,"ionStyle",7),this.inputId="ion-sel-"+F++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}styleChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}connectedCallback(){var e=this;return(0,u.Z)(function*(){e.updateOverlayOptions(),e.emitStyle(),e.mutationO=((e,t,n)=>{if(typeof MutationObserver>"u")return;const i=new MutationObserver(s=>{n(((e,t)=>{let n;return e.forEach(i=>{for(let s=0;s<i.addedNodes.length;s++)n=a(i.addedNodes[s],t)||n}),n})(s,"ion-select-option"))});return i.observe(e,{childList:!0,subtree:!0}),i})(e.el,0,(0,u.Z)(function*(){e.updateOverlayOptions()}))})()}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}open(e){var t=this;return(0,u.Z)(function*(){if(t.disabled||t.isExpanded)return;t.isExpanded=!0;const n=t.overlay=yield t.createOverlay(e);if(n.onDidDismiss().then(()=>{t.overlay=void 0,t.isExpanded=!1,t.ionDismiss.emit(),t.setFocus()}),yield n.present(),"popover"===t.interface){let i=t.childOpts.map(l=>l.value).indexOf(t.value);i=i>-1?i:0;const s=n.querySelector(`.select-interface-option:nth-child(${i+1})`);s&&(0,v.f)(s)}return n})()}createOverlay(e){let t=this.interface;return"action-sheet"===t&&this.multiple&&(console.warn(`Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`),t="alert"),"popover"===t&&!e&&(console.warn(`Select interface cannot be a "${t}" without passing an event. Using the "alert" interface instead.`),t="alert"),"action-sheet"===t?this.openActionSheet():"popover"===t?this.openPopover(e):this.openAlert()}updateOverlayOptions(){const e=this.overlay;if(!e)return;const t=this.childOpts,n=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,n);break;case"popover":const i=e.querySelector("ion-select-popover");i&&(i.options=this.createPopoverOptions(t,n));break;case"alert":e.inputs=this.createAlertInputs(t,this.multiple?"checkbox":"radio",n)}}createActionSheetButtons(e,t){const n=e.map(i=>{const s=w(i),l=Array.from(i.classList).filter(c=>"hydrated"!==c).join(" "),p=`${S} ${l}`;return{role:g(t,s,this.compareWith)?"selected":"",text:i.textContent,cssClass:p,handler:()=>{this.value=s}}});return n.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),n}createAlertInputs(e,t,n){return e.map(s=>{const l=w(s),p=Array.from(s.classList).filter(m=>"hydrated"!==m).join(" ");return{type:t,cssClass:`${S} ${p}`,label:s.textContent||"",value:l,checked:g(n,l,this.compareWith),disabled:s.disabled}})}createPopoverOptions(e,t){return e.map(i=>{const s=w(i),l=Array.from(i.classList).filter(c=>"hydrated"!==c).join(" ");return{text:i.textContent||"",cssClass:`${S} ${l}`,value:s,checked:g(t,s,this.compareWith),disabled:i.disabled,handler:c=>{this.value=c,this.multiple||this.close()}}})}openPopover(e){var t=this;return(0,u.Z)(function*(){const n=t.interfaceOptions,i=(0,f.b)(t),s="md"!==i,l=t.multiple,p=t.value;let c=e,m="auto";const b=t.el.closest("ion-item");b&&(b.classList.contains("item-label-floating")||b.classList.contains("item-label-stacked"))&&(c=Object.assign(Object.assign({},e),{detail:{ionShadowTarget:b}}),m="cover");const P=Object.assign(Object.assign({mode:i,event:c,alignment:"center",size:m,showBackdrop:s},n),{component:"ion-select-popover",cssClass:["select-popover",n.cssClass],componentProps:{header:n.header,subHeader:n.subHeader,message:n.message,multiple:l,value:p,options:t.createPopoverOptions(t.childOpts,p)}});return x.c.create(P)})()}openActionSheet(){var e=this;return(0,u.Z)(function*(){const t=(0,f.b)(e),n=e.interfaceOptions,i=Object.assign(Object.assign({mode:t},n),{buttons:e.createActionSheetButtons(e.childOpts,e.value),cssClass:["select-action-sheet",n.cssClass]});return x.b.create(i)})()}openAlert(){var e=this;return(0,u.Z)(function*(){const t=e.getLabel(),n=t?t.textContent:null,i=e.interfaceOptions,s=e.multiple?"checkbox":"radio",l=(0,f.b)(e),p=Object.assign(Object.assign({mode:l},i),{header:i.header?i.header:n,inputs:e.createAlertInputs(e.childOpts,s,e.value),buttons:[{text:e.cancelText,role:"cancel",handler:()=>{e.ionCancel.emit()}},{text:e.okText,handler:c=>{e.value=c}}],cssClass:["select-alert",i.cssClass,e.multiple?"multiple-select-alert":"single-select-alert"]});return x.a.create(p)})()}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return(0,v.k)(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const e=this.selectedText;return null!=e&&""!==e?e:B(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled,select:!0,"select-disabled":this.disabled,"has-placeholder":void 0!==this.placeholder,"has-value":this.hasValue(),"has-focus":this.isExpanded})}render(){const{disabled:e,el:t,inputId:n,isExpanded:i,name:s,placeholder:l,value:p}=this,c=(0,f.b)(this),{labelText:m,labelId:b}=(0,v.d)(t,n);(0,v.e)(!0,t,s,z(p),e);let T=!1,y=this.getText();""===y&&void 0!==l&&(y=l,T=!0);const K={"select-text":!0,"select-placeholder":T},W=T?"placeholder":"text",L=void 0!==m?""!==y?`${y}, ${m}`:m:y;return(0,o.h)(o.H,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":e?"true":null,"aria-label":L,class:{[c]:!0,"in-item":(0,O.h)("ion-item",t),"select-disabled":e,"select-expanded":i}},(0,o.h)("div",{"aria-hidden":"true",class:K,part:W},y),(0,o.h)("div",{class:"select-icon",role:"presentation",part:"icon"},(0,o.h)("div",{class:"select-icon-inner"})),(0,o.h)("label",{id:b},L),(0,o.h)("button",{type:"button",disabled:e,id:n,"aria-labelledby":b,"aria-haspopup":"listbox","aria-expanded":`${i}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:Z=>this.focusEl=Z}))}get el(){return(0,o.i)(this)}static get watchers(){return{disabled:["styleChanged"],placeholder:["styleChanged"],isExpanded:["styleChanged"],value:["valueChanged"]}}},g=(e,t,n)=>void 0!==e&&(Array.isArray(e)?e.some(i=>A(i,t,n)):A(e,t,n)),w=e=>{const t=e.value;return void 0===t?e.textContent||"":t},z=e=>{if(null!=e)return Array.isArray(e)?e.join(","):e.toString()},A=(e,t,n)=>"function"==typeof n?n(e,t):"string"==typeof n?e[n]===t[n]:Array.isArray(t)?t.includes(e):e===t,B=(e,t,n)=>void 0===t?"":Array.isArray(t)?t.map(i=>I(e,i,n)).filter(i=>null!==i).join(", "):I(e,t,n)||"",I=(e,t,n)=>{const i=e.find(s=>A(t,w(s),n));return i?i.textContent:null};let F=0;const S="select-interface-option";C.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px;opacity:0.33}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:0.55}:host-context(.item-label-stacked) .select-icon,:host-context(.item-label-floating:not(.item-fill-outline)) .select-icon,:host-context(.item-label-floating.item-fill-outline){-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}:host-context(.item-has-focus) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host-context(.item-has-focus.item-label-stacked) .select-icon,:host-context(.item-has-focus.item-label-floating:not(.item-fill-outline)) .select-icon{-webkit-transform:translate3d(0,  -9px,  0) rotate(180deg);transform:translate3d(0,  -9px,  0) rotate(180deg)}:host-context(ion-item.ion-focused) .select-icon,:host-context(.item-has-focus) .select-icon{color:var(--highlight-color-focused);opacity:1}"};const j=class{constructor(e){(0,o.r)(this,e),this.inputId="ion-selopt-"+U++,this.disabled=!1}render(){return(0,o.h)(o.H,{role:"option",id:this.inputId,class:(0,f.b)(this)})}get el(){return(0,o.i)(this)}};let U=0;j.style=":host{display:none}";const D=class{constructor(e){(0,o.r)(this,e),this.options=[]}onSelect(e){this.setChecked(e),this.callOptionHandler(e)}findOptionFromEvent(e){const{options:t}=this;return t.find(n=>n.value===e.target.value)}callOptionHandler(e){const t=this.findOptionFromEvent(e),n=this.getValues(e);null!=t&&t.handler&&(0,x.s)(t.handler,n)}rbClick(e){this.callOptionHandler(e)}setChecked(e){const{multiple:t}=this,n=this.findOptionFromEvent(e);t&&n&&(n.checked=e.detail.checked)}getValues(e){const{multiple:t,options:n}=this;if(t)return n.filter(s=>s.checked).map(s=>s.value);const i=this.findOptionFromEvent(e);return i?i.value:void 0}renderOptions(e){const{multiple:t}=this;return!0===t?this.renderCheckboxOptions(e):this.renderRadioOptions(e)}renderCheckboxOptions(e){return e.map(t=>(0,o.h)("ion-item",{class:(0,O.g)(t.cssClass)},(0,o.h)("ion-checkbox",{slot:"start",value:t.value,disabled:t.disabled,checked:t.checked}),(0,o.h)("ion-label",null,t.text)))}renderRadioOptions(e){const t=e.filter(n=>n.checked).map(n=>n.value)[0];return(0,o.h)("ion-radio-group",{value:t},e.map(n=>(0,o.h)("ion-item",{class:(0,O.g)(n.cssClass)},(0,o.h)("ion-label",null,n.text),(0,o.h)("ion-radio",{value:n.value,disabled:n.disabled,onClick:i=>this.rbClick(i)}))))}render(){const{header:e,message:t,options:n,subHeader:i}=this,s=void 0!==i||void 0!==t;return(0,o.h)(o.H,{class:(0,f.b)(this)},(0,o.h)("ion-list",null,void 0!==e&&(0,o.h)("ion-list-header",null,e),s&&(0,o.h)("ion-item",null,(0,o.h)("ion-label",{class:"ion-text-wrap"},void 0!==i&&(0,o.h)("h3",null,i),void 0!==t&&(0,o.h)("p",null,t))),this.renderOptions(n)))}};D.style={ios:".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",md:".sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md{opacity:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08);--background-focused:var(--ion-color-primary, #3880ff);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #3880ff);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #3880ff)}"}},2854:(M,k,h)=>{h.d(k,{c:()=>f,g:()=>x,h:()=>o,o:()=>E});var u=h(5861);const o=(r,a)=>null!==a.closest(r),f=(r,a)=>"string"==typeof r&&r.length>0?Object.assign({"ion-color":!0,[`ion-color-${r}`]:!0},a):a,x=r=>{const a={};return(r=>void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter(d=>null!=d).map(d=>d.trim()).filter(d=>""!==d):[])(r).forEach(d=>a[d]=!0),a},O=/^[a-z][a-z0-9+\-.]*:/,E=function(){var r=(0,u.Z)(function*(a,d,_,C){if(null!=a&&"#"!==a[0]&&!O.test(a)){const g=document.querySelector("ion-router");if(g)return null!=d&&d.preventDefault(),g.push(a,_,C)}return!1});return function(d,_,C,g){return r.apply(this,arguments)}}()}}]);
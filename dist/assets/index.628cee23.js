var me=Object.defineProperty;var te=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var qt=(h,t,e)=>t in h?me(h,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):h[t]=e,H=(h,t)=>{for(var e in t||(t={}))pe.call(t,e)&&qt(h,e,t[e]);if(te)for(var e of te(t))fe.call(t,e)&&qt(h,e,t[e]);return h};var D=(h,t,e)=>(qt(h,typeof t!="symbol"?t+"":t,e),e),Jt=(h,t,e)=>{if(!t.has(h))throw TypeError("Cannot "+e)};var i=(h,t,e)=>(Jt(h,t,"read from private field"),e?e.call(h):t.get(h)),o=(h,t,e)=>{if(t.has(h))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(h):t.set(h,e)},a=(h,t,e,s)=>(Jt(h,t,"write to private field"),s?s.call(h,e):t.set(h,e),e),ee=(h,t,e,s)=>({set _(n){a(h,t,n,e)},get _(){return i(h,t,s)}}),d=(h,t,e)=>(Jt(h,t,"access private method"),e);import{v as be,n as we}from"./vendor.098c5d43.js";const ye=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}};ye();function xe(h={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:s,onRegistered:n,onRegisterError:r}=h;let c,l;const p=async(u=!0)=>{u&&(c==null||c.addEventListener("controlling",m=>{m.isUpdate&&window.location.reload()})),l&&l.waiting&&await we(l.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){c=new be("/service-worker.js",{scope:"/",type:"classic"}),c.addEventListener("activated",u=>{u.isUpdate||s==null||s()});{const u=()=>{e==null||e()};c.addEventListener("waiting",u),c.addEventListener("externalwaiting",u)}c.register({immediate:t}).then(u=>{l=u,n==null||n(u)}).catch(u=>{r==null||r(u)})}return p}xe();async function lt(h){return new Promise((t,e)=>{const s=new Image;s.onload=()=>t(s),s.onerror=e,s.src=h})}function _t(h,t,e,s){const n=h/e,r=t/s;return Math.min(r,n)}function ve(h,t,e,s,n,r,c=0){const l=c/2,p=e-l,u=s-l,m=e+n+l,x=s+r+l,A=h>=p&&h<=m,U=t>=u&&t<=x;return A&&U}function Ae(h,t,e,s,n,r,c=0){const l=c/2,p=e-l,u=s-l,m=e+n+l,x=s+r+l,A=e+l,U=s+l,dt=e+n-l,ut=s+r-l;return{left:h>=p&&h<=A,right:h>=dt&&h<=m,top:t>=u&&t<=U,bottom:t>=ut&&t<=x}}function de(h,t){const{actualBoundingBoxAscent:e,actualBoundingBoxDescent:s}=h.measureText(t);return e+s}function Ie(h,t){let e=document.createElement("a");e.setAttribute("href",h),e.setAttribute("download",t),e.style.display="none",document.body.appendChild(e),e.click(),e.remove()}var Ee=`.container{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box}
`,Se="assets/one-piece-wanted.d3bd87d0.png";const Ct={url:Se,width:772,height:1154,avatarPosition:{x:74,y:252,width:638,height:484},namePosition:{x:88,y:826,width:585,height:114},bountyPosition:{x:88,y:953,width:586,height:85},bountyFontSize:60,boundaryOffset:{left:10,right:10,top:10,bottom:10},bellySignSize:{width:60,height:84}};class Yt{constructor(t){D(this,"x",0);D(this,"y",0);D(this,"width",0);D(this,"height",0);D(this,"ctx");this.ctx=t}scale(t){this.x=this.x*t,this.y=this.y*t,this.width=this.width*t,this.height=this.height*t}}var ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALaSURBVDhPNZTdjuw0EIRtt+04mdlfrUCAEELA4Qpxgc79eQ/e/wV2d5LYjt18zi5WZGXi7urq6vLYf7/9bc+1bdt6K61rCKEZKy44H27vaylliZO1ptba9RCx3rspxXmenedVxDhtegSfRIK10lo7WnHSl6s8v1zIjDHOy8QiXgjycYrJsWop+5pNt2p8b+44OkUomPMGCJmtV2M7OTH6y+WS0tK7ybk64g4K9d5Va9nVNKjM85RSdM5yUur+8vJ8/jSjZghsJN9um/z545MPATLELfPVextioBEYqVEwnRVRc7QDNgo376mzrbmU6lSV1CnSQ0wXJ0GNbcdRD9jTSPf0+/r+miF1Ltje3hF3L6XJP19+hgwVjDHWjzTYBh/ExyAJCWOYrtfp8fHxer2DEKA5Z+2KcI4hkWbUMZvbWz+qz7vW2jwnphhdxeXRptiu9J9bq8uS7u7nEO1Q+7OstYjBSEbgicjOKTul9n0njKMz/lBtRDl0ynuliW3LxJHMMM55jHXKM8BVOfzEYv8Ic2RycD4KJeYxbOOGeTyGMc6o9c632speTDcRdiGkaVrmWX77/okJ8xjLGEmTD0lOtbGpQYxWwe1Kc3boxGTxpLXqmuqWczljh3AA/S/Bx06f2DlIZKLRB+xzWdIUvdHmhl+ndHKJIOBK9tGftbzgP+CMQScmEwa6oVyjLHLJX7/+RAGqoRx1h1vPHFBY7eijkdJPrLrvay2VfFKIlx9wwDSndM37IbThZN3Wz4IK5/D2thof8lEHkrEueCseW1iJ8vt39+Jgc/RWMCh60DW3x/uAjNb6Wvrr+9u63hg1lwzNPmwFWfn6xy/4p9Pn0Aer4wR33hTcBxB8KcKX8elMG5rSAk2554fL0/1yt8TLcMSYMOriAd4/hCCb+xXFzzEt08KN4347tUQ4bjLPEJRJnDnsgDNqsMf12Tfko2CcZEpE8e8k85IeHh7+Azww6jnizFt7AAAAAElFTkSuQmCC",G,Wt,Q,V,Bt;class ie extends Yt{constructor(){super(...arguments);o(this,G,"");o(this,Wt,1);o(this,Q,0);o(this,V,null);o(this,Bt,1.31)}async init(t){try{const e=await lt(ue);a(this,V,this.ctx.createPattern(e,"repeat"))}catch(e){throw console.error(e),new Error("Failed to init Name.")}this.setPosition(t)}setPosition(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,a(this,Q,this.height*i(this,Bt))}set text(t){const e=new Array(i(this,Wt)).join(" ")+" ";a(this,G,Array.from(t).join(e))}render(){this.ctx.save(),this.ctx.textAlign="center",this.ctx.textBaseline="top",this.ctx.fillStyle=i(this,V)?i(this,V):"none",this.ctx.font=`900 ${i(this,Q)}px 'Gelasio', 'Noto Sans TC', sans-serif`;const t=de(this.ctx,i(this,G)),e=this.height/t,s=(t-this.height)/2;this.ctx.font=`900 ${Math.floor(i(this,Q)*e)}px 'Gelasio', 'Noto Sans TC', sans-serif`,this.ctx.fillText(i(this,G),this.x+this.width/2,this.y+s,this.width),this.ctx.restore()}}G=new WeakMap,Wt=new WeakMap,Q=new WeakMap,V=new WeakMap,Bt=new WeakMap;var Le="assets/paper.16062456.png";const se={x:0,y:0,width:0,height:0};var F,z,w,_,I,gt,Z,mt,oe;class ne extends Yt{constructor(){super(...arguments);o(this,mt);o(this,F,void 0);D(this,"filter","grayscale(35%) sepia(40%) saturate(80%) contrast(105%)");o(this,z,new Map);o(this,w,null);o(this,_,null);o(this,I,H({},se));o(this,gt,H({},se));o(this,Z,{left:0,right:0,top:0,bottom:0})}async init(t){a(this,F,t);try{const e=await lt(Le);a(this,_,this.ctx.createPattern(e,"repeat"))}catch(e){throw console.error(e),new Error("Failed to create fill pattern.")}d(this,mt,oe).call(this)}async loadImage(t){var e;if(!!t)try{a(this,w,await lt(t)),d(this,mt,oe).call(this),(e=i(this,z).get("imageloaded"))==null||e.forEach(s=>s())}catch(s){throw console.error(s),new Error("Failed to load avatar image.")}}scale(t){super.scale(t),this.updateRenderPosition()}setWantedImageInfo(t){a(this,F,t),a(this,Z,H({},t.boundaryOffset)),a(this,I,H({},t.avatarPosition))}updateRenderPosition(){if(!i(this,w))return;const t=_t(this.width,this.height,i(this,w).width,i(this,w).height),e=i(this,w).width*t,s=i(this,w).height*t,n=this.x+(this.width-e)/2,r=this.y+(this.height-s)/2;a(this,gt,{x:n,y:r,width:e,height:s})}on(t,e){var s;i(this,z).has(t)||i(this,z).set(t,[]),(s=i(this,z).get(t))==null||s.push(e)}off(t,e){const s=i(this,z).get(t);if(!s)return;const n=s.findIndex(r=>r===e);s.splice(n,1)}render(){if(this.ctx.save(),this.ctx.fillStyle=i(this,_)?i(this,_):"none",this.ctx.fillRect(i(this,I).x,i(this,I).y,i(this,I).width,i(this,I).height),!i(this,w)){this.ctx.restore();return}const{x:t,y:e,width:s,height:n}=i(this,gt);this.ctx.filter=this.filter,this.ctx.drawImage(i(this,w),t,e,s,n);const{left:r,right:c,top:l,bottom:p}=i(this,Z);t<=r&&this.ctx.clearRect(0,e,r,n),e<=l&&this.ctx.clearRect(t,0,s,l),t+s>this.ctx.canvas.width-c&&this.ctx.clearRect(this.ctx.canvas.width-c,e,c,n),e+n>this.ctx.canvas.height-p&&this.ctx.clearRect(t,this.ctx.canvas.height-p,s,p),this.ctx.canvas.width,this.ctx.restore()}}F=new WeakMap,z=new WeakMap,w=new WeakMap,_=new WeakMap,I=new WeakMap,gt=new WeakMap,Z=new WeakMap,mt=new WeakSet,oe=function(){if(!i(this,F))return;const{avatarPosition:t,boundaryOffset:e}=i(this,F);this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,a(this,Z,H({},e)),a(this,I,{x:this.x,y:this.y,width:this.width,height:this.height}),this.updateRenderPosition()};var Pe="assets/belly.5c6b32bd.png",C,Tt,pt,$,ft,tt,jt,et;class ae extends Yt{constructor(t){super(t);o(this,C,"");o(this,Tt,1);o(this,pt,0);o(this,$,null);o(this,ft,void 0);o(this,tt,null);o(this,jt,10);o(this,et,null);a(this,ft,new Intl.NumberFormat)}async init(t){try{a(this,tt,await lt(Pe));const e=await lt(ue);a(this,$,this.ctx.createPattern(e,"repeat"))}catch(e){throw console.error(e),new Error("Failed to init bounty.")}this.setPosition(t)}setPosition(t){const{bountyPosition:e,bountyFontSize:s,bellySignSize:n}=t;this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,a(this,pt,s),a(this,et,H({},n))}set text(t){const e=new Array(i(this,Tt)).join(" ")+" ",s=Number.parseInt(t);if(Number.isNaN(s)){a(this,C,Array.from(t).join(e));return}const n=i(this,ft).format(s)+"-";a(this,C,Array.from(n).join(e))}render(){if(!i(this,tt)||!i(this,et))return;const{width:t,height:e}=i(this,et);this.ctx.save(),this.ctx.textAlign="center",this.ctx.textBaseline="top",this.ctx.fillStyle=i(this,$)?i(this,$):"none",this.ctx.font=`900 ${i(this,pt)}px 'Itim', sans-serif`;const s=this.x+this.width/2,n=t+i(this,jt),r=de(this.ctx,i(this,C)),c=(this.height-r)/2,l=s+n/2,p=this.y+c,u=this.width-n;this.ctx.fillText(i(this,C),l,p,u);const m=Math.min(this.ctx.measureText(i(this,C)).width,u),x=s-n/2-m/2;this.ctx.drawImage(i(this,tt),x,this.y,t,e),this.ctx.restore()}}C=new WeakMap,Tt=new WeakMap,pt=new WeakMap,$=new WeakMap,ft=new WeakMap,tt=new WeakMap,jt=new WeakMap,et=new WeakMap;var E,W,bt,y,B,K,X,S,it,Mt,ke;class re{constructor(t){o(this,Mt);o(this,E,void 0);o(this,W,void 0);o(this,bt,1);o(this,y,0);o(this,B,0);o(this,K,0);o(this,X,0);o(this,S,null);o(this,it,null);a(this,E,t),a(this,W,t.canvas)}get scale(){return i(this,bt)}async loadImage(t){try{const e=await lt(t.url);a(this,S,e),a(this,K,e.width),a(this,X,e.height),a(this,it,t)}catch(e){throw console.error(e),new Error("Failed to load wanted image.")}}setSize({width:t,height:e,padding:s}){if(!i(this,S))throw new Error("Failed to set size: wanted image is null");a(this,K,t!=null?t:i(this,K)),a(this,X,e!=null?e:i(this,X)),a(this,B,s!=null?s:i(this,B));const n=i(this,S).width+i(this,B)*2,r=i(this,S).height+i(this,B)*2,c=_t(i(this,K),i(this,X),n,r);return a(this,bt,c),a(this,y,i(this,B)*c),i(this,W).width=n*c,i(this,W).height=r*c,{wantedImageInfo:d(this,Mt,ke).call(this,c,i(this,y)),scale:c,scaledPadding:i(this,y)}}render(){!i(this,S)||(i(this,E).save(),i(this,E).shadowColor="rgba(0, 0, 0, 1)",i(this,E).shadowBlur=i(this,y),i(this,E).drawImage(i(this,S),i(this,y),i(this,y),i(this,W).width-i(this,y)*2,i(this,W).height-i(this,y)*2),i(this,E).restore())}}E=new WeakMap,W=new WeakMap,bt=new WeakMap,y=new WeakMap,B=new WeakMap,K=new WeakMap,X=new WeakMap,S=new WeakMap,it=new WeakMap,Mt=new WeakSet,ke=function(t,e){if(!i(this,it))throw new Error("Failed to calculate wanted image info: WantedImageInfo object is null");const{url:s,width:n,height:r,avatarPosition:c,namePosition:l,bountyPosition:p,bountyFontSize:u,boundaryOffset:m,bellySignSize:x}=i(this,it),A=U=>{const{x:dt,y:ut,width:J,height:Rt}=U;return{x:dt*t+e,y:ut*t+e,width:J*t,height:Rt*t}};return{url:s,width:n,height:r,avatarPosition:A(c),namePosition:A(l),bountyPosition:A(p),bountyFontSize:u*t,boundaryOffset:{left:m.left*t+e,right:m.right*t+e,top:m.top*t+e,bottom:m.bottom*t+e},bellySignSize:{width:x.width*t,height:x.height*t}}};var g,T,j,v,st,Y,q,wt,yt,Ot,ze,Nt,Ce,Ut,We,Ht,Be,Dt,Te,Ft,je;class Re extends Yt{constructor(t,e){super(t);o(this,Ot);o(this,Nt);o(this,Ut);o(this,Ht);o(this,Dt);o(this,Ft);o(this,g,void 0);o(this,T,!1);o(this,j,!1);o(this,v,!1);o(this,st,4);o(this,Y,null);o(this,q,0);o(this,wt,0);o(this,yt,0);a(this,g,e),e.on("imageloaded",()=>this.reset()),t.canvas.addEventListener("mousedown",d(this,Ot,ze).bind(this)),t.canvas.addEventListener("mouseup",d(this,Nt,Ce).bind(this)),t.canvas.addEventListener("mousemove",d(this,Ut,We).bind(this)),t.canvas.addEventListener("mouseout",d(this,Ht,Be).bind(this))}reset(){this.x=i(this,g).x,this.y=i(this,g).y,this.width=i(this,g).width,this.height=i(this,g).height,a(this,T,!1),a(this,j,!1),a(this,v,!1)}render(){!i(this,T)&&!i(this,v)||(this.ctx.save(),ee(this,q)._++,i(this,q)>16&&a(this,q,0),this.ctx.lineDashOffset=-i(this,q),this.ctx.fillStyle="rgba(255,255,255,0.5)",this.ctx.strokeStyle="red",this.ctx.lineWidth=i(this,st),this.ctx.setLineDash([10,5]),this.ctx.fillRect(this.x,this.y,this.width,this.height),this.ctx.strokeRect(this.x,this.y,this.width,this.height),this.ctx.restore())}}g=new WeakMap,T=new WeakMap,j=new WeakMap,v=new WeakMap,st=new WeakMap,Y=new WeakMap,q=new WeakMap,wt=new WeakMap,yt=new WeakMap,Ot=new WeakSet,ze=function(){a(this,j,!0)},Nt=new WeakSet,Ce=function(){a(this,j,!1),a(this,v,!1)},Ut=new WeakSet,We=function(t){const{left:e,top:s}=this.ctx.canvas.getBoundingClientRect(),n=t.clientX-e,r=t.clientY-s;if(i(this,j)){const c=t.clientX-i(this,wt),l=t.clientY-i(this,yt);d(this,Ft,je).call(this,c,l)}i(this,v)||d(this,Dt,Te).call(this,n,r),ve(n,r,this.x,this.y,this.width,this.height,i(this,st))?a(this,T,!0):a(this,T,!1),a(this,wt,t.clientX),a(this,yt,t.clientY)},Ht=new WeakSet,Be=function(){a(this,j,!1),a(this,v,!1)},Dt=new WeakSet,Te=function(t,e){const s=Ae(t,e,this.x,this.y,this.width,this.height,i(this,st));s.left||s.right?(this.ctx.canvas.style.cursor="ew-resize",a(this,Y,s.left?"left":"right")):s.top||s.bottom?(this.ctx.canvas.style.cursor="ns-resize",a(this,Y,s.top?"top":"bottom")):i(this,T)?this.ctx.canvas.style.cursor="move":this.ctx.canvas.style.cursor="default"},Ft=new WeakSet,je=function(t,e){switch(this.ctx.canvas.style.cursor){case"move":this.x+=t,this.y+=e,i(this,g).x+=t,i(this,g).y+=e,i(this,g).updateRenderPosition();break;case"ew-resize":{if(a(this,v,!0),i(this,Y)==="right"){const s=Math.max(this.width+t,1);this.width=s,i(this,g).width=s}else{const s=this.x+t;if(s>=this.x+this.width)break;const n=this.width-t;this.x=s,i(this,g).x=s,this.width=n,i(this,g).width=n}i(this,g).updateRenderPosition();break}case"ns-resize":{if(a(this,v,!0),i(this,Y)==="bottom"){const s=Math.max(this.height+e,1);this.height=s,i(this,g).height=s}else{const s=this.y+e;if(s>=this.y+this.height)break;const n=this.height-e;this.y=s,i(this,g).y=s,this.height=n,i(this,g).height=n}i(this,g).updateRenderPosition()}}};const Me=["name","bounty","avatar-url","filter","padding"];var M,O,xt,f,nt,L,P,k,R,ot,vt,at,Gt,At,he,It,ce;class Oe extends HTMLElement{constructor(){super();o(this,at);o(this,At);o(this,It);o(this,M,void 0);o(this,O,void 0);o(this,xt,void 0);o(this,f,void 0);o(this,nt,void 0);o(this,L,void 0);o(this,P,void 0);o(this,k,void 0);o(this,R,void 0);o(this,ot,void 0);o(this,vt,void 0);a(this,R,"init");const t=this.attachShadow({mode:"open"}),e=document.createElement("canvas"),s=document.createElement("div");s.className="container",s.appendChild(e);const n=document.createElement("style");n.textContent=Ee,t.append(n,s);const r=e.getContext("2d");a(this,M,s),a(this,O,e),a(this,xt,r),a(this,k,new re(r)),a(this,f,new ne(r)),a(this,L,new ie(r)),a(this,P,new ae(r)),a(this,nt,new Re(r,i(this,f))),a(this,ot,new ResizeObserver(()=>{clearTimeout(i(this,vt)),a(this,vt,window.setTimeout(()=>d(this,At,he).call(this),200))})),i(this,ot).observe(s)}async export(){var Rt,Zt;const t=document.createElement("canvas");t.style.display="none",i(this,M).appendChild(t);const e=t.getContext("2d"),s=d(this,at,Gt).call(this),n=new re(e),r=new ne(e),c=new ie(e),l=new ae(e);await n.loadImage(Ct);const p=Ct.width+s*2,u=Ct.height+s*2,{wantedImageInfo:m}=n.setSize({width:p,height:u,padding:s});await r.init(m),await c.init(m.namePosition),await l.init(m),await r.loadImage(this.getAttribute("avatar-url")),c.text=(Rt=this.getAttribute("name"))!=null?Rt:"",l.text=(Zt=this.getAttribute("bounty"))!=null?Zt:"";const{x,y:A,width:U,height:dt,filter:ut}=i(this,f),J=i(this,k).scale;r.x=x/J,r.y=A/J,r.width=U/J,r.height=dt/J,r.filter=ut,r.updateRenderPosition(),r.render(),n.render(),l.render(),c.render();try{t.toBlob(zt=>{if(!zt)return;const $t=URL.createObjectURL(zt);Ie($t,"wanted-poster.png"),URL.revokeObjectURL($t),i(this,M).removeChild(t)},"image/png",1)}catch(zt){console.error(zt),this.dispatchEvent(new CustomEvent("ExportError",{bubbles:!0}))}}static get observedAttributes(){return Me}async connectedCallback(){var n,r;console.log("[connected]"),await new Promise(c=>{setTimeout(()=>c(""))}),a(this,R,"loading");const t=d(this,at,Gt).call(this),e=i(this,M).getBoundingClientRect();try{await i(this,k).loadImage(Ct);const{wantedImageInfo:c}=i(this,k).setSize({width:e.width,height:e.height,padding:t});await i(this,f).init(c),await i(this,L).init(c.namePosition),await i(this,P).init(c),await i(this,f).loadImage(this.getAttribute("avatar-url"))}catch(c){a(this,R,"error"),console.error("Failed to init wanted poster.",c);return}i(this,L).text=(n=this.getAttribute("name"))!=null?n:"",i(this,P).text=(r=this.getAttribute("bounty"))!=null?r:"";const s=this.getAttribute("filter");s&&(i(this,f).filter=s),a(this,R,"success"),d(this,It,ce).call(this),this.dispatchEvent(new CustomEvent("WantedPosterLoaded",{bubbles:!0}))}disconnectedCallback(){console.log("[disconnected]"),i(this,ot).disconnect()}adoptedCallback(){console.log("[adopted]")}async attributeChangedCallback(t,e,s){if(i(this,R)==="success")switch(t){case"name":i(this,L).text=s;break;case"bounty":i(this,P).text=s;break;case"avatar-url":{await i(this,f).loadImage(s);break}case"filter":{i(this,f).filter=s;break}case"padding":{d(this,At,he).call(this);break}}}}M=new WeakMap,O=new WeakMap,xt=new WeakMap,f=new WeakMap,nt=new WeakMap,L=new WeakMap,P=new WeakMap,k=new WeakMap,R=new WeakMap,ot=new WeakMap,vt=new WeakMap,at=new WeakSet,Gt=function(){const t=this.getAttribute("padding");if(!t)return 0;const e=Number.parseInt(t);return Number.isNaN(e)?0:e},At=new WeakSet,he=function(){if(i(this,R)!=="success")return;const t=d(this,at,Gt).call(this),e=i(this,M).getBoundingClientRect(),s=_t(e.width,e.height,i(this,O).width,i(this,O).height),{wantedImageInfo:n}=i(this,k).setSize({width:e.width,height:e.height,padding:t});i(this,L).setPosition(n.namePosition),i(this,P).setPosition(n),i(this,f).setWantedImageInfo(n),i(this,f).scale(s),i(this,nt).scale(s)},It=new WeakSet,ce=function(){i(this,xt).clearRect(0,0,i(this,O).width,i(this,O).height),i(this,f).render(),i(this,k).render(),i(this,P).render(),i(this,L).render(),i(this,nt).render(),requestAnimationFrame(d(this,It,ce).bind(this))};customElements.define("wanted-poster",Oe);var Ne=`.app{width:100%;height:100%;background-image:url(./images/wood-panel.jpg);background-blend-mode:multiply;background-size:cover;background-position:center;padding:1rem;box-sizing:border-box;transition:background-color .2s}.app--warcriminal{background-image:url(./images/wood-panel.jpg),url(./images/blood-stains-0.png)}.app--dragin{background-color:silver}#uploadInput{display:none}.blood-overlay{position:absolute;width:100%;height:100%;top:0;left:0;opacity:.8;display:none;background-image:url(./images/blood-stains-1.png);background-size:cover;background-position:center;mix-blend-mode:multiply;animation-name:fade-in;animation-duration:4s}.blood-overlay--visible{display:block}.loading-overlay{position:absolute;width:100%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:center;background-image:radial-gradient(#e1e4e7,#a5aab0)}.loading-overlay__luffy{max-width:50vw;max-height:40vh;animation-name:logo-blink;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear;filter:contrast(80%) brightness(85%) drop-shadow(0 1px 3px gray)}.img-button{cursor:pointer;width:5rem;height:5rem;border:0;padding:0;background-color:transparent;background-size:contain;background-repeat:no-repeat;background-position:center;transition:.5s}.img-button--upload,.img-button--download{position:absolute;bottom:1rem;filter:contrast(100%) brightness(100%) drop-shadow(0 0 5px gray)}.img-button--upload{left:1rem;background-image:url(./images/upload-icon.png)}.img-button--download{left:6rem;background-image:url(./images/download-icon.png)}.img-button--upload:hover,.img-button--download:hover{filter:contrast(110%) brightness(110%) drop-shadow(0 1px 5px black)}.img-button--blood-hand{position:absolute;bottom:0;right:0;margin-right:1rem;margin-bottom:1rem;background-image:url(./images/blood-hand.png);filter:contrast(80%) brightness(85%) drop-shadow(0 0 3px gray);mix-blend-mode:multiply}.img-button--blood-hand:hover{filter:contrast(100%) brightness(100%) drop-shadow(0 0 15px #770707)}@keyframes logo-blink{50%{filter:contrast(120%) brightness(110%) drop-shadow(0 5px 3px gray)}}@keyframes fade-in{0%{opacity:0}to{opacity:.8}}
`;const ge=document.createElement("template");ge.innerHTML=`
<main class="app">
  <input id="uploadInput" type="file" >
  <slot name="poster"></slot>
  <div class="blood-overlay"></div>

  <slot></slot>

  <button id="uploadButton" class="img-button img-button--upload"></button>
  <button id="downloadButton" class="img-button img-button--download"></button>
  <button id="bloodhandButton" class="img-button img-button--blood-hand"></button>

  <div class="loading-overlay">
    <img class="loading-overlay__luffy" src="./images/luffy.png"/>
  </div>
</main>
`;const Qt="#warcriminal",Ue={name:"PUTLER",padding:"10",bounty:"??????????","avatar-url":"./images/war-criminal.png"};var rt,N,Et,St,Lt,Pt,b,ht,Kt,De,Xt,Fe,kt,le,ct,Vt;class He extends HTMLElement{constructor(){super();o(this,Kt);o(this,Xt);o(this,kt);o(this,ct);o(this,rt,void 0);o(this,N,void 0);o(this,Et,void 0);o(this,St,void 0);o(this,Lt,void 0);o(this,Pt,0);o(this,b,void 0);o(this,ht,void 0);const t=this.attachShadow({mode:"open"});a(this,b,t);const e=document.createElement("style");e.textContent=Ne,t.append(e,ge.content.cloneNode(!0)),t.addEventListener("WantedPosterLoaded",()=>{d(this,Kt,De).call(this)});const s=i(this,b).querySelector("slot[name=poster]");a(this,rt,s==null?void 0:s.assignedNodes()[0]),a(this,N,i(this,b).querySelector("#uploadInput")),a(this,Et,i(this,b).querySelector("#uploadButton")),a(this,St,i(this,b).querySelector("#downloadButton")),a(this,Lt,i(this,b).querySelector("#bloodhandButton")),a(this,ht,d(this,Xt,Fe).bind(this)),window.addEventListener("hashchange",i(this,ht))}connectedCallback(){a(this,Pt,new Date().getTime()),location.hash===Qt&&d(this,kt,le).call(this,!0);const t=i(this,b).querySelector("main");t.addEventListener("dragover",e=>{e.preventDefault()}),t.addEventListener("dragenter",()=>{t.classList.add("app--dragin")}),t.addEventListener("dragleave",()=>{t.classList.remove("app--dragin")}),t.addEventListener("drop",e=>{var r;e.preventDefault(),t.classList.remove("app--dragin");const s=(r=e.dataTransfer)==null?void 0:r.files[0];if(!s||!s.type.startsWith("image"))return;const n=URL.createObjectURL(s);d(this,ct,Vt).call(this,{"avatar-url":n})}),i(this,N).addEventListener("change",()=>{const e=i(this,N).files?i(this,N).files[0]:null;if(!e||!e.type.startsWith("image"))return;const s=URL.createObjectURL(e);d(this,ct,Vt).call(this,{"avatar-url":s})}),i(this,Et).addEventListener("click",()=>{i(this,N).click()}),i(this,St).addEventListener("click",()=>{i(this,rt).export()}),i(this,Lt).addEventListener("click",()=>{location.hash=Qt})}disconnectedCallback(){window.removeEventListener("hashchange",i(this,ht))}adoptedCallback(){}}rt=new WeakMap,N=new WeakMap,Et=new WeakMap,St=new WeakMap,Lt=new WeakMap,Pt=new WeakMap,b=new WeakMap,ht=new WeakMap,Kt=new WeakSet,De=function(){const t=i(this,b).querySelector(".loading-overlay");let e=1e3,s=setInterval(()=>{new Date().getTime()-i(this,Pt)<e||(clearTimeout(s),t.style.transition="opacity 1s",t.style.opacity="0",setTimeout(()=>{t.remove()},1e3))},200)},Xt=new WeakSet,Fe=function(){d(this,kt,le).call(this,location.hash===Qt)},kt=new WeakSet,le=function(t){const e=i(this,b).querySelector(".app"),s=i(this,b).querySelector(".blood-overlay");if(!(!e||!s)){if(!t){e.classList.remove("app--warcriminal"),s.classList.remove("blood-overlay--visible");return}e.classList.add("app--warcriminal"),s.classList.add("blood-overlay--visible"),d(this,ct,Vt).call(this,Ue)}},ct=new WeakSet,Vt=function(t){var s;const e=Object.keys(t);for(let n of e){const r=(s=t[n])!=null?s:"";i(this,rt).setAttribute(n,r)}};customElements.define("app-container",He);
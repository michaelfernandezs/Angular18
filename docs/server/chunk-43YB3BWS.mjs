import './polyfills.server.mjs';
import{j as U}from"./chunk-TCSW3X5U.mjs";import{a as W,b as K}from"./chunk-NZ77PFJW.mjs";import{$ as y,F,G as M,I as V,Ia as z,K as p,Ka as l,La as J,Ma as q,Na as A,Oa as G,P as s,Pa as o,Qa as a,Ra as w,S as b,Sa as j,Ta as m,Ua as h,Va as n,Wa as I,Xa as H,Ya as C,Za as R,_ as k,aa as D,f as E,g as L,k as g,ka as N,la as O,o as u,u as $,wa as B,za as d}from"./chunk-PU3LTF5J.mjs";import"./chunk-5XUXGTUW.mjs";var f=class e{productsService=s(K);initialState={products:[],status:"loading",page:1};changePage$=new E;loadProducts$=this.changePage$.pipe(F(1),M(t=>this.productsService.getProducts(t)),u(t=>({products:t,status:"success"})),$(()=>g({products:[],status:"error"})));State=W({initialState:this.initialState,sources:[this.changePage$.pipe(u(t=>({page:t,status:"loading"}))),this.loadProducts$]});static \u0275fac=function(r){return new(r||e)};static \u0275prov=p({token:e,factory:e.\u0275fac})};var X=e=>["/product,product",e],v=class e{product=O.required();addToCart=N();add(t){t.stopPropagation(),t.preventDefault,this.addToCart.emit(this.product())}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=b({type:e,selectors:[["app-product-card"]],inputs:{product:[1,"product"]},outputs:{addToCart:"addToCart"},standalone:!0,features:[C],decls:19,vars:6,consts:[[3,"routerLink"],[1,"max-w-sm","bg-white","border","border-gray-200","rounded-lg","shadow","dark:bg-gray-800","dark:border-gray-700"],["alt","",1,"rounded-t-lg","h-60","w-full","object-contain","object-center",3,"src"],[1,"p-5"],["href","#"],[1,"mb-2","text-xl","font-bold","tracking-tight","text-gray-900","dark:text-white","line-clamp-1"],[1,"mb-3","font-normal","text-gray-700","dark:text-gray-400","line-clamp-3"],[1,"flex","justify-end","my-4"],[1,"inline-flex","items-center","gap-4","px-3","py-2","text-sm","font-medium","text-center","text-white","bg-blue-700","rounded-lg","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-shopping-cart"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"],["d","M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"],["d","M17 17h-11v-14h-2"],["d","M6 5l14 1l-1 7h-13"]],template:function(r,i){r&1&&(o(0,"a",0)(1,"div",1)(2,"picture"),w(3,"img",2),a(),o(4,"div",3)(5,"a",4)(6,"h5",5),n(7),a()(),o(8,"p",6),n(9),a(),o(10,"div",7)(11,"button",8),m("click",function(_){return i.add(_)}),D(),o(12,"svg",9),w(13,"path",10)(14,"path",11)(15,"path",12)(16,"path",13)(17,"path",14),a(),n(18," Agregar al carrito "),a()()()()()),r&2&&(l("routerLink",R(4,X,i.product().id)),d(3),l("src",i.product().image,B),d(4),I("",i.product().title," "),d(2),I("",i.product().description," "))},dependencies:[U]})};var P=class e{loadProducts(){let t=localStorage.getItem("products");return g(t?JSON.parse(t):[])}saveProducts(t){localStorage.setItem("products",JSON.stringify(t))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})};var x=class e{_storageService=s(P);stateSubject=new L({products:[],loaded:!1});state$=this.stateSubject.asObservable();loadProducts$=this._storageService.loadProducts().pipe(u(t=>({products:t,loaded:!0})),V(t=>{console.log("Loaded products:",t.products),this.stateSubject.next(t)}));constructor(){this.loadProducts$.subscribe()}getState(){return this.stateSubject.getValue()}load(){let t=this.getState();console.log("Current state products:",t.products)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})};function Y(e,t){e&1&&(o(0,"p"),n(1,"Loading...."),a())}function Z(e,t){e&1&&(o(0,"p"),n(1,"Error"),a())}function tt(e,t){if(e&1){let r=j();o(0,"app-product-card",5),m("addToCart",function(c){k(r);let _=h(2);return y(_.addToCart(c))}),a()}if(e&2){let r=t.$implicit;l("product",r)}}function et(e,t){if(e&1){let r=j();o(0,"div",1)(1,"button",2),m("click",function(){k(r);let c=h();return y(c.changePage())}),n(2,"Cambiar Pagina' "),a()(),o(3,"div",3),A(4,tt,1,1,"app-product-card",4,q),a()}if(e&2){let r=h();d(4),G(r.productsState.State().products)}}var T=class e{productsState=s(f);cartState$=s(x).state$;constructor(){this.cartState$.subscribe(t=>{console.log("Cart state in component:",t.products)})}changePage(){let t=this.productsState.State.page()+1;this.productsState.changePage$.next(t)}addToCart(t){}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=b({type:e,selectors:[["app-product-list"]],standalone:!0,features:[H([f]),C],decls:4,vars:1,consts:[[1,"mx-auto","max-w-screen-xl"],[1,"flex","justify-end","my-6"],["type","button",1,"text-white","bg-red-600","hover:bg-blue-800","focus:ring-4","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","me-2","mb-2","dark:bg-red-600","dark:hover:bg-red-500","focus:outline-none","dark:focus:ring-blue-800",3,"click"],[1,"grid","grid-cols-[repeat(4,300px)]","gap-6"],[1,"block",3,"product"],[1,"block",3,"addToCart","product"]],template:function(r,i){if(r&1&&(o(0,"div",0),z(1,Y,2,0,"p")(2,Z,2,0,"p")(3,et,6,0),a()),r&2){let c;d(),J((c=i.productsState.State.status())==="loading"?1:c==="error"?2:3)}},dependencies:[v]})};export{T as default};

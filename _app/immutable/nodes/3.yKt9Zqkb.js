import{s as q,f as v,a as x,g,h as p,V as T,c as y,d as m,j as _,i as I,L as d,P as k,N as M,l as N,m as O,n as P,K as C}from"../chunks/scheduler.QYQhCKBw.js";import{e as w}from"../chunks/each.6w4Ej4nR.js";import{S as z,i as A}from"../chunks/index.EpRJiGS7.js";const G=!1;async function H(){return{repos:await fetch("https://services.mangaraiku.eu.org/v1/contributors").then(e=>e.json())}}const Q=Object.freeze(Object.defineProperty({__proto__:null,load:H,ssr:G},Symbol.toStringTag,{value:"Module"}));function S(h,e,l){const n=h.slice();return n[1]=e[l].repo,n[2]=e[l].contributors,n}function V(h,e,l){const n=h.slice();return n[5]=e[l],n}function j(h){let e,l,n,u,f,a,r=h[5].login+"",c,t;return{c(){e=v("div"),l=v("img"),f=x(),a=v("div"),c=N(r),t=x(),this.h()},l(s){e=g(s,"DIV",{class:!0});var i=p(e);l=g(i,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),f=y(i),a=g(i,"DIV",{class:!0});var o=p(a);c=O(o,r),o.forEach(m),t=y(i),i.forEach(m),this.h()},h(){C(l.src,n=h[5].avatar_url)||_(l,"src",n),_(l,"alt",u="avatar "+h[5].login),_(l,"width","40"),_(l,"height","40"),_(l,"class","rounded-1/2 mr-2"),_(a,"class","truncate"),_(e,"class","w-1/2 sm:w-1/4 md:1/6 lg:1/8 min-w-0 flex items-center px-2 py-1.5")},m(s,i){I(s,e,i),d(e,l),d(e,f),d(e,a),d(a,c),d(e,t)},p(s,i){i&1&&!C(l.src,n=s[5].avatar_url)&&_(l,"src",n),i&1&&u!==(u="avatar "+s[5].login)&&_(l,"alt",u),i&1&&r!==(r=s[5].login+"")&&P(c,r)},d(s){s&&m(e)}}}function D(h){let e,l,n=h[1].full_name+"",u,f,a,r,c=w(h[2]),t=[];for(let s=0;s<c.length;s+=1)t[s]=j(V(h,c,s));return{c(){e=v("section"),l=v("div"),u=N(n),f=x(),a=v("div");for(let s=0;s<t.length;s+=1)t[s].c();r=x(),this.h()},l(s){e=g(s,"SECTION",{class:!0});var i=p(e);l=g(i,"DIV",{class:!0});var o=p(l);u=O(o,n),o.forEach(m),f=y(i),a=g(i,"DIV",{class:!0});var b=p(a);for(let E=0;E<t.length;E+=1)t[E].l(b);b.forEach(m),r=y(i),i.forEach(m),this.h()},h(){_(l,"class","py-3 px-6 bg-[hsl(230,9%,13%)]"),_(a,"class","flex flex-wrap mx-4 mb-4 mt-2"),_(e,"class","border border-gray-600 rounded-30px my-5 overflow-hidden svelte-1xdyh5c")},m(s,i){I(s,e,i),d(e,l),d(l,u),d(e,f),d(e,a);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(a,null);d(e,r)},p(s,i){if(i&1&&n!==(n=s[1].full_name+"")&&P(u,n),i&1){c=w(s[2]);let o;for(o=0;o<c.length;o+=1){const b=V(s,c,o);t[o]?t[o].p(b,i):(t[o]=j(b),t[o].c(),t[o].m(a,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=c.length}},d(s){s&&m(e),M(t,s)}}}function K(h){let e,l,n=`Made possible by
    the community.`,u,f=w(h[0].repos),a=[];for(let r=0;r<f.length;r+=1)a[r]=D(S(h,f,r));return{c(){e=v("main"),l=v("h1"),l.textContent=n,u=x();for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=g(r,"MAIN",{class:!0});var c=p(e);l=g(c,"H1",{class:!0,"data-svelte-h":!0}),T(l)!=="svelte-1cl7vie"&&(l.textContent=n),u=y(c);for(let t=0;t<a.length;t+=1)a[t].l(c);c.forEach(m),this.h()},h(){_(l,"class","text-26px font-medium text-center"),_(e,"class","mt-7rem mx-4")},m(r,c){I(r,e,c),d(e,l),d(e,u);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(e,null)},p(r,[c]){if(c&1){f=w(r[0].repos);let t;for(t=0;t<f.length;t+=1){const s=S(r,f,t);a[t]?a[t].p(s,c):(a[t]=D(s),a[t].c(),a[t].m(e,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=f.length}},i:k,o:k,d(r){r&&m(e),M(a,r)}}}function L(h,e,l){let{data:n}=e;return h.$$set=u=>{"data"in u&&l(0,n=u.data)},[n]}class R extends z{constructor(e){super(),A(this,e,L,K,q,{data:0})}}export{R as component,Q as universal};

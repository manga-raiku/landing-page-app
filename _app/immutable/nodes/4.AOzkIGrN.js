import{s as I,f as w,a as P,l as g,g as v,h as S,c as z,d as m,m as h,j as B,i as b,L as d,n as D}from"../chunks/scheduler.QYQhCKBw.js";import{S as M,i as T,b as j,d as y,m as E,a as N,t as O,e as k}from"../chunks/index.EpRJiGS7.js";import{B as C,D as V}from"../chunks/Button.b7UdYf3C.js";const q=!1;async function A(){return{latest:(await fetch("https://api.github.com/repos/manga-raiku/raiku-app/releases").then(a=>a.json())).find(a=>a.tag_name.startsWith("android@"))}}const K=Object.freeze(Object.defineProperty({__proto__:null,load:A,ssr:q},Symbol.toStringTag,{value:"Module"}));function L(o){let t,a,s,l;return t=new V({props:{class:"size-1.5em"}}),{c(){j(t.$$.fragment),a=g(`

      v`),s=g(o[1])},l(e){y(t.$$.fragment,e),a=h(e,`

      v`),s=h(e,o[1])},m(e,i){E(t,e,i),b(e,a,i),b(e,s,i),l=!0},p(e,i){(!l||i&2)&&D(s,e[1])},i(e){l||(N(t.$$.fragment,e),l=!0)},o(e){O(t.$$.fragment,e),l=!1},d(e){e&&(m(a),m(s)),k(t,e)}}}function R(o){let t;return{c(){t=g("View Source")},l(a){t=h(a,"View Source")},m(a,s){b(a,t,s)},d(a){a&&m(t)}}}function W(o){let t,a,s,l,e,i,u,_=(o[0].latest.body||"No changelog")+"",$,p;return s=new C({props:{href:o[0].latest.assets[0].browser_download_url,target:"_blank",color:"blue",$$slots:{default:[L]},$$scope:{ctx:o}}}),e=new C({props:{href:o[0].latest.html_url,color:"grey",$$slots:{default:[R]},$$scope:{ctx:o}}}),{c(){t=w("main"),a=w("section"),j(s.$$.fragment),l=P(),j(e.$$.fragment),i=P(),u=w("pre"),$=g(_),this.h()},l(n){t=v(n,"MAIN",{class:!0});var r=S(t);a=v(r,"SECTION",{class:!0});var c=S(a);y(s.$$.fragment,c),l=z(c),y(e.$$.fragment,c),c.forEach(m),i=z(r),u=v(r,"PRE",{});var f=S(u);$=h(f,_),f.forEach(m),r.forEach(m),this.h()},h(){B(a,"class","flex items-center justify-center gap-1rem"),B(t,"class","mt-7rem")},m(n,r){b(n,t,r),d(t,a),E(s,a,null),d(a,l),E(e,a,null),d(t,i),d(t,u),d(u,$),p=!0},p(n,[r]){const c={};r&1&&(c.href=n[0].latest.assets[0].browser_download_url),r&6&&(c.$$scope={dirty:r,ctx:n}),s.$set(c);const f={};r&1&&(f.href=n[0].latest.html_url),r&4&&(f.$$scope={dirty:r,ctx:n}),e.$set(f),(!p||r&1)&&_!==(_=(n[0].latest.body||"No changelog")+"")&&D($,_)},i(n){p||(N(s.$$.fragment,n),N(e.$$.fragment,n),p=!0)},o(n){O(s.$$.fragment,n),O(e.$$.fragment,n),p=!1},d(n){n&&m(t),k(s),k(e)}}}function F(o,t,a){let{data:s}=t,l;return o.$$set=e=>{"data"in e&&a(0,s=e.data)},o.$$.update=()=>{o.$$.dirty&1&&a(1,l=s.latest.tag_name.slice((s.latest.tag_name.indexOf("@")>>>0)+1))},[s,l]}class Q extends M{constructor(t){super(),T(this,t,F,W,I,{data:0})}}export{Q as component,K as universal};
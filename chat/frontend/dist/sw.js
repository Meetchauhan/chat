if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const o=e=>i(e,c),t={module:{uri:c},exports:d,require:o};s[c]=Promise.all(r.map((e=>t[e]||o(e)))).then((e=>(n(...e),d)))}}define(["./workbox-1ea6f077"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BbCj_uz4.css",revision:null},{url:"assets/index-JX6p8GqM.js",revision:null},{url:"chatHome.svg",revision:"3504ca4da8f275d19a0fd182016fc9c3"},{url:"fav.svg",revision:"62a59456b646e479fa2f983d01fe4191"},{url:"firebase-messaging-sw.js",revision:"8118c31ef6ac3cdd065024311e99323f"},{url:"index.html",revision:"1b406eb6b2fadd4dcfdc0e6a5157e79c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"request.svg",revision:"131372ecccefaa30f5b16b0e2cc23032"},{url:"searchUser.svg",revision:"14881d52500e90fdde30ec28835dc7bc"},{url:"sendMessageIcon.png",revision:"e70e11573adcf0fcb32c7f65d0fdc50e"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"09f8449bfbe3eb6b8136a65d4d6e3a86"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/chat-i7if\.onrender\.com\/.*$/,new e.NetworkFirst({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET")}));

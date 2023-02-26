(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{58735:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/temple",function(){return n(9736)}])},96901:function(e,s,n){"use strict";n.d(s,{Z:function(){return f}});var t=n(47568),a=n(70603),l=n(70655),r=n(85893),c=n(56371),i=n(67294),d=n(55678),o=n(78073),x=n(38880),u=n(92642),m=n(24319),h=n(6277);function f(){var e=(0,h.C)(),s=e.prices,n=e.lockedValue,f=e.temple,v=(0,o.PJ)({addressOrName:x.jA,contractInterface:new c.Interface(u.Mt),functionName:"harvest"}).config,j=(0,o.GG)(v).writeAsync,N=(0,m.Z)(x.TV.yin.address,x.jA).balanceOf,b=(0,m.Z)(x.TV.yang.address,x.jA).balanceOf,p=!(null===f||void 0===f?void 0:f.nextEpoch)||(null===f||void 0===f?void 0:f.nextEpoch)>new Date,g=function(){var e=(0,t.Z)((function(){var e;return(0,l.__generator)(this,(function(s){switch(s.label){case 0:if(!j)return[2];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,j()];case 2:return s.sent(),null===f||void 0===f||f.refetch(),[3,4];case 3:return e=s.sent(),d.Am.error(String(e)),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),w=(0,a.Z)(i.useState(),2),y=w[0],k=w[1];return i.useEffect((function(){if(null===f||void 0===f?void 0:f.nextEpoch){var e=setInterval((function(){var e=Math.max((f.nextEpoch.valueOf()-Date.now())/1e3,0),s=Math.floor(e/3600),n=Math.floor(e%3600/60),t=Math.floor(e%60);k([s,n,t])}),1e3);return function(){return clearInterval(e)}}}),[null===f||void 0===f?void 0:f.nextEpoch]),(0,r.jsxs)("div",{className:"bg-base-200 flex flex-col gap-5 rounded-xl shadow-xl w-fit p-2 m-2 mx-auto",children:[(0,r.jsx)("div",{className:"text-2xl font-bold text-center",children:"Treasury"}),(0,r.jsx)("div",{className:"stats m-auto",children:(0,r.jsxs)("div",{className:"stat",children:[(0,r.jsx)("div",{className:"stat-title",children:"Total value locked"}),(0,r.jsxs)("div",{className:"stat-value",children:[Object.values(n).reduce((function(e,s){return e+s}),0).toFixed(2),"$"]}),(0,r.jsxs)("div",{className:"stat-desc",children:["Including"," ",[n[x._G],n[x.vW]].reduce((function(e,s){return e+s}),0).toFixed(2),"$ of liquidity"]})]})}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)("div",{className:"bg-base-300 rounded-xl shadow flex flex-col gap-2",children:[(0,r.jsx)("img",{src:x.TV.yin.logo.src,className:"w-12 h-12 p-1 m-auto"}),(0,r.jsx)("div",{className:"text-2xl text-center font-bold",children:x.TV.yin.name}),(0,r.jsxs)("div",{className:"text-xl justify-between stat pt-1",children:[(0,r.jsx)("div",{className:"stat-title",children:"Tokens held"}),(0,r.jsx)("div",{className:"stat-value",children:void 0!==N?N.toNumber().toFixed(2):"???"}),(0,r.jsxs)("div",{className:"stat-desc",children:[void 0!==N&&s?(N.toNumber()*s[x.TV.yin.address]).toFixed(2):"???"," ","$"]})]})]}),(0,r.jsxs)("div",{className:"bg-base-300 rounded-xl shadow flex flex-col gap-2",children:[(0,r.jsx)("img",{src:x.TV.yang.logo.src,className:"w-12 h-12 p-1 m-auto"}),(0,r.jsx)("div",{className:"text-2xl text-center font-bold ",children:x.TV.yang.name}),(0,r.jsxs)("div",{className:"text-xl justify-between stat pt-1",children:[(0,r.jsx)("div",{className:"stat-title",children:"Tokens held"}),(0,r.jsx)("div",{className:"stat-value",children:void 0!==b?b.toNumber().toFixed(2):"???"}),(0,r.jsxs)("div",{className:"stat-desc",children:[void 0!==b&&s?(b.toNumber()*s[x.TV.yang.address]).toFixed(2):"???"," ","$"]})]})]})]}),(0,r.jsx)("div",{className:"btn btn-accent btn-full ".concat(p?"btn-disabled":""),onClick:g,children:p?y?(0,r.jsxs)("div",{children:["Next harvest in ",(0,r.jsx)("br",{}),(0,r.jsxs)("span",{className:"countdown text-xl",children:[(0,r.jsx)("span",{style:{"--value":y[0]}}),":",(0,r.jsx)("span",{style:{"--value":y[1]}}),":",(0,r.jsx)("span",{style:{"--value":y[2]}})]})]}):"Next harvest in ???":"Harvest now!"})]})}},24319:function(e,s,n){"use strict";n.d(s,{Z:function(){return d}});var t=n(41799),a=n(69396),l=n(90482),r=n(56371),c=n(78073),i=n(1534);function d(e,s){var n,d,o=(0,c.mA)(),x={addressOrName:e,contractInterface:new r.Interface(i.em)},u=(0,a.Z)((0,t.Z)({},x),{functionName:"decimals",args:[]}),m=(0,a.Z)((0,t.Z)({},x),{functionName:"balanceOf",args:[s||o.address]}),h=(0,c.Dm)({allowFailure:!0,contracts:[u,m]}),f=h.data,v=h.refetch,j=h.status;return f&&2===f.filter(Boolean).length?{balanceOf:new l.Z(null===(n=f[1])||void 0===n?void 0:n.toString()).div(Math.pow(10,Number(null===(d=f[0])||void 0===d?void 0:d.toString()))),decimals:new l.Z(f[0].toString()).toNumber(),status:j,refetch:v}:{refetch:v,status:j}}},6277:function(e,s,n){"use strict";n.d(s,{C:function(){return l}});var t=n(67294),a=n(10433),l=function(){return t.useContext(a.o)}},9736:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return Z}});var t=n(85893),a=n(96901),l=n(47568),r=n(70655),c=n(56371),i=n(67294),d=n(47516),o=n(55678),x=n(78073),u=n(38880),m=n(92642),h=n(6277);function f(){var e,s=(0,h.C)().temple,n=(0,x.PJ)({addressOrName:u.jA,contractInterface:new c.Interface(m.Mt),functionName:"claimAllVoterShares"}).config,a=(0,x.GG)(n).writeAsync,f=(0,i.useState)(!1),v=f[0],j=f[1],N=function(){var e=(0,l.Z)((function(){var e;return(0,r.__generator)(this,(function(n){switch(n.label){case 0:if(!(null===s||void 0===s?void 0:s.refetch)||!a)return[3,5];j(!0),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,a()];case 2:return n.sent(),s.refetch(),[3,5];case 3:return e=n.sent(),o.Am.error(String(e)),[3,5];case 4:return j(!1),[7];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(null===s||void 0===s?void 0:s.pendingShares)&&((null===s||void 0===s||null===(e=s.pendingShares)||void 0===e?void 0:e.length)||0)>0?(0,t.jsxs)("div",{className:"p-3 bg-base-200 w-fit m-auto rounded-xl",children:[(0,t.jsx)("div",{className:"font-xl text-center text-3xl font-bold",children:"Claim"}),(0,t.jsxs)("table",{className:"table mt-2",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"bg-base-300",children:"Name"}),(0,t.jsx)("th",{className:"bg-base-300",children:"Amount"}),(0,t.jsx)("th",{className:"bg-base-300"})]})}),(0,t.jsx)("tbody",{children:s.pendingShares.map((function(e){return(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,t.jsx)("div",{className:"avatar",children:(0,t.jsx)("div",{className:"w-12 h-12",children:(0,t.jsx)("img",{src:e.token.logo.src,alt:e.token.name})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"font-bold",children:e.token.symbol}),(0,t.jsx)("div",{className:"text-sm opacity-50",children:e.token.name})]})]})}),(0,t.jsx)("td",{className:"text-xl",children:e.amount.toFixed(3)}),(0,t.jsx)("th",{children:(0,t.jsxs)("button",{className:"btn btn-primary ".concat(v?"loading":""),onClick:function(){N()},children:["Claim",(0,t.jsx)(d.Gzv,{className:"ml-1"})]})})]},e.token.address)}))})]})]}):null}var v=n(70603),j=n(5434),N=n(90482),b=n(1534),p=n(93876);function g(e){var s=e.proposal,n=e.isOpen,a=e.onClose,d=(0,v.Z)(i.useState(!1),2),h=d[0],f=d[1],j=(0,v.Z)(i.useState(),2),g=j[0],w=j[1],y=(0,x.mA)().address,k=(0,x.Dm)({allowFailure:!0,contracts:[{addressOrName:p.T.zen.address,contractInterface:new c.Interface(b.em),functionName:"balanceOf",args:[y||u.L1]}]}).data,C=i.useMemo((function(){return k&&k[0]?new N.Z(k[0].toString()).div(Math.pow(10,18)).toNumber():0}),[k]),Z=(0,x.PJ)({addressOrName:u.jA,contractInterface:new c.Interface(m.Mt),functionName:"voteForNextTarget",args:[s.token.address||u.L1,g?new N.Z(g).mul(Math.pow(10,18)).toString():0]}).config,T=(0,x.GG)(Z).writeAsync,V=function(){var e=(0,l.Z)((function(){var e;return(0,r.__generator)(this,(function(s){switch(s.label){case 0:if(!T)return[2];f(!0),s.label=1;case 1:return s.trys.push([1,3,4,5]),[4,T()];case 2:return s.sent(),a(!0),[3,5];case 3:return e=s.sent(),o.Am.error(String(e)),[3,5];case 4:return f(!1),[7];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,t.jsx)("div",{className:"modal ".concat(n?"modal-open":""),children:(0,t.jsxs)("div",{className:"modal-box flex flex-col gap-3",children:[(0,t.jsx)("div",{className:"font-primary text-4xl font-bold text-center",children:"Vote"}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)("input",{placeholder:"Amount...",type:"number",onChange:function(e){return w(Number(e.target.value))},value:g,className:"p-2 rounded w-full"}),(0,t.jsx)("span",{className:"btn",onClick:function(){return w(C)},children:"MAX"})]}),(0,t.jsxs)("div",{className:"text-right",children:["Your balance:"," ",(0,t.jsxs)("span",{className:"font-bold",children:[C," ",p.T.zen.symbol]})]})]}),(0,t.jsxs)("div",{className:"btn-group flex",children:[(0,t.jsx)("div",{className:"btn btn-secondary w-3/6",onClick:function(){return a()},children:"Close"}),(0,t.jsx)("div",{className:"btn btn-primary w-3/6 ".concat(h?"loading":""),onClick:function(){return V()},children:"Vote"})]})]})})}function w(){var e=(0,h.C)().temple,s=(0,v.Z)(i.useState(!1),2),n=s[0],a=s[1],l=(0,v.Z)(i.useState(),2),r=l[0],c=l[1];return(0,t.jsxs)("table",{className:"table w-full",children:[r?(0,t.jsx)(g,{isOpen:n,proposal:r,onClose:function(){a(!1),null===e||void 0===e||e.refetch()}}):null,(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"bg-base-300",children:"Name"}),(0,t.jsx)("th",{className:"bg-base-300",children:"Voices"}),(0,t.jsx)("th",{className:"bg-base-300"})]})}),(0,t.jsx)("tbody",{children:null===e||void 0===e?void 0:e.proposals.map((function(e){return(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,t.jsx)("div",{className:"avatar",children:(0,t.jsx)("div",{className:"w-12 h-12",children:(0,t.jsx)("img",{src:e.token.logo.src,alt:e.token.name})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"font-bold",children:e.token.symbol}),(0,t.jsx)("div",{className:"text-sm opacity-50",children:(0,t.jsx)("a",{href:"".concat(u.wd).concat(e.token.address),children:e.token.name})})]})]})}),(0,t.jsxs)("td",{className:"text-xl",children:[0!==e.shares?(e.voices/e.shares*100).toFixed(1):0,"%"]}),(0,t.jsx)("th",{children:(0,t.jsxs)("button",{className:"btn btn-primary",onClick:function(){a(!0),c(e)},children:["Vote",(0,t.jsx)(j.j2H,{className:"ml-1"})]})})]},e.token.address)}))})]})}function y(){var e,s=(0,h.C)(),n=s.temple,a=s.prices;return(0,t.jsxs)("div",{className:"flex flex-col gap-5 p-3 bg-base-200 rounded-xl shadow-xl w-fit m-auto",children:[(0,t.jsx)("div",{className:"font-xl text-center text-3xl font-bold",children:"Vote"}),(0,t.jsx)("div",{className:"stats",children:(0,t.jsxs)("div",{className:"stat",children:[(0,t.jsx)("div",{className:"stat-title",children:"Value locked in governance"}),(0,t.jsxs)("div",{className:"stat-value",children:[(null===n||void 0===n?void 0:n.proposals[0].shares)&&a[u.TV.zen.address]?((null===n||void 0===n?void 0:n.proposals[0].shares)*a[u.TV.zen.address]).toFixed(3):"???","$"]}),(0,t.jsxs)("div",{className:"stat-desc",children:[(null===n||void 0===n?void 0:n.proposals[0].shares.toFixed(3))||"???"," $ZEN tokens at"," ",(null===(e=a[u.TV.zen.address])||void 0===e?void 0:e.toFixed(3))||"???","$"]}),(0,t.jsx)("div",{className:"stat-figure text-secondary w-12 h-12 p-1",children:(0,t.jsx)("img",{src:u.TV.zen.logo.src,alt:u.TV.zen.name})})]})}),(0,t.jsx)(w,{})]})}function k(){return(0,t.jsxs)("div",{className:"flex flex-col gap-5 p-3",children:[(0,t.jsx)(a.Z,{}),(0,t.jsx)(f,{}),(0,t.jsx)(y,{})]})}var C=n(89170);function Z(){return(0,t.jsx)(C.Z,{children:(0,t.jsx)(k,{})})}},89170:function(e,s,n){"use strict";n.d(s,{Z:function(){return b}});var t=n(85893),a=n(9008),l=n.n(a),r=n(67294),c=n(38880),i=function(){return(0,t.jsx)("footer",{className:"px-4 sm:px-6 py-6 border-t border-neutral",children:(0,t.jsxs)("div",{className:"text-center text-sm",children:[(0,t.jsx)("span",{className:"font-bold text-lg mr-2",children:c.iC})," \xa9"," ",(new Date).getFullYear()," All Rights Reserved"]})})},d=n(70603),o=n(89650),x=n(41664),u=n.n(x),m=n(11163),h=n(8193),f=n(89583),v=function(e){var s=e.className;return(0,t.jsx)(u(),{href:"/",children:(0,t.jsxs)("a",{className:(s||"")+" my-2 flex items-center space-x-1",children:[(0,t.jsx)(f.Wjj,{className:"h-8 w-8 flex-shrink-0 mr-3"}),(0,t.jsx)("span",{className:"font-bold text-3xl font-sans tracking-tight whitespace-nowrap",children:c.iC})]})})},j=[{label:"Farms",link:"/farms"},{label:"Garden",link:"/garden"},{label:"Temple",link:"/temple"},{label:"Docs",href:"https://docs.yinyang.fi"}],N=function(){var e=(0,m.useRouter)(),s=(0,d.Z)(r.useState(!1),2),n=s[0],a=s[1];return(0,t.jsxs)("header",{className:"h-15 border-b border-base-300 relative",children:[(0,t.jsx)("div",{className:"absolute container md:visible invisible left-1/2 -translate-x-1/2 px-4 md:px-6 py-4 flex justify-between items-center",children:(0,t.jsxs)("div",{className:"flex flex-row justify-between w-5/6 mx-auto",children:[(0,t.jsx)(v,{}),(0,t.jsx)("div",{className:"flex",children:(0,t.jsx)("ul",{className:"ml-16 flex items-center my-auto",children:j.map((function(s,n){return(0,t.jsx)("li",{className:"mr-4 ".concat(e.route===s.link?"text-primary border-b border-info":""),children:s.link?(0,t.jsx)(u(),{href:s.link,children:(0,t.jsx)("a",{children:s.label})}):(0,t.jsx)("a",{href:s.href,target:"_blank",children:s.label})},n)}))})}),(0,t.jsx)(o.NL,{})]})}),(0,t.jsxs)("div",{className:"relative container visible md:invisible mx-auto px-4 md:px-6 py-4 flex justify-between items-center",children:[(0,t.jsxs)("div",{className:"flex flex-row justify-between w-full",children:[(0,t.jsx)(v,{className:"mx-auto"}),(0,t.jsx)("div",{className:"btn",onClick:function(){return a(!0)},children:(0,t.jsx)(h.qTj,{})})]}),n?(0,t.jsxs)("div",{className:"fixed top-0 left-0 z-40 h-screen w-screen bg-base-100 transition-transform flex flex-col gap-5",children:[(0,t.jsxs)("div",{className:"flex flex-row justify-between p-4",children:[(0,t.jsx)(v,{className:"mx-auto"}),(0,t.jsxs)("div",{className:"btn",onClick:function(){return a(!1)},children:[(0,t.jsx)("svg",{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",className:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})}),(0,t.jsx)("span",{className:"sr-only",children:"Close menu"})]})]}),(0,t.jsx)("div",{className:"p-2",children:(0,t.jsx)("ul",{className:"text-xl flex items-center flex flex-col gap-2",children:j.map((function(s,n){return(0,t.jsx)("li",{className:"".concat(e.route===s.link?"text-2xl font-bold text-primary border-b border-accent":""),children:s.link?(0,t.jsx)(u(),{href:s.link,children:(0,t.jsx)("a",{children:s.label})}):(0,t.jsx)("a",{href:s.href,target:"_blank",children:s.label})},n)}))})}),(0,t.jsx)("div",{className:"mx-auto",children:(0,t.jsx)(o.NL,{})})]}):null]})]})},b=function(e){var s=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l(),{children:[(0,t.jsx)("title",{children:c.iC}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("div",{className:"min-h-screen mx-auto w-full flex flex-col",children:[(0,t.jsx)(N,{}),(0,t.jsx)("main",{className:"flex-grow container mx-auto px-4 sm:px-6",children:s}),(0,t.jsx)(i,{})]})]})}}},function(e){e.O(0,[617,228,874,449,774,888,179],(function(){return s=58735,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
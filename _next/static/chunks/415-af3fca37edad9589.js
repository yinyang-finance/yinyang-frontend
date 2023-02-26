"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415],{76561:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(47568),r=n(70603),s=n(70655),i=n(85893),l=n(56371),o=n(67294),c=n(89583),u=n(55678),d=n(78073),p=n(38880),m=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_rewardsPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"contract ERC20","name":"_rewardToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract ERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardBlock","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract ERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardsPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),f=n(41799),x=n(69396),y=n(90482),h=n(1534),w=function(e,t){return[{addressOrName:e.token.address,contractInterface:new l.Interface(h.em),functionName:"balanceOf",args:[e.distributor]},{addressOrName:e.distributor,contractInterface:new l.Interface(m.Mt),functionName:"poolInfo",args:[e.poolId]},{addressOrName:e.distributor,contractInterface:new l.Interface(m.Mt),functionName:"userInfo",args:[e.poolId,t||p.L1]},{addressOrName:e.distributor,contractInterface:new l.Interface(m.Mt),functionName:"balanceOf",args:[e.poolId,t||p.L1]},{addressOrName:e.distributor,contractInterface:new l.Interface(m.Mt),functionName:"pendingRewards",args:[e.poolId,t||p.L1]},{addressOrName:e.token.address,contractInterface:new l.Interface(h.em),functionName:"balanceOf",args:[t||p.L1]}]};function b(e){var t=(0,d.mA)().address,n=w(e,t),a=(0,d.Dm)({allowFailure:!0,contracts:n}),s=a.data,i=(a.status,a.refetch),l=(0,r.Z)(o.useState(e),2),c=l[0],u=l[1];return o.useEffect((function(){u(function(){return s&&s.filter(Boolean).length===n.length?(0,x.Z)((0,f.Z)({},e),{refetch:i,totalDeposited:new y.Z(s[0].toString()).div(Math.pow(10,e.token.decimals)).toNumber(),poolInfo:(a=s[1],{token:a[0],allocPoints:new y.Z(a[1].toString()).toNumber(),lastRewardBlock:new y.Z(a[2].toNumber()).toNumber(),accumulatedRewardsPerShare:new y.Z(a[3].toString())}),userInfo:(t=s[2],{amount:new y.Z(t[0].toString()),rewardDebt:new y.Z(t[1].toString())}),userDeposit:new y.Z(s[3].toString()).div(Math.pow(10,e.token.decimals)).toNumber(),userRewards:new y.Z(s[4].toString()).div(Math.pow(10,e.reward.decimals)).toNumber(),userBalance:new y.Z(s[5].toString()).div(Math.pow(10,e.token.decimals)).toNumber()}):(0,x.Z)((0,f.Z)({},e),{refetch:i});var t,a}())}),[s]),o.useEffect((function(){var t=setInterval((function(){c.poolInfo&&u((function(t){var n=(0,f.Z)({},t);if(void 0!==t.userDeposit&&void 0!==t.userRewards&&t.totalDeposited&&void 0!==t.poolInfo){var a=t.userDeposit/t.totalDeposited,r=1e4/86400*e.multiplier/e.totalAllocPoints;n.userRewards=((null===n||void 0===n?void 0:n.userRewards)||0)+a*r*5}return n}))}),5e3);return function(){return clearInterval(t)}}),[c]),{farmData:c}}var v=n(6277),N=n(93876);var j=JSON.parse('{"Mt":[{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');function g(e){var t=e.isOpen,n=e.onClose,c=(0,d.mA)().address,p=(0,d.KQ)({addressOrName:c}),m=p.data,f=p.refetch,x=m?new y.Z(m.value.toString()).div(Math.pow(10,m.decimals)):null,h=(0,r.Z)(o.useState(0),2),w=h[0],b=h[1],v=(0,r.Z)(o.useState(!1),2),g=v[0],T=v[1],k=(0,d.PJ)({addressOrName:N.T.wcanto.address,contractInterface:new l.Interface(j.Mt),functionName:"deposit",overrides:{value:new y.Z(w).mul(Math.pow(10,18)).toString()}}).config,I=(0,d.GG)(k),C=(I.data,I.status,I.isLoading,I.isSuccess,I.writeAsync),Z=function(){var e=(0,a.Z)((function(){var e;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:if(!C)return[2];T(!0),t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,C()];case 2:return t.sent(),f(),n(!0),[3,5];case 3:return e=t.sent(),u.Am.error(String(e)),[3,5];case 4:return T(!1),[7];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)("div",{className:"modal ".concat(t?"modal-open":""),children:(0,i.jsxs)("div",{className:"modal-box flex flex-col gap-3",children:[(0,i.jsx)("div",{className:"font-primary text-4xl font-bold text-center",children:"Wrap Canto"}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)("input",{placeholder:"Amount...",type:"number",onChange:function(e){return b(Number(e.target.value))},value:w,className:"p-2 rounded w-full"}),(0,i.jsx)("span",{className:"btn",onClick:function(){return x?b(x.toNumber()):{}},children:"MAX"})]}),(0,i.jsxs)("div",{className:"text-right",children:["Your balance:"," ",x?x.toNumber():"???"," "]})]}),(0,i.jsxs)("div",{className:"btn-group flex",children:[(0,i.jsx)("div",{className:"btn btn-secondary w-3/6",onClick:function(){return n(!1)},children:"Cancel"}),(0,i.jsx)("div",{className:"btn btn-primary w-3/6 ".concat(g?"loading":""),onClick:function(){return Z()},children:"Confirm"})]})]})})}function T(e){var t=e.farm,n=e.isOpen,p=e.onClose,f=function(e,t,n){var i=(0,d.mA)(),c=(0,d.PJ)({suspense:!0,addressOrName:e,contractInterface:new l.Interface(h.em),functionName:"approve",args:[t,new y.Z(2).pow(256).sub(1).toHex()]}).config,p=(0,d.GG)(c).writeAsync,m=(0,d.do)({addressOrName:e,contractInterface:new l.Interface(h.em),functionName:"allowance",args:[n||i.address,t]}),f=m.data,x=m.refetch,w=(0,r.Z)(o.useState(!1),2),b=w[0],v=w[1],N=function(){var e=(0,a.Z)((function(){var e;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:if(!p)return[3,5];v(!0),t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,p()];case 2:return t.sent(),x(),[3,5];case 3:return e=t.sent(),u.Am.error(String(e)),[3,5];case 4:return v(!1),[7];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return{approve:N,allowance:f?new y.Z(f.toString()):new y.Z(0),isApproving:b}}(t.token.address,t.distributor),x=f.allowance,w=f.approve,b=f.isApproving,v=(0,r.Z)(o.useState(!1),2),j=v[0],T=v[1],k=(0,r.Z)(o.useState(),2),I=k[0],C=k[1],Z=(0,r.Z)(o.useState(!1),2),M=Z[0],_=Z[1],A=(0,d.PJ)({addressOrName:t.distributor,contractInterface:new l.Interface(m.Mt),functionName:"deposit",args:[t.poolId,new y.Z(I||0).mul(Math.pow(10,t.token.decimals||0)).toHex()]}).config,S=(0,d.GG)(A).writeAsync,O=function(){var e=(0,a.Z)((function(){var e;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:if(!S)return[2];T(!0),t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,S()];case 2:return t.sent(),p(!0),[3,5];case 3:return e=t.sent(),u.Am.error(String(e)),[3,5];case 4:return T(!1),[7];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),P=function(){var e=(0,a.Z)((function(){var e;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:if(!w)return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,w()];case 2:return n.sent(),t.refetch&&t.refetch(),[3,4];case 3:return e=n.sent(),u.Am.error(String(e)),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)("div",{className:"modal ".concat(n?"modal-open":""),children:(0,i.jsxs)("div",{className:"modal-box flex flex-col gap-3",children:[(0,i.jsxs)("div",{className:"font-primary text-4xl font-bold text-center",children:["Deposit ",t.token.name]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)("input",{placeholder:"Amount...",type:"number",onChange:function(e){return C(Number(e.target.value))},value:I,className:"p-2 rounded w-full",disabled:!x||x.eq(0)}),(0,i.jsx)("span",{className:"btn",onClick:function(){return C(t.userBalance)},children:"MAX"})]}),(0,i.jsxs)("div",{className:"text-right",children:["Your balance:"," ",(0,i.jsxs)("span",{className:"font-bold",children:[void 0!==t.userBalance?t.userBalance.toFixed(2):"??"," ",t.token.symbol]})]})]}),t.token===N.T.wcanto?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"btn mx-auto",onClick:function(){return _(!0)},children:"Wrap Canto"}),(0,i.jsx)(g,{isOpen:M,onClose:function(e){_(!1),e&&t.refetch&&t.refetch()}})]}):null,void 0!==t.lpTokens?(0,i.jsx)("a",{href:"https://www.cantoswap.fi/#/add/v2/".concat(t.lpTokens[0].address,"/").concat(t.lpTokens[1].address),target:"__blank",className:"mx-auto",children:(0,i.jsxs)("div",{className:"btn flex flex-row gap-2",children:[(0,i.jsx)("div",{className:"my-auto",children:"Add liquidity"}),(0,i.jsx)(c.CkN,{className:"h-4 w-4 my-auto"})]})}):null,(0,i.jsxs)("div",{className:"btn-group flex",children:[(0,i.jsx)("div",{className:"btn btn-secondary w-3/6",onClick:function(){return p()},children:"Cancel"}),x&&x.gt(0)?(0,i.jsx)("div",{className:"btn btn-primary w-3/6 ".concat(j?"loading":""),onClick:function(){return O()},children:"Confirm"}):(0,i.jsx)("div",{className:"btn btn-accent w-3/6 ".concat(b?"btn-loading":""),onClick:P,children:"Approve"})]})]})})}var k=n(24319);function I(e){var t=e.farm,n=e.deposited,c=e.isOpen,f=e.onClose,x=(0,k.Z)(t.token.address),h=x.decimals,w=(x.balanceOf,x.refetch),b=(0,r.Z)(o.useState(!1),2),v=b[0],N=b[1],j=(0,r.Z)(o.useState(),2),g=j[0],T=j[1],I=(0,d.PJ)({addressOrName:p.OR,contractInterface:new l.Interface(m.Mt),functionName:"withdraw",args:[t.poolId,new y.Z(g||0).mul(Math.pow(10,h||0)).toHex()]}).config,C=(0,d.GG)(I).writeAsync,Z=function(){var e=(0,a.Z)((function(){var e;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:if(!C)return[2];N(!0),t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,C()];case 2:return t.sent(),w(),f(!0),[3,5];case 3:return e=t.sent(),u.Am.error(String(e)),[3,5];case 4:return N(!1),[7];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)("div",{className:"modal ".concat(c?"modal-open":""),children:(0,i.jsxs)("div",{className:"modal-box flex flex-col gap-3",children:[(0,i.jsxs)("div",{className:"font-primary text-4xl font-bold text-center",children:["Withdraw ",t.token.name]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)("input",{placeholder:"Amount...",type:"number",onChange:function(e){return T(Number(e.target.value))},value:g,className:"p-2 rounded w-full"}),(0,i.jsx)("span",{className:"btn",onClick:function(){return T(n)},children:"MAX"})]}),(0,i.jsxs)("div",{className:"text-right",children:["Your balance:"," ",(0,i.jsxs)("span",{className:"font-bold",children:[n," ",t.token.symbol]})]})]}),(0,i.jsxs)("div",{className:"btn-group flex",children:[(0,i.jsx)("div",{className:"btn btn-secondary w-3/6",onClick:function(){return f()},children:"Cancel"}),(0,i.jsx)("div",{className:"btn btn-primary w-3/6 ".concat(v?"loading":""),onClick:function(){return Z()},children:"Confirm"})]})]})})}function C(e){var t,n,f=e.farm,x=(0,v.C)().prices,y=b(f).farmData,h=(0,d.PJ)({suspense:!0,addressOrName:f.distributor,contractInterface:new l.Interface(m.Mt),functionName:"withdraw",args:[f.poolId,0]}).config,w=(0,d.GG)(h),N=w.writeAsync,j=(w.error,(0,r.Z)(o.useState(!1),2)),g=j[0],k=j[1],C=(0,r.Z)(o.useState(!1),2),Z=C[0],M=C[1],_=(0,r.Z)(o.useState(!1),2),A=_[0],S=_[1],O=function(){var e=(0,a.Z)((function(){var e;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:if(!N)return[2];k(!0),t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,N()];case 2:return t.sent(),[3,5];case 3:return e=t.sent(),u.Am.error(String(e)),[3,5];case 4:return k(!1),[7];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,i.jsxs)("div",{className:"bg-base-200 p-2 rounded-xl shadow-xl w-fit flex flex-col gap-3",children:[Z?(0,i.jsx)(T,{farm:y,isOpen:Z,onClose:function(e){M(!1),e&&y.refetch&&y.refetch()}}):null,A?(0,i.jsx)(I,{farm:y,deposited:y.userDeposit,isOpen:A,onClose:function(e){S(!1),e&&y.refetch&&y.refetch()}}):null,(0,i.jsxs)("div",{className:"text-2xl font-bold text-center m-auto flex flex-col",children:[f.lpTokens?(0,i.jsxs)("div",{className:"flex flex-row gap-2 mx-auto p-2",children:[(0,i.jsx)("img",{className:"w-12",src:f.lpTokens[0].logo.src}),(0,i.jsx)("img",{className:"w-12",src:f.lpTokens[1].logo.src})]}):(0,i.jsx)("div",{className:"flex flex-row mx-auto p-2",children:(0,i.jsx)("img",{className:"w-12",src:f.token.logo.src})}),(0,i.jsx)("div",{className:"my-auto",children:f.token.name}),(0,i.jsx)("a",{className:"mx-auto",target:"_blank",href:"".concat(p.wd).concat(f.token.address),children:(0,i.jsxs)("div",{className:"text-center text-xs underline flex gap-2 mx-auto",children:[(0,i.jsx)("div",{className:"my-auto",children:"See on explorer"}),(0,i.jsx)(c.CkN,{className:"h-4 w-4 my-auto"})]})})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-1 bg-base-300 p-2 rounded",children:[(0,i.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,i.jsx)("div",{className:"",children:"APR"}),(0,i.jsxs)("div",{className:"font-bold",children:[x[f.reward.address]&&(y.lpTokens?(x[y.lpTokens[0].address]+x[y.lpTokens[1].address])/2:x[f.token.address])&&y.totalDeposited?p.lZ.div(Math.pow(10,18)).mul(5256e3).mul(x[f.reward.address]).div(y.lpTokens?(x[y.lpTokens[0].address]+x[y.lpTokens[1].address])/2:x[f.token.address]).div(y.totalDeposited).toNumber().toFixed(2):"???","%"]})]}),(0,i.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,i.jsx)("div",{className:"",children:"Deposited"}),(0,i.jsxs)("div",{className:"font-bold flex flex-row gap-1",children:[(null===(t=y.userDeposit)||void 0===t?void 0:t.toFixed(2))||"???",f.lpTokens?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{className:"w-4 h-4 my-auto",src:f.lpTokens[0].logo.src}),(0,i.jsx)("img",{className:"w-4 h-4 my-auto",src:f.lpTokens[1].logo.src})]}):(0,i.jsx)("img",{className:"w-4 h-4 my-auto",src:f.token.logo.src})]})]}),(0,i.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,i.jsx)("div",{className:"",children:"Pending"}),(0,i.jsxs)("div",{className:"font-bold flex flex-row gap-1",children:[(0,i.jsx)("div",{children:(null===(n=y.userRewards)||void 0===n?void 0:n.toFixed(2))||"??"}),(0,i.jsx)("img",{className:"w-4 h-4 my-auto",src:f.reward.logo.src})]})]})]}),(0,i.jsx)("div",{className:"flex flex-col gap-1",children:(0,i.jsxs)("div",{className:"btn-group",children:[(0,i.jsx)("div",{className:"btn btn-accent w-2/6 ".concat(g?"loading":""),onClick:O,children:"Collect"}),(0,i.jsx)("div",{className:"btn btn-secondary w-2/6",onClick:function(){return S(!0)},children:"Withdraw"}),(0,i.jsx)("div",{className:"btn btn-primary w-2/6",onClick:function(){return M(!0)},children:"Deposit"})]})})]})}},8216:function(e,t,n){n.d(t,{Re:function(){return s},eb:function(){return l},zO:function(){return i}});var a=n(86290),r=n(93876),s=[{poolId:0,token:r.T.yang,reward:r.T.yin,multiplier:10,distributor:a.tV,totalAllocPoints:19},{poolId:1,token:r.T.cantoShib,reward:r.T.yin,multiplier:5,distributor:a.tV,totalAllocPoints:19},{poolId:2,token:r.T.eth,reward:r.T.yin,multiplier:3,distributor:a.tV,totalAllocPoints:19},{poolId:3,token:r.T.wcanto,reward:r.T.yin,multiplier:1,distributor:a.tV,totalAllocPoints:19}],i=[{poolId:0,token:r.T.yin,reward:r.T.yang,multiplier:10,distributor:a.OR,totalAllocPoints:19},{poolId:1,token:r.T.cantoInu,reward:r.T.yang,multiplier:5,distributor:a.OR,totalAllocPoints:19},{poolId:2,token:r.T.atom,reward:r.T.yang,multiplier:3,distributor:a.OR,totalAllocPoints:19},{poolId:3,token:r.T.wcanto,reward:r.T.yang,multiplier:1,distributor:a.OR,totalAllocPoints:19}],l=[{poolId:0,token:r.T.yinWCantoLp,reward:r.T.zen,multiplier:1,lpTokens:[r.T.yin,r.T.wcanto],distributor:a.jP,totalAllocPoints:12},{poolId:1,token:r.T.yangWCantoLp,reward:r.T.zen,multiplier:1,lpTokens:[r.T.yang,r.T.wcanto],distributor:a.jP,totalAllocPoints:12},{poolId:2,token:r.T.zenWCantoLp,reward:r.T.zen,multiplier:10,lpTokens:[r.T.zen,r.T.wcanto],distributor:a.jP,totalAllocPoints:12}]},24319:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(41799),r=n(69396),s=n(90482),i=n(56371),l=n(78073),o=n(1534);function c(e,t){var n,c,u=(0,l.mA)(),d={addressOrName:e,contractInterface:new i.Interface(o.em)},p=(0,r.Z)((0,a.Z)({},d),{functionName:"decimals",args:[]}),m=(0,r.Z)((0,a.Z)({},d),{functionName:"balanceOf",args:[t||u.address]}),f=(0,l.Dm)({allowFailure:!0,contracts:[p,m]}),x=f.data,y=f.refetch,h=f.status;return x&&2===x.filter(Boolean).length?{balanceOf:new s.Z(null===(n=x[1])||void 0===n?void 0:n.toString()).div(Math.pow(10,Number(null===(c=x[0])||void 0===c?void 0:c.toString()))),decimals:new s.Z(x[0].toString()).toNumber(),status:h,refetch:y}:{refetch:y,status:h}}},6277:function(e,t,n){n.d(t,{C:function(){return s}});var a=n(67294),r=n(10433),s=function(){return a.useContext(r.o)}},89170:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(85893),r=n(9008),s=n.n(r),i=n(67294),l=n(38880),o=function(){return(0,a.jsxs)("footer",{className:"px-4 sm:px-6 py-6 border-t border-neutral",children:[(0,a.jsxs)("div",{className:"text-center text-sm",children:[(0,a.jsx)("span",{className:"font-bold text-lg mr-2",children:l.iC})," \xa9"," ",(new Date).getFullYear()," All Rights Reserved"]}),(0,a.jsxs)("div",{className:"text-center text-sm flex flex-col",children:[(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"https://t.me/+aVZyKUWivutmZDg0",children:"Telegram"})}),(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"https://twitter.com/YinYangFi",children:"Twitter"})})]})]})},c=n(70603),u=n(89650),d=n(41664),p=n.n(d),m=n(11163),f=n(8193),x=n(89583),y=function(e){var t=e.className;return(0,a.jsx)(p(),{href:"/",children:(0,a.jsxs)("a",{className:(t||"")+" my-2 flex items-center space-x-1",children:[(0,a.jsx)(x.Wjj,{className:"h-8 w-8 flex-shrink-0 mr-3"}),(0,a.jsx)("span",{className:"font-bold text-3xl font-sans tracking-tight whitespace-nowrap",children:l.iC})]})})},h=[{label:"Farms",link:"/farms"},{label:"Garden",link:"/garden"},{label:"Temple",link:"/temple"},{label:"Docs",href:"https://docs.yinyang.fi"}],w=function(){var e=(0,m.useRouter)(),t=(0,c.Z)(i.useState(!1),2),n=t[0],r=t[1];return(0,a.jsxs)("header",{className:"h-15 border-b border-base-300 relative",children:[(0,a.jsx)("div",{className:"absolute container md:visible invisible left-1/2 -translate-x-1/2 px-4 md:px-6 py-4 flex justify-between items-center",children:(0,a.jsxs)("div",{className:"flex flex-row justify-between w-5/6 mx-auto",children:[(0,a.jsx)(y,{}),(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)("ul",{className:"ml-16 flex items-center my-auto",children:h.map((function(t,n){return(0,a.jsx)("li",{className:"mr-4 ".concat(e.route===t.link?"text-primary border-b border-info":""),children:t.link?(0,a.jsx)(p(),{href:t.link,children:(0,a.jsx)("a",{children:t.label})}):(0,a.jsx)("a",{href:t.href,target:"_blank",children:t.label})},n)}))})}),(0,a.jsx)(u.NL,{})]})}),(0,a.jsxs)("div",{className:"relative container visible md:invisible mx-auto px-4 md:px-6 py-4 flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex flex-row justify-between w-full",children:[(0,a.jsx)(y,{className:"mx-auto"}),(0,a.jsx)("div",{className:"btn",onClick:function(){return r(!0)},children:(0,a.jsx)(f.qTj,{})})]}),n?(0,a.jsxs)("div",{className:"fixed top-0 left-0 z-40 h-screen w-screen bg-base-100 transition-transform flex flex-col gap-5",children:[(0,a.jsxs)("div",{className:"flex flex-row justify-between p-4",children:[(0,a.jsx)(y,{className:"mx-auto"}),(0,a.jsxs)("div",{className:"btn",onClick:function(){return r(!1)},children:[(0,a.jsx)("svg",{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",className:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})}),(0,a.jsx)("span",{className:"sr-only",children:"Close menu"})]})]}),(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)("ul",{className:"text-xl flex items-center flex flex-col gap-2",children:h.map((function(t,n){return(0,a.jsx)("li",{className:"".concat(e.route===t.link?"text-2xl font-bold text-primary border-b border-accent":""),children:t.link?(0,a.jsx)(p(),{href:t.link,children:(0,a.jsx)("a",{children:t.label})}):(0,a.jsx)("a",{href:t.href,target:"_blank",children:t.label})},n)}))})}),(0,a.jsx)("div",{className:"mx-auto",children:(0,a.jsx)(u.NL,{})})]}):null]})]})},b=function(e){var t=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:l.iC}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("div",{className:"min-h-screen mx-auto w-full flex flex-col",children:[(0,a.jsx)(w,{}),(0,a.jsx)("main",{className:"flex-grow container mx-auto px-4 sm:px-6",children:t}),(0,a.jsx)(o,{})]})]})}}}]);
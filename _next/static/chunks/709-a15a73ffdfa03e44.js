"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[709],{76561:function(e,n,t){t.d(n,{Z:function(){return k}});var a=t(47568),r=t(70603),i=t(70655),s=t(85893),o=t(56371),l=t(67294),c=t(89583),u=t(55678),d=t(78073),p=t(38880),m=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_rewardsPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"contract ERC20","name":"_rewardToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract ERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardBlock","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract ERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardsPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),f=t(41799),y=t(69396),b=t(90482),x=t(1534),h=function(e,n){return[{addressOrName:e.token.address,contractInterface:new o.Interface(x.em),functionName:"balanceOf",args:[e.distributor]},{addressOrName:e.distributor,contractInterface:new o.Interface(m.Mt),functionName:"poolInfo",args:[e.poolId]},{addressOrName:e.distributor,contractInterface:new o.Interface(m.Mt),functionName:"userInfo",args:[e.poolId,n||p.L1]},{addressOrName:e.distributor,contractInterface:new o.Interface(m.Mt),functionName:"balanceOf",args:[e.poolId,n||p.L1]},{addressOrName:e.distributor,contractInterface:new o.Interface(m.Mt),functionName:"pendingRewards",args:[e.poolId,n||p.L1]},{addressOrName:e.token.address,contractInterface:new o.Interface(x.em),functionName:"balanceOf",args:[n||p.L1]}]};function w(e){var n=(0,d.mA)().address,t=h(e,n),a=(0,d.Dm)({allowFailure:!0,contracts:t}),i=a.data,s=(a.status,a.refetch),o=(0,r.Z)(l.useState(e),2),c=o[0],u=o[1];return l.useEffect((function(){u(function(){return i&&i.filter(Boolean).length===t.length?(0,y.Z)((0,f.Z)({},e),{refetch:s,totalDeposited:new b.Z(i[0].toString()).div(Math.pow(10,e.token.decimals)).toNumber(),poolInfo:(a=i[1],{token:a[0],allocPoints:new b.Z(a[1].toString()).toNumber(),lastRewardBlock:new b.Z(a[2].toNumber()).toNumber(),accumulatedRewardsPerShare:new b.Z(a[3].toString())}),userInfo:(n=i[2],{amount:new b.Z(n[0].toString()),rewardDebt:new b.Z(n[1].toString())}),userDeposit:new b.Z(i[3].toString()).div(Math.pow(10,e.token.decimals)).toNumber(),userRewards:new b.Z(i[4].toString()).div(Math.pow(10,e.reward.decimals)).toNumber(),userBalance:new b.Z(i[5].toString()).div(Math.pow(10,e.token.decimals)).toNumber()}):(0,y.Z)((0,f.Z)({},e),{refetch:s});var n,a}())}),[i]),l.useEffect((function(){var e=setInterval((function(){c.poolInfo&&u((function(e){var n=(0,f.Z)({},e);if(void 0!==e.userDeposit&&void 0!==e.userRewards&&e.totalDeposited&&void 0!==e.poolInfo){var t=e.userDeposit/e.totalDeposited;console.log(n.userRewards,t),n.userRewards=((null===n||void 0===n?void 0:n.userRewards)||0)+t*(1e4/86400)*5}return e}))}),5e3);return function(){return clearInterval(e)}}),[c]),{farmData:c}}var v=t(95744);var N=JSON.parse('{"Mt":[{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');function g(e){var n=e.isOpen,t=e.onClose,c=(0,d.mA)().address,p=(0,d.KQ)({addressOrName:c}),m=p.data,f=p.refetch,y=m?new b.Z(m.value.toString()).div(Math.pow(10,m.decimals)):null,x=(0,r.Z)(l.useState(0),2),h=x[0],w=x[1],g=(0,r.Z)(l.useState(!1),2),j=g[0],T=g[1],C=(0,d.PJ)({addressOrName:v.T.wcanto.address,contractInterface:new o.Interface(N.Mt),functionName:"deposit",overrides:{value:new b.Z(h).mul(Math.pow(10,18)).toString()}}).config,k=(0,d.GG)(C),A=(k.data,k.status,k.isLoading,k.isSuccess,k.writeAsync),I=function(){var e=(0,a.Z)((function(){var e;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:if(!A)return[2];T(!0),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,A()];case 2:return n.sent(),f(),t(!0),[3,5];case 3:return e=n.sent(),u.Am.error(String(e)),[3,5];case 4:return T(!1),[7];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,s.jsx)("div",{className:"modal ".concat(n?"modal-open":""),children:(0,s.jsxs)("div",{className:"modal-box flex flex-col gap-3",children:[(0,s.jsx)("div",{className:"font-primary text-4xl font-bold text-center",children:"Wrap Canto"}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)("input",{placeholder:"Amount...",type:"number",onChange:function(e){return w(Number(e.target.value))},value:h,className:"p-2 rounded w-full"}),(0,s.jsx)("span",{className:"btn",onClick:function(){return y?w(y.toNumber()):{}},children:"MAX"})]}),(0,s.jsxs)("div",{className:"text-right",children:["Your balance:"," ",y?y.toNumber():"???"," "]})]}),(0,s.jsxs)("div",{className:"btn-group flex",children:[(0,s.jsx)("div",{className:"btn btn-secondary w-3/6",onClick:function(){return t(!1)},children:"Cancel"}),(0,s.jsx)("div",{className:"btn btn-primary w-3/6 ".concat(j?"loading":""),onClick:function(){return I()},children:"Confirm"})]})]})})}function j(e){var n=e.farm,t=e.isOpen,p=e.onClose,f=function(e,n,t){var s=(0,d.mA)(),c=(0,d.PJ)({addressOrName:e,contractInterface:new o.Interface(x.em),functionName:"approve",args:[n,new b.Z(2).pow(256).sub(1).toHex()]}).config,p=(0,d.GG)(c).writeAsync,m=(0,d.do)({addressOrName:e,contractInterface:new o.Interface(x.em),functionName:"allowance",args:[t||s.address,n]}),f=m.data,y=m.refetch,h=(0,r.Z)(l.useState(!1),2),w=h[0],v=h[1],N=function(){var e=(0,a.Z)((function(){var e;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:if(!p)return[3,5];v(!0),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,p()];case 2:return n.sent(),y(),[3,5];case 3:return e=n.sent(),u.Am.error(String(e)),[3,5];case 4:return v(!1),[7];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return{approve:N,allowance:f?new b.Z(f.toString()):new b.Z(0),isApproving:w}}(n.token.address,n.distributor),y=f.allowance,h=f.approve,w=f.isApproving,N=(0,r.Z)(l.useState(!1),2),j=N[0],T=N[1],C=(0,r.Z)(l.useState(),2),k=C[0],A=C[1],I=(0,r.Z)(l.useState(!1),2),O=I[0],Z=I[1],D=(0,d.PJ)({addressOrName:n.distributor,contractInterface:new o.Interface(m.Mt),functionName:"deposit",args:[n.poolId,new b.Z(k||0).mul(Math.pow(10,n.token.decimals||0)).toHex()]}).config,P=(0,d.GG)(D).writeAsync,S=function(){var e=(0,a.Z)((function(){var e;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:if(!P)return[2];T(!0),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,P()];case 2:return n.sent(),p(!0),[3,5];case 3:return e=n.sent(),u.Am.error(String(e)),[3,5];case 4:return T(!1),[7];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,a.Z)((function(){var e;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:if(!h)return[2];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,h()];case 2:return t.sent(),n.refetch&&n.refetch(),[3,4];case 3:return e=t.sent(),u.Am.error(String(e)),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,s.jsx)("div",{className:"modal ".concat(t?"modal-open":""),children:(0,s.jsxs)("div",{className:"modal-box flex flex-col gap-3",children:[(0,s.jsxs)("div",{className:"font-primary text-4xl font-bold text-center",children:["Deposit ",n.token.name]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)("input",{placeholder:"Amount...",type:"number",onChange:function(e){return A(Number(e.target.value))},value:k,className:"p-2 rounded w-full",disabled:!y||y.eq(0)}),(0,s.jsx)("span",{className:"btn",onClick:function(){return A(n.userBalance)},children:"MAX"})]}),(0,s.jsxs)("div",{className:"text-right",children:["Your balance:"," ",(0,s.jsxs)("span",{className:"font-bold",children:[void 0!==n.userBalance?n.userBalance.toFixed(2):"??"," ",n.token.symbol]})]})]}),n.token===v.T.wcanto?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"btn mx-auto",onClick:function(){return Z(!0)},children:"Wrap Canto"}),(0,s.jsx)(g,{isOpen:O,onClose:function(e){Z(!1)}})]}):null,void 0!==n.lpTokens?(0,s.jsx)("a",{href:"https://www.cantoswap.fi/#/add/v2/".concat(n.lpTokens[0],"/").concat(n.lpTokens[1]),target:"__blank",className:"mx-auto",children:(0,s.jsxs)("div",{className:"btn",children:[(0,s.jsx)("div",{className:"my-auto",children:"Add liquidity"}),(0,s.jsx)(c.CkN,{className:"h-4 w-4 my-auto"})]})}):null,(0,s.jsxs)("div",{className:"btn-group flex",children:[(0,s.jsx)("div",{className:"btn btn-secondary w-3/6",onClick:function(){return p()},children:"Cancel"}),y&&y.gt(0)?(0,s.jsx)("div",{className:"btn btn-primary w-3/6 ".concat(j?"loading":""),onClick:function(){return S()},children:"Confirm"}):(0,s.jsx)("div",{className:"btn btn-accent w-3/6 ".concat(w?"btn-loading":""),onClick:M,children:"Approve"})]})]})})}var T=t(24319);function C(e){var n=e.farm,t=e.deposited,c=e.isOpen,f=e.onClose,y=(0,T.Z)(n.token.address),x=y.decimals,h=(y.balanceOf,y.refetch),w=(0,r.Z)(l.useState(!1),2),v=w[0],N=w[1],g=(0,r.Z)(l.useState(),2),j=g[0],C=g[1],k=(0,d.PJ)({addressOrName:p.OR,contractInterface:new o.Interface(m.Mt),functionName:"withdraw",args:[n.poolId,new b.Z(j||0).mul(Math.pow(10,x||0)).toHex()]}).config,A=(0,d.GG)(k).writeAsync,I=function(){var e=(0,a.Z)((function(){var e;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:if(!A)return[2];N(!0),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,A()];case 2:return n.sent(),h(),f(!0),[3,5];case 3:return e=n.sent(),u.Am.error(String(e)),[3,5];case 4:return N(!1),[7];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,s.jsx)("div",{className:"modal ".concat(c?"modal-open":""),children:(0,s.jsxs)("div",{className:"modal-box flex flex-col gap-3",children:[(0,s.jsxs)("div",{className:"font-primary text-4xl font-bold text-center",children:["Withdraw ",n.token.name]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)("input",{placeholder:"Amount...",type:"number",onChange:function(e){return C(Number(e.target.value))},value:j,className:"p-2 rounded w-full"}),(0,s.jsx)("span",{className:"btn",onClick:function(){return C(t)},children:"MAX"})]}),(0,s.jsxs)("div",{className:"text-right",children:["Your balance:"," ",(0,s.jsxs)("span",{className:"font-bold",children:[t," ",n.token.symbol]})]})]}),(0,s.jsxs)("div",{className:"btn-group flex",children:[(0,s.jsx)("div",{className:"btn btn-secondary w-3/6",onClick:function(){return f()},children:"Cancel"}),(0,s.jsx)("div",{className:"btn btn-primary w-3/6 ".concat(v?"loading":""),onClick:function(){return I()},children:"Confirm"})]})]})})}function k(e){var n,t,f=e.farm,y=w(f).farmData,b=(0,d.PJ)({suspense:!0,addressOrName:f.distributor,contractInterface:new o.Interface(m.Mt),functionName:"withdraw",args:[f.poolId,0]}).config,x=(0,d.GG)(b).writeAsync,h=(0,r.Z)(l.useState(!1),2),v=h[0],N=h[1],g=(0,r.Z)(l.useState(!1),2),T=g[0],k=g[1],A=(0,r.Z)(l.useState(!1),2),I=A[0],O=A[1],Z=function(){var e=(0,a.Z)((function(){var e;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:if(!x)return[2];N(!0),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,x()];case 2:return n.sent(),[3,5];case 3:return e=n.sent(),u.Am.error(String(e)),[3,5];case 4:return N(!1),[7];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,s.jsxs)("div",{className:"bg-base-200 p-2 rounded-xl shadow-xl w-fit flex flex-col gap-3",children:[(0,s.jsx)(j,{farm:y,isOpen:T,onClose:function(e){k(!1),e&&y.refetch&&y.refetch()}}),(0,s.jsx)(C,{farm:y,deposited:y.userDeposit,isOpen:I,onClose:function(e){O(!1),e&&y.refetch&&y.refetch()}}),(0,s.jsxs)("div",{className:"text-2xl font-bold text-center m-auto flex flex-col",children:[(0,s.jsx)("div",{className:"my-auto",children:f.token.name}),(0,s.jsx)("a",{className:"mx-auto",target:"__blank",href:"".concat(p.wd).concat(f.token.address),children:(0,s.jsxs)("div",{className:"text-center text-xs underline flex gap-2 mx-auto",children:[(0,s.jsx)("div",{className:"my-auto",children:"See on explorer"}),(0,s.jsx)(c.CkN,{className:"h-4 w-4 my-auto"})]})})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 bg-base-300 p-2 rounded",children:[(0,s.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,s.jsx)("div",{className:"",children:"Multiplier"}),(0,s.jsxs)("div",{className:"font-bold",children:["x",f.multiplier]})]}),(0,s.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,s.jsx)("div",{className:"",children:"Deposited"}),(0,s.jsx)("div",{className:"font-bold",children:(null===(n=y.userDeposit)||void 0===n?void 0:n.toString())||"???"})]}),(0,s.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,s.jsx)("div",{className:"",children:"Pending"}),(0,s.jsx)("div",{className:"font-bold",children:(null===(t=y.userRewards)||void 0===t?void 0:t.toFixed(2))||"??"})]})]}),(0,s.jsx)("div",{className:"flex flex-col gap-1",children:(0,s.jsxs)("div",{className:"btn-group",children:[(0,s.jsx)("div",{className:"btn btn-accent w-2/6 ".concat(v?"loading":""),onClick:Z,children:"Collect"}),(0,s.jsx)("div",{className:"btn btn-secondary w-2/6",onClick:function(){return O(!0)},children:"Withdraw"}),(0,s.jsx)("div",{className:"btn btn-primary w-2/6",onClick:function(){return k(!0)},children:"Deposit"})]})})]})}},86290:function(e,n,t){t.d(n,{L1:function(){return a},LK:function(){return l},OR:function(){return f},Yp:function(){return r},bi:function(){return i},c3:function(){return p},jA:function(){return b},jP:function(){return y},ks:function(){return d},nZ:function(){return s},tV:function(){return m},th:function(){return o},vW:function(){return u},wI:function(){return c}});var a="0x0000000000000000000000000000000000000000",r="0x826551890Dc65655a0Aceca109aB11AbDbD7a07B",i="0x4e71A2E537B7f9D9413D3991D37958c0b5e1e503",s="0xfbC22278A96299D91d41C453234d97b4F5Eb9B2d",o="0x46b142DD1E924FAb83eCc3c08e4D46E82f005e0E",l="0xC9a43158891282A2B1475592D5719c001986Aaec",c="0xD88eca8Ca6816715Eb35E978662F2B201EEb419D",u="0x74a956fc8f434C5f7609A04A6539988FDE3AD900",d="0x6083c65Ce5544a837c0278d9aE939f8Bb362CBd0",p="0xf5b56Da192CD7BCbc7676B9B0Bd705d3898110E2",m="0x367761085BF3C12e5DA2Df99AC6E1a824612b8fb",f="0x4C2F7092C2aE51D986bEFEe378e50BD4dB99C901",y="0x720472c8ce72c2A2D711333e064ABD3E6BbEAdd3",b="0xA4899D35897033b927acFCf422bc745916139776"},8216:function(e,n,t){t.d(n,{Re:function(){return i},eb:function(){return o},zO:function(){return s}});var a=t(86290),r=t(95744),i=[{poolId:0,token:r.T.yang,reward:r.T.yin,multiplier:10,distributor:a.tV,totalAllocPoints:19},{poolId:1,token:r.T.cantoShib,reward:r.T.yin,multiplier:5,distributor:a.tV,totalAllocPoints:19},{poolId:2,token:r.T.eth,reward:r.T.yin,multiplier:3,distributor:a.tV,totalAllocPoints:19},{poolId:3,token:r.T.note,reward:r.T.yin,multiplier:1,distributor:a.tV,totalAllocPoints:19}],s=[{poolId:0,token:r.T.yin,reward:r.T.yang,multiplier:10,distributor:a.OR,totalAllocPoints:19},{poolId:1,token:r.T.cantoShib,reward:r.T.yang,multiplier:5,distributor:a.OR,totalAllocPoints:19},{poolId:2,token:r.T.atom,reward:r.T.yang,multiplier:3,distributor:a.OR,totalAllocPoints:19},{poolId:3,token:r.T.wcanto,reward:r.T.yang,multiplier:1,distributor:a.OR,totalAllocPoints:19}],o=[{poolId:0,token:r.T.yinNoteLp,reward:r.T.zen,multiplier:1,lpTokens:[r.T.yin,r.T.note],distributor:a.jP,totalAllocPoints:22},{poolId:1,token:r.T.yangWCantoLp,reward:r.T.zen,multiplier:1,lpTokens:[r.T.yang,r.T.wcanto],distributor:a.jP,totalAllocPoints:22},{poolId:2,token:r.T.zenWCantoLp,reward:r.T.zen,multiplier:10,lpTokens:[r.T.zen,r.T.wcanto],distributor:a.jP,totalAllocPoints:22},{poolId:3,token:r.T.zenNoteLp,reward:r.T.zen,multiplier:10,lpTokens:[r.T.zen,r.T.note],distributor:a.jP,totalAllocPoints:22}]},38880:function(e,n,t){t.d(n,{L1:function(){return r.L1},OR:function(){return r.OR},TV:function(){return i.T},c3:function(){return r.c3},iC:function(){return s},jA:function(){return r.jA},ks:function(){return r.ks},vW:function(){return r.vW},wI:function(){return r.wI},wd:function(){return o}});var a=t(90482),r=t(86290),i=t(95744),s="YinYang",o="https://evm.explorer.canto.io/address/";new a.Z(Math.pow(10,22)).div(14400)},95744:function(e,n,t){t.d(n,{T:function(){return r}});var a=t(86290),r={wcanto:{name:"Wrapped Canto",symbol:"WCANTO",address:a.Yp,decimals:18},note:{name:"Note",symbol:"NOTE",address:a.bi,decimals:18},yin:{name:"Yin",symbol:"YIN",address:a.nZ,decimals:18},yang:{name:"Yang",symbol:"YANG",address:a.th,decimals:18},zen:{name:"Zen",symbol:"ZEN",address:a.LK,decimals:18},yinNoteLp:{name:"Yin-Note Canto Dex LP",symbol:"YIN-NOTE LP",address:a.wI,decimals:18},yangWCantoLp:{name:"Yang-WCanto Canto Dex LP",symbol:"YANG-WCanto LP",address:a.vW,decimals:18},zenWCantoLp:{name:"Zen-WCanto Canto Dex LP",symbol:"ZEN-WCANTO LP",address:a.c3,decimals:18},zenNoteLp:{name:"Zen-Note Canto Dex LP",symbol:"ZEN-NOTE LP",address:a.ks,decimals:18},atom:{name:"Atom",symbol:"ATOM",address:"0xecEEEfCEE421D8062EF8d6b4D814efe4dc898265",decimals:6},eth:{name:"Ether",symbol:"ETH",address:"0x5FD55A1B9FC24967C4dB09C513C3BA0DFa7FF687",decimals:18},cantoInu:{name:"Canto Inu",symbol:"cINU",address:"0x7264610A66EcA758A8ce95CF11Ff5741E1fd0455",decimals:18},cantoShib:{name:"Canto Shib",symbol:"cShib",address:"0xA025ced4aab666c1bbBFd5A224816705b438E50B",decimals:18}}},24319:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(41799),r=t(69396),i=t(90482),s=t(56371),o=t(78073),l=t(1534);function c(e,n){var t,c,u=(0,o.mA)(),d={addressOrName:e,contractInterface:new s.Interface(l.em)},p=(0,r.Z)((0,a.Z)({},d),{functionName:"decimals",args:[]}),m=(0,r.Z)((0,a.Z)({},d),{functionName:"balanceOf",args:[n||u.address]}),f=(0,o.Dm)({allowFailure:!0,contracts:[p,m]}),y=f.data,b=f.refetch,x=f.status;return y&&2===y.filter(Boolean).length?{balanceOf:new i.Z(null===(t=y[1])||void 0===t?void 0:t.toString()).div(Math.pow(10,Number(null===(c=y[0])||void 0===c?void 0:c.toString()))),decimals:new i.Z(y[0].toString()).toNumber(),status:x,refetch:b}:{refetch:b,status:x}}},35910:function(e,n,t){t.d(n,{Z:function(){return b}});var a=t(85893),r=t(9008),i=t.n(r),s=(t(67294),t(38880)),o=function(){return(0,a.jsx)("footer",{className:"px-4 sm:px-6 py-6 border-t border-secondary",children:(0,a.jsxs)("div",{className:"text-center text-sm",children:[(0,a.jsx)("span",{className:"font-bold text-lg mr-2",children:s.iC})," \xa9"," ",(new Date).getFullYear()," All Rights Reserved"]})})},l=t(89650),c=t(41664),u=t.n(c),d=t(11163),p=t(89583),m=function(){return(0,a.jsx)(u(),{href:"/",children:(0,a.jsxs)("a",{className:"my-2 flex items-center space-x-1",children:[(0,a.jsx)(p.Wjj,{className:"h-8 w-8 flex-shrink-0 mr-3"}),(0,a.jsx)("span",{className:"font-bold text-3xl font-sans tracking-tight whitespace-nowrap",children:s.iC})]})})},f=[{label:"Farms",link:"/farms"},{label:"Garden",link:"/garden"},{label:"Temple",link:"/temple"}],y=function(){var e=(0,d.useRouter)();return(0,a.jsx)("header",{className:"h-15 border-b border-gray-200",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(m,{}),(0,a.jsx)("ul",{className:"ml-16 flex items-center",children:f.map((function(n,t){return(0,a.jsx)("li",{className:"mr-4 ".concat(e.route===n.link?"text-primary border-b border-info":""),children:(0,a.jsx)(u(),{href:n.link,children:(0,a.jsx)("a",{children:n.label})})},t)}))})]}),(0,a.jsx)(l.NL,{})]})})},b=function(e){var n=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:s.iC}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("div",{className:"min-h-screen mx-auto max-w-7xl flex flex-col",children:[(0,a.jsx)(y,{}),(0,a.jsx)("main",{className:"flex-grow container mx-auto px-4 sm:px-6",children:n}),(0,a.jsx)(o,{})]})]})}},69396:function(e,n,t){function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}t.d(n,{Z:function(){return a}})},70603:function(e,n,t){function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return r}})}}]);
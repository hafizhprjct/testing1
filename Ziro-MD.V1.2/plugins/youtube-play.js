(function(G,l){function A(G,l){return H(l- -'0x264',G);}function g(G,l){return c(G- -0x333,l);}function K(G,l){return I(l- -0x251,G);}const W=G();while(!![]){try{const D=-parseInt(A('Px28',-0xbc))/0x1*(parseInt(g(-'0x19d',-'0x1ab'))/0x2)+-parseInt(A('p$x$',-0xcd))/0x3+parseInt(g(-'0x175',-0x16f))/0x4*(-parseInt(A('%IJw',-'0xb4'))/0x5)+parseInt(A('jaK[',-0xbf))/0x6+-parseInt(K(-'0xa4',-0x9e))/0x7*(-parseInt(g(-0x19f,-'0x19c'))/0x8)+-parseInt(A('AsFI',-'0xb5'))/0x9+parseInt(A('v075',-0xc9))/0xa;if(D===l)break;else W['push'](W['shift']());}catch(k){W['push'](W['shift']());}}}(E,0xa86b2));function c(I,H){const B=E();return c=function(G,l){G=G-0x190;let W=B[G];return W;},c(I,H);}import{youtubedl,youtubedlv2}from'@bochilteam/scraper';import B from'yt-search';function H(c,I){const B=E();return H=function(G,l){G=G-0x190;let W=B[G];if(H['VqaXHb']===undefined){var D=function(o){const i='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let r='',f='';for(let n=0x0,R,S,u=0x0;S=o['charAt'](u++);~S&&(R=n%0x4?R*0x40+S:S,n++%0x4)?r+=String['fromCharCode'](0xff&R>>(-0x2*n&0x6)):0x0){S=i['indexOf'](S);}for(let t=0x0,m=r['length'];t<m;t++){f+='%'+('00'+r['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(f);};const Q=function(o,r){let f=[],n=0x0,R,S='';o=D(o);let u;for(u=0x0;u<0x100;u++){f[u]=u;}for(u=0x0;u<0x100;u++){n=(n+f[u]+r['charCodeAt'](u%r['length']))%0x100,R=f[u],f[u]=f[n],f[n]=R;}u=0x0,n=0x0;for(let t=0x0;t<o['length'];t++){u=(u+0x1)%0x100,n=(n+f[u])%0x100,R=f[u],f[u]=f[n],f[n]=R,S+=String['fromCharCode'](o['charCodeAt'](t)^f[(f[u]+f[n])%0x100]);}return S;};H['AhDghW']=Q,c=arguments,H['VqaXHb']=!![];}const k=B[0x0],J=G+k,z=c[J];return!z?(H['OYqzjI']===undefined&&(H['OYqzjI']=!![]),W=H['AhDghW'](W,l),c[J]=W):W=z,W;},H(c,I);}var handler=async(G,{conn:l,command:W,text:D,usedPrefix:k})=>{if(!D)throw P(-0x19f,-'0x19b')+k+W+Z('0x115','0x115');await G['reply'](wait);let J=await B(D);function Z(G,l){return I(G- -'0x92',l);}let z=J['videos'][Math[P(-0x18f,-'0x18e')](Math[P(-0x18b,-'0x182')]()*J['videos']['length'])];if(!J)throw Z(0x108,0x11e);function P(G,l){return c(G- -0x34b,l);}let {title:Q,thumbnail:o,timestamp:i,views:r,ago:f,url:n}=z,R=b(-0x1ec,'R0su')+Q+'\x0a⬡\x20Durasi:\x20'+i+P(-'0x19d',-'0x18a')+r+P(-0x1bb,-'0x1c7')+f+P(-0x1a5,-0x1b9)+n+'\x0a╰────────⬣';l[Z('0x11b',0x12f)](G[P(-0x195,-0x189)],'╭────\x20〔\x20Y\x20O\x20U\x20T\x20U\x20B\x20E\x20〕\x20─⬣\x0a⬡\x20Judul:\x20'+Q+P(-0x1b6,-'0x1c4')+i+'\x0a⬡\x20Views:\x20'+r+P(-'0x1bb',-'0x1a4')+f+P(-0x1a5,-'0x1a4')+n+P(-0x1a0,-'0x1b6'),author['trim'](),await(await l[b(-0x204,'(K4c')](o))['data'],[P(-0x190,-'0x19f'),k+'getvid\x20'+n+Z('0x106',0x10c)],![],{'quoted':G,'document':{'url':b(-'0x203','sZTi')},'mimetype':global[P(-'0x197',-'0x17f')],'fileName':P(-'0x1b2',-'0x1a0'),'fileLength':0x25e546dd9aaaa,'pageCount':0x29a,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':''+n,'title':'AUDIO\x20SEDANG\x20DIKIRIM...','body':wm,'sourceUrl':'http://wa.me/12522518391','thumbnail':await(await l['getFile'](o))[P(-0x1a8,-'0x1bc')]}}});const S=await youtubedlv2(n)[Z(0x110,0x107)](async C=>await youtubedl(n)),u=await S[P(-'0x199',-'0x1ac')][Z(0x11f,'0x137')]['download']();function b(G,l){return H(G- -'0x3a3',l);}let t={'audio':{'url':u},'mimetype':Z('0x10a',0x110),'fileName':''+Q,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':n,'title':Q,'body':wm,'sourceUrl':n,'thumbnail':await(await l[Z(0x117,0x121)](o))[b(-'0x1eb','jaK[')]}}};return l['sendMessage'](G[b(-'0x1ff','RS#*')],t,{'quoted':G});};handler[V('0x3c1',0x3ca)]=[Y(0x83,0x91)][Y(0x78,0x6c)](G=>G+Y(0x9b,'0x8b')),handler[Y(0x99,'0x88')]=[Y(0x7e,0x78)];function I(c,H){const B=E();return I=function(G,l){G=G-0x190;let W=B[G];if(I['hfpZLm']===undefined){var D=function(Q){const o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let i='',r='';for(let f=0x0,n,R,S=0x0;R=Q['charAt'](S++);~R&&(n=f%0x4?n*0x40+R:R,f++%0x4)?i+=String['fromCharCode'](0xff&n>>(-0x2*f&0x6)):0x0){R=o['indexOf'](R);}for(let u=0x0,t=i['length'];u<t;u++){r+='%'+('00'+i['charCodeAt'](u)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(r);};I['vXKPvC']=D,c=arguments,I['hfpZLm']=!![];}const k=B[0x0],J=G+k,z=c[J];return!z?(W=I['vXKPvC'](W),c[J]=W):W=z,W;},I(c,H);}function Y(G,l){return c(l- -'0x132',G);}function V(G,l){return I(l-0x215,G);}handler[Y(0xa3,0x8f)]=/^play$/i,handler['exp']=0x0,handler[V('0x3c1','0x3b2')]=!![];export default handler;function E(){const T=['📽VIDEO','floor','\x20<pencarian>','1402852mLuXRA','2241533xNKzph','random','command','WO7cIgZcHCkEgIhdSGddV8kIe0W','play','\x0a⬡\x20Upload:\x20','W47cPSk5emkHWQFcG8o8','619ZENDMB','odeWDu5vDMfv','16eSJnyS','\x0a⬡\x20Durasi:\x20','810uNUvaU','W74sCCoOwmkpWP5kxvdcIqdcHG','idm2ma','𝕐𝕠𝕦𝕋𝕦𝕓𝕖\x20ℙ𝕝𝕒𝕪𝕤','vMLKzw8GtM90iezVDw5KlcbuCNKGqw5VDgHLCIbuAxrSzq','z3ldPcZdVbWSo8o5W456WRJcIq','yxvKAw8VBxa0','BgLTAxq','map','W7nAW4aFW6O7uW','WQtdQNpdJCkbW7pdP8kjDbGUWQ7cGsxdJmkbEmoNWQDQWR3dNID0oG','1528740FcYEEB','y2f0y2G','data','aI41eG','W48aoSoFW6xdLK0HddZcN8oaW5K','\x0a⬡\x20Link:\x20','ig5HCNv0BYbIBhvLigjPCMq','WOFdVXpcJ8o/iCkutCk+','z2v0rMLSzq','downloader','\x0a╰────────⬣','Use\x20example\x20','C2vUzej1DhrVBG','\x0a⬡\x20Views:\x20','eCkSW4ddUdLRFCknWRpdI8oYsSkH','cdJcPs/dNSkzW5SQ','mti4A2jWCW','audio','mJi0mtuZm3Hos3PWAa','dpdf','AgvSCa','chat','4PEi4PwB4PwM4PAU4PElboobTCkDdfdcNCkFW7xdO8oZpCklWRtdMHpdOCo944ceWR3ILilIRRVcREkUTvf7x8kJqCo2WRCe','WP1uFmkl','mtzLu0PUEvm','tags'];E=function(){return T;};return E();}


const {Function,isPublic,addAudioMetaData,toAudio,getBuffer,getRandom,webp2mp4File,Take} = require('../lib/')
const {exec} = require("child_process")
const fs = require('fs')
const c = require ('../config')
function _0x31f4(n,t){const r=_0x2fa5();return(_0x31f4=function(n,t){return r[n-=360]})(n,t)}function _0x2fa5(){const n=["rJRCv","client","PtAQD","ijvXv","ZZjyj","ixRfE","hrKqH","vMZgm","XZSeC","XjoCs","zZCFV","dsCAE","HMwYx","lPnWo","248226JdUo","agJND","yrfOI","KNLiV","YFZZN","trim ?(.*)","18263jgstt","xlWEC"," trim 10;3","9081eGWNgO","IygUv","475060YfhqCE","CXVnn","aGaaW","opDdY","BwPoa","xByAd","JTqRZ","942636nBAI","nnrsk","mp3","saHzR","videotrim.","shift","WyaUd","FXaYe","withAudioC","PZkDT","uTGwx","RdpJQ","842vChjTo","TFqPt","BFdoI","ENQve","rBgMg","wqjCt","qNQft","yChOL","Ykoxm","_Example :","cszUL","RCyUt","rkAvV","TNkXR","zXgND","PCoOy","12bfgUee","setDuratio","reply","LfPlo","oVzGH","trim audio","audio","pusyu","wsBUA","SLPWa","reply_mess","ssJUb","Ixyiv","a audio/vi","lSRL","CudBf","QoTVy","XgYFa","lGPlG","UOtFu","ZGxVj","941340tQtNta","ZbZnD","668qCEaAm","audio/mpeg","PEqNB","HIIwy","HvfBA","bHhMH","McEiI","zSNfj","1362MfvdfU","PJZrd","sage","kFSxe","vuNNy","xample : t","dHtoT","FCYNO","zdxEh","mYEFi","PyxIC","dslic","YnLuf","pVfHI","iihpX","withVideoC","HfrLr","xdADG","FYtBX","3893368xIl","split","khBWL","RaJry","nuehD","tPDck","96240tgNtcD","uiXed","tjqgF","sYGQP","mnHeF","TpOcM","VsAAY","NDYnj","DipWn","YwuqB","chat","bLmiA","zdWRk","ljBfO","2792343hEhfaf","GsFKL","xjLxz","age","PiCqX","LOHcK","PndMY","fVTjM","12256389ln","xnfMz","JOPqE","media","epDLJ","bqIMj","mCFJq","aIGvY","kUCCE","paLGt","XBtWz","gWFnn","xgRDc","ormat!*\n_E","pahWE","JJFAu","atABe","wthfE","dSaveMedia","rtDIn","jUPlp","HrkAK","odec","YahjJ","aNvCo","sZCfY","35gWxprg","tVCNV","tsvEE","setStartTi","push","ZLB","npUIM","XYeOb","BkMbQ","whOyX","VaiQp","lkHpv","VRJWw","ivTRE","WGvbt","xlnky","UGGEG","mp4","3685tufXow","*Invalid F","fmvUr","vGCaX","zIrnv","opUjc","vsxCS","end","lcgiC","508930eCFv","QRbpn","yrCbH","trim","xrPdn","zGsgy","585RrZquV","fErSd","video","_Reply to ","ltkdb","BgZeN","jSpTf","ZErEp","mGlnC","UgBYz","dxlnh","HBrZo","ILnyz","audiotrim.","1315692gyTEsu","sendMessag","xzTUv"," or video","NObRn","IawCJ","quoted_mes","deo._","ytHYD","downloadAn","aGlgW","IysEL","copy","bRZEf","IbxML","ttFyC","ZaGZB","aPXXZ","eFvhi","KMPfa","cKMPf","wPnWa","uKbXQ","AWBBk","pElTu","save","rim 0;15_","xEJnS","87744YOKGOd","muRaU","lSdZy","bPlmq","bckIQ","NBTMf","hGQiS","carWV","mkXzZ","fluent-ffm","peg","HPbDM","aboJk","JrcMf","readFileSy","FmmBC"];return(_0x2fa5=function(){return n})()}!function(n,t){const r=_0x31f4,u=_0x2fa5();for(;;)try{if(653182===-parseInt(r(430))/1*(-parseInt(r(391))/2)+-parseInt(r(477))/3+-parseInt(r(558))/4+-parseInt(r(372))/5+parseInt(r(428))/6*(-parseInt(r(511))/7)+-parseInt(r(586))/8*(parseInt(r(544))/9)+-parseInt(r(463))/10*(-parseInt(r(529))/11))break;u.push(u.shift())}catch(n){u.push(u.shift())}}();const _0x1356fd=_0x5afb;function _0x5afb(n,t){const r=_0x31f4,u={RdpJQ:function(n,t){return n-t},IygUv:function(n,t){return n+t},mCFJq:function(n,t){return n*t},xlnky:function(n){return n()},PyxIC:function(n,t,r){return n(t,r)}},e=u[r(526)](_0xc890);return _0x5afb=function(n,t){const f=r;return n=u[f(390)](n,u[f(371)](u[f(371)](-9173,u[f(491)](-1,203)),9759)),e[n]},u[r(448)](_0x5afb,n,t)}function _0xc890(){const n=_0x31f4,t={zZCFV:n(505),dHtoT:n(381),QoTVy:n(370),ZGxVj:n(457)+n(516),sZCfY:n(530),TpOcM:n(458),JJFAu:n(379)+"Uh",lPnWo:n(438),tPDck:n(596),hrKqH:n(400),uiXed:n(490),BwPoa:n(367)+"P",hGQiS:n(583),xzTUv:n(361)+"At",agJND:n(603),bLmiA:n(565),xEJnS:n(567),IbxML:n(419),aPXXZ:n(520),zXgND:n(480),YwuqB:n(602),bRZEf:n(600),FXaYe:n(387),JrcMf:n(509),ttFyC:n(443),rkAvV:n(503),uKbXQ:n(523),McEiI:n(445),NBTMf:n(595),lGPlG:n(383),HPbDM:n(473),lSdZy:n(498),VsAAY:n(541),XjoCs:n(409),qNQft:n(559),saHzR:n(561),uTGwx:n(570),xByAd:n(507),CXVnn:n(415),TFqPt:n(547),aGaaW:n(481),Ykoxm:n(408),pusyu:n(594),UOtFu:n(528),yrfOI:n(536),vGCaX:n(431),QRbpn:n(514),FYtBX:n(564),ssJUb:n(412),ljBfO:n(546),RCyUt:n(420),XBtWz:n(407),cKMPf:n(577),bHhMH:n(413),ZaGZB:n(369),wPnWa:n(488),eFvhi:n(453),HMwYx:n(485)+n(421),nnrsk:n(366),tjqgF:n(584),khBWL:n(538)+"uH",aIGvY:n(440),pElTu:n(417),bckIQ:n(557),ZErEp:function(n){return n()}},r=[t[n(612)],t[n(444)],t[n(423)],t[n(427)],t[n(510)],t[n(468)],t[n(500)],t[n(360)],t[n(462)],t[n(608)],t[n(464)],t[n(376)],t[n(592)],t[n(560)],t[n(362)],t[n(474)],t[n(585)],t[n(572)],t[n(575)],t[n(405)],t[n(472)],t[n(571)],t[n(386)],t[n(599)],t[n(573)],t[n(403)],t[n(580)],t[n(436)],t[n(591)],t[n(425)],t[n(597)],t[n(588)],t[n(469)],t[n(611)],t[n(397)],t[n(382)],t[n(389)],t[n(377)],t[n(373)],t[n(392)],t[n(374)],t[n(399)],t[n(414)],t[n(426)],t[n(363)],t[n(532)],t[n(539)],t[n(456)],t[n(418)],t[n(476)],t[n(402)],t[n(495)],t[n(578)],t[n(435)],t[n(574)],t[n(579)],t[n(576)],t[n(614)],t[n(380)],t[n(465)],t[n(459)],t[n(492)],t[n(582)],t[n(590)]];return _0xc890=function(){return r},t[n(551)](_0xc890)}(function(n,t){const r=_0x31f4,u={yrCbH:function(n){return n()},WyaUd:function(n,t){return n+t},dsCAE:function(n,t){return n+t},RaJry:function(n,t){return n+t},LfPlo:function(n,t){return n+t},PEqNB:function(n,t){return n/t},xrPdn:function(n,t){return n(t)},xgRDc:function(n,t){return n(t)},HrkAK:function(n,t){return n+t},dslic:function(n,t){return n+t},XYeOb:function(n,t){return n*t},tsvEE:function(n,t){return n(t)},ZZjyj:function(n,t){return n+t},pahWE:function(n,t){return n*t},XgYFa:function(n,t){return n*t},zdWRk:function(n,t){return n(t)},TNkXR:function(n,t){return n(t)},JOPqE:function(n,t){return n+t},opUjc:function(n,t){return n+t},HBrZo:function(n,t){return n*t},BkMbQ:function(n,t){return n/t},atABe:function(n,t){return n+t},ixRfE:function(n,t){return n+t},kUCCE:function(n,t){return n/t},npUIM:function(n,t){return n(t)},CudBf:function(n,t){return n+t},kFSxe:function(n,t){return n(t)},HvfBA:function(n,t){return n(t)},NDYnj:function(n,t){return n(t)},vMZgm:function(n,t){return n*t},zGsgy:function(n,t){return n(t)},xnfMz:function(n,t){return n(t)},ZbZnD:function(n,t){return n+t},mGlnC:function(n,t){return n*t},YnLuf:function(n,t){return n*t},LOHcK:function(n,t){return n(t)},fVTjM:function(n,t){return n*t},wqjCt:function(n,t){return n*t},YFZZN:function(n,t){return n===t},ENQve:r(515),PndMY:r(384)},e=_0x5afb,f=u[r(540)](n);for(;;)try{const n=u[r(385)](u[r(385)](u[r(613)](u[r(460)](u[r(410)](u[r(460)](u[r(432)](u[r(542)](parseInt,u[r(497)](e,410)),u[r(506)](u[r(449)](7900,u[r(518)](-233,33)),u[r(518)](35,-6))),u[r(432)](u[r(497)](parseInt,u[r(513)](e,403)),u[r(606)](u[r(410)](u[r(499)](12,17),u[r(499)](-1,4083)),u[r(424)](-3881,-1)))),u[r(499)](u[r(432)](-u[r(475)](parseInt,u[r(404)](e,399)),u[r(487)](u[r(534)](u[r(499)](-4966,2),u[r(555)](2,3331)),u[r(424)](-3,-1091))),u[r(519)](u[r(404)](parseInt,u[r(404)](e,384)),u[r(501)](u[r(607)](-2599,-4471),7074)))),u[r(493)](-u[r(475)](parseInt,u[r(517)](e,393)),u[r(422)](u[r(422)](u[r(424)](-155,11),u[r(555)](-1077,-4)),u[r(555)](-433,6)))),u[r(424)](u[r(493)](u[r(404)](parseInt,u[r(441)](e,404)),u[r(410)](u[r(410)](5720,2572),u[r(518)](-2,4143))),u[r(432)](u[r(434)](parseInt,u[r(470)](e,408)),u[r(607)](u[r(460)](-3740,u[r(609)](-2,661)),5069)))),u[r(519)](u[r(543)](parseInt,u[r(486)](e,400)),u[r(385)](u[r(429)](u[r(424)](9,26),u[r(552)](-1489,1)),u[r(450)](3,421)))),u[r(432)](-u[r(497)](parseInt,u[r(482)](e,390)),u[r(410)](u[r(449)](u[r(484)](-109,-79),u[r(555)](-15,25)),u[r(396)](19,-433))));if(u[r(365)](n,325770))break;f[u[r(394)]](f[u[r(483)]]())}catch(n){f[u[r(394)]](f[u[r(483)]]())}})(_0xc890),Function({pattern:_0x1356fd(391),fromMe:isPublic,desc:_0x1356fd(445)+_0x1356fd(432),type:_0x1356fd(388)},(async(n,t,r)=>{const u=_0x31f4,e={paLGt:function(n,t){return n(t)},PJZrd:function(n,t){return n||t},wthfE:function(n,t){return n(t)},AWBBk:function(n,t){return n+t},IysEL:function(n,t){return n(t)},tVCNV:function(n,t){return n(t)},PtAQD:function(n,t){return n(t)},ivTRE:function(n,t){return n(t)},NObRn:function(n,t){return n+t},vsxCS:function(n,t){return n(t)},xjLxz:function(n,t){return n(t)},GsFKL:function(n,t){return n(t)},IawCJ:function(n,t){return n(t)},carWV:function(n,t){return n+t},ytHYD:function(n,t){return n(t)},pVfHI:function(n,t){return n+t},bPlmq:function(n,t){return n(t)},muRaU:function(n,t){return n(t)},PZkDT:function(n,t){return n+t},aGlgW:function(n,t){return n(t)},fErSd:function(n,t){return n+t},zSNfj:function(n,t){return n(t)},BgZeN:function(n,t){return n+t},dxlnh:function(n,t){return n(t)},ijvXv:function(n,t){return n(t)},ILnyz:function(n,t){return n(t)},UGGEG:function(n,t){return n+t},XZSeC:function(n,t){return n+t},ltkdb:function(n,t){return n(t)},mYEFi:function(n,t){return n+t},oVzGH:function(n,t){return n+t},YahjJ:function(n,t){return n(t)},SLPWa:function(n,t){return n(t)},mnHeF:function(n,t){return n(t)},DipWn:function(n,t){return n(t)},VaiQp:function(n,t){return n+t},HfrLr:function(n,t){return n(t)},vuNNy:function(n,t){return n(t)},iihpX:function(n,t){return n(t)},HIIwy:function(n,t){return n(t)},gWFnn:function(n,t){return n(t)},rBgMg:function(n,t){return n(t)},jSpTf:function(n,t){return n(t)},xdADG:function(n,t){return n(t)},fmvUr:function(n,t){return n(t)},KNLiV:function(n,t){return n+t},lkHpv:function(n,t){return n(t)},sYGQP:function(n,t){return n+t},cszUL:function(n,t){return n(t)},lcgiC:function(n,t){return n(t)},zIrnv:function(n,t){return n(t)},nuehD:function(n,t){return n+t},xlWEC:function(n,t){return n+t},epDLJ:function(n,t){return n(t)},JTqRZ:function(n,t){return n(t)},PCoOy:function(n,t){return n(t)},WGvbt:function(n,t){return n(t)},aboJk:function(n,t){return n(t)},rtDIn:function(n,t){return n(t)},opDdY:function(n,t){return n+t},UgBYz:function(n,t){return n+t},BFdoI:function(n,t){return n(t)},zdxEh:function(n,t){return n(t)},FmmBC:function(n,t){return n(t)},yChOL:function(n,t){return n(t)}},f=_0x1356fd,i={VRJWw:e[u(451)](e[u(524)](f,396),e[u(589)](f,398)),rJRCv:e[u(587)](f,442),PiCqX:e[u(388)](e[u(568)](f,426),e[u(587)](f,440)),FCYNO:function(n,t){return e[u(494)](n,t)},Ixyiv:e[u(545)](e[u(437)](f,425),e[u(569)](f,405)),bqIMj:e[u(549)](e[u(562)](e[u(554)](f,436),e[u(605)](f,383)),e[u(556)](f,412)),mkXzZ:e[u(593)](e[u(527)](e[u(610)](e[u(566)](f,401),e[u(548)](f,428)),e[u(566)](f,421)),e[u(589)](f,392)),aNvCo:function(n,t){return e[u(439)](n,t)},KMPfa:e[u(447)](e[u(411)](e[u(604)](f,406),e[u(563)](f,387)),"0_"),wsBUA:e[u(508)](f,441),jUPlp:function(n,t){return e[u(494)](n,t)},whOyX:e[u(416)](f,433)},o=i[e[u(467)](f,424)](require,i[e[u(471)](f,414)]);if(!n[e[u(521)](e[u(454)](f,395),e[u(442)](f,416))]||!n[e[u(411)](e[u(452)](f,395),e[u(587)](f,416))][e[u(433)](f,386)]&&!n[e[u(388)](e[u(535)](f,395),e[u(604)](f,416))][e[u(416)](f,446)])return await n[e[u(496)](f,430)](i[e[u(395)](f,407)]);if(!t)return await n[e[u(550)](f,430)](i[e[u(524)](f,439)]);const[c,a]=t[e[u(455)](f,402)](";");if(i[e[u(478)](f,420)](!c,!a)||i[e[u(566)](f,424)](isNaN,c)||i[e[u(531)](f,424)](isNaN,a))return await n[e[u(508)](f,430)](i[e[u(548)](f,385)]);let s=await n[e[u(364)](e[u(395)](f,395),e[u(452)](f,416))][e[u(562)](e[u(452)](f,413),e[u(522)](f,422))]();if(n[e[u(466)](e[u(401)](f,395),e[u(537)](f,416))][e[u(589)](f,386)])i[e[u(533)](f,424)](o,s)[e[u(461)](e[u(508)](f,443),"me")](c[e[u(568)](f,429)]())[e[u(368)](e[u(489)](f,438),"n")](a[e[u(401)](f,429)]())[e[u(489)](f,409)](i[e[u(378)](f,423)]).on(i[e[u(454)](f,435)],(async()=>{const t=u,r=f;await n[e[t(502)](r,411)][e[t(581)](e[t(494)](r,431),"e")](n[e[t(569)](r,427)],{audio:await fs[e[t(581)](e[t(512)](r,418),"nc")](i[e[t(604)](r,423)]),mimetype:i[e[t(502)](r,417)]},{quoted:n[e[t(581)](e[t(512)](r,444),e[t(524)](r,394))]})}));else{if(!n[e[u(451)](e[u(406)](f,395),e[u(496)](f,416))][e[u(525)](f,446)])return n[e[u(554)](f,430)](i[e[u(479)](f,407)]);i[e[u(598)](f,397)](o,s)[e[u(447)](e[u(508)](f,443),"me")](c[e[u(504)](f,429)]())[e[u(375)](e[u(416)](f,438),"n")](a[e[u(442)](f,429)]())[e[u(553)](e[u(393)](f,389),e[u(446)](f,434))](i[e[u(478)](f,415)])[e[u(466)](e[u(589)](f,419),e[u(601)](f,434))](i[e[u(604)](f,415)])[e[u(556)](f,409)](i[e[u(398)](f,437)]).on(i[e[u(442)](f,435)],(async()=>{const t=u,r=f;await n[e[t(524)](r,411)][e[t(562)](e[t(535)](r,431),"e")](n[e[t(479)](r,427)],{video:await fs[e[t(562)](e[t(478)](r,418),"nc")](i[e[t(563)](r,437)])},{quoted:n[e[t(593)](e[t(566)](r,444),e[t(524)](r,394))]})}))}}));
Function({pattern: 'sticker ?(.*)', fromMe: isPublic, desc: 'Converts replied media to sticker', type: 'media'}, async (m, text, client) => {
if (!m.reply_message) return m.reply("_Reply to a photo or a short video!_")
if (/image/.test(m.mine)) {
let media = await client.sendImageAsSticker(m.chat, await m.reply_message.download(), m.data, { packname: c.STICKER_DATA.split(';')[0], author: c.STICKER_DATA.split(';')[1] })
await fs.unlinkSync(media)
} else if (/video/.test(m.mine)) {
if ((m.reply_message.msg || m.reply_message).seconds > 11) return m.reply('_Maximum 10 seconds!_')
let media = await client.sendVideoAsSticker(m.chat, await m.reply_message.download(), m.data, { packname: c.STICKER_DATA.split(';')[0], author: c.STICKER_DATA.split(';')[1] })
await fs.unlinkSync(media)
} else {return m.reply("_Reply to a photo or a short video!_")
}})
Function({pattern: 'mp3 ?(.*)', fromMe: isPublic, desc: 'Converts replied media to mp3 format', type: 'media'}, async (m, text, client) => {
if (/document/.test(m.mine) || !/video/.test(m.mine) && !/audio/.test(m.mine) || !m.reply_message) return m.reply('_Reply to a video/audio_')
let media = await m.reply_message.download()
let image = await getBuffer(c.AUDIO_DATA.split(';')[2])
let image_1 = await getBuffer('https://i.imgur.com/fj2WE83.jpeg')
let tumb = image || image_1
let writer = await addAudioMetaData(await toAudio(media, 'mp4'), tumb, c.AUDIO_DATA.split(';')[0], c.AUDIO_DATA.split(';')[1], 'Hermit Official')
await client.sendMessage(m.chat, { audio: Buffer.from(writer.arrayBuffer), mimetype: 'audio/mpeg' }, { quoted: m.data })
})
Function({pattern: 'take ?(.*)', fromMe: isPublic, desc: 'Change sticker or audio package name', type: 'media'}, async (m, text, client) => {
await Take(m, text, client)
})
Function({pattern: 'photo ?(.*)', fromMe: isPublic, desc: 'Converts non animated stickers to photo', type: 'media'}, async (m, text, client) => {
if (!m.reply_message || !/webp/.test(m.mine)) return m.reply("_Reply to a non animated sticker!_")
let media = await m.reply_message.downloadAndSaveMedia()
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return console.log(err)
let buffer = fs.readFileSync(ran)
client.sendMessage(m.chat, { image: buffer }, { quoted: m.quoted_message })
fs.unlinkSync(ran)
})})
Function({pattern: 'mp4 ?(.*)', fromMe: isPublic, desc: 'Converts animated stickers to video', type: 'media'}, async (m, text, client) => {
if (!m.reply_message || !/webp/.test(m.mine)) return m.reply("_Reply to a animated sticker!_")
let media = await m.reply_message.downloadAndSaveMedia()
let webpToMp4 = await webp2mp4File(media)
await client.sendMessage(m.chat, { video: { url: webpToMp4.result }}, { quoted: m.quoted_message })
await fs.unlinkSync(media)
})

Function({pattern: 'gif ?(.*)', fromMe: isPublic, desc: 'Converts animated stickers to video', type: 'media'}, async (m, text, client) => {
if (!m.reply_message || !/webp/.test(m.mine)) return m.reply("_Reply to a animated sticker!_")
let media = await m.reply_message.downloadAndSaveMedia()
let webpToMp4 = await webp2mp4File(media)
await client.sendMessage(m.chat, { video: { url: webpToMp4.result }, gifAttribution: 'TENOR', gifPlayback: true }, { quoted: m.quoted_message })
await fs.unlinkSync(media)
})
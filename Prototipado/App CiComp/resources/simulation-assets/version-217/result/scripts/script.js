!function(a){
if("object"==typeof exports&&"undefined"!=typeof module){
module.exports=a();
}else{
if("function"==typeof define&&define.amd){
define([],a);
}else{
var b;
b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.Raven=a();
}
}
}(function(){
return function a(b,c,d){
function e(g,h){
if(!c[g]){
if(!b[g]){
var i="function"==typeof require&&require;
if(!h&&i){
return i(g,!0);
}
if(f){
return f(g,!0);
}
var j=new Error("Cannot find module '"+g+"'");
throw j.code="MODULE_NOT_FOUND",j;
}
var k=c[g]={exports:{}};
b[g][0].call(k.exports,function(a){
var c=b[g][1][a];
return e(c?c:a);
},k,k.exports,a,b,c,d);
}
return c[g].exports;
};
for(var f="function"==typeof require&&require,g=0;g<d.length;g++){
e(d[g]);
}
return e;
}({1:[function(a,b,c){
function d(a){
this.name="RavenConfigError",this.message=a;
};
d.prototype=new Error,d.prototype.constructor=d,b.exports=d;
},{}],2:[function(a,b,c){
var d=a(5),e=function(a,b,c){
var e=a[b],f=a;
if(b in a){
var g="warn"===b?"warning":b;
a[b]=function(){
var a=[].slice.call(arguments),h=d.safeJoin(a," "),i={level:g,logger:"console",extra:{arguments:a}};
"assert"===b?a[0]===!1&&(h="Assertion failed: "+(d.safeJoin(a.slice(1)," ")||"console.assert"),i.extra.arguments=a.slice(1),c&&c(h,i)):c&&c(h,i),e&&Function.prototype.apply.call(e,f,a);
};
}
};
b.exports={wrapMethod:e};
},{5:5}],3:[function(a,b,c){
(function(c){
function d(){
return +new Date;
};
function e(a,b){
return o(b)?function(c){
return b(c,a);
}:b;
};
function f(){
this.a=!("object"!=typeof JSON||!JSON.stringify),this.b=!n(K),this.c=!n(L),this.d=null,this.e=null,this.f=null,this.g=null,this.h=null,this.i=null,this.j={},this.k={release:J.SENTRY_RELEASE&&J.SENTRY_RELEASE.id,logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],headers:null,collectWindowErrors:!0,maxMessageLength:0,maxUrlLength:250,stackTraceLimit:50,autoBreadcrumbs:!0,instrument:!0,sampleRate:1},this.l={method:"POST",keepalive:!0,referrerPolicy:"origin"},this.m=0,this.n=!1,this.o=Error.stackTraceLimit,this.p=J.console||{},this.q={},this.r=[],this.s=d(),this.t=[],this.u=[],this.v=null,this.w=J.location,this.x=this.w&&this.w.href,this.y();
for(var a in this.p){
this.q[a]=this.p[a];
}
};
var g=a(6),h=a(7),i=a(1),j=a(5),k=j.isError,l=j.isObject,m=j.isErrorEvent,n=j.isUndefined,o=j.isFunction,p=j.isString,q=j.isArray,r=j.isEmptyObject,s=j.each,t=j.objectMerge,u=j.truncate,v=j.objectFrozen,w=j.hasKey,x=j.joinRegExp,y=j.urlencode,z=j.uuid4,A=j.htmlTreeAsString,B=j.isSameException,C=j.isSameStacktrace,D=j.parseUrl,E=j.fill,F=j.supportsFetch,G=a(2).wrapMethod,H="source protocol user pass host port path".split(" "),I=/^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,J="undefined"!=typeof window?window:"undefined"!=typeof c?c:"undefined"!=typeof self?self:{},K=J.document,L=J.navigator;
f.prototype={VERSION:"3.22.3",debug:!1,TraceKit:g,config:function(a,b){
var c=this;
if(c.g){
return this.z("error","Error: Raven has already been configured"),c;
}
if(!a){
return c;
}
var d=c.k;
b&&s(b,function(a,b){
"tags"===a||"extra"===a||"user"===a?c.j[a]=b:d[a]=b;
}),c.setDSN(a),d.ignoreErrors.push(/^Script error\.?$/),d.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),d.ignoreErrors=x(d.ignoreErrors),d.ignoreUrls=!!d.ignoreUrls.length&&x(d.ignoreUrls),d.whitelistUrls=!!d.whitelistUrls.length&&x(d.whitelistUrls),d.includePaths=x(d.includePaths),d.maxBreadcrumbs=Math.max(0,Math.min(d.maxBreadcrumbs||100,100));
var e={xhr:!0,console:!0,dom:!0,location:!0,sentry:!0},f=d.autoBreadcrumbs;
"[object Object]"==={}.toString.call(f)?f=t(e,f):f!==!1&&(f=e),d.autoBreadcrumbs=f;
var h={tryCatch:!0},i=d.instrument;
return "[object Object]"==={}.toString.call(i)?i=t(h,i):i!==!1&&(i=h),d.instrument=i,g.collectWindowErrors=!!d.collectWindowErrors,c;
},install:function(){
var a=this;
return a.isSetup()&&!a.n&&(g.report.subscribe(function(){
a.A.apply(a,arguments);
}),a.B(),a.k.instrument&&a.k.instrument.tryCatch&&a.C(),a.k.autoBreadcrumbs&&a.D(),a.E(),a.n=!0),Error.stackTraceLimit=a.k.stackTraceLimit,this;
},setDSN:function(a){
var b=this,c=b.F(a),d=c.path.lastIndexOf("/"),e=c.path.substr(1,d);
b.G=a,b.h=c.user,b.H=c.pass&&c.pass.substr(1),b.i=c.path.substr(d+1),b.g=b.I(c),b.J=b.g+"/"+e+"api/"+b.i+"/store/",this.y();
},context:function(a,b,c){
return o(a)&&(c=b||[],b=a,a=void 0),this.wrap(a,b).apply(this,c);
},wrap:function(a,b,c){
function d(){
var d=[],f=arguments.length,g=!a||a&&a.deep!==!1;
for(c&&o(c)&&c.apply(this,arguments);f--;){
d[f]=g?e.wrap(a,arguments[f]):arguments[f];
}
try{
return b.apply(this,d);
}
catch(h){
throw e.K(),e.captureException(h,a),h;
}
};
var e=this;
if(n(b)&&!o(a)){
return a;
}
if(o(a)&&(b=a,a=void 0),!o(b)){
return b;
}
try{
if(b.L){
return b;
}
if(b.M){
return b.M;
}
}
catch(f){
return b;
}
for(var g in b){
w(b,g)&&(d[g]=b[g]);
}
return d.prototype=b.prototype,b.M=d,d.L=!0,d.N=b,d;
},uninstall:function(){
return g.report.uninstall(),this.O(),this.P(),this.Q(),Error.stackTraceLimit=this.o,this.n=!1,this;
},captureException:function(a,b){
b=t({trimHeadFrames:0},b?b:{});
var c=!k(a),d=!m(a),e=m(a)&&!a.error;
if(c&&d||e){
return this.captureMessage(a,t(b,{stacktrace:!0,trimHeadFrames:b.trimHeadFrames+1}));
}
m(a)&&(a=a.error),this.d=a;
try{
var f=g.computeStackTrace(a);
this.R(f,b);
}
catch(h){
if(a!==h){
throw h;
}
}
return this;
},captureMessage:function(a,b){
if(!this.k.ignoreErrors.test||!this.k.ignoreErrors.test(a)){
b=b||{};
var c,d=t({message:a+""},b);
try{
throw new Error(a);
}
catch(e){
c=e;
}
c.name=null;
var f=g.computeStackTrace(c),h=q(f.stack)&&f.stack[1],i=h&&h.url||"";
if((!this.k.ignoreUrls.test||!this.k.ignoreUrls.test(i))&&(!this.k.whitelistUrls.test||this.k.whitelistUrls.test(i))){
if(this.k.stacktrace||b&&b.stacktrace){
b=t({fingerprint:a,trimHeadFrames:(b.trimHeadFrames||0)+1},b);
var j=this.S(f,b);
d.stacktrace={frames:j.reverse()};
}
return this.T(d),this;
}
}
},captureBreadcrumb:function(a){
var b=t({timestamp:d()/1000},a);
if(o(this.k.breadcrumbCallback)){
var c=this.k.breadcrumbCallback(b);
if(l(c)&&!r(c)){
b=c;
}else{
if(c===!1){
return this;
}
}
}
return this.u.push(b),this.u.length>this.k.maxBreadcrumbs&&this.u.shift(),this;
},addPlugin:function(a){
var b=[].slice.call(arguments,1);
return this.r.push([a,b]),this.n&&this.E(),this;
},setUserContext:function(a){
return this.j.user=a,this;
},setExtraContext:function(a){
return this.U("extra",a),this;
},setTagsContext:function(a){
return this.U("tags",a),this;
},clearContext:function(){
return this.j={},this;
},getContext:function(){
return JSON.parse(h(this.j));
},setEnvironment:function(a){
return this.k.environment=a,this;
},setRelease:function(a){
return this.k.release=a,this;
},setDataCallback:function(a){
var b=this.k.dataCallback;
return this.k.dataCallback=e(b,a),this;
},setBreadcrumbCallback:function(a){
var b=this.k.breadcrumbCallback;
return this.k.breadcrumbCallback=e(b,a),this;
},setShouldSendCallback:function(a){
var b=this.k.shouldSendCallback;
return this.k.shouldSendCallback=e(b,a),this;
},setTransport:function(a){
return this.k.transport=a,this;
},lastException:function(){
return this.d;
},lastEventId:function(){
return this.f;
},isSetup:function(){
return !!this.a&&(!!this.g||(this.ravenNotConfiguredError||(this.ravenNotConfiguredError=!0,this.z("error","Error: Raven has not been configured.")),!1));
},afterLoad:function(){
var a=J.RavenConfig;
a&&this.config(a.dsn,a.config).install();
},showReportDialog:function(a){
if(K){
a=a||{};
var b=a.eventId||this.lastEventId();
if(!b){
throw new i("Missing eventId");
}
var c=a.dsn||this.G;
if(!c){
throw new i("Missing DSN");
}
var d=encodeURIComponent,e="";
e+="?eventId="+d(b),e+="&dsn="+d(c);
var f=a.user||this.j.user;
f&&(f.name&&(e+="&name="+d(f.name)),f.email&&(e+="&email="+d(f.email)));
var g=this.I(this.F(c)),h=K.createElement("script");
h.async=!0,h.src=g+"/api/embed/error-page/"+e,(K.head||K.body).appendChild(h);
}
},K:function(){
var a=this;
this.m+=1,setTimeout(function(){
a.m-=1;
});
},V:function(a,b){
var c,d;
if(this.b){
b=b||{},a="raven"+a.substr(0,1).toUpperCase()+a.substr(1),K.createEvent?(c=K.createEvent("HTMLEvents"),c.initEvent(a,!0,!0)):(c=K.createEventObject(),c.eventType=a);
for(d in b){
w(b,d)&&(c[d]=b[d]);
}
if(K.createEvent){
K.dispatchEvent(c);
}else{
try{
K.fireEvent("on"+c.eventType.toLowerCase(),c);
}
catch(e){
}
}
}
},W:function(a){
var b=this;
return function(c){
if(b.X=null,b.v!==c){
b.v=c;
var d;
try{
d=A(c.target);
}
catch(e){
d="<unknown>";
}
b.captureBreadcrumb({category:"ui."+a,message:d});
}
};
},Y:function(){
var a=this,b=1000;
return function(c){
var d;
try{
d=c.target;
}
catch(e){
return;
}
var f=d&&d.tagName;
if(f&&("INPUT"===f||"TEXTAREA"===f||d.isContentEditable)){
var g=a.X;
g||a.W("input")(c),clearTimeout(g),a.X=setTimeout(function(){
a.X=null;
},b);
}
};
},Z:function(a,b){
var c=D(this.w.href),d=D(b),e=D(a);
this.x=b,c.protocol===d.protocol&&c.host===d.host&&(b=d.relative),c.protocol===e.protocol&&c.host===e.host&&(a=e.relative),this.captureBreadcrumb({category:"navigation",data:{to:b,from:a}});
},B:function(){
var a=this;
a.$=Function.prototype.toString,Function.prototype.toString=function(){
return "function"==typeof this&&this.L?a.$.apply(this.N,arguments):a.$.apply(this,arguments);
};
},O:function(){
this.$&&(Function.prototype.toString=this.$);
},C:function(){
function a(a){
return function(b,d){
for(var e=new Array(arguments.length),f=0;f<e.length;++f){
e[f]=arguments[f];
}
var g=e[0];
return o(g)&&(e[0]=c.wrap(g)),a.apply?a.apply(this,e):a(e[0],e[1]);
};
};
function b(a){
var b=J[a]&&J[a].prototype;
b&&b.hasOwnProperty&&b.hasOwnProperty("addEventListener")&&(E(b,"addEventListener",function(b){
return function(d,f,g,h){
try{
f&&f.handleEvent&&(f.handleEvent=c.wrap(f.handleEvent));
}
catch(i){
}
var j,k,l;
return e&&e.dom&&("EventTarget"===a||"Node"===a)&&(k=c.W("click"),l=c.Y(),j=function(a){
if(a){
var b;
try{
b=a.type;
}
catch(c){
return;
}
return "click"===b?k(a):"keypress"===b?l(a):void 0;
}
}),b.call(this,d,c.wrap(f,void 0,j),g,h);
};
},d),E(b,"removeEventListener",function(a){
return function(b,c,d,e){
try{
c=c&&(c.M?c.M:c);
}
catch(f){
}
return a.call(this,b,c,d,e);
};
},d));
};
var c=this,d=c.t,e=this.k.autoBreadcrumbs;
E(J,"setTimeout",a,d),E(J,"setInterval",a,d),J.requestAnimationFrame&&E(J,"requestAnimationFrame",function(a){
return function(b){
return a(c.wrap(b));
};
},d);
for(var f=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],g=0;g<f.length;g++){
b(f[g]);
}
},D:function(){
function a(a,c){
a in c&&o(c[a])&&E(c,a,function(a){
return b.wrap(a);
});
};
var b=this,c=this.k.autoBreadcrumbs,d=b.t;
if(c.xhr&&"XMLHttpRequest" in J){
var e=XMLHttpRequest.prototype;
E(e,"open",function(a){
return function(c,d){
return p(d)&&d.indexOf(b.h)===-1&&(this._={method:c,url:d,status_code:null}),a.apply(this,arguments);
};
},d),E(e,"send",function(c){
return function(){
function d(){
if(e._&&4===e.readyState){
try{
e._.status_code=e.status;
}
catch(a){
}
b.captureBreadcrumb({type:"http",category:"xhr",data:e._});
}
};
for(var e=this,f=["onload","onerror","onprogress"],g=0;g<f.length;g++){
a(f[g],e);
}
return "onreadystatechange" in e&&o(e.onreadystatechange)?E(e,"onreadystatechange",function(a){
return b.wrap(a,void 0,d);
}):e.onreadystatechange=d,c.apply(this,arguments);
};
},d);
}
c.xhr&&F()&&E(J,"fetch",function(a){
return function(){
for(var c=new Array(arguments.length),d=0;d<c.length;++d){
c[d]=arguments[d];
}
var e,f=c[0],g="GET";
if("string"==typeof f?e=f:"Request" in J&&f instanceof J.Request?(e=f.url,f.method&&(g=f.method)):e=""+f,e.indexOf(b.h)!==-1){
return a.apply(this,c);
}
c[1]&&c[1].method&&(g=c[1].method);
var h={method:g,url:e,status_code:null};
return a.apply(this,c).then(function(a){
return h.status_code=a.status,b.captureBreadcrumb({type:"http",category:"fetch",data:h}),a;
});
};
},d),c.dom&&this.b&&(K.addEventListener?(K.addEventListener("click",b.W("click"),!1),K.addEventListener("keypress",b.Y(),!1)):(K.attachEvent("onclick",b.W("click")),K.attachEvent("onkeypress",b.Y())));
var f=J.chrome,g=f&&f.app&&f.app.runtime,h=!g&&J.history&&history.pushState&&history.replaceState;
if(c.location&&h){
var i=J.onpopstate;
J.onpopstate=function(){
var a=b.w.href;
if(b.Z(b.x,a),i){
return i.apply(this,arguments);
}
};
var j=function(a){
return function(){
var c=arguments.length>2?arguments[2]:void 0;
return c&&b.Z(b.x,c+""),a.apply(this,arguments);
};
};
E(history,"pushState",j,d),E(history,"replaceState",j,d);
}
if(c.console&&"console" in J&&console.log){
var k=function(a,c){
b.captureBreadcrumb({message:a,level:c.level,category:"console"});
};
s(["debug","info","warn","error","log"],function(a,b){
G(console,b,k);
});
}
},P:function(){
for(var a;this.t.length;){
a=this.t.shift();
var b=a[0],c=a[1],d=a[2];
b[c]=d;
}
},Q:function(){
for(var a in this.q){
this.p[a]=this.q[a];
}
},E:function(){
var a=this;
s(this.r,function(b,c){
var d=c[0],e=c[1];
d.apply(a,[a].concat(e));
});
},F:function(a){
var b=I.exec(a),c={},d=7;
try{
for(;d--;){
c[H[d]]=b[d]||"";
}
}
catch(e){
throw new i("Invalid DSN: "+a);
}
if(c.pass&&!this.k.allowSecretKey){
throw new i("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
}
return c;
},I:function(a){
var b="//"+a.host+(a.port?":"+a.port:"");
return a.protocol&&(b=a.protocol+":"+b),b;
},A:function(){
this.m||this.R.apply(this,arguments);
},R:function(a,b){
var c=this.S(a,b);
this.V("handle",{stackInfo:a,options:b}),this.aa(a.name,a.message,a.url,a.lineno,c,b);
},S:function(a,b){
var c=this,d=[];
if(a.stack&&a.stack.length&&(s(a.stack,function(b,e){
var f=c.ba(e,a.url);
f&&d.push(f);
}),b&&b.trimHeadFrames)){
for(var e=0;e<b.trimHeadFrames&&e<d.length;e++){
d[e].in_app=!1;
}
}
return d=d.slice(0,this.k.stackTraceLimit);
},ba:function(a,b){
var c={filename:a.url,lineno:a.line,colno:a.column,"function":a.func||"?"};
return a.url||(c.filename=b),c.in_app=!(this.k.includePaths.test&&!this.k.includePaths.test(c.filename)||/(Raven|TraceKit)\./.test(c["function"])||/raven\.(min\.)?js$/.test(c.filename)),c;
},aa:function(a,b,c,d,e,f){
var g=(a?a+": ":"")+(b||"");
if(!this.k.ignoreErrors.test||!this.k.ignoreErrors.test(b)&&!this.k.ignoreErrors.test(g)){
var h;
if(e&&e.length?(c=e[0].filename||c,e.reverse(),h={frames:e}):c&&(h={frames:[{filename:c,lineno:d,in_app:!0}]}),(!this.k.ignoreUrls.test||!this.k.ignoreUrls.test(c))&&(!this.k.whitelistUrls.test||this.k.whitelistUrls.test(c))){
var i=t({exception:{values:[{type:a,value:b,stacktrace:h}]},culprit:c},f);
this.T(i);
}
}
},ca:function(a){
var b=this.k.maxMessageLength;
if(a.message&&(a.message=u(a.message,b)),a.exception){
var c=a.exception.values[0];
c.value=u(c.value,b);
}
var d=a.request;
return d&&(d.url&&(d.url=u(d.url,this.k.maxUrlLength)),d.Referer&&(d.Referer=u(d.Referer,this.k.maxUrlLength))),a.breadcrumbs&&a.breadcrumbs.values&&this.da(a.breadcrumbs),a;
},da:function(a){
for(var b,c,d,e=["to","from","url"],f=0;f<a.values.length;++f){
if(c=a.values[f],c.hasOwnProperty("data")&&l(c.data)&&!v(c.data)){
d=t({},c.data);
for(var g=0;g<e.length;++g){
b=e[g],d.hasOwnProperty(b)&&d[b]&&(d[b]=u(d[b],this.k.maxUrlLength));
}
a.values[f].data=d;
}
}
},ea:function(){
if(this.c||this.b){
var a={};
return this.c&&L.userAgent&&(a.headers={"User-Agent":navigator.userAgent}),J.location&&J.location.href&&(a.url=J.location.href),this.b&&K.referrer&&(a.headers||(a.headers={}),a.headers.Referer=K.referrer),a;
}
},y:function(){
this.fa=0,this.ga=null;
},ha:function(){
return this.fa&&d()-this.ga<this.fa;
},ia:function(a){
var b=this.e;
return !(!b||a.message!==b.message||a.culprit!==b.culprit)&&(a.stacktrace||b.stacktrace?C(a.stacktrace,b.stacktrace):!a.exception&&!b.exception||B(a.exception,b.exception));
},ja:function(a){
if(!this.ha()){
var b=a.status;
if(400===b||401===b||429===b){
var c;
try{
c=F()?a.headers.get("Retry-After"):a.getResponseHeader("Retry-After"),c=1000*parseInt(c,10);
}
catch(e){
}
this.fa=c?c:2*this.fa||1000,this.ga=d();
}
}
},T:function(a){
var b=this.k,c={project:this.i,logger:b.logger,platform:"javascript"},e=this.ea();
if(e&&(c.request=e),a.trimHeadFrames&&delete a.trimHeadFrames,a=t(c,a),a.tags=t(t({},this.j.tags),a.tags),a.extra=t(t({},this.j.extra),a.extra),a.extra["session:duration"]=d()-this.s,this.u&&this.u.length>0&&(a.breadcrumbs={values:[].slice.call(this.u,0)}),this.j.user&&(a.user=this.j.user),b.environment&&(a.environment=b.environment),b.release&&(a.release=b.release),b.serverName&&(a.server_name=b.serverName),Object.keys(a).forEach(function(b){
(null==a[b]||""===a[b]||r(a[b]))&&delete a[b];
}),o(b.dataCallback)&&(a=b.dataCallback(a)||a),a&&!r(a)&&(!o(b.shouldSendCallback)||b.shouldSendCallback(a))){
return this.ha()?void this.z("warn","Raven dropped error due to backoff: ",a):void ("number"==typeof b.sampleRate?Math.random()<b.sampleRate&&this.ka(a):this.ka(a));
}
},la:function(){
return z();
},ka:function(a,b){
var c=this,d=this.k;
if(this.isSetup()){
if(a=this.ca(a),!this.k.allowDuplicates&&this.ia(a)){
return void this.z("warn","Raven dropped repeat event: ",a);
}
this.f=a.event_id||(a.event_id=this.la()),this.e=a,this.z("debug","Raven about to send:",a);
var e={sentry_version:"7",sentry_client:"raven-js/"+this.VERSION,sentry_key:this.h};
this.H&&(e.sentry_secret=this.H);
var f=a.exception&&a.exception.values[0];
this.k.autoBreadcrumbs&&this.k.autoBreadcrumbs.sentry&&this.captureBreadcrumb({category:"sentry",message:f?(f.type?f.type+": ":"")+f.value:a.message,event_id:a.event_id,level:a.level||"error"});
var g=this.J;
(d.transport||this.ma).call(this,{url:g,auth:e,data:a,options:d,onSuccess:function(){
c.y(),c.V("success",{data:a,src:g}),b&&b();
},onError:function(d){
c.z("error","Raven transport failed to send: ",d),d.request&&c.ja(d.request),c.V("failure",{data:a,src:g}),d=d||new Error("Raven send failed (no additional details provided)"),b&&b(d);
}});
}
},ma:function(a){
var b=a.url+"?"+y(a.auth),c=null,d={};
if(a.options.headers&&(c=this.na(a.options.headers)),a.options.fetchParameters&&(d=this.na(a.options.fetchParameters)),F()){
d.body=h(a.data);
var e=t({},this.l),f=t(e,d);
return c&&(f.headers=c),J.fetch(b,f).then(function(b){
if(b.ok){
a.onSuccess&&a.onSuccess();
}else{
var c=new Error("Sentry error code: "+b.status);
c.request=b,a.onError&&a.onError(c);
}
})["catch"](function(){
a.onError&&a.onError(new Error("Sentry error code: network unavailable"));
});
}
var g=J.XMLHttpRequest&&new J.XMLHttpRequest;
if(g){
var i="withCredentials" in g||"undefined"!=typeof XDomainRequest;
i&&("withCredentials" in g?g.onreadystatechange=function(){
if(4===g.readyState){
if(200===g.status){
a.onSuccess&&a.onSuccess();
}else{
if(a.onError){
var b=new Error("Sentry error code: "+g.status);
b.request=g,a.onError(b);
}
}
}
}:(g=new XDomainRequest,b=b.replace(/^https?:/,""),a.onSuccess&&(g.onload=a.onSuccess),a.onError&&(g.onerror=function(){
var b=new Error("Sentry error code: XDomainRequest");
b.request=g,a.onError(b);
})),g.open("POST",b),c&&s(c,function(a,b){
g.setRequestHeader(a,b);
}),g.send(h(a.data)));
}
},na:function(a){
var b={};
for(var c in a){
if(a.hasOwnProperty(c)){
var d=a[c];
b[c]="function"==typeof d?d():d;
}
}
return b;
},z:function(a){
this.q[a]&&this.debug&&Function.prototype.apply.call(this.q[a],this.p,[].slice.call(arguments,1));
},U:function(a,b){
n(b)?delete this.j[a]:this.j[a]=t(this.j[a]||{},b);
}},f.prototype.setUser=f.prototype.setUserContext,f.prototype.setReleaseContext=f.prototype.setRelease,b.exports=f;
}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
},{1:1,2:2,5:5,6:6,7:7}],4:[function(a,b,c){
(function(c){
var d=a(3),e="undefined"!=typeof window?window:"undefined"!=typeof c?c:"undefined"!=typeof self?self:{},f=e.Raven,g=new d;
g.noConflict=function(){
return e.Raven=f,g;
},g.afterLoad(),b.exports=g;
}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
},{3:3}],5:[function(a,b,c){
(function(a){
function c(a){
return "object"==typeof a&&null!==a;
};
function d(a){
switch({}.toString.call(a)){
case "[object Error]":
return !0;
case "[object Exception]":
return !0;
case "[object DOMException]":
return !0;
default:
return a instanceof Error;
}
};
function e(a){
return l()&&"[object ErrorEvent]"==={}.toString.call(a);
};
function f(a){
return void 0===a;
};
function g(a){
return "function"==typeof a;
};
function h(a){
return "[object Object]"===Object.prototype.toString.call(a);
};
function i(a){
return "[object String]"===Object.prototype.toString.call(a);
};
function j(a){
return "[object Array]"===Object.prototype.toString.call(a);
};
function k(a){
if(!h(a)){
return !1;
}
for(var b in a){
if(a.hasOwnProperty(b)){
return !1;
}
}
return !0;
};
function l(){
try{
return new ErrorEvent(""),!0;
}
catch(a){
return !1;
}
};
function m(){
if(!("fetch" in F)){
return !1;
}
try{
return new Headers,new Request(""),new Response,!0;
}
catch(a){
return !1;
}
};
function n(a){
function b(b,c){
var d=a(b)||b;
return c?c(d)||d:d;
};
return b;
};
function o(a,b){
var c,d;
if(f(a.length)){
for(c in a){
s(a,c)&&b.call(null,c,a[c]);
}
}else{
if(d=a.length){
for(c=0;c<d;c++){
b.call(null,c,a[c]);
}
}
}
};
function p(a,b){
return b?(o(b,function(b,c){
a[b]=c;
}),a):a;
};
function q(a){
return !!Object.isFrozen&&Object.isFrozen(a);
};
function r(a,b){
return !b||a.length<=b?a:a.substr(0,b)+"\u2026";
};
function s(a,b){
return Object.prototype.hasOwnProperty.call(a,b);
};
function t(a){
for(var b,c=[],d=0,e=a.length;d<e;d++){
b=a[d],i(b)?c.push(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")):b&&b.source&&c.push(b.source);
}
return new RegExp(c.join("|"),"i");
};
function u(a){
var b=[];
return o(a,function(a,c){
b.push(encodeURIComponent(a)+"="+encodeURIComponent(c));
}),b.join("&");
};
function v(a){
if("string"!=typeof a){
return {};
}
var b=a.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/),c=b[6]||"",d=b[8]||"";
return {protocol:b[2],host:b[4],path:b[5],relative:b[5]+c+d};
};
function w(){
var a=F.crypto||F.msCrypto;
if(!f(a)&&a.getRandomValues){
var b=new Uint16Array(8);
a.getRandomValues(b),b[3]=4095&b[3]|16384,b[4]=16383&b[4]|32768;
var c=function(a){
for(var b=a.toString(16);b.length<4;){
b="0"+b;
}
return b;
};
return c(b[0])+c(b[1])+c(b[2])+c(b[3])+c(b[4])+c(b[5])+c(b[6])+c(b[7]);
}
return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(a){
var b=16*Math.random()|0,c="x"===a?b:3&b|8;
return c.toString(16);
});
};
function x(a){
for(var b,c=5,d=80,e=[],f=0,g=0,h=" > ",i=h.length;a&&f++<c&&(b=y(a),!("html"===b||f>1&&g+e.length*i+b.length>=d));){
e.push(b),g+=b.length,a=a.parentNode;
}
return e.reverse().join(h);
};
function y(a){
var b,c,d,e,f,g=[];
if(!a||!a.tagName){
return "";
}
if(g.push(a.tagName.toLowerCase()),a.id&&g.push("#"+a.id),b=a.className,b&&i(b)){
for(c=b.split(/\s+/),f=0;f<c.length;f++){
g.push("."+c[f]);
}
}
var h=["type","name","title","alt"];
for(f=0;f<h.length;f++){
d=h[f],e=a.getAttribute(d),e&&g.push("["+d+"=\""+e+"\"]");
}
return g.join("");
};
function z(a,b){
return !!(!!a^!!b);
};
function A(a,b){
return f(a)&&f(b);
};
function B(a,b){
return !z(a,b)&&(a=a.values[0],b=b.values[0],a.type===b.type&&a.value===b.value&&(!A(a.stacktrace,b.stacktrace)&&C(a.stacktrace,b.stacktrace)));
};
function C(a,b){
if(z(a,b)){
return !1;
}
var c=a.frames,d=b.frames;
if(c.length!==d.length){
return !1;
}
for(var e,f,g=0;g<c.length;g++){
if(e=c[g],f=d[g],e.filename!==f.filename||e.lineno!==f.lineno||e.colno!==f.colno||e["function"]!==f["function"]){
return !1;
}
}
return !0;
};
function D(a,b,c,d){
var e=a[b];
a[b]=c(e),a[b].L=!0,a[b].N=e,d&&d.push([a,b,e]);
};
function E(a,b){
if(!j(a)){
return "";
}
for(var c=[],d=0;d<a.length;d++){
try{
c.push(String(a[d]));
}
catch(e){
c.push("[value cannot be serialized]");
}
}
return c.join(b);
};
var F="undefined"!=typeof window?window:"undefined"!=typeof a?a:"undefined"!=typeof self?self:{};
b.exports={isObject:c,isError:d,isErrorEvent:e,isUndefined:f,isFunction:g,isPlainObject:h,isString:i,isArray:j,isEmptyObject:k,supportsErrorEvent:l,supportsFetch:m,wrappedCallback:n,each:o,objectMerge:p,truncate:r,objectFrozen:q,hasKey:s,joinRegExp:t,urlencode:u,uuid4:w,htmlTreeAsString:x,htmlElementAsString:y,isSameException:B,isSameStacktrace:C,parseUrl:v,fill:D,safeJoin:E};
}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
},{}],6:[function(a,b,c){
(function(c){
function d(){
return "undefined"==typeof document||null==document.location?"":document.location.href;
};
var e=a(5),f={collectWindowErrors:!0,debug:!1},g="undefined"!=typeof window?window:"undefined"!=typeof c?c:"undefined"!=typeof self?self:{},h=[].slice,i="?",j=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
f.report=function(){
function a(a){
m(),s.push(a);
};
function b(a){
for(var b=s.length-1;b>=0;--b){
s[b]===a&&s.splice(b,1);
}
};
function c(){
n(),s=[];
};
function k(a,b){
var c=null;
if(!b||f.collectWindowErrors){
for(var d in s){
if(s.hasOwnProperty(d)){
try{
s[d].apply(null,[a].concat(h.call(arguments,2)));
}
catch(e){
c=e;
}
}
}
if(c){
throw c;
}
}
};
function l(a,b,c,g,h){
var l=null,m=e.isErrorEvent(h)?h.error:h,n=e.isErrorEvent(a)?a.message:a;
if(v){
f.computeStackTrace.augmentStackTraceWithInitialElement(v,b,c,n),o();
}else{
if(m&&e.isError(m)){
l=f.computeStackTrace(m),k(l,!0);
}else{
var p,r={url:b,line:c,column:g},s=void 0;
if("[object String]"==={}.toString.call(n)){
var p=n.match(j);
p&&(s=p[1],n=p[2]);
}
r.func=i,l={name:s,message:n,url:d(),stack:[r]},k(l,!0);
}
}
return !!q&&q.apply(this,arguments);
};
function m(){
r||(q=g.onerror,g.onerror=l,r=!0);
};
function n(){
r&&(g.onerror=q,r=!1,q=void 0);
};
function o(){
var a=v,b=t;
t=null,v=null,u=null,k.apply(null,[a,!1].concat(b));
};
function p(a,b){
var c=h.call(arguments,1);
if(v){
if(u===a){
return;
}
o();
}
var d=f.computeStackTrace(a);
if(v=d,u=a,t=c,setTimeout(function(){
u===a&&o();
},d.incomplete?2000:0),b!==!1){
throw a;
}
};
var q,r,s=[],t=null,u=null,v=null;
return p.subscribe=a,p.unsubscribe=b,p.uninstall=c,p;
}(),f.computeStackTrace=function(){
function a(a){
if("undefined"!=typeof a.stack&&a.stack){
for(var b,c,e,f=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,g=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,h=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,j=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,k=/\((\S*)(?::(\d+))(?::(\d+))\)/,l=a.stack.split("\n"),m=[],n=(/^(.*) is undefined$/.exec(a.message),0),o=l.length;n<o;++n){
if(c=f.exec(l[n])){
var p=c[2]&&0===c[2].indexOf("native"),q=c[2]&&0===c[2].indexOf("eval");
q&&(b=k.exec(c[2]))&&(c[2]=b[1],c[3]=b[2],c[4]=b[3]),e={url:p?null:c[2],func:c[1]||i,args:p?[c[2]]:[],line:c[3]?+c[3]:null,column:c[4]?+c[4]:null};
}else{
if(c=h.exec(l[n])){
e={url:c[2],func:c[1]||i,args:[],line:+c[3],column:c[4]?+c[4]:null};
}else{
if(!(c=g.exec(l[n]))){
continue;
}
var q=c[3]&&c[3].indexOf(" > eval")>-1;
q&&(b=j.exec(c[3]))?(c[3]=b[1],c[4]=b[2],c[5]=null):0!==n||c[5]||"undefined"==typeof a.columnNumber||(m[0].column=a.columnNumber+1),e={url:c[3],func:c[1]||i,args:c[2]?c[2].split(","):[],line:c[4]?+c[4]:null,column:c[5]?+c[5]:null};
}
}
!e.func&&e.line&&(e.func=i),m.push(e);
}
return m.length?{name:a.name,message:a.message,url:d(),stack:m}:null;
}
};
function b(a,b,c,d){
var e={url:b,line:c};
if(e.url&&e.line){
if(a.incomplete=!1,e.func||(e.func=i),a.stack.length>0&&a.stack[0].url===e.url){
if(a.stack[0].line===e.line){
return !1;
}
if(!a.stack[0].line&&a.stack[0].func===e.func){
return a.stack[0].line=e.line,!1;
}
}
return a.stack.unshift(e),a.partial=!0,!0;
}
return a.incomplete=!0,!1;
};
function c(a,g){
for(var h,j,k=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,l=[],m={},n=!1,o=c.caller;o&&!n;o=o.caller){
if(o!==e&&o!==f.report){
if(j={url:null,func:i,line:null,column:null},o.name?j.func=o.name:(h=k.exec(o.toString()))&&(j.func=h[1]),"undefined"==typeof j.func){
try{
j.func=h.input.substring(0,h.input.indexOf("{"));
}
catch(p){
}
}
m[""+o]?n=!0:m[""+o]=!0,l.push(j);
}
}
g&&l.splice(0,g);
var q={name:a.name,message:a.message,url:d(),stack:l};
return b(q,a.sourceURL||a.fileName,a.line||a.lineNumber,a.message||a.description),q;
};
function e(b,e){
var g=null;
e=null==e?0:+e;
try{
if(g=a(b)){
return g;
}
}
catch(h){
if(f.debug){
throw h;
}
}
try{
if(g=c(b,e+1)){
return g;
}
}
catch(h){
if(f.debug){
throw h;
}
}
return {name:b.name,message:b.message,url:d()};
};
return e.augmentStackTraceWithInitialElement=b,e.computeStackTraceFromStackProp=a,e;
}(),b.exports=f;
}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
},{5:5}],7:[function(a,b,c){
function d(a,b){
for(var c=0;c<a.length;++c){
if(a[c]===b){
return c;
}
}
return -1;
};
function e(a,b,c,d){
return JSON.stringify(a,g(b,d),c);
};
function f(a){
var b={stack:a.stack,message:a.message,name:a.name};
for(var c in a){
Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);
}
return b;
};
function g(a,b){
var c=[],e=[];
return null==b&&(b=function(a,b){
return c[0]===b?"[Circular ~]":"[Circular ~."+e.slice(0,d(c,b)).join(".")+"]";
}),function(g,h){
if(c.length>0){
var i=d(c,this);
~i?c.splice(i+1):c.push(this),~i?e.splice(i,1/0,g):e.push(g),~d(c,h)&&(h=b.call(this,g,h));
}else{
c.push(h);
}
return null==a?h instanceof Error?f(h):h:a.call(this,g,h);
};
};
c=b.exports=e,c.getSerialize=g;
},{}]},{},[4])(4);
});
Raven.config(rabbit.parameters.sentryDsn,{environment:(rabbit.parameters.sentryEnvironmentPrefix?rabbit.parameters.sentryEnvironmentPrefix:"")+window.location.host,name:window.location.host,release:(rabbit.parameters.codeVersion===""?"dev":rabbit.parameters.codeVersion.replace("__version__","dev")),}).install();
Raven.setUserContext({"id":rabbit.parameters.uid,username:rabbit.parameters.uid,email:"user-"+rabbit.parameters.uid+"@pidoco.com"});
if(typeof YAHOO=="undefined"||!YAHOO){
var YAHOO={};
}
YAHOO.namespace=function(){
var A=arguments,E=null,C,B,D;
for(C=0;C<A.length;C=C+1){
D=A[C].split(".");
E=YAHOO;
for(B=(D[0]=="YAHOO")?1:0;B<D.length;B=B+1){
E[D[B]]=E[D[B]]||{};
E=E[D[B]];
}
}
return E;
};
YAHOO.log=function(D,A,C){
var B=YAHOO.widget.Logger;
if(B&&B.log){
return B.log(D,A,C);
}else{
return false;
}
};
YAHOO.register=function(A,E,D){
var I=YAHOO.env.modules;
if(!I[A]){
I[A]={versions:[],builds:[]};
}
var B=I[A],H=D.version,G=D.build,F=YAHOO.env.listeners;
B.name=A;
B.version=H;
B.build=G;
B.versions.push(H);
B.builds.push(G);
B.mainClass=E;
for(var C=0;C<F.length;C=C+1){
F[C](B);
}
if(E){
E.VERSION=H;
E.BUILD=G;
}else{
YAHOO.log("mainClass is undefined for module "+A,"warn");
}
};
YAHOO.env=YAHOO.env||{modules:[],listeners:[]};
YAHOO.env.getVersion=function(A){
return YAHOO.env.modules[A]||null;
};
YAHOO.env.ua=function(){
var C={ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0};
var B=navigator.userAgent,A;
if((/KHTML/).test(B)){
C.webkit=1;
}
A=B.match(/AppleWebKit\/([^\s]*)/);
if(A&&A[1]){
C.webkit=parseFloat(A[1]);
if(/ Mobile\//.test(B)){
C.mobile="Apple";
}else{
A=B.match(/NokiaN[^\/]*/);
if(A){
C.mobile=A[0];
}
}
A=B.match(/AdobeAIR\/([^\s]*)/);
if(A){
C.air=A[0];
}
}
if(!C.webkit){
A=B.match(/Opera[\s\/]([^\s]*)/);
if(A&&A[1]){
C.opera=parseFloat(A[1]);
A=B.match(/Opera Mini[^;]*/);
if(A){
C.mobile=A[0];
}
}else{
A=B.match(/MSIE\s([^;]*)/);
if(A&&A[1]){
C.ie=parseFloat(A[1]);
}else{
A=B.match(/Gecko\/([^\s]*)/);
if(A){
C.gecko=1;
A=B.match(/rv:([^\s\)]*)/);
if(A&&A[1]){
C.gecko=parseFloat(A[1]);
}
}
}
}
}
return C;
}();
(function(){
YAHOO.namespace("util","widget","example");
if("undefined"!==typeof YAHOO_config){
var B=YAHOO_config.listener,A=YAHOO.env.listeners,D=true,C;
if(B){
for(C=0;C<A.length;C=C+1){
if(A[C]==B){
D=false;
break;
}
}
if(D){
A.push(B);
}
}
}
})();
YAHOO.lang=YAHOO.lang||{};
(function(){
var A=YAHOO.lang,C=["toString","valueOf"],B={isArray:function(D){
if(D){
return A.isNumber(D.length)&&A.isFunction(D.splice);
}
return false;
},isBoolean:function(D){
return typeof D==="boolean";
},isFunction:function(D){
return typeof D==="function";
},isNull:function(D){
return D===null;
},isNumber:function(D){
return typeof D==="number"&&isFinite(D);
},isObject:function(D){
return (D&&(typeof D==="object"||A.isFunction(D)))||false;
},isString:function(D){
return typeof D==="string";
},isUndefined:function(D){
return typeof D==="undefined";
},_IEEnumFix:(YAHOO.env.ua.ie)?function(F,E){
for(var D=0;D<C.length;D=D+1){
var H=C[D],G=E[H];
if(A.isFunction(G)&&G!=Object.prototype[H]){
F[H]=G;
}
}
}:function(){
},extend:function(H,I,G){
if(!I||!H){
throw new Error("extend failed, please check that "+"all dependencies are included.");
}
var E=function(){
};
E.prototype=I.prototype;
H.prototype=new E();
H.prototype.constructor=H;
H.superclass=I.prototype;
if(I.prototype.constructor==Object.prototype.constructor){
I.prototype.constructor=I;
}
if(G){
for(var D in G){
if(A.hasOwnProperty(G,D)){
H.prototype[D]=G[D];
}
}
A._IEEnumFix(H.prototype,G);
}
},augmentObject:function(H,G){
if(!G||!H){
throw new Error("Absorb failed, verify dependencies.");
}
var D=arguments,F,I,E=D[2];
if(E&&E!==true){
for(F=2;F<D.length;F=F+1){
H[D[F]]=G[D[F]];
}
}else{
for(I in G){
if(E||!(I in H)){
H[I]=G[I];
}
}
A._IEEnumFix(H,G);
}
},augmentProto:function(G,F){
if(!F||!G){
throw new Error("Augment failed, verify dependencies.");
}
var D=[G.prototype,F.prototype];
for(var E=2;E<arguments.length;E=E+1){
D.push(arguments[E]);
}
A.augmentObject.apply(this,D);
},dump:function(D,I){
var F,H,K=[],L="{...}",E="f(){...}",J=", ",G=" => ";
if(!A.isObject(D)){
return D+"";
}else{
if(D instanceof Date||("nodeType" in D&&"tagName" in D)){
return D;
}else{
if(A.isFunction(D)){
return E;
}
}
}
I=(A.isNumber(I))?I:3;
if(A.isArray(D)){
K.push("[");
for(F=0,H=D.length;F<H;F=F+1){
if(A.isObject(D[F])){
K.push((I>0)?A.dump(D[F],I-1):L);
}else{
K.push(D[F]);
}
K.push(J);
}
if(K.length>1){
K.pop();
}
K.push("]");
}else{
K.push("{");
for(F in D){
if(A.hasOwnProperty(D,F)){
K.push(F+G);
if(A.isObject(D[F])){
K.push((I>0)?A.dump(D[F],I-1):L);
}else{
K.push(D[F]);
}
K.push(J);
}
}
if(K.length>1){
K.pop();
}
K.push("}");
}
return K.join("");
},substitute:function(S,E,L){
var I,H,G,O,P,R,N=[],F,J="dump",M=" ",D="{",Q="}";
for(;;){
I=S.lastIndexOf(D);
if(I<0){
break;
}
H=S.indexOf(Q,I);
if(I+1>=H){
break;
}
F=S.substring(I+1,H);
O=F;
R=null;
G=O.indexOf(M);
if(G>-1){
R=O.substring(G+1);
O=O.substring(0,G);
}
P=E[O];
if(L){
P=L(O,P,R);
}
if(A.isObject(P)){
if(A.isArray(P)){
P=A.dump(P,parseInt(R,10));
}else{
R=R||"";
var K=R.indexOf(J);
if(K>-1){
R=R.substring(4);
}
if(P.toString===Object.prototype.toString||K>-1){
P=A.dump(P,parseInt(R,10));
}else{
P=P.toString();
}
}
}else{
if(!A.isString(P)&&!A.isNumber(P)){
P="~-"+N.length+"-~";
N[N.length]=F;
}
}
S=S.substring(0,I)+P+S.substring(H+1);
}
for(I=N.length-1;I>=0;I=I-1){
S=S.replace(new RegExp("~-"+I+"-~"),"{"+N[I]+"}","g");
}
return S;
},trim:function(D){
try{
return D.replace(/^\s+|\s+$/g,"");
}
catch(E){
return D;
}
},merge:function(){
var G={},E=arguments;
for(var F=0,D=E.length;F<D;F=F+1){
A.augmentObject(G,E[F],true);
}
return G;
},later:function(K,E,L,G,H){
K=K||0;
E=E||{};
var F=L,J=G,I,D;
if(A.isString(L)){
F=E[L];
}
if(!F){
throw new TypeError("method undefined");
}
if(!A.isArray(J)){
J=[G];
}
I=function(){
F.apply(E,J);
};
D=(H)?setInterval(I,K):setTimeout(I,K);
return {interval:H,cancel:function(){
if(this.interval){
clearInterval(D);
}else{
clearTimeout(D);
}
}};
},isValue:function(D){
return (A.isObject(D)||A.isString(D)||A.isNumber(D)||A.isBoolean(D));
}};
A.hasOwnProperty=(Object.prototype.hasOwnProperty)?function(D,E){
return D&&D.hasOwnProperty(E);
}:function(D,E){
return !A.isUndefined(D[E])&&D.constructor.prototype[E]!==D[E];
};
B.augmentObject(A,B,true);
YAHOO.util.Lang=A;
A.augment=A.augmentProto;
YAHOO.augment=A.augmentProto;
YAHOO.extend=A.extend;
})();
YAHOO.register("yahoo",YAHOO,{version:"2.6.0",build:"1321"});
(function(){
var B=YAHOO.util,F=YAHOO.lang,L,J,K={},G={},N=window.document;
YAHOO.env._id_counter=YAHOO.env._id_counter||0;
var C=YAHOO.env.ua.opera,M=YAHOO.env.ua.webkit,A=YAHOO.env.ua.gecko,H=YAHOO.env.ua.ie;
var E={HYPHEN:/(-[a-z])/i,ROOT_TAG:/^body|html$/i,OP_SCROLL:/^(?:inline|table-row)$/i};
var O=function(Q){
if(!E.HYPHEN.test(Q)){
return Q;
}
if(K[Q]){
return K[Q];
}
var R=Q;
while(E.HYPHEN.exec(R)){
R=R.replace(RegExp.$1,RegExp.$1.substr(1).toUpperCase());
}
K[Q]=R;
return R;
};
var P=function(R){
var Q=G[R];
if(!Q){
Q=new RegExp("(?:^|\\s+)"+R+"(?:\\s+|$)");
G[R]=Q;
}
return Q;
};
if(N.defaultView&&N.defaultView.getComputedStyle){
L=function(Q,T){
var S=null;
if(T=="float"){
T="cssFloat";
}
var R=Q.ownerDocument.defaultView.getComputedStyle(Q,"");
if(R){
S=R[O(T)];
}
return Q.style[T]||S;
};
}else{
if(N.documentElement.currentStyle&&H){
L=function(Q,S){
switch(O(S)){
case "opacity":
var U=100;
try{
U=Q.filters["DXImageTransform.Microsoft.Alpha"].opacity;
}
catch(T){
try{
U=Q.filters("alpha").opacity;
}
catch(T){
}
}
return U/100;
case "float":
S="styleFloat";
default:
var R=Q.currentStyle?Q.currentStyle[S]:null;
return (Q.style[S]||R);
}
};
}else{
L=function(Q,R){
return Q.style[R];
};
}
}
if(H){
J=function(Q,R,S){
switch(R){
case "opacity":
if(F.isString(Q.style.filter)){
Q.style.filter="alpha(opacity="+S*100+")";
if(!Q.currentStyle||!Q.currentStyle.hasLayout){
Q.style.zoom=1;
}
}
break;
case "float":
R="styleFloat";
default:
Q.style[R]=S;
}
};
}else{
J=function(Q,R,S){
if(R=="float"){
R="cssFloat";
}
Q.style[R]=S;
};
}
var D=function(Q,R){
return Q&&Q.nodeType==1&&(!R||R(Q));
};
YAHOO.util.Dom={get:function(S){
if(S){
if(S.nodeType||S.item){
return S;
}
if(typeof S==="string"){
return N.getElementById(S);
}
if("length" in S){
var T=[];
for(var R=0,Q=S.length;R<Q;++R){
T[T.length]=B.Dom.get(S[R]);
}
return T;
}
return S;
}
return null;
},getStyle:function(Q,S){
S=O(S);
var R=function(T){
return L(T,S);
};
return B.Dom.batch(Q,R,B.Dom,true);
},setStyle:function(Q,S,T){
S=O(S);
var R=function(U){
J(U,S,T);
};
B.Dom.batch(Q,R,B.Dom,true);
},getXY:function(Q){
var R=function(S){
if((S.parentNode===null||S.offsetParent===null||this.getStyle(S,"display")=="none")&&S!=S.ownerDocument.body){
return false;
}
return I(S);
};
return B.Dom.batch(Q,R,B.Dom,true);
},getX:function(Q){
var R=function(S){
return B.Dom.getXY(S)[0];
};
return B.Dom.batch(Q,R,B.Dom,true);
},getY:function(Q){
var R=function(S){
return B.Dom.getXY(S)[1];
};
return B.Dom.batch(Q,R,B.Dom,true);
},setXY:function(Q,T,S){
var R=function(W){
var V=this.getStyle(W,"position");
if(V=="static"){
this.setStyle(W,"position","relative");
V="relative";
}
var Y=this.getXY(W);
if(Y===false){
return false;
}
var X=[parseInt(this.getStyle(W,"left"),10),parseInt(this.getStyle(W,"top"),10)];
if(isNaN(X[0])){
X[0]=(V=="relative")?0:W.offsetLeft;
}
if(isNaN(X[1])){
X[1]=(V=="relative")?0:W.offsetTop;
}
if(T[0]!==null){
W.style.left=T[0]-Y[0]+X[0]+"px";
}
if(T[1]!==null){
W.style.top=T[1]-Y[1]+X[1]+"px";
}
if(!S){
var U=this.getXY(W);
if((T[0]!==null&&U[0]!=T[0])||(T[1]!==null&&U[1]!=T[1])){
this.setXY(W,T,true);
}
}
};
B.Dom.batch(Q,R,B.Dom,true);
},setX:function(R,Q){
B.Dom.setXY(R,[Q,null]);
},setY:function(Q,R){
B.Dom.setXY(Q,[null,R]);
},getRegion:function(Q){
var R=function(S){
if((S.parentNode===null||S.offsetParent===null||this.getStyle(S,"display")=="none")&&S!=S.ownerDocument.body){
return false;
}
var T=B.Region.getRegion(S);
return T;
};
return B.Dom.batch(Q,R,B.Dom,true);
},getClientWidth:function(){
return B.Dom.getViewportWidth();
},getClientHeight:function(){
return B.Dom.getViewportHeight();
},getElementsByClassName:function(U,Y,V,W){
U=F.trim(U);
Y=Y||"*";
V=(V)?B.Dom.get(V):null||N;
if(!V){
return [];
}
var R=[],Q=V.getElementsByTagName(Y),X=P(U);
for(var S=0,T=Q.length;S<T;++S){
if(X.test(Q[S].className)){
R[R.length]=Q[S];
if(W){
W.call(Q[S],Q[S]);
}
}
}
return R;
},hasClass:function(S,R){
var Q=P(R);
var T=function(U){
return Q.test(U.className);
};
return B.Dom.batch(S,T,B.Dom,true);
},addClass:function(R,Q){
var S=function(T){
if(this.hasClass(T,Q)){
return false;
}
T.className=F.trim([T.className,Q].join(" "));
return true;
};
return B.Dom.batch(R,S,B.Dom,true);
},removeClass:function(S,R){
var Q=P(R);
var T=function(W){
var V=false,X=W.className;
if(R&&X&&this.hasClass(W,R)){
W.className=X.replace(Q," ");
if(this.hasClass(W,R)){
this.removeClass(W,R);
}
W.className=F.trim(W.className);
if(W.className===""){
var U=(W.hasAttribute)?"class":"className";
W.removeAttribute(U);
}
V=true;
}
return V;
};
return B.Dom.batch(S,T,B.Dom,true);
},replaceClass:function(T,R,Q){
if(!Q||R===Q){
return false;
}
var S=P(R);
var U=function(V){
if(!this.hasClass(V,R)){
this.addClass(V,Q);
return true;
}
V.className=V.className.replace(S," "+Q+" ");
if(this.hasClass(V,R)){
this.removeClass(V,R);
}
V.className=F.trim(V.className);
return true;
};
return B.Dom.batch(T,U,B.Dom,true);
},generateId:function(Q,S){
S=S||"yui-gen";
var R=function(T){
if(T&&T.id){
return T.id;
}
var U=S+YAHOO.env._id_counter++;
if(T){
T.id=U;
}
return U;
};
return B.Dom.batch(Q,R,B.Dom,true)||R.apply(B.Dom,arguments);
},isAncestor:function(R,S){
R=B.Dom.get(R);
S=B.Dom.get(S);
var Q=false;
if((R&&S)&&(R.nodeType&&S.nodeType)){
if(R.contains&&R!==S){
Q=R.contains(S);
}else{
if(R.compareDocumentPosition){
Q=!!(R.compareDocumentPosition(S)&16);
}
}
}else{
}
return Q;
},inDocument:function(Q){
return this.isAncestor(N.documentElement,Q);
},getElementsBy:function(X,R,S,U){
R=R||"*";
S=(S)?B.Dom.get(S):null||N;
if(!S){
return [];
}
var T=[],W=S.getElementsByTagName(R);
for(var V=0,Q=W.length;V<Q;++V){
if(X(W[V])){
T[T.length]=W[V];
if(U){
U(W[V]);
}
}
}
return T;
},batch:function(U,X,W,S){
U=(U&&(U.tagName||U.item))?U:B.Dom.get(U);
if(!U||!X){
return false;
}
var T=(S)?W:window;
if(U.tagName||U.length===undefined){
return X.call(T,U,W);
}
var V=[];
for(var R=0,Q=U.length;R<Q;++R){
V[V.length]=X.call(T,U[R],W);
}
return V;
},getDocumentHeight:function(){
var R=(N.compatMode!="CSS1Compat")?N.body.scrollHeight:N.documentElement.scrollHeight;
var Q=Math.max(R,B.Dom.getViewportHeight());
return Q;
},getDocumentWidth:function(){
var R=(N.compatMode!="CSS1Compat")?N.body.scrollWidth:N.documentElement.scrollWidth;
var Q=Math.max(R,B.Dom.getViewportWidth());
return Q;
},getViewportHeight:function(){
var Q=self.innerHeight;
var R=N.compatMode;
if((R||H)&&!C){
Q=(R=="CSS1Compat")?N.documentElement.clientHeight:N.body.clientHeight;
}
return Q;
},getViewportWidth:function(){
var Q=self.innerWidth;
var R=N.compatMode;
if(R||H){
Q=(R=="CSS1Compat")?N.documentElement.clientWidth:N.body.clientWidth;
}
return Q;
},getAncestorBy:function(Q,R){
while((Q=Q.parentNode)){
if(D(Q,R)){
return Q;
}
}
return null;
},getAncestorByClassName:function(R,Q){
R=B.Dom.get(R);
if(!R){
return null;
}
var S=function(T){
return B.Dom.hasClass(T,Q);
};
return B.Dom.getAncestorBy(R,S);
},getAncestorByTagName:function(R,Q){
R=B.Dom.get(R);
if(!R){
return null;
}
var S=function(T){
return T.tagName&&T.tagName.toUpperCase()==Q.toUpperCase();
};
return B.Dom.getAncestorBy(R,S);
},getPreviousSiblingBy:function(Q,R){
while(Q){
Q=Q.previousSibling;
if(D(Q,R)){
return Q;
}
}
return null;
},getPreviousSibling:function(Q){
Q=B.Dom.get(Q);
if(!Q){
return null;
}
return B.Dom.getPreviousSiblingBy(Q);
},getNextSiblingBy:function(Q,R){
while(Q){
Q=Q.nextSibling;
if(D(Q,R)){
return Q;
}
}
return null;
},getNextSibling:function(Q){
Q=B.Dom.get(Q);
if(!Q){
return null;
}
return B.Dom.getNextSiblingBy(Q);
},getFirstChildBy:function(Q,S){
var R=(D(Q.firstChild,S))?Q.firstChild:null;
return R||B.Dom.getNextSiblingBy(Q.firstChild,S);
},getFirstChild:function(Q,R){
Q=B.Dom.get(Q);
if(!Q){
return null;
}
return B.Dom.getFirstChildBy(Q);
},getLastChildBy:function(Q,S){
if(!Q){
return null;
}
var R=(D(Q.lastChild,S))?Q.lastChild:null;
return R||B.Dom.getPreviousSiblingBy(Q.lastChild,S);
},getLastChild:function(Q){
Q=B.Dom.get(Q);
return B.Dom.getLastChildBy(Q);
},getChildrenBy:function(R,T){
var S=B.Dom.getFirstChildBy(R,T);
var Q=S?[S]:[];
B.Dom.getNextSiblingBy(S,function(U){
if(!T||T(U)){
Q[Q.length]=U;
}
return false;
});
return Q;
},getChildren:function(Q){
Q=B.Dom.get(Q);
if(!Q){
}
return B.Dom.getChildrenBy(Q);
},getDocumentScrollLeft:function(Q){
Q=Q||N;
return Math.max(Q.documentElement.scrollLeft,Q.body.scrollLeft);
},getDocumentScrollTop:function(Q){
Q=Q||N;
return Math.max(Q.documentElement.scrollTop,Q.body.scrollTop);
},insertBefore:function(R,Q){
R=B.Dom.get(R);
Q=B.Dom.get(Q);
if(!R||!Q||!Q.parentNode){
return null;
}
return Q.parentNode.insertBefore(R,Q);
},insertAfter:function(R,Q){
R=B.Dom.get(R);
Q=B.Dom.get(Q);
if(!R||!Q||!Q.parentNode){
return null;
}
if(Q.nextSibling){
return Q.parentNode.insertBefore(R,Q.nextSibling);
}else{
return Q.parentNode.appendChild(R);
}
},getClientRegion:function(){
var S=B.Dom.getDocumentScrollTop(),R=B.Dom.getDocumentScrollLeft(),T=B.Dom.getViewportWidth()+R,Q=B.Dom.getViewportHeight()+S;
return new B.Region(S,T,Q,R);
}};
var I=function(){
if(N.documentElement.getBoundingClientRect){
return function(S){
var T=S.getBoundingClientRect(),R=Math.round;
var Q=S.ownerDocument;
return [R(T.left+B.Dom.getDocumentScrollLeft(Q)),R(T.top+B.Dom.getDocumentScrollTop(Q))];
};
}else{
return function(S){
var T=[S.offsetLeft,S.offsetTop];
var R=S.offsetParent;
var Q=(M&&B.Dom.getStyle(S,"position")=="absolute"&&S.offsetParent==S.ownerDocument.body);
if(R!=S){
while(R){
T[0]+=R.offsetLeft;
T[1]+=R.offsetTop;
if(!Q&&M&&B.Dom.getStyle(R,"position")=="absolute"){
Q=true;
}
R=R.offsetParent;
}
}
if(Q){
T[0]-=S.ownerDocument.body.offsetLeft;
T[1]-=S.ownerDocument.body.offsetTop;
}
R=S.parentNode;
while(R.tagName&&!E.ROOT_TAG.test(R.tagName)){
if(R.scrollTop||R.scrollLeft){
T[0]-=R.scrollLeft;
T[1]-=R.scrollTop;
}
R=R.parentNode;
}
return T;
};
}
}();
})();
YAHOO.util.Region=function(C,D,A,B){
this.top=C;
this[1]=C;
this.right=D;
this.bottom=A;
this.left=B;
this[0]=B;
};
YAHOO.util.Region.prototype.contains=function(A){
return (A.left>=this.left&&A.right<=this.right&&A.top>=this.top&&A.bottom<=this.bottom);
};
YAHOO.util.Region.prototype.getArea=function(){
return ((this.bottom-this.top)*(this.right-this.left));
};
YAHOO.util.Region.prototype.intersect=function(E){
var C=Math.max(this.top,E.top);
var D=Math.min(this.right,E.right);
var A=Math.min(this.bottom,E.bottom);
var B=Math.max(this.left,E.left);
if(A>=C&&D>=B){
return new YAHOO.util.Region(C,D,A,B);
}else{
return null;
}
};
YAHOO.util.Region.prototype.union=function(E){
var C=Math.min(this.top,E.top);
var D=Math.max(this.right,E.right);
var A=Math.max(this.bottom,E.bottom);
var B=Math.min(this.left,E.left);
return new YAHOO.util.Region(C,D,A,B);
};
YAHOO.util.Region.prototype.toString=function(){
return ("Region {"+"top: "+this.top+", right: "+this.right+", bottom: "+this.bottom+", left: "+this.left+"}");
};
YAHOO.util.Region.getRegion=function(D){
var F=YAHOO.util.Dom.getXY(D);
var C=F[1];
var E=F[0]+D.offsetWidth;
var A=F[1]+D.offsetHeight;
var B=F[0];
return new YAHOO.util.Region(C,E,A,B);
};
YAHOO.util.Point=function(A,B){
if(YAHOO.lang.isArray(A)){
B=A[1];
A=A[0];
}
this.x=this.right=this.left=this[0]=A;
this.y=this.top=this.bottom=this[1]=B;
};
YAHOO.util.Point.prototype=new YAHOO.util.Region();
YAHOO.register("dom",YAHOO.util.Dom,{version:"2.6.0",build:"1321"});
YAHOO.util.CustomEvent=function(D,B,C,A){
this.type=D;
this.scope=B||window;
this.silent=C;
this.signature=A||YAHOO.util.CustomEvent.LIST;
this.subscribers=[];
if(!this.silent){
}
var E="_YUICEOnSubscribe";
if(D!==E){
this.subscribeEvent=new YAHOO.util.CustomEvent(E,this,true);
}
this.lastError=null;
};
YAHOO.util.CustomEvent.LIST=0;
YAHOO.util.CustomEvent.FLAT=1;
YAHOO.util.CustomEvent.prototype={subscribe:function(B,C,A){
if(!B){
throw new Error("Invalid callback for subscriber to '"+this.type+"'");
}
if(this.subscribeEvent){
this.subscribeEvent.fire(B,C,A);
}
this.subscribers.push(new YAHOO.util.Subscriber(B,C,A));
},unsubscribe:function(D,F){
if(!D){
return this.unsubscribeAll();
}
var E=false;
for(var B=0,A=this.subscribers.length;B<A;++B){
var C=this.subscribers[B];
if(C&&C.contains(D,F)){
this._delete(B);
E=true;
}
}
return E;
},fire:function(){
this.lastError=null;
var K=[],E=this.subscribers.length;
if(!E&&this.silent){
return true;
}
var I=[].slice.call(arguments,0),G=true,D,J=false;
if(!this.silent){
}
var C=this.subscribers.slice(),A=YAHOO.util.Event.throwErrors;
for(D=0;D<E;++D){
var M=C[D];
if(!M){
J=true;
}else{
if(!this.silent){
}
var L=M.getScope(this.scope);
if(this.signature==YAHOO.util.CustomEvent.FLAT){
var B=null;
if(I.length>0){
B=I[0];
}
try{
G=M.fn.call(L,B,M.obj);
}
catch(F){
this.lastError=F;
if(A){
throw F;
}
}
}else{
try{
G=M.fn.call(L,this.type,I,M.obj);
}
catch(H){
this.lastError=H;
if(A){
throw H;
}
}
}
if(false===G){
if(!this.silent){
}
break;
}
}
}
return (G!==false);
},unsubscribeAll:function(){
for(var A=this.subscribers.length-1;A>-1;A--){
this._delete(A);
}
this.subscribers=[];
return A;
},_delete:function(A){
var B=this.subscribers[A];
if(B){
delete B.fn;
delete B.obj;
}
this.subscribers.splice(A,1);
},toString:function(){
return "CustomEvent: "+"'"+this.type+"', "+"scope: "+this.scope;
}};
YAHOO.util.Subscriber=function(B,C,A){
this.fn=B;
this.obj=YAHOO.lang.isUndefined(C)?null:C;
this.override=A;
};
YAHOO.util.Subscriber.prototype.getScope=function(A){
if(this.override){
if(this.override===true){
return this.obj;
}else{
return this.override;
}
}
return A;
};
YAHOO.util.Subscriber.prototype.contains=function(A,B){
if(B){
return (this.fn==A&&this.obj==B);
}else{
return (this.fn==A);
}
};
YAHOO.util.Subscriber.prototype.toString=function(){
return "Subscriber { obj: "+this.obj+", override: "+(this.override||"no")+" }";
};
if(!YAHOO.util.Event){
YAHOO.util.Event=function(){
var H=false;
var I=[];
var J=[];
var G=[];
var E=[];
var C=0;
var F=[];
var B=[];
var A=0;
var D={63232:38,63233:40,63234:37,63235:39,63276:33,63277:34,25:9};
var K=YAHOO.env.ua.ie?"focusin":"focus";
var L=YAHOO.env.ua.ie?"focusout":"blur";
return {POLL_RETRYS:2000,POLL_INTERVAL:20,EL:0,TYPE:1,FN:2,WFN:3,UNLOAD_OBJ:3,ADJ_SCOPE:4,OBJ:5,OVERRIDE:6,CAPTURE:7,lastError:null,isSafari:YAHOO.env.ua.webkit,webkit:YAHOO.env.ua.webkit,isIE:YAHOO.env.ua.ie,_interval:null,_dri:null,DOMReady:false,throwErrors:false,startInterval:function(){
if(!this._interval){
var M=this;
var N=function(){
M._tryPreloadAttach();
};
this._interval=setInterval(N,this.POLL_INTERVAL);
}
},onAvailable:function(R,O,S,Q,P){
var M=(YAHOO.lang.isString(R))?[R]:R;
for(var N=0;N<M.length;N=N+1){
F.push({id:M[N],fn:O,obj:S,override:Q,checkReady:P});
}
C=this.POLL_RETRYS;
this.startInterval();
},onContentReady:function(O,M,P,N){
this.onAvailable(O,M,P,N,true);
},onDOMReady:function(M,O,N){
if(this.DOMReady){
setTimeout(function(){
var P=window;
if(N){
if(N===true){
P=O;
}else{
P=N;
}
}
M.call(P,"DOMReady",[],O);
},0);
}else{
this.DOMReadyEvent.subscribe(M,O,N);
}
},_addListener:function(O,M,X,S,N,a){
if(!X||!X.call){
return false;
}
if(this._isValidCollection(O)){
var Y=true;
for(var T=0,V=O.length;T<V;++T){
Y=this._addListener(O[T],M,X,S,N,a)&&Y;
}
return Y;
}else{
if(YAHOO.lang.isString(O)){
var R=this.getEl(O);
if(R){
O=R;
}else{
this.onAvailable(O,function(){
YAHOO.util.Event._addListener(O,M,X,S,N,a);
});
return true;
}
}
}
if(!O){
return false;
}
if("unload"==M&&S!==this){
J[J.length]=[O,M,X,S,N,a];
return true;
}
var b=O;
if(N){
if(N===true){
b=S;
}else{
b=N;
}
}
var P=function(c){
return X.call(b,YAHOO.util.Event.getEvent(c,O),S);
};
var Z=[O,M,X,P,b,S,N,a];
var U=I.length;
I[U]=Z;
if(this.useLegacyEvent(O,M)){
var Q=this.getLegacyIndex(O,M);
if(Q==-1||O!=G[Q][0]){
Q=G.length;
B[O.id+M]=Q;
G[Q]=[O,M,O["on"+M]];
E[Q]=[];
O["on"+M]=function(c){
YAHOO.util.Event.fireLegacyEvent(YAHOO.util.Event.getEvent(c),Q);
};
}
E[Q].push(Z);
}else{
try{
this._simpleAdd(O,M,P,a);
}
catch(W){
this.lastError=W;
this._removeListener(O,M,X,a);
return false;
}
}
return true;
},addListener:function(O,Q,N,P,M){
return this._addListener(O,Q,N,P,M,false);
},addFocusListener:function(O,N,P,M){
return this._addListener(O,K,N,P,M,true);
},removeFocusListener:function(N,M){
return this._removeListener(N,K,M,true);
},addBlurListener:function(O,N,P,M){
return this._addListener(O,L,N,P,M,true);
},removeBlurListener:function(N,M){
return this._removeListener(N,L,M,true);
},fireLegacyEvent:function(Q,O){
var S=true,M,U,T,V,R;
U=E[O].slice();
for(var N=0,P=U.length;N<P;++N){
T=U[N];
if(T&&T[this.WFN]){
V=T[this.ADJ_SCOPE];
R=T[this.WFN].call(V,Q);
S=(S&&R);
}
}
M=G[O];
if(M&&M[2]){
M[2](Q);
}
return S;
},getLegacyIndex:function(N,O){
var M=this.generateId(N)+O;
if(typeof B[M]=="undefined"){
return -1;
}else{
return B[M];
}
},useLegacyEvent:function(M,N){
return (this.webkit&&this.webkit<419&&("click"==N||"dblclick"==N));
},_removeListener:function(N,M,V,Y){
var Q,T,X;
if(typeof N=="string"){
N=this.getEl(N);
}else{
if(this._isValidCollection(N)){
var W=true;
for(Q=N.length-1;Q>-1;Q--){
W=(this._removeListener(N[Q],M,V,Y)&&W);
}
return W;
}
}
if(!V||!V.call){
return this.purgeElement(N,false,M);
}
if("unload"==M){
for(Q=J.length-1;Q>-1;Q--){
X=J[Q];
if(X&&X[0]==N&&X[1]==M&&X[2]==V){
J.splice(Q,1);
return true;
}
}
return false;
}
var R=null;
var S=arguments[4];
if("undefined"===typeof S){
S=this._getCacheIndex(N,M,V);
}
if(S>=0){
R=I[S];
}
if(!N||!R){
return false;
}
if(this.useLegacyEvent(N,M)){
var P=this.getLegacyIndex(N,M);
var O=E[P];
if(O){
for(Q=0,T=O.length;Q<T;++Q){
X=O[Q];
if(X&&X[this.EL]==N&&X[this.TYPE]==M&&X[this.FN]==V){
O.splice(Q,1);
break;
}
}
}
}else{
try{
this._simpleRemove(N,M,R[this.WFN],Y);
}
catch(U){
this.lastError=U;
return false;
}
}
delete I[S][this.WFN];
delete I[S][this.FN];
I.splice(S,1);
return true;
},removeListener:function(N,O,M){
return this._removeListener(N,O,M,false);
},getTarget:function(O,N){
var M=O.target||O.srcElement;
return this.resolveTextNode(M);
},resolveTextNode:function(N){
try{
if(N&&3==N.nodeType){
return N.parentNode;
}
}
catch(M){
}
return N;
},getPageX:function(N){
var M=N.pageX;
if(!M&&0!==M){
M=N.clientX||0;
if(this.isIE){
M+=this._getScrollLeft();
}
}
return M;
},getPageY:function(M){
var N=M.pageY;
if(!N&&0!==N){
N=M.clientY||0;
if(this.isIE){
N+=this._getScrollTop();
}
}
return N;
},getXY:function(M){
return [this.getPageX(M),this.getPageY(M)];
},getRelatedTarget:function(N){
var M=N.relatedTarget;
if(!M){
if(N.type=="mouseout"){
M=N.toElement;
}else{
if(N.type=="mouseover"){
M=N.fromElement;
}
}
}
return this.resolveTextNode(M);
},getTime:function(O){
if(!O.time){
var N=new Date().getTime();
try{
O.time=N;
}
catch(M){
this.lastError=M;
return N;
}
}
return O.time;
},stopEvent:function(M){
this.stopPropagation(M);
this.preventDefault(M);
},stopPropagation:function(M){
if(M.stopPropagation){
M.stopPropagation();
}else{
M.cancelBubble=true;
}
},preventDefault:function(M){
if(M.preventDefault){
M.preventDefault();
}else{
M.returnValue=false;
}
},getEvent:function(O,M){
var N=O||window.event;
if(!N){
var P=this.getEvent.caller;
while(P){
N=P.arguments[0];
if(N&&Event==N.constructor){
break;
}
P=P.caller;
}
}
return N;
},getCharCode:function(N){
var M=N.keyCode||N.charCode||0;
if(YAHOO.env.ua.webkit&&(M in D)){
M=D[M];
}
return M;
},_getCacheIndex:function(Q,R,P){
for(var O=0,N=I.length;O<N;O=O+1){
var M=I[O];
if(M&&M[this.FN]==P&&M[this.EL]==Q&&M[this.TYPE]==R){
return O;
}
}
return -1;
},generateId:function(M){
var N=M.id;
if(!N){
N="yuievtautoid-"+A;
++A;
M.id=N;
}
return N;
},_isValidCollection:function(N){
try{
return (N&&typeof N!=="string"&&N.length&&!N.tagName&&!N.alert&&typeof N[0]!=="undefined");
}
catch(M){
return false;
}
},elCache:{},getEl:function(M){
return (typeof M==="string")?document.getElementById(M):M;
},clearCache:function(){
},DOMReadyEvent:new YAHOO.util.CustomEvent("DOMReady",this),_load:function(N){
if(!H){
H=true;
var M=YAHOO.util.Event;
M._ready();
M._tryPreloadAttach();
}
},_ready:function(N){
var M=YAHOO.util.Event;
if(!M.DOMReady){
M.DOMReady=true;
M.DOMReadyEvent.fire();
M._simpleRemove(document,"DOMContentLoaded",M._ready);
}
},_tryPreloadAttach:function(){
if(F.length===0){
C=0;
clearInterval(this._interval);
this._interval=null;
return;
}
if(this.locked){
return;
}
if(this.isIE){
if(!this.DOMReady){
this.startInterval();
return;
}
}
this.locked=true;
var S=!H;
if(!S){
S=(C>0&&F.length>0);
}
var R=[];
var T=function(V,W){
var U=V;
if(W.override){
if(W.override===true){
U=W.obj;
}else{
U=W.override;
}
}
W.fn.call(U,W.obj);
};
var N,M,Q,P,O=[];
for(N=0,M=F.length;N<M;N=N+1){
Q=F[N];
if(Q){
P=this.getEl(Q.id);
if(P){
if(Q.checkReady){
if(H||P.nextSibling||!S){
O.push(Q);
F[N]=null;
}
}else{
T(P,Q);
F[N]=null;
}
}else{
R.push(Q);
}
}
}
for(N=0,M=O.length;N<M;N=N+1){
Q=O[N];
T(this.getEl(Q.id),Q);
}
C--;
if(S){
for(N=F.length-1;N>-1;N--){
Q=F[N];
if(!Q||!Q.id){
F.splice(N,1);
}
}
this.startInterval();
}else{
clearInterval(this._interval);
this._interval=null;
}
this.locked=false;
},purgeElement:function(Q,R,T){
var O=(YAHOO.lang.isString(Q))?this.getEl(Q):Q;
var S=this.getListeners(O,T),P,M;
if(S){
for(P=S.length-1;P>-1;P--){
var N=S[P];
this._removeListener(O,N.type,N.fn,N.capture);
}
}
if(R&&O&&O.childNodes){
for(P=0,M=O.childNodes.length;P<M;++P){
this.purgeElement(O.childNodes[P],R,T);
}
}
},getListeners:function(O,M){
var R=[],N;
if(!M){
N=[I,J];
}else{
if(M==="unload"){
N=[J];
}else{
N=[I];
}
}
var T=(YAHOO.lang.isString(O))?this.getEl(O):O;
for(var Q=0;Q<N.length;Q=Q+1){
var V=N[Q];
if(V){
for(var S=0,U=V.length;S<U;++S){
var P=V[S];
if(P&&P[this.EL]===T&&(!M||M===P[this.TYPE])){
R.push({type:P[this.TYPE],fn:P[this.FN],obj:P[this.OBJ],adjust:P[this.OVERRIDE],scope:P[this.ADJ_SCOPE],capture:P[this.CAPTURE],index:S});
}
}
}
}
return (R.length)?R:null;
},_unload:function(S){
var M=YAHOO.util.Event,P,O,N,R,Q,T=J.slice();
for(P=0,R=J.length;P<R;++P){
N=T[P];
if(N){
var U=window;
if(N[M.ADJ_SCOPE]){
if(N[M.ADJ_SCOPE]===true){
U=N[M.UNLOAD_OBJ];
}else{
U=N[M.ADJ_SCOPE];
}
}
N[M.FN].call(U,M.getEvent(S,N[M.EL]),N[M.UNLOAD_OBJ]);
T[P]=null;
N=null;
U=null;
}
}
J=null;
if(I){
for(O=I.length-1;O>-1;O--){
N=I[O];
if(N){
M._removeListener(N[M.EL],N[M.TYPE],N[M.FN],N[M.CAPTURE],O);
}
}
N=null;
}
G=null;
M._simpleRemove(window,"unload",M._unload);
},_getScrollLeft:function(){
return this._getScroll()[1];
},_getScrollTop:function(){
return this._getScroll()[0];
},_getScroll:function(){
var M=document.documentElement,N=document.body;
if(M&&(M.scrollTop||M.scrollLeft)){
return [M.scrollTop,M.scrollLeft];
}else{
if(N){
return [N.scrollTop,N.scrollLeft];
}else{
return [0,0];
}
}
},regCE:function(){
},_simpleAdd:function(){
if(window.addEventListener){
return function(O,P,N,M){
O.addEventListener(P,N,(M));
};
}else{
if(window.attachEvent){
return function(O,P,N,M){
O.attachEvent("on"+P,N);
};
}else{
return function(){
};
}
}
}(),_simpleRemove:function(){
if(window.removeEventListener){
return function(O,P,N,M){
O.removeEventListener(P,N,(M));
};
}else{
if(window.detachEvent){
return function(N,O,M){
N.detachEvent("on"+O,M);
};
}else{
return function(){
};
}
}
}()};
}();
(function(){
var EU=YAHOO.util.Event;
EU.on=EU.addListener;
EU.onFocus=EU.addFocusListener;
EU.onBlur=EU.addBlurListener;
if(EU.isIE){
YAHOO.util.Event.onDOMReady(YAHOO.util.Event._tryPreloadAttach,YAHOO.util.Event,true);
var n=document.createElement("p");
EU._dri=setInterval(function(){
try{
n.doScroll("left");
clearInterval(EU._dri);
EU._dri=null;
EU._ready();
n=null;
}
catch(ex){
}
},EU.POLL_INTERVAL);
}else{
if(EU.webkit&&EU.webkit<525){
EU._dri=setInterval(function(){
var rs=document.readyState;
if("loaded"==rs||"complete"==rs){
clearInterval(EU._dri);
EU._dri=null;
EU._ready();
}
},EU.POLL_INTERVAL);
}else{
EU._simpleAdd(document,"DOMContentLoaded",EU._ready);
}
}
EU._simpleAdd(window,"load",EU._load);
EU._simpleAdd(window,"unload",EU._unload);
EU._tryPreloadAttach();
})();
}
YAHOO.util.EventProvider=function(){
};
YAHOO.util.EventProvider.prototype={__yui_events:null,__yui_subscribers:null,subscribe:function(A,C,F,E){
this.__yui_events=this.__yui_events||{};
var D=this.__yui_events[A];
if(D){
D.subscribe(C,F,E);
}else{
this.__yui_subscribers=this.__yui_subscribers||{};
var B=this.__yui_subscribers;
if(!B[A]){
B[A]=[];
}
B[A].push({fn:C,obj:F,override:E});
}
},unsubscribe:function(C,E,G){
this.__yui_events=this.__yui_events||{};
var A=this.__yui_events;
if(C){
var F=A[C];
if(F){
return F.unsubscribe(E,G);
}
}else{
var B=true;
for(var D in A){
if(YAHOO.lang.hasOwnProperty(A,D)){
B=B&&A[D].unsubscribe(E,G);
}
}
return B;
}
return false;
},unsubscribeAll:function(A){
return this.unsubscribe(A);
},createEvent:function(G,D){
this.__yui_events=this.__yui_events||{};
var A=D||{};
var I=this.__yui_events;
if(I[G]){
}else{
var H=A.scope||this;
var E=(A.silent);
var B=new YAHOO.util.CustomEvent(G,H,E,YAHOO.util.CustomEvent.FLAT);
I[G]=B;
if(A.onSubscribeCallback){
B.subscribeEvent.subscribe(A.onSubscribeCallback);
}
this.__yui_subscribers=this.__yui_subscribers||{};
var F=this.__yui_subscribers[G];
if(F){
for(var C=0;C<F.length;++C){
B.subscribe(F[C].fn,F[C].obj,F[C].override);
}
}
}
return I[G];
},fireEvent:function(E,D,A,C){
this.__yui_events=this.__yui_events||{};
var G=this.__yui_events[E];
if(!G){
return null;
}
var B=[];
for(var F=1;F<arguments.length;++F){
B.push(arguments[F]);
}
return G.fire.apply(G,B);
},hasEvent:function(A){
if(this.__yui_events){
if(this.__yui_events[A]){
return true;
}
}
return false;
}};
YAHOO.util.KeyListener=function(A,F,B,C){
if(!A){
}else{
if(!F){
}else{
if(!B){
}
}
}
if(!C){
C=YAHOO.util.KeyListener.KEYDOWN;
}
var D=new YAHOO.util.CustomEvent("keyPressed");
this.enabledEvent=new YAHOO.util.CustomEvent("enabled");
this.disabledEvent=new YAHOO.util.CustomEvent("disabled");
if(typeof A=="string"){
A=document.getElementById(A);
}
if(typeof B=="function"){
D.subscribe(B);
}else{
D.subscribe(B.fn,B.scope,B.correctScope);
}
function E(J,I){
if(!F.shift){
F.shift=false;
}
if(!F.alt){
F.alt=false;
}
if(!F.ctrl){
F.ctrl=false;
}
if(J.shiftKey==F.shift&&J.altKey==F.alt&&J.ctrlKey==F.ctrl){
var G;
if(F.keys instanceof Array){
for(var H=0;H<F.keys.length;H++){
G=F.keys[H];
if(G==J.charCode){
D.fire(J.charCode,J);
break;
}else{
if(G==J.keyCode){
D.fire(J.keyCode,J);
break;
}
}
}
}else{
G=F.keys;
if(G==J.charCode){
D.fire(J.charCode,J);
}else{
if(G==J.keyCode){
D.fire(J.keyCode,J);
}
}
}
}
};
this.enable=function(){
if(!this.enabled){
YAHOO.util.Event.addListener(A,C,E);
this.enabledEvent.fire(F);
}
this.enabled=true;
};
this.disable=function(){
if(this.enabled){
YAHOO.util.Event.removeListener(A,C,E);
this.disabledEvent.fire(F);
}
this.enabled=false;
};
this.toString=function(){
return "KeyListener ["+F.keys+"] "+A.tagName+(A.id?"["+A.id+"]":"");
};
};
YAHOO.util.KeyListener.KEYDOWN="keydown";
YAHOO.util.KeyListener.KEYUP="keyup";
YAHOO.util.KeyListener.KEY={ALT:18,BACK_SPACE:8,CAPS_LOCK:20,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,META:224,NUM_LOCK:144,PAGE_DOWN:34,PAGE_UP:33,PAUSE:19,PRINTSCREEN:44,RIGHT:39,SCROLL_LOCK:145,SHIFT:16,SPACE:32,TAB:9,UP:38};
YAHOO.register("event",YAHOO.util.Event,{version:"2.6.0",build:"1321"});
YAHOO.register("yahoo-dom-event",YAHOO,{version:"2.6.0",build:"1321"});
if(typeof YAHOO=="undefined"||!YAHOO){
var YAHOO={};
}
YAHOO.namespace=function(){
var A=arguments,E=null,C,B,D;
for(C=0;C<A.length;C=C+1){
D=A[C].split(".");
E=YAHOO;
for(B=(D[0]=="YAHOO")?1:0;B<D.length;B=B+1){
E[D[B]]=E[D[B]]||{};
E=E[D[B]];
}
}
return E;
};
YAHOO.log=function(D,A,C){
var B=YAHOO.widget.Logger;
if(B&&B.log){
return B.log(D,A,C);
}else{
return false;
}
};
YAHOO.register=function(A,E,D){
var I=YAHOO.env.modules;
if(!I[A]){
I[A]={versions:[],builds:[]};
}
var B=I[A],H=D.version,G=D.build,F=YAHOO.env.listeners;
B.name=A;
B.version=H;
B.build=G;
B.versions.push(H);
B.builds.push(G);
B.mainClass=E;
for(var C=0;C<F.length;C=C+1){
F[C](B);
}
if(E){
E.VERSION=H;
E.BUILD=G;
}else{
YAHOO.log("mainClass is undefined for module "+A,"warn");
}
};
YAHOO.env=YAHOO.env||{modules:[],listeners:[]};
YAHOO.env.getVersion=function(A){
return YAHOO.env.modules[A]||null;
};
YAHOO.env.ua=function(){
var C={ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0};
var B=navigator.userAgent,A;
if((/KHTML/).test(B)){
C.webkit=1;
}
A=B.match(/AppleWebKit\/([^\s]*)/);
if(A&&A[1]){
C.webkit=parseFloat(A[1]);
if(/ Mobile\//.test(B)){
C.mobile="Apple";
}else{
A=B.match(/NokiaN[^\/]*/);
if(A){
C.mobile=A[0];
}
}
A=B.match(/AdobeAIR\/([^\s]*)/);
if(A){
C.air=A[0];
}
}
if(!C.webkit){
A=B.match(/Opera[\s\/]([^\s]*)/);
if(A&&A[1]){
C.opera=parseFloat(A[1]);
A=B.match(/Opera Mini[^;]*/);
if(A){
C.mobile=A[0];
}
}else{
A=B.match(/MSIE\s([^;]*)/);
if(A&&A[1]){
C.ie=parseFloat(A[1]);
}else{
A=B.match(/Gecko\/([^\s]*)/);
if(A){
C.gecko=1;
A=B.match(/rv:([^\s\)]*)/);
if(A&&A[1]){
C.gecko=parseFloat(A[1]);
}
}
}
}
}
return C;
}();
(function(){
YAHOO.namespace("util","widget","example");
if("undefined"!==typeof YAHOO_config){
var B=YAHOO_config.listener,A=YAHOO.env.listeners,D=true,C;
if(B){
for(C=0;C<A.length;C=C+1){
if(A[C]==B){
D=false;
break;
}
}
if(D){
A.push(B);
}
}
}
})();
YAHOO.lang=YAHOO.lang||{};
(function(){
var A=YAHOO.lang,C=["toString","valueOf"],B={isArray:function(D){
if(D){
return A.isNumber(D.length)&&A.isFunction(D.splice);
}
return false;
},isBoolean:function(D){
return typeof D==="boolean";
},isFunction:function(D){
return typeof D==="function";
},isNull:function(D){
return D===null;
},isNumber:function(D){
return typeof D==="number"&&isFinite(D);
},isObject:function(D){
return (D&&(typeof D==="object"||A.isFunction(D)))||false;
},isString:function(D){
return typeof D==="string";
},isUndefined:function(D){
return typeof D==="undefined";
},_IEEnumFix:(YAHOO.env.ua.ie)?function(F,E){
for(var D=0;D<C.length;D=D+1){
var H=C[D],G=E[H];
if(A.isFunction(G)&&G!=Object.prototype[H]){
F[H]=G;
}
}
}:function(){
},extend:function(H,I,G){
if(!I||!H){
throw new Error("extend failed, please check that "+"all dependencies are included.");
}
var E=function(){
};
E.prototype=I.prototype;
H.prototype=new E();
H.prototype.constructor=H;
H.superclass=I.prototype;
if(I.prototype.constructor==Object.prototype.constructor){
I.prototype.constructor=I;
}
if(G){
for(var D in G){
if(A.hasOwnProperty(G,D)){
H.prototype[D]=G[D];
}
}
A._IEEnumFix(H.prototype,G);
}
},augmentObject:function(H,G){
if(!G||!H){
throw new Error("Absorb failed, verify dependencies.");
}
var D=arguments,F,I,E=D[2];
if(E&&E!==true){
for(F=2;F<D.length;F=F+1){
H[D[F]]=G[D[F]];
}
}else{
for(I in G){
if(E||!(I in H)){
H[I]=G[I];
}
}
A._IEEnumFix(H,G);
}
},augmentProto:function(G,F){
if(!F||!G){
throw new Error("Augment failed, verify dependencies.");
}
var D=[G.prototype,F.prototype];
for(var E=2;E<arguments.length;E=E+1){
D.push(arguments[E]);
}
A.augmentObject.apply(this,D);
},dump:function(D,I){
var F,H,K=[],L="{...}",E="f(){...}",J=", ",G=" => ";
if(!A.isObject(D)){
return D+"";
}else{
if(D instanceof Date||("nodeType" in D&&"tagName" in D)){
return D;
}else{
if(A.isFunction(D)){
return E;
}
}
}
I=(A.isNumber(I))?I:3;
if(A.isArray(D)){
K.push("[");
for(F=0,H=D.length;F<H;F=F+1){
if(A.isObject(D[F])){
K.push((I>0)?A.dump(D[F],I-1):L);
}else{
K.push(D[F]);
}
K.push(J);
}
if(K.length>1){
K.pop();
}
K.push("]");
}else{
K.push("{");
for(F in D){
if(A.hasOwnProperty(D,F)){
K.push(F+G);
if(A.isObject(D[F])){
K.push((I>0)?A.dump(D[F],I-1):L);
}else{
K.push(D[F]);
}
K.push(J);
}
}
if(K.length>1){
K.pop();
}
K.push("}");
}
return K.join("");
},substitute:function(S,E,L){
var I,H,G,O,P,R,N=[],F,J="dump",M=" ",D="{",Q="}";
for(;;){
I=S.lastIndexOf(D);
if(I<0){
break;
}
H=S.indexOf(Q,I);
if(I+1>=H){
break;
}
F=S.substring(I+1,H);
O=F;
R=null;
G=O.indexOf(M);
if(G>-1){
R=O.substring(G+1);
O=O.substring(0,G);
}
P=E[O];
if(L){
P=L(O,P,R);
}
if(A.isObject(P)){
if(A.isArray(P)){
P=A.dump(P,parseInt(R,10));
}else{
R=R||"";
var K=R.indexOf(J);
if(K>-1){
R=R.substring(4);
}
if(P.toString===Object.prototype.toString||K>-1){
P=A.dump(P,parseInt(R,10));
}else{
P=P.toString();
}
}
}else{
if(!A.isString(P)&&!A.isNumber(P)){
P="~-"+N.length+"-~";
N[N.length]=F;
}
}
S=S.substring(0,I)+P+S.substring(H+1);
}
for(I=N.length-1;I>=0;I=I-1){
S=S.replace(new RegExp("~-"+I+"-~"),"{"+N[I]+"}","g");
}
return S;
},trim:function(D){
try{
return D.replace(/^\s+|\s+$/g,"");
}
catch(E){
return D;
}
},merge:function(){
var G={},E=arguments;
for(var F=0,D=E.length;F<D;F=F+1){
A.augmentObject(G,E[F],true);
}
return G;
},later:function(K,E,L,G,H){
K=K||0;
E=E||{};
var F=L,J=G,I,D;
if(A.isString(L)){
F=E[L];
}
if(!F){
throw new TypeError("method undefined");
}
if(!A.isArray(J)){
J=[G];
}
I=function(){
F.apply(E,J);
};
D=(H)?setInterval(I,K):setTimeout(I,K);
return {interval:H,cancel:function(){
if(this.interval){
clearInterval(D);
}else{
clearTimeout(D);
}
}};
},isValue:function(D){
return (A.isObject(D)||A.isString(D)||A.isNumber(D)||A.isBoolean(D));
}};
A.hasOwnProperty=(Object.prototype.hasOwnProperty)?function(D,E){
return D&&D.hasOwnProperty(E);
}:function(D,E){
return !A.isUndefined(D[E])&&D.constructor.prototype[E]!==D[E];
};
B.augmentObject(A,B,true);
YAHOO.util.Lang=A;
A.augment=A.augmentProto;
YAHOO.augment=A.augmentProto;
YAHOO.extend=A.extend;
})();
YAHOO.register("yahoo",YAHOO,{version:"2.6.0",build:"1321"});
YAHOO.util.Get=function(){
var M={},L=0,R=0,E=false,N=YAHOO.env.ua,S=YAHOO.lang;
var J=function(W,T,X){
var U=X||window,Y=U.document,Z=Y.createElement(W);
for(var V in T){
if(T[V]&&YAHOO.lang.hasOwnProperty(T,V)){
Z.setAttribute(V,T[V]);
}
}
return Z;
};
var I=function(T,U,W){
var V=W||"utf-8";
return J("link",{"id":"yui__dyn_"+(R++),"type":"text/css","charset":V,"rel":"stylesheet","href":T},U);
};
var P=function(T,U,W){
var V=W||"utf-8";
return J("script",{"id":"yui__dyn_"+(R++),"type":"text/javascript","charset":V,"src":T},U);
};
var A=function(T,U){
return {tId:T.tId,win:T.win,data:T.data,nodes:T.nodes,msg:U,purge:function(){
D(this.tId);
}};
};
var B=function(T,W){
var U=M[W],V=(S.isString(T))?U.win.document.getElementById(T):T;
if(!V){
Q(W,"target node not found: "+T);
}
return V;
};
var Q=function(W,V){
var T=M[W];
if(T.onFailure){
var U=T.scope||T.win;
T.onFailure.call(U,A(T,V));
}
};
var C=function(W){
var T=M[W];
T.finished=true;
if(T.aborted){
var V="transaction "+W+" was aborted";
Q(W,V);
return;
}
if(T.onSuccess){
var U=T.scope||T.win;
T.onSuccess.call(U,A(T));
}
};
var O=function(V){
var T=M[V];
if(T.onTimeout){
var U=T.context||T;
T.onTimeout.call(U,A(T));
}
};
var G=function(V,Z){
var U=M[V];
if(U.timer){
U.timer.cancel();
}
if(U.aborted){
var X="transaction "+V+" was aborted";
Q(V,X);
return;
}
if(Z){
U.url.shift();
if(U.varName){
U.varName.shift();
}
}else{
U.url=(S.isString(U.url))?[U.url]:U.url;
if(U.varName){
U.varName=(S.isString(U.varName))?[U.varName]:U.varName;
}
}
var c=U.win,b=c.document,a=b.getElementsByTagName("head")[0],W;
if(U.url.length===0){
if(U.type==="script"&&N.webkit&&N.webkit<420&&!U.finalpass&&!U.varName){
var Y=P(null,U.win,U.charset);
Y.innerHTML="YAHOO.util.Get._finalize(\""+V+"\");";
U.nodes.push(Y);
a.appendChild(Y);
}else{
C(V);
}
return;
}
var T=U.url[0];
if(!T){
U.url.shift();
return G(V);
}
if(U.timeout){
U.timer=S.later(U.timeout,U,O,V);
}
if(U.type==="script"){
W=P(T,c,U.charset);
}else{
W=I(T,c,U.charset);
}
F(U.type,W,V,T,c,U.url.length);
U.nodes.push(W);
if(U.insertBefore){
var e=B(U.insertBefore,V);
if(e){
e.parentNode.insertBefore(W,e);
}
}else{
a.appendChild(W);
}
if((N.webkit||N.gecko)&&U.type==="css"){
G(V,T);
}
};
var K=function(){
if(E){
return;
}
E=true;
for(var T in M){
var U=M[T];
if(U.autopurge&&U.finished){
D(U.tId);
delete M[T];
}
}
E=false;
};
var D=function(a){
var X=M[a];
if(X){
var Z=X.nodes,T=Z.length,Y=X.win.document,W=Y.getElementsByTagName("head")[0];
if(X.insertBefore){
var V=B(X.insertBefore,a);
if(V){
W=V.parentNode;
}
}
for(var U=0;U<T;U=U+1){
W.removeChild(Z[U]);
}
X.nodes=[];
}
};
var H=function(U,T,V){
var X="q"+(L++);
V=V||{};
if(L%YAHOO.util.Get.PURGE_THRESH===0){
K();
}
M[X]=S.merge(V,{tId:X,type:U,url:T,finished:false,aborted:false,nodes:[]});
var W=M[X];
W.win=W.win||window;
W.scope=W.scope||W.win;
W.autopurge=("autopurge" in W)?W.autopurge:(U==="script")?true:false;
S.later(0,W,G,X);
return {tId:X};
};
var F=function(c,X,W,U,Y,Z,b){
var a=b||G;
if(N.ie){
X.onreadystatechange=function(){
var d=this.readyState;
if("loaded"===d||"complete"===d){
X.onreadystatechange=null;
a(W,U);
}
};
}else{
if(N.webkit){
if(c==="script"){
if(N.webkit>=420){
X.addEventListener("load",function(){
a(W,U);
});
}else{
var T=M[W];
if(T.varName){
var V=YAHOO.util.Get.POLL_FREQ;
T.maxattempts=YAHOO.util.Get.TIMEOUT/V;
T.attempts=0;
T._cache=T.varName[0].split(".");
T.timer=S.later(V,T,function(j){
var f=this._cache,e=f.length,d=this.win,g;
for(g=0;g<e;g=g+1){
d=d[f[g]];
if(!d){
this.attempts++;
if(this.attempts++>this.maxattempts){
var h="Over retry limit, giving up";
T.timer.cancel();
Q(W,h);
}else{
}
return;
}
}
T.timer.cancel();
a(W,U);
},null,true);
}else{
S.later(YAHOO.util.Get.POLL_FREQ,null,a,[W,U]);
}
}
}
}else{
X.onload=function(){
a(W,U);
};
}
}
};
return {POLL_FREQ:10,PURGE_THRESH:20,TIMEOUT:2000,_finalize:function(T){
S.later(0,null,C,T);
},abort:function(U){
var V=(S.isString(U))?U:U.tId;
var T=M[V];
if(T){
T.aborted=true;
}
},script:function(T,U){
return H("script",T,U);
},css:function(T,U){
return H("css",T,U);
}};
}();
YAHOO.register("get",YAHOO.util.Get,{version:"2.6.0",build:"1321"});
(function(){
var Y=YAHOO,_1=Y.util,_2=Y.lang,_3=Y.env,_4="_provides",_5="_supersedes",_6="expanded",_7="_after";
var _8={dupsAllowed:{"yahoo":true,"get":true},info:{"root":"2.6.0/build/","base":"http://yui.yahooapis.com/2.6.0/build/","comboBase":"http://yui.yahooapis.com/combo?","skin":{"defaultSkin":"sam","base":"assets/skins/","path":"skin.css","after":["reset","fonts","grids","base"],"rollup":3},dupsAllowed:["yahoo","get"],"moduleInfo":{"animation":{"type":"js","path":"animation/animation-min.js","requires":["dom","event"]},"autocomplete":{"type":"js","path":"autocomplete/autocomplete-min.js","requires":["dom","event","datasource"],"optional":["connection","animation"],"skinnable":true},"base":{"type":"css","path":"base/base-min.css","after":["reset","fonts","grids"]},"button":{"type":"js","path":"button/button-min.js","requires":["element"],"optional":["menu"],"skinnable":true},"calendar":{"type":"js","path":"calendar/calendar-min.js","requires":["event","dom"],"skinnable":true},"carousel":{"type":"js","path":"carousel/carousel-beta-min.js","requires":["element"],"optional":["animation"],"skinnable":true},"charts":{"type":"js","path":"charts/charts-experimental-min.js","requires":["element","json","datasource"]},"colorpicker":{"type":"js","path":"colorpicker/colorpicker-min.js","requires":["slider","element"],"optional":["animation"],"skinnable":true},"connection":{"type":"js","path":"connection/connection-min.js","requires":["event"]},"container":{"type":"js","path":"container/container-min.js","requires":["dom","event"],"optional":["dragdrop","animation","connection"],"supersedes":["containercore"],"skinnable":true},"containercore":{"type":"js","path":"container/container_core-min.js","requires":["dom","event"],"pkg":"container"},"cookie":{"type":"js","path":"cookie/cookie-min.js","requires":["yahoo"]},"datasource":{"type":"js","path":"datasource/datasource-min.js","requires":["event"],"optional":["connection"]},"datatable":{"type":"js","path":"datatable/datatable-min.js","requires":["element","datasource"],"optional":["calendar","dragdrop","paginator"],"skinnable":true},"dom":{"type":"js","path":"dom/dom-min.js","requires":["yahoo"]},"dragdrop":{"type":"js","path":"dragdrop/dragdrop-min.js","requires":["dom","event"]},"editor":{"type":"js","path":"editor/editor-min.js","requires":["menu","element","button"],"optional":["animation","dragdrop"],"supersedes":["simpleeditor"],"skinnable":true},"element":{"type":"js","path":"element/element-beta-min.js","requires":["dom","event"]},"event":{"type":"js","path":"event/event-min.js","requires":["yahoo"]},"fonts":{"type":"css","path":"fonts/fonts-min.css"},"get":{"type":"js","path":"get/get-min.js","requires":["yahoo"]},"grids":{"type":"css","path":"grids/grids-min.css","requires":["fonts"],"optional":["reset"]},"history":{"type":"js","path":"history/history-min.js","requires":["event"]},"imagecropper":{"type":"js","path":"imagecropper/imagecropper-beta-min.js","requires":["dom","event","dragdrop","element","resize"],"skinnable":true},"imageloader":{"type":"js","path":"imageloader/imageloader-min.js","requires":["event","dom"]},"json":{"type":"js","path":"json/json-min.js","requires":["yahoo"]},"layout":{"type":"js","path":"layout/layout-min.js","requires":["dom","event","element"],"optional":["animation","dragdrop","resize","selector"],"skinnable":true},"logger":{"type":"js","path":"logger/logger-min.js","requires":["event","dom"],"optional":["dragdrop"],"skinnable":true},"menu":{"type":"js","path":"menu/menu-min.js","requires":["containercore"],"skinnable":true},"paginator":{"type":"js","path":"paginator/paginator-min.js","requires":["element"],"skinnable":true},"profiler":{"type":"js","path":"profiler/profiler-min.js","requires":["yahoo"]},"profilerviewer":{"type":"js","path":"profilerviewer/profilerviewer-beta-min.js","requires":["profiler","yuiloader","element"],"skinnable":true},"reset":{"type":"css","path":"reset/reset-min.css"},"reset-fonts-grids":{"type":"css","path":"reset-fonts-grids/reset-fonts-grids.css","supersedes":["reset","fonts","grids","reset-fonts"],"rollup":4},"reset-fonts":{"type":"css","path":"reset-fonts/reset-fonts.css","supersedes":["reset","fonts"],"rollup":2},"resize":{"type":"js","path":"resize/resize-min.js","requires":["dom","event","dragdrop","element"],"optional":["animation"],"skinnable":true},"selector":{"type":"js","path":"selector/selector-beta-min.js","requires":["yahoo","dom"]},"simpleeditor":{"type":"js","path":"editor/simpleeditor-min.js","requires":["element"],"optional":["containercore","menu","button","animation","dragdrop"],"skinnable":true,"pkg":"editor"},"slider":{"type":"js","path":"slider/slider-min.js","requires":["dragdrop"],"optional":["animation"],"skinnable":true},"tabview":{"type":"js","path":"tabview/tabview-min.js","requires":["element"],"optional":["connection"],"skinnable":true},"treeview":{"type":"js","path":"treeview/treeview-min.js","requires":["event","dom"],"skinnable":true},"uploader":{"type":"js","path":"uploader/uploader-experimental.js","requires":["element"]},"utilities":{"type":"js","path":"utilities/utilities.js","supersedes":["yahoo","event","dragdrop","animation","dom","connection","element","yahoo-dom-event","get","yuiloader","yuiloader-dom-event"],"rollup":8},"yahoo":{"type":"js","path":"yahoo/yahoo-min.js"},"yahoo-dom-event":{"type":"js","path":"yahoo-dom-event/yahoo-dom-event.js","supersedes":["yahoo","event","dom"],"rollup":3},"yuiloader":{"type":"js","path":"yuiloader/yuiloader-min.js","supersedes":["yahoo","get"]},"yuiloader-dom-event":{"type":"js","path":"yuiloader-dom-event/yuiloader-dom-event.js","supersedes":["yahoo","dom","event","get","yuiloader","yahoo-dom-event"],"rollup":5},"yuitest":{"type":"js","path":"yuitest/yuitest-min.js","requires":["logger"],"skinnable":true}}},ObjectUtil:{appendArray:function(o,a){
if(a){
for(var i=0;i<a.length;i=i+1){
o[a[i]]=true;
}
}
},keys:function(o,_9){
var a=[],i;
for(i in o){
if(_2.hasOwnProperty(o,i)){
a.push(i);
}
}
return a;
}},ArrayUtil:{appendArray:function(a1,a2){
Array.prototype.push.apply(a1,a2);
},indexOf:function(a,_a){
for(var i=0;i<a.length;i=i+1){
if(a[i]===_a){
return i;
}
}
return -1;
},toObject:function(a){
var o={};
for(var i=0;i<a.length;i=i+1){
o[a[i]]=true;
}
return o;
},uniq:function(a){
return _8.ObjectUtil.keys(_8.ArrayUtil.toObject(a));
}}};
YAHOO.util.YUILoader=function(o){
this._internalCallback=null;
this._useYahooListener=false;
this.onSuccess=null;
this.onFailure=Y.log;
this.onProgress=null;
this.onTimeout=null;
this.scope=this;
this.data=null;
this.insertBefore=null;
this.charset=null;
this.varName=null;
this.base=_8.info.base;
this.comboBase=_8.info.comboBase;
this.combine=false;
this.root=_8.info.root;
this.timeout=0;
this.ignore=null;
this.force=null;
this.allowRollup=true;
this.filter=null;
this.required={};
this.moduleInfo=_2.merge(_8.info.moduleInfo);
this.rollups=null;
this.loadOptional=false;
this.sorted=[];
this.loaded={};
this.dirty=true;
this.inserted={};
var _b=this;
_3.listeners.push(function(m){
if(_b._useYahooListener){
_b.loadNext(m.name);
}
});
this.skin=_2.merge(_8.info.skin);
this._config(o);
};
Y.util.YUILoader.prototype={FILTERS:{RAW:{"searchExp":"-min\\.js","replaceStr":".js"},DEBUG:{"searchExp":"-min\\.js","replaceStr":"-debug.js"}},SKIN_PREFIX:"skin-",_config:function(o){
if(o){
for(var i in o){
if(_2.hasOwnProperty(o,i)){
if(i=="require"){
this.require(o[i]);
}else{
this[i]=o[i];
}
}
}
}
var f=this.filter;
if(_2.isString(f)){
f=f.toUpperCase();
if(f==="DEBUG"){
this.require("logger");
}
if(!Y.widget.LogWriter){
Y.widget.LogWriter=function(){
return Y;
};
}
this.filter=this.FILTERS[f];
}
},addModule:function(o){
if(!o||!o.name||!o.type||(!o.path&&!o.fullpath)){
return false;
}
o.ext=("ext" in o)?o.ext:true;
o.requires=o.requires||[];
this.moduleInfo[o.name]=o;
this.dirty=true;
return true;
},require:function(_c){
var a=(typeof _c==="string")?arguments:_c;
this.dirty=true;
_8.ObjectUtil.appendArray(this.required,a);
},_addSkin:function(_d,_e){
var _f=this.formatSkin(_d),_10=this.moduleInfo,_11=this.skin,ext=_10[_e]&&_10[_e].ext;
if(!_10[_f]){
this.addModule({"name":_f,"type":"css","path":_11.base+_d+"/"+_11.path,"after":_11.after,"rollup":_11.rollup,"ext":ext});
}
if(_e){
_f=this.formatSkin(_d,_e);
if(!_10[_f]){
var _12=_10[_e],pkg=_12.pkg||_e;
this.addModule({"name":_f,"type":"css","after":_11.after,"path":pkg+"/"+_11.base+_d+"/"+_e+".css","ext":ext});
}
}
return _f;
},getRequires:function(mod){
if(!mod){
return [];
}
if(!this.dirty&&mod.expanded){
return mod.expanded;
}
mod.requires=mod.requires||[];
var i,d=[],r=mod.requires,o=mod.optional,_13=this.moduleInfo,m;
for(i=0;i<r.length;i=i+1){
d.push(r[i]);
m=_13[r[i]];
_8.ArrayUtil.appendArray(d,this.getRequires(m));
}
if(o&&this.loadOptional){
for(i=0;i<o.length;i=i+1){
d.push(o[i]);
_8.ArrayUtil.appendArray(d,this.getRequires(_13[o[i]]));
}
}
mod.expanded=_8.ArrayUtil.uniq(d);
return mod.expanded;
},getProvides:function(_14,_15){
var _16=!(_15),_17=(_16)?_4:_5,m=this.moduleInfo[_14],o={};
if(!m){
return o;
}
if(m[_17]){
return m[_17];
}
var s=m.supersedes,_18={},me=this;
var add=function(mm){
if(!_18[mm]){
_18[mm]=true;
_2.augmentObject(o,me.getProvides(mm));
}
};
if(s){
for(var i=0;i<s.length;i=i+1){
add(s[i]);
}
}
m[_5]=o;
m[_4]=_2.merge(o);
m[_4][_14]=true;
return m[_17];
},calculate:function(o){
if(o||this.dirty){
this._config(o);
this._setup();
this._explode();
if(this.allowRollup){
this._rollup();
}
this._reduce();
this._sort();
this.dirty=false;
}
},_setup:function(){
var _19=this.moduleInfo,_1a,i,j;
for(_1a in _19){
if(_2.hasOwnProperty(_19,_1a)){
var m=_19[_1a];
if(m&&m.skinnable){
var o=this.skin.overrides,_1b;
if(o&&o[_1a]){
for(i=0;i<o[_1a].length;i=i+1){
_1b=this._addSkin(o[_1a][i],_1a);
}
}else{
_1b=this._addSkin(this.skin.defaultSkin,_1a);
}
m.requires.push(_1b);
}
}
}
var l=_2.merge(this.inserted);
if(!this._sandbox){
l=_2.merge(l,_3.modules);
}
if(this.ignore){
_8.ObjectUtil.appendArray(l,this.ignore);
}
if(this.force){
for(i=0;i<this.force.length;i=i+1){
if(this.force[i] in l){
delete l[this.force[i]];
}
}
}
for(j in l){
if(_2.hasOwnProperty(l,j)){
_2.augmentObject(l,this.getProvides(j));
}
}
this.loaded=l;
},_explode:function(){
var r=this.required,i,mod;
for(i in r){
if(_2.hasOwnProperty(r,i)){
mod=this.moduleInfo[i];
if(mod){
var req=this.getRequires(mod);
if(req){
_8.ObjectUtil.appendArray(r,req);
}
}
}
}
},_skin:function(){
},formatSkin:function(_1c,mod){
var s=this.SKIN_PREFIX+_1c;
if(mod){
s=s+"-"+mod;
}
return s;
},parseSkin:function(mod){
if(mod.indexOf(this.SKIN_PREFIX)===0){
var a=mod.split("-");
return {skin:a[1],module:a[2]};
}
return null;
},_rollup:function(){
var i,j,m,s,_1d={},r=this.required,_1e,_1f=this.moduleInfo;
if(this.dirty||!this.rollups){
for(i in _1f){
if(_2.hasOwnProperty(_1f,i)){
m=_1f[i];
if(m&&m.rollup){
_1d[i]=m;
}
}
}
this.rollups=_1d;
}
for(;;){
var _20=false;
for(i in _1d){
if(!r[i]&&!this.loaded[i]){
m=_1f[i];
s=m.supersedes;
_1e=false;
if(!m.rollup){
continue;
}
var _21=(m.ext)?false:this.parseSkin(i),c=0;
if(_21){
for(j in r){
if(_2.hasOwnProperty(r,j)){
if(i!==j&&this.parseSkin(j)){
c++;
_1e=(c>=m.rollup);
if(_1e){
break;
}
}
}
}
}else{
for(j=0;j<s.length;j=j+1){
if(this.loaded[s[j]]&&(!_8.dupsAllowed[s[j]])){
_1e=false;
break;
}else{
if(r[s[j]]){
c++;
_1e=(c>=m.rollup);
if(_1e){
break;
}
}
}
}
}
if(_1e){
r[i]=true;
_20=true;
this.getRequires(m);
}
}
}
if(!_20){
break;
}
}
},_reduce:function(){
var i,j,s,m,r=this.required;
for(i in r){
if(i in this.loaded){
delete r[i];
}else{
var _22=this.parseSkin(i);
if(_22){
if(!_22.module){
var _23=this.SKIN_PREFIX+_22.skin;
for(j in r){
if(_2.hasOwnProperty(r,j)){
m=this.moduleInfo[j];
var ext=m&&m.ext;
if(!ext&&j!==i&&j.indexOf(_23)>-1){
delete r[j];
}
}
}
}
}else{
m=this.moduleInfo[i];
s=m&&m.supersedes;
if(s){
for(j=0;j<s.length;j=j+1){
if(s[j] in r){
delete r[s[j]];
}
}
}
}
}
}
},_onFailure:function(msg){
YAHOO.log("Failure","info","loader");
var f=this.onFailure;
if(f){
f.call(this.scope,{msg:"failure: "+msg,data:this.data,success:false});
}
},_onTimeout:function(){
YAHOO.log("Timeout","info","loader");
var f=this.onTimeout;
if(f){
f.call(this.scope,{msg:"timeout",data:this.data,success:false});
}
},_sort:function(){
var s=[],_24=this.moduleInfo,_25=this.loaded,_26=!this.loadOptional,me=this;
var _27=function(aa,bb){
var mm=_24[aa];
if(_25[bb]||!mm){
return false;
}
var ii,rr=mm.expanded,_28=mm.after,_29=_24[bb],_2a=mm.optional;
if(rr&&_8.ArrayUtil.indexOf(rr,bb)>-1){
return true;
}
if(_28&&_8.ArrayUtil.indexOf(_28,bb)>-1){
return true;
}
if(_26&&_2a&&_8.ArrayUtil.indexOf(_2a,bb)>-1){
return true;
}
var ss=_24[bb]&&_24[bb].supersedes;
if(ss){
for(ii=0;ii<ss.length;ii=ii+1){
if(_27(aa,ss[ii])){
return true;
}
}
}
if(mm.ext&&mm.type=="css"&&!_29.ext&&_29.type=="css"){
return true;
}
return false;
};
for(var i in this.required){
if(_2.hasOwnProperty(this.required,i)){
s.push(i);
}
}
var p=0;
for(;;){
var l=s.length,a,b,j,k,_2b=false;
for(j=p;j<l;j=j+1){
a=s[j];
for(k=j+1;k<l;k=k+1){
if(_27(a,s[k])){
b=s.splice(k,1);
s.splice(j,0,b[0]);
_2b=true;
break;
}
}
if(_2b){
break;
}else{
p=p+1;
}
}
if(!_2b){
break;
}
}
this.sorted=s;
},toString:function(){
var o={type:"YUILoader",base:this.base,filter:this.filter,required:this.required,loaded:this.loaded,inserted:this.inserted};
_2.dump(o,1);
},_combine:function(){
this._combining=[];
var _2c=this,s=this.sorted,len=s.length,js=this.comboBase,css=this.comboBase,_2d,_2e=js.length,i,m,_2f=this.loadType;
YAHOO.log("type "+_2f);
for(i=0;i<len;i=i+1){
m=this.moduleInfo[s[i]];
if(m&&!m.ext&&(!_2f||_2f===m.type)){
_2d=this.root+m.path;
_2d+="&";
if(m.type=="js"){
js+=_2d;
}else{
css+=_2d;
}
this._combining.push(s[i]);
}
}
if(this._combining.length){
YAHOO.log("Attempting to combine: "+this._combining,"info","loader");
var _30=function(o){
var c=this._combining,len=c.length,i,m;
for(i=0;i<len;i=i+1){
this.inserted[c[i]]=true;
}
this.loadNext(o.data);
},_31=function(){
if(js.length>_2e){
YAHOO.util.Get.script(_2c._filter(js),{data:_2c._loading,onSuccess:_30,onFailure:_2c._onFailure,onTimeout:_2c._onTimeout,insertBefore:_2c.insertBefore,charset:_2c.charset,timeout:_2c.timeout,scope:_2c});
}
};
if(css.length>_2e){
YAHOO.util.Get.css(this._filter(css),{data:this._loading,onSuccess:_31,onFailure:this._onFailure,onTimeout:this._onTimeout,insertBefore:this.insertBefore,charset:this.charset,timeout:this.timeout,scope:_2c});
}else{
_31();
}
return;
}else{
this.loadNext(this._loading);
}
},insert:function(o,_32){
this.calculate(o);
this._loading=true;
this.loadType=_32;
if(this.combine){
return this._combine();
}
if(!_32){
var _33=this;
this._internalCallback=function(){
_33._internalCallback=null;
_33.insert(null,"js");
};
this.insert(null,"css");
return;
}
this.loadNext();
},sandbox:function(o,_34){
this._config(o);
if(!this.onSuccess){
throw new Error("You must supply an onSuccess handler for your sandbox");
}
this._sandbox=true;
var _35=this;
if(!_34||_34!=="js"){
this._internalCallback=function(){
_35._internalCallback=null;
_35.sandbox(null,"js");
};
this.insert(null,"css");
return;
}
if(!_1.Connect){
var ld=new YAHOO.util.YUILoader();
ld.insert({base:this.base,filter:this.filter,require:"connection",insertBefore:this.insertBefore,charset:this.charset,onSuccess:function(){
this.sandbox(null,"js");
},scope:this},"js");
return;
}
this._scriptText=[];
this._loadCount=0;
this._stopCount=this.sorted.length;
this._xhr=[];
this.calculate();
var s=this.sorted,l=s.length,i,m,url;
for(i=0;i<l;i=i+1){
m=this.moduleInfo[s[i]];
if(!m){
this._onFailure("undefined module "+m);
for(var j=0;j<this._xhr.length;j=j+1){
this._xhr[j].abort();
}
return;
}
if(m.type!=="js"){
this._loadCount++;
continue;
}
url=m.fullpath;
url=(url)?this._filter(url):this._url(m.path);
var _36={success:function(o){
var idx=o.argument[0],_37=o.argument[2];
this._scriptText[idx]=o.responseText;
if(this.onProgress){
this.onProgress.call(this.scope,{name:_37,scriptText:o.responseText,xhrResponse:o,data:this.data});
}
this._loadCount++;
if(this._loadCount>=this._stopCount){
var v=this.varName||"YAHOO";
var t="(function() {\n";
var b="\nreturn "+v+";\n})();";
var ref=eval(t+this._scriptText.join("\n")+b);
this._pushEvents(ref);
if(ref){
this.onSuccess.call(this.scope,{reference:ref,data:this.data});
}else{
this._onFailure.call(this.varName+" reference failure");
}
}
},failure:function(o){
this.onFailure.call(this.scope,{msg:"XHR failure",xhrResponse:o,data:this.data});
},scope:this,argument:[i,url,s[i]]};
this._xhr.push(_1.Connect.asyncRequest("GET",url,_36));
}
},loadNext:function(_38){
if(!this._loading){
return;
}
if(_38){
if(_38!==this._loading){
return;
}
this.inserted[_38]=true;
if(this.onProgress){
this.onProgress.call(this.scope,{name:_38,data:this.data});
}
}
var s=this.sorted,len=s.length,i,m;
for(i=0;i<len;i=i+1){
if(s[i] in this.inserted){
continue;
}
if(s[i]===this._loading){
return;
}
m=this.moduleInfo[s[i]];
if(!m){
this.onFailure.call(this.scope,{msg:"undefined module "+m,data:this.data});
return;
}
if(!this.loadType||this.loadType===m.type){
this._loading=s[i];
var fn=(m.type==="css")?_1.Get.css:_1.Get.script,url=m.fullpath,_39=this,c=function(o){
_39.loadNext(o.data);
};
url=(url)?this._filter(url):this._url(m.path);
if(_3.ua.webkit&&_3.ua.webkit<420&&m.type==="js"&&!m.varName){
c=null;
this._useYahooListener=true;
}
fn(url,{data:s[i],onSuccess:c,onFailure:this._onFailure,onTimeout:this._onTimeout,insertBefore:this.insertBefore,charset:this.charset,timeout:this.timeout,varName:m.varName,scope:_39});
return;
}
}
this._loading=null;
if(this._internalCallback){
var f=this._internalCallback;
this._internalCallback=null;
f.call(this);
}else{
if(this.onSuccess){
this._pushEvents();
this.onSuccess.call(this.scope,{data:this.data});
}
}
},_pushEvents:function(ref){
var r=ref||YAHOO;
if(r.util&&r.util.Event){
r.util.Event._load();
}
},_filter:function(str){
var f=this.filter;
return (f)?str.replace(new RegExp(f.searchExp),f.replaceStr):str;
},_url:function(_3a){
var u=this.base||"",f=this.filter;
u=u+_3a;
return this._filter(u);
}};
})();
(function(){
YAHOO.util.Config=function(D){
if(D){
this.init(D);
}
};
var B=YAHOO.lang,C=YAHOO.util.CustomEvent,A=YAHOO.util.Config;
A.CONFIG_CHANGED_EVENT="configChanged";
A.BOOLEAN_TYPE="boolean";
A.prototype={owner:null,queueInProgress:false,config:null,initialConfig:null,eventQueue:null,configChangedEvent:null,init:function(D){
this.owner=D;
this.configChangedEvent=this.createEvent(A.CONFIG_CHANGED_EVENT);
this.configChangedEvent.signature=C.LIST;
this.queueInProgress=false;
this.config={};
this.initialConfig={};
this.eventQueue=[];
},checkBoolean:function(D){
return (typeof D==A.BOOLEAN_TYPE);
},checkNumber:function(D){
return (!isNaN(D));
},fireEvent:function(D,F){
var E=this.config[D];
if(E&&E.event){
E.event.fire(F);
}
},addProperty:function(E,D){
E=E.toLowerCase();
this.config[E]=D;
D.event=this.createEvent(E,{scope:this.owner});
D.event.signature=C.LIST;
D.key=E;
if(D.handler){
D.event.subscribe(D.handler,this.owner);
}
this.setProperty(E,D.value,true);
if(!D.suppressEvent){
this.queueProperty(E,D.value);
}
},getConfig:function(){
var D={},F=this.config,G,E;
for(G in F){
if(B.hasOwnProperty(F,G)){
E=F[G];
if(E&&E.event){
D[G]=E.value;
}
}
}
return D;
},getProperty:function(D){
var E=this.config[D.toLowerCase()];
if(E&&E.event){
return E.value;
}else{
return undefined;
}
},resetProperty:function(D){
D=D.toLowerCase();
var E=this.config[D];
if(E&&E.event){
if(this.initialConfig[D]&&!B.isUndefined(this.initialConfig[D])){
this.setProperty(D,this.initialConfig[D]);
return true;
}
}else{
return false;
}
},setProperty:function(E,G,D){
var F;
E=E.toLowerCase();
if(this.queueInProgress&&!D){
this.queueProperty(E,G);
return true;
}else{
F=this.config[E];
if(F&&F.event){
if(F.validator&&!F.validator(G)){
return false;
}else{
F.value=G;
if(!D){
this.fireEvent(E,G);
this.configChangedEvent.fire([E,G]);
}
return true;
}
}else{
return false;
}
}
},queueProperty:function(S,P){
S=S.toLowerCase();
var R=this.config[S],K=false,J,G,H,I,O,Q,F,M,N,D,L,T,E;
if(R&&R.event){
if(!B.isUndefined(P)&&R.validator&&!R.validator(P)){
return false;
}else{
if(!B.isUndefined(P)){
R.value=P;
}else{
P=R.value;
}
K=false;
J=this.eventQueue.length;
for(L=0;L<J;L++){
G=this.eventQueue[L];
if(G){
H=G[0];
I=G[1];
if(H==S){
this.eventQueue[L]=null;
this.eventQueue.push([S,(!B.isUndefined(P)?P:I)]);
K=true;
break;
}
}
}
if(!K&&!B.isUndefined(P)){
this.eventQueue.push([S,P]);
}
}
if(R.supercedes){
O=R.supercedes.length;
for(T=0;T<O;T++){
Q=R.supercedes[T];
F=this.eventQueue.length;
for(E=0;E<F;E++){
M=this.eventQueue[E];
if(M){
N=M[0];
D=M[1];
if(N==Q.toLowerCase()){
this.eventQueue.push([N,D]);
this.eventQueue[E]=null;
break;
}
}
}
}
}
return true;
}else{
return false;
}
},refireEvent:function(D){
D=D.toLowerCase();
var E=this.config[D];
if(E&&E.event&&!B.isUndefined(E.value)){
if(this.queueInProgress){
this.queueProperty(D);
}else{
this.fireEvent(D,E.value);
}
}
},applyConfig:function(D,G){
var F,E;
if(G){
E={};
for(F in D){
if(B.hasOwnProperty(D,F)){
E[F.toLowerCase()]=D[F];
}
}
this.initialConfig=E;
}
for(F in D){
if(B.hasOwnProperty(D,F)){
this.queueProperty(F,D[F]);
}
}
},refresh:function(){
var D;
for(D in this.config){
if(B.hasOwnProperty(this.config,D)){
this.refireEvent(D);
}
}
},fireQueue:function(){
var E,H,D,G,F;
this.queueInProgress=true;
for(E=0;E<this.eventQueue.length;E++){
H=this.eventQueue[E];
if(H){
D=H[0];
G=H[1];
F=this.config[D];
F.value=G;
this.fireEvent(D,G);
}
}
this.queueInProgress=false;
this.eventQueue=[];
},subscribeToConfigEvent:function(E,F,H,D){
var G=this.config[E.toLowerCase()];
if(G&&G.event){
if(!A.alreadySubscribed(G.event,F,H)){
G.event.subscribe(F,H,D);
}
return true;
}else{
return false;
}
},unsubscribeFromConfigEvent:function(D,E,G){
var F=this.config[D.toLowerCase()];
if(F&&F.event){
return F.event.unsubscribe(E,G);
}else{
return false;
}
},toString:function(){
var D="Config";
if(this.owner){
D+=" ["+this.owner.toString()+"]";
}
return D;
},outputEventQueue:function(){
var D="",G,E,F=this.eventQueue.length;
for(E=0;E<F;E++){
G=this.eventQueue[E];
if(G){
D+=G[0]+"="+G[1]+", ";
}
}
return D;
},destroy:function(){
var E=this.config,D,F;
for(D in E){
if(B.hasOwnProperty(E,D)){
F=E[D];
F.event.unsubscribeAll();
F.event=null;
}
}
this.configChangedEvent.unsubscribeAll();
this.configChangedEvent=null;
this.owner=null;
this.config=null;
this.initialConfig=null;
this.eventQueue=null;
}};
A.alreadySubscribed=function(E,H,I){
var F=E.subscribers.length,D,G;
if(F>0){
G=F-1;
do{
D=E.subscribers[G];
if(D&&D.obj==I&&D.fn==H){
return true;
}
}while(G--);
}
return false;
};
YAHOO.lang.augmentProto(A,YAHOO.util.EventProvider);
}());
YAHOO.widget.DateMath={DAY:"D",WEEK:"W",YEAR:"Y",MONTH:"M",ONE_DAY_MS:1000*60*60*24,WEEK_ONE_JAN_DATE:1,add:function(A,D,C){
var F=new Date(A.getTime());
switch(D){
case this.MONTH:
var E=A.getMonth()+C;
var B=0;
if(E<0){
while(E<0){
E+=12;
B-=1;
}
}else{
if(E>11){
while(E>11){
E-=12;
B+=1;
}
}
}
F.setMonth(E);
F.setFullYear(A.getFullYear()+B);
break;
case this.DAY:
this._addDays(F,C);
break;
case this.YEAR:
F.setFullYear(A.getFullYear()+C);
break;
case this.WEEK:
this._addDays(F,(C*7));
break;
}
return F;
},_addDays:function(D,C){
if(YAHOO.env.ua.webkit&&YAHOO.env.ua.webkit<420){
if(C<0){
for(var B=-128;C<B;C-=B){
D.setDate(D.getDate()+B);
}
}else{
for(var A=96;C>A;C-=A){
D.setDate(D.getDate()+A);
}
}
}
D.setDate(D.getDate()+C);
},subtract:function(A,C,B){
return this.add(A,C,(B*-1));
},before:function(C,B){
var A=B.getTime();
if(C.getTime()<A){
return true;
}else{
return false;
}
},after:function(C,B){
var A=B.getTime();
if(C.getTime()>A){
return true;
}else{
return false;
}
},between:function(B,A,C){
if(this.after(B,A)&&this.before(B,C)){
return true;
}else{
return false;
}
},getJan1:function(A){
return this.getDate(A,0,1);
},getDayOffset:function(B,D){
var C=this.getJan1(D);
var A=Math.ceil((B.getTime()-C.getTime())/this.ONE_DAY_MS);
return A;
},getWeekNumber:function(E,B,H){
B=B||0;
H=H||this.WEEK_ONE_JAN_DATE;
var I=this.clearTime(E),M,N;
if(I.getDay()===B){
M=I;
}else{
M=this.getFirstDayOfWeek(I,B);
}
var J=M.getFullYear(),C=M.getTime();
N=new Date(M.getTime()+6*this.ONE_DAY_MS);
var G;
if(J!==N.getFullYear()&&N.getDate()>=H){
G=1;
}else{
var F=this.clearTime(this.getDate(J,0,H)),A=this.getFirstDayOfWeek(F,B);
var K=Math.round((I.getTime()-A.getTime())/this.ONE_DAY_MS);
var L=K%7;
var D=(K-L)/7;
G=D+1;
}
return G;
},getFirstDayOfWeek:function(D,A){
A=A||0;
var B=D.getDay(),C=(B-A+7)%7;
return this.subtract(D,this.DAY,C);
},isYearOverlapWeek:function(A){
var C=false;
var B=this.add(A,this.DAY,6);
if(B.getFullYear()!=A.getFullYear()){
C=true;
}
return C;
},isMonthOverlapWeek:function(A){
var C=false;
var B=this.add(A,this.DAY,6);
if(B.getMonth()!=A.getMonth()){
C=true;
}
return C;
},findMonthStart:function(A){
var B=this.getDate(A.getFullYear(),A.getMonth(),1);
return B;
},findMonthEnd:function(B){
var D=this.findMonthStart(B);
var C=this.add(D,this.MONTH,1);
var A=this.subtract(C,this.DAY,1);
return A;
},clearTime:function(A){
A.setHours(12,0,0,0);
return A;
},getDate:function(D,A,C){
var B=null;
if(YAHOO.lang.isUndefined(C)){
C=1;
}
if(D>=100){
B=new Date(D,A,C);
}else{
B=new Date();
B.setFullYear(D);
B.setMonth(A);
B.setDate(C);
B.setHours(0,0,0,0);
}
return B;
}};
(function(){
var C=YAHOO.util.Dom,A=YAHOO.util.Event,E=YAHOO.lang,D=YAHOO.widget.DateMath;
function F(I,G,H){
this.init.apply(this,arguments);
};
F.IMG_ROOT=null;
F.DATE="D";
F.MONTH_DAY="MD";
F.WEEKDAY="WD";
F.RANGE="R";
F.MONTH="M";
F.DISPLAY_DAYS=42;
F.STOP_RENDER="S";
F.SHORT="short";
F.LONG="long";
F.MEDIUM="medium";
F.ONE_CHAR="1char";
F._DEFAULT_CONFIG={PAGEDATE:{key:"pagedate",value:null},SELECTED:{key:"selected",value:null},TITLE:{key:"title",value:""},CLOSE:{key:"close",value:false},IFRAME:{key:"iframe",value:(YAHOO.env.ua.ie&&YAHOO.env.ua.ie<=6)?true:false},MINDATE:{key:"mindate",value:null},MAXDATE:{key:"maxdate",value:null},MULTI_SELECT:{key:"multi_select",value:false},START_WEEKDAY:{key:"start_weekday",value:0},SHOW_WEEKDAYS:{key:"show_weekdays",value:true},SHOW_WEEK_HEADER:{key:"show_week_header",value:false},SHOW_WEEK_FOOTER:{key:"show_week_footer",value:false},HIDE_BLANK_WEEKS:{key:"hide_blank_weeks",value:false},NAV_ARROW_LEFT:{key:"nav_arrow_left",value:null},NAV_ARROW_RIGHT:{key:"nav_arrow_right",value:null},MONTHS_SHORT:{key:"months_short",value:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},MONTHS_LONG:{key:"months_long",value:["January","February","March","April","May","June","July","August","September","October","November","December"]},WEEKDAYS_1CHAR:{key:"weekdays_1char",value:["S","M","T","W","T","F","S"]},WEEKDAYS_SHORT:{key:"weekdays_short",value:["Su","Mo","Tu","We","Th","Fr","Sa"]},WEEKDAYS_MEDIUM:{key:"weekdays_medium",value:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},WEEKDAYS_LONG:{key:"weekdays_long",value:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},LOCALE_MONTHS:{key:"locale_months",value:"long"},LOCALE_WEEKDAYS:{key:"locale_weekdays",value:"short"},DATE_DELIMITER:{key:"date_delimiter",value:","},DATE_FIELD_DELIMITER:{key:"date_field_delimiter",value:"/"},DATE_RANGE_DELIMITER:{key:"date_range_delimiter",value:"-"},MY_MONTH_POSITION:{key:"my_month_position",value:1},MY_YEAR_POSITION:{key:"my_year_position",value:2},MD_MONTH_POSITION:{key:"md_month_position",value:1},MD_DAY_POSITION:{key:"md_day_position",value:2},MDY_MONTH_POSITION:{key:"mdy_month_position",value:1},MDY_DAY_POSITION:{key:"mdy_day_position",value:2},MDY_YEAR_POSITION:{key:"mdy_year_position",value:3},MY_LABEL_MONTH_POSITION:{key:"my_label_month_position",value:1},MY_LABEL_YEAR_POSITION:{key:"my_label_year_position",value:2},MY_LABEL_MONTH_SUFFIX:{key:"my_label_month_suffix",value:" "},MY_LABEL_YEAR_SUFFIX:{key:"my_label_year_suffix",value:""},NAV:{key:"navigator",value:null},STRINGS:{key:"strings",value:{previousMonth:"Previous Month",nextMonth:"Next Month",close:"Close"},supercedes:["close","title"]}};
var B=F._DEFAULT_CONFIG;
F._EVENT_TYPES={BEFORE_SELECT:"beforeSelect",SELECT:"select",BEFORE_DESELECT:"beforeDeselect",DESELECT:"deselect",CHANGE_PAGE:"changePage",BEFORE_RENDER:"beforeRender",RENDER:"render",BEFORE_DESTROY:"beforeDestroy",DESTROY:"destroy",RESET:"reset",CLEAR:"clear",BEFORE_HIDE:"beforeHide",HIDE:"hide",BEFORE_SHOW:"beforeShow",SHOW:"show",BEFORE_HIDE_NAV:"beforeHideNav",HIDE_NAV:"hideNav",BEFORE_SHOW_NAV:"beforeShowNav",SHOW_NAV:"showNav",BEFORE_RENDER_NAV:"beforeRenderNav",RENDER_NAV:"renderNav"};
F._STYLES={CSS_ROW_HEADER:"calrowhead",CSS_ROW_FOOTER:"calrowfoot",CSS_CELL:"calcell",CSS_CELL_SELECTOR:"selector",CSS_CELL_SELECTED:"selected",CSS_CELL_SELECTABLE:"selectable",CSS_CELL_RESTRICTED:"restricted",CSS_CELL_TODAY:"today",CSS_CELL_OOM:"oom",CSS_CELL_OOB:"previous",CSS_HEADER:"calheader",CSS_HEADER_TEXT:"calhead",CSS_BODY:"calbody",CSS_WEEKDAY_CELL:"calweekdaycell",CSS_WEEKDAY_ROW:"calweekdayrow",CSS_FOOTER:"calfoot",CSS_CALENDAR:"yui-calendar",CSS_SINGLE:"single",CSS_CONTAINER:"yui-calcontainer",CSS_NAV_LEFT:"calnavleft",CSS_NAV_RIGHT:"calnavright",CSS_NAV:"calnav",CSS_CLOSE:"calclose",CSS_CELL_TOP:"calcelltop",CSS_CELL_LEFT:"calcellleft",CSS_CELL_RIGHT:"calcellright",CSS_CELL_BOTTOM:"calcellbottom",CSS_CELL_HOVER:"calcellhover",CSS_CELL_HIGHLIGHT1:"highlight1",CSS_CELL_HIGHLIGHT2:"highlight2",CSS_CELL_HIGHLIGHT3:"highlight3",CSS_CELL_HIGHLIGHT4:"highlight4"};
F.prototype={Config:null,parent:null,index:-1,cells:null,cellDates:null,id:null,containerId:null,oDomContainer:null,today:null,renderStack:null,_renderStack:null,oNavigator:null,_selectedDates:null,domEventMap:null,_parseArgs:function(H){
var G={id:null,container:null,config:null};
if(H&&H.length&&H.length>0){
switch(H.length){
case 1:
G.id=null;
G.container=H[0];
G.config=null;
break;
case 2:
if(E.isObject(H[1])&&!H[1].tagName&&!(H[1] instanceof String)){
G.id=null;
G.container=H[0];
G.config=H[1];
}else{
G.id=H[0];
G.container=H[1];
G.config=null;
}
break;
default:
G.id=H[0];
G.container=H[1];
G.config=H[2];
break;
}
}else{
}
return G;
},init:function(J,H,I){
var G=this._parseArgs(arguments);
J=G.id;
H=G.container;
I=G.config;
this.oDomContainer=C.get(H);
if(!this.oDomContainer.id){
this.oDomContainer.id=C.generateId();
}
if(!J){
J=this.oDomContainer.id+"_t";
}
this.id=J;
this.containerId=this.oDomContainer.id;
this.initEvents();
this.today=new Date();
D.clearTime(this.today);
this.cfg=new YAHOO.util.Config(this);
this.Options={};
this.Locale={};
this.initStyles();
C.addClass(this.oDomContainer,this.Style.CSS_CONTAINER);
C.addClass(this.oDomContainer,this.Style.CSS_SINGLE);
this.cellDates=[];
this.cells=[];
this.renderStack=[];
this._renderStack=[];
this.setupConfig();
if(I){
this.cfg.applyConfig(I,true);
}
this.cfg.fireQueue();
},configIframe:function(I,H,J){
var G=H[0];
if(!this.parent){
if(C.inDocument(this.oDomContainer)){
if(G){
var K=C.getStyle(this.oDomContainer,"position");
if(K=="absolute"||K=="relative"){
if(!C.inDocument(this.iframe)){
this.iframe=document.createElement("iframe");
this.iframe.src="javascript:false;";
C.setStyle(this.iframe,"opacity","0");
if(YAHOO.env.ua.ie&&YAHOO.env.ua.ie<=6){
C.addClass(this.iframe,"fixedsize");
}
this.oDomContainer.insertBefore(this.iframe,this.oDomContainer.firstChild);
}
}
}else{
if(this.iframe){
if(this.iframe.parentNode){
this.iframe.parentNode.removeChild(this.iframe);
}
this.iframe=null;
}
}
}
}
},configTitle:function(H,G,I){
var K=G[0];
if(K){
this.createTitleBar(K);
}else{
var J=this.cfg.getProperty(B.CLOSE.key);
if(!J){
this.removeTitleBar();
}else{
this.createTitleBar("&#160;");
}
}
},configClose:function(H,G,I){
var K=G[0],J=this.cfg.getProperty(B.TITLE.key);
if(K){
if(!J){
this.createTitleBar("&#160;");
}
this.createCloseButton();
}else{
this.removeCloseButton();
if(!J){
this.removeTitleBar();
}
}
},initEvents:function(){
var G=F._EVENT_TYPES,I=YAHOO.util.CustomEvent,H=this;
H.beforeSelectEvent=new I(G.BEFORE_SELECT);
H.selectEvent=new I(G.SELECT);
H.beforeDeselectEvent=new I(G.BEFORE_DESELECT);
H.deselectEvent=new I(G.DESELECT);
H.changePageEvent=new I(G.CHANGE_PAGE);
H.beforeRenderEvent=new I(G.BEFORE_RENDER);
H.renderEvent=new I(G.RENDER);
H.beforeDestroyEvent=new I(G.BEFORE_DESTROY);
H.destroyEvent=new I(G.DESTROY);
H.resetEvent=new I(G.RESET);
H.clearEvent=new I(G.CLEAR);
H.beforeShowEvent=new I(G.BEFORE_SHOW);
H.showEvent=new I(G.SHOW);
H.beforeHideEvent=new I(G.BEFORE_HIDE);
H.hideEvent=new I(G.HIDE);
H.beforeShowNavEvent=new I(G.BEFORE_SHOW_NAV);
H.showNavEvent=new I(G.SHOW_NAV);
H.beforeHideNavEvent=new I(G.BEFORE_HIDE_NAV);
H.hideNavEvent=new I(G.HIDE_NAV);
H.beforeRenderNavEvent=new I(G.BEFORE_RENDER_NAV);
H.renderNavEvent=new I(G.RENDER_NAV);
H.beforeSelectEvent.subscribe(H.onBeforeSelect,this,true);
H.selectEvent.subscribe(H.onSelect,this,true);
H.beforeDeselectEvent.subscribe(H.onBeforeDeselect,this,true);
H.deselectEvent.subscribe(H.onDeselect,this,true);
H.changePageEvent.subscribe(H.onChangePage,this,true);
H.renderEvent.subscribe(H.onRender,this,true);
H.resetEvent.subscribe(H.onReset,this,true);
H.clearEvent.subscribe(H.onClear,this,true);
},doPreviousMonthNav:function(H,G){
A.preventDefault(H);
setTimeout(function(){
G.previousMonth();
var I=C.getElementsByClassName(G.Style.CSS_NAV_LEFT,"a",G.oDomContainer);
if(I&&I[0]){
try{
I[0].focus();
}
catch(J){
}
}
},0);
},doNextMonthNav:function(H,G){
A.preventDefault(H);
setTimeout(function(){
G.nextMonth();
var I=C.getElementsByClassName(G.Style.CSS_NAV_RIGHT,"a",G.oDomContainer);
if(I&&I[0]){
try{
I[0].focus();
}
catch(J){
}
}
},0);
},doSelectCell:function(M,G){
var R,O,I,L;
var N=A.getTarget(M),H=N.tagName.toLowerCase(),K=false;
while(H!="td"&&!C.hasClass(N,G.Style.CSS_CELL_SELECTABLE)){
if(!K&&H=="a"&&C.hasClass(N,G.Style.CSS_CELL_SELECTOR)){
K=true;
}
N=N.parentNode;
H=N.tagName.toLowerCase();
if(N==this.oDomContainer||H=="html"){
return;
}
}
if(K){
A.preventDefault(M);
}
R=N;
if(C.hasClass(R,G.Style.CSS_CELL_SELECTABLE)){
L=G.getIndexFromId(R.id);
if(L>-1){
O=G.cellDates[L];
if(O){
I=D.getDate(O[0],O[1]-1,O[2]);
var Q;
if(G.Options.MULTI_SELECT){
Q=R.getElementsByTagName("a")[0];
if(Q){
Q.blur();
}
var J=G.cellDates[L];
var P=G._indexOfSelectedFieldArray(J);
if(P>-1){
G.deselectCell(L);
}else{
G.selectCell(L);
}
}else{
Q=R.getElementsByTagName("a")[0];
if(Q){
Q.blur();
}
G.selectCell(L);
}
}
}
}
},doCellMouseOver:function(I,H){
var G;
if(I){
G=A.getTarget(I);
}else{
G=this;
}
while(G.tagName&&G.tagName.toLowerCase()!="td"){
G=G.parentNode;
if(!G.tagName||G.tagName.toLowerCase()=="html"){
return;
}
}
if(C.hasClass(G,H.Style.CSS_CELL_SELECTABLE)){
C.addClass(G,H.Style.CSS_CELL_HOVER);
}
},doCellMouseOut:function(I,H){
var G;
if(I){
G=A.getTarget(I);
}else{
G=this;
}
while(G.tagName&&G.tagName.toLowerCase()!="td"){
G=G.parentNode;
if(!G.tagName||G.tagName.toLowerCase()=="html"){
return;
}
}
if(C.hasClass(G,H.Style.CSS_CELL_SELECTABLE)){
C.removeClass(G,H.Style.CSS_CELL_HOVER);
}
},setupConfig:function(){
var G=this.cfg;
G.addProperty(B.PAGEDATE.key,{value:new Date(),handler:this.configPageDate});
G.addProperty(B.SELECTED.key,{value:[],handler:this.configSelected});
G.addProperty(B.TITLE.key,{value:B.TITLE.value,handler:this.configTitle});
G.addProperty(B.CLOSE.key,{value:B.CLOSE.value,handler:this.configClose});
G.addProperty(B.IFRAME.key,{value:B.IFRAME.value,handler:this.configIframe,validator:G.checkBoolean});
G.addProperty(B.MINDATE.key,{value:B.MINDATE.value,handler:this.configMinDate});
G.addProperty(B.MAXDATE.key,{value:B.MAXDATE.value,handler:this.configMaxDate});
G.addProperty(B.MULTI_SELECT.key,{value:B.MULTI_SELECT.value,handler:this.configOptions,validator:G.checkBoolean});
G.addProperty(B.START_WEEKDAY.key,{value:B.START_WEEKDAY.value,handler:this.configOptions,validator:G.checkNumber});
G.addProperty(B.SHOW_WEEKDAYS.key,{value:B.SHOW_WEEKDAYS.value,handler:this.configOptions,validator:G.checkBoolean});
G.addProperty(B.SHOW_WEEK_HEADER.key,{value:B.SHOW_WEEK_HEADER.value,handler:this.configOptions,validator:G.checkBoolean});
G.addProperty(B.SHOW_WEEK_FOOTER.key,{value:B.SHOW_WEEK_FOOTER.value,handler:this.configOptions,validator:G.checkBoolean});
G.addProperty(B.HIDE_BLANK_WEEKS.key,{value:B.HIDE_BLANK_WEEKS.value,handler:this.configOptions,validator:G.checkBoolean});
G.addProperty(B.NAV_ARROW_LEFT.key,{value:B.NAV_ARROW_LEFT.value,handler:this.configOptions});
G.addProperty(B.NAV_ARROW_RIGHT.key,{value:B.NAV_ARROW_RIGHT.value,handler:this.configOptions});
G.addProperty(B.MONTHS_SHORT.key,{value:B.MONTHS_SHORT.value,handler:this.configLocale});
G.addProperty(B.MONTHS_LONG.key,{value:B.MONTHS_LONG.value,handler:this.configLocale});
G.addProperty(B.WEEKDAYS_1CHAR.key,{value:B.WEEKDAYS_1CHAR.value,handler:this.configLocale});
G.addProperty(B.WEEKDAYS_SHORT.key,{value:B.WEEKDAYS_SHORT.value,handler:this.configLocale});
G.addProperty(B.WEEKDAYS_MEDIUM.key,{value:B.WEEKDAYS_MEDIUM.value,handler:this.configLocale});
G.addProperty(B.WEEKDAYS_LONG.key,{value:B.WEEKDAYS_LONG.value,handler:this.configLocale});
var H=function(){
G.refireEvent(B.LOCALE_MONTHS.key);
G.refireEvent(B.LOCALE_WEEKDAYS.key);
};
G.subscribeToConfigEvent(B.START_WEEKDAY.key,H,this,true);
G.subscribeToConfigEvent(B.MONTHS_SHORT.key,H,this,true);
G.subscribeToConfigEvent(B.MONTHS_LONG.key,H,this,true);
G.subscribeToConfigEvent(B.WEEKDAYS_1CHAR.key,H,this,true);
G.subscribeToConfigEvent(B.WEEKDAYS_SHORT.key,H,this,true);
G.subscribeToConfigEvent(B.WEEKDAYS_MEDIUM.key,H,this,true);
G.subscribeToConfigEvent(B.WEEKDAYS_LONG.key,H,this,true);
G.addProperty(B.LOCALE_MONTHS.key,{value:B.LOCALE_MONTHS.value,handler:this.configLocaleValues});
G.addProperty(B.LOCALE_WEEKDAYS.key,{value:B.LOCALE_WEEKDAYS.value,handler:this.configLocaleValues});
G.addProperty(B.DATE_DELIMITER.key,{value:B.DATE_DELIMITER.value,handler:this.configLocale});
G.addProperty(B.DATE_FIELD_DELIMITER.key,{value:B.DATE_FIELD_DELIMITER.value,handler:this.configLocale});
G.addProperty(B.DATE_RANGE_DELIMITER.key,{value:B.DATE_RANGE_DELIMITER.value,handler:this.configLocale});
G.addProperty(B.MY_MONTH_POSITION.key,{value:B.MY_MONTH_POSITION.value,handler:this.configLocale,validator:G.checkNumber});
G.addProperty(B.MY_YEAR_POSITION.key,{value:B.MY_YEAR_POSITION.value,handler:this.configLocale,validator:G.checkNumber});
G.addProperty(B.MD_MONTH_POSITION.key,{value:B.MD_MONTH_POSITION.value,handler:this.configLocale,validator:G.checkNumber});
G.addProperty(B.MD_DAY_POSITION.key,{value:B.MD_DAY_POSITION.value,handler:this.configLocale,validator:G.checkNumber});
G.addProperty(B.MDY_MONTH_POSITION.key,{value:B.MDY_MONTH_POSITION.value,handler:this.configLocale,validator:G.checkNumber});
G.addProperty(B.MDY_DAY_POSITION.key,{value:B.MDY_DAY_POSITION.value,handler:this.configLocale,validator:G.checkNumber});
G.addProperty(B.MDY_YEAR_POSITION.key,{value:B.MDY_YEAR_POSITION.value,handler:this.configLocale,validator:G.checkNumber});
G.addProperty(B.MY_LABEL_MONTH_POSITION.key,{value:B.MY_LABEL_MONTH_POSITION.value,handler:this.configLocale,validator:G.checkNumber});
G.addProperty(B.MY_LABEL_YEAR_POSITION.key,{value:B.MY_LABEL_YEAR_POSITION.value,handler:this.configLocale,validator:G.checkNumber});
G.addProperty(B.MY_LABEL_MONTH_SUFFIX.key,{value:B.MY_LABEL_MONTH_SUFFIX.value,handler:this.configLocale});
G.addProperty(B.MY_LABEL_YEAR_SUFFIX.key,{value:B.MY_LABEL_YEAR_SUFFIX.value,handler:this.configLocale});
G.addProperty(B.NAV.key,{value:B.NAV.value,handler:this.configNavigator});
G.addProperty(B.STRINGS.key,{value:B.STRINGS.value,handler:this.configStrings,validator:function(I){
return E.isObject(I);
},supercedes:B.STRINGS.supercedes});
},configStrings:function(H,G,I){
var J=E.merge(B.STRINGS.value,G[0]);
this.cfg.setProperty(B.STRINGS.key,J,true);
},configPageDate:function(H,G,I){
this.cfg.setProperty(B.PAGEDATE.key,this._parsePageDate(G[0]),true);
},configMinDate:function(H,G,I){
var J=G[0];
if(E.isString(J)){
J=this._parseDate(J);
this.cfg.setProperty(B.MINDATE.key,D.getDate(J[0],(J[1]-1),J[2]));
}
},configMaxDate:function(H,G,I){
var J=G[0];
if(E.isString(J)){
J=this._parseDate(J);
this.cfg.setProperty(B.MAXDATE.key,D.getDate(J[0],(J[1]-1),J[2]));
}
},configSelected:function(I,G,K){
var H=G[0],J=B.SELECTED.key;
if(H){
if(E.isString(H)){
this.cfg.setProperty(J,this._parseDates(H),true);
}
}
if(!this._selectedDates){
this._selectedDates=this.cfg.getProperty(J);
}
},configOptions:function(H,G,I){
this.Options[H.toUpperCase()]=G[0];
},configLocale:function(H,G,I){
this.Locale[H.toUpperCase()]=G[0];
this.cfg.refireEvent(B.LOCALE_MONTHS.key);
this.cfg.refireEvent(B.LOCALE_WEEKDAYS.key);
},configLocaleValues:function(J,I,K){
J=J.toLowerCase();
var M=I[0],H=this.cfg,N=this.Locale;
switch(J){
case B.LOCALE_MONTHS.key:
switch(M){
case F.SHORT:
N.LOCALE_MONTHS=H.getProperty(B.MONTHS_SHORT.key).concat();
break;
case F.LONG:
N.LOCALE_MONTHS=H.getProperty(B.MONTHS_LONG.key).concat();
break;
}
break;
case B.LOCALE_WEEKDAYS.key:
switch(M){
case F.ONE_CHAR:
N.LOCALE_WEEKDAYS=H.getProperty(B.WEEKDAYS_1CHAR.key).concat();
break;
case F.SHORT:
N.LOCALE_WEEKDAYS=H.getProperty(B.WEEKDAYS_SHORT.key).concat();
break;
case F.MEDIUM:
N.LOCALE_WEEKDAYS=H.getProperty(B.WEEKDAYS_MEDIUM.key).concat();
break;
case F.LONG:
N.LOCALE_WEEKDAYS=H.getProperty(B.WEEKDAYS_LONG.key).concat();
break;
}
var L=H.getProperty(B.START_WEEKDAY.key);
if(L>0){
for(var G=0;G<L;++G){
N.LOCALE_WEEKDAYS.push(N.LOCALE_WEEKDAYS.shift());
}
}
break;
}
},configNavigator:function(H,G,I){
var J=G[0];
if(YAHOO.widget.CalendarNavigator&&(J===true||E.isObject(J))){
if(!this.oNavigator){
this.oNavigator=new YAHOO.widget.CalendarNavigator(this);
this.beforeRenderEvent.subscribe(function(){
if(!this.pages){
this.oNavigator.erase();
}
},this,true);
}
}else{
if(this.oNavigator){
this.oNavigator.destroy();
this.oNavigator=null;
}
}
},initStyles:function(){
var G=F._STYLES;
this.Style={CSS_ROW_HEADER:G.CSS_ROW_HEADER,CSS_ROW_FOOTER:G.CSS_ROW_FOOTER,CSS_CELL:G.CSS_CELL,CSS_CELL_SELECTOR:G.CSS_CELL_SELECTOR,CSS_CELL_SELECTED:G.CSS_CELL_SELECTED,CSS_CELL_SELECTABLE:G.CSS_CELL_SELECTABLE,CSS_CELL_RESTRICTED:G.CSS_CELL_RESTRICTED,CSS_CELL_TODAY:G.CSS_CELL_TODAY,CSS_CELL_OOM:G.CSS_CELL_OOM,CSS_CELL_OOB:G.CSS_CELL_OOB,CSS_HEADER:G.CSS_HEADER,CSS_HEADER_TEXT:G.CSS_HEADER_TEXT,CSS_BODY:G.CSS_BODY,CSS_WEEKDAY_CELL:G.CSS_WEEKDAY_CELL,CSS_WEEKDAY_ROW:G.CSS_WEEKDAY_ROW,CSS_FOOTER:G.CSS_FOOTER,CSS_CALENDAR:G.CSS_CALENDAR,CSS_SINGLE:G.CSS_SINGLE,CSS_CONTAINER:G.CSS_CONTAINER,CSS_NAV_LEFT:G.CSS_NAV_LEFT,CSS_NAV_RIGHT:G.CSS_NAV_RIGHT,CSS_NAV:G.CSS_NAV,CSS_CLOSE:G.CSS_CLOSE,CSS_CELL_TOP:G.CSS_CELL_TOP,CSS_CELL_LEFT:G.CSS_CELL_LEFT,CSS_CELL_RIGHT:G.CSS_CELL_RIGHT,CSS_CELL_BOTTOM:G.CSS_CELL_BOTTOM,CSS_CELL_HOVER:G.CSS_CELL_HOVER,CSS_CELL_HIGHLIGHT1:G.CSS_CELL_HIGHLIGHT1,CSS_CELL_HIGHLIGHT2:G.CSS_CELL_HIGHLIGHT2,CSS_CELL_HIGHLIGHT3:G.CSS_CELL_HIGHLIGHT3,CSS_CELL_HIGHLIGHT4:G.CSS_CELL_HIGHLIGHT4};
},buildMonthLabel:function(){
return this._buildMonthLabel(this.cfg.getProperty(B.PAGEDATE.key));
},_buildMonthLabel:function(G){
var I=this.Locale.LOCALE_MONTHS[G.getMonth()]+this.Locale.MY_LABEL_MONTH_SUFFIX,H=G.getFullYear()+this.Locale.MY_LABEL_YEAR_SUFFIX;
if(this.Locale.MY_LABEL_MONTH_POSITION==2||this.Locale.MY_LABEL_YEAR_POSITION==1){
return H+I;
}else{
return I+H;
}
},buildDayLabel:function(G){
return G.getDate();
},createTitleBar:function(G){
var H=C.getElementsByClassName(YAHOO.widget.CalendarGroup.CSS_2UPTITLE,"div",this.oDomContainer)[0]||document.createElement("div");
H.className=YAHOO.widget.CalendarGroup.CSS_2UPTITLE;
H.innerHTML=G;
this.oDomContainer.insertBefore(H,this.oDomContainer.firstChild);
C.addClass(this.oDomContainer,"withtitle");
return H;
},removeTitleBar:function(){
var G=C.getElementsByClassName(YAHOO.widget.CalendarGroup.CSS_2UPTITLE,"div",this.oDomContainer)[0]||null;
if(G){
A.purgeElement(G);
this.oDomContainer.removeChild(G);
}
C.removeClass(this.oDomContainer,"withtitle");
},createCloseButton:function(){
var J=YAHOO.widget.CalendarGroup.CSS_2UPCLOSE,L="us/my/bn/x_d.gif",K=C.getElementsByClassName("link-close","a",this.oDomContainer)[0],G=this.cfg.getProperty(B.STRINGS.key),H=(G&&G.close)?G.close:"";
if(!K){
K=document.createElement("a");
A.addListener(K,"click",function(N,M){
M.hide();
A.preventDefault(N);
},this);
}
K.href="#";
K.className="link-close";
if(F.IMG_ROOT!==null){
var I=C.getElementsByClassName(J,"img",K)[0]||document.createElement("img");
I.src=F.IMG_ROOT+L;
I.className=J;
K.appendChild(I);
}else{
K.innerHTML="<span class=\""+J+" "+this.Style.CSS_CLOSE+"\">"+H+"</span>";
}
this.oDomContainer.appendChild(K);
return K;
},removeCloseButton:function(){
var G=C.getElementsByClassName("link-close","a",this.oDomContainer)[0]||null;
if(G){
A.purgeElement(G);
this.oDomContainer.removeChild(G);
}
},renderHeader:function(Q){
var P=7,O="us/tr/callt.gif",G="us/tr/calrt.gif",N=this.cfg,K=N.getProperty(B.PAGEDATE.key),L=N.getProperty(B.STRINGS.key),V=(L&&L.previousMonth)?L.previousMonth:"",H=(L&&L.nextMonth)?L.nextMonth:"",M;
if(N.getProperty(B.SHOW_WEEK_HEADER.key)){
P+=1;
}
if(N.getProperty(B.SHOW_WEEK_FOOTER.key)){
P+=1;
}
Q[Q.length]="<thead>";
Q[Q.length]="<tr>";
Q[Q.length]="<th colspan=\""+P+"\" class=\""+this.Style.CSS_HEADER_TEXT+"\">";
Q[Q.length]="<div class=\""+this.Style.CSS_HEADER+"\">";
var X,U=false;
if(this.parent){
if(this.index===0){
X=true;
}
if(this.index==(this.parent.cfg.getProperty("pages")-1)){
U=true;
}
}else{
X=true;
U=true;
}
if(X){
M=this._buildMonthLabel(D.subtract(K,D.MONTH,1));
var R=N.getProperty(B.NAV_ARROW_LEFT.key);
if(R===null&&F.IMG_ROOT!==null){
R=F.IMG_ROOT+O;
}
var I=(R===null)?"":" style=\"background-image:url("+R+")\"";
Q[Q.length]="<a class=\""+this.Style.CSS_NAV_LEFT+"\""+I+" href=\"#\">"+V+" ("+M+")"+"</a>";
}
var W=this.buildMonthLabel();
var S=this.parent||this;
if(S.cfg.getProperty("navigator")){
W="<a class=\""+this.Style.CSS_NAV+"\" href=\"#\">"+W+"</a>";
}
Q[Q.length]=W;
if(U){
M=this._buildMonthLabel(D.add(K,D.MONTH,1));
var T=N.getProperty(B.NAV_ARROW_RIGHT.key);
if(T===null&&F.IMG_ROOT!==null){
T=F.IMG_ROOT+G;
}
var J=(T===null)?"":" style=\"background-image:url("+T+")\"";
Q[Q.length]="<a class=\""+this.Style.CSS_NAV_RIGHT+"\""+J+" href=\"#\">"+H+" ("+M+")"+"</a>";
}
Q[Q.length]="</div>\n</th>\n</tr>";
if(N.getProperty(B.SHOW_WEEKDAYS.key)){
Q=this.buildWeekdays(Q);
}
Q[Q.length]="</thead>";
return Q;
},buildWeekdays:function(H){
H[H.length]="<tr class=\""+this.Style.CSS_WEEKDAY_ROW+"\">";
if(this.cfg.getProperty(B.SHOW_WEEK_HEADER.key)){
H[H.length]="<th>&#160;</th>";
}
for(var G=0;G<this.Locale.LOCALE_WEEKDAYS.length;++G){
H[H.length]="<th class=\"calweekdaycell\">"+this.Locale.LOCALE_WEEKDAYS[G]+"</th>";
}
if(this.cfg.getProperty(B.SHOW_WEEK_FOOTER.key)){
H[H.length]="<th>&#160;</th>";
}
H[H.length]="</tr>";
return H;
},renderBody:function(l,j){
var AJ=this.cfg.getProperty(B.START_WEEKDAY.key);
this.preMonthDays=l.getDay();
if(AJ>0){
this.preMonthDays-=AJ;
}
if(this.preMonthDays<0){
this.preMonthDays+=7;
}
this.monthDays=D.findMonthEnd(l).getDate();
this.postMonthDays=F.DISPLAY_DAYS-this.preMonthDays-this.monthDays;
l=D.subtract(l,D.DAY,this.preMonthDays);
var X,N,M="w",e="_cell",b="wd",v="d",P,q,AB=this.today,O=this.cfg,V=AB.getFullYear(),u=AB.getMonth(),J=AB.getDate(),AA=O.getProperty(B.PAGEDATE.key),I=O.getProperty(B.HIDE_BLANK_WEEKS.key),h=O.getProperty(B.SHOW_WEEK_FOOTER.key),a=O.getProperty(B.SHOW_WEEK_HEADER.key),T=O.getProperty(B.MINDATE.key),Z=O.getProperty(B.MAXDATE.key);
if(T){
T=D.clearTime(T);
}
if(Z){
Z=D.clearTime(Z);
}
j[j.length]="<tbody class=\"m"+(AA.getMonth()+1)+" "+this.Style.CSS_BODY+"\">";
var AH=0,Q=document.createElement("div"),k=document.createElement("td");
Q.appendChild(k);
var z=this.parent||this;
for(var AD=0;AD<6;AD++){
X=D.getWeekNumber(l,AJ);
N=M+X;
if(AD!==0&&I===true&&l.getMonth()!=AA.getMonth()){
break;
}else{
j[j.length]="<tr class=\""+N+"\">";
if(a){
j=this.renderRowHeader(X,j);
}
for(var AI=0;AI<7;AI++){
P=[];
this.clearElement(k);
k.className=this.Style.CSS_CELL;
k.id=this.id+e+AH;
if(l.getDate()==J&&l.getMonth()==u&&l.getFullYear()==V){
P[P.length]=z.renderCellStyleToday;
}
var Y=[l.getFullYear(),l.getMonth()+1,l.getDate()];
this.cellDates[this.cellDates.length]=Y;
if(l.getMonth()!=AA.getMonth()){
P[P.length]=z.renderCellNotThisMonth;
}else{
C.addClass(k,b+l.getDay());
C.addClass(k,v+l.getDate());
for(var AC=0;AC<this.renderStack.length;++AC){
q=null;
var w=this.renderStack[AC],AK=w[0],H,c,L;
switch(AK){
case F.DATE:
H=w[1][1];
c=w[1][2];
L=w[1][0];
if(l.getMonth()+1==H&&l.getDate()==c&&l.getFullYear()==L){
q=w[2];
this.renderStack.splice(AC,1);
}
break;
case F.MONTH_DAY:
H=w[1][0];
c=w[1][1];
if(l.getMonth()+1==H&&l.getDate()==c){
q=w[2];
this.renderStack.splice(AC,1);
}
break;
case F.RANGE:
var g=w[1][0],f=w[1][1],m=g[1],S=g[2],W=g[0],AG=D.getDate(W,m-1,S),K=f[1],o=f[2],G=f[0],AF=D.getDate(G,K-1,o);
if(l.getTime()>=AG.getTime()&&l.getTime()<=AF.getTime()){
q=w[2];
if(l.getTime()==AF.getTime()){
this.renderStack.splice(AC,1);
}
}
break;
case F.WEEKDAY:
var R=w[1][0];
if(l.getDay()+1==R){
q=w[2];
}
break;
case F.MONTH:
H=w[1][0];
if(l.getMonth()+1==H){
q=w[2];
}
break;
}
if(q){
P[P.length]=q;
}
}
}
if(this._indexOfSelectedFieldArray(Y)>-1){
P[P.length]=z.renderCellStyleSelected;
}
if((T&&(l.getTime()<T.getTime()))||(Z&&(l.getTime()>Z.getTime()))){
P[P.length]=z.renderOutOfBoundsDate;
}else{
P[P.length]=z.styleCellDefault;
P[P.length]=z.renderCellDefault;
}
for(var y=0;y<P.length;++y){
if(P[y].call(z,l,k)==F.STOP_RENDER){
break;
}
}
l.setTime(l.getTime()+D.ONE_DAY_MS);
l=D.clearTime(l);
if(AH>=0&&AH<=6){
C.addClass(k,this.Style.CSS_CELL_TOP);
}
if((AH%7)===0){
C.addClass(k,this.Style.CSS_CELL_LEFT);
}
if(((AH+1)%7)===0){
C.addClass(k,this.Style.CSS_CELL_RIGHT);
}
var n=this.postMonthDays;
if(I&&n>=7){
var U=Math.floor(n/7);
for(var AE=0;AE<U;++AE){
n-=7;
}
}
if(AH>=((this.preMonthDays+n+this.monthDays)-7)){
C.addClass(k,this.Style.CSS_CELL_BOTTOM);
}
j[j.length]=Q.innerHTML;
AH++;
}
if(h){
j=this.renderRowFooter(X,j);
}
j[j.length]="</tr>";
}
}
j[j.length]="</tbody>";
return j;
},renderFooter:function(G){
return G;
},render:function(){
this.beforeRenderEvent.fire();
var H=D.findMonthStart(this.cfg.getProperty(B.PAGEDATE.key));
this.resetRenderers();
this.cellDates.length=0;
A.purgeElement(this.oDomContainer,true);
var G=[];
G[G.length]="<table cellSpacing=\"0\" class=\""+this.Style.CSS_CALENDAR+" y"+H.getFullYear()+"\" id=\""+this.id+"\">";
G=this.renderHeader(G);
G=this.renderBody(H,G);
G=this.renderFooter(G);
G[G.length]="</table>";
this.oDomContainer.innerHTML=G.join("\n");
this.applyListeners();
this.cells=this.oDomContainer.getElementsByTagName("td");
this.cfg.refireEvent(B.TITLE.key);
this.cfg.refireEvent(B.CLOSE.key);
this.cfg.refireEvent(B.IFRAME.key);
this.renderEvent.fire();
},applyListeners:function(){
var P=this.oDomContainer,H=this.parent||this,L="a",S="click";
var M=C.getElementsByClassName(this.Style.CSS_NAV_LEFT,L,P),I=C.getElementsByClassName(this.Style.CSS_NAV_RIGHT,L,P);
if(M&&M.length>0){
this.linkLeft=M[0];
A.addListener(this.linkLeft,S,this.doPreviousMonthNav,H,true);
}
if(I&&I.length>0){
this.linkRight=I[0];
A.addListener(this.linkRight,S,this.doNextMonthNav,H,true);
}
if(H.cfg.getProperty("navigator")!==null){
this.applyNavListeners();
}
if(this.domEventMap){
var J,G;
for(var R in this.domEventMap){
if(E.hasOwnProperty(this.domEventMap,R)){
var N=this.domEventMap[R];
if(!(N instanceof Array)){
N=[N];
}
for(var K=0;K<N.length;K++){
var Q=N[K];
G=C.getElementsByClassName(R,Q.tag,this.oDomContainer);
for(var O=0;O<G.length;O++){
J=G[O];
A.addListener(J,Q.event,Q.handler,Q.scope,Q.correct);
}
}
}
}
}
A.addListener(this.oDomContainer,"click",this.doSelectCell,this);
A.addListener(this.oDomContainer,"mouseover",this.doCellMouseOver,this);
A.addListener(this.oDomContainer,"mouseout",this.doCellMouseOut,this);
},applyNavListeners:function(){
var H=this.parent||this,I=this,G=C.getElementsByClassName(this.Style.CSS_NAV,"a",this.oDomContainer);
if(G.length>0){
A.addListener(G,"click",function(N,M){
var L=A.getTarget(N);
if(this===L||C.isAncestor(this,L)){
A.preventDefault(N);
}
var J=H.oNavigator;
if(J){
var K=I.cfg.getProperty("pagedate");
J.setYear(K.getFullYear());
J.setMonth(K.getMonth());
J.show();
}
});
}
},getDateByCellId:function(H){
var G=this.getDateFieldsByCellId(H);
return (G)?D.getDate(G[0],G[1]-1,G[2]):null;
},getDateFieldsByCellId:function(G){
G=this.getIndexFromId(G);
return (G>-1)?this.cellDates[G]:null;
},getCellIndex:function(I){
var H=-1;
if(I){
var G=I.getMonth(),N=I.getFullYear(),M=I.getDate(),K=this.cellDates;
for(var J=0;J<K.length;++J){
var L=K[J];
if(L[0]===N&&L[1]===G+1&&L[2]===M){
H=J;
break;
}
}
}
return H;
},getIndexFromId:function(I){
var H=-1,G=I.lastIndexOf("_cell");
if(G>-1){
H=parseInt(I.substring(G+5),10);
}
return H;
},renderOutOfBoundsDate:function(H,G){
C.addClass(G,this.Style.CSS_CELL_OOB);
G.innerHTML=H.getDate();
return F.STOP_RENDER;
},renderRowHeader:function(H,G){
G[G.length]="<th class=\"calrowhead\">"+H+"</th>";
return G;
},renderRowFooter:function(H,G){
G[G.length]="<th class=\"calrowfoot\">"+H+"</th>";
return G;
},renderCellDefault:function(H,G){
G.innerHTML="<a href=\"#\" class=\""+this.Style.CSS_CELL_SELECTOR+"\">"+this.buildDayLabel(H)+"</a>";
},styleCellDefault:function(H,G){
C.addClass(G,this.Style.CSS_CELL_SELECTABLE);
},renderCellStyleHighlight1:function(H,G){
C.addClass(G,this.Style.CSS_CELL_HIGHLIGHT1);
},renderCellStyleHighlight2:function(H,G){
C.addClass(G,this.Style.CSS_CELL_HIGHLIGHT2);
},renderCellStyleHighlight3:function(H,G){
C.addClass(G,this.Style.CSS_CELL_HIGHLIGHT3);
},renderCellStyleHighlight4:function(H,G){
C.addClass(G,this.Style.CSS_CELL_HIGHLIGHT4);
},renderCellStyleToday:function(H,G){
C.addClass(G,this.Style.CSS_CELL_TODAY);
},renderCellStyleSelected:function(H,G){
C.addClass(G,this.Style.CSS_CELL_SELECTED);
},renderCellNotThisMonth:function(H,G){
C.addClass(G,this.Style.CSS_CELL_OOM);
G.innerHTML=H.getDate();
return F.STOP_RENDER;
},renderBodyCellRestricted:function(H,G){
C.addClass(G,this.Style.CSS_CELL);
C.addClass(G,this.Style.CSS_CELL_RESTRICTED);
G.innerHTML=H.getDate();
return F.STOP_RENDER;
},addMonths:function(H){
var G=B.PAGEDATE.key;
this.cfg.setProperty(G,D.add(this.cfg.getProperty(G),D.MONTH,H));
this.resetRenderers();
this.changePageEvent.fire();
},subtractMonths:function(H){
var G=B.PAGEDATE.key;
this.cfg.setProperty(G,D.subtract(this.cfg.getProperty(G),D.MONTH,H));
this.resetRenderers();
this.changePageEvent.fire();
},addYears:function(H){
var G=B.PAGEDATE.key;
this.cfg.setProperty(G,D.add(this.cfg.getProperty(G),D.YEAR,H));
this.resetRenderers();
this.changePageEvent.fire();
},subtractYears:function(H){
var G=B.PAGEDATE.key;
this.cfg.setProperty(G,D.subtract(this.cfg.getProperty(G),D.YEAR,H));
this.resetRenderers();
this.changePageEvent.fire();
},nextMonth:function(){
this.addMonths(1);
},previousMonth:function(){
this.subtractMonths(1);
},nextYear:function(){
this.addYears(1);
},previousYear:function(){
this.subtractYears(1);
},reset:function(){
this.cfg.resetProperty(B.SELECTED.key);
this.cfg.resetProperty(B.PAGEDATE.key);
this.resetEvent.fire();
},clear:function(){
this.cfg.setProperty(B.SELECTED.key,[]);
this.cfg.setProperty(B.PAGEDATE.key,new Date(this.today.getTime()));
this.clearEvent.fire();
},select:function(I){
var L=this._toFieldArray(I),H=[],K=[],M=B.SELECTED.key;
for(var G=0;G<L.length;++G){
var J=L[G];
if(!this.isDateOOB(this._toDate(J))){
if(H.length===0){
this.beforeSelectEvent.fire();
K=this.cfg.getProperty(M);
}
H.push(J);
if(this._indexOfSelectedFieldArray(J)==-1){
K[K.length]=J;
}
}
}
if(H.length>0){
if(this.parent){
this.parent.cfg.setProperty(M,K);
}else{
this.cfg.setProperty(M,K);
}
this.selectEvent.fire(H);
}
return this.getSelectedDates();
},selectCell:function(J){
var H=this.cells[J],N=this.cellDates[J],M=this._toDate(N),I=C.hasClass(H,this.Style.CSS_CELL_SELECTABLE);
if(I){
this.beforeSelectEvent.fire();
var L=B.SELECTED.key;
var K=this.cfg.getProperty(L);
var G=N.concat();
if(this._indexOfSelectedFieldArray(G)==-1){
K[K.length]=G;
}
if(this.parent){
this.parent.cfg.setProperty(L,K);
}else{
this.cfg.setProperty(L,K);
}
this.renderCellStyleSelected(M,H);
this.selectEvent.fire([G]);
this.doCellMouseOut.call(H,null,this);
}
return this.getSelectedDates();
},deselect:function(K){
var G=this._toFieldArray(K),J=[],M=[],N=B.SELECTED.key;
for(var H=0;H<G.length;++H){
var L=G[H];
if(!this.isDateOOB(this._toDate(L))){
if(J.length===0){
this.beforeDeselectEvent.fire();
M=this.cfg.getProperty(N);
}
J.push(L);
var I=this._indexOfSelectedFieldArray(L);
if(I!=-1){
M.splice(I,1);
}
}
}
if(J.length>0){
if(this.parent){
this.parent.cfg.setProperty(N,M);
}else{
this.cfg.setProperty(N,M);
}
this.deselectEvent.fire(J);
}
return this.getSelectedDates();
},deselectCell:function(K){
var H=this.cells[K],N=this.cellDates[K],I=this._indexOfSelectedFieldArray(N);
var J=C.hasClass(H,this.Style.CSS_CELL_SELECTABLE);
if(J){
this.beforeDeselectEvent.fire();
var L=this.cfg.getProperty(B.SELECTED.key),M=this._toDate(N),G=N.concat();
if(I>-1){
if(this.cfg.getProperty(B.PAGEDATE.key).getMonth()==M.getMonth()&&this.cfg.getProperty(B.PAGEDATE.key).getFullYear()==M.getFullYear()){
C.removeClass(H,this.Style.CSS_CELL_SELECTED);
}
L.splice(I,1);
}
if(this.parent){
this.parent.cfg.setProperty(B.SELECTED.key,L);
}else{
this.cfg.setProperty(B.SELECTED.key,L);
}
this.deselectEvent.fire(G);
}
return this.getSelectedDates();
},deselectAll:function(){
this.beforeDeselectEvent.fire();
var J=B.SELECTED.key,G=this.cfg.getProperty(J),H=G.length,I=G.concat();
if(this.parent){
this.parent.cfg.setProperty(J,[]);
}else{
this.cfg.setProperty(J,[]);
}
if(H>0){
this.deselectEvent.fire(I);
}
return this.getSelectedDates();
},_toFieldArray:function(H){
var G=[];
if(H instanceof Date){
G=[[H.getFullYear(),H.getMonth()+1,H.getDate()]];
}else{
if(E.isString(H)){
G=this._parseDates(H);
}else{
if(E.isArray(H)){
for(var I=0;I<H.length;++I){
var J=H[I];
G[G.length]=[J.getFullYear(),J.getMonth()+1,J.getDate()];
}
}
}
}
return G;
},toDate:function(G){
return this._toDate(G);
},_toDate:function(G){
if(G instanceof Date){
return G;
}else{
return D.getDate(G[0],G[1]-1,G[2]);
}
},_fieldArraysAreEqual:function(I,H){
var G=false;
if(I[0]==H[0]&&I[1]==H[1]&&I[2]==H[2]){
G=true;
}
return G;
},_indexOfSelectedFieldArray:function(K){
var J=-1,G=this.cfg.getProperty(B.SELECTED.key);
for(var I=0;I<G.length;++I){
var H=G[I];
if(K[0]==H[0]&&K[1]==H[1]&&K[2]==H[2]){
J=I;
break;
}
}
return J;
},isDateOOM:function(G){
return (G.getMonth()!=this.cfg.getProperty(B.PAGEDATE.key).getMonth());
},isDateOOB:function(I){
var J=this.cfg.getProperty(B.MINDATE.key),K=this.cfg.getProperty(B.MAXDATE.key),H=D;
if(J){
J=H.clearTime(J);
}
if(K){
K=H.clearTime(K);
}
var G=new Date(I.getTime());
G=H.clearTime(G);
return ((J&&G.getTime()<J.getTime())||(K&&G.getTime()>K.getTime()));
},_parsePageDate:function(G){
var J;
if(G){
if(G instanceof Date){
J=D.findMonthStart(G);
}else{
var K,I,H;
H=G.split(this.cfg.getProperty(B.DATE_FIELD_DELIMITER.key));
K=parseInt(H[this.cfg.getProperty(B.MY_MONTH_POSITION.key)-1],10)-1;
I=parseInt(H[this.cfg.getProperty(B.MY_YEAR_POSITION.key)-1],10);
J=D.getDate(I,K,1);
}
}else{
J=D.getDate(this.today.getFullYear(),this.today.getMonth(),1);
}
return J;
},onBeforeSelect:function(){
if(this.cfg.getProperty(B.MULTI_SELECT.key)===false){
if(this.parent){
this.parent.callChildFunction("clearAllBodyCellStyles",this.Style.CSS_CELL_SELECTED);
this.parent.deselectAll();
}else{
this.clearAllBodyCellStyles(this.Style.CSS_CELL_SELECTED);
this.deselectAll();
}
}
},onSelect:function(G){
},onBeforeDeselect:function(){
},onDeselect:function(G){
},onChangePage:function(){
this.render();
},onRender:function(){
},onReset:function(){
this.render();
},onClear:function(){
this.render();
},validate:function(){
return true;
},_parseDate:function(I){
var J=I.split(this.Locale.DATE_FIELD_DELIMITER),G;
if(J.length==2){
G=[J[this.Locale.MD_MONTH_POSITION-1],J[this.Locale.MD_DAY_POSITION-1]];
G.type=F.MONTH_DAY;
}else{
G=[J[this.Locale.MDY_YEAR_POSITION-1],J[this.Locale.MDY_MONTH_POSITION-1],J[this.Locale.MDY_DAY_POSITION-1]];
G.type=F.DATE;
}
for(var H=0;H<G.length;H++){
G[H]=parseInt(G[H],10);
}
return G;
},_parseDates:function(H){
var O=[],N=H.split(this.Locale.DATE_DELIMITER);
for(var M=0;M<N.length;++M){
var L=N[M];
if(L.indexOf(this.Locale.DATE_RANGE_DELIMITER)!=-1){
var G=L.split(this.Locale.DATE_RANGE_DELIMITER),K=this._parseDate(G[0]),P=this._parseDate(G[1]),J=this._parseRange(K,P);
O=O.concat(J);
}else{
var I=this._parseDate(L);
O.push(I);
}
}
return O;
},_parseRange:function(G,K){
var H=D.add(D.getDate(G[0],G[1]-1,G[2]),D.DAY,1),J=D.getDate(K[0],K[1]-1,K[2]),I=[];
I.push(G);
while(H.getTime()<=J.getTime()){
I.push([H.getFullYear(),H.getMonth()+1,H.getDate()]);
H=D.add(H,D.DAY,1);
}
return I;
},resetRenderers:function(){
this.renderStack=this._renderStack.concat();
},removeRenderers:function(){
this._renderStack=[];
this.renderStack=[];
},clearElement:function(G){
G.innerHTML="&#160;";
G.className="";
},addRenderer:function(G,H){
var J=this._parseDates(G);
for(var I=0;I<J.length;++I){
var K=J[I];
if(K.length==2){
if(K[0] instanceof Array){
this._addRenderer(F.RANGE,K,H);
}else{
this._addRenderer(F.MONTH_DAY,K,H);
}
}else{
if(K.length==3){
this._addRenderer(F.DATE,K,H);
}
}
}
},_addRenderer:function(H,I,G){
var J=[H,I,G];
this.renderStack.unshift(J);
this._renderStack=this.renderStack.concat();
},addMonthRenderer:function(H,G){
this._addRenderer(F.MONTH,[H],G);
},addWeekdayRenderer:function(H,G){
this._addRenderer(F.WEEKDAY,[H],G);
},clearAllBodyCellStyles:function(G){
for(var H=0;H<this.cells.length;++H){
C.removeClass(this.cells[H],G);
}
},setMonth:function(I){
var G=B.PAGEDATE.key,H=this.cfg.getProperty(G);
H.setMonth(parseInt(I,10));
this.cfg.setProperty(G,H);
},setYear:function(H){
var G=B.PAGEDATE.key,I=this.cfg.getProperty(G);
I.setFullYear(parseInt(H,10));
this.cfg.setProperty(G,I);
},getSelectedDates:function(){
var I=[],H=this.cfg.getProperty(B.SELECTED.key);
for(var K=0;K<H.length;++K){
var J=H[K];
var G=D.getDate(J[0],J[1]-1,J[2]);
I.push(G);
}
I.sort(function(M,L){
return M-L;
});
return I;
},hide:function(){
if(this.beforeHideEvent.fire()){
this.oDomContainer.style.display="none";
this.hideEvent.fire();
}
},show:function(){
if(this.beforeShowEvent.fire()){
this.oDomContainer.style.display="block";
this.showEvent.fire();
}
},browser:(function(){
var G=navigator.userAgent.toLowerCase();
if(G.indexOf("opera")!=-1){
return "opera";
}else{
if(G.indexOf("msie 7")!=-1){
return "ie7";
}else{
if(G.indexOf("msie")!=-1){
return "ie";
}else{
if(G.indexOf("safari")!=-1){
return "safari";
}else{
if(G.indexOf("gecko")!=-1){
return "gecko";
}else{
return false;
}
}
}
}
}
})(),toString:function(){
return "Calendar "+this.id;
},destroy:function(){
if(this.beforeDestroyEvent.fire()){
var G=this;
if(G.navigator){
G.navigator.destroy();
}
if(G.cfg){
G.cfg.destroy();
}
A.purgeElement(G.oDomContainer,true);
C.removeClass(G.oDomContainer,"withtitle");
C.removeClass(G.oDomContainer,G.Style.CSS_CONTAINER);
C.removeClass(G.oDomContainer,G.Style.CSS_SINGLE);
G.oDomContainer.innerHTML="";
G.oDomContainer=null;
G.cells=null;
this.destroyEvent.fire();
}
}};
YAHOO.widget.Calendar=F;
YAHOO.widget.Calendar_Core=YAHOO.widget.Calendar;
YAHOO.widget.Cal_Core=YAHOO.widget.Calendar;
})();
(function(){
var D=YAHOO.util.Dom,F=YAHOO.widget.DateMath,A=YAHOO.util.Event,E=YAHOO.lang,G=YAHOO.widget.Calendar;
function B(J,H,I){
if(arguments.length>0){
this.init.apply(this,arguments);
}
};
B._DEFAULT_CONFIG=G._DEFAULT_CONFIG;
B._DEFAULT_CONFIG.PAGES={key:"pages",value:2};
var C=B._DEFAULT_CONFIG;
B.prototype={init:function(K,I,J){
var H=this._parseArgs(arguments);
K=H.id;
I=H.container;
J=H.config;
this.oDomContainer=D.get(I);
if(!this.oDomContainer.id){
this.oDomContainer.id=D.generateId();
}
if(!K){
K=this.oDomContainer.id+"_t";
}
this.id=K;
this.containerId=this.oDomContainer.id;
this.initEvents();
this.initStyles();
this.pages=[];
D.addClass(this.oDomContainer,B.CSS_CONTAINER);
D.addClass(this.oDomContainer,B.CSS_MULTI_UP);
this.cfg=new YAHOO.util.Config(this);
this.Options={};
this.Locale={};
this.setupConfig();
if(J){
this.cfg.applyConfig(J,true);
}
this.cfg.fireQueue();
if(YAHOO.env.ua.opera){
this.renderEvent.subscribe(this._fixWidth,this,true);
this.showEvent.subscribe(this._fixWidth,this,true);
}
},setupConfig:function(){
var H=this.cfg;
H.addProperty(C.PAGES.key,{value:C.PAGES.value,validator:H.checkNumber,handler:this.configPages});
H.addProperty(C.PAGEDATE.key,{value:new Date(),handler:this.configPageDate});
H.addProperty(C.SELECTED.key,{value:[],handler:this.configSelected});
H.addProperty(C.TITLE.key,{value:C.TITLE.value,handler:this.configTitle});
H.addProperty(C.CLOSE.key,{value:C.CLOSE.value,handler:this.configClose});
H.addProperty(C.IFRAME.key,{value:C.IFRAME.value,handler:this.configIframe,validator:H.checkBoolean});
H.addProperty(C.MINDATE.key,{value:C.MINDATE.value,handler:this.delegateConfig});
H.addProperty(C.MAXDATE.key,{value:C.MAXDATE.value,handler:this.delegateConfig});
H.addProperty(C.MULTI_SELECT.key,{value:C.MULTI_SELECT.value,handler:this.delegateConfig,validator:H.checkBoolean});
H.addProperty(C.START_WEEKDAY.key,{value:C.START_WEEKDAY.value,handler:this.delegateConfig,validator:H.checkNumber});
H.addProperty(C.SHOW_WEEKDAYS.key,{value:C.SHOW_WEEKDAYS.value,handler:this.delegateConfig,validator:H.checkBoolean});
H.addProperty(C.SHOW_WEEK_HEADER.key,{value:C.SHOW_WEEK_HEADER.value,handler:this.delegateConfig,validator:H.checkBoolean});
H.addProperty(C.SHOW_WEEK_FOOTER.key,{value:C.SHOW_WEEK_FOOTER.value,handler:this.delegateConfig,validator:H.checkBoolean});
H.addProperty(C.HIDE_BLANK_WEEKS.key,{value:C.HIDE_BLANK_WEEKS.value,handler:this.delegateConfig,validator:H.checkBoolean});
H.addProperty(C.NAV_ARROW_LEFT.key,{value:C.NAV_ARROW_LEFT.value,handler:this.delegateConfig});
H.addProperty(C.NAV_ARROW_RIGHT.key,{value:C.NAV_ARROW_RIGHT.value,handler:this.delegateConfig});
H.addProperty(C.MONTHS_SHORT.key,{value:C.MONTHS_SHORT.value,handler:this.delegateConfig});
H.addProperty(C.MONTHS_LONG.key,{value:C.MONTHS_LONG.value,handler:this.delegateConfig});
H.addProperty(C.WEEKDAYS_1CHAR.key,{value:C.WEEKDAYS_1CHAR.value,handler:this.delegateConfig});
H.addProperty(C.WEEKDAYS_SHORT.key,{value:C.WEEKDAYS_SHORT.value,handler:this.delegateConfig});
H.addProperty(C.WEEKDAYS_MEDIUM.key,{value:C.WEEKDAYS_MEDIUM.value,handler:this.delegateConfig});
H.addProperty(C.WEEKDAYS_LONG.key,{value:C.WEEKDAYS_LONG.value,handler:this.delegateConfig});
H.addProperty(C.LOCALE_MONTHS.key,{value:C.LOCALE_MONTHS.value,handler:this.delegateConfig});
H.addProperty(C.LOCALE_WEEKDAYS.key,{value:C.LOCALE_WEEKDAYS.value,handler:this.delegateConfig});
H.addProperty(C.DATE_DELIMITER.key,{value:C.DATE_DELIMITER.value,handler:this.delegateConfig});
H.addProperty(C.DATE_FIELD_DELIMITER.key,{value:C.DATE_FIELD_DELIMITER.value,handler:this.delegateConfig});
H.addProperty(C.DATE_RANGE_DELIMITER.key,{value:C.DATE_RANGE_DELIMITER.value,handler:this.delegateConfig});
H.addProperty(C.MY_MONTH_POSITION.key,{value:C.MY_MONTH_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});
H.addProperty(C.MY_YEAR_POSITION.key,{value:C.MY_YEAR_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});
H.addProperty(C.MD_MONTH_POSITION.key,{value:C.MD_MONTH_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});
H.addProperty(C.MD_DAY_POSITION.key,{value:C.MD_DAY_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});
H.addProperty(C.MDY_MONTH_POSITION.key,{value:C.MDY_MONTH_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});
H.addProperty(C.MDY_DAY_POSITION.key,{value:C.MDY_DAY_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});
H.addProperty(C.MDY_YEAR_POSITION.key,{value:C.MDY_YEAR_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});
H.addProperty(C.MY_LABEL_MONTH_POSITION.key,{value:C.MY_LABEL_MONTH_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});
H.addProperty(C.MY_LABEL_YEAR_POSITION.key,{value:C.MY_LABEL_YEAR_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});
H.addProperty(C.MY_LABEL_MONTH_SUFFIX.key,{value:C.MY_LABEL_MONTH_SUFFIX.value,handler:this.delegateConfig});
H.addProperty(C.MY_LABEL_YEAR_SUFFIX.key,{value:C.MY_LABEL_YEAR_SUFFIX.value,handler:this.delegateConfig});
H.addProperty(C.NAV.key,{value:C.NAV.value,handler:this.configNavigator});
H.addProperty(C.STRINGS.key,{value:C.STRINGS.value,handler:this.configStrings,validator:function(I){
return E.isObject(I);
},supercedes:C.STRINGS.supercedes});
},initEvents:function(){
var J=this,L="Event",M=YAHOO.util.CustomEvent;
var I=function(O,R,N){
for(var Q=0;Q<J.pages.length;++Q){
var P=J.pages[Q];
P[this.type+L].subscribe(O,R,N);
}
};
var H=function(N,Q){
for(var P=0;P<J.pages.length;++P){
var O=J.pages[P];
O[this.type+L].unsubscribe(N,Q);
}
};
var K=G._EVENT_TYPES;
J.beforeSelectEvent=new M(K.BEFORE_SELECT);
J.beforeSelectEvent.subscribe=I;
J.beforeSelectEvent.unsubscribe=H;
J.selectEvent=new M(K.SELECT);
J.selectEvent.subscribe=I;
J.selectEvent.unsubscribe=H;
J.beforeDeselectEvent=new M(K.BEFORE_DESELECT);
J.beforeDeselectEvent.subscribe=I;
J.beforeDeselectEvent.unsubscribe=H;
J.deselectEvent=new M(K.DESELECT);
J.deselectEvent.subscribe=I;
J.deselectEvent.unsubscribe=H;
J.changePageEvent=new M(K.CHANGE_PAGE);
J.changePageEvent.subscribe=I;
J.changePageEvent.unsubscribe=H;
J.beforeRenderEvent=new M(K.BEFORE_RENDER);
J.beforeRenderEvent.subscribe=I;
J.beforeRenderEvent.unsubscribe=H;
J.renderEvent=new M(K.RENDER);
J.renderEvent.subscribe=I;
J.renderEvent.unsubscribe=H;
J.resetEvent=new M(K.RESET);
J.resetEvent.subscribe=I;
J.resetEvent.unsubscribe=H;
J.clearEvent=new M(K.CLEAR);
J.clearEvent.subscribe=I;
J.clearEvent.unsubscribe=H;
J.beforeShowEvent=new M(K.BEFORE_SHOW);
J.showEvent=new M(K.SHOW);
J.beforeHideEvent=new M(K.BEFORE_HIDE);
J.hideEvent=new M(K.HIDE);
J.beforeShowNavEvent=new M(K.BEFORE_SHOW_NAV);
J.showNavEvent=new M(K.SHOW_NAV);
J.beforeHideNavEvent=new M(K.BEFORE_HIDE_NAV);
J.hideNavEvent=new M(K.HIDE_NAV);
J.beforeRenderNavEvent=new M(K.BEFORE_RENDER_NAV);
J.renderNavEvent=new M(K.RENDER_NAV);
J.beforeDestroyEvent=new M(K.BEFORE_DESTROY);
J.destroyEvent=new M(K.DESTROY);
},configPages:function(R,Q,N){
var L=Q[0],J=C.PAGEDATE.key,V="_",S="groupcal",U="first-of-type",K="last-of-type";
for(var I=0;I<L;++I){
var T=this.id+V+I,P=this.containerId+V+I,O=this.cfg.getConfig();
O.close=false;
O.title=false;
O.navigator=null;
var H=this.constructChild(T,P,O);
var M=H.cfg.getProperty(J);
this._setMonthOnDate(M,M.getMonth()+I);
H.cfg.setProperty(J,M);
D.removeClass(H.oDomContainer,this.Style.CSS_SINGLE);
D.addClass(H.oDomContainer,S);
if(I===0){
D.addClass(H.oDomContainer,U);
}
if(I==(L-1)){
D.addClass(H.oDomContainer,K);
}
H.parent=this;
H.index=I;
this.pages[this.pages.length]=H;
}
},configPageDate:function(O,N,L){
var J=N[0],M;
var K=C.PAGEDATE.key;
for(var I=0;I<this.pages.length;++I){
var H=this.pages[I];
if(I===0){
M=H._parsePageDate(J);
H.cfg.setProperty(K,M);
}else{
var P=new Date(M);
this._setMonthOnDate(P,P.getMonth()+I);
H.cfg.setProperty(K,P);
}
}
},configSelected:function(J,H,L){
var K=C.SELECTED.key;
this.delegateConfig(J,H,L);
var I=(this.pages.length>0)?this.pages[0].cfg.getProperty(K):[];
this.cfg.setProperty(K,I,true);
},delegateConfig:function(I,H,L){
var M=H[0];
var K;
for(var J=0;J<this.pages.length;J++){
K=this.pages[J];
K.cfg.setProperty(I,M);
}
},setChildFunction:function(K,I){
var H=this.cfg.getProperty(C.PAGES.key);
for(var J=0;J<H;++J){
this.pages[J][K]=I;
}
},callChildFunction:function(M,I){
var H=this.cfg.getProperty(C.PAGES.key);
for(var L=0;L<H;++L){
var K=this.pages[L];
if(K[M]){
var J=K[M];
J.call(K,I);
}
}
},constructChild:function(K,I,J){
var H=document.getElementById(I);
if(!H){
H=document.createElement("div");
H.id=I;
this.oDomContainer.appendChild(H);
}
return new G(K,I,J);
},setMonth:function(L){
L=parseInt(L,10);
var M;
var I=C.PAGEDATE.key;
for(var K=0;K<this.pages.length;++K){
var J=this.pages[K];
var H=J.cfg.getProperty(I);
if(K===0){
M=H.getFullYear();
}else{
H.setFullYear(M);
}
this._setMonthOnDate(H,L+K);
J.cfg.setProperty(I,H);
}
},setYear:function(J){
var I=C.PAGEDATE.key;
J=parseInt(J,10);
for(var L=0;L<this.pages.length;++L){
var K=this.pages[L];
var H=K.cfg.getProperty(I);
if((H.getMonth()+1)==1&&L>0){
J+=1;
}
K.setYear(J);
}
},render:function(){
this.renderHeader();
for(var I=0;I<this.pages.length;++I){
var H=this.pages[I];
H.render();
}
this.renderFooter();
},select:function(H){
for(var J=0;J<this.pages.length;++J){
var I=this.pages[J];
I.select(H);
}
return this.getSelectedDates();
},selectCell:function(H){
for(var J=0;J<this.pages.length;++J){
var I=this.pages[J];
I.selectCell(H);
}
return this.getSelectedDates();
},deselect:function(H){
for(var J=0;J<this.pages.length;++J){
var I=this.pages[J];
I.deselect(H);
}
return this.getSelectedDates();
},deselectAll:function(){
for(var I=0;I<this.pages.length;++I){
var H=this.pages[I];
H.deselectAll();
}
return this.getSelectedDates();
},deselectCell:function(H){
for(var J=0;J<this.pages.length;++J){
var I=this.pages[J];
I.deselectCell(H);
}
return this.getSelectedDates();
},reset:function(){
for(var I=0;I<this.pages.length;++I){
var H=this.pages[I];
H.reset();
}
},clear:function(){
for(var I=0;I<this.pages.length;++I){
var H=this.pages[I];
H.clear();
}
this.cfg.setProperty(C.SELECTED.key,[]);
this.cfg.setProperty(C.PAGEDATE.key,new Date(this.pages[0].today.getTime()));
this.render();
},nextMonth:function(){
for(var I=0;I<this.pages.length;++I){
var H=this.pages[I];
H.nextMonth();
}
},previousMonth:function(){
for(var I=this.pages.length-1;I>=0;--I){
var H=this.pages[I];
H.previousMonth();
}
},nextYear:function(){
for(var I=0;I<this.pages.length;++I){
var H=this.pages[I];
H.nextYear();
}
},previousYear:function(){
for(var I=0;I<this.pages.length;++I){
var H=this.pages[I];
H.previousYear();
}
},getSelectedDates:function(){
var J=[];
var I=this.cfg.getProperty(C.SELECTED.key);
for(var L=0;L<I.length;++L){
var K=I[L];
var H=F.getDate(K[0],K[1]-1,K[2]);
J.push(H);
}
J.sort(function(N,M){
return N-M;
});
return J;
},addRenderer:function(H,I){
for(var K=0;K<this.pages.length;++K){
var J=this.pages[K];
J.addRenderer(H,I);
}
},addMonthRenderer:function(K,H){
for(var J=0;J<this.pages.length;++J){
var I=this.pages[J];
I.addMonthRenderer(K,H);
}
},addWeekdayRenderer:function(I,H){
for(var K=0;K<this.pages.length;++K){
var J=this.pages[K];
J.addWeekdayRenderer(I,H);
}
},removeRenderers:function(){
this.callChildFunction("removeRenderers");
},renderHeader:function(){
},renderFooter:function(){
},addMonths:function(H){
this.callChildFunction("addMonths",H);
},subtractMonths:function(H){
this.callChildFunction("subtractMonths",H);
},addYears:function(H){
this.callChildFunction("addYears",H);
},subtractYears:function(H){
this.callChildFunction("subtractYears",H);
},getCalendarPage:function(K){
var M=null;
if(K){
var N=K.getFullYear(),J=K.getMonth();
var I=this.pages;
for(var L=0;L<I.length;++L){
var H=I[L].cfg.getProperty("pagedate");
if(H.getFullYear()===N&&H.getMonth()===J){
M=I[L];
break;
}
}
}
return M;
},_setMonthOnDate:function(I,J){
if(YAHOO.env.ua.webkit&&YAHOO.env.ua.webkit<420&&(J<0||J>11)){
var H=F.add(I,F.MONTH,J-I.getMonth());
I.setTime(H.getTime());
}else{
I.setMonth(J);
}
},_fixWidth:function(){
var H=0;
for(var J=0;J<this.pages.length;++J){
var I=this.pages[J];
H+=I.oDomContainer.offsetWidth;
}
if(H>0){
this.oDomContainer.style.width=H+"px";
}
},toString:function(){
return "CalendarGroup "+this.id;
},destroy:function(){
if(this.beforeDestroyEvent.fire()){
var J=this;
if(J.navigator){
J.navigator.destroy();
}
if(J.cfg){
J.cfg.destroy();
}
A.purgeElement(J.oDomContainer,true);
D.removeClass(J.oDomContainer,B.CSS_CONTAINER);
D.removeClass(J.oDomContainer,B.CSS_MULTI_UP);
for(var I=0,H=J.pages.length;I<H;I++){
J.pages[I].destroy();
J.pages[I]=null;
}
J.oDomContainer.innerHTML="";
J.oDomContainer=null;
this.destroyEvent.fire();
}
}};
B.CSS_CONTAINER="yui-calcontainer";
B.CSS_MULTI_UP="multi";
B.CSS_2UPTITLE="title";
B.CSS_2UPCLOSE="close-icon";
YAHOO.lang.augmentProto(B,G,"buildDayLabel","buildMonthLabel","renderOutOfBoundsDate","renderRowHeader","renderRowFooter","renderCellDefault","styleCellDefault","renderCellStyleHighlight1","renderCellStyleHighlight2","renderCellStyleHighlight3","renderCellStyleHighlight4","renderCellStyleToday","renderCellStyleSelected","renderCellNotThisMonth","renderBodyCellRestricted","initStyles","configTitle","configClose","configIframe","configStrings","configNavigator","createTitleBar","createCloseButton","removeTitleBar","removeCloseButton","hide","show","toDate","_toDate","_parseArgs","browser");
YAHOO.widget.CalGrp=B;
YAHOO.widget.CalendarGroup=B;
YAHOO.widget.Calendar2up=function(J,H,I){
this.init(J,H,I);
};
YAHOO.extend(YAHOO.widget.Calendar2up,B);
YAHOO.widget.Cal2up=YAHOO.widget.Calendar2up;
})();
YAHOO.widget.CalendarNavigator=function(A){
this.init(A);
};
(function(){
var A=YAHOO.widget.CalendarNavigator;
A.CLASSES={NAV:"yui-cal-nav",NAV_VISIBLE:"yui-cal-nav-visible",MASK:"yui-cal-nav-mask",YEAR:"yui-cal-nav-y",MONTH:"yui-cal-nav-m",BUTTONS:"yui-cal-nav-b",BUTTON:"yui-cal-nav-btn",ERROR:"yui-cal-nav-e",YEAR_CTRL:"yui-cal-nav-yc",MONTH_CTRL:"yui-cal-nav-mc",INVALID:"yui-invalid",DEFAULT:"yui-default"};
A._DEFAULT_CFG={strings:{month:"Month",year:"Year",submit:"Okay",cancel:"Cancel",invalidYear:"Year needs to be a number"},monthFormat:YAHOO.widget.Calendar.LONG,initialFocus:"year"};
A.ID_SUFFIX="_nav";
A.MONTH_SUFFIX="_month";
A.YEAR_SUFFIX="_year";
A.ERROR_SUFFIX="_error";
A.CANCEL_SUFFIX="_cancel";
A.SUBMIT_SUFFIX="_submit";
A.YR_MAX_DIGITS=4;
A.YR_MINOR_INC=1;
A.YR_MAJOR_INC=10;
A.UPDATE_DELAY=50;
A.YR_PATTERN=/^\d+$/;
A.TRIM=/^\s*(.*?)\s*$/;
})();
YAHOO.widget.CalendarNavigator.prototype={id:null,cal:null,navEl:null,maskEl:null,yearEl:null,monthEl:null,errorEl:null,submitEl:null,cancelEl:null,firstCtrl:null,lastCtrl:null,_doc:null,_year:null,_month:0,__rendered:false,init:function(A){
var C=A.oDomContainer;
this.cal=A;
this.id=C.id+YAHOO.widget.CalendarNavigator.ID_SUFFIX;
this._doc=C.ownerDocument;
var B=YAHOO.env.ua.ie;
this.__isIEQuirks=(B&&((B<=6)||(B===7&&this._doc.compatMode=="BackCompat")));
},show:function(){
var A=YAHOO.widget.CalendarNavigator.CLASSES;
if(this.cal.beforeShowNavEvent.fire()){
if(!this.__rendered){
this.render();
}
this.clearErrors();
this._updateMonthUI();
this._updateYearUI();
this._show(this.navEl,true);
this.setInitialFocus();
this.showMask();
YAHOO.util.Dom.addClass(this.cal.oDomContainer,A.NAV_VISIBLE);
this.cal.showNavEvent.fire();
}
},hide:function(){
var A=YAHOO.widget.CalendarNavigator.CLASSES;
if(this.cal.beforeHideNavEvent.fire()){
this._show(this.navEl,false);
this.hideMask();
YAHOO.util.Dom.removeClass(this.cal.oDomContainer,A.NAV_VISIBLE);
this.cal.hideNavEvent.fire();
}
},showMask:function(){
this._show(this.maskEl,true);
if(this.__isIEQuirks){
this._syncMask();
}
},hideMask:function(){
this._show(this.maskEl,false);
},getMonth:function(){
return this._month;
},getYear:function(){
return this._year;
},setMonth:function(A){
if(A>=0&&A<12){
this._month=A;
}
this._updateMonthUI();
},setYear:function(B){
var A=YAHOO.widget.CalendarNavigator.YR_PATTERN;
if(YAHOO.lang.isNumber(B)&&A.test(B+"")){
this._year=B;
}
this._updateYearUI();
},render:function(){
this.cal.beforeRenderNavEvent.fire();
if(!this.__rendered){
this.createNav();
this.createMask();
this.applyListeners();
this.__rendered=true;
}
this.cal.renderNavEvent.fire();
},createNav:function(){
var B=YAHOO.widget.CalendarNavigator;
var C=this._doc;
var D=C.createElement("div");
D.className=B.CLASSES.NAV;
var A=this.renderNavContents([]);
D.innerHTML=A.join("");
this.cal.oDomContainer.appendChild(D);
this.navEl=D;
this.yearEl=C.getElementById(this.id+B.YEAR_SUFFIX);
this.monthEl=C.getElementById(this.id+B.MONTH_SUFFIX);
this.errorEl=C.getElementById(this.id+B.ERROR_SUFFIX);
this.submitEl=C.getElementById(this.id+B.SUBMIT_SUFFIX);
this.cancelEl=C.getElementById(this.id+B.CANCEL_SUFFIX);
if(YAHOO.env.ua.gecko&&this.yearEl&&this.yearEl.type=="text"){
this.yearEl.setAttribute("autocomplete","off");
}
this._setFirstLastElements();
},createMask:function(){
var B=YAHOO.widget.CalendarNavigator.CLASSES;
var A=this._doc.createElement("div");
A.className=B.MASK;
this.cal.oDomContainer.appendChild(A);
this.maskEl=A;
},_syncMask:function(){
var B=this.cal.oDomContainer;
if(B&&this.maskEl){
var A=YAHOO.util.Dom.getRegion(B);
YAHOO.util.Dom.setStyle(this.maskEl,"width",A.right-A.left+"px");
YAHOO.util.Dom.setStyle(this.maskEl,"height",A.bottom-A.top+"px");
}
},renderNavContents:function(A){
var D=YAHOO.widget.CalendarNavigator,E=D.CLASSES,B=A;
B[B.length]="<div class=\""+E.MONTH+"\">";
this.renderMonth(B);
B[B.length]="</div>";
B[B.length]="<div class=\""+E.YEAR+"\">";
this.renderYear(B);
B[B.length]="</div>";
B[B.length]="<div class=\""+E.BUTTONS+"\">";
this.renderButtons(B);
B[B.length]="</div>";
B[B.length]="<div class=\""+E.ERROR+"\" id=\""+this.id+D.ERROR_SUFFIX+"\"></div>";
return B;
},renderMonth:function(D){
var G=YAHOO.widget.CalendarNavigator,H=G.CLASSES;
var I=this.id+G.MONTH_SUFFIX,F=this.__getCfg("monthFormat"),A=this.cal.cfg.getProperty((F==YAHOO.widget.Calendar.SHORT)?"MONTHS_SHORT":"MONTHS_LONG"),E=D;
if(A&&A.length>0){
E[E.length]="<label for=\""+I+"\">";
E[E.length]=this.__getCfg("month",true);
E[E.length]="</label>";
E[E.length]="<select name=\""+I+"\" id=\""+I+"\" class=\""+H.MONTH_CTRL+"\">";
for(var B=0;B<A.length;B++){
E[E.length]="<option value=\""+B+"\">";
E[E.length]=A[B];
E[E.length]="</option>";
}
E[E.length]="</select>";
}
return E;
},renderYear:function(B){
var E=YAHOO.widget.CalendarNavigator,F=E.CLASSES;
var G=this.id+E.YEAR_SUFFIX,A=E.YR_MAX_DIGITS,D=B;
D[D.length]="<label for=\""+G+"\">";
D[D.length]=this.__getCfg("year",true);
D[D.length]="</label>";
D[D.length]="<input type=\"text\" name=\""+G+"\" id=\""+G+"\" class=\""+F.YEAR_CTRL+"\" maxlength=\""+A+"\"/>";
return D;
},renderButtons:function(A){
var D=YAHOO.widget.CalendarNavigator.CLASSES;
var B=A;
B[B.length]="<span class=\""+D.BUTTON+" "+D.DEFAULT+"\">";
B[B.length]="<button type=\"button\" id=\""+this.id+"_submit"+"\">";
B[B.length]=this.__getCfg("submit",true);
B[B.length]="</button>";
B[B.length]="</span>";
B[B.length]="<span class=\""+D.BUTTON+"\">";
B[B.length]="<button type=\"button\" id=\""+this.id+"_cancel"+"\">";
B[B.length]=this.__getCfg("cancel",true);
B[B.length]="</button>";
B[B.length]="</span>";
return B;
},applyListeners:function(){
var B=YAHOO.util.Event;
function A(){
if(this.validate()){
this.setYear(this._getYearFromUI());
}
};
function C(){
this.setMonth(this._getMonthFromUI());
};
B.on(this.submitEl,"click",this.submit,this,true);
B.on(this.cancelEl,"click",this.cancel,this,true);
B.on(this.yearEl,"blur",A,this,true);
B.on(this.monthEl,"change",C,this,true);
if(this.__isIEQuirks){
YAHOO.util.Event.on(this.cal.oDomContainer,"resize",this._syncMask,this,true);
}
this.applyKeyListeners();
},purgeListeners:function(){
var A=YAHOO.util.Event;
A.removeListener(this.submitEl,"click",this.submit);
A.removeListener(this.cancelEl,"click",this.cancel);
A.removeListener(this.yearEl,"blur");
A.removeListener(this.monthEl,"change");
if(this.__isIEQuirks){
A.removeListener(this.cal.oDomContainer,"resize",this._syncMask);
}
this.purgeKeyListeners();
},applyKeyListeners:function(){
var D=YAHOO.util.Event,A=YAHOO.env.ua;
var C=(A.ie||A.webkit)?"keydown":"keypress";
var B=(A.ie||A.opera||A.webkit)?"keydown":"keypress";
D.on(this.yearEl,"keypress",this._handleEnterKey,this,true);
D.on(this.yearEl,C,this._handleDirectionKeys,this,true);
D.on(this.lastCtrl,B,this._handleTabKey,this,true);
D.on(this.firstCtrl,B,this._handleShiftTabKey,this,true);
},purgeKeyListeners:function(){
var D=YAHOO.util.Event,A=YAHOO.env.ua;
var C=(A.ie||A.webkit)?"keydown":"keypress";
var B=(A.ie||A.opera||A.webkit)?"keydown":"keypress";
D.removeListener(this.yearEl,"keypress",this._handleEnterKey);
D.removeListener(this.yearEl,C,this._handleDirectionKeys);
D.removeListener(this.lastCtrl,B,this._handleTabKey);
D.removeListener(this.firstCtrl,B,this._handleShiftTabKey);
},submit:function(){
if(this.validate()){
this.hide();
this.setMonth(this._getMonthFromUI());
this.setYear(this._getYearFromUI());
var B=this.cal;
var A=YAHOO.widget.CalendarNavigator.UPDATE_DELAY;
if(A>0){
var C=this;
window.setTimeout(function(){
C._update(B);
},A);
}else{
this._update(B);
}
}
},_update:function(A){
A.setYear(this.getYear());
A.setMonth(this.getMonth());
A.render();
},cancel:function(){
this.hide();
},validate:function(){
if(this._getYearFromUI()!==null){
this.clearErrors();
return true;
}else{
this.setYearError();
this.setError(this.__getCfg("invalidYear",true));
return false;
}
},setError:function(A){
if(this.errorEl){
this.errorEl.innerHTML=A;
this._show(this.errorEl,true);
}
},clearError:function(){
if(this.errorEl){
this.errorEl.innerHTML="";
this._show(this.errorEl,false);
}
},setYearError:function(){
YAHOO.util.Dom.addClass(this.yearEl,YAHOO.widget.CalendarNavigator.CLASSES.INVALID);
},clearYearError:function(){
YAHOO.util.Dom.removeClass(this.yearEl,YAHOO.widget.CalendarNavigator.CLASSES.INVALID);
},clearErrors:function(){
this.clearError();
this.clearYearError();
},setInitialFocus:function(){
var A=this.submitEl,C=this.__getCfg("initialFocus");
if(C&&C.toLowerCase){
C=C.toLowerCase();
if(C=="year"){
A=this.yearEl;
try{
this.yearEl.select();
}
catch(B){
}
}else{
if(C=="month"){
A=this.monthEl;
}
}
}
if(A&&YAHOO.lang.isFunction(A.focus)){
try{
A.focus();
}
catch(D){
}
}
},erase:function(){
if(this.__rendered){
this.purgeListeners();
this.yearEl=null;
this.monthEl=null;
this.errorEl=null;
this.submitEl=null;
this.cancelEl=null;
this.firstCtrl=null;
this.lastCtrl=null;
if(this.navEl){
this.navEl.innerHTML="";
}
var B=this.navEl.parentNode;
if(B){
B.removeChild(this.navEl);
}
this.navEl=null;
var A=this.maskEl.parentNode;
if(A){
A.removeChild(this.maskEl);
}
this.maskEl=null;
this.__rendered=false;
}
},destroy:function(){
this.erase();
this._doc=null;
this.cal=null;
this.id=null;
},_show:function(B,A){
if(B){
YAHOO.util.Dom.setStyle(B,"display",(A)?"block":"none");
}
},_getMonthFromUI:function(){
if(this.monthEl){
return this.monthEl.selectedIndex;
}else{
return 0;
}
},_getYearFromUI:function(){
var B=YAHOO.widget.CalendarNavigator;
var A=null;
if(this.yearEl){
var C=this.yearEl.value;
C=C.replace(B.TRIM,"$1");
if(B.YR_PATTERN.test(C)){
A=parseInt(C,10);
}
}
return A;
},_updateYearUI:function(){
if(this.yearEl&&this._year!==null){
this.yearEl.value=this._year;
}
},_updateMonthUI:function(){
if(this.monthEl){
this.monthEl.selectedIndex=this._month;
}
},_setFirstLastElements:function(){
this.firstCtrl=this.monthEl;
this.lastCtrl=this.cancelEl;
if(this.__isMac){
if(YAHOO.env.ua.webkit&&YAHOO.env.ua.webkit<420){
this.firstCtrl=this.monthEl;
this.lastCtrl=this.yearEl;
}
if(YAHOO.env.ua.gecko){
this.firstCtrl=this.yearEl;
this.lastCtrl=this.yearEl;
}
}
},_handleEnterKey:function(B){
var A=YAHOO.util.KeyListener.KEY;
if(YAHOO.util.Event.getCharCode(B)==A.ENTER){
YAHOO.util.Event.preventDefault(B);
this.submit();
}
},_handleDirectionKeys:function(H){
var G=YAHOO.util.Event,A=YAHOO.util.KeyListener.KEY,D=YAHOO.widget.CalendarNavigator;
var F=(this.yearEl.value)?parseInt(this.yearEl.value,10):null;
if(isFinite(F)){
var B=false;
switch(G.getCharCode(H)){
case A.UP:
this.yearEl.value=F+D.YR_MINOR_INC;
B=true;
break;
case A.DOWN:
this.yearEl.value=Math.max(F-D.YR_MINOR_INC,0);
B=true;
break;
case A.PAGE_UP:
this.yearEl.value=F+D.YR_MAJOR_INC;
B=true;
break;
case A.PAGE_DOWN:
this.yearEl.value=Math.max(F-D.YR_MAJOR_INC,0);
B=true;
break;
default:
break;
}
if(B){
G.preventDefault(H);
try{
this.yearEl.select();
}
catch(C){
}
}
}
},_handleTabKey:function(D){
var C=YAHOO.util.Event,A=YAHOO.util.KeyListener.KEY;
if(C.getCharCode(D)==A.TAB&&!D.shiftKey){
try{
C.preventDefault(D);
this.firstCtrl.focus();
}
catch(B){
}
}
},_handleShiftTabKey:function(D){
var C=YAHOO.util.Event,A=YAHOO.util.KeyListener.KEY;
if(D.shiftKey&&C.getCharCode(D)==A.TAB){
try{
C.preventDefault(D);
this.lastCtrl.focus();
}
catch(B){
}
}
},__getCfg:function(D,B){
var C=YAHOO.widget.CalendarNavigator._DEFAULT_CFG;
var A=this.cal.cfg.getProperty("navigator");
if(B){
return (A!==true&&A.strings&&A.strings[D])?A.strings[D]:C.strings[D];
}else{
return (A!==true&&A[D])?A[D]:C[D];
}
},__isMac:(navigator.userAgent.toLowerCase().indexOf("macintosh")!=-1)};
YAHOO.register("calendar",YAHOO.widget.Calendar,{version:"2.6.0",build:"1321"});
YAHOO.util.Connect={_msxml_progid:["Microsoft.XMLHTTP","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"],_http_headers:{},_has_http_headers:false,_use_default_post_header:true,_default_post_header:"application/x-www-form-urlencoded; charset=UTF-8",_default_form_header:"application/x-www-form-urlencoded",_use_default_xhr_header:true,_default_xhr_header:"XMLHttpRequest",_has_default_headers:true,_default_headers:{},_isFormSubmit:false,_isFileUpload:false,_formNode:null,_sFormData:null,_poll:{},_timeOut:{},_polling_interval:50,_transaction_id:0,_submitElementValue:null,_hasSubmitListener:(function(){
if(YAHOO.util.Event){
YAHOO.util.Event.addListener(document,"click",function(B){
var A=YAHOO.util.Event.getTarget(B);
if(A.nodeName.toLowerCase()=="input"&&(A.type&&A.type.toLowerCase()=="submit")){
YAHOO.util.Connect._submitElementValue=encodeURIComponent(A.name)+"="+encodeURIComponent(A.value);
}
});
return true;
}
return false;
})(),startEvent:new YAHOO.util.CustomEvent("start"),completeEvent:new YAHOO.util.CustomEvent("complete"),successEvent:new YAHOO.util.CustomEvent("success"),failureEvent:new YAHOO.util.CustomEvent("failure"),uploadEvent:new YAHOO.util.CustomEvent("upload"),abortEvent:new YAHOO.util.CustomEvent("abort"),_customEvents:{onStart:["startEvent","start"],onComplete:["completeEvent","complete"],onSuccess:["successEvent","success"],onFailure:["failureEvent","failure"],onUpload:["uploadEvent","upload"],onAbort:["abortEvent","abort"]},setProgId:function(A){
this._msxml_progid.unshift(A);
},setDefaultPostHeader:function(A){
if(typeof A=="string"){
this._default_post_header=A;
}else{
if(typeof A=="boolean"){
this._use_default_post_header=A;
}
}
},setDefaultXhrHeader:function(A){
if(typeof A=="string"){
this._default_xhr_header=A;
}else{
this._use_default_xhr_header=A;
}
},setPollingInterval:function(A){
if(typeof A=="number"&&isFinite(A)){
this._polling_interval=A;
}
},createXhrObject:function(F){
var E,A;
try{
A=new XMLHttpRequest();
E={conn:A,tId:F};
}
catch(D){
for(var B=0;B<this._msxml_progid.length;++B){
try{
A=new ActiveXObject(this._msxml_progid[B]);
E={conn:A,tId:F};
break;
}
catch(C){
}
}
}
finally{
return E;
}
},getConnectionObject:function(A){
var C;
var D=this._transaction_id;
try{
if(!A){
C=this.createXhrObject(D);
}else{
C={};
C.tId=D;
C.isUpload=true;
}
if(C){
this._transaction_id++;
}
}
catch(B){
}
finally{
return C;
}
},asyncRequest:function(F,C,E,A){
var D=(this._isFileUpload)?this.getConnectionObject(true):this.getConnectionObject();
var B=(E&&E.argument)?E.argument:null;
if(!D){
return null;
}else{
if(E&&E.customevents){
this.initCustomEvents(D,E);
}
if(this._isFormSubmit){
if(this._isFileUpload){
this.uploadFile(D,E,C,A);
return D;
}
if(F.toUpperCase()=="GET"){
if(this._sFormData.length!==0){
C+=((C.indexOf("?")==-1)?"?":"&")+this._sFormData;
}
}else{
if(F.toUpperCase()=="POST"){
A=A?this._sFormData+"&"+A:this._sFormData;
}
}
}
if(F.toUpperCase()=="GET"&&(E&&E.cache===false)){
C+=((C.indexOf("?")==-1)?"?":"&")+"rnd="+new Date().valueOf().toString();
}
D.conn.open(F,C,true);
if(this._use_default_xhr_header){
if(!this._default_headers["X-Requested-With"]){
this.initHeader("X-Requested-With",this._default_xhr_header,true);
}
}
if((F.toUpperCase()==="POST"&&this._use_default_post_header)&&this._isFormSubmit===false){
this.initHeader("Content-Type",this._default_post_header);
}
if(this._has_default_headers||this._has_http_headers){
this.setHeader(D);
}
this.handleReadyState(D,E);
D.conn.send(A||"");
if(this._isFormSubmit===true){
this.resetFormState();
}
this.startEvent.fire(D,B);
if(D.startEvent){
D.startEvent.fire(D,B);
}
return D;
}
},initCustomEvents:function(A,C){
var B;
for(B in C.customevents){
if(this._customEvents[B][0]){
A[this._customEvents[B][0]]=new YAHOO.util.CustomEvent(this._customEvents[B][1],(C.scope)?C.scope:null);
A[this._customEvents[B][0]].subscribe(C.customevents[B]);
}
}
},handleReadyState:function(C,D){
var B=this;
var A=(D&&D.argument)?D.argument:null;
if(D&&D.timeout){
this._timeOut[C.tId]=window.setTimeout(function(){
B.abort(C,D,true);
},D.timeout);
}
this._poll[C.tId]=window.setInterval(function(){
if(C.conn&&C.conn.readyState===4){
window.clearInterval(B._poll[C.tId]);
delete B._poll[C.tId];
if(D&&D.timeout){
window.clearTimeout(B._timeOut[C.tId]);
delete B._timeOut[C.tId];
}
B.completeEvent.fire(C,A);
if(C.completeEvent){
C.completeEvent.fire(C,A);
}
B.handleTransactionResponse(C,D);
}
},this._polling_interval);
},handleTransactionResponse:function(F,G,A){
var D,C;
var B=(G&&G.argument)?G.argument:null;
try{
if(F.conn.status!==undefined&&F.conn.status!==0){
D=F.conn.status;
}else{
D=13030;
}
}
catch(E){
D=13030;
}
if(D>=200&&D<300||D===1223){
C=this.createResponseObject(F,B);
if(G&&G.success){
if(!G.scope){
G.success(C);
}else{
G.success.apply(G.scope,[C]);
}
}
this.successEvent.fire(C);
if(F.successEvent){
F.successEvent.fire(C);
}
}else{
switch(D){
case 12002:
case 12029:
case 12030:
case 12031:
case 12152:
case 13030:
C=this.createExceptionObject(F.tId,B,(A?A:false));
if(G&&G.failure){
if(!G.scope){
G.failure(C);
}else{
G.failure.apply(G.scope,[C]);
}
}
break;
default:
C=this.createResponseObject(F,B);
if(G&&G.failure){
if(!G.scope){
G.failure(C);
}else{
G.failure.apply(G.scope,[C]);
}
}
}
this.failureEvent.fire(C);
if(F.failureEvent){
F.failureEvent.fire(C);
}
}
this.releaseObject(F);
C=null;
},createResponseObject:function(A,G){
var D={};
var I={};
try{
var C=A.conn.getAllResponseHeaders();
var F=C.split("\n");
for(var E=0;E<F.length;E++){
var B=F[E].indexOf(":");
if(B!=-1){
I[F[E].substring(0,B)]=F[E].substring(B+2);
}
}
}
catch(H){
}
D.tId=A.tId;
D.status=(A.conn.status==1223)?204:A.conn.status;
D.statusText=(A.conn.status==1223)?"No Content":A.conn.statusText;
D.getResponseHeader=I;
D.getAllResponseHeaders=C;
D.responseText=A.conn.responseText;
D.responseXML=A.conn.responseXML;
if(G){
D.argument=G;
}
return D;
},createExceptionObject:function(H,D,A){
var F=0;
var G="communication failure";
var C=-1;
var B="transaction aborted";
var E={};
E.tId=H;
if(A){
E.status=C;
E.statusText=B;
}else{
E.status=F;
E.statusText=G;
}
if(D){
E.argument=D;
}
return E;
},initHeader:function(A,D,C){
var B=(C)?this._default_headers:this._http_headers;
B[A]=D;
if(C){
this._has_default_headers=true;
}else{
this._has_http_headers=true;
}
},setHeader:function(A){
var B;
if(this._has_default_headers){
for(B in this._default_headers){
if(YAHOO.lang.hasOwnProperty(this._default_headers,B)){
A.conn.setRequestHeader(B,this._default_headers[B]);
}
}
}
if(this._has_http_headers){
for(B in this._http_headers){
if(YAHOO.lang.hasOwnProperty(this._http_headers,B)){
A.conn.setRequestHeader(B,this._http_headers[B]);
}
}
delete this._http_headers;
this._http_headers={};
this._has_http_headers=false;
}
},resetDefaultHeaders:function(){
delete this._default_headers;
this._default_headers={};
this._has_default_headers=false;
},setForm:function(M,H,C){
var L,B,K,I,P,J=false,F=[],O=0,E,G,D,N,A;
this.resetFormState();
if(typeof M=="string"){
L=(document.getElementById(M)||document.forms[M]);
}else{
if(typeof M=="object"){
L=M;
}else{
return;
}
}
if(H){
this.createFrame(C?C:null);
this._isFormSubmit=true;
this._isFileUpload=true;
this._formNode=L;
return;
}
for(E=0,G=L.elements.length;E<G;++E){
B=L.elements[E];
P=B.disabled;
K=B.name;
if(!P&&K){
K=encodeURIComponent(K)+"=";
I=encodeURIComponent(B.value);
switch(B.type){
case "select-one":
if(B.selectedIndex>-1){
A=B.options[B.selectedIndex];
F[O++]=K+encodeURIComponent((A.attributes.value&&A.attributes.value.specified)?A.value:A.text);
}
break;
case "select-multiple":
if(B.selectedIndex>-1){
for(D=B.selectedIndex,N=B.options.length;D<N;++D){
A=B.options[D];
if(A.selected){
F[O++]=K+encodeURIComponent((A.attributes.value&&A.attributes.value.specified)?A.value:A.text);
}
}
}
break;
case "radio":
case "checkbox":
if(B.checked){
F[O++]=K+I;
}
break;
case "file":
case undefined:
case "reset":
case "button":
break;
case "submit":
if(J===false){
if(this._hasSubmitListener&&this._submitElementValue){
F[O++]=this._submitElementValue;
}else{
F[O++]=K+I;
}
J=true;
}
break;
default:
F[O++]=K+I;
}
}
}
this._isFormSubmit=true;
this._sFormData=F.join("&");
this.initHeader("Content-Type",this._default_form_header);
return this._sFormData;
},resetFormState:function(){
this._isFormSubmit=false;
this._isFileUpload=false;
this._formNode=null;
this._sFormData="";
},createFrame:function(A){
var B="yuiIO"+this._transaction_id;
var C;
if(YAHOO.env.ua.ie){
C=document.createElement("<iframe id=\""+B+"\" name=\""+B+"\" />");
if(typeof A=="boolean"){
C.src="javascript:false";
}
}else{
C=document.createElement("iframe");
C.id=B;
C.name=B;
}
C.style.position="absolute";
C.style.top="-1000px";
C.style.left="-1000px";
document.body.appendChild(C);
},appendPostData:function(A){
var D=[],B=A.split("&"),C,E;
for(C=0;C<B.length;C++){
E=B[C].indexOf("=");
if(E!=-1){
D[C]=document.createElement("input");
D[C].type="hidden";
D[C].name=decodeURIComponent(B[C].substring(0,E));
D[C].value=decodeURIComponent(B[C].substring(E+1));
this._formNode.appendChild(D[C]);
}
}
return D;
},uploadFile:function(D,N,E,C){
var I="yuiIO"+D.tId,J="multipart/form-data",L=document.getElementById(I),O=this,K=(N&&N.argument)?N.argument:null,M,H,B,G;
var A={action:this._formNode.getAttribute("action"),method:this._formNode.getAttribute("method"),target:this._formNode.getAttribute("target")};
this._formNode.setAttribute("action",E);
this._formNode.setAttribute("method","POST");
this._formNode.setAttribute("target",I);
if(YAHOO.env.ua.ie){
this._formNode.setAttribute("encoding",J);
}else{
this._formNode.setAttribute("enctype",J);
}
if(C){
M=this.appendPostData(C);
}
this._formNode.submit();
this.startEvent.fire(D,K);
if(D.startEvent){
D.startEvent.fire(D,K);
}
if(N&&N.timeout){
this._timeOut[D.tId]=window.setTimeout(function(){
O.abort(D,N,true);
},N.timeout);
}
if(M&&M.length>0){
for(H=0;H<M.length;H++){
this._formNode.removeChild(M[H]);
}
}
for(B in A){
if(YAHOO.lang.hasOwnProperty(A,B)){
if(A[B]){
this._formNode.setAttribute(B,A[B]);
}else{
this._formNode.removeAttribute(B);
}
}
}
this.resetFormState();
var F=function(){
if(N&&N.timeout){
window.clearTimeout(O._timeOut[D.tId]);
delete O._timeOut[D.tId];
}
O.completeEvent.fire(D,K);
if(D.completeEvent){
D.completeEvent.fire(D,K);
}
G={tId:D.tId,argument:N.argument};
try{
G.responseText=L.contentWindow.document.body?L.contentWindow.document.body.innerHTML:L.contentWindow.document.documentElement.textContent;
G.responseXML=L.contentWindow.document.XMLDocument?L.contentWindow.document.XMLDocument:L.contentWindow.document;
}
catch(P){
}
if(N&&N.upload){
if(!N.scope){
N.upload(G);
}else{
N.upload.apply(N.scope,[G]);
}
}
O.uploadEvent.fire(G);
if(D.uploadEvent){
D.uploadEvent.fire(G);
}
YAHOO.util.Event.removeListener(L,"load",F);
setTimeout(function(){
document.body.removeChild(L);
O.releaseObject(D);
},100);
};
YAHOO.util.Event.addListener(L,"load",F);
},abort:function(E,G,A){
var D;
var B=(G&&G.argument)?G.argument:null;
if(E&&E.conn){
if(this.isCallInProgress(E)){
E.conn.abort();
window.clearInterval(this._poll[E.tId]);
delete this._poll[E.tId];
if(A){
window.clearTimeout(this._timeOut[E.tId]);
delete this._timeOut[E.tId];
}
D=true;
}
}else{
if(E&&E.isUpload===true){
var C="yuiIO"+E.tId;
var F=document.getElementById(C);
if(F){
YAHOO.util.Event.removeListener(F,"load");
document.body.removeChild(F);
if(A){
window.clearTimeout(this._timeOut[E.tId]);
delete this._timeOut[E.tId];
}
D=true;
}
}else{
D=false;
}
}
if(D===true){
this.abortEvent.fire(E,B);
if(E.abortEvent){
E.abortEvent.fire(E,B);
}
this.handleTransactionResponse(E,G,true);
}
return D;
},isCallInProgress:function(B){
if(B&&B.conn){
return B.conn.readyState!==4&&B.conn.readyState!==0;
}else{
if(B&&B.isUpload===true){
var A="yuiIO"+B.tId;
return document.getElementById(A)?true:false;
}else{
return false;
}
}
},releaseObject:function(A){
if(A&&A.conn){
A.conn=null;
A=null;
}
}};
YAHOO.register("connection",YAHOO.util.Connect,{version:"2.6.0",build:"1321"});
(function(){
YAHOO.util.Config=function(D){
if(D){
this.init(D);
}
};
var B=YAHOO.lang,C=YAHOO.util.CustomEvent,A=YAHOO.util.Config;
A.CONFIG_CHANGED_EVENT="configChanged";
A.BOOLEAN_TYPE="boolean";
A.prototype={owner:null,queueInProgress:false,config:null,initialConfig:null,eventQueue:null,configChangedEvent:null,init:function(D){
this.owner=D;
this.configChangedEvent=this.createEvent(A.CONFIG_CHANGED_EVENT);
this.configChangedEvent.signature=C.LIST;
this.queueInProgress=false;
this.config={};
this.initialConfig={};
this.eventQueue=[];
},checkBoolean:function(D){
return (typeof D==A.BOOLEAN_TYPE);
},checkNumber:function(D){
return (!isNaN(D));
},fireEvent:function(D,F){
var E=this.config[D];
if(E&&E.event){
E.event.fire(F);
}
},addProperty:function(E,D){
E=E.toLowerCase();
this.config[E]=D;
D.event=this.createEvent(E,{scope:this.owner});
D.event.signature=C.LIST;
D.key=E;
if(D.handler){
D.event.subscribe(D.handler,this.owner);
}
this.setProperty(E,D.value,true);
if(!D.suppressEvent){
this.queueProperty(E,D.value);
}
},getConfig:function(){
var D={},F=this.config,G,E;
for(G in F){
if(B.hasOwnProperty(F,G)){
E=F[G];
if(E&&E.event){
D[G]=E.value;
}
}
}
return D;
},getProperty:function(D){
var E=this.config[D.toLowerCase()];
if(E&&E.event){
return E.value;
}else{
return undefined;
}
},resetProperty:function(D){
D=D.toLowerCase();
var E=this.config[D];
if(E&&E.event){
if(this.initialConfig[D]&&!B.isUndefined(this.initialConfig[D])){
this.setProperty(D,this.initialConfig[D]);
return true;
}
}else{
return false;
}
},setProperty:function(E,G,D){
var F;
E=E.toLowerCase();
if(this.queueInProgress&&!D){
this.queueProperty(E,G);
return true;
}else{
F=this.config[E];
if(F&&F.event){
if(F.validator&&!F.validator(G)){
return false;
}else{
F.value=G;
if(!D){
this.fireEvent(E,G);
this.configChangedEvent.fire([E,G]);
}
return true;
}
}else{
return false;
}
}
},queueProperty:function(S,P){
S=S.toLowerCase();
var R=this.config[S],K=false,J,G,H,I,O,Q,F,M,N,D,L,T,E;
if(R&&R.event){
if(!B.isUndefined(P)&&R.validator&&!R.validator(P)){
return false;
}else{
if(!B.isUndefined(P)){
R.value=P;
}else{
P=R.value;
}
K=false;
J=this.eventQueue.length;
for(L=0;L<J;L++){
G=this.eventQueue[L];
if(G){
H=G[0];
I=G[1];
if(H==S){
this.eventQueue[L]=null;
this.eventQueue.push([S,(!B.isUndefined(P)?P:I)]);
K=true;
break;
}
}
}
if(!K&&!B.isUndefined(P)){
this.eventQueue.push([S,P]);
}
}
if(R.supercedes){
O=R.supercedes.length;
for(T=0;T<O;T++){
Q=R.supercedes[T];
F=this.eventQueue.length;
for(E=0;E<F;E++){
M=this.eventQueue[E];
if(M){
N=M[0];
D=M[1];
if(N==Q.toLowerCase()){
this.eventQueue.push([N,D]);
this.eventQueue[E]=null;
break;
}
}
}
}
}
return true;
}else{
return false;
}
},refireEvent:function(D){
D=D.toLowerCase();
var E=this.config[D];
if(E&&E.event&&!B.isUndefined(E.value)){
if(this.queueInProgress){
this.queueProperty(D);
}else{
this.fireEvent(D,E.value);
}
}
},applyConfig:function(D,G){
var F,E;
if(G){
E={};
for(F in D){
if(B.hasOwnProperty(D,F)){
E[F.toLowerCase()]=D[F];
}
}
this.initialConfig=E;
}
for(F in D){
if(B.hasOwnProperty(D,F)){
this.queueProperty(F,D[F]);
}
}
},refresh:function(){
var D;
for(D in this.config){
if(B.hasOwnProperty(this.config,D)){
this.refireEvent(D);
}
}
},fireQueue:function(){
var E,H,D,G,F;
this.queueInProgress=true;
for(E=0;E<this.eventQueue.length;E++){
H=this.eventQueue[E];
if(H){
D=H[0];
G=H[1];
F=this.config[D];
F.value=G;
this.eventQueue[E]=null;
this.fireEvent(D,G);
}
}
this.queueInProgress=false;
this.eventQueue=[];
},subscribeToConfigEvent:function(E,F,H,D){
var G=this.config[E.toLowerCase()];
if(G&&G.event){
if(!A.alreadySubscribed(G.event,F,H)){
G.event.subscribe(F,H,D);
}
return true;
}else{
return false;
}
},unsubscribeFromConfigEvent:function(D,E,G){
var F=this.config[D.toLowerCase()];
if(F&&F.event){
return F.event.unsubscribe(E,G);
}else{
return false;
}
},toString:function(){
var D="Config";
if(this.owner){
D+=" ["+this.owner.toString()+"]";
}
return D;
},outputEventQueue:function(){
var D="",G,E,F=this.eventQueue.length;
for(E=0;E<F;E++){
G=this.eventQueue[E];
if(G){
D+=G[0]+"="+G[1]+", ";
}
}
return D;
},destroy:function(){
var E=this.config,D,F;
for(D in E){
if(B.hasOwnProperty(E,D)){
F=E[D];
F.event.unsubscribeAll();
F.event=null;
}
}
this.configChangedEvent.unsubscribeAll();
this.configChangedEvent=null;
this.owner=null;
this.config=null;
this.initialConfig=null;
this.eventQueue=null;
}};
A.alreadySubscribed=function(E,H,I){
var F=E.subscribers.length,D,G;
if(F>0){
G=F-1;
do{
D=E.subscribers[G];
if(D&&D.obj==I&&D.fn==H){
return true;
}
}while(G--);
}
return false;
};
YAHOO.lang.augmentProto(A,YAHOO.util.EventProvider);
}());
(function(){
YAHOO.widget.Module=function(Q,P){
if(Q){
this.init(Q,P);
}else{
}
};
var F=YAHOO.util.Dom,D=YAHOO.util.Config,M=YAHOO.util.Event,L=YAHOO.util.CustomEvent,G=YAHOO.widget.Module,H,O,N,E,A={"BEFORE_INIT":"beforeInit","INIT":"init","APPEND":"append","BEFORE_RENDER":"beforeRender","RENDER":"render","CHANGE_HEADER":"changeHeader","CHANGE_BODY":"changeBody","CHANGE_FOOTER":"changeFooter","CHANGE_CONTENT":"changeContent","DESTORY":"destroy","BEFORE_SHOW":"beforeShow","SHOW":"show","BEFORE_HIDE":"beforeHide","HIDE":"hide"},I={"VISIBLE":{key:"visible",value:true,validator:YAHOO.lang.isBoolean},"EFFECT":{key:"effect",suppressEvent:true,supercedes:["visible"]},"MONITOR_RESIZE":{key:"monitorresize",value:true},"APPEND_TO_DOCUMENT_BODY":{key:"appendtodocumentbody",value:false}};
G.IMG_ROOT=null;
G.IMG_ROOT_SSL=null;
G.CSS_MODULE="yui-module";
G.CSS_HEADER="hd";
G.CSS_BODY="bd";
G.CSS_FOOTER="ft";
G.RESIZE_MONITOR_SECURE_URL="javascript:false;";
G.textResizeEvent=new L("textResize");
function K(){
if(!H){
H=document.createElement("div");
H.innerHTML=("<div class=\""+G.CSS_HEADER+"\"></div>"+"<div class=\""+G.CSS_BODY+"\"></div><div class=\""+G.CSS_FOOTER+"\"></div>");
O=H.firstChild;
N=O.nextSibling;
E=N.nextSibling;
}
return H;
};
function J(){
if(!O){
K();
}
return (O.cloneNode(false));
};
function B(){
if(!N){
K();
}
return (N.cloneNode(false));
};
function C(){
if(!E){
K();
}
return (E.cloneNode(false));
};
G.prototype={constructor:G,element:null,header:null,body:null,footer:null,id:null,imageRoot:G.IMG_ROOT,initEvents:function(){
var P=L.LIST;
this.beforeInitEvent=this.createEvent(A.BEFORE_INIT);
this.beforeInitEvent.signature=P;
this.initEvent=this.createEvent(A.INIT);
this.initEvent.signature=P;
this.appendEvent=this.createEvent(A.APPEND);
this.appendEvent.signature=P;
this.beforeRenderEvent=this.createEvent(A.BEFORE_RENDER);
this.beforeRenderEvent.signature=P;
this.renderEvent=this.createEvent(A.RENDER);
this.renderEvent.signature=P;
this.changeHeaderEvent=this.createEvent(A.CHANGE_HEADER);
this.changeHeaderEvent.signature=P;
this.changeBodyEvent=this.createEvent(A.CHANGE_BODY);
this.changeBodyEvent.signature=P;
this.changeFooterEvent=this.createEvent(A.CHANGE_FOOTER);
this.changeFooterEvent.signature=P;
this.changeContentEvent=this.createEvent(A.CHANGE_CONTENT);
this.changeContentEvent.signature=P;
this.destroyEvent=this.createEvent(A.DESTORY);
this.destroyEvent.signature=P;
this.beforeShowEvent=this.createEvent(A.BEFORE_SHOW);
this.beforeShowEvent.signature=P;
this.showEvent=this.createEvent(A.SHOW);
this.showEvent.signature=P;
this.beforeHideEvent=this.createEvent(A.BEFORE_HIDE);
this.beforeHideEvent.signature=P;
this.hideEvent=this.createEvent(A.HIDE);
this.hideEvent.signature=P;
},platform:function(){
var P=navigator.userAgent.toLowerCase();
if(P.indexOf("windows")!=-1||P.indexOf("win32")!=-1){
return "windows";
}else{
if(P.indexOf("macintosh")!=-1){
return "mac";
}else{
return false;
}
}
}(),browser:function(){
var P=navigator.userAgent.toLowerCase();
if(P.indexOf("opera")!=-1){
return "opera";
}else{
if(P.indexOf("msie 7")!=-1){
return "ie7";
}else{
if(P.indexOf("msie")!=-1){
return "ie";
}else{
if(P.indexOf("safari")!=-1){
return "safari";
}else{
if(P.indexOf("gecko")!=-1){
return "gecko";
}else{
return false;
}
}
}
}
}
}(),isSecure:function(){
if(window.location.href.toLowerCase().indexOf("https")===0){
return true;
}else{
return false;
}
}(),initDefaultConfig:function(){
this.cfg.addProperty(I.VISIBLE.key,{handler:this.configVisible,value:I.VISIBLE.value,validator:I.VISIBLE.validator});
this.cfg.addProperty(I.EFFECT.key,{suppressEvent:I.EFFECT.suppressEvent,supercedes:I.EFFECT.supercedes});
this.cfg.addProperty(I.MONITOR_RESIZE.key,{handler:this.configMonitorResize,value:I.MONITOR_RESIZE.value});
this.cfg.addProperty(I.APPEND_TO_DOCUMENT_BODY.key,{value:I.APPEND_TO_DOCUMENT_BODY.value});
},init:function(U,T){
var R,V;
this.initEvents();
this.beforeInitEvent.fire(G);
this.cfg=new D(this);
if(this.isSecure){
this.imageRoot=G.IMG_ROOT_SSL;
}
if(typeof U=="string"){
R=U;
U=document.getElementById(U);
if(!U){
U=(K()).cloneNode(false);
U.id=R;
}
}
this.element=U;
if(U.id){
this.id=U.id;
}
V=this.element.firstChild;
if(V){
var Q=false,P=false,S=false;
do{
if(1==V.nodeType){
if(!Q&&F.hasClass(V,G.CSS_HEADER)){
this.header=V;
Q=true;
}else{
if(!P&&F.hasClass(V,G.CSS_BODY)){
this.body=V;
P=true;
}else{
if(!S&&F.hasClass(V,G.CSS_FOOTER)){
this.footer=V;
S=true;
}
}
}
}
}while((V=V.nextSibling));
}
this.initDefaultConfig();
F.addClass(this.element,G.CSS_MODULE);
if(T){
this.cfg.applyConfig(T,true);
}
if(!D.alreadySubscribed(this.renderEvent,this.cfg.fireQueue,this.cfg)){
this.renderEvent.subscribe(this.cfg.fireQueue,this.cfg,true);
}
this.initEvent.fire(G);
},initResizeMonitor:function(){
var Q=(YAHOO.env.ua.gecko&&this.platform=="windows");
if(Q){
var P=this;
setTimeout(function(){
P._initResizeMonitor();
},0);
}else{
this._initResizeMonitor();
}
},_initResizeMonitor:function(){
var P,R,T;
function V(){
G.textResizeEvent.fire();
};
if(!YAHOO.env.ua.opera){
R=F.get("_yuiResizeMonitor");
var U=this._supportsCWResize();
if(!R){
R=document.createElement("iframe");
if(this.isSecure&&G.RESIZE_MONITOR_SECURE_URL&&YAHOO.env.ua.ie){
R.src=G.RESIZE_MONITOR_SECURE_URL;
}
if(!U){
T=["<html><head><script ","type=\"text/javascript\">","window.onresize=function(){window.parent.","YAHOO.widget.Module.textResizeEvent.","fire();};<","/script></head>","<body></body></html>"].join("");
R.src="data:text/html;charset=utf-8,"+encodeURIComponent(T);
}
R.id="_yuiResizeMonitor";
R.title="Text Resize Monitor";
R.style.position="absolute";
R.style.visibility="hidden";
var Q=document.body,S=Q.firstChild;
if(S){
Q.insertBefore(R,S);
}else{
Q.appendChild(R);
}
R.style.width="10em";
R.style.height="10em";
R.style.top=(-1*R.offsetHeight)+"px";
R.style.left=(-1*R.offsetWidth)+"px";
R.style.borderWidth="0";
R.style.visibility="visible";
if(YAHOO.env.ua.webkit){
P=R.contentWindow.document;
P.open();
P.close();
}
}
if(R&&R.contentWindow){
G.textResizeEvent.subscribe(this.onDomResize,this,true);
if(!G.textResizeInitialized){
if(U){
if(!M.on(R.contentWindow,"resize",V)){
M.on(R,"resize",V);
}
}
G.textResizeInitialized=true;
}
this.resizeMonitor=R;
}
}
},_supportsCWResize:function(){
var P=true;
if(YAHOO.env.ua.gecko&&YAHOO.env.ua.gecko<=1.8){
P=false;
}
return P;
},onDomResize:function(S,R){
var Q=-1*this.resizeMonitor.offsetWidth,P=-1*this.resizeMonitor.offsetHeight;
this.resizeMonitor.style.top=P+"px";
this.resizeMonitor.style.left=Q+"px";
},setHeader:function(Q){
var P=this.header||(this.header=J());
if(Q.nodeName){
P.innerHTML="";
P.appendChild(Q);
}else{
P.innerHTML=Q;
}
this.changeHeaderEvent.fire(Q);
this.changeContentEvent.fire();
},appendToHeader:function(Q){
var P=this.header||(this.header=J());
P.appendChild(Q);
this.changeHeaderEvent.fire(Q);
this.changeContentEvent.fire();
},setBody:function(Q){
var P=this.body||(this.body=B());
if(Q.nodeName){
P.innerHTML="";
P.appendChild(Q);
}else{
P.innerHTML=Q;
}
this.changeBodyEvent.fire(Q);
this.changeContentEvent.fire();
},appendToBody:function(Q){
var P=this.body||(this.body=B());
P.appendChild(Q);
this.changeBodyEvent.fire(Q);
this.changeContentEvent.fire();
},setFooter:function(Q){
var P=this.footer||(this.footer=C());
if(Q.nodeName){
P.innerHTML="";
P.appendChild(Q);
}else{
P.innerHTML=Q;
}
this.changeFooterEvent.fire(Q);
this.changeContentEvent.fire();
},appendToFooter:function(Q){
var P=this.footer||(this.footer=C());
P.appendChild(Q);
this.changeFooterEvent.fire(Q);
this.changeContentEvent.fire();
},render:function(R,P){
var S=this,T;
function Q(U){
if(typeof U=="string"){
U=document.getElementById(U);
}
if(U){
S._addToParent(U,S.element);
S.appendEvent.fire();
}
};
this.beforeRenderEvent.fire();
if(!P){
P=this.element;
}
if(R){
Q(R);
}else{
if(!F.inDocument(this.element)){
return false;
}
}
if(this.header&&!F.inDocument(this.header)){
T=P.firstChild;
if(T){
P.insertBefore(this.header,T);
}else{
P.appendChild(this.header);
}
}
if(this.body&&!F.inDocument(this.body)){
if(this.footer&&F.isAncestor(this.moduleElement,this.footer)){
P.insertBefore(this.body,this.footer);
}else{
P.appendChild(this.body);
}
}
if(this.footer&&!F.inDocument(this.footer)){
P.appendChild(this.footer);
}
this.renderEvent.fire();
return true;
},destroy:function(){
var P,Q;
if(this.element){
M.purgeElement(this.element,true);
P=this.element.parentNode;
}
if(P){
P.removeChild(this.element);
}
this.element=null;
this.header=null;
this.body=null;
this.footer=null;
G.textResizeEvent.unsubscribe(this.onDomResize,this);
this.cfg.destroy();
this.cfg=null;
this.destroyEvent.fire();
},show:function(){
this.cfg.setProperty("visible",true);
},hide:function(){
this.cfg.setProperty("visible",false);
},configVisible:function(Q,P,R){
var S=P[0];
if(S){
this.beforeShowEvent.fire();
F.setStyle(this.element,"display","block");
this.showEvent.fire();
}else{
this.beforeHideEvent.fire();
F.setStyle(this.element,"display","none");
this.hideEvent.fire();
}
},configMonitorResize:function(R,Q,S){
var P=Q[0];
if(P){
this.initResizeMonitor();
}else{
G.textResizeEvent.unsubscribe(this.onDomResize,this,true);
this.resizeMonitor=null;
}
},_addToParent:function(P,Q){
if(!this.cfg.getProperty("appendtodocumentbody")&&P===document.body&&P.firstChild){
P.insertBefore(Q,P.firstChild);
}else{
P.appendChild(Q);
}
},toString:function(){
return "Module "+this.id;
}};
YAHOO.lang.augmentProto(G,YAHOO.util.EventProvider);
}());
(function(){
YAHOO.widget.Overlay=function(O,N){
YAHOO.widget.Overlay.superclass.constructor.call(this,O,N);
};
var H=YAHOO.lang,L=YAHOO.util.CustomEvent,F=YAHOO.widget.Module,M=YAHOO.util.Event,E=YAHOO.util.Dom,C=YAHOO.util.Config,J=YAHOO.env.ua,B=YAHOO.widget.Overlay,G="subscribe",D="unsubscribe",I,A={"BEFORE_MOVE":"beforeMove","MOVE":"move"},K={"X":{key:"x",validator:H.isNumber,suppressEvent:true,supercedes:["iframe"]},"Y":{key:"y",validator:H.isNumber,suppressEvent:true,supercedes:["iframe"]},"XY":{key:"xy",suppressEvent:true,supercedes:["iframe"]},"CONTEXT":{key:"context",suppressEvent:true,supercedes:["iframe"]},"FIXED_CENTER":{key:"fixedcenter",value:false,validator:H.isBoolean,supercedes:["iframe","visible"]},"WIDTH":{key:"width",suppressEvent:true,supercedes:["context","fixedcenter","iframe"]},"HEIGHT":{key:"height",suppressEvent:true,supercedes:["context","fixedcenter","iframe"]},"AUTO_FILL_HEIGHT":{key:"autofillheight",supressEvent:true,supercedes:["height"],value:"body"},"ZINDEX":{key:"zindex",value:null},"CONSTRAIN_TO_VIEWPORT":{key:"constraintoviewport",value:false,validator:H.isBoolean,supercedes:["iframe","x","y","xy"]},"IFRAME":{key:"iframe",value:(J.ie==6?true:false),validator:H.isBoolean,supercedes:["zindex"]},"PREVENT_CONTEXT_OVERLAP":{key:"preventcontextoverlap",value:false,validator:H.isBoolean,supercedes:["constraintoviewport"]}};
B.IFRAME_SRC="javascript:false;";
B.IFRAME_OFFSET=3;
B.VIEWPORT_OFFSET=10;
B.TOP_LEFT="tl";
B.TOP_RIGHT="tr";
B.BOTTOM_LEFT="bl";
B.BOTTOM_RIGHT="br";
B.CSS_OVERLAY="yui-overlay";
B.STD_MOD_RE=/^\s*?(body|footer|header)\s*?$/i;
B.windowScrollEvent=new L("windowScroll");
B.windowResizeEvent=new L("windowResize");
B.windowScrollHandler=function(O){
var N=M.getTarget(O);
if(!N||N===window||N===window.document){
if(J.ie){
if(!window.scrollEnd){
window.scrollEnd=-1;
}
clearTimeout(window.scrollEnd);
window.scrollEnd=setTimeout(function(){
B.windowScrollEvent.fire();
},1);
}else{
B.windowScrollEvent.fire();
}
}
};
B.windowResizeHandler=function(N){
if(J.ie){
if(!window.resizeEnd){
window.resizeEnd=-1;
}
clearTimeout(window.resizeEnd);
window.resizeEnd=setTimeout(function(){
B.windowResizeEvent.fire();
},100);
}else{
B.windowResizeEvent.fire();
}
};
B._initialized=null;
if(B._initialized===null){
M.on(window,"scroll",B.windowScrollHandler);
M.on(window,"resize",B.windowResizeHandler);
B._initialized=true;
}
B._TRIGGER_MAP={"windowScroll":B.windowScrollEvent,"windowResize":B.windowResizeEvent,"textResize":F.textResizeEvent};
YAHOO.extend(B,F,{CONTEXT_TRIGGERS:[],init:function(O,N){
B.superclass.init.call(this,O);
this.beforeInitEvent.fire(B);
E.addClass(this.element,B.CSS_OVERLAY);
if(N){
this.cfg.applyConfig(N,true);
}
if(this.platform=="mac"&&J.gecko){
if(!C.alreadySubscribed(this.showEvent,this.showMacGeckoScrollbars,this)){
this.showEvent.subscribe(this.showMacGeckoScrollbars,this,true);
}
if(!C.alreadySubscribed(this.hideEvent,this.hideMacGeckoScrollbars,this)){
this.hideEvent.subscribe(this.hideMacGeckoScrollbars,this,true);
}
}
this.initEvent.fire(B);
},initEvents:function(){
B.superclass.initEvents.call(this);
var N=L.LIST;
this.beforeMoveEvent=this.createEvent(A.BEFORE_MOVE);
this.beforeMoveEvent.signature=N;
this.moveEvent=this.createEvent(A.MOVE);
this.moveEvent.signature=N;
},initDefaultConfig:function(){
B.superclass.initDefaultConfig.call(this);
var N=this.cfg;
N.addProperty(K.X.key,{handler:this.configX,validator:K.X.validator,suppressEvent:K.X.suppressEvent,supercedes:K.X.supercedes});
N.addProperty(K.Y.key,{handler:this.configY,validator:K.Y.validator,suppressEvent:K.Y.suppressEvent,supercedes:K.Y.supercedes});
N.addProperty(K.XY.key,{handler:this.configXY,suppressEvent:K.XY.suppressEvent,supercedes:K.XY.supercedes});
N.addProperty(K.CONTEXT.key,{handler:this.configContext,suppressEvent:K.CONTEXT.suppressEvent,supercedes:K.CONTEXT.supercedes});
N.addProperty(K.FIXED_CENTER.key,{handler:this.configFixedCenter,value:K.FIXED_CENTER.value,validator:K.FIXED_CENTER.validator,supercedes:K.FIXED_CENTER.supercedes});
N.addProperty(K.WIDTH.key,{handler:this.configWidth,suppressEvent:K.WIDTH.suppressEvent,supercedes:K.WIDTH.supercedes});
N.addProperty(K.HEIGHT.key,{handler:this.configHeight,suppressEvent:K.HEIGHT.suppressEvent,supercedes:K.HEIGHT.supercedes});
N.addProperty(K.AUTO_FILL_HEIGHT.key,{handler:this.configAutoFillHeight,value:K.AUTO_FILL_HEIGHT.value,validator:this._validateAutoFill,suppressEvent:K.AUTO_FILL_HEIGHT.suppressEvent,supercedes:K.AUTO_FILL_HEIGHT.supercedes});
N.addProperty(K.ZINDEX.key,{handler:this.configzIndex,value:K.ZINDEX.value});
N.addProperty(K.CONSTRAIN_TO_VIEWPORT.key,{handler:this.configConstrainToViewport,value:K.CONSTRAIN_TO_VIEWPORT.value,validator:K.CONSTRAIN_TO_VIEWPORT.validator,supercedes:K.CONSTRAIN_TO_VIEWPORT.supercedes});
N.addProperty(K.IFRAME.key,{handler:this.configIframe,value:K.IFRAME.value,validator:K.IFRAME.validator,supercedes:K.IFRAME.supercedes});
N.addProperty(K.PREVENT_CONTEXT_OVERLAP.key,{value:K.PREVENT_CONTEXT_OVERLAP.value,validator:K.PREVENT_CONTEXT_OVERLAP.validator,supercedes:K.PREVENT_CONTEXT_OVERLAP.supercedes});
},moveTo:function(N,O){
this.cfg.setProperty("xy",[N,O]);
},hideMacGeckoScrollbars:function(){
E.replaceClass(this.element,"show-scrollbars","hide-scrollbars");
},showMacGeckoScrollbars:function(){
E.replaceClass(this.element,"hide-scrollbars","show-scrollbars");
},configVisible:function(Q,N,W){
var P=N[0],R=E.getStyle(this.element,"visibility"),X=this.cfg.getProperty("effect"),U=[],T=(this.platform=="mac"&&J.gecko),f=C.alreadySubscribed,V,O,d,b,a,Z,c,Y,S;
if(R=="inherit"){
d=this.element.parentNode;
while(d.nodeType!=9&&d.nodeType!=11){
R=E.getStyle(d,"visibility");
if(R!="inherit"){
break;
}
d=d.parentNode;
}
if(R=="inherit"){
R="visible";
}
}
if(X){
if(X instanceof Array){
Y=X.length;
for(b=0;b<Y;b++){
V=X[b];
U[U.length]=V.effect(this,V.duration);
}
}else{
U[U.length]=X.effect(this,X.duration);
}
}
if(P){
if(T){
this.showMacGeckoScrollbars();
}
if(X){
if(P){
if(R!="visible"||R===""){
this.beforeShowEvent.fire();
S=U.length;
for(a=0;a<S;a++){
O=U[a];
if(a===0&&!f(O.animateInCompleteEvent,this.showEvent.fire,this.showEvent)){
O.animateInCompleteEvent.subscribe(this.showEvent.fire,this.showEvent,true);
}
O.animateIn();
}
}
}
}else{
if(R!="visible"||R===""){
this.beforeShowEvent.fire();
E.setStyle(this.element,"visibility","visible");
this.cfg.refireEvent("iframe");
this.showEvent.fire();
}
}
}else{
if(T){
this.hideMacGeckoScrollbars();
}
if(X){
if(R=="visible"){
this.beforeHideEvent.fire();
S=U.length;
for(Z=0;Z<S;Z++){
c=U[Z];
if(Z===0&&!f(c.animateOutCompleteEvent,this.hideEvent.fire,this.hideEvent)){
c.animateOutCompleteEvent.subscribe(this.hideEvent.fire,this.hideEvent,true);
}
c.animateOut();
}
}else{
if(R===""){
E.setStyle(this.element,"visibility","hidden");
}
}
}else{
if(R=="visible"||R===""){
this.beforeHideEvent.fire();
E.setStyle(this.element,"visibility","hidden");
this.hideEvent.fire();
}
}
}
},doCenterOnDOMEvent:function(){
if(this.cfg.getProperty("visible")){
this.center();
}
},configFixedCenter:function(R,P,S){
var T=P[0],O=C.alreadySubscribed,Q=B.windowResizeEvent,N=B.windowScrollEvent;
if(T){
this.center();
if(!O(this.beforeShowEvent,this.center,this)){
this.beforeShowEvent.subscribe(this.center);
}
if(!O(Q,this.doCenterOnDOMEvent,this)){
Q.subscribe(this.doCenterOnDOMEvent,this,true);
}
if(!O(N,this.doCenterOnDOMEvent,this)){
N.subscribe(this.doCenterOnDOMEvent,this,true);
}
}else{
this.beforeShowEvent.unsubscribe(this.center);
Q.unsubscribe(this.doCenterOnDOMEvent,this);
N.unsubscribe(this.doCenterOnDOMEvent,this);
}
},configHeight:function(Q,O,R){
var N=O[0],P=this.element;
E.setStyle(P,"height",N);
this.cfg.refireEvent("iframe");
},configAutoFillHeight:function(Q,P,R){
var O=P[0],N=this.cfg.getProperty("autofillheight");
this.cfg.unsubscribeFromConfigEvent("height",this._autoFillOnHeightChange);
F.textResizeEvent.unsubscribe("height",this._autoFillOnHeightChange);
if(N&&O!==N&&this[N]){
E.setStyle(this[N],"height","");
}
if(O){
O=H.trim(O.toLowerCase());
this.cfg.subscribeToConfigEvent("height",this._autoFillOnHeightChange,this[O],this);
F.textResizeEvent.subscribe(this._autoFillOnHeightChange,this[O],this);
this.cfg.setProperty("autofillheight",O,true);
}
},configWidth:function(Q,N,R){
var P=N[0],O=this.element;
E.setStyle(O,"width",P);
this.cfg.refireEvent("iframe");
},configzIndex:function(P,N,Q){
var R=N[0],O=this.element;
if(!R){
R=E.getStyle(O,"zIndex");
if(!R||isNaN(R)){
R=0;
}
}
if(this.iframe||this.cfg.getProperty("iframe")===true){
if(R<=0){
R=1;
}
}
E.setStyle(O,"zIndex",R);
this.cfg.setProperty("zIndex",R,true);
if(this.iframe){
this.stackIframe();
}
},configXY:function(P,O,Q){
var S=O[0],N=S[0],R=S[1];
this.cfg.setProperty("x",N);
this.cfg.setProperty("y",R);
this.beforeMoveEvent.fire([N,R]);
N=this.cfg.getProperty("x");
R=this.cfg.getProperty("y");
this.cfg.refireEvent("iframe");
this.moveEvent.fire([N,R]);
},configX:function(P,O,Q){
var N=O[0],R=this.cfg.getProperty("y");
this.cfg.setProperty("x",N,true);
this.cfg.setProperty("y",R,true);
this.beforeMoveEvent.fire([N,R]);
N=this.cfg.getProperty("x");
R=this.cfg.getProperty("y");
E.setX(this.element,N,true);
this.cfg.setProperty("xy",[N,R],true);
this.cfg.refireEvent("iframe");
this.moveEvent.fire([N,R]);
},configY:function(P,O,Q){
var N=this.cfg.getProperty("x"),R=O[0];
this.cfg.setProperty("x",N,true);
this.cfg.setProperty("y",R,true);
this.beforeMoveEvent.fire([N,R]);
N=this.cfg.getProperty("x");
R=this.cfg.getProperty("y");
E.setY(this.element,R,true);
this.cfg.setProperty("xy",[N,R],true);
this.cfg.refireEvent("iframe");
this.moveEvent.fire([N,R]);
},showIframe:function(){
var O=this.iframe,N;
if(O){
N=this.element.parentNode;
if(N!=O.parentNode){
this._addToParent(N,O);
}
O.style.display="block";
}
},hideIframe:function(){
if(this.iframe){
this.iframe.style.display="none";
}
},syncIframe:function(){
var N=this.iframe,P=this.element,R=B.IFRAME_OFFSET,O=(R*2),Q;
if(N){
N.style.width=(P.offsetWidth+O+"px");
N.style.height=(P.offsetHeight+O+"px");
Q=this.cfg.getProperty("xy");
if(!H.isArray(Q)||(isNaN(Q[0])||isNaN(Q[1]))){
this.syncPosition();
Q=this.cfg.getProperty("xy");
}
E.setXY(N,[(Q[0]-R),(Q[1]-R)]);
}
},stackIframe:function(){
if(this.iframe){
var N=E.getStyle(this.element,"zIndex");
if(!YAHOO.lang.isUndefined(N)&&!isNaN(N)){
E.setStyle(this.iframe,"zIndex",(N-1));
}
}
},configIframe:function(Q,P,R){
var N=P[0];
function S(){
var U=this.iframe,V=this.element,W;
if(!U){
if(!I){
I=document.createElement("iframe");
if(this.isSecure){
I.src=B.IFRAME_SRC;
}
if(J.ie){
I.style.filter="alpha(opacity=0)";
I.frameBorder=0;
}else{
I.style.opacity="0";
}
I.style.position="absolute";
I.style.border="none";
I.style.margin="0";
I.style.padding="0";
I.style.display="none";
}
U=I.cloneNode(false);
W=V.parentNode;
var T=W||document.body;
this._addToParent(T,U);
this.iframe=U;
}
this.showIframe();
this.syncIframe();
this.stackIframe();
if(!this._hasIframeEventListeners){
this.showEvent.subscribe(this.showIframe);
this.hideEvent.subscribe(this.hideIframe);
this.changeContentEvent.subscribe(this.syncIframe);
this._hasIframeEventListeners=true;
}
};
function O(){
S.call(this);
this.beforeShowEvent.unsubscribe(O);
this._iframeDeferred=false;
};
if(N){
if(this.cfg.getProperty("visible")){
S.call(this);
}else{
if(!this._iframeDeferred){
this.beforeShowEvent.subscribe(O);
this._iframeDeferred=true;
}
}
}else{
this.hideIframe();
if(this._hasIframeEventListeners){
this.showEvent.unsubscribe(this.showIframe);
this.hideEvent.unsubscribe(this.hideIframe);
this.changeContentEvent.unsubscribe(this.syncIframe);
this._hasIframeEventListeners=false;
}
}
},_primeXYFromDOM:function(){
if(YAHOO.lang.isUndefined(this.cfg.getProperty("xy"))){
this.syncPosition();
this.cfg.refireEvent("xy");
this.beforeShowEvent.unsubscribe(this._primeXYFromDOM);
}
},configConstrainToViewport:function(O,N,P){
var Q=N[0];
if(Q){
if(!C.alreadySubscribed(this.beforeMoveEvent,this.enforceConstraints,this)){
this.beforeMoveEvent.subscribe(this.enforceConstraints,this,true);
}
if(!C.alreadySubscribed(this.beforeShowEvent,this._primeXYFromDOM)){
this.beforeShowEvent.subscribe(this._primeXYFromDOM);
}
}else{
this.beforeShowEvent.unsubscribe(this._primeXYFromDOM);
this.beforeMoveEvent.unsubscribe(this.enforceConstraints,this);
}
},configContext:function(S,R,O){
var V=R[0],P,N,T,Q,U=this.CONTEXT_TRIGGERS;
if(V){
P=V[0];
N=V[1];
T=V[2];
Q=V[3];
if(U&&U.length>0){
Q=(Q||[]).concat(U);
}
if(P){
if(typeof P=="string"){
this.cfg.setProperty("context",[document.getElementById(P),N,T,Q],true);
}
if(N&&T){
this.align(N,T);
}
if(this._contextTriggers){
this._processTriggers(this._contextTriggers,D,this._alignOnTrigger);
}
if(Q){
this._processTriggers(Q,G,this._alignOnTrigger);
this._contextTriggers=Q;
}
}
}
},_alignOnTrigger:function(O,N){
this.align();
},_findTriggerCE:function(N){
var O=null;
if(N instanceof L){
O=N;
}else{
if(B._TRIGGER_MAP[N]){
O=B._TRIGGER_MAP[N];
}
}
return O;
},_processTriggers:function(R,T,Q){
var P,S;
for(var O=0,N=R.length;O<N;++O){
P=R[O];
S=this._findTriggerCE(P);
if(S){
S[T](Q,this,true);
}else{
this[T](P,Q);
}
}
},align:function(O,N){
var T=this.cfg.getProperty("context"),S=this,R,Q,U;
function P(V,W){
switch(O){
case B.TOP_LEFT:
S.moveTo(W,V);
break;
case B.TOP_RIGHT:
S.moveTo((W-Q.offsetWidth),V);
break;
case B.BOTTOM_LEFT:
S.moveTo(W,(V-Q.offsetHeight));
break;
case B.BOTTOM_RIGHT:
S.moveTo((W-Q.offsetWidth),(V-Q.offsetHeight));
break;
}
};
if(T){
R=T[0];
Q=this.element;
S=this;
if(!O){
O=T[1];
}
if(!N){
N=T[2];
}
if(Q&&R){
U=E.getRegion(R);
switch(N){
case B.TOP_LEFT:
P(U.top,U.left);
break;
case B.TOP_RIGHT:
P(U.top,U.right);
break;
case B.BOTTOM_LEFT:
P(U.bottom,U.left);
break;
case B.BOTTOM_RIGHT:
P(U.bottom,U.right);
break;
}
}
}
},enforceConstraints:function(O,N,P){
var R=N[0];
var Q=this.getConstrainedXY(R[0],R[1]);
this.cfg.setProperty("x",Q[0],true);
this.cfg.setProperty("y",Q[1],true);
this.cfg.setProperty("xy",Q,true);
},getConstrainedX:function(U){
var R=this,N=R.element,d=N.offsetWidth,b=B.VIEWPORT_OFFSET,g=E.getViewportWidth(),c=E.getDocumentScrollLeft(),X=(d+b<g),a=this.cfg.getProperty("context"),P,W,i,S=false,e,V,f,O,h=U,T={"tltr":true,"blbr":true,"brbl":true,"trtl":true};
var Y=function(){
var j;
if((R.cfg.getProperty("x")-c)>W){
j=(W-d);
}else{
j=(W+i);
}
R.cfg.setProperty("x",(j+c),true);
return j;
};
var Q=function(){
if((R.cfg.getProperty("x")-c)>W){
return (V-b);
}else{
return (e-b);
}
};
var Z=function(){
var j=Q(),k;
if(d>j){
if(S){
Y();
}else{
Y();
S=true;
k=Z();
}
}
return k;
};
if(this.cfg.getProperty("preventcontextoverlap")&&a&&T[(a[1]+a[2])]){
if(X){
P=a[0];
W=E.getX(P)-c;
i=P.offsetWidth;
e=W;
V=(g-(W+i));
Z();
}
h=this.cfg.getProperty("x");
}else{
if(X){
f=c+b;
O=c+g-d-b;
if(U<f){
h=f;
}else{
if(U>O){
h=O;
}
}
}else{
h=b+c;
}
}
return h;
},getConstrainedY:function(Y){
var V=this,O=V.element,h=O.offsetHeight,g=B.VIEWPORT_OFFSET,c=E.getViewportHeight(),f=E.getDocumentScrollTop(),d=(h+g<c),e=this.cfg.getProperty("context"),T,Z,a,W=false,U,P,b,R,N=Y,X={"trbr":true,"tlbl":true,"bltl":true,"brtr":true};
var S=function(){
var j;
if((V.cfg.getProperty("y")-f)>Z){
j=(Z-h);
}else{
j=(Z+a);
}
V.cfg.setProperty("y",(j+f),true);
return j;
};
var Q=function(){
if((V.cfg.getProperty("y")-f)>Z){
return (P-g);
}else{
return (U-g);
}
};
var i=function(){
var k=Q(),j;
if(h>k){
if(W){
S();
}else{
S();
W=true;
j=i();
}
}
return j;
};
if(this.cfg.getProperty("preventcontextoverlap")&&e&&X[(e[1]+e[2])]){
if(d){
T=e[0];
a=T.offsetHeight;
Z=(E.getY(T)-f);
U=Z;
P=(c-(Z+a));
i();
}
N=V.cfg.getProperty("y");
}else{
if(d){
b=f+g;
R=f+c-h-g;
if(Y<b){
N=b;
}else{
if(Y>R){
N=R;
}
}
}else{
N=g+f;
}
}
return N;
},getConstrainedXY:function(N,O){
return [this.getConstrainedX(N),this.getConstrainedY(O)];
},center:function(){
var Q=B.VIEWPORT_OFFSET,R=this.element.offsetWidth,P=this.element.offsetHeight,O=E.getViewportWidth(),S=E.getViewportHeight(),N,T;
if(R<O){
N=(O/2)-(R/2)+E.getDocumentScrollLeft();
}else{
N=Q+E.getDocumentScrollLeft();
}
if(P<S){
T=(S/2)-(P/2)+E.getDocumentScrollTop();
}else{
T=Q+E.getDocumentScrollTop();
}
this.cfg.setProperty("xy",[parseInt(N,10),parseInt(T,10)]);
this.cfg.refireEvent("iframe");
},syncPosition:function(){
var N=E.getXY(this.element);
this.cfg.setProperty("x",N[0],true);
this.cfg.setProperty("y",N[1],true);
this.cfg.setProperty("xy",N,true);
},onDomResize:function(P,O){
var N=this;
B.superclass.onDomResize.call(this,P,O);
setTimeout(function(){
N.syncPosition();
N.cfg.refireEvent("iframe");
N.cfg.refireEvent("context");
},0);
},_getComputedHeight:(function(){
if(document.defaultView&&document.defaultView.getComputedStyle){
return function(O){
var N=null;
if(O.ownerDocument&&O.ownerDocument.defaultView){
var P=O.ownerDocument.defaultView.getComputedStyle(O,"");
if(P){
N=parseInt(P.height,10);
}
}
return (H.isNumber(N))?N:null;
};
}else{
return function(O){
var N=null;
if(O.style.pixelHeight){
N=O.style.pixelHeight;
}
return (H.isNumber(N))?N:null;
};
}
})(),_validateAutoFillHeight:function(N){
return (!N)||(H.isString(N)&&B.STD_MOD_RE.test(N));
},_autoFillOnHeightChange:function(P,N,O){
this.fillHeight(O);
},_getPreciseHeight:function(O){
var N=O.offsetHeight;
if(O.getBoundingClientRect){
var P=O.getBoundingClientRect();
N=P.bottom-P.top;
}
return N;
},fillHeight:function(Q){
if(Q){
var O=this.innerElement||this.element,N=[this.header,this.body,this.footer],U,V=0,W=0,S=0,P=false;
for(var T=0,R=N.length;T<R;T++){
U=N[T];
if(U){
if(Q!==U){
W+=this._getPreciseHeight(U);
}else{
P=true;
}
}
}
if(P){
if(J.ie||J.opera){
E.setStyle(Q,"height",0+"px");
}
V=this._getComputedHeight(O);
if(V===null){
E.addClass(O,"yui-override-padding");
V=O.clientHeight;
E.removeClass(O,"yui-override-padding");
}
S=V-W;
E.setStyle(Q,"height",S+"px");
if(Q.offsetHeight!=S){
S=S-(Q.offsetHeight-S);
}
E.setStyle(Q,"height",S+"px");
}
}
},bringToTop:function(){
var R=[],Q=this.element;
function U(Y,X){
var a=E.getStyle(Y,"zIndex"),Z=E.getStyle(X,"zIndex"),W=(!a||isNaN(a))?0:parseInt(a,10),V=(!Z||isNaN(Z))?0:parseInt(Z,10);
if(W>V){
return -1;
}else{
if(W<V){
return 1;
}else{
return 0;
}
}
};
function P(X){
var W=E.hasClass(X,B.CSS_OVERLAY),V=YAHOO.widget.Panel;
if(W&&!E.isAncestor(Q,X)){
if(V&&E.hasClass(X,V.CSS_PANEL)){
R[R.length]=X.parentNode;
}else{
R[R.length]=X;
}
}
};
E.getElementsBy(P,"DIV",document.body);
R.sort(U);
var N=R[0],T;
if(N){
T=E.getStyle(N,"zIndex");
if(!isNaN(T)){
var S=false;
if(N!=Q){
S=true;
}else{
if(R.length>1){
var O=E.getStyle(R[1],"zIndex");
if(!isNaN(O)&&(T==O)){
S=true;
}
}
}
if(S){
this.cfg.setProperty("zindex",(parseInt(T,10)+2));
}
}
}
},destroy:function(){
if(this.iframe){
this.iframe.parentNode.removeChild(this.iframe);
}
this.iframe=null;
B.windowResizeEvent.unsubscribe(this.doCenterOnDOMEvent,this);
B.windowScrollEvent.unsubscribe(this.doCenterOnDOMEvent,this);
F.textResizeEvent.unsubscribe(this._autoFillOnHeightChange);
B.superclass.destroy.call(this);
},toString:function(){
return "Overlay "+this.id;
}});
}());
(function(){
YAHOO.widget.OverlayManager=function(G){
this.init(G);
};
var D=YAHOO.widget.Overlay,C=YAHOO.util.Event,E=YAHOO.util.Dom,B=YAHOO.util.Config,F=YAHOO.util.CustomEvent,A=YAHOO.widget.OverlayManager;
A.CSS_FOCUSED="focused";
A.prototype={constructor:A,overlays:null,initDefaultConfig:function(){
this.cfg.addProperty("overlays",{suppressEvent:true});
this.cfg.addProperty("focusevent",{value:"mousedown"});
},init:function(I){
this.cfg=new B(this);
this.initDefaultConfig();
if(I){
this.cfg.applyConfig(I,true);
}
this.cfg.fireQueue();
var H=null;
this.getActive=function(){
return H;
};
this.focus=function(J){
var K=this.find(J);
if(K){
K.focus();
}
};
this.remove=function(K){
var M=this.find(K),J;
if(M){
if(H==M){
H=null;
}
var L=(M.element===null&&M.cfg===null)?true:false;
if(!L){
J=E.getStyle(M.element,"zIndex");
M.cfg.setProperty("zIndex",-1000,true);
}
this.overlays.sort(this.compareZIndexDesc);
this.overlays=this.overlays.slice(0,(this.overlays.length-1));
M.hideEvent.unsubscribe(M.blur);
M.destroyEvent.unsubscribe(this._onOverlayDestroy,M);
M.focusEvent.unsubscribe(this._onOverlayFocusHandler,M);
M.blurEvent.unsubscribe(this._onOverlayBlurHandler,M);
if(!L){
C.removeListener(M.element,this.cfg.getProperty("focusevent"),this._onOverlayElementFocus);
M.cfg.setProperty("zIndex",J,true);
M.cfg.setProperty("manager",null);
}
if(M.focusEvent._managed){
M.focusEvent=null;
}
if(M.blurEvent._managed){
M.blurEvent=null;
}
if(M.focus._managed){
M.focus=null;
}
if(M.blur._managed){
M.blur=null;
}
}
};
this.blurAll=function(){
var K=this.overlays.length,J;
if(K>0){
J=K-1;
do{
this.overlays[J].blur();
}while(J--);
}
};
this._manageBlur=function(J){
var K=false;
if(H==J){
E.removeClass(H.element,A.CSS_FOCUSED);
H=null;
K=true;
}
return K;
};
this._manageFocus=function(J){
var K=false;
if(H!=J){
if(H){
H.blur();
}
H=J;
this.bringToTop(H);
E.addClass(H.element,A.CSS_FOCUSED);
K=true;
}
return K;
};
var G=this.cfg.getProperty("overlays");
if(!this.overlays){
this.overlays=[];
}
if(G){
this.register(G);
this.overlays.sort(this.compareZIndexDesc);
}
},_onOverlayElementFocus:function(I){
var G=C.getTarget(I),H=this.close;
if(H&&(G==H||E.isAncestor(H,G))){
this.blur();
}else{
this.focus();
}
},_onOverlayDestroy:function(H,G,I){
this.remove(I);
},_onOverlayFocusHandler:function(H,G,I){
this._manageFocus(I);
},_onOverlayBlurHandler:function(H,G,I){
this._manageBlur(I);
},_bindFocus:function(G){
var H=this;
if(!G.focusEvent){
G.focusEvent=G.createEvent("focus");
G.focusEvent.signature=F.LIST;
G.focusEvent._managed=true;
}else{
G.focusEvent.subscribe(H._onOverlayFocusHandler,G,H);
}
if(!G.focus){
C.on(G.element,H.cfg.getProperty("focusevent"),H._onOverlayElementFocus,null,G);
G.focus=function(){
if(H._manageFocus(this)){
if(this.cfg.getProperty("visible")&&this.focusFirst){
this.focusFirst();
}
this.focusEvent.fire();
}
};
G.focus._managed=true;
}
},_bindBlur:function(G){
var H=this;
if(!G.blurEvent){
G.blurEvent=G.createEvent("blur");
G.blurEvent.signature=F.LIST;
G.focusEvent._managed=true;
}else{
G.blurEvent.subscribe(H._onOverlayBlurHandler,G,H);
}
if(!G.blur){
G.blur=function(){
if(H._manageBlur(this)){
this.blurEvent.fire();
}
};
G.blur._managed=true;
}
G.hideEvent.subscribe(G.blur);
},_bindDestroy:function(G){
var H=this;
G.destroyEvent.subscribe(H._onOverlayDestroy,G,H);
},_syncZIndex:function(G){
var H=E.getStyle(G.element,"zIndex");
if(!isNaN(H)){
G.cfg.setProperty("zIndex",parseInt(H,10));
}else{
G.cfg.setProperty("zIndex",0);
}
},register:function(G){
var K,J=false,H,I;
if(G instanceof D){
G.cfg.addProperty("manager",{value:this});
this._bindFocus(G);
this._bindBlur(G);
this._bindDestroy(G);
this._syncZIndex(G);
this.overlays.push(G);
this.bringToTop(G);
J=true;
}else{
if(G instanceof Array){
for(H=0,I=G.length;H<I;H++){
J=this.register(G[H])||J;
}
}
}
return J;
},bringToTop:function(M){
var I=this.find(M),L,G,J;
if(I){
J=this.overlays;
J.sort(this.compareZIndexDesc);
G=J[0];
if(G){
L=E.getStyle(G.element,"zIndex");
if(!isNaN(L)){
var K=false;
if(G!==I){
K=true;
}else{
if(J.length>1){
var H=E.getStyle(J[1].element,"zIndex");
if(!isNaN(H)&&(L==H)){
K=true;
}
}
}
if(K){
I.cfg.setProperty("zindex",(parseInt(L,10)+2));
}
}
J.sort(this.compareZIndexDesc);
}
}
},find:function(G){
var K=G instanceof D,I=this.overlays,M=I.length,J=null,L,H;
if(K||typeof G=="string"){
for(H=M-1;H>=0;H--){
L=I[H];
if((K&&(L===G))||(L.id==G)){
J=L;
break;
}
}
}
return J;
},compareZIndexDesc:function(J,I){
var H=(J.cfg)?J.cfg.getProperty("zIndex"):null,G=(I.cfg)?I.cfg.getProperty("zIndex"):null;
if(H===null&&G===null){
return 0;
}else{
if(H===null){
return 1;
}else{
if(G===null){
return -1;
}else{
if(H>G){
return -1;
}else{
if(H<G){
return 1;
}else{
return 0;
}
}
}
}
}
},showAll:function(){
var H=this.overlays,I=H.length,G;
for(G=I-1;G>=0;G--){
H[G].show();
}
},hideAll:function(){
var H=this.overlays,I=H.length,G;
for(G=I-1;G>=0;G--){
H[G].hide();
}
},toString:function(){
return "OverlayManager";
}};
}());
(function(){
YAHOO.widget.Tooltip=function(N,M){
YAHOO.widget.Tooltip.superclass.constructor.call(this,N,M);
};
var E=YAHOO.lang,L=YAHOO.util.Event,K=YAHOO.util.CustomEvent,C=YAHOO.util.Dom,G=YAHOO.widget.Tooltip,F,H={"PREVENT_OVERLAP":{key:"preventoverlap",value:true,validator:E.isBoolean,supercedes:["x","y","xy"]},"SHOW_DELAY":{key:"showdelay",value:200,validator:E.isNumber},"AUTO_DISMISS_DELAY":{key:"autodismissdelay",value:5000,validator:E.isNumber},"HIDE_DELAY":{key:"hidedelay",value:250,validator:E.isNumber},"TEXT":{key:"text",suppressEvent:true},"CONTAINER":{key:"container"},"DISABLED":{key:"disabled",value:false,suppressEvent:true}},A={"CONTEXT_MOUSE_OVER":"contextMouseOver","CONTEXT_MOUSE_OUT":"contextMouseOut","CONTEXT_TRIGGER":"contextTrigger"};
G.CSS_TOOLTIP="yui-tt";
function I(N,M,O){
var R=O[0],P=O[1],Q=this.cfg,S=Q.getProperty("width");
if(S==P){
Q.setProperty("width",R);
}
};
function D(N,M){
var O=document.body,S=this.cfg,R=S.getProperty("width"),P,Q;
if((!R||R=="auto")&&(S.getProperty("container")!=O||S.getProperty("x")>=C.getViewportWidth()||S.getProperty("y")>=C.getViewportHeight())){
Q=this.element.cloneNode(true);
Q.style.visibility="hidden";
Q.style.top="0px";
Q.style.left="0px";
O.appendChild(Q);
P=(Q.offsetWidth+"px");
O.removeChild(Q);
Q=null;
S.setProperty("width",P);
S.refireEvent("xy");
this.subscribe("hide",I,[(R||""),P]);
}
};
function B(N,M,O){
this.render(O);
};
function J(){
L.onDOMReady(B,this.cfg.getProperty("container"),this);
};
YAHOO.extend(G,YAHOO.widget.Overlay,{init:function(N,M){
G.superclass.init.call(this,N);
this.beforeInitEvent.fire(G);
C.addClass(this.element,G.CSS_TOOLTIP);
if(M){
this.cfg.applyConfig(M,true);
}
this.cfg.queueProperty("visible",false);
this.cfg.queueProperty("constraintoviewport",true);
this.setBody("");
this.subscribe("beforeShow",D);
this.subscribe("init",J);
this.subscribe("render",this.onRender);
this.initEvent.fire(G);
},initEvents:function(){
G.superclass.initEvents.call(this);
var M=K.LIST;
this.contextMouseOverEvent=this.createEvent(A.CONTEXT_MOUSE_OVER);
this.contextMouseOverEvent.signature=M;
this.contextMouseOutEvent=this.createEvent(A.CONTEXT_MOUSE_OUT);
this.contextMouseOutEvent.signature=M;
this.contextTriggerEvent=this.createEvent(A.CONTEXT_TRIGGER);
this.contextTriggerEvent.signature=M;
},initDefaultConfig:function(){
G.superclass.initDefaultConfig.call(this);
this.cfg.addProperty(H.PREVENT_OVERLAP.key,{value:H.PREVENT_OVERLAP.value,validator:H.PREVENT_OVERLAP.validator,supercedes:H.PREVENT_OVERLAP.supercedes});
this.cfg.addProperty(H.SHOW_DELAY.key,{handler:this.configShowDelay,value:200,validator:H.SHOW_DELAY.validator});
this.cfg.addProperty(H.AUTO_DISMISS_DELAY.key,{handler:this.configAutoDismissDelay,value:H.AUTO_DISMISS_DELAY.value,validator:H.AUTO_DISMISS_DELAY.validator});
this.cfg.addProperty(H.HIDE_DELAY.key,{handler:this.configHideDelay,value:H.HIDE_DELAY.value,validator:H.HIDE_DELAY.validator});
this.cfg.addProperty(H.TEXT.key,{handler:this.configText,suppressEvent:H.TEXT.suppressEvent});
this.cfg.addProperty(H.CONTAINER.key,{handler:this.configContainer,value:document.body});
this.cfg.addProperty(H.DISABLED.key,{handler:this.configContainer,value:H.DISABLED.value,supressEvent:H.DISABLED.suppressEvent});
},configText:function(N,M,O){
var P=M[0];
if(P){
this.setBody(P);
}
},configContainer:function(O,N,P){
var M=N[0];
if(typeof M=="string"){
this.cfg.setProperty("container",document.getElementById(M),true);
}
},_removeEventListeners:function(){
var P=this._context,M,O,N;
if(P){
M=P.length;
if(M>0){
N=M-1;
do{
O=P[N];
L.removeListener(O,"mouseover",this.onContextMouseOver);
L.removeListener(O,"mousemove",this.onContextMouseMove);
L.removeListener(O,"mouseout",this.onContextMouseOut);
}while(N--);
}
}
},configContext:function(R,N,S){
var Q=N[0],T,M,P,O;
if(Q){
if(!(Q instanceof Array)){
if(typeof Q=="string"){
this.cfg.setProperty("context",[document.getElementById(Q)],true);
}else{
this.cfg.setProperty("context",[Q],true);
}
Q=this.cfg.getProperty("context");
}
this._removeEventListeners();
this._context=Q;
T=this._context;
if(T){
M=T.length;
if(M>0){
O=M-1;
do{
P=T[O];
L.on(P,"mouseover",this.onContextMouseOver,this);
L.on(P,"mousemove",this.onContextMouseMove,this);
L.on(P,"mouseout",this.onContextMouseOut,this);
}while(O--);
}
}
}
},onContextMouseMove:function(N,M){
M.pageX=L.getPageX(N);
M.pageY=L.getPageY(N);
},onContextMouseOver:function(O,N){
var M=this;
if(M.title){
N._tempTitle=M.title;
M.title="";
}
if(N.fireEvent("contextMouseOver",M,O)!==false&&!N.cfg.getProperty("disabled")){
if(N.hideProcId){
clearTimeout(N.hideProcId);
N.hideProcId=null;
}
L.on(M,"mousemove",N.onContextMouseMove,N);
N.showProcId=N.doShow(O,M);
}
},onContextMouseOut:function(O,N){
var M=this;
if(N._tempTitle){
M.title=N._tempTitle;
N._tempTitle=null;
}
if(N.showProcId){
clearTimeout(N.showProcId);
N.showProcId=null;
}
if(N.hideProcId){
clearTimeout(N.hideProcId);
N.hideProcId=null;
}
N.fireEvent("contextMouseOut",M,O);
N.hideProcId=setTimeout(function(){
N.hide();
},N.cfg.getProperty("hidedelay"));
},doShow:function(O,M){
var P=25,N=this;
if(YAHOO.env.ua.opera&&M.tagName&&M.tagName.toUpperCase()=="A"){
P+=12;
}
return setTimeout(function(){
var Q=N.cfg.getProperty("text");
if(N._tempTitle&&(Q===""||YAHOO.lang.isUndefined(Q)||YAHOO.lang.isNull(Q))){
N.setBody(N._tempTitle);
}else{
N.cfg.refireEvent("text");
}
N.moveTo(N.pageX,N.pageY+P);
if(N.cfg.getProperty("preventoverlap")){
N.preventOverlap(N.pageX,N.pageY);
}
L.removeListener(M,"mousemove",N.onContextMouseMove);
N.contextTriggerEvent.fire(M);
N.show();
N.hideProcId=N.doHide();
},this.cfg.getProperty("showdelay"));
},doHide:function(){
var M=this;
return setTimeout(function(){
M.hide();
},this.cfg.getProperty("autodismissdelay"));
},preventOverlap:function(Q,P){
var M=this.element.offsetHeight,O=new YAHOO.util.Point(Q,P),N=C.getRegion(this.element);
N.top-=5;
N.left-=5;
N.right+=5;
N.bottom+=5;
if(N.contains(O)){
this.cfg.setProperty("y",(P-M-5));
}
},onRender:function(Q,P){
function R(){
var U=this.element,T=this._shadow;
if(T){
T.style.width=(U.offsetWidth+6)+"px";
T.style.height=(U.offsetHeight+1)+"px";
}
};
function N(){
C.addClass(this._shadow,"yui-tt-shadow-visible");
};
function M(){
C.removeClass(this._shadow,"yui-tt-shadow-visible");
};
function S(){
var V=this._shadow,U,T,X,W;
if(!V){
U=this.element;
T=YAHOO.widget.Module;
X=YAHOO.env.ua.ie;
W=this;
if(!F){
F=document.createElement("div");
F.className="yui-tt-shadow";
}
V=F.cloneNode(false);
U.appendChild(V);
this._shadow=V;
N.call(this);
this.subscribe("beforeShow",N);
this.subscribe("beforeHide",M);
if(X==6||(X==7&&document.compatMode=="BackCompat")){
window.setTimeout(function(){
R.call(W);
},0);
this.cfg.subscribeToConfigEvent("width",R);
this.cfg.subscribeToConfigEvent("height",R);
this.subscribe("changeContent",R);
T.textResizeEvent.subscribe(R,this,true);
this.subscribe("destroy",function(){
T.textResizeEvent.unsubscribe(R,this);
});
}
}
};
function O(){
S.call(this);
this.unsubscribe("beforeShow",O);
};
if(this.cfg.getProperty("visible")){
S.call(this);
}else{
this.subscribe("beforeShow",O);
}
},destroy:function(){
this._removeEventListeners();
G.superclass.destroy.call(this);
},toString:function(){
return "Tooltip "+this.id;
}});
}());
(function(){
YAHOO.widget.Panel=function(V,U){
YAHOO.widget.Panel.superclass.constructor.call(this,V,U);
};
var S=null;
var E=YAHOO.lang,F=YAHOO.util,A=F.Dom,T=F.Event,M=F.CustomEvent,K=YAHOO.util.KeyListener,I=F.Config,H=YAHOO.widget.Overlay,O=YAHOO.widget.Panel,L=YAHOO.env.ua,P=(L.ie==6||(L.ie==7&&document.compatMode=="BackCompat")),G,Q,C,D={"SHOW_MASK":"showMask","HIDE_MASK":"hideMask","DRAG":"drag"},N={"CLOSE":{key:"close",value:true,validator:E.isBoolean,supercedes:["visible"]},"DRAGGABLE":{key:"draggable",value:(F.DD?true:false),validator:E.isBoolean,supercedes:["visible"]},"DRAG_ONLY":{key:"dragonly",value:false,validator:E.isBoolean,supercedes:["draggable"]},"UNDERLAY":{key:"underlay",value:"shadow",supercedes:["visible"]},"MODAL":{key:"modal",value:false,validator:E.isBoolean,supercedes:["visible","zindex"]},"KEY_LISTENERS":{key:"keylisteners",suppressEvent:true,supercedes:["visible"]},"STRINGS":{key:"strings",supercedes:["close"],validator:E.isObject,value:{close:"Close"}}};
O.CSS_PANEL="yui-panel";
O.CSS_PANEL_CONTAINER="yui-panel-container";
O.FOCUSABLE=["a","button","select","textarea","input","iframe"];
function J(V,U){
if(!this.header&&this.cfg.getProperty("draggable")){
this.setHeader("&#160;");
}
};
function R(V,U,W){
var Z=W[0],X=W[1],Y=this.cfg,a=Y.getProperty("width");
if(a==X){
Y.setProperty("width",Z);
}
this.unsubscribe("hide",R,W);
};
function B(V,U){
var Z=YAHOO.env.ua.ie,Y,X,W;
if(Z==6||(Z==7&&document.compatMode=="BackCompat")){
Y=this.cfg;
X=Y.getProperty("width");
if(!X||X=="auto"){
W=(this.element.offsetWidth+"px");
Y.setProperty("width",W);
this.subscribe("hide",R,[(X||""),W]);
}
}
};
YAHOO.extend(O,H,{init:function(V,U){
O.superclass.init.call(this,V);
this.beforeInitEvent.fire(O);
A.addClass(this.element,O.CSS_PANEL);
this.buildWrapper();
if(U){
this.cfg.applyConfig(U,true);
}
this.subscribe("showMask",this._addFocusHandlers);
this.subscribe("hideMask",this._removeFocusHandlers);
this.subscribe("beforeRender",J);
this.subscribe("render",function(){
this.setFirstLastFocusable();
this.subscribe("changeContent",this.setFirstLastFocusable);
});
this.subscribe("show",this.focusFirst);
this.initEvent.fire(O);
},_onElementFocus:function(X){
var W=T.getTarget(X);
if(W!==this.element&&!A.isAncestor(this.element,W)&&S==this){
try{
if(this.firstElement){
this.firstElement.focus();
}else{
if(this._modalFocus){
this._modalFocus.focus();
}else{
this.innerElement.focus();
}
}
}
catch(V){
try{
if(W!==document&&W!==document.body&&W!==window){
W.blur();
}
}
catch(U){
}
}
}
},_addFocusHandlers:function(V,U){
if(!this.firstElement){
if(L.webkit||L.opera){
if(!this._modalFocus){
this._createHiddenFocusElement();
}
}else{
this.innerElement.tabIndex=0;
}
}
this.setTabLoop(this.firstElement,this.lastElement);
T.onFocus(document.documentElement,this._onElementFocus,this,true);
S=this;
},_createHiddenFocusElement:function(){
var U=document.createElement("button");
U.style.height="1px";
U.style.width="1px";
U.style.position="absolute";
U.style.left="-10000em";
U.style.opacity=0;
U.tabIndex="-1";
this.innerElement.appendChild(U);
this._modalFocus=U;
},_removeFocusHandlers:function(V,U){
T.removeFocusListener(document.documentElement,this._onElementFocus,this);
if(S==this){
S=null;
}
},focusFirst:function(W,U,Y){
var V=this.firstElement;
if(U&&U[1]){
T.stopEvent(U[1]);
}
if(V){
try{
V.focus();
}
catch(X){
}
}
},focusLast:function(W,U,Y){
var V=this.lastElement;
if(U&&U[1]){
T.stopEvent(U[1]);
}
if(V){
try{
V.focus();
}
catch(X){
}
}
},setTabLoop:function(X,Z){
var V=this.preventBackTab,W=this.preventTabOut,U=this.showEvent,Y=this.hideEvent;
if(V){
V.disable();
U.unsubscribe(V.enable,V);
Y.unsubscribe(V.disable,V);
V=this.preventBackTab=null;
}
if(W){
W.disable();
U.unsubscribe(W.enable,W);
Y.unsubscribe(W.disable,W);
W=this.preventTabOut=null;
}
if(X){
this.preventBackTab=new K(X,{shift:true,keys:9},{fn:this.focusLast,scope:this,correctScope:true});
V=this.preventBackTab;
U.subscribe(V.enable,V,true);
Y.subscribe(V.disable,V,true);
}
if(Z){
this.preventTabOut=new K(Z,{shift:false,keys:9},{fn:this.focusFirst,scope:this,correctScope:true});
W=this.preventTabOut;
U.subscribe(W.enable,W,true);
Y.subscribe(W.disable,W,true);
}
},getFocusableElements:function(U){
U=U||this.innerElement;
var X={};
for(var W=0;W<O.FOCUSABLE.length;W++){
X[O.FOCUSABLE[W]]=true;
}
function V(Y){
if(Y.focus&&Y.type!=="hidden"&&!Y.disabled&&X[Y.tagName.toLowerCase()]){
return true;
}
return false;
};
return A.getElementsBy(V,null,U);
},setFirstLastFocusable:function(){
this.firstElement=null;
this.lastElement=null;
var U=this.getFocusableElements();
this.focusableElements=U;
if(U.length>0){
this.firstElement=U[0];
this.lastElement=U[U.length-1];
}
if(this.cfg.getProperty("modal")){
this.setTabLoop(this.firstElement,this.lastElement);
}
},initEvents:function(){
O.superclass.initEvents.call(this);
var U=M.LIST;
this.showMaskEvent=this.createEvent(D.SHOW_MASK);
this.showMaskEvent.signature=U;
this.hideMaskEvent=this.createEvent(D.HIDE_MASK);
this.hideMaskEvent.signature=U;
this.dragEvent=this.createEvent(D.DRAG);
this.dragEvent.signature=U;
},initDefaultConfig:function(){
O.superclass.initDefaultConfig.call(this);
this.cfg.addProperty(N.CLOSE.key,{handler:this.configClose,value:N.CLOSE.value,validator:N.CLOSE.validator,supercedes:N.CLOSE.supercedes});
this.cfg.addProperty(N.DRAGGABLE.key,{handler:this.configDraggable,value:(F.DD)?true:false,validator:N.DRAGGABLE.validator,supercedes:N.DRAGGABLE.supercedes});
this.cfg.addProperty(N.DRAG_ONLY.key,{value:N.DRAG_ONLY.value,validator:N.DRAG_ONLY.validator,supercedes:N.DRAG_ONLY.supercedes});
this.cfg.addProperty(N.UNDERLAY.key,{handler:this.configUnderlay,value:N.UNDERLAY.value,supercedes:N.UNDERLAY.supercedes});
this.cfg.addProperty(N.MODAL.key,{handler:this.configModal,value:N.MODAL.value,validator:N.MODAL.validator,supercedes:N.MODAL.supercedes});
this.cfg.addProperty(N.KEY_LISTENERS.key,{handler:this.configKeyListeners,suppressEvent:N.KEY_LISTENERS.suppressEvent,supercedes:N.KEY_LISTENERS.supercedes});
this.cfg.addProperty(N.STRINGS.key,{value:N.STRINGS.value,handler:this.configStrings,validator:N.STRINGS.validator,supercedes:N.STRINGS.supercedes});
},configClose:function(X,V,Y){
var Z=V[0],W=this.close,U=this.cfg.getProperty("strings");
if(Z){
if(!W){
if(!C){
C=document.createElement("a");
C.className="container-close";
C.href="#";
}
W=C.cloneNode(true);
this.innerElement.appendChild(W);
W.innerHTML=(U&&U.close)?U.close:"&#160;";
T.on(W,"click",this._doClose,this,true);
this.close=W;
}else{
W.style.display="block";
}
}else{
if(W){
W.style.display="none";
}
}
},_doClose:function(U){
T.preventDefault(U);
this.hide();
},configDraggable:function(V,U,W){
var X=U[0];
if(X){
if(!F.DD){
this.cfg.setProperty("draggable",false);
return;
}
if(this.header){
A.setStyle(this.header,"cursor","move");
this.registerDragDrop();
}
this.subscribe("beforeShow",B);
}else{
if(this.dd){
this.dd.unreg();
}
if(this.header){
A.setStyle(this.header,"cursor","auto");
}
this.unsubscribe("beforeShow",B);
}
},configUnderlay:function(d,c,Z){
var b=(this.platform=="mac"&&L.gecko),e=c[0].toLowerCase(),V=this.underlay,W=this.element;
function f(){
var g=this.underlay;
A.addClass(g,"yui-force-redraw");
window.setTimeout(function(){
A.removeClass(g,"yui-force-redraw");
},0);
};
function X(){
var g=false;
if(!V){
if(!Q){
Q=document.createElement("div");
Q.className="underlay";
}
V=Q.cloneNode(false);
this.element.appendChild(V);
this.underlay=V;
if(P){
this.sizeUnderlay();
this.cfg.subscribeToConfigEvent("width",this.sizeUnderlay);
this.cfg.subscribeToConfigEvent("height",this.sizeUnderlay);
this.changeContentEvent.subscribe(this.sizeUnderlay);
YAHOO.widget.Module.textResizeEvent.subscribe(this.sizeUnderlay,this,true);
}
if(L.webkit&&L.webkit<420){
this.changeContentEvent.subscribe(f);
}
g=true;
}
};
function a(){
var g=X.call(this);
if(!g&&P){
this.sizeUnderlay();
}
this._underlayDeferred=false;
this.beforeShowEvent.unsubscribe(a);
};
function Y(){
if(this._underlayDeferred){
this.beforeShowEvent.unsubscribe(a);
this._underlayDeferred=false;
}
if(V){
this.cfg.unsubscribeFromConfigEvent("width",this.sizeUnderlay);
this.cfg.unsubscribeFromConfigEvent("height",this.sizeUnderlay);
this.changeContentEvent.unsubscribe(this.sizeUnderlay);
this.changeContentEvent.unsubscribe(f);
YAHOO.widget.Module.textResizeEvent.unsubscribe(this.sizeUnderlay,this,true);
this.element.removeChild(V);
this.underlay=null;
}
};
switch(e){
case "shadow":
A.removeClass(W,"matte");
A.addClass(W,"shadow");
break;
case "matte":
if(!b){
Y.call(this);
}
A.removeClass(W,"shadow");
A.addClass(W,"matte");
break;
default:
if(!b){
Y.call(this);
}
A.removeClass(W,"shadow");
A.removeClass(W,"matte");
break;
}
if((e=="shadow")||(b&&!V)){
if(this.cfg.getProperty("visible")){
var U=X.call(this);
if(!U&&P){
this.sizeUnderlay();
}
}else{
if(!this._underlayDeferred){
this.beforeShowEvent.subscribe(a);
this._underlayDeferred=true;
}
}
}
},configModal:function(V,U,X){
var W=U[0];
if(W){
if(!this._hasModalityEventListeners){
this.subscribe("beforeShow",this.buildMask);
this.subscribe("beforeShow",this.bringToTop);
this.subscribe("beforeShow",this.showMask);
this.subscribe("hide",this.hideMask);
H.windowResizeEvent.subscribe(this.sizeMask,this,true);
this._hasModalityEventListeners=true;
}
}else{
if(this._hasModalityEventListeners){
if(this.cfg.getProperty("visible")){
this.hideMask();
this.removeMask();
}
this.unsubscribe("beforeShow",this.buildMask);
this.unsubscribe("beforeShow",this.bringToTop);
this.unsubscribe("beforeShow",this.showMask);
this.unsubscribe("hide",this.hideMask);
H.windowResizeEvent.unsubscribe(this.sizeMask,this);
this._hasModalityEventListeners=false;
}
}
},removeMask:function(){
var V=this.mask,U;
if(V){
this.hideMask();
U=V.parentNode;
if(U){
U.removeChild(V);
}
this.mask=null;
}
},configKeyListeners:function(X,U,a){
var W=U[0],Z,Y,V;
if(W){
if(W instanceof Array){
Y=W.length;
for(V=0;V<Y;V++){
Z=W[V];
if(!I.alreadySubscribed(this.showEvent,Z.enable,Z)){
this.showEvent.subscribe(Z.enable,Z,true);
}
if(!I.alreadySubscribed(this.hideEvent,Z.disable,Z)){
this.hideEvent.subscribe(Z.disable,Z,true);
this.destroyEvent.subscribe(Z.disable,Z,true);
}
}
}else{
if(!I.alreadySubscribed(this.showEvent,W.enable,W)){
this.showEvent.subscribe(W.enable,W,true);
}
if(!I.alreadySubscribed(this.hideEvent,W.disable,W)){
this.hideEvent.subscribe(W.disable,W,true);
this.destroyEvent.subscribe(W.disable,W,true);
}
}
}
},configStrings:function(V,U,W){
var X=E.merge(N.STRINGS.value,U[0]);
this.cfg.setProperty(N.STRINGS.key,X,true);
},configHeight:function(X,V,Y){
var U=V[0],W=this.innerElement;
A.setStyle(W,"height",U);
this.cfg.refireEvent("iframe");
},_autoFillOnHeightChange:function(W,U,V){
O.superclass._autoFillOnHeightChange.apply(this,arguments);
if(P){
this.sizeUnderlay();
}
},configWidth:function(X,U,Y){
var W=U[0],V=this.innerElement;
A.setStyle(V,"width",W);
this.cfg.refireEvent("iframe");
},configzIndex:function(V,U,X){
O.superclass.configzIndex.call(this,V,U,X);
if(this.mask||this.cfg.getProperty("modal")===true){
var W=A.getStyle(this.element,"zIndex");
if(!W||isNaN(W)){
W=0;
}
if(W===0){
this.cfg.setProperty("zIndex",1);
}else{
this.stackMask();
}
}
},buildWrapper:function(){
var W=this.element.parentNode,U=this.element,V=document.createElement("div");
V.className=O.CSS_PANEL_CONTAINER;
V.id=U.id+"_c";
if(W){
W.insertBefore(V,U);
}
V.appendChild(U);
this.element=V;
this.innerElement=U;
A.setStyle(this.innerElement,"visibility","inherit");
},sizeUnderlay:function(){
var V=this.underlay,U;
if(V){
U=this.element;
V.style.width=U.offsetWidth+"px";
V.style.height=U.offsetHeight+"px";
}
},registerDragDrop:function(){
var V=this;
if(this.header){
if(!F.DD){
return;
}
var U=(this.cfg.getProperty("dragonly")===true);
this.dd=new F.DD(this.element.id,this.id,{dragOnly:U});
if(!this.header.id){
this.header.id=this.id+"_h";
}
this.dd.startDrag=function(){
var X,Z,W,c,b,a;
if(YAHOO.env.ua.ie==6){
A.addClass(V.element,"drag");
}
if(V.cfg.getProperty("constraintoviewport")){
var Y=H.VIEWPORT_OFFSET;
X=V.element.offsetHeight;
Z=V.element.offsetWidth;
W=A.getViewportWidth();
c=A.getViewportHeight();
b=A.getDocumentScrollLeft();
a=A.getDocumentScrollTop();
if(X+Y<c){
this.minY=a+Y;
this.maxY=a+c-X-Y;
}else{
this.minY=a+Y;
this.maxY=a+Y;
}
if(Z+Y<W){
this.minX=b+Y;
this.maxX=b+W-Z-Y;
}else{
this.minX=b+Y;
this.maxX=b+Y;
}
this.constrainX=true;
this.constrainY=true;
}else{
this.constrainX=false;
this.constrainY=false;
}
V.dragEvent.fire("startDrag",arguments);
};
this.dd.onDrag=function(){
V.syncPosition();
V.cfg.refireEvent("iframe");
if(this.platform=="mac"&&YAHOO.env.ua.gecko){
this.showMacGeckoScrollbars();
}
V.dragEvent.fire("onDrag",arguments);
};
this.dd.endDrag=function(){
if(YAHOO.env.ua.ie==6){
A.removeClass(V.element,"drag");
}
V.dragEvent.fire("endDrag",arguments);
V.moveEvent.fire(V.cfg.getProperty("xy"));
};
this.dd.setHandleElId(this.header.id);
this.dd.addInvalidHandleType("INPUT");
this.dd.addInvalidHandleType("SELECT");
this.dd.addInvalidHandleType("TEXTAREA");
}
},buildMask:function(){
var U=this.mask;
if(!U){
if(!G){
G=document.createElement("div");
G.className="mask";
G.innerHTML="&#160;";
}
U=G.cloneNode(true);
U.id=this.id+"_mask";
document.body.insertBefore(U,document.body.firstChild);
this.mask=U;
if(YAHOO.env.ua.gecko&&this.platform=="mac"){
A.addClass(this.mask,"block-scrollbars");
}
this.stackMask();
}
},hideMask:function(){
if(this.cfg.getProperty("modal")&&this.mask){
this.mask.style.display="none";
A.removeClass(document.body,"masked");
this.hideMaskEvent.fire();
}
},showMask:function(){
if(this.cfg.getProperty("modal")&&this.mask){
A.addClass(document.body,"masked");
this.sizeMask();
this.mask.style.display="block";
this.showMaskEvent.fire();
}
},sizeMask:function(){
if(this.mask){
var V=this.mask,W=A.getViewportWidth(),U=A.getViewportHeight();
if(this.mask.offsetHeight>U){
this.mask.style.height=U+"px";
}
if(this.mask.offsetWidth>W){
this.mask.style.width=W+"px";
}
this.mask.style.height=A.getDocumentHeight()+"px";
this.mask.style.width=A.getDocumentWidth()+"px";
}
},stackMask:function(){
if(this.mask){
var U=A.getStyle(this.element,"zIndex");
if(!YAHOO.lang.isUndefined(U)&&!isNaN(U)){
A.setStyle(this.mask,"zIndex",U-1);
}
}
},render:function(U){
return O.superclass.render.call(this,U,this.innerElement);
},destroy:function(){
H.windowResizeEvent.unsubscribe(this.sizeMask,this);
this.removeMask();
if(this.close){
T.purgeElement(this.close);
}
O.superclass.destroy.call(this);
},toString:function(){
return "Panel "+this.id;
}});
}());
(function(){
YAHOO.widget.Dialog=function(J,I){
YAHOO.widget.Dialog.superclass.constructor.call(this,J,I);
};
var B=YAHOO.util.Event,G=YAHOO.util.CustomEvent,E=YAHOO.util.Dom,A=YAHOO.widget.Dialog,F=YAHOO.lang,H={"BEFORE_SUBMIT":"beforeSubmit","SUBMIT":"submit","MANUAL_SUBMIT":"manualSubmit","ASYNC_SUBMIT":"asyncSubmit","FORM_SUBMIT":"formSubmit","CANCEL":"cancel"},C={"POST_METHOD":{key:"postmethod",value:"async"},"BUTTONS":{key:"buttons",value:"none",supercedes:["visible"]},"HIDEAFTERSUBMIT":{key:"hideaftersubmit",value:true}};
A.CSS_DIALOG="yui-dialog";
function D(){
var L=this._aButtons,J,K,I;
if(F.isArray(L)){
J=L.length;
if(J>0){
I=J-1;
do{
K=L[I];
if(YAHOO.widget.Button&&K instanceof YAHOO.widget.Button){
K.destroy();
}else{
if(K.tagName.toUpperCase()=="BUTTON"){
B.purgeElement(K);
B.purgeElement(K,false);
}
}
}while(I--);
}
}
};
YAHOO.extend(A,YAHOO.widget.Panel,{form:null,initDefaultConfig:function(){
A.superclass.initDefaultConfig.call(this);
this.callback={success:null,failure:null,argument:null};
this.cfg.addProperty(C.POST_METHOD.key,{handler:this.configPostMethod,value:C.POST_METHOD.value,validator:function(I){
if(I!="form"&&I!="async"&&I!="none"&&I!="manual"){
return false;
}else{
return true;
}
}});
this.cfg.addProperty(C.HIDEAFTERSUBMIT.key,{value:C.HIDEAFTERSUBMIT.value});
this.cfg.addProperty(C.BUTTONS.key,{handler:this.configButtons,value:C.BUTTONS.value,supercedes:C.BUTTONS.supercedes});
},initEvents:function(){
A.superclass.initEvents.call(this);
var I=G.LIST;
this.beforeSubmitEvent=this.createEvent(H.BEFORE_SUBMIT);
this.beforeSubmitEvent.signature=I;
this.submitEvent=this.createEvent(H.SUBMIT);
this.submitEvent.signature=I;
this.manualSubmitEvent=this.createEvent(H.MANUAL_SUBMIT);
this.manualSubmitEvent.signature=I;
this.asyncSubmitEvent=this.createEvent(H.ASYNC_SUBMIT);
this.asyncSubmitEvent.signature=I;
this.formSubmitEvent=this.createEvent(H.FORM_SUBMIT);
this.formSubmitEvent.signature=I;
this.cancelEvent=this.createEvent(H.CANCEL);
this.cancelEvent.signature=I;
},init:function(J,I){
A.superclass.init.call(this,J);
this.beforeInitEvent.fire(A);
E.addClass(this.element,A.CSS_DIALOG);
this.cfg.setProperty("visible",false);
if(I){
this.cfg.applyConfig(I,true);
}
this.showEvent.subscribe(this.focusFirst,this,true);
this.beforeHideEvent.subscribe(this.blurButtons,this,true);
this.subscribe("changeBody",this.registerForm);
this.initEvent.fire(A);
},doSubmit:function(){
var J=YAHOO.util.Connect,P=this.form,N=false,M=false,O,I,L,K;
switch(this.cfg.getProperty("postmethod")){
case "async":
O=P.elements;
I=O.length;
if(I>0){
L=I-1;
do{
if(O[L].type=="file"){
N=true;
break;
}
}while(L--);
}
if(N&&YAHOO.env.ua.ie&&this.isSecure){
M=true;
}
K=this._getFormAttributes(P);
J.setForm(P,N,M);
J.asyncRequest(K.method,K.action,this.callback);
this.asyncSubmitEvent.fire();
break;
case "form":
P.submit();
this.formSubmitEvent.fire();
break;
case "none":
case "manual":
this.manualSubmitEvent.fire();
break;
}
},_getFormAttributes:function(K){
var I={method:null,action:null};
if(K){
if(K.getAttributeNode){
var J=K.getAttributeNode("action");
var L=K.getAttributeNode("method");
if(J){
I.action=J.value;
}
if(L){
I.method=L.value;
}
}else{
I.action=K.getAttribute("action");
I.method=K.getAttribute("method");
}
}
I.method=(F.isString(I.method)?I.method:"POST").toUpperCase();
I.action=F.isString(I.action)?I.action:"";
return I;
},registerForm:function(){
var I=this.element.getElementsByTagName("form")[0];
if(this.form){
if(this.form==I&&E.isAncestor(this.element,this.form)){
return;
}else{
B.purgeElement(this.form);
this.form=null;
}
}
if(!I){
I=document.createElement("form");
I.name="frm_"+this.id;
this.body.appendChild(I);
}
if(I){
this.form=I;
B.on(I,"submit",this._submitHandler,this,true);
}
},_submitHandler:function(I){
B.stopEvent(I);
this.submit();
this.form.blur();
},setTabLoop:function(I,J){
I=I||this.firstButton;
J=this.lastButton||J;
A.superclass.setTabLoop.call(this,I,J);
},setFirstLastFocusable:function(){
A.superclass.setFirstLastFocusable.call(this);
var J,I,K,L=this.focusableElements;
this.firstFormElement=null;
this.lastFormElement=null;
if(this.form&&L&&L.length>0){
I=L.length;
for(J=0;J<I;++J){
K=L[J];
if(this.form===K.form){
this.firstFormElement=K;
break;
}
}
for(J=I-1;J>=0;--J){
K=L[J];
if(this.form===K.form){
this.lastFormElement=K;
break;
}
}
}
},configClose:function(J,I,K){
A.superclass.configClose.apply(this,arguments);
},_doClose:function(I){
B.preventDefault(I);
this.cancel();
},configButtons:function(S,R,M){
var N=YAHOO.widget.Button,U=R[0],K=this.innerElement,T,P,J,Q,O,I,L;
D.call(this);
this._aButtons=null;
if(F.isArray(U)){
O=document.createElement("span");
O.className="button-group";
Q=U.length;
this._aButtons=[];
this.defaultHtmlButton=null;
for(L=0;L<Q;L++){
T=U[L];
if(N){
J=new N({label:T.text});
J.appendTo(O);
P=J.get("element");
if(T.isDefault){
J.addClass("default");
this.defaultHtmlButton=P;
}
if(F.isFunction(T.handler)){
J.set("onclick",{fn:T.handler,obj:this,scope:this});
}else{
if(F.isObject(T.handler)&&F.isFunction(T.handler.fn)){
J.set("onclick",{fn:T.handler.fn,obj:((!F.isUndefined(T.handler.obj))?T.handler.obj:this),scope:(T.handler.scope||this)});
}
}
this._aButtons[this._aButtons.length]=J;
}else{
P=document.createElement("button");
P.setAttribute("type","button");
if(T.isDefault){
P.className="default";
this.defaultHtmlButton=P;
}
P.innerHTML=T.text;
if(F.isFunction(T.handler)){
B.on(P,"click",T.handler,this,true);
}else{
if(F.isObject(T.handler)&&F.isFunction(T.handler.fn)){
B.on(P,"click",T.handler.fn,((!F.isUndefined(T.handler.obj))?T.handler.obj:this),(T.handler.scope||this));
}
}
O.appendChild(P);
this._aButtons[this._aButtons.length]=P;
}
T.htmlButton=P;
if(L===0){
this.firstButton=P;
}
if(L==(Q-1)){
this.lastButton=P;
}
}
this.setFooter(O);
I=this.footer;
if(E.inDocument(this.element)&&!E.isAncestor(K,I)){
K.appendChild(I);
}
this.buttonSpan=O;
}else{
O=this.buttonSpan;
I=this.footer;
if(O&&I){
I.removeChild(O);
this.buttonSpan=null;
this.firstButton=null;
this.lastButton=null;
this.defaultHtmlButton=null;
}
}
this.setFirstLastFocusable();
this.cfg.refireEvent("iframe");
this.cfg.refireEvent("underlay");
},getButtons:function(){
return this._aButtons||null;
},focusFirst:function(K,I,M){
var J=this.firstFormElement;
if(I&&I[1]){
B.stopEvent(I[1]);
}
if(J){
try{
J.focus();
}
catch(L){
}
}else{
this.focusFirstButton();
}
},focusLast:function(K,I,M){
var N=this.cfg.getProperty("buttons"),J=this.lastFormElement;
if(I&&I[1]){
B.stopEvent(I[1]);
}
if(N&&F.isArray(N)){
this.focusLastButton();
}else{
if(J){
try{
J.focus();
}
catch(L){
}
}
}
},_getButton:function(J){
var I=YAHOO.widget.Button;
if(I&&J&&J.nodeName&&J.id){
J=I.getButton(J.id)||J;
}
return J;
},focusDefaultButton:function(){
var I=this._getButton(this.defaultHtmlButton);
if(I){
try{
I.focus();
}
catch(J){
}
}
},blurButtons:function(){
var N=this.cfg.getProperty("buttons"),K,M,J,I;
if(N&&F.isArray(N)){
K=N.length;
if(K>0){
I=(K-1);
do{
M=N[I];
if(M){
J=this._getButton(M.htmlButton);
if(J){
try{
J.blur();
}
catch(L){
}
}
}
}while(I--);
}
}
},focusFirstButton:function(){
var L=this.cfg.getProperty("buttons"),K,I;
if(L&&F.isArray(L)){
K=L[0];
if(K){
I=this._getButton(K.htmlButton);
if(I){
try{
I.focus();
}
catch(J){
}
}
}
}
},focusLastButton:function(){
var M=this.cfg.getProperty("buttons"),J,L,I;
if(M&&F.isArray(M)){
J=M.length;
if(J>0){
L=M[(J-1)];
if(L){
I=this._getButton(L.htmlButton);
if(I){
try{
I.focus();
}
catch(K){
}
}
}
}
}
},configPostMethod:function(J,I,K){
this.registerForm();
},validate:function(){
return true;
},submit:function(){
if(this.validate()){
this.beforeSubmitEvent.fire();
this.doSubmit();
this.submitEvent.fire();
if(this.cfg.getProperty("hideaftersubmit")){
this.hide();
}
return true;
}else{
return false;
}
},cancel:function(){
this.cancelEvent.fire();
this.hide();
},getData:function(){
var Y=this.form,K,R,U,M,S,P,O,J,V,L,W,Z,I,N,a,X,T;
function Q(c){
var b=c.tagName.toUpperCase();
return ((b=="INPUT"||b=="TEXTAREA"||b=="SELECT")&&c.name==M);
};
if(Y){
K=Y.elements;
R=K.length;
U={};
for(X=0;X<R;X++){
M=K[X].name;
S=E.getElementsBy(Q,"*",Y);
P=S.length;
if(P>0){
if(P==1){
S=S[0];
O=S.type;
J=S.tagName.toUpperCase();
switch(J){
case "INPUT":
if(O=="checkbox"){
U[M]=S.checked;
}else{
if(O!="radio"){
U[M]=S.value;
}
}
break;
case "TEXTAREA":
U[M]=S.value;
break;
case "SELECT":
V=S.options;
L=V.length;
W=[];
for(T=0;T<L;T++){
Z=V[T];
if(Z.selected){
I=Z.value;
if(!I||I===""){
I=Z.text;
}
W[W.length]=I;
}
}
U[M]=W;
break;
}
}else{
O=S[0].type;
switch(O){
case "radio":
for(T=0;T<P;T++){
N=S[T];
if(N.checked){
U[M]=N.value;
break;
}
}
break;
case "checkbox":
W=[];
for(T=0;T<P;T++){
a=S[T];
if(a.checked){
W[W.length]=a.value;
}
}
U[M]=W;
break;
}
}
}
}
}
return U;
},destroy:function(){
D.call(this);
this._aButtons=null;
var I=this.element.getElementsByTagName("form"),J;
if(I.length>0){
J=I[0];
if(J){
B.purgeElement(J);
if(J.parentNode){
J.parentNode.removeChild(J);
}
this.form=null;
}
}
A.superclass.destroy.call(this);
},toString:function(){
return "Dialog "+this.id;
}});
}());
(function(){
YAHOO.widget.SimpleDialog=function(E,D){
YAHOO.widget.SimpleDialog.superclass.constructor.call(this,E,D);
};
var C=YAHOO.util.Dom,B=YAHOO.widget.SimpleDialog,A={"ICON":{key:"icon",value:"none",suppressEvent:true},"TEXT":{key:"text",value:"",suppressEvent:true,supercedes:["icon"]}};
B.ICON_BLOCK="blckicon";
B.ICON_ALARM="alrticon";
B.ICON_HELP="hlpicon";
B.ICON_INFO="infoicon";
B.ICON_WARN="warnicon";
B.ICON_TIP="tipicon";
B.ICON_CSS_CLASSNAME="yui-icon";
B.CSS_SIMPLEDIALOG="yui-simple-dialog";
YAHOO.extend(B,YAHOO.widget.Dialog,{initDefaultConfig:function(){
B.superclass.initDefaultConfig.call(this);
this.cfg.addProperty(A.ICON.key,{handler:this.configIcon,value:A.ICON.value,suppressEvent:A.ICON.suppressEvent});
this.cfg.addProperty(A.TEXT.key,{handler:this.configText,value:A.TEXT.value,suppressEvent:A.TEXT.suppressEvent,supercedes:A.TEXT.supercedes});
},init:function(E,D){
B.superclass.init.call(this,E);
this.beforeInitEvent.fire(B);
C.addClass(this.element,B.CSS_SIMPLEDIALOG);
this.cfg.queueProperty("postmethod","manual");
if(D){
this.cfg.applyConfig(D,true);
}
this.beforeRenderEvent.subscribe(function(){
if(!this.body){
this.setBody("");
}
},this,true);
this.initEvent.fire(B);
},registerForm:function(){
B.superclass.registerForm.call(this);
this.form.innerHTML+="<input type=\"hidden\" name=\""+this.id+"\" value=\"\"/>";
},configIcon:function(F,E,J){
var K=E[0],D=this.body,I=B.ICON_CSS_CLASSNAME,H,G;
if(K&&K!="none"){
H=C.getElementsByClassName(I,"*",D);
if(H){
G=H.parentNode;
if(G){
G.removeChild(H);
H=null;
}
}
if(K.indexOf(".")==-1){
H=document.createElement("span");
H.className=(I+" "+K);
H.innerHTML="&#160;";
}else{
H=document.createElement("img");
H.src=(this.imageRoot+K);
H.className=I;
}
if(H){
D.insertBefore(H,D.firstChild);
}
}
},configText:function(E,D,F){
var G=D[0];
if(G){
this.setBody(G);
this.cfg.refireEvent("icon");
}
},toString:function(){
return "SimpleDialog "+this.id;
}});
}());
(function(){
YAHOO.widget.ContainerEffect=function(E,H,G,D,F){
if(!F){
F=YAHOO.util.Anim;
}
this.overlay=E;
this.attrIn=H;
this.attrOut=G;
this.targetElement=D||E.element;
this.animClass=F;
};
var B=YAHOO.util.Dom,C=YAHOO.util.CustomEvent,A=YAHOO.widget.ContainerEffect;
A.FADE=function(D,F){
var G=YAHOO.util.Easing,I={attributes:{opacity:{from:0,to:1}},duration:F,method:G.easeIn},E={attributes:{opacity:{to:0}},duration:F,method:G.easeOut},H=new A(D,I,E,D.element);
H.handleUnderlayStart=function(){
var K=this.overlay.underlay;
if(K&&YAHOO.env.ua.ie){
var J=(K.filters&&K.filters.length>0);
if(J){
B.addClass(D.element,"yui-effect-fade");
}
}
};
H.handleUnderlayComplete=function(){
var J=this.overlay.underlay;
if(J&&YAHOO.env.ua.ie){
B.removeClass(D.element,"yui-effect-fade");
}
};
H.handleStartAnimateIn=function(K,J,L){
B.addClass(L.overlay.element,"hide-select");
if(!L.overlay.underlay){
L.overlay.cfg.refireEvent("underlay");
}
L.handleUnderlayStart();
B.setStyle(L.overlay.element,"visibility","visible");
B.setStyle(L.overlay.element,"opacity",0);
};
H.handleCompleteAnimateIn=function(K,J,L){
B.removeClass(L.overlay.element,"hide-select");
if(L.overlay.element.style.filter){
L.overlay.element.style.filter=null;
}
L.handleUnderlayComplete();
L.overlay.cfg.refireEvent("iframe");
L.animateInCompleteEvent.fire();
};
H.handleStartAnimateOut=function(K,J,L){
B.addClass(L.overlay.element,"hide-select");
L.handleUnderlayStart();
};
H.handleCompleteAnimateOut=function(K,J,L){
B.removeClass(L.overlay.element,"hide-select");
if(L.overlay.element.style.filter){
L.overlay.element.style.filter=null;
}
B.setStyle(L.overlay.element,"visibility","hidden");
B.setStyle(L.overlay.element,"opacity",1);
L.handleUnderlayComplete();
L.overlay.cfg.refireEvent("iframe");
L.animateOutCompleteEvent.fire();
};
H.init();
return H;
};
A.SLIDE=function(F,D){
var I=YAHOO.util.Easing,L=F.cfg.getProperty("x")||B.getX(F.element),K=F.cfg.getProperty("y")||B.getY(F.element),M=B.getClientWidth(),H=F.element.offsetWidth,J={attributes:{points:{to:[L,K]}},duration:D,method:I.easeIn},E={attributes:{points:{to:[(M+25),K]}},duration:D,method:I.easeOut},G=new A(F,J,E,F.element,YAHOO.util.Motion);
G.handleStartAnimateIn=function(O,N,P){
P.overlay.element.style.left=((-25)-H)+"px";
P.overlay.element.style.top=K+"px";
};
G.handleTweenAnimateIn=function(Q,P,R){
var S=B.getXY(R.overlay.element),O=S[0],N=S[1];
if(B.getStyle(R.overlay.element,"visibility")=="hidden"&&O<L){
B.setStyle(R.overlay.element,"visibility","visible");
}
R.overlay.cfg.setProperty("xy",[O,N],true);
R.overlay.cfg.refireEvent("iframe");
};
G.handleCompleteAnimateIn=function(O,N,P){
P.overlay.cfg.setProperty("xy",[L,K],true);
P.startX=L;
P.startY=K;
P.overlay.cfg.refireEvent("iframe");
P.animateInCompleteEvent.fire();
};
G.handleStartAnimateOut=function(O,N,R){
var P=B.getViewportWidth(),S=B.getXY(R.overlay.element),Q=S[1];
R.animOut.attributes.points.to=[(P+25),Q];
};
G.handleTweenAnimateOut=function(P,O,Q){
var S=B.getXY(Q.overlay.element),N=S[0],R=S[1];
Q.overlay.cfg.setProperty("xy",[N,R],true);
Q.overlay.cfg.refireEvent("iframe");
};
G.handleCompleteAnimateOut=function(O,N,P){
B.setStyle(P.overlay.element,"visibility","hidden");
P.overlay.cfg.setProperty("xy",[L,K]);
P.animateOutCompleteEvent.fire();
};
G.init();
return G;
};
A.prototype={init:function(){
this.beforeAnimateInEvent=this.createEvent("beforeAnimateIn");
this.beforeAnimateInEvent.signature=C.LIST;
this.beforeAnimateOutEvent=this.createEvent("beforeAnimateOut");
this.beforeAnimateOutEvent.signature=C.LIST;
this.animateInCompleteEvent=this.createEvent("animateInComplete");
this.animateInCompleteEvent.signature=C.LIST;
this.animateOutCompleteEvent=this.createEvent("animateOutComplete");
this.animateOutCompleteEvent.signature=C.LIST;
this.animIn=new this.animClass(this.targetElement,this.attrIn.attributes,this.attrIn.duration,this.attrIn.method);
this.animIn.onStart.subscribe(this.handleStartAnimateIn,this);
this.animIn.onTween.subscribe(this.handleTweenAnimateIn,this);
this.animIn.onComplete.subscribe(this.handleCompleteAnimateIn,this);
this.animOut=new this.animClass(this.targetElement,this.attrOut.attributes,this.attrOut.duration,this.attrOut.method);
this.animOut.onStart.subscribe(this.handleStartAnimateOut,this);
this.animOut.onTween.subscribe(this.handleTweenAnimateOut,this);
this.animOut.onComplete.subscribe(this.handleCompleteAnimateOut,this);
},animateIn:function(){
this.beforeAnimateInEvent.fire();
this.animIn.animate();
},animateOut:function(){
this.beforeAnimateOutEvent.fire();
this.animOut.animate();
},handleStartAnimateIn:function(E,D,F){
},handleTweenAnimateIn:function(E,D,F){
},handleCompleteAnimateIn:function(E,D,F){
},handleStartAnimateOut:function(E,D,F){
},handleTweenAnimateOut:function(E,D,F){
},handleCompleteAnimateOut:function(E,D,F){
},toString:function(){
var D="ContainerEffect";
if(this.overlay){
D+=" ["+this.overlay.toString()+"]";
}
return D;
}};
YAHOO.lang.augmentProto(A,YAHOO.util.EventProvider);
})();
YAHOO.register("container",YAHOO.widget.Module,{version:"2.6.0",build:"1321"});
(function(){
var B=YAHOO.util;
var A=function(D,C,E,F){
if(!D){
}
this.init(D,C,E,F);
};
A.NAME="Anim";
A.prototype={toString:function(){
var C=this.getEl()||{};
var D=C.id||C.tagName;
return (this.constructor.NAME+": "+D);
},patterns:{noNegatives:/width|height|opacity|padding/i,offsetAttribute:/^((width|height)|(top|left))$/,defaultUnit:/width|height|top$|bottom$|left$|right$/i,offsetUnit:/\d+(em|%|en|ex|pt|in|cm|mm|pc)$/i},doMethod:function(C,E,D){
return this.method(this.currentFrame,E,D-E,this.totalFrames);
},setAttribute:function(C,E,D){
if(this.patterns.noNegatives.test(C)){
E=(E>0)?E:0;
}
B.Dom.setStyle(this.getEl(),C,E+D);
},getAttribute:function(C){
var E=this.getEl();
var G=B.Dom.getStyle(E,C);
if(G!=="auto"&&!this.patterns.offsetUnit.test(G)){
return parseFloat(G);
}
var D=this.patterns.offsetAttribute.exec(C)||[];
var H=!!(D[3]);
var F=!!(D[2]);
if(F||(B.Dom.getStyle(E,"position")=="absolute"&&H)){
G=E["offset"+D[0].charAt(0).toUpperCase()+D[0].substr(1)];
}else{
G=0;
}
return G;
},getDefaultUnit:function(C){
if(this.patterns.defaultUnit.test(C)){
return "px";
}
return "";
},setRuntimeAttribute:function(D){
var I;
var E;
var F=this.attributes;
this.runtimeAttributes[D]={};
var H=function(J){
return (typeof J!=="undefined");
};
if(!H(F[D]["to"])&&!H(F[D]["by"])){
return false;
}
I=(H(F[D]["from"]))?F[D]["from"]:this.getAttribute(D);
if(H(F[D]["to"])){
E=F[D]["to"];
}else{
if(H(F[D]["by"])){
if(I.constructor==Array){
E=[];
for(var G=0,C=I.length;G<C;++G){
E[G]=I[G]+F[D]["by"][G]*1;
}
}else{
E=I+F[D]["by"]*1;
}
}
}
this.runtimeAttributes[D].start=I;
this.runtimeAttributes[D].end=E;
this.runtimeAttributes[D].unit=(H(F[D].unit))?F[D]["unit"]:this.getDefaultUnit(D);
return true;
},init:function(E,J,I,C){
var D=false;
var F=null;
var H=0;
E=B.Dom.get(E);
this.attributes=J||{};
this.duration=!YAHOO.lang.isUndefined(I)?I:1;
this.method=C||B.Easing.easeNone;
this.useSeconds=true;
this.currentFrame=0;
this.totalFrames=B.AnimMgr.fps;
this.setEl=function(M){
E=B.Dom.get(M);
};
this.getEl=function(){
return E;
};
this.isAnimated=function(){
return D;
};
this.getStartTime=function(){
return F;
};
this.runtimeAttributes={};
this.animate=function(){
if(this.isAnimated()){
return false;
}
this.currentFrame=0;
this.totalFrames=(this.useSeconds)?Math.ceil(B.AnimMgr.fps*this.duration):this.duration;
if(this.duration===0&&this.useSeconds){
this.totalFrames=1;
}
B.AnimMgr.registerElement(this);
return true;
};
this.stop=function(M){
if(!this.isAnimated()){
return false;
}
if(M){
this.currentFrame=this.totalFrames;
this._onTween.fire();
}
B.AnimMgr.stop(this);
};
var L=function(){
this.onStart.fire();
this.runtimeAttributes={};
for(var M in this.attributes){
this.setRuntimeAttribute(M);
}
D=true;
H=0;
F=new Date();
};
var K=function(){
var O={duration:new Date()-this.getStartTime(),currentFrame:this.currentFrame};
O.toString=function(){
return ("duration: "+O.duration+", currentFrame: "+O.currentFrame);
};
this.onTween.fire(O);
var N=this.runtimeAttributes;
for(var M in N){
this.setAttribute(M,this.doMethod(M,N[M].start,N[M].end),N[M].unit);
}
H+=1;
};
var G=function(){
var M=(new Date()-F)/1000;
var N={duration:M,frames:H,fps:H/M};
N.toString=function(){
return ("duration: "+N.duration+", frames: "+N.frames+", fps: "+N.fps);
};
D=false;
H=0;
this.onComplete.fire(N);
};
this._onStart=new B.CustomEvent("_start",this,true);
this.onStart=new B.CustomEvent("start",this);
this.onTween=new B.CustomEvent("tween",this);
this._onTween=new B.CustomEvent("_tween",this,true);
this.onComplete=new B.CustomEvent("complete",this);
this._onComplete=new B.CustomEvent("_complete",this,true);
this._onStart.subscribe(L);
this._onTween.subscribe(K);
this._onComplete.subscribe(G);
}};
B.Anim=A;
})();
YAHOO.util.AnimMgr=new function(){
var C=null;
var B=[];
var A=0;
this.fps=1000;
this.delay=1;
this.registerElement=function(F){
B[B.length]=F;
A+=1;
F._onStart.fire();
this.start();
};
this.unRegister=function(G,F){
F=F||E(G);
if(!G.isAnimated()||F==-1){
return false;
}
G._onComplete.fire();
B.splice(F,1);
A-=1;
if(A<=0){
this.stop();
}
return true;
};
this.start=function(){
if(C===null){
C=setInterval(this.run,this.delay);
}
};
this.stop=function(H){
if(!H){
clearInterval(C);
for(var G=0,F=B.length;G<F;++G){
this.unRegister(B[0],0);
}
B=[];
C=null;
A=0;
}else{
this.unRegister(H);
}
};
this.run=function(){
for(var H=0,F=B.length;H<F;++H){
var G=B[H];
if(!G||!G.isAnimated()){
continue;
}
if(G.currentFrame<G.totalFrames||G.totalFrames===null){
G.currentFrame+=1;
if(G.useSeconds){
D(G);
}
G._onTween.fire();
}else{
YAHOO.util.AnimMgr.stop(G,H);
}
}
};
var E=function(H){
for(var G=0,F=B.length;G<F;++G){
if(B[G]==H){
return G;
}
}
return -1;
};
var D=function(G){
var J=G.totalFrames;
var I=G.currentFrame;
var H=(G.currentFrame*G.duration*1000/G.totalFrames);
var F=(new Date()-G.getStartTime());
var K=0;
if(F<G.duration*1000){
K=Math.round((F/H-1)*G.currentFrame);
}else{
K=J-(I+1);
}
if(K>0&&isFinite(K)){
if(G.currentFrame+K>=J){
K=J-(I+1);
}
G.currentFrame+=K;
}
};
};
YAHOO.util.Bezier=new function(){
this.getPosition=function(E,D){
var F=E.length;
var C=[];
for(var B=0;B<F;++B){
C[B]=[E[B][0],E[B][1]];
}
for(var A=1;A<F;++A){
for(B=0;B<F-A;++B){
C[B][0]=(1-D)*C[B][0]+D*C[parseInt(B+1,10)][0];
C[B][1]=(1-D)*C[B][1]+D*C[parseInt(B+1,10)][1];
}
}
return [C[0][0],C[0][1]];
};
};
(function(){
var A=function(F,E,G,H){
A.superclass.constructor.call(this,F,E,G,H);
};
A.NAME="ColorAnim";
A.DEFAULT_BGCOLOR="#fff";
var C=YAHOO.util;
YAHOO.extend(A,C.Anim);
var D=A.superclass;
var B=A.prototype;
B.patterns.color=/color$/i;
B.patterns.rgb=/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i;
B.patterns.hex=/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i;
B.patterns.hex3=/^#?([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})$/i;
B.patterns.transparent=/^transparent|rgba\(0, 0, 0, 0\)$/;
B.parseColor=function(E){
if(E.length==3){
return E;
}
var F=this.patterns.hex.exec(E);
if(F&&F.length==4){
return [parseInt(F[1],16),parseInt(F[2],16),parseInt(F[3],16)];
}
F=this.patterns.rgb.exec(E);
if(F&&F.length==4){
return [parseInt(F[1],10),parseInt(F[2],10),parseInt(F[3],10)];
}
F=this.patterns.hex3.exec(E);
if(F&&F.length==4){
return [parseInt(F[1]+F[1],16),parseInt(F[2]+F[2],16),parseInt(F[3]+F[3],16)];
}
return null;
};
B.getAttribute=function(E){
var G=this.getEl();
if(this.patterns.color.test(E)){
var I=YAHOO.util.Dom.getStyle(G,E);
var H=this;
if(this.patterns.transparent.test(I)){
var F=YAHOO.util.Dom.getAncestorBy(G,function(J){
return !H.patterns.transparent.test(I);
});
if(F){
I=C.Dom.getStyle(F,E);
}else{
I=A.DEFAULT_BGCOLOR;
}
}
}else{
I=D.getAttribute.call(this,E);
}
return I;
};
B.doMethod=function(F,J,G){
var I;
if(this.patterns.color.test(F)){
I=[];
for(var H=0,E=J.length;H<E;++H){
I[H]=D.doMethod.call(this,F,J[H],G[H]);
}
I="rgb("+Math.floor(I[0])+","+Math.floor(I[1])+","+Math.floor(I[2])+")";
}else{
I=D.doMethod.call(this,F,J,G);
}
return I;
};
B.setRuntimeAttribute=function(F){
D.setRuntimeAttribute.call(this,F);
if(this.patterns.color.test(F)){
var H=this.attributes;
var J=this.parseColor(this.runtimeAttributes[F].start);
var G=this.parseColor(this.runtimeAttributes[F].end);
if(typeof H[F]["to"]==="undefined"&&typeof H[F]["by"]!=="undefined"){
G=this.parseColor(H[F].by);
for(var I=0,E=J.length;I<E;++I){
G[I]=J[I]+G[I];
}
}
this.runtimeAttributes[F].start=J;
this.runtimeAttributes[F].end=G;
}
};
C.ColorAnim=A;
})();
YAHOO.util.Easing={easeNone:function(B,A,D,C){
return D*B/C+A;
},easeIn:function(B,A,D,C){
return D*(B/=C)*B+A;
},easeOut:function(B,A,D,C){
return -D*(B/=C)*(B-2)+A;
},easeBoth:function(B,A,D,C){
if((B/=C/2)<1){
return D/2*B*B+A;
}
return -D/2*((--B)*(B-2)-1)+A;
},easeInStrong:function(B,A,D,C){
return D*(B/=C)*B*B*B+A;
},easeOutStrong:function(B,A,D,C){
return -D*((B=B/C-1)*B*B*B-1)+A;
},easeBothStrong:function(B,A,D,C){
if((B/=C/2)<1){
return D/2*B*B*B*B+A;
}
return -D/2*((B-=2)*B*B*B-2)+A;
},elasticIn:function(C,A,G,F,B,E){
if(C==0){
return A;
}
if((C/=F)==1){
return A+G;
}
if(!E){
E=F*0.3;
}
if(!B||B<Math.abs(G)){
B=G;
var D=E/4;
}else{
var D=E/(2*Math.PI)*Math.asin(G/B);
}
return -(B*Math.pow(2,10*(C-=1))*Math.sin((C*F-D)*(2*Math.PI)/E))+A;
},elasticOut:function(C,A,G,F,B,E){
if(C==0){
return A;
}
if((C/=F)==1){
return A+G;
}
if(!E){
E=F*0.3;
}
if(!B||B<Math.abs(G)){
B=G;
var D=E/4;
}else{
var D=E/(2*Math.PI)*Math.asin(G/B);
}
return B*Math.pow(2,-10*C)*Math.sin((C*F-D)*(2*Math.PI)/E)+G+A;
},elasticBoth:function(C,A,G,F,B,E){
if(C==0){
return A;
}
if((C/=F/2)==2){
return A+G;
}
if(!E){
E=F*(0.3*1.5);
}
if(!B||B<Math.abs(G)){
B=G;
var D=E/4;
}else{
var D=E/(2*Math.PI)*Math.asin(G/B);
}
if(C<1){
return -0.5*(B*Math.pow(2,10*(C-=1))*Math.sin((C*F-D)*(2*Math.PI)/E))+A;
}
return B*Math.pow(2,-10*(C-=1))*Math.sin((C*F-D)*(2*Math.PI)/E)*0.5+G+A;
},backIn:function(B,A,E,D,C){
if(typeof C=="undefined"){
C=1.70158;
}
return E*(B/=D)*B*((C+1)*B-C)+A;
},backOut:function(B,A,E,D,C){
if(typeof C=="undefined"){
C=1.70158;
}
return E*((B=B/D-1)*B*((C+1)*B+C)+1)+A;
},backBoth:function(B,A,E,D,C){
if(typeof C=="undefined"){
C=1.70158;
}
if((B/=D/2)<1){
return E/2*(B*B*(((C*=(1.525))+1)*B-C))+A;
}
return E/2*((B-=2)*B*(((C*=(1.525))+1)*B+C)+2)+A;
},bounceIn:function(B,A,D,C){
return D-YAHOO.util.Easing.bounceOut(C-B,0,D,C)+A;
},bounceOut:function(B,A,D,C){
if((B/=C)<(1/2.75)){
return D*(7.5625*B*B)+A;
}else{
if(B<(2/2.75)){
return D*(7.5625*(B-=(1.5/2.75))*B+0.75)+A;
}else{
if(B<(2.5/2.75)){
return D*(7.5625*(B-=(2.25/2.75))*B+0.9375)+A;
}
}
}
return D*(7.5625*(B-=(2.625/2.75))*B+0.984375)+A;
},bounceBoth:function(B,A,D,C){
if(B<C/2){
return YAHOO.util.Easing.bounceIn(B*2,0,D,C)*0.5+A;
}
return YAHOO.util.Easing.bounceOut(B*2-C,0,D,C)*0.5+D*0.5+A;
}};
(function(){
var A=function(H,G,I,J){
if(H){
A.superclass.constructor.call(this,H,G,I,J);
}
};
A.NAME="Motion";
var E=YAHOO.util;
YAHOO.extend(A,E.ColorAnim);
var F=A.superclass;
var C=A.prototype;
C.patterns.points=/^points$/i;
C.setAttribute=function(G,I,H){
if(this.patterns.points.test(G)){
H=H||"px";
F.setAttribute.call(this,"left",I[0],H);
F.setAttribute.call(this,"top",I[1],H);
}else{
F.setAttribute.call(this,G,I,H);
}
};
C.getAttribute=function(G){
if(this.patterns.points.test(G)){
var H=[F.getAttribute.call(this,"left"),F.getAttribute.call(this,"top")];
}else{
H=F.getAttribute.call(this,G);
}
return H;
};
C.doMethod=function(G,K,H){
var J=null;
if(this.patterns.points.test(G)){
var I=this.method(this.currentFrame,0,100,this.totalFrames)/100;
J=E.Bezier.getPosition(this.runtimeAttributes[G],I);
}else{
J=F.doMethod.call(this,G,K,H);
}
return J;
};
C.setRuntimeAttribute=function(P){
if(this.patterns.points.test(P)){
var H=this.getEl();
var J=this.attributes;
var G;
var L=J["points"]["control"]||[];
var I;
var M,O;
if(L.length>0&&!(L[0] instanceof Array)){
L=[L];
}else{
var K=[];
for(M=0,O=L.length;M<O;++M){
K[M]=L[M];
}
L=K;
}
if(E.Dom.getStyle(H,"position")=="static"){
E.Dom.setStyle(H,"position","relative");
}
if(D(J["points"]["from"])){
E.Dom.setXY(H,J["points"]["from"]);
}else{
E.Dom.setXY(H,E.Dom.getXY(H));
}
G=this.getAttribute("points");
if(D(J["points"]["to"])){
I=B.call(this,J["points"]["to"],G);
var N=E.Dom.getXY(this.getEl());
for(M=0,O=L.length;M<O;++M){
L[M]=B.call(this,L[M],G);
}
}else{
if(D(J["points"]["by"])){
I=[G[0]+J["points"]["by"][0],G[1]+J["points"]["by"][1]];
for(M=0,O=L.length;M<O;++M){
L[M]=[G[0]+L[M][0],G[1]+L[M][1]];
}
}
}
this.runtimeAttributes[P]=[G];
if(L.length>0){
this.runtimeAttributes[P]=this.runtimeAttributes[P].concat(L);
}
this.runtimeAttributes[P][this.runtimeAttributes[P].length]=I;
}else{
F.setRuntimeAttribute.call(this,P);
}
};
var B=function(G,I){
var H=E.Dom.getXY(this.getEl());
G=[G[0]-H[0]+I[0],G[1]-H[1]+I[1]];
return G;
};
var D=function(G){
return (typeof G!=="undefined");
};
E.Motion=A;
})();
(function(){
var D=function(F,E,G,H){
if(F){
D.superclass.constructor.call(this,F,E,G,H);
}
};
D.NAME="Scroll";
var B=YAHOO.util;
YAHOO.extend(D,B.ColorAnim);
var C=D.superclass;
var A=D.prototype;
A.doMethod=function(E,H,F){
var G=null;
if(E=="scroll"){
G=[this.method(this.currentFrame,H[0],F[0]-H[0],this.totalFrames),this.method(this.currentFrame,H[1],F[1]-H[1],this.totalFrames)];
}else{
G=C.doMethod.call(this,E,H,F);
}
return G;
};
A.getAttribute=function(E){
var G=null;
var F=this.getEl();
if(E=="scroll"){
G=[F.scrollLeft,F.scrollTop];
}else{
G=C.getAttribute.call(this,E);
}
return G;
};
A.setAttribute=function(E,H,G){
var F=this.getEl();
if(E=="scroll"){
F.scrollLeft=H[0];
F.scrollTop=H[1];
}else{
C.setAttribute.call(this,E,H,G);
}
};
B.Scroll=D;
})();
YAHOO.register("animation",YAHOO.util.Anim,{version:"2.6.0",build:"1321"});
if(!YAHOO.util.DragDropMgr){
YAHOO.util.DragDropMgr=function(){
var A=YAHOO.util.Event,B=YAHOO.util.Dom;
return {useShim:false,_shimActive:false,_shimState:false,_debugShim:false,_createShim:function(){
var C=document.createElement("div");
C.id="yui-ddm-shim";
if(document.body.firstChild){
document.body.insertBefore(C,document.body.firstChild);
}else{
document.body.appendChild(C);
}
C.style.display="none";
C.style.backgroundColor="red";
C.style.position="absolute";
C.style.zIndex="99999";
B.setStyle(C,"opacity","0");
this._shim=C;
A.on(C,"mouseup",this.handleMouseUp,this,true);
A.on(C,"mousemove",this.handleMouseMove,this,true);
A.on(window,"scroll",this._sizeShim,this,true);
},_sizeShim:function(){
if(this._shimActive){
var C=this._shim;
C.style.height=B.getDocumentHeight()+"px";
C.style.width=B.getDocumentWidth()+"px";
C.style.top="0";
C.style.left="0";
}
},_activateShim:function(){
if(this.useShim){
if(!this._shim){
this._createShim();
}
this._shimActive=true;
var C=this._shim,D="0";
if(this._debugShim){
D=".5";
}
B.setStyle(C,"opacity",D);
this._sizeShim();
C.style.display="block";
}
},_deactivateShim:function(){
this._shim.style.display="none";
this._shimActive=false;
},_shim:null,ids:{},handleIds:{},dragCurrent:null,dragOvers:{},deltaX:0,deltaY:0,preventDefault:true,stopPropagation:true,initialized:false,locked:false,interactionInfo:null,init:function(){
this.initialized=true;
},POINT:0,INTERSECT:1,STRICT_INTERSECT:2,mode:0,_execOnAll:function(E,D){
for(var F in this.ids){
for(var C in this.ids[F]){
var G=this.ids[F][C];
if(!this.isTypeOfDD(G)){
continue;
}
G[E].apply(G,D);
}
}
},_onLoad:function(){
this.init();
A.on(document,"mouseup",this.handleMouseUp,this,true);
A.on(document,"mousemove",this.handleMouseMove,this,true);
A.on(window,"unload",this._onUnload,this,true);
A.on(window,"resize",this._onResize,this,true);
},_onResize:function(C){
this._execOnAll("resetConstraints",[]);
},lock:function(){
this.locked=true;
},unlock:function(){
this.locked=false;
},isLocked:function(){
return this.locked;
},locationCache:{},useCache:true,clickPixelThresh:3,clickTimeThresh:1000,dragThreshMet:false,clickTimeout:null,startX:0,startY:0,fromTimeout:false,regDragDrop:function(D,C){
if(!this.initialized){
this.init();
}
if(!this.ids[C]){
this.ids[C]={};
}
this.ids[C][D.id]=D;
},removeDDFromGroup:function(E,C){
if(!this.ids[C]){
this.ids[C]={};
}
var D=this.ids[C];
if(D&&D[E.id]){
delete D[E.id];
}
},_remove:function(E){
for(var D in E.groups){
if(D){
var C=this.ids[D];
if(C&&C[E.id]){
delete C[E.id];
}
}
}
delete this.handleIds[E.id];
},regHandle:function(D,C){
if(!this.handleIds[D]){
this.handleIds[D]={};
}
this.handleIds[D][C]=C;
},isDragDrop:function(C){
return (this.getDDById(C))?true:false;
},getRelated:function(H,D){
var G=[];
for(var F in H.groups){
for(var E in this.ids[F]){
var C=this.ids[F][E];
if(!this.isTypeOfDD(C)){
continue;
}
if(!D||C.isTarget){
G[G.length]=C;
}
}
}
return G;
},isLegalTarget:function(G,F){
var D=this.getRelated(G,true);
for(var E=0,C=D.length;E<C;++E){
if(D[E].id==F.id){
return true;
}
}
return false;
},isTypeOfDD:function(C){
return (C&&C.__ygDragDrop);
},isHandle:function(D,C){
return (this.handleIds[D]&&this.handleIds[D][C]);
},getDDById:function(D){
for(var C in this.ids){
if(this.ids[C][D]){
return this.ids[C][D];
}
}
return null;
},handleMouseDown:function(E,D){
this.currentTarget=YAHOO.util.Event.getTarget(E);
this.dragCurrent=D;
var C=D.getEl();
this.startX=YAHOO.util.Event.getPageX(E);
this.startY=YAHOO.util.Event.getPageY(E);
this.deltaX=this.startX-C.offsetLeft;
this.deltaY=this.startY-C.offsetTop;
this.dragThreshMet=false;
this.clickTimeout=setTimeout(function(){
var F=YAHOO.util.DDM;
F.startDrag(F.startX,F.startY);
F.fromTimeout=true;
},this.clickTimeThresh);
},startDrag:function(C,E){
if(this.dragCurrent&&this.dragCurrent.useShim){
this._shimState=this.useShim;
this.useShim=true;
}
this._activateShim();
clearTimeout(this.clickTimeout);
var D=this.dragCurrent;
if(D&&D.events.b4StartDrag){
D.b4StartDrag(C,E);
D.fireEvent("b4StartDragEvent",{x:C,y:E});
}
if(D&&D.events.startDrag){
D.startDrag(C,E);
D.fireEvent("startDragEvent",{x:C,y:E});
}
this.dragThreshMet=true;
},handleMouseUp:function(C){
if(this.dragCurrent){
clearTimeout(this.clickTimeout);
if(this.dragThreshMet){
if(this.fromTimeout){
this.fromTimeout=false;
this.handleMouseMove(C);
}
this.fromTimeout=false;
this.fireEvents(C,true);
}else{
}
this.stopDrag(C);
this.stopEvent(C);
}
},stopEvent:function(C){
if(this.stopPropagation){
YAHOO.util.Event.stopPropagation(C);
}
if(this.preventDefault){
YAHOO.util.Event.preventDefault(C);
}
},stopDrag:function(E,D){
var C=this.dragCurrent;
if(C&&!D){
if(this.dragThreshMet){
if(C.events.b4EndDrag){
C.b4EndDrag(E);
C.fireEvent("b4EndDragEvent",{e:E});
}
if(C.events.endDrag){
C.endDrag(E);
C.fireEvent("endDragEvent",{e:E});
}
}
if(C.events.mouseUp){
C.onMouseUp(E);
C.fireEvent("mouseUpEvent",{e:E});
}
}
if(this._shimActive){
this._deactivateShim();
if(this.dragCurrent&&this.dragCurrent.useShim){
this.useShim=this._shimState;
this._shimState=false;
}
}
this.dragCurrent=null;
this.dragOvers={};
},handleMouseMove:function(F){
var C=this.dragCurrent;
if(C){
if(YAHOO.util.Event.isIE&&!F.button){
this.stopEvent(F);
return this.handleMouseUp(F);
}else{
if(F.clientX<0||F.clientY<0){
}
}
if(!this.dragThreshMet){
var E=Math.abs(this.startX-YAHOO.util.Event.getPageX(F));
var D=Math.abs(this.startY-YAHOO.util.Event.getPageY(F));
if(E>this.clickPixelThresh||D>this.clickPixelThresh){
this.startDrag(this.startX,this.startY);
}
}
if(this.dragThreshMet){
if(C&&C.events.b4Drag){
C.b4Drag(F);
C.fireEvent("b4DragEvent",{e:F});
}
if(C&&C.events.drag){
C.onDrag(F);
C.fireEvent("dragEvent",{e:F});
}
if(C){
this.fireEvents(F,false);
}
}
this.stopEvent(F);
}
},fireEvents:function(V,L){
var a=this.dragCurrent;
if(!a||a.isLocked()||a.dragOnly){
return;
}
var N=YAHOO.util.Event.getPageX(V),M=YAHOO.util.Event.getPageY(V),P=new YAHOO.util.Point(N,M),K=a.getTargetCoord(P.x,P.y),F=a.getDragEl(),E=["out","over","drop","enter"],U=new YAHOO.util.Region(K.y,K.x+F.offsetWidth,K.y+F.offsetHeight,K.x),I=[],D={},Q=[],c={outEvts:[],overEvts:[],dropEvts:[],enterEvts:[]};
for(var S in this.dragOvers){
var d=this.dragOvers[S];
if(!this.isTypeOfDD(d)){
continue;
}
if(!this.isOverTarget(P,d,this.mode,U)){
c.outEvts.push(d);
}
I[S]=true;
delete this.dragOvers[S];
}
for(var R in a.groups){
if("string"!=typeof R){
continue;
}
for(S in this.ids[R]){
var G=this.ids[R][S];
if(!this.isTypeOfDD(G)){
continue;
}
if(G.isTarget&&!G.isLocked()&&G!=a){
if(this.isOverTarget(P,G,this.mode,U)){
D[R]=true;
if(L){
c.dropEvts.push(G);
}else{
if(!I[G.id]){
c.enterEvts.push(G);
}else{
c.overEvts.push(G);
}
this.dragOvers[G.id]=G;
}
}
}
}
}
this.interactionInfo={out:c.outEvts,enter:c.enterEvts,over:c.overEvts,drop:c.dropEvts,point:P,draggedRegion:U,sourceRegion:this.locationCache[a.id],validDrop:L};
for(var C in D){
Q.push(C);
}
if(L&&!c.dropEvts.length){
this.interactionInfo.validDrop=false;
if(a.events.invalidDrop){
a.onInvalidDrop(V);
a.fireEvent("invalidDropEvent",{e:V});
}
}
for(S=0;S<E.length;S++){
var Y=null;
if(c[E[S]+"Evts"]){
Y=c[E[S]+"Evts"];
}
if(Y&&Y.length){
var H=E[S].charAt(0).toUpperCase()+E[S].substr(1),X="onDrag"+H,J="b4Drag"+H,O="drag"+H+"Event",W="drag"+H;
if(this.mode){
if(a.events[J]){
a[J](V,Y,Q);
a.fireEvent(J+"Event",{event:V,info:Y,group:Q});
}
if(a.events[W]){
a[X](V,Y,Q);
a.fireEvent(O,{event:V,info:Y,group:Q});
}
}else{
for(var Z=0,T=Y.length;Z<T;++Z){
if(a.events[J]){
a[J](V,Y[Z].id,Q[0]);
a.fireEvent(J+"Event",{event:V,info:Y[Z].id,group:Q[0]});
}
if(a.events[W]){
a[X](V,Y[Z].id,Q[0]);
a.fireEvent(O,{event:V,info:Y[Z].id,group:Q[0]});
}
}
}
}
}
},getBestMatch:function(E){
var G=null;
var D=E.length;
if(D==1){
G=E[0];
}else{
for(var F=0;F<D;++F){
var C=E[F];
if(this.mode==this.INTERSECT&&C.cursorIsOver){
G=C;
break;
}else{
if(!G||!G.overlap||(C.overlap&&G.overlap.getArea()<C.overlap.getArea())){
G=C;
}
}
}
}
return G;
},refreshCache:function(D){
var F=D||this.ids;
for(var C in F){
if("string"!=typeof C){
continue;
}
for(var E in this.ids[C]){
var G=this.ids[C][E];
if(this.isTypeOfDD(G)){
var H=this.getLocation(G);
if(H){
this.locationCache[G.id]=H;
}else{
delete this.locationCache[G.id];
}
}
}
}
},verifyEl:function(D){
try{
if(D){
var C=D.offsetParent;
if(C){
return true;
}
}
}
catch(E){
}
return false;
},getLocation:function(H){
if(!this.isTypeOfDD(H)){
return null;
}
var F=H.getEl(),K,E,D,M,L,N,C,J,G;
try{
K=YAHOO.util.Dom.getXY(F);
}
catch(I){
}
if(!K){
return null;
}
E=K[0];
D=E+F.offsetWidth;
M=K[1];
L=M+F.offsetHeight;
N=M-H.padding[0];
C=D+H.padding[1];
J=L+H.padding[2];
G=E-H.padding[3];
return new YAHOO.util.Region(N,C,J,G);
},isOverTarget:function(K,C,E,F){
var G=this.locationCache[C.id];
if(!G||!this.useCache){
G=this.getLocation(C);
this.locationCache[C.id]=G;
}
if(!G){
return false;
}
C.cursorIsOver=G.contains(K);
var J=this.dragCurrent;
if(!J||(!E&&!J.constrainX&&!J.constrainY)){
return C.cursorIsOver;
}
C.overlap=null;
if(!F){
var H=J.getTargetCoord(K.x,K.y);
var D=J.getDragEl();
F=new YAHOO.util.Region(H.y,H.x+D.offsetWidth,H.y+D.offsetHeight,H.x);
}
var I=F.intersect(G);
if(I){
C.overlap=I;
return (E)?true:C.cursorIsOver;
}else{
return false;
}
},_onUnload:function(D,C){
this.unregAll();
},unregAll:function(){
if(this.dragCurrent){
this.stopDrag();
this.dragCurrent=null;
}
this._execOnAll("unreg",[]);
this.ids={};
},elementCache:{},getElWrapper:function(D){
var C=this.elementCache[D];
if(!C||!C.el){
C=this.elementCache[D]=new this.ElementWrapper(YAHOO.util.Dom.get(D));
}
return C;
},getElement:function(C){
return YAHOO.util.Dom.get(C);
},getCss:function(D){
var C=YAHOO.util.Dom.get(D);
return (C)?C.style:null;
},ElementWrapper:function(C){
this.el=C||null;
this.id=this.el&&C.id;
this.css=this.el&&C.style;
},getPosX:function(C){
return YAHOO.util.Dom.getX(C);
},getPosY:function(C){
return YAHOO.util.Dom.getY(C);
},swapNode:function(E,C){
if(E.swapNode){
E.swapNode(C);
}else{
var F=C.parentNode;
var D=C.nextSibling;
if(D==E){
F.insertBefore(E,C);
}else{
if(C==E.nextSibling){
F.insertBefore(C,E);
}else{
E.parentNode.replaceChild(C,E);
F.insertBefore(E,D);
}
}
}
},getScroll:function(){
var E,C,F=document.documentElement,D=document.body;
if(F&&(F.scrollTop||F.scrollLeft)){
E=F.scrollTop;
C=F.scrollLeft;
}else{
if(D){
E=D.scrollTop;
C=D.scrollLeft;
}else{
}
}
return {top:E,left:C};
},getStyle:function(D,C){
return YAHOO.util.Dom.getStyle(D,C);
},getScrollTop:function(){
return this.getScroll().top;
},getScrollLeft:function(){
return this.getScroll().left;
},moveToEl:function(C,E){
var D=YAHOO.util.Dom.getXY(E);
YAHOO.util.Dom.setXY(C,D);
},getClientHeight:function(){
return YAHOO.util.Dom.getViewportHeight();
},getClientWidth:function(){
return YAHOO.util.Dom.getViewportWidth();
},numericSort:function(D,C){
return (D-C);
},_timeoutCount:0,_addListeners:function(){
var C=YAHOO.util.DDM;
if(YAHOO.util.Event&&document){
C._onLoad();
}else{
if(C._timeoutCount>2000){
}else{
setTimeout(C._addListeners,10);
if(document&&document.body){
C._timeoutCount+=1;
}
}
}
},handleWasClicked:function(C,E){
if(this.isHandle(E,C.id)){
return true;
}else{
var D=C.parentNode;
while(D){
if(this.isHandle(E,D.id)){
return true;
}else{
D=D.parentNode;
}
}
}
return false;
}};
}();
YAHOO.util.DDM=YAHOO.util.DragDropMgr;
YAHOO.util.DDM._addListeners();
}
(function(){
var A=YAHOO.util.Event;
var B=YAHOO.util.Dom;
YAHOO.util.DragDrop=function(E,C,D){
if(E){
this.init(E,C,D);
}
};
YAHOO.util.DragDrop.prototype={events:null,on:function(){
this.subscribe.apply(this,arguments);
},id:null,config:null,dragElId:null,handleElId:null,invalidHandleTypes:null,invalidHandleIds:null,invalidHandleClasses:null,startPageX:0,startPageY:0,groups:null,locked:false,lock:function(){
this.locked=true;
},unlock:function(){
this.locked=false;
},isTarget:true,padding:null,dragOnly:false,useShim:false,_domRef:null,__ygDragDrop:true,constrainX:false,constrainY:false,minX:0,maxX:0,minY:0,maxY:0,deltaX:0,deltaY:0,maintainOffset:false,xTicks:null,yTicks:null,primaryButtonOnly:true,available:false,hasOuterHandles:false,cursorIsOver:false,overlap:null,b4StartDrag:function(C,D){
},startDrag:function(C,D){
},b4Drag:function(C){
},onDrag:function(C){
},onDragEnter:function(C,D){
},b4DragOver:function(C){
},onDragOver:function(C,D){
},b4DragOut:function(C){
},onDragOut:function(C,D){
},b4DragDrop:function(C){
},onDragDrop:function(C,D){
},onInvalidDrop:function(C){
},b4EndDrag:function(C){
},endDrag:function(C){
},b4MouseDown:function(C){
},onMouseDown:function(C){
},onMouseUp:function(C){
},onAvailable:function(){
},getEl:function(){
if(!this._domRef){
this._domRef=B.get(this.id);
}
return this._domRef;
},getDragEl:function(){
return B.get(this.dragElId);
},init:function(F,C,D){
this.initTarget(F,C,D);
A.on(this._domRef||this.id,"mousedown",this.handleMouseDown,this,true);
for(var E in this.events){
this.createEvent(E+"Event");
}
},initTarget:function(E,C,D){
this.config=D||{};
this.events={};
this.DDM=YAHOO.util.DDM;
this.groups={};
if(typeof E!=="string"){
this._domRef=E;
E=B.generateId(E);
}
this.id=E;
this.addToGroup((C)?C:"default");
this.handleElId=E;
A.onAvailable(E,this.handleOnAvailable,this,true);
this.setDragElId(E);
this.invalidHandleTypes={A:"A"};
this.invalidHandleIds={};
this.invalidHandleClasses=[];
this.applyConfig();
},applyConfig:function(){
this.events={mouseDown:true,b4MouseDown:true,mouseUp:true,b4StartDrag:true,startDrag:true,b4EndDrag:true,endDrag:true,drag:true,b4Drag:true,invalidDrop:true,b4DragOut:true,dragOut:true,dragEnter:true,b4DragOver:true,dragOver:true,b4DragDrop:true,dragDrop:true};
if(this.config.events){
for(var C in this.config.events){
if(this.config.events[C]===false){
this.events[C]=false;
}
}
}
this.padding=this.config.padding||[0,0,0,0];
this.isTarget=(this.config.isTarget!==false);
this.maintainOffset=(this.config.maintainOffset);
this.primaryButtonOnly=(this.config.primaryButtonOnly!==false);
this.dragOnly=((this.config.dragOnly===true)?true:false);
this.useShim=((this.config.useShim===true)?true:false);
},handleOnAvailable:function(){
this.available=true;
this.resetConstraints();
this.onAvailable();
},setPadding:function(E,C,F,D){
if(!C&&0!==C){
this.padding=[E,E,E,E];
}else{
if(!F&&0!==F){
this.padding=[E,C,E,C];
}else{
this.padding=[E,C,F,D];
}
}
},setInitPosition:function(F,E){
var G=this.getEl();
if(!this.DDM.verifyEl(G)){
if(G&&G.style&&(G.style.display=="none")){
}else{
}
return;
}
var D=F||0;
var C=E||0;
var H=B.getXY(G);
this.initPageX=H[0]-D;
this.initPageY=H[1]-C;
this.lastPageX=H[0];
this.lastPageY=H[1];
this.setStartPosition(H);
},setStartPosition:function(D){
var C=D||B.getXY(this.getEl());
this.deltaSetXY=null;
this.startPageX=C[0];
this.startPageY=C[1];
},addToGroup:function(C){
this.groups[C]=true;
this.DDM.regDragDrop(this,C);
},removeFromGroup:function(C){
if(this.groups[C]){
delete this.groups[C];
}
this.DDM.removeDDFromGroup(this,C);
},setDragElId:function(C){
this.dragElId=C;
},setHandleElId:function(C){
if(typeof C!=="string"){
C=B.generateId(C);
}
this.handleElId=C;
this.DDM.regHandle(this.id,C);
},setOuterHandleElId:function(C){
if(typeof C!=="string"){
C=B.generateId(C);
}
A.on(C,"mousedown",this.handleMouseDown,this,true);
this.setHandleElId(C);
this.hasOuterHandles=true;
},unreg:function(){
A.removeListener(this.id,"mousedown",this.handleMouseDown);
this._domRef=null;
this.DDM._remove(this);
},isLocked:function(){
return (this.DDM.isLocked()||this.locked);
},handleMouseDown:function(J,I){
var D=J.which||J.button;
if(this.primaryButtonOnly&&D>1){
return;
}
if(this.isLocked()){
return;
}
var C=this.b4MouseDown(J),F=true;
if(this.events.b4MouseDown){
F=this.fireEvent("b4MouseDownEvent",J);
}
var E=this.onMouseDown(J),H=true;
if(this.events.mouseDown){
H=this.fireEvent("mouseDownEvent",J);
}
if((C===false)||(E===false)||(F===false)||(H===false)){
return;
}
this.DDM.refreshCache(this.groups);
var G=new YAHOO.util.Point(A.getPageX(J),A.getPageY(J));
if(!this.hasOuterHandles&&!this.DDM.isOverTarget(G,this)){
}else{
if(this.clickValidator(J)){
this.setStartPosition();
this.DDM.handleMouseDown(J,this);
this.DDM.stopEvent(J);
}else{
}
}
},clickValidator:function(D){
var C=YAHOO.util.Event.getTarget(D);
return (this.isValidHandleChild(C)&&(this.id==this.handleElId||this.DDM.handleWasClicked(C,this.id)));
},getTargetCoord:function(E,D){
var C=E-this.deltaX;
var F=D-this.deltaY;
if(this.constrainX){
if(C<this.minX){
C=this.minX;
}
if(C>this.maxX){
C=this.maxX;
}
}
if(this.constrainY){
if(F<this.minY){
F=this.minY;
}
if(F>this.maxY){
F=this.maxY;
}
}
C=this.getTick(C,this.xTicks);
F=this.getTick(F,this.yTicks);
return {x:C,y:F};
},addInvalidHandleType:function(C){
var D=C.toUpperCase();
this.invalidHandleTypes[D]=D;
},addInvalidHandleId:function(C){
if(typeof C!=="string"){
C=B.generateId(C);
}
this.invalidHandleIds[C]=C;
},addInvalidHandleClass:function(C){
this.invalidHandleClasses.push(C);
},removeInvalidHandleType:function(C){
var D=C.toUpperCase();
delete this.invalidHandleTypes[D];
},removeInvalidHandleId:function(C){
if(typeof C!=="string"){
C=B.generateId(C);
}
delete this.invalidHandleIds[C];
},removeInvalidHandleClass:function(D){
for(var E=0,C=this.invalidHandleClasses.length;E<C;++E){
if(this.invalidHandleClasses[E]==D){
delete this.invalidHandleClasses[E];
}
}
},isValidHandleChild:function(F){
var E=true;
var H;
try{
H=F.nodeName.toUpperCase();
}
catch(G){
H=F.nodeName;
}
E=E&&!this.invalidHandleTypes[H];
E=E&&!this.invalidHandleIds[F.id];
for(var D=0,C=this.invalidHandleClasses.length;E&&D<C;++D){
E=!B.hasClass(F,this.invalidHandleClasses[D]);
}
return E;
},setXTicks:function(F,C){
this.xTicks=[];
this.xTickSize=C;
var E={};
for(var D=this.initPageX;D>=this.minX;D=D-C){
if(!E[D]){
this.xTicks[this.xTicks.length]=D;
E[D]=true;
}
}
for(D=this.initPageX;D<=this.maxX;D=D+C){
if(!E[D]){
this.xTicks[this.xTicks.length]=D;
E[D]=true;
}
}
this.xTicks.sort(this.DDM.numericSort);
},setYTicks:function(F,C){
this.yTicks=[];
this.yTickSize=C;
var E={};
for(var D=this.initPageY;D>=this.minY;D=D-C){
if(!E[D]){
this.yTicks[this.yTicks.length]=D;
E[D]=true;
}
}
for(D=this.initPageY;D<=this.maxY;D=D+C){
if(!E[D]){
this.yTicks[this.yTicks.length]=D;
E[D]=true;
}
}
this.yTicks.sort(this.DDM.numericSort);
},setXConstraint:function(E,D,C){
this.leftConstraint=parseInt(E,10);
this.rightConstraint=parseInt(D,10);
this.minX=this.initPageX-this.leftConstraint;
this.maxX=this.initPageX+this.rightConstraint;
if(C){
this.setXTicks(this.initPageX,C);
}
this.constrainX=true;
},clearConstraints:function(){
this.constrainX=false;
this.constrainY=false;
this.clearTicks();
},clearTicks:function(){
this.xTicks=null;
this.yTicks=null;
this.xTickSize=0;
this.yTickSize=0;
},setYConstraint:function(C,E,D){
this.topConstraint=parseInt(C,10);
this.bottomConstraint=parseInt(E,10);
this.minY=this.initPageY-this.topConstraint;
this.maxY=this.initPageY+this.bottomConstraint;
if(D){
this.setYTicks(this.initPageY,D);
}
this.constrainY=true;
},resetConstraints:function(){
if(this.initPageX||this.initPageX===0){
var D=(this.maintainOffset)?this.lastPageX-this.initPageX:0;
var C=(this.maintainOffset)?this.lastPageY-this.initPageY:0;
this.setInitPosition(D,C);
}else{
this.setInitPosition();
}
if(this.constrainX){
this.setXConstraint(this.leftConstraint,this.rightConstraint,this.xTickSize);
}
if(this.constrainY){
this.setYConstraint(this.topConstraint,this.bottomConstraint,this.yTickSize);
}
},getTick:function(I,F){
if(!F){
return I;
}else{
if(F[0]>=I){
return F[0];
}else{
for(var D=0,C=F.length;D<C;++D){
var E=D+1;
if(F[E]&&F[E]>=I){
var H=I-F[D];
var G=F[E]-I;
return (G>H)?F[D]:F[E];
}
}
return F[F.length-1];
}
}
},toString:function(){
return ("DragDrop "+this.id);
}};
YAHOO.augment(YAHOO.util.DragDrop,YAHOO.util.EventProvider);
})();
YAHOO.util.DD=function(C,A,B){
if(C){
this.init(C,A,B);
}
};
YAHOO.extend(YAHOO.util.DD,YAHOO.util.DragDrop,{scroll:true,autoOffset:function(C,B){
var A=C-this.startPageX;
var D=B-this.startPageY;
this.setDelta(A,D);
},setDelta:function(B,A){
this.deltaX=B;
this.deltaY=A;
},setDragElPos:function(C,B){
var A=this.getDragEl();
this.alignElWithMouse(A,C,B);
},alignElWithMouse:function(C,G,F){
var E=this.getTargetCoord(G,F);
if(!this.deltaSetXY){
var H=[E.x,E.y];
YAHOO.util.Dom.setXY(C,H);
var D=parseInt(YAHOO.util.Dom.getStyle(C,"left"),10);
var B=parseInt(YAHOO.util.Dom.getStyle(C,"top"),10);
this.deltaSetXY=[D-E.x,B-E.y];
}else{
YAHOO.util.Dom.setStyle(C,"left",(E.x+this.deltaSetXY[0])+"px");
YAHOO.util.Dom.setStyle(C,"top",(E.y+this.deltaSetXY[1])+"px");
}
this.cachePosition(E.x,E.y);
var A=this;
setTimeout(function(){
A.autoScroll.call(A,E.x,E.y,C.offsetHeight,C.offsetWidth);
},0);
},cachePosition:function(B,A){
if(B){
this.lastPageX=B;
this.lastPageY=A;
}else{
var C=YAHOO.util.Dom.getXY(this.getEl());
this.lastPageX=C[0];
this.lastPageY=C[1];
}
},autoScroll:function(J,I,E,K){
if(this.scroll){
var L=this.DDM.getClientHeight();
var B=this.DDM.getClientWidth();
var N=this.DDM.getScrollTop();
var D=this.DDM.getScrollLeft();
var H=E+I;
var M=K+J;
var G=(L+N-I-this.deltaY);
var F=(B+D-J-this.deltaX);
var C=40;
var A=(document.all)?80:30;
if(H>L&&G<C){
window.scrollTo(D,N+A);
}
if(I<N&&N>0&&I-N<C){
window.scrollTo(D,N-A);
}
if(M>B&&F<C){
window.scrollTo(D+A,N);
}
if(J<D&&D>0&&J-D<C){
window.scrollTo(D-A,N);
}
}
},applyConfig:function(){
YAHOO.util.DD.superclass.applyConfig.call(this);
this.scroll=(this.config.scroll!==false);
},b4MouseDown:function(A){
this.setStartPosition();
this.autoOffset(YAHOO.util.Event.getPageX(A),YAHOO.util.Event.getPageY(A));
},b4Drag:function(A){
this.setDragElPos(YAHOO.util.Event.getPageX(A),YAHOO.util.Event.getPageY(A));
},toString:function(){
return ("DD "+this.id);
}});
YAHOO.util.DDProxy=function(C,A,B){
if(C){
this.init(C,A,B);
this.initFrame();
}
};
YAHOO.util.DDProxy.dragElId="ygddfdiv";
YAHOO.extend(YAHOO.util.DDProxy,YAHOO.util.DD,{resizeFrame:true,centerFrame:false,createFrame:function(){
var B=this,A=document.body;
if(!A||!A.firstChild){
setTimeout(function(){
B.createFrame();
},50);
return;
}
var G=this.getDragEl(),E=YAHOO.util.Dom;
if(!G){
G=document.createElement("div");
G.id=this.dragElId;
var D=G.style;
D.position="absolute";
D.visibility="hidden";
D.cursor="move";
D.border="2px solid #aaa";
D.zIndex=999;
D.height="25px";
D.width="25px";
var C=document.createElement("div");
E.setStyle(C,"height","100%");
E.setStyle(C,"width","100%");
E.setStyle(C,"background-color","#ccc");
E.setStyle(C,"opacity","0");
G.appendChild(C);
if(YAHOO.env.ua.ie){
var F=document.createElement("iframe");
F.setAttribute("src","javascript: false;");
F.setAttribute("scrolling","no");
F.setAttribute("frameborder","0");
G.insertBefore(F,G.firstChild);
E.setStyle(F,"height","100%");
E.setStyle(F,"width","100%");
E.setStyle(F,"position","absolute");
E.setStyle(F,"top","0");
E.setStyle(F,"left","0");
E.setStyle(F,"opacity","0");
E.setStyle(F,"zIndex","-1");
E.setStyle(F.nextSibling,"zIndex","2");
}
A.insertBefore(G,A.firstChild);
}
},initFrame:function(){
this.createFrame();
},applyConfig:function(){
YAHOO.util.DDProxy.superclass.applyConfig.call(this);
this.resizeFrame=(this.config.resizeFrame!==false);
this.centerFrame=(this.config.centerFrame);
this.setDragElId(this.config.dragElId||YAHOO.util.DDProxy.dragElId);
},showFrame:function(E,D){
var C=this.getEl();
var A=this.getDragEl();
var B=A.style;
this._resizeProxy();
if(this.centerFrame){
this.setDelta(Math.round(parseInt(B.width,10)/2),Math.round(parseInt(B.height,10)/2));
}
this.setDragElPos(E,D);
YAHOO.util.Dom.setStyle(A,"visibility","visible");
},_resizeProxy:function(){
if(this.resizeFrame){
var H=YAHOO.util.Dom;
var B=this.getEl();
var C=this.getDragEl();
var G=parseInt(H.getStyle(C,"borderTopWidth"),10);
var I=parseInt(H.getStyle(C,"borderRightWidth"),10);
var F=parseInt(H.getStyle(C,"borderBottomWidth"),10);
var D=parseInt(H.getStyle(C,"borderLeftWidth"),10);
if(isNaN(G)){
G=0;
}
if(isNaN(I)){
I=0;
}
if(isNaN(F)){
F=0;
}
if(isNaN(D)){
D=0;
}
var E=Math.max(0,B.offsetWidth-I-D);
var A=Math.max(0,B.offsetHeight-G-F);
H.setStyle(C,"width",E+"px");
H.setStyle(C,"height",A+"px");
}
},b4MouseDown:function(B){
this.setStartPosition();
var A=YAHOO.util.Event.getPageX(B);
var C=YAHOO.util.Event.getPageY(B);
this.autoOffset(A,C);
},b4StartDrag:function(A,B){
this.showFrame(A,B);
},b4EndDrag:function(A){
YAHOO.util.Dom.setStyle(this.getDragEl(),"visibility","hidden");
},endDrag:function(D){
var C=YAHOO.util.Dom;
var B=this.getEl();
var A=this.getDragEl();
C.setStyle(A,"visibility","");
C.setStyle(B,"visibility","hidden");
YAHOO.util.DDM.moveToEl(B,A);
C.setStyle(A,"visibility","hidden");
C.setStyle(B,"visibility","");
},toString:function(){
return ("DDProxy "+this.id);
}});
YAHOO.util.DDTarget=function(C,A,B){
if(C){
this.initTarget(C,A,B);
}
};
YAHOO.extend(YAHOO.util.DDTarget,YAHOO.util.DragDrop,{toString:function(){
return ("DDTarget "+this.id);
}});
YAHOO.register("dragdrop",YAHOO.util.DragDropMgr,{version:"2.6.0",build:"1321"});
YAHOO.widget.Slider=function(C,A,B,D){
YAHOO.widget.Slider.ANIM_AVAIL=(!YAHOO.lang.isUndefined(YAHOO.util.Anim));
if(C){
this.init(C,A,true);
this.initSlider(D);
this.initThumb(B);
}
};
YAHOO.widget.Slider.getHorizSlider=function(B,C,E,D,A){
return new YAHOO.widget.Slider(B,B,new YAHOO.widget.SliderThumb(C,B,E,D,0,0,A),"horiz");
};
YAHOO.widget.Slider.getVertSlider=function(C,D,A,E,B){
return new YAHOO.widget.Slider(C,C,new YAHOO.widget.SliderThumb(D,C,0,0,A,E,B),"vert");
};
YAHOO.widget.Slider.getSliderRegion=function(C,D,F,E,A,G,B){
return new YAHOO.widget.Slider(C,C,new YAHOO.widget.SliderThumb(D,C,F,E,A,G,B),"region");
};
YAHOO.widget.Slider.ANIM_AVAIL=false;
YAHOO.extend(YAHOO.widget.Slider,YAHOO.util.DragDrop,{dragOnly:true,initSlider:function(A){
this.type=A;
this.createEvent("change",this);
this.createEvent("slideStart",this);
this.createEvent("slideEnd",this);
this.isTarget=false;
this.animate=YAHOO.widget.Slider.ANIM_AVAIL;
this.backgroundEnabled=true;
this.tickPause=40;
this.enableKeys=true;
this.keyIncrement=20;
this.moveComplete=true;
this.animationDuration=0.2;
this.SOURCE_UI_EVENT=1;
this.SOURCE_SET_VALUE=2;
this.valueChangeSource=0;
this._silent=false;
this.lastOffset=[0,0];
},initThumb:function(B){
var A=this;
this.thumb=B;
B.cacheBetweenDrags=true;
if(B._isHoriz&&B.xTicks&&B.xTicks.length){
this.tickPause=Math.round(360/B.xTicks.length);
}else{
if(B.yTicks&&B.yTicks.length){
this.tickPause=Math.round(360/B.yTicks.length);
}
}
B.onAvailable=function(){
return A.setStartSliderState();
};
B.onMouseDown=function(){
return A.focus();
};
B.startDrag=function(){
A._slideStart();
};
B.onDrag=function(){
A.fireEvents(true);
};
B.onMouseUp=function(){
A.thumbMouseUp();
};
},onAvailable:function(){
var A=YAHOO.util.Event;
A.on(this.id,"keydown",this.handleKeyDown,this,true);
A.on(this.id,"keypress",this.handleKeyPress,this,true);
},handleKeyPress:function(C){
if(this.enableKeys){
var A=YAHOO.util.Event;
var B=A.getCharCode(C);
switch(B){
case 37:
case 38:
case 39:
case 40:
case 36:
case 35:
A.preventDefault(C);
break;
default:
}
}
},handleKeyDown:function(E){
if(this.enableKeys){
var G=YAHOO.util.Event;
var C=G.getCharCode(E),I=this.thumb;
var B=this.getXValue(),F=this.getYValue();
var H=false;
var D=true;
switch(C){
case 37:
B-=this.keyIncrement;
break;
case 38:
F-=this.keyIncrement;
break;
case 39:
B+=this.keyIncrement;
break;
case 40:
F+=this.keyIncrement;
break;
case 36:
B=I.leftConstraint;
F=I.topConstraint;
break;
case 35:
B=I.rightConstraint;
F=I.bottomConstraint;
break;
default:
D=false;
}
if(D){
if(I._isRegion){
this.setRegionValue(B,F,true);
}else{
var A=(I._isHoriz)?B:F;
this.setValue(A,true);
}
G.stopEvent(E);
}
}
},setStartSliderState:function(){
this.setThumbCenterPoint();
this.baselinePos=YAHOO.util.Dom.getXY(this.getEl());
this.thumb.startOffset=this.thumb.getOffsetFromParent(this.baselinePos);
if(this.thumb._isRegion){
if(this.deferredSetRegionValue){
this.setRegionValue.apply(this,this.deferredSetRegionValue);
this.deferredSetRegionValue=null;
}else{
this.setRegionValue(0,0,true,true,true);
}
}else{
if(this.deferredSetValue){
this.setValue.apply(this,this.deferredSetValue);
this.deferredSetValue=null;
}else{
this.setValue(0,true,true,true);
}
}
},setThumbCenterPoint:function(){
var A=this.thumb.getEl();
if(A){
this.thumbCenterPoint={x:parseInt(A.offsetWidth/2,10),y:parseInt(A.offsetHeight/2,10)};
}
},lock:function(){
this.thumb.lock();
this.locked=true;
},unlock:function(){
this.thumb.unlock();
this.locked=false;
},thumbMouseUp:function(){
if(!this.isLocked()&&!this.moveComplete){
this.endMove();
}
},onMouseUp:function(){
if(this.backgroundEnabled&&!this.isLocked()&&!this.moveComplete){
this.endMove();
}
},getThumb:function(){
return this.thumb;
},focus:function(){
this.valueChangeSource=this.SOURCE_UI_EVENT;
var A=this.getEl();
if(A.focus){
try{
A.focus();
}
catch(B){
}
}
this.verifyOffset();
if(this.isLocked()){
return false;
}else{
this._slideStart();
return true;
}
},onChange:function(A,B){
},onSlideStart:function(){
},onSlideEnd:function(){
},getValue:function(){
return this.thumb.getValue();
},getXValue:function(){
return this.thumb.getXValue();
},getYValue:function(){
return this.thumb.getYValue();
},handleThumbChange:function(){
},setValue:function(G,C,D,A){
this._silent=A;
this.valueChangeSource=this.SOURCE_SET_VALUE;
if(!this.thumb.available){
this.deferredSetValue=arguments;
return false;
}
if(this.isLocked()&&!D){
return false;
}
if(isNaN(G)){
return false;
}
var B=this.thumb;
B.lastOffset=[G,G];
var F,E;
this.verifyOffset(true);
if(B._isRegion){
return false;
}else{
if(B._isHoriz){
this._slideStart();
F=B.initPageX+G+this.thumbCenterPoint.x;
this.moveThumb(F,B.initPageY,C);
}else{
this._slideStart();
E=B.initPageY+G+this.thumbCenterPoint.y;
this.moveThumb(B.initPageX,E,C);
}
}
return true;
},setRegionValue:function(H,A,D,E,B){
this._silent=B;
this.valueChangeSource=this.SOURCE_SET_VALUE;
if(!this.thumb.available){
this.deferredSetRegionValue=arguments;
return false;
}
if(this.isLocked()&&!E){
return false;
}
if(isNaN(H)){
return false;
}
var C=this.thumb;
C.lastOffset=[H,A];
this.verifyOffset(true);
if(C._isRegion){
this._slideStart();
var G=C.initPageX+H+this.thumbCenterPoint.x;
var F=C.initPageY+A+this.thumbCenterPoint.y;
this.moveThumb(G,F,D);
return true;
}
return false;
},verifyOffset:function(B){
var C=YAHOO.util.Dom.getXY(this.getEl()),A=this.thumb;
if(C){
if(C[0]!=this.baselinePos[0]||C[1]!=this.baselinePos[1]){
this.setInitPosition();
this.baselinePos=C;
A.initPageX=this.initPageX+A.startOffset[0];
A.initPageY=this.initPageY+A.startOffset[1];
A.deltaSetXY=null;
this.resetThumbConstraints();
return false;
}
}
return true;
},moveThumb:function(G,F,E,D){
var H=this.thumb;
var I=this;
if(!H.available){
return;
}
H.setDelta(this.thumbCenterPoint.x,this.thumbCenterPoint.y);
var B=H.getTargetCoord(G,F);
var C=[Math.round(B.x),Math.round(B.y)];
this._slideStart();
if(this.animate&&YAHOO.widget.Slider.ANIM_AVAIL&&H._graduated&&!E){
this.lock();
this.curCoord=YAHOO.util.Dom.getXY(this.thumb.getEl());
this.curCoord=[Math.round(this.curCoord[0]),Math.round(this.curCoord[1])];
setTimeout(function(){
I.moveOneTick(C);
},this.tickPause);
}else{
if(this.animate&&YAHOO.widget.Slider.ANIM_AVAIL&&!E){
this.lock();
var A=new YAHOO.util.Motion(H.id,{points:{to:C}},this.animationDuration,YAHOO.util.Easing.easeOut);
A.onComplete.subscribe(function(){
I.endMove();
});
A.animate();
}else{
H.setDragElPos(G,F);
if(!D){
this.endMove();
}
}
}
},_slideStart:function(){
if(!this._sliding){
if(!this._silent){
this.onSlideStart();
this.fireEvent("slideStart");
}
this._sliding=true;
}
},_slideEnd:function(){
if(this._sliding&&this.moveComplete){
var A=this._silent;
this._sliding=false;
this._silent=false;
this.moveComplete=false;
if(!A){
this.onSlideEnd();
this.fireEvent("slideEnd");
}
}
},moveOneTick:function(B){
var E=this.thumb,D;
var F=null,A,G;
if(E._isRegion){
F=this._getNextX(this.curCoord,B);
A=(F!==null)?F[0]:this.curCoord[0];
F=this._getNextY(this.curCoord,B);
G=(F!==null)?F[1]:this.curCoord[1];
F=A!==this.curCoord[0]||G!==this.curCoord[1]?[A,G]:null;
}else{
if(E._isHoriz){
F=this._getNextX(this.curCoord,B);
}else{
F=this._getNextY(this.curCoord,B);
}
}
if(F){
this.curCoord=F;
this.thumb.alignElWithMouse(E.getEl(),F[0]+this.thumbCenterPoint.x,F[1]+this.thumbCenterPoint.y);
if(!(F[0]==B[0]&&F[1]==B[1])){
var C=this;
setTimeout(function(){
C.moveOneTick(B);
},this.tickPause);
}else{
this.endMove();
}
}else{
this.endMove();
}
},_getNextX:function(A,B){
var D=this.thumb;
var F;
var C=[];
var E=null;
if(A[0]>B[0]){
F=D.tickSize-this.thumbCenterPoint.x;
C=D.getTargetCoord(A[0]-F,A[1]);
E=[C.x,C.y];
}else{
if(A[0]<B[0]){
F=D.tickSize+this.thumbCenterPoint.x;
C=D.getTargetCoord(A[0]+F,A[1]);
E=[C.x,C.y];
}else{
}
}
return E;
},_getNextY:function(A,B){
var D=this.thumb;
var F;
var C=[];
var E=null;
if(A[1]>B[1]){
F=D.tickSize-this.thumbCenterPoint.y;
C=D.getTargetCoord(A[0],A[1]-F);
E=[C.x,C.y];
}else{
if(A[1]<B[1]){
F=D.tickSize+this.thumbCenterPoint.y;
C=D.getTargetCoord(A[0],A[1]+F);
E=[C.x,C.y];
}else{
}
}
return E;
},b4MouseDown:function(A){
if(!this.backgroundEnabled){
return false;
}
this.thumb.autoOffset();
this.resetThumbConstraints();
},onMouseDown:function(B){
if(!this.backgroundEnabled||this.isLocked()){
return false;
}
var A=YAHOO.util.Event.getPageX(B);
var C=YAHOO.util.Event.getPageY(B);
this.focus();
this.moveThumb(A,C);
},onDrag:function(B){
if(this.backgroundEnabled&&!this.isLocked()){
var A=YAHOO.util.Event.getPageX(B);
var C=YAHOO.util.Event.getPageY(B);
this.moveThumb(A,C,true,true);
this.fireEvents();
}
},endMove:function(){
this.unlock();
this.moveComplete=true;
this.fireEvents();
},resetThumbConstraints:function(){
var A=this.thumb;
A.setXConstraint(A.leftConstraint,A.rightConstraint,A.xTickSize);
A.setYConstraint(A.topConstraint,A.bottomConstraint,A.xTickSize);
},fireEvents:function(C){
var B=this.thumb;
if(!C){
B.cachePosition();
}
if(!this.isLocked()){
if(B._isRegion){
var E=B.getXValue();
var D=B.getYValue();
if(E!=this.previousX||D!=this.previousY){
if(!this._silent){
this.onChange(E,D);
this.fireEvent("change",{x:E,y:D});
}
}
this.previousX=E;
this.previousY=D;
}else{
var A=B.getValue();
if(A!=this.previousVal){
if(!this._silent){
this.onChange(A);
this.fireEvent("change",A);
}
}
this.previousVal=A;
}
this._slideEnd();
}
},toString:function(){
return ("Slider ("+this.type+") "+this.id);
}});
YAHOO.augment(YAHOO.widget.Slider,YAHOO.util.EventProvider);
YAHOO.widget.SliderThumb=function(G,B,E,D,A,F,C){
if(G){
YAHOO.widget.SliderThumb.superclass.constructor.call(this,G,B);
this.parentElId=B;
}
this.isTarget=false;
this.tickSize=C;
this.maintainOffset=true;
this.initSlider(E,D,A,F,C);
this.scroll=false;
};
YAHOO.extend(YAHOO.widget.SliderThumb,YAHOO.util.DD,{startOffset:null,dragOnly:true,_isHoriz:false,_prevVal:0,_graduated:false,getOffsetFromParent0:function(C){
var A=YAHOO.util.Dom.getXY(this.getEl());
var B=C||YAHOO.util.Dom.getXY(this.parentElId);
return [(A[0]-B[0]),(A[1]-B[1])];
},getOffsetFromParent:function(H){
var A=this.getEl(),E;
if(!this.deltaOffset){
var I=YAHOO.util.Dom.getXY(A);
var F=H||YAHOO.util.Dom.getXY(this.parentElId);
E=[(I[0]-F[0]),(I[1]-F[1])];
var B=parseInt(YAHOO.util.Dom.getStyle(A,"left"),10);
var K=parseInt(YAHOO.util.Dom.getStyle(A,"top"),10);
var D=B-E[0];
var C=K-E[1];
if(isNaN(D)||isNaN(C)){
}else{
this.deltaOffset=[D,C];
}
}else{
var J=parseInt(YAHOO.util.Dom.getStyle(A,"left"),10);
var G=parseInt(YAHOO.util.Dom.getStyle(A,"top"),10);
E=[J+this.deltaOffset[0],G+this.deltaOffset[1]];
}
return E;
},initSlider:function(D,C,A,E,B){
this.initLeft=D;
this.initRight=C;
this.initUp=A;
this.initDown=E;
this.setXConstraint(D,C,B);
this.setYConstraint(A,E,B);
if(B&&B>1){
this._graduated=true;
}
this._isHoriz=(D||C);
this._isVert=(A||E);
this._isRegion=(this._isHoriz&&this._isVert);
},clearTicks:function(){
YAHOO.widget.SliderThumb.superclass.clearTicks.call(this);
this.tickSize=0;
this._graduated=false;
},getValue:function(){
return (this._isHoriz)?this.getXValue():this.getYValue();
},getXValue:function(){
if(!this.available){
return 0;
}
var A=this.getOffsetFromParent();
if(YAHOO.lang.isNumber(A[0])){
this.lastOffset=A;
return (A[0]-this.startOffset[0]);
}else{
return (this.lastOffset[0]-this.startOffset[0]);
}
},getYValue:function(){
if(!this.available){
return 0;
}
var A=this.getOffsetFromParent();
if(YAHOO.lang.isNumber(A[1])){
this.lastOffset=A;
return (A[1]-this.startOffset[1]);
}else{
return (this.lastOffset[1]-this.startOffset[1]);
}
},toString:function(){
return "SliderThumb "+this.id;
},onChange:function(A,B){
}});
YAHOO.widget.DualSlider=function(E,B,D,A){
var C=this,G=YAHOO.lang;
this.minSlider=E;
this.maxSlider=B;
this.activeSlider=E;
this.isHoriz=E.thumb._isHoriz;
A=YAHOO.lang.isArray(A)?A:[0,D];
A[0]=Math.min(Math.max(parseInt(A[0],10)|0,0),D);
A[1]=Math.max(Math.min(parseInt(A[1],10)|0,D),0);
if(A[0]>A[1]){
A.splice(0,2,A[1],A[0]);
}
var F={min:false,max:false};
this.minSlider.thumb.onAvailable=function(){
E.setStartSliderState();
F.min=true;
if(F.max){
E.setValue(A[0],true,true,true);
B.setValue(A[1],true,true,true);
C.updateValue(true);
C.fireEvent("ready",C);
}
};
this.maxSlider.thumb.onAvailable=function(){
B.setStartSliderState();
F.max=true;
if(F.min){
E.setValue(A[0],true,true,true);
B.setValue(A[1],true,true,true);
C.updateValue(true);
C.fireEvent("ready",C);
}
};
E.onMouseDown=function(H){
return C._handleMouseDown(H);
};
B.onMouseDown=function(H){
if(C.minSlider.isLocked()&&!C.minSlider._sliding){
return C._handleMouseDown(H);
}else{
YAHOO.util.Event.stopEvent(H);
return false;
}
};
E.onDrag=B.onDrag=function(H){
C._handleDrag(H);
};
E.subscribe("change",this._handleMinChange,E,this);
E.subscribe("slideStart",this._handleSlideStart,E,this);
E.subscribe("slideEnd",this._handleSlideEnd,E,this);
B.subscribe("change",this._handleMaxChange,B,this);
B.subscribe("slideStart",this._handleSlideStart,B,this);
B.subscribe("slideEnd",this._handleSlideEnd,B,this);
this.createEvent("ready",this);
this.createEvent("change",this);
this.createEvent("slideStart",this);
this.createEvent("slideEnd",this);
};
YAHOO.widget.DualSlider.prototype={minVal:-1,maxVal:-1,minRange:0,_handleSlideStart:function(B,A){
this.fireEvent("slideStart",A);
},_handleSlideEnd:function(B,A){
this.fireEvent("slideEnd",A);
},_handleDrag:function(A){
YAHOO.widget.Slider.prototype.onDrag.call(this.activeSlider,A);
},_handleMinChange:function(){
this.activeSlider=this.minSlider;
this.updateValue();
},_handleMaxChange:function(){
this.activeSlider=this.maxSlider;
this.updateValue();
},setValues:function(E,H,F,B,G){
var C=this.minSlider,J=this.maxSlider,A=C.thumb,I=J.thumb,K=this,D={min:false,max:false};
if(A._isHoriz){
A.setXConstraint(A.leftConstraint,I.rightConstraint,A.tickSize);
I.setXConstraint(A.leftConstraint,I.rightConstraint,I.tickSize);
}else{
A.setYConstraint(A.topConstraint,I.bottomConstraint,A.tickSize);
I.setYConstraint(A.topConstraint,I.bottomConstraint,I.tickSize);
}
this._oneTimeCallback(C,"slideEnd",function(){
D.min=true;
if(D.max){
K.updateValue(G);
setTimeout(function(){
K._cleanEvent(C,"slideEnd");
K._cleanEvent(J,"slideEnd");
},0);
}
});
this._oneTimeCallback(J,"slideEnd",function(){
D.max=true;
if(D.min){
K.updateValue(G);
setTimeout(function(){
K._cleanEvent(C,"slideEnd");
K._cleanEvent(J,"slideEnd");
},0);
}
});
C.setValue(E,F,B,false);
J.setValue(H,F,B,false);
},setMinValue:function(C,E,F,B){
var D=this.minSlider;
this.activeSlider=D;
var A=this;
this._oneTimeCallback(D,"slideEnd",function(){
A.updateValue(B);
setTimeout(function(){
A._cleanEvent(D,"slideEnd");
},0);
});
D.setValue(C,E,F,B);
},setMaxValue:function(A,E,F,C){
var D=this.maxSlider;
this.activeSlider=D;
var B=this;
this._oneTimeCallback(D,"slideEnd",function(){
B.updateValue(C);
setTimeout(function(){
B._cleanEvent(D,"slideEnd");
},0);
});
D.setValue(A,E,F,C);
},updateValue:function(G){
var B=this.minSlider.getValue(),H=this.maxSlider.getValue(),C=false;
if(B!=this.minVal||H!=this.maxVal){
C=true;
var A=this.minSlider.thumb,J=this.maxSlider.thumb,D=this.isHoriz?"x":"y";
var E=this.minSlider.thumbCenterPoint[D]+this.maxSlider.thumbCenterPoint[D];
var F=Math.max(H-E-this.minRange,0);
var I=Math.min(-B-E-this.minRange,0);
if(this.isHoriz){
F=Math.min(F,J.rightConstraint);
A.setXConstraint(A.leftConstraint,F,A.tickSize);
J.setXConstraint(I,J.rightConstraint,J.tickSize);
}else{
F=Math.min(F,J.bottomConstraint);
A.setYConstraint(A.leftConstraint,F,A.tickSize);
J.setYConstraint(I,J.bottomConstraint,J.tickSize);
}
}
this.minVal=B;
this.maxVal=H;
if(C&&!G){
this.fireEvent("change",this);
}
},selectActiveSlider:function(E){
var B=this.minSlider,A=this.maxSlider,G=B.isLocked(),D=A.isLocked(),C=YAHOO.util.Event,F;
if(G||D){
this.activeSlider=G?A:B;
}else{
if(this.isHoriz){
F=C.getPageX(E)-B.thumb.initPageX-B.thumbCenterPoint.x;
}else{
F=C.getPageY(E)-B.thumb.initPageY-B.thumbCenterPoint.y;
}
this.activeSlider=F*2>A.getValue()+B.getValue()?A:B;
}
},_handleMouseDown:function(A){
this.selectActiveSlider(A);
YAHOO.widget.Slider.prototype.onMouseDown.call(this.activeSlider,A);
},_oneTimeCallback:function(C,A,B){
C.subscribe(A,function(){
C.unsubscribe(A,arguments.callee);
B.apply({},[].slice.apply(arguments));
});
},_cleanEvent:function(H,B){
if(H.__yui_events&&H.events[B]){
var G,F,A;
for(F=H.__yui_events.length;F>=0;--F){
if(H.__yui_events[F].type===B){
G=H.__yui_events[F];
break;
}
}
if(G){
var E=G.subscribers,C=[],D=0;
for(F=0,A=E.length;F<A;++F){
if(E[F]){
C[D++]=E[F];
}
}
G.subscribers=C;
}
}
}};
YAHOO.augment(YAHOO.widget.DualSlider,YAHOO.util.EventProvider);
YAHOO.widget.Slider.getHorizDualSlider=function(F,C,K,G,H,B){
var A,J;
var D=YAHOO.widget,E=D.Slider,I=D.SliderThumb;
A=new I(C,F,0,G,0,0,H);
J=new I(K,F,0,G,0,0,H);
return new D.DualSlider(new E(F,F,A,"horiz"),new E(F,F,J,"horiz"),G,B);
};
YAHOO.widget.Slider.getVertDualSlider=function(F,C,K,G,H,B){
var A,J;
var D=YAHOO.widget,E=D.Slider,I=D.SliderThumb;
A=new I(C,F,0,0,0,G,H);
J=new I(K,F,0,0,0,G,H);
return new D.DualSlider(new E(F,F,A,"vert"),new E(F,F,J,"vert"),G,B);
};
YAHOO.register("slider",YAHOO.widget.Slider,{version:"2.6.0",build:"1321"});
(function(){
var S="DIV",O="hd",K="bd",N="ft",X="LI",A="disabled",D="mouseover",F="mouseout",U="mousedown",G="mouseup",R=YAHOO.env.ua.ie?"focusin":"focus",V="click",B="keydown",M="keyup",I="keypress",L="clicktohide",T="position",P="dynamic",Y="showdelay",J="selected",E="visible",W="UL",Q="MenuManager",C=YAHOO.util.Dom,Z=YAHOO.util.Event,H=YAHOO.lang;
YAHOO.widget.MenuManager=function(){
var a=false,c={},r={},d={},n={"click":"clickEvent","mousedown":"mouseDownEvent","mouseup":"mouseUpEvent","mouseover":"mouseOverEvent","mouseout":"mouseOutEvent","keydown":"keyDownEvent","keyup":"keyUpEvent","keypress":"keyPressEvent","focus":"focusEvent","focusin":"focusEvent","blur":"blurEvent","focusout":"blurEvent"},m=null,k=null;
function o(u){
var s,t;
if(u&&u.tagName){
switch(u.tagName.toUpperCase()){
case S:
s=u.parentNode;
if((C.hasClass(u,O)||C.hasClass(u,K)||C.hasClass(u,N))&&s&&s.tagName&&s.tagName.toUpperCase()==S){
t=s;
}else{
t=u;
}
break;
case X:
t=u;
break;
default:
s=u.parentNode;
if(s){
t=o(s);
}
break;
}
}
return t;
};
function q(w){
var s=Z.getTarget(w),t=o(s),y,u,v,AA,z;
if(t){
u=t.tagName.toUpperCase();
if(u==X){
v=t.id;
if(v&&d[v]){
AA=d[v];
z=AA.parent;
}
}else{
if(u==S){
if(t.id){
z=c[t.id];
}
}
}
}
if(z){
y=n[w.type];
if(AA&&!AA.cfg.getProperty(A)){
AA[y].fire(w);
}
z[y].fire(w,AA);
}else{
if(w.type==U){
for(var x in r){
if(H.hasOwnProperty(r,x)){
z=r[x];
if(z.cfg.getProperty(L)&&!(z instanceof YAHOO.widget.MenuBar)&&z.cfg.getProperty(T)==P){
z.hide();
}else{
if(z.cfg.getProperty(Y)>0){
z._cancelShowDelay();
}
if(z.activeItem){
z.activeItem.blur();
z.activeItem.cfg.setProperty(J,false);
z.activeItem=null;
}
}
}
}
}else{
if(w.type==R){
m=s;
}
}
}
};
function f(t,s,u){
if(c[u.id]){
this.removeMenu(u);
}
};
function j(t,s){
var u=s[1];
if(u){
k=u;
}
};
function i(t,s){
k=null;
};
function b(t,s,v){
if(v&&v.focus){
try{
v.focus();
}
catch(u){
}
}
this.hideEvent.unsubscribe(b,v);
};
function l(t,s){
if(this===this.getRoot()&&this.cfg.getProperty(T)===P){
this.hideEvent.subscribe(b,m);
this.focus();
}
};
function g(u,t){
var s=t[0],v=this.id;
if(s){
r[v]=this;
}else{
if(r[v]){
delete r[v];
}
}
};
function h(t,s){
p(this);
};
function p(t){
var s=t.id;
if(s&&d[s]){
if(k==t){
k=null;
}
delete d[s];
t.destroyEvent.unsubscribe(h);
}
};
function e(t,s){
var v=s[0],u;
if(v instanceof YAHOO.widget.MenuItem){
u=v.id;
if(!d[u]){
d[u]=v;
v.destroyEvent.subscribe(h);
}
}
};
return {addMenu:function(t){
var s;
if(t instanceof YAHOO.widget.Menu&&t.id&&!c[t.id]){
c[t.id]=t;
if(!a){
s=document;
Z.on(s,D,q,this,true);
Z.on(s,F,q,this,true);
Z.on(s,U,q,this,true);
Z.on(s,G,q,this,true);
Z.on(s,V,q,this,true);
Z.on(s,B,q,this,true);
Z.on(s,M,q,this,true);
Z.on(s,I,q,this,true);
Z.onFocus(s,q,this,true);
Z.onBlur(s,q,this,true);
a=true;
}
t.cfg.subscribeToConfigEvent(E,g);
t.destroyEvent.subscribe(f,t,this);
t.itemAddedEvent.subscribe(e);
t.focusEvent.subscribe(j);
t.blurEvent.subscribe(i);
t.showEvent.subscribe(l);
}
},removeMenu:function(v){
var t,s,u;
if(v){
t=v.id;
if((t in c)&&(c[t]==v)){
s=v.getItems();
if(s&&s.length>0){
u=s.length-1;
do{
p(s[u]);
}while(u--);
}
delete c[t];
if((t in r)&&(r[t]==v)){
delete r[t];
}
if(v.cfg){
v.cfg.unsubscribeFromConfigEvent(E,g);
}
v.destroyEvent.unsubscribe(f,v);
v.itemAddedEvent.unsubscribe(e);
v.focusEvent.unsubscribe(j);
v.blurEvent.unsubscribe(i);
}
}
},hideVisible:function(){
var s;
for(var t in r){
if(H.hasOwnProperty(r,t)){
s=r[t];
if(!(s instanceof YAHOO.widget.MenuBar)&&s.cfg.getProperty(T)==P){
s.hide();
}
}
}
},getVisible:function(){
return r;
},getMenus:function(){
return c;
},getMenu:function(t){
var s;
if(t in c){
s=c[t];
}
return s;
},getMenuItem:function(t){
var s;
if(t in d){
s=d[t];
}
return s;
},getMenuItemGroup:function(w){
var t=C.get(w),s,y,x,u,v;
if(t&&t.tagName&&t.tagName.toUpperCase()==W){
y=t.firstChild;
if(y){
s=[];
do{
u=y.id;
if(u){
x=this.getMenuItem(u);
if(x){
s[s.length]=x;
}
}
}while((y=y.nextSibling));
if(s.length>0){
v=s;
}
}
}
return v;
},getFocusedMenuItem:function(){
return k;
},getFocusedMenu:function(){
var s;
if(k){
s=k.parent.getRoot();
}
return s;
},toString:function(){
return Q;
}};
}();
})();
(function(){
var AN=YAHOO.lang,Ao="Menu",H="DIV",K="div",Ak="id",AI="SELECT",f="xy",R="y",Av="UL",L="ul",AK="first-of-type",l="LI",i="OPTGROUP",Ax="OPTION",Af="disabled",AY="none",z="selected",Ar="groupindex",j="index",O="submenu",As="visible",AX="hidedelay",Ab="position",AE="dynamic",C="static",Al=AE+","+C,Y="windows",Q="url",M="#",V="target",AU="maxheight",T="topscrollbar",y="bottomscrollbar",e="_",P=T+e+Af,E=y+e+Af,c="mousemove",At="showdelay",d="submenuhidedelay",AG="iframe",x="constraintoviewport",A2="preventcontextoverlap",AP="submenualignment",a="autosubmenudisplay",AD="clicktohide",h="container",k="scrollincrement",Ah="minscrollheight",A0="classname",Ae="shadow",Ap="keepopen",Ay="hd",D="hastitle",q="context",v="",Ai="mousedown",Ac="keydown",Am="height",U="width",AR="px",Aw="effect",AF="monitorresize",AW="display",AV="block",J="visibility",AA="absolute",AT="zindex",m="yui-menu-body-scrolled",AL="&#32;",Az=" ",Ag="mouseover",G="mouseout",AS="itemAdded",o="itemRemoved",AM="hidden",t="yui-menu-shadow",AH=t+"-visible",n=t+Az+AH;
YAHOO.widget.Menu=function(A4,A3){
if(A3){
this.parent=A3.parent;
this.lazyLoad=A3.lazyLoad||A3.lazyload;
this.itemData=A3.itemData||A3.itemdata;
}
YAHOO.widget.Menu.superclass.constructor.call(this,A4,A3);
};
function B(A4){
var A3=false;
if(AN.isString(A4)){
A3=(Al.indexOf((A4.toLowerCase()))!=-1);
}
return A3;
};
var g=YAHOO.util.Dom,AB=YAHOO.util.Event,Au=YAHOO.widget.Module,AC=YAHOO.widget.Overlay,s=YAHOO.widget.Menu,A1=YAHOO.widget.MenuManager,F=YAHOO.util.CustomEvent,Aq=YAHOO.env.ua,An,Aa=[["mouseOverEvent",Ag],["mouseOutEvent",G],["mouseDownEvent",Ai],["mouseUpEvent","mouseup"],["clickEvent","click"],["keyPressEvent","keypress"],["keyDownEvent",Ac],["keyUpEvent","keyup"],["focusEvent","focus"],["blurEvent","blur"],["itemAddedEvent",AS],["itemRemovedEvent",o]],AZ={key:As,value:false,validator:AN.isBoolean},AQ={key:x,value:true,validator:AN.isBoolean,supercedes:[AG,"x",R,f]},AJ={key:A2,value:true,validator:AN.isBoolean,supercedes:[x]},S={key:Ab,value:AE,validator:B,supercedes:[As,AG]},A={key:AP,value:["tl","tr"]},u={key:a,value:true,validator:AN.isBoolean,suppressEvent:true},Z={key:At,value:250,validator:AN.isNumber,suppressEvent:true},r={key:AX,value:0,validator:AN.isNumber,suppressEvent:true},w={key:d,value:250,validator:AN.isNumber,suppressEvent:true},p={key:AD,value:true,validator:AN.isBoolean,suppressEvent:true},AO={key:h,suppressEvent:true},Ad={key:k,value:1,validator:AN.isNumber,supercedes:[AU],suppressEvent:true},N={key:Ah,value:90,validator:AN.isNumber,supercedes:[AU],suppressEvent:true},X={key:AU,value:0,validator:AN.isNumber,supercedes:[AG],suppressEvent:true},W={key:A0,value:null,validator:AN.isString,suppressEvent:true},b={key:Af,value:false,validator:AN.isBoolean,suppressEvent:true},I={key:Ae,value:true,validator:AN.isBoolean,suppressEvent:true,supercedes:[As]},Aj={key:Ap,value:false,validator:AN.isBoolean};
YAHOO.lang.extend(s,AC,{CSS_CLASS_NAME:"yuimenu",ITEM_TYPE:null,GROUP_TITLE_TAG_NAME:"h6",OFF_SCREEN_POSITION:"-999em",_bHideDelayEventHandlersAssigned:false,_bHandledMouseOverEvent:false,_bHandledMouseOutEvent:false,_aGroupTitleElements:null,_aItemGroups:null,_aListElements:null,_nCurrentMouseX:0,_bStopMouseEventHandlers:false,_sClassName:null,lazyLoad:false,itemData:null,activeItem:null,parent:null,srcElement:null,init:function(A5,A4){
this._aItemGroups=[];
this._aListElements=[];
this._aGroupTitleElements=[];
if(!this.ITEM_TYPE){
this.ITEM_TYPE=YAHOO.widget.MenuItem;
}
var A3;
if(AN.isString(A5)){
A3=g.get(A5);
}else{
if(A5.tagName){
A3=A5;
}
}
if(A3&&A3.tagName){
switch(A3.tagName.toUpperCase()){
case H:
this.srcElement=A3;
if(!A3.id){
A3.setAttribute(Ak,g.generateId());
}
s.superclass.init.call(this,A3);
this.beforeInitEvent.fire(s);
break;
case AI:
this.srcElement=A3;
s.superclass.init.call(this,g.generateId());
this.beforeInitEvent.fire(s);
break;
}
}else{
s.superclass.init.call(this,A5);
this.beforeInitEvent.fire(s);
}
if(this.element){
g.addClass(this.element,this.CSS_CLASS_NAME);
this.initEvent.subscribe(this._onInit);
this.beforeRenderEvent.subscribe(this._onBeforeRender);
this.renderEvent.subscribe(this._onRender);
this.beforeShowEvent.subscribe(this._onBeforeShow);
this.hideEvent.subscribe(this._onHide);
this.showEvent.subscribe(this._onShow);
this.beforeHideEvent.subscribe(this._onBeforeHide);
this.mouseOverEvent.subscribe(this._onMouseOver);
this.mouseOutEvent.subscribe(this._onMouseOut);
this.clickEvent.subscribe(this._onClick);
this.keyDownEvent.subscribe(this._onKeyDown);
this.keyPressEvent.subscribe(this._onKeyPress);
this.blurEvent.subscribe(this._onBlur);
if(Aq.gecko||Aq.webkit){
this.cfg.subscribeToConfigEvent(R,this._onYChange);
}
if(A4){
this.cfg.applyConfig(A4,true);
}
A1.addMenu(this);
this.initEvent.fire(s);
}
},_initSubTree:function(){
var A4=this.srcElement,A3,A6,A9,BA,A8,A7,A5;
if(A4){
A3=(A4.tagName&&A4.tagName.toUpperCase());
if(A3==H){
BA=this.body.firstChild;
if(BA){
A6=0;
A9=this.GROUP_TITLE_TAG_NAME.toUpperCase();
do{
if(BA&&BA.tagName){
switch(BA.tagName.toUpperCase()){
case A9:
this._aGroupTitleElements[A6]=BA;
break;
case Av:
this._aListElements[A6]=BA;
this._aItemGroups[A6]=[];
A6++;
break;
}
}
}while((BA=BA.nextSibling));
if(this._aListElements[0]){
g.addClass(this._aListElements[0],AK);
}
}
}
BA=null;
if(A3){
switch(A3){
case H:
A8=this._aListElements;
A7=A8.length;
if(A7>0){
A5=A7-1;
do{
BA=A8[A5].firstChild;
if(BA){
do{
if(BA&&BA.tagName&&BA.tagName.toUpperCase()==l){
this.addItem(new this.ITEM_TYPE(BA,{parent:this}),A5);
}
}while((BA=BA.nextSibling));
}
}while(A5--);
}
break;
case AI:
BA=A4.firstChild;
do{
if(BA&&BA.tagName){
switch(BA.tagName.toUpperCase()){
case i:
case Ax:
this.addItem(new this.ITEM_TYPE(BA,{parent:this}));
break;
}
}
}while((BA=BA.nextSibling));
break;
}
}
}
},_getFirstEnabledItem:function(){
var A3=this.getItems(),A7=A3.length,A6,A5;
for(var A4=0;A4<A7;A4++){
A6=A3[A4];
if(A6&&!A6.cfg.getProperty(Af)&&A6.element.style.display!=AY){
A5=A6;
break;
}
}
return A5;
},_addItemToGroup:function(A8,A9,BD){
var BB,BE,A6,BC,A7,A4,A5,BA;
function A3(BF,BG){
return (BF[BG]||A3(BF,(BG+1)));
};
if(A9 instanceof this.ITEM_TYPE){
BB=A9;
BB.parent=this;
}else{
if(AN.isString(A9)){
BB=new this.ITEM_TYPE(A9,{parent:this});
}else{
if(AN.isObject(A9)){
A9.parent=this;
BB=new this.ITEM_TYPE(A9.text,A9);
}
}
}
if(BB){
if(BB.cfg.getProperty(z)){
this.activeItem=BB;
}
BE=AN.isNumber(A8)?A8:0;
A6=this._getItemGroup(BE);
if(!A6){
A6=this._createItemGroup(BE);
}
if(AN.isNumber(BD)){
A7=(BD>=A6.length);
if(A6[BD]){
A6.splice(BD,0,BB);
}else{
A6[BD]=BB;
}
BC=A6[BD];
if(BC){
if(A7&&(!BC.element.parentNode||BC.element.parentNode.nodeType==11)){
this._aListElements[BE].appendChild(BC.element);
}else{
A4=A3(A6,(BD+1));
if(A4&&(!BC.element.parentNode||BC.element.parentNode.nodeType==11)){
this._aListElements[BE].insertBefore(BC.element,A4.element);
}
}
BC.parent=this;
this._subscribeToItemEvents(BC);
this._configureSubmenu(BC);
this._updateItemProperties(BE);
this.itemAddedEvent.fire(BC);
this.changeContentEvent.fire();
BA=BC;
}
}else{
A5=A6.length;
A6[A5]=BB;
BC=A6[A5];
if(BC){
if(!g.isAncestor(this._aListElements[BE],BC.element)){
this._aListElements[BE].appendChild(BC.element);
}
BC.element.setAttribute(Ar,BE);
BC.element.setAttribute(j,A5);
BC.parent=this;
BC.index=A5;
BC.groupIndex=BE;
this._subscribeToItemEvents(BC);
this._configureSubmenu(BC);
if(A5===0){
g.addClass(BC.element,AK);
}
this.itemAddedEvent.fire(BC);
this.changeContentEvent.fire();
BA=BC;
}
}
}
return BA;
},_removeItemFromGroupByIndex:function(A6,A4){
var A5=AN.isNumber(A6)?A6:0,A7=this._getItemGroup(A5),A9,A8,A3;
if(A7){
A9=A7.splice(A4,1);
A8=A9[0];
if(A8){
this._updateItemProperties(A5);
if(A7.length===0){
A3=this._aListElements[A5];
if(this.body&&A3){
this.body.removeChild(A3);
}
this._aItemGroups.splice(A5,1);
this._aListElements.splice(A5,1);
A3=this._aListElements[0];
if(A3){
g.addClass(A3,AK);
}
}
this.itemRemovedEvent.fire(A8);
this.changeContentEvent.fire();
}
}
return A8;
},_removeItemFromGroupByValue:function(A6,A3){
var A8=this._getItemGroup(A6),A9,A7,A5,A4;
if(A8){
A9=A8.length;
A7=-1;
if(A9>0){
A4=A9-1;
do{
if(A8[A4]==A3){
A7=A4;
break;
}
}while(A4--);
if(A7>-1){
A5=this._removeItemFromGroupByIndex(A6,A7);
}
}
}
return A5;
},_updateItemProperties:function(A4){
var A5=this._getItemGroup(A4),A8=A5.length,A7,A6,A3;
if(A8>0){
A3=A8-1;
do{
A7=A5[A3];
if(A7){
A6=A7.element;
A7.index=A3;
A7.groupIndex=A4;
A6.setAttribute(Ar,A4);
A6.setAttribute(j,A3);
g.removeClass(A6,AK);
}
}while(A3--);
if(A6){
g.addClass(A6,AK);
}
}
},_createItemGroup:function(A5){
var A3,A4;
if(!this._aItemGroups[A5]){
this._aItemGroups[A5]=[];
A3=document.createElement(L);
this._aListElements[A5]=A3;
A4=this._aItemGroups[A5];
}
return A4;
},_getItemGroup:function(A5){
var A3=AN.isNumber(A5)?A5:0,A6=this._aItemGroups,A4;
if(A3 in A6){
A4=A6[A3];
}
return A4;
},_configureSubmenu:function(A3){
var A4=A3.cfg.getProperty(O);
if(A4){
this.cfg.configChangedEvent.subscribe(this._onParentMenuConfigChange,A4,true);
this.renderEvent.subscribe(this._onParentMenuRender,A4,true);
}
},_subscribeToItemEvents:function(A3){
A3.destroyEvent.subscribe(this._onMenuItemDestroy,A3,this);
A3.cfg.configChangedEvent.subscribe(this._onMenuItemConfigChange,A3,this);
},_onVisibleChange:function(A5,A4){
var A3=A4[0];
if(A3){
g.addClass(this.element,As);
}else{
g.removeClass(this.element,As);
}
},_cancelHideDelay:function(){
var A3=this.getRoot()._hideDelayTimer;
if(A3){
A3.cancel();
}
},_execHideDelay:function(){
this._cancelHideDelay();
var A3=this.getRoot();
A3._hideDelayTimer=AN.later(A3.cfg.getProperty(AX),this,function(){
if(A3.activeItem){
if(A3.hasFocus()){
A3.activeItem.focus();
}
A3.clearActiveItem();
}
if(A3==this&&!(this instanceof YAHOO.widget.MenuBar)&&this.cfg.getProperty(Ab)==AE){
this.hide();
}
});
},_cancelShowDelay:function(){
var A3=this.getRoot()._showDelayTimer;
if(A3){
A3.cancel();
}
},_execSubmenuHideDelay:function(A5,A4,A3){
A5._submenuHideDelayTimer=AN.later(50,this,function(){
if(this._nCurrentMouseX>(A4+10)){
A5._submenuHideDelayTimer=AN.later(A3,A5,function(){
this.hide();
});
}else{
A5.hide();
}
});
},_disableScrollHeader:function(){
if(!this._bHeaderDisabled){
g.addClass(this.header,P);
this._bHeaderDisabled=true;
}
},_disableScrollFooter:function(){
if(!this._bFooterDisabled){
g.addClass(this.footer,E);
this._bFooterDisabled=true;
}
},_enableScrollHeader:function(){
if(this._bHeaderDisabled){
g.removeClass(this.header,P);
this._bHeaderDisabled=false;
}
},_enableScrollFooter:function(){
if(this._bFooterDisabled){
g.removeClass(this.footer,E);
this._bFooterDisabled=false;
}
},_onMouseOver:function(BF,A8){
var BG=A8[0],BC=A8[1],A3=AB.getTarget(BG),A7=this.getRoot(),BE=this._submenuHideDelayTimer,A4,A6,BB,A5,BA,A9;
var BD=function(){
if(this.parent.cfg.getProperty(z)){
this.show();
}
};
if(!this._bStopMouseEventHandlers){
if(!this._bHandledMouseOverEvent&&(A3==this.element||g.isAncestor(this.element,A3))){
this._nCurrentMouseX=0;
AB.on(this.element,c,this._onMouseMove,this,true);
if(!(BC&&g.isAncestor(BC.element,AB.getRelatedTarget(BG)))){
this.clearActiveItem();
}
if(this.parent&&BE){
BE.cancel();
this.parent.cfg.setProperty(z,true);
A4=this.parent.parent;
A4._bHandledMouseOutEvent=true;
A4._bHandledMouseOverEvent=false;
}
this._bHandledMouseOverEvent=true;
this._bHandledMouseOutEvent=false;
}
if(BC&&!BC.handledMouseOverEvent&&!BC.cfg.getProperty(Af)&&(A3==BC.element||g.isAncestor(BC.element,A3))){
A6=this.cfg.getProperty(At);
BB=(A6>0);
if(BB){
this._cancelShowDelay();
}
A5=this.activeItem;
if(A5){
A5.cfg.setProperty(z,false);
}
BA=BC.cfg;
BA.setProperty(z,true);
if(this.hasFocus()||A7._hasFocus){
BC.focus();
A7._hasFocus=false;
}
if(this.cfg.getProperty(a)){
A9=BA.getProperty(O);
if(A9){
if(BB){
A7._showDelayTimer=AN.later(A7.cfg.getProperty(At),A9,BD);
}else{
A9.show();
}
}
}
BC.handledMouseOverEvent=true;
BC.handledMouseOutEvent=false;
}
}
},_onMouseOut:function(BB,A5){
var BC=A5[0],A9=A5[1],A6=AB.getRelatedTarget(BC),BA=false,A8,A7,A3,A4;
if(!this._bStopMouseEventHandlers){
if(A9&&!A9.cfg.getProperty(Af)){
A8=A9.cfg;
A7=A8.getProperty(O);
if(A7&&(A6==A7.element||g.isAncestor(A7.element,A6))){
BA=true;
}
if(!A9.handledMouseOutEvent&&((A6!=A9.element&&!g.isAncestor(A9.element,A6))||BA)){
if(!BA){
A9.cfg.setProperty(z,false);
if(A7){
A3=this.cfg.getProperty(d);
A4=this.cfg.getProperty(At);
if(!(this instanceof YAHOO.widget.MenuBar)&&A3>0&&A4>=A3){
this._execSubmenuHideDelay(A7,AB.getPageX(BC),A3);
}else{
A7.hide();
}
}
}
A9.handledMouseOutEvent=true;
A9.handledMouseOverEvent=false;
}
}
if(!this._bHandledMouseOutEvent&&((A6!=this.element&&!g.isAncestor(this.element,A6))||BA)){
AB.removeListener(this.element,c,this._onMouseMove);
this._nCurrentMouseX=AB.getPageX(BC);
this._bHandledMouseOutEvent=true;
this._bHandledMouseOverEvent=false;
}
}
},_onMouseMove:function(A4,A3){
if(!this._bStopMouseEventHandlers){
this._nCurrentMouseX=AB.getPageX(A4);
}
},_onClick:function(BD,A5){
var BE=A5[0],A9=A5[1],BB=false,A7,A4,A3,A8,BA,BC;
var A6=function(){
if(!((Aq.gecko&&this.platform==Y)&&BE.button>0)){
A4=this.getRoot();
if(A4 instanceof YAHOO.widget.MenuBar||A4.cfg.getProperty(Ab)==C){
A4.clearActiveItem();
}else{
A4.hide();
}
}
};
if(A9){
if(A9.cfg.getProperty(Af)){
AB.preventDefault(BE);
A6.call(this);
}else{
A7=A9.cfg.getProperty(O);
A8=A9.cfg.getProperty(Q);
if(A8){
BA=A8.indexOf(M);
BC=A8.length;
if(BA!=-1){
A8=A8.substr(BA,BC);
BC=A8.length;
if(BC>1){
A3=A8.substr(1,BC);
BB=g.isAncestor(this.element,A3);
}else{
if(BC===1){
BB=true;
}
}
}
}
if(BB&&!A9.cfg.getProperty(V)){
AB.preventDefault(BE);
if(Aq.webkit){
A9.focus();
}else{
A9.focusEvent.fire();
}
}
if(!A7&&!this.cfg.getProperty(Ap)){
A6.call(this);
}
}
}
},_onKeyDown:function(BH,BB){
var BE=BB[0],BD=BB[1],BA,BF,A4,A8,BI,A3,BK,A7,BG,A6,BC,BJ,A9;
function A5(){
this._bStopMouseEventHandlers=true;
AN.later(10,this,function(){
this._bStopMouseEventHandlers=false;
});
};
if(BD&&!BD.cfg.getProperty(Af)){
BF=BD.cfg;
A4=this.parent;
switch(BE.keyCode){
case 38:
case 40:
BI=(BE.keyCode==38)?BD.getPreviousEnabledSibling():BD.getNextEnabledSibling();
if(BI){
this.clearActiveItem();
BI.cfg.setProperty(z,true);
BI.focus();
if(this.cfg.getProperty(AU)>0){
A3=this.body;
BK=A3.scrollTop;
A7=A3.offsetHeight;
BG=this.getItems();
A6=BG.length-1;
BC=BI.element.offsetTop;
if(BE.keyCode==40){
if(BC>=(A7+BK)){
A3.scrollTop=BC-A7;
}else{
if(BC<=BK){
A3.scrollTop=0;
}
}
if(BI==BG[A6]){
A3.scrollTop=BI.element.offsetTop;
}
}else{
if(BC<=BK){
A3.scrollTop=BC-BI.element.offsetHeight;
}else{
if(BC>=(BK+A7)){
A3.scrollTop=BC;
}
}
if(BI==BG[0]){
A3.scrollTop=0;
}
}
BK=A3.scrollTop;
BJ=A3.scrollHeight-A3.offsetHeight;
if(BK===0){
this._disableScrollHeader();
this._enableScrollFooter();
}else{
if(BK==BJ){
this._enableScrollHeader();
this._disableScrollFooter();
}else{
this._enableScrollHeader();
this._enableScrollFooter();
}
}
}
}
AB.preventDefault(BE);
A5();
break;
case 39:
BA=BF.getProperty(O);
if(BA){
if(!BF.getProperty(z)){
BF.setProperty(z,true);
}
BA.show();
BA.setInitialFocus();
BA.setInitialSelection();
}else{
A8=this.getRoot();
if(A8 instanceof YAHOO.widget.MenuBar){
BI=A8.activeItem.getNextEnabledSibling();
if(BI){
A8.clearActiveItem();
BI.cfg.setProperty(z,true);
BA=BI.cfg.getProperty(O);
if(BA){
BA.show();
BA.setInitialFocus();
}else{
BI.focus();
}
}
}
}
AB.preventDefault(BE);
A5();
break;
case 37:
if(A4){
A9=A4.parent;
if(A9 instanceof YAHOO.widget.MenuBar){
BI=A9.activeItem.getPreviousEnabledSibling();
if(BI){
A9.clearActiveItem();
BI.cfg.setProperty(z,true);
BA=BI.cfg.getProperty(O);
if(BA){
BA.show();
BA.setInitialFocus();
}else{
BI.focus();
}
}
}else{
this.hide();
A4.focus();
}
}
AB.preventDefault(BE);
A5();
break;
}
}
if(BE.keyCode==27){
if(this.cfg.getProperty(Ab)==AE){
this.hide();
if(this.parent){
this.parent.focus();
}
}else{
if(this.activeItem){
BA=this.activeItem.cfg.getProperty(O);
if(BA&&BA.cfg.getProperty(As)){
BA.hide();
this.activeItem.focus();
}else{
this.activeItem.blur();
this.activeItem.cfg.setProperty(z,false);
}
}
}
AB.preventDefault(BE);
}
},_onKeyPress:function(A5,A4){
var A3=A4[0];
if(A3.keyCode==40||A3.keyCode==38){
AB.preventDefault(A3);
}
},_onBlur:function(A4,A3){
if(this._hasFocus){
this._hasFocus=false;
}
},_onYChange:function(A4,A3){
var A6=this.parent,A8,A5,A7;
if(A6){
A8=A6.parent.body.scrollTop;
if(A8>0){
A7=(this.cfg.getProperty(R)-A8);
g.setY(this.element,A7);
A5=this.iframe;
if(A5){
g.setY(A5,A7);
}
this.cfg.setProperty(R,A7,true);
}
}
},_onScrollTargetMouseOver:function(A9,BC){
var BB=this._bodyScrollTimer;
if(BB){
BB.cancel();
}
this._cancelHideDelay();
var A5=AB.getTarget(A9),A7=this.body,A6=this.cfg.getProperty(k),A3,A4;
function BA(){
var BD=A7.scrollTop;
if(BD<A3){
A7.scrollTop=(BD+A6);
this._enableScrollHeader();
}else{
A7.scrollTop=A3;
this._bodyScrollTimer.cancel();
this._disableScrollFooter();
}
};
function A8(){
var BD=A7.scrollTop;
if(BD>0){
A7.scrollTop=(BD-A6);
this._enableScrollFooter();
}else{
A7.scrollTop=0;
this._bodyScrollTimer.cancel();
this._disableScrollHeader();
}
};
if(g.hasClass(A5,Ay)){
A4=A8;
}else{
A3=A7.scrollHeight-A7.offsetHeight;
A4=BA;
}
this._bodyScrollTimer=AN.later(10,this,A4,null,true);
},_onScrollTargetMouseOut:function(A5,A3){
var A4=this._bodyScrollTimer;
if(A4){
A4.cancel();
}
this._cancelHideDelay();
},_onInit:function(A4,A3){
this.cfg.subscribeToConfigEvent(As,this._onVisibleChange);
var A5=!this.parent,A6=this.lazyLoad;
if(((A5&&!A6)||(A5&&(this.cfg.getProperty(As)||this.cfg.getProperty(Ab)==C))||(!A5&&!A6))&&this.getItemGroups().length===0){
if(this.srcElement){
this._initSubTree();
}
if(this.itemData){
this.addItems(this.itemData);
}
}else{
if(A6){
this.cfg.fireQueue();
}
}
},_onBeforeRender:function(A6,A5){
var A7=this.element,BA=this._aListElements.length,A4=true,A9=0,A3,A8;
if(BA>0){
do{
A3=this._aListElements[A9];
if(A3){
if(A4){
g.addClass(A3,AK);
A4=false;
}
if(!g.isAncestor(A7,A3)){
this.appendToBody(A3);
}
A8=this._aGroupTitleElements[A9];
if(A8){
if(!g.isAncestor(A7,A8)){
A3.parentNode.insertBefore(A8,A3);
}
g.addClass(A3,D);
}
}
A9++;
}while(A9<BA);
}
},_onRender:function(A4,A3){
if(this.cfg.getProperty(Ab)==AE){
if(!this.cfg.getProperty(As)){
this.positionOffScreen();
}
}
},_onBeforeShow:function(A5,A4){
var A7,BA,A6,A8=this.cfg.getProperty(h);
if(this.lazyLoad&&this.getItemGroups().length===0){
if(this.srcElement){
this._initSubTree();
}
if(this.itemData){
if(this.parent&&this.parent.parent&&this.parent.parent.srcElement&&this.parent.parent.srcElement.tagName.toUpperCase()==AI){
A7=this.itemData.length;
for(BA=0;BA<A7;BA++){
if(this.itemData[BA].tagName){
this.addItem((new this.ITEM_TYPE(this.itemData[BA])));
}
}
}else{
this.addItems(this.itemData);
}
}
A6=this.srcElement;
if(A6){
if(A6.tagName.toUpperCase()==AI){
if(g.inDocument(A6)){
this.render(A6.parentNode);
}else{
this.render(A8);
}
}else{
this.render();
}
}else{
if(this.parent){
this.render(this.parent.element);
}else{
this.render(A8);
}
}
}
var A9=this.parent,A3;
if(!A9&&this.cfg.getProperty(Ab)==AE){
this.cfg.refireEvent(f);
}
if(A9){
A3=A9.parent.cfg.getProperty(AP);
this.cfg.setProperty(q,[A9.element,A3[0],A3[1]]);
this.align();
}
},getConstrainedY:function(BF){
var BQ=this,BM=BQ.cfg.getProperty(q),BT=BQ.cfg.getProperty(AU),BP,BE={"trbr":true,"tlbl":true,"bltl":true,"brtr":true},A8=(BM&&BE[BM[1]+BM[2]]),BA=BQ.element,BU=BA.offsetHeight,BO=AC.VIEWPORT_OFFSET,BJ=g.getViewportHeight(),BN=g.getDocumentScrollTop(),BK=(BQ.cfg.getProperty(Ah)+BO<BJ),BS,BB,BH,BI,BD=false,BC,A5,BG,A7,A3=BF;
var A9=function(){
var BV;
if((BQ.cfg.getProperty(R)-BN)>BH){
BV=(BH-BU);
}else{
BV=(BH+BI);
}
BQ.cfg.setProperty(R,(BV+BN),true);
return BV;
};
var A6=function(){
if((BQ.cfg.getProperty(R)-BN)>BH){
return (A5-BO);
}else{
return (BC-BO);
}
};
var BL=function(){
var BV;
if((BQ.cfg.getProperty(R)-BN)>BH){
BV=(BH+BI);
}else{
BV=(BH-BA.offsetHeight);
}
BQ.cfg.setProperty(R,(BV+BN),true);
};
var A4=function(){
BQ._setScrollHeight(this.cfg.getProperty(AU));
BQ.hideEvent.unsubscribe(A4);
};
var BR=function(){
var BZ=A6(),BV=(BQ.getItems().length>0),BY,BX,BW;
if(BU>BZ){
BY=BV?BQ.cfg.getProperty(Ah):BU;
if((BZ>BY)&&BV){
BP=BZ;
}else{
BP=BT;
}
BQ._setScrollHeight(BP);
BQ.hideEvent.subscribe(A4);
BL();
if(BZ<BY){
if(BD){
A9();
}else{
A9();
BD=true;
BX=BR();
}
}
}else{
if(BP&&(BP!=BT)){
BQ._setScrollHeight(BT);
BQ.hideEvent.subscribe(A4);
BL();
}
}
return BX;
};
if(BQ.cfg.getProperty(A2)&&A8){
if(BK){
BB=BM[0];
BI=BB.offsetHeight;
BH=(g.getY(BB)-BN);
BC=BH;
A5=(BJ-(BH+BI));
BR();
}
A3=BQ.cfg.getProperty(R);
}else{
if(!(BQ instanceof YAHOO.widget.MenuBar)&&BU>=BJ){
BS=(BJ-(BO*2));
if(BS>BQ.cfg.getProperty(Ah)){
BQ._setScrollHeight(BS);
BQ.hideEvent.subscribe(A4);
BL();
A3=BQ.cfg.getProperty(R);
}
}else{
if(BK){
BG=BN+BO;
A7=BN+BJ-BU-BO;
if(BF<BG){
A3=BG;
}else{
if(BF>A7){
A3=A7;
}
}
}else{
A3=BO+BN;
}
}
}
return A3;
},_onHide:function(A4,A3){
if(this.cfg.getProperty(Ab)===AE){
this.positionOffScreen();
}
},_onShow:function(BB,A9){
var A3=this.parent,A5,A6,A8,A4;
function A7(BD){
var BC;
if(BD.type==Ai||(BD.type==Ac&&BD.keyCode==27)){
BC=AB.getTarget(BD);
if(BC!=A5.element||!g.isAncestor(A5.element,BC)){
A5.cfg.setProperty(a,false);
AB.removeListener(document,Ai,A7);
AB.removeListener(document,Ac,A7);
}
}
};
function BA(BD,BC,BE){
this.cfg.setProperty(U,v);
this.hideEvent.unsubscribe(BA,BE);
};
if(A3){
A5=A3.parent;
if(!A5.cfg.getProperty(a)&&(A5 instanceof YAHOO.widget.MenuBar||A5.cfg.getProperty(Ab)==C)){
A5.cfg.setProperty(a,true);
AB.on(document,Ai,A7);
AB.on(document,Ac,A7);
}
if((this.cfg.getProperty("x")<A5.cfg.getProperty("x"))&&(Aq.gecko<1.9)&&!this.cfg.getProperty(U)){
A6=this.element;
A8=A6.offsetWidth;
A6.style.width=A8+AR;
A4=(A8-(A6.offsetWidth-A8))+AR;
this.cfg.setProperty(U,A4);
this.hideEvent.subscribe(BA,A4);
}
}
},_onBeforeHide:function(A5,A4){
var A3=this.activeItem,A7=this.getRoot(),A8,A6;
if(A3){
A8=A3.cfg;
A8.setProperty(z,false);
A6=A8.getProperty(O);
if(A6){
A6.hide();
}
}
if(Aq.ie&&this.cfg.getProperty(Ab)===AE&&this.parent){
A7._hasFocus=this.hasFocus();
}
if(A7==this){
A7.blur();
}
},_onParentMenuConfigChange:function(A4,A3,A7){
var A5=A3[0][0],A6=A3[0][1];
switch(A5){
case AG:
case x:
case AX:
case At:
case d:
case AD:
case Aw:
case A0:
case k:
case Ah:
case AF:
case Ae:
case A2:
A7.cfg.setProperty(A5,A6);
break;
case AP:
if(!(this.parent.parent instanceof YAHOO.widget.MenuBar)){
A7.cfg.setProperty(A5,A6);
}
break;
}
},_onParentMenuRender:function(A4,A3,A9){
var A6=A9.parent.parent,A5=A6.cfg,A7={constraintoviewport:A5.getProperty(x),xy:[0,0],clicktohide:A5.getProperty(AD),effect:A5.getProperty(Aw),showdelay:A5.getProperty(At),hidedelay:A5.getProperty(AX),submenuhidedelay:A5.getProperty(d),classname:A5.getProperty(A0),scrollincrement:A5.getProperty(k),minscrollheight:A5.getProperty(Ah),iframe:A5.getProperty(AG),shadow:A5.getProperty(Ae),preventcontextoverlap:A5.getProperty(A2),monitorresize:A5.getProperty(AF)},A8;
if(!(A6 instanceof YAHOO.widget.MenuBar)){
A7[AP]=A5.getProperty(AP);
}
A9.cfg.applyConfig(A7);
if(!this.lazyLoad){
A8=this.parent.element;
if(this.element.parentNode==A8){
this.render();
}else{
this.render(A8);
}
}
},_onMenuItemDestroy:function(A5,A4,A3){
this._removeItemFromGroupByValue(A3.groupIndex,A3);
},_onMenuItemConfigChange:function(A5,A4,A3){
var A7=A4[0][0],A8=A4[0][1],A6;
switch(A7){
case z:
if(A8===true){
this.activeItem=A3;
}
break;
case O:
A6=A4[0][1];
if(A6){
this._configureSubmenu(A3);
}
break;
}
},configVisible:function(A5,A4,A6){
var A3,A7;
if(this.cfg.getProperty(Ab)==AE){
s.superclass.configVisible.call(this,A5,A4,A6);
}else{
A3=A4[0];
A7=g.getStyle(this.element,AW);
g.setStyle(this.element,J,As);
if(A3){
if(A7!=AV){
this.beforeShowEvent.fire();
g.setStyle(this.element,AW,AV);
this.showEvent.fire();
}
}else{
if(A7==AV){
this.beforeHideEvent.fire();
g.setStyle(this.element,AW,AY);
this.hideEvent.fire();
}
}
}
},configPosition:function(A5,A4,A8){
var A7=this.element,A6=A4[0]==C?C:AA,A9=this.cfg,A3;
g.setStyle(A7,Ab,A6);
if(A6==C){
g.setStyle(A7,AW,AV);
A9.setProperty(As,true);
}else{
g.setStyle(A7,J,AM);
}
if(A6==AA){
A3=A9.getProperty(AT);
if(!A3||A3===0){
A9.setProperty(AT,1);
}
}
},configIframe:function(A4,A3,A5){
if(this.cfg.getProperty(Ab)==AE){
s.superclass.configIframe.call(this,A4,A3,A5);
}
},configHideDelay:function(A4,A3,A7){
var A9=A3[0],A8=this.mouseOutEvent,A5=this.mouseOverEvent,A6=this.keyDownEvent;
if(A9>0){
if(!this._bHideDelayEventHandlersAssigned){
A8.subscribe(this._execHideDelay);
A5.subscribe(this._cancelHideDelay);
A6.subscribe(this._cancelHideDelay);
this._bHideDelayEventHandlersAssigned=true;
}
}else{
A8.unsubscribe(this._execHideDelay);
A5.unsubscribe(this._cancelHideDelay);
A6.unsubscribe(this._cancelHideDelay);
this._bHideDelayEventHandlersAssigned=false;
}
},configContainer:function(A4,A3,A6){
var A5=A3[0];
if(AN.isString(A5)){
this.cfg.setProperty(h,g.get(A5),true);
}
},_clearSetWidthFlag:function(){
this._widthSetForScroll=false;
this.cfg.unsubscribeFromConfigEvent(U,this._clearSetWidthFlag);
},_setScrollHeight:function(BF){
var BB=BF,BA=false,BG=false,A7,A8,BE,A5,A4,BD,BH,A3,BC,A9,A6;
if(this.getItems().length>0){
A7=this.element;
A8=this.body;
BE=this.header;
A5=this.footer;
BD=this._onScrollTargetMouseOver;
BH=this._onScrollTargetMouseOut;
A3=this.cfg.getProperty(Ah);
A4=this.parent;
if(BB>0&&BB<A3){
BB=A3;
}
g.setStyle(A8,Am,v);
g.removeClass(A8,m);
A8.scrollTop=0;
BG=((Aq.gecko&&A4&&A4.parent&&A4.parent.cfg.getProperty(Ab)==AE)||Aq.ie);
if(BB>0&&BG&&!this.cfg.getProperty(U)){
A9=A7.offsetWidth;
A7.style.width=A9+AR;
A6=(A9-(A7.offsetWidth-A9))+AR;
this.cfg.unsubscribeFromConfigEvent(U,this._clearSetWidthFlag);
this.cfg.setProperty(U,A6);
this._widthSetForScroll=true;
this.cfg.subscribeToConfigEvent(U,this._clearSetWidthFlag);
}
if(BB>0&&(!BE&&!A5)){
this.setHeader(AL);
this.setFooter(AL);
BE=this.header;
A5=this.footer;
g.addClass(BE,T);
g.addClass(A5,y);
A7.insertBefore(BE,A8);
A7.appendChild(A5);
}
BC=BB;
if(BE&&A5){
BC=(BC-(BE.offsetHeight+A5.offsetHeight));
}
if((BC>0)&&(A8.offsetHeight>BB)){
g.addClass(A8,m);
g.setStyle(A8,Am,(BC+AR));
if(!this._hasScrollEventHandlers){
AB.on(BE,Ag,BD,this,true);
AB.on(BE,G,BH,this,true);
AB.on(A5,Ag,BD,this,true);
AB.on(A5,G,BH,this,true);
this._hasScrollEventHandlers=true;
}
this._disableScrollHeader();
this._enableScrollFooter();
BA=true;
}else{
if(BE&&A5){
if(this._widthSetForScroll){
this._widthSetForScroll=false;
this.cfg.unsubscribeFromConfigEvent(U,this._clearSetWidthFlag);
this.cfg.setProperty(U,v);
}
this._enableScrollHeader();
this._enableScrollFooter();
if(this._hasScrollEventHandlers){
AB.removeListener(BE,Ag,BD);
AB.removeListener(BE,G,BH);
AB.removeListener(A5,Ag,BD);
AB.removeListener(A5,G,BH);
this._hasScrollEventHandlers=false;
}
A7.removeChild(BE);
A7.removeChild(A5);
this.header=null;
this.footer=null;
BA=true;
}
}
if(BA){
this.cfg.refireEvent(AG);
this.cfg.refireEvent(Ae);
}
}
},_setMaxHeight:function(A4,A3,A5){
this._setScrollHeight(A5);
this.renderEvent.unsubscribe(this._setMaxHeight);
},configMaxHeight:function(A4,A3,A5){
var A6=A3[0];
if(this.lazyLoad&&!this.body&&A6>0){
this.renderEvent.subscribe(this._setMaxHeight,A6,this);
}else{
this._setScrollHeight(A6);
}
},configClassName:function(A5,A4,A6){
var A3=A4[0];
if(this._sClassName){
g.removeClass(this.element,this._sClassName);
}
g.addClass(this.element,A3);
this._sClassName=A3;
},_onItemAdded:function(A4,A3){
var A5=A3[0];
if(A5){
A5.cfg.setProperty(Af,true);
}
},configDisabled:function(A5,A4,A8){
var A7=A4[0],A3=this.getItems(),A9,A6;
if(AN.isArray(A3)){
A9=A3.length;
if(A9>0){
A6=A9-1;
do{
A3[A6].cfg.setProperty(Af,A7);
}while(A6--);
}
if(A7){
this.clearActiveItem(true);
g.addClass(this.element,Af);
this.itemAddedEvent.subscribe(this._onItemAdded);
}else{
g.removeClass(this.element,Af);
this.itemAddedEvent.unsubscribe(this._onItemAdded);
}
}
},configShadow:function(BB,A5,BA){
var A9=function(){
var BE=this.element,BD=this._shadow;
if(BD&&BE){
if(BD.style.width&&BD.style.height){
BD.style.width=v;
BD.style.height=v;
}
BD.style.width=(BE.offsetWidth+6)+AR;
BD.style.height=(BE.offsetHeight+1)+AR;
}
};
var BC=function(){
this.element.appendChild(this._shadow);
};
var A7=function(){
g.addClass(this._shadow,AH);
};
var A8=function(){
g.removeClass(this._shadow,AH);
};
var A4=function(){
var BE=this._shadow,BD;
if(!BE){
BD=this.element;
if(!An){
An=document.createElement(K);
An.className=n;
}
BE=An.cloneNode(false);
BD.appendChild(BE);
this._shadow=BE;
this.beforeShowEvent.subscribe(A7);
this.beforeHideEvent.subscribe(A8);
if(Aq.ie){
AN.later(0,this,function(){
A9.call(this);
this.syncIframe();
});
this.cfg.subscribeToConfigEvent(U,A9);
this.cfg.subscribeToConfigEvent(Am,A9);
this.cfg.subscribeToConfigEvent(AU,A9);
this.changeContentEvent.subscribe(A9);
Au.textResizeEvent.subscribe(A9,this,true);
this.destroyEvent.subscribe(function(){
Au.textResizeEvent.unsubscribe(A9,this);
});
}
this.cfg.subscribeToConfigEvent(AU,BC);
}
};
var A6=function(){
if(this._shadow){
BC.call(this);
if(Aq.ie){
A9.call(this);
}
}else{
A4.call(this);
}
this.beforeShowEvent.unsubscribe(A6);
};
var A3=A5[0];
if(A3&&this.cfg.getProperty(Ab)==AE){
if(this.cfg.getProperty(As)){
if(this._shadow){
BC.call(this);
if(Aq.ie){
A9.call(this);
}
}else{
A4.call(this);
}
}else{
this.beforeShowEvent.subscribe(A6);
}
}
},initEvents:function(){
s.superclass.initEvents.call(this);
var A4=Aa.length-1,A5,A3;
do{
A5=Aa[A4];
A3=this.createEvent(A5[1]);
A3.signature=F.LIST;
this[A5[0]]=A3;
}while(A4--);
},positionOffScreen:function(){
var A4=this.iframe,A5=this.element,A3=this.OFF_SCREEN_POSITION;
A5.style.top=v;
A5.style.left=v;
if(A4){
A4.style.top=A3;
A4.style.left=A3;
}
},getRoot:function(){
var A5=this.parent,A4,A3;
if(A5){
A4=A5.parent;
A3=A4?A4.getRoot():this;
}else{
A3=this;
}
return A3;
},toString:function(){
var A4=Ao,A3=this.id;
if(A3){
A4+=(Az+A3);
}
return A4;
},setItemGroupTitle:function(A8,A7){
var A6,A5,A4,A3;
if(AN.isString(A8)&&A8.length>0){
A6=AN.isNumber(A7)?A7:0;
A5=this._aGroupTitleElements[A6];
if(A5){
A5.innerHTML=A8;
}else{
A5=document.createElement(this.GROUP_TITLE_TAG_NAME);
A5.innerHTML=A8;
this._aGroupTitleElements[A6]=A5;
}
A4=this._aGroupTitleElements.length-1;
do{
if(this._aGroupTitleElements[A4]){
g.removeClass(this._aGroupTitleElements[A4],AK);
A3=A4;
}
}while(A4--);
if(A3!==null){
g.addClass(this._aGroupTitleElements[A3],AK);
}
this.changeContentEvent.fire();
}
},addItem:function(A3,A4){
return this._addItemToGroup(A4,A3);
},addItems:function(A7,A6){
var A9,A3,A8,A4,A5;
if(AN.isArray(A7)){
A9=A7.length;
A3=[];
for(A4=0;A4<A9;A4++){
A8=A7[A4];
if(A8){
if(AN.isArray(A8)){
A3[A3.length]=this.addItems(A8,A4);
}else{
A3[A3.length]=this._addItemToGroup(A6,A8);
}
}
}
if(A3.length){
A5=A3;
}
}
return A5;
},insertItem:function(A3,A4,A5){
return this._addItemToGroup(A5,A3,A4);
},removeItem:function(A3,A5){
var A6,A4;
if(!AN.isUndefined(A3)){
if(A3 instanceof YAHOO.widget.MenuItem){
A6=this._removeItemFromGroupByValue(A5,A3);
}else{
if(AN.isNumber(A3)){
A6=this._removeItemFromGroupByIndex(A5,A3);
}
}
if(A6){
A6.destroy();
A4=A6;
}
}
return A4;
},getItems:function(){
var A6=this._aItemGroups,A4,A5,A3=[];
if(AN.isArray(A6)){
A4=A6.length;
A5=((A4==1)?A6[0]:(Array.prototype.concat.apply(A3,A6)));
}
return A5;
},getItemGroups:function(){
return this._aItemGroups;
},getItem:function(A4,A5){
var A6,A3;
if(AN.isNumber(A4)){
A6=this._getItemGroup(A5);
if(A6){
A3=A6[A4];
}
}
return A3;
},getSubmenus:function(){
var A4=this.getItems(),A8=A4.length,A3,A5,A7,A6;
if(A8>0){
A3=[];
for(A6=0;A6<A8;A6++){
A7=A4[A6];
if(A7){
A5=A7.cfg.getProperty(O);
if(A5){
A3[A3.length]=A5;
}
}
}
}
return A3;
},clearContent:function(){
var A7=this.getItems(),A4=A7.length,A5=this.element,A6=this.body,BB=this.header,A3=this.footer,BA,A9,A8;
if(A4>0){
A8=A4-1;
do{
BA=A7[A8];
if(BA){
A9=BA.cfg.getProperty(O);
if(A9){
this.cfg.configChangedEvent.unsubscribe(this._onParentMenuConfigChange,A9);
this.renderEvent.unsubscribe(this._onParentMenuRender,A9);
}
this.removeItem(BA,BA.groupIndex);
}
}while(A8--);
}
if(BB){
AB.purgeElement(BB);
A5.removeChild(BB);
}
if(A3){
AB.purgeElement(A3);
A5.removeChild(A3);
}
if(A6){
AB.purgeElement(A6);
A6.innerHTML=v;
}
this.activeItem=null;
this._aItemGroups=[];
this._aListElements=[];
this._aGroupTitleElements=[];
this.cfg.setProperty(U,null);
},destroy:function(){
this.clearContent();
this._aItemGroups=null;
this._aListElements=null;
this._aGroupTitleElements=null;
s.superclass.destroy.call(this);
},setInitialFocus:function(){
var A3=this._getFirstEnabledItem();
if(A3){
A3.focus();
}
},setInitialSelection:function(){
var A3=this._getFirstEnabledItem();
if(A3){
A3.cfg.setProperty(z,true);
}
},clearActiveItem:function(A5){
if(this.cfg.getProperty(At)>0){
this._cancelShowDelay();
}
var A3=this.activeItem,A6,A4;
if(A3){
A6=A3.cfg;
if(A5){
A3.blur();
this.getRoot()._hasFocus=true;
}
A6.setProperty(z,false);
A4=A6.getProperty(O);
if(A4){
A4.hide();
}
this.activeItem=null;
}
},focus:function(){
if(!this.hasFocus()){
this.setInitialFocus();
}
},blur:function(){
var A3;
if(this.hasFocus()){
A3=A1.getFocusedMenuItem();
if(A3){
A3.blur();
}
}
},hasFocus:function(){
return (A1.getFocusedMenu()==this.getRoot());
},subscribe:function(){
function A6(BB,BA,BD){
var BE=BA[0],BC=BE.cfg.getProperty(O);
if(BC){
BC.subscribe.apply(BC,BD);
}
};
function A9(BB,BA,BD){
var BC=this.cfg.getProperty(O);
if(BC){
BC.subscribe.apply(BC,BD);
}
};
s.superclass.subscribe.apply(this,arguments);
s.superclass.subscribe.call(this,AS,A6,arguments);
var A3=this.getItems(),A8,A7,A4,A5;
if(A3){
A8=A3.length;
if(A8>0){
A5=A8-1;
do{
A7=A3[A5];
A4=A7.cfg.getProperty(O);
if(A4){
A4.subscribe.apply(A4,arguments);
}else{
A7.cfg.subscribeToConfigEvent(O,A9,arguments);
}
}while(A5--);
}
}
},initDefaultConfig:function(){
s.superclass.initDefaultConfig.call(this);
var A3=this.cfg;
A3.addProperty(AZ.key,{handler:this.configVisible,value:AZ.value,validator:AZ.validator});
A3.addProperty(AQ.key,{handler:this.configConstrainToViewport,value:AQ.value,validator:AQ.validator,supercedes:AQ.supercedes});
A3.addProperty(AJ.key,{value:AJ.value,validator:AJ.validator,supercedes:AJ.supercedes});
A3.addProperty(S.key,{handler:this.configPosition,value:S.value,validator:S.validator,supercedes:S.supercedes});
A3.addProperty(A.key,{value:A.value,suppressEvent:A.suppressEvent});
A3.addProperty(u.key,{value:u.value,validator:u.validator,suppressEvent:u.suppressEvent});
A3.addProperty(Z.key,{value:Z.value,validator:Z.validator,suppressEvent:Z.suppressEvent});
A3.addProperty(r.key,{handler:this.configHideDelay,value:r.value,validator:r.validator,suppressEvent:r.suppressEvent});
A3.addProperty(w.key,{value:w.value,validator:w.validator,suppressEvent:w.suppressEvent});
A3.addProperty(p.key,{value:p.value,validator:p.validator,suppressEvent:p.suppressEvent});
A3.addProperty(AO.key,{handler:this.configContainer,value:document.body,suppressEvent:AO.suppressEvent});
A3.addProperty(Ad.key,{value:Ad.value,validator:Ad.validator,supercedes:Ad.supercedes,suppressEvent:Ad.suppressEvent});
A3.addProperty(N.key,{value:N.value,validator:N.validator,supercedes:N.supercedes,suppressEvent:N.suppressEvent});
A3.addProperty(X.key,{handler:this.configMaxHeight,value:X.value,validator:X.validator,suppressEvent:X.suppressEvent,supercedes:X.supercedes});
A3.addProperty(W.key,{handler:this.configClassName,value:W.value,validator:W.validator,supercedes:W.supercedes});
A3.addProperty(b.key,{handler:this.configDisabled,value:b.value,validator:b.validator,suppressEvent:b.suppressEvent});
A3.addProperty(I.key,{handler:this.configShadow,value:I.value,validator:I.validator});
A3.addProperty(Aj.key,{value:Aj.value,validator:Aj.validator});
}});
})();
(function(){
YAHOO.widget.MenuItem=function(AO,AN){
if(AO){
if(AN){
this.parent=AN.parent;
this.value=AN.value;
this.id=AN.id;
}
this.init(AO,AN);
}
};
var v=YAHOO.util.Dom,h=YAHOO.widget.Module,x=YAHOO.widget.Menu,a=YAHOO.widget.MenuItem,AG=YAHOO.util.CustomEvent,i=YAHOO.env.ua,AM=YAHOO.lang,AH="text",M="#",O="-",K="helptext",l="url",AD="target",A="emphasis",L="strongemphasis",Z="checked",u="submenu",G="disabled",B="selected",N="hassubmenu",S="checked-disabled",AE="hassubmenu-disabled",z="hassubmenu-selected",R="checked-selected",o="onclick",I="classname",AF="",g="OPTION",t="OPTGROUP",J="LI",Q="li",AA="href",AB="<a href=\"#\"></a>",p="SELECT",V="DIV",AJ="<em class=\"helptext\">",Y="<em>",H="</em>",U="<strong>",w="</strong>",W="preventcontextoverlap",f="obj",AC="scope",r="none",T="visible",D=" ",k="MenuItem",n=[["mouseOverEvent","mouseover"],["mouseOutEvent","mouseout"],["mouseDownEvent","mousedown"],["mouseUpEvent","mouseup"],["clickEvent","click"],["keyPressEvent","keypress"],["keyDownEvent","keydown"],["keyUpEvent","keyup"],["focusEvent","focus"],["blurEvent","blur"],["destroyEvent","destroy"]],m={key:AH,value:AF,validator:AM.isString,suppressEvent:true},q={key:K,supercedes:[AH],suppressEvent:true},F={key:l,value:M,suppressEvent:true},AK={key:AD,suppressEvent:true},AL={key:A,value:false,validator:AM.isBoolean,suppressEvent:true,supercedes:[AH]},b={key:L,value:false,validator:AM.isBoolean,suppressEvent:true,supercedes:[AH]},j={key:Z,value:false,validator:AM.isBoolean,suppressEvent:true,supercedes:[G,B]},E={key:u,suppressEvent:true,supercedes:[G,B]},AI={key:G,value:false,validator:AM.isBoolean,suppressEvent:true,supercedes:[AH,B]},d={key:B,value:false,validator:AM.isBoolean,suppressEvent:true},s={key:o,suppressEvent:true},y={key:I,value:null,validator:AM.isString,suppressEvent:true},c={},C;
var X=function(AQ,AP){
var AN=c[AQ];
if(!AN){
c[AQ]={};
AN=c[AQ];
}
var AO=AN[AP];
if(!AO){
AO=AQ+O+AP;
AN[AP]=AO;
}
return AO;
};
var e=function(AN){
v.addClass(this.element,X(this.CSS_CLASS_NAME,AN));
v.addClass(this._oAnchor,X(this.CSS_LABEL_CLASS_NAME,AN));
};
var P=function(AN){
v.removeClass(this.element,X(this.CSS_CLASS_NAME,AN));
v.removeClass(this._oAnchor,X(this.CSS_LABEL_CLASS_NAME,AN));
};
a.prototype={CSS_CLASS_NAME:"yuimenuitem",CSS_LABEL_CLASS_NAME:"yuimenuitemlabel",SUBMENU_TYPE:null,_oAnchor:null,_oHelpTextEM:null,_oSubmenu:null,_oOnclickAttributeValue:null,_sClassName:null,constructor:a,index:null,groupIndex:null,parent:null,element:null,srcElement:null,value:null,browser:h.prototype.browser,id:null,init:function(AN,AX){
if(!this.SUBMENU_TYPE){
this.SUBMENU_TYPE=x;
}
this.cfg=new YAHOO.util.Config(this);
this.initDefaultConfig();
var AT=this.cfg,AU=M,AP,AW,AV,AO,AR,AQ,AS;
if(AM.isString(AN)){
this._createRootNodeStructure();
AT.queueProperty(AH,AN);
}else{
if(AN&&AN.tagName){
switch(AN.tagName.toUpperCase()){
case g:
this._createRootNodeStructure();
AT.queueProperty(AH,AN.text);
AT.queueProperty(G,AN.disabled);
this.value=AN.value;
this.srcElement=AN;
break;
case t:
this._createRootNodeStructure();
AT.queueProperty(AH,AN.label);
AT.queueProperty(G,AN.disabled);
this.srcElement=AN;
this._initSubTree();
break;
case J:
AV=v.getFirstChild(AN);
if(AV){
AU=AV.getAttribute(AA,2);
AO=AV.getAttribute(AD);
AR=AV.innerHTML;
}
this.srcElement=AN;
this.element=AN;
this._oAnchor=AV;
AT.setProperty(AH,AR,true);
AT.setProperty(l,AU,true);
AT.setProperty(AD,AO,true);
this._initSubTree();
break;
}
}
}
if(this.element){
AQ=(this.srcElement||this.element).id;
if(!AQ){
AQ=this.id||v.generateId();
this.element.id=AQ;
}
this.id=AQ;
v.addClass(this.element,this.CSS_CLASS_NAME);
v.addClass(this._oAnchor,this.CSS_LABEL_CLASS_NAME);
AS=n.length-1;
do{
AW=n[AS];
AP=this.createEvent(AW[1]);
AP.signature=AG.LIST;
this[AW[0]]=AP;
}while(AS--);
if(AX){
AT.applyConfig(AX);
}
AT.fireQueue();
}
},_createRootNodeStructure:function(){
var AN,AO;
if(!C){
C=document.createElement(Q);
C.innerHTML=AB;
}
AN=C.cloneNode(true);
AN.className=this.CSS_CLASS_NAME;
AO=AN.firstChild;
AO.className=this.CSS_LABEL_CLASS_NAME;
this.element=AN;
this._oAnchor=AO;
},_initSubTree:function(){
var AT=this.srcElement,AP=this.cfg,AR,AQ,AO,AN,AS;
if(AT.childNodes.length>0){
if(this.parent.lazyLoad&&this.parent.srcElement&&this.parent.srcElement.tagName.toUpperCase()==p){
AP.setProperty(u,{id:v.generateId(),itemdata:AT.childNodes});
}else{
AR=AT.firstChild;
AQ=[];
do{
if(AR&&AR.tagName){
switch(AR.tagName.toUpperCase()){
case V:
AP.setProperty(u,AR);
break;
case g:
AQ[AQ.length]=AR;
break;
}
}
}while((AR=AR.nextSibling));
AO=AQ.length;
if(AO>0){
AN=new this.SUBMENU_TYPE(v.generateId());
AP.setProperty(u,AN);
for(AS=0;AS<AO;AS++){
AN.addItem((new AN.ITEM_TYPE(AQ[AS])));
}
}
}
}
},configText:function(AW,AP,AR){
var AO=AP[0],AQ=this.cfg,AU=this._oAnchor,AN=AQ.getProperty(K),AV=AF,AS=AF,AT=AF;
if(AO){
if(AN){
AV=AJ+AN+H;
}
if(AQ.getProperty(A)){
AS=Y;
AT=H;
}
if(AQ.getProperty(L)){
AS=U;
AT=w;
}
AU.innerHTML=(AS+AO+AT+AV);
}
},configHelpText:function(AP,AO,AN){
this.cfg.refireEvent(AH);
},configURL:function(AP,AO,AN){
var AR=AO[0];
if(!AR){
AR=M;
}
var AQ=this._oAnchor;
if(i.opera){
AQ.removeAttribute(AA);
}
AQ.setAttribute(AA,AR);
},configTarget:function(AQ,AP,AO){
var AN=AP[0],AR=this._oAnchor;
if(AN&&AN.length>0){
AR.setAttribute(AD,AN);
}else{
AR.removeAttribute(AD);
}
},configEmphasis:function(AP,AO,AN){
var AR=AO[0],AQ=this.cfg;
if(AR&&AQ.getProperty(L)){
AQ.setProperty(L,false);
}
AQ.refireEvent(AH);
},configStrongEmphasis:function(AQ,AP,AO){
var AN=AP[0],AR=this.cfg;
if(AN&&AR.getProperty(A)){
AR.setProperty(A,false);
}
AR.refireEvent(AH);
},configChecked:function(AP,AO,AN){
var AR=AO[0],AQ=this.cfg;
if(AR){
e.call(this,Z);
}else{
P.call(this,Z);
}
AQ.refireEvent(AH);
if(AQ.getProperty(G)){
AQ.refireEvent(G);
}
if(AQ.getProperty(B)){
AQ.refireEvent(B);
}
},configDisabled:function(AP,AO,AN){
var AR=AO[0],AS=this.cfg,AQ=AS.getProperty(u),AT=AS.getProperty(Z);
if(AR){
if(AS.getProperty(B)){
AS.setProperty(B,false);
}
e.call(this,G);
if(AQ){
e.call(this,AE);
}
if(AT){
e.call(this,S);
}
}else{
P.call(this,G);
if(AQ){
P.call(this,AE);
}
if(AT){
P.call(this,S);
}
}
},configSelected:function(AP,AO,AN){
var AT=this.cfg,AS=this._oAnchor,AR=AO[0],AU=AT.getProperty(Z),AQ=AT.getProperty(u);
if(i.opera){
AS.blur();
}
if(AR&&!AT.getProperty(G)){
e.call(this,B);
if(AQ){
e.call(this,z);
}
if(AU){
e.call(this,R);
}
}else{
P.call(this,B);
if(AQ){
P.call(this,z);
}
if(AU){
P.call(this,R);
}
}
if(this.hasFocus()&&i.opera){
AS.focus();
}
},_onSubmenuBeforeHide:function(AQ,AP){
var AR=this.parent,AN;
function AO(){
AR._oAnchor.blur();
AN.beforeHideEvent.unsubscribe(AO);
};
if(AR.hasFocus()){
AN=AR.parent;
AN.beforeHideEvent.subscribe(AO);
}
},configSubmenu:function(AU,AP,AS){
var AR=AP[0],AQ=this.cfg,AO=this.parent&&this.parent.lazyLoad,AT,AV,AN;
if(AR){
if(AR instanceof x){
AT=AR;
AT.parent=this;
AT.lazyLoad=AO;
}else{
if(AM.isObject(AR)&&AR.id&&!AR.nodeType){
AV=AR.id;
AN=AR;
AN.lazyload=AO;
AN.parent=this;
AT=new this.SUBMENU_TYPE(AV,AN);
AQ.setProperty(u,AT,true);
}else{
AT=new this.SUBMENU_TYPE(AR,{lazyload:AO,parent:this});
AQ.setProperty(u,AT,true);
}
}
if(AT){
AT.cfg.setProperty(W,true);
e.call(this,N);
if(AQ.getProperty(l)===M){
AQ.setProperty(l,(M+AT.id));
}
this._oSubmenu=AT;
if(i.opera){
AT.beforeHideEvent.subscribe(this._onSubmenuBeforeHide);
}
}
}else{
P.call(this,N);
if(this._oSubmenu){
this._oSubmenu.destroy();
}
}
if(AQ.getProperty(G)){
AQ.refireEvent(G);
}
if(AQ.getProperty(B)){
AQ.refireEvent(B);
}
},configOnClick:function(AP,AO,AN){
var AQ=AO[0];
if(this._oOnclickAttributeValue&&(this._oOnclickAttributeValue!=AQ)){
this.clickEvent.unsubscribe(this._oOnclickAttributeValue.fn,this._oOnclickAttributeValue.obj);
this._oOnclickAttributeValue=null;
}
if(!this._oOnclickAttributeValue&&AM.isObject(AQ)&&AM.isFunction(AQ.fn)){
this.clickEvent.subscribe(AQ.fn,((f in AQ)?AQ.obj:this),((AC in AQ)?AQ.scope:null));
this._oOnclickAttributeValue=AQ;
}
},configClassName:function(AQ,AP,AO){
var AN=AP[0];
if(this._sClassName){
v.removeClass(this.element,this._sClassName);
}
v.addClass(this.element,AN);
this._sClassName=AN;
},initDefaultConfig:function(){
var AN=this.cfg;
AN.addProperty(m.key,{handler:this.configText,value:m.value,validator:m.validator,suppressEvent:m.suppressEvent});
AN.addProperty(q.key,{handler:this.configHelpText,supercedes:q.supercedes,suppressEvent:q.suppressEvent});
AN.addProperty(F.key,{handler:this.configURL,value:F.value,suppressEvent:F.suppressEvent});
AN.addProperty(AK.key,{handler:this.configTarget,suppressEvent:AK.suppressEvent});
AN.addProperty(AL.key,{handler:this.configEmphasis,value:AL.value,validator:AL.validator,suppressEvent:AL.suppressEvent,supercedes:AL.supercedes});
AN.addProperty(b.key,{handler:this.configStrongEmphasis,value:b.value,validator:b.validator,suppressEvent:b.suppressEvent,supercedes:b.supercedes});
AN.addProperty(j.key,{handler:this.configChecked,value:j.value,validator:j.validator,suppressEvent:j.suppressEvent,supercedes:j.supercedes});
AN.addProperty(AI.key,{handler:this.configDisabled,value:AI.value,validator:AI.validator,suppressEvent:AI.suppressEvent});
AN.addProperty(d.key,{handler:this.configSelected,value:d.value,validator:d.validator,suppressEvent:d.suppressEvent});
AN.addProperty(E.key,{handler:this.configSubmenu,supercedes:E.supercedes,suppressEvent:E.suppressEvent});
AN.addProperty(s.key,{handler:this.configOnClick,suppressEvent:s.suppressEvent});
AN.addProperty(y.key,{handler:this.configClassName,value:y.value,validator:y.validator,suppressEvent:y.suppressEvent});
},getNextEnabledSibling:function(){
var AQ,AT,AN,AS,AR,AO;
function AP(AU,AV){
return AU[AV]||AP(AU,(AV+1));
};
if(this.parent instanceof x){
AQ=this.groupIndex;
AT=this.parent.getItemGroups();
if(this.index<(AT[AQ].length-1)){
AN=AP(AT[AQ],(this.index+1));
}else{
if(AQ<(AT.length-1)){
AS=AQ+1;
}else{
AS=0;
}
AR=AP(AT,AS);
AN=AP(AR,0);
}
AO=(AN.cfg.getProperty(G)||AN.element.style.display==r)?AN.getNextEnabledSibling():AN;
}
return AO;
},getPreviousEnabledSibling:function(){
var AS,AU,AO,AN,AR,AQ;
function AT(AV,AW){
return AV[AW]||AT(AV,(AW-1));
};
function AP(AV,AW){
return AV[AW]?AW:AP(AV,(AW+1));
};
if(this.parent instanceof x){
AS=this.groupIndex;
AU=this.parent.getItemGroups();
if(this.index>AP(AU[AS],0)){
AO=AT(AU[AS],(this.index-1));
}else{
if(AS>AP(AU,0)){
AN=AS-1;
}else{
AN=AU.length-1;
}
AR=AT(AU,AN);
AO=AT(AR,(AR.length-1));
}
AQ=(AO.cfg.getProperty(G)||AO.element.style.display==r)?AO.getPreviousEnabledSibling():AO;
}
return AQ;
},focus:function(){
var AQ=this.parent,AP=this._oAnchor,AN=AQ.activeItem;
function AO(){
try{
if(!(i.ie&&!document.hasFocus())){
if(AN){
AN.blurEvent.fire();
}
AP.focus();
this.focusEvent.fire();
}
}
catch(AR){
}
};
if(!this.cfg.getProperty(G)&&AQ&&AQ.cfg.getProperty(T)&&this.element.style.display!=r){
AM.later(0,this,AO);
}
},blur:function(){
var AN=this.parent;
if(!this.cfg.getProperty(G)&&AN&&AN.cfg.getProperty(T)){
AM.later(0,this,function(){
try{
this._oAnchor.blur();
this.blurEvent.fire();
}
catch(AO){
}
},0);
}
},hasFocus:function(){
return (YAHOO.widget.MenuManager.getFocusedMenuItem()==this);
},destroy:function(){
var AP=this.element,AO,AN,AR,AQ;
if(AP){
AO=this.cfg.getProperty(u);
if(AO){
AO.destroy();
}
AN=AP.parentNode;
if(AN){
AN.removeChild(AP);
this.destroyEvent.fire();
}
AQ=n.length-1;
do{
AR=n[AQ];
this[AR[0]].unsubscribeAll();
}while(AQ--);
this.cfg.configChangedEvent.unsubscribeAll();
}
},toString:function(){
var AO=k,AN=this.id;
if(AN){
AO+=(D+AN);
}
return AO;
}};
AM.augmentProto(a,YAHOO.util.EventProvider);
})();
(function(){
var B="xy",C="mousedown",F="ContextMenu",J=" ";
YAHOO.widget.ContextMenu=function(L,K){
YAHOO.widget.ContextMenu.superclass.constructor.call(this,L,K);
};
var I=YAHOO.util.Event,E=YAHOO.env.ua,G=YAHOO.widget.ContextMenu,A={"TRIGGER_CONTEXT_MENU":"triggerContextMenu","CONTEXT_MENU":(E.opera?C:"contextmenu"),"CLICK":"click"},H={key:"trigger",suppressEvent:true};
function D(L,K,M){
this.cfg.setProperty(B,M);
this.beforeShowEvent.unsubscribe(D,M);
};
YAHOO.lang.extend(G,YAHOO.widget.Menu,{_oTrigger:null,_bCancelled:false,contextEventTarget:null,triggerContextMenuEvent:null,init:function(L,K){
G.superclass.init.call(this,L);
this.beforeInitEvent.fire(G);
if(K){
this.cfg.applyConfig(K,true);
}
this.initEvent.fire(G);
},initEvents:function(){
G.superclass.initEvents.call(this);
this.triggerContextMenuEvent=this.createEvent(A.TRIGGER_CONTEXT_MENU);
this.triggerContextMenuEvent.signature=YAHOO.util.CustomEvent.LIST;
},cancel:function(){
this._bCancelled=true;
},_removeEventHandlers:function(){
var K=this._oTrigger;
if(K){
I.removeListener(K,A.CONTEXT_MENU,this._onTriggerContextMenu);
if(E.opera){
I.removeListener(K,A.CLICK,this._onTriggerClick);
}
}
},_onTriggerClick:function(L,K){
if(L.ctrlKey){
I.stopEvent(L);
}
},_onTriggerContextMenu:function(M,K){
var L;
if(!(M.type==C&&!M.ctrlKey)){
I.stopEvent(M);
this.contextEventTarget=I.getTarget(M);
this.triggerContextMenuEvent.fire(M);
YAHOO.widget.MenuManager.hideVisible();
if(!this._bCancelled){
L=I.getXY(M);
if(!YAHOO.util.Dom.inDocument(this.element)){
this.beforeShowEvent.subscribe(D,L);
}else{
this.cfg.setProperty(B,L);
}
this.show();
}
this._bCancelled=false;
}
},toString:function(){
var L=F,K=this.id;
if(K){
L+=(J+K);
}
return L;
},initDefaultConfig:function(){
G.superclass.initDefaultConfig.call(this);
this.cfg.addProperty(H.key,{handler:this.configTrigger,suppressEvent:H.suppressEvent});
},destroy:function(){
this._removeEventHandlers();
G.superclass.destroy.call(this);
},configTrigger:function(L,K,N){
var M=K[0];
if(M){
if(this._oTrigger){
this._removeEventHandlers();
}
this._oTrigger=M;
I.on(M,A.CONTEXT_MENU,this._onTriggerContextMenu,this,true);
if(E.opera){
I.on(M,A.CLICK,this._onTriggerClick,this,true);
}
}else{
this._removeEventHandlers();
}
}});
}());
YAHOO.widget.ContextMenuItem=YAHOO.widget.MenuItem;
(function(){
var D=YAHOO.lang,N="static",M="dynamic,"+N,A="disabled",F="selected",B="autosubmenudisplay",G="submenu",C="visible",Q=" ",H="submenutoggleregion",P="MenuBar";
YAHOO.widget.MenuBar=function(T,S){
YAHOO.widget.MenuBar.superclass.constructor.call(this,T,S);
};
function O(T){
var S=false;
if(D.isString(T)){
S=(M.indexOf((T.toLowerCase()))!=-1);
}
return S;
};
var R=YAHOO.util.Event,L=YAHOO.widget.MenuBar,K={key:"position",value:N,validator:O,supercedes:[C]},E={key:"submenualignment",value:["tl","bl"]},J={key:B,value:false,validator:D.isBoolean,suppressEvent:true},I={key:H,value:false,validator:D.isBoolean};
D.extend(L,YAHOO.widget.Menu,{init:function(T,S){
if(!this.ITEM_TYPE){
this.ITEM_TYPE=YAHOO.widget.MenuBarItem;
}
L.superclass.init.call(this,T);
this.beforeInitEvent.fire(L);
if(S){
this.cfg.applyConfig(S,true);
}
this.initEvent.fire(L);
},CSS_CLASS_NAME:"yuimenubar",SUBMENU_TOGGLE_REGION_WIDTH:20,_onKeyDown:function(U,T,Y){
var S=T[0],Z=T[1],W,X,V;
if(Z&&!Z.cfg.getProperty(A)){
X=Z.cfg;
switch(S.keyCode){
case 37:
case 39:
if(Z==this.activeItem&&!X.getProperty(F)){
X.setProperty(F,true);
}else{
V=(S.keyCode==37)?Z.getPreviousEnabledSibling():Z.getNextEnabledSibling();
if(V){
this.clearActiveItem();
V.cfg.setProperty(F,true);
W=V.cfg.getProperty(G);
if(W){
W.show();
W.setInitialFocus();
}else{
V.focus();
}
}
}
R.preventDefault(S);
break;
case 40:
if(this.activeItem!=Z){
this.clearActiveItem();
X.setProperty(F,true);
Z.focus();
}
W=X.getProperty(G);
if(W){
if(W.cfg.getProperty(C)){
W.setInitialSelection();
W.setInitialFocus();
}else{
W.show();
W.setInitialFocus();
}
}
R.preventDefault(S);
break;
}
}
if(S.keyCode==27&&this.activeItem){
W=this.activeItem.cfg.getProperty(G);
if(W&&W.cfg.getProperty(C)){
W.hide();
this.activeItem.focus();
}else{
this.activeItem.cfg.setProperty(F,false);
this.activeItem.blur();
}
R.preventDefault(S);
}
},_onClick:function(e,Y,b){
L.superclass._onClick.call(this,e,Y,b);
var d=Y[1],T=true,S,f,U,W,Z,a,c,V;
var X=function(){
if(a.cfg.getProperty(C)){
a.hide();
}else{
a.show();
}
};
if(d&&!d.cfg.getProperty(A)){
f=Y[0];
U=R.getTarget(f);
W=this.activeItem;
Z=this.cfg;
if(W&&W!=d){
this.clearActiveItem();
}
d.cfg.setProperty(F,true);
a=d.cfg.getProperty(G);
if(a){
S=d.element;
c=YAHOO.util.Dom.getX(S);
V=c+(S.offsetWidth-this.SUBMENU_TOGGLE_REGION_WIDTH);
if(Z.getProperty(H)){
if(R.getPageX(f)>V){
X();
R.preventDefault(f);
T=false;
}
}else{
X();
}
}
}
return T;
},configSubmenuToggle:function(U,T){
var S=T[0];
if(S){
this.cfg.setProperty(B,false);
}
},toString:function(){
var T=P,S=this.id;
if(S){
T+=(Q+S);
}
return T;
},initDefaultConfig:function(){
L.superclass.initDefaultConfig.call(this);
var S=this.cfg;
S.addProperty(K.key,{handler:this.configPosition,value:K.value,validator:K.validator,supercedes:K.supercedes});
S.addProperty(E.key,{value:E.value,suppressEvent:E.suppressEvent});
S.addProperty(J.key,{value:J.value,validator:J.validator,suppressEvent:J.suppressEvent});
S.addProperty(I.key,{value:I.value,validator:I.validator,handler:this.configSubmenuToggle});
}});
}());
YAHOO.widget.MenuBarItem=function(B,A){
YAHOO.widget.MenuBarItem.superclass.constructor.call(this,B,A);
};
YAHOO.lang.extend(YAHOO.widget.MenuBarItem,YAHOO.widget.MenuItem,{init:function(B,A){
if(!this.SUBMENU_TYPE){
this.SUBMENU_TYPE=YAHOO.widget.Menu;
}
YAHOO.widget.MenuBarItem.superclass.init.call(this,B);
var C=this.cfg;
if(A){
C.applyConfig(A,true);
}
C.fireQueue();
},CSS_CLASS_NAME:"yuimenubaritem",CSS_LABEL_CLASS_NAME:"yuimenubaritemlabel",toString:function(){
var A="MenuBarItem";
if(this.cfg&&this.cfg.getProperty("text")){
A+=(": "+this.cfg.getProperty("text"));
}
return A;
}});
YAHOO.register("menu",YAHOO.widget.Menu,{version:"2.6.0",build:"1321"});
(function(){
var _3b=YAHOO.lang,_3c=YAHOO.util,Ev=_3c.Event;
_3c.DataSourceBase=function(_3d,_3e){
if(_3d===null||_3d===undefined){
return;
}
this.liveData=_3d;
this._oQueue={interval:null,conn:null,requests:[]};
this.responseSchema={};
if(_3e&&(_3e.constructor==Object)){
for(var _3f in _3e){
if(_3f){
this[_3f]=_3e[_3f];
}
}
}
var _40=this.maxCacheEntries;
if(!_3b.isNumber(_40)||(_40<0)){
_40=0;
}
this._aIntervals=[];
this.createEvent("cacheRequestEvent");
this.createEvent("cacheResponseEvent");
this.createEvent("requestEvent");
this.createEvent("responseEvent");
this.createEvent("responseParseEvent");
this.createEvent("responseCacheEvent");
this.createEvent("dataErrorEvent");
this.createEvent("cacheFlushEvent");
var DS=_3c.DataSourceBase;
this._sName="DataSource instance"+DS._nIndex;
DS._nIndex++;
};
var DS=_3c.DataSourceBase;
_3b.augmentObject(DS,{TYPE_UNKNOWN:-1,TYPE_JSARRAY:0,TYPE_JSFUNCTION:1,TYPE_XHR:2,TYPE_JSON:3,TYPE_XML:4,TYPE_TEXT:5,TYPE_HTMLTABLE:6,TYPE_SCRIPTNODE:7,TYPE_LOCAL:8,ERROR_DATAINVALID:"Invalid data",ERROR_DATANULL:"Null data",_nIndex:0,_nTransactionId:0,issueCallback:function(_41,_42,_43,_44){
if(_3b.isFunction(_41)){
_41.apply(_44,_42);
}else{
if(_3b.isObject(_41)){
_44=_41.scope||_44||window;
var _45=_41.success;
if(_43){
_45=_41.failure;
}
if(_45){
_45.apply(_44,_42.concat([_41.argument]));
}
}
}
},parseString:function(_46){
if(!_3b.isValue(_46)){
return null;
}
var _47=_46+"";
if(_3b.isString(_47)){
return _47;
}else{
return null;
}
},parseNumber:function(_48){
var _49=_48*1;
if(_3b.isNumber(_49)){
return _49;
}else{
return null;
}
},convertNumber:function(_4a){
return DS.parseNumber(_4a);
},parseDate:function(_4b){
var _4c=null;
if(!(_4b instanceof Date)){
_4c=new Date(_4b);
}else{
return _4b;
}
if(_4c instanceof Date){
return _4c;
}else{
return null;
}
},convertDate:function(_4d){
return DS.parseDate(_4d);
}});
DS.Parser={string:DS.parseString,number:DS.parseNumber,date:DS.parseDate};
DS.prototype={_sName:null,_aCache:null,_oQueue:null,_aIntervals:null,maxCacheEntries:0,liveData:null,dataType:DS.TYPE_UNKNOWN,responseType:DS.TYPE_UNKNOWN,responseSchema:null,toString:function(){
return this._sName;
},getCachedResponse:function(_4e,_4f,_50){
var _51=this._aCache;
if(this.maxCacheEntries>0){
if(!_51){
this._aCache=[];
}else{
var _52=_51.length;
if(_52>0){
var _53=null;
this.fireEvent("cacheRequestEvent",{request:_4e,callback:_4f,caller:_50});
for(var i=_52-1;i>=0;i--){
var _54=_51[i];
if(this.isCacheHit(_4e,_54.request)){
_53=_54.response;
this.fireEvent("cacheResponseEvent",{request:_4e,response:_53,callback:_4f,caller:_50});
if(i<_52-1){
_51.splice(i,1);
this.addToCache(_4e,_53);
}
_53.cached=true;
break;
}
}
return _53;
}
}
}else{
if(_51){
this._aCache=null;
}
}
return null;
},isCacheHit:function(_55,_56){
return (_55===_56);
},addToCache:function(_57,_58){
var _59=this._aCache;
if(!_59){
return;
}
while(_59.length>=this.maxCacheEntries){
_59.shift();
}
var _5a={request:_57,response:_58};
_59[_59.length]=_5a;
this.fireEvent("responseCacheEvent",{request:_57,response:_58});
},flushCache:function(){
if(this._aCache){
this._aCache=[];
this.fireEvent("cacheFlushEvent");
}
},setInterval:function(_5b,_5c,_5d,_5e){
if(_3b.isNumber(_5b)&&(_5b>=0)){
var _5f=this;
var nId=setInterval(function(){
_5f.makeConnection(_5c,_5d,_5e);
},_5b);
this._aIntervals.push(nId);
return nId;
}else{
}
},clearInterval:function(nId){
var _60=this._aIntervals||[];
for(var i=_60.length-1;i>-1;i--){
if(_60[i]===nId){
_60.splice(i,1);
clearInterval(nId);
}
}
},clearAllIntervals:function(){
var _61=this._aIntervals||[];
for(var i=_61.length-1;i>-1;i--){
clearInterval(_61[i]);
}
_61=[];
},sendRequest:function(_62,_63,_64){
var _65=this.getCachedResponse(_62,_63,_64);
if(_65){
DS.issueCallback(_63,[_62,_65],false,_64);
return null;
}
return this.makeConnection(_62,_63,_64);
},makeConnection:function(_66,_67,_68){
var tId=DS._nTransactionId++;
this.fireEvent("requestEvent",{tId:tId,request:_66,callback:_67,caller:_68});
var _69=this.liveData;
this.handleResponse(_66,_69,_67,_68,tId);
return tId;
},handleResponse:function(_6a,_6b,_6c,_6d,tId){
this.fireEvent("responseEvent",{tId:tId,request:_6a,response:_6b,callback:_6c,caller:_6d});
var xhr=(this.dataType==DS.TYPE_XHR)?true:false;
var _6e=null;
var _6f=_6b;
if(this.responseType===DS.TYPE_UNKNOWN){
var _70=(_6b&&_6b.getResponseHeader)?_6b.getResponseHeader["Content-Type"]:null;
if(_70){
if(_70.indexOf("text/xml")>-1){
this.responseType=DS.TYPE_XML;
}else{
if(_70.indexOf("application/json")>-1){
this.responseType=DS.TYPE_JSON;
}else{
if(_70.indexOf("text/plain")>-1){
this.responseType=DS.TYPE_TEXT;
}
}
}
}else{
if(YAHOO.lang.isArray(_6b)){
this.responseType=DS.TYPE_JSARRAY;
}else{
if(_6b&&_6b.nodeType&&_6b.nodeType==9){
this.responseType=DS.TYPE_XML;
}else{
if(_6b&&_6b.nodeName&&(_6b.nodeName.toLowerCase()=="table")){
this.responseType=DS.TYPE_HTMLTABLE;
}else{
if(YAHOO.lang.isObject(_6b)){
this.responseType=DS.TYPE_JSON;
}else{
if(YAHOO.lang.isString(_6b)){
this.responseType=DS.TYPE_TEXT;
}
}
}
}
}
}
}
switch(this.responseType){
case DS.TYPE_JSARRAY:
if(xhr&&_6b&&_6b.responseText){
_6f=_6b.responseText;
}
_6f=this.doBeforeParseData(_6a,_6f,_6c);
_6e=this.parseArrayData(_6a,_6f);
break;
case DS.TYPE_JSON:
if(xhr&&_6b&&_6b.responseText){
_6f=_6b.responseText;
}
try{
if(_3b.isString(_6f)){
if(_3b.JSON){
_6f=_3b.JSON.parse(_6f);
}else{
if(window.JSON&&JSON.parse){
_6f=JSON.parse(_6f);
}else{
if(_6f.parseJSON){
_6f=_6f.parseJSON();
}else{
while(_6f.length>0&&(_6f.charAt(0)!="{")&&(_6f.charAt(0)!="[")){
_6f=_6f.substring(1,_6f.length);
}
if(_6f.length>0){
var _71=Math.max(_6f.lastIndexOf("]"),_6f.lastIndexOf("}"));
_6f=_6f.substring(0,_71+1);
_6f=eval("("+_6f+")");
}
}
}
}
}
}
catch(e){
}
_6f=this.doBeforeParseData(_6a,_6f,_6c);
_6e=this.parseJSONData(_6a,_6f);
break;
case DS.TYPE_HTMLTABLE:
if(xhr&&_6b.responseText){
_6f=_6b.responseText;
}
_6f=this.doBeforeParseData(_6a,_6f,_6c);
_6e=this.parseHTMLTableData(_6a,_6f);
break;
case DS.TYPE_XML:
if(xhr&&_6b.responseXML){
_6f=_6b.responseXML;
}
_6f=this.doBeforeParseData(_6a,_6f,_6c);
_6e=this.parseXMLData(_6a,_6f);
break;
case DS.TYPE_TEXT:
if(xhr&&_3b.isString(_6b.responseText)){
_6f=_6b.responseText;
}
_6f=this.doBeforeParseData(_6a,_6f,_6c);
_6e=this.parseTextData(_6a,_6f);
break;
default:
_6f=this.doBeforeParseData(_6a,_6f,_6c);
_6e=this.parseData(_6a,_6f);
break;
}
_6e=_6e||{};
if(!_6e.results){
_6e.results=[];
}
if(!_6e.meta){
_6e.meta={};
}
if(_6e&&!_6e.error){
_6e=this.doBeforeCallback(_6a,_6f,_6e,_6c);
this.fireEvent("responseParseEvent",{request:_6a,response:_6e,callback:_6c,caller:_6d});
this.addToCache(_6a,_6e);
}else{
_6e.error=true;
this.fireEvent("dataErrorEvent",{request:_6a,response:_6b,callback:_6c,caller:_6d,message:DS.ERROR_DATANULL});
}
_6e.tId=tId;
DS.issueCallback(_6c,[_6a,_6e],_6e.error,_6d);
},doBeforeParseData:function(_72,_73,_74){
return _73;
},doBeforeCallback:function(_75,_76,_77,_78){
return _77;
},parseData:function(_79,_7a){
if(_3b.isValue(_7a)){
var _7b={results:_7a,meta:{}};
return _7b;
}
return null;
},parseArrayData:function(_7c,_7d){
if(_3b.isArray(_7d)){
var _7e=[],i,j,rec,_7f,_80;
if(_3b.isArray(this.responseSchema.fields)){
var _81=this.responseSchema.fields;
for(i=_81.length-1;i>=0;--i){
if(typeof _81[i]!=="object"){
_81[i]={key:_81[i]};
}
}
var _82={},p;
for(i=_81.length-1;i>=0;--i){
p=(typeof _81[i].parser==="function"?_81[i].parser:DS.Parser[_81[i].parser+""])||_81[i].converter;
if(p){
_82[_81[i].key]=p;
}
}
var _83=_3b.isArray(_7d[0]);
for(i=_7d.length-1;i>-1;i--){
var _84={};
rec=_7d[i];
if(typeof rec==="object"){
for(j=_81.length-1;j>-1;j--){
_7f=_81[j];
_80=_83?rec[j]:rec[_7f.key];
if(_82[_7f.key]){
_80=_82[_7f.key].call(this,_80);
}
if(_80===undefined){
_80=null;
}
_84[_7f.key]=_80;
}
}else{
if(_3b.isString(rec)){
for(j=_81.length-1;j>-1;j--){
_7f=_81[j];
_80=rec;
if(_82[_7f.key]){
_80=_82[_7f.key].call(this,_80);
}
if(_80===undefined){
_80=null;
}
_84[_7f.key]=_80;
}
}
}
_7e[i]=_84;
}
}else{
_7e=_7d;
}
var _85={results:_7e};
return _85;
}
return null;
},parseTextData:function(_86,_87){
if(_3b.isString(_87)){
if(_3b.isString(this.responseSchema.recordDelim)&&_3b.isString(this.responseSchema.fieldDelim)){
var _88={results:[]};
var _89=this.responseSchema.recordDelim;
var _8a=this.responseSchema.fieldDelim;
if(_87.length>0){
var _8b=_87.length-_89.length;
if(_87.substr(_8b)==_89){
_87=_87.substr(0,_8b);
}
if(_87.length>0){
var _8c=_87.split(_89);
for(var i=0,len=_8c.length,_8d=0;i<len;++i){
var _8e=false,_8f=_8c[i];
if(_3b.isString(_8f)&&(_8f.length>0)){
var _90=_8c[i].split(_8a);
var _91={};
if(_3b.isArray(this.responseSchema.fields)){
var _92=this.responseSchema.fields;
for(var j=_92.length-1;j>-1;j--){
try{
var _93=_90[j];
if(_3b.isString(_93)){
if(_93.charAt(0)=="\""){
_93=_93.substr(1);
}
if(_93.charAt(_93.length-1)=="\""){
_93=_93.substr(0,_93.length-1);
}
var _94=_92[j];
var key=(_3b.isValue(_94.key))?_94.key:_94;
if(!_94.parser&&_94.converter){
_94.parser=_94.converter;
}
var _95=(typeof _94.parser==="function")?_94.parser:DS.Parser[_94.parser+""];
if(_95){
_93=_95.call(this,_93);
}
if(_93===undefined){
_93=null;
}
_91[key]=_93;
}else{
_8e=true;
}
}
catch(e){
_8e=true;
}
}
}else{
_91=_90;
}
if(!_8e){
_88.results[_8d++]=_91;
}
}
}
}
}
return _88;
}
}
return null;
},parseXMLResult:function(_96){
var _97={},_98=this.responseSchema;
try{
for(var m=_98.fields.length-1;m>=0;m--){
var _99=_98.fields[m];
var key=(_3b.isValue(_99.key))?_99.key:_99;
var _9a=null;
var _9b=_96.attributes.getNamedItem(key);
if(_9b){
_9a=_9b.value;
}else{
var _9c=_96.getElementsByTagName(key);
if(_9c&&_9c.item(0)&&_9c.item(0)){
_9a=_9c.item(0).firstChild.nodeValue;
var _9d=_9c.item(0);
_9a=(_9d.text)?_9d.text:(_9d.textContent)?_9d.textContent:null;
if(!_9a){
var _9e=[];
for(var j=0,len=_9d.childNodes.length;j<len;j++){
if(_9d.childNodes[j].nodeValue){
_9e[_9e.length]=_9d.childNodes[j].nodeValue;
}
}
if(_9e.length>0){
_9a=_9e.join("");
}
}
}
}
if(_9a===null){
_9a="";
}
if(!_99.parser&&_99.converter){
_99.parser=_99.converter;
}
var _9f=(typeof _99.parser==="function")?_99.parser:DS.Parser[_99.parser+""];
if(_9f){
_9a=_9f.call(this,_9a);
}
if(_9a===undefined){
_9a=null;
}
_97[key]=_9a;
}
}
catch(e){
}
return _97;
},parseXMLData:function(_a0,_a1){
var _a2=false,_a3=this.responseSchema,_a4={meta:{}},_a5=null,_a6=_a3.metaNode,_a7=_a3.metaFields||{},i,k,loc,v;
try{
_a5=(_a3.resultNode)?_a1.getElementsByTagName(_a3.resultNode):null;
_a6=_a6?_a1.getElementsByTagName(_a6)[0]:_a1;
if(_a6){
for(k in _a7){
if(_3b.hasOwnProperty(_a7,k)){
loc=_a7[k];
v=_a6.getElementsByTagName(loc)[0];
if(v){
v=v.firstChild.nodeValue;
}else{
v=_a6.attributes.getNamedItem(loc);
if(v){
v=v.value;
}
}
if(_3b.isValue(v)){
_a4.meta[k]=v;
}
}
}
}
}
catch(e){
}
if(!_a5||!_3b.isArray(_a3.fields)){
_a2=true;
}else{
_a4.results=[];
for(i=_a5.length-1;i>=0;--i){
var _a8=this.parseXMLResult(_a5.item(i));
_a4.results[i]=_a8;
}
}
if(_a2){
_a4.error=true;
}else{
}
return _a4;
},parseJSONData:function(_a9,_aa){
var _ab={results:[],meta:{}};
if(_3b.isObject(_aa)&&this.responseSchema.resultsList){
var _ac=this.responseSchema,_ad=_ac.fields,_ae=_aa,_af=[],_b0=_ac.metaFields||{},_b1=[],_b2=[],_b3=[],_b4=false,i,len,j,v,key,_b5,_b6;
var _b7=function(_b8){
var _b9=null,_ba=[],i=0;
if(_b8){
_b8=_b8.replace(/\[(['"])(.*?)\1\]/g,function(x,$1,$2){
_ba[i]=$2;
return ".@"+(i++);
}).replace(/\[(\d+)\]/g,function(x,$1){
_ba[i]=parseInt($1,10)|0;
return ".@"+(i++);
}).replace(/^\./,"");
if(!/[^\w\.\$@]/.test(_b8)){
_b9=_b8.split(".");
for(i=_b9.length-1;i>=0;--i){
if(_b9[i].charAt(0)==="@"){
_b9[i]=_ba[parseInt(_b9[i].substr(1),10)];
}
}
}else{
}
}
return _b9;
};
var _bb=function(_bc,_bd){
var v=_bd,i=0,len=_bc.length;
for(;i<len&&v;++i){
v=v[_bc[i]];
}
return v;
};
_b6=_b7(_ac.resultsList);
if(_b6){
_ae=_bb(_b6,_aa);
if(_ae===undefined){
_b4=true;
}
}else{
_b4=true;
}
if(!_ae){
_ae=[];
}
if(!_3b.isArray(_ae)){
_ae=[_ae];
}
if(!_b4){
if(_ac.fields){
var _be;
for(i=0,len=_ad.length;i<len;i++){
_be=_ad[i];
key=_be.key||_be;
_b5=((typeof _be.parser==="function")?_be.parser:DS.Parser[_be.parser+""])||_be.converter;
_b6=_b7(key);
if(_b5){
_b1[_b1.length]={key:key,parser:_b5};
}
if(_b6){
if(_b6.length>1){
_b2[_b2.length]={key:key,path:_b6};
}else{
_b3[_b3.length]={key:key,path:_b6[0]};
}
}else{
}
}
for(i=_ae.length-1;i>=0;--i){
var r=_ae[i],rec={};
for(j=_b3.length-1;j>=0;--j){
rec[_b3[j].key]=(r[_b3[j].path]!==undefined)?r[_b3[j].path]:r[j];
}
for(j=_b2.length-1;j>=0;--j){
rec[_b2[j].key]=_bb(_b2[j].path,r);
}
for(j=_b1.length-1;j>=0;--j){
var p=_b1[j].key;
rec[p]=_b1[j].parser(rec[p]);
if(rec[p]===undefined){
rec[p]=null;
}
}
_af[i]=rec;
}
}else{
_af=_ae;
}
for(key in _b0){
if(_3b.hasOwnProperty(_b0,key)){
_b6=_b7(_b0[key]);
if(_b6){
v=_bb(_b6,_aa);
_ab.meta[key]=v;
}
}
}
}else{
_ab.error=true;
}
_ab.results=_af;
}else{
_ab.error=true;
}
return _ab;
},parseHTMLTableData:function(_bf,_c0){
var _c1=false;
var _c2=_c0;
var _c3=this.responseSchema.fields;
var _c4={results:[]};
for(var i=0;i<_c2.tBodies.length;i++){
var _c5=_c2.tBodies[i];
for(var j=_c5.rows.length-1;j>-1;j--){
var _c6=_c5.rows[j];
var _c7={};
for(var k=_c3.length-1;k>-1;k--){
var _c8=_c3[k];
var key=(_3b.isValue(_c8.key))?_c8.key:_c8;
var _c9=_c6.cells[k].innerHTML;
if(!_c8.parser&&_c8.converter){
_c8.parser=_c8.converter;
}
var _ca=(typeof _c8.parser==="function")?_c8.parser:DS.Parser[_c8.parser+""];
if(_ca){
_c9=_ca.call(this,_c9);
}
if(_c9===undefined){
_c9=null;
}
_c7[key]=_c9;
}
_c4.results[j]=_c7;
}
}
if(_c1){
_c4.error=true;
}else{
}
return _c4;
}};
_3b.augmentProto(DS,_3c.EventProvider);
_3c.LocalDataSource=function(_cb,_cc){
this.dataType=DS.TYPE_LOCAL;
if(_cb){
if(YAHOO.lang.isArray(_cb)){
this.responseType=DS.TYPE_JSARRAY;
}else{
if(_cb.nodeType&&_cb.nodeType==9){
this.responseType=DS.TYPE_XML;
}else{
if(_cb.nodeName&&(_cb.nodeName.toLowerCase()=="table")){
this.responseType=DS.TYPE_HTMLTABLE;
_cb=_cb.cloneNode(true);
}else{
if(YAHOO.lang.isString(_cb)){
this.responseType=DS.TYPE_TEXT;
}else{
if(YAHOO.lang.isObject(_cb)){
this.responseType=DS.TYPE_JSON;
}
}
}
}
}
}else{
_cb=[];
this.responseType=DS.TYPE_JSARRAY;
}
this.constructor.superclass.constructor.call(this,_cb,_cc);
};
_3b.extend(_3c.LocalDataSource,DS);
_3b.augmentObject(_3c.LocalDataSource,DS);
_3c.FunctionDataSource=function(_cd,_ce){
this.dataType=DS.TYPE_JSFUNCTION;
_cd=_cd||function(){
};
this.constructor.superclass.constructor.call(this,_cd,_ce);
};
_3b.extend(_3c.FunctionDataSource,DS,{makeConnection:function(_cf,_d0,_d1){
var tId=DS._nTransactionId++;
this.fireEvent("requestEvent",{tId:tId,request:_cf,callback:_d0,caller:_d1});
var _d2=this.liveData(_cf);
if(this.responseType===DS.TYPE_UNKNOWN){
if(YAHOO.lang.isArray(_d2)){
this.responseType=DS.TYPE_JSARRAY;
}else{
if(_d2&&_d2.nodeType&&_d2.nodeType==9){
this.responseType=DS.TYPE_XML;
}else{
if(_d2&&_d2.nodeName&&(_d2.nodeName.toLowerCase()=="table")){
this.responseType=DS.TYPE_HTMLTABLE;
}else{
if(YAHOO.lang.isObject(_d2)){
this.responseType=DS.TYPE_JSON;
}else{
if(YAHOO.lang.isString(_d2)){
this.responseType=DS.TYPE_TEXT;
}
}
}
}
}
}
this.handleResponse(_cf,_d2,_d0,_d1,tId);
return tId;
}});
_3b.augmentObject(_3c.FunctionDataSource,DS);
_3c.ScriptNodeDataSource=function(_d3,_d4){
this.dataType=DS.TYPE_SCRIPTNODE;
_d3=_d3||"";
this.constructor.superclass.constructor.call(this,_d3,_d4);
};
_3b.extend(_3c.ScriptNodeDataSource,DS,{getUtility:_3c.Get,asyncMode:"allowAll",scriptCallbackParam:"callback",generateRequestCallback:function(id){
return "&"+this.scriptCallbackParam+"=YAHOO.util.ScriptNodeDataSource.callbacks["+id+"]";
},makeConnection:function(_d5,_d6,_d7){
var tId=DS._nTransactionId++;
this.fireEvent("requestEvent",{tId:tId,request:_d5,callback:_d6,caller:_d7});
if(_3c.ScriptNodeDataSource._nPending===0){
_3c.ScriptNodeDataSource.callbacks=[];
_3c.ScriptNodeDataSource._nId=0;
}
var id=_3c.ScriptNodeDataSource._nId;
_3c.ScriptNodeDataSource._nId++;
var _d8=this;
_3c.ScriptNodeDataSource.callbacks[id]=function(_d9){
if((_d8.asyncMode!=="ignoreStaleResponses")||(id===_3c.ScriptNodeDataSource.callbacks.length-1)){
if(_d8.responseType===DS.TYPE_UNKNOWN){
if(YAHOO.lang.isArray(_d9)){
_d8.responseType=DS.TYPE_JSARRAY;
}else{
if(_d9.nodeType&&_d9.nodeType==9){
_d8.responseType=DS.TYPE_XML;
}else{
if(_d9.nodeName&&(_d9.nodeName.toLowerCase()=="table")){
_d8.responseType=DS.TYPE_HTMLTABLE;
}else{
if(YAHOO.lang.isObject(_d9)){
_d8.responseType=DS.TYPE_JSON;
}else{
if(YAHOO.lang.isString(_d9)){
_d8.responseType=DS.TYPE_TEXT;
}
}
}
}
}
}
_d8.handleResponse(_d5,_d9,_d6,_d7,tId);
}else{
}
delete _3c.ScriptNodeDataSource.callbacks[id];
};
_3c.ScriptNodeDataSource._nPending++;
var _da=this.liveData+_d5+this.generateRequestCallback(id);
this.getUtility.script(_da,{autopurge:true,onsuccess:_3c.ScriptNodeDataSource._bumpPendingDown,onfail:_3c.ScriptNodeDataSource._bumpPendingDown});
return tId;
}});
_3b.augmentObject(_3c.ScriptNodeDataSource,DS);
_3b.augmentObject(_3c.ScriptNodeDataSource,{_nId:0,_nPending:0,callbacks:[]});
_3c.XHRDataSource=function(_db,_dc){
this.dataType=DS.TYPE_XHR;
this.connMgr=this.connMgr||_3c.Connect;
_db=_db||"";
this.constructor.superclass.constructor.call(this,_db,_dc);
};
_3b.extend(_3c.XHRDataSource,DS,{connMgr:null,connXhrMode:"allowAll",connMethodPost:false,connTimeout:0,makeConnection:function(_dd,_de,_df){
var _e0=null;
var tId=DS._nTransactionId++;
this.fireEvent("requestEvent",{tId:tId,request:_dd,callback:_de,caller:_df});
var _e1=this;
var _e2=this.connMgr;
var _e3=this._oQueue;
var _e4=function(_e5){
if(_e5&&(this.asyncMode=="ignoreStaleResponses")&&(_e5.tId!=_e3.conn.tId)){
return null;
}else{
if(!_e5){
this.fireEvent("dataErrorEvent",{request:_dd,callback:_de,caller:_df,message:DS.ERROR_DATANULL});
DS.issueCallback(_de,[_dd,{error:true}],true,_df);
return null;
}else{
if(this.responseType===DS.TYPE_UNKNOWN){
var _e6=(_e5.getResponseHeader)?_e5.getResponseHeader["Content-Type"]:null;
if(_e6){
if(_e6.indexOf("text/xml")>-1){
this.responseType=DS.TYPE_XML;
}else{
if(_e6.indexOf("application/json")>-1){
this.responseType=DS.TYPE_JSON;
}else{
if(_e6.indexOf("text/plain")>-1){
this.responseType=DS.TYPE_TEXT;
}
}
}
}
}
this.handleResponse(_dd,_e5,_de,_df,tId);
}
}
};
var _e7=function(_e8){
this.fireEvent("dataErrorEvent",{request:_dd,callback:_de,caller:_df,message:DS.ERROR_DATAINVALID});
if(_3b.isString(this.liveData)&&_3b.isString(_dd)&&(this.liveData.lastIndexOf("?")!==this.liveData.length-1)&&(_dd.indexOf("?")!==0)){
}
_e8=_e8||{};
_e8.error=true;
DS.issueCallback(_de,[_dd,_e8],true,_df);
return null;
};
var _e9={success:_e4,failure:_e7,scope:this};
if(_3b.isNumber(this.connTimeout)){
_e9.timeout=this.connTimeout;
}
if(this.connXhrMode=="cancelStaleRequests"){
if(_e3.conn){
if(_e2.abort){
_e2.abort(_e3.conn);
_e3.conn=null;
}else{
}
}
}
if(_e2&&_e2.asyncRequest){
var _ea=this.liveData;
var _eb=this.connMethodPost;
var _ec=(_eb)?"POST":"GET";
var _ed=(_eb||!_3b.isValue(_dd))?_ea:_ea+_dd;
var _ee=(_eb)?_dd:null;
if(this.connXhrMode!="queueRequests"){
_e3.conn=_e2.asyncRequest(_ec,_ed,_e9,_ee);
}else{
if(_e3.conn){
var _ef=_e3.requests;
_ef.push({request:_dd,callback:_e9});
if(!_e3.interval){
_e3.interval=setInterval(function(){
if(_e2.isCallInProgress(_e3.conn)){
return;
}else{
if(_ef.length>0){
_ed=(_eb||!_3b.isValue(_ef[0].request))?_ea:_ea+_ef[0].request;
_ee=(_eb)?_ef[0].request:null;
_e3.conn=_e2.asyncRequest(_ec,_ed,_ef[0].callback,_ee);
_ef.shift();
}else{
clearInterval(_e3.interval);
_e3.interval=null;
}
}
},50);
}
}else{
_e3.conn=_e2.asyncRequest(_ec,_ed,_e9,_ee);
}
}
}else{
DS.issueCallback(_de,[_dd,{error:true}],true,_df);
}
return tId;
}});
_3b.augmentObject(_3c.XHRDataSource,DS);
_3c.DataSource=function(_f0,_f1){
_f1=_f1||{};
var _f2=_f1.dataType;
if(_f2){
if(_f2==DS.TYPE_LOCAL){
_3b.augmentObject(_3c.DataSource,_3c.LocalDataSource);
return new _3c.LocalDataSource(_f0,_f1);
}else{
if(_f2==DS.TYPE_XHR){
_3b.augmentObject(_3c.DataSource,_3c.XHRDataSource);
return new _3c.XHRDataSource(_f0,_f1);
}else{
if(_f2==DS.TYPE_SCRIPTNODE){
_3b.augmentObject(_3c.DataSource,_3c.ScriptNodeDataSource);
return new _3c.ScriptNodeDataSource(_f0,_f1);
}else{
if(_f2==DS.TYPE_JSFUNCTION){
_3b.augmentObject(_3c.DataSource,_3c.FunctionDataSource);
return new _3c.FunctionDataSource(_f0,_f1);
}
}
}
}
}
if(YAHOO.lang.isString(_f0)){
_3b.augmentObject(_3c.DataSource,_3c.XHRDataSource);
return new _3c.XHRDataSource(_f0,_f1);
}else{
if(YAHOO.lang.isFunction(_f0)){
_3b.augmentObject(_3c.DataSource,_3c.FunctionDataSource);
return new _3c.FunctionDataSource(_f0,_f1);
}else{
_3b.augmentObject(_3c.DataSource,_3c.LocalDataSource);
return new _3c.LocalDataSource(_f0,_f1);
}
}
};
_3b.augmentObject(_3c.DataSource,DS);
})();
YAHOO.util.Number={format:function(B,F){
F=F||{};
if(!YAHOO.lang.isNumber(B)){
B*=1;
}
if(YAHOO.lang.isNumber(B)){
var D=(B<0);
var J=B+"";
var G=(F.decimalSeparator)?F.decimalSeparator:".";
var H;
if(YAHOO.lang.isNumber(F.decimalPlaces)){
var I=F.decimalPlaces;
var C=Math.pow(10,I);
J=Math.round(B*C)/C+"";
H=J.lastIndexOf(".");
if(I>0){
if(H<0){
J+=G;
H=J.length-1;
}else{
if(G!=="."){
J=J.replace(".",G);
}
}
while((J.length-1-H)<I){
J+="0";
}
}
}
if(F.thousandsSeparator){
var L=F.thousandsSeparator;
H=J.lastIndexOf(G);
H=(H>-1)?H:J.length;
var K=J.substring(H);
var A=-1;
for(var E=H;E>0;E--){
A++;
if((A%3===0)&&(E!==H)&&(!D||(E>1))){
K=L+K;
}
K=J.charAt(E-1)+K;
}
J=K;
}
J=(F.prefix)?F.prefix+J:J;
J=(F.suffix)?J+F.suffix:J;
return J;
}else{
return B;
}
}};
(function(){
var A=function(C,E,D){
if(typeof D==="undefined"){
D=10;
}
for(;parseInt(C,10)<D&&D>1;D/=10){
C=E.toString()+C;
}
return C.toString();
};
var B={formats:{a:function(D,C){
return C.a[D.getDay()];
},A:function(D,C){
return C.A[D.getDay()];
},b:function(D,C){
return C.b[D.getMonth()];
},B:function(D,C){
return C.B[D.getMonth()];
},C:function(C){
return A(parseInt(C.getFullYear()/100,10),0);
},d:["getDate","0"],e:["getDate"," "],g:function(C){
return A(parseInt(B.formats.G(C)%100,10),0);
},G:function(E){
var F=E.getFullYear();
var D=parseInt(B.formats.V(E),10);
var C=parseInt(B.formats.W(E),10);
if(C>D){
F++;
}else{
if(C===0&&D>=52){
F--;
}
}
return F;
},H:["getHours","0"],I:function(D){
var C=D.getHours()%12;
return A(C===0?12:C,0);
},j:function(G){
var F=new Date(""+G.getFullYear()+"/1/1 GMT");
var D=new Date(""+G.getFullYear()+"/"+(G.getMonth()+1)+"/"+G.getDate()+" GMT");
var C=D-F;
var E=parseInt(C/60000/60/24,10)+1;
return A(E,0,100);
},k:["getHours"," "],l:function(D){
var C=D.getHours()%12;
return A(C===0?12:C," ");
},m:function(C){
return A(C.getMonth()+1,0);
},M:["getMinutes","0"],p:function(D,C){
return C.p[D.getHours()>=12?1:0];
},P:function(D,C){
return C.P[D.getHours()>=12?1:0];
},s:function(D,C){
return parseInt(D.getTime()/1000,10);
},S:["getSeconds","0"],u:function(C){
var D=C.getDay();
return D===0?7:D;
},U:function(F){
var C=parseInt(B.formats.j(F),10);
var E=6-F.getDay();
var D=parseInt((C+E)/7,10);
return A(D,0);
},V:function(F){
var E=parseInt(B.formats.W(F),10);
var C=(new Date(""+F.getFullYear()+"/1/1")).getDay();
var D=E+(C>4||C<=1?0:1);
if(D===53&&(new Date(""+F.getFullYear()+"/12/31")).getDay()<4){
D=1;
}else{
if(D===0){
D=B.formats.V(new Date(""+(F.getFullYear()-1)+"/12/31"));
}
}
return A(D,0);
},w:"getDay",W:function(F){
var C=parseInt(B.formats.j(F),10);
var E=7-B.formats.u(F);
var D=parseInt((C+E)/7,10);
return A(D,0,10);
},y:function(C){
return A(C.getFullYear()%100,0);
},Y:"getFullYear",z:function(E){
var D=E.getTimezoneOffset();
var C=A(parseInt(Math.abs(D/60),10),0);
var F=A(Math.abs(D%60),0);
return (D>0?"-":"+")+C+F;
},Z:function(C){
var D=C.toString().replace(/^.*:\d\d( GMT[+-]\d+)? \(?([A-Za-z ]+)\)?\d*$/,"$2").replace(/[a-z ]/g,"");
if(D.length>4){
D=B.formats.z(C);
}
return D;
},"%":function(C){
return "%";
}},aggregates:{c:"locale",D:"%m/%d/%y",F:"%Y-%m-%d",h:"%b",n:"\n",r:"locale",R:"%H:%M",t:"\t",T:"%H:%M:%S",x:"locale",X:"locale"},format:function(G,F,D){
F=F||{};
if(!(G instanceof Date)){
return YAHOO.lang.isValue(G)?G:"";
}
var H=F.format||"%m/%d/%Y";
if(H==="YYYY/MM/DD"){
H="%Y/%m/%d";
}else{
if(H==="DD/MM/YYYY"){
H="%d/%m/%Y";
}else{
if(H==="MM/DD/YYYY"){
H="%m/%d/%Y";
}
}
}
D=D||"en";
if(!(D in YAHOO.util.DateLocale)){
if(D.replace(/-[a-zA-Z]+$/,"") in YAHOO.util.DateLocale){
D=D.replace(/-[a-zA-Z]+$/,"");
}else{
D="en";
}
}
var J=YAHOO.util.DateLocale[D];
var C=function(L,K){
var M=B.aggregates[K];
return (M==="locale"?J[K]:M);
};
var E=function(L,K){
var M=B.formats[K];
if(typeof M==="string"){
return G[M]();
}else{
if(typeof M==="function"){
return M.call(G,G,J);
}else{
if(typeof M==="object"&&typeof M[0]==="string"){
return A(G[M[0]](),M[1]);
}else{
return K;
}
}
}
};
while(H.match(/%[cDFhnrRtTxX]/)){
H=H.replace(/%([cDFhnrRtTxX])/g,C);
}
var I=H.replace(/%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g,E);
C=E=undefined;
return I;
}};
YAHOO.namespace("YAHOO.util");
YAHOO.util.Date=B;
YAHOO.util.DateLocale={a:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],B:["January","February","March","April","May","June","July","August","September","October","November","December"],c:"%a %d %b %Y %T %Z",p:["AM","PM"],P:["am","pm"],r:"%I:%M:%S %p",x:"%d/%m/%y",X:"%T"};
YAHOO.util.DateLocale["en"]=YAHOO.lang.merge(YAHOO.util.DateLocale,{});
YAHOO.util.DateLocale["en-US"]=YAHOO.lang.merge(YAHOO.util.DateLocale["en"],{c:"%a %d %b %Y %I:%M:%S %p %Z",x:"%m/%d/%Y",X:"%I:%M:%S %p"});
YAHOO.util.DateLocale["en-GB"]=YAHOO.lang.merge(YAHOO.util.DateLocale["en"],{r:"%l:%M:%S %P %Z"});
YAHOO.util.DateLocale["en-AU"]=YAHOO.lang.merge(YAHOO.util.DateLocale["en"]);
})();
YAHOO.register("datasource",YAHOO.util.DataSource,{version:"2.6.0",build:"1321"});
YAHOO.widget.DS_JSArray=YAHOO.util.LocalDataSource;
YAHOO.widget.DS_JSFunction=YAHOO.util.FunctionDataSource;
YAHOO.widget.DS_XHR=function(B,A,D){
var C=new YAHOO.util.XHRDataSource(B,D);
C._aDeprecatedSchema=A;
return C;
};
YAHOO.widget.DS_ScriptNode=function(B,A,D){
var C=new YAHOO.util.ScriptNodeDataSource(B,D);
C._aDeprecatedSchema=A;
return C;
};
YAHOO.widget.DS_XHR.TYPE_JSON=YAHOO.util.DataSourceBase.TYPE_JSON;
YAHOO.widget.DS_XHR.TYPE_XML=YAHOO.util.DataSourceBase.TYPE_XML;
YAHOO.widget.DS_XHR.TYPE_FLAT=YAHOO.util.DataSourceBase.TYPE_TEXT;
YAHOO.widget.AutoComplete=function(G,B,J,C){
if(G&&B&&J){
if(J instanceof YAHOO.util.DataSourceBase){
this.dataSource=J;
}else{
return;
}
this.key=0;
var D=J.responseSchema;
if(J._aDeprecatedSchema){
var K=J._aDeprecatedSchema;
if(YAHOO.lang.isArray(K)){
if((J.responseType===YAHOO.util.DataSourceBase.TYPE_JSON)||(J.responseType===YAHOO.util.DataSourceBase.TYPE_UNKNOWN)){
D.resultsList=K[0];
this.key=K[1];
D.fields=(K.length<3)?null:K.slice(1);
}else{
if(J.responseType===YAHOO.util.DataSourceBase.TYPE_XML){
D.resultNode=K[0];
this.key=K[1];
D.fields=K.slice(1);
}else{
if(J.responseType===YAHOO.util.DataSourceBase.TYPE_TEXT){
D.recordDelim=K[0];
D.fieldDelim=K[1];
}
}
}
J.responseSchema=D;
}
}
if(YAHOO.util.Dom.inDocument(G)){
if(YAHOO.lang.isString(G)){
this._sName="instance"+YAHOO.widget.AutoComplete._nIndex+" "+G;
this._elTextbox=document.getElementById(G);
}else{
this._sName=(G.id)?"instance"+YAHOO.widget.AutoComplete._nIndex+" "+G.id:"instance"+YAHOO.widget.AutoComplete._nIndex;
this._elTextbox=G;
}
YAHOO.util.Dom.addClass(this._elTextbox,"yui-ac-input");
}else{
return;
}
if(YAHOO.util.Dom.inDocument(B)){
if(YAHOO.lang.isString(B)){
this._elContainer=document.getElementById(B);
}else{
this._elContainer=B;
}
if(this._elContainer.style.display=="none"){
}
var E=this._elContainer.parentNode;
var A=E.tagName.toLowerCase();
if(A=="div"){
YAHOO.util.Dom.addClass(E,"yui-ac");
}else{
}
}else{
return;
}
if(this.dataSource.dataType===YAHOO.util.DataSourceBase.TYPE_LOCAL){
this.applyLocalFilter=true;
}
if(C&&(C.constructor==Object)){
for(var I in C){
if(I){
this[I]=C[I];
}
}
}
this._initContainerEl();
this._initProps();
this._initListEl();
this._initContainerHelperEls();
var H=this;
var F=this._elTextbox;
YAHOO.util.Event.addListener(F,"keyup",H._onTextboxKeyUp,H);
YAHOO.util.Event.addListener(F,"keydown",H._onTextboxKeyDown,H);
YAHOO.util.Event.addListener(F,"focus",H._onTextboxFocus,H);
YAHOO.util.Event.addListener(F,"blur",H._onTextboxBlur,H);
YAHOO.util.Event.addListener(B,"mouseover",H._onContainerMouseover,H);
YAHOO.util.Event.addListener(B,"mouseout",H._onContainerMouseout,H);
YAHOO.util.Event.addListener(B,"click",H._onContainerClick,H);
YAHOO.util.Event.addListener(B,"scroll",H._onContainerScroll,H);
YAHOO.util.Event.addListener(B,"resize",H._onContainerResize,H);
YAHOO.util.Event.addListener(F,"keypress",H._onTextboxKeyPress,H);
YAHOO.util.Event.addListener(window,"unload",H._onWindowUnload,H);
this.textboxFocusEvent=new YAHOO.util.CustomEvent("textboxFocus",this);
this.textboxKeyEvent=new YAHOO.util.CustomEvent("textboxKey",this);
this.dataRequestEvent=new YAHOO.util.CustomEvent("dataRequest",this);
this.dataReturnEvent=new YAHOO.util.CustomEvent("dataReturn",this);
this.dataErrorEvent=new YAHOO.util.CustomEvent("dataError",this);
this.containerPopulateEvent=new YAHOO.util.CustomEvent("containerPopulate",this);
this.containerExpandEvent=new YAHOO.util.CustomEvent("containerExpand",this);
this.typeAheadEvent=new YAHOO.util.CustomEvent("typeAhead",this);
this.itemMouseOverEvent=new YAHOO.util.CustomEvent("itemMouseOver",this);
this.itemMouseOutEvent=new YAHOO.util.CustomEvent("itemMouseOut",this);
this.itemArrowToEvent=new YAHOO.util.CustomEvent("itemArrowTo",this);
this.itemArrowFromEvent=new YAHOO.util.CustomEvent("itemArrowFrom",this);
this.itemSelectEvent=new YAHOO.util.CustomEvent("itemSelect",this);
this.unmatchedItemSelectEvent=new YAHOO.util.CustomEvent("unmatchedItemSelect",this);
this.selectionEnforceEvent=new YAHOO.util.CustomEvent("selectionEnforce",this);
this.containerCollapseEvent=new YAHOO.util.CustomEvent("containerCollapse",this);
this.textboxBlurEvent=new YAHOO.util.CustomEvent("textboxBlur",this);
this.textboxChangeEvent=new YAHOO.util.CustomEvent("textboxChange",this);
F.setAttribute("autocomplete","off");
YAHOO.widget.AutoComplete._nIndex++;
}else{
}
};
YAHOO.widget.AutoComplete.prototype.dataSource=null;
YAHOO.widget.AutoComplete.prototype.applyLocalFilter=null;
YAHOO.widget.AutoComplete.prototype.queryMatchCase=false;
YAHOO.widget.AutoComplete.prototype.queryMatchContains=false;
YAHOO.widget.AutoComplete.prototype.queryMatchSubset=false;
YAHOO.widget.AutoComplete.prototype.minQueryLength=1;
YAHOO.widget.AutoComplete.prototype.maxResultsDisplayed=10;
YAHOO.widget.AutoComplete.prototype.queryDelay=0.2;
YAHOO.widget.AutoComplete.prototype.typeAheadDelay=0.5;
YAHOO.widget.AutoComplete.prototype.queryInterval=500;
YAHOO.widget.AutoComplete.prototype.highlightClassName="yui-ac-highlight";
YAHOO.widget.AutoComplete.prototype.prehighlightClassName=null;
YAHOO.widget.AutoComplete.prototype.delimChar=null;
YAHOO.widget.AutoComplete.prototype.autoHighlight=true;
YAHOO.widget.AutoComplete.prototype.typeAhead=false;
YAHOO.widget.AutoComplete.prototype.animHoriz=false;
YAHOO.widget.AutoComplete.prototype.animVert=true;
YAHOO.widget.AutoComplete.prototype.animSpeed=0.3;
YAHOO.widget.AutoComplete.prototype.forceSelection=false;
YAHOO.widget.AutoComplete.prototype.allowBrowserAutocomplete=true;
YAHOO.widget.AutoComplete.prototype.alwaysShowContainer=false;
YAHOO.widget.AutoComplete.prototype.useIFrame=false;
YAHOO.widget.AutoComplete.prototype.useShadow=false;
YAHOO.widget.AutoComplete.prototype.suppressInputUpdate=false;
YAHOO.widget.AutoComplete.prototype.resultTypeList=true;
YAHOO.widget.AutoComplete.prototype.queryQuestionMark=true;
YAHOO.widget.AutoComplete.prototype.toString=function(){
return "AutoComplete "+this._sName;
};
YAHOO.widget.AutoComplete.prototype.getInputEl=function(){
return this._elTextbox;
};
YAHOO.widget.AutoComplete.prototype.getContainerEl=function(){
return this._elContainer;
};
YAHOO.widget.AutoComplete.prototype.isFocused=function(){
return (this._bFocused===null)?false:this._bFocused;
};
YAHOO.widget.AutoComplete.prototype.isContainerOpen=function(){
return this._bContainerOpen;
};
YAHOO.widget.AutoComplete.prototype.getListEl=function(){
return this._elList;
};
YAHOO.widget.AutoComplete.prototype.getListItemMatch=function(A){
if(A._sResultMatch){
return A._sResultMatch;
}else{
return null;
}
};
YAHOO.widget.AutoComplete.prototype.getListItemData=function(A){
if(A._oResultData){
return A._oResultData;
}else{
return null;
}
};
YAHOO.widget.AutoComplete.prototype.getListItemIndex=function(A){
if(YAHOO.lang.isNumber(A._nItemIndex)){
return A._nItemIndex;
}else{
return null;
}
};
YAHOO.widget.AutoComplete.prototype.setHeader=function(B){
if(this._elHeader){
var A=this._elHeader;
if(B){
A.innerHTML=B;
A.style.display="block";
}else{
A.innerHTML="";
A.style.display="none";
}
}
};
YAHOO.widget.AutoComplete.prototype.setFooter=function(B){
if(this._elFooter){
var A=this._elFooter;
if(B){
A.innerHTML=B;
A.style.display="block";
}else{
A.innerHTML="";
A.style.display="none";
}
}
};
YAHOO.widget.AutoComplete.prototype.setBody=function(A){
if(this._elBody){
var B=this._elBody;
YAHOO.util.Event.purgeElement(B,true);
if(A){
B.innerHTML=A;
B.style.display="block";
}else{
B.innerHTML="";
B.style.display="none";
}
this._elList=null;
}
};
YAHOO.widget.AutoComplete.prototype.generateRequest=function(B){
var A=this.dataSource.dataType;
if(A===YAHOO.util.DataSourceBase.TYPE_XHR){
if(!this.dataSource.connMethodPost){
B=(this.queryQuestionMark?"?":"")+(this.dataSource.scriptQueryParam||"query")+"="+B+(this.dataSource.scriptQueryAppend?("&"+this.dataSource.scriptQueryAppend):"");
}else{
B=(this.dataSource.scriptQueryParam||"query")+"="+B+(this.dataSource.scriptQueryAppend?("&"+this.dataSource.scriptQueryAppend):"");
}
}else{
if(A===YAHOO.util.DataSourceBase.TYPE_SCRIPTNODE){
B="&"+(this.dataSource.scriptQueryParam||"query")+"="+B+(this.dataSource.scriptQueryAppend?("&"+this.dataSource.scriptQueryAppend):"");
}
}
return B;
};
YAHOO.widget.AutoComplete.prototype.sendQuery=function(B){
var A=(this.delimChar)?this._elTextbox.value+B:B;
this._sendQuery(A);
};
YAHOO.widget.AutoComplete.prototype.collapseContainer=function(){
this._toggleContainer(false);
};
YAHOO.widget.AutoComplete.prototype.getSubsetMatches=function(E){
var D,C,A;
for(var B=E.length;B>=this.minQueryLength;B--){
A=this.generateRequest(E.substr(0,B));
this.dataRequestEvent.fire(this,D,A);
C=this.dataSource.getCachedResponse(A);
if(C){
return this.filterResults.apply(this.dataSource,[E,C,C,{scope:this}]);
}
}
return null;
};
YAHOO.widget.AutoComplete.prototype.preparseRawResponse=function(C,B,A){
var D=((this.responseStripAfter!=="")&&(B.indexOf))?B.indexOf(this.responseStripAfter):-1;
if(D!=-1){
B=B.substring(0,D);
}
return B;
};
YAHOO.widget.AutoComplete.prototype.filterResults=function(J,L,P,K){
if(J&&J!==""){
P=YAHOO.widget.AutoComplete._cloneObject(P);
var H=K.scope,O=this,B=P.results,M=[],D=false,I=(O.queryMatchCase||H.queryMatchCase),A=(O.queryMatchContains||H.queryMatchContains);
for(var C=B.length-1;C>=0;C--){
var F=B[C];
var E=null;
if(YAHOO.lang.isString(F)){
E=F;
}else{
if(YAHOO.lang.isArray(F)){
E=F[0];
}else{
if(this.responseSchema.fields){
var N=this.responseSchema.fields[0].key||this.responseSchema.fields[0];
E=F[N];
}else{
if(this.key){
E=F[this.key];
}
}
}
}
if(YAHOO.lang.isString(E)){
var G=(I)?E.indexOf(decodeURIComponent(J)):E.toLowerCase().indexOf(decodeURIComponent(J).toLowerCase());
if((!A&&(G===0))||(A&&(G>-1))){
M.unshift(F);
}
}
}
P.results=M;
}else{
}
return P;
};
YAHOO.widget.AutoComplete.prototype.handleResponse=function(C,A,B){
if((this instanceof YAHOO.widget.AutoComplete)&&this._sName){
this._populateList(C,A,B);
}
};
YAHOO.widget.AutoComplete.prototype.doBeforeLoadData=function(C,A,B){
return true;
};
YAHOO.widget.AutoComplete.prototype.formatResult=function(B,D,A){
var C=(A)?A:"";
return C;
};
YAHOO.widget.AutoComplete.prototype.doBeforeExpandContainer=function(D,A,C,B){
return true;
};
YAHOO.widget.AutoComplete.prototype.destroy=function(){
var B=this.toString();
var A=this._elTextbox;
var D=this._elContainer;
this.textboxFocusEvent.unsubscribeAll();
this.textboxKeyEvent.unsubscribeAll();
this.dataRequestEvent.unsubscribeAll();
this.dataReturnEvent.unsubscribeAll();
this.dataErrorEvent.unsubscribeAll();
this.containerPopulateEvent.unsubscribeAll();
this.containerExpandEvent.unsubscribeAll();
this.typeAheadEvent.unsubscribeAll();
this.itemMouseOverEvent.unsubscribeAll();
this.itemMouseOutEvent.unsubscribeAll();
this.itemArrowToEvent.unsubscribeAll();
this.itemArrowFromEvent.unsubscribeAll();
this.itemSelectEvent.unsubscribeAll();
this.unmatchedItemSelectEvent.unsubscribeAll();
this.selectionEnforceEvent.unsubscribeAll();
this.containerCollapseEvent.unsubscribeAll();
this.textboxBlurEvent.unsubscribeAll();
this.textboxChangeEvent.unsubscribeAll();
YAHOO.util.Event.purgeElement(A,true);
YAHOO.util.Event.purgeElement(D,true);
D.innerHTML="";
for(var C in this){
if(YAHOO.lang.hasOwnProperty(this,C)){
this[C]=null;
}
}
};
YAHOO.widget.AutoComplete.prototype.textboxFocusEvent=null;
YAHOO.widget.AutoComplete.prototype.textboxKeyEvent=null;
YAHOO.widget.AutoComplete.prototype.dataRequestEvent=null;
YAHOO.widget.AutoComplete.prototype.dataReturnEvent=null;
YAHOO.widget.AutoComplete.prototype.dataErrorEvent=null;
YAHOO.widget.AutoComplete.prototype.containerPopulateEvent=null;
YAHOO.widget.AutoComplete.prototype.containerExpandEvent=null;
YAHOO.widget.AutoComplete.prototype.typeAheadEvent=null;
YAHOO.widget.AutoComplete.prototype.itemMouseOverEvent=null;
YAHOO.widget.AutoComplete.prototype.itemMouseOutEvent=null;
YAHOO.widget.AutoComplete.prototype.itemArrowToEvent=null;
YAHOO.widget.AutoComplete.prototype.itemArrowFromEvent=null;
YAHOO.widget.AutoComplete.prototype.itemSelectEvent=null;
YAHOO.widget.AutoComplete.prototype.unmatchedItemSelectEvent=null;
YAHOO.widget.AutoComplete.prototype.selectionEnforceEvent=null;
YAHOO.widget.AutoComplete.prototype.containerCollapseEvent=null;
YAHOO.widget.AutoComplete.prototype.textboxBlurEvent=null;
YAHOO.widget.AutoComplete.prototype.textboxChangeEvent=null;
YAHOO.widget.AutoComplete._nIndex=0;
YAHOO.widget.AutoComplete.prototype._sName=null;
YAHOO.widget.AutoComplete.prototype._elTextbox=null;
YAHOO.widget.AutoComplete.prototype._elContainer=null;
YAHOO.widget.AutoComplete.prototype._elContent=null;
YAHOO.widget.AutoComplete.prototype._elHeader=null;
YAHOO.widget.AutoComplete.prototype._elBody=null;
YAHOO.widget.AutoComplete.prototype._elFooter=null;
YAHOO.widget.AutoComplete.prototype._elShadow=null;
YAHOO.widget.AutoComplete.prototype._elIFrame=null;
YAHOO.widget.AutoComplete.prototype._bFocused=null;
YAHOO.widget.AutoComplete.prototype._oAnim=null;
YAHOO.widget.AutoComplete.prototype._bContainerOpen=false;
YAHOO.widget.AutoComplete.prototype._bOverContainer=false;
YAHOO.widget.AutoComplete.prototype._elList=null;
YAHOO.widget.AutoComplete.prototype._nDisplayedItems=0;
YAHOO.widget.AutoComplete.prototype._sCurQuery=null;
YAHOO.widget.AutoComplete.prototype._sPastSelections="";
YAHOO.widget.AutoComplete.prototype._sInitInputValue=null;
YAHOO.widget.AutoComplete.prototype._elCurListItem=null;
YAHOO.widget.AutoComplete.prototype._bItemSelected=false;
YAHOO.widget.AutoComplete.prototype._nKeyCode=null;
YAHOO.widget.AutoComplete.prototype._nDelayID=-1;
YAHOO.widget.AutoComplete.prototype._nTypeAheadDelayID=-1;
YAHOO.widget.AutoComplete.prototype._iFrameSrc="javascript:false;";
YAHOO.widget.AutoComplete.prototype._queryInterval=null;
YAHOO.widget.AutoComplete.prototype._sLastTextboxValue=null;
YAHOO.widget.AutoComplete.prototype._initProps=function(){
var B=this.minQueryLength;
if(!YAHOO.lang.isNumber(B)){
this.minQueryLength=1;
}
var E=this.maxResultsDisplayed;
if(!YAHOO.lang.isNumber(E)||(E<1)){
this.maxResultsDisplayed=10;
}
var F=this.queryDelay;
if(!YAHOO.lang.isNumber(F)||(F<0)){
this.queryDelay=0.2;
}
var C=this.typeAheadDelay;
if(!YAHOO.lang.isNumber(C)||(C<0)){
this.typeAheadDelay=0.2;
}
var A=this.delimChar;
if(YAHOO.lang.isString(A)&&(A.length>0)){
this.delimChar=[A];
}else{
if(!YAHOO.lang.isArray(A)){
this.delimChar=null;
}
}
var D=this.animSpeed;
if((this.animHoriz||this.animVert)&&YAHOO.util.Anim){
if(!YAHOO.lang.isNumber(D)||(D<0)){
this.animSpeed=0.3;
}
if(!this._oAnim){
this._oAnim=new YAHOO.util.Anim(this._elContent,{},this.animSpeed);
}else{
this._oAnim.duration=this.animSpeed;
}
}
if(this.forceSelection&&A){
}
};
YAHOO.widget.AutoComplete.prototype._initContainerHelperEls=function(){
if(this.useShadow&&!this._elShadow){
var A=document.createElement("div");
A.className="yui-ac-shadow";
A.style.width=0;
A.style.height=0;
this._elShadow=this._elContainer.appendChild(A);
}
if(this.useIFrame&&!this._elIFrame){
var B=document.createElement("iframe");
B.src=this._iFrameSrc;
B.frameBorder=0;
B.scrolling="no";
B.style.position="absolute";
B.style.width=0;
B.style.height=0;
B.tabIndex=-1;
B.style.padding=0;
this._elIFrame=this._elContainer.appendChild(B);
}
};
YAHOO.widget.AutoComplete.prototype._initContainerEl=function(){
YAHOO.util.Dom.addClass(this._elContainer,"yui-ac-container");
if(!this._elContent){
var C=document.createElement("div");
C.className="yui-ac-content";
C.style.display="none";
this._elContent=this._elContainer.appendChild(C);
var B=document.createElement("div");
B.className="yui-ac-hd";
B.style.display="none";
this._elHeader=this._elContent.appendChild(B);
var D=document.createElement("div");
D.className="yui-ac-bd";
this._elBody=this._elContent.appendChild(D);
var A=document.createElement("div");
A.className="yui-ac-ft";
A.style.display="none";
this._elFooter=this._elContent.appendChild(A);
}else{
}
};
YAHOO.widget.AutoComplete.prototype._initListEl=function(){
var C=this.maxResultsDisplayed;
var A=this._elList||document.createElement("ul");
var B;
while(A.childNodes.length<C){
B=document.createElement("li");
B.style.display="none";
B._nItemIndex=A.childNodes.length;
A.appendChild(B);
}
if(!this._elList){
var D=this._elBody;
YAHOO.util.Event.purgeElement(D,true);
D.innerHTML="";
this._elList=D.appendChild(A);
}
};
YAHOO.widget.AutoComplete.prototype._enableIntervalDetection=function(){
var A=this;
if(!A._queryInterval&&A.queryInterval){
A._queryInterval=setInterval(function(){
A._onInterval();
},A.queryInterval);
}
};
YAHOO.widget.AutoComplete.prototype._onInterval=function(){
var A=this._elTextbox.value;
var B=this._sLastTextboxValue;
if(A!=B){
this._sLastTextboxValue=A;
this._sendQuery(A);
}
};
YAHOO.widget.AutoComplete.prototype._clearInterval=function(){
if(this._queryInterval){
clearInterval(this._queryInterval);
this._queryInterval=null;
}
};
YAHOO.widget.AutoComplete.prototype._isIgnoreKey=function(A){
if((A==9)||(A==13)||(A==16)||(A==17)||(A>=18&&A<=20)||(A==27)||(A>=33&&A<=35)||(A>=36&&A<=40)||(A>=44&&A<=45)||(A==229)){
return true;
}
return false;
};
YAHOO.widget.AutoComplete.prototype._sendQuery=function(G){
if(this.minQueryLength<0){
this._toggleContainer(false);
return;
}
var I=(this.delimChar)?this.delimChar:null;
if(I){
var B=-1;
for(var F=I.length-1;F>=0;F--){
var D=G.lastIndexOf(I[F]);
if(D>B){
B=D;
}
}
if(I[F]==" "){
for(var E=I.length-1;E>=0;E--){
if(G[B-1]==I[E]){
B--;
break;
}
}
}
if(B>-1){
var H=B+1;
while(G.charAt(H)==" "){
H+=1;
}
this._sPastSelections=G.substring(0,H);
G=G.substr(H);
}else{
this._sPastSelections="";
}
}
if((G&&(G.length<this.minQueryLength))||(!G&&this.minQueryLength>0)){
if(this._nDelayID!=-1){
clearTimeout(this._nDelayID);
}
this._toggleContainer(false);
return;
}
G=encodeURIComponent(G);
this._nDelayID=-1;
if(this.dataSource.queryMatchSubset||this.queryMatchSubset){
var A=this.getSubsetMatches(G);
if(A){
this.handleResponse(G,A,{query:G});
return;
}
}
if(this.responseStripAfter){
this.dataSource.doBeforeParseData=this.preparseRawResponse;
}
if(this.applyLocalFilter){
this.dataSource.doBeforeCallback=this.filterResults;
}
var C=this.generateRequest(G);
this.dataRequestEvent.fire(this,G,C);
this.dataSource.sendRequest(C,{success:this.handleResponse,failure:this.handleResponse,scope:this,argument:{query:G}});
};
YAHOO.widget.AutoComplete.prototype._populateList=function(K,F,C){
if(this._nTypeAheadDelayID!=-1){
clearTimeout(this._nTypeAheadDelayID);
}
K=(C&&C.query)?C.query:K;
var H=this.doBeforeLoadData(K,F,C);
if(H&&!F.error){
this.dataReturnEvent.fire(this,K,F.results);
if(this._bFocused||(this._bFocused===null)){
var M=decodeURIComponent(K);
this._sCurQuery=M;
this._bItemSelected=false;
var R=F.results,A=Math.min(R.length,this.maxResultsDisplayed),J=(this.dataSource.responseSchema.fields)?(this.dataSource.responseSchema.fields[0].key||this.dataSource.responseSchema.fields[0]):0;
if(A>0){
if(!this._elList||(this._elList.childNodes.length<A)){
this._initListEl();
}
this._initContainerHelperEls();
var I=this._elList.childNodes;
for(var Q=A-1;Q>=0;Q--){
var P=I[Q],E=R[Q];
if(this.resultTypeList){
var B=[];
B[0]=(YAHOO.lang.isString(E))?E:E[J]||E[this.key];
var L=this.dataSource.responseSchema.fields;
if(YAHOO.lang.isArray(L)&&(L.length>1)){
for(var N=1,S=L.length;N<S;N++){
B[B.length]=E[L[N].key||L[N]];
}
}else{
if(YAHOO.lang.isArray(E)){
B=E;
}else{
if(YAHOO.lang.isString(E)){
B=[E];
}else{
B[1]=E;
}
}
}
E=B;
}
P._sResultMatch=(YAHOO.lang.isString(E))?E:(YAHOO.lang.isArray(E))?E[0]:(E[J]||"");
P._oResultData=E;
P.innerHTML=this.formatResult(E,M,P._sResultMatch);
P.style.display="";
}
if(A<I.length){
var G;
for(var O=I.length-1;O>=A;O--){
G=I[O];
G.style.display="none";
}
}
this._nDisplayedItems=A;
this.containerPopulateEvent.fire(this,K,R);
if(this.autoHighlight){
var D=this._elList.firstChild;
this._toggleHighlight(D,"to");
this.itemArrowToEvent.fire(this,D);
this._typeAhead(D,K);
}else{
this._toggleHighlight(this._elCurListItem,"from");
}
H=this.doBeforeExpandContainer(this._elTextbox,this._elContainer,K,R);
this._toggleContainer(H);
}else{
this._toggleContainer(false);
}
return;
}
}else{
this.dataErrorEvent.fire(this,K);
}
};
YAHOO.widget.AutoComplete.prototype._clearSelection=function(){
var C=this._elTextbox.value;
var B=(this.delimChar)?this.delimChar[0]:null;
var A=(B)?C.lastIndexOf(B,C.length-2):-1;
if(A>-1){
this._elTextbox.value=C.substring(0,A);
}else{
this._elTextbox.value="";
}
this._sPastSelections=this._elTextbox.value;
this.selectionEnforceEvent.fire(this);
};
YAHOO.widget.AutoComplete.prototype._textMatchesOption=function(){
var A=null;
for(var B=this._nDisplayedItems-1;B>=0;B--){
var C=this._elList.childNodes[B];
var D=(""+C._sResultMatch).toLowerCase();
if(D==this._sCurQuery.toLowerCase()){
A=C;
break;
}
}
return (A);
};
YAHOO.widget.AutoComplete.prototype._typeAhead=function(B,D){
if(!this.typeAhead||(this._nKeyCode==8)){
return;
}
var A=this,C=this._elTextbox;
if(C.setSelectionRange||C.createTextRange){
this._nTypeAheadDelayID=setTimeout(function(){
var F=C.value.length;
A._updateValue(B);
var G=C.value.length;
A._selectText(C,F,G);
var E=C.value.substr(F,G);
A.typeAheadEvent.fire(A,D,E);
},(this.typeAheadDelay*1000));
}
};
YAHOO.widget.AutoComplete.prototype._selectText=function(D,A,B){
if(D.setSelectionRange){
D.setSelectionRange(A,B);
}else{
if(D.createTextRange){
var C=D.createTextRange();
C.moveStart("character",A);
C.moveEnd("character",B-D.value.length);
C.select();
}else{
D.select();
}
}
};
YAHOO.widget.AutoComplete.prototype._toggleContainerHelpers=function(D){
var E=this._elContent.offsetWidth+"px";
var B=this._elContent.offsetHeight+"px";
if(this.useIFrame&&this._elIFrame){
var C=this._elIFrame;
if(D){
C.style.width=E;
C.style.height=B;
C.style.padding="";
}else{
C.style.width=0;
C.style.height=0;
C.style.padding=0;
}
}
if(this.useShadow&&this._elShadow){
var A=this._elShadow;
if(D){
A.style.width=E;
A.style.height=B;
}else{
A.style.width=0;
A.style.height=0;
}
}
};
YAHOO.widget.AutoComplete.prototype._toggleContainer=function(I){
var D=this._elContainer;
if(this.alwaysShowContainer&&this._bContainerOpen){
return;
}
if(!I){
this._toggleHighlight(this._elCurListItem,"from");
this._nDisplayedItems=0;
this._sCurQuery=null;
if(!this._bContainerOpen){
this._elContent.style.display="none";
return;
}
}
var A=this._oAnim;
if(A&&A.getEl()&&(this.animHoriz||this.animVert)){
if(A.isAnimated()){
A.stop(true);
}
var G=this._elContent.cloneNode(true);
D.appendChild(G);
G.style.top="-9000px";
G.style.width="";
G.style.height="";
G.style.display="";
var F=G.offsetWidth;
var C=G.offsetHeight;
var B=(this.animHoriz)?0:F;
var E=(this.animVert)?0:C;
A.attributes=(I)?{width:{to:F},height:{to:C}}:{width:{to:B},height:{to:E}};
if(I&&!this._bContainerOpen){
this._elContent.style.width=B+"px";
this._elContent.style.height=E+"px";
}else{
this._elContent.style.width=F+"px";
this._elContent.style.height=C+"px";
}
D.removeChild(G);
G=null;
var H=this;
var J=function(){
A.onComplete.unsubscribeAll();
if(I){
H._toggleContainerHelpers(true);
H._bContainerOpen=I;
H.containerExpandEvent.fire(H);
}else{
H._elContent.style.display="none";
H._bContainerOpen=I;
H.containerCollapseEvent.fire(H);
}
};
this._toggleContainerHelpers(false);
this._elContent.style.display="";
A.onComplete.subscribe(J);
A.animate();
}else{
if(I){
this._elContent.style.display="";
this._toggleContainerHelpers(true);
this._bContainerOpen=I;
this.containerExpandEvent.fire(this);
}else{
this._toggleContainerHelpers(false);
this._elContent.style.display="none";
this._bContainerOpen=I;
this.containerCollapseEvent.fire(this);
}
}
};
YAHOO.widget.AutoComplete.prototype._toggleHighlight=function(A,C){
if(A){
var B=this.highlightClassName;
if(this._elCurListItem){
YAHOO.util.Dom.removeClass(this._elCurListItem,B);
this._elCurListItem=null;
}
if((C=="to")&&B){
YAHOO.util.Dom.addClass(A,B);
this._elCurListItem=A;
}
}
};
YAHOO.widget.AutoComplete.prototype._togglePrehighlight=function(B,C){
if(B==this._elCurListItem){
return;
}
var A=this.prehighlightClassName;
if((C=="mouseover")&&A){
YAHOO.util.Dom.addClass(B,A);
}else{
YAHOO.util.Dom.removeClass(B,A);
}
};
YAHOO.widget.AutoComplete.prototype._updateValue=function(C){
if(!this.suppressInputUpdate){
var F=this._elTextbox;
var E=(this.delimChar)?(this.delimChar[0]||this.delimChar):null;
var B=C._sResultMatch;
var D="";
if(E){
D=this._sPastSelections;
D+=B+E;
if(E!=" "){
D+=" ";
}
}else{
D=B;
}
F.value=D;
if(F.type=="textarea"){
F.scrollTop=F.scrollHeight;
}
var A=F.value.length;
this._selectText(F,A,A);
this._elCurListItem=C;
}
};
YAHOO.widget.AutoComplete.prototype._selectItem=function(A){
this._bItemSelected=true;
this._updateValue(A);
this._sPastSelections=this._elTextbox.value;
this._clearInterval();
this.itemSelectEvent.fire(this,A,A._oResultData);
this._toggleContainer(false);
};
YAHOO.widget.AutoComplete.prototype._jumpSelection=function(){
if(this._elCurListItem){
this._selectItem(this._elCurListItem);
}else{
this._toggleContainer(false);
}
};
YAHOO.widget.AutoComplete.prototype._moveSelection=function(G){
if(this._bContainerOpen){
var F=this._elCurListItem;
var E=-1;
if(F){
E=F._nItemIndex;
}
var C=(G==40)?(E+1):(E-1);
if(C<-2||C>=this._nDisplayedItems){
return;
}
if(F){
this._toggleHighlight(F,"from");
this.itemArrowFromEvent.fire(this,F);
}
if(C==-1){
if(this.delimChar){
this._elTextbox.value=this._sPastSelections+this._sCurQuery;
}else{
this._elTextbox.value=this._sCurQuery;
}
return;
}
if(C==-2){
this._toggleContainer(false);
return;
}
var D=this._elList.childNodes[C];
var A=this._elContent;
var B=((YAHOO.util.Dom.getStyle(A,"overflow")=="auto")||(YAHOO.util.Dom.getStyle(A,"overflowY")=="auto"));
if(B&&(C>-1)&&(C<this._nDisplayedItems)){
if(G==40){
if((D.offsetTop+D.offsetHeight)>(A.scrollTop+A.offsetHeight)){
A.scrollTop=(D.offsetTop+D.offsetHeight)-A.offsetHeight;
}else{
if((D.offsetTop+D.offsetHeight)<A.scrollTop){
A.scrollTop=D.offsetTop;
}
}
}else{
if(D.offsetTop<A.scrollTop){
this._elContent.scrollTop=D.offsetTop;
}else{
if(D.offsetTop>(A.scrollTop+A.offsetHeight)){
this._elContent.scrollTop=(D.offsetTop+D.offsetHeight)-A.offsetHeight;
}
}
}
}
this._toggleHighlight(D,"to");
this.itemArrowToEvent.fire(this,D);
if(this.typeAhead){
this._updateValue(D);
}
}
};
YAHOO.widget.AutoComplete.prototype._onContainerMouseover=function(A,C){
var D=YAHOO.util.Event.getTarget(A);
var B=D.nodeName.toLowerCase();
while(D&&(B!="table")){
switch(B){
case "body":
return;
case "li":
if(C.prehighlightClassName){
C._togglePrehighlight(D,"mouseover");
}else{
C._toggleHighlight(D,"to");
}
C.itemMouseOverEvent.fire(C,D);
break;
case "div":
if(YAHOO.util.Dom.hasClass(D,"yui-ac-container")){
C._bOverContainer=true;
return;
}
break;
default:
break;
}
D=D.parentNode;
if(D){
B=D.nodeName.toLowerCase();
}
}
};
YAHOO.widget.AutoComplete.prototype._onContainerMouseout=function(A,C){
var D=YAHOO.util.Event.getTarget(A);
var B=D.nodeName.toLowerCase();
while(D&&(B!="table")){
switch(B){
case "body":
return;
case "li":
if(C.prehighlightClassName){
C._togglePrehighlight(D,"mouseout");
}else{
C._toggleHighlight(D,"from");
}
C.itemMouseOutEvent.fire(C,D);
break;
case "ul":
C._toggleHighlight(C._elCurListItem,"to");
break;
case "div":
if(YAHOO.util.Dom.hasClass(D,"yui-ac-container")){
C._bOverContainer=false;
return;
}
break;
default:
break;
}
D=D.parentNode;
if(D){
B=D.nodeName.toLowerCase();
}
}
};
YAHOO.widget.AutoComplete.prototype._onContainerClick=function(A,C){
var D=YAHOO.util.Event.getTarget(A);
var B=D.nodeName.toLowerCase();
while(D&&(B!="table")){
switch(B){
case "body":
return;
case "li":
C._toggleHighlight(D,"to");
C._selectItem(D);
return;
default:
break;
}
D=D.parentNode;
if(D){
B=D.nodeName.toLowerCase();
}
}
};
YAHOO.widget.AutoComplete.prototype._onContainerScroll=function(A,B){
B._elTextbox.focus();
};
YAHOO.widget.AutoComplete.prototype._onContainerResize=function(A,B){
B._toggleContainerHelpers(B._bContainerOpen);
};
YAHOO.widget.AutoComplete.prototype._onTextboxKeyDown=function(A,B){
var C=A.keyCode;
if(B._nTypeAheadDelayID!=-1){
clearTimeout(B._nTypeAheadDelayID);
}
switch(C){
case 9:
if(!YAHOO.env.ua.opera&&(navigator.userAgent.toLowerCase().indexOf("mac")==-1)||(YAHOO.env.ua.webkit>420)){
if(B._elCurListItem){
if(B.delimChar&&(B._nKeyCode!=C)){
if(B._bContainerOpen){
YAHOO.util.Event.stopEvent(A);
}
}
B._selectItem(B._elCurListItem);
}else{
B._toggleContainer(false);
}
}
break;
case 13:
if(!YAHOO.env.ua.opera&&(navigator.userAgent.toLowerCase().indexOf("mac")==-1)||(YAHOO.env.ua.webkit>420)){
if(B._elCurListItem){
if(B._nKeyCode!=C){
if(B._bContainerOpen){
YAHOO.util.Event.stopEvent(A);
}
}
B._selectItem(B._elCurListItem);
}else{
B._toggleContainer(false);
}
}
break;
case 27:
B._toggleContainer(false);
return;
case 39:
B._jumpSelection();
break;
case 38:
if(B._bContainerOpen){
YAHOO.util.Event.stopEvent(A);
B._moveSelection(C);
}
break;
case 40:
if(B._bContainerOpen){
YAHOO.util.Event.stopEvent(A);
B._moveSelection(C);
}
break;
default:
B._bItemSelected=false;
B._toggleHighlight(B._elCurListItem,"from");
B.textboxKeyEvent.fire(B,C);
break;
}
if(C===18){
B._enableIntervalDetection();
}
B._nKeyCode=C;
};
YAHOO.widget.AutoComplete.prototype._onTextboxKeyPress=function(A,B){
var C=A.keyCode;
if(YAHOO.env.ua.opera||(navigator.userAgent.toLowerCase().indexOf("mac")!=-1)&&(YAHOO.env.ua.webkit<420)){
switch(C){
case 9:
if(B._bContainerOpen){
if(B.delimChar){
YAHOO.util.Event.stopEvent(A);
}
if(B._elCurListItem){
B._selectItem(B._elCurListItem);
}else{
B._toggleContainer(false);
}
}
break;
case 13:
if(B._bContainerOpen){
YAHOO.util.Event.stopEvent(A);
if(B._elCurListItem){
B._selectItem(B._elCurListItem);
}else{
B._toggleContainer(false);
}
}
break;
default:
break;
}
}else{
if(C==229){
B._enableIntervalDetection();
}
}
};
YAHOO.widget.AutoComplete.prototype._onTextboxKeyUp=function(A,C){
var B=this.value;
C._initProps();
var D=A.keyCode;
if(C._isIgnoreKey(D)){
return;
}
if(C._nDelayID!=-1){
clearTimeout(C._nDelayID);
}
C._nDelayID=setTimeout(function(){
C._sendQuery(B);
},(C.queryDelay*1000));
};
YAHOO.widget.AutoComplete.prototype._onTextboxFocus=function(A,B){
if(!B._bFocused){
B._elTextbox.setAttribute("autocomplete","off");
B._bFocused=true;
B._sInitInputValue=B._elTextbox.value;
B.textboxFocusEvent.fire(B);
}
};
YAHOO.widget.AutoComplete.prototype._onTextboxBlur=function(A,C){
if(!C._bOverContainer||(C._nKeyCode==9)){
if(!C._bItemSelected){
var B=C._textMatchesOption();
if(!C._bContainerOpen||(C._bContainerOpen&&(B===null))){
if(C.forceSelection){
C._clearSelection();
}else{
C.unmatchedItemSelectEvent.fire(C,C._sCurQuery);
}
}else{
if(C.forceSelection){
C._selectItem(B);
}
}
}
if(C._bContainerOpen){
C._toggleContainer(false);
}
C._clearInterval();
C._bFocused=false;
if(C._sInitInputValue!==C._elTextbox.value){
C.textboxChangeEvent.fire(C);
}
C.textboxBlurEvent.fire(C);
}
};
YAHOO.widget.AutoComplete.prototype._onWindowUnload=function(A,B){
if(B&&B._elTextbox&&B.allowBrowserAutocomplete){
B._elTextbox.setAttribute("autocomplete","on");
}
};
YAHOO.widget.AutoComplete.prototype.doBeforeSendQuery=function(A){
return this.generateRequest(A);
};
YAHOO.widget.AutoComplete.prototype.getListItems=function(){
var C=[],B=this._elList.childNodes;
for(var A=B.length-1;A>=0;A--){
C[A]=B[A];
}
return C;
};
YAHOO.widget.AutoComplete._cloneObject=function(D){
if(!YAHOO.lang.isValue(D)){
return D;
}
var F={};
if(YAHOO.lang.isFunction(D)){
F=D;
}else{
if(YAHOO.lang.isArray(D)){
var E=[];
for(var C=0,B=D.length;C<B;C++){
E[C]=YAHOO.widget.AutoComplete._cloneObject(D[C]);
}
F=E;
}else{
if(YAHOO.lang.isObject(D)){
for(var A in D){
if(YAHOO.lang.hasOwnProperty(D,A)){
if(YAHOO.lang.isValue(D[A])&&YAHOO.lang.isObject(D[A])||YAHOO.lang.isArray(D[A])){
F[A]=YAHOO.widget.AutoComplete._cloneObject(D[A]);
}else{
F[A]=D[A];
}
}
}
}else{
F=D;
}
}
}
return F;
};
YAHOO.register("autocomplete",YAHOO.widget.AutoComplete,{version:"2.6.0",build:"1321"});
(function(_f3,_f4){
if(typeof module==="object"&&typeof module.exports==="object"){
module.exports=_f3.document?_f4(_f3,true):function(w){
if(!w.document){
throw new Error("jQuery requires a window with a document");
}
return _f4(w);
};
}else{
_f4(_f3);
}
}(typeof window!=="undefined"?window:this,function(_f5,_f6){
var _f7=[];
var _f8=_f7.slice;
var _f9=_f7.concat;
var _fa=_f7.push;
var _fb=_f7.indexOf;
var _fc={};
var _fd=_fc.toString;
var _fe=_fc.hasOwnProperty;
var _ff={};
var _100="1.11.3",_101=function(_102,_103){
return new _101.fn.init(_102,_103);
},_104=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,_105=/^-ms-/,_106=/-([\da-z])/gi,_107=function(all,_108){
return _108.toUpperCase();
};
_101.fn=_101.prototype={jquery:_100,constructor:_101,selector:"",length:0,toArray:function(){
return _f8.call(this);
},get:function(num){
return num!=null?(num<0?this[num+this.length]:this[num]):_f8.call(this);
},pushStack:function(_109){
var ret=_101.merge(this.constructor(),_109);
ret.prevObject=this;
ret.context=this.context;
return ret;
},each:function(_10a,args){
return _101.each(this,_10a,args);
},map:function(_10b){
return this.pushStack(_101.map(this,function(elem,i){
return _10b.call(elem,i,elem);
}));
},slice:function(){
return this.pushStack(_f8.apply(this,arguments));
},first:function(){
return this.eq(0);
},last:function(){
return this.eq(-1);
},eq:function(i){
var len=this.length,j=+i+(i<0?len:0);
return this.pushStack(j>=0&&j<len?[this[j]]:[]);
},end:function(){
return this.prevObject||this.constructor(null);
},push:_fa,sort:_f7.sort,splice:_f7.splice};
_101.extend=_101.fn.extend=function(){
var src,_10c,copy,name,_10d,_10e,_10f=arguments[0]||{},i=1,_110=arguments.length,deep=false;
if(typeof _10f==="boolean"){
deep=_10f;
_10f=arguments[i]||{};
i++;
}
if(typeof _10f!=="object"&&!_101.isFunction(_10f)){
_10f={};
}
if(i===_110){
_10f=this;
i--;
}
for(;i<_110;i++){
if((_10d=arguments[i])!=null){
for(name in _10d){
src=_10f[name];
copy=_10d[name];
if(_10f===copy){
continue;
}
if(deep&&copy&&(_101.isPlainObject(copy)||(_10c=_101.isArray(copy)))){
if(_10c){
_10c=false;
_10e=src&&_101.isArray(src)?src:[];
}else{
_10e=src&&_101.isPlainObject(src)?src:{};
}
_10f[name]=_101.extend(deep,_10e,copy);
}else{
if(copy!==undefined){
_10f[name]=copy;
}
}
}
}
}
return _10f;
};
_101.extend({expando:"jQuery"+(_100+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){
throw new Error(msg);
},noop:function(){
},isFunction:function(obj){
return _101.type(obj)==="function";
},isArray:Array.isArray||function(obj){
return _101.type(obj)==="array";
},isWindow:function(obj){
return obj!=null&&obj==obj.window;
},isNumeric:function(obj){
return !_101.isArray(obj)&&(obj-parseFloat(obj)+1)>=0;
},isEmptyObject:function(obj){
var name;
for(name in obj){
return false;
}
return true;
},isPlainObject:function(obj){
var key;
if(!obj||_101.type(obj)!=="object"||obj.nodeType||_101.isWindow(obj)){
return false;
}
try{
if(obj.constructor&&!_fe.call(obj,"constructor")&&!_fe.call(obj.constructor.prototype,"isPrototypeOf")){
return false;
}
}
catch(e){
return false;
}
if(_ff.ownLast){
for(key in obj){
return _fe.call(obj,key);
}
}
for(key in obj){
}
return key===undefined||_fe.call(obj,key);
},type:function(obj){
if(obj==null){
return obj+"";
}
return typeof obj==="object"||typeof obj==="function"?_fc[_fd.call(obj)]||"object":typeof obj;
},globalEval:function(data){
if(data&&_101.trim(data)){
(_f5.execScript||function(data){
_f5["eval"].call(_f5,data);
})(data);
}
},camelCase:function(_111){
return _111.replace(_105,"ms-").replace(_106,_107);
},nodeName:function(elem,name){
return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();
},each:function(obj,_112,args){
var _113,i=0,_114=obj.length,_115=_116(obj);
if(args){
if(_115){
for(;i<_114;i++){
_113=_112.apply(obj[i],args);
if(_113===false){
break;
}
}
}else{
for(i in obj){
_113=_112.apply(obj[i],args);
if(_113===false){
break;
}
}
}
}else{
if(_115){
for(;i<_114;i++){
_113=_112.call(obj[i],i,obj[i]);
if(_113===false){
break;
}
}
}else{
for(i in obj){
_113=_112.call(obj[i],i,obj[i]);
if(_113===false){
break;
}
}
}
}
return obj;
},trim:function(text){
return text==null?"":(text+"").replace(_104,"");
},makeArray:function(arr,_117){
var ret=_117||[];
if(arr!=null){
if(_116(Object(arr))){
_101.merge(ret,typeof arr==="string"?[arr]:arr);
}else{
_fa.call(ret,arr);
}
}
return ret;
},inArray:function(elem,arr,i){
var len;
if(arr){
if(_fb){
return _fb.call(arr,elem,i);
}
len=arr.length;
i=i?i<0?Math.max(0,len+i):i:0;
for(;i<len;i++){
if(i in arr&&arr[i]===elem){
return i;
}
}
}
return -1;
},merge:function(_118,_119){
var len=+_119.length,j=0,i=_118.length;
while(j<len){
_118[i++]=_119[j++];
}
if(len!==len){
while(_119[j]!==undefined){
_118[i++]=_119[j++];
}
}
_118.length=i;
return _118;
},grep:function(_11a,_11b,_11c){
var _11d,_11e=[],i=0,_11f=_11a.length,_120=!_11c;
for(;i<_11f;i++){
_11d=!_11b(_11a[i],i);
if(_11d!==_120){
_11e.push(_11a[i]);
}
}
return _11e;
},map:function(_121,_122,arg){
var _123,i=0,_124=_121.length,_125=_116(_121),ret=[];
if(_125){
for(;i<_124;i++){
_123=_122(_121[i],i,arg);
if(_123!=null){
ret.push(_123);
}
}
}else{
for(i in _121){
_123=_122(_121[i],i,arg);
if(_123!=null){
ret.push(_123);
}
}
}
return _f9.apply([],ret);
},guid:1,proxy:function(fn,_126){
var args,_127,tmp;
if(typeof _126==="string"){
tmp=fn[_126];
_126=fn;
fn=tmp;
}
if(!_101.isFunction(fn)){
return undefined;
}
args=_f8.call(arguments,2);
_127=function(){
return fn.apply(_126||this,args.concat(_f8.call(arguments)));
};
_127.guid=fn.guid=fn.guid||_101.guid++;
return _127;
},now:function(){
return +(new Date());
},support:_ff});
_101.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){
_fc["[object "+name+"]"]=name.toLowerCase();
});
function _116(obj){
var _128="length" in obj&&obj.length,type=_101.type(obj);
if(type==="function"||_101.isWindow(obj)){
return false;
}
if(obj.nodeType===1&&_128){
return true;
}
return type==="array"||_128===0||typeof _128==="number"&&_128>0&&(_128-1) in obj;
};
var _129=(function(_12a){
var i,_ff,Expr,_12b,_12c,_12d,_12e,_12f,_130,_131,_132,_133,_134,_135,_136,_137,_138,_139,_13a,_13b="sizzle"+1*new Date(),_13c=_12a.document,_13d=0,done=0,_13e=_13f(),_140=_13f(),_141=_13f(),_142=function(a,b){
if(a===b){
_132=true;
}
return 0;
},_143=1<<31,_fe=({}).hasOwnProperty,arr=[],pop=arr.pop,_144=arr.push,_fa=arr.push,_f8=arr.slice,_fb=function(list,elem){
var i=0,len=list.length;
for(;i<len;i++){
if(list[i]===elem){
return i;
}
}
return -1;
},_145="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",_146="[\\x20\\t\\r\\n\\f]",_147="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",_148=_147.replace("w","w#"),_149="\\["+_146+"*("+_147+")(?:"+_146+"*([*^$|!~]?=)"+_146+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+_148+"))|)"+_146+"*\\]",_14a=":("+_147+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+_149+")*)|"+".*"+")\\)|)",_14b=new RegExp(_146+"+","g"),_104=new RegExp("^"+_146+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_146+"+$","g"),_14c=new RegExp("^"+_146+"*,"+_146+"*"),_14d=new RegExp("^"+_146+"*([>+~]|"+_146+")"+_146+"*"),_14e=new RegExp("="+_146+"*([^\\]'\"]*?)"+_146+"*\\]","g"),_14f=new RegExp(_14a),_150=new RegExp("^"+_148+"$"),_151={"ID":new RegExp("^#("+_147+")"),"CLASS":new RegExp("^\\.("+_147+")"),"TAG":new RegExp("^("+_147.replace("w","w*")+")"),"ATTR":new RegExp("^"+_149),"PSEUDO":new RegExp("^"+_14a),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_146+"*(even|odd|(([+-]|)(\\d*)n|)"+_146+"*(?:([+-]|)"+_146+"*(\\d+)|))"+_146+"*\\)|)","i"),"bool":new RegExp("^(?:"+_145+")$","i"),"needsContext":new RegExp("^"+_146+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_146+"*((?:-\\d)?\\d*)"+_146+"*\\)|)(?=[^-]|$)","i")},_152=/^(?:input|select|textarea|button)$/i,_153=/^h\d$/i,_154=/^[^{]+\{\s*\[native \w/,_155=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_156=/[+~]/,_157=/'|\\/g,_158=new RegExp("\\\\([\\da-f]{1,6}"+_146+"?|("+_146+")|.)","ig"),_159=function(_15a,_15b,_15c){
var high="0x"+_15b-65536;
return high!==high||_15c?_15b:high<0?String.fromCharCode(high+65536):String.fromCharCode(high>>10|55296,high&1023|56320);
},_15d=function(){
_133();
};
try{
_fa.apply((arr=_f8.call(_13c.childNodes)),_13c.childNodes);
arr[_13c.childNodes.length].nodeType;
}
catch(e){
_fa={apply:arr.length?function(_15e,els){
_144.apply(_15e,_f8.call(els));
}:function(_15f,els){
var j=_15f.length,i=0;
while((_15f[j++]=els[i++])){
}
_15f.length=j-1;
}};
}
function _129(_160,_161,_162,seed){
var _163,elem,m,_164,i,_165,old,nid,_166,_167;
if((_161?_161.ownerDocument||_161:_13c)!==_134){
_133(_161);
}
_161=_161||_134;
_162=_162||[];
_164=_161.nodeType;
if(typeof _160!=="string"||!_160||_164!==1&&_164!==9&&_164!==11){
return _162;
}
if(!seed&&_136){
if(_164!==11&&(_163=_155.exec(_160))){
if((m=_163[1])){
if(_164===9){
elem=_161.getElementById(m);
if(elem&&elem.parentNode){
if(elem.id===m){
_162.push(elem);
return _162;
}
}else{
return _162;
}
}else{
if(_161.ownerDocument&&(elem=_161.ownerDocument.getElementById(m))&&_13a(_161,elem)&&elem.id===m){
_162.push(elem);
return _162;
}
}
}else{
if(_163[2]){
_fa.apply(_162,_161.getElementsByTagName(_160));
return _162;
}else{
if((m=_163[3])&&_ff.getElementsByClassName){
_fa.apply(_162,_161.getElementsByClassName(m));
return _162;
}
}
}
}
if(_ff.qsa&&(!_137||!_137.test(_160))){
nid=old=_13b;
_166=_161;
_167=_164!==1&&_160;
if(_164===1&&_161.nodeName.toLowerCase()!=="object"){
_165=_12d(_160);
if((old=_161.getAttribute("id"))){
nid=old.replace(_157,"\\$&");
}else{
_161.setAttribute("id",nid);
}
nid="[id='"+nid+"'] ";
i=_165.length;
while(i--){
_165[i]=nid+_168(_165[i]);
}
_166=_156.test(_160)&&_169(_161.parentNode)||_161;
_167=_165.join(",");
}
if(_167){
try{
_fa.apply(_162,_166.querySelectorAll(_167));
return _162;
}
catch(qsaError){
}
finally{
if(!old){
_161.removeAttribute("id");
}
}
}
}
}
return _12f(_160.replace(_104,"$1"),_161,_162,seed);
};
function _13f(){
var keys=[];
function _16a(key,_16b){
if(keys.push(key+" ")>Expr.cacheLength){
delete _16a[keys.shift()];
}
return (_16a[key+" "]=_16b);
};
return _16a;
};
function _16c(fn){
fn[_13b]=true;
return fn;
};
function _16d(fn){
var div=_134.createElement("div");
try{
return !!fn(div);
}
catch(e){
return false;
}
finally{
if(div.parentNode){
div.parentNode.removeChild(div);
}
div=null;
}
};
function _16e(_16f,_170){
var arr=_16f.split("|"),i=_16f.length;
while(i--){
Expr.attrHandle[arr[i]]=_170;
}
};
function _171(a,b){
var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||_143)-(~a.sourceIndex||_143);
if(diff){
return diff;
}
if(cur){
while((cur=cur.nextSibling)){
if(cur===b){
return -1;
}
}
}
return a?1:-1;
};
function _172(type){
return function(elem){
var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type===type;
};
};
function _173(type){
return function(elem){
var name=elem.nodeName.toLowerCase();
return (name==="input"||name==="button")&&elem.type===type;
};
};
function _174(fn){
return _16c(function(_175){
_175=+_175;
return _16c(function(seed,_176){
var j,_177=fn([],seed.length,_175),i=_177.length;
while(i--){
if(seed[(j=_177[i])]){
seed[j]=!(_176[j]=seed[j]);
}
}
});
});
};
function _169(_178){
return _178&&typeof _178.getElementsByTagName!=="undefined"&&_178;
};
_ff=_129.support={};
_12c=_129.isXML=function(elem){
var _179=elem&&(elem.ownerDocument||elem).documentElement;
return _179?_179.nodeName!=="HTML":false;
};
_133=_129.setDocument=function(node){
var _17a,_17b,doc=node?node.ownerDocument||node:_13c;
if(doc===_134||doc.nodeType!==9||!doc.documentElement){
return _134;
}
_134=doc;
_135=doc.documentElement;
_17b=doc.defaultView;
if(_17b&&_17b!==_17b.top){
if(_17b.addEventListener){
_17b.addEventListener("unload",_15d,false);
}else{
if(_17b.attachEvent){
_17b.attachEvent("onunload",_15d);
}
}
}
_136=!_12c(doc);
_ff.attributes=_16d(function(div){
div.className="i";
return !div.getAttribute("className");
});
_ff.getElementsByTagName=_16d(function(div){
div.appendChild(doc.createComment(""));
return !div.getElementsByTagName("*").length;
});
_ff.getElementsByClassName=_154.test(doc.getElementsByClassName);
_ff.getById=_16d(function(div){
_135.appendChild(div).id=_13b;
return !doc.getElementsByName||!doc.getElementsByName(_13b).length;
});
if(_ff.getById){
Expr.find["ID"]=function(id,_17c){
if(typeof _17c.getElementById!=="undefined"&&_136){
var m=_17c.getElementById(id);
return m&&m.parentNode?[m]:[];
}
};
Expr.filter["ID"]=function(id){
var _17d=id.replace(_158,_159);
return function(elem){
return elem.getAttribute("id")===_17d;
};
};
}else{
delete Expr.find["ID"];
Expr.filter["ID"]=function(id){
var _17e=id.replace(_158,_159);
return function(elem){
var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
return node&&node.value===_17e;
};
};
}
Expr.find["TAG"]=_ff.getElementsByTagName?function(tag,_17f){
if(typeof _17f.getElementsByTagName!=="undefined"){
return _17f.getElementsByTagName(tag);
}else{
if(_ff.qsa){
return _17f.querySelectorAll(tag);
}
}
}:function(tag,_180){
var elem,tmp=[],i=0,_181=_180.getElementsByTagName(tag);
if(tag==="*"){
while((elem=_181[i++])){
if(elem.nodeType===1){
tmp.push(elem);
}
}
return tmp;
}
return _181;
};
Expr.find["CLASS"]=_ff.getElementsByClassName&&function(_182,_183){
if(_136){
return _183.getElementsByClassName(_182);
}
};
_138=[];
_137=[];
if((_ff.qsa=_154.test(doc.querySelectorAll))){
_16d(function(div){
_135.appendChild(div).innerHTML="<a id='"+_13b+"'></a>"+"<select id='"+_13b+"-\f]' msallowcapture=''>"+"<option selected=''></option></select>";
if(div.querySelectorAll("[msallowcapture^='']").length){
_137.push("[*^$]="+_146+"*(?:''|\"\")");
}
if(!div.querySelectorAll("[selected]").length){
_137.push("\\["+_146+"*(?:value|"+_145+")");
}
if(!div.querySelectorAll("[id~="+_13b+"-]").length){
_137.push("~=");
}
if(!div.querySelectorAll(":checked").length){
_137.push(":checked");
}
if(!div.querySelectorAll("a#"+_13b+"+*").length){
_137.push(".#.+[+~]");
}
});
_16d(function(div){
var _184=doc.createElement("input");
_184.setAttribute("type","hidden");
div.appendChild(_184).setAttribute("name","D");
if(div.querySelectorAll("[name=d]").length){
_137.push("name"+_146+"*[*^$|!~]?=");
}
if(!div.querySelectorAll(":enabled").length){
_137.push(":enabled",":disabled");
}
div.querySelectorAll("*,:x");
_137.push(",.*:");
});
}
if((_ff.matchesSelector=_154.test((_139=_135.matches||_135.webkitMatchesSelector||_135.mozMatchesSelector||_135.oMatchesSelector||_135.msMatchesSelector)))){
_16d(function(div){
_ff.disconnectedMatch=_139.call(div,"div");
_139.call(div,"[s!='']:x");
_138.push("!=",_14a);
});
}
_137=_137.length&&new RegExp(_137.join("|"));
_138=_138.length&&new RegExp(_138.join("|"));
_17a=_154.test(_135.compareDocumentPosition);
_13a=_17a||_154.test(_135.contains)?function(a,b){
var _185=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;
return a===bup||!!(bup&&bup.nodeType===1&&(_185.contains?_185.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));
}:function(a,b){
if(b){
while((b=b.parentNode)){
if(b===a){
return true;
}
}
}
return false;
};
_142=_17a?function(a,b){
if(a===b){
_132=true;
return 0;
}
var _186=!a.compareDocumentPosition-!b.compareDocumentPosition;
if(_186){
return _186;
}
_186=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;
if(_186&1||(!_ff.sortDetached&&b.compareDocumentPosition(a)===_186)){
if(a===doc||a.ownerDocument===_13c&&_13a(_13c,a)){
return -1;
}
if(b===doc||b.ownerDocument===_13c&&_13a(_13c,b)){
return 1;
}
return _131?(_fb(_131,a)-_fb(_131,b)):0;
}
return _186&4?-1:1;
}:function(a,b){
if(a===b){
_132=true;
return 0;
}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];
if(!aup||!bup){
return a===doc?-1:b===doc?1:aup?-1:bup?1:_131?(_fb(_131,a)-_fb(_131,b)):0;
}else{
if(aup===bup){
return _171(a,b);
}
}
cur=a;
while((cur=cur.parentNode)){
ap.unshift(cur);
}
cur=b;
while((cur=cur.parentNode)){
bp.unshift(cur);
}
while(ap[i]===bp[i]){
i++;
}
return i?_171(ap[i],bp[i]):ap[i]===_13c?-1:bp[i]===_13c?1:0;
};
return doc;
};
_129.matches=function(expr,_187){
return _129(expr,null,null,_187);
};
_129.matchesSelector=function(elem,expr){
if((elem.ownerDocument||elem)!==_134){
_133(elem);
}
expr=expr.replace(_14e,"='$1']");
if(_ff.matchesSelector&&_136&&(!_138||!_138.test(expr))&&(!_137||!_137.test(expr))){
try{
var ret=_139.call(elem,expr);
if(ret||_ff.disconnectedMatch||elem.document&&elem.document.nodeType!==11){
return ret;
}
}
catch(e){
}
}
return _129(expr,_134,null,[elem]).length>0;
};
_129.contains=function(_188,elem){
if((_188.ownerDocument||_188)!==_134){
_133(_188);
}
return _13a(_188,elem);
};
_129.attr=function(elem,name){
if((elem.ownerDocument||elem)!==_134){
_133(elem);
}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&_fe.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!_136):undefined;
return val!==undefined?val:_ff.attributes||!_136?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;
};
_129.error=function(msg){
throw new Error("Syntax error, unrecognized expression: "+msg);
};
_129.uniqueSort=function(_189){
var elem,_18a=[],j=0,i=0;
_132=!_ff.detectDuplicates;
_131=!_ff.sortStable&&_189.slice(0);
_189.sort(_142);
if(_132){
while((elem=_189[i++])){
if(elem===_189[i]){
j=_18a.push(i);
}
}
while(j--){
_189.splice(_18a[j],1);
}
}
_131=null;
return _189;
};
_12b=_129.getText=function(elem){
var node,ret="",i=0,_18b=elem.nodeType;
if(!_18b){
while((node=elem[i++])){
ret+=_12b(node);
}
}else{
if(_18b===1||_18b===9||_18b===11){
if(typeof elem.textContent==="string"){
return elem.textContent;
}else{
for(elem=elem.firstChild;elem;elem=elem.nextSibling){
ret+=_12b(elem);
}
}
}else{
if(_18b===3||_18b===4){
return elem.nodeValue;
}
}
}
return ret;
};
Expr=_129.selectors={cacheLength:50,createPseudo:_16c,match:_151,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(_18c){
_18c[1]=_18c[1].replace(_158,_159);
_18c[3]=(_18c[3]||_18c[4]||_18c[5]||"").replace(_158,_159);
if(_18c[2]==="~="){
_18c[3]=" "+_18c[3]+" ";
}
return _18c.slice(0,4);
},"CHILD":function(_18d){
_18d[1]=_18d[1].toLowerCase();
if(_18d[1].slice(0,3)==="nth"){
if(!_18d[3]){
_129.error(_18d[0]);
}
_18d[4]=+(_18d[4]?_18d[5]+(_18d[6]||1):2*(_18d[3]==="even"||_18d[3]==="odd"));
_18d[5]=+((_18d[7]+_18d[8])||_18d[3]==="odd");
}else{
if(_18d[3]){
_129.error(_18d[0]);
}
}
return _18d;
},"PSEUDO":function(_18e){
var _18f,_190=!_18e[6]&&_18e[2];
if(_151["CHILD"].test(_18e[0])){
return null;
}
if(_18e[3]){
_18e[2]=_18e[4]||_18e[5]||"";
}else{
if(_190&&_14f.test(_190)&&(_18f=_12d(_190,true))&&(_18f=_190.indexOf(")",_190.length-_18f)-_190.length)){
_18e[0]=_18e[0].slice(0,_18f);
_18e[2]=_190.slice(0,_18f);
}
}
return _18e.slice(0,3);
}},filter:{"TAG":function(_191){
var _192=_191.replace(_158,_159).toLowerCase();
return _191==="*"?function(){
return true;
}:function(elem){
return elem.nodeName&&elem.nodeName.toLowerCase()===_192;
};
},"CLASS":function(_193){
var _194=_13e[_193+" "];
return _194||(_194=new RegExp("(^|"+_146+")"+_193+"("+_146+"|$)"))&&_13e(_193,function(elem){
return _194.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");
});
},"ATTR":function(name,_195,_196){
return function(elem){
var _197=_129.attr(elem,name);
if(_197==null){
return _195==="!=";
}
if(!_195){
return true;
}
_197+="";
return _195==="="?_197===_196:_195==="!="?_197!==_196:_195==="^="?_196&&_197.indexOf(_196)===0:_195==="*="?_196&&_197.indexOf(_196)>-1:_195==="$="?_196&&_197.slice(-_196.length)===_196:_195==="~="?(" "+_197.replace(_14b," ")+" ").indexOf(_196)>-1:_195==="|="?_197===_196||_197.slice(0,_196.length+1)===_196+"-":false;
};
},"CHILD":function(type,what,_198,_199,last){
var _19a=type.slice(0,3)!=="nth",_19b=type.slice(-4)!=="last",_19c=what==="of-type";
return _199===1&&last===0?function(elem){
return !!elem.parentNode;
}:function(elem,_19d,xml){
var _19e,_19f,node,diff,_1a0,_1a1,dir=_19a!==_19b?"nextSibling":"previousSibling",_1a2=elem.parentNode,name=_19c&&elem.nodeName.toLowerCase(),_1a3=!xml&&!_19c;
if(_1a2){
if(_19a){
while(dir){
node=elem;
while((node=node[dir])){
if(_19c?node.nodeName.toLowerCase()===name:node.nodeType===1){
return false;
}
}
_1a1=dir=type==="only"&&!_1a1&&"nextSibling";
}
return true;
}
_1a1=[_19b?_1a2.firstChild:_1a2.lastChild];
if(_19b&&_1a3){
_19f=_1a2[_13b]||(_1a2[_13b]={});
_19e=_19f[type]||[];
_1a0=_19e[0]===_13d&&_19e[1];
diff=_19e[0]===_13d&&_19e[2];
node=_1a0&&_1a2.childNodes[_1a0];
while((node=++_1a0&&node&&node[dir]||(diff=_1a0=0)||_1a1.pop())){
if(node.nodeType===1&&++diff&&node===elem){
_19f[type]=[_13d,_1a0,diff];
break;
}
}
}else{
if(_1a3&&(_19e=(elem[_13b]||(elem[_13b]={}))[type])&&_19e[0]===_13d){
diff=_19e[1];
}else{
while((node=++_1a0&&node&&node[dir]||(diff=_1a0=0)||_1a1.pop())){
if((_19c?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){
if(_1a3){
(node[_13b]||(node[_13b]={}))[type]=[_13d,diff];
}
if(node===elem){
break;
}
}
}
}
}
diff-=last;
return diff===_199||(diff%_199===0&&diff/_199>=0);
}
};
},"PSEUDO":function(_1a4,_1a5){
var args,fn=Expr.pseudos[_1a4]||Expr.setFilters[_1a4.toLowerCase()]||_129.error("unsupported pseudo: "+_1a4);
if(fn[_13b]){
return fn(_1a5);
}
if(fn.length>1){
args=[_1a4,_1a4,"",_1a5];
return Expr.setFilters.hasOwnProperty(_1a4.toLowerCase())?_16c(function(seed,_1a6){
var idx,_1a7=fn(seed,_1a5),i=_1a7.length;
while(i--){
idx=_fb(seed,_1a7[i]);
seed[idx]=!(_1a6[idx]=_1a7[i]);
}
}):function(elem){
return fn(elem,0,args);
};
}
return fn;
}},pseudos:{"not":_16c(function(_1a8){
var _1a9=[],_1aa=[],_1ab=_12e(_1a8.replace(_104,"$1"));
return _1ab[_13b]?_16c(function(seed,_1ac,_1ad,xml){
var elem,_1ae=_1ab(seed,null,xml,[]),i=seed.length;
while(i--){
if((elem=_1ae[i])){
seed[i]=!(_1ac[i]=elem);
}
}
}):function(elem,_1af,xml){
_1a9[0]=elem;
_1ab(_1a9,null,xml,_1aa);
_1a9[0]=null;
return !_1aa.pop();
};
}),"has":_16c(function(_1b0){
return function(elem){
return _129(_1b0,elem).length>0;
};
}),"contains":_16c(function(text){
text=text.replace(_158,_159);
return function(elem){
return (elem.textContent||elem.innerText||_12b(elem)).indexOf(text)>-1;
};
}),"lang":_16c(function(lang){
if(!_150.test(lang||"")){
_129.error("unsupported lang: "+lang);
}
lang=lang.replace(_158,_159).toLowerCase();
return function(elem){
var _1b1;
do{
if((_1b1=_136?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){
_1b1=_1b1.toLowerCase();
return _1b1===lang||_1b1.indexOf(lang+"-")===0;
}
}while((elem=elem.parentNode)&&elem.nodeType===1);
return false;
};
}),"target":function(elem){
var hash=_12a.location&&_12a.location.hash;
return hash&&hash.slice(1)===elem.id;
},"root":function(elem){
return elem===_135;
},"focus":function(elem){
return elem===_134.activeElement&&(!_134.hasFocus||_134.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);
},"enabled":function(elem){
return elem.disabled===false;
},"disabled":function(elem){
return elem.disabled===true;
},"checked":function(elem){
var _1b2=elem.nodeName.toLowerCase();
return (_1b2==="input"&&!!elem.checked)||(_1b2==="option"&&!!elem.selected);
},"selected":function(elem){
if(elem.parentNode){
elem.parentNode.selectedIndex;
}
return elem.selected===true;
},"empty":function(elem){
for(elem=elem.firstChild;elem;elem=elem.nextSibling){
if(elem.nodeType<6){
return false;
}
}
return true;
},"parent":function(elem){
return !Expr.pseudos["empty"](elem);
},"header":function(elem){
return _153.test(elem.nodeName);
},"input":function(elem){
return _152.test(elem.nodeName);
},"button":function(elem){
var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type==="button"||name==="button";
},"text":function(elem){
var attr;
return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");
},"first":_174(function(){
return [0];
}),"last":_174(function(_1b3,_1b4){
return [_1b4-1];
}),"eq":_174(function(_1b5,_1b6,_1b7){
return [_1b7<0?_1b7+_1b6:_1b7];
}),"even":_174(function(_1b8,_1b9){
var i=0;
for(;i<_1b9;i+=2){
_1b8.push(i);
}
return _1b8;
}),"odd":_174(function(_1ba,_1bb){
var i=1;
for(;i<_1bb;i+=2){
_1ba.push(i);
}
return _1ba;
}),"lt":_174(function(_1bc,_1bd,_1be){
var i=_1be<0?_1be+_1bd:_1be;
for(;--i>=0;){
_1bc.push(i);
}
return _1bc;
}),"gt":_174(function(_1bf,_1c0,_1c1){
var i=_1c1<0?_1c1+_1c0:_1c1;
for(;++i<_1c0;){
_1bf.push(i);
}
return _1bf;
})}};
Expr.pseudos["nth"]=Expr.pseudos["eq"];
for(i in {radio:true,checkbox:true,file:true,password:true,image:true}){
Expr.pseudos[i]=_172(i);
}
for(i in {submit:true,reset:true}){
Expr.pseudos[i]=_173(i);
}
function _1c2(){
};
_1c2.prototype=Expr.filters=Expr.pseudos;
Expr.setFilters=new _1c2();
_12d=_129.tokenize=function(_1c3,_1c4){
var _1c5,_1c6,_1c7,type,_1c8,_1c9,_1ca,_1cb=_140[_1c3+" "];
if(_1cb){
return _1c4?0:_1cb.slice(0);
}
_1c8=_1c3;
_1c9=[];
_1ca=Expr.preFilter;
while(_1c8){
if(!_1c5||(_1c6=_14c.exec(_1c8))){
if(_1c6){
_1c8=_1c8.slice(_1c6[0].length)||_1c8;
}
_1c9.push((_1c7=[]));
}
_1c5=false;
if((_1c6=_14d.exec(_1c8))){
_1c5=_1c6.shift();
_1c7.push({value:_1c5,type:_1c6[0].replace(_104," ")});
_1c8=_1c8.slice(_1c5.length);
}
for(type in Expr.filter){
if((_1c6=_151[type].exec(_1c8))&&(!_1ca[type]||(_1c6=_1ca[type](_1c6)))){
_1c5=_1c6.shift();
_1c7.push({value:_1c5,type:type,matches:_1c6});
_1c8=_1c8.slice(_1c5.length);
}
}
if(!_1c5){
break;
}
}
return _1c4?_1c8.length:_1c8?_129.error(_1c3):_140(_1c3,_1c9).slice(0);
};
function _168(_1cc){
var i=0,len=_1cc.length,_1cd="";
for(;i<len;i++){
_1cd+=_1cc[i].value;
}
return _1cd;
};
function _1ce(_1cf,_1d0,base){
var dir=_1d0.dir,_1d1=base&&dir==="parentNode",_1d2=done++;
return _1d0.first?function(elem,_1d3,xml){
while((elem=elem[dir])){
if(elem.nodeType===1||_1d1){
return _1cf(elem,_1d3,xml);
}
}
}:function(elem,_1d4,xml){
var _1d5,_1d6,_1d7=[_13d,_1d2];
if(xml){
while((elem=elem[dir])){
if(elem.nodeType===1||_1d1){
if(_1cf(elem,_1d4,xml)){
return true;
}
}
}
}else{
while((elem=elem[dir])){
if(elem.nodeType===1||_1d1){
_1d6=elem[_13b]||(elem[_13b]={});
if((_1d5=_1d6[dir])&&_1d5[0]===_13d&&_1d5[1]===_1d2){
return (_1d7[2]=_1d5[2]);
}else{
_1d6[dir]=_1d7;
if((_1d7[2]=_1cf(elem,_1d4,xml))){
return true;
}
}
}
}
}
};
};
function _1d8(_1d9){
return _1d9.length>1?function(elem,_1da,xml){
var i=_1d9.length;
while(i--){
if(!_1d9[i](elem,_1da,xml)){
return false;
}
}
return true;
}:_1d9[0];
};
function _1db(_1dc,_1dd,_1de){
var i=0,len=_1dd.length;
for(;i<len;i++){
_129(_1dc,_1dd[i],_1de);
}
return _1de;
};
function _1df(_1e0,map,_1e1,_1e2,xml){
var elem,_1e3=[],i=0,len=_1e0.length,_1e4=map!=null;
for(;i<len;i++){
if((elem=_1e0[i])){
if(!_1e1||_1e1(elem,_1e2,xml)){
_1e3.push(elem);
if(_1e4){
map.push(i);
}
}
}
}
return _1e3;
};
function _1e5(_1e6,_1e7,_1e8,_1e9,_1ea,_1eb){
if(_1e9&&!_1e9[_13b]){
_1e9=_1e5(_1e9);
}
if(_1ea&&!_1ea[_13b]){
_1ea=_1e5(_1ea,_1eb);
}
return _16c(function(seed,_1ec,_1ed,xml){
var temp,i,elem,_1ee=[],_1ef=[],_1f0=_1ec.length,_1f1=seed||_1db(_1e7||"*",_1ed.nodeType?[_1ed]:_1ed,[]),_1f2=_1e6&&(seed||!_1e7)?_1df(_1f1,_1ee,_1e6,_1ed,xml):_1f1,_1f3=_1e8?_1ea||(seed?_1e6:_1f0||_1e9)?[]:_1ec:_1f2;
if(_1e8){
_1e8(_1f2,_1f3,_1ed,xml);
}
if(_1e9){
temp=_1df(_1f3,_1ef);
_1e9(temp,[],_1ed,xml);
i=temp.length;
while(i--){
if((elem=temp[i])){
_1f3[_1ef[i]]=!(_1f2[_1ef[i]]=elem);
}
}
}
if(seed){
if(_1ea||_1e6){
if(_1ea){
temp=[];
i=_1f3.length;
while(i--){
if((elem=_1f3[i])){
temp.push((_1f2[i]=elem));
}
}
_1ea(null,(_1f3=[]),temp,xml);
}
i=_1f3.length;
while(i--){
if((elem=_1f3[i])&&(temp=_1ea?_fb(seed,elem):_1ee[i])>-1){
seed[temp]=!(_1ec[temp]=elem);
}
}
}
}else{
_1f3=_1df(_1f3===_1ec?_1f3.splice(_1f0,_1f3.length):_1f3);
if(_1ea){
_1ea(null,_1ec,_1f3,xml);
}else{
_fa.apply(_1ec,_1f3);
}
}
});
};
function _1f4(_1f5){
var _1f6,_1f7,j,len=_1f5.length,_1f8=Expr.relative[_1f5[0].type],_1f9=_1f8||Expr.relative[" "],i=_1f8?1:0,_1fa=_1ce(function(elem){
return elem===_1f6;
},_1f9,true),_1fb=_1ce(function(elem){
return _fb(_1f6,elem)>-1;
},_1f9,true),_1fc=[function(elem,_1fd,xml){
var ret=(!_1f8&&(xml||_1fd!==_130))||((_1f6=_1fd).nodeType?_1fa(elem,_1fd,xml):_1fb(elem,_1fd,xml));
_1f6=null;
return ret;
}];
for(;i<len;i++){
if((_1f7=Expr.relative[_1f5[i].type])){
_1fc=[_1ce(_1d8(_1fc),_1f7)];
}else{
_1f7=Expr.filter[_1f5[i].type].apply(null,_1f5[i].matches);
if(_1f7[_13b]){
j=++i;
for(;j<len;j++){
if(Expr.relative[_1f5[j].type]){
break;
}
}
return _1e5(i>1&&_1d8(_1fc),i>1&&_168(_1f5.slice(0,i-1).concat({value:_1f5[i-2].type===" "?"*":""})).replace(_104,"$1"),_1f7,i<j&&_1f4(_1f5.slice(i,j)),j<len&&_1f4((_1f5=_1f5.slice(j))),j<len&&_168(_1f5));
}
_1fc.push(_1f7);
}
}
return _1d8(_1fc);
};
function _1fe(_1ff,_200){
var _201=_200.length>0,_202=_1ff.length>0,_203=function(seed,_204,xml,_205,_206){
var elem,j,_207,_208=0,i="0",_209=seed&&[],_20a=[],_20b=_130,_20c=seed||_202&&Expr.find["TAG"]("*",_206),_20d=(_13d+=_20b==null?1:Math.random()||0.1),len=_20c.length;
if(_206){
_130=_204!==_134&&_204;
}
for(;i!==len&&(elem=_20c[i])!=null;i++){
if(_202&&elem){
j=0;
while((_207=_1ff[j++])){
if(_207(elem,_204,xml)){
_205.push(elem);
break;
}
}
if(_206){
_13d=_20d;
}
}
if(_201){
if((elem=!_207&&elem)){
_208--;
}
if(seed){
_209.push(elem);
}
}
}
_208+=i;
if(_201&&i!==_208){
j=0;
while((_207=_200[j++])){
_207(_209,_20a,_204,xml);
}
if(seed){
if(_208>0){
while(i--){
if(!(_209[i]||_20a[i])){
_20a[i]=pop.call(_205);
}
}
}
_20a=_1df(_20a);
}
_fa.apply(_205,_20a);
if(_206&&!seed&&_20a.length>0&&(_208+_200.length)>1){
_129.uniqueSort(_205);
}
}
if(_206){
_13d=_20d;
_130=_20b;
}
return _209;
};
return _201?_16c(_203):_203;
};
_12e=_129.compile=function(_20e,_20f){
var i,_210=[],_211=[],_212=_141[_20e+" "];
if(!_212){
if(!_20f){
_20f=_12d(_20e);
}
i=_20f.length;
while(i--){
_212=_1f4(_20f[i]);
if(_212[_13b]){
_210.push(_212);
}else{
_211.push(_212);
}
}
_212=_141(_20e,_1fe(_211,_210));
_212.selector=_20e;
}
return _212;
};
_12f=_129.select=function(_213,_214,_215,seed){
var i,_216,_217,type,find,_218=typeof _213==="function"&&_213,_219=!seed&&_12d((_213=_218.selector||_213));
_215=_215||[];
if(_219.length===1){
_216=_219[0]=_219[0].slice(0);
if(_216.length>2&&(_217=_216[0]).type==="ID"&&_ff.getById&&_214.nodeType===9&&_136&&Expr.relative[_216[1].type]){
_214=(Expr.find["ID"](_217.matches[0].replace(_158,_159),_214)||[])[0];
if(!_214){
return _215;
}else{
if(_218){
_214=_214.parentNode;
}
}
_213=_213.slice(_216.shift().value.length);
}
i=_151["needsContext"].test(_213)?0:_216.length;
while(i--){
_217=_216[i];
if(Expr.relative[(type=_217.type)]){
break;
}
if((find=Expr.find[type])){
if((seed=find(_217.matches[0].replace(_158,_159),_156.test(_216[0].type)&&_169(_214.parentNode)||_214))){
_216.splice(i,1);
_213=seed.length&&_168(_216);
if(!_213){
_fa.apply(_215,seed);
return _215;
}
break;
}
}
}
}
(_218||_12e(_213,_219))(seed,_214,!_136,_215,_156.test(_213)&&_169(_214.parentNode)||_214);
return _215;
};
_ff.sortStable=_13b.split("").sort(_142).join("")===_13b;
_ff.detectDuplicates=!!_132;
_133();
_ff.sortDetached=_16d(function(div1){
return div1.compareDocumentPosition(_134.createElement("div"))&1;
});
if(!_16d(function(div){
div.innerHTML="<a href='#'></a>";
return div.firstChild.getAttribute("href")==="#";
})){
_16e("type|href|height|width",function(elem,name,_21a){
if(!_21a){
return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);
}
});
}
if(!_ff.attributes||!_16d(function(div){
div.innerHTML="<input/>";
div.firstChild.setAttribute("value","");
return div.firstChild.getAttribute("value")==="";
})){
_16e("value",function(elem,name,_21b){
if(!_21b&&elem.nodeName.toLowerCase()==="input"){
return elem.defaultValue;
}
});
}
if(!_16d(function(div){
return div.getAttribute("disabled")==null;
})){
_16e(_145,function(elem,name,_21c){
var val;
if(!_21c){
return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;
}
});
}
return _129;
})(_f5);
_101.find=_129;
_101.expr=_129.selectors;
_101.expr[":"]=_101.expr.pseudos;
_101.unique=_129.uniqueSort;
_101.text=_129.getText;
_101.isXMLDoc=_129.isXML;
_101.contains=_129.contains;
var _21d=_101.expr.match.needsContext;
var _21e=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
var _21f=/^.[^:#\[\.,]*$/;
function _220(_221,_222,not){
if(_101.isFunction(_222)){
return _101.grep(_221,function(elem,i){
return !!_222.call(elem,i,elem)!==not;
});
}
if(_222.nodeType){
return _101.grep(_221,function(elem){
return (elem===_222)!==not;
});
}
if(typeof _222==="string"){
if(_21f.test(_222)){
return _101.filter(_222,_221,not);
}
_222=_101.filter(_222,_221);
}
return _101.grep(_221,function(elem){
return (_101.inArray(elem,_222)>=0)!==not;
});
};
_101.filter=function(expr,_223,not){
var elem=_223[0];
if(not){
expr=":not("+expr+")";
}
return _223.length===1&&elem.nodeType===1?_101.find.matchesSelector(elem,expr)?[elem]:[]:_101.find.matches(expr,_101.grep(_223,function(elem){
return elem.nodeType===1;
}));
};
_101.fn.extend({find:function(_224){
var i,ret=[],self=this,len=self.length;
if(typeof _224!=="string"){
return this.pushStack(_101(_224).filter(function(){
for(i=0;i<len;i++){
if(_101.contains(self[i],this)){
return true;
}
}
}));
}
for(i=0;i<len;i++){
_101.find(_224,self[i],ret);
}
ret=this.pushStack(len>1?_101.unique(ret):ret);
ret.selector=this.selector?this.selector+" "+_224:_224;
return ret;
},filter:function(_225){
return this.pushStack(_220(this,_225||[],false));
},not:function(_226){
return this.pushStack(_220(this,_226||[],true));
},is:function(_227){
return !!_220(this,typeof _227==="string"&&_21d.test(_227)?_101(_227):_227||[],false).length;
}});
var _228,_229=_f5.document,_22a=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=_101.fn.init=function(_22b,_22c){
var _22d,elem;
if(!_22b){
return this;
}
if(typeof _22b==="string"){
if(_22b.charAt(0)==="<"&&_22b.charAt(_22b.length-1)===">"&&_22b.length>=3){
_22d=[null,_22b,null];
}else{
_22d=_22a.exec(_22b);
}
if(_22d&&(_22d[1]||!_22c)){
if(_22d[1]){
_22c=_22c instanceof _101?_22c[0]:_22c;
_101.merge(this,_101.parseHTML(_22d[1],_22c&&_22c.nodeType?_22c.ownerDocument||_22c:_229,true));
if(_21e.test(_22d[1])&&_101.isPlainObject(_22c)){
for(_22d in _22c){
if(_101.isFunction(this[_22d])){
this[_22d](_22c[_22d]);
}else{
this.attr(_22d,_22c[_22d]);
}
}
}
return this;
}else{
elem=_229.getElementById(_22d[2]);
if(elem&&elem.parentNode){
if(elem.id!==_22d[2]){
return _228.find(_22b);
}
this.length=1;
this[0]=elem;
}
this.context=_229;
this.selector=_22b;
return this;
}
}else{
if(!_22c||_22c.jquery){
return (_22c||_228).find(_22b);
}else{
return this.constructor(_22c).find(_22b);
}
}
}else{
if(_22b.nodeType){
this.context=this[0]=_22b;
this.length=1;
return this;
}else{
if(_101.isFunction(_22b)){
return typeof _228.ready!=="undefined"?_228.ready(_22b):_22b(_101);
}
}
}
if(_22b.selector!==undefined){
this.selector=_22b.selector;
this.context=_22b.context;
}
return _101.makeArray(_22b,this);
};
init.prototype=_101.fn;
_228=_101(_229);
var _22e=/^(?:parents|prev(?:Until|All))/,_22f={children:true,contents:true,next:true,prev:true};
_101.extend({dir:function(elem,dir,_230){
var _231=[],cur=elem[dir];
while(cur&&cur.nodeType!==9&&(_230===undefined||cur.nodeType!==1||!_101(cur).is(_230))){
if(cur.nodeType===1){
_231.push(cur);
}
cur=cur[dir];
}
return _231;
},sibling:function(n,elem){
var r=[];
for(;n;n=n.nextSibling){
if(n.nodeType===1&&n!==elem){
r.push(n);
}
}
return r;
}});
_101.fn.extend({has:function(_232){
var i,_233=_101(_232,this),len=_233.length;
return this.filter(function(){
for(i=0;i<len;i++){
if(_101.contains(this,_233[i])){
return true;
}
}
});
},closest:function(_234,_235){
var cur,i=0,l=this.length,_236=[],pos=_21d.test(_234)||typeof _234!=="string"?_101(_234,_235||this.context):0;
for(;i<l;i++){
for(cur=this[i];cur&&cur!==_235;cur=cur.parentNode){
if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&_101.find.matchesSelector(cur,_234))){
_236.push(cur);
break;
}
}
}
return this.pushStack(_236.length>1?_101.unique(_236):_236);
},index:function(elem){
if(!elem){
return (this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;
}
if(typeof elem==="string"){
return _101.inArray(this[0],_101(elem));
}
return _101.inArray(elem.jquery?elem[0]:elem,this);
},add:function(_237,_238){
return this.pushStack(_101.unique(_101.merge(this.get(),_101(_237,_238))));
},addBack:function(_239){
return this.add(_239==null?this.prevObject:this.prevObject.filter(_239));
}});
function _23a(cur,dir){
do{
cur=cur[dir];
}while(cur&&cur.nodeType!==1);
return cur;
};
_101.each({parent:function(elem){
var _23b=elem.parentNode;
return _23b&&_23b.nodeType!==11?_23b:null;
},parents:function(elem){
return _101.dir(elem,"parentNode");
},parentsUntil:function(elem,i,_23c){
return _101.dir(elem,"parentNode",_23c);
},next:function(elem){
return _23a(elem,"nextSibling");
},prev:function(elem){
return _23a(elem,"previousSibling");
},nextAll:function(elem){
return _101.dir(elem,"nextSibling");
},prevAll:function(elem){
return _101.dir(elem,"previousSibling");
},nextUntil:function(elem,i,_23d){
return _101.dir(elem,"nextSibling",_23d);
},prevUntil:function(elem,i,_23e){
return _101.dir(elem,"previousSibling",_23e);
},siblings:function(elem){
return _101.sibling((elem.parentNode||{}).firstChild,elem);
},children:function(elem){
return _101.sibling(elem.firstChild);
},contents:function(elem){
return _101.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:_101.merge([],elem.childNodes);
}},function(name,fn){
_101.fn[name]=function(_23f,_240){
var ret=_101.map(this,fn,_23f);
if(name.slice(-5)!=="Until"){
_240=_23f;
}
if(_240&&typeof _240==="string"){
ret=_101.filter(_240,ret);
}
if(this.length>1){
if(!_22f[name]){
ret=_101.unique(ret);
}
if(_22e.test(name)){
ret=ret.reverse();
}
}
return this.pushStack(ret);
};
});
var _241=(/\S+/g);
var _242={};
function _243(_244){
var _245=_242[_244]={};
_101.each(_244.match(_241)||[],function(_246,flag){
_245[flag]=true;
});
return _245;
};
_101.Callbacks=function(_247){
_247=typeof _247==="string"?(_242[_247]||_243(_247)):_101.extend({},_247);
var _248,_249,_24a,_24b,_24c,_24d,list=[],_24e=!_247.once&&[],fire=function(data){
_249=_247.memory&&data;
_24a=true;
_24c=_24d||0;
_24d=0;
_24b=list.length;
_248=true;
for(;list&&_24c<_24b;_24c++){
if(list[_24c].apply(data[0],data[1])===false&&_247.stopOnFalse){
_249=false;
break;
}
}
_248=false;
if(list){
if(_24e){
if(_24e.length){
fire(_24e.shift());
}
}else{
if(_249){
list=[];
}else{
self.disable();
}
}
}
},self={add:function(){
if(list){
var _24f=list.length;
(function add(args){
_101.each(args,function(_250,arg){
var type=_101.type(arg);
if(type==="function"){
if(!_247.unique||!self.has(arg)){
list.push(arg);
}
}else{
if(arg&&arg.length&&type!=="string"){
add(arg);
}
}
});
})(arguments);
if(_248){
_24b=list.length;
}else{
if(_249){
_24d=_24f;
fire(_249);
}
}
}
return this;
},remove:function(){
if(list){
_101.each(arguments,function(_251,arg){
var _252;
while((_252=_101.inArray(arg,list,_252))>-1){
list.splice(_252,1);
if(_248){
if(_252<=_24b){
_24b--;
}
if(_252<=_24c){
_24c--;
}
}
}
});
}
return this;
},has:function(fn){
return fn?_101.inArray(fn,list)>-1:!!(list&&list.length);
},empty:function(){
list=[];
_24b=0;
return this;
},disable:function(){
list=_24e=_249=undefined;
return this;
},disabled:function(){
return !list;
},lock:function(){
_24e=undefined;
if(!_249){
self.disable();
}
return this;
},locked:function(){
return !_24e;
},fireWith:function(_253,args){
if(list&&(!_24a||_24e)){
args=args||[];
args=[_253,args.slice?args.slice():args];
if(_248){
_24e.push(args);
}else{
fire(args);
}
}
return this;
},fire:function(){
self.fireWith(this,arguments);
return this;
},fired:function(){
return !!_24a;
}};
return self;
};
_101.extend({Deferred:function(func){
var _254=[["resolve","done",_101.Callbacks("once memory"),"resolved"],["reject","fail",_101.Callbacks("once memory"),"rejected"],["notify","progress",_101.Callbacks("memory")]],_255="pending",_256={state:function(){
return _255;
},always:function(){
_257.done(arguments).fail(arguments);
return this;
},then:function(){
var fns=arguments;
return _101.Deferred(function(_258){
_101.each(_254,function(i,_259){
var fn=_101.isFunction(fns[i])&&fns[i];
_257[_259[1]](function(){
var _25a=fn&&fn.apply(this,arguments);
if(_25a&&_101.isFunction(_25a.promise)){
_25a.promise().done(_258.resolve).fail(_258.reject).progress(_258.notify);
}else{
_258[_259[0]+"With"](this===_256?_258.promise():this,fn?[_25a]:arguments);
}
});
});
fns=null;
}).promise();
},promise:function(obj){
return obj!=null?_101.extend(obj,_256):_256;
}},_257={};
_256.pipe=_256.then;
_101.each(_254,function(i,_25b){
var list=_25b[2],_25c=_25b[3];
_256[_25b[1]]=list.add;
if(_25c){
list.add(function(){
_255=_25c;
},_254[i^1][2].disable,_254[2][2].lock);
}
_257[_25b[0]]=function(){
_257[_25b[0]+"With"](this===_257?_256:this,arguments);
return this;
};
_257[_25b[0]+"With"]=list.fireWith;
});
_256.promise(_257);
if(func){
func.call(_257,_257);
}
return _257;
},when:function(_25d){
var i=0,_25e=_f8.call(arguments),_25f=_25e.length,_260=_25f!==1||(_25d&&_101.isFunction(_25d.promise))?_25f:0,_261=_260===1?_25d:_101.Deferred(),_262=function(i,_263,_264){
return function(_265){
_263[i]=this;
_264[i]=arguments.length>1?_f8.call(arguments):_265;
if(_264===_266){
_261.notifyWith(_263,_264);
}else{
if(!(--_260)){
_261.resolveWith(_263,_264);
}
}
};
},_266,_267,_268;
if(_25f>1){
_266=new Array(_25f);
_267=new Array(_25f);
_268=new Array(_25f);
for(;i<_25f;i++){
if(_25e[i]&&_101.isFunction(_25e[i].promise)){
_25e[i].promise().done(_262(i,_268,_25e)).fail(_261.reject).progress(_262(i,_267,_266));
}else{
--_260;
}
}
}
if(!_260){
_261.resolveWith(_268,_25e);
}
return _261.promise();
}});
var _269;
_101.fn.ready=function(fn){
_101.ready.promise().done(fn);
return this;
};
_101.extend({isReady:false,readyWait:1,holdReady:function(hold){
if(hold){
_101.readyWait++;
}else{
_101.ready(true);
}
},ready:function(wait){
if(wait===true?--_101.readyWait:_101.isReady){
return;
}
if(!_229.body){
return setTimeout(_101.ready);
}
_101.isReady=true;
if(wait!==true&&--_101.readyWait>0){
return;
}
_269.resolveWith(_229,[_101]);
if(_101.fn.triggerHandler){
_101(_229).triggerHandler("ready");
_101(_229).off("ready");
}
}});
function _26a(){
if(_229.addEventListener){
_229.removeEventListener("DOMContentLoaded",_26b,false);
_f5.removeEventListener("load",_26b,false);
}else{
_229.detachEvent("onreadystatechange",_26b);
_f5.detachEvent("onload",_26b);
}
};
function _26b(){
if(_229.addEventListener||event.type==="load"||_229.readyState==="complete"){
_26a();
_101.ready();
}
};
_101.ready.promise=function(obj){
if(!_269){
_269=_101.Deferred();
if(_229.readyState==="complete"){
setTimeout(_101.ready);
}else{
if(_229.addEventListener){
_229.addEventListener("DOMContentLoaded",_26b,false);
_f5.addEventListener("load",_26b,false);
}else{
_229.attachEvent("onreadystatechange",_26b);
_f5.attachEvent("onload",_26b);
var top=false;
try{
top=_f5.frameElement==null&&_229.documentElement;
}
catch(e){
}
if(top&&top.doScroll){
(function doScrollCheck(){
if(!_101.isReady){
try{
top.doScroll("left");
}
catch(e){
return setTimeout(_26c,50);
}
_26a();
_101.ready();
}
})();
}
}
}
}
return _269.promise(obj);
};
var _26d=typeof undefined;
var i;
for(i in _101(_ff)){
break;
}
_ff.ownLast=i!=="0";
_ff.inlineBlockNeedsLayout=false;
_101(function(){
var val,div,body,_26e;
body=_229.getElementsByTagName("body")[0];
if(!body||!body.style){
return;
}
div=_229.createElement("div");
_26e=_229.createElement("div");
_26e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
body.appendChild(_26e).appendChild(div);
if(typeof div.style.zoom!==_26d){
div.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
_ff.inlineBlockNeedsLayout=val=div.offsetWidth===3;
if(val){
body.style.zoom=1;
}
}
body.removeChild(_26e);
});
(function(){
var div=_229.createElement("div");
if(_ff.deleteExpando==null){
_ff.deleteExpando=true;
try{
delete div.test;
}
catch(e){
_ff.deleteExpando=false;
}
}
div=null;
})();
_101.acceptData=function(elem){
var _26f=_101.noData[(elem.nodeName+" ").toLowerCase()],_270=+elem.nodeType||1;
return _270!==1&&_270!==9?false:!_26f||_26f!==true&&elem.getAttribute("classid")===_26f;
};
var _271=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,_272=/([A-Z])/g;
function _273(elem,key,data){
if(data===undefined&&elem.nodeType===1){
var name="data-"+key.replace(_272,"-$1").toLowerCase();
data=elem.getAttribute(name);
if(typeof data==="string"){
try{
data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:_271.test(data)?_101.parseJSON(data):data;
}
catch(e){
}
_101.data(elem,key,data);
}else{
data=undefined;
}
}
return data;
};
function _274(obj){
var name;
for(name in obj){
if(name==="data"&&_101.isEmptyObject(obj[name])){
continue;
}
if(name!=="toJSON"){
return false;
}
}
return true;
};
function _275(elem,name,data,pvt){
if(!_101.acceptData(elem)){
return;
}
var ret,_276,_277=_101.expando,_278=elem.nodeType,_279=_278?_101.cache:elem,id=_278?elem[_277]:elem[_277]&&_277;
if((!id||!_279[id]||(!pvt&&!_279[id].data))&&data===undefined&&typeof name==="string"){
return;
}
if(!id){
if(_278){
id=elem[_277]=_f7.pop()||_101.guid++;
}else{
id=_277;
}
}
if(!_279[id]){
_279[id]=_278?{}:{toJSON:_101.noop};
}
if(typeof name==="object"||typeof name==="function"){
if(pvt){
_279[id]=_101.extend(_279[id],name);
}else{
_279[id].data=_101.extend(_279[id].data,name);
}
}
_276=_279[id];
if(!pvt){
if(!_276.data){
_276.data={};
}
_276=_276.data;
}
if(data!==undefined){
_276[_101.camelCase(name)]=data;
}
if(typeof name==="string"){
ret=_276[name];
if(ret==null){
ret=_276[_101.camelCase(name)];
}
}else{
ret=_276;
}
return ret;
};
function _27a(elem,name,pvt){
if(!_101.acceptData(elem)){
return;
}
var _27b,i,_27c=elem.nodeType,_27d=_27c?_101.cache:elem,id=_27c?elem[_101.expando]:_101.expando;
if(!_27d[id]){
return;
}
if(name){
_27b=pvt?_27d[id]:_27d[id].data;
if(_27b){
if(!_101.isArray(name)){
if(name in _27b){
name=[name];
}else{
name=_101.camelCase(name);
if(name in _27b){
name=[name];
}else{
name=name.split(" ");
}
}
}else{
name=name.concat(_101.map(name,_101.camelCase));
}
i=name.length;
while(i--){
delete _27b[name[i]];
}
if(pvt?!_274(_27b):!_101.isEmptyObject(_27b)){
return;
}
}
}
if(!pvt){
delete _27d[id].data;
if(!_274(_27d[id])){
return;
}
}
if(_27c){
_101.cleanData([elem],true);
}else{
if(_ff.deleteExpando||_27d!=_27d.window){
delete _27d[id];
}else{
_27d[id]=null;
}
}
};
_101.extend({cache:{},noData:{"applet ":true,"embed ":true,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(elem){
elem=elem.nodeType?_101.cache[elem[_101.expando]]:elem[_101.expando];
return !!elem&&!_274(elem);
},data:function(elem,name,data){
return _275(elem,name,data);
},removeData:function(elem,name){
return _27a(elem,name);
},_data:function(elem,name,data){
return _275(elem,name,data,true);
},_removeData:function(elem,name){
return _27a(elem,name,true);
}});
_101.fn.extend({data:function(key,_27e){
var i,name,data,elem=this[0],_27f=elem&&elem.attributes;
if(key===undefined){
if(this.length){
data=_101.data(elem);
if(elem.nodeType===1&&!_101._data(elem,"parsedAttrs")){
i=_27f.length;
while(i--){
if(_27f[i]){
name=_27f[i].name;
if(name.indexOf("data-")===0){
name=_101.camelCase(name.slice(5));
_273(elem,name,data[name]);
}
}
}
_101._data(elem,"parsedAttrs",true);
}
}
return data;
}
if(typeof key==="object"){
return this.each(function(){
_101.data(this,key);
});
}
return arguments.length>1?this.each(function(){
_101.data(this,key,_27e);
}):elem?_273(elem,key,_101.data(elem,key)):undefined;
},removeData:function(key){
return this.each(function(){
_101.removeData(this,key);
});
}});
_101.extend({queue:function(elem,type,data){
var _280;
if(elem){
type=(type||"fx")+"queue";
_280=_101._data(elem,type);
if(data){
if(!_280||_101.isArray(data)){
_280=_101._data(elem,type,_101.makeArray(data));
}else{
_280.push(data);
}
}
return _280||[];
}
},dequeue:function(elem,type){
type=type||"fx";
var _281=_101.queue(elem,type),_282=_281.length,fn=_281.shift(),_283=_101._queueHooks(elem,type),next=function(){
_101.dequeue(elem,type);
};
if(fn==="inprogress"){
fn=_281.shift();
_282--;
}
if(fn){
if(type==="fx"){
_281.unshift("inprogress");
}
delete _283.stop;
fn.call(elem,next,_283);
}
if(!_282&&_283){
_283.empty.fire();
}
},_queueHooks:function(elem,type){
var key=type+"queueHooks";
return _101._data(elem,key)||_101._data(elem,key,{empty:_101.Callbacks("once memory").add(function(){
_101._removeData(elem,type+"queue");
_101._removeData(elem,key);
})});
}});
_101.fn.extend({queue:function(type,data){
var _284=2;
if(typeof type!=="string"){
data=type;
type="fx";
_284--;
}
if(arguments.length<_284){
return _101.queue(this[0],type);
}
return data===undefined?this:this.each(function(){
var _285=_101.queue(this,type,data);
_101._queueHooks(this,type);
if(type==="fx"&&_285[0]!=="inprogress"){
_101.dequeue(this,type);
}
});
},dequeue:function(type){
return this.each(function(){
_101.dequeue(this,type);
});
},clearQueue:function(type){
return this.queue(type||"fx",[]);
},promise:function(type,obj){
var tmp,_286=1,_287=_101.Deferred(),_288=this,i=this.length,_289=function(){
if(!(--_286)){
_287.resolveWith(_288,[_288]);
}
};
if(typeof type!=="string"){
obj=type;
type=undefined;
}
type=type||"fx";
while(i--){
tmp=_101._data(_288[i],type+"queueHooks");
if(tmp&&tmp.empty){
_286++;
tmp.empty.add(_289);
}
}
_289();
return _287.promise(obj);
}});
var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var _28a=["Top","Right","Bottom","Left"];
var _28b=function(elem,el){
elem=el||elem;
return _101.css(elem,"display")==="none"||!_101.contains(elem.ownerDocument,elem);
};
var _28c=_101.access=function(_28d,fn,key,_28e,_28f,_290,raw){
var i=0,_291=_28d.length,bulk=key==null;
if(_101.type(key)==="object"){
_28f=true;
for(i in key){
_101.access(_28d,fn,i,key[i],true,_290,raw);
}
}else{
if(_28e!==undefined){
_28f=true;
if(!_101.isFunction(_28e)){
raw=true;
}
if(bulk){
if(raw){
fn.call(_28d,_28e);
fn=null;
}else{
bulk=fn;
fn=function(elem,key,_292){
return bulk.call(_101(elem),_292);
};
}
}
if(fn){
for(;i<_291;i++){
fn(_28d[i],key,raw?_28e:_28e.call(_28d[i],i,fn(_28d[i],key)));
}
}
}
}
return _28f?_28d:bulk?fn.call(_28d):_291?fn(_28d[0],key):_290;
};
var _293=(/^(?:checkbox|radio)$/i);
(function(){
var _294=_229.createElement("input"),div=_229.createElement("div"),_295=_229.createDocumentFragment();
div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
_ff.leadingWhitespace=div.firstChild.nodeType===3;
_ff.tbody=!div.getElementsByTagName("tbody").length;
_ff.htmlSerialize=!!div.getElementsByTagName("link").length;
_ff.html5Clone=_229.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";
_294.type="checkbox";
_294.checked=true;
_295.appendChild(_294);
_ff.appendChecked=_294.checked;
div.innerHTML="<textarea>x</textarea>";
_ff.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;
_295.appendChild(div);
div.innerHTML="<input type='radio' checked='checked' name='t'/>";
_ff.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;
_ff.noCloneEvent=true;
if(div.attachEvent){
div.attachEvent("onclick",function(){
_ff.noCloneEvent=false;
});
div.cloneNode(true).click();
}
if(_ff.deleteExpando==null){
_ff.deleteExpando=true;
try{
delete div.test;
}
catch(e){
_ff.deleteExpando=false;
}
}
})();
(function(){
var i,_296,div=_229.createElement("div");
for(i in {submit:true,change:true,focusin:true}){
_296="on"+i;
if(!(_ff[i+"Bubbles"]=_296 in _f5)){
div.setAttribute(_296,"t");
_ff[i+"Bubbles"]=div.attributes[_296].expando===false;
}
}
div=null;
})();
var _297=/^(?:input|select|textarea)$/i,_298=/^key/,_299=/^(?:mouse|pointer|contextmenu)|click/,_29a=/^(?:focusinfocus|focusoutblur)$/,_29b=/^([^.]*)(?:\.(.+)|)$/;
function _29c(){
return true;
};
function _29d(){
return false;
};
function _29e(){
try{
return _229.activeElement;
}
catch(err){
}
};
_101.event={global:{},add:function(elem,_29f,_2a0,data,_2a1){
var tmp,_2a2,t,_2a3,_2a4,_2a5,_2a6,_2a7,type,_2a8,_2a9,_2aa=_101._data(elem);
if(!_2aa){
return;
}
if(_2a0.handler){
_2a3=_2a0;
_2a0=_2a3.handler;
_2a1=_2a3.selector;
}
if(!_2a0.guid){
_2a0.guid=_101.guid++;
}
if(!(_2a2=_2aa.events)){
_2a2=_2aa.events={};
}
if(!(_2a5=_2aa.handle)){
_2a5=_2aa.handle=function(e){
return typeof _101!==_26d&&(!e||_101.event.triggered!==e.type)?_101.event.dispatch.apply(_2a5.elem,arguments):undefined;
};
_2a5.elem=elem;
}
_29f=(_29f||"").match(_241)||[""];
t=_29f.length;
while(t--){
tmp=_29b.exec(_29f[t])||[];
type=_2a9=tmp[1];
_2a8=(tmp[2]||"").split(".").sort();
if(!type){
continue;
}
_2a4=_101.event.special[type]||{};
type=(_2a1?_2a4.delegateType:_2a4.bindType)||type;
_2a4=_101.event.special[type]||{};
_2a6=_101.extend({type:type,origType:_2a9,data:data,handler:_2a0,guid:_2a0.guid,selector:_2a1,needsContext:_2a1&&_101.expr.match.needsContext.test(_2a1),namespace:_2a8.join(".")},_2a3);
if(!(_2a7=_2a2[type])){
_2a7=_2a2[type]=[];
_2a7.delegateCount=0;
if(!_2a4.setup||_2a4.setup.call(elem,data,_2a8,_2a5)===false){
if(elem.addEventListener){
elem.addEventListener(type,_2a5,false);
}else{
if(elem.attachEvent){
elem.attachEvent("on"+type,_2a5);
}
}
}
}
if(_2a4.add){
_2a4.add.call(elem,_2a6);
if(!_2a6.handler.guid){
_2a6.handler.guid=_2a0.guid;
}
}
if(_2a1){
_2a7.splice(_2a7.delegateCount++,0,_2a6);
}else{
_2a7.push(_2a6);
}
_101.event.global[type]=true;
}
elem=null;
},remove:function(elem,_2ab,_2ac,_2ad,_2ae){
var j,_2af,tmp,_2b0,t,_2b1,_2b2,_2b3,type,_2b4,_2b5,_2b6=_101.hasData(elem)&&_101._data(elem);
if(!_2b6||!(_2b1=_2b6.events)){
return;
}
_2ab=(_2ab||"").match(_241)||[""];
t=_2ab.length;
while(t--){
tmp=_29b.exec(_2ab[t])||[];
type=_2b5=tmp[1];
_2b4=(tmp[2]||"").split(".").sort();
if(!type){
for(type in _2b1){
_101.event.remove(elem,type+_2ab[t],_2ac,_2ad,true);
}
continue;
}
_2b2=_101.event.special[type]||{};
type=(_2ad?_2b2.delegateType:_2b2.bindType)||type;
_2b3=_2b1[type]||[];
tmp=tmp[2]&&new RegExp("(^|\\.)"+_2b4.join("\\.(?:.*\\.|)")+"(\\.|$)");
_2b0=j=_2b3.length;
while(j--){
_2af=_2b3[j];
if((_2ae||_2b5===_2af.origType)&&(!_2ac||_2ac.guid===_2af.guid)&&(!tmp||tmp.test(_2af.namespace))&&(!_2ad||_2ad===_2af.selector||_2ad==="**"&&_2af.selector)){
_2b3.splice(j,1);
if(_2af.selector){
_2b3.delegateCount--;
}
if(_2b2.remove){
_2b2.remove.call(elem,_2af);
}
}
}
if(_2b0&&!_2b3.length){
if(!_2b2.teardown||_2b2.teardown.call(elem,_2b4,_2b6.handle)===false){
_101.removeEvent(elem,type,_2b6.handle);
}
delete _2b1[type];
}
}
if(_101.isEmptyObject(_2b1)){
delete _2b6.handle;
_101._removeData(elem,"events");
}
},trigger:function(_2b7,data,elem,_2b8){
var _2b9,_2ba,cur,_2bb,_2bc,tmp,i,_2bd=[elem||_229],type=_fe.call(_2b7,"type")?_2b7.type:_2b7,_2be=_fe.call(_2b7,"namespace")?_2b7.namespace.split("."):[];
cur=tmp=elem=elem||_229;
if(elem.nodeType===3||elem.nodeType===8){
return;
}
if(_29a.test(type+_101.event.triggered)){
return;
}
if(type.indexOf(".")>=0){
_2be=type.split(".");
type=_2be.shift();
_2be.sort();
}
_2ba=type.indexOf(":")<0&&"on"+type;
_2b7=_2b7[_101.expando]?_2b7:new _101.Event(type,typeof _2b7==="object"&&_2b7);
_2b7.isTrigger=_2b8?2:3;
_2b7.namespace=_2be.join(".");
_2b7.namespace_re=_2b7.namespace?new RegExp("(^|\\.)"+_2be.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
_2b7.result=undefined;
if(!_2b7.target){
_2b7.target=elem;
}
data=data==null?[_2b7]:_101.makeArray(data,[_2b7]);
_2bc=_101.event.special[type]||{};
if(!_2b8&&_2bc.trigger&&_2bc.trigger.apply(elem,data)===false){
return;
}
if(!_2b8&&!_2bc.noBubble&&!_101.isWindow(elem)){
_2bb=_2bc.delegateType||type;
if(!_29a.test(_2bb+type)){
cur=cur.parentNode;
}
for(;cur;cur=cur.parentNode){
_2bd.push(cur);
tmp=cur;
}
if(tmp===(elem.ownerDocument||_229)){
_2bd.push(tmp.defaultView||tmp.parentWindow||_f5);
}
}
i=0;
while((cur=_2bd[i++])&&!_2b7.isPropagationStopped()){
_2b7.type=i>1?_2bb:_2bc.bindType||type;
_2b9=(_101._data(cur,"events")||{})[_2b7.type]&&_101._data(cur,"handle");
if(_2b9){
_2b9.apply(cur,data);
}
_2b9=_2ba&&cur[_2ba];
if(_2b9&&_2b9.apply&&_101.acceptData(cur)){
_2b7.result=_2b9.apply(cur,data);
if(_2b7.result===false){
_2b7.preventDefault();
}
}
}
_2b7.type=type;
if(!_2b8&&!_2b7.isDefaultPrevented()){
if((!_2bc._default||_2bc._default.apply(_2bd.pop(),data)===false)&&_101.acceptData(elem)){
if(_2ba&&elem[type]&&!_101.isWindow(elem)){
tmp=elem[_2ba];
if(tmp){
elem[_2ba]=null;
}
_101.event.triggered=type;
try{
elem[type]();
}
catch(e){
}
_101.event.triggered=undefined;
if(tmp){
elem[_2ba]=tmp;
}
}
}
}
return _2b7.result;
},dispatch:function(_2bf){
_2bf=_101.event.fix(_2bf);
var i,ret,_2c0,_2c1,j,_2c2=[],args=_f8.call(arguments),_2c3=(_101._data(this,"events")||{})[_2bf.type]||[],_2c4=_101.event.special[_2bf.type]||{};
args[0]=_2bf;
_2bf.delegateTarget=this;
if(_2c4.preDispatch&&_2c4.preDispatch.call(this,_2bf)===false){
return;
}
_2c2=_101.event.handlers.call(this,_2bf,_2c3);
i=0;
while((_2c1=_2c2[i++])&&!_2bf.isPropagationStopped()){
_2bf.currentTarget=_2c1.elem;
j=0;
while((_2c0=_2c1.handlers[j++])&&!_2bf.isImmediatePropagationStopped()){
if(!_2bf.namespace_re||_2bf.namespace_re.test(_2c0.namespace)){
_2bf.handleObj=_2c0;
_2bf.data=_2c0.data;
ret=((_101.event.special[_2c0.origType]||{}).handle||_2c0.handler).apply(_2c1.elem,args);
if(ret!==undefined){
if((_2bf.result=ret)===false){
_2bf.preventDefault();
_2bf.stopPropagation();
}
}
}
}
}
if(_2c4.postDispatch){
_2c4.postDispatch.call(this,_2bf);
}
return _2bf.result;
},handlers:function(_2c5,_2c6){
var sel,_2c7,_2c8,i,_2c9=[],_2ca=_2c6.delegateCount,cur=_2c5.target;
if(_2ca&&cur.nodeType&&(!_2c5.button||_2c5.type!=="click")){
for(;cur!=this;cur=cur.parentNode||this){
if(cur.nodeType===1&&(cur.disabled!==true||_2c5.type!=="click")){
_2c8=[];
for(i=0;i<_2ca;i++){
_2c7=_2c6[i];
sel=_2c7.selector+" ";
if(_2c8[sel]===undefined){
_2c8[sel]=_2c7.needsContext?_101(sel,this).index(cur)>=0:_101.find(sel,this,null,[cur]).length;
}
if(_2c8[sel]){
_2c8.push(_2c7);
}
}
if(_2c8.length){
_2c9.push({elem:cur,handlers:_2c8});
}
}
}
}
if(_2ca<_2c6.length){
_2c9.push({elem:this,handlers:_2c6.slice(_2ca)});
}
return _2c9;
},fix:function(_2cb){
if(_2cb[_101.expando]){
return _2cb;
}
var i,prop,copy,type=_2cb.type,_2cc=_2cb,_2cd=this.fixHooks[type];
if(!_2cd){
this.fixHooks[type]=_2cd=_299.test(type)?this.mouseHooks:_298.test(type)?this.keyHooks:{};
}
copy=_2cd.props?this.props.concat(_2cd.props):this.props;
_2cb=new _101.Event(_2cc);
i=copy.length;
while(i--){
prop=copy[i];
_2cb[prop]=_2cc[prop];
}
if(!_2cb.target){
_2cb.target=_2cc.srcElement||_229;
}
if(_2cb.target.nodeType===3){
_2cb.target=_2cb.target.parentNode;
}
_2cb.metaKey=!!_2cb.metaKey;
return _2cd.filter?_2cd.filter(_2cb,_2cc):_2cb;
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(_2ce,_2cf){
if(_2ce.which==null){
_2ce.which=_2cf.charCode!=null?_2cf.charCode:_2cf.keyCode;
}
return _2ce;
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(_2d0,_2d1){
var body,_2d2,doc,_2d3=_2d1.button,_2d4=_2d1.fromElement;
if(_2d0.pageX==null&&_2d1.clientX!=null){
_2d2=_2d0.target.ownerDocument||_229;
doc=_2d2.documentElement;
body=_2d2.body;
_2d0.pageX=_2d1.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);
_2d0.pageY=_2d1.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);
}
if(!_2d0.relatedTarget&&_2d4){
_2d0.relatedTarget=_2d4===_2d0.target?_2d1.toElement:_2d4;
}
if(!_2d0.which&&_2d3!==undefined){
_2d0.which=(_2d3&1?1:(_2d3&2?3:(_2d3&4?2:0)));
}
return _2d0;
}},special:{load:{noBubble:true},focus:{trigger:function(){
if(this!==_29e()&&this.focus){
try{
this.focus();
return false;
}
catch(e){
}
}
},delegateType:"focusin"},blur:{trigger:function(){
if(this===_29e()&&this.blur){
this.blur();
return false;
}
},delegateType:"focusout"},click:{trigger:function(){
if(_101.nodeName(this,"input")&&this.type==="checkbox"&&this.click){
this.click();
return false;
}
},_default:function(_2d5){
return _101.nodeName(_2d5.target,"a");
}},beforeunload:{postDispatch:function(_2d6){
if(_2d6.result!==undefined&&_2d6.originalEvent){
_2d6.originalEvent.returnValue=_2d6.result;
}
}}},simulate:function(type,elem,_2d7,_2d8){
var e=_101.extend(new _101.Event(),_2d7,{type:type,isSimulated:true,originalEvent:{}});
if(_2d8){
_101.event.trigger(e,null,elem);
}else{
_101.event.dispatch.call(elem,e);
}
if(e.isDefaultPrevented()){
_2d7.preventDefault();
}
}};
_101.removeEvent=_229.removeEventListener?function(elem,type,_2d9){
if(elem.removeEventListener){
elem.removeEventListener(type,_2d9,false);
}
}:function(elem,type,_2da){
var name="on"+type;
if(elem.detachEvent){
if(typeof elem[name]===_26d){
elem[name]=null;
}
elem.detachEvent(name,_2da);
}
};
_101.Event=function(src,_2db){
if(!(this instanceof _101.Event)){
return new _101.Event(src,_2db);
}
if(src&&src.type){
this.originalEvent=src;
this.type=src.type;
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?_29c:_29d;
}else{
this.type=src;
}
if(_2db){
_101.extend(this,_2db);
}
this.timeStamp=src&&src.timeStamp||_101.now();
this[_101.expando]=true;
};
_101.Event.prototype={isDefaultPrevented:_29d,isPropagationStopped:_29d,isImmediatePropagationStopped:_29d,preventDefault:function(){
var e=this.originalEvent;
this.isDefaultPrevented=_29c;
if(!e){
return;
}
if(e.preventDefault){
e.preventDefault();
}else{
e.returnValue=false;
}
},stopPropagation:function(){
var e=this.originalEvent;
this.isPropagationStopped=_29c;
if(!e){
return;
}
if(e.stopPropagation){
e.stopPropagation();
}
e.cancelBubble=true;
},stopImmediatePropagation:function(){
var e=this.originalEvent;
this.isImmediatePropagationStopped=_29c;
if(e&&e.stopImmediatePropagation){
e.stopImmediatePropagation();
}
this.stopPropagation();
}};
_101.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){
_101.event.special[orig]={delegateType:fix,bindType:fix,handle:function(_2dc){
var ret,_2dd=this,_2de=_2dc.relatedTarget,_2df=_2dc.handleObj;
if(!_2de||(_2de!==_2dd&&!_101.contains(_2dd,_2de))){
_2dc.type=_2df.origType;
ret=_2df.handler.apply(this,arguments);
_2dc.type=fix;
}
return ret;
}};
});
if(!_ff.submitBubbles){
_101.event.special.submit={setup:function(){
if(_101.nodeName(this,"form")){
return false;
}
_101.event.add(this,"click._submit keypress._submit",function(e){
var elem=e.target,form=_101.nodeName(elem,"input")||_101.nodeName(elem,"button")?elem.form:undefined;
if(form&&!_101._data(form,"submitBubbles")){
_101.event.add(form,"submit._submit",function(_2e0){
_2e0._submit_bubble=true;
});
_101._data(form,"submitBubbles",true);
}
});
},postDispatch:function(_2e1){
if(_2e1._submit_bubble){
delete _2e1._submit_bubble;
if(this.parentNode&&!_2e1.isTrigger){
_101.event.simulate("submit",this.parentNode,_2e1,true);
}
}
},teardown:function(){
if(_101.nodeName(this,"form")){
return false;
}
_101.event.remove(this,"._submit");
}};
}
if(!_ff.changeBubbles){
_101.event.special.change={setup:function(){
if(_297.test(this.nodeName)){
if(this.type==="checkbox"||this.type==="radio"){
_101.event.add(this,"propertychange._change",function(_2e2){
if(_2e2.originalEvent.propertyName==="checked"){
this._just_changed=true;
}
});
_101.event.add(this,"click._change",function(_2e3){
if(this._just_changed&&!_2e3.isTrigger){
this._just_changed=false;
}
_101.event.simulate("change",this,_2e3,true);
});
}
return false;
}
_101.event.add(this,"beforeactivate._change",function(e){
var elem=e.target;
if(_297.test(elem.nodeName)&&!_101._data(elem,"changeBubbles")){
_101.event.add(elem,"change._change",function(_2e4){
if(this.parentNode&&!_2e4.isSimulated&&!_2e4.isTrigger){
_101.event.simulate("change",this.parentNode,_2e4,true);
}
});
_101._data(elem,"changeBubbles",true);
}
});
},handle:function(_2e5){
var elem=_2e5.target;
if(this!==elem||_2e5.isSimulated||_2e5.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){
return _2e5.handleObj.handler.apply(this,arguments);
}
},teardown:function(){
_101.event.remove(this,"._change");
return !_297.test(this.nodeName);
}};
}
if(!_ff.focusinBubbles){
_101.each({focus:"focusin",blur:"focusout"},function(orig,fix){
var _2e6=function(_2e7){
_101.event.simulate(fix,_2e7.target,_101.event.fix(_2e7),true);
};
_101.event.special[fix]={setup:function(){
var doc=this.ownerDocument||this,_2e8=_101._data(doc,fix);
if(!_2e8){
doc.addEventListener(orig,_2e6,true);
}
_101._data(doc,fix,(_2e8||0)+1);
},teardown:function(){
var doc=this.ownerDocument||this,_2e9=_101._data(doc,fix)-1;
if(!_2e9){
doc.removeEventListener(orig,_2e6,true);
_101._removeData(doc,fix);
}else{
_101._data(doc,fix,_2e9);
}
}};
});
}
_101.fn.extend({on:function(_2ea,_2eb,data,fn,one){
var type,_2ec;
if(typeof _2ea==="object"){
if(typeof _2eb!=="string"){
data=data||_2eb;
_2eb=undefined;
}
for(type in _2ea){
this.on(type,_2eb,data,_2ea[type],one);
}
return this;
}
if(data==null&&fn==null){
fn=_2eb;
data=_2eb=undefined;
}else{
if(fn==null){
if(typeof _2eb==="string"){
fn=data;
data=undefined;
}else{
fn=data;
data=_2eb;
_2eb=undefined;
}
}
}
if(fn===false){
fn=_29d;
}else{
if(!fn){
return this;
}
}
if(one===1){
_2ec=fn;
fn=function(_2ed){
_101().off(_2ed);
return _2ec.apply(this,arguments);
};
fn.guid=_2ec.guid||(_2ec.guid=_101.guid++);
}
return this.each(function(){
_101.event.add(this,_2ea,fn,data,_2eb);
});
},one:function(_2ee,_2ef,data,fn){
return this.on(_2ee,_2ef,data,fn,1);
},off:function(_2f0,_2f1,fn){
var _2f2,type;
if(_2f0&&_2f0.preventDefault&&_2f0.handleObj){
_2f2=_2f0.handleObj;
_101(_2f0.delegateTarget).off(_2f2.namespace?_2f2.origType+"."+_2f2.namespace:_2f2.origType,_2f2.selector,_2f2.handler);
return this;
}
if(typeof _2f0==="object"){
for(type in _2f0){
this.off(type,_2f1,_2f0[type]);
}
return this;
}
if(_2f1===false||typeof _2f1==="function"){
fn=_2f1;
_2f1=undefined;
}
if(fn===false){
fn=_29d;
}
return this.each(function(){
_101.event.remove(this,_2f0,fn,_2f1);
});
},trigger:function(type,data){
return this.each(function(){
_101.event.trigger(type,data,this);
});
},triggerHandler:function(type,data){
var elem=this[0];
if(elem){
return _101.event.trigger(type,data,elem,true);
}
}});
function _2f3(_2f4){
var list=_2f5.split("|"),_2f6=_2f4.createDocumentFragment();
if(_2f6.createElement){
while(list.length){
_2f6.createElement(list.pop());
}
}
return _2f6;
};
var _2f5="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",_2f7=/ jQuery\d+="(?:null|\d+)"/g,_2f8=new RegExp("<(?:"+_2f5+")[\\s/>]","i"),_2f9=/^\s+/,_2fa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,_2fb=/<([\w:]+)/,_2fc=/<tbody/i,_2fd=/<|&#?\w+;/,_2fe=/<(?:script|style|link)/i,_2ff=/checked\s*(?:[^=]|=\s*.checked.)/i,_300=/^$|\/(?:java|ecma)script/i,_301=/^true\/(.*)/,_302=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,_303={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:_ff.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},_304=_2f3(_229),_305=_304.appendChild(_229.createElement("div"));
_303.optgroup=_303.option;
_303.tbody=_303.tfoot=_303.colgroup=_303.caption=_303.thead;
_303.th=_303.td;
function _306(_307,tag){
var _308,elem,i=0,_309=typeof _307.getElementsByTagName!==_26d?_307.getElementsByTagName(tag||"*"):typeof _307.querySelectorAll!==_26d?_307.querySelectorAll(tag||"*"):undefined;
if(!_309){
for(_309=[],_308=_307.childNodes||_307;(elem=_308[i])!=null;i++){
if(!tag||_101.nodeName(elem,tag)){
_309.push(elem);
}else{
_101.merge(_309,_306(elem,tag));
}
}
}
return tag===undefined||tag&&_101.nodeName(_307,tag)?_101.merge([_307],_309):_309;
};
function _30a(elem){
if(_293.test(elem.type)){
elem.defaultChecked=elem.checked;
}
};
function _30b(elem,_30c){
return _101.nodeName(elem,"table")&&_101.nodeName(_30c.nodeType!==11?_30c:_30c.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;
};
function _30d(elem){
elem.type=(_101.find.attr(elem,"type")!==null)+"/"+elem.type;
return elem;
};
function _30e(elem){
var _30f=_301.exec(elem.type);
if(_30f){
elem.type=_30f[1];
}else{
elem.removeAttribute("type");
}
return elem;
};
function _310(_311,_312){
var elem,i=0;
for(;(elem=_311[i])!=null;i++){
_101._data(elem,"globalEval",!_312||_101._data(_312[i],"globalEval"));
}
};
function _313(src,dest){
if(dest.nodeType!==1||!_101.hasData(src)){
return;
}
var type,i,l,_314=_101._data(src),_315=_101._data(dest,_314),_316=_314.events;
if(_316){
delete _315.handle;
_315.events={};
for(type in _316){
for(i=0,l=_316[type].length;i<l;i++){
_101.event.add(dest,type,_316[type][i]);
}
}
}
if(_315.data){
_315.data=_101.extend({},_315.data);
}
};
function _317(src,dest){
var _318,e,data;
if(dest.nodeType!==1){
return;
}
_318=dest.nodeName.toLowerCase();
if(!_ff.noCloneEvent&&dest[_101.expando]){
data=_101._data(dest);
for(e in data.events){
_101.removeEvent(dest,e,data.handle);
}
dest.removeAttribute(_101.expando);
}
if(_318==="script"&&dest.text!==src.text){
_30d(dest).text=src.text;
_30e(dest);
}else{
if(_318==="object"){
if(dest.parentNode){
dest.outerHTML=src.outerHTML;
}
if(_ff.html5Clone&&(src.innerHTML&&!_101.trim(dest.innerHTML))){
dest.innerHTML=src.innerHTML;
}
}else{
if(_318==="input"&&_293.test(src.type)){
dest.defaultChecked=dest.checked=src.checked;
if(dest.value!==src.value){
dest.value=src.value;
}
}else{
if(_318==="option"){
dest.defaultSelected=dest.selected=src.defaultSelected;
}else{
if(_318==="input"||_318==="textarea"){
dest.defaultValue=src.defaultValue;
}
}
}
}
}
};
_101.extend({clone:function(elem,_319,_31a){
var _31b,node,_31c,i,_31d,_31e=_101.contains(elem.ownerDocument,elem);
if(_ff.html5Clone||_101.isXMLDoc(elem)||!_2f8.test("<"+elem.nodeName+">")){
_31c=elem.cloneNode(true);
}else{
_305.innerHTML=elem.outerHTML;
_305.removeChild(_31c=_305.firstChild);
}
if((!_ff.noCloneEvent||!_ff.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!_101.isXMLDoc(elem)){
_31b=_306(_31c);
_31d=_306(elem);
for(i=0;(node=_31d[i])!=null;++i){
if(_31b[i]){
_317(node,_31b[i]);
}
}
}
if(_319){
if(_31a){
_31d=_31d||_306(elem);
_31b=_31b||_306(_31c);
for(i=0;(node=_31d[i])!=null;i++){
_313(node,_31b[i]);
}
}else{
_313(elem,_31c);
}
}
_31b=_306(_31c,"script");
if(_31b.length>0){
_310(_31b,!_31e&&_306(elem,"script"));
}
_31b=_31d=node=null;
return _31c;
},buildFragment:function(_31f,_320,_321,_322){
var j,elem,_323,tmp,tag,_324,wrap,l=_31f.length,safe=_2f3(_320),_325=[],i=0;
for(;i<l;i++){
elem=_31f[i];
if(elem||elem===0){
if(_101.type(elem)==="object"){
_101.merge(_325,elem.nodeType?[elem]:elem);
}else{
if(!_2fd.test(elem)){
_325.push(_320.createTextNode(elem));
}else{
tmp=tmp||safe.appendChild(_320.createElement("div"));
tag=(_2fb.exec(elem)||["",""])[1].toLowerCase();
wrap=_303[tag]||_303._default;
tmp.innerHTML=wrap[1]+elem.replace(_2fa,"<$1></$2>")+wrap[2];
j=wrap[0];
while(j--){
tmp=tmp.lastChild;
}
if(!_ff.leadingWhitespace&&_2f9.test(elem)){
_325.push(_320.createTextNode(_2f9.exec(elem)[0]));
}
if(!_ff.tbody){
elem=tag==="table"&&!_2fc.test(elem)?tmp.firstChild:wrap[1]==="<table>"&&!_2fc.test(elem)?tmp:0;
j=elem&&elem.childNodes.length;
while(j--){
if(_101.nodeName((_324=elem.childNodes[j]),"tbody")&&!_324.childNodes.length){
elem.removeChild(_324);
}
}
}
_101.merge(_325,tmp.childNodes);
tmp.textContent="";
while(tmp.firstChild){
tmp.removeChild(tmp.firstChild);
}
tmp=safe.lastChild;
}
}
}
}
if(tmp){
safe.removeChild(tmp);
}
if(!_ff.appendChecked){
_101.grep(_306(_325,"input"),_30a);
}
i=0;
while((elem=_325[i++])){
if(_322&&_101.inArray(elem,_322)!==-1){
continue;
}
_323=_101.contains(elem.ownerDocument,elem);
tmp=_306(safe.appendChild(elem),"script");
if(_323){
_310(tmp);
}
if(_321){
j=0;
while((elem=tmp[j++])){
if(_300.test(elem.type||"")){
_321.push(elem);
}
}
}
}
tmp=null;
return safe;
},cleanData:function(_326,_327){
var elem,type,id,data,i=0,_328=_101.expando,_329=_101.cache,_32a=_ff.deleteExpando,_32b=_101.event.special;
for(;(elem=_326[i])!=null;i++){
if(_327||_101.acceptData(elem)){
id=elem[_328];
data=id&&_329[id];
if(data){
if(data.events){
for(type in data.events){
if(_32b[type]){
_101.event.remove(elem,type);
}else{
_101.removeEvent(elem,type,data.handle);
}
}
}
if(_329[id]){
delete _329[id];
if(_32a){
delete elem[_328];
}else{
if(typeof elem.removeAttribute!==_26d){
elem.removeAttribute(_328);
}else{
elem[_328]=null;
}
}
_f7.push(id);
}
}
}
}
}});
_101.fn.extend({text:function(_32c){
return _28c(this,function(_32d){
return _32d===undefined?_101.text(this):this.empty().append((this[0]&&this[0].ownerDocument||_229).createTextNode(_32d));
},null,_32c,arguments.length);
},append:function(){
return this.domManip(arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var _32e=_30b(this,elem);
_32e.appendChild(elem);
}
});
},prepend:function(){
return this.domManip(arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var _32f=_30b(this,elem);
_32f.insertBefore(elem,_32f.firstChild);
}
});
},before:function(){
return this.domManip(arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this);
}
});
},after:function(){
return this.domManip(arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this.nextSibling);
}
});
},remove:function(_330,_331){
var elem,_332=_330?_101.filter(_330,this):this,i=0;
for(;(elem=_332[i])!=null;i++){
if(!_331&&elem.nodeType===1){
_101.cleanData(_306(elem));
}
if(elem.parentNode){
if(_331&&_101.contains(elem.ownerDocument,elem)){
_310(_306(elem,"script"));
}
elem.parentNode.removeChild(elem);
}
}
return this;
},empty:function(){
var elem,i=0;
for(;(elem=this[i])!=null;i++){
if(elem.nodeType===1){
_101.cleanData(_306(elem,false));
}
while(elem.firstChild){
elem.removeChild(elem.firstChild);
}
if(elem.options&&_101.nodeName(elem,"select")){
elem.options.length=0;
}
}
return this;
},clone:function(_333,_334){
_333=_333==null?false:_333;
_334=_334==null?_333:_334;
return this.map(function(){
return _101.clone(this,_333,_334);
});
},html:function(_335){
return _28c(this,function(_336){
var elem=this[0]||{},i=0,l=this.length;
if(_336===undefined){
return elem.nodeType===1?elem.innerHTML.replace(_2f7,""):undefined;
}
if(typeof _336==="string"&&!_2fe.test(_336)&&(_ff.htmlSerialize||!_2f8.test(_336))&&(_ff.leadingWhitespace||!_2f9.test(_336))&&!_303[(_2fb.exec(_336)||["",""])[1].toLowerCase()]){
_336=_336.replace(_2fa,"<$1></$2>");
try{
for(;i<l;i++){
elem=this[i]||{};
if(elem.nodeType===1){
_101.cleanData(_306(elem,false));
elem.innerHTML=_336;
}
}
elem=0;
}
catch(e){
}
}
if(elem){
this.empty().append(_336);
}
},null,_335,arguments.length);
},replaceWith:function(){
var arg=arguments[0];
this.domManip(arguments,function(elem){
arg=this.parentNode;
_101.cleanData(_306(this));
if(arg){
arg.replaceChild(elem,this);
}
});
return arg&&(arg.length||arg.nodeType)?this:this.remove();
},detach:function(_337){
return this.remove(_337,true);
},domManip:function(args,_338){
args=_f9.apply([],args);
var _339,node,_33a,_33b,doc,_33c,i=0,l=this.length,set=this,_33d=l-1,_33e=args[0],_33f=_101.isFunction(_33e);
if(_33f||(l>1&&typeof _33e==="string"&&!_ff.checkClone&&_2ff.test(_33e))){
return this.each(function(_340){
var self=set.eq(_340);
if(_33f){
args[0]=_33e.call(this,_340,self.html());
}
self.domManip(args,_338);
});
}
if(l){
_33c=_101.buildFragment(args,this[0].ownerDocument,false,this);
_339=_33c.firstChild;
if(_33c.childNodes.length===1){
_33c=_339;
}
if(_339){
_33b=_101.map(_306(_33c,"script"),_30d);
_33a=_33b.length;
for(;i<l;i++){
node=_33c;
if(i!==_33d){
node=_101.clone(node,true,true);
if(_33a){
_101.merge(_33b,_306(node,"script"));
}
}
_338.call(this[i],node,i);
}
if(_33a){
doc=_33b[_33b.length-1].ownerDocument;
_101.map(_33b,_30e);
for(i=0;i<_33a;i++){
node=_33b[i];
if(_300.test(node.type||"")&&!_101._data(node,"globalEval")&&_101.contains(doc,node)){
if(node.src){
if(_101._evalUrl){
_101._evalUrl(node.src);
}
}else{
_101.globalEval((node.text||node.textContent||node.innerHTML||"").replace(_302,""));
}
}
}
}
_33c=_339=null;
}
}
return this;
}});
_101.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,_341){
_101.fn[name]=function(_342){
var _343,i=0,ret=[],_344=_101(_342),last=_344.length-1;
for(;i<=last;i++){
_343=i===last?this:this.clone(true);
_101(_344[i])[_341](_343);
_fa.apply(ret,_343.get());
}
return this.pushStack(ret);
};
});
var _345,_346={};
function _347(name,doc){
var _348,elem=_101(doc.createElement(name)).appendTo(doc.body),_349=_f5.getDefaultComputedStyle&&(_348=_f5.getDefaultComputedStyle(elem[0]))?_348.display:_101.css(elem[0],"display");
elem.detach();
return _349;
};
function _34a(_34b){
var doc=_229,_34c=_346[_34b];
if(!_34c){
_34c=_347(_34b,doc);
if(_34c==="none"||!_34c){
_345=(_345||_101("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
doc=(_345[0].contentWindow||_345[0].contentDocument).document;
doc.write();
doc.close();
_34c=_347(_34b,doc);
_345.detach();
}
_346[_34b]=_34c;
}
return _34c;
};
(function(){
var _34d;
_ff.shrinkWrapBlocks=function(){
if(_34d!=null){
return _34d;
}
_34d=false;
var div,body,_34e;
body=_229.getElementsByTagName("body")[0];
if(!body||!body.style){
return;
}
div=_229.createElement("div");
_34e=_229.createElement("div");
_34e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
body.appendChild(_34e).appendChild(div);
if(typeof div.style.zoom!==_26d){
div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;"+"padding:1px;width:1px;zoom:1";
div.appendChild(_229.createElement("div")).style.width="5px";
_34d=div.offsetWidth!==3;
}
body.removeChild(_34e);
return _34d;
};
})();
var _34f=(/^margin/);
var _350=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");
var _351,_352,_353=/^(top|right|bottom|left)$/;
if(_f5.getComputedStyle){
_351=function(elem){
if(elem.ownerDocument.defaultView.opener){
return elem.ownerDocument.defaultView.getComputedStyle(elem,null);
}
return _f5.getComputedStyle(elem,null);
};
_352=function(elem,name,_354){
var _355,_356,_357,ret,_358=elem.style;
_354=_354||_351(elem);
ret=_354?_354.getPropertyValue(name)||_354[name]:undefined;
if(_354){
if(ret===""&&!_101.contains(elem.ownerDocument,elem)){
ret=_101.style(elem,name);
}
if(_350.test(ret)&&_34f.test(name)){
_355=_358.width;
_356=_358.minWidth;
_357=_358.maxWidth;
_358.minWidth=_358.maxWidth=_358.width=ret;
ret=_354.width;
_358.width=_355;
_358.minWidth=_356;
_358.maxWidth=_357;
}
}
return ret===undefined?ret:ret+"";
};
}else{
if(_229.documentElement.currentStyle){
_351=function(elem){
return elem.currentStyle;
};
_352=function(elem,name,_359){
var left,rs,_35a,ret,_35b=elem.style;
_359=_359||_351(elem);
ret=_359?_359[name]:undefined;
if(ret==null&&_35b&&_35b[name]){
ret=_35b[name];
}
if(_350.test(ret)&&!_353.test(name)){
left=_35b.left;
rs=elem.runtimeStyle;
_35a=rs&&rs.left;
if(_35a){
rs.left=elem.currentStyle.left;
}
_35b.left=name==="fontSize"?"1em":ret;
ret=_35b.pixelLeft+"px";
_35b.left=left;
if(_35a){
rs.left=_35a;
}
}
return ret===undefined?ret:ret+""||"auto";
};
}
}
function _35c(_35d,_35e){
return {get:function(){
var _35f=_35d();
if(_35f==null){
return;
}
if(_35f){
delete this.get;
return;
}
return (this.get=_35e).apply(this,arguments);
}};
};
(function(){
var div,_360,a,_361,_362,_363,_364;
div=_229.createElement("div");
div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
a=div.getElementsByTagName("a")[0];
_360=a&&a.style;
if(!_360){
return;
}
_360.cssText="float:left;opacity:.5";
_ff.opacity=_360.opacity==="0.5";
_ff.cssFloat=!!_360.cssFloat;
div.style.backgroundClip="content-box";
div.cloneNode(true).style.backgroundClip="";
_ff.clearCloneStyle=div.style.backgroundClip==="content-box";
_ff.boxSizing=_360.boxSizing===""||_360.MozBoxSizing===""||_360.WebkitBoxSizing==="";
_101.extend(_ff,{reliableHiddenOffsets:function(){
if(_363==null){
_365();
}
return _363;
},boxSizingReliable:function(){
if(_362==null){
_365();
}
return _362;
},pixelPosition:function(){
if(_361==null){
_365();
}
return _361;
},reliableMarginRight:function(){
if(_364==null){
_365();
}
return _364;
}});
function _365(){
var div,body,_366,_367;
body=_229.getElementsByTagName("body")[0];
if(!body||!body.style){
return;
}
div=_229.createElement("div");
_366=_229.createElement("div");
_366.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
body.appendChild(_366).appendChild(div);
div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;display:block;margin-top:1%;top:1%;"+"border:1px;padding:1px;width:4px;position:absolute";
_361=_362=false;
_364=true;
if(_f5.getComputedStyle){
_361=(_f5.getComputedStyle(div,null)||{}).top!=="1%";
_362=(_f5.getComputedStyle(div,null)||{width:"4px"}).width==="4px";
_367=div.appendChild(_229.createElement("div"));
_367.style.cssText=div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
_367.style.marginRight=_367.style.width="0";
div.style.width="1px";
_364=!parseFloat((_f5.getComputedStyle(_367,null)||{}).marginRight);
div.removeChild(_367);
}
div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
_367=div.getElementsByTagName("td");
_367[0].style.cssText="margin:0;border:0;padding:0;display:none";
_363=_367[0].offsetHeight===0;
if(_363){
_367[0].style.display="";
_367[1].style.display="none";
_363=_367[0].offsetHeight===0;
}
body.removeChild(_366);
};
})();
_101.swap=function(elem,_368,_369,args){
var ret,name,old={};
for(name in _368){
old[name]=elem.style[name];
elem.style[name]=_368[name];
}
ret=_369.apply(elem,args||[]);
for(name in _368){
elem.style[name]=old[name];
}
return ret;
};
var _36a=/alpha\([^)]*\)/i,_36b=/opacity\s*=\s*([^)]*)/,_36c=/^(none|table(?!-c[ea]).+)/,_36d=new RegExp("^("+pnum+")(.*)$","i"),_36e=new RegExp("^([+-])=("+pnum+")","i"),_36f={position:"absolute",visibility:"hidden",display:"block"},_370={letterSpacing:"0",fontWeight:"400"},_371=["Webkit","O","Moz","ms"];
function _372(_373,name){
if(name in _373){
return name;
}
var _374=name.charAt(0).toUpperCase()+name.slice(1),_375=name,i=_371.length;
while(i--){
name=_371[i]+_374;
if(name in _373){
return name;
}
}
return _375;
};
function _376(_377,show){
var _378,elem,_379,_37a=[],_37b=0,_37c=_377.length;
for(;_37b<_37c;_37b++){
elem=_377[_37b];
if(!elem.style){
continue;
}
_37a[_37b]=_101._data(elem,"olddisplay");
_378=elem.style.display;
if(show){
if(!_37a[_37b]&&_378==="none"){
elem.style.display="";
}
if(elem.style.display===""&&_28b(elem)){
_37a[_37b]=_101._data(elem,"olddisplay",_34a(elem.nodeName));
}
}else{
_379=_28b(elem);
if(_378&&_378!=="none"||!_379){
_101._data(elem,"olddisplay",_379?_378:_101.css(elem,"display"));
}
}
}
for(_37b=0;_37b<_37c;_37b++){
elem=_377[_37b];
if(!elem.style){
continue;
}
if(!show||elem.style.display==="none"||elem.style.display===""){
elem.style.display=show?_37a[_37b]||"":"none";
}
}
return _377;
};
function _37d(elem,_37e,_37f){
var _380=_36d.exec(_37e);
return _380?Math.max(0,_380[1]-(_37f||0))+(_380[2]||"px"):_37e;
};
function _381(elem,name,_382,_383,_384){
var i=_382===(_383?"border":"content")?4:name==="width"?1:0,val=0;
for(;i<4;i+=2){
if(_382==="margin"){
val+=_101.css(elem,_382+_28a[i],true,_384);
}
if(_383){
if(_382==="content"){
val-=_101.css(elem,"padding"+_28a[i],true,_384);
}
if(_382!=="margin"){
val-=_101.css(elem,"border"+_28a[i]+"Width",true,_384);
}
}else{
val+=_101.css(elem,"padding"+_28a[i],true,_384);
if(_382!=="padding"){
val+=_101.css(elem,"border"+_28a[i]+"Width",true,_384);
}
}
}
return val;
};
function _385(elem,name,_386){
var _387=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,_388=_351(elem),_389=_ff.boxSizing&&_101.css(elem,"boxSizing",false,_388)==="border-box";
if(val<=0||val==null){
val=_352(elem,name,_388);
if(val<0||val==null){
val=elem.style[name];
}
if(_350.test(val)){
return val;
}
_387=_389&&(_ff.boxSizingReliable()||val===elem.style[name]);
val=parseFloat(val)||0;
}
return (val+_381(elem,name,_386||(_389?"border":"content"),_387,_388))+"px";
};
_101.extend({cssHooks:{opacity:{get:function(elem,_38a){
if(_38a){
var ret=_352(elem,"opacity");
return ret===""?"1":ret;
}
}}},cssNumber:{"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":_ff.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,_38b,_38c){
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){
return;
}
var ret,type,_38d,_38e=_101.camelCase(name),_38f=elem.style;
name=_101.cssProps[_38e]||(_101.cssProps[_38e]=_372(_38f,_38e));
_38d=_101.cssHooks[name]||_101.cssHooks[_38e];
if(_38b!==undefined){
type=typeof _38b;
if(type==="string"&&(ret=_36e.exec(_38b))){
_38b=(ret[1]+1)*ret[2]+parseFloat(_101.css(elem,name));
type="number";
}
if(_38b==null||_38b!==_38b){
return;
}
if(type==="number"&&!_101.cssNumber[_38e]){
_38b+="px";
}
if(!_ff.clearCloneStyle&&_38b===""&&name.indexOf("background")===0){
_38f[name]="inherit";
}
if(!_38d||!("set" in _38d)||(_38b=_38d.set(elem,_38b,_38c))!==undefined){
try{
_38f[name]=_38b;
}
catch(e){
}
}
}else{
if(_38d&&"get" in _38d&&(ret=_38d.get(elem,false,_38c))!==undefined){
return ret;
}
return _38f[name];
}
},css:function(elem,name,_390,_391){
var num,val,_392,_393=_101.camelCase(name);
name=_101.cssProps[_393]||(_101.cssProps[_393]=_372(elem.style,_393));
_392=_101.cssHooks[name]||_101.cssHooks[_393];
if(_392&&"get" in _392){
val=_392.get(elem,true,_390);
}
if(val===undefined){
val=_352(elem,name,_391);
}
if(val==="normal"&&name in _370){
val=_370[name];
}
if(_390===""||_390){
num=parseFloat(val);
return _390===true||_101.isNumeric(num)?num||0:val;
}
return val;
}});
_101.each(["height","width"],function(i,name){
_101.cssHooks[name]={get:function(elem,_394,_395){
if(_394){
return _36c.test(_101.css(elem,"display"))&&elem.offsetWidth===0?_101.swap(elem,_36f,function(){
return _385(elem,name,_395);
}):_385(elem,name,_395);
}
},set:function(elem,_396,_397){
var _398=_397&&_351(elem);
return _37d(elem,_396,_397?_381(elem,name,_397,_ff.boxSizing&&_101.css(elem,"boxSizing",false,_398)==="border-box",_398):0);
}};
});
if(!_ff.opacity){
_101.cssHooks.opacity={get:function(elem,_399){
return _36b.test((_399&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":_399?"1":"";
},set:function(elem,_39a){
var _39b=elem.style,_39c=elem.currentStyle,_39d=_101.isNumeric(_39a)?"alpha(opacity="+_39a*100+")":"",_39e=_39c&&_39c.filter||_39b.filter||"";
_39b.zoom=1;
if((_39a>=1||_39a==="")&&_101.trim(_39e.replace(_36a,""))===""&&_39b.removeAttribute){
_39b.removeAttribute("filter");
if(_39a===""||_39c&&!_39c.filter){
return;
}
}
_39b.filter=_36a.test(_39e)?_39e.replace(_36a,_39d):_39e+" "+_39d;
}};
}
_101.cssHooks.marginRight=_35c(_ff.reliableMarginRight,function(elem,_39f){
if(_39f){
return _101.swap(elem,{"display":"inline-block"},_352,[elem,"marginRight"]);
}
});
_101.each({margin:"",padding:"",border:"Width"},function(_3a0,_3a1){
_101.cssHooks[_3a0+_3a1]={expand:function(_3a2){
var i=0,_3a3={},_3a4=typeof _3a2==="string"?_3a2.split(" "):[_3a2];
for(;i<4;i++){
_3a3[_3a0+_28a[i]+_3a1]=_3a4[i]||_3a4[i-2]||_3a4[0];
}
return _3a3;
}};
if(!_34f.test(_3a0)){
_101.cssHooks[_3a0+_3a1].set=_37d;
}
});
_101.fn.extend({css:function(name,_3a5){
return _28c(this,function(elem,name,_3a6){
var _3a7,len,map={},i=0;
if(_101.isArray(name)){
_3a7=_351(elem);
len=name.length;
for(;i<len;i++){
map[name[i]]=_101.css(elem,name[i],false,_3a7);
}
return map;
}
return _3a6!==undefined?_101.style(elem,name,_3a6):_101.css(elem,name);
},name,_3a5,arguments.length>1);
},show:function(){
return _376(this,true);
},hide:function(){
return _376(this);
},toggle:function(_3a8){
if(typeof _3a8==="boolean"){
return _3a8?this.show():this.hide();
}
return this.each(function(){
if(_28b(this)){
_101(this).show();
}else{
_101(this).hide();
}
});
}});
function _3a9(elem,_3aa,prop,end,_3ab){
return new _3a9.prototype.init(elem,_3aa,prop,end,_3ab);
};
_101.Tween=_3a9;
_3a9.prototype={constructor:_3a9,init:function(elem,_3ac,prop,end,_3ad,unit){
this.elem=elem;
this.prop=prop;
this.easing=_3ad||"swing";
this.options=_3ac;
this.start=this.now=this.cur();
this.end=end;
this.unit=unit||(_101.cssNumber[prop]?"":"px");
},cur:function(){
var _3ae=_3a9.propHooks[this.prop];
return _3ae&&_3ae.get?_3ae.get(this):_3a9.propHooks._default.get(this);
},run:function(_3af){
var _3b0,_3b1=_3a9.propHooks[this.prop];
if(this.options.duration){
this.pos=_3b0=_101.easing[this.easing](_3af,this.options.duration*_3af,0,1,this.options.duration);
}else{
this.pos=_3b0=_3af;
}
this.now=(this.end-this.start)*_3b0+this.start;
if(this.options.step){
this.options.step.call(this.elem,this.now,this);
}
if(_3b1&&_3b1.set){
_3b1.set(this);
}else{
_3a9.propHooks._default.set(this);
}
return this;
}};
_3a9.prototype.init.prototype=_3a9.prototype;
_3a9.propHooks={_default:{get:function(_3b2){
var _3b3;
if(_3b2.elem[_3b2.prop]!=null&&(!_3b2.elem.style||_3b2.elem.style[_3b2.prop]==null)){
return _3b2.elem[_3b2.prop];
}
_3b3=_101.css(_3b2.elem,_3b2.prop,"");
return !_3b3||_3b3==="auto"?0:_3b3;
},set:function(_3b4){
if(_101.fx.step[_3b4.prop]){
_101.fx.step[_3b4.prop](_3b4);
}else{
if(_3b4.elem.style&&(_3b4.elem.style[_101.cssProps[_3b4.prop]]!=null||_101.cssHooks[_3b4.prop])){
_101.style(_3b4.elem,_3b4.prop,_3b4.now+_3b4.unit);
}else{
_3b4.elem[_3b4.prop]=_3b4.now;
}
}
}}};
_3a9.propHooks.scrollTop=_3a9.propHooks.scrollLeft={set:function(_3b5){
if(_3b5.elem.nodeType&&_3b5.elem.parentNode){
_3b5.elem[_3b5.prop]=_3b5.now;
}
}};
_101.easing={linear:function(p){
return p;
},swing:function(p){
return 0.5-Math.cos(p*Math.PI)/2;
}};
_101.fx=_3a9.prototype.init;
_101.fx.step={};
var _3b6,_3b7,_3b8=/^(?:toggle|show|hide)$/,_3b9=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,_3ba=[_3bb],_3bc={"*":[function(prop,_3bd){
var _3be=this.createTween(prop,_3bd),_3bf=_3be.cur(),_3c0=_3b9.exec(_3bd),unit=_3c0&&_3c0[3]||(_101.cssNumber[prop]?"":"px"),_3c1=(_101.cssNumber[prop]||unit!=="px"&&+_3bf)&&_3b9.exec(_101.css(_3be.elem,prop)),_3c2=1,_3c3=20;
if(_3c1&&_3c1[3]!==unit){
unit=unit||_3c1[3];
_3c0=_3c0||[];
_3c1=+_3bf||1;
do{
_3c2=_3c2||".5";
_3c1=_3c1/_3c2;
_101.style(_3be.elem,prop,_3c1+unit);
}while(_3c2!==(_3c2=_3be.cur()/_3bf)&&_3c2!==1&&--_3c3);
}
if(_3c0){
_3c1=_3be.start=+_3c1||+_3bf||0;
_3be.unit=unit;
_3be.end=_3c0[1]?_3c1+(_3c0[1]+1)*_3c0[2]:+_3c0[2];
}
return _3be;
}]};
function _3c4(){
setTimeout(function(){
_3b6=undefined;
});
return (_3b6=_101.now());
};
function _3c5(type,_3c6){
var _3c7,_3c8={height:type},i=0;
_3c6=_3c6?1:0;
for(;i<4;i+=2-_3c6){
_3c7=_28a[i];
_3c8["margin"+_3c7]=_3c8["padding"+_3c7]=type;
}
if(_3c6){
_3c8.opacity=_3c8.width=type;
}
return _3c8;
};
function _3c9(_3ca,prop,_3cb){
var _3cc,_3cd=(_3bc[prop]||[]).concat(_3bc["*"]),_3ce=0,_3cf=_3cd.length;
for(;_3ce<_3cf;_3ce++){
if((_3cc=_3cd[_3ce].call(_3cb,prop,_3ca))){
return _3cc;
}
}
};
function _3bb(elem,_3d0,opts){
var prop,_3d1,_3d2,_3d3,_3d4,_3d5,_3d6,_3d7,anim=this,orig={},_3d8=elem.style,_3d9=elem.nodeType&&_28b(elem),_3da=_101._data(elem,"fxshow");
if(!opts.queue){
_3d4=_101._queueHooks(elem,"fx");
if(_3d4.unqueued==null){
_3d4.unqueued=0;
_3d5=_3d4.empty.fire;
_3d4.empty.fire=function(){
if(!_3d4.unqueued){
_3d5();
}
};
}
_3d4.unqueued++;
anim.always(function(){
anim.always(function(){
_3d4.unqueued--;
if(!_101.queue(elem,"fx").length){
_3d4.empty.fire();
}
});
});
}
if(elem.nodeType===1&&("height" in _3d0||"width" in _3d0)){
opts.overflow=[_3d8.overflow,_3d8.overflowX,_3d8.overflowY];
_3d6=_101.css(elem,"display");
_3d7=_3d6==="none"?_101._data(elem,"olddisplay")||_34a(elem.nodeName):_3d6;
if(_3d7==="inline"&&_101.css(elem,"float")==="none"){
if(!_ff.inlineBlockNeedsLayout||_34a(elem.nodeName)==="inline"){
_3d8.display="inline-block";
}else{
_3d8.zoom=1;
}
}
}
if(opts.overflow){
_3d8.overflow="hidden";
if(!_ff.shrinkWrapBlocks()){
anim.always(function(){
_3d8.overflow=opts.overflow[0];
_3d8.overflowX=opts.overflow[1];
_3d8.overflowY=opts.overflow[2];
});
}
}
for(prop in _3d0){
_3d1=_3d0[prop];
if(_3b8.exec(_3d1)){
delete _3d0[prop];
_3d2=_3d2||_3d1==="toggle";
if(_3d1===(_3d9?"hide":"show")){
if(_3d1==="show"&&_3da&&_3da[prop]!==undefined){
_3d9=true;
}else{
continue;
}
}
orig[prop]=_3da&&_3da[prop]||_101.style(elem,prop);
}else{
_3d6=undefined;
}
}
if(!_101.isEmptyObject(orig)){
if(_3da){
if("hidden" in _3da){
_3d9=_3da.hidden;
}
}else{
_3da=_101._data(elem,"fxshow",{});
}
if(_3d2){
_3da.hidden=!_3d9;
}
if(_3d9){
_101(elem).show();
}else{
anim.done(function(){
_101(elem).hide();
});
}
anim.done(function(){
var prop;
_101._removeData(elem,"fxshow");
for(prop in orig){
_101.style(elem,prop,orig[prop]);
}
});
for(prop in orig){
_3d3=_3c9(_3d9?_3da[prop]:0,prop,anim);
if(!(prop in _3da)){
_3da[prop]=_3d3.start;
if(_3d9){
_3d3.end=_3d3.start;
_3d3.start=prop==="width"||prop==="height"?1:0;
}
}
}
}else{
if((_3d6==="none"?_34a(elem.nodeName):_3d6)==="inline"){
_3d8.display=_3d6;
}
}
};
function _3db(_3dc,_3dd){
var _3de,name,_3df,_3e0,_3e1;
for(_3de in _3dc){
name=_101.camelCase(_3de);
_3df=_3dd[name];
_3e0=_3dc[_3de];
if(_101.isArray(_3e0)){
_3df=_3e0[1];
_3e0=_3dc[_3de]=_3e0[0];
}
if(_3de!==name){
_3dc[name]=_3e0;
delete _3dc[_3de];
}
_3e1=_101.cssHooks[name];
if(_3e1&&"expand" in _3e1){
_3e0=_3e1.expand(_3e0);
delete _3dc[name];
for(_3de in _3e0){
if(!(_3de in _3dc)){
_3dc[_3de]=_3e0[_3de];
_3dd[_3de]=_3df;
}
}
}else{
_3dd[name]=_3df;
}
}
};
function _3e2(elem,_3e3,_3e4){
var _3e5,_3e6,_3e7=0,_3e8=_3ba.length,_3e9=_101.Deferred().always(function(){
delete tick.elem;
}),tick=function(){
if(_3e6){
return false;
}
var _3ea=_3b6||_3c4(),_3eb=Math.max(0,_3ec.startTime+_3ec.duration-_3ea),temp=_3eb/_3ec.duration||0,_3ed=1-temp,_3e7=0,_3e8=_3ec.tweens.length;
for(;_3e7<_3e8;_3e7++){
_3ec.tweens[_3e7].run(_3ed);
}
_3e9.notifyWith(elem,[_3ec,_3ed,_3eb]);
if(_3ed<1&&_3e8){
return _3eb;
}else{
_3e9.resolveWith(elem,[_3ec]);
return false;
}
},_3ec=_3e9.promise({elem:elem,props:_101.extend({},_3e3),opts:_101.extend(true,{specialEasing:{}},_3e4),originalProperties:_3e3,originalOptions:_3e4,startTime:_3b6||_3c4(),duration:_3e4.duration,tweens:[],createTween:function(prop,end){
var _3ee=_101.Tween(elem,_3ec.opts,prop,end,_3ec.opts.specialEasing[prop]||_3ec.opts.easing);
_3ec.tweens.push(_3ee);
return _3ee;
},stop:function(_3ef){
var _3f0=0,_3e8=_3ef?_3ec.tweens.length:0;
if(_3e6){
return this;
}
_3e6=true;
for(;_3f0<_3e8;_3f0++){
_3ec.tweens[_3f0].run(1);
}
if(_3ef){
_3e9.resolveWith(elem,[_3ec,_3ef]);
}else{
_3e9.rejectWith(elem,[_3ec,_3ef]);
}
return this;
}}),_3f1=_3ec.props;
_3db(_3f1,_3ec.opts.specialEasing);
for(;_3e7<_3e8;_3e7++){
_3e5=_3ba[_3e7].call(_3ec,elem,_3f1,_3ec.opts);
if(_3e5){
return _3e5;
}
}
_101.map(_3f1,_3c9,_3ec);
if(_101.isFunction(_3ec.opts.start)){
_3ec.opts.start.call(elem,_3ec);
}
_101.fx.timer(_101.extend(tick,{elem:elem,anim:_3ec,queue:_3ec.opts.queue}));
return _3ec.progress(_3ec.opts.progress).done(_3ec.opts.done,_3ec.opts.complete).fail(_3ec.opts.fail).always(_3ec.opts.always);
};
_101.Animation=_101.extend(_3e2,{tweener:function(_3f2,_3f3){
if(_101.isFunction(_3f2)){
_3f3=_3f2;
_3f2=["*"];
}else{
_3f2=_3f2.split(" ");
}
var prop,_3f4=0,_3f5=_3f2.length;
for(;_3f4<_3f5;_3f4++){
prop=_3f2[_3f4];
_3bc[prop]=_3bc[prop]||[];
_3bc[prop].unshift(_3f3);
}
},prefilter:function(_3f6,_3f7){
if(_3f7){
_3ba.unshift(_3f6);
}else{
_3ba.push(_3f6);
}
}});
_101.speed=function(_3f8,_3f9,fn){
var opt=_3f8&&typeof _3f8==="object"?_101.extend({},_3f8):{complete:fn||!fn&&_3f9||_101.isFunction(_3f8)&&_3f8,duration:_3f8,easing:fn&&_3f9||_3f9&&!_101.isFunction(_3f9)&&_3f9};
opt.duration=_101.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in _101.fx.speeds?_101.fx.speeds[opt.duration]:_101.fx.speeds._default;
if(opt.queue==null||opt.queue===true){
opt.queue="fx";
}
opt.old=opt.complete;
opt.complete=function(){
if(_101.isFunction(opt.old)){
opt.old.call(this);
}
if(opt.queue){
_101.dequeue(this,opt.queue);
}
};
return opt;
};
_101.fn.extend({fadeTo:function(_3fa,to,_3fb,_3fc){
return this.filter(_28b).css("opacity",0).show().end().animate({opacity:to},_3fa,_3fb,_3fc);
},animate:function(prop,_3fd,_3fe,_3ff){
var _400=_101.isEmptyObject(prop),_401=_101.speed(_3fd,_3fe,_3ff),_402=function(){
var anim=_3e2(this,_101.extend({},prop),_401);
if(_400||_101._data(this,"finish")){
anim.stop(true);
}
};
_402.finish=_402;
return _400||_401.queue===false?this.each(_402):this.queue(_401.queue,_402);
},stop:function(type,_403,_404){
var _405=function(_406){
var stop=_406.stop;
delete _406.stop;
stop(_404);
};
if(typeof type!=="string"){
_404=_403;
_403=type;
type=undefined;
}
if(_403&&type!==false){
this.queue(type||"fx",[]);
}
return this.each(function(){
var _407=true,_408=type!=null&&type+"queueHooks",_409=_101.timers,data=_101._data(this);
if(_408){
if(data[_408]&&data[_408].stop){
_405(data[_408]);
}
}else{
for(_408 in data){
if(data[_408]&&data[_408].stop&&rrun.test(_408)){
_405(data[_408]);
}
}
}
for(_408=_409.length;_408--;){
if(_409[_408].elem===this&&(type==null||_409[_408].queue===type)){
_409[_408].anim.stop(_404);
_407=false;
_409.splice(_408,1);
}
}
if(_407||!_404){
_101.dequeue(this,type);
}
});
},finish:function(type){
if(type!==false){
type=type||"fx";
}
return this.each(function(){
var _40a,data=_101._data(this),_40b=data[type+"queue"],_40c=data[type+"queueHooks"],_40d=_101.timers,_40e=_40b?_40b.length:0;
data.finish=true;
_101.queue(this,type,[]);
if(_40c&&_40c.stop){
_40c.stop.call(this,true);
}
for(_40a=_40d.length;_40a--;){
if(_40d[_40a].elem===this&&_40d[_40a].queue===type){
_40d[_40a].anim.stop(true);
_40d.splice(_40a,1);
}
}
for(_40a=0;_40a<_40e;_40a++){
if(_40b[_40a]&&_40b[_40a].finish){
_40b[_40a].finish.call(this);
}
}
delete data.finish;
});
}});
_101.each(["toggle","show","hide"],function(i,name){
var _40f=_101.fn[name];
_101.fn[name]=function(_410,_411,_412){
return _410==null||typeof _410==="boolean"?_40f.apply(this,arguments):this.animate(_3c5(name,true),_410,_411,_412);
};
});
_101.each({slideDown:_3c5("show"),slideUp:_3c5("hide"),slideToggle:_3c5("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,_413){
_101.fn[name]=function(_414,_415,_416){
return this.animate(_413,_414,_415,_416);
};
});
_101.timers=[];
_101.fx.tick=function(){
var _417,_418=_101.timers,i=0;
_3b6=_101.now();
for(;i<_418.length;i++){
_417=_418[i];
if(!_417()&&_418[i]===_417){
_418.splice(i--,1);
}
}
if(!_418.length){
_101.fx.stop();
}
_3b6=undefined;
};
_101.fx.timer=function(_419){
_101.timers.push(_419);
if(_419()){
_101.fx.start();
}else{
_101.timers.pop();
}
};
_101.fx.interval=13;
_101.fx.start=function(){
if(!_3b7){
_3b7=setInterval(_101.fx.tick,_101.fx.interval);
}
};
_101.fx.stop=function(){
clearInterval(_3b7);
_3b7=null;
};
_101.fx.speeds={slow:600,fast:200,_default:400};
_101.fn.delay=function(time,type){
time=_101.fx?_101.fx.speeds[time]||time:time;
type=type||"fx";
return this.queue(type,function(next,_41a){
var _41b=setTimeout(next,time);
_41a.stop=function(){
clearTimeout(_41b);
};
});
};
(function(){
var _41c,div,_41d,a,opt;
div=_229.createElement("div");
div.setAttribute("className","t");
div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
a=div.getElementsByTagName("a")[0];
_41d=_229.createElement("select");
opt=_41d.appendChild(_229.createElement("option"));
_41c=div.getElementsByTagName("input")[0];
a.style.cssText="top:1px";
_ff.getSetAttribute=div.className!=="t";
_ff.style=/top/.test(a.getAttribute("style"));
_ff.hrefNormalized=a.getAttribute("href")==="/a";
_ff.checkOn=!!_41c.value;
_ff.optSelected=opt.selected;
_ff.enctype=!!_229.createElement("form").enctype;
_41d.disabled=true;
_ff.optDisabled=!opt.disabled;
_41c=_229.createElement("input");
_41c.setAttribute("value","");
_ff.input=_41c.getAttribute("value")==="";
_41c.value="t";
_41c.setAttribute("type","radio");
_ff.radioValue=_41c.value==="t";
})();
var _41e=/\r/g;
_101.fn.extend({val:function(_41f){
var _420,ret,_421,elem=this[0];
if(!arguments.length){
if(elem){
_420=_101.valHooks[elem.type]||_101.valHooks[elem.nodeName.toLowerCase()];
if(_420&&"get" in _420&&(ret=_420.get(elem,"value"))!==undefined){
return ret;
}
ret=elem.value;
return typeof ret==="string"?ret.replace(_41e,""):ret==null?"":ret;
}
return;
}
_421=_101.isFunction(_41f);
return this.each(function(i){
var val;
if(this.nodeType!==1){
return;
}
if(_421){
val=_41f.call(this,i,_101(this).val());
}else{
val=_41f;
}
if(val==null){
val="";
}else{
if(typeof val==="number"){
val+="";
}else{
if(_101.isArray(val)){
val=_101.map(val,function(_422){
return _422==null?"":_422+"";
});
}
}
}
_420=_101.valHooks[this.type]||_101.valHooks[this.nodeName.toLowerCase()];
if(!_420||!("set" in _420)||_420.set(this,val,"value")===undefined){
this.value=val;
}
});
}});
_101.extend({valHooks:{option:{get:function(elem){
var val=_101.find.attr(elem,"value");
return val!=null?val:_101.trim(_101.text(elem));
}},select:{get:function(elem){
var _423,_424,_425=elem.options,_426=elem.selectedIndex,one=elem.type==="select-one"||_426<0,_427=one?null:[],max=one?_426+1:_425.length,i=_426<0?max:one?_426:0;
for(;i<max;i++){
_424=_425[i];
if((_424.selected||i===_426)&&(_ff.optDisabled?!_424.disabled:_424.getAttribute("disabled")===null)&&(!_424.parentNode.disabled||!_101.nodeName(_424.parentNode,"optgroup"))){
_423=_101(_424).val();
if(one){
return _423;
}
_427.push(_423);
}
}
return _427;
},set:function(elem,_428){
var _429,_42a,_42b=elem.options,_42c=_101.makeArray(_428),i=_42b.length;
while(i--){
_42a=_42b[i];
if(_101.inArray(_101.valHooks.option.get(_42a),_42c)>=0){
try{
_42a.selected=_429=true;
}
catch(_){
_42a.scrollHeight;
}
}else{
_42a.selected=false;
}
}
if(!_429){
elem.selectedIndex=-1;
}
return _42b;
}}}});
_101.each(["radio","checkbox"],function(){
_101.valHooks[this]={set:function(elem,_42d){
if(_101.isArray(_42d)){
return (elem.checked=_101.inArray(_101(elem).val(),_42d)>=0);
}
}};
if(!_ff.checkOn){
_101.valHooks[this].get=function(elem){
return elem.getAttribute("value")===null?"on":elem.value;
};
}
});
var _42e,_42f,_430=_101.expr.attrHandle,_431=/^(?:checked|selected)$/i,_432=_ff.getSetAttribute,_433=_ff.input;
_101.fn.extend({attr:function(name,_434){
return _28c(this,_101.attr,name,_434,arguments.length>1);
},removeAttr:function(name){
return this.each(function(){
_101.removeAttr(this,name);
});
}});
_101.extend({attr:function(elem,name,_435){
var _436,ret,_437=elem.nodeType;
if(!elem||_437===3||_437===8||_437===2){
return;
}
if(typeof elem.getAttribute===_26d){
return _101.prop(elem,name,_435);
}
if(_437!==1||!_101.isXMLDoc(elem)){
name=name.toLowerCase();
_436=_101.attrHooks[name]||(_101.expr.match.bool.test(name)?_42f:_42e);
}
if(_435!==undefined){
if(_435===null){
_101.removeAttr(elem,name);
}else{
if(_436&&"set" in _436&&(ret=_436.set(elem,_435,name))!==undefined){
return ret;
}else{
elem.setAttribute(name,_435+"");
return _435;
}
}
}else{
if(_436&&"get" in _436&&(ret=_436.get(elem,name))!==null){
return ret;
}else{
ret=_101.find.attr(elem,name);
return ret==null?undefined:ret;
}
}
},removeAttr:function(elem,_438){
var name,_439,i=0,_43a=_438&&_438.match(_241);
if(_43a&&elem.nodeType===1){
while((name=_43a[i++])){
_439=_101.propFix[name]||name;
if(_101.expr.match.bool.test(name)){
if(_433&&_432||!_431.test(name)){
elem[_439]=false;
}else{
elem[_101.camelCase("default-"+name)]=elem[_439]=false;
}
}else{
_101.attr(elem,name,"");
}
elem.removeAttribute(_432?name:_439);
}
}
},attrHooks:{type:{set:function(elem,_43b){
if(!_ff.radioValue&&_43b==="radio"&&_101.nodeName(elem,"input")){
var val=elem.value;
elem.setAttribute("type",_43b);
if(val){
elem.value=val;
}
return _43b;
}
}}}});
_42f={set:function(elem,_43c,name){
if(_43c===false){
_101.removeAttr(elem,name);
}else{
if(_433&&_432||!_431.test(name)){
elem.setAttribute(!_432&&_101.propFix[name]||name,name);
}else{
elem[_101.camelCase("default-"+name)]=elem[name]=true;
}
}
return name;
}};
_101.each(_101.expr.match.bool.source.match(/\w+/g),function(i,name){
var _43d=_430[name]||_101.find.attr;
_430[name]=_433&&_432||!_431.test(name)?function(elem,name,_43e){
var ret,_43f;
if(!_43e){
_43f=_430[name];
_430[name]=ret;
ret=_43d(elem,name,_43e)!=null?name.toLowerCase():null;
_430[name]=_43f;
}
return ret;
}:function(elem,name,_440){
if(!_440){
return elem[_101.camelCase("default-"+name)]?name.toLowerCase():null;
}
};
});
if(!_433||!_432){
_101.attrHooks.value={set:function(elem,_441,name){
if(_101.nodeName(elem,"input")){
elem.defaultValue=_441;
}else{
return _42e&&_42e.set(elem,_441,name);
}
}};
}
if(!_432){
_42e={set:function(elem,_442,name){
var ret=elem.getAttributeNode(name);
if(!ret){
elem.setAttributeNode((ret=elem.ownerDocument.createAttribute(name)));
}
ret.value=_442+="";
if(name==="value"||_442===elem.getAttribute(name)){
return _442;
}
}};
_430.id=_430.name=_430.coords=function(elem,name,_443){
var ret;
if(!_443){
return (ret=elem.getAttributeNode(name))&&ret.value!==""?ret.value:null;
}
};
_101.valHooks.button={get:function(elem,name){
var ret=elem.getAttributeNode(name);
if(ret&&ret.specified){
return ret.value;
}
},set:_42e.set};
_101.attrHooks.contenteditable={set:function(elem,_444,name){
_42e.set(elem,_444===""?false:_444,name);
}};
_101.each(["width","height"],function(i,name){
_101.attrHooks[name]={set:function(elem,_445){
if(_445===""){
elem.setAttribute(name,"auto");
return _445;
}
}};
});
}
if(!_ff.style){
_101.attrHooks.style={get:function(elem){
return elem.style.cssText||undefined;
},set:function(elem,_446){
return (elem.style.cssText=_446+"");
}};
}
var _447=/^(?:input|select|textarea|button|object)$/i,_448=/^(?:a|area)$/i;
_101.fn.extend({prop:function(name,_449){
return _28c(this,_101.prop,name,_449,arguments.length>1);
},removeProp:function(name){
name=_101.propFix[name]||name;
return this.each(function(){
try{
this[name]=undefined;
delete this[name];
}
catch(e){
}
});
}});
_101.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,_44a){
var ret,_44b,_44c,_44d=elem.nodeType;
if(!elem||_44d===3||_44d===8||_44d===2){
return;
}
_44c=_44d!==1||!_101.isXMLDoc(elem);
if(_44c){
name=_101.propFix[name]||name;
_44b=_101.propHooks[name];
}
if(_44a!==undefined){
return _44b&&"set" in _44b&&(ret=_44b.set(elem,_44a,name))!==undefined?ret:(elem[name]=_44a);
}else{
return _44b&&"get" in _44b&&(ret=_44b.get(elem,name))!==null?ret:elem[name];
}
},propHooks:{tabIndex:{get:function(elem){
var _44e=_101.find.attr(elem,"tabindex");
return _44e?parseInt(_44e,10):_447.test(elem.nodeName)||_448.test(elem.nodeName)&&elem.href?0:-1;
}}}});
if(!_ff.hrefNormalized){
_101.each(["href","src"],function(i,name){
_101.propHooks[name]={get:function(elem){
return elem.getAttribute(name,4);
}};
});
}
if(!_ff.optSelected){
_101.propHooks.selected={get:function(elem){
var _44f=elem.parentNode;
if(_44f){
_44f.selectedIndex;
if(_44f.parentNode){
_44f.parentNode.selectedIndex;
}
}
return null;
}};
}
_101.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){
_101.propFix[this.toLowerCase()]=this;
});
if(!_ff.enctype){
_101.propFix.enctype="encoding";
}
var _450=/[\t\r\n\f]/g;
_101.fn.extend({addClass:function(_451){
var _452,elem,cur,_453,j,_454,i=0,len=this.length,_455=typeof _451==="string"&&_451;
if(_101.isFunction(_451)){
return this.each(function(j){
_101(this).addClass(_451.call(this,j,this.className));
});
}
if(_455){
_452=(_451||"").match(_241)||[];
for(;i<len;i++){
elem=this[i];
cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(_450," "):" ");
if(cur){
j=0;
while((_453=_452[j++])){
if(cur.indexOf(" "+_453+" ")<0){
cur+=_453+" ";
}
}
_454=_101.trim(cur);
if(elem.className!==_454){
elem.className=_454;
}
}
}
}
return this;
},removeClass:function(_456){
var _457,elem,cur,_458,j,_459,i=0,len=this.length,_45a=arguments.length===0||typeof _456==="string"&&_456;
if(_101.isFunction(_456)){
return this.each(function(j){
_101(this).removeClass(_456.call(this,j,this.className));
});
}
if(_45a){
_457=(_456||"").match(_241)||[];
for(;i<len;i++){
elem=this[i];
cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(_450," "):"");
if(cur){
j=0;
while((_458=_457[j++])){
while(cur.indexOf(" "+_458+" ")>=0){
cur=cur.replace(" "+_458+" "," ");
}
}
_459=_456?_101.trim(cur):"";
if(elem.className!==_459){
elem.className=_459;
}
}
}
}
return this;
},toggleClass:function(_45b,_45c){
var type=typeof _45b;
if(typeof _45c==="boolean"&&type==="string"){
return _45c?this.addClass(_45b):this.removeClass(_45b);
}
if(_101.isFunction(_45b)){
return this.each(function(i){
_101(this).toggleClass(_45b.call(this,i,this.className,_45c),_45c);
});
}
return this.each(function(){
if(type==="string"){
var _45d,i=0,self=_101(this),_45e=_45b.match(_241)||[];
while((_45d=_45e[i++])){
if(self.hasClass(_45d)){
self.removeClass(_45d);
}else{
self.addClass(_45d);
}
}
}else{
if(type===_26d||type==="boolean"){
if(this.className){
_101._data(this,"__className__",this.className);
}
this.className=this.className||_45b===false?"":_101._data(this,"__className__")||"";
}
}
});
},hasClass:function(_45f){
var _460=" "+_45f+" ",i=0,l=this.length;
for(;i<l;i++){
if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(_450," ").indexOf(_460)>=0){
return true;
}
}
return false;
}});
_101.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){
_101.fn[name]=function(data,fn){
return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);
};
});
_101.fn.extend({hover:function(_461,_462){
return this.mouseenter(_461).mouseleave(_462||_461);
},bind:function(_463,data,fn){
return this.on(_463,null,data,fn);
},unbind:function(_464,fn){
return this.off(_464,null,fn);
},delegate:function(_465,_466,data,fn){
return this.on(_466,_465,data,fn);
},undelegate:function(_467,_468,fn){
return arguments.length===1?this.off(_467,"**"):this.off(_468,_467||"**",fn);
}});
var _469=_101.now();
var _46a=(/\?/);
var _46b=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
_101.parseJSON=function(data){
if(_f5.JSON&&_f5.JSON.parse){
return _f5.JSON.parse(data+"");
}
var _46c,_46d=null,str=_101.trim(data+"");
return str&&!_101.trim(str.replace(_46b,function(_46e,_46f,open,_470){
if(_46c&&_46f){
_46d=0;
}
if(_46d===0){
return _46e;
}
_46c=open||_46f;
_46d+=!_470-!open;
return "";
}))?(Function("return "+str))():_101.error("Invalid JSON: "+data);
};
_101.parseXML=function(data){
var xml,tmp;
if(!data||typeof data!=="string"){
return null;
}
try{
if(_f5.DOMParser){
tmp=new DOMParser();
xml=tmp.parseFromString(data,"text/xml");
}else{
xml=new ActiveXObject("Microsoft.XMLDOM");
xml.async="false";
xml.loadXML(data);
}
}
catch(e){
xml=undefined;
}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){
_101.error("Invalid XML: "+data);
}
return xml;
};
var _471,_472,_473=/#.*$/,rts=/([?&])_=[^&]*/,_474=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,_475=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,_476=/^(?:GET|HEAD)$/,_477=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,_478={},_479={},_47a="*/".concat("*");
try{
_472=location.href;
}
catch(e){
_472=_229.createElement("a");
_472.href="";
_472=_472.href;
}
_471=rurl.exec(_472.toLowerCase())||[];
function _47b(_47c){
return function(_47d,func){
if(typeof _47d!=="string"){
func=_47d;
_47d="*";
}
var _47e,i=0,_47f=_47d.toLowerCase().match(_241)||[];
if(_101.isFunction(func)){
while((_47e=_47f[i++])){
if(_47e.charAt(0)==="+"){
_47e=_47e.slice(1)||"*";
(_47c[_47e]=_47c[_47e]||[]).unshift(func);
}else{
(_47c[_47e]=_47c[_47e]||[]).push(func);
}
}
}
};
};
function _480(_481,_482,_483,_484){
var _485={},_486=(_481===_479);
function _487(_488){
var _489;
_485[_488]=true;
_101.each(_481[_488]||[],function(_48a,_48b){
var _48c=_48b(_482,_483,_484);
if(typeof _48c==="string"&&!_486&&!_485[_48c]){
_482.dataTypes.unshift(_48c);
_487(_48c);
return false;
}else{
if(_486){
return !(_489=_48c);
}
}
});
return _489;
};
return _487(_482.dataTypes[0])||!_485["*"]&&_487("*");
};
function _48d(_48e,src){
var deep,key,_48f=_101.ajaxSettings.flatOptions||{};
for(key in src){
if(src[key]!==undefined){
(_48f[key]?_48e:(deep||(deep={})))[key]=src[key];
}
}
if(deep){
_101.extend(true,_48e,deep);
}
return _48e;
};
function _490(s,_491,_492){
var _493,ct,_494,type,_495=s.contents,_496=s.dataTypes;
while(_496[0]==="*"){
_496.shift();
if(ct===undefined){
ct=s.mimeType||_491.getResponseHeader("Content-Type");
}
}
if(ct){
for(type in _495){
if(_495[type]&&_495[type].test(ct)){
_496.unshift(type);
break;
}
}
}
if(_496[0] in _492){
_494=_496[0];
}else{
for(type in _492){
if(!_496[0]||s.converters[type+" "+_496[0]]){
_494=type;
break;
}
if(!_493){
_493=type;
}
}
_494=_494||_493;
}
if(_494){
if(_494!==_496[0]){
_496.unshift(_494);
}
return _492[_494];
}
};
function _497(s,_498,_499,_49a){
var _49b,_49c,conv,tmp,prev,_49d={},_49e=s.dataTypes.slice();
if(_49e[1]){
for(conv in s.converters){
_49d[conv.toLowerCase()]=s.converters[conv];
}
}
_49c=_49e.shift();
while(_49c){
if(s.responseFields[_49c]){
_499[s.responseFields[_49c]]=_498;
}
if(!prev&&_49a&&s.dataFilter){
_498=s.dataFilter(_498,s.dataType);
}
prev=_49c;
_49c=_49e.shift();
if(_49c){
if(_49c==="*"){
_49c=prev;
}else{
if(prev!=="*"&&prev!==_49c){
conv=_49d[prev+" "+_49c]||_49d["* "+_49c];
if(!conv){
for(_49b in _49d){
tmp=_49b.split(" ");
if(tmp[1]===_49c){
conv=_49d[prev+" "+tmp[0]]||_49d["* "+tmp[0]];
if(conv){
if(conv===true){
conv=_49d[_49b];
}else{
if(_49d[_49b]!==true){
_49c=tmp[0];
_49e.unshift(tmp[1]);
}
}
break;
}
}
}
}
if(conv!==true){
if(conv&&s["throws"]){
_498=conv(_498);
}else{
try{
_498=conv(_498);
}
catch(e){
return {state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+_49c};
}
}
}
}
}
}
}
return {state:"success",data:_498};
};
_101.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_472,type:"GET",isLocal:_475.test(_471[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_47a,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":_101.parseJSON,"text xml":_101.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(_49f,_4a0){
return _4a0?_48d(_48d(_49f,_101.ajaxSettings),_4a0):_48d(_101.ajaxSettings,_49f);
},ajaxPrefilter:_47b(_478),ajaxTransport:_47b(_479),ajax:function(url,_4a1){
if(typeof url==="object"){
_4a1=url;
url=undefined;
}
_4a1=_4a1||{};
var _4a2,i,_4a3,_4a4,_4a5,_4a6,_4a7,_4a8,s=_101.ajaxSetup({},_4a1),_4a9=s.context||s,_4aa=s.context&&(_4a9.nodeType||_4a9.jquery)?_101(_4a9):_101.event,_4ab=_101.Deferred(),_4ac=_101.Callbacks("once memory"),_4ad=s.statusCode||{},_4ae={},_4af={},_4b0=0,_4b1="canceled",_4b2={readyState:0,getResponseHeader:function(key){
var _4b3;
if(_4b0===2){
if(!_4a8){
_4a8={};
while((_4b3=_474.exec(_4a4))){
_4a8[_4b3[1].toLowerCase()]=_4b3[2];
}
}
_4b3=_4a8[key.toLowerCase()];
}
return _4b3==null?null:_4b3;
},getAllResponseHeaders:function(){
return _4b0===2?_4a4:null;
},setRequestHeader:function(name,_4b4){
var _4b5=name.toLowerCase();
if(!_4b0){
name=_4af[_4b5]=_4af[_4b5]||name;
_4ae[name]=_4b4;
}
return this;
},overrideMimeType:function(type){
if(!_4b0){
s.mimeType=type;
}
return this;
},statusCode:function(map){
var code;
if(map){
if(_4b0<2){
for(code in map){
_4ad[code]=[_4ad[code],map[code]];
}
}else{
_4b2.always(map[_4b2.status]);
}
}
return this;
},abort:function(_4b6){
var _4b7=_4b6||_4b1;
if(_4a7){
_4a7.abort(_4b7);
}
done(0,_4b7);
return this;
}};
_4ab.promise(_4b2).complete=_4ac.add;
_4b2.success=_4b2.done;
_4b2.error=_4b2.fail;
s.url=((url||s.url||_472)+"").replace(_473,"").replace(_477,_471[1]+"//");
s.type=_4a1.method||_4a1.type||s.method||s.type;
s.dataTypes=_101.trim(s.dataType||"*").toLowerCase().match(_241)||[""];
if(s.crossDomain==null){
_4a2=rurl.exec(s.url.toLowerCase());
s.crossDomain=!!(_4a2&&(_4a2[1]!==_471[1]||_4a2[2]!==_471[2]||(_4a2[3]||(_4a2[1]==="http:"?"80":"443"))!==(_471[3]||(_471[1]==="http:"?"80":"443"))));
}
if(s.data&&s.processData&&typeof s.data!=="string"){
s.data=_101.param(s.data,s.traditional);
}
_480(_478,s,_4a1,_4b2);
if(_4b0===2){
return _4b2;
}
_4a6=_101.event&&s.global;
if(_4a6&&_101.active++===0){
_101.event.trigger("ajaxStart");
}
s.type=s.type.toUpperCase();
s.hasContent=!_476.test(s.type);
_4a3=s.url;
if(!s.hasContent){
if(s.data){
_4a3=(s.url+=(_46a.test(_4a3)?"&":"?")+s.data);
delete s.data;
}
if(s.cache===false){
s.url=rts.test(_4a3)?_4a3.replace(rts,"$1_="+_469++):_4a3+(_46a.test(_4a3)?"&":"?")+"_="+_469++;
}
}
if(s.ifModified){
if(_101.lastModified[_4a3]){
_4b2.setRequestHeader("If-Modified-Since",_101.lastModified[_4a3]);
}
if(_101.etag[_4a3]){
_4b2.setRequestHeader("If-None-Match",_101.etag[_4a3]);
}
}
if(s.data&&s.hasContent&&s.contentType!==false||_4a1.contentType){
_4b2.setRequestHeader("Content-Type",s.contentType);
}
_4b2.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+_47a+"; q=0.01":""):s.accepts["*"]);
for(i in s.headers){
_4b2.setRequestHeader(i,s.headers[i]);
}
if(s.beforeSend&&(s.beforeSend.call(_4a9,_4b2,s)===false||_4b0===2)){
return _4b2.abort();
}
_4b1="abort";
for(i in {success:1,error:1,complete:1}){
_4b2[i](s[i]);
}
_4a7=_480(_479,s,_4a1,_4b2);
if(!_4a7){
done(-1,"No Transport");
}else{
_4b2.readyState=1;
if(_4a6){
_4aa.trigger("ajaxSend",[_4b2,s]);
}
if(s.async&&s.timeout>0){
_4a5=setTimeout(function(){
_4b2.abort("timeout");
},s.timeout);
}
try{
_4b0=1;
_4a7.send(_4ae,done);
}
catch(e){
if(_4b0<2){
done(-1,e);
}else{
throw e;
}
}
}
function done(_4b8,_4b9,_4ba,_4bb){
var _4bc,_4bd,_4be,_4bf,_4c0,_4c1=_4b9;
if(_4b0===2){
return;
}
_4b0=2;
if(_4a5){
clearTimeout(_4a5);
}
_4a7=undefined;
_4a4=_4bb||"";
_4b2.readyState=_4b8>0?4:0;
_4bc=_4b8>=200&&_4b8<300||_4b8===304;
if(_4ba){
_4bf=_490(s,_4b2,_4ba);
}
_4bf=_497(s,_4bf,_4b2,_4bc);
if(_4bc){
if(s.ifModified){
_4c0=_4b2.getResponseHeader("Last-Modified");
if(_4c0){
_101.lastModified[_4a3]=_4c0;
}
_4c0=_4b2.getResponseHeader("etag");
if(_4c0){
_101.etag[_4a3]=_4c0;
}
}
if(_4b8===204||s.type==="HEAD"){
_4c1="nocontent";
}else{
if(_4b8===304){
_4c1="notmodified";
}else{
_4c1=_4bf.state;
_4bd=_4bf.data;
_4be=_4bf.error;
_4bc=!_4be;
}
}
}else{
_4be=_4c1;
if(_4b8||!_4c1){
_4c1="error";
if(_4b8<0){
_4b8=0;
}
}
}
_4b2.status=_4b8;
_4b2.statusText=(_4b9||_4c1)+"";
if(_4bc){
_4ab.resolveWith(_4a9,[_4bd,_4c1,_4b2]);
}else{
_4ab.rejectWith(_4a9,[_4b2,_4c1,_4be]);
}
_4b2.statusCode(_4ad);
_4ad=undefined;
if(_4a6){
_4aa.trigger(_4bc?"ajaxSuccess":"ajaxError",[_4b2,s,_4bc?_4bd:_4be]);
}
_4ac.fireWith(_4a9,[_4b2,_4c1]);
if(_4a6){
_4aa.trigger("ajaxComplete",[_4b2,s]);
if(!(--_101.active)){
_101.event.trigger("ajaxStop");
}
}
};
return _4b2;
},getJSON:function(url,data,_4c2){
return _101.get(url,data,_4c2,"json");
},getScript:function(url,_4c3){
return _101.get(url,undefined,_4c3,"script");
}});
_101.each(["get","post"],function(i,_4c4){
_101[_4c4]=function(url,data,_4c5,type){
if(_101.isFunction(data)){
type=type||_4c5;
_4c5=data;
data=undefined;
}
return _101.ajax({url:url,type:_4c4,dataType:type,data:data,success:_4c5});
};
});
_101._evalUrl=function(url){
return _101.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});
};
_101.fn.extend({wrapAll:function(html){
if(_101.isFunction(html)){
return this.each(function(i){
_101(this).wrapAll(html.call(this,i));
});
}
if(this[0]){
var wrap=_101(html,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){
wrap.insertBefore(this[0]);
}
wrap.map(function(){
var elem=this;
while(elem.firstChild&&elem.firstChild.nodeType===1){
elem=elem.firstChild;
}
return elem;
}).append(this);
}
return this;
},wrapInner:function(html){
if(_101.isFunction(html)){
return this.each(function(i){
_101(this).wrapInner(html.call(this,i));
});
}
return this.each(function(){
var self=_101(this),_4c6=self.contents();
if(_4c6.length){
_4c6.wrapAll(html);
}else{
self.append(html);
}
});
},wrap:function(html){
var _4c7=_101.isFunction(html);
return this.each(function(i){
_101(this).wrapAll(_4c7?html.call(this,i):html);
});
},unwrap:function(){
return this.parent().each(function(){
if(!_101.nodeName(this,"body")){
_101(this).replaceWith(this.childNodes);
}
}).end();
}});
_101.expr.filters.hidden=function(elem){
return elem.offsetWidth<=0&&elem.offsetHeight<=0||(!_ff.reliableHiddenOffsets()&&((elem.style&&elem.style.display)||_101.css(elem,"display"))==="none");
};
_101.expr.filters.visible=function(elem){
return !_101.expr.filters.hidden(elem);
};
var r20=/%20/g,_4c8=/\[\]$/,_4c9=/\r?\n/g,_4ca=/^(?:submit|button|image|reset|file)$/i,_4cb=/^(?:input|select|textarea|keygen)/i;
function _4cc(_4cd,obj,_4ce,add){
var name;
if(_101.isArray(obj)){
_101.each(obj,function(i,v){
if(_4ce||_4c8.test(_4cd)){
add(_4cd,v);
}else{
_4cc(_4cd+"["+(typeof v==="object"?i:"")+"]",v,_4ce,add);
}
});
}else{
if(!_4ce&&_101.type(obj)==="object"){
for(name in obj){
_4cc(_4cd+"["+name+"]",obj[name],_4ce,add);
}
}else{
add(_4cd,obj);
}
}
};
_101.param=function(a,_4cf){
var _4d0,s=[],add=function(key,_4d1){
_4d1=_101.isFunction(_4d1)?_4d1():(_4d1==null?"":_4d1);
s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(_4d1);
};
if(_4cf===undefined){
_4cf=_101.ajaxSettings&&_101.ajaxSettings.traditional;
}
if(_101.isArray(a)||(a.jquery&&!_101.isPlainObject(a))){
_101.each(a,function(){
add(this.name,this.value);
});
}else{
for(_4d0 in a){
_4cc(_4d0,a[_4d0],_4cf,add);
}
}
return s.join("&").replace(r20,"+");
};
_101.fn.extend({serialize:function(){
return _101.param(this.serializeArray());
},serializeArray:function(){
return this.map(function(){
var _4d2=_101.prop(this,"elements");
return _4d2?_101.makeArray(_4d2):this;
}).filter(function(){
var type=this.type;
return this.name&&!_101(this).is(":disabled")&&_4cb.test(this.nodeName)&&!_4ca.test(type)&&(this.checked||!_293.test(type));
}).map(function(i,elem){
var val=_101(this).val();
return val==null?null:_101.isArray(val)?_101.map(val,function(val){
return {name:elem.name,value:val.replace(_4c9,"\r\n")};
}):{name:elem.name,value:val.replace(_4c9,"\r\n")};
}).get();
}});
_101.ajaxSettings.xhr=_f5.ActiveXObject!==undefined?function(){
return !this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&_4d3()||_4d4();
}:_4d3;
var _4d5=0,_4d6={},_4d7=_101.ajaxSettings.xhr();
if(_f5.attachEvent){
_f5.attachEvent("onunload",function(){
for(var key in _4d6){
_4d6[key](undefined,true);
}
});
}
_ff.cors=!!_4d7&&("withCredentials" in _4d7);
_4d7=_ff.ajax=!!_4d7;
if(_4d7){
_101.ajaxTransport(function(_4d8){
if(!_4d8.crossDomain||_ff.cors){
var _4d9;
return {send:function(_4da,_4db){
var i,xhr=_4d8.xhr(),id=++_4d5;
xhr.open(_4d8.type,_4d8.url,_4d8.async,_4d8.username,_4d8.password);
if(_4d8.xhrFields){
for(i in _4d8.xhrFields){
xhr[i]=_4d8.xhrFields[i];
}
}
if(_4d8.mimeType&&xhr.overrideMimeType){
xhr.overrideMimeType(_4d8.mimeType);
}
if(!_4d8.crossDomain&&!_4da["X-Requested-With"]){
_4da["X-Requested-With"]="XMLHttpRequest";
}
for(i in _4da){
if(_4da[i]!==undefined){
xhr.setRequestHeader(i,_4da[i]+"");
}
}
xhr.send((_4d8.hasContent&&_4d8.data)||null);
_4d9=function(_4dc,_4dd){
var _4de,_4df,_4e0;
if(_4d9&&(_4dd||xhr.readyState===4)){
delete _4d6[id];
_4d9=undefined;
xhr.onreadystatechange=_101.noop;
if(_4dd){
if(xhr.readyState!==4){
xhr.abort();
}
}else{
_4e0={};
_4de=xhr.status;
if(typeof xhr.responseText==="string"){
_4e0.text=xhr.responseText;
}
try{
_4df=xhr.statusText;
}
catch(e){
_4df="";
}
if(!_4de&&_4d8.isLocal&&!_4d8.crossDomain){
_4de=_4e0.text?200:404;
}else{
if(_4de===1223){
_4de=204;
}
}
}
}
if(_4e0){
_4db(_4de,_4df,_4e0,xhr.getAllResponseHeaders());
}
};
if(!_4d8.async){
_4d9();
}else{
if(xhr.readyState===4){
setTimeout(_4d9);
}else{
xhr.onreadystatechange=_4d6[id]=_4d9;
}
}
},abort:function(){
if(_4d9){
_4d9(undefined,true);
}
}};
}
});
}
function _4d3(){
try{
return new _f5.XMLHttpRequest();
}
catch(e){
}
};
function _4d4(){
try{
return new _f5.ActiveXObject("Microsoft.XMLHTTP");
}
catch(e){
}
};
_101.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){
_101.globalEval(text);
return text;
}}});
_101.ajaxPrefilter("script",function(s){
if(s.cache===undefined){
s.cache=false;
}
if(s.crossDomain){
s.type="GET";
s.global=false;
}
});
_101.ajaxTransport("script",function(s){
if(s.crossDomain){
var _4e1,head=_229.head||_101("head")[0]||_229.documentElement;
return {send:function(_4e2,_4e3){
_4e1=_229.createElement("script");
_4e1.async=true;
if(s.scriptCharset){
_4e1.charset=s.scriptCharset;
}
_4e1.src=s.url;
_4e1.onload=_4e1.onreadystatechange=function(_4e4,_4e5){
if(_4e5||!_4e1.readyState||/loaded|complete/.test(_4e1.readyState)){
_4e1.onload=_4e1.onreadystatechange=null;
if(_4e1.parentNode){
_4e1.parentNode.removeChild(_4e1);
}
_4e1=null;
if(!_4e5){
_4e3(200,"success");
}
}
};
head.insertBefore(_4e1,head.firstChild);
},abort:function(){
if(_4e1){
_4e1.onload(undefined,true);
}
}};
}
});
var _4e6=[],_4e7=/(=)\?(?=&|$)|\?\?/;
_101.ajaxSetup({jsonp:"callback",jsonpCallback:function(){
var _4e8=_4e6.pop()||(_101.expando+"_"+(_469++));
this[_4e8]=true;
return _4e8;
}});
_101.ajaxPrefilter("json jsonp",function(s,_4e9,_4ea){
var _4eb,_4ec,_4ed,_4ee=s.jsonp!==false&&(_4e7.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&_4e7.test(s.data)&&"data");
if(_4ee||s.dataTypes[0]==="jsonp"){
_4eb=s.jsonpCallback=_101.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;
if(_4ee){
s[_4ee]=s[_4ee].replace(_4e7,"$1"+_4eb);
}else{
if(s.jsonp!==false){
s.url+=(_46a.test(s.url)?"&":"?")+s.jsonp+"="+_4eb;
}
}
s.converters["script json"]=function(){
if(!_4ed){
_101.error(_4eb+" was not called");
}
return _4ed[0];
};
s.dataTypes[0]="json";
_4ec=_f5[_4eb];
_f5[_4eb]=function(){
_4ed=arguments;
};
_4ea.always(function(){
_f5[_4eb]=_4ec;
if(s[_4eb]){
s.jsonpCallback=_4e9.jsonpCallback;
_4e6.push(_4eb);
}
if(_4ed&&_101.isFunction(_4ec)){
_4ec(_4ed[0]);
}
_4ed=_4ec=undefined;
});
return "script";
}
});
_101.parseHTML=function(data,_4ef,_4f0){
if(!data||typeof data!=="string"){
return null;
}
if(typeof _4ef==="boolean"){
_4f0=_4ef;
_4ef=false;
}
_4ef=_4ef||_229;
var _4f1=_21e.exec(data),_4f2=!_4f0&&[];
if(_4f1){
return [_4ef.createElement(_4f1[1])];
}
_4f1=_101.buildFragment([data],_4ef,_4f2);
if(_4f2&&_4f2.length){
_101(_4f2).remove();
}
return _101.merge([],_4f1.childNodes);
};
var _4f3=_101.fn.load;
_101.fn.load=function(url,_4f4,_4f5){
if(typeof url!=="string"&&_4f3){
return _4f3.apply(this,arguments);
}
var _4f6,_4f7,type,self=this,off=url.indexOf(" ");
if(off>=0){
_4f6=_101.trim(url.slice(off,url.length));
url=url.slice(0,off);
}
if(_101.isFunction(_4f4)){
_4f5=_4f4;
_4f4=undefined;
}else{
if(_4f4&&typeof _4f4==="object"){
type="POST";
}
}
if(self.length>0){
_101.ajax({url:url,type:type,dataType:"html",data:_4f4}).done(function(_4f8){
_4f7=arguments;
self.html(_4f6?_101("<div>").append(_101.parseHTML(_4f8)).find(_4f6):_4f8);
}).complete(_4f5&&function(_4f9,_4fa){
self.each(_4f5,_4f7||[_4f9.responseText,_4fa,_4f9]);
});
}
return this;
};
_101.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){
_101.fn[type]=function(fn){
return this.on(type,fn);
};
});
_101.expr.filters.animated=function(elem){
return _101.grep(_101.timers,function(fn){
return elem===fn.elem;
}).length;
};
var _4fb=_f5.document.documentElement;
function _4fc(elem){
return _101.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;
};
_101.offset={setOffset:function(elem,_4fd,i){
var _4fe,_4ff,_500,_501,_502,_503,_504,_505=_101.css(elem,"position"),_506=_101(elem),_507={};
if(_505==="static"){
elem.style.position="relative";
}
_502=_506.offset();
_500=_101.css(elem,"top");
_503=_101.css(elem,"left");
_504=(_505==="absolute"||_505==="fixed")&&_101.inArray("auto",[_500,_503])>-1;
if(_504){
_4fe=_506.position();
_501=_4fe.top;
_4ff=_4fe.left;
}else{
_501=parseFloat(_500)||0;
_4ff=parseFloat(_503)||0;
}
if(_101.isFunction(_4fd)){
_4fd=_4fd.call(elem,i,_502);
}
if(_4fd.top!=null){
_507.top=(_4fd.top-_502.top)+_501;
}
if(_4fd.left!=null){
_507.left=(_4fd.left-_502.left)+_4ff;
}
if("using" in _4fd){
_4fd.using.call(elem,_507);
}else{
_506.css(_507);
}
}};
_101.fn.extend({offset:function(_508){
if(arguments.length){
return _508===undefined?this:this.each(function(i){
_101.offset.setOffset(this,_508,i);
});
}
var _509,win,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;
if(!doc){
return;
}
_509=doc.documentElement;
if(!_101.contains(_509,elem)){
return box;
}
if(typeof elem.getBoundingClientRect!==_26d){
box=elem.getBoundingClientRect();
}
win=_4fc(doc);
return {top:box.top+(win.pageYOffset||_509.scrollTop)-(_509.clientTop||0),left:box.left+(win.pageXOffset||_509.scrollLeft)-(_509.clientLeft||0)};
},position:function(){
if(!this[0]){
return;
}
var _50a,_50b,_50c={top:0,left:0},elem=this[0];
if(_101.css(elem,"position")==="fixed"){
_50b=elem.getBoundingClientRect();
}else{
_50a=this.offsetParent();
_50b=this.offset();
if(!_101.nodeName(_50a[0],"html")){
_50c=_50a.offset();
}
_50c.top+=_101.css(_50a[0],"borderTopWidth",true);
_50c.left+=_101.css(_50a[0],"borderLeftWidth",true);
}
return {top:_50b.top-_50c.top-_101.css(elem,"marginTop",true),left:_50b.left-_50c.left-_101.css(elem,"marginLeft",true)};
},offsetParent:function(){
return this.map(function(){
var _50d=this.offsetParent||_4fb;
while(_50d&&(!_101.nodeName(_50d,"html")&&_101.css(_50d,"position")==="static")){
_50d=_50d.offsetParent;
}
return _50d||_4fb;
});
}});
_101.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(_50e,prop){
var top=/Y/.test(prop);
_101.fn[_50e]=function(val){
return _28c(this,function(elem,_50f,val){
var win=_4fc(elem);
if(val===undefined){
return win?(prop in win)?win[prop]:win.document.documentElement[_50f]:elem[_50f];
}
if(win){
win.scrollTo(!top?val:_101(win).scrollLeft(),top?val:_101(win).scrollTop());
}else{
elem[_50f]=val;
}
},_50e,val,arguments.length,null);
};
});
_101.each(["top","left"],function(i,prop){
_101.cssHooks[prop]=_35c(_ff.pixelPosition,function(elem,_510){
if(_510){
_510=_352(elem,prop);
return _350.test(_510)?_101(elem).position()[prop]+"px":_510;
}
});
});
_101.each({Height:"height",Width:"width"},function(name,type){
_101.each({padding:"inner"+name,content:type,"":"outer"+name},function(_511,_512){
_101.fn[_512]=function(_513,_514){
var _515=arguments.length&&(_511||typeof _513!=="boolean"),_516=_511||(_513===true||_514===true?"margin":"border");
return _28c(this,function(elem,type,_517){
var doc;
if(_101.isWindow(elem)){
return elem.document.documentElement["client"+name];
}
if(elem.nodeType===9){
doc=elem.documentElement;
return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);
}
return _517===undefined?_101.css(elem,type,_516):_101.style(elem,type,_517,_516);
},type,_515?_513:undefined,_515,null);
};
});
});
_101.fn.size=function(){
return this.length;
};
_101.fn.andSelf=_101.fn.addBack;
if(typeof define==="function"&&define.amd){
define("jquery",[],function(){
return _101;
});
}
var _518=_f5.jQuery,_519=_f5.$;
_101.noConflict=function(deep){
if(_f5.$===_101){
_f5.$=_519;
}
if(deep&&_f5.jQuery===_101){
_f5.jQuery=_518;
}
return _101;
};
if(typeof _f6===_26d){
_f5.jQuery=_f5.$=_101;
}
return _101;
}));
(function(){
function n(n){
function t(t,r,e,u,i,o){
for(;i>=0&&o>i;i+=n){
var a=u?u[i]:i;
e=r(e,t[a],a,t);
}
return e;
};
return function(r,e,u,i){
e=b(e,i,4);
var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;
return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a);
};
};
function t(n){
return function(t,r,e){
r=x(r,e);
for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n){
if(r(t[i],i,t)){
return i;
}
}
return -1;
};
};
function r(n,t,r){
return function(e,u,i){
var o=0,a=O(e);
if("number"==typeof i){
n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;
}else{
if(r&&i&&a){
return i=r(e,u),e[i]===u?i:-1;
}
}
if(u!==u){
return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;
}
for(i=n>0?o:a-1;i>=0&&a>i;i+=n){
if(e[i]===u){
return i;
}
}
return -1;
};
};
function e(n,t){
var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";
for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;){
i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i);
}
};
var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){
},m=function(n){
return n instanceof m?n:this instanceof m?void (this._wrapped=n):new m(n);
};
"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";
var b=function(n,t,r){
if(t===void 0){
return n;
}
switch(null==r?3:r){
case 1:
return function(r){
return n.call(t,r);
};
case 2:
return function(r,e){
return n.call(t,r,e);
};
case 3:
return function(r,e,u){
return n.call(t,r,e,u);
};
case 4:
return function(r,e,u,i){
return n.call(t,r,e,u,i);
};
}
return function(){
return n.apply(t,arguments);
};
},x=function(n,t,r){
return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n);
};
m.iteratee=function(n,t){
return x(n,t,1/0);
};
var _51a=function(n,t){
return function(r){
var e=arguments.length;
if(2>e||null==r){
return r;
}
for(var u=1;e>u;u++){
for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){
var f=o[c];
t&&r[f]!==void 0||(r[f]=i[f]);
}
}
return r;
};
},j=function(n){
if(!m.isObject(n)){
return {};
}
if(y){
return y(n);
}
d.prototype=n;
var t=new d;
return d.prototype=null,t;
},w=function(n){
return function(t){
return null==t?void 0:t[n];
};
},A=Math.pow(2,53)-1,O=w("length"),k=function(n){
var t=O(n);
return "number"==typeof t&&t>=0&&A>=t;
};
m.each=m.forEach=function(n,t,r){
t=b(t,r);
var e,u;
if(k(n)){
for(e=0,u=n.length;u>e;e++){
t(n[e],e,n);
}
}else{
var i=m.keys(n);
for(e=0,u=i.length;u>e;e++){
t(n[i[e]],i[e],n);
}
}
return n;
},m.map=m.collect=function(n,t,r){
t=x(t,r);
for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){
var a=e?e[o]:o;
i[o]=t(n[a],a,n);
}
return i;
},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){
var e;
return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0;
},m.filter=m.select=function(n,t,r){
var e=[];
return t=x(t,r),m.each(n,function(n,r,u){
t(n,r,u)&&e.push(n);
}),e;
},m.reject=function(n,t,r){
return m.filter(n,m.negate(x(t)),r);
},m.every=m.all=function(n,t,r){
t=x(t,r);
for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){
var o=e?e[i]:i;
if(!t(n[o],o,n)){
return !1;
}
}
return !0;
},m.some=m.any=function(n,t,r){
t=x(t,r);
for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){
var o=e?e[i]:i;
if(t(n[o],o,n)){
return !0;
}
}
return !1;
},m.contains=m.includes=m.include=function(n,t,r,e){
return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0;
},m.invoke=function(n,t){
var r=l.call(arguments,2),e=m.isFunction(t);
return m.map(n,function(n){
var u=e?t:n[t];
return null==u?u:u.apply(n,r);
});
},m.pluck=function(n,t){
return m.map(n,m.property(t));
},m.where=function(n,t){
return m.filter(n,m.matcher(t));
},m.findWhere=function(n,t){
return m.find(n,m.matcher(t));
},m.max=function(n,t,r){
var e,u,i=-1/0,o=-1/0;
if(null==t&&null!=n){
n=k(n)?n:m.values(n);
for(var a=0,c=n.length;c>a;a++){
e=n[a],e>i&&(i=e);
}
}else{
t=x(t,r),m.each(n,function(n,r,e){
u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u);
});
}
return i;
},m.min=function(n,t,r){
var e,u,i=1/0,o=1/0;
if(null==t&&null!=n){
n=k(n)?n:m.values(n);
for(var a=0,c=n.length;c>a;a++){
e=n[a],i>e&&(i=e);
}
}else{
t=x(t,r),m.each(n,function(n,r,e){
u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u);
});
}
return i;
},m.shuffle=function(n){
for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++){
t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];
}
return u;
},m.sample=function(n,t,r){
return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t));
},m.sortBy=function(n,t,r){
return t=x(t,r),m.pluck(m.map(n,function(n,r,e){
return {value:n,index:r,criteria:t(n,r,e)};
}).sort(function(n,t){
var r=n.criteria,e=t.criteria;
if(r!==e){
if(r>e||r===void 0){
return 1;
}
if(e>r||e===void 0){
return -1;
}
}
return n.index-t.index;
}),"value");
};
var F=function(n){
return function(t,r,e){
var u={};
return r=x(r,e),m.each(t,function(e,i){
var o=r(e,i,t);
n(u,e,o);
}),u;
};
};
m.groupBy=F(function(n,t,r){
m.has(n,r)?n[r].push(t):n[r]=[t];
}),m.indexBy=F(function(n,t,r){
n[r]=t;
}),m.countBy=F(function(n,t,r){
m.has(n,r)?n[r]++:n[r]=1;
}),m.toArray=function(n){
return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[];
},m.size=function(n){
return null==n?0:k(n)?n.length:m.keys(n).length;
},m.partition=function(n,t,r){
t=x(t,r);
var e=[],u=[];
return m.each(n,function(n,r,i){
(t(n,r,i)?e:u).push(n);
}),[e,u];
},m.first=m.head=m.take=function(n,t,r){
return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t);
},m.initial=function(n,t,r){
return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)));
},m.last=function(n,t,r){
return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t));
},m.rest=m.tail=m.drop=function(n,t,r){
return l.call(n,null==t||r?1:t);
},m.compact=function(n){
return m.filter(n,m.identity);
};
var S=function(n,t,r,e){
for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){
var c=n[o];
if(k(c)&&(m.isArray(c)||m.isArguments(c))){
t||(c=S(c,t,r));
var f=0,l=c.length;
for(u.length+=l;l>f;){
u[i++]=c[f++];
}
}else{
r||(u[i++]=c);
}
}
return u;
};
m.flatten=function(n,t){
return S(n,t,!1);
},m.without=function(n){
return m.difference(n,l.call(arguments,1));
},m.uniq=m.unique=function(n,t,r,e){
m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));
for(var u=[],i=[],o=0,a=O(n);a>o;o++){
var c=n[o],f=r?r(c,o,n):c;
t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c);
}
return u;
},m.union=function(){
return m.uniq(S(arguments,!0,!0));
},m.intersection=function(n){
for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){
var i=n[e];
if(!m.contains(t,i)){
for(var o=1;r>o&&m.contains(arguments[o],i);o++){
}
o===r&&t.push(i);
}
}
return t;
},m.difference=function(n){
var t=S(arguments,!0,!0,1);
return m.filter(n,function(n){
return !m.contains(t,n);
});
},m.zip=function(){
return m.unzip(arguments);
},m.unzip=function(n){
for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++){
r[e]=m.pluck(n,e);
}
return r;
},m.object=function(n,t){
for(var r={},e=0,u=O(n);u>e;e++){
t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];
}
return r;
},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){
r=x(r,e,1);
for(var u=r(t),i=0,o=O(n);o>i;){
var a=Math.floor((i+o)/2);
r(n[a])<u?i=a+1:o=a;
}
return i;
},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){
null==t&&(t=n||0,n=0),r=r||1;
for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r){
u[i]=n;
}
return u;
};
var E=function(n,t,r,e,u){
if(!(e instanceof t)){
return n.apply(r,u);
}
var i=j(n.prototype),o=n.apply(i,u);
return m.isObject(o)?o:i;
};
m.bind=function(n,t){
if(g&&n.bind===g){
return g.apply(n,l.call(arguments,1));
}
if(!m.isFunction(n)){
throw new TypeError("Bind must be called on a function");
}
var r=l.call(arguments,2),e=function(){
return E(n,e,t,this,r.concat(l.call(arguments)));
};
return e;
},m.partial=function(n){
var t=l.call(arguments,1),r=function(){
for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++){
i[o]=t[o]===m?arguments[e++]:t[o];
}
for(;e<arguments.length;){
i.push(arguments[e++]);
}
return E(n,r,this,this,i);
};
return r;
},m.bindAll=function(n){
var t,r,e=arguments.length;
if(1>=e){
throw new Error("bindAll must be passed function names");
}
for(t=1;e>t;t++){
r=arguments[t],n[r]=m.bind(n[r],n);
}
return n;
},m.memoize=function(n,t){
var r=function(e){
var u=r.cache,i=""+(t?t.apply(this,arguments):e);
return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i];
};
return r.cache={},r;
},m.delay=function(n,t){
var r=l.call(arguments,2);
return setTimeout(function(){
return n.apply(null,r);
},t);
},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){
var e,u,i,o=null,a=0;
r||(r={});
var c=function(){
a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null);
};
return function(){
var f=m.now();
a||r.leading!==!1||(a=f);
var l=t-(f-a);
return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i;
};
},m.debounce=function(n,t,r){
var e,u,i,o,a,c=function(){
var f=m.now()-o;
t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)));
};
return function(){
i=this,u=arguments,o=m.now();
var f=r&&!e;
return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a;
};
},m.wrap=function(n,t){
return m.partial(t,n);
},m.negate=function(n){
return function(){
return !n.apply(this,arguments);
};
},m.compose=function(){
var n=arguments,t=n.length-1;
return function(){
for(var r=t,e=n[t].apply(this,arguments);r--;){
e=n[r].call(this,e);
}
return e;
};
},m.after=function(n,t){
return function(){
return --n<1?t.apply(this,arguments):void 0;
};
},m.before=function(n,t){
var r;
return function(){
return --n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r;
};
},m.once=m.partial(m.before,2);
var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];
m.keys=function(n){
if(!m.isObject(n)){
return [];
}
if(v){
return v(n);
}
var t=[];
for(var r in n){
m.has(n,r)&&t.push(r);
}
return M&&e(n,t),t;
},m.allKeys=function(n){
if(!m.isObject(n)){
return [];
}
var t=[];
for(var r in n){
t.push(r);
}
return M&&e(n,t),t;
},m.values=function(n){
for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++){
e[u]=n[t[u]];
}
return e;
},m.mapObject=function(n,t,r){
t=x(t,r);
for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++){
e=u[a],o[e]=t(n[e],e,n);
}
return o;
},m.pairs=function(n){
for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++){
e[u]=[t[u],n[t[u]]];
}
return e;
},m.invert=function(n){
for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++){
t[n[r[e]]]=r[e];
}
return t;
},m.functions=m.methods=function(n){
var t=[];
for(var r in n){
m.isFunction(n[r])&&t.push(r);
}
return t.sort();
},m.extend=_51a(m.allKeys),m.extendOwn=m.assign=_51a(m.keys),m.findKey=function(n,t,r){
t=x(t,r);
for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++){
if(e=u[i],t(n[e],e,n)){
return e;
}
}
},m.pick=function(n,t,r){
var e,u,i={},o=n;
if(null==o){
return i;
}
m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){
return t in r;
},o=Object(o));
for(var a=0,c=u.length;c>a;a++){
var f=u[a],l=o[f];
e(l,f,o)&&(i[f]=l);
}
return i;
},m.omit=function(n,t,r){
if(m.isFunction(t)){
t=m.negate(t);
}else{
var e=m.map(S(arguments,!1,!1,1),String);
t=function(n,t){
return !m.contains(e,t);
};
}
return m.pick(n,t,r);
},m.defaults=_51a(m.allKeys,!0),m.create=function(n,t){
var r=j(n);
return t&&m.extendOwn(r,t),r;
},m.clone=function(n){
return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n;
},m.tap=function(n,t){
return t(n),n;
},m.isMatch=function(n,t){
var r=m.keys(t),e=r.length;
if(null==n){
return !e;
}
for(var u=Object(n),i=0;e>i;i++){
var o=r[i];
if(t[o]!==u[o]||!(o in u)){
return !1;
}
}
return !0;
};
var N=function(n,t,r,e){
if(n===t){
return 0!==n||1/n===1/t;
}
if(null==n||null==t){
return n===t;
}
n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);
var u=s.call(n);
if(u!==s.call(t)){
return !1;
}
switch(u){
case "[object RegExp]":
case "[object String]":
return ""+n==""+t;
case "[object Number]":
return +n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;
case "[object Date]":
case "[object Boolean]":
return +n===+t;
}
var i="[object Array]"===u;
if(!i){
if("object"!=typeof n||"object"!=typeof t){
return !1;
}
var o=n.constructor,a=t.constructor;
if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor" in n&&"constructor" in t){
return !1;
}
}
r=r||[],e=e||[];
for(var c=r.length;c--;){
if(r[c]===n){
return e[c]===t;
}
}
if(r.push(n),e.push(t),i){
if(c=n.length,c!==t.length){
return !1;
}
for(;c--;){
if(!N(n[c],t[c],r,e)){
return !1;
}
}
}else{
var f,l=m.keys(n);
if(c=l.length,m.keys(t).length!==c){
return !1;
}
for(;c--;){
if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e)){
return !1;
}
}
}
return r.pop(),e.pop(),!0;
};
m.isEqual=function(n,t){
return N(n,t);
},m.isEmpty=function(n){
return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length;
},m.isElement=function(n){
return !(!n||1!==n.nodeType);
},m.isArray=h||function(n){
return "[object Array]"===s.call(n);
},m.isObject=function(n){
var t=typeof n;
return "function"===t||"object"===t&&!!n;
},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){
m["is"+n]=function(t){
return s.call(t)==="[object "+n+"]";
};
}),m.isArguments(arguments)||(m.isArguments=function(n){
return m.has(n,"callee");
}),"function"!=typeof /./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){
return "function"==typeof n||!1;
}),m.isFinite=function(n){
return isFinite(n)&&!isNaN(parseFloat(n));
},m.isNaN=function(n){
return m.isNumber(n)&&n!==+n;
},m.isBoolean=function(n){
return n===!0||n===!1||"[object Boolean]"===s.call(n);
},m.isNull=function(n){
return null===n;
},m.isUndefined=function(n){
return n===void 0;
},m.has=function(n,t){
return null!=n&&p.call(n,t);
},m.noConflict=function(){
return u._=i,this;
},m.identity=function(n){
return n;
},m.constant=function(n){
return function(){
return n;
};
},m.noop=function(){
},m.property=w,m.propertyOf=function(n){
return null==n?function(){
}:function(t){
return n[t];
};
},m.matcher=m.matches=function(n){
return n=m.extendOwn({},n),function(t){
return m.isMatch(t,n);
};
},m.times=function(n,t,r){
var e=Array(Math.max(0,n));
t=b(t,r,1);
for(var u=0;n>u;u++){
e[u]=t(u);
}
return e;
},m.random=function(n,t){
return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1));
},m.now=Date.now||function(){
return (new Date).getTime();
};
var B={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){
var t=function(t){
return n[t];
},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");
return function(n){
return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n;
};
};
m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){
var e=null==n?void 0:n[t];
return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e;
};
var q=0;
m.uniqueId=function(n){
var t=++q+"";
return n?n+t:t;
},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){
return "\\"+z[n];
};
m.template=function(n,t,r){
!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);
var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";
n.replace(e,function(t,r,e,o,a){
return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t;
}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";
try{
var o=new Function(t.variable||"obj","_",i);
}
catch(a){
throw a.source=i,a;
}
var c=function(n){
return o.call(this,n,m);
},f=t.variable||"obj";
return c.source="function("+f+"){\n"+i+"}",c;
},m.chain=function(n){
var t=m(n);
return t._chain=!0,t;
};
var P=function(n,t){
return n._chain?m(t).chain():t;
};
m.mixin=function(n){
m.each(m.functions(n),function(t){
var r=m[t]=n[t];
m.prototype[t]=function(){
var n=[this._wrapped];
return f.apply(n,arguments),P(this,r.apply(m,n));
};
});
},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){
var t=o[n];
m.prototype[n]=function(){
var r=this._wrapped;
return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r);
};
}),m.each(["concat","join","slice"],function(n){
var t=o[n];
m.prototype[n]=function(){
return P(this,t.apply(this._wrapped,arguments));
};
}),m.prototype.value=function(){
return this._wrapped;
},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){
return ""+this._wrapped;
},"function"==typeof define&&define.amd&&define("underscore",[],function(){
return m;
});
}).call(this);
!function(e){
if("object"==typeof exports){
module.exports=e();
}else{
if("function"==typeof define&&define.amd){
define(e);
}else{
var r;
"undefined"!=typeof window?r=window:"undefined"!=typeof global?r=global:"undefined"!=typeof self&&(r=self),r.s=e();
}
}
}(function(){
return function e(r,t,n){
function i(o,u){
if(!t[o]){
if(!r[o]){
var c="function"==typeof require&&require;
if(!u&&c){
return c(o,!0);
}
if(a){
return a(o,!0);
}
throw new Error("Cannot find module '"+o+"'");
}
var p=t[o]={exports:{}};
r[o][0].call(p.exports,function(e){
var t=r[o][1][e];
return i(t?t:e);
},p,p.exports,e,r,t,n);
}
return t[o].exports;
};
for(var a="function"==typeof require&&require,o=0;o<n.length;o++){
i(n[o]);
}
return i;
}({1:[function(e,r){
var t=e("./trim"),n=e("./decapitalize");
r.exports=function(e,r){
return e=t(e).replace(/[-_\s]+(.)?/g,function(e,r){
return r?r.toUpperCase():"";
}),r===!0?n(e):e;
};
},{"./decapitalize":10,"./trim":62}],2:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e,r){
e=t(e);
var n=r?e.slice(1).toLowerCase():e.slice(1);
return e.charAt(0).toUpperCase()+n;
};
},{"./helper/makeString":21}],3:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e){
return t(e).split("");
};
},{"./helper/makeString":21}],4:[function(e,r){
r.exports=function(e,r){
return null==e?[]:(e=String(e),r=~~r,r>0?e.match(new RegExp(".{1,"+r+"}","g")):[e]);
};
},{}],5:[function(e,r){
var t=e("./capitalize"),n=e("./camelize"),i=e("./helper/makeString");
r.exports=function(e){
return e=i(e),t(n(e.replace(/[\W_]/g," ")).replace(/\s/g,""));
};
},{"./camelize":1,"./capitalize":2,"./helper/makeString":21}],6:[function(e,r){
var t=e("./trim");
r.exports=function(e){
return t(e).replace(/\s\s+/g," ");
};
},{"./trim":62}],7:[function(e,r){
var t=e("./helper/makeString"),n="\u0105\xe0\xe1\xe4\xe2\xe3\xe5\xe6\u0103\u0107\u010d\u0109\u0119\xe8\xe9\xeb\xea\u011d\u0125\xec\xed\xef\xee\u0135\u0142\u013e\u0144\u0148\xf2\xf3\xf6\u0151\xf4\xf5\xf0\xf8\u015b\u0219\u0161\u015d\u0165\u021b\u016d\xf9\xfa\xfc\u0171\xfb\xf1\xff\xfd\xe7\u017c\u017a\u017e",i="aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz";
n+=n.toUpperCase(),i+=i.toUpperCase(),i=i.split(""),n+="\xdf",i.push("ss"),r.exports=function(e){
return t(e).replace(/.{1}/g,function(e){
var r=n.indexOf(e);
return -1===r?e:i[r];
});
};
},{"./helper/makeString":21}],8:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e,r){
return e=t(e),r=t(r),0===e.length||0===r.length?0:e.split(r).length-1;
};
},{"./helper/makeString":21}],9:[function(e,r){
var t=e("./trim");
r.exports=function(e){
return t(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase();
};
},{"./trim":62}],10:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e){
return e=t(e),e.charAt(0).toLowerCase()+e.slice(1);
};
},{"./helper/makeString":21}],11:[function(e,r){
function t(e){
for(var r=e.match(/^[\s\\t]*/gm),t=r[0].length,n=1;n<r.length;n++){
t=Math.min(r[n].length,t);
}
return t;
};
var n=e("./helper/makeString");
r.exports=function(e,r){
e=n(e);
var i,a=t(e);
return 0===a?e:(i="string"==typeof r?new RegExp("^"+r,"gm"):new RegExp("^[ \\t]{"+a+"}","gm"),e.replace(i,""));
};
},{"./helper/makeString":21}],12:[function(e,r){
var t=e("./helper/makeString"),n=e("./helper/toPositive");
r.exports=function(e,r,i){
return e=t(e),r=""+r,i="undefined"==typeof i?e.length-r.length:Math.min(n(i),e.length)-r.length,i>=0&&e.indexOf(r,i)===i;
};
},{"./helper/makeString":21,"./helper/toPositive":23}],13:[function(e,r){
var t=e("./helper/makeString"),n=e("./helper/escapeChars"),i="[";
for(var a in n){
i+=a;
}
i+="]";
var o=new RegExp(i,"g");
r.exports=function(e){
return t(e).replace(o,function(e){
return "&"+n[e]+";";
});
};
},{"./helper/escapeChars":18,"./helper/makeString":21}],14:[function(e,r){
r.exports=function(){
var e={};
for(var r in this){
this.hasOwnProperty(r)&&!r.match(/^(?:include|contains|reverse|join)$/)&&(e[r]=this[r]);
}
return e;
};
},{}],15:[function(e,r){
"use strict";
function t(e){
return this instanceof t?void (this._wrapped=e):new t(e);
};
function n(e,r){
"function"==typeof r&&(t.prototype[e]=function(){
var e=[this._wrapped].concat(Array.prototype.slice.call(arguments)),n=r.apply(null,e);
return "string"==typeof n?new t(n):n;
});
};
function i(e){
n(e,function(r){
var t=Array.prototype.slice.call(arguments,1);
return String.prototype[e].apply(r,t);
});
};
t.VERSION="3.2.2",t.isBlank=e("./isBlank"),t.stripTags=e("./stripTags"),t.capitalize=e("./capitalize"),t.decapitalize=e("./decapitalize"),t.chop=e("./chop"),t.trim=e("./trim"),t.clean=e("./clean"),t.cleanDiacritics=e("./cleanDiacritics"),t.count=e("./count"),t.chars=e("./chars"),t.swapCase=e("./swapCase"),t.escapeHTML=e("./escapeHTML"),t.unescapeHTML=e("./unescapeHTML"),t.splice=e("./splice"),t.insert=e("./insert"),t.replaceAll=e("./replaceAll"),t.include=e("./include"),t.join=e("./join"),t.lines=e("./lines"),t.dedent=e("./dedent"),t.reverse=e("./reverse"),t.startsWith=e("./startsWith"),t.endsWith=e("./endsWith"),t.pred=e("./pred"),t.succ=e("./succ"),t.titleize=e("./titleize"),t.camelize=e("./camelize"),t.underscored=e("./underscored"),t.dasherize=e("./dasherize"),t.classify=e("./classify"),t.humanize=e("./humanize"),t.ltrim=e("./ltrim"),t.rtrim=e("./rtrim"),t.truncate=e("./truncate"),t.prune=e("./prune"),t.words=e("./words"),t.pad=e("./pad"),t.lpad=e("./lpad"),t.rpad=e("./rpad"),t.lrpad=e("./lrpad"),t.sprintf=e("./sprintf"),t.vsprintf=e("./vsprintf"),t.toNumber=e("./toNumber"),t.numberFormat=e("./numberFormat"),t.strRight=e("./strRight"),t.strRightBack=e("./strRightBack"),t.strLeft=e("./strLeft"),t.strLeftBack=e("./strLeftBack"),t.toSentence=e("./toSentence"),t.toSentenceSerial=e("./toSentenceSerial"),t.slugify=e("./slugify"),t.surround=e("./surround"),t.quote=e("./quote"),t.unquote=e("./unquote"),t.repeat=e("./repeat"),t.naturalCmp=e("./naturalCmp"),t.levenshtein=e("./levenshtein"),t.toBoolean=e("./toBoolean"),t.exports=e("./exports"),t.escapeRegExp=e("./helper/escapeRegExp"),t.wrap=e("./wrap"),t.strip=t.trim,t.lstrip=t.ltrim,t.rstrip=t.rtrim,t.center=t.lrpad,t.rjust=t.lpad,t.ljust=t.rpad,t.contains=t.include,t.q=t.quote,t.toBool=t.toBoolean,t.camelcase=t.camelize,t.prototype={value:function(){
return this._wrapped;
}};
for(var a in t){
n(a,t[a]);
}
n("tap",function(e,r){
return r(e);
});
var o=["toUpperCase","toLowerCase","split","replace","slice","substring","substr","concat"];
for(var a in o){
i(o[a]);
}
r.exports=t;
},{"./camelize":1,"./capitalize":2,"./chars":3,"./chop":4,"./classify":5,"./clean":6,"./cleanDiacritics":7,"./count":8,"./dasherize":9,"./decapitalize":10,"./dedent":11,"./endsWith":12,"./escapeHTML":13,"./exports":14,"./helper/escapeRegExp":19,"./humanize":24,"./include":25,"./insert":26,"./isBlank":27,"./join":28,"./levenshtein":29,"./lines":30,"./lpad":31,"./lrpad":32,"./ltrim":33,"./naturalCmp":34,"./numberFormat":35,"./pad":36,"./pred":37,"./prune":38,"./quote":39,"./repeat":40,"./replaceAll":41,"./reverse":42,"./rpad":43,"./rtrim":44,"./slugify":45,"./splice":46,"./sprintf":47,"./startsWith":48,"./strLeft":49,"./strLeftBack":50,"./strRight":51,"./strRightBack":52,"./stripTags":53,"./succ":54,"./surround":55,"./swapCase":56,"./titleize":57,"./toBoolean":58,"./toNumber":59,"./toSentence":60,"./toSentenceSerial":61,"./trim":62,"./truncate":63,"./underscored":64,"./unescapeHTML":65,"./unquote":66,"./vsprintf":67,"./words":68,"./wrap":69}],16:[function(e,r){
var t=e("./makeString");
r.exports=function(e,r){
return e=t(e),0===e.length?"":e.slice(0,-1)+String.fromCharCode(e.charCodeAt(e.length-1)+r);
};
},{"./makeString":21}],17:[function(e,r){
var t=e("./escapeRegExp");
r.exports=function(e){
return null==e?"\\s":e.source?e.source:"["+t(e)+"]";
};
},{"./escapeRegExp":19}],18:[function(e,r){
var t={"\xa2":"cent","\xa3":"pound","\xa5":"yen","\u20ac":"euro","\xa9":"copy","\xae":"reg","<":"lt",">":"gt","\"":"quot","&":"amp","'":"#39"};
r.exports=t;
},{}],19:[function(e,r){
var t=e("./makeString");
r.exports=function(e){
return t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1");
};
},{"./makeString":21}],20:[function(e,r){
var t={nbsp:" ",cent:"\xa2",pound:"\xa3",yen:"\xa5",euro:"\u20ac",copy:"\xa9",reg:"\xae",lt:"<",gt:">",quot:"\"",amp:"&",apos:"'"};
r.exports=t;
},{}],21:[function(e,r){
r.exports=function(e){
return null==e?"":""+e;
};
},{}],22:[function(e,r){
r.exports=function(e,r){
if(1>r){
return "";
}
for(var t="";r>0;){
1&r&&(t+=e),r>>=1,e+=e;
}
return t;
};
},{}],23:[function(e,r){
r.exports=function(e){
return 0>e?0:+e||0;
};
},{}],24:[function(e,r){
var t=e("./capitalize"),n=e("./underscored"),i=e("./trim");
r.exports=function(e){
return t(i(n(e).replace(/_id$/,"").replace(/_/g," ")));
};
},{"./capitalize":2,"./trim":62,"./underscored":64}],25:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e,r){
return ""===r?!0:-1!==t(e).indexOf(r);
};
},{"./helper/makeString":21}],26:[function(e,r){
var t=e("./splice");
r.exports=function(e,r,n){
return t(e,r,0,n);
};
},{"./splice":46}],27:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e){
return /^\s*$/.test(t(e));
};
},{"./helper/makeString":21}],28:[function(e,r){
var t=e("./helper/makeString"),n=[].slice;
r.exports=function(){
var e=n.call(arguments),r=e.shift();
return e.join(t(r));
};
},{"./helper/makeString":21}],29:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e,r){
"use strict";
if(e=t(e),r=t(r),e===r){
return 0;
}
if(!e||!r){
return Math.max(e.length,r.length);
}
for(var n=new Array(r.length+1),i=0;i<n.length;++i){
n[i]=i;
}
for(i=0;i<e.length;++i){
for(var a=i+1,o=0;o<r.length;++o){
var u=a;
a=n[o]+(e.charAt(i)===r.charAt(o)?0:1);
var c=u+1;
a>c&&(a=c),c=n[o+1]+1,a>c&&(a=c),n[o]=u;
}
n[o]=a;
}
return a;
};
},{"./helper/makeString":21}],30:[function(e,r){
r.exports=function(e){
return null==e?[]:String(e).split(/\r\n?|\n/);
};
},{}],31:[function(e,r){
var t=e("./pad");
r.exports=function(e,r,n){
return t(e,r,n);
};
},{"./pad":36}],32:[function(e,r){
var t=e("./pad");
r.exports=function(e,r,n){
return t(e,r,n,"both");
};
},{"./pad":36}],33:[function(e,r){
var t=e("./helper/makeString"),n=e("./helper/defaultToWhiteSpace"),i=String.prototype.trimLeft;
r.exports=function(e,r){
return e=t(e),!r&&i?i.call(e):(r=n(r),e.replace(new RegExp("^"+r+"+"),""));
};
},{"./helper/defaultToWhiteSpace":17,"./helper/makeString":21}],34:[function(e,r){
r.exports=function(e,r){
if(e==r){
return 0;
}
if(!e){
return -1;
}
if(!r){
return 1;
}
for(var t=/(\.\d+|\d+|\D+)/g,n=String(e).match(t),i=String(r).match(t),a=Math.min(n.length,i.length),o=0;a>o;o++){
var u=n[o],c=i[o];
if(u!==c){
var p=+u,s=+c;
return p===p&&s===s?p>s?1:-1:c>u?-1:1;
}
}
return n.length!=i.length?n.length-i.length:r>e?-1:1;
};
},{}],35:[function(e,r){
r.exports=function(e,r,t,n){
if(isNaN(e)||null==e){
return "";
}
e=e.toFixed(~~r),n="string"==typeof n?n:",";
var i=e.split("."),a=i[0],o=i[1]?(t||".")+i[1]:"";
return a.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+n)+o;
};
},{}],36:[function(e,r){
var t=e("./helper/makeString"),n=e("./helper/strRepeat");
r.exports=function(e,r,i,a){
e=t(e),r=~~r;
var o=0;
switch(i?i.length>1&&(i=i.charAt(0)):i=" ",a){
case "right":
return o=r-e.length,e+n(i,o);
case "both":
return o=r-e.length,n(i,Math.ceil(o/2))+e+n(i,Math.floor(o/2));
default:
return o=r-e.length,n(i,o)+e;
}
};
},{"./helper/makeString":21,"./helper/strRepeat":22}],37:[function(e,r){
var t=e("./helper/adjacent");
r.exports=function(e){
return t(e,-1);
};
},{"./helper/adjacent":16}],38:[function(e,r){
var t=e("./helper/makeString"),n=e("./rtrim");
r.exports=function(e,r,i){
if(e=t(e),r=~~r,i=null!=i?String(i):"...",e.length<=r){
return e;
}
var a=function(e){
return e.toUpperCase()!==e.toLowerCase()?"A":" ";
},o=e.slice(0,r+1).replace(/.(?=\W*\w*$)/g,a);
return o=o.slice(o.length-2).match(/\w\w/)?o.replace(/\s*\S+$/,""):n(o.slice(0,o.length-1)),(o+i).length>e.length?e:e.slice(0,o.length)+i;
};
},{"./helper/makeString":21,"./rtrim":44}],39:[function(e,r){
var t=e("./surround");
r.exports=function(e,r){
return t(e,r||"\"");
};
},{"./surround":55}],40:[function(e,r){
var t=e("./helper/makeString"),n=e("./helper/strRepeat");
r.exports=function i(e,r,a){
if(e=t(e),r=~~r,null==a){
return n(e,r);
}
for(var i=[];r>0;i[--r]=e){
}
return i.join(a);
};
},{"./helper/makeString":21,"./helper/strRepeat":22}],41:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e,r,n,i){
var a=i===!0?"gi":"g",o=new RegExp(r,a);
return t(e).replace(o,n);
};
},{"./helper/makeString":21}],42:[function(e,r){
var t=e("./chars");
r.exports=function(e){
return t(e).reverse().join("");
};
},{"./chars":3}],43:[function(e,r){
var t=e("./pad");
r.exports=function(e,r,n){
return t(e,r,n,"right");
};
},{"./pad":36}],44:[function(e,r){
var t=e("./helper/makeString"),n=e("./helper/defaultToWhiteSpace"),i=String.prototype.trimRight;
r.exports=function(e,r){
return e=t(e),!r&&i?i.call(e):(r=n(r),e.replace(new RegExp(r+"+$"),""));
};
},{"./helper/defaultToWhiteSpace":17,"./helper/makeString":21}],45:[function(e,r){
var t=(e("./helper/makeString"),e("./helper/defaultToWhiteSpace"),e("./trim")),n=e("./dasherize"),i=e("./cleanDiacritics");
r.exports=function(e){
return t(n(i(e).replace(/[^\w\s-]/g,"-").toLowerCase()),"-");
};
},{"./cleanDiacritics":7,"./dasherize":9,"./helper/defaultToWhiteSpace":17,"./helper/makeString":21,"./trim":62}],46:[function(e,r){
var t=e("./chars");
r.exports=function(e,r,n,i){
var a=t(e);
return a.splice(~~r,~~n,i),a.join("");
};
},{"./chars":3}],47:[function(e,r){
var t=e("./helper/strRepeat"),n=Object.prototype.toString,i=function(){
function e(e){
return n.call(e).slice(8,-1).toLowerCase();
};
var r=t,a=function(){
return a.cache.hasOwnProperty(arguments[0])||(a.cache[arguments[0]]=a.parse(arguments[0])),a.format.call(null,a.cache[arguments[0]],arguments);
};
return a.format=function(t,n){
var a,o,u,c,p,s,l,f=1,h=t.length,g="",m=[];
for(o=0;h>o;o++){
if(g=e(t[o]),"string"===g){
m.push(t[o]);
}else{
if("array"===g){
if(c=t[o],c[2]){
for(a=n[f],u=0;u<c[2].length;u++){
if(!a.hasOwnProperty(c[2][u])){
throw new Error(i("[_.sprintf] property \"%s\" does not exist",c[2][u]));
}
a=a[c[2][u]];
}
}else{
a=c[1]?n[c[1]]:n[f++];
}
if(/[^s]/.test(c[8])&&"number"!=e(a)){
throw new Error(i("[_.sprintf] expecting number but found %s",e(a)));
}
switch(c[8]){
case "b":
a=a.toString(2);
break;
case "c":
a=String.fromCharCode(a);
break;
case "d":
a=parseInt(a,10);
break;
case "e":
a=c[7]?a.toExponential(c[7]):a.toExponential();
break;
case "f":
a=c[7]?parseFloat(a).toFixed(c[7]):parseFloat(a);
break;
case "o":
a=a.toString(8);
break;
case "s":
a=(a=String(a))&&c[7]?a.substring(0,c[7]):a;
break;
case "u":
a=Math.abs(a);
break;
case "x":
a=a.toString(16);
break;
case "X":
a=a.toString(16).toUpperCase();
}
a=/[def]/.test(c[8])&&c[3]&&a>=0?"+"+a:a,s=c[4]?"0"==c[4]?"0":c[4].charAt(1):" ",l=c[6]-String(a).length,p=c[6]?r(s,l):"",m.push(c[5]?a+p:p+a);
}
}
}
return m.join("");
},a.cache={},a.parse=function(e){
for(var r=e,t=[],n=[],i=0;r;){
if(null!==(t=/^[^\x25]+/.exec(r))){
n.push(t[0]);
}else{
if(null!==(t=/^\x25{2}/.exec(r))){
n.push("%");
}else{
if(null===(t=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(r))){
throw new Error("[_.sprintf] huh?");
}
if(t[2]){
i|=1;
var a=[],o=t[2],u=[];
if(null===(u=/^([a-z_][a-z_\d]*)/i.exec(o))){
throw new Error("[_.sprintf] huh?");
}
for(a.push(u[1]);""!==(o=o.substring(u[0].length));){
if(null!==(u=/^\.([a-z_][a-z_\d]*)/i.exec(o))){
a.push(u[1]);
}else{
if(null===(u=/^\[(\d+)\]/.exec(o))){
throw new Error("[_.sprintf] huh?");
}
a.push(u[1]);
}
}
t[2]=a;
}else{
i|=2;
}
if(3===i){
throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
}
n.push(t);
}
}
r=r.substring(t[0].length);
}
return n;
},a;
}();
r.exports=i;
},{"./helper/strRepeat":22}],48:[function(e,r){
var t=e("./helper/makeString"),n=e("./helper/toPositive");
r.exports=function(e,r,i){
return e=t(e),r=""+r,i=null==i?0:Math.min(n(i),e.length),e.lastIndexOf(r,i)===i;
};
},{"./helper/makeString":21,"./helper/toPositive":23}],49:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e,r){
e=t(e),r=t(r);
var n=r?e.indexOf(r):-1;
return ~n?e.slice(0,n):e;
};
},{"./helper/makeString":21}],50:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e,r){
e=t(e),r=t(r);
var n=e.lastIndexOf(r);
return ~n?e.slice(0,n):e;
};
},{"./helper/makeString":21}],51:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e,r){
e=t(e),r=t(r);
var n=r?e.indexOf(r):-1;
return ~n?e.slice(n+r.length,e.length):e;
};
},{"./helper/makeString":21}],52:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e,r){
e=t(e),r=t(r);
var n=r?e.lastIndexOf(r):-1;
return ~n?e.slice(n+r.length,e.length):e;
};
},{"./helper/makeString":21}],53:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e){
return t(e).replace(/<\/?[^>]+>/g,"");
};
},{"./helper/makeString":21}],54:[function(e,r){
var t=e("./helper/adjacent");
r.exports=function(e){
return t(e,1);
};
},{"./helper/adjacent":16}],55:[function(e,r){
r.exports=function(e,r){
return [r,e,r].join("");
};
},{}],56:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e){
return t(e).replace(/\S/g,function(e){
return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase();
});
};
},{"./helper/makeString":21}],57:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e){
return t(e).toLowerCase().replace(/(?:^|\s|-)\S/g,function(e){
return e.toUpperCase();
});
};
},{"./helper/makeString":21}],58:[function(e,r){
function t(e,r){
var t,n,i=e.toLowerCase();
for(r=[].concat(r),t=0;t<r.length;t+=1){
if(n=r[t]){
if(n.test&&n.test(e)){
return !0;
}
if(n.toLowerCase()===i){
return !0;
}
}
}
};
var n=e("./trim");
r.exports=function(e,r,i){
return "number"==typeof e&&(e=""+e),"string"!=typeof e?!!e:(e=n(e),t(e,r||["true","1"])?!0:t(e,i||["false","0"])?!1:void 0);
};
},{"./trim":62}],59:[function(e,r){
e("./trim");
r.exports=function(e,r){
if(null==e){
return 0;
}
var t=Math.pow(10,isFinite(r)?r:0);
return Math.round(e*t)/t;
};
},{"./trim":62}],60:[function(e,r){
var t=e("./rtrim");
r.exports=function(e,r,n,i){
r=r||", ",n=n||" and ";
var a=e.slice(),o=a.pop();
return e.length>2&&i&&(n=t(r)+n),a.length?a.join(r)+n+o:o;
};
},{"./rtrim":44}],61:[function(e,r){
var t=e("./toSentence");
r.exports=function(e,r,n){
return t(e,r,n,!0);
};
},{"./toSentence":60}],62:[function(e,r){
var t=e("./helper/makeString"),n=e("./helper/defaultToWhiteSpace"),i=String.prototype.trim;
r.exports=function(e,r){
return e=t(e),!r&&i?i.call(e):(r=n(r),e.replace(new RegExp("^"+r+"+|"+r+"+$","g"),""));
};
},{"./helper/defaultToWhiteSpace":17,"./helper/makeString":21}],63:[function(e,r){
var t=e("./helper/makeString");
r.exports=function(e,r,n){
return e=t(e),n=n||"...",r=~~r,e.length>r?e.slice(0,r)+n:e;
};
},{"./helper/makeString":21}],64:[function(e,r){
var t=e("./trim");
r.exports=function(e){
return t(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase();
};
},{"./trim":62}],65:[function(e,r){
var t=e("./helper/makeString"),n=e("./helper/htmlEntities");
r.exports=function(e){
return t(e).replace(/\&([^;]+);/g,function(e,r){
var t;
return r in n?n[r]:(t=r.match(/^#x([\da-fA-F]+)$/))?String.fromCharCode(parseInt(t[1],16)):(t=r.match(/^#(\d+)$/))?String.fromCharCode(~~t[1]):e;
});
};
},{"./helper/htmlEntities":20,"./helper/makeString":21}],66:[function(e,r){
r.exports=function(e,r){
return r=r||"\"",e[0]===r&&e[e.length-1]===r?e.slice(1,e.length-1):e;
};
},{}],67:[function(e,r){
var t=e("./sprintf");
r.exports=function(e,r){
return r.unshift(e),t.apply(null,r);
};
},{"./sprintf":47}],68:[function(e,r){
var t=e("./isBlank"),n=e("./trim");
r.exports=function(e,r){
return t(e)?[]:n(e,r).split(r||/\s+/);
};
},{"./isBlank":27,"./trim":62}],69:[function(e,r){
makeString=e("./helper/makeString"),r.exports=function(e,r){
if(e=makeString(e),r=r||{},width=r.width||75,seperator=r.seperator||"\n",cut=r.cut||!1,preserveSpaces=r.preserveSpaces||!1,trailingSpaces=r.trailingSpaces||!1,0>=width){
return e;
}
if(cut){
for(index=0,result="";index<e.length;){
index%width==0&&index>0&&(result+=seperator),result+=e.charAt(index),index++;
}
if(trailingSpaces){
for(;index%width>0;){
result+=" ",index++;
}
}
return result;
}
for(words=e.split(" "),result="",current_column=0;words.length>0;){
if(1+words[0].length+current_column>width&&current_column>0){
if(preserveSpaces){
result+=" ",current_column++;
}else{
if(trailingSpaces){
for(;width>current_column;){
result+=" ",current_column++;
}
}
}
result+=seperator,current_column=0;
}
current_column>0&&(result+=" ",current_column++),result+=words[0],current_column+=words[0].length,words.shift();
}
if(trailingSpaces){
for(;width>current_column;){
result+=" ",current_column++;
}
}
return result;
};
},{"./helper/makeString":21}]},{},[15])(15);
});
var selectorUtil={getElementsByName:function(name){
var _51b=[];
if(typeof document.querySelectorAll==="function"){
_51b=document.querySelectorAll("[name='"+name+"']");
}else{
if((typeof document.getElementsByName==="function")||(navigator.userAgent.toLowerCase().indexOf("msie")!=-1&&typeof document.getElementsByName==="object")){
_51b=document.getElementsByName(name);
}
}
return _51b;
},getElementsByClassName:function(name){
var _51c=[];
if(typeof document.querySelectorAll==="function"){
_51c=document.querySelectorAll("[class='"+name+"']");
}else{
if(typeof document.getElementsByClassName==="function"){
_51c=document.getElementsByClassName(name);
}
}
return _51c;
}};
var BrowserDetect={init:function(){
this.browser=this.searchString(this.dataBrowser)||"An unknown browser";
this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";
this.OS=this.searchString(this.dataOS)||"an unknown OS";
},searchString:function(data){
for(var i=0;i<data.length;i++){
var _51d=data[i].string;
var _51e=data[i].prop;
this.versionSearchString=data[i].versionSearch||data[i].identity;
if(_51d){
if(_51d.indexOf(data[i].subString)!=-1){
return data[i].identity;
}
}else{
if(_51e){
return data[i].identity;
}
}
}
},searchVersion:function(_51f){
var _520=_51f.indexOf(this.versionSearchString);
if(_520==-1){
return;
}
return parseFloat(_51f.substring(_520+this.versionSearchString.length+1));
},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};
BrowserDetect.init();
(function(_521,_522){
_521.addEventListener("message",function(e){
if(_.has(e.data,"name")&&e.data.name==="pidoco:calibrateGyroscope"){
var _523=false;
if(_.has(e.data,"persist")&&e.data.persist===true){
_523=true;
}
_524.calibrate(_523);
}
},false);
var _525=navigator.userAgent.match(/iPad|iPhone/),_526=navigator.userAgent.match(/Android/);
var _527=0,_528=0,_529=0,_52a=0,_52b=false,_52c=0,_52d=0,_52e=0,_52f=false,_530=null,_531=null,_532=false;
var _533={flip:[],tilt:[],shake:[]};
var _534={flip:{threshold:(_525)?10:30,enabled:true,callback:function(){
}},tilt:{threshold:2,angle:20,rotation:"leftRight",direction:null,enabled:true,callback:function(){
}},shake:{threshold:(_525)?2:20,sensitive:true,durationMin:700,durationMinBetweenShakes:400,enabled:true,callback:function(){
}}};
var _535={flip:function(){
this.flipped=false;
},tilt:function(){
this.alreadyAchieve=false;
},shake:function(){
this.state="pause";
this.stopShakeTimeout=null;
this.start=null;
}};
var _524=function(type,_536){
if(!hasOwnProperty.call(_533,type)){
throw "Type "+type+" is not supported";
}
if(typeof _536==="function"){
_536={enabled:true,callback:_536};
}
_537(_536,_534[type]);
this.type=type;
this.options=_536;
_533[type].push(this);
this.init=_535[type];
this.init();
return this;
};
_524.prototype.disable=function(){
this.enabled=false;
};
_524.prototype.enable=function(){
this.enabled=true;
};
var _538=function(e){
var _539,beta,_53a,_53b,_53c,_53d;
if(_52f){
_52c=e.gamma;
_52d=e.beta;
_52e=e.alpha;
var _53e=_53f();
if(_53e){
_527=_53e.gamma;
_528=_53e.beta;
_529=_53e.alpha;
}
_52f=false;
}
if(_52a){
_527=e.gamma;
_528=e.beta;
_529=e.alpha;
if(_52b===true){
_540({gamma:e.gamma,beta:e.beta,alpha:e.alpha});
}
_52c=0;
_52d=0;
_52e=0;
_52a=false;
}
_539=e.gamma;
beta=e.beta;
_53a=e.alpha;
if(_526){
if(e.gamma>180){
_539=-(90+270-e.gamma);
}
}
_539=_539-_527;
beta=beta-_528;
_53a=_53a-_529;
_53b=Math.abs(_52c-_539);
_53c=Math.abs(_52d-beta);
_53d=Math.abs(_52e-_53a);
_53b=parseInt(Math.abs((_53b>180)?_53b-360:_53b));
_53c=parseInt(Math.abs((_53c>180)?_53c-360:_53c));
_53b=parseInt(Math.abs((_53d>180)?_53d-360:_53d));
log(parseInt(_539),parseInt(beta),parseInt(_53a));
_541(_539,beta,_53a);
_542(_53b,_53c,_53d);
_543(_539,beta,_53a);
_52c=_539;
_52d=beta;
_52e=_53a;
};
var _541=function(_544,beta,_545){
for(var i=0;i<_533.flip.length;i++){
if(!_533.flip[i].options.enabled){
continue;
}
var _546=_533.flip[i];
var _547=parseFloat(_546.options.threshold);
var _548=_546.options.callback;
if(!_546.flipped&&_549(Math.abs(_544),180,_547)){
_548();
_546.flipped=true;
}else{
if(_546.flipped&&_549(_544,0,_547)){
_546.flipped=false;
}
}
}
};
var _542=function(_54a,_54b,_54c){
var _54d=new Date();
for(var i=0;i<_533.shake.length;i++){
if(!_533.shake[i].options.enabled){
continue;
}
var _54e=_533.shake[i];
var _54f=parseFloat(_54e.options.threshold);
var _550=_54e.options.sensitive;
var _551=parseFloat(_54e.options.durationMin);
var _552=parseFloat(_54e.options.durationMinBetweenShakes);
var _553=_54e.options.callback;
if((_550&&((_54a>_54f)||(_54c>_54f)||(_54b>_54f)))||(!_550&&(((_54a>_54f)&&(_54b>_54f))||((_54a>_54f)&&(_54c>_54f))||((_54b>_54f)&&(_54c>_54f))))){
if(_54e.state==="pause"){
_54e.start=new Date();
_54e.state="shaking";
}
clearTimeout(_54e.stopShakeTimeout);
_54e.stopShakeTimeout=null;
}
var _554=(_54e.start)?_54d.getTime()-_54e.start.getTime():0;
if(_54e.state=="shaking"&&_554>_551){
_54e.state="shaked";
_553();
}
if(_54e.stopShakeTimeout===null){
(function(_555){
_555.stopShakeTimeout=setTimeout(function(){
_555.start==null;
_555.state="pause";
},_552);
})(_54e);
}
}
};
var _543=function(_556,beta,_557){
for(var i=0;i<_533.tilt.length;i++){
if(!_533.tilt[i].options.enabled){
continue;
}
var _558=_533.tilt[i];
var _559=parseFloat(_558.options.threshold);
var _55a=_558.options.rotation;
var _55b=_558.options.direction;
var _55c=_558.options.callback;
var _55d=parseFloat(_558.options.angle);
var _55e=beta;
var _55f=_52d;
if(_560()&&(_55a==="frontBack"||_55a==="front"||_55a==="back")||!_560()&&(_55a==="leftRight"||_55a==="left"||_55a==="right")){
_55e=_556;
_55f=_52c;
}
if((_558.alreadyAchieve&&Math.abs(_55e)<_55d-_559)||(!_558.alreadyAchieve&&Math.abs(_55e)>_55d+_559)){
if(_55e<0&&(_55a==="right"||_55a==="back")||_55e>0&&(_55a==="left"||_55a==="front")){
continue;
}
if(_55e>_55f&&_55b==="back"&&_55e<0||_55e<_55f&&_55b==="back"&&_55e>0||_55e>_55f&&_55b==="forward"&&_55e>0||_55e<_55f&&_55b==="forward"&&_55e<0||_55b===null){
_55c();
}
_558.alreadyAchieve=!_558.alreadyAchieve;
}
}
};
$(document).ready(function(){
if(_532){
_531=$("<div class=\"ftv-log-panel\"></div>").css({width:"100px",height:"100px",border:"1px solid black",position:"fixed",top:"1px",right:"1px"});
$("body").append(_531);
}
});
var log=function(){
var msg="";
if(!_532){
return;
}
for(var i=0;i<arguments.length;i++){
msg+=String(arguments[i])+" ";
}
_531.prepend(msg+"<br />");
};
var _537=function(obj){
for(var i=1;i<arguments.length;i++){
for(var prop in arguments[i]){
if(typeof obj[prop]==="undefined"){
obj[prop]=arguments[i][prop];
}
}
}
return obj;
};
var _560=function(){
if(_521.parentBody){
return _521.parentBody.width()>_521.parentBody.height();
}else{
return _521.innerWidth>_521.innerHeight;
}
};
var _549=function(_561,_562,_563){
return Math.abs(_561-_562)<_563;
};
var _53f=function(){
if(typeof localStorage!=="undefined"&&localStorage!==null){
return JSON.parse(localStorage.getItem("calibrationValues"));
}
};
var _540=function(_564){
if(typeof localStorage!=="undefined"&&localStorage!==null){
return localStorage.setItem("calibrationValues",JSON.stringify(_564));
}
};
_524.calibrate=function(_565){
_52a=true;
_52b=_565;
for(var type in _533){
for(var i=0;i<_533[type].length;i++){
_533[type][i].init();
}
}
};
_524.stop=function(){
if(_530!==null){
_521.removeEventListener("deviceorientation",_538);
_530=null;
}
};
_524.start=function(){
if(_530===null){
_52f=true;
_530=_521.addEventListener("deviceorientation",_538,false);
}
};
_521.Fliptiltshake=_524;
})(this);
(function(C,r,g){
function t(a,b,h){
a.addEventListener?a.addEventListener(b,h,!1):a.attachEvent("on"+b,h);
};
function x(a){
if("keypress"==a.type){
var b=String.fromCharCode(a.which);
a.shiftKey||(b=b.toLowerCase());
return b;
}
return l[a.which]?l[a.which]:p[a.which]?p[a.which]:String.fromCharCode(a.which).toLowerCase();
};
function D(a){
var b=[];
a.shiftKey&&b.push("shift");
a.altKey&&b.push("alt");
a.ctrlKey&&b.push("ctrl");
a.metaKey&&b.push("meta");
return b;
};
function u(a){
return "shift"==a||"ctrl"==a||"alt"==a||"meta"==a;
};
function y(a,b){
var h,c,e,g=[];
h=a;
"+"===h?h=["+"]:(h=h.replace(/\+{2}/g,"+plus"),h=h.split("+"));
for(e=0;e<h.length;++e){
c=h[e],z[c]&&(c=z[c]),b&&"keypress"!=b&&A[c]&&(c=A[c],g.push("shift")),u(c)&&g.push(c);
}
h=c;
e=b;
if(!e){
if(!k){
k={};
for(var m in l){
95<m&&112>m||l.hasOwnProperty(m)&&(k[l[m]]=m);
}
}
e=k[h]?"keydown":"keypress";
}
"keypress"==e&&g.length&&(e="keydown");
return {key:c,modifiers:g,action:e};
};
function B(a,b){
return null===a||a===r?!1:a===b?!0:B(a.parentNode,b);
};
function c(a){
function b(a){
a=a||{};
var b=!1,n;
for(n in q){
a[n]?b=!0:q[n]=0;
}
b||(v=!1);
};
function h(a,b,n,f,c,h){
var g,e,l=[],m=n.type;
if(!d._callbacks[a]){
return [];
}
"keyup"==m&&u(a)&&(b=[a]);
for(g=0;g<d._callbacks[a].length;++g){
if(e=d._callbacks[a][g],(f||!e.seq||q[e.seq]==e.level)&&m==e.action){
var k;
(k="keypress"==m&&!n.metaKey&&!n.ctrlKey)||(k=e.modifiers,k=b.sort().join(",")===k.sort().join(","));
k&&(k=f&&e.seq==f&&e.level==h,(!f&&e.combo==c||k)&&d._callbacks[a].splice(g,1),l.push(e));
}
}
return l;
};
function g(a,b,n,f){
d.stopCallback(b,b.target||b.srcElement,n,f)||!1!==a(b,n)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0);
};
function e(a){
"number"!==typeof a.which&&(a.which=a.keyCode);
var b=x(a);
b&&("keyup"==a.type&&w===b?w=!1:d.handleKey(b,D(a),a));
};
function l(a,c,n,f){
function e(c){
return function(){
v=c;
++q[a];
clearTimeout(k);
k=setTimeout(b,1000);
};
};
function h(c){
g(n,c,a);
"keyup"!==f&&(w=x(c));
setTimeout(b,10);
};
for(var d=q[a]=0;d<c.length;++d){
var p=d+1===c.length?h:e(f||y(c[d+1]).action);
m(c[d],p,f,a,d);
}
};
function m(a,b,c,f,e){
d._directMap[a+":"+c]=b;
a=a.replace(/\s+/g," ");
var g=a.split(" ");
1<g.length?l(a,g,b,c):(c=y(a,c),d._callbacks[c.key]=d._callbacks[c.key]||[],h(c.key,c.modifiers,{type:c.action},f,a,e),d._callbacks[c.key][f?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:f,level:e,combo:a}));
};
var d=this;
a=a||r;
if(!(d instanceof c)){
return new c(a);
}
d.target=a;
d._callbacks={};
d._directMap={};
var q={},k,w=!1,p=!1,v=!1;
d._handleKey=function(a,c,e){
var f=h(a,c,e),d;
c={};
var k=0,l=!1;
for(d=0;d<f.length;++d){
f[d].seq&&(k=Math.max(k,f[d].level));
}
for(d=0;d<f.length;++d){
f[d].seq?f[d].level==k&&(l=!0,c[f[d].seq]=1,g(f[d].callback,e,f[d].combo,f[d].seq)):l||g(f[d].callback,e,f[d].combo);
}
f="keypress"==e.type&&p;
e.type!=v||u(a)||f||b(c);
p=l&&"keydown"==e.type;
};
d._bindMultiple=function(a,b,c){
for(var d=0;d<a.length;++d){
m(a[d],b,c);
}
};
t(a,"keypress",e);
t(a,"keydown",e);
t(a,"keyup",e);
};
var l={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},p={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},A={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";","\"":"'","<":",",">":".","?":"/","|":"\\"},z={option:"alt",command:"meta","return":"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},k;
for(g=1;20>g;++g){
l[111+g]="f"+g;
}
for(g=0;9>=g;++g){
l[g+96]=g;
}
c.prototype.bind=function(a,b,c){
a=a instanceof Array?a:[a];
this._bindMultiple.call(this,a,b,c);
return this;
};
c.prototype.unbind=function(a,b){
return this.bind.call(this,a,function(){
},b);
};
c.prototype.trigger=function(a,b){
if(this._directMap[a+":"+b]){
this._directMap[a+":"+b]({},a);
}
return this;
};
c.prototype.reset=function(){
this._callbacks={};
this._directMap={};
return this;
};
c.prototype.stopCallback=function(a,b){
return -1<(" "+b.className+" ").indexOf(" mousetrap ")||B(b,this.target)?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable;
};
c.prototype.handleKey=function(){
return this._handleKey.apply(this,arguments);
};
c.init=function(){
var a=c(r),b;
for(b in a){
"_"!==b.charAt(0)&&(c[b]=function(b){
return function(){
return a[b].apply(a,arguments);
};
}(b));
}
};
c.init();
C.Mousetrap=c;
"undefined"!==typeof module&&module.exports&&(module.exports=c);
"function"===typeof define&&define.amd&&define(function(){
return c;
});
})(window,document);
(function(_566,_567){
if(typeof define=="function"&&define.amd){
define("jquery-bridget/jquery-bridget",["jquery"],function(_568){
return _567(_566,_568);
});
}else{
if(typeof module=="object"&&module.exports){
module.exports=_567(_566,require("jquery"));
}else{
_566.jQueryBridget=_567(_566,_566.jQuery);
}
}
}(window,function factory(_569,_56a){
"use strict";
var _56b=Array.prototype.slice;
var _56c=_569.console;
var _56d=typeof _56c=="undefined"?function(){
}:function(_56e){
_56c.error(_56e);
};
function _56f(_570,_571,$){
$=$||_56a||_569.jQuery;
if(!$){
return;
}
if(!_571.prototype.option){
_571.prototype.option=function(opts){
if(!$.isPlainObject(opts)){
return;
}
this.options=$.extend(true,this.options,opts);
};
}
$.fn[_570]=function(arg0){
if(typeof arg0=="string"){
var args=_56b.call(arguments,1);
return _572(this,arg0,args);
}
_573(this,arg0);
return this;
};
function _572(_574,_575,args){
var _576;
var _577="$()."+_570+"(\""+_575+"\")";
_574.each(function(i,elem){
var _578=$.data(elem,_570);
if(!_578){
_56d(_570+" not initialized. Cannot call methods, i.e. "+_577);
return;
}
var _579=_578[_575];
if(!_579||_575.charAt(0)=="_"){
_56d(_577+" is not a valid method");
return;
}
var _57a=_579.apply(_578,args);
_576=_576===undefined?_57a:_576;
});
return _576!==undefined?_576:_574;
};
function _573(_57b,_57c){
_57b.each(function(i,elem){
var _57d=$.data(elem,_570);
if(_57d){
_57d.option(_57c);
_57d._init();
}else{
_57d=new _571(elem,_57c);
$.data(elem,_570,_57d);
}
});
};
_57e($);
};
function _57e($){
if(!$||($&&$.bridget)){
return;
}
$.bridget=_56f;
};
_57e(_56a||_569.jQuery);
return _56f;
}));
(function(_57f,_580){
"use strict";
if(typeof define=="function"&&define.amd){
define("get-size/get-size",[],function(){
return _580();
});
}else{
if(typeof module=="object"&&module.exports){
module.exports=_580();
}else{
_57f.getSize=_580();
}
}
})(window,function factory(){
"use strict";
function _581(_582){
var num=parseFloat(_582);
var _583=_582.indexOf("%")==-1&&!isNaN(num);
return _583&&num;
};
function noop(){
};
var _584=typeof console=="undefined"?noop:function(_585){
console.error(_585);
};
var _586=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];
var _587=_586.length;
function _588(){
var size={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};
for(var i=0;i<_587;i++){
var _589=_586[i];
size[_589]=0;
}
return size;
};
function _58a(elem){
var _58b=getComputedStyle(elem);
if(!_58b){
_584("Style returned "+_58b+". Are you running this code in a hidden iframe on Firefox? "+"See http://bit.ly/getsizebug1");
}
return _58b;
};
var _58c=false;
var _58d;
function _58e(){
if(_58c){
return;
}
_58c=true;
var div=document.createElement("div");
div.style.width="200px";
div.style.padding="1px 2px 3px 4px";
div.style.borderStyle="solid";
div.style.borderWidth="1px 2px 3px 4px";
div.style.boxSizing="border-box";
var body=document.body||document.documentElement;
body.appendChild(div);
var _58f=_58a(div);
_590.isBoxSizeOuter=_58d=_581(_58f.width)==200;
body.removeChild(div);
};
function _590(elem){
_58e();
if(typeof elem=="string"){
elem=document.querySelector(elem);
}
if(!elem||typeof elem!="object"||!elem.nodeType){
return;
}
var _591=_58a(elem);
if(_591.display=="none"){
return _588();
}
var size={};
size.width=elem.offsetWidth;
size.height=elem.offsetHeight;
var _592=size.isBorderBox=_591.boxSizing=="border-box";
for(var i=0;i<_587;i++){
var _593=_586[i];
var _594=_591[_593];
var num=parseFloat(_594);
size[_593]=!isNaN(num)?num:0;
}
var _595=size.paddingLeft+size.paddingRight;
var _596=size.paddingTop+size.paddingBottom;
var _597=size.marginLeft+size.marginRight;
var _598=size.marginTop+size.marginBottom;
var _599=size.borderLeftWidth+size.borderRightWidth;
var _59a=size.borderTopWidth+size.borderBottomWidth;
var _59b=_592&&_58d;
var _59c=_581(_591.width);
if(_59c!==false){
size.width=_59c+(_59b?0:_595+_599);
}
var _59d=_581(_591.height);
if(_59d!==false){
size.height=_59d+(_59b?0:_596+_59a);
}
size.innerWidth=size.width-(_595+_599);
size.innerHeight=size.height-(_596+_59a);
size.outerWidth=size.width+_597;
size.outerHeight=size.height+_598;
return size;
};
return _590;
});
(function(_59e,_59f){
if(typeof define=="function"&&define.amd){
define("ev-emitter/ev-emitter",_59f);
}else{
if(typeof module=="object"&&module.exports){
module.exports=_59f();
}else{
_59e.EvEmitter=_59f();
}
}
}(typeof window!="undefined"?window:this,function(){
function _5a0(){
};
var _5a1=_5a0.prototype;
_5a1.on=function(_5a2,_5a3){
if(!_5a2||!_5a3){
return;
}
var _5a4=this._events=this._events||{};
var _5a5=_5a4[_5a2]=_5a4[_5a2]||[];
if(_5a5.indexOf(_5a3)==-1){
_5a5.push(_5a3);
}
return this;
};
_5a1.once=function(_5a6,_5a7){
if(!_5a6||!_5a7){
return;
}
this.on(_5a6,_5a7);
var _5a8=this._onceEvents=this._onceEvents||{};
var _5a9=_5a8[_5a6]=_5a8[_5a6]||{};
_5a9[_5a7]=true;
return this;
};
_5a1.off=function(_5aa,_5ab){
var _5ac=this._events&&this._events[_5aa];
if(!_5ac||!_5ac.length){
return;
}
var _5ad=_5ac.indexOf(_5ab);
if(_5ad!=-1){
_5ac.splice(_5ad,1);
}
return this;
};
_5a1.emitEvent=function(_5ae,args){
var _5af=this._events&&this._events[_5ae];
if(!_5af||!_5af.length){
return;
}
_5af=_5af.slice(0);
args=args||[];
var _5b0=this._onceEvents&&this._onceEvents[_5ae];
for(var i=0;i<_5af.length;i++){
var _5b1=_5af[i];
var _5b2=_5b0&&_5b0[_5b1];
if(_5b2){
this.off(_5ae,_5b1);
delete _5b0[_5b1];
}
_5b1.apply(this,args);
}
return this;
};
_5a1.allOff=function(){
delete this._events;
delete this._onceEvents;
};
return _5a0;
}));
(function(_5b3,_5b4){
if(typeof define=="function"&&define.amd){
define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(_5b5){
return _5b4(_5b3,_5b5);
});
}else{
if(typeof module=="object"&&module.exports){
module.exports=_5b4(_5b3,require("ev-emitter"));
}else{
_5b3.Unipointer=_5b4(_5b3,_5b3.EvEmitter);
}
}
}(window,function factory(_5b6,_5b7){
function noop(){
};
function _5b8(){
};
var _5b9=_5b8.prototype=Object.create(_5b7.prototype);
_5b9.bindStartEvent=function(elem){
this._bindStartEvent(elem,true);
};
_5b9.unbindStartEvent=function(elem){
this._bindStartEvent(elem,false);
};
_5b9._bindStartEvent=function(elem,_5ba){
_5ba=_5ba===undefined?true:_5ba;
var _5bb=_5ba?"addEventListener":"removeEventListener";
var _5bc="mousedown";
if(_5b6.PointerEvent){
_5bc="pointerdown";
}else{
if("ontouchstart" in _5b6){
_5bc="touchstart";
}
}
elem[_5bb](_5bc,this);
};
_5b9.handleEvent=function(_5bd){
var _5be="on"+_5bd.type;
if(this[_5be]){
this[_5be](_5bd);
}
};
_5b9.getTouch=function(_5bf){
for(var i=0;i<_5bf.length;i++){
var _5c0=_5bf[i];
if(_5c0.identifier==this.pointerIdentifier){
return _5c0;
}
}
};
_5b9.onmousedown=function(_5c1){
var _5c2=_5c1.button;
if(_5c2&&(_5c2!==0&&_5c2!==1)){
return;
}
this._pointerDown(_5c1,_5c1);
};
_5b9.ontouchstart=function(_5c3){
this._pointerDown(_5c3,_5c3.changedTouches[0]);
};
_5b9.onpointerdown=function(_5c4){
this._pointerDown(_5c4,_5c4);
};
_5b9._pointerDown=function(_5c5,_5c6){
if(_5c5.button||this.isPointerDown){
return;
}
this.isPointerDown=true;
this.pointerIdentifier=_5c6.pointerId!==undefined?_5c6.pointerId:_5c6.identifier;
this.pointerDown(_5c5,_5c6);
};
_5b9.pointerDown=function(_5c7,_5c8){
this._bindPostStartEvents(_5c7);
this.emitEvent("pointerDown",[_5c7,_5c8]);
};
var _5c9={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"],};
_5b9._bindPostStartEvents=function(_5ca){
if(!_5ca){
return;
}
var _5cb=_5c9[_5ca.type];
_5cb.forEach(function(_5cc){
_5b6.addEventListener(_5cc,this);
},this);
this._boundPointerEvents=_5cb;
};
_5b9._unbindPostStartEvents=function(){
if(!this._boundPointerEvents){
return;
}
this._boundPointerEvents.forEach(function(_5cd){
_5b6.removeEventListener(_5cd,this);
},this);
delete this._boundPointerEvents;
};
_5b9.onmousemove=function(_5ce){
this._pointerMove(_5ce,_5ce);
};
_5b9.onpointermove=function(_5cf){
if(_5cf.pointerId==this.pointerIdentifier){
this._pointerMove(_5cf,_5cf);
}
};
_5b9.ontouchmove=function(_5d0){
var _5d1=this.getTouch(_5d0.changedTouches);
if(_5d1){
this._pointerMove(_5d0,_5d1);
}
};
_5b9._pointerMove=function(_5d2,_5d3){
this.pointerMove(_5d2,_5d3);
};
_5b9.pointerMove=function(_5d4,_5d5){
this.emitEvent("pointerMove",[_5d4,_5d5]);
};
_5b9.onmouseup=function(_5d6){
this._pointerUp(_5d6,_5d6);
};
_5b9.onpointerup=function(_5d7){
if(_5d7.pointerId==this.pointerIdentifier){
this._pointerUp(_5d7,_5d7);
}
};
_5b9.ontouchend=function(_5d8){
var _5d9=this.getTouch(_5d8.changedTouches);
if(_5d9){
this._pointerUp(_5d8,_5d9);
}
};
_5b9._pointerUp=function(_5da,_5db){
this._pointerDone();
this.pointerUp(_5da,_5db);
};
_5b9.pointerUp=function(_5dc,_5dd){
this.emitEvent("pointerUp",[_5dc,_5dd]);
};
_5b9._pointerDone=function(){
this._pointerReset();
this._unbindPostStartEvents();
this.pointerDone();
};
_5b9._pointerReset=function(){
this.isPointerDown=false;
delete this.pointerIdentifier;
};
_5b9.pointerDone=noop;
_5b9.onpointercancel=function(_5de){
if(_5de.pointerId==this.pointerIdentifier){
this._pointerCancel(_5de,_5de);
}
};
_5b9.ontouchcancel=function(_5df){
var _5e0=this.getTouch(_5df.changedTouches);
if(_5e0){
this._pointerCancel(_5df,_5e0);
}
};
_5b9._pointerCancel=function(_5e1,_5e2){
this._pointerDone();
this.pointerCancel(_5e1,_5e2);
};
_5b9.pointerCancel=function(_5e3,_5e4){
this.emitEvent("pointerCancel",[_5e3,_5e4]);
};
_5b8.getPointerPoint=function(_5e5){
return {x:_5e5.pageX,y:_5e5.pageY};
};
return _5b8;
}));
(function(_5e6,_5e7){
if(typeof define=="function"&&define.amd){
define("unidragger/unidragger",["unipointer/unipointer"],function(_5e8){
return _5e7(_5e6,_5e8);
});
}else{
if(typeof module=="object"&&module.exports){
module.exports=_5e7(_5e6,require("unipointer"));
}else{
_5e6.Unidragger=_5e7(_5e6,_5e6.Unipointer);
}
}
}(window,function factory(_5e9,_5ea){
function _5eb(){
};
var _5ec=_5eb.prototype=Object.create(_5ea.prototype);
_5ec.bindHandles=function(){
this._bindHandles(true);
};
_5ec.unbindHandles=function(){
this._bindHandles(false);
};
_5ec._bindHandles=function(_5ed){
_5ed=_5ed===undefined?true:_5ed;
var _5ee=_5ed?"addEventListener":"removeEventListener";
var _5ef=_5ed?this._touchActionValue:"";
for(var i=0;i<this.handles.length;i++){
var _5f0=this.handles[i];
this._bindStartEvent(_5f0,_5ed);
_5f0[_5ee]("click",this);
if(_5e9.PointerEvent){
_5f0.style.touchAction=_5ef;
}
}
};
_5ec._touchActionValue="none";
_5ec.pointerDown=function(_5f1,_5f2){
var _5f3=this.okayPointerDown(_5f1);
if(!_5f3){
return;
}
this.pointerDownPointer=_5f2;
_5f1.preventDefault();
this.pointerDownBlur();
this._bindPostStartEvents(_5f1);
this.emitEvent("pointerDown",[_5f1,_5f2]);
};
var _5f4={TEXTAREA:true,INPUT:true,SELECT:true,OPTION:true,};
var _5f5={radio:true,checkbox:true,button:true,submit:true,image:true,file:true,};
_5ec.okayPointerDown=function(_5f6){
var _5f7=_5f4[_5f6.target.nodeName];
var _5f8=_5f5[_5f6.target.type];
var _5f9=!_5f7||_5f8;
if(!_5f9){
this._pointerReset();
}
return _5f9;
};
_5ec.pointerDownBlur=function(){
var _5fa=document.activeElement;
var _5fb=_5fa&&_5fa.blur&&_5fa!=document.body;
if(_5fb){
_5fa.blur();
}
};
_5ec.pointerMove=function(_5fc,_5fd){
var _5fe=this._dragPointerMove(_5fc,_5fd);
this.emitEvent("pointerMove",[_5fc,_5fd,_5fe]);
this._dragMove(_5fc,_5fd,_5fe);
};
_5ec._dragPointerMove=function(_5ff,_600){
var _601={x:_600.pageX-this.pointerDownPointer.pageX,y:_600.pageY-this.pointerDownPointer.pageY};
if(!this.isDragging&&this.hasDragStarted(_601)){
this._dragStart(_5ff,_600);
}
return _601;
};
_5ec.hasDragStarted=function(_602){
return Math.abs(_602.x)>3||Math.abs(_602.y)>3;
};
_5ec.pointerUp=function(_603,_604){
this.emitEvent("pointerUp",[_603,_604]);
this._dragPointerUp(_603,_604);
};
_5ec._dragPointerUp=function(_605,_606){
if(this.isDragging){
this._dragEnd(_605,_606);
}else{
this._staticClick(_605,_606);
}
};
_5ec._dragStart=function(_607,_608){
this.isDragging=true;
this.isPreventingClicks=true;
this.dragStart(_607,_608);
};
_5ec.dragStart=function(_609,_60a){
this.emitEvent("dragStart",[_609,_60a]);
};
_5ec._dragMove=function(_60b,_60c,_60d){
if(!this.isDragging){
return;
}
this.dragMove(_60b,_60c,_60d);
};
_5ec.dragMove=function(_60e,_60f,_610){
_60e.preventDefault();
this.emitEvent("dragMove",[_60e,_60f,_610]);
};
_5ec._dragEnd=function(_611,_612){
this.isDragging=false;
setTimeout(function(){
delete this.isPreventingClicks;
}.bind(this));
this.dragEnd(_611,_612);
};
_5ec.dragEnd=function(_613,_614){
this.emitEvent("dragEnd",[_613,_614]);
};
_5ec.onclick=function(_615){
if(this.isPreventingClicks){
_615.preventDefault();
}
};
_5ec._staticClick=function(_616,_617){
if(this.isIgnoringMouseUp&&_616.type=="mouseup"){
return;
}
this.staticClick(_616,_617);
if(_616.type!="mouseup"){
this.isIgnoringMouseUp=true;
setTimeout(function(){
delete this.isIgnoringMouseUp;
}.bind(this),400);
}
};
_5ec.staticClick=function(_618,_619){
this.emitEvent("staticClick",[_618,_619]);
};
_5eb.getPointerPoint=_5ea.getPointerPoint;
return _5eb;
}));
(function(_61a,_61b){
if(typeof define=="function"&&define.amd){
define(["get-size/get-size","unidragger/unidragger"],function(_61c,_61d){
return _61b(_61a,_61c,_61d);
});
}else{
if(typeof module=="object"&&module.exports){
module.exports=_61b(_61a,require("get-size"),require("unidragger"));
}else{
_61a.Draggabilly=_61b(_61a,_61a.getSize,_61a.Unidragger);
}
}
}(window,function factory(_61e,_61f,_620){
function _621(a,b){
for(var prop in b){
a[prop]=b[prop];
}
return a;
};
function noop(){
};
var _622=_61e.jQuery;
function _623(_624,_625){
this.element=typeof _624=="string"?document.querySelector(_624):_624;
if(_622){
this.$element=_622(this.element);
}
this.options=_621({},this.constructor.defaults);
this.option(_625);
this._create();
};
var _626=_623.prototype=Object.create(_620.prototype);
_623.defaults={};
_626.option=function(opts){
_621(this.options,opts);
};
var _627={relative:true,absolute:true,fixed:true};
_626._create=function(){
this.position={};
this._getPosition();
this.startPoint={x:0,y:0};
this.dragPoint={x:0,y:0};
this.startPosition=_621({},this.position);
var _628=getComputedStyle(this.element);
if(!_627[_628.position]){
this.element.style.position="relative";
}
this.on("pointerDown",this.onPointerDown);
this.on("pointerMove",this.onPointerMove);
this.on("pointerUp",this.onPointerUp);
this.enable();
this.setHandles();
};
_626.setHandles=function(){
this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element];
this.bindHandles();
};
_626.dispatchEvent=function(type,_629,args){
var _62a=[_629].concat(args);
this.emitEvent(type,_62a);
this.dispatchJQueryEvent(type,_629,args);
};
_626.dispatchJQueryEvent=function(type,_62b,args){
var _62c=_61e.jQuery;
if(!_62c||!this.$element){
return;
}
var _62d=_62c.Event(_62b);
_62d.type=type;
this.$element.trigger(_62d,args);
};
_626._getPosition=function(){
var _62e=getComputedStyle(this.element);
var x=this._getPositionCoord(_62e.left,"width");
var y=this._getPositionCoord(_62e.top,"height");
this.position.x=isNaN(x)?0:x;
this.position.y=isNaN(y)?0:y;
this._addTransformPosition(_62e);
};
_626._getPositionCoord=function(_62f,_630){
if(_62f.indexOf("%")!=-1){
var _631=_61f(this.element.parentNode);
return !_631?0:(parseFloat(_62f)/100)*_631[_630];
}
return parseInt(_62f,10);
};
_626._addTransformPosition=function(_632){
var _633=_632.transform;
if(_633.indexOf("matrix")!==0){
return;
}
var _634=_633.split(",");
var _635=_633.indexOf("matrix3d")===0?12:4;
var _636=parseInt(_634[_635],10);
var _637=parseInt(_634[_635+1],10);
this.position.x+=_636;
this.position.y+=_637;
};
_626.onPointerDown=function(_638,_639){
this.element.classList.add("is-pointer-down");
this.dispatchJQueryEvent("pointerDown",_638,[_639]);
};
_626.dragStart=function(_63a,_63b){
if(!this.isEnabled){
return;
}
this._getPosition();
this.measureContainment();
this.startPosition.x=this.position.x;
this.startPosition.y=this.position.y;
this.setLeftTop();
this.dragPoint.x=0;
this.dragPoint.y=0;
this.element.classList.add("is-dragging");
this.dispatchEvent("dragStart",_63a,[_63b]);
this.animate();
};
_626.measureContainment=function(){
var _63c=this.getContainer();
if(!_63c){
return;
}
var _63d=_61f(this.element);
var _63e=_61f(_63c);
var _63f=this.element.getBoundingClientRect();
var _640=_63c.getBoundingClientRect();
var _641=_63e.borderLeftWidth+_63e.borderRightWidth;
var _642=_63e.borderTopWidth+_63e.borderBottomWidth;
var _643=this.relativeStartPosition={x:_63f.left-(_640.left+_63e.borderLeftWidth),y:_63f.top-(_640.top+_63e.borderTopWidth)};
this.containSize={width:(_63e.width-_641)-_643.x-_63d.width,height:(_63e.height-_642)-_643.y-_63d.height};
};
_626.getContainer=function(){
var _644=this.options.containment;
if(!_644){
return;
}
var _645=_644 instanceof HTMLElement;
if(_645){
return _644;
}
if(typeof _644=="string"){
return document.querySelector(_644);
}
return this.element.parentNode;
};
_626.onPointerMove=function(_646,_647,_648){
this.dispatchJQueryEvent("pointerMove",_646,[_647,_648]);
};
_626.dragMove=function(_649,_64a,_64b){
if(!this.isEnabled){
return;
}
var _64c=_64b.x;
var _64d=_64b.y;
var grid=this.options.grid;
var _64e=grid&&grid[0];
var _64f=grid&&grid[1];
_64c=_650(_64c,_64e);
_64d=_650(_64d,_64f);
_64c=this.containDrag("x",_64c,_64e);
_64d=this.containDrag("y",_64d,_64f);
_64c=this.options.axis=="y"?0:_64c;
_64d=this.options.axis=="x"?0:_64d;
this.position.x=this.startPosition.x+_64c;
this.position.y=this.startPosition.y+_64d;
this.dragPoint.x=_64c;
this.dragPoint.y=_64d;
this.dispatchEvent("dragMove",_649,[_64a,_64b]);
};
function _650(_651,grid,_652){
_652=_652||"round";
return grid?Math[_652](_651/grid)*grid:_651;
};
_626.containDrag=function(axis,drag,grid){
if(!this.options.containment){
return drag;
}
var _653=axis=="x"?"width":"height";
var rel=this.relativeStartPosition[axis];
var min=_650(-rel,grid,"ceil");
var max=this.containSize[_653];
max=_650(max,grid,"floor");
return Math.max(min,Math.min(max,drag));
};
_626.onPointerUp=function(_654,_655){
this.element.classList.remove("is-pointer-down");
this.dispatchJQueryEvent("pointerUp",_654,[_655]);
};
_626.dragEnd=function(_656,_657){
if(!this.isEnabled){
return;
}
this.element.style.transform="";
this.setLeftTop();
this.element.classList.remove("is-dragging");
this.dispatchEvent("dragEnd",_656,[_657]);
};
_626.animate=function(){
if(!this.isDragging){
return;
}
this.positionDrag();
var _658=this;
requestAnimationFrame(function animateFrame(){
_658.animate();
});
};
_626.setLeftTop=function(){
this.element.style.left=this.position.x+"px";
this.element.style.top=this.position.y+"px";
};
_626.positionDrag=function(){
this.element.style.transform="translate3d( "+this.dragPoint.x+"px, "+this.dragPoint.y+"px, 0)";
};
_626.staticClick=function(_659,_65a){
this.dispatchEvent("staticClick",_659,[_65a]);
};
_626.setPosition=function(x,y){
this.position.x=x;
this.position.y=y;
this.setLeftTop();
};
_626.enable=function(){
this.isEnabled=true;
};
_626.disable=function(){
this.isEnabled=false;
if(this.isDragging){
this.dragEnd();
}
};
_626.destroy=function(){
this.disable();
this.element.style.transform="";
this.element.style.left="";
this.element.style.top="";
this.element.style.position="";
this.unbindHandles();
if(this.$element){
this.$element.removeData("draggabilly");
}
};
_626._init=noop;
if(_622&&_622.bridget){
_622.bridget("draggabilly",_623);
}
return _623;
}));
(function(t,e){
if(typeof define==="function"&&define.amd){
define(["jquery"],e);
}else{
if(typeof exports==="object"){
module.exports=e(require("jquery"));
}else{
e(t.jQuery);
}
}
})(this,function(t){
t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};
var e=document.createElement("div");
var n={};
function i(t){
if(t in e.style){
return t;
}
var n=["Moz","Webkit","O","ms"];
var i=t.charAt(0).toUpperCase()+t.substr(1);
for(var r=0;r<n.length;++r){
var s=n[r]+i;
if(s in e.style){
return s;
}
}
};
function r(){
e.style[n.transform]="";
e.style[n.transform]="rotateY(90deg)";
return e.style[n.transform]!=="";
};
var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;
n.transition=i("transition");
n.transitionDelay=i("transitionDelay");
n.transform=i("transform");
n.transformOrigin=i("transformOrigin");
n.filter=i("Filter");
n.transform3d=r();
var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};
var o=n.transitionEnd=a[n.transition]||null;
for(var u in n){
if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){
t.support[u]=n[u];
}
}
e=null;
t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};
t.cssHooks["transit:transform"]={get:function(e){
return t(e).data("transform")||new f;
},set:function(e,i){
var r=i;
if(!(r instanceof f)){
r=new f(r);
}
if(n.transform==="WebkitTransform"&&!s){
e.style[n.transform]=r.toString(true);
}else{
e.style[n.transform]=r.toString();
}
t(e).data("transform",r);
}};
t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};
t.cssHooks.filter={get:function(t){
return t.style[n.filter];
},set:function(t,e){
t.style[n.filter]=e;
}};
if(t.fn.jquery<"1.8"){
t.cssHooks.transformOrigin={get:function(t){
return t.style[n.transformOrigin];
},set:function(t,e){
t.style[n.transformOrigin]=e;
}};
t.cssHooks.transition={get:function(t){
return t.style[n.transition];
},set:function(t,e){
t.style[n.transition]=e;
}};
}
p("scale");
p("scaleX");
p("scaleY");
p("translate");
p("rotate");
p("rotateX");
p("rotateY");
p("rotate3d");
p("perspective");
p("skewX");
p("skewY");
p("x",true);
p("y",true);
function f(t){
if(typeof t==="string"){
this.parse(t);
}
return this;
};
f.prototype={setFromString:function(t,e){
var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];
n.unshift(t);
f.prototype.set.apply(this,n);
},set:function(t){
var e=Array.prototype.slice.apply(arguments,[1]);
if(this.setter[t]){
this.setter[t].apply(this,e);
}else{
this[t]=e.join(",");
}
},get:function(t){
if(this.getter[t]){
return this.getter[t].apply(this);
}else{
return this[t]||0;
}
},setter:{rotate:function(t){
this.rotate=b(t,"deg");
},rotateX:function(t){
this.rotateX=b(t,"deg");
},rotateY:function(t){
this.rotateY=b(t,"deg");
},scale:function(t,e){
if(e===undefined){
e=t;
}
this.scale=t+","+e;
},skewX:function(t){
this.skewX=b(t,"deg");
},skewY:function(t){
this.skewY=b(t,"deg");
},perspective:function(t){
this.perspective=b(t,"px");
},x:function(t){
this.set("translate",t,null);
},y:function(t){
this.set("translate",null,t);
},translate:function(t,e){
if(this._translateX===undefined){
this._translateX=0;
}
if(this._translateY===undefined){
this._translateY=0;
}
if(t!==null&&t!==undefined){
this._translateX=b(t,"px");
}
if(e!==null&&e!==undefined){
this._translateY=b(e,"px");
}
this.translate=this._translateX+","+this._translateY;
}},getter:{x:function(){
return this._translateX||0;
},y:function(){
return this._translateY||0;
},scale:function(){
var t=(this.scale||"1,1").split(",");
if(t[0]){
t[0]=parseFloat(t[0]);
}
if(t[1]){
t[1]=parseFloat(t[1]);
}
return t[0]===t[1]?t[0]:t;
},rotate3d:function(){
var t=(this.rotate3d||"0,0,0,0deg").split(",");
for(var e=0;e<=3;++e){
if(t[e]){
t[e]=parseFloat(t[e]);
}
}
if(t[3]){
t[3]=b(t[3],"deg");
}
return t;
}},parse:function(t){
var e=this;
t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){
e.setFromString(n,i);
});
},toString:function(t){
var e=[];
for(var i in this){
if(this.hasOwnProperty(i)){
if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){
continue;
}
if(i[0]!=="_"){
if(t&&i==="scale"){
e.push(i+"3d("+this[i]+",1)");
}else{
if(t&&i==="translate"){
e.push(i+"3d("+this[i]+",0)");
}else{
e.push(i+"("+this[i]+")");
}
}
}
}
}
return e.join(" ");
}};
function c(t,e,n){
if(e===true){
t.queue(n);
}else{
if(e){
t.queue(e,n);
}else{
t.each(function(){
n.call(this);
});
}
}
};
function l(e){
var i=[];
t.each(e,function(e){
e=t.camelCase(e);
e=t.transit.propertyMap[e]||t.cssProps[e]||e;
e=h(e);
if(n[e]){
e=h(n[e]);
}
if(t.inArray(e,i)===-1){
i.push(e);
}
});
return i;
};
function d(e,n,i,r){
var s=l(e);
if(t.cssEase[i]){
i=t.cssEase[i];
}
var a=""+y(n)+" "+i;
if(parseInt(r,10)>0){
a+=" "+y(r);
}
var o=[];
t.each(s,function(t,e){
o.push(e+" "+a);
});
return o.join(", ");
};
t.fn.transition=t.fn.transit=function(e,i,r,s){
var a=this;
var u=0;
var f=true;
var l=t.extend(true,{},e);
if(typeof i==="function"){
s=i;
i=undefined;
}
if(typeof i==="object"){
r=i.easing;
u=i.delay||0;
f=typeof i.queue==="undefined"?true:i.queue;
s=i.complete;
i=i.duration;
}
if(typeof r==="function"){
s=r;
r=undefined;
}
if(typeof l.easing!=="undefined"){
r=l.easing;
delete l.easing;
}
if(typeof l.duration!=="undefined"){
i=l.duration;
delete l.duration;
}
if(typeof l.complete!=="undefined"){
s=l.complete;
delete l.complete;
}
if(typeof l.queue!=="undefined"){
f=l.queue;
delete l.queue;
}
if(typeof l.delay!=="undefined"){
u=l.delay;
delete l.delay;
}
if(typeof i==="undefined"){
i=t.fx.speeds._default;
}
if(typeof r==="undefined"){
r=t.cssEase._default;
}
i=y(i);
var p=d(l,i,r,u);
var h=t.transit.enabled&&n.transition;
var b=h?parseInt(i,10)+parseInt(u,10):0;
if(b===0){
var g=function(t){
a.css(l);
if(s){
s.apply(a);
}
if(t){
t();
}
};
c(a,f,g);
return a;
}
var m={};
var v=function(e){
var i=false;
var r=function(){
if(i){
a.unbind(o,r);
}
if(b>0){
a.each(function(){
this.style[n.transition]=m[this]||null;
});
}
if(typeof s==="function"){
s.apply(a);
}
if(typeof e==="function"){
e();
}
};
if(b>0&&o&&t.transit.useTransitionEnd){
i=true;
a.bind(o,r);
}else{
window.setTimeout(r,b);
}
a.each(function(){
if(b>0){
this.style[n.transition]=p;
}
t(this).css(l);
});
};
var z=function(t){
this.offsetWidth;
v(t);
};
c(a,f,z);
return this;
};
function p(e,i){
if(!i){
t.cssNumber[e]=true;
}
t.transit.propertyMap[e]=n.transform;
t.cssHooks[e]={get:function(n){
var i=t(n).css("transit:transform");
return i.get(e);
},set:function(n,i){
var r=t(n).css("transit:transform");
r.setFromString(e,i);
t(n).css({"transit:transform":r});
}};
};
function h(t){
return t.replace(/([A-Z])/g,function(t){
return "-"+t.toLowerCase();
});
};
function b(t,e){
if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){
return t;
}else{
return ""+t+e;
}
};
function y(e){
var n=e;
if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){
n=t.fx.speeds[n]||t.fx.speeds._default;
}
return b(n,"ms");
};
t.transit.getTransitionValue=d;
return t;
});
(function(){
"use strict";
var _65b=typeof window!=="undefined"&&typeof window.document!=="undefined"?window.document:{};
var _65c=typeof module!=="undefined"&&module.exports;
var _65d=typeof Element!=="undefined"&&"ALLOW_KEYBOARD_INPUT" in Element;
var fn=(function(){
var val;
var _65e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];
var i=0;
var l=_65e.length;
var ret={};
for(;i<l;i++){
val=_65e[i];
if(val&&val[1] in _65b){
for(i=0;i<val.length;i++){
ret[_65e[0][i]]=val[i];
}
return ret;
}
}
return false;
})();
var _65f={change:fn.fullscreenchange,error:fn.fullscreenerror};
var _660={request:function(elem){
return new Promise(function(_661){
var _662=fn.requestFullscreen;
var _663=function(){
this.off("change",_663);
_661();
}.bind(this);
elem=elem||_65b.documentElement;
if(/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)){
elem[_662]();
}else{
elem[_662](_65d?Element.ALLOW_KEYBOARD_INPUT:{});
}
this.on("change",_663);
}.bind(this));
},exit:function(){
return new Promise(function(_664){
var _665=function(){
this.off("change",_665);
_664();
}.bind(this);
_65b[fn.exitFullscreen]();
this.on("change",_665);
}.bind(this));
},toggle:function(elem){
return this.isFullscreen?this.exit():this.request(elem);
},onchange:function(_666){
this.on("change",_666);
},onerror:function(_667){
this.on("error",_667);
},on:function(_668,_669){
var _66a=_65f[_668];
if(_66a){
_65b.addEventListener(_66a,_669,false);
}
},off:function(_66b,_66c){
var _66d=_65f[_66b];
if(_66d){
_65b.removeEventListener(_66d,_66c,false);
}
},raw:fn};
if(!fn){
if(_65c){
module.exports=false;
}else{
window.screenfull=false;
}
return;
}
Object.defineProperties(_660,{isFullscreen:{get:function(){
return Boolean(_65b[fn.fullscreenElement]);
}},element:{enumerable:true,get:function(){
return _65b[fn.fullscreenElement];
}},enabled:{enumerable:true,get:function(){
return Boolean(_65b[fn.fullscreenEnabled]);
}}});
if(_65c){
module.exports=_660;
}else{
window.screenfull=_660;
}
})();
(function(_66e,_66f){
"use strict";
var _670=function(_671,_672){
return new _670.Instance(_671,_672||{});
};
_670.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};
_670.HAS_POINTEREVENTS=_66e.navigator.pointerEnabled||_66e.navigator.msPointerEnabled;
_670.HAS_TOUCHEVENTS=("ontouchstart" in _66e);
_670.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i;
_670.NO_MOUSEEVENTS=_670.HAS_TOUCHEVENTS&&_66e.navigator.userAgent.match(_670.MOBILE_REGEX);
_670.EVENT_TYPES={};
_670.DIRECTION_DOWN="down";
_670.DIRECTION_LEFT="left";
_670.DIRECTION_UP="up";
_670.DIRECTION_RIGHT="right";
_670.POINTER_MOUSE="mouse";
_670.POINTER_TOUCH="touch";
_670.POINTER_PEN="pen";
_670.EVENT_START="start";
_670.EVENT_MOVE="move";
_670.EVENT_END="end";
_670.DOCUMENT=_66e.document;
_670.plugins=_670.plugins||{};
_670.gestures=_670.gestures||{};
_670.READY=false;
function _673(){
if(_670.READY){
return;
}
_670.event.determineEventTypes();
_670.utils.each(_670.gestures,function(_674){
_670.detection.register(_674);
});
_670.event.onTouch(_670.DOCUMENT,_670.EVENT_MOVE,_670.detection.detect);
_670.event.onTouch(_670.DOCUMENT,_670.EVENT_END,_670.detection.detect);
_670.READY=true;
};
_670.utils={extend:function extend(dest,src,_675){
for(var key in src){
if(dest[key]!==_66f&&_675){
continue;
}
dest[key]=src[key];
}
return dest;
},each:function(obj,_676,_677){
var i,_678;
if("forEach" in obj){
obj.forEach(_676,_677);
}else{
if(obj.length!==_66f){
for(i=0,_678=obj.length;i<_678;i++){
if(_676.call(_677,obj[i],i,obj)===false){
return;
}
}
}else{
for(i in obj){
if(obj.hasOwnProperty(i)&&_676.call(_677,obj[i],i,obj)===false){
return;
}
}
}
}
},hasParent:function(node,_679){
while(node){
if(node==_679){
return true;
}
node=node.parentNode;
}
return false;
},getCenter:function getCenter(_67a){
var _67b=[],_67c=[];
_670.utils.each(_67a,function(_67d){
_67b.push(typeof _67d.clientX!=="undefined"?_67d.clientX:_67d.pageX);
_67c.push(typeof _67d.clientY!=="undefined"?_67d.clientY:_67d.pageY);
});
return {pageX:((Math.min.apply(Math,_67b)+Math.max.apply(Math,_67b))/2),pageY:((Math.min.apply(Math,_67c)+Math.max.apply(Math,_67c))/2)};
},getVelocity:function getVelocity(_67e,_67f,_680){
return {x:Math.abs(_67f/_67e)||0,y:Math.abs(_680/_67e)||0};
},getAngle:function getAngle(_681,_682){
var y=_682.pageY-_681.pageY,x=_682.pageX-_681.pageX;
return Math.atan2(y,x)*180/Math.PI;
},getDirection:function getDirection(_683,_684){
var x=Math.abs(_683.pageX-_684.pageX),y=Math.abs(_683.pageY-_684.pageY);
if(x>=y){
return _683.pageX-_684.pageX>0?_670.DIRECTION_LEFT:_670.DIRECTION_RIGHT;
}else{
return _683.pageY-_684.pageY>0?_670.DIRECTION_UP:_670.DIRECTION_DOWN;
}
},getDistance:function getDistance(_685,_686){
var x=_686.pageX-_685.pageX,y=_686.pageY-_685.pageY;
return Math.sqrt((x*x)+(y*y));
},getScale:function getScale(_687,end){
if(_687.length>=2&&end.length>=2){
return this.getDistance(end[0],end[1])/this.getDistance(_687[0],_687[1]);
}
return 1;
},getRotation:function getRotation(_688,end){
if(_688.length>=2&&end.length>=2){
return this.getAngle(end[1],end[0])-this.getAngle(_688[1],_688[0]);
}
return 0;
},isVertical:function isVertical(_689){
return (_689==_670.DIRECTION_UP||_689==_670.DIRECTION_DOWN);
},stopDefaultBrowserBehavior:function stopDefaultBrowserBehavior(_68a,_68b){
if(!_68b||!_68a||!_68a.style){
return;
}
_670.utils.each(["webkit","khtml","moz","Moz","ms","o",""],function(_68c){
_670.utils.each(_68b,function(prop){
if(_68c){
prop=_68c+prop.substring(0,1).toUpperCase()+prop.substring(1);
}
if(prop in _68a.style){
_68a.style[prop]=prop;
}
});
});
if(_68b.userSelect=="none"){
_68a.onselectstart=function(){
return false;
};
}
if(_68b.userDrag=="none"){
_68a.ondragstart=function(){
return false;
};
}
}};
_670.Instance=function(_68d,_68e){
var self=this;
_673();
this.element=_68d;
this.enabled=true;
this.options=_670.utils.extend(_670.utils.extend({},_670.defaults),_68e||{});
if(this.options.stop_browser_behavior){
_670.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior);
}
_670.event.onTouch(_68d,_670.EVENT_START,function(ev){
if(self.enabled){
_670.detection.startDetect(self,ev);
}
});
return this;
};
_670.Instance.prototype={on:function onEvent(_68f,_690){
var _691=_68f.split(" ");
_670.utils.each(_691,function(_692){
this.element.addEventListener(_692,_690,false);
},this);
return this;
},off:function offEvent(_693,_694){
var _695=_693.split(" ");
_670.utils.each(_695,function(_696){
this.element.removeEventListener(_696,_694,false);
},this);
return this;
},trigger:function triggerEvent(_697,_698){
if(!_698){
_698={};
}
var _699=_670.DOCUMENT.createEvent("Event");
_699.initEvent(_697,true,true);
_699.gesture=_698;
var _69a=this.element;
if(_670.utils.hasParent(_698.target,_69a)){
_69a=_698.target;
}
_69a.dispatchEvent(_699);
return this;
},enable:function enable(_69b){
this.enabled=_69b;
return this;
}};
var _69c=null;
var _69d=false;
var _69e=false;
_670.event={bindDom:function(_69f,type,_6a0){
var _6a1=type.split(" ");
_670.utils.each(_6a1,function(type){
_69f.addEventListener(type,_6a0,false);
});
},onTouch:function onTouch(_6a2,_6a3,_6a4){
var self=this;
this.bindDom(_6a2,_670.EVENT_TYPES[_6a3],function bindDomOnTouch(ev){
var _6a5=ev.type.toLowerCase();
if(_6a5.match(/mouse/)&&_69e){
return;
}else{
if(_6a5.match(/touch/)||_6a5.match(/pointerdown/)||(_6a5.match(/mouse/)&&ev.which===1)){
_69d=true;
}else{
if(_6a5.match(/mouse/)&&!ev.which){
_69d=false;
}
}
}
if(_6a5.match(/touch|pointer/)){
_69e=true;
}
var _6a6=0;
if(_69d){
if(_670.HAS_POINTEREVENTS&&_6a3!=_670.EVENT_END){
_6a6=_670.PointerEvent.updatePointer(_6a3,ev);
}else{
if(_6a5.match(/touch/)){
_6a6=ev.touches.length;
}else{
if(!_69e){
_6a6=_6a5.match(/up/)?0:1;
}
}
}
if(_6a6>0&&_6a3==_670.EVENT_END){
_6a3=_670.EVENT_MOVE;
}else{
if(!_6a6){
_6a3=_670.EVENT_END;
}
}
if(_6a6||_69c===null){
_69c=ev;
}
_6a4.call(_670.detection,self.collectEventData(_6a2,_6a3,self.getTouchList(_69c,_6a3),ev));
if(_670.HAS_POINTEREVENTS&&_6a3==_670.EVENT_END){
_6a6=_670.PointerEvent.updatePointer(_6a3,ev);
}
}
if(!_6a6){
_69c=null;
_69d=false;
_69e=false;
_670.PointerEvent.reset();
}
});
},determineEventTypes:function determineEventTypes(){
var _6a7;
if(_670.HAS_POINTEREVENTS){
_6a7=_670.PointerEvent.getEvents();
}else{
if(_670.NO_MOUSEEVENTS){
_6a7=["touchstart","touchmove","touchend touchcancel"];
}else{
_6a7=["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"];
}
}
_670.EVENT_TYPES[_670.EVENT_START]=_6a7[0];
_670.EVENT_TYPES[_670.EVENT_MOVE]=_6a7[1];
_670.EVENT_TYPES[_670.EVENT_END]=_6a7[2];
},getTouchList:function getTouchList(ev){
if(_670.HAS_POINTEREVENTS){
return _670.PointerEvent.getTouchList();
}else{
if(ev.touches){
return ev.touches;
}else{
ev.identifier=1;
return [ev];
}
}
},collectEventData:function collectEventData(_6a8,_6a9,_6aa,ev){
var _6ab=_670.POINTER_TOUCH;
if(ev.type.match(/mouse/)||_670.PointerEvent.matchType(_670.POINTER_MOUSE,ev)){
_6ab=_670.POINTER_MOUSE;
}
return {center:_670.utils.getCenter(_6aa),timeStamp:new Date().getTime(),target:ev.target,touches:_6aa,eventType:_6a9,pointerType:_6ab,srcEvent:ev,preventDefault:function(){
if(this.srcEvent.preventManipulation){
this.srcEvent.preventManipulation();
}
if(this.srcEvent.preventDefault){
this.srcEvent.preventDefault();
}
},stopPropagation:function(){
this.srcEvent.stopPropagation();
},stopDetect:function(){
return _670.detection.stopDetect();
}};
}};
_670.PointerEvent={pointers:{},getTouchList:function(){
var self=this;
var _6ac=[];
_670.utils.each(self.pointers,function(_6ad){
_6ac.push(_6ad);
});
return _6ac;
},updatePointer:function(type,_6ae){
if(type==_670.EVENT_END){
this.pointers={};
}else{
_6ae.identifier=_6ae.pointerId;
this.pointers[_6ae.pointerId]=_6ae;
}
return Object.keys(this.pointers).length;
},matchType:function(_6af,ev){
if(!ev.pointerType){
return false;
}
var pt=ev.pointerType,_6b0={};
_6b0[_670.POINTER_MOUSE]=(pt===ev.MSPOINTER_TYPE_MOUSE||pt===_670.POINTER_MOUSE);
_6b0[_670.POINTER_TOUCH]=(pt===ev.MSPOINTER_TYPE_TOUCH||pt===_670.POINTER_TOUCH);
_6b0[_670.POINTER_PEN]=(pt===ev.MSPOINTER_TYPE_PEN||pt===_670.POINTER_PEN);
return _6b0[_6af];
},getEvents:function(){
return ["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"];
},reset:function(){
this.pointers={};
}};
_670.detection={gestures:[],current:null,previous:null,stopped:false,startDetect:function startDetect(inst,_6b1){
if(this.current){
return;
}
this.stopped=false;
this.current={inst:inst,startEvent:_670.utils.extend({},_6b1),lastEvent:false,name:""};
this.detect(_6b1);
},detect:function detect(_6b2){
if(!this.current||this.stopped){
return;
}
_6b2=this.extendEventData(_6b2);
var _6b3=this.current.inst.options;
_670.utils.each(this.gestures,function(_6b4){
if(!this.stopped&&_6b3[_6b4.name]!==false){
if(_6b4.handler.call(_6b4,_6b2,this.current.inst)===false){
this.stopDetect();
return false;
}
}
},this);
if(this.current){
this.current.lastEvent=_6b2;
}
if(_6b2.eventType==_670.EVENT_END&&!_6b2.touches.length-1){
this.stopDetect();
}
return _6b2;
},stopDetect:function stopDetect(){
this.previous=_670.utils.extend({},this.current);
this.current=null;
this.stopped=true;
},extendEventData:function extendEventData(ev){
var _6b5=this.current.startEvent;
if(_6b5&&(ev.touches.length!=_6b5.touches.length||ev.touches===_6b5.touches)){
_6b5.touches=[];
_670.utils.each(ev.touches,function(_6b6){
_6b5.touches.push(_670.utils.extend({},_6b6));
});
}
var _6b7=ev.timeStamp-_6b5.timeStamp,_6b8=ev.center.pageX-_6b5.center.pageX,_6b9=ev.center.pageY-_6b5.center.pageY,_6ba=_670.utils.getVelocity(_6b7,_6b8,_6b9),_6bb,_6bc;
if(ev.eventType==="end"){
_6bb=this.current.lastEvent&&this.current.lastEvent.interimAngle;
_6bc=this.current.lastEvent&&this.current.lastEvent.interimDirection;
}else{
_6bb=this.current.lastEvent&&_670.utils.getAngle(this.current.lastEvent.center,ev.center);
_6bc=this.current.lastEvent&&_670.utils.getDirection(this.current.lastEvent.center,ev.center);
}
_670.utils.extend(ev,{deltaTime:_6b7,deltaX:_6b8,deltaY:_6b9,velocityX:_6ba.x,velocityY:_6ba.y,distance:_670.utils.getDistance(_6b5.center,ev.center),angle:_670.utils.getAngle(_6b5.center,ev.center),interimAngle:_6bb,direction:_670.utils.getDirection(_6b5.center,ev.center),interimDirection:_6bc,scale:_670.utils.getScale(_6b5.touches,ev.touches),rotation:_670.utils.getRotation(_6b5.touches,ev.touches),startEvent:_6b5});
return ev;
},register:function register(_6bd){
var _6be=_6bd.defaults||{};
if(_6be[_6bd.name]===_66f){
_6be[_6bd.name]=true;
}
_670.utils.extend(_670.defaults,_6be,true);
_6bd.index=_6bd.index||1000;
this.gestures.push(_6bd);
this.gestures.sort(function(a,b){
if(a.index<b.index){
return -1;
}
if(a.index>b.index){
return 1;
}
return 0;
});
return this.gestures;
}};
_670.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:true,drag_max_touches:1,drag_block_horizontal:false,drag_block_vertical:false,drag_lock_to_axis:false,drag_lock_min_distance:25},triggered:false,handler:function dragGesture(ev,inst){
if(_670.detection.current.name!=this.name&&this.triggered){
inst.trigger(this.name+"end",ev);
this.triggered=false;
return;
}
if(inst.options.drag_max_touches>0&&ev.touches.length>inst.options.drag_max_touches){
return;
}
switch(ev.eventType){
case _670.EVENT_START:
this.triggered=false;
break;
case _670.EVENT_MOVE:
if(ev.distance<inst.options.drag_min_distance&&_670.detection.current.name!=this.name){
return;
}
if(_670.detection.current.name!=this.name){
_670.detection.current.name=this.name;
if(inst.options.correct_for_drag_min_distance&&ev.distance>0){
var _6bf=Math.abs(inst.options.drag_min_distance/ev.distance);
_670.detection.current.startEvent.center.pageX+=ev.deltaX*_6bf;
_670.detection.current.startEvent.center.pageY+=ev.deltaY*_6bf;
ev=_670.detection.extendEventData(ev);
}
}
if(_670.detection.current.lastEvent.drag_locked_to_axis||(inst.options.drag_lock_to_axis&&inst.options.drag_lock_min_distance<=ev.distance)){
ev.drag_locked_to_axis=true;
}
var _6c0=_670.detection.current.lastEvent.direction;
if(ev.drag_locked_to_axis&&_6c0!==ev.direction){
if(_670.utils.isVertical(_6c0)){
ev.direction=(ev.deltaY<0)?_670.DIRECTION_UP:_670.DIRECTION_DOWN;
}else{
ev.direction=(ev.deltaX<0)?_670.DIRECTION_LEFT:_670.DIRECTION_RIGHT;
}
}
if(!this.triggered){
inst.trigger(this.name+"start",ev);
this.triggered=true;
}
inst.trigger(this.name,ev);
inst.trigger(this.name+ev.direction,ev);
if((inst.options.drag_block_vertical&&_670.utils.isVertical(ev.direction))||(inst.options.drag_block_horizontal&&!_670.utils.isVertical(ev.direction))){
ev.preventDefault();
}
break;
case _670.EVENT_END:
if(this.triggered){
inst.trigger(this.name+"end",ev);
}
this.triggered=false;
break;
}
}};
_670.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function holdGesture(ev,inst){
switch(ev.eventType){
case _670.EVENT_START:
clearTimeout(this.timer);
_670.detection.current.name=this.name;
this.timer=setTimeout(function(){
if(_670.detection.current.name=="hold"){
inst.trigger("hold",ev);
}
},inst.options.hold_timeout);
break;
case _670.EVENT_MOVE:
if(ev.distance>inst.options.hold_threshold){
clearTimeout(this.timer);
}
break;
case _670.EVENT_END:
clearTimeout(this.timer);
break;
}
}};
_670.gestures.Release={name:"release",index:Infinity,handler:function releaseGesture(ev,inst){
if(ev.eventType==_670.EVENT_END){
inst.trigger(this.name,ev);
}
}};
_670.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_min_touches:1,swipe_max_touches:1,swipe_velocity:0.7},handler:function swipeGesture(ev,inst){
if(ev.eventType==_670.EVENT_END){
if(inst.options.swipe_max_touches>0&&ev.touches.length<inst.options.swipe_min_touches&&ev.touches.length>inst.options.swipe_max_touches){
return;
}
if(ev.velocityX>inst.options.swipe_velocity||ev.velocityY>inst.options.swipe_velocity){
inst.trigger(this.name,ev);
inst.trigger(this.name+ev.direction,ev);
}
}
}};
_670.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:true,doubletap_distance:20,doubletap_interval:300},handler:function tapGesture(ev,inst){
if(ev.eventType==_670.EVENT_END&&ev.srcEvent.type!="touchcancel"){
var prev=_670.detection.previous,_6c1=false;
if(ev.deltaTime>inst.options.tap_max_touchtime||ev.distance>inst.options.tap_max_distance){
return;
}
if(prev&&prev.name=="tap"&&(ev.timeStamp-prev.lastEvent.timeStamp)<inst.options.doubletap_interval&&ev.distance<inst.options.doubletap_distance){
inst.trigger("doubletap",ev);
_6c1=true;
}
if(!_6c1||inst.options.tap_always){
_670.detection.current.name="tap";
inst.trigger(_670.detection.current.name,ev);
}
}
}};
_670.gestures.Touch={name:"touch",index:-Infinity,defaults:{prevent_default:false,prevent_mouseevents:false},handler:function touchGesture(ev,inst){
if(inst.options.prevent_mouseevents&&ev.pointerType==_670.POINTER_MOUSE){
ev.stopDetect();
return;
}
if(inst.options.prevent_default){
ev.preventDefault();
}
if(ev.eventType==_670.EVENT_START){
inst.trigger(this.name,ev);
}
}};
_670.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:0.01,transform_min_rotation:1,transform_always_block:false},triggered:false,handler:function transformGesture(ev,inst){
if(_670.detection.current.name!=this.name&&this.triggered){
inst.trigger(this.name+"end",ev);
this.triggered=false;
return;
}
if(ev.touches.length<2){
return;
}
if(inst.options.transform_always_block){
ev.preventDefault();
}
switch(ev.eventType){
case _670.EVENT_START:
this.triggered=false;
break;
case _670.EVENT_MOVE:
var _6c2=Math.abs(1-ev.scale);
var _6c3=Math.abs(ev.rotation);
if(_6c2<inst.options.transform_min_scale&&_6c3<inst.options.transform_min_rotation){
return;
}
_670.detection.current.name=this.name;
if(!this.triggered){
inst.trigger(this.name+"start",ev);
this.triggered=true;
}
inst.trigger(this.name,ev);
if(_6c3>inst.options.transform_min_rotation){
inst.trigger("rotate",ev);
}
if(_6c2>inst.options.transform_min_scale){
inst.trigger("pinch",ev);
inst.trigger("pinch"+((ev.scale<1)?"in":"out"),ev);
}
break;
case _670.EVENT_END:
if(this.triggered){
inst.trigger(this.name+"end",ev);
}
this.triggered=false;
break;
}
}};
if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){
define(function(){
return _670;
});
}else{
if(typeof module==="object"&&typeof module.exports==="object"){
module.exports=_670;
}else{
_66e.Hammer=_670;
}
}
})(this);
window.Modernizr=(function(_6c4,_6c5,_6c6){
var _6c7="2.7.1",_6c8={},_6c9=_6c5.documentElement,mod="modernizr",_6ca=_6c5.createElement(mod),_6cb=_6ca.style,_6cc,_6cd={}.toString,_6ce=" -webkit- -moz- -o- -ms- ".split(" "),_6cf={},_6d0={},_6d1={},_6d2=[],_6d3=_6d2.slice,_6d4,_6d5=function(rule,_6d6,_6d7,_6d8){
var _6d9,ret,node,_6da,div=_6c5.createElement("div"),body=_6c5.body,_6db=body||_6c5.createElement("body");
if(parseInt(_6d7,10)){
while(_6d7--){
node=_6c5.createElement("div");
node.id=_6d8?_6d8[_6d7]:mod+(_6d7+1);
div.appendChild(node);
}
}
_6d9=["&#173;","<style id=\"s",mod,"\">",rule,"</style>"].join("");
div.id=mod;
(body?div:_6db).innerHTML+=_6d9;
_6db.appendChild(div);
if(!body){
_6db.style.background="";
_6db.style.overflow="hidden";
_6da=_6c9.style.overflow;
_6c9.style.overflow="hidden";
_6c9.appendChild(_6db);
}
ret=_6d6(div,rule);
if(!body){
_6db.parentNode.removeChild(_6db);
_6c9.style.overflow=_6da;
}else{
div.parentNode.removeChild(div);
}
return !!ret;
},_6dc=({}).hasOwnProperty,_6dd;
if(!is(_6dc,"undefined")&&!is(_6dc.call,"undefined")){
_6dd=function(_6de,_6df){
return _6dc.call(_6de,_6df);
};
}else{
_6dd=function(_6e0,_6e1){
return ((_6e1 in _6e0)&&is(_6e0.constructor.prototype[_6e1],"undefined"));
};
}
if(!Function.prototype.bind){
Function.prototype.bind=function bind(that){
var _6e2=this;
if(typeof _6e2!="function"){
throw new TypeError();
}
var args=_6d3.call(arguments,1),_6e3=function(){
if(this instanceof _6e3){
var F=function(){
};
F.prototype=_6e2.prototype;
var self=new F();
var _6e4=_6e2.apply(self,args.concat(_6d3.call(arguments)));
if(Object(_6e4)===_6e4){
return _6e4;
}
return self;
}else{
return _6e2.apply(that,args.concat(_6d3.call(arguments)));
}
};
return _6e3;
};
}
function _6e5(str){
_6cb.cssText=str;
};
function _6e6(str1,str2){
return _6e5(_6ce.join(str1+";")+(str2||""));
};
function is(obj,type){
return typeof obj===type;
};
function _6e7(str,_6e8){
return !!~(""+str).indexOf(_6e8);
};
function _6e9(_6ea,obj,elem){
for(var i in _6ea){
var item=obj[_6ea[i]];
if(item!==_6c6){
if(elem===false){
return _6ea[i];
}
if(is(item,"function")){
return item.bind(elem||obj);
}
return item;
}
}
return false;
};
_6cf["touch"]=function(){
var bool;
if(("ontouchstart" in _6c4)||_6c4.DocumentTouch&&_6c5 instanceof DocumentTouch){
bool=true;
}else{
_6d5(["@media (",_6ce.join("touch-enabled),("),mod,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(node){
bool=node.offsetTop===9;
});
}
return bool;
};
for(var _6eb in _6cf){
if(_6dd(_6cf,_6eb)){
_6d4=_6eb.toLowerCase();
_6c8[_6d4]=_6cf[_6eb]();
_6d2.push((_6c8[_6d4]?"":"no-")+_6d4);
}
}
_6c8.addTest=function(_6ec,test){
if(typeof _6ec=="object"){
for(var key in _6ec){
if(_6dd(_6ec,key)){
_6c8.addTest(key,_6ec[key]);
}
}
}else{
_6ec=_6ec.toLowerCase();
if(_6c8[_6ec]!==_6c6){
return _6c8;
}
test=typeof test=="function"?test():test;
if(typeof enableClasses!=="undefined"&&enableClasses){
_6c9.className+=" "+(test?"":"no-")+_6ec;
}
_6c8[_6ec]=test;
}
return _6c8;
};
_6e5("");
_6ca=_6cc=null;
_6c8._version=_6c7;
_6c8._prefixes=_6ce;
_6c8.testStyles=_6d5;
return _6c8;
})(this,this.document);
var TouchThroughAlpha=new function(){
var _6ed=["mousedown","mouseup","mouseover","mouseout","mousemove","click","dblclick"];
var _6ee=["touchstart","touchend","touchmove","touchcancel"];
var _6ef=["pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture"];
var _6f0=["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerOver","MSPointerOut","MSPointerHover"];
var _6f1=_6ed.concat(_6ee).concat(_6ef).concat(_6f0);
var _6f2={};
var _6f3=null;
var ctx=document.createElement("canvas").getContext("2d");
var _6f4=true;
var _6f5=false;
var _6f6="oldDisplayStyle";
this.register=function(_6f7,_6f8){
if(_6f7==null){
log("You have to specify a valid css class name.");
}
if(_6f8==null||_6f8<0||_6f8>1){
log("You have to specify a number between 0 and 1");
}
init();
_6f7=_6f7.trim();
if(_6f2.hasOwnProperty(_6f7)){
log("You already registered images with css class: '"+_6f7+"' and there is no need to do this again. "+"(Unless you want to change the passThroughOpacity then please call unRegisterImagesWithCssClass('"+_6f7+"') first ). ");
return;
}
_6f2[_6f7]=_6f8;
_6f9();
};
this.unregister=function(_6fa){
init();
if(!_6f2.hasOwnProperty(_6fa)){
log("You can't unregister images with css class: '"+_6fa+"' as there are none registered");
return;
}
delete _6f2[_6fa];
_6f9();
};
this.onlyMouseEventsSupported=function(){
return _6f5;
};
this.enableCaching=function(){
_6f4=true;
};
this.disableCaching=function(){
_6f4=false;
var i=0;
for(var _6fb in _6f2){
var _6fc=document.getElementsByClassName(_6fb);
for(i=0;i<_6fc.length;i++){
delete _6fc[i]._cachedImageData;
}
}
};
function log(msg){
if(console&&console.log){
console.log(msg);
}
};
function _6fd(el){
if(!el||el.tagName.toLowerCase()!="img"){
return null;
}
var _6fe=el.className;
for(var _6ff in _6f2){
if(_6fe.indexOf(_6ff)!=-1){
return _6ff;
}
}
return null;
};
function _700(_701){
var _702=0;
var _703=0;
var _704=0;
var _705=0;
var _706=0;
var _707=0;
if(_6ee.indexOf(_701.type)!=-1){
var _708=_701.changedTouches.length>0?_701.changedTouches[0]:_701.touches[0];
_702=_708.clientX;
_703=_708.clientY;
_704=_708.pageX;
_705=_708.pageY;
var rect=_701.target.getBoundingClientRect();
_706=_704-rect.left;
_707=_705-rect.top;
}else{
_702=_701.clientX;
_703=_701.clientY;
_704=_701.pageX;
_705=_701.pageY;
_706=_701.offsetX;
_707=_701.offsetY;
}
return {clientX:_702,clientY:_703,pageX:_704,pageY:_705,offsetX:_706,offsetY:_707};
};
function _709(_70a,_70b){
var _70c=[];
for(var _70d in _6f2){
var _70e=document.getElementsByClassName(_70d);
var _70f=Array.prototype.slice.call(_70e);
_70c=_70c.concat(_70f);
}
var _710=[];
var _711=null;
var rect=null;
for(var i=_70c.length-1;i>=0;i--){
_711=_70c[i];
rect=_711.getBoundingClientRect();
if(_70a>=rect.left&&_70a<=rect.right&&_70b>=rect.top&&_70b<=rect.bottom){
_710.push(_70c[i]);
}
}
return _710;
};
function _712(_713){
var _714=false;
var _715=_700(_713);
var _716=_715.clientX;
var _717=_715.clientY;
var _718=_715.pageX;
var _719=_715.pageY;
var _71a=_715.offsetX;
var _71b=_715.offsetY;
var _71c=_709(_718,_719);
for(var i=0;i<_71c.length;i++){
if(_71d(el,_71a,_71b,_6f2[imageCssClass])){
_714=true;
break;
}
}
return _714;
};
function _71d(_71e,_71f,_720,_721){
if(_721>=1){
return false;
}
var _722=0;
var x=Math.round(_71f),y=Math.round(_720),w=_71e.width,h=_71e.height;
if(_6f4){
if(!_71e._cachedImageData){
ctx.canvas.width=w;
ctx.canvas.height=h;
ctx.drawImage(_71e,0,0,w,h);
_71e._cachedImageData=ctx.getImageData(0,0,w,h);
}
var _723=_71e._cachedImageData;
_722=_723.data[((y*(w*4))+(x*4))+3];
}else{
ctx.canvas.width=w;
ctx.canvas.height=h;
ctx.drawImage(_71e,0,0,w,h);
_722=ctx.getImageData(x,y,1,1).data[3];
}
var _724=_722/255;
return _724>_721;
};
function _725(_726){
if(_6f1.indexOf(_726.type)==-1){
return;
}
if(_6f5){
_727(_726);
return;
}
return;
};
function _727(_728){
if(_6ed.indexOf(_728.type)==-1){
log("TouchThroughAlpha can only handle Mouse events for InternetExplorer < 11!");
_728.stopImmediatePropagation();
return true;
}
if(!Eventr){
log("eventr.js is not loaded so TouchThroughAlpha can't use it's fallback system for InternetExplorer < 11!");
return true;
}
var el=_728.target;
var _729=_6fd(el);
if(_729==null){
return true;
}
var _72a=_700(_728);
if(!_71d(el,_72a.pageX,_72a.pageY,_6f2[_729])){
var _72b=el.style.display;
el.style.display="none";
var _72c=document.elementFromPoint(_72a.clientX,_72a.clientY);
if(_72c){
Eventr.simulate(_72c,_728.type,{pointerX:_728.clientX,pointerY:_728.clientY,button:_728.button,ctrlKey:_728.ctrlKey,altKey:_728.altKey,shiftKey:_728.shiftKey,metaKey:_728.metaKey,bubbles:_728.bubbles,cancelable:_728.cancelable});
_728.stopImmediatePropagation();
_728.preventDefault();
}
el.style.display=_72b?_72b:"";
return (_72c==null);
}
return true;
};
function _6f9(){
if(_6f5){
return;
}
var _72d="";
for(var _72e in _6f2){
_72d+="img."+_72e+" { pointer-events: none !important }";
}
_6f3.innerHTML=_72d;
};
var _72f=false;
function init(){
if(_72f){
return;
}
_72f=true;
for(var i=0;i<_6f1.length;i++){
document.addEventListener(_6f1[i],_725,true);
}
if(!_6f5){
_6f3=document.createElement("style");
_6f3.innerHTML="";
document.body.appendChild(_6f3);
}
};
if(navigator.appName.indexOf("Internet Explorer")!=-1){
var _730=navigator.userAgent,_731=new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
if(_731.exec(_730)!==null){
var _732=parseFloat(RegExp.$1);
if(_732<11){
_6f5=true;
}
if(_732<=8){
log("IE v8 and older are not supported by TouchThroughAlpha!");
}
}
}
};
rabbit.util={isMac:function(){
return navigator.platform.toUpperCase().indexOf("MAC")>=0;
},isLocalStorageSupported:function(){
var _733="test";
try{
localStorage.setItem(_733,"1");
localStorage.removeItem(_733);
return true;
}
catch(error){
return false;
}
},getStackTrace:function(){
var e=new Error("dummy");
var _734=e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@").split("\n");
return _734;
},printStackTrace:function(){
if(document.URL.match(/http:\/\/localhost:.*/)||!document.URL.match(/http(s)?:\/\/[^\/]*stage\.pidoco\.com.*/)){
console.log(this.getStackTrace());
}
},parseBoolean:function(_735){
return _735===true||(_.isString(_735)&&_735.toLowerCase()==="true");
},bind:function(_736,_737){
return function(){
try{
return _736.apply(_737,arguments);
}
catch(e){
console.error(e);
}
};
},getParameterByName:function(name,url){
if(!url){
url=window.location.href;
}
name=name.replace(/[\[\]]/g,"\\$&");
var _738=new RegExp("[?&]"+name+"(=([^&#]*)|&|#|$)"),_739=_738.exec(url);
if(!_739){
return null;
}
if(!_739[2]){
return "";
}
return decodeURIComponent(_739[2].replace(/\+/g," "));
},bindSingleAndDoubleClick:function(_73a,_73b,_73c,_73d,_73e){
_73e=_73e||500;
$(_73a).click(function(_73f){
if(!$(this).data("timer")){
$(this).data("timer",setTimeout(function(){
_73b(_73f);
},_73e));
}
if(_73d){
return false;
}
}).dblclick(function(_740){
clearTimeout($(this).data("timer"));
$(this).data("timer",null);
return _73c(_740);
});
},bindInput:function(_741,_742,_743,_744){
if(_744===undefined){
_744=_742;
}
Mousetrap(_741).bind("enter",_742);
Mousetrap(_741).bind(["escape","esc"],_743,"keyup");
if(_744){
$(_741).blur(function(_745){
_744(_745);
});
}
},emptyNode:function(node){
var _746=this.getChildren(node);
for(var i=_746.length-1;i>=0;i--){
node.removeChild(_746[i]);
}
},getFirstChildNode:function(node){
return this.getChildren(node)[0];
},getChildren:function(node){
if(node.children){
return node.children;
}else{
var _747=node.childNodes;
var _748=[];
for(var i=0;i<_747.length;i++){
if(_747[i].nodeType===Node.ELEMENT_NODE){
_748.push(_747[i]);
}
}
return _748;
}
},scrollToRelative:function(_749,_74a,_74b){
var to=_749.scrollTop+_74a;
this.scrollTo(_749,to,_74b);
},scrollTo:function(_74c,to,_74d){
$(_74c).animate({scrollTop:to},_74d);
},xmlEncode:function(_74e){
return _74e.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
},xmlDecode:function(_74f){
return _74f.toString().replace(/&quot;/g,"\"").replace(/&lt;/g,"<").replace(/&amp;/g,"&");
},convertDate:function(_750){
if(_750=="7000000000000"){
return "not yet saved";
}
return Ext.util.Format.date(new Date(parseInt(_750)),"Y-m-d G:i");
},appendVersionQuery:function(_751){
return _751+"?v="+rabbit.parameters.codeVersion;
},cloneObject:function(_752){
return JSON.parse(JSON.stringify(_752));
},Class:function(_753,_754){
if(!_754){
_754=_753;
_753=function(){
};
}
var F=function(c){
if(this.init&&c!==rabbit.util.Class){
this.parent=_753.prototype;
this.init.apply(this,arguments);
}
};
_754.call(F.prototype=new _753(rabbit.util.Class),_753.prototype);
return F;
},absoluteCenter:function(_755){
var left=$(_755).parent().width()/2-$(_755).width()/2;
var top=$(_755).parent().height()/2-$(_755).height()/2;
$(_755).css({left:left,top:top,position:"absolute"});
},getDeferred:function(){
return new jQuery.Deferred();
},getResolvedPromise:function(){
var _756=new jQuery.Deferred();
_756.resolve();
return _756.promise();
},addClass:function(_757,_758){
if(typeof _757==="string"){
_757=document.getElementById(_757);
}
_757.setAttribute("class",_757.getAttribute("class")+" "+_758);
},removeClass:function(_759,_75a){
if(typeof _759==="string"){
_759=document.getElementById(_759);
}
_759.setAttribute("class",_759.getAttribute("class").replace(_75a,""));
},stopPropagation:function(e){
e.stopPropagation();
},compareStrings:function(s1,s2){
if(s1==null){
s1="";
}
if(s2==null){
return -1;
}
return "".localeCompare.call(s1,s2);
},compareInts:function(i1,i2){
if(isNaN(i1)){
return -1;
}
if(isNaN(i2)){
return 1;
}
if(i1==i2){
return 0;
}
if(i2>i1){
return -1;
}
return 1;
},insertAtIndex:function(_75b,key,_75c,_75d){
var tmp={};
var keys=_.keys(_75b);
for(var i=0;i<keys.length;i++){
if(i>=_75d){
tmp[keys[i]]=_75b[keys[i]];
delete _75b[keys[i]];
}
}
_75b[key]=_75c;
for(var key in tmp){
_75b[key]=tmp[key];
}
return _75b;
},recursivelyRemoveId:function(node){
node.removeAttribute("id");
var _75e=this.getChildren(node);
for(var i=0;i<_75e.length;i++){
this.recursivelyRemoveId(_75e[i]);
}
},getScrollbarWidth:function(){
if(this.scrollbarWidth){
return this.scrollbarWidth;
}
var w1,w2,div=$("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),_75f=div.children()[0];
$("body").append(div);
w1=_75f.offsetWidth;
div.css("overflow","scroll");
w2=_75f.offsetWidth;
if(w1===w2){
w2=div[0].clientWidth;
}
div.remove();
return (this.scrollbarWidth=w1-w2);
},submitError:function(data){
if(_.isString(data)){
data={message:data};
}
data.userAgent=navigator.userAgent;
data.currentTab=(rabbit.ui)?rabbit.ui.manager.currentTab:rabbit.parameters.page;
data.prototypeId=(rabbit.parameters.id)?rabbit.parameters.id:rabbit.parameters.page;
data.lastAction=(rabbit.action&&rabbit.action.manager.actions.length>0)?rabbit.action.manager.actions[rabbit.action.manager.actions.length-1].toString():"no action";
data.url=(data.url)?data.url:window.location.toString();
$.ajax({url:rabbit.common.baseUrl+"editor-jersey/errors",method:"post",data:{url:data.url,message:data.message,userAgent:data.userAgent,currentTab:data.currentTab,prototypeId:data.prototypeId,lastAction:data.lastAction,stack:data.stack,file:data.file,line:data.line,priority:data.priority,errorJson:data.errorJson}});
}};
pidoco={console:{log:function(){
},error:function(){
},debug:function(){
},warn:function(){
},info:function(){
}}};
if(typeof console.log.bind!=="undefined"){
pidoco={console:{}};
if(typeof console.log==="function"){
pidoco.console.log=console.log.bind(console);
}
if(typeof console.error==="function"){
pidoco.console.error=console.error.bind(console);
}
if(typeof console.debug==="function"){
pidoco.console.debug=console.debug.bind(console);
}
if(typeof console.warn==="function"){
pidoco.console.warn=console.warn.bind(console);
}
if(typeof console.info==="function"){
pidoco.console.info=console.info.bind(console);
}
}else{
var illegalInvocation=true;
var testConsole=console.log;
try{
testConsole("Test console does not produce any exception.");
illegalInvocation=false;
}
catch(e){
illegalInvocation=true;
}
if(!illegalInvocation){
pidoco={console:{log:console.log,error:console.error,debug:console.debug,warn:console.warn,info:console.info}};
}
}
rabbit.facade={createAction:function(type,id,_760){
var _761=new rabbit.Action(type,id);
for(var name in _760){
_761.addParam(name,_760[name]);
}
return _761;
},registerUserPref:function(key,_762){
rabbit.common.prefsManager.registerUserPref(key,_762);
},setUserPref:function(key,_763){
rabbit.common.prefsManager.setUserPref(key,_763);
},getUserPref:function(key){
return rabbit.common.prefsManager.getUserPref(key);
},setFrameSpecificUserPref:function(_764,_765,key,_766){
var _767=rabbit.util.cloneObject(rabbit.facade.getUserPref(key));
_767[_764]=_767[_764]||{};
_767[_764][_765]=_766;
rabbit.facade.setUserPref(key,_767);
},getFrameSpecificUserPref:function(_768,_769,key){
var _76a=rabbit.facade.getUserPref(key);
if(_76a[_768]&&_76a[_768][_769]){
return _76a[_768][_769];
}else{
return null;
}
},registerPrototypePref:function(key,_76b){
rabbit.common.prefsManager.registerPrototypePref(key,_76b);
},setPrototypePref:function(key,_76c){
rabbit.common.prefsManager.setPrototypePref(key,_76c);
},getPrototypePref:function(key){
return rabbit.common.prefsManager.getPrototypePref(key);
},setFrameSpecificPrototypePref:function(_76d,_76e,key,_76f){
var _770=rabbit.util.cloneObject(rabbit.facade.getPrototypePref(key));
_770[_76d]=_770[_76d]||{};
_770[_76d][_76e]=_76f;
rabbit.facade.setPrototypePref(key,_770);
},getFrameSpecificPrototypePref:function(_771,_772,key){
var _773=rabbit.facade.getPrototypePref(key);
if(_773[_771]&&_773[_771][_772]){
return _773[_771][_772];
}else{
return null;
}
},sendMessage:function(url,data,_774){
if(rabbit.communication&&rabbit.communication.manager&&rabbit.communication.manager.sendMessage){
rabbit.communication.manager.sendMessage(url,data,_774);
}
},suspendShortcuts:function(){
},resumeShortcuts:function(){
},isInEmberApp:function(){
return !!window.Ember;
},hasEmberJSApp:function(){
return !!window.EmberEs6;
},getEmberJSController:function(name){
return (this.hasEmberJSApp())?EmberEs6.__container__.lookup("controller:"+(name||"application")):null;
},precisionRound:function(_775,_776){
var _777=Math.pow(10,_776);
return Math.round(_775*_777)/_777;
},isChrome:navigator.userAgent.toLowerCase().indexOf("chrome")>-1,isSafari:navigator.userAgent.toLowerCase().indexOf("safari")>-1&&navigator.userAgent.toLowerCase().indexOf("chrome")<=-1};
rabbit.result={};
rabbit.ui={};
rabbit.data={};
rabbit.event={};
if(!rabbit.parameters){
rabbit.parameters={};
}
rabbit.interaction={};
rabbit.logLevel="debug";
rabbit.communication={};
rabbit.plugins={};
rabbit.stencils={};
rabbit.util=_.extend(rabbit.util,{formatDate:function(_778){
var diff=((new Date()).getTime()-_778)/1000/60;
var date=new Date(_778);
if(diff<2){
return t("result.discussion.time-a-minute-ago");
}else{
if(diff<60){
return t("result.discussion.time-minutes-ago-prefix")+Math.round(diff)+t("result.discussion.time-minutes-ago");
}else{
if(diff<1440){
return t("result.discussion.time-at")+this.pad(date.getHours())+":"+this.pad(date.getMinutes());
}else{
return t("result.discussion.on")+date.toDateString();
}
}
}
},pad:function(val,len){
val=String(val);
len=len||2;
while(val.length<len){
val="0"+val;
}
return val;
},getMode:function(){
return document.getElementById("mode").firstChild.nodeValue;
},isElementChildOfSelector:function(_779,_77a){
return $(_779).parents(_77a).length>0;
},userRole:null});
rabbit.events={buttonClicked:"buttonClicked",buttonMouseOver:"buttonMouseOver",buttonMouseOut:"buttonMouseOut",checkBoxClicked:"checkBoxClicked",click:"click",clickAreaClicked:"clickAreaClicked",clickAreaHovered:"clickAreaHovered",iphoneSwitchClicked:"iphoneSwitchClicked",loadPage:"loadPage",pageLoaded:"pageLoaded",pageReady:"pageReady",layerStoreInserted:"layerStoreInserted",layerLoaded:"layerLoaded",showLayer:"showLayer",hideLayer:"hideLayer",propertyChange:"propertyChange",radioButtonClicked:"radioButtonClicked",svgBlur:"svgBlur",svgFocus:"svgFocus",tabButtonMouseOut:"tabButtonMouseOut",tabButtonMouseOver:"tabButtonMouseOver",showDatepicker:"showDatepicker",hideDatepicker:"hideDatepicker",changeDatepickerPage:"changeDatepickerPage",changeSlider:"changeSlider",subMenuShow:"subMenuShow",subMenuHide:"subMenuHide",sliderChangedEvent:"sliderChangedEvent",treeViewNodeClicked:"treeViewNodeClicked",treeViewScrolled:"treeViewScrolled",ratingResultChangedEvent:"ratingResultChangedEvent",ratingMouseOut:"ratingMouseOut",ratingMouseOver:"ratingMouseOver",toggleToggleSection:"toggleToggleSection",discussionsInitialized:"discussionsInitialized",discussionStoreChanged:"discussionStoreChanged",discussionStoreAdded:"discussionStoreAdded",pageStoreLoaded:"pageStoreLoaded",folderStoreLoaded:"folderStoreLoaded",newInteractionRegistered:"newInteractionRegistered",switchOffSwitch:"switchOffSwitch",switchOnSwitch:"switchOnSwitch",pluginInitialized:"pluginInitialized",frameChanged:"frameChanged"};
rabbit.event.manager=function _returnEventDispatcher(){
var _77b={};
var _77c={};
return {registerOnEvent:function registerOnEvent(_77d,_77e,_77f,_780){
if(typeof _77d!=="string"||typeof _77e!=="function"||typeof _77f!=="object"){
throw "Invalid Arguments for registerOnEvent";
}
if(!_77b.hasOwnProperty(_77d)){
_77b[_77d]=[];
}
var data={"callback":_77e,"thisArg":_77f,"includeEventType":false};
if(_780){
data.includeEventType=true;
}
_77b[_77d].push(data);
},registerOnCategoryEvent:function(_781,_782,_783){
if(typeof _781!=="string"||typeof _782!=="function"||typeof _783!=="object"){
throw "Invalid Arguments for registerOnEventForCategory";
}
if(!_77c.hasOwnProperty(_781)){
_77c[_781]=[];
}
var data={"callback":_782,"thisArg":_783,"includeEventType":true};
_77c[_781].push(data);
console.log("ok for "+_781);
},raiseEvent:function raiseEvent(_784){
this._raiseCategoryEvent.apply(this,arguments);
this._raiseNormalEvent.apply(this,arguments);
},_raiseCategoryEvent:function raiseEvent(_785){
var _786=_785.replace(/\..*$/,"");
if(_786!=_785){
console.log("Try to raise catergory "+_786);
var _787=_77c[_786];
if(typeof _787==="undefined"){
console.warn("No handler category for invoked eventType "+_785+" (category: "+_786+")");
return;
}
for(var i=0;i<_787.length;i++){
try{
var args=Array.prototype.slice.call(arguments);
this._raiseEvent(_787[i],args);
}
catch(e){
rabbit.util.submitError(e);
}
}
}
},_raiseNormalEvent:function raiseEvent(_788){
var _789=_77b[_788];
if(typeof _789==="undefined"){
console.warn("No handler for invoked eventType "+_788);
return;
}
for(var i=0;i<_789.length;i++){
try{
var args=Array.prototype.slice.call(arguments);
this._raiseEvent(_789[i],args);
}
catch(e){
rabbit.util.submitError(e);
}
}
},_raiseEvent:function(_78a,args){
var _78b=_78a.callback;
var _78c=_78a.thisArg;
var _78d=_78a.includeEventType;
if(typeof _78b!=="function"){
return;
}
if(!_78d){
args.shift();
}
_78b.apply(_78c,args);
}};
}();
rabbit.communication.manager={urls:{createDiscussion:"__reviewBaseUrl__/__layerId__/create",moveDiscussion:"__reviewBaseUrl__/__layerId__/move",deleteDiscussion:"__reviewBaseUrl__/__layerId__/delete",getDiscussions:"__reviewBaseUrl__/__layerId__/discussions",postEntryDiscussion:"__reviewBaseUrl__/__layerId__/post",setStateDiscussion:"__reviewBaseUrl__/__layerId__/setstate",renameDiscussion:"__reviewBaseUrl__/__layerId__/rename",loadLayerExport:"../resources/layers/__layerId____browser__-__mode__.js",loadLayer:"__baseUrl__editor-jersey/prototypes/__prototypeId__/layers/__layer__",pageLink:"__urlPattern__",rectangleExport:"../resources/overlay-rectangles/__width__-__height__-__mode__.js",rectangle:"__baseUrl__prototype/result/__prototypeId__/rect/__mode__",mp3Export:"../resources/audios/__audioId__.mp3",mp3:"__baseUrl__editor-jersey/prototypes/__prototypeId__/audios/__audioId__.mp3",error:"__baseUrl__repository/error/__prototypeId__/"},submitError:function(data){
var url=this.getUrl("error");
if(rabbit.facade.isExport()){
return;
}
data.userAgent=navigator.userAgent;
this.post(url,"json",data);
},buildEditUrl:function(_78e){
var _78f="/rabbit/edit/"+rabbit.result.manager.currentPrototypeId+"#";
var _790="page/"+rabbit.result.manager.currentPageNr;
var _791="";
if(_78e){
var page=rabbit.data.pageStore.objects[_78e];
var _792=rabbit.data.folderStore.objects[page.data.parentFolder];
while(_792!==undefined){
_791="folder/"+_792.data.id+"/"+_791;
_792=rabbit.data.folderStore.objects[_792.data.parentFolder];
}
}
return _78f+_791+_790;
},getUrl:function(name,_793){
var url=this.urls[name];
var _794=rabbit.result.manager.urlPattern;
url=url.replace("__baseUrl__",rabbit.common.baseUrl);
url=url.replace("__reviewBaseUrl__",rabbit.facade.getBaseUrl());
url=url.replace("__prototypeId__",rabbit.result.manager.currentPrototypeId);
if(name==="loadLayer"){
_794=rabbit.result.manager.urlPattern.replace("__page__","layer/__page__");
}
url=url.replace("__urlPattern__",_794);
if(_793){
for(var key in _793){
url=url.replace("__"+key+"__",_793[key]);
}
}
return url;
},sendMessage:function(url,data,_795){
this.post(rabbit.common.baseUrl+url,undefined,data,{complete:_795});
},get:function(url,_796,data,_797){
return this.ajax(url,"get",_796,data,_797);
},post:function(url,_798,data,_799){
return this.ajax(url,"post",_798,data,_799);
},ajax:function(url,type,_79a,data,_79b){
if(!url){
throw "URL not provided for ajax";
}
type=type||"get";
_79a=_79a||undefined;
data=data||undefined;
_79b=_79b||{};
var _79c=_.defaults({url:url,type:type,dataType:_79a,data:data},_79b);
return $.ajax(_79c);
}};
rabbit.result.manager={datePickerClicked:false,customDatepickerObjects:[],init:function(_79d,_79e,_79f,_7a0){
try{
rabbit.common.i18n.init({lang:rabbit.result.lang});
rabbit.common.prefsManager.init({lang:rabbit.result.lang});
rabbit.interaction.manager.init();
}
catch(e){
rabbit.util.submitError(e);
}
rabbit.prototypeType=_79e;
rabbit.browser=_79f;
this.initialPageId=_79d;
this.isPushStateAvailable=window.location.protocol!=="file:"&&typeof window.history.replaceState!=="undefined";
this.fromApp=_7a0;
try{
this._initPlugins();
rabbit.data.folderStore.init();
rabbit.data.pageStore.init();
rabbit.data.layerStore.init();
rabbit.data.discussionStore.init();
rabbit.ui.manager.init();
if(rabbit.parameters.layerIdToOpen){
rabbit.ui.manager.showLayer($("#repository"),rabbit.parameters.layerIdToOpen);
}
}
catch(e){
rabbit.util.submitError(e);
}
rabbit.ui.manager._hackToMakeArrowsWork();
if(this.isPushStateAvailable){
window.onpopstate=function(e){
if(e.state){
if(e.state.fromRefresh){
window.history.back();
}else{
rabbit.facade.loadLayer(e.state.pageId);
this.showPage($("#"+e.state.repositoryId),e.state.pageId);
console.log("new pageid "+this.currentPageNr);
}
}
}.bind(this);
window.history.replaceState({repositoryId:"repository",pageId:rabbit.result.manager.currentPageNr},"",window.location.href);
}
},pageReady:function(_7a1){
var page=rabbit.data.pageStore.objects[_7a1];
rabbit.event.manager.raiseEvent(rabbit.events.pageReady,page,$("#repository"));
},setNextPageIsARefresh:function(){
window.history.replaceState({repositoryId:"repository",pageId:rabbit.result.manager.currentPageNr,fromRefresh:true},"",window.location.href);
},goBack:function(){
window.history.back();
},_initPlugins:function(){
for(var i=0;i<rabbit.facade._availablePlugins.length;i++){
try{
var _7a2=rabbit.facade._availablePlugins[i];
_7a2.init.apply(_7a2,_7a2._initialArguments);
}
catch(e){
rabbit.util.submitError(e);
}
}
rabbit.facade.raiseEvent(rabbit.events.pluginInitialized);
},goToPage:function(_7a3,_7a4){
var url;
var page=rabbit.data.pageStore.objects[_7a3];
var _7a5=Boolean(_7a3.match(/^[a-zA-Z0-9]*$/));
if(_7a5){
url=rabbit.data.pageStore.getPageUrl(_7a3);
if(rabbit.facade.isExport()&&!url){
alert("Sorry, this page is not part of the export.");
return;
}else{
if(page){
rabbit.mobile.trigger("pidoco:beforeGoToPage",{height:page.data.height,width:page.data.width});
}
}
}else{
if(!_7a3.match(/^[a-zA-Z0-9]*:\/\//)){
url="http://"+_7a3;
}else{
url=_7a3;
}
}
if(!_7a5&&rabbit.facade.runningInApp()&&rabbit.facade.isIOS){
window.open(url,"_system");
}else{
if(_7a4){
window.open(url);
}else{
location.href=url;
}
}
},showPage:function(_7a6,_7a7,_7a8,_7a9){
_7a8=_7a8||false;
var _7aa=_7a6.attr("id");
try{
if(_7a7===""||_7a7===this.currentPageNr){
return;
}
var page=rabbit.data.pageStore.objects[_7a7];
console.log("show page repository:"+_7aa+" page:"+_7a7,page);
if(page===undefined){
this.goToPage(_7a7);
return;
}
var _7ab=new jQuery.Deferred();
_7ab.promise().then(function(){
if(_7a8===true&&this.isPushStateAvailable){
console.log("PUSH STATE",_7a7);
window.history.pushState({repositoryId:_7aa,pageId:_7a7},"",rabbit.data.pageStore.getPageUrl(_7a7));
}
this.currentPageNr=_7a7;
_7a6.data("page-id",_7a7);
rabbit.event.manager.raiseEvent(rabbit.events.pageLoaded,page,_7a6);
rabbit.mobile.trigger("pidoco:afterShowPage");
}.bind(this));
rabbit.ui.manager.showPage(_7a6,_7a7,_7a9,_7ab);
}
catch(e){
rabbit.util.submitError(e);
}
},menuClick:function(a,b,_7ac){
rabbit.result.manager.goToPage(_7ac,false);
}};
rabbit.ui.manager={inTransition:false,init:function(){
rabbit.facade.registerOnEvent(rabbit.events.layerLoaded,this.fillWrappersWithLayer,this);
if(!rabbit.facade.isExport()){
window.onerror=function(_7ad,_7ae,_7af,_7b0,_7b1){
rabbit.util.submitError(_7b1);
};
}
},createWrappers:function(_7b2,_7b3,_7b4){
var page=rabbit.data.pageStore.objects[_7b3];
if(_7b4===true&&page){
for(var name in page.data.layers){
if(page.data.layers[name]===true||page.data.layers[name]==="true"){
this.createWrappers(_7b2,name);
}
}
}
var _7b5=_7b2.find(">.wrapper.wrapper-"+_7b3);
if(!_7b5.length){
_7b5=$("<div data-layer-id=\""+_7b3+"\" id=\""+_7b2[0].id+"-"+_7b3+"-wrapper\" class=\"u-p-hidden wrapper wrapper-"+_7b3+"\"></div>").appendTo(_7b2);
}
return _7b5;
},fillWrappersWithLayer:function(_7b6){
var _7b7=_7b6.data.id;
$(".wrapper-"+_7b7+"[data-fill-me=\"true\"]:empty").each(function(_7b8,_7b9){
this.fillWrapperWithLayer(_7b9,_7b6);
_7b9.removeAttribute("data-fill-me");
}.bind(this));
},fillWrapperWithLayer:function(_7ba,_7bb,_7bc){
var _7bd=_7ba.parentNode.id;
var html=_7bb.data.html;
if(html){
html=$(_7bb.data.html.replace(/__containerId__/g,_7bd));
if(_7bc){
html.find("script").remove();
}
$(_7ba).append(html);
if(!this.inTransition){
rabbit.facade.raiseEvent(rabbit.events.layerStoreInserted,_7ba.children[0]);
}
}else{
_7ba.setAttribute("data-fill-me","true");
}
return html;
},getLayerWrapper:function(_7be,_7bf){
return _7be.find(">.wrapper-"+_7bf);
},showLayer:function(_7c0,_7c1){
var _7c2=rabbit.data.layerStore.objects[_7c1];
if(!_7c2){
rabbit.data.layerStore.loadLayer(_7c1);
_7c2=rabbit.data.layerStore.objects[_7c1];
}
var _7c3=this.getLayerWrapper(_7c0,_7c1);
if(!_7c3.length){
_7c3=this.createWrappers(_7c0,_7c1,true);
}
if(_7c3[0].children.length===0){
this.fillWrapperWithLayer(_7c3[0],_7c2);
}
_7c3.removeClass("u-p-hidden");
rabbit.event.manager.raiseEvent(rabbit.events.showLayer,{id:_7c0.attr("id")+_7c1,layerId:_7c1,repositoryId:_7c0.attr("id")});
},hideLayer:function(_7c4,_7c5){
var _7c6=this.getLayerWrapper(_7c4,_7c5);
_7c6.addClass("u-p-hidden");
rabbit.event.manager.raiseEvent(rabbit.events.hideLayer,{id:_7c4.attr("id")+_7c5,layerId:_7c5,repositoryId:_7c4.attr("id")});
},toggleLayer:function(_7c7,_7c8){
var _7c9=this.getLayerWrapper(_7c7,_7c8);
if(!_7c9.length||_7c9.hasClass("u-p-hidden")){
return this.showLayer(_7c7,_7c8);
}else{
return this.hideLayer(_7c7,_7c8);
}
},showPage:function(_7ca,_7cb,_7cc,_7cd){
var _7cd=_7cd||rabbit.util.getDeferred();
if(_7cc==="fromRight"||_7cc==="fromLeft"||_7cc==="fromTop"||_7cc==="fromBottom"){
this.showPageWithTranslation(_7ca,_7cb,_7cc,_7cd);
}else{
if(_7cc==="opacity"){
this.showPageWithOpacity(_7ca,_7cb,_7cd);
}else{
if(_7cc==="flip"){
this.showPageWithFlip(_7ca,_7cb,_7cd);
}else{
this.showPageWithoutTransition(_7ca,_7cb,_7cd);
}
}
}
if(_7ca.attr("id")=="repository"){
_7cd.promise().done(function(){
$(_7ca).attr("data-review-reference-id",_7cb);
$(_7ca).attr("data-page-id",_7cb);
$("body").attr("data-current-page-id",_7cb);
});
}
},showPageWithoutTransition:function(_7ce,_7cf,_7d0){
var page=rabbit.data.pageStore.objects[_7cf];
rabbit.ui.manager.showLayer(_7ce,_7cf);
_.each(page.data.layers,function(_7d1,_7d2){
this.showLayer(_7ce,_7d2);
}.bind(this));
_7ce.find(">.wrapper:not(.u-p-hidden)").each(function(_7d3,_7d4){
var _7d5=_7d4.getAttribute("data-layer-id");
if((!page.data.layers.hasOwnProperty(_7d5)||page.data.layers[_7d5]!==true)&&_7d5!=_7cf){
this.hideLayer(_7ce,_7d5);
}
}.bind(this));
if(_7d0){
_7d0.resolve();
}
},showPageWithFlip:function(_7d6,_7d7,_7d8){
var _7d9=500;
this.startTransition(_7d6);
var _7da=this.createTransitionWrapper(_7d6,_7d7);
var _7db=_7da.leave.find(">div");
var _7dc=_7da.enter.find(">div");
_7d6.find(">div").addClass("u-p-hidden");
_7d6.append(_7da.leave).append(_7da.enter);
_7dc.addClass("u-p-hidden");
_7db.transition({perspective:"0px",rotateY:"90deg",duration:_7d9},function(){
_7dc.transition({perspective:"0px",rotate3d:"0,1,0,270deg",duration:0},function(){
_7dc.removeClass("u-p-hidden");
this.showPageWithoutTransition(_7dc,_7d7);
_7dc.transition({perspective:"0px",rotate3d:"0,1,0,360deg",duration:_7d9},function(){
_7db.transition({perspective:"0px",rotateY:"0deg",duration:0},function(){
this.stopTransition(_7d6);
this.showPageWithoutTransition(_7d6,_7d7);
_7da.leave.remove();
_7da.enter.remove();
_7d8.resolve();
}.bind(this));
}.bind(this));
}.bind(this));
}.bind(this));
},showPageWithOpacity:function(_7dd,_7de,_7df){
var _7e0=500;
this.startTransition(_7dd);
var _7e1=this.createTransitionWrapper(_7dd,_7de);
var _7e2=_7e1.leave.find(">div");
var _7e3=_7e1.enter.find(">div");
_7dd.find(">div").addClass("u-p-hidden");
_7dd.append(_7e1.leave).append(_7e1.enter);
_7e3.css({opacity:0});
_7e2.transition({opacity:0,duration:_7e0},function(){
this.showPageWithoutTransition(_7e3,_7de);
_7df.resolve();
_7e3.transition({opacity:1,duration:_7e0},function(){
this.stopTransition(_7dd);
this.showPageWithoutTransition(_7dd,_7de);
_7e1.leave.remove();
_7e1.enter.remove();
}.bind(this));
}.bind(this));
},showPageWithTranslation:function(_7e4,_7e5,_7e6,_7e7){
var _7e8=_7e4.width();
var _7e9=_7e4.height();
var _7ea=500;
this.startTransition(_7e4);
var _7eb=this.createTransitionWrapper(_7e4,_7e5);
var _7ec=_7eb.leave.find(">div");
var _7ed=_7eb.enter.find(">div");
if(_7e6==="fromLeft"){
_7ed.css("left",-1*_7e8);
}else{
if(_7e6==="fromTop"){
_7ed.css("top",-1*_7e9);
}else{
if(_7e6==="fromBottom"){
_7ed.css("top",_7e9);
}else{
_7ed.css("left",_7e8);
}
}
}
_7ed.find(">div").removeClass("u-p-hidden");
_7e4.find(">div").addClass("u-p-hidden");
_7e4.append(_7eb.leave).append(_7eb.enter);
var _7ee=function(){
this.stopTransition(_7e4);
this.showPageWithoutTransition(_7e4,_7e5);
_7eb.leave.remove();
_7eb.enter.remove();
_7e7.resolve();
}.bind(this);
if(_7e6==="fromLeft"){
_7ec.transition({x:_7e8+"px",duration:_7ea});
_7ed.transition({x:_7e8+"px",duration:_7ea},_7ee);
}else{
if(_7e6==="fromTop"){
_7ec.transition({y:_7e9+"px",duration:_7ea});
_7ed.transition({y:_7e9+"px",duration:_7ea},_7ee);
}else{
if(_7e6==="fromBottom"){
_7ec.transition({y:"-"+_7e9+"px",duration:_7ea});
_7ed.transition({y:"-"+_7e9+"px",duration:_7ea},_7ee);
}else{
_7ec.transition({x:"-"+_7e8+"px",duration:_7ea});
_7ed.transition({x:"-"+_7e8+"px",duration:_7ea},_7ee);
}
}
}
},createTransitionWrapper:function(_7ef,_7f0){
var _7f1=_7ef.data("page-id");
var _7f2=rabbit.data.pageStore.objects[_7f0];
var _7f3=rabbit.data.pageStore.objects[_7f1];
var _7f4,_7f5;
var _7f6=$("<div class=\"transition-wrapper transition-enter\" data-page-id=\""+_7f0+"\"><div class=\"layer-container\"></div></div>");
var _7f7=$("<div class=\"transition-wrapper transition-leave\" data-page-id=\""+_7f1+"\"><div class=\"layer-container\"></div></div>");
var _7f8=_7f7.find(">div");
var _7f9=_7f6.find(">div");
var _7fa=_7ef.find(".wrapper-"+_7f1).clone().remove("script");
var _7fb=_7ef.find(".wrapper-"+_7f0).clone().remove("script");
for(_7f4 in _7f2.data.layers){
_7f5=_7f2.data.layers[_7f4];
if(_7f5===true||_7f5==="true"){
this.createWrappers(_7f9,_7f4,false);
this.showLayer(_7f9,_7f4);
}
}
for(_7f4 in _7f3.data.layers){
_7f5=_7f3.data.layers[_7f4];
if(_7f5===true||_7f5==="true"){
this.createWrappers(_7f8,_7f4,false);
this.showLayer(_7f8,_7f4);
}
}
_7f8.append(_7fa);
if(_7fb.length===0){
_7fb=this.createWrappers(_7f9,_7f0,true);
}else{
_7f9.append(_7fb);
}
if(_7fb.children().length===0){
this.fillWrapperWithLayer(_7fb[0],rabbit.data.layerStore.objects[_7f0],true);
}
return {enter:_7f6,leave:_7f7};
},startTransition:function(_7fc){
this.inTransition=true;
$("body").addClass("disable-pointer-events");
$(_7fc).addClass("during-transition");
},stopTransition:function(_7fd){
this.inTransition=false;
$("body").removeClass("disable-pointer-events");
$(_7fd).removeClass("during-transition");
},_forceRedraw:function(){
var _7fe=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;
var _7ff=navigator.userAgent.toLowerCase().indexOf("safari")>-1;
if(_7fe||_7ff){
}else{
if(window.resizeTo&&window.outerWidth&&window.outerHeight){
window.resizeTo(window.outerWidth+1,window.outerHeight+1);
window.resizeTo(window.outerWidth-1,window.outerHeight-1);
}
}
},_hackToMakeArrowsWork:function(){
window.setTimeout(this._forceRedraw,1000);
}};
rabbit.interaction.manager={tmp:{},interactions:[],init:function(){
rabbit.facade.registerOnEvent(rabbit.events.pageLoaded,function(){
for(var i=0;i<this.interactions.length;i++){
this.interactions[i].cancel();
}
},this);
},ignoreImminentClickAction:function(_800){
rabbit.interaction.manager.ignoreClick=true;
if(_800!==false){
setTimeout(function(){
rabbit.interaction.manager.ignoreClick=false;
},400||_800);
}
},actions:{click:{makeableOnDesktop:function(_801){
return !_801.numberOfFinger||_801.numberOfFinger=="1"||_801.numberOfFinger=="any";
},render:function(_802){
if(parseInt(_802.data.action.numberOfFinger,10)>1){
return t("interaction.action.multiFingerClick.userDescription").replace("__element__",rabbit.interaction.manager.getElementTitle(_802));
}else{
return t("interaction.action.click.userDescription").replace("__element__",rabbit.interaction.manager.getElementTitle(_802));
}
},defineEvent:function(_803){
var _804=document.getElementById(_803.data.stencilId);
if(_803.data.action.button=="right"){
$(_804).on("contextmenu",function(e){
rabbit.interaction.manager.raiseInteraction(_803,rabbit.interaction.manager.serializeEvent(e));
return false;
});
}else{
if(false){
var _805;
var _806;
var _807=200;
var _808=500;
_804.addEventListener("touchstart",function(e){
if(!_803.data.action.numberOfFinger||(_803.data.action.numberOfFinger&&(_803.data.action.numberOfFinger==="any"||parseInt(_803.data.action.numberOfFinger,10)===e.touches.length))){
_805=new Date().getTime();
}
e.preventDefault();
},false);
_804.addEventListener("touchend",function(e){
if(_805){
var end=new Date().getTime();
if(_807>(end-_805)){
rabbit.interaction.manager.raiseInteraction(_803,rabbit.interaction.manager.serializeEvent(e));
_805=null;
}
}
e.preventDefault();
},false);
}else{
if(rabbit.interaction.manager.actions.click.makeableOnDesktop(_803.data.action)){
_804.addEventListener("mouseup",function(e){
setTimeout(function(){
if(!rabbit.interaction.manager.ignoreClick){
rabbit.interaction.manager.raiseInteraction(_803,rabbit.interaction.manager.serializeEvent(e));
}
},300);
});
}
}
}
}},doubleClick:{makeableOnDesktop:true,render:function(_809){
return t("interaction.action.doubleClick.userDescription").replace("__element__",rabbit.interaction.manager.getElementTitle(_809));
},defineEvent:function(_80a){
var _80b=document.getElementById(_80a.data.stencilId);
if(_80a.data.action.button=="right"){
$(_80b).on("contextmenu",function(e){
rabbit.interaction.manager.raiseInteraction(_80a,rabbit.interaction.manager.serializeEvent(e));
return false;
});
}else{
if(false){
var _80c;
var _80d;
var _80e=200;
var _80f=500;
_80b.addEventListener("touchstart",function(e){
_80c=new Date().getTime();
if(_80f<(_80c-_80d)){
_80d=null;
}
e.preventDefault();
},false);
_80b.addEventListener("touchend",function(e){
if(_80c){
var end=new Date().getTime();
if(_80e>(end-_80c)){
if(!_80d){
_80d=end;
}else{
if(_80f>(end-_80d)){
rabbit.interaction.manager.raiseInteraction(_80a,rabbit.interaction.manager.serializeEvent(e));
_80c=null;
_80d=null;
}
_80d=null;
}
}
}
e.preventDefault();
},false);
}else{
_80b.addEventListener("dblclick",function(e){
rabbit.interaction.manager.ignoreImminentClickAction();
rabbit.interaction.manager.raiseInteraction(_80a,rabbit.interaction.manager.serializeEvent(e));
});
}
}
}},hover:{makeableOnDesktop:true,render:function(_810){
return t("interaction.action.hover.userDescription").replace("__element__",rabbit.interaction.manager.getElementTitle(_810));
},defineEvent:function(_811){
if(!_811.data.action.trigger){
_811.data.action.trigger="enter";
}
if(_811.data.action.trigger=="both"||_811.data.action.trigger=="enter"){
$("#"+_811.data.stencilId).on("mouseenter",function(e){
rabbit.interaction.manager.raiseInteraction(_811,rabbit.interaction.manager.serializeEvent(e));
});
}
if(_811.data.action.trigger=="both"||_811.data.action.trigger=="leave"){
$("#"+_811.data.stencilId).on("mouseleave",function(e){
rabbit.interaction.manager.raiseInteraction(_811,rabbit.interaction.manager.serializeEvent(e));
});
}
}},swipe:{makeableOnDesktop:false,render:function(_812){
return t("interaction.action.swipe.userDescription").replace("__element__",rabbit.interaction.manager.getElementTitle(_812));
},defineEvent:function(_813){
var _814=Hammer(document.getElementById(_813.data.stencilId),{swipe_max_touches:5,drag_block_horizontal:true,drag_block_vertical:true,swipe_velocity:0.4});
_814.on("swipe",function(e){
if(_813.data.action.direction==="any"||e.gesture.direction===_813.data.action.direction){
rabbit.facade.markHighlightTouchesAsSuccessful();
rabbit.interaction.manager.ignoreImminentClickAction();
rabbit.interaction.manager.raiseInteraction(_813,rabbit.interaction.manager.serializeEvent(e));
}
});
}},pinch:{makeableOnDesktop:false,render:function(_815){
return t("interaction.action.pinch.userDescription").replace("__element__",rabbit.interaction.manager.getElementTitle(_815));
},defineEvent:function(_816){
var _817=Hammer(document.getElementById(_816.data.stencilId),{prevent_default:true});
var _818=null;
var _819=false;
if(_816.data.action.direction==="in"){
_818="pinchin";
}else{
if(_816.data.action.direction==="out"){
_818="pinchout";
}else{
_818="pinch";
}
}
_817.on("transformstart",function(e){
_819=false;
});
_817.on("transformend",function(e){
if(_819){
rabbit.facade.markHighlightTouchesAsSuccessful();
rabbit.interaction.manager.raiseInteraction(_816,rabbit.interaction.manager.serializeEvent(e));
}
});
_817.on(_818,function(e){
_819=true;
});
}}},getInterinteractionEventId:function(_81a){
return "interaction."+_81a;
},raiseInteraction:function(_81b,e){
if(this.isInteractionExecutable(_81b)){
rabbit.facade.raiseEvent(_81b.data.uniqueId,e);
return true;
}else{
return false;
}
},isLayerHidden:function(_81c){
return $(_81c).css("display")==="none";
},isInteractionExecutable:function(_81d){
var _81e=$("#"+_81d.data.stencilId);
var _81f=_81e.parents(".layer");
for(var i=0;i<_81f.length;i++){
if(this.isLayerHidden(_81f.get(i))){
return false;
}
}
if(_81e.length===0||_81e.hasClass("layer")&&this.isLayerHidden(_81e)){
return false;
}
return true;
},renderAction:function(_820){
return rabbit.interaction.manager.actions[_820.data.action.type].render(_820);
},getElementTitle:function(_821){
var type=$("#"+_821.data.stencilId).data("interactive-element-type");
return t("stencils."+type+"-palette");
},registerAction:function(name,_822){
if(_.has(rabbit.interaction.manager.actions,name)){
throw "Action with name "+name+" already exists.";
}else{
rabbit.interaction.manager.actions[name]=_822;
}
},registerReaction:function(name,_823){
if(_.has(rabbit.interaction.manager.reactions,name)){
throw "Action with name "+name+" already exists.";
}else{
rabbit.interaction.manager.reactions[name]=_823;
}
},reactions:{showPage:{init:function(_824,_825){
var _826=rabbit.interaction.manager.reactions.showPage.getOpeningMethod(_825);
if(_826==="withoutReloadOnly"||_826==="withoutReloadIframe"){
rabbit.facade.loadLayer(_825.target);
}
},getOpeningMethod:function(_827){
var _828=_827.options;
if(!_828){
if(_827.inNewTab==="true"){
_828="reloadNewTab";
}else{
if(_827.withoutReload=="true"){
_828="withoutReloadOnly";
}else{
if(_827.withoutReload!==undefined){
_828="reloadOnly";
}
}
}
}
return _828;
},callback:function(_829,_82a,_82b){
var _82c=_82b.target;
if(!_82c){
return;
}
var _82d=rabbit.interaction.manager.reactions.showPage.getOpeningMethod(_82b);
if(_82d==="reloadNewTab"){
rabbit.result.manager.goToPage(_82c,true);
}else{
if(_82d==="withoutReloadOnly"){
rabbit.facade.showPage($("#repository"),_82c,true,_82b.transition);
}else{
if(_82d==="withoutReloadIframe"){
var _82e=document.getElementById(_82a.data.stencilId);
var _82f=rabbit.facade.getRepositoryFromStencil(_82e);
var _830=false;
if(_82f.attr("id")==="repository"){
_830=true;
}
rabbit.facade.showPage(_82f,_82c,_830,_82b.transition);
}else{
rabbit.result.manager.goToPage(_82c);
}
}
}
}},toggleLayer:{init:function(_831,_832){
rabbit.facade.loadLayer(_832.layer);
},callback:function(_833,_834,_835){
var _836=document.getElementById(_834.data.stencilId);
var _837=rabbit.facade.getRepositoryFromStencil(_836);
if(_835.visibility==="toggle"){
rabbit.facade.toggleLayer(_837,_835.layer);
}else{
if(_835.visibility==="show"){
rabbit.facade.showLayer(_837,_835.layer);
}else{
if(_835.visibility==="hide"){
rabbit.facade.hideLayer(_837,_835.layer);
}
}
}
}},vibrate:{callback:function(_838,_839,_83a){
navigator.vibrate=navigator.vibrate||navigator.mozVibrate||navigator.webkitVibrate||undefined;
if(navigator.vibrate){
navigator.vibrate(_83a.duration);
}else{
if(window.parentBody){
window.parentBody.trigger("pidoco:vibrate",[{duration:_83a.duration}]);
}else{
}
}
}},browserBack:{callback:function(_83b,_83c,_83d){
rabbit.facade.browserBack();
}},browserForward:{callback:function(_83e,_83f,_840){
rabbit.facade.browserForward();
}},closeBrowserWindow:{callback:function(_841,_842,_843){
rabbit.facade.closeBrowserWindow();
}}},registerInteraction:function(_844,_845,_846,_847){
if(_844[0]==="-"){
return;
}
if(!_.isArray(_847)){
_847=[_847];
}
var _848=new rabbit.data.Interaction(_844,_845,_846,_847);
_848.initializeAction();
_848.initializeReactions();
this.interactions.push(_848);
rabbit.facade.raiseEvent(rabbit.events.newInteractionRegistered,_848);
},serializeEvent:function(e){
return {};
}};
rabbit.mobile={bind:function(_849,_84a){
if(rabbit.facade.runningInApp()){
document.addEventListener(_849,_84a);
}
},unbind:function(_84b,_84c){
if(rabbit.facade.runningInApp()){
document.removeEventListener(_84b,_84c);
}
},trigger:function(_84d,data){
if(rabbit.facade.runningInApp()){
window.parentBody.trigger(_84d,data);
}
}};
rabbit.facade=_.extend(rabbit.facade,function _returnFacade(){
var _84e=rabbit.event.manager;
return {_availablePlugins:[],vml:false,isIOS:navigator.userAgent.match(/iPad|iPhone/),isAndroid:navigator.userAgent.match(/Android/),scaleFactor:1,registerPlugin:function registerPlugin(_84f,_850){
try{
var _851=Array.prototype.slice.call(arguments);
_851.shift();
_84f._initialArguments=_851;
this._availablePlugins.push(_84f);
}
catch(e){
rabbit.util.submitError(e);
}
},setScaleFactor:function(_852){
this.scaleFactor=_852;
},getScaleFactor:function(){
return this.scaleFactor;
},isFrameDisplayed:false,registerOnEvent:function registerOnEvent(_853,_854,_855){
try{
if(_.isArray(_853)){
for(var i=0;i<_853.length;i++){
console.debug("Registering a handler for "+_853[i]);
_84e.registerOnEvent(_853[i],_854,_855,true);
}
}else{
if(_.isString(_853)){
console.debug("Registering a handler for "+arguments[0]);
_84e.registerOnEvent(_853,_854,_855,false);
}
}
}
catch(e){
rabbit.util.submitError(e);
return undefined;
}
},registerOnCategoryEvent:function(_856,_857,_858){
try{
_84e.registerOnCategoryEvent(_856,_857,_858,true);
}
catch(e){
rabbit.util.submitError(e);
return undefined;
}
},raiseEvent:function raiseEvent(_859){
console.debug("Raising a "+arguments[0]+" event");
try{
return _84e.raiseEvent.apply(_84e,arguments);
}
catch(e){
rabbit.util.submitError(e);
return undefined;
}
},fireMouseOn:function fireMouseOn(_85a){
var _85b=document.getElementById(_85a);
if(_85b===null){
return;
}
console.debug("Forwarding a click event to "+_85a);
_85b.click();
_85b.focus();
},showPage:function(){
return rabbit.result.manager.showPage.apply(rabbit.result.manager,arguments);
},getBaseUrl:function getBaseUrl(){
return rabbit.result.manager.baseUrl;
},getPageUrl:function getPageUrl(){
return this.getBaseUrl()+"/"+rabbit.result.manager.currentPageNr;
},getRole:function getRole(){
return rabbit.result.manager.currentRole;
},isReviewer:function(){
return this.getRole()==="REVIEWER";
},getUrlPattern:function(){
return rabbit.result.manager.urlPattern;
},getCurrentPageId:function(){
return rabbit.result.manager.currentPageNr;
},getCurrentPage:function(){
return rabbit.data.pageStore.objects[rabbit.result.manager.currentPageNr];
},loadLayer:function(){
return rabbit.data.layerStore.loadLayer.apply(rabbit.data.layerStore,arguments);
},getLayer:function(){
return rabbit.ui.manager.getLayer.apply(rabbit.ui.manager,arguments);
},showLayer:function(){
return rabbit.ui.manager.showLayer.apply(rabbit.ui.manager,arguments);
},hideLayer:function(){
return rabbit.ui.manager.hideLayer.apply(rabbit.ui.manager,arguments);
},toggleLayer:function(){
return rabbit.ui.manager.toggleLayer.apply(rabbit.ui.manager,arguments);
},getMode:function(){
return document.getElementById("mode").firstChild.nodeValue;
},getInteractionsAvailableForToolbar:function(){
return rabbit.interaction.manager.interactionsAvailableForToolbar;
},raiseInteraction:function(){
return rabbit.interaction.manager.raiseInteraction.apply(rabbit.interaction.manager,arguments);
},renderAction:function(_85c){
return rabbit.interaction.manager.renderAction.apply(rabbit.interaction.manager,arguments);
},registerAction:function(){
return rabbit.interaction.manager.registerAction.apply(rabbit.interaction.manager,arguments);
},registerReaction:function(){
return rabbit.interaction.manager.registerReaction.apply(rabbit.interaction.manager,arguments);
},goBack:function(){
return rabbit.result.manager.goBack.apply(rabbit.result.manager,arguments);
},setNextPageIsARefresh:function(){
return rabbit.result.manager.setNextPageIsARefresh.apply(rabbit.result.manager,arguments);
},runningInApp:function(){
return rabbit.result.manager.fromApp;
},browserBack:function(){
history.go(-1);
},browserForward:function(){
history.go(1);
},closeBrowserWindow:function(){
window.close();
},getLayerFromStencil:function(_85d){
return $(_85d).closest(".layer");
},getRepositoryFromStencil:function(_85e){
return $(_85e).closest(".repository");
},isAppCooker:function(){
return rabbit.prototypeType==="APPCOOKERWEB";
},isExport:function(){
return rabbit.result.manager.isExport;
},isPhantomJS:function(){
return $("body").hasClass("phantom-js");
},isApi:function(){
return $("body").hasClass("api-call");
},isSketched:function(){
return $("body").hasClass("sketched");
},isPlain:function(){
return !rabbut.facade.isSketched();
},mobile:{bind:function(_85f){
return rabbit.mobile.bind.apply(rabbit.mobile,arguments);
},unbind:function(_860){
return rabbit.mobile.unbind.apply(rabbit.mobile,arguments);
},trigger:function(_861){
return rabbit.mobile.trigger.apply(rabbit.mobile,arguments);
}},markHighlightTouchesAsSuccessful:function(){
return rabbit.plugins.gestureHighlight.markHighlightTouchesAsSuccessful.apply(rabbit.plugins.gestureHighlight,arguments);
},"alert":function(_862,text,_863){
rabbit.plugins.systemAlert.alert(_862,text,_863);
}};
}());
rabbit.data.Base=rabbit.util.Class(function(){
this.init=function(){
this.data={};
};
this.getData=function(){
return this.data;
};
this.setData=function(data){
this.data=data;
return this;
};
});
rabbit.data.layerStore={objects:{},init:function(){
},loadLayer:function(_864){
var ajax;
if(typeof this.objects[_864]==="undefined"){
var url=null;
if(rabbit.result.manager.isExport){
var _865=(rabbit.browser==="ie")?"-ie":"";
url=rabbit.communication.manager.getUrl("loadLayerExport",{layerId:_864,browser:_865,mode:rabbit.util.getMode()});
}else{
url=rabbit.communication.manager.getUrl("loadLayer",{prototypeId:rabbit.result.manager.currentPrototypeId,layer:_864});
}
var _866=(rabbit.result.manager.isExport)?"jsonp":"html";
ajax=rabbit.communication.manager.get(url,_866,{containerId:"__containerId__",mode:rabbit.util.getMode(),viewMode:rabbit.parameters.viewMode,fontFamily:rabbit.parameters.fontFamily},{crossDomain:rabbit.result.manager.isExport});
if(!rabbit.result.manager.isExport){
ajax.done(this.addLayerFromHtml.bind(this));
}
this.objects[_864]=new rabbit.data.Layer(_864,null,null);
}else{
ajax=rabbit.util.getResolvedPromise();
}
return ajax;
},addLayerFromHtml:function(html){
var _867=$($.trim(html));
var _868=_867.find("#result");
$(_868).children().each(function(_869,_86a){
_86a=$(_86a);
var _86b=_86a.data("layer-id");
var _86c=_86a.data("layer-type");
var html=$.trim(_86a[0].outerHTML);
if(this.objects[_86b]){
this.objects[_86b].data.id=_86b;
this.objects[_86b].data.layerType=_86c;
this.objects[_86b].data.html=html;
}else{
this.objects[_86b]=new rabbit.data.Layer(_86b,_86c,html);
}
rabbit.facade.raiseEvent(rabbit.events.layerLoaded,this.objects[_86b]);
}.bind(this));
_867.find("#border-wrapper > div").prependTo(".border-wrapper");
_867.find("#styles > style").appendTo("body");
var _86d=_867.find("#json").text();
if(_86d){
var _86e=JSON.parse(_86d);
rabbit.data.pageStore.addPage(_86e);
}
}};
rabbit.data.Layer=rabbit.util.Class(rabbit.data.Base,function(sup){
this.init=function(id,_86f,html){
this.data={id:id,layerType:_86f,html:html};
};
});
rabbit.data.pageStore={objects:{},init:function(){
var _870=$("#pageNames").html();
if((_870!==null)&&(_870!=="__pageNames__")){
_870=JSON.parse(_870);
}
var _871=rabbit.data.raw.pages;
for(var id in _871){
this.addPage(_871[id]);
}
rabbit.event.manager.raiseEvent(rabbit.events.pageStoreLoaded);
},addPage:function(_872){
this.objects[_872.id]=new rabbit.data.Page(_872);
},getPageUrl:function(id){
if(rabbit.result.manager.isExport){
return id+"-"+rabbit.parameters.exportSuffixFilename+".html";
}else{
return rabbit.communication.manager.getUrl("pageLink",{page:id});
}
}};
rabbit.data.Page=rabbit.util.Class(rabbit.data.Base,function(sup){
this.init=function(data){
sup.init.apply(this);
this.data=data||{};
};
});
rabbit.data.folderStore={objects:{},init:function(){
var _873=rabbit.data.raw.folders;
for(var id in _873){
this.objects[id]=new rabbit.data.Folder(_.extend(_873[id],{id:id}));
}
rabbit.event.manager.raiseEvent(rabbit.events.folderStoreLoaded);
}};
rabbit.data.Folder=rabbit.util.Class(rabbit.data.Base,function(sup){
this.init=function(data){
sup.init.apply(this);
this.data=data||{};
};
});
rabbit.data.Interaction=rabbit.util.Class(rabbit.data.Base,function(sup){
this.started=false;
this.numberOfReactionDone=0;
this.cancelled=false;
this.timeouts=[];
this.init=function(_874,_875,_876,_877){
this.data={stencilId:_874,interactionId:_875,uniqueId:_874+"-"+_875,action:_876,reactions:_877};
};
this.initializeAction=function(){
if(!_.has(rabbit.interaction.manager.actions,this.data.action.type)){
rabbit.util.submitError("Action \""+this.data.action.type+"\" is not supported");
return;
}
var init=rabbit.interaction.manager.actions[this.data.action.type].init;
if(typeof init==="function"){
init(this);
}
rabbit.interaction.manager.actions[this.data.action.type].defineEvent(this);
};
this.initializeReactions=function(){
_.each(this.data.reactions,function(_878){
if(!_.has(rabbit.interaction.manager.reactions,_878.type)){
rabbit.util.submitError("Reaction \""+_878.type+"\" is not supported");
return;
}
var init=rabbit.interaction.manager.reactions[_878.type].init;
if(typeof init==="function"){
init(this,_878);
}
}.bind(this));
rabbit.facade.registerOnEvent(this.data.uniqueId,function(e){
this.started=true;
this.numberOfReactionDone=0;
this.cancelled=false;
this.timeouts=[];
_.each(this.data.reactions,function(_879){
var _87a=parseInt(_879.delay,10)||0;
this.timeouts.push(setTimeout(function(){
this.numberOfReactionDone++;
if(this.cancelled!==true){
rabbit.interaction.manager.reactions[_879.type].callback(e,this,_879);
}
}.bind(this),_87a));
}.bind(this));
},this,this.data.stencilId);
};
this.cancel=function(){
if(this.started){
this.cancelled=true;
for(var i=0;i<this.timeouts.length;i++){
clearTimeout(this.timeouts[i]);
}
}
};
});
rabbit.data.discussionStore={writeAccess:false,name:"discussion",objects:{},init:function(){
},createDiscussion:function(_87b,_87c,x,y,data){
var url=rabbit.communication.manager.getUrl("createDiscussion",{layerId:_87b});
data=data||{};
data=_.defaults(data,{title:_87c,x:x,y:y,pageX:x,pageY:y,referenceId:rabbit.facade.getCurrentPageId(),pageId:rabbit.facade.getCurrentPageId(),layerContainerId:rabbit.facade.getCurrentPageId()});
return rabbit.data.discussionStore.callAjax(url,data);
},deleteDiscussion:function(_87d){
delete this.objects[_87d.data.id];
var url=rabbit.communication.manager.getUrl("deleteDiscussion",{layerId:_87d.data.layerId});
return this.callAjax(url,{discussion:_87d.data.id});
},flush:function(){
this.objects={};
rabbit.event.manager.raiseEvent(rabbit.events.discussionStoreChanged);
},getFromLayer:function(_87e){
var url=rabbit.communication.manager.getUrl("getDiscussions",{layerId:_87e});
return rabbit.data.discussionStore.callAjax(url);
},callAjax:function(url,data){
var ajax=rabbit.communication.manager.post(url,"json",data);
ajax.done(function(data){
for(var id in data.discussions){
var _87f=this.objects[id];
if(_87f){
_87f.setData(data.discussions[id]);
}else{
_87f=new rabbit.data.Discussion();
_87f.setData(data.discussions[id]);
this.objects[id]=_87f;
}
}
this.writeAccess=data.writeAccess;
rabbit.event.manager.raiseEvent(rabbit.events.discussionStoreChanged);
setTimeout(function(){
if(data.newdiscussion){
rabbit.event.manager.raiseEvent(rabbit.events.discussionStoreAdded,this.objects[data.newdiscussion]);
}
}.bind(this),500);
}.bind(this));
return ajax;
},getById:function(id){
return _.find(rabbit.data.discussionStore.objects,function(_880){
return _880.data.id===id;
});
}};
rabbit.data.Discussion=rabbit.util.Class(rabbit.data.Base,function(sup){
this.init=function(){
sup.init.apply(this);
this.data.title="";
this.data.entries=[];
this.data.status="";
};
this.move=function(x,y,_881,_882,_883,_884,_885,_886){
this.data.x=x;
this.data.y=y;
this.data.pageX=_881;
this.data.pageY=_882;
this.data.referenceId=_883;
this.data.pageId=_884;
this.data.layerId=_885;
this.data.layerContainerId=_886;
var url=rabbit.communication.manager.getUrl("moveDiscussion",{layerId:this.data.layerId});
return rabbit.data.discussionStore.callAjax(url,{discussion:this.data.id,x:rabbit.facade.precisionRound(x,2),y:rabbit.facade.precisionRound(y,2),pageX:rabbit.facade.precisionRound(_881,2),pageY:rabbit.facade.precisionRound(_882,2),referenceId:_883,pageId:_884,layerId:_885,layerContainerId:_886});
};
this.rename=function(_887){
if(this.data.title===_887){
return;
}
var _888=this.data.title;
this.data.title=_887;
var url=rabbit.communication.manager.getUrl("renameDiscussion",{layerId:this.data.layerId});
var ajax=rabbit.data.discussionStore.callAjax(url,{discussion:this.data.id,title:this.data.title});
return ajax;
};
this.addMeta=function(meta){
var url=rabbit.communication.manager.getUrl("postEntryDiscussion",{layerId:this.data.layerId});
return rabbit.data.discussionStore.callAjax(url,{discussion:this.data.id,meta:JSON.stringify(meta)});
};
this.addEntry=function(text){
var url=rabbit.communication.manager.getUrl("postEntryDiscussion",{layerId:this.data.layerId});
this.entrySend=true;
return rabbit.data.discussionStore.callAjax(url,{discussion:this.data.id,text:text});
};
this.setState=function(_889){
var url=rabbit.communication.manager.getUrl("setStateDiscussion",{layerId:this.data.layerId});
this.entrySend=true;
return rabbit.data.discussionStore.callAjax(url,{discussion:this.data.id,state:_889});
};
this.hasEntry=function(){
return this.entrySend||this.data.entries.length;
};
});
if(typeof console.debug==="undefined"){
console.warn=console.log;
console.debug=console.log;
}else{
if(rabbit.logLevel==="error"){
console.warn=function(){
};
console.log=function(){
};
console.debug=function(){
};
}else{
if(rabbit.logLevel==="warn"){
console.log=function(){
};
console.debug=function(){
};
}else{
if(rabbit.logLevel==="log"){
console.debug=function(){
};
}
}
}
}
$.ajaxSetup({scriptCharset:"utf-8"});
rabbit.plugins.background=function(){
var _88a=rabbit.facade;
return {init:function init(){
},adjustBackgroundImage:function adjustBackgroundImage(_88b){
var _88c=document.getElementById("borderDiv");
_88c.style.width=_88b.data.width+"px";
_88c.style.height=_88b.data.height+"px";
var _88d=document.getElementById("repositorybackground");
_88d.setAttribute("width",_88b.data.width);
_88d.setAttribute("height",_88b.data.height);
_88d.setAttribute("style","width:"+_88b.data.width+"px;height:"+_88b.data.height+"px;");
this._replaceBackgroundImage(_88b);
},_replaceBackgroundImage:function _replaceBackgroundImage(_88e){
var _88f,_890;
if(!_88a.vml){
_88f=document.getElementById("repositorybackground");
_890=_88f.getElementsByTagNameNS("http://www.w3.org/2000/svg","image")[0];
_890.setAttribute("width",_88e.data.width);
_890.setAttribute("height",_88e.data.height);
if(_88e.data.image!==""){
_890.setAttribute("display","inherit");
_890.setAttributeNS("http://www.w3.org/1999/xlink","href",_88e.data.image);
}else{
_890.setAttribute("display","none");
_890.removeAttributeNS("http://www.w3.org/1999/xlink","href");
}
}else{
_88f=document.getElementById("repositorybackground");
_890=document.createElement("img");
_890.style.width="";
_890.style.height="";
_890.setAttribute("src",_88e.data.image.replace(/_(\d)+\Z/,""));
_88f.replaceChild(_890,_88f.firstChild);
if(_88e.data.image===""){
_890.style.display="none";
}else{
_890.style.display="inline";
this._adjustBackgroundImgSize(_88e.data.width,_88e.data.height);
}
}
},_adjustBackgroundImgSize:function _adjustBackgroundImgSize(_891,_892){
if(!document.images[0].complete){
window.setTimeout("rabbit.plugins.background._adjustBackgroundImgSize("+_891+", "+_892+");",100);
return;
}
var _893=document.images[0].width;
var _894=document.images[0].height;
if(_893/_894>_891/_892){
document.images[0].width=_891;
document.images[0].height=_894*_891/_893;
}else{
document.images[0].width=_893*_892/_894;
document.images[0].height=_892;
}
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.background);
rabbit.plugins.gps=function(){
var _895=rabbit.facade;
var _896={};
var _897=[];
var _898={nyc:{latitude:40.714353,longitude:-74.005973},paris:{latitude:48.856614,longitude:2.352222},pidoco:{latitude:52.509561,longitude:13.451579},warschauer60:{latitude:52.509754,longitude:13.451715},alexanderplatz:{latitude:52.521832,longitude:13.413168}};
return {trackPositionWithJavaScript:true,trackPosition:false,init:function init(){
this.startTrackPositon();
_895.registerOnEvent("positionChanged",this.positionChanged,this);
_895.registerAction("gps",{availableOnDesktop:false,init:function(){
rabbit.plugins.gps.trackPosition=true;
},render:function(_899){
if(_899.trigger==="both"){
return t("interaction.action.gps.userDescription.both");
}else{
if(_899.trigger==="enter"){
return t("interaction.action.gps.userDescription.enter");
}else{
if(_899.trigger==="leave"){
return t("interaction.action.gps.userDescription.leave");
}
}
}
},defineEvent:function(_89a){
var area=JSON.parse(_89a.data.action.area);
rabbit.plugins.gps.registerMoveInOutZone(area.latitude,area.longitude,area.distance,_89a.data.action.trigger,function(e){
rabbit.interaction.manager.raiseInteraction(_89a,e);
});
}});
},startTrackPositon:function(){
var _89b=null;
var _89c=5000;
if(navigator.geolocation){
var _89d=function(){
if(rabbit.plugins.gps.trackPosition){
if(rabbit.plugins.gps.trackPositionWithJavaScript){
navigator.geolocation.getCurrentPosition(function(_89e){
rabbit.plugins.gps.positionChanged(_89e.coords);
_89b=setInterval(_89d,_89c);
},function(){
rabbit.util.submitError("ERROR GPS!");
},{maximumAge:_89c,enableHighAccuracy:true,timeout:10000});
}
clearInterval(_89b);
}
};
_89b=setInterval(_89d,_89c);
}
},moveToDummyPosition:function(name){
if(!_.has(_898,name)){
throw "Dummy position "+name+" not found.";
}
this.positionChanged({latitude:_898[name].latitude,longitude:_898[name].longitude});
},registerMoveInOutZone:function(_89f,_8a0,_8a1,_8a2,_8a3){
_897.push({latitude:_89f,longitude:_8a0,distance:_8a1,callback:_8a3,trigger:_8a2,wasInArea:false});
},positionChanged:function(_8a4){
for(var i=0;i<_897.length;i++){
var area=_897[i];
var _8a5=this.isPositionInArea(_8a4,area);
if(_8a5&&!area.wasInArea&&area.trigger==="enter"||!_8a5&&area.wasInArea&&area.trigger==="leave"||_8a5!==area.wasInArea&&area.trigger==="both"){
area.callback();
}
area.wasInArea=_8a5;
}
},isPositionInArea:function(_8a6,area){
return this.calculateDistance(_8a6.latitude,_8a6.longitude,area.latitude,area.longitude)<area.distance;
},calculateDistance:function(lat1,lon1,lat2,lon2){
var _8a7=function(deg){
return deg*(Math.PI/180);
};
var R=6371;
var dLat=_8a7(lat2-lat1);
var dLon=_8a7(lon2-lon1);
var a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(_8a7(lat1))*Math.cos(_8a7(lat2))*Math.sin(dLon/2)*Math.sin(dLon/2);
var c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
var d=R*c;
return d*1000;
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.gps);
rabbit.plugins.keypress=function(){
var _8a8=rabbit.facade;
return {init:function(){
_8a8.registerAction("keypress",{makeableOnDesktop:true,render:function(_8a9){
return t("interaction.action.keypress.userDescription");
},defineEvent:function(_8aa){
var _8ab=_8aa.data.action.sequence;
if(_8ab){
Mousetrap.bind(_8ab,function(){
rabbit.interaction.manager.raiseInteraction(_8aa,{});
});
}
}});
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.keypress);
rabbit.plugins.sound=function(){
var _8ac=rabbit.facade;
return {audiofiles:{},audios:{},init:function(){
_8ac.registerReaction("sound",{init:function(_8ad,_8ae){
if(!window.Audio){
return;
}
var id=_8ae.soundUploader;
if(rabbit.result&&rabbit.result.manager.isExport){
url=rabbit.communication.manager.getUrl("mp3Export",{audioId:id});
}else{
url=rabbit.communication.manager.getUrl("mp3",{prototypeId:rabbit.result.manager.currentPrototypeId,audioId:id});
}
rabbit.plugins.sound.audiofiles[id]=new Audio(url);
},callback:function(_8af,_8b0,_8b1){
var _8b2=rabbit.plugins.sound.audiofiles[_8b1.soundUploader];
if(!_8b2){
return;
}
_8b2.play();
if(_8b1.duration!==""){
setTimeout(function(){
_8b2.pause();
_8b2.currentTime=0;
},_8b1.duration);
}
}});
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.sound);
rabbit.plugins.systemAlert=function(){
var _8b3=rabbit.facade;
return {init:function(){
_8b3.registerReaction("systemAlert",{callback:function(_8b4,_8b5,_8b6){
this.alert(_8b6.title,_8b6.text,_8b6.buttonName);
}.bind(this)});
},alert:function(_8b7,text,_8b8){
if(_8b3.runningInApp()){
rabbit.facade.mobile.trigger("pidoco:systemAlert",{title:_8b7,text:text,buttonName:_8b8});
}else{
alert(text);
}
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.systemAlert);
rabbit.plugins.flip=function(){
var _8b9=rabbit.facade;
return {init:function(){
_8b9.registerAction("flip",{makeableOnDesktop:false,render:function(_8ba){
return t("interaction.action.flip.userDescription");
},defineEvent:function(_8bb){
new Fliptiltshake("flip",function(){
rabbit.interaction.manager.raiseInteraction(_8bb,{});
});
Fliptiltshake.start();
}});
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.flip);
rabbit.plugins.tilt=function(){
var _8bc=rabbit.facade;
return {paused:false,init:function(){
_8bc.registerAction("tilt",{makeableOnDesktop:false,render:function(_8bd){
return t("interaction.action.tilt.userDescription");
},defineEvent:function(_8be){
new Fliptiltshake("tilt",{rotation:_8be.data.action.rotation,direction:(_8be.data.action.direction==="both")?null:_8be.data.action.direction,angle:_8be.data.action.angle,callback:function(){
if(rabbit.plugins.tilt.paused){
return;
}
var _8bf=rabbit.interaction.manager.raiseInteraction(_8be,{});
if(_8bf){
rabbit.plugins.tilt.paused=true;
setTimeout(function(){
rabbit.plugins.tilt.paused=false;
},500);
}
}});
Fliptiltshake.start();
}});
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.tilt);
rabbit.plugins.shake=function(){
var _8c0=rabbit.facade;
return {init:function(){
_8c0.registerAction("shake",{makeableOnDesktop:false,render:function(_8c1){
return t("interaction.action.shake.userDescription");
},defineEvent:function(_8c2){
var _8c3=(_8c0.isIOS)?_8c2.data.action.intensity:_8c2.data.action.intensity*10;
new Fliptiltshake("shake",{threshold:_8c3,durationMin:_8c2.data.action.duration,callback:function(){
rabbit.interaction.manager.raiseInteraction(_8c2,{});
}});
Fliptiltshake.start();
}});
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.shake);
rabbit.plugins.orientation=function(){
var _8c4=rabbit.facade;
var _8c5=null;
return {trackPositionWithJavaScript:true,trackPosition:false,init:function(){
rabbit.facade.mobile.bind("pidoco:orientationchange",function(e){
rabbit.plugins.orientation.orientationChanged(e.data.orientation);
});
window.addEventListener("orientationchange",function(){
rabbit.plugins.orientation.orientationChanged(window.orientation);
});
_8c4.registerAction("orientation",{makeableOnDesktop:false,render:function(_8c6){
var _8c7=_8c6.data.action;
if(_8c7.direction==="portrait"){
return t("interaction.action.orientation.userDescription.portrait");
}else{
return t("interaction.action.orientation.userDescription.landscape");
}
},defineEvent:function(_8c8){
_8c4.registerOnEvent("orientationChanged",function(_8c9){
if(_8c8.data.action.direction==_8c9){
rabbit.interaction.manager.raiseInteraction(_8c8,{});
}
},this);
}});
},orientationChanged:function(_8ca){
var _8cb=(_8ca===90||_8ca===-90)?"landscape":"portrait";
if(_8c5!=_8cb){
_8c5=_8cb;
_8c4.raiseEvent("orientationChanged",_8cb);
}
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.orientation);
rabbit.plugins.mobileInteractionTrigger={groupTopOffset:30,template:"<div class=\"trigger-container\">"+"<div class=\"trigger-wrapper\">"+"</div>"+"</div>",interactions:{},triggerGroups:{},init:function(){
if(rabbit.facade.runningInApp()){
return;
}
this.container=$(this.template).appendTo(".p-Preview-prototype");
this.wrapper=this.container.find(".trigger-wrapper");
rabbit.facade.registerOnEvent(rabbit.events.newInteractionRegistered,this.newInteractionRegistered,this);
rabbit.facade.registerOnEvent(rabbit.events.showLayer,this.showLayerListener,this);
rabbit.facade.registerOnEvent(rabbit.events.hideLayer,this.hideLayerListener,this);
rabbit.facade.registerOnEvent(rabbit.events.frameChanged,this.frameChanged,this);
$(".border-wrapper").on("scroll",this.recalculateTriggerPositions.bind(this));
},frameChanged:function(_8cc,_8cd){
var _8ce=0,_8cf=0;
if(rabbit.facade.isFrameDisplayed){
_8ce=rabbit.common.frames[_8cc][_8cd].innerWidth;
_8cf=rabbit.common.frames[_8cc][_8cd].innerHeight;
}
this.container.css({width:_8ce,height:_8cf});
},newInteractionRegistered:function(_8d0){
var _8d1=_8d0.data.action;
var _8d2=typeof rabbit.interaction.manager.actions[_8d1.type].makeableOnDesktop==="function"?rabbit.interaction.manager.actions[_8d1.type].makeableOnDesktop(_8d1):rabbit.interaction.manager.actions[_8d1.type].makeableOnDesktop;
if(_8d2){
return;
}
if(this.interactions[_8d0.data.uniqueId]){
return;
}
var _8d3=_8d0.data.stencilId;
var _8d4=document.getElementById(_8d3);
if($(_8d4).parents(".transition-wrapper:first").length){
return;
}
var _8d5=$(_8d4).closest(".mobile-interaction-potential-trigger");
var _8d6=_8d5.attr("id");
var _8d7=$(_8d5).position();
var _8d8=true;
if($(_8d4).hasClass("layer")){
_8d8=false;
}
var _8d9=this.triggerGroups[_8d6];
if(!_8d9){
_8d9=$("<div class=\"mobile-interactions-trigger-group-"+_8d6+" mobile-interactions-trigger-group\" data-trigger-id=\""+_8d6+"\"></div>");
this.triggerGroups[_8d6]=_8d9;
$(_8d5).mouseenter(function(e){
var _8da=_8d3!==$(e.relatedTarget).closest(".mobile-interactions-trigger-group").data("related-stencil");
if(_8da){
this.displayInteractions(_8d9);
}
return false;
}.bind(this)).mouseleave(function(e){
var _8db=!$(e.relatedTarget).closest(".mobile-interactions-trigger-group").length;
if(_8db){
this.hideAllInteractions();
}else{
$(e.relatedTarget).closest(".mobile-interactions-trigger-group").mouseleave(function(e){
var _8dc=_8d3!==$(e.relatedTarget).closest(".stencil").attr("id");
if(_8dc){
this.hideAllInteractions();
return false;
}
}.bind(this));
}
return false;
}.bind(this));
_8d9.data("fromStencil",_8d8);
if(_8d8){
$(_8d4).append(_8d9);
}else{
var _8dd=$(_8d4).parent()&&$(_8d4).parent().parent()&&$(_8d4).parent().parent().parent()&&$(_8d4).parent().parent().parent().hasClass("renderIntern");
if(_8dd){
$(_8d4).parent().parent().parent().parent().append(_8d9);
}else{
this.wrapper.append(_8d9);
}
}
_8d9.css({left:0,top:-1*this.groupTopOffset/rabbit.facade.getScaleFactor()});
}
var _8de=$("<div class=\"active interaction-trigger interaction-trigger-"+_8d0.data.uniqueId+" interaction-trigger-"+_8d1.type+"\" title=\""+t("interaction-trigger-"+_8d0.data.action.type+"-tooltip")+"\">"+t("trigger-label-"+_8d1.type)+"</div>");
if(!_8d8){
_8de.addClass("interaction-trigger-layer-"+_8d3.replace("-layer",""));
}
_8de.click(function(){
if(_8d0.data.action.type==="swipe"||_8d0.data.action.type==="click"){
rabbit.interaction.manager.ignoreImminentClickAction();
}
rabbit.facade.raiseInteraction(_8d0);
this.hideAllInteractions();
}.bind(this));
_8d9.append(_8de);
this.interactions[_8d0.data.uniqueId]=_8d0;
},hideAllInteractions:function(){
this.wrapper.empty();
this.clonedTriggerGroup=null;
},displayInteractions:function(_8df){
this.clonedTriggerGroup=$(_8df).clone(true);
this.clonedTriggerGroup.appendTo(this.wrapper);
this.clonedTriggerGroup.addClass("visible");
this.clonedTriggerGroup.data("related-stencil",$(_8df).parent()[0].id);
this.recalculateTriggerPositions();
},recalculateTriggerPositions:function(){
this.wrapper.children().each(function(_8e0,_8e1){
var _8e2=$("#"+$(_8e1).data("related-stencil")).offset();
var _8e3=$(this.wrapper).offset();
_8e2.left-=_8e3.left;
_8e2.top-=_8e3.top;
var _8e4=35;
if(_8e2.top<0){
_8e4=-1*(_8e2.top-(1*this.groupTopOffset));
}
$(_8e1).css({position:"relative",left:_8e2.left,top:_8e2.top-(1*this.groupTopOffset),height:_8e4});
}.bind(this));
},showLayerListener:function(data){
if(data.repositoryId==="repository"){
$(".interaction-trigger-layer-"+data.repositoryId+data.layerId).addClass("active");
}
},hideLayerListener:function(data){
if(data.repositoryId==="repository"){
$(".interaction-trigger-layer-"+data.repositoryId+data.layerId).removeClass("active");
}
}};
rabbit.facade.registerPlugin(rabbit.plugins.mobileInteractionTrigger);
rabbit.plugins.toolbar={template:"<div class=\"p-PreviewToolbar-main\">"+"<div class=\"p-CuteButtons p-CuteButtons--white p-CuteButtons--m\">"+"<div class=\"p-CuteButtons-group p-CuteButtons-group--rounded p--darkBkg\" data-p-fullscreen>"+"<a title=\"<%= t('toolbar.exitFullscreen') %>\" class=\"exit-fullscreen-btn p-CuteButton p-Button p-Button--sparse p-Button--iconOnly\" href=\"#\"><svg style=\"margin-top: 2px;\" class=\"p-Button-icon p-Icon p-Icon--xs\"><use xlink:href=\"#icon-close\"/></svg></a>"+"</div>"+"<div class=\"p-CuteButtons-group "+(rabbit.prototypeType==="APPCOOKERWEB"?"is-hidden":"")+"\" data-p-fullscreen-hidden>"+"<a title=\"<%= t('toolbar.edit') %>\" class=\"edit-btn p-CuteButton p-Button p-Button--iconOnly\" href=\"#\"><svg class=\"p-Button-icon p-Icon p-Icon--m\"><use xlink:href=\"#icon-edit\"/></svg></a>"+"</div>"+"<div class=\"p-CuteButtons-group\" data-p-fullscreen-hidden>"+"<a title=\"<%= t('toolbar.showFrame') %>\" class=\"show-frame-btn p-CuteButton p-Button p-Button--iconOnly is-first\" href=\"#\"><svg class=\"p-Button-icon p-Icon p-Icon--m\"><use xlink:href=\"#icon-mobile\"/></svg></a>"+"<a title=\"<%= t('toolbar.hideFrame') %>\" class=\"hide-frame-btn p-CuteButton p-CuteButton--strikeThrough p-Button p-Button--iconOnly is-first\" href=\"#\"><svg class=\"p-Button-icon p-Icon p-Icon--m\"><use xlink:href=\"#icon-mobile\"/></svg></a>"+"<a title=\"<%= t('toolbar.sketched') %>\" class=\"sketched-btn p-CuteButton p-Button p-Button--iconOnly\" href=\"#\"><svg class=\"p-Button-icon p-Icon p-Icon--s\"><use xlink:href=\"#icon-sketched\"/></svg></a>"+"<a title=\"<%= t('toolbar.plain') %>\" class=\"plain-btn p-CuteButton p-Button p-Button--iconOnly\" href=\"#\"><svg class=\"p-Button-icon p-Icon p-Icon--s\"><use xlink:href=\"#icon-plain\"/></svg></a>"+"<a title=\"<%= t('toolbar.arial') %>\" class=\"sketched-arial-btn p-CuteButton p-Button p-Button--iconOnly\" href=\"#\"><svg class=\"p-Button-icon p-Icon p-Icon--s\"><use xlink:href=\"#icon-arial\"/></svg></a>"+"<a title=\"<%= t('toolbar.comicSans') %>\" class=\"sketched-comicsans-btn p-CuteButton p-Button p-Button--iconOnly\" href=\"#\"><svg class=\"p-Button-icon p-Icon p-Icon--s\"><use xlink:href=\"#icon-comic-sans\"/></svg></a>"+"<a title=\"<%= t('toolbar.originalSize') %>\" class=\"original-size-btn p-CuteButton p-Button p-Button--iconOnly\" href=\"#\"><svg class=\"p-Button-icon p-Icon p-Icon--s\"><use xlink:href=\"#icon-ratio\"/></svg></a>"+"<a title=\"<%= t('toolbar.fitScreen') %>\" class=\"fit-screen-btn p-CuteButton p-Button p-Button--iconOnly\" href=\"#\"><svg class=\"p-Button-icon p-Icon p-Icon--s\"><use xlink:href=\"#icon-maximize\"/></svg></a>"+"<a title=\"<%= t('toolbar.fullscreen') %>\" class=\"fullscreen-btn p-CuteButton p-Button p-Button--iconOnly\" href=\"#\"><svg class=\"p-Button-icon p-Icon p-Icon--s\"><use xlink:href=\"#icon-expand\"/></svg></a>"+"</div>"+"</div>"+"</div>"+"<div class=\"p-PreviewToolbar-footer\" data-p-fullscreen-hidden>"+"<div class=\"p-CuteButtons p-CuteButtons--white p-CuteButtons--m\">"+"<div class=\"p-CuteButtons-group p-CuteButtons-group--rounded\">"+"<a class=\"create-discussion p-CommentCreate p-CuteButton p-Button p-Button--iconOnly\" role=\"button\" href=\"#\" title=\"<%= t('result.discussion.tooltip-new-discussion') %>\">"+"<svg class=\"p-CommentCreate-icon p-Button-icon p-Icon\"><use xlink:href=\"#icon-color-comment-gray\"/></svg>"+"</a>"+"</div>"+"</div>"+"</div>",init:function(){
if(rabbit.facade.runningInApp()){
return;
}
this.toolbar=$($.trim(_.template(this.template)())).appendTo("[data-p-component=\"previewToolbar\"]");
rabbit.facade.registerOnEvent(rabbit.events.pageStoreLoaded,this.pageStoreLoaded,this);
rabbit.facade.registerOnEvent(rabbit.events.pageLoaded,this.pageLoaded,this);
rabbit.facade.registerOnEvent(rabbit.events.pluginInitialized,this.pluginInitialized,this);
if(rabbit.facade.getRole()!="EDITOR"){
this.toolbar.find(".edit-btn").addClass("is-hidden");
}
this.originalSizeButton=this.toolbar.find(".original-size-btn");
this.fitScreenButton=this.toolbar.find(".fit-screen-btn");
this.showFrameButton=this.toolbar.find(".show-frame-btn");
this.hideFrameButton=this.toolbar.find(".hide-frame-btn");
this.sketchedButton=this.toolbar.find(".sketched-btn");
this.plainButton=this.toolbar.find(".plain-btn");
this.sketchedArialButton=this.toolbar.find(".sketched-arial-btn");
this.sketchedComicSansButton=this.toolbar.find(".sketched-comicsans-btn");
this.fullScreen=this.toolbar.find(".fullscreen-btn");
this.exitFullscreen=this.toolbar.find(".exit-fullscreen-btn");
},hideFrameButtons:function(){
if(rabbit.facade.isApi()){
return;
}
this.hideFrameButton.addClass("is-hidden");
this.showFrameButton.addClass("is-hidden");
},showFrameButtons:function(){
if(rabbit.facade.isApi()){
return;
}
if(rabbit.plugins.frame.getHidePageFrame()){
this.hideFrameButton.addClass("is-hidden");
this.showFrameButton.removeClass("is-hidden");
}else{
this.hideFrameButton.removeClass("is-hidden");
this.showFrameButton.addClass("is-hidden");
}
},pluginInitialized:function(){
if(rabbit.facade.isApi()){
return;
}
this.showFrameButtons();
if(rabbit.plugins.frame.getFitScreen()){
this.originalSizeButton.removeClass("is-hidden");
this.fitScreenButton.addClass("is-hidden");
}else{
this.originalSizeButton.addClass("is-hidden");
this.fitScreenButton.removeClass("is-hidden");
}
this.originalSizeButton.click(function(){
this.originalSizeButton.addClass("is-hidden");
this.fitScreenButton.removeClass("is-hidden");
rabbit.plugins.frame.setOriginalSize();
return false;
}.bind(this));
this.fitScreenButton.click(function(){
this.originalSizeButton.removeClass("is-hidden");
this.fitScreenButton.addClass("is-hidden");
rabbit.plugins.frame.setFitScreen();
return false;
}.bind(this));
this.hideFrameButton.click(function(){
this.hideFrame();
return false;
}.bind(this));
this.showFrameButton.click(function(){
this.showFrame();
return false;
}.bind(this));
this.sketchedButton.mousedown(function(){
rabbit.facade.setUserPref("resultmode","sketchedArial");
});
this.plainButton.mousedown(function(){
rabbit.facade.setUserPref("resultmode","plain");
});
this.sketchedArialButton.mousedown(function(){
rabbit.facade.setUserPref("resultmode","sketchedArial");
});
this.sketchedComicSansButton.mousedown(function(){
rabbit.facade.setUserPref("resultmode","sketched");
});
this.fullScreen.mousedown(function(){
rabbit.plugins.fullscreen.activateFullscreen();
return false;
}.bind(this));
this.exitFullscreen.mousedown(function(){
rabbit.plugins.fullscreen.deactivateFullscreen();
return false;
}.bind(this));
},hideFrame:function(){
if(rabbit.facade.isApi()){
return;
}
this.hideFrameButton.addClass("is-hidden");
this.showFrameButton.removeClass("is-hidden");
rabbit.plugins.frame.hideFrame();
},showFrame:function(){
if(rabbit.facade.isApi()){
return;
}
this.hideFrameButton.removeClass("is-hidden");
this.showFrameButton.addClass("is-hidden");
rabbit.plugins.frame.showFrame();
},pageStoreLoaded:function(){
this.mode=document.getElementById("mode").innerHTML;
this.changeLinks(rabbit.result.manager.currentPageNr);
},pageLoaded:function(page,_8e5){
this.changeLinks(page.data.id);
},changeLinks:function(_8e6){
var _8e7=rabbit.communication.manager.buildEditUrl(rabbit.result.manager.currentPageNr);
var _8e8=rabbit.facade.getUrlPattern().replace("__page__",_8e6);
var _8e9=_8e8.replace(this.mode,"sketched").replace("?fontFamily=arial","");
var _8ea=_8e8.replace(this.mode,"sketchedArial");
var _8eb=_8e8.replace(this.mode,"plain").replace("?fontFamily=arial","");
this.toolbar.find(".edit-btn").attr("href",_8e7);
this.toolbar.find(".sketched-btn").attr("href",_8ea);
this.toolbar.find(".plain-btn").attr("href",_8eb);
this.toolbar.find(".sketched-arial-btn").attr("href",_8ea);
this.toolbar.find(".sketched-comicsans-btn").attr("href",_8e9);
}};
rabbit.facade.registerPlugin(rabbit.plugins.toolbar);
rabbit.plugins.overlay={shownOverlays:[],rectangles:{},overlayContainer:null,init:function(){
$("#borderDiv").append("<div class=\"overlay-background\"></div>");
rabbit.facade.registerReaction("showOverlay",{init:function(_8ec,_8ed){
this.prepareOverlay(_8ec.data.uniqueId,_8ed.target);
}.bind(this),callback:function(_8ee,_8ef,_8f0){
this.showOverlay(_8ef.data.uniqueId,_8f0.target);
}.bind(this)});
rabbit.facade.registerReaction("hideOverlay",{callback:function(_8f1,_8f2,_8f3){
this.hideOverlay();
}.bind(this)});
this.overlayContainer=$("body");
},getOrCreateOverlayRepository:function(_8f4,page){
var _8f5=this.overlayContainer.find("> div[data-page-id=\""+page.data.id+"\"]");
if(!_8f5.length){
_8f5=$("<div></div>");
_8f5.addClass("overlay").addClass("repository").attr("data-original-layer-id",page.data.id).attr("id","overlay-"+_8f4).attr("data-page-id",page.data.id).attr("data-apply-scale-factor","").appendTo(this.overlayContainer).css({width:page.data.width+"px",height:page.data.height+"px"}).data("has-rectangle",false);
}
return _8f5;
},prepareOverlay:function(_8f6,_8f7){
var ajax=rabbit.facade.loadLayer(_8f7);
ajax.done(function(){
var page=rabbit.data.pageStore.objects[_8f7];
if(page){
var _8f8=this.getOrCreateOverlayRepository(_8f6,page);
this.loadRectangle(page.data.width,page.data.height);
rabbit.ui.manager.createWrappers(_8f8,_8f7,true);
}
}.bind(this));
},loadRectangle:function(_8f9,_8fa){
if(this.hasRectangle(_8f9,_8fa)){
return;
}
if(rabbit.result.manager.isExport){
var _8fb=(rabbit.browser==="ie")?"-ie":"";
url=rabbit.communication.manager.getUrl("rectangleExport",{height:_8fa,width:_8f9,mode:rabbit.util.getMode()});
ajax=rabbit.communication.manager.get(url,"jsonp",{},{crossDomain:rabbit.result.manager.isExport});
}else{
url=rabbit.communication.manager.getUrl("rectangle",{prototypeId:rabbit.result.manager.currentPrototypeId,mode:rabbit.facade.getMode()});
ajax=rabbit.communication.manager.get(url,"html",{height:_8fa,width:_8f9});
ajax.success(function(html){
var _8fc=$(html).children().first();
this.setRectangle(_8f9,_8fa,_8fc);
}.bind(this));
}
},setRectangle:function(_8fd,_8fe,html){
this.rectangles[_8fd+"x"+_8fe]=html;
},getRectangle:function(_8ff,_900){
return $(this.rectangles[_8ff+"x"+_900]).clone();
},hasRectangle:function(_901,_902){
return typeof this.rectangles[_901+"x"+_902]!=="undefined";
},showOverlayBackground:function(){
$(".overlay-background").show();
},hideOverlayBackground:function(){
$(".overlay-background").hide();
},showOverlay:function(_903,_904){
var id="overlay-"+_903;
var page=rabbit.data.pageStore.objects[_904];
var _905=rabbit.facade.getCurrentPage();
var _906=this.getOrCreateOverlayRepository(_903,page);
if(page){
var _907=page.data.width;
var _908=page.data.height;
if(!_906.data("has-rectangle")){
_906.append(this.getRectangle(_907,_908));
_906.data("has-rectangle",true);
}
var _909=$(document).height()>$(window).height();
if(rabbit.facade.isFrameDisplayed&&_909){
var _90a=$(".border-wrapper")[0].getBoundingClientRect();
var top=_90a.top+_90a.height/2-parseInt(_908)/2+window.scrollY;
var left=_90a.left+_90a.width/2-parseInt(_907)/2+window.scrollX;
}else{
top=$(window).height()/2+window.scrollY-parseInt(_908)/2;
left=$(window).width()/2+window.scrollX-parseInt(_907)/2;
}
_906.appendTo(this.overlayContainer).show().css({top:top,left:left,transform:"scale("+rabbit.facade.getScaleFactor()+", "+rabbit.facade.getScaleFactor()+")"});
rabbit.ui.manager.showPage(_906,_904);
this.showOverlayBackground();
this.shownOverlays.push(_906);
}else{
}
},hideOverlay:function(){
var _90b=this.shownOverlays.pop();
_90b.hide();
this.hideOverlayBackground();
}};
rabbit.facade.registerPlugin(rabbit.plugins.overlay);
rabbit.plugins.scrollTo=function(){
var _90c=rabbit.facade;
return {init:function(){
_90c.registerReaction("scrollTo",{callback:function(_90d,_90e,_90f){
this.scrollTo(_90f.position,_90f.duration);
}.bind(this)});
},scrollTo:function(_910,_911){
var _912=$("html, body");
var _913=$(".border-wrapper");
if(rabbit.facade.isFrameDisplayed&&_913[0].scrollHeight>_913.height()){
_912=_913;
}
if(_910==="bottom"){
_912.animate({scrollTop:_912[0].scrollHeight},parseInt(_911));
}else{
_912.animate({scrollTop:0},parseInt(_911));
}
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.scrollTo);
rabbit.plugins.startDialer={shownOverlays:[],rectangles:{},init:function(){
rabbit.facade.registerReaction("startDialer",{callback:function(_914,_915,_916){
this.startDialer(_916.phoneNumber);
}.bind(this)});
},startDialer:function(_917){
window.location.href="tel:"+_917;
}};
rabbit.facade.registerPlugin(rabbit.plugins.startDialer);
rabbit.plugins.gestureHighlight=function(){
return {init:function(){
},touchListener:function(e){
this.emptyTouches();
for(var i=0;i<e.targetTouches.length;i++){
var _918=e.targetTouches[i];
var _919=this.makeCircle(_918.pageX-this.offset.left,_918.pageY-this.offset.top);
this.touchViewer[0].appendChild(_919);
}
e.preventDefault();
},touchEndListener:function(){
setTimeout(function(){
var _91a=this.touchViewer.find("div");
_91a.each(function(){
if(!$(this).hasClass("touch-success")){
$(this).addClass("touch-fail");
}
});
setTimeout(function(){
_91a.fadeOut();
},500);
}.bind(this),300);
},touchSuccess:function(){
var _91b=this.touchViewer.find("div");
_91b.each(function(){
$(this).removeClass("touch-fail");
$(this).addClass("touch-success");
});
setTimeout(function(){
_91b.fadeOut();
},500);
},makeCircle:function(cx,cy){
var el=document.createElement("div");
el.setAttribute("class","touch");
el.style.left=cx+"px";
el.style.top=cy+"px";
return el;
},emptyTouches:function(){
this.touchViewer[0].innerHTML="";
},markHighlightTouchesAsSuccessful:function(){
var _91c=document.getElementsByClassName("touch");
for(var i=0;i<_91c.length;i++){
_91c[i].setAttribute("class",_91c[i].getAttribute("class")+" touch-success");
}
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.gestureHighlight);
rabbit.plugins.hold={init:function(){
rabbit.facade.registerAction("hold",{makeableOnDesktop:true,render:function(_91d){
return t("interaction.action.hold.userDescription");
},defineEvent:function(_91e){
var _91f=Hammer(document.getElementById(_91e.data.stencilId),{hold_timeout:_91e.data.action.timeout});
_91f.on("hold",function(e){
rabbit.interaction.manager.raiseInteraction(_91e,{});
rabbit.interaction.manager.ignoreImminentClickAction(false);
});
_91f.on("release",function(){
setTimeout(function(){
rabbit.interaction.manager.ignoreClick=false;
},500);
});
}});
}};
rabbit.facade.registerPlugin(rabbit.plugins.hold);
rabbit.plugins.valueChanged={listenedGroups:{},init:function(){
rabbit.facade.registerAction("booleanValueChanged",{makeableOnDesktop:true,render:function(_920){
return t("interaction.action.booleanValueChanged.userDescription");
},defineEvent:function(_921){
var _922=_921.data.stencilId;
var _923=$("#"+_922);
if(_923.hasClass("radiobutton")){
var _924=_923.find("input:first").attr("name");
if(!_.has(rabbit.plugins.valueChanged.listenedGroups,_924)){
rabbit.plugins.valueChanged.listenedGroups[_924]=[];
$("input[name=\""+_924+"\"]").change(function(e){
var _925=$(e.target).val();
var _926=$(e.target).data("old-selected-radiobutton-id");
for(var i=0;i<rabbit.plugins.valueChanged.listenedGroups[_924].length;i++){
var _927=rabbit.plugins.valueChanged.listenedGroups[_924][i];
var _928=_927.data.stencilId;
var _929=_927.data.action.selected;
if(_925===_928&&_929==="yes"||_926===_928&&_929==="no"||(_925===_928||_926===_928)&&_929==="toggle"){
rabbit.interaction.manager.raiseInteraction(_927,rabbit.interaction.manager.serializeEvent(e));
}
}
$("input[name=\""+_924+"\"]").data("old-selected-radiobutton-id",_925);
});
}
rabbit.plugins.valueChanged.listenedGroups[_924].push(_921);
}else{
if(_923.hasClass("checkbox")){
$("#"+_921.data.stencilId+" input:first").change(function(e){
if($(e.target).is(":checked")===(_921.data.action.selected==="yes")||_921.data.action.selected==="toggle"){
rabbit.interaction.manager.raiseInteraction(_921,rabbit.interaction.manager.serializeEvent(e));
}
});
}else{
if(_923.hasClass("iphoneSwitch")){
var _92a=function(id){
if(_921.data.stencilId===id){
rabbit.interaction.manager.raiseInteraction(_921);
}
};
if(_921.data.action.selected==="yes"||_921.data.action.selected==="toggle"){
rabbit.facade.registerOnEvent(rabbit.events.switchOnSwitch,_92a,this);
}
if(_921.data.action.selected==="no"||_921.data.action.selected==="toggle"){
rabbit.facade.registerOnEvent(rabbit.events.switchOffSwitch,_92a,this);
}
}
}
}
}});
rabbit.facade.registerAction("stringValueChanged",{makeableOnDesktop:true,render:function(_92b){
return t("interaction.action.stringValueChanged.userDescription");
},defineEvent:function(_92c){
$("#"+_92c.data.stencilId).change(function(e){
if(e.target.value===_92c.data.action.value){
rabbit.interaction.manager.raiseInteraction(_92c,rabbit.interaction.manager.serializeEvent(e));
}
});
}});
}};
rabbit.facade.registerPlugin(rabbit.plugins.valueChanged);
rabbit.plugins.footnote={name:"export",detailFootnotes:{},discussionFootnotes:{},counterDetailFootnotes:0,counterDiscussionFootnotes:0,placedMarkers:[],placedMarkersInPageCoordinateSystem:[],markerSize:20,init:function(){
rabbit.facade.registerOnEvent(rabbit.events.newInteractionRegistered,function(_92d){
var _92e=document.getElementById(_92d.getData().stencilId);
var _92f=_92e.hasAttribute("data-stencil-id");
var _930=_92e.hasAttribute("data-layer-id");
var id=_92d.getData().stencilId;
if(!_92f&&!_930&&!this.detailFootnotes[id]){
this.detailFootnotes[id]=_.size(this.detailFootnotes)+1;
}
},this);
rabbit.facade.registerOnEvent(rabbit.events.pageReady,function(){
$(".has-footnote").each(function(_931,_932){
var _933=_932.getAttribute("data-stencil-id");
if(!_933){
_933=_932.getAttribute("data-layer-id");
}
if(!this.detailFootnotes[_933]){
this.detailFootnotes[_933]=_.size(this.detailFootnotes)+1;
}
}.bind(this));
},this);
},showAllFootnotes:function(){
this.hideFootnotes();
this.showDiscussionFootnotes();
this.showDetailFootnotes();
},showFootnote:function(_934,x,y,type,_935,_936,_937,_938,text,_939){
var _93a=_934.offset();
var _93b=x;
var _93c=y;
if(!_937){
_93b-=_93a.left;
_93c-=_93a.top;
}
var _93d,_93e;
if(!_936){
if(type=="detail"){
_93d=(this.counterDetailFootnotes++)+1;
}else{
if(type=="discussion"){
_93d=this.getDiscussionLetters(this.counterDiscussionFootnotes++);
}
}
_93e=$("<div class=\"footnote-marker footnote-marker-"+type+"\">"+_93d+"</div>").css({left:_93b,top:_93c});
_934.append(_93e);
}
this.placedMarkers.push({stencilOrLayerId:_935,stencilUniqueId:_934.attr("id"),type:type,index:_93d,x:x,y:y,outsideOfPage:_936,inStencilInteraction:_937,target:_938,text:text,footnoteId:_939,footnoteElement:_93e});
},getShownFootnoteIndexes:function(type){
var _93f={};
for(var i=0;i<this.placedMarkers.length;i++){
var _940=this.placedMarkers[i];
if(!type||_940.type==type){
_93f[_940.index]={index:_940.index,stencilUniqueId:_940.stencilUniqueId,outsideOfPage:_940.outsideOfPage,inStencilInteraction:_940.inStencilInteraction,stencilOrLayerId:_940.stencilOrLayerId,target:_940.target,text:_940.text,footnoteId:_940.footnoteId};
}
}
return _93f;
},hideFootnotes:function(){
this.counterDetailFootnotes=0;
this.counterDiscussionFootnotes=0;
this.placedMarkers=[];
$(".footnote-marker, .footnote-marker-line").remove();
},showDetailFootnotes:function(_941){
for(var _942 in this.detailFootnotes){
var _943=false;
var _944=$("[data-stencil-id=\""+_942+"\"], .wrapper[data-layer-id=\""+_942+"\"][data-layer-id=\""+_941+"\"]");
var _945=null,text=null;
if(!_944.length){
_944=$("#"+_942);
_943=true;
_945=_944.attr("data-href");
text=_.clean(_944.text());
text=_.truncate(text,20);
_942=null;
}
for(var i=0;i<_944.length;i++){
var _946=$(_944.get(i));
if(!_946.closest(".wrapper[data-layer-id=\""+_941+"\"]").length){
continue;
}
var _947=_946.offset();
var _948=_946.width();
if(_943){
_948=_946.width()/2;
}
var x=_947.left+_948;
var y=_947.top-20;
var _949=this.findPosition(x,y,"x",1);
this.placedMarkersInPageCoordinateSystem.push({x:_949.x,y:_949.y});
if(_943){
var _94a=_946.position();
_949.x=_94a.left+_948+(x-_949.x);
_949.y=_94a.top-20+(y-_949.y);
}
this.showFootnote(_946,_949.x,_949.y,"detail",_942,_949.outsideOfPage,_943,_945,text);
}
}
this.sortFootenotes();
},sortFootenotes:function(){
this.placedMarkers=_.sortBy(this.placedMarkers,function(_94b){
return ($(_94b.footnoteElement).offset())?$(_94b.footnoteElement).offset().left:100000;
});
for(var i=0;i<this.placedMarkers.length;i++){
var _94c=this.placedMarkers[i].footnoteElement;
$(_94c).text(i+1);
this.placedMarkers[i].index=i+1;
}
},getShownDetailFootnotes:function(){
return this.getShownFootnoteIndexes("detail");
},getDiscussionLetters:function(_94d){
var v="abcdefghijklmnopqrstuvwxyz".split("");
var _94e="";
var nr=Math.floor(_94d/26);
var mod=_94d%26;
for(var j=1,jj=1;j<=nr;j=Math.pow(26,jj)+1,jj++){
_94e+=v[(nr-1)%26];
}
_94e+=v[mod];
return _94e;
},showDiscussionFootnotes:function(_94f){
var _950="abcdefghijklmopqrestuvwxyz".split("");
var _951=$("#repository").offset();
var _952=this.discussionFootnotes[_94f];
if(_.isArray(_952)){
for(var i=0;i<_952.length;i++){
var _953=_952[i];
var _954=_953.referenceId;
var _955=$(".wrapper-"+_94f+">.layer [data-stencil-id=\""+_954+"\"]");
if(_955.length===0){
_955=$("[data-page-id=\"page0001\"]");
}
for(var j=0;j<_955.length;j++){
var _956=$(_955.get(j));
var _957=_956.offset();
var x=_957.left+_953.x;
var y=_957.top+_953.y;
var _958=this.findPosition(x,y,"x",1);
this.placedMarkersInPageCoordinateSystem.push({x:_958.x,y:_958.y});
this.showFootnote(_956,_958.x,_958.y,"discussion",_953.id,_958.outsideOfPage,null,null,null,_953.id);
}
}
}
},getShownDiscussionFootnotes:function(){
return this.getShownFootnoteIndexes("discussion");
},findPosition:function(x,y,_959,deep){
deep=deep||1;
var xMin=0-2*this.markerSize;
var yMin=0-2*this.markerSize;
var xMax=$("#repository").width()+2*this.markerSize;
var yMax=$("#repository").height()+2*this.markerSize;
if(x<xMin||x>xMax||y<yMin||y>yMax){
return {outsideOfPage:true};
}else{
return this._findPosition(x,y,_959,deep);
}
},_findPosition:function(x,y,_95a,deep){
var _95b={x:x,y:y,outsideOfPage:false};
var _95c=false;
var _95d=null;
var _95e=null;
var _95f=null;
var _960=null;
var xMax=$("#repository").width()-this.markerSize;
var yMax=$("#repository").height()-this.markerSize;
if(x<0){
_95a="x";
_95c=true;
}else{
if(y<0){
_95a="y";
_95c=true;
}else{
if(x>xMax){
_95a="x";
_95c=true;
}else{
if(y>yMax){
_95a="y";
_95c=true;
}else{
for(var i=0;i<this.placedMarkers.length;i++){
var _961=true;
var _962=true;
var _963=this.placedMarkersInPageCoordinateSystem[i];
var _964=x-_963.x;
if(Math.abs(_964)<this.markerSize){
_961=false;
if(_964>0){
_95d=Math.abs(_964);
}else{
_95e=Math.abs(_964);
}
}
var _965=y-_963.y;
if(Math.abs(_965)<this.markerSize){
_962=false;
if(_965>0){
_95f=Math.abs(_965);
}else{
_960=Math.abs(_965);
}
}
if(!_961&&!_962){
_95c=true;
break;
}
}
}
}
}
}
_95b.x=Math.min(_95b.x,$("#repository").width()-2*this.markerSize);
_95b.y=Math.min(_95b.y,$("#repository").height()-2*this.markerSize);
if(_95c&&deep<100){
if(_95a=="x"){
var _966=true;
if(_95e===null&&x<xMax||_95d!==null&&_95e<_95d||x<0){
_966=false;
}
if(_966){
_95b.x=x-this.markerSize;
}else{
_95b.x=x+this.markerSize;
}
}
if(_95a=="y"){
var _967=true;
if(_960===null&&y<yMax||_95f!==null&&_960<_95f||y<0){
_967=false;
}
if(_967){
_95b.y=y-this.markerSize;
}else{
_95b.y=y+this.markerSize;
}
}
return this.findPosition(_95b.x,_95b.y,(_95a==="x")?"y":"x",++deep);
}else{
return _95b;
}
}};
rabbit.facade.registerPlugin(rabbit.plugins.footnote);
rabbit.plugins.stencilHighlighter={init:function(){
},highlightStencil:function(_968){
var _969=$("<div class=\"stencil-highlighter-highlighted\"></div>");
_968.append(_969);
},hideHighlightLayer:function(_96a){
$(".layer[data-layer-id=\""+_96a+"\"] .stencil .stencil-highlighter-highlighted").remove();
},showHighlightLayer:function(_96b){
this.hideHighlightLayer(_96b);
var _96c=$(".layer[data-layer-id=\""+_96b+"\"] .stencil");
for(var i=0;i<_96c.length;i++){
this.highlightStencil($(_96c.get(i)));
}
},deopacify:function(){
$(".stencil-highlighter-opacifyied").removeClass("stencil-highlighter-opacifyied");
},opacifyExceptLayer:function(_96d){
this.deopacify();
var _96e=$(".stencil");
for(var i=0;i<_96e.length;i++){
var _96f=$(_96e.get(i));
if(!_96f.closest(".layer[data-layer-id=\""+_96d+"\"]").length){
_96f.addClass("stencil-highlighter-opacifyied");
}
}
}};
rabbit.facade.registerPlugin(rabbit.plugins.stencilHighlighter);
rabbit.plugins.tinymcelinks={init:function(){
rabbit.facade.registerOnEvent("pageReady",function(){
var _970=document.querySelectorAll(".layer");
for(var i=0;i<_970.length;i++){
this.activateLinksForLayer(_970[i]);
}
},this);
rabbit.facade.registerOnEvent("layerStoreInserted",this.activateLinksForLayer,this);
},activateLinksForLayer:function(_971){
var _972=_971.querySelectorAll(".default-text2-container a[href]");
for(var i=0;i<_972.length;i++){
var link=_972[i];
if(!link.id){
link.id=Math.floor(Math.random()*1000000000);
}
var id=link.id;
var _973=link.getAttribute("href");
rabbit.interaction.manager.registerInteraction(id,"tinymce-interaction-"+id,{"button":"left","id":"tinymce-action-"+id,"numberOfFinger":"1","type":"click"},[{"delay":"0","id":"tinymce-reaction-"+id,"options":"reloadOnly","target":_973,"transition":"none","type":"showPage"}]);
link.className=link.className+" pidoco-clickable-element interactive-element-highlighter";
link.setAttribute("data-href",_973);
link.removeAttribute("href");
}
}};
rabbit.facade.registerPlugin(rabbit.plugins.tinymcelinks);
rabbit.plugins.frame={fitScreen:true,framesLoaded:false,pageTooSmallForCustom:false,init:function(){
if(rabbit.facade.isExport()){
rabbit.parameters.showFrame=false;
this.framesLoaded=true;
$("body").addClass("no-frame");
}else{
$.ajax({url:rabbit.common.baseUrl+rabbit.util.appendVersionQuery("common/frames.svg"),method:"GET",success:function(data,_974,_975){
var body=document.body;
body.insertBefore(data.firstChild,body.firstChild);
this.framesLoaded=true;
if(this.lastPage){
this.pageLoaded(this.lastPage,this.lastRepository);
}
}.bind(this)});
}
rabbit.facade.registerOnEvent(rabbit.events.pageReady,this.pageReady,this);
rabbit.facade.registerOnEvent(rabbit.events.pageLoaded,this.pageLoaded,this);
this.simulationContainer=$(".simulation-container");
this.frame=this.simulationContainer[0].querySelector(".frame");
this.borderWrapper=this.simulationContainer.find(".border-wrapper");
this.simulationScaled=this.simulationContainer.find(".simulation-scaled");
var _976=rabbit.parameters.isApi;
rabbit.facade.registerUserPref("simulationFitScreen",true);
rabbit.facade.registerUserPref("hidePageFrameSimulation",_976);
if(rabbit.parameters.isApi){
this.hideFrame();
}
$(window).on("resize",function(){
if(rabbit.plugins.frame.getFitScreen()){
this.pageLoaded(this.lastPage,this.lastRepository);
}
}.bind(this));
},getFitScreen:function(){
if($("body").hasClass("phantom-js")||rabbit.parameters.isApi){
return false;
}
return rabbit.parameters.isAnonymous?rabbit.parameters.fitScreen:rabbit.facade.getUserPref("simulationFitScreen");
},getHidePageFrame:function(){
if($("body").hasClass("phantom-js")||rabbit.facade.isExport()||rabbit.parameters.isAnonymous){
return !rabbit.parameters.showFrame;
}
if(rabbit.facade.isAppCooker()){
return false;
}
return rabbit.facade.getUserPref("hidePageFrameSimulation");
},setFitScreen:function(){
rabbit.facade.setUserPref("simulationFitScreen",true);
this.pageLoaded(this.lastPage,this.lastRepository);
return false;
},setOriginalSize:function(){
rabbit.facade.setUserPref("simulationFitScreen",false);
this.pageLoaded(this.lastPage,this.lastRepository);
return false;
},hideFrame:function(_977){
if(rabbit.facade.isExport()||rabbit.facade.isAppCooker()){
return;
}
if(_977!==true){
rabbit.facade.setUserPref("hidePageFrameSimulation",true);
}
$("body").addClass("no-frame");
$("body").removeClass("has-frame");
if(this.frame){
this.frame.parentNode.style.display="none";
}
this.simulationContainer[0].style.removeProperty("height");
this.borderWrapper[0].style.removeProperty("width");
this.borderWrapper[0].style.removeProperty("height");
this.updateFrame(this.lastPage,this.lastRepository);
},showFrame:function(_978){
if(rabbit.facade.isExport()){
return;
}
if(_978!==true){
rabbit.facade.setUserPref("hidePageFrameSimulation",false);
}
$("body").removeClass("no-frame");
$("body").addClass("has-frame");
this.frame.parentNode.style.display="block";
this.updateFrame(this.lastPage,this.lastRepository);
},frameReset:function(page,_979){
this.simulationScaled.css({transform:"scale(1)"});
this.borderWrapper[0].style.removeProperty("width");
this.borderWrapper[0].style.removeProperty("height");
},pageReady:function(page,_97a){
this.lastPage=page;
this.lastRepository=_97a;
this.pageLoaded(page,_97a);
if(rabbit.plugins.frame.getHidePageFrame()){
this.hideFrame();
}
setTimeout(function(){
if(this.frame){
this.frame.firstElementChild.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",this.frame.firstElementChild.getAttribute("xlink:href"));
}
}.bind(this),50);
},pageLoaded:function(page,_97b,_97c){
if(_97b.attr("id")!="repository"){
return;
}
this.lastPage=page;
this.lastRepository=_97b;
var _97d=page.getData().frame;
var _97e=page.getData().frameOrientation;
var _97f=!rabbit.plugins.frame.getHidePageFrame();
if(rabbit.parameters.isInvitation){
_97f=rabbit.parameters.showFrame;
}
if(!rabbit.common.frames[_97d]||!rabbit.common.frames[_97d][_97e]){
this.hideFrame(true);
}else{
if(_97f){
this.showFrame(true);
}else{
this.hideFrame(true);
}
}
},updateFrame:function(page,_980,_981){
if(!this.framesLoaded){
return;
}
var _982=true;
if(!_981){
this.frameReset(page,_980);
_982=false;
}
var _983=page.getData().frame;
var _984=page.getData().frameOrientation;
var _985=rabbit.common.frames.none;
var _986=page.getData().width;
var _987=page.getData().height;
var _988=0;
var _989=0;
if(_983=="custom"){
_984="custom";
}
rabbit.plugins.toolbar.showFrameButtons();
if((!rabbit.common.frames[_983]||!rabbit.common.frames[_983][_984])){
if($("body").hasClass("no-frame")){
return;
}else{
rabbit.plugins.toolbar.hideFrameButtons();
this.hideFrame(true);
return;
}
}
var _98a=_983=="custom"&&(_986<rabbit.common.frames.custom.sideMinLength||_987<rabbit.common.frames.custom.sideMinLength);
if(!this.pageTooSmallForCustom&&_98a){
this.pageTooSmallForCustom=true;
this.hideFrame();
return;
}else{
if(this.pageTooSmallForCustom&&!_98a){
this.pageTooSmallForCustom=false;
this.showFrame();
return;
}
}
var _98b=!rabbit.plugins.frame.getHidePageFrame();
if(_98b){
_985=rabbit.common.frames[_983];
if(_983!=="custom"){
_986=_985[_984].innerWidth;
_987=_985[_984].innerHeight;
}
if(_98b){
_988=_985[_984].frameBorderLeft;
_989=_985[_984].frameBorderTop;
}
}
rabbit.facade.isFrameDisplayed=!!_98b;
if(this.frame){
this.frame.firstElementChild.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+_983+"-"+_984);
}
this.simulationScaled.css({transform:"scale(1)"});
var _98c=1;
if((rabbit.plugins.frame.getFitScreen()&&!_982)){
var _98d=30;
var _98e=((_985[_984]&&_98b)?_985[_984].frameBorderTop:0)*2+_987+10;
var _98f=(window.innerHeight-_98d)/_98e;
var _990=((_985[_984]&&_98b)?_985[_984].frameBorderLeft:0)*2+_986+10;
var _991=(window.innerWidth-_98d)/_990;
_98c=Math.min(_991,_98f);
}
rabbit.facade.setScaleFactor(_98c);
var _992=(rabbit.facade.isApi()||$("body").hasClass("plain"))?0:10;
this.simulationContainer.css({width:(_988*2+_986+_992)*_98c,height:(_989*2+_987+_992)*_98c});
var _993=_986;
var _994=_987;
this.borderWrapper.css("overflow","hidden");
if(!rabbit.plugins.frame.getHidePageFrame()&&this.borderWrapper[0].scrollWidth>_993){
_994+=rabbit.util.getScrollbarWidth();
}
if(!rabbit.plugins.frame.getHidePageFrame()&&this.borderWrapper[0].scrollHeight>_994){
_993+=rabbit.util.getScrollbarWidth();
}
this.borderWrapper.css({left:_988,top:_989,width:_993,height:_994,overflow:"auto"});
this.simulationScaled.css({transform:"scale("+_98c+")"});
$(".p-Preview-prototype .p-CommentMarker").css("transform","scale("+1/_98c+", "+1/_98c+")");
$("[data-apply-scale-factor]").css({transform:"scale("+_98c+")"});
if(_983=="custom"){
rabbit.common.frames.adjusteCustomFrame(_986,_987);
}
rabbit.facade.raiseEvent(rabbit.events.frameChanged,_983,_984);
}};
rabbit.facade.registerPlugin(rabbit.plugins.frame);
rabbit.plugins.interactionHighlighter={keyPressed:false,init:function(){
Mousetrap.bind("ctrl",function(_995){
if(!this.keyPressed){
$("body").addClass("highlight-interactions");
this.keyPressed=true;
_995.preventDefault();
}
}.bind(this),"keydown");
Mousetrap.bind("ctrl",function(){
if(this.keyPressed){
$("body").removeClass("highlight-interactions");
this.keyPressed=false;
}
}.bind(this),"keyup");
}};
rabbit.facade.registerPlugin(rabbit.plugins.interactionHighlighter);
rabbit.plugins.onPageLoad=function(){
var _996=rabbit.facade;
return {init:function(){
_996.registerAction("onPageLoad",{makeableOnDesktop:true,render:function(_997){
return t("interaction.action.onPageLoad.userDescription");
},defineEvent:function(_998){
var _999=$("#"+_998.data.stencilId).data("layerId");
rabbit.facade.registerOnEvent(rabbit.events.pageLoaded,function(page,_99a){
if(_999===page.data.id){
rabbit.interaction.manager.raiseInteraction(_998,{});
}
},this);
rabbit.facade.registerOnEvent(rabbit.events.pageReady,function(page,_99b){
if(_999===page.data.id){
rabbit.interaction.manager.raiseInteraction(_998,{});
}
},this);
}});
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.onPageLoad);
rabbit.plugins.touchThroughAlpha=function(){
var _99c=rabbit.facade;
return {init:function(){
var _99d="touch_through_alpha";
TouchThroughAlpha.register(_99d,0.1);
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.touchThroughAlpha);
rabbit.plugins.sticky={init:function(){
$(".p-LayerWrapper--sticky").css("position","initial");
setTimeout(function(){
$(".p-LayerWrapper--sticky").css("position","fixed");
},300);
}};
rabbit.facade.registerPlugin(rabbit.plugins.sticky);
rabbit.plugins.fullscreen={init:function(){
var _99e,_99f;
if(screenfull.enabled){
screenfull.on("change",function(){
if(screenfull.isFullscreen){
$("body").addClass("is-fullscreen");
_99e=rabbit.plugins.frame.getFitScreen();
if(_99e){
_99f=setInterval(function(){
if(screen.height-30<=$(window).height()){
rabbit.plugins.frame.setFitScreen();
clearInterval(_99f);
}
},200);
setTimeout(function(){
clearInterval(_99f);
},2000);
}
}else{
$("body").removeClass("is-fullscreen");
if(_99e){
if(screen.height-30>=$(window).height()){
setTimeout(function(){
rabbit.plugins.frame.setFitScreen();
},500);
}
}
}
}.bind(this));
}
},activateFullscreen:function(){
if(screenfull.enabled){
screenfull.request();
}
},deactivateFullscreen:function(){
if(screenfull.enabled){
screenfull.exit();
}
}};
rabbit.facade.registerPlugin(rabbit.plugins.fullscreen);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.autocomplete=(function(){
return {init:function init(){
},setupAutocomplete:function setupAutocomplete(id,_9a0){
_9a0=_9a0.split("|c");
var oDS=new YAHOO.util.LocalDataSource(_9a0);
oDS.responseSchema={fields:["state"]};
var oAC=new YAHOO.widget.AutoComplete(id+"-input",id+"-con",oDS);
oAC.prehighlightClassName="yui-ac-prehighlight";
oAC.useShadow=false;
$("#"+id+"-input").click(function(){
rabbit.facade.markHighlightTouchesAsSuccessful();
});
}};
})();
rabbit.facade.registerPlugin(rabbit.stencils.autocomplete);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.textinput=(function(){
return {init:function init(){
rabbit.facade.registerOnEvent(rabbit.events.layerStoreInserted,this.layerStoreInsertedListener,this);
rabbit.facade.registerOnEvent(rabbit.events.pageReady,this.pageReadyListener,this);
},layerStoreInsertedListener:function(_9a1){
$(_9a1).find(".stencil.textinput").click(function(){
rabbit.facade.markHighlightTouchesAsSuccessful();
});
},pageReadyListener:function(){
$(".stencil.textinput").click(function(){
rabbit.facade.markHighlightTouchesAsSuccessful();
});
}};
})();
rabbit.facade.registerPlugin(rabbit.stencils.textinput);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.combobox=(function(){
return {init:function init(){
rabbit.facade.registerOnEvent(rabbit.events.layerStoreInserted,this.layerStoreInsertedListener,this);
rabbit.facade.registerOnEvent(rabbit.events.pageReady,this.pageReadyListener,this);
},layerStoreInsertedListener:function(_9a2){
$(_9a2).find(".stencil.combobox").click(function(){
rabbit.facade.markHighlightTouchesAsSuccessful();
});
},pageReadyListener:function(){
$(".stencil.combobox").click(function(){
rabbit.facade.markHighlightTouchesAsSuccessful();
});
}};
})();
rabbit.facade.registerPlugin(rabbit.stencils.combobox);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.accordion=function(){
var _9a3=600;
var _9a4=".accordion-header";
var _9a5=".accordion-content";
var _9a6="accordion-active";
var _9a7=30;
var _9a8=function(_9a9){
var _9aa=$(_9a9).parents().children(_9a4);
var _9ab=_9aa.index(_9a9);
return _9ab;
};
var _9ac=function(_9ad){
return $(_9ad).closest(".stencil").attr("id");
};
var _9ae=function(_9af){
return $("#"+_9af).find(_9a4).length;
};
var _9b0=function(_9b1,_9b2,_9b3){
var _9b4=$("#"+_9b1+">div>"+_9a4).length;
$("#"+_9b1).find(_9a5+">div, "+_9a5+">iframe").css("position","relative").css("left","0px").css("top","0px").css("width",_9b2+"px").css("height",(_9b3-_9b4*_9a7-2)+"px");
};
return {_accordions:{},init:function init(){
},setupAccordion:function(id,_9b5,_9b6,_9b7){
var _9b8=_9ae(id);
if(_9b7<1){
_9b7=1;
}
if(_9b7>_9b8){
_9b7=_9b8;
}
_9b7--;
$("#"+id).find(_9a4).click({"accordionObject":this},this.raiseClickCallback);
_9b0(id,_9b5,_9b6);
this.showTab(id,_9b7,false);
},showTab:function(id,_9b9,_9ba){
this._accordions[id]=_9b9;
if(_9ba){
$("#"+id).find(_9a5).slideUp(_9a3);
}else{
$("#"+id).find(_9a5).hide();
}
var _9bb=$("#"+id).find(_9a4).removeClass(_9a6)[_9b9];
$(_9bb).addClass(_9a6).next().slideDown(_9a3,function onCompleteCallback(){
if(BrowserDetect.browser=="MSIE"){
$(this).css("width",$(this).css("width"));
}
});
},raiseClickCallback:function(evt){
evt.data.accordionObject.clickCallback(evt.data.accordionObject,this);
},clickCallback:function(that,_9bc){
var _9bd=_9a8(_9bc);
var _9be=_9ac(_9bc);
if(that._accordions[_9be]===_9bd){
return;
}
rabbit.facade.markHighlightTouchesAsSuccessful();
that.showTab(_9be,_9bd,true);
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.accordion);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.button=function(){
var _9bf=rabbit.facade;
return {init:function init(){
_9bf.registerOnEvent(rabbit.events.buttonMouseOver,this.onMouseOver,this);
_9bf.registerOnEvent(rabbit.events.buttonMouseOut,this.onMouseOut,this);
},onMouseOver:function onMouseOver(id){
document.getElementById(id).className="ClickableSketchHover";
},onMouseOut:function onMouseOut(id){
document.getElementById(id).className="ClickableSketch";
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.button);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.checkBox=function(){
var _9c0=rabbit.facade;
return {init:function init(){
rabbit.facade.registerOnEvent(rabbit.events.checkBoxClicked,this.onClick,this);
},onClick:function onClick(_9c1,_9c2){
rabbit.facade.markHighlightTouchesAsSuccessful();
console.log("Click to checkbox "+_9c1);
var _9c3=document.getElementById(_9c1);
if(_9c3==null){
return true;
}
var _9c4=document.getElementById(_9c2);
if(_9c4==null){
return true;
}
if(!_9c3.checked){
_9c4.setAttribute("visibility","hidden");
}else{
_9c4.setAttribute("visibility","inherit");
}
return true;
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.checkBox);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.datepicker=function(){
var _9c5=rabbit.facade;
var _9c6=[];
var _9c7=false;
var _9c8=null;
var _9c9=function(id){
for(var i=0;i<_9c6.length;i++){
var _9ca=_9c6[i];
if(_9ca.calendarId==id){
return _9ca;
}
}
return null;
};
var _9cb=function(id,year,_9cc){
var _9cd=_9c9(id);
_9cd.calendar.setYear(year);
_9cd.calendar.setMonth(_9cc);
_9cd.calendar.render();
};
var _9ce=function _hideCalendar(id,_9cf,_9d0){
if(_9cf){
document.getElementById(id+"_input").value=_9cf;
}
var _9d1=_9c9(id);
_9d1.calendarVisible=false;
var svg=document.getElementById(_9d1.calendarId+"_open_calendar");
if(svg){
svg.style.display="none";
}
_9d1.calendar.hide();
_9d1.overlay.hide();
_9c7=false;
$("html").unbind("click",_9c8);
};
var _9d2=function _showCalendar(id,_9d3){
var _9d4=_9c9(id);
_9d4.calendarVisible=true;
_9d4.calendar.show();
_9d4.overlay.show();
_9c7=true;
var svg=document.getElementById(_9d4.calendarId+"_open_calendar");
if(svg){
svg.style.display="block";
}
_9c8=function(e){
if(!rabbit.util.isElementChildOfSelector(e.target,"#"+id)){
_9ce(id);
}
};
$("html").bind("click",_9c8);
};
var _9d5=function _9d5(_9d6){
for(var i=0;i<_9d6.childNodes.length;i++){
var _9d7=_9d6.childNodes[i];
if(_9d7.nodeType!=1){
continue;
}
if(_9d7.getAttribute("id")==undefined){
_9d7.setAttribute("id",_9d6.getAttribute("id")+"_"+i);
}
arguments.callee(_9d7);
}
};
var _9d8=function _9d8(evt){
if(!evt){
return;
}
if(!_9c5.vml){
evt.stopPropagation();
}else{
evt.cancelBubble=true;
}
};
return {init:function init(){
_9c5.registerOnEvent(rabbit.events.click,this.hideDatePickerOnClick,this);
rabbit.facade.registerOnEvent(rabbit.events.showDatepicker,_9d2,this);
rabbit.facade.registerOnEvent(rabbit.events.hideDatepicker,_9ce,this);
rabbit.facade.registerOnEvent(rabbit.events.changeDatepickerPage,_9cb,this);
},calendarOpen:function(id){
return _9c7;
}(),setupDatepicker:function setupDatepicker(id){
try{
var _9d9=new YAHOO.widget.Overlay(id+"_ov",{zIndex:9990,width:"200px",height:"200px",context:[id+"_input","tl","bl"]});
_9d9.render();
if(rabbit.result.lang=="de"){
var cal=new YAHOO.widget.Calendar(id+"_cal",{START_WEEKDAY:1});
cal.cfg.setProperty("DATE_FIELD_DELIMITER",".");
cal.cfg.setProperty("MDY_DAY_POSITION",1);
cal.cfg.setProperty("MDY_MONTH_POSITION",2);
cal.cfg.setProperty("MDY_YEAR_POSITION",3);
cal.cfg.setProperty("MD_DAY_POSITION",1);
cal.cfg.setProperty("MD_MONTH_POSITION",2);
cal.cfg.setProperty("MONTHS_SHORT",["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]);
cal.cfg.setProperty("MONTHS_LONG",["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]);
cal.cfg.setProperty("WEEKDAYS_1CHAR",["S","M","D","M","D","F","S"]);
cal.cfg.setProperty("WEEKDAYS_SHORT",["So","Mo","Di","Mi","Do","Fr","Sa"]);
cal.cfg.setProperty("WEEKDAYS_MEDIUM",["Son","Mon","Die","Mit","Don","Fre","Sam"]);
cal.cfg.setProperty("WEEKDAYS_LONG",["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]);
}else{
var cal=new YAHOO.widget.Calendar(id+"_cal");
}
var _9da=new Object();
_9da["calendar"]=cal;
_9da.overlay=_9d9;
_9da["calendarId"]=id;
_9da["calendarVisible"]=false;
_9c6.push(_9da);
cal.selectEvent.subscribe(rabbit.util.bind(function(evt,d){
var _9db=this.formatIsoDate(d[0][0][0],d[0][0][1],d[0][0][2]);
rabbit.facade.raiseEvent(rabbit.events.hideDatepicker,_9da.calendarId,_9db,rabbit.util.userRole,"displayMouseClick");
},this),cal,true);
cal.render();
cal.hide();
_9d9.hide();
var _9dc=id+"_cal";
_9d5(document.getElementById(id+"_cal"));
cal.changePageEvent.subscribe(rabbit.util.bind(function(evt,d){
var date=cal.cfg.getProperty("pagedate");
var year=date.getUTCFullYear();
var _9dd=date.getMonth();
rabbit.facade.raiseEvent(rabbit.events.changeDatepickerPage,_9da.calendarId,year,_9dd,rabbit.util.userRole,"displayMouseClick");
_9d5(document.getElementById(_9dc));
},this),cal,true);
YAHOO.util.Event.addListener(id+"_button","click",rabbit.util.bind(this.toggleCalendarCallback,this),_9da);
YAHOO.util.Event.addListener(id+"_input","focus",rabbit.util.bind(this.toggleCalendarCallback,this),_9da);
YAHOO.util.Event.addListener(id+"_ov","click",_9d8);
}
catch(e){
rabbit.util.submitError("Error setting up datepicker");
rabbit.util.submitError(e);
}
},hideDatePickerOnClick:function hideDatePickerOnClick(e){
rabbit.facade.markHighlightTouchesAsSuccessful();
if(this.calendarOpen){
for(var i=0;i<_9c6.length;i++){
var _9de=_9c6[i];
if(_9de.calendarVisible){
rabbit.facade.raiseEvent(rabbit.events.hideDatepicker,_9de.calendarId,null,rabbit.util.userRole,"displayMouseClick");
}
}
}
},toggleCalendarCallback:function toggleCalendarCallback(evt,_9df){
if(!_9df.calendarVisible){
rabbit.facade.raiseEvent(rabbit.events.showDatepicker,_9df.calendarId,rabbit.util.userRole,"displayMouseClick");
this.calendarOpen=true;
}else{
rabbit.facade.raiseEvent(rabbit.events.hideDatepicker,_9df.calendarId,null,rabbit.util.userRole,"displayMouseClick");
this.calendarOpen=false;
}
_9d8(evt);
},formatIsoDate:function formatIsoDate(y,m,d){
return y.toString()+(m<10?"-0":"-")+m.toString()+(d<10?"-0":"-")+d.toString();
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.datepicker);
rabbit.stencils.menu=function(){
var _9e0=[];
var _9e1=function(_9e2){
for(var i=0;i<_9e0.length;i++){
var menu=_9e0[i];
if(menu.domId==_9e2){
return menu;
}
}
return null;
};
var _9e3=function(_9e4,_9e5){
var menu=_9e1(_9e4);
if(menu){
for(var i=0;i<_9e5.length;i++){
var _9e6=menu.getSubmenus();
for(var j=0;j<_9e6.length;j++){
if(_9e6[j].id==_9e5[i]){
menu=_9e6[j];
}
}
}
}
return menu;
};
var _9e7=function(_9e8,_9e9,_9ea){
if(_9ea&&_9ea!=rabbit.util.userRole){
var _9eb=_9e3(_9e8,_9e9);
if(_9eb){
_9eb.show();
}
}
};
var _9ec=function(_9ed,_9ee,_9ef){
if(_9ef&&_9ef!=rabbit.util.userRole){
var _9f0=_9e3(_9ed,_9ee);
if(_9f0){
_9f0.hide();
}
}
};
var _9f1=function(obj){
var menu=obj;
var _9f2=[];
while(menu.getRoot()!=menu){
_9f2.push(menu.id);
menu=menu.getRoot();
}
var _9f3=menu.domId;
var _9f4=[];
for(var i=_9f2.length-1;i>=0;i--){
_9f4.push(_9f2[i]);
}
return [_9f3,_9f4];
};
var _9f5=function(_9f6){
var top=23;
if(rabbit.facade.isSketched()){
top=18;
}
$(_9f6.element).css({left:$(_9f6.parent.element).position().left,top:top});
};
var _9f7=function(_9f8){
var _9f9=-4;
var _9fa=$(_9f8.parent.element);
$(_9f8.element).css({left:_9fa.width()+1/rabbit.facade.getScaleFactor(),top:_9fa.position().top/rabbit.facade.getScaleFactor()+_9f9});
};
var _9fb=function(){
var _9fc=$(this.element.parentNode).hasClass("yuimenubaritem");
if(_9fc){
_9f5(this);
$(this.element).on("mouseout",function(_9fd){
var to=_9fd.target?_9fd.target:_9fd.toElement;
if(!$(to).closest(".yuimenubaritem").length){
this.hide();
}
}.bind(this));
}else{
_9f7(this);
}
var _9fe=_9f1(this);
rabbit.facade.raiseEvent(rabbit.events.subMenuShow,_9fe[0],_9fe[1],rabbit.util.userRole);
};
var _9ff=function(){
var _a00=_9f1(this);
rabbit.facade.raiseEvent(rabbit.events.subMenuHide,_a00[0],_a00[1],rabbit.util.userRole);
};
return {init:function(){
rabbit.facade.registerOnEvent(rabbit.events.subMenuShow,_9e7,this);
rabbit.facade.registerOnEvent(rabbit.events.subMenuHide,_9ec,this);
},convertMethodIntoFunction:function(_a01){
for(var i=0;i<_a01.length;i++){
var _a02=_a01[i].onclick;
if(_a02&&_a02.fn!=="undefined"){
_a02.fn=eval(_a02.fn);
_a01[i].classname="interactive-element-highlighter";
}
if(_a01[i].submenu){
var _a03=_a01[i].submenu.itemdata;
this.convertMethodIntoFunction(_a03);
}
}
},setupMenu:function setupMenu(id,_a04,_a05){
try{
_a04=_a04.replace(/:rabbit.result.manager.menuClick,/g,":\"rabbit.result.manager.menuClick\",");
_a04=JSON.parse(_a04);
this.convertMethodIntoFunction(_a04);
var _a06;
if(_a05=="vertical"){
_a06=new YAHOO.widget.Menu(id+"-bar",{itemdata:_a04,visible:true,position:"static",hidedelay:750,lazyload:true});
}else{
_a06=new YAHOO.widget.MenuBar(id+"-bar",{lazyload:true,autosubmenudisplay:true,showdelay:10,itemdata:_a04});
}
_a06.render(id+"-menu-container");
_a06.show();
_a06.domId=id;
_9e0.push(_a06);
_a06.subscribe("show",_9fb);
_a06.subscribe("hide",_9ff);
}
catch(e){
rabbit.util.submitError(e);
}
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.menu);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.radioButton=function(){
var _a07=rabbit.facade;
return {init:function init(){
_a07.registerOnEvent(rabbit.events.radioButtonClicked,this.onClick,this);
$(".radiobutton input:checked").each(function(){
var name=$(this).attr("name");
$("input[name=\""+name+"\"]").data("old-selected-radiobutton-id",$(this).attr("value"));
});
},getAllRadioButtons:function getAllRadioButtons(){
var _a08=[];
var _a09=document.getElementsByTagName("input");
for(var i=0;i<_a09.length;i++){
if(_a09[i].type==="radio"){
_a08.push(_a09[i]);
}
}
return _a08;
},onClick:function onClick(_a0a,_a0b){
rabbit.facade.markHighlightTouchesAsSuccessful();
console.log("Click to radioButton "+_a0a);
var _a0c=this.getAllRadioButtons();
for(var i=0;i<_a0c.length;i++){
var _a0d=_a0c[i];
var _a0e=_a0d.getAttribute("id")+"_svgChecked";
var _a0f=document.getElementById(_a0e);
if(_a0f!=null){
if(!_a0d.checked){
if(rabbit.facade.vml){
_a0f.style.setAttribute("display","none");
}else{
_a0f.setAttribute("visibility","hidden");
}
}else{
if(rabbit.facade.vml){
_a0f.style.removeAttribute("display");
}else{
_a0f.setAttribute("visibility","inherit");
}
}
}
}
return true;
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.radioButton);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.slider=function(){
var _a10={};
var _a11=function(_a12,_a13,_a14){
var _a15=_a10[_a12];
if(!_a15){
return;
}
if(_a14!=null&&_a14!=rabbit.util.userRole){
console.log("_sliderChangedCallback "+_a13);
_a15.setValue(_a13);
}
};
return {init:function init(){
rabbit.facade.registerOnEvent(rabbit.events.sliderChangedEvent,_a11,this);
},setupSlider:function(id,_a16,_a17,_a18,_a19){
try{
_a16=parseInt(_a16);
_a18=parseInt(_a18);
if(_a19){
_a19=parseInt(_a19)*2;
}else{
_a19=0;
}
var _a1a=(_a18-(_a18)/21)/10;
var _a1b=_a1a*_a16;
var _a1c=_a18-_a1b;
var _a1d=null;
if(_a17=="vertical"){
_a1d=YAHOO.widget.Slider.getVertSlider(id,id+"_thumb_vert",_a1c,_a1b,_a1a);
}else{
_a1d=YAHOO.widget.Slider.getHorizSlider(id,id+"_thumb_horiz",_a1c,_a1b,_a1a);
}
_a10[id]=_a1d;
_a1d.animate=false;
_a1d.subscribe("change",function(){
var _a1e=Math.round(this.getValue()+_a19);
rabbit.facade.raiseEvent(rabbit.events.sliderChangedEvent,id,_a1e,rabbit.util.userRole);
});
}
catch(e){
rabbit.util.submitError(e);
}
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.slider);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.stencil=function(){
var _a1f=rabbit.facade;
var _a20=function _a20(_a21,_a22){
var node=document.getElementById(_a21);
if(node){
node.style.setProperty("fill",_a22,"");
}
};
var _a23=function _a23(_a24,_a25){
var _a26,node=document.getElementById(_a24);
if(node){
if(_a25=="url(#sketchedHover)"){
_a26=node.ownerDocument.createElement("v:fill");
_a26.setAttribute("src",rabbit.common.baseUrl+"result/icons/sketchedFilledButton.png");
_a26.setAttribute("type","tile");
_a26.setAttribute("origin","0.1,0.1");
_a26.setAttribute("size","175pt,75pt");
_a26.setAttribute("on","true");
node.getElementsByTagName("fill")[0].parentNode.replaceChild(_a26,node.getElementsByTagName("fill")[0]);
}else{
_a26=node.ownerDocument.createElement("v:fill");
_a26.setAttribute("color",_a25);
_a26.setAttribute("on"," true");
node.getElementsByTagName("fill")[0].parentNode.replaceChild(_a26,node.getElementsByTagName("fill")[0]);
}
}
};
return {init:function init(){
_a1f.registerOnEvent(rabbit.events.svgFocus,this.onSvgFocus,this);
_a1f.registerOnEvent(rabbit.events.svgBlur,this.onSvgBlur,this);
_a1f.registerOnEvent(rabbit.events.propertyChange,this.onPropertyChanged,this);
},setFill:function setFill(id,_a27){
if(rabbit.facade.vml){
_a23(id,_a27);
}else{
_a20(id,_a27);
}
},onSvgFocus:function onSvgFocus(_a28){
var _a29;
if(_a28 instanceof Array){
for(var key in _a28){
_a29=document.getElementById(_a28[key]);
if(_a29!=null){
_a29.setAttribute("class","svg_selected_element");
}
}
}else{
_a29=document.getElementById(_a28);
if(_a29!=null){
_a29.setAttribute("class","svg_selected_element");
}
}
},onSvgBlur:function onSvgBlur(_a2a){
var _a2b;
if(_a2a instanceof Array){
for(var key in _a2a){
_a2b=document.getElementById(_a2a[key]);
if(_a2b!=null){
_a2b.setAttribute("class","svg_unselected_element");
}
}
}else{
_a2b=document.getElementById(_a2a);
if(_a2b!=null){
_a2b.setAttribute("class","svg_unselected_element");
}
}
},onPropertyChanged:function onPropertyChanged(_a2c,_a2d){
var _a2e=document.getElementById(_a2d);
if(_a2e==null){
return true;
}
console.debug("Property changed on "+_a2c);
if(event.srcElement[event.propertyName]==false){
_a2e.style.setAttribute("display","none");
}else{
_a2e.style.removeAttribute("display");
}
return true;
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.stencil);
rabbit.stencils.tabButton=function(){
var _a2f=rabbit.facade;
var _a30=function _a30(_a31,_a32){
var node=document.getElementById(_a31);
if(node){
node.style.setProperty("fill",_a32,"");
}
};
var _a33=function _a33(_a34,_a35){
var _a36,node=document.getElementById(_a34);
if(node){
if(_a35=="url(#sketchedHover)"){
_a36=node.ownerDocument.createElement("v:fill");
_a36.setAttribute("src",rabbit.common.baseUrl+"result/icons/sketchedFilledButton.png");
_a36.setAttribute("type","tile");
_a36.setAttribute("origin","0.1,0.1");
_a36.setAttribute("size","175pt,75pt");
_a36.setAttribute("on","true");
node.getElementsByTagName("fill")[0].parentNode.replaceChild(_a36,node.getElementsByTagName("fill")[0]);
}else{
_a36=node.ownerDocument.createElement("v:fill");
_a36.setAttribute("color",_a35);
_a36.setAttribute("on"," true");
node.getElementsByTagName("fill")[0].parentNode.replaceChild(_a36,node.getElementsByTagName("fill")[0]);
}
}
};
return {init:function init(){
_a2f.registerOnEvent(rabbit.events.tabButtonMouseOver,this.handleMouseOver,this);
_a2f.registerOnEvent(rabbit.events.tabButtonMouseOut,this.handleMouseOut,this);
_a2f.registerOnEvent(rabbit.events.pageLoaded,this.changeTab,this);
_a2f.registerOnEvent(rabbit.events.pageReady,this.changeTab,this);
this.oldPageId=null;
},changeTab:function(page,_a37){
var _a38="";
if(page){
_a38=page.data.id;
}
if(this.oldPageId===null){
_a38=_a2f.getCurrentPageId();
}
var _a39=selectorUtil.getElementsByName("target"+this.oldPageId);
for(var i=0;i<_a39.length;i++){
rabbit.util.removeClass(_a39[i],"selected");
}
var _a39=selectorUtil.getElementsByName("target"+_a38);
for(var i=0;i<_a39.length;i++){
rabbit.util.addClass(_a39[i],"selected");
}
this.oldPageId=_a2f.getCurrentPageId();
},handleMouseOver:function handleMouseOut(id,mode){
if(typeof id!=="string"||(mode!=="result"&&mode!=="sketched")){
rabbit.util.submitError("Updating tabButton "+id+" failed.");
return;
}
try{
if(mode==="sketched"){
rabbit.util.addClass(id+"_div_small","ClickableSketchHover");
rabbit.util.addClass(id+"_div_big","ClickableSketchHover");
}else{
if(rabbit.vml){
_a33(id+"_big_path","#EEEEEE");
_a33(id+"_small_path","#EEEEEE");
}else{
_a30(id+"_big_path","#EEEEEE");
_a30(id+"_small_path","#EEEEEE");
}
}
}
catch(e){
rabbit.util.submitError("Updating tabButton "+id+" failed.");
rabbit.util.submitError(e);
}
},handleMouseOut:function handleMouseOut(id,mode){
if(typeof id!=="string"||(mode!=="result"&&mode!=="sketched")){
rabbit.util.submitError("Updating tabButton "+id+" failed.");
return;
}
try{
if(mode==="sketched"){
_setClass(id+"_div_small","ClickableSketch");
_setClass(id+"_div_big","ClickableSketch");
}else{
if(rabbit.vml){
_a33(id+"_big_path","white");
_a33(id+"_small_path","white");
}else{
_a30(id+"_big_path","white");
_a30(id+"_small_path","white");
}
}
}
catch(e){
rabbit.util.submitError("Updating tabButton "+id+" failed.");
rabbit.util.submitError(e);
}
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.tabButton);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.togglesection=function(){
var _a3a=0;
var _a3b=".togglesection-header";
var _a3c=".togglesection-content";
var _a3d="content";
var _a3e="#borderDiv";
var _a3f="open";
var _a40=rabbit.facade;
var _a41=function(_a42,_a43){
$("#"+_a42+_a3d).find(".iframe").css("width",_a43+"px");
};
return {togglers:{},init:function init(){
rabbit.facade.registerOnEvent(rabbit.events.pageLoaded,this.pageLoaded,this);
rabbit.facade.registerOnEvent(rabbit.events.toggleToggleSection,this.toggle,this);
},setupToggler:function(id,_a44,_a45){
this.togglers[id]={id:id,page:_a44};
$("#"+id).find(_a3b).click(function(){
rabbit.facade.markHighlightTouchesAsSuccessful();
rabbit.facade.raiseEvent(rabbit.events.toggleToggleSection,id);
});
$(_a3e).append($("#"+id).find(_a3c));
},pageLoaded:function(_a46){
for(var _a47 in this.togglers){
$("#"+this.togglers[_a47].id+_a3d).hide();
}
},toggle:function(_a48){
var _a49=$("#"+_a48+">div").data("iframe-url");
$("#"+_a48+_a3d).slideToggle(_a3a,function(){
$("#"+_a48).toggleClass(_a3f);
});
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.togglesection);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.iphoneSwitch=function(){
var _a4a=rabbit.facade;
return {init:function init(){
_a4a.registerOnEvent(rabbit.events.iphoneSwitchClicked,this.onClick,this);
},onClick:function onClick(id){
rabbit.facade.markHighlightTouchesAsSuccessful();
var _a4b=$("#"+id+" .stencil-wrapper > div");
var _a4c=rabbit.events.switchOffSwitch;
_a4b.toggleClass("switch-selected");
if(_a4b.hasClass("switch-selected")){
_a4c=rabbit.events.switchOnSwitch;
}
_a4a.raiseEvent(_a4c,id);
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.iphoneSwitch);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.rating=function(){
var _a4d="rating_white.png";
var _a4e="rating_black.png";
var _a4f=rabbit.facade;
var _a50=new Array();
var _a51=function(id){
if(_a50[id]){
return parseInt(_a50[id]);
}
return 0;
};
var _a52=function(id,_a53){
_a50[id]=_a53;
};
var _a54=function(id,_a55){
var i=1;
_a55=parseInt(_a55);
while(true){
var _a56=document.getElementById(id+"-"+i);
if(_a56==null){
break;
}
var _a57=_a56.getAttribute("src");
_a57=_a57.substring(0,_a57.lastIndexOf("/")+1);
if(i>=_a55+1){
_a57+=_a4d;
}else{
_a57+=_a4e;
}
_a56.setAttribute("src",_a57);
i++;
}
};
return {init:function init(){
_a4f.registerOnEvent(rabbit.events.ratingResultChangedEvent,this.onClick,this);
_a4f.registerOnEvent(rabbit.events.ratingMouseOut,this.onMouseOut,this);
_a4f.registerOnEvent(rabbit.events.ratingMouseOver,this.onMouseOver,this);
},onLoad:function onLoad(id,_a58){
_a52(id,_a58);
},onClick:function onClick(id,_a59){
rabbit.facade.markHighlightTouchesAsSuccessful();
_a52(id,_a59);
_a54(id,_a59);
},onMouseOut:function onMouseOut(id){
_a54(id,_a51(id));
},onMouseOver:function onMouseOver(id,_a5a){
_a54(id,parseInt(_a5a));
},checkMouseOutDiv:function(id,_a5b){
if(_a5b.relatedTarget){
return _a5b.relatedTarget.id.indexOf(id)==-1;
}else{
return _a5b.toElement.id.indexOf(id)==-1;
}
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.rating);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.tree=function(){
var _a5c=20;
return {_trees:{},init:function init(){
rabbit.facade.registerOnEvent(rabbit.events.treeViewNodeClicked,this.clickCallback,this);
rabbit.facade.registerOnEvent(rabbit.events.treeViewScrolled,this.scrollCallback,this);
},setupTree:function setupMenu(id,_a5d){
try{
_a5d=_a5d.replace(/&quot;/g,"\"");
_a5d=JSON.parse(_a5d);
this._trees[id]=_a5d;
}
catch(e){
rabbit.util.submitError(e);
}
},clickCallback:function(_a5e,sth){
var _a5f=document.getElementById(_a5e+"-buttonvline");
var _a60="open";
if(_a5f){
if(_a5f.style.display=="none"){
_a60="closed";
}
if(_a60=="closed"){
_a5f.style.display="";
}else{
_a5f.style.display="none";
}
var elem=document.getElementById(_a5e+"-treeviewnodeid");
if(elem&&elem.nextElementSibling){
if(_a60=="closed"){
elem.nextElementSibling.style.display="none";
}else{
elem.nextElementSibling.style.display="";
}
this.update(_a5e,_a60);
}
}
},scrollCallback:function(id,_a61,_a62){
var _a63=document.getElementById(id);
_a63.scrollTop=_a61;
_a63.scrollLeft=_a62;
},update:function(_a64,_a65){
this.setStatus(_a64,_a65);
this.recalculateLineLengths(_a64);
},setStatus:function(_a66,_a67){
var tree=this.getTree(_a66);
if(tree){
this.setStatusOnSubtree(this.getTreeName(_a66),tree,_a66,_a67);
}
},setStatusOnSubtree:function(_a68,tree,_a69,_a6a){
if(tree){
for(var i=0;i<tree.length;i++){
var node=tree[i];
var _a6b=_a68+"-"+i;
if(_a6b==_a69){
node.treeItemType=(_a6a=="closed"?"-":"+");
return true;
}
if(node.subtree){
if(this.setStatusOnSubtree(_a6b,node.subtree,_a69,_a6a)){
return true;
}
}
}
}
},recalculateLineLengths:function(_a6c){
var tree=this.getTree(_a6c);
if(tree){
var _a6d=this.getTreeName(_a6c);
var _a6e=document.getElementById(_a6d+"-openingvline");
this.traverseTree(_a6d,_a6e,tree,null);
}
},traverseTree:function(_a6f,node,_a70,_a71){
var _a72=false;
if(_a71===null){
_a71={0:0,1:0};
_a72=true;
}
var rows=0;
var _a73=0;
var _a74=0;
var _a75=0;
_a71[0]=0;
_a71[1]=0;
if(!_a72){
rows++;
}
if(_a70){
for(var i=0;i<_a70.length;i++){
var _a76=_a70[i];
var _a77=null;
if(_a76.subtree){
_a77=_a76.subtree;
}
this.traverseTree(_a6f+"-"+i,_a76,_a77,_a71);
_a74=_a73+1;
_a73=_a73+_a71[0];
_a75=_a75+_a71[1];
}
}
var _a78=null;
if(_a72){
_a78=node;
}else{
_a78=document.getElementById(_a6f+"-openingvline");
}
if(_a78){
var _a79=_a78.parentNode;
_a79.style.height=""+(_a5c*_a73)+"px";
var _a7a=(_a74-_a75)*_a5c;
_a78.style.top=""+_a7a+"px";
}else{
}
if(_a72||"+"==node.treeItemType){
_a71[0]=rows+_a73;
}else{
_a71[0]=rows;
}
_a71[1]=rows+_a75;
},getTree:function(_a7b){
if(_a7b){
var _a7c=this.getTreeName(_a7b);
if(this._trees[_a7c]){
return this._trees[_a7c];
}else{
return null;
}
}
},getTreeName:function(_a7d){
return _a7d.substring(0,_a7d.indexOf("-"));
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.tree);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.iframe=function(){
var _a7e=rabbit.facade;
return {init:function init(){
$(".renderExtern-error").delay(1000).fadeIn();
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.iframe);
rabbit.stencils.image=function(){
return {init:function(){
},displayPlaceholder:function(_a7f){
var _a80=$(_a7f).closest(".stencil-wrapper");
_a80.find(".notFoundImagePlaceholder").show();
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.image);
rabbit.common={baseUrl:"/rabbit/"};
if(rabbit.common==undefined){
rabbit.common={};
}
rabbit.common.i18n={translation:{},lang:rabbit.parameters.lang,init:function(_a81){
this.lang=_a81.lang;
if((!this.lang)||(!this.translation[this.lang])){
this.lang="en";
}
},t:function(key,_a82){
if(_a82){
var _a83=key.toLowerCase();
_a83=_a83.replace(/ /g,"-");
_a83=_a82+"."+_a83;
}else{
var _a83=key;
}
var lang=rabbit.common.i18n.lang;
if(!rabbit.common.i18n.translation[lang]){
console.log("no lang found for",key);
lang="en";
}
if(!rabbit.common.i18n.translation[lang]){
console.log("no lang found for",key);
return key;
}
var _a84=rabbit.common.i18n.translation[lang][_a83];
if(_a84!==undefined){
return _a84;
}
if(rabbit.facade.hasEmberJSApp()){
return rabbit.facade.getEmberJSController().t(_a83);
}
return key;
},tReverse:function(_a85){
for(var lang in rabbit.common.i18n.translation){
for(var _a86 in rabbit.common.i18n.translation[lang]){
var _a87=rabbit.common.i18n.translation[lang][_a86];
if(_a87==_a85){
return _a86;
}
}
}
return null;
},tr:function(key,_a88){
var _a89=this.t(key);
for(var k in _a88){
_a89=_a89.replace(k,_a88[k]);
}
return _a89;
},translation:{}};
var t=rabbit.common.i18n.t;
var tr=rabbit.common.i18n.tr;
if(rabbit.common===undefined){
rabbit.common={};
}
rabbit.common.frames={keys:["smartphone","android7","ipad","android10","browser","desktop","custom"],orderArray:null,getFrameOrderNumber:function(_a8a,_a8b){
if(!this.orderArray){
this.orderArray=_.map(_.sortBy(_.map(this.keys,function(key){
return rabbit.common.frames[key];
}),function(_a8c){
return _a8c.name;
}),function(_a8d){
return _a8d.key;
});
}
return this.orderArray.indexOf(_a8a)+(_a8b==="landscape"?0.5:0);
},none:{offsetLeft:35,offsetTop:35,frameBorderLeft:0,frameBorderTop:0},smartphone:{name:t("plugins.frames.smartphone.name"),key:"smartphone",landscape:{offsetLeft:0,offsetTop:0,frameBorderLeft:124,frameBorderTop:31,innerWidth:640,innerHeight:360,defaultGrid:{numberOfColumns:4,maxWidth:640,gutterWidth:8,marginWidth:16}},portrait:{offsetLeft:0,offsetTop:0,frameBorderLeft:38,frameBorderTop:124,innerWidth:360,innerHeight:640,defaultGrid:{numberOfColumns:4,maxWidth:360,gutterWidth:8,marginWidth:16}}},android7:{name:t("plugins.frames.android7.name"),key:"android7",landscape:{offsetLeft:0,offsetTop:0,frameBorderLeft:139,frameBorderTop:59,innerWidth:1024,innerHeight:600,defaultGrid:{numberOfColumns:12,maxWidth:1024,gutterWidth:16,marginWidth:16}},portrait:{offsetLeft:0,offsetTop:0,frameBorderLeft:58,frameBorderTop:138,innerWidth:600,innerHeight:1024,defaultGrid:{numberOfColumns:12,maxWidth:600,gutterWidth:16,marginWidth:20}}},ipad:{name:t("plugins.frames.ipad.name"),key:"ipad",landscape:{offsetLeft:0,offsetTop:0,frameBorderLeft:148,frameBorderTop:59,innerWidth:1024,innerHeight:768,defaultGrid:{numberOfColumns:12,maxWidth:1024,gutterWidth:8,marginWidth:18}},portrait:{offsetLeft:0,offsetTop:0,frameBorderLeft:56,frameBorderTop:148,innerWidth:768,innerHeight:1024,defaultGrid:{numberOfColumns:12,maxWidth:768,gutterWidth:8,marginWidth:16}}},android10:{name:t("plugins.frames.android10.name"),key:"android10",landscape:{offsetLeft:0,offsetTop:0,frameBorderLeft:169,frameBorderTop:46,innerWidth:1280,innerHeight:800,defaultGrid:{numberOfColumns:12,maxWidth:1280,gutterWidth:16,marginWidth:18}},portrait:{offsetLeft:0,offsetTop:0,frameBorderLeft:46,frameBorderTop:168,innerWidth:800,innerHeight:1280,defaultGrid:{numberOfColumns:12,maxWidth:800,gutterWidth:16,marginWidth:18}}},browser:{name:t("plugins.frames.browser.name"),key:"browser",landscape:{offsetLeft:15,offsetTop:15,frameBorderLeft:18,frameBorderTop:52,innerWidth:1366,innerHeight:660,defaultGrid:{numberOfColumns:12,maxWidth:960,gutterWidth:30,marginWidth:15}}},desktop:{name:t("plugins.frames.desktop.name"),key:"desktop",landscape:{offsetLeft:0,offsetTop:0,frameBorderLeft:57,frameBorderTop:68,innerWidth:1366,innerHeight:768,defaultGrid:{numberOfColumns:12,maxWidth:1200,gutterWidth:30,marginWidth:15}}},custom:{name:t("plugins.frames.custom.name"),key:"custom",sideMinLength:50,custom:{offsetLeft:10,offsetTop:10,frameBorderLeft:56.3,frameBorderTop:56.3}},getInnerWidth:function(_a8e,_a8f){
if(rabbit.common.frames[_a8e]&&rabbit.common.frames[_a8e][_a8f]){
return rabbit.common.frames[_a8e][_a8f].innerWidth;
}
return null;
},getFirstMatchedFrame:function(_a90,_a91){
if(_a90||_a91){
for(var _a92 in this){
if(this[_a92].landscape&&this[_a92].landscape.innerWidth==_a90&&this[_a92].landscape.innerHeight==_a91){
return {frame:_a92,orientation:"landscape"};
}else{
if(this[_a92].portrait&&this[_a92].portrait.innerWidth==_a90&&this[_a92].portrait.innerHeight==_a91){
return {frame:_a92,orientation:"portrait"};
}
}
}
}
return {frame:"custom",orientation:"custom"};
},adjusteCustomFrame:function(_a93,_a94){
var _a95=56.3;
var _a96=103;
var _a97=9;
document.querySelector(".corner-top-right").setAttribute("transform","translate("+(_a93+_a97)+", 0)");
document.querySelector(".corner-bottom-left").setAttribute("transform","translate(0, "+(_a94+_a97)+")");
document.querySelector(".corner-bottom-right").setAttribute("transform","translate("+(_a93+_a97)+", "+(_a94+_a97)+")");
document.querySelector(".side-left").setAttribute("width",Math.max(_a95,0));
document.querySelector(".side-left").setAttribute("height",Math.max(_a94-_a96+_a97,0));
document.querySelector(".side-left").setAttribute("transform","translate(0, "+_a96+")");
document.querySelector(".side-top").setAttribute("width",Math.max(_a93-_a96+_a97,0));
document.querySelector(".side-top").setAttribute("height",Math.max(_a95,0));
document.querySelector(".side-top").setAttribute("transform","translate("+_a96+", 0)");
document.querySelector(".side-right").setAttribute("width",Math.max(_a95,0));
document.querySelector(".side-right").setAttribute("height",Math.max(_a94-_a96+_a97,0));
document.querySelector(".side-right").setAttribute("transform","translate("+(_a93+_a95-0.4)+", "+_a96+")");
document.querySelector(".side-bottom").setAttribute("width",Math.max(_a93-_a96+_a97,0));
document.querySelector(".side-bottom").setAttribute("height",Math.max(_a95,0));
document.querySelector(".side-bottom").setAttribute("transform","translate("+_a96+", "+(_a94+_a95-0.4)+")");
}};
if(!rabbit.common){
rabbit.common={};
}
if(!rabbit.common.prefsManager){
rabbit.common.prefsManager={};
}
rabbit.common.prefsManager={userDefaults:{},prototypeDefaults:{},userPrefPrefix:"userPrefs",isLocalStorageSupported:false,alternativeStorage:{},prototypeId:null,init:function(){
this.isLocalStorageSupported=rabbit.util.isLocalStorageSupported();
this.mergeUserPref(rabbit.parameters.userPrefs);
this.updatePrototypePref=_.debounce(this.doUpdatePrototypePref,500);
this.updateUserPref=_.debounce(this.doUpdateUserPref,500);
this.prototypeId=rabbit.parameters.id;
},registerUserPref:function(key,_a98){
this.userDefaults[key]=_a98;
},setUserPref:function(key,_a99){
var _a9a;
try{
_a9a=JSON.parse(localStorage.getItem(this.userPrefPrefix+key)).value;
}
catch(e){
_a9a=this.alternativeStorage[key];
}
if(_a9a!=_a99){
rabbit.parameters.userPrefs[key]=_a99;
if(this.isLocalStorageSupported){
localStorage.setItem(this.userPrefPrefix+key,JSON.stringify({value:_a99}));
}else{
this.alternativeStorage[key]=_a99;
}
if(!rabbit.parameters.isAnonymous){
this.updateUserPref(JSON.stringify(rabbit.parameters.userPrefs));
}
}
},doUpdateUserPref:function(data){
$.ajax({method:"post",url:rabbit.common.baseUrl+"repository/userprefs/update",data:{prefs:data}});
this.mergeUserPref(JSON.parse(data));
},getUserPref:function(key){
var _a9b;
try{
_a9b=JSON.parse(localStorage.getItem(this.userPrefPrefix+key)).value;
}
catch(e){
_a9b=this.alternativeStorage[key];
}
if(_a9b===undefined||_a9b===null){
this.setUserPref(key,this.userDefaults[key]);
_a9b=this.userDefaults[key];
}
return _a9b;
},mergeUserPref:function(_a9c){
_.extend(rabbit.parameters.userPrefs,_a9c);
for(var key in rabbit.parameters.userPrefs){
if(this.isLocalStorageSupported){
localStorage.setItem(this.userPrefPrefix+key,JSON.stringify({value:rabbit.parameters.userPrefs[key]}));
}else{
this.alternativeStorage[key]=rabbit.parameters.userPrefs[key];
}
}
},registerPrototypePref:function(key,_a9d){
this.prototypeDefaults[key]=_a9d;
},setPrototypePref:function(key,_a9e){
if(rabbit.parameters.prototypePrefs[key]!=_a9e){
rabbit.parameters.prototypePrefs[key]=_a9e;
this.updatePrototypePref(JSON.stringify(rabbit.parameters.prototypePrefs));
}
},getPrototypePref:function(key){
var _a9f=rabbit.parameters.prototypePrefs[key];
if((_a9f===undefined)||(_a9f===null)){
this.setPrototypePref(key,this.prototypeDefaults[key]);
}
return rabbit.parameters.prototypePrefs[key];
},doUpdatePrototypePref:function(data){
if(this.prototypeId){
$.ajax({method:"post",url:rabbit.common.baseUrl+"repository/prototype/"+this.prototypeId+"/prefs/update",data:{prefs:data}});
}
}};
if(rabbit.common===undefined){
rabbit.common={};
}
rabbit.common.fonticon={init:function(){
if(rabbit.facade&&rabbit.facade.isExport&&rabbit.facade.isExport()){
return;
}
$.ajax({url:rabbit.common.baseUrl+rabbit.util.appendVersionQuery("common/stencil-icons.svg"),method:"GET",success:function(data,_aa0,_aa1){
$(document).ready(function(){
var body=document.body;
body.insertBefore(data.firstChild,body.firstChild);
});
}});
}};
for(var key in rabbit.common){
if(typeof (rabbit.common[key].init)==="function"){
rabbit.common[key].init({lang:rabbit.parameters.lang});
}
}


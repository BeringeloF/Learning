var e,t,r,n,a,i,o,s,l,c,d,u,p,h,f,g,m,v,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},S=function(e){return e&&e.Math===Math&&e};k=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&self)||S("object"==typeof b&&b)||S("object"==typeof k&&k)||function(){return this}()||Function("return this")();var E={},L={};E=!(L=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var M={},$={};$=!L(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var x=Function.prototype.call;M=$?x.bind(x):function(){return x.apply(x,arguments)};var q={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;i=O&&!q.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:q;var j={};j=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var F={},I={},H={},T=Function.prototype,P=T.call,A=$&&T.bind.bind(P,P),R={},N=(H=$?A:function(e){return function(){return P.apply(e,arguments)}})({}.toString),D=H("".slice);R=function(e){return D(N(e),8,-1)};var C=Object,U=H("".split);I=L(function(){return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===R(e)?U(e,""):C(e)}:C;var W={},z={};z=function(e){return null==e};var B=TypeError;W=function(e){if(z(e))throw new B("Can't call method on "+e);return e},F=function(e){return I(W(e))};var G={},Q={},J={},Y={},V="object"==typeof document&&document.all;Y=void 0===V&&void 0!==V?function(e){return"function"==typeof e||e===V}:function(e){return"function"==typeof e},J=function(e){return"object"==typeof e?null!==e:Y(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=k[e],Y(r)?r:void 0):k[e]&&k[e][t]};var Z={};Z=H({}.isPrototypeOf);var ee={},et={},er={},en={};en="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ea=k.process,ei=k.Deno,eo=ea&&ea.versions||ei&&ei.version,es=eo&&eo.v8;es&&(s=(o=es.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!s&&en&&(!(o=en.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=en.match(/Chrome\/(\d+)/))&&(s=+o[1]),er=s;var el=k.String;ee=(et=!!Object.getOwnPropertySymbols&&!L(function(){var e=Symbol("symbol detection");return!el(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ec=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return Y(t)&&Z(t.prototype,ec(e))};var ed={},eu={},ep={},eh=String;ep=function(e){try{return eh(e)}catch(e){return"Object"}};var ef=TypeError;eu=function(e){if(Y(e))return e;throw new ef(ep(e)+" is not a function")},ed=function(e,t){var r=e[t];return z(r)?void 0:eu(r)};var eg={},em=TypeError;eg=function(e,t){var r,n;if("string"===t&&Y(r=e.toString)&&!J(n=M(r,e))||Y(r=e.valueOf)&&!J(n=M(r,e))||"string"!==t&&Y(r=e.toString)&&!J(n=M(r,e)))return n;throw new em("Can't convert object to primitive value")};var ev={},ey={},eb={};eb=!1;var e_={},ew=Object.defineProperty;e_=function(e,t){try{ew(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var ek="__core-js_shared__",eS=ey=k[ek]||e_(ek,{});(eS.versions||(eS.versions=[])).push({version:"3.36.1",mode:eb?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",source:"https://github.com/zloirock/core-js"}),ev=function(e,t){return ey[e]||(ey[e]=t||{})};var eE={},eL={},eM=Object;eL=function(e){return eM(W(e))};var e$=H({}.hasOwnProperty);eE=Object.hasOwn||function(e,t){return e$(eL(e),t)};var ex={},eq=0,eO=Math.random(),ej=H(1..toString);ex=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ej(++eq+eO,36)};var eF=k.Symbol,eI=ev("wks"),eH=ee?eF.for||eF:eF&&eF.withoutSetter||ex,eT=TypeError,eP=(eE(eI,e="toPrimitive")||(eI[e]=et&&eE(eF,e)?eF[e]:eH("Symbol."+e)),eI[e]);Q=function(e,t){if(!J(e)||K(e))return e;var r,n=ed(e,eP);if(n){if(void 0===t&&(t="default"),r=M(n,e,t),!J(r)||K(r))return r;throw new eT("Can't convert object to primitive value")}return void 0===t&&(t="number"),eg(e,t)},G=function(e){var t=Q(e,"string");return K(t)?t:t+""};var eA={},eR={},eN=k.document,eD=J(eN)&&J(eN.createElement);eR=function(e){return eD?eN.createElement(e):{}},eA=!E&&!L(function(){return 7!==Object.defineProperty(eR("div"),"a",{get:function(){return 7}}).a});var eC=Object.getOwnPropertyDescriptor;a=E?eC:function(e,t){if(e=F(e),t=G(t),eA)try{return eC(e,t)}catch(e){}if(eE(e,t))return j(!M(i,e,t),e[t])};var eU={},eW={};eW=E&&L(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ez={},eB=String,eG=TypeError;ez=function(e){if(J(e))return e;throw new eG(eB(e)+" is not an object")};var eQ=TypeError,eJ=Object.defineProperty,eY=Object.getOwnPropertyDescriptor,eV="enumerable",eK="configurable",eX="writable";l=E?eW?function(e,t,r){if(ez(e),t=G(t),ez(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eX in r&&!r[eX]){var n=eY(e,t);n&&n[eX]&&(e[t]=r.value,r={configurable:eK in r?r[eK]:n[eK],enumerable:eV in r?r[eV]:n[eV],writable:!1})}return eJ(e,t,r)}:eJ:function(e,t,r){if(ez(e),t=G(t),ez(r),eA)try{return eJ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eU=E?function(e,t,r){return l(e,t,j(1,r))}:function(e,t,r){return e[t]=r,e};var eZ={},e0={},e1=Function.prototype,e2=E&&Object.getOwnPropertyDescriptor,e3=eE(e1,"name")&&(!E||E&&e2(e1,"name").configurable),e4={},e7=H(Function.toString);Y(ey.inspectSource)||(ey.inspectSource=function(e){return e7(e)}),e4=ey.inspectSource;var e6={},e5={},e8=k.WeakMap;e5=Y(e8)&&/native code/.test(String(e8));var e9={},te=ev("keys");e9=function(e){return te[e]||(te[e]=ex(e))};var tt={};tt={};var tr="Object already initialized",tn=k.TypeError,ta=k.WeakMap;if(e5||ey.state){var ti=ey.state||(ey.state=new ta);ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,c=function(e,t){if(ti.has(e))throw new tn(tr);return t.facade=e,ti.set(e,t),t},d=function(e){return ti.get(e)||{}},u=function(e){return ti.has(e)}}else{var to=e9("state");tt[to]=!0,c=function(e,t){if(eE(e,to))throw new tn(tr);return t.facade=e,eU(e,to,t),t},d=function(e){return eE(e,to)?e[to]:{}},u=function(e){return eE(e,to)}}var ts=(e6={set:c,get:d,has:u,enforce:function(e){return u(e)?d(e):c(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=d(t)).type!==e)throw new tn("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e6.get,tc=String,tu=Object.defineProperty,tp=H("".slice),th=H("".replace),tf=H([].join),tg=E&&!L(function(){return 8!==tu(function(){},"length",{value:8}).length}),tm=String(String).split("String"),tv=e0=function(e,t,r){"Symbol("===tp(tc(t),0,7)&&(t="["+th(tc(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e3&&e.name!==t)&&(E?tu(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&eE(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?E&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ts(e);return eE(n,"source")||(n.source=tf(tm,"string"==typeof t?t:"")),e};Function.prototype.toString=tv(function(){return Y(this)&&tl(this).source||e4(this)},"toString"),eZ=function(e,t,r,n){n||(n={});var a=n.enumerable,i=void 0!==n.name?n.name:t;if(Y(r)&&e0(r,i,n),n.global)a?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(a=!0):delete e[t]}catch(e){}a?e[t]=r:l(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var ty={},tb={},t_={},tw={},tk={},tS={},tE=Math.ceil,tL=Math.floor;tS=Math.trunc||function(e){var t=+e;return(t>0?tL:tE)(t)},tk=function(e){var t=+e;return t!=t||0===t?0:tS(t)};var tM=Math.max,t$=Math.min;tw=function(e,t){var r=tk(e);return r<0?tM(r+t,0):t$(r,t)};var tx={},tq={},tO=Math.min;tq=function(e){var t=tk(e);return t>0?tO(t,9007199254740991):0},tx=function(e){return tq(e.length)};var tj=function(e){return function(t,r,n){var a,i=F(t),o=tx(i);if(0===o)return!e&&-1;var s=tw(n,o);if(e&&r!=r){for(;o>s;)if((a=i[s++])!=a)return!0}else for(;o>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},tF={includes:tj(!0),indexOf:tj(!1)}.indexOf,tI=H([].push);t_=function(e,t){var r,n=F(e),a=0,i=[];for(r in n)!eE(tt,r)&&eE(n,r)&&tI(i,r);for(;t.length>a;)eE(n,r=t[a++])&&(~tF(i,r)||tI(i,r));return i};var tH=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return t_(e,tH)},h=Object.getOwnPropertySymbols;var tT=H([].concat);tb=X("Reflect","ownKeys")||function(e){var t=p(ez(e));return h?tT(t,h(e)):t},ty=function(e,t,r){for(var n=tb(t),i=0;i<n.length;i++){var o=n[i];eE(e,o)||r&&eE(r,o)||l(e,o,a(t,o))}};var tP={},tA=/#|\.prototype\./,tR=function(e,t){var r=tD[tN(e)];return r===tU||r!==tC&&(Y(t)?L(t):!!t)},tN=tR.normalize=function(e){return String(e).replace(tA,".").toLowerCase()},tD=tR.data={},tC=tR.NATIVE="N",tU=tR.POLYFILL="P";tP=tR,w=function(e,t){var r,n,i,o,s,l=e.target,c=e.global,d=e.stat;if(r=c?k:d?k[l]||e_(l,{}):k[l]&&k[l].prototype)for(n in t){if(o=t[n],i=e.dontCallGetSet?(s=a(r,n))&&s.value:r[n],!tP(c?n:l+(d?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;ty(o,i)}(e.sham||i&&i.sham)&&eU(o,"sham",!0),eZ(r,n,o,e)}};var tW={},tz={},tB=Function.prototype,tG=tB.apply,tQ=tB.call;tz="object"==typeof Reflect&&Reflect.apply||($?tQ.bind(tG):function(){return tQ.apply(tG,arguments)});var tJ={},tY={},tV=(tY=function(e){if("Function"===R(e))return H(e)})(tY.bind);tJ=function(e,t){return eu(e),void 0===t?e:$?tV(e,t):function(){return e.apply(t,arguments)}};var tK={};tK=X("document","documentElement");var tX={};tX=H([].slice);var tZ={},t0=TypeError;tZ=function(e,t){if(e<t)throw new t0("Not enough arguments");return e};var t1={};t1=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t2={};t2="process"===R(k.process);var t3=k.setImmediate,t4=k.clearImmediate,t7=k.process,t6=k.Dispatch,t5=k.Function,t8=k.MessageChannel,t9=k.String,re=0,rt={},rr="onreadystatechange";L(function(){f=k.location});var rn=function(e){if(eE(rt,e)){var t=rt[e];delete rt[e],t()}},ra=function(e){return function(){rn(e)}},ri=function(e){rn(e.data)},ro=function(e){k.postMessage(t9(e),f.protocol+"//"+f.host)};t3&&t4||(t3=function(e){tZ(arguments.length,1);var t=Y(e)?e:t5(e),r=tX(arguments,1);return rt[++re]=function(){tz(t,void 0,r)},g(re),re},t4=function(e){delete rt[e]},t2?g=function(e){t7.nextTick(ra(e))}:t6&&t6.now?g=function(e){t6.now(ra(e))}:t8&&!t1?(v=(m=new t8).port2,m.port1.onmessage=ri,g=tJ(v.postMessage,v)):k.addEventListener&&Y(k.postMessage)&&!k.importScripts&&f&&"file:"!==f.protocol&&!L(ro)?(g=ro,k.addEventListener("message",ri,!1)):g=rr in eR("script")?function(e){tK.appendChild(eR("script"))[rr]=function(){tK.removeChild(this),rn(e)}}:function(e){setTimeout(ra(e),0)});var rs=(tW={set:t3,clear:t4}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==rs},{clearImmediate:rs});var rl=tW.set,rc={},rd={};rd="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ru=k.Function,rp=/MSIE .\./.test(en)||rd&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rc=function(e,t){var r=t?2:1;return rp?function(n,a){var i=tZ(arguments.length,1)>r,o=Y(n)?n:ru(n),s=i?tX(arguments,r):[],l=i?function(){tz(o,this,s)}:o;return t?e(l,a):e(l)}:e};var rh=k.setImmediate?rc(rl,!1):rl;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rh},{setImmediate:rh});const rf="https://forkify-api.herokuapp.com/api/v2/recipes/",rg="ec726e47-ddc8-480b-8a43-b24e56b4f804",rm=async function(e,t=""){try{let r=fetch(e);""!==t&&(r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));let n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),a=await n.json();if(!n.ok)throw Error(`${a.message} ${n.status}`);return a}catch(e){throw e}},rv={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[],shoppingList:[],days:[],weaklyMeal:[]},ry=function(e){let t={bookmark:rv.bookmarks,shoplist:rv.shoppingList,calendar:rv.weaklyMeal};localStorage.setItem(`${e}`,JSON.stringify(t[e]))},rb=function(e,t){let r=rv.weaklyMeal.findIndex(r=>r.id===e&&t===r.days[0]);rv.weaklyMeal.splice(r,1),ry("calendar")},r_=function(e,t){console.log(t);let r=e.markedDays.map((e,r)=>t.some(e=>e===r)?[e[0],!0]:[e[0],!1]);if(console.log(r),rv.recipe.markedDays=[...r],!r.some(e=>e[1]))return;let n={title:e.title,id:e.id,days:[...r.filter(e=>e[1]).map(e=>e[0]).slice(-1)],index:[...t]};rv.weaklyMeal.some(e=>JSON.stringify(e)===JSON.stringify(n))||(rv.weaklyMeal.push(n),ry("calendar"))};!function(){let e=new Date,t=[];for(let r=0;r<7;r++){let n=new Date(e.getFullYear(),e.getMonth(),e.getDate()+r);t.push([n.getDate()])}console.log(rv.days),rv.dates=[...t],console.log(rv)}();const rw=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,serving:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rk=async function(e){try{let t=await rm(`${rf}${e}?key=${rg}`);if(rv.recipe=rw(t),rv.bookmarks.some(t=>t.id===e)?rv.recipe.bookmarked=!0:rv.recipe.bookmarked=!1,rv.shoppingList.some(t=>t.id===e)?rv.recipe.addedShopList=!0:rv.recipe.addedShopList=!1,rv.recipe.markedDays=[...rv.dates],rv.weaklyMeal.some(t=>t.id===e)){console.log("foi salvo");let t=rv.weaklyMeal.filter(t=>t.id===e).slice(-1);console.log(t[0]),r_(rv.recipe,t[0].index)}else r_(rv.recipe,[]);console.log(rv.weaklyMeal),console.log(rv.recipe.markedDays)}catch(e){throw e}},rS=async function(e){try{rv.search.query=e;let t=await rm(`${rf}?search=${e}&key=${rg}`);rv.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rv.search.page=1}catch(e){throw console.log(e),e}},rE=function(e=rv.search.page){rv.search.page=e;let t=(e-1)*rv.search.resultsPerPage,r=e*rv.search.resultsPerPage;return rv.search.results.slice(t,r)},rL=function(e){rv.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rv.recipe.serving}),rv.recipe.serving=e},rM=function(e){rv.bookmarks.push(e),e.id===rv.recipe.id&&(rv.recipe.bookmarked=!0),ry("bookmark")},r$=function(e){rv.shoppingList.push(e),e.id===rv.recipe.id&&(rv.recipe.addedShopList=!0),ry("shoplist")},rx=function(e){let t=rv.shoppingList.findIndex(t=>t.id===e);rv.shoppingList.splice(t,1),e===rv.recipe.id&&(rv.recipe.addedShopList=!1),ry("shoplist")},rq=function(e){let t=rv.bookmarks.findIndex(t=>t.id===e);rv.bookmarks.splice(t,1),e===rv.recipe.id&&(rv.recipe.bookmarked=!1),ry("bookmark")};!function(){let e=localStorage.getItem("bookmark"),t=localStorage.getItem("shoplist"),r=localStorage.getItem("calendar");e&&(rv.bookmarks=JSON.parse(e)),t&&(rv.shoppingList=JSON.parse(t)),r&&(rv.weaklyMeal=JSON.parse(r)),console.log(rv.shoppingList)}(),console.log(rv.bookmarks);const rO=async function(e){try{console.log(Object.entries(e));let t=Object.entries(e).slice(6).map((e,t,r)=>{if(e[0].startsWith("ingredient")&&""!=e[1]){let n=e[1].trim(),a=r[t+1][1],i=r[t+2][1];return console.log(n,a,i),{quantity:a?+a:null,unit:i,description:n}}}).filter(e=>void 0!==e);if(0===t.length)throw Error("Ingredient field shoud not be empty!");let r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t};console.log(r);let n=await rm(`${rf}?key=${rg}`,r);console.log(n),rv.recipe=rw(n),rM(rv.recipe),r_(rv.recipe,[])}catch(e){throw e}};var rj={};rj=new URL("icons.c14567a0.svg",import.meta.url).toString();class rF{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();console.log(this),this._data=e;let r=this._generateMarkup();if(!t)return r;console.log(this,t),this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentEl.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentEl.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
            <svg>
              <use href="${_(rj)}#icon-loader"></use>
            </svg>
        </div>'`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMsg){let t=`
        <div class="error">
            <div>
              <svg>
                <use href="${_(rj)}icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
        <div class="message">
            <div>
              <svg>
                <use href="${_(rj)}icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}var rI={};rI=new URL("shopping.37fcdd1f.png",import.meta.url).toString();var rH={};rH=new URL("added.65b07e3a.png",import.meta.url).toString(),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,a=num.split(" ");if(a[0]&&(r=a[0]),a[1]&&(n=a[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var i=r.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var a=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=a,this.denominator/=a,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),a=Fraction.primeFactors(t);return(n.forEach(function(e){var t=a.indexOf(e);t>=0&&(r.push(e),a.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},console.log(y=Fraction);class rT extends rF{_parentEl=document.querySelector(".recipe");_errorMsg="We could not find that recipe, please try another one";_message="";_add=this._parentEl.querySelector(".add-ing");_added=this._parentEl.querySelector(".added");addHandlerRender(e){["hashchange","load"].forEach(t=>{window.addEventListener(t,e)})}addHandlerUpdateServings(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddIng(e){this._parentEl.addEventListener("click",function(t){t.target.classList.contains("add-ing")&&(console.log("shopping"),e(),t.target.classList.add("clicked"))})}addHandlerAddBookmark(e){this._parentEl.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}addHandlerRenderDays(e){let t=[...this._parentEl.querySelectorAll(".day")];console.log(e),t.forEach((t,r)=>{t.textContent=e[r][0],e[r][1]&&t.classList.add("day-clicked")})}addHandlerShowDaysRecipe(e){this._parentEl.addEventListener("click",function(t){t.target.classList.contains("assign")&&(this.querySelector(".calendar-pre").classList.toggle("no-display"),e())})}addHandlerAssignRecipe(e){this._parentEl.addEventListener("click",function(t){let r=t.target;if(!r.classList.contains("day"))return;r.classList.toggle("day-clicked");let n=r.classList.contains("day-clicked")?void 0:+r.textContent,a=[...this.querySelectorAll(".day")].map((e,t)=>{if(e.classList.contains("day-clicked"))return t});console.log(a),e(a,n)})}_generateMarkup(){return console.log(this._data.addedShopList),`
    <figure class="recipe__fig">
    <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
  ${this._data.addedShopList?`<img src="${_(rH)}" class="added add-ing" alt="added to shopping list icon">`:`<img src="${_(rI)}" class="add-ing" alt="add to shopping list icon"></img>`}
  
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${_(rj)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${_(rj)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.serving}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.serving-1}">
          <svg>
            <use href="${_(rj)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.serving+1}">
          <svg>
            <use href="${_(rj)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
     
    </div>
    
   
    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
    <svg>
    <use href="${_(rj)}#icon-user"></use>
  </svg>
    </div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${_(rj)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
    
  
  </div>
  <span class="assign ">Assign recipe to weakly meal</span>
  <div class="calendar-pre no-display">
   <span class="day day-1">1</span>
   <span class="day day-2">2</span>
   <span class="day day-3">3</span>
   <span class="day day-4">4</span>
   <span class="day day-5">5</span>
   <span class="day day-6">6</span>
   <span class="day day-7">7</span>
  </div>
  
  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map(this._generateMarkupIng).join("")}
      

     
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${_(rj)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`}_generateMarkupIng(e){return`

    <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${_(rj)}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${e.unit}</span>
      ${e.description}
    </div>
  </li>
    `}}var rP=new rT;class rA{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this.#e(),e}#e(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rR=new rA,rN=new class extends rF{_parentEl="";_generateMarkup(){let e=window.location.hash.slice(1);return`
    <li class="preview">
        <a class="preview__link ${e===this._data.id?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
            <svg>
            <use href="${_(rj)}#icon-user"></use>
          </svg>
            </div>
          </div>
        </a>
    </li>
`}};class rD extends rF{_parentEl=document.querySelector(".results");_errorMsg="No recipes found for that query, please try again!";_message="";_generateMarkup(){return this._data.map(e=>rN.render(e,!1)).join("")}}var rC=new rD;class rU extends rF{_parentEl=document.querySelector(".pagination");addHandlerClick(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;console.log(n),e(n)})}_generateMarkup(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage),t=this._data.page;return 1===t&&e>1?this._generateBtnMarkup("next",t,e):t<e?`
      ${this._generateBtnMarkup("prev",t,e)}
      ${this._generateBtnMarkup("next",t,e)}
    `:t===e&&e>1?this._generateBtnMarkup("prev",t,e):""}_generateBtnMarkup(e,t,r){let n=`<span class="total-pages">currently on page ${t} of ${r}</span>`;return"prev"===e?`<button data-goto ="${t-1}" class="btn--inline pagination__btn--prev">
  <svg class="search__icon">
    <use href="${_(rj)}#icon-arrow-left"></use>
  </svg>
  <span>Page ${t-1}</span>
</button>
${t===r?n:""}
 `:`${t<r?n:""}<button data-goto ="${t+1}" class="btn--inline pagination__btn--next">
    <span>Page ${t+1}</span>
    <svg class="search__icon">
      <use href="${_(rj)}#icon-arrow-right"></use>
    </svg>
  </button>
  `}}var rW=new rU;class rz extends rF{_parentEl=document.querySelector(".bookmarks__list");_errorMsg="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return console.log("COMO"),this._data.map(e=>rN.render(e,!1)).join("")}}var rB=new rz;class rG extends rF{_parentEl=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_message="Recipe was succesfully uploaded";_urlErrorMsg="This field must be at least five caracteres long!";_ingErrorMsg="Wrong ingredient format!, please use the correct format!";_ingParent=document.querySelector(".upload__column");_btnAddIng=document.querySelector(".btn-add_ing");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHiddenWindow(),this._overlay.addEventListener("click",this.toggleWindow.bind(this)),this._btnAddIng.addEventListener("click",this._addMoreIng.bind(this))}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden"),this._window.classList.contains("hidden")||this._parentEl.addEventListener("click",this.addHandlerToAddHandler.bind(this))}removeMsgOrErr(){(this._parentEl.querySelector(".message")?this._parentEl.querySelector(".message"):this._parentEl.querySelector(".error"))&&(this._parentEl.innerHTML="",this._window.classList.contains("hidden")||this.toggleWindow(),this._generateMarkup())}_generateMarkup(){let e=`
   
    <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST11" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST11" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST11" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST11" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <!-- Ingrediente 1 -->
<label>Ingredient 1</label>
<input
  type="text"
  name="ingredient-1"
  data-ing="1"
/>

<label class="hidden-form form-to-add" data-label="1">Quantity</label>
<input type="number" name="quantity-1" data-qt="1" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="1">Unit</label>
<input
  type="text"
  name="unit-1"
  data-unit="1"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>

<!-- Ingrediente 2 -->
<label>Ingredient 2</label>
<input
  type="text"
  name="ingredient-2"
  data-ing="2"
/>

<label class="hidden-form form-to-add" data-label="2">Quantity</label>
<input type="number" name="quantity-2" data-qt="2" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="2">Unit</label>
<input
  type="text"
  name="unit-2"
  data-unit="2"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>

<!-- Ingrediente 3 -->
<label>Ingredient 3</label>
<input
  type="text"
  name="ingredient-3"
  data-ing="3"
/>

<label class="hidden-form form-to-add" data-label="3">Quantity</label>
<input type="number" name="quantity-3" data-qt="3" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="3">Unit</label>
<input
  type="text"
  name="unit-3"
  data-unit="3"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>

<!-- Ingrediente 4 -->
<label>Ingredient 4</label>
<input
  type="text"
  name="ingredient-4"
  data-ing="4"
/>

<label class="hidden-form form-to-add" data-label="4">Quantity</label>
<input type="number" name="quantity-4" data-qt="4" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="4">Unit</label>
<input
  type="text"
  name="unit-4"
  data-unit="4"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>

<!-- Ingrediente 5 -->
<label>Ingredient 5</label>
<input
  type="text"
  name="ingredient-5"
  data-ing="5"
/>

<label class="hidden-form form-to-add" data-label="5">Quantity</label>
<input type="number" name="quantity-5" data-qt="5" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="5">Unit</label>
<input
  type="text"
  name="unit-5"
  data-unit="5"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>

<!-- Ingrediente 6 -->
<label>Ingredient 6</label>
<input
  type="text"
  name="ingredient-6"
  data-ing="6"
/>

<label class="hidden-form form-to-add" data-label="6">Quantity</label>
<input type="number" name="quantity-6" data-qt="6" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="6">Unit</label>
<input
  type="text"
  name="unit-6"
  data-unit="6"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>


          <button type="button" class="btn btn-add_ing">Add more ingredients</button>
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="src/img/icons.svg#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
    `;this._parentEl.insertAdjacentHTML("afterbegin",e)}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHiddenWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault();let r=document.querySelector(".upload").querySelectorAll("input[data-ing]");if(console.log("fdiunfh"),[...r].every(e=>""===e.value)){r[0].placeholder="Please specify at least one ingredient for the recipe.",console.log("foi");return}e(Object.fromEntries([...new FormData(t.target)]))})}addHandlerToAddHandler(e){if("INPUT"!==e.target.tagName)return;let t=e.target;if(t.addEventListener("blur",this.addHandlerCheckForm.bind(this)),!t.name.startsWith("ingredient"))return;this._parentEl.querySelectorAll(".form-to-add").forEach(e=>e.classList.add("hidden-form"));let r=t.dataset.ing,n=this._parentEl.querySelectorAll(`[data-label="${r}"]`),a=this._parentEl.querySelector(`[data-unit="${r}"]`),i=this._parentEl.querySelector(`[data-qt="${r}"]`);a.classList.remove("hidden-form"),i.classList.remove("hidden-form"),n.forEach(e=>e.classList.remove("hidden-form"))}addHandlerCheckForm(e){console.log("foi chamado");let t=e.target;console.log(t),("sourceUrl"===t.name||"image"===t.name)&&t.value.length<5&&(t.value="",t.placeholder=this._urlErrorMsg)}_addMoreIng(){let e=[...this._parentEl.querySelectorAll("[data-label]")].slice(-1)[0].dataset.label,t=this._parentEl.querySelector(`[data-unit="${e}"]`),r=`
    <label>Ingredient ${+e+1}</label>
<input
  type="text"

  name="ingredient"
  data-ing="${+e+1}"
/>

<label class="hidden-form form-to-add" data-label="${+e+1}">Quantity</label>
<input type="number" name="quantity" data-qt="${+e+1}" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="${+e+1}">Unit</label>
<input
  type="text"
  
  name="unit"
  data-unit="${+e+1}"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>
         `;t.insertAdjacentHTML("afterend",r)}}var rQ=new rG,rJ={};rJ=new URL("delete.a8b832f6.png",import.meta.url).toString();class rY extends rF{_parentEl=document.querySelector(".recipe");_btnAdd=document.querySelector(".btn-add__shopping");_errorMsg="No ingredients have been added to the shopping list yet.";addHandlerShowShopList(e){this._btnAdd.addEventListener("click",e)}addHandlerDeleteIngList(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn-delete__shopping");if(!r)return;let n=r.closest(".shop-item").dataset.id;console.log(n),e(n)})}_generateMarkup(){let e="";return console.log(this._data),this._data.forEach(t=>{e+=`
      <div class="shop-item" data-id="${t.id}">
        <ul class="recipe__ingredients">
        <li class="recipe__ingredient">
        <div>
        <a class="remove-default" href="#${t.id}">
            <h2 class="heading--2">${t.title}</h2>
        </a>
            <ul>
            ${t.ingredients.map(this._generateIgn).join("")}
            </ul>
        </div>
       
      </li>
      <ul>
      <button class=" btn-delete__shopping">
       <img src="${_(rJ)}">
     
       </button>
    </div>
      `}),e}_generateIgn(e){return`
    <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${_(rj)}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${e.quantity?e.quantity:""}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${e.unit}</span>
      ${e.description}
    </div>
  </li>
     `}}var rV=new rY;class rK extends rF{_parentEl=document.querySelector(".calendar__top");addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){console.log(this._data);let e=this._data.map(e=>this.generateDaysMarkup(e.days,e.title,e.id)).join("");return`
    <div>
    ${e}
   </div>
        `}generateDaysMarkup(e,t,r){return e.map(e=>` <div class=divspan">
    <span class="dspan">Dia ${e}</span> <a href="#${r}" class="heading--2 remove-default">${t}<a/>
    </div>
           `).join("")}}var rX=new rK,rZ=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function d(e,r,n,i){var o,s,l=Object.create((r&&r.prototype instanceof m?r:m).prototype);return a(l,"_invoke",{value:(o=new $(i||[]),s=p,function(r,a){if(s===h)throw Error("Generator is already running");if(s===f){if("throw"===r)throw a;return{value:t,done:!0}}for(o.method=r,o.arg=a;;){var i=o.delegate;if(i){var l=function e(r,n){var a=n.method,i=r.iterator[a];if(i===t)return n.delegate=null,"throw"===a&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==a&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+a+"' method")),g;var o=u(i,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(i,o);if(l){if(l===g)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===p)throw s=f,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=h;var c=u(e,n,o);if("normal"===c.type){if(s=o.done?f:"suspendedYield",c.arg===g)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(s=f,o.method="throw",o.arg=c.arg)}})}),l}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=d;var p="suspendedStart",h="executing",f="completed",g={};function m(){}function v(){}function y(){}var b={};c(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==r&&n.call(w,o)&&(b=w);var k=y.prototype=m.prototype=Object.create(b);function S(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;a(this,"_invoke",{value:function(a,i){function o(){return new t(function(r,o){!function r(a,i,o,s){var l=u(e[a],e,i);if("throw"===l.type)s(l.arg);else{var c=l.arg,d=c.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(d).then(function(e){c.value=e,o(c)},function(e){return r("throw",e,o,s)})}}(a,i,r,o)})}return r=r?r.then(o,o):o()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function x(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw TypeError(typeof e+" is not iterable")}return v.prototype=y,a(k,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:v,configurable:!0}),v.displayName=c(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},S(E.prototype),c(E.prototype,s,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new E(d(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},S(k),c(k,l,"Generator"),c(k,o,function(){return this}),c(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else if(c){if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return(o.type=e,o.arg=t,i)?(this.method="next",this.next=i.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;M(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:x(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rZ}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rZ:Function("r","regeneratorRuntime = r")(rZ)}const r0=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rP.renderSpinner(),rC.update(rE()),await rk(e),console.log(rv.recipe),rP.render(rv.recipe),rB.update(rv.bookmarks)}catch(e){rP.renderError(),console.error(e)}},r1=async function(){try{rC.renderSpinner();let e=rR.getQuery();if(!e)return;await rS(e),console.log(rv.search.results),rC.render(rE()),rW.render(rv.search)}catch(e){console.error(e)}};controlAddBookmark=function(){rv.recipe.bookmarked?rv.recipe.bookmarked&&rq(rv.recipe.id):rM(rv.recipe),rP.update(rv.recipe),rB.render(rv.bookmarks)};const r2=async function(e){try{rQ.renderSpinner(),await rO(e),console.log(rv.recipe),rP.render(rv.recipe),rB.render(rv.bookmarks),rQ.renderMessage(),window.history.pushState(null,"",`#${rv.recipe.id}`),setTimeout(function(){rQ.removeMsgOrErr()},2500)}catch(e){console.error("err",e),rQ.renderError(e.message),setTimeout(function(){rQ.removeMsgOrErr()},2500)}};rB.addHandlerRender(function(){rB.render(rv.bookmarks)}),rX.addHandlerRender(function(){rX.render(rv.weaklyMeal)}),rV.addHandlerShowShopList(function(){console.log(rv.shoppingList),window.location.hash="",rV.render(rv.shoppingList)}),rP.addHandlerRender(r0),rP.addHandlerUpdateServings(function(e){rL(e),rP.update(rv.recipe)}),rP.addHandlerAddBookmark(controlAddBookmark),rR.addHandlerSearch(r1),rW.addHandlerClick(function(e){rC.render(rE(e)),rW.render(rv.search)}),rQ.addHandlerUpload(r2),rP.addHandlerAddIng(function(){console.log(rv.recipe.addedShopList),rv.recipe.addedShopList?rv.recipe.addedShopList&&rx(rv.recipe.id):r$(rv.recipe),rP.update(rv.recipe)}),rV.addHandlerDeleteIngList(function(e){rx(e),rV.render(rv.shoppingList)}),rP.addHandlerShowDaysRecipe(function(){rP.addHandlerRenderDays(rv.recipe.markedDays)}),rP.addHandlerAssignRecipe(function(e,t){t?rb(rv.recipe.id,t):r_(rv.recipe,e),rX.render(rv.weaklyMeal)});
//# sourceMappingURL=index.d9060afc.js.map

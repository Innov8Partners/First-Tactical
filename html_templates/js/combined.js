/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});

/*!
 * JQuery 1.11.2
 */
(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
    return factory(w);};}else{factory(global);}}(typeof window!=="undefined"?window:this,function(window,noGlobal){var deletedIds=[];var slice=deletedIds.slice;var concat=deletedIds.concat;var push=deletedIds.push;var indexOf=deletedIds.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var
    version="1.11.2",jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,selector:"",length:0,toArray:function(){return slice.call(this);},get:function(num){return num!=null?(num<0?this[num+this.length]:this[num]):slice.call(this);},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor(null);},push:push,sort:deletedIds.sort,splice:deletedIds.splice};jQuery.extend=jQuery.fn.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
    if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
    if(i===length){target=this;i--;}
    for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
        if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
            target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
    return target;};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function(obj){return obj!=null&&obj==obj.window;},isNumeric:function(obj){return!jQuery.isArray(obj)&&(obj-parseFloat(obj)+1)>=0;},isEmptyObject:function(obj){var name;for(name in obj){return false;}
    return true;},isPlainObject:function(obj){var key;if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
    try{if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){return false;}
    if(support.ownLast){for(key in obj){return hasOwn.call(obj,key);}}
    for(key in obj){}
    return key===undefined||hasOwn.call(obj,key);},type:function(obj){if(obj==null){return obj+"";}
    return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;},globalEval:function(data){if(data&&jQuery.trim(data)){(window.execScript||function(data){window["eval"].call(window,data);})(data);}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break;}}}else{for(i in obj){value=callback.apply(obj[i],args);if(value===false){break;}}}}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}}
    return obj;},trim:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
    return ret;},inArray:function(elem,arr,i){var len;if(arr){if(indexOf){return indexOf.call(arr,elem,i);}
    len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i;}}}
    return-1;},merge:function(first,second){var len=+second.length,j=0,i=first.length;while(j<len){first[i++]=second[j++];}
    if(len!==len){while(second[j]!==undefined){first[i++]=second[j++];}}
    first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
    return matches;},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}
    return concat.apply([],ret);},guid:1,proxy:function(fn,context){var args,proxy,tmp;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
    if(!jQuery.isFunction(fn)){return undefined;}
    args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:function(){return+(new Date());},support:support});jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}
    if(obj.nodeType===1&&length){return true;}
    return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
    var Sizzle=(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
        return 0;},MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}
        return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),attributes="\\["+whitespace+"*("+characterEncoding+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+characterEncoding+")"),"CLASS":new RegExp("^\\.("+characterEncoding+")"),"TAG":new RegExp("^("+characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},unloadHandler=function(){setDocument();};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
        target.length=j-1;}};}
        function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
            context=context||document;results=results||[];nodeType=context.nodeType;if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
            if(!seed&&documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
                if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;newContext=context;newSelector=nodeType!==1&&selector;if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&");}else{context.setAttribute("id",nid);}
                    nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i]);}
                    newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;newSelector=groups.join(",");}
                    if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(!old){context.removeAttribute("id");}}}}}
            return select(selector.replace(rtrim,"$1"),context,results,seed);}
        function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()];}
            return(cache[key+" "]=value);}
            return cache;}
        function markFunction(fn){fn[expando]=true;return fn;}
        function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{if(div.parentNode){div.parentNode.removeChild(div);}
            div=null;}}
        function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
        function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff;}
            if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
            return a?1:-1;}
        function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
        function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
        function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
        function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
        support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
            document=doc;docElem=doc.documentElement;parent=doc.defaultView;if(parent&&parent!==parent.top){if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false);}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}}
            documentIsHTML=!isXML(doc);support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");});support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));return!div.getElementsByTagName("*").length;});support.getElementsByClassName=rnative.test(doc.getElementsByClassName);support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!doc.getElementsByName||!doc.getElementsByName(expando).length;});if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m&&m.parentNode?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}
            Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
                return tmp;}
                return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(doc.querySelectorAll))){assert(function(div){docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\f]' msallowcapture=''>"+"<option selected=''></option></select>";if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
                if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
                if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}
                if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
                if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}
                if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}
                div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
            if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
            rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
                return false;};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;return 0;}
                var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}
                compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===doc||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}
                    if(b===doc||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}
                    return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}
                return compare&4?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}
                var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
                cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
                cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
                while(ap[i]===bp[i]){i++;}
                return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return doc;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
            expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
            return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
            return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
            var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
            while(j--){results.splice(duplicates[j],1);}}
            sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
            return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
            return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
            match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
            return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
            if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
            return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
            if(!operator){return true;}
            result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
            start=dir=type==="only"&&!start&&"nextSibling";}
            return true;}
            start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break;}}}else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1];}else{while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff];}
                if(node===elem){break;}}}}
            diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
            if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
            return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
            lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
            return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
            return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
            return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
            return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}
            return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
            return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
        for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
        function setFilters(){}
        setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
            soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
                groups.push((tokens=[]));}
                matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
                for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
                if(!matched){break;}}
            return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
            return selector;}
        function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((oldCache=outerCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2]);}else{outerCache[dir]=newCache;if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}};}
        function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
            return true;}:matchers[0];}
        function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
            return results;}
        function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
            return newUnmatched;}
        function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
            if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
            return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
                if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
                if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
                    postFinder(null,(matcherOut=[]),temp,xml);}
                    i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
        function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
            return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
            matchers.push(matcher);}}
            return elementMatcher(matchers);}
        function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context!==document&&context;}
            for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);break;}}
                if(outermost){dirruns=dirrunsUnique;}}
                if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
                    if(seed){unmatched.push(elem);}}}
            matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
                if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
                    setMatched=condense(setMatched);}
                push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
            if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
            return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
        compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector);}
            i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
            cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;}
            return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
            selector=selector.slice(tokens.shift().value.length);}
            i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
                if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
                    break;}}}}
            (compiled||compile(selector,match))(seed,context,!documentIsHTML,results,rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1;});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
        if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
        if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
        return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);var risSimple=/^.[^:#\[\.,]*$/;function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
        if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
        if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}
            qualifier=jQuery.filter(qualifier,elements);}
        return jQuery.grep(elements,function(elem){return(jQuery.inArray(elem,qualifier)>=0)!==not;});}
    jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
        return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,ret=[],self=this,len=self.length;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
        for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
        ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});var rootjQuery,document=window.document,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context){var match,elem;if(!selector){return this;}
        if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
            if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
                return this;}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector);}
                this.length=1;this[0]=elem;}
                this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}else if(jQuery.isFunction(selector)){return typeof rootjQuery.ready!=="undefined"?rootjQuery.ready(selector):selector(jQuery);}
        if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
        return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.extend({dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
        cur=cur[dir];}
        return matched;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
        return r;}});jQuery.fn.extend({has:function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}
        return this.pushStack(matched.length>1?jQuery.unique(matched):matched);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
        if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));}
        return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){do{cur=cur[dir];}while(cur&&cur.nodeType!==1);return cur;}
    jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
        if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
        if(this.length>1){if(!guaranteedUnique[name]){ret=jQuery.unique(ret);}
            if(rparentsprev.test(name)){ret=ret.reverse();}}
        return this.pushStack(ret);};});var rnotwhite=(/\S+/g);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}
    jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);var
        firing,memory,fired,firingLength,firingIndex,firingStart,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;break;}}
            firing=false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list=[];}else{self.disable();}}},self={add:function(){if(list){var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&type!=="string"){add(arg);}});})(arguments);if(firing){firingLength=list.length;}else if(memory){firingStart=start;fire(memory);}}
            return this;},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--;}
            if(index<=firingIndex){firingIndex--;}}}});}
            return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length);},empty:function(){list=[];firingLength=0;return this;},disable:function(){list=stack=memory=undefined;return this;},disabled:function(){return!list;},lock:function(){stack=undefined;if(!memory){self.disable();}
            return this;},locked:function(){return!stack;},fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];args=[context,args.slice?args.slice():args];if(firing){stack.push(args);}else{fire(args);}}
            return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
        deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
        return deferred;},when:function(subordinate){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues));}else{--remaining;}}}
        if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
        return deferred.promise();}});var readyList;jQuery.fn.ready=function(fn){jQuery.ready.promise().done(fn);return this;};jQuery.extend({isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
        if(!document.body){return setTimeout(jQuery.ready);}
        jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
        readyList.resolveWith(document,[jQuery]);if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}});function detach(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false);}else{document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed);}}
    function completed(){if(document.addEventListener||event.type==="load"||document.readyState==="complete"){detach();jQuery.ready();}}
    jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready);}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",completed,false);window.addEventListener("load",completed,false);}else{document.attachEvent("onreadystatechange",completed);window.attachEvent("onload",completed);var top=false;try{top=window.frameElement==null&&document.documentElement;}catch(e){}
        if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left");}catch(e){return setTimeout(doScrollCheck,50);}
            detach();jQuery.ready();}})();}}}
        return readyList.promise(obj);};var strundefined=typeof undefined;var i;for(i in jQuery(support)){break;}
    support.ownLast=i!=="0";support.inlineBlockNeedsLayout=false;jQuery(function(){var val,div,body,container;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return;}
        div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);if(typeof div.style.zoom!==strundefined){div.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";support.inlineBlockNeedsLayout=val=div.offsetWidth===3;if(val){body.style.zoom=1;}}
        body.removeChild(container);});(function(){var div=document.createElement("div");if(support.deleteExpando==null){support.deleteExpando=true;try{delete div.test;}catch(e){support.deleteExpando=false;}}
        div=null;})();jQuery.acceptData=function(elem){var noData=jQuery.noData[(elem.nodeName+" ").toLowerCase()],nodeType=+elem.nodeType||1;return nodeType!==1&&nodeType!==9?false:!noData||noData!==true&&elem.getAttribute("classid")===noData;};var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
        jQuery.data(elem,key,data);}else{data=undefined;}}
        return data;}
    function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue;}
        if(name!=="toJSON"){return false;}}
        return true;}
    function internalData(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return;}
        var ret,thisCache,internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||(!pvt&&!cache[id].data))&&data===undefined&&typeof name==="string"){return;}
        if(!id){if(isNode){id=elem[internalKey]=deletedIds.pop()||jQuery.guid++;}else{id=internalKey;}}
        if(!cache[id]){cache[id]=isNode?{}:{toJSON:jQuery.noop};}
        if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name);}else{cache[id].data=jQuery.extend(cache[id].data,name);}}
        thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={};}
            thisCache=thisCache.data;}
        if(data!==undefined){thisCache[jQuery.camelCase(name)]=data;}
        if(typeof name==="string"){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)];}}else{ret=thisCache;}
        return ret;}
    function internalRemoveData(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}
        var thisCache,i,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return;}
        if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name];}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name];}else{name=name.split(" ");}}}else{name=name.concat(jQuery.map(name,jQuery.camelCase));}
            i=name.length;while(i--){delete thisCache[name[i]];}
            if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){return;}}}
        if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return;}}
        if(isNode){jQuery.cleanData([elem],true);}else if(support.deleteExpando||cache!=cache.window){delete cache[id];}else{cache[id]=null;}}
    jQuery.extend({cache:{},noData:{"applet ":true,"embed ":true,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem);},data:function(elem,name,data){return internalData(elem,name,data);},removeData:function(elem,name){return internalRemoveData(elem,name);},_data:function(elem,name,data){return internalData(elem,name,data,true);},_removeData:function(elem,name){return internalRemoveData(elem,name,true);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
        jQuery._data(elem,"parsedAttrs",true);}}
        return data;}
        if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
        return arguments.length>1?this.each(function(){jQuery.data(this,key,value);}):elem?dataAttr(elem,key,jQuery.data(elem,key)):undefined;},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
        return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
        if(fn){if(type==="fx"){queue.unshift("inprogress");}
            delete hooks.stop;fn.call(elem,next,hooks);}
        if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem,type+"queue");jQuery._removeData(elem,key);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
        if(arguments.length<setter){return jQuery.queue(this[0],type);}
        return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
        type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
        resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};var access=jQuery.access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,length=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}
        if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
        if(fn){for(;i<length;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
        return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet;};var rcheckableType=(/^(?:checkbox|radio)$/i);(function(){var input=document.createElement("input"),div=document.createElement("div"),fragment=document.createDocumentFragment();div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";support.leadingWhitespace=div.firstChild.nodeType===3;support.tbody=!div.getElementsByTagName("tbody").length;support.htmlSerialize=!!div.getElementsByTagName("link").length;support.html5Clone=document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";input.type="checkbox";input.checked=true;fragment.appendChild(input);support.appendChecked=input.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;fragment.appendChild(div);div.innerHTML="<input type='radio' checked='checked' name='t'/>";support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;support.noCloneEvent=true;if(div.attachEvent){div.attachEvent("onclick",function(){support.noCloneEvent=false;});div.cloneNode(true).click();}
        if(support.deleteExpando==null){support.deleteExpando=true;try{delete div.test;}catch(e){support.deleteExpando=false;}}})();(function(){var i,eventName,div=document.createElement("div");for(i in{submit:true,change:true,focusin:true}){eventName="on"+i;if(!(support[i+"Bubbles"]=eventName in window)){div.setAttribute(eventName,"t");support[i+"Bubbles"]=div.attributes[eventName].expando===false;}}
        div=null;})();var rformElems=/^(?:input|select|textarea)$/i,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true;}
    function returnFalse(){return false;}
    function safeActiveElement(){try{return document.activeElement;}catch(err){}}
    jQuery.event={global:{},add:function(elem,types,handler,data,selector){var tmp,events,t,handleObjIn,special,eventHandle,handleObj,handlers,type,namespaces,origType,elemData=jQuery._data(elem);if(!elemData){return;}
        if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
        if(!handler.guid){handler.guid=jQuery.guid++;}
        if(!(events=elemData.events)){events=elemData.events={};}
        if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==strundefined&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined;};eventHandle.elem=elem;}
        types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
            special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
            if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
            if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
            jQuery.event.global[type]=true;}
        elem=null;},remove:function(elem,types,handler,selector,mappedTypes){var j,handleObj,tmp,origCount,t,events,special,handlers,type,namespaces,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return;}
        types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
            continue;}
            special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
                if(special.remove){special.remove.call(elem,handleObj);}}}
            if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
                delete events[type];}}
        if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery._removeData(elem,"events");}},trigger:function(event,data,elem,onlyHandlers){var handle,ontype,cur,bubbleType,special,tmp,i,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
        if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
        if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
        ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
        data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
        if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
            for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
            if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
        i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);}
            handle=ontype&&cur[ontype];if(handle&&handle.apply&&jQuery.acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
        event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
            jQuery.event.triggered=type;try{elem[type]();}catch(e){}
            jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
        return event.result;},dispatch:function(event){event=jQuery.event.fix(event);var i,ret,handleObj,matched,j,handlerQueue=[],args=slice.call(arguments),handlers=(jQuery._data(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
        handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
        if(special.postDispatch){special.postDispatch.call(this,event);}
        return event.result;},handlers:function(event,handlers){var sel,handleObj,matches,i,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!=this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length;}
        if(matches[sel]){matches.push(handleObj);}}
        if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}
        if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}
        return handlerQueue;},fix:function(event){if(event[jQuery.expando]){return event;}
        var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}
        copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}
        if(!event.target){event.target=originalEvent.srcElement||document;}
        if(event.target.nodeType===3){event.target=event.target.parentNode;}
        event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event;},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
        return event;}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var body,eventDoc,doc,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
        if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement;}
        if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
        return event;}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){try{this.focus();return false;}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{trigger:function(){if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false;}},_default:function(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else{jQuery.event.dispatch.call(elem,e);}
        if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){var name="on"+type;if(elem.detachEvent){if(typeof elem[name]===strundefined){elem[name]=null;}
        elem.detachEvent(name,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
        if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;}else{this.type=src;}
        if(props){jQuery.extend(this,props);}
        this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(!e){return;}
        if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(!e){return;}
        if(e.stopPropagation){e.stopPropagation();}
        e.cancelBubble=true;},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation();}
        this.stopPropagation();}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
        return ret;}};});if(!support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false;}
        jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"submitBubbles")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=true;});jQuery._data(form,"submitBubbles",true);}});},postDispatch:function(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true);}}},teardown:function(){if(jQuery.nodeName(this,"form")){return false;}
        jQuery.event.remove(this,"._submit");}};}
    if(!support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true;}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false;}
        jQuery.event.simulate("change",this,event,true);});}
        return false;}
        jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"changeBubbles")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true);}});jQuery._data(elem,"changeBubbles",true);}});},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments);}},teardown:function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName);}};}
    if(!support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=jQuery._data(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
        jQuery._data(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this,attaches=jQuery._data(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);jQuery._removeData(doc,fix);}else{jQuery._data(doc,fix,attaches);}}};});}
    jQuery.fn.extend({on:function(types,selector,data,fn,one){var type,origFn;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
        for(type in types){this.on(type,selector,data,types[type],one);}
        return this;}
        if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
        if(fn===false){fn=returnFalse;}else if(!fn){return this;}
        if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
        return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
        if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
            return this;}
        if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
        if(fn===false){fn=returnFalse;}
        return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop());}}
        return safeFrag;}
    var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){var elems,elem,i=0,found=typeof context.getElementsByTagName!==strundefined?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!==strundefined?context.querySelectorAll(tag||"*"):undefined;if(!found){for(found=[],elems=context.childNodes||context;(elem=elems[i])!=null;i++){if(!tag||jQuery.nodeName(elem,tag)){found.push(elem);}else{jQuery.merge(found,getAll(elem,tag));}}}
        return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],found):found;}
    function fixDefaultChecked(elem){if(rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked;}}
    function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}
    function disableScript(elem){elem.type=(jQuery.find.attr(elem,"type")!==null)+"/"+elem.type;return elem;}
    function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}
        return elem;}
    function setGlobalEval(elems,refElements){var elem,i=0;for(;(elem=elems[i])!=null;i++){jQuery._data(elem,"globalEval",!refElements||jQuery._data(refElements[i],"globalEval"));}}
    function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}
        var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}
        if(curData.data){curData.data=jQuery.extend({},curData.data);}}
    function fixCloneNodeIssues(src,dest){var nodeName,e,data;if(dest.nodeType!==1){return;}
        nodeName=dest.nodeName.toLowerCase();if(!support.noCloneEvent&&dest[jQuery.expando]){data=jQuery._data(dest);for(e in data.events){jQuery.removeEvent(dest,e,data.handle);}
            dest.removeAttribute(jQuery.expando);}
        if(nodeName==="script"&&dest.text!==src.text){disableScript(dest).text=src.text;restoreScript(dest);}else if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML;}
            if(support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){dest.innerHTML=src.innerHTML;}}else if(nodeName==="input"&&rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value;}}else if(nodeName==="option"){dest.defaultSelected=dest.selected=src.defaultSelected;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
    jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var destElements,node,clone,i,srcElements,inPage=jQuery.contains(elem.ownerDocument,elem);if(support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(true);}else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild);}
        if((!support.noCloneEvent||!support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0;(node=srcElements[i])!=null;++i){if(destElements[i]){fixCloneNodeIssues(node,destElements[i]);}}}
        if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0;(node=srcElements[i])!=null;i++){cloneCopyEvent(node,destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
        destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
        destElements=srcElements=node=null;return clone;},buildFragment:function(elems,context,scripts,selection){var j,elem,contains,tmp,tag,tbody,wrap,l=elems.length,safe=createSafeFragment(context),nodes=[],i=0;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||safe.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
        if(!support.leadingWhitespace&&rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));}
        if(!support.tbody){elem=tag==="table"&&!rtbody.test(elem)?tmp.firstChild:wrap[1]==="<table>"&&!rtbody.test(elem)?tmp:0;j=elem&&elem.childNodes.length;while(j--){if(jQuery.nodeName((tbody=elem.childNodes[j]),"tbody")&&!tbody.childNodes.length){elem.removeChild(tbody);}}}
        jQuery.merge(nodes,tmp.childNodes);tmp.textContent="";while(tmp.firstChild){tmp.removeChild(tmp.firstChild);}
        tmp=safe.lastChild;}}}
        if(tmp){safe.removeChild(tmp);}
        if(!support.appendChecked){jQuery.grep(getAll(nodes,"input"),fixDefaultChecked);}
        i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)!==-1){continue;}
            contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(safe.appendChild(elem),"script");if(contains){setGlobalEval(tmp);}
            if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
        tmp=null;return safe;},cleanData:function(elems,acceptData){var elem,type,id,data,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
        if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey];}else if(typeof elem.removeAttribute!==strundefined){elem.removeAttribute(internalKey);}else{elem[internalKey]=null;}
            deletedIds.push(id);}}}}}});jQuery.fn.extend({text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value));},null,value,arguments.length);},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},remove:function(selector,keepData){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem=elems[i])!=null;i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem));}
        if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"));}
            elem.parentNode.removeChild(elem);}}
        return this;},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));}
        while(elem.firstChild){elem.removeChild(elem.firstChild);}
        if(elem.options&&jQuery.nodeName(elem,"select")){elem.options.length=0;}}
        return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined;}
        if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(support.htmlSerialize||!rnoshimcache.test(value))&&(support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
            elem=0;}catch(e){}}
        if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var arg=arguments[0];this.domManip(arguments,function(elem){arg=this.parentNode;jQuery.cleanData(getAll(this));if(arg){arg.replaceChild(elem,this);}});return arg&&(arg.length||arg.nodeType)?this:this.remove();},detach:function(selector){return this.remove(selector,true);},domManip:function(args,callback){args=concat.apply([],args);var first,node,hasScripts,scripts,doc,fragment,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}
        self.domManip(args,callback);});}
        if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
            if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
                callback.call(this[i],node,i);}
                if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!jQuery._data(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{jQuery.globalEval((node.text||node.textContent||node.innerHTML||"").replace(rcleanScript,""));}}}}
                fragment=first=null;}}
        return this;}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),last=insert.length-1;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());}
        return this.pushStack(ret);};});var iframe,elemdisplay={};function actualDisplay(name,doc){var style,elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=window.getDefaultComputedStyle&&(style=window.getDefaultComputedStyle(elem[0]))?style.display:jQuery.css(elem[0],"display");elem.detach();return display;}
    function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}
        elemdisplay[nodeName]=display;}
        return display;}
    (function(){var shrinkWrapBlocksVal;support.shrinkWrapBlocks=function(){if(shrinkWrapBlocksVal!=null){return shrinkWrapBlocksVal;}
        shrinkWrapBlocksVal=false;var div,body,container;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return;}
        div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);if(typeof div.style.zoom!==strundefined){div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;"+"padding:1px;width:1px;zoom:1";div.appendChild(document.createElement("div")).style.width="5px";shrinkWrapBlocksVal=div.offsetWidth!==3;}
        body.removeChild(container);return shrinkWrapBlocksVal;};})();var rmargin=(/^margin/);var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles,curCSS,rposition=/^(top|right|bottom|left)$/;if(window.getComputedStyle){getStyles=function(elem){if(elem.ownerDocument.defaultView.opener){return elem.ownerDocument.defaultView.getComputedStyle(elem,null);}
        return window.getComputedStyle(elem,null);};curCSS=function(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed.getPropertyValue(name)||computed[name]:undefined;if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
        if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
        return ret===undefined?ret:ret+"";};}else if(document.documentElement.currentStyle){getStyles=function(elem){return elem.currentStyle;};curCSS=function(elem,name,computed){var left,rs,rsLeft,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed[name]:undefined;if(ret==null&&style&&style[name]){ret=style[name];}
        if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rs=elem.runtimeStyle;rsLeft=rs&&rs.left;if(rsLeft){rs.left=elem.currentStyle.left;}
            style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){rs.left=rsLeft;}}
        return ret===undefined?ret:ret+""||"auto";};}
    function addGetHookIf(conditionFn,hookFn){return{get:function(){var condition=conditionFn();if(condition==null){return;}
        if(condition){delete this.get;return;}
        return(this.get=hookFn).apply(this,arguments);}};}
    (function(){var div,style,a,pixelPositionVal,boxSizingReliableVal,reliableHiddenOffsetsVal,reliableMarginRightVal;div=document.createElement("div");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";a=div.getElementsByTagName("a")[0];style=a&&a.style;if(!style){return;}
        style.cssText="float:left;opacity:.5";support.opacity=style.opacity==="0.5";support.cssFloat=!!style.cssFloat;div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";support.boxSizing=style.boxSizing===""||style.MozBoxSizing===""||style.WebkitBoxSizing==="";jQuery.extend(support,{reliableHiddenOffsets:function(){if(reliableHiddenOffsetsVal==null){computeStyleTests();}
            return reliableHiddenOffsetsVal;},boxSizingReliable:function(){if(boxSizingReliableVal==null){computeStyleTests();}
            return boxSizingReliableVal;},pixelPosition:function(){if(pixelPositionVal==null){computeStyleTests();}
            return pixelPositionVal;},reliableMarginRight:function(){if(reliableMarginRightVal==null){computeStyleTests();}
            return reliableMarginRightVal;}});function computeStyleTests(){var div,body,container,contents;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return;}
            div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;display:block;margin-top:1%;top:1%;"+"border:1px;padding:1px;width:4px;position:absolute";pixelPositionVal=boxSizingReliableVal=false;reliableMarginRightVal=true;if(window.getComputedStyle){pixelPositionVal=(window.getComputedStyle(div,null)||{}).top!=="1%";boxSizingReliableVal=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";contents=div.appendChild(document.createElement("div"));contents.style.cssText=div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0";contents.style.marginRight=contents.style.width="0";div.style.width="1px";reliableMarginRightVal=!parseFloat((window.getComputedStyle(contents,null)||{}).marginRight);div.removeChild(contents);}
            div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";contents=div.getElementsByTagName("td");contents[0].style.cssText="margin:0;border:0;padding:0;display:none";reliableHiddenOffsetsVal=contents[0].offsetHeight===0;if(reliableHiddenOffsetsVal){contents[0].style.display="";contents[1].style.display="none";reliableHiddenOffsetsVal=contents[0].offsetHeight===0;}
            body.removeChild(container);}})();jQuery.swap=function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
        ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
        return ret;};var
        ralpha=/alpha\([^)]*\)/i,ropacity=/opacity\s*=\s*([^)]*)/,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rnumsplit=new RegExp("^("+pnum+")(.*)$","i"),rrelNum=new RegExp("^([+-])=("+pnum+")","i"),cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"];function vendorPropName(style,name){if(name in style){return name;}
        var capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name;}}
        return origName;}
    function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
        values[index]=jQuery._data(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display="";}
            if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else{hidden=isHidden(elem);if(display&&display!=="none"||!hidden){jQuery._data(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}
        for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
            if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
        return elements;}
    function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value;}
    function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}
        if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
            if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
        return val;}
    function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}
        if(rnumnonpx.test(val)){return val;}
        valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);val=parseFloat(val)||0;}
        return(val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px";}
    jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
        var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));type="number";}
            if(value==null||value!==value){return;}
            if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";}
            if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
            if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value;}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
            return style[name];}},css:function(elem,name,extra,styles){var num,val,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
        if(val===undefined){val=curCSS(elem,name,styles);}
        if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
        if(extra===""||extra){num=parseFloat(val);return extra===true||jQuery.isNumeric(num)?num||0:val;}
        return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0);}};});if(!support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":computed?"1":"";},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if((value>=1||value==="")&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(value===""||currentStyle&&!currentStyle.filter){return;}}
        style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity;}};}
    jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
        return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
        return map;}
        return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
        return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
    jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
        this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
        if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
        return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop];}
        result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;}};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
        fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;if(start&&start[3]!==unit){unit=unit||start[3];parts=parts||[];start=+target||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+unit);}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations);}
            if(parts){start=tween.start=+start||+target||0;tween.unit=unit;tween.end=parts[1]?start+(parts[1]+1)*parts[2]:+parts[2];}
            return tween;}]};function createFxNow(){setTimeout(function(){fxNow=undefined;});return(fxNow=jQuery.now());}
    function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
        if(includeWidth){attrs.opacity=attrs.width=type;}
        return attrs;}
    function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
    function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=jQuery._data(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
        hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
        if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];display=jQuery.css(elem,"display");checkDisplay=display==="none"?jQuery._data(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){if(!support.inlineBlockNeedsLayout||defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block";}else{style.zoom=1;}}}
        if(opts.overflow){style.overflow="hidden";if(!support.shrinkWrapBlocks()){anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}}
        for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
            orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}else{display=undefined;}}
        if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=jQuery._data(elem,"fxshow",{});}
            if(toggle){dataShow.hidden=!hidden;}
            if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
            anim.done(function(){var prop;jQuery._removeData(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}
    function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
        if(index!==name){props[name]=value;delete props[index];}
        hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
    function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
        var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
        deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
        stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
        if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
        return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}
        jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
        jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
    jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.split(" ");}
        var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback);}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else{animationPrefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
        opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
            if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||jQuery._data(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
        if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
        return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
            for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
            if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
        return this.each(function(){var index,data=jQuery._data(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
            for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
            for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
            delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
        if(!timers.length){jQuery.fx.stop();}
        fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});};(function(){var input,div,select,a,opt;div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";a=div.getElementsByTagName("a")[0];select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];a.style.cssText="top:1px";support.getSetAttribute=div.className!=="t";support.style=/top/.test(a.getAttribute("style"));support.hrefNormalized=a.getAttribute("href")==="/a";support.checkOn=!!input.value;support.optSelected=opt.selected;support.enctype=!!document.createElement("form").enctype;select.disabled=true;support.optDisabled=!opt.disabled;input=document.createElement("input");input.setAttribute("value","");support.input=input.getAttribute("value")==="";input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";})();var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
        ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
        return;}
        isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
            if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
            if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
            hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:jQuery.trim(jQuery.text(elem));}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
        values.push(value);}}
        return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(jQuery.inArray(jQuery.valHooks.option.get(option),values)>=0){try{option.selected=optionSet=true;}catch(_){option.scrollHeight;}}else{option.selected=false;}}
        if(!optionSet){elem.selectedIndex=-1;}
        return options;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});var nodeHook,boolHook,attrHandle=jQuery.expr.attrHandle,ruseDefault=/^(?:checked|selected)$/i,getSetAttribute=support.getSetAttribute,getSetInput=support.input;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
        if(typeof elem.getAttribute===strundefined){return jQuery.prop(elem,name,value);}
        if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook);}
        if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);}else if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{elem.setAttribute(name,value+"");return value;}}else if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem[propName]=false;}else{elem[jQuery.camelCase("default-"+name)]=elem[propName]=false;}}else{jQuery.attr(elem,name,"");}
        elem.removeAttribute(getSetAttribute?name:propName);}}},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
        return value;}}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name);}else{elem[jQuery.camelCase("default-"+name)]=elem[name]=true;}
        return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=getSetInput&&getSetAttribute||!ruseDefault.test(name)?function(elem,name,isXML){var ret,handle;if(!isXML){handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}
        return ret;}:function(elem,name,isXML){if(!isXML){return elem[jQuery.camelCase("default-"+name)]?name.toLowerCase():null;}};});if(!getSetInput||!getSetAttribute){jQuery.attrHooks.value={set:function(elem,value,name){if(jQuery.nodeName(elem,"input")){elem.defaultValue=value;}else{return nodeHook&&nodeHook.set(elem,value,name);}}};}
    if(!getSetAttribute){nodeHook={set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode((ret=elem.ownerDocument.createAttribute(name)));}
        ret.value=value+="";if(name==="value"||value===elem.getAttribute(name)){return value;}}};attrHandle.id=attrHandle.name=attrHandle.coords=function(elem,name,isXML){var ret;if(!isXML){return(ret=elem.getAttributeNode(name))&&ret.value!==""?ret.value:null;}};jQuery.valHooks.button={get:function(elem,name){var ret=elem.getAttributeNode(name);if(ret&&ret.specified){return ret.value;}},set:nodeHook.set};jQuery.attrHooks.contenteditable={set:function(elem,value,name){nodeHook.set(elem,value===""?false:value,name);}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]={set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}};});}
    if(!support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText||undefined;},set:function(elem,value){return(elem.style.cssText=value+"");}};}
    var rfocusable=/^(?:input|select|textarea|button|object)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name];}catch(e){}});}});jQuery.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
        notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
        if(value!==undefined){return hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:(elem[name]=value);}else{return hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name];}},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}}});if(!support.hrefNormalized){jQuery.each(["href","src"],function(i,name){jQuery.propHooks[name]={get:function(elem){return elem.getAttribute(name,4);}};});}
    if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}
        return null;}};}
    jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});if(!support.enctype){jQuery.propFix.enctype="encoding";}
    var rclass=/[\t\r\n\f]/g;jQuery.fn.extend({addClass:function(value){var classes,elem,cur,clazz,j,finalValue,i=0,len=this.length,proceed=typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}
        if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
            finalValue=jQuery.trim(cur);if(elem.className!==finalValue){elem.className=finalValue;}}}}
        return this;},removeClass:function(value){var classes,elem,cur,clazz,j,finalValue,i=0,len=this.length,proceed=arguments.length===0||typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}
        if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ");}}
            finalValue=value?jQuery.trim(cur):"";if(elem.className!==finalValue){elem.className=finalValue;}}}}
        return this;},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}
        if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}
        return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),classNames=value.match(rnotwhite)||[];while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(type===strundefined||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className);}
            this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true;}}
        return false;}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);},bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});var nonce=jQuery.now();var rquery=(/\?/);var rvalidtokens=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;jQuery.parseJSON=function(data){if(window.JSON&&window.JSON.parse){return window.JSON.parse(data+"");}
        var requireNonComma,depth=null,str=jQuery.trim(data+"");return str&&!jQuery.trim(str.replace(rvalidtokens,function(token,comma,open,close){if(requireNonComma&&comma){depth=0;}
            if(depth===0){return token;}
            requireNonComma=open||comma;depth+=!close-!open;return"";}))?(Function("return "+str))():jQuery.error("Invalid JSON: "+data);};jQuery.parseXML=function(data){var xml,tmp;if(!data||typeof data!=="string"){return null;}
        try{if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}
        if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
        return xml;};var
        ajaxLocParts,ajaxLocation,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,prefilters={},transports={},allTypes="*/".concat("*");try{ajaxLocation=location.href;}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
    ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
        var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType.charAt(0)==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
    function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
        return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
    function ajaxExtend(target,src){var deep,key,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
        if(deep){jQuery.extend(true,target,deep);}
        return target;}
    function ajaxHandleResponses(s,jqXHR,responses){var firstDataType,ct,finalDataType,type,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
        if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
        if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
            if(!firstDataType){firstDataType=type;}}
            finalDataType=finalDataType||firstDataType;}
        if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
            return responses[finalDataType];}}
    function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
        current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
            if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
            prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
                break;}}}}
                if(conv!==true){if(conv&&s["throws"]){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
        return{state:"success",data:response};}
    jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
        options=options||{};var
            parts,i,cacheURL,responseHeadersString,timeoutTimer,fireGlobals,transport,responseHeaders,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
                match=responseHeaders[key.toLowerCase()];}
                return match==null?null:match;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
                return this;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
                return this;},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]];}}else{jqXHR.always(map[jqXHR.status]);}}
                return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
                done(0,finalText);return this;}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))));}
        if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
        inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR;}
        fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
        s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);delete s.data;}
            if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}}
        if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
            if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
        if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
        jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
        if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort();}
        strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
        transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
            if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
            try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
        function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return;}
            state=2;if(timeoutTimer){clearTimeout(timeoutTimer);}
            transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
            response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
                modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
                if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
            jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
            jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
            completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
        return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
        return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback});};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
        if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
            wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
                return elem;}).append(this);}
        return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
        return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0||(!support.reliableHiddenOffsets()&&((elem.style&&elem.style.display)||jQuery.css(elem,"display"))==="none");};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
    jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
        if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
        return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=window.ActiveXObject!==undefined?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&createStandardXHR()||createActiveXHR();}:createStandardXHR;var xhrId=0,xhrCallbacks={},xhrSupported=jQuery.ajaxSettings.xhr();if(window.attachEvent){window.attachEvent("onunload",function(){for(var key in xhrCallbacks){xhrCallbacks[key](undefined,true);}});}
    support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);xhrSupported=support.ajax=!!xhrSupported;if(xhrSupported){jQuery.ajaxTransport(function(options){if(!options.crossDomain||support.cors){var callback;return{send:function(headers,complete){var i,xhr=options.xhr(),id=++xhrId;xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}
        if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}
        if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
        for(i in headers){if(headers[i]!==undefined){xhr.setRequestHeader(i,headers[i]+"");}}
        xhr.send((options.hasContent&&options.data)||null);callback=function(_,isAbort){var status,statusText,responses;if(callback&&(isAbort||xhr.readyState===4)){delete xhrCallbacks[id];callback=undefined;xhr.onreadystatechange=jQuery.noop;if(isAbort){if(xhr.readyState!==4){xhr.abort();}}else{responses={};status=xhr.status;if(typeof xhr.responseText==="string"){responses.text=xhr.responseText;}
            try{statusText=xhr.statusText;}catch(e){statusText="";}
            if(!status&&options.isLocal&&!options.crossDomain){status=responses.text?200:404;}else if(status===1223){status=204;}}}
            if(responses){complete(status,statusText,responses,xhr.getAllResponseHeaders());}};if(!options.async){callback();}else if(xhr.readyState===4){setTimeout(callback);}else{xhr.onreadystatechange=xhrCallbacks[id]=callback;}},abort:function(){if(callback){callback(undefined,true);}}};}});}
    function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}
    function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
    jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
        if(s.crossDomain){s.type="GET";s.global=false;}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||jQuery("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async=true;if(s.scriptCharset){script.charset=s.scriptCharset;}
        script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(script.parentNode){script.parentNode.removeChild(script);}
            script=null;if(!isAbort){callback(200,"success");}}};head.insertBefore(script,head.firstChild);},abort:function(){if(script){script.onload(undefined,true);}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
        s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
            return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
            if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
            responseContainer=overwritten=undefined;});return"script";}});jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}
        if(typeof context==="boolean"){keepScripts=context;context=false;}
        context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
        parsed=jQuery.buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
        return jQuery.merge([],parsed.childNodes);};var _load=jQuery.fn.load;jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
        var selector,response,type,self=this,off=url.indexOf(" ");if(off>=0){selector=jQuery.trim(url.slice(off,url.length));url=url.slice(0,off);}
        if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
        if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR]);});}
        return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};var docElem=window.document.documentElement;function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
    jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative";}
        curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
        if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
        if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
        if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
        if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
        var docElem,win,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return;}
        docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box;}
        if(typeof elem.getBoundingClientRect!==strundefined){box=elem.getBoundingClientRect();}
        win=getWindow(doc);return{top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)};},position:function(){if(!this[0]){return;}
        var offsetParent,offset,parentOffset={top:0,left:0},elem=this[0];if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}
            parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);}
        return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
        return offsetParent||docElem;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?(prop in win)?win[prop]:win.document.documentElement[method]:elem[method];}
        if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop());}else{elem[method]=val;}},method,val,arguments.length,null);};});jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name];}
        if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
        return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.size=function(){return this.length;};jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
    var
        _jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
        if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
        return jQuery;};if(typeof noGlobal===strundefined){window.jQuery=window.$=jQuery;}
    return jQuery;}));


/*! jQuery UI - v1.11.4 - 2015-03-11
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
    if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define([ "jquery" ], factory );
    } else {

        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {
    /*!
     * jQuery UI Core 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */


// $.ui might exist from components with no dependencies, e.g., $.ui.position
    $.ui = $.ui || {};

    $.extend( $.ui, {
        version: "1.11.4",

        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });

// plugins
    $.fn.extend({
        scrollParent: function( includeHidden ) {
            var position = this.css( "position" ),
                excludeStaticParent = position === "absolute",
                overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                scrollParent = this.parents().filter( function() {
                    var parent = $( this );
                    if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
                        return false;
                    }
                    return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) + parent.css( "overflow-x" ) );
                }).eq( 0 );

            return position === "fixed" || !scrollParent.length ? $( this[ 0 ].ownerDocument || document ) : scrollParent;
        },

        uniqueId: (function() {
            var uuid = 0;

            return function() {
                return this.each(function() {
                    if ( !this.id ) {
                        this.id = "ui-id-" + ( ++uuid );
                    }
                });
            };
        })(),

        removeUniqueId: function() {
            return this.each(function() {
                if ( /^ui-id-\d+$/.test( this.id ) ) {
                    $( this ).removeAttr( "id" );
                }
            });
        }
    });

// selectors
    function focusable( element, isTabIndexNotNaN ) {
        var map, mapName, img,
            nodeName = element.nodeName.toLowerCase();
        if ( "area" === nodeName ) {
            map = element.parentNode;
            mapName = map.name;
            if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
                return false;
            }
            img = $( "img[usemap='#" + mapName + "']" )[ 0 ];
            return !!img && visible( img );
        }
        return ( /^(input|select|textarea|button|object)$/.test( nodeName ) ?
                !element.disabled :
                "a" === nodeName ?
                element.href || isTabIndexNotNaN :
                    isTabIndexNotNaN) &&
                // the element and all of its ancestors must be visible
            visible( element );
    }

    function visible( element ) {
        return $.expr.filters.visible( element ) &&
            !$( element ).parents().addBack().filter(function() {
                return $.css( this, "visibility" ) === "hidden";
            }).length;
    }

    $.extend( $.expr[ ":" ], {
        data: $.expr.createPseudo ?
            $.expr.createPseudo(function( dataName ) {
                return function( elem ) {
                    return !!$.data( elem, dataName );
                };
            }) :
            // support: jQuery <1.8
            function( elem, i, match ) {
                return !!$.data( elem, match[ 3 ] );
            },

        focusable: function( element ) {
            return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
        },

        tabbable: function( element ) {
            var tabIndex = $.attr( element, "tabindex" ),
                isTabIndexNaN = isNaN( tabIndex );
            return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
        }
    });

// support: jQuery <1.8
    if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
        $.each( [ "Width", "Height" ], function( i, name ) {
            var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
                type = name.toLowerCase(),
                orig = {
                    innerWidth: $.fn.innerWidth,
                    innerHeight: $.fn.innerHeight,
                    outerWidth: $.fn.outerWidth,
                    outerHeight: $.fn.outerHeight
                };

            function reduce( elem, size, border, margin ) {
                $.each( side, function() {
                    size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
                    if ( border ) {
                        size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
                    }
                    if ( margin ) {
                        size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
                    }
                });
                return size;
            }

            $.fn[ "inner" + name ] = function( size ) {
                if ( size === undefined ) {
                    return orig[ "inner" + name ].call( this );
                }

                return this.each(function() {
                    $( this ).css( type, reduce( this, size ) + "px" );
                });
            };

            $.fn[ "outer" + name] = function( size, margin ) {
                if ( typeof size !== "number" ) {
                    return orig[ "outer" + name ].call( this, size );
                }

                return this.each(function() {
                    $( this).css( type, reduce( this, size, true, margin ) + "px" );
                });
            };
        });
    }

// support: jQuery <1.8
    if ( !$.fn.addBack ) {
        $.fn.addBack = function( selector ) {
            return this.add( selector == null ?
                    this.prevObject : this.prevObject.filter( selector )
            );
        };
    }

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
    if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
        $.fn.removeData = (function( removeData ) {
            return function( key ) {
                if ( arguments.length ) {
                    return removeData.call( this, $.camelCase( key ) );
                } else {
                    return removeData.call( this );
                }
            };
        })( $.fn.removeData );
    }

// deprecated
    $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

    $.fn.extend({
        focus: (function( orig ) {
            return function( delay, fn ) {
                return typeof delay === "number" ?
                    this.each(function() {
                        var elem = this;
                        setTimeout(function() {
                            $( elem ).focus();
                            if ( fn ) {
                                fn.call( elem );
                            }
                        }, delay );
                    }) :
                    orig.apply( this, arguments );
            };
        })( $.fn.focus ),

        disableSelection: (function() {
            var eventType = "onselectstart" in document.createElement( "div" ) ?
                "selectstart" :
                "mousedown";

            return function() {
                return this.bind( eventType + ".ui-disableSelection", function( event ) {
                    event.preventDefault();
                });
            };
        })(),

        enableSelection: function() {
            return this.unbind( ".ui-disableSelection" );
        },

        zIndex: function( zIndex ) {
            if ( zIndex !== undefined ) {
                return this.css( "zIndex", zIndex );
            }

            if ( this.length ) {
                var elem = $( this[ 0 ] ), position, value;
                while ( elem.length && elem[ 0 ] !== document ) {
                    // Ignore z-index if position is set to a value where z-index is ignored by the browser
                    // This makes behavior of this function consistent across browsers
                    // WebKit always returns auto if the element is positioned
                    position = elem.css( "position" );
                    if ( position === "absolute" || position === "relative" || position === "fixed" ) {
                        // IE returns 0 when zIndex is not specified
                        // other browsers return a string
                        // we ignore the case of nested elements with an explicit value of 0
                        // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                        value = parseInt( elem.css( "zIndex" ), 10 );
                        if ( !isNaN( value ) && value !== 0 ) {
                            return value;
                        }
                    }
                    elem = elem.parent();
                }
            }

            return 0;
        }
    });

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
    $.ui.plugin = {
        add: function( module, option, set ) {
            var i,
                proto = $.ui[ module ].prototype;
            for ( i in set ) {
                proto.plugins[ i ] = proto.plugins[ i ] || [];
                proto.plugins[ i ].push( [ option, set[ i ] ] );
            }
        },
        call: function( instance, name, args, allowDisconnected ) {
            var i,
                set = instance.plugins[ name ];

            if ( !set ) {
                return;
            }

            if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
                return;
            }

            for ( i = 0; i < set.length; i++ ) {
                if ( instance.options[ set[ i ][ 0 ] ] ) {
                    set[ i ][ 1 ].apply( instance.element, args );
                }
            }
        }
    };


    /*!
     * jQuery UI Widget 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/jQuery.widget/
     */


    var widget_uuid = 0,
        widget_slice = Array.prototype.slice;

    $.cleanData = (function( orig ) {
        return function( elems ) {
            var events, elem, i;
            for ( i = 0; (elem = elems[i]) != null; i++ ) {
                try {

                    // Only trigger remove when necessary to save time
                    events = $._data( elem, "events" );
                    if ( events && events.remove ) {
                        $( elem ).triggerHandler( "remove" );
                    }

                    // http://bugs.jquery.com/ticket/8235
                } catch ( e ) {}
            }
            orig( elems );
        };
    })( $.cleanData );

    $.widget = function( name, base, prototype ) {
        var fullName, existingConstructor, constructor, basePrototype,
        // proxiedPrototype allows the provided prototype to remain unmodified
        // so that it can be used as a mixin for multiple widgets (#8876)
            proxiedPrototype = {},
            namespace = name.split( "." )[ 0 ];

        name = name.split( "." )[ 1 ];
        fullName = namespace + "-" + name;

        if ( !prototype ) {
            prototype = base;
            base = $.Widget;
        }

        // create selector for plugin
        $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
            return !!$.data( elem, fullName );
        };

        $[ namespace ] = $[ namespace ] || {};
        existingConstructor = $[ namespace ][ name ];
        constructor = $[ namespace ][ name ] = function( options, element ) {
            // allow instantiation without "new" keyword
            if ( !this._createWidget ) {
                return new constructor( options, element );
            }

            // allow instantiation without initializing for simple inheritance
            // must use "new" keyword (the code above always passes args)
            if ( arguments.length ) {
                this._createWidget( options, element );
            }
        };
        // extend with the existing constructor to carry over any static properties
        $.extend( constructor, existingConstructor, {
            version: prototype.version,
            // copy the object used to create the prototype in case we need to
            // redefine the widget later
            _proto: $.extend( {}, prototype ),
            // track widgets that inherit from this widget in case this widget is
            // redefined after a widget inherits from it
            _childConstructors: []
        });

        basePrototype = new base();
        // we need to make the options hash a property directly on the new instance
        // otherwise we'll modify the options hash on the prototype that we're
        // inheriting from
        basePrototype.options = $.widget.extend( {}, basePrototype.options );
        $.each( prototype, function( prop, value ) {
            if ( !$.isFunction( value ) ) {
                proxiedPrototype[ prop ] = value;
                return;
            }
            proxiedPrototype[ prop ] = (function() {
                var _super = function() {
                        return base.prototype[ prop ].apply( this, arguments );
                    },
                    _superApply = function( args ) {
                        return base.prototype[ prop ].apply( this, args );
                    };
                return function() {
                    var __super = this._super,
                        __superApply = this._superApply,
                        returnValue;

                    this._super = _super;
                    this._superApply = _superApply;

                    returnValue = value.apply( this, arguments );

                    this._super = __super;
                    this._superApply = __superApply;

                    return returnValue;
                };
            })();
        });
        constructor.prototype = $.widget.extend( basePrototype, {
            // TODO: remove support for widgetEventPrefix
            // always use the name + a colon as the prefix, e.g., draggable:start
            // don't prefix for widgets that aren't DOM-based
            widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });

        // If this widget is being redefined then we need to find all widgets that
        // are inheriting from it and redefine all of them so that they inherit from
        // the new version of this widget. We're essentially trying to replace one
        // level in the prototype chain.
        if ( existingConstructor ) {
            $.each( existingConstructor._childConstructors, function( i, child ) {
                var childPrototype = child.prototype;

                // redefine the child widget using the same prototype that was
                // originally used, but inherit from the new version of the base
                $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
            });
            // remove the list of existing child constructors from the old constructor
            // so the old child constructors can be garbage collected
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push( constructor );
        }

        $.widget.bridge( name, constructor );

        return constructor;
    };

    $.widget.extend = function( target ) {
        var input = widget_slice.call( arguments, 1 ),
            inputIndex = 0,
            inputLength = input.length,
            key,
            value;
        for ( ; inputIndex < inputLength; inputIndex++ ) {
            for ( key in input[ inputIndex ] ) {
                value = input[ inputIndex ][ key ];
                if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
                    // Clone objects
                    if ( $.isPlainObject( value ) ) {
                        target[ key ] = $.isPlainObject( target[ key ] ) ?
                            $.widget.extend( {}, target[ key ], value ) :
                            // Don't extend strings, arrays, etc. with objects
                            $.widget.extend( {}, value );
                        // Copy everything else by reference
                    } else {
                        target[ key ] = value;
                    }
                }
            }
        }
        return target;
    };

    $.widget.bridge = function( name, object ) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[ name ] = function( options ) {
            var isMethodCall = typeof options === "string",
                args = widget_slice.call( arguments, 1 ),
                returnValue = this;

            if ( isMethodCall ) {
                this.each(function() {
                    var methodValue,
                        instance = $.data( this, fullName );
                    if ( options === "instance" ) {
                        returnValue = instance;
                        return false;
                    }
                    if ( !instance ) {
                        return $.error( "cannot call methods on " + name + " prior to initialization; " +
                        "attempted to call method '" + options + "'" );
                    }
                    if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
                        return $.error( "no such method '" + options + "' for " + name + " widget instance" );
                    }
                    methodValue = instance[ options ].apply( instance, args );
                    if ( methodValue !== instance && methodValue !== undefined ) {
                        returnValue = methodValue && methodValue.jquery ?
                            returnValue.pushStack( methodValue.get() ) :
                            methodValue;
                        return false;
                    }
                });
            } else {

                // Allow multiple hashes to be passed on init
                if ( args.length ) {
                    options = $.widget.extend.apply( null, [ options ].concat(args) );
                }

                this.each(function() {
                    var instance = $.data( this, fullName );
                    if ( instance ) {
                        instance.option( options || {} );
                        if ( instance._init ) {
                            instance._init();
                        }
                    } else {
                        $.data( this, fullName, new object( options, this ) );
                    }
                });
            }

            return returnValue;
        };
    };

    $.Widget = function( /* options, element */ ) {};
    $.Widget._childConstructors = [];

    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,

            // callbacks
            create: null
        },
        _createWidget: function( options, element ) {
            element = $( element || this.defaultElement || this )[ 0 ];
            this.element = $( element );
            this.uuid = widget_uuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;

            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();

            if ( element !== this ) {
                $.data( element, this.widgetFullName, this );
                this._on( true, this.element, {
                    remove: function( event ) {
                        if ( event.target === element ) {
                            this.destroy();
                        }
                    }
                });
                this.document = $( element.style ?
                    // element within the document
                    element.ownerDocument :
                    // element is window or document
                element.document || element );
                this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
            }

            this.options = $.widget.extend( {},
                this.options,
                this._getCreateOptions(),
                options );

            this._create();
            this._trigger( "create", null, this._getCreateEventData() );
            this._init();
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,

        destroy: function() {
            this._destroy();
            // we can probably remove the unbind calls in 2.0
            // all event bindings should go through this._on()
            this.element
                .unbind( this.eventNamespace )
                .removeData( this.widgetFullName )
                // support: jquery <1.6.3
                // http://bugs.jquery.com/ticket/9413
                .removeData( $.camelCase( this.widgetFullName ) );
            this.widget()
                .unbind( this.eventNamespace )
                .removeAttr( "aria-disabled" )
                .removeClass(
                this.widgetFullName + "-disabled " +
                "ui-state-disabled" );

            // clean up events and states
            this.bindings.unbind( this.eventNamespace );
            this.hoverable.removeClass( "ui-state-hover" );
            this.focusable.removeClass( "ui-state-focus" );
        },
        _destroy: $.noop,

        widget: function() {
            return this.element;
        },

        option: function( key, value ) {
            var options = key,
                parts,
                curOption,
                i;

            if ( arguments.length === 0 ) {
                // don't return a reference to the internal hash
                return $.widget.extend( {}, this.options );
            }

            if ( typeof key === "string" ) {
                // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split( "." );
                key = parts.shift();
                if ( parts.length ) {
                    curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
                    for ( i = 0; i < parts.length - 1; i++ ) {
                        curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
                        curOption = curOption[ parts[ i ] ];
                    }
                    key = parts.pop();
                    if ( arguments.length === 1 ) {
                        return curOption[ key ] === undefined ? null : curOption[ key ];
                    }
                    curOption[ key ] = value;
                } else {
                    if ( arguments.length === 1 ) {
                        return this.options[ key ] === undefined ? null : this.options[ key ];
                    }
                    options[ key ] = value;
                }
            }

            this._setOptions( options );

            return this;
        },
        _setOptions: function( options ) {
            var key;

            for ( key in options ) {
                this._setOption( key, options[ key ] );
            }

            return this;
        },
        _setOption: function( key, value ) {
            this.options[ key ] = value;

            if ( key === "disabled" ) {
                this.widget()
                    .toggleClass( this.widgetFullName + "-disabled", !!value );

                // If the widget is becoming disabled, then nothing is interactive
                if ( value ) {
                    this.hoverable.removeClass( "ui-state-hover" );
                    this.focusable.removeClass( "ui-state-focus" );
                }
            }

            return this;
        },

        enable: function() {
            return this._setOptions({ disabled: false });
        },
        disable: function() {
            return this._setOptions({ disabled: true });
        },

        _on: function( suppressDisabledCheck, element, handlers ) {
            var delegateElement,
                instance = this;

            // no suppressDisabledCheck flag, shuffle arguments
            if ( typeof suppressDisabledCheck !== "boolean" ) {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }

            // no element argument, shuffle and use this.element
            if ( !handlers ) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $( element );
                this.bindings = this.bindings.add( element );
            }

            $.each( handlers, function( event, handler ) {
                function handlerProxy() {
                    // allow widgets to customize the disabled handling
                    // - disabled as an array instead of boolean
                    // - disabled class as method for disabling individual parts
                    if ( !suppressDisabledCheck &&
                        ( instance.options.disabled === true ||
                        $( this ).hasClass( "ui-state-disabled" ) ) ) {
                        return;
                    }
                    return ( typeof handler === "string" ? instance[ handler ] : handler )
                        .apply( instance, arguments );
                }

                // copy the guid so direct unbinding works
                if ( typeof handler !== "string" ) {
                    handlerProxy.guid = handler.guid =
                        handler.guid || handlerProxy.guid || $.guid++;
                }

                var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
                    eventName = match[1] + instance.eventNamespace,
                    selector = match[2];
                if ( selector ) {
                    delegateElement.delegate( selector, eventName, handlerProxy );
                } else {
                    element.bind( eventName, handlerProxy );
                }
            });
        },

        _off: function( element, eventName ) {
            eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) +
            this.eventNamespace;
            element.unbind( eventName ).undelegate( eventName );

            // Clear the stack to avoid memory leaks (#10056)
            this.bindings = $( this.bindings.not( element ).get() );
            this.focusable = $( this.focusable.not( element ).get() );
            this.hoverable = $( this.hoverable.not( element ).get() );
        },

        _delay: function( handler, delay ) {
            function handlerProxy() {
                return ( typeof handler === "string" ? instance[ handler ] : handler )
                    .apply( instance, arguments );
            }
            var instance = this;
            return setTimeout( handlerProxy, delay || 0 );
        },

        _hoverable: function( element ) {
            this.hoverable = this.hoverable.add( element );
            this._on( element, {
                mouseenter: function( event ) {
                    $( event.currentTarget ).addClass( "ui-state-hover" );
                },
                mouseleave: function( event ) {
                    $( event.currentTarget ).removeClass( "ui-state-hover" );
                }
            });
        },

        _focusable: function( element ) {
            this.focusable = this.focusable.add( element );
            this._on( element, {
                focusin: function( event ) {
                    $( event.currentTarget ).addClass( "ui-state-focus" );
                },
                focusout: function( event ) {
                    $( event.currentTarget ).removeClass( "ui-state-focus" );
                }
            });
        },

        _trigger: function( type, event, data ) {
            var prop, orig,
                callback = this.options[ type ];

            data = data || {};
            event = $.Event( event );
            event.type = ( type === this.widgetEventPrefix ?
                type :
            this.widgetEventPrefix + type ).toLowerCase();
            // the original event may come from any element
            // so we need to reset the target on the new event
            event.target = this.element[ 0 ];

            // copy original event properties over to the new event
            orig = event.originalEvent;
            if ( orig ) {
                for ( prop in orig ) {
                    if ( !( prop in event ) ) {
                        event[ prop ] = orig[ prop ];
                    }
                }
            }

            this.element.trigger( event, data );
            return !( $.isFunction( callback ) &&
            callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
            event.isDefaultPrevented() );
        }
    };

    $.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
        $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
            if ( typeof options === "string" ) {
                options = { effect: options };
            }
            var hasOptions,
                effectName = !options ?
                    method :
                    options === true || typeof options === "number" ?
                        defaultEffect :
                    options.effect || defaultEffect;
            options = options || {};
            if ( typeof options === "number" ) {
                options = { duration: options };
            }
            hasOptions = !$.isEmptyObject( options );
            options.complete = callback;
            if ( options.delay ) {
                element.delay( options.delay );
            }
            if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
                element[ method ]( options );
            } else if ( effectName !== method && element[ effectName ] ) {
                element[ effectName ]( options.duration, options.easing, callback );
            } else {
                element.queue(function( next ) {
                    $( this )[ method ]();
                    if ( callback ) {
                        callback.call( element[ 0 ] );
                    }
                    next();
                });
            }
        };
    });

    var widget = $.widget;


    /*!
     * jQuery UI Mouse 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/mouse/
     */


    var mouseHandled = false;
    $( document ).mouseup( function() {
        mouseHandled = false;
    });

    var mouse = $.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var that = this;

            this.element
                .bind("mousedown." + this.widgetName, function(event) {
                    return that._mouseDown(event);
                })
                .bind("click." + this.widgetName, function(event) {
                    if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
                        $.removeData(event.target, that.widgetName + ".preventClickEvent");
                        event.stopImmediatePropagation();
                        return false;
                    }
                });

            this.started = false;
        },

        // TODO: make sure destroying one instance of mouse doesn't mess with
        // other instances of mouse
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            if ( this._mouseMoveDelegate ) {
                this.document
                    .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            }
        },

        _mouseDown: function(event) {
            // don't let more than one widget handle mouseStart
            if ( mouseHandled ) {
                return;
            }

            this._mouseMoved = false;

            // we may have missed mouseup (out of window)
            (this._mouseStarted && this._mouseUp(event));

            this._mouseDownEvent = event;

            var that = this,
                btnIsLeft = (event.which === 1),
            // event.target.nodeName works around a bug in IE 8 with
            // disabled inputs (#7620)
                elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
            if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
                return true;
            }

            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    that.mouseDelayMet = true;
                }, this.options.delay);
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = (this._mouseStart(event) !== false);
                if (!this._mouseStarted) {
                    event.preventDefault();
                    return true;
                }
            }

            // Click event may never have fired (Gecko & Opera)
            if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
                $.removeData(event.target, this.widgetName + ".preventClickEvent");
            }

            // these delegates are required to keep context
            this._mouseMoveDelegate = function(event) {
                return that._mouseMove(event);
            };
            this._mouseUpDelegate = function(event) {
                return that._mouseUp(event);
            };

            this.document
                .bind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
                .bind( "mouseup." + this.widgetName, this._mouseUpDelegate );

            event.preventDefault();

            mouseHandled = true;
            return true;
        },

        _mouseMove: function(event) {
            // Only check for mouseups outside the document if you've moved inside the document
            // at least once. This prevents the firing of mouseup in the case of IE<9, which will
            // fire a mousemove event if content is placed under the cursor. See #7778
            // Support: IE <9
            if ( this._mouseMoved ) {
                // IE mouseup check - mouseup happened when mouse was out of window
                if ($.ui.ie && ( !document.documentMode || document.documentMode < 9 ) && !event.button) {
                    return this._mouseUp(event);

                    // Iframe mouseup check - mouseup occurred in another document
                } else if ( !event.which ) {
                    return this._mouseUp( event );
                }
            }

            if ( event.which || event.button ) {
                this._mouseMoved = true;
            }

            if (this._mouseStarted) {
                this._mouseDrag(event);
                return event.preventDefault();
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted =
                    (this._mouseStart(this._mouseDownEvent, event) !== false);
                (this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
            }

            return !this._mouseStarted;
        },

        _mouseUp: function(event) {
            this.document
                .unbind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
                .unbind( "mouseup." + this.widgetName, this._mouseUpDelegate );

            if (this._mouseStarted) {
                this._mouseStarted = false;

                if (event.target === this._mouseDownEvent.target) {
                    $.data(event.target, this.widgetName + ".preventClickEvent", true);
                }

                this._mouseStop(event);
            }

            mouseHandled = false;
            return false;
        },

        _mouseDistanceMet: function(event) {
            return (Math.max(
                Math.abs(this._mouseDownEvent.pageX - event.pageX),
                Math.abs(this._mouseDownEvent.pageY - event.pageY)
            ) >= this.options.distance
            );
        },

        _mouseDelayMet: function(/* event */) {
            return this.mouseDelayMet;
        },

        // These are placeholder methods, to be overriden by extending plugin
        _mouseStart: function(/* event */) {},
        _mouseDrag: function(/* event */) {},
        _mouseStop: function(/* event */) {},
        _mouseCapture: function(/* event */) { return true; }
    });


    /*!
     * jQuery UI Position 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/position/
     */

    (function() {

        $.ui = $.ui || {};

        var cachedScrollbarWidth, supportsOffsetFractions,
            max = Math.max,
            abs = Math.abs,
            round = Math.round,
            rhorizontal = /left|center|right/,
            rvertical = /top|center|bottom/,
            roffset = /[\+\-]\d+(\.[\d]+)?%?/,
            rposition = /^\w+/,
            rpercent = /%$/,
            _position = $.fn.position;

        function getOffsets( offsets, width, height ) {
            return [
                parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
                parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
            ];
        }

        function parseCss( element, property ) {
            return parseInt( $.css( element, property ), 10 ) || 0;
        }

        function getDimensions( elem ) {
            var raw = elem[0];
            if ( raw.nodeType === 9 ) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: { top: 0, left: 0 }
                };
            }
            if ( $.isWindow( raw ) ) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
                };
            }
            if ( raw.preventDefault ) {
                return {
                    width: 0,
                    height: 0,
                    offset: { top: raw.pageY, left: raw.pageX }
                };
            }
            return {
                width: elem.outerWidth(),
                height: elem.outerHeight(),
                offset: elem.offset()
            };
        }

        $.position = {
            scrollbarWidth: function() {
                if ( cachedScrollbarWidth !== undefined ) {
                    return cachedScrollbarWidth;
                }
                var w1, w2,
                    div = $( "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
                    innerDiv = div.children()[0];

                $( "body" ).append( div );
                w1 = innerDiv.offsetWidth;
                div.css( "overflow", "scroll" );

                w2 = innerDiv.offsetWidth;

                if ( w1 === w2 ) {
                    w2 = div[0].clientWidth;
                }

                div.remove();

                return (cachedScrollbarWidth = w1 - w2);
            },
            getScrollInfo: function( within ) {
                var overflowX = within.isWindow || within.isDocument ? "" :
                        within.element.css( "overflow-x" ),
                    overflowY = within.isWindow || within.isDocument ? "" :
                        within.element.css( "overflow-y" ),
                    hasOverflowX = overflowX === "scroll" ||
                        ( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
                    hasOverflowY = overflowY === "scroll" ||
                        ( overflowY === "auto" && within.height < within.element[0].scrollHeight );
                return {
                    width: hasOverflowY ? $.position.scrollbarWidth() : 0,
                    height: hasOverflowX ? $.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function( element ) {
                var withinElement = $( element || window ),
                    isWindow = $.isWindow( withinElement[0] ),
                    isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9;
                return {
                    element: withinElement,
                    isWindow: isWindow,
                    isDocument: isDocument,
                    offset: withinElement.offset() || { left: 0, top: 0 },
                    scrollLeft: withinElement.scrollLeft(),
                    scrollTop: withinElement.scrollTop(),

                    // support: jQuery 1.6.x
                    // jQuery 1.6 doesn't support .outerWidth/Height() on documents or windows
                    width: isWindow || isDocument ? withinElement.width() : withinElement.outerWidth(),
                    height: isWindow || isDocument ? withinElement.height() : withinElement.outerHeight()
                };
            }
        };

        $.fn.position = function( options ) {
            if ( !options || !options.of ) {
                return _position.apply( this, arguments );
            }

            // make a copy, we don't want to modify arguments
            options = $.extend( {}, options );

            var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
                target = $( options.of ),
                within = $.position.getWithinInfo( options.within ),
                scrollInfo = $.position.getScrollInfo( within ),
                collision = ( options.collision || "flip" ).split( " " ),
                offsets = {};

            dimensions = getDimensions( target );
            if ( target[0].preventDefault ) {
                // force left top to allow flipping
                options.at = "left top";
            }
            targetWidth = dimensions.width;
            targetHeight = dimensions.height;
            targetOffset = dimensions.offset;
            // clone to reuse original targetOffset later
            basePosition = $.extend( {}, targetOffset );

            // force my and at to have valid horizontal and vertical positions
            // if a value is missing or invalid, it will be converted to center
            $.each( [ "my", "at" ], function() {
                var pos = ( options[ this ] || "" ).split( " " ),
                    horizontalOffset,
                    verticalOffset;

                if ( pos.length === 1) {
                    pos = rhorizontal.test( pos[ 0 ] ) ?
                        pos.concat( [ "center" ] ) :
                        rvertical.test( pos[ 0 ] ) ?
                            [ "center" ].concat( pos ) :
                            [ "center", "center" ];
                }
                pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
                pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

                // calculate offsets
                horizontalOffset = roffset.exec( pos[ 0 ] );
                verticalOffset = roffset.exec( pos[ 1 ] );
                offsets[ this ] = [
                    horizontalOffset ? horizontalOffset[ 0 ] : 0,
                    verticalOffset ? verticalOffset[ 0 ] : 0
                ];

                // reduce to just the positions without the offsets
                options[ this ] = [
                    rposition.exec( pos[ 0 ] )[ 0 ],
                    rposition.exec( pos[ 1 ] )[ 0 ]
                ];
            });

            // normalize collision option
            if ( collision.length === 1 ) {
                collision[ 1 ] = collision[ 0 ];
            }

            if ( options.at[ 0 ] === "right" ) {
                basePosition.left += targetWidth;
            } else if ( options.at[ 0 ] === "center" ) {
                basePosition.left += targetWidth / 2;
            }

            if ( options.at[ 1 ] === "bottom" ) {
                basePosition.top += targetHeight;
            } else if ( options.at[ 1 ] === "center" ) {
                basePosition.top += targetHeight / 2;
            }

            atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
            basePosition.left += atOffset[ 0 ];
            basePosition.top += atOffset[ 1 ];

            return this.each(function() {
                var collisionPosition, using,
                    elem = $( this ),
                    elemWidth = elem.outerWidth(),
                    elemHeight = elem.outerHeight(),
                    marginLeft = parseCss( this, "marginLeft" ),
                    marginTop = parseCss( this, "marginTop" ),
                    collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
                    collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
                    position = $.extend( {}, basePosition ),
                    myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

                if ( options.my[ 0 ] === "right" ) {
                    position.left -= elemWidth;
                } else if ( options.my[ 0 ] === "center" ) {
                    position.left -= elemWidth / 2;
                }

                if ( options.my[ 1 ] === "bottom" ) {
                    position.top -= elemHeight;
                } else if ( options.my[ 1 ] === "center" ) {
                    position.top -= elemHeight / 2;
                }

                position.left += myOffset[ 0 ];
                position.top += myOffset[ 1 ];

                // if the browser doesn't support fractions, then round for consistent results
                if ( !supportsOffsetFractions ) {
                    position.left = round( position.left );
                    position.top = round( position.top );
                }

                collisionPosition = {
                    marginLeft: marginLeft,
                    marginTop: marginTop
                };

                $.each( [ "left", "top" ], function( i, dir ) {
                    if ( $.ui.position[ collision[ i ] ] ) {
                        $.ui.position[ collision[ i ] ][ dir ]( position, {
                            targetWidth: targetWidth,
                            targetHeight: targetHeight,
                            elemWidth: elemWidth,
                            elemHeight: elemHeight,
                            collisionPosition: collisionPosition,
                            collisionWidth: collisionWidth,
                            collisionHeight: collisionHeight,
                            offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
                            my: options.my,
                            at: options.at,
                            within: within,
                            elem: elem
                        });
                    }
                });

                if ( options.using ) {
                    // adds feedback as second argument to using callback, if present
                    using = function( props ) {
                        var left = targetOffset.left - position.left,
                            right = left + targetWidth - elemWidth,
                            top = targetOffset.top - position.top,
                            bottom = top + targetHeight - elemHeight,
                            feedback = {
                                target: {
                                    element: target,
                                    left: targetOffset.left,
                                    top: targetOffset.top,
                                    width: targetWidth,
                                    height: targetHeight
                                },
                                element: {
                                    element: elem,
                                    left: position.left,
                                    top: position.top,
                                    width: elemWidth,
                                    height: elemHeight
                                },
                                horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
                                vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
                            };
                        if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
                            feedback.horizontal = "center";
                        }
                        if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
                            feedback.vertical = "middle";
                        }
                        if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
                            feedback.important = "horizontal";
                        } else {
                            feedback.important = "vertical";
                        }
                        options.using.call( this, props, feedback );
                    };
                }

                elem.offset( $.extend( position, { using: using } ) );
            });
        };

        $.ui.position = {
            fit: {
                left: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
                        outerWidth = within.width,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = withinOffset - collisionPosLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
                        newOverRight;

                    // element is wider than within
                    if ( data.collisionWidth > outerWidth ) {
                        // element is initially over the left side of within
                        if ( overLeft > 0 && overRight <= 0 ) {
                            newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
                            position.left += overLeft - newOverRight;
                            // element is initially over right side of within
                        } else if ( overRight > 0 && overLeft <= 0 ) {
                            position.left = withinOffset;
                            // element is initially over both left and right sides of within
                        } else {
                            if ( overLeft > overRight ) {
                                position.left = withinOffset + outerWidth - data.collisionWidth;
                            } else {
                                position.left = withinOffset;
                            }
                        }
                        // too far left -> align with left edge
                    } else if ( overLeft > 0 ) {
                        position.left += overLeft;
                        // too far right -> align with right edge
                    } else if ( overRight > 0 ) {
                        position.left -= overRight;
                        // adjust based on position and margin
                    } else {
                        position.left = max( position.left - collisionPosLeft, position.left );
                    }
                },
                top: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
                        outerHeight = data.within.height,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = withinOffset - collisionPosTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
                        newOverBottom;

                    // element is taller than within
                    if ( data.collisionHeight > outerHeight ) {
                        // element is initially over the top of within
                        if ( overTop > 0 && overBottom <= 0 ) {
                            newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
                            position.top += overTop - newOverBottom;
                            // element is initially over bottom of within
                        } else if ( overBottom > 0 && overTop <= 0 ) {
                            position.top = withinOffset;
                            // element is initially over both top and bottom of within
                        } else {
                            if ( overTop > overBottom ) {
                                position.top = withinOffset + outerHeight - data.collisionHeight;
                            } else {
                                position.top = withinOffset;
                            }
                        }
                        // too far up -> align with top
                    } else if ( overTop > 0 ) {
                        position.top += overTop;
                        // too far down -> align with bottom edge
                    } else if ( overBottom > 0 ) {
                        position.top -= overBottom;
                        // adjust based on position and margin
                    } else {
                        position.top = max( position.top - collisionPosTop, position.top );
                    }
                }
            },
            flip: {
                left: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.offset.left + within.scrollLeft,
                        outerWidth = within.width,
                        offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = collisionPosLeft - offsetLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
                        myOffset = data.my[ 0 ] === "left" ?
                            -data.elemWidth :
                            data.my[ 0 ] === "right" ?
                                data.elemWidth :
                                0,
                        atOffset = data.at[ 0 ] === "left" ?
                            data.targetWidth :
                            data.at[ 0 ] === "right" ?
                                -data.targetWidth :
                                0,
                        offset = -2 * data.offset[ 0 ],
                        newOverRight,
                        newOverLeft;

                    if ( overLeft < 0 ) {
                        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
                        if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
                            position.left += myOffset + atOffset + offset;
                        }
                    } else if ( overRight > 0 ) {
                        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
                        if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
                            position.left += myOffset + atOffset + offset;
                        }
                    }
                },
                top: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.offset.top + within.scrollTop,
                        outerHeight = within.height,
                        offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = collisionPosTop - offsetTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
                        top = data.my[ 1 ] === "top",
                        myOffset = top ?
                            -data.elemHeight :
                            data.my[ 1 ] === "bottom" ?
                                data.elemHeight :
                                0,
                        atOffset = data.at[ 1 ] === "top" ?
                            data.targetHeight :
                            data.at[ 1 ] === "bottom" ?
                                -data.targetHeight :
                                0,
                        offset = -2 * data.offset[ 1 ],
                        newOverTop,
                        newOverBottom;
                    if ( overTop < 0 ) {
                        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
                        if ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) {
                            position.top += myOffset + atOffset + offset;
                        }
                    } else if ( overBottom > 0 ) {
                        newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
                        if ( newOverTop > 0 || abs( newOverTop ) < overBottom ) {
                            position.top += myOffset + atOffset + offset;
                        }
                    }
                }
            },
            flipfit: {
                left: function() {
                    $.ui.position.flip.left.apply( this, arguments );
                    $.ui.position.fit.left.apply( this, arguments );
                },
                top: function() {
                    $.ui.position.flip.top.apply( this, arguments );
                    $.ui.position.fit.top.apply( this, arguments );
                }
            }
        };

// fraction support test
        (function() {
            var testElement, testElementParent, testElementStyle, offsetLeft, i,
                body = document.getElementsByTagName( "body" )[ 0 ],
                div = document.createElement( "div" );

            //Create a "fake body" for testing based on method used in jQuery.support
            testElement = document.createElement( body ? "div" : "body" );
            testElementStyle = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            if ( body ) {
                $.extend( testElementStyle, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
            }
            for ( i in testElementStyle ) {
                testElement.style[ i ] = testElementStyle[ i ];
            }
            testElement.appendChild( div );
            testElementParent = body || document.documentElement;
            testElementParent.insertBefore( testElement, testElementParent.firstChild );

            div.style.cssText = "position: absolute; left: 10.7432222px;";

            offsetLeft = $( div ).offset().left;
            supportsOffsetFractions = offsetLeft > 10 && offsetLeft < 11;

            testElement.innerHTML = "";
            testElementParent.removeChild( testElement );
        })();

    })();

    var position = $.ui.position;


    /*!
     * jQuery UI Accordion 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/accordion/
     */


    var accordion = $.widget( "ui.accordion", {
        version: "1.11.4",
        options: {
            active: 0,
            animate: {},
            collapsible: false,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },

            // callbacks
            activate: null,
            beforeActivate: null
        },

        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },

        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },

        _create: function() {
            var options = this.options;
            this.prevShow = this.prevHide = $();
            this.element.addClass( "ui-accordion ui-widget ui-helper-reset" )
                // ARIA
                .attr( "role", "tablist" );

            // don't allow collapsible: false and active: false / null
            if ( !options.collapsible && (options.active === false || options.active == null) ) {
                options.active = 0;
            }

            this._processPanels();
            // handle negative values
            if ( options.active < 0 ) {
                options.active += this.headers.length;
            }
            this._refresh();
        },

        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: !this.active.length ? $() : this.active.next()
            };
        },

        _createIcons: function() {
            var icons = this.options.icons;
            if ( icons ) {
                $( "<span>" )
                    .addClass( "ui-accordion-header-icon ui-icon " + icons.header )
                    .prependTo( this.headers );
                this.active.children( ".ui-accordion-header-icon" )
                    .removeClass( icons.header )
                    .addClass( icons.activeHeader );
                this.headers.addClass( "ui-accordion-icons" );
            }
        },

        _destroyIcons: function() {
            this.headers
                .removeClass( "ui-accordion-icons" )
                .children( ".ui-accordion-header-icon" )
                .remove();
        },

        _destroy: function() {
            var contents;

            // clean up main element
            this.element
                .removeClass( "ui-accordion ui-widget ui-helper-reset" )
                .removeAttr( "role" );

            // clean up headers
            this.headers
                .removeClass( "ui-accordion-header ui-accordion-header-active ui-state-default " +
                "ui-corner-all ui-state-active ui-state-disabled ui-corner-top" )
                .removeAttr( "role" )
                .removeAttr( "aria-expanded" )
                .removeAttr( "aria-selected" )
                .removeAttr( "aria-controls" )
                .removeAttr( "tabIndex" )
                .removeUniqueId();

            this._destroyIcons();

            // clean up content panels
            contents = this.headers.next()
                .removeClass( "ui-helper-reset ui-widget-content ui-corner-bottom " +
                "ui-accordion-content ui-accordion-content-active ui-state-disabled" )
                .css( "display", "" )
                .removeAttr( "role" )
                .removeAttr( "aria-hidden" )
                .removeAttr( "aria-labelledby" )
                .removeUniqueId();

            if ( this.options.heightStyle !== "content" ) {
                contents.css( "height", "" );
            }
        },

        _setOption: function( key, value ) {
            if ( key === "active" ) {
                // _activate() will handle invalid values and update this.options
                this._activate( value );
                return;
            }

            if ( key === "event" ) {
                if ( this.options.event ) {
                    this._off( this.headers, this.options.event );
                }
                this._setupEvents( value );
            }

            this._super( key, value );

            // setting collapsible: false while collapsed; open first panel
            if ( key === "collapsible" && !value && this.options.active === false ) {
                this._activate( 0 );
            }

            if ( key === "icons" ) {
                this._destroyIcons();
                if ( value ) {
                    this._createIcons();
                }
            }

            // #5332 - opacity doesn't cascade to positioned elements in IE
            // so we need to add the disabled class to the headers and panels
            if ( key === "disabled" ) {
                this.element
                    .toggleClass( "ui-state-disabled", !!value )
                    .attr( "aria-disabled", value );
                this.headers.add( this.headers.next() )
                    .toggleClass( "ui-state-disabled", !!value );
            }
        },

        _keydown: function( event ) {
            if ( event.altKey || event.ctrlKey ) {
                return;
            }

            var keyCode = $.ui.keyCode,
                length = this.headers.length,
                currentIndex = this.headers.index( event.target ),
                toFocus = false;

            switch ( event.keyCode ) {
                case keyCode.RIGHT:
                case keyCode.DOWN:
                    toFocus = this.headers[ ( currentIndex + 1 ) % length ];
                    break;
                case keyCode.LEFT:
                case keyCode.UP:
                    toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
                    break;
                case keyCode.SPACE:
                case keyCode.ENTER:
                    this._eventHandler( event );
                    break;
                case keyCode.HOME:
                    toFocus = this.headers[ 0 ];
                    break;
                case keyCode.END:
                    toFocus = this.headers[ length - 1 ];
                    break;
            }

            if ( toFocus ) {
                $( event.target ).attr( "tabIndex", -1 );
                $( toFocus ).attr( "tabIndex", 0 );
                toFocus.focus();
                event.preventDefault();
            }
        },

        _panelKeyDown: function( event ) {
            if ( event.keyCode === $.ui.keyCode.UP && event.ctrlKey ) {
                $( event.currentTarget ).prev().focus();
            }
        },

        refresh: function() {
            var options = this.options;
            this._processPanels();

            // was collapsed or no panel
            if ( ( options.active === false && options.collapsible === true ) || !this.headers.length ) {
                options.active = false;
                this.active = $();
                // active false only when collapsible is true
            } else if ( options.active === false ) {
                this._activate( 0 );
                // was active, but active panel is gone
            } else if ( this.active.length && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
                // all remaining panel are disabled
                if ( this.headers.length === this.headers.find(".ui-state-disabled").length ) {
                    options.active = false;
                    this.active = $();
                    // activate previous panel
                } else {
                    this._activate( Math.max( 0, options.active - 1 ) );
                }
                // was active, active panel still exists
            } else {
                // make sure active index is correct
                options.active = this.headers.index( this.active );
            }

            this._destroyIcons();

            this._refresh();
        },

        _processPanels: function() {
            var prevHeaders = this.headers,
                prevPanels = this.panels;

            this.headers = this.element.find( this.options.header )
                .addClass( "ui-accordion-header ui-state-default ui-corner-all" );

            this.panels = this.headers.next()
                .addClass( "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" )
                .filter( ":not(.ui-accordion-content-active)" )
                .hide();

            // Avoid memory leaks (#10056)
            if ( prevPanels ) {
                this._off( prevHeaders.not( this.headers ) );
                this._off( prevPanels.not( this.panels ) );
            }
        },

        _refresh: function() {
            var maxHeight,
                options = this.options,
                heightStyle = options.heightStyle,
                parent = this.element.parent();

            this.active = this._findActive( options.active )
                .addClass( "ui-accordion-header-active ui-state-active ui-corner-top" )
                .removeClass( "ui-corner-all" );
            this.active.next()
                .addClass( "ui-accordion-content-active" )
                .show();

            this.headers
                .attr( "role", "tab" )
                .each(function() {
                    var header = $( this ),
                        headerId = header.uniqueId().attr( "id" ),
                        panel = header.next(),
                        panelId = panel.uniqueId().attr( "id" );
                    header.attr( "aria-controls", panelId );
                    panel.attr( "aria-labelledby", headerId );
                })
                .next()
                .attr( "role", "tabpanel" );

            this.headers
                .not( this.active )
                .attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                })
                .next()
                .attr({
                    "aria-hidden": "true"
                })
                .hide();

            // make sure at least one header is in the tab order
            if ( !this.active.length ) {
                this.headers.eq( 0 ).attr( "tabIndex", 0 );
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
                    .next()
                    .attr({
                        "aria-hidden": "false"
                    });
            }

            this._createIcons();

            this._setupEvents( options.event );

            if ( heightStyle === "fill" ) {
                maxHeight = parent.height();
                this.element.siblings( ":visible" ).each(function() {
                    var elem = $( this ),
                        position = elem.css( "position" );

                    if ( position === "absolute" || position === "fixed" ) {
                        return;
                    }
                    maxHeight -= elem.outerHeight( true );
                });

                this.headers.each(function() {
                    maxHeight -= $( this ).outerHeight( true );
                });

                this.headers.next()
                    .each(function() {
                        $( this ).height( Math.max( 0, maxHeight -
                        $( this ).innerHeight() + $( this ).height() ) );
                    })
                    .css( "overflow", "auto" );
            } else if ( heightStyle === "auto" ) {
                maxHeight = 0;
                this.headers.next()
                    .each(function() {
                        maxHeight = Math.max( maxHeight, $( this ).css( "height", "" ).height() );
                    })
                    .height( maxHeight );
            }
        },

        _activate: function( index ) {
            var active = this._findActive( index )[ 0 ];

            // trying to activate the already active panel
            if ( active === this.active[ 0 ] ) {
                return;
            }

            // trying to collapse, simulate a click on the currently active header
            active = active || this.active[ 0 ];

            this._eventHandler({
                target: active,
                currentTarget: active,
                preventDefault: $.noop
            });
        },

        _findActive: function( selector ) {
            return typeof selector === "number" ? this.headers.eq( selector ) : $();
        },

        _setupEvents: function( event ) {
            var events = {
                keydown: "_keydown"
            };
            if ( event ) {
                $.each( event.split( " " ), function( index, eventName ) {
                    events[ eventName ] = "_eventHandler";
                });
            }

            this._off( this.headers.add( this.headers.next() ) );
            this._on( this.headers, events );
            this._on( this.headers.next(), { keydown: "_panelKeyDown" });
            this._hoverable( this.headers );
            this._focusable( this.headers );
        },

        _eventHandler: function( event ) {
            var options = this.options,
                active = this.active,
                clicked = $( event.currentTarget ),
                clickedIsActive = clicked[ 0 ] === active[ 0 ],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : clicked.next(),
                toHide = active.next(),
                eventData = {
                    oldHeader: active,
                    oldPanel: toHide,
                    newHeader: collapsing ? $() : clicked,
                    newPanel: toShow
                };

            event.preventDefault();

            if (
                // click on active header, but not collapsible
            ( clickedIsActive && !options.collapsible ) ||
                // allow canceling activation
            ( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
                return;
            }

            options.active = collapsing ? false : this.headers.index( clicked );

            // when the call to ._toggle() comes after the class changes
            // it causes a very odd bug in IE 8 (see #6720)
            this.active = clickedIsActive ? $() : clicked;
            this._toggle( eventData );

            // switch classes
            // corner classes on the previously active header stay after the animation
            active.removeClass( "ui-accordion-header-active ui-state-active" );
            if ( options.icons ) {
                active.children( ".ui-accordion-header-icon" )
                    .removeClass( options.icons.activeHeader )
                    .addClass( options.icons.header );
            }

            if ( !clickedIsActive ) {
                clicked
                    .removeClass( "ui-corner-all" )
                    .addClass( "ui-accordion-header-active ui-state-active ui-corner-top" );
                if ( options.icons ) {
                    clicked.children( ".ui-accordion-header-icon" )
                        .removeClass( options.icons.header )
                        .addClass( options.icons.activeHeader );
                }

                clicked
                    .next()
                    .addClass( "ui-accordion-content-active" );
            }
        },

        _toggle: function( data ) {
            var toShow = data.newPanel,
                toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

            // handle activating a panel during the animation for another activation
            this.prevShow.add( this.prevHide ).stop( true, true );
            this.prevShow = toShow;
            this.prevHide = toHide;

            if ( this.options.animate ) {
                this._animate( toShow, toHide, data );
            } else {
                toHide.hide();
                toShow.show();
                this._toggleComplete( data );
            }

            toHide.attr({
                "aria-hidden": "true"
            });
            toHide.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            // if we're switching panels, remove the old header from the tab order
            // if we're opening from collapsed state, remove the previous header from the tab order
            // if we're collapsing, then keep the collapsing header in the tab order
            if ( toShow.length && toHide.length ) {
                toHide.prev().attr({
                    "tabIndex": -1,
                    "aria-expanded": "false"
                });
            } else if ( toShow.length ) {
                this.headers.filter(function() {
                    return parseInt( $( this ).attr( "tabIndex" ), 10 ) === 0;
                })
                    .attr( "tabIndex", -1 );
            }

            toShow
                .attr( "aria-hidden", "false" )
                .prev()
                .attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                });
        },

        _animate: function( toShow, toHide, data ) {
            var total, easing, duration,
                that = this,
                adjust = 0,
                boxSizing = toShow.css( "box-sizing" ),
                down = toShow.length &&
                    ( !toHide.length || ( toShow.index() < toHide.index() ) ),
                animate = this.options.animate || {},
                options = down && animate.down || animate,
                complete = function() {
                    that._toggleComplete( data );
                };

            if ( typeof options === "number" ) {
                duration = options;
            }
            if ( typeof options === "string" ) {
                easing = options;
            }
            // fall back from options to animation in case of partial down settings
            easing = easing || options.easing || animate.easing;
            duration = duration || options.duration || animate.duration;

            if ( !toHide.length ) {
                return toShow.animate( this.showProps, duration, easing, complete );
            }
            if ( !toShow.length ) {
                return toHide.animate( this.hideProps, duration, easing, complete );
            }

            total = toShow.show().outerHeight();
            toHide.animate( this.hideProps, {
                duration: duration,
                easing: easing,
                step: function( now, fx ) {
                    fx.now = Math.round( now );
                }
            });
            toShow
                .hide()
                .animate( this.showProps, {
                    duration: duration,
                    easing: easing,
                    complete: complete,
                    step: function( now, fx ) {
                        fx.now = Math.round( now );
                        if ( fx.prop !== "height" ) {
                            if ( boxSizing === "content-box" ) {
                                adjust += fx.now;
                            }
                        } else if ( that.options.heightStyle !== "content" ) {
                            fx.now = Math.round( total - toHide.outerHeight() - adjust );
                            adjust = 0;
                        }
                    }
                });
        },

        _toggleComplete: function( data ) {
            var toHide = data.oldPanel;

            toHide
                .removeClass( "ui-accordion-content-active" )
                .prev()
                .removeClass( "ui-corner-top" )
                .addClass( "ui-corner-all" );

            // Work around for rendering bug in IE (#5421)
            if ( toHide.length ) {
                toHide.parent()[ 0 ].className = toHide.parent()[ 0 ].className;
            }
            this._trigger( "activate", null, data );
        }
    });


    /*!
     * jQuery UI Menu 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/menu/
     */


    var menu = $.widget( "ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",

            // callbacks
            blur: null,
            focus: null,
            select: null
        },

        _create: function() {
            this.activeMenu = this.element;

            // Flag used to prevent firing of the click handler
            // as the event bubbles up through nested menus
            this.mouseHandled = false;
            this.element
                .uniqueId()
                .addClass( "ui-menu ui-widget ui-widget-content" )
                .toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length )
                .attr({
                    role: this.options.role,
                    tabIndex: 0
                });

            if ( this.options.disabled ) {
                this.element
                    .addClass( "ui-state-disabled" )
                    .attr( "aria-disabled", "true" );
            }

            this._on({
                // Prevent focus from sticking to links inside menu after clicking
                // them (focus should always stay on UL during navigation).
                "mousedown .ui-menu-item": function( event ) {
                    event.preventDefault();
                },
                "click .ui-menu-item": function( event ) {
                    var target = $( event.target );
                    if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
                        this.select( event );

                        // Only set the mouseHandled flag if the event will bubble, see #9469.
                        if ( !event.isPropagationStopped() ) {
                            this.mouseHandled = true;
                        }

                        // Open submenu on click
                        if ( target.has( ".ui-menu" ).length ) {
                            this.expand( event );
                        } else if ( !this.element.is( ":focus" ) && $( this.document[ 0 ].activeElement ).closest( ".ui-menu" ).length ) {

                            // Redirect focus to the menu
                            this.element.trigger( "focus", [ true ] );

                            // If the active item is on the top level, let it stay active.
                            // Otherwise, blur the active item since it is no longer visible.
                            if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
                                clearTimeout( this.timer );
                            }
                        }
                    }
                },
                "mouseenter .ui-menu-item": function( event ) {
                    // Ignore mouse events while typeahead is active, see #10458.
                    // Prevents focusing the wrong item when typeahead causes a scroll while the mouse
                    // is over an item in the menu
                    if ( this.previousFilter ) {
                        return;
                    }
                    var target = $( event.currentTarget );
                    // Remove ui-state-active class from siblings of the newly focused menu item
                    // to avoid a jump caused by adjacent elements both having a class with a border
                    target.siblings( ".ui-state-active" ).removeClass( "ui-state-active" );
                    this.focus( event, target );
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function( event, keepActiveItem ) {
                    // If there's already an active item, keep it active
                    // If not, activate the first item
                    var item = this.active || this.element.find( this.options.items ).eq( 0 );

                    if ( !keepActiveItem ) {
                        this.focus( event, item );
                    }
                },
                blur: function( event ) {
                    this._delay(function() {
                        if ( !$.contains( this.element[0], this.document[0].activeElement ) ) {
                            this.collapseAll( event );
                        }
                    });
                },
                keydown: "_keydown"
            });

            this.refresh();

            // Clicks outside of a menu collapse any open menus
            this._on( this.document, {
                click: function( event ) {
                    if ( this._closeOnDocumentClick( event ) ) {
                        this.collapseAll( event );
                    }

                    // Reset the mouseHandled flag
                    this.mouseHandled = false;
                }
            });
        },

        _destroy: function() {
            // Destroy (sub)menus
            this.element
                .removeAttr( "aria-activedescendant" )
                .find( ".ui-menu" ).addBack()
                .removeClass( "ui-menu ui-widget ui-widget-content ui-menu-icons ui-front" )
                .removeAttr( "role" )
                .removeAttr( "tabIndex" )
                .removeAttr( "aria-labelledby" )
                .removeAttr( "aria-expanded" )
                .removeAttr( "aria-hidden" )
                .removeAttr( "aria-disabled" )
                .removeUniqueId()
                .show();

            // Destroy menu items
            this.element.find( ".ui-menu-item" )
                .removeClass( "ui-menu-item" )
                .removeAttr( "role" )
                .removeAttr( "aria-disabled" )
                .removeUniqueId()
                .removeClass( "ui-state-hover" )
                .removeAttr( "tabIndex" )
                .removeAttr( "role" )
                .removeAttr( "aria-haspopup" )
                .children().each( function() {
                    var elem = $( this );
                    if ( elem.data( "ui-menu-submenu-carat" ) ) {
                        elem.remove();
                    }
                });

            // Destroy menu dividers
            this.element.find( ".ui-menu-divider" ).removeClass( "ui-menu-divider ui-widget-content" );
        },

        _keydown: function( event ) {
            var match, prev, character, skip,
                preventDefault = true;

            switch ( event.keyCode ) {
                case $.ui.keyCode.PAGE_UP:
                    this.previousPage( event );
                    break;
                case $.ui.keyCode.PAGE_DOWN:
                    this.nextPage( event );
                    break;
                case $.ui.keyCode.HOME:
                    this._move( "first", "first", event );
                    break;
                case $.ui.keyCode.END:
                    this._move( "last", "last", event );
                    break;
                case $.ui.keyCode.UP:
                    this.previous( event );
                    break;
                case $.ui.keyCode.DOWN:
                    this.next( event );
                    break;
                case $.ui.keyCode.LEFT:
                    this.collapse( event );
                    break;
                case $.ui.keyCode.RIGHT:
                    if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
                        this.expand( event );
                    }
                    break;
                case $.ui.keyCode.ENTER:
                case $.ui.keyCode.SPACE:
                    this._activate( event );
                    break;
                case $.ui.keyCode.ESCAPE:
                    this.collapse( event );
                    break;
                default:
                    preventDefault = false;
                    prev = this.previousFilter || "";
                    character = String.fromCharCode( event.keyCode );
                    skip = false;

                    clearTimeout( this.filterTimer );

                    if ( character === prev ) {
                        skip = true;
                    } else {
                        character = prev + character;
                    }

                    match = this._filterMenuItems( character );
                    match = skip && match.index( this.active.next() ) !== -1 ?
                        this.active.nextAll( ".ui-menu-item" ) :
                        match;

                    // If no matches on the current filter, reset to the last character pressed
                    // to move down the menu to the first item that starts with that character
                    if ( !match.length ) {
                        character = String.fromCharCode( event.keyCode );
                        match = this._filterMenuItems( character );
                    }

                    if ( match.length ) {
                        this.focus( event, match );
                        this.previousFilter = character;
                        this.filterTimer = this._delay(function() {
                            delete this.previousFilter;
                        }, 1000 );
                    } else {
                        delete this.previousFilter;
                    }
            }

            if ( preventDefault ) {
                event.preventDefault();
            }
        },

        _activate: function( event ) {
            if ( !this.active.is( ".ui-state-disabled" ) ) {
                if ( this.active.is( "[aria-haspopup='true']" ) ) {
                    this.expand( event );
                } else {
                    this.select( event );
                }
            }
        },

        refresh: function() {
            var menus, items,
                that = this,
                icon = this.options.icons.submenu,
                submenus = this.element.find( this.options.menus );

            this.element.toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length );

            // Initialize nested menus
            submenus.filter( ":not(.ui-menu)" )
                .addClass( "ui-menu ui-widget ui-widget-content ui-front" )
                .hide()
                .attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                })
                .each(function() {
                    var menu = $( this ),
                        item = menu.parent(),
                        submenuCarat = $( "<span>" )
                            .addClass( "ui-menu-icon ui-icon " + icon )
                            .data( "ui-menu-submenu-carat", true );

                    item
                        .attr( "aria-haspopup", "true" )
                        .prepend( submenuCarat );
                    menu.attr( "aria-labelledby", item.attr( "id" ) );
                });

            menus = submenus.add( this.element );
            items = menus.find( this.options.items );

            // Initialize menu-items containing spaces and/or dashes only as dividers
            items.not( ".ui-menu-item" ).each(function() {
                var item = $( this );
                if ( that._isDivider( item ) ) {
                    item.addClass( "ui-widget-content ui-menu-divider" );
                }
            });

            // Don't refresh list items that are already adapted
            items.not( ".ui-menu-item, .ui-menu-divider" )
                .addClass( "ui-menu-item" )
                .uniqueId()
                .attr({
                    tabIndex: -1,
                    role: this._itemRole()
                });

            // Add aria-disabled attribute to any disabled menu item
            items.filter( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

            // If the active item has been removed, blur the menu
            if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
                this.blur();
            }
        },

        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[ this.options.role ];
        },

        _setOption: function( key, value ) {
            if ( key === "icons" ) {
                this.element.find( ".ui-menu-icon" )
                    .removeClass( this.options.icons.submenu )
                    .addClass( value.submenu );
            }
            if ( key === "disabled" ) {
                this.element
                    .toggleClass( "ui-state-disabled", !!value )
                    .attr( "aria-disabled", value );
            }
            this._super( key, value );
        },

        focus: function( event, item ) {
            var nested, focused;
            this.blur( event, event && event.type === "focus" );

            this._scrollIntoView( item );

            this.active = item.first();
            focused = this.active.addClass( "ui-state-focus" ).removeClass( "ui-state-active" );
            // Only update aria-activedescendant if there's a role
            // otherwise we assume focus is managed elsewhere
            if ( this.options.role ) {
                this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
            }

            // Highlight active parent menu item, if any
            this.active
                .parent()
                .closest( ".ui-menu-item" )
                .addClass( "ui-state-active" );

            if ( event && event.type === "keydown" ) {
                this._close();
            } else {
                this.timer = this._delay(function() {
                    this._close();
                }, this.delay );
            }

            nested = item.children( ".ui-menu" );
            if ( nested.length && event && ( /^mouse/.test( event.type ) ) ) {
                this._startOpening(nested);
            }
            this.activeMenu = item.parent();

            this._trigger( "focus", event, { item: item } );
        },

        _scrollIntoView: function( item ) {
            var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
            if ( this._hasScroll() ) {
                borderTop = parseFloat( $.css( this.activeMenu[0], "borderTopWidth" ) ) || 0;
                paddingTop = parseFloat( $.css( this.activeMenu[0], "paddingTop" ) ) || 0;
                offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
                scroll = this.activeMenu.scrollTop();
                elementHeight = this.activeMenu.height();
                itemHeight = item.outerHeight();

                if ( offset < 0 ) {
                    this.activeMenu.scrollTop( scroll + offset );
                } else if ( offset + itemHeight > elementHeight ) {
                    this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
                }
            }
        },

        blur: function( event, fromFocus ) {
            if ( !fromFocus ) {
                clearTimeout( this.timer );
            }

            if ( !this.active ) {
                return;
            }

            this.active.removeClass( "ui-state-focus" );
            this.active = null;

            this._trigger( "blur", event, { item: this.active } );
        },

        _startOpening: function( submenu ) {
            clearTimeout( this.timer );

            // Don't open if already open fixes a Firefox bug that caused a .5 pixel
            // shift in the submenu position when mousing over the carat icon
            if ( submenu.attr( "aria-hidden" ) !== "true" ) {
                return;
            }

            this.timer = this._delay(function() {
                this._close();
                this._open( submenu );
            }, this.delay );
        },

        _open: function( submenu ) {
            var position = $.extend({
                of: this.active
            }, this.options.position );

            clearTimeout( this.timer );
            this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
                .hide()
                .attr( "aria-hidden", "true" );

            submenu
                .show()
                .removeAttr( "aria-hidden" )
                .attr( "aria-expanded", "true" )
                .position( position );
        },

        collapseAll: function( event, all ) {
            clearTimeout( this.timer );
            this.timer = this._delay(function() {
                // If we were passed an event, look for the submenu that contains the event
                var currentMenu = all ? this.element :
                    $( event && event.target ).closest( this.element.find( ".ui-menu" ) );

                // If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
                if ( !currentMenu.length ) {
                    currentMenu = this.element;
                }

                this._close( currentMenu );

                this.blur( event );
                this.activeMenu = currentMenu;
            }, this.delay );
        },

        // With no arguments, closes the currently active menu - if nothing is active
        // it closes all menus.  If passed an argument, it will search for menus BELOW
        _close: function( startMenu ) {
            if ( !startMenu ) {
                startMenu = this.active ? this.active.parent() : this.element;
            }

            startMenu
                .find( ".ui-menu" )
                .hide()
                .attr( "aria-hidden", "true" )
                .attr( "aria-expanded", "false" )
                .end()
                .find( ".ui-state-active" ).not( ".ui-state-focus" )
                .removeClass( "ui-state-active" );
        },

        _closeOnDocumentClick: function( event ) {
            return !$( event.target ).closest( ".ui-menu" ).length;
        },

        _isDivider: function( item ) {

            // Match hyphen, em dash, en dash
            return !/[^\-\u2014\u2013\s]/.test( item.text() );
        },

        collapse: function( event ) {
            var newItem = this.active &&
                this.active.parent().closest( ".ui-menu-item", this.element );
            if ( newItem && newItem.length ) {
                this._close();
                this.focus( event, newItem );
            }
        },

        expand: function( event ) {
            var newItem = this.active &&
                this.active
                    .children( ".ui-menu " )
                    .find( this.options.items )
                    .first();

            if ( newItem && newItem.length ) {
                this._open( newItem.parent() );

                // Delay so Firefox will not hide activedescendant change in expanding submenu from AT
                this._delay(function() {
                    this.focus( event, newItem );
                });
            }
        },

        next: function( event ) {
            this._move( "next", "first", event );
        },

        previous: function( event ) {
            this._move( "prev", "last", event );
        },

        isFirstItem: function() {
            return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
        },

        isLastItem: function() {
            return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
        },

        _move: function( direction, filter, event ) {
            var next;
            if ( this.active ) {
                if ( direction === "first" || direction === "last" ) {
                    next = this.active
                        [ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
                        .eq( -1 );
                } else {
                    next = this.active
                        [ direction + "All" ]( ".ui-menu-item" )
                        .eq( 0 );
                }
            }
            if ( !next || !next.length || !this.active ) {
                next = this.activeMenu.find( this.options.items )[ filter ]();
            }

            this.focus( event, next );
        },

        nextPage: function( event ) {
            var item, base, height;

            if ( !this.active ) {
                this.next( event );
                return;
            }
            if ( this.isLastItem() ) {
                return;
            }
            if ( this._hasScroll() ) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.nextAll( ".ui-menu-item" ).each(function() {
                    item = $( this );
                    return item.offset().top - base - height < 0;
                });

                this.focus( event, item );
            } else {
                this.focus( event, this.activeMenu.find( this.options.items )
                    [ !this.active ? "first" : "last" ]() );
            }
        },

        previousPage: function( event ) {
            var item, base, height;
            if ( !this.active ) {
                this.next( event );
                return;
            }
            if ( this.isFirstItem() ) {
                return;
            }
            if ( this._hasScroll() ) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.prevAll( ".ui-menu-item" ).each(function() {
                    item = $( this );
                    return item.offset().top - base + height > 0;
                });

                this.focus( event, item );
            } else {
                this.focus( event, this.activeMenu.find( this.options.items ).first() );
            }
        },

        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop( "scrollHeight" );
        },

        select: function( event ) {
            // TODO: It should never be possible to not have an active item at this
            // point, but the tests don't trigger mouseenter before click.
            this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
            var ui = { item: this.active };
            if ( !this.active.has( ".ui-menu" ).length ) {
                this.collapseAll( event, true );
            }
            this._trigger( "select", event, ui );
        },

        _filterMenuItems: function(character) {
            var escapedCharacter = character.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" ),
                regex = new RegExp( "^" + escapedCharacter, "i" );

            return this.activeMenu
                .find( this.options.items )

                // Only match on items, not dividers or other content (#10571)
                .filter( ".ui-menu-item" )
                .filter(function() {
                    return regex.test( $.trim( $( this ).text() ) );
                });
        }
    });


    /*!
     * jQuery UI Autocomplete 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/autocomplete/
     */


    $.widget( "ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,

            // callbacks
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },

        requestIndex: 0,
        pending: 0,

        _create: function() {
            // Some browsers only repeat keydown events, not keypress events,
            // so we use the suppressKeyPress flag to determine if we've already
            // handled the keydown event. #7269
            // Unfortunately the code for & in keypress is the same as the up arrow,
            // so we use the suppressKeyPressRepeat flag to avoid handling keypress
            // events when we know the keydown event was used to modify the
            // search term. #7799
            var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
                nodeName = this.element[ 0 ].nodeName.toLowerCase(),
                isTextarea = nodeName === "textarea",
                isInput = nodeName === "input";

            this.isMultiLine =
                // Textareas are always multi-line
                isTextarea ? true :
                    // Inputs are always single-line, even if inside a contentEditable element
                    // IE also treats inputs as contentEditable
                    isInput ? false :
                        // All other element types are determined by whether or not they're contentEditable
                        this.element.prop( "isContentEditable" );

            this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
            this.isNewMenu = true;

            this.element
                .addClass( "ui-autocomplete-input" )
                .attr( "autocomplete", "off" );

            this._on( this.element, {
                keydown: function( event ) {
                    if ( this.element.prop( "readOnly" ) ) {
                        suppressKeyPress = true;
                        suppressInput = true;
                        suppressKeyPressRepeat = true;
                        return;
                    }

                    suppressKeyPress = false;
                    suppressInput = false;
                    suppressKeyPressRepeat = false;
                    var keyCode = $.ui.keyCode;
                    switch ( event.keyCode ) {
                        case keyCode.PAGE_UP:
                            suppressKeyPress = true;
                            this._move( "previousPage", event );
                            break;
                        case keyCode.PAGE_DOWN:
                            suppressKeyPress = true;
                            this._move( "nextPage", event );
                            break;
                        case keyCode.UP:
                            suppressKeyPress = true;
                            this._keyEvent( "previous", event );
                            break;
                        case keyCode.DOWN:
                            suppressKeyPress = true;
                            this._keyEvent( "next", event );
                            break;
                        case keyCode.ENTER:
                            // when menu is open and has focus
                            if ( this.menu.active ) {
                                // #6055 - Opera still allows the keypress to occur
                                // which causes forms to submit
                                suppressKeyPress = true;
                                event.preventDefault();
                                this.menu.select( event );
                            }
                            break;
                        case keyCode.TAB:
                            if ( this.menu.active ) {
                                this.menu.select( event );
                            }
                            break;
                        case keyCode.ESCAPE:
                            if ( this.menu.element.is( ":visible" ) ) {
                                if ( !this.isMultiLine ) {
                                    this._value( this.term );
                                }
                                this.close( event );
                                // Different browsers have different default behavior for escape
                                // Single press can mean undo or clear
                                // Double press in IE means clear the whole form
                                event.preventDefault();
                            }
                            break;
                        default:
                            suppressKeyPressRepeat = true;
                            // search timeout should be triggered before the input value is changed
                            this._searchTimeout( event );
                            break;
                    }
                },
                keypress: function( event ) {
                    if ( suppressKeyPress ) {
                        suppressKeyPress = false;
                        if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
                            event.preventDefault();
                        }
                        return;
                    }
                    if ( suppressKeyPressRepeat ) {
                        return;
                    }

                    // replicate some key handlers to allow them to repeat in Firefox and Opera
                    var keyCode = $.ui.keyCode;
                    switch ( event.keyCode ) {
                        case keyCode.PAGE_UP:
                            this._move( "previousPage", event );
                            break;
                        case keyCode.PAGE_DOWN:
                            this._move( "nextPage", event );
                            break;
                        case keyCode.UP:
                            this._keyEvent( "previous", event );
                            break;
                        case keyCode.DOWN:
                            this._keyEvent( "next", event );
                            break;
                    }
                },
                input: function( event ) {
                    if ( suppressInput ) {
                        suppressInput = false;
                        event.preventDefault();
                        return;
                    }
                    this._searchTimeout( event );
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value();
                },
                blur: function( event ) {
                    if ( this.cancelBlur ) {
                        delete this.cancelBlur;
                        return;
                    }

                    clearTimeout( this.searching );
                    this.close( event );
                    this._change( event );
                }
            });

            this._initSource();
            this.menu = $( "<ul>" )
                .addClass( "ui-autocomplete ui-front" )
                .appendTo( this._appendTo() )
                .menu({
                    // disable ARIA support, the live region takes care of that
                    role: null
                })
                .hide()
                .menu( "instance" );

            this._on( this.menu.element, {
                mousedown: function( event ) {
                    // prevent moving focus out of the text field
                    event.preventDefault();

                    // IE doesn't prevent moving focus even with event.preventDefault()
                    // so we set a flag to know when we should ignore the blur event
                    this.cancelBlur = true;
                    this._delay(function() {
                        delete this.cancelBlur;
                    });

                    // clicking on the scrollbar causes focus to shift to the body
                    // but we can't detect a mouseup or a click immediately afterward
                    // so we have to track the next mousedown and close the menu if
                    // the user clicks somewhere outside of the autocomplete
                    var menuElement = this.menu.element[ 0 ];
                    if ( !$( event.target ).closest( ".ui-menu-item" ).length ) {
                        this._delay(function() {
                            var that = this;
                            this.document.one( "mousedown", function( event ) {
                                if ( event.target !== that.element[ 0 ] &&
                                    event.target !== menuElement &&
                                    !$.contains( menuElement, event.target ) ) {
                                    that.close();
                                }
                            });
                        });
                    }
                },
                menufocus: function( event, ui ) {
                    var label, item;
                    // support: Firefox
                    // Prevent accidental activation of menu items in Firefox (#7024 #9118)
                    if ( this.isNewMenu ) {
                        this.isNewMenu = false;
                        if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
                            this.menu.blur();

                            this.document.one( "mousemove", function() {
                                $( event.target ).trigger( event.originalEvent );
                            });

                            return;
                        }
                    }

                    item = ui.item.data( "ui-autocomplete-item" );
                    if ( false !== this._trigger( "focus", event, { item: item } ) ) {
                        // use value to match what will end up in the input, if it was a key event
                        if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
                            this._value( item.value );
                        }
                    }

                    // Announce the value in the liveRegion
                    label = ui.item.attr( "aria-label" ) || item.value;
                    if ( label && $.trim( label ).length ) {
                        this.liveRegion.children().hide();
                        $( "<div>" ).text( label ).appendTo( this.liveRegion );
                    }
                },
                menuselect: function( event, ui ) {
                    var item = ui.item.data( "ui-autocomplete-item" ),
                        previous = this.previous;

                    // only trigger when focus was lost (click on menu)
                    if ( this.element[ 0 ] !== this.document[ 0 ].activeElement ) {
                        this.element.focus();
                        this.previous = previous;
                        // #6109 - IE triggers two focus events and the second
                        // is asynchronous, so we need to reset the previous
                        // term synchronously and asynchronously :-(
                        this._delay(function() {
                            this.previous = previous;
                            this.selectedItem = item;
                        });
                    }

                    if ( false !== this._trigger( "select", event, { item: item } ) ) {
                        this._value( item.value );
                    }
                    // reset the term after the select event
                    // this allows custom select handling to work properly
                    this.term = this._value();

                    this.close( event );
                    this.selectedItem = item;
                }
            });

            this.liveRegion = $( "<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            })
                .addClass( "ui-helper-hidden-accessible" )
                .appendTo( this.document[ 0 ].body );

            // turning off autocomplete prevents the browser from remembering the
            // value when navigating through history, so we re-enable autocomplete
            // if the page is unloaded before the widget is destroyed. #7790
            this._on( this.window, {
                beforeunload: function() {
                    this.element.removeAttr( "autocomplete" );
                }
            });
        },

        _destroy: function() {
            clearTimeout( this.searching );
            this.element
                .removeClass( "ui-autocomplete-input" )
                .removeAttr( "autocomplete" );
            this.menu.element.remove();
            this.liveRegion.remove();
        },

        _setOption: function( key, value ) {
            this._super( key, value );
            if ( key === "source" ) {
                this._initSource();
            }
            if ( key === "appendTo" ) {
                this.menu.element.appendTo( this._appendTo() );
            }
            if ( key === "disabled" && value && this.xhr ) {
                this.xhr.abort();
            }
        },

        _appendTo: function() {
            var element = this.options.appendTo;

            if ( element ) {
                element = element.jquery || element.nodeType ?
                    $( element ) :
                    this.document.find( element ).eq( 0 );
            }

            if ( !element || !element[ 0 ] ) {
                element = this.element.closest( ".ui-front" );
            }

            if ( !element.length ) {
                element = this.document[ 0 ].body;
            }

            return element;
        },

        _initSource: function() {
            var array, url,
                that = this;
            if ( $.isArray( this.options.source ) ) {
                array = this.options.source;
                this.source = function( request, response ) {
                    response( $.ui.autocomplete.filter( array, request.term ) );
                };
            } else if ( typeof this.options.source === "string" ) {
                url = this.options.source;
                this.source = function( request, response ) {
                    if ( that.xhr ) {
                        that.xhr.abort();
                    }
                    that.xhr = $.ajax({
                        url: url,
                        data: request,
                        dataType: "json",
                        success: function( data ) {
                            response( data );
                        },
                        error: function() {
                            response([]);
                        }
                    });
                };
            } else {
                this.source = this.options.source;
            }
        },

        _searchTimeout: function( event ) {
            clearTimeout( this.searching );
            this.searching = this._delay(function() {

                // Search if the value has changed, or if the user retypes the same value (see #7434)
                var equalValues = this.term === this._value(),
                    menuVisible = this.menu.element.is( ":visible" ),
                    modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

                if ( !equalValues || ( equalValues && !menuVisible && !modifierKey ) ) {
                    this.selectedItem = null;
                    this.search( null, event );
                }
            }, this.options.delay );
        },

        search: function( value, event ) {
            value = value != null ? value : this._value();

            // always save the actual value, not the one passed as an argument
            this.term = this._value();

            if ( value.length < this.options.minLength ) {
                return this.close( event );
            }

            if ( this._trigger( "search", event ) === false ) {
                return;
            }

            return this._search( value );
        },

        _search: function( value ) {
            this.pending++;
            this.element.addClass( "ui-autocomplete-loading" );
            this.cancelSearch = false;

            this.source( { term: value }, this._response() );
        },

        _response: function() {
            var index = ++this.requestIndex;

            return $.proxy(function( content ) {
                if ( index === this.requestIndex ) {
                    this.__response( content );
                }

                this.pending--;
                if ( !this.pending ) {
                    this.element.removeClass( "ui-autocomplete-loading" );
                }
            }, this );
        },

        __response: function( content ) {
            if ( content ) {
                content = this._normalize( content );
            }
            this._trigger( "response", null, { content: content } );
            if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
                this._suggest( content );
                this._trigger( "open" );
            } else {
                // use ._close() instead of .close() so we don't cancel future searches
                this._close();
            }
        },

        close: function( event ) {
            this.cancelSearch = true;
            this._close( event );
        },

        _close: function( event ) {
            if ( this.menu.element.is( ":visible" ) ) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger( "close", event );
            }
        },

        _change: function( event ) {
            if ( this.previous !== this._value() ) {
                this._trigger( "change", event, { item: this.selectedItem } );
            }
        },

        _normalize: function( items ) {
            // assume all items have the right format when the first item is complete
            if ( items.length && items[ 0 ].label && items[ 0 ].value ) {
                return items;
            }
            return $.map( items, function( item ) {
                if ( typeof item === "string" ) {
                    return {
                        label: item,
                        value: item
                    };
                }
                return $.extend( {}, item, {
                    label: item.label || item.value,
                    value: item.value || item.label
                });
            });
        },

        _suggest: function( items ) {
            var ul = this.menu.element.empty();
            this._renderMenu( ul, items );
            this.isNewMenu = true;
            this.menu.refresh();

            // size and position menu
            ul.show();
            this._resizeMenu();
            ul.position( $.extend({
                of: this.element
            }, this.options.position ) );

            if ( this.options.autoFocus ) {
                this.menu.next();
            }
        },

        _resizeMenu: function() {
            var ul = this.menu.element;
            ul.outerWidth( Math.max(
                // Firefox wraps long text (possibly a rounding bug)
                // so we add 1px to avoid the wrapping (#7513)
                ul.width( "" ).outerWidth() + 1,
                this.element.outerWidth()
            ) );
        },

        _renderMenu: function( ul, items ) {
            var that = this;
            $.each( items, function( index, item ) {
                that._renderItemData( ul, item );
            });
        },

        _renderItemData: function( ul, item ) {
            return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
        },

        _renderItem: function( ul, item ) {
            return $( "<li>" ).text( item.label ).appendTo( ul );
        },

        _move: function( direction, event ) {
            if ( !this.menu.element.is( ":visible" ) ) {
                this.search( null, event );
                return;
            }
            if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
                this.menu.isLastItem() && /^next/.test( direction ) ) {

                if ( !this.isMultiLine ) {
                    this._value( this.term );
                }

                this.menu.blur();
                return;
            }
            this.menu[ direction ]( event );
        },

        widget: function() {
            return this.menu.element;
        },

        _value: function() {
            return this.valueMethod.apply( this.element, arguments );
        },

        _keyEvent: function( keyEvent, event ) {
            if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
                this._move( keyEvent, event );

                // prevents moving cursor to beginning/end of the text field in some browsers
                event.preventDefault();
            }
        }
    });

    $.extend( $.ui.autocomplete, {
        escapeRegex: function( value ) {
            return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
        },
        filter: function( array, term ) {
            var matcher = new RegExp( $.ui.autocomplete.escapeRegex( term ), "i" );
            return $.grep( array, function( value ) {
                return matcher.test( value.label || value.value || value );
            });
        }
    });

// live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
    $.widget( "ui.autocomplete", $.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function( amount ) {
                    return amount + ( amount > 1 ? " results are" : " result is" ) +
                        " available, use up and down arrow keys to navigate.";
                }
            }
        },

        __response: function( content ) {
            var message;
            this._superApply( arguments );
            if ( this.options.disabled || this.cancelSearch ) {
                return;
            }
            if ( content && content.length ) {
                message = this.options.messages.results( content.length );
            } else {
                message = this.options.messages.noResults;
            }
            this.liveRegion.children().hide();
            $( "<div>" ).text( message ).appendTo( this.liveRegion );
        }
    });

    var autocomplete = $.ui.autocomplete;


    /*!
     * jQuery UI Button 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/button/
     */


    var lastActive,
        baseClasses = "ui-button ui-widget ui-state-default ui-corner-all",
        typeClasses = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        formResetHandler = function() {
            var form = $( this );
            setTimeout(function() {
                form.find( ":ui-button" ).button( "refresh" );
            }, 1 );
        },
        radioGroup = function( radio ) {
            var name = radio.name,
                form = radio.form,
                radios = $( [] );
            if ( name ) {
                name = name.replace( /'/g, "\\'" );
                if ( form ) {
                    radios = $( form ).find( "[name='" + name + "'][type=radio]" );
                } else {
                    radios = $( "[name='" + name + "'][type=radio]", radio.ownerDocument )
                        .filter(function() {
                            return !this.form;
                        });
                }
            }
            return radios;
        };

    $.widget( "ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: true,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest( "form" )
                .unbind( "reset" + this.eventNamespace )
                .bind( "reset" + this.eventNamespace, formResetHandler );

            if ( typeof this.options.disabled !== "boolean" ) {
                this.options.disabled = !!this.element.prop( "disabled" );
            } else {
                this.element.prop( "disabled", this.options.disabled );
            }

            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr( "title" );

            var that = this,
                options = this.options,
                toggleButton = this.type === "checkbox" || this.type === "radio",
                activeClass = !toggleButton ? "ui-state-active" : "";

            if ( options.label === null ) {
                options.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
            }

            this._hoverable( this.buttonElement );

            this.buttonElement
                .addClass( baseClasses )
                .attr( "role", "button" )
                .bind( "mouseenter" + this.eventNamespace, function() {
                    if ( options.disabled ) {
                        return;
                    }
                    if ( this === lastActive ) {
                        $( this ).addClass( "ui-state-active" );
                    }
                })
                .bind( "mouseleave" + this.eventNamespace, function() {
                    if ( options.disabled ) {
                        return;
                    }
                    $( this ).removeClass( activeClass );
                })
                .bind( "click" + this.eventNamespace, function( event ) {
                    if ( options.disabled ) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                    }
                });

            // Can't use _focusable() because the element that receives focus
            // and the element that gets the ui-state-focus class are different
            this._on({
                focus: function() {
                    this.buttonElement.addClass( "ui-state-focus" );
                },
                blur: function() {
                    this.buttonElement.removeClass( "ui-state-focus" );
                }
            });

            if ( toggleButton ) {
                this.element.bind( "change" + this.eventNamespace, function() {
                    that.refresh();
                });
            }

            if ( this.type === "checkbox" ) {
                this.buttonElement.bind( "click" + this.eventNamespace, function() {
                    if ( options.disabled ) {
                        return false;
                    }
                });
            } else if ( this.type === "radio" ) {
                this.buttonElement.bind( "click" + this.eventNamespace, function() {
                    if ( options.disabled ) {
                        return false;
                    }
                    $( this ).addClass( "ui-state-active" );
                    that.buttonElement.attr( "aria-pressed", "true" );

                    var radio = that.element[ 0 ];
                    radioGroup( radio )
                        .not( radio )
                        .map(function() {
                            return $( this ).button( "widget" )[ 0 ];
                        })
                        .removeClass( "ui-state-active" )
                        .attr( "aria-pressed", "false" );
                });
            } else {
                this.buttonElement
                    .bind( "mousedown" + this.eventNamespace, function() {
                        if ( options.disabled ) {
                            return false;
                        }
                        $( this ).addClass( "ui-state-active" );
                        lastActive = this;
                        that.document.one( "mouseup", function() {
                            lastActive = null;
                        });
                    })
                    .bind( "mouseup" + this.eventNamespace, function() {
                        if ( options.disabled ) {
                            return false;
                        }
                        $( this ).removeClass( "ui-state-active" );
                    })
                    .bind( "keydown" + this.eventNamespace, function(event) {
                        if ( options.disabled ) {
                            return false;
                        }
                        if ( event.keyCode === $.ui.keyCode.SPACE || event.keyCode === $.ui.keyCode.ENTER ) {
                            $( this ).addClass( "ui-state-active" );
                        }
                    })
                    // see #8559, we bind to blur here in case the button element loses
                    // focus between keydown and keyup, it would be left in an "active" state
                    .bind( "keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                        $( this ).removeClass( "ui-state-active" );
                    });

                if ( this.buttonElement.is("a") ) {
                    this.buttonElement.keyup(function(event) {
                        if ( event.keyCode === $.ui.keyCode.SPACE ) {
                            // TODO pass through original event correctly (just as 2nd argument doesn't work)
                            $( this ).click();
                        }
                    });
                }
            }

            this._setOption( "disabled", options.disabled );
            this._resetButton();
        },

        _determineButtonType: function() {
            var ancestor, labelSelector, checked;

            if ( this.element.is("[type=checkbox]") ) {
                this.type = "checkbox";
            } else if ( this.element.is("[type=radio]") ) {
                this.type = "radio";
            } else if ( this.element.is("input") ) {
                this.type = "input";
            } else {
                this.type = "button";
            }

            if ( this.type === "checkbox" || this.type === "radio" ) {
                // we don't search against the document in case the element
                // is disconnected from the DOM
                ancestor = this.element.parents().last();
                labelSelector = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = ancestor.find( labelSelector );
                if ( !this.buttonElement.length ) {
                    ancestor = ancestor.length ? ancestor.siblings() : this.element.siblings();
                    this.buttonElement = ancestor.filter( labelSelector );
                    if ( !this.buttonElement.length ) {
                        this.buttonElement = ancestor.find( labelSelector );
                    }
                }
                this.element.addClass( "ui-helper-hidden-accessible" );

                checked = this.element.is( ":checked" );
                if ( checked ) {
                    this.buttonElement.addClass( "ui-state-active" );
                }
                this.buttonElement.prop( "aria-pressed", checked );
            } else {
                this.buttonElement = this.element;
            }
        },

        widget: function() {
            return this.buttonElement;
        },

        _destroy: function() {
            this.element
                .removeClass( "ui-helper-hidden-accessible" );
            this.buttonElement
                .removeClass( baseClasses + " ui-state-active " + typeClasses )
                .removeAttr( "role" )
                .removeAttr( "aria-pressed" )
                .html( this.buttonElement.find(".ui-button-text").html() );

            if ( !this.hasTitle ) {
                this.buttonElement.removeAttr( "title" );
            }
        },

        _setOption: function( key, value ) {
            this._super( key, value );
            if ( key === "disabled" ) {
                this.widget().toggleClass( "ui-state-disabled", !!value );
                this.element.prop( "disabled", !!value );
                if ( value ) {
                    if ( this.type === "checkbox" || this.type === "radio" ) {
                        this.buttonElement.removeClass( "ui-state-focus" );
                    } else {
                        this.buttonElement.removeClass( "ui-state-focus ui-state-active" );
                    }
                }
                return;
            }
            this._resetButton();
        },

        refresh: function() {
            //See #8237 & #8828
            var isDisabled = this.element.is( "input, button" ) ? this.element.is( ":disabled" ) : this.element.hasClass( "ui-button-disabled" );

            if ( isDisabled !== this.options.disabled ) {
                this._setOption( "disabled", isDisabled );
            }
            if ( this.type === "radio" ) {
                radioGroup( this.element[0] ).each(function() {
                    if ( $( this ).is( ":checked" ) ) {
                        $( this ).button( "widget" )
                            .addClass( "ui-state-active" )
                            .attr( "aria-pressed", "true" );
                    } else {
                        $( this ).button( "widget" )
                            .removeClass( "ui-state-active" )
                            .attr( "aria-pressed", "false" );
                    }
                });
            } else if ( this.type === "checkbox" ) {
                if ( this.element.is( ":checked" ) ) {
                    this.buttonElement
                        .addClass( "ui-state-active" )
                        .attr( "aria-pressed", "true" );
                } else {
                    this.buttonElement
                        .removeClass( "ui-state-active" )
                        .attr( "aria-pressed", "false" );
                }
            }
        },

        _resetButton: function() {
            if ( this.type === "input" ) {
                if ( this.options.label ) {
                    this.element.val( this.options.label );
                }
                return;
            }
            var buttonElement = this.buttonElement.removeClass( typeClasses ),
                buttonText = $( "<span></span>", this.document[0] )
                    .addClass( "ui-button-text" )
                    .html( this.options.label )
                    .appendTo( buttonElement.empty() )
                    .text(),
                icons = this.options.icons,
                multipleIcons = icons.primary && icons.secondary,
                buttonClasses = [];

            if ( icons.primary || icons.secondary ) {
                if ( this.options.text ) {
                    buttonClasses.push( "ui-button-text-icon" + ( multipleIcons ? "s" : ( icons.primary ? "-primary" : "-secondary" ) ) );
                }

                if ( icons.primary ) {
                    buttonElement.prepend( "<span class='ui-button-icon-primary ui-icon " + icons.primary + "'></span>" );
                }

                if ( icons.secondary ) {
                    buttonElement.append( "<span class='ui-button-icon-secondary ui-icon " + icons.secondary + "'></span>" );
                }

                if ( !this.options.text ) {
                    buttonClasses.push( multipleIcons ? "ui-button-icons-only" : "ui-button-icon-only" );

                    if ( !this.hasTitle ) {
                        buttonElement.attr( "title", $.trim( buttonText ) );
                    }
                }
            } else {
                buttonClasses.push( "ui-button-text-only" );
            }
            buttonElement.addClass( buttonClasses.join( " " ) );
        }
    });

    $.widget( "ui.buttonset", {
        version: "1.11.4",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },

        _create: function() {
            this.element.addClass( "ui-buttonset" );
        },

        _init: function() {
            this.refresh();
        },

        _setOption: function( key, value ) {
            if ( key === "disabled" ) {
                this.buttons.button( "option", key, value );
            }

            this._super( key, value );
        },

        refresh: function() {
            var rtl = this.element.css( "direction" ) === "rtl",
                allButtons = this.element.find( this.options.items ),
                existingButtons = allButtons.filter( ":ui-button" );

            // Initialize new buttons
            allButtons.not( ":ui-button" ).button();

            // Refresh existing buttons
            existingButtons.button( "refresh" );

            this.buttons = allButtons
                .map(function() {
                    return $( this ).button( "widget" )[ 0 ];
                })
                .removeClass( "ui-corner-all ui-corner-left ui-corner-right" )
                .filter( ":first" )
                .addClass( rtl ? "ui-corner-right" : "ui-corner-left" )
                .end()
                .filter( ":last" )
                .addClass( rtl ? "ui-corner-left" : "ui-corner-right" )
                .end()
                .end();
        },

        _destroy: function() {
            this.element.removeClass( "ui-buttonset" );
            this.buttons
                .map(function() {
                    return $( this ).button( "widget" )[ 0 ];
                })
                .removeClass( "ui-corner-left ui-corner-right" )
                .end()
                .button( "destroy" );
        }
    });

    var button = $.ui.button;


    /*!
     * jQuery UI Datepicker 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/datepicker/
     */


    $.extend($.ui, { datepicker: { version: "1.11.4" } });

    var datepicker_instActive;

    function datepicker_getZindex( elem ) {
        var position, value;
        while ( elem.length && elem[ 0 ] !== document ) {
            // Ignore z-index if position is set to a value where z-index is ignored by the browser
            // This makes behavior of this function consistent across browsers
            // WebKit always returns auto if the element is positioned
            position = elem.css( "position" );
            if ( position === "absolute" || position === "relative" || position === "fixed" ) {
                // IE returns 0 when zIndex is not specified
                // other browsers return a string
                // we ignore the case of nested elements with an explicit value of 0
                // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                value = parseInt( elem.css( "zIndex" ), 10 );
                if ( !isNaN( value ) && value !== 0 ) {
                    return value;
                }
            }
            elem = elem.parent();
        }

        return 0;
    }
    /* Date picker manager.
     Use the singleton instance of this class, $.datepicker, to interact with the date picker.
     Settings for (groups of) date pickers are maintained in an instance object,
     allowing multiple different settings on the same page. */

    function Datepicker() {
        this._curInst = null; // The current instance in use
        this._keyEvent = false; // If the last event was a key event
        this._disabledInputs = []; // List of date picker inputs that have been disabled
        this._datepickerShowing = false; // True if the popup picker is showing , false if not
        this._inDialog = false; // True if showing within a "dialog", false if not
        this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
        this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
        this._appendClass = "ui-datepicker-append"; // The name of the append marker class
        this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
        this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
        this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
        this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
        this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
        this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
        this.regional = []; // Available regional settings, indexed by language code
        this.regional[""] = { // Default regional settings
            closeText: "Done", // Display text for close link
            prevText: "Prev", // Display text for previous month link
            nextText: "Next", // Display text for next month link
            currentText: "Today", // Display text for current month link
            monthNames: ["January","February","March","April","May","June",
                "July","August","September","October","November","December"], // Names of months for drop-down and formatting
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // For formatting
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // For formatting
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
            dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"], // Column headings for days starting at Sunday
            weekHeader: "Wk", // Column header for week of the year
            dateFormat: "mm/dd/yy", // See format options on parseDate
            firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
            isRTL: false, // True if right-to-left language, false if left-to-right
            showMonthAfterYear: false, // True if the year select precedes month, false for month then year
            yearSuffix: "" // Additional text to append to the year in the month headers
        };
        this._defaults = { // Global defaults for all the date picker instances
            showOn: "focus", // "focus" for popup on focus,
            // "button" for trigger button, or "both" for either
            showAnim: "fadeIn", // Name of jQuery animation for popup
            showOptions: {}, // Options for enhanced animations
            defaultDate: null, // Used when field is blank: actual date,
            // +/-number for offset from today, null for today
            appendText: "", // Display text following the input box, e.g. showing the format
            buttonText: "...", // Text for trigger button
            buttonImage: "", // URL for trigger button image
            buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
            hideIfNoPrevNext: false, // True to hide next/previous month links
            // if not applicable, false to just disable them
            navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
            gotoCurrent: false, // True if today link goes back to current selection instead
            changeMonth: false, // True if month can be selected directly, false if only prev/next
            changeYear: false, // True if year can be selected directly, false if only prev/next
            yearRange: "c-10:c+10", // Range of years to display in drop-down,
            // either relative to today's year (-nn:+nn), relative to currently displayed year
            // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
            showOtherMonths: false, // True to show dates in other months, false to leave blank
            selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
            showWeek: false, // True to show week of the year, false to not show it
            calculateWeek: this.iso8601Week, // How to calculate the week of the year,
            // takes a Date and returns the number of the week for it
            shortYearCutoff: "+10", // Short year values < this are in the current century,
            // > this are in the previous century,
            // string value starting with "+" for current year + value
            minDate: null, // The earliest selectable date, or null for no limit
            maxDate: null, // The latest selectable date, or null for no limit
            duration: "fast", // Duration of display/closure
            beforeShowDay: null, // Function that takes a date and returns an array with
            // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
            // [2] = cell title (optional), e.g. $.datepicker.noWeekends
            beforeShow: null, // Function that takes an input field and
            // returns a set of custom settings for the date picker
            onSelect: null, // Define a callback function when a date is selected
            onChangeMonthYear: null, // Define a callback function when the month or year is changed
            onClose: null, // Define a callback function when the datepicker is closed
            numberOfMonths: 1, // Number of months to show at a time
            showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
            stepMonths: 1, // Number of months to step back/forward
            stepBigMonths: 12, // Number of months to step back/forward for the big links
            altField: "", // Selector for an alternate field to store selected dates into
            altFormat: "", // The date format to use for the alternate field
            constrainInput: true, // The input is constrained by the current date format
            showButtonPanel: false, // True to show button panel, false to not show it
            autoSize: false, // True to size the input for the date format, false to leave as is
            disabled: false // The initial disabled state
        };
        $.extend(this._defaults, this.regional[""]);
        this.regional.en = $.extend( true, {}, this.regional[ "" ]);
        this.regional[ "en-US" ] = $.extend( true, {}, this.regional.en );
        this.dpDiv = datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }

    $.extend(Datepicker.prototype, {
        /* Class name added to elements to indicate already configured with a date picker. */
        markerClassName: "hasDatepicker",

        //Keep track of the maximum number of rows displayed (see #7043)
        maxRows: 4,

        // TODO rename to "widget" when switching to widget factory
        _widgetDatepicker: function() {
            return this.dpDiv;
        },

        /* Override the default settings for all instances of the date picker.
         * @param  settings  object - the new settings to use as defaults (anonymous object)
         * @return the manager object
         */
        setDefaults: function(settings) {
            datepicker_extendRemove(this._defaults, settings || {});
            return this;
        },

        /* Attach the date picker to a jQuery selection.
         * @param  target	element - the target input field or division or span
         * @param  settings  object - the new settings to use for this date picker instance (anonymous)
         */
        _attachDatepicker: function(target, settings) {
            var nodeName, inline, inst;
            nodeName = target.nodeName.toLowerCase();
            inline = (nodeName === "div" || nodeName === "span");
            if (!target.id) {
                this.uuid += 1;
                target.id = "dp" + this.uuid;
            }
            inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {});
            if (nodeName === "input") {
                this._connectDatepicker(target, inst);
            } else if (inline) {
                this._inlineDatepicker(target, inst);
            }
        },

        /* Create a new instance object. */
        _newInst: function(target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars
            return {id: id, input: target, // associated target
                selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
                drawMonth: 0, drawYear: 0, // month being drawn
                inline: inline, // is datepicker inline or not
                dpDiv: (!inline ? this.dpDiv : // presentation div
                    datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))};
        },

        /* Attach the date picker to an input field. */
        _connectDatepicker: function(target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName)) {
                return;
            }
            this._attachments(input, inst);
            input.addClass(this.markerClassName).keydown(this._doKeyDown).
                keypress(this._doKeyPress).keyup(this._doKeyUp);
            this._autoSize(inst);
            $.data(target, "datepicker", inst);
            //If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
            if( inst.settings.disabled ) {
                this._disableDatepicker( target );
            }
        },

        /* Make attachments based on settings. */
        _attachments: function(input, inst) {
            var showOn, buttonText, buttonImage,
                appendText = this._get(inst, "appendText"),
                isRTL = this._get(inst, "isRTL");

            if (inst.append) {
                inst.append.remove();
            }
            if (appendText) {
                inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
                input[isRTL ? "before" : "after"](inst.append);
            }

            input.unbind("focus", this._showDatepicker);

            if (inst.trigger) {
                inst.trigger.remove();
            }

            showOn = this._get(inst, "showOn");
            if (showOn === "focus" || showOn === "both") { // pop-up date picker when in the marked field
                input.focus(this._showDatepicker);
            }
            if (showOn === "button" || showOn === "both") { // pop-up date picker when button clicked
                buttonText = this._get(inst, "buttonText");
                buttonImage = this._get(inst, "buttonImage");
                inst.trigger = $(this._get(inst, "buttonImageOnly") ?
                    $("<img/>").addClass(this._triggerClass).
                        attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
                    $("<button type='button'></button>").addClass(this._triggerClass).
                        html(!buttonImage ? buttonText : $("<img/>").attr(
                            { src:buttonImage, alt:buttonText, title:buttonText })));
                input[isRTL ? "before" : "after"](inst.trigger);
                inst.trigger.click(function() {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
                        $.datepicker._hideDatepicker();
                    } else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
                        $.datepicker._hideDatepicker();
                        $.datepicker._showDatepicker(input[0]);
                    } else {
                        $.datepicker._showDatepicker(input[0]);
                    }
                    return false;
                });
            }
        },

        /* Apply the maximum length for the date format. */
        _autoSize: function(inst) {
            if (this._get(inst, "autoSize") && !inst.inline) {
                var findMax, max, maxI, i,
                    date = new Date(2009, 12 - 1, 20), // Ensure double digits
                    dateFormat = this._get(inst, "dateFormat");

                if (dateFormat.match(/[DM]/)) {
                    findMax = function(names) {
                        max = 0;
                        maxI = 0;
                        for (i = 0; i < names.length; i++) {
                            if (names[i].length > max) {
                                max = names[i].length;
                                maxI = i;
                            }
                        }
                        return maxI;
                    };
                    date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
                        "monthNames" : "monthNamesShort"))));
                    date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
                        "dayNames" : "dayNamesShort"))) + 20 - date.getDay());
                }
                inst.input.attr("size", this._formatDate(inst, date).length);
            }
        },

        /* Attach an inline date picker to a div. */
        _inlineDatepicker: function(target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName)) {
                return;
            }
            divSpan.addClass(this.markerClassName).append(inst.dpDiv);
            $.data(target, "datepicker", inst);
            this._setDate(inst, this._getDefaultDate(inst), true);
            this._updateDatepicker(inst);
            this._updateAlternate(inst);
            //If disabled option is true, disable the datepicker before showing it (see ticket #5665)
            if( inst.settings.disabled ) {
                this._disableDatepicker( target );
            }
            // Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
            // http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
            inst.dpDiv.css( "display", "block" );
        },

        /* Pop-up the date picker in a "dialog" box.
         * @param  input element - ignored
         * @param  date	string or Date - the initial date to display
         * @param  onSelect  function - the function to call when a date is selected
         * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
         * @param  pos int[2] - coordinates for the dialog's position within the screen or
         *					event - with x/y coordinates or
         *					leave empty for default (screen centre)
         * @return the manager object
         */
        _dialogDatepicker: function(input, date, onSelect, settings, pos) {
            var id, browserWidth, browserHeight, scrollX, scrollY,
                inst = this._dialogInst; // internal instance

            if (!inst) {
                this.uuid += 1;
                id = "dp" + this.uuid;
                this._dialogInput = $("<input type='text' id='" + id +
                "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.keydown(this._doKeyDown);
                $("body").append(this._dialogInput);
                inst = this._dialogInst = this._newInst(this._dialogInput, false);
                inst.settings = {};
                $.data(this._dialogInput[0], "datepicker", inst);
            }
            datepicker_extendRemove(inst.settings, settings || {});
            date = (date && date.constructor === Date ? this._formatDate(inst, date) : date);
            this._dialogInput.val(date);

            this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
            if (!this._pos) {
                browserWidth = document.documentElement.clientWidth;
                browserHeight = document.documentElement.clientHeight;
                scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = // should use actual width/height below
                    [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
            }

            // move input on screen for focus, but hidden behind dialog
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            inst.settings.onSelect = onSelect;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI) {
                $.blockUI(this.dpDiv);
            }
            $.data(this._dialogInput[0], "datepicker", inst);
            return this;
        },

        /* Detach a datepicker from its control.
         * @param  target	element - the target input field or division or span
         */
        _destroyDatepicker: function(target) {
            var nodeName,
                $target = $(target),
                inst = $.data(target, "datepicker");

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            $.removeData(target, "datepicker");
            if (nodeName === "input") {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName).
                    unbind("focus", this._showDatepicker).
                    unbind("keydown", this._doKeyDown).
                    unbind("keypress", this._doKeyPress).
                    unbind("keyup", this._doKeyUp);
            } else if (nodeName === "div" || nodeName === "span") {
                $target.removeClass(this.markerClassName).empty();
            }

            if ( datepicker_instActive === inst ) {
                datepicker_instActive = null;
            }
        },

        /* Enable the date picker to a jQuery selection.
         * @param  target	element - the target input field or division or span
         */
        _enableDatepicker: function(target) {
            var nodeName, inline,
                $target = $(target),
                inst = $.data(target, "datepicker");

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            if (nodeName === "input") {
                target.disabled = false;
                inst.trigger.filter("button").
                    each(function() { this.disabled = false; }).end().
                    filter("img").css({opacity: "1.0", cursor: ""});
            } else if (nodeName === "div" || nodeName === "span") {
                inline = $target.children("." + this._inlineClass);
                inline.children().removeClass("ui-state-disabled");
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
                    prop("disabled", false);
            }
            this._disabledInputs = $.map(this._disabledInputs,
                function(value) { return (value === target ? null : value); }); // delete entry
        },

        /* Disable the date picker to a jQuery selection.
         * @param  target	element - the target input field or division or span
         */
        _disableDatepicker: function(target) {
            var nodeName, inline,
                $target = $(target),
                inst = $.data(target, "datepicker");

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            if (nodeName === "input") {
                target.disabled = true;
                inst.trigger.filter("button").
                    each(function() { this.disabled = true; }).end().
                    filter("img").css({opacity: "0.5", cursor: "default"});
            } else if (nodeName === "div" || nodeName === "span") {
                inline = $target.children("." + this._inlineClass);
                inline.children().addClass("ui-state-disabled");
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
                    prop("disabled", true);
            }
            this._disabledInputs = $.map(this._disabledInputs,
                function(value) { return (value === target ? null : value); }); // delete entry
            this._disabledInputs[this._disabledInputs.length] = target;
        },

        /* Is the first field in a jQuery collection disabled as a datepicker?
         * @param  target	element - the target input field or division or span
         * @return boolean - true if disabled, false if enabled
         */
        _isDisabledDatepicker: function(target) {
            if (!target) {
                return false;
            }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] === target) {
                    return true;
                }
            }
            return false;
        },

        /* Retrieve the instance data for the target control.
         * @param  target  element - the target input field or division or span
         * @return  object - the associated instance data
         * @throws  error if a jQuery problem getting data
         */
        _getInst: function(target) {
            try {
                return $.data(target, "datepicker");
            }
            catch (err) {
                throw "Missing instance data for this datepicker";
            }
        },

        /* Update or retrieve the settings for a date picker attached to an input field or division.
         * @param  target  element - the target input field or division or span
         * @param  name	object - the new settings to update or
         *				string - the name of the setting to change or retrieve,
         *				when retrieving also "all" for all instance settings or
         *				"defaults" for all global defaults
         * @param  value   any - the new value for the setting
         *				(omit if above is an object or to retrieve a value)
         */
        _optionDatepicker: function(target, name, value) {
            var settings, date, minDate, maxDate,
                inst = this._getInst(target);

            if (arguments.length === 2 && typeof name === "string") {
                return (name === "defaults" ? $.extend({}, $.datepicker._defaults) :
                    (inst ? (name === "all" ? $.extend({}, inst.settings) :
                        this._get(inst, name)) : null));
            }

            settings = name || {};
            if (typeof name === "string") {
                settings = {};
                settings[name] = value;
            }

            if (inst) {
                if (this._curInst === inst) {
                    this._hideDatepicker();
                }

                date = this._getDateDatepicker(target, true);
                minDate = this._getMinMaxDate(inst, "min");
                maxDate = this._getMinMaxDate(inst, "max");
                datepicker_extendRemove(inst.settings, settings);
                // reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
                if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
                    inst.settings.minDate = this._formatDate(inst, minDate);
                }
                if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
                    inst.settings.maxDate = this._formatDate(inst, maxDate);
                }
                if ( "disabled" in settings ) {
                    if ( settings.disabled ) {
                        this._disableDatepicker(target);
                    } else {
                        this._enableDatepicker(target);
                    }
                }
                this._attachments($(target), inst);
                this._autoSize(inst);
                this._setDate(inst, date);
                this._updateAlternate(inst);
                this._updateDatepicker(inst);
            }
        },

        // change method deprecated
        _changeDatepicker: function(target, name, value) {
            this._optionDatepicker(target, name, value);
        },

        /* Redraw the date picker attached to an input field or division.
         * @param  target  element - the target input field or division or span
         */
        _refreshDatepicker: function(target) {
            var inst = this._getInst(target);
            if (inst) {
                this._updateDatepicker(inst);
            }
        },

        /* Set the dates for a jQuery selection.
         * @param  target element - the target input field or division or span
         * @param  date	Date - the new date
         */
        _setDateDatepicker: function(target, date) {
            var inst = this._getInst(target);
            if (inst) {
                this._setDate(inst, date);
                this._updateDatepicker(inst);
                this._updateAlternate(inst);
            }
        },

        /* Get the date(s) for the first entry in a jQuery selection.
         * @param  target element - the target input field or division or span
         * @param  noDefault boolean - true if no default date is to be used
         * @return Date - the current date
         */
        _getDateDatepicker: function(target, noDefault) {
            var inst = this._getInst(target);
            if (inst && !inst.inline) {
                this._setDateFromField(inst, noDefault);
            }
            return (inst ? this._getDate(inst) : null);
        },

        /* Handle keystrokes. */
        _doKeyDown: function(event) {
            var onSelect, dateStr, sel,
                inst = $.datepicker._getInst(event.target),
                handled = true,
                isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

            inst._keyEvent = true;
            if ($.datepicker._datepickerShowing) {
                switch (event.keyCode) {
                    case 9: $.datepicker._hideDatepicker();
                        handled = false;
                        break; // hide on tab out
                    case 13: sel = $("td." + $.datepicker._dayOverClass + ":not(." +
                    $.datepicker._currentClass + ")", inst.dpDiv);
                        if (sel[0]) {
                            $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
                        }

                        onSelect = $.datepicker._get(inst, "onSelect");
                        if (onSelect) {
                            dateStr = $.datepicker._formatDate(inst);

                            // trigger custom callback
                            onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
                        } else {
                            $.datepicker._hideDatepicker();
                        }

                        return false; // don't submit the form
                    case 27: $.datepicker._hideDatepicker();
                        break; // hide on escape
                    case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                        -$.datepicker._get(inst, "stepBigMonths") :
                        -$.datepicker._get(inst, "stepMonths")), "M");
                        break; // previous month/year on page up/+ ctrl
                    case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                        +$.datepicker._get(inst, "stepBigMonths") :
                        +$.datepicker._get(inst, "stepMonths")), "M");
                        break; // next month/year on page down/+ ctrl
                    case 35: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._clearDate(event.target);
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // clear on ctrl or command +end
                    case 36: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._gotoToday(event.target);
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // current on ctrl or command +home
                    case 37: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D");
                    }
                        handled = event.ctrlKey || event.metaKey;
                        // -1 day on ctrl or command +left
                        if (event.originalEvent.altKey) {
                            $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                                -$.datepicker._get(inst, "stepBigMonths") :
                                -$.datepicker._get(inst, "stepMonths")), "M");
                        }
                        // next month/year on alt +left on Mac
                        break;
                    case 38: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, -7, "D");
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // -1 week on ctrl or command +up
                    case 39: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D");
                    }
                        handled = event.ctrlKey || event.metaKey;
                        // +1 day on ctrl or command +right
                        if (event.originalEvent.altKey) {
                            $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                                +$.datepicker._get(inst, "stepBigMonths") :
                                +$.datepicker._get(inst, "stepMonths")), "M");
                        }
                        // next month/year on alt +right
                        break;
                    case 40: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, +7, "D");
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // +1 week on ctrl or command +down
                    default: handled = false;
                }
            } else if (event.keyCode === 36 && event.ctrlKey) { // display the date picker on ctrl+home
                $.datepicker._showDatepicker(this);
            } else {
                handled = false;
            }

            if (handled) {
                event.preventDefault();
                event.stopPropagation();
            }
        },

        /* Filter entered characters - based on date format. */
        _doKeyPress: function(event) {
            var chars, chr,
                inst = $.datepicker._getInst(event.target);

            if ($.datepicker._get(inst, "constrainInput")) {
                chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
                chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
                return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
            }
        },

        /* Synchronise manual entry and field/alternate field. */
        _doKeyUp: function(event) {
            var date,
                inst = $.datepicker._getInst(event.target);

            if (inst.input.val() !== inst.lastVal) {
                try {
                    date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
                        (inst.input ? inst.input.val() : null),
                        $.datepicker._getFormatConfig(inst));

                    if (date) { // only if valid
                        $.datepicker._setDateFromField(inst);
                        $.datepicker._updateAlternate(inst);
                        $.datepicker._updateDatepicker(inst);
                    }
                }
                catch (err) {
                }
            }
            return true;
        },

        /* Pop-up the date picker for a given input field.
         * If false returned from beforeShow event handler do not show.
         * @param  input  element - the input field attached to the date picker or
         *					event - if triggered by focus
         */
        _showDatepicker: function(input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() !== "input") { // find from button/image trigger
                input = $("input", input.parentNode)[0];
            }

            if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) { // already here
                return;
            }

            var inst, beforeShow, beforeShowSettings, isFixed,
                offset, showAnim, duration;

            inst = $.datepicker._getInst(input);
            if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
                $.datepicker._curInst.dpDiv.stop(true, true);
                if ( inst && $.datepicker._datepickerShowing ) {
                    $.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
                }
            }

            beforeShow = $.datepicker._get(inst, "beforeShow");
            beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
            if(beforeShowSettings === false){
                return;
            }
            datepicker_extendRemove(inst.settings, beforeShowSettings);

            inst.lastVal = null;
            $.datepicker._lastInput = input;
            $.datepicker._setDateFromField(inst);

            if ($.datepicker._inDialog) { // hide cursor
                input.value = "";
            }
            if (!$.datepicker._pos) { // position below input
                $.datepicker._pos = $.datepicker._findPos(input);
                $.datepicker._pos[1] += input.offsetHeight; // add the height
            }

            isFixed = false;
            $(input).parents().each(function() {
                isFixed |= $(this).css("position") === "fixed";
                return !isFixed;
            });

            offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
            $.datepicker._pos = null;
            //to avoid flashes on Firefox
            inst.dpDiv.empty();
            // determine sizing offscreen
            inst.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
            $.datepicker._updateDatepicker(inst);
            // fix width for dynamic number of date pickers
            // and adjust position before showing
            offset = $.datepicker._checkOffset(inst, offset, isFixed);
            inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
                "static" : (isFixed ? "fixed" : "absolute")), display: "none",
                left: offset.left + "px", top: offset.top + "px"});

            if (!inst.inline) {
                showAnim = $.datepicker._get(inst, "showAnim");
                duration = $.datepicker._get(inst, "duration");
                inst.dpDiv.css( "z-index", datepicker_getZindex( $( input ) ) + 1 );
                $.datepicker._datepickerShowing = true;

                if ( $.effects && $.effects.effect[ showAnim ] ) {
                    inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
                } else {
                    inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
                }

                if ( $.datepicker._shouldFocusInput( inst ) ) {
                    inst.input.focus();
                }

                $.datepicker._curInst = inst;
            }
        },

        /* Generate the date picker content. */
        _updateDatepicker: function(inst) {
            this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
            datepicker_instActive = inst; // for delegate hover events
            inst.dpDiv.empty().append(this._generateHTML(inst));
            this._attachHandlers(inst);

            var origyearshtml,
                numMonths = this._getNumberOfMonths(inst),
                cols = numMonths[1],
                width = 17,
                activeCell = inst.dpDiv.find( "." + this._dayOverClass + " a" );

            if ( activeCell.length > 0 ) {
                datepicker_handleMouseover.apply( activeCell.get( 0 ) );
            }

            inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (cols > 1) {
                inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em");
            }
            inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") +
            "Class"]("ui-datepicker-multi");
            inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") +
            "Class"]("ui-datepicker-rtl");

            if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
                inst.input.focus();
            }

            // deffered render of the years select (to avoid flashes on Firefox)
            if( inst.yearshtml ){
                origyearshtml = inst.yearshtml;
                setTimeout(function(){
                    //assure that inst.yearshtml didn't change.
                    if( origyearshtml === inst.yearshtml && inst.yearshtml ){
                        inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
                    }
                    origyearshtml = inst.yearshtml = null;
                }, 0);
            }
        },

        // #6694 - don't focus the input if it's already focused
        // this breaks the change event in IE
        // Support: IE and jQuery <1.9
        _shouldFocusInput: function( inst ) {
            return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
        },

        /* Check positioning to remain on screen. */
        _checkOffset: function(inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth(),
                dpHeight = inst.dpDiv.outerHeight(),
                inputWidth = inst.input ? inst.input.outerWidth() : 0,
                inputHeight = inst.input ? inst.input.outerHeight() : 0,
                viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
                viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

            offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
            offset.left -= (isFixed && offset.left === inst.input.offset().left) ? $(document).scrollLeft() : 0;
            offset.top -= (isFixed && offset.top === (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

            // now check if datepicker is showing outside window viewport - move to a better place if so.
            offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
                Math.abs(offset.left + dpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
                Math.abs(dpHeight + inputHeight) : 0);

            return offset;
        },

        /* Find an object's position on the screen. */
        _findPos: function(obj) {
            var position,
                inst = this._getInst(obj),
                isRTL = this._get(inst, "isRTL");

            while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
                obj = obj[isRTL ? "previousSibling" : "nextSibling"];
            }

            position = $(obj).offset();
            return [position.left, position.top];
        },

        /* Hide the date picker from view.
         * @param  input  element - the input field attached to the date picker
         */
        _hideDatepicker: function(input) {
            var showAnim, duration, postProcess, onClose,
                inst = this._curInst;

            if (!inst || (input && inst !== $.data(input, "datepicker"))) {
                return;
            }

            if (this._datepickerShowing) {
                showAnim = this._get(inst, "showAnim");
                duration = this._get(inst, "duration");
                postProcess = function() {
                    $.datepicker._tidyDialog(inst);
                };

                // DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
                if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
                    inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
                } else {
                    inst.dpDiv[(showAnim === "slideDown" ? "slideUp" :
                        (showAnim === "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess);
                }

                if (!showAnim) {
                    postProcess();
                }
                this._datepickerShowing = false;

                onClose = this._get(inst, "onClose");
                if (onClose) {
                    onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]);
                }

                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" });
                    if ($.blockUI) {
                        $.unblockUI();
                        $("body").append(this.dpDiv);
                    }
                }
                this._inDialog = false;
            }
        },

        /* Tidy up after a dialog display. */
        _tidyDialog: function(inst) {
            inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
        },

        /* Close date picker if clicked elsewhere. */
        _checkExternalClick: function(event) {
            if (!$.datepicker._curInst) {
                return;
            }

            var $target = $(event.target),
                inst = $.datepicker._getInst($target[0]);

            if ( ( ( $target[0].id !== $.datepicker._mainDivId &&
                $target.parents("#" + $.datepicker._mainDivId).length === 0 &&
                !$target.hasClass($.datepicker.markerClassName) &&
                !$target.closest("." + $.datepicker._triggerClass).length &&
                $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
                ( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst ) ) {
                $.datepicker._hideDatepicker();
            }
        },

        /* Adjust one of the date sub-fields. */
        _adjustDate: function(id, offset, period) {
            var target = $(id),
                inst = this._getInst(target[0]);

            if (this._isDisabledDatepicker(target[0])) {
                return;
            }
            this._adjustInstDate(inst, offset +
                (period === "M" ? this._get(inst, "showCurrentAtPos") : 0), // undo positioning
                period);
            this._updateDatepicker(inst);
        },

        /* Action for current link. */
        _gotoToday: function(id) {
            var date,
                target = $(id),
                inst = this._getInst(target[0]);

            if (this._get(inst, "gotoCurrent") && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear;
            } else {
                date = new Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear();
            }
            this._notifyChange(inst);
            this._adjustDate(target);
        },

        /* Action for selecting a new month/year. */
        _selectMonthYear: function(id, select, period) {
            var target = $(id),
                inst = this._getInst(target[0]);

            inst["selected" + (period === "M" ? "Month" : "Year")] =
                inst["draw" + (period === "M" ? "Month" : "Year")] =
                    parseInt(select.options[select.selectedIndex].value,10);

            this._notifyChange(inst);
            this._adjustDate(target);
        },

        /* Action for selecting a day. */
        _selectDay: function(id, month, year, td) {
            var inst,
                target = $(id);

            if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
                return;
            }

            inst = this._getInst(target[0]);
            inst.selectedDay = inst.currentDay = $("a", td).html();
            inst.selectedMonth = inst.currentMonth = month;
            inst.selectedYear = inst.currentYear = year;
            this._selectDate(id, this._formatDate(inst,
                inst.currentDay, inst.currentMonth, inst.currentYear));
        },

        /* Erase the input field and hide the date picker. */
        _clearDate: function(id) {
            var target = $(id);
            this._selectDate(target, "");
        },

        /* Update the input field with the selected date. */
        _selectDate: function(id, dateStr) {
            var onSelect,
                target = $(id),
                inst = this._getInst(target[0]);

            dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
            if (inst.input) {
                inst.input.val(dateStr);
            }
            this._updateAlternate(inst);

            onSelect = this._get(inst, "onSelect");
            if (onSelect) {
                onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
            } else if (inst.input) {
                inst.input.trigger("change"); // fire the change event
            }

            if (inst.inline){
                this._updateDatepicker(inst);
            } else {
                this._hideDatepicker();
                this._lastInput = inst.input[0];
                if (typeof(inst.input[0]) !== "object") {
                    inst.input.focus(); // restore focus
                }
                this._lastInput = null;
            }
        },

        /* Update any alternate field to synchronise with the main field. */
        _updateAlternate: function(inst) {
            var altFormat, date, dateStr,
                altField = this._get(inst, "altField");

            if (altField) { // update alternate field too
                altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
                date = this._getDate(inst);
                dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
                $(altField).each(function() { $(this).val(dateStr); });
            }
        },

        /* Set as beforeShowDay function to prevent selection of weekends.
         * @param  date  Date - the date to customise
         * @return [boolean, string] - is this date selectable?, what is its CSS class?
         */
        noWeekends: function(date) {
            var day = date.getDay();
            return [(day > 0 && day < 6), ""];
        },

        /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
         * @param  date  Date - the date to get the week for
         * @return  number - the number of the week within the year that contains this date
         */
        iso8601Week: function(date) {
            var time,
                checkDate = new Date(date.getTime());

            // Find Thursday of this week starting on Monday
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

            time = checkDate.getTime();
            checkDate.setMonth(0); // Compare with Jan 1
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
        },

        /* Parse a string value into a date object.
         * See formatDate below for the possible formats.
         *
         * @param  format string - the expected format of the date
         * @param  value string - the date in the above format
         * @param  settings Object - attributes include:
         *					shortYearCutoff  number - the cutoff year for determining the century (optional)
         *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
         *					dayNames		string[7] - names of the days from Sunday (optional)
         *					monthNamesShort string[12] - abbreviated names of the months (optional)
         *					monthNames		string[12] - names of the months (optional)
         * @return  Date - the extracted date value or null if value is blank
         */
        parseDate: function (format, value, settings) {
            if (format == null || value == null) {
                throw "Invalid arguments";
            }

            value = (typeof value === "object" ? value.toString() : value + "");
            if (value === "") {
                return null;
            }

            var iFormat, dim, extra,
                iValue = 0,
                shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
                new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
                dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
                dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
                monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
                monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
                year = -1,
                month = -1,
                day = -1,
                doy = -1,
                literal = false,
                date,
            // Check whether a format character is doubled
                lookAhead = function(match) {
                    var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                    if (matches) {
                        iFormat++;
                    }
                    return matches;
                },
            // Extract a number from the string value
                getNumber = function(match) {
                    var isDoubled = lookAhead(match),
                        size = (match === "@" ? 14 : (match === "!" ? 20 :
                            (match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
                        minSize = (match === "y" ? size : 1),
                        digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
                        num = value.substring(iValue).match(digits);
                    if (!num) {
                        throw "Missing number at position " + iValue;
                    }
                    iValue += num[0].length;
                    return parseInt(num[0], 10);
                },
            // Extract a name from the string value and convert to an index
                getName = function(match, shortNames, longNames) {
                    var index = -1,
                        names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
                            return [ [k, v] ];
                        }).sort(function (a, b) {
                            return -(a[1].length - b[1].length);
                        });

                    $.each(names, function (i, pair) {
                        var name = pair[1];
                        if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                            index = pair[0];
                            iValue += name.length;
                            return false;
                        }
                    });
                    if (index !== -1) {
                        return index + 1;
                    } else {
                        throw "Unknown name at position " + iValue;
                    }
                },
            // Confirm that a literal character matches the string value
                checkLiteral = function() {
                    if (value.charAt(iValue) !== format.charAt(iFormat)) {
                        throw "Unexpected literal at position " + iValue;
                    }
                    iValue++;
                };

            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        checkLiteral();
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                        case "d":
                            day = getNumber("d");
                            break;
                        case "D":
                            getName("D", dayNamesShort, dayNames);
                            break;
                        case "o":
                            doy = getNumber("o");
                            break;
                        case "m":
                            month = getNumber("m");
                            break;
                        case "M":
                            month = getName("M", monthNamesShort, monthNames);
                            break;
                        case "y":
                            year = getNumber("y");
                            break;
                        case "@":
                            date = new Date(getNumber("@"));
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "!":
                            date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "'":
                            if (lookAhead("'")){
                                checkLiteral();
                            } else {
                                literal = true;
                            }
                            break;
                        default:
                            checkLiteral();
                    }
                }
            }

            if (iValue < value.length){
                extra = value.substr(iValue);
                if (!/^\s+/.test(extra)) {
                    throw "Extra/unparsed characters found in date: " + extra;
                }
            }

            if (year === -1) {
                year = new Date().getFullYear();
            } else if (year < 100) {
                year += new Date().getFullYear() - new Date().getFullYear() % 100 +
                (year <= shortYearCutoff ? 0 : -100);
            }

            if (doy > -1) {
                month = 1;
                day = doy;
                do {
                    dim = this._getDaysInMonth(year, month - 1);
                    if (day <= dim) {
                        break;
                    }
                    month++;
                    day -= dim;
                } while (true);
            }

            date = this._daylightSavingAdjust(new Date(year, month - 1, day));
            if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
                throw "Invalid date"; // E.g. 31/02/00
            }
            return date;
        },

        /* Standard date formats. */
        ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y", // RFC 822
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd", // ISO 8601

        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
        Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

        /* Format a date object into a string value.
         * The format can be combinations of the following:
         * d  - day of month (no leading zero)
         * dd - day of month (two digit)
         * o  - day of year (no leading zeros)
         * oo - day of year (three digit)
         * D  - day name short
         * DD - day name long
         * m  - month of year (no leading zero)
         * mm - month of year (two digit)
         * M  - month name short
         * MM - month name long
         * y  - year (two digit)
         * yy - year (four digit)
         * @ - Unix timestamp (ms since 01/01/1970)
         * ! - Windows ticks (100ns since 01/01/0001)
         * "..." - literal text
         * '' - single quote
         *
         * @param  format string - the desired format of the date
         * @param  date Date - the date value to format
         * @param  settings Object - attributes include:
         *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
         *					dayNames		string[7] - names of the days from Sunday (optional)
         *					monthNamesShort string[12] - abbreviated names of the months (optional)
         *					monthNames		string[12] - names of the months (optional)
         * @return  string - the date in the above format
         */
        formatDate: function (format, date, settings) {
            if (!date) {
                return "";
            }

            var iFormat,
                dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
                dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
                monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
                monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
            // Check whether a format character is doubled
                lookAhead = function(match) {
                    var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                    if (matches) {
                        iFormat++;
                    }
                    return matches;
                },
            // Format a number, with leading zero if necessary
                formatNumber = function(match, value, len) {
                    var num = "" + value;
                    if (lookAhead(match)) {
                        while (num.length < len) {
                            num = "0" + num;
                        }
                    }
                    return num;
                },
            // Format a name, short or long as requested
                formatName = function(match, value, shortNames, longNames) {
                    return (lookAhead(match) ? longNames[value] : shortNames[value]);
                },
                output = "",
                literal = false;

            if (date) {
                for (iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                            literal = false;
                        } else {
                            output += format.charAt(iFormat);
                        }
                    } else {
                        switch (format.charAt(iFormat)) {
                            case "d":
                                output += formatNumber("d", date.getDate(), 2);
                                break;
                            case "D":
                                output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                                break;
                            case "o":
                                output += formatNumber("o",
                                    Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case "m":
                                output += formatNumber("m", date.getMonth() + 1, 2);
                                break;
                            case "M":
                                output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                                break;
                            case "y":
                                output += (lookAhead("y") ? date.getFullYear() :
                                (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
                                break;
                            case "@":
                                output += date.getTime();
                                break;
                            case "!":
                                output += date.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case "'":
                                if (lookAhead("'")) {
                                    output += "'";
                                } else {
                                    literal = true;
                                }
                                break;
                            default:
                                output += format.charAt(iFormat);
                        }
                    }
                }
            }
            return output;
        },

        /* Extract all possible characters from the date format. */
        _possibleChars: function (format) {
            var iFormat,
                chars = "",
                literal = false,
            // Check whether a format character is doubled
                lookAhead = function(match) {
                    var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                    if (matches) {
                        iFormat++;
                    }
                    return matches;
                };

            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        chars += format.charAt(iFormat);
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                        case "d": case "m": case "y": case "@":
                        chars += "0123456789";
                        break;
                        case "D": case "M":
                        return null; // Accept anything
                        case "'":
                            if (lookAhead("'")) {
                                chars += "'";
                            } else {
                                literal = true;
                            }
                            break;
                        default:
                            chars += format.charAt(iFormat);
                    }
                }
            }
            return chars;
        },

        /* Get a setting value, defaulting if necessary. */
        _get: function(inst, name) {
            return inst.settings[name] !== undefined ?
                inst.settings[name] : this._defaults[name];
        },

        /* Parse existing date and initialise date picker. */
        _setDateFromField: function(inst, noDefault) {
            if (inst.input.val() === inst.lastVal) {
                return;
            }

            var dateFormat = this._get(inst, "dateFormat"),
                dates = inst.lastVal = inst.input ? inst.input.val() : null,
                defaultDate = this._getDefaultDate(inst),
                date = defaultDate,
                settings = this._getFormatConfig(inst);

            try {
                date = this.parseDate(dateFormat, dates, settings) || defaultDate;
            } catch (event) {
                dates = (noDefault ? "" : dates);
            }
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            inst.currentDay = (dates ? date.getDate() : 0);
            inst.currentMonth = (dates ? date.getMonth() : 0);
            inst.currentYear = (dates ? date.getFullYear() : 0);
            this._adjustInstDate(inst);
        },

        /* Retrieve the default date shown on opening. */
        _getDefaultDate: function(inst) {
            return this._restrictMinMax(inst,
                this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
        },

        /* A date may be specified as an exact value or a relative one. */
        _determineDate: function(inst, date, defaultDate) {
            var offsetNumeric = function(offset) {
                    var date = new Date();
                    date.setDate(date.getDate() + offset);
                    return date;
                },
                offsetString = function(offset) {
                    try {
                        return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
                            offset, $.datepicker._getFormatConfig(inst));
                    }
                    catch (e) {
                        // Ignore
                    }

                    var date = (offset.toLowerCase().match(/^c/) ?
                                $.datepicker._getDate(inst) : null) || new Date(),
                        year = date.getFullYear(),
                        month = date.getMonth(),
                        day = date.getDate(),
                        pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        matches = pattern.exec(offset);

                    while (matches) {
                        switch (matches[2] || "d") {
                            case "d" : case "D" :
                            day += parseInt(matches[1],10); break;
                            case "w" : case "W" :
                            day += parseInt(matches[1],10) * 7; break;
                            case "m" : case "M" :
                            month += parseInt(matches[1],10);
                            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                            break;
                            case "y": case "Y" :
                            year += parseInt(matches[1],10);
                            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                            break;
                        }
                        matches = pattern.exec(offset);
                    }
                    return new Date(year, month, day);
                },
                newDate = (date == null || date === "" ? defaultDate : (typeof date === "string" ? offsetString(date) :
                    (typeof date === "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));

            newDate = (newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate);
            if (newDate) {
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                newDate.setMilliseconds(0);
            }
            return this._daylightSavingAdjust(newDate);
        },

        /* Handle switch to/from daylight saving.
         * Hours may be non-zero on daylight saving cut-over:
         * > 12 when midnight changeover, but then cannot generate
         * midnight datetime, so jump to 1AM, otherwise reset.
         * @param  date  (Date) the date to check
         * @return  (Date) the corrected date
         */
        _daylightSavingAdjust: function(date) {
            if (!date) {
                return null;
            }
            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            return date;
        },

        /* Set the date(s) directly. */
        _setDate: function(inst, date, noChange) {
            var clear = !date,
                origMonth = inst.selectedMonth,
                origYear = inst.selectedYear,
                newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

            inst.selectedDay = inst.currentDay = newDate.getDate();
            inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
            if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
                this._notifyChange(inst);
            }
            this._adjustInstDate(inst);
            if (inst.input) {
                inst.input.val(clear ? "" : this._formatDate(inst));
            }
        },

        /* Retrieve the date(s) directly. */
        _getDate: function(inst) {
            var startDate = (!inst.currentYear || (inst.input && inst.input.val() === "") ? null :
                this._daylightSavingAdjust(new Date(
                    inst.currentYear, inst.currentMonth, inst.currentDay)));
            return startDate;
        },

        /* Attach the onxxx handlers.  These are declared statically so
         * they work with static code transformers like Caja.
         */
        _attachHandlers: function(inst) {
            var stepMonths = this._get(inst, "stepMonths"),
                id = "#" + inst.id.replace( /\\\\/g, "\\" );
            inst.dpDiv.find("[data-handler]").map(function () {
                var handler = {
                    prev: function () {
                        $.datepicker._adjustDate(id, -stepMonths, "M");
                    },
                    next: function () {
                        $.datepicker._adjustDate(id, +stepMonths, "M");
                    },
                    hide: function () {
                        $.datepicker._hideDatepicker();
                    },
                    today: function () {
                        $.datepicker._gotoToday(id);
                    },
                    selectDay: function () {
                        $.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false;
                    },
                    selectMonth: function () {
                        $.datepicker._selectMonthYear(id, this, "M");
                        return false;
                    },
                    selectYear: function () {
                        $.datepicker._selectMonthYear(id, this, "Y");
                        return false;
                    }
                };
                $(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
            });
        },

        /* Generate the HTML for the current state of the date picker. */
        _generateHTML: function(inst) {
            var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
                controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
                monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
                selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
                cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
                printDate, dRow, tbody, daySettings, otherMonth, unselectable,
                tempDate = new Date(),
                today = this._daylightSavingAdjust(
                    new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), // clear time
                isRTL = this._get(inst, "isRTL"),
                showButtonPanel = this._get(inst, "showButtonPanel"),
                hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
                navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
                numMonths = this._getNumberOfMonths(inst),
                showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
                stepMonths = this._get(inst, "stepMonths"),
                isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1),
                currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
                    new Date(inst.currentYear, inst.currentMonth, inst.currentDay))),
                minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                drawMonth = inst.drawMonth - showCurrentAtPos,
                drawYear = inst.drawYear;

            if (drawMonth < 0) {
                drawMonth += 12;
                drawYear--;
            }
            if (maxDate) {
                maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
                    maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
                maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
                while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
                    drawMonth--;
                    if (drawMonth < 0) {
                        drawMonth = 11;
                        drawYear--;
                    }
                }
            }
            inst.drawMonth = drawMonth;
            inst.drawYear = drawYear;

            prevText = this._get(inst, "prevText");
            prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
                this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
                this._getFormatConfig(inst)));

            prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
            "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
            " title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" :
                (hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+ prevText +"'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>"));

            nextText = this._get(inst, "nextText");
            nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
                this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
                this._getFormatConfig(inst)));

            next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
            "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
            " title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" :
                (hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+ nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>"));

            currentText = this._get(inst, "currentText");
            gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
            currentText = (!navigationAsDateFormat ? currentText :
                this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));

            controls = (!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
            this._get(inst, "closeText") + "</button>" : "");

            buttonPanel = (showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") +
            (this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
            ">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";

            firstDay = parseInt(this._get(inst, "firstDay"),10);
            firstDay = (isNaN(firstDay) ? 0 : firstDay);

            showWeek = this._get(inst, "showWeek");
            dayNames = this._get(inst, "dayNames");
            dayNamesMin = this._get(inst, "dayNamesMin");
            monthNames = this._get(inst, "monthNames");
            monthNamesShort = this._get(inst, "monthNamesShort");
            beforeShowDay = this._get(inst, "beforeShowDay");
            showOtherMonths = this._get(inst, "showOtherMonths");
            selectOtherMonths = this._get(inst, "selectOtherMonths");
            defaultDate = this._getDefaultDate(inst);
            html = "";
            dow;
            for (row = 0; row < numMonths[0]; row++) {
                group = "";
                this.maxRows = 4;
                for (col = 0; col < numMonths[1]; col++) {
                    selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
                    cornerClass = " ui-corner-all";
                    calender = "";
                    if (isMultiMonth) {
                        calender += "<div class='ui-datepicker-group";
                        if (numMonths[1] > 1) {
                            switch (col) {
                                case 0: calender += " ui-datepicker-group-first";
                                    cornerClass = " ui-corner-" + (isRTL ? "right" : "left"); break;
                                case numMonths[1]-1: calender += " ui-datepicker-group-last";
                                    cornerClass = " ui-corner-" + (isRTL ? "left" : "right"); break;
                                default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
                            }
                        }
                        calender += "'>";
                    }
                    calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
                    (/all|left/.test(cornerClass) && row === 0 ? (isRTL ? next : prev) : "") +
                    (/all|right/.test(cornerClass) && row === 0 ? (isRTL ? prev : next) : "") +
                    this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
                        row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
                    "</div><table class='ui-datepicker-calendar'><thead>" +
                    "<tr>";
                    thead = (showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "");
                    for (dow = 0; dow < 7; dow++) { // days of the week
                        day = (dow + firstDay) % 7;
                        thead += "<th scope='col'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" +
                        "<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
                    }
                    calender += thead + "</tr></thead><tbody>";
                    daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
                    if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
                        inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
                    }
                    leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
                    curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
                    numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
                    this.maxRows = numRows;
                    printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
                    for (dRow = 0; dRow < numRows; dRow++) { // create date picker rows
                        calender += "<tr>";
                        tbody = (!showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
                        this._get(inst, "calculateWeek")(printDate) + "</td>");
                        for (dow = 0; dow < 7; dow++) { // create date picker days
                            daySettings = (beforeShowDay ?
                                beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
                            otherMonth = (printDate.getMonth() !== drawMonth);
                            unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
                            (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
                            tbody += "<td class='" +
                            ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + // highlight weekends
                            (otherMonth ? " ui-datepicker-other-month" : "") + // highlight days from other months
                            ((printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent) || // user pressed key
                            (defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime()) ?
                                // or defaultDate is current printedDate and defaultDate is selectedDate
                            " " + this._dayOverClass : "") + // highlight selected day
                            (unselectable ? " " + this._unselectableClass + " ui-state-disabled": "") +  // highlight unselectable days
                            (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + // highlight custom dates
                            (printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + // highlight selected day
                            (printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + // highlight today (if different)
                            ((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + // cell title
                            (unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + // actions
                            (otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
                                (unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
                                (printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") +
                                (printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + // highlight selected day
                                (otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
                                "' href='#'>" + printDate.getDate() + "</a>")) + "</td>"; // display selectable date
                            printDate.setDate(printDate.getDate() + 1);
                            printDate = this._daylightSavingAdjust(printDate);
                        }
                        calender += tbody + "</tr>";
                    }
                    drawMonth++;
                    if (drawMonth > 11) {
                        drawMonth = 0;
                        drawYear++;
                    }
                    calender += "</tbody></table>" + (isMultiMonth ? "</div>" +
                    ((numMonths[0] > 0 && col === numMonths[1]-1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    group += calender;
                }
                html += group;
            }
            html += buttonPanel;
            inst._keyEvent = false;
            return html;
        },

        /* Generate the month and year header. */
        _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
                                           secondary, monthNames, monthNamesShort) {

            var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
                changeMonth = this._get(inst, "changeMonth"),
                changeYear = this._get(inst, "changeYear"),
                showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
                html = "<div class='ui-datepicker-title'>",
                monthHtml = "";

            // month selection
            if (secondary || !changeMonth) {
                monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
            } else {
                inMinYear = (minDate && minDate.getFullYear() === drawYear);
                inMaxYear = (maxDate && maxDate.getFullYear() === drawYear);
                monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for ( month = 0; month < 12; month++) {
                    if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
                        monthHtml += "<option value='" + month + "'" +
                        (month === drawMonth ? " selected='selected'" : "") +
                        ">" + monthNamesShort[month] + "</option>";
                    }
                }
                monthHtml += "</select>";
            }

            if (!showMonthAfterYear) {
                html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
            }

            // year selection
            if ( !inst.yearshtml ) {
                inst.yearshtml = "";
                if (secondary || !changeYear) {
                    html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
                } else {
                    // determine range of years to display
                    years = this._get(inst, "yearRange").split(":");
                    thisYear = new Date().getFullYear();
                    determineYear = function(value) {
                        var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) :
                            (value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) :
                                parseInt(value, 10)));
                        return (isNaN(year) ? thisYear : year);
                    };
                    year = determineYear(years[0]);
                    endYear = Math.max(year, determineYear(years[1] || ""));
                    year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
                    endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
                    inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; year <= endYear; year++) {
                        inst.yearshtml += "<option value='" + year + "'" +
                        (year === drawYear ? " selected='selected'" : "") +
                        ">" + year + "</option>";
                    }
                    inst.yearshtml += "</select>";

                    html += inst.yearshtml;
                    inst.yearshtml = null;
                }
            }

            html += this._get(inst, "yearSuffix");
            if (showMonthAfterYear) {
                html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
            }
            html += "</div>"; // Close datepicker_header
            return html;
        },

        /* Adjust one of the date sub-fields. */
        _adjustInstDate: function(inst, offset, period) {
            var year = inst.drawYear + (period === "Y" ? offset : 0),
                month = inst.drawMonth + (period === "M" ? offset : 0),
                day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
                date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            if (period === "M" || period === "Y") {
                this._notifyChange(inst);
            }
        },

        /* Ensure a date is within any min/max bounds. */
        _restrictMinMax: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                newDate = (minDate && date < minDate ? minDate : date);
            return (maxDate && newDate > maxDate ? maxDate : newDate);
        },

        /* Notify change of month/year. */
        _notifyChange: function(inst) {
            var onChange = this._get(inst, "onChangeMonthYear");
            if (onChange) {
                onChange.apply((inst.input ? inst.input[0] : null),
                    [inst.selectedYear, inst.selectedMonth + 1, inst]);
            }
        },

        /* Determine the number of months to show. */
        _getNumberOfMonths: function(inst) {
            var numMonths = this._get(inst, "numberOfMonths");
            return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths));
        },

        /* Determine the current maximum date - ensure no time components are set. */
        _getMinMaxDate: function(inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
        },

        /* Find the number of days in a given month. */
        _getDaysInMonth: function(year, month) {
            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
        },

        /* Find the day of the week of the first of a month. */
        _getFirstDayOfMonth: function(year, month) {
            return new Date(year, month, 1).getDay();
        },

        /* Determines if we should allow a "next/prev" month display change. */
        _canAdjustMonth: function(inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst),
                date = this._daylightSavingAdjust(new Date(curYear,
                    curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

            if (offset < 0) {
                date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
            }
            return this._isInRange(inst, date);
        },

        /* Is the given date in the accepted range? */
        _isInRange: function(inst, date) {
            var yearSplit, currentYear,
                minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                minYear = null,
                maxYear = null,
                years = this._get(inst, "yearRange");
            if (years){
                yearSplit = years.split(":");
                currentYear = new Date().getFullYear();
                minYear = parseInt(yearSplit[0], 10);
                maxYear = parseInt(yearSplit[1], 10);
                if ( yearSplit[0].match(/[+\-].*/) ) {
                    minYear += currentYear;
                }
                if ( yearSplit[1].match(/[+\-].*/) ) {
                    maxYear += currentYear;
                }
            }

            return ((!minDate || date.getTime() >= minDate.getTime()) &&
            (!maxDate || date.getTime() <= maxDate.getTime()) &&
            (!minYear || date.getFullYear() >= minYear) &&
            (!maxYear || date.getFullYear() <= maxYear));
        },

        /* Provide the configuration settings for formatting/parsing. */
        _getFormatConfig: function(inst) {
            var shortYearCutoff = this._get(inst, "shortYearCutoff");
            shortYearCutoff = (typeof shortYearCutoff !== "string" ? shortYearCutoff :
            new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
            return {shortYearCutoff: shortYearCutoff,
                dayNamesShort: this._get(inst, "dayNamesShort"), dayNames: this._get(inst, "dayNames"),
                monthNamesShort: this._get(inst, "monthNamesShort"), monthNames: this._get(inst, "monthNames")};
        },

        /* Format the given date for display. */
        _formatDate: function(inst, day, month, year) {
            if (!day) {
                inst.currentDay = inst.selectedDay;
                inst.currentMonth = inst.selectedMonth;
                inst.currentYear = inst.selectedYear;
            }
            var date = (day ? (typeof day === "object" ? day :
                this._daylightSavingAdjust(new Date(year, month, day))) :
                this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
        }
    });

    /*
     * Bind hover events for datepicker elements.
     * Done via delegate so the binding only occurs once in the lifetime of the parent div.
     * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
     */
    function datepicker_bindHover(dpDiv) {
        var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return dpDiv.delegate(selector, "mouseout", function() {
            $(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).removeClass("ui-datepicker-prev-hover");
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).removeClass("ui-datepicker-next-hover");
            }
        })
            .delegate( selector, "mouseover", datepicker_handleMouseover );
    }

    function datepicker_handleMouseover() {
        if (!$.datepicker._isDisabledDatepicker( datepicker_instActive.inline? datepicker_instActive.dpDiv.parent()[0] : datepicker_instActive.input[0])) {
            $(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
            $(this).addClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).addClass("ui-datepicker-prev-hover");
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).addClass("ui-datepicker-next-hover");
            }
        }
    }

    /* jQuery extend now ignores nulls! */
    function datepicker_extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] == null) {
                target[name] = props[name];
            }
        }
        return target;
    }

    /* Invoke the datepicker functionality.
     @param  options  string - a command, optionally followed by additional parameters or
     Object - settings for attaching new datepicker functionality
     @return  jQuery object */
    $.fn.datepicker = function(options){

        /* Verify an empty collection wasn't passed - Fixes #6976 */
        if ( !this.length ) {
            return this;
        }

        /* Initialise the date picker. */
        if (!$.datepicker.initialized) {
            $(document).mousedown($.datepicker._checkExternalClick);
            $.datepicker.initialized = true;
        }

        /* Append datepicker main container to body if not exist. */
        if ($("#"+$.datepicker._mainDivId).length === 0) {
            $("body").append($.datepicker.dpDiv);
        }

        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
            return $.datepicker["_" + options + "Datepicker"].
                apply($.datepicker, [this[0]].concat(otherArgs));
        }
        if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return $.datepicker["_" + options + "Datepicker"].
                apply($.datepicker, [this[0]].concat(otherArgs));
        }
        return this.each(function() {
            typeof options === "string" ?
                $.datepicker["_" + options + "Datepicker"].
                    apply($.datepicker, [this].concat(otherArgs)) :
                $.datepicker._attachDatepicker(this, options);
        });
    };

    $.datepicker = new Datepicker(); // singleton instance
    $.datepicker.initialized = false;
    $.datepicker.uuid = new Date().getTime();
    $.datepicker.version = "1.11.4";

    var datepicker = $.datepicker;


    /*!
     * jQuery UI Draggable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/draggable/
     */


    $.widget("ui.draggable", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,

            // callbacks
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {

            if ( this.options.helper === "original" ) {
                this._setPositionRelative();
            }
            if (this.options.addClasses){
                this.element.addClass("ui-draggable");
            }
            if (this.options.disabled){
                this.element.addClass("ui-draggable-disabled");
            }
            this._setHandleClassName();

            this._mouseInit();
        },

        _setOption: function( key, value ) {
            this._super( key, value );
            if ( key === "handle" ) {
                this._removeHandleClassName();
                this._setHandleClassName();
            }
        },

        _destroy: function() {
            if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
                this.destroyOnClear = true;
                return;
            }
            this.element.removeClass( "ui-draggable ui-draggable-dragging ui-draggable-disabled" );
            this._removeHandleClassName();
            this._mouseDestroy();
        },

        _mouseCapture: function(event) {
            var o = this.options;

            this._blurActiveElement( event );

            // among others, prevent a drag on a resizable-handle
            if (this.helper || o.disabled || $(event.target).closest(".ui-resizable-handle").length > 0) {
                return false;
            }

            //Quit if we're not on a valid handle
            this.handle = this._getHandle(event);
            if (!this.handle) {
                return false;
            }

            this._blockFrames( o.iframeFix === true ? "iframe" : o.iframeFix );

            return true;

        },

        _blockFrames: function( selector ) {
            this.iframeBlocks = this.document.find( selector ).map(function() {
                var iframe = $( this );

                return $( "<div>" )
                    .css( "position", "absolute" )
                    .appendTo( iframe.parent() )
                    .outerWidth( iframe.outerWidth() )
                    .outerHeight( iframe.outerHeight() )
                    .offset( iframe.offset() )[ 0 ];
            });
        },

        _unblockFrames: function() {
            if ( this.iframeBlocks ) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },

        _blurActiveElement: function( event ) {
            var document = this.document[ 0 ];

            // Only need to blur if the event occurred on the draggable itself, see #10527
            if ( !this.handleElement.is( event.target ) ) {
                return;
            }

            // support: IE9
            // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
            try {

                // Support: IE9, IE10
                // If the <body> is blurred, IE will switch windows, see #9520
                if ( document.activeElement && document.activeElement.nodeName.toLowerCase() !== "body" ) {

                    // Blur any element that currently has focus, see #4261
                    $( document.activeElement ).blur();
                }
            } catch ( error ) {}
        },

        _mouseStart: function(event) {

            var o = this.options;

            //Create and append the visible helper
            this.helper = this._createHelper(event);

            this.helper.addClass("ui-draggable-dragging");

            //Cache the helper size
            this._cacheHelperProportions();

            //If ddmanager is used for droppables, set the global draggable
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }

            /*
             * - Position generation -
             * This block generates everything position related - it's the core of draggables.
             */

            //Cache the margins of the original element
            this._cacheMargins();

            //Store the helper's css position
            this.cssPosition = this.helper.css( "position" );
            this.scrollParent = this.helper.scrollParent( true );
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = this.helper.parents().filter(function() {
                return $( this ).css( "position" ) === "fixed";
            }).length > 0;

            //The element's absolute position on the page minus margins
            this.positionAbs = this.element.offset();
            this._refreshOffsets( event );

            //Generate the original position
            this.originalPosition = this.position = this._generatePosition( event, false );
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
            (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

            //Set a containment if given in the options
            this._setContainment();

            //Trigger event + callbacks
            if (this._trigger("start", event) === false) {
                this._clear();
                return false;
            }

            //Recache the helper size
            this._cacheHelperProportions();

            //Prepare the droppable offsets
            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }

            // Reset helper's right/bottom css if they're set and set explicit width/height instead
            // as this prevents resizing of elements with right/bottom set (see #7772)
            this._normalizeRightBottom();

            this._mouseDrag(event, true); //Execute the drag once - this causes the helper not to be visible before getting its correct position

            //If the ddmanager is used for droppables, inform the manager that dragging has started (see #5003)
            if ( $.ui.ddmanager ) {
                $.ui.ddmanager.dragStart(this, event);
            }

            return true;
        },

        _refreshOffsets: function( event ) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: false,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };

            this.offset.click = {
                left: event.pageX - this.offset.left,
                top: event.pageY - this.offset.top
            };
        },

        _mouseDrag: function(event, noPropagation) {
            // reset any necessary cached properties (see #5009)
            if ( this.hasFixedAncestor ) {
                this.offset.parent = this._getParentOffset();
            }

            //Compute the helpers position
            this.position = this._generatePosition( event, true );
            this.positionAbs = this._convertPositionTo("absolute");

            //Call plugins and callbacks and use the resulting position if something is returned
            if (!noPropagation) {
                var ui = this._uiHash();
                if (this._trigger("drag", event, ui) === false) {
                    this._mouseUp({});
                    return false;
                }
                this.position = ui.position;
            }

            this.helper[ 0 ].style.left = this.position.left + "px";
            this.helper[ 0 ].style.top = this.position.top + "px";

            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }

            return false;
        },

        _mouseStop: function(event) {

            //If we are using droppables, inform the manager about the drop
            var that = this,
                dropped = false;
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                dropped = $.ui.ddmanager.drop(this, event);
            }

            //if a drop comes from outside (a sortable)
            if (this.dropped) {
                dropped = this.dropped;
                this.dropped = false;
            }

            if ((this.options.revert === "invalid" && !dropped) || (this.options.revert === "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) {
                $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (that._trigger("stop", event) !== false) {
                        that._clear();
                    }
                });
            } else {
                if (this._trigger("stop", event) !== false) {
                    this._clear();
                }
            }

            return false;
        },

        _mouseUp: function( event ) {
            this._unblockFrames();

            //If the ddmanager is used for droppables, inform the manager that dragging has stopped (see #5003)
            if ( $.ui.ddmanager ) {
                $.ui.ddmanager.dragStop(this, event);
            }

            // Only need to focus if the event occurred on the draggable itself, see #10527
            if ( this.handleElement.is( event.target ) ) {
                // The interaction is over; whether or not the click resulted in a drag, focus the element
                this.element.focus();
            }

            return $.ui.mouse.prototype._mouseUp.call(this, event);
        },

        cancel: function() {

            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({});
            } else {
                this._clear();
            }

            return this;

        },

        _getHandle: function(event) {
            return this.options.handle ?
                !!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
                true;
        },

        _setHandleClassName: function() {
            this.handleElement = this.options.handle ?
                this.element.find( this.options.handle ) : this.element;
            this.handleElement.addClass( "ui-draggable-handle" );
        },

        _removeHandleClassName: function() {
            this.handleElement.removeClass( "ui-draggable-handle" );
        },

        _createHelper: function(event) {

            var o = this.options,
                helperIsFunction = $.isFunction( o.helper ),
                helper = helperIsFunction ?
                    $( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
                    ( o.helper === "clone" ?
                        this.element.clone().removeAttr( "id" ) :
                        this.element );

            if (!helper.parents("body").length) {
                helper.appendTo((o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo));
            }

            // http://bugs.jqueryui.com/ticket/9446
            // a helper function can return the original element
            // which wouldn't have been set to relative in _create
            if ( helperIsFunction && helper[ 0 ] === this.element[ 0 ] ) {
                this._setPositionRelative();
            }

            if (helper[0] !== this.element[0] && !(/(fixed|absolute)/).test(helper.css("position"))) {
                helper.css("position", "absolute");
            }

            return helper;

        },

        _setPositionRelative: function() {
            if ( !( /^(?:r|a|f)/ ).test( this.element.css( "position" ) ) ) {
                this.element[ 0 ].style.position = "relative";
            }
        },

        _adjustOffsetFromHelper: function(obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = { left: +obj[0], top: +obj[1] || 0 };
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },

        _isRootNode: function( element ) {
            return ( /(html|body)/i ).test( element.tagName ) || element === this.document[ 0 ];
        },

        _getParentOffset: function() {

            //Get the offsetParent and cache its position
            var po = this.offsetParent.offset(),
                document = this.document[ 0 ];

            // This is a special case where we need to modify a offset calculated on start, since the following happened:
            // 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
            // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
            //    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }

            if ( this._isRootNode( this.offsetParent[ 0 ] ) ) {
                po = { top: 0, left: 0 };
            }

            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };

        },

        _getRelativeOffset: function() {
            if ( this.cssPosition !== "relative" ) {
                return { top: 0, left: 0 };
            }

            var p = this.element.position(),
                scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

            return {
                top: p.top - ( parseInt(this.helper.css( "top" ), 10) || 0 ) + ( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
                left: p.left - ( parseInt(this.helper.css( "left" ), 10) || 0 ) + ( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
            };

        },

        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            };
        },

        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },

        _setContainment: function() {

            var isUserScrollable, c, ce,
                o = this.options,
                document = this.document[ 0 ];

            this.relativeContainer = null;

            if ( !o.containment ) {
                this.containment = null;
                return;
            }

            if ( o.containment === "window" ) {
                this.containment = [
                    $( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                    $( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                    $( window ).scrollLeft() + $( window ).width() - this.helperProportions.width - this.margins.left,
                    $( window ).scrollTop() + ( $( window ).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
                ];
                return;
            }

            if ( o.containment === "document") {
                this.containment = [
                    0,
                    0,
                    $( document ).width() - this.helperProportions.width - this.margins.left,
                    ( $( document ).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
                ];
                return;
            }

            if ( o.containment.constructor === Array ) {
                this.containment = o.containment;
                return;
            }

            if ( o.containment === "parent" ) {
                o.containment = this.helper[ 0 ].parentNode;
            }

            c = $( o.containment );
            ce = c[ 0 ];

            if ( !ce ) {
                return;
            }

            isUserScrollable = /(scroll|auto)/.test( c.css( "overflow" ) );

            this.containment = [
                ( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) + ( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
                ( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) + ( parseInt( c.css( "paddingTop" ), 10 ) || 0 ),
                ( isUserScrollable ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
                ( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) -
                ( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) -
                this.helperProportions.width -
                this.margins.left -
                this.margins.right,
                ( isUserScrollable ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
                ( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) -
                ( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) -
                this.helperProportions.height -
                this.margins.top -
                this.margins.bottom
            ];
            this.relativeContainer = c;
        },

        _convertPositionTo: function(d, pos) {

            if (!pos) {
                pos = this.position;
            }

            var mod = d === "absolute" ? 1 : -1,
                scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

            return {
                top: (
                pos.top	+																// The absolute mouse position
                this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.top * mod -										// The offsetParent's offset without borders (offset + border)
                ( ( this.cssPosition === "fixed" ? -this.offset.scroll.top : ( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod)
                ),
                left: (
                pos.left +																// The absolute mouse position
                this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.left * mod	-										// The offsetParent's offset without borders (offset + border)
                ( ( this.cssPosition === "fixed" ? -this.offset.scroll.left : ( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod)
                )
            };

        },

        _generatePosition: function( event, constrainPosition ) {

            var containment, co, top, left,
                o = this.options,
                scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] ),
                pageX = event.pageX,
                pageY = event.pageY;

            // Cache the scroll
            if ( !scrollIsRootNode || !this.offset.scroll ) {
                this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                };
            }

            /*
             * - Position constraining -
             * Constrain the position to a mix of grid, containment.
             */

            // If we are not dragging yet, we won't check for options
            if ( constrainPosition ) {
                if ( this.containment ) {
                    if ( this.relativeContainer ){
                        co = this.relativeContainer.offset();
                        containment = [
                            this.containment[ 0 ] + co.left,
                            this.containment[ 1 ] + co.top,
                            this.containment[ 2 ] + co.left,
                            this.containment[ 3 ] + co.top
                        ];
                    } else {
                        containment = this.containment;
                    }

                    if (event.pageX - this.offset.click.left < containment[0]) {
                        pageX = containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < containment[1]) {
                        pageY = containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > containment[2]) {
                        pageX = containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > containment[3]) {
                        pageY = containment[3] + this.offset.click.top;
                    }
                }

                if (o.grid) {
                    //Check for grid elements set to 0 to prevent divide by 0 error causing invalid argument errors in IE (see ticket #6950)
                    top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
                    pageY = containment ? ((top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3]) ? top : ((top - this.offset.click.top >= containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

                    left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
                    pageX = containment ? ((left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2]) ? left : ((left - this.offset.click.left >= containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
                }

                if ( o.axis === "y" ) {
                    pageX = this.originalPageX;
                }

                if ( o.axis === "x" ) {
                    pageY = this.originalPageY;
                }
            }

            return {
                top: (
                pageY -																	// The absolute mouse position
                this.offset.click.top	-												// Click offset (relative to the element)
                this.offset.relative.top -												// Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
                ( this.cssPosition === "fixed" ? -this.offset.scroll.top : ( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
                ),
                left: (
                pageX -																	// The absolute mouse position
                this.offset.click.left -												// Click offset (relative to the element)
                this.offset.relative.left -												// Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
                ( this.cssPosition === "fixed" ? -this.offset.scroll.left : ( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
                )
            };

        },

        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove();
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
            if ( this.destroyOnClear ) {
                this.destroy();
            }
        },

        _normalizeRightBottom: function() {
            if ( this.options.axis !== "y" && this.helper.css( "right" ) !== "auto" ) {
                this.helper.width( this.helper.width() );
                this.helper.css( "right", "auto" );
            }
            if ( this.options.axis !== "x" && this.helper.css( "bottom" ) !== "auto" ) {
                this.helper.height( this.helper.height() );
                this.helper.css( "bottom", "auto" );
            }
        },

        // From now on bulk stuff - mainly helpers

        _trigger: function( type, event, ui ) {
            ui = ui || this._uiHash();
            $.ui.plugin.call( this, type, [ event, ui, this ], true );

            // Absolute position and offset (see #6884 ) have to be recalculated after plugins
            if ( /^(drag|start|stop)/.test( type ) ) {
                this.positionAbs = this._convertPositionTo( "absolute" );
                ui.offset = this.positionAbs;
            }
            return $.Widget.prototype._trigger.call( this, type, event, ui );
        },

        plugins: {},

        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }

    });

    $.ui.plugin.add( "draggable", "connectToSortable", {
        start: function( event, ui, draggable ) {
            var uiSortable = $.extend( {}, ui, {
                item: draggable.element
            });

            draggable.sortables = [];
            $( draggable.options.connectToSortable ).each(function() {
                var sortable = $( this ).sortable( "instance" );

                if ( sortable && !sortable.options.disabled ) {
                    draggable.sortables.push( sortable );

                    // refreshPositions is called at drag start to refresh the containerCache
                    // which is used in drag. This ensures it's initialized and synchronized
                    // with any changes that might have happened on the page since initialization.
                    sortable.refreshPositions();
                    sortable._trigger("activate", event, uiSortable);
                }
            });
        },
        stop: function( event, ui, draggable ) {
            var uiSortable = $.extend( {}, ui, {
                item: draggable.element
            });

            draggable.cancelHelperRemoval = false;

            $.each( draggable.sortables, function() {
                var sortable = this;

                if ( sortable.isOver ) {
                    sortable.isOver = 0;

                    // Allow this sortable to handle removing the helper
                    draggable.cancelHelperRemoval = true;
                    sortable.cancelHelperRemoval = false;

                    // Use _storedCSS To restore properties in the sortable,
                    // as this also handles revert (#9675) since the draggable
                    // may have modified them in unexpected ways (#8809)
                    sortable._storedCSS = {
                        position: sortable.placeholder.css( "position" ),
                        top: sortable.placeholder.css( "top" ),
                        left: sortable.placeholder.css( "left" )
                    };

                    sortable._mouseStop(event);

                    // Once drag has ended, the sortable should return to using
                    // its original helper, not the shared helper from draggable
                    sortable.options.helper = sortable.options._helper;
                } else {
                    // Prevent this Sortable from removing the helper.
                    // However, don't set the draggable to remove the helper
                    // either as another connected Sortable may yet handle the removal.
                    sortable.cancelHelperRemoval = true;

                    sortable._trigger( "deactivate", event, uiSortable );
                }
            });
        },
        drag: function( event, ui, draggable ) {
            $.each( draggable.sortables, function() {
                var innermostIntersecting = false,
                    sortable = this;

                // Copy over variables that sortable's _intersectsWith uses
                sortable.positionAbs = draggable.positionAbs;
                sortable.helperProportions = draggable.helperProportions;
                sortable.offset.click = draggable.offset.click;

                if ( sortable._intersectsWith( sortable.containerCache ) ) {
                    innermostIntersecting = true;

                    $.each( draggable.sortables, function() {
                        // Copy over variables that sortable's _intersectsWith uses
                        this.positionAbs = draggable.positionAbs;
                        this.helperProportions = draggable.helperProportions;
                        this.offset.click = draggable.offset.click;

                        if ( this !== sortable &&
                            this._intersectsWith( this.containerCache ) &&
                            $.contains( sortable.element[ 0 ], this.element[ 0 ] ) ) {
                            innermostIntersecting = false;
                        }

                        return innermostIntersecting;
                    });
                }

                if ( innermostIntersecting ) {
                    // If it intersects, we use a little isOver variable and set it once,
                    // so that the move-in stuff gets fired only once.
                    if ( !sortable.isOver ) {
                        sortable.isOver = 1;

                        // Store draggable's parent in case we need to reappend to it later.
                        draggable._parent = ui.helper.parent();

                        sortable.currentItem = ui.helper
                            .appendTo( sortable.element )
                            .data( "ui-sortable-item", true );

                        // Store helper option to later restore it
                        sortable.options._helper = sortable.options.helper;

                        sortable.options.helper = function() {
                            return ui.helper[ 0 ];
                        };

                        // Fire the start events of the sortable with our passed browser event,
                        // and our own helper (so it doesn't create a new one)
                        event.target = sortable.currentItem[ 0 ];
                        sortable._mouseCapture( event, true );
                        sortable._mouseStart( event, true, true );

                        // Because the browser event is way off the new appended portlet,
                        // modify necessary variables to reflect the changes
                        sortable.offset.click.top = draggable.offset.click.top;
                        sortable.offset.click.left = draggable.offset.click.left;
                        sortable.offset.parent.left -= draggable.offset.parent.left -
                        sortable.offset.parent.left;
                        sortable.offset.parent.top -= draggable.offset.parent.top -
                        sortable.offset.parent.top;

                        draggable._trigger( "toSortable", event );

                        // Inform draggable that the helper is in a valid drop zone,
                        // used solely in the revert option to handle "valid/invalid".
                        draggable.dropped = sortable.element;

                        // Need to refreshPositions of all sortables in the case that
                        // adding to one sortable changes the location of the other sortables (#9675)
                        $.each( draggable.sortables, function() {
                            this.refreshPositions();
                        });

                        // hack so receive/update callbacks work (mostly)
                        draggable.currentItem = draggable.element;
                        sortable.fromOutside = draggable;
                    }

                    if ( sortable.currentItem ) {
                        sortable._mouseDrag( event );
                        // Copy the sortable's position because the draggable's can potentially reflect
                        // a relative position, while sortable is always absolute, which the dragged
                        // element has now become. (#8809)
                        ui.position = sortable.position;
                    }
                } else {
                    // If it doesn't intersect with the sortable, and it intersected before,
                    // we fake the drag stop of the sortable, but make sure it doesn't remove
                    // the helper by using cancelHelperRemoval.
                    if ( sortable.isOver ) {

                        sortable.isOver = 0;
                        sortable.cancelHelperRemoval = true;

                        // Calling sortable's mouseStop would trigger a revert,
                        // so revert must be temporarily false until after mouseStop is called.
                        sortable.options._revert = sortable.options.revert;
                        sortable.options.revert = false;

                        sortable._trigger( "out", event, sortable._uiHash( sortable ) );
                        sortable._mouseStop( event, true );

                        // restore sortable behaviors that were modfied
                        // when the draggable entered the sortable area (#9481)
                        sortable.options.revert = sortable.options._revert;
                        sortable.options.helper = sortable.options._helper;

                        if ( sortable.placeholder ) {
                            sortable.placeholder.remove();
                        }

                        // Restore and recalculate the draggable's offset considering the sortable
                        // may have modified them in unexpected ways. (#8809, #10669)
                        ui.helper.appendTo( draggable._parent );
                        draggable._refreshOffsets( event );
                        ui.position = draggable._generatePosition( event, true );

                        draggable._trigger( "fromSortable", event );

                        // Inform draggable that the helper is no longer in a valid drop zone
                        draggable.dropped = false;

                        // Need to refreshPositions of all sortables just in case removing
                        // from one sortable changes the location of other sortables (#9675)
                        $.each( draggable.sortables, function() {
                            this.refreshPositions();
                        });
                    }
                }
            });
        }
    });

    $.ui.plugin.add("draggable", "cursor", {
        start: function( event, ui, instance ) {
            var t = $( "body" ),
                o = instance.options;

            if (t.css("cursor")) {
                o._cursor = t.css("cursor");
            }
            t.css("cursor", o.cursor);
        },
        stop: function( event, ui, instance ) {
            var o = instance.options;
            if (o._cursor) {
                $("body").css("cursor", o._cursor);
            }
        }
    });

    $.ui.plugin.add("draggable", "opacity", {
        start: function( event, ui, instance ) {
            var t = $( ui.helper ),
                o = instance.options;
            if (t.css("opacity")) {
                o._opacity = t.css("opacity");
            }
            t.css("opacity", o.opacity);
        },
        stop: function( event, ui, instance ) {
            var o = instance.options;
            if (o._opacity) {
                $(ui.helper).css("opacity", o._opacity);
            }
        }
    });

    $.ui.plugin.add("draggable", "scroll", {
        start: function( event, ui, i ) {
            if ( !i.scrollParentNotHidden ) {
                i.scrollParentNotHidden = i.helper.scrollParent( false );
            }

            if ( i.scrollParentNotHidden[ 0 ] !== i.document[ 0 ] && i.scrollParentNotHidden[ 0 ].tagName !== "HTML" ) {
                i.overflowOffset = i.scrollParentNotHidden.offset();
            }
        },
        drag: function( event, ui, i  ) {

            var o = i.options,
                scrolled = false,
                scrollParent = i.scrollParentNotHidden[ 0 ],
                document = i.document[ 0 ];

            if ( scrollParent !== document && scrollParent.tagName !== "HTML" ) {
                if ( !o.axis || o.axis !== "x" ) {
                    if ( ( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY < o.scrollSensitivity ) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
                    } else if ( event.pageY - i.overflowOffset.top < o.scrollSensitivity ) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
                    }
                }

                if ( !o.axis || o.axis !== "y" ) {
                    if ( ( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX < o.scrollSensitivity ) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
                    } else if ( event.pageX - i.overflowOffset.left < o.scrollSensitivity ) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
                    }
                }

            } else {

                if (!o.axis || o.axis !== "x") {
                    if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
                    } else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
                    }
                }

                if (!o.axis || o.axis !== "y") {
                    if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
                    } else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
                    }
                }

            }

            if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(i, event);
            }

        }
    });

    $.ui.plugin.add("draggable", "snap", {
        start: function( event, ui, i ) {

            var o = i.options;

            i.snapElements = [];

            $(o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap).each(function() {
                var $t = $(this),
                    $o = $t.offset();
                if (this !== i.element[0]) {
                    i.snapElements.push({
                        item: this,
                        width: $t.outerWidth(), height: $t.outerHeight(),
                        top: $o.top, left: $o.left
                    });
                }
            });

        },
        drag: function( event, ui, inst ) {

            var ts, bs, ls, rs, l, r, t, b, i, first,
                o = inst.options,
                d = o.snapTolerance,
                x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
                y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

            for (i = inst.snapElements.length - 1; i >= 0; i--){

                l = inst.snapElements[i].left - inst.margins.left;
                r = l + inst.snapElements[i].width;
                t = inst.snapElements[i].top - inst.margins.top;
                b = t + inst.snapElements[i].height;

                if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains( inst.snapElements[ i ].item.ownerDocument, inst.snapElements[ i ].item ) ) {
                    if (inst.snapElements[i].snapping) {
                        (inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
                    }
                    inst.snapElements[i].snapping = false;
                    continue;
                }

                if (o.snapMode !== "inner") {
                    ts = Math.abs(t - y2) <= d;
                    bs = Math.abs(b - y1) <= d;
                    ls = Math.abs(l - x2) <= d;
                    rs = Math.abs(r - x1) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", { top: t - inst.helperProportions.height, left: 0 }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", { top: b, left: 0 }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l - inst.helperProportions.width }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r }).left;
                    }
                }

                first = (ts || bs || ls || rs);

                if (o.snapMode !== "outer") {
                    ts = Math.abs(t - y1) <= d;
                    bs = Math.abs(b - y2) <= d;
                    ls = Math.abs(l - x1) <= d;
                    rs = Math.abs(r - x2) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", { top: t, left: 0 }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", { top: b - inst.helperProportions.height, left: 0 }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r - inst.helperProportions.width }).left;
                    }
                }

                if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
                    (inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
                }
                inst.snapElements[i].snapping = (ts || bs || ls || rs || first);

            }

        }
    });

    $.ui.plugin.add("draggable", "stack", {
        start: function( event, ui, instance ) {
            var min,
                o = instance.options,
                group = $.makeArray($(o.stack)).sort(function(a, b) {
                    return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0);
                });

            if (!group.length) { return; }

            min = parseInt($(group[0]).css("zIndex"), 10) || 0;
            $(group).each(function(i) {
                $(this).css("zIndex", min + i);
            });
            this.css("zIndex", (min + group.length));
        }
    });

    $.ui.plugin.add("draggable", "zIndex", {
        start: function( event, ui, instance ) {
            var t = $( ui.helper ),
                o = instance.options;

            if (t.css("zIndex")) {
                o._zIndex = t.css("zIndex");
            }
            t.css("zIndex", o.zIndex);
        },
        stop: function( event, ui, instance ) {
            var o = instance.options;

            if (o._zIndex) {
                $(ui.helper).css("zIndex", o._zIndex);
            }
        }
    });

    var draggable = $.ui.draggable;


    /*!
     * jQuery UI Resizable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/resizable/
     */


    $.widget("ui.resizable", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            // See #7960
            zIndex: 90,

            // callbacks
            resize: null,
            start: null,
            stop: null
        },

        _num: function( value ) {
            return parseInt( value, 10 ) || 0;
        },

        _isNumber: function( value ) {
            return !isNaN( parseInt( value, 10 ) );
        },

        _hasScroll: function( el, a ) {

            if ( $( el ).css( "overflow" ) === "hidden") {
                return false;
            }

            var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
                has = false;

            if ( el[ scroll ] > 0 ) {
                return true;
            }

            // TODO: determine which cases actually cause this to happen
            // if the element doesn't have the scroll set, see if it's possible to
            // set the scroll
            el[ scroll ] = 1;
            has = ( el[ scroll ] > 0 );
            el[ scroll ] = 0;
            return has;
        },

        _create: function() {

            var n, i, handle, axis, hname,
                that = this,
                o = this.options;
            this.element.addClass("ui-resizable");

            $.extend(this, {
                _aspectRatio: !!(o.aspectRatio),
                aspectRatio: o.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
            });

            // Wrap the element if it cannot hold child nodes
            if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {

                this.element.wrap(
                    $("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })
                );

                this.element = this.element.parent().data(
                    "ui-resizable", this.element.resizable( "instance" )
                );

                this.elementIsWrapper = true;

                this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                });
                this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                });
                // support: Safari
                // Prevent Safari textarea resize
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");

                this._proportionallyResizeElements.push( this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }) );

                // support: IE9
                // avoid IE jump (hard set the margin)
                this.originalElement.css({ margin: this.originalElement.css("margin") });

                this._proportionallyResize();
            }

            this.handles = o.handles ||
            ( !$(".ui-resizable-handle", this.element).length ?
                "e,s,se" : {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } );

            this._handles = $();
            if ( this.handles.constructor === String ) {

                if ( this.handles === "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw";
                }

                n = this.handles.split(",");
                this.handles = {};

                for (i = 0; i < n.length; i++) {

                    handle = $.trim(n[i]);
                    hname = "ui-resizable-" + handle;
                    axis = $("<div class='ui-resizable-handle " + hname + "'></div>");

                    axis.css({ zIndex: o.zIndex });

                    // TODO : What's going on here?
                    if ("se" === handle) {
                        axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
                    }

                    this.handles[handle] = ".ui-resizable-" + handle;
                    this.element.append(axis);
                }

            }

            this._renderAxis = function(target) {

                var i, axis, padPos, padWrapper;

                target = target || this.element;

                for (i in this.handles) {

                    if (this.handles[i].constructor === String) {
                        this.handles[i] = this.element.children( this.handles[ i ] ).first().show();
                    } else if ( this.handles[ i ].jquery || this.handles[ i ].nodeType ) {
                        this.handles[ i ] = $( this.handles[ i ] );
                        this._on( this.handles[ i ], { "mousedown": that._mouseDown });
                    }

                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {

                        axis = $(this.handles[i], this.element);

                        padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();

                        padPos = [ "padding",
                            /ne|nw|n/.test(i) ? "Top" :
                                /se|sw|s/.test(i) ? "Bottom" :
                                    /^e$/.test(i) ? "Right" : "Left" ].join("");

                        target.css(padPos, padWrapper);

                        this._proportionallyResize();
                    }

                    this._handles = this._handles.add( this.handles[ i ] );
                }
            };

            // TODO: make renderAxis a prototype function
            this._renderAxis(this.element);

            this._handles = this._handles.add( this.element.find( ".ui-resizable-handle" ) );
            this._handles.disableSelection();

            this._handles.mouseover(function() {
                if (!that.resizing) {
                    if (this.className) {
                        axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    }
                    that.axis = axis && axis[1] ? axis[1] : "se";
                }
            });

            if (o.autoHide) {
                this._handles.hide();
                $(this.element)
                    .addClass("ui-resizable-autohide")
                    .mouseenter(function() {
                        if (o.disabled) {
                            return;
                        }
                        $(this).removeClass("ui-resizable-autohide");
                        that._handles.show();
                    })
                    .mouseleave(function() {
                        if (o.disabled) {
                            return;
                        }
                        if (!that.resizing) {
                            $(this).addClass("ui-resizable-autohide");
                            that._handles.hide();
                        }
                    });
            }

            this._mouseInit();
        },

        _destroy: function() {

            this._mouseDestroy();

            var wrapper,
                _destroy = function(exp) {
                    $(exp)
                        .removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing")
                        .removeData("resizable")
                        .removeData("ui-resizable")
                        .unbind(".resizable")
                        .find(".ui-resizable-handle")
                        .remove();
                };

            // TODO: Unwrap at same DOM position
            if (this.elementIsWrapper) {
                _destroy(this.element);
                wrapper = this.element;
                this.originalElement.css({
                    position: wrapper.css("position"),
                    width: wrapper.outerWidth(),
                    height: wrapper.outerHeight(),
                    top: wrapper.css("top"),
                    left: wrapper.css("left")
                }).insertAfter( wrapper );
                wrapper.remove();
            }

            this.originalElement.css("resize", this.originalResizeStyle);
            _destroy(this.originalElement);

            return this;
        },

        _mouseCapture: function(event) {
            var i, handle,
                capture = false;

            for (i in this.handles) {
                handle = $(this.handles[i])[0];
                if (handle === event.target || $.contains(handle, event.target)) {
                    capture = true;
                }
            }

            return !this.options.disabled && capture;
        },

        _mouseStart: function(event) {

            var curleft, curtop, cursor,
                o = this.options,
                el = this.element;

            this.resizing = true;

            this._renderProxy();

            curleft = this._num(this.helper.css("left"));
            curtop = this._num(this.helper.css("top"));

            if (o.containment) {
                curleft += $(o.containment).scrollLeft() || 0;
                curtop += $(o.containment).scrollTop() || 0;
            }

            this.offset = this.helper.offset();
            this.position = { left: curleft, top: curtop };

            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: el.width(),
                height: el.height()
            };

            this.originalSize = this._helper ? {
                width: el.outerWidth(),
                height: el.outerHeight()
            } : {
                width: el.width(),
                height: el.height()
            };

            this.sizeDiff = {
                width: el.outerWidth() - el.width(),
                height: el.outerHeight() - el.height()
            };

            this.originalPosition = { left: curleft, top: curtop };
            this.originalMousePosition = { left: event.pageX, top: event.pageY };

            this.aspectRatio = (typeof o.aspectRatio === "number") ?
                o.aspectRatio :
                ((this.originalSize.width / this.originalSize.height) || 1);

            cursor = $(".ui-resizable-" + this.axis).css("cursor");
            $("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor);

            el.addClass("ui-resizable-resizing");
            this._propagate("start", event);
            return true;
        },

        _mouseDrag: function(event) {

            var data, props,
                smp = this.originalMousePosition,
                a = this.axis,
                dx = (event.pageX - smp.left) || 0,
                dy = (event.pageY - smp.top) || 0,
                trigger = this._change[a];

            this._updatePrevProperties();

            if (!trigger) {
                return false;
            }

            data = trigger.apply(this, [ event, dx, dy ]);

            this._updateVirtualBoundaries(event.shiftKey);
            if (this._aspectRatio || event.shiftKey) {
                data = this._updateRatio(data, event);
            }

            data = this._respectSize(data, event);

            this._updateCache(data);

            this._propagate("resize", event);

            props = this._applyChanges();

            if ( !this._helper && this._proportionallyResizeElements.length ) {
                this._proportionallyResize();
            }

            if ( !$.isEmptyObject( props ) ) {
                this._updatePrevProperties();
                this._trigger( "resize", event, this.ui() );
                this._applyChanges();
            }

            return false;
        },

        _mouseStop: function(event) {

            this.resizing = false;
            var pr, ista, soffseth, soffsetw, s, left, top,
                o = this.options, that = this;

            if (this._helper) {

                pr = this._proportionallyResizeElements;
                ista = pr.length && (/textarea/i).test(pr[0].nodeName);
                soffseth = ista && this._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height;
                soffsetw = ista ? 0 : that.sizeDiff.width;

                s = {
                    width: (that.helper.width()  - soffsetw),
                    height: (that.helper.height() - soffseth)
                };
                left = (parseInt(that.element.css("left"), 10) +
                (that.position.left - that.originalPosition.left)) || null;
                top = (parseInt(that.element.css("top"), 10) +
                (that.position.top - that.originalPosition.top)) || null;

                if (!o.animate) {
                    this.element.css($.extend(s, { top: top, left: left }));
                }

                that.helper.height(that.size.height);
                that.helper.width(that.size.width);

                if (this._helper && !o.animate) {
                    this._proportionallyResize();
                }
            }

            $("body").css("cursor", "auto");

            this.element.removeClass("ui-resizable-resizing");

            this._propagate("stop", event);

            if (this._helper) {
                this.helper.remove();
            }

            return false;

        },

        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            };
        },

        _applyChanges: function() {
            var props = {};

            if ( this.position.top !== this.prevPosition.top ) {
                props.top = this.position.top + "px";
            }
            if ( this.position.left !== this.prevPosition.left ) {
                props.left = this.position.left + "px";
            }
            if ( this.size.width !== this.prevSize.width ) {
                props.width = this.size.width + "px";
            }
            if ( this.size.height !== this.prevSize.height ) {
                props.height = this.size.height + "px";
            }

            this.helper.css( props );

            return props;
        },

        _updateVirtualBoundaries: function(forceAspectRatio) {
            var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
                o = this.options;

            b = {
                minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
                minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity
            };

            if (this._aspectRatio || forceAspectRatio) {
                pMinWidth = b.minHeight * this.aspectRatio;
                pMinHeight = b.minWidth / this.aspectRatio;
                pMaxWidth = b.maxHeight * this.aspectRatio;
                pMaxHeight = b.maxWidth / this.aspectRatio;

                if (pMinWidth > b.minWidth) {
                    b.minWidth = pMinWidth;
                }
                if (pMinHeight > b.minHeight) {
                    b.minHeight = pMinHeight;
                }
                if (pMaxWidth < b.maxWidth) {
                    b.maxWidth = pMaxWidth;
                }
                if (pMaxHeight < b.maxHeight) {
                    b.maxHeight = pMaxHeight;
                }
            }
            this._vBoundaries = b;
        },

        _updateCache: function(data) {
            this.offset = this.helper.offset();
            if (this._isNumber(data.left)) {
                this.position.left = data.left;
            }
            if (this._isNumber(data.top)) {
                this.position.top = data.top;
            }
            if (this._isNumber(data.height)) {
                this.size.height = data.height;
            }
            if (this._isNumber(data.width)) {
                this.size.width = data.width;
            }
        },

        _updateRatio: function( data ) {

            var cpos = this.position,
                csize = this.size,
                a = this.axis;

            if (this._isNumber(data.height)) {
                data.width = (data.height * this.aspectRatio);
            } else if (this._isNumber(data.width)) {
                data.height = (data.width / this.aspectRatio);
            }

            if (a === "sw") {
                data.left = cpos.left + (csize.width - data.width);
                data.top = null;
            }
            if (a === "nw") {
                data.top = cpos.top + (csize.height - data.height);
                data.left = cpos.left + (csize.width - data.width);
            }

            return data;
        },

        _respectSize: function( data ) {

            var o = this._vBoundaries,
                a = this.axis,
                ismaxw = this._isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width),
                ismaxh = this._isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
                isminw = this._isNumber(data.width) && o.minWidth && (o.minWidth > data.width),
                isminh = this._isNumber(data.height) && o.minHeight && (o.minHeight > data.height),
                dw = this.originalPosition.left + this.originalSize.width,
                dh = this.position.top + this.size.height,
                cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
            if (isminw) {
                data.width = o.minWidth;
            }
            if (isminh) {
                data.height = o.minHeight;
            }
            if (ismaxw) {
                data.width = o.maxWidth;
            }
            if (ismaxh) {
                data.height = o.maxHeight;
            }

            if (isminw && cw) {
                data.left = dw - o.minWidth;
            }
            if (ismaxw && cw) {
                data.left = dw - o.maxWidth;
            }
            if (isminh && ch) {
                data.top = dh - o.minHeight;
            }
            if (ismaxh && ch) {
                data.top = dh - o.maxHeight;
            }

            // Fixing jump error on top/left - bug #2330
            if (!data.width && !data.height && !data.left && data.top) {
                data.top = null;
            } else if (!data.width && !data.height && !data.top && data.left) {
                data.left = null;
            }

            return data;
        },

        _getPaddingPlusBorderDimensions: function( element ) {
            var i = 0,
                widths = [],
                borders = [
                    element.css( "borderTopWidth" ),
                    element.css( "borderRightWidth" ),
                    element.css( "borderBottomWidth" ),
                    element.css( "borderLeftWidth" )
                ],
                paddings = [
                    element.css( "paddingTop" ),
                    element.css( "paddingRight" ),
                    element.css( "paddingBottom" ),
                    element.css( "paddingLeft" )
                ];

            for ( ; i < 4; i++ ) {
                widths[ i ] = ( parseInt( borders[ i ], 10 ) || 0 );
                widths[ i ] += ( parseInt( paddings[ i ], 10 ) || 0 );
            }

            return {
                height: widths[ 0 ] + widths[ 2 ],
                width: widths[ 1 ] + widths[ 3 ]
            };
        },

        _proportionallyResize: function() {

            if (!this._proportionallyResizeElements.length) {
                return;
            }

            var prel,
                i = 0,
                element = this.helper || this.element;

            for ( ; i < this._proportionallyResizeElements.length; i++) {

                prel = this._proportionallyResizeElements[i];

                // TODO: Seems like a bug to cache this.outerDimensions
                // considering that we are in a loop.
                if (!this.outerDimensions) {
                    this.outerDimensions = this._getPaddingPlusBorderDimensions( prel );
                }

                prel.css({
                    height: (element.height() - this.outerDimensions.height) || 0,
                    width: (element.width() - this.outerDimensions.width) || 0
                });

            }

        },

        _renderProxy: function() {

            var el = this.element, o = this.options;
            this.elementOffset = el.offset();

            if (this._helper) {

                this.helper = this.helper || $("<div style='overflow:hidden;'></div>");

                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++o.zIndex //TODO: Don't modify option
                });

                this.helper
                    .appendTo("body")
                    .disableSelection();

            } else {
                this.helper = this.element;
            }

        },

        _change: {
            e: function(event, dx) {
                return { width: this.originalSize.width + dx };
            },
            w: function(event, dx) {
                var cs = this.originalSize, sp = this.originalPosition;
                return { left: sp.left + dx, width: cs.width - dx };
            },
            n: function(event, dx, dy) {
                var cs = this.originalSize, sp = this.originalPosition;
                return { top: sp.top + dy, height: cs.height - dy };
            },
            s: function(event, dx, dy) {
                return { height: this.originalSize.height + dy };
            },
            se: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments),
                    this._change.e.apply(this, [ event, dx, dy ]));
            },
            sw: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments),
                    this._change.w.apply(this, [ event, dx, dy ]));
            },
            ne: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments),
                    this._change.e.apply(this, [ event, dx, dy ]));
            },
            nw: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments),
                    this._change.w.apply(this, [ event, dx, dy ]));
            }
        },

        _propagate: function(n, event) {
            $.ui.plugin.call(this, n, [ event, this.ui() ]);
            (n !== "resize" && this._trigger(n, event, this.ui()));
        },

        plugins: {},

        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }

    });

    /*
     * Resizable Extensions
     */

    $.ui.plugin.add("resizable", "animate", {

        stop: function( event ) {
            var that = $(this).resizable( "instance" ),
                o = that.options,
                pr = that._proportionallyResizeElements,
                ista = pr.length && (/textarea/i).test(pr[0].nodeName),
                soffseth = ista && that._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height,
                soffsetw = ista ? 0 : that.sizeDiff.width,
                style = { width: (that.size.width - soffsetw), height: (that.size.height - soffseth) },
                left = (parseInt(that.element.css("left"), 10) +
                    (that.position.left - that.originalPosition.left)) || null,
                top = (parseInt(that.element.css("top"), 10) +
                    (that.position.top - that.originalPosition.top)) || null;

            that.element.animate(
                $.extend(style, top && left ? { top: top, left: left } : {}), {
                    duration: o.animateDuration,
                    easing: o.animateEasing,
                    step: function() {

                        var data = {
                            width: parseInt(that.element.css("width"), 10),
                            height: parseInt(that.element.css("height"), 10),
                            top: parseInt(that.element.css("top"), 10),
                            left: parseInt(that.element.css("left"), 10)
                        };

                        if (pr && pr.length) {
                            $(pr[0]).css({ width: data.width, height: data.height });
                        }

                        // propagating resize, and updating values for each animation step
                        that._updateCache(data);
                        that._propagate("resize", event);

                    }
                }
            );
        }

    });

    $.ui.plugin.add( "resizable", "containment", {

        start: function() {
            var element, p, co, ch, cw, width, height,
                that = $( this ).resizable( "instance" ),
                o = that.options,
                el = that.element,
                oc = o.containment,
                ce = ( oc instanceof $ ) ? oc.get( 0 ) : ( /parent/.test( oc ) ) ? el.parent().get( 0 ) : oc;

            if ( !ce ) {
                return;
            }

            that.containerElement = $( ce );

            if ( /document/.test( oc ) || oc === document ) {
                that.containerOffset = {
                    left: 0,
                    top: 0
                };
                that.containerPosition = {
                    left: 0,
                    top: 0
                };

                that.parentData = {
                    element: $( document ),
                    left: 0,
                    top: 0,
                    width: $( document ).width(),
                    height: $( document ).height() || document.body.parentNode.scrollHeight
                };
            } else {
                element = $( ce );
                p = [];
                $([ "Top", "Right", "Left", "Bottom" ]).each(function( i, name ) {
                    p[ i ] = that._num( element.css( "padding" + name ) );
                });

                that.containerOffset = element.offset();
                that.containerPosition = element.position();
                that.containerSize = {
                    height: ( element.innerHeight() - p[ 3 ] ),
                    width: ( element.innerWidth() - p[ 1 ] )
                };

                co = that.containerOffset;
                ch = that.containerSize.height;
                cw = that.containerSize.width;
                width = ( that._hasScroll ( ce, "left" ) ? ce.scrollWidth : cw );
                height = ( that._hasScroll ( ce ) ? ce.scrollHeight : ch ) ;

                that.parentData = {
                    element: ce,
                    left: co.left,
                    top: co.top,
                    width: width,
                    height: height
                };
            }
        },

        resize: function( event ) {
            var woset, hoset, isParent, isOffsetRelative,
                that = $( this ).resizable( "instance" ),
                o = that.options,
                co = that.containerOffset,
                cp = that.position,
                pRatio = that._aspectRatio || event.shiftKey,
                cop = {
                    top: 0,
                    left: 0
                },
                ce = that.containerElement,
                continueResize = true;

            if ( ce[ 0 ] !== document && ( /static/ ).test( ce.css( "position" ) ) ) {
                cop = co;
            }

            if ( cp.left < ( that._helper ? co.left : 0 ) ) {
                that.size.width = that.size.width +
                ( that._helper ?
                    ( that.position.left - co.left ) :
                    ( that.position.left - cop.left ) );

                if ( pRatio ) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
                that.position.left = o.helper ? co.left : 0;
            }

            if ( cp.top < ( that._helper ? co.top : 0 ) ) {
                that.size.height = that.size.height +
                ( that._helper ?
                    ( that.position.top - co.top ) :
                    that.position.top );

                if ( pRatio ) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
                that.position.top = that._helper ? co.top : 0;
            }

            isParent = that.containerElement.get( 0 ) === that.element.parent().get( 0 );
            isOffsetRelative = /relative|absolute/.test( that.containerElement.css( "position" ) );

            if ( isParent && isOffsetRelative ) {
                that.offset.left = that.parentData.left + that.position.left;
                that.offset.top = that.parentData.top + that.position.top;
            } else {
                that.offset.left = that.element.offset().left;
                that.offset.top = that.element.offset().top;
            }

            woset = Math.abs( that.sizeDiff.width +
            (that._helper ?
            that.offset.left - cop.left :
                (that.offset.left - co.left)) );

            hoset = Math.abs( that.sizeDiff.height +
            (that._helper ?
            that.offset.top - cop.top :
                (that.offset.top - co.top)) );

            if ( woset + that.size.width >= that.parentData.width ) {
                that.size.width = that.parentData.width - woset;
                if ( pRatio ) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
            }

            if ( hoset + that.size.height >= that.parentData.height ) {
                that.size.height = that.parentData.height - hoset;
                if ( pRatio ) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
            }

            if ( !continueResize ) {
                that.position.left = that.prevPosition.left;
                that.position.top = that.prevPosition.top;
                that.size.width = that.prevSize.width;
                that.size.height = that.prevSize.height;
            }
        },

        stop: function() {
            var that = $( this ).resizable( "instance" ),
                o = that.options,
                co = that.containerOffset,
                cop = that.containerPosition,
                ce = that.containerElement,
                helper = $( that.helper ),
                ho = helper.offset(),
                w = helper.outerWidth() - that.sizeDiff.width,
                h = helper.outerHeight() - that.sizeDiff.height;

            if ( that._helper && !o.animate && ( /relative/ ).test( ce.css( "position" ) ) ) {
                $( this ).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                });
            }

            if ( that._helper && !o.animate && ( /static/ ).test( ce.css( "position" ) ) ) {
                $( this ).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                });
            }
        }
    });

    $.ui.plugin.add("resizable", "alsoResize", {

        start: function() {
            var that = $(this).resizable( "instance" ),
                o = that.options;

            $(o.alsoResize).each(function() {
                var el = $(this);
                el.data("ui-resizable-alsoresize", {
                    width: parseInt(el.width(), 10), height: parseInt(el.height(), 10),
                    left: parseInt(el.css("left"), 10), top: parseInt(el.css("top"), 10)
                });
            });
        },

        resize: function(event, ui) {
            var that = $(this).resizable( "instance" ),
                o = that.options,
                os = that.originalSize,
                op = that.originalPosition,
                delta = {
                    height: (that.size.height - os.height) || 0,
                    width: (that.size.width - os.width) || 0,
                    top: (that.position.top - op.top) || 0,
                    left: (that.position.left - op.left) || 0
                };

            $(o.alsoResize).each(function() {
                var el = $(this), start = $(this).data("ui-resizable-alsoresize"), style = {},
                    css = el.parents(ui.originalElement[0]).length ?
                        [ "width", "height" ] :
                        [ "width", "height", "top", "left" ];

                $.each(css, function(i, prop) {
                    var sum = (start[prop] || 0) + (delta[prop] || 0);
                    if (sum && sum >= 0) {
                        style[prop] = sum || null;
                    }
                });

                el.css(style);
            });
        },

        stop: function() {
            $(this).removeData("resizable-alsoresize");
        }
    });

    $.ui.plugin.add("resizable", "ghost", {

        start: function() {

            var that = $(this).resizable( "instance" ), o = that.options, cs = that.size;

            that.ghost = that.originalElement.clone();
            that.ghost
                .css({
                    opacity: 0.25,
                    display: "block",
                    position: "relative",
                    height: cs.height,
                    width: cs.width,
                    margin: 0,
                    left: 0,
                    top: 0
                })
                .addClass("ui-resizable-ghost")
                .addClass(typeof o.ghost === "string" ? o.ghost : "");

            that.ghost.appendTo(that.helper);

        },

        resize: function() {
            var that = $(this).resizable( "instance" );
            if (that.ghost) {
                that.ghost.css({
                    position: "relative",
                    height: that.size.height,
                    width: that.size.width
                });
            }
        },

        stop: function() {
            var that = $(this).resizable( "instance" );
            if (that.ghost && that.helper) {
                that.helper.get(0).removeChild(that.ghost.get(0));
            }
        }

    });

    $.ui.plugin.add("resizable", "grid", {

        resize: function() {
            var outerDimensions,
                that = $(this).resizable( "instance" ),
                o = that.options,
                cs = that.size,
                os = that.originalSize,
                op = that.originalPosition,
                a = that.axis,
                grid = typeof o.grid === "number" ? [ o.grid, o.grid ] : o.grid,
                gridX = (grid[0] || 1),
                gridY = (grid[1] || 1),
                ox = Math.round((cs.width - os.width) / gridX) * gridX,
                oy = Math.round((cs.height - os.height) / gridY) * gridY,
                newWidth = os.width + ox,
                newHeight = os.height + oy,
                isMaxWidth = o.maxWidth && (o.maxWidth < newWidth),
                isMaxHeight = o.maxHeight && (o.maxHeight < newHeight),
                isMinWidth = o.minWidth && (o.minWidth > newWidth),
                isMinHeight = o.minHeight && (o.minHeight > newHeight);

            o.grid = grid;

            if (isMinWidth) {
                newWidth += gridX;
            }
            if (isMinHeight) {
                newHeight += gridY;
            }
            if (isMaxWidth) {
                newWidth -= gridX;
            }
            if (isMaxHeight) {
                newHeight -= gridY;
            }

            if (/^(se|s|e)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
            } else if (/^(ne)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.top = op.top - oy;
            } else if (/^(sw)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.left = op.left - ox;
            } else {
                if ( newHeight - gridY <= 0 || newWidth - gridX <= 0) {
                    outerDimensions = that._getPaddingPlusBorderDimensions( this );
                }

                if ( newHeight - gridY > 0 ) {
                    that.size.height = newHeight;
                    that.position.top = op.top - oy;
                } else {
                    newHeight = gridY - outerDimensions.height;
                    that.size.height = newHeight;
                    that.position.top = op.top + os.height - newHeight;
                }
                if ( newWidth - gridX > 0 ) {
                    that.size.width = newWidth;
                    that.position.left = op.left - ox;
                } else {
                    newWidth = gridX - outerDimensions.width;
                    that.size.width = newWidth;
                    that.position.left = op.left + os.width - newWidth;
                }
            }
        }

    });

    var resizable = $.ui.resizable;


    /*!
     * jQuery UI Dialog 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/dialog/
     */


    var dialog = $.widget( "ui.dialog", {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoOpen: true,
            buttons: [],
            closeOnEscape: true,
            closeText: "Close",
            dialogClass: "",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                // Ensure the titlebar is always visible
                using: function( pos ) {
                    var topOffset = $( this ).css( pos ).offset().top;
                    if ( topOffset < 0 ) {
                        $( this ).css( "top", pos.top - topOffset );
                    }
                }
            },
            resizable: true,
            show: null,
            title: null,
            width: 300,

            // callbacks
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },

        sizeRelatedOptions: {
            buttons: true,
            height: true,
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true,
            width: true
        },

        resizableRelatedOptions: {
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true
        },

        _create: function() {
            this.originalCss = {
                display: this.element[ 0 ].style.display,
                width: this.element[ 0 ].style.width,
                minHeight: this.element[ 0 ].style.minHeight,
                maxHeight: this.element[ 0 ].style.maxHeight,
                height: this.element[ 0 ].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index( this.element )
            };
            this.originalTitle = this.element.attr( "title" );
            this.options.title = this.options.title || this.originalTitle;

            this._createWrapper();

            this.element
                .show()
                .removeAttr( "title" )
                .addClass( "ui-dialog-content ui-widget-content" )
                .appendTo( this.uiDialog );

            this._createTitlebar();
            this._createButtonPane();

            if ( this.options.draggable && $.fn.draggable ) {
                this._makeDraggable();
            }
            if ( this.options.resizable && $.fn.resizable ) {
                this._makeResizable();
            }

            this._isOpen = false;

            this._trackFocus();
        },

        _init: function() {
            if ( this.options.autoOpen ) {
                this.open();
            }
        },

        _appendTo: function() {
            var element = this.options.appendTo;
            if ( element && (element.jquery || element.nodeType) ) {
                return $( element );
            }
            return this.document.find( element || "body" ).eq( 0 );
        },

        _destroy: function() {
            var next,
                originalPosition = this.originalPosition;

            this._untrackInstance();
            this._destroyOverlay();

            this.element
                .removeUniqueId()
                .removeClass( "ui-dialog-content ui-widget-content" )
                .css( this.originalCss )
                // Without detaching first, the following becomes really slow
                .detach();

            this.uiDialog.stop( true, true ).remove();

            if ( this.originalTitle ) {
                this.element.attr( "title", this.originalTitle );
            }

            next = originalPosition.parent.children().eq( originalPosition.index );
            // Don't try to place the dialog next to itself (#8613)
            if ( next.length && next[ 0 ] !== this.element[ 0 ] ) {
                next.before( this.element );
            } else {
                originalPosition.parent.append( this.element );
            }
        },

        widget: function() {
            return this.uiDialog;
        },

        disable: $.noop,
        enable: $.noop,

        close: function( event ) {
            var activeElement,
                that = this;

            if ( !this._isOpen || this._trigger( "beforeClose", event ) === false ) {
                return;
            }

            this._isOpen = false;
            this._focusedElement = null;
            this._destroyOverlay();
            this._untrackInstance();

            if ( !this.opener.filter( ":focusable" ).focus().length ) {

                // support: IE9
                // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
                try {
                    activeElement = this.document[ 0 ].activeElement;

                    // Support: IE9, IE10
                    // If the <body> is blurred, IE will switch windows, see #4520
                    if ( activeElement && activeElement.nodeName.toLowerCase() !== "body" ) {

                        // Hiding a focused element doesn't trigger blur in WebKit
                        // so in case we have nothing to focus on, explicitly blur the active element
                        // https://bugs.webkit.org/show_bug.cgi?id=47182
                        $( activeElement ).blur();
                    }
                } catch ( error ) {}
            }

            this._hide( this.uiDialog, this.options.hide, function() {
                that._trigger( "close", event );
            });
        },

        isOpen: function() {
            return this._isOpen;
        },

        moveToTop: function() {
            this._moveToTop();
        },

        _moveToTop: function( event, silent ) {
            var moved = false,
                zIndices = this.uiDialog.siblings( ".ui-front:visible" ).map(function() {
                    return +$( this ).css( "z-index" );
                }).get(),
                zIndexMax = Math.max.apply( null, zIndices );

            if ( zIndexMax >= +this.uiDialog.css( "z-index" ) ) {
                this.uiDialog.css( "z-index", zIndexMax + 1 );
                moved = true;
            }

            if ( moved && !silent ) {
                this._trigger( "focus", event );
            }
            return moved;
        },

        open: function() {
            var that = this;
            if ( this._isOpen ) {
                if ( this._moveToTop() ) {
                    this._focusTabbable();
                }
                return;
            }

            this._isOpen = true;
            this.opener = $( this.document[ 0 ].activeElement );

            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop( null, true );

            // Ensure the overlay is moved to the top with the dialog, but only when
            // opening. The overlay shouldn't move after the dialog is open so that
            // modeless dialogs opened after the modal dialog stack properly.
            if ( this.overlay ) {
                this.overlay.css( "z-index", this.uiDialog.css( "z-index" ) - 1 );
            }

            this._show( this.uiDialog, this.options.show, function() {
                that._focusTabbable();
                that._trigger( "focus" );
            });

            // Track the dialog immediately upon openening in case a focus event
            // somehow occurs outside of the dialog before an element inside the
            // dialog is focused (#10152)
            this._makeFocusTarget();

            this._trigger( "open" );
        },

        _focusTabbable: function() {
            // Set focus to the first match:
            // 1. An element that was focused previously
            // 2. First element inside the dialog matching [autofocus]
            // 3. Tabbable element inside the content element
            // 4. Tabbable element inside the buttonpane
            // 5. The close button
            // 6. The dialog itself
            var hasFocus = this._focusedElement;
            if ( !hasFocus ) {
                hasFocus = this.element.find( "[autofocus]" );
            }
            if ( !hasFocus.length ) {
                hasFocus = this.element.find( ":tabbable" );
            }
            if ( !hasFocus.length ) {
                hasFocus = this.uiDialogButtonPane.find( ":tabbable" );
            }
            if ( !hasFocus.length ) {
                hasFocus = this.uiDialogTitlebarClose.filter( ":tabbable" );
            }
            if ( !hasFocus.length ) {
                hasFocus = this.uiDialog;
            }
            hasFocus.eq( 0 ).focus();
        },

        _keepFocus: function( event ) {
            function checkFocus() {
                var activeElement = this.document[0].activeElement,
                    isActive = this.uiDialog[0] === activeElement ||
                        $.contains( this.uiDialog[0], activeElement );
                if ( !isActive ) {
                    this._focusTabbable();
                }
            }
            event.preventDefault();
            checkFocus.call( this );
            // support: IE
            // IE <= 8 doesn't prevent moving focus even with event.preventDefault()
            // so we check again later
            this._delay( checkFocus );
        },

        _createWrapper: function() {
            this.uiDialog = $("<div>")
                .addClass( "ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " +
                this.options.dialogClass )
                .hide()
                .attr({
                    // Setting tabIndex makes the div focusable
                    tabIndex: -1,
                    role: "dialog"
                })
                .appendTo( this._appendTo() );

            this._on( this.uiDialog, {
                keydown: function( event ) {
                    if ( this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
                        event.keyCode === $.ui.keyCode.ESCAPE ) {
                        event.preventDefault();
                        this.close( event );
                        return;
                    }

                    // prevent tabbing out of dialogs
                    if ( event.keyCode !== $.ui.keyCode.TAB || event.isDefaultPrevented() ) {
                        return;
                    }
                    var tabbables = this.uiDialog.find( ":tabbable" ),
                        first = tabbables.filter( ":first" ),
                        last = tabbables.filter( ":last" );

                    if ( ( event.target === last[0] || event.target === this.uiDialog[0] ) && !event.shiftKey ) {
                        this._delay(function() {
                            first.focus();
                        });
                        event.preventDefault();
                    } else if ( ( event.target === first[0] || event.target === this.uiDialog[0] ) && event.shiftKey ) {
                        this._delay(function() {
                            last.focus();
                        });
                        event.preventDefault();
                    }
                },
                mousedown: function( event ) {
                    if ( this._moveToTop( event ) ) {
                        this._focusTabbable();
                    }
                }
            });

            // We assume that any existing aria-describedby attribute means
            // that the dialog content is marked up properly
            // otherwise we brute force the content as the description
            if ( !this.element.find( "[aria-describedby]" ).length ) {
                this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr( "id" )
                });
            }
        },

        _createTitlebar: function() {
            var uiDialogTitle;

            this.uiDialogTitlebar = $( "<div>" )
                .addClass( "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix" )
                .prependTo( this.uiDialog );
            this._on( this.uiDialogTitlebar, {
                mousedown: function( event ) {
                    // Don't prevent click on close button (#8838)
                    // Focusing a dialog that is partially scrolled out of view
                    // causes the browser to scroll it into view, preventing the click event
                    if ( !$( event.target ).closest( ".ui-dialog-titlebar-close" ) ) {
                        // Dialog isn't getting focus when dragging (#8063)
                        this.uiDialog.focus();
                    }
                }
            });

            // support: IE
            // Use type="button" to prevent enter keypresses in textboxes from closing the
            // dialog in IE (#9312)
            this.uiDialogTitlebarClose = $( "<button type='button'></button>" )
                .button({
                    label: this.options.closeText,
                    icons: {
                        primary: "ui-icon-closethick"
                    },
                    text: false
                })
                .addClass( "ui-dialog-titlebar-close" )
                .appendTo( this.uiDialogTitlebar );
            this._on( this.uiDialogTitlebarClose, {
                click: function( event ) {
                    event.preventDefault();
                    this.close( event );
                }
            });

            uiDialogTitle = $( "<span>" )
                .uniqueId()
                .addClass( "ui-dialog-title" )
                .prependTo( this.uiDialogTitlebar );
            this._title( uiDialogTitle );

            this.uiDialog.attr({
                "aria-labelledby": uiDialogTitle.attr( "id" )
            });
        },

        _title: function( title ) {
            if ( !this.options.title ) {
                title.html( "&#160;" );
            }
            title.text( this.options.title );
        },

        _createButtonPane: function() {
            this.uiDialogButtonPane = $( "<div>" )
                .addClass( "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix" );

            this.uiButtonSet = $( "<div>" )
                .addClass( "ui-dialog-buttonset" )
                .appendTo( this.uiDialogButtonPane );

            this._createButtons();
        },

        _createButtons: function() {
            var that = this,
                buttons = this.options.buttons;

            // if we already have a button pane, remove it
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();

            if ( $.isEmptyObject( buttons ) || ($.isArray( buttons ) && !buttons.length) ) {
                this.uiDialog.removeClass( "ui-dialog-buttons" );
                return;
            }

            $.each( buttons, function( name, props ) {
                var click, buttonOptions;
                props = $.isFunction( props ) ?
                { click: props, text: name } :
                    props;
                // Default to a non-submitting button
                props = $.extend( { type: "button" }, props );
                // Change the context for the click callback to be the main element
                click = props.click;
                props.click = function() {
                    click.apply( that.element[ 0 ], arguments );
                };
                buttonOptions = {
                    icons: props.icons,
                    text: props.showText
                };
                delete props.icons;
                delete props.showText;
                $( "<button></button>", props )
                    .button( buttonOptions )
                    .appendTo( that.uiButtonSet );
            });
            this.uiDialog.addClass( "ui-dialog-buttons" );
            this.uiDialogButtonPane.appendTo( this.uiDialog );
        },

        _makeDraggable: function() {
            var that = this,
                options = this.options;

            function filteredUi( ui ) {
                return {
                    position: ui.position,
                    offset: ui.offset
                };
            }

            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function( event, ui ) {
                    $( this ).addClass( "ui-dialog-dragging" );
                    that._blockFrames();
                    that._trigger( "dragStart", event, filteredUi( ui ) );
                },
                drag: function( event, ui ) {
                    that._trigger( "drag", event, filteredUi( ui ) );
                },
                stop: function( event, ui ) {
                    var left = ui.offset.left - that.document.scrollLeft(),
                        top = ui.offset.top - that.document.scrollTop();

                    options.position = {
                        my: "left top",
                        at: "left" + (left >= 0 ? "+" : "") + left + " " +
                        "top" + (top >= 0 ? "+" : "") + top,
                        of: that.window
                    };
                    $( this ).removeClass( "ui-dialog-dragging" );
                    that._unblockFrames();
                    that._trigger( "dragStop", event, filteredUi( ui ) );
                }
            });
        },

        _makeResizable: function() {
            var that = this,
                options = this.options,
                handles = options.resizable,
            // .ui-resizable has position: relative defined in the stylesheet
            // but dialogs have to use absolute or fixed positioning
                position = this.uiDialog.css("position"),
                resizeHandles = typeof handles === "string" ?
                    handles	:
                    "n,e,s,w,se,sw,ne,nw";

            function filteredUi( ui ) {
                return {
                    originalPosition: ui.originalPosition,
                    originalSize: ui.originalSize,
                    position: ui.position,
                    size: ui.size
                };
            }

            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: options.maxWidth,
                maxHeight: options.maxHeight,
                minWidth: options.minWidth,
                minHeight: this._minHeight(),
                handles: resizeHandles,
                start: function( event, ui ) {
                    $( this ).addClass( "ui-dialog-resizing" );
                    that._blockFrames();
                    that._trigger( "resizeStart", event, filteredUi( ui ) );
                },
                resize: function( event, ui ) {
                    that._trigger( "resize", event, filteredUi( ui ) );
                },
                stop: function( event, ui ) {
                    var offset = that.uiDialog.offset(),
                        left = offset.left - that.document.scrollLeft(),
                        top = offset.top - that.document.scrollTop();

                    options.height = that.uiDialog.height();
                    options.width = that.uiDialog.width();
                    options.position = {
                        my: "left top",
                        at: "left" + (left >= 0 ? "+" : "") + left + " " +
                        "top" + (top >= 0 ? "+" : "") + top,
                        of: that.window
                    };
                    $( this ).removeClass( "ui-dialog-resizing" );
                    that._unblockFrames();
                    that._trigger( "resizeStop", event, filteredUi( ui ) );
                }
            })
                .css( "position", position );
        },

        _trackFocus: function() {
            this._on( this.widget(), {
                focusin: function( event ) {
                    this._makeFocusTarget();
                    this._focusedElement = $( event.target );
                }
            });
        },

        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift( this );
        },

        _untrackInstance: function() {
            var instances = this._trackingInstances(),
                exists = $.inArray( this, instances );
            if ( exists !== -1 ) {
                instances.splice( exists, 1 );
            }
        },

        _trackingInstances: function() {
            var instances = this.document.data( "ui-dialog-instances" );
            if ( !instances ) {
                instances = [];
                this.document.data( "ui-dialog-instances", instances );
            }
            return instances;
        },

        _minHeight: function() {
            var options = this.options;

            return options.height === "auto" ?
                options.minHeight :
                Math.min( options.minHeight, options.height );
        },

        _position: function() {
            // Need to show the dialog to get the actual offset in the position plugin
            var isVisible = this.uiDialog.is( ":visible" );
            if ( !isVisible ) {
                this.uiDialog.show();
            }
            this.uiDialog.position( this.options.position );
            if ( !isVisible ) {
                this.uiDialog.hide();
            }
        },

        _setOptions: function( options ) {
            var that = this,
                resize = false,
                resizableOptions = {};

            $.each( options, function( key, value ) {
                that._setOption( key, value );

                if ( key in that.sizeRelatedOptions ) {
                    resize = true;
                }
                if ( key in that.resizableRelatedOptions ) {
                    resizableOptions[ key ] = value;
                }
            });

            if ( resize ) {
                this._size();
                this._position();
            }
            if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
                this.uiDialog.resizable( "option", resizableOptions );
            }
        },

        _setOption: function( key, value ) {
            var isDraggable, isResizable,
                uiDialog = this.uiDialog;

            if ( key === "dialogClass" ) {
                uiDialog
                    .removeClass( this.options.dialogClass )
                    .addClass( value );
            }

            if ( key === "disabled" ) {
                return;
            }

            this._super( key, value );

            if ( key === "appendTo" ) {
                this.uiDialog.appendTo( this._appendTo() );
            }

            if ( key === "buttons" ) {
                this._createButtons();
            }

            if ( key === "closeText" ) {
                this.uiDialogTitlebarClose.button({
                    // Ensure that we always pass a string
                    label: "" + value
                });
            }

            if ( key === "draggable" ) {
                isDraggable = uiDialog.is( ":data(ui-draggable)" );
                if ( isDraggable && !value ) {
                    uiDialog.draggable( "destroy" );
                }

                if ( !isDraggable && value ) {
                    this._makeDraggable();
                }
            }

            if ( key === "position" ) {
                this._position();
            }

            if ( key === "resizable" ) {
                // currently resizable, becoming non-resizable
                isResizable = uiDialog.is( ":data(ui-resizable)" );
                if ( isResizable && !value ) {
                    uiDialog.resizable( "destroy" );
                }

                // currently resizable, changing handles
                if ( isResizable && typeof value === "string" ) {
                    uiDialog.resizable( "option", "handles", value );
                }

                // currently non-resizable, becoming resizable
                if ( !isResizable && value !== false ) {
                    this._makeResizable();
                }
            }

            if ( key === "title" ) {
                this._title( this.uiDialogTitlebar.find( ".ui-dialog-title" ) );
            }
        },

        _size: function() {
            // If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
            // divs will both have width and height set, so we need to reset them
            var nonContentHeight, minContentHeight, maxContentHeight,
                options = this.options;

            // Reset content sizing
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });

            if ( options.minWidth > options.width ) {
                options.width = options.minWidth;
            }

            // reset wrapper sizing
            // determine the height of all the non-content elements
            nonContentHeight = this.uiDialog.css({
                height: "auto",
                width: options.width
            })
                .outerHeight();
            minContentHeight = Math.max( 0, options.minHeight - nonContentHeight );
            maxContentHeight = typeof options.maxHeight === "number" ?
                Math.max( 0, options.maxHeight - nonContentHeight ) :
                "none";

            if ( options.height === "auto" ) {
                this.element.css({
                    minHeight: minContentHeight,
                    maxHeight: maxContentHeight,
                    height: "auto"
                });
            } else {
                this.element.height( Math.max( 0, options.height - nonContentHeight ) );
            }

            if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
                this.uiDialog.resizable( "option", "minHeight", this._minHeight() );
            }
        },

        _blockFrames: function() {
            this.iframeBlocks = this.document.find( "iframe" ).map(function() {
                var iframe = $( this );

                return $( "<div>" )
                    .css({
                        position: "absolute",
                        width: iframe.outerWidth(),
                        height: iframe.outerHeight()
                    })
                    .appendTo( iframe.parent() )
                    .offset( iframe.offset() )[0];
            });
        },

        _unblockFrames: function() {
            if ( this.iframeBlocks ) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },

        _allowInteraction: function( event ) {
            if ( $( event.target ).closest( ".ui-dialog" ).length ) {
                return true;
            }

            // TODO: Remove hack when datepicker implements
            // the .ui-front logic (#8989)
            return !!$( event.target ).closest( ".ui-datepicker" ).length;
        },

        _createOverlay: function() {
            if ( !this.options.modal ) {
                return;
            }

            // We use a delay in case the overlay is created from an
            // event that we're going to be cancelling (#2804)
            var isOpening = true;
            this._delay(function() {
                isOpening = false;
            });

            if ( !this.document.data( "ui-dialog-overlays" ) ) {

                // Prevent use of anchors and inputs
                // Using _on() for an event handler shared across many instances is
                // safe because the dialogs stack and must be closed in reverse order
                this._on( this.document, {
                    focusin: function( event ) {
                        if ( isOpening ) {
                            return;
                        }

                        if ( !this._allowInteraction( event ) ) {
                            event.preventDefault();
                            this._trackingInstances()[ 0 ]._focusTabbable();
                        }
                    }
                });
            }

            this.overlay = $( "<div>" )
                .addClass( "ui-widget-overlay ui-front" )
                .appendTo( this._appendTo() );
            this._on( this.overlay, {
                mousedown: "_keepFocus"
            });
            this.document.data( "ui-dialog-overlays",
                (this.document.data( "ui-dialog-overlays" ) || 0) + 1 );
        },

        _destroyOverlay: function() {
            if ( !this.options.modal ) {
                return;
            }

            if ( this.overlay ) {
                var overlays = this.document.data( "ui-dialog-overlays" ) - 1;

                if ( !overlays ) {
                    this.document
                        .unbind( "focusin" )
                        .removeData( "ui-dialog-overlays" );
                } else {
                    this.document.data( "ui-dialog-overlays", overlays );
                }

                this.overlay.remove();
                this.overlay = null;
            }
        }
    });


    /*!
     * jQuery UI Droppable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/droppable/
     */


    $.widget( "ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: false,
            addClasses: true,
            greedy: false,
            hoverClass: false,
            scope: "default",
            tolerance: "intersect",

            // callbacks
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {

            var proportions,
                o = this.options,
                accept = o.accept;

            this.isover = false;
            this.isout = true;

            this.accept = $.isFunction( accept ) ? accept : function( d ) {
                return d.is( accept );
            };

            this.proportions = function( /* valueToWrite */ ) {
                if ( arguments.length ) {
                    // Store the droppable's proportions
                    proportions = arguments[ 0 ];
                } else {
                    // Retrieve or derive the droppable's proportions
                    return proportions ?
                        proportions :
                        proportions = {
                            width: this.element[ 0 ].offsetWidth,
                            height: this.element[ 0 ].offsetHeight
                        };
                }
            };

            this._addToManager( o.scope );

            o.addClasses && this.element.addClass( "ui-droppable" );

        },

        _addToManager: function( scope ) {
            // Add the reference and positions to the manager
            $.ui.ddmanager.droppables[ scope ] = $.ui.ddmanager.droppables[ scope ] || [];
            $.ui.ddmanager.droppables[ scope ].push( this );
        },

        _splice: function( drop ) {
            var i = 0;
            for ( ; i < drop.length; i++ ) {
                if ( drop[ i ] === this ) {
                    drop.splice( i, 1 );
                }
            }
        },

        _destroy: function() {
            var drop = $.ui.ddmanager.droppables[ this.options.scope ];

            this._splice( drop );

            this.element.removeClass( "ui-droppable ui-droppable-disabled" );
        },

        _setOption: function( key, value ) {

            if ( key === "accept" ) {
                this.accept = $.isFunction( value ) ? value : function( d ) {
                    return d.is( value );
                };
            } else if ( key === "scope" ) {
                var drop = $.ui.ddmanager.droppables[ this.options.scope ];

                this._splice( drop );
                this._addToManager( value );
            }

            this._super( key, value );
        },

        _activate: function( event ) {
            var draggable = $.ui.ddmanager.current;
            if ( this.options.activeClass ) {
                this.element.addClass( this.options.activeClass );
            }
            if ( draggable ){
                this._trigger( "activate", event, this.ui( draggable ) );
            }
        },

        _deactivate: function( event ) {
            var draggable = $.ui.ddmanager.current;
            if ( this.options.activeClass ) {
                this.element.removeClass( this.options.activeClass );
            }
            if ( draggable ){
                this._trigger( "deactivate", event, this.ui( draggable ) );
            }
        },

        _over: function( event ) {

            var draggable = $.ui.ddmanager.current;

            // Bail if draggable and droppable are same element
            if ( !draggable || ( draggable.currentItem || draggable.element )[ 0 ] === this.element[ 0 ] ) {
                return;
            }

            if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem || draggable.element ) ) ) {
                if ( this.options.hoverClass ) {
                    this.element.addClass( this.options.hoverClass );
                }
                this._trigger( "over", event, this.ui( draggable ) );
            }

        },

        _out: function( event ) {

            var draggable = $.ui.ddmanager.current;

            // Bail if draggable and droppable are same element
            if ( !draggable || ( draggable.currentItem || draggable.element )[ 0 ] === this.element[ 0 ] ) {
                return;
            }

            if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem || draggable.element ) ) ) {
                if ( this.options.hoverClass ) {
                    this.element.removeClass( this.options.hoverClass );
                }
                this._trigger( "out", event, this.ui( draggable ) );
            }

        },

        _drop: function( event, custom ) {

            var draggable = custom || $.ui.ddmanager.current,
                childrenIntersection = false;

            // Bail if draggable and droppable are same element
            if ( !draggable || ( draggable.currentItem || draggable.element )[ 0 ] === this.element[ 0 ] ) {
                return false;
            }

            this.element.find( ":data(ui-droppable)" ).not( ".ui-draggable-dragging" ).each(function() {
                var inst = $( this ).droppable( "instance" );
                if (
                    inst.options.greedy &&
                    !inst.options.disabled &&
                    inst.options.scope === draggable.options.scope &&
                    inst.accept.call( inst.element[ 0 ], ( draggable.currentItem || draggable.element ) ) &&
                    $.ui.intersect( draggable, $.extend( inst, { offset: inst.element.offset() } ), inst.options.tolerance, event )
                ) { childrenIntersection = true; return false; }
            });
            if ( childrenIntersection ) {
                return false;
            }

            if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem || draggable.element ) ) ) {
                if ( this.options.activeClass ) {
                    this.element.removeClass( this.options.activeClass );
                }
                if ( this.options.hoverClass ) {
                    this.element.removeClass( this.options.hoverClass );
                }
                this._trigger( "drop", event, this.ui( draggable ) );
                return this.element;
            }

            return false;

        },

        ui: function( c ) {
            return {
                draggable: ( c.currentItem || c.element ),
                helper: c.helper,
                position: c.position,
                offset: c.positionAbs
            };
        }

    });

    $.ui.intersect = (function() {
        function isOverAxis( x, reference, size ) {
            return ( x >= reference ) && ( x < ( reference + size ) );
        }

        return function( draggable, droppable, toleranceMode, event ) {

            if ( !droppable.offset ) {
                return false;
            }

            var x1 = ( draggable.positionAbs || draggable.position.absolute ).left + draggable.margins.left,
                y1 = ( draggable.positionAbs || draggable.position.absolute ).top + draggable.margins.top,
                x2 = x1 + draggable.helperProportions.width,
                y2 = y1 + draggable.helperProportions.height,
                l = droppable.offset.left,
                t = droppable.offset.top,
                r = l + droppable.proportions().width,
                b = t + droppable.proportions().height;

            switch ( toleranceMode ) {
                case "fit":
                    return ( l <= x1 && x2 <= r && t <= y1 && y2 <= b );
                case "intersect":
                    return ( l < x1 + ( draggable.helperProportions.width / 2 ) && // Right Half
                    x2 - ( draggable.helperProportions.width / 2 ) < r && // Left Half
                    t < y1 + ( draggable.helperProportions.height / 2 ) && // Bottom Half
                    y2 - ( draggable.helperProportions.height / 2 ) < b ); // Top Half
                case "pointer":
                    return isOverAxis( event.pageY, t, droppable.proportions().height ) && isOverAxis( event.pageX, l, droppable.proportions().width );
                case "touch":
                    return (
                        ( y1 >= t && y1 <= b ) || // Top edge touching
                        ( y2 >= t && y2 <= b ) || // Bottom edge touching
                        ( y1 < t && y2 > b ) // Surrounded vertically
                        ) && (
                        ( x1 >= l && x1 <= r ) || // Left edge touching
                        ( x2 >= l && x2 <= r ) || // Right edge touching
                        ( x1 < l && x2 > r ) // Surrounded horizontally
                        );
                default:
                    return false;
            }
        };
    })();

    /*
     This manager tracks offsets of draggables and droppables
     */
    $.ui.ddmanager = {
        current: null,
        droppables: { "default": [] },
        prepareOffsets: function( t, event ) {

            var i, j,
                m = $.ui.ddmanager.droppables[ t.options.scope ] || [],
                type = event ? event.type : null, // workaround for #2317
                list = ( t.currentItem || t.element ).find( ":data(ui-droppable)" ).addBack();

            droppablesLoop: for ( i = 0; i < m.length; i++ ) {

                // No disabled and non-accepted
                if ( m[ i ].options.disabled || ( t && !m[ i ].accept.call( m[ i ].element[ 0 ], ( t.currentItem || t.element ) ) ) ) {
                    continue;
                }

                // Filter out elements in the current dragged item
                for ( j = 0; j < list.length; j++ ) {
                    if ( list[ j ] === m[ i ].element[ 0 ] ) {
                        m[ i ].proportions().height = 0;
                        continue droppablesLoop;
                    }
                }

                m[ i ].visible = m[ i ].element.css( "display" ) !== "none";
                if ( !m[ i ].visible ) {
                    continue;
                }

                // Activate the droppable if used directly from draggables
                if ( type === "mousedown" ) {
                    m[ i ]._activate.call( m[ i ], event );
                }

                m[ i ].offset = m[ i ].element.offset();
                m[ i ].proportions({ width: m[ i ].element[ 0 ].offsetWidth, height: m[ i ].element[ 0 ].offsetHeight });

            }

        },
        drop: function( draggable, event ) {

            var dropped = false;
            // Create a copy of the droppables in case the list changes during the drop (#9116)
            $.each( ( $.ui.ddmanager.droppables[ draggable.options.scope ] || [] ).slice(), function() {

                if ( !this.options ) {
                    return;
                }
                if ( !this.options.disabled && this.visible && $.ui.intersect( draggable, this, this.options.tolerance, event ) ) {
                    dropped = this._drop.call( this, event ) || dropped;
                }

                if ( !this.options.disabled && this.visible && this.accept.call( this.element[ 0 ], ( draggable.currentItem || draggable.element ) ) ) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call( this, event );
                }

            });
            return dropped;

        },
        dragStart: function( draggable, event ) {
            // Listen for scrolling so that if the dragging causes scrolling the position of the droppables can be recalculated (see #5003)
            draggable.element.parentsUntil( "body" ).bind( "scroll.droppable", function() {
                if ( !draggable.options.refreshPositions ) {
                    $.ui.ddmanager.prepareOffsets( draggable, event );
                }
            });
        },
        drag: function( draggable, event ) {

            // If you have a highly dynamic page, you might try this option. It renders positions every time you move the mouse.
            if ( draggable.options.refreshPositions ) {
                $.ui.ddmanager.prepareOffsets( draggable, event );
            }

            // Run through all droppables and check their positions based on specific tolerance options
            $.each( $.ui.ddmanager.droppables[ draggable.options.scope ] || [], function() {

                if ( this.options.disabled || this.greedyChild || !this.visible ) {
                    return;
                }

                var parentInstance, scope, parent,
                    intersects = $.ui.intersect( draggable, this, this.options.tolerance, event ),
                    c = !intersects && this.isover ? "isout" : ( intersects && !this.isover ? "isover" : null );
                if ( !c ) {
                    return;
                }

                if ( this.options.greedy ) {
                    // find droppable parents with same scope
                    scope = this.options.scope;
                    parent = this.element.parents( ":data(ui-droppable)" ).filter(function() {
                        return $( this ).droppable( "instance" ).options.scope === scope;
                    });

                    if ( parent.length ) {
                        parentInstance = $( parent[ 0 ] ).droppable( "instance" );
                        parentInstance.greedyChild = ( c === "isover" );
                    }
                }

                // we just moved into a greedy child
                if ( parentInstance && c === "isover" ) {
                    parentInstance.isover = false;
                    parentInstance.isout = true;
                    parentInstance._out.call( parentInstance, event );
                }

                this[ c ] = true;
                this[c === "isout" ? "isover" : "isout"] = false;
                this[c === "isover" ? "_over" : "_out"].call( this, event );

                // we just moved out of a greedy child
                if ( parentInstance && c === "isout" ) {
                    parentInstance.isout = false;
                    parentInstance.isover = true;
                    parentInstance._over.call( parentInstance, event );
                }
            });

        },
        dragStop: function( draggable, event ) {
            draggable.element.parentsUntil( "body" ).unbind( "scroll.droppable" );
            // Call prepareOffsets one final time since IE does not fire return scroll events when overflow was caused by drag (see #5003)
            if ( !draggable.options.refreshPositions ) {
                $.ui.ddmanager.prepareOffsets( draggable, event );
            }
        }
    };

    var droppable = $.ui.droppable;


    /*!
     * jQuery UI Effects 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/effects-core/
     */


    var dataSpace = "ui-effects-",

    // Create a local jQuery because jQuery Color relies on it and the
    // global may not exist with AMD and a custom build (#10199)
        jQuery = $;

    $.effects = {
        effect: {}
    };

    /*!
     * jQuery Color Animations v2.1.2
     * https://github.com/jquery/jquery-color
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Wed Jan 16 08:47:09 2013 -0600
     */
    (function( jQuery, undefined ) {

        var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

        // plusequals test for += 100 -= 100
            rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
        // a set of RE's that can match strings and generate color tuples.
            stringParsers = [ {
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function( execResult ) {
                    return [
                        execResult[ 1 ],
                        execResult[ 2 ],
                        execResult[ 3 ],
                        execResult[ 4 ]
                    ];
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function( execResult ) {
                    return [
                        execResult[ 1 ] * 2.55,
                        execResult[ 2 ] * 2.55,
                        execResult[ 3 ] * 2.55,
                        execResult[ 4 ]
                    ];
                }
            }, {
                // this regex ignores A-F because it's compared against an already lowercased string
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function( execResult ) {
                    return [
                        parseInt( execResult[ 1 ], 16 ),
                        parseInt( execResult[ 2 ], 16 ),
                        parseInt( execResult[ 3 ], 16 )
                    ];
                }
            }, {
                // this regex ignores A-F because it's compared against an already lowercased string
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function( execResult ) {
                    return [
                        parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
                        parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
                        parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
                    ];
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function( execResult ) {
                    return [
                        execResult[ 1 ],
                        execResult[ 2 ] / 100,
                        execResult[ 3 ] / 100,
                        execResult[ 4 ]
                    ];
                }
            } ],

        // jQuery.Color( )
            color = jQuery.Color = function( color, green, blue, alpha ) {
                return new jQuery.Color.fn.parse( color, green, blue, alpha );
            },
            spaces = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },

                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            propTypes = {
                "byte": {
                    floor: true,
                    max: 255
                },
                "percent": {
                    max: 1
                },
                "degrees": {
                    mod: 360,
                    floor: true
                }
            },
            support = color.support = {},

        // element for support tests
            supportElem = jQuery( "<p>" )[ 0 ],

        // colors = jQuery.Color.names
            colors,

        // local aliases of functions called often
            each = jQuery.each;

// determine rgba support immediately
        supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
        support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

// define cache name and alpha properties
// for rgba and hsla spaces
        each( spaces, function( spaceName, space ) {
            space.cache = "_" + spaceName;
            space.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        });

        function clamp( value, prop, allowEmpty ) {
            var type = propTypes[ prop.type ] || {};

            if ( value == null ) {
                return (allowEmpty || !prop.def) ? null : prop.def;
            }

            // ~~ is an short way of doing floor for positive numbers
            value = type.floor ? ~~value : parseFloat( value );

            // IE will pass in empty strings as value for alpha,
            // which will hit this case
            if ( isNaN( value ) ) {
                return prop.def;
            }

            if ( type.mod ) {
                // we add mod before modding to make sure that negatives values
                // get converted properly: -10 -> 350
                return (value + type.mod) % type.mod;
            }

            // for now all property types without mod have min and max
            return 0 > value ? 0 : type.max < value ? type.max : value;
        }

        function stringParse( string ) {
            var inst = color(),
                rgba = inst._rgba = [];

            string = string.toLowerCase();

            each( stringParsers, function( i, parser ) {
                var parsed,
                    match = parser.re.exec( string ),
                    values = match && parser.parse( match ),
                    spaceName = parser.space || "rgba";

                if ( values ) {
                    parsed = inst[ spaceName ]( values );

                    // if this was an rgba parse the assignment might happen twice
                    // oh well....
                    inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
                    rgba = inst._rgba = parsed._rgba;

                    // exit each( stringParsers ) here because we matched
                    return false;
                }
            });

            // Found a stringParser that handled it
            if ( rgba.length ) {

                // if this came from a parsed string, force "transparent" when alpha is 0
                // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
                if ( rgba.join() === "0,0,0,0" ) {
                    jQuery.extend( rgba, colors.transparent );
                }
                return inst;
            }

            // named colors
            return colors[ string ];
        }

        color.fn = jQuery.extend( color.prototype, {
            parse: function( red, green, blue, alpha ) {
                if ( red === undefined ) {
                    this._rgba = [ null, null, null, null ];
                    return this;
                }
                if ( red.jquery || red.nodeType ) {
                    red = jQuery( red ).css( green );
                    green = undefined;
                }

                var inst = this,
                    type = jQuery.type( red ),
                    rgba = this._rgba = [];

                // more than 1 argument specified - assume ( red, green, blue, alpha )
                if ( green !== undefined ) {
                    red = [ red, green, blue, alpha ];
                    type = "array";
                }

                if ( type === "string" ) {
                    return this.parse( stringParse( red ) || colors._default );
                }

                if ( type === "array" ) {
                    each( spaces.rgba.props, function( key, prop ) {
                        rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
                    });
                    return this;
                }

                if ( type === "object" ) {
                    if ( red instanceof color ) {
                        each( spaces, function( spaceName, space ) {
                            if ( red[ space.cache ] ) {
                                inst[ space.cache ] = red[ space.cache ].slice();
                            }
                        });
                    } else {
                        each( spaces, function( spaceName, space ) {
                            var cache = space.cache;
                            each( space.props, function( key, prop ) {

                                // if the cache doesn't exist, and we know how to convert
                                if ( !inst[ cache ] && space.to ) {

                                    // if the value was null, we don't need to copy it
                                    // if the key was alpha, we don't need to copy it either
                                    if ( key === "alpha" || red[ key ] == null ) {
                                        return;
                                    }
                                    inst[ cache ] = space.to( inst._rgba );
                                }

                                // this is the only case where we allow nulls for ALL properties.
                                // call clamp with alwaysAllowEmpty
                                inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
                            });

                            // everything defined but alpha?
                            if ( inst[ cache ] && jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {
                                // use the default of 1
                                inst[ cache ][ 3 ] = 1;
                                if ( space.from ) {
                                    inst._rgba = space.from( inst[ cache ] );
                                }
                            }
                        });
                    }
                    return this;
                }
            },
            is: function( compare ) {
                var is = color( compare ),
                    same = true,
                    inst = this;

                each( spaces, function( _, space ) {
                    var localCache,
                        isCache = is[ space.cache ];
                    if (isCache) {
                        localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
                        each( space.props, function( _, prop ) {
                            if ( isCache[ prop.idx ] != null ) {
                                same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
                                return same;
                            }
                        });
                    }
                    return same;
                });
                return same;
            },
            _space: function() {
                var used = [],
                    inst = this;
                each( spaces, function( spaceName, space ) {
                    if ( inst[ space.cache ] ) {
                        used.push( spaceName );
                    }
                });
                return used.pop();
            },
            transition: function( other, distance ) {
                var end = color( other ),
                    spaceName = end._space(),
                    space = spaces[ spaceName ],
                    startColor = this.alpha() === 0 ? color( "transparent" ) : this,
                    start = startColor[ space.cache ] || space.to( startColor._rgba ),
                    result = start.slice();

                end = end[ space.cache ];
                each( space.props, function( key, prop ) {
                    var index = prop.idx,
                        startValue = start[ index ],
                        endValue = end[ index ],
                        type = propTypes[ prop.type ] || {};

                    // if null, don't override start value
                    if ( endValue === null ) {
                        return;
                    }
                    // if null - use end
                    if ( startValue === null ) {
                        result[ index ] = endValue;
                    } else {
                        if ( type.mod ) {
                            if ( endValue - startValue > type.mod / 2 ) {
                                startValue += type.mod;
                            } else if ( startValue - endValue > type.mod / 2 ) {
                                startValue -= type.mod;
                            }
                        }
                        result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
                    }
                });
                return this[ spaceName ]( result );
            },
            blend: function( opaque ) {
                // if we are already opaque - return ourself
                if ( this._rgba[ 3 ] === 1 ) {
                    return this;
                }

                var rgb = this._rgba.slice(),
                    a = rgb.pop(),
                    blend = color( opaque )._rgba;

                return color( jQuery.map( rgb, function( v, i ) {
                    return ( 1 - a ) * blend[ i ] + a * v;
                }));
            },
            toRgbaString: function() {
                var prefix = "rgba(",
                    rgba = jQuery.map( this._rgba, function( v, i ) {
                        return v == null ? ( i > 2 ? 1 : 0 ) : v;
                    });

                if ( rgba[ 3 ] === 1 ) {
                    rgba.pop();
                    prefix = "rgb(";
                }

                return prefix + rgba.join() + ")";
            },
            toHslaString: function() {
                var prefix = "hsla(",
                    hsla = jQuery.map( this.hsla(), function( v, i ) {
                        if ( v == null ) {
                            v = i > 2 ? 1 : 0;
                        }

                        // catch 1 and 2
                        if ( i && i < 3 ) {
                            v = Math.round( v * 100 ) + "%";
                        }
                        return v;
                    });

                if ( hsla[ 3 ] === 1 ) {
                    hsla.pop();
                    prefix = "hsl(";
                }
                return prefix + hsla.join() + ")";
            },
            toHexString: function( includeAlpha ) {
                var rgba = this._rgba.slice(),
                    alpha = rgba.pop();

                if ( includeAlpha ) {
                    rgba.push( ~~( alpha * 255 ) );
                }

                return "#" + jQuery.map( rgba, function( v ) {

                        // default to 0 when nulls exist
                        v = ( v || 0 ).toString( 16 );
                        return v.length === 1 ? "0" + v : v;
                    }).join("");
            },
            toString: function() {
                return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
            }
        });
        color.fn.parse.prototype = color.fn;

// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

        function hue2rgb( p, q, h ) {
            h = ( h + 1 ) % 1;
            if ( h * 6 < 1 ) {
                return p + ( q - p ) * h * 6;
            }
            if ( h * 2 < 1) {
                return q;
            }
            if ( h * 3 < 2 ) {
                return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
            }
            return p;
        }

        spaces.hsla.to = function( rgba ) {
            if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
                return [ null, null, null, rgba[ 3 ] ];
            }
            var r = rgba[ 0 ] / 255,
                g = rgba[ 1 ] / 255,
                b = rgba[ 2 ] / 255,
                a = rgba[ 3 ],
                max = Math.max( r, g, b ),
                min = Math.min( r, g, b ),
                diff = max - min,
                add = max + min,
                l = add * 0.5,
                h, s;

            if ( min === max ) {
                h = 0;
            } else if ( r === max ) {
                h = ( 60 * ( g - b ) / diff ) + 360;
            } else if ( g === max ) {
                h = ( 60 * ( b - r ) / diff ) + 120;
            } else {
                h = ( 60 * ( r - g ) / diff ) + 240;
            }

            // chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
            // otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
            if ( diff === 0 ) {
                s = 0;
            } else if ( l <= 0.5 ) {
                s = diff / add;
            } else {
                s = diff / ( 2 - add );
            }
            return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
        };

        spaces.hsla.from = function( hsla ) {
            if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
                return [ null, null, null, hsla[ 3 ] ];
            }
            var h = hsla[ 0 ] / 360,
                s = hsla[ 1 ],
                l = hsla[ 2 ],
                a = hsla[ 3 ],
                q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
                p = 2 * l - q;

            return [
                Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
                Math.round( hue2rgb( p, q, h ) * 255 ),
                Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
                a
            ];
        };

        each( spaces, function( spaceName, space ) {
            var props = space.props,
                cache = space.cache,
                to = space.to,
                from = space.from;

            // makes rgba() and hsla()
            color.fn[ spaceName ] = function( value ) {

                // generate a cache for this space if it doesn't exist
                if ( to && !this[ cache ] ) {
                    this[ cache ] = to( this._rgba );
                }
                if ( value === undefined ) {
                    return this[ cache ].slice();
                }

                var ret,
                    type = jQuery.type( value ),
                    arr = ( type === "array" || type === "object" ) ? value : arguments,
                    local = this[ cache ].slice();

                each( props, function( key, prop ) {
                    var val = arr[ type === "object" ? key : prop.idx ];
                    if ( val == null ) {
                        val = local[ prop.idx ];
                    }
                    local[ prop.idx ] = clamp( val, prop );
                });

                if ( from ) {
                    ret = color( from( local ) );
                    ret[ cache ] = local;
                    return ret;
                } else {
                    return color( local );
                }
            };

            // makes red() green() blue() alpha() hue() saturation() lightness()
            each( props, function( key, prop ) {
                // alpha is included in more than one space
                if ( color.fn[ key ] ) {
                    return;
                }
                color.fn[ key ] = function( value ) {
                    var vtype = jQuery.type( value ),
                        fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
                        local = this[ fn ](),
                        cur = local[ prop.idx ],
                        match;

                    if ( vtype === "undefined" ) {
                        return cur;
                    }

                    if ( vtype === "function" ) {
                        value = value.call( this, cur );
                        vtype = jQuery.type( value );
                    }
                    if ( value == null && prop.empty ) {
                        return this;
                    }
                    if ( vtype === "string" ) {
                        match = rplusequals.exec( value );
                        if ( match ) {
                            value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
                        }
                    }
                    local[ prop.idx ] = value;
                    return this[ fn ]( local );
                };
            });
        });

// add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
        color.hook = function( hook ) {
            var hooks = hook.split( " " );
            each( hooks, function( i, hook ) {
                jQuery.cssHooks[ hook ] = {
                    set: function( elem, value ) {
                        var parsed, curElem,
                            backgroundColor = "";

                        if ( value !== "transparent" && ( jQuery.type( value ) !== "string" || ( parsed = stringParse( value ) ) ) ) {
                            value = color( parsed || value );
                            if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
                                curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                                while (
                                (backgroundColor === "" || backgroundColor === "transparent") &&
                                curElem && curElem.style
                                    ) {
                                    try {
                                        backgroundColor = jQuery.css( curElem, "backgroundColor" );
                                        curElem = curElem.parentNode;
                                    } catch ( e ) {
                                    }
                                }

                                value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
                                    backgroundColor :
                                    "_default" );
                            }

                            value = value.toRgbaString();
                        }
                        try {
                            elem.style[ hook ] = value;
                        } catch ( e ) {
                            // wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
                        }
                    }
                };
                jQuery.fx.step[ hook ] = function( fx ) {
                    if ( !fx.colorInit ) {
                        fx.start = color( fx.elem, hook );
                        fx.end = color( fx.end );
                        fx.colorInit = true;
                    }
                    jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
                };
            });

        };

        color.hook( stepHooks );

        jQuery.cssHooks.borderColor = {
            expand: function( value ) {
                var expanded = {};

                each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
                    expanded[ "border" + part + "Color" ] = value;
                });
                return expanded;
            }
        };

// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
        colors = jQuery.Color.names = {
            // 4.1. Basic color keywords
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",

            // 4.2.3. "transparent" color keyword
            transparent: [ null, null, null, 0 ],

            _default: "#ffffff"
        };

    })( jQuery );

    /******************************************************************************/
    /****************************** CLASS ANIMATIONS ******************************/
    /******************************************************************************/
    (function() {

        var classAnimationActions = [ "add", "remove", "toggle" ],
            shorthandStyles = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };

        $.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function( _, prop ) {
            $.fx.step[ prop ] = function( fx ) {
                if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
                    jQuery.style( fx.elem, prop, fx.end );
                    fx.setAttr = true;
                }
            };
        });

        function getElementStyles( elem ) {
            var key, len,
                style = elem.ownerDocument.defaultView ?
                    elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
                    elem.currentStyle,
                styles = {};

            if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
                len = style.length;
                while ( len-- ) {
                    key = style[ len ];
                    if ( typeof style[ key ] === "string" ) {
                        styles[ $.camelCase( key ) ] = style[ key ];
                    }
                }
                // support: Opera, IE <9
            } else {
                for ( key in style ) {
                    if ( typeof style[ key ] === "string" ) {
                        styles[ key ] = style[ key ];
                    }
                }
            }

            return styles;
        }

        function styleDifference( oldStyle, newStyle ) {
            var diff = {},
                name, value;

            for ( name in newStyle ) {
                value = newStyle[ name ];
                if ( oldStyle[ name ] !== value ) {
                    if ( !shorthandStyles[ name ] ) {
                        if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
                            diff[ name ] = value;
                        }
                    }
                }
            }

            return diff;
        }

// support: jQuery <1.8
        if ( !$.fn.addBack ) {
            $.fn.addBack = function( selector ) {
                return this.add( selector == null ?
                        this.prevObject : this.prevObject.filter( selector )
                );
            };
        }

        $.effects.animateClass = function( value, duration, easing, callback ) {
            var o = $.speed( duration, easing, callback );

            return this.queue( function() {
                var animated = $( this ),
                    baseClass = animated.attr( "class" ) || "",
                    applyClassChange,
                    allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

                // map the animated objects to store the original styles.
                allAnimations = allAnimations.map(function() {
                    var el = $( this );
                    return {
                        el: el,
                        start: getElementStyles( this )
                    };
                });

                // apply class change
                applyClassChange = function() {
                    $.each( classAnimationActions, function(i, action) {
                        if ( value[ action ] ) {
                            animated[ action + "Class" ]( value[ action ] );
                        }
                    });
                };
                applyClassChange();

                // map all animated objects again - calculate new styles and diff
                allAnimations = allAnimations.map(function() {
                    this.end = getElementStyles( this.el[ 0 ] );
                    this.diff = styleDifference( this.start, this.end );
                    return this;
                });

                // apply original class
                animated.attr( "class", baseClass );

                // map all animated objects again - this time collecting a promise
                allAnimations = allAnimations.map(function() {
                    var styleInfo = this,
                        dfd = $.Deferred(),
                        opts = $.extend({}, o, {
                            queue: false,
                            complete: function() {
                                dfd.resolve( styleInfo );
                            }
                        });

                    this.el.animate( this.diff, opts );
                    return dfd.promise();
                });

                // once all animations have completed:
                $.when.apply( $, allAnimations.get() ).done(function() {

                    // set the final class
                    applyClassChange();

                    // for each animated element,
                    // clear all css properties that were animated
                    $.each( arguments, function() {
                        var el = this.el;
                        $.each( this.diff, function(key) {
                            el.css( key, "" );
                        });
                    });

                    // this is guarnteed to be there if you use jQuery.speed()
                    // it also handles dequeuing the next anim...
                    o.complete.call( animated[ 0 ] );
                });
            });
        };

        $.fn.extend({
            addClass: (function( orig ) {
                return function( classNames, speed, easing, callback ) {
                    return speed ?
                        $.effects.animateClass.call( this,
                            { add: classNames }, speed, easing, callback ) :
                        orig.apply( this, arguments );
                };
            })( $.fn.addClass ),

            removeClass: (function( orig ) {
                return function( classNames, speed, easing, callback ) {
                    return arguments.length > 1 ?
                        $.effects.animateClass.call( this,
                            { remove: classNames }, speed, easing, callback ) :
                        orig.apply( this, arguments );
                };
            })( $.fn.removeClass ),

            toggleClass: (function( orig ) {
                return function( classNames, force, speed, easing, callback ) {
                    if ( typeof force === "boolean" || force === undefined ) {
                        if ( !speed ) {
                            // without speed parameter
                            return orig.apply( this, arguments );
                        } else {
                            return $.effects.animateClass.call( this,
                                (force ? { add: classNames } : { remove: classNames }),
                                speed, easing, callback );
                        }
                    } else {
                        // without force parameter
                        return $.effects.animateClass.call( this,
                            { toggle: classNames }, force, speed, easing );
                    }
                };
            })( $.fn.toggleClass ),

            switchClass: function( remove, add, speed, easing, callback) {
                return $.effects.animateClass.call( this, {
                    add: add,
                    remove: remove
                }, speed, easing, callback );
            }
        });

    })();

    /******************************************************************************/
    /*********************************** EFFECTS **********************************/
    /******************************************************************************/

    (function() {

        $.extend( $.effects, {
            version: "1.11.4",

            // Saves a set of properties in a data storage
            save: function( element, set ) {
                for ( var i = 0; i < set.length; i++ ) {
                    if ( set[ i ] !== null ) {
                        element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
                    }
                }
            },

            // Restores a set of previously saved properties from a data storage
            restore: function( element, set ) {
                var val, i;
                for ( i = 0; i < set.length; i++ ) {
                    if ( set[ i ] !== null ) {
                        val = element.data( dataSpace + set[ i ] );
                        // support: jQuery 1.6.2
                        // http://bugs.jquery.com/ticket/9917
                        // jQuery 1.6.2 incorrectly returns undefined for any falsy value.
                        // We can't differentiate between "" and 0 here, so we just assume
                        // empty string since it's likely to be a more common value...
                        if ( val === undefined ) {
                            val = "";
                        }
                        element.css( set[ i ], val );
                    }
                }
            },

            setMode: function( el, mode ) {
                if (mode === "toggle") {
                    mode = el.is( ":hidden" ) ? "show" : "hide";
                }
                return mode;
            },

            // Translates a [top,left] array into a baseline value
            // this should be a little more flexible in the future to handle a string & hash
            getBaseline: function( origin, original ) {
                var y, x;
                switch ( origin[ 0 ] ) {
                    case "top": y = 0; break;
                    case "middle": y = 0.5; break;
                    case "bottom": y = 1; break;
                    default: y = origin[ 0 ] / original.height;
                }
                switch ( origin[ 1 ] ) {
                    case "left": x = 0; break;
                    case "center": x = 0.5; break;
                    case "right": x = 1; break;
                    default: x = origin[ 1 ] / original.width;
                }
                return {
                    x: x,
                    y: y
                };
            },

            // Wraps the element around a wrapper that copies position properties
            createWrapper: function( element ) {

                // if the element is already wrapped, return it
                if ( element.parent().is( ".ui-effects-wrapper" )) {
                    return element.parent();
                }

                // wrap the element
                var props = {
                        width: element.outerWidth(true),
                        height: element.outerHeight(true),
                        "float": element.css( "float" )
                    },
                    wrapper = $( "<div></div>" )
                        .addClass( "ui-effects-wrapper" )
                        .css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                // Store the size in case width/height are defined in % - Fixes #5245
                    size = {
                        width: element.width(),
                        height: element.height()
                    },
                    active = document.activeElement;

                // support: Firefox
                // Firefox incorrectly exposes anonymous content
                // https://bugzilla.mozilla.org/show_bug.cgi?id=561664
                try {
                    active.id;
                } catch ( e ) {
                    active = document.body;
                }

                element.wrap( wrapper );

                // Fixes #7595 - Elements lose focus when wrapped.
                if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
                    $( active ).focus();
                }

                wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually lose the reference to the wrapped element

                // transfer positioning properties to the wrapper
                if ( element.css( "position" ) === "static" ) {
                    wrapper.css({ position: "relative" });
                    element.css({ position: "relative" });
                } else {
                    $.extend( props, {
                        position: element.css( "position" ),
                        zIndex: element.css( "z-index" )
                    });
                    $.each([ "top", "left", "bottom", "right" ], function(i, pos) {
                        props[ pos ] = element.css( pos );
                        if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
                            props[ pos ] = "auto";
                        }
                    });
                    element.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    });
                }
                element.css(size);

                return wrapper.css( props ).show();
            },

            removeWrapper: function( element ) {
                var active = document.activeElement;

                if ( element.parent().is( ".ui-effects-wrapper" ) ) {
                    element.parent().replaceWith( element );

                    // Fixes #7595 - Elements lose focus when wrapped.
                    if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
                        $( active ).focus();
                    }
                }

                return element;
            },

            setTransition: function( element, list, factor, value ) {
                value = value || {};
                $.each( list, function( i, x ) {
                    var unit = element.cssUnit( x );
                    if ( unit[ 0 ] > 0 ) {
                        value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
                    }
                });
                return value;
            }
        });

// return an effect options object for the given parameters:
        function _normalizeArguments( effect, options, speed, callback ) {

            // allow passing all options as the first parameter
            if ( $.isPlainObject( effect ) ) {
                options = effect;
                effect = effect.effect;
            }

            // convert to an object
            effect = { effect: effect };

            // catch (effect, null, ...)
            if ( options == null ) {
                options = {};
            }

            // catch (effect, callback)
            if ( $.isFunction( options ) ) {
                callback = options;
                speed = null;
                options = {};
            }

            // catch (effect, speed, ?)
            if ( typeof options === "number" || $.fx.speeds[ options ] ) {
                callback = speed;
                speed = options;
                options = {};
            }

            // catch (effect, options, callback)
            if ( $.isFunction( speed ) ) {
                callback = speed;
                speed = null;
            }

            // add options to effect
            if ( options ) {
                $.extend( effect, options );
            }

            speed = speed || options.duration;
            effect.duration = $.fx.off ? 0 :
                typeof speed === "number" ? speed :
                    speed in $.fx.speeds ? $.fx.speeds[ speed ] :
                        $.fx.speeds._default;

            effect.complete = callback || options.complete;

            return effect;
        }

        function standardAnimationOption( option ) {
            // Valid standard speeds (nothing, number, named speed)
            if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
                return true;
            }

            // Invalid strings - treat as "normal" speed
            if ( typeof option === "string" && !$.effects.effect[ option ] ) {
                return true;
            }

            // Complete callback
            if ( $.isFunction( option ) ) {
                return true;
            }

            // Options hash (but not naming an effect)
            if ( typeof option === "object" && !option.effect ) {
                return true;
            }

            // Didn't match any standard API
            return false;
        }

        $.fn.extend({
            effect: function( /* effect, options, speed, callback */ ) {
                var args = _normalizeArguments.apply( this, arguments ),
                    mode = args.mode,
                    queue = args.queue,
                    effectMethod = $.effects.effect[ args.effect ];

                if ( $.fx.off || !effectMethod ) {
                    // delegate to the original method (e.g., .show()) if possible
                    if ( mode ) {
                        return this[ mode ]( args.duration, args.complete );
                    } else {
                        return this.each( function() {
                            if ( args.complete ) {
                                args.complete.call( this );
                            }
                        });
                    }
                }

                function run( next ) {
                    var elem = $( this ),
                        complete = args.complete,
                        mode = args.mode;

                    function done() {
                        if ( $.isFunction( complete ) ) {
                            complete.call( elem[0] );
                        }
                        if ( $.isFunction( next ) ) {
                            next();
                        }
                    }

                    // If the element already has the correct final state, delegate to
                    // the core methods so the internal tracking of "olddisplay" works.
                    if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {
                        elem[ mode ]();
                        done();
                    } else {
                        effectMethod.call( elem[0], args, done );
                    }
                }

                return queue === false ? this.each( run ) : this.queue( queue || "fx", run );
            },

            show: (function( orig ) {
                return function( option ) {
                    if ( standardAnimationOption( option ) ) {
                        return orig.apply( this, arguments );
                    } else {
                        var args = _normalizeArguments.apply( this, arguments );
                        args.mode = "show";
                        return this.effect.call( this, args );
                    }
                };
            })( $.fn.show ),

            hide: (function( orig ) {
                return function( option ) {
                    if ( standardAnimationOption( option ) ) {
                        return orig.apply( this, arguments );
                    } else {
                        var args = _normalizeArguments.apply( this, arguments );
                        args.mode = "hide";
                        return this.effect.call( this, args );
                    }
                };
            })( $.fn.hide ),

            toggle: (function( orig ) {
                return function( option ) {
                    if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
                        return orig.apply( this, arguments );
                    } else {
                        var args = _normalizeArguments.apply( this, arguments );
                        args.mode = "toggle";
                        return this.effect.call( this, args );
                    }
                };
            })( $.fn.toggle ),

            // helper functions
            cssUnit: function(key) {
                var style = this.css( key ),
                    val = [];

                $.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
                    if ( style.indexOf( unit ) > 0 ) {
                        val = [ parseFloat( style ), unit ];
                    }
                });
                return val;
            }
        });

    })();

    /******************************************************************************/
    /*********************************** EASING ***********************************/
    /******************************************************************************/

    (function() {

// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

        var baseEasings = {};

        $.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
            baseEasings[ name ] = function( p ) {
                return Math.pow( p, i + 2 );
            };
        });

        $.extend( baseEasings, {
            Sine: function( p ) {
                return 1 - Math.cos( p * Math.PI / 2 );
            },
            Circ: function( p ) {
                return 1 - Math.sqrt( 1 - p * p );
            },
            Elastic: function( p ) {
                return p === 0 || p === 1 ? p :
                -Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
            },
            Back: function( p ) {
                return p * p * ( 3 * p - 2 );
            },
            Bounce: function( p ) {
                var pow2,
                    bounce = 4;

                while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
                return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
            }
        });

        $.each( baseEasings, function( name, easeIn ) {
            $.easing[ "easeIn" + name ] = easeIn;
            $.easing[ "easeOut" + name ] = function( p ) {
                return 1 - easeIn( 1 - p );
            };
            $.easing[ "easeInOut" + name ] = function( p ) {
                return p < 0.5 ?
                easeIn( p * 2 ) / 2 :
                1 - easeIn( p * -2 + 2 ) / 2;
            };
        });

    })();

    var effect = $.effects;


    /*!
     * jQuery UI Effects Blind 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/blind-effect/
     */


    var effectBlind = $.effects.effect.blind = function( o, done ) {
        // Create element
        var el = $( this ),
            rvertical = /up|down|vertical/,
            rpositivemotion = /up|left|vertical|horizontal/,
            props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
            mode = $.effects.setMode( el, o.mode || "hide" ),
            direction = o.direction || "up",
            vertical = rvertical.test( direction ),
            ref = vertical ? "height" : "width",
            ref2 = vertical ? "top" : "left",
            motion = rpositivemotion.test( direction ),
            animation = {},
            show = mode === "show",
            wrapper, distance, margin;

        // if already wrapped, the wrapper's properties are my property. #6245
        if ( el.parent().is( ".ui-effects-wrapper" ) ) {
            $.effects.save( el.parent(), props );
        } else {
            $.effects.save( el, props );
        }
        el.show();
        wrapper = $.effects.createWrapper( el ).css({
            overflow: "hidden"
        });

        distance = wrapper[ ref ]();
        margin = parseFloat( wrapper.css( ref2 ) ) || 0;

        animation[ ref ] = show ? distance : 0;
        if ( !motion ) {
            el
                .css( vertical ? "bottom" : "right", 0 )
                .css( vertical ? "top" : "left", "auto" )
                .css({ position: "absolute" });

            animation[ ref2 ] = show ? margin : distance + margin;
        }

        // start at 0 if we are showing
        if ( show ) {
            wrapper.css( ref, 0 );
            if ( !motion ) {
                wrapper.css( ref2, margin + distance );
            }
        }

        // Animate
        wrapper.animate( animation, {
            duration: o.duration,
            easing: o.easing,
            queue: false,
            complete: function() {
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            }
        });
    };


    /*!
     * jQuery UI Effects Bounce 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/bounce-effect/
     */


    var effectBounce = $.effects.effect.bounce = function( o, done ) {
        var el = $( this ),
            props = [ "position", "top", "bottom", "left", "right", "height", "width" ],

        // defaults:
            mode = $.effects.setMode( el, o.mode || "effect" ),
            hide = mode === "hide",
            show = mode === "show",
            direction = o.direction || "up",
            distance = o.distance,
            times = o.times || 5,

        // number of internal animations
            anims = times * 2 + ( show || hide ? 1 : 0 ),
            speed = o.duration / anims,
            easing = o.easing,

        // utility:
            ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
            motion = ( direction === "up" || direction === "left" ),
            i,
            upAnim,
            downAnim,

        // we will need to re-assemble the queue to stack our animations in place
            queue = el.queue(),
            queuelen = queue.length;

        // Avoid touching opacity to prevent clearType and PNG issues in IE
        if ( show || hide ) {
            props.push( "opacity" );
        }

        $.effects.save( el, props );
        el.show();
        $.effects.createWrapper( el ); // Create Wrapper

        // default distance for the BIGGEST bounce is the outer Distance / 3
        if ( !distance ) {
            distance = el[ ref === "top" ? "outerHeight" : "outerWidth" ]() / 3;
        }

        if ( show ) {
            downAnim = { opacity: 1 };
            downAnim[ ref ] = 0;

            // if we are showing, force opacity 0 and set the initial position
            // then do the "first" animation
            el.css( "opacity", 0 )
                .css( ref, motion ? -distance * 2 : distance * 2 )
                .animate( downAnim, speed, easing );
        }

        // start at the smallest distance if we are hiding
        if ( hide ) {
            distance = distance / Math.pow( 2, times - 1 );
        }

        downAnim = {};
        downAnim[ ref ] = 0;
        // Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
        for ( i = 0; i < times; i++ ) {
            upAnim = {};
            upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

            el.animate( upAnim, speed, easing )
                .animate( downAnim, speed, easing );

            distance = hide ? distance * 2 : distance / 2;
        }

        // Last Bounce when Hiding
        if ( hide ) {
            upAnim = { opacity: 0 };
            upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

            el.animate( upAnim, speed, easing );
        }

        el.queue(function() {
            if ( hide ) {
                el.hide();
            }
            $.effects.restore( el, props );
            $.effects.removeWrapper( el );
            done();
        });

        // inject all the animations we just queued to be first in line (after "inprogress")
        if ( queuelen > 1) {
            queue.splice.apply( queue,
                [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
        }
        el.dequeue();

    };


    /*!
     * jQuery UI Effects Clip 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/clip-effect/
     */


    var effectClip = $.effects.effect.clip = function( o, done ) {
        // Create element
        var el = $( this ),
            props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
            mode = $.effects.setMode( el, o.mode || "hide" ),
            show = mode === "show",
            direction = o.direction || "vertical",
            vert = direction === "vertical",
            size = vert ? "height" : "width",
            position = vert ? "top" : "left",
            animation = {},
            wrapper, animate, distance;

        // Save & Show
        $.effects.save( el, props );
        el.show();

        // Create Wrapper
        wrapper = $.effects.createWrapper( el ).css({
            overflow: "hidden"
        });
        animate = ( el[0].tagName === "IMG" ) ? wrapper : el;
        distance = animate[ size ]();

        // Shift
        if ( show ) {
            animate.css( size, 0 );
            animate.css( position, distance / 2 );
        }

        // Create Animation Object:
        animation[ size ] = show ? distance : 0;
        animation[ position ] = show ? 0 : distance / 2;

        // Animate
        animate.animate( animation, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if ( !show ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            }
        });

    };


    /*!
     * jQuery UI Effects Drop 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/drop-effect/
     */


    var effectDrop = $.effects.effect.drop = function( o, done ) {

        var el = $( this ),
            props = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ],
            mode = $.effects.setMode( el, o.mode || "hide" ),
            show = mode === "show",
            direction = o.direction || "left",
            ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
            motion = ( direction === "up" || direction === "left" ) ? "pos" : "neg",
            animation = {
                opacity: show ? 1 : 0
            },
            distance;

        // Adjust
        $.effects.save( el, props );
        el.show();
        $.effects.createWrapper( el );

        distance = o.distance || el[ ref === "top" ? "outerHeight" : "outerWidth" ]( true ) / 2;

        if ( show ) {
            el
                .css( "opacity", 0 )
                .css( ref, motion === "pos" ? -distance : distance );
        }

        // Animation
        animation[ ref ] = ( show ?
            ( motion === "pos" ? "+=" : "-=" ) :
            ( motion === "pos" ? "-=" : "+=" ) ) +
        distance;

        // Animate
        el.animate( animation, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            }
        });
    };


    /*!
     * jQuery UI Effects Explode 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/explode-effect/
     */


    var effectExplode = $.effects.effect.explode = function( o, done ) {

        var rows = o.pieces ? Math.round( Math.sqrt( o.pieces ) ) : 3,
            cells = rows,
            el = $( this ),
            mode = $.effects.setMode( el, o.mode || "hide" ),
            show = mode === "show",

        // show and then visibility:hidden the element before calculating offset
            offset = el.show().css( "visibility", "hidden" ).offset(),

        // width and height of a piece
            width = Math.ceil( el.outerWidth() / cells ),
            height = Math.ceil( el.outerHeight() / rows ),
            pieces = [],

        // loop
            i, j, left, top, mx, my;

        // children animate complete:
        function childComplete() {
            pieces.push( this );
            if ( pieces.length === rows * cells ) {
                animComplete();
            }
        }

        // clone the element for each row and cell.
        for ( i = 0; i < rows ; i++ ) { // ===>
            top = offset.top + i * height;
            my = i - ( rows - 1 ) / 2 ;

            for ( j = 0; j < cells ; j++ ) { // |||
                left = offset.left + j * width;
                mx = j - ( cells - 1 ) / 2 ;

                // Create a clone of the now hidden main element that will be absolute positioned
                // within a wrapper div off the -left and -top equal to size of our pieces
                el
                    .clone()
                    .appendTo( "body" )
                    .wrap( "<div></div>" )
                    .css({
                        position: "absolute",
                        visibility: "visible",
                        left: -j * width,
                        top: -i * height
                    })

                    // select the wrapper - make it overflow: hidden and absolute positioned based on
                    // where the original was located +left and +top equal to the size of pieces
                    .parent()
                    .addClass( "ui-effects-explode" )
                    .css({
                        position: "absolute",
                        overflow: "hidden",
                        width: width,
                        height: height,
                        left: left + ( show ? mx * width : 0 ),
                        top: top + ( show ? my * height : 0 ),
                        opacity: show ? 0 : 1
                    }).animate({
                        left: left + ( show ? 0 : mx * width ),
                        top: top + ( show ? 0 : my * height ),
                        opacity: show ? 1 : 0
                    }, o.duration || 500, o.easing, childComplete );
            }
        }

        function animComplete() {
            el.css({
                visibility: "visible"
            });
            $( pieces ).remove();
            if ( !show ) {
                el.hide();
            }
            done();
        }
    };


    /*!
     * jQuery UI Effects Fade 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/fade-effect/
     */


    var effectFade = $.effects.effect.fade = function( o, done ) {
        var el = $( this ),
            mode = $.effects.setMode( el, o.mode || "toggle" );

        el.animate({
            opacity: mode
        }, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: done
        });
    };


    /*!
     * jQuery UI Effects Fold 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/fold-effect/
     */


    var effectFold = $.effects.effect.fold = function( o, done ) {

        // Create element
        var el = $( this ),
            props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
            mode = $.effects.setMode( el, o.mode || "hide" ),
            show = mode === "show",
            hide = mode === "hide",
            size = o.size || 15,
            percent = /([0-9]+)%/.exec( size ),
            horizFirst = !!o.horizFirst,
            widthFirst = show !== horizFirst,
            ref = widthFirst ? [ "width", "height" ] : [ "height", "width" ],
            duration = o.duration / 2,
            wrapper, distance,
            animation1 = {},
            animation2 = {};

        $.effects.save( el, props );
        el.show();

        // Create Wrapper
        wrapper = $.effects.createWrapper( el ).css({
            overflow: "hidden"
        });
        distance = widthFirst ?
            [ wrapper.width(), wrapper.height() ] :
            [ wrapper.height(), wrapper.width() ];

        if ( percent ) {
            size = parseInt( percent[ 1 ], 10 ) / 100 * distance[ hide ? 0 : 1 ];
        }
        if ( show ) {
            wrapper.css( horizFirst ? {
                height: 0,
                width: size
            } : {
                height: size,
                width: 0
            });
        }

        // Animation
        animation1[ ref[ 0 ] ] = show ? distance[ 0 ] : size;
        animation2[ ref[ 1 ] ] = show ? distance[ 1 ] : 0;

        // Animate
        wrapper
            .animate( animation1, duration, o.easing )
            .animate( animation2, duration, o.easing, function() {
                if ( hide ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            });

    };


    /*!
     * jQuery UI Effects Highlight 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/highlight-effect/
     */


    var effectHighlight = $.effects.effect.highlight = function( o, done ) {
        var elem = $( this ),
            props = [ "backgroundImage", "backgroundColor", "opacity" ],
            mode = $.effects.setMode( elem, o.mode || "show" ),
            animation = {
                backgroundColor: elem.css( "backgroundColor" )
            };

        if (mode === "hide") {
            animation.opacity = 0;
        }

        $.effects.save( elem, props );

        elem
            .show()
            .css({
                backgroundImage: "none",
                backgroundColor: o.color || "#ffff99"
            })
            .animate( animation, {
                queue: false,
                duration: o.duration,
                easing: o.easing,
                complete: function() {
                    if ( mode === "hide" ) {
                        elem.hide();
                    }
                    $.effects.restore( elem, props );
                    done();
                }
            });
    };


    /*!
     * jQuery UI Effects Size 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/size-effect/
     */


    var effectSize = $.effects.effect.size = function( o, done ) {

        // Create element
        var original, baseline, factor,
            el = $( this ),
            props0 = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ],

        // Always restore
            props1 = [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ],

        // Copy for children
            props2 = [ "width", "height", "overflow" ],
            cProps = [ "fontSize" ],
            vProps = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ],
            hProps = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ],

        // Set options
            mode = $.effects.setMode( el, o.mode || "effect" ),
            restore = o.restore || mode !== "effect",
            scale = o.scale || "both",
            origin = o.origin || [ "middle", "center" ],
            position = el.css( "position" ),
            props = restore ? props0 : props1,
            zero = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };

        if ( mode === "show" ) {
            el.show();
        }
        original = {
            height: el.height(),
            width: el.width(),
            outerHeight: el.outerHeight(),
            outerWidth: el.outerWidth()
        };

        if ( o.mode === "toggle" && mode === "show" ) {
            el.from = o.to || zero;
            el.to = o.from || original;
        } else {
            el.from = o.from || ( mode === "show" ? zero : original );
            el.to = o.to || ( mode === "hide" ? zero : original );
        }

        // Set scaling factor
        factor = {
            from: {
                y: el.from.height / original.height,
                x: el.from.width / original.width
            },
            to: {
                y: el.to.height / original.height,
                x: el.to.width / original.width
            }
        };

        // Scale the css box
        if ( scale === "box" || scale === "both" ) {

            // Vertical props scaling
            if ( factor.from.y !== factor.to.y ) {
                props = props.concat( vProps );
                el.from = $.effects.setTransition( el, vProps, factor.from.y, el.from );
                el.to = $.effects.setTransition( el, vProps, factor.to.y, el.to );
            }

            // Horizontal props scaling
            if ( factor.from.x !== factor.to.x ) {
                props = props.concat( hProps );
                el.from = $.effects.setTransition( el, hProps, factor.from.x, el.from );
                el.to = $.effects.setTransition( el, hProps, factor.to.x, el.to );
            }
        }

        // Scale the content
        if ( scale === "content" || scale === "both" ) {

            // Vertical props scaling
            if ( factor.from.y !== factor.to.y ) {
                props = props.concat( cProps ).concat( props2 );
                el.from = $.effects.setTransition( el, cProps, factor.from.y, el.from );
                el.to = $.effects.setTransition( el, cProps, factor.to.y, el.to );
            }
        }

        $.effects.save( el, props );
        el.show();
        $.effects.createWrapper( el );
        el.css( "overflow", "hidden" ).css( el.from );

        // Adjust
        if (origin) { // Calculate baseline shifts
            baseline = $.effects.getBaseline( origin, original );
            el.from.top = ( original.outerHeight - el.outerHeight() ) * baseline.y;
            el.from.left = ( original.outerWidth - el.outerWidth() ) * baseline.x;
            el.to.top = ( original.outerHeight - el.to.outerHeight ) * baseline.y;
            el.to.left = ( original.outerWidth - el.to.outerWidth ) * baseline.x;
        }
        el.css( el.from ); // set top & left

        // Animate
        if ( scale === "content" || scale === "both" ) { // Scale the children

            // Add margins/font-size
            vProps = vProps.concat([ "marginTop", "marginBottom" ]).concat(cProps);
            hProps = hProps.concat([ "marginLeft", "marginRight" ]);
            props2 = props0.concat(vProps).concat(hProps);

            el.find( "*[width]" ).each( function() {
                var child = $( this ),
                    c_original = {
                        height: child.height(),
                        width: child.width(),
                        outerHeight: child.outerHeight(),
                        outerWidth: child.outerWidth()
                    };
                if (restore) {
                    $.effects.save(child, props2);
                }

                child.from = {
                    height: c_original.height * factor.from.y,
                    width: c_original.width * factor.from.x,
                    outerHeight: c_original.outerHeight * factor.from.y,
                    outerWidth: c_original.outerWidth * factor.from.x
                };
                child.to = {
                    height: c_original.height * factor.to.y,
                    width: c_original.width * factor.to.x,
                    outerHeight: c_original.height * factor.to.y,
                    outerWidth: c_original.width * factor.to.x
                };

                // Vertical props scaling
                if ( factor.from.y !== factor.to.y ) {
                    child.from = $.effects.setTransition( child, vProps, factor.from.y, child.from );
                    child.to = $.effects.setTransition( child, vProps, factor.to.y, child.to );
                }

                // Horizontal props scaling
                if ( factor.from.x !== factor.to.x ) {
                    child.from = $.effects.setTransition( child, hProps, factor.from.x, child.from );
                    child.to = $.effects.setTransition( child, hProps, factor.to.x, child.to );
                }

                // Animate children
                child.css( child.from );
                child.animate( child.to, o.duration, o.easing, function() {

                    // Restore children
                    if ( restore ) {
                        $.effects.restore( child, props2 );
                    }
                });
            });
        }

        // Animate
        el.animate( el.to, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if ( el.to.opacity === 0 ) {
                    el.css( "opacity", el.from.opacity );
                }
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                if ( !restore ) {

                    // we need to calculate our new positioning based on the scaling
                    if ( position === "static" ) {
                        el.css({
                            position: "relative",
                            top: el.to.top,
                            left: el.to.left
                        });
                    } else {
                        $.each([ "top", "left" ], function( idx, pos ) {
                            el.css( pos, function( _, str ) {
                                var val = parseInt( str, 10 ),
                                    toRef = idx ? el.to.left : el.to.top;

                                // if original was "auto", recalculate the new value from wrapper
                                if ( str === "auto" ) {
                                    return toRef + "px";
                                }

                                return val + toRef + "px";
                            });
                        });
                    }
                }

                $.effects.removeWrapper( el );
                done();
            }
        });

    };


    /*!
     * jQuery UI Effects Scale 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/scale-effect/
     */


    var effectScale = $.effects.effect.scale = function( o, done ) {

        // Create element
        var el = $( this ),
            options = $.extend( true, {}, o ),
            mode = $.effects.setMode( el, o.mode || "effect" ),
            percent = parseInt( o.percent, 10 ) ||
                ( parseInt( o.percent, 10 ) === 0 ? 0 : ( mode === "hide" ? 0 : 100 ) ),
            direction = o.direction || "both",
            origin = o.origin,
            original = {
                height: el.height(),
                width: el.width(),
                outerHeight: el.outerHeight(),
                outerWidth: el.outerWidth()
            },
            factor = {
                y: direction !== "horizontal" ? (percent / 100) : 1,
                x: direction !== "vertical" ? (percent / 100) : 1
            };

        // We are going to pass this effect to the size effect:
        options.effect = "size";
        options.queue = false;
        options.complete = done;

        // Set default origin and restore for show/hide
        if ( mode !== "effect" ) {
            options.origin = origin || [ "middle", "center" ];
            options.restore = true;
        }

        options.from = o.from || ( mode === "show" ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : original );
        options.to = {
            height: original.height * factor.y,
            width: original.width * factor.x,
            outerHeight: original.outerHeight * factor.y,
            outerWidth: original.outerWidth * factor.x
        };

        // Fade option to support puff
        if ( options.fade ) {
            if ( mode === "show" ) {
                options.from.opacity = 0;
                options.to.opacity = 1;
            }
            if ( mode === "hide" ) {
                options.from.opacity = 1;
                options.to.opacity = 0;
            }
        }

        // Animate
        el.effect( options );

    };


    /*!
     * jQuery UI Effects Puff 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/puff-effect/
     */


    var effectPuff = $.effects.effect.puff = function( o, done ) {
        var elem = $( this ),
            mode = $.effects.setMode( elem, o.mode || "hide" ),
            hide = mode === "hide",
            percent = parseInt( o.percent, 10 ) || 150,
            factor = percent / 100,
            original = {
                height: elem.height(),
                width: elem.width(),
                outerHeight: elem.outerHeight(),
                outerWidth: elem.outerWidth()
            };

        $.extend( o, {
            effect: "scale",
            queue: false,
            fade: true,
            mode: mode,
            complete: done,
            percent: hide ? percent : 100,
            from: hide ?
                original :
            {
                height: original.height * factor,
                width: original.width * factor,
                outerHeight: original.outerHeight * factor,
                outerWidth: original.outerWidth * factor
            }
        });

        elem.effect( o );
    };


    /*!
     * jQuery UI Effects Pulsate 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/pulsate-effect/
     */


    var effectPulsate = $.effects.effect.pulsate = function( o, done ) {
        var elem = $( this ),
            mode = $.effects.setMode( elem, o.mode || "show" ),
            show = mode === "show",
            hide = mode === "hide",
            showhide = ( show || mode === "hide" ),

        // showing or hiding leaves of the "last" animation
            anims = ( ( o.times || 5 ) * 2 ) + ( showhide ? 1 : 0 ),
            duration = o.duration / anims,
            animateTo = 0,
            queue = elem.queue(),
            queuelen = queue.length,
            i;

        if ( show || !elem.is(":visible")) {
            elem.css( "opacity", 0 ).show();
            animateTo = 1;
        }

        // anims - 1 opacity "toggles"
        for ( i = 1; i < anims; i++ ) {
            elem.animate({
                opacity: animateTo
            }, duration, o.easing );
            animateTo = 1 - animateTo;
        }

        elem.animate({
            opacity: animateTo
        }, duration, o.easing);

        elem.queue(function() {
            if ( hide ) {
                elem.hide();
            }
            done();
        });

        // We just queued up "anims" animations, we need to put them next in the queue
        if ( queuelen > 1 ) {
            queue.splice.apply( queue,
                [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
        }
        elem.dequeue();
    };


    /*!
     * jQuery UI Effects Shake 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/shake-effect/
     */


    var effectShake = $.effects.effect.shake = function( o, done ) {

        var el = $( this ),
            props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
            mode = $.effects.setMode( el, o.mode || "effect" ),
            direction = o.direction || "left",
            distance = o.distance || 20,
            times = o.times || 3,
            anims = times * 2 + 1,
            speed = Math.round( o.duration / anims ),
            ref = (direction === "up" || direction === "down") ? "top" : "left",
            positiveMotion = (direction === "up" || direction === "left"),
            animation = {},
            animation1 = {},
            animation2 = {},
            i,

        // we will need to re-assemble the queue to stack our animations in place
            queue = el.queue(),
            queuelen = queue.length;

        $.effects.save( el, props );
        el.show();
        $.effects.createWrapper( el );

        // Animation
        animation[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance;
        animation1[ ref ] = ( positiveMotion ? "+=" : "-=" ) + distance * 2;
        animation2[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance * 2;

        // Animate
        el.animate( animation, speed, o.easing );

        // Shakes
        for ( i = 1; i < times; i++ ) {
            el.animate( animation1, speed, o.easing ).animate( animation2, speed, o.easing );
        }
        el
            .animate( animation1, speed, o.easing )
            .animate( animation, speed / 2, o.easing )
            .queue(function() {
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            });

        // inject all the animations we just queued to be first in line (after "inprogress")
        if ( queuelen > 1) {
            queue.splice.apply( queue,
                [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
        }
        el.dequeue();

    };


    /*!
     * jQuery UI Effects Slide 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/slide-effect/
     */


    var effectSlide = $.effects.effect.slide = function( o, done ) {

        // Create element
        var el = $( this ),
            props = [ "position", "top", "bottom", "left", "right", "width", "height" ],
            mode = $.effects.setMode( el, o.mode || "show" ),
            show = mode === "show",
            direction = o.direction || "left",
            ref = (direction === "up" || direction === "down") ? "top" : "left",
            positiveMotion = (direction === "up" || direction === "left"),
            distance,
            animation = {};

        // Adjust
        $.effects.save( el, props );
        el.show();
        distance = o.distance || el[ ref === "top" ? "outerHeight" : "outerWidth" ]( true );

        $.effects.createWrapper( el ).css({
            overflow: "hidden"
        });

        if ( show ) {
            el.css( ref, positiveMotion ? (isNaN(distance) ? "-" + distance : -distance) : distance );
        }

        // Animation
        animation[ ref ] = ( show ?
            ( positiveMotion ? "+=" : "-=") :
            ( positiveMotion ? "-=" : "+=")) +
        distance;

        // Animate
        el.animate( animation, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            }
        });
    };


    /*!
     * jQuery UI Effects Transfer 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/transfer-effect/
     */


    var effectTransfer = $.effects.effect.transfer = function( o, done ) {
        var elem = $( this ),
            target = $( o.to ),
            targetFixed = target.css( "position" ) === "fixed",
            body = $("body"),
            fixTop = targetFixed ? body.scrollTop() : 0,
            fixLeft = targetFixed ? body.scrollLeft() : 0,
            endPosition = target.offset(),
            animation = {
                top: endPosition.top - fixTop,
                left: endPosition.left - fixLeft,
                height: target.innerHeight(),
                width: target.innerWidth()
            },
            startPosition = elem.offset(),
            transfer = $( "<div class='ui-effects-transfer'></div>" )
                .appendTo( document.body )
                .addClass( o.className )
                .css({
                    top: startPosition.top - fixTop,
                    left: startPosition.left - fixLeft,
                    height: elem.innerHeight(),
                    width: elem.innerWidth(),
                    position: targetFixed ? "fixed" : "absolute"
                })
                .animate( animation, o.duration, o.easing, function() {
                    transfer.remove();
                    done();
                });
    };


    /*!
     * jQuery UI Progressbar 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/progressbar/
     */


    var progressbar = $.widget( "ui.progressbar", {
        version: "1.11.4",
        options: {
            max: 100,
            value: 0,

            change: null,
            complete: null
        },

        min: 0,

        _create: function() {
            // Constrain initial value
            this.oldValue = this.options.value = this._constrainedValue();

            this.element
                .addClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
                .attr({
                    // Only set static values, aria-valuenow and aria-valuemax are
                    // set inside _refreshValue()
                    role: "progressbar",
                    "aria-valuemin": this.min
                });

            this.valueDiv = $( "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>" )
                .appendTo( this.element );

            this._refreshValue();
        },

        _destroy: function() {
            this.element
                .removeClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
                .removeAttr( "role" )
                .removeAttr( "aria-valuemin" )
                .removeAttr( "aria-valuemax" )
                .removeAttr( "aria-valuenow" );

            this.valueDiv.remove();
        },

        value: function( newValue ) {
            if ( newValue === undefined ) {
                return this.options.value;
            }

            this.options.value = this._constrainedValue( newValue );
            this._refreshValue();
        },

        _constrainedValue: function( newValue ) {
            if ( newValue === undefined ) {
                newValue = this.options.value;
            }

            this.indeterminate = newValue === false;

            // sanitize value
            if ( typeof newValue !== "number" ) {
                newValue = 0;
            }

            return this.indeterminate ? false :
                Math.min( this.options.max, Math.max( this.min, newValue ) );
        },

        _setOptions: function( options ) {
            // Ensure "value" option is set after other values (like max)
            var value = options.value;
            delete options.value;

            this._super( options );

            this.options.value = this._constrainedValue( value );
            this._refreshValue();
        },

        _setOption: function( key, value ) {
            if ( key === "max" ) {
                // Don't allow a max less than min
                value = Math.max( this.min, value );
            }
            if ( key === "disabled" ) {
                this.element
                    .toggleClass( "ui-state-disabled", !!value )
                    .attr( "aria-disabled", value );
            }
            this._super( key, value );
        },

        _percentage: function() {
            return this.indeterminate ? 100 : 100 * ( this.options.value - this.min ) / ( this.options.max - this.min );
        },

        _refreshValue: function() {
            var value = this.options.value,
                percentage = this._percentage();

            this.valueDiv
                .toggle( this.indeterminate || value > this.min )
                .toggleClass( "ui-corner-right", value === this.options.max )
                .width( percentage.toFixed(0) + "%" );

            this.element.toggleClass( "ui-progressbar-indeterminate", this.indeterminate );

            if ( this.indeterminate ) {
                this.element.removeAttr( "aria-valuenow" );
                if ( !this.overlayDiv ) {
                    this.overlayDiv = $( "<div class='ui-progressbar-overlay'></div>" ).appendTo( this.valueDiv );
                }
            } else {
                this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": value
                });
                if ( this.overlayDiv ) {
                    this.overlayDiv.remove();
                    this.overlayDiv = null;
                }
            }

            if ( this.oldValue !== value ) {
                this.oldValue = value;
                this._trigger( "change" );
            }
            if ( value === this.options.max ) {
                this._trigger( "complete" );
            }
        }
    });


    /*!
     * jQuery UI Selectable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/selectable/
     */


    var selectable = $.widget("ui.selectable", $.ui.mouse, {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch",

            // callbacks
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var selectees,
                that = this;

            this.element.addClass("ui-selectable");

            this.dragged = false;

            // cache selectee children based on filter
            this.refresh = function() {
                selectees = $(that.options.filter, that.element[0]);
                selectees.addClass("ui-selectee");
                selectees.each(function() {
                    var $this = $(this),
                        pos = $this.offset();
                    $.data(this, "selectable-item", {
                        element: this,
                        $element: $this,
                        left: pos.left,
                        top: pos.top,
                        right: pos.left + $this.outerWidth(),
                        bottom: pos.top + $this.outerHeight(),
                        startselected: false,
                        selected: $this.hasClass("ui-selected"),
                        selecting: $this.hasClass("ui-selecting"),
                        unselecting: $this.hasClass("ui-unselecting")
                    });
                });
            };
            this.refresh();

            this.selectees = selectees.addClass("ui-selectee");

            this._mouseInit();

            this.helper = $("<div class='ui-selectable-helper'></div>");
        },

        _destroy: function() {
            this.selectees
                .removeClass("ui-selectee")
                .removeData("selectable-item");
            this.element
                .removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy();
        },

        _mouseStart: function(event) {
            var that = this,
                options = this.options;

            this.opos = [ event.pageX, event.pageY ];

            if (this.options.disabled) {
                return;
            }

            this.selectees = $(options.filter, this.element[0]);

            this._trigger("start", event);

            $(options.appendTo).append(this.helper);
            // position helper (lasso)
            this.helper.css({
                "left": event.pageX,
                "top": event.pageY,
                "width": 0,
                "height": 0
            });

            if (options.autoRefresh) {
                this.refresh();
            }

            this.selectees.filter(".ui-selected").each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.startselected = true;
                if (!event.metaKey && !event.ctrlKey) {
                    selectee.$element.removeClass("ui-selected");
                    selectee.selected = false;
                    selectee.$element.addClass("ui-unselecting");
                    selectee.unselecting = true;
                    // selectable UNSELECTING callback
                    that._trigger("unselecting", event, {
                        unselecting: selectee.element
                    });
                }
            });

            $(event.target).parents().addBack().each(function() {
                var doSelect,
                    selectee = $.data(this, "selectable-item");
                if (selectee) {
                    doSelect = (!event.metaKey && !event.ctrlKey) || !selectee.$element.hasClass("ui-selected");
                    selectee.$element
                        .removeClass(doSelect ? "ui-unselecting" : "ui-selected")
                        .addClass(doSelect ? "ui-selecting" : "ui-unselecting");
                    selectee.unselecting = !doSelect;
                    selectee.selecting = doSelect;
                    selectee.selected = doSelect;
                    // selectable (UN)SELECTING callback
                    if (doSelect) {
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    } else {
                        that._trigger("unselecting", event, {
                            unselecting: selectee.element
                        });
                    }
                    return false;
                }
            });

        },

        _mouseDrag: function(event) {

            this.dragged = true;

            if (this.options.disabled) {
                return;
            }

            var tmp,
                that = this,
                options = this.options,
                x1 = this.opos[0],
                y1 = this.opos[1],
                x2 = event.pageX,
                y2 = event.pageY;

            if (x1 > x2) { tmp = x2; x2 = x1; x1 = tmp; }
            if (y1 > y2) { tmp = y2; y2 = y1; y1 = tmp; }
            this.helper.css({ left: x1, top: y1, width: x2 - x1, height: y2 - y1 });

            this.selectees.each(function() {
                var selectee = $.data(this, "selectable-item"),
                    hit = false;

                //prevent helper from being selected if appendTo: selectable
                if (!selectee || selectee.element === that.element[0]) {
                    return;
                }

                if (options.tolerance === "touch") {
                    hit = ( !(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1) );
                } else if (options.tolerance === "fit") {
                    hit = (selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2);
                }

                if (hit) {
                    // SELECT
                    if (selectee.selected) {
                        selectee.$element.removeClass("ui-selected");
                        selectee.selected = false;
                    }
                    if (selectee.unselecting) {
                        selectee.$element.removeClass("ui-unselecting");
                        selectee.unselecting = false;
                    }
                    if (!selectee.selecting) {
                        selectee.$element.addClass("ui-selecting");
                        selectee.selecting = true;
                        // selectable SELECTING callback
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    }
                } else {
                    // UNSELECT
                    if (selectee.selecting) {
                        if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
                            selectee.$element.removeClass("ui-selecting");
                            selectee.selecting = false;
                            selectee.$element.addClass("ui-selected");
                            selectee.selected = true;
                        } else {
                            selectee.$element.removeClass("ui-selecting");
                            selectee.selecting = false;
                            if (selectee.startselected) {
                                selectee.$element.addClass("ui-unselecting");
                                selectee.unselecting = true;
                            }
                            // selectable UNSELECTING callback
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                    if (selectee.selected) {
                        if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
                            selectee.$element.removeClass("ui-selected");
                            selectee.selected = false;

                            selectee.$element.addClass("ui-unselecting");
                            selectee.unselecting = true;
                            // selectable UNSELECTING callback
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                }
            });

            return false;
        },

        _mouseStop: function(event) {
            var that = this;

            this.dragged = false;

            $(".ui-unselecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.$element.removeClass("ui-unselecting");
                selectee.unselecting = false;
                selectee.startselected = false;
                that._trigger("unselected", event, {
                    unselected: selectee.element
                });
            });
            $(".ui-selecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.$element.removeClass("ui-selecting").addClass("ui-selected");
                selectee.selecting = false;
                selectee.selected = true;
                selectee.startselected = true;
                that._trigger("selected", event, {
                    selected: selectee.element
                });
            });
            this._trigger("stop", event);

            this.helper.remove();

            return false;
        }

    });


    /*!
     * jQuery UI Selectmenu 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/selectmenu
     */


    var selectmenu = $.widget( "ui.selectmenu", {
        version: "1.11.4",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: null,

            // callbacks
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },

        _create: function() {
            var selectmenuId = this.element.uniqueId().attr( "id" );
            this.ids = {
                element: selectmenuId,
                button: selectmenuId + "-button",
                menu: selectmenuId + "-menu"
            };

            this._drawButton();
            this._drawMenu();

            if ( this.options.disabled ) {
                this.disable();
            }
        },

        _drawButton: function() {
            var that = this;

            // Associate existing label with the new button
            this.label = $( "label[for='" + this.ids.element + "']" ).attr( "for", this.ids.button );
            this._on( this.label, {
                click: function( event ) {
                    this.button.focus();
                    event.preventDefault();
                }
            });

            // Hide original select element
            this.element.hide();

            // Create button
            this.button = $( "<span>", {
                "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true"
            })
                .insertAfter( this.element );

            $( "<span>", {
                "class": "ui-icon " + this.options.icons.button
            })
                .prependTo( this.button );

            this.buttonText = $( "<span>", {
                "class": "ui-selectmenu-text"
            })
                .appendTo( this.button );

            this._setText( this.buttonText, this.element.find( "option:selected" ).text() );
            this._resizeButton();

            this._on( this.button, this._buttonEvents );
            this.button.one( "focusin", function() {

                // Delay rendering the menu items until the button receives focus.
                // The menu may have already been rendered via a programmatic open.
                if ( !that.menuItems ) {
                    that._refreshMenu();
                }
            });
            this._hoverable( this.button );
            this._focusable( this.button );
        },

        _drawMenu: function() {
            var that = this;

            // Create menu
            this.menu = $( "<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });

            // Wrap menu
            this.menuWrap = $( "<div>", {
                "class": "ui-selectmenu-menu ui-front"
            })
                .append( this.menu )
                .appendTo( this._appendTo() );

            // Initialize menu widget
            this.menuInstance = this.menu
                .menu({
                    role: "listbox",
                    select: function( event, ui ) {
                        event.preventDefault();

                        // support: IE8
                        // If the item was selected via a click, the text selection
                        // will be destroyed in IE
                        that._setSelection();

                        that._select( ui.item.data( "ui-selectmenu-item" ), event );
                    },
                    focus: function( event, ui ) {
                        var item = ui.item.data( "ui-selectmenu-item" );

                        // Prevent inital focus from firing and check if its a newly focused item
                        if ( that.focusIndex != null && item.index !== that.focusIndex ) {
                            that._trigger( "focus", event, { item: item } );
                            if ( !that.isOpen ) {
                                that._select( item, event );
                            }
                        }
                        that.focusIndex = item.index;

                        that.button.attr( "aria-activedescendant",
                            that.menuItems.eq( item.index ).attr( "id" ) );
                    }
                })
                .menu( "instance" );

            // Adjust menu styles to dropdown
            this.menu
                .addClass( "ui-corner-bottom" )
                .removeClass( "ui-corner-all" );

            // Don't close the menu on mouseleave
            this.menuInstance._off( this.menu, "mouseleave" );

            // Cancel the menu's collapseAll on document click
            this.menuInstance._closeOnDocumentClick = function() {
                return false;
            };

            // Selects often contain empty items, but never contain dividers
            this.menuInstance._isDivider = function() {
                return false;
            };
        },

        refresh: function() {
            this._refreshMenu();
            this._setText( this.buttonText, this._getSelectedItem().text() );
            if ( !this.options.width ) {
                this._resizeButton();
            }
        },

        _refreshMenu: function() {
            this.menu.empty();

            var item,
                options = this.element.find( "option" );

            if ( !options.length ) {
                return;
            }

            this._parseOptions( options );
            this._renderMenu( this.menu, this.items );

            this.menuInstance.refresh();
            this.menuItems = this.menu.find( "li" ).not( ".ui-selectmenu-optgroup" );

            item = this._getSelectedItem();

            // Update the menu to have the correct item focused
            this.menuInstance.focus( null, item );
            this._setAria( item.data( "ui-selectmenu-item" ) );

            // Set disabled state
            this._setOption( "disabled", this.element.prop( "disabled" ) );
        },

        open: function( event ) {
            if ( this.options.disabled ) {
                return;
            }

            // If this is the first time the menu is being opened, render the items
            if ( !this.menuItems ) {
                this._refreshMenu();
            } else {

                // Menu clears focus on close, reset focus to selected item
                this.menu.find( ".ui-state-focus" ).removeClass( "ui-state-focus" );
                this.menuInstance.focus( null, this._getSelectedItem() );
            }

            this.isOpen = true;
            this._toggleAttr();
            this._resizeMenu();
            this._position();

            this._on( this.document, this._documentClick );

            this._trigger( "open", event );
        },

        _position: function() {
            this.menuWrap.position( $.extend( { of: this.button }, this.options.position ) );
        },

        close: function( event ) {
            if ( !this.isOpen ) {
                return;
            }

            this.isOpen = false;
            this._toggleAttr();

            this.range = null;
            this._off( this.document );

            this._trigger( "close", event );
        },

        widget: function() {
            return this.button;
        },

        menuWidget: function() {
            return this.menu;
        },

        _renderMenu: function( ul, items ) {
            var that = this,
                currentOptgroup = "";

            $.each( items, function( index, item ) {
                if ( item.optgroup !== currentOptgroup ) {
                    $( "<li>", {
                        "class": "ui-selectmenu-optgroup ui-menu-divider" +
                        ( item.element.parent( "optgroup" ).prop( "disabled" ) ?
                            " ui-state-disabled" :
                            "" ),
                        text: item.optgroup
                    })
                        .appendTo( ul );

                    currentOptgroup = item.optgroup;
                }

                that._renderItemData( ul, item );
            });
        },

        _renderItemData: function( ul, item ) {
            return this._renderItem( ul, item ).data( "ui-selectmenu-item", item );
        },

        _renderItem: function( ul, item ) {
            var li = $( "<li>" );

            if ( item.disabled ) {
                li.addClass( "ui-state-disabled" );
            }
            this._setText( li, item.label );

            return li.appendTo( ul );
        },

        _setText: function( element, value ) {
            if ( value ) {
                element.text( value );
            } else {
                element.html( "&#160;" );
            }
        },

        _move: function( direction, event ) {
            var item, next,
                filter = ".ui-menu-item";

            if ( this.isOpen ) {
                item = this.menuItems.eq( this.focusIndex );
            } else {
                item = this.menuItems.eq( this.element[ 0 ].selectedIndex );
                filter += ":not(.ui-state-disabled)";
            }

            if ( direction === "first" || direction === "last" ) {
                next = item[ direction === "first" ? "prevAll" : "nextAll" ]( filter ).eq( -1 );
            } else {
                next = item[ direction + "All" ]( filter ).eq( 0 );
            }

            if ( next.length ) {
                this.menuInstance.focus( event, next );
            }
        },

        _getSelectedItem: function() {
            return this.menuItems.eq( this.element[ 0 ].selectedIndex );
        },

        _toggle: function( event ) {
            this[ this.isOpen ? "close" : "open" ]( event );
        },

        _setSelection: function() {
            var selection;

            if ( !this.range ) {
                return;
            }

            if ( window.getSelection ) {
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange( this.range );

                // support: IE8
            } else {
                this.range.select();
            }

            // support: IE
            // Setting the text selection kills the button focus in IE, but
            // restoring the focus doesn't kill the selection.
            this.button.focus();
        },

        _documentClick: {
            mousedown: function( event ) {
                if ( !this.isOpen ) {
                    return;
                }

                if ( !$( event.target ).closest( ".ui-selectmenu-menu, #" + this.ids.button ).length ) {
                    this.close( event );
                }
            }
        },

        _buttonEvents: {

            // Prevent text selection from being reset when interacting with the selectmenu (#10144)
            mousedown: function() {
                var selection;

                if ( window.getSelection ) {
                    selection = window.getSelection();
                    if ( selection.rangeCount ) {
                        this.range = selection.getRangeAt( 0 );
                    }

                    // support: IE8
                } else {
                    this.range = document.selection.createRange();
                }
            },

            click: function( event ) {
                this._setSelection();
                this._toggle( event );
            },

            keydown: function( event ) {
                var preventDefault = true;
                switch ( event.keyCode ) {
                    case $.ui.keyCode.TAB:
                    case $.ui.keyCode.ESCAPE:
                        this.close( event );
                        preventDefault = false;
                        break;
                    case $.ui.keyCode.ENTER:
                        if ( this.isOpen ) {
                            this._selectFocusedItem( event );
                        }
                        break;
                    case $.ui.keyCode.UP:
                        if ( event.altKey ) {
                            this._toggle( event );
                        } else {
                            this._move( "prev", event );
                        }
                        break;
                    case $.ui.keyCode.DOWN:
                        if ( event.altKey ) {
                            this._toggle( event );
                        } else {
                            this._move( "next", event );
                        }
                        break;
                    case $.ui.keyCode.SPACE:
                        if ( this.isOpen ) {
                            this._selectFocusedItem( event );
                        } else {
                            this._toggle( event );
                        }
                        break;
                    case $.ui.keyCode.LEFT:
                        this._move( "prev", event );
                        break;
                    case $.ui.keyCode.RIGHT:
                        this._move( "next", event );
                        break;
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.PAGE_UP:
                        this._move( "first", event );
                        break;
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_DOWN:
                        this._move( "last", event );
                        break;
                    default:
                        this.menu.trigger( event );
                        preventDefault = false;
                }

                if ( preventDefault ) {
                    event.preventDefault();
                }
            }
        },

        _selectFocusedItem: function( event ) {
            var item = this.menuItems.eq( this.focusIndex );
            if ( !item.hasClass( "ui-state-disabled" ) ) {
                this._select( item.data( "ui-selectmenu-item" ), event );
            }
        },

        _select: function( item, event ) {
            var oldIndex = this.element[ 0 ].selectedIndex;

            // Change native select element
            this.element[ 0 ].selectedIndex = item.index;
            this._setText( this.buttonText, item.label );
            this._setAria( item );
            this._trigger( "select", event, { item: item } );

            if ( item.index !== oldIndex ) {
                this._trigger( "change", event, { item: item } );
            }

            this.close( event );
        },

        _setAria: function( item ) {
            var id = this.menuItems.eq( item.index ).attr( "id" );

            this.button.attr({
                "aria-labelledby": id,
                "aria-activedescendant": id
            });
            this.menu.attr( "aria-activedescendant", id );
        },

        _setOption: function( key, value ) {
            if ( key === "icons" ) {
                this.button.find( "span.ui-icon" )
                    .removeClass( this.options.icons.button )
                    .addClass( value.button );
            }

            this._super( key, value );

            if ( key === "appendTo" ) {
                this.menuWrap.appendTo( this._appendTo() );
            }

            if ( key === "disabled" ) {
                this.menuInstance.option( "disabled", value );
                this.button
                    .toggleClass( "ui-state-disabled", value )
                    .attr( "aria-disabled", value );

                this.element.prop( "disabled", value );
                if ( value ) {
                    this.button.attr( "tabindex", -1 );
                    this.close();
                } else {
                    this.button.attr( "tabindex", 0 );
                }
            }

            if ( key === "width" ) {
                this._resizeButton();
            }
        },

        _appendTo: function() {
            var element = this.options.appendTo;

            if ( element ) {
                element = element.jquery || element.nodeType ?
                    $( element ) :
                    this.document.find( element ).eq( 0 );
            }

            if ( !element || !element[ 0 ] ) {
                element = this.element.closest( ".ui-front" );
            }

            if ( !element.length ) {
                element = this.document[ 0 ].body;
            }

            return element;
        },

        _toggleAttr: function() {
            this.button
                .toggleClass( "ui-corner-top", this.isOpen )
                .toggleClass( "ui-corner-all", !this.isOpen )
                .attr( "aria-expanded", this.isOpen );
            this.menuWrap.toggleClass( "ui-selectmenu-open", this.isOpen );
            this.menu.attr( "aria-hidden", !this.isOpen );
        },

        _resizeButton: function() {
            var width = this.options.width;

            if ( !width ) {
                width = this.element.show().outerWidth();
                this.element.hide();
            }

            this.button.outerWidth( width );
        },

        _resizeMenu: function() {
            this.menu.outerWidth( Math.max(
                this.button.outerWidth(),

                // support: IE10
                // IE10 wraps long text (possibly a rounding bug)
                // so we add 1px to avoid the wrapping
                this.menu.width( "" ).outerWidth() + 1
            ) );
        },

        _getCreateOptions: function() {
            return { disabled: this.element.prop( "disabled" ) };
        },

        _parseOptions: function( options ) {
            var data = [];
            options.each(function( index, item ) {
                var option = $( item ),
                    optgroup = option.parent( "optgroup" );
                data.push({
                    element: option,
                    index: index,
                    value: option.val(),
                    label: option.text(),
                    optgroup: optgroup.attr( "label" ) || "",
                    disabled: optgroup.prop( "disabled" ) || option.prop( "disabled" )
                });
            });
            this.items = data;
        },

        _destroy: function() {
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.label.attr( "for", this.ids.element );
        }
    });


    /*!
     * jQuery UI Slider 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/slider/
     */


    var slider = $.widget( "ui.slider", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",

        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null,

            // callbacks
            change: null,
            slide: null,
            start: null,
            stop: null
        },

        // number of pages in a slider
        // (how many times can you page up/down to go through the whole range)
        numPages: 5,

        _create: function() {
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();

            this.element
                .addClass( "ui-slider" +
                " ui-slider-" + this.orientation +
                " ui-widget" +
                " ui-widget-content" +
                " ui-corner-all");

            this._refresh();
            this._setOption( "disabled", this.options.disabled );

            this._animateOff = false;
        },

        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue();
        },

        _createHandles: function() {
            var i, handleCount,
                options = this.options,
                existingHandles = this.element.find( ".ui-slider-handle" ).addClass( "ui-state-default ui-corner-all" ),
                handle = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                handles = [];

            handleCount = ( options.values && options.values.length ) || 1;

            if ( existingHandles.length > handleCount ) {
                existingHandles.slice( handleCount ).remove();
                existingHandles = existingHandles.slice( 0, handleCount );
            }

            for ( i = existingHandles.length; i < handleCount; i++ ) {
                handles.push( handle );
            }

            this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

            this.handle = this.handles.eq( 0 );

            this.handles.each(function( i ) {
                $( this ).data( "ui-slider-handle-index", i );
            });
        },

        _createRange: function() {
            var options = this.options,
                classes = "";

            if ( options.range ) {
                if ( options.range === true ) {
                    if ( !options.values ) {
                        options.values = [ this._valueMin(), this._valueMin() ];
                    } else if ( options.values.length && options.values.length !== 2 ) {
                        options.values = [ options.values[0], options.values[0] ];
                    } else if ( $.isArray( options.values ) ) {
                        options.values = options.values.slice(0);
                    }
                }

                if ( !this.range || !this.range.length ) {
                    this.range = $( "<div></div>" )
                        .appendTo( this.element );

                    classes = "ui-slider-range" +
                        // note: this isn't the most fittingly semantic framework class for this element,
                        // but worked best visually with a variety of themes
                    " ui-widget-header ui-corner-all";
                } else {
                    this.range.removeClass( "ui-slider-range-min ui-slider-range-max" )
                        // Handle range switching from true to min/max
                        .css({
                            "left": "",
                            "bottom": ""
                        });
                }

                this.range.addClass( classes +
                ( ( options.range === "min" || options.range === "max" ) ? " ui-slider-range-" + options.range : "" ) );
            } else {
                if ( this.range ) {
                    this.range.remove();
                }
                this.range = null;
            }
        },

        _setupEvents: function() {
            this._off( this.handles );
            this._on( this.handles, this._handleEvents );
            this._hoverable( this.handles );
            this._focusable( this.handles );
        },

        _destroy: function() {
            this.handles.remove();
            if ( this.range ) {
                this.range.remove();
            }

            this.element
                .removeClass( "ui-slider" +
                " ui-slider-horizontal" +
                " ui-slider-vertical" +
                " ui-widget" +
                " ui-widget-content" +
                " ui-corner-all" );

            this._mouseDestroy();
        },

        _mouseCapture: function( event ) {
            var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
                that = this,
                o = this.options;

            if ( o.disabled ) {
                return false;
            }

            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();

            position = { x: event.pageX, y: event.pageY };
            normValue = this._normValueFromMouse( position );
            distance = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function( i ) {
                var thisDistance = Math.abs( normValue - that.values(i) );
                if (( distance > thisDistance ) ||
                    ( distance === thisDistance &&
                    (i === that._lastChangedValue || that.values(i) === o.min ))) {
                    distance = thisDistance;
                    closestHandle = $( this );
                    index = i;
                }
            });

            allowed = this._start( event, index );
            if ( allowed === false ) {
                return false;
            }
            this._mouseSliding = true;

            this._handleIndex = index;

            closestHandle
                .addClass( "ui-state-active" )
                .focus();

            offset = closestHandle.offset();
            mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider-handle" );
            this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
                left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
                top: event.pageY - offset.top -
                ( closestHandle.height() / 2 ) -
                ( parseInt( closestHandle.css("borderTopWidth"), 10 ) || 0 ) -
                ( parseInt( closestHandle.css("borderBottomWidth"), 10 ) || 0) +
                ( parseInt( closestHandle.css("marginTop"), 10 ) || 0)
            };

            if ( !this.handles.hasClass( "ui-state-hover" ) ) {
                this._slide( event, index, normValue );
            }
            this._animateOff = true;
            return true;
        },

        _mouseStart: function() {
            return true;
        },

        _mouseDrag: function( event ) {
            var position = { x: event.pageX, y: event.pageY },
                normValue = this._normValueFromMouse( position );

            this._slide( event, this._handleIndex, normValue );

            return false;
        },

        _mouseStop: function( event ) {
            this.handles.removeClass( "ui-state-active" );
            this._mouseSliding = false;

            this._stop( event, this._handleIndex );
            this._change( event, this._handleIndex );

            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;

            return false;
        },

        _detectOrientation: function() {
            this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
        },

        _normValueFromMouse: function( position ) {
            var pixelTotal,
                pixelMouse,
                percentMouse,
                valueTotal,
                valueMouse;

            if ( this.orientation === "horizontal" ) {
                pixelTotal = this.elementSize.width;
                pixelMouse = position.x - this.elementOffset.left - ( this._clickOffset ? this._clickOffset.left : 0 );
            } else {
                pixelTotal = this.elementSize.height;
                pixelMouse = position.y - this.elementOffset.top - ( this._clickOffset ? this._clickOffset.top : 0 );
            }

            percentMouse = ( pixelMouse / pixelTotal );
            if ( percentMouse > 1 ) {
                percentMouse = 1;
            }
            if ( percentMouse < 0 ) {
                percentMouse = 0;
            }
            if ( this.orientation === "vertical" ) {
                percentMouse = 1 - percentMouse;
            }

            valueTotal = this._valueMax() - this._valueMin();
            valueMouse = this._valueMin() + percentMouse * valueTotal;

            return this._trimAlignValue( valueMouse );
        },

        _start: function( event, index ) {
            var uiHash = {
                handle: this.handles[ index ],
                value: this.value()
            };
            if ( this.options.values && this.options.values.length ) {
                uiHash.value = this.values( index );
                uiHash.values = this.values();
            }
            return this._trigger( "start", event, uiHash );
        },

        _slide: function( event, index, newVal ) {
            var otherVal,
                newValues,
                allowed;

            if ( this.options.values && this.options.values.length ) {
                otherVal = this.values( index ? 0 : 1 );

                if ( ( this.options.values.length === 2 && this.options.range === true ) &&
                    ( ( index === 0 && newVal > otherVal) || ( index === 1 && newVal < otherVal ) )
                ) {
                    newVal = otherVal;
                }

                if ( newVal !== this.values( index ) ) {
                    newValues = this.values();
                    newValues[ index ] = newVal;
                    // A slide can be canceled by returning false from the slide callback
                    allowed = this._trigger( "slide", event, {
                        handle: this.handles[ index ],
                        value: newVal,
                        values: newValues
                    } );
                    otherVal = this.values( index ? 0 : 1 );
                    if ( allowed !== false ) {
                        this.values( index, newVal );
                    }
                }
            } else {
                if ( newVal !== this.value() ) {
                    // A slide can be canceled by returning false from the slide callback
                    allowed = this._trigger( "slide", event, {
                        handle: this.handles[ index ],
                        value: newVal
                    } );
                    if ( allowed !== false ) {
                        this.value( newVal );
                    }
                }
            }
        },

        _stop: function( event, index ) {
            var uiHash = {
                handle: this.handles[ index ],
                value: this.value()
            };
            if ( this.options.values && this.options.values.length ) {
                uiHash.value = this.values( index );
                uiHash.values = this.values();
            }

            this._trigger( "stop", event, uiHash );
        },

        _change: function( event, index ) {
            if ( !this._keySliding && !this._mouseSliding ) {
                var uiHash = {
                    handle: this.handles[ index ],
                    value: this.value()
                };
                if ( this.options.values && this.options.values.length ) {
                    uiHash.value = this.values( index );
                    uiHash.values = this.values();
                }

                //store the last changed value index for reference when handles overlap
                this._lastChangedValue = index;

                this._trigger( "change", event, uiHash );
            }
        },

        value: function( newValue ) {
            if ( arguments.length ) {
                this.options.value = this._trimAlignValue( newValue );
                this._refreshValue();
                this._change( null, 0 );
                return;
            }

            return this._value();
        },

        values: function( index, newValue ) {
            var vals,
                newValues,
                i;

            if ( arguments.length > 1 ) {
                this.options.values[ index ] = this._trimAlignValue( newValue );
                this._refreshValue();
                this._change( null, index );
                return;
            }

            if ( arguments.length ) {
                if ( $.isArray( arguments[ 0 ] ) ) {
                    vals = this.options.values;
                    newValues = arguments[ 0 ];
                    for ( i = 0; i < vals.length; i += 1 ) {
                        vals[ i ] = this._trimAlignValue( newValues[ i ] );
                        this._change( null, i );
                    }
                    this._refreshValue();
                } else {
                    if ( this.options.values && this.options.values.length ) {
                        return this._values( index );
                    } else {
                        return this.value();
                    }
                }
            } else {
                return this._values();
            }
        },

        _setOption: function( key, value ) {
            var i,
                valsLength = 0;

            if ( key === "range" && this.options.range === true ) {
                if ( value === "min" ) {
                    this.options.value = this._values( 0 );
                    this.options.values = null;
                } else if ( value === "max" ) {
                    this.options.value = this._values( this.options.values.length - 1 );
                    this.options.values = null;
                }
            }

            if ( $.isArray( this.options.values ) ) {
                valsLength = this.options.values.length;
            }

            if ( key === "disabled" ) {
                this.element.toggleClass( "ui-state-disabled", !!value );
            }

            this._super( key, value );

            switch ( key ) {
                case "orientation":
                    this._detectOrientation();
                    this.element
                        .removeClass( "ui-slider-horizontal ui-slider-vertical" )
                        .addClass( "ui-slider-" + this.orientation );
                    this._refreshValue();

                    // Reset positioning from previous orientation
                    this.handles.css( value === "horizontal" ? "bottom" : "left", "" );
                    break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change( null, 0 );
                    this._animateOff = false;
                    break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue();
                    for ( i = 0; i < valsLength; i += 1 ) {
                        this._change( null, i );
                    }
                    this._animateOff = false;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = true;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = false;
                    break;
                case "range":
                    this._animateOff = true;
                    this._refresh();
                    this._animateOff = false;
                    break;
            }
        },

        //internal value getter
        // _value() returns value trimmed by min and max, aligned by step
        _value: function() {
            var val = this.options.value;
            val = this._trimAlignValue( val );

            return val;
        },

        //internal values getter
        // _values() returns array of values trimmed by min and max, aligned by step
        // _values( index ) returns single value trimmed by min and max, aligned by step
        _values: function( index ) {
            var val,
                vals,
                i;

            if ( arguments.length ) {
                val = this.options.values[ index ];
                val = this._trimAlignValue( val );

                return val;
            } else if ( this.options.values && this.options.values.length ) {
                // .slice() creates a copy of the array
                // this copy gets trimmed by min and max and then returned
                vals = this.options.values.slice();
                for ( i = 0; i < vals.length; i += 1) {
                    vals[ i ] = this._trimAlignValue( vals[ i ] );
                }

                return vals;
            } else {
                return [];
            }
        },

        // returns the step-aligned value that val is closest to, between (inclusive) min and max
        _trimAlignValue: function( val ) {
            if ( val <= this._valueMin() ) {
                return this._valueMin();
            }
            if ( val >= this._valueMax() ) {
                return this._valueMax();
            }
            var step = ( this.options.step > 0 ) ? this.options.step : 1,
                valModStep = (val - this._valueMin()) % step,
                alignValue = val - valModStep;

            if ( Math.abs(valModStep) * 2 >= step ) {
                alignValue += ( valModStep > 0 ) ? step : ( -step );
            }

            // Since JavaScript has problems with large floats, round
            // the final value to 5 digits after the decimal point (see #4124)
            return parseFloat( alignValue.toFixed(5) );
        },

        _calculateNewMax: function() {
            var max = this.options.max,
                min = this._valueMin(),
                step = this.options.step,
                aboveMin = Math.floor( ( +( max - min ).toFixed( this._precision() ) ) / step ) * step;
            max = aboveMin + min;
            this.max = parseFloat( max.toFixed( this._precision() ) );
        },

        _precision: function() {
            var precision = this._precisionOf( this.options.step );
            if ( this.options.min !== null ) {
                precision = Math.max( precision, this._precisionOf( this.options.min ) );
            }
            return precision;
        },

        _precisionOf: function( num ) {
            var str = num.toString(),
                decimal = str.indexOf( "." );
            return decimal === -1 ? 0 : str.length - decimal - 1;
        },

        _valueMin: function() {
            return this.options.min;
        },

        _valueMax: function() {
            return this.max;
        },

        _refreshValue: function() {
            var lastValPercent, valPercent, value, valueMin, valueMax,
                oRange = this.options.range,
                o = this.options,
                that = this,
                animate = ( !this._animateOff ) ? o.animate : false,
                _set = {};

            if ( this.options.values && this.options.values.length ) {
                this.handles.each(function( i ) {
                    valPercent = ( that.values(i) - that._valueMin() ) / ( that._valueMax() - that._valueMin() ) * 100;
                    _set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
                    $( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
                    if ( that.options.range === true ) {
                        if ( that.orientation === "horizontal" ) {
                            if ( i === 0 ) {
                                that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { left: valPercent + "%" }, o.animate );
                            }
                            if ( i === 1 ) {
                                that.range[ animate ? "animate" : "css" ]( { width: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
                            }
                        } else {
                            if ( i === 0 ) {
                                that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { bottom: ( valPercent ) + "%" }, o.animate );
                            }
                            if ( i === 1 ) {
                                that.range[ animate ? "animate" : "css" ]( { height: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
                            }
                        }
                    }
                    lastValPercent = valPercent;
                });
            } else {
                value = this.value();
                valueMin = this._valueMin();
                valueMax = this._valueMax();
                valPercent = ( valueMax !== valueMin ) ?
                ( value - valueMin ) / ( valueMax - valueMin ) * 100 :
                    0;
                _set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
                this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

                if ( oRange === "min" && this.orientation === "horizontal" ) {
                    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { width: valPercent + "%" }, o.animate );
                }
                if ( oRange === "max" && this.orientation === "horizontal" ) {
                    this.range[ animate ? "animate" : "css" ]( { width: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
                }
                if ( oRange === "min" && this.orientation === "vertical" ) {
                    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { height: valPercent + "%" }, o.animate );
                }
                if ( oRange === "max" && this.orientation === "vertical" ) {
                    this.range[ animate ? "animate" : "css" ]( { height: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
                }
            }
        },

        _handleEvents: {
            keydown: function( event ) {
                var allowed, curVal, newVal, step,
                    index = $( event.target ).data( "ui-slider-handle-index" );

                switch ( event.keyCode ) {
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_UP:
                    case $.ui.keyCode.PAGE_DOWN:
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        event.preventDefault();
                        if ( !this._keySliding ) {
                            this._keySliding = true;
                            $( event.target ).addClass( "ui-state-active" );
                            allowed = this._start( event, index );
                            if ( allowed === false ) {
                                return;
                            }
                        }
                        break;
                }

                step = this.options.step;
                if ( this.options.values && this.options.values.length ) {
                    curVal = newVal = this.values( index );
                } else {
                    curVal = newVal = this.value();
                }

                switch ( event.keyCode ) {
                    case $.ui.keyCode.HOME:
                        newVal = this._valueMin();
                        break;
                    case $.ui.keyCode.END:
                        newVal = this._valueMax();
                        break;
                    case $.ui.keyCode.PAGE_UP:
                        newVal = this._trimAlignValue(
                            curVal + ( ( this._valueMax() - this._valueMin() ) / this.numPages )
                        );
                        break;
                    case $.ui.keyCode.PAGE_DOWN:
                        newVal = this._trimAlignValue(
                            curVal - ( (this._valueMax() - this._valueMin()) / this.numPages ) );
                        break;
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                        if ( curVal === this._valueMax() ) {
                            return;
                        }
                        newVal = this._trimAlignValue( curVal + step );
                        break;
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        if ( curVal === this._valueMin() ) {
                            return;
                        }
                        newVal = this._trimAlignValue( curVal - step );
                        break;
                }

                this._slide( event, index, newVal );
            },
            keyup: function( event ) {
                var index = $( event.target ).data( "ui-slider-handle-index" );

                if ( this._keySliding ) {
                    this._keySliding = false;
                    this._stop( event, index );
                    this._change( event, index );
                    $( event.target ).removeClass( "ui-state-active" );
                }
            }
        }
    });


    /*!
     * jQuery UI Sortable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/sortable/
     */


    var sortable = $.widget("ui.sortable", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000,

            // callbacks
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },

        _isOverAxis: function( x, reference, size ) {
            return ( x >= reference ) && ( x < ( reference + size ) );
        },

        _isFloating: function( item ) {
            return (/left|right/).test(item.css("float")) || (/inline|table-cell/).test(item.css("display"));
        },

        _create: function() {
            this.containerCache = {};
            this.element.addClass("ui-sortable");

            //Get the items
            this.refresh();

            //Let's determine the parent's offset
            this.offset = this.element.offset();

            //Initialize mouse events for interaction
            this._mouseInit();

            this._setHandleClassName();

            //We're ready to go
            this.ready = true;

        },

        _setOption: function( key, value ) {
            this._super( key, value );

            if ( key === "handle" ) {
                this._setHandleClassName();
            }
        },

        _setHandleClassName: function() {
            this.element.find( ".ui-sortable-handle" ).removeClass( "ui-sortable-handle" );
            $.each( this.items, function() {
                ( this.instance.options.handle ?
                    this.item.find( this.instance.options.handle ) : this.item )
                    .addClass( "ui-sortable-handle" );
            });
        },

        _destroy: function() {
            this.element
                .removeClass( "ui-sortable ui-sortable-disabled" )
                .find( ".ui-sortable-handle" )
                .removeClass( "ui-sortable-handle" );
            this._mouseDestroy();

            for ( var i = this.items.length - 1; i >= 0; i-- ) {
                this.items[i].item.removeData(this.widgetName + "-item");
            }

            return this;
        },

        _mouseCapture: function(event, overrideHandle) {
            var currentItem = null,
                validHandle = false,
                that = this;

            if (this.reverting) {
                return false;
            }

            if(this.options.disabled || this.options.type === "static") {
                return false;
            }

            //We have to refresh the items data once first
            this._refreshItems(event);

            //Find out if the clicked node (or one of its parents) is a actual item in this.items
            $(event.target).parents().each(function() {
                if($.data(this, that.widgetName + "-item") === that) {
                    currentItem = $(this);
                    return false;
                }
            });
            if($.data(event.target, that.widgetName + "-item") === that) {
                currentItem = $(event.target);
            }

            if(!currentItem) {
                return false;
            }
            if(this.options.handle && !overrideHandle) {
                $(this.options.handle, currentItem).find("*").addBack().each(function() {
                    if(this === event.target) {
                        validHandle = true;
                    }
                });
                if(!validHandle) {
                    return false;
                }
            }

            this.currentItem = currentItem;
            this._removeCurrentsFromItems();
            return true;

        },

        _mouseStart: function(event, overrideHandle, noActivation) {

            var i, body,
                o = this.options;

            this.currentContainer = this;

            //We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
            this.refreshPositions();

            //Create and append the visible helper
            this.helper = this._createHelper(event);

            //Cache the helper size
            this._cacheHelperProportions();

            /*
             * - Position generation -
             * This block generates everything position related - it's the core of draggables.
             */

            //Cache the margins of the original element
            this._cacheMargins();

            //Get the next scrolling parent
            this.scrollParent = this.helper.scrollParent();

            //The element's absolute position on the page minus margins
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };

            $.extend(this.offset, {
                click: { //Where the click happened, relative to the element
                    left: event.pageX - this.offset.left,
                    top: event.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
            });

            // Only after we got the offset, we can change the helper's position to absolute
            // TODO: Still need to figure out a way to make relative sorting possible
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");

            //Generate the original position
            this.originalPosition = this._generatePosition(event);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
            (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

            //Cache the former DOM position
            this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] };

            //If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
            if(this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide();
            }

            //Create the placeholder
            this._createPlaceholder();

            //Set a containment if given in the options
            if(o.containment) {
                this._setContainment();
            }

            if( o.cursor && o.cursor !== "auto" ) { // cursor option
                body = this.document.find( "body" );

                // support: IE
                this.storedCursor = body.css( "cursor" );
                body.css( "cursor", o.cursor );

                this.storedStylesheet = $( "<style>*{ cursor: "+o.cursor+" !important; }</style>" ).appendTo( body );
            }

            if(o.opacity) { // opacity option
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity");
                }
                this.helper.css("opacity", o.opacity);
            }

            if(o.zIndex) { // zIndex option
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex");
                }
                this.helper.css("zIndex", o.zIndex);
            }

            //Prepare scrolling
            if(this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
                this.overflowOffset = this.scrollParent.offset();
            }

            //Call callbacks
            this._trigger("start", event, this._uiHash());

            //Recache the helper size
            if(!this._preserveHelperProportions) {
                this._cacheHelperProportions();
            }


            //Post "activate" events to possible containers
            if( !noActivation ) {
                for ( i = this.containers.length - 1; i >= 0; i-- ) {
                    this.containers[ i ]._trigger( "activate", event, this._uiHash( this ) );
                }
            }

            //Prepare possible droppables
            if($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }

            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }

            this.dragging = true;

            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(event); //Execute the drag once - this causes the helper not to be visible before getting its correct position
            return true;

        },

        _mouseDrag: function(event) {
            var i, item, itemElement, intersection,
                o = this.options,
                scrolled = false;

            //Compute the helpers position
            this.position = this._generatePosition(event);
            this.positionAbs = this._convertPositionTo("absolute");

            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs;
            }

            //Do scrolling
            if(this.options.scroll) {
                if(this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {

                    if((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
                    } else if(event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
                    }

                    if((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
                    } else if(event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
                    }

                } else {

                    if(event.pageY - this.document.scrollTop() < o.scrollSensitivity) {
                        scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
                    } else if(this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity) {
                        scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
                    }

                    if(event.pageX - this.document.scrollLeft() < o.scrollSensitivity) {
                        scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed);
                    } else if(this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity) {
                        scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed);
                    }

                }

                if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                    $.ui.ddmanager.prepareOffsets(this, event);
                }
            }

            //Regenerate the absolute position used for position checks
            this.positionAbs = this._convertPositionTo("absolute");

            //Set the helper position
            if(!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left+"px";
            }
            if(!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top+"px";
            }

            //Rearrange
            for (i = this.items.length - 1; i >= 0; i--) {

                //Cache variables and intersection, continue if no intersection
                item = this.items[i];
                itemElement = item.item[0];
                intersection = this._intersectsWithPointer(item);
                if (!intersection) {
                    continue;
                }

                // Only put the placeholder inside the current Container, skip all
                // items from other containers. This works because when moving
                // an item from one container to another the
                // currentContainer is switched before the placeholder is moved.
                //
                // Without this, moving items in "sub-sortables" can cause
                // the placeholder to jitter between the outer and inner container.
                if (item.instance !== this.currentContainer) {
                    continue;
                }

                // cannot intersect with itself
                // no useless actions that have been done before
                // no action if the item moved is the parent of the item checked
                if (itemElement !== this.currentItem[0] &&
                    this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement &&
                    !$.contains(this.placeholder[0], itemElement) &&
                    (this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)
                ) {

                    this.direction = intersection === 1 ? "down" : "up";

                    if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
                        this._rearrange(event, item);
                    } else {
                        break;
                    }

                    this._trigger("change", event, this._uiHash());
                    break;
                }
            }

            //Post events to containers
            this._contactContainers(event);

            //Interconnect with droppables
            if($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }

            //Call callbacks
            this._trigger("sort", event, this._uiHash());

            this.lastPositionAbs = this.positionAbs;
            return false;

        },

        _mouseStop: function(event, noPropagation) {

            if(!event) {
                return;
            }

            //If we are using droppables, inform the manager about the drop
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                $.ui.ddmanager.drop(this, event);
            }

            if(this.options.revert) {
                var that = this,
                    cur = this.placeholder.offset(),
                    axis = this.options.axis,
                    animation = {};

                if ( !axis || axis === "x" ) {
                    animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft);
                }
                if ( !axis || axis === "y" ) {
                    animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop);
                }
                this.reverting = true;
                $(this.helper).animate( animation, parseInt(this.options.revert, 10) || 500, function() {
                    that._clear(event);
                });
            } else {
                this._clear(event, noPropagation);
            }

            return false;

        },

        cancel: function() {

            if(this.dragging) {

                this._mouseUp({ target: null });

                if(this.options.helper === "original") {
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
                } else {
                    this.currentItem.show();
                }

                //Post deactivating events to containers
                for (var i = this.containers.length - 1; i >= 0; i--){
                    this.containers[i]._trigger("deactivate", null, this._uiHash(this));
                    if(this.containers[i].containerCache.over) {
                        this.containers[i]._trigger("out", null, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }

            }

            if (this.placeholder) {
                //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
                if(this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                }
                if(this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove();
                }

                $.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });

                if(this.domPosition.prev) {
                    $(this.domPosition.prev).after(this.currentItem);
                } else {
                    $(this.domPosition.parent).prepend(this.currentItem);
                }
            }

            return this;

        },

        serialize: function(o) {

            var items = this._getItemsAsjQuery(o && o.connected),
                str = [];
            o = o || {};

            $(items).each(function() {
                var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || (/(.+)[\-=_](.+)/));
                if (res) {
                    str.push((o.key || res[1]+"[]")+"="+(o.key && o.expression ? res[1] : res[2]));
                }
            });

            if(!str.length && o.key) {
                str.push(o.key + "=");
            }

            return str.join("&");

        },

        toArray: function(o) {

            var items = this._getItemsAsjQuery(o && o.connected),
                ret = [];

            o = o || {};

            items.each(function() { ret.push($(o.item || this).attr(o.attribute || "id") || ""); });
            return ret;

        },

        /* Be careful with the following core functions */
        _intersectsWith: function(item) {

            var x1 = this.positionAbs.left,
                x2 = x1 + this.helperProportions.width,
                y1 = this.positionAbs.top,
                y2 = y1 + this.helperProportions.height,
                l = item.left,
                r = l + item.width,
                t = item.top,
                b = t + item.height,
                dyClick = this.offset.click.top,
                dxClick = this.offset.click.left,
                isOverElementHeight = ( this.options.axis === "x" ) || ( ( y1 + dyClick ) > t && ( y1 + dyClick ) < b ),
                isOverElementWidth = ( this.options.axis === "y" ) || ( ( x1 + dxClick ) > l && ( x1 + dxClick ) < r ),
                isOverElement = isOverElementHeight && isOverElementWidth;

            if ( this.options.tolerance === "pointer" ||
                this.options.forcePointerForContainers ||
                (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"])
            ) {
                return isOverElement;
            } else {

                return (l < x1 + (this.helperProportions.width / 2) && // Right Half
                x2 - (this.helperProportions.width / 2) < r && // Left Half
                t < y1 + (this.helperProportions.height / 2) && // Bottom Half
                y2 - (this.helperProportions.height / 2) < b ); // Top Half

            }
        },

        _intersectsWithPointer: function(item) {

            var isOverElementHeight = (this.options.axis === "x") || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
                isOverElementWidth = (this.options.axis === "y") || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
                isOverElement = isOverElementHeight && isOverElementWidth,
                verticalDirection = this._getDragVerticalDirection(),
                horizontalDirection = this._getDragHorizontalDirection();

            if (!isOverElement) {
                return false;
            }

            return this.floating ?
                ( ((horizontalDirection && horizontalDirection === "right") || verticalDirection === "down") ? 2 : 1 )
                : ( verticalDirection && (verticalDirection === "down" ? 2 : 1) );

        },

        _intersectsWithSides: function(item) {

            var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height/2), item.height),
                isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width/2), item.width),
                verticalDirection = this._getDragVerticalDirection(),
                horizontalDirection = this._getDragHorizontalDirection();

            if (this.floating && horizontalDirection) {
                return ((horizontalDirection === "right" && isOverRightHalf) || (horizontalDirection === "left" && !isOverRightHalf));
            } else {
                return verticalDirection && ((verticalDirection === "down" && isOverBottomHalf) || (verticalDirection === "up" && !isOverBottomHalf));
            }

        },

        _getDragVerticalDirection: function() {
            var delta = this.positionAbs.top - this.lastPositionAbs.top;
            return delta !== 0 && (delta > 0 ? "down" : "up");
        },

        _getDragHorizontalDirection: function() {
            var delta = this.positionAbs.left - this.lastPositionAbs.left;
            return delta !== 0 && (delta > 0 ? "right" : "left");
        },

        refresh: function(event) {
            this._refreshItems(event);
            this._setHandleClassName();
            this.refreshPositions();
            return this;
        },

        _connectWith: function() {
            var options = this.options;
            return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith;
        },

        _getItemsAsjQuery: function(connected) {

            var i, j, cur, inst,
                items = [],
                queries = [],
                connectWith = this._connectWith();

            if(connectWith && connected) {
                for (i = connectWith.length - 1; i >= 0; i--){
                    cur = $(connectWith[i], this.document[0]);
                    for ( j = cur.length - 1; j >= 0; j--){
                        inst = $.data(cur[j], this.widgetFullName);
                        if(inst && inst !== this && !inst.options.disabled) {
                            queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
                        }
                    }
                }
            }

            queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

            function addItems() {
                items.push( this );
            }
            for (i = queries.length - 1; i >= 0; i--){
                queries[i][0].each( addItems );
            }

            return $(items);

        },

        _removeCurrentsFromItems: function() {

            var list = this.currentItem.find(":data(" + this.widgetName + "-item)");

            this.items = $.grep(this.items, function (item) {
                for (var j=0; j < list.length; j++) {
                    if(list[j] === item.item[0]) {
                        return false;
                    }
                }
                return true;
            });

        },

        _refreshItems: function(event) {

            this.items = [];
            this.containers = [this];

            var i, j, cur, inst, targetData, _queries, item, queriesLength,
                items = this.items,
                queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, { item: this.currentItem }) : $(this.options.items, this.element), this]],
                connectWith = this._connectWith();

            if(connectWith && this.ready) { //Shouldn't be run the first time through due to massive slow-down
                for (i = connectWith.length - 1; i >= 0; i--){
                    cur = $(connectWith[i], this.document[0]);
                    for (j = cur.length - 1; j >= 0; j--){
                        inst = $.data(cur[j], this.widgetFullName);
                        if(inst && inst !== this && !inst.options.disabled) {
                            queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, { item: this.currentItem }) : $(inst.options.items, inst.element), inst]);
                            this.containers.push(inst);
                        }
                    }
                }
            }

            for (i = queries.length - 1; i >= 0; i--) {
                targetData = queries[i][1];
                _queries = queries[i][0];

                for (j=0, queriesLength = _queries.length; j < queriesLength; j++) {
                    item = $(_queries[j]);

                    item.data(this.widgetName + "-item", targetData); // Data for target checking (mouse manager)

                    items.push({
                        item: item,
                        instance: targetData,
                        width: 0, height: 0,
                        left: 0, top: 0
                    });
                }
            }

        },

        refreshPositions: function(fast) {

            // Determine whether items are being displayed horizontally
            this.floating = this.items.length ?
            this.options.axis === "x" || this._isFloating( this.items[ 0 ].item ) :
                false;

            //This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
            if(this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset();
            }

            var i, item, t, p;

            for (i = this.items.length - 1; i >= 0; i--){
                item = this.items[i];

                //We ignore calculating positions of all connected containers when we're not over them
                if(item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
                    continue;
                }

                t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

                if (!fast) {
                    item.width = t.outerWidth();
                    item.height = t.outerHeight();
                }

                p = t.offset();
                item.left = p.left;
                item.top = p.top;
            }

            if(this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this);
            } else {
                for (i = this.containers.length - 1; i >= 0; i--){
                    p = this.containers[i].element.offset();
                    this.containers[i].containerCache.left = p.left;
                    this.containers[i].containerCache.top = p.top;
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                }
            }

            return this;
        },

        _createPlaceholder: function(that) {
            that = that || this;
            var className,
                o = that.options;

            if(!o.placeholder || o.placeholder.constructor === String) {
                className = o.placeholder;
                o.placeholder = {
                    element: function() {

                        var nodeName = that.currentItem[0].nodeName.toLowerCase(),
                            element = $( "<" + nodeName + ">", that.document[0] )
                                .addClass(className || that.currentItem[0].className+" ui-sortable-placeholder")
                                .removeClass("ui-sortable-helper");

                        if ( nodeName === "tbody" ) {
                            that._createTrPlaceholder(
                                that.currentItem.find( "tr" ).eq( 0 ),
                                $( "<tr>", that.document[ 0 ] ).appendTo( element )
                            );
                        } else if ( nodeName === "tr" ) {
                            that._createTrPlaceholder( that.currentItem, element );
                        } else if ( nodeName === "img" ) {
                            element.attr( "src", that.currentItem.attr( "src" ) );
                        }

                        if ( !className ) {
                            element.css( "visibility", "hidden" );
                        }

                        return element;
                    },
                    update: function(container, p) {

                        // 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
                        // 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
                        if(className && !o.forcePlaceholderSize) {
                            return;
                        }

                        //If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
                        if(!p.height()) { p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop")||0, 10) - parseInt(that.currentItem.css("paddingBottom")||0, 10)); }
                        if(!p.width()) { p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft")||0, 10) - parseInt(that.currentItem.css("paddingRight")||0, 10)); }
                    }
                };
            }

            //Create the placeholder
            that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));

            //Append it after the actual current item
            that.currentItem.after(that.placeholder);

            //Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
            o.placeholder.update(that, that.placeholder);

        },

        _createTrPlaceholder: function( sourceTr, targetTr ) {
            var that = this;

            sourceTr.children().each(function() {
                $( "<td>&#160;</td>", that.document[ 0 ] )
                    .attr( "colspan", $( this ).attr( "colspan" ) || 1 )
                    .appendTo( targetTr );
            });
        },

        _contactContainers: function(event) {
            var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom, floating, axis,
                innermostContainer = null,
                innermostIndex = null;

            // get innermost container that intersects with item
            for (i = this.containers.length - 1; i >= 0; i--) {

                // never consider a container that's located within the item itself
                if($.contains(this.currentItem[0], this.containers[i].element[0])) {
                    continue;
                }

                if(this._intersectsWith(this.containers[i].containerCache)) {

                    // if we've already found a container and it's more "inner" than this, then continue
                    if(innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
                        continue;
                    }

                    innermostContainer = this.containers[i];
                    innermostIndex = i;

                } else {
                    // container doesn't intersect. trigger "out" event if necessary
                    if(this.containers[i].containerCache.over) {
                        this.containers[i]._trigger("out", event, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }

            }

            // if no intersecting containers found, return
            if(!innermostContainer) {
                return;
            }

            // move the item into the container if it's not there already
            if(this.containers.length === 1) {
                if (!this.containers[innermostIndex].containerCache.over) {
                    this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
                    this.containers[innermostIndex].containerCache.over = 1;
                }
            } else {

                //When entering a new container, we will find the item with the least distance and append our item near it
                dist = 10000;
                itemWithLeastDistance = null;
                floating = innermostContainer.floating || this._isFloating(this.currentItem);
                posProperty = floating ? "left" : "top";
                sizeProperty = floating ? "width" : "height";
                axis = floating ? "clientX" : "clientY";

                for (j = this.items.length - 1; j >= 0; j--) {
                    if(!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
                        continue;
                    }
                    if(this.items[j].item[0] === this.currentItem[0]) {
                        continue;
                    }

                    cur = this.items[j].item.offset()[posProperty];
                    nearBottom = false;
                    if ( event[ axis ] - cur > this.items[ j ][ sizeProperty ] / 2 ) {
                        nearBottom = true;
                    }

                    if ( Math.abs( event[ axis ] - cur ) < dist ) {
                        dist = Math.abs( event[ axis ] - cur );
                        itemWithLeastDistance = this.items[ j ];
                        this.direction = nearBottom ? "up": "down";
                    }
                }

                //Check if dropOnEmpty is enabled
                if(!itemWithLeastDistance && !this.options.dropOnEmpty) {
                    return;
                }

                if(this.currentContainer === this.containers[innermostIndex]) {
                    if ( !this.currentContainer.containerCache.over ) {
                        this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash() );
                        this.currentContainer.containerCache.over = 1;
                    }
                    return;
                }

                itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
                this._trigger("change", event, this._uiHash());
                this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
                this.currentContainer = this.containers[innermostIndex];

                //Update the placeholder
                this.options.placeholder.update(this.currentContainer, this.placeholder);

                this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
                this.containers[innermostIndex].containerCache.over = 1;
            }


        },

        _createHelper: function(event) {

            var o = this.options,
                helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper === "clone" ? this.currentItem.clone() : this.currentItem);

            //Add the helper to the DOM if that didn't happen already
            if(!helper.parents("body").length) {
                $(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
            }

            if(helper[0] === this.currentItem[0]) {
                this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") };
            }

            if(!helper[0].style.width || o.forceHelperSize) {
                helper.width(this.currentItem.width());
            }
            if(!helper[0].style.height || o.forceHelperSize) {
                helper.height(this.currentItem.height());
            }

            return helper;

        },

        _adjustOffsetFromHelper: function(obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = {left: +obj[0], top: +obj[1] || 0};
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },

        _getParentOffset: function() {


            //Get the offsetParent and cache its position
            this.offsetParent = this.helper.offsetParent();
            var po = this.offsetParent.offset();

            // This is a special case where we need to modify a offset calculated on start, since the following happened:
            // 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
            // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
            //    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
            if(this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }

            // This needs to be actually done for all browsers, since pageX/pageY includes this information
            // with an ugly IE fix
            if( this.offsetParent[0] === this.document[0].body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
                po = { top: 0, left: 0 };
            }

            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
            };

        },

        _getRelativeOffset: function() {

            if(this.cssPosition === "relative") {
                var p = this.currentItem.position();
                return {
                    top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
                    left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
                };
            } else {
                return { top: 0, left: 0 };
            }

        },

        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.currentItem.css("marginLeft"),10) || 0),
                top: (parseInt(this.currentItem.css("marginTop"),10) || 0)
            };
        },

        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },

        _setContainment: function() {

            var ce, co, over,
                o = this.options;
            if(o.containment === "parent") {
                o.containment = this.helper[0].parentNode;
            }
            if(o.containment === "document" || o.containment === "window") {
                this.containment = [
                    0 - this.offset.relative.left - this.offset.parent.left,
                    0 - this.offset.relative.top - this.offset.parent.top,
                    o.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left,
                    (o.containment === "document" ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
                ];
            }

            if(!(/^(document|window|parent)$/).test(o.containment)) {
                ce = $(o.containment)[0];
                co = $(o.containment).offset();
                over = ($(ce).css("overflow") !== "hidden");

                this.containment = [
                    co.left + (parseInt($(ce).css("borderLeftWidth"),10) || 0) + (parseInt($(ce).css("paddingLeft"),10) || 0) - this.margins.left,
                    co.top + (parseInt($(ce).css("borderTopWidth"),10) || 0) + (parseInt($(ce).css("paddingTop"),10) || 0) - this.margins.top,
                    co.left+(over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"),10) || 0) - (parseInt($(ce).css("paddingRight"),10) || 0) - this.helperProportions.width - this.margins.left,
                    co.top+(over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"),10) || 0) - (parseInt($(ce).css("paddingBottom"),10) || 0) - this.helperProportions.height - this.margins.top
                ];
            }

        },

        _convertPositionTo: function(d, pos) {

            if(!pos) {
                pos = this.position;
            }
            var mod = d === "absolute" ? 1 : -1,
                scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

            return {
                top: (
                pos.top	+																// The absolute mouse position
                this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.top * mod -											// The offsetParent's offset without borders (offset + border)
                ( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
                ),
                left: (
                pos.left +																// The absolute mouse position
                this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.left * mod	-										// The offsetParent's offset without borders (offset + border)
                ( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
                )
            };

        },

        _generatePosition: function(event) {

            var top, left,
                o = this.options,
                pageX = event.pageX,
                pageY = event.pageY,
                scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

            // This is another very weird special case that only happens for relative elements:
            // 1. If the css position is relative
            // 2. and the scroll parent is the document or similar to the offset parent
            // we have to refresh the relative offset during the scroll so there are no jumps
            if(this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset();
            }

            /*
             * - Position constraining -
             * Constrain the position to a mix of grid, containment.
             */

            if(this.originalPosition) { //If we are not dragging yet, we won't check for options

                if(this.containment) {
                    if(event.pageX - this.offset.click.left < this.containment[0]) {
                        pageX = this.containment[0] + this.offset.click.left;
                    }
                    if(event.pageY - this.offset.click.top < this.containment[1]) {
                        pageY = this.containment[1] + this.offset.click.top;
                    }
                    if(event.pageX - this.offset.click.left > this.containment[2]) {
                        pageX = this.containment[2] + this.offset.click.left;
                    }
                    if(event.pageY - this.offset.click.top > this.containment[3]) {
                        pageY = this.containment[3] + this.offset.click.top;
                    }
                }

                if(o.grid) {
                    top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
                    pageY = this.containment ? ( (top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3]) ? top : ((top - this.offset.click.top >= this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

                    left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
                    pageX = this.containment ? ( (left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2]) ? left : ((left - this.offset.click.left >= this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
                }

            }

            return {
                top: (
                pageY -																// The absolute mouse position
                this.offset.click.top -													// Click offset (relative to the element)
                this.offset.relative.top	-											// Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
                ( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
                ),
                left: (
                pageX -																// The absolute mouse position
                this.offset.click.left -												// Click offset (relative to the element)
                this.offset.relative.left	-											// Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
                ( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
                )
            };

        },

        _rearrange: function(event, i, a, hardRefresh) {

            a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? i.item[0] : i.item[0].nextSibling));

            //Various things done here to improve the performance:
            // 1. we create a setTimeout, that calls refreshPositions
            // 2. on the instance, we have a counter variable, that get's higher after every append
            // 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
            // 4. this lets only the last addition to the timeout stack through
            this.counter = this.counter ? ++this.counter : 1;
            var counter = this.counter;

            this._delay(function() {
                if(counter === this.counter) {
                    this.refreshPositions(!hardRefresh); //Precompute after each DOM insertion, NOT on mousemove
                }
            });

        },

        _clear: function(event, noPropagation) {

            this.reverting = false;
            // We delay all events that have to be triggered to after the point where the placeholder has been removed and
            // everything else normalized again
            var i,
                delayedTriggers = [];

            // We first have to update the dom position of the actual currentItem
            // Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
            if(!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem);
            }
            this._noFinalSort = null;

            if(this.helper[0] === this.currentItem[0]) {
                for(i in this._storedCSS) {
                    if(this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
                        this._storedCSS[i] = "";
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else {
                this.currentItem.show();
            }

            if(this.fromOutside && !noPropagation) {
                delayedTriggers.push(function(event) { this._trigger("receive", event, this._uiHash(this.fromOutside)); });
            }
            if((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
                delayedTriggers.push(function(event) { this._trigger("update", event, this._uiHash()); }); //Trigger update callback if the DOM position has changed
            }

            // Check if the items Container has Changed and trigger appropriate
            // events.
            if (this !== this.currentContainer) {
                if(!noPropagation) {
                    delayedTriggers.push(function(event) { this._trigger("remove", event, this._uiHash()); });
                    delayedTriggers.push((function(c) { return function(event) { c._trigger("receive", event, this._uiHash(this)); };  }).call(this, this.currentContainer));
                    delayedTriggers.push((function(c) { return function(event) { c._trigger("update", event, this._uiHash(this));  }; }).call(this, this.currentContainer));
                }
            }


            //Post events to containers
            function delayEvent( type, instance, container ) {
                return function( event ) {
                    container._trigger( type, event, instance._uiHash( instance ) );
                };
            }
            for (i = this.containers.length - 1; i >= 0; i--){
                if (!noPropagation) {
                    delayedTriggers.push( delayEvent( "deactivate", this, this.containers[ i ] ) );
                }
                if(this.containers[i].containerCache.over) {
                    delayedTriggers.push( delayEvent( "out", this, this.containers[ i ] ) );
                    this.containers[i].containerCache.over = 0;
                }
            }

            //Do what was originally in plugins
            if ( this.storedCursor ) {
                this.document.find( "body" ).css( "cursor", this.storedCursor );
                this.storedStylesheet.remove();
            }
            if(this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity);
            }
            if(this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
            }

            this.dragging = false;

            if(!noPropagation) {
                this._trigger("beforeStop", event, this._uiHash());
            }

            //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

            if ( !this.cancelHelperRemoval ) {
                if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
                    this.helper.remove();
                }
                this.helper = null;
            }

            if(!noPropagation) {
                for (i=0; i < delayedTriggers.length; i++) {
                    delayedTriggers[i].call(this, event);
                } //Trigger all delayed events
                this._trigger("stop", event, this._uiHash());
            }

            this.fromOutside = false;
            return !this.cancelHelperRemoval;

        },

        _trigger: function() {
            if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel();
            }
        },

        _uiHash: function(_inst) {
            var inst = _inst || this;
            return {
                helper: inst.helper,
                placeholder: inst.placeholder || $([]),
                position: inst.position,
                originalPosition: inst.originalPosition,
                offset: inst.positionAbs,
                item: inst.currentItem,
                sender: _inst ? _inst.element : null
            };
        }

    });


    /*!
     * jQuery UI Spinner 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/spinner/
     */


    function spinner_modifier( fn ) {
        return function() {
            var previous = this.element.val();
            fn.apply( this, arguments );
            this._refresh();
            if ( previous !== this.element.val() ) {
                this._trigger( "change" );
            }
        };
    }

    var spinner = $.widget( "ui.spinner", {
        version: "1.11.4",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: true,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,

            change: null,
            spin: null,
            start: null,
            stop: null
        },

        _create: function() {
            // handle string values that need to be parsed
            this._setOption( "max", this.options.max );
            this._setOption( "min", this.options.min );
            this._setOption( "step", this.options.step );

            // Only format if there is a value, prevents the field from being marked
            // as invalid in Firefox, see #9573.
            if ( this.value() !== "" ) {
                // Format the value, but don't constrain.
                this._value( this.element.val(), true );
            }

            this._draw();
            this._on( this._events );
            this._refresh();

            // turning off autocomplete prevents the browser from remembering the
            // value when navigating through history, so we re-enable autocomplete
            // if the page is unloaded before the widget is destroyed. #7790
            this._on( this.window, {
                beforeunload: function() {
                    this.element.removeAttr( "autocomplete" );
                }
            });
        },

        _getCreateOptions: function() {
            var options = {},
                element = this.element;

            $.each( [ "min", "max", "step" ], function( i, option ) {
                var value = element.attr( option );
                if ( value !== undefined && value.length ) {
                    options[ option ] = value;
                }
            });

            return options;
        },

        _events: {
            keydown: function( event ) {
                if ( this._start( event ) && this._keydown( event ) ) {
                    event.preventDefault();
                }
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function( event ) {
                if ( this.cancelBlur ) {
                    delete this.cancelBlur;
                    return;
                }

                this._stop();
                this._refresh();
                if ( this.previous !== this.element.val() ) {
                    this._trigger( "change", event );
                }
            },
            mousewheel: function( event, delta ) {
                if ( !delta ) {
                    return;
                }
                if ( !this.spinning && !this._start( event ) ) {
                    return false;
                }

                this._spin( (delta > 0 ? 1 : -1) * this.options.step, event );
                clearTimeout( this.mousewheelTimer );
                this.mousewheelTimer = this._delay(function() {
                    if ( this.spinning ) {
                        this._stop( event );
                    }
                }, 100 );
                event.preventDefault();
            },
            "mousedown .ui-spinner-button": function( event ) {
                var previous;

                // We never want the buttons to have focus; whenever the user is
                // interacting with the spinner, the focus should be on the input.
                // If the input is focused then this.previous is properly set from
                // when the input first received focus. If the input is not focused
                // then we need to set this.previous based on the value before spinning.
                previous = this.element[0] === this.document[0].activeElement ?
                    this.previous : this.element.val();
                function checkFocus() {
                    var isActive = this.element[0] === this.document[0].activeElement;
                    if ( !isActive ) {
                        this.element.focus();
                        this.previous = previous;
                        // support: IE
                        // IE sets focus asynchronously, so we need to check if focus
                        // moved off of the input because the user clicked on the button.
                        this._delay(function() {
                            this.previous = previous;
                        });
                    }
                }

                // ensure focus is on (or stays on) the text field
                event.preventDefault();
                checkFocus.call( this );

                // support: IE
                // IE doesn't prevent moving focus even with event.preventDefault()
                // so we set a flag to know when we should ignore the blur event
                // and check (again) if focus moved off of the input.
                this.cancelBlur = true;
                this._delay(function() {
                    delete this.cancelBlur;
                    checkFocus.call( this );
                });

                if ( this._start( event ) === false ) {
                    return;
                }

                this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : -1, event );
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function( event ) {
                // button will add ui-state-active if mouse was down while mouseleave and kept down
                if ( !$( event.currentTarget ).hasClass( "ui-state-active" ) ) {
                    return;
                }

                if ( this._start( event ) === false ) {
                    return false;
                }
                this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : -1, event );
            },
            // TODO: do we really want to consider this a stop?
            // shouldn't we just stop the repeater and wait until mouseup before
            // we trigger the stop event?
            "mouseleave .ui-spinner-button": "_stop"
        },

        _draw: function() {
            var uiSpinner = this.uiSpinner = this.element
                .addClass( "ui-spinner-input" )
                .attr( "autocomplete", "off" )
                .wrap( this._uiSpinnerHtml() )
                .parent()
                // add buttons
                .append( this._buttonHtml() );

            this.element.attr( "role", "spinbutton" );

            // button bindings
            this.buttons = uiSpinner.find( ".ui-spinner-button" )
                .attr( "tabIndex", -1 )
                .button()
                .removeClass( "ui-corner-all" );

            // IE 6 doesn't understand height: 50% for the buttons
            // unless the wrapper has an explicit height
            if ( this.buttons.height() > Math.ceil( uiSpinner.height() * 0.5 ) &&
                uiSpinner.height() > 0 ) {
                uiSpinner.height( uiSpinner.height() );
            }

            // disable spinner if element was already disabled
            if ( this.options.disabled ) {
                this.disable();
            }
        },

        _keydown: function( event ) {
            var options = this.options,
                keyCode = $.ui.keyCode;

            switch ( event.keyCode ) {
                case keyCode.UP:
                    this._repeat( null, 1, event );
                    return true;
                case keyCode.DOWN:
                    this._repeat( null, -1, event );
                    return true;
                case keyCode.PAGE_UP:
                    this._repeat( null, options.page, event );
                    return true;
                case keyCode.PAGE_DOWN:
                    this._repeat( null, -options.page, event );
                    return true;
            }

            return false;
        },

        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
        },

        _buttonHtml: function() {
            return "" +
                "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>" +
                "<span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" +
                "</a>" +
                "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
                "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" +
                "</a>";
        },

        _start: function( event ) {
            if ( !this.spinning && this._trigger( "start", event ) === false ) {
                return false;
            }

            if ( !this.counter ) {
                this.counter = 1;
            }
            this.spinning = true;
            return true;
        },

        _repeat: function( i, steps, event ) {
            i = i || 500;

            clearTimeout( this.timer );
            this.timer = this._delay(function() {
                this._repeat( 40, steps, event );
            }, i );

            this._spin( steps * this.options.step, event );
        },

        _spin: function( step, event ) {
            var value = this.value() || 0;

            if ( !this.counter ) {
                this.counter = 1;
            }

            value = this._adjustValue( value + step * this._increment( this.counter ) );

            if ( !this.spinning || this._trigger( "spin", event, { value: value } ) !== false) {
                this._value( value );
                this.counter++;
            }
        },

        _increment: function( i ) {
            var incremental = this.options.incremental;

            if ( incremental ) {
                return $.isFunction( incremental ) ?
                    incremental( i ) :
                    Math.floor( i * i * i / 50000 - i * i / 500 + 17 * i / 200 + 1 );
            }

            return 1;
        },

        _precision: function() {
            var precision = this._precisionOf( this.options.step );
            if ( this.options.min !== null ) {
                precision = Math.max( precision, this._precisionOf( this.options.min ) );
            }
            return precision;
        },

        _precisionOf: function( num ) {
            var str = num.toString(),
                decimal = str.indexOf( "." );
            return decimal === -1 ? 0 : str.length - decimal - 1;
        },

        _adjustValue: function( value ) {
            var base, aboveMin,
                options = this.options;

            // make sure we're at a valid step
            // - find out where we are relative to the base (min or 0)
            base = options.min !== null ? options.min : 0;
            aboveMin = value - base;
            // - round to the nearest step
            aboveMin = Math.round(aboveMin / options.step) * options.step;
            // - rounding is based on 0, so adjust back to our base
            value = base + aboveMin;

            // fix precision from bad JS floating point math
            value = parseFloat( value.toFixed( this._precision() ) );

            // clamp the value
            if ( options.max !== null && value > options.max) {
                return options.max;
            }
            if ( options.min !== null && value < options.min ) {
                return options.min;
            }

            return value;
        },

        _stop: function( event ) {
            if ( !this.spinning ) {
                return;
            }

            clearTimeout( this.timer );
            clearTimeout( this.mousewheelTimer );
            this.counter = 0;
            this.spinning = false;
            this._trigger( "stop", event );
        },

        _setOption: function( key, value ) {
            if ( key === "culture" || key === "numberFormat" ) {
                var prevValue = this._parse( this.element.val() );
                this.options[ key ] = value;
                this.element.val( this._format( prevValue ) );
                return;
            }

            if ( key === "max" || key === "min" || key === "step" ) {
                if ( typeof value === "string" ) {
                    value = this._parse( value );
                }
            }
            if ( key === "icons" ) {
                this.buttons.first().find( ".ui-icon" )
                    .removeClass( this.options.icons.up )
                    .addClass( value.up );
                this.buttons.last().find( ".ui-icon" )
                    .removeClass( this.options.icons.down )
                    .addClass( value.down );
            }

            this._super( key, value );

            if ( key === "disabled" ) {
                this.widget().toggleClass( "ui-state-disabled", !!value );
                this.element.prop( "disabled", !!value );
                this.buttons.button( value ? "disable" : "enable" );
            }
        },

        _setOptions: spinner_modifier(function( options ) {
            this._super( options );
        }),

        _parse: function( val ) {
            if ( typeof val === "string" && val !== "" ) {
                val = window.Globalize && this.options.numberFormat ?
                    Globalize.parseFloat( val, 10, this.options.culture ) : +val;
            }
            return val === "" || isNaN( val ) ? null : val;
        },

        _format: function( value ) {
            if ( value === "" ) {
                return "";
            }
            return window.Globalize && this.options.numberFormat ?
                Globalize.format( value, this.options.numberFormat, this.options.culture ) :
                value;
        },

        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                // TODO: what should we do with values that can't be parsed?
                "aria-valuenow": this._parse( this.element.val() )
            });
        },

        isValid: function() {
            var value = this.value();

            // null is invalid
            if ( value === null ) {
                return false;
            }

            // if value gets adjusted, it's invalid
            return value === this._adjustValue( value );
        },

        // update the value without triggering change
        _value: function( value, allowAny ) {
            var parsed;
            if ( value !== "" ) {
                parsed = this._parse( value );
                if ( parsed !== null ) {
                    if ( !allowAny ) {
                        parsed = this._adjustValue( parsed );
                    }
                    value = this._format( parsed );
                }
            }
            this.element.val( value );
            this._refresh();
        },

        _destroy: function() {
            this.element
                .removeClass( "ui-spinner-input" )
                .prop( "disabled", false )
                .removeAttr( "autocomplete" )
                .removeAttr( "role" )
                .removeAttr( "aria-valuemin" )
                .removeAttr( "aria-valuemax" )
                .removeAttr( "aria-valuenow" );
            this.uiSpinner.replaceWith( this.element );
        },

        stepUp: spinner_modifier(function( steps ) {
            this._stepUp( steps );
        }),
        _stepUp: function( steps ) {
            if ( this._start() ) {
                this._spin( (steps || 1) * this.options.step );
                this._stop();
            }
        },

        stepDown: spinner_modifier(function( steps ) {
            this._stepDown( steps );
        }),
        _stepDown: function( steps ) {
            if ( this._start() ) {
                this._spin( (steps || 1) * -this.options.step );
                this._stop();
            }
        },

        pageUp: spinner_modifier(function( pages ) {
            this._stepUp( (pages || 1) * this.options.page );
        }),

        pageDown: spinner_modifier(function( pages ) {
            this._stepDown( (pages || 1) * this.options.page );
        }),

        value: function( newVal ) {
            if ( !arguments.length ) {
                return this._parse( this.element.val() );
            }
            spinner_modifier( this._value ).call( this, newVal );
        },

        widget: function() {
            return this.uiSpinner;
        }
    });


    /*!
     * jQuery UI Tabs 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/tabs/
     */


    var tabs = $.widget( "ui.tabs", {
        version: "1.11.4",
        delay: 300,
        options: {
            active: null,
            collapsible: false,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,

            // callbacks
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },

        _isLocal: (function() {
            var rhash = /#.*$/;

            return function( anchor ) {
                var anchorUrl, locationUrl;

                // support: IE7
                // IE7 doesn't normalize the href property when set via script (#9317)
                anchor = anchor.cloneNode( false );

                anchorUrl = anchor.href.replace( rhash, "" );
                locationUrl = location.href.replace( rhash, "" );

                // decoding may throw an error if the URL isn't UTF-8 (#9518)
                try {
                    anchorUrl = decodeURIComponent( anchorUrl );
                } catch ( error ) {}
                try {
                    locationUrl = decodeURIComponent( locationUrl );
                } catch ( error ) {}

                return anchor.hash.length > 1 && anchorUrl === locationUrl;
            };
        })(),

        _create: function() {
            var that = this,
                options = this.options;

            this.running = false;

            this.element
                .addClass( "ui-tabs ui-widget ui-widget-content ui-corner-all" )
                .toggleClass( "ui-tabs-collapsible", options.collapsible );

            this._processTabs();
            options.active = this._initialActive();

            // Take disabling tabs via class attribute from HTML
            // into account and update option properly.
            if ( $.isArray( options.disabled ) ) {
                options.disabled = $.unique( options.disabled.concat(
                    $.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
                        return that.tabs.index( li );
                    })
                ) ).sort();
            }

            // check for length avoids error when initializing empty list
            if ( this.options.active !== false && this.anchors.length ) {
                this.active = this._findActive( options.active );
            } else {
                this.active = $();
            }

            this._refresh();

            if ( this.active.length ) {
                this.load( options.active );
            }
        },

        _initialActive: function() {
            var active = this.options.active,
                collapsible = this.options.collapsible,
                locationHash = location.hash.substring( 1 );

            if ( active === null ) {
                // check the fragment identifier in the URL
                if ( locationHash ) {
                    this.tabs.each(function( i, tab ) {
                        if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
                            active = i;
                            return false;
                        }
                    });
                }

                // check for a tab marked active via a class
                if ( active === null ) {
                    active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
                }

                // no active tab, set to false
                if ( active === null || active === -1 ) {
                    active = this.tabs.length ? 0 : false;
                }
            }

            // handle numbers: negative, out of range
            if ( active !== false ) {
                active = this.tabs.index( this.tabs.eq( active ) );
                if ( active === -1 ) {
                    active = collapsible ? false : 0;
                }
            }

            // don't allow collapsible: false and active: false
            if ( !collapsible && active === false && this.anchors.length ) {
                active = 0;
            }

            return active;
        },

        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: !this.active.length ? $() : this._getPanelForTab( this.active )
            };
        },

        _tabKeydown: function( event ) {
            var focusedTab = $( this.document[0].activeElement ).closest( "li" ),
                selectedIndex = this.tabs.index( focusedTab ),
                goingForward = true;

            if ( this._handlePageNav( event ) ) {
                return;
            }

            switch ( event.keyCode ) {
                case $.ui.keyCode.RIGHT:
                case $.ui.keyCode.DOWN:
                    selectedIndex++;
                    break;
                case $.ui.keyCode.UP:
                case $.ui.keyCode.LEFT:
                    goingForward = false;
                    selectedIndex--;
                    break;
                case $.ui.keyCode.END:
                    selectedIndex = this.anchors.length - 1;
                    break;
                case $.ui.keyCode.HOME:
                    selectedIndex = 0;
                    break;
                case $.ui.keyCode.SPACE:
                    // Activate only, no collapsing
                    event.preventDefault();
                    clearTimeout( this.activating );
                    this._activate( selectedIndex );
                    return;
                case $.ui.keyCode.ENTER:
                    // Toggle (cancel delayed activation, allow collapsing)
                    event.preventDefault();
                    clearTimeout( this.activating );
                    // Determine if we should collapse or activate
                    this._activate( selectedIndex === this.options.active ? false : selectedIndex );
                    return;
                default:
                    return;
            }

            // Focus the appropriate tab, based on which key was pressed
            event.preventDefault();
            clearTimeout( this.activating );
            selectedIndex = this._focusNextTab( selectedIndex, goingForward );

            // Navigating with control/command key will prevent automatic activation
            if ( !event.ctrlKey && !event.metaKey ) {

                // Update aria-selected immediately so that AT think the tab is already selected.
                // Otherwise AT may confuse the user by stating that they need to activate the tab,
                // but the tab will already be activated by the time the announcement finishes.
                focusedTab.attr( "aria-selected", "false" );
                this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

                this.activating = this._delay(function() {
                    this.option( "active", selectedIndex );
                }, this.delay );
            }
        },

        _panelKeydown: function( event ) {
            if ( this._handlePageNav( event ) ) {
                return;
            }

            // Ctrl+up moves focus to the current tab
            if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
                event.preventDefault();
                this.active.focus();
            }
        },

        // Alt+page up/down moves focus to the previous/next tab (and activates)
        _handlePageNav: function( event ) {
            if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
                this._activate( this._focusNextTab( this.options.active - 1, false ) );
                return true;
            }
            if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
                this._activate( this._focusNextTab( this.options.active + 1, true ) );
                return true;
            }
        },

        _findNextTab: function( index, goingForward ) {
            var lastTabIndex = this.tabs.length - 1;

            function constrain() {
                if ( index > lastTabIndex ) {
                    index = 0;
                }
                if ( index < 0 ) {
                    index = lastTabIndex;
                }
                return index;
            }

            while ( $.inArray( constrain(), this.options.disabled ) !== -1 ) {
                index = goingForward ? index + 1 : index - 1;
            }

            return index;
        },

        _focusNextTab: function( index, goingForward ) {
            index = this._findNextTab( index, goingForward );
            this.tabs.eq( index ).focus();
            return index;
        },

        _setOption: function( key, value ) {
            if ( key === "active" ) {
                // _activate() will handle invalid values and update this.options
                this._activate( value );
                return;
            }

            if ( key === "disabled" ) {
                // don't use the widget factory's disabled handling
                this._setupDisabled( value );
                return;
            }

            this._super( key, value);

            if ( key === "collapsible" ) {
                this.element.toggleClass( "ui-tabs-collapsible", value );
                // Setting collapsible: false while collapsed; open first panel
                if ( !value && this.options.active === false ) {
                    this._activate( 0 );
                }
            }

            if ( key === "event" ) {
                this._setupEvents( value );
            }

            if ( key === "heightStyle" ) {
                this._setupHeightStyle( value );
            }
        },

        _sanitizeSelector: function( hash ) {
            return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
        },

        refresh: function() {
            var options = this.options,
                lis = this.tablist.children( ":has(a[href])" );

            // get disabled tabs from class attribute from HTML
            // this will get converted to a boolean if needed in _refresh()
            options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
                return lis.index( tab );
            });

            this._processTabs();

            // was collapsed or no tabs
            if ( options.active === false || !this.anchors.length ) {
                options.active = false;
                this.active = $();
                // was active, but active tab is gone
            } else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {
                // all remaining tabs are disabled
                if ( this.tabs.length === options.disabled.length ) {
                    options.active = false;
                    this.active = $();
                    // activate previous tab
                } else {
                    this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
                }
                // was active, active tab still exists
            } else {
                // make sure active index is correct
                options.active = this.tabs.index( this.active );
            }

            this._refresh();
        },

        _refresh: function() {
            this._setupDisabled( this.options.disabled );
            this._setupEvents( this.options.event );
            this._setupHeightStyle( this.options.heightStyle );

            this.tabs.not( this.active ).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not( this._getPanelForTab( this.active ) )
                .hide()
                .attr({
                    "aria-hidden": "true"
                });

            // Make sure one tab is in the tab order
            if ( !this.active.length ) {
                this.tabs.eq( 0 ).attr( "tabIndex", 0 );
            } else {
                this.active
                    .addClass( "ui-tabs-active ui-state-active" )
                    .attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    });
                this._getPanelForTab( this.active )
                    .show()
                    .attr({
                        "aria-hidden": "false"
                    });
            }
        },

        _processTabs: function() {
            var that = this,
                prevTabs = this.tabs,
                prevAnchors = this.anchors,
                prevPanels = this.panels;

            this.tablist = this._getList()
                .addClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
                .attr( "role", "tablist" )

                // Prevent users from focusing disabled tabs via click
                .delegate( "> li", "mousedown" + this.eventNamespace, function( event ) {
                    if ( $( this ).is( ".ui-state-disabled" ) ) {
                        event.preventDefault();
                    }
                })

                // support: IE <9
                // Preventing the default action in mousedown doesn't prevent IE
                // from focusing the element, so if the anchor gets focused, blur.
                // We don't have to worry about focusing the previously focused
                // element since clicking on a non-focusable element should focus
                // the body anyway.
                .delegate( ".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
                        this.blur();
                    }
                });

            this.tabs = this.tablist.find( "> li:has(a[href])" )
                .addClass( "ui-state-default ui-corner-top" )
                .attr({
                    role: "tab",
                    tabIndex: -1
                });

            this.anchors = this.tabs.map(function() {
                return $( "a", this )[ 0 ];
            })
                .addClass( "ui-tabs-anchor" )
                .attr({
                    role: "presentation",
                    tabIndex: -1
                });

            this.panels = $();

            this.anchors.each(function( i, anchor ) {
                var selector, panel, panelId,
                    anchorId = $( anchor ).uniqueId().attr( "id" ),
                    tab = $( anchor ).closest( "li" ),
                    originalAriaControls = tab.attr( "aria-controls" );

                // inline tab
                if ( that._isLocal( anchor ) ) {
                    selector = anchor.hash;
                    panelId = selector.substring( 1 );
                    panel = that.element.find( that._sanitizeSelector( selector ) );
                    // remote tab
                } else {
                    // If the tab doesn't already have aria-controls,
                    // generate an id by using a throw-away element
                    panelId = tab.attr( "aria-controls" ) || $( {} ).uniqueId()[ 0 ].id;
                    selector = "#" + panelId;
                    panel = that.element.find( selector );
                    if ( !panel.length ) {
                        panel = that._createPanel( panelId );
                        panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
                    }
                    panel.attr( "aria-live", "polite" );
                }

                if ( panel.length) {
                    that.panels = that.panels.add( panel );
                }
                if ( originalAriaControls ) {
                    tab.data( "ui-tabs-aria-controls", originalAriaControls );
                }
                tab.attr({
                    "aria-controls": panelId,
                    "aria-labelledby": anchorId
                });
                panel.attr( "aria-labelledby", anchorId );
            });

            this.panels
                .addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
                .attr( "role", "tabpanel" );

            // Avoid memory leaks (#10056)
            if ( prevTabs ) {
                this._off( prevTabs.not( this.tabs ) );
                this._off( prevAnchors.not( this.anchors ) );
                this._off( prevPanels.not( this.panels ) );
            }
        },

        // allow overriding how to find the list for rare usage scenarios (#7715)
        _getList: function() {
            return this.tablist || this.element.find( "ol,ul" ).eq( 0 );
        },

        _createPanel: function( id ) {
            return $( "<div>" )
                .attr( "id", id )
                .addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
                .data( "ui-tabs-destroy", true );
        },

        _setupDisabled: function( disabled ) {
            if ( $.isArray( disabled ) ) {
                if ( !disabled.length ) {
                    disabled = false;
                } else if ( disabled.length === this.anchors.length ) {
                    disabled = true;
                }
            }

            // disable tabs
            for ( var i = 0, li; ( li = this.tabs[ i ] ); i++ ) {
                if ( disabled === true || $.inArray( i, disabled ) !== -1 ) {
                    $( li )
                        .addClass( "ui-state-disabled" )
                        .attr( "aria-disabled", "true" );
                } else {
                    $( li )
                        .removeClass( "ui-state-disabled" )
                        .removeAttr( "aria-disabled" );
                }
            }

            this.options.disabled = disabled;
        },

        _setupEvents: function( event ) {
            var events = {};
            if ( event ) {
                $.each( event.split(" "), function( index, eventName ) {
                    events[ eventName ] = "_eventHandler";
                });
            }

            this._off( this.anchors.add( this.tabs ).add( this.panels ) );
            // Always prevent the default action, even when disabled
            this._on( true, this.anchors, {
                click: function( event ) {
                    event.preventDefault();
                }
            });
            this._on( this.anchors, events );
            this._on( this.tabs, { keydown: "_tabKeydown" } );
            this._on( this.panels, { keydown: "_panelKeydown" } );

            this._focusable( this.tabs );
            this._hoverable( this.tabs );
        },

        _setupHeightStyle: function( heightStyle ) {
            var maxHeight,
                parent = this.element.parent();

            if ( heightStyle === "fill" ) {
                maxHeight = parent.height();
                maxHeight -= this.element.outerHeight() - this.element.height();

                this.element.siblings( ":visible" ).each(function() {
                    var elem = $( this ),
                        position = elem.css( "position" );

                    if ( position === "absolute" || position === "fixed" ) {
                        return;
                    }
                    maxHeight -= elem.outerHeight( true );
                });

                this.element.children().not( this.panels ).each(function() {
                    maxHeight -= $( this ).outerHeight( true );
                });

                this.panels.each(function() {
                    $( this ).height( Math.max( 0, maxHeight -
                    $( this ).innerHeight() + $( this ).height() ) );
                })
                    .css( "overflow", "auto" );
            } else if ( heightStyle === "auto" ) {
                maxHeight = 0;
                this.panels.each(function() {
                    maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
                }).height( maxHeight );
            }
        },

        _eventHandler: function( event ) {
            var options = this.options,
                active = this.active,
                anchor = $( event.currentTarget ),
                tab = anchor.closest( "li" ),
                clickedIsActive = tab[ 0 ] === active[ 0 ],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : this._getPanelForTab( tab ),
                toHide = !active.length ? $() : this._getPanelForTab( active ),
                eventData = {
                    oldTab: active,
                    oldPanel: toHide,
                    newTab: collapsing ? $() : tab,
                    newPanel: toShow
                };

            event.preventDefault();

            if ( tab.hasClass( "ui-state-disabled" ) ||
                    // tab is already loading
                tab.hasClass( "ui-tabs-loading" ) ||
                    // can't switch durning an animation
                this.running ||
                    // click on active header, but not collapsible
                ( clickedIsActive && !options.collapsible ) ||
                    // allow canceling activation
                ( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
                return;
            }

            options.active = collapsing ? false : this.tabs.index( tab );

            this.active = clickedIsActive ? $() : tab;
            if ( this.xhr ) {
                this.xhr.abort();
            }

            if ( !toHide.length && !toShow.length ) {
                $.error( "jQuery UI Tabs: Mismatching fragment identifier." );
            }

            if ( toShow.length ) {
                this.load( this.tabs.index( tab ), event );
            }
            this._toggle( event, eventData );
        },

        // handles show/hide for selecting tabs
        _toggle: function( event, eventData ) {
            var that = this,
                toShow = eventData.newPanel,
                toHide = eventData.oldPanel;

            this.running = true;

            function complete() {
                that.running = false;
                that._trigger( "activate", event, eventData );
            }

            function show() {
                eventData.newTab.closest( "li" ).addClass( "ui-tabs-active ui-state-active" );

                if ( toShow.length && that.options.show ) {
                    that._show( toShow, that.options.show, complete );
                } else {
                    toShow.show();
                    complete();
                }
            }

            // start out by hiding, then showing, then completing
            if ( toHide.length && this.options.hide ) {
                this._hide( toHide, this.options.hide, function() {
                    eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
                    show();
                });
            } else {
                eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
                toHide.hide();
                show();
            }

            toHide.attr( "aria-hidden", "true" );
            eventData.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            // If we're switching tabs, remove the old tab from the tab order.
            // If we're opening from collapsed state, remove the previous tab from the tab order.
            // If we're collapsing, then keep the collapsing tab in the tab order.
            if ( toShow.length && toHide.length ) {
                eventData.oldTab.attr( "tabIndex", -1 );
            } else if ( toShow.length ) {
                this.tabs.filter(function() {
                    return $( this ).attr( "tabIndex" ) === 0;
                })
                    .attr( "tabIndex", -1 );
            }

            toShow.attr( "aria-hidden", "false" );
            eventData.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },

        _activate: function( index ) {
            var anchor,
                active = this._findActive( index );

            // trying to activate the already active panel
            if ( active[ 0 ] === this.active[ 0 ] ) {
                return;
            }

            // trying to collapse, simulate a click on the current active header
            if ( !active.length ) {
                active = this.active;
            }

            anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
            this._eventHandler({
                target: anchor,
                currentTarget: anchor,
                preventDefault: $.noop
            });
        },

        _findActive: function( index ) {
            return index === false ? $() : this.tabs.eq( index );
        },

        _getIndex: function( index ) {
            // meta-function to give users option to provide a href string instead of a numerical index.
            if ( typeof index === "string" ) {
                index = this.anchors.index( this.anchors.filter( "[href$='" + index + "']" ) );
            }

            return index;
        },

        _destroy: function() {
            if ( this.xhr ) {
                this.xhr.abort();
            }

            this.element.removeClass( "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible" );

            this.tablist
                .removeClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
                .removeAttr( "role" );

            this.anchors
                .removeClass( "ui-tabs-anchor" )
                .removeAttr( "role" )
                .removeAttr( "tabIndex" )
                .removeUniqueId();

            this.tablist.unbind( this.eventNamespace );

            this.tabs.add( this.panels ).each(function() {
                if ( $.data( this, "ui-tabs-destroy" ) ) {
                    $( this ).remove();
                } else {
                    $( this )
                        .removeClass( "ui-state-default ui-state-active ui-state-disabled " +
                        "ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel" )
                        .removeAttr( "tabIndex" )
                        .removeAttr( "aria-live" )
                        .removeAttr( "aria-busy" )
                        .removeAttr( "aria-selected" )
                        .removeAttr( "aria-labelledby" )
                        .removeAttr( "aria-hidden" )
                        .removeAttr( "aria-expanded" )
                        .removeAttr( "role" );
                }
            });

            this.tabs.each(function() {
                var li = $( this ),
                    prev = li.data( "ui-tabs-aria-controls" );
                if ( prev ) {
                    li
                        .attr( "aria-controls", prev )
                        .removeData( "ui-tabs-aria-controls" );
                } else {
                    li.removeAttr( "aria-controls" );
                }
            });

            this.panels.show();

            if ( this.options.heightStyle !== "content" ) {
                this.panels.css( "height", "" );
            }
        },

        enable: function( index ) {
            var disabled = this.options.disabled;
            if ( disabled === false ) {
                return;
            }

            if ( index === undefined ) {
                disabled = false;
            } else {
                index = this._getIndex( index );
                if ( $.isArray( disabled ) ) {
                    disabled = $.map( disabled, function( num ) {
                        return num !== index ? num : null;
                    });
                } else {
                    disabled = $.map( this.tabs, function( li, num ) {
                        return num !== index ? num : null;
                    });
                }
            }
            this._setupDisabled( disabled );
        },

        disable: function( index ) {
            var disabled = this.options.disabled;
            if ( disabled === true ) {
                return;
            }

            if ( index === undefined ) {
                disabled = true;
            } else {
                index = this._getIndex( index );
                if ( $.inArray( index, disabled ) !== -1 ) {
                    return;
                }
                if ( $.isArray( disabled ) ) {
                    disabled = $.merge( [ index ], disabled ).sort();
                } else {
                    disabled = [ index ];
                }
            }
            this._setupDisabled( disabled );
        },

        load: function( index, event ) {
            index = this._getIndex( index );
            var that = this,
                tab = this.tabs.eq( index ),
                anchor = tab.find( ".ui-tabs-anchor" ),
                panel = this._getPanelForTab( tab ),
                eventData = {
                    tab: tab,
                    panel: panel
                },
                complete = function( jqXHR, status ) {
                    if ( status === "abort" ) {
                        that.panels.stop( false, true );
                    }

                    tab.removeClass( "ui-tabs-loading" );
                    panel.removeAttr( "aria-busy" );

                    if ( jqXHR === that.xhr ) {
                        delete that.xhr;
                    }
                };

            // not remote
            if ( this._isLocal( anchor[ 0 ] ) ) {
                return;
            }

            this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

            // support: jQuery <1.8
            // jQuery <1.8 returns false if the request is canceled in beforeSend,
            // but as of 1.8, $.ajax() always returns a jqXHR object.
            if ( this.xhr && this.xhr.statusText !== "canceled" ) {
                tab.addClass( "ui-tabs-loading" );
                panel.attr( "aria-busy", "true" );

                this.xhr
                    .done(function( response, status, jqXHR ) {
                        // support: jQuery <1.8
                        // http://bugs.jquery.com/ticket/11778
                        setTimeout(function() {
                            panel.html( response );
                            that._trigger( "load", event, eventData );

                            complete( jqXHR, status );
                        }, 1 );
                    })
                    .fail(function( jqXHR, status ) {
                        // support: jQuery <1.8
                        // http://bugs.jquery.com/ticket/11778
                        setTimeout(function() {
                            complete( jqXHR, status );
                        }, 1 );
                    });
            }
        },

        _ajaxSettings: function( anchor, event, eventData ) {
            var that = this;
            return {
                url: anchor.attr( "href" ),
                beforeSend: function( jqXHR, settings ) {
                    return that._trigger( "beforeLoad", event,
                        $.extend( { jqXHR: jqXHR, ajaxSettings: settings }, eventData ) );
                }
            };
        },

        _getPanelForTab: function( tab ) {
            var id = $( tab ).attr( "aria-controls" );
            return this.element.find( this._sanitizeSelector( "#" + id ) );
        }
    });


    /*!
     * jQuery UI Tooltip 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/tooltip/
     */


    var tooltip = $.widget( "ui.tooltip", {
        version: "1.11.4",
        options: {
            content: function() {
                // support: IE<9, Opera in jQuery <1.7
                // .text() can't accept undefined, so coerce to a string
                var title = $( this ).attr( "title" ) || "";
                // Escape title, since we're going from an attribute to raw HTML
                return $( "<a>" ).text( title ).html();
            },
            hide: true,
            // Disabled elements have inconsistent behavior across browsers (#8661)
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: true,
            tooltipClass: null,
            track: false,

            // callbacks
            close: null,
            open: null
        },

        _addDescribedBy: function( elem, id ) {
            var describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ );
            describedby.push( id );
            elem
                .data( "ui-tooltip-id", id )
                .attr( "aria-describedby", $.trim( describedby.join( " " ) ) );
        },

        _removeDescribedBy: function( elem ) {
            var id = elem.data( "ui-tooltip-id" ),
                describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ ),
                index = $.inArray( id, describedby );

            if ( index !== -1 ) {
                describedby.splice( index, 1 );
            }

            elem.removeData( "ui-tooltip-id" );
            describedby = $.trim( describedby.join( " " ) );
            if ( describedby ) {
                elem.attr( "aria-describedby", describedby );
            } else {
                elem.removeAttr( "aria-describedby" );
            }
        },

        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });

            // IDs of generated tooltips, needed for destroy
            this.tooltips = {};

            // IDs of parent tooltips where we removed the title attribute
            this.parents = {};

            if ( this.options.disabled ) {
                this._disable();
            }

            // Append the aria-live region so tooltips announce correctly
            this.liveRegion = $( "<div>" )
                .attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                })
                .addClass( "ui-helper-hidden-accessible" )
                .appendTo( this.document[ 0 ].body );
        },

        _setOption: function( key, value ) {
            var that = this;

            if ( key === "disabled" ) {
                this[ value ? "_disable" : "_enable" ]();
                this.options[ key ] = value;
                // disable element style changes
                return;
            }

            this._super( key, value );

            if ( key === "content" ) {
                $.each( this.tooltips, function( id, tooltipData ) {
                    that._updateContent( tooltipData.element );
                });
            }
        },

        _disable: function() {
            var that = this;

            // close open tooltips
            $.each( this.tooltips, function( id, tooltipData ) {
                var event = $.Event( "blur" );
                event.target = event.currentTarget = tooltipData.element[ 0 ];
                that.close( event, true );
            });

            // remove title attributes to prevent native tooltips
            this.element.find( this.options.items ).addBack().each(function() {
                var element = $( this );
                if ( element.is( "[title]" ) ) {
                    element
                        .data( "ui-tooltip-title", element.attr( "title" ) )
                        .removeAttr( "title" );
                }
            });
        },

        _enable: function() {
            // restore title attributes
            this.element.find( this.options.items ).addBack().each(function() {
                var element = $( this );
                if ( element.data( "ui-tooltip-title" ) ) {
                    element.attr( "title", element.data( "ui-tooltip-title" ) );
                }
            });
        },

        open: function( event ) {
            var that = this,
                target = $( event ? event.target : this.element )
                    // we need closest here due to mouseover bubbling,
                    // but always pointing at the same event target
                    .closest( this.options.items );

            // No element to show a tooltip for or the tooltip is already open
            if ( !target.length || target.data( "ui-tooltip-id" ) ) {
                return;
            }

            if ( target.attr( "title" ) ) {
                target.data( "ui-tooltip-title", target.attr( "title" ) );
            }

            target.data( "ui-tooltip-open", true );

            // kill parent tooltips, custom or native, for hover
            if ( event && event.type === "mouseover" ) {
                target.parents().each(function() {
                    var parent = $( this ),
                        blurEvent;
                    if ( parent.data( "ui-tooltip-open" ) ) {
                        blurEvent = $.Event( "blur" );
                        blurEvent.target = blurEvent.currentTarget = this;
                        that.close( blurEvent, true );
                    }
                    if ( parent.attr( "title" ) ) {
                        parent.uniqueId();
                        that.parents[ this.id ] = {
                            element: this,
                            title: parent.attr( "title" )
                        };
                        parent.attr( "title", "" );
                    }
                });
            }

            this._registerCloseHandlers( event, target );
            this._updateContent( target, event );
        },

        _updateContent: function( target, event ) {
            var content,
                contentOption = this.options.content,
                that = this,
                eventType = event ? event.type : null;

            if ( typeof contentOption === "string" ) {
                return this._open( event, target, contentOption );
            }

            content = contentOption.call( target[0], function( response ) {

                // IE may instantly serve a cached response for ajax requests
                // delay this call to _open so the other call to _open runs first
                that._delay(function() {

                    // Ignore async response if tooltip was closed already
                    if ( !target.data( "ui-tooltip-open" ) ) {
                        return;
                    }

                    // jQuery creates a special event for focusin when it doesn't
                    // exist natively. To improve performance, the native event
                    // object is reused and the type is changed. Therefore, we can't
                    // rely on the type being correct after the event finished
                    // bubbling, so we set it back to the previous value. (#8740)
                    if ( event ) {
                        event.type = eventType;
                    }
                    this._open( event, target, response );
                });
            });
            if ( content ) {
                this._open( event, target, content );
            }
        },

        _open: function( event, target, content ) {
            var tooltipData, tooltip, delayedShow, a11yContent,
                positionOption = $.extend( {}, this.options.position );

            if ( !content ) {
                return;
            }

            // Content can be updated multiple times. If the tooltip already
            // exists, then just update the content and bail.
            tooltipData = this._find( target );
            if ( tooltipData ) {
                tooltipData.tooltip.find( ".ui-tooltip-content" ).html( content );
                return;
            }

            // if we have a title, clear it to prevent the native tooltip
            // we have to check first to avoid defining a title if none exists
            // (we don't want to cause an element to start matching [title])
            //
            // We use removeAttr only for key events, to allow IE to export the correct
            // accessible attributes. For mouse events, set to empty string to avoid
            // native tooltip showing up (happens only when removing inside mouseover).
            if ( target.is( "[title]" ) ) {
                if ( event && event.type === "mouseover" ) {
                    target.attr( "title", "" );
                } else {
                    target.removeAttr( "title" );
                }
            }

            tooltipData = this._tooltip( target );
            tooltip = tooltipData.tooltip;
            this._addDescribedBy( target, tooltip.attr( "id" ) );
            tooltip.find( ".ui-tooltip-content" ).html( content );

            // Support: Voiceover on OS X, JAWS on IE <= 9
            // JAWS announces deletions even when aria-relevant="additions"
            // Voiceover will sometimes re-read the entire log region's contents from the beginning
            this.liveRegion.children().hide();
            if ( content.clone ) {
                a11yContent = content.clone();
                a11yContent.removeAttr( "id" ).find( "[id]" ).removeAttr( "id" );
            } else {
                a11yContent = content;
            }
            $( "<div>" ).html( a11yContent ).appendTo( this.liveRegion );

            function position( event ) {
                positionOption.of = event;
                if ( tooltip.is( ":hidden" ) ) {
                    return;
                }
                tooltip.position( positionOption );
            }
            if ( this.options.track && event && /^mouse/.test( event.type ) ) {
                this._on( this.document, {
                    mousemove: position
                });
                // trigger once to override element-relative positioning
                position( event );
            } else {
                tooltip.position( $.extend({
                    of: target
                }, this.options.position ) );
            }

            tooltip.hide();

            this._show( tooltip, this.options.show );
            // Handle tracking tooltips that are shown with a delay (#8644). As soon
            // as the tooltip is visible, position the tooltip using the most recent
            // event.
            if ( this.options.show && this.options.show.delay ) {
                delayedShow = this.delayedShow = setInterval(function() {
                    if ( tooltip.is( ":visible" ) ) {
                        position( positionOption.of );
                        clearInterval( delayedShow );
                    }
                }, $.fx.interval );
            }

            this._trigger( "open", event, { tooltip: tooltip } );
        },

        _registerCloseHandlers: function( event, target ) {
            var events = {
                keyup: function( event ) {
                    if ( event.keyCode === $.ui.keyCode.ESCAPE ) {
                        var fakeEvent = $.Event(event);
                        fakeEvent.currentTarget = target[0];
                        this.close( fakeEvent, true );
                    }
                }
            };

            // Only bind remove handler for delegated targets. Non-delegated
            // tooltips will handle this in destroy.
            if ( target[ 0 ] !== this.element[ 0 ] ) {
                events.remove = function() {
                    this._removeTooltip( this._find( target ).tooltip );
                };
            }

            if ( !event || event.type === "mouseover" ) {
                events.mouseleave = "close";
            }
            if ( !event || event.type === "focusin" ) {
                events.focusout = "close";
            }
            this._on( true, target, events );
        },

        close: function( event ) {
            var tooltip,
                that = this,
                target = $( event ? event.currentTarget : this.element ),
                tooltipData = this._find( target );

            // The tooltip may already be closed
            if ( !tooltipData ) {

                // We set ui-tooltip-open immediately upon open (in open()), but only set the
                // additional data once there's actually content to show (in _open()). So even if the
                // tooltip doesn't have full data, we always remove ui-tooltip-open in case we're in
                // the period between open() and _open().
                target.removeData( "ui-tooltip-open" );
                return;
            }

            tooltip = tooltipData.tooltip;

            // disabling closes the tooltip, so we need to track when we're closing
            // to avoid an infinite loop in case the tooltip becomes disabled on close
            if ( tooltipData.closing ) {
                return;
            }

            // Clear the interval for delayed tracking tooltips
            clearInterval( this.delayedShow );

            // only set title if we had one before (see comment in _open())
            // If the title attribute has changed since open(), don't restore
            if ( target.data( "ui-tooltip-title" ) && !target.attr( "title" ) ) {
                target.attr( "title", target.data( "ui-tooltip-title" ) );
            }

            this._removeDescribedBy( target );

            tooltipData.hiding = true;
            tooltip.stop( true );
            this._hide( tooltip, this.options.hide, function() {
                that._removeTooltip( $( this ) );
            });

            target.removeData( "ui-tooltip-open" );
            this._off( target, "mouseleave focusout keyup" );

            // Remove 'remove' binding only on delegated targets
            if ( target[ 0 ] !== this.element[ 0 ] ) {
                this._off( target, "remove" );
            }
            this._off( this.document, "mousemove" );

            if ( event && event.type === "mouseleave" ) {
                $.each( this.parents, function( id, parent ) {
                    $( parent.element ).attr( "title", parent.title );
                    delete that.parents[ id ];
                });
            }

            tooltipData.closing = true;
            this._trigger( "close", event, { tooltip: tooltip } );
            if ( !tooltipData.hiding ) {
                tooltipData.closing = false;
            }
        },

        _tooltip: function( element ) {
            var tooltip = $( "<div>" )
                    .attr( "role", "tooltip" )
                    .addClass( "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
                    ( this.options.tooltipClass || "" ) ),
                id = tooltip.uniqueId().attr( "id" );

            $( "<div>" )
                .addClass( "ui-tooltip-content" )
                .appendTo( tooltip );

            tooltip.appendTo( this.document[0].body );

            return this.tooltips[ id ] = {
                element: element,
                tooltip: tooltip
            };
        },

        _find: function( target ) {
            var id = target.data( "ui-tooltip-id" );
            return id ? this.tooltips[ id ] : null;
        },

        _removeTooltip: function( tooltip ) {
            tooltip.remove();
            delete this.tooltips[ tooltip.attr( "id" ) ];
        },

        _destroy: function() {
            var that = this;

            // close open tooltips
            $.each( this.tooltips, function( id, tooltipData ) {
                // Delegate to close method to handle common cleanup
                var event = $.Event( "blur" ),
                    element = tooltipData.element;
                event.target = event.currentTarget = element[ 0 ];
                that.close( event, true );

                // Remove immediately; destroying an open tooltip doesn't use the
                // hide animation
                $( "#" + id ).remove();

                // Restore the title
                if ( element.data( "ui-tooltip-title" ) ) {
                    // If the title attribute has changed since open(), don't restore
                    if ( !element.attr( "title" ) ) {
                        element.attr( "title", element.data( "ui-tooltip-title" ) );
                    }
                    element.removeData( "ui-tooltip-title" );
                }
            });
            this.liveRegion.remove();
        }
    });



}));



/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(s,H,f,w){var K=f("html"),q=f(s),p=f(H),b=f.fancybox=function(){b.open.apply(this,arguments)},J=navigator.userAgent.match(/msie/i),C=null,t=H.createTouch!==w,u=function(a){return a&&a.hasOwnProperty&&a instanceof f},r=function(a){return a&&"string"===f.type(a)},F=function(a){return r(a)&&0<a.indexOf("%")},m=function(a,d){var e=parseInt(a,10)||0;d&&F(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},x=function(a,b){return m(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
    width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!t,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
    keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
    (J?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
    openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
    isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=u(a)?f(a).get():[a]),f.each(a,function(e,c){var l={},g,h,k,n,m;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),u(c)?(l={href:c.data("fancybox-href")||c.attr("href"),title:f("<div/>").text(c.data("fancybox-title")||c.attr("title")).html(),isDom:!0,element:c},
    f.metadata&&f.extend(!0,l,c.metadata())):l=c);g=d.href||l.href||(r(c)?c:null);h=d.title!==w?d.title:l.title||"";n=(k=d.content||l.content)?"html":d.type||l.type;!n&&l.isDom&&(n=c.data("fancybox-type"),n||(n=(n=c.prop("class").match(/fancybox\.(\w+)/))?n[1]:null));r(g)&&(n||(b.isImage(g)?n="image":b.isSWF(g)?n="swf":"#"===g.charAt(0)?n="inline":r(c)&&(n="html",k=c)),"ajax"===n&&(m=g.split(/\s+/,2),g=m.shift(),m=m.shift()));k||("inline"===n?g?k=f(r(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):l.isDom&&(k=c):
        "html"===n?k=g:n||g||!l.isDom||(n="inline",k=c));f.extend(l,{href:g,type:n,content:k,title:h,selector:m});a[e]=l}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==w&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1===b.trigger("onCancel")||(b.hideLoading(),a&&(b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),
        b.coming=null,b.current||b._afterZoomOut(a)))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(b.isOpen&&!0!==a?(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]()):(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&
    (b.player.timer=setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};!0===a||!b.player.isActive&&!1!==a?b.current&&(b.current.loop||b.current.index<b.group.length-1)&&(b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")):c()},next:function(a){var d=b.current;d&&(r(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=
        b.current;d&&(r(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=m(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==w&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,l;c&&(l=b._getPosition(d),a&&"scroll"===a.type?(delete l.position,c.stop(!0,!0).animate(l,200)):(c.css(l),e.pos=f.extend({},e.dim,l)))},
    update:function(a){var d=a&&a.originalEvent&&a.originalEvent.type,e=!d||"orientationchange"===d;e&&(clearTimeout(C),C=null);b.isOpen&&!C&&(C=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),C=null)},e&&!t?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,t&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),
        b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),b.cancel())});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}));b.trigger("onLoading")},getViewport:function(){var a=b.current&&
        b.current.locked||!1,d={x:q.scrollLeft(),y:q.scrollTop()};a&&a.length?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=t&&s.innerWidth?s.innerWidth:q.width(),d.h=t&&s.innerHeight?s.innerHeight:q.height());return d},unbindEvents:function(){b.wrap&&u(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(q.bind("orientationchange.fb"+(t?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=
        e.which||e.keyCode,l=e.target||e.srcElement;if(27===c&&b.coming)return!1;e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||l&&(l.type||f(l).is("[contenteditable]"))||f.each(d,function(d,l){if(1<a.group.length&&l[c]!==w)return b[d](l[c]),e.preventDefault(),!1;if(-1<f.inArray(c,l))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,l,g){for(var h=f(d.target||null),k=!1;h.length&&!(k||h.is(".fancybox-skin")||h.is(".fancybox-wrap"));)k=h[0]&&!(h[0].style.overflow&&
    "hidden"===h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();0!==c&&!k&&1<b.group.length&&!a.canShrink&&(0<g||0<l?b.prev(0<g?"down":"left"):(0>g||0>l)&&b.next(0>g?"up":"right"),d.preventDefault())}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&
        b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,{},b.helpers[d].defaults,e),c)})}p.trigger(a)},isImage:function(a){return r(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return r(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=m(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,
        c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===
        c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&t&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(t?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,x(d.padding[a]))});b.trigger("onReady");
        if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
        this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,
        d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",t?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);t||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||
    b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,l,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
        b.unbindEvents();e=a.content;c=a.type;l=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):u(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",
            !1)}));break;case "image":e=a.tpl.image.replace(/\{href\}/g,g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}u(e)&&e.parent().is(a.inner)||a.inner.append(e);b.trigger("beforeShow");
        a.inner.css("overflow","yes"===l?"scroll":"no"===l?"hidden":l);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(!b.isOpened)f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();else if(d.prevMethod)b.transitions[d.prevMethod]();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,l=b.skin,g=b.inner,h=b.current,c=h.width,k=h.height,n=h.minWidth,v=h.minHeight,p=h.maxWidth,
        q=h.maxHeight,t=h.scrolling,r=h.scrollOutside?h.scrollbarWidth:0,y=h.margin,z=m(y[1]+y[3]),s=m(y[0]+y[2]),w,A,u,D,B,G,C,E,I;e.add(l).add(g).width("auto").height("auto").removeClass("fancybox-tmp");y=m(l.outerWidth(!0)-l.width());w=m(l.outerHeight(!0)-l.height());A=z+y;u=s+w;D=F(c)?(a.w-A)*m(c)/100:c;B=F(k)?(a.h-u)*m(k)/100:k;if("iframe"===h.type){if(I=h.content,h.autoHeight&&1===I.data("ready"))try{I[0].contentWindow.document.location&&(g.width(D).height(9999),G=I.contents().find("body"),r&&G.css("overflow-x",
        "hidden"),B=G.outerHeight(!0))}catch(H){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(D),h.autoHeight||g.height(B),h.autoWidth&&(D=g.width()),h.autoHeight&&(B=g.height()),g.removeClass("fancybox-tmp");c=m(D);k=m(B);E=D/B;n=m(F(n)?m(n,"w")-A:n);p=m(F(p)?m(p,"w")-A:p);v=m(F(v)?m(v,"h")-u:v);q=m(F(q)?m(q,"h")-u:q);G=p;C=q;h.fitToView&&(p=Math.min(a.w-A,p),q=Math.min(a.h-u,q));A=a.w-z;s=a.h-s;h.aspectRatio?(c>p&&(c=p,k=m(c/E)),k>q&&(k=q,c=m(k*E)),c<n&&(c=n,k=m(c/
    E)),k<v&&(k=v,c=m(k*E))):(c=Math.max(n,Math.min(c,p)),h.autoHeight&&"iframe"!==h.type&&(g.width(c),k=g.height()),k=Math.max(v,Math.min(k,q)));if(h.fitToView)if(g.width(c).height(k),e.width(c+y),a=e.width(),z=e.height(),h.aspectRatio)for(;(a>A||z>s)&&c>n&&k>v&&!(19<d++);)k=Math.max(v,Math.min(q,k-10)),c=m(k*E),c<n&&(c=n,k=m(c/E)),c>p&&(c=p,k=m(c/E)),g.width(c).height(k),e.width(c+y),a=e.width(),z=e.height();else c=Math.max(n,Math.min(c,c-(a-A))),k=Math.max(v,Math.min(k,k-(z-s)));r&&"auto"===t&&k<B&&
    c+y+r<A&&(c+=r);g.width(c).height(k);e.width(c+y);a=e.width();z=e.height();e=(a>A||z>s)&&c>n&&k>v;c=h.aspectRatio?c<G&&k<C&&c<D&&k<B:(c<G||k<C)&&(c<D||k<B);f.extend(h,{dim:{width:x(a),height:x(z)},origWidth:D,origHeight:B,canShrink:e,canExpand:c,wPadding:y,hPadding:w,wrapSpace:z-l.outerHeight(!0),skinSpace:l.height()-k});!I&&h.autoHeight&&k>v&&k<q&&!c&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",
        top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=x(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=x(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&((b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){f(d.target).is("a")||f(d.target).parent().is("a")||
    (d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),a.loop||a.index!==a.group.length-1)?b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play(!0)):b.play(!1))},
    _afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,k=a.wPadding,n=b.getViewport();!e&&a.isDom&&d.is(":visible")&&(e=d.find("img:first"),e.length||(e=d));u(e)?(c=e.offset(),e.is("img")&&
(f=e.outerWidth(),g=e.outerHeight())):(c.top=n.y+(n.h-g)*a.topRatio,c.left=n.x+(n.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=n.y,c.left-=n.x;return c={top:x(c.top-h*a.topRatio),left:x(c.left-k*a.leftRatio),width:x(f+k),height:x(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](m("width"===
f?c:c-g*e)),b.inner[f](m("width"===f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,l=f.extend({opacity:1},d);delete l.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(l,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&
(c.opacity=0.1));b.wrap.animate(c,{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=x(m(e[g])-200),c[g]="+=200px"):(e[g]=x(m(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},
    changeOut:function(){var a=b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!t,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){var d;a=f.extend({},this.defaults,a);this.overlay&&
this.close();d=b.coming?b.coming.parent:a.parent;this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(d&&d.lenth?d:"body");this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",
    function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){q.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");
    J?(b=Math.max(H.documentElement.offsetWidth,H.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>q.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&this.fixed&&b.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&f("*").filter(function(){return"fixed"===
    f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=q.scrollTop(),this.scrollH=q.scrollLeft(),this.el.addClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",
    position:"bottom"},beforeShow:function(a){var d=b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(r(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),J&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(m(d.css("margin-bottom")))}d["top"===a.position?"prependTo":
    "appendTo"](c)}}};f.fn.fancybox=function(a){var d,e=f(this),c=this.selector||"",l=function(g){var h=f(this).blur(),k=d,l,m;g.ctrlKey||g.altKey||g.shiftKey||g.metaKey||h.is(".fancybox-wrap")||(l=a.groupAttr||"data-fancybox-group",m=h.attr(l),m||(l="rel",m=h.get(0)[l]),m&&""!==m&&"nofollow"!==m&&(h=c.length?f(c):e,h=h.filter("["+l+'="'+m+'"]'),k=h.index(this)),a.index=k,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;c&&!1!==a.live?p.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')",
    "click.fb-start",l):e.unbind("click.fb-start").bind("click.fb-start",l);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===w&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});f.support.fixedPosition===w&&(f.support.fixedPosition=function(){var a=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
    b=20===a[0].offsetTop||15===a[0].offsetTop;a.remove();return b}());f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(s).width();K.addClass("fancybox-lock-test");d=f(s).width();K.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);



/*
 * rwdImageMaps jQuery plugin v1.5
 *
 * Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
 *
 * Copyright (c) 2013 Matt Stow
 * https://github.com/stowball/jQuery-rwdImageMaps
 * http://mattstow.com
 * Licensed under the MIT license
 */
;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").load(function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);


/*!
 * ScrewDefaultButtons v2.0.6
 * http://screwdefaultbuttons.com/
 *
 * Licensed under the MIT license.
 * Copyright 2013 Matt Solano http://mattsolano.com
 *
 * Date: Mon February 25 2013
 */

;(function( $, window, document, undefined ){

    var methods = {

        init : function(options) {

            var defaults = $.extend( {
                image:	null,
                width:	50,
                height:	50,
                disabled: false
            }, options);

            return this.each(function(i){

                var $this = $(this);

                var $thisImage = defaults.image;
                var dataImage = $this.data('sdb-image');
                if (dataImage){
                    $thisImage = dataImage;
                }

                if (!$thisImage){
                    $.error( 'There is no image assigned for ScrewDefaultButtons' );
                }

                $this.wrap('<div >').css({'display': 'none'});

                var buttonClass = $this.attr('class');
                var buttonClick = $this.attr('onclick');

                var $thisParent = $this.parent('div');

                var inputId = $this.attr('id');
                var assocLabel = inputId && $('label[for="' + inputId + '"]');
                if (assocLabel) {
                    $thisParent.attr('title', assocLabel.text());
                }

                $thisParent.addClass(buttonClass);
                $thisParent.attr('onclick',buttonClick );
                $thisParent.css({
                    'background-image': $thisImage,
                    width:	defaults.width,
                    height: defaults.height,
                    cursor: 'pointer'
                });

                var uncheckedPos = 0;
                var checkedPos = -(defaults.height);
                /*if ($this.is(':disabled')){
                 uncheckedPos = -(defaults.height * 2);
                 checkedPos = -(defaults.height * 3);
                 }

                 $this.on('disableBtn', function(){
                 $this.attr('disabled', 'disabled');
                 uncheckedPos = -(defaults.height * 2);
                 checkedPos = -(defaults.height * 3);
                 $this.trigger('resetBackground');
                 });*/

                $this.on('enableBtn', function(){
                    $this.removeAttr('disabled');
                    uncheckedPos = 0;
                    checkedPos = -(defaults.height);
                    $this.trigger('resetBackground');
                });

                $this.on('resetBackground', function(){
                    if ($this.is(':checked')){
                        $thisParent.css({
                            backgroundPosition: '0 ' + checkedPos + "px"
                        });
                    }
                    else {
                        $thisParent.css({
                            backgroundPosition: '0 ' + uncheckedPos + "px"
                        });
                    }
                });

                $this.trigger('resetBackground');

                if ($this.is(':checkbox')){

                    $thisParent.on('click', function(){
                        if (!($this.is(':disabled'))){
                            $this.change();
                        }
                    });

                    $thisParent.on('keydown', function (e) {
                        if (e.which === 32) {
                            e.preventDefault();
                            $thisParent.trigger('click');
                        }
                    });

                    $thisParent.addClass('styledCheckbox');
                    $thisParent.attr('tabindex', '0');
                    $thisParent.attr('role', 'checkbox');

                    $this.on('change', function(){
                        if ($this.prop('checked')){
                            $this.prop("checked", false);
                            $thisParent.css({
                                backgroundPosition: '0 ' + uncheckedPos + "px"
                            });

                            $thisParent.attr('aria-checked', 'false');
                        }
                        else {
                            $this.prop("checked", true);
                            $thisParent.css({
                                backgroundPosition:  '0 ' + checkedPos + "px"
                            });
                            $thisParent.attr('aria-checked', 'true');
                        }
                    });

                }
                else if ($this.is(':radio')) {
                    $thisParent.addClass('styledRadio');

                    var $thisName = $this.attr('name');
                    var checkedRadio = $('input[name="' + $thisName + '"]:checked');

                    $thisParent.attr('tabindex', '-1');

                    if (checkedRadio.length > 0) {
                        $(checkedRadio[0].parentNode).attr('tabindex', '0');
                    } else if (i === 0) {
                        $thisParent.attr('tabindex', '0');
                    }

                    $thisParent.attr('role', 'radio');

                    $thisParent.on('click', function(){
                        if (!($this.prop('checked')) && !($this.is(':disabled'))){
                            $this.change();
                        }

                        $('input[name="' + $thisName + '"]').each(function (){
                            $(this).parent()
                                .attr('tabindex', '-1')
                                .attr('aria-checked', 'false');
                        });

                        $thisParent
                            .attr('tabindex', '0')
                            .attr('aria-checked', 'true');
                        $thisParent[0].focus();
                    });

                    var $radioGroup = $('input[name="' + $thisName + '"]');

                    $thisParent.on('keydown', function (e){
                        var nextUp;
                        var thisIndex = $.inArray($this[0], $radioGroup);

                        var which = e.which;
                        if (which == 13 || which === 32) {
                            e.preventDefault();
                            $thisParent.trigger('click');
                        } else if (which === 37 || which === 38) {
                            if (thisIndex > -1 && $radioGroup[thisIndex - 1]) {
                                nextUp = $radioGroup[thisIndex - 1].parentNode;
                                e.preventDefault();
                                $(nextUp).trigger('click');
                            }
                        } else if (which === 39 || which === 40) {
                            if (thisIndex > -1 && $radioGroup[thisIndex + 1]) {
                                nextUp = $radioGroup[thisIndex + 1].parentNode;
                                e.preventDefault();
                                $(nextUp).trigger('click');
                            }
                        }
                    });


                    $this.on('change', function(){
                        if ($this.prop('checked')){
                            $this.prop("checked", false);
                            $thisParent.css({
                                backgroundPosition:  '0 ' + uncheckedPos + "px"
                            });
                        }
                        else {
                            $this.prop("checked", true);
                            $thisParent.css({
                                backgroundPosition:  '0 ' + checkedPos + "px"
                            });

                            var otherRadioBtns = $('input[name="'+ $thisName +'"]').not($this);
                            otherRadioBtns.trigger('radioSwitch');
                        }
                    });

                    $this.on('radioSwitch', function(){
                        $thisParent.css({
                            backgroundPosition: '0 ' + uncheckedPos  + "px"
                        });

                    });

                    var $thisId = $(this).attr('id');
                    var $thisLabel = $('label[for="' + $thisId + '"]');
                    $thisLabel.on('click', function(){
                        $thisParent.trigger('click');
                    });
                }

                if(!$.support.leadingWhitespace){
                    var $thisId = $(this).attr('id');
                    var $thisLabel = $('label[for="' + $thisId + '"]');
                    $thisLabel.on('click', function(){
                        $thisParent.trigger('click');
                    });
                }

            });

        },
        check : function() {
            return this.each(function(){
                var $this = $(this);
                if (!methods.isChecked($this)){
                    $this.change();
                }
            });
        },
        uncheck : function() {
            return this.each(function(){
                var $this = $(this);
                if (methods.isChecked($this)){
                    $this.change();
                }
            });
        },
        toggle: function(){
            return this.each(function(){
                var $this = $(this);
                $this.change();
            });
        },
        disable : function() {
            return this.each(function(){
                var $this = $(this);
                $this.trigger('disableBtn');
            });
        },
        enable: function(){
            return this.each(function(){
                var $this = $(this);
                $this.trigger('enableBtn');
            });
        },
        isChecked: function($this){
            if ($this.prop('checked')){
                return true;
            }
            return false;
        }
    };

    $.fn.screwDefaultButtons = function( method, options) {

        // Method calling logic
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.screwDefaultButtons' );
        }

    };

    return this;

})( jQuery );

/*


 Magic Zoom Plus v4.0.33
 Copyright 2013 Magic Toolbox
 Buy a license: www.magictoolbox.com/magiczoomplus/
 License agreement: http://www.magictoolbox.com/license/


 */
eval(function(m,a,g,i,c,k){c=function(e){return(e<a?'':c(parseInt(e/a)))+((e=e%a)>35?String.fromCharCode(e+29):e.toString(36))};if(!''.replace(/^/,String)){while(g--){k[c(g)]=i[g]||c(g)}i=[function(e){return k[e]}];c=function(){return'\\w+'};g=1};while(g--){if(i[g]){m=m.replace(new RegExp('\\b'+c(g)+'\\b','g'),i[g])}}return m}('(L(){K(1a.63){M}P b={3t:"dw.7.1",aL:0,5c:{},$aj:L(d){M(d.$4g||(d.$4g=++a.aL))},8Y:L(d){M(a.5c[d]||(a.5c[d]={}))},$F:L(){},$U:L(){M U},2C:L(d){M(1C!=d)},eZ:L(d){M!!(d)},3h:L(d){K(!a.2C(d)){M U}K(d.$3V){M d.$3V}K(!!d.4M){K(1==d.4M){M"93"}K(3==d.4M){M"b4"}}K(d.1v&&d.8x){M"f0"}K(d.1v&&d.8N){M"22"}K((d 4b 1a.f1||d 4b 1a.a1)&&d.4c===a.4l){M"7M"}K(d 4b 1a.57){M"5h"}K(d 4b 1a.a1){M"L"}K(d 4b 1a.7N){M"78"}K(a.V.2q){K(a.2C(d.aZ)){M"42"}}17{K(d===1a.42||d.4c==1a.at||d.4c==1a.eY||d.4c==1a.eX||d.4c==1a.eU||d.4c==1a.eV){M"42"}}K(d 4b 1a.aP){M"aS"}K(d 4b 1a.4z){M"eW"}K(d===1a){M"1a"}K(d===1c){M"1c"}M 43(d)},1T:L(j,h){K(!(j 4b 1a.57)){j=[j]}1B(P g=0,e=j.1v;g<e;g++){K(!a.2C(j)){5p}1B(P f 1I(h||{})){2O{j[g][f]=h[f]}36(d){}}}M j[0]},8Q:L(h,g){K(!(h 4b 1a.57)){h=[h]}1B(P f=0,d=h.1v;f<d;f++){K(!a.2C(h[f])){5p}K(!h[f].2F){5p}1B(P e 1I(g||{})){K(!h[f].2F[e]){h[f].2F[e]=g[e]}}}M h[0]},aM:L(f,e){K(!a.2C(f)){M f}1B(P d 1I(e||{})){K(!f[d]){f[d]=e[d]}}M f},$2O:L(){1B(P f=0,d=22.1v;f<d;f++){2O{M 22[f]()}36(g){}}M 12},$A:L(f){K(!a.2C(f)){M $S([])}K(f.aN){M $S(f.aN())}K(f.8x){P e=f.1v||0,d=1k 57(e);3C(e--){d[e]=f[e]}M $S(d)}M $S(57.2F.f2.1V(f))},3I:L(){M 1k aP().f3()},3D:L(h){P f;2c(a.3h(h)){1e"bh":f={};1B(P g 1I h){f[g]=a.3D(h[g])}1g;1e"5h":f=[];1B(P e=0,d=h.1v;e<d;e++){f[e]=a.3D(h[e])}1g;2i:M h}M a.$(f)},$:L(e){K(!a.2C(e)){M 12}K(e.$ag){M e}2c(a.3h(e)){1e"5h":e=a.aM(e,a.1T(a.57,{$ag:a.$F}));e.2S=e.3y;M e;1g;1e"78":P d=1c.f9(e);K(a.2C(d)){M a.$(d)}M 12;1g;1e"1a":1e"1c":a.$aj(e);e=a.1T(e,a.5R);1g;1e"93":a.$aj(e);e=a.1T(e,a.3g);1g;1e"42":e=a.1T(e,a.at);1g;1e"b4":M e;1g;1e"L":1e"5h":1e"aS":2i:1g}M a.1T(e,{$ag:a.$F})},$1k:L(d,f,e){M $S(a.2G.3G(d)).bC(f||{}).19(e||{})},fa:L(e){K(1c.8L&&1c.8L.1v){1c.8L[0].f8(e,0)}17{P d=$S(1c.3G("1x"));d.2N(e);1c.6e("9z")[0].2b(d)}}};P a=b;1a.63=b;1a.$S=b.$;a.57={$3V:"5h",4e:L(g,h){P d=J.1v;1B(P e=J.1v,f=(h<0)?1s.3F(0,e+h):h||0;f<e;f++){K(J[f]===g){M f}}M-1},52:L(d,e){M J.4e(d,e)!=-1},3y:L(d,g){1B(P f=0,e=J.1v;f<e;f++){K(f 1I J){d.1V(g,J[f],f,J)}}},2K:L(d,j){P h=[];1B(P g=0,e=J.1v;g<e;g++){K(g 1I J){P f=J[g];K(d.1V(j,J[g],g,J)){h.4a(f)}}}M h},cE:L(d,h){P g=[];1B(P f=0,e=J.1v;f<e;f++){K(f 1I J){g[f]=d.1V(h,J[f],f,J)}}M g}};a.8Q(7N,{$3V:"78",3Y:L(){M J.2l(/^\\s+|\\s+$/g,"")},eq:L(d,e){M(e||U)?(J.5v()===d.5v()):(J.2L().5v()===d.2L().5v())},3w:L(){M J.2l(/-\\D/g,L(d){M d.aU(1).f7()})},5Y:L(){M J.2l(/[A-Z]/g,L(d){M("-"+d.aU(0).2L())})},1G:L(d){M 3m(J,d||10)},cP:L(){M 3L(J)},5S:L(){M!J.2l(/13/i,"").3Y()},3f:L(e,d){d=d||"";M(d+J+d).4e(d+e+d)>-1}});b.8Q(a1,{$3V:"L",1p:L(){P e=a.$A(22),d=J,f=e.6J();M L(){M d.4o(f||12,e.aW(a.$A(22)))}},2t:L(){P e=a.$A(22),d=J,f=e.6J();M L(g){M d.4o(f||12,$S([g||1a.42]).aW(e))}},2s:L(){P e=a.$A(22),d=J,f=e.6J();M 1a.6g(L(){M d.4o(d,e)},f||0)},dk:L(){P e=a.$A(22),d=J;M L(){M d.2s.4o(d,e)}},bf:L(){P e=a.$A(22),d=J,f=e.6J();M 1a.f4(L(){M d.4o(d,e)},f||0)}});P c=9l.f5.2L();a.V={8o:{bL:!!(1c.f6),eT:!!(1a.eS),9w:!!(1c.eG)},2B:L(){M"eH"1I 1a||(1a.aV&&1c 4b aV)}(),b0:c.3k(/b2.+b0|eI|eF|eE\\/|eB|eC|eD|eJ|eK|eQ|eR|b6(b1|aT)|eP|eO|eL |eM|eN|fb|fc|aY m(fB|1I)i|fC( fA)?|b3|p(fz|fw)\\/|fx|fy|fD|fE|fK|fL\\.(V|5z)|fJ|fI|fF (ce|b3)|fG|fH/)?13:U,4j:(1a.aY)?"5w":!!(1a.fv)?"2q":(1C!=1c.fu||12!=1a.fi)?"a4":(12!=1a.fj||!9l.fk)?"3x":"fh",3t:"",7Q:0,8R:c.3k(/b6(?:ad|aT|b1)/)?"bJ":(c.3k(/(?:fe|b2)/)||9l.8R.3k(/cn|4L|ff/i)||["fl"])[0].2L(),3N:1c.8n&&"aQ"==1c.8n.2L(),3S:L(){M(1c.8n&&"aQ"==1c.8n.2L())?1c.29:1c.84},5q:1a.5q||1a.fm||1a.fs||1a.ft||1a.fr||1C,8E:1a.8E||1a.bT||1a.bT||1a.fq||1a.eA||1a.fo||1C,1L:U,6i:L(){K(a.V.1L){M}a.V.1L=13;a.29=$S(1c.29);a.4L=$S(1a);(L(){a.V.6o={3Z:U,2Z:""};K(43 1c.29.1x.be!=="1C"){a.V.6o.3Z=13}17{P f="bW bV O 7u bQ".3W(" ");1B(P e=0,d=f.1v;e<d;e++){a.V.6o.2Z=f[e];K(43 1c.29.1x[a.V.6o.2Z+"fp"]!=="1C"){a.V.6o.3Z=13;1g}}}})();(L(){a.V.7n={3Z:U,2Z:""};K(43 1c.29.1x.fM!=="1C"){a.V.7n.3Z=13}17{P f="bW bV O 7u bQ".3W(" ");1B(P e=0,d=f.1v;e<d;e++){a.V.7n.2Z=f[e];K(43 1c.29.1x[a.V.7n.2Z+"ep"]!=="1C"){a.V.7n.3Z=13;1g}}}})();$S(1c).bk("4I")}};(L(){L d(){M!!(22.8N.aC)}a.V.3t=("5w"==a.V.4j)?!!(1c.9z)?dJ:!!(1a.dK)?dL:!!(1a.bN)?79:(a.V.8o.9w)?dH:((d())?dE:((1c.7a)?dC:62)):("2q"==a.V.4j)?!!(1a.dO||1a.dY)?c9:!!(1a.bK&&1a.dZ)?6:((1a.bK)?5:4):("3x"==a.V.4j)?((a.V.8o.bL)?((a.V.8o.9w)?dX:bn):dT):("a4"==a.V.4j)?!!(1c.9z)?62:!!1c.6j?dS:!!(1a.bN)?dR:((1c.7a)?dP:dU):"";a.V[a.V.4j]=a.V[a.V.4j+a.V.3t]=13;K(1a.bY){a.V.bY=13}a.V.7Q=(!a.V.2q)?0:(1c.c7)?1c.c7:L(){P e=0;K(a.V.3N){M 5}2c(a.V.3t){1e 4:e=6;1g;1e 5:e=7;1g;1e 6:e=8;1g;1e c9:e=9;1g}M e}()})();(L(){a.V.3a={3Z:U,8C:L(){M U},ab:L(){},c2:L(){},c0:"",c1:"",2Z:""};K(43 1c.c3!="1C"){a.V.3a.3Z=13}17{P f="3x cR o 7u dW".3W(" ");1B(P e=0,d=f.1v;e<d;e++){a.V.3a.2Z=f[e];K(43 1c[a.V.3a.2Z+"bH"]!="1C"){a.V.3a.3Z=13;1g}}}K(a.V.3a.3Z){a.V.3a.c0=a.V.3a.2Z+"dM";a.V.3a.c1=a.V.3a.2Z+"dG";a.V.3a.8C=L(){2c(J.2Z){1e"":M 1c.3a;1e"3x":M 1c.dF;2i:M 1c[J.2Z+"dD"]}};a.V.3a.ab=L(g){M(J.2Z==="")?g.aO():g[J.2Z+"dN"]()};a.V.3a.c2=L(g){M(J.2Z==="")?1c.c3():1c[J.2Z+"bH"]()}}})();a.3g={4U:L(d){M J.2M.3f(d," ")},2p:L(d){K(d&&!J.4U(d)){J.2M+=(J.2M?" ":"")+d}M J},4h:L(d){d=d||".*";J.2M=J.2M.2l(1k 4z("(^|\\\\s)"+d+"(?:\\\\s|$)"),"$1").3Y();M J},ez:L(d){M J.4U(d)?J.4h(d):J.2p(d)},1R:L(f){f=(f=="4R"&&J.7h)?"ax":f.3w();P d=12,e=12;K(J.7h){d=J.7h[f]}17{K(1c.9Q&&1c.9Q.bm){e=1c.9Q.bm(J,12);d=e?e.eo([f.5Y()]):12}}K(!d){d=J.1x[f]}K("1u"==f){M a.2C(d)?3L(d):1}K(/^(2m(8W|8T|8Z|8z)bI)|((2o|1X)(8W|8T|8Z|8z))$/.2j(f)){d=3m(d)?d:"1N"}M("1w"==d?12:d)},1F:L(f,d){2O{K("1u"==f){J.2x(d);M J}17{K("4R"==f){J.1x[("1C"===43(J.1x.ax))?"e2":"ax"]=d;M J}17{K(a.V.6o&&/be/.2j(f)){}}}J.1x[f.3w()]=d+(("5t"==a.3h(d)&&!$S(["2r","1j"]).52(f.3w()))?"1q":"")}36(g){}M J},19:L(e){1B(P d 1I e){J.1F(d,e[d])}M J},4n:L(){P d={};a.$A(22).2S(L(e){d[e]=J.1R(e)},J);M d},2x:L(h,e){e=e||U;h=3L(h);K(e){K(h==0){K("1J"!=J.1x.2w){J.1x.2w="1J"}}17{K("4k"!=J.1x.2w){J.1x.2w="4k"}}}K(a.V.2q){K(!J.7h||!J.7h.en){J.1x.1j=1}2O{P g=J.em.8x("bB.bD.bz");g.8C=(1!=h);g.1u=h*1W}36(d){J.1x.2K+=(1==h)?"":"ej:bB.bD.bz(8C=13,1u="+h*1W+")"}}J.1x.1u=h;M J},bC:L(d){1B(P e 1I d){J.es(e,""+d[e])}M J},1M:L(){M J.19({1U:"2Y",2w:"1J"})},21:L(){M J.19({1U:"28",2w:"4k"})},1Y:L(){M{Q:J.bE,R:J.ac}},77:L(){M{W:J.4q,Y:J.5B}},ex:L(){P d=J,e={W:0,Y:0};do{e.Y+=d.5B||0;e.W+=d.4q||0;d=d.2z}3C(d);M e},3n:L(){K(a.2C(1c.84.bb)){P d=J.bb(),f=$S(1c).77(),h=a.V.3S();M{W:d.W+f.y-h.ey,Y:d.Y+f.x-h.ew}}P g=J,e=t=0;do{e+=g.ev||0;t+=g.et||0;g=g.eu}3C(g&&!(/^(?:29|ei)$/i).2j(g.3O));M{W:t,Y:e}},4A:L(){P e=J.3n();P d=J.1Y();M{W:e.W,1d:e.W+d.R,Y:e.Y,1f:e.Y+d.Q}},6U:L(f){2O{J.7H=f}36(d){J.eh=f}M J},4w:L(){M(J.2z)?J.2z.3z(J):J},59:L(){a.$A(J.e7).2S(L(d){K(3==d.4M||8==d.4M){M}$S(d).59()});J.4w();J.9k();K(J.$4g){a.5c[J.$4g]=12;3p a.5c[J.$4g]}M 12},4D:L(g,e){e=e||"1d";P d=J.2I;("W"==e&&d)?J.aK(g,d):J.2b(g);M J},1P:L(f,e){P d=$S(f).4D(J,e);M J},bG:L(d){J.4D(d.2z.7p(J,d));M J},56:L(d){K(!(d=$S(d))){M U}M(J==d)?U:(J.52&&!(a.V.ca))?(J.52(d)):(J.b9)?!!(J.b9(d)&16):a.$A(J.2k(d.3O)).52(d)}};a.3g.6V=a.3g.1R;a.3g.dh=a.3g.19;K(!1a.3g){1a.3g=a.$F;K(a.V.4j.3x){1a.1c.3G("e8")}1a.3g.2F=(a.V.4j.3x)?1a["[[fN.2F]]"]:{}}a.8Q(1a.3g,{$3V:"93"});a.5R={1Y:L(){K(a.V.e5||a.V.ca){M{Q:1a.7r,R:1a.7q}}M{Q:a.V.3S().e3,R:a.V.3S().e4}},77:L(){M{x:1a.e9||a.V.3S().5B,y:1a.ea||a.V.3S().4q}},aG:L(){P d=J.1Y();M{Q:1s.3F(a.V.3S().ef,d.Q),R:1s.3F(a.V.3S().eg,d.R)}}};a.1T(1c,{$3V:"1c"});a.1T(1a,{$3V:"1a"});a.1T([a.3g,a.5R],{1b:L(g,e){P d=a.8Y(J.$4g),f=d[g];K(1C!=e&&1C==f){f=d[g]=e}M(a.2C(f)?f:12)},1A:L(f,e){P d=a.8Y(J.$4g);d[f]=e;M J},7t:L(e){P d=a.8Y(J.$4g);3p d[e];M J}});K(!(1a.9J&&1a.9J.2F&&1a.9J.2F.7a)){a.1T([a.3g,a.5R],{7a:L(d){M a.$A(J.6e("*")).2K(L(g){2O{M(1==g.4M&&g.2M.3f(d," "))}36(f){}})}})}a.1T([a.3g,a.5R],{ed:L(){M J.7a(22[0])},2k:L(){M J.6e(22[0])}});K(a.V.3a.3Z){a.3g.aO=L(){a.V.3a.ab(J)}}a.at={$3V:"42",1o:L(){K(J.b5){J.b5()}17{J.aZ=13}K(J.9o){J.9o()}17{J.hj=U}M J},9r:L(){P e,d;e=((/7g/i).2j(J.2X))?J.8O[0]:J;M(!a.2C(e))?{x:0,y:0}:{x:e.hk||e.hi+a.V.3S().5B,y:e.hh||e.hf+a.V.3S().4q}},4O:L(){P d=J.hg||J.hl;3C(d&&3==d.4M){d=d.2z}M d},4Q:L(){P e=12;2c(J.2X){1e"1Q":e=J.aX||J.hm;1g;1e"2D":e=J.aX||J.hr;1g;2i:M e}2O{3C(e&&3==e.4M){e=e.2z}}36(d){e=12}M e},5G:L(){K(!J.bZ&&J.8w!==1C){M(J.8w&1?1:(J.8w&2?3:(J.8w&4?2:0)))}M J.bZ}};a.9i="c4";a.9g="ho";a.8K="";K(!1c.c4){a.9i="he";a.9g="hd";a.8K="4Y"}a.1T([a.3g,a.5R],{1t:L(g,f){P i=("4I"==g)?U:13,e=J.1b("6T",{});e[g]=e[g]||{};K(e[g].5H(f.$6L)){M J}K(!f.$6L){f.$6L=1s.7O(1s.7J()*a.3I())}P d=J,h=L(j){M f.1V(d)};K("4I"==g){K(a.V.1L){f.1V(J);M J}}K(i){h=L(j){j=a.1T(j||1a.e,{$3V:"42"});M f.1V(d,$S(j))};J[a.9i](a.8K+g,h,U)}e[g][f.$6L]=h;M J},2E:L(g){P i=("4I"==g)?U:13,e=J.1b("6T");K(!e||!e[g]){M J}P h=e[g],f=22[1]||12;K(g&&!f){1B(P d 1I h){K(!h.5H(d)){5p}J.2E(g,d)}M J}f=("L"==a.3h(f))?f.$6L:f;K(!h.5H(f)){M J}K("4I"==g){i=U}K(i){J[a.9g](a.8K+g,h[f],U)}3p h[f];M J},bk:L(h,f){P m=("4I"==h)?U:13,l=J,j;K(!m){P g=J.1b("6T");K(!g||!g[h]){M J}P i=g[h];1B(P d 1I i){K(!i.5H(d)){5p}i[d].1V(J)}M J}K(l===1c&&1c.8H&&!l.bj){l=1c.84}K(1c.8H){j=1c.8H(h);j.gZ(f,13,13)}17{j=1c.h0();j.h5=h}K(1c.8H){l.bj(j)}17{l.hb("4Y"+f,j)}M j},9k:L(){P d=J.1b("6T");K(!d){M J}1B(P e 1I d){J.2E(e)}J.7t("6T");M J}});(L(){K("6a"===1c.6j){M a.V.6i.2s(1)}K(a.V.3x&&a.V.3t<bn){(L(){($S(["ha","6a"]).52(1c.6j))?a.V.6i():22.8N.2s(50)})()}17{K(a.V.2q&&a.V.7Q<9&&1a==W){(L(){(a.$2O(L(){a.V.3S().h7("Y");M 13}))?a.V.6i():22.8N.2s(50)})()}17{$S(1c).1t("h8",a.V.6i);$S(1a).1t("2y",a.V.6i)}}})();a.4l=L(){P h=12,e=a.$A(22);K("7M"==a.3h(e[0])){h=e.6J()}P d=L(){1B(P l 1I J){J[l]=a.3D(J[l])}K(J.4c.$3o){J.$3o={};P o=J.4c.$3o;1B(P n 1I o){P j=o[n];2c(a.3h(j)){1e"L":J.$3o[n]=a.4l.ba(J,j);1g;1e"bh":J.$3o[n]=a.3D(j);1g;1e"5h":J.$3o[n]=a.3D(j);1g}}}P i=(J.3M)?J.3M.4o(J,22):J;3p J.aC;M i};K(!d.2F.3M){d.2F.3M=a.$F}K(h){P g=L(){};g.2F=h.2F;d.2F=1k g;d.$3o={};1B(P f 1I h.2F){d.$3o[f]=h.2F[f]}}17{d.$3o=12}d.4c=a.4l;d.2F.4c=d;a.1T(d.2F,e[0]);a.1T(d,{$3V:"7M"});M d};b.4l.ba=L(d,e){M L(){P g=J.aC;P f=e.4o(d,22);M f}};a.4L=$S(1a);a.2G=$S(1c)})();(L(b){K(!b){6G"7F 7D 7E";M}K(b.1S){M}P a=b.$;b.1S=1k b.4l({N:{46:60,31:8l,4i:L(c){M-(1s.ak(1s.al*c)-1)/2},6h:b.$F,44:b.$F,70:b.$F,bx:b.$F,6W:U,cc:13},2R:12,3M:L(d,c){J.el=a(d);J.N=b.1T(J.N,c);J.4B=U},1z:L(c){J.2R=c;J.1D=0;J.hA=0;J.9T=b.3I();J.bs=J.9T+J.N.31;J.a8=J.9Y.1p(J);J.N.6h.1V();K(!J.N.6W&&b.V.5q){J.4B=b.V.5q.1V(1a,J.a8)}17{J.4B=J.9Y.1p(J).bf(1s.5i(96/J.N.46))}M J},9R:L(){K(J.4B){K(!J.N.6W&&b.V.5q&&b.V.8E){b.V.8E.1V(1a,J.4B)}17{hB(J.4B)}J.4B=U}},1o:L(c){c=b.2C(c)?c:U;J.9R();K(c){J.6b(1);J.N.44.2s(10)}M J},6R:L(e,d,c){M(d-e)*c+e},9Y:L(){P d=b.3I();K(d>=J.bs){J.9R();J.6b(1);J.N.44.2s(10);M J}P c=J.N.4i((d-J.9T)/J.N.31);K(!J.N.6W&&b.V.5q){J.4B=b.V.5q.1V(1a,J.a8)}J.6b(c)},6b:L(c){P d={};1B(P e 1I J.2R){K("1u"===e){d[e]=1s.5i(J.6R(J.2R[e][0],J.2R[e][1],c)*1W)/1W}17{d[e]=J.6R(J.2R[e][0],J.2R[e][1],c);K(J.N.cc){d[e]=1s.5i(d[e])}}}J.N.70(d);J.6x(d);J.N.bx(d)},6x:L(c){M J.el.19(c)}});b.1S.3e={4v:L(c){M c},by:L(c){M-(1s.ak(1s.al*c)-1)/2},hE:L(c){M 1-b.1S.3e.by(1-c)},bw:L(c){M 1s.6n(2,8*(c-1))},gX:L(c){M 1-b.1S.3e.bw(1-c)},bv:L(c){M 1s.6n(c,2)},gc:L(c){M 1-b.1S.3e.bv(1-c)},bt:L(c){M 1s.6n(c,3)},g9:L(c){M 1-b.1S.3e.bt(1-c)},bu:L(d,c){c=c||1.g7;M 1s.6n(d,2)*((c+1)*d-c)},g8:L(d,c){M 1-b.1S.3e.bu(1-d)},bA:L(d,c){c=c||[];M 1s.6n(2,10*--d)*1s.ak(20*d*1s.al*(c[0]||1)/3)},gl:L(d,c){M 1-b.1S.3e.bA(1-d,c)},bF:L(e){1B(P d=0,c=1;1;d+=c,c/=2){K(e>=(7-4*d)/11){M c*c-1s.6n((11-6*d-11*e)/4,2)}}},gf:L(c){M 1-b.1S.3e.bF(1-c)},2Y:L(c){M 0}}})(63);(L(a){K(!a){6G"7F 7D 7E";M}K(!a.1S){6G"7F.1S 7D 7E";M}K(a.1S.aa){M}P b=a.$;a.1S.aa=1k a.4l(a.1S,{N:{5K:"7k"},3M:L(d,c){J.el=$S(d);J.N=a.1T(J.$3o.N,J.N);J.$3o.3M(d,c);J.4p=J.el.1b("5o:4p");J.4p=J.4p||a.$1k("3c").19(a.1T(J.el.4n("1X-W","1X-Y","1X-1f","1X-1d","1m","W","4R"),{2n:"1J"})).bG(J.el);J.el.1A("5o:4p",J.4p).19({1X:0})},7k:L(){J.1X="1X-W";J.4s="R";J.6k=J.el.ac},a6:L(c){J.1X="1X-"+(c||"Y");J.4s="Q";J.6k=J.el.bE},1f:L(){J.a6()},Y:L(){J.a6("1f")},1z:L(e,h){J[h||J.N.5K]();P g=J.el.1R(J.1X).1G(),f=J.4p.1R(J.4s).1G(),c={},i={},d;c[J.1X]=[g,0],c[J.4s]=[0,J.6k],i[J.1X]=[g,-J.6k],i[J.4s]=[f,0];2c(e){1e"1I":d=c;1g;1e"am":d=i;1g;1e"8G":d=(0==f)?c:i;1g}J.$3o.1z(d);M J},6x:L(c){J.el.1F(J.1X,c[J.1X]);J.4p.1F(J.4s,c[J.4s]);M J},g5:L(c){M J.1z("1I",c)},g4:L(c){M J.1z("am",c)},1M:L(d){J[d||J.N.5K]();P c={};c[J.4s]=0,c[J.1X]=-J.6k;M J.6x(c)},21:L(d){J[d||J.N.5K]();P c={};c[J.4s]=J.6k,c[J.1X]=0;M J.6x(c)},8G:L(c){M J.1z("8G",c)}})})(63);(L(b){K(!b){6G"7F 7D 7E";M}K(b.7x){M}P a=b.$;b.7x=1k b.4l(b.1S,{3M:L(c,d){J.an=c;J.N=b.1T(J.N,d);J.4B=U},1z:L(c){J.$3o.1z([]);J.bq=c;M J},6b:L(c){1B(P d=0;d<J.an.1v;d++){J.el=a(J.an[d]);J.2R=J.bq[d];J.$3o.6b(c)}}})})(63);P 4E=(L(g){P i=g.$;g.$7Z=L(j){$S(j).1o();M U};P c={3t:"cV.0.26",N:{},83:{1u:50,4T:U,a0:40,46:25,3u:4J,3K:4J,68:15,3d:"1f",6O:"W",c6:"9I",69:U,9B:13,66:U,ap:U,x:-1,y:-1,7U:U,9L:U,2h:"2y",85:13,5b:"W",8j:"2e",bM:13,dr:8r,dl:62,2A:"",1n:13,3T:"9p",53:"9x",7z:75,7d:"fQ",5l:13,8t:"dA 1j..",7B:75,9D:-1,9H:-1,3i:"1y",8X:60,3P:"8p",7A:8r,bR:13,bS:U,47:"",bO:13,6B:U,2W:U,3Q:U},dz:$S([/^(1u)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1u-aw)(\\s+)?:(\\s+)?(13|U)$/i,/^(85\\-7C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(46)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1j\\-Q)(\\s+)?:(\\s+)?(\\d+)(1q)?/i,/^(1j\\-R)(\\s+)?:(\\s+)?(\\d+)(1q)?/i,/^(1j\\-fV)(\\s+)?:(\\s+)?(\\d+)(1q)?/i,/^(1j\\-1m)(\\s+)?:(\\s+)?(1f|Y|W|1d|9v|5j|#([a-7K-7P\\-:\\.]+))$/i,/^(1j\\-cA)(\\s+)?:(\\s+)?(1f|Y|W|1d|5y)$/i,/^(1j\\-1a\\-8d)(\\s+)?:(\\s+)?(9I|b8|U)$/i,/^(dq\\-5K)(\\s+)?:(\\s+)?(13|U)$/i,/^(dj\\-4Y\\-1y)(\\s+)?:(\\s+)?(13|U)$/i,/^(fW\\-21\\-1j)(\\s+)?:(\\s+)?(13|U)$/i,/^(g2\\-1m)(\\s+)?:(\\s+)?(13|U)$/i,/^(x)(\\s+)?:(\\s+)?([\\d.]+)(1q)?/i,/^(y)(\\s+)?:(\\s+)?([\\d.]+)(1q)?/i,/^(1y\\-8q\\-6d)(\\s+)?:(\\s+)?(13|U)$/i,/^(1y\\-8q\\-g3)(\\s+)?:(\\s+)?(13|U)$/i,/^(9C\\-4Y)(\\s+)?:(\\s+)?(2y|1y|1Q)$/i,/^(1y\\-8q\\-9C)(\\s+)?:(\\s+)?(13|U)$/i,/^(85)(\\s+)?:(\\s+)?(13|U)$/i,/^(21\\-2e)(\\s+)?:(\\s+)?(13|U|W|1d)$/i,/^(2e\\-g1)(\\s+)?:(\\s+)?(2e|#([a-7K-7P\\-:\\.]+))$/i,/^(1j\\-5k)(\\s+)?:(\\s+)?(13|U)$/i,/^(1j\\-5k\\-1I\\-7C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1j\\-5k\\-am\\-7C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(2A)(\\s+)?:(\\s+)?([a-7K-7P\\-:\\.]+)$/i,/^(1n)(\\s+)?:(\\s+)?(13|U)/i,/^(1n\\-fX)(\\s+)?:(\\s+)?([^;]*)$/i,/^(1n\\-1u)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1n\\-1m)(\\s+)?:(\\s+)?(9x|as|aq|bl|br|bc)/i,/^(21\\-5Q)(\\s+)?:(\\s+)?(13|U)$/i,/^(5Q\\-fY)(\\s+)?:(\\s+)?([^;]*)$/i,/^(5Q\\-1u)(\\s+)?:(\\s+)?(\\d+)$/i,/^(5Q\\-1m\\-x)(\\s+)?:(\\s+)?(\\d+)(1q)?/i,/^(5Q\\-1m\\-y)(\\s+)?:(\\s+)?(\\d+)(1q)?/i,/^(1K\\-bd)(\\s+)?:(\\s+)?(1y|1Q)$/i,/^(3v\\-bd)(\\s+)?:(\\s+)?(1y|1Q)$/i,/^(3v\\-1Q\\-gm)(\\s+)?:(\\s+)?(\\d+)$/i,/^(3v\\-8d)(\\s+)?:(\\s+)?(8p|5k|7w|U)$/i,/^(3v\\-8d\\-7C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(3v\\-7M)(\\s+)?:(\\s+)?([a-7K-7P\\-:\\.]+)$/i,/^(4d\\-1j\\-1a)(\\s+)?:(\\s+)?(13|U)$/i,/^(bi\\-3v\\-gM)(\\s+)?:(\\s+)?(13|U)$/i,/^(bi\\-3v\\-9O)(\\s+)?:(\\s+)?(13|U)$/i,/^(dp\\-55)(\\s+)?:(\\s+)?(13|U)$/i,/^(1f\\-1y)(\\s+)?:(\\s+)?(13|U)$/i,/^(dm\\-1j)(\\s+)?:(\\s+)?(13|U)$/i]),3U:$S([]),dv:L(l){P k=/(1y|1Q)/i;1B(P j=0;j<c.3U.1v;j++){K(c.3U[j].3r&&!c.3U[j].6H){c.3U[j].65()}17{K(k.2j(c.3U[j].N.2h)&&c.3U[j].6p){c.3U[j].6p=l}}}},1o:L(j){P e=$S([]);K(j){K((j=$S(j))&&j.1j){e.4a(j)}17{M U}}17{e=$S(g.$A(g.29.2k("A")).2K(L(k){M((" "+k.2M+" ").3k(/\\db\\s/)&&k.1j)}))}e.2S(L(k){k.1j&&k.1j.1o()},J)},1z:L(e){K(0==22.1v){c.73();M 13}e=$S(e);K(!e||!(" "+e.2M+" ").3k(/\\s(6c|4E)\\s/)){M U}K(!e.1j){P j=12;3C(j=e.2I){K(j.3O=="8i"){1g}e.3z(j)}3C(j=e.gN){K(j.3O=="8i"){1g}e.3z(j)}K(!e.2I||e.2I.3O!="8i"){6G"gL gK 9p"}c.3U.4a(1k c.1j(e,(22.1v>1)?22[1]:1C))}17{e.1j.1z()}},2N:L(l,e,k,j){K((l=$S(l))&&l.1j){l.1j.2N(e,k,j);M 13}M U},73:L(){g.$A(1a.1c.6e("A")).2S(L(e){K(e.2M.3f("6c"," ")){K(c.1o(e)){c.1z.2s(1W,e)}17{c.1z(e)}}},J)},21:L(e){K((e=$S(e))&&e.1j){M e.1j.6d()}M U},gH:L(e){K((e=$S(e))&&e.1j){M{x:e.1j.N.x,y:e.1j.N.y}}},cd:L(k){P j,e;j="";1B(e=0;e<k.1v;e++){j+=7N.cJ(14^k.cI(e))}M j}};c.6u=L(){J.3M.4o(J,22)};c.6u.2F={3M:L(e){J.cb=12;J.5f=12;J.9b=J.bp.2t(J);J.8g=12;J.Q=0;J.R=0;J.2m={Y:0,1f:0,W:0,1d:0};J.2o={Y:0,1f:0,W:0,1d:0};J.1L=U;J.5e=12;K("78"==g.3h(e)){J.5e=g.$1k("5a").19({1m:"1O",W:"-a2",Q:"bo",R:"bo",2n:"1J"}).1P(g.29);J.X=g.$1k("2T").1P(J.5e);J.7y();J.X.1Z=e}17{J.X=$S(e);J.7y();J.X.1Z=e.1Z}},4f:L(){K(J.5e){K(J.X.2z==J.5e){J.X.4w().19({1m:"6y",W:"1w"})}J.5e.59();J.5e=12}},bp:L(j){K(j){$S(j).1o()}K(J.cb){J.4f();J.cb.1V(J,U)}J.5V()},7y:L(e){J.5f=12;K(e==13||!(J.X.1Z&&(J.X.6a||J.X.6j=="6a"))){J.5f=L(j){K(j){$S(j).1o()}K(J.1L){M}J.1L=13;J.6M();K(J.cb){J.4f();J.cb.1V()}}.2t(J);J.X.1t("2y",J.5f);$S(["7X","7W"]).2S(L(j){J.X.1t(j,J.9b)},J)}17{J.1L=13}},2N:L(j,k){J.5V();P e=g.$1k("a",{2a:j});K(13!==k&&J.X.1Z.3f(e.2a)&&0!==J.X.Q){J.1L=13}17{J.7y(13);J.X.1Z=j}e=12},6M:L(){J.Q=J.X.Q;J.R=J.X.R;K(J.Q==0&&J.R==0&&g.V.3x){J.Q=J.X.8m;J.R=J.X.ds}$S(["8Z","8z","8W","8T"]).2S(L(j){J.2o[j.2L()]=J.X.6V("2o"+j).1G();J.2m[j.2L()]=J.X.6V("2m"+j+"bI").1G()},J);K(g.V.5w||(g.V.2q&&!g.V.3N)){J.Q-=J.2o.Y+J.2o.1f;J.R-=J.2o.W+J.2o.1d}},9t:L(){P e=12;e=J.X.4A();M{W:e.W+J.2m.W,1d:e.1d-J.2m.1d,Y:e.Y+J.2m.Y,1f:e.1f-J.2m.1f}},gP:L(){K(J.8g){J.8g.1Z=J.X.1Z;J.X=12;J.X=J.8g}},2y:L(e){K(J.1L){K(!J.Q){(L(){J.6M();J.4f();e.1V()}).1p(J).2s(1)}17{J.4f();e.1V()}}17{J.cb=e}},5V:L(){K(J.5f){J.X.2E("2y",J.5f)}$S(["7X","7W"]).2S(L(e){J.X.2E(e,J.9b)},J);J.5f=12;J.cb=12;J.Q=12;J.1L=U;J.gW=U}};c.1j=L(){J.9S.4o(J,22)};c.1j.2F={9S:L(k,j){P e={};J.4y=-1;J.3r=U;J.7V=0;J.7Y=0;J.6H=U;J.4m=12;J.9M=$S(1a).1b("c5:8e")||$S(1a).1b("c5:8e",g.$1k("5a").19({1m:"1O",W:-6Z,Q:10,R:10,2n:"1J"}).1P(g.29));J.N=g.3D(c.83);K(k){J.c=$S(k)}J.5E=("5a"==J.c.3O.2L());e=g.1T(e,J.4W());e=g.1T(e,J.4W(J.c.3A));K(j){e=g.1T(e,J.4W(j))}K(e.69&&1C===e.66){e.66=13}g.1T(J.N,e);J.N.2A+="";K("2y"==J.N.2h&&g.2C(J.N.9A)&&"13"==J.N.9A.5v()){J.N.2h="1y"}K(g.2C(J.N.9P)&&J.N.9P!=J.N.3i){J.N.3i=J.N.9P}K(g.V.2B){J.N.3i="1y";J.N.2h=("1Q"==J.N.2h)?"1y":J.N.2h;J.N.9L=U;K(1a.3R.R<=gQ){J.N.3d="5j"}}K(J.N.3Q){J.3r=U;J.N.7U=13;J.N.1n=U}K(k){J.82=12;J.6Y=J.9E.2t(J);J.9F=J.6E.2t(J);J.aE=J.21.1p(J,U);J.bX=J.6X.1p(J);J.4x=J.6t.2t(J);K(g.V.2B){K(!J.N.3Q){J.c.1t("7l",J.6Y);J.c.1t("4K",J.9F)}17{J.c.19({"-3x-gR-gS":"2Y","-3x-7g-gG":"2Y","-3x-gF-gu-7G":"ct"});J.c.1t("1y",L(l){l.9o()})}}17{K(!J.5E){J.c.1t("1y",L(m){P l=m.5G();K(3==l){M 13}$S(m).1o();K(!g.V.2q){J.bU()}M U})}J.c.1t("9E",J.6Y);J.c.1t("6E",J.9F);K("1Q"==J.N.2h){J.c.1t("1Q",J.6Y)}}J.c.di="4Y";J.c.1x.gs="2Y";J.c.1t("gr",g.$7Z);K(!J.5E){J.c.19({1m:"4S",1U:"7I-28",go:"2Y",8D:"0",45:"gp"});K(g.V.cC||g.V.5w){J.c.19({1U:"28"})}K(J.c.1R("9U")=="5y"){J.c.19({1X:"1w 1w"})}}J.c.1j=J}17{J.N.2h="2y"}K(!J.N.2W){J.c.1t("8F",g.$7Z)}K("2y"==J.N.2h){J.6S()}17{K(""!=J.c.1H){J.98(13)}}},6S:L(){P l,o,n,m,j;K(!J.18){J.18=1k c.6u(J.c.2I);J.1r=1k c.6u(J.c.2a)}17{J.1r.2N(J.c.2a)}K(!J.1i){J.1i={X:$S(1c.3G("3c"))[(J.5E)?"4h":"2p"]("gq").19({2n:"1J",2r:J.N.3d=="5j"?1W:gw,W:"-6Q",1m:"1O",Q:J.N.3u+"1q",R:J.N.3K+"1q"}),1j:J,49:"1N",86:0,87:0};K(!(g.V.gx&&g.V.7Q<9)){2c(J.N.c6){1e"9I":J.1i.X.2p("gB");1g;1e"b8":J.1i.X.2p("gz");1g;2i:1g}}J.1i.1M=L(){K(J.X.1x.W!="-6Q"&&J.1j.1l&&!J.1j.1l.4V){J.49=J.X.1x.W;J.X.1x.W="-6Q"}K(J.X.2z===g.29){J.X.1P(J.1j.9M)}};J.1i.df=J.1i.1M.1p(J.1i);K(g.V.3l){l=$S(1c.3G("ai"));l.1Z="a5:\'\'";l.19({Y:"1N",W:"1N",1m:"1O","z-23":-1}).gA=0;J.1i.9G=J.1i.X.2b(l)}J.1i.51=$S(1c.3G("3c")).2p("e6").19({1m:"4S",2r:10,Y:"1N",W:"1N",2o:"gy"}).1M();o=g.$1k("3c",{},{2n:"1J"});o.2b(J.1r.X);J.1r.X.19({2o:"1N",1X:"1N",2m:"1N",Q:"1w",R:"1w"});K(J.N.5b=="1d"){J.1i.X.2b(o);J.1i.X.2b(J.1i.51)}17{J.1i.X.2b(J.1i.51);J.1i.X.2b(o)}K(J.N.3d=="9v"&&$S(J.c.1H+"-9O")){$S(J.c.1H+"-9O").2b(J.1i.X)}17{K(J.N.3d.3f("#")){P q=J.N.3d.2l(/^#/,"");K($S(q)){$S(q).2b(J.1i.X)}}17{K(J.N.3d=="5j"){J.c.2b(J.1i.X)}17{J.1i.X.1P(J.9M)}}}K("1C"!==43(j)){J.1i.g=$S(1c.3G("5a")).19({7G:j[1],cF:j[2]+"1q",cG:j[3],cw:"cv",1m:"1O","z-23":10+(""+(J.1r.X.1R("z-23")||0)).1G(),Q:j[5],9U:j[4],Y:"1N"}).6U(c.cd(j[0])).1P(J.1i.X,((1s.7O(1s.7J()*cH)+1)%2)?"W":"1d")}}K(J.N.5b!="U"&&J.N.5b!=U){P k=J.1i.51;k.1M();3C(n=k.2I){k.3z(n)}K(J.N.8j=="2e"&&""!=J.c.2e){k.2b(1c.5r(J.c.2e));k.21()}17{K(J.N.8j.3f("#")){P q=J.N.8j.2l(/^#/,"");K($S(q)){k.6U($S(q).7H);k.21()}}}}17{J.1i.51.1M()}J.c.ae=J.c.2e;J.c.2e="";J.18.2y(J.c8.1p(J))},c8:L(e){K(!e&&e!==1C){M}K(!J.N.4T){J.18.X.2x(1)}K(!J.5E){J.c.19({Q:J.18.Q+"1q"})}K(J.N.5l){J.6K=6g(J.bX,8r)}K(J.N.2A!=""&&$S(J.N.2A)){J.bP()}K(J.c.1H!=""){J.98()}J.1r.2y(J.9q.1p(J))},9q:L(k){P j,e;K(!k&&k!==1C){5d(J.6K);K(J.N.5l&&J.2u){J.2u.1M()}M}K(!J.18||!J.1r){M}e=J.18.X.4A();K(e.1d==e.W){J.9q.1p(J).2s(8l);M}K(J.18.Q==0&&g.V.2q){J.18.6M();J.1r.6M();!J.5E&&J.c.19({Q:J.18.Q+"1q"})}j=J.1i.51.1Y();K(J.N.bO||J.N.6B){K((J.1r.Q<J.N.3u)||J.N.6B){J.N.3u=J.1r.Q;J.1i.X.19({Q:J.N.3u});j=J.1i.51.1Y()}K((J.1r.R<J.N.3K)||J.N.6B){J.N.3K=J.1r.R+j.R}}2c(J.N.3d){1e"9v":1g;1e"1f":J.1i.X.1x.Y=e.1f+J.N.68+"1q";1g;1e"Y":J.1i.X.1x.Y=e.Y-J.N.68-J.N.3u+"1q";1g;1e"W":J.1i.49=e.W-(J.N.68+J.N.3K)+"1q";1g;1e"1d":J.1i.49=e.1d+J.N.68+"1q";1g;1e"5j":J.1i.X.19({Y:"1N",R:J.18.R+"1q",Q:J.18.Q+"1q"});J.N.3u=J.18.Q;J.N.3K=J.18.R;J.1i.49="1N";j=J.1i.51.1Y();1g}K(J.N.5b=="1d"){J.1r.X.2z.1x.R=(J.N.3K-j.R)+"1q"}J.1i.X.19({R:J.N.3K+"1q",Q:J.N.3u+"1q"}).2x(1);K(g.V.3l&&J.1i.9G){J.1i.9G.19({Q:J.N.3u+"1q",R:J.N.3K+"1q"})}K(J.N.3d=="1f"||J.N.3d=="Y"){K(J.N.6O=="5y"){J.1i.49=(e.1d-(e.1d-e.W)/2-J.N.3K/2)+"1q"}17{K(J.N.6O=="1d"){J.1i.49=(e.1d-J.N.3K)+"1q"}17{J.1i.49=e.W+"1q"}}}17{K(J.N.3d=="W"||J.N.3d=="1d"){K(J.N.6O=="5y"){J.1i.X.1x.Y=(e.1f-(e.1f-e.Y)/2-J.N.3u/2)+"1q"}17{K(J.N.6O=="1f"){J.1i.X.1x.Y=(e.1f-J.N.3u)+"1q"}17{J.1i.X.1x.Y=e.Y+"1q"}}}}J.1i.86=3m(J.1i.49,10);J.1i.87=3m(J.1i.X.1x.Y,10);J.81=J.N.3K-j.R;K(J.1i.g){J.1i.g.19({W:J.N.5b=="1d"?0:"1w",1d:J.N.5b=="1d"?"1w":0})}J.1r.X.19({1m:"4S",5T:"1N",2o:"1N",Y:"1N",W:"1N"});J.dy();K(J.N.66){K(J.N.x==-1){J.N.x=J.18.Q/2}K(J.N.y==-1){J.N.y=J.18.R/2}J.21()}17{K(J.N.bM){J.3s=1k g.1S(J.1i.X,{6W:"bJ"===g.V.8R})}J.1i.X.19({W:"-6Q"})}K(J.N.5l&&J.2u){J.2u.1M()}K(g.V.2B){J.c.1t("aJ",J.4x);J.c.1t("4K",J.4x)}17{J.c.1t("9c",J.4x);J.c.1t("2D",J.4x)}J.6s();K(!J.N.3Q&&(!J.N.7U||"1y"==J.N.2h)){J.3r=13}K("1y"==J.N.2h&&J.6p){J.6t(J.6p)}K(J.6H){J.6d()}J.4y=g.3I()},6s:L(){P m=/as|br/i,e=/bl|br|bc/i,j=/bc|aq/i,l=12;J.67=1C;K(!J.N.1n){K(J.1n){J.1n.59();J.1n=1C}M}K(!J.1n){J.1n=$S(1c.3G("3c")).2p(J.N.7d).19({1U:"28",2n:"1J",1m:"1O",2w:"1J","z-23":1});K(J.N.3T!=""){J.1n.2b(1c.5r(J.N.3T))}J.c.2b(J.1n)}17{K(J.N.3T!=""){l=J.1n[(J.1n.2I)?"7p":"2b"](1c.5r(J.N.3T),J.1n.2I);l=12}}J.1n.19({Y:"1w",1f:"1w",W:"1w",1d:"1w",1U:"28",1u:(J.N.7z/1W),"3F-Q":(J.18.Q-4)});P k=J.1n.1Y();J.1n.1F((m.2j(J.N.53)?"1f":"Y"),(j.2j(J.N.53)?(J.18.Q-k.Q)/2:2)).1F((e.2j(J.N.53)?"1d":"W"),2);J.67=13;J.1n.21()},6X:L(){K(J.1r.1L){M}J.2u=$S(1c.3G("3c")).2p("gd").2x(J.N.7B/1W).19({1U:"28",2n:"1J",1m:"1O",2w:"1J","z-23":20,"3F-Q":(J.18.Q-4)});J.2u.2b(1c.5r(J.N.8t));J.c.2b(J.2u);P e=J.2u.1Y();J.2u.19({Y:(J.N.9D==-1?((J.18.Q-e.Q)/2):(J.N.9D))+"1q",W:(J.N.9H==-1?((J.18.R-e.R)/2):(J.N.9H))+"1q"});J.2u.21()},bP:L(){$S(J.N.2A).aR=$S(J.N.2A).2z;$S(J.N.2A).b7=$S(J.N.2A).hF;J.c.2b($S(J.N.2A));$S(J.N.2A).19({1m:"1O",Y:"1N",W:"1N",Q:J.18.Q+"1q",R:J.18.R+"1q",2r:15}).21();K(g.V.2q){J.c.88=J.c.2b($S(1c.3G("3c")).19({1m:"1O",Y:"1N",W:"1N",Q:J.18.Q+"1q",R:J.18.R+"1q",2r:14,48:"#hD"}).2x(0.hw))}g.$A($S(J.N.2A).6e("A")).2S(L(j){P k=j.hs.3W(","),e=12;$S(j).19({1m:"1O",Y:k[0]+"1q",W:k[1]+"1q",Q:(k[2]-k[0])+"1q",R:(k[3]-k[1])+"1q",2r:15}).21();K(j.4U("2Q")){K(e=j.1b("1K")){e.2v=J.N.2A}17{j.3A+=";2v: "+J.N.2A+";"}}},J)},98:L(k){P e,l,j=1k 4z("1j\\\\-1H(\\\\s+)?:(\\\\s+)?"+J.c.1H+"($|;)");J.3v=$S([]);g.$A(1c.6e("A")).2S(L(n){K(j.2j(n.3A)){K(!$S(n).6v){n.6v=L(o){K(!g.V.2q){J.bU()}$S(o).1o();M U};n.1t("1y",n.6v)}K(k){M}P m=g.$1k("a",{2a:n.6C});(J.N.47!="")&&$S(n)[J.1r.X.1Z.3f(n.2a)&&J.18.X.1Z.3f(m.2a)?"2p":"4h"](J.N.47);K(J.1r.X.1Z.3f(n.2a)&&J.18.X.1Z.3f(m.2a)){J.82=n}m=12;K(!n.5u){n.5u=L(q,p){p=q.h9||q.4O();2O{3C("a"!=p.3O.2L()){p=p.2z}}36(o){M}K(p.56(q.4Q())){M}K(q.2X=="2D"){K(J.6F){5d(J.6F)}J.6F=U;M}K(p.2e!=""){J.c.2e=p.2e}K(q.2X=="1Q"){J.6F=6g(J.2N.1p(J,p.2a,p.6C,p.3A,p),J.N.8X)}17{J.2N(p.2a,p.6C,p.3A,p)}}.2t(J);n.1t(J.N.3i,n.5u);K(J.N.3i=="1Q"){n.1t("2D",n.5u)}}n.19({8D:"0",1U:"7I-28"});K(J.N.bR){l=1k cf();l.1Z=n.6C}K(J.N.bS){e=1k cf();e.1Z=n.2a}J.3v.4a(n)}},J)},1o:L(j){2O{J.65();K(g.V.2B){J.c.2E("aJ",J.4x);J.c.2E("4K",J.4x)}17{J.c.2E("9c",J.4x);J.c.2E("2D",J.4x)}K(1C===j&&J.1l){J.1l.X.1M()}K(J.3s){J.3s.1o()}J.2g=12;J.3r=U;K(J.3v!==1C){J.3v.2S(L(e){K(J.N.47!=""){e.4h(J.N.47)}K(1C===j){e.2E(J.N.3i,e.5u);K(J.N.3i=="1Q"){e.2E("2D",e.5u)}e.5u=12;e.2E("1y",e.6v);e.6v=12}},J)}K(J.N.2A!=""&&$S(J.N.2A)){$S(J.N.2A).1M();$S(J.N.2A).aR.aK($S(J.N.2A),$S(J.N.2A).b7);K(J.c.88){J.c.3z(J.c.88)}}J.1r.5V();K(J.N.4T){J.c.4h("7R");J.18.X.2x(1)}J.3s=12;K(J.2u){J.c.3z(J.2u)}K(J.1n){J.1n.1M()}K(1C===j){K(J.1n){J.c.3z(J.1n)}J.1n=12;J.18.5V();(J.1l&&J.1l.X)&&J.c.3z(J.1l.X);(J.1i&&J.1i.X)&&J.1i.X.2z.3z(J.1i.X);J.1l=12;J.1i=12;J.1r=12;J.18=12;K(!J.N.2W){J.c.2E("8F",g.$7Z)}}K(J.6K){5d(J.6K);J.6K=12}J.4m=12;J.c.88=12;J.2u=12;K(J.c.2e==""){J.c.2e=J.c.ae}J.4y=-1}36(k){}},1z:L(e){K(J.4y!=-1){M}J.9S(U,e)},2N:L(y,o,j,x){P k,B,e,m,u,l,D=12,w=12;P n,p,A,v,r,s,E,C,q;x=x||12;K(g.3I()-J.4y<4J||J.4y==-1||J.9a){k=4J-g.3I()+J.4y;K(J.4y==-1){k=4J}J.6F=6g(J.2N.1p(J,y,o,j,x),k);M}K(x&&J.82==x){M}17{J.82=x}B=L(F){K(1C!=y){J.c.2a=y}K(1C===j){j=""}K(J.N.ap){j="x: "+J.N.x+"; y: "+J.N.y+"; "+j}K(1C!=o){J.18.2N(o);K(F!==1C){J.18.2y(F)}}};w=J.c.1b("1K");K(w&&w.1L){w.2J(12,13);w.1D="7m";D=L(){w.1D="41";w.2N(J.c.2a,12,j)}.1p(J)}m=J.18.Q;u=J.18.R;J.1o(13);K(J.N.3P!="U"){J.9a=13;P z=$S(J.c.6I(13)).19({1m:"1O",W:"-6Q"});J.c.2z.2b(z);l=1k c.6u(z.2I);l.2N(o);K("7w"==J.N.3P){q=J.c.2a;n=J.3v.2K(L(F){M F.2a.3f(q)});n=(n[0])?$S(n[0].2k("2T")[0]||n[0]):J.18.X;p=J.3v.2K(L(F){M F.2a.3f(y)});p=(p[0])?$S(p[0].2k("2T")[0]||p[0]):12;K(12==p){p=J.18.X;n=J.18.X}v=J.18.X.3n(),r=n.3n(),s=p.3n(),C=n.1Y(),E=p.1Y()}e=L(){P F={},H={},G={},I=12;K("7w"==J.N.3P){F.Q=[m,C.Q];F.R=[u,C.R];F.W=[v.W,r.W];F.Y=[v.Y,r.Y];H.Q=[E.Q,l.Q];H.R=[E.R,l.R];H.W=[s.W,v.W];z.2x(0).19({R:0,Q:l.Q,1m:"4S"});H.Y=[s.Y,z.3n().Y];G.Q=[m,l.Q];G.R=[u,l.R];l.X.1P(g.29).19({1m:"1O","z-23":aA,Y:H.Y[0],W:H.W[0],Q:H.Q[0],R:H.R[0]});I=$S(J.c.2I.6I(U)).1P(g.29).19({1m:"1O","z-23":aD,Y:F.Y[0],W:F.W[0],2w:"4k"});$S(J.c.2I).19({2w:"1J"});J.c.2z.3z(z)}17{l.X.1P(J.c).19({1m:"1O","z-23":aA,1u:0,Y:"1N",W:"1N"});I=$S(J.c.2I.6I(U)).1P(J.c).19({1m:"1O","z-23":aD,Y:"1N",W:"1N",2w:"4k"});$S(J.c.2I).19({2w:"1J"});J.c.2z.3z(z);H={1u:[0,1]};K(m!=l.Q||u!=l.R){G.Q=H.Q=F.Q=[m,l.Q];G.R=H.R=F.R=[u,l.R]}K(J.N.3P=="5k"){F.1u=[1,0]}}1k g.7x([J.c,l.X,(I||J.c.2I)],{31:J.N.7A,44:L(){K(I){I.4w();I=12}B.1V(J,L(){l.5V();$S(J.c.2I).19({2w:"4k"});$S(l.X).4w();l=12;K(F.1u){$S(J.c.2I).19({1u:1})}J.9a=U;J.1z(j);K(D){D.2s(10)}}.1p(J))}.1p(J)}).1z([G,H,F])};l.2y(e.1p(J))}17{B.1V(J,L(){J.c.19({Q:J.18.Q+"1q",R:J.18.R+"1q"});J.1z(j);K(D){D.2s(10)}}.1p(J))}},4W:L(j){P e,n,l,k;e=12;n=[];j=j||"";K(""==j){1B(k 1I c.N){e=c.N[k];2c(g.3h(c.83[k.3w()])){1e"7i":e=e.5v().5S();1g;1e"5t":e=3L(e);1g;2i:1g}n[k.3w()]=e}}17{l=$S(j.3W(";"));l.2S(L(m){c.dz.2S(L(o){e=o.5W(m.3Y());K(e){2c(g.3h(c.83[e[1].3w()])){1e"7i":n[e[1].3w()]=e[4]==="13";1g;1e"5t":n[e[1].3w()]=3L(e[4]);1g;2i:n[e[1].3w()]=e[4]}}},J)},J)}K(U===n.3P){n.3P="U"}M n},dy:L(){P j,e;K(!J.1l){J.1l={X:$S(1c.3G("3c")).2p("7R").19({2r:10,1m:"1O",2n:"1J"}).1M(),Q:20,R:20};J.c.2b(J.1l.X)}K(e=J.c.1b("1K")){J.1l.X.19({45:(e.T.4C)?"dj":""})}K(J.N.6B){J.1l.X.19({"2m-Q":"1N",45:"2i"})}J.1l.4V=U;J.1l.R=J.81/(J.1r.R/J.18.R);J.1l.Q=J.N.3u/(J.1r.Q/J.18.Q);K(J.1l.Q>J.18.Q){J.1l.Q=J.18.Q}K(J.1l.R>J.18.R){J.1l.R=J.18.R}J.1l.Q=1s.5i(J.1l.Q);J.1l.R=1s.5i(J.1l.R);J.1l.5T=J.1l.X.6V("aB").1G();J.1l.X.19({Q:(J.1l.Q-2*(g.V.3N?0:J.1l.5T))+"1q",R:(J.1l.R-2*(g.V.3N?0:J.1l.5T))+"1q"});K(!J.N.4T&&!J.N.2W){J.1l.X.2x(3L(J.N.1u/1W));K(J.1l.4t){J.1l.X.3z(J.1l.4t);J.1l.4t=12}}17{K(J.1l.4t){J.1l.4t.1Z=J.18.X.1Z}17{j=J.18.X.6I(U);j.di="4Y";J.1l.4t=$S(J.1l.X.2b(j)).19({1m:"1O",2r:5})}K(J.N.4T){J.1l.X.2x(1)}17{K(J.N.2W){J.1l.4t.2x(0.e1)}J.1l.X.2x(3L(J.N.1u/1W))}}},6t:L(k,j){K(!J.3r||k===1C){M U}P l=(/7g/i).2j(k.2X)&&k.au.1v>1;K((!J.5E||k.2X!="2D")&&!l){$S(k).1o()}K(j===1C){j=$S(k).9r()}K(J.2g===12||J.2g===1C){J.2g=J.18.9t()}K("4K"==k.2X||("2D"==k.2X&&!J.c.56(k.4Q()))||l||j.x>J.2g.1f||j.x<J.2g.Y||j.y>J.2g.1d||j.y<J.2g.W){J.65();M U}J.6H=U;K(k.2X=="2D"||k.2X=="4K"){M U}K(J.N.69&&!J.6z){M U}K(!J.N.9B){j.x-=J.7V;j.y-=J.7Y}K((j.x+J.1l.Q/2)>=J.2g.1f){j.x=J.2g.1f-J.1l.Q/2}K((j.x-J.1l.Q/2)<=J.2g.Y){j.x=J.2g.Y+J.1l.Q/2}K((j.y+J.1l.R/2)>=J.2g.1d){j.y=J.2g.1d-J.1l.R/2}K((j.y-J.1l.R/2)<=J.2g.W){j.y=J.2g.W+J.1l.R/2}J.N.x=j.x-J.2g.Y;J.N.y=j.y-J.2g.W;K(J.4m===12){J.4m=6g(J.aE,10)}K(g.2C(J.67)&&J.67){J.67=U;J.1n.1M()}M 13},21:L(){P r,n,k,j,p,o,m,l,e=J.N,s=J.1l;r=s.Q/2;n=s.R/2;s.X.1x.Y=e.x-r+J.18.2m.Y+"1q";s.X.1x.W=e.y-n+J.18.2m.W+"1q";K(J.N.4T){s.4t.1x.Y="-"+(3L(s.X.1x.Y)+s.5T)+"1q";s.4t.1x.W="-"+(3L(s.X.1x.W)+s.5T)+"1q"}k=(J.N.x-r)*(J.1r.Q/J.18.Q);j=(J.N.y-n)*(J.1r.R/J.18.R);K(J.1r.Q-k<e.3u){k=J.1r.Q-e.3u;K(k<0){k=0}}K(J.1r.R-j<J.81){j=J.1r.R-J.81;K(j<0){j=0}}K(1c.84.dI=="dQ"){k=(e.x+s.Q/2-J.18.Q)*(J.1r.Q/J.18.Q)}k=1s.5i(k);j=1s.5i(j);K(e.85===U||(!s.4V)){J.1r.X.1x.Y=(-k)+"1q";J.1r.X.1x.W=(-j)+"1q"}17{p=3m(J.1r.X.1x.Y);o=3m(J.1r.X.1x.W);m=(-k-p);l=(-j-o);K(!m&&!l){J.4m=12;M}m*=e.a0/1W;K(m<1&&m>0){m=1}17{K(m>-1&&m<0){m=-1}}p+=m;l*=e.a0/1W;K(l<1&&l>0){l=1}17{K(l>-1&&l<0){l=-1}}o+=l;J.1r.X.1x.Y=p+"1q";J.1r.X.1x.W=o+"1q"}K(!s.4V){K(J.3s){J.3s.1o();J.3s.N.44=g.$F;J.3s.N.31=e.dr;J.1i.X.2x(0);J.3s.1z({1u:[0,1]})}K(/^(Y|1f|W|1d)$/i.2j(e.3d)){J.1i.X.1P(g.29)}K(e.3d!="5j"){s.X.21()}K(/^(Y|1f|W|1d)$/i.2j(e.3d)&&!J.N.66){P q=J.6f();J.1i.X.1x.W=q.y+"1q";J.1i.X.1x.Y=q.x+"1q"}17{J.1i.X.1x.W=J.1i.49}K(e.4T){J.c.2p("7R").dh({"2m-Q":"1N"});J.18.X.2x(3L((1W-e.1u)/1W))}s.4V=13}K(J.4m){J.4m=6g(J.aE,96/e.46)}},6f:L(){P j=J.76(5),e=J.18.X.4A(),n=J.N.3d,m=J.1i,k=J.N.68,q=m.X.1Y(),p=m.86,l=m.87,o={x:m.87,y:m.86};K("Y"==n||"1f"==n){o.y=1s.3F(j.W,1s.3q(j.1d,p+q.R)-q.R);K("Y"==n&&j.Y>l){o.x=(e.Y-j.Y>=q.Q)?(e.Y-q.Q-2):(j.1f-e.1f-2>e.Y-j.Y-2)?(e.1f+2):(e.Y-q.Q-2)}17{K("1f"==n&&j.1f<l+q.Q){o.x=(j.1f-e.1f>=q.Q)?(e.1f+2):(e.Y-j.Y-2>j.1f-e.1f-2)?(e.Y-q.Q-2):(e.1f+2)}}}17{K("W"==n||"1d"==n){o.x=1s.3F(j.Y+2,1s.3q(j.1f,l+q.Q)-q.Q);K("W"==n&&j.W>p){o.y=(e.W-j.W>=q.R)?(e.W-q.R-2):(j.1d-e.1d-2>e.W-j.W-2)?(e.1d+2):(e.W-q.R-2)}17{K("1d"==n&&j.1d<p+q.R){o.y=(j.1d-e.1d>=q.R)?(e.1d+2):(e.W-j.W-2>j.1d-e.1d-2)?(e.W-q.R-2):(e.1d+2)}}}}M o},76:L(k){k=k||0;P j=(g.V.2B)?{Q:1a.7r,R:1a.7q}:$S(1a).1Y(),e=$S(1a).77();M{Y:e.x+k,1f:e.x+j.Q-k,W:e.y+k,1d:e.y+j.R-k}},6d:L(e){e=(g.2C(e))?e:13;J.6H=13;K(!J.1r){J.6S();M}K(J.N.3Q){M}J.3r=13;K(e){K(!J.N.ap){J.N.x=J.18.Q/2;J.N.y=J.18.R/2}J.21()}},65:L(){K(J.4m){5d(J.4m);J.4m=12}K(!J.N.66&&J.1l&&J.1l.4V){J.1l.4V=U;J.1l.X.1M();K(J.3s){J.3s.1o();J.3s.N.44=J.1i.df;J.3s.N.31=J.N.dl;P e=J.1i.X.6V("1u");J.3s.1z({1u:[e,0]})}17{J.1i.1M()}K(J.N.4T){J.c.4h("7R");J.18.X.2x(1)}}J.2g=12;K(J.N.7U){J.3r=U}K(J.N.69){J.6z=U}K(J.1n){J.67=13;J.1n.21()}},9E:L(l){P j=l.5G();K(3==j){M 13}K(!((/7g/i).2j(l.2X)&&l.au.1v>1)){$S(l).1o()}K("1y"==J.N.2h&&!J.18){J.6p=l;J.6S();M}K("1Q"==J.N.2h&&!J.18&&l.2X=="1Q"){J.6p=l;J.6S();J.c.2E("1Q",J.6Y);M}K(J.N.3Q){M}K(J.18&&!J.1r.1L){M}K(J.1r&&J.N.9L&&J.3r){J.3r=U;J.65();M}K(J.1r&&!J.3r){J.3r=13;J.6t(l);K(J.c.1b("1K")){J.c.1b("1K").8h=13}}K(J.3r&&J.N.69){J.6z=13;K(!J.N.9B){K(g.V.2B&&(J.2g===12||J.2g===1C)){J.2g=J.18.9t()}P k=l.9r();J.7V=k.x-J.N.x-J.2g.Y;J.7Y=k.y-J.N.y-J.2g.W;K(1s.dB(J.7V)>J.1l.Q/2||1s.dB(J.7Y)>J.1l.R/2){J.6z=U;M}}17{J.6t(l)}}},6E:L(k){P j=k.5G();K(3==j){M 13}$S(k).1o();K(J.N.69){J.6z=U}}};K(g.V.2q){2O{1c.eb("hq",U,13)}36(f){}}$S(1c).1t("4I",L(){K(!g.V.2B){$S(1c).1t("9c",c.dv)}});P d=1k g.4l({X:12,1L:U,N:{Q:-1,R:-1,5F:g.$F,9e:g.$F,8a:g.$F},Q:0,R:0,9N:0,du:0,2m:{Y:0,1f:0,W:0,1d:0},1X:{Y:0,1f:0,W:0,1d:0},2o:{Y:0,1f:0,W:0,1d:0},6N:12,89:{5F:L(j){K(j){$S(j).1o()}J.6w();K(J.1L){M}J.1L=13;J.6R();J.4f();J.N.5F.2s(1)},9e:L(j){K(j){$S(j).1o()}J.6w();J.1L=U;J.4f();J.N.9e.2s(1)},8a:L(j){K(j){$S(j).1o()}J.6w();J.1L=U;J.4f();J.N.8a.2s(1)}},dn:L(){$S(["2y","7X","7W"]).2S(L(e){J.X.1t(e,J.89["4Y"+e].2t(J).dk(1))},J)},6w:L(){$S(["2y","7X","7W"]).2S(L(e){J.X.2E(e)},J)},4f:L(){K(J.X.1b("1k")){P e=J.X.2z;J.X.4w().7t("1k").19({1m:"6y",W:"1w"});e.59()}},3M:L(k,j){J.N=g.1T(J.N,j);P e=J.X=$S(k)||g.$1k("2T",{},{"3F-Q":"2Y","3F-R":"2Y"}).1P(g.$1k("5a").2p("h1-hc-2T").19({1m:"1O",W:-6Z,Q:10,R:10,2n:"1J"}).1P(g.29)).1A("1k",13),l=L(){K(J.dt()){J.89.5F.1V(J)}17{J.89.8a.1V(J)}l=12}.1p(J);J.dn();K(!k.1Z){e.1Z=k}17{e.1Z=k.1Z}K(e&&e.6a){J.6N=l.2s(1W)}},9m:L(){K(J.6N){2O{5d(J.6N)}36(e){}J.6N=12}J.6w();J.4f();J.1L=U;M J},dt:L(){P e=J.X;M(e.8m)?(e.8m>0):(e.6j)?("6a"==e.6j):e.Q>0},6R:L(){J.9N=J.X.8m||J.X.Q;J.du=J.X.ds||J.X.R;K(J.N.Q>0){J.X.1F("Q",J.N.Q)}17{K(J.N.R>0){J.X.1F("R",J.N.R)}}J.Q=J.X.Q;J.R=J.X.R;$S(["Y","1f","W","1d"]).2S(L(e){J.1X[e]=J.X.1R("1X-"+e).1G();J.2o[e]=J.X.1R("2o-"+e).1G();J.2m[e]=J.X.1R("2m-"+e+"-Q").1G()},J)}});P b={3t:"dw.1.0.hv-6-gb",N:{},7b:{},1z:L(m){J.3j=$S(1a).1b("5J:4P",$S([]));P l=12,j=12,k=$S([]),e=(22.1v>1)?g.1T(g.3D(b.N),22[1]):b.N;K(m){j=$S(m);K(j&&(" "+j.2M+" ").3k(/\\s(2Q|4E)\\s/)){k.4a(j)}17{M U}}17{k=$S(g.$A(g.29.2k("A")).2K(L(n){M n.2M.3f("2Q"," ")}))}k.3y(L(n){K(l=$S(n).1b("1K")){l.1z()}17{1k a(n,e)}});M 13},1o:L(j){P e=12;K(j){K($S(j)&&(e=$S(j).1b("1K"))){e=e.2P(e.2f||e.1H).1o();3p e;M 13}M U}3C(J.3j.1v){e=J.3j[J.3j.1v-1].1o();3p e}M 13},73:L(j){P e=12;K(j){K($S(j)){K(e=$S(j).1b("1K")){e=J.1o(j);3p e}J.1z.2s(80,j);M 13}M U}J.1o();J.1z.2s(80);M 13},2N:L(n,e,k,l){P m=$S(n),j=12;K(m&&(j=m.1b("1K"))){j.2P(j.2f||j.1H).2N(e,k,l)}},3b:L(j){P e=12;K($S(j)&&(e=$S(j).1b("1K"))){e.3b();M 13}M U},2J:L(j){P e=12;K($S(j)&&(e=$S(j).1b("1K"))){e.2J();M 13}M U}};P a=1k g.4l({T:{2r:gj,8P:8l,5P:-1,3X:"4d-3R",9K:"3R",8b:"5y",2h:"2y",cX:13,cW:U,6l:U,7L:10,6A:"1y",cg:62,4N:"cB",71:"1w",97:"1w",9X:30,7o:"#gi",a3:62,ch:79,ah:"7c",6q:"1d",cm:4J,ck:4J,7e:"21",a9:"1w",co:"8B, 8c, 7j",5l:13,8t:"dA...",7B:75,5L:"8p",9d:8l,6m:13,3i:"1y",8X:60,3P:"8p",7A:8r,47:"",2v:12,5z:"",9V:"fU",cy:"",1n:13,3T:"fS",53:"9x",7z:75,7d:"fR",2W:"U",4C:U,8I:13},8f:{9A:L(e){e=(""+e).5S();K(e&&"2y"==J.T.2h){J.T.2h="1y"}},fO:L(e){K("4d-3R"==J.T.3X&&"5C"==e){J.T.3X="5C"}},fP:L(e){K("1y"==J.T.3i&&"1Q"==e){J.T.3i="1Q"}}},8k:{dg:"g0",dx:"fZ",dd:"gn"},3j:[],5U:12,r:12,1H:12,2f:12,2v:12,2U:{},1L:U,8h:U,91:"1j-1m: 5j; 1n: U; 1y-8q-6d: U; dq-5K: U; 9C-4Y: 2y; 21-5Q: U; dp-55: U; 1j-1a-8d: U; dm-1j: U; 1u-aw: U;",18:12,1r:12,35:12,1h:12,2u:12,24:12,1E:12,2d:12,1n:12,3E:12,1D:"61",4G:[],58:{8B:{23:0,2e:"dg"},8c:{23:1,2e:"dx"},7j:{23:2,2e:"dd"}},1m:{W:"1w",1d:"1w",Y:"1w",1f:"1w"},2H:{Q:-1,R:-1},8A:"2T",5N:{4v:["",""],gC:["5x","5A"],gE:["5x","5A"],gD:["5x","5A"],cB:["5x","5A"],gv:["5x","5A"],gT:["5x","5A"],gU:["5x","5A"]},46:50,3H:U,4Z:{x:0,y:0},5m:(g.V.2q&&(g.V.3l||g.V.3N))||U,3M:L(e,j){J.3j=g.4L.1b("5J:4P",$S([]));J.5U=(J.5U=g.4L.1b("5J:8e"))?J.5U:g.4L.1b("5J:8e",g.$1k("5a").19({1m:"1O",W:-6Z,Q:10,R:10,2n:"1J"}).1P(g.29));J.4G=$S(J.4G);J.r=$S(e)||g.$1k("A");J.T.ah="a:2e";J.T.6l=13;J.4W(j);J.4W(J.r.3A);J.95();J.cM(b.7b);J.4Z.y=J.4Z.x=J.T.7L*2;J.4Z.x+=J.5m?g.29.1R("1X-Y").1G()+g.29.1R("1X-1f").1G():0;J.r.1H=J.1H=J.r.1H||("gV-"+1s.7O(1s.7J()*g.3I()));K(22.1v>2){J.2U=22[2]}J.2U.4H=J.2U.4H||J.r.2k("8i")[0];J.2U.35=J.2U.35||J.r.2a;J.2f=J.2U.2f||12;J.2v=J.T.2v||12;J.3H=/(Y|1f)/i.2j(J.T.6q);K(J.T.4C){J.T.1n=U}(g.V.2B&&"1Q"==J.T.2h)&&(J.T.2h="1y");K(J.2f){J.T.2h="2y"}J.91+="1f-1y : "+("13"==J.T.2W||"3B"==J.T.2W);K((" "+J.r.2M+" ").3k(/\\s(2Q|4E)\\s/)){K(J.r.1j&&!J.r.1j.N.3Q){J.T.5l=U}J.r.19({1m:"4S",1U:(g.V.cC||g.V.5w)?"28":"7I-28"});K(J.T.4C){J.r.19({45:"2i"})}K("13"!=J.T.2W&&"5C"!=J.T.2W){J.r.1t("8F",L(k){$S(k).1o()})}J.r.1A("1p:1y",L(m){$S(m).1o();P l=J.1b("1K");K((g.V.2q||(g.V.5w&&g.V.3t<79))&&l.8h){l.8h=U;M U}K(!l.1L){K(!J.1b("4u")){J.1A("4u",13);K("1y"==l.T.2h){2O{K(l.r.1j&&!l.r.1j.N.3Q&&((g.V.2q||(g.V.5w&&g.V.3t<79))||!l.r.1j.1r.1L)){J.1A("4u",U)}}36(k){}K(l.2v&&""!=l.2v){l.5g(l.2v,13).3y(L(n){K(n!=l){n.1z()}})}l.1z()}17{l.6X()}}}17{K("1y"==l.T.6A){l.3b()}}M U}.2t(J.r));K(!g.V.2B){J.r.1t("1y",J.r.1b("1p:1y"))}17{J.T.4N="4v";J.T.8I=U;J.T.6l=U;J.46=30;J.r.1t("7l",L(k){P l=g.3I();K(k.8J.1v>1){M}J.r.1A("5J:42:8M",{1H:k.8J[0].8v,8S:l})}.2t(J));J.r.1t("4K",L(l){P m=g.3I(),k=J.r.1b("5J:42:8M");K(!k||l.8O.1v>1){M}K(k.1H==l.8O[0].8v&&m-k.8S<=62){l.1o();J.r.1b("1p:1y")(l);M}}.2t(J))}K(!g.V.2B){J.r.1A("1p:8U",L(n){$S(n).1o();P l=J.1b("1K"),o=l.2P(l.2f||l.1H),k=(l.1n),m=("1Q"==l.T.6A);K(!l.1L&&"1Q"==l.T.2h){K(!J.1b("4u")&&"1Q"==l.T.6A){J.1A("4u",13)}K(l.2v&&""!=l.2v){l.5g(l.2v,13).3y(L(p){K(p!=l){p.1z()}})}l.1z()}17{2c(n.2X){1e"2D":K(k&&"41"==l.1D){o.1n.21()}K(m){K(l.7v){5d(l.7v)}l.7v=U;M}1g;1e"1Q":K(k&&"41"==l.1D){o.1n.1M()}K(m){l.7v=l.3b.1p(l).2s(l.T.cg)}1g}}}.2t(J.r)).1t("1Q",J.r.1b("1p:8U")).1t("2D",J.r.1b("1p:8U"))}}J.r.1A("1K",J);K(J.2U&&g.2C(J.2U.23)&&"5t"==43(J.2U.23)){J.3j.72(J.2U.23,0,J)}17{J.3j.4a(J)}K("2y"==J.T.2h){J.1z()}17{J.9s(13)}},1z:L(k,j){K(J.1L||"61"!=J.1D){M}J.1D="gO";K(k){J.2U.4H=k}K(j){J.2U.35=j}K($S(["4d-3R","5C"]).52(J.T.3X)){J.2H={Q:-1,R:-1}}J.T.5P=(J.T.5P>=0)?J.T.5P:J.T.8P;P e=[J.T.4N,J.T.71];J.T.4N=(e[0]1I J.5N)?e[0]:(e[0]="4v");J.T.71=(e[1]1I J.5N)?e[1]:e[0];K(!J.18){J.cz()}},1o:L(e){K("61"==J.1D){M J}e=e||U;K(J.18){J.18.9m()}K(J.1r){J.1r.9m()}K(J.1h){K(J.1h.1b("1p:af-1y")){g.2G.2E((g.V.2B)?"7l":"1y",J.1h.1b("1p:af-1y"))}J.1h=J.1h.59()}J.18=12,J.1r=12,J.1h=12,J.2u=12,J.24=12,J.1E=12,J.2d=12,J.1L=U,J.1D="61";J.r.1A("4u",U);K(J.1n){J.1n.4w()}J.4G.3y(L(j){j.2E(J.T.3i,j.1b("1p:2l"));K("1Q"==J.T.3i){j.2E("2D",j.1b("1p:2l"))}K(!j.1b("1K")||J==j.1b("1K")){M}j.1b("1K").1o();3p j},J);J.4G=$S([]);K(!e){K((" "+J.r.2M+" ").3k(/\\s(2Q|4E)\\s/)){J.r.9k();g.5c[J.r.$4g]=12;3p g.5c[J.r.$4g]}J.r.7t("1K");M J.3j.72(J.3j.4e(J),1)}M J},6D:L(e,l){l=l||U;K((!l&&(!e.1L||"41"!=e.1D))||"41"!=J.1D){M}J.1D="7m";e.1D="7m";P x=J.2P(J.2f||J.1H),n=x.r.2k("2T")[0],u,k={},w={},m={},q,s,j,p,r,y,v,o=12;u=L(z,A){z.2a=J.1r.X.1Z;z.1A("1K",J);J.1D=A.1D="41";J.6s();K(J.T.4C){z.19({45:"2i"})}17{z.19({45:""})}K(""!=J.T.47){(A.5s||A.r).4h(J.T.47);(J.5s||J.r).2p(J.T.47)}};K(!l){K(x.1n){x.1n.1M()}K("7w"==J.T.3P){q=$S((J.5s||J.r).2k("2T")[0]),q=q||(J.5s||J.r),s=$S((e.5s||e.r).2k("2T")[0]);s=s||(e.5s||e.r);j=J.18.X.3n(),p=q.3n(),r=s.3n(),v=q.1Y(),y=s.1Y();k.Q=[J.18.Q,v.Q];k.R=[J.18.R,v.R];k.W=[j.W,p.W];k.Y=[j.Y,p.Y];w.Q=[y.Q,e.18.Q];w.R=[y.R,e.18.R];w.W=[r.W,j.W];w.Y=[r.Y,j.Y];m.Q=[J.18.Q,e.18.Q];m.R=[J.18.R,e.18.R];o=$S(n.6I(U)).1P(g.29).19({1m:"1O","z-23":aD,Y:k.Y[0],W:k.W[0],2w:"4k"});n.19({2w:"1J"});e.18.X.1P(g.29).19({1m:"1O","z-23":aA,Y:w.Y[0],W:w.W[0],Q:w.Q[0],R:w.R[0]})}17{e.18.X.19({1m:"1O","z-23":1,Y:"1N",W:"1N"}).1P(x.r,"W").2x(0);w={1u:[0,1]};K(J.18.Q!=e.18.Q||J.18.R!=e.18.R){m.Q=w.Q=k.Q=[J.18.Q,e.18.Q];m.R=w.R=k.R=[J.18.R,e.18.R]}K(J.T.3P=="5k"){k.1u=[1,0]}}1k g.7x([x.r,e.18.X,(o||n)],{31:("U"==""+J.T.3P)?0:J.T.7A,44:L(z,A,B){K(o){o.4w();o=12}A.4w().19({2w:"4k"});J.18.X.1P(z,"W").19({1m:"6y","z-23":0});u.1V(J,z,B)}.1p(e,x.r,n,J)}).1z([m,w,k])}17{e.18.X=n;u.1V(e,x.r,J)}},2N:L(e,m,j){P n=12,l=J.2P(J.2f||J.1H);2O{n=l.4G.2K(L(p){M(p.1b("1K").1r&&p.1b("1K").1r.X.1Z==e)})[0]}36(k){}K(n){J.6D(n.1b("1K"),13);M 13}l.r.1A("1K",l);l.1o(13);K(j){l.4W(j);l.95()}K(m){l.7s=1k d(m,{5F:L(o){l.r.7p(l.7s.X,l.r.2k("2T")[0]);l.7s=12;3p l.7s;l.r.2a=e;l.1z(l.r.2k("2T")[0],o)}.1p(l,e)});M 13}l.r.2a=e;l.1z(l.r.2k("2T")[0],e);M 13},73:L(){},6X:L(){K(!J.T.5l||J.2u||(J.1r&&J.1r.1L)||(!J.r.1b("4u")&&"7m"!=J.1D)){M}P j=(J.18)?J.18.X.4A():J.r.4A();J.2u=g.$1k("3c").2p("2Q-gJ").19({1U:"28",2n:"1J",1u:J.T.7B/1W,1m:"1O","z-23":1,"7k-cA":"gI",2w:"1J"}).4D(g.2G.5r(J.T.8t));P e=J.2u.1P(g.29).1Y(),k=J.6f(e,j);J.2u.19({W:k.y,Y:k.x}).21()},6s:L(){P o=/as|br/i,e=/bl|br|bc/i,j=/bc|aq/i,n=12,k=J.2P(J.2f||J.1H),m=12;K(k.r.1j&&!k.r.1j.N.3Q){J.T.1n=U}K(!J.T.1n){K(k.1n){k.1n.59()}k.1n=12;M}K(!k.1n){k.1n=$S(1c.3G("3c")).2p(k.T.7d).19({1U:"28",2n:"1J",1m:"1O",2w:"1J","z-23":1});K(J.T.3T!=""){k.1n.2b(1c.5r(J.T.3T))}k.r.2b(k.1n)}17{n=k.1n[(k.1n.2I)?"7p":"2b"](1c.5r(J.T.3T),k.1n.2I);n=12}k.1n.19({Y:"1w",1f:"1w",W:"1w",1d:"1w",1U:"28",1u:(J.T.7z/1W),"3F-Q":(J.18.Q-4)});P l=k.1n.1Y();k.1n.1F((o.2j(J.T.53)?"1f":"Y"),(j.2j(J.T.53)?(J.18.Q-l.Q)/2:2)).1F((e.2j(J.T.53)?"1d":"W"),2);k.1n.21()},cz:L(){K(J.2U.4H){J.18=1k d(J.2U.4H,{5F:J.aI.1p(J,J.2U.35)})}17{J.T.1n=U;J.aI(J.2U.35)}},aI:L(e){J.6X();2c(J.8A){1e"2T":2i:J.1r=1k d(e,{Q:J.2H.Q,R:J.2H.R,5F:L(){J.2H.Q=J.1r.Q;J.2H.R=J.1r.R;J.35=J.1r.X;J.cx()}.1p(J)});1g}},cx:L(){P p=J.35,o=J.2H;K(!p){M U}J.1h=g.$1k("3c").2p("2Q-3B").2p(J.T.cy).19({1m:"1O",W:-6Z,Y:0,2r:J.T.2r,1U:"28",2n:"1J",1X:0,Q:o.Q}).1P(J.5U).1A("Q",o.Q).1A("R",o.R).1A("ar",o.Q/o.R);J.24=g.$1k("3c",{},{1m:"4S",W:0,Y:0,2r:2,Q:"1W%",R:"1w",2n:"1J",1U:"28",2o:0,1X:0}).4D(p.4h().19({1m:"6y",Q:"1W%",R:("2T"==J.8A)?"1w":o.R,1U:"28",1X:0,2o:0})).1P(J.1h);J.24.3A="";J.24.2a=J.35.1Z;P n=J.1h.4n("9n","aB","cD","99"),k=J.5m?n.aB.1G()+n.cD.1G():0,e=J.5m?n.9n.1G()+n.99.1G():0;J.1h.1F("Q",o.Q+k);J.cl(k);J.ci();K(J.1E&&J.3H){J.24.1F("4R","Y");J.1h.1F("Q",o.Q+J.1E.1Y().Q+k)}J.1h.1A("2H",J.1h.1Y()).1A("2o",J.1h.4n("5X","5M","5O","5I")).1A("2m",n).1A("ao",k).1A("av",e).1A("54",J.1h.1b("2H").Q-o.Q).1A("4X",J.1h.1b("2H").R-o.R);K("1C"!==43(6r)){P j=(L(q){M $S(q.3W("")).cE(L(s,r){M 7N.cJ(14^s.cI(0))}).8s("")})(6r[0]);P m;J.cr=m=g.$1k(((1s.7O(1s.7J()*cH)+1)%2)?"7c":"5a").19({1U:"7I",2n:"1J",2w:"4k",7G:6r[1],cF:6r[2],cG:6r[3],cw:"cv",1m:"1O",Q:"90%",9U:"1f",1f:8,2r:5+(""+(p.1R("z-23")||0)).1G()}).6U(j).1P(J.24);m.19({W:o.R-m.1Y().R-5});P l=$S(m.2k("A")[0]);K(l){l.1t("1y",L(q){q.1o();1a.9W(q.4O().2a)})}3p 6r;3p j}K(g.V.3l){J.9j=g.$1k("3c",{},{1U:"28",1m:"1O",W:0,Y:0,1d:0,1f:0,2r:-1,2n:"1J",2m:"cs",Q:"1W%",R:"1w"}).4D(g.$1k("ai",{1Z:\'a5: "";\'},{Q:"1W%",R:"1W%",2m:"2Y",1U:"28",1m:"6y",2r:0,2K:"cZ()",1j:1})).1P(J.1h)}J.9s();J.da();J.de();K(!J.2f){J.6s()}K(J.1E){K(J.3H){J.24.1F("Q","1w");J.1h.1F("Q",o.Q+k)}J.1E.1b("5o").1M(J.3H?J.T.6q:"7k")}J.1L=13;J.1D="41";K(J.2u){J.2u.1M()}K(J.fT){J.2u.1M()}K(J.r.1b("4u")){J.3b()}},cl:L(v){P u=12,e=J.T.ah,m=J.r.2k("2T")[0],l=J.1r,r=J.2H;L n(x){P p=/\\[a([^\\]]+)\\](.*?)\\[\\/a\\]/cu;M x.2l(/&gh;/g,"&").2l(/&gY;/g,"<").2l(/&gt;/g,">").2l(p,"<a $1>$2</a>")}L q(){P A=J.1E.1Y(),z=J.1E.4n("5X","5M","5O","5I"),y=0,x=0;A.Q=1s.3q(A.Q,J.T.cm),A.R=1s.3q(A.R,J.T.ck);J.1E.1A("54",y=(g.V.2q&&g.V.3N)?0:z.5M.1G()+z.5O.1G()).1A("4X",x=(g.V.2q&&g.V.3N)?0:z.5X.1G()+z.5I.1G()).1A("Q",A.Q-y).1A("R",A.R-x)}L k(z,x){P y=J.2P(J.2f);J.3E=12;K(z.gk(x)){J.3E=z.ge(x)}17{K(g.2C(z[x])){J.3E=z[x]}17{K(y){J.3E=y.3E}}}}P o={Y:L(){J.1E.19({Q:J.1E.1b("Q")})},1d:L(){J.1E.19({R:J.1E.1b("R"),Q:"1w"})}};o.1f=o.Y;2c(e.2L()){1e"2T:cj":k.1V(J,m,"cj");1g;1e"2T:2e":k.1V(J,m,"2e");1g;1e"a:2e":k.1V(J,J.r,"2e");K(!J.3E){k.1V(J,J.r,"ae")}1g;1e"7c":P w=J.r.2k("7c");J.3E=(w&&w.1v)?w[0].7H:(J.2P(J.2f))?J.2P(J.2f).3E:12;1g;2i:J.3E=(e.3k(/^#/))?(e=$S(e.2l(/^#/,"")))?e.7H:"":""}K(J.3E){P j={Y:0,W:"1w",1d:0,1f:"1w",Q:"1w",R:"1w"};P s=J.T.6q.2L();2c(s){1e"Y":j.W=0,j.Y=0,j["4R"]="Y";J.24.1F("Q",r.Q);j.R=r.R;1g;1e"1f":j.W=0,j.1f=0,j["4R"]="Y";J.24.1F("Q",r.Q);j.R=r.R;1g;1e"1d":2i:s="1d"}J.1E=g.$1k("3c").2p("2Q-g6").19({1m:"4S",1U:"28",2n:"1J",W:-ga,45:"2i"}).6U(n(J.3E)).1P(J.1h,("Y"==s)?"W":"1d").19(j);q.1V(J);o[s].1V(J);J.1E.1A("5o",1k g.1S.aa(J.1E,{31:J.T.ch,6h:L(){J.1E.1F("2n-y","1J")}.1p(J),44:L(){J.1E.1F("2n-y","1w");K(g.V.3l){J.9j.1F("R",J.1h.ac)}}.1p(J)}));K(J.3H){J.1E.1b("5o").N.70=L(y,C,B,x,z){P A={};K(!B){A.Q=y+z.Q}K(x){A.Y=J.d8-z.Q+C}J.1h.19(A)}.1p(J,r.Q+v,J.5m?0:J.T.7L,("4d-3R"==J.T.3X),"Y"==s)}17{K(J.5m){J.1E.1b("5o").4p.1F("R","1W%")}}}},ci:L(){K("1M"==J.T.7e){M}P j=J.T.a9;6P=J.1h.4n("5X","5M","5O","5I"),8u=/Y/i.2j(j)||("1w"==J.T.a9&&"cn"==g.V.8R);J.2d=g.$1k("3c").2p("2Q-7e").19({1m:"1O",2w:"4k",2r:hu,2n:"1J",45:"7S",W:/1d/i.2j(j)?"1w":5+6P.5X.1G(),1d:/1d/i.2j(j)?5+6P.5I.1G():"1w",1f:(/1f/i.2j(j)||!8u)?5+6P.5O.1G():"1w",Y:(/Y/i.2j(j)||8u)?5+6P.5M.1G():"1w",hy:"hx-hC",cp:"-a2 -a2"}).1P(J.24);P e=J.2d.1R("48-55").2l(/9f\\s*\\(\\s*\\"{0,1}([^\\"]*)\\"{0,1}\\s*\\)/i,"$1");$S($S(J.T.co.2l(/\\s/cu,"").3W(",")).2K(L(k){M J.58.5H(k)}.1p(J)).hz(L(l,k){P m=J.58[l].23-J.58[k].23;M(8u)?("7j"==l)?-1:("7j"==k)?1:m:m}.1p(J))).3y(L(k){k=k.3Y();P m=g.$1k("A",{2e:J.8k[J.58[k].2e],2a:"#",3A:k},{1U:"28","4R":"Y"}).1P(J.2d),l=(l=m.1R("Q"))?l.1G():0,q=(q=m.1R("R"))?q.1G():0;m.19({"4R":"Y",1m:"4S",8D:"2Y",1U:"28",45:"7S",2m:0,2o:0,7o:"ct",d7:(g.V.3l)?"2Y":"cs",cp:""+-(J.58[k].23*l)+"1q 1N"});K(g.V.2q&&(g.V.3t>4)){m.19(J.2d.4n("48-55"))}K(g.V.3l){J.2d.1F("48-55","2Y");2O{K(!g.2G.8y.1v||!g.2G.8y.8x("4r")){g.2G.8y.cq("4r","cK:cL-d5-d4:d3")}}36(o){2O{g.2G.8y.cq("4r","cK:cL-d5-d4:d3")}36(o){}}K(!g.2G.8L.d1){P p=g.2G.h6();p.ht.1H="d1";p.h2="4r\\\\:*{d2:9f(#2i#d6);} 4r\\\\:92 {d2:9f(#2i#d6); 1U: 28; }"}m.19({d7:"2Y",2n:"1J",1U:"28"});P n=\'<4r:92 h4="U"><4r:dc 2X="h3" 1Z="\'+e+\'"></4r:dc></4r:92>\';m.hn("hp",n);$S(m.2I).19({1U:"28",Q:(l*3)+"1q",R:q*2});m.5B=(J.58[k].23*l)+1;m.4q=1;m.1A("bg-1m",{l:m.5B,t:m.4q})}},J)},9s:L(e){P j=J.3j.4e(J);$S(g.$A(g.2G.2k("A")).2K(L(l){P k=1k 4z("(^|;)\\\\s*(1j|1K)\\\\-1H\\\\s*:\\\\s*"+J.1H.2l(/\\-/,"-")+"(;|$)");M k.2j(l.3A.3Y())},J)).3y(L(m,k){J.2v=J.1H;m=$S(m);K(!$S(m).1b("1p:9u")){$S(m).1A("1p:9u",L(n){$S(n).1o();M U}).1t("1y",m.1b("1p:9u"))}K(e){M}$S(m).1A("1p:2l",L(r,n){P p=J.1b("1K"),o=n.1b("1K"),q=p.2P(p.2f||p.1H);K(((" "+q.r.2M+" ").3k(/\\db(?:7T){0,1}\\s/))&&q.r.1j&&!q.r.1j.N.3Q){M 13}$S(r).1o();K(!p.1L||"41"!=p.1D||!o.1L||"41"!=o.1D||p==o){M}2c(r.2X){1e"2D":K(p.8V){5d(p.8V)}p.8V=U;M;1g;1e"1Q":p.8V=p.6D.1p(p,o).2s(p.T.8X);1g;2i:p.6D(o);M}}.2t(J.r,m)).1t(J.T.3i,m.1b("1p:2l"));K("1Q"==J.T.3i){m.1t("2D",m.1b("1p:2l"))}K(m.2a!=J.1r.X.1Z){P l=$S(J.3j.2K(L(n){M(m.2a==n.2U.35&&J.2v==n.2v)},J))[0];K(l){m.1A("1K",l)}17{1k a(m,g.1T(g.3D(J.T),{2h:"2y",2v:J.2v}),{4H:m.6C,2f:J.1H,23:j+k})}}17{J.5s=m;m.1A("1K",J);K(""!=J.T.47){m.2p(J.T.47)}}m.19({8D:"2Y"}).2p("2Q-6D");J.4G.4a(m)},J)},de:L(){P e;K("13"!=J.T.2W&&"3B"!=J.T.2W){J.35.1t("8F",L(m){$S(m).1o()})}K(("1w"==J.T.97&&"1Q"==J.T.6A&&"55"==J.T.9K)||"2D"==J.T.97){J.1h.1t("2D",L(n){P m=$S(n).1o().4O();K("3B"!=J.1D){M}K(J.1h==n.4Q()||J.1h.56(n.4Q())){M}J.2J(12)}.2t(J))}K(!g.V.2B){J.24.1t("6E",L(n){P m=n.5G();K(3==m){M}K(J.T.5z){$S(n).1o();g.4L.9W(J.T.5z,(2==m)?"gg":J.T.9V)}17{K(1==m&&"2T"==J.8A){$S(n).1o();J.2J(12)}}}.2t(J))}17{J.24.1t("7l",L(m){P o=g.3I();K(m.8J.1v>1){M}J.24.1A("42:8M",{1H:m.8J[0].8v,8S:o})}.2t(J));J.24.1t("4K",L(o){P p=g.3I(),m=J.24.1b("42:8M");K(!m||o.au.1v>1){M}K(m.1H==o.8O[0].8v&&p-m.8S<=4J){K(J.T.5z){$S(o).1o();g.4L.9W(J.T.5z,J.T.9V);M}o.1o();J.2J(12);M}}.2t(J))}K(J.2d){P k,l,j;J.2d.1A("1p:8U",k=J.d9.2t(J)).1A("1p:1y",l=J.d0.2t(J));J.2d.1t("1Q",k).1t("2D",k).1t((g.V.2B)?"4K":"6E",l).1t("1y",L(m){$S(m).1o()});K("fn"==J.T.7e){J.1h.1A("1p:ec",j=L(n){P m=$S(n).1o().4O();K("3B"!=J.1D){M}K(J.1h==n.4Q()||J.1h.56(n.4Q())){M}J.74(("2D"==n.2X))}.2t(J)).1t("1Q",j).1t("2D",j)}}K(!g.V.2B){J.1h.1A("1p:af-1y",e=L(m){K(J.1h.56(m.4O())){M}K((/7g/i).2j(m.2X)||((1==m.5G()||0==m.5G())&&"3B"==J.1D)){J.2J(12,13)}}.2t(J));g.2G.1t((g.V.2B)?"7l":"1y",e)}},da:L(){J.2V=1k g.1S(J.1h,{4i:g.1S.3e[J.T.4N+J.5N[J.T.4N][0]],31:J.T.8P,46:J.46,6h:L(){P l=J.2P(J.2f||J.1H);J.1h.1F("Q",J.2V.2R.Q[0]);J.1h.1P(g.29);K(!g.V.2B){J.9Z(U)}J.74(13,13);K(J.2d&&g.V.2q&&g.V.3t<6){J.2d.1M()}K(!J.T.6l&&!(J.5n&&"3b"!=J.T.5L)){P j={};1B(P e 1I J.2V.2R){j[e]=J.2V.2R[e][0]}J.1h.19(j);K((" "+l.r.2M+" ").3k(/\\s(2Q|4E)\\s/)){l.r.2x(0,13)}}K(J.1E){K(g.V.2q&&g.V.3N&&J.3H){J.1E.1F("1U","2Y")}J.1E.2z.1F("R",0)}J.1h.19({2r:J.T.2r+1,1u:1})}.1p(J),44:L(){P j=J.2P(J.2f||J.1H);K(J.T.5z){J.1h.19({45:"7S"})}K(!(J.5n&&"3b"!=J.T.5L)){j.r.2p("2Q-3B-4H")}K("1M"!=J.T.7e){K(J.2d&&g.V.2q&&g.V.3t<6){J.2d.21();K(g.V.3l){g.$A(J.2d.2k("A")).2S(L(l){P m=l.1b("bg-1m");l.5B=m.l;l.4q=m.t})}}J.74()}K(J.1E){K(J.3H){P e=J.1h.1b("2m"),k=J.cQ(J.1h,J.1h.1Y().R,e.9n.1G()+e.99.1G());J.24.19(J.1h.4n("Q"));J.1E.1F("R",k-J.1E.1b("4X")).2z.1F("R",k);J.1h.1F("Q","1w");J.d8=J.1h.3n().Y}J.1E.1F("1U","28");J.az()}J.1D="3B";g.2G.1t("9y",J.cY.2t(J));K(J.T.8I&&J.24.1Y().Q<J.1r.9N){K(!J.24.1j){J.ee=1k c.1j(J.24,J.91)}17{J.24.1j.1z(J.91)}}}.1p(J)});J.4F=1k g.1S(J.1h,{4i:g.1S.3e.4v,31:J.T.5P,46:J.46,6h:L(){K(J.T.8I){c.1o(J.24)}J.74(13,13);K(J.2d&&g.V.3l){J.2d.1M()}J.1h.19({2r:J.T.2r});K(J.1E&&J.3H){J.1h.19(J.24.4n("Q"));J.24.1F("Q","1w")}}.1p(J),44:L(){K(!J.5n||(J.5n&&!J.2f&&!J.4G.1v)){P e=J.2P(J.2f||J.1H);e.9Z(13);e.r.4h("2Q-3B-4H").2x(1,13);K(e.1n){e.1n.21()}}J.1h.19({W:-6Z}).1P(J.5U);J.1D="41"}.1p(J)});K(g.V.3l){J.2V.N.70=J.4F.N.70=L(l,e,m,k){P j=k.Q+e;J.9j.19({Q:j,R:1s.ay(j/l)+m});K(k.1u){J.24.2x(k.1u)}}.1p(J,J.1h.1b("ar"),J.1h.1b("54"),J.1h.1b("4X"))}},3b:L(w,q){K(J.T.4C){M}K("41"!=J.1D){K("61"==J.1D){J.r.1A("4u",13);J.1z()}M}J.1D="64-3b";J.5n=w=w||U;J.cT().3y(L(p){K(p==J||J.5n){M}2c(p.1D){1e"64-2J":p.4F.1o(13);1g;1e"64-3b":p.2V.1o();p.1D="3B";2i:p.2J(12,13)}},J);P z=J.2P(J.2f||J.1H).r.1b("1K"),e=(z.18)?z.18.X.4A():z.r.4A(),v=(z.18)?z.18.X.3n():z.r.3n(),x=("4d-3R"==J.T.3X)?J.aH():{Q:J.1h.1b("2H").Q-J.1h.1b("54")+J.1h.1b("ao"),R:J.1h.1b("2H").R-J.1h.1b("4X")+J.1h.1b("av")},r={Q:x.Q+J.1h.1b("54"),R:x.R+J.1h.1b("4X")},s={},l=[J.1h.4n("5X","5M","5O","5I"),J.1h.1b("2o")],k={Q:[e.1f-e.Y,x.Q]};$S(["8W","8T","8Z","8z"]).3y(L(p){k["2o"+p]=[l[0]["2o"+p].1G(),l[1]["2o"+p].1G()]});P j=J.1m;P y=("55"==J.T.9K)?e:J.76();2c(J.T.8b){1e"5y":s=J.6f(r,y);1g;2i:K("4d-3R"==J.T.3X){x=J.aH({x:(3m(j.Y))?0+j.Y:(3m(j.1f))?0+j.1f:0,y:(3m(j.W))?0+j.W:(3m(j.1d))?0+j.1d:0});r={Q:x.Q+J.1h.1b("54"),R:x.R+J.1h.1b("4X")};k.Q[1]=x.Q}y.W=(y.W+=3m(j.W))?y.W:(y.1d-=3m(j.1d))?y.1d-r.R:y.W;y.1d=y.W+r.R;y.Y=(y.Y+=3m(j.Y))?y.Y:(y.1f-=3m(j.1f))?y.1f-r.Q:y.Y;y.1f=y.Y+r.Q;s=J.6f(r,y);1g}k.W=[v.W,s.y];k.Y=[v.Y,s.x+((J.1E&&"Y"==J.T.6q)?J.1E.1b("Q"):0)];K(w&&"3b"!=J.T.5L){k.Q=[x.Q,x.Q];k.W[0]=k.W[1];k.Y[0]=k.Y[1];k.1u=[0,1];J.2V.N.31=J.T.9d;J.2V.N.4i=g.1S.3e.4v}17{J.2V.N.4i=g.1S.3e[J.T.4N+J.5N[J.T.4N][0]];J.2V.N.31=J.T.8P;K(g.V.3l){J.24.2x(1)}K(J.T.6l){k.1u=[0,1]}}K(J.2d){g.$A(J.2d.2k("A")).3y(L(A){P p=A.1R("48-1m").3W(" ");K(g.V.3l){A.4q=1}17{p[1]="1N";A.19({"48-1m":p.8s(" ")})}});P m=g.$A(J.2d.2k("A")).2K(L(p){M"8B"==p.3A})[0],o=g.$A(J.2d.2k("A")).2K(L(p){M"8c"==p.3A})[0],u=J.cN(J.2v),n=J.cS(J.2v);K(m){(J==u&&(u==n||!J.T.6m))?m.1M():m.21()}K(o){(J==n&&(u==n||!J.T.6m))?o.1M():o.21()}}J.2V.1z(k);J.a7()},2J:L(e,n){K("3B"!=J.1D){M}J.1D="64-2J";J.5n=e=e||12;n=n||U;g.2G.2E("9y");P p=J.1h.4A();K(J.1E){J.az("1M");J.1E.2z.1F("R",0);K(g.V.2q&&g.V.3N&&J.3H){J.1E.1F("1U","2Y")}}P m={};K(e&&"3b"!=J.T.5L){K("5k"==J.T.5L){m.1u=[1,0]}m.Q=[J.2V.2R.Q[1],J.2V.2R.Q[1]];m.W=[J.2V.2R.W[1],J.2V.2R.W[1]];m.Y=[J.2V.2R.Y[1],J.2V.2R.Y[1]];J.4F.N.31=J.T.9d;J.4F.N.4i=g.1S.3e.4v}17{J.4F.N.31=(n)?0:J.T.5P;J.4F.N.4i=g.1S.3e[J.T.71+J.5N[J.T.71][1]];m=g.3D(J.2V.2R);1B(P j 1I m){K("5h"!=g.3h(m[j])){5p}m[j].aw()}K(!J.T.6l){3p m.1u}P l=J.2P(J.2f||J.1H).r.1b("1K"),q=(l.18)?l.18.X:l.r;m.Q[1]=[q.1Y().Q];m.W[1]=q.3n().W;m.Y[1]=q.3n().Y}J.4F.1z(m);K(e){e.3b(J,p)}P o=g.2G.1b("bg:7f");K(!e&&o){K("1J"!=o.el.1R("2w")){J.a7(13)}}},az:L(j){K(!J.1E){M}P e=J.1E.1b("5o");J.1E.1F("2n-y","1J");e.1o();e[j||"8G"](J.3H?J.T.6q:"7k")},74:L(j,l){P n=J.2d;K(!n){M}j=j||U;l=l||U;P k=n.1b("cb:7f"),e={};K(!k){n.1A("cb:7f",k=1k g.1S(n,{4i:g.1S.3e.4v,31:79}))}17{k.1o()}K(l){n.1F("1u",(j)?0:1);M}P m=n.1R("1u");e=(j)?{1u:[m,0]}:{1u:[m,1]};k.1z(e)},d9:L(m){P k=$S(m).1o().4O();K("3B"!=J.1D){M}2O{3C("a"!=k.3O.2L()&&k!=J.2d){k=k.2z}K("a"!=k.3O.2L()||k.56(m.4Q())){M}}36(l){M}P j=k.1R("48-1m").3W(" ");2c(m.2X){1e"1Q":j[1]=k.1R("R");1g;1e"2D":j[1]="1N";1g}K(g.V.3l){k.4q=j[1].1G()+1}17{k.19({"48-1m":j.8s(" ")})}},d0:L(k){P j=$S(k).1o().4O();3C("a"!=j.3O.2L()&&j!=J.2d){j=j.2z}K("a"!=j.3O.2L()){M}2c(j.3A){1e"8B":J.2J(J.94(J,J.T.6m));1g;1e"8c":J.2J(J.9h(J,J.T.6m));1g;1e"7j":J.2J(12);1g}},a7:L(j){j=j||U;P k=g.2G.1b("bg:7f"),e={},m=0;K(!k){P l=g.$1k("3c").2p("2Q-48").19({1m:"er",1U:"28",W:0,1d:0,Y:0,1f:0,2r:(J.T.2r-1),2n:"1J",7o:J.T.7o,1u:0,2m:0,1X:0,2o:0}).1P(g.29).1M();K(g.V.3l){l.4D(g.$1k("ai",{1Z:\'a5:"";\'},{Q:"1W%",R:"1W%",1U:"28",2K:"cZ()",W:0,ek:0,1m:"1O",2r:-1,2m:"2Y"}))}g.2G.1A("bg:7f",k=1k g.1S(l,{4i:g.1S.3e.4v,31:J.T.a3,6h:L(n){K(n){J.19(g.1T(g.2G.aG(),{1m:"1O"}))}}.1p(l,J.5m||g.V.2B),44:L(){J.2x(J.1R("1u"),13)}.1p(l)}));e={1u:[0,J.T.9X/1W]}}17{k.1o();m=k.el.1R("1u");k.el.1F("48-7G",J.T.7o);e=(j)?{1u:[m,0]}:{1u:[m,J.T.9X/1W]};k.N.31=J.T.a3}k.el.21();k.1z(e)},9Z:L(j){j=j||U;P e=J.2P(J.2f||J.1H);K(e.r.1j&&-1!=e.r.1j.4y){K(!j){e.r.1j.65();e.r.1j.3r=U;e.r.1j.1l.4V=U;e.r.1j.1l.X.1M();e.r.1j.1i.1M()}17{e.r.1j.6d(U)}}},76:L(k){k=k||0;P j=(g.V.2B)?{Q:1a.7r,R:1a.7q}:$S(1a).1Y(),e=$S(1a).77();M{Y:e.x+k,1f:e.x+j.Q-k,W:e.y+k,1d:e.y+j.R-k}},6f:L(k,l){P j=J.76(J.T.7L),e=$S(1a).aG();l=l||j;M{y:1s.3F(j.W,1s.3q(("4d-3R"==J.T.3X)?j.1d:e.R+k.R,l.1d-(l.1d-l.W-k.R)/2)-k.R),x:1s.3F(j.Y,1s.3q(j.1f,l.1f-(l.1f-l.Y-k.Q)/2)-k.Q)}},aH:L(l){P m=(g.V.2B)?{Q:1a.7r,R:1a.7q}:$S(1a).1Y(),r=J.1h.1b("2H"),n=J.1h.1b("ar"),k=J.1h.1b("54"),e=J.1h.1b("4X"),q=J.1h.1b("ao"),j=J.1h.1b("av"),p=0,o=0;K(l){m.Q-=l.x;m.R-=l.y}K(J.3H){p=1s.3q(J.2H.Q+q,1s.3q(r.Q,m.Q-k-J.4Z.x)),o=1s.3q(J.2H.R+j,1s.3q(r.R,m.R-J.4Z.y))}17{p=1s.3q(J.2H.Q+q,1s.3q(r.Q,m.Q-J.4Z.x)),o=1s.3q(J.2H.R+j,1s.3q(r.R,m.R-e-J.4Z.y))}K(p/o>n){p=o*n}17{K(p/o<n){o=p/n}}J.1h.1F("Q",p);K(J.cr){J.cr.19({W:(J.1r.X.1Y().R-J.cr.1Y().R)})}M{Q:1s.ay(p),R:1s.ay(o)}},cQ:L(l,j,e){P k=U;2c(g.V.4j){1e"a4":k="35-3J"!=(l.1R("3J-5D")||l.1R("-cR-3J-5D"));1g;1e"3x":k="35-3J"!=(l.1R("3J-5D")||l.1R("-3x-3J-5D"));1g;1e"2q":k=g.V.3N||"35-3J"!=(l.1R("3J-5D")||l.1R("-7u-3J-5D")||"35-3J");1g;2i:k="35-3J"!=l.1R("3J-5D");1g}M(k)?j:j-e},4W:L(o){L l(r){P q=[];K("78"==g.3h(r)){M r}1B(P m 1I r){q.4a(m.5Y()+":"+r[m])}M q.8s(";")}P k=l(o).3Y(),p=$S(k.3W(";")),n=12,j=12;p.3y(L(q){1B(P m 1I J.T){j=1k 4z("^"+m.5Y().2l(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]"+(("3T"==m)?"*":"+")+")$","i").5W(q.3Y());K(j){2c(g.3h(J.T[m])){1e"7i":J.T[m]=j[1].5S();1g;1e"5t":J.T[m]=(j[1].3f("."))?(j[1].cP()*((m.2L().3f("1u"))?1W:96)):j[1].1G();1g;2i:J.T[m]=j[1].3Y()}}}},J);1B(P e 1I J.8f){K(!J.8f.5H(e)){5p}j=1k 4z("(^|;)\\\\s*"+e.5Y().2l(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]+)\\\\s*(;|$)","i").5W(k);K(j){J.8f[e].1V(J,j[2])}}},95:L(){P e=12,l=J.1m,k=J.2H;1B(P j 1I l){e=1k 4z(""+j+"\\\\s*=\\\\s*([^,]+)","i").5W(J.T.8b);K(e){l[j]=(cO(l[j]=e[1].1G()))?l[j]:"1w"}}K((5Z(l.W)&&5Z(l.1d))||(5Z(l.Y)&&5Z(l.1f))){J.T.8b="5y"}K(!$S(["4d-3R","5C"]).52(J.T.3X)){1B(P j 1I k){e=1k 4z(""+j+"\\\\s*=\\\\s*([^,]+)","i").5W(J.T.3X);K(e){k[j]=(cO(k[j]=e[1].1G()))?k[j]:-1}}K(5Z(k.Q)&&5Z(k.R)){J.T.3X="4d-3R"}}},cM:L(e){P j,l;1B(P j 1I e){K(J.8k.5H(l=j.3w())){J.8k[l]=e[j]}}},2P:L(e){M $S(J.3j.2K(L(j){M(e==j.1H)}))[0]},5g:L(e,j){e=e||12;j=j||U;M $S(J.3j.2K(L(k){M(e==k.2v&&(j||k.1L)&&(j||"61"!=k.1D)&&(j||!k.T.4C))}))},9h:L(m,e){e=e||U;P j=J.5g(m.2v),k=j.4e(m)+1;M(k>=j.1v)?(!e||1>=j.1v)?1C:j[0]:j[k]},94:L(m,e){e=e||U;P j=J.5g(m.2v),k=j.4e(m)-1;M(k<0)?(!e||1>=j.1v)?1C:j[j.1v-1]:j[k]},cN:L(j){j=j||12;P e=J.5g(j,13);M(e.1v)?e[0]:1C},cS:L(j){j=j||12;P e=J.5g(j,13);M(e.1v)?e[e.1v-1]:1C},cT:L(){M $S(J.3j.2K(L(e){M("3B"==e.1D||"64-3b"==e.1D||"64-2J"==e.1D)}))},cY:L(k){P j=J.T.6m,m=12;K(!J.T.cX){g.2G.2E("9y");M 13}k=$S(k);K(J.T.cW&&!(k.dV||k.e0)){M U}2c(k.cU){1e 27:k.1o();J.2J(12);1g;1e 32:1e 34:1e 39:1e 40:m=J.9h(J,j||32==k.cU);1g;1e 33:1e 37:1e 38:m=J.94(J,j);1g;2i:}K(m){k.1o();J.2J(m)}}});P h={3t:"cV.0.33",N:{},7b:{},T:{3Q:U,4C:U,7d:"fd",3T:"9p",2W:"U"},1z:L(l){J.4P=$S(1a).1b("fg:4P",$S([]));P e=12,j=$S([]),k={};J.T=g.1T(J.T,J.aF());c.N=g.3D(J.T);b.N=g.3D(J.T);c.N.2W=("5C"==J.T.2W||"13"==J.T.2W);b.7b=J.7b;K(l){e=$S(l);K(e&&(" "+e.2M+" ").3k(/\\s(6c(?:7T){0,1}|2Q)\\s/)){j.4a(e)}17{M U}}17{j=$S(g.$A(g.29.2k("A")).2K(L(m){M(" "+m.2M+" ").3k(/\\s(6c(?:7T){0,1}|2Q)\\s/)}))}j.3y(L(p){p=$S(p);P m=p.2k("7c"),n=12;k=g.1T(g.3D(J.T),J.aF(p.3A||" "));K(p.4U("6c")||(p.4U("4E"))){K(m&&m.1v){n=p.3z(m[0])}c.1z(p,"1f-1y: "+("5C"==k.2W||"13"==k.2W));K(n){p.4D(n)}}K(p.4U("2Q")||(p.4U("4E"))){b.1z(p)}17{p.1x.45="7S"}J.4P.4a(p)},J);M 13},1o:L(m){P e=12,l=12,j=$S([]);K(m){e=$S(m);K(e&&(" "+e.2M+" ").3k(/\\s(6c(?:7T){0,1}|2Q)\\s/)){j=$S(J.4P.72(J.4P.4e(e),1))}17{M U}}17{j=$S(J.4P)}3C(j&&j.1v){l=$S(j[j.1v-1]);K(l.1j){l.1j.1o();c.3U.72(c.3U.4e(l.1j),1);l.1j=1C}b.1o(l);P k=j.72(j.4e(l),1);3p k}M 13},73:L(j){P e=12;K(j){J.1o(j);J.1z.1p(J).2s(80,j)}17{J.1o();J.1z.1p(J).2s(80)}M 13},2N:L(n,e,k,l){P m=$S(n),j=12;K(m){K((j=m.1b("1K"))){j.2P(j.2f||j.1H).1D="7m"}K(!c.2N(m,e,k,l)){b.2N(m,e,k,l)}}},3b:L(e){M b.3b(e)},2J:L(e){M b.2J(e)},aF:L(j){P e,p,l,k,n;e=12;p={};n=[];K(j){l=$S(j.3W(";"));l.2S(L(o){1B(P m 1I J.T){e=1k 4z("^"+m.5Y().2l(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]+)$","i").5W(o.3Y());K(e){2c(g.3h(J.T[m])){1e"7i":p[m]=e[1].5S();1g;1e"5t":p[m]=3L(e[1]);1g;2i:p[m]=e[1].3Y()}}}},J)}17{1B(k 1I J.N){e=J.N[k];2c(g.3h(J.T[k.3w()])){1e"7i":e=e.5v().5S();1g;1e"5t":e=3L(e);1g;2i:1g}p[k.3w()]=e}}M p}};$S(1c).1t("4I",L(){h.1z()});M h})(63);',62,1096,'|||||||||||||||||||||||||||||||||||||||||||||this|if|function|return|options||var|width|height|mjs|_o|false|j21|top|self|left||||null|true||||else|z7|j6|window|j29|document|bottom|case|right|break|t22|z47|zoom|new|z4|position|hint|stop|j24|px|z1|Math|je1|opacity|length|auto|style|click|start|j30|for|undefined|state|t25|j6Prop|j17|id|in|hidden|thumb|ready|hide|0px|absolute|j32|mouseover|j5|FX|extend|display|call|100|margin|j7|src||show|arguments|index|t23||||block|body|href|appendChild|switch|t26|title|t27|z6|initializeOn|default|test|byTag|replace|border|overflow|padding|j2|trident|zIndex|j27|j16|z3|group|visibility|j23|load|parentNode|hotspots|touchScreen|defined|mouseout|je2|prototype|doc|size|firstChild|restore|filter|toLowerCase|className|update|try|t16|MagicThumb|styles|j14|img|params|t30|rightClick|type|none|prefix||duration||||content|catch||||fullScreen|expand|DIV|zoomPosition|Transition|has|Element|j1|selectorsChange|thumbs|match|trident4|parseInt|j8|parent|delete|min|z30|z2|version|zoomWidth|selectors|j22|webkit|forEach|removeChild|rel|expanded|while|detach|captionText|max|createElement|hCaption|now|box|zoomHeight|parseFloat|init|backCompat|tagName|selectorsEffect|disableZoom|screen|getDoc|hintText|zooms|J_TYPE|split|expandSize|j26|capable||inz30|event|typeof|onComplete|cursor|fps|selectorsClass|background|z21|push|instanceof|constructor|fit|indexOf|_cleanup|J_UUID|j3|transition|engine|visible|Class|z44|j19s|apply|wrapper|scrollTop|mt_vml_|layout|z42|clicked|linear|j33|z43Bind|z28|RegExp|j9|timer|disableExpand|append|MagicZoomPlus|t31|t28|thumbnail|domready|300|touchend|win|nodeType|expandEffect|getTarget|items|getRelated|float|relative|opacityReverse|j13|z38|z37|padY|on|scrPad||z41|contains|hintPosition|padX|image|hasChild|Array|cbs|kill|div|showTitle|storage|clearTimeout|_tmpp|z9|t15|array|round|inner|fade|showLoading|ieBack|prevItem|slide|continue|requestAnimationFrame|createTextNode|selector|number|z34|toString|presto|Out|center|link|In|scrollLeft|original|sizing|divTag|onload|getButton|hasOwnProperty|paddingBottom|magicthumb|mode|slideshowEffect|paddingLeft|easing|paddingRight|restoreSpeed|loading|Doc|j18|borderWidth|t29|unload|exec|paddingTop|dashize|isNaN||uninitialized|200|magicJS|busy|pause|alwaysShowZoom|hintVisible|zoomDistance|dragMode|complete|render|MagicZoom|activate|getElementsByTagName|t14|setTimeout|onStart|onready|readyState|offset|keepThumbnail|slideshowLoop|pow|css3Transformations|initMouseEvent|captionPosition|gd56f7fsgd|setupHint|z43|z48|z36|_unbind|set|static|z45|expandTrigger|entireImage|rev|swap|mouseup|z35|throw|activatedEx|cloneNode|shift|z24|J_EUID|z13|_timer|zoomAlign|pad|100000px|calc|z18|events|changeContent|j19|forceAnimation|z29|z14|10000|onBeforeRender|restoreEffect|splice|refresh|t10||t13|j10|string|250|getElementsByClassName|lang|span|hintClass|buttons|t32|touch|currentStyle|boolean|close|vertical|touchstart|updating|css3Animation|backgroundColor|replaceChild|innerHeight|innerWidth|newImg|j31|ms|hoverTimer|pounce|PFX|z11|hintOpacity|selectorsEffectSpeed|loadingOpacity|speed|not|found|MagicJS|color|innerHTML|inline|random|z0|screenPadding|class|String|floor|9_|ieMode|MagicZoomPup|pointer|Plus|clickToActivate|ddx|error|abort|ddy|Ff|150|zoomViewHeight|lastSelector|defaults|documentElement|smoothing|initTopPos|initLeftPos|z33|_handlers|onerror|expandPosition|next|effect|holder|_deprecated|z10|dblclick|IMG|titleSource|_lang|500|naturalWidth|compatMode|features|dissolve|to|400|join|loadingMsg|theme_mac|identifier|button|item|namespaces|Right|media|previous|enabled|outline|cancelAnimationFrame|contextmenu|toggle|createEvent|panZoom|targetTouches|_event_prefix_|styleSheets|lastTap|callee|changedTouches|expandSpeed|implement|platform|ts|Bottom|hover|swapTimer|Top|selectorsMouseoverDelay|getStorage|Left||mzParams|rect|element|t18|parseExOptions|1000|restoreTrigger|z26|borderBottomWidth|ufx|onErrorHandler|mousemove|slideshowSpeed|onabort|url|_event_del_|t17|_event_add_|overlapBox|je3|navigator|destroy|borderTopWidth|preventDefault|Zoom|z20|j15|t6|getBox|prevent|custom|query|tl|keydown|head|clickToInitialize|moveOnClick|initialize|loadingPositionX|mousedown|z15|z23|loadingPositionY|shadow|HTMLElement|expandAlign|clickToDeactivate|z1Holder|nWidth|big|thumbChange|defaultView|stopAnimation|construct|startTime|textAlign|linkTarget|open|backgroundOpacity|loop|toggleMZ|smoothingSpeed|Function|10000px|backgroundSpeed|gecko|javascript|horizontal|t11|loopBind|buttonsPosition|Slide|request|offsetHeight||z46|external|J_EXTENDED|captionSource|IFRAME|uuid|cos|PI|out|el_arr|hspace|preservePosition|tc|ratio|tr|Event|touches|vspace|reverse|styleFloat|ceil|t12|5001|borderLeftWidth|caller|5000|z16|_z37|j12|resize|setupContent|touchmove|insertBefore|UUID|nativize|toArray|requestFullScreen|Date|backcompat|z31|date|od|charAt|DocumentTouch|concat|relatedTarget|opera|cancelBubble|mobile|hone|android|phone|textnode|stopPropagation|ip|z32|glow|compareDocumentPosition|wrap|getBoundingClientRect||change|transform|interval||object|preload|dispatchEvent|raiseEvent||getComputedStyle|420|1px|onError|styles_arr||finishTime|cubicIn|backIn|quadIn|expoIn|onAfterRender|sineIn|Alpha|elasticIn|DXImageTransform|setProps|Microsoft|offsetWidth|bounceIn|enclose|CancelFullScreen|Width|ios|XMLHttpRequest|xpath|zoomFade|localStorage|fitZoomWindow|z25|Khtml|preloadSelectorsSmall|preloadSelectorsBig|mozCancelAnimationFrame|blur|Moz|Webkit|z17|chrome|which|changeEventName|errorEventName|cancel|cancelFullScreen|addEventListener|magiczoom|zoomWindowEffect|documentMode|z19|900|webkit419||roundCss|x7||Image|expandTriggerDelay|captionSpeed|t5|alt|captionHeight|t4|captionWidth|mac|buttonsDisplay|backgroundPosition|add||inherit|transparent|ig|Tahoma|fontFamily|t1|cssClass|t2|align|back|gecko181|borderRightWidth|map|fontSize|fontWeight|101|charCodeAt|fromCharCode|urn|schemas|setLang|t19|isFinite|toFloat|adjBorder|moz|t20|t21|keyCode|v4|keyboardCtrl|keyboard|onKey|mask|cbClick|magicthumb_ie_ex|behavior|vml|com|microsoft|VML|backgroundImage|curLeft|cbHover|t8|sMagicZoom|fill|buttonClose|t7|z22|buttonPrevious|j20|unselectable|move|j28|zoomFadeOutSpeed|disable|_bind||entire|drag|zoomFadeInSpeed|naturalHeight|isReady|nHeight|z8|v2|buttonNext|z27|z39|Loading|abs|210|FullScreen|211|webkitIsFullScreen|fullscreenerror|220|dir|270|applicationCache|260|fullscreenchange|RequestFullScreen|msPerformance|190|rtl|191|192|419|181|ctrlKey|khtml|525|performance|postMessage|metaKey|009|cssFloat|clientWidth|clientHeight|presto925|MagicZoomHeader|childNodes|iframe|pageXOffset|pageYOffset|execCommand|cbhover|byClass|zoomItem|scrollWidth|scrollHeight|innerText|html|progid|lef||filters|hasLayout|getPropertyValue|AnimationName||fixed|setAttribute|offsetTop|offsetParent|offsetLeft|clientLeft|j11|clientTop|j4|msCancelAnimationFrame|blackberry|blazer|compal|bada|avantgo|querySelector|ontouchstart|tablet|elaine|fennec|lge|maemo|midp|kindle|iris|hiptop|iemobile|runtime|air|KeyboardEvent|KeyEvent|regexp|UIEvent|MouseEvent|exists|collection|Object|slice|getTime|setInterval|userAgent|evaluate|toUpperCase|insertRule|getElementById|addCSS|mmp|netfront|MagicZoomPlusHint|webos|linux|magiczoomplus|unknown|mozInnerScreenY|WebKitPoint|taintEnabled|other|mozRequestAnimationFrame|autohide|webkitCancelRequestAnimationFrame|Transform|oCancelAnimationFrame|msRequestAnimationFrame|webkitRequestAnimationFrame|oRequestAnimationFrame|getBoxObjectFor|ActiveXObject|re|plucker|pocket|ixi|os|ob|palm|psp|symbian|windows|xda|xiino|wap|vodafone|treo|up|animationName|DOMElement|imageSize|swapImage|MagicZoomHint|MagicThumbHint|Expand|clickTo|_self|distance|always|text|msg|Next|Previous|source|preserve|deactivate|slideOut|slideIn|caption|618|backOut|cubicOut|9999|ga2c976a|quadOut|MagicZoomLoading|getAttribute|bounceOut|_blank|amp|000000|10001|getAttributeNode|elasticOut|delay|Close|textDecoration|hand|MagicZoomBigImageCont|selectstart|MozUserSelect||highlight|elastic|10002|trident900|3px|MagicBoxGlow|frameBorder|MagicBoxShadow|sine|cubic|quad|tap|callout|getXY|middle|loader|Magic|Invalid|small|lastChild|initializing|z12|480|user|select|bounce|expo|mt|_new|expoOut|lt|initEvent|createEventObject|magic|cssText|tile|stroked|eventType|createStyleSheet|doScroll|DOMContentLoaded|currentTarget|loaded|fireEvent|temporary|detachEvent|attachEvent|clientY|target|pageY|clientX|returnValue|pageX|srcElement|fromElement|insertAdjacentHTML|removeEventListener|beforeEnd|BackgroundImageCache|toElement|coords|owningElement|111|rc24|00001|no|backgroundRepeat|sort|curFrame|clearInterval|repeat|ccc|sineOut|nextSibling'.split('|'),0,{}))

/*! skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!function(a,b,c){"use strict";function d(c){if(e=b.documentElement,f=b.body,T(),ha=this,c=c||{},ma=c.constants||{},c.easing)for(var d in c.easing)W[d]=c.easing[d];ta=c.edgeStrategy||"set",ka={beforerender:c.beforerender,render:c.render,keyframe:c.keyframe},la=c.forceHeight!==!1,la&&(Ka=c.scale||1),na=c.mobileDeceleration||y,pa=c.smoothScrolling!==!1,qa=c.smoothScrollingDuration||A,ra={targetTop:ha.getScrollTop()},Sa=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera)})(),Sa?(ja=b.getElementById(c.skrollrBody||z),ja&&ga(),X(),Ea(e,[s,v],[t])):Ea(e,[s,u],[t]),ha.refresh(),wa(a,"resize orientationchange",function(){var a=e.clientWidth,b=e.clientHeight;(b!==Pa||a!==Oa)&&(Pa=b,Oa=a,Qa=!0)});var g=U();return function h(){$(),va=g(h)}(),ha}var e,f,g={get:function(){return ha},init:function(a){return ha||new d(a)},VERSION:"0.6.30"},h=Object.prototype.hasOwnProperty,i=a.Math,j=a.getComputedStyle,k="touchstart",l="touchmove",m="touchcancel",n="touchend",o="skrollable",p=o+"-before",q=o+"-between",r=o+"-after",s="skrollr",t="no-"+s,u=s+"-desktop",v=s+"-mobile",w="linear",x=1e3,y=.004,z="skrollr-body",A=200,B="start",C="end",D="center",E="bottom",F="___skrollable_id",G=/^(?:input|textarea|button|select)$/i,H=/^\s+|\s+$/g,I=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,J=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,K=/^(@?[a-z\-]+)\[(\w+)\]$/,L=/-([a-z0-9_])/g,M=function(a,b){return b.toUpperCase()},N=/[\-+]?[\d]*\.?[\d]+/g,O=/\{\?\}/g,P=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,Q=/[a-z\-]+-gradient/g,R="",S="",T=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(j){var b=j(f,null);for(var c in b)if(R=c.match(a)||+c==c&&b[c].match(a))break;if(!R)return void(R=S="");R=R[0],"-"===R.slice(0,1)?(S=R,R={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[R]):S="-"+R.toLowerCase()+"-"}},U=function(){var b=a.requestAnimationFrame||a[R.toLowerCase()+"RequestAnimationFrame"],c=Ha();return(Sa||!b)&&(b=function(b){var d=Ha()-c,e=i.max(0,1e3/60-d);return a.setTimeout(function(){c=Ha(),b()},e)}),b},V=function(){var b=a.cancelAnimationFrame||a[R.toLowerCase()+"CancelAnimationFrame"];return(Sa||!b)&&(b=function(b){return a.clearTimeout(b)}),b},W={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-i.cos(a*i.PI)/2+.5},sqrt:function(a){return i.sqrt(a)},outCubic:function(a){return i.pow(a-1,3)+1},bounce:function(a){var b;if(.5083>=a)b=3;else if(.8489>=a)b=9;else if(.96208>=a)b=27;else{if(!(.99981>=a))return 1;b=91}return 1-i.abs(3*i.cos(a*b*1.028)/b)}};d.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,ia=[],Ra=0,a=b.getElementsByTagName("*")):a.length===c&&(a=[a]),d=0,e=a.length;e>d;d++){var g=a[d],h=g,i=[],j=pa,k=ta,l=!1;if(f&&F in g&&delete g[F],g.attributes){for(var m=0,n=g.attributes.length;n>m;m++){var p=g.attributes[m];if("data-anchor-target"!==p.name)if("data-smooth-scrolling"!==p.name)if("data-edge-strategy"!==p.name)if("data-emit-events"!==p.name){var q=p.name.match(I);if(null!==q){var r={props:p.value,element:g,eventType:p.name.replace(L,M)};i.push(r);var s=q[1];s&&(r.constant=s.substr(1));var t=q[2];/p$/.test(t)?(r.isPercentage=!0,r.offset=(0|t.slice(0,-1))/100):r.offset=0|t;var u=q[3],v=q[4]||u;u&&u!==B&&u!==C?(r.mode="relative",r.anchors=[u,v]):(r.mode="absolute",u===C?r.isEnd=!0:r.isPercentage||(r.offset=r.offset*Ka))}}else l=!0;else k=p.value;else j="off"!==p.value;else if(h=b.querySelector(p.value),null===h)throw'Unable to find anchor target "'+p.value+'"'}if(i.length){var w,x,y;!f&&F in g?(y=g[F],w=ia[y].styleAttr,x=ia[y].classAttr):(y=g[F]=Ra++,w=g.style.cssText,x=Da(g)),ia[y]={element:g,styleAttr:w,classAttr:x,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k,emitEvents:l,lastFrameIndex:-1},Ea(g,[o],[])}}}for(Aa(),d=0,e=a.length;e>d;d++){var z=ia[a[d][F]];z!==c&&(_(z),ba(z))}return ha},d.prototype.relativeToAbsolute=function(a,b,c){var d=e.clientHeight,f=a.getBoundingClientRect(),g=f.top,h=f.bottom-f.top;return b===E?g-=d:b===D&&(g-=d/2),c===E?g+=h:c===D&&(g+=h/2),g+=ha.getScrollTop(),g+.5|0},d.prototype.animateTo=function(a,b){b=b||{};var d=Ha(),e=ha.getScrollTop(),f=b.duration===c?x:b.duration;return oa={startTop:e,topDiff:a-e,targetTop:a,duration:f,startTime:d,endTime:d+f,easing:W[b.easing||w],done:b.done},oa.topDiff||(oa.done&&oa.done.call(ha,!1),oa=c),ha},d.prototype.stopAnimateTo=function(){oa&&oa.done&&oa.done.call(ha,!0),oa=c},d.prototype.isAnimatingTo=function(){return!!oa},d.prototype.isMobile=function(){return Sa},d.prototype.setScrollTop=function(b,c){return sa=c===!0,Sa?Ta=i.min(i.max(b,0),Ja):a.scrollTo(0,b),ha},d.prototype.getScrollTop=function(){return Sa?Ta:a.pageYOffset||e.scrollTop||f.scrollTop||0},d.prototype.getMaxScrollTop=function(){return Ja},d.prototype.on=function(a,b){return ka[a]=b,ha},d.prototype.off=function(a){return delete ka[a],ha},d.prototype.destroy=function(){var a=V();a(va),ya(),Ea(e,[t],[s,u,v]);for(var b=0,d=ia.length;d>b;b++)fa(ia[b].element);e.style.overflow=f.style.overflow="",e.style.height=f.style.height="",ja&&g.setStyle(ja,"transform","none"),ha=c,ja=c,ka=c,la=c,Ja=0,Ka=1,ma=c,na=c,La="down",Ma=-1,Oa=0,Pa=0,Qa=!1,oa=c,pa=c,qa=c,ra=c,sa=c,Ra=0,ta=c,Sa=!1,Ta=0,ua=c};var X=function(){var d,g,h,j,o,p,q,r,s,t,u,v;wa(e,[k,l,m,n].join(" "),function(a){var e=a.changedTouches[0];for(j=a.target;3===j.nodeType;)j=j.parentNode;switch(o=e.clientY,p=e.clientX,t=a.timeStamp,G.test(j.tagName)||a.preventDefault(),a.type){case k:d&&d.blur(),ha.stopAnimateTo(),d=j,g=q=o,h=p,s=t;break;case l:G.test(j.tagName)&&b.activeElement!==j&&a.preventDefault(),r=o-q,v=t-u,ha.setScrollTop(Ta-r,!0),q=o,u=t;break;default:case m:case n:var f=g-o,w=h-p,x=w*w+f*f;if(49>x){if(!G.test(d.tagName)){d.focus();var y=b.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,a.view,1,e.screenX,e.screenY,e.clientX,e.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(y)}return}d=c;var z=r/v;z=i.max(i.min(z,3),-3);var A=i.abs(z/na),B=z*A+.5*na*A*A,C=ha.getScrollTop()-B,D=0;C>Ja?(D=(Ja-C)/B,C=Ja):0>C&&(D=-C/B,C=0),A*=1-D,ha.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),a.scrollTo(0,0),e.style.overflow=f.style.overflow="hidden"},Y=function(){var a,b,c,d,f,g,h,j,k,l,m,n=e.clientHeight,o=Ba();for(j=0,k=ia.length;k>j;j++)for(a=ia[j],b=a.element,c=a.anchorTarget,d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],l=h.offset,m=o[h.constant]||0,h.frame=l,h.isPercentage&&(l*=n,h.frame=l),"relative"===h.mode&&(fa(b),h.frame=ha.relativeToAbsolute(c,h.anchors[0],h.anchors[1])-l,fa(b,!0)),h.frame+=m,la&&!h.isEnd&&h.frame>Ja&&(Ja=h.frame);for(Ja=i.max(Ja,Ca()),j=0,k=ia.length;k>j;j++){for(a=ia[j],d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],m=o[h.constant]||0,h.isEnd&&(h.frame=Ja-h.offset+m);a.keyFrames.sort(Ia)}},Z=function(a,b){for(var c=0,d=ia.length;d>c;c++){var e,f,i=ia[c],j=i.element,k=i.smoothScrolling?a:b,l=i.keyFrames,m=l.length,n=l[0],s=l[l.length-1],t=k<n.frame,u=k>s.frame,v=t?n:s,w=i.emitEvents,x=i.lastFrameIndex;if(t||u){if(t&&-1===i.edge||u&&1===i.edge)continue;switch(t?(Ea(j,[p],[r,q]),w&&x>-1&&(za(j,n.eventType,La),i.lastFrameIndex=-1)):(Ea(j,[r],[p,q]),w&&m>x&&(za(j,s.eventType,La),i.lastFrameIndex=m)),i.edge=t?-1:1,i.edgeStrategy){case"reset":fa(j);continue;case"ease":k=v.frame;break;default:case"set":var y=v.props;for(e in y)h.call(y,e)&&(f=ea(y[e].value),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f));continue}}else 0!==i.edge&&(Ea(j,[o,q],[p,r]),i.edge=0);for(var z=0;m-1>z;z++)if(k>=l[z].frame&&k<=l[z+1].frame){var A=l[z],B=l[z+1];for(e in A.props)if(h.call(A.props,e)){var C=(k-A.frame)/(B.frame-A.frame);C=A.props[e].easing(C),f=da(A.props[e].value,B.props[e].value,C),f=ea(f),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f)}w&&x!==z&&("down"===La?za(j,A.eventType,La):za(j,B.eventType,La),i.lastFrameIndex=z);break}}},$=function(){Qa&&(Qa=!1,Aa());var a,b,d=ha.getScrollTop(),e=Ha();if(oa)e>=oa.endTime?(d=oa.targetTop,a=oa.done,oa=c):(b=oa.easing((e-oa.startTime)/oa.duration),d=oa.startTop+b*oa.topDiff|0),ha.setScrollTop(d,!0);else if(!sa){var f=ra.targetTop-d;f&&(ra={startTop:Ma,topDiff:d-Ma,targetTop:d,startTime:Na,endTime:Na+qa}),e<=ra.endTime&&(b=W.sqrt((e-ra.startTime)/qa),d=ra.startTop+b*ra.topDiff|0)}if(sa||Ma!==d){La=d>Ma?"down":Ma>d?"up":La,sa=!1;var h={curTop:d,lastTop:Ma,maxTop:Ja,direction:La},i=ka.beforerender&&ka.beforerender.call(ha,h);i!==!1&&(Z(d,ha.getScrollTop()),Sa&&ja&&g.setStyle(ja,"transform","translate(0, "+-Ta+"px) "+ua),Ma=d,ka.render&&ka.render.call(ha,h)),a&&a.call(ha,!1)}Na=e},_=function(a){for(var b=0,c=a.keyFrames.length;c>b;b++){for(var d,e,f,g,h=a.keyFrames[b],i={};null!==(g=J.exec(h.props));)f=g[1],e=g[2],d=f.match(K),null!==d?(f=d[1],d=d[2]):d=w,e=e.indexOf("!")?aa(e):[e.slice(1)],i[f]={value:e,easing:W[d]};h.props=i}},aa=function(a){var b=[];return P.lastIndex=0,a=a.replace(P,function(a){return a.replace(N,function(a){return a/255*100+"%"})}),S&&(Q.lastIndex=0,a=a.replace(Q,function(a){return S+a})),a=a.replace(N,function(a){return b.push(+a),"{?}"}),b.unshift(a),b},ba=function(a){var b,c,d={};for(b=0,c=a.keyFrames.length;c>b;b++)ca(a.keyFrames[b],d);for(d={},b=a.keyFrames.length-1;b>=0;b--)ca(a.keyFrames[b],d)},ca=function(a,b){var c;for(c in b)h.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},da=function(a,b,c){var d,e=a.length;if(e!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var f=[a[0]];for(d=1;e>d;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},ea=function(a){var b=1;return O.lastIndex=0,a[0].replace(O,function(){return a[b++]})},fa=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;f>e;e++)d=a[e],c=ia[d[F]],c&&(b?(d.style.cssText=c.dirtyStyleAttr,Ea(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=Da(d),d.style.cssText=c.styleAttr,Ea(d,c.classAttr)))},ga=function(){ua="translateZ(0)",g.setStyle(ja,"transform",ua);var a=j(ja),b=a.getPropertyValue("transform"),c=a.getPropertyValue(S+"transform"),d=b&&"none"!==b||c&&"none"!==c;d||(ua="")};g.setStyle=function(a,b,c){var d=a.style;if(b=b.replace(L,M).replace("-",""),"zIndex"===b)isNaN(c)?d[b]=c:d[b]=""+(0|c);else if("float"===b)d.styleFloat=d.cssFloat=c;else try{R&&(d[R+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(e){}};var ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa=g.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(" ");for(var f,g=0,h=c.length;h>g;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent("on"+f,e),Ua.push({element:b,name:f,listener:d})},xa=g.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;e>d;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent("on"+b[d],c)},ya=function(){for(var a,b=0,c=Ua.length;c>b;b++)a=Ua[b],xa(a.element,a.name,a.listener);Ua=[]},za=function(a,b,c){ka.keyframe&&ka.keyframe.call(ha,a,b,c)},Aa=function(){var a=ha.getScrollTop();Ja=0,la&&!Sa&&(f.style.height=""),Y(),la&&!Sa&&(f.style.height=Ja+e.clientHeight+"px"),Sa?ha.setScrollTop(i.min(ha.getScrollTop(),Ja)):ha.setScrollTop(a,!0),sa=!0},Ba=function(){var a,b,c=e.clientHeight,d={};for(a in ma)b=ma[a],"function"==typeof b?b=b.call(ha):/p$/.test(b)&&(b=b.slice(0,-1)/100*c),d[a]=b;return d},Ca=function(){var a,b=0;return ja&&(b=i.max(ja.offsetHeight,ja.scrollHeight)),a=i.max(b,f.scrollHeight,f.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight),a-e.clientHeight},Da=function(b){var c="className";return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c="baseVal"),b[c]},Ea=function(b,d,e){var f="className";if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f="baseVal"),e===c)return void(b[f]=d);for(var g=b[f],h=0,i=e.length;i>h;h++)g=Ga(g).replace(Ga(e[h])," ");g=Fa(g);for(var j=0,k=d.length;k>j;j++)-1===Ga(g).indexOf(Ga(d[j]))&&(g+=" "+d[j]);b[f]=Fa(g)},Fa=function(a){return a.replace(H,"")},Ga=function(a){return" "+a+" "},Ha=Date.now||function(){return+new Date},Ia=function(a,b){return a.frame-b.frame},Ja=0,Ka=1,La="down",Ma=-1,Na=Ha(),Oa=0,Pa=0,Qa=!1,Ra=0,Sa=!1,Ta=0,Ua=[];"function"==typeof define&&define.amd?define([],function(){return g}):"undefined"!=typeof module&&module.exports?module.exports=g:a.skrollr=g}(window,document);


//bind show reviews and write review buttons click
jQuery('div.reviewapp-reviews div.reviews-control-write a').unbind('click');
jQuery('div.reviewapp-reviews div.reviews-control-write a').click(function(){
    jQuery('div.reviewapp-reviews div.reviews-list').slideUp(300);
    jQuery('div.reviewapp-reviews div.add_reviews_form').slideToggle(300);
    return false;
});
jQuery('div.reviewapp-reviews div.reviews-control-show a').unbind('click');
jQuery('div.reviewapp-reviews div.reviews-control-show a').click(function(){
    jQuery('div.reviewapp-reviews div.add_reviews_form').slideUp(300);
    jQuery('div.reviewapp-reviews div.reviews-list').slideToggle(300);
    return false;
});

//bind rating stars mouse events
jQuery('div.reviewapp-reviews table.write-review a.review-rating-star').unbind('mouseover');
jQuery('div.reviewapp-reviews table.write-review a.review-rating-star').mouseover(function(){
    var ref = jQuery(this).attr('ref');
    for (var i = 1; i <= 5; i++) {
        if (i <= ref) {
            jQuery('div.reviewapp-reviews table.write-review a.review-rating-star[ref=' + i + ']').addClass('fill');
        } else {
            jQuery('div.reviewapp-reviews table.write-review a.review-rating-star[ref=' + i + ']').removeClass('fill');
        }
    }
});
jQuery('div.reviewapp-reviews table.write-review a.review-rating-star').unbind('mouseout');
jQuery('div.reviewapp-reviews table.write-review a.review-rating-star').mouseout(function(){
    jQuery('div.reviewapp-reviews table.write-review a.review-rating-star').removeClass('fill');
});
jQuery('div.reviewapp-reviews table.write-review a.review-rating-star').unbind('click');
jQuery('div.reviewapp-reviews table.write-review a.review-rating-star').click(function(){
    var ref = jQuery(this).attr('ref');
    for (var i = 1; i <= 5; i++) {
        if (i <= ref) {
            jQuery('div.reviewapp-reviews table.write-review a.review-rating-star[ref=' + i + ']').addClass('full');
        } else {
            jQuery('div.reviewapp-reviews table.write-review a.review-rating-star[ref=' + i + ']').removeClass('full');
        }
    }
    jQuery('#review-rating-hidden').val(ref);
});


jQuery('div.reviewapp-reviews div.reviews-control-write').fadeIn(300);


//bind send button click
jQuery('#reviewapp_form_submit').unbind('click');
jQuery('#reviewapp_form_submit').click(function(){
    jQuery('div.reviewapp-reviews .reviews-error').html('');
    jQuery('#reviewapp_form_submit').hide();
    jQuery('#reviewapp_form_submit').after('<div class="reviews-loading">Sending review...</div>');

    //validation
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (
        !jQuery('#reviewapp_form input[name="review[name]"]').val() ||
        !emailReg.test(jQuery('#reviewapp_form input[name="review[email]"]').val()) ||
        !jQuery('#reviewapp_form input[name="review[rating]"]').val() ||
        !jQuery('#reviewapp_form input[name="review[location]"]').val() ||
            //!jQuery('#reviewapp_form input[name="review[title]"]').val() ||
        !jQuery('#reviewapp_form textarea[name="review[text]"]').val()
    ) {
        jQuery('div.reviewapp-reviews .reviews-loading').remove();
        jQuery('#reviewapp_form_submit').show();
        jQuery('div.reviewapp-reviews .reviews-error').html('Please fill out all fields and rate the product. Email must be valid.');
        return;
    }
    var data = jQuery('#reviewapp_form').serialize();
    data+= '&shop_id=11250762';
    //if (jQuery.browser.msie === true) {
    if ('XDomainRequest' in window && window.XDomainRequest !== null) {
        //use XDomainRequest for IE8+
        var xdr = new XDomainRequest();
        xdr.open('post', 'https://ainaz.pair.com/~chwan/rev/client/addreview');
        xdr.onload = function () {
            var data = jQuery.parseJSON(xdr.responseText);
            if (data.success) {
                jQuery('div.reviewapp-reviews .reviews-loading').remove();
                jQuery('div.reviewapp-reviews div.add_reviews_form').slideUp(300, function(){
                    jQuery('div.reviewapp-reviews div.add_reviews_form').html('<div class="reviews-success">Your review was sent successfully.</div>');
                    jQuery('div.reviewapp-reviews div.add_reviews_form').slideDown(300);
                });
            } else {
                jQuery('div.reviewapp-reviews .reviews-loading').remove();
                jQuery('#reviewapp_form_submit').show();
                jQuery('div.reviewapp-reviews .reviews-error').html(data.msg);
            }
        };
        xdr.onerror = function() {
            jQuery('div.reviewapp-reviews .reviews-loading').remove();
            jQuery('#reviewapp_form_submit').show();
            jQuery('div.reviewapp-reviews .reviews-error').html('An error has occurred during sending your review.');
        };
        xdr.onprogress = function() { };
        xdr.ontimeout = function() { };
        xdr.timeout = 5000;
        xdr.send(escape(data));
    } else {
        jQuery.ajax({
            url: 'https://ainaz.pair.com/~chwan/rev/client/addreview',
            dataType: 'json',
            type: 'POST',
            data: data,
            success: function(data) {
                if (data.success) {
                    jQuery('div.reviewapp-reviews .reviews-loading').remove();
                    jQuery('div.reviewapp-reviews div.add_reviews_form').slideUp(300, function(){
                        jQuery('div.reviewapp-reviews div.add_reviews_form').html('<div class="reviews-success">Your review was sent successfully.</div>');
                        jQuery('div.reviewapp-reviews div.add_reviews_form').slideDown(300);
                    });
                } else {
                    jQuery('div.reviewapp-reviews .reviews-loading').remove();
                    jQuery('#reviewapp_form_submit').show();
                    jQuery('div.reviewapp-reviews .reviews-error').html(data.msg);
                }
            },
            error: function(XMLHttpRequest,status,error) {
                jQuery('div.reviewapp-reviews .reviews-loading').remove();
                jQuery('#reviewapp_form_submit').show();
                jQuery('div.reviewapp-reviews .reviews-error').html('An error occurred while sending Your message.<br/>Try again, please.');
            }
        });
    }
});

//bind report buttons
jQuery('.review-item-report a').unbind('click');
jQuery('.review-item-report a').click(function(){
    var reviewId = jQuery(this).attr('id');
    if (confirm('Are you certain you want to report this review?')) {
        jQuery.ajax({
            url: 'https://ainaz.pair.com/~chwan/rev/client/reportreview',
            type: 'POST',
            dataType: 'json',
            data: {
                review_id : reviewId
            },
            success: function(data, textStatus, jqXHR) {
                if (data.success) {
                    jQuery('div.reviewapp-reviews #reportDiv_' + reviewId).html('Report was sent succcessfully.');
                } else {
                    jQuery('div.reviewapp-reviews #reportDiv_' + reviewId + ' .review-report-error').html(data.msg);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                jQuery('div.reviewapp-reviews #reportDiv_' + reviewId + ' .review-report-error').html('Could not send report.');
            }
        });
    }

    return false;
});

/* If placeholder attribute not supported */
test = document.createElement('input');
if (!('placeholder' in test)) {
    function initPlaceholder() {
        $('input[placeholder]').focus(focusPlaceholder);
        $('input[placeholder]').focusout(focusoutPlaceholder);
        $('input[placeholder]').each(function(){
            if ($(this).val() == '') {
                $(this).val($(this).attr('placeholder'));
                $(this).css('color','#ddd');
            }
        });
    }
    function focusPlaceholder() {
        if ($(this).val() == $(this).attr('placeholder')) {
            $(this).val('');
            $(this).css('color','');
        }
    }
    function focusoutPlaceholder() {
        if ($(this).val() == '') {
            $(this).val($(this).attr('placeholder'));
            $(this).css('color','#ccc');
        }
    }
    $(document).ready(initPlaceholder);
}


// transformicons
!function(n,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():n.transformicons=r()}(this||window,function(){"use strict";var n={},r="tcon-transform",t={transform:["click"],revert:["click"]},e=function(n){return"string"==typeof n?Array.prototype.slice.call(document.querySelectorAll(n)):"undefined"==typeof n||n instanceof Array?n:[n]},o=function(n){return"string"==typeof n?n.toLowerCase().split(" "):n},f=function(n,r,f){var c=(f?"remove":"add")+"EventListener",u=e(n),s=u.length,a={};for(var l in t)a[l]=r&&r[l]?o(r[l]):t[l];for(;s--;)for(var d in a)for(var v=a[d].length;v--;)u[s][c](a[d][v],i)},i=function(r){n.toggle(r.currentTarget)};return n.add=function(r,t){return f(r,t),n},n.remove=function(r,t){return f(r,t,!0),n},n.transform=function(t){return e(t).forEach(function(n){n.classList.add(r)}),n},n.revert=function(t){return e(t).forEach(function(n){n.classList.remove(r)}),n},n.toggle=function(t){return e(t).forEach(function(t){n[t.classList.contains(r)?"revert":"transform"](t)}),n},n});



/*!
 * JavaScript Cookie v2.1.2
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function () {
            window.Cookies = OldCookies;
            return api;
        };
    }
}(function () {
    function extend () {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
            var attributes = arguments[ i ];
            for (var key in attributes) {
                result[key] = attributes[key];
            }
        }
        return result;
    }

    function init (converter) {
        function api (key, value, attributes) {
            var result;
            if (typeof document === 'undefined') {
                return;
            }

            // Write

            if (arguments.length > 1) {
                attributes = extend({
                    path: '/'
                }, api.defaults, attributes);

                if (typeof attributes.expires === 'number') {
                    var expires = new Date();
                    expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                    attributes.expires = expires;
                }

                try {
                    result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                        value = result;
                    }
                } catch (e) {}

                if (!converter.write) {
                    value = encodeURIComponent(String(value))
                        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                } else {
                    value = converter.write(value, key);
                }

                key = encodeURIComponent(String(key));
                key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                key = key.replace(/[\(\)]/g, escape);

                return (document.cookie = [
                    key, '=', value,
                    attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                    attributes.path ? '; path=' + attributes.path : '',
                    attributes.domain ? '; domain=' + attributes.domain : '',
                    attributes.secure ? '; secure' : ''
                ].join(''));
            }

            // Read

            if (!key) {
                result = {};
            }

            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling "get()"
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var rdecode = /(%[0-9A-Z]{2})+/g;
            var i = 0;

            for (; i < cookies.length; i++) {
                var parts = cookies[i].split('=');
                var cookie = parts.slice(1).join('=');

                if (cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }

                try {
                    var name = parts[0].replace(rdecode, decodeURIComponent);
                    cookie = converter.read ?
                        converter.read(cookie, name) : converter(cookie, name) ||
                    cookie.replace(rdecode, decodeURIComponent);

                    if (this.json) {
                        try {
                            cookie = JSON.parse(cookie);
                        } catch (e) {}
                    }

                    if (key === name) {
                        result = cookie;
                        break;
                    }

                    if (!key) {
                        result[name] = cookie;
                    }
                } catch (e) {}
            }

            return result;
        }

        api.set = api;
        api.get = function (key) {
            return api(key);
        };
        api.getJSON = function () {
            return api.apply({
                json: true
            }, [].slice.call(arguments));
        };
        api.defaults = {};

        api.remove = function (key, attributes) {
            api(key, '', extend(attributes, {
                expires: -1
            }));
        };

        api.withConverter = init;

        return api;
    }

    return init(function () {});
}));
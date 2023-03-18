(function(_t){typeof define=="function"&&define.amd?define(_t):_t()})(function(){"use strict";var qy=Object.defineProperty;var $y=(_t,un,tn)=>un in _t?qy(_t,un,{enumerable:!0,configurable:!0,writable:!0,value:tn}):_t[un]=tn;var ft=(_t,un,tn)=>($y(_t,typeof un!="symbol"?un+"":un,tn),tn);const _t={clearColor:11184810,autoSize:!0,Width:0,Height:0};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const un="150",tn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oh=0,Pa=1,ah=2,Da=1,lh=2,ls=3,Gn=0,qt=1,An=2,Wn=0,Si=1,Ra=2,Ia=3,Fa=4,ch=5,Ti=100,uh=101,hh=102,ka=103,Oa=104,dh=200,fh=201,ph=202,mh=203,za=204,Na=205,gh=206,_h=207,xh=208,yh=209,vh=210,wh=0,bh=1,Mh=2,Jr=3,Sh=4,Th=5,Eh=6,Ah=7,Js=0,Ch=1,Lh=2,Cn=0,Ph=1,Dh=2,Rh=3,Ih=4,Fh=5,Ba=300,Ei=301,Ai=302,Qs=303,Qr=304,er=306,cs=1e3,$t=1001,eo=1002,Lt=1003,Ua=1004,to=1005,nn=1006,kh=1007,us=1008,ri=1009,Oh=1010,zh=1011,Va=1012,Nh=1013,oi=1014,jn=1015,hs=1016,Bh=1017,Uh=1018,Ci=1020,Vh=1021,sn=1023,Hh=1024,Gh=1025,ai=1026,Li=1027,Wh=1028,jh=1029,Xh=1030,qh=1031,$h=1033,no=33776,io=33777,so=33778,ro=33779,Ha=35840,Ga=35841,Wa=35842,ja=35843,Yh=36196,Xa=37492,qa=37496,$a=37808,Ya=37809,Za=37810,Ka=37811,Ja=37812,Qa=37813,el=37814,tl=37815,nl=37816,il=37817,sl=37818,rl=37819,ol=37820,al=37821,oo=36492,Zh=36283,ll=36284,cl=36285,ul=36286,tr=2300,nr=2301,ao=2302,hl=2400,dl=2401,fl=2402,Kh=2500,li=3e3,et=3001,Jh=3200,Qh=3201,ir=0,ed=1,xn="srgb",ds="srgb-linear",pl="display-p3",lo=7680,td=519,ml=35044,gl="300 es",co=1035;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _l=1234567;const fs=Math.PI/180,ps=180/Math.PI;function Xn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Pt(r,e,t){return Math.max(e,Math.min(t,r))}function uo(r,e){return(r%e+e)%e}function nd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function id(r,e,t){return r!==e?(t-r)/(e-r):0}function ms(r,e,t){return(1-t)*r+t*e}function sd(r,e,t,n){return ms(r,e,1-Math.exp(-t*n))}function rd(r,e=1){return e-Math.abs(uo(r,e*2)-e)}function od(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ad(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ld(r,e){return r+Math.floor(Math.random()*(e-r+1))}function cd(r,e){return r+Math.random()*(e-r)}function ud(r){return r*(.5-Math.random())}function hd(r){r!==void 0&&(_l=r);let e=_l+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dd(r){return r*fs}function fd(r){return r*ps}function ho(r){return(r&r-1)===0&&r!==0}function xl(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function pd(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),x=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*x,l*m,a*c);break;case"YXY":r.set(l*m,a*h,l*x,a*c);break;case"ZYZ":r.set(l*x,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gs(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const yn={DEG2RAD:fs,RAD2DEG:ps,generateUUID:Xn,clamp:Pt,euclideanModulo:uo,mapLinear:nd,inverseLerp:id,lerp:ms,damp:sd,pingpong:rd,smoothstep:od,smootherstep:ad,randInt:ld,randFloat:cd,randFloatSpread:ud,seededRandom:hd,degToRad:dd,radToDeg:fd,isPowerOfTwo:ho,ceilPowerOfTwo:xl,floorPowerOfTwo:yl,setQuaternionFromProperEuler:pd,normalize:Gt,denormalize:gs};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],x=n[8],g=i[0],_=i[3],w=i[6],b=i[1],v=i[4],T=i[7],S=i[2],A=i[5],z=i[8];return s[0]=o*g+a*b+l*S,s[3]=o*_+a*v+l*A,s[6]=o*w+a*T+l*z,s[1]=c*g+h*b+u*S,s[4]=c*_+h*v+u*A,s[7]=c*w+h*T+u*z,s[2]=f*g+m*b+x*S,s[5]=f*_+m*v+x*A,s[8]=f*w+m*T+x*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,m=c*s-o*l,x=t*u+n*f+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(h*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fo.makeScale(e,t)),this}rotate(e){return this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new Ft;function vl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _s(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class pt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],m=s[o+1],x=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=g;return}if(u!==g||l!==f||c!==m||h!==x){let _=1-a;const w=l*f+c*m+h*x+u*g,b=w>=0?1:-1,v=1-w*w;if(v>Number.EPSILON){const S=Math.sqrt(v),A=Math.atan2(S,w*b);_=Math.sin(_*A)/S,a=Math.sin(a*A)/S}const T=a*b;if(l=l*_+f*T,c=c*_+m*T,h=h*_+x*T,u=u*_+g*T,_===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+h*u+l*m-c*f,e[t+1]=l*x+h*f+c*u-a*m,e[t+2]=c*x+h*m+a*f-l*u,e[t+3]=h*x-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),m=l(i/2),x=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*m*x,this._y=c*m*u-f*h*x,this._z=c*h*x+f*m*u,this._w=c*h*u-f*m*x;break;case"YXZ":this._x=f*h*u+c*m*x,this._y=c*m*u-f*h*x,this._z=c*h*x-f*m*u,this._w=c*h*u+f*m*x;break;case"ZXY":this._x=f*h*u-c*m*x,this._y=c*m*u+f*h*x,this._z=c*h*x+f*m*u,this._w=c*h*u-f*m*x;break;case"ZYX":this._x=f*h*u-c*m*x,this._y=c*m*u+f*h*x,this._z=c*h*x-f*m*u,this._w=c*h*u+f*m*x;break;case"YZX":this._x=f*h*u+c*m*x,this._y=c*m*u+f*h*x,this._z=c*h*x-f*m*u,this._w=c*h*u-f*m*x;break;case"XZY":this._x=f*h*u-c*m*x,this._y=c*m*u-f*h*x,this._z=c*h*x+f*m*u,this._w=c*h*u+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+h*-a-u*-o,this.y=h*l+f*-o+u*-s-c*-a,this.z=u*l+f*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new P,wl=new pt;function Pi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function mo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const md=new Ft().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),gd=new Ft().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),qn=new P;function _d(r){return r.convertSRGBToLinear(),qn.set(r.r,r.g,r.b).applyMatrix3(gd),r.setRGB(qn.x,qn.y,qn.z)}function xd(r){return qn.set(r.r,r.g,r.b).applyMatrix3(md),r.setRGB(qn.x,qn.y,qn.z).convertLinearToSRGB()}const yd={[ds]:r=>r,[xn]:r=>r.convertSRGBToLinear(),[pl]:_d},vd={[ds]:r=>r,[xn]:r=>r.convertLinearToSRGB(),[pl]:xd},Nt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return ds},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=yd[e],i=vd[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Di;class bl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Di===void 0&&(Di=_s("canvas")),Di.width=e.width,Di.height=e.height;const n=Di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ml{constructor(e=null){this.isSource=!0,this.uuid=Xn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(go(i[o].image)):s.push(go(i[o]))}else s=go(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function go(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;class Dt extends ci{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=$t,i=$t,s=nn,o=us,a=sn,l=ri,c=Dt.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Xn(),this.name="",this.source=new Ml(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ba)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dt.DEFAULT_IMAGE=null,Dt.DEFAULT_MAPPING=Ba,Dt.DEFAULT_ANISOTROPY=1;class qe{constructor(e=0,t=0,n=0,i=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],x=l[9],g=l[2],_=l[6],w=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(x-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(x+_)<.1&&Math.abs(c+m+w-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,T=(m+1)/2,S=(w+1)/2,A=(h+f)/4,z=(u+g)/4,M=(x+_)/4;return v>T&&v>S?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=z/n):T>S?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=A/i,s=M/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=z/s,i=M/s),this.set(n,i,s,t),this}let b=Math.sqrt((_-x)*(_-x)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(_-x)/b,this.y=(u-g)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+w-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $n extends ci{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ml(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sl extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bd extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],f=e[l+2];h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),f=e.getZ(l);h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)ui.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ui)}else n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox),_o.applyMatrix4(e.matrixWorld),this.union(_o);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),sr.subVectors(this.max,xs),Ii.subVectors(e.a,xs),Fi.subVectors(e.b,xs),ki.subVectors(e.c,xs),Yn.subVectors(Fi,Ii),Zn.subVectors(ki,Fi),hi.subVectors(Ii,ki);let t=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-hi.z,hi.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,hi.z,0,-hi.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-hi.y,hi.x,0];return!xo(t,Ii,Fi,ki,sr)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,Ii,Fi,ki,sr))?!1:(rr.crossVectors(Yn,Zn),t=[rr.x,rr.y,rr.z],xo(t,Ii,Fi,ki,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new P,new P,new P,new P,new P,new P,new P,new P],ui=new P,_o=new Ri,Ii=new P,Fi=new P,ki=new P,Yn=new P,Zn=new P,hi=new P,xs=new P,sr=new P,rr=new P,di=new P;function xo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){di.fromArray(r,s);const a=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Md=new Ri,ys=new P,yo=new P;class Oi{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Md.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(yo)),this.expandByPoint(ys.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new P,vo=new P,or=new P,Kn=new P,wo=new P,ar=new P,bo=new P;class lr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vo.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(vo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(or),a=Kn.dot(this.direction),l=-Kn.dot(or),c=Kn.lengthSq(),h=Math.abs(1-o*o);let u,f,m,x;if(h>0)if(u=o*l-a,f=o*a-l,x=s*h,u>=0)if(f>=-x)if(f<=x){const g=1/h;u*=g,f*=g,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(vo).addScaledVector(or,f),m}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,i,s){wo.subVectors(t,e),ar.subVectors(n,e),bo.crossVectors(wo,ar);let o=this.direction.dot(bo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot(ar.crossVectors(Kn,ar));if(l<0)return null;const c=a*this.direction.dot(wo.cross(Kn));if(c<0||l+c>o)return null;const h=-a*Kn.dot(bo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,h,u,f,m,x,g,_){const w=this.elements;return w[0]=e,w[4]=t,w[8]=n,w[12]=i,w[1]=s,w[5]=o,w[9]=a,w[13]=l,w[2]=c,w[6]=h,w[10]=u,w[14]=f,w[3]=m,w[7]=x,w[11]=g,w[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/zi.setFromMatrixColumn(e,0).length(),s=1/zi.setFromMatrixColumn(e,1).length(),o=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*u,x=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+x*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,x=c*h,g=c*u;t[0]=f+g*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-x,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,x=c*h,g=c*u;t[0]=f-g*a,t[4]=-o*u,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*u,x=a*h,g=a*u;t[0]=l*h,t[4]=x*c-m,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=g-f*u,t[8]=x*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+x,t[10]=f-g*u}else if(e.order==="XZY"){const f=o*l,m=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=o*h,t[9]=m*u-x,t[2]=x*u-m,t[6]=a*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sd,e,Td)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Jn.crossVectors(n,Yt),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Jn.crossVectors(n,Yt)),Jn.normalize(),cr.crossVectors(Yt,Jn),i[0]=Jn.x,i[4]=cr.x,i[8]=Yt.x,i[1]=Jn.y,i[5]=cr.y,i[9]=Yt.y,i[2]=Jn.z,i[6]=cr.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],x=n[2],g=n[6],_=n[10],w=n[14],b=n[3],v=n[7],T=n[11],S=n[15],A=i[0],z=i[4],M=i[8],C=i[12],F=i[1],Y=i[5],J=i[9],N=i[13],D=i[2],O=i[6],j=i[10],V=i[14],U=i[3],W=i[7],K=i[11],oe=i[15];return s[0]=o*A+a*F+l*D+c*U,s[4]=o*z+a*Y+l*O+c*W,s[8]=o*M+a*J+l*j+c*K,s[12]=o*C+a*N+l*V+c*oe,s[1]=h*A+u*F+f*D+m*U,s[5]=h*z+u*Y+f*O+m*W,s[9]=h*M+u*J+f*j+m*K,s[13]=h*C+u*N+f*V+m*oe,s[2]=x*A+g*F+_*D+w*U,s[6]=x*z+g*Y+_*O+w*W,s[10]=x*M+g*J+_*j+w*K,s[14]=x*C+g*N+_*V+w*oe,s[3]=b*A+v*F+T*D+S*U,s[7]=b*z+v*Y+T*O+S*W,s[11]=b*M+v*J+T*j+S*K,s[15]=b*C+v*N+T*V+S*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],x=e[3],g=e[7],_=e[11],w=e[15];return x*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*m-n*l*m)+g*(+t*l*m-t*c*f+s*o*f-i*o*m+i*c*h-s*l*h)+_*(+t*c*u-t*a*m-s*o*u+n*o*m+s*a*h-n*c*h)+w*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],x=e[12],g=e[13],_=e[14],w=e[15],b=u*_*c-g*f*c+g*l*m-a*_*m-u*l*w+a*f*w,v=x*f*c-h*_*c-x*l*m+o*_*m+h*l*w-o*f*w,T=h*g*c-x*u*c+x*a*m-o*g*m-h*a*w+o*u*w,S=x*u*l-h*g*l-x*a*f+o*g*f+h*a*_-o*u*_,A=t*b+n*v+i*T+s*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/A;return e[0]=b*z,e[1]=(g*f*s-u*_*s-g*i*m+n*_*m+u*i*w-n*f*w)*z,e[2]=(a*_*s-g*l*s+g*i*c-n*_*c-a*i*w+n*l*w)*z,e[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*m-n*l*m)*z,e[4]=v*z,e[5]=(h*_*s-x*f*s+x*i*m-t*_*m-h*i*w+t*f*w)*z,e[6]=(x*l*s-o*_*s-x*i*c+t*_*c+o*i*w-t*l*w)*z,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*m+t*l*m)*z,e[8]=T*z,e[9]=(x*u*s-h*g*s-x*n*m+t*g*m+h*n*w-t*u*w)*z,e[10]=(o*g*s-x*a*s+x*n*c-t*g*c-o*n*w+t*a*w)*z,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*m-t*a*m)*z,e[12]=S*z,e[13]=(h*g*i-x*u*i+x*n*f-t*g*f-h*n*_+t*u*_)*z,e[14]=(x*a*i-o*g*i-x*n*l+t*g*l+o*n*_-t*a*_)*z,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,m=s*h,x=s*u,g=o*h,_=o*u,w=a*u,b=l*c,v=l*h,T=l*u,S=n.x,A=n.y,z=n.z;return i[0]=(1-(g+w))*S,i[1]=(m+T)*S,i[2]=(x-v)*S,i[3]=0,i[4]=(m-T)*A,i[5]=(1-(f+w))*A,i[6]=(_+b)*A,i[7]=0,i[8]=(x+v)*z,i[9]=(_-b)*z,i[10]=(1-(f+g))*z,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=zi.set(i[0],i[1],i[2]).length();const o=zi.set(i[4],i[5],i[6]).length(),a=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);const c=1/s,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-s),u=(t+e)*l,f=(n+i)*c,m=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zi=new P,hn=new Te,Sd=new P(0,0,0),Td=new P(1,1,1),Jn=new P,cr=new P,Yt=new P,Tl=new Te,El=new pt;class Zt{constructor(e=0,t=0,n=0,i=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return El.setFromEuler(this),this.setFromQuaternion(El,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class Mo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ed=0;const Al=new P,Ni=new pt,Dn=new Te,ur=new P,vs=new P,Ad=new P,Cd=new pt,Cl=new P(1,0,0),Ll=new P(0,1,0),Pl=new P(0,0,1),Ld={type:"added"},Dl={type:"removed"};class it extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DEFAULT_UP.clone();const e=new P,t=new Zt,n=new pt,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new Ft}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=it.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Ll,e)}rotateZ(e){return this.rotateOnAxis(Pl,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Ll,e)}translateZ(e){return this.translateOnAxis(Pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(vs,ur,this.up):Dn.lookAt(ur,vs,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),Ni.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ld)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Dl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,Ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Cd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}it.DEFAULT_UP=new P(0,1,0),it.DEFAULT_MATRIX_AUTO_UPDATE=!0,it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new P,Rn=new P,So=new P,In=new P,Bi=new P,Ui=new P,Rl=new P,To=new P,Eo=new P,Ao=new P;class Fn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),dn.subVectors(e,t),i.cross(dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){dn.subVectors(i,t),Rn.subVectors(n,t),So.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(Rn),l=dn.dot(So),c=Rn.dot(Rn),h=Rn.dot(So),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const f=1/u,m=(c*l-a*h)*f,x=(o*h-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,In),In.x>=0&&In.y>=0&&In.x+In.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,In),l.set(0,0),l.addScaledVector(s,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l}static isFrontFacing(e,t,n,i){return dn.subVectors(n,t),Rn.subVectors(e,t),dn.cross(Rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),dn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Fn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Bi.subVectors(i,n),Ui.subVectors(s,n),To.subVectors(e,n);const l=Bi.dot(To),c=Ui.dot(To);if(l<=0&&c<=0)return t.copy(n);Eo.subVectors(e,i);const h=Bi.dot(Eo),u=Ui.dot(Eo);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Bi,o);Ao.subVectors(e,s);const m=Bi.dot(Ao),x=Ui.dot(Ao);if(x>=0&&m<=x)return t.copy(s);const g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Ui,a);const _=h*x-m*u;if(_<=0&&u-h>=0&&m-x>=0)return Rl.subVectors(s,i),a=(u-h)/(u-h+(m-x)),t.copy(i).addScaledVector(Rl,a);const w=1/(_+g+f);return o=g*w,a=f*w,t.copy(n).addScaledVector(Bi,o).addScaledVector(Ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Pd=0;class fn extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Si,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=za,this.blendDst=Na,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Co(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Nt.workingColorSpace){if(e=uo(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Co(o,s,e+1/3),this.g=Co(o,s,e),this.b=Co(o,s,e-1/3)}return Nt.toWorkingColorSpace(this,i),this}setStyle(e,t=xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Nt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Nt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Nt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Nt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=Il[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Nt.fromWorkingColorSpace(kt.copy(this),e),Pt(kt.r*255,0,255)<<16^Pt(kt.g*255,0,255)<<8^Pt(kt.b*255,0,255)<<0}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,s=kt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=xn){Nt.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(pn),pn.h+=e,pn.s+=t,pn.l+=n,this.setHSL(pn.h,pn.s,pn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(hr);const n=ms(pn.h,hr.h,t),i=ms(pn.s,hr.s,t),s=ms(pn.l,hr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Re;Re.NAMES=Il;class kn extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new P,dr=new Pe;class vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ml,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Lo extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fl extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Fe extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dd=0;const rn=new Te,Po=new it,Vi=new P,Kt=new Ri,ws=new Ri,At=new P;class ht extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vl(e)?Fl:Lo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Po.lookAt(e),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Kt.min,ws.min),Kt.expandByPoint(At),At.addVectors(Kt.max,ws.max),Kt.expandByPoint(At)):(Kt.expandByPoint(ws.min),Kt.expandByPoint(ws.max))}Kt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)At.fromBufferAttribute(a,c),l&&(Vi.fromBufferAttribute(e,c),At.add(Vi)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let F=0;F<a;F++)c[F]=new P,h[F]=new P;const u=new P,f=new P,m=new P,x=new Pe,g=new Pe,_=new Pe,w=new P,b=new P;function v(F,Y,J){u.fromArray(i,F*3),f.fromArray(i,Y*3),m.fromArray(i,J*3),x.fromArray(o,F*2),g.fromArray(o,Y*2),_.fromArray(o,J*2),f.sub(u),m.sub(u),g.sub(x),_.sub(x);const N=1/(g.x*_.y-_.x*g.y);isFinite(N)&&(w.copy(f).multiplyScalar(_.y).addScaledVector(m,-g.y).multiplyScalar(N),b.copy(m).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(N),c[F].add(w),c[Y].add(w),c[J].add(w),h[F].add(b),h[Y].add(b),h[J].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let F=0,Y=T.length;F<Y;++F){const J=T[F],N=J.start,D=J.count;for(let O=N,j=N+D;O<j;O+=3)v(n[O+0],n[O+1],n[O+2])}const S=new P,A=new P,z=new P,M=new P;function C(F){z.fromArray(s,F*3),M.copy(z);const Y=c[F];S.copy(Y),S.sub(z.multiplyScalar(z.dot(Y))).normalize(),A.crossVectors(M,Y);const N=A.dot(h[F])<0?-1:1;l[F*4]=S.x,l[F*4+1]=S.y,l[F*4+2]=S.z,l[F*4+3]=N}for(let F=0,Y=T.length;F<Y;++F){const J=T[F],N=J.start,D=J.count;for(let O=N,j=N+D;O<j;O+=3)C(n[O+0]),C(n[O+1]),C(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,x=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let w=0;w<h;w++)f[x++]=c[m++]}return new vn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kl=new Te,wn=new lr,fr=new Oi,Ol=new P,bs=new P,Ms=new P,Ss=new P,Do=new P,pr=new P,mr=new Pe,gr=new Pe,_r=new Pe,Ro=new P,xr=new P;class de extends it{constructor(e=new ht,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){pr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Do.fromBufferAttribute(u,e),o?pr.addScaledVector(Do,h):pr.addScaledVector(Do.sub(t),h))}t.add(pr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),wn.copy(e.ray).recast(e.near),fr.containsPoint(wn.origin)===!1&&(wn.intersectSphere(fr,Ol)===null||wn.origin.distanceToSquared(Ol)>(e.far-e.near)**2))||(kl.copy(s).invert(),wn.copy(e.ray).applyMatrix4(kl),n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,u=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,x=u.length;m<x;m++){const g=u[m],_=i[g.materialIndex],w=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=w,T=b;v<T;v+=3){const S=a.getX(v),A=a.getX(v+1),z=a.getX(v+2);o=yr(this,_,e,wn,c,h,S,A,z),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,_=x;g<_;g+=3){const w=a.getX(g),b=a.getX(g+1),v=a.getX(g+2);o=yr(this,i,e,wn,c,h,w,b,v),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,x=u.length;m<x;m++){const g=u[m],_=i[g.materialIndex],w=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=w,T=b;v<T;v+=3){const S=v,A=v+1,z=v+2;o=yr(this,_,e,wn,c,h,S,A,z),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,_=x;g<_;g+=3){const w=g,b=g+1,v=g+2;o=yr(this,i,e,wn,c,h,w,b,v),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function Rd(r,e,t,n,i,s,o,a){let l;if(e.side===qt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Gn,a),l===null)return null;xr.copy(a),xr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(xr);return c<t.near||c>t.far?null:{distance:c,point:xr.clone(),object:r}}function yr(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,bs),r.getVertexPosition(a,Ms),r.getVertexPosition(l,Ss);const c=Rd(r,e,t,n,bs,Ms,Ss,Ro);if(c){i&&(mr.fromBufferAttribute(i,o),gr.fromBufferAttribute(i,a),_r.fromBufferAttribute(i,l),c.uv=Fn.getUV(Ro,bs,Ms,Ss,mr,gr,_r,new Pe)),s&&(mr.fromBufferAttribute(s,o),gr.fromBufferAttribute(s,a),_r.fromBufferAttribute(s,l),c.uv2=Fn.getUV(Ro,bs,Ms,Ss,mr,gr,_r,new Pe));const h={a:o,b:a,c:l,normal:new P,materialIndex:0};Fn.getNormal(bs,Ms,Ss,h.normal),c.face=h}return c}class bt extends ht{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(u,2));function x(g,_,w,b,v,T,S,A,z,M,C){const F=T/z,Y=S/M,J=T/2,N=S/2,D=A/2,O=z+1,j=M+1;let V=0,U=0;const W=new P;for(let K=0;K<j;K++){const oe=K*Y-N;for(let H=0;H<O;H++){const ie=H*F-J;W[g]=ie*b,W[_]=oe*v,W[w]=D,c.push(W.x,W.y,W.z),W[g]=0,W[_]=0,W[w]=A>0?1:-1,h.push(W.x,W.y,W.z),u.push(H/z),u.push(1-K/M),V+=1}}for(let K=0;K<M;K++)for(let oe=0;oe<z;oe++){const H=f+oe+O*K,ie=f+oe+O*(K+1),re=f+(oe+1)+O*(K+1),G=f+(oe+1)+O*K;l.push(H,ie,G),l.push(ie,re,G),U+=6}a.addGroup(m,U,C),m+=U,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(r){const e={};for(let t=0;t<r.length;t++){const n=Hi(r[t]);for(const i in n)e[i]=n[i]}return e}function Id(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function zl(r){return r.getRenderTarget()===null&&r.outputEncoding===et?xn:ds}const Nl={clone:Hi,merge:Bt};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bl extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ut extends Bl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Wi=1;class Od extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ut(Gi,Wi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ut(Gi,Wi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ut(Gi,Wi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ut(Gi,Wi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Ut(Gi,Wi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ut(Gi,Wi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=Cn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Ul extends Dt{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ei,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zd extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ul(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bt(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Wn});s.uniforms.tEquirect.value=t;const o=new de(i,s),a=t.minFilter;return t.minFilter===us&&(t.minFilter=nn),new Od(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Io=new P,Nd=new P,Bd=new Ft;class fi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Io.subVectors(n,t).cross(Nd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Io),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bd.getNormalMatrix(e),i=this.coplanarPoint(Io).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Oi,vr=new P;class Ts{constructor(e=new fi,t=new fi,n=new fi,i=new fi,s=new fi,o=new fi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],m=n[9],x=n[10],g=n[11],_=n[12],w=n[13],b=n[14],v=n[15];return t[0].setComponents(a-i,u-l,g-f,v-_).normalize(),t[1].setComponents(a+i,u+l,g+f,v+_).normalize(),t[2].setComponents(a+s,u+c,g+m,v+w).normalize(),t[3].setComponents(a-s,u-c,g-m,v-w).normalize(),t[4].setComponents(a-o,u-h,g-x,v-b).normalize(),t[5].setComponents(a+o,u+h,g+x,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vr.x=i.normal.x>0?e.max.x:e.min.x,vr.y=i.normal.y>0?e.max.y:e.min.y,vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vl(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ud(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(u instanceof Int16Array)x=5122;else if(u instanceof Uint32Array)x=5125;else if(u instanceof Int32Array)x=5124;else if(u instanceof Int8Array)x=5120;else if(u instanceof Uint8Array)x=5121;else if(u instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const f=h.array,m=h.updateRange;r.bindBuffer(u,c),m.count===-1?r.bufferSubData(u,0,f):(t?r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class wr extends ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,m=[],x=[],g=[],_=[];for(let w=0;w<h;w++){const b=w*f-o;for(let v=0;v<c;v++){const T=v*u-s;x.push(T,-b,0),g.push(0,0,1),_.push(v/a),_.push(1-w/l)}}for(let w=0;w<l;w++)for(let b=0;b<a;b++){const v=b+c*w,T=b+c*(w+1),S=b+1+c*(w+1),A=b+1+c*w;m.push(v,T,A),m.push(T,S,A)}this.setIndex(m),this.setAttribute("position",new Fe(x,3)),this.setAttribute("normal",new Fe(g,3)),this.setAttribute("uv",new Fe(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd="vec3 transformed = vec3( position );",$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Zd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,af=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ef=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Df=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,If=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,zf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,np=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,op=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Rp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ip=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Fp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,kp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Op=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,zp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Np=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ne={alphamap_fragment:Vd,alphamap_pars_fragment:Hd,alphatest_fragment:Gd,alphatest_pars_fragment:Wd,aomap_fragment:jd,aomap_pars_fragment:Xd,begin_vertex:qd,beginnormal_vertex:$d,bsdfs:Yd,iridescence_fragment:Zd,bumpmap_pars_fragment:Kd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:ef,clipping_planes_vertex:tf,color_fragment:nf,color_pars_fragment:sf,color_pars_vertex:rf,color_vertex:of,common:af,cube_uv_reflection_fragment:lf,defaultnormal_vertex:cf,displacementmap_pars_vertex:uf,displacementmap_vertex:hf,emissivemap_fragment:df,emissivemap_pars_fragment:ff,encodings_fragment:pf,encodings_pars_fragment:mf,envmap_fragment:gf,envmap_common_pars_fragment:_f,envmap_pars_fragment:xf,envmap_pars_vertex:yf,envmap_physical_pars_fragment:Df,envmap_vertex:vf,fog_vertex:wf,fog_pars_vertex:bf,fog_fragment:Mf,fog_pars_fragment:Sf,gradientmap_pars_fragment:Tf,lightmap_fragment:Ef,lightmap_pars_fragment:Af,lights_lambert_fragment:Cf,lights_lambert_pars_fragment:Lf,lights_pars_begin:Pf,lights_toon_fragment:Rf,lights_toon_pars_fragment:If,lights_phong_fragment:Ff,lights_phong_pars_fragment:kf,lights_physical_fragment:Of,lights_physical_pars_fragment:zf,lights_fragment_begin:Nf,lights_fragment_maps:Bf,lights_fragment_end:Uf,logdepthbuf_fragment:Vf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Wf,map_fragment:jf,map_pars_fragment:Xf,map_particle_fragment:qf,map_particle_pars_fragment:$f,metalnessmap_fragment:Yf,metalnessmap_pars_fragment:Zf,morphcolor_vertex:Kf,morphnormal_vertex:Jf,morphtarget_pars_vertex:Qf,morphtarget_vertex:ep,normal_fragment_begin:tp,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:sp,normal_vertex:rp,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:up,output_fragment:hp,packing:dp,premultiplied_alpha_fragment:fp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:yp,shadowmap_pars_vertex:vp,shadowmap_vertex:wp,shadowmask_pars_fragment:bp,skinbase_vertex:Mp,skinning_pars_vertex:Sp,skinning_vertex:Tp,skinnormal_vertex:Ep,specularmap_fragment:Ap,specularmap_pars_fragment:Cp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Pp,transmission_fragment:Dp,transmission_pars_fragment:Rp,uv_pars_fragment:Ip,uv_pars_vertex:Fp,uv_vertex:kp,uv2_pars_fragment:Op,uv2_pars_vertex:zp,uv2_vertex:Np,worldpos_vertex:Bp,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},fe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ft},uv2Transform:{value:new Ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}}},bn={basic:{uniforms:Bt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Bt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Bt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Bt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Bt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Bt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Bt([fe.points,fe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Bt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Bt([fe.common,fe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Bt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Bt([fe.sprite,fe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Bt([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Bt([fe.lights,fe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};bn.physical={uniforms:Bt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const br={r:0,b:0,g:0};function Up(r,e,t,n,i,s,o){const a=new Re(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function x(_,w){let b=!1,v=w.isScene===!0?w.background:null;v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v));const T=r.xr,S=T.getSession&&T.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?g(a,l):v&&v.isColor&&(g(v,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===er)?(h===void 0&&(h=new de(new bt(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Hi(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,z,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=v.encoding!==et,(u!==v||f!==v.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new de(new wr(2,2),new On({name:"BackgroundMaterial",uniforms:Hi(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=v.encoding!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,w){_.getRGB(br,zl(r)),n.buffers.color.setClear(br.r,br.g,br.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(_,w=1){a.set(_),l=w,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,g(a,l)},render:x}}function Vp(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=_(null);let c=l,h=!1;function u(D,O,j,V,U){let W=!1;if(o){const K=g(V,j,O);c!==K&&(c=K,m(c.object)),W=w(D,V,j,U),W&&b(D,V,j,U)}else{const K=O.wireframe===!0;(c.geometry!==V.id||c.program!==j.id||c.wireframe!==K)&&(c.geometry=V.id,c.program=j.id,c.wireframe=K,W=!0)}U!==null&&t.update(U,34963),(W||h)&&(h=!1,M(D,O,j,V),U!==null&&r.bindBuffer(34963,t.get(U).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function x(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function g(D,O,j){const V=j.wireframe===!0;let U=a[D.id];U===void 0&&(U={},a[D.id]=U);let W=U[O.id];W===void 0&&(W={},U[O.id]=W);let K=W[V];return K===void 0&&(K=_(f()),W[V]=K),K}function _(D){const O=[],j=[],V=[];for(let U=0;U<i;U++)O[U]=0,j[U]=0,V[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:V,object:D,attributes:{},index:null}}function w(D,O,j,V){const U=c.attributes,W=O.attributes;let K=0;const oe=j.getAttributes();for(const H in oe)if(oe[H].location>=0){const re=U[H];let G=W[H];if(G===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),re===void 0||re.attribute!==G||G&&re.data!==G.data)return!0;K++}return c.attributesNum!==K||c.index!==V}function b(D,O,j,V){const U={},W=O.attributes;let K=0;const oe=j.getAttributes();for(const H in oe)if(oe[H].location>=0){let re=W[H];re===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));const G={};G.attribute=re,re&&re.data&&(G.data=re.data),U[H]=G,K++}c.attributes=U,c.attributesNum=K,c.index=V}function v(){const D=c.newAttributes;for(let O=0,j=D.length;O<j;O++)D[O]=0}function T(D){S(D,0)}function S(D,O){const j=c.newAttributes,V=c.enabledAttributes,U=c.attributeDivisors;j[D]=1,V[D]===0&&(r.enableVertexAttribArray(D),V[D]=1),U[D]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),U[D]=O)}function A(){const D=c.newAttributes,O=c.enabledAttributes;for(let j=0,V=O.length;j<V;j++)O[j]!==D[j]&&(r.disableVertexAttribArray(j),O[j]=0)}function z(D,O,j,V,U,W){n.isWebGL2===!0&&(j===5124||j===5125)?r.vertexAttribIPointer(D,O,j,U,W):r.vertexAttribPointer(D,O,j,V,U,W)}function M(D,O,j,V){if(n.isWebGL2===!1&&(D.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=V.attributes,W=j.getAttributes(),K=O.defaultAttributeValues;for(const oe in W){const H=W[oe];if(H.location>=0){let ie=U[oe];if(ie===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),ie!==void 0){const re=ie.normalized,G=ie.itemSize,me=t.get(ie);if(me===void 0)continue;const ge=me.buffer,pe=me.type,le=me.bytesPerElement;if(ie.isInterleavedBufferAttribute){const xe=ie.data,De=xe.stride,Ee=ie.offset;if(xe.isInstancedInterleavedBuffer){for(let He=0;He<H.locationSize;He++)S(H.location+He,xe.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let He=0;He<H.locationSize;He++)T(H.location+He);r.bindBuffer(34962,ge);for(let He=0;He<H.locationSize;He++)z(H.location+He,G/H.locationSize,pe,re,De*le,(Ee+G/H.locationSize*He)*le)}else{if(ie.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)S(H.location+xe,ie.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let xe=0;xe<H.locationSize;xe++)T(H.location+xe);r.bindBuffer(34962,ge);for(let xe=0;xe<H.locationSize;xe++)z(H.location+xe,G/H.locationSize,pe,re,G*le,G/H.locationSize*xe*le)}}else if(K!==void 0){const re=K[oe];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(H.location,re);break;case 3:r.vertexAttrib3fv(H.location,re);break;case 4:r.vertexAttrib4fv(H.location,re);break;default:r.vertexAttrib1fv(H.location,re)}}}}A()}function C(){J();for(const D in a){const O=a[D];for(const j in O){const V=O[j];for(const U in V)x(V[U].object),delete V[U];delete O[j]}delete a[D]}}function F(D){if(a[D.id]===void 0)return;const O=a[D.id];for(const j in O){const V=O[j];for(const U in V)x(V[U].object),delete V[U];delete O[j]}delete a[D.id]}function Y(D){for(const O in a){const j=a[O];if(j[D.id]===void 0)continue;const V=j[D.id];for(const U in V)x(V[U].object),delete V[U];delete j[D.id]}}function J(){N(),h=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:J,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:F,releaseStatesOfProgram:Y,initAttributes:v,enableAttribute:T,disableUnusedAttributes:A}}function Hp(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function Gp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(z){if(z==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),x=r.getParameter(34076),g=r.getParameter(34921),_=r.getParameter(36347),w=r.getParameter(36348),b=r.getParameter(36349),v=f>0,T=o||e.has("OES_texture_float"),S=v&&T,A=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:S,maxSamples:A}}function Wp(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new fi,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const x=u.clippingPlanes,g=u.clipIntersection,_=u.clipShadows,w=r.get(u);if(!i||x===null||x.length===0||s&&!_)s?h(null):c();else{const b=s?0:n,v=b*4;let T=w.clippingState||null;l.value=T,T=h(x,f,v,m);for(let S=0;S!==v;++S)T[S]=t[S];w.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,x){const g=u!==null?u.length:0;let _=null;if(g!==0){if(_=l.value,x!==!0||_===null){const w=m+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(_===null||_.length<w)&&(_=new Float32Array(w));for(let v=0,T=m;v!==g;++v,T+=4)o.copy(u[v]).applyMatrix4(b,a),o.normal.toArray(_,T),_[T+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function jp(r){let e=new WeakMap;function t(o,a){return a===Qs?o.mapping=Ei:a===Qr&&(o.mapping=Ai),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Qs||a===Qr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zd(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Mr extends Bl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,Hl=[.125,.215,.35,.446,.526,.582],pi=20,Fo=new Mr,Gl=new Re;let ko=null;const mi=(1+Math.sqrt(5))/2,qi=1/mi,Wl=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,mi,qi),new P(0,mi,-qi),new P(qi,0,mi),new P(-qi,0,mi),new P(mi,qi,0),new P(-mi,qi,0)];class jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ko=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ko),e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:hs,format:sn,encoding:li,depthBuffer:!1},i=Xl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xp(s)),this._blurMaterial=qp(s,e,t)}return i}_compileMaterial(e){const t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,n,i){const a=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Gl),h.toneMapping=Cn,h.autoClear=!1;const m=new kn({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),x=new de(new bt,m);let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(Gl),g=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(a.up.set(0,l[w],0),a.lookAt(c[w],0,0)):b===1?(a.up.set(0,0,l[w]),a.lookAt(0,c[w],0)):(a.up.set(0,l[w],0),a.lookAt(0,0,c[w]));const v=this._cubeSize;Sr(i,b*v,w>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ei||e.mapping===Ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Sr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Wl[(i-1)%Wl.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new de(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*pi-1),g=s/x,_=isFinite(s)?1+Math.floor(h*g):pi;_>pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${pi}`);const w=[];let b=0;for(let z=0;z<pi;++z){const M=z/g,C=Math.exp(-M*M/2);w.push(C),z===0?b+=C:z<_&&(b+=2*C)}for(let z=0;z<w.length;z++)w[z]=w[z]/b;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=w,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-n;const T=this._sizeLods[i],S=3*T*(i>v-Xi?i-v+Xi:0),A=4*(this._cubeSize-T);Sr(t,S,A,3*T,2*T),l.setRenderTarget(t),l.render(u,Fo)}}function Xp(r){const e=[],t=[],n=[];let i=r;const s=r-Xi+1+Hl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Xi?l=Hl[o-r+Xi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,x=6,g=3,_=2,w=1,b=new Float32Array(g*x*m),v=new Float32Array(_*x*m),T=new Float32Array(w*x*m);for(let A=0;A<m;A++){const z=A%3*2/3-1,M=A>2?0:-1,C=[z,M,0,z+2/3,M,0,z+2/3,M+1,0,z,M,0,z+2/3,M+1,0,z,M+1,0];b.set(C,g*x*A),v.set(f,_*x*A);const F=[A,A,A,A,A,A];T.set(F,w*x*A)}const S=new ht;S.setAttribute("position",new vn(b,g)),S.setAttribute("uv",new vn(v,_)),S.setAttribute("faceIndex",new vn(T,w)),e.push(S),i>Xi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xl(r,e,t){const n=new $n(r,e,t);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function qp(r,e,t){const n=new Float32Array(pi),i=new P(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ql(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function $l(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Oo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $p(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qs||l===Qr,h=l===Ei||l===Ai;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new jl(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new jl(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zp(r,e,t,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const x in f)e.update(f[x],34962);const m=u.morphAttributes;for(const x in m){const g=m[x];for(let _=0,w=g.length;_<w;_++)e.update(g[_],34962)}}function c(u){const f=[],m=u.index,x=u.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let v=0,T=b.length;v<T;v+=3){const S=b[v+0],A=b[v+1],z=b[v+2];f.push(S,A,A,z,z,S)}}else{const b=x.array;g=x.version;for(let v=0,T=b.length/3-1;v<T;v+=3){const S=v+0,A=v+1,z=v+2;f.push(S,A,A,z,z,S)}}const _=new(vl(f)?Fl:Lo)(f,1);_.version=g;const w=s.get(u);w&&e.remove(w),s.set(u,_)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Kp(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,m){r.drawElements(s,m,a,f*l),t.update(m,s,1)}function u(f,m,x){if(x===0)return;let g,_;if(i)g=r,_="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,m,a,f*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function Jp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qp(r,e){return r[0]-e[0]}function em(r,e){return Math.abs(e[1])-Math.abs(r[1])}function tm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=m!==void 0?m.length:0;let g=s.get(h);if(g===void 0||g.count!==x){let D=function(){J.dispose(),s.delete(h),h.removeEventListener("dispose",D)};g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let M=0;b===!0&&(M=1),v===!0&&(M=2),T===!0&&(M=3);let C=h.attributes.position.count*M,F=1;C>e.maxTextureSize&&(F=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const Y=new Float32Array(C*F*4*x),J=new Sl(Y,C,F,x);J.type=jn,J.needsUpdate=!0;const N=M*4;for(let O=0;O<x;O++){const j=S[O],V=A[O],U=z[O],W=C*F*4*O;for(let K=0;K<j.count;K++){const oe=K*N;b===!0&&(o.fromBufferAttribute(j,K),Y[W+oe+0]=o.x,Y[W+oe+1]=o.y,Y[W+oe+2]=o.z,Y[W+oe+3]=0),v===!0&&(o.fromBufferAttribute(V,K),Y[W+oe+4]=o.x,Y[W+oe+5]=o.y,Y[W+oe+6]=o.z,Y[W+oe+7]=0),T===!0&&(o.fromBufferAttribute(U,K),Y[W+oe+8]=o.x,Y[W+oe+9]=o.y,Y[W+oe+10]=o.z,Y[W+oe+11]=U.itemSize===4?o.w:1)}}g={count:x,texture:J,size:new Pe(C,F)},s.set(h,g),h.addEventListener("dispose",D)}let _=0;for(let b=0;b<f.length;b++)_+=f[b];const w=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(r,"morphTargetBaseInfluence",w),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const m=f===void 0?0:f.length;let x=n[h.id];if(x===void 0||x.length!==m){x=[];for(let v=0;v<m;v++)x[v]=[v,0];n[h.id]=x}for(let v=0;v<m;v++){const T=x[v];T[0]=v,T[1]=f[v]}x.sort(em);for(let v=0;v<8;v++)v<m&&x[v][1]?(a[v][0]=x[v][0],a[v][1]=x[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Qp);const g=h.morphAttributes.position,_=h.morphAttributes.normal;let w=0;for(let v=0;v<8;v++){const T=a[v],S=T[0],A=T[1];S!==Number.MAX_SAFE_INTEGER&&A?(g&&h.getAttribute("morphTarget"+v)!==g[S]&&h.setAttribute("morphTarget"+v,g[S]),_&&h.getAttribute("morphNormal"+v)!==_[S]&&h.setAttribute("morphNormal"+v,_[S]),i[v]=A,w+=A):(g&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),_&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const b=h.morphTargetsRelative?1:1-w;u.getUniforms().setValue(r,"morphTargetBaseInfluence",b),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function nm(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Yl=new Dt,Zl=new Sl,Kl=new bd,Jl=new Ul,Ql=[],ec=[],tc=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function $i(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ql[i];if(s===void 0&&(s=new Float32Array(i),Ql[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Et(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Tr(r,e){let t=ec[e];t===void 0&&(t=new Int32Array(e),ec[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function im(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function sm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2fv(this.addr,e),Et(t,e)}}function rm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;r.uniform3fv(this.addr,e),Et(t,e)}}function om(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4fv(this.addr,e),Et(t,e)}}function am(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;ic.set(n),r.uniformMatrix2fv(this.addr,!1,ic),Et(t,n)}}function lm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;nc.set(n),r.uniformMatrix3fv(this.addr,!1,nc),Et(t,n)}}function cm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;tc.set(n),r.uniformMatrix4fv(this.addr,!1,tc),Et(t,n)}}function um(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2iv(this.addr,e),Et(t,e)}}function dm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3iv(this.addr,e),Et(t,e)}}function fm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4iv(this.addr,e),Et(t,e)}}function pm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2uiv(this.addr,e),Et(t,e)}}function gm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3uiv(this.addr,e),Et(t,e)}}function _m(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4uiv(this.addr,e),Et(t,e)}}function xm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Yl,i)}function ym(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kl,i)}function vm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jl,i)}function wm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zl,i)}function bm(r){switch(r){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return om;case 35674:return am;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return um;case 35667:case 35671:return hm;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return wm}}function Mm(r,e){r.uniform1fv(this.addr,e)}function Sm(r,e){const t=$i(e,this.size,2);r.uniform2fv(this.addr,t)}function Tm(r,e){const t=$i(e,this.size,3);r.uniform3fv(this.addr,t)}function Em(r,e){const t=$i(e,this.size,4);r.uniform4fv(this.addr,t)}function Am(r,e){const t=$i(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Cm(r,e){const t=$i(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Lm(r,e){const t=$i(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Pm(r,e){r.uniform1iv(this.addr,e)}function Dm(r,e){r.uniform2iv(this.addr,e)}function Rm(r,e){r.uniform3iv(this.addr,e)}function Im(r,e){r.uniform4iv(this.addr,e)}function Fm(r,e){r.uniform1uiv(this.addr,e)}function km(r,e){r.uniform2uiv(this.addr,e)}function Om(r,e){r.uniform3uiv(this.addr,e)}function zm(r,e){r.uniform4uiv(this.addr,e)}function Nm(r,e,t){const n=this.cache,i=e.length,s=Tr(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Yl,s[o])}function Bm(r,e,t){const n=this.cache,i=e.length,s=Tr(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Kl,s[o])}function Um(r,e,t){const n=this.cache,i=e.length,s=Tr(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Jl,s[o])}function Vm(r,e,t){const n=this.cache,i=e.length,s=Tr(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zl,s[o])}function Hm(r){switch(r){case 5126:return Mm;case 35664:return Sm;case 35665:return Tm;case 35666:return Em;case 35674:return Am;case 35675:return Cm;case 35676:return Lm;case 5124:case 35670:return Pm;case 35667:case 35671:return Dm;case 35668:case 35672:return Rm;case 35669:case 35673:return Im;case 5125:return Fm;case 36294:return km;case 36295:return Om;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Vm}}class Gm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=bm(t.type)}}class Wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Hm(t.type)}}class jm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function sc(r,e){r.seq.push(e),r.map[e.id]=e}function Xm(r,e,t){const n=r.name,i=n.length;for(zo.lastIndex=0;;){const s=zo.exec(n),o=zo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){sc(t,c===void 0?new Gm(a,r,e):new Wm(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new jm(a),sc(t,u)),t=u}}}class Er{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Xm(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function rc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let qm=0;function $m(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ym(r){switch(r){case li:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function oc(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+$m(r.getShaderSource(e),o)}else return i}function Zm(r,e){const t=Ym(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Km(r,e){let t;switch(e){case Ph:t="Linear";break;case Dh:t="Reinhard";break;case Rh:t="OptimizedCineon";break;case Ih:t="ACESFilmic";break;case Fh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Jm(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Es).join(`
`)}function Qm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function eg(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Es(r){return r!==""}function ac(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(r){return r.replace(tg,ng)}function ng(r,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return No(t)}const ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(r){return r.replace(ig,sg)}function sg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function uc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Da?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ls&&(e="SHADOWMAP_TYPE_VSM"),e}function og(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ei:case Ai:e="ENVMAP_TYPE_CUBE";break;case er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ag(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function lg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Js:e="ENVMAP_BLENDING_MULTIPLY";break;case Ch:e="ENVMAP_BLENDING_MIX";break;case Lh:e="ENVMAP_BLENDING_ADD";break}return e}function cg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ug(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rg(t),c=og(t),h=ag(t),u=lg(t),f=cg(t),m=t.isWebGL2?"":Jm(t),x=Qm(s),g=i.createProgram();let _,w,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[x].filter(Es).join(`
`),_.length>0&&(_+=`
`),w=[m,x].filter(Es).join(`
`),w.length>0&&(w+=`
`)):(_=[uc(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),w=[m,uc(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Km("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,Zm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),o=No(o),o=ac(o,t),o=lc(o,t),a=No(a),a=ac(a,t),a=lc(a,t),o=cc(o),a=cc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,w=["#define varying in",t.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const v=b+_+o,T=b+w+a,S=rc(i,35633,v),A=rc(i,35632,T);if(i.attachShader(g,S),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const C=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(S).trim(),Y=i.getShaderInfoLog(A).trim();let J=!0,N=!0;if(i.getProgramParameter(g,35714)===!1){J=!1;const D=oc(i,S,"vertex"),O=oc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+C+`
`+D+`
`+O)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(F===""||Y==="")&&(N=!1);N&&(this.diagnostics={runnable:J,programLog:C,vertexShader:{log:F,prefix:_},fragmentShader:{log:Y,prefix:w}})}i.deleteShader(S),i.deleteShader(A);let z;this.getUniforms=function(){return z===void 0&&(z=new Er(i,g)),z};let M;return this.getAttributes=function(){return M===void 0&&(M=eg(i,g)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=qm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=A,this}let hg=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fg(e),t.set(e,n)),n}}class fg{constructor(e){this.id=hg++,this.code=e,this.usedTimes=0}}function pg(r,e,t,n,i,s,o){const a=new Mo,l=new dg,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M,C,F,Y,J){const N=Y.fog,D=J.geometry,O=M.isMeshStandardMaterial?Y.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),V=j&&j.mapping===er?j.image.height:null,U=x[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const W=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,K=W!==void 0?W.length:0;let oe=0;D.morphAttributes.position!==void 0&&(oe=1),D.morphAttributes.normal!==void 0&&(oe=2),D.morphAttributes.color!==void 0&&(oe=3);let H,ie,re,G;if(U){const De=bn[U];H=De.vertexShader,ie=De.fragmentShader}else H=M.vertexShader,ie=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),G=l.getFragmentShaderID(M);const me=r.getRenderTarget(),ge=M.alphaTest>0,pe=M.clearcoat>0,le=M.iridescence>0;return{isWebGL2:h,shaderID:U,shaderName:M.type,vertexShader:H,fragmentShader:ie,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:G,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:f,outputEncoding:me===null?r.outputEncoding:me.isXRRenderTarget===!0?me.texture.encoding:li,map:!!M.map,matcap:!!M.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:V,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===ed,tangentSpaceNormalMap:M.normalMapType===ir,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===et,clearcoat:pe,clearcoatMap:pe&&!!M.clearcoatMap,clearcoatRoughnessMap:pe&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!M.clearcoatNormalMap,iridescence:le,iridescenceMap:le&&!!M.iridescenceMap,iridescenceThicknessMap:le&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Si,alphaMap:!!M.alphaMap,alphaTest:ge,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!D.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!N,useFog:M.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:oe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:Cn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===An,flipSided:M.side===qt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function _(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)C.push(F),C.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(w(C,M),b(C,M),C.push(r.outputEncoding)),C.push(M.customProgramCacheKey),C.join()}function w(M,C){M.push(C.precision),M.push(C.outputEncoding),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.combine),M.push(C.vertexUvs),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function b(M,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),M.push(a.mask)}function v(M){const C=x[M.type];let F;if(C){const Y=bn[C];F=Nl.clone(Y.uniforms)}else F=M.uniforms;return F}function T(M,C){let F;for(let Y=0,J=c.length;Y<J;Y++){const N=c[Y];if(N.cacheKey===C){F=N,++F.usedTimes;break}}return F===void 0&&(F=new ug(r,C,M,s),c.push(F)),F}function S(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function z(){l.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:z}}function mg(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function gg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function hc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function dc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,m,x,g,_){let w=r[e];return w===void 0?(w={id:u.id,object:u,geometry:f,material:m,groupOrder:x,renderOrder:u.renderOrder,z:g,group:_},r[e]=w):(w.id=u.id,w.object=u,w.geometry=f,w.material=m,w.groupOrder=x,w.renderOrder=u.renderOrder,w.z=g,w.group=_),e++,w}function a(u,f,m,x,g,_){const w=o(u,f,m,x,g,_);m.transmission>0?n.push(w):m.transparent===!0?i.push(w):t.push(w)}function l(u,f,m,x,g,_){const w=o(u,f,m,x,g,_);m.transmission>0?n.unshift(w):m.transparent===!0?i.unshift(w):t.unshift(w)}function c(u,f){t.length>1&&t.sort(u||gg),n.length>1&&n.sort(f||hc),i.length>1&&i.sort(f||hc)}function h(){for(let u=e,f=r.length;u<f;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function _g(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new dc,r.set(n,[o])):i>=s.length?(o=new dc,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function xg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Re};break;case"SpotLight":t={position:new P,direction:new P,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function yg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vg=0;function wg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bg(r,e){const t=new xg,n=yg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,o=new Te,a=new Te;function l(h,u){let f=0,m=0,x=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let g=0,_=0,w=0,b=0,v=0,T=0,S=0,A=0,z=0,M=0;h.sort(wg);const C=u===!0?Math.PI:1;for(let Y=0,J=h.length;Y<J;Y++){const N=h[Y],D=N.color,O=N.intensity,j=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=D.r*O*C,m+=D.g*O*C,x+=D.b*O*C;else if(N.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(N.sh.coefficients[U],O);else if(N.isDirectionalLight){const U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*C),N.castShadow){const W=N.shadow,K=n.get(N);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=N.shadow.matrix,T++}i.directional[g]=U,g++}else if(N.isSpotLight){const U=t.get(N);U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(D).multiplyScalar(O*C),U.distance=j,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,i.spot[w]=U;const W=N.shadow;if(N.map&&(i.spotLightMap[z]=N.map,z++,W.updateMatrices(N),N.castShadow&&M++),i.spotLightMatrix[w]=W.matrix,N.castShadow){const K=n.get(N);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.spotShadow[w]=K,i.spotShadowMap[w]=V,A++}w++}else if(N.isRectAreaLight){const U=t.get(N);U.color.copy(D).multiplyScalar(O),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),i.rectArea[b]=U,b++}else if(N.isPointLight){const U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*C),U.distance=N.distance,U.decay=N.decay,N.castShadow){const W=N.shadow,K=n.get(N);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,i.pointShadow[_]=K,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=N.shadow.matrix,S++}i.point[_]=U,_++}else if(N.isHemisphereLight){const U=t.get(N);U.skyColor.copy(N.color).multiplyScalar(O*C),U.groundColor.copy(N.groundColor).multiplyScalar(O*C),i.hemi[v]=U,v++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=x;const F=i.hash;(F.directionalLength!==g||F.pointLength!==_||F.spotLength!==w||F.rectAreaLength!==b||F.hemiLength!==v||F.numDirectionalShadows!==T||F.numPointShadows!==S||F.numSpotShadows!==A||F.numSpotMaps!==z)&&(i.directional.length=g,i.spot.length=w,i.rectArea.length=b,i.point.length=_,i.hemi.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=A+z-M,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=M,F.directionalLength=g,F.pointLength=_,F.spotLength=w,F.rectAreaLength=b,F.hemiLength=v,F.numDirectionalShadows=T,F.numPointShadows=S,F.numSpotShadows=A,F.numSpotMaps=z,i.version=vg++)}function c(h,u){let f=0,m=0,x=0,g=0,_=0;const w=u.matrixWorldInverse;for(let b=0,v=h.length;b<v;b++){const T=h[b];if(T.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(w),f++}else if(T.isSpotLight){const S=i.spot[x];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(w),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(w),x++}else if(T.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(w),a.identity(),o.copy(T.matrixWorld),o.premultiply(w),a.extractRotation(o),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(w),m++}else if(T.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(w),_++}}}return{setup:l,setupView:c,state:i}}function fc(r,e){const t=new bg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Mg(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new fc(r,e),t.set(s,[l])):o>=a.length?(l=new fc(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Bo extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sg extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ag(r,e,t){let n=new Ts;const i=new Pe,s=new Pe,o=new qe,a=new Bo({depthPacking:Qh}),l=new Sg,c={},h=t.maxTextureSize,u={[Gn]:qt,[qt]:Gn,[An]:An},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Tg,fragmentShader:Eg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new ht;x.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new de(x,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da,this.render=function(T,S,A){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;const z=r.getRenderTarget(),M=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Wn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let Y=0,J=T.length;Y<J;Y++){const N=T[Y],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const O=D.getFrameExtents();if(i.multiply(O),s.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/O.x),i.x=s.x*O.x,D.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/O.y),i.y=s.y*O.y,D.mapSize.y=s.y)),D.map===null){const V=this.type!==ls?{minFilter:Lt,magFilter:Lt}:{};D.map=new $n(i.x,i.y,V),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const j=D.getViewportCount();for(let V=0;V<j;V++){const U=D.getViewport(V);o.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),F.viewport(o),D.updateMatrices(N,V),n=D.getFrustum(),v(S,A,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===ls&&w(D,A),D.needsUpdate=!1}_.needsUpdate=!1,r.setRenderTarget(z,M,C)};function w(T,S){const A=e.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $n(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(S,null,A,f,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(S,null,A,m,g,null)}function b(T,S,A,z,M,C){let F=null;const Y=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(Y!==void 0)F=Y;else if(F=A.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const J=F.uuid,N=S.uuid;let D=c[J];D===void 0&&(D={},c[J]=D);let O=D[N];O===void 0&&(O=F.clone(),D[N]=O),F=O}return F.visible=S.visible,F.wireframe=S.wireframe,C===ls?F.side=S.shadowSide!==null?S.shadowSide:S.side:F.side=S.shadowSide!==null?S.shadowSide:u[S.side],F.alphaMap=S.alphaMap,F.alphaTest=S.alphaTest,F.map=S.map,F.clipShadows=S.clipShadows,F.clippingPlanes=S.clippingPlanes,F.clipIntersection=S.clipIntersection,F.displacementMap=S.displacementMap,F.displacementScale=S.displacementScale,F.displacementBias=S.displacementBias,F.wireframeLinewidth=S.wireframeLinewidth,F.linewidth=S.linewidth,A.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(A.matrixWorld),F.nearDistance=z,F.farDistance=M),F}function v(T,S,A,z,M){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ls)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const Y=e.update(T),J=T.material;if(Array.isArray(J)){const N=Y.groups;for(let D=0,O=N.length;D<O;D++){const j=N[D],V=J[j.materialIndex];if(V&&V.visible){const U=b(T,V,z,A.near,A.far,M);r.renderBufferDirect(A,null,Y,U,T,j)}}}else if(J.visible){const N=b(T,J,z,A.near,A.far,M);r.renderBufferDirect(A,null,Y,N,T,null)}}const F=T.children;for(let Y=0,J=F.length;Y<J;Y++)v(F[Y],S,A,z,M)}}function Cg(r,e,t){const n=t.isWebGL2;function i(){let B=!1;const te=new qe;let ae=null;const ye=new qe(0,0,0,0);return{setMask:function(ve){ae!==ve&&!B&&(r.colorMask(ve,ve,ve,ve),ae=ve)},setLocked:function(ve){B=ve},setClear:function(ve,ot,Mt,vt,ln){ln===!0&&(ve*=vt,ot*=vt,Mt*=vt),te.set(ve,ot,Mt,vt),ye.equals(te)===!1&&(r.clearColor(ve,ot,Mt,vt),ye.copy(te))},reset:function(){B=!1,ae=null,ye.set(-1,0,0,0)}}}function s(){let B=!1,te=null,ae=null,ye=null;return{setTest:function(ve){ve?ge(2929):pe(2929)},setMask:function(ve){te!==ve&&!B&&(r.depthMask(ve),te=ve)},setFunc:function(ve){if(ae!==ve){switch(ve){case wh:r.depthFunc(512);break;case bh:r.depthFunc(519);break;case Mh:r.depthFunc(513);break;case Jr:r.depthFunc(515);break;case Sh:r.depthFunc(514);break;case Th:r.depthFunc(518);break;case Eh:r.depthFunc(516);break;case Ah:r.depthFunc(517);break;default:r.depthFunc(515)}ae=ve}},setLocked:function(ve){B=ve},setClear:function(ve){ye!==ve&&(r.clearDepth(ve),ye=ve)},reset:function(){B=!1,te=null,ae=null,ye=null}}}function o(){let B=!1,te=null,ae=null,ye=null,ve=null,ot=null,Mt=null,vt=null,ln=null;return{setTest:function(dt){B||(dt?ge(2960):pe(2960))},setMask:function(dt){te!==dt&&!B&&(r.stencilMask(dt),te=dt)},setFunc:function(dt,Xt,cn){(ae!==dt||ye!==Xt||ve!==cn)&&(r.stencilFunc(dt,Xt,cn),ae=dt,ye=Xt,ve=cn)},setOp:function(dt,Xt,cn){(ot!==dt||Mt!==Xt||vt!==cn)&&(r.stencilOp(dt,Xt,cn),ot=dt,Mt=Xt,vt=cn)},setLocked:function(dt){B=dt},setClear:function(dt){ln!==dt&&(r.clearStencil(dt),ln=dt)},reset:function(){B=!1,te=null,ae=null,ye=null,ve=null,ot=null,Mt=null,vt=null,ln=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let f={},m={},x=new WeakMap,g=[],_=null,w=!1,b=null,v=null,T=null,S=null,A=null,z=null,M=null,C=!1,F=null,Y=null,J=null,N=null,D=null;const O=r.getParameter(35661);let j=!1,V=0;const U=r.getParameter(7938);U.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(U)[1]),j=V>=1):U.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),j=V>=2);let W=null,K={};const oe=r.getParameter(3088),H=r.getParameter(2978),ie=new qe().fromArray(oe),re=new qe().fromArray(H);function G(B,te,ae){const ye=new Uint8Array(4),ve=r.createTexture();r.bindTexture(B,ve),r.texParameteri(B,10241,9728),r.texParameteri(B,10240,9728);for(let ot=0;ot<ae;ot++)r.texImage2D(te+ot,0,6408,1,1,0,6408,5121,ye);return ve}const me={};me[3553]=G(3553,3553,1),me[34067]=G(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ge(2929),l.setFunc(Jr),Ce(!1),tt(Pa),ge(2884),yt(Wn);function ge(B){f[B]!==!0&&(r.enable(B),f[B]=!0)}function pe(B){f[B]!==!1&&(r.disable(B),f[B]=!1)}function le(B,te){return m[B]!==te?(r.bindFramebuffer(B,te),m[B]=te,n&&(B===36009&&(m[36160]=te),B===36160&&(m[36009]=te)),!0):!1}function xe(B,te){let ae=g,ye=!1;if(B)if(ae=x.get(te),ae===void 0&&(ae=[],x.set(te,ae)),B.isWebGLMultipleRenderTargets){const ve=B.texture;if(ae.length!==ve.length||ae[0]!==36064){for(let ot=0,Mt=ve.length;ot<Mt;ot++)ae[ot]=36064+ot;ae.length=ve.length,ye=!0}}else ae[0]!==36064&&(ae[0]=36064,ye=!0);else ae[0]!==1029&&(ae[0]=1029,ye=!0);ye&&(t.isWebGL2?r.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function De(B){return _!==B?(r.useProgram(B),_=B,!0):!1}const Ee={[Ti]:32774,[uh]:32778,[hh]:32779};if(n)Ee[ka]=32775,Ee[Oa]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(Ee[ka]=B.MIN_EXT,Ee[Oa]=B.MAX_EXT)}const He={[dh]:0,[fh]:1,[ph]:768,[za]:770,[vh]:776,[xh]:774,[gh]:772,[mh]:769,[Na]:771,[yh]:775,[_h]:773};function yt(B,te,ae,ye,ve,ot,Mt,vt){if(B===Wn){w===!0&&(pe(3042),w=!1);return}if(w===!1&&(ge(3042),w=!0),B!==ch){if(B!==b||vt!==C){if((v!==Ti||A!==Ti)&&(r.blendEquation(32774),v=Ti,A=Ti),vt)switch(B){case Si:r.blendFuncSeparate(1,771,1,771);break;case Ra:r.blendFunc(1,1);break;case Ia:r.blendFuncSeparate(0,769,0,1);break;case Fa:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Si:r.blendFuncSeparate(770,771,1,771);break;case Ra:r.blendFunc(770,1);break;case Ia:r.blendFuncSeparate(0,769,0,1);break;case Fa:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,S=null,z=null,M=null,b=B,C=vt}return}ve=ve||te,ot=ot||ae,Mt=Mt||ye,(te!==v||ve!==A)&&(r.blendEquationSeparate(Ee[te],Ee[ve]),v=te,A=ve),(ae!==T||ye!==S||ot!==z||Mt!==M)&&(r.blendFuncSeparate(He[ae],He[ye],He[ot],He[Mt]),T=ae,S=ye,z=ot,M=Mt),b=B,C=!1}function Ct(B,te){B.side===An?pe(2884):ge(2884);let ae=B.side===qt;te&&(ae=!ae),Ce(ae),B.blending===Si&&B.transparent===!1?yt(Wn):yt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);const ye=B.stencilWrite;c.setTest(ye),ye&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ze(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ge(32926):pe(32926)}function Ce(B){F!==B&&(B?r.frontFace(2304):r.frontFace(2305),F=B)}function tt(B){B!==oh?(ge(2884),B!==Y&&(B===Pa?r.cullFace(1029):B===ah?r.cullFace(1028):r.cullFace(1032))):pe(2884),Y=B}function $e(B){B!==J&&(j&&r.lineWidth(B),J=B)}function Ze(B,te,ae){B?(ge(32823),(N!==te||D!==ae)&&(r.polygonOffset(te,ae),N=te,D=ae)):pe(32823)}function Je(B){B?ge(3089):pe(3089)}function Ke(B){B===void 0&&(B=33984+O-1),W!==B&&(r.activeTexture(B),W=B)}function R(B,te,ae){ae===void 0&&(W===null?ae=33984+O-1:ae=W);let ye=K[ae];ye===void 0&&(ye={type:void 0,texture:void 0},K[ae]=ye),(ye.type!==B||ye.texture!==te)&&(W!==ae&&(r.activeTexture(ae),W=ae),r.bindTexture(B,te||me[B]),ye.type=B,ye.texture=te)}function E(){const B=K[W];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function k(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(B){ie.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),ie.copy(B))}function Se(B){re.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),re.copy(B))}function Ge(B,te){let ae=u.get(te);ae===void 0&&(ae=new WeakMap,u.set(te,ae));let ye=ae.get(B);ye===void 0&&(ye=r.getUniformBlockIndex(te,B.name),ae.set(B,ye))}function ke(B,te){const ye=u.get(te).get(B);h.get(te)!==ye&&(r.uniformBlockBinding(te,ye,B.__bindingPointIndex),h.set(te,ye))}function Qe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},W=null,K={},m={},x=new WeakMap,g=[],_=null,w=!1,b=null,v=null,T=null,S=null,A=null,z=null,M=null,C=!1,F=null,Y=null,J=null,N=null,D=null,ie.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ge,disable:pe,bindFramebuffer:le,drawBuffers:xe,useProgram:De,setBlending:yt,setMaterial:Ct,setFlipSided:Ce,setCullFace:tt,setLineWidth:$e,setPolygonOffset:Ze,setScissorTest:Je,activeTexture:Ke,bindTexture:R,unbindTexture:E,compressedTexImage2D:Z,compressedTexImage3D:ue,texImage2D:he,texImage3D:we,updateUBOMapping:Ge,uniformBlockBinding:ke,texStorage2D:X,texStorage3D:se,texSubImage2D:ce,texSubImage3D:_e,compressedTexSubImage2D:be,compressedTexSubImage3D:k,scissor:Me,viewport:Se,reset:Qe}}function Lg(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let g;const _=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,E){return w?new OffscreenCanvas(R,E):_s("canvas")}function v(R,E,Z,ue){let ce=1;if((R.width>ue||R.height>ue)&&(ce=ue/Math.max(R.width,R.height)),ce<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const _e=E?yl:Math.floor,be=_e(ce*R.width),k=_e(ce*R.height);g===void 0&&(g=b(be,k));const X=Z?b(be,k):g;return X.width=be,X.height=k,X.getContext("2d").drawImage(R,0,0,be,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+be+"x"+k+")."),X}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function T(R){return ho(R.width)&&ho(R.height)}function S(R){return a?!1:R.wrapS!==$t||R.wrapT!==$t||R.minFilter!==Lt&&R.minFilter!==nn}function A(R,E){return R.generateMipmaps&&E&&R.minFilter!==Lt&&R.minFilter!==nn}function z(R){r.generateMipmap(R)}function M(R,E,Z,ue,ce=!1){if(a===!1)return E;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let _e=E;return E===6403&&(Z===5126&&(_e=33326),Z===5131&&(_e=33325),Z===5121&&(_e=33321)),E===33319&&(Z===5126&&(_e=33328),Z===5131&&(_e=33327),Z===5121&&(_e=33323)),E===6408&&(Z===5126&&(_e=34836),Z===5131&&(_e=34842),Z===5121&&(_e=ue===et&&ce===!1?35907:32856),Z===32819&&(_e=32854),Z===32820&&(_e=32855)),(_e===33325||_e===33326||_e===33327||_e===33328||_e===34842||_e===34836)&&e.get("EXT_color_buffer_float"),_e}function C(R,E,Z){return A(R,Z)===!0||R.isFramebufferTexture&&R.minFilter!==Lt&&R.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function F(R){return R===Lt||R===Ua||R===to?9728:9729}function Y(R){const E=R.target;E.removeEventListener("dispose",Y),N(E),E.isVideoTexture&&x.delete(E)}function J(R){const E=R.target;E.removeEventListener("dispose",J),O(E)}function N(R){const E=n.get(R);if(E.__webglInit===void 0)return;const Z=R.source,ue=_.get(Z);if(ue){const ce=ue[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&D(R),Object.keys(ue).length===0&&_.delete(Z)}n.remove(R)}function D(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const Z=R.source,ue=_.get(Z);delete ue[E.__cacheKey],o.memory.textures--}function O(R){const E=R.texture,Z=n.get(R),ue=n.get(E);if(ue.__webglTexture!==void 0&&(r.deleteTexture(ue.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++)r.deleteFramebuffer(Z.__webglFramebuffer[ce]),Z.__webglDepthbuffer&&r.deleteRenderbuffer(Z.__webglDepthbuffer[ce]);else{if(r.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&r.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ce=0;ce<Z.__webglColorRenderbuffer.length;ce++)Z.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(Z.__webglColorRenderbuffer[ce]);Z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ce=0,_e=E.length;ce<_e;ce++){const be=n.get(E[ce]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(E[ce])}n.remove(E),n.remove(R)}let j=0;function V(){j=0}function U(){const R=j;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),j+=1,R}function W(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.encoding),E.join()}function K(R,E){const Z=n.get(R);if(R.isVideoTexture&&Je(R),R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){const ue=R.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(Z,R,E);return}}t.bindTexture(3553,Z.__webglTexture,33984+E)}function oe(R,E){const Z=n.get(R);if(R.version>0&&Z.__version!==R.version){pe(Z,R,E);return}t.bindTexture(35866,Z.__webglTexture,33984+E)}function H(R,E){const Z=n.get(R);if(R.version>0&&Z.__version!==R.version){pe(Z,R,E);return}t.bindTexture(32879,Z.__webglTexture,33984+E)}function ie(R,E){const Z=n.get(R);if(R.version>0&&Z.__version!==R.version){le(Z,R,E);return}t.bindTexture(34067,Z.__webglTexture,33984+E)}const re={[cs]:10497,[$t]:33071,[eo]:33648},G={[Lt]:9728,[Ua]:9984,[to]:9986,[nn]:9729,[kh]:9985,[us]:9987};function me(R,E,Z){if(Z?(r.texParameteri(R,10242,re[E.wrapS]),r.texParameteri(R,10243,re[E.wrapT]),(R===32879||R===35866)&&r.texParameteri(R,32882,re[E.wrapR]),r.texParameteri(R,10240,G[E.magFilter]),r.texParameteri(R,10241,G[E.minFilter])):(r.texParameteri(R,10242,33071),r.texParameteri(R,10243,33071),(R===32879||R===35866)&&r.texParameteri(R,32882,33071),(E.wrapS!==$t||E.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,10240,F(E.magFilter)),r.texParameteri(R,10241,F(E.minFilter)),E.minFilter!==Lt&&E.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Lt||E.minFilter!==to&&E.minFilter!==us||E.type===jn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===hs&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(R,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function ge(R,E){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",Y));const ue=E.source;let ce=_.get(ue);ce===void 0&&(ce={},_.set(ue,ce));const _e=W(E);if(_e!==R.__cacheKey){ce[_e]===void 0&&(ce[_e]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ce[_e].usedTimes++;const be=ce[R.__cacheKey];be!==void 0&&(ce[R.__cacheKey].usedTimes--,be.usedTimes===0&&D(E)),R.__cacheKey=_e,R.__webglTexture=ce[_e].texture}return Z}function pe(R,E,Z){let ue=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=35866),E.isData3DTexture&&(ue=32879);const ce=ge(R,E),_e=E.source;t.bindTexture(ue,R.__webglTexture,33984+Z);const be=n.get(_e);if(_e.version!==be.__version||ce===!0){t.activeTexture(33984+Z),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const k=S(E)&&T(E.image)===!1;let X=v(E.image,k,!1,h);X=Ke(E,X);const se=T(X)||a,he=s.convert(E.format,E.encoding);let we=s.convert(E.type),Me=M(E.internalFormat,he,we,E.encoding,E.isVideoTexture);me(ue,E,se);let Se;const Ge=E.mipmaps,ke=a&&E.isVideoTexture!==!0,Qe=be.__version===void 0||ce===!0,B=C(E,X,se);if(E.isDepthTexture)Me=6402,a?E.type===jn?Me=36012:E.type===oi?Me=33190:E.type===Ci?Me=35056:Me=33189:E.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ai&&Me===6402&&E.type!==Va&&E.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=oi,we=s.convert(E.type)),E.format===Li&&Me===6402&&(Me=34041,E.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ci,we=s.convert(E.type))),Qe&&(ke?t.texStorage2D(3553,1,Me,X.width,X.height):t.texImage2D(3553,0,Me,X.width,X.height,0,he,we,null));else if(E.isDataTexture)if(Ge.length>0&&se){ke&&Qe&&t.texStorage2D(3553,B,Me,Ge[0].width,Ge[0].height);for(let te=0,ae=Ge.length;te<ae;te++)Se=Ge[te],ke?t.texSubImage2D(3553,te,0,0,Se.width,Se.height,he,we,Se.data):t.texImage2D(3553,te,Me,Se.width,Se.height,0,he,we,Se.data);E.generateMipmaps=!1}else ke?(Qe&&t.texStorage2D(3553,B,Me,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,he,we,X.data)):t.texImage2D(3553,0,Me,X.width,X.height,0,he,we,X.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ke&&Qe&&t.texStorage3D(35866,B,Me,Ge[0].width,Ge[0].height,X.depth);for(let te=0,ae=Ge.length;te<ae;te++)Se=Ge[te],E.format!==sn?he!==null?ke?t.compressedTexSubImage3D(35866,te,0,0,0,Se.width,Se.height,X.depth,he,Se.data,0,0):t.compressedTexImage3D(35866,te,Me,Se.width,Se.height,X.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(35866,te,0,0,0,Se.width,Se.height,X.depth,he,we,Se.data):t.texImage3D(35866,te,Me,Se.width,Se.height,X.depth,0,he,we,Se.data)}else{ke&&Qe&&t.texStorage2D(3553,B,Me,Ge[0].width,Ge[0].height);for(let te=0,ae=Ge.length;te<ae;te++)Se=Ge[te],E.format!==sn?he!==null?ke?t.compressedTexSubImage2D(3553,te,0,0,Se.width,Se.height,he,Se.data):t.compressedTexImage2D(3553,te,Me,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(3553,te,0,0,Se.width,Se.height,he,we,Se.data):t.texImage2D(3553,te,Me,Se.width,Se.height,0,he,we,Se.data)}else if(E.isDataArrayTexture)ke?(Qe&&t.texStorage3D(35866,B,Me,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,he,we,X.data)):t.texImage3D(35866,0,Me,X.width,X.height,X.depth,0,he,we,X.data);else if(E.isData3DTexture)ke?(Qe&&t.texStorage3D(32879,B,Me,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,he,we,X.data)):t.texImage3D(32879,0,Me,X.width,X.height,X.depth,0,he,we,X.data);else if(E.isFramebufferTexture){if(Qe)if(ke)t.texStorage2D(3553,B,Me,X.width,X.height);else{let te=X.width,ae=X.height;for(let ye=0;ye<B;ye++)t.texImage2D(3553,ye,Me,te,ae,0,he,we,null),te>>=1,ae>>=1}}else if(Ge.length>0&&se){ke&&Qe&&t.texStorage2D(3553,B,Me,Ge[0].width,Ge[0].height);for(let te=0,ae=Ge.length;te<ae;te++)Se=Ge[te],ke?t.texSubImage2D(3553,te,0,0,he,we,Se):t.texImage2D(3553,te,Me,he,we,Se);E.generateMipmaps=!1}else ke?(Qe&&t.texStorage2D(3553,B,Me,X.width,X.height),t.texSubImage2D(3553,0,0,0,he,we,X)):t.texImage2D(3553,0,Me,he,we,X);A(E,se)&&z(ue),be.__version=_e.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function le(R,E,Z){if(E.image.length!==6)return;const ue=ge(R,E),ce=E.source;t.bindTexture(34067,R.__webglTexture,33984+Z);const _e=n.get(ce);if(ce.version!==_e.__version||ue===!0){t.activeTexture(33984+Z),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const be=E.isCompressedTexture||E.image[0].isCompressedTexture,k=E.image[0]&&E.image[0].isDataTexture,X=[];for(let te=0;te<6;te++)!be&&!k?X[te]=v(E.image[te],!1,!0,c):X[te]=k?E.image[te].image:E.image[te],X[te]=Ke(E,X[te]);const se=X[0],he=T(se)||a,we=s.convert(E.format,E.encoding),Me=s.convert(E.type),Se=M(E.internalFormat,we,Me,E.encoding),Ge=a&&E.isVideoTexture!==!0,ke=_e.__version===void 0||ue===!0;let Qe=C(E,se,he);me(34067,E,he);let B;if(be){Ge&&ke&&t.texStorage2D(34067,Qe,Se,se.width,se.height);for(let te=0;te<6;te++){B=X[te].mipmaps;for(let ae=0;ae<B.length;ae++){const ye=B[ae];E.format!==sn?we!==null?Ge?t.compressedTexSubImage2D(34069+te,ae,0,0,ye.width,ye.height,we,ye.data):t.compressedTexImage2D(34069+te,ae,Se,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(34069+te,ae,0,0,ye.width,ye.height,we,Me,ye.data):t.texImage2D(34069+te,ae,Se,ye.width,ye.height,0,we,Me,ye.data)}}}else{B=E.mipmaps,Ge&&ke&&(B.length>0&&Qe++,t.texStorage2D(34067,Qe,Se,X[0].width,X[0].height));for(let te=0;te<6;te++)if(k){Ge?t.texSubImage2D(34069+te,0,0,0,X[te].width,X[te].height,we,Me,X[te].data):t.texImage2D(34069+te,0,Se,X[te].width,X[te].height,0,we,Me,X[te].data);for(let ae=0;ae<B.length;ae++){const ve=B[ae].image[te].image;Ge?t.texSubImage2D(34069+te,ae+1,0,0,ve.width,ve.height,we,Me,ve.data):t.texImage2D(34069+te,ae+1,Se,ve.width,ve.height,0,we,Me,ve.data)}}else{Ge?t.texSubImage2D(34069+te,0,0,0,we,Me,X[te]):t.texImage2D(34069+te,0,Se,we,Me,X[te]);for(let ae=0;ae<B.length;ae++){const ye=B[ae];Ge?t.texSubImage2D(34069+te,ae+1,0,0,we,Me,ye.image[te]):t.texImage2D(34069+te,ae+1,Se,we,Me,ye.image[te])}}}A(E,he)&&z(34067),_e.__version=ce.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function xe(R,E,Z,ue,ce){const _e=s.convert(Z.format,Z.encoding),be=s.convert(Z.type),k=M(Z.internalFormat,_e,be,Z.encoding);n.get(E).__hasExternalTextures||(ce===32879||ce===35866?t.texImage3D(ce,0,k,E.width,E.height,E.depth,0,_e,be,null):t.texImage2D(ce,0,k,E.width,E.height,0,_e,be,null)),t.bindFramebuffer(36160,R),Ze(E)?f.framebufferTexture2DMultisampleEXT(36160,ue,ce,n.get(Z).__webglTexture,0,$e(E)):(ce===3553||ce>=34069&&ce<=34074)&&r.framebufferTexture2D(36160,ue,ce,n.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function De(R,E,Z){if(r.bindRenderbuffer(36161,R),E.depthBuffer&&!E.stencilBuffer){let ue=33189;if(Z||Ze(E)){const ce=E.depthTexture;ce&&ce.isDepthTexture&&(ce.type===jn?ue=36012:ce.type===oi&&(ue=33190));const _e=$e(E);Ze(E)?f.renderbufferStorageMultisampleEXT(36161,_e,ue,E.width,E.height):r.renderbufferStorageMultisample(36161,_e,ue,E.width,E.height)}else r.renderbufferStorage(36161,ue,E.width,E.height);r.framebufferRenderbuffer(36160,36096,36161,R)}else if(E.depthBuffer&&E.stencilBuffer){const ue=$e(E);Z&&Ze(E)===!1?r.renderbufferStorageMultisample(36161,ue,35056,E.width,E.height):Ze(E)?f.renderbufferStorageMultisampleEXT(36161,ue,35056,E.width,E.height):r.renderbufferStorage(36161,34041,E.width,E.height),r.framebufferRenderbuffer(36160,33306,36161,R)}else{const ue=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ce=0;ce<ue.length;ce++){const _e=ue[ce],be=s.convert(_e.format,_e.encoding),k=s.convert(_e.type),X=M(_e.internalFormat,be,k,_e.encoding),se=$e(E);Z&&Ze(E)===!1?r.renderbufferStorageMultisample(36161,se,X,E.width,E.height):Ze(E)?f.renderbufferStorageMultisampleEXT(36161,se,X,E.width,E.height):r.renderbufferStorage(36161,X,E.width,E.height)}}r.bindRenderbuffer(36161,null)}function Ee(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const ue=n.get(E.depthTexture).__webglTexture,ce=$e(E);if(E.depthTexture.format===ai)Ze(E)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ue,0,ce):r.framebufferTexture2D(36160,36096,3553,ue,0);else if(E.depthTexture.format===Li)Ze(E)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ue,0,ce):r.framebufferTexture2D(36160,33306,3553,ue,0);else throw new Error("Unknown depthTexture format")}function He(R){const E=n.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ee(E.__webglFramebuffer,R)}else if(Z){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(36160,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]=r.createRenderbuffer(),De(E.__webglDepthbuffer[ue],R,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),De(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function yt(R,E,Z){const ue=n.get(R);E!==void 0&&xe(ue.__webglFramebuffer,R,R.texture,36064,3553),Z!==void 0&&He(R)}function Ct(R){const E=R.texture,Z=n.get(R),ue=n.get(E);R.addEventListener("dispose",J),R.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture()),ue.__version=E.version,o.memory.textures++);const ce=R.isWebGLCubeRenderTarget===!0,_e=R.isWebGLMultipleRenderTargets===!0,be=T(R)||a;if(ce){Z.__webglFramebuffer=[];for(let k=0;k<6;k++)Z.__webglFramebuffer[k]=r.createFramebuffer()}else{if(Z.__webglFramebuffer=r.createFramebuffer(),_e)if(i.drawBuffers){const k=R.texture;for(let X=0,se=k.length;X<se;X++){const he=n.get(k[X]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Ze(R)===!1){const k=_e?E:[E];Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let X=0;X<k.length;X++){const se=k[X];Z.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[X]);const he=s.convert(se.format,se.encoding),we=s.convert(se.type),Me=M(se.internalFormat,he,we,se.encoding,R.isXRRenderTarget===!0),Se=$e(R);r.renderbufferStorageMultisample(36161,Se,Me,R.width,R.height),r.framebufferRenderbuffer(36160,36064+X,36161,Z.__webglColorRenderbuffer[X])}r.bindRenderbuffer(36161,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),De(Z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}}if(ce){t.bindTexture(34067,ue.__webglTexture),me(34067,E,be);for(let k=0;k<6;k++)xe(Z.__webglFramebuffer[k],R,E,36064,34069+k);A(E,be)&&z(34067),t.unbindTexture()}else if(_e){const k=R.texture;for(let X=0,se=k.length;X<se;X++){const he=k[X],we=n.get(he);t.bindTexture(3553,we.__webglTexture),me(3553,he,be),xe(Z.__webglFramebuffer,R,he,36064+X,3553),A(he,be)&&z(3553)}t.unbindTexture()}else{let k=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?k=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,ue.__webglTexture),me(k,E,be),xe(Z.__webglFramebuffer,R,E,36064,k),A(E,be)&&z(k),t.unbindTexture()}R.depthBuffer&&He(R)}function Ce(R){const E=T(R)||a,Z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ue=0,ce=Z.length;ue<ce;ue++){const _e=Z[ue];if(A(_e,E)){const be=R.isWebGLCubeRenderTarget?34067:3553,k=n.get(_e).__webglTexture;t.bindTexture(be,k),z(be),t.unbindTexture()}}}function tt(R){if(a&&R.samples>0&&Ze(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Z=R.width,ue=R.height;let ce=16384;const _e=[],be=R.stencilBuffer?33306:36096,k=n.get(R),X=R.isWebGLMultipleRenderTargets===!0;if(X)for(let se=0;se<E.length;se++)t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+se,36161,null),t.bindFramebuffer(36160,k.__webglFramebuffer),r.framebufferTexture2D(36009,36064+se,3553,null,0);t.bindFramebuffer(36008,k.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,k.__webglFramebuffer);for(let se=0;se<E.length;se++){_e.push(36064+se),R.depthBuffer&&_e.push(be);const he=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(he===!1&&(R.depthBuffer&&(ce|=256),R.stencilBuffer&&(ce|=1024)),X&&r.framebufferRenderbuffer(36008,36064,36161,k.__webglColorRenderbuffer[se]),he===!0&&(r.invalidateFramebuffer(36008,[be]),r.invalidateFramebuffer(36009,[be])),X){const we=n.get(E[se]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,we,0)}r.blitFramebuffer(0,0,Z,ue,0,0,Z,ue,ce,9728),m&&r.invalidateFramebuffer(36008,_e)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let se=0;se<E.length;se++){t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+se,36161,k.__webglColorRenderbuffer[se]);const he=n.get(E[se]).__webglTexture;t.bindFramebuffer(36160,k.__webglFramebuffer),r.framebufferTexture2D(36009,36064+se,3553,he,0)}t.bindFramebuffer(36009,k.__webglMultisampledFramebuffer)}}function $e(R){return Math.min(u,R.samples)}function Ze(R){const E=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Je(R){const E=o.render.frame;x.get(R)!==E&&(x.set(R,E),R.update())}function Ke(R,E){const Z=R.encoding,ue=R.format,ce=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===co||Z!==li&&(Z===et?a===!1?e.has("EXT_sRGB")===!0&&ue===sn?(R.format=co,R.minFilter=nn,R.generateMipmaps=!1):E=bl.sRGBToLinear(E):(ue!==sn||ce!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),E}this.allocateTextureUnit=U,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=oe,this.setTexture3D=H,this.setTextureCube=ie,this.rebindTextures=yt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ze}function Pg(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===ri)return 5121;if(s===Bh)return 32819;if(s===Uh)return 32820;if(s===Oh)return 5120;if(s===zh)return 5122;if(s===Va)return 5123;if(s===Nh)return 5124;if(s===oi)return 5125;if(s===jn)return 5126;if(s===hs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Vh)return 6406;if(s===sn)return 6408;if(s===Hh)return 6409;if(s===Gh)return 6410;if(s===ai)return 6402;if(s===Li)return 34041;if(s===co)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Wh)return 6403;if(s===jh)return 36244;if(s===Xh)return 33319;if(s===qh)return 33320;if(s===$h)return 36249;if(s===no||s===io||s===so||s===ro)if(o===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===no)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===so)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===no)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===io)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===so)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ro)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ha||s===Ga||s===Wa||s===ja)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ha)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ga)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ja)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xa||s===qa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Xa)return o===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qa)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$a||s===Ya||s===Za||s===Ka||s===Ja||s===Qa||s===el||s===tl||s===nl||s===il||s===sl||s===rl||s===ol||s===al)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===$a)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ya)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Za)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ka)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ja)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qa)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===el)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===il)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ol)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===al)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===oo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===oo)return o===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Zh||s===ll||s===cl||s===ul)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===oo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ll)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ul)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ci?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Dg extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mn extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rg={type:"move"};class Uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),w=this._getHandJoint(c,g);_!==null&&(w.matrix.fromArray(_.transform.matrix),w.matrix.decompose(w.position,w.rotation,w.scale),w.jointRadius=_.radius),w.visible=_!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ig extends Dt{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:ai,h!==ai&&h!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ai&&(n=oi),n===void 0&&h===Li&&(n=Ci),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1}}class Fg extends ci{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,x=null;const g=t.getContextAttributes();let _=null,w=null;const b=[],v=[],T=new Set,S=new Map,A=new Ut;A.layers.enable(1),A.viewport=new qe;const z=new Ut;z.layers.enable(2),z.viewport=new qe;const M=[A,z],C=new Dg;C.layers.enable(1),C.layers.enable(2);let F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ie=b[H];return ie===void 0&&(ie=new Uo,b[H]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(H){let ie=b[H];return ie===void 0&&(ie=new Uo,b[H]=ie),ie.getGripSpace()},this.getHand=function(H){let ie=b[H];return ie===void 0&&(ie=new Uo,b[H]=ie),ie.getHandSpace()};function J(H){const ie=v.indexOf(H.inputSource);if(ie===-1)return;const re=b[ie];re!==void 0&&re.dispatchEvent({type:H.type,data:H.inputSource})}function N(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",D);for(let H=0;H<b.length;H++){const ie=v[H];ie!==null&&(v[H]=null,b[H].disconnect(ie))}F=null,Y=null,e.setRenderTarget(_),m=null,f=null,u=null,i=null,w=null,oe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",N),i.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:m}),w=new $n(m.framebufferWidth,m.framebufferHeight,{format:sn,type:ri,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let ie=null,re=null,G=null;g.depth&&(G=g.stencil?35056:33190,ie=g.stencil?Li:ai,re=g.stencil?Ci:oi);const me={colorFormat:32856,depthFormat:G,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(me),i.updateRenderState({layers:[f]}),w=new $n(f.textureWidth,f.textureHeight,{format:sn,type:ri,depthTexture:new Ig(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ge=e.properties.get(w);ge.__ignoreDepthValues=f.ignoreDepthValues}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(H){for(let ie=0;ie<H.removed.length;ie++){const re=H.removed[ie],G=v.indexOf(re);G>=0&&(v[G]=null,b[G].disconnect(re))}for(let ie=0;ie<H.added.length;ie++){const re=H.added[ie];let G=v.indexOf(re);if(G===-1){for(let ge=0;ge<b.length;ge++)if(ge>=v.length){v.push(re),G=ge;break}else if(v[ge]===null){v[ge]=re,G=ge;break}if(G===-1)break}const me=b[G];me&&me.connect(re)}}const O=new P,j=new P;function V(H,ie,re){O.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(re.matrixWorld);const G=O.distanceTo(j),me=ie.projectionMatrix.elements,ge=re.projectionMatrix.elements,pe=me[14]/(me[10]-1),le=me[14]/(me[10]+1),xe=(me[9]+1)/me[5],De=(me[9]-1)/me[5],Ee=(me[8]-1)/me[0],He=(ge[8]+1)/ge[0],yt=pe*Ee,Ct=pe*He,Ce=G/(-Ee+He),tt=Ce*-Ee;ie.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(tt),H.translateZ(Ce),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const $e=pe+Ce,Ze=le+Ce,Je=yt-tt,Ke=Ct+(G-tt),R=xe*le/Ze*$e,E=De*le/Ze*$e;H.projectionMatrix.makePerspective(Je,Ke,R,E,$e,Ze)}function U(H,ie){ie===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ie.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;C.near=z.near=A.near=H.near,C.far=z.far=A.far=H.far,(F!==C.near||Y!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,Y=C.far);const ie=H.parent,re=C.cameras;U(C,ie);for(let me=0;me<re.length;me++)U(re[me],ie);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),H.matrix.copy(C.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const G=H.children;for(let me=0,ge=G.length;me<ge;me++)G[me].updateMatrixWorld(!0);re.length===2?V(C,A,z):C.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.getPlanes=function(){return T};let W=null;function K(H,ie){if(h=ie.getViewerPose(c||o),x=ie,h!==null){const re=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let G=!1;re.length!==C.cameras.length&&(C.cameras.length=0,G=!0);for(let me=0;me<re.length;me++){const ge=re[me];let pe=null;if(m!==null)pe=m.getViewport(ge);else{const xe=u.getViewSubImage(f,ge);pe=xe.viewport,me===0&&(e.setRenderTargetTextures(w,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(w))}let le=M[me];le===void 0&&(le=new Ut,le.layers.enable(me),le.viewport=new qe,M[me]=le),le.matrix.fromArray(ge.transform.matrix),le.projectionMatrix.fromArray(ge.projectionMatrix),le.viewport.set(pe.x,pe.y,pe.width,pe.height),me===0&&C.matrix.copy(le.matrix),G===!0&&C.cameras.push(le)}}for(let re=0;re<b.length;re++){const G=v[re],me=b[re];G!==null&&me!==void 0&&me.update(G,ie,c||o)}if(W&&W(H,ie),ie.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ie.detectedPlanes});let re=null;for(const G of T)ie.detectedPlanes.has(G)||(re===null&&(re=[]),re.push(G));if(re!==null)for(const G of re)T.delete(G),S.delete(G),n.dispatchEvent({type:"planeremoved",data:G});for(const G of ie.detectedPlanes)if(!T.has(G))T.add(G),S.set(G,ie.lastChangedTime),n.dispatchEvent({type:"planeadded",data:G});else{const me=S.get(G);G.lastChangedTime>me&&(S.set(G,G.lastChangedTime),n.dispatchEvent({type:"planechanged",data:G}))}}x=null}const oe=new Vl;oe.setAnimationLoop(K),this.setAnimationLoop=function(H){W=H},this.dispose=function(){}}}function kg(r,e){function t(g,_){_.color.getRGB(g.fogColor.value,zl(r)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function n(g,_,w,b,v){_.isMeshBasicMaterial||_.isMeshLambertMaterial?i(g,_):_.isMeshToonMaterial?(i(g,_),h(g,_)):_.isMeshPhongMaterial?(i(g,_),c(g,_)):_.isMeshStandardMaterial?(i(g,_),u(g,_),_.isMeshPhysicalMaterial&&f(g,_,v)):_.isMeshMatcapMaterial?(i(g,_),m(g,_)):_.isMeshDepthMaterial?i(g,_):_.isMeshDistanceMaterial?(i(g,_),x(g,_)):_.isMeshNormalMaterial?i(g,_):_.isLineBasicMaterial?(s(g,_),_.isLineDashedMaterial&&o(g,_)):_.isPointsMaterial?a(g,_,w,b):_.isSpriteMaterial?l(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function i(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map),_.alphaMap&&(g.alphaMap.value=_.alphaMap),_.bumpMap&&(g.bumpMap.value=_.bumpMap,g.bumpScale.value=_.bumpScale,_.side===qt&&(g.bumpScale.value*=-1)),_.displacementMap&&(g.displacementMap.value=_.displacementMap,g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap),_.normalMap&&(g.normalMap.value=_.normalMap,g.normalScale.value.copy(_.normalScale),_.side===qt&&g.normalScale.value.negate()),_.specularMap&&(g.specularMap.value=_.specularMap),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const w=e.get(_).envMap;if(w&&(g.envMap.value=w,g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap){g.lightMap.value=_.lightMap;const T=r.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=_.lightMapIntensity*T}_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity);let b;_.map?b=_.map:_.specularMap?b=_.specularMap:_.displacementMap?b=_.displacementMap:_.normalMap?b=_.normalMap:_.bumpMap?b=_.bumpMap:_.roughnessMap?b=_.roughnessMap:_.metalnessMap?b=_.metalnessMap:_.alphaMap?b=_.alphaMap:_.emissiveMap?b=_.emissiveMap:_.clearcoatMap?b=_.clearcoatMap:_.clearcoatNormalMap?b=_.clearcoatNormalMap:_.clearcoatRoughnessMap?b=_.clearcoatRoughnessMap:_.iridescenceMap?b=_.iridescenceMap:_.iridescenceThicknessMap?b=_.iridescenceThicknessMap:_.specularIntensityMap?b=_.specularIntensityMap:_.specularColorMap?b=_.specularColorMap:_.transmissionMap?b=_.transmissionMap:_.thicknessMap?b=_.thicknessMap:_.sheenColorMap?b=_.sheenColorMap:_.sheenRoughnessMap&&(b=_.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),g.uvTransform.value.copy(b.matrix));let v;_.aoMap?v=_.aoMap:_.lightMap&&(v=_.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),g.uv2Transform.value.copy(v.matrix))}function s(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity}function o(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function a(g,_,w,b){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*w,g.scale.value=b*.5,_.map&&(g.map.value=_.map),_.alphaMap&&(g.alphaMap.value=_.alphaMap),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let v;_.map?v=_.map:_.alphaMap&&(v=_.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),g.uvTransform.value.copy(v.matrix))}function l(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map),_.alphaMap&&(g.alphaMap.value=_.alphaMap),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let w;_.map?w=_.map:_.alphaMap&&(w=_.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix))}function c(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function h(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function u(g,_){g.roughness.value=_.roughness,g.metalness.value=_.metalness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap),e.get(_).envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function f(g,_,w){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),g.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===qt&&g.clearcoatNormalScale.value.negate())),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap)),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap)}function m(g,_){_.matcap&&(g.matcap.value=_.matcap)}function x(g,_){g.referencePosition.value.copy(_.referencePosition),g.nearDistance.value=_.nearDistance,g.farDistance.value=_.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Og(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(b,v){const T=v.program;n.uniformBlockBinding(b,T)}function c(b,v){let T=i[b.id];T===void 0&&(x(b),T=h(b),i[b.id]=T,b.addEventListener("dispose",_));const S=v.program;n.updateUBOMapping(b,S);const A=e.render.frame;s[b.id]!==A&&(f(b),s[b.id]=A)}function h(b){const v=u();b.__bindingPointIndex=v;const T=r.createBuffer(),S=b.__size,A=b.usage;return r.bindBuffer(35345,T),r.bufferData(35345,S,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,v,T),T}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=i[b.id],T=b.uniforms,S=b.__cache;r.bindBuffer(35345,v);for(let A=0,z=T.length;A<z;A++){const M=T[A];if(m(M,A,S)===!0){const C=M.__offset,F=Array.isArray(M.value)?M.value:[M.value];let Y=0;for(let J=0;J<F.length;J++){const N=F[J],D=g(N);typeof N=="number"?(M.__data[0]=N,r.bufferSubData(35345,C+Y,M.__data)):N.isMatrix3?(M.__data[0]=N.elements[0],M.__data[1]=N.elements[1],M.__data[2]=N.elements[2],M.__data[3]=N.elements[0],M.__data[4]=N.elements[3],M.__data[5]=N.elements[4],M.__data[6]=N.elements[5],M.__data[7]=N.elements[0],M.__data[8]=N.elements[6],M.__data[9]=N.elements[7],M.__data[10]=N.elements[8],M.__data[11]=N.elements[0]):(N.toArray(M.__data,Y),Y+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,C,M.__data)}}r.bindBuffer(35345,null)}function m(b,v,T){const S=b.value;if(T[v]===void 0){if(typeof S=="number")T[v]=S;else{const A=Array.isArray(S)?S:[S],z=[];for(let M=0;M<A.length;M++)z.push(A[M].clone());T[v]=z}return!0}else if(typeof S=="number"){if(T[v]!==S)return T[v]=S,!0}else{const A=Array.isArray(T[v])?T[v]:[T[v]],z=Array.isArray(S)?S:[S];for(let M=0;M<A.length;M++){const C=A[M];if(C.equals(z[M])===!1)return C.copy(z[M]),!0}}return!1}function x(b){const v=b.uniforms;let T=0;const S=16;let A=0;for(let z=0,M=v.length;z<M;z++){const C=v[z],F={boundary:0,storage:0},Y=Array.isArray(C.value)?C.value:[C.value];for(let J=0,N=Y.length;J<N;J++){const D=Y[J],O=g(D);F.boundary+=O.boundary,F.storage+=O.storage}if(C.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,z>0){A=T%S;const J=S-A;A!==0&&J-F.boundary<0&&(T+=S-A,C.__offset=T)}T+=F.storage}return A=T%S,A>0&&(T+=S-A),b.__size=T,b.__cache={},this}function g(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function _(b){const v=b.target;v.removeEventListener("dispose",_);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function w(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:w}}function zg(){const r=_s("canvas");return r.style.display="block",r}function Ar(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:zg(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=li,this.useLegacyLights=!0,this.toneMapping=Cn,this.toneMappingExposure=1;const g=this;let _=!1,w=0,b=0,v=null,T=-1,S=null;const A=new qe,z=new qe;let M=null,C=e.width,F=e.height,Y=1,J=null,N=null;const D=new qe(0,0,C,F),O=new qe(0,0,C,F);let j=!1;const V=new Ts;let U=!1,W=!1,K=null;const oe=new Te,H=new P,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return v===null?Y:1}let G=t;function me(L,$){for(let ee=0;ee<L.length;ee++){const q=L[ee],ne=e.getContext(q,$);if(ne!==null)return ne}return null}try{const L={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${un}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Se,!1),G===null){const $=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&$.shift(),G=me($,L),G===null)throw me($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ge,pe,le,xe,De,Ee,He,yt,Ct,Ce,tt,$e,Ze,Je,Ke,R,E,Z,ue,ce,_e,be,k,X;function se(){ge=new Yp(G),pe=new Gp(G,ge,r),ge.init(pe),be=new Pg(G,ge,pe),le=new Cg(G,ge,pe),xe=new Jp,De=new mg,Ee=new Lg(G,ge,le,De,pe,be,xe),He=new jp(g),yt=new $p(g),Ct=new Ud(G,pe),k=new Vp(G,ge,Ct,pe),Ce=new Zp(G,Ct,xe,k),tt=new nm(G,Ce,Ct,xe),ue=new tm(G,pe,Ee),R=new Wp(De),$e=new pg(g,He,yt,ge,pe,k,R),Ze=new kg(g,De),Je=new _g,Ke=new Mg(ge,pe),Z=new Up(g,He,yt,le,tt,h,o),E=new Ag(g,tt,pe),X=new Og(G,xe,pe,le),ce=new Hp(G,ge,xe,pe),_e=new Kp(G,ge,xe,pe),xe.programs=$e.programs,g.capabilities=pe,g.extensions=ge,g.properties=De,g.renderLists=Je,g.shadowMap=E,g.state=le,g.info=xe}se();const he=new Fg(g,G);this.xr=he,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const L=ge.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ge.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(L){L!==void 0&&(Y=L,this.setSize(C,F,!1))},this.getSize=function(L){return L.set(C,F)},this.setSize=function(L,$,ee=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=L,F=$,e.width=Math.floor(L*Y),e.height=Math.floor($*Y),ee===!0&&(e.style.width=L+"px",e.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(C*Y,F*Y).floor()},this.setDrawingBufferSize=function(L,$,ee){C=L,F=$,Y=ee,e.width=Math.floor(L*ee),e.height=Math.floor($*ee),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(A)},this.getViewport=function(L){return L.copy(D)},this.setViewport=function(L,$,ee,q){L.isVector4?D.set(L.x,L.y,L.z,L.w):D.set(L,$,ee,q),le.viewport(A.copy(D).multiplyScalar(Y).floor())},this.getScissor=function(L){return L.copy(O)},this.setScissor=function(L,$,ee,q){L.isVector4?O.set(L.x,L.y,L.z,L.w):O.set(L,$,ee,q),le.scissor(z.copy(O).multiplyScalar(Y).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(L){le.setScissorTest(j=L)},this.setOpaqueSort=function(L){J=L},this.setTransparentSort=function(L){N=L},this.getClearColor=function(L){return L.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(L=!0,$=!0,ee=!0){let q=0;L&&(q|=16384),$&&(q|=256),ee&&(q|=1024),G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Se,!1),Je.dispose(),Ke.dispose(),De.dispose(),He.dispose(),yt.dispose(),tt.dispose(),k.dispose(),X.dispose(),$e.dispose(),he.dispose(),he.removeEventListener("sessionstart",ae),he.removeEventListener("sessionend",ye),K&&(K.dispose(),K=null),ve.stop()};function we(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const L=xe.autoReset,$=E.enabled,ee=E.autoUpdate,q=E.needsUpdate,ne=E.type;se(),xe.autoReset=L,E.enabled=$,E.autoUpdate=ee,E.needsUpdate=q,E.type=ne}function Se(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ge(L){const $=L.target;$.removeEventListener("dispose",Ge),ke($)}function ke(L){Qe(L),De.remove(L)}function Qe(L){const $=De.get(L).programs;$!==void 0&&($.forEach(function(ee){$e.releaseProgram(ee)}),L.isShaderMaterial&&$e.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,ee,q,ne,Le){$===null&&($=ie);const Ie=ne.isMesh&&ne.matrixWorld.determinant()<0,Oe=js(L,$,ee,q,ne);le.setMaterial(q,Ie);let Ue=ee.index,Xe=1;q.wireframe===!0&&(Ue=Ce.getWireframeAttribute(ee),Xe=2);const ze=ee.drawRange,We=ee.attributes.position;let ct=ze.start*Xe,nt=(ze.start+ze.count)*Xe;Le!==null&&(ct=Math.max(ct,Le.start*Xe),nt=Math.min(nt,(Le.start+Le.count)*Xe)),Ue!==null?(ct=Math.max(ct,0),nt=Math.min(nt,Ue.count)):We!=null&&(ct=Math.max(ct,0),nt=Math.min(nt,We.count));const _n=nt-ct;if(_n<0||_n===1/0)return;k.setup(ne,q,Oe,ee,Ue);let Un,gt=ce;if(Ue!==null&&(Un=Ct.get(Ue),gt=_e,gt.setIndex(Un)),ne.isMesh)q.wireframe===!0?(le.setLineWidth(q.wireframeLinewidth*re()),gt.setMode(1)):gt.setMode(4);else if(ne.isLine){let je=q.linewidth;je===void 0&&(je=1),le.setLineWidth(je*re()),ne.isLineSegments?gt.setMode(1):ne.isLineLoop?gt.setMode(2):gt.setMode(3)}else ne.isPoints?gt.setMode(0):ne.isSprite&&gt.setMode(4);if(ne.isInstancedMesh)gt.renderInstances(ct,_n,ne.count);else if(ee.isInstancedBufferGeometry){const je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Xs=Math.min(ee.instanceCount,je);gt.renderInstances(ct,_n,Xs)}else gt.render(ct,_n)},this.compile=function(L,$){function ee(q,ne,Le){q.transparent===!0&&q.side===An&&q.forceSinglePass===!1?(q.side=qt,q.needsUpdate=!0,Xt(q,ne,Le),q.side=Gn,q.needsUpdate=!0,Xt(q,ne,Le),q.side=An):Xt(q,ne,Le)}f=Ke.get(L),f.init(),x.push(f),L.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),f.setupLights(g.useLegacyLights),L.traverse(function(q){const ne=q.material;if(ne)if(Array.isArray(ne))for(let Le=0;Le<ne.length;Le++){const Ie=ne[Le];ee(Ie,L,q)}else ee(ne,L,q)}),x.pop(),f=null};let B=null;function te(L){B&&B(L)}function ae(){ve.stop()}function ye(){ve.start()}const ve=new Vl;ve.setAnimationLoop(te),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(L){B=L,he.setAnimationLoop(L),L===null?ve.stop():ve.start()},he.addEventListener("sessionstart",ae),he.addEventListener("sessionend",ye),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera($),$=he.getCamera()),L.isScene===!0&&L.onBeforeRender(g,L,$,v),f=Ke.get(L,x.length),f.init(),x.push(f),oe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),V.setFromProjectionMatrix(oe),W=this.localClippingEnabled,U=R.init(this.clippingPlanes,W),u=Je.get(L,m.length),u.init(),m.push(u),ot(L,$,0,g.sortObjects),u.finish(),g.sortObjects===!0&&u.sort(J,N),U===!0&&R.beginShadows();const ee=f.state.shadowsArray;if(E.render(ee,L,$),U===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(u,L),f.setupLights(g.useLegacyLights),$.isArrayCamera){const q=$.cameras;for(let ne=0,Le=q.length;ne<Le;ne++){const Ie=q[ne];Mt(u,L,Ie,Ie.viewport)}}else Mt(u,L,$);v!==null&&(Ee.updateMultisampleRenderTarget(v),Ee.updateRenderTargetMipmap(v)),L.isScene===!0&&L.onAfterRender(g,L,$),k.resetDefaultState(),T=-1,S=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function ot(L,$,ee,q){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)ee=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)f.pushLight(L),L.castShadow&&f.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||V.intersectsSprite(L)){q&&H.setFromMatrixPosition(L.matrixWorld).applyMatrix4(oe);const Ie=tt.update(L),Oe=L.material;Oe.visible&&u.push(L,Ie,Oe,ee,H.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==xe.render.frame&&(L.skeleton.update(),L.skeleton.frame=xe.render.frame),!L.frustumCulled||V.intersectsObject(L))){q&&H.setFromMatrixPosition(L.matrixWorld).applyMatrix4(oe);const Ie=tt.update(L),Oe=L.material;if(Array.isArray(Oe)){const Ue=Ie.groups;for(let Xe=0,ze=Ue.length;Xe<ze;Xe++){const We=Ue[Xe],ct=Oe[We.materialIndex];ct&&ct.visible&&u.push(L,Ie,ct,ee,H.z,We)}}else Oe.visible&&u.push(L,Ie,Oe,ee,H.z,null)}}const Le=L.children;for(let Ie=0,Oe=Le.length;Ie<Oe;Ie++)ot(Le[Ie],$,ee,q)}function Mt(L,$,ee,q){const ne=L.opaque,Le=L.transmissive,Ie=L.transparent;f.setupLightsView(ee),U===!0&&R.setGlobalState(g.clippingPlanes,ee),Le.length>0&&vt(ne,$,ee),q&&le.viewport(A.copy(q)),ne.length>0&&ln(ne,$,ee),Le.length>0&&ln(Le,$,ee),Ie.length>0&&ln(Ie,$,ee),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function vt(L,$,ee){const q=pe.isWebGL2;K===null&&(K=new $n(1024,1024,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?hs:ri,minFilter:us,samples:q&&s===!0?4:0}));const ne=g.getRenderTarget();g.setRenderTarget(K),g.clear();const Le=g.toneMapping;g.toneMapping=Cn,ln(L,$,ee),g.toneMapping=Le,Ee.updateMultisampleRenderTarget(K),Ee.updateRenderTargetMipmap(K),g.setRenderTarget(ne)}function ln(L,$,ee){const q=$.isScene===!0?$.overrideMaterial:null;for(let ne=0,Le=L.length;ne<Le;ne++){const Ie=L[ne],Oe=Ie.object,Ue=Ie.geometry,Xe=q===null?Ie.material:q,ze=Ie.group;Oe.layers.test(ee.layers)&&dt(Oe,$,ee,Ue,Xe,ze)}}function dt(L,$,ee,q,ne,Le){L.onBeforeRender(g,$,ee,q,ne,Le),L.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ne.onBeforeRender(g,$,ee,q,L,Le),ne.transparent===!0&&ne.side===An&&ne.forceSinglePass===!1?(ne.side=qt,ne.needsUpdate=!0,g.renderBufferDirect(ee,$,q,ne,L,Le),ne.side=Gn,ne.needsUpdate=!0,g.renderBufferDirect(ee,$,q,ne,L,Le),ne.side=An):g.renderBufferDirect(ee,$,q,ne,L,Le),L.onAfterRender(g,$,ee,q,ne,Le)}function Xt(L,$,ee){$.isScene!==!0&&($=ie);const q=De.get(L),ne=f.state.lights,Le=f.state.shadowsArray,Ie=ne.state.version,Oe=$e.getParameters(L,ne.state,Le,$,ee),Ue=$e.getProgramCacheKey(Oe);let Xe=q.programs;q.environment=L.isMeshStandardMaterial?$.environment:null,q.fog=$.fog,q.envMap=(L.isMeshStandardMaterial?yt:He).get(L.envMap||q.environment),Xe===void 0&&(L.addEventListener("dispose",Ge),Xe=new Map,q.programs=Xe);let ze=Xe.get(Ue);if(ze!==void 0){if(q.currentProgram===ze&&q.lightsStateVersion===Ie)return cn(L,Oe),ze}else Oe.uniforms=$e.getUniforms(L),L.onBuild(ee,Oe,g),L.onBeforeCompile(Oe,g),ze=$e.acquireProgram(Oe,Ue),Xe.set(Ue,ze),q.uniforms=Oe.uniforms;const We=q.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(We.clippingPlanes=R.uniform),cn(L,Oe),q.needsLights=va(L),q.lightsStateVersion=Ie,q.needsLights&&(We.ambientLightColor.value=ne.state.ambient,We.lightProbe.value=ne.state.probe,We.directionalLights.value=ne.state.directional,We.directionalLightShadows.value=ne.state.directionalShadow,We.spotLights.value=ne.state.spot,We.spotLightShadows.value=ne.state.spotShadow,We.rectAreaLights.value=ne.state.rectArea,We.ltc_1.value=ne.state.rectAreaLTC1,We.ltc_2.value=ne.state.rectAreaLTC2,We.pointLights.value=ne.state.point,We.pointLightShadows.value=ne.state.pointShadow,We.hemisphereLights.value=ne.state.hemi,We.directionalShadowMap.value=ne.state.directionalShadowMap,We.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,We.spotShadowMap.value=ne.state.spotShadowMap,We.spotLightMatrix.value=ne.state.spotLightMatrix,We.spotLightMap.value=ne.state.spotLightMap,We.pointShadowMap.value=ne.state.pointShadowMap,We.pointShadowMatrix.value=ne.state.pointShadowMatrix);const ct=ze.getUniforms(),nt=Er.seqWithValue(ct.seq,We);return q.currentProgram=ze,q.uniformsList=nt,ze}function cn(L,$){const ee=De.get(L);ee.outputEncoding=$.outputEncoding,ee.instancing=$.instancing,ee.skinning=$.skinning,ee.morphTargets=$.morphTargets,ee.morphNormals=$.morphNormals,ee.morphColors=$.morphColors,ee.morphTargetsCount=$.morphTargetsCount,ee.numClippingPlanes=$.numClippingPlanes,ee.numIntersection=$.numClipIntersection,ee.vertexAlphas=$.vertexAlphas,ee.vertexTangents=$.vertexTangents,ee.toneMapping=$.toneMapping}function js(L,$,ee,q,ne){$.isScene!==!0&&($=ie),Ee.resetTextureUnits();const Le=$.fog,Ie=q.isMeshStandardMaterial?$.environment:null,Oe=v===null?g.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:li,Ue=(q.isMeshStandardMaterial?yt:He).get(q.envMap||Ie),Xe=q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ze=!!q.normalMap&&!!ee.attributes.tangent,We=!!ee.morphAttributes.position,ct=!!ee.morphAttributes.normal,nt=!!ee.morphAttributes.color,_n=q.toneMapped?g.toneMapping:Cn,Un=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,gt=Un!==void 0?Un.length:0,je=De.get(q),Xs=f.state.lights;if(U===!0&&(W===!0||L!==S)){const Vt=L===S&&q.id===T;R.setState(q,L,Vt)}let St=!1;q.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Xs.state.version||je.outputEncoding!==Oe||ne.isInstancedMesh&&je.instancing===!1||!ne.isInstancedMesh&&je.instancing===!0||ne.isSkinnedMesh&&je.skinning===!1||!ne.isSkinnedMesh&&je.skinning===!0||je.envMap!==Ue||q.fog===!0&&je.fog!==Le||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==R.numPlanes||je.numIntersection!==R.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==ze||je.morphTargets!==We||je.morphNormals!==ct||je.morphColors!==nt||je.toneMapping!==_n||pe.isWebGL2===!0&&je.morphTargetsCount!==gt)&&(St=!0):(St=!0,je.__version=q.version);let Vn=je.currentProgram;St===!0&&(Vn=Xt(q,$,ne));let qs=!1,wi=!1,ns=!1;const Rt=Vn.getUniforms(),Hn=je.uniforms;if(le.useProgram(Vn.program)&&(qs=!0,wi=!0,ns=!0),q.id!==T&&(T=q.id,wi=!0),qs||S!==L){if(Rt.setValue(G,"projectionMatrix",L.projectionMatrix),pe.logarithmicDepthBuffer&&Rt.setValue(G,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),S!==L&&(S=L,wi=!0,ns=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const Vt=Rt.map.cameraPosition;Vt!==void 0&&Vt.setValue(G,H.setFromMatrixPosition(L.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Rt.setValue(G,"isOrthographic",L.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||ne.isSkinnedMesh)&&Rt.setValue(G,"viewMatrix",L.matrixWorldInverse)}if(ne.isSkinnedMesh){Rt.setOptional(G,ne,"bindMatrix"),Rt.setOptional(G,ne,"bindMatrixInverse");const Vt=ne.skeleton;Vt&&(pe.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),Rt.setValue(G,"boneTexture",Vt.boneTexture,Ee),Rt.setValue(G,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $s=ee.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0&&pe.isWebGL2===!0)&&ue.update(ne,ee,Vn),(wi||je.receiveShadow!==ne.receiveShadow)&&(je.receiveShadow=ne.receiveShadow,Rt.setValue(G,"receiveShadow",ne.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Hn.envMap.value=Ue,Hn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),wi&&(Rt.setValue(G,"toneMappingExposure",g.toneMappingExposure),je.needsLights&&ya(Hn,ns),Le&&q.fog===!0&&Ze.refreshFogUniforms(Hn,Le),Ze.refreshMaterialUniforms(Hn,q,Y,F,K),Er.upload(G,je.uniformsList,Hn,Ee)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Er.upload(G,je.uniformsList,Hn,Ee),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Rt.setValue(G,"center",ne.center),Rt.setValue(G,"modelViewMatrix",ne.modelViewMatrix),Rt.setValue(G,"normalMatrix",ne.normalMatrix),Rt.setValue(G,"modelMatrix",ne.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Vt=q.uniformsGroups;for(let Ys=0,wa=Vt.length;Ys<wa;Ys++)if(pe.isWebGL2){const $r=Vt[Ys];X.update($r,Vn),X.bind($r,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function ya(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function va(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(L,$,ee){De.get(L.texture).__webglTexture=$,De.get(L.depthTexture).__webglTexture=ee;const q=De.get(L);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=ee===void 0,q.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,$){const ee=De.get(L);ee.__webglFramebuffer=$,ee.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,ee=0){v=L,w=$,b=ee;let q=!0,ne=null,Le=!1,Ie=!1;if(L){const Ue=De.get(L);Ue.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),q=!1):Ue.__webglFramebuffer===void 0?Ee.setupRenderTarget(L):Ue.__hasExternalTextures&&Ee.rebindTextures(L,De.get(L.texture).__webglTexture,De.get(L.depthTexture).__webglTexture);const Xe=L.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const ze=De.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(ne=ze[$],Le=!0):pe.isWebGL2&&L.samples>0&&Ee.useMultisampledRTT(L)===!1?ne=De.get(L).__webglMultisampledFramebuffer:ne=ze,A.copy(L.viewport),z.copy(L.scissor),M=L.scissorTest}else A.copy(D).multiplyScalar(Y).floor(),z.copy(O).multiplyScalar(Y).floor(),M=j;if(le.bindFramebuffer(36160,ne)&&pe.drawBuffers&&q&&le.drawBuffers(L,ne),le.viewport(A),le.scissor(z),le.setScissorTest(M),Le){const Ue=De.get(L.texture);G.framebufferTexture2D(36160,36064,34069+$,Ue.__webglTexture,ee)}else if(Ie){const Ue=De.get(L.texture),Xe=$||0;G.framebufferTextureLayer(36160,36064,Ue.__webglTexture,ee||0,Xe)}T=-1},this.readRenderTargetPixels=function(L,$,ee,q,ne,Le,Ie){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=De.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){le.bindFramebuffer(36160,Oe);try{const Ue=L.texture,Xe=Ue.format,ze=Ue.type;if(Xe!==sn&&be.convert(Xe)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=ze===hs&&(ge.has("EXT_color_buffer_half_float")||pe.isWebGL2&&ge.has("EXT_color_buffer_float"));if(ze!==ri&&be.convert(ze)!==G.getParameter(35738)&&!(ze===jn&&(pe.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-q&&ee>=0&&ee<=L.height-ne&&G.readPixels($,ee,q,ne,be.convert(Xe),be.convert(ze),Le)}finally{const Ue=v!==null?De.get(v).__webglFramebuffer:null;le.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(L,$,ee=0){const q=Math.pow(2,-ee),ne=Math.floor($.image.width*q),Le=Math.floor($.image.height*q);Ee.setTexture2D($,0),G.copyTexSubImage2D(3553,ee,0,0,L.x,L.y,ne,Le),le.unbindTexture()},this.copyTextureToTexture=function(L,$,ee,q=0){const ne=$.image.width,Le=$.image.height,Ie=be.convert(ee.format),Oe=be.convert(ee.type);Ee.setTexture2D(ee,0),G.pixelStorei(37440,ee.flipY),G.pixelStorei(37441,ee.premultiplyAlpha),G.pixelStorei(3317,ee.unpackAlignment),$.isDataTexture?G.texSubImage2D(3553,q,L.x,L.y,ne,Le,Ie,Oe,$.image.data):$.isCompressedTexture?G.compressedTexSubImage2D(3553,q,L.x,L.y,$.mipmaps[0].width,$.mipmaps[0].height,Ie,$.mipmaps[0].data):G.texSubImage2D(3553,q,L.x,L.y,Ie,Oe,$.image),q===0&&ee.generateMipmaps&&G.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(L,$,ee,q,ne=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=L.max.x-L.min.x+1,Ie=L.max.y-L.min.y+1,Oe=L.max.z-L.min.z+1,Ue=be.convert(q.format),Xe=be.convert(q.type);let ze;if(q.isData3DTexture)Ee.setTexture3D(q,0),ze=32879;else if(q.isDataArrayTexture)Ee.setTexture2DArray(q,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,q.flipY),G.pixelStorei(37441,q.premultiplyAlpha),G.pixelStorei(3317,q.unpackAlignment);const We=G.getParameter(3314),ct=G.getParameter(32878),nt=G.getParameter(3316),_n=G.getParameter(3315),Un=G.getParameter(32877),gt=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;G.pixelStorei(3314,gt.width),G.pixelStorei(32878,gt.height),G.pixelStorei(3316,L.min.x),G.pixelStorei(3315,L.min.y),G.pixelStorei(32877,L.min.z),ee.isDataTexture||ee.isData3DTexture?G.texSubImage3D(ze,ne,$.x,$.y,$.z,Le,Ie,Oe,Ue,Xe,gt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(ze,ne,$.x,$.y,$.z,Le,Ie,Oe,Ue,gt.data)):G.texSubImage3D(ze,ne,$.x,$.y,$.z,Le,Ie,Oe,Ue,Xe,gt),G.pixelStorei(3314,We),G.pixelStorei(32878,ct),G.pixelStorei(3316,nt),G.pixelStorei(3315,_n),G.pixelStorei(32877,Un),ne===0&&q.generateMipmaps&&G.generateMipmap(ze),le.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Ee.setTextureCube(L,0):L.isData3DTexture?Ee.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ee.setTexture2DArray(L,0):Ee.setTexture2D(L,0),le.unbindTexture()},this.resetState=function(){w=0,b=0,v=null,le.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Ar.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class Ng extends Ar{}Ng.prototype.isWebGL1Renderer=!0;class Bg extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const pc=new P,mc=new qe,gc=new qe,Ug=new P,_c=new Te;class Vg extends de{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Te,this.bindMatrixInverse=new Te}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;mc.fromBufferAttribute(i.attributes.skinIndex,e),gc.fromBufferAttribute(i.attributes.skinWeight,e),pc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=gc.getComponent(s);if(o!==0){const a=mc.getComponent(s);_c.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ug.copy(pc).applyMatrix4(_c),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vo extends it{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hg extends Dt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Lt,h=Lt,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xc=new Te,Gg=new Te;class Ho{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Te)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Te;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Gg;xc.multiplyMatrices(a,t[s]),xc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ho(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=xl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Hg(t,e,e,sn,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Vo),this.bones.push(o),this.boneInverses.push(new Te().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Qn extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yc=new P,vc=new P,wc=new Te,Go=new lr,Cr=new Oi;class Mn extends it{constructor(e=new ht,t=new Qn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)yc.fromBufferAttribute(t,i-1),vc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yc.distanceTo(vc);e.setAttribute("lineDistance",new Fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=s,e.ray.intersectsSphere(Cr)===!1)return;wc.copy(i).invert(),Go.copy(e.ray).applyMatrix4(wc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,h=new P,u=new P,f=new P,m=this.isLineSegments?2:1,x=n.index,_=n.attributes.position;if(x!==null){const w=Math.max(0,o.start),b=Math.min(x.count,o.start+o.count);for(let v=w,T=b-1;v<T;v+=m){const S=x.getX(v),A=x.getX(v+1);if(c.fromBufferAttribute(_,S),h.fromBufferAttribute(_,A),Go.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const w=Math.max(0,o.start),b=Math.min(_.count,o.start+o.count);for(let v=w,T=b-1;v<T;v+=m){if(c.fromBufferAttribute(_,v),h.fromBufferAttribute(_,v+1),Go.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const bc=new P,Mc=new P;class Lr extends Mn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)bc.fromBufferAttribute(t,i),Mc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bc.distanceTo(Mc);e.setAttribute("lineDistance",new Fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class As extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sc=new Te,Wo=new lr,Pr=new Oi,Dr=new P;class jo extends it{constructor(e=new ht,t=new As){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=s,e.ray.intersectsSphere(Pr)===!1)return;Sc.copy(i).invert(),Wo.copy(e.ray).applyMatrix4(Sc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=f,g=m;x<g;x++){const _=c.getX(x);Dr.fromBufferAttribute(u,_),Tc(Dr,_,l,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m;x<g;x++)Dr.fromBufferAttribute(u,x),Tc(Dr,x,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tc(r,e,t,n,i,s,o){const a=Wo.distanceSqToPoint(r);if(a<t){const l=new P;Wo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Wg{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,m=(o-h)/f;return(i+m)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new Pe:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],s=[],o=[],a=new P,l=new Te;for(let m=0;m<=e;m++){const x=m/e;i[m]=this.getTangentAt(x,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Pt(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(i[m],s[m])}if(t===!0){let m=Math.acos(Pt(s[0].dot(s[e]),-1,1));m/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(i[x],m*x)),o[x].crossVectors(i[x],s[x])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ot extends ht{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],m=[];let x=0;const g=[],_=n/2;let w=0;b(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(f,3)),this.setAttribute("uv",new Fe(m,2));function b(){const T=new P,S=new P;let A=0;const z=(t-e)/n;for(let M=0;M<=s;M++){const C=[],F=M/s,Y=F*(t-e)+e;for(let J=0;J<=i;J++){const N=J/i,D=N*l+a,O=Math.sin(D),j=Math.cos(D);S.x=Y*O,S.y=-F*n+_,S.z=Y*j,u.push(S.x,S.y,S.z),T.set(O,z,j).normalize(),f.push(T.x,T.y,T.z),m.push(N,1-F),C.push(x++)}g.push(C)}for(let M=0;M<i;M++)for(let C=0;C<s;C++){const F=g[C][M],Y=g[C+1][M],J=g[C+1][M+1],N=g[C][M+1];h.push(F,Y,N),h.push(Y,J,N),A+=6}c.addGroup(w,A,0),w+=A}function v(T){const S=x,A=new Pe,z=new P;let M=0;const C=T===!0?e:t,F=T===!0?1:-1;for(let J=1;J<=i;J++)u.push(0,_*F,0),f.push(0,F,0),m.push(.5,.5),x++;const Y=x;for(let J=0;J<=i;J++){const D=J/i*l+a,O=Math.cos(D),j=Math.sin(D);z.x=C*j,z.y=_*F,z.z=C*O,u.push(z.x,z.y,z.z),f.push(0,F,0),A.x=O*.5+.5,A.y=j*.5*F+.5,m.push(A.x,A.y),x++}for(let J=0;J<i;J++){const N=S+J,D=Y+J;T===!0?h.push(D,D+1,N):h.push(D+1,D,N),M+=3}c.addGroup(w,M,T===!0?1:2),w+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xo extends ht{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Fe(s,3)),this.setAttribute("normal",new Fe(s.slice(),3)),this.setAttribute("uv",new Fe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const v=new P,T=new P,S=new P;for(let A=0;A<t.length;A+=3)m(t[A+0],v),m(t[A+1],T),m(t[A+2],S),l(v,T,S,b)}function l(b,v,T,S){const A=S+1,z=[];for(let M=0;M<=A;M++){z[M]=[];const C=b.clone().lerp(T,M/A),F=v.clone().lerp(T,M/A),Y=A-M;for(let J=0;J<=Y;J++)J===0&&M===A?z[M][J]=C:z[M][J]=C.clone().lerp(F,J/Y)}for(let M=0;M<A;M++)for(let C=0;C<2*(A-M)-1;C++){const F=Math.floor(C/2);C%2===0?(f(z[M][F+1]),f(z[M+1][F]),f(z[M][F])):(f(z[M][F+1]),f(z[M+1][F+1]),f(z[M+1][F]))}}function c(b){const v=new P;for(let T=0;T<s.length;T+=3)v.x=s[T+0],v.y=s[T+1],v.z=s[T+2],v.normalize().multiplyScalar(b),s[T+0]=v.x,s[T+1]=v.y,s[T+2]=v.z}function h(){const b=new P;for(let v=0;v<s.length;v+=3){b.x=s[v+0],b.y=s[v+1],b.z=s[v+2];const T=_(b)/2/Math.PI+.5,S=w(b)/Math.PI+.5;o.push(T,1-S)}x(),u()}function u(){for(let b=0;b<o.length;b+=6){const v=o[b+0],T=o[b+2],S=o[b+4],A=Math.max(v,T,S),z=Math.min(v,T,S);A>.9&&z<.1&&(v<.2&&(o[b+0]+=1),T<.2&&(o[b+2]+=1),S<.2&&(o[b+4]+=1))}}function f(b){s.push(b.x,b.y,b.z)}function m(b,v){const T=b*3;v.x=e[T+0],v.y=e[T+1],v.z=e[T+2]}function x(){const b=new P,v=new P,T=new P,S=new P,A=new Pe,z=new Pe,M=new Pe;for(let C=0,F=0;C<s.length;C+=9,F+=6){b.set(s[C+0],s[C+1],s[C+2]),v.set(s[C+3],s[C+4],s[C+5]),T.set(s[C+6],s[C+7],s[C+8]),A.set(o[F+0],o[F+1]),z.set(o[F+2],o[F+3]),M.set(o[F+4],o[F+5]),S.copy(b).add(v).add(T).divideScalar(3);const Y=_(S);g(A,F+0,b,Y),g(z,F+2,v,Y),g(M,F+4,T,Y)}}function g(b,v,T,S){S<0&&b.x===1&&(o[v]=b.x-1),T.x===0&&T.z===0&&(o[v]=S/2/Math.PI+.5)}function _(b){return Math.atan2(b.z,-b.x)}function w(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.vertices,e.indices,e.radius,e.details)}}class Yi extends Xo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yi(e.radius,e.detail)}}class ei extends ht{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,f=new P,m=[],x=[],g=[],_=[];for(let w=0;w<=n;w++){const b=[],v=w/n;let T=0;w==0&&o==0?T=.5/t:w==n&&l==Math.PI&&(T=-.5/t);for(let S=0;S<=t;S++){const A=S/t;u.x=-e*Math.cos(i+A*s)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+A*s)*Math.sin(o+v*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),_.push(A+T,1-v),b.push(c++)}h.push(b)}for(let w=0;w<n;w++)for(let b=0;b<t;b++){const v=h[w][b+1],T=h[w][b],S=h[w+1][b],A=h[w+1][b+1];(w!==0||o>0)&&m.push(v,T,A),(w!==n-1||l<Math.PI)&&m.push(T,S,A)}this.setIndex(m),this.setAttribute("position",new Fe(x,3)),this.setAttribute("normal",new Fe(g,3)),this.setAttribute("uv",new Fe(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gi extends ht{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let m=0;m<=n;m++)for(let x=0;x<=i;x++){const g=x/i*s,_=m/n*Math.PI*2;u.x=(e+t*Math.cos(_))*Math.cos(g),u.y=(e+t*Math.cos(_))*Math.sin(g),u.z=t*Math.sin(_),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let x=1;x<=i;x++){const g=(i+1)*m+x-1,_=(i+1)*(m-1)+x-1,w=(i+1)*(m-1)+x,b=(i+1)*m+x;o.push(g,_,b),o.push(_,w,b)}this.setIndex(o),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(l,3)),this.setAttribute("uv",new Fe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zn extends fn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qo extends fn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class jg extends fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ti(r,e,t){return Ec(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Rr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ec(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Xg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ac(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Cc(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ir{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qg extends Ir{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hl,endingEnd:hl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case dl:s=e,a=2*t-n;break;case fl:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dl:o=e,l=2*n-t;break;case fl:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(n-t)/(i-t),g=x*x,_=g*x,w=-f*_+2*f*g-f*x,b=(1+f)*_+(-1.5-2*f)*g+(-.5+f)*x+1,v=(-1-m)*_+(1.5+m)*g+.5*x,T=m*_-m*g;for(let S=0;S!==a;++S)s[S]=w*o[h+S]+b*o[c+S]+v*o[l+S]+T*o[u+S];return s}}class $g extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}}class Yg extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rr(t,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rr(e.times,Array),values:Rr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $g(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case nr:t=this.InterpolantFactoryMethodLinear;break;case ao:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=ti(n,s,o),this.values=ti(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Ec(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ti(this.times),t=ti(this.values),n=this.getValueSize(),i=this.getInterpolation()===ao,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,f=u-n,m=u+n;for(let x=0;x!==n;++x){const g=t[u+x];if(g!==t[f+x]||g!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[u+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ti(e,0,o),this.values=ti(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ti(this.times,0),t=ti(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.TimeBufferType=Float32Array,Sn.prototype.ValueBufferType=Float32Array,Sn.prototype.DefaultInterpolation=nr;class Zi extends Sn{}Zi.prototype.ValueTypeName="bool",Zi.prototype.ValueBufferType=Array,Zi.prototype.DefaultInterpolation=tr,Zi.prototype.InterpolantFactoryMethodLinear=void 0,Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class Lc extends Sn{}Lc.prototype.ValueTypeName="color";class Cs extends Sn{}Cs.prototype.ValueTypeName="number";class Zg extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)pt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ki extends Sn{InterpolantFactoryMethodLinear(e){return new Zg(this.times,this.values,this.getValueSize(),e)}}Ki.prototype.ValueTypeName="quaternion",Ki.prototype.DefaultInterpolation=nr,Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Ji extends Sn{}Ji.prototype.ValueTypeName="string",Ji.prototype.ValueBufferType=Array,Ji.prototype.DefaultInterpolation=tr,Ji.prototype.InterpolantFactoryMethodLinear=void 0,Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Sn{}Ls.prototype.ValueTypeName="vector";class Kg{constructor(e,t=-1,n,i=Kh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Qg(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Sn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=Xg(l);l=Ac(l,1,h),c=Ac(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Cs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,m,x,g){if(m.length!==0){const _=[],w=[];Cc(m,_,w,x),_.length!==0&&g.push(new u(f,_,w))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let g=0;g<f[x].morphTargets.length;g++)m[f[x].morphTargets[g]]=-1;for(const g in m){const _=[],w=[];for(let b=0;b!==f[x].morphTargets.length;++b){const v=f[x];_.push(v.time),w.push(v.morphTarget===g?1:0)}i.push(new Cs(".morphTargetInfluence["+g+"]",_,w))}l=m.length*o}else{const m=".bones["+t[u].name+"]";n(Ls,m+".position",f,"pos",i),n(Ki,m+".quaternion",f,"rot",i),n(Ls,m+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cs;case"vector":case"vector2":case"vector3":case"vector4":return Ls;case"color":return Lc;case"quaternion":return Ki;case"bool":case"boolean":return Zi;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Qg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jg(r.type);if(r.times===void 0){const t=[],n=[];Cc(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Fr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class e0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],x=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}}const t0=new e0;class Ps{constructor(e){this.manager=e!==void 0?e:t0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Nn={};class n0 extends Error{constructor(e,t){super(e),this.response=t}}class Pc extends Ps{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:n,onError:i});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Nn[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,x=m!==0;let g=0;const _=new ReadableStream({start(w){b();function b(){u.read().then(({done:v,value:T})=>{if(v)w.close();else{g+=T.byteLength;const S=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:m});for(let A=0,z=h.length;A<z;A++){const M=h[A];M.onProgress&&M.onProgress(S)}w.enqueue(T),b()}})}}});return new Response(_)}else throw new n0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(x=>m.decode(x))}}}).then(c=>{Fr.add(e,c);const h=Nn[e];delete Nn[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=Nn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Nn[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class i0 extends Ps{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=_s("img");function l(){h(),Fr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class s0 extends Ps{constructor(e){super(e)}load(e,t,n,i){const s=new Dt,o=new i0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class kr extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $o=new Te,Dc=new P,Rc=new P;class Yo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dc),Rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rc),t.updateMatrixWorld(),$o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class r0 extends Yo{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ps*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class o0 extends kr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new r0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ic=new Te,Ds=new P,Zo=new P;class a0 extends Yo{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ds.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ds),Zo.copy(n.position),Zo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zo),n.updateMatrixWorld(),i.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic)}}class Fc extends kr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new a0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class l0 extends Yo{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kc extends kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new l0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Oc extends kr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class c0{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class u0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zc(){return(typeof performance>"u"?Date:performance).now()}const Ko="\\[\\]\\.:\\/",h0=new RegExp("["+Ko+"]","g"),Jo="[^"+Ko+"]",d0="[^"+Ko.replace("\\.","")+"]",f0=/((?:WC+[\/:])*)/.source.replace("WC",Jo),p0=/(WCOD+)?/.source.replace("WCOD",d0),m0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jo),g0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jo),_0=new RegExp("^"+f0+p0+m0+g0+"$"),x0=["material","materials","bones","map"];class y0{constructor(e,t,n){const i=n||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ye{constructor(e,t,n){this.path=t,this.parsedPath=n||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,n):new Ye(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h0,"")}static parseTrackName(e){const t=_0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);x0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=y0,Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray],Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Nc{constructor(e,t,n=0,i=1/0){this.ray=new lr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Qo(e,this,n,t),n.sort(Bc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Qo(e[i],this,n,t);return n.sort(Bc),n}}function Bc(r,e){return r.distance-e.distance}function Qo(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Qo(i[s],e,t,!0)}}class Uc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class v0 extends Lr{constructor(e=10,t=10,n=4473924,i=8947848){n=new Re(n),i=new Re(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,m=0,x=-a;f<=t;f++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const g=f===s?n:i;g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3}const h=new ht;h.setAttribute("position",new Fe(l,3)),h.setAttribute("color",new Fe(c,3));const u=new Qn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class w0 extends Lr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ht;i.setAttribute("position",new Fe(t,3)),i.setAttribute("color",new Fe(n,3));const s=new Qn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Re,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:un}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=un);const Vc={type:"change"},ea={type:"start"},Hc={type:"end"};class b0 extends ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tn.ROTATE,MIDDLE:tn.DOLLY,RIGHT:tn.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",Ke),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ke),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Vc),n.update(),s=i.NONE},this.update=function(){const k=new P,X=new pt().setFromUnitVectors(e.up,new P(0,1,0)),se=X.clone().invert(),he=new P,we=new pt,Me=2*Math.PI;return function(){const Ge=n.object.position;k.copy(Ge).sub(n.target),k.applyQuaternion(X),a.setFromVector3(k),n.autoRotate&&s===i.NONE&&C(z()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ke=n.minAzimuthAngle,Qe=n.maxAzimuthAngle;return isFinite(ke)&&isFinite(Qe)&&(ke<-Math.PI?ke+=Me:ke>Math.PI&&(ke-=Me),Qe<-Math.PI?Qe+=Me:Qe>Math.PI&&(Qe-=Me),ke<=Qe?a.theta=Math.max(ke,Math.min(Qe,a.theta)):a.theta=a.theta>(ke+Qe)/2?Math.max(ke,a.theta):Math.min(Qe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),k.setFromSpherical(a),k.applyQuaternion(se),Ge.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||he.distanceToSquared(n.object.position)>o||8*(1-we.dot(n.object.quaternion))>o?(n.dispatchEvent(Vc),he.copy(n.object.position),we.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Z),n.domElement.removeEventListener("pointerdown",yt),n.domElement.removeEventListener("pointercancel",tt),n.domElement.removeEventListener("wheel",Je),n.domElement.removeEventListener("pointermove",Ct),n.domElement.removeEventListener("pointerup",Ce),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ke),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Uc,l=new Uc;let c=1;const h=new P;let u=!1;const f=new Pe,m=new Pe,x=new Pe,g=new Pe,_=new Pe,w=new Pe,b=new Pe,v=new Pe,T=new Pe,S=[],A={};function z(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function C(k){l.theta-=k}function F(k){l.phi-=k}const Y=function(){const k=new P;return function(se,he){k.setFromMatrixColumn(he,0),k.multiplyScalar(-se),h.add(k)}}(),J=function(){const k=new P;return function(se,he){n.screenSpacePanning===!0?k.setFromMatrixColumn(he,1):(k.setFromMatrixColumn(he,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(se),h.add(k)}}(),N=function(){const k=new P;return function(se,he){const we=n.domElement;if(n.object.isPerspectiveCamera){const Me=n.object.position;k.copy(Me).sub(n.target);let Se=k.length();Se*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*se*Se/we.clientHeight,n.object.matrix),J(2*he*Se/we.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(se*(n.object.right-n.object.left)/n.object.zoom/we.clientWidth,n.object.matrix),J(he*(n.object.top-n.object.bottom)/n.object.zoom/we.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(k){n.object.isPerspectiveCamera?c/=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*k)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(k){n.object.isPerspectiveCamera?c*=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/k)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(k){f.set(k.clientX,k.clientY)}function V(k){b.set(k.clientX,k.clientY)}function U(k){g.set(k.clientX,k.clientY)}function W(k){m.set(k.clientX,k.clientY),x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const X=n.domElement;C(2*Math.PI*x.x/X.clientHeight),F(2*Math.PI*x.y/X.clientHeight),f.copy(m),n.update()}function K(k){v.set(k.clientX,k.clientY),T.subVectors(v,b),T.y>0?D(M()):T.y<0&&O(M()),b.copy(v),n.update()}function oe(k){_.set(k.clientX,k.clientY),w.subVectors(_,g).multiplyScalar(n.panSpeed),N(w.x,w.y),g.copy(_),n.update()}function H(k){k.deltaY<0?O(M()):k.deltaY>0&&D(M()),n.update()}function ie(k){let X=!1;switch(k.code){case n.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),X=!0;break}X&&(k.preventDefault(),n.update())}function re(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const k=.5*(S[0].pageX+S[1].pageX),X=.5*(S[0].pageY+S[1].pageY);f.set(k,X)}}function G(){if(S.length===1)g.set(S[0].pageX,S[0].pageY);else{const k=.5*(S[0].pageX+S[1].pageX),X=.5*(S[0].pageY+S[1].pageY);g.set(k,X)}}function me(){const k=S[0].pageX-S[1].pageX,X=S[0].pageY-S[1].pageY,se=Math.sqrt(k*k+X*X);b.set(0,se)}function ge(){n.enableZoom&&me(),n.enablePan&&G()}function pe(){n.enableZoom&&me(),n.enableRotate&&re()}function le(k){if(S.length==1)m.set(k.pageX,k.pageY);else{const se=be(k),he=.5*(k.pageX+se.x),we=.5*(k.pageY+se.y);m.set(he,we)}x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const X=n.domElement;C(2*Math.PI*x.x/X.clientHeight),F(2*Math.PI*x.y/X.clientHeight),f.copy(m)}function xe(k){if(S.length===1)_.set(k.pageX,k.pageY);else{const X=be(k),se=.5*(k.pageX+X.x),he=.5*(k.pageY+X.y);_.set(se,he)}w.subVectors(_,g).multiplyScalar(n.panSpeed),N(w.x,w.y),g.copy(_)}function De(k){const X=be(k),se=k.pageX-X.x,he=k.pageY-X.y,we=Math.sqrt(se*se+he*he);v.set(0,we),T.set(0,Math.pow(v.y/b.y,n.zoomSpeed)),D(T.y),b.copy(v)}function Ee(k){n.enableZoom&&De(k),n.enablePan&&xe(k)}function He(k){n.enableZoom&&De(k),n.enableRotate&&le(k)}function yt(k){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",Ct),n.domElement.addEventListener("pointerup",Ce)),ue(k),k.pointerType==="touch"?R(k):$e(k))}function Ct(k){n.enabled!==!1&&(k.pointerType==="touch"?E(k):Ze(k))}function Ce(k){ce(k),S.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",Ct),n.domElement.removeEventListener("pointerup",Ce)),n.dispatchEvent(Hc),s=i.NONE}function tt(k){ce(k)}function $e(k){let X;switch(k.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case tn.DOLLY:if(n.enableZoom===!1)return;V(k),s=i.DOLLY;break;case tn.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;U(k),s=i.PAN}else{if(n.enableRotate===!1)return;j(k),s=i.ROTATE}break;case tn.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;j(k),s=i.ROTATE}else{if(n.enablePan===!1)return;U(k),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ea)}function Ze(k){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;W(k);break;case i.DOLLY:if(n.enableZoom===!1)return;K(k);break;case i.PAN:if(n.enablePan===!1)return;oe(k);break}}function Je(k){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(k.preventDefault(),n.dispatchEvent(ea),H(k),n.dispatchEvent(Hc))}function Ke(k){n.enabled===!1||n.enablePan===!1||ie(k)}function R(k){switch(_e(k),S.length){case 1:switch(n.touches.ONE){case Mi.ROTATE:if(n.enableRotate===!1)return;re(),s=i.TOUCH_ROTATE;break;case Mi.PAN:if(n.enablePan===!1)return;G(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Mi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ge(),s=i.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ea)}function E(k){switch(_e(k),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;le(k),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;xe(k),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(k),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;He(k),n.update();break;default:s=i.NONE}}function Z(k){n.enabled!==!1&&k.preventDefault()}function ue(k){S.push(k)}function ce(k){delete A[k.pointerId];for(let X=0;X<S.length;X++)if(S[X].pointerId==k.pointerId){S.splice(X,1);return}}function _e(k){let X=A[k.pointerId];X===void 0&&(X=new Pe,A[k.pointerId]=X),X.set(k.pageX,k.pageY)}function be(k){const X=k.pointerId===S[0].pointerId?S[1]:S[0];return A[X.pointerId]}n.domElement.addEventListener("contextmenu",Z),n.domElement.addEventListener("pointerdown",yt),n.domElement.addEventListener("pointercancel",tt),n.domElement.addEventListener("wheel",Je,{passive:!1}),this.update()}}const _i=new Nc,Wt=new P,ni=new P,ut=new pt,Gc={X:new P(1,0,0),Y:new P(0,1,0),Z:new P(0,0,1)},ta={type:"change"},Wc={type:"mouseDown"},jc={type:"mouseUp",mode:null},Xc={type:"objectChange"};class M0 extends it{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new L0;this._gizmo=n,this.add(n);const i=new P0;this._plane=i,this.add(i);const s=this;function o(b,v){let T=v;Object.defineProperty(s,b,{get:function(){return T!==void 0?T:v},set:function(S){T!==S&&(T=S,i[b]=S,n[b]=S,s.dispatchEvent({type:b+"-changed",value:S}),s.dispatchEvent(ta))}}),s[b]=v,i[b]=v,n[b]=v}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new P,l=new P,c=new pt,h=new pt,u=new P,f=new pt,m=new P,x=new P,g=new P,_=0,w=new P;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",h),o("cameraPosition",u),o("cameraQuaternion",f),o("pointStart",m),o("pointEnd",x),o("rotationAxis",g),o("rotationAngle",_),o("eye",w),this._offset=new P,this._startNorm=new P,this._endNorm=new P,this._cameraScale=new P,this._parentPosition=new P,this._parentQuaternion=new pt,this._parentQuaternionInv=new pt,this._parentScale=new P,this._worldScaleStart=new P,this._worldQuaternionInv=new pt,this._worldScale=new P,this._positionStart=new P,this._quaternionStart=new pt,this._scaleStart=new P,this._getPointer=S0.bind(this),this._onPointerDown=E0.bind(this),this._onPointerHover=T0.bind(this),this._onPointerMove=A0.bind(this),this._onPointerUp=C0.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;_i.setFromCamera(e,this.camera);const t=na(this._gizmo.picker[this.mode],_i);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){_i.setFromCamera(e,this.camera);const t=na(this._plane,_i,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Wc.mode=this.mode,this.dispatchEvent(Wc)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;_i.setFromCamera(e,this.camera);const o=na(this._plane,_i,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion(ut.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(Wt.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(Wt.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ni.set(a,a,a)}else Wt.copy(this.pointStart),ni.copy(this.pointEnd),Wt.applyQuaternion(this._worldQuaternionInv),ni.applyQuaternion(this._worldQuaternionInv),ni.divide(Wt),t.search("X")===-1&&(ni.x=1),t.search("Y")===-1&&(ni.y=1),t.search("Z")===-1&&(ni.z=1);i.scale.copy(this._scaleStart).multiply(ni),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Wt.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Wt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Gc[t]),Wt.copy(Gc[t]),s==="local"&&Wt.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(Wt.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(ut.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(ut.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(ta),this.dispatchEvent(Xc)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(jc.mode=this.mode,this.dispatchEvent(jc)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(ta),this.dispatchEvent(Xc),this.pointStart.copy(this.pointEnd))}getRaycaster(){return _i}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function S0(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const e=this.domElement.getBoundingClientRect();return{x:(r.clientX-e.left)/e.width*2-1,y:-(r.clientY-e.top)/e.height*2+1,button:r.button}}}function T0(r){if(this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function E0(r){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function A0(r){this.enabled&&this.pointerMove(this._getPointer(r))}function C0(r){this.enabled&&(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function na(r,e,t){const n=e.intersectObject(r,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const Or=new Zt,st=new P(0,1,0),qc=new P(0,0,0),$c=new Te,zr=new pt,Nr=new pt,Tn=new P,Yc=new Te,Rs=new P(1,0,0),xi=new P(0,1,0),Is=new P(0,0,1),Br=new P,Fs=new P,ks=new P;class L0 extends it{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new kn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Qn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const h=e.clone();h.color.setHex(255),h.opacity=.5;const u=e.clone();u.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25,e.clone().color.setHex(16776960);const x=e.clone();x.color.setHex(7895160);const g=new Ot(0,.04,.1,12);g.translate(0,.05,0);const _=new bt(.08,.08,.08);_.translate(0,.04,0);const w=new ht;w.setAttribute("position",new Fe([0,0,0,1,0,0],3));const b=new Ot(.0075,.0075,.5,3);b.translate(0,.25,0);function v(O,j){const V=new gi(O,.0075,3,64,j*Math.PI*2);return V.rotateY(Math.PI/2),V.rotateX(Math.PI/2),V}function T(){const O=new ht;return O.setAttribute("position",new Fe([0,0,0,1,1,1],3)),O}const S={X:[[new de(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new de(g,s),[-.5,0,0],[0,0,Math.PI/2]],[new de(b,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new de(g,o),[0,.5,0]],[new de(g,o),[0,-.5,0],[Math.PI,0,0]],[new de(b,o)]],Z:[[new de(g,a),[0,0,.5],[Math.PI/2,0,0]],[new de(g,a),[0,0,-.5],[-Math.PI/2,0,0]],[new de(b,a),null,[Math.PI/2,0,0]]],XYZ:[[new de(new Yi(.1,0),u.clone()),[0,0,0]]],XY:[[new de(new bt(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new de(new bt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new bt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new de(new Ot(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new de(new Ot(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new Ot(.2,0,.6,4),n),[0,.3,0]],[new de(new Ot(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new Ot(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new de(new Ot(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new de(new Yi(.2,0),n)]],XY:[[new de(new bt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new de(new bt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new bt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},z={START:[[new de(new Yi(.01,2),i),null,null,null,"helper"]],END:[[new de(new Yi(.01,2),i),null,null,null,"helper"]],DELTA:[[new Mn(T(),i),null,null,null,"helper"]],X:[[new Mn(w,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Mn(w,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Mn(w,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},M={XYZE:[[new de(v(.5,1),x),null,[0,Math.PI/2,0]]],X:[[new de(v(.5,.5),s)]],Y:[[new de(v(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new de(v(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new de(v(.75,1),f),null,[0,Math.PI/2,0]]]},C={AXIS:[[new Mn(w,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},F={XYZE:[[new de(new ei(.25,10,8),n)]],X:[[new de(new gi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new de(new gi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new de(new gi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new de(new gi(.75,.1,2,24),n)]]},Y={X:[[new de(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new de(b,s),[0,0,0],[0,0,-Math.PI/2]],[new de(_,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new de(_,o),[0,.5,0]],[new de(b,o)],[new de(_,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new de(_,a),[0,0,.5],[Math.PI/2,0,0]],[new de(b,a),[0,0,0],[Math.PI/2,0,0]],[new de(_,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new de(new bt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new de(new bt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new bt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new bt(.1,.1,.1),u.clone())]]},J={X:[[new de(new Ot(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new de(new Ot(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new Ot(.2,0,.6,4),n),[0,.3,0]],[new de(new Ot(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new Ot(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new de(new Ot(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new de(new bt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new de(new bt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new bt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new bt(.2,.2,.2),n),[0,0,0]]]},N={X:[[new Mn(w,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Mn(w,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Mn(w,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function D(O){const j=new it;for(const V in O)for(let U=O[V].length;U--;){const W=O[V][U][0].clone(),K=O[V][U][1],oe=O[V][U][2],H=O[V][U][3],ie=O[V][U][4];W.name=V,W.tag=ie,K&&W.position.set(K[0],K[1],K[2]),oe&&W.rotation.set(oe[0],oe[1],oe[2]),H&&W.scale.set(H[0],H[1],H[2]),W.updateMatrix();const re=W.geometry.clone();re.applyMatrix4(W.matrix),W.geometry=re,W.renderOrder=1/0,W.position.set(0,0,0),W.rotation.set(0,0,0),W.scale.set(1,1,1),j.add(W)}return j}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=D(S)),this.add(this.gizmo.rotate=D(M)),this.add(this.gizmo.scale=D(Y)),this.add(this.picker.translate=D(A)),this.add(this.picker.rotate=D(F)),this.add(this.picker.scale=D(J)),this.add(this.helper.translate=D(z)),this.add(this.helper.rotate=D(C)),this.add(this.helper.scale=D(N)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Nr;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const o=i[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(ut.setFromEuler(Or.set(0,0,0)),o.quaternion.copy(n).multiply(ut),Math.abs(st.copy(Rs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(ut.setFromEuler(Or.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(ut),Math.abs(st.copy(xi).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(ut.setFromEuler(Or.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(ut),Math.abs(st.copy(Is).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(ut.setFromEuler(Or.set(0,Math.PI/2,0)),st.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix($c.lookAt(qc,st,xi)),o.quaternion.multiply(ut),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Wt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Wt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Wt),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(st.copy(Rs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(st.copy(xi).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(st.copy(Is).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(st.copy(Is).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(st.copy(Rs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(st.copy(xi).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(zr.copy(n),st.copy(this.eye).applyQuaternion(ut.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix($c.lookAt(this.eye,qc,xi)),o.name==="X"&&(ut.setFromAxisAngle(Rs,Math.atan2(-st.y,st.z)),ut.multiplyQuaternions(zr,ut),o.quaternion.copy(ut)),o.name==="Y"&&(ut.setFromAxisAngle(xi,Math.atan2(st.x,st.z)),ut.multiplyQuaternions(zr,ut),o.quaternion.copy(ut)),o.name==="Z"&&(ut.setFromAxisAngle(Is,Math.atan2(st.y,st.x)),ut.multiplyQuaternions(zr,ut),o.quaternion.copy(ut))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class P0 extends de{constructor(){super(new wr(1e5,1e5,2,2),new kn({visible:!1,wireframe:!0,side:An,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Br.copy(Rs).applyQuaternion(t==="local"?this.worldQuaternion:Nr),Fs.copy(xi).applyQuaternion(t==="local"?this.worldQuaternion:Nr),ks.copy(Is).applyQuaternion(t==="local"?this.worldQuaternion:Nr),st.copy(Fs),this.mode){case"translate":case"scale":switch(this.axis){case"X":st.copy(this.eye).cross(Br),Tn.copy(Br).cross(st);break;case"Y":st.copy(this.eye).cross(Fs),Tn.copy(Fs).cross(st);break;case"Z":st.copy(this.eye).cross(ks),Tn.copy(ks).cross(st);break;case"XY":Tn.copy(ks);break;case"YZ":Tn.copy(Br);break;case"XZ":st.copy(ks),Tn.copy(Fs);break;case"XYZ":case"E":Tn.set(0,0,0);break}break;case"rotate":default:Tn.set(0,0,0)}Tn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Yc.lookAt(Wt.set(0,0,0),Tn,st),this.quaternion.setFromRotationMatrix(Yc)),super.updateMatrixWorld(e)}}function Os(r){const e=new Map,t=new Map,n=r.clone();return Zc(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Zc(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Zc(r.children[n],e.children[n],t)}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Kc=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))};try{URL.revokeObjectURL(Kc(""))}catch{Kc=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var on=Uint8Array,ii=Uint16Array,ia=Uint32Array,Jc=new on([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Qc=new on([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),D0=new on([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),eu=function(r,e){for(var t=new ii(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new ia(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return[t,i]},tu=eu(Jc,2),nu=tu[0],R0=tu[1];nu[28]=258,R0[258]=28;for(var I0=eu(Qc,0),F0=I0[0],sa=new ii(32768),lt=0;lt<32768;++lt){var si=(lt&43690)>>>1|(lt&21845)<<1;si=(si&52428)>>>2|(si&13107)<<2,si=(si&61680)>>>4|(si&3855)<<4,sa[lt]=((si&65280)>>>8|(si&255)<<8)>>>1}for(var zs=function(r,e,t){for(var n=r.length,i=0,s=new ii(e);i<n;++i)++s[r[i]-1];var o=new ii(e);for(i=0;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new ii(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=e-r[i],u=o[r[i]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[sa[u]>>>l]=c}else for(a=new ii(n),i=0;i<n;++i)r[i]&&(a[i]=sa[o[r[i]-1]++]>>>15-r[i]);return a},Ns=new on(288),lt=0;lt<144;++lt)Ns[lt]=8;for(var lt=144;lt<256;++lt)Ns[lt]=9;for(var lt=256;lt<280;++lt)Ns[lt]=7;for(var lt=280;lt<288;++lt)Ns[lt]=8;for(var iu=new on(32),lt=0;lt<32;++lt)iu[lt]=5;var k0=zs(Ns,9,1),O0=zs(iu,5,1),ra=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},gn=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},oa=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},z0=function(r){return(r/8|0)+(r&7&&1)},N0=function(r,e,t){(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length);var n=new(r instanceof ii?ii:r instanceof ia?ia:on)(t-e);return n.set(r.subarray(e,t)),n},B0=function(r,e,t){var n=r.length;if(!n||t&&!t.l&&n<5)return e||new on(0);var i=!e||t,s=!t||t.i;t||(t={}),e||(e=new on(n*3));var o=function(me){var ge=e.length;if(me>ge){var pe=new on(Math.max(ge*2,me));pe.set(e),e=pe}},a=t.f||0,l=t.p||0,c=t.b||0,h=t.l,u=t.d,f=t.m,m=t.n,x=n*8;do{if(!h){t.f=a=gn(r,l,1);var g=gn(r,l+1,3);if(l+=3,g)if(g==1)h=k0,u=O0,f=9,m=5;else if(g==2){var v=gn(r,l,31)+257,T=gn(r,l+10,15)+4,S=v+gn(r,l+5,31)+1;l+=14;for(var A=new on(S),z=new on(19),M=0;M<T;++M)z[D0[M]]=gn(r,l+M*3,7);l+=T*3;for(var C=ra(z),F=(1<<C)-1,Y=zs(z,C,1),M=0;M<S;){var J=Y[gn(r,l,F)];l+=J&15;var _=J>>>4;if(_<16)A[M++]=_;else{var N=0,D=0;for(_==16?(D=3+gn(r,l,3),l+=2,N=A[M-1]):_==17?(D=3+gn(r,l,7),l+=3):_==18&&(D=11+gn(r,l,127),l+=7);D--;)A[M++]=N}}var O=A.subarray(0,v),j=A.subarray(v);f=ra(O),m=ra(j),h=zs(O,f,1),u=zs(j,m,1)}else throw"invalid block type";else{var _=z0(l)+4,w=r[_-4]|r[_-3]<<8,b=_+w;if(b>n){if(s)throw"unexpected EOF";break}i&&o(c+w),e.set(r.subarray(_,b),c),t.b=c+=w,t.p=l=b*8;continue}if(l>x){if(s)throw"unexpected EOF";break}}i&&o(c+131072);for(var V=(1<<f)-1,U=(1<<m)-1,W=l;;W=l){var N=h[oa(r,l)&V],K=N>>>4;if(l+=N&15,l>x){if(s)throw"unexpected EOF";break}if(!N)throw"invalid length/literal";if(K<256)e[c++]=K;else if(K==256){W=l,h=null;break}else{var oe=K-254;if(K>264){var M=K-257,H=Jc[M];oe=gn(r,l,(1<<H)-1)+nu[M],l+=H}var ie=u[oa(r,l)&U],re=ie>>>4;if(!ie)throw"invalid distance";l+=ie&15;var j=F0[re];if(re>3){var H=Qc[re];j+=oa(r,l)&(1<<H)-1,l+=H}if(l>x){if(s)throw"unexpected EOF";break}i&&o(c+131072);for(var G=c+oe;c<G;c+=4)e[c]=e[c-j],e[c+1]=e[c+1-j],e[c+2]=e[c+2-j],e[c+3]=e[c+3-j];c=G}}t.l=h,t.p=W,t.b=c,h&&(a=1,t.m=f,t.d=u,t.n=m)}while(!a);return c==e.length?e:N0(e,0,c)},U0=new on(0),V0=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function H0(r,e){return B0((V0(r),r.subarray(2,-4)),e)}var G0=typeof TextDecoder<"u"&&new TextDecoder,W0=0;try{G0.decode(U0,{stream:!0}),W0=1}catch{}function su(r,e,t){const n=t.length-r-1;if(e>=t[n])return n-1;if(e<=t[r])return r;let i=r,s=n,o=Math.floor((i+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:i=o,o=Math.floor((i+s)/2);return o}function j0(r,e,t,n){const i=[],s=[],o=[];i[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[r+1-a],o[a]=n[r+a]-e;let l=0;for(let c=0;c<a;++c){const h=o[c+1],u=s[a-c],f=i[c]/(h+u);i[c]=l+h*f,l=u*f}i[a]=l}return i}function X0(r,e,t,n){const i=su(r,n,e),s=j0(i,n,r,e),o=new qe(0,0,0,0);for(let a=0;a<=r;++a){const l=t[i-r+a],c=s[a],h=l.w*c;o.x+=l.x*h,o.y+=l.y*h,o.z+=l.z*h,o.w+=l.w*c}return o}function q0(r,e,t,n,i){const s=[];for(let u=0;u<=t;++u)s[u]=0;const o=[];for(let u=0;u<=n;++u)o[u]=s.slice(0);const a=[];for(let u=0;u<=t;++u)a[u]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[r+1-u],c[u]=i[r+u]-e;let f=0;for(let m=0;m<u;++m){const x=c[m+1],g=l[u-m];a[u][m]=x+g;const _=a[m][u-1]/a[u][m];a[m][u]=f+x*_,f=g*_}a[u][u]=f}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let f=0,m=1;const x=[];for(let g=0;g<=t;++g)x[g]=s.slice(0);x[0][0]=1;for(let g=1;g<=n;++g){let _=0;const w=u-g,b=t-g;u>=g&&(x[m][0]=x[f][0]/a[b+1][w],_=x[m][0]*a[w][b]);const v=w>=-1?1:-w,T=u-1<=b?g-1:t-u;for(let A=v;A<=T;++A)x[m][A]=(x[f][A]-x[f][A-1])/a[b+1][w+A],_+=x[m][A]*a[w+A][b];u<=b&&(x[m][g]=-x[f][g-1]/a[b+1][u],_+=x[m][g]*a[u][b]),o[g][u]=_;const S=f;f=m,m=S}}let h=t;for(let u=1;u<=n;++u){for(let f=0;f<=t;++f)o[u][f]*=h;h*=t-u}return o}function $0(r,e,t,n,i){const s=i<r?i:r,o=[],a=su(r,n,e),l=q0(a,n,r,s,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),f=u.w;u.x*=f,u.y*=f,u.z*=f,c[h]=u}for(let h=0;h<=s;++h){const u=c[a-r].clone().multiplyScalar(l[h][0]);for(let f=1;f<=r;++f)u.add(c[a-r+f].clone().multiplyScalar(l[h][f]));o[h]=u}for(let h=s+1;h<=i+1;++h)o[h]=new qe(0,0,0);return o}function Y0(r,e){let t=1;for(let i=2;i<=r;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=r-e;++i)n*=i;return t/n}function Z0(r){const e=r.length,t=[],n=[];for(let s=0;s<e;++s){const o=r[s];t[s]=new P(o.x,o.y,o.z),n[s]=o.w}const i=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(i[s-a].clone().multiplyScalar(Y0(s,a)*n[a]));i[s]=o.divideScalar(n[0])}return i}function K0(r,e,t,n,i){const s=$0(r,e,t,n,i);return Z0(s)}class J0 extends Wg{constructor(e,t,n,i,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new qe(a.x,a.y,a.z,a.w)}}getPoint(e,t=new P){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=X0(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new P){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=K0(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}}let Ve,xt,jt;class Q0 extends Ps{constructor(e){super(e)}load(e,t,n,i){const s=this,o=s.path===""?c0.extractUrlBase(e):s.path,a=new Pc(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){if(r_(e))Ve=new s_().parse(e);else{const i=uu(e);if(!o_(i))throw new Error("THREE.FBXLoader: Unknown format.");if(au(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+au(i));Ve=new i_().parse(i)}const n=new s0(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new e_(n,this.manager).parse(Ve)}}class e_{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){xt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),s=new t_().parse(i);return this.parseScene(i,s,n),jt}parseConnections(){const e=new Map;return"Connections"in Ve&&Ve.Connections.connections.forEach(function(n){const i=n[0],s=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(i).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ve.Objects){const n=Ve.Objects.Video;for(const i in n){const s=n[i],o=parseInt(i);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Ve.Objects){const n=Ve.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],e);t.set(parseInt(i),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,s=e.WrapModeV,o=i!==void 0?i.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?cs:$t,n.wrapT=a===0?cs:$t,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,s=xt.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new Dt):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new Dt):o=this.textureLoader.load(n);return this.textureLoader.setPath(i),o}parseMaterials(e){const t=new Map;if("Material"in Ve.Objects){const n=Ve.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],e);s!==null&&t.set(parseInt(i),s)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!xt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(s.toLowerCase()){case"phong":a=new zn;break;case"lambert":a=new jg;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new zn;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new Re().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new Re().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new Re().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new Re().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new Re().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new Re().fromArray(e.SpecularColor.value));const s=this;return xt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(t,o.ID),i.map!==void 0&&(i.map.encoding=et);break;case"DisplacementColor":i.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.encoding=et);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=s.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Qs,i.envMap.encoding=et);break;case"SpecularColor":i.specularMap=s.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.encoding=et);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in Ve.Objects&&t in Ve.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=xt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ve.Objects){const n=Ve.Objects.Deformer;for(const i in n){const s=n[i],o=xt.get(parseInt(i));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(s.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const s=t[i.ID];if(s.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Te().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const s=e.children[i],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=xt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){jt=new mn;const i=this.parseModels(e.skeletons,t,n),s=Ve.Objects.Model,o=this;i.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),xt.get(l.ID).parents.forEach(function(u){const f=i.get(u.ID);f!==void 0&&f.add(l)}),l.parent===null&&jt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),jt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=lu(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new n_().parse();jt.children.length===1&&jt.children[0].isGroup&&(jt.children[0].animations=a,jt=jt.children[0]),jt.animations=a}parseModels(e,t,n){const i=new Map,s=Ve.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=xt.get(a);let h=this.buildSkeleton(c,e,a,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,n);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new Vo;break;case"Null":default:h=new mn;break}h.name=l.attrName?Ye.sanitizeNodeName(l.attrName):"",h.ID=a}this.getTransformData(h,l),i.set(a,h)}return i}buildSkeleton(e,t,n,i){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,h){if(c.ID===o.ID){const u=s;s=new Vo,s.matrixWorld.copy(c.transformLink),s.name=i?Ye.sanitizeNodeName(i):"",s.ID=n,l.bones[h]=s,u!==null&&s.add(u)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(i){const s=Ve.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new it;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Ut(h,c,s,o),u!==null&&t.setFocalLength(u);break;case 1:t=new Mr(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new it;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const s=Ve.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new it;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new Re().fromArray(n.Color.value));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Fc(s,o,a,l);break;case 1:t=new kc(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=yn.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=yn.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new o0(s,o,a,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Fc(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new zn({color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(i=new Vg(s,o),i.normalizeSkinWeights()):i=new de(s,o),i}createCurve(e,t){const n=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),i=new Qn({color:3342591,linewidth:1});return new Mn(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=cu(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&xt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=Ve.Objects.Model[i.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),jt.add(e.target)):e.lookAt(new P().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const s in e){const o=e[s];xt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;xt.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new Ho(o.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ve.Objects){const t=Ve.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(s){e[s.Node]=new Te().fromArray(s.Matrix.a)}):e[i.Node]=new Te().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Ve&&"AmbientColor"in Ve.GlobalSettings){const e=Ve.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const s=new Re(t,n,i);jt.add(new Oc(s,1))}}}}class t_{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Ve.Objects){const n=Ve.Objects.Geometry;for(const i in n){const s=xt.get(parseInt(i)),o=this.parseGeometry(s,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,s=[],o=e.parents.map(function(u){return Ve.Objects.Model[u.ID]});if(o.length===0)return;const a=e.children.reduce(function(u,f){return i[f.ID]!==void 0&&(u=i[f.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&s.push(n.morphTargets[u.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=cu(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=lu(c);return this.genGeometry(t,a,s,h)}genGeometry(e,t,n,i){const s=new ht;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Fe(a.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new Fe(a.colors,3)),t&&(s.setAttribute("skinIndex",new Lo(a.weightsIndices,4)),s.setAttribute("skinWeight",new Fe(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new Ft().getNormalMatrix(i),h=new Fe(a.normal,3);h.applyNormalMatrix(c),s.setAttribute("normal",h)}if(a.uvs.forEach(function(c,h){let u="uv"+(h+1).toString();h===0&&(u="uv"),s.setAttribute(u,new Fe(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(u,f){u!==c&&(s.addGroup(h,f-h,c),c=u,h=f)}),s.groups.length>0){const u=s.groups[s.groups.length-1],f=u.start+u.count;f!==a.materialIndex.length&&s.addGroup(f,a.materialIndex.length-f,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,i),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,s){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,o=[],a=[],l=[],c=[],h=[],u=[];const f=this;return e.vertexIndices.forEach(function(m,x){let g,_=!1;m<0&&(m=m^-1,_=!0);let w=[],b=[];if(o.push(m*3,m*3+1,m*3+2),e.color){const v=Ur(x,n,m,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[m]!==void 0&&e.weightTable[m].forEach(function(v){b.push(v.weight),w.push(v.id)}),b.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const v=[0,0,0,0],T=[0,0,0,0];b.forEach(function(S,A){let z=S,M=w[A];T.forEach(function(C,F,Y){if(z>C){Y[F]=z,z=C;const J=v[F];v[F]=M,M=J}})}),w=v,b=T}for(;b.length<4;)b.push(0),w.push(0);for(let v=0;v<4;++v)h.push(b[v]),u.push(w[v])}if(e.normal){const v=Ur(x,n,m,e.normal);a.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(g=Ur(x,n,m,e.material)[0],g<0&&(f.negativeMaterialIndices=!0,g=0)),e.uv&&e.uv.forEach(function(v,T){const S=Ur(x,n,m,v);c[T]===void 0&&(c[T]=[]),c[T].push(S[0]),c[T].push(S[1])}),i++,_&&(i>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),f.genFace(t,e,o,g,a,l,c,h,u,i),n++,i=0,o=[],a=[],l=[],c=[],h=[],u=[])}),t}genFace(e,t,n,i,s,o,a,l,c,h){for(let u=2;u<h;u++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(u-1)*3]]),e.vertex.push(t.vertexPositions[n[(u-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(u-1)*3+2]]),e.vertex.push(t.vertexPositions[n[u*3]]),e.vertex.push(t.vertexPositions[n[u*3+1]]),e.vertex.push(t.vertexPositions[n[u*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(u-1)*4]),e.vertexWeights.push(l[(u-1)*4+1]),e.vertexWeights.push(l[(u-1)*4+2]),e.vertexWeights.push(l[(u-1)*4+3]),e.vertexWeights.push(l[u*4]),e.vertexWeights.push(l[u*4+1]),e.vertexWeights.push(l[u*4+2]),e.vertexWeights.push(l[u*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(u-1)*4]),e.weightsIndices.push(c[(u-1)*4+1]),e.weightsIndices.push(c[(u-1)*4+2]),e.weightsIndices.push(c[(u-1)*4+3]),e.weightsIndices.push(c[u*4]),e.weightsIndices.push(c[u*4+1]),e.weightsIndices.push(c[u*4+2]),e.weightsIndices.push(c[u*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(u-1)*3]),e.colors.push(o[(u-1)*3+1]),e.colors.push(o[(u-1)*3+2]),e.colors.push(o[u*3]),e.colors.push(o[u*3+1]),e.colors.push(o[u*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(u-1)*3]),e.normal.push(s[(u-1)*3+1]),e.normal.push(s[(u-1)*3+2]),e.normal.push(s[u*3]),e.normal.push(s[u*3+1]),e.normal.push(s[u*3+2])),t.uv&&t.uv.forEach(function(f,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(a[m][0]),e.uvs[m].push(a[m][1]),e.uvs[m].push(a[m][(u-1)*2]),e.uvs[m].push(a[m][(u-1)*2+1]),e.uvs[m].push(a[m][u*2]),e.uvs[m].push(a[m][u*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Ve.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,s){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,h=new Float32Array(c);for(let x=0;x<l.length;x++){const g=l[x]*3;h[g]=a[x*3],h[g+1]=a[x*3+1],h[g+2]=a[x*3+2]}const u={vertexIndices:o,vertexPositions:h},f=this.genBuffers(u),m=new Fe(f.vertex,3);m.name=s||n.attrName,m.applyMatrix4(i),e.morphAttributes.position.push(m)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let s=[];return n==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:i,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,s=[];for(let o=0;o<i.length;++o)s.push(o);return{dataSize:1,buffer:i,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new ht;const n=t-1,i=e.KnotVector.a,s=[],o=e.Points.a;for(let u=0,f=o.length;u<f;u+=4)s.push(new qe().fromArray(o,u));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let u=0;u<n;++u)s.push(s[u])}const h=new J0(n,i,s,a,l).getPoints(s.length*12);return new ht().setFromPoints(h)}}class n_{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],s=this.addClip(i);e.push(s)}return e}parseClips(){if(Ve.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ve.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Ve.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(a_),values:t[n].KeyValueFloat.a},s=xt.get(i.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=Ve.Objects.AnimationLayer,n=new Map;for(const i in t){const s=[],o=xt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(s[c]===void 0){const u=xt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(u!==void 0){const f=Ve.Objects.Model[u.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const m={modelName:f.attrName?Ye.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};jt.traverse(function(x){x.ID===f.id&&(m.transform=x.matrix,x.userData.transformData&&(m.eulerOrder=x.userData.transformData.eulerOrder))}),m.transform||(m.transform=new Te),"PreRotation"in f&&(m.preRotation=f.PreRotation.value),"PostRotation"in f&&(m.postRotation=f.PostRotation.value),s[c]=m}}s[c]&&(s[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(s[c]===void 0){const u=xt.get(l.ID).parents.filter(function(w){return w.relationship!==void 0})[0].ID,f=xt.get(u).parents[0].ID,m=xt.get(f).parents[0].ID,x=xt.get(m).parents[0].ID,g=Ve.Objects.Model[x],_={modelName:g.attrName?Ye.sanitizeNodeName(g.attrName):"",morphName:Ve.Objects.Deformer[u].attrName};s[c]=_}s[c][h.attr]=h}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(e){const t=Ve.Objects.AnimationStack,n={};for(const i in t){const s=xt.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Kg(e.name,-1,t)}generateTracks(e){const t=[];let n=new P,i=new pt,s=new P;if(e.transform&&e.transform.decompose(n,i,s),n=n.toArray(),i=new Zt().setFromQuaternion(i,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,i){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,n);return new Ls(e+"."+i,s,o)}generateRotationTrack(e,t,n,i,s,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(yn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(yn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(yn.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);i!==void 0&&(i=i.map(yn.degToRad),i.push(o),i=new Zt().fromArray(i),i=new pt().setFromEuler(i)),s!==void 0&&(s=s.map(yn.degToRad),s.push(o),s=new Zt().fromArray(s),s=new pt().setFromEuler(s).invert());const c=new pt,h=new Zt,u=[];for(let f=0;f<l.length;f+=3)h.set(l[f],l[f+1],l[f+2],o),c.setFromEuler(h),i!==void 0&&c.premultiply(i),s!==void 0&&c.multiply(s),c.toArray(u,f/3*4);return new Ki(e+".quaternion",a,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),i=jt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Cs(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const h=t.x.values[o];s.push(h),i[0]=h}else s.push(i[0]);if(a!==-1){const h=t.y.values[a];s.push(h),i[1]=h}else s.push(i[1]);if(l!==-1){const h=t.z.values[l];s.push(h),i[2]=h}else s.push(i[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,s=Math.abs(i);if(s>=180){const o=s/180,a=i/o;let l=n+a;const c=e.times[t-1],u=(e.times[t]-c)/o;let f=c+u;const m=[],x=[];for(;f<e.times[t];)m.push(f),f+=u,x.push(l),l+=a;e.times=hu(e.times,t,m),e.values=hu(e.values,t,x)}}}}class i_{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new ou,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,s){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++s]):h?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=s.split(",").slice(3);u=u.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",s=[c,h],c_(s,u),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=s),i in o&&Array.isArray(o[i])?o[i].push(s):i!=="a"?o[i]=s:o.a=s,this.setCurrentProp(o,i),i==="a"&&s.slice(-1)!==","&&(o.a=la(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=la(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=la(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class s_{parse(e){const t=new ru(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new ou;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&i.add(s.name,s)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let f=0;f<s;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,o){o!==0&&i.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:s,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=H0(new Uint8Array(e.getArrayBuffer(o))),l=new ru(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class ru{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class ou{add(e,t){this[e]=t}}function r_(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===uu(r,0,e.length)}function o_(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const s=r[i-1];return r=r.slice(t+i),t++,s}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function au(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function a_(r){return r/46186158e3}const l_=[];function Ur(r,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,o=s+n.dataSize;return u_(l_,n.buffer,s,o)}const aa=new Zt,Qi=new P;function lu(r){const e=new Te,t=new Te,n=new Te,i=new Te,s=new Te,o=new Te,a=new Te,l=new Te,c=new Te,h=new Te,u=new Te,f=new Te,m=r.inheritType?r.inheritType:0;if(r.translation&&e.setPosition(Qi.fromArray(r.translation)),r.preRotation){const F=r.preRotation.map(yn.degToRad);F.push(r.eulerOrder||Zt.DEFAULT_ORDER),t.makeRotationFromEuler(aa.fromArray(F))}if(r.rotation){const F=r.rotation.map(yn.degToRad);F.push(r.eulerOrder||Zt.DEFAULT_ORDER),n.makeRotationFromEuler(aa.fromArray(F))}if(r.postRotation){const F=r.postRotation.map(yn.degToRad);F.push(r.eulerOrder||Zt.DEFAULT_ORDER),i.makeRotationFromEuler(aa.fromArray(F)),i.invert()}r.scale&&s.scale(Qi.fromArray(r.scale)),r.scalingOffset&&a.setPosition(Qi.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(Qi.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(Qi.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(Qi.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(u.copy(r.parentMatrix),h.copy(r.parentMatrixWorld));const x=t.clone().multiply(n).multiply(i),g=new Te;g.extractRotation(h);const _=new Te;_.copyPosition(h);const w=_.clone().invert().multiply(h),b=g.clone().invert().multiply(w),v=s,T=new Te;if(m===0)T.copy(g).multiply(x).multiply(b).multiply(v);else if(m===1)T.copy(g).multiply(b).multiply(x).multiply(v);else{const Y=new Te().scale(new P().setFromMatrixScale(u)).clone().invert(),J=b.clone().multiply(Y);T.copy(g).multiply(x).multiply(J).multiply(v)}const S=c.clone().invert(),A=o.clone().invert();let z=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(S).multiply(a).multiply(o).multiply(s).multiply(A);const M=new Te().copyPosition(z),C=h.clone().multiply(M);return f.copyPosition(C),z=f.clone().multiply(T),z.premultiply(h.invert()),z}function cu(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function la(r){return r.split(",").map(function(t){return parseFloat(t)})}function uu(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),new TextDecoder().decode(new Uint8Array(r,e,t))}function c_(r,e){for(let t=0,n=r.length,i=e.length;t<i;t++,n++)r[n]=e[t]}function u_(r,e,t,n){for(let i=t,s=0;i<n;i++,s++)r[s]=e[i];return r}function hu(r,e,t){return r.slice(0,e).concat(t).concat(r.slice(e))}const h_=/^[og]\s*(.+)?/,d_=/^mtllib /,f_=/^usemtl /,p_=/^usemap /,du=/\s+/,fu=new P,ca=new P,pu=new P,mu=new P,an=new P,Vr=new Re;function m_(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;fu.fromArray(i,e),ca.fromArray(i,t),pu.fromArray(i,n),an.subVectors(pu,ca),mu.subVectors(fu,ca),an.cross(mu),an.normalize(),s.push(an.x,an.y,an.z),s.push(an.x,an.y,an.z),s.push(an.x,an.y,an.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,o,a,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(t,h),m=this.parseVertexIndex(n,h);if(this.addVertex(u,f,m),this.addColor(u,f,m),a!==void 0&&a!==""){const x=this.normals.length;u=this.parseNormalIndex(a,x),f=this.parseNormalIndex(l,x),m=this.parseNormalIndex(c,x),this.addNormal(u,f,m)}else this.addFaceNormal(u,f,m);if(i!==void 0&&i!==""){const x=this.uvs.length;u=this.parseUVIndex(i,x),f=this.parseUVIndex(s,x),m=this.parseUVIndex(o,x),this.addUV(u,f,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return r.startObject("",!1),r}class g_ extends Ps{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,o=new Pc(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new m_;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(du);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Vr.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])).convertSRGBToLinear(),t.colors.push(Vr.r,Vr.g,Vr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const f=c.slice(1).trim().split(du),m=[];for(let g=0,_=f.length;g<_;g++){const w=f[g];if(w.length>0){const b=w.split("/");m.push(b)}}const x=m[0];for(let g=1,_=m.length-1;g<_;g++){const w=m[g],b=m[g+1];t.addFace(x[0],w[0],b[0],x[1],w[1],b[1],x[2],w[2],b[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let f=[];const m=[];if(c.indexOf("/")===-1)f=u;else for(let x=0,g=u.length;x<g;x++){const _=u[x].split("/");_[0]!==""&&f.push(_[0]),_[1]!==""&&m.push(_[1])}t.addLineGeometry(f,m)}else if(h==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((i=h_.exec(c))!==null){const u=(" "+i[0].slice(1).trim()).slice(1);t.startObject(u)}else if(f_.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(d_.test(c))t.materialLibraries.push(c.substring(7).trim());else if(p_.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){const f=i[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new mn;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],h=c.geometry,u=c.materials,f=h.type==="Line",m=h.type==="Points";let x=!1;if(h.vertices.length===0)continue;const g=new ht;g.setAttribute("position",new Fe(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new Fe(h.normals,3)),h.colors.length>0&&(x=!0,g.setAttribute("color",new Fe(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new Fe(h.uvs,2));const _=[];for(let b=0,v=u.length;b<v;b++){const T=u[b],S=T.name+"_"+T.smooth+"_"+x;let A=t.materials[S];if(this.materials!==null){if(A=this.materials.create(T.name),f&&A&&!(A instanceof Qn)){const z=new Qn;fn.prototype.copy.call(z,A),z.color.copy(A.color),A=z}else if(m&&A&&!(A instanceof As)){const z=new As({size:10,sizeAttenuation:!1});fn.prototype.copy.call(z,A),z.color.copy(A.color),z.map=A.map,A=z}}A===void 0&&(f?A=new Qn:m?A=new As({size:1,sizeAttenuation:!1}):A=new zn,A.name=T.name,A.flatShading=!T.smooth,A.vertexColors=x,t.materials[S]=A),_.push(A)}let w;if(_.length>1){for(let b=0,v=u.length;b<v;b++){const T=u[b];g.addGroup(T.groupStart,T.groupCount,b)}f?w=new Lr(g,_):m?w=new jo(g,_):w=new de(g,_)}else f?w=new Lr(g,_[0]):m?w=new jo(g,_[0]):w=new de(g,_[0]);w.name=c.name,s.add(w)}else if(t.vertices.length>0){const a=new As({size:1,sizeAttenuation:!1}),l=new ht;l.setAttribute("position",new Fe(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new Fe(t.colors,3)),a.vertexColors=!0);const c=new jo(l,a);s.add(c)}return s}}const __=new Q0;async function gu(r,e){return new Promise((t,n)=>{__.load(r,function(i){t(i)},function(i){console.log(i.loaded/i.total*100+"% loaded"),e==null||e(i.loaded/i.total*100)},function(i){console.log("An error happened"),n(i)})})}new g_;function ua(r,e){let t=null;return r.traverse(n=>{n.name==e&&(t=n)}),t}const x_="file=extensions/sd-webui-3d-open-pose-editor/models/hand.fbx",y_="file=extensions/sd-webui-3d-open-pose-editor/models/foot.fbx",Bs=["nose","neck","right_shoulder","right_elbow","right_wrist","left_shoulder","left_elbow","left_wrist","right_hip","right_knee","right_ankle","left_hip","left_knee","left_ankle","right_eye","left_eye","right_ear","left_ear"],v_=[[1,2],[1,5],[2,3],[3,4],[5,6],[6,7],[1,8],[8,9],[9,10],[1,11],[11,12],[12,13],[0,1],[0,14],[14,16],[0,15],[15,17]],_u=[[255,0,0],[255,85,0],[255,170,0],[255,255,0],[170,255,0],[85,255,0],[0,255,0],[0,255,85],[0,255,170],[0,255,255],[0,170,255],[0,85,255],[0,0,255],[85,0,255],[170,0,255],[255,0,255],[255,0,170],[255,0,85]],ha=1;function w_([r,e,t]){return(r<<16)+(e<<8)+t}function xu(r,e){const t=v_.findIndex(([n,i])=>n===r&&i===e);if(typeof t<"u"){const[n,i,s]=_u[t];return(n<<16)+(i<<8)+s}return null}function yu(r,e){if(!r||!e)return null;const t=Bs.indexOf(r),n=Bs.indexOf(e);return t===-1||n===-1?null:t>n?xu(n,t):xu(t,n)}function b_(r,e){return!r.name||!e.name?null:yu(r.name,e.name)}function M_(r){const e=Bs.indexOf(r);return e!==-1?w_(_u[e]):0}function Jt(r,e){S_(r,e,new P(0,0,0))}function S_(r,e,t){const n=t instanceof P?t.clone():t.position.clone(),i=e.position,s=n.distanceTo(i),o=b_(t instanceof P?r:t,e),a=new kn({color:o??0,opacity:.6,transparent:!0}),l=new de(new ei(ha),a);l.name=r.name+"_link_"+e.name;const c=n.clone().add(i).multiplyScalar(.5),h=i.clone().sub(n),u=new P(1,0,0),f=u.clone().cross(h),m=u.clone().angleTo(h);l.scale.copy(new P(s/2,1,1)),l.position.copy(c),l.setRotationFromAxisAngle(f.normalize(),m),r.add(l)}function Hr(r,e,t,n){const i=new P(0,0,0),s=e.position,o=i.distanceTo(s),a=yu(t,n),l=new kn({color:a??0,opacity:.6,transparent:!0}),c=new de(new ei(ha),l);c.name=t+"_link_"+n;const h=i.clone().add(s).multiplyScalar(.5),u=s.clone().sub(i),f=new P(1,0,0),m=f.clone().cross(u),x=f.clone().angleTo(u);c.scale.copy(new P(o/2,1,1)),c.position.copy(h),c.setRotationFromAxisAngle(m.normalize(),x),r.add(c)}function Us(r,e,t,n){const i=new P(0,0,0),s=e.position,o=i.distanceTo(s),a=i.clone().add(s).multiplyScalar(.5),l=s.clone().sub(i),c=new P(1,0,0),h=c.clone().cross(l),u=c.clone().angleTo(l),f=r.getObjectByName(t+"_link_"+n);f.scale.copy(new P(o/2,1,1)),f.position.copy(a),f.setRotationFromAxisAngle(h.normalize(),u)}function T_(r,e){Us(r,e,r.name,e.name)}function Qt(r){const e=new de(new ei(ha),new kn({color:M_(r)}));return e.name=r,e}function E_(r,e,t){const s=new mn;s.name="torso",s.translateX(r),s.translateY(e),s.translateZ(t);const o=new mn;o.name="five",o.translateY(46/2),s.add(o);const a=Qt("neck");o.add(a);const l=new mn;l.name="shoulder",o.add(l);const c=Qt("right_shoulder");c.translateX(-34/2);const h=Qt("left_shoulder");h.translateX(34/2),l.add(c),l.add(h);const u=new mn;u.name="hip",o.add(u);const f=Qt("right_hip");f.translateX(-34/2+10),f.translateY(-46);const m=Qt("left_hip");return m.translateX(34/2-10),m.translateY(-46),u.add(f),u.add(m),Hr(u,f,"neck","right_hip"),Hr(u,m,"neck","left_hip"),Hr(l,c,"neck","right_shoulder"),Hr(l,h,"neck","left_shoulder"),{neck:a,torso:s,right_shoulder:c,left_shoulder:h,right_hip:f,left_hip:m}}function A_(r,e,t){const n=Qt("nose");n.translateX(r),n.translateY(e),n.translateZ(t);const i=Qt("right_eye");i.translateX(-3),i.translateY(3),i.translateZ(-3);const s=Qt("left_eye");s.translateX(3),s.translateY(3),s.translateZ(-3),Jt(n,i),Jt(n,s),n.add(i),n.add(s);const o=Qt("right_ear");o.translateX(-4),o.translateY(-3),o.translateZ(-8);const a=Qt("left_ear");return a.translateX(4),a.translateY(-3),a.translateZ(-8),Jt(i,o),Jt(s,a),i.add(o),s.add(a),{nose:n,right_eye:i,left_eye:s,right_ear:o,left_ear:a}}function Gr(r,e,t,n){const i=Qt(r);return i.translateX(e),i.translateY(t),i.translateZ(n),i}function vu(r,e,t,n){const i=Qt(r);return i.translateX(e),i.translateY(t),i.translateZ(n),i}function wu(r,e,t,n){const i=Qt(r);return i.translateX(e),i.translateY(t),i.translateZ(n),i}let es=null;function Wr(){return es?Os(es):null}const yi=2.2,vi=.25;function C_(r,e){const{torso:t,right_shoulder:n,left_shoulder:i,right_hip:s,left_hip:o,neck:a}=E_(0,115,0),{nose:l,left_ear:c,right_ear:h,right_eye:u,left_eye:f}=A_(0,20,14),m=Gr("right_elbow",0,-25,0),x=Gr("left_elbow",0,-25,0),g=Gr("right_wrist",0,-25,0),_=Gr("left_wrist",0,-25,0),w=vu("right_knee",0,-40,0),b=vu("left_knee",0,-40,0),v=wu("right_ankle",0,-36,0),T=wu("left_ankle",0,-36,0);a.add(l),n.add(m),i.add(x),m.add(g),x.add(_),s.add(w),o.add(b),w.add(v),b.add(T),Jt(a,l),Jt(n,m),Jt(i,x),Jt(m,g),Jt(x,_),Jt(s,w),Jt(o,b),Jt(w,v),Jt(b,T);const S=Os(r),A=Os(r);S.name="right_hand",S.translateX(-.4),S.translateY(3),S.rotateY(Math.PI),S.rotateZ(-Math.PI/2),S.scale.multiplyScalar(yi),A.name="left_hand",A.scale.x=-1,A.translateX(.4),A.translateY(3),A.rotateY(Math.PI),A.rotateZ(Math.PI/2),A.scale.multiplyScalar(yi),g.add(S),_.add(A);const z=Os(e),M=Os(e);z.name="right_foot",z.scale.setX(-1),z.scale.multiplyScalar(vi),M.name="left_foot",M.scale.multiplyScalar(vi),v.add(z),T.add(M),es=t}const Vs={meshName:"shoupolySurface1",bonePrefix:"shoujoint"},Hs={meshName:"FootObject",bonePrefix:"FootBone"},bu={left_hand:Vs,right_hand:Vs,left_foot:Hs,right_foot:Hs};async function L_(r){const e=await gu(x_,r),t=ua(e,Vs.meshName);return t.material=new zn,t.skeleton.bones.forEach(n=>{const i=new de(new ei(.5),new kn({color:16711680}));i.name="red_point",i.scale.setX(.2),i.position.copy(n.position),n.add(i)}),e}async function P_(r){const e=await gu(y_,r);console.log(e);const t=ua(e,Hs.meshName);return t.material=new zn,console.log(t.skeleton.bones),t.skeleton.bones.forEach(n=>{if(n.name!=="FootBone2")return;const i=new de(new ei(.1),new kn({color:16711680}));i.name="red_point",i.position.copy(n.position),i.translateX(-.3),n.add(i)}),e}function Mu(r){return r.name in bu?ua(r,bu[r.name].meshName):null}function D_(r){return!!(Bs.includes(r)||r==="right_hand"||r==="left_hand"||r==="right_foot"||r==="left_foot"||r==="shoulder"||r==="hip"||r.startsWith(Vs.bonePrefix)||r.startsWith(Hs.bonePrefix)||r.includes("_link_"))}const R_=["torso","neck","right_shoulder","left_shoulder","right_elbow","left_elbow","right_hip","left_hip","right_knee","left_knee","shoulder","hip"];function Su(r){return!!(R_.includes(r)||r.startsWith(Vs.bonePrefix)||r.startsWith(Hs.bonePrefix))}function Tu(r){return["left_hand","right_hand"].includes(r)}function I_(r){return["left_foot","right_foot"].includes(r)}function da(r){return["left_hand","right_hand","left_foot","right_foot"].includes(r)}class fa{constructor(e){ft(this,"body");ft(this,"part",{});this.body=e,this.body.traverse(t=>{Bs.includes(t.name)&&(this.part[t.name]=t)}),this.part.hip=this.body.getObjectByName("hip"),this.part.shoulder=this.body.getObjectByName("shoulder"),this.part.five=this.body.getObjectByName("five"),this.part.right_hand=this.body.getObjectByName("right_hand"),this.part.left_hand=this.body.getObjectByName("left_hand"),this.part.right_foot=this.body.getObjectByName("right_foot"),this.part.left_foot=this.body.getObjectByName("left_foot"),this.part.torso=this.body}getWorldPosition(e){const t=new P;return e.getWorldPosition(t),t}UpdateLink(e){switch(e){case"left_hip":Us(this.part.hip,this.part.left_hip,"neck","left_hip");break;case"right_hip":Us(this.part.hip,this.part.right_hip,"neck","right_hip");break;case"right_shoulder":Us(this.part.shoulder,this.part.right_shoulder,"neck","right_shoulder");break;case"left_shoulder":Us(this.part.shoulder,this.part.left_shoulder,"neck","left_shoulder");break;case"torso":break;case"five":break;case"neck":break;case"shoulder":break;case"right_hand":break;case"left_hand":break;case"hip":break;case"right_foot":break;case"left_foot":break;default:T_(this.part[e].parent,this.part[e]);break}}get HeadSize(){return this.getWorldPosition(this.part.right_ear).distanceTo(this.getWorldPosition(this.part.left_ear))}set HeadSize(e){const t=e/this.HeadSize,n=this.part.left_ear.position.length()*t,i=this.part.left_eye.position.length()*t;this.part.left_ear.position.normalize().multiplyScalar(n),this.part.right_ear.position.normalize().multiplyScalar(n),this.part.left_eye.position.normalize().multiplyScalar(i),this.part.right_eye.position.normalize().multiplyScalar(i),this.UpdateLink("left_eye"),this.UpdateLink("right_eye"),this.UpdateLink("left_ear"),this.UpdateLink("right_ear")}get NoseToNeck(){return this.part.nose.position.length()}set NoseToNeck(e){this.part.nose.position.normalize().multiplyScalar(e),this.UpdateLink("nose")}get ShoulderToHip(){return this.part.five.position.length()*2}set ShoulderToHip(e){this.part.five.position.setY(e/2),this.part.left_hip.position.setY(-e),this.part.right_hip.position.setY(-e),this.UpdateLink("left_hip"),this.UpdateLink("right_hip")}get ShoulderWidth(){return this.part.left_shoulder.position.distanceTo(this.part.right_shoulder.position)}set ShoulderWidth(e){const t=this.part.right_shoulder;t.position.x=-e/2;const n=this.part.left_shoulder;n.position.x=e/2,this.UpdateLink("right_shoulder"),this.UpdateLink("left_shoulder")}get UpperArm(){return this.part.left_elbow.position.length()}set UpperArm(e){this.part.left_elbow.position.normalize().multiplyScalar(e),this.part.right_elbow.position.normalize().multiplyScalar(e),this.UpdateLink("left_elbow"),this.UpdateLink("right_elbow")}get Forearm(){return this.part.left_wrist.position.length()}set Forearm(e){this.part.left_wrist.position.normalize().multiplyScalar(e),this.part.right_wrist.position.normalize().multiplyScalar(e),this.UpdateLink("left_wrist"),this.UpdateLink("right_wrist")}get ArmLength(){return this.UpperArm+this.Forearm}set ArmLength(e){const t=this.ArmLength;this.UpperArm=e*this.UpperArm/t,this.Forearm=e*this.Forearm/t}get Thigh(){return this.part.left_knee.position.length()}set Thigh(e){this.part.left_knee.position.normalize().multiplyScalar(e),this.part.right_knee.position.normalize().multiplyScalar(e),this.UpdateLink("left_knee"),this.UpdateLink("right_knee")}get HandSize(){return Math.abs(this.part.left_hand.scale.x)/yi}set HandSize(e){const t=this.HandSize;this.part.left_hand.scale.divideScalar(t*yi).multiplyScalar(e*yi),this.part.right_hand.scale.divideScalar(t*yi).multiplyScalar(e*yi)}get Hips(){return Math.abs(this.part.left_hip.position.x)*2}set Hips(e){this.part.left_hip.position.setX(e/2),this.part.right_hip.position.setX(-e/2),this.UpdateLink("left_hip"),this.UpdateLink("right_hip")}get LowerLeg(){return this.part.left_ankle.position.length()}set LowerLeg(e){this.part.left_ankle.position.normalize().multiplyScalar(e),this.part.right_ankle.position.normalize().multiplyScalar(e),this.UpdateLink("left_ankle"),this.UpdateLink("right_ankle")}get LegLength(){return this.Thigh+this.LowerLeg}set LegLength(e){const t=this.LegLength;this.Thigh=e*this.Thigh/t,this.LowerLeg=e*this.LowerLeg/t}get FootSize(){return Math.abs(this.part.left_foot.scale.x)/vi}set FootSize(e){const t=this.FootSize;this.part.left_foot.scale.divideScalar(t*vi).multiplyScalar(e*vi),this.part.right_foot.scale.divideScalar(t*vi).multiplyScalar(e*vi)}getLocalPosition(e,t){return e.worldToLocal(t.clone())}getDirectionVectorByParentOf(e,t,n){const i=this.part[e].parent,s=this.getLocalPosition(i,t);return this.getLocalPosition(i,n).clone().sub(s).normalize()}rotateTo(e,t){var a;const n=this.part[e],i=n.position.clone().normalize(),s=i.clone().cross(t),o=i.clone().angleTo(t);(a=n.parent)==null||a.setRotationFromAxisAngle(s.normalize(),o)}setDirectionVector(e,t){const n=this.part[e].position.length();this.part[e].position.copy(t).multiplyScalar(n),this.UpdateLink(e)}getDistanceOf(e,t){return e.distanceTo(t)}ResetPose(){es==null||es.traverse(e=>{if(e.name in this.part){const t=e.name;this.part[t].position.copy(e.position),this.part[t].rotation.copy(e.rotation),this.part[t].scale.copy(e.scale),this.UpdateLink(t)}})}SetPose(e){this.ResetPose();const t=Object.fromEntries(Object.entries(Eu).map(([i,s])=>[i,new P().fromArray(e[s]??[0,0,0])]));this.part.torso.position.copy(t.Hips.clone().add(t.Chest).multiplyScalar(.5)),this.Hips=this.getDistanceOf(t.Hips,t.UpLeg_L)*2,this.Thigh=this.getDistanceOf(t.UpLeg_L,t.Leg_L),this.LowerLeg=this.getDistanceOf(t.Leg_L,t.Foot_L),this.UpperArm=this.getDistanceOf(t.Arm_L,t.ForeArm_L),this.Forearm=this.getDistanceOf(t.ForeArm_L,t.Hand_L),this.ShoulderWidth=2*(this.getDistanceOf(t.Shoulder_L,t.Arm_L)+this.getDistanceOf(t.Chest,t.Shoulder_L)/Math.SQRT2);const n=[["five",["Hips","Chest"]],["left_elbow",["Arm_L","ForeArm_L"]],["left_wrist",["ForeArm_L","Hand_L"]],["left_knee",["UpLeg_L","Leg_L"]],["left_ankle",["Leg_L","Foot_L"]],["right_elbow",["Arm_R","ForeArm_R"]],["right_wrist",["ForeArm_R","Hand_R"]],["right_knee",["UpLeg_R","Leg_R"]],["right_ankle",["Leg_R","Foot_R"]]];for(const[i,[s,o]]of n)this.rotateTo(i,this.getDirectionVectorByParentOf(i,t[s],t[o]))}}const Eu={Root:0,Hips:1,Spine:2,Spine1:3,Spine2:4,Chest:5,Neck:6,Head:7,Eye_R:8,Eye_L:9,Head_Null:10,Shoulder_L:11,Arm_L:12,ForeArm_L:13,Hand_L:14,HandPinky1_L:15,HandPinky2_L:16,HandPinky3_L:17,HandRing1_L:18,HandRing2_L:19,HandRing3_L:20,HandMiddle1_L:21,HandMiddle2_L:22,HandMiddle3_L:23,HandIndex1_L:24,HandIndex2_L:25,HandIndex3_L:26,HandThumb1_L:27,HandThumb2_L:28,HandThumb3_L:29,Elbow_L:30,ForeArmTwist_L:31,ArmTwist_L:32,Shoulder_R:33,Arm_R:34,ForeArm_R:35,Hand_R:36,HandPinky1_R:37,HandPinky2_R:38,HandPinky3_R:39,HandRing1_R:40,HandRing2_R:41,HandRing3_R:42,HandMiddle1_R:43,HandMiddle2_R:44,HandMiddle3_R:45,HandIndex1_R:46,HandIndex2_R:47,HandIndex3_R:48,HandThumb1_R:49,HandThumb2_R:50,HandThumb3_R:51,Elbow_R:52,ForeArmTwist_R:53,ArmTwist_R:54,UpLeg_L:55,Leg_L:56,Knee_L:57,Foot_L:58,FootPinky1_L:59,FootRing_L:60,FootMiddle_L:61,FootIndex_L:62,FootThumb_L:63,UpLegTwist_L:64,ThighFront_L:65,UpLeg_R:66,Leg_R:67,Knee_R:68,Foot_R:69,FootPinky1_R:70,FootRing_R:71,FootMiddle_R:72,FootIndex_R:73,FootThumb_R:74,UpLegTwist_R:75,ThighFront_R:76},F_="file=extensions/sd-webui-3d-open-pose-editor/src/poses/data.bin",ts=[];function k_(r,e){return r=Math.ceil(r),e=Math.floor(e),Math.floor(Math.random()*(e-r+1))+r}function Au(){return ts?ts[k_(0,ts.length-1)]:null}async function O_(){const e=await(await fetch(F_)).arrayBuffer();console.log(e.byteLength);const t=new Int32Array(e),n=Object.keys(Eu).length;for(let i=0;i<t.length/(n*3);i++){const s=[];for(let o=0;o<n;o++){const a=t[i*(n*3)+o*3+0],l=t[i*(n*3)+o*3+1],c=t[i*(n*3)+o*3+2];s.push([a/1e3,l/1e3,c/1e3])}ts==null||ts.push(s)}}const Cu=new EventTarget;function z_(r){Cu.addEventListener("screenshot",e=>{const t=e.detail;r(t.id,t.url,t.name)})}function jr(r,e,t){const n={id:r,url:e,name:t};Cu.dispatchEvent(new CustomEvent("screenshot",{detail:n}))}var Bn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof{}<"u"?{}:typeof self<"u"?self:{},pa={},N_={get exports(){return pa},set exports(r){pa=r}};(function(r,e){(function(t,n){r.exports=n()})(Bn,function(){var t=1e3,n=6e4,i=36e5,s="millisecond",o="second",a="minute",l="hour",c="day",h="week",u="month",f="quarter",m="year",x="date",g="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,w=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(N){var D=["th","st","nd","rd"],O=N%100;return"["+N+(D[(O-20)%10]||D[O]||D[0])+"]"}},v=function(N,D,O){var j=String(N);return!j||j.length>=D?N:""+Array(D+1-j.length).join(O)+N},T={s:v,z:function(N){var D=-N.utcOffset(),O=Math.abs(D),j=Math.floor(O/60),V=O%60;return(D<=0?"+":"-")+v(j,2,"0")+":"+v(V,2,"0")},m:function N(D,O){if(D.date()<O.date())return-N(O,D);var j=12*(O.year()-D.year())+(O.month()-D.month()),V=D.clone().add(j,u),U=O-V<0,W=D.clone().add(j+(U?-1:1),u);return+(-(j+(O-V)/(U?V-W:W-V))||0)},a:function(N){return N<0?Math.ceil(N)||0:Math.floor(N)},p:function(N){return{M:u,y:m,w:h,d:c,D:x,h:l,m:a,s:o,ms:s,Q:f}[N]||String(N||"").toLowerCase().replace(/s$/,"")},u:function(N){return N===void 0}},S="en",A={};A[S]=b;var z=function(N){return N instanceof Y},M=function N(D,O,j){var V;if(!D)return S;if(typeof D=="string"){var U=D.toLowerCase();A[U]&&(V=U),O&&(A[U]=O,V=U);var W=D.split("-");if(!V&&W.length>1)return N(W[0])}else{var K=D.name;A[K]=D,V=K}return!j&&V&&(S=V),V||!j&&S},C=function(N,D){if(z(N))return N.clone();var O=typeof D=="object"?D:{};return O.date=N,O.args=arguments,new Y(O)},F=T;F.l=M,F.i=z,F.w=function(N,D){return C(N,{locale:D.$L,utc:D.$u,x:D.$x,$offset:D.$offset})};var Y=function(){function N(O){this.$L=M(O.locale,null,!0),this.parse(O)}var D=N.prototype;return D.parse=function(O){this.$d=function(j){var V=j.date,U=j.utc;if(V===null)return new Date(NaN);if(F.u(V))return new Date;if(V instanceof Date)return new Date(V);if(typeof V=="string"&&!/Z$/i.test(V)){var W=V.match(_);if(W){var K=W[2]-1||0,oe=(W[7]||"0").substring(0,3);return U?new Date(Date.UTC(W[1],K,W[3]||1,W[4]||0,W[5]||0,W[6]||0,oe)):new Date(W[1],K,W[3]||1,W[4]||0,W[5]||0,W[6]||0,oe)}}return new Date(V)}(O),this.$x=O.x||{},this.init()},D.init=function(){var O=this.$d;this.$y=O.getFullYear(),this.$M=O.getMonth(),this.$D=O.getDate(),this.$W=O.getDay(),this.$H=O.getHours(),this.$m=O.getMinutes(),this.$s=O.getSeconds(),this.$ms=O.getMilliseconds()},D.$utils=function(){return F},D.isValid=function(){return this.$d.toString()!==g},D.isSame=function(O,j){var V=C(O);return this.startOf(j)<=V&&V<=this.endOf(j)},D.isAfter=function(O,j){return C(O)<this.startOf(j)},D.isBefore=function(O,j){return this.endOf(j)<C(O)},D.$g=function(O,j,V){return F.u(O)?this[j]:this.set(V,O)},D.unix=function(){return Math.floor(this.valueOf()/1e3)},D.valueOf=function(){return this.$d.getTime()},D.startOf=function(O,j){var V=this,U=!!F.u(j)||j,W=F.p(O),K=function(pe,le){var xe=F.w(V.$u?Date.UTC(V.$y,le,pe):new Date(V.$y,le,pe),V);return U?xe:xe.endOf(c)},oe=function(pe,le){return F.w(V.toDate()[pe].apply(V.toDate("s"),(U?[0,0,0,0]:[23,59,59,999]).slice(le)),V)},H=this.$W,ie=this.$M,re=this.$D,G="set"+(this.$u?"UTC":"");switch(W){case m:return U?K(1,0):K(31,11);case u:return U?K(1,ie):K(0,ie+1);case h:var me=this.$locale().weekStart||0,ge=(H<me?H+7:H)-me;return K(U?re-ge:re+(6-ge),ie);case c:case x:return oe(G+"Hours",0);case l:return oe(G+"Minutes",1);case a:return oe(G+"Seconds",2);case o:return oe(G+"Milliseconds",3);default:return this.clone()}},D.endOf=function(O){return this.startOf(O,!1)},D.$set=function(O,j){var V,U=F.p(O),W="set"+(this.$u?"UTC":""),K=(V={},V[c]=W+"Date",V[x]=W+"Date",V[u]=W+"Month",V[m]=W+"FullYear",V[l]=W+"Hours",V[a]=W+"Minutes",V[o]=W+"Seconds",V[s]=W+"Milliseconds",V)[U],oe=U===c?this.$D+(j-this.$W):j;if(U===u||U===m){var H=this.clone().set(x,1);H.$d[K](oe),H.init(),this.$d=H.set(x,Math.min(this.$D,H.daysInMonth())).$d}else K&&this.$d[K](oe);return this.init(),this},D.set=function(O,j){return this.clone().$set(O,j)},D.get=function(O){return this[F.p(O)]()},D.add=function(O,j){var V,U=this;O=Number(O);var W=F.p(j),K=function(ie){var re=C(U);return F.w(re.date(re.date()+Math.round(ie*O)),U)};if(W===u)return this.set(u,this.$M+O);if(W===m)return this.set(m,this.$y+O);if(W===c)return K(1);if(W===h)return K(7);var oe=(V={},V[a]=n,V[l]=i,V[o]=t,V)[W]||1,H=this.$d.getTime()+O*oe;return F.w(H,this)},D.subtract=function(O,j){return this.add(-1*O,j)},D.format=function(O){var j=this,V=this.$locale();if(!this.isValid())return V.invalidDate||g;var U=O||"YYYY-MM-DDTHH:mm:ssZ",W=F.z(this),K=this.$H,oe=this.$m,H=this.$M,ie=V.weekdays,re=V.months,G=function(le,xe,De,Ee){return le&&(le[xe]||le(j,U))||De[xe].slice(0,Ee)},me=function(le){return F.s(K%12||12,le,"0")},ge=V.meridiem||function(le,xe,De){var Ee=le<12?"AM":"PM";return De?Ee.toLowerCase():Ee},pe={YY:String(this.$y).slice(-2),YYYY:this.$y,M:H+1,MM:F.s(H+1,2,"0"),MMM:G(V.monthsShort,H,re,3),MMMM:G(re,H),D:this.$D,DD:F.s(this.$D,2,"0"),d:String(this.$W),dd:G(V.weekdaysMin,this.$W,ie,2),ddd:G(V.weekdaysShort,this.$W,ie,3),dddd:ie[this.$W],H:String(K),HH:F.s(K,2,"0"),h:me(1),hh:me(2),a:ge(K,oe,!0),A:ge(K,oe,!1),m:String(oe),mm:F.s(oe,2,"0"),s:String(this.$s),ss:F.s(this.$s,2,"0"),SSS:F.s(this.$ms,3,"0"),Z:W};return U.replace(w,function(le,xe){return xe||pe[le]||W.replace(":","")})},D.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},D.diff=function(O,j,V){var U,W=F.p(j),K=C(O),oe=(K.utcOffset()-this.utcOffset())*n,H=this-K,ie=F.m(this,K);return ie=(U={},U[m]=ie/12,U[u]=ie,U[f]=ie/3,U[h]=(H-oe)/6048e5,U[c]=(H-oe)/864e5,U[l]=H/i,U[a]=H/n,U[o]=H/t,U)[W]||H,V?ie:F.a(ie)},D.daysInMonth=function(){return this.endOf(u).$D},D.$locale=function(){return A[this.$L]},D.locale=function(O,j){if(!O)return this.$L;var V=this.clone(),U=M(O,j,!0);return U&&(V.$L=U),V},D.clone=function(){return F.w(this.$d,this)},D.toDate=function(){return new Date(this.valueOf())},D.toJSON=function(){return this.isValid()?this.toISOString():null},D.toISOString=function(){return this.$d.toISOString()},D.toString=function(){return this.$d.toUTCString()},N}(),J=Y.prototype;return C.prototype=J,[["$ms",s],["$s",o],["$m",a],["$H",l],["$W",c],["$M",u],["$y",m],["$D",x]].forEach(function(N){J[N[1]]=function(D){return this.$g(D,N[0],N[1])}}),C.extend=function(N,D){return N.$i||(N(D,Y,C),N.$i=!0),C},C.locale=M,C.isDayjs=z,C.unix=function(N){return C(1e3*N)},C.en=A[S],C.Ls=A,C.p={},C})})(N_);const B_=pa;var mt={},U_={get exports(){return mt},set exports(r){mt=r}};/*!
* sweetalert2 v11.7.3
* Released under the MIT License.
*/(function(r,e){(function({},t){r.exports=t()})(Bn,function(){var t={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const n="swal2-",i=d=>{const p={};for(const y in d)p[d[y]]=n+d[y];return p},s=i(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),o=i(["success","warning","info","question","error"]),a="SweetAlert2:",l=d=>{const p=[];for(let y=0;y<d.length;y++)p.indexOf(d[y])===-1&&p.push(d[y]);return p},c=d=>d.charAt(0).toUpperCase()+d.slice(1),h=d=>{console.warn(`${a} ${typeof d=="object"?d.join(" "):d}`)},u=d=>{console.error(`${a} ${d}`)},f=[],m=d=>{f.includes(d)||(f.push(d),h(d))},x=(d,p)=>{m(`"${d}" is deprecated and will be removed in the next major release. Please use "${p}" instead.`)},g=d=>typeof d=="function"?d():d,_=d=>d&&typeof d.toPromise=="function",w=d=>_(d)?d.toPromise():Promise.resolve(d),b=d=>d&&Promise.resolve(d)===d,v=()=>document.body.querySelector(`.${s.container}`),T=d=>{const p=v();return p?p.querySelector(d):null},S=d=>T(`.${d}`),A=()=>S(s.popup),z=()=>S(s.icon),M=()=>S(s["icon-content"]),C=()=>S(s.title),F=()=>S(s["html-container"]),Y=()=>S(s.image),J=()=>S(s["progress-steps"]),N=()=>S(s["validation-message"]),D=()=>T(`.${s.actions} .${s.confirm}`),O=()=>T(`.${s.actions} .${s.cancel}`),j=()=>T(`.${s.actions} .${s.deny}`),V=()=>S(s["input-label"]),U=()=>T(`.${s.loader}`),W=()=>S(s.actions),K=()=>S(s.footer),oe=()=>S(s["timer-progress-bar"]),H=()=>S(s.close),ie=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,re=()=>{const d=Array.from(A().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((y,I)=>{const Q=parseInt(y.getAttribute("tabindex")),Ae=parseInt(I.getAttribute("tabindex"));return Q>Ae?1:Q<Ae?-1:0}),p=Array.from(A().querySelectorAll(ie)).filter(y=>y.getAttribute("tabindex")!=="-1");return l(d.concat(p)).filter(y=>Z(y))},G=()=>xe(document.body,s.shown)&&!xe(document.body,s["toast-shown"])&&!xe(document.body,s["no-backdrop"]),me=()=>A()&&xe(A(),s.toast),ge=()=>A().hasAttribute("data-loading"),pe={previousBodyPadding:null},le=(d,p)=>{if(d.textContent="",p){const I=new DOMParser().parseFromString(p,"text/html");Array.from(I.querySelector("head").childNodes).forEach(Q=>{d.appendChild(Q)}),Array.from(I.querySelector("body").childNodes).forEach(Q=>{Q instanceof HTMLVideoElement||Q instanceof HTMLAudioElement?d.appendChild(Q.cloneNode(!0)):d.appendChild(Q)})}},xe=(d,p)=>{if(!p)return!1;const y=p.split(/\s+/);for(let I=0;I<y.length;I++)if(!d.classList.contains(y[I]))return!1;return!0},De=(d,p)=>{Array.from(d.classList).forEach(y=>{!Object.values(s).includes(y)&&!Object.values(o).includes(y)&&!Object.values(p.showClass).includes(y)&&d.classList.remove(y)})},Ee=(d,p,y)=>{if(De(d,p),p.customClass&&p.customClass[y]){if(typeof p.customClass[y]!="string"&&!p.customClass[y].forEach){h(`Invalid type of customClass.${y}! Expected string or iterable object, got "${typeof p.customClass[y]}"`);return}Ce(d,p.customClass[y])}},He=(d,p)=>{if(!p)return null;switch(p){case"select":case"textarea":case"file":return d.querySelector(`.${s.popup} > .${s[p]}`);case"checkbox":return d.querySelector(`.${s.popup} > .${s.checkbox} input`);case"radio":return d.querySelector(`.${s.popup} > .${s.radio} input:checked`)||d.querySelector(`.${s.popup} > .${s.radio} input:first-child`);case"range":return d.querySelector(`.${s.popup} > .${s.range} input`);default:return d.querySelector(`.${s.popup} > .${s.input}`)}},yt=d=>{if(d.focus(),d.type!=="file"){const p=d.value;d.value="",d.value=p}},Ct=(d,p,y)=>{!d||!p||(typeof p=="string"&&(p=p.split(/\s+/).filter(Boolean)),p.forEach(I=>{Array.isArray(d)?d.forEach(Q=>{y?Q.classList.add(I):Q.classList.remove(I)}):y?d.classList.add(I):d.classList.remove(I)}))},Ce=(d,p)=>{Ct(d,p,!0)},tt=(d,p)=>{Ct(d,p,!1)},$e=(d,p)=>{const y=Array.from(d.children);for(let I=0;I<y.length;I++){const Q=y[I];if(Q instanceof HTMLElement&&xe(Q,p))return Q}},Ze=(d,p,y)=>{y===`${parseInt(y)}`&&(y=parseInt(y)),y||parseInt(y)===0?d.style[p]=typeof y=="number"?`${y}px`:y:d.style.removeProperty(p)},Je=function(d){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";d.style.display=p},Ke=d=>{d.style.display="none"},R=(d,p,y,I)=>{const Q=d.querySelector(p);Q&&(Q.style[y]=I)},E=function(d,p){let y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";p?Je(d,y):Ke(d)},Z=d=>!!(d&&(d.offsetWidth||d.offsetHeight||d.getClientRects().length)),ue=()=>!Z(D())&&!Z(j())&&!Z(O()),ce=d=>d.scrollHeight>d.clientHeight,_e=d=>{const p=window.getComputedStyle(d),y=parseFloat(p.getPropertyValue("animation-duration")||"0"),I=parseFloat(p.getPropertyValue("transition-duration")||"0");return y>0||I>0},be=function(d){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const y=oe();Z(y)&&(p&&(y.style.transition="none",y.style.width="100%"),setTimeout(()=>{y.style.transition=`width ${d/1e3}s linear`,y.style.width="0%"},10))},k=()=>{const d=oe(),p=parseInt(window.getComputedStyle(d).width);d.style.removeProperty("transition"),d.style.width="100%";const y=parseInt(window.getComputedStyle(d).width),I=p/y*100;d.style.width=`${I}%`},X=100,se={},he=()=>{se.previousActiveElement instanceof HTMLElement?(se.previousActiveElement.focus(),se.previousActiveElement=null):document.body&&document.body.focus()},we=d=>new Promise(p=>{if(!d)return p();const y=window.scrollX,I=window.scrollY;se.restoreFocusTimeout=setTimeout(()=>{he(),p()},X),window.scrollTo(y,I)}),Me=()=>typeof window>"u"||typeof document>"u",Se=`
 <div aria-labelledby="${s.title}" aria-describedby="${s["html-container"]}" class="${s.popup}" tabindex="-1">
   <button type="button" class="${s.close}"></button>
   <ul class="${s["progress-steps"]}"></ul>
   <div class="${s.icon}"></div>
   <img class="${s.image}" />
   <h2 class="${s.title}" id="${s.title}"></h2>
   <div class="${s["html-container"]}" id="${s["html-container"]}"></div>
   <input class="${s.input}" />
   <input type="file" class="${s.file}" />
   <div class="${s.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${s.select}"></select>
   <div class="${s.radio}"></div>
   <label for="${s.checkbox}" class="${s.checkbox}">
     <input type="checkbox" />
     <span class="${s.label}"></span>
   </label>
   <textarea class="${s.textarea}"></textarea>
   <div class="${s["validation-message"]}" id="${s["validation-message"]}"></div>
   <div class="${s.actions}">
     <div class="${s.loader}"></div>
     <button type="button" class="${s.confirm}"></button>
     <button type="button" class="${s.deny}"></button>
     <button type="button" class="${s.cancel}"></button>
   </div>
   <div class="${s.footer}"></div>
   <div class="${s["timer-progress-bar-container"]}">
     <div class="${s["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Ge=()=>{const d=v();return d?(d.remove(),tt([document.documentElement,document.body],[s["no-backdrop"],s["toast-shown"],s["has-column"]]),!0):!1},ke=()=>{se.currentInstance.resetValidationMessage()},Qe=()=>{const d=A(),p=$e(d,s.input),y=$e(d,s.file),I=d.querySelector(`.${s.range} input`),Q=d.querySelector(`.${s.range} output`),Ae=$e(d,s.select),at=d.querySelector(`.${s.checkbox} input`),en=$e(d,s.textarea);p.oninput=ke,y.onchange=ke,Ae.onchange=ke,at.onchange=ke,en.oninput=ke,I.oninput=()=>{ke(),Q.value=I.value},I.onchange=()=>{ke(),Q.value=I.value}},B=d=>typeof d=="string"?document.querySelector(d):d,te=d=>{const p=A();p.setAttribute("role",d.toast?"alert":"dialog"),p.setAttribute("aria-live",d.toast?"polite":"assertive"),d.toast||p.setAttribute("aria-modal","true")},ae=d=>{window.getComputedStyle(d).direction==="rtl"&&Ce(v(),s.rtl)},ye=d=>{const p=Ge();if(Me()){u("SweetAlert2 requires document to initialize");return}const y=document.createElement("div");y.className=s.container,p&&Ce(y,s["no-transition"]),le(y,Se);const I=B(d.target);I.appendChild(y),te(d),ae(I),Qe()},ve=(d,p)=>{d instanceof HTMLElement?p.appendChild(d):typeof d=="object"?ot(d,p):d&&le(p,d)},ot=(d,p)=>{d.jquery?Mt(p,d):le(p,d.toString())},Mt=(d,p)=>{if(d.textContent="",0 in p)for(let y=0;y in p;y++)d.appendChild(p[y].cloneNode(!0));else d.appendChild(p.cloneNode(!0))},vt=(()=>{if(Me())return!1;const d=document.createElement("div"),p={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const y in p)if(Object.prototype.hasOwnProperty.call(p,y)&&typeof d.style[y]<"u")return p[y];return!1})(),ln=()=>{const d=document.createElement("div");d.className=s["scrollbar-measure"],document.body.appendChild(d);const p=d.getBoundingClientRect().width-d.clientWidth;return document.body.removeChild(d),p},dt=(d,p)=>{const y=W(),I=U();!p.showConfirmButton&&!p.showDenyButton&&!p.showCancelButton?Ke(y):Je(y),Ee(y,p,"actions"),Xt(y,I,p),le(I,p.loaderHtml),Ee(I,p,"loader")};function Xt(d,p,y){const I=D(),Q=j(),Ae=O();js(I,"confirm",y),js(Q,"deny",y),js(Ae,"cancel",y),cn(I,Q,Ae,y),y.reverseButtons&&(y.toast?(d.insertBefore(Ae,I),d.insertBefore(Q,I)):(d.insertBefore(Ae,p),d.insertBefore(Q,p),d.insertBefore(I,p)))}function cn(d,p,y,I){if(!I.buttonsStyling){tt([d,p,y],s.styled);return}Ce([d,p,y],s.styled),I.confirmButtonColor&&(d.style.backgroundColor=I.confirmButtonColor,Ce(d,s["default-outline"])),I.denyButtonColor&&(p.style.backgroundColor=I.denyButtonColor,Ce(p,s["default-outline"])),I.cancelButtonColor&&(y.style.backgroundColor=I.cancelButtonColor,Ce(y,s["default-outline"]))}function js(d,p,y){E(d,y[`show${c(p)}Button`],"inline-block"),le(d,y[`${p}ButtonText`]),d.setAttribute("aria-label",y[`${p}ButtonAriaLabel`]),d.className=s[p],Ee(d,y,`${p}Button`),Ce(d,y[`${p}ButtonClass`])}const ya=(d,p)=>{const y=H();le(y,p.closeButtonHtml),Ee(y,p,"closeButton"),E(y,p.showCloseButton),y.setAttribute("aria-label",p.closeButtonAriaLabel)},va=(d,p)=>{const y=v();y&&(L(y,p.backdrop),$(y,p.position),ee(y,p.grow),Ee(y,p,"container"))};function L(d,p){typeof p=="string"?d.style.background=p:p||Ce([document.documentElement,document.body],s["no-backdrop"])}function $(d,p){p in s?Ce(d,s[p]):(h('The "position" parameter is not valid, defaulting to "center"'),Ce(d,s.center))}function ee(d,p){if(p&&typeof p=="string"){const y=`grow-${p}`;y in s&&Ce(d,s[y])}}const q=["input","file","range","select","radio","checkbox","textarea"],ne=(d,p)=>{const y=A(),I=t.innerParams.get(d),Q=!I||p.input!==I.input;q.forEach(Ae=>{const at=$e(y,s[Ae]);Oe(Ae,p.inputAttributes),at.className=s[Ae],Q&&Ke(at)}),p.input&&(Q&&Le(p),Ue(p))},Le=d=>{if(!nt[d.input]){u(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${d.input}"`);return}const p=We(d.input),y=nt[d.input](p,d);Je(p),d.inputAutoFocus&&setTimeout(()=>{yt(y)})},Ie=d=>{for(let p=0;p<d.attributes.length;p++){const y=d.attributes[p].name;["type","value","style"].includes(y)||d.removeAttribute(y)}},Oe=(d,p)=>{const y=He(A(),d);if(y){Ie(y);for(const I in p)y.setAttribute(I,p[I])}},Ue=d=>{const p=We(d.input);typeof d.customClass=="object"&&Ce(p,d.customClass.input)},Xe=(d,p)=>{(!d.placeholder||p.inputPlaceholder)&&(d.placeholder=p.inputPlaceholder)},ze=(d,p,y)=>{if(y.inputLabel){d.id=s.input;const I=document.createElement("label"),Q=s["input-label"];I.setAttribute("for",d.id),I.className=Q,typeof y.customClass=="object"&&Ce(I,y.customClass.inputLabel),I.innerText=y.inputLabel,p.insertAdjacentElement("beforebegin",I)}},We=d=>$e(A(),s[d]||s.input),ct=(d,p)=>{["string","number"].includes(typeof p)?d.value=`${p}`:b(p)||h(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof p}"`)},nt={};nt.text=nt.email=nt.password=nt.number=nt.tel=nt.url=(d,p)=>(ct(d,p.inputValue),ze(d,d,p),Xe(d,p),d.type=p.input,d),nt.file=(d,p)=>(ze(d,d,p),Xe(d,p),d),nt.range=(d,p)=>{const y=d.querySelector("input"),I=d.querySelector("output");return ct(y,p.inputValue),y.type=p.input,ct(I,p.inputValue),ze(y,d,p),d},nt.select=(d,p)=>{if(d.textContent="",p.inputPlaceholder){const y=document.createElement("option");le(y,p.inputPlaceholder),y.value="",y.disabled=!0,y.selected=!0,d.appendChild(y)}return ze(d,d,p),d},nt.radio=d=>(d.textContent="",d),nt.checkbox=(d,p)=>{const y=He(A(),"checkbox");y.value="1",y.id=s.checkbox,y.checked=Boolean(p.inputValue);const I=d.querySelector("span");return le(I,p.inputPlaceholder),y},nt.textarea=(d,p)=>{ct(d,p.inputValue),Xe(d,p),ze(d,d,p);const y=I=>parseInt(window.getComputedStyle(I).marginLeft)+parseInt(window.getComputedStyle(I).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const I=parseInt(window.getComputedStyle(A()).width),Q=()=>{const Ae=d.offsetWidth+y(d);Ae>I?A().style.width=`${Ae}px`:A().style.width=null};new MutationObserver(Q).observe(d,{attributes:!0,attributeFilter:["style"]})}}),d};const _n=(d,p)=>{const y=F();Ee(y,p,"htmlContainer"),p.html?(ve(p.html,y),Je(y,"block")):p.text?(y.textContent=p.text,Je(y,"block")):Ke(y),ne(d,p)},Un=(d,p)=>{const y=K();E(y,p.footer),p.footer&&ve(p.footer,y),Ee(y,p,"footer")},gt=(d,p)=>{const y=t.innerParams.get(d),I=z();if(y&&p.icon===y.icon){qs(I,p),je(I,p);return}if(!p.icon&&!p.iconHtml){Ke(I);return}if(p.icon&&Object.keys(o).indexOf(p.icon)===-1){u(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${p.icon}"`),Ke(I);return}Je(I),qs(I,p),je(I,p),Ce(I,p.showClass.icon)},je=(d,p)=>{for(const y in o)p.icon!==y&&tt(d,o[y]);Ce(d,o[p.icon]),wi(d,p),Xs(),Ee(d,p,"icon")},Xs=()=>{const d=A(),p=window.getComputedStyle(d).getPropertyValue("background-color"),y=d.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let I=0;I<y.length;I++)y[I].style.backgroundColor=p},St=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Vn=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,qs=(d,p)=>{let y=d.innerHTML,I;p.iconHtml?I=ns(p.iconHtml):p.icon==="success"?(I=St,y=y.replace(/ style=".*?"/g,"")):p.icon==="error"?I=Vn:I=ns({question:"?",warning:"!",info:"i"}[p.icon]),y.trim()!==I.trim()&&le(d,I)},wi=(d,p)=>{if(p.iconColor){d.style.color=p.iconColor,d.style.borderColor=p.iconColor;for(const y of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])R(d,y,"backgroundColor",p.iconColor);R(d,".swal2-success-ring","borderColor",p.iconColor)}},ns=d=>`<div class="${s["icon-content"]}">${d}</div>`,Rt=(d,p)=>{const y=Y();if(!p.imageUrl){Ke(y);return}Je(y,""),y.setAttribute("src",p.imageUrl),y.setAttribute("alt",p.imageAlt),Ze(y,"width",p.imageWidth),Ze(y,"height",p.imageHeight),y.className=s.image,Ee(y,p,"image")},Hn=(d,p)=>{const y=v(),I=A();p.toast?(Ze(y,"width",p.width),I.style.width="100%",I.insertBefore(U(),z())):Ze(I,"width",p.width),Ze(I,"padding",p.padding),p.color&&(I.style.color=p.color),p.background&&(I.style.background=p.background),Ke(N()),$s(I,p)},$s=(d,p)=>{d.className=`${s.popup} ${Z(d)?p.showClass.popup:""}`,p.toast?(Ce([document.documentElement,document.body],s["toast-shown"]),Ce(d,s.toast)):Ce(d,s.modal),Ee(d,p,"popup"),typeof p.customClass=="string"&&Ce(d,p.customClass),p.icon&&Ce(d,s[`icon-${p.icon}`])},Vt=(d,p)=>{const y=J();if(!p.progressSteps||p.progressSteps.length===0){Ke(y);return}Je(y),y.textContent="",p.currentProgressStep>=p.progressSteps.length&&h("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),p.progressSteps.forEach((I,Q)=>{const Ae=Ys(I);if(y.appendChild(Ae),Q===p.currentProgressStep&&Ce(Ae,s["active-progress-step"]),Q!==p.progressSteps.length-1){const at=wa(p);y.appendChild(at)}})},Ys=d=>{const p=document.createElement("li");return Ce(p,s["progress-step"]),le(p,d),p},wa=d=>{const p=document.createElement("li");return Ce(p,s["progress-step-line"]),d.progressStepsDistance&&Ze(p,"width",d.progressStepsDistance),p},$r=(d,p)=>{const y=C();E(y,p.title||p.titleText,"block"),p.title&&ve(p.title,y),p.titleText&&(y.innerText=p.titleText),Ee(y,p,"title")},Fu=(d,p)=>{Hn(d,p),va(d,p),Vt(d,p),gt(d,p),Rt(d,p),$r(d,p),ya(d,p),_n(d,p),dt(d,p),Un(d,p),typeof p.didRender=="function"&&p.didRender(A())};function ku(){const d=t.innerParams.get(this);if(!d)return;const p=t.domCache.get(this);Ke(p.loader),me()?d.icon&&Je(z()):tx(p),tt([p.popup,p.actions],s.loading),p.popup.removeAttribute("aria-busy"),p.popup.removeAttribute("data-loading"),p.confirmButton.disabled=!1,p.denyButton.disabled=!1,p.cancelButton.disabled=!1}const tx=d=>{const p=d.popup.getElementsByClassName(d.loader.getAttribute("data-button-to-replace"));p.length?Je(p[0],"inline-block"):ue()&&Ke(d.actions)};function nx(d){const p=t.innerParams.get(d||this),y=t.domCache.get(d||this);return y?He(y.popup,p.input):null}const ix=()=>Z(A()),Ou=()=>D()&&D().click(),sx=()=>j()&&j().click(),rx=()=>O()&&O().click(),is=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),zu=d=>{d.keydownTarget&&d.keydownHandlerAdded&&(d.keydownTarget.removeEventListener("keydown",d.keydownHandler,{capture:d.keydownListenerCapture}),d.keydownHandlerAdded=!1)},ox=(d,p,y,I)=>{zu(p),y.toast||(p.keydownHandler=Q=>lx(d,Q,I),p.keydownTarget=y.keydownListenerCapture?window:A(),p.keydownListenerCapture=y.keydownListenerCapture,p.keydownTarget.addEventListener("keydown",p.keydownHandler,{capture:p.keydownListenerCapture}),p.keydownHandlerAdded=!0)},ba=(d,p)=>{const y=re();if(y.length){d=d+p,d===y.length?d=0:d===-1&&(d=y.length-1),y[d].focus();return}A().focus()},Nu=["ArrowRight","ArrowDown"],ax=["ArrowLeft","ArrowUp"],lx=(d,p,y)=>{const I=t.innerParams.get(d);I&&(p.isComposing||p.keyCode===229||(I.stopKeydownPropagation&&p.stopPropagation(),p.key==="Enter"?cx(d,p,I):p.key==="Tab"?ux(p):[...Nu,...ax].includes(p.key)?hx(p.key):p.key==="Escape"&&dx(p,I,y)))},cx=(d,p,y)=>{if(g(y.allowEnterKey)&&p.target&&d.getInput()&&p.target instanceof HTMLElement&&p.target.outerHTML===d.getInput().outerHTML){if(["textarea","file"].includes(y.input))return;Ou(),p.preventDefault()}},ux=d=>{const p=d.target,y=re();let I=-1;for(let Q=0;Q<y.length;Q++)if(p===y[Q]){I=Q;break}d.shiftKey?ba(I,-1):ba(I,1),d.stopPropagation(),d.preventDefault()},hx=d=>{const p=D(),y=j(),I=O(),Q=[p,y,I];if(document.activeElement instanceof HTMLElement&&!Q.includes(document.activeElement))return;const Ae=Nu.includes(d)?"nextElementSibling":"previousElementSibling";let at=document.activeElement;for(let en=0;en<W().children.length;en++){if(at=at[Ae],!at)return;if(at instanceof HTMLButtonElement&&Z(at))break}at instanceof HTMLButtonElement&&at.focus()},dx=(d,p,y)=>{g(p.allowEscapeKey)&&(d.preventDefault(),y(is.esc))};var Zs={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const fx=()=>{Array.from(document.body.children).forEach(p=>{p===v()||p.contains(v())||(p.hasAttribute("aria-hidden")&&p.setAttribute("data-previous-aria-hidden",p.getAttribute("aria-hidden")),p.setAttribute("aria-hidden","true"))})},Bu=()=>{Array.from(document.body.children).forEach(p=>{p.hasAttribute("data-previous-aria-hidden")?(p.setAttribute("aria-hidden",p.getAttribute("data-previous-aria-hidden")),p.removeAttribute("data-previous-aria-hidden")):p.removeAttribute("aria-hidden")})},px=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!xe(document.body,s.iosfix)){const p=document.body.scrollTop;document.body.style.top=`${p*-1}px`,Ce(document.body,s.iosfix),gx(),mx()}},mx=()=>{const d=navigator.userAgent,p=!!d.match(/iPad/i)||!!d.match(/iPhone/i),y=!!d.match(/WebKit/i);p&&y&&!d.match(/CriOS/i)&&A().scrollHeight>window.innerHeight-44&&(v().style.paddingBottom=`${44}px`)},gx=()=>{const d=v();let p;d.ontouchstart=y=>{p=_x(y)},d.ontouchmove=y=>{p&&(y.preventDefault(),y.stopPropagation())}},_x=d=>{const p=d.target,y=v();return xx(d)||yx(d)?!1:p===y||!ce(y)&&p instanceof HTMLElement&&p.tagName!=="INPUT"&&p.tagName!=="TEXTAREA"&&!(ce(F())&&F().contains(p))},xx=d=>d.touches&&d.touches.length&&d.touches[0].touchType==="stylus",yx=d=>d.touches&&d.touches.length>1,vx=()=>{if(xe(document.body,s.iosfix)){const d=parseInt(document.body.style.top,10);tt(document.body,s.iosfix),document.body.style.top="",document.body.scrollTop=d*-1}},wx=()=>{pe.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(pe.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${pe.previousBodyPadding+ln()}px`)},bx=()=>{pe.previousBodyPadding!==null&&(document.body.style.paddingRight=`${pe.previousBodyPadding}px`,pe.previousBodyPadding=null)};function Uu(d,p,y,I){me()?Vu(d,I):(we(y).then(()=>Vu(d,I)),zu(se)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(p.setAttribute("style","display:none !important"),p.removeAttribute("class"),p.innerHTML=""):p.remove(),G()&&(bx(),vx(),Bu()),Mx()}function Mx(){tt([document.documentElement,document.body],[s.shown,s["height-auto"],s["no-backdrop"],s["toast-shown"]])}function Yr(d){d=Ax(d);const p=Zs.swalPromiseResolve.get(this),y=Tx(this);this.isAwaitingPromise()?d.isDismissed||(Ks(this),p(d)):y&&p(d)}function Sx(){return!!t.awaitingPromise.get(this)}const Tx=d=>{const p=A();if(!p)return!1;const y=t.innerParams.get(d);if(!y||xe(p,y.hideClass.popup))return!1;tt(p,y.showClass.popup),Ce(p,y.hideClass.popup);const I=v();return tt(I,y.showClass.backdrop),Ce(I,y.hideClass.backdrop),Cx(d,p,y),!0};function Ex(d){const p=Zs.swalPromiseReject.get(this);Ks(this),p&&p(d)}const Ks=d=>{d.isAwaitingPromise()&&(t.awaitingPromise.delete(d),t.innerParams.get(d)||d._destroy())},Ax=d=>typeof d>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},d),Cx=(d,p,y)=>{const I=v(),Q=vt&&_e(p);typeof y.willClose=="function"&&y.willClose(p),Q?Lx(d,p,I,y.returnFocus,y.didClose):Uu(d,I,y.returnFocus,y.didClose)},Lx=(d,p,y,I,Q)=>{se.swalCloseEventFinishedCallback=Uu.bind(null,d,y,I,Q),p.addEventListener(vt,function(Ae){Ae.target===p&&(se.swalCloseEventFinishedCallback(),delete se.swalCloseEventFinishedCallback)})},Vu=(d,p)=>{setTimeout(()=>{typeof p=="function"&&p.bind(d.params)(),d._destroy()})};function Hu(d,p,y){const I=t.domCache.get(d);p.forEach(Q=>{I[Q].disabled=y})}function Gu(d,p){if(d)if(d.type==="radio"){const I=d.parentNode.parentNode.querySelectorAll("input");for(let Q=0;Q<I.length;Q++)I[Q].disabled=p}else d.disabled=p}function Px(){Hu(this,["confirmButton","denyButton","cancelButton"],!1)}function Dx(){Hu(this,["confirmButton","denyButton","cancelButton"],!0)}function Rx(){Gu(this.getInput(),!1)}function Ix(){Gu(this.getInput(),!0)}function Fx(d){const p=t.domCache.get(this),y=t.innerParams.get(this);le(p.validationMessage,d),p.validationMessage.className=s["validation-message"],y.customClass&&y.customClass.validationMessage&&Ce(p.validationMessage,y.customClass.validationMessage),Je(p.validationMessage);const I=this.getInput();I&&(I.setAttribute("aria-invalid",!0),I.setAttribute("aria-describedby",s["validation-message"]),yt(I),Ce(I,s.inputerror))}function kx(){const d=t.domCache.get(this);d.validationMessage&&Ke(d.validationMessage);const p=this.getInput();p&&(p.removeAttribute("aria-invalid"),p.removeAttribute("aria-describedby"),tt(p,s.inputerror))}const ss={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Ox=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],zx={},Nx=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Wu=d=>Object.prototype.hasOwnProperty.call(ss,d),ju=d=>Ox.indexOf(d)!==-1,Ma=d=>zx[d],Bx=d=>{Wu(d)||h(`Unknown parameter "${d}"`)},Ux=d=>{Nx.includes(d)&&h(`The parameter "${d}" is incompatible with toasts`)},Vx=d=>{Ma(d)&&x(d,Ma(d))},Hx=d=>{d.backdrop===!1&&d.allowOutsideClick&&h('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const p in d)Bx(p),d.toast&&Ux(p),Vx(p)};function Gx(d){const p=A(),y=t.innerParams.get(this);if(!p||xe(p,y.hideClass.popup)){h("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const I=Wx(d),Q=Object.assign({},y,I);Fu(this,Q),t.innerParams.set(this,Q),Object.defineProperties(this,{params:{value:Object.assign({},this.params,d),writable:!1,enumerable:!0}})}const Wx=d=>{const p={};return Object.keys(d).forEach(y=>{ju(y)?p[y]=d[y]:h(`Invalid parameter to update: ${y}`)}),p};function jx(){const d=t.domCache.get(this),p=t.innerParams.get(this);if(!p){Xu(this);return}d.popup&&se.swalCloseEventFinishedCallback&&(se.swalCloseEventFinishedCallback(),delete se.swalCloseEventFinishedCallback),typeof p.didDestroy=="function"&&p.didDestroy(),Xx(this)}const Xx=d=>{Xu(d),delete d.params,delete se.keydownHandler,delete se.keydownTarget,delete se.currentInstance},Xu=d=>{d.isAwaitingPromise()?(Sa(t,d),t.awaitingPromise.set(d,!0)):(Sa(Zs,d),Sa(t,d))},Sa=(d,p)=>{for(const y in d)d[y].delete(p)};var qu=Object.freeze({__proto__:null,_destroy:jx,close:Yr,closeModal:Yr,closePopup:Yr,closeToast:Yr,disableButtons:Dx,disableInput:Ix,disableLoading:ku,enableButtons:Px,enableInput:Rx,getInput:nx,handleAwaitingPromise:Ks,hideLoading:ku,isAwaitingPromise:Sx,rejectPromise:Ex,resetValidationMessage:kx,showValidationMessage:Fx,update:Gx});const rs=d=>{let p=A();p||new Kr,p=A();const y=U();me()?Ke(z()):qx(p,d),Je(y),p.setAttribute("data-loading","true"),p.setAttribute("aria-busy","true"),p.focus()},qx=(d,p)=>{const y=W(),I=U();!p&&Z(D())&&(p=D()),Je(y),p&&(Ke(p),I.setAttribute("data-button-to-replace",p.className)),I.parentNode.insertBefore(I,p),Ce([d,y],s.loading)},$x=(d,p)=>{p.input==="select"||p.input==="radio"?Qx(d,p):["text","email","number","tel","textarea"].includes(p.input)&&(_(p.inputValue)||b(p.inputValue))&&(rs(D()),ey(d,p))},Yx=(d,p)=>{const y=d.getInput();if(!y)return null;switch(p.input){case"checkbox":return Zx(y);case"radio":return Kx(y);case"file":return Jx(y);default:return p.inputAutoTrim?y.value.trim():y.value}},Zx=d=>d.checked?1:0,Kx=d=>d.checked?d.value:null,Jx=d=>d.files.length?d.getAttribute("multiple")!==null?d.files:d.files[0]:null,Qx=(d,p)=>{const y=A(),I=Q=>{ty[p.input](y,Ta(Q),p)};_(p.inputOptions)||b(p.inputOptions)?(rs(D()),w(p.inputOptions).then(Q=>{d.hideLoading(),I(Q)})):typeof p.inputOptions=="object"?I(p.inputOptions):u(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof p.inputOptions}`)},ey=(d,p)=>{const y=d.getInput();Ke(y),w(p.inputValue).then(I=>{y.value=p.input==="number"?`${parseFloat(I)||0}`:`${I}`,Je(y),y.focus(),d.hideLoading()}).catch(I=>{u(`Error in inputValue promise: ${I}`),y.value="",Je(y),y.focus(),d.hideLoading()})},ty={select:(d,p,y)=>{const I=$e(d,s.select),Q=(Ae,at,en)=>{const Ht=document.createElement("option");Ht.value=en,le(Ht,at),Ht.selected=$u(en,y.inputValue),Ae.appendChild(Ht)};p.forEach(Ae=>{const at=Ae[0],en=Ae[1];if(Array.isArray(en)){const Ht=document.createElement("optgroup");Ht.label=at,Ht.disabled=!1,I.appendChild(Ht),en.forEach(as=>Q(Ht,as[1],as[0]))}else Q(I,en,at)}),I.focus()},radio:(d,p,y)=>{const I=$e(d,s.radio);p.forEach(Ae=>{const at=Ae[0],en=Ae[1],Ht=document.createElement("input"),as=document.createElement("label");Ht.type="radio",Ht.name=s.radio,Ht.value=at,$u(at,y.inputValue)&&(Ht.checked=!0);const La=document.createElement("span");le(La,en),La.className=s.label,as.appendChild(Ht),as.appendChild(La),I.appendChild(as)});const Q=I.querySelectorAll("input");Q.length&&Q[0].focus()}},Ta=d=>{const p=[];return typeof Map<"u"&&d instanceof Map?d.forEach((y,I)=>{let Q=y;typeof Q=="object"&&(Q=Ta(Q)),p.push([I,Q])}):Object.keys(d).forEach(y=>{let I=d[y];typeof I=="object"&&(I=Ta(I)),p.push([y,I])}),p},$u=(d,p)=>p&&p.toString()===d.toString(),ny=d=>{const p=t.innerParams.get(d);d.disableButtons(),p.input?Yu(d,"confirm"):Aa(d,!0)},iy=d=>{const p=t.innerParams.get(d);d.disableButtons(),p.returnInputValueOnDeny?Yu(d,"deny"):Ea(d,!1)},sy=(d,p)=>{d.disableButtons(),p(is.cancel)},Yu=(d,p)=>{const y=t.innerParams.get(d);if(!y.input){u(`The "input" parameter is needed to be set when using returnInputValueOn${c(p)}`);return}const I=Yx(d,y);y.inputValidator?ry(d,I,p):d.getInput().checkValidity()?p==="deny"?Ea(d,I):Aa(d,I):(d.enableButtons(),d.showValidationMessage(y.validationMessage))},ry=(d,p,y)=>{const I=t.innerParams.get(d);d.disableInput(),Promise.resolve().then(()=>w(I.inputValidator(p,I.validationMessage))).then(Ae=>{d.enableButtons(),d.enableInput(),Ae?d.showValidationMessage(Ae):y==="deny"?Ea(d,p):Aa(d,p)})},Ea=(d,p)=>{const y=t.innerParams.get(d||void 0);y.showLoaderOnDeny&&rs(j()),y.preDeny?(t.awaitingPromise.set(d||void 0,!0),Promise.resolve().then(()=>w(y.preDeny(p,y.validationMessage))).then(Q=>{Q===!1?(d.hideLoading(),Ks(d)):d.close({isDenied:!0,value:typeof Q>"u"?p:Q})}).catch(Q=>Ku(d||void 0,Q))):d.close({isDenied:!0,value:p})},Zu=(d,p)=>{d.close({isConfirmed:!0,value:p})},Ku=(d,p)=>{d.rejectPromise(p)},Aa=(d,p)=>{const y=t.innerParams.get(d||void 0);y.showLoaderOnConfirm&&rs(),y.preConfirm?(d.resetValidationMessage(),t.awaitingPromise.set(d||void 0,!0),Promise.resolve().then(()=>w(y.preConfirm(p,y.validationMessage))).then(Q=>{Z(N())||Q===!1?(d.hideLoading(),Ks(d)):Zu(d,typeof Q>"u"?p:Q)}).catch(Q=>Ku(d||void 0,Q))):Zu(d,p)},oy=(d,p,y)=>{t.innerParams.get(d).toast?ay(d,p,y):(cy(p),uy(p),hy(d,p,y))},ay=(d,p,y)=>{p.popup.onclick=()=>{const I=t.innerParams.get(d);I&&(ly(I)||I.timer||I.input)||y(is.close)}},ly=d=>d.showConfirmButton||d.showDenyButton||d.showCancelButton||d.showCloseButton;let Zr=!1;const cy=d=>{d.popup.onmousedown=()=>{d.container.onmouseup=function(p){d.container.onmouseup=void 0,p.target===d.container&&(Zr=!0)}}},uy=d=>{d.container.onmousedown=()=>{d.popup.onmouseup=function(p){d.popup.onmouseup=void 0,(p.target===d.popup||d.popup.contains(p.target))&&(Zr=!0)}}},hy=(d,p,y)=>{p.container.onclick=I=>{const Q=t.innerParams.get(d);if(Zr){Zr=!1;return}I.target===p.container&&g(Q.allowOutsideClick)&&y(is.backdrop)}},dy=d=>typeof d=="object"&&d.jquery,Ju=d=>d instanceof Element||dy(d),fy=d=>{const p={};return typeof d[0]=="object"&&!Ju(d[0])?Object.assign(p,d[0]):["title","html","icon"].forEach((y,I)=>{const Q=d[I];typeof Q=="string"||Ju(Q)?p[y]=Q:Q!==void 0&&u(`Unexpected type of ${y}! Expected "string" or "Element", got ${typeof Q}`)}),p};function py(){const d=this;for(var p=arguments.length,y=new Array(p),I=0;I<p;I++)y[I]=arguments[I];return new d(...y)}function my(d){class p extends this{_main(I,Q){return super._main(I,Object.assign({},d,Q))}}return p}const gy=()=>se.timeout&&se.timeout.getTimerLeft(),Qu=()=>{if(se.timeout)return k(),se.timeout.stop()},eh=()=>{if(se.timeout){const d=se.timeout.start();return be(d),d}},_y=()=>{const d=se.timeout;return d&&(d.running?Qu():eh())},xy=d=>{if(se.timeout){const p=se.timeout.increase(d);return be(p,!0),p}},yy=()=>se.timeout&&se.timeout.isRunning();let th=!1;const Ca={};function vy(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Ca[d]=this,th||(document.body.addEventListener("click",wy),th=!0)}const wy=d=>{for(let p=d.target;p&&p!==document;p=p.parentNode)for(const y in Ca){const I=p.getAttribute(y);if(I){Ca[y].fire({template:I});return}}};var by=Object.freeze({__proto__:null,argsToParams:fy,bindClickHandler:vy,clickCancel:rx,clickConfirm:Ou,clickDeny:sx,enableLoading:rs,fire:py,getActions:W,getCancelButton:O,getCloseButton:H,getConfirmButton:D,getContainer:v,getDenyButton:j,getFocusableElements:re,getFooter:K,getHtmlContainer:F,getIcon:z,getIconContent:M,getImage:Y,getInputLabel:V,getLoader:U,getPopup:A,getProgressSteps:J,getTimerLeft:gy,getTimerProgressBar:oe,getTitle:C,getValidationMessage:N,increaseTimer:xy,isDeprecatedParameter:Ma,isLoading:ge,isTimerRunning:yy,isUpdatableParameter:ju,isValidParameter:Wu,isVisible:ix,mixin:my,resumeTimer:eh,showLoading:rs,stopTimer:Qu,toggleTimer:_y});class My{constructor(p,y){this.callback=p,this.remaining=y,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(p){const y=this.running;return y&&this.stop(),this.remaining+=p,y&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const nh=["swal-title","swal-html","swal-footer"],Sy=d=>{const p=typeof d.template=="string"?document.querySelector(d.template):d.template;if(!p)return{};const y=p.content;return Ry(y),Object.assign(Ty(y),Ey(y),Ay(y),Cy(y),Ly(y),Py(y),Dy(y,nh))},Ty=d=>{const p={};return Array.from(d.querySelectorAll("swal-param")).forEach(I=>{bi(I,["name","value"]);const Q=I.getAttribute("name"),Ae=I.getAttribute("value");typeof ss[Q]=="boolean"?p[Q]=Ae!=="false":typeof ss[Q]=="object"?p[Q]=JSON.parse(Ae):p[Q]=Ae}),p},Ey=d=>{const p={};return Array.from(d.querySelectorAll("swal-function-param")).forEach(I=>{const Q=I.getAttribute("name"),Ae=I.getAttribute("value");p[Q]=new Function(`return ${Ae}`)()}),p},Ay=d=>{const p={};return Array.from(d.querySelectorAll("swal-button")).forEach(I=>{bi(I,["type","color","aria-label"]);const Q=I.getAttribute("type");p[`${Q}ButtonText`]=I.innerHTML,p[`show${c(Q)}Button`]=!0,I.hasAttribute("color")&&(p[`${Q}ButtonColor`]=I.getAttribute("color")),I.hasAttribute("aria-label")&&(p[`${Q}ButtonAriaLabel`]=I.getAttribute("aria-label"))}),p},Cy=d=>{const p={},y=d.querySelector("swal-image");return y&&(bi(y,["src","width","height","alt"]),y.hasAttribute("src")&&(p.imageUrl=y.getAttribute("src")),y.hasAttribute("width")&&(p.imageWidth=y.getAttribute("width")),y.hasAttribute("height")&&(p.imageHeight=y.getAttribute("height")),y.hasAttribute("alt")&&(p.imageAlt=y.getAttribute("alt"))),p},Ly=d=>{const p={},y=d.querySelector("swal-icon");return y&&(bi(y,["type","color"]),y.hasAttribute("type")&&(p.icon=y.getAttribute("type")),y.hasAttribute("color")&&(p.iconColor=y.getAttribute("color")),p.iconHtml=y.innerHTML),p},Py=d=>{const p={},y=d.querySelector("swal-input");y&&(bi(y,["type","label","placeholder","value"]),p.input=y.getAttribute("type")||"text",y.hasAttribute("label")&&(p.inputLabel=y.getAttribute("label")),y.hasAttribute("placeholder")&&(p.inputPlaceholder=y.getAttribute("placeholder")),y.hasAttribute("value")&&(p.inputValue=y.getAttribute("value")));const I=Array.from(d.querySelectorAll("swal-input-option"));return I.length&&(p.inputOptions={},I.forEach(Q=>{bi(Q,["value"]);const Ae=Q.getAttribute("value"),at=Q.innerHTML;p.inputOptions[Ae]=at})),p},Dy=(d,p)=>{const y={};for(const I in p){const Q=p[I],Ae=d.querySelector(Q);Ae&&(bi(Ae,[]),y[Q.replace(/^swal-/,"")]=Ae.innerHTML.trim())}return y},Ry=d=>{const p=nh.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(d.children).forEach(y=>{const I=y.tagName.toLowerCase();p.includes(I)||h(`Unrecognized element <${I}>`)})},bi=(d,p)=>{Array.from(d.attributes).forEach(y=>{p.indexOf(y.name)===-1&&h([`Unrecognized attribute "${y.name}" on <${d.tagName.toLowerCase()}>.`,`${p.length?`Allowed attributes are: ${p.join(", ")}`:"To set the value, use HTML within the element."}`])})},ih=10,Iy=d=>{const p=v(),y=A();typeof d.willOpen=="function"&&d.willOpen(y);const Q=window.getComputedStyle(document.body).overflowY;Oy(p,y,d),setTimeout(()=>{Fy(p,y)},ih),G()&&(ky(p,d.scrollbarPadding,Q),fx()),!me()&&!se.previousActiveElement&&(se.previousActiveElement=document.activeElement),typeof d.didOpen=="function"&&setTimeout(()=>d.didOpen(y)),tt(p,s["no-transition"])},sh=d=>{const p=A();if(d.target!==p)return;const y=v();p.removeEventListener(vt,sh),y.style.overflowY="auto"},Fy=(d,p)=>{vt&&_e(p)?(d.style.overflowY="hidden",p.addEventListener(vt,sh)):d.style.overflowY="auto"},ky=(d,p,y)=>{px(),p&&y!=="hidden"&&wx(),setTimeout(()=>{d.scrollTop=0})},Oy=(d,p,y)=>{Ce(d,y.showClass.backdrop),p.style.setProperty("opacity","0","important"),Je(p,"grid"),setTimeout(()=>{Ce(p,y.showClass.popup),p.style.removeProperty("opacity")},ih),Ce([document.documentElement,document.body],s.shown),y.heightAuto&&y.backdrop&&!y.toast&&Ce([document.documentElement,document.body],s["height-auto"])};var rh={email:(d,p)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(d)?Promise.resolve():Promise.resolve(p||"Invalid email address"),url:(d,p)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(d)?Promise.resolve():Promise.resolve(p||"Invalid URL")};function zy(d){d.inputValidator||Object.keys(rh).forEach(p=>{d.input===p&&(d.inputValidator=rh[p])})}function Ny(d){(!d.target||typeof d.target=="string"&&!document.querySelector(d.target)||typeof d.target!="string"&&!d.target.appendChild)&&(h('Target parameter is not valid, defaulting to "body"'),d.target="body")}function By(d){zy(d),d.showLoaderOnConfirm&&!d.preConfirm&&h(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Ny(d),typeof d.title=="string"&&(d.title=d.title.split(`
`).join("<br />")),ye(d)}let En;class os{constructor(){if(typeof window>"u")return;En=this;for(var p=arguments.length,y=new Array(p),I=0;I<p;I++)y[I]=arguments[I];const Q=Object.freeze(this.constructor.argsToParams(y));Object.defineProperties(this,{params:{value:Q,writable:!1,enumerable:!0,configurable:!0}});const Ae=En._main(En.params);t.promise.set(this,Ae)}_main(p){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Hx(Object.assign({},y,p)),se.currentInstance&&(se.currentInstance._destroy(),G()&&Bu()),se.currentInstance=En;const I=Vy(p,y);By(I),Object.freeze(I),se.timeout&&(se.timeout.stop(),delete se.timeout),clearTimeout(se.restoreFocusTimeout);const Q=Hy(En);return Fu(En,I),t.innerParams.set(En,I),Uy(En,Q,I)}then(p){return t.promise.get(this).then(p)}finally(p){return t.promise.get(this).finally(p)}}const Uy=(d,p,y)=>new Promise((I,Q)=>{const Ae=at=>{d.close({isDismissed:!0,dismiss:at})};Zs.swalPromiseResolve.set(d,I),Zs.swalPromiseReject.set(d,Q),p.confirmButton.onclick=()=>{ny(d)},p.denyButton.onclick=()=>{iy(d)},p.cancelButton.onclick=()=>{sy(d,Ae)},p.closeButton.onclick=()=>{Ae(is.close)},oy(d,p,Ae),ox(d,se,y,Ae),$x(d,y),Iy(y),Gy(se,y,Ae),Wy(p,y),setTimeout(()=>{p.container.scrollTop=0})}),Vy=(d,p)=>{const y=Sy(d),I=Object.assign({},ss,p,y,d);return I.showClass=Object.assign({},ss.showClass,I.showClass),I.hideClass=Object.assign({},ss.hideClass,I.hideClass),I},Hy=d=>{const p={popup:A(),container:v(),actions:W(),confirmButton:D(),denyButton:j(),cancelButton:O(),loader:U(),closeButton:H(),validationMessage:N(),progressSteps:J()};return t.domCache.set(d,p),p},Gy=(d,p,y)=>{const I=oe();Ke(I),p.timer&&(d.timeout=new My(()=>{y("timer"),delete d.timeout},p.timer),p.timerProgressBar&&(Je(I),Ee(I,p,"timerProgressBar"),setTimeout(()=>{d.timeout&&d.timeout.running&&be(p.timer)})))},Wy=(d,p)=>{if(!p.toast){if(!g(p.allowEnterKey)){Xy();return}jy(d,p)||ba(-1,1)}},jy=(d,p)=>p.focusDeny&&Z(d.denyButton)?(d.denyButton.focus(),!0):p.focusCancel&&Z(d.cancelButton)?(d.cancelButton.focus(),!0):p.focusConfirm&&Z(d.confirmButton)?(d.confirmButton.focus(),!0):!1,Xy=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const d=new Date,p=localStorage.getItem("swal-initiation");p?(d.getTime()-Date.parse(p))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const y=document.createElement("audio");y.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",y.loop=!0,document.body.appendChild(y),setTimeout(()=>{y.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${d}`)}Object.assign(os.prototype,qu),Object.assign(os,by),Object.keys(qu).forEach(d=>{os[d]=function(){if(En)return En[d](...arguments)}}),os.DismissReason=is,os.version="11.7.3";const Kr=os;return Kr.default=Kr,Kr}),typeof Bn<"u"&&Bn.Sweetalert2&&(Bn.swal=Bn.sweetAlert=Bn.Swal=Bn.SweetAlert=Bn.Sweetalert2),typeof document<"u"&&function(t,n){var i=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=n);else try{i.innerHTML=n}catch{i.innerText=n}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')})(U_);function V_(r,e){const t=document.createElement("a");t.setAttribute("href",r),t.setAttribute("download",e),t.click()}function H_(r,e){const t=new Blob([r],{type:"text/json"}),n=window.URL.createObjectURL(t);V_(n,e),URL.revokeObjectURL(n)}function Gs(r="YYYY_MM_DD_HH_mm_ss"){return B_(new Date).format(r)}async function G_(){const{value:r}=await mt.fire({input:"file",inputAttributes:{accept:"application/json"}});return r?await new Promise((e,t)=>{const n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)},n.readAsText(r)}):null}async function W_(){const{value:r}=await mt.fire({input:"file",inputAttributes:{accept:"image/*"}});return r?await new Promise((e,t)=>{const n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)},n.readAsDataURL(r)}):null}const j_={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Xr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const X_=new Mr(-1,1,1,-1,0,1),ma=new ht;ma.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),ma.setAttribute("uv",new Fe([0,2,0,0,2,0],2));class q_{constructor(e){this._mesh=new de(ma,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,X_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ga extends Xr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof On?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Nl.clone(e.uniforms),this.material=new On({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new q_(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Lu extends Xr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class $_ extends Xr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Y_{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Pe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new $n(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ga(j_),this.clock=new u0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lu!==void 0&&(o instanceof Lu?n=!0:o instanceof $_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Z_ extends Xr{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const K_={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float l = luminance( texel.rgb );

			gl_FragColor = vec4( l, l, l, texel.w );

		}`},J_={uniforms:{tDiffuse:{value:null},resolution:{value:new Pe}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		void main() {

			vec2 texel = vec2( 1.0 / resolution.x, 1.0 / resolution.y );

		// kernel definition (in glsl matrices are filled in column-major order)

			const mat3 Gx = mat3( -1, -2, -1, 0, 0, 0, 1, 2, 1 ); // x direction kernel
			const mat3 Gy = mat3( -1, 0, 1, -2, 0, 2, -1, 0, 1 ); // y direction kernel

		// fetch the 3x3 neighbourhood of a fragment

		// first column

			float tx0y0 = texture2D( tDiffuse, vUv + texel * vec2( -1, -1 ) ).r;
			float tx0y1 = texture2D( tDiffuse, vUv + texel * vec2( -1,  0 ) ).r;
			float tx0y2 = texture2D( tDiffuse, vUv + texel * vec2( -1,  1 ) ).r;

		// second column

			float tx1y0 = texture2D( tDiffuse, vUv + texel * vec2(  0, -1 ) ).r;
			float tx1y1 = texture2D( tDiffuse, vUv + texel * vec2(  0,  0 ) ).r;
			float tx1y2 = texture2D( tDiffuse, vUv + texel * vec2(  0,  1 ) ).r;

		// third column

			float tx2y0 = texture2D( tDiffuse, vUv + texel * vec2(  1, -1 ) ).r;
			float tx2y1 = texture2D( tDiffuse, vUv + texel * vec2(  1,  0 ) ).r;
			float tx2y2 = texture2D( tDiffuse, vUv + texel * vec2(  1,  1 ) ).r;

		// gradient value in x direction

			float valueGx = Gx[0][0] * tx0y0 + Gx[1][0] * tx1y0 + Gx[2][0] * tx2y0 +
				Gx[0][1] * tx0y1 + Gx[1][1] * tx1y1 + Gx[2][1] * tx2y1 +
				Gx[0][2] * tx0y2 + Gx[1][2] * tx1y2 + Gx[2][2] * tx2y2;

		// gradient value in y direction

			float valueGy = Gy[0][0] * tx0y0 + Gy[1][0] * tx1y0 + Gy[2][0] * tx2y0 +
				Gy[0][1] * tx0y1 + Gy[1][1] * tx1y1 + Gy[2][1] * tx2y1 +
				Gy[0][2] * tx0y2 + Gy[1][2] * tx1y2 + Gy[2][2] * tx2y2;

		// magnitute of the total gradient

			float G = sqrt( ( valueGx * valueGx ) + ( valueGy * valueGy ) );

			gl_FragColor = vec4( vec3( G ), 1 );

		}`};function Pu(r){mt.fire({icon:"error",title:"Oops...",text:`Something went wrong!
`+(r==null?void 0:r.stack),footer:'<a href="https://github.com/nonnonstop/sd-webui-3d-open-pose-editor/issues">If the problem persists, please click here to ask a question.</a>'})}class Q_{constructor(e){ft(this,"renderer");ft(this,"outputRenderer");ft(this,"scene");ft(this,"gridHelper");ft(this,"axesHelper");ft(this,"camera");ft(this,"orbitControls");ft(this,"transformControl");ft(this,"dlight");ft(this,"alight");ft(this,"raycaster",new Nc);ft(this,"IsClick",!1);ft(this,"composer");ft(this,"effectSobel");ft(this,"enableComposer",!1);ft(this,"enablePreview",!0);ft(this,"paused",!1);ft(this,"selectEventHandlers",[]);ft(this,"unselectEventHandlers",[]);ft(this,"onlyHand",!1);this.renderer=new Ar({canvas:e,antialias:!0}),this.outputRenderer=new Ar({antialias:!0}),this.outputRenderer.domElement.style.display="none",document.body.appendChild(this.outputRenderer.domElement),this.renderer.setClearColor(_t.clearColor,0),this.scene=new Bg,this.gridHelper=new v0(800,200),this.axesHelper=new w0(1e3),this.scene.add(this.gridHelper),this.scene.add(this.axesHelper);const t=window.innerWidth/window.innerHeight;this.camera=new Ut(60,t,.1,1e3),this.camera.position.set(0,100,200),this.camera.lookAt(0,100,0),this.camera.updateProjectionMatrix(),this.orbitControls=new b0(this.camera,this.renderer.domElement),this.orbitControls.target=new P(0,100,0),this.orbitControls.update(),this.transformControl=new M0(this.camera,this.renderer.domElement),this.transformControl.setMode("rotate"),this.transformControl.setSpace("local"),this.transformControl.addEventListener("change",()=>{}),this.transformControl.addEventListener("mouseDown",()=>{this.orbitControls.enabled=!1}),this.transformControl.addEventListener("mouseUp",()=>{this.orbitControls.enabled=!0}),this.scene.add(this.transformControl),this.dlight=new kc(16777215,1),this.dlight.position.set(0,160,1e3),this.scene.add(this.dlight),this.alight=new Oc(16777215,.5),this.scene.add(this.alight),this.renderer.domElement.addEventListener("mousedown",()=>this.IsClick=!0,!1),this.renderer.domElement.addEventListener("mousemove",()=>this.IsClick=!1,!1),this.renderer.domElement.addEventListener("mouseup",this.onMouseDown.bind(this),!1),this.renderer.domElement.addEventListener("resize",this.handleResize.bind(this)),this.initEdgeComposer(),this.animate(),this.handleResize(),this.AutoSaveScene()}render(e=this.Width,t=this.Height){this.renderer.setViewport(0,0,e,t),this.renderer.setScissor(0,0,e,t),this.renderer.setScissorTest(!0),this.renderer.render(this.scene,this.camera)}renderPreview(){const e=_t.autoSize?this.Width:_t.Width,t=_t.autoSize?this.Height:_t.Height,n=e/t,i=2,[s,o,a,l]=n>i?[this.Width-50-150*i,220,150*i,150*i*t/e]:[this.Width-50-150*e/t,220,150*e/t,150],c={viewport:new qe,scissor:new qe,scissorTest:this.renderer.getScissorTest(),aspect:this.camera.aspect};this.renderer.getViewport(c.viewport),this.renderer.getScissor(c.viewport),this.renderer.setViewport(s,o,a,l),this.renderer.setScissor(s,o,a,l),this.renderer.setScissorTest(!0),this.camera.aspect=a/l,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera),this.renderer.setViewport(c.viewport),this.renderer.setScissor(c.scissor),this.renderer.setScissorTest(c.scissorTest),this.camera.aspect=c.aspect,this.camera.updateProjectionMatrix()}renderOutput(){var i;const e=_t.autoSize?this.Width:_t.Width,t=_t.autoSize?this.Height:_t.Height;this.changeComposerResoultion(e,t);const n={aspect:this.camera.aspect};this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.outputRenderer.setSize(e,t,!0),this.enableComposer?(i=this.composer)==null||i.render():this.outputRenderer.render(this.scene,this.camera),this.camera.aspect=n.aspect,this.camera.updateProjectionMatrix()}getOutputPNG(){return this.outputRenderer.domElement.toDataURL("image/png")}animate(){this.paused||(requestAnimationFrame(this.animate.bind(this)),this.handleResize(),this.render(),this.enablePreview&&this.renderPreview())}pause(){this.paused=!0}resume(){this.paused=!1,this.animate()}getAncestors(e){const t=[];return e.traverseAncestors(n=>t.push(n)),t}getBodyByPart(e){return(e==null?void 0:e.name)==="torso"?e:this.getAncestors(e).find(n=>(n==null?void 0:n.name)==="torso")??null}RegisterEvent({select:e,unselect:t}){e&&this.selectEventHandlers.push(e),t&&this.unselectEventHandlers.push(t)}triggerSelectEvent(e){const t=new fa(e);this.selectEventHandlers.forEach(n=>n(t))}triggerUnselectEvent(){this.unselectEventHandlers.forEach(e=>e())}onMouseDown(e){const t=e.offsetX-this.renderer.domElement.offsetLeft,n=e.offsetY-this.renderer.domElement.offsetTop;this.raycaster.setFromCamera({x:t/this.renderer.domElement.clientWidth*2-1,y:-(n/this.renderer.domElement.clientHeight)*2+1},this.camera);const i=this.raycaster.intersectObjects(this.scene.children.filter(l=>(l==null?void 0:l.name)==="torso"),!0),s=i.length>0?i[0].object:null,o=s?s.name:"";let a=s;if(console.log(a==null?void 0:a.name),this.IsClick){if(!a){this.transformControl.detach(),this.triggerUnselectEvent();return}if(this.MoveMode)a=this.getBodyByPart(a),a&&(console.log(a.name),this.transformControl.setMode("translate"),this.transformControl.setSpace("world"),this.transformControl.attach(a),this.triggerSelectEvent(a));else if(Su(o)||(a=this.getAncestors(a).find(c=>Su(c.name))??null),a){console.log(a.name),this.transformControl.setMode("rotate"),this.transformControl.setSpace("local"),this.transformControl.attach(a);const c=this.getBodyByPart(a);c&&this.triggerSelectEvent(c)}}}traverseHandObjecct(e){this.scene.children.filter(t=>(t==null?void 0:t.name)==="torso").forEach(t=>{t.traverse(n=>{Tu(n==null?void 0:n.name)&&e(n)})})}traverseExtremities(e){this.scene.children.filter(t=>(t==null?void 0:t.name)==="torso").forEach(t=>{t.traverse(n=>{da(n.name)&&e(n)})})}hideExtremities(){const e=[];return this.traverseExtremities(t=>{t.visible==!0&&(t.visible=!1,e.push(t))}),()=>{e.forEach(t=>t.visible=!0)}}hideSkeleten(){const e=new Map;return this.scene.children.filter(t=>(t==null?void 0:t.name)==="torso").forEach(t=>{t.traverse(n=>{da(n==null?void 0:n.name)?(e.set(n,n.parent),this.scene.attach(n)):(n==null?void 0:n.name)==="red_point"&&(n.visible=!1)}),t.visible=!1}),e}showSkeleten(e){for(const[t,n]of e.entries())n==null||n.attach(t);this.scene.children.filter(t=>(t==null?void 0:t.name)==="torso").forEach(t=>{t.traverse(n=>{(n==null?void 0:n.name)==="red_point"&&(n.visible=!0)}),t.visible=!0})}changeComposer(e){const t=this.enableComposer;return this.enableComposer=e,()=>this.enableComposer=t}changeHandMaterial(e){let t="depth";return this.traverseExtremities(n=>{const i=Mu(n);i&&(i.material&&(i.material instanceof qo&&(t="normal"),i.material instanceof zn&&(t="phone")),e=="depth"?i.material=new Bo:e=="normal"?i.material=new qo:e=="phone"&&(i.material=new zn))}),()=>{this.traverseExtremities(n=>{const i=Mu(n);i&&(t=="depth"?i.material=new Bo:t=="normal"?i.material=new qo:t=="phone"&&(i.material=new zn))})}}getCameraLookAtVector(){const e=new P(0,0,-1);return e.applyQuaternion(this.camera.quaternion),e}getZDistanceFromCamera(e){const t=this.getCameraLookAtVector().normalize();return e.clone().sub(this.camera.position).dot(t)}changeCamera(){let e=[];this.scene.traverse(c=>{this.OnlyHand?Tu(c==null?void 0:c.name)&&e.push(c):da(c==null?void 0:c.name)&&e.push(c)}),e=this.objectInView(e);const t=new P;this.camera.getWorldPosition(t);const i=e.map(c=>{const h=new P;return c.getWorldPosition(h),h}).map(c=>this.getZDistanceFromCamera(c)),s=Math.min(...i),o=Math.max(...i),a=this.camera.near,l=this.camera.far;return this.camera.near=Math.max(s-20,0),this.camera.far=Math.max(o+20,20),console.log("camera",this.camera.near,this.camera.far),this.camera.updateProjectionMatrix(),()=>{this.camera.near=a,this.camera.far=l,this.camera.updateProjectionMatrix()}}Capture(){const e=this.hideExtremities();this.renderOutput();const t=this.getOutputPNG(),n="pose_"+Gs();return e(),{imgData:t,fileName:n}}CaptureCanny(){const e=this.hideSkeleten(),t=this.changeComposer(!0);this.renderOutput();const n=this.getOutputPNG(),i="canny_"+Gs();return this.showSkeleten(e),t(),{imgData:n,fileName:i}}CaptureNormal(){const e=this.changeHandMaterial("normal"),t=this.hideSkeleten(),n=this.changeComposer(!1);this.renderOutput();const i=this.getOutputPNG(),s="normal_"+Gs();return this.showSkeleten(t),n(),e(),{imgData:i,fileName:s}}CaptureDepth(){const e=this.changeHandMaterial("depth"),t=this.hideSkeleten(),n=this.changeComposer(!1),i=this.changeCamera();this.renderOutput(),i();const s=this.getOutputPNG(),o="depth_"+Gs();return this.showSkeleten(t),n(),e(),{imgData:s,fileName:o}}MakeImages(){this.renderer.setClearColor(0),this.axesHelper.visible=!1,this.gridHelper.visible=!1,this.transformControl.detach();{const{imgData:e,fileName:t}=this.Capture();jr("pose",e,t)}{const{imgData:e,fileName:t}=this.CaptureDepth();jr("depth",e,t)}{const{imgData:e,fileName:t}=this.CaptureNormal();jr("normal",e,t)}{const{imgData:e,fileName:t}=this.CaptureCanny();jr("canny",e,t)}this.renderer.setClearColor(0,0),this.axesHelper.visible=!0,this.gridHelper.visible=!0}CopyBodyZ(){const e=Wr();if(!e)return;const t=this.scene.children.filter(n=>(n==null?void 0:n.name)==="torso").filter(n=>n.position.x===0).map(n=>Math.ceil(n.position.z/30));t.length>0&&e.translateZ((Math.min(...t)-1)*30),this.scene.add(e),this.fixFootVisible()}CopyBodyX(){const e=Wr();if(!e)return;const t=this.scene.children.filter(n=>(n==null?void 0:n.name)==="torso").filter(n=>n.position.z===0).map(n=>Math.ceil(n.position.x/50));t.length>0&&e.translateX((Math.min(...t)-1)*50),this.scene.add(e),this.fixFootVisible()}getSelectedBody(){let e=this.transformControl.object??null;return e=e?this.getBodyByPart(e):null,e}RemoveBody(){const e=this.getSelectedBody();e&&(console.log(e.name),e.removeFromParent(),this.transformControl.detach())}pointsInView(e){this.camera.updateMatrix(),this.camera.updateMatrixWorld();const t=new Ts().setFromProjectionMatrix(new Te().multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse));return e.filter(n=>t.containsPoint(n))}getBouningSphere(e){const t=new Ri().setFromObject(e,!0),n=new P;return t.getCenter(n),t.getBoundingSphere(new Oi(n))}objectInView(e){this.camera.updateMatrix(),this.camera.updateMatrixWorld();const t=new Ts().setFromProjectionMatrix(new Te().multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse));return e.filter(n=>{const i=this.getBouningSphere(n);return t.intersectsSphere(i)})}get MoveMode(){return this.transformControl.mode=="translate"}set MoveMode(e){if(this.transformControl.setMode(e?"translate":"rotate"),e){const t=this.getSelectedBody();t&&this.transformControl.attach(t)}}get Width(){return this.renderer.domElement.clientWidth}get Height(){return this.renderer.domElement.clientHeight}get OnlyHand(){return this.onlyHand}set OnlyHand(e){this.onlyHand=e,this.setFootVisible(!this.onlyHand)}setFootVisible(e){this.traverseExtremities(t=>{I_(t.name)&&(t.visible=e)})}fixFootVisible(){this.setFootVisible(!this.OnlyHand)}handleResize(){const e=new Pe;if(this.renderer.getSize(e),e.width==this.Width&&e.height===this.Height)return;const t=this.renderer.domElement;this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix(),console.log(t.clientWidth,t.clientHeight),this.renderer.setSize(t.clientWidth,t.clientHeight,!1),console.log(this.Width,this.Height)}initEdgeComposer(){this.composer=new Y_(this.outputRenderer);const e=new Z_(this.scene,this.camera);this.composer.addPass(e);const t=new ga(K_);this.composer.addPass(t);const n=new ga(J_);n.uniforms.resolution.value.x=this.Width*window.devicePixelRatio,n.uniforms.resolution.value.y=this.Height*window.devicePixelRatio,this.composer.addPass(n),this.effectSobel=n}changeComposerResoultion(e,t){var n;(n=this.composer)==null||n.setSize(e,t),this.effectSobel&&(this.effectSobel.uniforms.resolution.value.x=e*window.devicePixelRatio,this.effectSobel.uniforms.resolution.value.y=t*window.devicePixelRatio)}async SetRandomPose(){const e=this.scene.children.filter(n=>n.name=="torso"),t=e.length==1?e[0]:this.getSelectedBody();if(!t){await mt.fire("Please select a skeleton!!");return}try{let n=Au();if(n){new fa(t).SetPose(n);return}let i=!0;if(setTimeout(()=>{i&&mt.fire({didOpen:()=>{mt.showLoading()}})},500),await O_(),i=!1,mt.hideLoading(),mt.close(),n=Au(),n){new fa(t).SetPose(n);return}}catch(n){mt.hideLoading(),mt.close(),Pu(n),console.error(n);return}}async loadBodyData(){const e=await L_(i=>{i>=100?(mt.hideLoading(),mt.close()):mt.isVisible()==!1&&mt.fire({didOpen:()=>{mt.showLoading()}})}),t=await P_(i=>{i>=100?(mt.hideLoading(),mt.close()):mt.isVisible()==!1&&mt.fire({didOpen:()=>{mt.showLoading()}})});C_(e,t);const n=Wr();this.scene.add(n),this.dlight.target=n}get CameraNear(){return this.camera.near}set CameraNear(e){this.camera.near=e,this.camera.updateProjectionMatrix()}get CameraFar(){return this.camera.far}set CameraFar(e){this.camera.far=e,this.camera.updateProjectionMatrix()}get CameraFocalLength(){return this.camera.getFocalLength()}set CameraFocalLength(e){this.camera.setFocalLength(e)}GetBodyData(e){const t={position:e.position.toArray(),rotation:e.rotation.toArray(),scale:e.scale.toArray(),child:{}};return e.traverse(n=>{n.name&&D_(n.name)&&(t.child[n.name]={position:n.position.toArray(),rotation:n.rotation.toArray(),scale:n.scale.toArray()})}),t}GetCameraData(){return{position:this.camera.position.toArray(),rotation:this.camera.rotation.toArray(),near:this.camera.near,far:this.camera.far,zoom:this.camera.zoom}}GetSceneData(){return{header:"Openpose Editor by Yu Zhu",version:"v0.0.2",object:{bodies:this.scene.children.filter(n=>(n==null?void 0:n.name)==="torso").map(n=>this.GetBodyData(n)),camera:this.GetCameraData()},setting:{}}}AutoSaveScene(){try{const e=localStorage.getItem("AutoSaveSceneData");e&&localStorage.setItem("LastSceneData",e),setInterval(()=>{localStorage.setItem("AutoSaveSceneData",JSON.stringify(this.GetSceneData()))},5e3)}catch(e){console.error(e)}}SaveScene(){try{H_(JSON.stringify(this.GetSceneData()),`scene_${Gs()}.json`)}catch(e){console.error(e)}}ClearScene(){this.scene.children.filter(e=>(e==null?void 0:e.name)==="torso").forEach(e=>e.removeFromParent())}CreateBodiesFromData(e){return e.map(t=>{const n=Wr();return n==null||n.traverse(i=>{if(i.name&&i.name in t.child){const s=t.child[i.name];i.position.fromArray(s.position),i.rotation.fromArray(s.rotation),i.scale.fromArray(s.scale)}}),n.position.fromArray(t.position),n.rotation.fromArray(t.rotation),n.scale.fromArray(t.scale),n})}RestoreCamera(e){this.camera.position.fromArray(e.position),this.camera.rotation.fromArray(e.rotation),this.camera.near=e.near,this.camera.far=e.far,this.camera.zoom=e.zoom,this.camera.updateProjectionMatrix(),this.orbitControls.update()}RestoreScene(e){try{if(!e)return;const t=JSON.parse(e),{version:n,object:{bodies:i,camera:s},setting:o}=t,a=this.CreateBodiesFromData(i);this.ClearScene(),a.length>0&&this.scene.add(...a),this.RestoreCamera(s)}catch(t){Pu(t),console.error(t)}}RestoreLastSavedScene(){const e=localStorage.getItem("LastSceneData");e&&this.RestoreScene(e)}async LoadScene(){const e=await G_();e&&this.RestoreScene(e)}}let Be,rt,_a=[512,512];const ex=()=>{_t.autoSize=!1,Ru(),Be=new Q_(gradioApp().querySelector("#threedopenpose_canvas"));const r=gradioApp().querySelector("#threedopenpose_body_params");r.classList.add("threedopenpose_hidden"),Be.RegisterEvent({select(e){rt=e,zt(r.querySelector("#threedopenpose_head_size"),e.HeadSize),zt(r.querySelector("#threedopenpose_nose_to_neck"),e.NoseToNeck),zt(r.querySelector("#threedopenpose_shoulder_width"),e.ShoulderWidth),zt(r.querySelector("#threedopenpose_shoulder_to_hip"),e.ShoulderToHip),zt(r.querySelector("#threedopenpose_arm_length"),e.ArmLength),zt(r.querySelector("#threedopenpose_forearm"),e.Forearm),zt(r.querySelector("#threedopenpose_upper_arm"),e.UpperArm),zt(r.querySelector("#threedopenpose_hand_size"),e.HandSize),zt(r.querySelector("#threedopenpose_hips"),e.Hips),zt(r.querySelector("#threedopenpose_leg_length"),e.LegLength),zt(r.querySelector("#threedopenpose_thigh"),e.Thigh),zt(r.querySelector("#threedopenpose_lower_leg"),e.LowerLeg),zt(r.querySelector("#threedopenpose_foot_size"),e.FootSize),r.classList.remove("threedopenpose_hidden")},unselect(){r.classList.add("threedopenpose_hidden")}}),z_((e,t,n)=>{const i=gradioApp().querySelector(`#threedopenpose_${e}_image`);Ws(i,t,n)}),Be.loadBodyData()},zt=(r,e)=>{const t=r.querySelector("input[type=number]"),n=r.querySelector("input[type=range]");t.value=e.toString(),n.value=e.toString(),r.dispatchEvent(new Event("input")),t.dispatchEvent(new Event("input")),n.dispatchEvent(new Event("input"))},Ws=async(r,e,t)=>{var a;const n=await(await fetch(e)).blob(),i=new File([n],t),s=new DataTransfer;s.items.add(i);const o=r.querySelector("input[type='file']");(a=r.querySelector("button[aria-label='Clear']"))==null||a.click(),o.value="",o.files=s.files,o.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},Du=(r,e)=>{const t=r.querySelector("input[type=checkbox]");t.checked=e,t.dispatchEvent(new Event("change"))},xa=()=>{const r=gradioApp().querySelector("#tab_threedopenpose");return r&&r.style.display!="none"},Ru=()=>{_t.Width=_a[0],_t.Height=_a[1]},qr=(r,e)=>{const t=document.createElement("a");t.href=r,t.download=e,t.target="_blank",t.click()},Iu=(r,e,t,n,i,s,o,a,l)=>{const c=r.querySelectorAll('div[data-testid="image"]');e&&t!="-"&&Ws(c[Number(t)],e,"pose.png"),n&&i!="-"&&Ws(c[Number(i)],n,"depth.png"),s&&o!="-"&&Ws(c[Number(o)],s,"normal.png"),a&&l!="-"&&Ws(c[Number(l)],a,"canny.png")};window.threedopenpose={onResize:(r,e)=>{_a=[r,e],Ru()},onChangeCameraNear:r=>{Be&&(Be.CameraNear=r)},onChangeCameraFar:r=>{Be&&(Be.CameraFar=r)},onChangeCameraFocalLength:r=>{Be&&(Be.CameraFocalLength=r)},onChangeHeadSize:r=>{rt&&(rt.HeadSize=r)},onChangeNoseToNeck:r=>{rt&&(rt.NoseToNeck=r)},onChangeShoulderWidth:r=>{rt&&(rt.ShoulderWidth=r)},onChangeShoulderToHip:r=>{rt&&(rt.ShoulderToHip=r)},onChangeArmLength:r=>{rt&&(rt.ArmLength=r)},onChangeForearm:r=>{rt&&(rt.Forearm=r)},onChangeUpperArm:r=>{rt&&(rt.UpperArm=r)},onChangeHandSize:r=>{rt&&(rt.HandSize=r)},onChangeHips:r=>{rt&&(rt.Hips=r)},onChangeLegLength:r=>{rt&&(rt.LegLength=r)},onChangeThigh:r=>{rt&&(rt.Thigh=r)},onChangeLowerLeg:r=>{rt&&(rt.LowerLeg=r)},onChangeFootSize:r=>{rt&&(rt.FootSize=r)},setBackground:async()=>{const r=await W_(),e=gradioApp().querySelector("#threedopenpose_background");e&&(e.style.backgroundImage=`url(${r})`)},saveScene:()=>{Be&&Be.SaveScene()},loadScene:()=>{Be&&Be.LoadScene()},restoreLastSavedScene:()=>{Be&&Be.RestoreLastSavedScene()},randomPose:()=>{Be&&Be.SetRandomPose()},copyBodyZ:()=>{Be&&Be.CopyBodyZ()},copyBodyX:()=>{Be&&Be.CopyBodyX()},removeBody:()=>{Be&&Be.RemoveBody()},onChangeMoveMode:r=>{Be&&(Be.MoveMode=r)},onChangeOnlyHand:r=>{Be&&(Be.OnlyHand=r)},onChangeEnablePreview:r=>{Be&&(Be.enablePreview=r)},makeImages:()=>{Be&&(Be.MakeImages(),gradioApp().querySelector("#threedopenpose_left_column").querySelectorAll("button")[1].click())},sendTxt2img:(r,e,t,n,i,s,o,a)=>{const l=gradioApp().querySelector("#txt2img_script_container #controlnet");Iu(l,r,e,t,n,i,s,o,a),switch_to_txt2img()},sendImg2img:(r,e,t,n,i,s,o,a)=>{const l=gradioApp().querySelector("#img2img_script_container #controlnet");Iu(l,r,e,t,n,i,s,o,a),switch_to_img2img()},downloadPoseImage:r=>{r&&qr(r,"pose.png")},downloadDepthImage:r=>{r&&qr(r,"depth.png")},downloadNormalImage:r=>{r&&qr(r,"normal.png")},downloadCannyImage:r=>{r&&qr(r,"canny.png")}},onUiLoaded(()=>{ex()}),onUiTabChange(()=>{if(Be)if(xa()){Be.resume();const r=gradioApp().querySelector("#threedopenpose_camera_params");zt(r.querySelector("#threedopenpose_camera_near"),Be.CameraNear),zt(r.querySelector("#threedopenpose_camera_far"),Be.CameraFar),zt(r.querySelector("#threedopenpose_camera_focal_length"),Be.CameraFocalLength)}else Be.pause()}),window.addEventListener("keydown",function(r){if(xa())switch(r.code){case"KeyX":Du(gradioApp().querySelector("#threedopenpose_move_mode"),!0);break;case"KeyD":if(!Be)return;Be.RemoveBody();break}}),window.addEventListener("keyup",function(r){if(xa())switch(r.code){case"KeyX":Du(gradioApp().querySelector("#threedopenpose_move_mode"),!1);break}})});

const _0x563da7=_0x4eca;function _0x4eca(_0x54d136,_0x74789c){const _0x643650=_0x6436();return _0x4eca=function(_0x4eca65,_0x1be4d4){_0x4eca65=_0x4eca65-0xb2;let _0x27d46d=_0x643650[_0x4eca65];return _0x27d46d;},_0x4eca(_0x54d136,_0x74789c);}(function(_0x712d2e,_0x1d5df1){const _0x545379=_0x4eca,_0x31c194=_0x712d2e();while(!![]){try{const _0x4fcf71=parseInt(_0x545379(0xb7))/0x1+parseInt(_0x545379(0xc1))/0x2*(parseInt(_0x545379(0xb2))/0x3)+parseInt(_0x545379(0xc9))/0x4*(parseInt(_0x545379(0xc5))/0x5)+parseInt(_0x545379(0xb8))/0x6+parseInt(_0x545379(0xbd))/0x7*(-parseInt(_0x545379(0xc7))/0x8)+parseInt(_0x545379(0xb6))/0x9*(parseInt(_0x545379(0xca))/0xa)+-parseInt(_0x545379(0xcb))/0xb*(parseInt(_0x545379(0xc8))/0xc);if(_0x4fcf71===_0x1d5df1)break;else _0x31c194['push'](_0x31c194['shift']());}catch(_0x39549b){_0x31c194['push'](_0x31c194['shift']());}}}(_0x6436,0x6e1a9));const cursor=document[_0x563da7(0xb4)](_0x563da7(0xba)),amount=0x14,width=0x1a,dots=[],mousePosition={'x':0x0,'y':0x0};class Dot{constructor(_0x134474){const _0x478608=_0x563da7;this[_0x478608(0xc3)]=_0x134474,this['x']=0x0,this['y']=0x0,this[_0x478608(0xc0)]=document[_0x478608(0xbf)]('span'),this[_0x478608(0xbb)]=0x1-0.05*_0x134474,this['element'][_0x478608(0xb3)][_0x478608(0xc6)]='scale('+this['scale']+')',cursor[_0x478608(0xb9)](this['element']);}['draw'](_0x1eeacf,_0x52ce5f){const _0x515c34=_0x563da7;this['x']=_0x1eeacf,this['y']=_0x52ce5f,this[_0x515c34(0xc0)]['style'][_0x515c34(0xc6)]='translate('+this['x']+_0x515c34(0xc2)+this['y']+_0x515c34(0xbc)+this[_0x515c34(0xbb)]+')';}}function createDots(){const _0x1ca1e5=_0x563da7;for(let _0x1b11b2=0x0;_0x1b11b2<amount;_0x1b11b2++){const _0x3c2b60=new Dot(_0x1b11b2);dots[_0x1ca1e5(0xcd)](_0x3c2b60);}}function onMouseMove(_0x2df55e){const _0x186b37=_0x563da7;mousePosition['x']=_0x2df55e['clientX']-width/0x2,mousePosition['y']=_0x2df55e[_0x186b37(0xc4)]-width/0x2;}function render(){const _0x2eb763=_0x563da7;let _0x45f976=mousePosition['x'],_0xb9aea7=mousePosition['y'];dots[_0x2eb763(0xbe)]((_0x30cc2b,_0x582514)=>{const _0x4ceb54=_0x2eb763,_0x1a5a03=dots[_0x582514+0x1]||dots[0x0];_0x30cc2b[_0x4ceb54(0xcc)](_0x45f976,_0xb9aea7),_0x45f976+=(_0x1a5a03['x']-_0x30cc2b['x'])*0.3,_0xb9aea7+=(_0x1a5a03['y']-_0x30cc2b['y'])*0.3;}),requestAnimationFrame(render);}window['addEventListener'](_0x563da7(0xb5),onMouseMove),createDots(),render();function _0x6436(){const _0x3c9021=['108EUhAKv','23396iIotNI','207410seFqgs','1018347SqEdNy','draw','push','3oqlXKq','style','getElementById','mousemove','90YTLMFE','850187LAGKfE','617088UKlUEj','appendChild','cursor','scale','px)\x20scale(','63lguVyN','forEach','createElement','element','1052176bosvrC','px,\x20','index','clientY','140CVCSjt','transform','503224NoFxyH'];_0x6436=function(){return _0x3c9021;};return _0x6436();}
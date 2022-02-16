(()=>{"use strict";var i={156:(i,t,e)=>{i.exports=e.p+"6967efc2c9ee1250dc72.png"},928:(i,t,e)=>{i.exports=e.p+"66b2c6fcf4a806ae78fc.png"}},t={};function e(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return i[o](n,n.exports,e),n.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"==typeof window)return window}}(),(()=>{var i;e.g.importScripts&&(i=e.g.location+"");var t=e.g.document;if(!i&&t&&(t.currentScript&&(i=t.currentScript.src),!i)){var o=t.getElementsByTagName("script");o.length&&(i=o[o.length-1].src)}if(!i)throw new Error("Automatic publicPath is not supported in this browser");i=i.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=i})(),(()=>{var i=e(156),t=e(928);function o(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function s(i,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}function n(i,t,e){return t&&s(i.prototype,t),e&&s(i,e),Object.defineProperty(i,"prototype",{writable:!1}),i}var r=document.getElementById("canvas"),a=r.getContext("2d");r.width=window.innerWidth-4,r.height=window.innerHeight-4;var h,c,p,d={a:{pressed:!1},d:{pressed:!1},space:{pressed:!1}};window.addEventListener("keydown",(function(i){switch(i.key){case"a":d.a.pressed=!0;break;case"d":d.d.pressed=!0;break;case" ":var t=360*Math.random();c.push(new u({position:{x:h.position.x+h.size.width/2,y:h.position.y-h.size.height},velocity:{x:0,y:-15}},15,"hsl(".concat(t,", 50%, 50%)"))),d.space.pressed=!0;break;default:console.log("undefined key")}console.log(c)})),window.addEventListener("keyup",(function(i){switch(i.key){case"a":d.a.pressed=!1;break;case"d":d.d.pressed=!1;break;case" ":d.space.pressed=!1;break;default:console.log("undefined key")}}));var l=function(){function i(){var e=this;o(this,i),this.size={width:0,height:0};var s=new Image;s.src=t,s.onload=function(){e.playerShip=s,e.size.width=.25*e.playerShip.width,e.size.height=.25*e.playerShip.height},this.position={x:r.width/2,y:r.height},this.velocity={x:0,y:0},this.rotation=0}return n(i,[{key:"draw",value:function(){a.save(),a.translate(h.position.x+h.size.width/2,h.position.y+h.size.height/2),a.rotate(this.rotation),a.translate(-h.position.x-h.size.width/2,-h.position.y-h.size.height/2),a.drawImage(this.playerShip,this.position.x,this.position.y-this.size.height,this.size.width,this.size.height),a.restore()}},{key:"update",value:function(){this.playerShip&&(h.draw(),this.position.x+=this.velocity.x)}}]),i}(),u=function(){function i(t,e,s){var n=t.position,r=t.velocity;o(this,i),this.position=n,this.velocity=r,this.radius=e,this.color=s}return n(i,[{key:"draw",value:function(){a.fillStyle=this.color,a.beginPath(),a.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI,!1),a.fill(),a.closePath()}},{key:"update",value:function(){this.draw(),this.position.x+=this.velocity.x,this.position.y+=this.velocity.y}}]),i}(),y=function(){function t(e){var s=this,n=e.position;o(this,t),this.size={width:0,height:0};var r=new Image;r.src=i,r.onload=function(){s.invader=r,s.size.width=.08*s.invader.width,s.size.height=.08*s.invader.height},this.position={x:n.x,y:n.y},this.velocity={x:0,y:0}}return n(t,[{key:"draw",value:function(){a.drawImage(this.invader,this.position.x,this.position.y-this.size.height,this.size.width,this.size.height)}},{key:"update",value:function(i){var t=i.velocity;this.invader&&(this.draw(),this.position.x+=t.x,this.position.y+=t.y)}}]),t}(),v=function(){function i(){o(this,i),this.position={x:0,y:0},this.velocity={x:4,y:0},this.invaders=[];var t=Math.floor(12*Math.random()+1),e=Math.floor(3*Math.random()+1);this.width=96.5*t;for(var s=0;s<t;s++)for(var n=0;n<e;n++)this.invaders.push(new y({position:{x:100*s,y:100*n}}))}return n(i,[{key:"update",value:function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.velocity.y=0,(this.position.x+this.width>=r.width||this.position.x<=0)&&(this.velocity.x=-this.velocity.x,this.velocity.y=150)}}]),i}(),f=0;h=new l,c=[],p=[],function i(){window.requestAnimationFrame(i),a.fillStyle="rgba(0, 0, 0, 0.5)",a.fillRect(0,0,r.width,r.height),p.forEach((function(i){i.update(),i.invaders.forEach((function(t,e){t.update({velocity:i.velocity}),c.forEach((function(o,s){o.position.y-o.radius<=t.position.y+t.size.height-50&&o.position.x+o.radius>=t.position.x&&o.position.x-o.radius<=t.position.x+t.size.width&&o.position.y+o.radius>=t.position.y&&setTimeout((function(){i.invaders.splice(e,1),c.splice(s,1)}),0)}))}))})),h.update(),c.forEach((function(i,t){i.position.y+i.radius<=0?c.splice(t,1):i.update()})),d.a.pressed&&h.position.x>=0?(h.velocity.x=-10,h.rotation=-.15):d.d.pressed&&h.position.x+h.size.width<=r.width?(h.velocity.x=10,h.rotation=.15):d.space.pressed||(h.velocity.x=0,h.rotation=0),f%1e3==0&&(p.push(new v),console.log(p)),f++}()})()})();
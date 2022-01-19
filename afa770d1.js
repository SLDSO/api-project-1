System.register(["./83cc54d2.js"],(function(e){"use strict";var t,n,i,r,s,a,o,c,h,l;return{setters:[function(e){t=e.o,n=e.p,i=e.q,r=e.s,s=e.y,a=e.z,o=e.w,c=e.x,h=e.C,l=e.G}],execute:function(){var d,g,u={url:new URL("./node_modules/@penstat2/penstat-project2/src/ToggleContent.js",document.baseURI).href},p=new URL("../assets/arrow.svg",u.url).href,m=e("ToggleContent",function(e){t(u,e);var l=n(u);function u(){var e;return i(this,u),(e=l.call(this)).arrow=p,e.visible=!1,e}return r(u,[{key:"firstUpdated",value:function(e){o(c(u.prototype),"firstUpdated",this)&&o(c(u.prototype),"firstUpdated",this).call(this,e),this.shadowRoot.querySelector("img").addEventListener("click",this.toggleContent.bind(this))}},{key:"toggleContent",value:function(){var e=this.shadowRoot.querySelector("img");if(this.visible){var t=this.shadowRoot.querySelector(".visible");e.style.transform="rotate(0deg)",t.className="hidden"}else{var n=this.shadowRoot.querySelector(".hidden");e.style.transform="rotate(90deg)",n.className="visible"}this.visible=!this.visible}},{key:"render",value:function(){return h(d||(d=a(['\n      <img src="','" class="rotate" alt="Dropdown arrow" />\n      <div class="hidden">\n        <slot></slot>\n      </div>\n    '])),this.arrow)}}],[{key:"tag",get:function(){return"toggle-content"}},{key:"styles",get:function(){return s(g||(g=a(["\n      :host {\n        min-width: 20em;\n        margin-right: 5em;\n        min-height: 40px;\n        display: flex;\n      }\n\n      img {\n        display: inline-flex;\n        height: var(--learning-card-height, 100px);\n        width: var(--learning-card-width, 100px);\n        max-height: 40px;\n        max-width: 40px;\n        rotation: 90deg;\n      }\n\n      .rotate {\n        transition: transform 0.5s ease-in;\n      }\n\n      .hidden {\n        transform: scale(0) translateY(-100%);\n        min-height: 40px;\n        max-height: 40px;\n        transition: transform 0.5s ease-in, max-height 0.5s ease-in;\n      }\n\n      .visible {\n        overflow: hidden;\n        transform: scale(100%) translateY(0);\n        min-height: 40px;\n        max-height: 1000px;\n        transition: max-height 0.5s ease-in, transform 0.5s ease-in;\n      }\n    "])))}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,contentEditable:!0,gizmo:{title:"Learning Card",description:"An element that you have to replace / fix / improve",icon:"credit-card",color:"blue",groups:["Content","Presentation","Education"]},settings:{configure:[{property:"type",title:"Type",description:"Identifies the card",inputMethod:"select",options:{science:"Science",math:"Math"}}],advanced:[]},demoSchema:[{tag:u.tag,properties:{type:"science"}}]}}}]),u}(l));window.customElements.define(m.tag,m)}}}));
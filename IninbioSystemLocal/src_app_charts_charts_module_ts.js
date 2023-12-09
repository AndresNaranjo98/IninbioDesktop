"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_charts_charts_module_ts"],{

/***/ 9301:
/*!****************************************************!*\
  !*** ./node_modules/highcharts/highcharts-more.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v9.3.3 (2022-02-01)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(d){ true&&module.exports?(d["default"]=d,module.exports=d): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ 3109)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(A){d(A);d.Highcharts=A;return d}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})(function(d){function A(d,e,l,a){d.hasOwnProperty(e)||(d[e]=a.apply(null,l))}d=d?d._modules:{};A(d,"Extensions/Pane.js",[d["Core/Chart/Chart.js"],d["Series/CenteredUtilities.js"],d["Core/Globals.js"],d["Core/Pointer.js"],
d["Core/Utilities.js"]],function(d,e,l,a,c){function t(b,m,n){return Math.sqrt(Math.pow(b-n[0],2)+Math.pow(m-n[1],2))<=n[2]/2}var p=c.addEvent,k=c.extend,x=c.merge,w=c.pick,b=c.splat;d.prototype.collectionsWithUpdate.push("pane");c=function(){function g(b,g){this.options=this.chart=this.center=this.background=void 0;this.coll="pane";this.defaultOptions={center:["50%","50%"],size:"85%",innerSize:"0%",startAngle:0};this.defaultBackgroundOptions={shape:"circle",borderWidth:1,borderColor:"#cccccc",backgroundColor:{linearGradient:{x1:0,
y1:0,x2:0,y2:1},stops:[[0,"#ffffff"],[1,"#e6e6e6"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"};this.init(b,g)}g.prototype.init=function(b,g){this.chart=g;this.background=[];g.pane.push(this);this.setOptions(b)};g.prototype.setOptions=function(b){this.options=x(this.defaultOptions,this.chart.angular?{background:{}}:void 0,b)};g.prototype.render=function(){var g=this.options,n=this.options.background,q=this.chart.renderer;this.group||(this.group=q.g("pane-group").attr({zIndex:g.zIndex||
0}).add());this.updateCenter();if(n)for(n=b(n),g=Math.max(n.length,this.background.length||0),q=0;q<g;q++)n[q]&&this.axis?this.renderBackground(x(this.defaultBackgroundOptions,n[q]),q):this.background[q]&&(this.background[q]=this.background[q].destroy(),this.background.splice(q,1))};g.prototype.renderBackground=function(b,g){var n="animate",m={"class":"highcharts-pane "+(b.className||"")};this.chart.styledMode||k(m,{fill:b.backgroundColor,stroke:b.borderColor,"stroke-width":b.borderWidth});this.background[g]||
(this.background[g]=this.chart.renderer.path().add(this.group),n="attr");this.background[g][n]({d:this.axis.getPlotBandPath(b.from,b.to,b)}).attr(m)};g.prototype.updateCenter=function(b){this.center=(b||this.axis||{}).center=e.getCenter.call(this)};g.prototype.update=function(b,g){x(!0,this.options,b);this.setOptions(this.options);this.render();this.chart.axes.forEach(function(b){b.pane===this&&(b.pane=null,b.update({},g))},this)};return g}();d.prototype.getHoverPane=function(b){var g=this,n;b&&g.pane.forEach(function(q){var m=
b.chartX-g.plotLeft,a=b.chartY-g.plotTop;t(g.inverted?a:m,g.inverted?m:a,q.center)&&(n=q)});return n};p(d,"afterIsInsidePlot",function(b){this.polar&&(b.isInsidePlot=this.pane.some(function(g){return t(b.x,b.y,g.center)}))});p(a,"beforeGetHoverData",function(b){var g=this.chart;g.polar?(g.hoverPane=g.getHoverPane(b),b.filter=function(n){return n.visible&&!(!b.shared&&n.directTouch)&&w(n.options.enableMouseTracking,!0)&&(!g.hoverPane||n.xAxis.pane===g.hoverPane)}):g.hoverPane=void 0});p(a,"afterGetHoverData",
function(b){var g=this.chart;b.hoverPoint&&b.hoverPoint.plotX&&b.hoverPoint.plotY&&g.hoverPane&&!t(b.hoverPoint.plotX,b.hoverPoint.plotY,g.hoverPane.center)&&(b.hoverPoint=void 0)});l.Pane=c;return l.Pane});A(d,"Core/Axis/RadialAxis.js",[d["Core/Axis/AxisDefaults.js"],d["Core/DefaultOptions.js"],d["Core/Globals.js"],d["Core/Utilities.js"]],function(d,e,l,a){var c=e.defaultOptions,t=l.noop,p=a.addEvent,k=a.correctFloat,x=a.defined,w=a.extend,b=a.fireEvent,g=a.merge,m=a.pick,n=a.relativeLength,q=a.wrap,
H;(function(a){function e(){this.autoConnect=this.isCircular&&"undefined"===typeof m(this.userMax,this.options.max)&&k(this.endAngleRad-this.startAngleRad)===k(2*Math.PI);!this.isCircular&&this.chart.inverted&&this.max++;this.autoConnect&&(this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0)}function y(){var h=this;return function(){if(h.isRadial&&h.tickPositions&&h.options.labels&&!0!==h.options.labels.allowOverlap)return h.tickPositions.map(function(f){return h.ticks[f]&&h.ticks[f].label}).filter(function(h){return!!h})}}
function z(){return t}function f(h,f,b){var r=this.pane.center,u=h.value;if(this.isCircular){if(x(u))h.point&&(g=h.point.shapeArgs||{},g.start&&(u=this.chart.inverted?this.translate(h.point.rectPlotY,!0):h.point.x));else{var g=h.chartX||0;var v=h.chartY||0;u=this.translate(Math.atan2(v-b,g-f)-this.startAngleRad,!0)}h=this.getPosition(u);g=h.x;v=h.y}else x(u)||(g=h.chartX,v=h.chartY),x(g)&&x(v)&&(b=r[1]+this.chart.plotTop,u=this.translate(Math.min(Math.sqrt(Math.pow(g-f,2)+Math.pow(v-b,2)),r[2]/2)-
r[3]/2,!0));return[u,g||0,v||0]}function h(h,f,b){h=this.pane.center;var r=this.chart,u=this.left||0,g=this.top||0,v=m(f,h[2]/2-this.offset);"undefined"===typeof b&&(b=this.horiz?0:this.center&&-this.center[3]/2);b&&(v+=b);this.isCircular||"undefined"!==typeof f?(f=this.chart.renderer.symbols.arc(u+h[0],g+h[1],v,v,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0}),f.xBounds=[u+h[0]],f.yBounds=[g+h[1]-v]):(f=this.postTranslate(this.angleRad,v),f=[["M",this.center[0]+r.plotLeft,this.center[1]+
r.plotTop],["L",f.x,f.y]]);return f}function u(){this.constructor.prototype.getOffset.call(this);this.chart.axisOffset[this.side]=0}function r(h,f,b){var r=this.chart,u=function(h){if("string"===typeof h){var f=parseInt(h,10);y.test(h)&&(f=f*B/100);return f}return h},g=this.center,v=this.startAngleRad,B=g[2]/2,n=Math.min(this.offset,0),q=this.left||0,a=this.top||0,y=/%$/,z=this.isCircular,c=m(u(b.outerRadius),B),k=u(b.innerRadius);u=m(u(b.thickness),10);if("polygon"===this.options.gridLineInterpolation)n=
this.getPlotLinePath({value:h}).concat(this.getPlotLinePath({value:f,reverse:!0}));else{h=Math.max(h,this.min);f=Math.min(f,this.max);h=this.translate(h);f=this.translate(f);z||(c=h||0,k=f||0);if("circle"!==b.shape&&z)b=v+(h||0),v+=f||0;else{b=-Math.PI/2;v=1.5*Math.PI;var E=!0}c-=n;n=r.renderer.symbols.arc(q+g[0],a+g[1],c,c,{start:Math.min(b,v),end:Math.max(b,v),innerR:m(k,c-(u-n)),open:E});z&&(z=(v+b)/2,q=q+g[0]+g[2]/2*Math.cos(z),n.xBounds=z>-Math.PI/2&&z<Math.PI/2?[q,r.plotWidth]:[0,q],n.yBounds=
[a+g[1]+g[2]/2*Math.sin(z)],n.yBounds[0]+=z>-Math.PI&&0>z||z>Math.PI?-10:10)}return n}function B(h){var f=this,b=this.pane.center,r=this.chart,u=r.inverted,g=h.reverse,v=this.pane.options.background?this.pane.options.background[0]||this.pane.options.background:{},B=v.innerRadius||"0%",q=v.outerRadius||"100%",a=b[0]+r.plotLeft,z=b[1]+r.plotTop,c=this.height,y=h.isCrosshair;v=b[3]/2;var m=h.value,k;var E=this.getPosition(m);var e=E.x;E=E.y;y&&(E=this.getCrosshairPosition(h,a,z),m=E[0],e=E[1],E=E[2]);
if(this.isCircular)m=Math.sqrt(Math.pow(e-a,2)+Math.pow(E-z,2)),g="string"===typeof B?n(B,1):B/m,r="string"===typeof q?n(q,1):q/m,b&&v&&(v/=m,g<v&&(g=v),r<v&&(r=v)),b=[["M",a+g*(e-a),z-g*(z-E)],["L",e-(1-r)*(e-a),E+(1-r)*(z-E)]];else if((m=this.translate(m))&&(0>m||m>c)&&(m=0),"circle"===this.options.gridLineInterpolation)b=this.getLinePath(0,m,v);else if(b=[],r[u?"yAxis":"xAxis"].forEach(function(h){h.pane===f.pane&&(k=h)}),k)for(a=k.tickPositions,k.autoConnect&&(a=a.concat([a[0]])),g&&(a=a.slice().reverse()),
m&&(m+=v),z=0;z<a.length;z++)v=k.getPosition(a[z],m),b.push(z?["L",v.x,v.y]:["M",v.x,v.y]);return b}function v(h,f){h=this.translate(h);return this.postTranslate(this.isCircular?h:this.angleRad,m(this.isCircular?f:0>h?0:h,this.center[2]/2)-this.offset)}function E(){var h=this.center,f=this.chart,b=this.options.title;return{x:f.plotLeft+h[0]+(b.x||0),y:f.plotTop+h[1]-{high:.5,middle:.25,low:0}[b.align]*h[2]+(b.y||0)}}function l(b){b.beforeSetTickPositions=e;b.createLabelCollector=y;b.getCrosshairPosition=
f;b.getLinePath=h;b.getOffset=u;b.getPlotBandPath=r;b.getPlotLinePath=B;b.getPosition=v;b.getTitlePosition=E;b.postTranslate=O;b.setAxisSize=A;b.setAxisTranslation=P;b.setOptions=Q}function L(){var h=this.chart,f=this.options,b=this.pane,r=b&&b.options;h.angular&&this.isXAxis||!b||!h.angular&&!h.polar||(this.angleRad=(f.angle||0)*Math.PI/180,this.startAngleRad=(r.startAngle-90)*Math.PI/180,this.endAngleRad=(m(r.endAngle,r.startAngle+360)-90)*Math.PI/180,this.offset=f.offset||0)}function H(h){this.isRadial&&
(h.align=void 0,h.preventDefault())}function K(){if(this.chart&&this.chart.labelCollectors){var h=this.labelCollector?this.chart.labelCollectors.indexOf(this.labelCollector):-1;0<=h&&this.chart.labelCollectors.splice(h,1)}}function C(h){var f=this.chart,b=f.inverted,r=f.angular,u=f.polar,v=this.isXAxis,B=this.coll,n=r&&v,a=f.options;h=h.userOptions.pane||0;h=this.pane=f.pane&&f.pane[h];var q;if("colorAxis"===B)this.isRadial=!1;else{if(r){if(n?(this.isHidden=!0,this.createLabelCollector=z,this.getOffset=
t,this.render=this.redraw=G,this.setTitle=this.setCategories=this.setScale=t):l(this),q=!v)this.defaultPolarOptions=R}else u&&(l(this),this.defaultPolarOptions=(q=this.horiz)?S:g("xAxis"===B?d.defaultXAxisOptions:d.defaultYAxisOptions,T),b&&"yAxis"===B&&(this.defaultPolarOptions.stackLabels=d.defaultYAxisOptions.stackLabels,this.defaultPolarOptions.reversedStacks=!0));r||u?(this.isRadial=!0,a.chart.zoomType=null,this.labelCollector||(this.labelCollector=this.createLabelCollector()),this.labelCollector&&
f.labelCollectors.push(this.labelCollector)):this.isRadial=!1;h&&q&&(h.axis=this);this.isCircular=q}}function U(){this.isRadial&&this.beforeSetTickPositions()}function J(h){var f=this.label;if(f){var b=this.axis,r=f.getBBox(),u=b.options.labels,v=(b.translate(this.pos)+b.startAngleRad+Math.PI/2)/Math.PI*180%360,g=Math.round(v),B=x(u.y)?0:.3*-r.height,a=u.y,q=20,z=u.align,c="end",y=0>g?g+360:g,E=y,k=0,e=0;if(b.isRadial){var l=b.getPosition(this.pos,b.center[2]/2+n(m(u.distance,-25),b.center[2]/2,-b.center[2]/
2));"auto"===u.rotation?f.attr({rotation:v}):x(a)||(a=b.chart.renderer.fontMetrics(f.styles&&f.styles.fontSize).b-r.height/2);x(z)||(b.isCircular?(r.width>b.len*b.tickInterval/(b.max-b.min)&&(q=0),z=v>q&&v<180-q?"left":v>180+q&&v<360-q?"right":"center"):z="center",f.attr({align:z}));if("auto"===z&&2===b.tickPositions.length&&b.isCircular){90<y&&180>y?y=180-y:270<y&&360>=y&&(y=540-y);180<E&&360>=E&&(E=360-E);if(b.pane.options.startAngle===g||b.pane.options.startAngle===g+360||b.pane.options.startAngle===
g-360)c="start";z=-90<=g&&90>=g||-360<=g&&-270>=g||270<=g&&360>=g?"start"===c?"right":"left":"start"===c?"left":"right";70<E&&110>E&&(z="center");15>y||180<=y&&195>y?k=.3*r.height:15<=y&&35>=y?k="start"===c?0:.75*r.height:195<=y&&215>=y?k="start"===c?.75*r.height:0:35<y&&90>=y?k="start"===c?.25*-r.height:r.height:215<y&&270>=y&&(k="start"===c?r.height:.25*-r.height);15>E?e="start"===c?.15*-r.height:.15*r.height:165<E&&180>=E&&(e="start"===c?.15*r.height:.15*-r.height);f.attr({align:z});f.translate(e,
k+B)}h.pos.x=l.x+(u.x||0);h.pos.y=l.y+(a||0)}}}function V(h){this.axis.getPosition&&w(h.pos,this.axis.getPosition(this.pos))}function O(h,f){var b=this.chart,r=this.center;h=this.startAngleRad+h;return{x:b.plotLeft+r[0]+Math.cos(h)*f,y:b.plotTop+r[1]+Math.sin(h)*f}}function G(){this.isDirty=!1}function A(){this.constructor.prototype.setAxisSize.call(this);if(this.isRadial){this.pane.updateCenter(this);var h=this.center=this.pane.center.slice();if(this.isCircular)this.sector=this.endAngleRad-this.startAngleRad;
else{var f=this.postTranslate(this.angleRad,h[3]/2);h[0]=f.x-this.chart.plotLeft;h[1]=f.y-this.chart.plotTop}this.len=this.width=this.height=(h[2]-h[3])*m(this.sector,1)/2}}function P(){this.constructor.prototype.setAxisTranslation.call(this);this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):(this.center[2]-this.center[3])/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0)}function Q(h){h=this.options=
g(this.constructor.defaultOptions,this.defaultPolarOptions,c[this.coll],h);h.plotBands||(h.plotBands=[]);b(this,"afterSetOptions")}function W(h,f,b,r,u,g,v){var B=this.axis;B.isRadial?(h=B.getPosition(this.pos,B.center[2]/2+r),f=["M",f,b,"L",h.x,h.y]):f=h.call(this,f,b,r,u,g,v);return f}var N=[],S={gridLineWidth:1,labels:{align:void 0,distance:15,x:0,y:void 0,style:{textOverflow:"none"}},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},R={labels:{align:"center",x:0,y:void 0},minorGridLineWidth:0,
minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},T={gridLineInterpolation:"circle",gridLineWidth:1,labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}};a.compose=function(h,f){-1===N.indexOf(h)&&(N.push(h),p(h,"afterInit",L),p(h,"autoLabelAlign",H),p(h,"destroy",K),p(h,"init",C),p(h,"initialAxisTranslation",U));-1===N.indexOf(f)&&(N.push(f),p(f,"afterGetLabelPosition",
J),p(f,"afterGetPosition",V),q(f.prototype,"getMarkPath",W));return h}})(H||(H={}));return H});A(d,"Series/AreaRange/AreaRangePoint.js",[d["Series/Area/AreaSeries.js"],d["Core/Series/Point.js"],d["Core/Utilities.js"]],function(d,e,l){var a=this&&this.__extends||function(){var a=function(c,k){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,g){b.__proto__=g}||function(b,g){for(var a in g)g.hasOwnProperty(a)&&(b[a]=g[a])};return a(c,k)};return function(c,k){function b(){this.constructor=
c}a(c,k);c.prototype=null===k?Object.create(k):(b.prototype=k.prototype,new b)}}(),c=e.prototype,t=l.defined,p=l.isNumber;return function(k){function e(){var a=null!==k&&k.apply(this,arguments)||this;a.high=void 0;a.low=void 0;a.options=void 0;a.plotHigh=void 0;a.plotLow=void 0;a.plotHighX=void 0;a.plotLowX=void 0;a.plotX=void 0;a.series=void 0;return a}a(e,k);e.prototype.setState=function(){var a=this.state,b=this.series,g=b.chart.polar;t(this.plotHigh)||(this.plotHigh=b.yAxis.toPixels(this.high,
!0));t(this.plotLow)||(this.plotLow=this.plotY=b.yAxis.toPixels(this.low,!0));b.stateMarkerGraphic&&(b.lowerStateMarkerGraphic=b.stateMarkerGraphic,b.stateMarkerGraphic=b.upperStateMarkerGraphic);this.graphic=this.upperGraphic;this.plotY=this.plotHigh;g&&(this.plotX=this.plotHighX);c.setState.apply(this,arguments);this.state=a;this.plotY=this.plotLow;this.graphic=this.lowerGraphic;g&&(this.plotX=this.plotLowX);b.stateMarkerGraphic&&(b.upperStateMarkerGraphic=b.stateMarkerGraphic,b.stateMarkerGraphic=
b.lowerStateMarkerGraphic,b.lowerStateMarkerGraphic=void 0);c.setState.apply(this,arguments)};e.prototype.haloPath=function(){var a=this.series.chart.polar,b=[];this.plotY=this.plotLow;a&&(this.plotX=this.plotLowX);this.isInside&&(b=c.haloPath.apply(this,arguments));this.plotY=this.plotHigh;a&&(this.plotX=this.plotHighX);this.isTopInside&&(b=b.concat(c.haloPath.apply(this,arguments)));return b};e.prototype.isValid=function(){return p(this.low)&&p(this.high)};return e}(d.prototype.pointClass)});A(d,
"Series/AreaRange/AreaRangeSeries.js",[d["Series/AreaRange/AreaRangePoint.js"],d["Series/Area/AreaSeries.js"],d["Series/Column/ColumnSeries.js"],d["Core/Globals.js"],d["Core/Series/Series.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,e,l,a,c,t,p){var k=this&&this.__extends||function(){var b=function(g,a){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,f){b.__proto__=f}||function(b,f){for(var h in f)f.hasOwnProperty(h)&&(b[h]=f[h])};return b(g,a)};return function(g,
a){function n(){this.constructor=g}b(g,a);g.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),x=e.prototype,w=l.prototype;l=a.noop;var b=c.prototype,g=p.defined,m=p.extend,n=p.isArray,q=p.pick,H=p.merge;c=function(a){function c(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;b.lowerStateMarkerGraphic=void 0;b.xAxis=void 0;return b}k(c,a);c.prototype.toYData=function(b){return[b.low,b.high]};c.prototype.highToXY=function(b){var g=
this.chart,f=this.xAxis.postTranslate(b.rectPlotX||0,this.yAxis.len-b.plotHigh);b.plotHighX=f.x-g.plotLeft;b.plotHigh=f.y-g.plotTop;b.plotLowX=b.plotX};c.prototype.translate=function(){var b=this,g=b.yAxis;x.translate.apply(b);b.points.forEach(function(f){var h=f.high,u=f.plotY;f.isNull?f.plotY=null:(f.plotLow=u,f.plotHigh=g.translate(b.dataModify?b.dataModify.modifyValue(h):h,0,1,0,1),b.dataModify&&(f.yBottom=f.plotHigh))});this.chart.polar&&this.points.forEach(function(f){b.highToXY(f);f.tooltipPos=
[(f.plotHighX+f.plotLowX)/2,(f.plotHigh+f.plotLow)/2]})};c.prototype.getGraphPath=function(b){var g=[],f=[],h,u=x.getGraphPath;var r=this.options;var a=this.chart.polar,v=a&&!1!==r.connectEnds,n=r.connectNulls,c=r.step;b=b||this.points;for(h=b.length;h--;){var m=b[h];var k=a?{plotX:m.rectPlotX,plotY:m.yBottom,doCurve:!1}:{plotX:m.plotX,plotY:m.plotY,doCurve:!1};m.isNull||v||n||b[h+1]&&!b[h+1].isNull||f.push(k);var e={polarPlotY:m.polarPlotY,rectPlotX:m.rectPlotX,yBottom:m.yBottom,plotX:q(m.plotHighX,
m.plotX),plotY:m.plotHigh,isNull:m.isNull};f.push(e);g.push(e);m.isNull||v||n||b[h-1]&&!b[h-1].isNull||f.push(k)}b=u.call(this,b);c&&(!0===c&&(c="left"),r.step={left:"right",center:"center",right:"left"}[c]);g=u.call(this,g);f=u.call(this,f);r.step=c;r=[].concat(b,g);!this.chart.polar&&f[0]&&"M"===f[0][0]&&(f[0]=["L",f[0][1],f[0][2]]);this.graphPath=r;this.areaPath=b.concat(f);r.isArea=!0;r.xMap=b.xMap;this.areaPath.xMap=b.xMap;return r};c.prototype.drawDataLabels=function(){var g=this.points,a=g.length,
f,h=[],u=this.options.dataLabels,r,B=this.chart.inverted;if(u){if(n(u)){var v=u[0]||{enabled:!1};var c=u[1]||{enabled:!1}}else v=m({},u),v.x=u.xHigh,v.y=u.yHigh,c=m({},u),c.x=u.xLow,c.y=u.yLow;if(v.enabled||this._hasPointLabels){for(f=a;f--;)if(r=g[f]){var q=v.inside?r.plotHigh<r.plotLow:r.plotHigh>r.plotLow;r.y=r.high;r._plotY=r.plotY;r.plotY=r.plotHigh;h[f]=r.dataLabel;r.dataLabel=r.dataLabelUpper;r.below=q;B?v.align||(v.align=q?"right":"left"):v.verticalAlign||(v.verticalAlign=q?"top":"bottom")}this.options.dataLabels=
v;b.drawDataLabels&&b.drawDataLabels.apply(this,arguments);for(f=a;f--;)if(r=g[f])r.dataLabelUpper=r.dataLabel,r.dataLabel=h[f],delete r.dataLabels,r.y=r.low,r.plotY=r._plotY}if(c.enabled||this._hasPointLabels){for(f=a;f--;)if(r=g[f])q=c.inside?r.plotHigh<r.plotLow:r.plotHigh>r.plotLow,r.below=!q,B?c.align||(c.align=q?"left":"right"):c.verticalAlign||(c.verticalAlign=q?"bottom":"top");this.options.dataLabels=c;b.drawDataLabels&&b.drawDataLabels.apply(this,arguments)}if(v.enabled)for(f=a;f--;)if(r=
g[f])r.dataLabels=[r.dataLabelUpper,r.dataLabel].filter(function(h){return!!h});this.options.dataLabels=u}};c.prototype.alignDataLabel=function(){w.alignDataLabel.apply(this,arguments)};c.prototype.drawPoints=function(){var a=this.points.length,c;b.drawPoints.apply(this,arguments);for(c=0;c<a;){var f=this.points[c];f.origProps={plotY:f.plotY,plotX:f.plotX,isInside:f.isInside,negative:f.negative,zone:f.zone,y:f.y};f.lowerGraphic=f.graphic;f.graphic=f.upperGraphic;f.plotY=f.plotHigh;g(f.plotHighX)&&
(f.plotX=f.plotHighX);f.y=q(f.high,f.origProps.y);f.negative=f.y<(this.options.threshold||0);this.zones.length&&(f.zone=f.getZone());this.chart.polar||(f.isInside=f.isTopInside="undefined"!==typeof f.plotY&&0<=f.plotY&&f.plotY<=this.yAxis.len&&0<=f.plotX&&f.plotX<=this.xAxis.len);c++}b.drawPoints.apply(this,arguments);for(c=0;c<a;)f=this.points[c],f.upperGraphic=f.graphic,f.graphic=f.lowerGraphic,f.origProps&&(m(f,f.origProps),delete f.origProps),c++};c.defaultOptions=H(e.defaultOptions,{lineWidth:1,
threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{align:void 0,verticalAlign:void 0,xLow:0,xHigh:0,yLow:0,yHigh:0}});return c}(e);m(c.prototype,{pointArrayMap:["low","high"],pointValKey:"low",deferTranslatePolar:!0,pointClass:d,setStackedPoints:l});t.registerSeriesType("arearange",c);"";return c});A(d,"Series/AreaSplineRange/AreaSplineRangeSeries.js",[d["Series/AreaRange/AreaRangeSeries.js"],
d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,e,l){var a=this&&this.__extends||function(){var a=function(c,k){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,g){b.__proto__=g}||function(b,g){for(var a in g)g.hasOwnProperty(a)&&(b[a]=g[a])};return a(c,k)};return function(c,k){function b(){this.constructor=c}a(c,k);c.prototype=null===k?Object.create(k):(b.prototype=k.prototype,new b)}}(),c=e.seriesTypes.spline,t=l.merge;l=l.extend;var p=function(c){function k(){var a=
null!==c&&c.apply(this,arguments)||this;a.options=void 0;a.data=void 0;a.points=void 0;return a}a(k,c);k.defaultOptions=t(d.defaultOptions);return k}(d);l(p.prototype,{getPointSpline:c.prototype.getPointSpline});e.registerSeriesType("areasplinerange",p);"";return p});A(d,"Series/BoxPlot/BoxPlotSeries.js",[d["Series/Column/ColumnSeries.js"],d["Core/Globals.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,e,l,a){var c=this&&this.__extends||function(){var a=function(c,b){a=
Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var g in a)a.hasOwnProperty(g)&&(b[g]=a[g])};return a(c,b)};return function(c,b){function g(){this.constructor=c}a(c,b);c.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)}}();e=e.noop;var t=a.extend,p=a.merge,k=a.pick;a=function(a){function e(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}c(e,a);e.prototype.pointAttribs=
function(){return{}};e.prototype.translate=function(){var b=this.yAxis,g=this.pointArrayMap;a.prototype.translate.apply(this);this.points.forEach(function(a){g.forEach(function(g){null!==a[g]&&(a[g+"Plot"]=b.translate(a[g],0,1,0,1))});a.plotHigh=a.highPlot})};e.prototype.drawPoints=function(){var b=this,g=b.options,a=b.chart,c=a.renderer,q,e,l,p,y,z,f=0,h,u,r,B,v=!1!==b.doQuartiles,E,d=b.options.whiskerLength;b.points.forEach(function(n){var m=n.graphic,H=m?"animate":"attr",t=n.shapeArgs,x={},I={},
w={},L={},M=n.color||b.color;"undefined"!==typeof n.plotY&&(h=Math.round(t.width),u=Math.floor(t.x),r=u+h,B=Math.round(h/2),q=Math.floor(v?n.q1Plot:n.lowPlot),e=Math.floor(v?n.q3Plot:n.lowPlot),l=Math.floor(n.highPlot),p=Math.floor(n.lowPlot),m||(n.graphic=m=c.g("point").add(b.group),n.stem=c.path().addClass("highcharts-boxplot-stem").add(m),d&&(n.whiskers=c.path().addClass("highcharts-boxplot-whisker").add(m)),v&&(n.box=c.path(void 0).addClass("highcharts-boxplot-box").add(m)),n.medianShape=c.path(void 0).addClass("highcharts-boxplot-median").add(m)),
a.styledMode||(I.stroke=n.stemColor||g.stemColor||M,I["stroke-width"]=k(n.stemWidth,g.stemWidth,g.lineWidth),I.dashstyle=n.stemDashStyle||g.stemDashStyle||g.dashStyle,n.stem.attr(I),d&&(w.stroke=n.whiskerColor||g.whiskerColor||M,w["stroke-width"]=k(n.whiskerWidth,g.whiskerWidth,g.lineWidth),w.dashstyle=n.whiskerDashStyle||g.whiskerDashStyle||g.dashStyle,n.whiskers.attr(w)),v&&(x.fill=n.fillColor||g.fillColor||M,x.stroke=g.lineColor||M,x["stroke-width"]=g.lineWidth||0,x.dashstyle=n.boxDashStyle||g.boxDashStyle||
g.dashStyle,n.box.attr(x)),L.stroke=n.medianColor||g.medianColor||M,L["stroke-width"]=k(n.medianWidth,g.medianWidth,g.lineWidth),L.dashstyle=n.medianDashStyle||g.medianDashStyle||g.dashStyle,n.medianShape.attr(L)),z=n.stem.strokeWidth()%2/2,f=u+B+z,m=[["M",f,e],["L",f,l],["M",f,q],["L",f,p]],n.stem[H]({d:m}),v&&(z=n.box.strokeWidth()%2/2,q=Math.floor(q)+z,e=Math.floor(e)+z,u+=z,r+=z,m=[["M",u,e],["L",u,q],["L",r,q],["L",r,e],["L",u,e],["Z"]],n.box[H]({d:m})),d&&(z=n.whiskers.strokeWidth()%2/2,l+=
z,p+=z,E=/%$/.test(d)?B*parseFloat(d)/100:d/2,m=[["M",f-E,l],["L",f+E,l],["M",f-E,p],["L",f+E,p]],n.whiskers[H]({d:m})),y=Math.round(n.medianPlot),z=n.medianShape.strokeWidth()%2/2,y+=z,m=[["M",u,y],["L",r,y]],n.medianShape[H]({d:m}))})};e.prototype.toYData=function(b){return[b.low,b.q1,b.median,b.q3,b.high]};e.defaultOptions=p(d.defaultOptions,{threshold:null,tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},
whiskerLength:"50%",fillColor:"#ffffff",lineWidth:1,medianWidth:2,whiskerWidth:2});return e}(d);t(a.prototype,{pointArrayMap:["low","q1","median","q3","high"],pointValKey:"high",drawDataLabels:e,setStackedPoints:e});l.registerSeriesType("boxplot",a);"";return a});A(d,"Series/Bubble/BubbleLegendDefaults.js",[],function(){return{borderColor:void 0,borderWidth:2,className:void 0,color:void 0,connectorClassName:void 0,connectorColor:void 0,connectorDistance:60,connectorWidth:1,enabled:!1,labels:{className:void 0,
allowOverlap:!1,format:"",formatter:void 0,align:"right",style:{fontSize:"10px",color:"#000000"},x:0,y:0},maxSize:60,minSize:10,legendIndex:0,ranges:{value:void 0,borderColor:void 0,color:void 0,connectorColor:void 0},sizeBy:"area",sizeByAbsoluteValue:!1,zIndex:1,zThreshold:0}});A(d,"Series/Bubble/BubbleLegendItem.js",[d["Core/Color/Color.js"],d["Core/FormatUtilities.js"],d["Core/Globals.js"],d["Core/Utilities.js"]],function(d,e,l,a){var c=d.parse,t=l.noop,p=a.arrayMax,k=a.arrayMin,x=a.isNumber,w=
a.merge,b=a.pick,g=a.stableSort;"";return function(){function a(b,a){this.options=this.symbols=this.visible=this.selected=this.ranges=this.movementX=this.maxLabel=this.legendSymbol=this.legendItemWidth=this.legendItemHeight=this.legendItem=this.legendGroup=this.legend=this.fontMetrics=this.chart=void 0;this.setState=t;this.init(b,a)}a.prototype.init=function(b,a){this.options=b;this.visible=!0;this.chart=a.chart;this.legend=a};a.prototype.addToLegend=function(b){b.splice(this.options.legendIndex,
0,this)};a.prototype.drawLegendSymbol=function(a){var c=this.chart,n=this.options,e=b(a.options.itemDistance,20),k=n.ranges,m=n.connectorDistance;this.fontMetrics=c.renderer.fontMetrics(n.labels.style.fontSize);k&&k.length&&x(k[0].value)?(g(k,function(b,f){return f.value-b.value}),this.ranges=k,this.setOptions(),this.render(),a=this.getMaxLabelSize(),k=this.ranges[0].radius,c=2*k,m=m-k+a.width,m=0<m?m:0,this.maxLabel=a,this.movementX="left"===n.labels.align?m:0,this.legendItemWidth=c+m+e,this.legendItemHeight=
c+this.fontMetrics.h/2):a.options.bubbleLegend.autoRanges=!0};a.prototype.setOptions=function(){var a=this.ranges,g=this.options,k=this.chart.series[g.seriesIndex],e=this.legend.baseline,m={zIndex:g.zIndex,"stroke-width":g.borderWidth},l={zIndex:g.zIndex,"stroke-width":g.connectorWidth},z={align:this.legend.options.rtl||"left"===g.labels.align?"right":"left",zIndex:g.zIndex},f=k.options.marker.fillOpacity,h=this.chart.styledMode;a.forEach(function(u,r){h||(m.stroke=b(u.borderColor,g.borderColor,k.color),
m.fill=b(u.color,g.color,1!==f?c(k.color).setOpacity(f).get("rgba"):k.color),l.stroke=b(u.connectorColor,g.connectorColor,k.color));a[r].radius=this.getRangeRadius(u.value);a[r]=w(a[r],{center:a[0].radius-a[r].radius+e});h||w(!0,a[r],{bubbleAttribs:w(m),connectorAttribs:w(l),labelAttribs:z})},this)};a.prototype.getRangeRadius=function(b){var a=this.options;return this.chart.series[this.options.seriesIndex].getRadius.call(this,a.ranges[a.ranges.length-1].value,a.ranges[0].value,a.minSize,a.maxSize,
b)};a.prototype.render=function(){var b=this.chart.renderer,a=this.options.zThreshold;this.symbols||(this.symbols={connectors:[],bubbleItems:[],labels:[]});this.legendSymbol=b.g("bubble-legend");this.legendItem=b.g("bubble-legend-item");this.legendSymbol.translateX=0;this.legendSymbol.translateY=0;this.ranges.forEach(function(b){b.value>=a&&this.renderRange(b)},this);this.legendSymbol.add(this.legendItem);this.legendItem.add(this.legendGroup);this.hideOverlappingLabels()};a.prototype.renderRange=
function(b){var a=this.options,g=a.labels,c=this.chart,n=c.series[a.seriesIndex],k=c.renderer,e=this.symbols;c=e.labels;var f=b.center,h=Math.abs(b.radius),u=a.connectorDistance||0,r=g.align,B=a.connectorWidth,v=this.ranges[0].radius||0,m=f-h-a.borderWidth/2+B/2,l=this.fontMetrics;l=l.f/2-(l.h-l.f)/2;var d=k.styledMode;u=this.legend.options.rtl||"left"===r?-u:u;"center"===r&&(u=0,a.connectorDistance=0,b.labelAttribs.align="center");r=m+a.labels.y;var p=v+u+a.labels.x;e.bubbleItems.push(k.circle(v,
f+((m%1?1:.5)-(B%2?0:.5)),h).attr(d?{}:b.bubbleAttribs).addClass((d?"highcharts-color-"+n.colorIndex+" ":"")+"highcharts-bubble-legend-symbol "+(a.className||"")).add(this.legendSymbol));e.connectors.push(k.path(k.crispLine([["M",v,m],["L",v+u,m]],a.connectorWidth)).attr(d?{}:b.connectorAttribs).addClass((d?"highcharts-color-"+this.options.seriesIndex+" ":"")+"highcharts-bubble-legend-connectors "+(a.connectorClassName||"")).add(this.legendSymbol));b=k.text(this.formatLabel(b),p,r+l).attr(d?{}:b.labelAttribs).css(d?
{}:g.style).addClass("highcharts-bubble-legend-labels "+(a.labels.className||"")).add(this.legendSymbol);c.push(b);b.placed=!0;b.alignAttr={x:p,y:r+l}};a.prototype.getMaxLabelSize=function(){var b,a;this.symbols.labels.forEach(function(g){a=g.getBBox(!0);b=b?a.width>b.width?a:b:a});return b||{}};a.prototype.formatLabel=function(b){var a=this.options,g=a.labels.formatter;a=a.labels.format;var c=this.chart.numberFormatter;return a?e.format(a,b):g?g.call(b):c(b.value,1)};a.prototype.hideOverlappingLabels=
function(){var b=this.chart,a=this.symbols;!this.options.labels.allowOverlap&&a&&(b.hideOverlappingLabels(a.labels),a.labels.forEach(function(b,g){b.newOpacity?b.newOpacity!==b.oldOpacity&&a.connectors[g].show():a.connectors[g].hide()}))};a.prototype.getRanges=function(){var a=this.legend.bubbleLegend,g=a.options.ranges,c,e=Number.MAX_VALUE,m=-Number.MAX_VALUE;a.chart.series.forEach(function(a){a.isBubble&&!a.ignoreSeries&&(c=a.zData.filter(x),c.length&&(e=b(a.options.zMin,Math.min(e,Math.max(k(c),
!1===a.options.displayNegative?a.options.zThreshold:-Number.MAX_VALUE))),m=b(a.options.zMax,Math.max(m,p(c)))))});var l=e===m?[{value:m}]:[{value:e},{value:(e+m)/2},{value:m,autoRanges:!0}];g.length&&g[0].radius&&l.reverse();l.forEach(function(b,f){g&&g[f]&&(l[f]=w(g[f],b))});return l};a.prototype.predictBubbleSizes=function(){var b=this.chart,a=this.fontMetrics,g=b.legend.options,c=g.floating,k=(g="horizontal"===g.layout)?b.legend.lastLineHeight:0,e=b.plotSizeX,m=b.plotSizeY,f=b.series[this.options.seriesIndex],
h=f.getPxExtremes();b=Math.ceil(h.minPxSize);h=Math.ceil(h.maxPxSize);var u=Math.min(m,e);f=f.options.maxSize;if(c||!/%$/.test(f))a=h;else if(f=parseFloat(f),a=(u+k-a.h/2)*f/100/(f/100+1),g&&m-a>=e||!g&&e-a>=m)a=h;return[b,Math.ceil(a)]};a.prototype.updateRanges=function(b,a){var g=this.legend.options.bubbleLegend;g.minSize=b;g.maxSize=a;g.ranges=this.getRanges()};a.prototype.correctSizes=function(){var b=this.legend,a=this.chart.series[this.options.seriesIndex].getPxExtremes();1<Math.abs(Math.ceil(a.maxPxSize)-
this.options.maxSize)&&(this.updateRanges(this.options.minSize,a.maxPxSize),b.render())};return a}()});A(d,"Series/Bubble/BubbleLegendComposition.js",[d["Series/Bubble/BubbleLegendDefaults.js"],d["Series/Bubble/BubbleLegendItem.js"],d["Core/DefaultOptions.js"],d["Core/Utilities.js"]],function(d,e,l,a){var c=l.setOptions,t=a.addEvent,p=a.objectEach,k=a.wrap,x;(function(a){function b(b,a,c){var f=this.legend,h=0<=g(this);if(f&&f.options.enabled&&f.bubbleLegend&&f.options.bubbleLegend.autoRanges&&h){var u=
f.bubbleLegend.options;h=f.bubbleLegend.predictBubbleSizes();f.bubbleLegend.updateRanges(h[0],h[1]);u.placed||(f.group.placed=!1,f.allItems.forEach(function(h){h.legendGroup.translateY=null}));f.render();this.getMargins();this.axes.forEach(function(h){h.visible&&h.render();u.placed||(h.setScale(),h.updateNames(),p(h.ticks,function(h){h.isNew=!0;h.isNewLabel=!0}))});u.placed=!0;this.getMargins();b.call(this,a,c);f.bubbleLegend.correctSizes();x(f,m(f))}else b.call(this,a,c),f&&f.options.enabled&&f.bubbleLegend&&
(f.render(),x(f,m(f)))}function g(b){b=b.series;for(var a=0;a<b.length;){if(b[a]&&b[a].isBubble&&b[a].visible&&b[a].zData.length)return a;a++}return-1}function m(b){b=b.allItems;var a=[],g=b.length,f,h=0;for(f=0;f<g;f++)if(b[f].legendItemHeight&&(b[f].itemHeight=b[f].legendItemHeight),b[f]===b[g-1]||b[f+1]&&b[f]._legendItemPos[1]!==b[f+1]._legendItemPos[1]){a.push({height:0});var u=a[a.length-1];for(h;h<=f;h++)b[h].itemHeight>u.height&&(u.height=b[h].itemHeight);u.step=f}return a}function n(b){var a=
this.bubbleLegend,c=this.options,f=c.bubbleLegend,h=g(this.chart);a&&a.ranges&&a.ranges.length&&(f.ranges.length&&(f.autoRanges=!!f.ranges[0].autoRanges),this.destroyItem(a));0<=h&&c.enabled&&f.enabled&&(f.seriesIndex=h,this.bubbleLegend=new e(f,this),this.bubbleLegend.addToLegend(b.allItems))}function l(){var b=this.chart,a=this.visible,c=this.chart.legend;c&&c.bubbleLegend&&(this.visible=!a,this.ignoreSeries=a,b=0<=g(b),c.bubbleLegend.visible!==b&&(c.update({bubbleLegend:{enabled:b}}),c.bubbleLegend.visible=
b),this.visible=a)}function x(b,a){var g=b.options.rtl,f,h,u,r=0;b.allItems.forEach(function(b,c){f=b.legendGroup.translateX;h=b._legendItemPos[1];if((u=b.movementX)||g&&b.ranges)u=g?f-b.options.maxSize/2:f+u,b.legendGroup.attr({translateX:u});c>a[r].step&&r++;b.legendGroup.attr({translateY:Math.round(h+a[r].height/2)});b._legendItemPos[1]=h+a[r].height/2})}var w=[];a.compose=function(a,g,e){-1===w.indexOf(a)&&(w.push(a),c({legend:{bubbleLegend:d}}),k(a.prototype,"drawChartBox",b));-1===w.indexOf(g)&&
(w.push(g),t(g,"afterGetAllItems",n));-1===w.indexOf(e)&&(w.push(e),t(e,"legendItemClick",l))}})(x||(x={}));return x});A(d,"Series/Bubble/BubblePoint.js",[d["Core/Series/Point.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,e,l){var a=this&&this.__extends||function(){var a=function(c,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e])};return a(c,e)};return function(c,e){function k(){this.constructor=
c}a(c,e);c.prototype=null===e?Object.create(e):(k.prototype=e.prototype,new k)}}();l=l.extend;e=function(c){function e(){var a=null!==c&&c.apply(this,arguments)||this;a.options=void 0;a.series=void 0;return a}a(e,c);e.prototype.haloPath=function(a){return d.prototype.haloPath.call(this,0===a?0:(this.marker?this.marker.radius||0:0)+a)};return e}(e.seriesTypes.scatter.prototype.pointClass);l(e.prototype,{ttBelow:!1});return e});A(d,"Series/Bubble/BubbleSeries.js",[d["Core/Axis/Axis.js"],d["Series/Bubble/BubbleLegendComposition.js"],
d["Series/Bubble/BubblePoint.js"],d["Core/Color/Color.js"],d["Core/Globals.js"],d["Core/Series/Series.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,e,l,a,c,t,p,k){var x=this&&this.__extends||function(){var b=function(f,h){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,h){b.__proto__=h}||function(b,h){for(var f in h)h.hasOwnProperty(f)&&(b[f]=h[f])};return b(f,h)};return function(f,h){function a(){this.constructor=f}b(f,h);f.prototype=null===h?Object.create(h):
(a.prototype=h.prototype,new a)}}(),w=a.parse;a=c.noop;var b=p.seriesTypes;c=b.column;var g=b.scatter;b=k.addEvent;var m=k.arrayMax,n=k.arrayMin,q=k.clamp,H=k.extend,K=k.isNumber,I=k.merge,y=k.pick;k=function(b){function f(){var h=null!==b&&b.apply(this,arguments)||this;h.data=void 0;h.maxPxSize=void 0;h.minPxSize=void 0;h.options=void 0;h.points=void 0;h.radii=void 0;h.yData=void 0;h.zData=void 0;return h}x(f,b);f.prototype.animate=function(b){!b&&this.points.length<this.options.animationLimit&&
this.points.forEach(function(b){var h=b.graphic;h&&h.width&&(this.hasRendered||h.attr({x:b.plotX,y:b.plotY,width:1,height:1}),h.animate(this.markerAttribs(b),this.options.animation))},this)};f.prototype.getRadii=function(){var b=this,f=this.zData,a=this.yData,g=[],c=this.chart.bubbleZExtremes;var e=this.getPxExtremes();var m=e.minPxSize,k=e.maxPxSize;if(!c){var n=Number.MAX_VALUE,l=-Number.MAX_VALUE,d;this.chart.series.forEach(function(h){h.bubblePadding&&(h.visible||!b.chart.options.chart.ignoreHiddenSeries)&&
(h=h.getZExtremes())&&(n=Math.min(n||h.zMin,h.zMin),l=Math.max(l||h.zMax,h.zMax),d=!0)});d?(c={zMin:n,zMax:l},this.chart.bubbleZExtremes=c):c={zMin:0,zMax:0}}var p=0;for(e=f.length;p<e;p++){var q=f[p];g.push(this.getRadius(c.zMin,c.zMax,m,k,q,a[p]))}this.radii=g};f.prototype.getRadius=function(b,f,a,g,c,e){var h=this.options,r="width"!==h.sizeBy,u=h.zThreshold,v=f-b,m=.5;if(null===e||null===c)return null;if(K(c)){h.sizeByAbsoluteValue&&(c=Math.abs(c-u),v=Math.max(f-u,Math.abs(b-u)),b=0);if(c<b)return a/
2-1;0<v&&(m=(c-b)/v)}r&&0<=m&&(m=Math.sqrt(m));return Math.ceil(a+m*(g-a))/2};f.prototype.hasData=function(){return!!this.processedXData.length};f.prototype.pointAttribs=function(b,f){var h=this.options.marker.fillOpacity;b=t.prototype.pointAttribs.call(this,b,f);1!==h&&(b.fill=w(b.fill).setOpacity(h).get("rgba"));return b};f.prototype.translate=function(){b.prototype.translate.call(this);this.getRadii();this.translateBubble()};f.prototype.translateBubble=function(){for(var b=this.data,f=this.radii,
a=this.getPxExtremes().minPxSize,g=b.length;g--;){var c=b[g],e=f?f[g]:0;K(e)&&e>=a/2?(c.marker=H(c.marker,{radius:e,width:2*e,height:2*e}),c.dlBox={x:c.plotX-e,y:c.plotY-e,width:2*e,height:2*e}):c.shapeArgs=c.plotY=c.dlBox=void 0}};f.prototype.getPxExtremes=function(){var b=Math.min(this.chart.plotWidth,this.chart.plotHeight),f=function(h){if("string"===typeof h){var f=/%$/.test(h);h=parseInt(h,10)}return f?b*h/100:h},a=f(y(this.options.minSize,8));f=Math.max(f(y(this.options.maxSize,"20%")),a);return{minPxSize:a,
maxPxSize:f}};f.prototype.getZExtremes=function(){var b=this.options,f=(this.zData||[]).filter(K);if(f.length){var a=y(b.zMin,q(n(f),!1===b.displayNegative?b.zThreshold||0:-Number.MAX_VALUE,Number.MAX_VALUE));b=y(b.zMax,m(f));if(K(a)&&K(b))return{zMin:a,zMax:b}}};f.compose=e.compose;f.defaultOptions=I(g.defaultOptions,{dataLabels:{formatter:function(){var b=this.series.chart.numberFormatter,f=this.point.z;return K(f)?b(f,-1):""},inside:!0,verticalAlign:"middle"},animationLimit:250,marker:{lineColor:null,
lineWidth:1,fillOpacity:.5,radius:null,states:{hover:{radiusPlus:0}},symbol:"circle"},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"});return f}(g);H(k.prototype,{alignDataLabel:c.prototype.alignDataLabel,applyZones:a,bubblePadding:!0,buildKDTree:a,directTouch:!0,isBubble:!0,pointArrayMap:["y","z"],pointClass:l,parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],
specialGroup:"group",zoneAxis:"z"});b(k,"updatedData",function(b){delete b.target.chart.bubbleZExtremes});d.prototype.beforePadding=function(){var b=this,f=this.len,h=this.chart,a=0,g=f,c=this.isXAxis,v=c?"xData":"yData",e=this.min,m=this.max-e,k=f/m,n;this.series.forEach(function(f){if(f.bubblePadding&&(f.visible||!h.options.chart.ignoreHiddenSeries)){n=b.allowZoomOutside=!0;var r=f[v];c&&f.getRadii(0,0,f);if(0<m)for(var u=r.length;u--;)if(K(r[u])&&b.dataMin<=r[u]&&r[u]<=b.max){var B=f.radii&&f.radii[u]||
0;a=Math.min((r[u]-e)*k-B,a);g=Math.max((r[u]-e)*k+B,g)}}});n&&0<m&&!this.logarithmic&&(g-=f,k*=(f+Math.max(0,a)-Math.min(g,f))/f,[["min","userMin",a],["max","userMax",g]].forEach(function(h){"undefined"===typeof y(b.options[h[0]],b[h[1]])&&(b[h[0]]+=h[2]/k)}))};p.registerSeriesType("bubble",k);"";"";return k});A(d,"Series/ColumnRange/ColumnRangePoint.js",[d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,e){var l=this&&this.__extends||function(){var a=function(c,e){a=Object.setPrototypeOf||
{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var g in b)b.hasOwnProperty(g)&&(a[g]=b[g])};return a(c,e)};return function(c,e){function k(){this.constructor=c}a(c,e);c.prototype=null===e?Object.create(e):(k.prototype=e.prototype,new k)}}(),a=d.seriesTypes;d=a.column.prototype.pointClass;var c=e.extend,t=e.isNumber;e=function(a){function c(){var c=null!==a&&a.apply(this,arguments)||this;c.series=void 0;c.options=void 0;c.barX=void 0;c.pointWidth=void 0;c.shapeType=
void 0;return c}l(c,a);c.prototype.isValid=function(){return t(this.low)};return c}(a.arearange.prototype.pointClass);c(e.prototype,{setState:d.prototype.setState});return e});A(d,"Series/ColumnRange/ColumnRangeSeries.js",[d["Series/ColumnRange/ColumnRangePoint.js"],d["Core/Globals.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,e,l,a){var c=this&&this.__extends||function(){var b=function(a,g){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=
a}||function(b,a){for(var g in a)a.hasOwnProperty(g)&&(b[g]=a[g])};return b(a,g)};return function(a,g){function c(){this.constructor=a}b(a,g);a.prototype=null===g?Object.create(g):(c.prototype=g.prototype,new c)}}();e=e.noop;var t=l.seriesTypes,p=t.arearange,k=t.column,x=k.prototype,w=p.prototype,b=a.clamp,g=a.merge,m=a.pick;a=a.extend;var n={pointRange:null,marker:null,states:{hover:{halo:!1}}};t=function(a){function e(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.points=void 0;
b.options=void 0;return b}c(e,a);e.prototype.setOptions=function(){g(!0,arguments[0],{stacking:void 0});return w.setOptions.apply(this,arguments)};e.prototype.translate=function(){var a=this,g=a.yAxis,c=a.xAxis,e=c.startAngleRad,f,h=a.chart,u=a.xAxis.isRadial,r=Math.max(h.chartWidth,h.chartHeight)+999,k;x.translate.apply(a);a.points.forEach(function(v){var n=v.shapeArgs||{},B=a.options.minPointLength;v.plotHigh=k=b(g.translate(v.high,0,1,0,1),-r,r);v.plotLow=b(v.plotY,-r,r);var l=k;var d=m(v.rectPlotY,
v.plotY)-k;Math.abs(d)<B?(B-=d,d+=B,l-=B/2):0>d&&(d*=-1,l-=d);u?(f=v.barX+e,v.shapeType="arc",v.shapeArgs=a.polarArc(l+d,l,f,f+v.pointWidth)):(n.height=d,n.y=l,B=n.x,B=void 0===B?0:B,n=n.width,n=void 0===n?0:n,v.tooltipPos=h.inverted?[g.len+g.pos-h.plotLeft-l-d/2,c.len+c.pos-h.plotTop-B-n/2,d]:[c.left-h.plotLeft+B+n/2,g.pos-h.plotTop+l+d/2,d])})};e.prototype.crispCol=function(){return x.crispCol.apply(this,arguments)};e.prototype.drawPoints=function(){return x.drawPoints.apply(this,arguments)};e.prototype.drawTracker=
function(){return x.drawTracker.apply(this,arguments)};e.prototype.getColumnMetrics=function(){return x.getColumnMetrics.apply(this,arguments)};e.prototype.pointAttribs=function(){return x.pointAttribs.apply(this,arguments)};e.prototype.adjustForMissingColumns=function(){return x.adjustForMissingColumns.apply(this,arguments)};e.prototype.animate=function(){return x.animate.apply(this,arguments)};e.prototype.translate3dPoints=function(){return x.translate3dPoints.apply(this,arguments)};e.prototype.translate3dShapes=
function(){return x.translate3dShapes.apply(this,arguments)};e.defaultOptions=g(k.defaultOptions,p.defaultOptions,n);return e}(p);a(t.prototype,{directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:e,getSymbol:e,polarArc:function(){return x.polarArc.apply(this,arguments)},pointClass:d});l.registerSeriesType("columnrange",t);"";return t});A(d,"Series/ColumnPyramid/ColumnPyramidSeries.js",[d["Series/Column/ColumnSeries.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,
e,l){var a=this&&this.__extends||function(){var a=function(c,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var g in a)a.hasOwnProperty(g)&&(b[g]=a[g])};return a(c,b)};return function(c,b){function g(){this.constructor=c}a(c,b);c.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)}}(),c=d.prototype,t=l.clamp,p=l.merge,k=l.pick;l=function(e){function l(){var b=null!==e&&e.apply(this,arguments)||this;b.data=void 0;b.options=
void 0;b.points=void 0;return b}a(l,e);l.prototype.translate=function(){var b=this,a=b.chart,e=b.options,n=b.dense=2>b.closestPointRange*b.xAxis.transA;n=b.borderWidth=k(e.borderWidth,n?0:1);var d=b.yAxis,l=e.threshold,p=b.translatedThreshold=d.getThreshold(l),x=k(e.minPointLength,5),w=b.getColumnMetrics(),z=w.width,f=b.barW=Math.max(z,1+2*n),h=b.pointXOffset=w.offset;a.inverted&&(p-=.5);e.pointPadding&&(f=Math.ceil(f));c.translate.apply(b);b.points.forEach(function(g){var c=k(g.yBottom,p),u=999+
Math.abs(c),v=t(g.plotY,-u,d.len+u);u=g.plotX+h;var m=f/2,n=Math.min(v,c);c=Math.max(v,c)-n;var q;g.barX=u;g.pointWidth=z;g.tooltipPos=a.inverted?[d.len+d.pos-a.plotLeft-v,b.xAxis.len-u-m,c]:[u+m,v+d.pos-a.plotTop,c];v=l+(g.total||g.y);"percent"===e.stacking&&(v=l+(0>g.y)?-100:100);v=d.toPixels(v,!0);var w=(q=a.plotHeight-v-(a.plotHeight-p))?m*(n-v)/q:0;var y=q?m*(n+c-v)/q:0;q=u-w+m;w=u+w+m;var C=u+y+m;y=u-y+m;var H=n-x;var D=n+c;0>g.y&&(H=n,D=n+c+x);a.inverted&&(C=d.width-n,q=v-(d.width-p),w=m*(v-
C)/q,y=m*(v-(C-c))/q,q=u+m+w,w=q-2*w,C=u-y+m,y=u+y+m,H=n,D=n+c-x,0>g.y&&(D=n+c+x));g.shapeType="path";g.shapeArgs={x:q,y:H,width:w-q,height:c,d:[["M",q,H],["L",w,H],["L",C,D],["L",y,D],["Z"]]}})};l.defaultOptions=p(d.defaultOptions,{});return l}(d);e.registerSeriesType("columnpyramid",l);"";return l});A(d,"Series/ErrorBar/ErrorBarSeries.js",[d["Series/BoxPlot/BoxPlotSeries.js"],d["Series/Column/ColumnSeries.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,e,l,a){var c=this&&
this.__extends||function(){var a=function(c,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var g in a)a.hasOwnProperty(g)&&(b[g]=a[g])};return a(c,b)};return function(c,b){function g(){this.constructor=c}a(c,b);c.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)}}(),t=l.seriesTypes.arearange,p=a.merge;a=a.extend;var k=function(a){function k(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;
b.points=void 0;return b}c(k,a);k.prototype.getColumnMetrics=function(){return this.linkedParent&&this.linkedParent.columnMetrics||e.prototype.getColumnMetrics.call(this)};k.prototype.drawDataLabels=function(){var b=this.pointValKey;t&&(t.prototype.drawDataLabels.call(this),this.data.forEach(function(a){a.y=a[b]}))};k.prototype.toYData=function(b){return[b.low,b.high]};k.defaultOptions=p(d.defaultOptions,{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
whiskerWidth:null});return k}(d);a(k.prototype,{pointArrayMap:["low","high"],pointValKey:"high",doQuartiles:!1});l.registerSeriesType("errorbar",k);"";return k});A(d,"Series/Gauge/GaugePoint.js",[d["Core/Series/SeriesRegistry.js"]],function(d){var e=this&&this.__extends||function(){var e=function(a,c){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e])};return e(a,c)};return function(a,c){function d(){this.constructor=
a}e(a,c);a.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.options=void 0;a.series=void 0;a.shapeArgs=void 0;return a}e(a,d);a.prototype.setState=function(a){this.state=a};return a}(d.series.prototype.pointClass)});A(d,"Series/Gauge/GaugeSeries.js",[d["Series/Gauge/GaugePoint.js"],d["Core/Globals.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,e,l,a){var c=this&&this.__extends||
function(){var b=function(a,g){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var g in a)a.hasOwnProperty(g)&&(b[g]=a[g])};return b(a,g)};return function(a,g){function c(){this.constructor=a}b(a,g);a.prototype=null===g?Object.create(g):(c.prototype=g.prototype,new c)}}();e=e.noop;var t=l.series,p=l.seriesTypes.column,k=a.clamp,x=a.isNumber,w=a.extend,b=a.merge,g=a.pick,m=a.pInt;a=function(a){function e(){var b=null!==a&&a.apply(this,arguments)||
this;b.data=void 0;b.points=void 0;b.options=void 0;b.yAxis=void 0;return b}c(e,a);e.prototype.translate=function(){var a=this.yAxis,c=this.options,e=a.center;this.generatePoints();this.points.forEach(function(d){var n=b(c.dial,d.dial),f=m(g(n.radius,"80%"))*e[2]/200,h=m(g(n.baseLength,"70%"))*f/100,u=m(g(n.rearLength,"10%"))*f/100,r=n.baseWidth||3,l=n.topWidth||1,v=c.overshoot,p=a.startAngleRad+a.translate(d.y,null,null,null,!0);if(x(v)||!1===c.wrap)v=x(v)?v/180*Math.PI:0,p=k(p,a.startAngleRad-v,
a.endAngleRad+v);p=180*p/Math.PI;d.shapeType="path";d.shapeArgs={d:n.path||[["M",-u,-r/2],["L",h,-r/2],["L",f,-l/2],["L",f,l/2],["L",h,r/2],["L",-u,r/2],["Z"]],translateX:e[0],translateY:e[1],rotation:p};d.plotX=e[0];d.plotY=e[1]})};e.prototype.drawPoints=function(){var a=this,c=a.chart,e=a.yAxis.center,d=a.pivot,m=a.options,f=m.pivot,h=c.renderer;a.points.forEach(function(f){var g=f.graphic,e=f.shapeArgs,u=e.d,d=b(m.dial,f.dial);g?(g.animate(e),e.d=u):f.graphic=h[f.shapeType](e).attr({rotation:e.rotation,
zIndex:1}).addClass("highcharts-dial").add(a.group);if(!c.styledMode)f.graphic[g?"animate":"attr"]({stroke:d.borderColor||"none","stroke-width":d.borderWidth||0,fill:d.backgroundColor||"#000000"})});d?d.animate({translateX:e[0],translateY:e[1]}):(a.pivot=h.circle(0,0,g(f.radius,5)).attr({zIndex:2}).addClass("highcharts-pivot").translate(e[0],e[1]).add(a.group),c.styledMode||a.pivot.attr({"stroke-width":f.borderWidth||0,stroke:f.borderColor||"#cccccc",fill:f.backgroundColor||"#000000"}))};e.prototype.animate=
function(b){var a=this;b||a.points.forEach(function(b){var g=b.graphic;g&&(g.attr({rotation:180*a.yAxis.startAngleRad/Math.PI}),g.animate({rotation:b.shapeArgs.rotation},a.options.animation))})};e.prototype.render=function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);t.prototype.render.call(this);this.group.clip(this.chart.clipRect)};e.prototype.setData=function(b,a){t.prototype.setData.call(this,b,!1);this.processData();
this.generatePoints();g(a,!0)&&this.chart.redraw()};e.prototype.hasData=function(){return!!this.points.length};e.defaultOptions=b(t.defaultOptions,{dataLabels:{borderColor:"#cccccc",borderRadius:3,borderWidth:1,crop:!1,defer:!1,enabled:!0,verticalAlign:"top",y:15,zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1});return e}(t);w(a.prototype,{angular:!0,directTouch:!0,drawGraph:e,drawTracker:p.prototype.drawTracker,fixedBox:!0,forceDL:!0,noSharedTooltip:!0,pointClass:d,trackerGroups:["group",
"dataLabelsGroup"]});l.registerSeriesType("gauge",a);"";return a});A(d,"Series/PackedBubble/PackedBubblePoint.js",[d["Core/Chart/Chart.js"],d["Core/Series/Point.js"],d["Core/Series/SeriesRegistry.js"]],function(d,e,l){var a=this&&this.__extends||function(){var a=function(c,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e])};return a(c,e)};return function(c,e){function d(){this.constructor=c}a(c,e);
c.prototype=null===e?Object.create(e):(d.prototype=e.prototype,new d)}}();return function(c){function l(){var a=null!==c&&c.apply(this,arguments)||this;a.degree=NaN;a.mass=NaN;a.radius=NaN;a.options=void 0;a.series=void 0;a.value=null;return a}a(l,c);l.prototype.destroy=function(){this.series.layout&&this.series.layout.removeElementFromCollection(this,this.series.layout.nodes);return e.prototype.destroy.apply(this,arguments)};l.prototype.firePointEvent=function(){var a=this.series.options;if(this.isParentNode&&
a.parentNode){var c=a.allowPointSelect;a.allowPointSelect=a.parentNode.allowPointSelect;e.prototype.firePointEvent.apply(this,arguments);a.allowPointSelect=c}else e.prototype.firePointEvent.apply(this,arguments)};l.prototype.select=function(){var a=this.series.chart;this.isParentNode?(a.getSelectedPoints=a.getSelectedParentNodes,e.prototype.select.apply(this,arguments),a.getSelectedPoints=d.prototype.getSelectedPoints):e.prototype.select.apply(this,arguments)};return l}(l.seriesTypes.bubble.prototype.pointClass)});
A(d,"Series/Networkgraph/DraggableNodes.js",[d["Core/Chart/Chart.js"],d["Core/Globals.js"],d["Core/Utilities.js"]],function(d,e,l){var a=l.addEvent;e.dragNodesMixin={onMouseDown:function(a,e){e=this.chart.pointer.normalize(e);a.fixedPosition={chartX:e.chartX,chartY:e.chartY,plotX:a.plotX,plotY:a.plotY};a.inDragMode=!0},onMouseMove:function(a,e){if(a.fixedPosition&&a.inDragMode){var c=this.chart,d=c.pointer.normalize(e);e=a.fixedPosition.chartX-d.chartX;d=a.fixedPosition.chartY-d.chartY;var l=void 0,
w=void 0,b=c.graphLayoutsLookup;if(5<Math.abs(e)||5<Math.abs(d))l=a.fixedPosition.plotX-e,w=a.fixedPosition.plotY-d,c.isInsidePlot(l,w)&&(a.plotX=l,a.plotY=w,a.hasDragged=!0,this.redrawHalo(a),b.forEach(function(b){b.restartSimulation()}))}},onMouseUp:function(a,e){a.fixedPosition&&(a.hasDragged&&(this.layout.enableSimulation?this.layout.start():this.chart.redraw()),a.inDragMode=a.hasDragged=!1,this.options.fixedDraggable||delete a.fixedPosition)},redrawHalo:function(a){a&&this.halo&&this.halo.attr({d:a.haloPath(this.options.states.hover.halo.size)})}};
a(d,"load",function(){var c=this,e,d,l;c.container&&(e=a(c.container,"mousedown",function(e){var k=c.hoverPoint;k&&k.series&&k.series.hasDraggableNodes&&k.series.options.draggable&&(k.series.onMouseDown(k,e),d=a(c.container,"mousemove",function(b){return k&&k.series&&k.series.onMouseMove(k,b)}),l=a(c.container.ownerDocument,"mouseup",function(b){d();l();return k&&k.series&&k.series.onMouseUp(k,b)}))}));a(c,"destroy",function(){e()})})});A(d,"Series/Networkgraph/Integrations.js",[d["Core/Globals.js"]],
function(d){d.networkgraphIntegrations={verlet:{attractiveForceFunction:function(e,d){return(d-e)/e},repulsiveForceFunction:function(e,d){return(d-e)/e*(d>e?1:0)},barycenter:function(){var e=this.options.gravitationalConstant,d=this.barycenter.xFactor,a=this.barycenter.yFactor;d=(d-(this.box.left+this.box.width)/2)*e;a=(a-(this.box.top+this.box.height)/2)*e;this.nodes.forEach(function(c){c.fixedPosition||(c.plotX-=d/c.mass/c.degree,c.plotY-=a/c.mass/c.degree)})},repulsive:function(e,d,a){d=d*this.diffTemperature/
e.mass/e.degree;e.fixedPosition||(e.plotX+=a.x*d,e.plotY+=a.y*d)},attractive:function(e,d,a){var c=e.getMass(),l=-a.x*d*this.diffTemperature;d=-a.y*d*this.diffTemperature;e.fromNode.fixedPosition||(e.fromNode.plotX-=l*c.fromNode/e.fromNode.degree,e.fromNode.plotY-=d*c.fromNode/e.fromNode.degree);e.toNode.fixedPosition||(e.toNode.plotX+=l*c.toNode/e.toNode.degree,e.toNode.plotY+=d*c.toNode/e.toNode.degree)},integrate:function(e,d){var a=-e.options.friction,c=e.options.maxSpeed,l=(d.plotX+d.dispX-d.prevX)*
a;a*=d.plotY+d.dispY-d.prevY;var p=Math.abs,k=p(l)/(l||1);p=p(a)/(a||1);l=k*Math.min(c,Math.abs(l));a=p*Math.min(c,Math.abs(a));d.prevX=d.plotX+d.dispX;d.prevY=d.plotY+d.dispY;d.plotX+=l;d.plotY+=a;d.temperature=e.vectorLength({x:l,y:a})},getK:function(e){return Math.pow(e.box.width*e.box.height/e.nodes.length,.5)}},euler:{attractiveForceFunction:function(e,d){return e*e/d},repulsiveForceFunction:function(e,d){return d*d/e},barycenter:function(){var e=this.options.gravitationalConstant,d=this.barycenter.xFactor,
a=this.barycenter.yFactor;this.nodes.forEach(function(c){if(!c.fixedPosition){var l=c.getDegree();l*=1+l/2;c.dispX+=(d-c.plotX)*e*l/c.degree;c.dispY+=(a-c.plotY)*e*l/c.degree}})},repulsive:function(e,d,a,c){e.dispX+=a.x/c*d/e.degree;e.dispY+=a.y/c*d/e.degree},attractive:function(e,d,a,c){var l=e.getMass(),p=a.x/c*d;d*=a.y/c;e.fromNode.fixedPosition||(e.fromNode.dispX-=p*l.fromNode/e.fromNode.degree,e.fromNode.dispY-=d*l.fromNode/e.fromNode.degree);e.toNode.fixedPosition||(e.toNode.dispX+=p*l.toNode/
e.toNode.degree,e.toNode.dispY+=d*l.toNode/e.toNode.degree)},integrate:function(e,d){d.dispX+=d.dispX*e.options.friction;d.dispY+=d.dispY*e.options.friction;var a=d.temperature=e.vectorLength({x:d.dispX,y:d.dispY});0!==a&&(d.plotX+=d.dispX/a*Math.min(Math.abs(d.dispX),e.temperature),d.plotY+=d.dispY/a*Math.min(Math.abs(d.dispY),e.temperature))},getK:function(e){return Math.pow(e.box.width*e.box.height/e.nodes.length,.3)}}}});A(d,"Series/Networkgraph/QuadTree.js",[d["Core/Globals.js"],d["Core/Utilities.js"]],
function(d,e){e=e.extend;var l=d.QuadTreeNode=function(a){this.box=a;this.boxSize=Math.min(a.width,a.height);this.nodes=[];this.body=this.isInternal=!1;this.isEmpty=!0};e(l.prototype,{insert:function(a,c){this.isInternal?this.nodes[this.getBoxPosition(a)].insert(a,c-1):(this.isEmpty=!1,this.body?c?(this.isInternal=!0,this.divideBox(),!0!==this.body&&(this.nodes[this.getBoxPosition(this.body)].insert(this.body,c-1),this.body=!0),this.nodes[this.getBoxPosition(a)].insert(a,c-1)):(c=new l({top:a.plotX,
left:a.plotY,width:.1,height:.1}),c.body=a,c.isInternal=!1,this.nodes.push(c)):(this.isInternal=!1,this.body=a))},updateMassAndCenter:function(){var a=0,c=0,e=0;this.isInternal?(this.nodes.forEach(function(d){d.isEmpty||(a+=d.mass,c+=d.plotX*d.mass,e+=d.plotY*d.mass)}),c/=a,e/=a):this.body&&(a=this.body.mass,c=this.body.plotX,e=this.body.plotY);this.mass=a;this.plotX=c;this.plotY=e},divideBox:function(){var a=this.box.width/2,c=this.box.height/2;this.nodes[0]=new l({left:this.box.left,top:this.box.top,
width:a,height:c});this.nodes[1]=new l({left:this.box.left+a,top:this.box.top,width:a,height:c});this.nodes[2]=new l({left:this.box.left+a,top:this.box.top+c,width:a,height:c});this.nodes[3]=new l({left:this.box.left,top:this.box.top+c,width:a,height:c})},getBoxPosition:function(a){var c=a.plotY<this.box.top+this.box.height/2;return a.plotX<this.box.left+this.box.width/2?c?0:3:c?1:2}});d=d.QuadTree=function(a,c,e,d){this.box={left:a,top:c,width:e,height:d};this.maxDepth=25;this.root=new l(this.box,
"0");this.root.isInternal=!0;this.root.isRoot=!0;this.root.divideBox()};e(d.prototype,{insertNodes:function(a){a.forEach(function(a){this.root.insert(a,this.maxDepth)},this)},visitNodeRecursive:function(a,c,e){var d;a||(a=this.root);a===this.root&&c&&(d=c(a));!1!==d&&(a.nodes.forEach(function(a){if(a.isInternal){c&&(d=c(a));if(!1===d)return;this.visitNodeRecursive(a,c,e)}else a.body&&c&&c(a.body);e&&e(a)},this),a===this.root&&e&&e(a))},calculateMassAndCenter:function(){this.visitNodeRecursive(null,
null,function(a){a.updateMassAndCenter()})}})});A(d,"Series/Networkgraph/Layouts.js",[d["Core/Chart/Chart.js"],d["Core/Animation/AnimationUtilities.js"],d["Core/Globals.js"],d["Core/Utilities.js"]],function(d,e,l,a){var c=e.setAnimation;e=a.addEvent;var t=a.clamp,p=a.defined,k=a.extend,x=a.isFunction,w=a.pick;l.layouts={"reingold-fruchterman":function(){}};k(l.layouts["reingold-fruchterman"].prototype,{init:function(b){this.options=b;this.nodes=[];this.links=[];this.series=[];this.box={x:0,y:0,width:0,
height:0};this.setInitialRendering(!0);this.integration=l.networkgraphIntegrations[b.integration];this.enableSimulation=b.enableSimulation;this.attractiveForce=w(b.attractiveForce,this.integration.attractiveForceFunction);this.repulsiveForce=w(b.repulsiveForce,this.integration.repulsiveForceFunction);this.approximation=b.approximation},updateSimulation:function(b){this.enableSimulation=w(b,this.options.enableSimulation)},start:function(){var b=this.series,a=this.options;this.currentStep=0;this.forces=
b[0]&&b[0].forces||[];this.chart=b[0]&&b[0].chart;this.initialRendering&&(this.initPositions(),b.forEach(function(b){b.finishedAnimating=!0;b.render()}));this.setK();this.resetSimulation(a);this.enableSimulation&&this.step()},step:function(){var b=this,a=this.series;b.currentStep++;"barnes-hut"===b.approximation&&(b.createQuadTree(),b.quadTree.calculateMassAndCenter());b.forces.forEach(function(a){b[a+"Forces"](b.temperature)});b.applyLimits(b.temperature);b.temperature=b.coolDown(b.startTemperature,
b.diffTemperature,b.currentStep);b.prevSystemTemperature=b.systemTemperature;b.systemTemperature=b.getSystemTemperature();b.enableSimulation&&(a.forEach(function(b){b.chart&&b.render()}),b.maxIterations--&&isFinite(b.temperature)&&!b.isStable()?(b.simulation&&l.win.cancelAnimationFrame(b.simulation),b.simulation=l.win.requestAnimationFrame(function(){b.step()})):b.simulation=!1)},stop:function(){this.simulation&&l.win.cancelAnimationFrame(this.simulation)},setArea:function(b,a,c,e){this.box={left:b,
top:a,width:c,height:e}},setK:function(){this.k=this.options.linkLength||this.integration.getK(this)},addElementsToCollection:function(b,a){b.forEach(function(b){-1===a.indexOf(b)&&a.push(b)})},removeElementFromCollection:function(b,a){b=a.indexOf(b);-1!==b&&a.splice(b,1)},clear:function(){this.nodes.length=0;this.links.length=0;this.series.length=0;this.resetSimulation()},resetSimulation:function(){this.forcedStop=!1;this.systemTemperature=0;this.setMaxIterations();this.setTemperature();this.setDiffTemperature()},
restartSimulation:function(){this.simulation?this.resetSimulation():(this.setInitialRendering(!1),this.enableSimulation?this.start():this.setMaxIterations(1),this.chart&&this.chart.redraw(),this.setInitialRendering(!0))},setMaxIterations:function(b){this.maxIterations=w(b,this.options.maxIterations)},setTemperature:function(){this.temperature=this.startTemperature=Math.sqrt(this.nodes.length)},setDiffTemperature:function(){this.diffTemperature=this.startTemperature/(this.options.maxIterations+1)},
setInitialRendering:function(b){this.initialRendering=b},createQuadTree:function(){this.quadTree=new l.QuadTree(this.box.left,this.box.top,this.box.width,this.box.height);this.quadTree.insertNodes(this.nodes)},initPositions:function(){var b=this.options.initialPositions;x(b)?(b.call(this),this.nodes.forEach(function(b){p(b.prevX)||(b.prevX=b.plotX);p(b.prevY)||(b.prevY=b.plotY);b.dispX=0;b.dispY=0})):"circle"===b?this.setCircularPositions():this.setRandomPositions()},setCircularPositions:function(){function b(a){a.linksFrom.forEach(function(a){l[a.toNode.id]||
(l[a.toNode.id]=!0,k.push(a.toNode),b(a.toNode))})}var a=this.box,c=this.nodes,e=2*Math.PI/(c.length+1),d=c.filter(function(b){return 0===b.linksTo.length}),k=[],l={},p=this.options.initialPositionRadius;d.forEach(function(a){k.push(a);b(a)});k.length?c.forEach(function(b){-1===k.indexOf(b)&&k.push(b)}):k=c;k.forEach(function(b,c){b.plotX=b.prevX=w(b.plotX,a.width/2+p*Math.cos(c*e));b.plotY=b.prevY=w(b.plotY,a.height/2+p*Math.sin(c*e));b.dispX=0;b.dispY=0})},setRandomPositions:function(){function b(b){b=
b*b/Math.PI;return b-=Math.floor(b)}var a=this.box,c=this.nodes,e=c.length+1;c.forEach(function(c,g){c.plotX=c.prevX=w(c.plotX,a.width*b(g));c.plotY=c.prevY=w(c.plotY,a.height*b(e+g));c.dispX=0;c.dispY=0})},force:function(b){this.integration[b].apply(this,Array.prototype.slice.call(arguments,1))},barycenterForces:function(){this.getBarycenter();this.force("barycenter")},getBarycenter:function(){var b=0,a=0,c=0;this.nodes.forEach(function(g){a+=g.plotX*g.mass;c+=g.plotY*g.mass;b+=g.mass});return this.barycenter=
{x:a,y:c,xFactor:a/b,yFactor:c/b}},barnesHutApproximation:function(b,a){var c=this.getDistXY(b,a),g=this.vectorLength(c);if(b!==a&&0!==g)if(a.isInternal)if(a.boxSize/g<this.options.theta&&0!==g){var e=this.repulsiveForce(g,this.k);this.force("repulsive",b,e*a.mass,c,g);var d=!1}else d=!0;else e=this.repulsiveForce(g,this.k),this.force("repulsive",b,e*a.mass,c,g);return d},repulsiveForces:function(){var b=this;"barnes-hut"===b.approximation?b.nodes.forEach(function(a){b.quadTree.visitNodeRecursive(null,
function(c){return b.barnesHutApproximation(a,c)})}):b.nodes.forEach(function(a){b.nodes.forEach(function(c){if(a!==c&&!a.fixedPosition){var g=b.getDistXY(a,c);var e=b.vectorLength(g);if(0!==e){var d=b.repulsiveForce(e,b.k);b.force("repulsive",a,d*c.mass,g,e)}}})})},attractiveForces:function(){var b=this,a,c,e;b.links.forEach(function(g){g.fromNode&&g.toNode&&(a=b.getDistXY(g.fromNode,g.toNode),c=b.vectorLength(a),0!==c&&(e=b.attractiveForce(c,b.k),b.force("attractive",g,e,a,c)))})},applyLimits:function(){var b=
this;b.nodes.forEach(function(a){a.fixedPosition||(b.integration.integrate(b,a),b.applyLimitBox(a,b.box),a.dispX=0,a.dispY=0)})},applyLimitBox:function(b,a){var c=b.radius;b.plotX=t(b.plotX,a.left+c,a.width-c);b.plotY=t(b.plotY,a.top+c,a.height-c)},coolDown:function(b,a,c){return b-a*c},isStable:function(){return.00001>Math.abs(this.systemTemperature-this.prevSystemTemperature)||0>=this.temperature},getSystemTemperature:function(){return this.nodes.reduce(function(b,a){return b+a.temperature},0)},
vectorLength:function(b){return Math.sqrt(b.x*b.x+b.y*b.y)},getDistR:function(b,a){b=this.getDistXY(b,a);return this.vectorLength(b)},getDistXY:function(b,a){var c=b.plotX-a.plotX;b=b.plotY-a.plotY;return{x:c,y:b,absX:Math.abs(c),absY:Math.abs(b)}}});e(d,"predraw",function(){this.graphLayoutsLookup&&this.graphLayoutsLookup.forEach(function(b){b.stop()})});e(d,"render",function(){function b(b){b.maxIterations--&&isFinite(b.temperature)&&!b.isStable()&&!b.enableSimulation&&(b.beforeStep&&b.beforeStep(),
b.step(),e=!1,a=!0)}var a=!1;if(this.graphLayoutsLookup){c(!1,this);for(this.graphLayoutsLookup.forEach(function(b){b.start()});!e;){var e=!0;this.graphLayoutsLookup.forEach(b)}a&&this.series.forEach(function(b){b&&b.layout&&b.render()})}});e(d,"beforePrint",function(){this.graphLayoutsLookup&&(this.graphLayoutsLookup.forEach(function(b){b.updateSimulation(!1)}),this.redraw())});e(d,"afterPrint",function(){this.graphLayoutsLookup&&this.graphLayoutsLookup.forEach(function(b){b.updateSimulation()});
this.redraw()})});A(d,"Series/PackedBubble/PackedBubbleComposition.js",[d["Core/Chart/Chart.js"],d["Core/Globals.js"],d["Core/Utilities.js"]],function(d,e,l){var a=e.layouts["reingold-fruchterman"],c=l.addEvent,t=l.extendClass,p=l.pick;d.prototype.getSelectedParentNodes=function(){var a=[];this.series.forEach(function(c){c.parentNode&&c.parentNode.selected&&a.push(c.parentNode)});return a};e.networkgraphIntegrations.packedbubble={repulsiveForceFunction:function(a,c,e,b){return Math.min(a,(e.marker.radius+
b.marker.radius)/2)},barycenter:function(){var a=this,c=a.options.gravitationalConstant,e=a.box,b=a.nodes,d,m;b.forEach(function(g){a.options.splitSeries&&!g.isParentNode?(d=g.series.parentNode.plotX,m=g.series.parentNode.plotY):(d=e.width/2,m=e.height/2);g.fixedPosition||(g.plotX-=(g.plotX-d)*c/(g.mass*Math.sqrt(b.length)),g.plotY-=(g.plotY-m)*c/(g.mass*Math.sqrt(b.length)))})},repulsive:function(a,c,e,b){var g=c*this.diffTemperature/a.mass/a.degree;c=e.x*g;e=e.y*g;a.fixedPosition||(a.plotX+=c,a.plotY+=
e);b.fixedPosition||(b.plotX-=c,b.plotY-=e)},integrate:e.networkgraphIntegrations.verlet.integrate,getK:e.noop};e.layouts.packedbubble=t(a,{beforeStep:function(){this.options.marker&&this.series.forEach(function(a){a&&a.calculateParentRadius()})},isStable:function(){var a=Math.abs(this.prevSystemTemperature-this.systemTemperature);return 1>Math.abs(10*this.systemTemperature/Math.sqrt(this.nodes.length))&&.00001>a||0>=this.temperature},setCircularPositions:function(){var a=this,c=a.box,e=a.nodes,b=
2*Math.PI/(e.length+1),g,d,n=a.options.initialPositionRadius;e.forEach(function(e,k){a.options.splitSeries&&!e.isParentNode?(g=e.series.parentNode.plotX,d=e.series.parentNode.plotY):(g=c.width/2,d=c.height/2);e.plotX=e.prevX=p(e.plotX,g+n*Math.cos(e.index||k*b));e.plotY=e.prevY=p(e.plotY,d+n*Math.sin(e.index||k*b));e.dispX=0;e.dispY=0})},repulsiveForces:function(){var a=this,c,e,b,g=a.options.bubblePadding;a.nodes.forEach(function(d){d.degree=d.mass;d.neighbours=0;a.nodes.forEach(function(k){c=0;
d===k||d.fixedPosition||!a.options.seriesInteraction&&d.series!==k.series||(b=a.getDistXY(d,k),e=a.vectorLength(b)-(d.marker.radius+k.marker.radius+g),0>e&&(d.degree+=.01,d.neighbours++,c=a.repulsiveForce(-e/Math.sqrt(d.neighbours),a.k,d,k)),a.force("repulsive",d,c*k.mass,b,k,e))})})},applyLimitBox:function(c){if(this.options.splitSeries&&!c.isParentNode&&this.options.parentNodeLimit){var e=this.getDistXY(c,c.series.parentNode);var d=c.series.parentNodeRadius-c.marker.radius-this.vectorLength(e);
0>d&&d>-2*c.marker.radius&&(c.plotX-=.01*e.x,c.plotY-=.01*e.y)}a.prototype.applyLimitBox.apply(this,arguments)}});c(d,"beforeRedraw",function(){this.allDataPoints&&delete this.allDataPoints})});A(d,"Series/PackedBubble/PackedBubbleSeries.js",[d["Core/Color/Color.js"],d["Core/Globals.js"],d["Series/PackedBubble/PackedBubblePoint.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,e,l,a,c){var t=this&&this.__extends||function(){var a=function(b,h){a=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(a,b){a.__proto__=b}||function(a,b){for(var h in b)b.hasOwnProperty(h)&&(a[h]=b[h])};return a(b,h)};return function(b,h){function f(){this.constructor=b}a(b,h);b.prototype=null===h?Object.create(h):(f.prototype=h.prototype,new f)}}(),p=d.parse,k=a.series,x=a.seriesTypes.bubble,w=c.addEvent,b=c.clamp,g=c.defined,m=c.extend,n=c.fireEvent,q=c.isArray,H=c.isNumber,A=c.merge,I=c.pick,y=e.dragNodesMixin;d=function(a){function f(){var b=null!==a&&a.apply(this,arguments)||this;b.chart=void 0;
b.data=void 0;b.layout=void 0;b.options=void 0;b.points=void 0;b.xData=void 0;return b}t(f,a);f.prototype.accumulateAllPoints=function(a){var b=a.chart,h=[],f,c;for(f=0;f<b.series.length;f++)if(a=b.series[f],a.is("packedbubble")&&a.visible||!b.options.chart.ignoreHiddenSeries)for(c=0;c<a.yData.length;c++)h.push([null,null,a.yData[c],a.index,c,{id:c,marker:{radius:0}}]);return h};f.prototype.addLayout=function(){var a=this.options.layoutAlgorithm,b=this.chart.graphLayoutsStorage,f=this.chart.graphLayoutsLookup,
c=this.chart.options.chart;b||(this.chart.graphLayoutsStorage=b={},this.chart.graphLayoutsLookup=f=[]);var d=b[a.type];d||(a.enableSimulation=g(c.forExport)?!c.forExport:a.enableSimulation,b[a.type]=d=new e.layouts[a.type],d.init(a),f.splice(d.index,0,d));this.layout=d;this.points.forEach(function(a){a.mass=2;a.degree=1;a.collisionNmb=1});d.setArea(0,0,this.chart.plotWidth,this.chart.plotHeight);d.addElementsToCollection([this],d.series);d.addElementsToCollection(this.points,d.nodes)};f.prototype.addSeriesLayout=
function(){var a=this.options.layoutAlgorithm,b=this.chart.graphLayoutsStorage,f=this.chart.graphLayoutsLookup,c=A(a,a.parentNodeOptions,{enableSimulation:this.layout.options.enableSimulation});var d=b[a.type+"-series"];d||(b[a.type+"-series"]=d=new e.layouts[a.type],d.init(c),f.splice(d.index,0,d));this.parentNodeLayout=d;this.createParentNodes()};f.prototype.calculateParentRadius=function(){var a=this.seriesBox();this.parentNodeRadius=b(Math.sqrt(2*this.parentNodeMass/Math.PI)+20,20,a?Math.max(Math.sqrt(Math.pow(a.width,
2)+Math.pow(a.height,2))/2+20,20):Math.sqrt(2*this.parentNodeMass/Math.PI)+20);this.parentNode&&(this.parentNode.marker.radius=this.parentNode.radius=this.parentNodeRadius)};f.prototype.calculateZExtremes=function(){var a=this.options.zMin,b=this.options.zMax,f=Infinity,c=-Infinity;if(a&&b)return[a,b];this.chart.series.forEach(function(a){a.yData.forEach(function(a){g(a)&&(a>c&&(c=a),a<f&&(f=a))})});a=I(a,f);b=I(b,c);return[a,b]};f.prototype.checkOverlap=function(a,b){var h=a[0]-b[0],f=a[1]-b[1];
return-.001>Math.sqrt(h*h+f*f)-Math.abs(a[2]+b[2])};f.prototype.createParentNodes=function(){var a=this,b=a.chart,f=a.parentNodeLayout,c,e=a.parentNode,d=a.pointClass,g=a.layout.options,k={radius:a.parentNodeRadius,lineColor:a.color,fillColor:p(a.color).brighten(.4).get()};g.parentNodeOptions&&(k=A(g.parentNodeOptions.marker||{},k));a.parentNodeMass=0;a.points.forEach(function(b){a.parentNodeMass+=Math.PI*Math.pow(b.marker.radius,2)});a.calculateParentRadius();f.nodes.forEach(function(b){b.seriesIndex===
a.index&&(c=!0)});f.setArea(0,0,b.plotWidth,b.plotHeight);c||(e||(e=(new d).init(this,{mass:a.parentNodeRadius/2,marker:k,dataLabels:{inside:!1},states:{normal:{marker:k},hover:{marker:k}},dataLabelOnNull:!0,degree:a.parentNodeRadius,isParentNode:!0,seriesIndex:a.index})),a.parentNode&&(e.plotX=a.parentNode.plotX,e.plotY=a.parentNode.plotY),a.parentNode=e,f.addElementsToCollection([a],f.series),f.addElementsToCollection([e],f.nodes))};f.prototype.deferLayout=function(){var a=this.options.layoutAlgorithm;
this.visible&&(this.addLayout(),a.splitSeries&&this.addSeriesLayout())};f.prototype.destroy=function(){this.chart.graphLayoutsLookup&&this.chart.graphLayoutsLookup.forEach(function(a){a.removeElementFromCollection(this,a.series)},this);this.parentNode&&this.parentNodeLayout&&(this.parentNodeLayout.removeElementFromCollection(this.parentNode,this.parentNodeLayout.nodes),this.parentNode.dataLabel&&(this.parentNode.dataLabel=this.parentNode.dataLabel.destroy()));k.prototype.destroy.apply(this,arguments)};
f.prototype.drawDataLabels=function(){var a=this.options.dataLabels.textPath,b=this.points;k.prototype.drawDataLabels.apply(this,arguments);this.parentNode&&(this.parentNode.formatPrefix="parentNode",this.points=[this.parentNode],this.options.dataLabels.textPath=this.options.dataLabels.parentNodeTextPath,k.prototype.drawDataLabels.apply(this,arguments),this.points=b,this.options.dataLabels.textPath=a)};f.prototype.drawGraph=function(){if(this.layout&&this.layout.options.splitSeries){var a=this.chart;
var b=this.layout.options.parentNodeOptions.marker;var f={fill:b.fillColor||p(this.color).brighten(.4).get(),opacity:b.fillOpacity,stroke:b.lineColor||this.color,"stroke-width":I(b.lineWidth,this.options.lineWidth)};this.parentNodesGroup||(this.parentNodesGroup=this.plotGroup("parentNodesGroup","parentNode",this.visible?"inherit":"hidden",.1,a.seriesGroup),this.group.attr({zIndex:2}));this.calculateParentRadius();b=A({x:this.parentNode.plotX-this.parentNodeRadius,y:this.parentNode.plotY-this.parentNodeRadius,
width:2*this.parentNodeRadius,height:2*this.parentNodeRadius},f);this.parentNode.graphic||(this.graph=this.parentNode.graphic=a.renderer.symbol(f.symbol).add(this.parentNodesGroup));this.parentNode.graphic.attr(b)}};f.prototype.drawTracker=function(){var b=this.parentNode;a.prototype.drawTracker.call(this);if(b){var f=q(b.dataLabels)?b.dataLabels:b.dataLabel?[b.dataLabel]:[];b.graphic&&(b.graphic.element.point=b);f.forEach(function(a){a.div?a.div.point=b:a.element.point=b})}};f.prototype.getPointRadius=
function(){var a=this,f=a.chart,c=a.options,e=c.useSimulation,d=Math.min(f.plotWidth,f.plotHeight),g={},k=[],l=f.allDataPoints,n,m,p,z;["minSize","maxSize"].forEach(function(a){var b=parseInt(c[a],10),f=/%$/.test(c[a]);g[a]=f?d*b/100:b*Math.sqrt(l.length)});f.minRadius=n=g.minSize/Math.sqrt(l.length);f.maxRadius=m=g.maxSize/Math.sqrt(l.length);var q=e?a.calculateZExtremes():[n,m];(l||[]).forEach(function(f,h){p=e?b(f[2],q[0],q[1]):f[2];z=a.getRadius(q[0],q[1],n,m,p);0===z&&(z=null);l[h][2]=z;k.push(z)});
a.radii=k};f.prototype.init=function(){k.prototype.init.apply(this,arguments);this.eventsToUnbind.push(w(this,"updatedData",function(){this.chart.series.forEach(function(a){a.type===this.type&&(a.isDirty=!0)},this)}));return this};f.prototype.onMouseUp=function(a){if(a.fixedPosition&&!a.removed){var b,f,h=this.layout,c=this.parentNodeLayout;c&&h.options.dragBetweenSeries&&c.nodes.forEach(function(c){a&&a.marker&&c!==a.series.parentNode&&(b=h.getDistXY(a,c),f=h.vectorLength(b)-c.marker.radius-a.marker.radius,
0>f&&(c.series.addPoint(A(a.options,{plotX:a.plotX,plotY:a.plotY}),!1),h.removeElementFromCollection(a,h.nodes),a.remove()))});y.onMouseUp.apply(this,arguments)}};f.prototype.placeBubbles=function(a){var b=this.checkOverlap,f=this.positionBubble,c=[],h=1,e=0,d=0;var g=[];var k;a=a.sort(function(a,b){return b[2]-a[2]});if(a.length){c.push([[0,0,a[0][2],a[0][3],a[0][4]]]);if(1<a.length)for(c.push([[0,0-a[1][2]-a[0][2],a[1][2],a[1][3],a[1][4]]]),k=2;k<a.length;k++)a[k][2]=a[k][2]||1,g=f(c[h][e],c[h-
1][d],a[k]),b(g,c[h][0])?(c.push([]),d=0,c[h+1].push(f(c[h][e],c[h][0],a[k])),h++,e=0):1<h&&c[h-1][d+1]&&b(g,c[h-1][d+1])?(d++,c[h].push(f(c[h][e],c[h-1][d],a[k])),e++):(e++,c[h].push(g));this.chart.stages=c;this.chart.rawPositions=[].concat.apply([],c);this.resizeRadius();g=this.chart.rawPositions}return g};f.prototype.pointAttribs=function(a,b){var f=this.options,c=f.marker;a&&a.isParentNode&&f.layoutAlgorithm&&f.layoutAlgorithm.parentNodeOptions&&(c=f.layoutAlgorithm.parentNodeOptions.marker);
f=c.fillOpacity;a=k.prototype.pointAttribs.call(this,a,b);1!==f&&(a["fill-opacity"]=f);return a};f.prototype.positionBubble=function(a,b,f){var c=Math.sqrt,h=Math.asin,e=Math.acos,d=Math.pow,g=Math.abs;c=c(d(a[0]-b[0],2)+d(a[1]-b[1],2));e=e((d(c,2)+d(f[2]+b[2],2)-d(f[2]+a[2],2))/(2*(f[2]+b[2])*c));h=h(g(a[0]-b[0])/c);a=(0>a[1]-b[1]?0:Math.PI)+e+h*(0>(a[0]-b[0])*(a[1]-b[1])?1:-1);return[b[0]+(b[2]+f[2])*Math.sin(a),b[1]-(b[2]+f[2])*Math.cos(a),f[2],f[3],f[4]]};f.prototype.render=function(){var a=[];
k.prototype.render.apply(this,arguments);this.options.dataLabels.allowOverlap||(this.data.forEach(function(b){q(b.dataLabels)&&b.dataLabels.forEach(function(b){a.push(b)})}),this.options.useSimulation&&this.chart.hideOverlappingLabels(a))};f.prototype.resizeRadius=function(){var a=this.chart,b=a.rawPositions,f=Math.min,c=Math.max,e=a.plotLeft,d=a.plotTop,g=a.plotHeight,k=a.plotWidth,l,n,m;var p=l=Number.POSITIVE_INFINITY;var z=n=Number.NEGATIVE_INFINITY;for(m=0;m<b.length;m++){var q=b[m][2];p=f(p,
b[m][0]-q);z=c(z,b[m][0]+q);l=f(l,b[m][1]-q);n=c(n,b[m][1]+q)}m=[z-p,n-l];f=f.apply([],[(k-e)/m[0],(g-d)/m[1]]);if(1e-10<Math.abs(f-1)){for(m=0;m<b.length;m++)b[m][2]*=f;this.placeBubbles(b)}else a.diffY=g/2+d-l-(n-l)/2,a.diffX=k/2+e-p-(z-p)/2};f.prototype.seriesBox=function(){var a=this.chart,b=Math.max,f=Math.min,c,e=[a.plotLeft,a.plotLeft+a.plotWidth,a.plotTop,a.plotTop+a.plotHeight];this.data.forEach(function(a){g(a.plotX)&&g(a.plotY)&&a.marker.radius&&(c=a.marker.radius,e[0]=f(e[0],a.plotX-c),
e[1]=b(e[1],a.plotX+c),e[2]=f(e[2],a.plotY-c),e[3]=b(e[3],a.plotY+c))});return H(e.width/e.height)?e:null};f.prototype.setVisible=function(){var a=this;k.prototype.setVisible.apply(a,arguments);a.parentNodeLayout&&a.graph?a.visible?(a.graph.show(),a.parentNode.dataLabel&&a.parentNode.dataLabel.show()):(a.graph.hide(),a.parentNodeLayout.removeElementFromCollection(a.parentNode,a.parentNodeLayout.nodes),a.parentNode.dataLabel&&a.parentNode.dataLabel.hide()):a.layout&&(a.visible?a.layout.addElementsToCollection(a.points,
a.layout.nodes):a.points.forEach(function(b){a.layout.removeElementFromCollection(b,a.layout.nodes)}))};f.prototype.translate=function(){var a=this.chart,b=this.data,f=this.index,c,e=this.options.useSimulation;this.processedXData=this.xData;this.generatePoints();g(a.allDataPoints)||(a.allDataPoints=this.accumulateAllPoints(this),this.getPointRadius());if(e)var d=a.allDataPoints;else d=this.placeBubbles(a.allDataPoints),this.options.draggable=!1;for(c=0;c<d.length;c++)if(d[c][3]===f){var k=b[d[c][4]];
var l=I(d[c][2],void 0);e||(k.plotX=d[c][0]-a.plotLeft+a.diffX,k.plotY=d[c][1]-a.plotTop+a.diffY);H(l)&&(k.marker=m(k.marker,{radius:l,width:2*l,height:2*l}),k.radius=l)}e&&this.deferLayout();n(this,"afterTranslate")};f.defaultOptions=A(x.defaultOptions,{minSize:"10%",maxSize:"50%",sizeBy:"area",zoneAxis:"y",crisp:!1,tooltip:{pointFormat:"Value: {point.value}"},draggable:!0,useSimulation:!0,parentNode:{allowPointSelect:!1},dataLabels:{formatter:function(){var a=this.series.chart.numberFormatter,b=
this.point.value;return H(b)?a(b,-1):""},parentNodeFormatter:function(){return this.name},parentNodeTextPath:{enabled:!0},padding:0,style:{transition:"opacity 2000ms"}},layoutAlgorithm:{initialPositions:"circle",initialPositionRadius:20,bubblePadding:5,parentNodeLimit:!1,seriesInteraction:!0,dragBetweenSeries:!1,parentNodeOptions:{maxIterations:400,gravitationalConstant:.03,maxSpeed:50,initialPositionRadius:100,seriesInteraction:!0,marker:{fillColor:null,fillOpacity:1,lineWidth:null,lineColor:null,
symbol:"circle"}},enableSimulation:!0,type:"packedbubble",integration:"packedbubble",maxIterations:1E3,splitSeries:!1,maxSpeed:5,gravitationalConstant:.01,friction:-.981}});return f}(x);m(d.prototype,{alignDataLabel:k.prototype.alignDataLabel,axisTypes:[],directTouch:!0,forces:["barycenter","repulsive"],hasDraggableNodes:!0,isCartesian:!1,noSharedTooltip:!0,onMouseDown:y.onMouseDown,onMouseMove:y.onMouseMove,pointArrayMap:["value"],pointClass:l,pointValKey:"value",redrawHalo:y.redrawHalo,requireSorting:!1,
searchPoint:e.noop,trackerGroups:["group","dataLabelsGroup","parentNodesGroup"]});a.registerSeriesType("packedbubble",d);"";"";return d});A(d,"Series/Polygon/PolygonSeries.js",[d["Core/Globals.js"],d["Core/Legend/LegendSymbol.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,e,l,a){var c=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&
(a[c]=b[c])};return a(b,c)};return function(b,c){function e(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)}}();d=d.noop;var t=l.series,p=l.seriesTypes,k=p.area,x=p.line,w=p.scatter;p=a.extend;var b=a.merge;a=function(a){function e(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}c(e,a);e.prototype.getGraphPath=function(){for(var a=x.prototype.getGraphPath.call(this),b=a.length+1;b--;)(b===a.length||
"M"===a[b][0])&&0<b&&a.splice(b,0,["Z"]);return this.areaPath=a};e.prototype.drawGraph=function(){this.options.fillColor=this.color;k.prototype.drawGraph.call(this)};e.defaultOptions=b(w.defaultOptions,{marker:{enabled:!1,states:{hover:{enabled:!1}}},stickyTracking:!1,tooltip:{followPointer:!0,pointFormat:""},trackByArea:!0});return e}(w);p(a.prototype,{type:"polygon",drawLegendSymbol:e.drawRectangle,drawTracker:t.prototype.drawTracker,setStackedPoints:d});l.registerSeriesType("polygon",a);"";return a});
A(d,"Core/Axis/WaterfallAxis.js",[d["Extensions/Stacking.js"],d["Core/Utilities.js"]],function(d,e){var l=e.addEvent,a=e.objectEach,c;(function(c){function e(){var a=this.waterfall.stacks;a&&(a.changed=!1,delete a.alreadyChanged)}function k(){var a=this.options.stackLabels;a&&a.enabled&&this.waterfall.stacks&&this.waterfall.renderStackTotals()}function x(){for(var a=this.axes,b=this.series,c=b.length;c--;)b[c].options.stacking&&(a.forEach(function(a){a.isXAxis||(a.waterfall.stacks.changed=!0)}),c=
0)}function w(){this.waterfall||(this.waterfall=new b(this))}var b=function(){function b(a){this.axis=a;this.stacks={changed:!1}}b.prototype.renderStackTotals=function(){var b=this.axis,c=b.waterfall.stacks,e=b.stacking&&b.stacking.stackTotalGroup,g=new d(b,b.options.stackLabels,!1,0,void 0);this.dummyStackItem=g;a(c,function(b){a(b,function(a){g.total=a.stackTotal;a.label&&(g.label=a.label);d.prototype.render.call(g,e);a.label=g.label;delete g.label})});g.total=null};return b}();c.Composition=b;
c.compose=function(a,b){l(a,"init",w);l(a,"afterBuildStacks",e);l(a,"afterRender",k);l(b,"beforeRedraw",x)}})(c||(c={}));return c});A(d,"Series/Waterfall/WaterfallPoint.js",[d["Series/Column/ColumnSeries.js"],d["Core/Series/Point.js"],d["Core/Utilities.js"]],function(d,e,l){var a=this&&this.__extends||function(){var a=function(c,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return a(c,e)};return function(c,
e){function d(){this.constructor=c}a(c,e);c.prototype=null===e?Object.create(e):(d.prototype=e.prototype,new d)}}(),c=l.isNumber;return function(d){function l(){var a=null!==d&&d.apply(this,arguments)||this;a.options=void 0;a.series=void 0;return a}a(l,d);l.prototype.getClassName=function(){var a=e.prototype.getClassName.call(this);this.isSum?a+=" highcharts-sum":this.isIntermediateSum&&(a+=" highcharts-intermediate-sum");return a};l.prototype.isValid=function(){return c(this.y)||this.isSum||!!this.isIntermediateSum};
return l}(d.prototype.pointClass)});A(d,"Series/Waterfall/WaterfallSeries.js",[d["Core/Axis/Axis.js"],d["Core/Chart/Chart.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"],d["Core/Axis/WaterfallAxis.js"],d["Series/Waterfall/WaterfallPoint.js"]],function(d,e,l,a,c,t){var p=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};
return function(b,c){function f(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(f.prototype=c.prototype,new f)}}(),k=l.seriesTypes,x=k.column,w=k.line,b=a.arrayMax,g=a.arrayMin,m=a.correctFloat;k=a.extend;var n=a.isNumber,q=a.merge,A=a.objectEach,J=a.pick;a=function(a){function c(){var b=null!==a&&a.apply(this,arguments)||this;b.chart=void 0;b.data=void 0;b.options=void 0;b.points=void 0;b.stackedYNeg=void 0;b.stackedYPos=void 0;b.stackKey=void 0;b.xData=void 0;b.yAxis=void 0;b.yData=
void 0;return b}p(c,a);c.prototype.generatePoints=function(){var a;x.prototype.generatePoints.apply(this);var b=0;for(a=this.points.length;b<a;b++){var c=this.points[b];var e=this.processedYData[b];if(c.isIntermediateSum||c.isSum)c.y=m(e)}};c.prototype.translate=function(){var a=this.options,b=this.yAxis,c=J(a.minPointLength,5),e=c/2,d=a.threshold||0,g=d,k=d;a=a.stacking;var l=b.waterfall.stacks[this.stackKey];x.prototype.translate.apply(this);for(var m=this.points,p=0;p<m.length;p++){var q=m[p];
var w=this.processedYData[p];var C=q.shapeArgs;if(C&&n(w)){var t=[0,w];var D=q.y;if(a){if(l){t=l[p];if("overlap"===a){var y=t.stackState[t.stateIndex--];y=0<=D?y:y-D;Object.hasOwnProperty.call(t,"absolutePos")&&delete t.absolutePos;Object.hasOwnProperty.call(t,"absoluteNeg")&&delete t.absoluteNeg}else 0<=D?(y=t.threshold+t.posTotal,t.posTotal-=D):(y=t.threshold+t.negTotal,t.negTotal-=D,y-=D),!t.posTotal&&Object.hasOwnProperty.call(t,"absolutePos")&&(t.posTotal=t.absolutePos,delete t.absolutePos),
!t.negTotal&&Object.hasOwnProperty.call(t,"absoluteNeg")&&(t.negTotal=t.absoluteNeg,delete t.absoluteNeg);q.isSum||(t.connectorThreshold=t.threshold+t.stackTotal);b.reversed?(w=0<=D?y-D:y+D,D=y):(w=y,D=y-D);q.below=w<=d;C.y=b.translate(w,!1,!0,!1,!0)||0;C.height=Math.abs(C.y-(b.translate(D,!1,!0,!1,!0)||0));if(D=b.waterfall.dummyStackItem)D.x=p,D.label=l[p].label,D.setOffset(this.pointXOffset||0,this.barW||0,this.stackedYNeg[p],this.stackedYPos[p])}}else y=Math.max(g,g+D)+t[0],C.y=b.translate(y,!1,
!0,!1,!0)||0,q.isSum?(C.y=b.translate(t[1],!1,!0,!1,!0)||0,C.height=Math.min(b.translate(t[0],!1,!0,!1,!0)||0,b.len)-C.y,q.below=t[1]<=d):q.isIntermediateSum?(0<=D?(w=t[1]+k,D=k):(w=k,D=t[1]+k),b.reversed&&(w^=D,D^=w,w^=D),C.y=b.translate(w,!1,!0,!1,!0)||0,C.height=Math.abs(C.y-Math.min(b.translate(D,!1,!0,!1,!0)||0,b.len)),k+=t[1],q.below=w<=d):(C.height=0<w?(b.translate(g,!1,!0,!1,!0)||0)-C.y:(b.translate(g,!1,!0,!1,!0)||0)-(b.translate(g-w,!1,!0,!1,!0)||0),g+=w,q.below=g<d),0>C.height&&(C.y+=C.height,
C.height*=-1);q.plotY=C.y=Math.round(C.y||0)-this.borderWidth%2/2;C.height=Math.max(Math.round(C.height||0),.001);q.yBottom=C.y+C.height;C.height<=c&&!q.isNull?(C.height=c,C.y-=e,q.plotY=C.y,q.minPointLengthOffset=0>q.y?-e:e):(q.isNull&&(C.width=0),q.minPointLengthOffset=0);D=q.plotY+(q.negative?C.height:0);q.below&&(q.plotY+=C.height);q.tooltipPos&&(this.chart.inverted?q.tooltipPos[0]=b.len-D:q.tooltipPos[1]=D)}}};c.prototype.processData=function(b){var c=this.options,e=this.yData,d=c.data,g=e.length,
k=c.threshold||0,l,n,p,q,t;for(t=n=l=p=q=0;t<g;t++){var z=e[t];var w=d&&d[t]?d[t]:{};"sum"===z||w.isSum?e[t]=m(n):"intermediateSum"===z||w.isIntermediateSum?(e[t]=m(l),l=0):(n+=z,l+=z);p=Math.min(n,p);q=Math.max(n,q)}a.prototype.processData.call(this,b);c.stacking||(this.dataMin=p+k,this.dataMax=q)};c.prototype.toYData=function(a){return a.isSum?"sum":a.isIntermediateSum?"intermediateSum":a.y};c.prototype.updateParallelArrays=function(b,c){a.prototype.updateParallelArrays.call(this,b,c);if("sum"===
this.yData[0]||"intermediateSum"===this.yData[0])this.yData[0]=null};c.prototype.pointAttribs=function(a,b){var c=this.options.upColor;c&&!a.options.color&&(a.color=0<a.y?c:null);a=x.prototype.pointAttribs.call(this,a,b);delete a.dashstyle;return a};c.prototype.getGraphPath=function(){return[["M",0,0]]};c.prototype.getCrispPath=function(){var a=this.data,b=this.yAxis,c=a.length,e=Math.round(this.graph.strokeWidth())%2/2,d=Math.round(this.borderWidth)%2/2,g=this.xAxis.reversed,k=this.yAxis.reversed,
l=this.options.stacking,m=[],n;for(n=1;n<c;n++){var p=a[n].shapeArgs;var q=a[n-1];var t=a[n-1].shapeArgs;var w=b.waterfall.stacks[this.stackKey];var x=0<q.y?-t.height:0;w&&t&&p&&(w=w[n-1],l?(w=w.connectorThreshold,x=Math.round(b.translate(w,0,1,0,1)+(k?x:0))-e):x=t.y+q.minPointLengthOffset+d-e,m.push(["M",(t.x||0)+(g?0:t.width||0),x],["L",(p.x||0)+(g?p.width||0:0),x]));t&&m.length&&(!l&&0>q.y&&!k||0<q.y&&k)&&((q=m[m.length-2])&&"number"===typeof q[2]&&(q[2]+=t.height||0),(q=m[m.length-1])&&"number"===
typeof q[2]&&(q[2]+=t.height||0))}return m};c.prototype.drawGraph=function(){w.prototype.drawGraph.call(this);this.graph.attr({d:this.getCrispPath()})};c.prototype.setStackedPoints=function(){function a(a,b,c,f){if(J)for(c;c<J;c++)A.stackState[c]+=f;else A.stackState[0]=a,J=A.stackState.length;A.stackState.push(A.stackState[J-1]+b)}var b=this.options,c=this.yAxis.waterfall.stacks,e=b.threshold,d=e||0,g=d,k=this.stackKey,l=this.xData,m=l.length,n,p,q;this.yAxis.stacking.usePercentage=!1;var t=p=q=
d;if(this.visible||!this.chart.options.chart.ignoreHiddenSeries){var w=c.changed;(n=c.alreadyChanged)&&0>n.indexOf(k)&&(w=!0);c[k]||(c[k]={});n=c[k];for(var x=0;x<m;x++){var y=l[x];if(!n[y]||w)n[y]={negTotal:0,posTotal:0,stackTotal:0,threshold:0,stateIndex:0,stackState:[],label:w&&n[y]?n[y].label:void 0};var A=n[y];var G=this.yData[x];0<=G?A.posTotal+=G:A.negTotal+=G;var F=b.data[x];y=A.absolutePos=A.posTotal;var H=A.absoluteNeg=A.negTotal;A.stackTotal=y+H;var J=A.stackState.length;F&&F.isIntermediateSum?
(a(q,p,0,q),q=p,p=e,d^=g,g^=d,d^=g):F&&F.isSum?(a(e,t,J),d=e):(a(d,G,0,t),F&&(t+=G,p+=G));A.stateIndex++;A.threshold=d;d+=A.stackTotal}c.changed=!1;c.alreadyChanged||(c.alreadyChanged=[]);c.alreadyChanged.push(k)}};c.prototype.getExtremes=function(){var a=this.options.stacking;if(a){var c=this.yAxis;c=c.waterfall.stacks;var e=this.stackedYNeg=[];var d=this.stackedYPos=[];"overlap"===a?A(c[this.stackKey],function(a){e.push(g(a.stackState));d.push(b(a.stackState))}):A(c[this.stackKey],function(a){e.push(a.negTotal+
a.threshold);d.push(a.posTotal+a.threshold)});return{dataMin:g(e),dataMax:b(d)}}return{dataMin:this.dataMin,dataMax:this.dataMax}};c.defaultOptions=q(x.defaultOptions,{dataLabels:{inside:!0},lineWidth:1,lineColor:"#333333",dashStyle:"Dot",borderColor:"#333333",states:{hover:{lineWidthPlus:0}}});return c}(x);k(a.prototype,{getZonesGraphs:w.prototype.getZonesGraphs,pointValKey:"y",showLine:!0,pointClass:t});l.registerSeriesType("waterfall",a);c.compose(d,e);"";return a});A(d,"Extensions/Polar.js",[d["Core/Animation/AnimationUtilities.js"],
d["Core/Chart/Chart.js"],d["Core/Globals.js"],d["Extensions/Pane.js"],d["Core/Pointer.js"],d["Core/Series/Series.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Renderer/SVG/SVGRenderer.js"],d["Core/Utilities.js"]],function(d,e,l,a,c,t,p,k,x){var w=d.animObject;p=p.seriesTypes;var b=x.addEvent,g=x.defined,m=x.find,n=x.isNumber,q=x.pick,A=x.splat,J=x.uniqueKey;d=x.wrap;var I=t.prototype;c=c.prototype;I.searchPointByAngle=function(a){var b=this.chart,c=this.xAxis.pane.center;return this.searchKDTree({clientX:180+
-180/Math.PI*Math.atan2(a.chartX-c[0]-b.plotLeft,a.chartY-c[1]-b.plotTop)})};I.getConnectors=function(a,b,c,e){var f=e?1:0;var d=0<=b&&b<=a.length-1?b:0>b?a.length-1+b:0;b=0>d-1?a.length-(1+f):d-1;f=d+1>a.length-1?f:d+1;var g=a[b];f=a[f];var h=g.plotX;g=g.plotY;var k=f.plotX;var l=f.plotY;f=a[d].plotX;d=a[d].plotY;h=(1.5*f+h)/2.5;g=(1.5*d+g)/2.5;k=(1.5*f+k)/2.5;var r=(1.5*d+l)/2.5;l=Math.sqrt(Math.pow(h-f,2)+Math.pow(g-d,2));var n=Math.sqrt(Math.pow(k-f,2)+Math.pow(r-d,2));h=Math.atan2(g-d,h-f);r=
Math.PI/2+(h+Math.atan2(r-d,k-f))/2;Math.abs(h-r)>Math.PI/2&&(r-=Math.PI);h=f+Math.cos(r)*l;g=d+Math.sin(r)*l;k=f+Math.cos(Math.PI+r)*n;r=d+Math.sin(Math.PI+r)*n;f={rightContX:k,rightContY:r,leftContX:h,leftContY:g,plotX:f,plotY:d};c&&(f.prevPointCont=this.getConnectors(a,b,!1,e));return f};I.toXY=function(a){var b=this.chart,c=this.xAxis,f=this.yAxis,d=a.plotX,e=a.plotY,g=a.series,k=b.inverted,l=a.y,m=k?d:f.len-e;k&&g&&!g.isRadialBar&&(a.plotY=e="number"===typeof l?f.translate(l)||0:0);a.rectPlotX=
d;a.rectPlotY=e;f.center&&(m+=f.center[3]/2);n(e)&&(f=k?f.postTranslate(e,m):c.postTranslate(d,m),a.plotX=a.polarPlotX=f.x-b.plotLeft,a.plotY=a.polarPlotY=f.y-b.plotTop);this.kdByAngle?(b=(d/Math.PI*180+c.pane.options.startAngle)%360,0>b&&(b+=360),a.clientX=b):a.clientX=a.plotX};p.spline&&(d(p.spline.prototype,"getPointSpline",function(a,b,c,d){this.chart.polar?d?(a=this.getConnectors(b,d,!0,this.connectEnds),b=a.prevPointCont&&a.prevPointCont.rightContX,c=a.prevPointCont&&a.prevPointCont.rightContY,
a=["C",n(b)?b:a.plotX,n(c)?c:a.plotY,n(a.leftContX)?a.leftContX:a.plotX,n(a.leftContY)?a.leftContY:a.plotY,a.plotX,a.plotY]):a=["M",c.plotX,c.plotY]:a=a.call(this,b,c,d);return a}),p.areasplinerange&&(p.areasplinerange.prototype.getPointSpline=p.spline.prototype.getPointSpline));b(t,"afterTranslate",function(){var a=this.chart;if(a.polar&&this.xAxis){(this.kdByAngle=a.tooltip&&a.tooltip.shared)?this.searchPoint=this.searchPointByAngle:this.options.findNearestPointBy="xy";if(!this.preventPostTranslate)for(var c=
this.points,d=c.length;d--;)this.toXY(c[d]),!a.hasParallelCoordinates&&!this.yAxis.reversed&&c[d].y<this.yAxis.min&&(c[d].isNull=!0);this.hasClipCircleSetter||(this.hasClipCircleSetter=!!this.eventsToUnbind.push(b(this,"afterRender",function(){if(a.polar){var b=this.yAxis.pane.center;this.clipCircle?this.clipCircle.animate({x:b[0],y:b[1],r:b[2]/2,innerR:b[3]/2}):this.clipCircle=a.renderer.clipCircle(b[0],b[1],b[2]/2,b[3]/2);this.group.clip(this.clipCircle);this.setClip=l.noop}})))}},{order:2});d(p.line.prototype,
"getGraphPath",function(a,b){var c=this,d;if(this.chart.polar){b=b||this.points;for(d=0;d<b.length;d++)if(!b[d].isNull){var e=d;break}if(!1!==this.options.connectEnds&&"undefined"!==typeof e){this.connectEnds=!0;b.splice(b.length,0,b[e]);var f=!0}b.forEach(function(a){"undefined"===typeof a.polarPlotY&&c.toXY(a)})}d=a.apply(this,[].slice.call(arguments,1));f&&b.pop();return d});var y=function(a,b){var c=this,d=this.chart,e=this.options.animation,f=this.group,g=this.markerGroup,h=this.xAxis&&this.xAxis.center,
k=d.plotLeft,n=d.plotTop,m,p,t,x;if(d.polar)if(c.isRadialBar)b||(c.startAngleRad=q(c.translatedThreshold,c.xAxis.startAngleRad),l.seriesTypes.pie.prototype.animate.call(c,b));else{if(d.renderer.isSVG)if(e=w(e),c.is("column")){if(!b){var y=h[3]/2;c.points.forEach(function(a){m=a.graphic;t=(p=a.shapeArgs)&&p.r;x=p&&p.innerR;m&&p&&(m.attr({r:y,innerR:y}),m.animate({r:t,innerR:x},c.options.animation))})}}else b?(a={translateX:h[0]+k,translateY:h[1]+n,scaleX:.001,scaleY:.001},f.attr(a),g&&g.attr(a)):(a=
{translateX:k,translateY:n,scaleX:1,scaleY:1},f.animate(a,e),g&&g.animate(a,e))}else a.call(this,b)};d(I,"animate",y);if(p.column){var z=p.arearange.prototype;p=p.column.prototype;p.polarArc=function(a,b,c,d){var e=this.xAxis.center,f=this.yAxis.len,g=e[3]/2;b=f-b+g;a=f-q(a,f)+g;this.yAxis.reversed&&(0>b&&(b=g),0>a&&(a=g));return{x:e[0],y:e[1],r:b,innerR:a,start:c,end:d}};d(p,"animate",y);d(p,"translate",function(a){var b=this.options,c=b.stacking,d=this.chart,e=this.xAxis,f=this.yAxis,k=f.reversed,
l=f.center,m=e.startAngleRad,p=e.endAngleRad-m;this.preventPostTranslate=!0;a.call(this);if(e.isRadial){a=this.points;e=a.length;var q=f.translate(f.min);var t=f.translate(f.max);b=b.threshold||0;if(d.inverted&&n(b)){var w=f.translate(b);g(w)&&(0>w?w=0:w>p&&(w=p),this.translatedThreshold=w+m)}for(;e--;){b=a[e];var y=b.barX;var z=b.x;var A=b.y;b.shapeType="arc";if(d.inverted){b.plotY=f.translate(A);if(c&&f.stacking){if(A=f.stacking.stacks[(0>A?"-":"")+this.stackKey],this.visible&&A&&A[z]&&!b.isNull){var G=
A[z].points[this.getStackIndicator(void 0,z,this.index).key];var F=f.translate(G[0]);G=f.translate(G[1]);g(F)&&(F=x.clamp(F,0,p))}}else F=w,G=b.plotY;F>G&&(G=[F,F=G][0]);if(!k)if(F<q)F=q;else if(G>t)G=t;else{if(G<q||F>t)F=G=0}else if(G>q)G=q;else if(F<t)F=t;else if(F>q||G<t)F=G=p;f.min>f.max&&(F=G=k?p:0);F+=m;G+=m;l&&(b.barX=y+=l[3]/2);z=Math.max(y,0);A=Math.max(y+b.pointWidth,0);b.shapeArgs={x:l&&l[0],y:l&&l[1],r:A,innerR:z,start:F,end:G};b.opacity=F===G?0:void 0;b.plotY=(g(this.translatedThreshold)&&
(F<this.translatedThreshold?F:G))-m}else F=y+m,b.shapeArgs=this.polarArc(b.yBottom,b.plotY,F,F+b.pointWidth);this.toXY(b);d.inverted?(y=f.postTranslate(b.rectPlotY,y+b.pointWidth/2),b.tooltipPos=[y.x-d.plotLeft,y.y-d.plotTop]):b.tooltipPos=[b.plotX,b.plotY];l&&(b.ttBelow=b.plotY>l[1])}}});p.findAlignments=function(a,b){null===b.align&&(b.align=20<a&&160>a?"left":200<a&&340>a?"right":"center");null===b.verticalAlign&&(b.verticalAlign=45>a||315<a?"bottom":135<a&&225>a?"top":"middle");return b};z&&(z.findAlignments=
p.findAlignments);d(p,"alignDataLabel",function(a,b,c,d,e,g){var f=this.chart,h=q(d.inside,!!this.options.stacking);f.polar?(a=b.rectPlotX/Math.PI*180,f.inverted?(this.forceDL=f.isInsidePlot(b.plotX,Math.round(b.plotY)),h&&b.shapeArgs?(e=b.shapeArgs,e=this.yAxis.postTranslate(((e.start||0)+(e.end||0))/2-this.xAxis.startAngleRad,b.barX+b.pointWidth/2),e={x:e.x-f.plotLeft,y:e.y-f.plotTop}):b.tooltipPos&&(e={x:b.tooltipPos[0],y:b.tooltipPos[1]}),d.align=q(d.align,"center"),d.verticalAlign=q(d.verticalAlign,
"middle")):this.findAlignments&&(d=this.findAlignments(a,d)),I.alignDataLabel.call(this,b,c,d,e,g),this.isRadialBar&&b.shapeArgs&&b.shapeArgs.start===b.shapeArgs.end&&c.hide(!0)):a.call(this,b,c,d,e,g)})}d(c,"getCoordinates",function(a,b){var c=this.chart,d={xAxis:[],yAxis:[]};c.polar?c.axes.forEach(function(a){var e=a.isXAxis,f=a.center;if("colorAxis"!==a.coll){var g=b.chartX-f[0]-c.plotLeft;f=b.chartY-f[1]-c.plotTop;d[e?"xAxis":"yAxis"].push({axis:a,value:a.translate(e?Math.PI-Math.atan2(g,f):Math.sqrt(Math.pow(g,
2)+Math.pow(f,2)),!0)})}}):d=a.call(this,b);return d});k.prototype.clipCircle=function(a,b,c,d){var e=J(),f=this.createElement("clipPath").attr({id:e}).add(this.defs);a=d?this.arc(a,b,c,d,0,2*Math.PI).add(f):this.circle(a,b,c).add(f);a.id=e;a.clipPath=f;return a};b(e,"getAxes",function(){this.pane||(this.pane=[]);this.options.pane=A(this.options.pane);this.options.pane.forEach(function(b){new a(b,this)},this)});b(e,"afterDrawChartBox",function(){this.pane.forEach(function(a){a.render()})});b(t,"afterInit",
function(){var a=this.chart;a.inverted&&a.polar&&(this.isRadialSeries=!0,this.is("column")&&(this.isRadialBar=!0))});d(e.prototype,"get",function(a,b){return m(this.pane||[],function(a){return a.options.id===b})||a.call(this,b)})});A(d,"masters/highcharts-more.src.js",[d["Core/Globals.js"],d["Core/Axis/RadialAxis.js"],d["Series/Bubble/BubbleSeries.js"]],function(d,e,l){e.compose(d.Axis,d.Tick);l.compose(d.Chart,d.Legend,d.Series)})});


/***/ }),

/***/ 4686:
/*!********************************************************!*\
  !*** ./node_modules/highcharts/highcharts-more.src.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license Highcharts JS v9.3.3 (2022-02-01)
 *
 * (c) 2009-2021 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */


(function (factory) {
  if ( true && module.exports) {
    factory['default'] = factory;
    module.exports = factory;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ 3109)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Highcharts) {
      factory(Highcharts);
      factory.Highcharts = Highcharts;
      return factory;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (Highcharts) {
  var _modules = Highcharts ? Highcharts._modules : {};

  function _registerModule(obj, path, args, fn) {
    if (!obj.hasOwnProperty(path)) {
      obj[path] = fn.apply(null, args);
    }
  }

  _registerModule(_modules, 'Extensions/Pane.js', [_modules['Core/Chart/Chart.js'], _modules['Series/CenteredUtilities.js'], _modules['Core/Globals.js'], _modules['Core/Pointer.js'], _modules['Core/Utilities.js']], function (Chart, CU, H, Pointer, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var addEvent = U.addEvent,
        extend = U.extend,
        merge = U.merge,
        pick = U.pick,
        splat = U.splat;
    /**
     * @typedef {"arc"|"circle"|"solid"} Highcharts.PaneBackgroundShapeValue
     */

    /* eslint-disable no-invalid-this, valid-jsdoc */

    Chart.prototype.collectionsWithUpdate.push('pane');
    /**
     * The Pane object allows options that are common to a set of X and Y axes.
     *
     * In the future, this can be extended to basic Highcharts and Highcharts Stock.
     *
     * @private
     * @class
     * @name Highcharts.Pane
     * @param {Highcharts.PaneOptions} options
     * @param {Highcharts.Chart} chart
     */

    var Pane =
    /** @class */
    function () {
      function Pane(options, chart) {
        this.background = void 0;
        this.center = void 0;
        this.chart = void 0;
        this.options = void 0;
        this.coll = 'pane'; // Member of chart.pane

        /**
         * The pane serves as a container for axes and backgrounds for circular
         * gauges and polar charts.
         *
         * @since        2.3.0
         * @product      highcharts
         * @requires     highcharts-more
         * @optionparent pane
         */

        this.defaultOptions = {
          /**
           * The end angle of the polar X axis or gauge value axis, given in
           * degrees where 0 is north. Defaults to [startAngle](#pane.startAngle)
           * + 360.
           *
           * @sample {highcharts} highcharts/demo/gauge-vu-meter/
           *         VU-meter with custom start and end angle
           *
           * @type      {number}
           * @since     2.3.0
           * @product   highcharts
           * @apioption pane.endAngle
           */

          /**
           * The center of a polar chart or angular gauge, given as an array
           * of [x, y] positions. Positions can be given as integers that
           * transform to pixels, or as percentages of the plot area size.
           *
           * @sample {highcharts} highcharts/demo/gauge-vu-meter/
           *         Two gauges with different center
           *
           * @type    {Array<string|number>}
           * @default ["50%", "50%"]
           * @since   2.3.0
           * @product highcharts
           */
          center: ['50%', '50%'],

          /**
           * The size of the pane, either as a number defining pixels, or a
           * percentage defining a percentage of the available plot area (the
           * smallest of the plot height or plot width).
           *
           * @sample {highcharts} highcharts/demo/gauge-vu-meter/
           *         Smaller size
           *
           * @type    {number|string}
           * @product highcharts
           */
          size: '85%',

          /**
           * The inner size of the pane, either as a number defining pixels, or a
           * percentage defining a percentage of the pane's size.
           *
           * @sample {highcharts} highcharts/series-polar/column-inverted-inner
           *         The inner size set to 20%
           *
           * @type    {number|string}
           * @product highcharts
           */
          innerSize: '0%',

          /**
           * The start angle of the polar X axis or gauge axis, given in degrees
           * where 0 is north. Defaults to 0.
           *
           * @sample {highcharts} highcharts/demo/gauge-vu-meter/
           *         VU-meter with custom start and end angle
           *
           * @since   2.3.0
           * @product highcharts
           */
          startAngle: 0
        };
        /**
         * An array of background items for the pane.
         *
         * @sample {highcharts} highcharts/demo/gauge-speedometer/
         *         Speedometer gauge with multiple backgrounds
         *
         * @type         {Array<*>}
         * @optionparent pane.background
         */

        this.defaultBackgroundOptions = {
          /**
           * The class name for this background.
           *
           * @sample {highcharts} highcharts/css/pane/
           *         Panes styled by CSS
           * @sample {highstock} highcharts/css/pane/
           *         Panes styled by CSS
           * @sample {highmaps} highcharts/css/pane/
           *         Panes styled by CSS
           *
           * @type      {string}
           * @default   highcharts-pane
           * @since     5.0.0
           * @apioption pane.background.className
           */

          /**
           * The shape of the pane background. When `solid`, the background
           * is circular. When `arc`, the background extends only from the min
           * to the max of the value axis.
           *
           * @type    {Highcharts.PaneBackgroundShapeValue}
           * @since   2.3.0
           * @product highcharts
           */
          shape: 'circle',

          /**
           * The pixel border width of the pane background.
           *
           * @since 2.3.0
           * @product highcharts
           */
          borderWidth: 1,

          /**
           * The pane background border color.
           *
           * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @since   2.3.0
           * @product highcharts
           */
          borderColor: "#cccccc"
          /* neutralColor20 */
          ,

          /**
           * The background color or gradient for the pane.
           *
           * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @default { linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, stops: [[0, #ffffff], [1, #e6e6e6]] }
           * @since   2.3.0
           * @product highcharts
           */
          backgroundColor: {
            /** @ignore-option */
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },

            /** @ignore-option */
            stops: [[0, "#ffffff"
            /* backgroundColor */
            ], [1, "#e6e6e6"
            /* neutralColor10 */
            ]]
          },

          /** @ignore-option */
          from: -Number.MAX_VALUE,

          /**
           * The inner radius of the pane background. Can be either numeric
           * (pixels) or a percentage string.
           *
           * @type    {number|string}
           * @since   2.3.0
           * @product highcharts
           */
          innerRadius: 0,

          /** @ignore-option */
          to: Number.MAX_VALUE,

          /**
           * The outer radius of the circular pane background. Can be either
           * numeric (pixels) or a percentage string.
           *
           * @type     {number|string}
           * @since    2.3.0
           * @product  highcharts
           */
          outerRadius: '105%'
        };
        this.init(options, chart);
      }
      /**
       * Initialize the Pane object
       *
       * @private
       * @function Highcharts.Pane#init
       *
       * @param {Highcharts.PaneOptions} options
       *
       * @param {Highcharts.Chart} chart
       */


      Pane.prototype.init = function (options, chart) {
        this.chart = chart;
        this.background = [];
        chart.pane.push(this);
        this.setOptions(options);
      };
      /**
       * @private
       * @function Highcharts.Pane#setOptions
       *
       * @param {Highcharts.PaneOptions} options
       */


      Pane.prototype.setOptions = function (options) {
        // Set options. Angular charts have a default background (#3318)
        this.options = options = merge(this.defaultOptions, this.chart.angular ? {
          background: {}
        } : void 0, options);
      };
      /**
       * Render the pane with its backgrounds.
       *
       * @private
       * @function Highcharts.Pane#render
       */


      Pane.prototype.render = function () {
        var options = this.options,
            backgroundOption = this.options.background,
            renderer = this.chart.renderer,
            len,
            i;

        if (!this.group) {
          this.group = renderer.g('pane-group').attr({
            zIndex: options.zIndex || 0
          }).add();
        }

        this.updateCenter(); // Render the backgrounds

        if (backgroundOption) {
          backgroundOption = splat(backgroundOption);
          len = Math.max(backgroundOption.length, this.background.length || 0);

          for (i = 0; i < len; i++) {
            // #6641 - if axis exists, chart is circular and apply
            // background
            if (backgroundOption[i] && this.axis) {
              this.renderBackground(merge(this.defaultBackgroundOptions, backgroundOption[i]), i);
            } else if (this.background[i]) {
              this.background[i] = this.background[i].destroy();
              this.background.splice(i, 1);
            }
          }
        }
      };
      /**
       * Render an individual pane background.
       *
       * @private
       * @function Highcharts.Pane#renderBackground
       *
       * @param {Highcharts.PaneBackgroundOptions} backgroundOptions
       *        Background options
       *
       * @param {number} i
       *        The index of the background in this.backgrounds
       */


      Pane.prototype.renderBackground = function (backgroundOptions, i) {
        var method = 'animate',
            attribs = {
          'class': 'highcharts-pane ' + (backgroundOptions.className || '')
        };

        if (!this.chart.styledMode) {
          extend(attribs, {
            'fill': backgroundOptions.backgroundColor,
            'stroke': backgroundOptions.borderColor,
            'stroke-width': backgroundOptions.borderWidth
          });
        }

        if (!this.background[i]) {
          this.background[i] = this.chart.renderer.path().add(this.group);
          method = 'attr';
        }

        this.background[i][method]({
          'd': this.axis.getPlotBandPath(backgroundOptions.from, backgroundOptions.to, backgroundOptions)
        }).attr(attribs);
      };
      /**
       * Gets the center for the pane and its axis.
       *
       * @private
       * @function Highcharts.Pane#updateCenter
       * @param {Highcharts.Axis} [axis]
       */


      Pane.prototype.updateCenter = function (axis) {
        this.center = (axis || this.axis || {}).center = CU.getCenter.call(this);
      };
      /**
       * Destroy the pane item
       *
       * @ignore
       * @private
       * @function Highcharts.Pane#destroy
       * /
      destroy: function () {
          erase(this.chart.pane, this);
          this.background.forEach(function (background) {
              background.destroy();
          });
          this.background.length = 0;
          this.group = this.group.destroy();
      },
      */

      /**
       * Update the pane item with new options
       *
       * @private
       * @function Highcharts.Pane#update
       * @param {Highcharts.PaneOptions} options
       *        New pane options
       * @param {boolean} [redraw]
       */


      Pane.prototype.update = function (options, redraw) {
        merge(true, this.options, options);
        this.setOptions(this.options);
        this.render();
        this.chart.axes.forEach(function (axis) {
          if (axis.pane === this) {
            axis.pane = null;
            axis.update({}, redraw);
          }
        }, this);
      };

      return Pane;
    }();
    /**
     * Check whether element is inside or outside pane.
     * @private
     * @param  {number} x
     * Element's x coordinate
     * @param  {number} y
     * Element's y coordinate
     * @param  {Array<number>} center
     * Pane's center (x, y) and diameter
     */


    function isInsidePane(x, y, center) {
      return Math.sqrt(Math.pow(x - center[0], 2) + Math.pow(y - center[1], 2)) <= center[2] / 2;
    }

    Chart.prototype.getHoverPane = function (eventArgs) {
      var chart = this;
      var hoverPane;

      if (eventArgs) {
        chart.pane.forEach(function (pane) {
          var plotX = eventArgs.chartX - chart.plotLeft,
              plotY = eventArgs.chartY - chart.plotTop,
              x = chart.inverted ? plotY : plotX,
              y = chart.inverted ? plotX : plotY;

          if (isInsidePane(x, y, pane.center)) {
            hoverPane = pane;
          }
        });
      }

      return hoverPane;
    };

    addEvent(Chart, 'afterIsInsidePlot', function (e) {
      var chart = this;

      if (chart.polar) {
        e.isInsidePlot = chart.pane.some(function (pane) {
          return isInsidePane(e.x, e.y, pane.center);
        });
      }
    });
    addEvent(Pointer, 'beforeGetHoverData', function (eventArgs) {
      var chart = this.chart;

      if (chart.polar) {
        // Find pane we are currently hovering over.
        chart.hoverPane = chart.getHoverPane(eventArgs); // Edit filter method to handle polar

        eventArgs.filter = function (s) {
          return s.visible && !(!eventArgs.shared && s.directTouch) && // #3821
          pick(s.options.enableMouseTracking, true) && (!chart.hoverPane || s.xAxis.pane === chart.hoverPane);
        };
      } else {
        chart.hoverPane = void 0;
      }
    });
    addEvent(Pointer, 'afterGetHoverData', function (eventArgs) {
      var chart = this.chart;

      if (eventArgs.hoverPoint && eventArgs.hoverPoint.plotX && eventArgs.hoverPoint.plotY && chart.hoverPane && !isInsidePane(eventArgs.hoverPoint.plotX, eventArgs.hoverPoint.plotY, chart.hoverPane.center)) {
        eventArgs.hoverPoint = void 0;
      }
    });
    H.Pane = Pane;
    return H.Pane;
  });

  _registerModule(_modules, 'Core/Axis/RadialAxis.js', [_modules['Core/Axis/AxisDefaults.js'], _modules['Core/DefaultOptions.js'], _modules['Core/Globals.js'], _modules['Core/Utilities.js']], function (AxisDefaults, D, H, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var defaultOptions = D.defaultOptions;
    var noop = H.noop;
    var addEvent = U.addEvent,
        correctFloat = U.correctFloat,
        defined = U.defined,
        extend = U.extend,
        fireEvent = U.fireEvent,
        merge = U.merge,
        pick = U.pick,
        relativeLength = U.relativeLength,
        wrap = U.wrap;
    /* *
     *
     *  Composition
     *
     * */

    var RadialAxis;

    (function (RadialAxis) {
      /* *
       *
       *  Declarations
       *
       * */

      /* *
       *
       *  Constants
       *
       * */
      var composedClasses = [];
      /**
       * Circular axis around the perimeter of a polar chart.
       * @private
       */

      var defaultCircularOptions = {
        gridLineWidth: 1,
        labels: {
          align: void 0,
          distance: 15,
          x: 0,
          y: void 0,
          style: {
            textOverflow: 'none' // wrap lines by default (#7248)

          }
        },
        maxPadding: 0,
        minPadding: 0,
        showLastLabel: false,
        tickLength: 0
      };
      /**
       * The default options extend defaultYAxisOptions.
       * @private
       */

      var defaultRadialGaugeOptions = {
        labels: {
          align: 'center',
          x: 0,
          y: void 0 // auto

        },
        minorGridLineWidth: 0,
        minorTickInterval: 'auto',
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickWidth: 1,
        tickLength: 10,
        tickPosition: 'inside',
        tickWidth: 2,
        title: {
          rotation: 0
        },
        zIndex: 2 // behind dials, points in the series group

      };
      /**
       * Radial axis, like a spoke in a polar chart.
       * @private
       */

      var defaultRadialOptions = {
        /**
         * In a polar chart, this is the angle of the Y axis in degrees, where
         * 0 is up and 90 is right. The angle determines the position of the
         * axis line and the labels, though the coordinate system is unaffected.
         * Since v8.0.0 this option is also applicable for X axis (inverted
         * polar).
         *
         * @sample {highcharts} highcharts/xaxis/angle/
         *         Custom X axis' angle on inverted polar chart
         * @sample {highcharts} highcharts/yaxis/angle/
         *         Dual axis polar chart
         *
         * @type      {number}
         * @default   0
         * @since     4.2.7
         * @product   highcharts
         * @apioption xAxis.angle
         */

        /**
         * Polar charts only. Whether the grid lines should draw as a polygon
         * with straight lines between categories, or as circles. Can be either
         * `circle` or `polygon`. Since v8.0.0 this option is also applicable
         * for X axis (inverted polar).
         *
         * @sample {highcharts} highcharts/demo/polar-spider/
         *         Polygon grid lines
         * @sample {highcharts} highcharts/xaxis/gridlineinterpolation/
         *         Circle and polygon on inverted polar
         * @sample {highcharts} highcharts/yaxis/gridlineinterpolation/
         *         Circle and polygon
         *
         * @type       {string}
         * @product    highcharts
         * @validvalue ["circle", "polygon"]
         * @apioption  xAxis.gridLineInterpolation
         */
        gridLineInterpolation: 'circle',
        gridLineWidth: 1,
        labels: {
          align: 'right',
          x: -3,
          y: -2
        },
        showLastLabel: false,
        title: {
          x: 4,
          text: null,
          rotation: 90
        }
      };
      /* *
       *
       *  Functions
       *
       * */

      /* eslint-disable valid-jsdoc */

      /**
       * In case of auto connect, add one closestPointRange to the max value
       * right before tickPositions are computed, so that ticks will extend
       * passed the real max.
       * @private
       */

      function beforeSetTickPositions() {
        // If autoConnect is true, polygonal grid lines are connected, and
        // one closestPointRange is added to the X axis to prevent the last
        // point from overlapping the first.
        this.autoConnect = this.isCircular && typeof pick(this.userMax, this.options.max) === 'undefined' && correctFloat(this.endAngleRad - this.startAngleRad) === correctFloat(2 * Math.PI); // This will lead to add an extra tick to xAxis in order to display
        // a correct range on inverted polar

        if (!this.isCircular && this.chart.inverted) {
          this.max++;
        }

        if (this.autoConnect) {
          this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0; // #1197, #2260
        }
      }
      /**
       * Augments methods for the value axis.
       *
       * @private
       *
       * @param {Highcharts.Axis} AxisClass
       * Axis class to extend.
       *
       * @param {Highcharts.Tick} TickClass
       * Tick class to use.
       *
       * @return {Highcharts.Axis}
       * Axis composition.
       */


      function compose(AxisClass, TickClass) {
        if (composedClasses.indexOf(AxisClass) === -1) {
          composedClasses.push(AxisClass);
          addEvent(AxisClass, 'afterInit', onAxisAfterInit);
          addEvent(AxisClass, 'autoLabelAlign', onAxisAutoLabelAlign);
          addEvent(AxisClass, 'destroy', onAxisDestroy);
          addEvent(AxisClass, 'init', onAxisInit);
          addEvent(AxisClass, 'initialAxisTranslation', onAxisInitialAxisTranslation);
        }

        if (composedClasses.indexOf(TickClass) === -1) {
          composedClasses.push(TickClass);
          addEvent(TickClass, 'afterGetLabelPosition', onTickAfterGetLabelPosition);
          addEvent(TickClass, 'afterGetPosition', onTickAfterGetPosition);
          wrap(TickClass.prototype, 'getMarkPath', wrapTickGetMarkPath);
        }

        return AxisClass;
      }

      RadialAxis.compose = compose;
      /**
       * Attach and return collecting function for labels in radial axis for
       * anti-collision.
       *
       * @private
       */

      function createLabelCollector() {
        var _this = this;

        return function () {
          if (_this.isRadial && _this.tickPositions && // undocumented option for now, but working
          _this.options.labels && _this.options.labels.allowOverlap !== true) {
            return _this.tickPositions.map(function (pos) {
              return _this.ticks[pos] && _this.ticks[pos].label;
            }).filter(function (label) {
              return Boolean(label);
            });
          }
        };
      }
      /**
       * Creates an empty collector function.
       * @private
       */


      function createLabelCollectorHidden() {
        return noop;
      }
      /**
       * Find the correct end values of crosshair in polar.
       * @private
       */


      function getCrosshairPosition(options, x1, y1) {
        var center = this.pane.center;
        var value = options.value,
            shapeArgs,
            end,
            x2,
            y2;

        if (this.isCircular) {
          if (!defined(value)) {
            // When the snap is set to false
            x2 = options.chartX || 0;
            y2 = options.chartY || 0;
            value = this.translate(Math.atan2(y2 - y1, x2 - x1) - this.startAngleRad, true);
          } else if (options.point) {
            // When the snap is set to true
            shapeArgs = options.point.shapeArgs || {};

            if (shapeArgs.start) {
              // Find a true value of the point based on the
              // angle
              value = this.chart.inverted ? this.translate(options.point.rectPlotY, true) : options.point.x;
            }
          }

          end = this.getPosition(value);
          x2 = end.x;
          y2 = end.y;
        } else {
          if (!defined(value)) {
            x2 = options.chartX;
            y2 = options.chartY;
          }

          if (defined(x2) && defined(y2)) {
            // Calculate radius of non-circular axis' crosshair
            y1 = center[1] + this.chart.plotTop;
            value = this.translate(Math.min(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), center[2] / 2) - center[3] / 2, true);
          }
        }

        return [value, x2 || 0, y2 || 0];
      }
      /**
       * Get the path for the axis line. This method is also referenced in the
       * getPlotLinePath method.
       *
       * @private
       * @param {number} _lineWidth
       * Line width is not used.
       * @param {number} [radius]
       * Radius of radial path.
       * @param {number} [innerRadius]
       * Inner radius of radial path.
       */


      function getLinePath(_lineWidth, radius, innerRadius) {
        var center = this.pane.center,
            chart = this.chart,
            left = this.left || 0,
            top = this.top || 0;
        var end,
            r = pick(radius, center[2] / 2 - this.offset),
            path;

        if (typeof innerRadius === 'undefined') {
          innerRadius = this.horiz ? 0 : this.center && -this.center[3] / 2;
        } // In case when innerSize of pane is set, it must be included


        if (innerRadius) {
          r += innerRadius;
        }

        if (this.isCircular || typeof radius !== 'undefined') {
          path = this.chart.renderer.symbols.arc(left + center[0], top + center[1], r, r, {
            start: this.startAngleRad,
            end: this.endAngleRad,
            open: true,
            innerR: 0
          }); // Bounds used to position the plotLine label next to the line
          // (#7117)

          path.xBounds = [left + center[0]];
          path.yBounds = [top + center[1] - r];
        } else {
          end = this.postTranslate(this.angleRad, r);
          path = [['M', this.center[0] + chart.plotLeft, this.center[1] + chart.plotTop], ['L', end.x, end.y]];
        }

        return path;
      }
      /**
       * Wrap the getOffset method to return zero offset for title or labels
       * in a radial axis.
       */


      function getOffset() {
        var axisProto = this.constructor.prototype; // Call the Axis prototype method (the method we're in now is on the
        // instance)

        axisProto.getOffset.call(this); // Title or label offsets are not counted

        this.chart.axisOffset[this.side] = 0;
      }
      /**
       * Find the path for plot bands along the radial axis.
       *
       * @private
       */


      function getPlotBandPath(from, to, options) {
        var chart = this.chart,
            radiusToPixels = function (radius) {
          if (typeof radius === 'string') {
            var r = parseInt(radius, 10);

            if (percentRegex.test(radius)) {
              r = r * fullRadius / 100;
            }

            return r;
          }

          return radius;
        },
            center = this.center,
            startAngleRad = this.startAngleRad,
            fullRadius = center[2] / 2,
            offset = Math.min(this.offset, 0),
            left = this.left || 0,
            top = this.top || 0,
            percentRegex = /%$/,
            isCircular = this.isCircular; // X axis in a polar chart


        var start,
            end,
            angle,
            xOnPerimeter,
            open,
            path,
            outerRadius = pick(radiusToPixels(options.outerRadius), fullRadius),
            innerRadius = radiusToPixels(options.innerRadius),
            thickness = pick(radiusToPixels(options.thickness), 10); // Polygonal plot bands

        if (this.options.gridLineInterpolation === 'polygon') {
          path = this.getPlotLinePath({
            value: from
          }).concat(this.getPlotLinePath({
            value: to,
            reverse: true
          })); // Circular grid bands
        } else {
          // Keep within bounds
          from = Math.max(from, this.min);
          to = Math.min(to, this.max);
          var transFrom = this.translate(from),
              transTo = this.translate(to); // Plot bands on Y axis (radial axis) - inner and outer
          // radius depend on to and from

          if (!isCircular) {
            outerRadius = transFrom || 0;
            innerRadius = transTo || 0;
          } // Handle full circle


          if (options.shape === 'circle' || !isCircular) {
            start = -Math.PI / 2;
            end = Math.PI * 1.5;
            open = true;
          } else {
            start = startAngleRad + (transFrom || 0);
            end = startAngleRad + (transTo || 0);
          }

          outerRadius -= offset; // #5283

          thickness -= offset; // #5283

          path = chart.renderer.symbols.arc(left + center[0], top + center[1], outerRadius, outerRadius, {
            // Math is for reversed yAxis (#3606)
            start: Math.min(start, end),
            end: Math.max(start, end),
            innerR: pick(innerRadius, outerRadius - thickness),
            open: open
          }); // Provide positioning boxes for the label (#6406)

          if (isCircular) {
            angle = (end + start) / 2;
            xOnPerimeter = left + center[0] + center[2] / 2 * Math.cos(angle);
            path.xBounds = angle > -Math.PI / 2 && angle < Math.PI / 2 ? // Right hemisphere
            [xOnPerimeter, chart.plotWidth] : // Left hemisphere
            [0, xOnPerimeter];
            path.yBounds = [top + center[1] + center[2] / 2 * Math.sin(angle)]; // Shift up or down to get the label clear of the perimeter

            path.yBounds[0] += angle > -Math.PI && angle < 0 || angle > Math.PI ? -10 : 10;
          }
        }

        return path;
      }
      /**
       * Find the path for plot lines perpendicular to the radial axis.
       */


      function getPlotLinePath(options) {
        var _this = this;

        var center = this.pane.center,
            chart = this.chart,
            inverted = chart.inverted,
            reverse = options.reverse,
            background = this.pane.options.background ? this.pane.options.background[0] || this.pane.options.background : {},
            innerRadius = background.innerRadius || '0%',
            outerRadius = background.outerRadius || '100%',
            x1 = center[0] + chart.plotLeft,
            y1 = center[1] + chart.plotTop,
            height = this.height,
            isCrosshair = options.isCrosshair,
            paneInnerR = center[3] / 2;
        var value = options.value,
            innerRatio,
            distance,
            a,
            b,
            otherAxis,
            xy,
            tickPositions,
            crossPos,
            path;
        var end = this.getPosition(value);
        var x2 = end.x,
            y2 = end.y; // Crosshair logic

        if (isCrosshair) {
          // Find crosshair's position and perform destructuring
          // assignment
          crossPos = this.getCrosshairPosition(options, x1, y1);
          value = crossPos[0];
          x2 = crossPos[1];
          y2 = crossPos[2];
        } // Spokes


        if (this.isCircular) {
          distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          a = typeof innerRadius === 'string' ? relativeLength(innerRadius, 1) : innerRadius / distance;
          b = typeof outerRadius === 'string' ? relativeLength(outerRadius, 1) : outerRadius / distance; // To ensure that gridlines won't be displayed in area
          // defined by innerSize in case of custom radiuses of pane's
          // background

          if (center && paneInnerR) {
            innerRatio = paneInnerR / distance;

            if (a < innerRatio) {
              a = innerRatio;
            }

            if (b < innerRatio) {
              b = innerRatio;
            }
          }

          path = [['M', x1 + a * (x2 - x1), y1 - a * (y1 - y2)], ['L', x2 - (1 - b) * (x2 - x1), y2 + (1 - b) * (y1 - y2)]]; // Concentric circles
        } else {
          // Pick the right values depending if it is grid line or
          // crosshair
          value = this.translate(value); // This is required in case when xAxis is non-circular to
          // prevent grid lines (or crosshairs, if enabled) from
          // rendering above the center after they supposed to be
          // displayed below the center point

          if (value) {
            if (value < 0 || value > height) {
              value = 0;
            }
          }

          if (this.options.gridLineInterpolation === 'circle') {
            // A value of 0 is in the center, so it won't be
            // visible, but draw it anyway for update and animation
            // (#2366)
            path = this.getLinePath(0, value, paneInnerR); // Concentric polygons
          } else {
            path = []; // Find the other axis (a circular one) in the same pane

            chart[inverted ? 'yAxis' : 'xAxis'].forEach(function (a) {
              if (a.pane === _this.pane) {
                otherAxis = a;
              }
            });

            if (otherAxis) {
              tickPositions = otherAxis.tickPositions;

              if (otherAxis.autoConnect) {
                tickPositions = tickPositions.concat([tickPositions[0]]);
              } // Reverse the positions for concatenation of polygonal
              // plot bands


              if (reverse) {
                tickPositions = tickPositions.slice().reverse();
              }

              if (value) {
                value += paneInnerR;
              }

              for (var i = 0; i < tickPositions.length; i++) {
                xy = otherAxis.getPosition(tickPositions[i], value);
                path.push(i ? ['L', xy.x, xy.y] : ['M', xy.x, xy.y]);
              }
            }
          }
        }

        return path;
      }
      /**
       * Returns the x, y coordinate of a point given by a value and a pixel
       * distance from center.
       *
       * @private
       * @param {number} value
       * Point value.
       * @param {number} [length]
       * Distance from center.
       */


      function getPosition(value, length) {
        var translatedVal = this.translate(value);
        return this.postTranslate(this.isCircular ? translatedVal : this.angleRad, // #2848
        // In case when translatedVal is negative, the 0 value must be
        // used instead, in order to deal with lines and labels that
        // fall out of the visible range near the center of a pane
        pick(this.isCircular ? length : translatedVal < 0 ? 0 : translatedVal, this.center[2] / 2) - this.offset);
      }
      /**
       * Find the position for the axis title, by default inside the gauge.
       */


      function getTitlePosition() {
        var center = this.center,
            chart = this.chart,
            titleOptions = this.options.title;
        return {
          x: chart.plotLeft + center[0] + (titleOptions.x || 0),
          y: chart.plotTop + center[1] - {
            high: 0.5,
            middle: 0.25,
            low: 0
          }[titleOptions.align] * center[2] + (titleOptions.y || 0)
        };
      }
      /**
       * Modify radial axis.
       * @private
       *
       * @param {Highcharts.Axis} radialAxis
       * Radial axis to modify.
       */


      function modify(axis) {
        axis.beforeSetTickPositions = beforeSetTickPositions;
        axis.createLabelCollector = createLabelCollector;
        axis.getCrosshairPosition = getCrosshairPosition;
        axis.getLinePath = getLinePath;
        axis.getOffset = getOffset;
        axis.getPlotBandPath = getPlotBandPath;
        axis.getPlotLinePath = getPlotLinePath;
        axis.getPosition = getPosition;
        axis.getTitlePosition = getTitlePosition;
        axis.postTranslate = postTranslate;
        axis.setAxisSize = setAxisSize;
        axis.setAxisTranslation = setAxisTranslation;
        axis.setOptions = setOptions;
      }
      /**
       * Modify radial axis as hidden.
       * @private
       *
       * @param {Highcharts.Axis} radialAxis
       * Radial axis to modify.
       */


      function modifyAsHidden(radialAxis) {
        radialAxis.isHidden = true;
        radialAxis.createLabelCollector = createLabelCollectorHidden;
        radialAxis.getOffset = noop;
        radialAxis.redraw = renderHidden;
        radialAxis.render = renderHidden;
        radialAxis.setScale = noop;
        radialAxis.setCategories = noop;
        radialAxis.setTitle = noop;
      }
      /**
       * Finalize modification of axis instance with radial logic.
       */


      function onAxisAfterInit() {
        var chart = this.chart,
            options = this.options,
            isHidden = chart.angular && this.isXAxis,
            pane = this.pane,
            paneOptions = pane && pane.options;

        if (!isHidden && pane && (chart.angular || chart.polar)) {
          // Start and end angle options are given in degrees relative to
          // top, while internal computations are in radians relative to
          // right (like SVG).
          // Y axis in polar charts
          this.angleRad = (options.angle || 0) * Math.PI / 180; // Gauges

          this.startAngleRad = (paneOptions.startAngle - 90) * Math.PI / 180;
          this.endAngleRad = (pick(paneOptions.endAngle, paneOptions.startAngle + 360) - 90) * Math.PI / 180; // Gauges

          this.offset = options.offset || 0;
        }
      }
      /**
       * Wrap auto label align to avoid setting axis-wide rotation on radial axes.
       * (#4920)
       */


      function onAxisAutoLabelAlign(e) {
        if (this.isRadial) {
          e.align = void 0;
          e.preventDefault();
        }
      }
      /**
       * Remove label collector function on axis remove/update.
       */


      function onAxisDestroy() {
        if (this.chart && this.chart.labelCollectors) {
          var index = this.labelCollector ? this.chart.labelCollectors.indexOf(this.labelCollector) : -1;

          if (index >= 0) {
            this.chart.labelCollectors.splice(index, 1);
          }
        }
      }
      /**
       * Modify axis instance with radial logic before common axis init.
       */


      function onAxisInit(e) {
        var chart = this.chart,
            inverted = chart.inverted,
            angular = chart.angular,
            polar = chart.polar,
            isX = this.isXAxis,
            coll = this.coll,
            isHidden = angular && isX,
            chartOptions = chart.options,
            paneIndex = e.userOptions.pane || 0,
            pane = this.pane = chart.pane && chart.pane[paneIndex];
        var isCircular; // Prevent changes for colorAxis

        if (coll === 'colorAxis') {
          this.isRadial = false;
          return;
        } // Before prototype.init


        if (angular) {
          if (isHidden) {
            modifyAsHidden(this);
          } else {
            modify(this);
          }

          isCircular = !isX;

          if (isCircular) {
            this.defaultPolarOptions = defaultRadialGaugeOptions;
          }
        } else if (polar) {
          modify(this); // Check which axis is circular

          isCircular = this.horiz;
          this.defaultPolarOptions = isCircular ? defaultCircularOptions : merge(coll === 'xAxis' ? AxisDefaults.defaultXAxisOptions : AxisDefaults.defaultYAxisOptions, defaultRadialOptions); // Apply the stack labels for yAxis in case of inverted chart

          if (inverted && coll === 'yAxis') {
            this.defaultPolarOptions.stackLabels = AxisDefaults.defaultYAxisOptions.stackLabels;
            this.defaultPolarOptions.reversedStacks = true;
          }
        } // Disable certain features on angular and polar axes


        if (angular || polar) {
          this.isRadial = true;
          chartOptions.chart.zoomType = null;

          if (!this.labelCollector) {
            this.labelCollector = this.createLabelCollector();
          }

          if (this.labelCollector) {
            // Prevent overlapping axis labels (#9761)
            chart.labelCollectors.push(this.labelCollector);
          }
        } else {
          this.isRadial = false;
        } // A pointer back to this axis to borrow geometry


        if (pane && isCircular) {
          pane.axis = this;
        }

        this.isCircular = isCircular;
      }
      /**
       * Prepare axis translation.
       */


      function onAxisInitialAxisTranslation() {
        if (this.isRadial) {
          this.beforeSetTickPositions();
        }
      }
      /**
       * Find the center position of the label based on the distance option.
       */


      function onTickAfterGetLabelPosition(e) {
        var label = this.label;

        if (!label) {
          return;
        }

        var axis = this.axis,
            labelBBox = label.getBBox(),
            labelOptions = axis.options.labels,
            angle = (axis.translate(this.pos) + axis.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360,
            correctAngle = Math.round(angle),
            labelYPosCorrection = !defined(labelOptions.y) ? -labelBBox.height * 0.3 : 0;
        var optionsY = labelOptions.y,
            ret,
            centerSlot = 20,
            // 20 degrees to each side at the top and bottom
        align = labelOptions.align,
            labelDir = 'end',
            // Direction of the label 'start' or 'end'
        reducedAngle1 = correctAngle < 0 ? correctAngle + 360 : correctAngle,
            reducedAngle2 = reducedAngle1,
            translateY = 0,
            translateX = 0;

        if (axis.isRadial) {
          // Both X and Y axes in a polar chart
          ret = axis.getPosition(this.pos, axis.center[2] / 2 + relativeLength(pick(labelOptions.distance, -25), axis.center[2] / 2, -axis.center[2] / 2)); // Automatically rotated

          if (labelOptions.rotation === 'auto') {
            label.attr({
              rotation: angle
            }); // Vertically centered
          } else if (!defined(optionsY)) {
            optionsY = axis.chart.renderer.fontMetrics(label.styles && label.styles.fontSize).b - labelBBox.height / 2;
          } // Automatic alignment


          if (!defined(align)) {
            if (axis.isCircular) {
              // Y axis
              if (labelBBox.width > axis.len * axis.tickInterval / (axis.max - axis.min)) {
                // #3506
                centerSlot = 0;
              }

              if (angle > centerSlot && angle < 180 - centerSlot) {
                align = 'left'; // right hemisphere
              } else if (angle > 180 + centerSlot && angle < 360 - centerSlot) {
                align = 'right'; // left hemisphere
              } else {
                align = 'center'; // top or bottom
              }
            } else {
              align = 'center';
            }

            label.attr({
              align: align
            });
          } // Auto alignment for solid-gauges with two labels (#10635)


          if (align === 'auto' && axis.tickPositions.length === 2 && axis.isCircular) {
            // Angles reduced to 0 - 90 or 180 - 270
            if (reducedAngle1 > 90 && reducedAngle1 < 180) {
              reducedAngle1 = 180 - reducedAngle1;
            } else if (reducedAngle1 > 270 && reducedAngle1 <= 360) {
              reducedAngle1 = 540 - reducedAngle1;
            } // Angles reduced to 0 - 180


            if (reducedAngle2 > 180 && reducedAngle2 <= 360) {
              reducedAngle2 = 360 - reducedAngle2;
            }

            if (axis.pane.options.startAngle === correctAngle || axis.pane.options.startAngle === correctAngle + 360 || axis.pane.options.startAngle === correctAngle - 360) {
              labelDir = 'start';
            }

            if (correctAngle >= -90 && correctAngle <= 90 || correctAngle >= -360 && correctAngle <= -270 || correctAngle >= 270 && correctAngle <= 360) {
              align = labelDir === 'start' ? 'right' : 'left';
            } else {
              align = labelDir === 'start' ? 'left' : 'right';
            } // For angles beetwen (90 + n * 180) +- 20


            if (reducedAngle2 > 70 && reducedAngle2 < 110) {
              align = 'center';
            } // auto Y translation


            if (reducedAngle1 < 15 || reducedAngle1 >= 180 && reducedAngle1 < 195) {
              translateY = labelBBox.height * 0.3;
            } else if (reducedAngle1 >= 15 && reducedAngle1 <= 35) {
              translateY = labelDir === 'start' ? 0 : labelBBox.height * 0.75;
            } else if (reducedAngle1 >= 195 && reducedAngle1 <= 215) {
              translateY = labelDir === 'start' ? labelBBox.height * 0.75 : 0;
            } else if (reducedAngle1 > 35 && reducedAngle1 <= 90) {
              translateY = labelDir === 'start' ? -labelBBox.height * 0.25 : labelBBox.height;
            } else if (reducedAngle1 > 215 && reducedAngle1 <= 270) {
              translateY = labelDir === 'start' ? labelBBox.height : -labelBBox.height * 0.25;
            } // auto X translation


            if (reducedAngle2 < 15) {
              translateX = labelDir === 'start' ? -labelBBox.height * 0.15 : labelBBox.height * 0.15;
            } else if (reducedAngle2 > 165 && reducedAngle2 <= 180) {
              translateX = labelDir === 'start' ? labelBBox.height * 0.15 : -labelBBox.height * 0.15;
            }

            label.attr({
              align: align
            });
            label.translate(translateX, translateY + labelYPosCorrection);
          }

          e.pos.x = ret.x + (labelOptions.x || 0);
          e.pos.y = ret.y + (optionsY || 0);
        }
      }
      /**
       * Add special cases within the Tick class' methods for radial axes.
       */


      function onTickAfterGetPosition(e) {
        if (this.axis.getPosition) {
          extend(e.pos, this.axis.getPosition(this.pos));
        }
      }
      /**
       * Translate from intermediate plotX (angle), plotY (axis.len - radius)
       * to final chart coordinates.
       *
       * @private
       * @param {number} angle
       * Translation angle.
       * @param {number} radius
       * Translation radius.
       */


      function postTranslate(angle, radius) {
        var chart = this.chart,
            center = this.center;
        angle = this.startAngleRad + angle;
        return {
          x: chart.plotLeft + center[0] + Math.cos(angle) * radius,
          y: chart.plotTop + center[1] + Math.sin(angle) * radius
        };
      }
      /**
       * Prevent setting Y axis dirty.
       */


      function renderHidden() {
        this.isDirty = false;
      }
      /**
       * Override the setAxisSize method to use the arc's circumference as
       * length. This allows tickPixelInterval to apply to pixel lengths along
       * the perimeter.
       * @private
       */


      function setAxisSize() {
        var axisProto = this.constructor.prototype;
        var center, start;
        axisProto.setAxisSize.call(this);

        if (this.isRadial) {
          // Set the center array
          this.pane.updateCenter(this); // In case when the innerSize is set in a polar chart, the axis'
          // center cannot be a reference to pane's center

          center = this.center = this.pane.center.slice(); // The sector is used in Axis.translate to compute the
          // translation of reversed axis points (#2570)

          if (this.isCircular) {
            this.sector = this.endAngleRad - this.startAngleRad;
          } else {
            // When the pane's startAngle or the axis' angle is set then
            // new x and y values for vertical axis' center must be
            // calulated
            start = this.postTranslate(this.angleRad, center[3] / 2);
            center[0] = start.x - this.chart.plotLeft;
            center[1] = start.y - this.chart.plotTop;
          } // Axis len is used to lay out the ticks


          this.len = this.width = this.height = (center[2] - center[3]) * pick(this.sector, 1) / 2;
        }
      }
      /**
       * Override setAxisTranslation by setting the translation to the
       * difference in rotation. This allows the translate method to return
       * angle for any given value.
       *
       * @private
       */


      function setAxisTranslation() {
        var axisProto = this.constructor.prototype; // Call uber method

        axisProto.setAxisTranslation.call(this); // Set transA and minPixelPadding

        if (this.center) {
          // it's not defined the first time
          if (this.isCircular) {
            this.transA = (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1);
          } else {
            // The transA here is the length of the axis, so in case
            // of inner radius, the length must be decreased by it
            this.transA = (this.center[2] - this.center[3]) / 2 / (this.max - this.min || 1);
          }

          if (this.isXAxis) {
            this.minPixelPadding = this.transA * this.minPointOffset;
          } else {
            // This is a workaround for regression #2593, but categories
            // still don't position correctly.
            this.minPixelPadding = 0;
          }
        }
      }
      /**
       * Merge and set options.
       */


      function setOptions(userOptions) {
        var options = this.options = merge(this.constructor.defaultOptions, this.defaultPolarOptions, defaultOptions[this.coll], // #16112
        userOptions); // Make sure the plotBands array is instanciated for each Axis
        // (#2649)

        if (!options.plotBands) {
          options.plotBands = [];
        }

        fireEvent(this, 'afterSetOptions');
      }
      /**
       * Wrap the getMarkPath function to return the path of the radial marker.
       */


      function wrapTickGetMarkPath(proceed, x, y, tickLength, tickWidth, horiz, renderer) {
        var axis = this.axis;
        var endPoint, ret;

        if (axis.isRadial) {
          endPoint = axis.getPosition(this.pos, axis.center[2] / 2 + tickLength);
          ret = ['M', x, y, 'L', endPoint.x, endPoint.y];
        } else {
          ret = proceed.call(this, x, y, tickLength, tickWidth, horiz, renderer);
        }

        return ret;
      }
      /* eslint-enable valid-jsdoc */

    })(RadialAxis || (RadialAxis = {}));
    /* *
     *
     *  Default Export
     *
     * */


    return RadialAxis;
  });

  _registerModule(_modules, 'Series/AreaRange/AreaRangePoint.js', [_modules['Series/Area/AreaSeries.js'], _modules['Core/Series/Point.js'], _modules['Core/Utilities.js']], function (AreaSeries, Point, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var pointProto = Point.prototype;
    var defined = U.defined,
        isNumber = U.isNumber;
    /* *
     *
     *  Class
     *
     * */

    var AreaRangePoint =
    /** @class */
    function (_super) {
      __extends(AreaRangePoint, _super);

      function AreaRangePoint() {
        /* *
         *
         *  Properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.high = void 0;
        _this.low = void 0;
        _this.options = void 0;
        _this.plotHigh = void 0;
        _this.plotLow = void 0;
        _this.plotHighX = void 0;
        _this.plotLowX = void 0;
        _this.plotX = void 0;
        _this.series = void 0;
        return _this;
      }
      /* *
       *
       *  Functions
       *
       * */

      /**
       * @private
       */


      AreaRangePoint.prototype.setState = function () {
        var prevState = this.state,
            series = this.series,
            isPolar = series.chart.polar;

        if (!defined(this.plotHigh)) {
          // Boost doesn't calculate plotHigh
          this.plotHigh = series.yAxis.toPixels(this.high, true);
        }

        if (!defined(this.plotLow)) {
          // Boost doesn't calculate plotLow
          this.plotLow = this.plotY = series.yAxis.toPixels(this.low, true);
        }

        if (series.stateMarkerGraphic) {
          series.lowerStateMarkerGraphic = series.stateMarkerGraphic;
          series.stateMarkerGraphic = series.upperStateMarkerGraphic;
        } // Change state also for the top marker


        this.graphic = this.upperGraphic;
        this.plotY = this.plotHigh;

        if (isPolar) {
          this.plotX = this.plotHighX;
        } // Top state:


        pointProto.setState.apply(this, arguments);
        this.state = prevState; // Now restore defaults

        this.plotY = this.plotLow;
        this.graphic = this.lowerGraphic;

        if (isPolar) {
          this.plotX = this.plotLowX;
        }

        if (series.stateMarkerGraphic) {
          series.upperStateMarkerGraphic = series.stateMarkerGraphic;
          series.stateMarkerGraphic = series.lowerStateMarkerGraphic; // Lower marker is stored at stateMarkerGraphic
          // to avoid reference duplication (#7021)

          series.lowerStateMarkerGraphic = void 0;
        }

        pointProto.setState.apply(this, arguments);
      };

      AreaRangePoint.prototype.haloPath = function () {
        var isPolar = this.series.chart.polar,
            path = []; // Bottom halo

        this.plotY = this.plotLow;

        if (isPolar) {
          this.plotX = this.plotLowX;
        }

        if (this.isInside) {
          path = pointProto.haloPath.apply(this, arguments);
        } // Top halo


        this.plotY = this.plotHigh;

        if (isPolar) {
          this.plotX = this.plotHighX;
        }

        if (this.isTopInside) {
          path = path.concat(pointProto.haloPath.apply(this, arguments));
        }

        return path;
      };

      AreaRangePoint.prototype.isValid = function () {
        return isNumber(this.low) && isNumber(this.high);
      };

      return AreaRangePoint;
    }(AreaSeries.prototype.pointClass);
    /* *
     *
     *  Default export
     *
     * */


    return AreaRangePoint;
  });

  _registerModule(_modules, 'Series/AreaRange/AreaRangeSeries.js', [_modules['Series/AreaRange/AreaRangePoint.js'], _modules['Series/Area/AreaSeries.js'], _modules['Series/Column/ColumnSeries.js'], _modules['Core/Globals.js'], _modules['Core/Series/Series.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (AreaRangePoint, AreaSeries, ColumnSeries, H, Series, SeriesRegistry, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var areaProto = AreaSeries.prototype;
    var columnProto = ColumnSeries.prototype;
    var noop = H.noop;
    var seriesProto = Series.prototype;
    var defined = U.defined,
        extend = U.extend,
        isArray = U.isArray,
        pick = U.pick,
        merge = U.merge;
    /* *
     *
     *  Class
     *
     * */

    /**
     * The AreaRange series type.
     *
     * @private
     * @class
     * @name Highcharts.seriesTypes.arearange
     *
     * @augments Highcharts.Series
     */

    var AreaRangeSeries =
    /** @class */
    function (_super) {
      __extends(AreaRangeSeries, _super);

      function AreaRangeSeries() {
        /**
         *
         *  Static properties
         *
         */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* *
         *
         *  Properties
         *
         * */


        _this.data = void 0;
        _this.options = void 0;
        _this.points = void 0;
        _this.lowerStateMarkerGraphic = void 0;
        _this.xAxis = void 0;
        return _this;
        /* eslint-enable valid-jsdoc */
      }
      /* *
       *
       *  Functions
       *
       * */

      /* eslint-disable valid-jsdoc */


      AreaRangeSeries.prototype.toYData = function (point) {
        return [point.low, point.high];
      };
      /**
       * Translate a point's plotHigh from the internal angle and radius measures
       * to true plotHigh coordinates. This is an addition of the toXY method
       * found in Polar.js, because it runs too early for arearanges to be
       * considered (#3419).
       * @private
       */


      AreaRangeSeries.prototype.highToXY = function (point) {
        // Find the polar plotX and plotY
        var chart = this.chart,
            xy = this.xAxis.postTranslate(point.rectPlotX || 0, this.yAxis.len - point.plotHigh);
        point.plotHighX = xy.x - chart.plotLeft;
        point.plotHigh = xy.y - chart.plotTop;
        point.plotLowX = point.plotX;
      };
      /**
       * Translate data points from raw values x and y to plotX and plotY.
       * @private
       */


      AreaRangeSeries.prototype.translate = function () {
        var series = this,
            yAxis = series.yAxis;
        areaProto.translate.apply(series); // Set plotLow and plotHigh

        series.points.forEach(function (point) {
          var high = point.high,
              plotY = point.plotY;

          if (point.isNull) {
            point.plotY = null;
          } else {
            point.plotLow = plotY;
            point.plotHigh = yAxis.translate(series.dataModify ? series.dataModify.modifyValue(high) : high, 0, 1, 0, 1);

            if (series.dataModify) {
              point.yBottom = point.plotHigh;
            }
          }
        }); // Postprocess plotHigh

        if (this.chart.polar) {
          this.points.forEach(function (point) {
            series.highToXY(point);
            point.tooltipPos = [(point.plotHighX + point.plotLowX) / 2, (point.plotHigh + point.plotLow) / 2];
          });
        }
      };
      /**
       * Extend the line series' getSegmentPath method by applying the segment
       * path to both lower and higher values of the range.
       * @private
       */


      AreaRangeSeries.prototype.getGraphPath = function (points) {
        var highPoints = [],
            highAreaPoints = [],
            i,
            getGraphPath = areaProto.getGraphPath,
            point,
            pointShim,
            linePath,
            lowerPath,
            options = this.options,
            polar = this.chart.polar,
            connectEnds = polar && options.connectEnds !== false,
            connectNulls = options.connectNulls,
            step = options.step,
            higherPath,
            higherAreaPath;
        points = points || this.points; // Create the top line and the top part of the area fill. The area fill
        // compensates for null points by drawing down to the lower graph,
        // moving across the null gap and starting again at the lower graph.

        i = points.length;

        while (i--) {
          point = points[i]; // Support for polar

          var highAreaPoint = polar ? {
            plotX: point.rectPlotX,
            plotY: point.yBottom,
            doCurve: false // #5186, gaps in areasplinerange fill

          } : {
            plotX: point.plotX,
            plotY: point.plotY,
            doCurve: false // #5186, gaps in areasplinerange fill

          };

          if (!point.isNull && !connectEnds && !connectNulls && (!points[i + 1] || points[i + 1].isNull)) {
            highAreaPoints.push(highAreaPoint);
          }

          pointShim = {
            polarPlotY: point.polarPlotY,
            rectPlotX: point.rectPlotX,
            yBottom: point.yBottom,
            // plotHighX is for polar charts
            plotX: pick(point.plotHighX, point.plotX),
            plotY: point.plotHigh,
            isNull: point.isNull
          };
          highAreaPoints.push(pointShim);
          highPoints.push(pointShim);

          if (!point.isNull && !connectEnds && !connectNulls && (!points[i - 1] || points[i - 1].isNull)) {
            highAreaPoints.push(highAreaPoint);
          }
        } // Get the paths


        lowerPath = getGraphPath.call(this, points);

        if (step) {
          if (step === true) {
            step = 'left';
          }

          options.step = {
            left: 'right',
            center: 'center',
            right: 'left'
          }[step]; // swap for reading in getGraphPath
        }

        higherPath = getGraphPath.call(this, highPoints);
        higherAreaPath = getGraphPath.call(this, highAreaPoints);
        options.step = step; // Create a line on both top and bottom of the range

        linePath = [].concat(lowerPath, higherPath); // For the area path, we need to change the 'move' statement into
        // 'lineTo'

        if (!this.chart.polar && higherAreaPath[0] && higherAreaPath[0][0] === 'M') {
          // This probably doesn't work for spline
          higherAreaPath[0] = ['L', higherAreaPath[0][1], higherAreaPath[0][2]];
        }

        this.graphPath = linePath;
        this.areaPath = lowerPath.concat(higherAreaPath); // Prepare for sideways animation

        linePath.isArea = true;
        linePath.xMap = lowerPath.xMap;
        this.areaPath.xMap = lowerPath.xMap;
        return linePath;
      };
      /**
       * Extend the basic drawDataLabels method by running it for both lower and
       * higher values.
       * @private
       */


      AreaRangeSeries.prototype.drawDataLabels = function () {
        var data = this.points,
            length = data.length,
            i,
            originalDataLabels = [],
            dataLabelOptions = this.options.dataLabels,
            point,
            up,
            inverted = this.chart.inverted,
            upperDataLabelOptions,
            lowerDataLabelOptions;

        if (dataLabelOptions) {
          // Split into upper and lower options. If data labels is an array,
          // the first element is the upper label, the second is the lower.
          //
          // TODO: We want to change this and allow multiple labels for both
          // upper and lower values in the future - introducing some options
          // for which point value to use as Y for the dataLabel, so that this
          // could be handled in Series.drawDataLabels. This would also
          // improve performance since we now have to loop over all the points
          // multiple times to work around the data label logic.
          if (isArray(dataLabelOptions)) {
            upperDataLabelOptions = dataLabelOptions[0] || {
              enabled: false
            };
            lowerDataLabelOptions = dataLabelOptions[1] || {
              enabled: false
            };
          } else {
            // Make copies
            upperDataLabelOptions = extend({}, dataLabelOptions);
            upperDataLabelOptions.x = dataLabelOptions.xHigh;
            upperDataLabelOptions.y = dataLabelOptions.yHigh;
            lowerDataLabelOptions = extend({}, dataLabelOptions);
            lowerDataLabelOptions.x = dataLabelOptions.xLow;
            lowerDataLabelOptions.y = dataLabelOptions.yLow;
          } // Draw upper labels


          if (upperDataLabelOptions.enabled || this._hasPointLabels) {
            // Set preliminary values for plotY and dataLabel
            // and draw the upper labels
            i = length;

            while (i--) {
              point = data[i];

              if (point) {
                up = upperDataLabelOptions.inside ? point.plotHigh < point.plotLow : point.plotHigh > point.plotLow;
                point.y = point.high;
                point._plotY = point.plotY;
                point.plotY = point.plotHigh; // Store original data labels and set preliminary label
                // objects to be picked up in the uber method

                originalDataLabels[i] = point.dataLabel;
                point.dataLabel = point.dataLabelUpper; // Set the default offset

                point.below = up;

                if (inverted) {
                  if (!upperDataLabelOptions.align) {
                    upperDataLabelOptions.align = up ? 'right' : 'left';
                  }
                } else {
                  if (!upperDataLabelOptions.verticalAlign) {
                    upperDataLabelOptions.verticalAlign = up ? 'top' : 'bottom';
                  }
                }
              }
            }

            this.options.dataLabels = upperDataLabelOptions;

            if (seriesProto.drawDataLabels) {
              // #1209:
              seriesProto.drawDataLabels.apply(this, arguments);
            } // Reset state after the upper labels were created. Move
            // it to point.dataLabelUpper and reassign the originals.
            // We do this here to support not drawing a lower label.


            i = length;

            while (i--) {
              point = data[i];

              if (point) {
                point.dataLabelUpper = point.dataLabel;
                point.dataLabel = originalDataLabels[i];
                delete point.dataLabels;
                point.y = point.low;
                point.plotY = point._plotY;
              }
            }
          } // Draw lower labels


          if (lowerDataLabelOptions.enabled || this._hasPointLabels) {
            i = length;

            while (i--) {
              point = data[i];

              if (point) {
                up = lowerDataLabelOptions.inside ? point.plotHigh < point.plotLow : point.plotHigh > point.plotLow; // Set the default offset

                point.below = !up;

                if (inverted) {
                  if (!lowerDataLabelOptions.align) {
                    lowerDataLabelOptions.align = up ? 'left' : 'right';
                  }
                } else {
                  if (!lowerDataLabelOptions.verticalAlign) {
                    lowerDataLabelOptions.verticalAlign = up ? 'bottom' : 'top';
                  }
                }
              }
            }

            this.options.dataLabels = lowerDataLabelOptions;

            if (seriesProto.drawDataLabels) {
              seriesProto.drawDataLabels.apply(this, arguments);
            }
          } // Merge upper and lower into point.dataLabels for later destroying


          if (upperDataLabelOptions.enabled) {
            i = length;

            while (i--) {
              point = data[i];

              if (point) {
                point.dataLabels = [point.dataLabelUpper, point.dataLabel].filter(function (label) {
                  return !!label;
                });
              }
            }
          } // Reset options


          this.options.dataLabels = dataLabelOptions;
        }
      };

      AreaRangeSeries.prototype.alignDataLabel = function () {
        columnProto.alignDataLabel.apply(this, arguments);
      };

      AreaRangeSeries.prototype.drawPoints = function () {
        var series = this,
            pointLength = series.points.length,
            point,
            i; // Draw bottom points

        seriesProto.drawPoints.apply(series, arguments); // Prepare drawing top points

        i = 0;

        while (i < pointLength) {
          point = series.points[i]; // Save original props to be overridden by temporary props for top
          // points

          point.origProps = {
            plotY: point.plotY,
            plotX: point.plotX,
            isInside: point.isInside,
            negative: point.negative,
            zone: point.zone,
            y: point.y
          };
          point.lowerGraphic = point.graphic;
          point.graphic = point.upperGraphic;
          point.plotY = point.plotHigh;

          if (defined(point.plotHighX)) {
            point.plotX = point.plotHighX;
          }

          point.y = pick(point.high, point.origProps.y); // #15523

          point.negative = point.y < (series.options.threshold || 0);

          if (series.zones.length) {
            point.zone = point.getZone();
          }

          if (!series.chart.polar) {
            point.isInside = point.isTopInside = typeof point.plotY !== 'undefined' && point.plotY >= 0 && point.plotY <= series.yAxis.len && // #3519
            point.plotX >= 0 && point.plotX <= series.xAxis.len;
          }

          i++;
        } // Draw top points


        seriesProto.drawPoints.apply(series, arguments); // Reset top points preliminary modifications

        i = 0;

        while (i < pointLength) {
          point = series.points[i];
          point.upperGraphic = point.graphic;
          point.graphic = point.lowerGraphic;

          if (point.origProps) {
            extend(point, point.origProps);
            delete point.origProps;
          }

          i++;
        }
      };
      /**
       * The area range series is a carteseian series with higher and lower
       * values for each point along an X axis, where the area between the
       * values is shaded.
       *
       * @sample {highcharts} highcharts/demo/arearange/
       *         Area range chart
       * @sample {highstock} stock/demo/arearange/
       *         Area range chart
       *
       * @extends      plotOptions.area
       * @product      highcharts highstock
       * @excluding    stack, stacking
       * @requires     highcharts-more
       * @optionparent plotOptions.arearange
       */


      AreaRangeSeries.defaultOptions = merge(AreaSeries.defaultOptions, {
        /**
         * @see [fillColor](#plotOptions.arearange.fillColor)
         * @see [fillOpacity](#plotOptions.arearange.fillOpacity)
         *
         * @apioption plotOptions.arearange.color
         */

        /**
         * @default   low
         * @apioption plotOptions.arearange.colorKey
         */

        /**
         * @see [color](#plotOptions.arearange.color)
         * @see [fillOpacity](#plotOptions.arearange.fillOpacity)
         *
         * @apioption plotOptions.arearange.fillColor
         */

        /**
         * @see [color](#plotOptions.arearange.color)
         * @see [fillColor](#plotOptions.arearange.fillColor)
         *
         * @default   {highcharts} 0.75
         * @default   {highstock} 0.75
         * @apioption plotOptions.arearange.fillOpacity
         */

        /**
         * Whether to apply a drop shadow to the graph line. Since 2.3 the
         * shadow can be an object configuration containing `color`, `offsetX`,
         * `offsetY`, `opacity` and `width`.
         *
         * @type      {boolean|Highcharts.ShadowOptionsObject}
         * @product   highcharts
         * @apioption plotOptions.arearange.shadow
         */

        /**
         * Pixel width of the arearange graph line.
         *
         * @since 2.3.0
         *
         * @private
         */
        lineWidth: 1,
        threshold: null,
        tooltip: {
          pointFormat: '<span style="color:{series.color}">\u25CF</span> ' + '{series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
        },

        /**
         * Whether the whole area or just the line should respond to mouseover
         * tooltips and other mouse or touch events.
         *
         * @since 2.3.0
         *
         * @private
         */
        trackByArea: true,

        /**
         * Extended data labels for range series types. Range series data
         * labels use no `x` and `y` options. Instead, they have `xLow`,
         * `xHigh`, `yLow` and `yHigh` options to allow the higher and lower
         * data label sets individually.
         *
         * @declare Highcharts.SeriesAreaRangeDataLabelsOptionsObject
         * @exclude x, y
         * @since   2.3.0
         * @product highcharts highstock
         *
         * @private
         */
        dataLabels: {
          align: void 0,
          verticalAlign: void 0,

          /**
           * X offset of the lower data labels relative to the point value.
           *
           * @sample highcharts/plotoptions/arearange-datalabels/
           *         Data labels on range series
           * @sample highcharts/plotoptions/arearange-datalabels/
           *         Data labels on range series
           */
          xLow: 0,

          /**
           * X offset of the higher data labels relative to the point value.
           *
           * @sample highcharts/plotoptions/arearange-datalabels/
           *         Data labels on range series
           */
          xHigh: 0,

          /**
           * Y offset of the lower data labels relative to the point value.
           *
           * @sample highcharts/plotoptions/arearange-datalabels/
           *         Data labels on range series
           */
          yLow: 0,

          /**
           * Y offset of the higher data labels relative to the point value.
           *
           * @sample highcharts/plotoptions/arearange-datalabels/
           *         Data labels on range series
           */
          yHigh: 0
        }
      });
      return AreaRangeSeries;
    }(AreaSeries);

    extend(AreaRangeSeries.prototype, {
      pointArrayMap: ['low', 'high'],
      pointValKey: 'low',
      deferTranslatePolar: true,
      pointClass: AreaRangePoint,
      setStackedPoints: noop
    });
    SeriesRegistry.registerSeriesType('arearange', AreaRangeSeries);
    /* *
     *
     *  Default export
     *
     * */

    /**
     * A `arearange` series. If the [type](#series.arearange.type) option is not
     * specified, it is inherited from [chart.type](#chart.type).
     *
     *
     * @extends   series,plotOptions.arearange
     * @excluding dataParser, dataURL, stack, stacking
     * @product   highcharts highstock
     * @requires  highcharts-more
     * @apioption series.arearange
     */

    /**
     * @see [fillColor](#series.arearange.fillColor)
     * @see [fillOpacity](#series.arearange.fillOpacity)
     *
     * @apioption series.arearange.color
     */

    /**
     * An array of data points for the series. For the `arearange` series type,
     * points can be given in the following ways:
     *
     * 1.  An array of arrays with 3 or 2 values. In this case, the values
     *     correspond to `x,low,high`. If the first value is a string, it is
     *     applied as the name of the point, and the `x` value is inferred.
     *     The `x` value can also be omitted, in which case the inner arrays
     *     should be of length 2\. Then the `x` value is automatically calculated,
     *     either starting at 0 and incremented by 1, or from `pointStart`
     *     and `pointInterval` given in the series options.
     *     ```js
     *     data: [
     *         [0, 8, 3],
     *         [1, 1, 1],
     *         [2, 6, 8]
     *     ]
     *     ```
     *
     * 2.  An array of objects with named values. The following snippet shows only a
     *     few settings, see the complete options set below. If the total number of
     *     data points exceeds the series'
     *     [turboThreshold](#series.arearange.turboThreshold),
     *     this option is not available.
     *     ```js
     *     data: [{
     *         x: 1,
     *         low: 9,
     *         high: 0,
     *         name: "Point2",
     *         color: "#00FF00"
     *     }, {
     *         x: 1,
     *         low: 3,
     *         high: 4,
     *         name: "Point1",
     *         color: "#FF00FF"
     *     }]
     *     ```
     *
     * @sample {highcharts} highcharts/series/data-array-of-arrays/
     *         Arrays of numeric x and y
     * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
     *         Arrays of datetime x and y
     * @sample {highcharts} highcharts/series/data-array-of-name-value/
     *         Arrays of point.name and y
     * @sample {highcharts} highcharts/series/data-array-of-objects/
     *         Config objects
     *
     * @type      {Array<Array<(number|string),number>|Array<(number|string),number,number>|*>}
     * @extends   series.line.data
     * @excluding marker, y
     * @product   highcharts highstock
     * @apioption series.arearange.data
     */

    /**
     * @extends   series.arearange.dataLabels
     * @product   highcharts highstock
     * @apioption series.arearange.data.dataLabels
     */

    /**
     * @see [color](#series.arearange.color)
     * @see [fillOpacity](#series.arearange.fillOpacity)
     *
     * @apioption series.arearange.fillColor
     */

    /**
     * @see [color](#series.arearange.color)
     * @see [fillColor](#series.arearange.fillColor)
     *
     * @default   {highcharts} 0.75
     * @default   {highstock} 0.75
     * @apioption series.arearange.fillOpacity
     */

    /**
     * The high or maximum value for each data point.
     *
     * @type      {number}
     * @product   highcharts highstock
     * @apioption series.arearange.data.high
     */

    /**
     * The low or minimum value for each data point.
     *
     * @type      {number}
     * @product   highcharts highstock
     * @apioption series.arearange.data.low
     */

    ''; // adds doclets above to tranpiled file

    return AreaRangeSeries;
  });

  _registerModule(_modules, 'Series/AreaSplineRange/AreaSplineRangeSeries.js', [_modules['Series/AreaRange/AreaRangeSeries.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (AreaRangeSeries, SeriesRegistry, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var SplineSeries = SeriesRegistry.seriesTypes.spline;
    var merge = U.merge,
        extend = U.extend;
    /* *
     *
     *  Class
     *
     * */

    /**
     * The areasplinerange series type.
     *
     * @private
     * @class
     * @name Highcharts.seriesTypes.areasplinerange
     *
     * @augments Highcharts.Series
     */

    var AreaSplineRangeSeries =
    /** @class */
    function (_super) {
      __extends(AreaSplineRangeSeries, _super);

      function AreaSplineRangeSeries() {
        /* *
         *
         *  Static properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* *
         *
         *  Properties
         *
         * */


        _this.options = void 0;
        _this.data = void 0;
        _this.points = void 0;
        return _this;
      }
      /**
       * The area spline range is a cartesian series type with higher and
       * lower Y values along an X axis. The area inside the range is colored, and
       * the graph outlining the area is a smoothed spline.
       *
       * @sample {highstock|highstock} stock/demo/areasplinerange/
       *         Area spline range
       *
       * @extends   plotOptions.arearange
       * @since     2.3.0
       * @excluding step, boostThreshold, boostBlending
       * @product   highcharts highstock
       * @requires  highcharts-more
       * @apioption plotOptions.areasplinerange
       */

      /**
       * @see [fillColor](#plotOptions.areasplinerange.fillColor)
       * @see [fillOpacity](#plotOptions.areasplinerange.fillOpacity)
       *
       * @apioption plotOptions.areasplinerange.color
       */

      /**
       * @see [color](#plotOptions.areasplinerange.color)
       * @see [fillOpacity](#plotOptions.areasplinerange.fillOpacity)
       *
       * @apioption plotOptions.areasplinerange.fillColor
       */

      /**
       * @see [color](#plotOptions.areasplinerange.color)
       * @see [fillColor](#plotOptions.areasplinerange.fillColor)
       *
       * @default   {highcharts} 0.75
       * @default   {highstock} 0.75
       * @apioption plotOptions.areasplinerange.fillOpacity
       */


      AreaSplineRangeSeries.defaultOptions = merge(AreaRangeSeries.defaultOptions);
      return AreaSplineRangeSeries;
    }(AreaRangeSeries);

    extend(AreaSplineRangeSeries.prototype, {
      getPointSpline: SplineSeries.prototype.getPointSpline
    });
    SeriesRegistry.registerSeriesType('areasplinerange', AreaSplineRangeSeries);
    /* *
     *
     *  Default export
     *
     * */

    /* *
     *
     *  API options
     *
     * */

    /**
     * A `areasplinerange` series. If the [type](#series.areasplinerange.type)
     * option is not specified, it is inherited from [chart.type](#chart.type).
     *
     * @extends   series,plotOptions.areasplinerange
     * @excluding dataParser, dataURL, stack, step, boostThreshold, boostBlending
     * @product   highcharts highstock
     * @requires  highcharts-more
     * @apioption series.areasplinerange
     */

    /**
     * @see [fillColor](#series.areasplinerange.fillColor)
     * @see [fillOpacity](#series.areasplinerange.fillOpacity)
     *
     * @apioption series.areasplinerange.color
     */

    /**
     * An array of data points for the series. For the `areasplinerange`
     * series type, points can be given in the following ways:
     *
     * 1. An array of arrays with 3 or 2 values. In this case, the values correspond
     *    to `x,low,high`. If the first value is a string, it is applied as the name
     *    of the point, and the `x` value is inferred. The `x` value can also be
     *    omitted, in which case the inner arrays should be of length 2\. Then the
     *    `x` value is automatically calculated, either starting at 0 and
     *    incremented by 1, or from `pointStart` and `pointInterval` given in the
     *    series options.
     *    ```js
     *    data: [
     *        [0, 0, 5],
     *        [1, 9, 1],
     *        [2, 5, 2]
     *    ]
     *    ```
     *
     * 2. An array of objects with named values. The following snippet shows only a
     *    few settings, see the complete options set below. If the total number of
     *    data points exceeds the series'
     *    [turboThreshold](#series.areasplinerange.turboThreshold), this option is
     *    not available.
     *    ```js
     *    data: [{
     *        x: 1,
     *        low: 5,
     *        high: 0,
     *        name: "Point2",
     *        color: "#00FF00"
     *    }, {
     *        x: 1,
     *        low: 4,
     *        high: 1,
     *        name: "Point1",
     *        color: "#FF00FF"
     *    }]
     *    ```
     *
     * @sample {highcharts} highcharts/series/data-array-of-arrays/
     *         Arrays of numeric x and y
     * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
     *         Arrays of datetime x and y
     * @sample {highcharts} highcharts/series/data-array-of-name-value/
     *         Arrays of point.name and y
     * @sample {highcharts} highcharts/series/data-array-of-objects/
     *         Config objects
     *
     * @type      {Array<Array<(number|string),number>|Array<(number|string),number,number>|*>}
     * @extends   series.arearange.data
     * @product   highcharts highstock
     * @apioption series.areasplinerange.data
     */

    /**
     * @see [color](#series.areasplinerange.color)
     * @see [fillOpacity](#series.areasplinerange.fillOpacity)
     *
     * @apioption series.areasplinerange.fillColor
     */

    /**
     * @see [color](#series.areasplinerange.color)
     * @see [fillColor](#series.areasplinerange.fillColor)
     *
     * @default   {highcharts} 0.75
     * @default   {highstock} 0.75
     * @apioption series.areasplinerange.fillOpacity
     */

    ''; // adds doclets above to transpiled file

    return AreaSplineRangeSeries;
  });

  _registerModule(_modules, 'Series/BoxPlot/BoxPlotSeries.js', [_modules['Series/Column/ColumnSeries.js'], _modules['Core/Globals.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (ColumnSeries, H, SeriesRegistry, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var noop = H.noop;
    var extend = U.extend,
        merge = U.merge,
        pick = U.pick;
    /**
     * The boxplot series type.
     *
     * @private
     * @class
     * @name Highcharts.seriesTypes#boxplot
     *
     * @augments Highcharts.Series
     */

    /* *
     *
     *  Class
     *
     * */

    var BoxPlotSeries =
    /** @class */
    function (_super) {
      __extends(BoxPlotSeries, _super);

      function BoxPlotSeries() {
        /* *
         *
         * Static Properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* *
         *
         * Properties
         *
         * */


        _this.data = void 0;
        _this.options = void 0;
        _this.points = void 0;
        return _this;
      }
      /* *
       *
       * Functions
       *
       * */
      // Get presentational attributes


      BoxPlotSeries.prototype.pointAttribs = function () {
        // No attributes should be set on point.graphic which is the group
        return {};
      }; // Translate data points from raw values x and y to plotX and plotY


      BoxPlotSeries.prototype.translate = function () {
        var series = this,
            yAxis = series.yAxis,
            pointArrayMap = series.pointArrayMap;

        _super.prototype.translate.apply(series); // do the translation on each point dimension


        series.points.forEach(function (point) {
          pointArrayMap.forEach(function (key) {
            if (point[key] !== null) {
              point[key + 'Plot'] = yAxis.translate(point[key], 0, 1, 0, 1);
            }
          });
          point.plotHigh = point.highPlot; // For data label validation
        });
      }; // eslint-disable-next-line valid-jsdoc

      /**
       * Draw the data points
       * @private
       */


      BoxPlotSeries.prototype.drawPoints = function () {
        var series = this,
            points = series.points,
            options = series.options,
            chart = series.chart,
            renderer = chart.renderer,
            q1Plot,
            q3Plot,
            highPlot,
            lowPlot,
            medianPlot,
            medianPath,
            crispCorr,
            crispX = 0,
            boxPath,
            width,
            left,
            right,
            halfWidth,
            // error bar inherits this series type but doesn't do quartiles
        doQuartiles = series.doQuartiles !== false,
            pointWiskerLength,
            whiskerLength = series.options.whiskerLength;
        points.forEach(function (point) {
          var graphic = point.graphic,
              verb = graphic ? 'animate' : 'attr',
              shapeArgs = point.shapeArgs,
              boxAttr = {},
              stemAttr = {},
              whiskersAttr = {},
              medianAttr = {},
              color = point.color || series.color;

          if (typeof point.plotY !== 'undefined') {
            // crisp vector coordinates
            width = Math.round(shapeArgs.width);
            left = Math.floor(shapeArgs.x);
            right = left + width;
            halfWidth = Math.round(width / 2);
            q1Plot = Math.floor(doQuartiles ? point.q1Plot : point.lowPlot);
            q3Plot = Math.floor(doQuartiles ? point.q3Plot : point.lowPlot);
            highPlot = Math.floor(point.highPlot);
            lowPlot = Math.floor(point.lowPlot);

            if (!graphic) {
              point.graphic = graphic = renderer.g('point').add(series.group);
              point.stem = renderer.path().addClass('highcharts-boxplot-stem').add(graphic);

              if (whiskerLength) {
                point.whiskers = renderer.path().addClass('highcharts-boxplot-whisker').add(graphic);
              }

              if (doQuartiles) {
                point.box = renderer.path(boxPath).addClass('highcharts-boxplot-box').add(graphic);
              }

              point.medianShape = renderer.path(medianPath).addClass('highcharts-boxplot-median').add(graphic);
            }

            if (!chart.styledMode) {
              // Stem attributes
              stemAttr.stroke = point.stemColor || options.stemColor || color;
              stemAttr['stroke-width'] = pick(point.stemWidth, options.stemWidth, options.lineWidth);
              stemAttr.dashstyle = point.stemDashStyle || options.stemDashStyle || options.dashStyle;
              point.stem.attr(stemAttr); // Whiskers attributes

              if (whiskerLength) {
                whiskersAttr.stroke = point.whiskerColor || options.whiskerColor || color;
                whiskersAttr['stroke-width'] = pick(point.whiskerWidth, options.whiskerWidth, options.lineWidth);
                whiskersAttr.dashstyle = point.whiskerDashStyle || options.whiskerDashStyle || options.dashStyle;
                point.whiskers.attr(whiskersAttr);
              }

              if (doQuartiles) {
                boxAttr.fill = point.fillColor || options.fillColor || color;
                boxAttr.stroke = options.lineColor || color;
                boxAttr['stroke-width'] = options.lineWidth || 0;
                boxAttr.dashstyle = point.boxDashStyle || options.boxDashStyle || options.dashStyle;
                point.box.attr(boxAttr);
              } // Median attributes


              medianAttr.stroke = point.medianColor || options.medianColor || color;
              medianAttr['stroke-width'] = pick(point.medianWidth, options.medianWidth, options.lineWidth);
              medianAttr.dashstyle = point.medianDashStyle || options.medianDashStyle || options.dashStyle;
              point.medianShape.attr(medianAttr);
            }

            var d = void 0; // The stem

            crispCorr = point.stem.strokeWidth() % 2 / 2;
            crispX = left + halfWidth + crispCorr;
            d = [// stem up
            ['M', crispX, q3Plot], ['L', crispX, highPlot], // stem down
            ['M', crispX, q1Plot], ['L', crispX, lowPlot]];
            point.stem[verb]({
              d: d
            }); // The box

            if (doQuartiles) {
              crispCorr = point.box.strokeWidth() % 2 / 2;
              q1Plot = Math.floor(q1Plot) + crispCorr;
              q3Plot = Math.floor(q3Plot) + crispCorr;
              left += crispCorr;
              right += crispCorr;
              d = [['M', left, q3Plot], ['L', left, q1Plot], ['L', right, q1Plot], ['L', right, q3Plot], ['L', left, q3Plot], ['Z']];
              point.box[verb]({
                d: d
              });
            } // The whiskers


            if (whiskerLength) {
              crispCorr = point.whiskers.strokeWidth() % 2 / 2;
              highPlot = highPlot + crispCorr;
              lowPlot = lowPlot + crispCorr;
              pointWiskerLength = /%$/.test(whiskerLength) ? halfWidth * parseFloat(whiskerLength) / 100 : whiskerLength / 2;
              d = [// High whisker
              ['M', crispX - pointWiskerLength, highPlot], ['L', crispX + pointWiskerLength, highPlot], // Low whisker
              ['M', crispX - pointWiskerLength, lowPlot], ['L', crispX + pointWiskerLength, lowPlot]];
              point.whiskers[verb]({
                d: d
              });
            } // The median


            medianPlot = Math.round(point.medianPlot);
            crispCorr = point.medianShape.strokeWidth() % 2 / 2;
            medianPlot = medianPlot + crispCorr;
            d = [['M', left, medianPlot], ['L', right, medianPlot]];
            point.medianShape[verb]({
              d: d
            });
          }
        });
      }; // return a plain array for speedy calculation


      BoxPlotSeries.prototype.toYData = function (point) {
        return [point.low, point.q1, point.median, point.q3, point.high];
      };
      /**
       * A box plot is a convenient way of depicting groups of data through their
       * five-number summaries: the smallest observation (sample minimum), lower
       * quartile (Q1), median (Q2), upper quartile (Q3), and largest observation
       * (sample maximum).
       *
       * @sample highcharts/demo/box-plot/
       *         Box plot
       *
       * @extends      plotOptions.column
       * @excluding    borderColor, borderRadius, borderWidth, groupZPadding,
       *               states, boostThreshold, boostBlending
       * @product      highcharts
       * @requires     highcharts-more
       * @optionparent plotOptions.boxplot
       */


      BoxPlotSeries.defaultOptions = merge(ColumnSeries.defaultOptions, {
        threshold: null,
        tooltip: {
          pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> ' + '{series.name}</b><br/>' + 'Maximum: {point.high}<br/>' + 'Upper quartile: {point.q3}<br/>' + 'Median: {point.median}<br/>' + 'Lower quartile: {point.q1}<br/>' + 'Minimum: {point.low}<br/>'
        },

        /**
         * The length of the whiskers, the horizontal lines marking low and
         * high values. It can be a numerical pixel value, or a percentage
         * value of the box width. Set `0` to disable whiskers.
         *
         * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
         *         True by default
         *
         * @type    {number|string}
         * @since   3.0
         * @product highcharts
         */
        whiskerLength: '50%',

        /**
         * The fill color of the box.
         *
         * In styled mode, the fill color can be set with the
         * `.highcharts-boxplot-box` class.
         *
         * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
         *         Box plot styling
         *
         * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @default #ffffff
         * @since   3.0
         * @product highcharts
         */
        fillColor: "#ffffff"
        /* backgroundColor */
        ,

        /**
         * The width of the line surrounding the box. If any of
         * [stemWidth](#plotOptions.boxplot.stemWidth),
         * [medianWidth](#plotOptions.boxplot.medianWidth)
         * or [whiskerWidth](#plotOptions.boxplot.whiskerWidth) are `null`,
         * the lineWidth also applies to these lines.
         *
         * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
         *         Box plot styling
         * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
         *         Error bar styling
         *
         * @since   3.0
         * @product highcharts
         */
        lineWidth: 1,

        /**
         * The color of the median line. If `undefined`, the general series
         * color applies.
         *
         * In styled mode, the median stroke width can be set with the
         * `.highcharts-boxplot-median` class.
         *
         * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
         *         Box plot styling
         * @sample {highcharts} highcharts/css/boxplot/
         *         Box plot in styled mode
         * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
         *         Error bar styling
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject}
         * @since     3.0
         * @product   highcharts
         * @apioption plotOptions.boxplot.medianColor
         */

        /**
         * The pixel width of the median line. If `null`, the
         * [lineWidth](#plotOptions.boxplot.lineWidth) is used.
         *
         * In styled mode, the median stroke width can be set with the
         * `.highcharts-boxplot-median` class.
         *
         * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
         *         Box plot styling
         * @sample {highcharts} highcharts/css/boxplot/
         *         Box plot in styled mode
         *
         * @type    {number|null}
         * @since   3.0
         * @product highcharts
         */
        medianWidth: 2,

        /*
        // States are not working and are removed from docs.
        // Refer to: #2340
        states: {
            hover: {
                brightness: -0.3
            }
        },
         /**
         * The color of the stem, the vertical line extending from the box to
         * the whiskers. If `undefined`, the series color is used.
         *
         * In styled mode, the stem stroke can be set with the
         * `.highcharts-boxplot-stem` class.
         *
         * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
         *         Box plot styling
         * @sample {highcharts} highcharts/css/boxplot/
         *         Box plot in styled mode
         * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
         *         Error bar styling
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @since     3.0
         * @product   highcharts
         * @apioption plotOptions.boxplot.stemColor
         */

        /**
         * The dash style of the box.
         *
         * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
         *         Box plot styling
         * @sample {highcharts} highcharts/css/boxplot/
         *         Box plot in styled mode
         *
         * @type      {Highcharts.DashStyleValue}
         * @default   Solid
         * @since 8.1.0
         * @product   highcharts
         * @apioption plotOptions.boxplot.boxDashStyle
         */

        /**
         * The dash style of the median.
         *
         * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
         *         Box plot styling
         * @sample {highcharts} highcharts/css/boxplot/
         *         Box plot in styled mode
         *
         * @type      {Highcharts.DashStyleValue}
         * @default   Solid
         * @since 8.1.0
         * @product   highcharts
         * @apioption plotOptions.boxplot.medianDashStyle
         */

        /**
         * The dash style of the stem, the vertical line extending from the
         * box to the whiskers.
         *
         * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
         *         Box plot styling
         * @sample {highcharts} highcharts/css/boxplot/
         *         Box plot in styled mode
         * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
         *         Error bar styling
         *
         * @type      {Highcharts.DashStyleValue}
         * @default   Solid
         * @since     3.0
         * @product   highcharts
         * @apioption plotOptions.boxplot.stemDashStyle
         */

        /**
         * The dash style of the whiskers.
         *
         * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
         *         Box plot styling
         * @sample {highcharts} highcharts/css/boxplot/
         *         Box plot in styled mode
         *
         * @type      {Highcharts.DashStyleValue}
         * @default   Solid
         * @since 8.1.0
         * @product   highcharts
         * @apioption plotOptions.boxplot.whiskerDashStyle
         */

        /**
         * The width of the stem, the vertical line extending from the box to
         * the whiskers. If `undefined`, the width is inherited from the
         * [lineWidth](#plotOptions.boxplot.lineWidth) option.
         *
         * In styled mode, the stem stroke width can be set with the
         * `.highcharts-boxplot-stem` class.
         *
         * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
         *         Box plot styling
         * @sample {highcharts} highcharts/css/boxplot/
         *         Box plot in styled mode
         * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
         *         Error bar styling
         *
         * @type      {number}
         * @since     3.0
         * @product   highcharts
         * @apioption plotOptions.boxplot.stemWidth
         */

        /**
         * @default   high
         * @apioption plotOptions.boxplot.colorKey
         */

        /**
         * The color of the whiskers, the horizontal lines marking low and high
         * values. When `undefined`, the general series color is used.
         *
         * In styled mode, the whisker stroke can be set with the
         * `.highcharts-boxplot-whisker` class .
         *
         * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
         *         Box plot styling
         * @sample {highcharts} highcharts/css/boxplot/
         *         Box plot in styled mode
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @since     3.0
         * @product   highcharts
         * @apioption plotOptions.boxplot.whiskerColor
         */

        /**
         * The line width of the whiskers, the horizontal lines marking low and
         * high values. When `undefined`, the general
         * [lineWidth](#plotOptions.boxplot.lineWidth) applies.
         *
         * In styled mode, the whisker stroke width can be set with the
         * `.highcharts-boxplot-whisker` class.
         *
         * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
         *         Box plot styling
         * @sample {highcharts} highcharts/css/boxplot/
         *         Box plot in styled mode
         *
         * @since   3.0
         * @product highcharts
         */
        whiskerWidth: 2
      });
      return BoxPlotSeries;
    }(ColumnSeries);

    extend(BoxPlotSeries.prototype, {
      // array point configs are mapped to this
      pointArrayMap: ['low', 'q1', 'median', 'q3', 'high'],
      // defines the top of the tracker
      pointValKey: 'high',
      // Disable data labels for box plot
      drawDataLabels: noop,
      setStackedPoints: noop // #3890

    });
    /* *
     *
     * Registry
     *
     * */

    SeriesRegistry.registerSeriesType('boxplot', BoxPlotSeries);
    /* *
     *
     * Default Export
     *
     * */

    /* *
     *
     * API Options
     *
     * */

    /**
     * A `boxplot` series. If the [type](#series.boxplot.type) option is
     * not specified, it is inherited from [chart.type](#chart.type).
     *
     * @extends   series,plotOptions.boxplot
     * @excluding dataParser, dataURL, marker, stack, stacking, states,
     *            boostThreshold, boostBlending
     * @product   highcharts
     * @requires  highcharts-more
     * @apioption series.boxplot
     */

    /**
     * An array of data points for the series. For the `boxplot` series
     * type, points can be given in the following ways:
     *
     * 1. An array of arrays with 6 or 5 values. In this case, the values correspond
     *    to `x,low,q1,median,q3,high`. If the first value is a string, it is
     *    applied as the name of the point, and the `x` value is inferred. The `x`
     *    value can also be omitted, in which case the inner arrays should be of
     *    length 5. Then the `x` value is automatically calculated, either starting
     *    at 0 and incremented by 1, or from `pointStart` and `pointInterval` given
     *    in the series options.
     *    ```js
     *    data: [
     *        [0, 3, 0, 10, 3, 5],
     *        [1, 7, 8, 7, 2, 9],
     *        [2, 6, 9, 5, 1, 3]
     *    ]
     *    ```
     *
     * 2. An array of objects with named values. The following snippet shows only a
     *    few settings, see the complete options set below. If the total number of
     *    data points exceeds the series'
     *    [turboThreshold](#series.boxplot.turboThreshold), this option is not
     *    available.
     *    ```js
     *    data: [{
     *        x: 1,
     *        low: 4,
     *        q1: 9,
     *        median: 9,
     *        q3: 1,
     *        high: 10,
     *        name: "Point2",
     *        color: "#00FF00"
     *    }, {
     *        x: 1,
     *        low: 5,
     *        q1: 7,
     *        median: 3,
     *        q3: 6,
     *        high: 2,
     *        name: "Point1",
     *        color: "#FF00FF"
     *    }]
     *    ```
     *
     * @sample {highcharts} highcharts/series/data-array-of-arrays/
     *         Arrays of numeric x and y
     * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
     *         Arrays of datetime x and y
     * @sample {highcharts} highcharts/series/data-array-of-name-value/
     *         Arrays of point.name and y
     * @sample {highcharts} highcharts/series/data-array-of-objects/
     *         Config objects
     *
     * @type      {Array<Array<(number|string),number,number,number,number>|Array<(number|string),number,number,number,number,number>|*>}
     * @extends   series.line.data
     * @excluding marker
     * @product   highcharts
     * @apioption series.boxplot.data
     */

    /**
     * The `high` value for each data point, signifying the highest value
     * in the sample set. The top whisker is drawn here.
     *
     * @type      {number}
     * @product   highcharts
     * @apioption series.boxplot.data.high
     */

    /**
     * The `low` value for each data point, signifying the lowest value
     * in the sample set. The bottom whisker is drawn here.
     *
     * @type      {number}
     * @product   highcharts
     * @apioption series.boxplot.data.low
     */

    /**
     * The median for each data point. This is drawn as a line through the
     * middle area of the box.
     *
     * @type      {number}
     * @product   highcharts
     * @apioption series.boxplot.data.median
     */

    /**
     * The lower quartile for each data point. This is the bottom of the
     * box.
     *
     * @type      {number}
     * @product   highcharts
     * @apioption series.boxplot.data.q1
     */

    /**
     * The higher quartile for each data point. This is the top of the box.
     *
     * @type      {number}
     * @product   highcharts
     * @apioption series.boxplot.data.q3
     */

    /**
     * The dash style of the box.
     *
     * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
     *         Box plot styling
     * @sample {highcharts} highcharts/css/boxplot/
     *         Box plot in styled mode
     *
     * @type      {Highcharts.DashStyleValue}
     * @default   Solid
     * @since 8.1.0
     * @product   highcharts
     * @apioption series.boxplot.data.boxDashStyle
     */

    /**
     * The dash style of the median.
     *
     * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
     *         Box plot styling
     * @sample {highcharts} highcharts/css/boxplot/
     *         Box plot in styled mode
     *
     * @type      {Highcharts.DashStyleValue}
     * @default   Solid
     * @since 8.1.0
     * @product   highcharts
     * @apioption series.boxplot.data.medianDashStyle
     */

    /**
     * The dash style of the stem.
     *
     * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
     *         Box plot styling
     * @sample {highcharts} highcharts/css/boxplot/
     *         Box plot in styled mode
     *
     * @type      {Highcharts.DashStyleValue}
     * @default   Solid
     * @since 8.1.0
     * @product   highcharts
     * @apioption series.boxplot.data.stemDashStyle
     */

    /**
     * The dash style of the whiskers.
     *
     * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
     *         Box plot styling
     * @sample {highcharts} highcharts/css/boxplot/
     *         Box plot in styled mode
     *
     * @type      {Highcharts.DashStyleValue}
     * @default   Solid
     * @since 8.1.0
     * @product   highcharts
     * @apioption series.boxplot.data.whiskerDashStyle
     */

    ''; // adds doclets above to transpiled file

    return BoxPlotSeries;
  });

  _registerModule(_modules, 'Series/Bubble/BubbleLegendDefaults.js', [], function () {
    /* *
     *
     *  (c) 2010-2021 Highsoft AS
     *
     *  Author: Paweł Potaczek
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */

    /* *
     *
     *  Constants
     *
     * */

    /**
     * The bubble legend is an additional element in legend which
     * presents the scale of the bubble series. Individual bubble ranges
     * can be defined by user or calculated from series. In the case of
     * automatically calculated ranges, a 1px margin of error is
     * permitted.
     *
     * @since        7.0.0
     * @product      highcharts highstock highmaps
     * @requires     highcharts-more
     * @optionparent legend.bubbleLegend
     */
    var BubbleLegendDefaults = {
      /**
       * The color of the ranges borders,
      can be also defined for an
       * individual range.
       *
       * @sample highcharts/bubble-legend/similartoseries/
       *         Similar look to the bubble series
       * @sample highcharts/bubble-legend/bordercolor/
       *         Individual bubble border color
       *
       * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
       */
      borderColor: void 0,

      /**
       * The width of the ranges borders in pixels,
      can be also
       * defined for an individual range.
       */
      borderWidth: 2,

      /**
       * An additional class name to apply to the bubble legend'
       * circle graphical elements. This option does not replace
       * default class names of the graphical element.
       *
       * @sample {highcharts} highcharts/css/bubble-legend/
       *         Styling by CSS
       *
       * @type {string}
       */
      className: void 0,

      /**
       * The main color of the bubble legend. Applies to ranges,
      if
       * individual color is not defined.
       *
       * @sample highcharts/bubble-legend/similartoseries/
       *         Similar look to the bubble series
       * @sample highcharts/bubble-legend/color/
       *         Individual bubble color
       *
       * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
       */
      color: void 0,

      /**
       * An additional class name to apply to the bubble legend's
       * connector graphical elements. This option does not replace
       * default class names of the graphical element.
       *
       * @sample {highcharts} highcharts/css/bubble-legend/
       *         Styling by CSS
       *
       * @type {string}
       */
      connectorClassName: void 0,

      /**
       * The color of the connector,
      can be also defined
       * for an individual range.
       *
       * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
       */
      connectorColor: void 0,

      /**
       * The length of the connectors in pixels. If labels are
       * centered,
      the distance is reduced to 0.
       *
       * @sample highcharts/bubble-legend/connectorandlabels/
       *         Increased connector length
       */
      connectorDistance: 60,

      /**
       * The width of the connectors in pixels.
       *
       * @sample highcharts/bubble-legend/connectorandlabels/
       *         Increased connector width
       */
      connectorWidth: 1,

      /**
       * Enable or disable the bubble legend.
       */
      enabled: false,

      /**
       * Options for the bubble legend labels.
       */
      labels: {
        /**
         * An additional class name to apply to the bubble legend
         * label graphical elements. This option does not replace
         * default class names of the graphical element.
         *
         * @sample {highcharts} highcharts/css/bubble-legend/
         *         Styling by CSS
         *
         * @type {string}
         */
        className: void 0,

        /**
         * Whether to allow data labels to overlap.
         */
        allowOverlap: false,

        /**
         * A format string for the bubble legend labels. Available
         * variables are the same as for `formatter`.
         *
         * @sample highcharts/bubble-legend/format/
         *         Add a unit
         *
         * @type {string}
         */
        format: '',

        /**
         * Available `this` properties are:
         *
         * - `this.value`: The bubble value.
         *
         * - `this.radius`: The radius of the bubble range.
         *
         * - `this.center`: The center y position of the range.
         *
         * @type {Highcharts.FormatterCallbackFunction<Highcharts.BubbleLegendFormatterContextObject>}
         */
        formatter: void 0,

        /**
         * The alignment of the labels compared to the bubble
         * legend. Can be one of `left`,
        `center` or `right`.
         *
         * @sample highcharts/bubble-legend/connectorandlabels/
         *         Labels on left
         *
         * @type {Highcharts.AlignValue}
         */
        align: 'right',

        /**
         * CSS styles for the labels.
         *
         * @type {Highcharts.CSSObject}
         */
        style: {
          /** @ignore-option */
          fontSize: '10px',

          /** @ignore-option */
          color: "#000000"
          /* neutralColor100 */

        },

        /**
         * The x position offset of the label relative to the
         * connector.
         */
        x: 0,

        /**
         * The y position offset of the label relative to the
         * connector.
         */
        y: 0
      },

      /**
       * Miximum bubble legend range size. If values for ranges are
       * not specified,
      the `minSize` and the `maxSize` are calculated
       * from bubble series.
       */
      maxSize: 60,

      /**
       * Minimum bubble legend range size. If values for ranges are
       * not specified,
      the `minSize` and the `maxSize` are calculated
       * from bubble series.
       */
      minSize: 10,

      /**
       * The position of the bubble legend in the legend.
       * @sample highcharts/bubble-legend/connectorandlabels/
       *         Bubble legend as last item in legend
       */
      legendIndex: 0,

      /**
       * Options for specific range. One range consists of bubble,
       * label and connector.
       *
       * @sample highcharts/bubble-legend/ranges/
       *         Manually defined ranges
       * @sample highcharts/bubble-legend/autoranges/
       *         Auto calculated ranges
       *
       * @type {Array<*>}
       */
      ranges: {
        /**
         * Range size value,
        similar to bubble Z data.
         * @type {number}
         */
        value: void 0,

        /**
         * The color of the border for individual range.
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        borderColor: void 0,

        /**
         * The color of the bubble for individual range.
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        color: void 0,

        /**
         * The color of the connector for individual range.
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        connectorColor: void 0
      },

      /**
       * Whether the bubble legend range value should be represented
       * by the area or the width of the bubble. The default,
      area,
       * corresponds best to the human perception of the size of each
       * bubble.
       *
       * @sample highcharts/bubble-legend/ranges/
       *         Size by width
       *
       * @type {Highcharts.BubbleSizeByValue}
       */
      sizeBy: 'area',

      /**
       * When this is true,
      the absolute value of z determines the
       * size of the bubble. This means that with the default
       * zThreshold of 0,
      a bubble of value -1 will have the same size
       * as a bubble of value 1,
      while a bubble of value 0 will have a
       * smaller size according to minSize.
       */
      sizeByAbsoluteValue: false,

      /**
       * Define the visual z index of the bubble legend.
       */
      zIndex: 1,

      /**
       * Ranges with with lower value than zThreshold,
      are skipped.
       */
      zThreshold: 0
    };
    /* *
     *
     *  Default Export
     *
     * */

    return BubbleLegendDefaults;
  });

  _registerModule(_modules, 'Series/Bubble/BubbleLegendItem.js', [_modules['Core/Color/Color.js'], _modules['Core/FormatUtilities.js'], _modules['Core/Globals.js'], _modules['Core/Utilities.js']], function (Color, F, H, U) {
    /* *
     *
     *  (c) 2010-2021 Highsoft AS
     *
     *  Author: Paweł Potaczek
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var color = Color.parse;
    var noop = H.noop;
    var arrayMax = U.arrayMax,
        arrayMin = U.arrayMin,
        isNumber = U.isNumber,
        merge = U.merge,
        pick = U.pick,
        stableSort = U.stableSort;
    /**
     * @interface Highcharts.BubbleLegendFormatterContextObject
     */

    /**
    * The center y position of the range.
    * @name Highcharts.BubbleLegendFormatterContextObject#center
    * @type {number}
    */

    /**
    * The radius of the bubble range.
    * @name Highcharts.BubbleLegendFormatterContextObject#radius
    * @type {number}
    */

    /**
    * The bubble value.
    * @name Highcharts.BubbleLegendFormatterContextObject#value
    * @type {number}
    */

    ''; // detach doclets above

    /* *
     *
     *  Class
     *
     * */

    /* eslint-disable no-invalid-this, valid-jsdoc */

    /**
     * BubbleLegend class.
     *
     * @private
     * @class
     * @name Highcharts.BubbleLegend
     * @param {Highcharts.LegendBubbleLegendOptions} options
     * Options of BubbleLegendItem.
     *
     * @param {Highcharts.Legend} legend
     * Legend of item.
     */

    var BubbleLegendItem =
    /** @class */
    function () {
      function BubbleLegendItem(options, legend) {
        this.chart = void 0;
        this.fontMetrics = void 0;
        this.legend = void 0;
        this.legendGroup = void 0;
        this.legendItem = void 0;
        this.legendItemHeight = void 0;
        this.legendItemWidth = void 0;
        this.legendSymbol = void 0;
        this.maxLabel = void 0;
        this.movementX = void 0;
        this.ranges = void 0;
        this.selected = void 0;
        this.visible = void 0;
        this.symbols = void 0;
        this.options = void 0;
        this.setState = noop;
        this.init(options, legend);
      }
      /**
       * Create basic bubbleLegend properties similar to item in legend.
       *
       * @private
       * @function Highcharts.BubbleLegend#init
       * @param {Highcharts.LegendBubbleLegendOptions} options
       *        Bubble legend options
       * @param {Highcharts.Legend} legend
       *        Legend
       */


      BubbleLegendItem.prototype.init = function (options, legend) {
        this.options = options;
        this.visible = true;
        this.chart = legend.chart;
        this.legend = legend;
      };
      /**
       * Depending on the position option, add bubbleLegend to legend items.
       *
       * @private
       * @function Highcharts.BubbleLegend#addToLegend
       * @param {Array<(Highcharts.Point|Highcharts.Series)>} items
       * All legend items
       */


      BubbleLegendItem.prototype.addToLegend = function (items) {
        // Insert bubbleLegend into legend items
        items.splice(this.options.legendIndex, 0, this);
      };
      /**
       * Calculate ranges, sizes and call the next steps of bubbleLegend
       * creation.
       *
       * @private
       * @function Highcharts.BubbleLegend#drawLegendSymbol
       * @param {Highcharts.Legend} legend
       *        Legend instance
       */


      BubbleLegendItem.prototype.drawLegendSymbol = function (legend) {
        var chart = this.chart,
            options = this.options,
            itemDistance = pick(legend.options.itemDistance, 20),
            ranges = options.ranges,
            connectorDistance = options.connectorDistance;
        var connectorSpace; // Predict label dimensions

        this.fontMetrics = chart.renderer.fontMetrics(options.labels.style.fontSize); // Do not create bubbleLegend now if ranges or ranges valeus are not
        // specified or if are empty array.

        if (!ranges || !ranges.length || !isNumber(ranges[0].value)) {
          legend.options.bubbleLegend.autoRanges = true;
          return;
        } // Sort ranges to right render order


        stableSort(ranges, function (a, b) {
          return b.value - a.value;
        });
        this.ranges = ranges;
        this.setOptions();
        this.render(); // Get max label size

        var maxLabel = this.getMaxLabelSize(),
            radius = this.ranges[0].radius,
            size = radius * 2; // Space for connectors and labels.

        connectorSpace = connectorDistance - radius + maxLabel.width;
        connectorSpace = connectorSpace > 0 ? connectorSpace : 0;
        this.maxLabel = maxLabel;
        this.movementX = options.labels.align === 'left' ? connectorSpace : 0;
        this.legendItemWidth = size + connectorSpace + itemDistance;
        this.legendItemHeight = size + this.fontMetrics.h / 2;
      };
      /**
       * Set style options for each bubbleLegend range.
       *
       * @private
       * @function Highcharts.BubbleLegend#setOptions
       */


      BubbleLegendItem.prototype.setOptions = function () {
        var ranges = this.ranges,
            options = this.options,
            series = this.chart.series[options.seriesIndex],
            baseline = this.legend.baseline,
            bubbleAttribs = {
          zIndex: options.zIndex,
          'stroke-width': options.borderWidth
        },
            connectorAttribs = {
          zIndex: options.zIndex,
          'stroke-width': options.connectorWidth
        },
            labelAttribs = {
          align: this.legend.options.rtl || options.labels.align === 'left' ? 'right' : 'left',
          zIndex: options.zIndex
        },
            fillOpacity = series.options.marker.fillOpacity,
            styledMode = this.chart.styledMode; // Allow to parts of styles be used individually for range

        ranges.forEach(function (range, i) {
          if (!styledMode) {
            bubbleAttribs.stroke = pick(range.borderColor, options.borderColor, series.color);
            bubbleAttribs.fill = pick(range.color, options.color, fillOpacity !== 1 ? color(series.color).setOpacity(fillOpacity).get('rgba') : series.color);
            connectorAttribs.stroke = pick(range.connectorColor, options.connectorColor, series.color);
          } // Set options needed for rendering each range


          ranges[i].radius = this.getRangeRadius(range.value);
          ranges[i] = merge(ranges[i], {
            center: ranges[0].radius - ranges[i].radius + baseline
          });

          if (!styledMode) {
            merge(true, ranges[i], {
              bubbleAttribs: merge(bubbleAttribs),
              connectorAttribs: merge(connectorAttribs),
              labelAttribs: labelAttribs
            });
          }
        }, this);
      };
      /**
       * Calculate radius for each bubble range,
       * used code from BubbleSeries.js 'getRadius' method.
       *
       * @private
       * @function Highcharts.BubbleLegend#getRangeRadius
       * @param {number} value
       *        Range value
       * @return {number|null}
       *         Radius for one range
       */


      BubbleLegendItem.prototype.getRangeRadius = function (value) {
        var options = this.options,
            seriesIndex = this.options.seriesIndex,
            bubbleSeries = this.chart.series[seriesIndex],
            zMax = options.ranges[0].value,
            zMin = options.ranges[options.ranges.length - 1].value,
            minSize = options.minSize,
            maxSize = options.maxSize;
        return bubbleSeries.getRadius.call(this, zMin, zMax, minSize, maxSize, value);
      };
      /**
       * Render the legendSymbol group.
       *
       * @private
       * @function Highcharts.BubbleLegend#render
       */


      BubbleLegendItem.prototype.render = function () {
        var renderer = this.chart.renderer,
            zThreshold = this.options.zThreshold;

        if (!this.symbols) {
          this.symbols = {
            connectors: [],
            bubbleItems: [],
            labels: []
          };
        } // Nesting SVG groups to enable handleOverflow


        this.legendSymbol = renderer.g('bubble-legend');
        this.legendItem = renderer.g('bubble-legend-item'); // To enable default 'hideOverlappingLabels' method

        this.legendSymbol.translateX = 0;
        this.legendSymbol.translateY = 0;
        this.ranges.forEach(function (range) {
          if (range.value >= zThreshold) {
            this.renderRange(range);
          }
        }, this); // To use handleOverflow method

        this.legendSymbol.add(this.legendItem);
        this.legendItem.add(this.legendGroup);
        this.hideOverlappingLabels();
      };
      /**
       * Render one range, consisting of bubble symbol, connector and label.
       *
       * @private
       * @function Highcharts.BubbleLegend#renderRange
       * @param {Highcharts.LegendBubbleLegendRangesOptions} range
       *        Range options
       */


      BubbleLegendItem.prototype.renderRange = function (range) {
        var mainRange = this.ranges[0],
            legend = this.legend,
            options = this.options,
            labelsOptions = options.labels,
            chart = this.chart,
            bubbleSeries = chart.series[options.seriesIndex],
            renderer = chart.renderer,
            symbols = this.symbols,
            labels = symbols.labels,
            elementCenter = range.center,
            absoluteRadius = Math.abs(range.radius),
            connectorDistance = options.connectorDistance || 0,
            labelsAlign = labelsOptions.align,
            rtl = legend.options.rtl,
            borderWidth = options.borderWidth,
            connectorWidth = options.connectorWidth,
            posX = mainRange.radius || 0,
            posY = elementCenter - absoluteRadius - borderWidth / 2 + connectorWidth / 2,
            fontMetrics = this.fontMetrics,
            labelMovement = fontMetrics.f / 2 - (fontMetrics.h - fontMetrics.f) / 2,
            crispMovement = (posY % 1 ? 1 : 0.5) - (connectorWidth % 2 ? 0 : 0.5),
            styledMode = renderer.styledMode;
        var connectorLength = rtl || labelsAlign === 'left' ? -connectorDistance : connectorDistance; // Set options for centered labels

        if (labelsAlign === 'center') {
          connectorLength = 0; // do not use connector

          options.connectorDistance = 0;
          range.labelAttribs.align = 'center';
        }

        var labelY = posY + options.labels.y,
            labelX = posX + connectorLength + options.labels.x; // Render bubble symbol

        symbols.bubbleItems.push(renderer.circle(posX, elementCenter + crispMovement, absoluteRadius).attr(styledMode ? {} : range.bubbleAttribs).addClass((styledMode ? 'highcharts-color-' + bubbleSeries.colorIndex + ' ' : '') + 'highcharts-bubble-legend-symbol ' + (options.className || '')).add(this.legendSymbol)); // Render connector

        symbols.connectors.push(renderer.path(renderer.crispLine([['M', posX, posY], ['L', posX + connectorLength, posY]], options.connectorWidth)).attr(styledMode ? {} : range.connectorAttribs).addClass((styledMode ? 'highcharts-color-' + this.options.seriesIndex + ' ' : '') + 'highcharts-bubble-legend-connectors ' + (options.connectorClassName || '')).add(this.legendSymbol)); // Render label

        var label = renderer.text(this.formatLabel(range), labelX, labelY + labelMovement).attr(styledMode ? {} : range.labelAttribs).css(styledMode ? {} : labelsOptions.style).addClass('highcharts-bubble-legend-labels ' + (options.labels.className || '')).add(this.legendSymbol);
        labels.push(label); // To enable default 'hideOverlappingLabels' method

        label.placed = true;
        label.alignAttr = {
          x: labelX,
          y: labelY + labelMovement
        };
      };
      /**
       * Get the label which takes up the most space.
       *
       * @private
       * @function Highcharts.BubbleLegend#getMaxLabelSize
       */


      BubbleLegendItem.prototype.getMaxLabelSize = function () {
        var labels = this.symbols.labels;
        var maxLabel, labelSize;
        labels.forEach(function (label) {
          labelSize = label.getBBox(true);

          if (maxLabel) {
            maxLabel = labelSize.width > maxLabel.width ? labelSize : maxLabel;
          } else {
            maxLabel = labelSize;
          }
        });
        return maxLabel || {};
      };
      /**
       * Get formatted label for range.
       *
       * @private
       * @function Highcharts.BubbleLegend#formatLabel
       * @param {Highcharts.LegendBubbleLegendRangesOptions} range
       *        Range options
       * @return {string}
       *         Range label text
       */


      BubbleLegendItem.prototype.formatLabel = function (range) {
        var options = this.options,
            formatter = options.labels.formatter,
            format = options.labels.format;
        var numberFormatter = this.chart.numberFormatter;
        return format ? F.format(format, range) : formatter ? formatter.call(range) : numberFormatter(range.value, 1);
      };
      /**
       * By using default chart 'hideOverlappingLabels' method, hide or show
       * labels and connectors.
       *
       * @private
       * @function Highcharts.BubbleLegend#hideOverlappingLabels
       */


      BubbleLegendItem.prototype.hideOverlappingLabels = function () {
        var chart = this.chart,
            allowOverlap = this.options.labels.allowOverlap,
            symbols = this.symbols;

        if (!allowOverlap && symbols) {
          chart.hideOverlappingLabels(symbols.labels); // Hide or show connectors

          symbols.labels.forEach(function (label, index) {
            if (!label.newOpacity) {
              symbols.connectors[index].hide();
            } else if (label.newOpacity !== label.oldOpacity) {
              symbols.connectors[index].show();
            }
          });
        }
      };
      /**
       * Calculate ranges from created series.
       *
       * @private
       * @function Highcharts.BubbleLegend#getRanges
       * @return {Array<Highcharts.LegendBubbleLegendRangesOptions>}
       *         Array of range objects
       */


      BubbleLegendItem.prototype.getRanges = function () {
        var bubbleLegend = this.legend.bubbleLegend,
            series = bubbleLegend.chart.series,
            rangesOptions = bubbleLegend.options.ranges;
        var ranges,
            zData,
            minZ = Number.MAX_VALUE,
            maxZ = -Number.MAX_VALUE;
        series.forEach(function (s) {
          // Find the min and max Z, like in bubble series
          if (s.isBubble && !s.ignoreSeries) {
            zData = s.zData.filter(isNumber);

            if (zData.length) {
              minZ = pick(s.options.zMin, Math.min(minZ, Math.max(arrayMin(zData), s.options.displayNegative === false ? s.options.zThreshold : -Number.MAX_VALUE)));
              maxZ = pick(s.options.zMax, Math.max(maxZ, arrayMax(zData)));
            }
          }
        }); // Set values for ranges

        if (minZ === maxZ) {
          // Only one range if min and max values are the same.
          ranges = [{
            value: maxZ
          }];
        } else {
          ranges = [{
            value: minZ
          }, {
            value: (minZ + maxZ) / 2
          }, {
            value: maxZ,
            autoRanges: true
          }];
        } // Prevent reverse order of ranges after redraw


        if (rangesOptions.length && rangesOptions[0].radius) {
          ranges.reverse();
        } // Merge ranges values with user options


        ranges.forEach(function (range, i) {
          if (rangesOptions && rangesOptions[i]) {
            ranges[i] = merge(rangesOptions[i], range);
          }
        });
        return ranges;
      };
      /**
       * Calculate bubble legend sizes from rendered series.
       *
       * @private
       * @function Highcharts.BubbleLegend#predictBubbleSizes
       * @return {Array<number,number>}
       *         Calculated min and max bubble sizes
       */


      BubbleLegendItem.prototype.predictBubbleSizes = function () {
        var chart = this.chart,
            fontMetrics = this.fontMetrics,
            legendOptions = chart.legend.options,
            floating = legendOptions.floating,
            horizontal = legendOptions.layout === 'horizontal',
            lastLineHeight = horizontal ? chart.legend.lastLineHeight : 0,
            plotSizeX = chart.plotSizeX,
            plotSizeY = chart.plotSizeY,
            bubbleSeries = chart.series[this.options.seriesIndex],
            pxSizes = bubbleSeries.getPxExtremes(),
            minSize = Math.ceil(pxSizes.minPxSize),
            maxPxSize = Math.ceil(pxSizes.maxPxSize),
            plotSize = Math.min(plotSizeY, plotSizeX);
        var calculatedSize,
            maxSize = bubbleSeries.options.maxSize; // Calculate prediceted max size of bubble

        if (floating || !/%$/.test(maxSize)) {
          calculatedSize = maxPxSize;
        } else {
          maxSize = parseFloat(maxSize);
          calculatedSize = (plotSize + lastLineHeight - fontMetrics.h / 2) * maxSize / 100 / (maxSize / 100 + 1); // Get maxPxSize from bubble series if calculated bubble legend
          // size will not affect to bubbles series.

          if (horizontal && plotSizeY - calculatedSize >= plotSizeX || !horizontal && plotSizeX - calculatedSize >= plotSizeY) {
            calculatedSize = maxPxSize;
          }
        }

        return [minSize, Math.ceil(calculatedSize)];
      };
      /**
       * Correct ranges with calculated sizes.
       *
       * @private
       * @function Highcharts.BubbleLegend#updateRanges
       * @param {number} min
       * @param {number} max
       */


      BubbleLegendItem.prototype.updateRanges = function (min, max) {
        var bubbleLegendOptions = this.legend.options.bubbleLegend;
        bubbleLegendOptions.minSize = min;
        bubbleLegendOptions.maxSize = max;
        bubbleLegendOptions.ranges = this.getRanges();
      };
      /**
       * Because of the possibility of creating another legend line, predicted
       * bubble legend sizes may differ by a few pixels, so it is necessary to
       * correct them.
       *
       * @private
       * @function Highcharts.BubbleLegend#correctSizes
       */


      BubbleLegendItem.prototype.correctSizes = function () {
        var legend = this.legend,
            chart = this.chart,
            bubbleSeries = chart.series[this.options.seriesIndex],
            pxSizes = bubbleSeries.getPxExtremes(),
            bubbleSeriesSize = pxSizes.maxPxSize,
            bubbleLegendSize = this.options.maxSize;

        if (Math.abs(Math.ceil(bubbleSeriesSize) - bubbleLegendSize) > 1) {
          this.updateRanges(this.options.minSize, pxSizes.maxPxSize);
          legend.render();
        }
      };

      return BubbleLegendItem;
    }();
    /* *
     *
     *  Default Export
     *
     * */


    return BubbleLegendItem;
  });

  _registerModule(_modules, 'Series/Bubble/BubbleLegendComposition.js', [_modules['Series/Bubble/BubbleLegendDefaults.js'], _modules['Series/Bubble/BubbleLegendItem.js'], _modules['Core/DefaultOptions.js'], _modules['Core/Utilities.js']], function (BubbleLegendDefaults, BubbleLegendItem, D, U) {
    /* *
     *
     *  (c) 2010-2021 Highsoft AS
     *
     *  Author: Paweł Potaczek
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var setOptions = D.setOptions;
    var addEvent = U.addEvent,
        objectEach = U.objectEach,
        wrap = U.wrap;
    /* *
     *
     *  Namespace
     *
     * */

    var BubbleLegendComposition;

    (function (BubbleLegendComposition) {
      /* *
       *
       *  Constants
       *
       * */
      var composedClasses = [];
      /* *
       *
       *  Functions
       *
       * */

      /* eslint-disable valid-jsdoc */

      /**
       * If ranges are not specified, determine ranges from rendered bubble series
       * and render legend again.
       */

      function chartDrawChartBox(proceed, options, callback) {
        var chart = this,
            legend = chart.legend,
            bubbleSeries = getVisibleBubbleSeriesIndex(chart) >= 0;
        var bubbleLegendOptions, bubbleSizes;

        if (legend && legend.options.enabled && legend.bubbleLegend && legend.options.bubbleLegend.autoRanges && bubbleSeries) {
          bubbleLegendOptions = legend.bubbleLegend.options;
          bubbleSizes = legend.bubbleLegend.predictBubbleSizes();
          legend.bubbleLegend.updateRanges(bubbleSizes[0], bubbleSizes[1]); // Disable animation on init

          if (!bubbleLegendOptions.placed) {
            legend.group.placed = false;
            legend.allItems.forEach(function (item) {
              item.legendGroup.translateY = null;
            });
          } // Create legend with bubbleLegend


          legend.render();
          chart.getMargins();
          chart.axes.forEach(function (axis) {
            if (axis.visible) {
              // #11448
              axis.render();
            }

            if (!bubbleLegendOptions.placed) {
              axis.setScale();
              axis.updateNames(); // Disable axis animation on init

              objectEach(axis.ticks, function (tick) {
                tick.isNew = true;
                tick.isNewLabel = true;
              });
            }
          });
          bubbleLegendOptions.placed = true; // After recalculate axes, calculate margins again.

          chart.getMargins(); // Call default 'drawChartBox' method.

          proceed.call(chart, options, callback); // Check bubble legend sizes and correct them if necessary.

          legend.bubbleLegend.correctSizes(); // Correct items positions with different dimensions in legend.

          retranslateItems(legend, getLinesHeights(legend));
        } else {
          proceed.call(chart, options, callback); // Allow color change on static bubble legend after click on legend

          if (legend && legend.options.enabled && legend.bubbleLegend) {
            legend.render();
            retranslateItems(legend, getLinesHeights(legend));
          }
        }
      }
      /**
       * Compose classes for use with Bubble series.
       * @private
       *
       * @param {Highcharts.Chart} ChartClass
       * Core chart class to use with Bubble series.
       *
       * @param {Highcharts.Legend} LegendClass
       * Core legend class to use with Bubble series.
       *
       * @param {Highcharts.Series} SeriesClass
       * Core series class to use with Bubble series.
       */


      function compose(ChartClass, LegendClass, SeriesClass) {
        if (composedClasses.indexOf(ChartClass) === -1) {
          composedClasses.push(ChartClass);
          setOptions({
            // Set default bubble legend options
            legend: {
              bubbleLegend: BubbleLegendDefaults
            }
          });
          wrap(ChartClass.prototype, 'drawChartBox', chartDrawChartBox);
        }

        if (composedClasses.indexOf(LegendClass) === -1) {
          composedClasses.push(LegendClass);
          addEvent(LegendClass, 'afterGetAllItems', onLegendAfterGetAllItems);
        }

        if (composedClasses.indexOf(SeriesClass) === -1) {
          composedClasses.push(SeriesClass);
          addEvent(SeriesClass, 'legendItemClick', onSeriesLegendItemClick);
        }
      }

      BubbleLegendComposition.compose = compose;
      /**
       * Check if there is at least one visible bubble series.
       *
       * @private
       * @function getVisibleBubbleSeriesIndex
       * @param {Highcharts.Chart} chart
       * Chart to check.
       * @return {number}
       * First visible bubble series index
       */

      function getVisibleBubbleSeriesIndex(chart) {
        var series = chart.series;
        var i = 0;

        while (i < series.length) {
          if (series[i] && series[i].isBubble && series[i].visible && series[i].zData.length) {
            return i;
          }

          i++;
        }

        return -1;
      }
      /**
       * Calculate height for each row in legend.
       *
       * @private
       * @function getLinesHeights
       *
       * @param {Highcharts.Legend} legend
       * Legend to calculate from.
       *
       * @return {Array<Highcharts.Dictionary<number>>}
       * Informations about line height and items amount
       */


      function getLinesHeights(legend) {
        var items = legend.allItems,
            lines = [],
            length = items.length;
        var lastLine,
            i = 0,
            j = 0;

        for (i = 0; i < length; i++) {
          if (items[i].legendItemHeight) {
            // for bubbleLegend
            items[i].itemHeight = items[i].legendItemHeight;
          }

          if ( // Line break
          items[i] === items[length - 1] || items[i + 1] && items[i]._legendItemPos[1] !== items[i + 1]._legendItemPos[1]) {
            lines.push({
              height: 0
            });
            lastLine = lines[lines.length - 1]; // Find the highest item in line

            for (j; j <= i; j++) {
              if (items[j].itemHeight > lastLine.height) {
                lastLine.height = items[j].itemHeight;
              }
            }

            lastLine.step = i;
          }
        }

        return lines;
      }
      /**
       * Start the bubble legend creation process.
       */


      function onLegendAfterGetAllItems(e) {
        var legend = this,
            bubbleLegend = legend.bubbleLegend,
            legendOptions = legend.options,
            options = legendOptions.bubbleLegend,
            bubbleSeriesIndex = getVisibleBubbleSeriesIndex(legend.chart); // Remove unnecessary element

        if (bubbleLegend && bubbleLegend.ranges && bubbleLegend.ranges.length) {
          // Allow change the way of calculating ranges in update
          if (options.ranges.length) {
            options.autoRanges = !!options.ranges[0].autoRanges;
          } // Update bubbleLegend dimensions in each redraw


          legend.destroyItem(bubbleLegend);
        } // Create bubble legend


        if (bubbleSeriesIndex >= 0 && legendOptions.enabled && options.enabled) {
          options.seriesIndex = bubbleSeriesIndex;
          legend.bubbleLegend = new BubbleLegendItem(options, legend);
          legend.bubbleLegend.addToLegend(e.allItems);
        }
      }
      /**
       * Toggle bubble legend depending on the visible status of bubble series.
       */


      function onSeriesLegendItemClick() {
        var series = this,
            chart = series.chart,
            visible = series.visible,
            legend = series.chart.legend;
        var status;

        if (legend && legend.bubbleLegend) {
          // Temporary correct 'visible' property
          series.visible = !visible; // Save future status for getRanges method

          series.ignoreSeries = visible; // Check if at lest one bubble series is visible

          status = getVisibleBubbleSeriesIndex(chart) >= 0; // Hide bubble legend if all bubble series are disabled

          if (legend.bubbleLegend.visible !== status) {
            // Show or hide bubble legend
            legend.update({
              bubbleLegend: {
                enabled: status
              }
            });
            legend.bubbleLegend.visible = status; // Restore default status
          }

          series.visible = visible;
        }
      }
      /**
       * Correct legend items translation in case of different elements heights.
       *
       * @private
       * @function Highcharts.Legend#retranslateItems
       *
       * @param {Highcharts.Legend} legend
       * Legend to translate in.
       *
       * @param {Array<Highcharts.Dictionary<number>>} lines
       * Informations about line height and items amount
       */


      function retranslateItems(legend, lines) {
        var items = legend.allItems,
            rtl = legend.options.rtl;
        var orgTranslateX,
            orgTranslateY,
            movementX,
            actualLine = 0;
        items.forEach(function (item, index) {
          orgTranslateX = item.legendGroup.translateX;
          orgTranslateY = item._legendItemPos[1];
          movementX = item.movementX;

          if (movementX || rtl && item.ranges) {
            movementX = rtl ? orgTranslateX - item.options.maxSize / 2 : orgTranslateX + movementX;
            item.legendGroup.attr({
              translateX: movementX
            });
          }

          if (index > lines[actualLine].step) {
            actualLine++;
          }

          item.legendGroup.attr({
            translateY: Math.round(orgTranslateY + lines[actualLine].height / 2)
          });
          item._legendItemPos[1] = orgTranslateY + lines[actualLine].height / 2;
        });
      }
      /* eslint-disable valid-jsdoc */

    })(BubbleLegendComposition || (BubbleLegendComposition = {}));
    /* *
     *
     *  Default Export
     *
     * */


    return BubbleLegendComposition;
  });

  _registerModule(_modules, 'Series/Bubble/BubblePoint.js', [_modules['Core/Series/Point.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (Point, SeriesRegistry, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var ScatterPoint = SeriesRegistry.seriesTypes.scatter.prototype.pointClass;
    var extend = U.extend;
    /* *
     *
     *  Class
     *
     * */

    var BubblePoint =
    /** @class */
    function (_super) {
      __extends(BubblePoint, _super);

      function BubblePoint() {
        /* *
         *
         *  Properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.options = void 0;
        _this.series = void 0;
        return _this;
        /* eslint-enable valid-jsdoc */
      }
      /* *
       *
       *  Functions
       *
       * */

      /* eslint-disable valid-jsdoc */

      /**
       * @private
       */


      BubblePoint.prototype.haloPath = function (size) {
        return Point.prototype.haloPath.call(this, // #6067
        size === 0 ? 0 : (this.marker ? this.marker.radius || 0 : 0) + size);
      };

      return BubblePoint;
    }(ScatterPoint);
    /* *
     *
     *  Class Prototype
     *
     * */


    extend(BubblePoint.prototype, {
      ttBelow: false
    });
    /* *
     *
     *  Default Export
     *
     * */

    return BubblePoint;
  });

  _registerModule(_modules, 'Series/Bubble/BubbleSeries.js', [_modules['Core/Axis/Axis.js'], _modules['Series/Bubble/BubbleLegendComposition.js'], _modules['Series/Bubble/BubblePoint.js'], _modules['Core/Color/Color.js'], _modules['Core/Globals.js'], _modules['Core/Series/Series.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (Axis, BubbleLegendComposition, BubblePoint, Color, H, Series, SeriesRegistry, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var color = Color.parse;
    var noop = H.noop;
    var _a = SeriesRegistry.seriesTypes,
        ColumnSeries = _a.column,
        ScatterSeries = _a.scatter;
    var addEvent = U.addEvent,
        arrayMax = U.arrayMax,
        arrayMin = U.arrayMin,
        clamp = U.clamp,
        extend = U.extend,
        isNumber = U.isNumber,
        merge = U.merge,
        pick = U.pick;
    /* *
     *
     *  Class
     *
     * */

    var BubbleSeries =
    /** @class */
    function (_super) {
      __extends(BubbleSeries, _super);

      function BubbleSeries() {
        /* *
         *
         *  Static Properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* *
         *
         *  Properties
         *
         * */


        _this.data = void 0;
        _this.maxPxSize = void 0;
        _this.minPxSize = void 0;
        _this.options = void 0;
        _this.points = void 0;
        _this.radii = void 0;
        _this.yData = void 0;
        _this.zData = void 0;
        return _this;
        /* eslint-enable valid-jsdoc */
      }
      /* *
       *
       *  Functions
       *
       * */

      /* eslint-disable valid-jsdoc */

      /**
       * Perform animation on the bubbles
       * @private
       */


      BubbleSeries.prototype.animate = function (init) {
        if (!init && this.points.length < this.options.animationLimit // #8099
        ) {
          this.points.forEach(function (point) {
            var graphic = point.graphic;

            if (graphic && graphic.width) {
              // URL symbols don't have width
              // Start values
              if (!this.hasRendered) {
                graphic.attr({
                  x: point.plotX,
                  y: point.plotY,
                  width: 1,
                  height: 1
                });
              } // Run animation


              graphic.animate(this.markerAttribs(point), this.options.animation);
            }
          }, this);
        }
      };
      /**
       * Get the radius for each point based on the minSize, maxSize and each
       * point's Z value. This must be done prior to Series.translate because
       * the axis needs to add padding in accordance with the point sizes.
       * @private
       */


      BubbleSeries.prototype.getRadii = function () {
        var _this = this;

        var len,
            i,
            zData = this.zData,
            yData = this.yData,
            radii = [],
            value,
            zExtremes = this.chart.bubbleZExtremes;

        var _a = this.getPxExtremes(),
            minPxSize = _a.minPxSize,
            maxPxSize = _a.maxPxSize; // Get the collective Z extremes of all bubblish series. The chart-level
        // `bubbleZExtremes` are only computed once, and reset on `updatedData`
        // in any member series.


        if (!zExtremes) {
          var zMin_1 = Number.MAX_VALUE;
          var zMax_1 = -Number.MAX_VALUE;
          var valid_1;
          this.chart.series.forEach(function (otherSeries) {
            if (otherSeries.bubblePadding && (otherSeries.visible || !_this.chart.options.chart.ignoreHiddenSeries)) {
              var zExtremes_1 = otherSeries.getZExtremes();

              if (zExtremes_1) {
                zMin_1 = Math.min(zMin_1 || zExtremes_1.zMin, zExtremes_1.zMin);
                zMax_1 = Math.max(zMax_1 || zExtremes_1.zMax, zExtremes_1.zMax);
                valid_1 = true;
              }
            }
          });

          if (valid_1) {
            zExtremes = {
              zMin: zMin_1,
              zMax: zMax_1
            };
            this.chart.bubbleZExtremes = zExtremes;
          } else {
            zExtremes = {
              zMin: 0,
              zMax: 0
            };
          }
        } // Set the shape type and arguments to be picked up in drawPoints


        for (i = 0, len = zData.length; i < len; i++) {
          value = zData[i]; // Separate method to get individual radius for bubbleLegend

          radii.push(this.getRadius(zExtremes.zMin, zExtremes.zMax, minPxSize, maxPxSize, value, yData[i]));
        }

        this.radii = radii;
      };
      /**
       * Get the individual radius for one point.
       * @private
       */


      BubbleSeries.prototype.getRadius = function (zMin, zMax, minSize, maxSize, value, yValue) {
        var options = this.options,
            sizeByArea = options.sizeBy !== 'width',
            zThreshold = options.zThreshold,
            zRange = zMax - zMin,
            pos = 0.5; // #8608 - bubble should be visible when z is undefined

        if (yValue === null || value === null) {
          return null;
        }

        if (isNumber(value)) {
          // When sizing by threshold, the absolute value of z determines
          // the size of the bubble.
          if (options.sizeByAbsoluteValue) {
            value = Math.abs(value - zThreshold);
            zMax = zRange = Math.max(zMax - zThreshold, Math.abs(zMin - zThreshold));
            zMin = 0;
          } // Issue #4419 - if value is less than zMin, push a radius that's
          // always smaller than the minimum size


          if (value < zMin) {
            return minSize / 2 - 1;
          } // Relative size, a number between 0 and 1


          if (zRange > 0) {
            pos = (value - zMin) / zRange;
          }
        }

        if (sizeByArea && pos >= 0) {
          pos = Math.sqrt(pos);
        }

        return Math.ceil(minSize + pos * (maxSize - minSize)) / 2;
      };
      /**
       * Define hasData function for non-cartesian series.
       * Returns true if the series has points at all.
       * @private
       */


      BubbleSeries.prototype.hasData = function () {
        return !!this.processedXData.length; // != 0
      };
      /**
       * @private
       */


      BubbleSeries.prototype.pointAttribs = function (point, state) {
        var markerOptions = this.options.marker,
            fillOpacity = markerOptions.fillOpacity,
            attr = Series.prototype.pointAttribs.call(this, point, state);

        if (fillOpacity !== 1) {
          attr.fill = color(attr.fill).setOpacity(fillOpacity).get('rgba');
        }

        return attr;
      };
      /**
       * Extend the base translate method to handle bubble size
       * @private
       */


      BubbleSeries.prototype.translate = function () {
        // Run the parent method
        _super.prototype.translate.call(this);

        this.getRadii();
        this.translateBubble();
      };

      BubbleSeries.prototype.translateBubble = function () {
        var _a = this,
            data = _a.data,
            radii = _a.radii;

        var minPxSize = this.getPxExtremes().minPxSize; // Set the shape type and arguments to be picked up in drawPoints

        var i = data.length;

        while (i--) {
          var point = data[i];
          var radius = radii ? radii[i] : 0; // #1737

          if (isNumber(radius) && radius >= minPxSize / 2) {
            // Shape arguments
            point.marker = extend(point.marker, {
              radius: radius,
              width: 2 * radius,
              height: 2 * radius
            }); // Alignment box for the data label

            point.dlBox = {
              x: point.plotX - radius,
              y: point.plotY - radius,
              width: 2 * radius,
              height: 2 * radius
            };
          } else {
            // below zThreshold
            // #1691
            point.shapeArgs = point.plotY = point.dlBox = void 0;
          }
        }
      };

      BubbleSeries.prototype.getPxExtremes = function () {
        var smallestSize = Math.min(this.chart.plotWidth, this.chart.plotHeight);

        var getPxSize = function (length) {
          var isPercent;

          if (typeof length === 'string') {
            isPercent = /%$/.test(length);
            length = parseInt(length, 10);
          }

          return isPercent ? smallestSize * length / 100 : length;
        };

        var minPxSize = getPxSize(pick(this.options.minSize, 8)); // Prioritize min size if conflict to make sure bubbles are
        // always visible. #5873

        var maxPxSize = Math.max(getPxSize(pick(this.options.maxSize, '20%')), minPxSize);
        return {
          minPxSize: minPxSize,
          maxPxSize: maxPxSize
        };
      };

      BubbleSeries.prototype.getZExtremes = function () {
        var options = this.options,
            zData = (this.zData || []).filter(isNumber);

        if (zData.length) {
          var zMin = pick(options.zMin, clamp(arrayMin(zData), options.displayNegative === false ? options.zThreshold || 0 : -Number.MAX_VALUE, Number.MAX_VALUE));
          var zMax = pick(options.zMax, arrayMax(zData));

          if (isNumber(zMin) && isNumber(zMax)) {
            return {
              zMin: zMin,
              zMax: zMax
            };
          }
        }
      };

      BubbleSeries.compose = BubbleLegendComposition.compose;
      /**
       * A bubble series is a three dimensional series type where each point
       * renders an X, Y and Z value. Each points is drawn as a bubble where the
       * position along the X and Y axes mark the X and Y values, and the size of
       * the bubble relates to the Z value.
       *
       * @sample {highcharts} highcharts/demo/bubble/
       *         Bubble chart
       *
       * @extends      plotOptions.scatter
       * @excluding    cluster
       * @product      highcharts highstock
       * @requires     highcharts-more
       * @optionparent plotOptions.bubble
       */

      BubbleSeries.defaultOptions = merge(ScatterSeries.defaultOptions, {
        dataLabels: {
          formatter: function () {
            var numberFormatter = this.series.chart.numberFormatter;
            var z = this.point.z;
            return isNumber(z) ? numberFormatter(z, -1) : '';
          },
          inside: true,
          verticalAlign: 'middle'
        },

        /**
         * If there are more points in the series than the `animationLimit`, the
         * animation won't run. Animation affects overall performance and
         * doesn't work well with heavy data series.
         *
         * @since 6.1.0
         */
        animationLimit: 250,

        /**
         * Whether to display negative sized bubbles. The threshold is given
         * by the [zThreshold](#plotOptions.bubble.zThreshold) option, and negative
         * bubbles can be visualized by setting
         * [negativeColor](#plotOptions.bubble.negativeColor).
         *
         * @sample {highcharts} highcharts/plotoptions/bubble-negative/
         *         Negative bubbles
         *
         * @type      {boolean}
         * @default   true
         * @since     3.0
         * @apioption plotOptions.bubble.displayNegative
         */

        /**
         * @extends   plotOptions.series.marker
         * @excluding enabled, enabledThreshold, height, radius, width
         */
        marker: {
          lineColor: null,
          lineWidth: 1,

          /**
           * The fill opacity of the bubble markers.
           */
          fillOpacity: 0.5,

          /**
           * In bubble charts, the radius is overridden and determined based
           * on the point's data value.
           *
           * @ignore-option
           */
          radius: null,
          states: {
            hover: {
              radiusPlus: 0
            }
          },

          /**
           * A predefined shape or symbol for the marker. Possible values are
           * "circle", "square", "diamond", "triangle" and "triangle-down".
           *
           * Additionally, the URL to a graphic can be given on the form
           * `url(graphic.png)`. Note that for the image to be applied to
           * exported charts, its URL needs to be accessible by the export
           * server.
           *
           * Custom callbacks for symbol path generation can also be added to
           * `Highcharts.SVGRenderer.prototype.symbols`. The callback is then
           * used by its method name, as shown in the demo.
           *
           * @sample {highcharts} highcharts/plotoptions/bubble-symbol/
           *         Bubble chart with various symbols
           * @sample {highcharts} highcharts/plotoptions/series-marker-symbol/
           *         General chart with predefined, graphic and custom markers
           *
           * @type  {Highcharts.SymbolKeyValue|string}
           * @since 5.0.11
           */
          symbol: 'circle'
        },

        /**
         * Minimum bubble size. Bubbles will automatically size between the
         * `minSize` and `maxSize` to reflect the `z` value of each bubble.
         * Can be either pixels (when no unit is given), or a percentage of
         * the smallest one of the plot width and height.
         *
         * @sample {highcharts} highcharts/plotoptions/bubble-size/
         *         Bubble size
         *
         * @type    {number|string}
         * @since   3.0
         * @product highcharts highstock
         */
        minSize: 8,

        /**
         * Maximum bubble size. Bubbles will automatically size between the
         * `minSize` and `maxSize` to reflect the `z` value of each bubble.
         * Can be either pixels (when no unit is given), or a percentage of
         * the smallest one of the plot width and height.
         *
         * @sample {highcharts} highcharts/plotoptions/bubble-size/
         *         Bubble size
         *
         * @type    {number|string}
         * @since   3.0
         * @product highcharts highstock
         */
        maxSize: '20%',

        /**
         * When a point's Z value is below the
         * [zThreshold](#plotOptions.bubble.zThreshold)
         * setting, this color is used.
         *
         * @sample {highcharts} highcharts/plotoptions/bubble-negative/
         *         Negative bubbles
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @since     3.0
         * @product   highcharts
         * @apioption plotOptions.bubble.negativeColor
         */

        /**
         * Whether the bubble's value should be represented by the area or the
         * width of the bubble. The default, `area`, corresponds best to the
         * human perception of the size of each bubble.
         *
         * @sample {highcharts} highcharts/plotoptions/bubble-sizeby/
         *         Comparison of area and size
         *
         * @type       {Highcharts.BubbleSizeByValue}
         * @default    area
         * @since      3.0.7
         * @apioption  plotOptions.bubble.sizeBy
         */

        /**
         * When this is true, the absolute value of z determines the size of
         * the bubble. This means that with the default `zThreshold` of 0, a
         * bubble of value -1 will have the same size as a bubble of value 1,
         * while a bubble of value 0 will have a smaller size according to
         * `minSize`.
         *
         * @sample    {highcharts} highcharts/plotoptions/bubble-sizebyabsolutevalue/
         *            Size by absolute value, various thresholds
         *
         * @type      {boolean}
         * @default   false
         * @since     4.1.9
         * @product   highcharts
         * @apioption plotOptions.bubble.sizeByAbsoluteValue
         */

        /**
         * When this is true, the series will not cause the Y axis to cross
         * the zero plane (or [threshold](#plotOptions.series.threshold) option)
         * unless the data actually crosses the plane.
         *
         * For example, if `softThreshold` is `false`, a series of 0, 1, 2,
         * 3 will make the Y axis show negative values according to the
         * `minPadding` option. If `softThreshold` is `true`, the Y axis starts
         * at 0.
         *
         * @since   4.1.9
         * @product highcharts
         */
        softThreshold: false,
        states: {
          hover: {
            halo: {
              size: 5
            }
          }
        },
        tooltip: {
          pointFormat: '({point.x}, {point.y}), Size: {point.z}'
        },
        turboThreshold: 0,

        /**
         * The minimum for the Z value range. Defaults to the highest Z value
         * in the data.
         *
         * @see [zMin](#plotOptions.bubble.zMin)
         *
         * @sample {highcharts} highcharts/plotoptions/bubble-zmin-zmax/
         *         Z has a possible range of 0-100
         *
         * @type      {number}
         * @since     4.0.3
         * @product   highcharts
         * @apioption plotOptions.bubble.zMax
         */

        /**
         * @default   z
         * @apioption plotOptions.bubble.colorKey
         */

        /**
         * The minimum for the Z value range. Defaults to the lowest Z value
         * in the data.
         *
         * @see [zMax](#plotOptions.bubble.zMax)
         *
         * @sample {highcharts} highcharts/plotoptions/bubble-zmin-zmax/
         *         Z has a possible range of 0-100
         *
         * @type      {number}
         * @since     4.0.3
         * @product   highcharts
         * @apioption plotOptions.bubble.zMin
         */

        /**
         * When [displayNegative](#plotOptions.bubble.displayNegative) is `false`,
         * bubbles with lower Z values are skipped. When `displayNegative`
         * is `true` and a [negativeColor](#plotOptions.bubble.negativeColor)
         * is given, points with lower Z is colored.
         *
         * @sample {highcharts} highcharts/plotoptions/bubble-negative/
         *         Negative bubbles
         *
         * @since   3.0
         * @product highcharts
         */
        zThreshold: 0,
        zoneAxis: 'z'
      });
      return BubbleSeries;
    }(ScatterSeries);

    extend(BubbleSeries.prototype, {
      alignDataLabel: ColumnSeries.prototype.alignDataLabel,
      applyZones: noop,
      bubblePadding: true,
      buildKDTree: noop,
      directTouch: true,
      isBubble: true,
      pointArrayMap: ['y', 'z'],
      pointClass: BubblePoint,
      parallelArrays: ['x', 'y', 'z'],
      trackerGroups: ['group', 'dataLabelsGroup'],
      specialGroup: 'group',
      zoneAxis: 'z'
    }); // On updated data in any series, delete the chart-level Z extremes cache

    addEvent(BubbleSeries, 'updatedData', function (e) {
      delete e.target.chart.bubbleZExtremes;
    });
    /* *
     *
     *  Axis ?
     *
     * */
    // Add logic to pad each axis with the amount of pixels necessary to avoid the
    // bubbles to overflow.

    Axis.prototype.beforePadding = function () {
      var axis = this,
          axisLength = this.len,
          chart = this.chart,
          pxMin = 0,
          pxMax = axisLength,
          isXAxis = this.isXAxis,
          dataKey = isXAxis ? 'xData' : 'yData',
          min = this.min,
          range = this.max - min,
          transA = axisLength / range,
          hasActiveSeries; // Handle padding on the second pass, or on redraw

      this.series.forEach(function (series) {
        if (series.bubblePadding && (series.visible || !chart.options.chart.ignoreHiddenSeries)) {
          // Correction for #1673
          axis.allowZoomOutside = true;
          hasActiveSeries = true;
          var data = series[dataKey];

          if (isXAxis) {
            series.getRadii(0, 0, series);
          }

          if (range > 0) {
            var i = data.length;

            while (i--) {
              if (isNumber(data[i]) && axis.dataMin <= data[i] && data[i] <= axis.max) {
                var radius = series.radii && series.radii[i] || 0;
                pxMin = Math.min((data[i] - min) * transA - radius, pxMin);
                pxMax = Math.max((data[i] - min) * transA + radius, pxMax);
              }
            }
          }
        }
      }); // Apply the padding to the min and max properties

      if (hasActiveSeries && range > 0 && !this.logarithmic) {
        pxMax -= axisLength;
        transA *= (axisLength + Math.max(0, pxMin) - // #8901
        Math.min(pxMax, axisLength)) / axisLength;
        [['min', 'userMin', pxMin], ['max', 'userMax', pxMax]].forEach(function (keys) {
          if (typeof pick(axis.options[keys[0]], axis[keys[1]]) === 'undefined') {
            axis[keys[0]] += keys[2] / transA;
          }
        });
      }
      /* eslint-enable valid-jsdoc */

    };

    SeriesRegistry.registerSeriesType('bubble', BubbleSeries);
    /* *
     *
     *  Default Export
     *
     * */

    /* *
     *
     *  API Declarations
     *
     * */

    /**
     * @typedef {"area"|"width"} Highcharts.BubbleSizeByValue
     */

    ''; // detach doclets above

    /* *
     *
     *  API Options
     *
     * */

    /**
     * A `bubble` series. If the [type](#series.bubble.type) option is
     * not specified, it is inherited from [chart.type](#chart.type).
     *
     * @extends   series,plotOptions.bubble
     * @excluding dataParser, dataURL, stack
     * @product   highcharts highstock
     * @requires  highcharts-more
     * @apioption series.bubble
     */

    /**
     * An array of data points for the series. For the `bubble` series type,
     * points can be given in the following ways:
     *
     * 1. An array of arrays with 3 or 2 values. In this case, the values correspond
     *    to `x,y,z`. If the first value is a string, it is applied as the name of
     *    the point, and the `x` value is inferred. The `x` value can also be
     *    omitted, in which case the inner arrays should be of length 2\. Then the
     *    `x` value is automatically calculated, either starting at 0 and
     *    incremented by 1, or from `pointStart` and `pointInterval` given in the
     *    series options.
     *    ```js
     *    data: [
     *        [0, 1, 2],
     *        [1, 5, 5],
     *        [2, 0, 2]
     *    ]
     *    ```
     *
     * 2. An array of objects with named values. The following snippet shows only a
     *    few settings, see the complete options set below. If the total number of
     *    data points exceeds the series'
     *    [turboThreshold](#series.bubble.turboThreshold), this option is not
     *    available.
     *    ```js
     *    data: [{
     *        x: 1,
     *        y: 1,
     *        z: 1,
     *        name: "Point2",
     *        color: "#00FF00"
     *    }, {
     *        x: 1,
     *        y: 5,
     *        z: 4,
     *        name: "Point1",
     *        color: "#FF00FF"
     *    }]
     *    ```
     *
     * @sample {highcharts} highcharts/series/data-array-of-arrays/
     *         Arrays of numeric x and y
     * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
     *         Arrays of datetime x and y
     * @sample {highcharts} highcharts/series/data-array-of-name-value/
     *         Arrays of point.name and y
     * @sample {highcharts} highcharts/series/data-array-of-objects/
     *         Config objects
     *
     * @type      {Array<Array<(number|string),number>|Array<(number|string),number,number>|*>}
     * @extends   series.line.data
     * @product   highcharts
     * @apioption series.bubble.data
     */

    /**
     * @extends     series.line.data.marker
     * @excluding   enabledThreshold, height, radius, width
     * @product     highcharts
     * @apioption   series.bubble.data.marker
     */

    /**
     * The size value for each bubble. The bubbles' diameters are computed
     * based on the `z`, and controlled by series options like `minSize`,
     * `maxSize`, `sizeBy`, `zMin` and `zMax`.
     *
     * @type      {number|null}
     * @product   highcharts
     * @apioption series.bubble.data.z
     */

    /**
     * @excluding enabled, enabledThreshold, height, radius, width
     * @apioption series.bubble.marker
     */

    ''; // adds doclets above to transpiled file

    return BubbleSeries;
  });

  _registerModule(_modules, 'Series/ColumnRange/ColumnRangePoint.js', [_modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (SeriesRegistry, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var _a = SeriesRegistry.seriesTypes,
        ColumnPoint = _a.column.prototype.pointClass,
        AreaRangePoint = _a.arearange.prototype.pointClass;
    var extend = U.extend,
        isNumber = U.isNumber;
    /* *
     *
     *  Class
     *
     * */

    var ColumnRangePoint =
    /** @class */
    function (_super) {
      __extends(ColumnRangePoint, _super);

      function ColumnRangePoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.series = void 0;
        _this.options = void 0;
        _this.barX = void 0;
        _this.pointWidth = void 0;
        _this.shapeType = void 0;
        return _this;
      }

      ColumnRangePoint.prototype.isValid = function () {
        return isNumber(this.low);
      };

      return ColumnRangePoint;
    }(AreaRangePoint);
    /* *
     *
     *  Prototype properties
     *
     * */


    extend(ColumnRangePoint.prototype, {
      setState: ColumnPoint.prototype.setState
    });
    /* *
     *
     *  Default export
     *
     * */

    return ColumnRangePoint;
  });

  _registerModule(_modules, 'Series/ColumnRange/ColumnRangeSeries.js', [_modules['Series/ColumnRange/ColumnRangePoint.js'], _modules['Core/Globals.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (ColumnRangePoint, H, SeriesRegistry, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var noop = H.noop;
    var _a = SeriesRegistry.seriesTypes,
        AreaRangeSeries = _a.arearange,
        ColumnSeries = _a.column;
    var columnProto = ColumnSeries.prototype;
    var arearangeProto = AreaRangeSeries.prototype;
    var clamp = U.clamp,
        merge = U.merge,
        pick = U.pick,
        extend = U.extend;
    /**
     * The column range is a cartesian series type with higher and lower
     * Y values along an X axis. To display horizontal bars, set
     * [chart.inverted](#chart.inverted) to `true`.
     *
     * @sample {highcharts|highstock} highcharts/demo/columnrange/
     *         Inverted column range
     *
     * @extends      plotOptions.column
     * @since        2.3.0
     * @excluding    negativeColor, stacking, softThreshold, threshold
     * @product      highcharts highstock
     * @requires     highcharts-more
     * @optionparent plotOptions.columnrange
     */

    var columnRangeOptions = {
      /**
       * Extended data labels for range series types. Range series data labels
       * have no `x` and `y` options. Instead,
      they have `xLow`,
      `xHigh`,
       * `yLow` and `yHigh` options to allow the higher and lower data label
       * sets individually.
       *
       * @declare   Highcharts.SeriesAreaRangeDataLabelsOptionsObject
       * @extends   plotOptions.arearange.dataLabels
       * @since     2.3.0
       * @product   highcharts highstock
       * @apioption plotOptions.columnrange.dataLabels
       */
      pointRange: null,

      /** @ignore-option */
      marker: null,
      states: {
        hover: {
          /** @ignore-option */
          halo: false
        }
      }
    };
    /* *
     *
     *  Class
     *
     * */

    /**
     * The ColumnRangeSeries class
     *
     * @private
     * @class
     * @name Highcharts.seriesTypes.columnrange
     *
     * @augments Highcharts.Series
     */

    var ColumnRangeSeries =
    /** @class */
    function (_super) {
      __extends(ColumnRangeSeries, _super);

      function ColumnRangeSeries() {
        /* *
         *
         *  Static properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* *
         *
         *  Properties
         *
         * */


        _this.data = void 0;
        _this.points = void 0;
        _this.options = void 0;
        return _this;
      }
      /* *
       *
       *  Functions
       *
       * */


      ColumnRangeSeries.prototype.setOptions = function () {
        // #14359 Prevent side-effect from stacking.
        merge(true, arguments[0], {
          stacking: void 0
        });
        return arearangeProto.setOptions.apply(this, arguments);
      }; // eslint-disable-next-line valid-jsdoc

      /**
       * Translate data points from raw values x and y to plotX and plotY
       * @private
       */


      ColumnRangeSeries.prototype.translate = function () {
        var series = this,
            yAxis = series.yAxis,
            xAxis = series.xAxis,
            startAngleRad = xAxis.startAngleRad,
            start,
            chart = series.chart,
            isRadial = series.xAxis.isRadial,
            safeDistance = Math.max(chart.chartWidth, chart.chartHeight) + 999,
            plotHigh; // eslint-disable-next-line valid-jsdoc

        /**
         * Don't draw too far outside plot area (#6835)
         * @private
         */

        function safeBounds(pixelPos) {
          return clamp(pixelPos, -safeDistance, safeDistance);
        }

        columnProto.translate.apply(series); // Set plotLow and plotHigh

        series.points.forEach(function (point) {
          var shapeArgs = point.shapeArgs || {},
              minPointLength = series.options.minPointLength,
              heightDifference,
              height,
              y;
          point.plotHigh = plotHigh = safeBounds(yAxis.translate(point.high, 0, 1, 0, 1));
          point.plotLow = safeBounds(point.plotY); // adjust shape

          y = plotHigh;
          height = pick(point.rectPlotY, point.plotY) - plotHigh; // Adjust for minPointLength

          if (Math.abs(height) < minPointLength) {
            heightDifference = minPointLength - height;
            height += heightDifference;
            y -= heightDifference / 2; // Adjust for negative ranges or reversed Y axis (#1457)
          } else if (height < 0) {
            height *= -1;
            y -= height;
          }

          if (isRadial) {
            start = point.barX + startAngleRad;
            point.shapeType = 'arc';
            point.shapeArgs = series.polarArc(y + height, y, start, start + point.pointWidth);
          } else {
            shapeArgs.height = height;
            shapeArgs.y = y;
            var _a = shapeArgs.x,
                x = _a === void 0 ? 0 : _a,
                _b = shapeArgs.width,
                width = _b === void 0 ? 0 : _b;
            point.tooltipPos = chart.inverted ? [yAxis.len + yAxis.pos - chart.plotLeft - y - height / 2, xAxis.len + xAxis.pos - chart.plotTop - x - width / 2, height] : [xAxis.left - chart.plotLeft + x + width / 2, yAxis.pos - chart.plotTop + y + height / 2, height]; // don't inherit from column tooltip position - #3372
          }
        });
      }; // Overrides from modules that may be loaded after this module


      ColumnRangeSeries.prototype.crispCol = function () {
        return columnProto.crispCol.apply(this, arguments);
      };

      ColumnRangeSeries.prototype.drawPoints = function () {
        return columnProto.drawPoints.apply(this, arguments);
      };

      ColumnRangeSeries.prototype.drawTracker = function () {
        return columnProto.drawTracker.apply(this, arguments);
      };

      ColumnRangeSeries.prototype.getColumnMetrics = function () {
        return columnProto.getColumnMetrics.apply(this, arguments);
      };

      ColumnRangeSeries.prototype.pointAttribs = function () {
        return columnProto.pointAttribs.apply(this, arguments);
      };

      ColumnRangeSeries.prototype.adjustForMissingColumns = function () {
        return columnProto.adjustForMissingColumns.apply(this, arguments);
      };

      ColumnRangeSeries.prototype.animate = function () {
        return columnProto.animate.apply(this, arguments);
      };

      ColumnRangeSeries.prototype.translate3dPoints = function () {
        return columnProto.translate3dPoints.apply(this, arguments);
      };

      ColumnRangeSeries.prototype.translate3dShapes = function () {
        return columnProto.translate3dShapes.apply(this, arguments);
      };

      ColumnRangeSeries.defaultOptions = merge(ColumnSeries.defaultOptions, AreaRangeSeries.defaultOptions, columnRangeOptions);
      return ColumnRangeSeries;
    }(AreaRangeSeries);

    extend(ColumnRangeSeries.prototype, {
      directTouch: true,
      trackerGroups: ['group', 'dataLabelsGroup'],
      drawGraph: noop,
      getSymbol: noop,
      polarArc: function () {
        return columnProto.polarArc.apply(this, arguments);
      },
      pointClass: ColumnRangePoint
    });
    SeriesRegistry.registerSeriesType('columnrange', ColumnRangeSeries);
    /* *
     *
     *  Default export
     *
     * */

    /* *
     *
     *  API options
     *
     * */

    /**
     * A `columnrange` series. If the [type](#series.columnrange.type)
     * option is not specified, it is inherited from
     * [chart.type](#chart.type).
     *
     * @extends   series,plotOptions.columnrange
     * @excluding dataParser, dataURL, stack, stacking
     * @product   highcharts highstock
     * @requires  highcharts-more
     * @apioption series.columnrange
     */

    /**
     * An array of data points for the series. For the `columnrange` series
     * type, points can be given in the following ways:
     *
     * 1. An array of arrays with 3 or 2 values. In this case, the values correspond
     *    to `x,low,high`. If the first value is a string, it is applied as the name
     *    of the point, and the `x` value is inferred. The `x` value can also be
     *    omitted, in which case the inner arrays should be of length 2\. Then the
     *    `x` value is automatically calculated, either starting at 0 and
     *    incremented by 1, or from `pointStart` and `pointInterval` given in the
     *    series options.
     *    ```js
     *    data: [
     *        [0, 4, 2],
     *        [1, 2, 1],
     *        [2, 9, 10]
     *    ]
     *    ```
     *
     * 2. An array of objects with named values. The following snippet shows only a
     *    few settings, see the complete options set below. If the total number of
     *    data points exceeds the series'
     *    [turboThreshold](#series.columnrange.turboThreshold), this option is not
     *    available.
     *    ```js
     *    data: [{
     *        x: 1,
     *        low: 0,
     *        high: 4,
     *        name: "Point2",
     *        color: "#00FF00"
     *    }, {
     *        x: 1,
     *        low: 5,
     *        high: 3,
     *        name: "Point1",
     *        color: "#FF00FF"
     *    }]
     *    ```
     *
     * @sample {highcharts} highcharts/series/data-array-of-arrays/
     *         Arrays of numeric x and y
     * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
     *         Arrays of datetime x and y
     * @sample {highcharts} highcharts/series/data-array-of-name-value/
     *         Arrays of point.name and y
     * @sample {highcharts} highcharts/series/data-array-of-objects/
     *         Config objects
     *
     * @type      {Array<Array<(number|string),number>|Array<(number|string),number,number>|*>}
     * @extends   series.arearange.data
     * @excluding marker
     * @product   highcharts highstock
     * @apioption series.columnrange.data
     */

    /**
     * @extends   series.columnrange.dataLabels
     * @product   highcharts highstock
     * @apioption series.columnrange.data.dataLabels
     */

    /**
     * @excluding halo, lineWidth, lineWidthPlus, marker
     * @product   highcharts highstock
     * @apioption series.columnrange.states.hover
     */

    /**
     * @excluding halo, lineWidth, lineWidthPlus, marker
     * @product   highcharts highstock
     * @apioption series.columnrange.states.select
     */

    ''; // adds doclets above into transpiled

    return ColumnRangeSeries;
  });

  _registerModule(_modules, 'Series/ColumnPyramid/ColumnPyramidSeries.js', [_modules['Series/Column/ColumnSeries.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (ColumnSeries, SeriesRegistry, U) {
    /* *
     *
     *  (c) 2010-2021 Sebastian Bochan
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var colProto = ColumnSeries.prototype;
    var clamp = U.clamp,
        extend = U.extend,
        merge = U.merge,
        pick = U.pick;
    /**
     * The ColumnPyramidSeries class
     *
     * @private
     * @class
     * @name Highcharts.seriesTypes.columnpyramid
     *
     * @augments Highcharts.Series
     */

    var ColumnPyramidSeries =
    /** @class */
    function (_super) {
      __extends(ColumnPyramidSeries, _super);

      function ColumnPyramidSeries() {
        /* *
         *
         * Static properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* *
         *
         * Properties
         *
         * */


        _this.data = void 0;
        _this.options = void 0;
        _this.points = void 0;
        return _this;
      }
      /* *
       *
       * Functions
       *
       * */

      /* eslint-disable-next-line valid-jsdoc */

      /**
       * Overrides the column translate method
       * @private
       */


      ColumnPyramidSeries.prototype.translate = function () {
        var series = this,
            chart = series.chart,
            options = series.options,
            dense = series.dense = series.closestPointRange * series.xAxis.transA < 2,
            borderWidth = series.borderWidth = pick(options.borderWidth, dense ? 0 : 1 // #3635
        ),
            yAxis = series.yAxis,
            threshold = options.threshold,
            translatedThreshold = series.translatedThreshold = yAxis.getThreshold(threshold),
            minPointLength = pick(options.minPointLength, 5),
            metrics = series.getColumnMetrics(),
            pointWidth = metrics.width,
            // postprocessed for border width
        seriesBarW = series.barW = Math.max(pointWidth, 1 + 2 * borderWidth),
            pointXOffset = series.pointXOffset = metrics.offset;

        if (chart.inverted) {
          translatedThreshold -= 0.5; // #3355
        } // When the pointPadding is 0,
        // we want the pyramids to be packed tightly,
        // so we allow individual pyramids to have individual sizes.
        // When pointPadding is greater,
        // we strive for equal-width columns (#2694).


        if (options.pointPadding) {
          seriesBarW = Math.ceil(seriesBarW);
        }

        colProto.translate.apply(series); // Record the new values

        series.points.forEach(function (point) {
          var yBottom = pick(point.yBottom, translatedThreshold),
              safeDistance = 999 + Math.abs(yBottom),
              plotY = clamp(point.plotY, -safeDistance, yAxis.len + safeDistance),
              // Don't draw too far outside plot area
          // (#1303, #2241, #4264)
          barX = point.plotX + pointXOffset,
              barW = seriesBarW / 2,
              barY = Math.min(plotY, yBottom),
              barH = Math.max(plotY, yBottom) - barY,
              stackTotal,
              stackHeight,
              topPointY,
              topXwidth,
              bottomXwidth,
              invBarPos,
              x1,
              x2,
              x3,
              x4,
              y1,
              y2;
          point.barX = barX;
          point.pointWidth = pointWidth; // Fix the tooltip on center of grouped pyramids
          // (#1216, #424, #3648)

          point.tooltipPos = chart.inverted ? [yAxis.len + yAxis.pos - chart.plotLeft - plotY, series.xAxis.len - barX - barW, barH] : [barX + barW, plotY + yAxis.pos - chart.plotTop, barH];
          stackTotal = threshold + (point.total || point.y); // overwrite stacktotal (always 100 / -100)

          if (options.stacking === 'percent') {
            stackTotal = threshold + (point.y < 0) ? -100 : 100;
          } // get the highest point (if stack, extract from total)


          topPointY = yAxis.toPixels(stackTotal, true); // calculate height of stack (in pixels)

          stackHeight = chart.plotHeight - topPointY - (chart.plotHeight - translatedThreshold); // topXwidth and bottomXwidth = width of lines from the center
          // calculated from tanges proportion.
          // Can not be a NaN #12514

          topXwidth = stackHeight ? barW * (barY - topPointY) / stackHeight : 0; // like topXwidth, but with height of point

          bottomXwidth = stackHeight ? barW * (barY + barH - topPointY) / stackHeight : 0;
          /*
                  /\
                 /  \
          x1,y1,------ x2,y1
              /      \
             ----------
          x4,y2        x3,y2
          */

          x1 = barX - topXwidth + barW;
          x2 = barX + topXwidth + barW;
          x3 = barX + bottomXwidth + barW;
          x4 = barX - bottomXwidth + barW;
          y1 = barY - minPointLength;
          y2 = barY + barH;

          if (point.y < 0) {
            y1 = barY;
            y2 = barY + barH + minPointLength;
          } // inverted chart


          if (chart.inverted) {
            invBarPos = yAxis.width - barY;
            stackHeight = topPointY - (yAxis.width - translatedThreshold); // proportion tanges

            topXwidth = barW * (topPointY - invBarPos) / stackHeight;
            bottomXwidth = barW * (topPointY - (invBarPos - barH)) / stackHeight;
            x1 = barX + barW + topXwidth; // top bottom

            x2 = x1 - 2 * topXwidth; // top top

            x3 = barX - bottomXwidth + barW; // bottom top

            x4 = barX + bottomXwidth + barW; // bottom bottom

            y1 = barY;
            y2 = barY + barH - minPointLength;

            if (point.y < 0) {
              y2 = barY + barH + minPointLength;
            }
          } // Register shape type and arguments to be used in drawPoints


          point.shapeType = 'path';
          point.shapeArgs = {
            // args for datalabels positioning
            x: x1,
            y: y1,
            width: x2 - x1,
            height: barH,
            // path of pyramid
            d: [['M', x1, y1], ['L', x2, y1], ['L', x3, y2], ['L', x4, y2], ['Z']]
          };
        });
      };
      /**
       * Column pyramid series display one pyramid per value along an X axis.
       * To display horizontal pyramids, set [chart.inverted](#chart.inverted) to
       * `true`.
       *
       * @sample {highcharts|highstock} highcharts/demo/column-pyramid/
       *         Column pyramid
       * @sample {highcharts|highstock} highcharts/plotoptions/columnpyramid-stacked/
       *         Column pyramid stacked
       * @sample {highcharts|highstock} highcharts/plotoptions/columnpyramid-inverted/
       *         Column pyramid inverted
       *
       * @extends      plotOptions.column
       * @since        7.0.0
       * @product      highcharts highstock
       * @excluding    boostThreshold, borderRadius, crisp, depth, edgeColor,
       *               edgeWidth, groupZPadding, negativeColor, softThreshold,
       *               threshold, zoneAxis, zones, boostBlending
       * @requires     highcharts-more
       * @optionparent plotOptions.columnpyramid
       */


      ColumnPyramidSeries.defaultOptions = merge(ColumnSeries.defaultOptions, {// Nothing here
      });
      return ColumnPyramidSeries;
    }(ColumnSeries);

    SeriesRegistry.registerSeriesType('columnpyramid', ColumnPyramidSeries);
    /* *
     *
     * Default export
     *
     * */

    /* *
     *
     * API Options
     *
     * */

    /**
     * A `columnpyramid` series. If the [type](#series.columnpyramid.type) option is
     * not specified, it is inherited from [chart.type](#chart.type).
     *
     * @extends   series,plotOptions.columnpyramid
     * @excluding connectEnds, connectNulls, dashStyle, dataParser, dataURL,
     *            gapSize, gapUnit, linecap, lineWidth, marker, step,
     *            boostThreshold, boostBlending
     * @product   highcharts highstock
     * @requires  highcharts-more
     * @apioption series.columnpyramid
     */

    /**
     * @excluding halo, lineWidth, lineWidthPlus, marker
     * @product   highcharts highstock
     * @apioption series.columnpyramid.states.hover
     */

    /**
     * @excluding halo, lineWidth, lineWidthPlus, marker
     * @product   highcharts highstock
     * @apioption series.columnpyramid.states.select
     */

    /**
     * An array of data points for the series. For the `columnpyramid` series type,
     * points can be given in the following ways:
     *
     * 1. An array of numerical values. In this case, the numerical values will be
     *    interpreted as `y` options. The `x` values will be automatically
     *    calculated, either starting at 0 and incremented by 1, or from
     *    `pointStart` and `pointInterval` given in the series options. If the axis
     *    has categories, these will be used. Example:
     *    ```js
     *    data: [0, 5, 3, 5]
     *    ```
     *
     * 2. An array of arrays with 2 values. In this case, the values correspond to
     *    `x,y`. If the first value is a string, it is applied as the name of the
     *    point, and the `x` value is inferred.
     *    ```js
     *    data: [
     *        [0, 6],
     *        [1, 2],
     *        [2, 6]
     *    ]
     *    ```
     *
     * 3. An array of objects with named values. The objects are point configuration
     *    objects as seen below. If the total number of data points exceeds the
     *    series' [turboThreshold](#series.columnpyramid.turboThreshold), this
     *    option is not available.
     *    ```js
     *    data: [{
     *        x: 1,
     *        y: 9,
     *        name: "Point2",
     *        color: "#00FF00"
     *    }, {
     *        x: 1,
     *        y: 6,
     *        name: "Point1",
     *        color: "#FF00FF"
     *    }]
     *    ```
     *
     * @sample {highcharts} highcharts/chart/reflow-true/
     *         Numerical values
     * @sample {highcharts} highcharts/series/data-array-of-arrays/
     *         Arrays of numeric x and y
     * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
     *         Arrays of datetime x and y
     * @sample {highcharts} highcharts/series/data-array-of-name-value/
     *         Arrays of point.name and y
     * @sample {highcharts} highcharts/series/data-array-of-objects/
     *         Config objects
     *
     * @type      {Array<number|Array<(number|string),(number|null)>|null|*>}
     * @extends   series.line.data
     * @excluding marker
     * @product   highcharts highstock
     * @apioption series.columnpyramid.data
     */

    ''; // adds doclets above to transpiled file;

    return ColumnPyramidSeries;
  });

  _registerModule(_modules, 'Series/ErrorBar/ErrorBarSeries.js', [_modules['Series/BoxPlot/BoxPlotSeries.js'], _modules['Series/Column/ColumnSeries.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (BoxPlotSeries, ColumnSeries, SeriesRegistry, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var AreaRangeSeries = SeriesRegistry.seriesTypes.arearange;
    var merge = U.merge,
        extend = U.extend;
    /**
     * Errorbar series type
     *
     * @private
     * @class
     * @name Highcharts.seriesTypes.errorbar
     *
     * @augments Highcharts.Series
     *
     */

    var ErrorBarSeries =
    /** @class */
    function (_super) {
      __extends(ErrorBarSeries, _super);

      function ErrorBarSeries() {
        /* *
         *
         *  Static properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* *
         *
         *  Properties
         *
         * */


        _this.data = void 0;
        _this.options = void 0;
        _this.points = void 0;
        return _this;
      }
      /* *
       *
       *  Functions
       *
       * */
      // Get the width and X offset, either on top of the linked series
      // column or standalone


      ErrorBarSeries.prototype.getColumnMetrics = function () {
        return this.linkedParent && this.linkedParent.columnMetrics || ColumnSeries.prototype.getColumnMetrics.call(this);
      };

      ErrorBarSeries.prototype.drawDataLabels = function () {
        var valKey = this.pointValKey;

        if (AreaRangeSeries) {
          AreaRangeSeries.prototype.drawDataLabels.call(this); // Arearange drawDataLabels does not reset point.y to high,
          // but to low after drawing (#4133)

          this.data.forEach(function (point) {
            point.y = point[valKey];
          });
        }
      }; // return a plain array for speedy calculation


      ErrorBarSeries.prototype.toYData = function (point) {
        return [point.low, point.high];
      };
      /**
       * Error bars are a graphical representation of the variability of data and
       * are used on graphs to indicate the error, or uncertainty in a reported
       * measurement.
       *
       * @sample highcharts/demo/error-bar/
       *         Error bars on a column series
       * @sample highcharts/series-errorbar/on-scatter/
       *         Error bars on a scatter series
       *
       * @extends      plotOptions.boxplot
       * @excluding    boostBlending, boostThreshold
       * @product      highcharts highstock
       * @requires     highcharts-more
       * @optionparent plotOptions.errorbar
       */


      ErrorBarSeries.defaultOptions = merge(BoxPlotSeries.defaultOptions, {
        /**
         * The main color of the bars. This can be overridden by
         * [stemColor](#plotOptions.errorbar.stemColor) and
         * [whiskerColor](#plotOptions.errorbar.whiskerColor) individually.
         *
         * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
         *         Error bar styling
         *
         * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @default #000000
         * @since   3.0
         * @product highcharts
         */
        color: "#000000"
        /* neutralColor100 */
        ,
        grouping: false,

        /**
         * The parent series of the error bar. The default value links it to
         * the previous series. Otherwise, use the id of the parent series.
         *
         * @since   3.0
         * @product highcharts
         */
        linkedTo: ':previous',
        tooltip: {
          pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
        },

        /**
         * The line width of the whiskers, the horizontal lines marking
         * low and high values. When `null`, the general
         * [lineWidth](#plotOptions.errorbar.lineWidth) applies.
         *
         * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
         *         Error bar styling
         *
         * @type    {number}
         * @since   3.0
         * @product highcharts
         */
        whiskerWidth: null
      });
      return ErrorBarSeries;
    }(BoxPlotSeries);

    extend(ErrorBarSeries.prototype, {
      // array point configs are mapped to this
      pointArrayMap: ['low', 'high'],
      pointValKey: 'high',
      doQuartiles: false
    });
    SeriesRegistry.registerSeriesType('errorbar', ErrorBarSeries);
    /* *
     *
     *  Default export
     *
     * */

    /* *
     *
     *  API options
     *
     * */

    /**
     * A `errorbar` series. If the [type](#series.errorbar.type) option
     * is not specified, it is inherited from [chart.type](#chart.type).
     *
     * @extends   series,plotOptions.errorbar
     * @excluding dataParser, dataURL, stack, stacking, boostThreshold,
     *            boostBlending
     * @product   highcharts
     * @requires  highcharts-more
     * @apioption series.errorbar
     */

    /**
     * An array of data points for the series. For the `errorbar` series
     * type, points can be given in the following ways:
     *
     * 1. An array of arrays with 3 or 2 values. In this case, the values correspond
     *    to `x,low,high`. If the first value is a string, it is applied as the name
     *    of the point, and the `x` value is inferred. The `x` value can also be
     *    omitted, in which case the inner arrays should be of length 2\. Then the
     *    `x` value is automatically calculated, either starting at 0 and
     *    incremented by 1, or from `pointStart` and `pointInterval` given in the
     *    series options.
     *    ```js
     *    data: [
     *        [0, 10, 2],
     *        [1, 1, 8],
     *        [2, 4, 5]
     *    ]
     *    ```
     *
     * 2. An array of objects with named values. The following snippet shows only a
     *    few settings, see the complete options set below. If the total number of
     *    data points exceeds the series'
     *    [turboThreshold](#series.errorbar.turboThreshold), this option is not
     *    available.
     *    ```js
     *    data: [{
     *        x: 1,
     *        low: 0,
     *        high: 0,
     *        name: "Point2",
     *        color: "#00FF00"
     *    }, {
     *        x: 1,
     *        low: 5,
     *        high: 5,
     *        name: "Point1",
     *        color: "#FF00FF"
     *    }]
     *    ```
     *
     * @sample {highcharts} highcharts/series/data-array-of-arrays/
     *         Arrays of numeric x and y
     * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
     *         Arrays of datetime x and y
     * @sample {highcharts} highcharts/series/data-array-of-name-value/
     *         Arrays of point.name and y
     * @sample {highcharts} highcharts/series/data-array-of-objects/
     *         Config objects
     *
     * @type      {Array<Array<(number|string),number>|Array<(number|string),number,number>|*>}
     * @extends   series.arearange.data
     * @excluding dataLabels, drilldown, marker, states
     * @product   highcharts
     * @apioption series.errorbar.data
     */

    ''; // adds doclets above to transpiled file

    return ErrorBarSeries;
  });

  _registerModule(_modules, 'Series/Gauge/GaugePoint.js', [_modules['Core/Series/SeriesRegistry.js']], function (SeriesRegistry) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var Point = SeriesRegistry.series.prototype.pointClass;
    /* *
     *
     *  Class
     *
     * */

    var GaugePoint =
    /** @class */
    function (_super) {
      __extends(GaugePoint, _super);

      function GaugePoint() {
        /* *
         *
         *  Properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.options = void 0;
        _this.series = void 0;
        _this.shapeArgs = void 0;
        return _this;
        /* eslint-enable valid-jsdoc */
      }
      /* *
       *
       *  Functions
       *
       * */

      /* eslint-disable valid-jsdoc */

      /**
       * Don't do any hover colors or anything
       * @private
       */


      GaugePoint.prototype.setState = function (state) {
        this.state = state;
      };

      return GaugePoint;
    }(Point);
    /* *
     *
     *  Default Export
     *
     * */


    return GaugePoint;
  });

  _registerModule(_modules, 'Series/Gauge/GaugeSeries.js', [_modules['Series/Gauge/GaugePoint.js'], _modules['Core/Globals.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (GaugePoint, H, SeriesRegistry, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var noop = H.noop;
    var Series = SeriesRegistry.series,
        ColumnSeries = SeriesRegistry.seriesTypes.column;
    var clamp = U.clamp,
        isNumber = U.isNumber,
        extend = U.extend,
        merge = U.merge,
        pick = U.pick,
        pInt = U.pInt;
    /* *
     *
     *  Class
     *
     * */

    /**
     *
     * The `gauge` series type
     *
     * @private
     * @class
     * @name Highcharts.seriesTypes.map
     *
     * @augments Highcharts.Series
     */

    var GaugeSeries =
    /** @class */
    function (_super) {
      __extends(GaugeSeries, _super);

      function GaugeSeries() {
        /* *
         *
         *  Static properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* *
         *
         *  Properties
         *
         * */


        _this.data = void 0;
        _this.points = void 0;
        _this.options = void 0;
        _this.yAxis = void 0;
        return _this;
        /* eslint-enable valid-jsdoc */
      }
      /* *
       *
       *  Functions
       *
       * */

      /* eslint-disable valid-jsdoc */

      /**
       * Calculate paths etc
       * @private
       */


      GaugeSeries.prototype.translate = function () {
        var series = this,
            yAxis = series.yAxis,
            options = series.options,
            center = yAxis.center;
        series.generatePoints();
        series.points.forEach(function (point) {
          var dialOptions = merge(options.dial, point.dial),
              radius = pInt(pick(dialOptions.radius, '80%')) * center[2] / 200,
              baseLength = pInt(pick(dialOptions.baseLength, '70%')) * radius / 100,
              rearLength = pInt(pick(dialOptions.rearLength, '10%')) * radius / 100,
              baseWidth = dialOptions.baseWidth || 3,
              topWidth = dialOptions.topWidth || 1;
          var overshoot = options.overshoot,
              rotation = yAxis.startAngleRad + yAxis.translate(point.y, null, null, null, true); // Handle the wrap and overshoot options

          if (isNumber(overshoot) || options.wrap === false) {
            overshoot = isNumber(overshoot) ? overshoot / 180 * Math.PI : 0;
            rotation = clamp(rotation, yAxis.startAngleRad - overshoot, yAxis.endAngleRad + overshoot);
          }

          rotation = rotation * 180 / Math.PI;
          point.shapeType = 'path';
          var d = dialOptions.path || [['M', -rearLength, -baseWidth / 2], ['L', baseLength, -baseWidth / 2], ['L', radius, -topWidth / 2], ['L', radius, topWidth / 2], ['L', baseLength, baseWidth / 2], ['L', -rearLength, baseWidth / 2], ['Z']];
          point.shapeArgs = {
            d: d,
            translateX: center[0],
            translateY: center[1],
            rotation: rotation
          }; // Positions for data label

          point.plotX = center[0];
          point.plotY = center[1];
        });
      };
      /**
       * Draw the points where each point is one needle
       * @private
       */


      GaugeSeries.prototype.drawPoints = function () {
        var series = this,
            chart = series.chart,
            center = series.yAxis.center,
            pivot = series.pivot,
            options = series.options,
            pivotOptions = options.pivot,
            renderer = chart.renderer;
        series.points.forEach(function (point) {
          var graphic = point.graphic,
              shapeArgs = point.shapeArgs,
              d = shapeArgs.d,
              dialOptions = merge(options.dial, point.dial); // #1233

          if (graphic) {
            graphic.animate(shapeArgs);
            shapeArgs.d = d; // animate alters it
          } else {
            point.graphic = renderer[point.shapeType](shapeArgs).attr({
              // required by VML when animation is false
              rotation: shapeArgs.rotation,
              zIndex: 1
            }).addClass('highcharts-dial').add(series.group);
          } // Presentational attributes


          if (!chart.styledMode) {
            point.graphic[graphic ? 'animate' : 'attr']({
              stroke: dialOptions.borderColor || 'none',
              'stroke-width': dialOptions.borderWidth || 0,
              fill: dialOptions.backgroundColor || "#000000"
              /* neutralColor100 */

            });
          }
        }); // Add or move the pivot

        if (pivot) {
          pivot.animate({
            translateX: center[0],
            translateY: center[1]
          });
        } else {
          series.pivot = renderer.circle(0, 0, pick(pivotOptions.radius, 5)).attr({
            zIndex: 2
          }).addClass('highcharts-pivot').translate(center[0], center[1]).add(series.group); // Presentational attributes

          if (!chart.styledMode) {
            series.pivot.attr({
              'stroke-width': pivotOptions.borderWidth || 0,
              stroke: pivotOptions.borderColor || "#cccccc"
              /* neutralColor20 */
              ,
              fill: pivotOptions.backgroundColor || "#000000"
              /* neutralColor100 */

            });
          }
        }
      };
      /**
       * Animate the arrow up from startAngle
       * @private
       */


      GaugeSeries.prototype.animate = function (init) {
        var series = this;

        if (!init) {
          series.points.forEach(function (point) {
            var graphic = point.graphic;

            if (graphic) {
              // start value
              graphic.attr({
                rotation: series.yAxis.startAngleRad * 180 / Math.PI
              }); // animate

              graphic.animate({
                rotation: point.shapeArgs.rotation
              }, series.options.animation);
            }
          });
        }
      };
      /**
       * @private
       */


      GaugeSeries.prototype.render = function () {
        this.group = this.plotGroup('group', 'series', this.visible ? 'visible' : 'hidden', this.options.zIndex, this.chart.seriesGroup);
        Series.prototype.render.call(this);
        this.group.clip(this.chart.clipRect);
      };
      /**
       * Extend the basic setData method by running processData and generatePoints
       * immediately, in order to access the points from the legend.
       * @private
       */


      GaugeSeries.prototype.setData = function (data, redraw) {
        Series.prototype.setData.call(this, data, false);
        this.processData();
        this.generatePoints();

        if (pick(redraw, true)) {
          this.chart.redraw();
        }
      };
      /**
       * Define hasData function for non-cartesian series.
       * Returns true if the series has points at all.
       * @private
       */


      GaugeSeries.prototype.hasData = function () {
        return !!this.points.length; // != 0
      };
      /**
       * Gauges are circular plots displaying one or more values with a dial
       * pointing to values along the perimeter.
       *
       * @sample highcharts/demo/gauge-speedometer/
       *         Gauge chart
       *
       * @extends      plotOptions.line
       * @excluding    animationLimit, boostThreshold, colorAxis, colorKey,
       *               connectEnds, connectNulls, cropThreshold, dashStyle,
       *               dragDrop, findNearestPointBy, getExtremesFromAll, marker,
       *               negativeColor, pointPlacement, shadow, softThreshold,
       *               stacking, states, step, threshold, turboThreshold, xAxis,
       *               zoneAxis, zones, dataSorting, boostBlending
       * @product      highcharts
       * @requires     highcharts-more
       * @optionparent plotOptions.gauge
       */


      GaugeSeries.defaultOptions = merge(Series.defaultOptions, {
        /**
         * When this option is `true`, the dial will wrap around the axes.
         * For instance, in a full-range gauge going from 0 to 360, a value
         * of 400 will point to 40\. When `wrap` is `false`, the dial stops
         * at 360.
         *
         * @see [overshoot](#plotOptions.gauge.overshoot)
         *
         * @type      {boolean}
         * @default   true
         * @since     3.0
         * @product   highcharts
         * @apioption plotOptions.gauge.wrap
         */

        /**
         * Data labels for the gauge. For gauges, the data labels are
         * enabled by default and shown in a bordered box below the point.
         *
         * @since   2.3.0
         * @product highcharts
         */
        dataLabels: {
          borderColor: "#cccccc"
          /* neutralColor20 */
          ,
          borderRadius: 3,
          borderWidth: 1,
          crop: false,
          defer: false,
          enabled: true,
          verticalAlign: 'top',
          y: 15,
          zIndex: 2
        },

        /**
         * Options for the dial or arrow pointer of the gauge.
         *
         * In styled mode, the dial is styled with the
         * `.highcharts-gauge-series .highcharts-dial` rule.
         *
         * @sample {highcharts} highcharts/css/gauge/
         *         Styled mode
         *
         * @type    {*}
         * @since   2.3.0
         * @product highcharts
         */
        dial: {},

        /**
         * The length of the dial's base part, relative to the total radius
         * or length of the dial.
         *
         * @sample {highcharts} highcharts/plotoptions/gauge-dial/
         *         Dial options demonstrated
         *
         * @type      {string}
         * @default   70%
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.gauge.dial.baseLength
         */

        /**
         * The pixel width of the base of the gauge dial. The base is the
         * part closest to the pivot, defined by baseLength.
         *
         * @sample {highcharts} highcharts/plotoptions/gauge-dial/
         *         Dial options demonstrated
         *
         * @type      {number}
         * @default   3
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.gauge.dial.baseWidth
         */

        /**
         * The radius or length of the dial, in percentages relative to the
         * radius of the gauge itself.
         *
         * @sample {highcharts} highcharts/plotoptions/gauge-dial/
         *         Dial options demonstrated
         *
         * @type      {string}
         * @default   80%
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.gauge.dial.radius
         */

        /**
         * The length of the dial's rear end, the part that extends out on
         * the other side of the pivot. Relative to the dial's length.
         *
         * @sample {highcharts} highcharts/plotoptions/gauge-dial/
         *         Dial options demonstrated
         *
         * @type      {string}
         * @default   10%
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.gauge.dial.rearLength
         */

        /**
         * The width of the top of the dial, closest to the perimeter. The
         * pivot narrows in from the base to the top.
         *
         * @sample {highcharts} highcharts/plotoptions/gauge-dial/
         *         Dial options demonstrated
         *
         * @type      {number}
         * @default   1
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.gauge.dial.topWidth
         */

        /**
         * The background or fill color of the gauge's dial.
         *
         * @sample {highcharts} highcharts/plotoptions/gauge-dial/
         *         Dial options demonstrated
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @default   #000000
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.gauge.dial.backgroundColor
         */

        /**
         * The border color or stroke of the gauge's dial. By default, the
         * borderWidth is 0, so this must be set in addition to a custom
         * border color.
         *
         * @sample {highcharts} highcharts/plotoptions/gauge-dial/
         *         Dial options demonstrated
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @default   #cccccc
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.gauge.dial.borderColor
         */

        /**
         * The width of the gauge dial border in pixels.
         *
         * @sample {highcharts} highcharts/plotoptions/gauge-dial/
         *         Dial options demonstrated
         *
         * @type      {number}
         * @default   0
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.gauge.dial.borderWidth
         */

        /**
         * Allow the dial to overshoot the end of the perimeter axis by
         * this many degrees. Say if the gauge axis goes from 0 to 60, a
         * value of 100, or 1000, will show 5 degrees beyond the end of the
         * axis when this option is set to 5.
         *
         * @see [wrap](#plotOptions.gauge.wrap)
         *
         * @sample {highcharts} highcharts/plotoptions/gauge-overshoot/
         *         Allow 5 degrees overshoot
         *
         * @type      {number}
         * @since     3.0.10
         * @product   highcharts
         * @apioption plotOptions.gauge.overshoot
         */

        /**
         * Options for the pivot or the center point of the gauge.
         *
         * In styled mode, the pivot is styled with the
         * `.highcharts-gauge-series .highcharts-pivot` rule.
         *
         * @sample {highcharts} highcharts/css/gauge/
         *         Styled mode
         *
         * @type    {*}
         * @since   2.3.0
         * @product highcharts
         */
        pivot: {},

        /**
         * The pixel radius of the pivot.
         *
         * @sample {highcharts} highcharts/plotoptions/gauge-pivot/
         *         Pivot options demonstrated
         *
         * @type      {number}
         * @default   5
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.gauge.pivot.radius
         */

        /**
         * The border or stroke width of the pivot.
         *
         * @sample {highcharts} highcharts/plotoptions/gauge-pivot/
         *         Pivot options demonstrated
         *
         * @type      {number}
         * @default   0
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.gauge.pivot.borderWidth
         */

        /**
         * The border or stroke color of the pivot. In able to change this,
         * the borderWidth must also be set to something other than the
         * default 0.
         *
         * @sample {highcharts} highcharts/plotoptions/gauge-pivot/
         *         Pivot options demonstrated
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @default   #cccccc
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.gauge.pivot.borderColor
         */

        /**
         * The background color or fill of the pivot.
         *
         * @sample {highcharts} highcharts/plotoptions/gauge-pivot/
         *         Pivot options demonstrated
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @default   #000000
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.gauge.pivot.backgroundColor
         */
        tooltip: {
          headerFormat: ''
        },

        /**
         * Whether to display this particular series or series type in the
         * legend. Defaults to false for gauge series.
         *
         * @since   2.3.0
         * @product highcharts
         */
        showInLegend: false // Prototype members

      });
      return GaugeSeries;
    }(Series);

    extend(GaugeSeries.prototype, {
      // chart.angular will be set to true when a gauge series is present,
      // and this will be used on the axes
      angular: true,
      directTouch: true,
      drawGraph: noop,
      drawTracker: ColumnSeries.prototype.drawTracker,
      fixedBox: true,
      forceDL: true,
      noSharedTooltip: true,
      pointClass: GaugePoint,
      trackerGroups: ['group', 'dataLabelsGroup']
    });
    SeriesRegistry.registerSeriesType('gauge', GaugeSeries);
    /* *
     *
     *  Default Export
     *
     * */

    /* *
     *
     *  API options
     *
     * */

    /**
     * A `gauge` series. If the [type](#series.gauge.type) option is not
     * specified, it is inherited from [chart.type](#chart.type).
     *
     * @extends   series,plotOptions.gauge
     * @excluding animationLimit, boostThreshold, connectEnds, connectNulls,
     *            cropThreshold, dashStyle, dataParser, dataURL, findNearestPointBy,
     *            getExtremesFromAll, marker, negativeColor, pointPlacement, shadow,
     *            softThreshold, stack, stacking, states, step, threshold,
     *            turboThreshold, zoneAxis, zones, dataSorting, boostBlending
     * @product   highcharts
     * @requires  highcharts-more
     * @apioption series.gauge
     */

    /**
     * An array of data points for the series. For the `gauge` series type,
     * points can be given in the following ways:
     *
     * 1. An array of numerical values. In this case, the numerical values will be
     *    interpreted as `y` options. Example:
     *    ```js
     *    data: [0, 5, 3, 5]
     *    ```
     *
     * 2. An array of objects with named values. The following snippet shows only a
     *    few settings, see the complete options set below. If the total number of
     *    data points exceeds the series'
     *    [turboThreshold](#series.gauge.turboThreshold), this option is not
     *    available.
     *    ```js
     *    data: [{
     *        y: 6,
     *        name: "Point2",
     *        color: "#00FF00"
     *    }, {
     *        y: 8,
     *        name: "Point1",
     *       color: "#FF00FF"
     *    }]
     *    ```
     *
     * The typical gauge only contains a single data value.
     *
     * @sample {highcharts} highcharts/chart/reflow-true/
     *         Numerical values
     * @sample {highcharts} highcharts/series/data-array-of-objects/
     *         Config objects
     *
     * @type      {Array<number|null|*>}
     * @extends   series.line.data
     * @excluding drilldown, marker, x
     * @product   highcharts
     * @apioption series.gauge.data
     */

    ''; // adds the doclets above in the transpiled file

    return GaugeSeries;
  });

  _registerModule(_modules, 'Series/PackedBubble/PackedBubblePoint.js', [_modules['Core/Chart/Chart.js'], _modules['Core/Series/Point.js'], _modules['Core/Series/SeriesRegistry.js']], function (Chart, Point, SeriesRegistry) {
    /* *
     *
     *  (c) 2010-2021 Grzegorz Blachlinski, Sebastian Bochan
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var BubbleSeries = SeriesRegistry.seriesTypes.bubble;
    /* *
     *
     *  Class
     *
     * */

    var PackedBubblePoint =
    /** @class */
    function (_super) {
      __extends(PackedBubblePoint, _super);

      function PackedBubblePoint() {
        /* *
         *
         *  Properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.degree = NaN;
        _this.mass = NaN;
        _this.radius = NaN;
        _this.options = void 0;
        _this.series = void 0;
        _this.value = null;
        return _this;
        /* eslint-enable valid-jsdoc */
      }
      /* *
       *
       *  Functions
       *
       * */

      /* eslint-disable valid-jsdoc */

      /**
       * Destroy point.
       * Then remove point from the layout.
       * @private
       */


      PackedBubblePoint.prototype.destroy = function () {
        if (this.series.layout) {
          this.series.layout.removeElementFromCollection(this, this.series.layout.nodes);
        }

        return Point.prototype.destroy.apply(this, arguments);
      };

      PackedBubblePoint.prototype.firePointEvent = function () {
        var point = this,
            series = this.series,
            seriesOptions = series.options;

        if (this.isParentNode && seriesOptions.parentNode) {
          var temp = seriesOptions.allowPointSelect;
          seriesOptions.allowPointSelect = seriesOptions.parentNode.allowPointSelect;
          Point.prototype.firePointEvent.apply(this, arguments);
          seriesOptions.allowPointSelect = temp;
        } else {
          Point.prototype.firePointEvent.apply(this, arguments);
        }
      };

      PackedBubblePoint.prototype.select = function () {
        var point = this,
            series = this.series,
            chart = series.chart;

        if (point.isParentNode) {
          chart.getSelectedPoints = chart.getSelectedParentNodes;
          Point.prototype.select.apply(this, arguments);
          chart.getSelectedPoints = Chart.prototype.getSelectedPoints;
        } else {
          Point.prototype.select.apply(this, arguments);
        }
      };

      return PackedBubblePoint;
    }(BubbleSeries.prototype.pointClass);
    /* *
     *
     *  Default Export
     *
     * */


    return PackedBubblePoint;
  });

  _registerModule(_modules, 'Series/Networkgraph/DraggableNodes.js', [_modules['Core/Chart/Chart.js'], _modules['Core/Globals.js'], _modules['Core/Utilities.js']], function (Chart, H, U) {
    /* *
     *
     *  Networkgraph series
     *
     *  (c) 2010-2021 Paweł Fus
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var addEvent = U.addEvent;
    /* eslint-disable no-invalid-this, valid-jsdoc */

    H.dragNodesMixin = {
      /**
       * Mouse down action, initializing drag&drop mode.
       *
       * @private
       * @param {Highcharts.Point} point The point that event occured.
       * @param {Highcharts.PointerEventObject} event Browser event, before normalization.
       */
      onMouseDown: function (point, event) {
        var normalizedEvent = this.chart.pointer.normalize(event);
        point.fixedPosition = {
          chartX: normalizedEvent.chartX,
          chartY: normalizedEvent.chartY,
          plotX: point.plotX,
          plotY: point.plotY
        };
        point.inDragMode = true;
      },

      /**
       * Mouse move action during drag&drop.
       *
       * @private
       *
       * @param {global.Event} event Browser event, before normalization.
       * @param {Highcharts.Point} point The point that event occured.
       *
       */
      onMouseMove: function (point, event) {
        if (point.fixedPosition && point.inDragMode) {
          var series = this,
              chart = series.chart,
              normalizedEvent = chart.pointer.normalize(event),
              diffX = point.fixedPosition.chartX - normalizedEvent.chartX,
              diffY = point.fixedPosition.chartY - normalizedEvent.chartY,
              newPlotX = void 0,
              newPlotY = void 0,
              graphLayoutsLookup = chart.graphLayoutsLookup; // At least 5px to apply change (avoids simple click):

          if (Math.abs(diffX) > 5 || Math.abs(diffY) > 5) {
            newPlotX = point.fixedPosition.plotX - diffX;
            newPlotY = point.fixedPosition.plotY - diffY;

            if (chart.isInsidePlot(newPlotX, newPlotY)) {
              point.plotX = newPlotX;
              point.plotY = newPlotY;
              point.hasDragged = true;
              this.redrawHalo(point);
              graphLayoutsLookup.forEach(function (layout) {
                layout.restartSimulation();
              });
            }
          }
        }
      },

      /**
       * Mouse up action, finalizing drag&drop.
       *
       * @private
       * @param {Highcharts.Point} point The point that event occured.
       */
      onMouseUp: function (point, event) {
        if (point.fixedPosition) {
          if (point.hasDragged) {
            if (this.layout.enableSimulation) {
              this.layout.start();
            } else {
              this.chart.redraw();
            }
          }

          point.inDragMode = point.hasDragged = false;

          if (!this.options.fixedDraggable) {
            delete point.fixedPosition;
          }
        }
      },
      // Draggable mode:

      /**
       * Redraw halo on mousemove during the drag&drop action.
       *
       * @private
       * @param {Highcharts.Point} point The point that should show halo.
       */
      redrawHalo: function (point) {
        if (point && this.halo) {
          this.halo.attr({
            d: point.haloPath(this.options.states.hover.halo.size)
          });
        }
      }
    };
    /*
     * Draggable mode:
     */

    addEvent(Chart, 'load', function () {
      var chart = this,
          mousedownUnbinder,
          mousemoveUnbinder,
          mouseupUnbinder;

      if (chart.container) {
        mousedownUnbinder = addEvent(chart.container, 'mousedown', function (event) {
          var point = chart.hoverPoint;

          if (point && point.series && point.series.hasDraggableNodes && point.series.options.draggable) {
            point.series.onMouseDown(point, event);
            mousemoveUnbinder = addEvent(chart.container, 'mousemove', function (e) {
              return point && point.series && point.series.onMouseMove(point, e);
            });
            mouseupUnbinder = addEvent(chart.container.ownerDocument, 'mouseup', function (e) {
              mousemoveUnbinder();
              mouseupUnbinder();
              return point && point.series && point.series.onMouseUp(point, e);
            });
          }
        });
      }

      addEvent(chart, 'destroy', function () {
        mousedownUnbinder();
      });
    });
  });

  _registerModule(_modules, 'Series/Networkgraph/Integrations.js', [_modules['Core/Globals.js']], function (H) {
    /* *
     *
     *  Networkgraph series
     *
     *  (c) 2010-2021 Paweł Fus
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */

    /* eslint-disable no-invalid-this, valid-jsdoc */
    H.networkgraphIntegrations = {
      verlet: {
        /**
         * Attractive force funtion. Can be replaced by API's
         * `layoutAlgorithm.attractiveForce`
         *
         * @private
         * @param {number} d current distance between two nodes
         * @param {number} k expected distance between two nodes
         * @return {number} force
         */
        attractiveForceFunction: function (d, k) {
          // Used in API:
          return (k - d) / d;
        },

        /**
         * Repulsive force funtion. Can be replaced by API's
         * `layoutAlgorithm.repulsiveForce`
         *
         * @private
         * @param {number} d current distance between two nodes
         * @param {number} k expected distance between two nodes
         * @return {number} force
         */
        repulsiveForceFunction: function (d, k) {
          // Used in API:
          return (k - d) / d * (k > d ? 1 : 0); // Force only for close nodes
        },

        /**
         * Barycenter force. Calculate and applys barycenter forces on the
         * nodes. Making them closer to the center of their barycenter point.
         *
         * In Verlet integration, force is applied on a node immidatelly to it's
         * `plotX` and `plotY` position.
         *
         * @private
             */
        barycenter: function () {
          var gravitationalConstant = this.options.gravitationalConstant,
              xFactor = this.barycenter.xFactor,
              yFactor = this.barycenter.yFactor; // To consider:

          xFactor = (xFactor - (this.box.left + this.box.width) / 2) * gravitationalConstant;
          yFactor = (yFactor - (this.box.top + this.box.height) / 2) * gravitationalConstant;
          this.nodes.forEach(function (node) {
            if (!node.fixedPosition) {
              node.plotX -= xFactor / node.mass / node.degree;
              node.plotY -= yFactor / node.mass / node.degree;
            }
          });
        },

        /**
         * Repulsive force.
         *
         * In Verlet integration, force is applied on a node immidatelly to it's
         * `plotX` and `plotY` position.
         *
         * @private
         * @param {Highcharts.Point} node
         *        Node that should be translated by force.
         * @param {number} force
         *        Force calcualated in `repulsiveForceFunction`
         * @param {Highcharts.PositionObject} distance
         *        Distance between two nodes e.g. `{x, y}`
             */
        repulsive: function (node, force, distanceXY) {
          var factor = force * this.diffTemperature / node.mass / node.degree;

          if (!node.fixedPosition) {
            node.plotX += distanceXY.x * factor;
            node.plotY += distanceXY.y * factor;
          }
        },

        /**
         * Attractive force.
         *
         * In Verlet integration, force is applied on a node immidatelly to it's
         * `plotX` and `plotY` position.
         *
         * @private
         * @param {Highcharts.Point} link
         *        Link that connects two nodes
         * @param {number} force
         *        Force calcualated in `repulsiveForceFunction`
         * @param {Highcharts.PositionObject} distance
         *        Distance between two nodes e.g. `{x, y}`
             */
        attractive: function (link, force, distanceXY) {
          var massFactor = link.getMass(),
              translatedX = -distanceXY.x * force * this.diffTemperature,
              translatedY = -distanceXY.y * force * this.diffTemperature;

          if (!link.fromNode.fixedPosition) {
            link.fromNode.plotX -= translatedX * massFactor.fromNode / link.fromNode.degree;
            link.fromNode.plotY -= translatedY * massFactor.fromNode / link.fromNode.degree;
          }

          if (!link.toNode.fixedPosition) {
            link.toNode.plotX += translatedX * massFactor.toNode / link.toNode.degree;
            link.toNode.plotY += translatedY * massFactor.toNode / link.toNode.degree;
          }
        },

        /**
         * Integration method.
         *
         * In Verlet integration, forces are applied on node immidatelly to it's
         * `plotX` and `plotY` position.
         *
         * Verlet without velocity:
         *
         *    x(n+1) = 2 * x(n) - x(n-1) + A(T) * deltaT ^ 2
         *
         * where:
         *     - x(n+1) - new position
         *     - x(n) - current position
         *     - x(n-1) - previous position
         *
         * Assuming A(t) = 0 (no acceleration) and (deltaT = 1) we get:
         *
         *     x(n+1) = x(n) + (x(n) - x(n-1))
         *
         * where:
         *     - (x(n) - x(n-1)) - position change
         *
         * TO DO:
         * Consider Verlet with velocity to support additional
         * forces. Or even Time-Corrected Verlet by Jonathan
         * "lonesock" Dummer
         *
         * @private
         * @param {Highcharts.NetworkgraphLayout} layout layout object
         * @param {Highcharts.Point} node node that should be translated
             */
        integrate: function (layout, node) {
          var friction = -layout.options.friction,
              maxSpeed = layout.options.maxSpeed,
              prevX = node.prevX,
              prevY = node.prevY,
              // Apply friciton:
          diffX = (node.plotX + node.dispX - prevX) * friction,
              diffY = (node.plotY + node.dispY - prevY) * friction,
              abs = Math.abs,
              signX = abs(diffX) / (diffX || 1),
              // need to deal with 0
          signY = abs(diffY) / (diffY || 1); // Apply max speed:

          diffX = signX * Math.min(maxSpeed, Math.abs(diffX));
          diffY = signY * Math.min(maxSpeed, Math.abs(diffY)); // Store for the next iteration:

          node.prevX = node.plotX + node.dispX;
          node.prevY = node.plotY + node.dispY; // Update positions:

          node.plotX += diffX;
          node.plotY += diffY;
          node.temperature = layout.vectorLength({
            x: diffX,
            y: diffY
          });
        },

        /**
         * Estiamte the best possible distance between two nodes, making graph
         * readable.
         * @private
         */
        getK: function (layout) {
          return Math.pow(layout.box.width * layout.box.height / layout.nodes.length, 0.5);
        }
      },
      euler: {
        /**
         * Attractive force funtion. Can be replaced by API's
         * `layoutAlgorithm.attractiveForce`
         *
         * Other forces that can be used:
         *
         * basic, not recommended:
         *    `function (d, k) { return d / k }`
         *
         * @private
         * @param {number} d current distance between two nodes
         * @param {number} k expected distance between two nodes
         * @return {number} force
         */
        attractiveForceFunction: function (d, k) {
          return d * d / k;
        },

        /**
         * Repulsive force funtion. Can be replaced by API's
         * `layoutAlgorithm.repulsiveForce`.
         *
         * Other forces that can be used:
         *
         * basic, not recommended:
         *    `function (d, k) { return k / d }`
         *
         * standard:
         *    `function (d, k) { return k * k / d }`
         *
         * grid-variant:
         *    `function (d, k) { return k * k / d * (2 * k - d > 0 ? 1 : 0) }`
         *
         * @private
         * @param {number} d current distance between two nodes
         * @param {number} k expected distance between two nodes
         * @return {number} force
         */
        repulsiveForceFunction: function (d, k) {
          return k * k / d;
        },

        /**
         * Barycenter force. Calculate and applys barycenter forces on the
         * nodes. Making them closer to the center of their barycenter point.
         *
         * In Euler integration, force is stored in a node, not changing it's
         * position. Later, in `integrate()` forces are applied on nodes.
         *
         * @private
             */
        barycenter: function () {
          var gravitationalConstant = this.options.gravitationalConstant,
              xFactor = this.barycenter.xFactor,
              yFactor = this.barycenter.yFactor;
          this.nodes.forEach(function (node) {
            if (!node.fixedPosition) {
              var degree = node.getDegree(),
                  phi = degree * (1 + degree / 2);
              node.dispX += (xFactor - node.plotX) * gravitationalConstant * phi / node.degree;
              node.dispY += (yFactor - node.plotY) * gravitationalConstant * phi / node.degree;
            }
          });
        },

        /**
         * Repulsive force.
         *
         * @private
         * @param {Highcharts.Point} node
         *        Node that should be translated by force.
         * @param {number} force
         *        Force calcualated in `repulsiveForceFunction`
         * @param {Highcharts.PositionObject} distanceXY
         *        Distance between two nodes e.g. `{x, y}`
             */
        repulsive: function (node, force, distanceXY, distanceR) {
          node.dispX += distanceXY.x / distanceR * force / node.degree;
          node.dispY += distanceXY.y / distanceR * force / node.degree;
        },

        /**
         * Attractive force.
         *
         * In Euler integration, force is stored in a node, not changing it's
         * position. Later, in `integrate()` forces are applied on nodes.
         *
         * @private
         * @param {Highcharts.Point} link
         *        Link that connects two nodes
         * @param {number} force
         *        Force calcualated in `repulsiveForceFunction`
         * @param {Highcharts.PositionObject} distanceXY
         *        Distance between two nodes e.g. `{x, y}`
         * @param {number} distanceR
             */
        attractive: function (link, force, distanceXY, distanceR) {
          var massFactor = link.getMass(),
              translatedX = distanceXY.x / distanceR * force,
              translatedY = distanceXY.y / distanceR * force;

          if (!link.fromNode.fixedPosition) {
            link.fromNode.dispX -= translatedX * massFactor.fromNode / link.fromNode.degree;
            link.fromNode.dispY -= translatedY * massFactor.fromNode / link.fromNode.degree;
          }

          if (!link.toNode.fixedPosition) {
            link.toNode.dispX += translatedX * massFactor.toNode / link.toNode.degree;
            link.toNode.dispY += translatedY * massFactor.toNode / link.toNode.degree;
          }
        },

        /**
         * Integration method.
         *
         * In Euler integration, force were stored in a node, not changing it's
         * position. Now, in the integrator method, we apply changes.
         *
         * Euler:
         *
         * Basic form: `x(n+1) = x(n) + v(n)`
         *
         * With Rengoild-Fruchterman we get:
         * `x(n+1) = x(n) + v(n) / length(v(n)) * min(v(n), temperature(n))`
         * where:
         * - `x(n+1)`: next position
         * - `x(n)`: current position
         * - `v(n)`: velocity (comes from net force)
         * - `temperature(n)`: current temperature
         *
         * Known issues:
         * Oscillations when force vector has the same magnitude but opposite
         * direction in the next step. Potentially solved by decreasing force by
         * `v * (1 / node.degree)`
         *
         * Note:
         * Actually `min(v(n), temperature(n))` replaces simulated annealing.
         *
         * @private
         * @param {Highcharts.NetworkgraphLayout} layout
         *        Layout object
         * @param {Highcharts.Point} node
         *        Node that should be translated
             */
        integrate: function (layout, node) {
          var distanceR;
          node.dispX += node.dispX * layout.options.friction;
          node.dispY += node.dispY * layout.options.friction;
          distanceR = node.temperature = layout.vectorLength({
            x: node.dispX,
            y: node.dispY
          });

          if (distanceR !== 0) {
            node.plotX += node.dispX / distanceR * Math.min(Math.abs(node.dispX), layout.temperature);
            node.plotY += node.dispY / distanceR * Math.min(Math.abs(node.dispY), layout.temperature);
          }
        },

        /**
         * Estiamte the best possible distance between two nodes, making graph
         * readable.
         * @private
         */
        getK: function (layout) {
          return Math.pow(layout.box.width * layout.box.height / layout.nodes.length, 0.3);
        }
      }
    };
  });

  _registerModule(_modules, 'Series/Networkgraph/QuadTree.js', [_modules['Core/Globals.js'], _modules['Core/Utilities.js']], function (H, U) {
    /* *
     *
     *  Networkgraph series
     *
     *  (c) 2010-2021 Paweł Fus
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var extend = U.extend;
    /* eslint-disable no-invalid-this, valid-jsdoc */

    /**
     * The QuadTree node class. Used in Networkgraph chart as a base for Barnes-Hut
     * approximation.
     *
     * @private
     * @class
     * @name Highcharts.QuadTreeNode
     *
     * @param {Highcharts.Dictionary<number>} box Available space for the node
     */

    var QuadTreeNode = H.QuadTreeNode = function (box) {
      /**
       * Read only. The available space for node.
       *
       * @name Highcharts.QuadTreeNode#box
       * @type {Highcharts.Dictionary<number>}
       */
      this.box = box;
      /**
       * Read only. The minium of width and height values.
       *
       * @name Highcharts.QuadTreeNode#boxSize
       * @type {number}
       */

      this.boxSize = Math.min(box.width, box.height);
      /**
       * Read only. Array of subnodes. Empty if QuadTreeNode has just one Point.
       * When added another Point to this QuadTreeNode, array is filled with four
       * subnodes.
       *
       * @name Highcharts.QuadTreeNode#nodes
       * @type {Array<Highcharts.QuadTreeNode>}
       */

      this.nodes = [];
      /**
       * Read only. Flag to determine if QuadTreeNode is internal (and has
       * subnodes with mass and central position) or external (bound to Point).
       *
       * @name Highcharts.QuadTreeNode#isInternal
       * @type {boolean}
       */

      this.isInternal = false;
      /**
       * Read only. If QuadTreeNode is an external node, Point is stored in
       * `this.body`.
       *
       * @name Highcharts.QuadTreeNode#body
       * @type {boolean|Highcharts.Point}
       */

      this.body = false;
      /**
       * Read only. Internal nodes when created are empty to reserve the space. If
       * Point is added to this QuadTreeNode, QuadTreeNode is no longer empty.
       *
       * @name Highcharts.QuadTreeNode#isEmpty
       * @type {boolean}
       */

      this.isEmpty = true;
    };

    extend(QuadTreeNode.prototype,
    /** @lends Highcharts.QuadTreeNode.prototype */
    {
      /**
       * Insert recursively point(node) into the QuadTree. If the given
       * quadrant is already occupied, divide it into smaller quadrants.
       *
       * @param {Highcharts.Point} point
       *        Point/node to be inserted
       * @param {number} depth
       *        Max depth of the QuadTree
       */
      insert: function (point, depth) {
        var newQuadTreeNode;

        if (this.isInternal) {
          // Internal node:
          this.nodes[this.getBoxPosition(point)].insert(point, depth - 1);
        } else {
          this.isEmpty = false;

          if (!this.body) {
            // First body in a quadrant:
            this.isInternal = false;
            this.body = point;
          } else {
            if (depth) {
              // Every other body in a quadrant:
              this.isInternal = true;
              this.divideBox(); // Reinsert main body only once:

              if (this.body !== true) {
                this.nodes[this.getBoxPosition(this.body)].insert(this.body, depth - 1);
                this.body = true;
              } // Add second body:


              this.nodes[this.getBoxPosition(point)].insert(point, depth - 1);
            } else {
              // We are below max allowed depth. That means either:
              // - really huge number of points
              // - falling two points into exactly the same position
              // In this case, create another node in the QuadTree.
              //
              // Alternatively we could add some noise to the
              // position, but that could result in different
              // rendered chart in exporting.
              newQuadTreeNode = new QuadTreeNode({
                top: point.plotX,
                left: point.plotY,
                // Width/height below 1px
                width: 0.1,
                height: 0.1
              });
              newQuadTreeNode.body = point;
              newQuadTreeNode.isInternal = false;
              this.nodes.push(newQuadTreeNode);
            }
          }
        }
      },

      /**
       * Each quad node requires it's mass and center position. That mass and
       * position is used to imitate real node in the layout by approximation.
       */
      updateMassAndCenter: function () {
        var mass = 0,
            plotX = 0,
            plotY = 0;

        if (this.isInternal) {
          // Calcualte weightened mass of the quad node:
          this.nodes.forEach(function (pointMass) {
            if (!pointMass.isEmpty) {
              mass += pointMass.mass;
              plotX += pointMass.plotX * pointMass.mass;
              plotY += pointMass.plotY * pointMass.mass;
            }
          });
          plotX /= mass;
          plotY /= mass;
        } else if (this.body) {
          // Just one node, use coordinates directly:
          mass = this.body.mass;
          plotX = this.body.plotX;
          plotY = this.body.plotY;
        } // Store details:


        this.mass = mass;
        this.plotX = plotX;
        this.plotY = plotY;
      },

      /**
       * When inserting another node into the box, that already hove one node,
       * divide the available space into another four quadrants.
       *
       * Indexes of quadrants are:
       * ```
       * -------------               -------------
       * |           |               |     |     |
       * |           |               |  0  |  1  |
       * |           |   divide()    |     |     |
       * |     1     | ----------->  -------------
       * |           |               |     |     |
       * |           |               |  3  |  2  |
       * |           |               |     |     |
       * -------------               -------------
       * ```
       */
      divideBox: function () {
        var halfWidth = this.box.width / 2,
            halfHeight = this.box.height / 2; // Top left

        this.nodes[0] = new QuadTreeNode({
          left: this.box.left,
          top: this.box.top,
          width: halfWidth,
          height: halfHeight
        }); // Top right

        this.nodes[1] = new QuadTreeNode({
          left: this.box.left + halfWidth,
          top: this.box.top,
          width: halfWidth,
          height: halfHeight
        }); // Bottom right

        this.nodes[2] = new QuadTreeNode({
          left: this.box.left + halfWidth,
          top: this.box.top + halfHeight,
          width: halfWidth,
          height: halfHeight
        }); // Bottom left

        this.nodes[3] = new QuadTreeNode({
          left: this.box.left,
          top: this.box.top + halfHeight,
          width: halfWidth,
          height: halfHeight
        });
      },

      /**
       * Determine which of the quadrants should be used when placing node in
       * the QuadTree. Returned index is always in range `< 0 , 3 >`.
       * @private
       */
      getBoxPosition: function (point) {
        var left = point.plotX < this.box.left + this.box.width / 2,
            top = point.plotY < this.box.top + this.box.height / 2,
            index;

        if (left) {
          if (top) {
            // Top left
            index = 0;
          } else {
            // Bottom left
            index = 3;
          }
        } else {
          if (top) {
            // Top right
            index = 1;
          } else {
            // Bottom right
            index = 2;
          }
        }

        return index;
      }
    });
    /**
     * The QuadTree class. Used in Networkgraph chart as a base for Barnes-Hut
     * approximation.
     *
     * @private
     * @class
     * @name Highcharts.QuadTree
     *
     * @param {number} x left position of the plotting area
     * @param {number} y top position of the plotting area
     * @param {number} width width of the plotting area
     * @param {number} height height of the plotting area
     */

    var QuadTree = H.QuadTree = function (x, y, width, height) {
      // Boundary rectangle:
      this.box = {
        left: x,
        top: y,
        width: width,
        height: height
      };
      this.maxDepth = 25;
      this.root = new QuadTreeNode(this.box, '0');
      this.root.isInternal = true;
      this.root.isRoot = true;
      this.root.divideBox();
    };

    extend(QuadTree.prototype,
    /** @lends Highcharts.QuadTree.prototype */
    {
      /**
       * Insert nodes into the QuadTree
       *
       * @param {Array<Highcharts.Point>} points
       */
      insertNodes: function (points) {
        points.forEach(function (point) {
          this.root.insert(point, this.maxDepth);
        }, this);
      },

      /**
       * Depfth first treversal (DFS). Using `before` and `after` callbacks,
       * we can get two results: preorder and postorder traversals, reminder:
       *
       * ```
       *     (a)
       *     / \
       *   (b) (c)
       *   / \
       * (d) (e)
       * ```
       *
       * DFS (preorder): `a -> b -> d -> e -> c`
       *
       * DFS (postorder): `d -> e -> b -> c -> a`
       *
       * @param {Highcharts.QuadTreeNode|null} node
       * @param {Function} [beforeCallback] function to be called before
       *                      visiting children nodes
       * @param {Function} [afterCallback] function to be called after
       *                      visiting children nodes
       */
      visitNodeRecursive: function (node, beforeCallback, afterCallback) {
        var goFurther;

        if (!node) {
          node = this.root;
        }

        if (node === this.root && beforeCallback) {
          goFurther = beforeCallback(node);
        }

        if (goFurther === false) {
          return;
        }

        node.nodes.forEach(function (qtNode) {
          if (qtNode.isInternal) {
            if (beforeCallback) {
              goFurther = beforeCallback(qtNode);
            }

            if (goFurther === false) {
              return;
            }

            this.visitNodeRecursive(qtNode, beforeCallback, afterCallback);
          } else if (qtNode.body) {
            if (beforeCallback) {
              beforeCallback(qtNode.body);
            }
          }

          if (afterCallback) {
            afterCallback(qtNode);
          }
        }, this);

        if (node === this.root && afterCallback) {
          afterCallback(node);
        }
      },

      /**
       * Calculate mass of the each QuadNode in the tree.
       */
      calculateMassAndCenter: function () {
        this.visitNodeRecursive(null, null, function (node) {
          node.updateMassAndCenter();
        });
      }
    });
  });

  _registerModule(_modules, 'Series/Networkgraph/Layouts.js', [_modules['Core/Chart/Chart.js'], _modules['Core/Animation/AnimationUtilities.js'], _modules['Core/Globals.js'], _modules['Core/Utilities.js']], function (Chart, A, H, U) {
    /* *
     *
     *  Networkgraph series
     *
     *  (c) 2010-2021 Paweł Fus
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var setAnimation = A.setAnimation;
    var addEvent = U.addEvent,
        clamp = U.clamp,
        defined = U.defined,
        extend = U.extend,
        isFunction = U.isFunction,
        pick = U.pick;
    /* eslint-disable no-invalid-this, valid-jsdoc */

    H.layouts = {
      'reingold-fruchterman': function () {}
    };
    extend(
    /**
     * Reingold-Fruchterman algorithm from
     * "Graph Drawing by Force-directed Placement" paper.
     * @private
     */
    H.layouts['reingold-fruchterman'].prototype, {
      init: function (options) {
        this.options = options;
        this.nodes = [];
        this.links = [];
        this.series = [];
        this.box = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        this.setInitialRendering(true);
        this.integration = H.networkgraphIntegrations[options.integration];
        this.enableSimulation = options.enableSimulation;
        this.attractiveForce = pick(options.attractiveForce, this.integration.attractiveForceFunction);
        this.repulsiveForce = pick(options.repulsiveForce, this.integration.repulsiveForceFunction);
        this.approximation = options.approximation;
      },
      updateSimulation: function (enable) {
        this.enableSimulation = pick(enable, this.options.enableSimulation);
      },
      start: function () {
        var layout = this,
            series = this.series,
            options = this.options;
        layout.currentStep = 0;
        layout.forces = series[0] && series[0].forces || [];
        layout.chart = series[0] && series[0].chart;

        if (layout.initialRendering) {
          layout.initPositions(); // Render elements in initial positions:

          series.forEach(function (s) {
            s.finishedAnimating = true; // #13169

            s.render();
          });
        }

        layout.setK();
        layout.resetSimulation(options);

        if (layout.enableSimulation) {
          layout.step();
        }
      },
      step: function () {
        var layout = this,
            series = this.series,
            options = this.options; // Algorithm:

        layout.currentStep++;

        if (layout.approximation === 'barnes-hut') {
          layout.createQuadTree();
          layout.quadTree.calculateMassAndCenter();
        }

        layout.forces.forEach(function (forceName) {
          layout[forceName + 'Forces'](layout.temperature);
        }); // Limit to the plotting area and cool down:

        layout.applyLimits(layout.temperature); // Cool down the system:

        layout.temperature = layout.coolDown(layout.startTemperature, layout.diffTemperature, layout.currentStep);
        layout.prevSystemTemperature = layout.systemTemperature;
        layout.systemTemperature = layout.getSystemTemperature();

        if (layout.enableSimulation) {
          series.forEach(function (s) {
            // Chart could be destroyed during the simulation
            if (s.chart) {
              s.render();
            }
          });

          if (layout.maxIterations-- && isFinite(layout.temperature) && !layout.isStable()) {
            if (layout.simulation) {
              H.win.cancelAnimationFrame(layout.simulation);
            }

            layout.simulation = H.win.requestAnimationFrame(function () {
              layout.step();
            });
          } else {
            layout.simulation = false;
          }
        }
      },
      stop: function () {
        if (this.simulation) {
          H.win.cancelAnimationFrame(this.simulation);
        }
      },
      setArea: function (x, y, w, h) {
        this.box = {
          left: x,
          top: y,
          width: w,
          height: h
        };
      },
      setK: function () {
        // Optimal distance between nodes,
        // available space around the node:
        this.k = this.options.linkLength || this.integration.getK(this);
      },
      addElementsToCollection: function (elements, collection) {
        elements.forEach(function (elem) {
          if (collection.indexOf(elem) === -1) {
            collection.push(elem);
          }
        });
      },
      removeElementFromCollection: function (element, collection) {
        var index = collection.indexOf(element);

        if (index !== -1) {
          collection.splice(index, 1);
        }
      },
      clear: function () {
        this.nodes.length = 0;
        this.links.length = 0;
        this.series.length = 0;
        this.resetSimulation();
      },
      resetSimulation: function () {
        this.forcedStop = false;
        this.systemTemperature = 0;
        this.setMaxIterations();
        this.setTemperature();
        this.setDiffTemperature();
      },
      restartSimulation: function () {
        if (!this.simulation) {
          // When dragging nodes, we don't need to calculate
          // initial positions and rendering nodes:
          this.setInitialRendering(false); // Start new simulation:

          if (!this.enableSimulation) {
            // Run only one iteration to speed things up:
            this.setMaxIterations(1);
          } else {
            this.start();
          }

          if (this.chart) {
            this.chart.redraw();
          } // Restore defaults:


          this.setInitialRendering(true);
        } else {
          // Extend current simulation:
          this.resetSimulation();
        }
      },
      setMaxIterations: function (maxIterations) {
        this.maxIterations = pick(maxIterations, this.options.maxIterations);
      },
      setTemperature: function () {
        this.temperature = this.startTemperature = Math.sqrt(this.nodes.length);
      },
      setDiffTemperature: function () {
        this.diffTemperature = this.startTemperature / (this.options.maxIterations + 1);
      },
      setInitialRendering: function (enable) {
        this.initialRendering = enable;
      },
      createQuadTree: function () {
        this.quadTree = new H.QuadTree(this.box.left, this.box.top, this.box.width, this.box.height);
        this.quadTree.insertNodes(this.nodes);
      },
      initPositions: function () {
        var initialPositions = this.options.initialPositions;

        if (isFunction(initialPositions)) {
          initialPositions.call(this);
          this.nodes.forEach(function (node) {
            if (!defined(node.prevX)) {
              node.prevX = node.plotX;
            }

            if (!defined(node.prevY)) {
              node.prevY = node.plotY;
            }

            node.dispX = 0;
            node.dispY = 0;
          });
        } else if (initialPositions === 'circle') {
          this.setCircularPositions();
        } else {
          this.setRandomPositions();
        }
      },
      setCircularPositions: function () {
        var box = this.box,
            nodes = this.nodes,
            nodesLength = nodes.length + 1,
            angle = 2 * Math.PI / nodesLength,
            rootNodes = nodes.filter(function (node) {
          return node.linksTo.length === 0;
        }),
            sortedNodes = [],
            visitedNodes = {},
            radius = this.options.initialPositionRadius;
        /**
         * @private
         */

        function addToNodes(node) {
          node.linksFrom.forEach(function (link) {
            if (!visitedNodes[link.toNode.id]) {
              visitedNodes[link.toNode.id] = true;
              sortedNodes.push(link.toNode);
              addToNodes(link.toNode);
            }
          });
        } // Start with identified root nodes an sort the nodes by their
        // hierarchy. In trees, this ensures that branches don't cross
        // eachother.


        rootNodes.forEach(function (rootNode) {
          sortedNodes.push(rootNode);
          addToNodes(rootNode);
        }); // Cyclic tree, no root node found

        if (!sortedNodes.length) {
          sortedNodes = nodes; // Dangling, cyclic trees
        } else {
          nodes.forEach(function (node) {
            if (sortedNodes.indexOf(node) === -1) {
              sortedNodes.push(node);
            }
          });
        } // Initial positions are laid out along a small circle, appearing
        // as a cluster in the middle


        sortedNodes.forEach(function (node, index) {
          node.plotX = node.prevX = pick(node.plotX, box.width / 2 + radius * Math.cos(index * angle));
          node.plotY = node.prevY = pick(node.plotY, box.height / 2 + radius * Math.sin(index * angle));
          node.dispX = 0;
          node.dispY = 0;
        });
      },
      setRandomPositions: function () {
        var box = this.box,
            nodes = this.nodes,
            nodesLength = nodes.length + 1;
        /**
         * Return a repeatable, quasi-random number based on an integer
         * input. For the initial positions
         * @private
         */

        function unrandom(n) {
          var rand = n * n / Math.PI;
          rand = rand - Math.floor(rand);
          return rand;
        } // Initial positions:


        nodes.forEach(function (node, index) {
          node.plotX = node.prevX = pick(node.plotX, box.width * unrandom(index));
          node.plotY = node.prevY = pick(node.plotY, box.height * unrandom(nodesLength + index));
          node.dispX = 0;
          node.dispY = 0;
        });
      },
      force: function (name) {
        this.integration[name].apply(this, Array.prototype.slice.call(arguments, 1));
      },
      barycenterForces: function () {
        this.getBarycenter();
        this.force('barycenter');
      },
      getBarycenter: function () {
        var systemMass = 0,
            cx = 0,
            cy = 0;
        this.nodes.forEach(function (node) {
          cx += node.plotX * node.mass;
          cy += node.plotY * node.mass;
          systemMass += node.mass;
        });
        this.barycenter = {
          x: cx,
          y: cy,
          xFactor: cx / systemMass,
          yFactor: cy / systemMass
        };
        return this.barycenter;
      },
      barnesHutApproximation: function (node, quadNode) {
        var layout = this,
            distanceXY = layout.getDistXY(node, quadNode),
            distanceR = layout.vectorLength(distanceXY),
            goDeeper,
            force;

        if (node !== quadNode && distanceR !== 0) {
          if (quadNode.isInternal) {
            // Internal node:
            if (quadNode.boxSize / distanceR < layout.options.theta && distanceR !== 0) {
              // Treat as an external node:
              force = layout.repulsiveForce(distanceR, layout.k);
              layout.force('repulsive', node, force * quadNode.mass, distanceXY, distanceR);
              goDeeper = false;
            } else {
              // Go deeper:
              goDeeper = true;
            }
          } else {
            // External node, direct force:
            force = layout.repulsiveForce(distanceR, layout.k);
            layout.force('repulsive', node, force * quadNode.mass, distanceXY, distanceR);
          }
        }

        return goDeeper;
      },
      repulsiveForces: function () {
        var layout = this;

        if (layout.approximation === 'barnes-hut') {
          layout.nodes.forEach(function (node) {
            layout.quadTree.visitNodeRecursive(null, function (quadNode) {
              return layout.barnesHutApproximation(node, quadNode);
            });
          });
        } else {
          layout.nodes.forEach(function (node) {
            layout.nodes.forEach(function (repNode) {
              var force, distanceR, distanceXY;

              if ( // Node can not repulse itself:
              node !== repNode && // Only close nodes affect each other:
              // layout.getDistR(node, repNode) < 2 * k &&
              // Not dragged:
              !node.fixedPosition) {
                distanceXY = layout.getDistXY(node, repNode);
                distanceR = layout.vectorLength(distanceXY);

                if (distanceR !== 0) {
                  force = layout.repulsiveForce(distanceR, layout.k);
                  layout.force('repulsive', node, force * repNode.mass, distanceXY, distanceR);
                }
              }
            });
          });
        }
      },
      attractiveForces: function () {
        var layout = this,
            distanceXY,
            distanceR,
            force;
        layout.links.forEach(function (link) {
          if (link.fromNode && link.toNode) {
            distanceXY = layout.getDistXY(link.fromNode, link.toNode);
            distanceR = layout.vectorLength(distanceXY);

            if (distanceR !== 0) {
              force = layout.attractiveForce(distanceR, layout.k);
              layout.force('attractive', link, force, distanceXY, distanceR);
            }
          }
        });
      },
      applyLimits: function () {
        var layout = this,
            nodes = layout.nodes;
        nodes.forEach(function (node) {
          if (node.fixedPosition) {
            return;
          }

          layout.integration.integrate(layout, node);
          layout.applyLimitBox(node, layout.box); // Reset displacement:

          node.dispX = 0;
          node.dispY = 0;
        });
      },

      /**
       * External box that nodes should fall. When hitting an edge, node
       * should stop or bounce.
       * @private
       */
      applyLimitBox: function (node, box) {
        var radius = node.radius;
        /*
        TO DO: Consider elastic collision instead of stopping.
        o' means end position when hitting plotting area edge:
         - "inelastic":
        o
         \
        ______
        |  o'
        |   \
        |    \
         - "elastic"/"bounced":
        o
         \
        ______
        |  ^
        | / \
        |o'  \
         Euler sample:
        if (plotX < 0) {
            plotX = 0;
            dispX *= -1;
        }
         if (plotX > box.width) {
            plotX = box.width;
            dispX *= -1;
        }
         */
        // Limit X-coordinates:

        node.plotX = clamp(node.plotX, box.left + radius, box.width - radius); // Limit Y-coordinates:

        node.plotY = clamp(node.plotY, box.top + radius, box.height - radius);
      },

      /**
       * From "A comparison of simulated annealing cooling strategies" by
       * Nourani and Andresen work.
       * @private
       */
      coolDown: function (temperature, temperatureStep, currentStep) {
        // Logarithmic:

        /*
        return Math.sqrt(this.nodes.length) -
            Math.log(
                currentStep * layout.diffTemperature
            );
        */
        // Exponential:

        /*
        let alpha = 0.1;
        layout.temperature = Math.sqrt(layout.nodes.length) *
            Math.pow(alpha, layout.diffTemperature);
        */
        // Linear:
        return temperature - temperatureStep * currentStep;
      },
      isStable: function () {
        return Math.abs(this.systemTemperature - this.prevSystemTemperature) < 0.00001 || this.temperature <= 0;
      },
      getSystemTemperature: function () {
        return this.nodes.reduce(function (value, node) {
          return value + node.temperature;
        }, 0);
      },
      vectorLength: function (vector) {
        return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
      },
      getDistR: function (nodeA, nodeB) {
        var distance = this.getDistXY(nodeA, nodeB);
        return this.vectorLength(distance);
      },
      getDistXY: function (nodeA, nodeB) {
        var xDist = nodeA.plotX - nodeB.plotX,
            yDist = nodeA.plotY - nodeB.plotY;
        return {
          x: xDist,
          y: yDist,
          absX: Math.abs(xDist),
          absY: Math.abs(yDist)
        };
      }
    });
    /* ************************************************************************** *
     * Multiple series support:
     * ************************************************************************** */
    // Clear previous layouts

    addEvent(Chart, 'predraw', function () {
      if (this.graphLayoutsLookup) {
        this.graphLayoutsLookup.forEach(function (layout) {
          layout.stop();
        });
      }
    });
    addEvent(Chart, 'render', function () {
      var systemsStable,
          afterRender = false;
      /**
       * @private
       */

      function layoutStep(layout) {
        if (layout.maxIterations-- && isFinite(layout.temperature) && !layout.isStable() && !layout.enableSimulation) {
          // Hook similar to build-in addEvent, but instead of
          // creating whole events logic, use just a function.
          // It's faster which is important for rAF code.
          // Used e.g. in packed-bubble series for bubble radius
          // calculations
          if (layout.beforeStep) {
            layout.beforeStep();
          }

          layout.step();
          systemsStable = false;
          afterRender = true;
        }
      }

      if (this.graphLayoutsLookup) {
        setAnimation(false, this); // Start simulation

        this.graphLayoutsLookup.forEach(function (layout) {
          layout.start();
        }); // Just one sync step, to run different layouts similar to
        // async mode.

        while (!systemsStable) {
          systemsStable = true;
          this.graphLayoutsLookup.forEach(layoutStep);
        }

        if (afterRender) {
          this.series.forEach(function (s) {
            if (s && s.layout) {
              s.render();
            }
          });
        }
      }
    }); // disable simulation before print if enabled

    addEvent(Chart, 'beforePrint', function () {
      if (this.graphLayoutsLookup) {
        this.graphLayoutsLookup.forEach(function (layout) {
          layout.updateSimulation(false);
        });
        this.redraw();
      }
    }); // re-enable simulation after print

    addEvent(Chart, 'afterPrint', function () {
      if (this.graphLayoutsLookup) {
        this.graphLayoutsLookup.forEach(function (layout) {
          // return to default simulation
          layout.updateSimulation();
        });
      }

      this.redraw();
    });
  });

  _registerModule(_modules, 'Series/PackedBubble/PackedBubbleComposition.js', [_modules['Core/Chart/Chart.js'], _modules['Core/Globals.js'], _modules['Core/Utilities.js']], function (Chart, H, U) {
    /* *
     *
     *  (c) 2010-2021 Grzegorz Blachlinski, Sebastian Bochan
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var Reingold = H.layouts['reingold-fruchterman'];
    var addEvent = U.addEvent,
        extendClass = U.extendClass,
        pick = U.pick;
    /* *
     *
     *  Composition
     *
     * */

    Chart.prototype.getSelectedParentNodes = function () {
      var chart = this,
          series = chart.series,
          selectedParentsNodes = [];
      series.forEach(function (series) {
        if (series.parentNode && series.parentNode.selected) {
          selectedParentsNodes.push(series.parentNode);
        }
      });
      return selectedParentsNodes;
    };

    H.networkgraphIntegrations.packedbubble = {
      repulsiveForceFunction: function (d, k, node, repNode) {
        return Math.min(d, (node.marker.radius + repNode.marker.radius) / 2);
      },
      barycenter: function () {
        var layout = this,
            gravitationalConstant = layout.options.gravitationalConstant,
            box = layout.box,
            nodes = layout.nodes,
            centerX,
            centerY;
        nodes.forEach(function (node) {
          if (layout.options.splitSeries && !node.isParentNode) {
            centerX = node.series.parentNode.plotX;
            centerY = node.series.parentNode.plotY;
          } else {
            centerX = box.width / 2;
            centerY = box.height / 2;
          }

          if (!node.fixedPosition) {
            node.plotX -= (node.plotX - centerX) * gravitationalConstant / (node.mass * Math.sqrt(nodes.length));
            node.plotY -= (node.plotY - centerY) * gravitationalConstant / (node.mass * Math.sqrt(nodes.length));
          }
        });
      },
      repulsive: function (node, force, distanceXY, repNode) {
        var factor = force * this.diffTemperature / node.mass / node.degree,
            x = distanceXY.x * factor,
            y = distanceXY.y * factor;

        if (!node.fixedPosition) {
          node.plotX += x;
          node.plotY += y;
        }

        if (!repNode.fixedPosition) {
          repNode.plotX -= x;
          repNode.plotY -= y;
        }
      },
      integrate: H.networkgraphIntegrations.verlet.integrate,
      getK: H.noop
    };
    H.layouts.packedbubble = extendClass(Reingold, {
      beforeStep: function () {
        if (this.options.marker) {
          this.series.forEach(function (series) {
            if (series) {
              series.calculateParentRadius();
            }
          });
        }
      },
      // #14439, new stable check.
      isStable: function () {
        var tempDiff = Math.abs(this.prevSystemTemperature - this.systemTemperature);
        var upScaledTemperature = 10 * this.systemTemperature / Math.sqrt(this.nodes.length);
        return Math.abs(upScaledTemperature) < 1 && tempDiff < 0.00001 || this.temperature <= 0;
      },
      setCircularPositions: function () {
        var layout = this,
            box = layout.box,
            nodes = layout.nodes,
            nodesLength = nodes.length + 1,
            angle = 2 * Math.PI / nodesLength,
            centerX,
            centerY,
            radius = layout.options.initialPositionRadius;
        nodes.forEach(function (node, index) {
          if (layout.options.splitSeries && !node.isParentNode) {
            centerX = node.series.parentNode.plotX;
            centerY = node.series.parentNode.plotY;
          } else {
            centerX = box.width / 2;
            centerY = box.height / 2;
          }

          node.plotX = node.prevX = pick(node.plotX, centerX + radius * Math.cos(node.index || index * angle));
          node.plotY = node.prevY = pick(node.plotY, centerY + radius * Math.sin(node.index || index * angle));
          node.dispX = 0;
          node.dispY = 0;
        });
      },
      repulsiveForces: function () {
        var layout = this,
            force,
            distanceR,
            distanceXY,
            bubblePadding = layout.options.bubblePadding;
        layout.nodes.forEach(function (node) {
          node.degree = node.mass;
          node.neighbours = 0;
          layout.nodes.forEach(function (repNode) {
            force = 0;

            if ( // Node can not repulse itself:
            node !== repNode && // Only close nodes affect each other:
            // Not dragged:
            !node.fixedPosition && (layout.options.seriesInteraction || node.series === repNode.series)) {
              distanceXY = layout.getDistXY(node, repNode);
              distanceR = layout.vectorLength(distanceXY) - (node.marker.radius + repNode.marker.radius + bubblePadding); // TODO padding configurable

              if (distanceR < 0) {
                node.degree += 0.01;
                node.neighbours++;
                force = layout.repulsiveForce(-distanceR / Math.sqrt(node.neighbours), layout.k, node, repNode);
              }

              layout.force('repulsive', node, force * repNode.mass, distanceXY, repNode, distanceR);
            }
          });
        });
      },
      applyLimitBox: function (node) {
        var layout = this,
            distanceXY,
            distanceR,
            factor = 0.01; // parentNodeLimit should be used together
        // with seriesInteraction: false

        if (layout.options.splitSeries && !node.isParentNode && layout.options.parentNodeLimit) {
          distanceXY = layout.getDistXY(node, node.series.parentNode);
          distanceR = node.series.parentNodeRadius - node.marker.radius - layout.vectorLength(distanceXY);

          if (distanceR < 0 && distanceR > -2 * node.marker.radius) {
            node.plotX -= distanceXY.x * factor;
            node.plotY -= distanceXY.y * factor;
          }
        }

        Reingold.prototype.applyLimitBox.apply(this, arguments);
      }
    }); // Remove accumulated data points to redistribute all of them again
    // (i.e after hiding series by legend)

    addEvent(Chart, 'beforeRedraw', function () {
      // eslint-disable-next-line no-invalid-this
      if (this.allDataPoints) {
        // eslint-disable-next-line no-invalid-this
        delete this.allDataPoints;
      }
    });
  });

  _registerModule(_modules, 'Series/PackedBubble/PackedBubbleSeries.js', [_modules['Core/Color/Color.js'], _modules['Core/Globals.js'], _modules['Series/PackedBubble/PackedBubblePoint.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (Color, H, PackedBubblePoint, SeriesRegistry, U) {
    /* *
     *
     *  (c) 2010-2021 Grzegorz Blachlinski, Sebastian Bochan
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var color = Color.parse;
    var Series = SeriesRegistry.series,
        BubbleSeries = SeriesRegistry.seriesTypes.bubble;
    var addEvent = U.addEvent,
        clamp = U.clamp,
        defined = U.defined,
        extend = U.extend,
        fireEvent = U.fireEvent,
        isArray = U.isArray,
        isNumber = U.isNumber,
        merge = U.merge,
        pick = U.pick;
    var dragNodesMixin = H.dragNodesMixin;
    /* *
     *
     *  Class
     *
     * */

    /**
     * @private
     * @class
     * @name Highcharts.seriesTypes.packedbubble
     *
     * @extends Highcharts.Series
     */

    var PackedBubbleSeries =
    /** @class */
    function (_super) {
      __extends(PackedBubbleSeries, _super);

      function PackedBubbleSeries() {
        /* *
         *
         *  Static Properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* *
         *
         *  Properties
         *
         * */


        _this.chart = void 0;
        _this.data = void 0;
        _this.layout = void 0;
        _this.options = void 0;
        _this.points = void 0;
        _this.xData = void 0;
        return _this;
        /* eslint-enable valid-jsdoc */
      }
      /* *
       *
       *  Functions
       *
       * */

      /* eslint-disable valid-jsdoc */

      /**
       * Create a single array of all points from all series
       * @private
       */


      PackedBubbleSeries.prototype.accumulateAllPoints = function (series) {
        var chart = series.chart,
            allDataPoints = [],
            i,
            j;

        for (i = 0; i < chart.series.length; i++) {
          series = chart.series[i];

          if (series.is('packedbubble') && // #13574
          series.visible || !chart.options.chart.ignoreHiddenSeries) {
            // add data to array only if series is visible
            for (j = 0; j < series.yData.length; j++) {
              allDataPoints.push([null, null, series.yData[j], series.index, j, {
                id: j,
                marker: {
                  radius: 0
                }
              }]);
            }
          }
        }

        return allDataPoints;
      };
      /**
       * Adding the basic layout to series points.
       * @private
       */


      PackedBubbleSeries.prototype.addLayout = function () {
        var series = this,
            layoutOptions = series.options.layoutAlgorithm,
            graphLayoutsStorage = series.chart.graphLayoutsStorage,
            graphLayoutsLookup = series.chart.graphLayoutsLookup,
            chartOptions = series.chart.options.chart,
            layout;

        if (!graphLayoutsStorage) {
          series.chart.graphLayoutsStorage = graphLayoutsStorage = {};
          series.chart.graphLayoutsLookup = graphLayoutsLookup = [];
        }

        layout = graphLayoutsStorage[layoutOptions.type];

        if (!layout) {
          layoutOptions.enableSimulation = !defined(chartOptions.forExport) ? layoutOptions.enableSimulation : !chartOptions.forExport;
          graphLayoutsStorage[layoutOptions.type] = layout = new H.layouts[layoutOptions.type]();
          layout.init(layoutOptions);
          graphLayoutsLookup.splice(layout.index, 0, layout);
        }

        series.layout = layout;
        series.points.forEach(function (node) {
          node.mass = 2;
          node.degree = 1;
          node.collisionNmb = 1;
        });
        layout.setArea(0, 0, series.chart.plotWidth, series.chart.plotHeight);
        layout.addElementsToCollection([series], layout.series);
        layout.addElementsToCollection(series.points, layout.nodes);
      };
      /**
       * Function responsible for adding series layout, used for parent nodes.
       * @private
       */


      PackedBubbleSeries.prototype.addSeriesLayout = function () {
        var series = this,
            layoutOptions = series.options.layoutAlgorithm,
            graphLayoutsStorage = series.chart.graphLayoutsStorage,
            graphLayoutsLookup = series.chart.graphLayoutsLookup,
            parentNodeOptions = merge(layoutOptions, layoutOptions.parentNodeOptions, {
          enableSimulation: series.layout.options.enableSimulation
        }),
            parentNodeLayout;
        parentNodeLayout = graphLayoutsStorage[layoutOptions.type + '-series'];

        if (!parentNodeLayout) {
          graphLayoutsStorage[layoutOptions.type + '-series'] = parentNodeLayout = new H.layouts[layoutOptions.type]();
          parentNodeLayout.init(parentNodeOptions);
          graphLayoutsLookup.splice(parentNodeLayout.index, 0, parentNodeLayout);
        }

        series.parentNodeLayout = parentNodeLayout;
        this.createParentNodes();
      };
      /**
       * The function responsible for calculating the parent node radius
       * based on the total surface of iniside-bubbles and the group BBox
       * @private
       */


      PackedBubbleSeries.prototype.calculateParentRadius = function () {
        var series = this,
            bBox,
            parentPadding = 20,
            minParentRadius = 20;
        bBox = series.seriesBox();
        series.parentNodeRadius = clamp(Math.sqrt(2 * series.parentNodeMass / Math.PI) + parentPadding, minParentRadius, bBox ? Math.max(Math.sqrt(Math.pow(bBox.width, 2) + Math.pow(bBox.height, 2)) / 2 + parentPadding, minParentRadius) : Math.sqrt(2 * series.parentNodeMass / Math.PI) + parentPadding);

        if (series.parentNode) {
          series.parentNode.marker.radius = series.parentNode.radius = series.parentNodeRadius;
        }
      };
      /**
       * Calculate min and max bubble value for radius calculation.
       * @private
       */


      PackedBubbleSeries.prototype.calculateZExtremes = function () {
        var chart = this.chart,
            zMin = this.options.zMin,
            zMax = this.options.zMax,
            valMin = Infinity,
            valMax = -Infinity;

        if (zMin && zMax) {
          return [zMin, zMax];
        } // it is needed to deal with null
        // and undefined values


        chart.series.forEach(function (s) {
          s.yData.forEach(function (p) {
            if (defined(p)) {
              if (p > valMax) {
                valMax = p;
              }

              if (p < valMin) {
                valMin = p;
              }
            }
          });
        });
        zMin = pick(zMin, valMin);
        zMax = pick(zMax, valMax);
        return [zMin, zMax];
      };
      /**
       * Check if two bubbles overlaps.
       * @private
       */


      PackedBubbleSeries.prototype.checkOverlap = function (bubble1, bubble2) {
        var diffX = bubble1[0] - bubble2[0],
            // diff of X center values
        diffY = bubble1[1] - bubble2[1],
            // diff of Y center values
        sumRad = bubble1[2] + bubble2[2]; // sum of bubble radius

        return Math.sqrt(diffX * diffX + diffY * diffY) - Math.abs(sumRad) < -0.001;
      };
      /**
       * Creating parent nodes for split series, in which all the bubbles
       * are rendered.
       * @private
       */


      PackedBubbleSeries.prototype.createParentNodes = function () {
        var series = this,
            chart = series.chart,
            parentNodeLayout = series.parentNodeLayout,
            nodeAdded,
            parentNode = series.parentNode,
            PackedBubblePoint = series.pointClass,
            layoutOptions = series.layout.options,
            parentMarkerOptions = {
          radius: series.parentNodeRadius,
          lineColor: series.color,
          fillColor: color(series.color).brighten(0.4).get()
        };

        if (layoutOptions.parentNodeOptions) {
          parentMarkerOptions = merge(layoutOptions.parentNodeOptions.marker || {}, parentMarkerOptions);
        }

        series.parentNodeMass = 0;
        series.points.forEach(function (p) {
          series.parentNodeMass += Math.PI * Math.pow(p.marker.radius, 2);
        });
        series.calculateParentRadius();
        parentNodeLayout.nodes.forEach(function (node) {
          if (node.seriesIndex === series.index) {
            nodeAdded = true;
          }
        });
        parentNodeLayout.setArea(0, 0, chart.plotWidth, chart.plotHeight);

        if (!nodeAdded) {
          if (!parentNode) {
            parentNode = new PackedBubblePoint().init(this, {
              mass: series.parentNodeRadius / 2,
              marker: parentMarkerOptions,
              dataLabels: {
                inside: false
              },
              states: {
                normal: {
                  marker: parentMarkerOptions
                },
                hover: {
                  marker: parentMarkerOptions
                }
              },
              dataLabelOnNull: true,
              degree: series.parentNodeRadius,
              isParentNode: true,
              seriesIndex: series.index
            });
          }

          if (series.parentNode) {
            parentNode.plotX = series.parentNode.plotX;
            parentNode.plotY = series.parentNode.plotY;
          }

          series.parentNode = parentNode;
          parentNodeLayout.addElementsToCollection([series], parentNodeLayout.series);
          parentNodeLayout.addElementsToCollection([parentNode], parentNodeLayout.nodes);
        }
      };
      /**
       * Function responsible for adding all the layouts to the chart.
       * @private
       */


      PackedBubbleSeries.prototype.deferLayout = function () {
        // TODO split layouts to independent methods
        var series = this,
            layoutOptions = series.options.layoutAlgorithm;

        if (!series.visible) {
          return;
        } // layout is using nodes for position calculation


        series.addLayout();

        if (layoutOptions.splitSeries) {
          series.addSeriesLayout();
        }
      };

      PackedBubbleSeries.prototype.destroy = function () {
        // Remove the series from all layouts series collections #11469
        if (this.chart.graphLayoutsLookup) {
          this.chart.graphLayoutsLookup.forEach(function (layout) {
            layout.removeElementFromCollection(this, layout.series);
          }, this);
        }

        if (this.parentNode && this.parentNodeLayout) {
          this.parentNodeLayout.removeElementFromCollection(this.parentNode, this.parentNodeLayout.nodes);

          if (this.parentNode.dataLabel) {
            this.parentNode.dataLabel = this.parentNode.dataLabel.destroy();
          }
        }

        Series.prototype.destroy.apply(this, arguments);
      };
      /**
       * Packedbubble has two separate collecions of nodes if split, render
       * dataLabels for both sets:
       * @private
       */


      PackedBubbleSeries.prototype.drawDataLabels = function () {
        var textPath = this.options.dataLabels.textPath,
            points = this.points; // Render node labels:

        Series.prototype.drawDataLabels.apply(this, arguments); // Render parentNode labels:

        if (this.parentNode) {
          this.parentNode.formatPrefix = 'parentNode';
          this.points = [this.parentNode];
          this.options.dataLabels.textPath = this.options.dataLabels.parentNodeTextPath;
          Series.prototype.drawDataLabels.apply(this, arguments); // Restore nodes

          this.points = points;
          this.options.dataLabels.textPath = textPath;
        }
      };
      /**
       * Create Background/Parent Nodes for split series.
       * @private
       */


      PackedBubbleSeries.prototype.drawGraph = function () {
        // if the series is not using layout, don't add parent nodes
        if (!this.layout || !this.layout.options.splitSeries) {
          return;
        }

        var series = this,
            chart = series.chart,
            parentAttribs = {},
            nodeMarker = this.layout.options.parentNodeOptions.marker,
            parentOptions = {
          fill: nodeMarker.fillColor || color(series.color).brighten(0.4).get(),
          opacity: nodeMarker.fillOpacity,
          stroke: nodeMarker.lineColor || series.color,
          'stroke-width': pick(nodeMarker.lineWidth, series.options.lineWidth)
        }; // create the group for parent Nodes if doesn't exist

        if (!this.parentNodesGroup) {
          series.parentNodesGroup = series.plotGroup('parentNodesGroup', 'parentNode', series.visible ? 'inherit' : 'hidden', 0.1, chart.seriesGroup);
          series.group.attr({
            zIndex: 2
          });
        }

        this.calculateParentRadius();
        parentAttribs = merge({
          x: series.parentNode.plotX - series.parentNodeRadius,
          y: series.parentNode.plotY - series.parentNodeRadius,
          width: series.parentNodeRadius * 2,
          height: series.parentNodeRadius * 2
        }, parentOptions);

        if (!series.parentNode.graphic) {
          series.graph = series.parentNode.graphic = chart.renderer.symbol(parentOptions.symbol).add(series.parentNodesGroup);
        }

        series.parentNode.graphic.attr(parentAttribs);
      };

      PackedBubbleSeries.prototype.drawTracker = function () {
        var series = this,

        /* chart = series.chart,
        pointer = chart.pointer,
        onMouseOver = function (e: PointerEvent): void {
            const point = pointer.getPointFromEvent(e);
        // undefined on graph in scatterchart
        if (typeof point !== 'undefined') {
            pointer.isDirectTouch = true;
            point.onMouseOver(e);
        }
        }, */
        parentNode = series.parentNode;
        var dataLabels;

        _super.prototype.drawTracker.call(this); // Add reference to the point


        if (parentNode) {
          dataLabels = isArray(parentNode.dataLabels) ? parentNode.dataLabels : parentNode.dataLabel ? [parentNode.dataLabel] : [];

          if (parentNode.graphic) {
            parentNode.graphic.element.point = parentNode;
          }

          dataLabels.forEach(function (dataLabel) {
            if (dataLabel.div) {
              dataLabel.div.point = parentNode;
            } else {
              dataLabel.element.point = parentNode;
            }
          });
        }
      };
      /**
       * Calculate radius of bubbles in series.
       * @private
       */


      PackedBubbleSeries.prototype.getPointRadius = function () {
        var series = this,
            chart = series.chart,
            plotWidth = chart.plotWidth,
            plotHeight = chart.plotHeight,
            seriesOptions = series.options,
            useSimulation = seriesOptions.useSimulation,
            smallestSize = Math.min(plotWidth, plotHeight),
            extremes = {},
            radii = [],
            allDataPoints = chart.allDataPoints,
            minSize,
            maxSize,
            value,
            radius,
            zExtremes;
        ['minSize', 'maxSize'].forEach(function (prop) {
          var length = parseInt(seriesOptions[prop], 10),
              isPercent = /%$/.test(seriesOptions[prop]);
          extremes[prop] = isPercent ? smallestSize * length / 100 : length * Math.sqrt(allDataPoints.length);
        });
        chart.minRadius = minSize = extremes.minSize / Math.sqrt(allDataPoints.length);
        chart.maxRadius = maxSize = extremes.maxSize / Math.sqrt(allDataPoints.length);
        zExtremes = useSimulation ? series.calculateZExtremes() : [minSize, maxSize];
        (allDataPoints || []).forEach(function (point, i) {
          value = useSimulation ? clamp(point[2], zExtremes[0], zExtremes[1]) : point[2];
          radius = series.getRadius(zExtremes[0], zExtremes[1], minSize, maxSize, value);

          if (radius === 0) {
            radius = null;
          }

          allDataPoints[i][2] = radius;
          radii.push(radius);
        });
        series.radii = radii;
      };

      PackedBubbleSeries.prototype.init = function () {
        Series.prototype.init.apply(this, arguments);
        /* eslint-disable no-invalid-this */
        // When one series is modified, the others need to be recomputed

        this.eventsToUnbind.push(addEvent(this, 'updatedData', function () {
          this.chart.series.forEach(function (s) {
            if (s.type === this.type) {
              s.isDirty = true;
            }
          }, this);
        }));
        /* eslint-enable no-invalid-this */

        return this;
      };
      /**
       * Mouse up action, finalizing drag&drop.
       * @private
       * @param {Highcharts.Point} point The point that event occured.
       */


      PackedBubbleSeries.prototype.onMouseUp = function (point) {
        if (point.fixedPosition && !point.removed) {
          var distanceXY_1,
              distanceR_1,
              layout_1 = this.layout,
              parentNodeLayout = this.parentNodeLayout;

          if (parentNodeLayout && layout_1.options.dragBetweenSeries) {
            parentNodeLayout.nodes.forEach(function (node) {
              if (point && point.marker && node !== point.series.parentNode) {
                distanceXY_1 = layout_1.getDistXY(point, node);
                distanceR_1 = layout_1.vectorLength(distanceXY_1) - node.marker.radius - point.marker.radius;

                if (distanceR_1 < 0) {
                  node.series.addPoint(merge(point.options, {
                    plotX: point.plotX,
                    plotY: point.plotY
                  }), false);
                  layout_1.removeElementFromCollection(point, layout_1.nodes);
                  point.remove();
                }
              }
            });
          }

          dragNodesMixin.onMouseUp.apply(this, arguments);
        }
      };
      /**
       * This is the main function responsible
       * for positioning all of the bubbles
       * allDataPoints - bubble array, in format [pixel x value,
       * pixel y value, radius,
       * related series index, related point index]
       * @private
       * @param {Array<Highcharts.PackedBubbleData>} allDataPoints All points from all series
       * @return {Array<Highcharts.PackedBubbleData>} Positions of all bubbles
       */


      PackedBubbleSeries.prototype.placeBubbles = function (allDataPoints) {
        var series = this,
            checkOverlap = series.checkOverlap,
            positionBubble = series.positionBubble,
            bubblePos = [],
            stage = 1,
            j = 0,
            k = 0,
            calculatedBubble,
            sortedArr,
            arr = [],
            i; // sort all points

        sortedArr = allDataPoints.sort(function (a, b) {
          return b[2] - a[2];
        });

        if (sortedArr.length) {
          // create first bubble in the middle of the chart
          bubblePos.push([[0, 0, sortedArr[0][2], sortedArr[0][3], sortedArr[0][4]] // point index
          ]); // 0 level bubble

          if (sortedArr.length > 1) {
            bubblePos.push([[0, 0 - sortedArr[1][2] - sortedArr[0][2], // move bubble above first one
            sortedArr[1][2], sortedArr[1][3], sortedArr[1][4]]]); // 1 level 1st bubble
            // first two already positioned so starting from 2

            for (i = 2; i < sortedArr.length; i++) {
              sortedArr[i][2] = sortedArr[i][2] || 1; // in case if radius is calculated as 0.

              calculatedBubble = positionBubble(bubblePos[stage][j], bubblePos[stage - 1][k], sortedArr[i]); // calculate initial bubble position

              if (checkOverlap(calculatedBubble, bubblePos[stage][0])) {
                /* if new bubble is overlapping with first bubble
                    * in current level (stage)
                    */
                bubblePos.push([]);
                k = 0;
                /* reset index of bubble, used for
                    * positioning the bubbles around it,
                    * we are starting from first bubble in next
                    * stage because we are changing level to higher
                    */

                bubblePos[stage + 1].push(positionBubble(bubblePos[stage][j], bubblePos[stage][0], sortedArr[i])); // (last bubble, 1. from curr stage, new bubble)

                stage++; // the new level is created, above current

                j = 0; // set the index of bubble in curr level to 0
              } else if (stage > 1 && bubblePos[stage - 1][k + 1] && checkOverlap(calculatedBubble, bubblePos[stage - 1][k + 1])) {
                /* if new bubble is overlapping with one of the prev
                    * stage bubbles, it means that - bubble, used for
                    * positioning the bubbles around it has changed
                    * so we need to recalculate it
                    */
                k++;
                bubblePos[stage].push(positionBubble(bubblePos[stage][j], bubblePos[stage - 1][k], sortedArr[i])); // (last bubble, prev stage bubble, new bubble)

                j++;
              } else {
                // simply add calculated bubble
                j++;
                bubblePos[stage].push(calculatedBubble);
              }
            }
          }

          series.chart.stages = bubblePos; // it may not be necessary but adding it just in case -
          // it is containing all of the bubble levels

          series.chart.rawPositions = [].concat.apply([], bubblePos); // bubble positions merged into one array

          series.resizeRadius();
          arr = series.chart.rawPositions;
        }

        return arr;
      };
      /**
       * Function that checks for a parentMarker and sets the correct opacity.
       * @private
       * @param {Highcharts.Pack} point
       * Candidate point for opacity correction.
       * @param {string} [state]
       * The point state, can be either `hover`, `select` or 'normal'. If
       * undefined, normal state is assumed.
       *
       * @return {Highcharts.SVGAttributes}
       * The presentational attributes to be set on the point.
       */


      PackedBubbleSeries.prototype.pointAttribs = function (point, state) {
        var options = this.options,
            hasParentMarker = point && point.isParentNode;
        var attr,
            fillOpacity,
            markerOptions = options.marker;

        if (hasParentMarker && options.layoutAlgorithm && options.layoutAlgorithm.parentNodeOptions) {
          markerOptions = options.layoutAlgorithm.parentNodeOptions.marker;
        }

        fillOpacity = markerOptions.fillOpacity;
        attr = Series.prototype.pointAttribs.call(this, point, state);

        if (fillOpacity !== 1) {
          attr['fill-opacity'] = fillOpacity;
        }

        return attr;
      };
      /**
       * Function that is adding one bubble based on positions and sizes of
       * two other bubbles, lastBubble is the last added bubble, newOrigin is
       * the bubble for positioning new bubbles. nextBubble is the curently
       * added bubble for which we are calculating positions
       * @private
       * @param {Array<number>} lastBubble The closest last bubble
       * @param {Array<number>} newOrigin New bubble
       * @param {Array<number>} nextBubble The closest next bubble
       * @return {Array<number>} Bubble with correct positions
       */


      PackedBubbleSeries.prototype.positionBubble = function (lastBubble, newOrigin, nextBubble) {
        var sqrt = Math.sqrt,
            asin = Math.asin,
            acos = Math.acos,
            pow = Math.pow,
            abs = Math.abs,
            distance = sqrt( // dist between lastBubble and newOrigin
        pow(lastBubble[0] - newOrigin[0], 2) + pow(lastBubble[1] - newOrigin[1], 2)),
            alfa = acos( // from cosinus theorem: alfa is an angle used for
        // calculating correct position
        (pow(distance, 2) + pow(nextBubble[2] + newOrigin[2], 2) - pow(nextBubble[2] + lastBubble[2], 2)) / (2 * (nextBubble[2] + newOrigin[2]) * distance)),
            beta = asin( // from sinus theorem.
        abs(lastBubble[0] - newOrigin[0]) / distance),
            // providing helping variables, related to angle between
        // lastBubble and newOrigin
        gamma = lastBubble[1] - newOrigin[1] < 0 ? 0 : Math.PI,
            // if new origin y is smaller than last bubble y value
        // (2 and 3 quarter),
        // add Math.PI to final angle
        delta = (lastBubble[0] - newOrigin[0]) * (lastBubble[1] - newOrigin[1]) < 0 ? 1 : -1,
            // (1st and 3rd quarter)
        finalAngle = gamma + alfa + beta * delta,
            cosA = Math.cos(finalAngle),
            sinA = Math.sin(finalAngle),
            posX = newOrigin[0] + (newOrigin[2] + nextBubble[2]) * sinA,
            // center of new origin + (radius1 + radius2) * sinus A
        posY = newOrigin[1] - (newOrigin[2] + nextBubble[2]) * cosA;
        return [posX, posY, nextBubble[2], nextBubble[3], nextBubble[4]]; // the same as described before
      };

      PackedBubbleSeries.prototype.render = function () {
        var series = this,
            dataLabels = [];
        Series.prototype.render.apply(this, arguments); // #10823 - dataLabels should stay visible
        // when enabled allowOverlap.

        if (!series.options.dataLabels.allowOverlap) {
          series.data.forEach(function (point) {
            if (isArray(point.dataLabels)) {
              point.dataLabels.forEach(function (dataLabel) {
                dataLabels.push(dataLabel);
              });
            }
          }); // Only hide overlapping dataLabels for layouts that
          // use simulation. Spiral packedbubble don't need
          // additional dataLabel hiding on every simulation step

          if (series.options.useSimulation) {
            series.chart.hideOverlappingLabels(dataLabels);
          }
        }
      };
      /**
       * The function responsible for resizing the bubble radius.
       * In shortcut: it is taking the initially
       * calculated positions of bubbles. Then it is calculating the min max
       * of both dimensions, creating something in shape of bBox.
       * The comparison of bBox and the size of plotArea
       * (later it may be also the size set by customer) is giving the
       * value how to recalculate the radius so it will match the size
       * @private
       */


      PackedBubbleSeries.prototype.resizeRadius = function () {
        var chart = this.chart,
            positions = chart.rawPositions,
            min = Math.min,
            max = Math.max,
            plotLeft = chart.plotLeft,
            plotTop = chart.plotTop,
            chartHeight = chart.plotHeight,
            chartWidth = chart.plotWidth,
            minX,
            maxX,
            minY,
            maxY,
            radius,
            bBox,
            spaceRatio,
            smallerDimension,
            i;
        minX = minY = Number.POSITIVE_INFINITY; // set initial values

        maxX = maxY = Number.NEGATIVE_INFINITY;

        for (i = 0; i < positions.length; i++) {
          radius = positions[i][2];
          minX = min(minX, positions[i][0] - radius); // (x center-radius) is the min x value used by specific bubble

          maxX = max(maxX, positions[i][0] + radius);
          minY = min(minY, positions[i][1] - radius);
          maxY = max(maxY, positions[i][1] + radius);
        }

        bBox = [maxX - minX, maxY - minY];
        spaceRatio = [(chartWidth - plotLeft) / bBox[0], (chartHeight - plotTop) / bBox[1]];
        smallerDimension = min.apply([], spaceRatio);

        if (Math.abs(smallerDimension - 1) > 1e-10) {
          // if bBox is considered not the same width as possible size
          for (i = 0; i < positions.length; i++) {
            positions[i][2] *= smallerDimension;
          }

          this.placeBubbles(positions);
        } else {
          /** if no radius recalculation is needed, we need to position
           * the whole bubbles in center of chart plotarea
           * for this, we are adding two parameters,
           * diffY and diffX, that are related to differences
           * between the initial center and the bounding box
           */
          chart.diffY = chartHeight / 2 + plotTop - minY - (maxY - minY) / 2;
          chart.diffX = chartWidth / 2 + plotLeft - minX - (maxX - minX) / 2;
        }
      };
      /**
       * The function responsible for calculating series bubble' s bBox.
       * Needed because of exporting failure when useSimulation
       * is set to false
       * @private
       */


      PackedBubbleSeries.prototype.seriesBox = function () {
        var series = this,
            chart = series.chart,
            data = series.data,
            max = Math.max,
            min = Math.min,
            radius,
            // bBox = [xMin, xMax, yMin, yMax]
        bBox = [chart.plotLeft, chart.plotLeft + chart.plotWidth, chart.plotTop, chart.plotTop + chart.plotHeight];
        data.forEach(function (p) {
          if (defined(p.plotX) && defined(p.plotY) && p.marker.radius) {
            radius = p.marker.radius;
            bBox[0] = min(bBox[0], p.plotX - radius);
            bBox[1] = max(bBox[1], p.plotX + radius);
            bBox[2] = min(bBox[2], p.plotY - radius);
            bBox[3] = max(bBox[3], p.plotY + radius);
          }
        });
        return isNumber(bBox.width / bBox.height) ? bBox : null;
      };
      /**
       * Needed because of z-indexing issue if point is added in series.group
       * @private
       */


      PackedBubbleSeries.prototype.setVisible = function () {
        var series = this;
        Series.prototype.setVisible.apply(series, arguments);

        if (series.parentNodeLayout && series.graph) {
          if (series.visible) {
            series.graph.show();

            if (series.parentNode.dataLabel) {
              series.parentNode.dataLabel.show();
            }
          } else {
            series.graph.hide();
            series.parentNodeLayout.removeElementFromCollection(series.parentNode, series.parentNodeLayout.nodes);

            if (series.parentNode.dataLabel) {
              series.parentNode.dataLabel.hide();
            }
          }
        } else if (series.layout) {
          if (series.visible) {
            series.layout.addElementsToCollection(series.points, series.layout.nodes);
          } else {
            series.points.forEach(function (node) {
              series.layout.removeElementFromCollection(node, series.layout.nodes);
            });
          }
        }
      };
      /**
       * Extend the base translate method to handle bubble size,
       * and correct positioning them.
       * @private
       */


      PackedBubbleSeries.prototype.translate = function () {
        var series = this,
            chart = series.chart,
            data = series.data,
            index = series.index,
            point,
            radius,
            positions,
            i,
            useSimulation = series.options.useSimulation;
        series.processedXData = series.xData;
        series.generatePoints(); // merged data is an array with all of the data from all series

        if (!defined(chart.allDataPoints)) {
          chart.allDataPoints = series.accumulateAllPoints(series); // calculate radius for all added data

          series.getPointRadius();
        } // after getting initial radius, calculate bubble positions


        if (useSimulation) {
          positions = chart.allDataPoints;
        } else {
          positions = series.placeBubbles(chart.allDataPoints);
          series.options.draggable = false;
        } // Set the shape and arguments to be picked up in drawPoints


        for (i = 0; i < positions.length; i++) {
          if (positions[i][3] === index) {
            // update the series points with the val from positions
            // array
            point = data[positions[i][4]];
            radius = pick(positions[i][2], void 0);

            if (!useSimulation) {
              point.plotX = positions[i][0] - chart.plotLeft + chart.diffX;
              point.plotY = positions[i][1] - chart.plotTop + chart.diffY;
            }

            if (isNumber(radius)) {
              point.marker = extend(point.marker, {
                radius: radius,
                width: 2 * radius,
                height: 2 * radius
              });
              point.radius = radius;
            }
          }
        }

        if (useSimulation) {
          series.deferLayout();
        }

        fireEvent(series, 'afterTranslate');
      };
      /**
       * A packed bubble series is a two dimensional series type, where each point
       * renders a value in X, Y position. Each point is drawn as a bubble
       * where the bubbles don't overlap with each other and the radius
       * of the bubble relates to the value.
       *
       * @sample highcharts/demo/packed-bubble/
       *         Packed bubble chart
       * @sample highcharts/demo/packed-bubble-split/
       *         Split packed bubble chart
        * @extends      plotOptions.bubble
       * @excluding    connectEnds, connectNulls, cropThreshold, dragDrop, jitter,
       *               keys, pointPlacement, sizeByAbsoluteValue, step, xAxis,
       *               yAxis, zMax, zMin, dataSorting, boostThreshold,
       *               boostBlending
       * @product      highcharts
       * @since        7.0.0
       * @requires     highcharts-more
       * @optionparent plotOptions.packedbubble
       */


      PackedBubbleSeries.defaultOptions = merge(BubbleSeries.defaultOptions, {
        /**
         * Minimum bubble size. Bubbles will automatically size between the
         * `minSize` and `maxSize` to reflect the value of each bubble.
         * Can be either pixels (when no unit is given), or a percentage of
         * the smallest one of the plot width and height, divided by the square
         * root of total number of points.
         *
         * @sample highcharts/plotoptions/bubble-size/
         *         Bubble size
         *
         * @type {number|string}
         *
         * @private
         */
        minSize: '10%',

        /**
         * Maximum bubble size. Bubbles will automatically size between the
         * `minSize` and `maxSize` to reflect the value of each bubble.
         * Can be either pixels (when no unit is given), or a percentage of
         * the smallest one of the plot width and height, divided by the square
         * root of total number of points.
         *
         * @sample highcharts/plotoptions/bubble-size/
         *         Bubble size
         *
         * @type {number|string}
         *
         * @private
         */
        maxSize: '50%',
        sizeBy: 'area',
        zoneAxis: 'y',
        crisp: false,
        tooltip: {
          pointFormat: 'Value: {point.value}'
        },

        /**
         * Flag to determine if nodes are draggable or not. Available for
         * graph with useSimulation set to true only.
         *
         * @since 7.1.0
         *
         * @private
         */
        draggable: true,

        /**
         * An option is giving a possibility to choose between using simulation
         * for calculating bubble positions. These reflects in both animation
         * and final position of bubbles. Simulation is also adding options to
         * the series graph based on used layout. In case of big data sets, with
         * any performance issues, it is possible to disable animation and pack
         * bubble in a simple circular way.
         *
         * @sample highcharts/series-packedbubble/spiral/
         *         useSimulation set to false
         *
         * @since 7.1.0
         *
         * @private
         */
        useSimulation: true,

        /**
         * Series options for parent nodes.
         *
         * @since 8.1.1
         *
         * @private
         */
        parentNode: {
          /**
           * Allow this series' parent nodes to be selected
           * by clicking on the graph.
           *
           * @since 8.1.1
           */
          allowPointSelect: false
        },

        /**
        /**
         *
         * @declare Highcharts.SeriesPackedBubbleDataLabelsOptionsObject
         *
         * @private
         */
        dataLabels: {
          /**
           * The
           * [format string](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting)
           * specifying what to show for _node_ in the networkgraph. In v7.0
           * defaults to `{key}`, since v7.1 defaults to `undefined` and
           * `formatter` is used instead.
           *
           * @type      {string}
           * @since     7.0.0
           * @apioption plotOptions.packedbubble.dataLabels.format
           */
          // eslint-disable-next-line valid-jsdoc

          /**
           * Callback JavaScript function to format the data label for a node.
           * Note that if a `format` is defined, the format takes precedence
           * and the formatter is ignored.
           *
           * @type  {Highcharts.SeriesPackedBubbleDataLabelsFormatterCallbackFunction}
           * @since 7.0.0
           */
          formatter: function () {
            var numberFormatter = this.series.chart.numberFormatter;
            var value = this.point.value;
            return isNumber(value) ? numberFormatter(value, -1) : '';
          },

          /**
           * @type      {string}
           * @since     7.1.0
           * @apioption plotOptions.packedbubble.dataLabels.parentNodeFormat
           */
          // eslint-disable-next-line valid-jsdoc

          /**
           * @type  {Highcharts.SeriesPackedBubbleDataLabelsFormatterCallbackFunction}
           * @since 7.1.0
           */
          parentNodeFormatter: function () {
            return this.name;
          },

          /**
           * @sample {highcharts} highcharts/series-packedbubble/packed-dashboard
           *         Dashboard with dataLabels on parentNodes
           *
           * @declare Highcharts.SeriesPackedBubbleDataLabelsTextPathOptionsObject
           * @since   7.1.0
           */
          parentNodeTextPath: {
            /**
             * Presentation attributes for the text path.
             *
             * @type      {Highcharts.SVGAttributes}
             * @since     7.1.0
             * @apioption plotOptions.packedbubble.dataLabels.attributes
             */

            /**
             * Enable or disable `textPath` option for link's or marker's
             * data labels.
             *
             * @since 7.1.0
             */
            enabled: true
          },

          /**
           * Options for a _node_ label text which should follow marker's
           * shape.
           *
           * **Note:** Only SVG-based renderer supports this option.
           *
           * @extends   plotOptions.series.dataLabels.textPath
           * @apioption plotOptions.packedbubble.dataLabels.textPath
           */
          padding: 0,
          style: {
            transition: 'opacity 2000ms'
          }
        },

        /**
         * Options for layout algorithm when simulation is enabled. Inside there
         * are options to change the speed, padding, initial bubbles positions
         * and more.
         *
         * @extends   plotOptions.networkgraph.layoutAlgorithm
         * @excluding approximation, attractiveForce, repulsiveForce, theta
         * @since     7.1.0
         *
         * @private
         */
        layoutAlgorithm: {
          /**
           * Initial layout algorithm for positioning nodes. Can be one of
           * the built-in options ("circle", "random") or a function where
           * positions should be set on each node (`this.nodes`) as
           * `node.plotX` and `node.plotY`.
           *
           * @sample highcharts/series-networkgraph/initial-positions/
           *         Initial positions with callback
           *
           * @type {"circle"|"random"|Function}
           */
          initialPositions: 'circle',

          /**
           * @sample highcharts/series-packedbubble/initial-radius/
           *         Initial radius set to 200
           *
           * @extends   plotOptions.networkgraph.layoutAlgorithm.initialPositionRadius
           * @excluding states
           */
          initialPositionRadius: 20,

          /**
           * The distance between two bubbles, when the algorithm starts to
           * treat two bubbles as overlapping. The `bubblePadding` is also the
           * expected distance between all the bubbles on simulation end.
           */
          bubblePadding: 5,

          /**
           * Whether bubbles should interact with their parentNode to keep
           * them inside.
           */
          parentNodeLimit: false,

          /**
           * Whether series should interact with each other or not. When
           * `parentNodeLimit` is set to true, thi option should be set to
           * false to avoid sticking points in wrong series parentNode.
           */
          seriesInteraction: true,

          /**
           * In case of split series, this option allows user to drag and
           * drop points between series, for changing point related series.
           *
           * @sample highcharts/series-packedbubble/packed-dashboard/
           *         Example of drag'n drop bubbles for bubble kanban
           */
          dragBetweenSeries: false,

          /**
           * Layout algorithm options for parent nodes.
           *
           * @extends   plotOptions.networkgraph.layoutAlgorithm
           * @excluding approximation, attractiveForce, enableSimulation,
           *            repulsiveForce, theta
           */
          parentNodeOptions: {
            maxIterations: 400,
            gravitationalConstant: 0.03,
            maxSpeed: 50,
            initialPositionRadius: 100,
            seriesInteraction: true,

            /**
             * Styling options for parentNodes markers. Similar to
             * line.marker options.
             *
             * @sample highcharts/series-packedbubble/parentnode-style/
             *         Bubble size
             *
             * @extends   plotOptions.series.marker
             * @excluding states
             */
            marker: {
              fillColor: null,
              fillOpacity: 1,
              lineWidth: null,
              lineColor: null,
              symbol: 'circle'
            }
          },
          enableSimulation: true,

          /**
           * Type of the algorithm used when positioning bubbles.
           * @ignore-option
           */
          type: 'packedbubble',

          /**
           * Integration type. Integration determines how forces are applied
           * on particles. The `packedbubble` integration is based on
           * the networkgraph `verlet` integration, where the new position
           * is based on a previous position without velocity:
           * `newPosition += previousPosition - newPosition`.
           *
           * @sample highcharts/series-networkgraph/forces/
           *
           * @ignore-option
           */
          integration: 'packedbubble',
          maxIterations: 1000,

          /**
           * Whether to split series into individual groups or to mix all
           * series together.
           *
           * @since   7.1.0
           * @default false
           */
          splitSeries: false,

          /**
           * Max speed that node can get in one iteration. In terms of
           * simulation, it's a maximum translation (in pixels) that a node
           * can move (in both, x and y, dimensions). While `friction` is
           * applied on all nodes, max speed is applied only for nodes that
           * move very fast, for example small or disconnected ones.
           *
           * @see [layoutAlgorithm.integration](#series.networkgraph.layoutAlgorithm.integration)
           *
           * @see [layoutAlgorithm.friction](#series.networkgraph.layoutAlgorithm.friction)
           */
          maxSpeed: 5,
          gravitationalConstant: 0.01,
          friction: -0.981
        }
      });
      return PackedBubbleSeries;
    }(BubbleSeries);

    extend(PackedBubbleSeries.prototype, {
      alignDataLabel: Series.prototype.alignDataLabel,
      axisTypes: [],
      directTouch: true,

      /**
       * Array of internal forces. Each force should be later defined in
       * integrations.js.
       * @private
       */
      forces: ['barycenter', 'repulsive'],

      /**
       * An internal option used for allowing nodes dragging.
       * @private
       */
      hasDraggableNodes: true,
      isCartesian: false,
      noSharedTooltip: true,

      /**
       * Mouse down action, initializing drag&drop mode.
       * @private
       * @param {global.Event} event Browser event, before normalization.
       * @param {Highcharts.Point} point The point that event occured.
       */
      onMouseDown: dragNodesMixin.onMouseDown,

      /**
       * Mouse move action during drag&drop.
       * @private
       * @param {global.Event} event Browser event, before normalization.
       * @param {Highcharts.Point} point The point that event occured.
       */
      onMouseMove: dragNodesMixin.onMouseMove,
      pointArrayMap: ['value'],
      pointClass: PackedBubblePoint,
      pointValKey: 'value',

      /**
       * Redraw halo on mousemove during the drag&drop action.
       * @private
       * @param {Highcharts.Point} point The point that should show halo.
       */
      redrawHalo: dragNodesMixin.redrawHalo,
      requireSorting: false,
      // solving #12287
      searchPoint: H.noop,
      trackerGroups: ['group', 'dataLabelsGroup', 'parentNodesGroup']
    });
    SeriesRegistry.registerSeriesType('packedbubble', PackedBubbleSeries);
    /* *
     *
     *  Default Export
     *
     * */

    /* *
     *
     *  API Declarations
     *
     * */

    /**
     * Formatter callback function.
     *
     * @callback Highcharts.SeriesPackedBubbleDataLabelsFormatterCallbackFunction
     *
     * @param {Highcharts.SeriesPackedBubbleDataLabelsFormatterContextObject} this
     *        Data label context to format
     *
     * @return {string}
     *         Formatted data label text
     */

    /**
     * Context for the formatter function.
     *
     * @interface Highcharts.SeriesPackedBubbleDataLabelsFormatterContextObject
     * @extends Highcharts.PointLabelObject
     * @since 7.0.0
     */

    /**
    * The color of the node.
    * @name Highcharts.SeriesPackedBubbleDataLabelsFormatterContextObject#color
    * @type {Highcharts.ColorString}
    * @since 7.0.0
    */

    /**
    * The point (node) object. The node name, if defined, is available through
    * `this.point.name`. Arrays: `this.point.linksFrom` and `this.point.linksTo`
    * contains all nodes connected to this point.
    * @name Highcharts.SeriesPackedBubbleDataLabelsFormatterContextObject#point
    * @type {Highcharts.Point}
    * @since 7.0.0
    */

    /**
    * The ID of the node.
    * @name Highcharts.SeriesPackedBubbleDataLabelsFormatterContextObject#key
    * @type {string}
    * @since 7.0.0
    */

    ''; // detach doclets above

    /* *
     *
     *  API Options
     *
     * */

    /**
     * A `packedbubble` series. If the [type](#series.packedbubble.type) option is
     * not specified, it is inherited from [chart.type](#chart.type).
     *
     * @type      {Object}
     * @extends   series,plotOptions.packedbubble
     * @excluding cropThreshold, dataParser, dataSorting, dataURL, dragDrop, stack,
     *            boostThreshold, boostBlending
     * @product   highcharts
     * @requires  highcharts-more
     * @apioption series.packedbubble
     */

    /**
     * An array of data points for the series. For the `packedbubble` series type,
     * points can be given in the following ways:
     *
     * 1.  An array of `values`.
     *
     *  ```js
     *     data: [5, 1, 20]
     *  ```
     *
     * 2.  An array of objects with named values. The objects are point
     * configuration objects as seen below. If the total number of data points
     * exceeds the series' [turboThreshold](#series.packedbubble.turboThreshold),
     * this option is not available.
     *
     *  ```js
     *     data: [{
     *         value: 1,
     *         name: "Point2",
     *         color: "#00FF00"
     *     }, {
     *         value: 5,
     *         name: "Point1",
     *         color: "#FF00FF"
     *     }]
     *  ```
     *
     * @type      {Array<Object|Array>}
     * @extends   series.line.data
     * @excluding marker, x, y
     * @sample    {highcharts} highcharts/series/data-array-of-objects/
     *            Config objects
     * @product   highcharts
     * @apioption series.packedbubble.data
     */

    /**
     * @type      {Highcharts.SeriesPackedBubbleDataLabelsOptionsObject|Array<Highcharts.SeriesPackedBubbleDataLabelsOptionsObject>}
     * @product   highcharts
     * @apioption series.packedbubble.data.dataLabels
     */

    /**
     * @excluding enabled,enabledThreshold,height,radius,width
     * @product   highcharts
     * @apioption series.packedbubble.marker
     */

    ''; // adds doclets above to transpiled file

    return PackedBubbleSeries;
  });

  _registerModule(_modules, 'Series/Polygon/PolygonSeries.js', [_modules['Core/Globals.js'], _modules['Core/Legend/LegendSymbol.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (H, LegendSymbol, SeriesRegistry, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var noop = H.noop;
    var Series = SeriesRegistry.series,
        _a = SeriesRegistry.seriesTypes,
        AreaSeries = _a.area,
        LineSeries = _a.line,
        ScatterSeries = _a.scatter;
    var extend = U.extend,
        merge = U.merge;
    /* *
     *
     * Class
     *
     * */

    var PolygonSeries =
    /** @class */
    function (_super) {
      __extends(PolygonSeries, _super);

      function PolygonSeries() {
        /* *
         *
         * Static properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.data = void 0;
        _this.options = void 0;
        _this.points = void 0;
        return _this;
      }
      /* *
       *
       * Functions
       *
       * */


      PolygonSeries.prototype.getGraphPath = function () {
        var graphPath = LineSeries.prototype.getGraphPath.call(this),
            i = graphPath.length + 1; // Close all segments

        while (i--) {
          if ((i === graphPath.length || graphPath[i][0] === 'M') && i > 0) {
            graphPath.splice(i, 0, ['Z']);
          }
        }

        this.areaPath = graphPath;
        return graphPath;
      };

      PolygonSeries.prototype.drawGraph = function () {
        // Hack into the fill logic in area.drawGraph
        this.options.fillColor = this.color;
        AreaSeries.prototype.drawGraph.call(this);
      };
      /**
       * A polygon series can be used to draw any freeform shape in the cartesian
       * coordinate system. A fill is applied with the `color` option, and
       * stroke is applied through `lineWidth` and `lineColor` options.
       *
       * @sample {highcharts} highcharts/demo/polygon/
       *         Polygon
       * @sample {highstock} highcharts/demo/polygon/
       *         Polygon
       *
       * @extends      plotOptions.scatter
       * @since        4.1.0
       * @excluding    jitter, softThreshold, threshold, cluster, boostThreshold,
       *               boostBlending
       * @product      highcharts highstock
       * @requires     highcharts-more
       * @optionparent plotOptions.polygon
       */


      PolygonSeries.defaultOptions = merge(ScatterSeries.defaultOptions, {
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false
            }
          }
        },
        stickyTracking: false,
        tooltip: {
          followPointer: true,
          pointFormat: ''
        },
        trackByArea: true
      });
      return PolygonSeries;
    }(ScatterSeries);

    extend(PolygonSeries.prototype, {
      type: 'polygon',
      drawLegendSymbol: LegendSymbol.drawRectangle,
      drawTracker: Series.prototype.drawTracker,
      setStackedPoints: noop // No stacking points on polygons (#5310)

    });
    SeriesRegistry.registerSeriesType('polygon', PolygonSeries);
    /* *
     *
     * Export
     *
     * */

    /* *
     *
     * API Options
     *
     * */

    /**
     * A `polygon` series. If the [type](#series.polygon.type) option is
     * not specified, it is inherited from [chart.type](#chart.type).
     *
     * @extends   series,plotOptions.polygon
     * @excluding dataParser, dataURL, stack, boostThreshold, boostBlending
     * @product   highcharts highstock
     * @requires  highcharts-more
     * @apioption series.polygon
     */

    /**
     * An array of data points for the series. For the `polygon` series
     * type, points can be given in the following ways:
     *
     * 1. An array of numerical values. In this case, the numerical values will be
     *    interpreted as `y` options. The `x` values will be automatically
     *    calculated, either starting at 0 and incremented by 1, or from
     *    `pointStart` and `pointInterval` given in the series options. If the axis
     *    has categories, these will be used. Example:
     *    ```js
     *    data: [0, 5, 3, 5]
     *    ```
     *
     * 2. An array of arrays with 2 values. In this case, the values correspond to
     *    `x,y`. If the first value is a string, it is applied as the name of the
     *    point, and the `x` value is inferred.
     *    ```js
     *    data: [
     *        [0, 10],
     *        [1, 3],
     *        [2, 1]
     *    ]
     *    ```
     *
     * 3. An array of objects with named values. The following snippet shows only a
     *    few settings, see the complete options set below. If the total number of
     *    data points exceeds the series'
     *    [turboThreshold](#series.polygon.turboThreshold), this option is not
     *    available.
     *    ```js
     *    data: [{
     *        x: 1,
     *        y: 1,
     *        name: "Point2",
     *        color: "#00FF00"
     *    }, {
     *        x: 1,
     *        y: 8,
     *        name: "Point1",
     *        color: "#FF00FF"
     *    }]
     *    ```
     *
     * @sample {highcharts} highcharts/chart/reflow-true/
     *         Numerical values
     * @sample {highcharts} highcharts/series/data-array-of-arrays/
     *         Arrays of numeric x and y
     * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
     *         Arrays of datetime x and y
     * @sample {highcharts} highcharts/series/data-array-of-name-value/
     *         Arrays of point.name and y
     * @sample {highcharts} highcharts/series/data-array-of-objects/
     *         Config objects
     *
     * @type      {Array<number|Array<(number|string),(number|null)>|null|*>}
     * @extends   series.line.data
     * @product   highcharts highstock
     * @apioption series.polygon.data
     */

    ''; // adds doclets above to transpiled file

    return PolygonSeries;
  });

  _registerModule(_modules, 'Core/Axis/WaterfallAxis.js', [_modules['Extensions/Stacking.js'], _modules['Core/Utilities.js']], function (StackItem, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var addEvent = U.addEvent,
        objectEach = U.objectEach;
    /**
     * @private
     */

    var WaterfallAxis;

    (function (WaterfallAxis) {
      /* *
       *
       *  Interfaces
       *
       * */

      /* *
       *
       *  Classes
       *
       * */

      /**
       * @private
       */
      var Composition =
      /** @class */
      function () {
        /* eslint-disable no-invalid-this, valid-jsdoc */

        /* *
         *
         *  Constructors
         *
         * */

        /**
         * @private
         */
        function Composition(axis) {
          this.axis = axis;
          this.stacks = {
            changed: false
          };
        }
        /* *
         *
         *  Functions
         *
         * */

        /**
         * Calls StackItem.prototype.render function that creates and renders
         * stack total label for each waterfall stack item.
         *
         * @private
         * @function Highcharts.Axis#renderWaterfallStackTotals
         */


        Composition.prototype.renderStackTotals = function () {
          var yAxis = this.axis,
              waterfallStacks = yAxis.waterfall.stacks,
              stackTotalGroup = yAxis.stacking && yAxis.stacking.stackTotalGroup,
              dummyStackItem = new StackItem(yAxis, yAxis.options.stackLabels, false, 0, void 0);
          this.dummyStackItem = dummyStackItem; // Render each waterfall stack total

          objectEach(waterfallStacks, function (type) {
            objectEach(type, function (stackItem) {
              dummyStackItem.total = stackItem.stackTotal;

              if (stackItem.label) {
                dummyStackItem.label = stackItem.label;
              }

              StackItem.prototype.render.call(dummyStackItem, stackTotalGroup);
              stackItem.label = dummyStackItem.label;
              delete dummyStackItem.label;
            });
          });
          dummyStackItem.total = null;
        };

        return Composition;
      }();

      WaterfallAxis.Composition = Composition;
      /* *
       *
       *  Functions
       *
       * */

      /* eslint-disable no-invalid-this, valid-jsdoc */

      /**
       * @private
       */

      function compose(AxisClass, ChartClass) {
        addEvent(AxisClass, 'init', onInit);
        addEvent(AxisClass, 'afterBuildStacks', onAfterBuildStacks);
        addEvent(AxisClass, 'afterRender', onAfterRender);
        addEvent(ChartClass, 'beforeRedraw', onBeforeRedraw);
      }

      WaterfallAxis.compose = compose;
      /**
       * @private
       */

      function onAfterBuildStacks() {
        var axis = this;
        var stacks = axis.waterfall.stacks;

        if (stacks) {
          stacks.changed = false;
          delete stacks.alreadyChanged;
        }
      }
      /**
       * @private
       */


      function onAfterRender() {
        var axis = this;
        var stackLabelOptions = axis.options.stackLabels;

        if (stackLabelOptions && stackLabelOptions.enabled && axis.waterfall.stacks) {
          axis.waterfall.renderStackTotals();
        }
      }
      /**
       * @private
       */


      function onBeforeRedraw() {
        var axes = this.axes,
            series = this.series,
            i = series.length;

        while (i--) {
          if (series[i].options.stacking) {
            axes.forEach(function (axis) {
              if (!axis.isXAxis) {
                axis.waterfall.stacks.changed = true;
              }
            });
            i = 0;
          }
        }
      }
      /**
       * @private
       */


      function onInit() {
        var axis = this;

        if (!axis.waterfall) {
          axis.waterfall = new Composition(axis);
        }
      }
    })(WaterfallAxis || (WaterfallAxis = {}));
    /* *
     *
     *  Default Export
     *
     * */


    return WaterfallAxis;
  });

  _registerModule(_modules, 'Series/Waterfall/WaterfallPoint.js', [_modules['Series/Column/ColumnSeries.js'], _modules['Core/Series/Point.js'], _modules['Core/Utilities.js']], function (ColumnSeries, Point, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var isNumber = U.isNumber;
    /* *
     *
     * Class
     *
     * */

    var WaterfallPoint =
    /** @class */
    function (_super) {
      __extends(WaterfallPoint, _super);

      function WaterfallPoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.options = void 0;
        _this.series = void 0;
        return _this;
      }
      /* *
       *
       * Functions
       *
       * */


      WaterfallPoint.prototype.getClassName = function () {
        var className = Point.prototype.getClassName.call(this);

        if (this.isSum) {
          className += ' highcharts-sum';
        } else if (this.isIntermediateSum) {
          className += ' highcharts-intermediate-sum';
        }

        return className;
      }; // Pass the null test in ColumnSeries.translate.


      WaterfallPoint.prototype.isValid = function () {
        return isNumber(this.y) || this.isSum || Boolean(this.isIntermediateSum);
      };

      return WaterfallPoint;
    }(ColumnSeries.prototype.pointClass);
    /* *
     *
     * Export
     *
     * */


    return WaterfallPoint;
  });

  _registerModule(_modules, 'Series/Waterfall/WaterfallSeries.js', [_modules['Core/Axis/Axis.js'], _modules['Core/Chart/Chart.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js'], _modules['Core/Axis/WaterfallAxis.js'], _modules['Series/Waterfall/WaterfallPoint.js']], function (Axis, Chart, SeriesRegistry, U, WaterfallAxis, WaterfallPoint) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var _a = SeriesRegistry.seriesTypes,
        ColumnSeries = _a.column,
        LineSeries = _a.line;
    var arrayMax = U.arrayMax,
        arrayMin = U.arrayMin,
        correctFloat = U.correctFloat,
        extend = U.extend,
        isNumber = U.isNumber,
        merge = U.merge,
        objectEach = U.objectEach,
        pick = U.pick;
    /**
     * Returns true if the key is a direct property of the object.
     * @private
     * @param {*} obj
     * Object with property to test
     * @param {string} key
     * Property key to test
     * @return {boolean}
     * Whether it is a direct property
     */

    function ownProp(obj, key) {
      return Object.hasOwnProperty.call(obj, key);
    }
    /* eslint-disable no-invalid-this, valid-jsdoc */
    // eslint-disable-next-line valid-jsdoc

    /**
     * Waterfall series type.
     *
     * @private
     */


    var WaterfallSeries =
    /** @class */
    function (_super) {
      __extends(WaterfallSeries, _super);

      function WaterfallSeries() {
        /* *
         *
         * Static properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* *
         *
         * Properties
         *
         * */


        _this.chart = void 0;
        _this.data = void 0;
        _this.options = void 0;
        _this.points = void 0;
        _this.stackedYNeg = void 0;
        _this.stackedYPos = void 0;
        _this.stackKey = void 0;
        _this.xData = void 0;
        _this.yAxis = void 0;
        _this.yData = void 0;
        return _this;
      }
      /* *
       *
       * Functions
       *
       * */
      // After generating points, set y-values for all sums.


      WaterfallSeries.prototype.generatePoints = function () {
        var point, len, i, y; // Parent call:

        ColumnSeries.prototype.generatePoints.apply(this);

        for (i = 0, len = this.points.length; i < len; i++) {
          point = this.points[i];
          y = this.processedYData[i]; // override point value for sums
          // #3710 Update point does not propagate to sum

          if (point.isIntermediateSum || point.isSum) {
            point.y = correctFloat(y);
          }
        }
      }; // Translate data points from raw values


      WaterfallSeries.prototype.translate = function () {
        var series = this,
            options = series.options,
            yAxis = series.yAxis,
            y,
            minPointLength = pick(options.minPointLength, 5),
            halfMinPointLength = minPointLength / 2,
            threshold = options.threshold || 0,
            previousY = threshold,
            previousIntermediate = threshold,
            stacking = options.stacking,
            actualStack = yAxis.waterfall.stacks[series.stackKey],
            total,
            yPos,
            hPos; // run column series translate

        ColumnSeries.prototype.translate.apply(series);
        var points = series.points;

        for (var i = 0; i < points.length; i++) {
          var point = points[i];
          var yValue = series.processedYData[i];
          var shapeArgs = point.shapeArgs;

          if (!shapeArgs || !isNumber(yValue)) {
            continue;
          }

          var range = [0, yValue];
          var pointY = point.y; // code responsible for correct positions of stacked points
          // starts here

          if (stacking) {
            if (actualStack) {
              var actualStackX = actualStack[i];

              if (stacking === 'overlap') {
                total = actualStackX.stackState[actualStackX.stateIndex--];
                y = pointY >= 0 ? total : total - pointY;

                if (ownProp(actualStackX, 'absolutePos')) {
                  delete actualStackX.absolutePos;
                }

                if (ownProp(actualStackX, 'absoluteNeg')) {
                  delete actualStackX.absoluteNeg;
                }
              } else {
                if (pointY >= 0) {
                  total = actualStackX.threshold + actualStackX.posTotal;
                  actualStackX.posTotal -= pointY;
                  y = total;
                } else {
                  total = actualStackX.threshold + actualStackX.negTotal;
                  actualStackX.negTotal -= pointY;
                  y = total - pointY;
                }

                if (!actualStackX.posTotal) {
                  if (ownProp(actualStackX, 'absolutePos')) {
                    actualStackX.posTotal = actualStackX.absolutePos;
                    delete actualStackX.absolutePos;
                  }
                }

                if (!actualStackX.negTotal) {
                  if (ownProp(actualStackX, 'absoluteNeg')) {
                    actualStackX.negTotal = actualStackX.absoluteNeg;
                    delete actualStackX.absoluteNeg;
                  }
                }
              }

              if (!point.isSum) {
                // the connectorThreshold property is later used in
                // getCrispPath function to draw a connector line in a
                // correct place
                actualStackX.connectorThreshold = actualStackX.threshold + actualStackX.stackTotal;
              }

              if (yAxis.reversed) {
                yPos = pointY >= 0 ? y - pointY : y + pointY;
                hPos = y;
              } else {
                yPos = y;
                hPos = y - pointY;
              }

              point.below = yPos <= threshold;
              shapeArgs.y = yAxis.translate(yPos, false, true, false, true) || 0;
              shapeArgs.height = Math.abs(shapeArgs.y - (yAxis.translate(hPos, false, true, false, true) || 0));
              var dummyStackItem = yAxis.waterfall.dummyStackItem;

              if (dummyStackItem) {
                dummyStackItem.x = i;
                dummyStackItem.label = actualStack[i].label;
                dummyStackItem.setOffset(series.pointXOffset || 0, series.barW || 0, series.stackedYNeg[i], series.stackedYPos[i]);
              }
            }
          } else {
            // up points
            y = Math.max(previousY, previousY + pointY) + range[0];
            shapeArgs.y = yAxis.translate(y, false, true, false, true) || 0; // sum points

            if (point.isSum) {
              shapeArgs.y = yAxis.translate(range[1], false, true, false, true) || 0;
              shapeArgs.height = Math.min(yAxis.translate(range[0], false, true, false, true) || 0, yAxis.len) - shapeArgs.y; // #4256

              point.below = range[1] <= threshold;
            } else if (point.isIntermediateSum) {
              if (pointY >= 0) {
                yPos = range[1] + previousIntermediate;
                hPos = previousIntermediate;
              } else {
                yPos = previousIntermediate;
                hPos = range[1] + previousIntermediate;
              }

              if (yAxis.reversed) {
                // swapping values
                yPos ^= hPos;
                hPos ^= yPos;
                yPos ^= hPos;
              }

              shapeArgs.y = yAxis.translate(yPos, false, true, false, true) || 0;
              shapeArgs.height = Math.abs(shapeArgs.y - Math.min(yAxis.translate(hPos, false, true, false, true) || 0, yAxis.len));
              previousIntermediate += range[1];
              point.below = yPos <= threshold; // If it's not the sum point, update previous stack end position
              // and get shape height (#3886)
            } else {
              shapeArgs.height = yValue > 0 ? (yAxis.translate(previousY, false, true, false, true) || 0) - shapeArgs.y : (yAxis.translate(previousY, false, true, false, true) || 0) - (yAxis.translate(previousY - yValue, false, true, false, true) || 0);
              previousY += yValue;
              point.below = previousY < threshold;
            } // #3952 Negative sum or intermediate sum not rendered correctly


            if (shapeArgs.height < 0) {
              shapeArgs.y += shapeArgs.height;
              shapeArgs.height *= -1;
            }
          }

          point.plotY = shapeArgs.y = Math.round(shapeArgs.y || 0) - series.borderWidth % 2 / 2; // #3151

          shapeArgs.height = Math.max(Math.round(shapeArgs.height || 0), 0.001);
          point.yBottom = shapeArgs.y + shapeArgs.height;

          if (shapeArgs.height <= minPointLength && !point.isNull) {
            shapeArgs.height = minPointLength;
            shapeArgs.y -= halfMinPointLength;
            point.plotY = shapeArgs.y;

            if (point.y < 0) {
              point.minPointLengthOffset = -halfMinPointLength;
            } else {
              point.minPointLengthOffset = halfMinPointLength;
            }
          } else {
            if (point.isNull) {
              shapeArgs.width = 0;
            }

            point.minPointLengthOffset = 0;
          } // Correct tooltip placement (#3014)


          var tooltipY = point.plotY + (point.negative ? shapeArgs.height : 0);

          if (point.below) {
            // #15334
            point.plotY += shapeArgs.height;
          }

          if (point.tooltipPos) {
            if (series.chart.inverted) {
              point.tooltipPos[0] = yAxis.len - tooltipY;
            } else {
              point.tooltipPos[1] = tooltipY;
            }
          }
        }
      }; // Call default processData then override yData to reflect waterfall's
      // extremes on yAxis


      WaterfallSeries.prototype.processData = function (force) {
        var series = this,
            options = series.options,
            yData = series.yData,
            // #3710 Update point does not propagate to sum
        points = options.data,
            point,
            dataLength = yData.length,
            threshold = options.threshold || 0,
            subSum,
            sum,
            dataMin,
            dataMax,
            y,
            i;
        sum = subSum = dataMin = dataMax = 0;

        for (i = 0; i < dataLength; i++) {
          y = yData[i];
          point = points && points[i] ? points[i] : {};

          if (y === 'sum' || point.isSum) {
            yData[i] = correctFloat(sum);
          } else if (y === 'intermediateSum' || point.isIntermediateSum) {
            yData[i] = correctFloat(subSum);
            subSum = 0;
          } else {
            sum += y;
            subSum += y;
          }

          dataMin = Math.min(sum, dataMin);
          dataMax = Math.max(sum, dataMax);
        }

        _super.prototype.processData.call(this, force); // Record extremes only if stacking was not set:


        if (!options.stacking) {
          series.dataMin = dataMin + threshold;
          series.dataMax = dataMax;
        }

        return;
      }; // Return y value or string if point is sum


      WaterfallSeries.prototype.toYData = function (pt) {
        if (pt.isSum) {
          return 'sum';
        }

        if (pt.isIntermediateSum) {
          return 'intermediateSum';
        }

        return pt.y;
      };

      WaterfallSeries.prototype.updateParallelArrays = function (point, i) {
        _super.prototype.updateParallelArrays.call(this, point, i); // Prevent initial sums from triggering an error (#3245, #7559)


        if (this.yData[0] === 'sum' || this.yData[0] === 'intermediateSum') {
          this.yData[0] = null;
        }
      }; // Postprocess mapping between options and SVG attributes


      WaterfallSeries.prototype.pointAttribs = function (point, state) {
        var upColor = this.options.upColor,
            attr; // Set or reset up color (#3710, update to negative)

        if (upColor && !point.options.color) {
          point.color = point.y > 0 ? upColor : null;
        }

        attr = ColumnSeries.prototype.pointAttribs.call(this, point, state); // The dashStyle option in waterfall applies to the graph, not
        // the points

        delete attr.dashstyle;
        return attr;
      }; // Return an empty path initially, because we need to know the stroke-width
      // in order to set the final path.


      WaterfallSeries.prototype.getGraphPath = function () {
        return [['M', 0, 0]];
      }; // Draw columns' connector lines


      WaterfallSeries.prototype.getCrispPath = function () {
        var data = this.data,
            yAxis = this.yAxis,
            length = data.length,
            graphNormalizer = Math.round(this.graph.strokeWidth()) % 2 / 2,
            borderNormalizer = Math.round(this.borderWidth) % 2 / 2,
            reversedXAxis = this.xAxis.reversed,
            reversedYAxis = this.yAxis.reversed,
            stacking = this.options.stacking,
            path = [],
            connectorThreshold,
            prevStack,
            prevStackX,
            prevPoint,
            yPos,
            isPos,
            prevArgs,
            pointArgs,
            i;

        for (i = 1; i < length; i++) {
          pointArgs = data[i].shapeArgs;
          prevPoint = data[i - 1];
          prevArgs = data[i - 1].shapeArgs;
          prevStack = yAxis.waterfall.stacks[this.stackKey];
          isPos = prevPoint.y > 0 ? -prevArgs.height : 0;

          if (prevStack && prevArgs && pointArgs) {
            prevStackX = prevStack[i - 1]; // y position of the connector is different when series are
            // stacked, yAxis is reversed and it also depends on point's
            // value

            if (stacking) {
              connectorThreshold = prevStackX.connectorThreshold;
              yPos = Math.round(yAxis.translate(connectorThreshold, 0, 1, 0, 1) + (reversedYAxis ? isPos : 0)) - graphNormalizer;
            } else {
              yPos = prevArgs.y + prevPoint.minPointLengthOffset + borderNormalizer - graphNormalizer;
            }

            path.push(['M', (prevArgs.x || 0) + (reversedXAxis ? 0 : prevArgs.width || 0), yPos], ['L', (pointArgs.x || 0) + (reversedXAxis ? pointArgs.width || 0 : 0), yPos]);
          }

          if (prevArgs && path.length && (!stacking && prevPoint.y < 0 && !reversedYAxis || prevPoint.y > 0 && reversedYAxis)) {
            var nextLast = path[path.length - 2];

            if (nextLast && typeof nextLast[2] === 'number') {
              nextLast[2] += prevArgs.height || 0;
            }

            var last = path[path.length - 1];

            if (last && typeof last[2] === 'number') {
              last[2] += prevArgs.height || 0;
            }
          }
        }

        return path;
      }; // The graph is initially drawn with an empty definition, then updated with
      // crisp rendering.


      WaterfallSeries.prototype.drawGraph = function () {
        LineSeries.prototype.drawGraph.call(this);
        this.graph.attr({
          d: this.getCrispPath()
        });
      }; // Waterfall has stacking along the x-values too.


      WaterfallSeries.prototype.setStackedPoints = function () {
        var series = this,
            options = series.options,
            waterfallStacks = series.yAxis.waterfall.stacks,
            seriesThreshold = options.threshold,
            stackThreshold = seriesThreshold || 0,
            interSum = stackThreshold,
            stackKey = series.stackKey,
            xData = series.xData,
            xLength = xData.length,
            actualStack,
            actualStackX,
            totalYVal,
            actualSum,
            prevSum,
            statesLen,
            posTotal,
            negTotal,
            xPoint,
            yVal,
            x,
            alreadyChanged,
            changed; // function responsible for calculating correct values for stackState
        // array of each stack item. The arguments are: firstS - the value for
        // the first state, nextS - the difference between the previous and the
        // newest state, sInx - counter used in the for that updates each state
        // when necessary, sOff - offset that must be added to each state when
        // they need to be updated (if point isn't a total sum)
        // eslint-disable-next-line require-jsdoc

        function calculateStackState(firstS, nextS, sInx, sOff) {
          if (!statesLen) {
            actualStackX.stackState[0] = firstS;
            statesLen = actualStackX.stackState.length;
          } else {
            for (sInx; sInx < statesLen; sInx++) {
              actualStackX.stackState[sInx] += sOff;
            }
          }

          actualStackX.stackState.push(actualStackX.stackState[statesLen - 1] + nextS);
        }

        series.yAxis.stacking.usePercentage = false;
        totalYVal = actualSum = prevSum = stackThreshold; // code responsible for creating stacks for waterfall series

        if (series.visible || !series.chart.options.chart.ignoreHiddenSeries) {
          changed = waterfallStacks.changed;
          alreadyChanged = waterfallStacks.alreadyChanged; // in case of a redraw, stack for each x value must be
          // emptied (only for the first series in a specific stack)
          // and recalculated once more

          if (alreadyChanged && alreadyChanged.indexOf(stackKey) < 0) {
            changed = true;
          }

          if (!waterfallStacks[stackKey]) {
            waterfallStacks[stackKey] = {};
          }

          actualStack = waterfallStacks[stackKey];

          for (var i = 0; i < xLength; i++) {
            x = xData[i];

            if (!actualStack[x] || changed) {
              actualStack[x] = {
                negTotal: 0,
                posTotal: 0,
                stackTotal: 0,
                threshold: 0,
                stateIndex: 0,
                stackState: [],
                label: changed && actualStack[x] ? actualStack[x].label : void 0
              };
            }

            actualStackX = actualStack[x];
            yVal = series.yData[i];

            if (yVal >= 0) {
              actualStackX.posTotal += yVal;
            } else {
              actualStackX.negTotal += yVal;
            } // points do not exist yet, so raw data is used


            xPoint = options.data[i];
            posTotal = actualStackX.absolutePos = actualStackX.posTotal;
            negTotal = actualStackX.absoluteNeg = actualStackX.negTotal;
            actualStackX.stackTotal = posTotal + negTotal;
            statesLen = actualStackX.stackState.length;

            if (xPoint && xPoint.isIntermediateSum) {
              calculateStackState(prevSum, actualSum, 0, prevSum);
              prevSum = actualSum;
              actualSum = seriesThreshold; // swapping values

              stackThreshold ^= interSum;
              interSum ^= stackThreshold;
              stackThreshold ^= interSum;
            } else if (xPoint && xPoint.isSum) {
              calculateStackState(seriesThreshold, totalYVal, statesLen);
              stackThreshold = seriesThreshold;
            } else {
              calculateStackState(stackThreshold, yVal, 0, totalYVal);

              if (xPoint) {
                totalYVal += yVal;
                actualSum += yVal;
              }
            }

            actualStackX.stateIndex++;
            actualStackX.threshold = stackThreshold;
            stackThreshold += actualStackX.stackTotal;
          }

          waterfallStacks.changed = false;

          if (!waterfallStacks.alreadyChanged) {
            waterfallStacks.alreadyChanged = [];
          }

          waterfallStacks.alreadyChanged.push(stackKey);
        }
      }; // Extremes for a non-stacked series are recorded in processData.
      // In case of stacking, use Series.stackedYData to calculate extremes.


      WaterfallSeries.prototype.getExtremes = function () {
        var stacking = this.options.stacking,
            yAxis,
            waterfallStacks,
            stackedYNeg,
            stackedYPos;

        if (stacking) {
          yAxis = this.yAxis;
          waterfallStacks = yAxis.waterfall.stacks;
          stackedYNeg = this.stackedYNeg = [];
          stackedYPos = this.stackedYPos = []; // the visible y range can be different when stacking is set to
          // overlap and different when it's set to normal

          if (stacking === 'overlap') {
            objectEach(waterfallStacks[this.stackKey], function (stackX) {
              stackedYNeg.push(arrayMin(stackX.stackState));
              stackedYPos.push(arrayMax(stackX.stackState));
            });
          } else {
            objectEach(waterfallStacks[this.stackKey], function (stackX) {
              stackedYNeg.push(stackX.negTotal + stackX.threshold);
              stackedYPos.push(stackX.posTotal + stackX.threshold);
            });
          }

          return {
            dataMin: arrayMin(stackedYNeg),
            dataMax: arrayMax(stackedYPos)
          };
        } // When not stacking, data extremes have already been computed in the
        // processData function.


        return {
          dataMin: this.dataMin,
          dataMax: this.dataMax
        };
      };
      /**
       * A waterfall chart displays sequentially introduced positive or negative
       * values in cumulative columns.
       *
       * @sample highcharts/demo/waterfall/
       *         Waterfall chart
       * @sample highcharts/plotoptions/waterfall-inverted/
       *         Horizontal (inverted) waterfall
       * @sample highcharts/plotoptions/waterfall-stacked/
       *         Stacked waterfall chart
       *
       * @extends      plotOptions.column
       * @excluding    boostThreshold, boostBlending
       * @product      highcharts
       * @requires     highcharts-more
       * @optionparent plotOptions.waterfall
       */


      WaterfallSeries.defaultOptions = merge(ColumnSeries.defaultOptions, {
        /**
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @apioption plotOptions.waterfall.color
         */

        /**
         * The color used specifically for positive point columns. When not
         * specified, the general series color is used.
         *
         * In styled mode, the waterfall colors can be set with the
         * `.highcharts-point-negative`, `.highcharts-sum` and
         * `.highcharts-intermediate-sum` classes.
         *
         * @sample {highcharts} highcharts/demo/waterfall/
         *         Waterfall
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @product   highcharts
         * @apioption plotOptions.waterfall.upColor
         */
        dataLabels: {
          inside: true
        },

        /**
         * The width of the line connecting waterfall columns.
         *
         * @product highcharts
         */
        lineWidth: 1,

        /**
         * The color of the line that connects columns in a waterfall series.
         *
         * In styled mode, the stroke can be set with the `.highcharts-graph`
         * class.
         *
         * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @since   3.0
         * @product highcharts
         */
        lineColor: "#333333"
        /* neutralColor80 */
        ,

        /**
         * A name for the dash style to use for the line connecting the columns
         * of the waterfall series. Possible values: Dash, DashDot, Dot,
         * LongDash, LongDashDot, LongDashDotDot, ShortDash, ShortDashDot,
         * ShortDashDotDot, ShortDot, Solid
         *
         * In styled mode, the stroke dash-array can be set with the
         * `.highcharts-graph` class.
         *
         * @type    {Highcharts.DashStyleValue}
         * @since   3.0
         * @product highcharts
         */
        dashStyle: 'Dot',

        /**
         * The color of the border of each waterfall column.
         *
         * In styled mode, the border stroke can be set with the
         * `.highcharts-point` class.
         *
         * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @since   3.0
         * @product highcharts
         */
        borderColor: "#333333"
        /* neutralColor80 */
        ,
        states: {
          hover: {
            lineWidthPlus: 0 // #3126

          }
        }
      });
      return WaterfallSeries;
    }(ColumnSeries);

    extend(WaterfallSeries.prototype, {
      getZonesGraphs: LineSeries.prototype.getZonesGraphs,
      pointValKey: 'y',
      // Property needed to prevent lines between the columns from disappearing
      // when negativeColor is used.
      showLine: true,
      pointClass: WaterfallPoint
    });
    SeriesRegistry.registerSeriesType('waterfall', WaterfallSeries);
    WaterfallAxis.compose(Axis, Chart);
    /* *
     *
     * Export
     *
     * */

    /**
     *
     * API Options
     *
     */

    /**
     * A `waterfall` series. If the [type](#series.waterfall.type) option
     * is not specified, it is inherited from [chart.type](#chart.type).
     *
     * @extends   series,plotOptions.waterfall
     * @excluding dataParser, dataURL, boostThreshold, boostBlending
     * @product   highcharts
     * @requires  highcharts-more
     * @apioption series.waterfall
     */

    /**
     * An array of data points for the series. For the `waterfall` series
     * type, points can be given in the following ways:
     *
     * 1. An array of numerical values. In this case, the numerical values will be
     *    interpreted as `y` options. The `x` values will be automatically
     *    calculated, either starting at 0 and incremented by 1, or from
     *    `pointStart` and `pointInterval` given in the series options. If the axis
     *    has categories, these will be used. Example:
     *    ```js
     *    data: [0, 5, 3, 5]
     *    ```
     *
     * 2. An array of arrays with 2 values. In this case, the values correspond to
     *    `x,y`. If the first value is a string, it is applied as the name of the
     *    point, and the `x` value is inferred.
     *    ```js
     *    data: [
     *        [0, 7],
     *        [1, 8],
     *        [2, 3]
     *    ]
     *    ```
     *
     * 3. An array of objects with named values. The following snippet shows only a
     *    few settings, see the complete options set below. If the total number of
     *    data points exceeds the series'
     *    [turboThreshold](#series.waterfall.turboThreshold), this option is not
     *    available.
     *    ```js
     *    data: [{
     *        x: 1,
     *        y: 8,
     *        name: "Point2",
     *        color: "#00FF00"
     *    }, {
     *        x: 1,
     *        y: 8,
     *        name: "Point1",
     *        color: "#FF00FF"
     *    }]
     *    ```
     *
     * @sample {highcharts} highcharts/chart/reflow-true/
     *         Numerical values
     * @sample {highcharts} highcharts/series/data-array-of-arrays/
     *         Arrays of numeric x and y
     * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
     *         Arrays of datetime x and y
     * @sample {highcharts} highcharts/series/data-array-of-name-value/
     *         Arrays of point.name and y
     * @sample {highcharts} highcharts/series/data-array-of-objects/
     *         Config objects
     *
     * @type      {Array<number|Array<(number|string),(number|null)>|null|*>}
     * @extends   series.line.data
     * @excluding marker
     * @product   highcharts
     * @apioption series.waterfall.data
     */

    /**
     * When this property is true, the points acts as a summary column for
     * the values added or substracted since the last intermediate sum,
     * or since the start of the series. The `y` value is ignored.
     *
     * @sample {highcharts} highcharts/demo/waterfall/
     *         Waterfall
     *
     * @type      {boolean}
     * @default   false
     * @product   highcharts
     * @apioption series.waterfall.data.isIntermediateSum
     */

    /**
     * When this property is true, the point display the total sum across
     * the entire series. The `y` value is ignored.
     *
     * @sample {highcharts} highcharts/demo/waterfall/
     *         Waterfall
     *
     * @type      {boolean}
     * @default   false
     * @product   highcharts
     * @apioption series.waterfall.data.isSum
     */

    ''; // adds doclets above to transpiled file

    return WaterfallSeries;
  });

  _registerModule(_modules, 'Extensions/Polar.js', [_modules['Core/Animation/AnimationUtilities.js'], _modules['Core/Chart/Chart.js'], _modules['Core/Globals.js'], _modules['Extensions/Pane.js'], _modules['Core/Pointer.js'], _modules['Core/Series/Series.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Renderer/SVG/SVGRenderer.js'], _modules['Core/Utilities.js']], function (A, Chart, H, Pane, Pointer, Series, SeriesRegistry, SVGRenderer, U) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var animObject = A.animObject;
    var seriesTypes = SeriesRegistry.seriesTypes;
    var addEvent = U.addEvent,
        defined = U.defined,
        find = U.find,
        isNumber = U.isNumber,
        pick = U.pick,
        splat = U.splat,
        uniqueKey = U.uniqueKey,
        wrap = U.wrap; // Extensions for polar charts. Additionally, much of the geometry required for
    // polar charts is gathered in RadialAxes.js.

    var seriesProto = Series.prototype,
        pointerProto = Pointer.prototype,
        columnProto,
        arearangeProto;
    /* eslint-disable no-invalid-this, valid-jsdoc */

    /**
     * Search a k-d tree by the point angle, used for shared tooltips in polar
     * charts
     * @private
     */

    seriesProto.searchPointByAngle = function (e) {
      var series = this,
          chart = series.chart,
          xAxis = series.xAxis,
          center = xAxis.pane.center,
          plotX = e.chartX - center[0] - chart.plotLeft,
          plotY = e.chartY - center[1] - chart.plotTop;
      return this.searchKDTree({
        clientX: 180 + Math.atan2(plotX, plotY) * (-180 / Math.PI)
      });
    };
    /**
     * #6212 Calculate connectors for spline series in polar chart.
     * @private
     * @param {boolean} calculateNeighbours
     *        Check if connectors should be calculated for neighbour points as
     *        well allows short recurence
     */


    seriesProto.getConnectors = function (segment, index, calculateNeighbours, connectEnds) {
      var i,
          prevPointInd,
          nextPointInd,
          previousPoint,
          nextPoint,
          previousX,
          previousY,
          nextX,
          nextY,
          plotX,
          plotY,
          ret,
          // 1 means control points midway between points, 2 means 1/3 from
      // the point, 3 is 1/4 etc;
      smoothing = 1.5,
          denom = smoothing + 1,
          leftContX,
          leftContY,
          rightContX,
          rightContY,
          dLControlPoint,
          // distance left control point
      dRControlPoint,
          leftContAngle,
          rightContAngle,
          jointAngle,
          addedNumber = connectEnds ? 1 : 0; // Calculate final index of points depending on the initial index value.
      // Because of calculating neighbours, index may be outisde segment
      // array.

      if (index >= 0 && index <= segment.length - 1) {
        i = index;
      } else if (index < 0) {
        i = segment.length - 1 + index;
      } else {
        i = 0;
      }

      prevPointInd = i - 1 < 0 ? segment.length - (1 + addedNumber) : i - 1;
      nextPointInd = i + 1 > segment.length - 1 ? addedNumber : i + 1;
      previousPoint = segment[prevPointInd];
      nextPoint = segment[nextPointInd];
      previousX = previousPoint.plotX;
      previousY = previousPoint.plotY;
      nextX = nextPoint.plotX;
      nextY = nextPoint.plotY;
      plotX = segment[i].plotX; // actual point

      plotY = segment[i].plotY;
      leftContX = (smoothing * plotX + previousX) / denom;
      leftContY = (smoothing * plotY + previousY) / denom;
      rightContX = (smoothing * plotX + nextX) / denom;
      rightContY = (smoothing * plotY + nextY) / denom;
      dLControlPoint = Math.sqrt(Math.pow(leftContX - plotX, 2) + Math.pow(leftContY - plotY, 2));
      dRControlPoint = Math.sqrt(Math.pow(rightContX - plotX, 2) + Math.pow(rightContY - plotY, 2));
      leftContAngle = Math.atan2(leftContY - plotY, leftContX - plotX);
      rightContAngle = Math.atan2(rightContY - plotY, rightContX - plotX);
      jointAngle = Math.PI / 2 + (leftContAngle + rightContAngle) / 2; // Ensure the right direction, jointAngle should be in the same quadrant
      // as leftContAngle

      if (Math.abs(leftContAngle - jointAngle) > Math.PI / 2) {
        jointAngle -= Math.PI;
      } // Find the corrected control points for a spline straight through the
      // point


      leftContX = plotX + Math.cos(jointAngle) * dLControlPoint;
      leftContY = plotY + Math.sin(jointAngle) * dLControlPoint;
      rightContX = plotX + Math.cos(Math.PI + jointAngle) * dRControlPoint;
      rightContY = plotY + Math.sin(Math.PI + jointAngle) * dRControlPoint; // push current point's connectors into returned object

      ret = {
        rightContX: rightContX,
        rightContY: rightContY,
        leftContX: leftContX,
        leftContY: leftContY,
        plotX: plotX,
        plotY: plotY
      }; // calculate connectors for previous and next point and push them inside
      // returned object

      if (calculateNeighbours) {
        ret.prevPointCont = this.getConnectors(segment, prevPointInd, false, connectEnds);
      }

      return ret;
    };
    /**
     * Translate a point's plotX and plotY from the internal angle and radius
     * measures to true plotX, plotY coordinates
     * @private
     */


    seriesProto.toXY = function (point) {
      var chart = this.chart,
          xAxis = this.xAxis,
          yAxis = this.yAxis,
          plotX = point.plotX,
          plotY = point.plotY,
          series = point.series,
          inverted = chart.inverted,
          pointY = point.y,
          radius = inverted ? plotX : yAxis.len - plotY,
          clientX; // Corrected y position of inverted series other than column

      if (inverted && series && !series.isRadialBar) {
        point.plotY = plotY = typeof pointY === 'number' ? yAxis.translate(pointY) || 0 : 0;
      } // Save rectangular plotX, plotY for later computation


      point.rectPlotX = plotX;
      point.rectPlotY = plotY;

      if (yAxis.center) {
        radius += yAxis.center[3] / 2;
      } // Find the polar plotX and plotY. Avoid setting plotX and plotY to NaN when
      // plotY is undefined (#15438)


      if (isNumber(plotY)) {
        var xy = inverted ? yAxis.postTranslate(plotY, radius) : xAxis.postTranslate(plotX, radius);
        point.plotX = point.polarPlotX = xy.x - chart.plotLeft;
        point.plotY = point.polarPlotY = xy.y - chart.plotTop;
      } // If shared tooltip, record the angle in degrees in order to align X
      // points. Otherwise, use a standard k-d tree to get the nearest point
      // in two dimensions.


      if (this.kdByAngle) {
        clientX = (plotX / Math.PI * 180 + xAxis.pane.options.startAngle) % 360;

        if (clientX < 0) {
          // #2665
          clientX += 360;
        }

        point.clientX = clientX;
      } else {
        point.clientX = point.plotX;
      }
    };

    if (seriesTypes.spline) {
      /**
       * Overridden method for calculating a spline from one point to the next
       * @private
       */
      wrap(seriesTypes.spline.prototype, 'getPointSpline', function (proceed, segment, point, i) {
        var ret, connectors;

        if (this.chart.polar) {
          // moveTo or lineTo
          if (!i) {
            ret = ['M', point.plotX, point.plotY];
          } else {
            // curve from last point to this
            connectors = this.getConnectors(segment, i, true, this.connectEnds);
            var rightContX = connectors.prevPointCont && connectors.prevPointCont.rightContX;
            var rightContY = connectors.prevPointCont && connectors.prevPointCont.rightContY;
            ret = ['C', isNumber(rightContX) ? rightContX : connectors.plotX, isNumber(rightContY) ? rightContY : connectors.plotY, isNumber(connectors.leftContX) ? connectors.leftContX : connectors.plotX, isNumber(connectors.leftContY) ? connectors.leftContY : connectors.plotY, connectors.plotX, connectors.plotY];
          }
        } else {
          ret = proceed.call(this, segment, point, i);
        }

        return ret;
      }); // #6430 Areasplinerange series use unwrapped getPointSpline method, so
      // we need to set this method again.

      if (seriesTypes.areasplinerange) {
        seriesTypes.areasplinerange.prototype.getPointSpline = seriesTypes.spline.prototype.getPointSpline;
      }
    }
    /**
     * Extend translate. The plotX and plotY values are computed as if the polar
     * chart were a cartesian plane, where plotX denotes the angle in radians
     * and (yAxis.len - plotY) is the pixel distance from center.
     * @private
     */


    addEvent(Series, 'afterTranslate', function () {
      var series = this;
      var chart = series.chart;

      if (chart.polar && series.xAxis) {
        // Prepare k-d-tree handling. It searches by angle (clientX) in
        // case of shared tooltip, and by two dimensional distance in case
        // of non-shared.
        series.kdByAngle = chart.tooltip && chart.tooltip.shared;

        if (series.kdByAngle) {
          series.searchPoint = series.searchPointByAngle;
        } else {
          series.options.findNearestPointBy = 'xy';
        } // Postprocess plot coordinates


        if (!series.preventPostTranslate) {
          var points = series.points;
          var i = points.length;

          while (i--) {
            // Translate plotX, plotY from angle and radius to true plot
            // coordinates
            series.toXY(points[i]); // Treat points below Y axis min as null (#10082)

            if (!chart.hasParallelCoordinates && !series.yAxis.reversed && points[i].y < series.yAxis.min) {
              points[i].isNull = true;
            }
          }
        } // Perform clip after render


        if (!this.hasClipCircleSetter) {
          this.hasClipCircleSetter = !!series.eventsToUnbind.push(addEvent(series, 'afterRender', function () {
            var circ;

            if (chart.polar) {
              // For clipping purposes there is a need for
              // coordinates from the absolute center
              circ = this.yAxis.pane.center;

              if (!this.clipCircle) {
                this.clipCircle = chart.renderer.clipCircle(circ[0], circ[1], circ[2] / 2, circ[3] / 2);
              } else {
                this.clipCircle.animate({
                  x: circ[0],
                  y: circ[1],
                  r: circ[2] / 2,
                  innerR: circ[3] / 2
                });
              }

              this.group.clip(this.clipCircle);
              this.setClip = H.noop;
            }
          }));
        }
      }
    }, {
      order: 2
    }); // Run after translation of ||-coords

    /**
     * Extend getSegmentPath to allow connecting ends across 0 to provide a
     * closed circle in line-like series.
     * @private
     */

    wrap(seriesTypes.line.prototype, 'getGraphPath', function (proceed, points) {
      var series = this,
          i,
          firstValid,
          popLastPoint; // Connect the path

      if (this.chart.polar) {
        points = points || this.points; // Append first valid point in order to connect the ends

        for (i = 0; i < points.length; i++) {
          if (!points[i].isNull) {
            firstValid = i;
            break;
          }
        }
        /**
         * Polar charts only. Whether to connect the ends of a line series
         * plot across the extremes.
         *
         * @sample {highcharts} highcharts/plotoptions/line-connectends-false/
         *         Do not connect
         *
         * @type      {boolean}
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.series.connectEnds
         */


        if (this.options.connectEnds !== false && typeof firstValid !== 'undefined') {
          this.connectEnds = true; // re-used in splines

          points.splice(points.length, 0, points[firstValid]);
          popLastPoint = true;
        } // For area charts, pseudo points are added to the graph, now we
        // need to translate these


        points.forEach(function (point) {
          if (typeof point.polarPlotY === 'undefined') {
            series.toXY(point);
          }
        });
      } // Run uber method


      var ret = proceed.apply(this, [].slice.call(arguments, 1)); // #6212 points.splice method is adding points to an array. In case of
      // areaspline getGraphPath method is used two times and in both times
      // points are added to an array. That is why points.pop is used, to get
      // unmodified points.

      if (popLastPoint) {
        points.pop();
      }

      return ret;
    });

    var polarAnimate = function (proceed, init) {
      var series = this,
          chart = this.chart,
          animation = this.options.animation,
          group = this.group,
          markerGroup = this.markerGroup,
          center = this.xAxis && this.xAxis.center,
          plotLeft = chart.plotLeft,
          plotTop = chart.plotTop,
          attribs,
          paneInnerR,
          graphic,
          shapeArgs,
          r,
          innerR; // Specific animation for polar charts

      if (chart.polar) {
        if (series.isRadialBar) {
          if (!init) {
            // Run the pie animation for radial bars
            series.startAngleRad = pick(series.translatedThreshold, series.xAxis.startAngleRad);
            H.seriesTypes.pie.prototype.animate.call(series, init);
          }
        } else {
          // Enable animation on polar charts only in SVG. In VML, the scaling
          // is different, plus animation would be so slow it would't matter.
          if (chart.renderer.isSVG) {
            animation = animObject(animation); // A different animation needed for column like series

            if (series.is('column')) {
              if (!init) {
                paneInnerR = center[3] / 2;
                series.points.forEach(function (point) {
                  graphic = point.graphic;
                  shapeArgs = point.shapeArgs;
                  r = shapeArgs && shapeArgs.r;
                  innerR = shapeArgs && shapeArgs.innerR;

                  if (graphic && shapeArgs) {
                    // start values
                    graphic.attr({
                      r: paneInnerR,
                      innerR: paneInnerR
                    }); // animate

                    graphic.animate({
                      r: r,
                      innerR: innerR
                    }, series.options.animation);
                  }
                });
              }
            } else {
              // Initialize the animation
              if (init) {
                // Scale down the group and place it in the center
                attribs = {
                  translateX: center[0] + plotLeft,
                  translateY: center[1] + plotTop,
                  scaleX: 0.001,
                  scaleY: 0.001
                };
                group.attr(attribs);

                if (markerGroup) {
                  markerGroup.attr(attribs);
                } // Run the animation

              } else {
                attribs = {
                  translateX: plotLeft,
                  translateY: plotTop,
                  scaleX: 1,
                  scaleY: 1
                };
                group.animate(attribs, animation);

                if (markerGroup) {
                  markerGroup.animate(attribs, animation);
                }
              }
            }
          }
        } // For non-polar charts, revert to the basic animation

      } else {
        proceed.call(this, init);
      }
    }; // Define the animate method for regular series


    wrap(seriesProto, 'animate', polarAnimate);

    if (seriesTypes.column) {
      arearangeProto = seriesTypes.arearange.prototype;
      columnProto = seriesTypes.column.prototype;

      columnProto.polarArc = function (low, high, start, end) {
        var center = this.xAxis.center,
            len = this.yAxis.len,
            paneInnerR = center[3] / 2,
            r = len - high + paneInnerR,
            innerR = len - pick(low, len) + paneInnerR; // Prevent columns from shooting through the pane's center

        if (this.yAxis.reversed) {
          if (r < 0) {
            r = paneInnerR;
          }

          if (innerR < 0) {
            innerR = paneInnerR;
          }
        } // Return a new shapeArgs


        return {
          x: center[0],
          y: center[1],
          r: r,
          innerR: innerR,
          start: start,
          end: end
        };
      };
      /**
       * Define the animate method for columnseries
       * @private
       */


      wrap(columnProto, 'animate', polarAnimate);
      /**
       * Extend the column prototype's translate method
       * @private
       */

      wrap(columnProto, 'translate', function (proceed) {
        var series = this,
            options = series.options,
            threshold = options.threshold,
            stacking = options.stacking,
            chart = series.chart,
            xAxis = series.xAxis,
            yAxis = series.yAxis,
            reversed = yAxis.reversed,
            center = yAxis.center,
            startAngleRad = xAxis.startAngleRad,
            endAngleRad = xAxis.endAngleRad,
            visibleRange = endAngleRad - startAngleRad,
            thresholdAngleRad,
            points,
            point,
            i,
            yMin,
            yMax,
            start,
            end,
            tooltipPos,
            pointX,
            pointY,
            stackValues,
            stack,
            barX,
            innerR,
            r;
        series.preventPostTranslate = true; // Run uber method

        proceed.call(series); // Postprocess plot coordinates

        if (xAxis.isRadial) {
          points = series.points;
          i = points.length;
          yMin = yAxis.translate(yAxis.min);
          yMax = yAxis.translate(yAxis.max);
          threshold = options.threshold || 0;

          if (chart.inverted) {
            // Finding a correct threshold
            if (isNumber(threshold)) {
              thresholdAngleRad = yAxis.translate(threshold); // Checks if threshold is outside the visible range

              if (defined(thresholdAngleRad)) {
                if (thresholdAngleRad < 0) {
                  thresholdAngleRad = 0;
                } else if (thresholdAngleRad > visibleRange) {
                  thresholdAngleRad = visibleRange;
                } // Adding start angle offset


                series.translatedThreshold = thresholdAngleRad + startAngleRad;
              }
            }
          }

          while (i--) {
            point = points[i];
            barX = point.barX;
            pointX = point.x;
            pointY = point.y;
            point.shapeType = 'arc';

            if (chart.inverted) {
              point.plotY = yAxis.translate(pointY);

              if (stacking && yAxis.stacking) {
                stack = yAxis.stacking.stacks[(pointY < 0 ? '-' : '') + series.stackKey];

                if (series.visible && stack && stack[pointX]) {
                  if (!point.isNull) {
                    stackValues = stack[pointX].points[series.getStackIndicator(void 0, pointX, series.index).key]; // Translating to radial values

                    start = yAxis.translate(stackValues[0]);
                    end = yAxis.translate(stackValues[1]); // If starting point is beyond the
                    // range, set it to 0

                    if (defined(start)) {
                      start = U.clamp(start, 0, visibleRange);
                    }
                  }
                }
              } else {
                // Initial start and end angles for radial bar
                start = thresholdAngleRad;
                end = point.plotY;
              }

              if (start > end) {
                // Swapping start and end
                end = [start, start = end][0];
              } // Prevent from rendering point outside the
              // acceptable circular range


              if (!reversed) {
                if (start < yMin) {
                  start = yMin;
                } else if (end > yMax) {
                  end = yMax;
                } else if (end < yMin || start > yMax) {
                  start = end = 0;
                }
              } else {
                if (end > yMin) {
                  end = yMin;
                } else if (start < yMax) {
                  start = yMax;
                } else if (start > yMin || end < yMax) {
                  start = end = visibleRange;
                }
              }

              if (yAxis.min > yAxis.max) {
                start = end = reversed ? visibleRange : 0;
              }

              start += startAngleRad;
              end += startAngleRad;

              if (center) {
                point.barX = barX += center[3] / 2;
              } // In case when radius, inner radius or both are
              // negative, a point is rendered but partially or as
              // a center point


              innerR = Math.max(barX, 0);
              r = Math.max(barX + point.pointWidth, 0);
              point.shapeArgs = {
                x: center && center[0],
                y: center && center[1],
                r: r,
                innerR: innerR,
                start: start,
                end: end
              }; // Fade out the points if not inside the polar "plot area"

              point.opacity = start === end ? 0 : void 0; // A correct value for stacked or not fully visible
              // point

              point.plotY = (defined(series.translatedThreshold) && (start < series.translatedThreshold ? start : end)) - startAngleRad;
            } else {
              start = barX + startAngleRad; // Changed the way polar columns are drawn in order to make
              // it more consistent with the drawing of inverted columns
              // (they are using the same function now). Also, it was
              // essential to make the animation work correctly (the
              // scaling of the group) is replaced by animating each
              // element separately.

              point.shapeArgs = series.polarArc(point.yBottom, point.plotY, start, start + point.pointWidth);
            } // Provided a correct coordinates for the tooltip


            series.toXY(point);

            if (chart.inverted) {
              tooltipPos = yAxis.postTranslate(point.rectPlotY, barX + point.pointWidth / 2);
              point.tooltipPos = [tooltipPos.x - chart.plotLeft, tooltipPos.y - chart.plotTop];
            } else {
              point.tooltipPos = [point.plotX, point.plotY];
            }

            if (center) {
              point.ttBelow = point.plotY > center[1];
            }
          }
        }
      });
      /**
       * Find correct align and vertical align based on an angle in polar chart
       * @private
       */

      columnProto.findAlignments = function (angle, options) {
        var align, verticalAlign;

        if (options.align === null) {
          if (angle > 20 && angle < 160) {
            align = 'left'; // right hemisphere
          } else if (angle > 200 && angle < 340) {
            align = 'right'; // left hemisphere
          } else {
            align = 'center'; // top or bottom
          }

          options.align = align;
        }

        if (options.verticalAlign === null) {
          if (angle < 45 || angle > 315) {
            verticalAlign = 'bottom'; // top part
          } else if (angle > 135 && angle < 225) {
            verticalAlign = 'top'; // bottom part
          } else {
            verticalAlign = 'middle'; // left or right
          }

          options.verticalAlign = verticalAlign;
        }

        return options;
      };

      if (arearangeProto) {
        arearangeProto.findAlignments = columnProto.findAlignments;
      }
      /**
       * Align column data labels outside the columns. #1199.
       * @private
       */


      wrap(columnProto, 'alignDataLabel', function (proceed, point, dataLabel, options, alignTo, isNew) {
        var chart = this.chart,
            inside = pick(options.inside, !!this.options.stacking),
            angle,
            shapeArgs,
            labelPos;

        if (chart.polar) {
          angle = point.rectPlotX / Math.PI * 180;

          if (!chart.inverted) {
            // Align nicely outside the perimeter of the columns
            if (this.findAlignments) {
              options = this.findAlignments(angle, options);
            }
          } else {
            // Required corrections for data labels of inverted bars
            // The plotX and plotY are correctly set therefore they
            // don't need to be swapped (inverted argument is false)
            this.forceDL = chart.isInsidePlot(point.plotX, Math.round(point.plotY)); // Checks if labels should be positioned inside

            if (inside && point.shapeArgs) {
              shapeArgs = point.shapeArgs; // Calculates pixel positions for a data label to be
              // inside

              labelPos = this.yAxis.postTranslate( // angle
              ((shapeArgs.start || 0) + (shapeArgs.end || 0)) / 2 - this.xAxis.startAngleRad, // radius
              point.barX + point.pointWidth / 2);
              alignTo = {
                x: labelPos.x - chart.plotLeft,
                y: labelPos.y - chart.plotTop
              };
            } else if (point.tooltipPos) {
              alignTo = {
                x: point.tooltipPos[0],
                y: point.tooltipPos[1]
              };
            }

            options.align = pick(options.align, 'center');
            options.verticalAlign = pick(options.verticalAlign, 'middle');
          }

          seriesProto.alignDataLabel.call(this, point, dataLabel, options, alignTo, isNew); // Hide label of a point (only inverted) that is outside the
          // visible y range

          if (this.isRadialBar && point.shapeArgs && point.shapeArgs.start === point.shapeArgs.end) {
            dataLabel.hide(true);
          }
        } else {
          proceed.call(this, point, dataLabel, options, alignTo, isNew);
        }
      });
    }
    /**
     * Extend getCoordinates to prepare for polar axis values
     * @private
     */


    wrap(pointerProto, 'getCoordinates', function (proceed, e) {
      var chart = this.chart,
          ret = {
        xAxis: [],
        yAxis: []
      };

      if (chart.polar) {
        chart.axes.forEach(function (axis) {
          var isXAxis = axis.isXAxis,
              center = axis.center,
              x,
              y; // Skip colorAxis

          if (axis.coll === 'colorAxis') {
            return;
          }

          x = e.chartX - center[0] - chart.plotLeft;
          y = e.chartY - center[1] - chart.plotTop;
          ret[isXAxis ? 'xAxis' : 'yAxis'].push({
            axis: axis,
            value: axis.translate(isXAxis ? Math.PI - Math.atan2(x, y) : // angle
            // distance from center
            Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)), true)
          });
        });
      } else {
        ret = proceed.call(this, e);
      }

      return ret;
    });

    SVGRenderer.prototype.clipCircle = function (x, y, r, innerR) {
      var wrapper,
          id = uniqueKey(),
          clipPath = this.createElement('clipPath').attr({
        id: id
      }).add(this.defs);
      wrapper = innerR ? this.arc(x, y, r, innerR, 0, 2 * Math.PI).add(clipPath) : this.circle(x, y, r).add(clipPath);
      wrapper.id = id;
      wrapper.clipPath = clipPath;
      return wrapper;
    };

    addEvent(Chart, 'getAxes', function () {
      if (!this.pane) {
        this.pane = [];
      }

      this.options.pane = splat(this.options.pane);
      this.options.pane.forEach(function (paneOptions) {
        new Pane( // eslint-disable-line no-new
        paneOptions, this);
      }, this);
    });
    addEvent(Chart, 'afterDrawChartBox', function () {
      this.pane.forEach(function (pane) {
        pane.render();
      });
    });
    addEvent(Series, 'afterInit', function () {
      var chart = this.chart; // Add flags that identifies radial inverted series

      if (chart.inverted && chart.polar) {
        this.isRadialSeries = true;

        if (this.is('column')) {
          this.isRadialBar = true;
        }
      }
    });
    /**
     * Extend chart.get to also search in panes. Used internally in
     * responsiveness and chart.update.
     * @private
     */

    wrap(Chart.prototype, 'get', function (proceed, id) {
      return find(this.pane || [], function (pane) {
        return pane.options.id === id;
      }) || proceed.call(this, id);
    });
  });

  _registerModule(_modules, 'masters/highcharts-more.src.js', [_modules['Core/Globals.js'], _modules['Core/Axis/RadialAxis.js'], _modules['Series/Bubble/BubbleSeries.js']], function (Highcharts, RadialAxis, BubbleSeries) {
    var G = Highcharts;
    RadialAxis.compose(G.Axis, G.Tick);
    BubbleSeries.compose(G.Chart, G.Legend, G.Series);
  });
});

/***/ }),

/***/ 4399:
/*!**********************************************************!*\
  !*** ./node_modules/highcharts/modules/exporting.src.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license Highcharts JS v9.3.3 (2022-02-01)
 *
 * Exporting module
 *
 * (c) 2010-2021 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */


(function (factory) {
  if ( true && module.exports) {
    factory['default'] = factory;
    module.exports = factory;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ 3109)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Highcharts) {
      factory(Highcharts);
      factory.Highcharts = Highcharts;
      return factory;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (Highcharts) {
  var _modules = Highcharts ? Highcharts._modules : {};

  function _registerModule(obj, path, args, fn) {
    if (!obj.hasOwnProperty(path)) {
      obj[path] = fn.apply(null, args);
    }
  }

  _registerModule(_modules, 'Extensions/FullScreen.js', [_modules['Core/Chart/Chart.js'], _modules['Core/Globals.js'], _modules['Core/Renderer/HTML/AST.js'], _modules['Core/Utilities.js']], function (Chart, H, AST, U) {
    /* *
     * (c) 2009-2021 Rafal Sebestjanski
     *
     * Full screen for Highcharts
     *
     * License: www.highcharts.com/license
     */
    var doc = H.doc;
    var addEvent = U.addEvent;
    /**
     * The module allows user to enable display chart in full screen mode.
     * Used in StockTools too.
     * Based on default solutions in browsers.
     *
     */

    /* eslint-disable no-invalid-this, valid-jsdoc */

    /**
     * Handles displaying chart's container in the fullscreen mode.
     *
     * **Note**: Fullscreen is not supported on iPhone due to iOS limitations.
     *
     * @class
     * @name Highcharts.Fullscreen
     * @hideconstructor
     * @requires modules/full-screen
     */

    var Fullscreen =
    /** @class */
    function () {
      /* *
       *
       *  Constructors
       *
       * */
      function Fullscreen(chart) {
        /**
         * Chart managed by the fullscreen controller.
         * @name Highcharts.Fullscreen#chart
         * @type {Highcharts.Chart}
         */
        this.chart = chart;
        /**
         * The flag is set to `true` when the chart is displayed in
         * the fullscreen mode.
         *
         * @name Highcharts.Fullscreen#isOpen
         * @type {boolean|undefined}
         * @since 8.0.1
         */

        this.isOpen = false;
        var container = chart.renderTo; // Hold event and methods available only for a current browser.

        if (!this.browserProps) {
          if (typeof container.requestFullscreen === 'function') {
            this.browserProps = {
              fullscreenChange: 'fullscreenchange',
              requestFullscreen: 'requestFullscreen',
              exitFullscreen: 'exitFullscreen'
            };
          } else if (container.mozRequestFullScreen) {
            this.browserProps = {
              fullscreenChange: 'mozfullscreenchange',
              requestFullscreen: 'mozRequestFullScreen',
              exitFullscreen: 'mozCancelFullScreen'
            };
          } else if (container.webkitRequestFullScreen) {
            this.browserProps = {
              fullscreenChange: 'webkitfullscreenchange',
              requestFullscreen: 'webkitRequestFullScreen',
              exitFullscreen: 'webkitExitFullscreen'
            };
          } else if (container.msRequestFullscreen) {
            this.browserProps = {
              fullscreenChange: 'MSFullscreenChange',
              requestFullscreen: 'msRequestFullscreen',
              exitFullscreen: 'msExitFullscreen'
            };
          }
        }
      }
      /* *
       *
       *  Functions
       *
       * */

      /**
       * Stops displaying the chart in fullscreen mode.
       * Exporting module required.
       *
       * @since       8.0.1
       *
       * @function    Highcharts.Fullscreen#close
       * @return      {void}
       * @requires    modules/full-screen
       */


      Fullscreen.prototype.close = function () {
        var fullscreen = this,
            chart = fullscreen.chart,
            optionsChart = chart.options.chart; // Don't fire exitFullscreen() when user exited using 'Escape' button.

        if (fullscreen.isOpen && fullscreen.browserProps && chart.container.ownerDocument instanceof Document) {
          chart.container.ownerDocument[fullscreen.browserProps.exitFullscreen]();
        } // Unbind event as it's necessary only before exiting from fullscreen.


        if (fullscreen.unbindFullscreenEvent) {
          fullscreen.unbindFullscreenEvent = fullscreen.unbindFullscreenEvent();
        }

        chart.setSize(fullscreen.origWidth, fullscreen.origHeight, false);
        fullscreen.origWidth = void 0;
        fullscreen.origHeight = void 0;
        optionsChart.width = fullscreen.origWidthOption;
        optionsChart.height = fullscreen.origHeightOption;
        fullscreen.origWidthOption = void 0;
        fullscreen.origHeightOption = void 0;
        fullscreen.isOpen = false;
        fullscreen.setButtonText();
      };
      /**
       * Displays the chart in fullscreen mode.
       * When fired customly by user before exporting context button is created,
       * button's text will not be replaced - it's on the user side.
       * Exporting module required.
       *
       * @since       8.0.1
       *
       * @function Highcharts.Fullscreen#open
       * @return      {void}
       * @requires    modules/full-screen
       */


      Fullscreen.prototype.open = function () {
        var fullscreen = this,
            chart = fullscreen.chart,
            optionsChart = chart.options.chart;

        if (optionsChart) {
          fullscreen.origWidthOption = optionsChart.width;
          fullscreen.origHeightOption = optionsChart.height;
        }

        fullscreen.origWidth = chart.chartWidth;
        fullscreen.origHeight = chart.chartHeight; // Handle exitFullscreen() method when user clicks 'Escape' button.

        if (fullscreen.browserProps) {
          var unbindChange_1 = addEvent(chart.container.ownerDocument, // chart's document
          fullscreen.browserProps.fullscreenChange, function () {
            // Handle lack of async of browser's fullScreenChange event.
            if (fullscreen.isOpen) {
              fullscreen.isOpen = false;
              fullscreen.close();
            } else {
              chart.setSize(null, null, false);
              fullscreen.isOpen = true;
              fullscreen.setButtonText();
            }
          });
          var unbindDestroy_1 = addEvent(chart, 'destroy', unbindChange_1);

          fullscreen.unbindFullscreenEvent = function () {
            unbindChange_1();
            unbindDestroy_1();
          };

          var promise = chart.renderTo[fullscreen.browserProps.requestFullscreen]();

          if (promise) {
            // No dot notation because of IE8 compatibility
            promise['catch'](function () {
              alert( // eslint-disable-line no-alert
              'Full screen is not supported inside a frame.');
            });
          }
        }
      };
      /**
       * Replaces the exporting context button's text when toogling the
       * fullscreen mode.
       *
       * @private
       *
       * @since 8.0.1
       *
       * @requires modules/full-screen
       */


      Fullscreen.prototype.setButtonText = function () {
        var chart = this.chart,
            exportDivElements = chart.exportDivElements,
            exportingOptions = chart.options.exporting,
            menuItems = exportingOptions && exportingOptions.buttons && exportingOptions.buttons.contextButton.menuItems,
            lang = chart.options.lang;

        if (exportingOptions && exportingOptions.menuItemDefinitions && lang && lang.exitFullscreen && lang.viewFullscreen && menuItems && exportDivElements) {
          var exportDivElement = exportDivElements[menuItems.indexOf('viewFullscreen')];

          if (exportDivElement) {
            AST.setElementHTML(exportDivElement, !this.isOpen ? exportingOptions.menuItemDefinitions.viewFullscreen.text || lang.viewFullscreen : lang.exitFullscreen);
          }
        }
      };
      /**
       * Toggles displaying the chart in fullscreen mode.
       * By default, when the exporting module is enabled, a context button with
       * a drop down menu in the upper right corner accesses this function.
       * Exporting module required.
       *
       * @since 8.0.1
       *
       * @sample      highcharts/members/chart-togglefullscreen/
       *              Toggle fullscreen mode from a HTML button
       *
       * @function Highcharts.Fullscreen#toggle
       * @requires    modules/full-screen
       */


      Fullscreen.prototype.toggle = function () {
        var fullscreen = this;

        if (!fullscreen.isOpen) {
          fullscreen.open();
        } else {
          fullscreen.close();
        }
      };

      return Fullscreen;
    }();

    H.Fullscreen = Fullscreen; // Initialize fullscreen

    addEvent(Chart, 'beforeRender', function () {
      /**
       * @name Highcharts.Chart#fullscreen
       * @type {Highcharts.Fullscreen}
       * @requires modules/full-screen
       */
      this.fullscreen = new H.Fullscreen(this);
    });
    return H.Fullscreen;
  });

  _registerModule(_modules, 'Core/Chart/ChartNavigationComposition.js', [], function () {
    /**
     *
     *  (c) 2010-2021 Paweł Fus
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */

    /* *
     *
     *  Composition
     *
     * */
    var ChartNavigationComposition;

    (function (ChartNavigationComposition) {
      /* *
       *
       *  Declarations
       *
       * */

      /* *
       *
       *  Functions
       *
       * */

      /* eslint-disable valid-jsdoc */

      /**
       * @private
       */
      function compose(chart) {
        if (!chart.navigation) {
          chart.navigation = new Additions(chart);
        }

        return chart;
      }

      ChartNavigationComposition.compose = compose;
      /* *
       *
       *  Class
       *
       * */

      /**
       * Initializes `chart.navigation` object which delegates `update()` methods
       * to all other common classes (used in exporting and navigationBindings).
       * @private
       */

      var Additions =
      /** @class */
      function () {
        /* *
         *
         *  Constructor
         *
         * */
        function Additions(chart) {
          this.updates = [];
          this.chart = chart;
        }
        /* *
         *
         *  Functions
         *
         * */

        /**
         * Registers an `update()` method in the `chart.navigation` object.
         *
         * @private
         * @param {UpdateFunction} updateFn
         * The `update()` method that will be called in `chart.update()`.
         */


        Additions.prototype.addUpdate = function (updateFn) {
          this.chart.navigation.updates.push(updateFn);
        };
        /**
         * @private
         */


        Additions.prototype.update = function (options, redraw) {
          var _this = this;

          this.updates.forEach(function (updateFn) {
            updateFn.call(_this.chart, options, redraw);
          });
        };

        return Additions;
      }();

      ChartNavigationComposition.Additions = Additions;
    })(ChartNavigationComposition || (ChartNavigationComposition = {}));
    /* *
     *
     *  Default Export
     *
     * */


    return ChartNavigationComposition;
  });

  _registerModule(_modules, 'Extensions/Exporting/ExportingDefaults.js', [_modules['Core/Globals.js']], function (H) {
    /* *
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var isTouchDevice = H.isTouchDevice;
    /* *
     *
     *  API Options
     *
     * */
    // Add the export related options

    /**
     * Options for the exporting module. For an overview on the matter, see
     * [the docs](https://www.highcharts.com/docs/export-module/export-module-overview).
     *
     * @requires     modules/exporting
     * @optionparent exporting
     */

    var exporting = {
      /**
       * Experimental setting to allow HTML inside the chart (added through
       * the `useHTML` options), directly in the exported image. This allows
       * you to preserve complicated HTML structures like tables or bi-directional
       * text in exported charts.
       *
       * Disclaimer: The HTML is rendered in a `foreignObject` tag in the
       * generated SVG. The official export server is based on PhantomJS,
       * which supports this, but other SVG clients, like Batik, does not
       * support it. This also applies to downloaded SVG that you want to
       * open in a desktop client.
       *
       * @type      {boolean}
       * @default   false
       * @since     4.1.8
       * @apioption exporting.allowHTML
       */

      /**
       * Additional chart options to be merged into the chart before exporting to
       * an image format. This does not apply to printing the chart via the export
       * menu.
       *
       * For example, a common use case is to add data labels to improve
       * readability of the exported chart, or to add a printer-friendly color
       * scheme to exported PDFs.
       *
       * @sample {highcharts} highcharts/exporting/chartoptions-data-labels/
       *         Added data labels
       * @sample {highstock} highcharts/exporting/chartoptions-data-labels/
       *         Added data labels
       *
       * @type      {Highcharts.Options}
       * @apioption exporting.chartOptions
       */

      /**
       * Whether to enable the exporting module. Disabling the module will
       * hide the context button, but API methods will still be available.
       *
       * @sample {highcharts} highcharts/exporting/enabled-false/
       *         Exporting module is loaded but disabled
       * @sample {highstock} highcharts/exporting/enabled-false/
       *         Exporting module is loaded but disabled
       *
       * @type      {boolean}
       * @default   true
       * @since     2.0
       * @apioption exporting.enabled
       */

      /**
       * Function to call if the offline-exporting module fails to export
       * a chart on the client side, and [fallbackToExportServer](
       * #exporting.fallbackToExportServer) is disabled. If left undefined, an
       * exception is thrown instead. Receives two parameters, the exporting
       * options, and the error from the module.
       *
       * @see [fallbackToExportServer](#exporting.fallbackToExportServer)
       *
       * @type      {Highcharts.ExportingErrorCallbackFunction}
       * @since     5.0.0
       * @requires  modules/exporting
       * @requires  modules/offline-exporting
       * @apioption exporting.error
       */

      /**
       * Whether or not to fall back to the export server if the offline-exporting
       * module is unable to export the chart on the client side. This happens for
       * certain browsers, and certain features (e.g.
       * [allowHTML](#exporting.allowHTML)), depending on the image type exporting
       * to. For very complex charts, it is possible that export can fail in
       * browsers that don't support Blob objects, due to data URL length limits.
       * It is recommended to define the [exporting.error](#exporting.error)
       * handler if disabling fallback, in order to notify users in case export
       * fails.
       *
       * @type      {boolean}
       * @default   true
       * @since     4.1.8
       * @requires  modules/exporting
       * @requires  modules/offline-exporting
       * @apioption exporting.fallbackToExportServer
       */

      /**
       * The filename, without extension, to use for the exported chart.
       *
       * @sample {highcharts} highcharts/exporting/filename/
       *         Custom file name
       * @sample {highstock} highcharts/exporting/filename/
       *         Custom file name
       *
       * @type      {string}
       * @default   chart
       * @since     2.0
       * @apioption exporting.filename
       */

      /**
       * An object containing additional key value data for the POST form that
       * sends the SVG to the export server. For example, a `target` can be set to
       * make sure the generated image is received in another frame, or a custom
       * `enctype` or `encoding` can be set.
       *
       * @type      {Highcharts.HTMLAttributes}
       * @since     3.0.8
       * @apioption exporting.formAttributes
       */

      /**
       * Path where Highcharts will look for export module dependencies to
       * load on demand if they don't already exist on `window`. Should currently
       * point to location of [CanVG](https://github.com/canvg/canvg) library,
       * [jsPDF](https://github.com/yWorks/jsPDF) and
       * [svg2pdf.js](https://github.com/yWorks/svg2pdf.js), required for client
       * side export in certain browsers.
       *
       * @type      {string}
       * @default   https://code.highcharts.com/{version}/lib
       * @since     5.0.0
       * @apioption exporting.libURL
       */

      /**
       * Analogous to [sourceWidth](#exporting.sourceWidth).
       *
       * @type      {number}
       * @since     3.0
       * @apioption exporting.sourceHeight
       */

      /**
       * The width of the original chart when exported, unless an explicit
       * [chart.width](#chart.width) is set, or a pixel width is set on the
       * container. The width exported raster image is then multiplied by
       * [scale](#exporting.scale).
       *
       * @sample {highcharts} highcharts/exporting/sourcewidth/
       *         Source size demo
       * @sample {highstock} highcharts/exporting/sourcewidth/
       *         Source size demo
       * @sample {highmaps} maps/exporting/sourcewidth/
       *         Source size demo
       *
       * @type      {number}
       * @since     3.0
       * @apioption exporting.sourceWidth
       */

      /**
       * The pixel width of charts exported to PNG or JPG. As of Highcharts
       * 3.0, the default pixel width is a function of the [chart.width](
       * #chart.width) or [exporting.sourceWidth](#exporting.sourceWidth) and the
       * [exporting.scale](#exporting.scale).
       *
       * @sample {highcharts} highcharts/exporting/width/
       *         Export to 200px wide images
       * @sample {highstock} highcharts/exporting/width/
       *         Export to 200px wide images
       *
       * @type      {number}
       * @since     2.0
       * @apioption exporting.width
       */

      /**
       * Default MIME type for exporting if `chart.exportChart()` is called
       * without specifying a `type` option. Possible values are `image/png`,
       *  `image/jpeg`, `application/pdf` and `image/svg+xml`.
       *
       * @type  {Highcharts.ExportingMimeTypeValue}
       * @since 2.0
       */
      type: 'image/png',

      /**
       * The URL for the server module converting the SVG string to an image
       * format. By default this points to Highchart's free web service.
       *
       * @since 2.0
       */
      url: 'https://export.highcharts.com/',

      /**
       * When printing the chart from the menu item in the burger menu, if
       * the on-screen chart exceeds this width, it is resized. After printing
       * or cancelled, it is restored. The default width makes the chart
       * fit into typical paper format. Note that this does not affect the
       * chart when printing the web page as a whole.
       *
       * @since 4.2.5
       */
      printMaxWidth: 780,

      /**
       * Defines the scale or zoom factor for the exported image compared
       * to the on-screen display. While for instance a 600px wide chart
       * may look good on a website, it will look bad in print. The default
       * scale of 2 makes this chart export to a 1200px PNG or JPG.
       *
       * @see [chart.width](#chart.width)
       * @see [exporting.sourceWidth](#exporting.sourceWidth)
       *
       * @sample {highcharts} highcharts/exporting/scale/
       *         Scale demonstrated
       * @sample {highstock} highcharts/exporting/scale/
       *         Scale demonstrated
       * @sample {highmaps} maps/exporting/scale/
       *         Scale demonstrated
       *
       * @since 3.0
       */
      scale: 2,

      /**
       * Options for the export related buttons, print and export. In addition
       * to the default buttons listed here, custom buttons can be added.
       * See [navigation.buttonOptions](#navigation.buttonOptions) for general
       * options.
       *
       * @type     {Highcharts.Dictionary<*>}
       * @requires modules/exporting
       */
      buttons: {
        /**
         * Options for the export button.
         *
         * In styled mode, export button styles can be applied with the
         * `.highcharts-contextbutton` class.
         *
         * @declare  Highcharts.ExportingButtonsOptionsObject
         * @extends  navigation.buttonOptions
         * @requires modules/exporting
         */
        contextButton: {
          /**
           * A click handler callback to use on the button directly instead of
           * the popup menu.
           *
           * @sample highcharts/exporting/buttons-contextbutton-onclick/
           *         Skip the menu and export the chart directly
           *
           * @type      {Function}
           * @since     2.0
           * @apioption exporting.buttons.contextButton.onclick
           */

          /**
           * See [navigation.buttonOptions.symbolFill](
           * #navigation.buttonOptions.symbolFill).
           *
           * @type      {Highcharts.ColorString}
           * @default   #666666
           * @since     2.0
           * @apioption exporting.buttons.contextButton.symbolFill
           */

          /**
           * The horizontal position of the button relative to the `align`
           * option.
           *
           * @type      {number}
           * @default   -10
           * @since     2.0
           * @apioption exporting.buttons.contextButton.x
           */

          /**
           * The class name of the context button.
           */
          className: 'highcharts-contextbutton',

          /**
           * The class name of the menu appearing from the button.
           */
          menuClassName: 'highcharts-contextmenu',

          /**
           * The symbol for the button. Points to a definition function in
           * the `Highcharts.Renderer.symbols` collection. The default
           * `menu` function is part of the exporting module. Possible
           * values are "circle", "square", "diamond", "triangle",
           * "triangle-down", "menu", "menuball" or custom shape.
           *
           * @sample highcharts/exporting/buttons-contextbutton-symbol/
           *         Use a circle for symbol
           * @sample highcharts/exporting/buttons-contextbutton-symbol-custom/
           *         Custom shape as symbol
           *
           * @type  {Highcharts.SymbolKeyValue|"menu"|"menuball"|string}
           * @since 2.0
           */
          symbol: 'menu',

          /**
           * The key to a [lang](#lang) option setting that is used for the
           * button's title tooltip. When the key is `contextButtonTitle`, it
           * refers to [lang.contextButtonTitle](#lang.contextButtonTitle)
           * that defaults to "Chart context menu".
           *
           * @since 6.1.4
           */
          titleKey: 'contextButtonTitle',

          /**
           * This option is deprecated, use
           * [titleKey](#exporting.buttons.contextButton.titleKey) instead.
           *
           * @deprecated
           * @type      {string}
           * @apioption exporting.buttons.contextButton._titleKey
           */

          /**
           * A collection of strings pointing to config options for the menu
           * items. The config options are defined in the
           * `menuItemDefinitions` option.
           *
           * By default, there is the "View in full screen" and "Print" menu
           * items, plus one menu item for each of the available export types.
           *
           * @sample {highcharts} highcharts/exporting/menuitemdefinitions/
           *         Menu item definitions
           * @sample {highstock} highcharts/exporting/menuitemdefinitions/
           *         Menu item definitions
           * @sample {highmaps} highcharts/exporting/menuitemdefinitions/
           *         Menu item definitions
           *
           * @type    {Array<string>}
           * @default ["viewFullscreen", "printChart", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"]
           * @since   2.0
           */
          menuItems: ['viewFullscreen', 'printChart', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']
        }
      },

      /**
       * An object consisting of definitions for the menu items in the context
       * menu. Each key value pair has a `key` that is referenced in the
       * [menuItems](#exporting.buttons.contextButton.menuItems) setting,
       * and a `value`, which is an object with the following properties:
       *
       * - **onclick:** The click handler for the menu item
       *
       * - **text:** The text for the menu item
       *
       * - **textKey:** If internationalization is required, the key to a language
       *   string
       *
       * Custom text for the "exitFullScreen" can be set only in lang options
       * (it is not a separate button).
       *
       * @sample {highcharts} highcharts/exporting/menuitemdefinitions/
       *         Menu item definitions
       * @sample {highstock} highcharts/exporting/menuitemdefinitions/
       *         Menu item definitions
       * @sample {highmaps} highcharts/exporting/menuitemdefinitions/
       *         Menu item definitions
       *
       *
       * @type    {Highcharts.Dictionary<Highcharts.ExportingMenuObject>}
       * @default {"viewFullscreen": {}, "printChart": {}, "separator": {}, "downloadPNG": {}, "downloadJPEG": {}, "downloadPDF": {}, "downloadSVG": {}}
       * @since   5.0.13
       */
      menuItemDefinitions: {
        /**
         * @ignore
         */
        viewFullscreen: {
          textKey: 'viewFullscreen',
          onclick: function () {
            this.fullscreen.toggle();
          }
        },

        /**
         * @ignore
         */
        printChart: {
          textKey: 'printChart',
          onclick: function () {
            this.print();
          }
        },

        /**
         * @ignore
         */
        separator: {
          separator: true
        },

        /**
         * @ignore
         */
        downloadPNG: {
          textKey: 'downloadPNG',
          onclick: function () {
            this.exportChart();
          }
        },

        /**
         * @ignore
         */
        downloadJPEG: {
          textKey: 'downloadJPEG',
          onclick: function () {
            this.exportChart({
              type: 'image/jpeg'
            });
          }
        },

        /**
         * @ignore
         */
        downloadPDF: {
          textKey: 'downloadPDF',
          onclick: function () {
            this.exportChart({
              type: 'application/pdf'
            });
          }
        },

        /**
         * @ignore
         */
        downloadSVG: {
          textKey: 'downloadSVG',
          onclick: function () {
            this.exportChart({
              type: 'image/svg+xml'
            });
          }
        }
      }
    }; // Add language

    /**
     * @optionparent lang
     */

    var lang = {
      /**
       * Exporting module only. The text for the menu item to view the chart
       * in full screen.
       *
       * @since 8.0.1
       *
       * @private
       */
      viewFullscreen: 'View in full screen',

      /**
       * Exporting module only. The text for the menu item to exit the chart
       * from full screen.
       *
       * @since 8.0.1
       *
       * @private
       */
      exitFullscreen: 'Exit from full screen',

      /**
       * Exporting module only. The text for the menu item to print the chart.
       *
       * @since    3.0.1
       * @requires modules/exporting
       *
       * @private
       */
      printChart: 'Print chart',

      /**
       * Exporting module only. The text for the PNG download menu item.
       *
       * @since    2.0
       * @requires modules/exporting
       *
       * @private
       */
      downloadPNG: 'Download PNG image',

      /**
       * Exporting module only. The text for the JPEG download menu item.
       *
       * @since    2.0
       * @requires modules/exporting
       *
       * @private
       */
      downloadJPEG: 'Download JPEG image',

      /**
       * Exporting module only. The text for the PDF download menu item.
       *
       * @since    2.0
       * @requires modules/exporting
       *
       * @private
       */
      downloadPDF: 'Download PDF document',

      /**
       * Exporting module only. The text for the SVG download menu item.
       *
       * @since    2.0
       * @requires modules/exporting
       *
       * @private
       */
      downloadSVG: 'Download SVG vector image',

      /**
       * Exporting module menu. The tooltip title for the context menu holding
       * print and export menu items.
       *
       * @since    3.0
       * @requires modules/exporting
       *
       * @private
       */
      contextButtonTitle: 'Chart context menu'
    };
    var navigation = {
      /**
       * A collection of options for buttons appearing in the exporting
       * module.
       *
       * In styled mode, the buttons are styled with the
       * `.highcharts-contextbutton` and `.highcharts-button-symbol` classes.
       *
       * @requires modules/exporting
       *
       * @private
       */
      buttonOptions: {
        /**
         * Whether to enable buttons.
         *
         * @sample highcharts/navigation/buttonoptions-enabled/
         *         Exporting module loaded but buttons disabled
         *
         * @type      {boolean}
         * @default   true
         * @since     2.0
         * @apioption navigation.buttonOptions.enabled
         */

        /**
         * The pixel size of the symbol on the button.
         *
         * @sample highcharts/navigation/buttonoptions-height/
         *         Bigger buttons
         *
         * @since 2.0
         */
        symbolSize: 14,

        /**
         * The x position of the center of the symbol inside the button.
         *
         * @sample highcharts/navigation/buttonoptions-height/
         *         Bigger buttons
         *
         * @since 2.0
         */
        symbolX: 12.5,

        /**
         * The y position of the center of the symbol inside the button.
         *
         * @sample highcharts/navigation/buttonoptions-height/
         *         Bigger buttons
         *
         * @since 2.0
         */
        symbolY: 10.5,

        /**
         * Alignment for the buttons.
         *
         * @sample highcharts/navigation/buttonoptions-align/
         *         Center aligned
         *
         * @type  {Highcharts.AlignValue}
         * @since 2.0
         */
        align: 'right',

        /**
         * The pixel spacing between buttons.
         *
         * @since 2.0
         */
        buttonSpacing: 3,

        /**
         * Pixel height of the buttons.
         *
         * @sample highcharts/navigation/buttonoptions-height/
         *         Bigger buttons
         *
         * @since 2.0
         */
        height: 22,

        /**
         * A text string to add to the individual button.
         *
         * @sample highcharts/exporting/buttons-text/
         *         Full text button
         * @sample highcharts/exporting/buttons-text-symbol/
         *         Combined symbol and text
         *
         * @type      {string}
         * @default   null
         * @since     3.0
         * @apioption navigation.buttonOptions.text
         */

        /**
         * The vertical offset of the button's position relative to its
         * `verticalAlign`.
         *
         * @sample highcharts/navigation/buttonoptions-verticalalign/
         *         Buttons at lower right
         *
         * @type      {number}
         * @default   0
         * @since     2.0
         * @apioption navigation.buttonOptions.y
         */

        /**
         * The vertical alignment of the buttons. Can be one of `"top"`,
         * `"middle"` or `"bottom"`.
         *
         * @sample highcharts/navigation/buttonoptions-verticalalign/
         *         Buttons at lower right
         *
         * @type  {Highcharts.VerticalAlignValue}
         * @since 2.0
         */
        verticalAlign: 'top',

        /**
         * The pixel width of the button.
         *
         * @sample highcharts/navigation/buttonoptions-height/
         *         Bigger buttons
         *
         * @since 2.0
         */
        width: 24,

        /**
         * Fill color for the symbol within the button.
         *
         * @sample highcharts/navigation/buttonoptions-symbolfill/
         *         Blue symbol stroke for one of the buttons
         *
         * @type  {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @since 2.0
         */
        symbolFill: "#666666"
        /* neutralColor60 */
        ,

        /**
         * The color of the symbol's stroke or line.
         *
         * @sample highcharts/navigation/buttonoptions-symbolstroke/
         *         Blue symbol stroke
         *
         * @type  {Highcharts.ColorString}
         * @since 2.0
         */
        symbolStroke: "#666666"
        /* neutralColor60 */
        ,

        /**
         * The pixel stroke width of the symbol on the button.
         *
         * @sample highcharts/navigation/buttonoptions-height/
         *         Bigger buttons
         *
         * @since 2.0
         */
        symbolStrokeWidth: 3,

        /**
         * A configuration object for the button theme. The object accepts
         * SVG properties like `stroke-width`, `stroke` and `fill`.
         * Tri-state button styles are supported by the `states.hover` and
         * `states.select` objects.
         *
         * @sample highcharts/navigation/buttonoptions-theme/
         *         Theming the buttons
         *
         * @requires modules/exporting
         *
         * @since 3.0
         */
        theme: {
          /**
           * The default fill exists only to capture hover events.
           *
           * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @default   #ffffff
           * @apioption navigation.buttonOptions.theme.fill
           */

          /**
           * Default stroke for the buttons.
           * @type      {Highcharts.ColorString}
           * @default   none
           * @apioption navigation.buttonOptions.theme.stroke
           */

          /**
           * Padding for the button.
           */
          padding: 5
        }
      },

      /**
       * CSS styles for the popup menu appearing by default when the export
       * icon is clicked. This menu is rendered in HTML.
       *
       * @see In styled mode, the menu is styled with the `.highcharts-menu`
       *      class.
       *
       * @sample highcharts/navigation/menustyle/
       *         Light gray menu background
       *
       * @type    {Highcharts.CSSObject}
       * @default {"border": "1px solid #999999", "background": "#ffffff", "padding": "5px 0"}
       * @since   2.0
       *
       * @private
       */
      menuStyle: {
        /** @ignore-option */
        border: "1px solid " + "#999999"
        /* neutralColor40 */
        ,

        /** @ignore-option */
        background: "#ffffff"
        /* backgroundColor */
        ,

        /** @ignore-option */
        padding: '5px 0'
      },

      /**
       * CSS styles for the individual items within the popup menu appearing
       * by default when the export icon is clicked. The menu items are
       * rendered in HTML. Font size defaults to `11px` on desktop and `14px`
       * on touch devices.
       *
       * @see In styled mode, the menu items are styled with the
       *      `.highcharts-menu-item` class.
       *
       * @sample {highcharts} highcharts/navigation/menuitemstyle/
       *         Add a grey stripe to the left
       *
       * @type    {Highcharts.CSSObject}
       * @default {"padding": "0.5em 1em", "color": "#333333", "background": "none", "fontSize": "11px/14px", "transition": "background 250ms, color 250ms"}
       * @since   2.0
       *
       * @private
       */
      menuItemStyle: {
        /** @ignore-option */
        padding: '0.5em 1em',

        /** @ignore-option */
        color: "#333333"
        /* neutralColor80 */
        ,

        /** @ignore-option */
        background: 'none',

        /** @ignore-option */
        fontSize: isTouchDevice ? '14px' : '11px',

        /** @ignore-option */
        transition: 'background 250ms, color 250ms'
      },

      /**
       * CSS styles for the hover state of the individual items within the
       * popup menu appearing by default when the export icon is clicked. The
       * menu items are rendered in HTML.
       *
       * @see In styled mode, the menu items are styled with the
       *      `.highcharts-menu-item` class.
       *
       * @sample highcharts/navigation/menuitemhoverstyle/
       *         Bold text on hover
       *
       * @type    {Highcharts.CSSObject}
       * @default {"background": "#335cad", "color": "#ffffff"}
       * @since   2.0
       *
       * @private
       */
      menuItemHoverStyle: {
        /** @ignore-option */
        background: "#335cad"
        /* highlightColor80 */
        ,

        /** @ignore-option */
        color: "#ffffff"
        /* backgroundColor */

      }
    };
    /* *
     *
     *  Default Export
     *
     * */

    var ExportingDefaults = {
      exporting: exporting,
      lang: lang,
      navigation: navigation
    };
    return ExportingDefaults;
  });

  _registerModule(_modules, 'Extensions/Exporting/ExportingSymbols.js', [], function () {
    /* *
     *
     *  Exporting module
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */

    /* *
     *
     *  Composition
     *
     * */
    var ExportingSymbols;

    (function (ExportingSymbols) {
      /* *
       *
       *  Constants
       *
       * */
      var modifiedClasses = [];
      /* *
       *
       *  Functions
       *
       * */

      /* eslint-disable valid-jsdoc */

      /**
       * @private
       */

      function compose(SVGRendererClass) {
        if (modifiedClasses.indexOf(SVGRendererClass) === -1) {
          modifiedClasses.push(SVGRendererClass);
          var symbols = SVGRendererClass.prototype.symbols;
          symbols.menu = menu;
          symbols.menuball = menuball.bind(symbols);
        }
      }

      ExportingSymbols.compose = compose;
      /**
       * @private
       */

      function menu(x, y, width, height) {
        var arr = [['M', x, y + 2.5], ['L', x + width, y + 2.5], ['M', x, y + height / 2 + 0.5], ['L', x + width, y + height / 2 + 0.5], ['M', x, y + height - 1.5], ['L', x + width, y + height - 1.5]];
        return arr;
      }
      /**
       * @private
       */


      function menuball(x, y, width, height) {
        var h = height / 3 - 2;
        var path = [];
        path = path.concat(this.circle(width - h, y, h, h), this.circle(width - h, y + h + 4, h, h), this.circle(width - h, y + 2 * (h + 4), h, h));
        return path;
      }
    })(ExportingSymbols || (ExportingSymbols = {}));
    /* *
     *
     *  Default Export
     *
     * */


    return ExportingSymbols;
  });

  _registerModule(_modules, 'Core/HttpUtilities.js', [_modules['Core/Globals.js'], _modules['Core/Utilities.js']], function (G, U) {
    /* *
     *
     *  (c) 2010-2021 Christer Vasseng, Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var doc = G.doc;
    var createElement = U.createElement,
        discardElement = U.discardElement,
        merge = U.merge,
        objectEach = U.objectEach;
    /**
     * Perform an Ajax call.
     *
     * @function Highcharts.ajax
     *
     * @param {Partial<Highcharts.AjaxSettingsObject>} attr
     *        The Ajax settings to use.
     *
     * @return {false|undefined}
     *         Returns false, if error occured.
     */

    function ajax(attr) {
      var options = merge(true, {
        url: false,
        type: 'get',
        dataType: 'json',
        success: false,
        error: false,
        data: false,
        headers: {}
      }, attr),
          headers = {
        json: 'application/json',
        xml: 'application/xml',
        text: 'text/plain',
        octet: 'application/octet-stream'
      },
          r = new XMLHttpRequest();
      /**
       * @private
       * @param {XMLHttpRequest} xhr
       * Internal request object.
       * @param {string|Error} err
       * Occured error.
       */

      function handleError(xhr, err) {
        if (options.error) {
          options.error(xhr, err);
        } else {// @todo Maybe emit a highcharts error event here
        }
      }

      if (!options.url) {
        return false;
      }

      r.open(options.type.toUpperCase(), options.url, true);

      if (!options.headers['Content-Type']) {
        r.setRequestHeader('Content-Type', headers[options.dataType] || headers.text);
      }

      objectEach(options.headers, function (val, key) {
        r.setRequestHeader(key, val);
      }); // @todo lacking timeout handling

      r.onreadystatechange = function () {
        var res;

        if (r.readyState === 4) {
          if (r.status === 200) {
            res = r.responseText;

            if (options.dataType === 'json') {
              try {
                res = JSON.parse(res);
              } catch (e) {
                return handleError(r, e);
              }
            }

            return options.success && options.success(res);
          }

          handleError(r, r.responseText);
        }
      };

      try {
        options.data = JSON.stringify(options.data);
      } catch (e) {// empty
      }

      r.send(options.data || true);
    }
    /**
     * Get a JSON resource over XHR, also supporting CORS without preflight.
     *
     * @function Highcharts.getJSON
     * @param {string} url
     *        The URL to load.
     * @param {Function} success
     *        The success callback. For error handling, use the `Highcharts.ajax`
     *        function instead.
     */


    function getJSON(url, success) {
      HttpUtilities.ajax({
        url: url,
        success: success,
        dataType: 'json',
        headers: {
          // Override the Content-Type to avoid preflight problems with CORS
          // in the Highcharts demos
          'Content-Type': 'text/plain'
        }
      });
    }
    /**
     * The post utility
     *
     * @private
     * @function Highcharts.post
     *
     * @param {string} url
     * Post URL
     *
     * @param {Object} data
     * Post data
     *
     * @param {Highcharts.Dictionary<string>} [formAttributes]
     * Additional attributes for the post request
     */


    function post(url, data, formAttributes) {
      // create the form
      var form = createElement('form', merge({
        method: 'post',
        action: url,
        enctype: 'multipart/form-data'
      }, formAttributes), {
        display: 'none'
      }, doc.body); // add the data

      objectEach(data, function (val, name) {
        createElement('input', {
          type: 'hidden',
          name: name,
          value: val
        }, null, form);
      }); // submit

      form.submit(); // clean up

      discardElement(form);
    }
    /* *
     *
     *  Default Export
     *
     * */


    var HttpUtilities = {
      ajax: ajax,
      getJSON: getJSON,
      post: post
    };
    /**
     * @interface Highcharts.AjaxSettingsObject
     */

    /**
    * The payload to send.
    *
    * @name Highcharts.AjaxSettingsObject#data
    * @type {string|Highcharts.Dictionary<any>}
    */

    /**
    * The data type expected.
    * @name Highcharts.AjaxSettingsObject#dataType
    * @type {"json"|"xml"|"text"|"octet"}
    */

    /**
    * Function to call on error.
    * @name Highcharts.AjaxSettingsObject#error
    * @type {Function}
    */

    /**
    * The headers; keyed on header name.
    * @name Highcharts.AjaxSettingsObject#headers
    * @type {Highcharts.Dictionary<string>}
    */

    /**
    * Function to call on success.
    * @name Highcharts.AjaxSettingsObject#success
    * @type {Function}
    */

    /**
    * The HTTP method to use. For example GET or POST.
    * @name Highcharts.AjaxSettingsObject#type
    * @type {string}
    */

    /**
    * The URL to call.
    * @name Highcharts.AjaxSettingsObject#url
    * @type {string}
    */

    ''; // keeps doclets above in JS file

    return HttpUtilities;
  });

  _registerModule(_modules, 'Extensions/Exporting/Exporting.js', [_modules['Core/Renderer/HTML/AST.js'], _modules['Core/Chart/Chart.js'], _modules['Core/Chart/ChartNavigationComposition.js'], _modules['Core/DefaultOptions.js'], _modules['Extensions/Exporting/ExportingDefaults.js'], _modules['Extensions/Exporting/ExportingSymbols.js'], _modules['Core/Globals.js'], _modules['Core/HttpUtilities.js'], _modules['Core/Utilities.js']], function (AST, Chart, ChartNavigationComposition, D, ExportingDefaults, ExportingSymbols, G, HU, U) {
    /* *
     *
     *  Exporting module
     *
     *  (c) 2010-2021 Torstein Honsi
     *
     *  License: www.highcharts.com/license
     *
     *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
     *
     * */
    var defaultOptions = D.defaultOptions;
    var doc = G.doc,
        win = G.win;
    var addEvent = U.addEvent,
        css = U.css,
        createElement = U.createElement,
        discardElement = U.discardElement,
        extend = U.extend,
        find = U.find,
        fireEvent = U.fireEvent,
        isObject = U.isObject,
        merge = U.merge,
        objectEach = U.objectEach,
        pick = U.pick,
        removeEvent = U.removeEvent,
        uniqueKey = U.uniqueKey;
    /* *
     *
     *  Composition
     *
     * */

    var Exporting;

    (function (Exporting) {
      /* *
       *
       *  Declarations
       *
       * */

      /* *
       *
       *  Constants
       *
       * */
      var composedClasses = []; // These CSS properties are not inlined. Remember camelCase.

      var inlineBlacklist = [/-/, /^(clipPath|cssText|d|height|width)$/, /^font$/, /[lL]ogical(Width|Height)$/, /perspective/, /TapHighlightColor/, /^transition/, /^length$/ // #7700
      // /^text (border|color|cursor|height|webkitBorder)/
      ]; // These ones are translated to attributes rather than styles

      var inlineToAttributes = ['fill', 'stroke', 'strokeLinecap', 'strokeLinejoin', 'strokeWidth', 'textAnchor', 'x', 'y'];
      Exporting.inlineWhitelist = [];
      var unstyledElements = ['clipPath', 'defs', 'desc'];
      /* *
       *
       *  Variables
       *
       * */

      var printingChart;
      /* *
       *
       *  Functions
       *
       * */

      /* eslint-disable valid-jsdoc */

      /**
       * Add the export button to the chart, with options.
       *
       * @private
       * @function Highcharts.Chart#addButton
       * @param {Highcharts.NavigationButtonOptions} options
       * @requires modules/exporting
       */

      function addButton(options) {
        var chart = this,
            renderer = chart.renderer,
            btnOptions = merge(chart.options.navigation.buttonOptions, options),
            onclick = btnOptions.onclick,
            menuItems = btnOptions.menuItems,
            symbolSize = btnOptions.symbolSize || 12;
        var symbol;

        if (!chart.btnCount) {
          chart.btnCount = 0;
        } // Keeps references to the button elements


        if (!chart.exportDivElements) {
          chart.exportDivElements = [];
          chart.exportSVGElements = [];
        }

        if (btnOptions.enabled === false || !btnOptions.theme) {
          return;
        }

        var attr = btnOptions.theme,
            states = attr.states,
            hover = states && states.hover,
            select = states && states.select;
        var callback;

        if (!chart.styledMode) {
          attr.fill = pick(attr.fill, "#ffffff"
          /* backgroundColor */
          );
          attr.stroke = pick(attr.stroke, 'none');
        }

        delete attr.states;

        if (onclick) {
          callback = function (e) {
            if (e) {
              e.stopPropagation();
            }

            onclick.call(chart, e);
          };
        } else if (menuItems) {
          callback = function (e) {
            // consistent with onclick call (#3495)
            if (e) {
              e.stopPropagation();
            }

            chart.contextMenu(button.menuClassName, menuItems, button.translateX, button.translateY, button.width, button.height, button);
            button.setState(2);
          };
        }

        if (btnOptions.text && btnOptions.symbol) {
          attr.paddingLeft = pick(attr.paddingLeft, 30);
        } else if (!btnOptions.text) {
          extend(attr, {
            width: btnOptions.width,
            height: btnOptions.height,
            padding: 0
          });
        }

        if (!chart.styledMode) {
          attr['stroke-linecap'] = 'round';
          attr.fill = pick(attr.fill, "#ffffff"
          /* backgroundColor */
          );
          attr.stroke = pick(attr.stroke, 'none');
        }

        var button = renderer.button(btnOptions.text, 0, 0, callback, attr, hover, select).addClass(options.className).attr({
          title: pick(chart.options.lang[btnOptions._titleKey || btnOptions.titleKey], '')
        });
        button.menuClassName = options.menuClassName || 'highcharts-menu-' + chart.btnCount++;

        if (btnOptions.symbol) {
          symbol = renderer.symbol(btnOptions.symbol, btnOptions.symbolX - symbolSize / 2, btnOptions.symbolY - symbolSize / 2, symbolSize, symbolSize // If symbol is an image, scale it (#7957)
          , {
            width: symbolSize,
            height: symbolSize
          }).addClass('highcharts-button-symbol').attr({
            zIndex: 1
          }).add(button);

          if (!chart.styledMode) {
            symbol.attr({
              stroke: btnOptions.symbolStroke,
              fill: btnOptions.symbolFill,
              'stroke-width': btnOptions.symbolStrokeWidth || 1
            });
          }
        }

        button.add(chart.exportingGroup).align(extend(btnOptions, {
          width: button.width,
          x: pick(btnOptions.x, chart.buttonOffset) // #1654

        }), true, 'spacingBox');
        chart.buttonOffset += (button.width + btnOptions.buttonSpacing) * (btnOptions.align === 'right' ? -1 : 1);
        chart.exportSVGElements.push(button, symbol);
      }
      /**
       * Clena up after printing a chart.
       *
       * @function Highcharts#afterPrint
       *
       * @private
       *
       * @param {Highcharts.Chart} chart
       *        Chart that was (or suppose to be) printed
       *
       * @emits Highcharts.Chart#event:afterPrint
       */


      function afterPrint() {
        var chart = this;

        if (!chart.printReverseInfo) {
          return void 0;
        }

        var _a = chart.printReverseInfo,
            childNodes = _a.childNodes,
            origDisplay = _a.origDisplay,
            resetParams = _a.resetParams; // put the chart back in

        chart.moveContainers(chart.renderTo); // restore all body content

        [].forEach.call(childNodes, function (node, i) {
          if (node.nodeType === 1) {
            node.style.display = origDisplay[i] || '';
          }
        });
        chart.isPrinting = false; // Reset printMaxWidth

        if (resetParams) {
          chart.setSize.apply(chart, resetParams);
        }

        delete chart.printReverseInfo;
        printingChart = void 0;
        fireEvent(chart, 'afterPrint');
      }
      /**
       * Prepare chart and document before printing a chart.
       *
       * @function Highcharts#beforePrint
       *
       * @private
       *
       *
       * @emits Highcharts.Chart#event:beforePrint
       */


      function beforePrint() {
        var chart = this,
            body = doc.body,
            printMaxWidth = chart.options.exporting.printMaxWidth,
            printReverseInfo = {
          childNodes: body.childNodes,
          origDisplay: [],
          resetParams: void 0
        };
        chart.isPrinting = true;
        chart.pointer.reset(null, 0);
        fireEvent(chart, 'beforePrint'); // Handle printMaxWidth

        var handleMaxWidth = printMaxWidth && chart.chartWidth > printMaxWidth;

        if (handleMaxWidth) {
          printReverseInfo.resetParams = [chart.options.chart.width, void 0, false];
          chart.setSize(printMaxWidth, void 0, false);
        } // hide all body content


        [].forEach.call(printReverseInfo.childNodes, function (node, i) {
          if (node.nodeType === 1) {
            printReverseInfo.origDisplay[i] = node.style.display;
            node.style.display = 'none';
          }
        }); // pull out the chart

        chart.moveContainers(body); // Storage details for undo action after printing

        chart.printReverseInfo = printReverseInfo;
      }
      /**
       * @private
       */


      function chartCallback(chart) {
        var composition = chart;
        composition.renderExporting();
        addEvent(chart, 'redraw', composition.renderExporting); // Destroy the export elements at chart destroy

        addEvent(chart, 'destroy', composition.destroyExport); // Uncomment this to see a button directly below the chart, for quick
        // testing of export

        /*
        let button, viewImage, viewSource;
        if (!chart.renderer.forExport) {
            viewImage = function () {
                let div = doc.createElement('div');
                div.innerHTML = chart.getSVGForExport();
                chart.renderTo.parentNode.appendChild(div);
            };
             viewSource = function () {
                let pre = doc.createElement('pre');
                pre.innerHTML = chart.getSVGForExport()
                    .replace(/</g, '\n&lt;')
                    .replace(/>/g, '&gt;');
                chart.renderTo.parentNode.appendChild(pre);
            };
             viewImage();
             // View SVG Image
            button = doc.createElement('button');
            button.innerHTML = 'View SVG Image';
            chart.renderTo.parentNode.appendChild(button);
            button.onclick = viewImage;
             // View SVG Source
            button = doc.createElement('button');
            button.innerHTML = 'View SVG Source';
            chart.renderTo.parentNode.appendChild(button);
            button.onclick = viewSource;
        }
        //*/
      }
      /**
       * @private
       */


      function compose(ChartClass, SVGRendererClass) {
        ExportingSymbols.compose(SVGRendererClass);

        if (composedClasses.indexOf(ChartClass) === -1) {
          composedClasses.push(ChartClass);
          var chartProto = ChartClass.prototype;
          chartProto.afterPrint = afterPrint;
          chartProto.exportChart = exportChart;
          chartProto.inlineStyles = inlineStyles;
          chartProto.print = print;
          chartProto.sanitizeSVG = sanitizeSVG;
          chartProto.getChartHTML = getChartHTML;
          chartProto.getSVG = getSVG;
          chartProto.getSVGForExport = getSVGForExport;
          chartProto.getFilename = getFilename;
          chartProto.moveContainers = moveContainers;
          chartProto.beforePrint = beforePrint;
          chartProto.contextMenu = contextMenu;
          chartProto.addButton = addButton;
          chartProto.destroyExport = destroyExport;
          chartProto.renderExporting = renderExporting;
          chartProto.callbacks.push(chartCallback);
          addEvent(ChartClass, 'init', onChartInit);

          if (G.isSafari) {
            G.win.matchMedia('print').addListener(function (mqlEvent) {
              if (!printingChart) {
                return void 0;
              }

              if (mqlEvent.matches) {
                printingChart.beforePrint();
              } else {
                printingChart.afterPrint();
              }
            });
          }
        }
      }

      Exporting.compose = compose;
      /**
       * Display a popup menu for choosing the export type.
       *
       * @private
       * @function Highcharts.Chart#contextMenu
       * @param {string} className
       *        An identifier for the menu.
       * @param {Array<string|Highcharts.ExportingMenuObject>} items
       *        A collection with text and onclicks for the items.
       * @param {number} x
       *        The x position of the opener button
       * @param {number} y
       *        The y position of the opener button
       * @param {number} width
       *        The width of the opener button
       * @param {number} height
       *        The height of the opener button
       * @requires modules/exporting
       */

      function contextMenu(className, items, x, y, width, height, button) {
        var chart = this,
            navOptions = chart.options.navigation,
            chartWidth = chart.chartWidth,
            chartHeight = chart.chartHeight,
            cacheName = 'cache-' + className,
            menuPadding = Math.max(width, height); // for mouse leave detection

        var innerMenu,
            menu = chart[cacheName]; // create the menu only the first time

        if (!menu) {
          // create a HTML element above the SVG
          chart.exportContextMenu = chart[cacheName] = menu = createElement('div', {
            className: className
          }, {
            position: 'absolute',
            zIndex: 1000,
            padding: menuPadding + 'px',
            pointerEvents: 'auto'
          }, chart.fixedDiv || chart.container);
          innerMenu = createElement('ul', {
            className: 'highcharts-menu'
          }, {
            listStyle: 'none',
            margin: 0,
            padding: 0
          }, menu); // Presentational CSS

          if (!chart.styledMode) {
            css(innerMenu, extend({
              MozBoxShadow: '3px 3px 10px #888',
              WebkitBoxShadow: '3px 3px 10px #888',
              boxShadow: '3px 3px 10px #888'
            }, navOptions.menuStyle));
          } // hide on mouse out


          menu.hideMenu = function () {
            css(menu, {
              display: 'none'
            });

            if (button) {
              button.setState(0);
            }

            chart.openMenu = false; // #10361, #9998

            css(chart.renderTo, {
              overflow: 'hidden'
            });
            css(chart.container, {
              overflow: 'hidden'
            });
            U.clearTimeout(menu.hideTimer);
            fireEvent(chart, 'exportMenuHidden');
          }; // Hide the menu some time after mouse leave (#1357)


          chart.exportEvents.push(addEvent(menu, 'mouseleave', function () {
            menu.hideTimer = win.setTimeout(menu.hideMenu, 500);
          }), addEvent(menu, 'mouseenter', function () {
            U.clearTimeout(menu.hideTimer);
          }), // Hide it on clicking or touching outside the menu (#2258,
          // #2335, #2407)
          addEvent(doc, 'mouseup', function (e) {
            if (!chart.pointer.inClass(e.target, className)) {
              menu.hideMenu();
            }
          }), addEvent(menu, 'click', function () {
            if (chart.openMenu) {
              menu.hideMenu();
            }
          })); // create the items

          items.forEach(function (item) {
            if (typeof item === 'string') {
              item = chart.options.exporting.menuItemDefinitions[item];
            }

            if (isObject(item, true)) {
              var element = void 0;

              if (item.separator) {
                element = createElement('hr', void 0, void 0, innerMenu);
              } else {
                // When chart initialized with the table, wrong button
                // text displayed, #14352.
                if (item.textKey === 'viewData' && chart.isDataTableVisible) {
                  item.textKey = 'hideData';
                }

                element = createElement('li', {
                  className: 'highcharts-menu-item',
                  onclick: function (e) {
                    if (e) {
                      // IE7
                      e.stopPropagation();
                    }

                    menu.hideMenu();

                    if (item.onclick) {
                      item.onclick.apply(chart, arguments);
                    }
                  }
                }, void 0, innerMenu);
                AST.setElementHTML(element, item.text || chart.options.lang[item.textKey]);

                if (!chart.styledMode) {
                  element.onmouseover = function () {
                    css(this, navOptions.menuItemHoverStyle);
                  };

                  element.onmouseout = function () {
                    css(this, navOptions.menuItemStyle);
                  };

                  css(element, extend({
                    cursor: 'pointer'
                  }, navOptions.menuItemStyle));
                }
              } // Keep references to menu divs to be able to destroy them


              chart.exportDivElements.push(element);
            }
          }); // Keep references to menu and innerMenu div to be able to destroy
          // them

          chart.exportDivElements.push(innerMenu, menu);
          chart.exportMenuWidth = menu.offsetWidth;
          chart.exportMenuHeight = menu.offsetHeight;
        }

        var menuStyle = {
          display: 'block'
        }; // if outside right, right align it

        if (x + chart.exportMenuWidth > chartWidth) {
          menuStyle.right = chartWidth - x - width - menuPadding + 'px';
        } else {
          menuStyle.left = x - menuPadding + 'px';
        } // if outside bottom, bottom align it


        if (y + height + chart.exportMenuHeight > chartHeight && button.alignOptions.verticalAlign !== 'top') {
          menuStyle.bottom = chartHeight - y - menuPadding + 'px';
        } else {
          menuStyle.top = y + height - menuPadding + 'px';
        }

        css(menu, menuStyle); // #10361, #9998

        css(chart.renderTo, {
          overflow: ''
        });
        css(chart.container, {
          overflow: ''
        });
        chart.openMenu = true;
        fireEvent(chart, 'exportMenuShown');
      }
      /**
       * Destroy the export buttons.
       * @private
       * @function Highcharts.Chart#destroyExport
       * @param {global.Event} [e]
       * @requires modules/exporting
       */


      function destroyExport(e) {
        var chart = e ? e.target : this,
            exportSVGElements = chart.exportSVGElements,
            exportDivElements = chart.exportDivElements,
            exportEvents = chart.exportEvents;
        var cacheName; // Destroy the extra buttons added

        if (exportSVGElements) {
          exportSVGElements.forEach(function (elem, i) {
            // Destroy and null the svg elements
            if (elem) {
              // #1822
              elem.onclick = elem.ontouchstart = null;
              cacheName = 'cache-' + elem.menuClassName;

              if (chart[cacheName]) {
                delete chart[cacheName];
              }

              exportSVGElements[i] = elem.destroy();
            }
          });
          exportSVGElements.length = 0;
        } // Destroy the exporting group


        if (chart.exportingGroup) {
          chart.exportingGroup.destroy();
          delete chart.exportingGroup;
        } // Destroy the divs for the menu


        if (exportDivElements) {
          exportDivElements.forEach(function (elem, i) {
            if (elem) {
              // Remove the event handler
              U.clearTimeout(elem.hideTimer); // #5427

              removeEvent(elem, 'mouseleave'); // Remove inline events
              // (chart.exportDivElements as any)[i] =

              exportDivElements[i] = elem.onmouseout = elem.onmouseover = elem.ontouchstart = elem.onclick = null; // Destroy the div by moving to garbage bin

              discardElement(elem);
            }
          });
          exportDivElements.length = 0;
        }

        if (exportEvents) {
          exportEvents.forEach(function (unbind) {
            unbind();
          });
          exportEvents.length = 0;
        }
      }
      /**
       * Exporting module required. Submit an SVG version of the chart to a server
       * along with some parameters for conversion.
       *
       * @sample highcharts/members/chart-exportchart/
       *         Export with no options
       * @sample highcharts/members/chart-exportchart-filename/
       *         PDF type and custom filename
       * @sample highcharts/members/chart-exportchart-custom-background/
       *         Different chart background in export
       * @sample stock/members/chart-exportchart/
       *         Export with Highcharts Stock
       *
       * @function Highcharts.Chart#exportChart
       *
       * @param {Highcharts.ExportingOptions} exportingOptions
       *        Exporting options in addition to those defined in
       *        [exporting](https://api.highcharts.com/highcharts/exporting).
       *
       * @param {Highcharts.Options} chartOptions
       *        Additional chart options for the exported chart. For example a
       *        different background color can be added here, or `dataLabels` for
       *        export only.
       *
       * @requires modules/exporting
       */


      function exportChart(exportingOptions, chartOptions) {
        var svg = this.getSVGForExport(exportingOptions, chartOptions); // merge the options

        exportingOptions = merge(this.options.exporting, exportingOptions); // do the post

        HU.post(exportingOptions.url, {
          filename: exportingOptions.filename ? exportingOptions.filename.replace(/\//g, '-') : this.getFilename(),
          type: exportingOptions.type,
          // IE8 fails to post undefined correctly, so use 0
          width: exportingOptions.width || 0,
          scale: exportingOptions.scale,
          svg: svg
        }, exportingOptions.formAttributes);
      }
      /**
       * Return the unfiltered innerHTML of the chart container. Used as hook for
       * plugins. In styled mode, it also takes care of inlining CSS style rules.
       *
       * @see Chart#getSVG
       *
       * @function Highcharts.Chart#getChartHTML
       *
       * @return {string}
       * The unfiltered SVG of the chart.
       *
       * @requires modules/exporting
       */


      function getChartHTML() {
        if (this.styledMode) {
          this.inlineStyles();
        }

        return this.container.innerHTML;
      }
      /**
       * Get the default file name used for exported charts. By default it creates
       * a file name based on the chart title.
       *
       * @function Highcharts.Chart#getFilename
       *
       * @return {string} A file name without extension.
       *
       * @requires modules/exporting
       */


      function getFilename() {
        var s = this.userOptions.title && this.userOptions.title.text;
        var filename = this.options.exporting.filename;

        if (filename) {
          return filename.replace(/\//g, '-');
        }

        if (typeof s === 'string') {
          filename = s.toLowerCase().replace(/<\/?[^>]+(>|$)/g, '') // strip HTML tags
          .replace(/[\s_]+/g, '-').replace(/[^a-z0-9\-]/g, '') // preserve only latin
          .replace(/^[\-]+/g, '') // dashes in the start
          .replace(/[\-]+/g, '-') // dashes in a row
          .substr(0, 24).replace(/[\-]+$/g, ''); // dashes in the end;
        }

        if (!filename || filename.length < 5) {
          filename = 'chart';
        }

        return filename;
      }
      /**
       * Return an SVG representation of the chart.
       *
       * @sample highcharts/members/chart-getsvg/
       *         View the SVG from a button
       *
       * @function Highcharts.Chart#getSVG
       *
       * @param {Highcharts.Options} [chartOptions]
       *        Additional chart options for the generated SVG representation. For
       *        collections like `xAxis`, `yAxis` or `series`, the additional
       *        options is either merged in to the original item of the same
       *        `id`, or to the first item if a common id is not found.
       *
       * @return {string}
       *         The SVG representation of the rendered chart.
       *
       * @emits Highcharts.Chart#event:getSVG
       *
       * @requires modules/exporting
       */


      function getSVG(chartOptions) {
        var chart = this;
        var svg,
            seriesOptions,
            // Copy the options and add extra options
        options = merge(chart.options, chartOptions); // Use userOptions to make the options chain in series right (#3881)

        options.plotOptions = merge(chart.userOptions.plotOptions, chartOptions && chartOptions.plotOptions); // ... and likewise with time, avoid that undefined time properties are
        // merged over legacy global time options

        options.time = merge(chart.userOptions.time, chartOptions && chartOptions.time); // create a sandbox where a new chart will be generated

        var sandbox = createElement('div', null, {
          position: 'absolute',
          top: '-9999em',
          width: chart.chartWidth + 'px',
          height: chart.chartHeight + 'px'
        }, doc.body); // get the source size

        var cssWidth = chart.renderTo.style.width,
            cssHeight = chart.renderTo.style.height,
            sourceWidth = options.exporting.sourceWidth || options.chart.width || /px$/.test(cssWidth) && parseInt(cssWidth, 10) || (options.isGantt ? 800 : 600),
            sourceHeight = options.exporting.sourceHeight || options.chart.height || /px$/.test(cssHeight) && parseInt(cssHeight, 10) || 400; // override some options

        extend(options.chart, {
          animation: false,
          renderTo: sandbox,
          forExport: true,
          renderer: 'SVGRenderer',
          width: sourceWidth,
          height: sourceHeight
        });
        options.exporting.enabled = false; // hide buttons in print

        delete options.data; // #3004
        // prepare for replicating the chart

        options.series = [];
        chart.series.forEach(function (serie) {
          seriesOptions = merge(serie.userOptions, {
            animation: false,
            enableMouseTracking: false,
            showCheckbox: false,
            visible: serie.visible
          }); // Used for the navigator series that has its own option set

          if (!seriesOptions.isInternal) {
            options.series.push(seriesOptions);
          }
        });
        var colls = {};
        chart.axes.forEach(function (axis) {
          // Assign an internal key to ensure a one-to-one mapping (#5924)
          if (!axis.userOptions.internalKey) {
            // #6444
            axis.userOptions.internalKey = uniqueKey();
          }

          if (!axis.options.isInternal) {
            if (!colls[axis.coll]) {
              colls[axis.coll] = true;
              options[axis.coll] = [];
            }

            options[axis.coll].push(merge(axis.userOptions, {
              visible: axis.visible
            }));
          }
        }); // Generate the chart copy

        var chartCopy = new chart.constructor(options, chart.callback); // Axis options and series options  (#2022, #3900, #5982)

        if (chartOptions) {
          ['xAxis', 'yAxis', 'series'].forEach(function (coll) {
            var collOptions = {};

            if (chartOptions[coll]) {
              collOptions[coll] = chartOptions[coll];
              chartCopy.update(collOptions);
            }
          });
        } // Reflect axis extremes in the export (#5924)


        chart.axes.forEach(function (axis) {
          var axisCopy = find(chartCopy.axes, function (copy) {
            return copy.options.internalKey === axis.userOptions.internalKey;
          }),
              extremes = axis.getExtremes(),
              userMin = extremes.userMin,
              userMax = extremes.userMax;

          if (axisCopy && (typeof userMin !== 'undefined' && userMin !== axisCopy.min || typeof userMax !== 'undefined' && userMax !== axisCopy.max)) {
            axisCopy.setExtremes(userMin, userMax, true, false);
          }
        }); // Get the SVG from the container's innerHTML

        svg = chartCopy.getChartHTML();
        fireEvent(this, 'getSVG', {
          chartCopy: chartCopy
        });
        svg = chart.sanitizeSVG(svg, options); // free up memory

        options = null;
        chartCopy.destroy();
        discardElement(sandbox);
        return svg;
      }
      /**
       * @private
       * @function Highcharts.Chart#getSVGForExport
       */


      function getSVGForExport(options, chartOptions) {
        var chartExportingOptions = this.options.exporting;
        return this.getSVG(merge({
          chart: {
            borderRadius: 0
          }
        }, chartExportingOptions.chartOptions, chartOptions, {
          exporting: {
            sourceWidth: options && options.sourceWidth || chartExportingOptions.sourceWidth,
            sourceHeight: options && options.sourceHeight || chartExportingOptions.sourceHeight
          }
        }));
      }
      /**
       * Make hyphenated property names out of camelCase
       * @private
       * @param {string} prop
       * Property name in camelCase
       * @return {string}
       * Hyphenated property name
       */


      function hyphenate(prop) {
        return prop.replace(/([A-Z])/g, function (a, b) {
          return '-' + b.toLowerCase();
        });
      }
      /**
       * Analyze inherited styles from stylesheets and add them inline
       *
       * @private
       * @function Highcharts.Chart#inlineStyles
       *
       * @todo What are the border styles for text about? In general, text has a
       *       lot of properties.
       *
       * @todo Make it work with IE9 and IE10.
       *
       * @requires modules/exporting
       */


      function inlineStyles() {
        var blacklist = inlineBlacklist,
            whitelist = Exporting.inlineWhitelist,
            // For IE
        defaultStyles = {};
        var dummySVG; // Create an iframe where we read default styles without pollution from
        // this body

        var iframe = doc.createElement('iframe');
        css(iframe, {
          width: '1px',
          height: '1px',
          visibility: 'hidden'
        });
        doc.body.appendChild(iframe);
        var iframeDoc = iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>');
        iframeDoc.close();
        /**
         * Call this on all elements and recurse to children
         * @private
         * @param {Highcharts.HTMLDOMElement} node
         *        Element child
             */

        function recurse(node) {
          var styles,
              parentStyles,
              cssText = '',
              dummy,
              styleAttr,
              blacklisted,
              whitelisted,
              i;
          /**
           * Check computed styles and whether they are in the white/blacklist
           * for styles or atttributes.
           * @private
           * @param {string} val
           *        Style value
           * @param {string} prop
           *        Style property name
                   */

          function filterStyles(val, prop) {
            // Check against whitelist & blacklist
            blacklisted = whitelisted = false;

            if (whitelist.length) {
              // Styled mode in IE has a whitelist instead.
              // Exclude all props not in this list.
              i = whitelist.length;

              while (i-- && !whitelisted) {
                whitelisted = whitelist[i].test(prop);
              }

              blacklisted = !whitelisted;
            } // Explicitly remove empty transforms


            if (prop === 'transform' && val === 'none') {
              blacklisted = true;
            }

            i = blacklist.length;

            while (i-- && !blacklisted) {
              blacklisted = blacklist[i].test(prop) || typeof val === 'function';
            }

            if (!blacklisted) {
              // If parent node has the same style, it gets inherited, no
              // need to inline it. Top-level props should be diffed
              // against parent (#7687).
              if ((parentStyles[prop] !== val || node.nodeName === 'svg') && defaultStyles[node.nodeName][prop] !== val) {
                // Attributes
                if (!inlineToAttributes || inlineToAttributes.indexOf(prop) !== -1) {
                  if (val) {
                    node.setAttribute(hyphenate(prop), val);
                  } // Styles

                } else {
                  cssText += hyphenate(prop) + ':' + val + ';';
                }
              }
            }
          }

          if (node.nodeType === 1 && unstyledElements.indexOf(node.nodeName) === -1) {
            styles = win.getComputedStyle(node, null);
            parentStyles = node.nodeName === 'svg' ? {} : win.getComputedStyle(node.parentNode, null); // Get default styles from the browser so that we don't have to
            // add these

            if (!defaultStyles[node.nodeName]) {
              /*
              if (!dummySVG) {
                  dummySVG = doc.createElementNS(H.SVG_NS, 'svg');
                  dummySVG.setAttribute('version', '1.1');
                  doc.body.appendChild(dummySVG);
              }
              */
              dummySVG = iframeDoc.getElementsByTagName('svg')[0];
              dummy = iframeDoc.createElementNS(node.namespaceURI, node.nodeName);
              dummySVG.appendChild(dummy); // Copy, so we can remove the node

              defaultStyles[node.nodeName] = merge(win.getComputedStyle(dummy, null)); // Remove default fill, otherwise text disappears when
              // exported

              if (node.nodeName === 'text') {
                delete defaultStyles.text.fill;
              }

              dummySVG.removeChild(dummy);
            } // Loop through all styles and add them inline if they are ok


            if (G.isFirefox || G.isMS) {
              // Some browsers put lots of styles on the prototype
              for (var p in styles) {
                // eslint-disable-line guard-for-in
                filterStyles(styles[p], p);
              }
            } else {
              objectEach(styles, filterStyles);
            } // Apply styles


            if (cssText) {
              styleAttr = node.getAttribute('style');
              node.setAttribute('style', (styleAttr ? styleAttr + ';' : '') + cssText);
            } // Set default stroke width (needed at least for IE)


            if (node.nodeName === 'svg') {
              node.setAttribute('stroke-width', '1px');
            }

            if (node.nodeName === 'text') {
              return;
            } // Recurse


            [].forEach.call(node.children || node.childNodes, recurse);
          }
        }
        /**
         * Remove the dummy objects used to get defaults
         * @private
             */


        function tearDown() {
          dummySVG.parentNode.removeChild(dummySVG); // Remove trash from DOM that stayed after each exporting

          iframe.parentNode.removeChild(iframe);
        }

        recurse(this.container.querySelector('svg'));
        tearDown();
      }
      /**
       * Move the chart container(s) to another div.
       *
       * @function Highcharts#moveContainers
       *
       * @private
       *
       * @param {Highcharts.HTMLDOMElement} moveTo
       *        Move target
       */


      function moveContainers(moveTo) {
        var chart = this;
        (chart.fixedDiv ? // When scrollablePlotArea is active (#9533)
        [chart.fixedDiv, chart.scrollingContainer] : [chart.container]).forEach(function (div) {
          moveTo.appendChild(div);
        });
      }
      /**
       * Add update methods to handle chart.update and chart.exporting.update and
       * chart.navigation.update. These must be added to the chart instance rather
       * than the Chart prototype in order to use the chart instance inside the
       * update function.
       * @private
       */


      function onChartInit() {
        var chart = this,

        /**
         * @private
         * @param {"exporting"|"navigation"} prop
         *        Property name in option root
         * @param {Highcharts.ExportingOptions|Highcharts.NavigationOptions} options
         *        Options to update
         * @param {boolean} [redraw=true]
         *        Whether to redraw
                 */
        update = function (prop, options, redraw) {
          chart.isDirtyExporting = true;
          merge(true, chart.options[prop], options);

          if (pick(redraw, true)) {
            chart.redraw();
          }
        };

        chart.exporting = {
          update: function (options, redraw) {
            update('exporting', options, redraw);
          }
        }; // Register update() method for navigation. Can not be set the same way
        // as for exporting, because navigation options are shared with bindings
        // which has separate update() logic.

        ChartNavigationComposition.compose(chart).navigation.addUpdate(function (options, redraw) {
          update('navigation', options, redraw);
        });
      }
      /**
       * Exporting module required. Clears away other elements in the page and
       * prints the chart as it is displayed. By default, when the exporting
       * module is enabled, a context button with a drop down menu in the upper
       * right corner accesses this function.
       *
       * @sample highcharts/members/chart-print/
       *         Print from a HTML button
       *
       * @function Highcharts.Chart#print
       *
       *
       * @emits Highcharts.Chart#event:beforePrint
       * @emits Highcharts.Chart#event:afterPrint
       *
       * @requires modules/exporting
       */


      function print() {
        var chart = this;

        if (chart.isPrinting) {
          // block the button while in printing mode
          return;
        }

        printingChart = chart;

        if (!G.isSafari) {
          chart.beforePrint();
        } // Give the browser time to draw WebGL content, an issue that randomly
        // appears (at least) in Chrome ~67 on the Mac (#8708).


        setTimeout(function () {
          win.focus(); // #1510

          win.print(); // allow the browser to prepare before reverting

          if (!G.isSafari) {
            setTimeout(function () {
              chart.afterPrint();
            }, 1000);
          }
        }, 1);
      }
      /**
       * Add the buttons on chart load
       * @private
       * @function Highcharts.Chart#renderExporting
       * @requires modules/exporting
       */


      function renderExporting() {
        var chart = this,
            exportingOptions = chart.options.exporting,
            buttons = exportingOptions.buttons,
            isDirty = chart.isDirtyExporting || !chart.exportSVGElements;
        chart.buttonOffset = 0;

        if (chart.isDirtyExporting) {
          chart.destroyExport();
        }

        if (isDirty && exportingOptions.enabled !== false) {
          chart.exportEvents = [];
          chart.exportingGroup = chart.exportingGroup || chart.renderer.g('exporting-group').attr({
            zIndex: 3 // #4955, // #8392

          }).add();
          objectEach(buttons, function (button) {
            chart.addButton(button);
          });
          chart.isDirtyExporting = false;
        }
      }
      /**
       * Exporting module only. A collection of fixes on the produced SVG to
       * account for expando properties, browser bugs, VML problems and other.
       * Returns a cleaned SVG.
       *
       * @private
       * @function Highcharts.Chart#sanitizeSVG
       * @param {string} svg
       *        SVG code to sanitize
       * @param {Highcharts.Options} options
       *        Chart options to apply
       * @return {string}
       *         Sanitized SVG code
       * @requires modules/exporting
       */


      function sanitizeSVG(svg, options) {
        var split = svg.indexOf('</svg>') + 6;
        var html = svg.substr(split); // Remove any HTML added to the container after the SVG (#894, #9087)

        svg = svg.substr(0, split); // Move HTML into a foreignObject

        if (options && options.exporting && options.exporting.allowHTML) {
          if (html) {
            html = '<foreignObject x="0" y="0" ' + 'width="' + options.chart.width + '" ' + 'height="' + options.chart.height + '">' + '<body xmlns="http://www.w3.org/1999/xhtml">' + // Some tags needs to be closed in xhtml (#13726)
            html.replace(/(<(?:img|br).*?(?=\>))>/g, '$1 />') + '</body>' + '</foreignObject>';
            svg = svg.replace('</svg>', html + '</svg>');
          }
        }

        svg = svg.replace(/zIndex="[^"]+"/g, '').replace(/symbolName="[^"]+"/g, '').replace(/jQuery[0-9]+="[^"]+"/g, '').replace(/url\(("|&quot;)(.*?)("|&quot;)\;?\)/g, 'url($2)').replace(/url\([^#]+#/g, 'url(#').replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+\:)href=/g, ' xlink:href=') // #3567
        .replace(/\n/, ' ') // Batik doesn't support rgba fills and strokes (#3095)
        .replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, // eslint-disable-line max-len
        '$1="rgb($2)" $1-opacity="$3"') // Replace HTML entities, issue #347
        .replace(/&nbsp;/g, '\u00A0') // no-break space
        .replace(/&shy;/g, '\u00AD'); // soft hyphen
        // Further sanitize for oldIE

        if (this.ieSanitizeSVG) {
          svg = this.ieSanitizeSVG(svg);
        }

        return svg;
      }
    })(Exporting || (Exporting = {}));
    /* *
     *
     *  Registry
     *
     * */


    defaultOptions.exporting = merge(ExportingDefaults.exporting, defaultOptions.exporting);
    defaultOptions.lang = merge(ExportingDefaults.lang, defaultOptions.lang); // Buttons and menus are collected in a separate config option set called
    // 'navigation'. This can be extended later to add control buttons like
    // zoom and pan right click menus.

    /**
     * A collection of options for buttons and menus appearing in the exporting
     * module or in Stock Tools.
     *
     * @requires     modules/exporting
     * @optionparent navigation
     */

    defaultOptions.navigation = merge(ExportingDefaults.navigation, defaultOptions.navigation);
    /* *
     *
     *  Default Export
     *
     * */

    /* *
     *
     *  API Declarations
     *
     * */

    /**
     * Gets fired after a chart is printed through the context menu item or the
     * Chart.print method.
     *
     * @callback Highcharts.ExportingAfterPrintCallbackFunction
     *
     * @param {Highcharts.Chart} chart
     *        The chart on which the event occured.
     *
     * @param {global.Event} event
     *        The event that occured.
     */

    /**
     * Gets fired before a chart is printed through the context menu item or the
     * Chart.print method.
     *
     * @callback Highcharts.ExportingBeforePrintCallbackFunction
     *
     * @param {Highcharts.Chart} chart
     *        The chart on which the event occured.
     *
     * @param {global.Event} event
     *        The event that occured.
     */

    /**
     * Function to call if the offline-exporting module fails to export a chart on
     * the client side.
     *
     * @callback Highcharts.ExportingErrorCallbackFunction
     *
     * @param {Highcharts.ExportingOptions} options
     *        The exporting options.
     *
     * @param {global.Error} err
     *        The error from the module.
     */

    /**
     * Definition for a menu item in the context menu.
     *
     * @interface Highcharts.ExportingMenuObject
     */

    /**
    * The text for the menu item.
    *
    * @name Highcharts.ExportingMenuObject#text
    * @type {string|undefined}
    */

    /**
    * If internationalization is required, the key to a language string.
    *
    * @name Highcharts.ExportingMenuObject#textKey
    * @type {string|undefined}
    */

    /**
    * The click handler for the menu item.
    *
    * @name Highcharts.ExportingMenuObject#onclick
    * @type {Highcharts.EventCallbackFunction<Highcharts.Chart>|undefined}
    */

    /**
    * Indicates a separator line instead of an item.
    *
    * @name Highcharts.ExportingMenuObject#separator
    * @type {boolean|undefined}
    */

    /**
     * Possible MIME types for exporting.
     *
     * @typedef {"image/png"|"image/jpeg"|"application/pdf"|"image/svg+xml"} Highcharts.ExportingMimeTypeValue
     */

    ''; // keeps doclets above in transpiled file

    /* *
     *
     *  API Options
     *
     * */

    /**
     * Fires after a chart is printed through the context menu item or the
     * `Chart.print` method.
     *
     * @sample highcharts/chart/events-beforeprint-afterprint/
     *         Rescale the chart to print
     *
     * @type      {Highcharts.ExportingAfterPrintCallbackFunction}
     * @since     4.1.0
     * @context   Highcharts.Chart
     * @requires  modules/exporting
     * @apioption chart.events.afterPrint
     */

    /**
     * Fires before a chart is printed through the context menu item or
     * the `Chart.print` method.
     *
     * @sample highcharts/chart/events-beforeprint-afterprint/
     *         Rescale the chart to print
     *
     * @type      {Highcharts.ExportingBeforePrintCallbackFunction}
     * @since     4.1.0
     * @context   Highcharts.Chart
     * @requires  modules/exporting
     * @apioption chart.events.beforePrint
     */

    ''; // keeps doclets above in transpiled file

    return Exporting;
  });

  _registerModule(_modules, 'masters/modules/exporting.src.js', [_modules['Core/Globals.js'], _modules['Extensions/Exporting/Exporting.js'], _modules['Core/HttpUtilities.js']], function (Highcharts, Exporting, HttpUtilities) {
    var G = Highcharts;
    G.HttpUtilities = HttpUtilities;
    G.ajax = HttpUtilities.ajax;
    G.getJSON = HttpUtilities.getJSON;
    G.post = HttpUtilities.post;
    Exporting.compose(G.Chart, G.Renderer);
  });
});

/***/ }),

/***/ 4409:
/*!********************************************************!*\
  !*** ./node_modules/highcharts/modules/solid-gauge.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v9.3.3 (2022-02-01)

 Solid angular gauge module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){ true&&module.exports?(a["default"]=a,module.exports=a): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ 3109),__webpack_require__(/*! highcharts/highcharts-more */ 9301)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(f){a(f);a.Highcharts=f;return a}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})(function(a){function f(a,k,l,c){a.hasOwnProperty(k)||(a[k]=c.apply(null,l))}a=a?a._modules:{};f(a,"Core/Axis/SolidGaugeAxis.js",[a["Core/Color/Color.js"],a["Core/Utilities.js"]],function(a,
k){var l=a.parse,c=k.extend,e=k.merge,m;(function(a){var b={initDataClasses:function(a){var c=this.chart,n,p=0,g=this.options;this.dataClasses=n=[];a.dataClasses.forEach(function(b,d){b=e(b);n.push(b);b.color||("category"===g.dataClassColor?(d=c.options.colors,b.color=d[p++],p===d.length&&(p=0)):b.color=l(g.minColor).tweenTo(l(g.maxColor),d/(a.dataClasses.length-1)))})},initStops:function(a){this.stops=a.stops||[[0,this.options.minColor],[1,this.options.maxColor]];this.stops.forEach(function(a){a.color=
l(a[1])})},toColor:function(a,c){var b=this.stops,l=this.dataClasses,g;if(l)for(g=l.length;g--;){var e=l[g];var d=e.from;b=e.to;if(("undefined"===typeof d||a>=d)&&("undefined"===typeof b||a<=b)){var k=e.color;c&&(c.dataClass=g);break}}else{this.logarithmic&&(a=this.val2lin(a));a=1-(this.max-a)/(this.max-this.min);for(g=b.length;g--&&!(a>b[g][0]););d=b[g]||b[g+1];b=b[g+1]||d;a=1-(b[0]-a)/(b[0]-d[0]||1);k=d.color.tweenTo(b.color,a)}return k}};a.init=function(a){c(a,b)}})(m||(m={}));return m});f(a,"Series/SolidGauge/SolidGaugeComposition.js",
[a["Core/Renderer/SVG/SVGRenderer.js"]],function(a){a=a.prototype;var k=a.symbols.arc;a.symbols.arc=function(a,c,e,m,b){a=k(a,c,e,m,b);b&&b.rounded&&(e=((b.r||e)-(b.innerR||0))/2,c=a[0],b=a[2],"M"===c[0]&&"L"===b[0]&&(c=["A",e,e,0,1,1,c[1],c[2]],a[2]=["A",e,e,0,1,1,b[1],b[2]],a[4]=c));return a}});f(a,"Series/SolidGauge/SolidGaugeSeries.js",[a["Core/Legend/LegendSymbol.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Axis/SolidGaugeAxis.js"],a["Core/Utilities.js"]],function(a,k,l,c){var e=this&&this.__extends||
function(){var a=function(b,h){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var h in b)b.hasOwnProperty(h)&&(a[h]=b[h])};return a(b,h)};return function(b,h){function c(){this.constructor=b}a(b,h);b.prototype=null===h?Object.create(h):(c.prototype=h.prototype,new c)}}(),m=k.seriesTypes,b=m.gauge,f=m.pie.prototype,p=c.clamp,u=c.extend,n=c.isNumber,w=c.merge,g=c.pick,v=c.pInt,d={colorByPoint:!0,dataLabels:{y:0}};c=function(a){function c(){var b=
null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.points=void 0;b.options=void 0;b.axis=void 0;b.yAxis=void 0;b.startAngleRad=void 0;b.thresholdAngleRad=void 0;return b}e(c,a);c.prototype.translate=function(){var a=this.yAxis;l.init(a);!a.dataClasses&&a.options.dataClasses&&a.initDataClasses(a.options);a.initStops(a.options);b.prototype.translate.call(this)};c.prototype.drawPoints=function(){var a=this,b=a.yAxis,c=b.center,e=a.options,k=a.chart.renderer,d=e.overshoot,l=n(d)?d/180*Math.PI:0,
f;n(e.threshold)&&(f=b.startAngleRad+b.translate(e.threshold,null,null,null,!0));this.thresholdAngleRad=g(f,b.startAngleRad);a.points.forEach(function(d){if(!d.isNull){var h=d.graphic,f=b.startAngleRad+b.translate(d.y,null,null,null,!0),m=v(g(d.options.radius,e.radius,100))*c[2]/200,q=v(g(d.options.innerRadius,e.innerRadius,60))*c[2]/200,r=b.toColor(d.y,d),t=Math.min(b.startAngleRad,b.endAngleRad),n=Math.max(b.startAngleRad,b.endAngleRad);"none"===r&&(r=d.color||a.color||"none");"none"!==r&&(d.color=
r);f=p(f,t-l,n+l);!1===e.wrap&&(f=p(f,t,n));t=Math.min(f,a.thresholdAngleRad);f=Math.max(f,a.thresholdAngleRad);f-t>2*Math.PI&&(f=t+2*Math.PI);d.shapeArgs=q={x:c[0],y:c[1],r:m,innerR:q,start:t,end:f,rounded:e.rounded};d.startR=m;h?(m=q.d,h.animate(u({fill:r},q)),m&&(q.d=m)):d.graphic=h=k.arc(q).attr({fill:r,"sweep-flag":0}).add(a.group);a.chart.styledMode||("square"!==e.linecap&&h.attr({"stroke-linecap":"round","stroke-linejoin":"round"}),h.attr({stroke:e.borderColor||"none","stroke-width":e.borderWidth||
0}));h&&h.addClass(d.getClassName(),!0)}})};c.prototype.animate=function(a){a||(this.startAngleRad=this.thresholdAngleRad,f.animate.call(this,a))};c.defaultOptions=w(b.defaultOptions,d);return c}(b);u(c.prototype,{drawLegendSymbol:a.drawRectangle});k.registerSeriesType("solidgauge",c);"";return c});f(a,"masters/modules/solid-gauge.src.js",[],function(){})});


/***/ }),

/***/ 9802:
/*!************************************************************!*\
  !*** ./node_modules/highcharts/modules/solid-gauge.src.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license Highcharts JS v9.3.3 (2022-02-01)
 *
 * Solid angular gauge module
 *
 * (c) 2010-2021 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */

(function (factory) {
    if ( true && module.exports) {
        factory['default'] = factory;
        module.exports = factory;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ 3109), __webpack_require__(/*! highcharts/highcharts-more */ 9301)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Highcharts) {
            factory(Highcharts);
            factory.Highcharts = Highcharts;
            return factory;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(function (Highcharts) {
    var _modules = Highcharts ? Highcharts._modules : {};
    function _registerModule(obj, path, args, fn) {
        if (!obj.hasOwnProperty(path)) {
            obj[path] = fn.apply(null, args);
        }
    }
    _registerModule(_modules, 'Core/Axis/SolidGaugeAxis.js', [_modules['Core/Color/Color.js'], _modules['Core/Utilities.js']], function (Color, U) {
        /* *
         *
         *  (c) 2010-2021 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var color = Color.parse;
        var extend = U.extend,
            merge = U.merge;
        /**
         * @private
         */
        var SolidGaugeAxis;
        (function (SolidGaugeAxis) {
            /* *
             *
             *  Interfaces
             *
             * */
            /* *
             *
             *  Constants
             *
             * */
            /**
             * These methods are defined in the ColorAxis object, and copied here.
             * @private
             *
             * @todo
             * If we implement an AMD system we should make ColorAxis a dependency.
             */
            var methods = {
                    initDataClasses: function (userOptions) {
                        var chart = this.chart,
                dataClasses,
                colorCounter = 0,
                options = this.options;
                    this.dataClasses = dataClasses = [];
                    userOptions.dataClasses.forEach(function (dataClass, i) {
                        var colors;
                        dataClass = merge(dataClass);
                        dataClasses.push(dataClass);
                        if (!dataClass.color) {
                            if (options.dataClassColor === 'category') {
                                colors = chart.options.colors;
                                dataClass.color = colors[colorCounter++];
                                // loop back to zero
                                if (colorCounter === colors.length) {
                                    colorCounter = 0;
                                }
                            }
                            else {
                                dataClass.color = color(options.minColor).tweenTo(color(options.maxColor), i / (userOptions.dataClasses.length - 1));
                            }
                        }
                    });
                },
                initStops: function (userOptions) {
                    this.stops = userOptions.stops || [
                        [0, this.options.minColor],
                        [1, this.options.maxColor]
                    ];
                    this.stops.forEach(function (stop) {
                        stop.color = color(stop[1]);
                    });
                },
                // Translate from a value to a color
                toColor: function (value, point) {
                    var pos,
                        stops = this.stops,
                        from,
                        to,
                        color,
                        dataClasses = this.dataClasses,
                        dataClass,
                        i;
                    if (dataClasses) {
                        i = dataClasses.length;
                        while (i--) {
                            dataClass = dataClasses[i];
                            from = dataClass.from;
                            to = dataClass.to;
                            if ((typeof from === 'undefined' || value >= from) &&
                                (typeof to === 'undefined' || value <= to)) {
                                color = dataClass.color;
                                if (point) {
                                    point.dataClass = i;
                                }
                                break;
                            }
                        }
                    }
                    else {
                        if (this.logarithmic) {
                            value = this.val2lin(value);
                        }
                        pos = 1 - ((this.max - value) / (this.max - this.min));
                        i = stops.length;
                        while (i--) {
                            if (pos > stops[i][0]) {
                                break;
                            }
                        }
                        from = stops[i] || stops[i + 1];
                        to = stops[i + 1] || from;
                        // The position within the gradient
                        pos = (1 - (to[0] - pos) / ((to[0] -
                            from[0]) || 1));
                        color = from.color.tweenTo(to.color, pos);
                    }
                    return color;
                }
            };
            /* *
             *
             *  Functions
             *
             * */
            /**
             * @private
             */
            function init(axis) {
                extend(axis, methods);
            }
            SolidGaugeAxis.init = init;
        })(SolidGaugeAxis || (SolidGaugeAxis = {}));
        /* *
         *
         *  Default export
         *
         * */

        return SolidGaugeAxis;
    });
    _registerModule(_modules, 'Series/SolidGauge/SolidGaugeComposition.js', [_modules['Core/Renderer/SVG/SVGRenderer.js']], function (SVGRenderer) {
        /* *
         *
         *  Solid angular gauge module
         *
         *  (c) 2010-2021 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var _a = SVGRenderer.prototype,
            symbols = _a.symbols,
            arc = _a.symbols.arc;
        /**
         * Additional options, depending on the actual symbol drawn.
         *
         * @interface Highcharts.SymbolOptionsObject
         */ /**
        * Whether to draw rounded edges.
        * @name Highcharts.SymbolOptionsObject#rounded
        * @type {boolean|undefined}
        */
        /**
         * Symbol definition of an arc with round edges.
         *
         * @private
         * @function Highcharts.Renderer#symbols.arc
         *
         * @param {number} x
         *        The X coordinate for the top left position.
         *
         * @param {number} y
         *        The Y coordinate for the top left position.
         *
         * @param {number} w
         *        The pixel width.
         *
         * @param {number} h
         *        The pixel height.
         *
         * @param {Highcharts.SymbolOptionsObject} [options]
         *        Additional options, depending on the actual symbol drawn.
         *
         * @return {Highcharts.SVGPathArray}
         *         Path of the created arc.
         */
        symbols.arc = function (x, y, w, h, options) {
            var path = arc(x,
                y,
                w,
                h,
                options);
            if (options && options.rounded) {
                var r = options.r || w,
                    smallR = (r - (options.innerR || 0)) / 2,
                    outerArcStart = path[0],
                    innerArcStart = path[2];
                if (outerArcStart[0] === 'M' && innerArcStart[0] === 'L') {
                    var x1 = outerArcStart[1],
                        y1 = outerArcStart[2],
                        x2 = innerArcStart[1],
                        y2 = innerArcStart[2],
                        roundStart = [
                            'A',
                        smallR,
                        smallR, 0, 1, 1,
                        x1,
                        y1
                        ],
                        roundEnd = ['A',
                        smallR,
                        smallR, 0, 1, 1,
                        x2,
                        y2];
                    // Replace the line segment and the last close segment
                    path[2] = roundEnd;
                    path[4] = roundStart;
                }
            }
            return path;
        };

    });
    _registerModule(_modules, 'Series/SolidGauge/SolidGaugeSeries.js', [_modules['Core/Legend/LegendSymbol.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Axis/SolidGaugeAxis.js'], _modules['Core/Utilities.js']], function (LegendSymbol, SeriesRegistry, SolidGaugeAxis, U) {
        /* *
         *
         *  Solid angular gauge module
         *
         *  (c) 2010-2021 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var __extends = (this && this.__extends) || (function () {
                var extendStatics = function (d,
            b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d,
            b) { d.__proto__ = b; }) ||
                        function (d,
            b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                return extendStatics(d, b);
            };
            return function (d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        })();
        var _a = SeriesRegistry.seriesTypes,
            GaugeSeries = _a.gauge,
            pieProto = _a.pie.prototype;
        var clamp = U.clamp,
            extend = U.extend,
            isNumber = U.isNumber,
            merge = U.merge,
            pick = U.pick,
            pInt = U.pInt;
        /**
         * A solid gauge is a circular gauge where the value is indicated by a filled
         * arc, and the color of the arc may variate with the value.
         *
         * @sample highcharts/demo/gauge-solid/
         *         Solid gauges
         *
         * @extends      plotOptions.gauge
         * @excluding    dial, pivot, wrap
         * @product      highcharts
         * @requires     modules/solid-gauge
         * @optionparent plotOptions.solidgauge
         */
        var solidGaugeOptions = {
                /**
                 * The inner radius for points in a solid gauge. Can be given as a number
                 * (pixels) or percentage string.
                 *
                 * @sample {highcharts} highcharts/plotoptions/solidgauge-radius/
                 *         Individual radius and innerRadius
                 *
                 * @type      {number|string}
                 * @default   60
                 * @since     4.1.6
                 * @product   highcharts
                 * @apioption plotOptions.solidgauge.innerRadius
                 */
                /**
                 * Whether the strokes of the solid gauge should be `round` or `square`.
                 *
                 * @sample {highcharts} highcharts/demo/gauge-activity/
                 *         Rounded gauge
                 *
                 * @type       {string}
                 * @default    round
                 * @since      4.2.2
                 * @product    highcharts
                 * @validvalue ["square", "round"]
                 * @apioption  plotOptions.solidgauge.linecap
                 */
                /**
                 * Allow the gauge to overshoot the end of the perimeter axis by this
                 * many degrees. Say if the gauge axis goes from 0 to 60, a value of
                 * 100, or 1000, will show 5 degrees beyond the end of the axis when this
                 * option is set to 5.
                 *
                 * @type      {number}
                 * @default   0
                 * @since     3.0.10
                 * @product   highcharts
                 * @apioption plotOptions.solidgauge.overshoot
                 */
                /**
                 * The outer radius for points in a solid gauge. Can be given as a number
                 * (pixels) or percentage string.
                 *
                 * @sample {highcharts} highcharts/plotoptions/solidgauge-radius/
                 *         Individual radius and innerRadius
                 *
                 * @type      {number|string}
                 * @default   100
                 * @since     4.1.6
                 * @product   highcharts
                 * @apioption plotOptions.solidgauge.radius
                 */
                /**
                 * Wether to draw rounded edges on the gauge.
                 *
                 * @sample {highcharts} highcharts/demo/gauge-activity/
                 *         Activity Gauge
                 *
                 * @type      {boolean}
                 * @default   false
                 * @since     5.0.8
                 * @product   highcharts
                 * @apioption plotOptions.solidgauge.rounded
                 */
                /**
                 * The threshold or base level for the gauge.
                 *
                 * @sample {highcharts} highcharts/plotoptions/solidgauge-threshold/
                 *         Zero threshold with negative and positive values
                 *
                 * @type      {number|null}
                 * @since     5.0.3
                 * @product   highcharts
                 * @apioption plotOptions.solidgauge.threshold
                 */
                /**
                 * Whether to give each point an individual color.
                 */
                colorByPoint: true,
                dataLabels: {
                    y: 0
                }
            };
        /* *
         *
         *  Class
         *
         * */
        /**
         * SolidGauge series type.
         *
         * @private
         * @class
         * @name Highcharts.seriesTypes.solidgauge
         *
         * @augments Highcarts.Series
         */
        var SolidGaugeSeries = /** @class */ (function (_super) {
                __extends(SolidGaugeSeries, _super);
            function SolidGaugeSeries() {
                /* *
                 *
                 *  Static properties
                 *
                 * */
                var _this = _super !== null && _super.apply(this,
                    arguments) || this;
                /* *
                 *
                 *  Properties
                 *
                 * */
                _this.data = void 0;
                _this.points = void 0;
                _this.options = void 0;
                _this.axis = void 0;
                _this.yAxis = void 0;
                _this.startAngleRad = void 0;
                _this.thresholdAngleRad = void 0;
                return _this;
            }
            /* *
             *
             *  Functions
             *
             * */
            // Extend the translate function to extend the Y axis with the necessary
            // decoration (#5895).
            SolidGaugeSeries.prototype.translate = function () {
                var axis = this.yAxis;
                SolidGaugeAxis.init(axis);
                // Prepare data classes
                if (!axis.dataClasses && axis.options.dataClasses) {
                    axis.initDataClasses(axis.options);
                }
                axis.initStops(axis.options);
                // Generate points and inherit data label position
                GaugeSeries.prototype.translate.call(this);
            };
            // Draw the points where each point is one needle.
            SolidGaugeSeries.prototype.drawPoints = function () {
                var series = this,
                    yAxis = series.yAxis,
                    center = yAxis.center,
                    options = series.options,
                    renderer = series.chart.renderer,
                    overshoot = options.overshoot,
                    overshootVal = isNumber(overshoot) ?
                        overshoot / 180 * Math.PI :
                        0,
                    thresholdAngleRad;
                // Handle the threshold option
                if (isNumber(options.threshold)) {
                    thresholdAngleRad = yAxis.startAngleRad + yAxis.translate(options.threshold, null, null, null, true);
                }
                this.thresholdAngleRad = pick(thresholdAngleRad, yAxis.startAngleRad);
                series.points.forEach(function (point) {
                    // #10630 null point should not be draw
                    if (!point.isNull) { // condition like in pie chart
                        var graphic = point.graphic,
                            rotation = (yAxis.startAngleRad +
                                yAxis.translate(point.y,
                            null,
                            null,
                            null,
                            true)),
                            radius = ((pInt(pick(point.options.radius,
                            options.radius, 100)) * center[2]) / 200),
                            innerRadius = ((pInt(pick(point.options.innerRadius,
                            options.innerRadius, 60)) * center[2]) / 200),
                            shapeArgs = void 0,
                            d = void 0,
                            toColor = yAxis.toColor(point.y,
                            point),
                            axisMinAngle = Math.min(yAxis.startAngleRad,
                            yAxis.endAngleRad),
                            axisMaxAngle = Math.max(yAxis.startAngleRad,
                            yAxis.endAngleRad),
                            minAngle = void 0,
                            maxAngle = void 0;
                        if (toColor === 'none') { // #3708
                            toColor = point.color || series.color || 'none';
                        }
                        if (toColor !== 'none') {
                            point.color = toColor;
                        }
                        // Handle overshoot and clipping to axis max/min
                        rotation = clamp(rotation, axisMinAngle - overshootVal, axisMaxAngle + overshootVal);
                        // Handle the wrap option
                        if (options.wrap === false) {
                            rotation = clamp(rotation, axisMinAngle, axisMaxAngle);
                        }
                        minAngle = Math.min(rotation, series.thresholdAngleRad);
                        maxAngle = Math.max(rotation, series.thresholdAngleRad);
                        if (maxAngle - minAngle > 2 * Math.PI) {
                            maxAngle = minAngle + 2 * Math.PI;
                        }
                        point.shapeArgs = shapeArgs = {
                            x: center[0],
                            y: center[1],
                            r: radius,
                            innerR: innerRadius,
                            start: minAngle,
                            end: maxAngle,
                            rounded: options.rounded
                        };
                        point.startR = radius; // For PieSeries.animate
                        if (graphic) {
                            d = shapeArgs.d;
                            graphic.animate(extend({ fill: toColor }, shapeArgs));
                            if (d) {
                                shapeArgs.d = d; // animate alters it
                            }
                        }
                        else {
                            point.graphic = graphic = renderer.arc(shapeArgs)
                                .attr({
                                fill: toColor,
                                'sweep-flag': 0
                            })
                                .add(series.group);
                        }
                        if (!series.chart.styledMode) {
                            if (options.linecap !== 'square') {
                                graphic.attr({
                                    'stroke-linecap': 'round',
                                    'stroke-linejoin': 'round'
                                });
                            }
                            graphic.attr({
                                stroke: options.borderColor || 'none',
                                'stroke-width': options.borderWidth || 0
                            });
                        }
                        if (graphic) {
                            graphic.addClass(point.getClassName(), true);
                        }
                    }
                });
            };
            // Extend the pie slice animation by animating from start angle and up.
            SolidGaugeSeries.prototype.animate = function (init) {
                if (!init) {
                    this.startAngleRad = this.thresholdAngleRad;
                    pieProto.animate.call(this, init);
                }
            };
            SolidGaugeSeries.defaultOptions = merge(GaugeSeries.defaultOptions, solidGaugeOptions);
            return SolidGaugeSeries;
        }(GaugeSeries));
        extend(SolidGaugeSeries.prototype, {
            drawLegendSymbol: LegendSymbol.drawRectangle
        });
        SeriesRegistry.registerSeriesType('solidgauge', SolidGaugeSeries);
        /* *
         *
         *  Default export
         *
         * */
        /**
         * A `solidgauge` series. If the [type](#series.solidgauge.type) option is not
         * specified, it is inherited from [chart.type](#chart.type).
         *
         *
         * @extends   series,plotOptions.solidgauge
         * @excluding animationLimit, boostThreshold, connectEnds, connectNulls,
         *            cropThreshold, dashStyle, dataParser, dataURL, dial,
         *            findNearestPointBy, getExtremesFromAll, marker, negativeColor,
         *            pointPlacement, pivot, shadow, softThreshold, stack, stacking,
         *            states, step, threshold, turboThreshold, wrap, zoneAxis, zones,
         *            dataSorting, boostBlending
         * @product   highcharts
         * @requires  modules/solid-gauge
         * @apioption series.solidgauge
         */
        /**
         * An array of data points for the series. For the `solidgauge` series
         * type, points can be given in the following ways:
         *
         * 1. An array of numerical values. In this case, the numerical values will be
         *    interpreted as `y` options. Example:
         *    ```js
         *    data: [0, 5, 3, 5]
         *    ```
         *
         * 2. An array of objects with named values. The following snippet shows only a
         *    few settings, see the complete options set below. If the total number of
         *    data points exceeds the series'
         *    [turboThreshold](#series.solidgauge.turboThreshold), this option is not
         *    available.
         *    ```js
         *    data: [{
         *        y: 5,
         *        name: "Point2",
         *        color: "#00FF00"
         *    }, {
         *        y: 7,
         *        name: "Point1",
         *        color: "#FF00FF"
         *    }]
         *    ```
         *
         * The typical gauge only contains a single data value.
         *
         * @sample {highcharts} highcharts/chart/reflow-true/
         *         Numerical values
         * @sample {highcharts} highcharts/series/data-array-of-objects/
         *         Config objects
         *
         * @type      {Array<number|null|*>}
         * @extends   series.gauge.data
         * @product   highcharts
         * @apioption series.solidgauge.data
         */
        /**
         * The inner radius of an individual point in a solid gauge. Can be given as a
         * number (pixels) or percentage string.
         *
         * @sample {highcharts} highcharts/plotoptions/solidgauge-radius/
         *         Individual radius and innerRadius
         *
         * @type      {number|string}
         * @since     4.1.6
         * @product   highcharts
         * @apioption series.solidgauge.data.innerRadius
         */
        /**
         * The outer radius of an individual point in a solid gauge. Can be
         * given as a number (pixels) or percentage string.
         *
         * @sample {highcharts} highcharts/plotoptions/solidgauge-radius/
         *         Individual radius and innerRadius
         *
         * @type      {number|string}
         * @since     4.1.6
         * @product   highcharts
         * @apioption series.solidgauge.data.radius
         */
        ''; // adds doclets above to transpiled file

        return SolidGaugeSeries;
    });
    _registerModule(_modules, 'masters/modules/solid-gauge.src.js', [], function () {


    });
}));

/***/ }),

/***/ 9485:
/*!*************************************************!*\
  !*** ./src/app/charts/charts-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsPageRoutingModule": () => (/* binding */ ChartsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _charts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.page */ 9266);




const routes = [
    {
        path: '',
        component: _charts_page__WEBPACK_IMPORTED_MODULE_0__.ChartsPage
    },
    {
        path: 'temperatura',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_charts_temperatura_temperatura_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./temperatura/temperatura.module */ 1824)).then(m => m.TemperaturaPageModule)
    },
    {
        path: 'ph',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_charts_ph_ph_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ph/ph.module */ 2958)).then(m => m.PhPageModule)
    },
    {
        path: 'brix',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_charts_brix_brix_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./brix/brix.module */ 2593)).then(m => m.BrixPageModule)
    },
    {
        path: 'eficiencia',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_charts_eficiencia_eficiencia_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./eficiencia/eficiencia.module */ 8272)).then(m => m.EficienciaPageModule)
    },
    {
        path: 'alcvol',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_charts_alcvol_alcvol_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./alcvol/alcvol.module */ 9078)).then(m => m.AlcvolPageModule)
    }
];
let ChartsPageRoutingModule = class ChartsPageRoutingModule {
};
ChartsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChartsPageRoutingModule);



/***/ }),

/***/ 6028:
/*!*****************************************!*\
  !*** ./src/app/charts/charts.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "ChartsPageModule": () => (/* binding */ ChartsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-routing.module */ 9485);
/* harmony import */ var _charts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts.page */ 9266);
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-highcharts */ 6321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highcharts-more.src */ 4686);
/* harmony import */ var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting.src */ 4399);
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_modules_solid_gauge_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/modules/solid-gauge.src */ 9802);
/* harmony import */ var highcharts_modules_solid_gauge_src__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_solid_gauge_src__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2003);
/* harmony import */ var _date_minus_six_hours_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../date-minus-six-hours.pipe */ 5203);















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let ChartsPageModule = class ChartsPageModule {
};
ChartsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartsPageRoutingModule,
            angular_highcharts__WEBPACK_IMPORTED_MODULE_12__.ChartModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
        ],
        declarations: [_charts_page__WEBPACK_IMPORTED_MODULE_1__.ChartsPage, _date_minus_six_hours_pipe__WEBPACK_IMPORTED_MODULE_5__.DateMinusSixHoursPipe],
        providers: [
            { provide: angular_highcharts__WEBPACK_IMPORTED_MODULE_12__.HIGHCHARTS_MODULES, useFactory: () => [highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_2__, highcharts_modules_solid_gauge_src__WEBPACK_IMPORTED_MODULE_4__, highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_3__] }
        ],
        exports: [
            _date_minus_six_hours_pipe__WEBPACK_IMPORTED_MODULE_5__.DateMinusSixHoursPipe
        ]
    })
], ChartsPageModule);



/***/ }),

/***/ 9266:
/*!***************************************!*\
  !*** ./src/app/charts/charts.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsPage": () => (/* binding */ ChartsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_charts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./charts.page.html */ 6514);
/* harmony import */ var _charts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts.page.scss */ 820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ 4940);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/highcharts-more */ 9301);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/modules/solid-gauge */ 4409);
/* harmony import */ var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_charts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/charts.service */ 5296);
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts/highstock */ 9193);
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ 3857);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_descarga_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/descarga-excel.service */ 3364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! crypto-js */ 3706);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ 8260);
















highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_3___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_6__);
highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_4___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_6__);
let ChartsPage = class ChartsPage {
    constructor(servicio, download, navegacion, xlsx, service, translate, alertController) {
        this.servicio = servicio;
        this.download = download;
        this.navegacion = navegacion;
        this.xlsx = xlsx;
        this.service = service;
        this.translate = translate;
        this.alertController = alertController;
        this.num_tina = localStorage.getItem('idTina');
        this.intervalUpdate = null;
        this.date = new Date();
        this.formatoFecha = this.date.toISOString().split('T')[0];
        this.grados = false;
        this.showSpinner = true;
        this.translate.use(localStorage.getItem('idioma'));
    }
    ngOnInit() { }
    refresh() {
        window.location.reload();
    }
    ionViewWillEnter() {
        this.graficaTinas();
        this.cargarDatos();
        this.cargarDatosFull();
        this.intervalUpdate = setInterval(function () {
            this.cargarDatos();
            this.cargarDatosFull();
        }.bind(this), 60000);
        this.obtenerLimites();
    }
    ionViewDidLeave() {
        clearInterval(this.intervalUpdate);
        clearInterval(this.intervalFunction);
    }
    generarExcel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let num_tina = localStorage.getItem('idTina');
            let tina = num_tina.toString();
            const alert = yield this.alertController.create({
                cssClass: 'alerta',
                header: this.translate.instant('FECHASEXCEL.PERIODO'),
                message: this.translate.instant('FECHASEXCEL.INGRESARFECHAS'),
                inputs: [
                    {
                        name: 'primer',
                        type: 'date',
                        id: 'fecha1',
                    },
                    {
                        name: 'segunda',
                        type: 'date',
                        id: 'fecha2'
                    }
                ],
                buttons: [{
                        cssClass: 'confirmacion',
                        text: this.translate.instant("FECHASEXCEL.GENERAR"),
                        handler: (datosAlerta) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            let primerFecha = datosAlerta.primer;
                            let segundaFecha = datosAlerta.segunda;
                            if (primerFecha != "" && segundaFecha != "") {
                                this.service.generarExcel(primerFecha, segundaFecha).subscribe((response) => {
                                    let nombre = this.translate.instant('INFOREXCEL.TITULO') + ' ' + tina + '.xlsx';
                                    let blob = response.body;
                                    let a = document.createElement('a');
                                    a.download = nombre;
                                    a.href = window.URL.createObjectURL(blob);
                                    a.click();
                                });
                            }
                            else {
                                let alert = yield this.alertController.create({
                                    cssClass: 'alerta',
                                    header: this.translate.instant('FECHASEXCEL.ERROR'),
                                    message: this.translate.instant('FECHASEXCEL.FECHAS'),
                                    buttons: [
                                        {
                                            cssClass: 'confirmacion',
                                            text: 'Ok'
                                        }
                                    ],
                                });
                                alert.present();
                            }
                        })
                    }]
            });
            yield alert.present();
        });
    }
    cambiarGrados() {
        if (this.grados) {
            this.grados = false;
        }
        else {
            this.grados = true;
        }
    }
    graficaTinas() {
        var ultimox, ultimoy, ultimoz, ultimov, ultimow, ultimou, ultimoTempMayor, ultimoTempMenor, ultimophMayor, ultimophMenor, chart;
        let idTina = localStorage.getItem('idTina');
        let tinaIndividual = localStorage.getItem('idTina');
        let empresa = localStorage.getItem('empresa');
        let categoria = localStorage.getItem('categoria');
        let idiomas = localStorage.getItem('idioma');
        let Consultar = 1;
        let token = localStorage.getItem('token');
        setTimeout(function () {
            if (idiomas === 'en') {
                highcharts_highstock__WEBPACK_IMPORTED_MODULE_6__.charts.forEach(function (ch) {
                    if (ch.options.title.text === 'Mediciones en Tiempo Real') {
                        ch.setTitle({ text: 'Real-Time Measurements' });
                        ch.xAxis[0].update({
                            title: {
                                text: 'Measurement Time',
                            },
                        });
                        ch.yAxis[4].update({
                            title: {
                                text: 'Values',
                            },
                        });
                        ch.series[0].name = 'Temperature';
                        ch.series[3].name = 'Alcohol Volume';
                        ch.series[4].name = 'Efficiency';
                    }
                    ch.redraw();
                });
            }
            else if (idiomas === 'de') {
                highcharts_highstock__WEBPACK_IMPORTED_MODULE_6__.charts.forEach(function (ch) {
                    if (ch.options.title.text === 'Mediciones en Tiempo Real') {
                        ch.setTitle({ text: 'Echtzeit-Messungen' });
                        ch.xAxis[0].update({
                            title: {
                                text: 'Zeitpunkt der Messung',
                            },
                        });
                        ch.yAxis[4].update({
                            title: {
                                text: 'Werte',
                            },
                        });
                        ch.series[0].name = 'Temperatur';
                        ch.series[3].name = 'Alkoholgehalt';
                        ch.series[4].name = 'Wirkungsgrad';
                    }
                    ch.redraw();
                });
            }
        }, 1000);
        const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_9__.AES.decrypt(empresa, src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.SECRET_KEY);
        const datoDesencriptado = bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_9__.enc.Utf8);
        var parseo = { 'idTina': idTina, 'empresa': datoDesencriptado, 'categoria': categoria };
        var parseo2 = { 'tinaIndividual': tinaIndividual, 'empresa': datoDesencriptado, 'Consultar': Consultar, 'categoria': categoria };
        jquery__WEBPACK_IMPORTED_MODULE_2__.ajax({
            url: 'https://www.ininbio.com//pruebasLocalesFull/datos_Grafica.php',
            headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json" },
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(parseo),
            success: function (datosGrafica) {
                document.getElementById('spinner').style.display = 'none';
                let temp = [];
                let pH = [];
                let brix = [];
                let alcvol = [];
                let eficiencia = [];
                let tempMayor = [];
                let tempMenor = [];
                let phMayor = [];
                let phMenor = [];
                jquery__WEBPACK_IMPORTED_MODULE_2__.each(datosGrafica, function (key, value) {
                    var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
                    var newTimestamp = datosGrafica[key].x - sixHoursInMilliseconds;
                    datosGrafica[key].x = newTimestamp;
                    if (value.x) {
                        datosGrafica[key].x = parseInt(value.x);
                        // datosGrafica[key].x -= 6*3600;
                    }
                    if (value.y) {
                        datosGrafica[key].y = parseFloat(value.y);
                    }
                    if (value.z) {
                        datosGrafica[key].z = parseFloat(value.z);
                    }
                    if (value.w) {
                        datosGrafica[key].w = parseInt(value.w);
                    }
                    if (value.v) {
                        datosGrafica[key].v = parseInt(value.v);
                    }
                    if (value.u) {
                        datosGrafica[key].u = parseInt(value.u);
                    }
                    if (value.tempMayor) {
                        datosGrafica[key].tempMayor = parseFloat(value.tempMayor);
                    }
                    if (value.tempMenor) {
                        datosGrafica[key].tempMenor = parseFloat(value.tempMenor);
                    }
                    if (value.phMayor) {
                        datosGrafica[key].phMayor = parseFloat(value.phMayor);
                    }
                    if (value.phMenor) {
                        datosGrafica[key].phMenor = parseFloat(value.phMenor);
                    }
                    temp.push([value.x, value.y]);
                    pH.push([value.x, value.z]);
                    brix.push([value.x, value.w]);
                    alcvol.push([value.x, value.v]);
                    eficiencia.push([value.x, value.u]);
                    tempMayor.push([value.x, value.tempMayor]);
                    tempMenor.push([value.x, value.tempMenor]);
                    phMayor.push([value.x, value.phMayor]);
                    phMenor.push([value.x, value.phMenor]);
                });
                var container = document.createElement('div');
                document.body.appendChild(container);
                chart = highcharts_highstock__WEBPACK_IMPORTED_MODULE_6__.chart('container', {
                    chart: {
                        type: 'spline',
                        zoomType: 'xy',
                        renderTo: container,
                        backgroundColor: 'transparent',
                    },
                    title: {
                        text: 'Mediciones en Tiempo Real',
                        align: 'center',
                        style: {
                            color: 'black',
                        },
                    },
                    credits: {
                        enabled: false,
                    },
                    xAxis: {
                        type: 'datetime',
                        dateTimeLabelFormats: {
                            second: '%H:%M:%S %P',
                        },
                        title: {
                            text: 'Hora de Medición',
                            style: {
                                color: 'black',
                            },
                        },
                        labels: {
                            style: {
                                color: 'black',
                            },
                        },
                        gridLineColor: '#000000',
                    },
                    yAxis: [
                        {
                            min: 0,
                            max: 90,
                            title: {
                                text: 'Valores',
                                style: {
                                    color: 'black',
                                },
                            },
                            visible: false,
                            plotLines: [
                                {
                                    value: 0,
                                    width: 1,
                                },
                            ],
                            labels: {
                                style: {
                                    color: 'black',
                                },
                            },
                            gridLineColor: 'black',
                        },
                        {
                            min: 0,
                            max: 90,
                            visible: false,
                        },
                        {
                            min: 0,
                            max: 90,
                            visible: false,
                        },
                        {
                            min: 0,
                            max: 90,
                            visible: false,
                        },
                        {
                            min: 0,
                            max: 100,
                            alignTicks: false,
                            tickInterval: 10,
                            title: {
                                text: 'Valores',
                                style: {
                                    color: 'black',
                                },
                            },
                            visible: true,
                            labels: {
                                style: {
                                    color: 'black',
                                },
                            },
                            gridLineColor: 'black',
                        },
                    ],
                    tooltip: {
                        formatter: function () {
                            return ('<b>' +
                                this.series.name +
                                '</b><br/>' +
                                highcharts_highstock__WEBPACK_IMPORTED_MODULE_6__.dateFormat('%H:%M:%S %P', this.x) +
                                '<br/>' +
                                highcharts_highstock__WEBPACK_IMPORTED_MODULE_6__.numberFormat(this.y, 2));
                        },
                    },
                    plotOptions: {
                        spline: {
                            marker: {
                                enabled: true,
                            },
                        },
                    },
                    legend: {
                        verticalAlign: 'bottom',
                        layout: 'horizontal',
                        alignColumns: false,
                        align: 'center',
                    },
                    exporting: {
                        enabled: false,
                        chartOptions: {
                            plotOptions: {
                                series: {
                                    dataLabels: {
                                        enabled: true,
                                    },
                                },
                            },
                        },
                        fallbackToExportServer: false,
                    },
                    series: [
                        {
                            name: 'Temperatura',
                            type: 'spline',
                            // yAxis: 0,
                            data: temp,
                            color: '#0833a2',
                        },
                        {
                            name: 'pH',
                            type: 'spline',
                            // yAxis: 1,
                            data: pH,
                            color: '#14faff',
                        },
                        {
                            name: 'Brix',
                            type: 'spline',
                            // yAxis: 2,
                            data: brix,
                            color: '#edff14',
                        },
                        {
                            name: 'Alcohol Volumen',
                            type: 'spline',
                            // yAxis: 3,
                            data: alcvol,
                            color: '#ff14ff',
                        },
                        {
                            name: 'Eficiencia',
                            type: 'spline',
                            // yAxis: 4,
                            data: eficiencia,
                            color: '#1eff05',
                        },
                        {
                            name: 'MaxTemp',
                            type: 'spline',
                            data: tempMayor,
                            color: '#5B2C6F'
                        },
                        {
                            name: 'MinTemp',
                            type: 'spline',
                            data: tempMenor,
                            color: '#FF0087'
                        },
                        {
                            name: 'MaxpH',
                            type: 'spline',
                            data: phMayor,
                            color: '#D35400'
                        },
                        {
                            name: 'MinpH',
                            type: 'spline',
                            data: phMenor,
                            color: '#F08080'
                        }
                    ],
                });
            },
        });
        this.intervalFunction = setInterval(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__.post({
                url: 'https://www.ininbio.com//pruebasLocalesFull/datos_Grafica.php',
                headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json" },
                type: 'POST',
                data: JSON.stringify(parseo2),
                dataType: 'json',
                success: function (UltimosDatos) {
                    if (UltimosDatos.length != 0) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__.each(UltimosDatos, function (key, value) {
                            var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
                            var newTimestamp = UltimosDatos[key].x - sixHoursInMilliseconds;
                            UltimosDatos[key].x = newTimestamp;
                            var varlocalx = parseInt(UltimosDatos[0].x);
                            var varlocaly = parseFloat(UltimosDatos[0].y);
                            var varlocalz = parseFloat(UltimosDatos[0].z);
                            var varlocalw = parseFloat(UltimosDatos[0].w);
                            var varlocalv = parseFloat(UltimosDatos[0].v);
                            var varlocalu = parseFloat(UltimosDatos[0].u);
                            var varlocaltempMayor = parseFloat(UltimosDatos[0].tempMayor);
                            var varlocaltempMenor = parseFloat(UltimosDatos[0].tempMenor);
                            var varlocalphMayor = parseFloat(UltimosDatos[0].phMayor);
                            var varlocalphMenor = parseFloat(UltimosDatos[0].phMenor);
                            if (getx() != varlocalx &&
                                gety() != varlocaly &&
                                getz() != varlocalz &&
                                getw() != varlocalw &&
                                getv() != varlocalv &&
                                getu() != varlocalu &&
                                getTempMayor() != varlocaltempMayor &&
                                getTempMenor() != varlocaltempMenor &&
                                getphMayor() != varlocalphMayor &&
                                getphMenor() != varlocalphMenor) {
                                chart.series[0].addPoint([varlocalx, varlocaly]);
                                chart.series[1].addPoint([varlocalx, varlocalz]);
                                chart.series[2].addPoint([varlocalx, varlocalw]);
                                chart.series[3].addPoint([varlocalx, varlocalv]);
                                chart.series[4].addPoint([varlocalx, varlocalu]);
                                chart.series[5].addPoint([varlocalx, varlocaltempMayor]);
                                chart.series[6].addPoint([varlocalx, varlocaltempMenor]);
                                chart.series[7].addPoint([varlocalx, varlocalphMayor]);
                                chart.series[8].addPoint([varlocalx, varlocalphMenor]);
                                //chart.series[0].addPoint([varlocalx, varlocaly - 1], false, true);
                                //chart.series[1].addPoint([varlocalx,varlocalz - 1], false, true);
                                //chart.series[2].addPoint([varlocalx,varlocalw - 1], false, true);
                                //chart.series[3].addPoint([varlocalx,varlocalv - 1], false, true);
                                //chart.series[4].addPoint([varlocalx,varlocalu - 1], false, true);
                                chart.redraw();
                            }
                        });
                    }
                }
            });
        }, 60000);
        function getx() {
            return ultimox;
        }
        function gety() {
            return ultimoy;
        }
        function getz() {
            return ultimoz;
        }
        function getw() {
            return ultimow;
        }
        function getv() {
            return ultimov;
        }
        function getu() {
            return ultimou;
        }
        function getTempMayor() {
            return ultimoTempMayor;
        }
        function getTempMenor() {
            return ultimoTempMenor;
        }
        function getphMayor() {
            return ultimophMayor;
        }
        function getphMenor() {
            return ultimophMenor;
        }
    }
    obtenerLimites() {
        this.servicio.getLimites().subscribe((data) => {
            let json = JSON.stringify(data);
            let response = JSON.parse(json);
            if (response != null) {
                this.tempMayor = response[0]["tempMayor"];
                this.tempMenor = response[0]["tempMenor"];
                this.phMayor = response[0]["phMayor"];
                this.phMenor = response[0]["phMenor"];
                this.naranja1 = this.tempMayor - 1;
                this.naranja2 = Number(this.tempMenor) + Number(1);
                this.naranja3 = this.phMayor - 1;
                this.naranja4 = Number(this.phMenor) + Number(1);
                console.log(this.naranja3);
            }
        }, (err) => {
            console.log(err);
        });
    }
    cargarDatos() {
        this.servicio.getUltimoSensor().subscribe((data) => {
            let json = JSON.stringify(data);
            let response = JSON.parse(json);
            this.datoSensores = response;
            // console.log(this.datoSensores[0]['z']);
        }, (err) => {
            console.log(err);
        });
    }
    cargarDatosFull() {
        this.servicio.getSensores().subscribe((data) => {
            if (Object.entries(data).length != 0) {
                let json = JSON.stringify(data);
                let response = JSON.parse(json);
                this.datosExcel = response;
                this.datoSensores1 = response[response.length - 1];
                this.datoSensores2 = response[response.length - 2];
                if (this.datoSensores2 != undefined && this.datoSensores1 != undefined) {
                    this.brix1 = this.datoSensores1['w'];
                    this.brix2 = this.datoSensores2['w'];
                }
            }
        }, (err) => {
            console.log(err);
        });
    }
    graficaTemperatura() {
        this.navegacion.navigate(['/temperatura']);
    }
    graficapH() {
        this.navegacion.navigate(['/ph']);
    }
    graficaBrix() {
        this.navegacion.navigate(['/brix']);
    }
    graficaEficiencia() {
        this.navegacion.navigate(['/eficiencia']);
    }
    graficaAlcVol() {
        this.navegacion.navigate(['/alcvol']);
    }
};
ChartsPage.ctorParameters = () => [
    { type: _services_charts_service__WEBPACK_IMPORTED_MODULE_5__.ChartsService },
    { type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_7__.Downloader },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _services_descarga_excel_service__WEBPACK_IMPORTED_MODULE_8__.DescargaExcelService },
    { type: _services_descarga_excel_service__WEBPACK_IMPORTED_MODULE_8__.DescargaExcelService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController }
];
ChartsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-charts',
        template: _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_charts_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_charts_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChartsPage);



/***/ }),

/***/ 5203:
/*!**********************************************!*\
  !*** ./src/app/date-minus-six-hours.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateMinusSixHoursPipe": () => (/* binding */ DateMinusSixHoursPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


let DateMinusSixHoursPipe = class DateMinusSixHoursPipe {
    transform(value) {
        const date = new Date(value);
        date.setHours(date.getHours() + 6);
        return date.toLocaleString();
    }
};
DateMinusSixHoursPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'dateMinusSixHours'
    })
], DateMinusSixHoursPipe);



/***/ }),

/***/ 6514:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/charts/charts.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot = \"start\">\r\n      <ion-back-button defaultHref=\"/inicio\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"PANTGRAF.GRAFICOS\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n  <ion-item class=\"contenido\">\r\n    <ion-label class=\"letras\" slot=\"end\">°F</ion-label>\r\n    <ion-toggle class=\"toggle\" slot=\"end\" [ngModel]=\"grados\" (ionChange)=\"cambiarGrados()\" checked=\"false\"></ion-toggle>\r\n    <ion-label class=\"letras\">{{\"IDTINA.ID\" | translate}} {{num_tina}}</ion-label>\r\n  </ion-item>\r\n</ion-header>\r\n\r\n<ion-content class=\"fondo\"> \r\n  <ion-card id=\"grafica\">\r\n    <!-- <button (click)='clearInputText($event)' style=\"margin-left: 98%; background-color: transparent;\">\r\n      <ion-icon name=\"contrast\" style=\"color: black;\" size=\"large\">\r\n      </ion-icon>\r\n    </button> -->\r\n    <ion-spinner *ngIf=\"showSpinner\" id=\"spinner\" name=\"circles\"></ion-spinner>\r\n    <div id=\"container\"></div>\r\n  </ion-card>\r\n<ion-grid>\r\n  <ion-row *ngFor = \"let dato of datoSensores\">\r\n    <ion-col class=\"ion-text-center\" size=\"4\">\r\n      <ion-card class=\"fondoBlanco\" (click)=\"graficaTemperatura()\" id=\"btnRojo\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle class=\"letras\" *ngIf=\"!grados\">°C</ion-card-subtitle>\r\n          <ion-card-subtitle class=\"letras\" *ngIf=\"grados\">°F</ion-card-subtitle>\r\n          <ion-card-title class = \"color1\" *ngIf=\"!grados\">{{((dato.y * 1)+0).toFixed(1)}}</ion-card-title> \r\n          <ion-card-title *ngIf=\"grados\" class = \"color1\">{{((dato.y * 1.8)+32).toFixed(1)}}</ion-card-title> \r\n        </ion-card-header>            \r\n      </ion-card>\r\n      <ng-container *ngIf=\"dato['y'] >= this.tempMayor || dato['y'] <= this.tempMenor; else datosNormales\">\r\n      <div id=\"circuloRojo\" class=\"parpadea\"></div>\r\n      <div id=\"circuloAmarillo\"></div>\r\n      <div id=\"circuloVerde\"></div>  \r\n      </ng-container> \r\n      <ng-template #datosNormales>\r\n        <ng-container *ngIf=\"dato['y'] == this.naranja1 || dato['y'] == this.naranja2; else datosNormales3\">    \r\n          <div id=\"circuloRojo\"></div>\r\n          <div id=\"circuloAmarillo\" class=\"parpadea\"></div>\r\n          <div id=\"circuloVerde\"></div>\r\n        </ng-container>\r\n    </ng-template>\r\n    <ng-template #datosNormales3>\r\n      <div id=\"circuloRojo\"></div>\r\n      <div id=\"circuloAmarillo\"></div>\r\n      <div id=\"circuloVerde\" class=\"parpadea\"></div>\r\n    </ng-template>\r\n    </ion-col>\r\n\r\n    <ion-col class=\"ion-text-center\" size=\"4\">\r\n      <ion-card class=\"fondoBlanco\" (click)=\"graficapH()\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle class=\"letras\">pH</ion-card-subtitle>\r\n          <ion-card-title class = \"color2\">{{((dato.z * 1)+0).toFixed(1)}}</ion-card-title>\r\n        </ion-card-header>         \r\n      </ion-card>\r\n      <ng-container *ngIf=\"dato['z'] >= this.phMayor || dato['z'] <= this.phMenor; else datosNormales1\">\r\n        <div id=\"circuloRojo\" class=\"parpadea\"></div>\r\n        <div id=\"circuloAmarillo\"></div>\r\n        <div id=\"circuloVerde\"></div>    \r\n      </ng-container>\r\n      <ng-template #datosNormales1>\r\n        <ng-container *ngIf=\"dato['z'] == this.naranja3 || dato['z'] == this.naranja4; else datosNormales4\">    \r\n          <div id=\"circuloRojo\"></div>\r\n          <div id=\"circuloAmarillo\" class=\"parpadea\"></div>\r\n          <div id=\"circuloVerde\"></div>\r\n        </ng-container>\r\n        </ng-template>\r\n        <ng-template #datosNormales4>\r\n          <div id=\"circuloRojo\"></div>\r\n          <div id=\"circuloAmarillo\"></div>\r\n          <div id=\"circuloVerde\" class=\"parpadea\"></div>\r\n        </ng-template>\r\n    </ion-col>\r\n\r\n    <ion-col class=\"ion-text-center\" size=\"4\">\r\n      <ion-card class=\"fondoBlanco\" (click)=\"graficaBrix()\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle class=\"letras\">°Brix</ion-card-subtitle>\r\n          <ion-card-title class = \"color3\">{{((dato.w * 1)+0).toFixed(1)}}</ion-card-title>\r\n        </ion-card-header>\r\n      </ion-card>\r\n      <ng-container id=\"semaforo\" *ngIf=\"this.brix1 === this.brix2; else datosNormales2\">\r\n        <div id=\"circuloRojo\" class=\"parpadea\"></div>\r\n        <div id=\"circuloAmarillo\"></div>\r\n        <div id=\"circuloVerde\"></div>  \r\n      </ng-container>  \r\n      <ng-template id=\"semaforo\" #datosNormales2>\r\n        <div id=\"circuloRojo\"></div>\r\n        <div id=\"circuloAmarillo\"></div>\r\n        <div id=\"circuloVerde\" class=\"parpadea\"></div>\r\n        </ng-template>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n    <ion-row *ngFor = \"let dato of datoSensores\">\r\n    <ion-col class=\"ion-text-center\" size=\"6\">\r\n      <ion-card class=\"fondoBlanco\" (click)=\"graficaAlcVol()\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle class=\"letras\">%Alc.Vol</ion-card-subtitle>\r\n          <ion-card-title class = \"color4\">{{((dato.v * 1)+0).toFixed(1)}}</ion-card-title>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col class=\"ion-text-center\" size=\"6\">\r\n      <ion-card class=\"fondoBlanco\" (click)=\"graficaEficiencia()\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle class=\"letras\">{{\"PANTGRAF.ETIQUETAPORCENT\" | translate}} (%)</ion-card-subtitle>\r\n          <ion-card-title class=\"color5\">{{((dato.u * 1)+0).toFixed(1)}}</ion-card-title>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n<ion-card class=\"no-scroll\" style=\"background-color: white; color: black; width: 100%; max-height: 50%; overflow-y: auto;\">\r\n  <!-- <ion-card-content class=\"card-content\"> -->\r\n  <ion-grid>\r\n    <table class=\"tablaExcel\" style=\"text-align: center; width: 100%; border-collapse: separate;border-spacing: 20px;\">\r\n      <caption style=\"font-weight: bold; font-size: 15px;\">{{\"TABLAEXCEL.TITULO\" | translate}}</caption>\r\n      <thead>\r\n        <tr>\r\n          <th style=\"color: #ff0505;\">{{\"TABLAEXCEL.FECHA\" | translate}}</th>\r\n          <th style=\"color: #0833a2\">{{\"TABLAEXCEL.TEMPERATURA\" | translate}}</th>\r\n          <th style=\"color: #14faff;\">{{\"TABLAEXCEL.PH\" | translate}}</th>\r\n          <th style=\"color: #edff14;\">{{\"TABLAEXCEL.BRIX\" | translate}}</th>\r\n          <th style=\"color: #ff14ff;\">{{\"TABLAEXCEL.ALCVOL\" | translate}}</th>\r\n          <th style=\"color: #1eff05;\">{{\"TABLAEXCEL.EFICIENCIA\" | translate}}</th>\r\n          <!-- <th style=\"color: #5B2C6F;\">MaxTemp</th>\r\n          <th style=\"color: #FF0087;\">MinTemp</th>\r\n          <th style=\"color: #D35400;\">MaxpH</th>\r\n          <th style=\"color: #F08080;\">MinpH</th> -->\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let excel of datosExcel\">\r\n          <td>{{excel['x'] | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n          <td>{{excel['y']}}</td>\r\n          <td>{{excel['z']}}</td>\r\n          <td>{{excel['w']}}</td>\r\n          <td>{{excel['v']}}</td>\r\n          <td>{{excel['u']}}</td>\r\n          <!-- <td>{{excel['tempMayor']}}</td>\r\n          <td>{{excel['tempMenor']}}</td>\r\n          <td>{{excel['phMayor']}}</td>\r\n          <td>{{excel['phMenor']}}</td> -->\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </ion-grid>\r\n<!-- </ion-card-content> -->\r\n</ion-card>\r\n<ion-button id=\"boton\" expand=\"block\" class = \"registro\" (click)=\"generarExcel()\"> {{\"PANTGRAF.DESCARGARXLSX\" | translate}} </ion-button>\r\n</ion-content>");

/***/ }),

/***/ 820:
/*!*****************************************!*\
  !*** ./src/app/charts/charts.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "ion-card-title.color1 {\n  --color:\t#0833a2;\n  --text-align: \"center\";\n}\n\nion-card-title.color2 {\n  --color: #14faff;\n  --text-align: \"center\";\n}\n\nion-card-title.color3 {\n  --color: #edff14;\n  --text-align: \"center\";\n}\n\nion-card-title.color4 {\n  --color: #ff14ff;\n  --text-align: \"center\";\n}\n\nion-card-title.color5 {\n  --color: #1eff05;\n  --text-align: \"center\";\n}\n\nion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\nion-back-button {\n  --color: #fff;\n}\n\nion-button {\n  --background: #94b8d7;\n}\n\nion-card-subtitle {\n  --color: #ffffff;\n}\n\nion-button[shape=circle] {\n  --border-radius: 50%;\n  width: 20px;\n  height: 30px;\n}\n\nion-button.rojo {\n  --background: #ffffff;\n}\n\n#circuloRojo {\n  background-color: #ce1127;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  left: 30%;\n  top: 90%;\n  border-radius: 50px;\n}\n\n#circuloAmarillo {\n  background-color: #FFFB00;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  left: 49%;\n  top: 90%;\n  border-radius: 50px;\n}\n\n#circuloVerde {\n  background-color: #00FF00;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  left: 67%;\n  top: 90%;\n  border-radius: 50px;\n}\n\n#circuloRojo1 {\n  background-color: #ce1127;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  left: 35%;\n  top: 80%;\n  border-radius: 50px;\n}\n\n#circuloAmarillo1 {\n  background-color: #FFFB00;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  left: 47%;\n  top: 80%;\n  border-radius: 50px;\n}\n\n#circuloVerde1 {\n  background-color: #00FF00;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  left: 59%;\n  top: 80%;\n  border-radius: 50px;\n}\n\n#circuloRojo2 {\n  background-color: #ce1127;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  left: 35%;\n  top: 93%;\n  border-radius: 50px;\n}\n\n#circuloAmarillo2 {\n  background-color: #FFFB00;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  left: 47%;\n  top: 93%;\n  border-radius: 50px;\n}\n\n#circuloVerde2 {\n  background-color: #00FF00;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  left: 59%;\n  top: 93%;\n  border-radius: 50px;\n}\n\n.parpadea {\n  animation-name: parpadeo;\n  animation-duration: 1s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: parpadeo;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n}\n\n@keyframes parpadeo {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n#container {\n  height: 101%;\n}\n\n#boton {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-item {\n  left: auto;\n}\n\nion-content {\n  height: 70%;\n  width: 100%;\n  background-color: #ffffff;\n}\n\n#grafica {\n  height: 70%;\n  --background: #ffffff;\n}\n\n.fondo {\n  --background: #ffffff;\n  --color: #ffffff;\n}\n\n.graficas {\n  --background: #ffffff;\n}\n\n.fondoBlanco {\n  --background: #ffffff;\n  cursor: pointer;\n  box-shadow: 0px 2px 10px #000000 !important;\n}\n\n.letras {\n  --color: #000000;\n}\n\n.toggle {\n  --background: #000000;\n}\n\n.contenido {\n  --background: #ffffff;\n  --border-color: transparent;\n}\n\n#spinner {\n  color: #0833a2;\n  top: 30vh;\n  left: 50%;\n  transform: scale(1.5);\n}\n\ntable thead tr th {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background-color: #fff;\n  /* opcional */\n}\n\n@media screen and (max-width: 480px) {\n  #grafica {\n    max-width: 100%;\n    max-height: 100%;\n  }\n\n  #boton {\n    margin-top: 0%;\n    width: 70%;\n  }\n\n  .tarjetaTabla {\n    overflow-x: auto;\n    overflow-y: auto;\n  }\n\n  .tablaExcel {\n    border-collapse: separate;\n    border-spacing: 15px;\n  }\n\n  #spinner {\n    top: 25vh;\n    left: 50%;\n  }\n}\n\n.registro {\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FBRVI7O0FBQUk7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FBR1I7O0FBREk7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FBSVI7O0FBRkk7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FBS1I7O0FBRkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBS0o7O0FBRkU7RUFDRSxhQUFBO0FBS0o7O0FBRkU7RUFDRSxxQkFBQTtBQUtKOztBQUZFO0VBQ0UsZ0JBQUE7QUFLSjs7QUFGRTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFLSjs7QUFEQTtFQUNFLHFCQUFBO0FBSUY7O0FBREE7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUdBLG1CQUFBO0FBR0Y7O0FBQUE7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUdBLG1CQUFBO0FBRUY7O0FBQ0E7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUdBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUdBLG1CQUFBO0FBQUY7O0FBR0E7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUdBLG1CQUFBO0FBREY7O0FBSUE7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUdBLG1CQUFBO0FBRkY7O0FBS0E7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUdBLG1CQUFBO0FBSEY7O0FBTUE7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUdBLG1CQUFBO0FBSkY7O0FBT0E7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUdBLG1CQUFBO0FBTEY7O0FBUUE7RUFFRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUVBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtFQUNBLDJDQUFBO0FBUEY7O0FBc0JBO0VBQ0U7SUFBSyxVQUFBO0VBSUw7RUFIQztJQUFNLFVBQUE7RUFNUDtFQUxBO0lBQU8sVUFBQTtFQVFQO0FBQ0Y7O0FBUEE7RUFDRSxZQUFBO0FBU0Y7O0FBUEE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVVGOztBQVJBO0VBQ0UsVUFBQTtBQVdGOztBQVJBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQVdGOztBQVJBO0VBQ0UsV0FBQTtFQUNGLHFCQUFBO0FBV0E7O0FBUEE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBVUY7O0FBUEE7RUFDRSxxQkFBQTtBQVVGOztBQVBBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsMkNBQUE7QUFTRjs7QUFOQTtFQUNFLGdCQUFBO0FBU0Y7O0FBTkE7RUFDRSxxQkFBQTtBQVNGOztBQU5BO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtBQVNGOztBQU5BO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFTRjs7QUFOQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUF3QixhQUFBO0FBVTFCOztBQVBBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFVRjs7RUFQQTtJQUNFLGNBQUE7SUFDQSxVQUFBO0VBVUY7O0VBUEU7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBVUo7O0VBUEU7SUFDRSx5QkFBQTtJQUNBLG9CQUFBO0VBVUo7O0VBUEU7SUFDRSxTQUFBO0lBQ0EsU0FBQTtFQVVKO0FBQ0Y7O0FBTkE7RUFDRSxpQkFBQTtBQVFGIiwiZmlsZSI6ImNoYXJ0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW9uLWNhcmQtdGl0bGUuY29sb3Ixe1xyXG4gICAgICAgIC0tY29sb3IgOlx0IzA4MzNhMjsgXHJcbiAgICAgICAgLS10ZXh0LWFsaWduIDogJ2NlbnRlcic7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC10aXRsZS5jb2xvcjJ7XHJcbiAgICAgICAgLS1jb2xvciA6ICMxNGZhZmY7IFxyXG4gICAgICAgIC0tdGV4dC1hbGlnbiA6ICdjZW50ZXInO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtdGl0bGUuY29sb3Ize1xyXG4gICAgICAgIC0tY29sb3IgOiAjZWRmZjE0OyBcclxuICAgICAgICAtLXRleHQtYWxpZ24gOiAnY2VudGVyJztcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLXRpdGxlLmNvbG9yNHtcclxuICAgICAgICAtLWNvbG9yIDogI2ZmMTRmZjsgXHJcbiAgICAgICAgLS10ZXh0LWFsaWduIDogJ2NlbnRlcic7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC10aXRsZS5jb2xvcjV7XHJcbiAgICAgICAgLS1jb2xvciA6ICMxZWZmMDU7IFxyXG4gICAgICAgIC0tdGV4dC1hbGlnbiA6ICdjZW50ZXInO1xyXG4gICAgfVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLXRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tYmFja2dyb3VuZDogIzk0YjhkNztcclxuICB9XHJcblxyXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzk0YjhkNztcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgIC0tY29sb3IgOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbltzaGFwZT1jaXJjbGVdIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgIC8vIC0tYmFja2dyb3VuZCA6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ucm9qb3tcclxuICAtLWJhY2tncm91bmQgOiAjZmZmZmZmO1xyXG59XHJcblxyXG4jY2lyY3Vsb1Jvam8ge1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTExMjc7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgd2lkdGg6MjBweDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OjMwJTtcclxuICB0b3A6OTAlO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NTBweDtcclxufVxyXG5cclxuI2NpcmN1bG9BbWFyaWxsbyB7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkIwMDtcclxuICBoZWlnaHQ6MjBweDtcclxuICB3aWR0aDoyMHB4O1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6NDklO1xyXG4gIHRvcDo5MCU7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1MHB4O1xyXG59XHJcblxyXG4jY2lyY3Vsb1ZlcmRlIHtcclxuICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBGRjAwO1xyXG4gIGhlaWdodDoyMHB4O1xyXG4gIHdpZHRoOjIwcHg7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDo2NyU7XHJcbiAgdG9wOjkwJTtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6NTBweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6NTBweDtcclxuICBib3JkZXItcmFkaXVzOjUwcHg7XHJcbn1cclxuXHJcbiNjaXJjdWxvUm9qbzEge1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTExMjc7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgd2lkdGg6MjBweDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OjM1JTtcclxuICB0b3A6ODAlO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NTBweDtcclxufVxyXG5cclxuI2NpcmN1bG9BbWFyaWxsbzEge1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZCMDA7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgd2lkdGg6MjBweDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OjQ3JTtcclxuICB0b3A6ODAlO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NTBweDtcclxufVxyXG5cclxuI2NpcmN1bG9WZXJkZTEge1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEZGMDA7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgd2lkdGg6MjBweDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OjU5JTtcclxuICB0b3A6ODAlO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NTBweDtcclxufVxyXG5cclxuI2NpcmN1bG9Sb2pvMiB7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlMTEyNztcclxuICBoZWlnaHQ6MjBweDtcclxuICB3aWR0aDoyMHB4O1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6MzUlO1xyXG4gIHRvcDo5MyU7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1MHB4O1xyXG59XHJcblxyXG4jY2lyY3Vsb0FtYXJpbGxvMiB7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkIwMDtcclxuICBoZWlnaHQ6MjBweDtcclxuICB3aWR0aDoyMHB4O1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6NDclO1xyXG4gIHRvcDo5MyU7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1MHB4O1xyXG59XHJcblxyXG4jY2lyY3Vsb1ZlcmRlMiB7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwRkYwMDtcclxuICBoZWlnaHQ6MjBweDtcclxuICB3aWR0aDoyMHB4O1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6NTklO1xyXG4gIHRvcDo5MyU7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1MHB4O1xyXG59XHJcblxyXG4ucGFycGFkZWEge1xyXG4gIFxyXG4gIGFuaW1hdGlvbi1uYW1lOiBwYXJwYWRlbztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTpwYXJwYWRlbztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHBhcnBhZGVveyAgXHJcbiAgMCUgeyBvcGFjaXR5OiAxLjA7IH1cclxuICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cclxuICAxMDAlIHsgb3BhY2l0eTogMS4wOyB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwYXJwYWRlbyB7ICBcclxuICAwJSB7IG9wYWNpdHk6IDEuMDsgfVxyXG4gIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxyXG4gICAxMDAlIHsgb3BhY2l0eTogMS4wOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcGFycGFkZW8geyAgXHJcbiAgMCUgeyBvcGFjaXR5OiAxLjA7IH1cclxuICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XHJcbiAgMTAwJSB7IG9wYWNpdHk6IDEuMDsgfVxyXG59XHJcbiNjb250YWluZXIge1xyXG4gIGhlaWdodDogMTAxJTtcclxufVxyXG4jYm90b24ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gIGxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBoZWlnaHQ6IDcwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4jZ3JhZmljYSB7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbi0tYmFja2dyb3VuZCA6ICNmZmZmZmY7XHJcbi8vYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4uZm9uZG8ge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLWNvbG9yIDogI2ZmZmZmZjtcclxufVxyXG5cclxuLmdyYWZpY2FzIHtcclxuICAtLWJhY2tncm91bmQgOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZm9uZG9CbGFuY28ge1xyXG4gIC0tYmFja2dyb3VuZCA6ICNmZmZmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGV0cmFzIHtcclxuICAtLWNvbG9yIDogIzAwMDAwMDtcclxufVxyXG5cclxuLnRvZ2dsZXtcclxuICAtLWJhY2tncm91bmQgOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uY29udGVuaWRvIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLS1ib3JkZXItY29sb3IgOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI3NwaW5uZXIge1xyXG4gIGNvbG9yOiAjMDgzM2EyO1xyXG4gIHRvcDogMzB2aDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG50YWJsZSB0aGVhZCB0ciB0aCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvKiBvcGNpb25hbCAqL1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICNncmFmaWNhIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICNib3RvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YXJqZXRhVGFibGEge1xyXG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJsYUV4Y2VsIHtcclxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgYm9yZGVyLXNwYWNpbmc6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3NwaW5uZXIge1xyXG4gICAgICB0b3A6IDI1dmg7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5yZWdpc3RybyB7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_charts_charts_module_ts.js.map
import{_ as t,D as i,c,l as a,a as s,I as p,w as e,a1 as l,o}from"./chunks/framework.C26d2NF1.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"views/column/test/echarts.md","filePath":"views/column/test/echarts.md"}'),r={name:"views/column/test/echarts.md"},h=a("h3",{id:"关于echarts",tabindex:"-1"},[s("关于echarts "),a("a",{class:"header-anchor",href:"#关于echarts","aria-label":'Permalink to "关于echarts"'},"​")],-1),u=a("h6",{id:"_1-1-问题-vue3中使用echarts图表时-报读取不到type的错",tabindex:"-1"},[s("1.1 问题：vue3中使用echarts图表时，报读取不到type的错 "),a("a",{class:"header-anchor",href:"#_1-1-问题-vue3中使用echarts图表时-报读取不到type的错","aria-label":'Permalink to "1.1 问题：vue3中使用echarts图表时，报读取不到type的错"'},"​")],-1),d=l("",3),_=l("",1),g=l("",2),q=l("",2),b=l("",1);function v(m,y,f,x,T,k){const n=i("font");return o(),c("div",null,[h,u,a("p",null,[s("在vue3中使用echarts图表时，原本使用"),p(n,{style:{background:"rgb(247 175 175)",size:"18px"}},{default:e(()=>[s(" ref ")]),_:1}),s("来绑定使用，只要拉动时间轴或者切换就会报错，读取不到type， 这是因为echarts被代理成为响应式对象了，影响echarts对内部属性的访问，就会导致图表无法正确显示。")]),d,a("p",null,[s("一个echarts图表分成几份小图表可以使用 "),p(n,{style:{background:"rgb(247 175 175)",size:"18px"}},{default:e(()=>[s("gridIndex")]),_:1}),s("：根据分出的图表在xAxisS、yAxisS属性中设置gridIndex，")]),_,a("p",null,[s("上面的代码中增加了图表的背景图，但是位置问题就需要处理,在这里我使用的就是 "),p(n,{style:{background:"rgb(247 175 175)",size:"18px"}},{default:e(()=>[s("gird")]),_:1}),s(" 来确定位置，用的笨方法，先固定echarts的图标位置，所以在增加背景图的时候获取到图表的x、y轴就可以了")]),g,a("p",null,[s("目前的需求是线条超出阈值的部分变成红色，这里使用到的"),p(n,{style:{background:"rgb(247 175 175)",size:"18px"}},{default:e(()=>[s("visualMap")]),_:1}),s("属性,使用分段式piecewise，")]),a("p",null,[s("里面有个重要的属性"),p(n,{style:{background:"rgb(247 175 175)",size:"18px"}},{default:e(()=>[s("seriesIndex")]),_:1}),s("，这个是要和数据的数量对应上的， gte：大于等于，lte：小于等于，gt：大于，lt：小于")]),q,a("p",null,[s("这里用到是 legend 里的"),p(n,{style:{background:"rgb(247 175 175)",size:"18px"}},{default:e(()=>[s(" selected ")]),_:1}),s("属性")]),b])}const I=t(r,[["render",v]]);export{A as __pageData,I as default};
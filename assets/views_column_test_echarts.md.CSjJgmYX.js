import{_ as t,D as i,c,l as a,a as s,I as p,w as e,a1 as l,o}from"./chunks/framework.C26d2NF1.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"views/column/test/echarts.md","filePath":"views/column/test/echarts.md"}'),r={name:"views/column/test/echarts.md"},h=a("h3",{id:"关于echarts",tabindex:"-1"},[s("关于echarts "),a("a",{class:"header-anchor",href:"#关于echarts","aria-label":'Permalink to "关于echarts"'},"​")],-1),u=a("h6",{id:"_1-1-问题-vue3中使用echarts图表时-报读取不到type的错",tabindex:"-1"},[s("1.1 问题：vue3中使用echarts图表时，报读取不到type的错 "),a("a",{class:"header-anchor",href:"#_1-1-问题-vue3中使用echarts图表时-报读取不到type的错","aria-label":'Permalink to "1.1 问题：vue3中使用echarts图表时，报读取不到type的错"'},"​")],-1),d=l(`<p>解决方案：使用普通变量声明echarts对象实例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//接收值并生成echarts</span></span>
<span class="line"><span>setEchart(val){</span></span>
<span class="line"><span>   const myEcharts= echarts.init(document.getElementById(&quot;echarts的ID名称&quot;))</span></span>
<span class="line"><span>   myEcharts.setOption(val,true)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h6 id="_1-2-需求-一个echarts图表分成几份小图表展示-并加上相对应的背景图" tabindex="-1">1.2 需求：一个echarts图表分成几份小图表展示，并加上相对应的背景图 <a class="header-anchor" href="#_1-2-需求-一个echarts图表分成几份小图表展示-并加上相对应的背景图" aria-label="Permalink to &quot;1.2 需求：一个echarts图表分成几份小图表展示，并加上相对应的背景图&quot;">​</a></h6>`,3),_=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//arr是分成多少个小图表的数量</span></span>
<span class="line"><span> for (let i=0; i&lt;arr;i++){</span></span>
<span class="line"><span>    &lt;!-- 给图表增加背景图片 --&gt;</span></span>
<span class="line"><span>        graphic.push({</span></span>
<span class="line"><span>          type: &quot;image&quot;, // 图形元素类型</span></span>
<span class="line"><span>          left:&quot;center&quot;,</span></span>
<span class="line"><span>          top:&quot;center&quot;,</span></span>
<span class="line"><span>          gridIndex:i, //这里就是关键属性</span></span>
<span class="line"><span>          style: {</span></span>
<span class="line"><span>            image: &quot;https://images.669pic.com/element2/f3d9034e536af1592da76fe250108c0f.jpg&quot;, // 这里一定要注意、注意，必须是https开头的图片路径地址</span></span>
<span class="line"><span>            height: 260,</span></span>
<span class="line"><span>            width: widthEcharts,</span></span>
<span class="line"><span>            opacity: .5,</span></span>
<span class="line"><span>           display:&quot;flex&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        xAxisS.push({</span></span>
<span class="line"><span>          type: &quot;category&quot;,</span></span>
<span class="line"><span>          data: xAxis,//x轴的数据展示</span></span>
<span class="line"><span>          gridIndex:i,  //这里就是关键属性</span></span>
<span class="line"><span>          boundaryGap: [&#39;20%&#39;, &#39;50%&#39;] ,// 设置 y 轴两边留白为 20%</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        yAxisS.push({</span></span>
<span class="line"><span>          type: &quot;value&quot;,</span></span>
<span class="line"><span>          name:nameArr[i],</span></span>
<span class="line"><span>          gridIndex:i,</span></span>
<span class="line"><span>          axisLabel: {</span></span>
<span class="line"><span>            formatter: &quot;{value}&quot;,</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        }</span></span></code></pre></div>`,1),g=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> // 动态生成图片</span></span>
<span class="line"><span>    moveImage(val,arr){</span></span>
<span class="line"><span>        //循环获取位置</span></span>
<span class="line"><span>        for (let i=0; i&lt;arr;i++){</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>          let y=this.gird[i].y</span></span>
<span class="line"><span>          val.graphic[i].left=this.gird[i].x</span></span>
<span class="line"><span>          val.graphic[i].top=Number(y.slice(0,-1))-1+&quot;%&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      //  塞入数据</span></span>
<span class="line"><span>      this.setEchart(this.option)</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h6 id="_1-3需求-在图表中设置一条预警线-超出预警线部分数据进行改变颜色" tabindex="-1">1.3需求：在图表中设置一条预警线，超出预警线部分数据进行改变颜色 <a class="header-anchor" href="#_1-3需求-在图表中设置一条预警线-超出预警线部分数据进行改变颜色" aria-label="Permalink to &quot;1.3需求：在图表中设置一条预警线，超出预警线部分数据进行改变颜色&quot;">​</a></h6>`,2),q=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 定义的颜色 --&gt;</span></span>
<span class="line"><span>let color=[ &quot;#5470c6&quot;,&quot;#91cc75&quot;,&quot;#fac858&quot;,&quot;#ee6666&quot;,&quot;#73c0de&quot;,&quot;#3ba272&quot;,&quot;#fc8452&quot;,&quot;#9a60b4&quot;,&quot;#ea7ccc&quot;  ]</span></span>
<span class="line"><span>      &lt;!-- 阈值 --&gt;</span></span>
<span class="line"><span> let yz=[1,10,23,45,56,67,45,34]</span></span>
<span class="line"><span>//根据数据的长度判断增加visualMap，</span></span>
<span class="line"><span>  for (let i=0;i&lt;数据.length;i++){</span></span>
<span class="line"><span>  visualMap.push(</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                type: &#39;piecewise&#39;,</span></span>
<span class="line"><span>                show: false,</span></span>
<span class="line"><span>                seriesIndex: i, //这个是关键属性  </span></span>
<span class="line"><span>                pieces: [</span></span>
<span class="line"><span>                  {</span></span>
<span class="line"><span>                    gte:0,</span></span>
<span class="line"><span>                    lt : yz[i],</span></span>
<span class="line"><span>                    color: color[i],</span></span>
<span class="line"><span>                  },</span></span>
<span class="line"><span>                  {</span></span>
<span class="line"><span>                    gte  :  yz[i],</span></span>
<span class="line"><span>                    lt:10000,</span></span>
<span class="line"><span>                    color: &quot;red&quot;,</span></span>
<span class="line"><span>                  },</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>              })</span></span>
<span class="line"><span>        }</span></span></code></pre></div><h6 id="_1-4需求-需求是默认只显示一条图例-想看哪个的再手动点亮图例按钮展示" tabindex="-1">1.4需求：需求是默认只显示一条图例，想看哪个的再手动点亮图例按钮展示 <a class="header-anchor" href="#_1-4需求-需求是默认只显示一条图例-想看哪个的再手动点亮图例按钮展示" aria-label="Permalink to &quot;1.4需求：需求是默认只显示一条图例，想看哪个的再手动点亮图例按钮展示&quot;">​</a></h6>`,2),b=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>legend:{</span></span>
<span class="line"><span>  //静态的数据，就直接默认不展示</span></span>
<span class="line"><span>selected:{</span></span>
<span class="line"><span>  &quot;xxx&quot;:false, </span></span>
<span class="line"><span>  &quot;DDD&quot;:false</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>动态的话：就循环除了展示的那一条图例外，其余全为false</span></span></code></pre></div>`,1);function v(m,y,f,x,T,k){const n=i("font");return o(),c("div",null,[h,u,a("p",null,[s("在vue3中使用echarts图表时，原本使用"),p(n,{style:{background:"rgb(247 175 175)",size:"18px"}},{default:e(()=>[s(" ref ")]),_:1}),s("来绑定使用，只要拉动时间轴或者切换就会报错，读取不到type， 这是因为echarts被代理成为响应式对象了，影响echarts对内部属性的访问，就会导致图表无法正确显示。")]),d,a("p",null,[s("一个echarts图表分成几份小图表可以使用 "),p(n,{style:{background:"rgb(247 175 175)",size:"18px"}},{default:e(()=>[s("gridIndex")]),_:1}),s("：根据分出的图表在xAxisS、yAxisS属性中设置gridIndex，")]),_,a("p",null,[s("上面的代码中增加了图表的背景图，但是位置问题就需要处理,在这里我使用的就是 "),p(n,{style:{background:"rgb(247 175 175)",size:"18px"}},{default:e(()=>[s("gird")]),_:1}),s(" 来确定位置，用的笨方法，先固定echarts的图标位置，所以在增加背景图的时候获取到图表的x、y轴就可以了")]),g,a("p",null,[s("目前的需求是线条超出阈值的部分变成红色，这里使用到的"),p(n,{style:{background:"rgb(247 175 175)",size:"18px"}},{default:e(()=>[s("visualMap")]),_:1}),s("属性,使用分段式piecewise，")]),a("p",null,[s("里面有个重要的属性"),p(n,{style:{background:"rgb(247 175 175)",size:"18px"}},{default:e(()=>[s("seriesIndex")]),_:1}),s("，这个是要和数据的数量对应上的， gte：大于等于，lte：小于等于，gt：大于，lt：小于")]),q,a("p",null,[s("这里用到是 legend 里的"),p(n,{style:{background:"rgb(247 175 175)",size:"18px"}},{default:e(()=>[s(" selected ")]),_:1}),s("属性")]),b])}const I=t(r,[["render",v]]);export{A as __pageData,I as default};

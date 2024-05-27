import{_ as s,c as a,o as n,a1 as t}from"./chunks/framework.C26d2NF1.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"views/column/test/tryIndex.md","filePath":"views/column/test/tryIndex.md"}'),e={name:"views/column/test/tryIndex.md"},p=t(`<h2 id="随手笔记" tabindex="-1">随手笔记 <a class="header-anchor" href="#随手笔记" aria-label="Permalink to &quot;随手笔记&quot;">​</a></h2><h6 id="get和post的区别" tabindex="-1">get和post的区别 <a class="header-anchor" href="#get和post的区别" aria-label="Permalink to &quot;get和post的区别&quot;">​</a></h6><p>（1）Get请求的数据（参数）会显示在地址栏，而Post不会，所以，Post比Get更加安全。</p><p>（2）Post请求的参数存放到了请求实体中，而Get没有请求实体，Get是存储在请求行中。</p><p>（3）数据传输Post有优势：Get方式请求的数据不能超过2k，而Post 没有上限。</p><p>（4）浏览缓存Get有优势：Get具有数据缓存，而Post没有。</p><p>✿ 从优势角度看，数据传输使用Post，数据浏览查询使用Get。即查询时使用Get，其他时候使用Post。 表单全部使用Post提交</p><h6 id="使用moment获取时间" tabindex="-1">使用moment获取时间 <a class="header-anchor" href="#使用moment获取时间" aria-label="Permalink to &quot;使用moment获取时间&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//下载依赖</span></span>
<span class="line"><span>npm i moment</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//在页面中引用</span></span>
<span class="line"><span>import moment from &quot;moment&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//获取当前时间年月日 时分秒 格式化</span></span>
<span class="line"><span>moment().format(&#39;YYYY-MM-DD HH:mm:ss&#39;);</span></span>
<span class="line"><span>//获得上个月的当前时间</span></span>
<span class="line"><span> moment().subtract(1, &#39;months&#39;).format(&#39;YYYY-MM-DD HH:mm:ss&#39;)</span></span>
<span class="line"><span> //获得前两分钟</span></span>
<span class="line"><span>  moment().subtract(2, &#39;minutes&#39;).format(&#39;YYYY-MM-DD HH:mm:ss&#39;)</span></span></code></pre></div>`,9),o=[p];function l(i,m,c,r,d,h){return n(),a("div",null,o)}const P=s(e,[["render",l]]);export{u as __pageData,P as default};

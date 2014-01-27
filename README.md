<h1>CSS Dual Grid</h1>

<p><a href="http://splintercode.github.io/DualGrid">Dual Grid</a> is a simple mobile first CSS grid. The grid is designed to have a default break point for the majority of content and a secondary for fined tuned control for breakpoints. The first primary default is optimized for single column layout. The default primary grid is triggered at 44em (704px) wide. The naming convention for the default primary column is .col_1</p>
<p>A secondary grid is for the fined tuned control over your breakpoints. All .col start at 100% mobile first. To enable cols at certain width use media queries. Secondary grid follows the naming convention col__1 (two underscores).</p>

<h2>Primary Grid</h2>
<pre>
&lt;section&gt; 
    &lt;div class=&quot;col_6&quot;&gt;&lt;/div&gt; 
    &lt;div class=&quot;col_6 omega&quot;&gt;&lt;/div&gt; 
&lt;/section&gt;
</pre>


<h2>Secondary Grid</h2>
<pre>
&lt;section class=&quot;pageClass&quot;&gt; 
    &lt;div class=&quot;col__3&quot;&gt;.col__3&lt;/div&gt; 
    &lt;div class=&quot;col__3&quot;&gt;.col__3&lt;/div&gt; 
    &lt;div class=&quot;col__3&quot;&gt;.col__3&lt;/div&gt; 
    &lt;div class=&quot;col__3 omega&quot;&gt;.col__3&lt;/div&gt; 
                    
    &lt;div class=&quot;col__6&quot;&gt;&lt;/div&gt; 
    &lt;div class=&quot;col__6 omega&quot;&gt;&lt;/div&gt; 
&lt;/section&gt;

@media all and (min-width: 30em)
    .pageClass {
        .col__3 {
            width:23.5%;
        }
    }
}
@media all and (min-width: 40em)
    .pageClass {
        .col__6 {
            width:49%;
        }
    }
}
</pre>



<h2>License</h2>
<p>
This code is free to use under the MIT License.
Read more at <a href="http://opensource.org/licenses/MIT" target="_blank">MIT License</a>
</p>

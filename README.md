<h1>Pico First Grid</h1>

<p>
  The pico first grid is a micro css grid. No base style. No resets. No framework. 
  No defined breakpoints. No bs. Just a grid. 
</p>

<p>
    The grid is simple and gives you the designer more control of your pages. All 12 columns start at 100% single 
    column design for mobile. As you have more space on you page you turn your grid on and off
    with min-width media queries. 
</p>

<p>
    The column widths are defined in a comment for reference. It is up to you to simply add the widths in your media queries.
    This give you the control to turn the grid off and on based on your content and not device based breakpoints.
    Grids dont need to be complex to make complex layouts.
</p>

<h2>HTML</h2>
        <section class="demo">
            <h2>Example 2 col</h2>
            <div class="col_6">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non   proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="col_6 omega">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non   proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>
        
        
<h2>CSS</h2>
<pre>
@media screen and (min-width: 25em) {
    .demo .col_6 {
        width: 49%;
    }
}
</pre>

<h2>Pico Grid</h2>
<pre>
/*! GRID CONSTANTS
.col_1 { width: 6.5%; } 
.col_2 { width: 15%; } 
.col_3 { width: 23.5%; } 
.col_4 { width: 32%; } 
.col_5 { width: 40.5%; } 
.col_6 { width: 49%; } 
.col_7 { width: 57.5%; }
.col_8 { width: 66%; } 
.col_9 { width: 74.5%; } 
.col_10 { width: 83%; } 
.col_11 { width: 91.5%; } 
.col_12 { width: 100%; } */ 

.col_1,
.col_2,
.col_3,
.col_4,
.col_5,
.col_6,
.col_7,
.col_8,
.col_9,
.col_10,
.col_11,
.col_12 {
    width:100%;
    margin: 0 2% 1% 0;
    float: left;
    display: block;
}

.alpha{ margin-left:0; }
.omega{ margin-right:0; }

.container {
    width: 90%; 
    max-width: 1300px;
    margin: 0px auto;
}
</pre>

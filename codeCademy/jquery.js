//***************************************exo 1******************************************************/

//script.js
$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       });
   });
   $('div').click(function() {
       $(this).toggle(1000);
   });
});

//stylesheet.css
div {
    height:100px;
    width:100px;
    display: inline-block;
}

#red {
    background-color:#FF0000;
}

#blue {
    background-color:#0000FF;
}

#yellow {
    background-color:#E2BE22;
}

#green {
    background-color:#008800;
}

//index.html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script type="text/javascript" src="script.js"></script>
    </head>
    <body>
        <div id="red"></div>
        <div id="blue"></div>
        <div id="yellow"></div>
        <div id="green"></div>
    </body>
</html>


/*************************************************fin exo 1*********************************************************************/


//The Document Object Model
$(document).ready(function(){
    $("#notready").fadeOut(1000);
};);





//exo 11 - Get Yourself In...
$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast',1);
    });
});


//exo 12 - and Get Yourself Out!
$(document).ready(function() {

    $('div').mouseenter(function() {
        $('div').fadeTo('fast',1);
    });

    $('div').mouseleave(function() {
        $('div').fadeTo('fast',0.5);
    });
});


/*************************************part II*****************************************************************************************/
// exo un
$(document).ready(function(){

    $('div').hide();

    });

//2-Functions, Part II: Functions Explained
$(document).ready(function() {
    $('div').click(function() {
        $('div').fadeOut('slow');
    });
});




//exo - 3 Variables
// Write your jQuery code on line 3!
$(document).ready(function() {
    $target=$('#4');
    $target.fadeOut('fast');
});

//html
<!DOCTYPE html>
<html>
	<head>
		<title>Simplify, Simplify</title>
        <script type='text/javascript' src='script.js'></script>
	</head>
	<body>
        <div> Remember!
            <ul>
                <li>
                    <ol>
                        <li>Start with the function keyword</li>
                        <li>Inputs go between ()</li>
                        <li>Actions go between {}</li>
                        <li id="4">jQuery is for chumps!</li>
                    </ol>
                </li>
                <li>Inputs are separated by commas.</li>
                <li>Inputs can include other functions!</li>
            </ul>
        </div>
	</body>
</html>






// 5- Using Functions to Select HTML Elements
$(document).ready(function(){

    var $div = $('div');

    $div.fadeIn('slow');
    });


//6 - Selecting by Class
$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeOut('slow');
    });
});
//html
<body>
    <div class="vanish"></div>
    <div class="vanish"></div>
    <div class="vanish"></div>
    <div class="vanish"></div>
    <br/><button>Click Me!</button>
</body>





//7 -
$(document).ready(function() {
    $('button').click(function() {
        $('#blue').fadeOut('slow');
    });
});
//html
<body>
    <div id="blue"></div>
    <div></div>
    <div></div>
    <div></div>
    <br/><button>Click Me!</button>
</body>



//8 - Flexible Selections
        $('p').fadeTo('slow', 0);
        $('li').fadeTo('slow', 0);
        //We can apply a fadeTo() to both the p and li selectors like this:
        $('p, li').fadeTo('slow', 0);
//jquery
$(document).ready(function(){
    $('.pink,.red').fadeTo('slow', 0);
    });

//html
<body>
    <div class='red'></div>
    <div></div>
    <div class='pink'></div>
    <div></div>
</body>





/****************NOTE********************/
event handler
.click();
.dblclick();
.mouseenter();
.mouseleave();
/****************************************/

// 9 - 'this' is Important!
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});
//html
<body>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</body>






//exo 12 -
$(document).ready(function(){
    $('.pull-me').click(function(){
        $('.panel').slideToggle('slow');
        });
    });

//html
<!DOCTYPE html>
<html>
    <head>
        <title>Slide Panel</title>
        <script type="text/javascript" src="script.js"></script>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"></link>
    </head>
    <body>
        <div class="panel">
        <br />
        <br />
        <p>Now you see me!</p>
        </div>
        <p class="slide"><div class="pull-me">Slide Up/Down</div></p>
    </body>
</html>
//css
body {
    margin:0 auto;
    padding:0;
	width:200px;
    text-align:center;
}
.pull-me{
    -webkit-box-shadow: 0 0 8px #FFD700;
    -moz-box-shadow: 0 0 8px #FFD700;
    box-shadow: 0 0 8px #FFD700;
    cursor:pointer;
}
.panel {
	background: #ffffbd;
    background-size:90% 90%;
    height:300px;
	display:none;
    font-family:garamond,times-new-roman,serif;
}
.panel p{
    text-align:center;
}
.slide {
	margin:0;
	padding:0;
	border-top:solid 2px #cc0000;
}
.pull-me {
	display:block;
    position:relative;
    right:-25px;
    width:150px;
    height:20px;
	font-family:arial,sans-serif;
    font-size:14px;
	color:#ffffff;
    background:#cc0000;
	text-decoration:none;
    -moz-border-bottom-left-radius:5px;
    -moz-border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
}
.pull-me p {
    text-align:center;
}


/**************************************PART III*****************************************************************/
.append()  -> inserts the specified element as the last child of the target element.
.prepend() -> inserts the specified element as the first child of the target element.


//EXAMPLE
$(".info").append("<p>Stuff!</p>");
$(".info").prepend("<p>Stuff!</p>");


.appendTo() -> does the same as .append(), but it just reverses the order of "what to add" and "where to add it." The code
$('<p>Stuff!</p>').appendTo('.info');




//exo 2.
$(document).ready(function(){
    $("body").append("<p>I'm a paragraph!</p>");
    });







//exo 3 .before()    .after()
    .before();
    .after();
    $('target').after('<tag>To add</tag>');
//jquery
$(document).ready(function(){
    var $div = $('#one');
    $("#one").after("<p>Hello!</p>");
    });
//html
<body>
    <div class="container">
        <h2>Greetings</h2>
        <div id="one">Div #1</div>
        <div id="two">Div #2</div>
    </div>
</body>


//note
var $paragraph = $("p"); // existing element
$("div").after($paragraph); // Move it!
// Same as:
$("div").after($("p"));
//exo 4 - Moving Elements Around
$(document).ready(function(){
   $('#one').after('<p>Any text you like</p>');
   $('#two').after($("p"));
});



// exo 5 -
delete content from our previous page:
.empty()
.remove()

$(document).ready(function(){
   $('#one').after('<p>Any text you like</p>');
   $('#two').after($("p"));

   $("p").remove();
});


//note Adding and Removing Classes, you do not need #
$('selector').addClass('className');
$('selector').removeClass('className');
//exo 6 -
$(document).ready(function(){
    $("div").click(function(){
        $("#text").addClass('highlighted');
        });
    });
//html
<body>
    <div id="title" class="highlighted">I'm highlighted!</div>
    <div id="text" class="">Highlight me, too!</div>
</body>




// 7 - .toggleClass() jQuery includes a .toggleClass() function that does exactly this. If the element it's called on has the class it receives as an input, .toggleClass() removes that class; if the target element doesn't have that class, .toggleClass() adds it.
$(document).ready(function(){
$("div").click(function(){
    $("#text").toggleClass('highlighted');
    });
});




// 8 - Changing Your Style
$("div").height("100px");
$("div").width("50px");
//or jQuery also includes a general-purpose .css() function that takes two inputs: the first is the CSS element to alter, and the second is the value to set it to.
$("div").css("background-color","#008800");
//exo
$(document).ready(function(){
    $("div").css("height","200px");
    $("div").css("width","200px");
    $("div").css("border-radius","10px");
    });
//or
$(document).ready(function(){
     $("div").height("200px");
    $("div").width("200px");
    $("div").css("border-radius","10px");
    });




// 9 - Modifying Content .html() and .val()
$('div').html("I love jQuery!");
// .val() is used to get the value of form elements.
$('input:checkbox:checked').val();
//exo
$(document).ready(function(){
    $('p').html("jQuery magic in action!");
    });





//10 to 14
//jquery
$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('<p>').text(toAdd).appendTo('.list');
        });
    });
//html
<body>
    <h2>To Do</h2>
    <form name="checkListForm">
        <input type="text" name="checkListItem"/>
    </form>
    <div id="button">Add!</div>
    <br/>
    <div class="list"></div>
</body>
//final jquery
$(document).ready(function(){

    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $(".list").append('<div class="item">' + toAdd + '</div>');
        });
    });
//final html
<body>
    <h2>To Do</h2>
    <form name="checkListForm">
        <input type="text" name="checkListItem"/>
    </form>
    <div id="button">Add!</div>
    <br/>
    <div class="list"></div>
</body>






// exo 13 -
/*
    $(document).on('event', 'selector', function() {
    Do something!
});
*/
//jquery
$(document).ready(function(){

    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $(".list").append('<div class="item">'+toAdd+'</div>');
        });
    $(document).on('click', '.item', function() {
    $(this).remove();
});
    });
//html
<body>
    <h2>To Do</h2>
    <form name="checkListForm">
        <input type="text" name="checkListItem"/>
    </form>
    <div id="button">Add!</div>
    <br/>
    <div class="list"></div>
</body>


/**********************************************PART II jQuery Events*********************************************************/

//exo 1 planete qui disparait toute seul sans click
$(document).ready(function(){
    var planet = $('div');
    planet.fadeOut('fast');
    });

//html
<!DOCTYPE html>
<html>
	<head>
		<title>Kapow!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
	</head>
	<body>
        <div></div>
	</body>
</html>
// la elle disparait en cliquant decu
$(document).ready(function(){
    var planet = $('div');

    planet.click(function(){
         $(this).fadeOut('fast');
        });
    });

//Combining .click() and .hover()
$(document).ready(function(){
    var planet = $('div');

    planet.click(function(){
         $(this).fadeOut('fast');
        });

    planet.hover(function(){
    $(this).addClass('red');
        });
    });


  // exo 2 The .dblclick() Event
$(document).ready(function(){
    var blueSquare = $('div');

    blueSquare.dblclick(function(){
        $(this).fadeOut('fast');
        });
    });
//css
div {
    height: 100px;
    width: 100px;
    border-radius: 5px;
    background-color: #ABCDEF;
}
//html
<!DOCTYPE html>
<html>
    <head>
		<title>Dubba Click</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
	</head>
	<body>
        <div></div>
	</body>
</html>









//6-hover
$(document).ready(function(){

  $('div').hover(
    function(){
    $(this).addClass('active');
    },
    function(){
    $(this).removeClass('active');
    }
  );
});
//html
<!DOCTYPE html>
<html>
	<head>
		<title>Ghostly Divs</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
	</head>
	<body>
        <div>Home</div>
        <div>About Us</div>
        <div>Contact</div>
	</body>
</html>
//css
div {
    border-radius: 5px;
    background-color: #ABCDEF;
    transition: background-color 0.5s ease;
    display:inline;
    font-size:25px;
    padding:20px;
    border:1px solid #ccc;
    margin-top:10px;
    opacity: 1;
}

.active {
    background-color:#556677;
    opacity: 0.25;
}





//7-Let's .focus()!
$(document).ready(function(){

    var nameInput = $('input[name=name]');

    nameInput.focus(function(){
        $(this).css("outline-style","solid");
        $(this).css("outline-color","#FF0000");
        });
    });
//html
<!DOCTYPE html>
<html>
    <head>
		<title>Time to Focus!</title>
		<link rel='stylesheet' type='text/css' href='stylesheet.css'/>
		<script type='text/javascript' src='script.js'></script>
	</head>
	<body>
		<form>
			Name: <input type='text' name='name'></input>
		</form>
	</body>
</html>
//css
input {
    font-family: Verdana, Arial, Sans-Serif;
}



// 8 - The .keydown() Event : You're not limited to mouse events in jQuery—you can trigger events using the keyboard, as well!
$(document).ready(function(){

    $('div').keydown(function(){
        $('div').animate({left:'+=10px'},500);
        });

    });
//html
<!DOCTYPE html>
<html>
	<head>
		<title>Div Racer</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
	</head>
	<body>
        <div></div>
	</body>
</html>
//css
div {
    height: 50px;
    width: 50px;
    border-radius: 10px;
    background-color: #FF0000;
    position: relative;
}

// Bouger l'image de super mario exercice key is a number in code ascii
<!DOCTYPE html>
<html>
    <head>
    	<title>Super Mario!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
		<script type='text/javascript' src='script.js'></script>
	</head>
	<body>
        <img src="http://i1061.photobucket.com/albums/t480/ericqweinstein/mario.jpg"/>
	</body>
</html>
//css
img {
    position: relative;
    left: 0;
    top: 0;
}
//js
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});



// **************************************** jQuery Effects ***************************************************//


//You Know This : hide()
$(document).ready(function(){
    $('div').hide();
    });

//
$(document).ready(function(){
$('img').animate({top:'+=100px'},1000);
});
//html
<!DOCTYPE html>
<html>
    <head>
		<title>Going Down</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
	</head>
	<body>
        <img src="http://i1061.photobucket.com/albums/t480/ericqweinstein/elevator.png"/>
	</body>
</html>
//css
body {
    margin: 0;
    padding: 0;
}
img {
    position: absolute;
}





// exo 3  la planete verte qui explose
$(document).ready(function(){
    $('div').click(function(){
        $(this).effect('explode');
        });
    });
//html
<!DOCTYPE html>
<html>
    <head>
        <title>Krypton Redux</title>
		<link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
	</head>
	<body>
		<div></div>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
    <script type='text/javascript' src='script.js'></script>
	</body>
</html>



// la planette qui bounce
$(document).ready(function(){
    $('div').click(function(){
        $('div').effect('bounce',{times:3},500);
        });
    });


//make my planet .slide()
$(document).ready(function(){
    $('div').click(function(){
        $('div').effect('slide');
        });
    });


// Exo 7 sur draggable(); avec notre car
$(document).ready(function(){
    $("#car").draggable();
});
//html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
	</head>
	<body>
        <div id="car">
            <div id="top"></div>
            <div id="bottom"></div>
            <div id="fwheel"></div>
            <div id="bwheel"></div>
        </div>
	</body>
</html>
//css
#top {
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 5px;
    background-color: #cc0000;
    left: 25px;
}
#bottom {
	position: relative;
	height:25px;
	width: 100px;
	background-color: #cc0000;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	top: -25px;
}
#fwheel {
	position: relative;
	height:20px;
	width:20px;
	border-radius: 100%;
	background-color: black;
	top: -35px;
	left: 5px;
}
#bwheel {
	position: relative;
	height:20px;
	width:20px;
	border-radius: 100%;
	background-color: black;
	top: -55px;
	left: 75px;
}





// 8 One Resize Fits All :     .resizable()
$(document).ready(function(){
    $('div').resizable();
    });
//css
div {
    height: 100px;
    background-color: #ABCDEF;
    font-family: Verdana, Arial, Sans-Serif;
    font-size: 1em;
    text-align: center;
}
//html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
	</head>
	<body>
        <div>Resize Me!</div>
	</body>
</html>



// 9 A Greater Selection     .selectable()
// js
$(document).ready(function(){
    $('ol').selectable();
    });

//css
ol {
    list-style-type: none;
	position: relative;
	left: -20px;
}

ol li {
	background: #eeeeee;
	border-radius: 5px;
	border: 1px solid black;
	margin: 3px;
	padding: 0.4em;
	font-size: 1em;
	height: 16px;
	font-family: Verdana, Arial, Sans-Serif;
}

ol .ui-selected {
	background: #F39814; color: white;
}
//html
<ol>
            <li>Super Mario Bros.</li>
            <li>Tetris</li>
            <li>Legend of Zelda: Link's Awakening</li>
            <li>Kirby's Dream World</li>
            <li>Burger Time</li>
            <li>Pokémon Red</li>
            <li>Pokémon Blue</li>
</ol>



// 10  sortable() sur notre ol
$(document).ready(function(){
    $('ol').sortable();
    });



// 11 - 12 - 13 - 14
$(document).ready(function(){
    var madiv = $(document).getElementById("menu");
    $("#menu").accordion();
    });
// html 
<!DOCTYPE html>
<html>
    <head>
		<title></title>
        <link rel='stylesheet' type='text/css' href='http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
	</head>
	<body>
        <div id="menu">
            <h3>Section 1</h3>
            <div>
                <p>I'm the first section!</p>
            </div>
            <!--Add two more sections below!-->
               <h3>Section 2</h3>
            <div>
                <p>I'm the second section!</p>
            </div>
            <!--Add two more sections below!-->
               <h3>Section 3</h3>
            <div>
                <p>I'm the thrid section!</p>
            </div>
        </div>
	</body>
</html>

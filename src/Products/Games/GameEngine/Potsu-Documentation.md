<div align="center">
<h1>Potsu </h1>The pure js game engine<br>
Made by and for <a href="https://github.com/Liamisannoying-LLC" target="_top">Liamisannoying LLC</a>
<br>
<br>
</div> 

<h2 align="center">Setup</h2>



    <h3 align="center"> Html: </h3>
    
    <canvas id="myCanvas"></canvas>
    <script src="potsu.js"></script>
    <script src="GREG.js"></script>
    
<h3 align="center"> JavaScript: </h3>

    var c = document.getElementById("myCanvas);
    var CanvasRenderingContext2d = c.getContext("2d");
    Canvas(CanvasRenderingContext2d);


<h2 align="center">References</h2>

<h3 align="center">GameObject.image</h3>

    used for drawing image. requires the Image() constructor

<h3 align="center">GameObject.width</h3>

    used for drawing image. used to change image width

<h3 align="center">GameObject.height</h3>

    used for drawing image. used to change image height

<h3 align="center">GameObject.velocity</h3>

    not used inside Potsu currently but is a nice variable to use

<h3 align="center">GameObject.mass</h3>

    not used inside Potsu currently but is a nice variable to use

<h3 align="center">GameObject.density</h3>

    not used inside Potsu currently but is a nice variable to use

<h3 align="center">GameObject.vertOrigin</h3>

    stores the original positions of the vertices and is not modified by GameObject.offset() or GameObject.goTo();


<h3 align="center">GameObject.vertices</h3>

    is the modified list of vertices location is modified by GameObject.offset() or GameObject.goTo();

<h3 align="center">GameObject.x</h3>

    gives the x position of the first vertex in GameObject.vertices

<h3 align="center">GameObject.edges</h3>

    gets edges of GameObject.vertices. some how?? does not support less than 3 vertex

<h3 align="center">GameObject.projectInAxis(x,y)</h3>

    projects vertices for SAT algorithm. doesn't support x and y over 100000000000 and under -100000000000 

<h3 align="center">GameObject.testWith(otherGameObject)</h3>

    tests if GameObject used to call function and second game object are colliding. returns true or false;

<h3 align="center">GameObject.testGroup(listOfGameObjects)</h3>

    tests if GameObject used to call function and every game object are colliding. list with name of GameObject and is it has collided

<h4 align="center">Example:</h4>
           

       var listOfGameObjects = [object2, object3, object4];
       console.log(object1.testGroup(listOfGameObjects));
           
<h4 align="center">Output:</h4>
           
      [{name: object2,collision: false},
      {name: object3,collision: true},
      {name: object4,collision: true},

<h3 align="center">GameObject.renderImage()</h3>

    draws image to canvas requires a GameObject.image, GameObject.vertices, GameObject.width and GameObject.height
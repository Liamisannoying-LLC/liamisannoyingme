/*
(indented like python if its indented it in the same topic)
Game concepts:

La Montgolfiere (hot air baloon):

    Could have a mode where you are in a race against other hot air balloon pilots:

        get to the end goal
        find the height of the wind and make sure its in the right direction. 
        avoid dangerous weather(or not and risk it for more speed)

    Adventure mode:

        find things like in the sky, science things     
        
    Find new species of birds:

        catch birds(mabyeeeeeee)
        find their nest and colony
        name them


    Survive game:

        la montgolfiere is breaking down and you need parts to fix it as your flying



    Extras:

        find parts for a new balloons(one speedy, one with a fast altitude gain ,and one that can move more presices)
        Upgrade indivdual parts of balloon e.g. different burner for faster Height gain, Balloon More Heat resistant

    Dificulty:

        Its a cozy game not a difficult one
    
    Balloon Features:

        Braking?
        Balloon overheat and pop when on max thrust for to long
        Balloon pops when gets to high;

    Ui:

        Very visual e.g. not lots of numbers(mabye option to turn them on)
        arrow pointing in drection the balloon is moving
    
    Art Style:
        idk something like alto's oddesy
*/

var c = document.getElementById("cvs");
var ctx = c.getContext("2d");

Canvas(ctx);

var vertices = [
    {x:0,y:0},
    {x:1,y:0},
    {x:1,y:1},
    {x:0,y:1}
]

const img = new Image();
img.src = "Images/RedSquare.png";

object = new GameObject(vertices,img,200,200,50,50,0,50,0);

object.render("red","black");
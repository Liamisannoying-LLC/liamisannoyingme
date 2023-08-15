This is the documentation for Postu

For all this to work you need to call the Canvas(ctx) and make a canvas in html

GameObject - used to make a new object for collisions and physics

    varables: (vertices:Array, (using image constructor) , width(imageWidth), height(imageHeight),Velocity(using {x:0, y:0}), mass(WIP), density(WIP))

    functions: 
        object.projectInAxis(Reqiures X and Y. used for SAT algorythem, returns Max and min Value),

        object.testWith(object2) - checks collision with other object

        object.testGroup(ListOfObjects) - does object.testWith using an array of objects (good for check collision with only Ground)

        object.renderImage() - used to render the image given(WIP)

        object.render(fillColour, borderColour) - renders the object with the vertices

        object.offset(dx,dy) - used to move a given amount from the objects position

        object.goTo(x,y) - moves to given coordinates


Functions:
    
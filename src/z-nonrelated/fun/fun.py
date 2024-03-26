def noGo():
    print("""You can't go there...
          """)

def hall():
    print("""Welcome to the hall"""
          )
    nextMove = input("What now?")
    if nextMove == ("north"):
        noGo()
    elif nextMove == ("east"):
        bedroom()
    elif nextMove == ("south"):
        noGo()
    elif nextMove == ("west"):
        kitchen()

def bedroom():
    print("""You are now in the bedroom
          """)
    nextMove = input("What now?")
    if nextMove == ("north"):
        noGo()
    elif nextMove == ("east"):
        noGo()
    elif nextMove == ("south"):
        noGo()
    elif nextMove == ("west"):
        hall()

def kitchen():
    print("""You find yourself in the kitchen
          """)
    nextMove = input("What now?")
    if nextMove == ("north"):
        noGo()
    elif nextMove == ("east"):
        hall()
    elif nextMove == ("south"):
        noGo()
    elif nextMove == ("west"):
        noGo()

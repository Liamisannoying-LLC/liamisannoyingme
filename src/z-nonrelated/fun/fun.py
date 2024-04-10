nextMove = 0 

def startGame():
    print("""---
This is a game originally by Liam Mitchell, 2024.
This material does not have a licence. If a future version does have one, that version should be considered seperate from this one.
More information should be here soon, if you happen to stumble on this before the next update.
---
""")
    hall()

def takeInput():
    print("""What now?
>""")
    
def noGo():
    print("""You can't go there...
          """)

def unknownCommand():
    print("!! I don't recognise that command. Try help() for controls. !!")
    takeInput()

def hall():
    print("Welcome to the hall")
    nextMove = input
    if nextMove == ("north"):
        noGo()
    elif nextMove == ("east"):
        bedroom()
    elif nextMove == ("south"):
        noGo()
    elif nextMove == ("west"):
        kitchen()
    else:
        unknownCommand()

def bedroom():
    print("You are now in the bedroom")
    nextMove = input("""What now?""")
    if nextMove == ("north"):
        noGo()
    elif nextMove == ("east"):
        noGo()
    elif nextMove == ("south"):
        noGo()
    elif nextMove == ("west"):
        hall()

def kitchen():
    print("You find yourself in the kitchen")
    nextMove = input("""What now?""")
    if nextMove == ("north"):
        noGo()
    elif nextMove == ("east"):
        hall()
    elif nextMove == ("south"):
        noGo()
    elif nextMove == ("west"):
        noGo()

startGame()


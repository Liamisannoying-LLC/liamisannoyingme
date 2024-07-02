class AlphabetObject:
    def __init__(self, letter):
        self.letter = letter

# Creating objects for each letter of the alphabet
a_object = AlphabetObject('a')
b_object = AlphabetObject('b')
c_object = AlphabetObject('c')
# ... continue for each letter of the alphabet ...
z_object = AlphabetObject('z')

# Accessing the attributes of each object
print(a_object.letter)
print(b_object.letter)
# ... continue for each letter of the alphabet ...
print(z_object.letter)
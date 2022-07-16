# enigma-machine
## thought process for the plug board

The plugboard is where the person can choose two keys to be switched, this switch happens 2 times, those being:
 - First: Before going to the rotors
 - Second: After going thought the rotors in which it goes to the plug before going to the lights

 The original enigma machine used electrict circuits to make the switch of the keys, and to recreate it that first thing that comes to my mind is an object in wich the letter is the key and the value is the new key.
  
  In the original, each letter was changed one at a time and to be more accurate my function will do it a letter at a time, even tho the logic is simple, I think is relevant enough just to express my thought process, the logic follows this:

 Params:
  - Letter pressed
  - Object composed by the plugged letters ex: { [letter]: newLetter | null }, null being that no plug was conected

  Logic:
  - If the object in the letter key is not null it means that the plug was conected so return the new letter, if not return the original leter
A [game](https://turingcomplete.game/) that aids in teaching you combinational logic and [[CPU]] design in turn. As I see it the game is broken up into 4 main chapters or sections. 

# Chapter 1 - The simplest 8 bit CPU
The first chapter teaches you the basics of combinational logic by making simple gates all the way up through designing adders, registers and an ALU and wraps up with making a legitimate 8 bit CPU with your own instruction set hobbled together with the components you designed along the way. 

# Chapter 2 - Programming the simplest 8 bit CPU
The next section of the game requires you write programs for your CPU in the instruction set you have designed for it. The exercises get more complicated and you may find yourself fiddling with your design to complete them. For instance, In one exercise it asks you to make an XOR program. I instead made an XOR instruction in the CPU and added it as one of the previously unused [[opcodes]] of this CPU design.

# Chapter 3 - Designing a more complex 8 bit CPU
The next section of the game asks you to design a new CPUs with longer instruction word allowing for a larger instruction set with more advanced features. My final CPU design featured CALL and RET instructions that used the stack i had built to automatically push the return address at the time of the CALL and pop it off at RET to set the instruction pointer fully in hardware.

# Chapter 4 - Programming the new 8 bit CPU
The game wraps up with you writing programs for your new CPU and culminates with some pretty challenging programs making use of the RAM and stack you have designed for yourself. If you have made it this far, congratulations - you may truly consider yourself a wizard of digital logic and software development.
## Notes


### How to start server (Express)

```shell
yarn start
```
// it it gets stuck, ctrol c and try again

to find my folders and files, click on File/ Recent


### Git basic commands

```shell
# initialize a repository (only for the first time)
git init

# add file
git add <FILE NAME>
# or ga

# to know where I'm
pwd

# verify status
git status
# or gst

# I know!
git commit -m "Message"
# gc -m

git log
# glg

# exit server
control c
#controlc

# push changes to a remote repository (GitHub)
git push
# gp

# change directory. first dot means the folder I'm currently on. The second dot is the folder i'll go
cd ..

# to list all directories (must be in home)
ls -l

# pull changes from GitHub
git pull
```

to copy the name of the file, click on the name of the file and command V. No need to command C.

Keep one tab in the terminal for the server and add a new tab for the other stuff. To add a new tab command T.

to open my folders, go to the Visual Studio Code/ File/ Open recent

command r to refresh the browser

backtick (name of the thing) ```
string entre aspas " " with content   "" empty
&& and
|| or
n/ line break

We create or declare a variable by giving it a name and setting it equal to a value. Ex: terrain = 'lake'
Variables allow us to store information
Variables allow us to quickly reuse a value in our program.
Variables let us easily change a value in our program.

single quotation marks ('') 
; a symbol that a lot of programming languages use to denote the end of a line.

Programming is the mental process of thinking up instructions to give to a machine (like a computer).
Coding is the process of transforming those ideas into a written language that a computer can understand.

in programming, we have a way of storing values so that we can reuse them throughout our program or change them, if necessary. This concept is known as a variable.

https://getbootstrap.com/ - templates

In computing, data is the pieces of information that we use to build programs, like the numbers in a calculation, or the text printed to a screen.

we surround strings with single ('...') or double quotes ("...").

Boolean values represent the logical ideas of true and false.

Comparison operators include:

Less than < — value to the left is less than the value to the right: 2 < 6
Greater than > — value to the left is more than the value to the right: 14 > 5
Equals == — value to the left is equal to the value to the right: 3 == 3
Note: we use a double-equal sign to show that we’re checking a value, rather than setting it equal to something, like we would with a variable. Some languages even use a triple-equal sign === to super-triple-check!

for loop
for (i = 0; i < 10; i++) {
  placeTile('mint')
  placeTile('orange')
  placeTile('mint')
}
i++ = i += 1 o valor dele + 1
i = i + 1

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); 2 == position that I want to add the new item. 0 == how many items I want to remove from the list. 
Banana,Orange,Lemon,Kiwi,Apple,Mango

function myFunction() {
  fruits.splice(2, 1, "Lemon", "Kiwi");
  Banana,Orange,Lemon,Kiwi,Mango
  2 == Apple was in position number 2. I said I wanted to remove one item. Everything starts counting on position 2. I add or remove items starting from this position, that's the reason Apple was removed when I said I wanted to remove one item.



array.splice(index, howmany, item1, ....., itemX)

Parameter	Description
index	Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
howmany	Optional. The number of items to be removed. If set to 0, no items will be removed
item1, ..., itemX	Optional. The new item(s) to be added to the array

A function is a specific set of repeatable instructions that takes an input, like a strawberry plant, and produces an output, like freshly picked strawberries. 




# Bash

## Guides and Tutorials

- **[Bash Guide for Beginners](https://tldp.org/LDP/Bash-Beginners-Guide/html/index.html)** • A guide to learn bash scripting.
- **[bash-handbook](https://github.com/denysdovhan/bash-handbook)** • This guid is written for those who want to learn Bash without diving in too deeply.
- **[Bash Scripting Cheat Sheet](https://devhints.io/bash)** • A cheat sheet to learn bash scripting.

## Tools

- **[Amber](https://amber-lang.com/)** • The Programming Language compiled to Bash. • [Docs](https://docs.amber-lang.com/)

## Cheat Sheets

### IF statement

if ~ then ~ elif ~ then ~ else ~ fi

### Operators

An if statement can use the following operators.

**-eq** - equal to.

**-ne** - not equal to.

**-gt** - greater than.

**-ge** - greater than or equal to.

**-lt** - less than.

**-le** - less than or equal to.

**-z** - true if the string is null (has zero length).

**-n** - true if the string is not null.

You can also use the following logical operators.

**!** - logical NOT

**-a** - logical AND

**-o** - logical OR

**Example:** compare two numbers

```shell
n=10

if [[ n -eq 10 ]]; then
  echo 10
fi
```

**Example:** compare two strings

```shell
if [[ "abc" == "abc" ]]; then
  echo "Strings are equal"
fi
```

**Example:** check if a string is empty

```shell
if [[ -z "" ]]; then
  echo "String is empty"
fi
```

**Example:** use boolean variable in IF statement

```shell
is_bool=true

if $is_bool; then
  echo "It is true"
else
  echo "It is false"
fi
```

### Loops

#### `for-in` loop

```shell
for var in list; do
  # code block to be repeated
done
```

In this loop, **var** is a variable that takes on the values in **list**, which can be an array or a series of values separated by spaces. The code block within the loop is executed for each value of **var** in **list**.

**Example:** the **{1..5}** expression is expanded by the shell to a list of numbers from 1 to 5.

```shell
for i in {1..5}; do
  echo $i
done
```

**Example:** the **$@** variable is a special variable that contains all the arguments passed to the script. The **for** loop iterates over the list of arguments and prints each one.

```shell
foo() {
  for arg in "$@"; do
    echo $arg
  done
}

foo one two three four five
# one two three four five.
```

**Example:** The **\*.txt** expression is expanded by the shell to a list of all the files in the current directory that end with **.txt**.

```shell
for file in *.txt; do
  echo $file
done

# file1.txt file2.txt file3.txt
```

**Example:** The **ls** command lists all the files in the current directory. The **for** loop iterates over the list of files and prints each one.

```shell
for file in $(ls *.txt); do
  echo $file
done
```

**Example:** The **find** command lists all the files in the current directory and all its subdirectories. The **for** loop iterates over the list of files and prints each one.

```shell
for file in $(find . -name "*.txt"); do
  echo $file
done
```

**Example:** The **find** command lists all the files in the current directory and all its subdirectories. The **for** loop iterates over the list of files and prints each one. The **if** statement checks if the file is a regular file.

```shell
for file in $(find . -name "*.txt"); do
  if [[ -f $file ]]; then
    echo $file
  fi
done
```

**Example:** The **find** command lists all the files in the current directory and all its subdirectories. The **for** loop iterates over the list of files and prints each one. The **if** statement checks if the file is a regular file. The **else** statement prints a message if the file is not a regular file.

```shell
for file in $(find . -name "*.txt"); do
  if [[ -f $file ]]; then
    echo $file
  else
    echo "Not a file"
  fi
done
```

**Example:** The **find** command lists all the files in the current directory and all its subdirectories. The **for** loop iterates over the list of files and prints each one. The **if** statement checks if the file is a regular file. The **elif** statement checks if the file is a directory. The **else** statement prints a message if the file is not a regular file or a directory.

```shell
for file in $(find . -name "*.txt"); do
  if [[ -f $file ]]; then
    echo $file
  elif [[ -d $file ]]; then
    echo "It is a directory"
  else
    echo "Not a file"
  fi
done
```

#### `while` loop

```shell
while condition; do
  # code block to be repeated
done
```

In this loop, the code block within the loop is executed repeatedly as long as **condition** is true. **condition** can be any valid expression that returns a true or false value.

#### `until` loop

```shell
until condition; do
  # code block to be repeated
done
```

#### `break` statement

```shell
for var in list; do
  if condition; then
    break
  fi
done
```

#### `continue` statement

```shell
for var in list; do
  if condition; then
    continue
  fi
done
```

### Functions

```shell
function_name() {
  # code block
}
```

### Arrays

```shell
array_name=(value1 value2 value3)
```

```shell
array_name=(
  value1
  value2
  value3
)
```

```shell
array_name=(
  [0]=value1
  [1]=value2
  [2]=value3
)
```

```shell
array_name[0]=value1
array_name[1]=value2
array_name[2]=value3
```

### Associative arrays

```shell
declare -A array_name
```

```shell
array_name=([key1]=value1 [key2]=value2 [key3]=value3)
```

```shell
array_name=(
  [key1]=value1
  [key2]=value2
  [key3]=value3
)
```

```shell
array_name[key1]=value1
array_name[key2]=value2
array_name[key3]=value3
```

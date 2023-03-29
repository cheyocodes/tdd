# Positions in Uppercase 

### Exercise
Implement a function that returns the positions of the uppercase letters in the input

### Input 
A string that may contain uppercase and lowercase characters 

### Output 
An array with the indexes of the uppercase characters

```js
"Kata" -> [0]
"KaTa" -> [0, 2]
"KATA" -> [0, 1, 2, 3]
```

### Recommendations: 
1. Try to solve the problem without any constraints
2. Then start from scratch again, this time adding the following constraint in order to practice the TPP: 

- In the final code, all variables must be immutable, they can be assigned a value but the value can't change. 
- Therefore, you can't use loops: 
  - `for`, `for-each`, `while`, `do-while`, ...

### TPP
```sh
1. {} -> nil 
2. nil -> constant
3. constant -> constant+
4. constant -> scalar 
5. statement -> statements 
6. unconditional -> conditional (if)
7. scalar -> array 
8. array -> container 
9. statement -> tail recursion 
10. if -> loop
11. statement -> recursion 
12. expression -> function 
13. variable -> mutation 
```

## Requirements 
### Tests 
- empty string 
- single uppercase char 
- single lowercase char 
- several uppercase and lowercase chars



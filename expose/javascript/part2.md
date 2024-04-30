1. line 12 will print: 3. Variable i will be at 3 when the for loop ends, then it will be printed on line 12 because i has the function scope.
2. line 13 will print: 150. This is because this is the value of discountedPrice in the last iteration of the for loop and discountedPrice has function scope. So it is last updated to 150 then printed.
3. line 14 will print: 150. This is because this is the value of finalPrice in the last iteration of the for loop and finalPrice has function scope. So it is last updated to 150 then printed.
4. This function returns the array: [50, 100, 150] this is because it applies the discount to each price and rounds to the 100th place in the for loop, then pushes it to the discounted array, then returns discounted. 
5. At line 12 there is an error because i is not accessable outside of the for loop because it has block scope. 
6. At line 13 there is an error because discountedPrice was defined in the for loop and has block scope, so it is unaccessable outside of the for loop.
7. Line 14 prints: 150. This is because the finalPrice variable was defined outside the for loop and will have the scope of the function, so we can access it after its final update of 150 in the for loop. 
8. This function returns the array: [50, 100, 150] because it applies the discount, rounds to the 100th place, and pushes each new price to the discounted array, then returns discounted.
9. The code causes an error because we will not be able access i because it is defined in the for loop, and does not have scope outside of it.
10. Line 12 will print: 3. The length variable is const and accessable for the whole function since it was defined at the function level. The code never attempts to modify it so it will not have an error.
11. This function returns [50, 100, 150]. It updates the const discounted array by pushing the discounted price (price multiplied by the discount amount) to it. The const variable discountedPrice is recreated every loop so it also doesn't cause an error.
12. A. student.name  
    B. student['Grad Year']  
    C. student.greeting()  
    D. student['Favorite Teacher'].name  
    E. student.courseLoad[0];  
13. A. '32' Because '3' is a string and it wants to concatenate it will map the number 2 to a string  
    B. 1 Because of the subtraction operator, it will change '3' to a number  
    C. 3 Because in numeric conversion null becomes 0.  
    D. '3null' Because 3 is a string and wants to concatenate with the +, making null a string.  
    E. 4 Because in numeric conversion true becomes 1  
    F. 0 Because in numeric conversion false maps to 0 and null maps to 0  
    G. '3undefined' Since 3 is a string it wants to concatenate with the +, making undefined a string.  
    H. NaN Because of the -, it does numeric conversion making 3 a number but undefined maps to NaN, resulting in NaN  
14. A. true Because they are different types, it will do numeric conversion  
    B. false in lexographical order, '2' comes after '1', making '2' greater than '12'  
    C. True Because different types, does numeric conversion, 2 is equal to 2.
    D. false Because of the strict =, there is no type conversion, a string cant equal a number
    E. false Because different types, numeric conversion, true becomes 1, 1 != 2
    F. true Since Boolean(2) = true, hey are both booleans, boolean comparison true = true.
15. The == operator will do type conversions automatically when comparing 2 things, while the === operater does not do any type conversions and will compare variables as they  are, if things are of different types they will be false.
17. The result will be: [2, 4, 6]. The function will loop through each number in the list, [1,2,3] and call doSomething function on it and push the resul to the newArr.
19. ```
    1
    3
    4
    2
    ```
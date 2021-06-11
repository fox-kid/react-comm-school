function equals(x, y) {
    if(x !== x && y !== y){   // Checks if both values are Number NaN
        return true;
    }else if(x === 0 && y === 0 && 1 / x !== 1 / y ){ // Makes sure that 0 and -0 are notgi equal
        return false;
    }else if(x === y){
        return true;
    }else {
        return false;
    }
    
}


console.log(equals("12", 12) === false);
console.log(equals(0, -0) === false); 
console.log(equals(0, NaN) === false);
console.log(equals(NaN, 0) === false);
console.log(equals(5, "5") === false);
console.log(equals("john", "doe") === false);
console.log(equals(false, true) === false);
console.log(equals(undefined, null) === false);

console.log(equals("john", "john") === true); 
console.log(equals(-0, -0) === true);

console.log(equals(5, 5) === true);
console.log(equals(false, false) === true);
console.log(equals(null, null) === true);
console.log(equals(undefined, undefined) === true);  
console.log(equals(NaN, NaN) === true);

console.log(equals(0, 0) === true); 


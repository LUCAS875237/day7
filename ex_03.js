function map(elements, modifier){ 
    const result = [];
    for(let i = 0; i < elements.length; i++){
        result.push(modifier(elements[i]));
    }
    return result;
}

function oddOrEven(number){
    return number % 2 === 0;
}

console.log(map([5,8,10], oddOrEven));

`use strict`;

function addition(a,b)
{
    return a + b;
}

function subtract(a,b)
{
    return a - b;
}

function multiply(a,b)
{
    return a*b;
}

function divide(a,b)
{
    if(b === 0)
    {
        throw new Error('Divide by zero is not allowed');
    }

    return a/b;
}


module.exports = {addition,subtract,multiply,divide};
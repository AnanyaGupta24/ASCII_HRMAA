const prompt = require('prompt-sync')({sigint: true});

function factorial(n)
{
    let answer = 1;
    if(n==0 || n==1)
    {
        return answer;
    }
    for(var i = 1; i <= n; i++)
    {
        answer = answer * i;
    }
    return answer;
}

const n = prompt("Enter a number: ");
answer = factorial(n)
console.log("The factorial of " + Number(n) + " : " + answer);
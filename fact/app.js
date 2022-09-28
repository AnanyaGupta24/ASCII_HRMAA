const express = require('express')
const app = express()
const port = 3000
const prompt = require('prompt-sync')({sigint: true});

app.get('/', (req, res) => {
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
    res.send("The factorial of " + Number(n) + " : " + answer)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


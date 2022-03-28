#Bank Tech Test

A simple banking application to run in Node.js written as a practice technical test at Makers.

###Setup

To install the program make sure you have:

[Node.js](https://nodejs.org/en/) - written in version 17.6

Run ```npm install```

####Includes

[Jest](https://jestjs.io)
[ESLint](https://eslint.org)

##Starting the application

Run the application in REPL

![REPL](/ref/Node_REPL.png)

Run tests ```jest``` or ```npm test```.

###Acceptance Criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

# AIB-Node
Repository for AI for Business final assignment. This is the Node.js component that sends request to Python component using NATS message broker. Companion repo for the ML processing part is: https://github.com/nicholausdy/AIB-Python

## Dependencies
1. Node.js 12
2. NPM
3. pm2
4. NATS message broker (https://docs.nats.io/nats-server/installation)

## How to Run
Clone the repo
``` 
git clone https://github.com/nicholausdy/AIB-Node
```
Move to the working directory
``` 
cd AIB-Node
```
Install requirements
```
npm install
```
Create env file at the same directory as .env.example <br>
Run the app!
```
./run.sh
```


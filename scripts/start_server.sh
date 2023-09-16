#!/bin/bash
sudo chmod -R 777 /home/ec2-user/Pokedex-app-react

cd /home/ec2-user/pokedex

export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" 

npm install

npm start
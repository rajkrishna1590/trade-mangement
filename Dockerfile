FROM node:8.9.4-alpine
RUN mkdir trade-app
WORKDIR trade-app  
RUN npm install 
#RUN npm run eslint
CMD ["npm", "start"]
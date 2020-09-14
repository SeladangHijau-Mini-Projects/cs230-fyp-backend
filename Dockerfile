# load NodeJs 12.18.3 docker image
FROM node:12.18.3

# set work directory
WORKDIR /app

# install node packages
COPY package*.json ./
RUN npm install

# build app
COPY . .
RUN npm run build

# expose port
EXPOSE 3001

# on container run, run command
CMD [ "npm", "run", "start:prod" ]

FROM node:20

# Sets the working directory inside the container to /app. This is where the application code will
# be copied and where the container will run from.
WORKDIR /app

# Copies the package.json and package-lock.json files from the current directory on the host machine to
# the /app directory in the container. The * in package*.json allows us to copy both files at once.
COPY package*.json ./

RUN npm install

# Copies the application code from the host machine to the /app directory in the container.
COPY . .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]

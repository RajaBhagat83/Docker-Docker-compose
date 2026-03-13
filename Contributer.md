# Manual  Installation
 - Install Nodejs locally()
 - Clone the repo locally()
 - Install dependencies (npm install)
 - Start the db locally
   -docker run -e POSTGRES_PASSWORD=yourpassword - d-p port postgres
   -go the neon.tech and get yourself a db 
 - Change the .env and update your credentials
 - npx prisma migrate dev
 - npx prisma generate 
 - npm run build
 - npm run start

# Docker Installation
  
   - Install Docker locally()
   - Get yourself a connection string from the neon.tech
   - Build the image -  docker build --build-arg DATABASE_URL="neon.tech connection string" -t project .
   - Run the image - docker run -p 3000:3000 project
  
# Docker-compose Installtion Steps
   - Install docker ,docker-compose
   - Run - docker-compose up
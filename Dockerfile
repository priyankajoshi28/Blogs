 From node:10.16.0

 WORKDIR /usr/src/app

 COPY package.json .
 RUN npm install
 EXPOSE 4200
 RUN npm install -g @angular/cli
 COPY . .

 CMD ["ng","serve","--host","0.0.0.0"]


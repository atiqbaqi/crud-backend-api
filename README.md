# RESTful CRUD API

This repository is a basic nodeJS and MySQL CRUD API.

## Installation guide

### 💪🏻 Non-Docker

Required Tools: 
- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads) 

1. You need to install nodejs and its package manager npm.

2. Clone git repository -
    ```bash
    git clone https://github.com/atiqbaqi/crud-backend-api.git
    ```

3. You need to create the database which is located in the "db" folder.

4. Go to the application folder and open a terminal.

5. Install the application dependencies with the next command:
    >npm install

6. Execute the next command in the terminal.
    >npm start

### 🐳 Docker

1. Build image
```bash
docker build -t crud-api .
```
2. create container from image and run
```bash
docker run --name crud-api --rm -p 8080:8080 crud-api
```

<b>Finally access using the following url: <a href="http://localhost:8080" target="__blank">http://localhost:8080</a></b>

## Technologies used

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)


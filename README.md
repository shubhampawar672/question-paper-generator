#Question Paper Generator

A Node.js application for generating question papers based on given difficulty distribution.

**Prerequisites**

Make sure you have the following installed on your machine:

Node.js

npm

MongoDB

**Setup**

Clone the repository:

git clone <https://github.com/shubhampawar672/question-paper-generator.git>

cd question-paper-generator


**Install dependencies**

npm install


**Setup MongoDB Connection**


Before running the application, you need to set up your MongoDB connection. Follow the steps below:

Create a .env file in the root directory of the project.

Open the .env file and add your MongoDB connection URL in the following format:

env


MONGODB_URI=<your_mongodb_connection_url>

Replace <your_mongodb_connection_url> with your actual MongoDB connection URL.


Save the .env file.



**Running the Application**

1. Upload Questions
To upload questions, make a POST request to:

http://localhost:3000/api/upload-questions

Use the following JSON format in the request body:

[
  {
    "question": "What is the capital of Japan?",
    "subject": "Geography",
    "topic": "World Capitals",
    "difficulty": "Easy",
    "marks": 5
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "subject": "Literature",
    "topic": "Authors",
    "difficulty": "Medium",
    "marks": 10
  }
]

2. Get All Questions
   
To retrieve all questions, make a GET request to:

http://localhost:3000/api/questions

3. Generate Question Paper


To generate a question paper, make a POST request to:

http://localhost:3000/api/generate

Use the following JSON format in the request body:

{
  "totalMarks": 100,
  "difficultyDistribution": [
    { "difficulty": "Easy", "percentage": 20 },
    { "difficulty": "Medium", "percentage": 20 },
    { "difficulty": "Hard", "percentage": 60 }
  ]
}

**Running the Application**


**Start the application using:**

node app.js


The server will be running on either port 5000 or 3000 (check console logs for details).

Author
Shubham Pawar

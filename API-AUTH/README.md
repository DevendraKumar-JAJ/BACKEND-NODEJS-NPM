# 📦 API-BASIC-AUTH 🔐

>A simple Node.js backend project using Express, MongoDB, and bcrypt to demonstrate user registration, login, authentication, and CRUD operations with proper validations.


---

## 📁 Project Structure

```Backend/
└── API-AUTH/
    ├── Models/
    │   └── users.js
    ├── utils/
    │   └── validateuser.js
    ├── database.js
    ├── index.js
    └── README.md
    └── package.json
```

---

## 🚀 Features

>✅ Register a new user with hashed password
>
>✅ Login with email and password verification
>
>✅ View all users
>
>✅ View a specific user by ID
>
>✅ Update user information
>
>✅ Delete user by ID
>
>🔐 Input validation using custom utility
>
>🔒 Password encryption using bcrypt



---

## 🛠️ Technologies Used

#### Node.js
#### 
#### Express
#### 
#### MongoDB (Mongoose)
#### 
#### bcrypt
#### 
#### JavaScript



---

## 📦 Installation
### Navigate to project directory
```cd BACKEND-NODEJS-NPM\API-AUTH```

### Install dependencies
```npm install```


---

### 🔌 Configuration

>Ensure you have MongoDB running and a database.js with your mongodb server:

>Replace URL in connect() function

```const main = async () => {await mongoose.connect("<YOUR URL>");};```

```module.exports = main;```

---

### 🚀 Start the Server

```node index.js```

>Server will start at: http://localhost:3000/


---

🧪 API Endpoints

### 1. POST  _ /register

>Registers a new user (with validation and hashed password)


>>{
>>
>>  "firstName": "Mohan"
>>
>>  "emailId": "mohan@gmail.com"
>>
>>  "password": "123456"
>>
>>  "age": 2
>>  
>>}


---

### 2. POST /login

>Validates user credentials and logs them in.

>>{
>>
>>  "_id": "USER_OBJECT_ID",
>>
>>  "emailId": "mohan@gmail.com",
>>
>>  "password": "123456"
>>  
>>}


---

### 3. GET /info

>Returns all registered users.


---

### 4. GET /user/:id

>Fetch a user by their ID.

>> send GET request like | replace this id written after user/
>>
>> localhost:3000/user/686b5296a3d0b36bb1dc3b2a

---

### 5. DELETE /user/:id

>Deletes a user by their ID.

>> send DELETE request like | replace this id written after user/
>>
>> localhost:3000/user/686b5296a3d0b36bb1dc3b2a



---

### 6. PATCH /user

>Updates a user's information.

>>{
>>
>>  "_id": "USER_OBJECT_ID",
>>
>>  "firstName": "Updated Name",
>>
>>  "age": 30,
>>
>>  "emailId": "updated@gmail.com"
>>  
>>}


---

### ✅ Validation Rules

User validation is handled in utils/validateuser.js. Ensure required fields like firstName, emailId, etc., are validated before proceeding.


---

### 📌 Notes

Passwords are hashed using bcrypt with a salt round of 10.

MongoDB must be running locally or replace with your remote connection string.

Add further enhancements like JWT authentication for security.



---

#### 📄 License

##### This project is for educational purposes. Use it as a starter for learning user authentication in Node.js + MongoDB.


---


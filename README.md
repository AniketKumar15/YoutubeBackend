
# YouTube-like Backend

This repository contains the backend code for a YouTube-like website that I built during my backend learning journey. The project is based on a tutorial from the **Chai or Code** YouTube channel.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user and video data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: Used for authentication and authorization.
- **Multer**: Used for uploading files.
- **Cloudinary**: For storing images and video files.

## npm Packages

Here are the main npm packages used in this project:

- **express**: `npm i express`
- **dotenv**: `npm i dotenv`
- **nodemon**: `npm i nodemon` (for automatic server restarts during development)
- **mongoose**: `npm i mongoose`
- **cookie-parser**: `npm i cookie-parser`
- **cors**: `npm i cors` (for handling cross-origin requests)
- **bcrypt**: `npm i bcrypt` (for hashing passwords)
- **jsonwebtoken**: `npm i jsonwebtoken` (for authentication)
- **mongoose-aggregate-paginate-v2**: `npm i mongoose-aggregate-paginate-v2` (for paginated results)

## Installation

Follow these steps to get the project up and running locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/youtube-backend.git
cd youtube-backend
```

### 2. Install dependencies

Make sure you have Node.js and npm installed. If not, you can download and install them from [here](https://nodejs.org/).

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project and add the following configuration. You may need to set up your own Cloudinary credentials and JWT secret:

```bash
MONGODB_URI=mongodb://localhost:27017/youtube-clone
JWT_SECRET=your_jwt_secret
CLOUD_STORAGE_KEY=your_cloud_storage_key
CLOUD_STORAGE_SECRET=your_cloud_storage_secret
```

### 4. Start the server

```bash
npm start
```

Your backend should now be running on `http://localhost:5000`.

## Acknowledgments

- **Chai or Code**: Huge thanks to the YouTube channel for the tutorial that inspired this project. [Check out the playlist here](https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW).
- **Express.js**: A lightweight framework that helped simplify API creation. [Learn more here](https://expressjs.com/).
- **MongoDB**: A great NoSQL database that powers the data storage for this project. [Check out MongoDB](https://www.mongodb.com/).

---

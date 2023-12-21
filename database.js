const mongoose = require("mongoose");

const login = encodeURIComponent("c135");
const password = encodeURIComponent("uNkkgphphxShey52");

const connectDB = async () => {
  await mongoose.connect(
    `mongodb+srv://c135:${password}@clusterclem.xmkbghi.mongodb.net/?retryWrites=true&w=majority`
  );
};

module.exports = { connectDB };

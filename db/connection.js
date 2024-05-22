const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.once("open", () => {
    console.log("Connected to database")
})
import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  
  const connectionUrl =
    "mongodb+srv://phungvanduy10a4:duyphungvank65hust@cluster0.2vc2w.mongodb.net/";
    
  // const connectionUrl = "mongodb://localhost:27017/nextjs-ecommerce-2024";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Ecommerce database connected successfully!"))
    .catch((err) =>
      console.log(`Getting error from DB connection ${err.message}`)
    );
};

export default connectToDB;

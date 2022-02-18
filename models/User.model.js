const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'Username is required']
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required']
    },
    myPlants : [
      {
        id: {type: Schema.Types.ObjectId,
        ref: 'Plant'},
        currentPicture: {type:String},
        currentTemperature:{type:Number},
        currentHumidity : {type:String},
        currentCategory : {type:String},
        nickName : {type:String},
        needWater: {type:Boolean}
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;

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
        currentTemperature:{type:Number},
        currentHumidity : {type:Number},
        currentCategory : {type:String},
        nickName : {type:String},
        size : {
          potsize: {type:Number},
          height : {type:Number}
        }
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;

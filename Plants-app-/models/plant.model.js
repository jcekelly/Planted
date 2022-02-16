const { Schema, model } = require("mongoose");

const plantSchema = new Schema (
   { Category: String,
    family: String,
    name: String,
    commonName: String,
    watering: String,
    light: String,
    recommendedHumidity: String,
    recommendedTemperature: String,
    fertilizer: String,
    toxicityForPets: String,
    image_url: String,
}
    
)

const Plant = model('Plant', plantSchema)

module.exports = Plant


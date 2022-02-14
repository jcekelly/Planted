const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Plants-app-')
	.then(db => console.log(`connected to database ${db.connections[0].name}`))
	.catch(err => console.log(err))

    const Plant = require("./models/plant.model")

    const plants =  [
        
        { 
    Category: 'Indoor',
    family: 'Blooming',
    name: 'Spathiphyllum Wallisii',
    commonName: 'Peace Lily',
    watering: 'Once a week',
    light: 'Direct sunshine can damage the leaves - A mixture of light and shade is recommended',
    size: 'size of plant',
    humidity: 'No particular requirements',
    temperature: 'Above 10ºC min.',
    fertilizer: 'Every 2 months',
    toxicityForPets: 'Dangerous to small children and animals',
    image_url: 'insert url'
},

    { 
    Category: 'Indoor',
    family: 'Fern',
    name: 'Phlebodium Blue Star',
    commonName: 'Blue Star Fern',
    watering: 'Once a week',
    light: 'Low to bright, indirect sunlight',
    size: 'size of plant',
    humidity: 'Prefers humid enviroment',
    temperature: '18º-25ºC.',
    fertilizer: 'Once a month',
    toxicityForPets: 'Non-toxic',
    image_url: 'insert url'
},

{ 
    Category: 'Indoor',
    family: 'Tropical Plants',
    name: 'Ficus Elastica, Ficus Robusta',
    commonName: 'Rubber Plant',
    watering: 'Once a week',
    light: 'medium, indirect sunlight',
    size: 'size of plant',
    humidity: 'Naturally prefer higher humidty, but not essentail',
    temperature: '16-24ºC',
    fertilizer: 'Once a month',
    toxicityForPets: 'Dangerous to small children and animals',
    image_url: 'insert url'
},

{ 
    Category: 'Indoor',
    family: 'Fern',
    name: 'Sword Fern',
    commonName: 'Boston Fern',
    watering: 'Once a week',
    light: 'Direct sunshine can damage the leaves - A mixture of light and shade is recommended',
    size: 'size of plant',
    humidity: 'Prefers humid enviroment',
    temperature: '18º-25ºC',
    fertilizer: 'Every 2 months',
    toxicityForPets: 'Non-toxic',
    image_url: 'insert url',
}
]

Plant.create(plants)
.then(plants => {
    console.log('plant added to DB');
})
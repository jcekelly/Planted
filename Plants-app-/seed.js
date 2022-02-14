const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Plants-app-')
	.then(db => console.log(`connected to database ${db.connections[0].name}`))
	.catch(err => console.log(err))

    const Plant = require("./models/plant.model")

    const plants =  [{ 
    Category: 'Indoor',
    family: 'Blooming',
    name: 'Spathiphyllum Wallisii',
    commonName: 'Peace Lily',
    watering: 'Once a week',
    light: 'Direct sunshine can damage the leaves - A mixture of light and shade is recommended',
    humidity: 'No particular requirements',
    temperature: 'Above 10ºC min.',
    fertilizer: 'Every 2 months',
    toxicityForPets: 'Dangerous to small children and animals',}
]

Plant.create(plants)
.then(plants => {
    console.log('plant added to DB');
})
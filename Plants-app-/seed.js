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
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1644856658/il_fullxfull.1211862072_3kuo_z3vmnf.jpg'
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
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1644856768/Phlebodium-blue-star-12-Plantler-2_xuxwgd.jpg'
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
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1644856449/Rubber_Tree_FGT_grande_yig97x.jpg'
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
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1644856840/58122755_000_a_kqyq8a.jpg',
},

{ 
    Category: 'Indoor',
    family: 'Succulent',
    name: 'Sansevieriat',
    commonName: 'Snake Plant',
    watering: 'Every Two Weeks',
    light: 'Suited to both low and bright light',
    size: 'size of plant',
    humidity: 'Prefers dry enviroment',
    temperature: 'Never below 10ºC',
    fertilizer: 'Every 2 months',
    toxicityForPets: 'Dangerous to people and animals',
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1644945309/Snake_Plant_Variegated_Grow_Pot_Compressed_y38ogd.jpg',
},

{ 
    Category: 'Indoor',
    family: 'Vine',
    name: 'Epipremnum Aureum',
    commonName: 'Pothos',
    watering: 'Every Two Weeks',
    light: 'Suited to both low and bright light',
    size: 'size of plant',
    humidity: 'No requirements',
    temperature: 'Never below 10ºC',
    fertilizer: 'Every 2 months',
    toxicityForPets: 'Dangerous to people and animals',
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1644945519/pothos-plant_zgial4.jpg',
},
]

Plant.create(plants)
.then(plants => {
    console.log('plant added to DB');
})
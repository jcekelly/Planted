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
    family: 'Tropical Plant',
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
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1645092910/yetyh4xhclibc47yryfu_qkz7y7.jpg,'
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

{

    Category: 'Indoor',
    family: 'Succulent',
    name: 'Cactaceae',
    commonName: 'Cactus',
    watering: 'Every Two / Three Weeks',
    light: 'Suited to bright direct Sunlight',
    size: 'size of plant',
    humidity: 'No requirements',
    temperature: 'Never below 10ºC',
    fertilizer: 'Never',
    toxicityForPets: 'Non-toxic, but spiky',
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1645017897/a224404d7cc4567897605667370b428e_ioh92q.png',
},

{ 
    Category: 'Indoor',
    family: 'Tropical Plant',
    name: 'Hoya Linearis',
    commonName: 'Wax Plant',
    watering: 'Once a Week',
    light: 'Suited to bright, indirect Sunlight',
    size: 'size of plant',
    humidity: 'High Humidity',
    temperature: 'Warm',
    fertilizer: 'Once a month',
    toxicityForPets: 'No-toxic but can be irritating',
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1645018716/image_HOYA-LINE-3125_1_600x600_v2qwwy.jpg',
},

{ 
    Category: 'Indoor',
    family: 'Palm',
    name: 'Howea Forsteriana',
    commonName: 'Kentia Palm',
    watering: 'Once a Week',
    light: 'Suited to bright, indirect light',
    size: 'size of plant',
    humidity: 'No requirements',
    temperature: 'Never below 10ºC',
    fertilizer: 'Once a month',
    toxicityForPets: 'Non-toxic',
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1645019788/fejka-topfpflanze-kuenstlich-drinnen-draussen-kentiapalme__0955452_pe804042_s5_koxms3.avif',
},

{

    Category: 'Indoor',
    family: 'Blooming',
    name: 'Pilea Peperomioides',
    commonName: 'Chinese Money Plant',
    watering: 'Once a Week',
    light: 'Suited to bright, indirect Sunlight',
    size: 'size of plant',
    humidity: 'Not suited to dry enviroments',
    temperature: 'Never below 10ºC',
    fertilizer: 'Ever two / three months',
    toxicityForPets: 'Non-toxic',
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1645020167/Chinese-Money-S-Regent-Charcole_xfwcll.jpg',
},

{ 
    Category: 'Indoor',
    family: 'Evergreen',
    name: 'Ctenanthe Burle-Marxii Prayer Plant',
    commonName: 'Never Never Plant',
    watering: 'Small amounts, regularily',
    light: 'Suited to indirect light',
    size: 'size of plant',
    humidity: 'No requirements',
    temperature: 'Prefers around 20ºC',
    fertilizer: 'Once a month',
    toxicityForPets: 'Non-toxic',
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1645020379/il_570xN.2821199580_pk4k_jojbav.jpg',
},

{
    Category: 'Indoor',
    family: 'Tropical Plant',
    name: 'Peperomia Schumi Red',
    commonName: 'Peperomia',
    watering: 'Small amounts, regularily',
    light: 'Suited to medium, indirect Sunlight',
    size: 'size of plant',
    humidity: 'Mist once a week',
    temperature: 'Warm',
    fertilizer: 'Not needed',
    toxicityForPets: 'Non-toxic',
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1645020554/Peperomia-Napoli-S-Broadway-Terracotta_er9vlm.webp',
}, 

{
    Category: 'Indoor',
    family: 'Vine',
    name: 'Ceropagia',
    commonName: 'String of Hearts',
    watering: 'Every two weeks',
    light: 'Suited to bright, indirect Sunlight',
    size: 'size of plant',
    humidity: 'No Requirements',
    temperature: 'Avoild below 15ºC',
    fertilizer: 'Once a Month',
    toxicityForPets: 'Toxic for animals and children',
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1645021061/aw18-h-pothrt_veugqx.webp',
},


{
    Category: 'Indoor',
    family: 'Blooming',
    name: 'Ficus Lyrata',
    commonName: 'Fiddle Leaf Fig',
    watering: 'Once a week',
    light: 'Suited to bright, indirect Sunlight',
    size: 'size of plant',
    humidity: 'High Humidity',
    temperature: '18-25ºC',
    fertilizer: 'Once a Month',
    toxicityForPets: 'Toxic for animals and people',
    image_url: 'https://res.cloudinary.com/dhbny7rpk/image/upload/v1645021222/Fiddle-Leaf-S-Dalston-Chalk_rt7tw6.webp',
},
]

Plant.create(plants)
.then(plants => {
    console.log('plant added to DB');
})
const Pokemons = {
  pokemons: [
    {
      name: 'Bulbasaur',
      ntnlnum: '#001',
      img: 'https://img.pokemondb.net/artwork/vector/large/bulbasaur.png',
      types: ['Grass', 'Poison'],
      Description:
        'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    },
    {
      name: 'Ivysaur',
      ntnlnum: '#002',
      img: 'https://img.pokemondb.net/artwork/vector/large/ivysaur.png',
      types: ['Grass', 'Poison'],
      Description:
        'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    },
    {
      name: 'Venusaur',
      ntnlnum: '#003',
      img: 'https://img.pokemondb.net/artwork/vector/large/venusaur.png',
      types: ['Grass', 'Poison'],
      Description:
        'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    },
    {
      name: 'Charmander',
      ntnlnum: '#004',
      img: 'https://img.pokemondb.net/artwork/vector/large/charmander.png',
      types: ['Fire'],
      Description:
        'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    },
    {
      name: 'Charmeleon',
      ntnlnum: '#005',
      img: 'https://img.pokemondb.net/artwork/vector/large/charmeleon.png',
      types: ['Fire'],
      Description:
        'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    },
    {
      name: 'Charizard',
      ntnlnum: '#006',
      img: 'https://img.pokemondb.net/artwork/vector/large/charizard.png',
      types: ['Fire', 'Flying'],
      Description:
        'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    },
    {
      name: 'Squirtle',
      ntnlnum: '#007',
      img: 'https://img.pokemondb.net/artwork/vector/large/squirtle.png',
      types: ['Water'],
      Description:
        'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    },
    {
      name: 'Caterpie',
      ntnlnum: '#010',
      img: 'https://img.pokemondb.net/artwork/vector/large/caterpie.png',
      types: ['Bug'],
      Description:
        'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.',
    },
    {
      name: 'Pidgey',
      ntnlnum: '#016',
      img: 'https://img.pokemondb.net/artwork/vector/large/pidgey.png',
      types: ['Normal', 'Flying'],
      Description:
        'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.',
    },
    {
      name: 'Pidgeotto',
      ntnlnum: '#017',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
      types: ['Normal', 'Flying'],
      Description:
        'This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.',
    },
    {
      name: 'Pidgeot',
      ntnlnum: '#018',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
      types: ['Normal', 'Flying'],
      Description:
        'This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.',
    },
    {
      name: 'Rattata',
      ntnlnum: '#019',
      img: 'https://img.pokemondb.net/artwork/vector/large/rattata.png',
      types: ['Normal'],
      Description:
        'Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.',
    },
    {
      name: 'Arbok',
      ntnlnum: '#024',
      img: 'https://img.pokemondb.net/artwork/vector/large/arbok.png',
      types: ['Poison'],
      Description:
        'The frightening patterns on its belly have been studied. Six variations have been confirmed.',
    },
    {
      name: 'Pikachu',
      ntnlnum: '#025',
      img: 'https://img.pokemondb.net/artwork/vector/large/pikachu-alt2.png',
      types: ['Electric'],
      Description:
        'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
    },
    {
      name: 'Sandshrew',
      ntnlnum: '#027',
      img: 'https://img.pokemondb.net/artwork/vector/large/sandshrew.png',
      types: ['Ground'],
      Description:
        'It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.',
    },
    {
      name: 'Jigglypuff',
      ntnlnum: '#039',
      img: 'https://img.pokemondb.net/artwork/vector/large/jigglypuff.png',
      types: ['Fairy'],
      Description:
        'Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep.',
    },
    {
      name: 'Mankey',
      ntnlnum: '#056',
      img: 'https://img.pokemondb.net/artwork/vector/large/mankey.png',
      types: ['Fighting'],
      Description:
        'An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything.',
    },
    {
      name: 'Poliwrath',
      ntnlnum: '#062',
      img: 'https://img.pokemondb.net/artwork/vector/large/poliwrath.png',
      types: ['Water', 'Fighting'],
      Description:
        'Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward.',
    },
    {
      name: 'Geodude',
      ntnlnum: '#074',
      img: 'https://img.pokemondb.net/artwork/vector/large/geodude.png',
      types: ['Rock', 'Ground'],
      Description:
        'Commonly found near mountain trails and the like. If you step on one by accident, it gets angry.',
    },
    {
      name: 'Magnemite',
      ntnlnum: '#081',
      img: 'https://img.pokemondb.net/artwork/vector/large/magnemite.png',
      types: ['Electric', 'Steel'],
      Description:
        'At times, Magnemite runs out of electricity and ends up on the ground. If you give batteries to a grounded Magnemite, it’ll start moving again.',
    },
    {
      name: 'Cloyster',
      ntnlnum: '#091',
      img: 'https://img.pokemondb.net/artwork/vector/large/cloyster.png',
      types: ['Water', 'Ice'],
      Description:
        'Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking.',
    },
    {
      name: 'Gastly',
      ntnlnum: '#092',
      img: 'https://img.pokemondb.net/artwork/vector/large/gastly.png',
      types: ['Ghost'],
      Description:
        'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.',
    },
    {
      name: 'Haunter',
      ntnlnum: '#093',
      img: 'https://img.pokemondb.net/artwork/vector/large/haunter.png',
      types: ['Ghost', 'Poison'],
      Description:
        'Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes.',
    },
    {
      name: 'Gengar',
      ntnlnum: '#094',
      img: 'https://img.pokemondb.net/artwork/vector/large/gengar.png',
      types: ['Ghost', 'Poison'],
      Description:
        'On the night of a full moon, if shadows move on their own and laugh, it must be Gengar’s doing.',
    },
    {
      name: 'Scyther',
      ntnlnum: '#123',
      img: 'https://img.pokemondb.net/artwork/vector/large/scyther.png',
      types: ['Bug', 'Flying'],
      Description:
        'As Scyther fights more and more battles, its scythes become sharper and sharper. With a single slice, Scyther can fell a massive tree.',
    },
    {
      name: 'Omanyte',
      ntnlnum: '#138',
      img: 'https://img.pokemondb.net/artwork/vector/large/omanyte.png',
      types: ['Rock', 'Water'],
      Description:
        'Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.',
    },
    {
      name: 'Aerodactyl',
      ntnlnum: '#142',
      img: 'https://img.pokemondb.net/artwork/vector/large/aerodactyl.png',
      types: ['Flying'],
      Description:
        'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
    },
    {
      name: 'Articuno',
      ntnlnum: '#144',
      img: 'https://img.pokemondb.net/artwork/vector/large/articuno.png',
      types: ['Ice', 'Flying'],
      Description:
        'It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.',
    },
    {
      name: 'Azumarill',
      ntnlnum: '#184',
      img: 'https://img.pokemondb.net/artwork/vector/large/azumarill.png',
      types: ['Water', 'Fairy'],
      Description:
        'It spends most of its time in the water. On sunny days, Azumarill floats on the surface of the water and sunbathes.',
    },
    {
      name: 'Umbreon',
      ntnlnum: '#197',
      img: 'https://img.pokemondb.net/artwork/vector/large/umbreon.png',
      types: ['Dark'],
      Description:
        'When this Pokémon becomes angry, its pores secrete a poisonous sweat, which it sprays at its opponent’s eyes.',
    },
    {
      name: 'Murkrow',
      ntnlnum: '#198',
      img: 'https://img.pokemondb.net/artwork/vector/large/murkrow.png',
      types: ['Dark', 'Flying'],
      Description:
        'It has a weakness for shiny things. It’s been known to sneak into the nests of Gabite—noted collectors of jewels—in search of treasure.',
    },
    {
      name: 'Forretress',
      ntnlnum: '#205',
      img: 'https://img.pokemondb.net/artwork/vector/large/forretress.png',
      types: ['Bug', 'Steel'],
      Description:
        'When something approaches it, it fires off fragments of its steel shell in attack. This is not a conscious action but a conditioned reflex.',
    },
  ],
  types: [
    {
      name: 'Normal',
    },
    {
      name: 'Fire',
    },
    {
      name: 'Water',
    },
    {
      name: 'Electric',
    },
    {
      name: 'Grass',
    },
    {
      name: 'Ice',
    },
    {
      name: 'Fighting',
    },
    {
      name: 'Poison',
    },
    {
      name: 'Ground',
    },
    {
      name: 'Flying',
    },
    {
      name: 'Bug',
    },
    {
      name: 'Rock',
    },
    {
      name: 'Ghost',
    },
    {
      name: 'Dark',
    },
    {
      name: 'Steel',
    },
    {
      name: 'Fairy',
    },
  ],
};

export default Pokemons;

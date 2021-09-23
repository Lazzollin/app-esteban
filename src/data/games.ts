export interface Game {
  fromName: string;
  img: string;
  date: string;
  id: number;
  categories: Array<String>;
}

const games: Game[] = [
  {
    fromName: 'GTA Vice City',
    img: '/assets/img_temp/vice_city.jpg',
    date: '27/10/2002',
    id: 0,
    categories: ["RPG", "Story"],
  },
  {
    fromName: 'Counter Strike 1.6',
    img: '/assets/img_temp/cs16.png',
    date: '26/10/2004',
    id: 1,
    categories: ["FPS", "Tactical", "Strategy", "multiplayer"],
  },
  {
    fromName: 'Warcraft 3',
    img: '/assets/img_temp/w3.jpg',
    date: '03/07/2002',
    id: 2,
    categories: ["RTS", "Strategy", "multiplayer"],
  },
  {
    fromName: 'Battlefield 2',
    img: '/assets/img_temp/bt2.png',
    date: '21/06/2005',
    id: 3,
    categories:  ["FPS", "Tactical", "Strategy", "multiplayer"],
  },
  {
    fromName: 'Age of Empires',
    img: '/assets/img_temp/aoe.jpg',
    date: '15/10/1997',
    id: 4,
    categories:  ["RTS", "Strategy", "multiplayer"],
  },
  {
    fromName: 'Age of Empires 2',
    img: '/assets/img_temp/aoe2.jpg',
    date: '30/09/1999',
    id: 5,
    categories:  ["RTS", "Strategy", "multiplayer"],
  },
  {
    fromName: 'GTA San Andreas',
    img: '/assets/img_temp/gtasa.png',
    date: '27/10/2002',
    id: 6,
    categories: ["RPG", "Story"],
  },
];

export const getGames = () => games;

export const getGame = (id: number) => games.find(g => g.id === id);

export const getGamesForCategory = (category: String) => {
  var categoriesMatch = [];
  console.log(category);
  

  var i = 0;
  console.log("games: " + games[1].categories);
  
  while (i<games.length) {
    console.log("First while " + i);

    var j = 0;

    while (j < games[i].categories.length) {
      
      console.log("Second while " + j);
      console.log(games[i].categories[j]);

      if (games[i].categories[j] === category) {
        console.log("match made");
        
        categoriesMatch.push(games[i])
      }
      j++;
    }
    i++;
  }

  return categoriesMatch;
}

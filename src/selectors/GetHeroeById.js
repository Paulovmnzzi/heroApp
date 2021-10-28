import { heroes } from '../data/heroes'

export const getHeroesById = (id) => {

    const hero =  heroes.find(hero => hero.id === id);

    return hero;
}
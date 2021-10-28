import React, { useMemo } from 'react'
import { getHeroesByPublisher } from './../../selectors/GetHereoByPublisher';
import HeroCard from './HeroCard';

const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className='card-columns animate__animated animate__fadeIn'>
            {
                heroes.map(hero => (
                    <HeroCard
                        className='list-group-item ms-3'
                        key={hero.id}
                        {...hero}
                    >

                    </HeroCard>
                ))
            }
        </div>
    )
}

export default HeroesList

import React, {  useMemo } from 'react'
import { useLocation } from 'react-router';
import useForm from '../../hooks/useForm';
import HeroCard from './../heroes/HeroCard';
import queryString from 'query-string'
import getHeroByName from '../../selectors/getHeroByName';

const SearchScreen = ({ history }) => {
    
    
    const location = useLocation();                                 //obtengo el location de la página
    const { q = '' } = queryString.parse(location.search);          //con la librería querySelector, parseo el search para obtener los valores limpios
    
    // const useQuery = () => {
    //     return new URLSearchParams(useLocation().search);        //esta es una alternativa
    // };                                                   
    // const query = useQuery();
    // console.log(query)
    
    const [searchForm, handleInputChange] = useForm({ search: q }); //traigo el state renombrandolo a search form y el handleInputChange de useForm y le asigno como valor inicial la query obtenida con queryString
    const { search } = searchForm;                                  //obtengo el atributo search del objeto searchForm.

    const filtredHeroes = useMemo(() => getHeroByName(q), [q])//aca filtraría los erues
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`);
    }



    return (
        <div className='row'>

            <div className='col-5'>
                <h4>Search form</h4>
                <hr />

                <form onSubmit={handleSearch}>
                    <input
                        type='text'
                        placeholder='Find your hero'
                        className='form-control'
                        vale={search}
                        name='search'
                        onChange={handleInputChange}
                    ></input>
                    <button
                        type='submit'
                        className='btn m-1 btn-block btn-outline-primary'
                    >Search...</button>

                </form>
            </div>
            <div className='col-7'>
                <h4>Results</h4>
                <hr />

                {filtredHeroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))}

            </div>

        </div>
    )
}

export default SearchScreen

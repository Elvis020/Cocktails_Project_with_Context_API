import React from 'react';
import {Loading,Cocktail} from './'
import {useSpaceyContext} from '../context';

function CocktailList() {
    const {cocktails,loading} = useSpaceyContext();

    if(loading) {
        return <Loading />
    }
    if(cocktails.length < 1) {
        return (
            <div className="section-title">
                no cocktails matched your search criteria
            </div>
        )
    }
    return (
        <section>
            <h2 className='section-title'>Cocktails</h2>
            <div className="cocktails-center">
                {cocktails.map(item => {
                    return (
                        <Cocktail key={item.id} {...item} />
                    )
                })}
            </div>
        </section>
    )
}

export default CocktailList

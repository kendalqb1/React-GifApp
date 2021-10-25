import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    return (
        <div className='container'>
            <h2 className='title'>Gif App Search</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            {  categories.length === 0 && <p className='subtitle'>Busque algun GIF</p>}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key = {category}
                            category = {category} 
                        />
                    ))
                }
            </ol>
        </div>
    )
}

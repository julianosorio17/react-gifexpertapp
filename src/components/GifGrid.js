import React, { Fragment } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);



    //getGifs();
    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid">
                <ol>

                    {
                        images.map((img) => (
                            <GifGridItem key={img.id} {...img} />
                        ))
                    }

                </ol>
            </div>
        </Fragment>
    )
}

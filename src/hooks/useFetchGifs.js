import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs";


export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    console.log(category);
    useEffect(() => {
        getGifs(category).then(imgs => {
            setstate({
                data: imgs,
                loading: false
            })
        })

    }, [category]);

    return state;
}

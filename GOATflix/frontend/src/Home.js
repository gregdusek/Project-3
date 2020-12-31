import React, {useEffect} from 'react';
import {API_URL, API_KEY} from './Config';

function HomePage() {
    useEffect(() => {
        fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
    }, [])

    return (
        <>


        </>
    )
}
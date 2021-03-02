import { useState, useEffect } from 'react';

const Film = () => {
    const [films,setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setFilms(films));

    }, [])


    return (
        <main className = "container">
            <section className ="row mt-3">
                <div className ="col-12">
                    <ul className ="list-group">
                        {films.map(film => (
                            <li>${film}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}
export default Film;
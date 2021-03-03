import { useState, useEffect } from 'react';

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(people => setPeople(people));

    }, [])


    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <ul className="list-group">
                        {people.map(people => (
                            <div key={people}>
                                <h5>{people.name}</h5>
                            </div>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}
export default People;
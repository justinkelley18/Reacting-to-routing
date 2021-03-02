import { useState, useEffect } from 'react';

const Person = () => {
    const [people,setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(people => setPeople(people));

    }, [])


    return (
        <main className = "container">
            <section className ="row mt-3">
                <div className ="col-12">
                <ul className ="list-group">
                        {people.map(person => (
                            <li key={`${person}`}></li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}
export default Person;
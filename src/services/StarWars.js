import React from 'react';
import axios from 'axios'
import { useState } from 'react'

const StarWars = () => {
    const [ships, setShips] = useState([]);
    // const
    axios.get("https://swapi.dev/api/starships/")
        .then(response => {
            console.log(response)
            setShips(response.data.results)
        })
        .catch(err => console.error(err))


    return (
        <div className='container'>
            {
                ships.map((itemShip) => {
                    return (
                        <div id="shipItem-container">
                            <div className="card" style={{ height: '15rem' }}>
                                <div className="card" >
                                    <h5 class="card-title">{itemShip.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{itemShip.name}</h6>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default StarWars;
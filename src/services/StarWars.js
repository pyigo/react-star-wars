import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'


const StarWars = () => {
    const [ships, setShips] = useState([]);
    const fetchShip = async () => {


        axios.get("https://swapi.dev/api/starships/")
            .then(response => {
                console.log(response)
                setShips(response.data.results)
            })
            .catch(err => console.error(err))
    }
    useEffect(() => {
        console.log('lets see the data')
        fetchShip()

    }, [])



    return (
        <div className='container'>
            {
                ships.map((itemShip) => {
                    return (
                        <div id="shipItem-container">
                            <div className="card" style={{ height: '15rem' }}>
                                <div className="card"  >
                                    <h5 class="card-title">Name: {itemShip.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Model: {itemShip.model}</h6>
                                    <p class="card-text">Manufacturer: {itemShip.manufacturer}</p>
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

import * as React from 'react';
import {useState, useEffect } from 'react';
import "./AppTables.css"

export default function AppTables(){

    const [countries,setworldCases] = useState([])

    const getApiData = async () => {
        const response = await fetch('https://api.covid19api.com/summary')
        .then((response) => response.json());
        // update the state
        setworldCases(response.Countries);
      };

    useEffect(() => {
        getApiData();
      }, [])
    //   console.log(countries)

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>New Confirmed</th>
                        <th>New Deaths</th>
                        <th>Total Deaths</th>
                        <th>Total Cases</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((item, key)=>{
                        return(
                            <tr>
                                <th>{++key}</th>
                                <td>{item.Country}</td>
                                <td>{item.NewConfirmed}</td>
                                <td>{item.NewDeaths}</td>
                                <td>{item.TotalDeaths}</td>
                                <td>{item.TotalConfirmed}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
       </>
    )
}
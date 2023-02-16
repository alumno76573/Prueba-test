import React from "react";
import { useState, useEffect } from "react";
import * as API from '../Services/launches';
import ItemLanzamiento from "./ItemLanzamiento";
import { Outlet } from "react-router-dom";

export function ListaLanzamientos(){
    const [launches,setLaunches]=useState([]);
    useEffect(()=>{
        API.getAllLaunches().then(setLaunches).catch(console.log("error"))
    },[])
    return(
        <>
            <Outlet/>
            {launches.length===0?(<div>Loading...</div>):(
                <section>
                    {launches.map(launch=>(
                        <ItemLanzamiento key={launch.flight_number}{...launch}/>
                    ))}
                </section>
            )}
        </>
    )
}
import React from "react";
import {useParams} from 'react-router-dom';
import * as API from '../Services/launches';
import { useState, useEffect } from "react";
import {Box,Flex} from '@chakra-ui/react';

export function DetallesLanzamiento(){
    const [launch,setLaunch]=useState({})
    const {launchId}=useParams();
    useEffect(()=>{
        API.getLaunchesByFlightNumber(launchId).
        then(setLaunch).catch(console.log("error"))
    },[launchId])
    return(
        <div>
            <Box bg="gray.100" p={4} m={4} borderRadius='lg'>
                {
                    !launch?(<div>Loading...</div>):
                    (
                        <>
                            <Flex display='flex'>
                                <Box>
                                    <h1>Detalles del lanzamiento: {launch.details}</h1>
                                </Box>
                            </Flex>
                        </>
                    )
                }
            </Box>
        </div>
    )
}
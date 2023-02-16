import React from "react";
import { Box,Flex,Text,Spacer,Tag,Icon, Button } from '@chakra-ui/react';
import {BsCalendarMonth} from 'react-icons/bs';
import { Link } from "react-router-dom";

function ItemLanzamiento(launch){
    return(
        <Box bgColor='gray.100' padding='4' border-radius='lg'>
            <Flex display='flex'>
                <Text fontSize='2x1'>
                    Mision {launch.mission_name} {launch.launch_year}
                </Text>
                <Spacer/>
                <Tag padding='4' colorScheme={launch.launch_success?"green":"red"}>
                    {launch.launch_success?"success":"failure"}
                </Tag>
            </Flex>
            <Flex align='center'>
                <Icon as={BsCalendarMonth} color='cyan'></Icon>
                <Text fontSize='sm' ml='1' color='gray.500'>{launch.launch_date_local.split("T")[0]}</Text>
            </Flex>
            <Link to={`/launch/${launch.flight_number}`}>
                <Button mt={2} colorScheme='blue'>
                    More Details
                </Button>
            </Link>
        </Box>
    );
}

export default ItemLanzamiento
import React from "react";
import { ChakraProvider, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import "../Css/Infocv.css";

function Infocv(cv) {
    return (
        <ChakraProvider>
            <Heading className="head" size="md">CV de {cv.cv.name.first}</Heading>
            <UnorderedList className="lista">
                <ListItem className="item_lista">Nombre y apellidos: {cv.cv.name.first} {cv.cv.name.last}</ListItem>
                <ListItem className="item_lista">Localidad: {cv.cv.location.city}</ListItem>
            </UnorderedList>
        </ChakraProvider>
    )
}

export default Infocv
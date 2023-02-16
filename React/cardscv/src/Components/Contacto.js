import React from "react";
import { ChakraProvider, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import "../Css/Infocv.css";

function Contacto(cv){
    return(
        <ChakraProvider>
            <Heading className="head" size="md">Contacto</Heading>
            <UnorderedList className="lista">
                <ListItem className="item_lista">Email: {cv.cv.phone}</ListItem>
                <ListItem className="item_lista">Nºteléfono: {cv.cv.email}</ListItem>
            </UnorderedList>
        </ChakraProvider>
    )
}

export default Contacto
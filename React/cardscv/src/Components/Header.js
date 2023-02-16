import React from "react";
import '../Css/Header.css';
import { ChakraProvider, Heading } from "@chakra-ui/react";

function Header(){
    return(
        <ChakraProvider>
            <Heading as="h1">Foro para compartir tu CV con el mundo</Heading>
        </ChakraProvider>
    )
}

export default Header
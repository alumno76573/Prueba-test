import { ChakraProvider, Image } from "@chakra-ui/react";
import React from "react";
import '../Css/Imagen.css';

function Imagen(imagen){
    return(
        <ChakraProvider>
            <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                className="imagen"
                src={imagen.imagen}
                alt="imagen cv"
            />
        </ChakraProvider>
    )
}

export default Imagen
import React from "react";
import { ChakraProvider, List, ListItem } from "@chakra-ui/react";

function Detallescv(cv){
    return(
        <ChakraProvider>
            <List>
                <ListItem>{cv.cv.gender}</ListItem>
                <ListItem>{cv.cv.location.country}</ListItem>
                <ListItem>{cv.cv.location.state}</ListItem>
                <ListItem>{cv.cv.postcode}</ListItem>
            </List>
        </ChakraProvider>
    )
}

export default Detallescv
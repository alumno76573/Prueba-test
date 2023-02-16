import React from "react";
import {
  ChakraProvider,
  Card,
  CardBody,
  Stack
} from "@chakra-ui/react";
import "../Css/Tarjetas.css";
import Imagen from "./Imagen";
import Infocv from "./Infocv";
import Contacto from "./Contacto";

function Tarjetas(cv) {
  function generarDetalles(cv) {
    const div=document.getElementById(cv.login.uuid);
    const lista=document.createElement('ul');
    const genero=document.createElement('li')
    const pais=document.createElement('li')
    const estado=document.createElement('li')
    const cp=document.createElement('li')
    genero.textContent=`${cv.gender}`
    pais.textContent=`${cv.location.country}`
    estado.textContent=`${cv.location.state}`
    cp.textContent=`${cv.postcode}`
    lista.appendChild(genero)
    lista.appendChild(pais)
    lista.appendChild(estado)
    lista.appendChild(cp)
    div.appendChild(lista)
  }
  return (
    <ChakraProvider>
      <div className="contenedor">
        <Card
          className="card"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Imagen imagen={cv.picture.large} />
          <Stack>
            <CardBody className="card-body">
              <Infocv cv={cv} />
              <Contacto cv={cv} />
              <button
                className={cv.login.uuid}
                onClick={() => generarDetalles(cv)}
              >
                Mas detalles
              </button>
              <div id={cv.login.uuid}></div>
            </CardBody>
          </Stack>
        </Card>
      </div>
    </ChakraProvider>
  );
}

export default Tarjetas;

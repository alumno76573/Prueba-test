const API_URL='https://api.spacexdata.com/v3/launches';

export async function getAllLaunches(){
    try{
        const response= await fetch(`${API_URL}`);
        const data=await response.json();
        return data;
    } catch (error){
        console.log('Error al cargar el fichero');
    }
}

export async function getLaunchesByFlightNumber(flightnumber){
    try{
        const response = await fetch(`${API_URL}/${flightnumber}`);
        const data=await response.json();
        return data;
    } catch {
        console.log('Error al cargar el fichero');
    }
}
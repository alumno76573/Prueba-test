const API_URL='https://randomuser.me/api/?results=10';

export async function getCV(){
    try{
        const response= await fetch(`${API_URL}`);
        const data=await response.json();
        return data.results;
    } catch (error){
        console.log('Error al cargar el fichero');
    }
}
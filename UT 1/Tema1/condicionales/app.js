const flight=100
const hotel=60
const tour=20
const total=flight+hotel+tour
const budget=250

if(budget>total){
    console.log('Te puedes ir de viaje')
} else if(budget===total){
    console.log('te puedes ir de viaje')
} else {
    console.log('No te puedes ir de vacaciones')
}

const resultado=budget>=total ?console.log('Te puedes ir de viaje'): 
                               console.log('No te puedes ir de vacaciones')
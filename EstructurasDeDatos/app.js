class pila{
    constructor(in_items){
        this.items=in_items || []
    }
    longitud(){
        return this.items.length()
    }
    apilar(el){
        this.items.push(el)
    }
    desapilar(){
        return this.longitud()>0 ? this.items.pop():undefined
    }
}

class cola{
    contructor(in_items){
        this.items=in_items || []
    }
    longitud(){
        return this.items.length
    }
    encolar(el){
        this.items.push(el)
    }
    desencolar(){
        return this.longitud()>0 ? this.items.shift():undefined
    }
}
class listaNodos{
    constructor(data){
        this.data=data
        this.sigNode=null
    }
}
class enlaceLista{
    constructor(head=null){
        this.head=head
    }
    getLast(){
        let lastNode=this.head
        if (lastNode){
            while (lastNode.sigNode){
                lastNode=lastNode.sigNode
            }
        }
    }
    size(){
        let count=0
        let node=this.head
        while (node){
            count++
            node=node.sigNode
        }
        return count
    }
}

let nodo1=new listaNodos(2)
let nodo2=new listaNodos(7)
nodo1.sigNode=nodo2
let lista=new enlaceLista(nodo1)
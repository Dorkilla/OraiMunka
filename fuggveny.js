/* a SZEMELYLISTA adatait kiírja a konzolra
nev:"Géza" tel:.....*/
//console.log(SZEMELYLISTA[1].tel)

export function konzolraIr(lista){
for (let index=0; index<lista.length; index++){
    console.log(`név ${lista[index].tel},tel: ${lista[index].tel}`)
}
}

export function listaOsszeallit(lista){
    let txt="<ul>"
    for (let index=0; index<lista.length; index++){
        txt+=`<li>név: ${lista[index].nev},tel: ${lista[index].tel}</li>`
    }
    txt+="</ul>"
    console.log(txt)
    return txt
}

export function kartyaCon(lista){
    let txt="<div>"
    for (let index=0; index<lista.length; index++){
        txt+=`<div><h3>név: ${lista[index].nev}</h3></div> <div><p>tel: ${lista[index].tel}</p></div>`
    }
    txt+="</div>"
    console.log(txt)
    return txt
}

export function tabla(lista){

}
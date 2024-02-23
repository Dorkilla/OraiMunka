import { SZEMELYLISTA } from "./adat.js";
import { kartyaCon, konzolraIr, listaOsszeallit} from "./fuggveny.js"

konzolraIr(SZEMELYLISTA)

/* meg kell fogni azt a html elemet, amibe írni szeretnék*/
//const FELSELEM = document.getElementById("felsorolas")
//console.log(FELSELEM)
const FELSELEM =document.querySelector("#felsorolas")
FELSELEM.innerHTML="Ügyesek vagyunk!<h1>"
FELSELEM.innerHTML+=listaOsszeallit(SZEMELYLISTA)

const KARTYA=document.querySelector("#kartyaContainer")
KARTYA.innerHTML+=kartyaCon(SZEMELYLISTA)

//const TABLAZAT=document.querySelector("#tablazat")
//TABLAZAT.innerHTML+=tabla(SZEMELYLISTA)

/*const a = 2;
//a=3 - hibaüzenet

const LISTA = ["Géza", "Jenő"]

console.log(LISTA[1])

LISTA[10] = "Béla"
LISTA.push("Jakab") /*lista végére elhelyez egy elemet (push)*/
//LISTA.pop() /*leveszi a lista utolsó elemét*/
// .... a konstans deklarált változó értéke nem írható felül
// összetett adatszerkezet esetén mint például a lista és objektum consttal való deklarálásakor a lista memóriacíme nem változtatható meg, a lista értékei igen megváltoztathatóak, módosíthatom az elemeit, törölhetek a listából, adhatok hozzá új elemet.
//ez a lista

//console.log(LISTA)
//console.log(LISTA[5])

//ismerőseim nyilvántartása

//OBJEKTUM:
//összetett adatszerkezet, amelyben az összetartozó adatokat együtt tudjuk kezelni, ezt is consttal szoktuk deklarálni
//kulcsértékpárok/tulajdonságértékpárok


//console.log(SZEMELY1.nev)
//console.log(SZEMELY2.suly)



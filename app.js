//Nombre Usuario
const userName = prompt(' ingrese nombre ').toUpperCase()

// Input año de nacimiento
let userYear = prompt(' Ingrese año de nacimiento ')

// Comienzo de condicionales segun fecha año de nacimiento

if(userYear > 2021){
    alert( ' No te hagas el pillo aun no haz nacido ' + userName )
    
    
}else if(2020 > userYear && userYear > 1990 ){
    alert( ' GENERACION Z ' + userName )
    
}else if (1989 > userYear && userYear > 1960 ){
    alert('   MILLENIEAL  ' + userName)
    
}else if (1959 > userYear && userYear > 1900 ){
    alert(' BOOMER  ' + userName)
    
}else{
    alert(' DUDO QUE ESTES VIVO '  + userName)
 
}

const li      = document.querySelectorAll('.li')
const bloque  = document.querySelectorAll('.bloque')

// Recorriendo los li
li.forEach( ( cadaLi , i )=>{
    li[i].addEventListener('click',()=>{

        li.forEach( ( cadaLi , i )=>{
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })
        li[i].classList.add('activo')
        bloque[i].classList.add('activo')

    })
})

/**
 * Get Ocupations
 * @param {boolean} Succes
   @param {data} Ocupations
 */
   const getOcupations = async (Succes, Ocupations) => {
    try {
        return await usersModel.getOcupations(Succes, Ocupations)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Get Country
 * @param {boolean} Succes
   @param {data} Country
 */
   const getCountry = async (Succes, Country) => {
    try {
        return await usersModel.getCountry(Succes, Country)
    } catch (e) {
        throw new Error(e.message)
    }
}


/**
 * Get IdentificationType
 * @param {boolean} Succes
   @param {data} IdentificationType
 */
   const getIdentificationType= async (Succes, IdentificationType) => {
    try {
        return await usersModel.getIdentificationType(Succes, IdentificationType)
    } catch (e) {
        throw new Error(e.message)
    }
}

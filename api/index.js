
// primera forma:

// const usuario= require('./usuario.js')

// const Usuario= usuario.Usuario

// module.exports = {
//     Usuario
    
// }

//Segunda forma:

const {Usuario}= require('./usuario.js')

module.exports = {
    Usuario    
}
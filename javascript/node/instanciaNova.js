// Uma função "factory" faz o retorno de um novo objeto.
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++;
        }
    }
}
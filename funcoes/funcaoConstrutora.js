function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0;  // Atributo privado.
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }
    this.getVelocidadeAtual = function() {  // Método público.
        return velocidadeAtual;
    }
}
const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());
const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
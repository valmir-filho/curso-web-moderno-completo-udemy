// Variáveis criadas com "var" (desde que fora de uma função), aceitam os 2 escopos local e global.
{
    {
        {
            {
                var sera = "Será?";
                console.log(sera);
            }
        }
    }
}
console.log(sera);
// Variáveis criadas com "var" (dentro de uma função), aceita apenas o escopo local.
function teste() {
    var local = 123;
    console.log(local);
}
teste();
//DESAFIO DA SEMANA

class DnaTranscriber {
    constructor() {}

    toRna(dna) {
        let letras = dna.toUpperCase().split("");
        let rna = "";

        for (let letra of letras) {
            switch (letra) {
                case "G":
                    rna += "C";
                    break;

                case "C":
                    rna += "G";
                    break;

                case "T":
                    rna += "A";
                    break;

                case "A":
                    rna += "U";
                    break;

            }
        } 
        return rna
    }
}

//objeto da classe DnaTranscriber 
let dnaTeste = new DnaTranscriber();


//aqui é onde eu uso meu método 'toRna'
// umas das formas de apresentar na tela também é criando uma varável:
let rnaResultado = dnaTeste.toRna('a');
//console.log(rnaResultado);

console.log(`O RNA é ${dnaTeste.toRna('ACGTGGTCTTaA')}`)

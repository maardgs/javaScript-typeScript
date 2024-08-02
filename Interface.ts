interface IVeiculos{
    nome: string,
    marca: string,
    ano: number
}

let veiculo1: IVeiculos = {
    nome: "avião",
    marca: "Boing",
    ano: 2024
}

console.log("O primeiro veículo é um" + veiculo1.nome +  "\nA marca do veículo é " + veiculo1.marca +  "\nO ano do veículo é "+ veiculo1.ano);


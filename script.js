// Crie um objeto que receba ao menos três propriedades sobre você.

const sobre = {
    nome:'JØRDAN SANTØS',
    idade: 19,
    GostoMusical:'Raps',
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobre.ComidaFavorita = 'Lazanha'
// Remova uma propriedade desse objeto.
delete sobre.GostoMusical
//Mostre no console todas as propriedades desse objeto.
console.log(sobre)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

const cadastro = [{
    nome:'JØRDAN',
    raça:'Humano',
    genero:'masculino',
    idade:19,
    telefone:85_999028139,
    amigos:['Leno','João Pedro','Debora','Robert'],
},{
    nome:'Lithir',
    raça:'Elfo',
    genero:'masculino',
    idade:'120',
    telefone:48_987291035,
    amigos:['Nuheriel','Saelsell','Barandir','Galon']
},{
    nome:'Eritia',
    raça:'Anão',
    genero:'Feminino',
    idade:'60',
    telefone:63_968361550,
    amigos:['Zurola','Inoa','Farboir','Vondathal']
},{
    nome:'Tudeok',
    genero:'masculino',
    raça:'Orc',
    idade:'65',
    telefone:19_983256721,
    amigos:['Grulla','Gurama','Bolroa','Geniez']
},{
    nome:'Fefa',
    genero:'feminino',
    raça:'Dragão',
    idade:'150',
    telefone:95_985910429,
    amigos:['Cuka','Rayfi','Hizo','Silan']
}]

console.log(cadastro)
// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[0])
console.log(cadastro[4].amigos[0])

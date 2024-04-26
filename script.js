function caclNivel(vitorias, derrotas){
    let saldo = vitorias - derrotas
    
    if(saldo <= 10) return {rank: "ferro", saldo: saldo} 
    if(saldo <= 20) return {rank: "bronze", saldo: saldo} 
    if(saldo <= 50) return {rank: "prata", saldo: saldo}
    if(saldo <= 80) return {rank: "ouro", saldo: saldo}
    if(saldo <= 90) return {rank: "diamante", saldo: saldo}
    if(saldo <= 100) return {rank: "lendário", saldo: saldo}
    else return {rank: "imortal", saldo: saldo}

}

vitorias = prompt("Digite a quantidade de vitorias: ")
derrotas = prompt("Digite a quantidade de derrtoas: ")

let perfil = caclNivel(vitorias, derrotas)
alert("O Herói tem um saldo de "+ perfil.saldo +" está no nível "+ perfil.rank)
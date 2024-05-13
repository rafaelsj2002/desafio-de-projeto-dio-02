////////////////////////////////////////////////////
////////// Creator: Rafael Silva de Jesus //////////
//////////   Brasília - BR, 05/12/2024    //////////
////////////////////////////////////////////////////

var hero = ["Ahri", "Akali", "Fizz", "Gwen", "Irelia", "Jax", "Kha'zi", "Lee Sin", "Malzahar", "Master Yi", "Nocturne", "Pantheon", "Pyke", "Quinn", "Sylas", "Talon", "Teemo", "Tristana", "Trindamere", "Twitch", "Vi", "Viego", "Zed"]
var experience = 7500

if ((experience >= 0) && (experience <= 1000)){
    console.log('O Campeão ' + hero[16] + ' está no nível ' + experience + ', Ferro!')
}
else if((experience >= 1001) && (experience <= 2000)){
    console.log('O Campeão ' + hero[16] + ' está no nível ' + experience + ', Bronze!')
}
else if((experience >= 2001) && (experience <= 3000)){
    console.log('O Campeão ' + hero[16] + ' está no nível ' + experience + ', Prata!')
}
else if((experience >= 3001) && (experience <= 4000)){
    console.log('O Campeão ' + hero[16] + ' está no nível ' + experience + ', Ouro!')
}
else if((experience >= 4001) && (experience <= 5000)){
    console.log('O Campeão ' + hero[16] + ' está no nível ' + experience + ', Platina!')
}
else if((experience >= 5001) && (experience <= 6000)){
    console.log('O Campeão ' + hero[16] + ' está no nível ' + experience + ', Esmeralda!')
}
else if((experience >= 6001) && (experience <= 7000)){
    console.log('O Campeão ' + hero[16] + ' está no nível ' + experience + ', Imortal!')
}
else if((experience >= 7001) && (experience <= 8000)){
    console.log('O Campeão ' + hero[16] + ' está no nível ' + experience + ', Diamante!')
}
else if((experience >= 8001) && (experience <= 9000)){
    console.log('O Campeão ' + hero[16] + ' está no nível ' + experience + ', Mestre!')
}
else if((experience >= 9001) && (experience <= 10000)){
    console.log('O Campeão ' + hero[16] + ' está no nível ' + experience + ', Grão-Mestre!')
}
else console.log('O Campeão ' + hero[16] + ' está no nível ' + experience + ', Desafiante!')


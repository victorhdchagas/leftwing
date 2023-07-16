import database from '../database/left-wing.deputies.json'
export type PartiesType = "PT"|"PV"|"PCdoB"|"PSOLRede" | "PDT" | "PSB"

export const PartiesName={
    "PT":"Partido dos Trabalhadores",
    "PV":"Partido Verde",
    "PCdoB":"PCdoB",
    "PSOLRede":"PSOL + Rede",
    "PDT":"Partido Democrático Trabalhista",
    "PSB":"Partido Socialista Brasileiro"
}

export  function getDeputy(party:PartiesType, name:string){
    return database[party].find(deputy=>deputy.name==name)
}


export  function getParties(party:PartiesType){
    return PartiesName[party]
}
export  function getPartiesData(party:PartiesType){
    return database[party]
}


// import * as groups from './groups.json'

const groups = [
    {
        "A": [
            {
                "Team": "Kanada",
                "ISOCode": "CAN",
                "FIBARanking": 7
            },
            {
                "Team": "Australija",
                "ISOCode": "AUS",
                "FIBARanking": 5
            },
            {
                "Team": "Grčka",
                "ISOCode": "GRE",
                "FIBARanking": 14
            },
            {
                "Team": "Španija",
                "ISOCode": "ESP",
                "FIBARanking": 2
            }
        ]
    },
    {
        "B": [
            {
                "Team": "Nemačka",
                "ISOCode": "GER",
                "FIBARanking": 3
            },
            {
                "Team": "Francuska",
                "ISOCode": "FRA",
                "FIBARanking": 9
            },
            {
                "Team": "Brazil",
                "ISOCode": "BRA",
                "FIBARanking": 12
            },
            {
                "Team": "Japan",
                "ISOCode": "JPN",
                "FIBARanking": 26
            }
        ]
    },
    {
        "C": [
            {
                "Team": "Sjedinjene Države",
                "ISOCode": "USA",
                "FIBARanking": 1
            },
            {
                "Team": "Srbija",
                "ISOCode": "SRB",
                "FIBARanking": 4
            },
            {
                "Team": "Južni Sudan",
                "ISOCode": "SSD",
                "FIBARanking": 34
            },
            {
                "Team": "Puerto Riko",
                "ISOCode": "PRI",
                "FIBARanking": 16
            }
        ]
    }
]

let grupaA = groups[0].A
let grupaB = groups[1].B
let grupaC = groups[2].C

let ukupanPlasman = []
let ekipeKojeIduDalje = []

let grupaFunkcion = (grupa, slovo) => {
    let ekipa1 = {
        naziv: grupa[0].Team,
        bodovi: 0,
        postignutiPoeni: 0,
        primljeniPoeni: 0,
        kosRazlika: 0
    }
    let ekipa2 = {
        naziv: grupa[1].Team,
        bodovi: 0,
        postignutiPoeni: 0,
        primljeniPoeni: 0,
        kosRazlika: 0
    }
    let ekipa3 = {
        naziv: grupa[2].Team,
        bodovi: 0,
        postignutiPoeni: 0,
        primljeniPoeni: 0,
        kosRazlika: 0
    }
    let ekipa4 = {
        naziv: grupa[3].Team,
        bodovi: 0,
        postignutiPoeni: 0,
        primljeniPoeni: 0,
        kosRazlika: 0
    }

    let team1Score1 = Math.ceil((Math.random() + 9 - (grupa[0].FIBARanking / 10)) * 10)
    let team2Score1 = Math.ceil((Math.random() + 9 - (grupa[1].FIBARanking / 10)) * 10)
    let team3Score1 = Math.ceil((Math.random() + 9 - (grupa[2].FIBARanking / 10)) * 10)
    let team4Score1 = Math.ceil((Math.random() + 9 - (grupa[3].FIBARanking / 10)) * 10)
    let team1Score2 = Math.ceil((Math.random() + 9 - (grupa[0].FIBARanking / 10)) * 10)
    let team2Score2 = Math.ceil((Math.random() + 9 - (grupa[1].FIBARanking / 10)) * 10)
    let team3Score2 = Math.ceil((Math.random() + 9 - (grupa[2].FIBARanking / 10)) * 10)
    let team4Score2 = Math.ceil((Math.random() + 9 - (grupa[3].FIBARanking / 10)) * 10)
    let team1Score3 = Math.ceil((Math.random() + 9 - (grupa[0].FIBARanking / 10)) * 10)
    let team2Score3 = Math.ceil((Math.random() + 9 - (grupa[1].FIBARanking / 10)) * 10)
    let team3Score3 = Math.ceil((Math.random() + 9 - (grupa[2].FIBARanking / 10)) * 10)
    let team4Score3 = Math.ceil((Math.random() + 9 - (grupa[3].FIBARanking / 10)) * 10)

    let prviMec = `${grupa[0].Team} vs ${grupa[3].Team} (${team1Score1}:${team4Score1})`
    let drugiMec = `${grupa[1].Team} vs ${grupa[2].Team} (${team2Score1}:${team3Score1})`
    let treciMec = `${grupa[0].Team} vs ${grupa[1].Team} (${team1Score2}:${team2Score2})`
    let cetvrtiMec = `${grupa[3].Team} vs ${grupa[2].Team} (${team4Score2}:${team3Score2})`
    let petiMec = `${grupa[1].Team} vs ${grupa[3].Team} (${team2Score3}:${team4Score3})`
    let sestiMec = `${grupa[2].Team} vs ${grupa[0].Team} (${team3Score3}:${team1Score3})`

    //prvi mec u grupi
    if (team1Score1 >= team4Score1) {
        ekipa1.bodovi += 2
        ekipa1.postignutiPoeni += team1Score1
        ekipa4.postignutiPoeni += team4Score1
        ekipa1.primljeniPoeni += team4Score1
        ekipa4.primljeniPoeni += team1Score1
        ekipa1.kosRazlika += (team1Score1 - team4Score1)
        ekipa4.kosRazlika += (team4Score1 - team1Score1)
    } else {
        ekipa4.bodovi += 2
        ekipa4.postignutiPoeni += team4Score1
        ekipa1.postignutiPoeni += team1Score1
        ekipa4.primljeniPoeni += team1Score1
        ekipa1.primljeniPoeni += team4Score1
        ekipa4.kosRazlika += (team4Score1 - team1Score1)
        ekipa1.kosRazlika += (team1Score1 - team4Score1)
    }

    //drugi mec u grupi
    if (team2Score1 >= team3Score1) {
        ekipa2.bodovi += 2
        ekipa2.postignutiPoeni += team2Score1
        ekipa3.postignutiPoeni += team3Score1
        ekipa2.primljeniPoeni += team3Score1
        ekipa3.primljeniPoeni += team2Score1
        ekipa2.kosRazlika += (team2Score1 - team3Score1)
        ekipa3.kosRazlika += (team3Score1 - team2Score1)
    } else {
        ekipa3.bodovi += 2
        ekipa3.postignutiPoeni += team3Score1
        ekipa2.postignutiPoeni += team2Score1
        ekipa3.primljeniPoeni += team2Score1
        ekipa2.primljeniPoeni += team3Score1
        ekipa3.kosRazlika += (team3Score1 - team2Score1)
        ekipa2.kosRazlika += (team2Score1 - team3Score1)
    }

    //treci mec u grupi
    if (team1Score2 >= team2Score2) {
        ekipa1.bodovi += 2
        ekipa1.postignutiPoeni += team1Score2
        ekipa2.postignutiPoeni += team2Score2
        ekipa1.primljeniPoeni += team2Score2
        ekipa2.primljeniPoeni += team1Score2
        ekipa1.kosRazlika += (team1Score2 - team2Score2)
        ekipa2.kosRazlika += (team2Score2 - team1Score2)
    } else {
        ekipa2.bodovi += 2
        ekipa2.postignutiPoeni += team2Score2
        ekipa1.postignutiPoeni += team1Score2
        ekipa2.primljeniPoeni += team1Score2
        ekipa1.primljeniPoeni += team2Score2
        ekipa2.kosRazlika += (team2Score2 - team1Score2)
        ekipa1.kosRazlika += (team1Score2 - team2Score2)
    }

    //cetvrti mec u grupi
    if (team4Score2 >= team3Score2) {
        ekipa4.bodovi += 2
        ekipa4.postignutiPoeni += team4Score2
        ekipa3.postignutiPoeni += team3Score2
        ekipa4.primljeniPoeni += team3Score2
        ekipa3.primljeniPoeni += team4Score2
        ekipa4.kosRazlika += (team4Score2 - team3Score2)
        ekipa3.kosRazlika += (team3Score2 - team4Score2)
    } else {
        ekipa3.bodovi += 2
        ekipa3.postignutiPoeni += team3Score2
        ekipa4.postignutiPoeni += team4Score2
        ekipa3.primljeniPoeni += team4Score2
        ekipa4.primljeniPoeni += team3Score2
        ekipa3.kosRazlika += (team3Score2 - team4Score2)
        ekipa4.kosRazlika += (team4Score2 - team3Score2)
    }

    //peti mec u grupi
    if (team2Score3 >= team4Score3) {
        ekipa2.bodovi += 2
        ekipa2.postignutiPoeni += team2Score3
        ekipa4.postignutiPoeni += team4Score3
        ekipa2.primljeniPoeni += team4Score3
        ekipa4.primljeniPoeni += team2Score3
        ekipa2.kosRazlika += (team2Score3 - team4Score3)
        ekipa4.kosRazlika += (team4Score3 - team2Score3)
    } else {
        ekipa4.bodovi += 2
        ekipa4.postignutiPoeni += team4Score3
        ekipa2.postignutiPoeni += team2Score3
        ekipa4.primljeniPoeni += team2Score3
        ekipa2.primljeniPoeni += team4Score3
        ekipa4.kosRazlika += (team4Score3 - team2Score3)
        ekipa2.kosRazlika += (team2Score3 - team4Score3)
    }

    //sesti mec u grupi
    if (team3Score3 >= team1Score3) {
        ekipa3.bodovi += 2
        ekipa3.postignutiPoeni += team3Score3
        ekipa1.postignutiPoeni += team1Score3
        ekipa3.primljeniPoeni += team1Score3
        ekipa1.primljeniPoeni += team3Score3
        ekipa3.kosRazlika += (team3Score3 - team1Score3)
        ekipa1.kosRazlika += (team1Score3 - team3Score3)
    } else {
        ekipa1.bodovi += 2
        ekipa1.postignutiPoeni += team1Score3
        ekipa3.postignutiPoeni += team3Score3
        ekipa1.primljeniPoeni += team3Score3
        ekipa3.primljeniPoeni += team1Score3
        ekipa1.kosRazlika += (team1Score3 - team3Score3)
        ekipa3.kosRazlika += (team3Score3 - team1Score3)
    }

    //ispis rezultata za grupnu fazu
    console.log(`
        'Grupa' ${slovo}
            ${prviMec}
            ${drugiMec}

            ${treciMec}
            ${cetvrtiMec}

            ${petiMec}
            ${sestiMec}    
        `);
    //sort
    let sortiraneEkipePoBodovima = [ekipa1, ekipa2, ekipa3, ekipa4]
    sortiraneEkipePoBodovima.sort((a, b) => b.bodovi - a.bodovi)

    sortiraneEkipePoBodovima.forEach(tim => {
        console.log(`${tim.naziv} ${tim.bodovi} ${tim.postignutiPoeni} ${tim.primljeniPoeni} ${tim.kosRazlika}`);
        ekipeKojeIduDalje.push(tim)
    })
    ekipeKojeIduDalje.pop()

    return ekipeKojeIduDalje

    //
    // console.log(`
    //     ${ekipa1.naziv} ${ekipa1.bodovi} ${ekipa1.postignutiPoeni} ${ekipa1.primljeniPoeni} ${ekipa1.kosRazlika}
    //     ${ekipa2.naziv} ${ekipa2.bodovi} ${ekipa2.postignutiPoeni} ${ekipa2.primljeniPoeni} ${ekipa2.kosRazlika} 
    //     ${ekipa3.naziv} ${ekipa3.bodovi} ${ekipa3.postignutiPoeni} ${ekipa3.primljeniPoeni} ${ekipa3.kosRazlika} 
    //     ${ekipa4.naziv} ${ekipa4.bodovi} ${ekipa4.postignutiPoeni} ${ekipa4.primljeniPoeni} ${ekipa4.kosRazlika} 
    //     `);


}
grupaFunkcion(grupaA, 'A')
grupaFunkcion(grupaB, 'B')
grupaFunkcion(grupaC, 'C')

let najboljihOsam = ekipeKojeIduDalje
najboljihOsam.sort((a, b) => b.bodovi - a.bodovi)
najboljihOsam.pop()
console.log(najboljihOsam);




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

let ekipeKojeIduDalje = []

let grupaFunkcion = (grupa, slovo) => {
    let ekipa1 = {
        naziv: grupa[0].Team,
        pobede: 0,
        porazi: 0,
        bodovi: 0,
        postignutiPoeni: 0,
        primljeniPoeni: 0,
        kosRazlika: 0
    }
    let ekipa2 = {
        naziv: grupa[1].Team,
        pobede: 0,
        porazi: 0,
        bodovi: 0,
        postignutiPoeni: 0,
        primljeniPoeni: 0,
        kosRazlika: 0
    }
    let ekipa3 = {
        naziv: grupa[2].Team,
        pobede: 0,
        porazi: 0,
        bodovi: 0,
        postignutiPoeni: 0,
        primljeniPoeni: 0,
        kosRazlika: 0
    }
    let ekipa4 = {
        naziv: grupa[3].Team,
        pobede: 0,
        porazi: 0,
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

    // let prviMec = `${grupa[0].Team} vs ${grupa[3].Team} (${team1Score1}:${team4Score1})`
    // let drugiMec = `${grupa[1].Team} vs ${grupa[2].Team} (${team2Score1}:${team3Score1})`
    // let treciMec = `${grupa[0].Team} vs ${grupa[1].Team} (${team1Score2}:${team2Score2})`
    // let cetvrtiMec = `${grupa[3].Team} vs ${grupa[2].Team} (${team4Score2}:${team3Score2})`
    // let petiMec = `${grupa[1].Team} vs ${grupa[3].Team} (${team2Score3}:${team4Score3})`
    // let sestiMec = `${grupa[2].Team} vs ${grupa[0].Team} (${team3Score3}:${team1Score3})`

    let prviMec
    let drugiMec
    let treciMec
    let cetvrtiMec
    let petiMec
    let sestiMec

    //prvi mec u grupi
    if (team1Score1 > team4Score1) {
        ekipa1.pobede++
        ekipa4.porazi++
        ekipa1.bodovi += 2
        ekipa4.bodovi += 1
        ekipa1.postignutiPoeni += team1Score1
        ekipa4.postignutiPoeni += team4Score1
        ekipa1.primljeniPoeni += team4Score1
        ekipa4.primljeniPoeni += team1Score1
        ekipa1.kosRazlika += (team1Score1 - team4Score1)
        ekipa4.kosRazlika += (team4Score1 - team1Score1)
        // console.log(`${grupa[0].Team} vs ${grupa[3].Team} (${team1Score1}:${team4Score1})`);
        prviMec = `${grupa[0].Team} vs ${grupa[3].Team} (${team1Score1}:${team4Score1})`
    }
    if (team1Score1 < team4Score1) {
        ekipa4.pobede++
        ekipa1.porazi++
        ekipa4.bodovi += 2
        ekipa1.bodovi += 1
        ekipa4.postignutiPoeni += team4Score1
        ekipa1.postignutiPoeni += team1Score1
        ekipa4.primljeniPoeni += team1Score1
        ekipa1.primljeniPoeni += team4Score1
        ekipa4.kosRazlika += (team4Score1 - team1Score1)
        ekipa1.kosRazlika += (team1Score1 - team4Score1)
        // console.log(`${grupa[0].Team} vs ${grupa[3].Team} (${team1Score1}:${team4Score1})`);
        prviMec = `${grupa[0].Team} vs ${grupa[3].Team} (${team1Score1}:${team4Score1})`
    }
    if (team1Score1 == team4Score1) {
        let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
        let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
        // console.log(`${grupa[0].Team} vs ${grupa[3].Team} (${team1Score1 + team1Produzetak}:${team4Score1 + team2Produzetak}) OT`);
        prviMec = `${grupa[0].Team} vs ${grupa[3].Team} (${team1Score1 + team1Produzetak}:${team4Score1 + team2Produzetak}) OT`

        if ((team1Score1 + team1Produzetak) > (team4Score1 + team2Produzetak)) {
            ekipa1.pobede++
            ekipa4.porazi++
            ekipa1.bodovi += 2
            ekipa4.bodovi += 1
            ekipa1.postignutiPoeni += (team1Score1 + team1Produzetak)
            ekipa4.postignutiPoeni += (team4Score1 + team2Produzetak)
            ekipa1.primljeniPoeni += (team4Score1 + team2Produzetak)
            ekipa4.primljeniPoeni += (team1Score1 + team1Produzetak)
            ekipa1.kosRazlika += ((team1Score1 + team1Produzetak) - (team4Score1 + team2Produzetak))
            ekipa4.kosRazlika += ((team4Score1 + team2Produzetak) - (team1Score1 + team1Produzetak))
        }
        if ((team1Score1 + team1Produzetak) < (team4Score1 + team2Produzetak)) {
            ekipa4.pobede++
            ekipa1.porazi++
            ekipa4.bodovi += 2
            ekipa1.bodovi += 1
            ekipa4.postignutiPoeni += (team4Score1 + team2Produzetak)
            ekipa1.postignutiPoeni += (team1Score1 + team1Produzetak)
            ekipa4.primljeniPoeni += (team1Score1 + team1Produzetak)
            ekipa1.primljeniPoeni += (team4Score1 + team2Produzetak)
            ekipa4.kosRazlika += ((team4Score1 + team2Produzetak) - (team1Score1 + team1Produzetak))
            ekipa1.kosRazlika += ((team1Score1 + team1Produzetak) - (team4Score1 + team2Produzetak))
        }
    }

    //drugi mec u grupi
    if (team2Score1 > team3Score1) {
        ekipa2.pobede++
        ekipa3.porazi++
        ekipa2.bodovi += 2
        ekipa3.bodovi += 1
        ekipa2.postignutiPoeni += team2Score1
        ekipa3.postignutiPoeni += team3Score1
        ekipa2.primljeniPoeni += team3Score1
        ekipa3.primljeniPoeni += team2Score1
        ekipa2.kosRazlika += (team2Score1 - team3Score1)
        ekipa3.kosRazlika += (team3Score1 - team2Score1)

        // console.log(`${grupa[1].Team} vs ${grupa[2].Team} (${team2Score1}:${team3Score1})`);
        drugiMec = `${grupa[1].Team} vs ${grupa[2].Team} (${team2Score1}:${team3Score1})`
    }
    if (team2Score1 < team3Score1) {
        ekipa3.pobede++
        ekipa2.porazi++
        ekipa3.bodovi += 2
        ekipa2.bodovi += 1
        ekipa3.postignutiPoeni += team3Score1
        ekipa2.postignutiPoeni += team2Score1
        ekipa3.primljeniPoeni += team2Score1
        ekipa2.primljeniPoeni += team3Score1
        ekipa3.kosRazlika += (team3Score1 - team2Score1)
        ekipa2.kosRazlika += (team2Score1 - team3Score1)

        // console.log(`${grupa[1].Team} vs ${grupa[2].Team} (${team2Score1}:${team3Score1})`);
        drugiMec = `${grupa[1].Team} vs ${grupa[2].Team} (${team2Score1}:${team3Score1})`
    }
    if (team2Score1 == team3Score1) {
        let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
        let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
        // console.log(`${grupa[1].Team} vs ${grupa[2].Team} (${team2Score1 + team1Produzetak}:${team3Score1 + team2Produzetak}) OT`);
        drugiMec = `${grupa[1].Team} vs ${grupa[2].Team} (${team2Score1 + team1Produzetak}:${team3Score1 + team2Produzetak}) OT`

        if ((team2Score1 + team1Produzetak) > (team3Score1 + team2Produzetak)) {
            ekipa2.pobede++
            ekipa3.porazi++
            ekipa2.bodovi += 2
            ekipa3.bodovi += 1
            ekipa2.postignutiPoeni += (team2Score1 + team1Produzetak)
            ekipa3.postignutiPoeni += (team3Score1 + team2Produzetak)
            ekipa2.primljeniPoeni += (team3Score1 + team2Produzetak)
            ekipa3.primljeniPoeni += (team2Score1 + team1Produzetak)
            ekipa2.kosRazlika += ((team2Score1 + team1Produzetak) - (team3Score1 + team2Produzetak))
            ekipa3.kosRazlika += ((team3Score1 + team2Produzetak) - (team2Score1 + team1Produzetak))
        }
        if ((team2Score1 + team1Produzetak) < (team3Score1 + team2Produzetak)) {
            ekipa3.pobede++
            ekipa2.porazi++
            ekipa3.bodovi += 2
            ekipa2.bodovi += 1
            ekipa3.postignutiPoeni += (team3Score1 + team2Produzetak)
            ekipa2.postignutiPoeni += (team2Score1 + team1Produzetak)
            ekipa3.primljeniPoeni += (team2Score1 + team1Produzetak)
            ekipa2.primljeniPoeni += (team3Score1 + team2Produzetak)
            ekipa3.kosRazlika += ((team3Score1 + team2Produzetak) - (team2Score1 + team1Produzetak))
            ekipa2.kosRazlika += ((team2Score1 + team1Produzetak) - (team3Score1 + team2Produzetak))
        }
    }

    //treci mec u grupi
    if (team1Score2 > team2Score2) {
        ekipa1.pobede++
        ekipa2.porazi++
        ekipa1.bodovi += 2
        ekipa2.bodovi += 1
        ekipa1.postignutiPoeni += team1Score2
        ekipa2.postignutiPoeni += team2Score2
        ekipa1.primljeniPoeni += team2Score2
        ekipa2.primljeniPoeni += team1Score2
        ekipa1.kosRazlika += (team1Score2 - team2Score2)
        ekipa2.kosRazlika += (team2Score2 - team1Score2)

        // console.log(`${grupa[0].Team} vs ${grupa[1].Team} (${team1Score2}:${team2Score2})`);
        treciMec = `${grupa[0].Team} vs ${grupa[1].Team} (${team1Score2}:${team2Score2})`
    }
    if (team1Score2 < team2Score2) {
        ekipa2.pobede++
        ekipa1.porazi++
        ekipa2.bodovi += 2
        ekipa1.bodovi += 1
        ekipa2.postignutiPoeni += team2Score2
        ekipa1.postignutiPoeni += team1Score2
        ekipa2.primljeniPoeni += team1Score2
        ekipa1.primljeniPoeni += team2Score2
        ekipa2.kosRazlika += (team2Score2 - team1Score2)
        ekipa1.kosRazlika += (team1Score2 - team2Score2)

        // console.log(`${grupa[0].Team} vs ${grupa[1].Team} (${team1Score2}:${team2Score2})`);
        treciMec = `${grupa[0].Team} vs ${grupa[1].Team} (${team1Score2}:${team2Score2})`
    }
    if (team1Score2 == team2Score2) {
        let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
        let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
        // console.log(`${grupa[0].Team} vs ${grupa[1].Team} (${team1Score2 + team1Produzetak}:${team2Score2 + team2Produzetak}) OT`);
        treciMec = `${grupa[0].Team} vs ${grupa[1].Team} (${team1Score2 + team1Produzetak}:${team2Score2 + team2Produzetak}) OT`
        if ((team1Score2 + team1Produzetak) > (team2Score2 + team2Produzetak)) {
            ekipa1.pobede++
            ekipa2.porazi++
            ekipa1.bodovi += 2
            ekipa2.bodovi += 1
            ekipa1.postignutiPoeni += (team1Score2 + team1Produzetak)
            ekipa2.postignutiPoeni += (team2Score2 + team2Produzetak)
            ekipa1.primljeniPoeni += (team2Score2 + team2Produzetak)
            ekipa2.primljeniPoeni += (team1Score2 + team1Produzetak)
            ekipa1.kosRazlika += ((team1Score2 + team1Produzetak) - (team2Score2 + team2Produzetak))
            ekipa2.kosRazlika += ((team2Score2 + team2Produzetak) - (team1Score2 + team1Produzetak))
        }
        if ((team1Score2 + team1Produzetak) < (team2Score2 + team2Produzetak)) {
            ekipa2.pobede++
            ekipa1.porazi++
            ekipa2.bodovi += 2
            ekipa1.bodovi += 1
            ekipa2.postignutiPoeni += (team2Score2 + team2Produzetak)
            ekipa1.postignutiPoeni += (team1Score2 + team1Produzetak)
            ekipa2.primljeniPoeni += (team1Score2 + team1Produzetak)
            ekipa1.primljeniPoeni += (team2Score2 + team2Produzetak)
            ekipa2.kosRazlika += ((team2Score2 + team2Produzetak) - (team1Score2 + team1Produzetak))
            ekipa1.kosRazlika += ((team1Score2 + team1Produzetak) - (team2Score2 + team2Produzetak))
        }
    }

    //cetvrti mec u grupi
    if (team4Score2 > team3Score2) {
        ekipa4.pobede++
        ekipa3.porazi++
        ekipa4.bodovi += 2
        ekipa3.bodovi += 1
        ekipa4.postignutiPoeni += team4Score2
        ekipa3.postignutiPoeni += team3Score2
        ekipa4.primljeniPoeni += team3Score2
        ekipa3.primljeniPoeni += team4Score2
        ekipa4.kosRazlika += (team4Score2 - team3Score2)
        ekipa3.kosRazlika += (team3Score2 - team4Score2)

        // console.log(`${grupa[3].Team} vs ${grupa[2].Team} (${team4Score2}:${team3Score2})`);
        cetvrtiMec = `${grupa[3].Team} vs ${grupa[2].Team} (${team4Score2}:${team3Score2})`
    }
    if (team4Score2 < team3Score2) {
        ekipa3.pobede++
        ekipa4.porazi++
        ekipa3.bodovi += 2
        ekipa4.bodovi += 1
        ekipa3.postignutiPoeni += team3Score2
        ekipa4.postignutiPoeni += team4Score2
        ekipa3.primljeniPoeni += team4Score2
        ekipa4.primljeniPoeni += team3Score2
        ekipa3.kosRazlika += (team3Score2 - team4Score2)
        ekipa4.kosRazlika += (team4Score2 - team3Score2)

        // console.log(`${grupa[3].Team} vs ${grupa[2].Team} (${team4Score2}:${team3Score2})`);
        cetvrtiMec = `${grupa[3].Team} vs ${grupa[2].Team} (${team4Score2}:${team3Score2})`
    }
    if (team4Score2 == team3Score2) {
        let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
        let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
        // console.log(`${grupa[3].Team} vs ${grupa[2].Team} (${team4Score2 + team1Produzetak}:${team3Score2 + team2Produzetak}) OT`);
        cetvrtiMec = `${grupa[3].Team} vs ${grupa[2].Team} (${team4Score2 + team1Produzetak}:${team3Score2 + team2Produzetak}) OT`
        if ((team4Score2 + team1Produzetak) > (team3Score2 + team2Produzetak)) {
            ekipa4.pobede++
            ekipa3.porazi++
            ekipa4.bodovi += 2
            ekipa3.bodovi += 1
            ekipa4.postignutiPoeni += (team4Score2 + team1Produzetak)
            ekipa3.postignutiPoeni += (team3Score2 + team2Produzetak)
            ekipa4.primljeniPoeni += (team3Score2 + team2Produzetak)
            ekipa3.primljeniPoeni += (team4Score2 + team1Produzetak)
            ekipa4.kosRazlika += ((team4Score2 + team1Produzetak) - (team3Score2 + team2Produzetak))
            ekipa3.kosRazlika += ((team3Score2 + team2Produzetak) - (team4Score2 + team1Produzetak))
        }
        if ((team4Score2 + team1Produzetak) < (team3Score2 + team2Produzetak)) {
            ekipa3.pobede++
            ekipa4.porazi++
            ekipa3.bodovi += 2
            ekipa4.bodovi += 1
            ekipa3.postignutiPoeni += (team3Score2 + team2Produzetak)
            ekipa4.postignutiPoeni += (team4Score2 + team1Produzetak)
            ekipa3.primljeniPoeni += (team4Score2 + team1Produzetak)
            ekipa4.primljeniPoeni += (team3Score2 + team2Produzetak)
            ekipa3.kosRazlika += ((team3Score2 + team2Produzetak) - (team4Score2 + team1Produzetak))
            ekipa4.kosRazlika += ((team4Score2 + team1Produzetak) - (team3Score2 + team2Produzetak))
        }
    }

    //peti mec u grupi
    if (team2Score3 > team4Score3) {
        ekipa2.pobede++
        ekipa4.porazi++
        ekipa2.bodovi += 2
        ekipa4.bodovi += 1
        ekipa2.postignutiPoeni += team2Score3
        ekipa4.postignutiPoeni += team4Score3
        ekipa2.primljeniPoeni += team4Score3
        ekipa4.primljeniPoeni += team2Score3
        ekipa2.kosRazlika += (team2Score3 - team4Score3)
        ekipa4.kosRazlika += (team4Score3 - team2Score3)

        // console.log(`${grupa[1].Team} vs ${grupa[3].Team} (${team2Score3}:${team4Score3})`);
        petiMec = `${grupa[1].Team} vs ${grupa[3].Team} (${team2Score3}:${team4Score3})`
    }
    if (team2Score3 < team4Score3) {
        ekipa4.pobede++
        ekipa2.porazi++
        ekipa4.bodovi += 2
        ekipa2.bodovi += 1
        ekipa4.postignutiPoeni += team4Score3
        ekipa2.postignutiPoeni += team2Score3
        ekipa4.primljeniPoeni += team2Score3
        ekipa2.primljeniPoeni += team4Score3
        ekipa4.kosRazlika += (team4Score3 - team2Score3)
        ekipa2.kosRazlika += (team2Score3 - team4Score3)

        // console.log(`${grupa[1].Team} vs ${grupa[3].Team} (${team2Score3}:${team4Score3})`);
        petiMec = `${grupa[1].Team} vs ${grupa[3].Team} (${team2Score3}:${team4Score3})`
    }
    if (team2Score3 == team4Score3) {
        let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
        let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
        // console.log(`${grupa[1].Team} vs ${grupa[3].Team} (${team2Score3 + team1Produzetak}:${team4Score3 + team2Produzetak}) OT`);
        petiMec = `${grupa[1].Team} vs ${grupa[3].Team} (${team2Score3 + team1Produzetak}:${team4Score3 + team2Produzetak}) OT`

        if ((team2Score3 + team1Produzetak) > (team4Score3 + team2Produzetak)) {
            ekipa2.pobede++
            ekipa4.porazi++
            ekipa2.bodovi += 2
            ekipa4.bodovi += 1
            ekipa2.postignutiPoeni += (team2Score3 + team1Produzetak)
            ekipa4.postignutiPoeni += (team4Score3 + team2Produzetak)
            ekipa2.primljeniPoeni += (team4Score3 + team2Produzetak)
            ekipa4.primljeniPoeni += (team2Score3 + team1Produzetak)
            ekipa2.kosRazlika += ((team2Score3 + team1Produzetak) - (team4Score3 + team2Produzetak))
            ekipa4.kosRazlika += ((team4Score3 + team2Produzetak) - (team2Score3 + team1Produzetak))
        }
        if ((team2Score3 + team1Produzetak) < (team4Score3 + team2Produzetak)) {
            ekipa4.pobede++
            ekipa2.porazi++
            ekipa4.bodovi += 2
            ekipa2.bodovi += 1
            ekipa4.postignutiPoeni += (team4Score3 + team2Produzetak)
            ekipa2.postignutiPoeni += (team2Score3 + team1Produzetak)
            ekipa4.primljeniPoeni += (team2Score3 + team1Produzetak)
            ekipa2.primljeniPoeni += (team4Score3 + team2Produzetak)
            ekipa4.kosRazlika += ((team4Score3 + team2Produzetak) - (team2Score3 + team1Produzetak))
            ekipa2.kosRazlika += ((team2Score3 + team1Produzetak) - (team4Score3 + team2Produzetak))
        }
    }

    //sesti mec u grupi
    if (team3Score3 > team1Score3) {
        ekipa3.pobede++
        ekipa1.porazi++
        ekipa3.bodovi += 2
        ekipa1.bodovi += 1
        ekipa3.postignutiPoeni += team3Score3
        ekipa1.postignutiPoeni += team1Score3
        ekipa3.primljeniPoeni += team1Score3
        ekipa1.primljeniPoeni += team3Score3
        ekipa3.kosRazlika += (team3Score3 - team1Score3)
        ekipa1.kosRazlika += (team1Score3 - team3Score3)

        // console.log(`${grupa[2].Team} vs ${grupa[0].Team} (${team3Score3}:${team1Score3})`);
        sestiMec = `${grupa[2].Team} vs ${grupa[0].Team} (${team3Score3}:${team1Score3})`

    }
    if (team3Score3 < team1Score3) {
        ekipa1.pobede++
        ekipa3.porazi++
        ekipa1.bodovi += 2
        ekipa3.bodovi += 1
        ekipa1.postignutiPoeni += team1Score3
        ekipa3.postignutiPoeni += team3Score3
        ekipa1.primljeniPoeni += team3Score3
        ekipa3.primljeniPoeni += team1Score3
        ekipa1.kosRazlika += (team1Score3 - team3Score3)
        ekipa3.kosRazlika += (team3Score3 - team1Score3)

        // console.log(`${grupa[2].Team} vs ${grupa[0].Team} (${team3Score3}:${team1Score3})`);
        sestiMec = `${grupa[2].Team} vs ${grupa[0].Team} (${team3Score3}:${team1Score3})`

    }
    if (team3Score3 == team1Score3) {
        let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
        let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
        // console.log(`${grupa[2].Team} vs ${grupa[0].Team} (${team3Score3 + team1Produzetak}:${team1Score3 + team2Produzetak}) OT`);
        sestiMec = `${grupa[2].Team} vs ${grupa[0].Team} (${team3Score3 + team1Produzetak}:${team1Score3 + team2Produzetak}) OT`
        if ((team3Score3 + team1Produzetak) > (team1Score3 + team2Produzetak)) {
            ekipa3.pobede++
            ekipa1.porazi++
            ekipa3.bodovi += 2
            ekipa1.bodovi += 1
            ekipa3.postignutiPoeni += (team3Score3 + team1Produzetak)
            ekipa1.postignutiPoeni += (team1Score3 + team2Produzetak)
            ekipa3.primljeniPoeni += (team1Score3 + team2Produzetak)
            ekipa1.primljeniPoeni += (team3Score3 + team1Produzetak)
            ekipa3.kosRazlika += ((team3Score3 + team1Produzetak) - (team1Score3 + team2Produzetak))
            ekipa1.kosRazlika += ((team1Score3 + team2Produzetak) - (team3Score3 + team1Produzetak))
        }
        if ((team3Score3 + team1Produzetak) < (team1Score3 + team2Produzetak)) {
            ekipa1.pobede++
            ekipa3.porazi++
            ekipa1.bodovi += 2
            ekipa3.bodovi += 1
            ekipa1.postignutiPoeni += (team1Score3 + team2Produzetak)
            ekipa3.postignutiPoeni += (team3Score3 + team1Produzetak)
            ekipa1.primljeniPoeni += (team3Score3 + team1Produzetak)
            ekipa3.primljeniPoeni += (team1Score3 + team2Produzetak)
            ekipa1.kosRazlika += ((team1Score3 + team2Produzetak) - (team3Score3 + team1Produzetak))
            ekipa3.kosRazlika += ((team3Score3 + team1Produzetak) - (team1Score3 + team2Produzetak))
        }
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

    console.log(`   Grupa ${slovo} (Ime - pobede/porazi/bodovi/postignuti koševi/primljeni koševi/koš razlika)`);
    sortiraneEkipePoBodovima.forEach((tim, index) => {

        console.log(`   ${index + 1}. ${tim.naziv} ${tim.pobede} / ${tim.porazi} / ${tim.bodovi} / ${tim.postignutiPoeni} / ${tim.primljeniPoeni} / ${tim.kosRazlika}`);
        ekipeKojeIduDalje.push(tim)
    })
    ekipeKojeIduDalje.pop()

    return ekipeKojeIduDalje

}
grupaFunkcion(grupaA, 'A')
grupaFunkcion(grupaB, 'B')
grupaFunkcion(grupaC, 'C')

let najboljihOsam = ekipeKojeIduDalje

najboljihOsam.sort((a, b) => {
    if (a.bodovi > b.bodovi) {
        return -1
    }
    if (a.bodovi < b.bodovi) {
        return 1
    }
    if (b.bodovi == a.bodovi) {
        if (a.kosRazlika > b.kosRazlika) {
            return -1
        }
        if (a.kosRazlika < b.kosRazlika) {
            return 1
        }
        else {
            if (a.postignutiPoeni > b.postignutiPoeni) {
                return -1
            }
            else {
                return 1
            }
        }
    }
})
najboljihOsam.pop()
// console.log(najboljihOsam);

let sesirD = najboljihOsam.splice(0, 2)
let sesirE = najboljihOsam.splice(0, 2)
let sesirF = najboljihOsam.splice(0, 2)
let sesirG = najboljihOsam.splice(0, 2)

console.log(`
    Sesir D: 
        ${sesirD[0].naziv}
        ${sesirD[1].naziv}
    Sesir E: 
        ${sesirE[0].naziv}
        ${sesirE[1].naziv}
    Sesir F: 
        ${sesirF[0].naziv}
        ${sesirF[1].naziv}
    Sesir G: 
        ${sesirG[0].naziv}
        ${sesirG[1].naziv}
    `);


let polufinalista1
let polufinalista2
let polufinalista3
let polufinalista4

let treceMestoEkipa1
let treceMestoEkipa2

let finalista1
let finalista2

let treceplasirani
let drugoplasirani
let prvoplasirani


// console.log('sesir D :  ', sesirD);
// console.log('sesir E :  ', sesirE);
// console.log('sesir F :  ', sesirF);
// console.log('sesir G :  ', sesirG);

//1/4 finals
let teamD1 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)
let teamD2 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)
let teamE1 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)
let teamE2 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)
let teamF1 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)
let teamF2 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)
let teamG1 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)
let teamG2 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)

console.log(`Eliminaciona faza
    `);
console.log(`
    1/4 finale`);

if (teamD1 > teamG2) {
    console.log(`${sesirD[0].naziv} vs ${sesirG[1].naziv} (${teamD1}:${teamG2})`);
    polufinalista1 = sesirD[0].naziv
}
if (teamD1 < teamG2) {
    console.log(`${sesirD[0].naziv} vs ${sesirG[1].naziv} (${teamD1}:${teamG2})`);
    polufinalista1 = sesirG[1].naziv
}
if (teamD1 == teamG2) {
    let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    console.log(`${sesirD[0].naziv} vs ${sesirG[1].naziv} (${teamD1 + team1Produzetak}:${teamG2 + team2Produzetak}) OT`);
    if ((teamD1 + team1Produzetak) > (teamG2 + team2Produzetak)) {
        polufinalista1 = sesirD[0].naziv
    }
    if ((teamD1 + team1Produzetak) < (teamG2 + team2Produzetak)) {
        polufinalista1 = sesirG[1].naziv
    }
}
if (teamF1 > teamE2) {
    console.log(`${sesirF[0].naziv} vs ${sesirE[1].naziv} (${teamF1}:${teamE2})`);
    polufinalista2 = sesirF[0].naziv
}
if (teamF1 < teamE2) {
    console.log(`${sesirF[0].naziv} vs ${sesirE[1].naziv} (${teamF1}:${teamE2})`);
    polufinalista2 = sesirE[1].naziv
}
if (teamF1 == teamE2) {
    let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    console.log(`${sesirF[0].naziv} vs ${sesirE[1].naziv} (${teamF1 + team1Produzetak}:${teamE2 + team2Produzetak}) OT`);
    if ((teamF1 + team1Produzetak) > (teamE2 + team2Produzetak)) {
        polufinalista2 = sesirF[0].naziv
    }
    if ((teamF1 + team1Produzetak) < (teamE2 + team2Produzetak)) {
        polufinalista2 = sesirE[1].naziv
    }
}
if (teamE1 > teamF2) {
    console.log(`${sesirE[0].naziv} vs ${sesirF[1].naziv} (${teamE1}:${teamF2})`);
    polufinalista3 = sesirE[0].naziv
}
if (teamE1 < teamF2) {
    console.log(`${sesirE[0].naziv} vs ${sesirF[1].naziv} (${teamE1}:${teamF2})`);
    polufinalista3 = sesirF[1].naziv
}
if (teamE1 == teamF2) {
    let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    console.log(`${sesirE[0].naziv} vs ${sesirF[1].naziv} (${teamE1 + team1Produzetak}:${teamF2 + team2Produzetak}) OT`);
    if ((teamE1 + team1Produzetak) > (teamF2 + team2Produzetak)) {
        polufinalista3 = sesirE[0].naziv
    }
    if ((teamE1 + team1Produzetak) < (teamF2 + team2Produzetak)) {
        polufinalista3 = sesirF[1].naziv
    }
}
if (teamG1 > teamD2) {
    console.log(`${sesirG[0].naziv} vs ${sesirD[1].naziv} (${teamG1}:${teamD2})`);
    polufinalista4 = sesirG[0].naziv
}
if (teamG1 < teamD2) {
    console.log(`${sesirG[0].naziv} vs ${sesirD[1].naziv} (${teamG1}:${teamD2})`);
    polufinalista4 = sesirD[1].naziv
}
if (teamG1 == teamD2) {
    let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    console.log(`${sesirG[0].naziv} vs ${sesirD[1].naziv} (${teamG1 + team1Produzetak}:${teamD2 + team2Produzetak}) OT`);
    if ((teamG1 + team1Produzetak) > (teamD2 + team2Produzetak)) {
        polufinalista4 = sesirG[0].naziv
    }
    if ((teamG1 + team1Produzetak) < (teamD2 + team2Produzetak)) {
        polufinalista4 = sesirD[1].naziv
    }
}

//1-2finale
let teamSF1 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)
let teamSF2 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)
let teamSF3 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)
let teamSF4 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)

console.log(`
    1/2 finale`);
if (teamSF1 > teamSF2) {
    console.log(`${polufinalista1} vs ${polufinalista2} (${teamSF1}:${teamSF2})`);
    finalista1 = polufinalista1
    treceMestoEkipa1 = polufinalista2
}
if (teamSF1 < teamSF2) {
    console.log(`${polufinalista1} vs ${polufinalista2} (${teamSF1}:${teamSF2})`);
    finalista1 = polufinalista2
    treceMestoEkipa1 = polufinalista1
}
if (teamSF1 == teamSF2) {
    let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    console.log(`${polufinalista1} vs ${polufinalista2} (${teamSF1 + team1Produzetak}:${teamSF2 + team2Produzetak}) OT`);
    if ((teamSF1 + team1Produzetak) > (teamSF2 + team2Produzetak)) {
        finalista1 = polufinalista1
        treceMestoEkipa1 = polufinalista2
    }
    if ((teamSF1 + team1Produzetak) < (teamSF2 + team2Produzetak)) {
        finalista1 = polufinalista2
        treceMestoEkipa1 = polufinalista1
    }
}



if (teamSF3 > teamSF4) {
    console.log(`${polufinalista3} vs ${polufinalista4} (${teamSF3}:${teamSF4})`);
    finalista2 = polufinalista3
    treceMestoEkipa2 = polufinalista4
}
if (teamSF3 < teamSF4) {
    console.log(`${polufinalista3} vs ${polufinalista4} (${teamSF3}:${teamSF4})`);
    finalista2 = polufinalista4
    treceMestoEkipa2 = polufinalista3
}
if (teamSF3 == teamSF4) {
    let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    console.log(`${polufinalista3} vs ${polufinalista4} (${teamSF3 + team1Produzetak}:${teamSF4 + team2Produzetak}) OT`);
    if ((teamSF3 + team1Produzetak) > (teamSF4 + team2Produzetak)) {
        finalista2 = polufinalista3
        treceMestoEkipa2 = polufinalista4
    }
    if ((teamSF3 + team1Produzetak) < (teamSF4 + team2Produzetak)) {
        finalista2 = polufinalista4
        treceMestoEkipa2 = polufinalista3
    }
}

//mec za trece mesto
let teamThird1 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)
let teamThird2 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)

console.log(`
    Mec za trece mesto`);

if (teamThird1 > teamThird2) {
    console.log(`${treceMestoEkipa1} vs ${treceMestoEkipa2} (${teamThird1}:${teamThird2})`);
    treceplasirani = treceMestoEkipa1
}
if (teamThird1 < teamThird2) {
    console.log(`${treceMestoEkipa1} vs ${treceMestoEkipa2} (${teamThird1}:${teamThird2})`);
    treceplasirani = treceMestoEkipa2
}
if (teamThird1 == teamThird2) {
    let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    console.log(`${treceMestoEkipa1} vs ${treceMestoEkipa2} (${teamThird1 + team1Produzetak}:${teamThird2 + team2Produzetak}) OT`);
    if ((teamThird1 + team1Produzetak) > (teamThird2 + team2Produzetak)) {
        treceplasirani = treceMestoEkipa1
    }
    if ((teamThird1 + team1Produzetak) < (teamThird2 + team2Produzetak)) {
        treceplasirani = treceMestoEkipa2
    }
}

//finale
let teamFinal1 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)
let teamFinal2 = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 10)

console.log(`
    Finale`);

if (teamFinal1 > teamFinal2) {
    console.log(`${finalista1} vs ${finalista2} (${teamFinal1}:${teamFinal2})`);
    prvoplasirani = finalista1
    drugoplasirani = finalista2
}
if (teamFinal1 < teamFinal2) {
    console.log(`${finalista1} vs ${finalista2} (${teamFinal1}:${teamFinal2})`);
    prvoplasirani = finalista2
    drugoplasirani = finalista1
}
if (teamFinal1 == teamFinal2) {
    let team1Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    let team2Produzetak = Math.ceil((Math.random() + 9 - (Math.ceil(Math.random() * 8) / 10)) * 2)
    console.log(`${finalista1} vs ${finalista2} (${teamFinal1 + team1Produzetak}:${teamFinal2 + team2Produzetak}) OT`);
    if ((teamFinal1 + team1Produzetak) > (teamFinal2 + team2Produzetak)) {
        prvoplasirani = finalista1
        drugoplasirani = finalista2
    }
    if ((teamFinal1 + team1Produzetak) < (teamFinal2 + team2Produzetak)) {
        prvoplasirani = finalista2
        drugoplasirani = finalista1
    }
}

console.log(`
    Medalje:
    1.${prvoplasirani}
    2.${drugoplasirani}
    3.${treceplasirani}
    `);

class Game {
    constructor() {
        this.players = [{
                name: "Musto",
                score: 0,
                role: null,
                isWinToss: false
            },
            {
                name: "Rafid",
                score: 0,
                role: null,
                isWinToss: false
            },
        ]
        this.toss = null;
        this.tossOptions = ["head", "tail"]
        this.roleOptions = ["bat", "field"]
        this.scoreOptions = [1, 2, 3, 4, 5, 6]
        this.innings = 1
    }

    Init() {
        this.Toss()
        this.StartInings()
    }

    Toss() {
        /**
         * Decide which player will call for toss
         */
        const caller = this.getRandomValues(this.players.length)
        const tossOptionSelected = this.getRandomValues(this.tossOptions.length) // this is a toss option selection 
        const result = this.getRandomValues(this.tossOptions.length) // this is a toss result


        let winner;

        if (this.tossOptions[tossOptionSelected] == this.tossOptions[result]) {
            winner = caller
            this.players[winner].isWinToss = true

        } else {
            //  This is a caller position
            const cp = this.players.findIndex(p => p.name === this.players[caller].name)
            winner = cp == this.players.length - 1 ? 0 : 1
            this.players[winner].isWinToss = true
        }

        /**
         * Now decide who will bat and who field
         */

        const elected = this.getRandomValues(2)
        const opt = this.roleOptions
        this.players[this.players.findIndex(p => p.isWinToss == true)].role = opt[elected]
        this.players[this.players.findIndex(p => p.isWinToss == false)].role = opt.find((o) => o != opt[elected])


        console.log(`Toss caller is `, this.players[caller].name);
        console.log(this.players[caller].name, `have selected `, this.tossOptions[tossOptionSelected]);
        console.log("And it's ", this.tossOptions[result]);
        console.log(this.players[winner].name, "Wins a Toss and elected to ", this.players[winner].role, " first");

        console.table(this.players)
    }

    DoBall() {
        const batter = this.players.find((p => p.role == this.roleOptions[0]))
        const fielder = this.players.find((p => p.role == this.roleOptions[1]))

        /**
         * Score selection
         */
        const batterScore = this.findScore()
        const fielderScore = this.findScore()

        console.table([{ name: batter.name, score: batterScore }, { name: fielder.name, score: fielderScore }])

        if (batterScore == fielderScore) {
            return true // this makes the innings end
        } else {
            batter.score += batterScore
        }
    }

    StartInings() {
        let isIningsEnd = false

        console.log("-------------------------------------")
        console.log(`Inning #${this.innings} starts`)
        console.log("------------------------------------- \n\n")

        while (!isIningsEnd) {
            isIningsEnd = this.DoBall()

            if (isIningsEnd) {

                console.log("-------------------------------------")
                console.log(`Inning #${this.innings} final score is`)
                console.table(this.players)
                console.log("------------------------------------- \n\n")


                if (this.innings == 2) {
                    // this means 2nd Innings also end and it's time to calculate result
                    return this.CalculateResult()
                }

                const temp = this.players[0].role
                    // musto bat, rafid ball, temp bat

                this.players[0].role = this.players[1].role
                    // musto ball, rafid ball, temp bat

                this.players[1].role = temp
                    // musto ball, rafid bat, temp bat

                // Start 2nd Innings
                this.innings++;
                this.StartInings()
            }
        }
    }


    findScore() {
        // const _sp = this.getRandomValues(this.scoreOptions.length)
        // return this.scoreOptions[_sp]
        return this.scoreOptions[this.getRandomValues(this.scoreOptions.length)]
    }

    CalculateResult() {
        if (this.players[0].score > this.players[1].score) console.log(`${this.players[0].name} have Win`)
        else console.log(`${this.players[1].name} have Win`)

        console.table(this.players)
    }

    getRandomValues(value) {
        return Math.floor(Math.random() * value)
    }

    // getRandomFromTwoValues(v1, v2) {
    //     return Math.random() * (max - min) + min;
    // }

}


const game = new Game()
game.Init()
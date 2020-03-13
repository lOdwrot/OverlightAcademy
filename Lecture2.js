const sumEven = (arr) => {
    const isEven = (element) => {
        return element % 2 == 0
    }

    const sum = (acc, v) => {
        return acc + v
    }

    const filteredArr = arr.filter(isEven)
    const result = filteredArr.reduce(sum, 0)

    return result
}

const sumEven = (arr) => arr
                            .filter((element) => element % 2 == 0)
                            .reduce((acc, v) => acc + v, 0)

// EX3
const possibleMoves = ['k', 'p', 'n']

const compare = (userMove, computerMove) => {
    if (userMove == computerMove) {
        return 'd'
    }

    if (
        (userMove == 'k' && computerMove == 'p') ||
        (userMove == 'p' && computerMove == 'n') ||
        (userMove == 'n' && computerMove == 'k')
    ) {
        return 'l'
    }

    return 'w'
}

const game = (sequence) => {
    let computerMoves = sequence.map(v => possibleMoves[
        Math.floor(Math.random() * 3)
    ])

    let userScore = 0
    let computerScore = 0

    for (let i = 0; i < computerMoves.length; i++) {
        let stageResult = compare(sequence[i], computerMoves[i])
        alert(`User Move: ${sequence[i]}, Computer Move: ${computerMoves[i]} | Result: ${stageResult}`)



        if (stageResult == 'w') userScore++
        if (stageResult == 'l') computerScore++
    }

    let winner
    if (userScore == computerScore) winner = 'draw'
    else if (userScore > computerScore) winner = 'user'
    else winner = 'computer'

    console.log(`Winner is.... `)
    setTimeout(() => console.log(winner), 3000)
    if (winner == 'user') setTimeout(() => window.location.href = "https://www.youtube.com/watch?v=yX39J_YyKbs", 4000)
    if (winner == 'computer') setTimeout(() => window.location.href = "https://www.youtube.com/watch?v=_O1hM-k3aUY", 4000)
    if (winner == 'draw') setTimeout(() => window.location.href = "https://www.youtube.com/watch?v=RqJVa0fl01w", 4000)
}

let owner2 = owner1
let owner3 = owner2
owner1[0] = 'px'
owner2[1] = 'py'


concat = (arr) => {
    let result = arr[0] + arr[1]
    arr[0] = 'Andrzej'
    return result
}

let pies1 = 'Andrzej'
let pies2 = pies1

// 
const list = (arr) => {   
    arr.forEach(v => console.log(v))
    arr[0] = 'Wojtek'
}

let importantHumans = ['Biogdan', 'Mariola']
list([...importantHumans, 'Bruce'])
console.log(importantHumans)



let arr = ['Lucyna', 'Ludwik']
const toLovercase = (arr) => {
    let result = [...arr]
    for(let i = 0; i< result.length; i++) {
        result[i] = result[i].toLovercase()
    }

    return result
}

// u1
let namesLower = toLovercase(arr)

let zbyszek = {
    name: 'Zbyszek',
    surname: 'Kowalski',
    dogs: ['Reksio', 'Burek']
}
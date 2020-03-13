/*
Poniższe zadanie polega na zmodyfikowaniu kodu w taki sposób, aby odzwierciedlał on proces przekazywania psów między właścicielami, a schroniskiem.
W obrębie ćwiczenia, przyjmij, że imię psa jest unikatowe i dotyczy zawsze jedno i tego samego psa!

W skrypcie poniżej zadeklarowani zostali dwaj właściciele psów oraz schronisko, które opiekuje się psami.
Zadeklarowane funkcje powinny kolejno:

giveDogToShelter - umożliwić zabranie z kolekcji właściciela i przekaznie go do schroniska
getDogFromShelter - umożliwić przygarnięcie psa ze schroniska przez właściciela
exchangeDogsBetweenOwners - przekazanie psa między właścicielami

W skrypcie zadeklarowani są już 2 właściciele oraz 4 psy. Wykorzystaj ich do testów stworzonych funkcjonalności.
Zadania:

1) Uzupełnij funkcję, aby było to możliwe
2) napisz funkcję, która jako argument przyjmie właściciela, a we wnątrz funkcji wypisze jego imię nazwisko oraz imiona posiadanych psów
    Przykładowo wynik funkcji dla owner1, który posiadałby 3 psy:
    "Pitor Nowicki has: Czarek, Burek, Gary"

3) Napisz funkcję "clone", która umożliwi klonowanie właścicielia (owner)- stworzy niezależną kopie, która może mięć zmienione przykładowo nazwiska
4) Napisz funckję "deepClone", która umożliwi klonowanie właściciela - skopiowany obiekt bedzie niezależny od zródła, oraz wszytkie psy w klonie mogą zostać zmodyfikowane bez modyfikowania oryginału


*/

let owner1 = {
    name: 'Piotrek',
    surname: 'Nowicki',
    dogs: [{
        name: 'Burek',
        species: 'normal',
        age: 1
    }]
}

let owner2 = {
    name: 'Zbyszek',
    surname: 'Smith',
    dogs: [{
        name: 'Czarek',
        species: 'husky',
        age: 3
    }]
}

let dogShelter = [
    {
        name: 'Gary',
        species: 'husky',
        age: 2
    },
    {
        name: 'Ash',
        species: 'long hair husky',
        age: 4
    }
]

let giveDogToShelter = (owner, dogName) => {
    // Add your code here
}

let getDogFromShelter = (owner, dogName) => {
    // Add your code here
}

let giveDogToOtherOwner = (ownerFrom, ownerTo, dogName) => {
    // Add your code here
}
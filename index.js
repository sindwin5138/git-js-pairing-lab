//Code your solutions in this file
const multiplesOfThree = () => {
    for (let i = 3; i < 100; i += 3) {
        console.log(i)
    }
}
multiplesOfThree()

const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}
untilNum(6)

const add = (num1, num2) => {
    if (num1 !== num2) {
        return num1 + num2
    } else {
        return (num1 + num2) * 3
    }
}
console.log(add(2, 4))
console.log(add(5, 5))
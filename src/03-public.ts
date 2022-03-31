export class MyDate {
    year: number
    month: number
    day: number

    constructor(year: number, month: number, day: number) {
        this.year = year
        this.month = month
        this.day = day
    }

    printFormat(): string {
        return `${this.day}/${this.month}/${this.year}`
    }

    add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') {
            this.day += amount
        }
        if (type === 'months') {
            this.month += amount
        }
        if (type === 'years') {
            this.year += amount
        }
    }
}

const myDate = new MyDate(2012, 6, 10)
console.log(myDate.printFormat())
//public properties
myDate.day = 30
console.log(myDate.printFormat())

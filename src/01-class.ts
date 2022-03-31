const date = new Date()
date.getHours()
date.getTime()
date.toISOString()

const date2 = new Date(1990, 4, 12)

console.log(date2)

class MyDate {
    year: number
    month: number
    day: number

    constructor(year: number, month: number, day: number) {
        this.year = year
        this.month = month
        this.day = day
    }
}

const myDate = new MyDate(1990, 5, 2)
console.log(myDate)
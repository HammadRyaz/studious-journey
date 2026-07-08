export const generator = () => {
    function* fncGenerator() {
        yield 10
        yield 20
        yield 30
    }
    const fnc = fncGenerator()
    console.log(fnc.next().value)
    console.log(fnc.next().value)
    console.log(fnc.next().value)
}

generator()
export const generator = () => {
    function* fncGenerator() {
        yield 10
        yield 20
        yield 30
    }
    const fnc = fncGenerator()
    const slides = [
        'Slide 1 ',
        'Slide 2 ',
        'Slide 3 ',
        'Slide 4 ',
    ]
    function* slideRun(arr) {
        for (const item of arr) {
            yield console.log(item)
        }
    }
    const g = slideRun(slides)

    const btn = document.createElement("button")
    btn.innerText = "Next Slide"
    document.body.appendChild(btn)

    btn.addEventListener("click", () => {
        g.next()
    })

}

generator()
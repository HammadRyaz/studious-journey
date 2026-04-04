const arr = ["ModulePattern", "FactoryPattern", "DebouncThrottle",];

for (let index = 0; index < arr.length; index++) {
    const btn = document.createElement("button");
    btn.classList.add("btn")
    btn.id = arr[index];
    btn.textContent = arr[index]
    document.body.prepend(btn);
    document.querySelector(`#${arr[index]}`).addEventListener("click", async () => {
        try {
            
            const loadJs = await import(`./${arr[index]}.js`);
            console.log(loadJs);
        } catch (error) {
            console.log(error);

        }
    })

    console.log("end");

}


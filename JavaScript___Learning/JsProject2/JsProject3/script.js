const filtersContainer = document.querySelector(".filters-container");
const choseImageBtn = document.querySelector("#chose-image");
const placeholder = document.querySelector(".placeholder");
const canvas = document.querySelector("canvas");
const canvasCtx = canvas.getContext("2d");
const btnChose = document.querySelector(".btn-chose");
const btnReset = document.querySelector(".btn-reset");
const btnDownload = document.querySelector(".btn-download");
const presetsContainer = document.querySelector(".presetsContainer");

let FILE = null;
let IMAGE = null;
btnChose.addEventListener("click", function () {
    choseImageBtn.click();
});

const filtersControls = () => {
    const defaults = {
        Brightness: { value: 100, min: 0, max: 200, unit: "%" },
        Contrast: { value: 100, min: 0, max: 200, unit: "%" },
        Saturation: { value: 100, min: 0, max: 200, unit: "%" },
        HueRotation: { value: 0, min: 0, max: 360, unit: "deg" },
        Blur: { value: 0, min: 0, max: 20, unit: "px" },
        Grayscale: { value: 0, min: 0, max: 100, unit: "%" },
        Sepia: { value: 0, min: 0, max: 100, unit: "%" },
        Opacity: { value: 100, min: 0, max: 100, unit: "%" },
        Invert: { value: 0, min: 0, max: 100, unit: "%" },
    };
    const presets = {
        normal: {
            Brightness: 100,
            Contrast: 100,
            Saturation: 100,
            HueRotation: 0,
            Blur: 0,
            Grayscale: 0,
            Sepia: 0,
            Opacity: 100,
            Invert: 0,
        },
        vintage: {
            Brightness: 110,
            Contrast: 90,
            Saturation: 80,
            HueRotation: 10,
            Blur: 0,
            Grayscale: 0,
            Sepia: 30,
            Opacity: 100,
            Invert: 0,
        },
        blackAndWhite: {
            Brightness: 100,
            Contrast: 120,
            Saturation: 0,
            HueRotation: 0,
            Blur: 0,
            Grayscale: 100,
            Sepia: 0,
            Opacity: 100,
            Invert: 0,
        },
        cinematic: {
            Brightness: 90,
            Contrast: 130,
            Saturation: 120,
            HueRotation: 5,
            Blur: 1,
            Grayscale: 0,
            Sepia: 10,
            Opacity: 100,
            Invert: 0,
        },
        dreamy: {
            Brightness: 120,
            Contrast: 100,
            Saturation: 150,
            HueRotation: 20,
            Blur: 2,
            Grayscale: 0,
            Sepia: 15,
            Opacity: 90,
            Invert: 0,
        },
    };
    let filters = structuredClone(defaults);
    return {
        get() {
            return filters;
        },
        reset() {
            filters = structuredClone(defaults);
        },
        presets() {
            return presets;
        },
    };
};

const filterController = filtersControls();
const filters = filterController.get();

Object.keys(filters).forEach((key) => {
    createFilterElement(
        key,
        filters[key].value,
        filters[key].min,
        filters[key].max,
        filters[key].unit,
    );
});

function createFilterElement(name, value, min, max, unit) {
    const div = document.createElement("div");
    div.classList.add("filter");
    const p = document.createElement("p");
    const inp = document.createElement("input");
    div.appendChild(p);
    div.appendChild(inp);
    inp.type = "range";
    p.textContent = name + " - " + value + unit;
    inp.value = value;
    inp.min = min;
    inp.max = max;
    filtersContainer.appendChild(div);
    inp.addEventListener("input", (e) => {
        filters[name].value = inp.value;
        applyFilter();
    });
}

choseImageBtn.addEventListener("change", (e) => {
    placeholder.style.display = "none";
    canvas.style.display = "block";
    const file = e.target.files[0];
    FILE = file;
    const image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = () => {
        IMAGE = image;
        canvas.width = image.width;
        canvas.height = image.height;
        canvasCtx.drawImage(image, 0, 0);
    };
});

function applyFilter() {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    canvasCtx.filter = `
    brightness(${filters.Brightness.value}${filters.Brightness.unit})
    contrast(${filters.Contrast.value}${filters.Contrast.unit})
    saturate(${filters.Saturation.value}${filters.Saturation.unit})
    hue-rotate(${filters.HueRotation.value}${filters.HueRotation.unit})
    blur(${filters.Blur.value}${filters.Blur.unit})
    grayscale(${filters.Grayscale.value}${filters.Grayscale.unit})
    sepia(${filters.Sepia.value}${filters.Sepia.unit})
    opacity(${filters.Opacity.value}${filters.Opacity.unit})
    invert(${filters.Invert.value}${filters.Invert.unit})
    `;
    canvasCtx.drawImage(IMAGE, 0, 0);
}

btnReset.addEventListener("click", function () {
    filterController.reset();
    Object.assign(filters, filterController.get());
    filtersContainer.innerHTML = "";

    Object.keys(filters).forEach((key) => {
        createFilterElement(
            key,
            filters[key].value,
            filters[key].min,
            filters[key].max,
            filters[key].unit,
        );
    });
    applyFilter();
});

btnDownload.addEventListener("click", () => {
    const a = document.createElement("a");
    a.download = "edited-image.png";
    a.href = canvas.toDataURL();
    a.click();
    console.log("download", a.href);
});


const presets = filterController.presets();
Object.keys(presets).forEach((key) => {
    createPresetsElement(
        key,
        presets[key].Blur,
        presets[key].Contrast,
        presets[key].Saturation,
        presets[key].HueRotation,
        presets[key].Brightness,
        presets[key].Grayscale,
        presets[key].Sepia,
        presets[key].Opacity,
        presets[key].Invert,
    );


});

function createPresetsElement(key) {
    const div = document.createElement("button");
    div.classList.add("presets");
    div.textContent = key;
    presetsContainer.appendChild(div);
}

const btnPresets = document.querySelectorAll(".presets");
btnPresets.forEach(btn => {
    btn.addEventListener("click", applyPresets)
    
})

function applyPresets() {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    canvasCtx.filter = `
    brightness(${presets.Brightness}${filters.Brightness.unit})
    contrast(${presets.Contrast}${filters.Contrast.unit})
    saturate(${presets.Saturation}${filters.Saturation.unit})
    hue-rotate(${presets.HueRotation}${filters.HueRotation.unit})
    blur(${presets.Blur}${filters.Blur.unit})
    grayscale(${presets.Grayscale}${filters.Grayscale.unit})
    sepia(${presets.Sepia}${filters.Sepia.unit})
    opacity(${presets.Opacity}${filters.Opacity.unit})
    invert(${presets.Invert}${filters.Invert.unit})
    `;
    canvasCtx.drawImage(IMAGE, 0, 0);
}

console.log(presets , filters.Brightness.unit);

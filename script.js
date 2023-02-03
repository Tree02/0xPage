const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguages = async language=>{
    const requestJson = await fetch("./languages/"+language+".json");
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        
        textToChange.innerHTML=texts[section][value]
    }
};

flagsElement.addEventListener("click", (e)=>{
    changeLanguages(e.target.parentElement.dataset.language);
});
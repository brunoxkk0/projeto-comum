const PAGES = [
    {title: "Conceitos",                href: "src/pages/page1/index.html", color: "#ec7062"},
    {title: "Fases do Projeto",         href: "src/pages/page2/index.html", color: "#8d44ad"},
    {title: "Estrutura e Organização",  href: "src/pages/page3/index.html", color: "#3398da"},
    {title: "Métricas e Estimativas",   href: "src/pages/page4/index.html", color: "#169f85"},
    {title: "Diferentes Abordagens",    href: "src/pages/page5/index.html", color: "#f1c40f"},
]

const menu =        document.querySelector("#menuItens");
const display =     document.querySelector("#display");
const title =       document.querySelector("#pageTitle");

document.addEventListener("DOMContentLoaded", () => {
    loadMenu();
    loadPage(3);
});

const loadMenu = () => {
    PAGES.forEach((el, index) => {

        let button = document.createElement("button");
        button.setAttribute("onclick", `loadPage(${index})`);
        button.innerText = el.title;
        button.style.setProperty("--page-highlight", el.color)

        menu.appendChild(button);
    })
}

function loadPage(pageIndex) {

    let page = PAGES[pageIndex];

    if(page){
        display.src = page.href;
        document.title = page.title;
        title.innerText = page.title;
        title.style.setProperty("--page-highlight", page.color)

    }else {
        loadPage(0);
    }

}



let headerContainer = '';
let aboutContainer = '';
let menuContainer = '';

export function Home() {    
    const contentContainer = document.querySelector("#content");
    headerContainer = document.createElement("div")
    const restaurantName = document.createElement("h1")
    const headerHeadline = document.createElement("h2")
    menuContainer = document.createElement("div")
    aboutContainer = document.createElement("div")
    contentContainer.appendChild(menuContainer)
    contentContainer.appendChild(aboutContainer)
    contentContainer.appendChild(headerContainer)
    headerContainer.setAttribute('id','Home');
    menuContainer.setAttribute('id','Menu');
    aboutContainer.setAttribute('id','About');
    headerContainer.classList.add("home");
    menuContainer.classList.add("menu");
    aboutContainer.classList.add("about");
    menuContainer.classList.add("hide");
    aboutContainer.classList.add("hide");
    headerContainer.appendChild(restaurantName)
    restaurantName.innerText = "Garbanzo's Burgers";
    headerContainer.appendChild(headerHeadline)
    headerHeadline.innerText = "The Best Burgers in The Beans-ness!"
    const burgerQuote = document.createElement("h2")
    const quoteSource = document.createElement("h4")
    headerContainer.appendChild(burgerQuote);
    headerContainer.appendChild(quoteSource);
    burgerQuote.innerText = (`"This is the best burger I've had all week!"`)
    quoteSource.innerText = ("- Man we found standing outside the local homeless shelter")
    burgerQuote.classList.add("hQuote")
    quoteSource.classList.add("sQuote")
}

export function hidePage(buttonId) {
    [headerContainer,menuContainer,aboutContainer].forEach(container => {
        if (container.id === buttonId) {
            if (container.classList.contains('hide')) {
                container.classList.remove("hide");
                container.classList.add("grid");
            } else {
                container.classList.add("hide");
                container.classList.remove("grid");
            }
        } else {
            container.classList.add("hide");
            container.classList.remove("grid");
        }
    });
}


export function buttonClick() {
    const homeButton = document.querySelector("#Home");
    const menuButton = document.querySelector("#Menu");
    const aboutButton = document.querySelector("#About") ;
    homeButton.addEventListener("click", () => hidePage("Home"));
    menuButton.addEventListener("click", () => hidePage("Menu"));
    aboutButton.addEventListener("click", () => hidePage("About"));
}
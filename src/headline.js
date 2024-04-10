
let headerContainer, menuContainer, aboutContainer;

function makeContainers(name, elementType, parent) {
    const container = document.createElement(elementType);
    container.id = name;
    parent.appendChild(container);
    return container; 
}

export function Home() {
    const contentContainer = document.querySelector("#content");

    headerContainer = makeContainers("headerContainer", "div", contentContainer);
    aboutContainer = makeContainers("aboutContainer", "div", contentContainer);
    menuContainer = makeContainers("menuContainer", "div", contentContainer);

    const restaurantNamed = makeContainers("restaurantName", "h1", headerContainer);
    const headlineNamed = makeContainers("headline", "h2", headerContainer);
    const quoteNamed = makeContainers("quote", "h2", headerContainer);
    const quoteSourceNamed = makeContainers("quoteSource", "h4", headerContainer);


    headerContainer.setAttribute('id', 'Home');
    menuContainer.setAttribute('id', 'Menu');
    aboutContainer.setAttribute('id', 'About');

    headerContainer.classList.add("home");
    menuContainer.classList.add("menu", "hide"); 
    aboutContainer.classList.add("about", "hide");
    quoteNamed.classList.add("hQuote");
    quoteSourceNamed.classList.add("sQuote");

    restaurantNamed.innerText = "Garbanzo's Burgers";
    headlineNamed.innerText = "The Best Burgers in The Beans-ness!";
    quoteNamed.innerText = `"This is the best burger I've had all week!"`;
    quoteSourceNamed.innerText = "- Man we found standing outside the local homeless shelter";
}
export function hidePage(buttonId) {
    [headerContainer , menuContainer , aboutContainer].forEach(container => {
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
    const homeButton = document.querySelector("#HomeButton");
    const menuButton = document.querySelector("#MenuButton");
    const aboutButton = document.querySelector("#AboutButton") ;
    homeButton.addEventListener("click", () => hidePage("Home"));
    menuButton.addEventListener("click", () => hidePage("Menu"));
    aboutButton.addEventListener("click", () => hidePage("About"));
}
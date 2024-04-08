export function Headline() {
    const restaurantName = document.createElement("h1")
    const headerContainer = document.querySelector("header");
    const headerHeadline = document.createElement("h2")
    headerContainer.appendChild(restaurantName)
    restaurantName.innerText = "Gerbanzo's Burgers";
    headerContainer.appendChild(headerHeadline)
    headerHeadline.innerText = "The Best Burgers in The Beans-ness!"
}

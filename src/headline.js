export function Home() {
    const contentContainer = document.querySelector("#content");
    const headerContainer = document.createElement("div")
    const restaurantName = document.createElement("h1")
    const headerHeadline = document.createElement("h2")
    headerContainer.classList.add("header")
    contentContainer.appendChild(headerContainer)
    headerContainer.appendChild(restaurantName)
    restaurantName.innerText = "Garbanzo's Burgers";
    headerContainer.appendChild(headerHeadline)
    headerHeadline.innerText = "The Best Burgers in The Beans-ness!"
}

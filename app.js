const selectButtonBookmarking = document.querySelector("#select-button-bookmarking");
const selectButtonSearching = document.querySelector("#select-button-searching");
const selectButtonSharing = document.querySelector("#select-button-sharing");

// const selectButton = {
//     selectButtonBookmarking: {
//         element: selectButtonBookmarking,
//         title: "Bookmark in one click",
//         description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
//         urlLink: "#"
//     },
//     selectButtonSearching: {
//         element: selectButtonSearching,
//         title: "Intelligent search",
//         description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
//         urlLink: "#"
//     },
//     selectButtonSharing: {
//         element: selectButtonSharing,
//         title: "Share your bookmarks",
//         description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
//         urlLink: "#"
//     }
// };

const selectButton = [
    {
        element: selectButtonBookmarking,
        title: "Bookmark in one click",
        description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        urlLink: "#bookmarking",
        image: "illustration-features-tab-1.svg"
    },
    {
        element: selectButtonSearching,
        title: "Intelligent search",
        description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        urlLink: "#searching",
        image: "illustration-features-tab-2.svg"
    },
    {
        element: selectButtonSharing,
        title: "Share your bookmarks",
        description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        urlLink: "#sharing",
        image: "illustration-features-tab-3.svg"
    }
]

const featuresHeading = document.querySelector("#features-heading");
const featuresDescription = document.querySelector("#features-description");
const featuresLink = document.querySelector("#features-link");
const featuresImage = document.querySelector("#features-image");

// for (let button in selectButton) {
//     button.element.addEventListener("click", () => {
//         console.log(button);
//         for (let btn of selectButton) {
//             btn.classList.remove("features__select-button--active");
//         }
//         button.classList.add("features__select-button--active");
//         featuresHeading.textContent = button.title;
//         featuresDescription.textContent = button.description;
//         featuresLink.setAttribute("href", `${button.urlLink}`);
//     });
// };

const selectActive = (button) => {
    for (let btn of selectButton) {
        btn.element.classList.remove("features__select-button--active");
    }
    button.element.classList.add("features__select-button--active");
}

const printActive = (button) => {
    featuresHeading.textContent = button.title;
    featuresDescription.textContent = button.description;
    featuresLink.setAttribute("href", `${button.urlLink}`);
    featuresImage.setAttribute("src", `images/${button.image}`);
}

selectButton.forEach((button) => {
    button.element.addEventListener("click", () => {
        selectActive(button);
        printActive(button);
    })
})

selectActive(selectButton[0]);
printActive(selectButton[0]);

const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("accordion__item--open");
    })
})
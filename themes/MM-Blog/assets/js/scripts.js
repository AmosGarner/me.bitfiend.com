const displayElement = (element) => {
    element.children[1].classList.remove("hidden");
};

const hideElement = (element) => {
    element.children[1].classList.add("hidden");
};
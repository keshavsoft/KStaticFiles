let jFChangeHeaderActiveClass = () => {
    let jVarLocalPathArray = window.location.pathname.split("/");
    let jVarLocalHTMLName = jVarLocalPathArray[jVarLocalPathArray.length - 1];
    jFChangeNavAnchorClass({ inClassName: jVarLocalHTMLName.split(".")[0] });
};

let jFChangeNavAnchorClass = ({ inClassName }) => {
    let jVarLocalId = "sidebarMenu";
    let jVarLocalNavBarId = document.getElementById(jVarLocalId);

    jFLocalRemoveActive({ inHtmlId: jVarLocalNavBarId });
    jFLocalAddActive({ inHtmlId: jVarLocalNavBarId, inClassName });
};

let jFLocalRemoveActive = ({ inHtmlId }) => {
    let jVarLocalA = inHtmlId.querySelectorAll("a");

    for (let i = 0; i < jVarLocalA.length; i++) {
        jVarLocalA[i].classList.remove("active");
    };
};

let jFLocalAddActive = ({ inHtmlId, inClassName }) => {
    // let jVarLocalA = inHtmlId.querySelector(`a.${inClassName}AClass`);
    let jVarLocalA = inHtmlId.querySelector(`[href*="${inClassName}"]`);

    if (jVarLocalA === null === false) {
        jVarLocalA.classList.add("active");
    };
};

jFChangeHeaderActiveClass();
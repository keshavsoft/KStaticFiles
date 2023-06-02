let StartFunc = async ({ inFromFetch }) => {
    if ("RedirectPage" in inFromFetch) {
        window.open(inFromFetch.RedirectPage, '_newtab');
        //window.location.href = LocalFromFetch.RedirectPage;
    };

    window.open("/JSONApi/Html/UserData/Menu/AsCards/Files.html", '_newtab');
};

export { StartFunc }

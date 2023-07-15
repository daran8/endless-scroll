function scroll(data, id) {
    document.addEventListener("scroll", function () {
        var selectedElement = document.getElementById(id);

        data.forEach(function (element) {
            if (window.scrollY + window.innerHeight >=
                document.documentElement.scrollHeight &&
                selectedElement !== null) {
                selectedElement.appendChild(element);
            }
        });
    });
}

module.exports = scroll;
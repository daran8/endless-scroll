function scroll(data, id) {
    document.addEventListener("scroll", function () {
        var container = document.getElementById(id);
        data.forEach(function (element) {
            if (window.scrollY + window.innerHeight >=
                document.documentElement.scrollHeight &&
                container !== null) {
                container.appendChild(element);
            }
        });
    });
}

module.exports = scroll;
$(".links").on("click", function (event) {
    event.preventDefault();
    let link = $(this).attr("ref");
    console.log(link);
    $("#sites").attr("src", link);
    let color = $(this).attr("color");
    $("#my-name").attr("class", `display-4 ${color}`);
});
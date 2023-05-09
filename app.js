var links = [{
        name: "TOROS-2",
        Image: "img/slide_2.webp",
        link: "#",
    },
    {
        name: "TOROS-3",
        Image: "img/slide_1.jpg",
        link: "#",
    },
    {
        name: 'TOROS-4',
        Image: 'img/slide3.jpg',
        link: '#'
    }

];

var index = 0;
var slaytCount = links.length;

showSlide(index);

document
    .querySelector(".fa-hand-point-left")
    .addEventListener("click", function() {
        index--;
        showSlide(index);

    });

document
    .querySelector(".fa-hand-point-right")
    .addEventListener("click", function() {
        index++;
        showSlide(index);

    });

function showSlide(i) {
    index = i;
    if (i < 0) {
        index = slaytCount - 1;

    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector(".card-title").textContent = links[index].name;
    document
        .querySelector(".card-img-top")
        .setAttribute("src", links[index].Image);
    document.querySelector(".card-link").setAttribute("href", links[index].link);
}
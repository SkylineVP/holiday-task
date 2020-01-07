const picture = document.getElementsByClassName("work");

for (let pictureElement of picture) {
    pictureElement.onclick = (event) => {
        event.stopImmediatePropagation();
        const sourceImg = event.currentTarget.querySelector("img");
        const div = document.createElement("div");
        div.classList.add("back");

        const openPhotoContainer = document.createElement("div");
        openPhotoContainer.classList.add("openPhotoContainer");

        const img = new Image();
        img.src = sourceImg.src;
        openPhotoContainer.appendChild(img);

        const close = document.createElement('div');
        close.classList.add('close');

        close.onclick = () => {
            div.remove();
        };
        openPhotoContainer.appendChild(close);
        div.appendChild(openPhotoContainer);
        document.getElementsByTagName("main")[0].appendChild(div);
        console.log(sourceImg);
    }
}
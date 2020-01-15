const picturesOfWork = document.getElementsByClassName("work");

for (const pictureElement of picturesOfWork) {
  pictureElement.onclick = ( event ) => {
    event.stopImmediatePropagation();
    const sourceImg = event.currentTarget.querySelector("img");
    const pictureBackground = document.createElement("div");
    pictureBackground.classList.add("back");
    pictureBackground.onclick = closeOpenPicture;

    const openPhotoContainer = document.createElement("div");
    openPhotoContainer.classList.add("openPhotoContainer");

    const img = new Image();
    img.src = sourceImg.src;
    openPhotoContainer.appendChild(img);

    const close = document.createElement('div');
    close.classList.add('close');
    close.onclick = closeOpenPicture;
    openPhotoContainer.appendChild(close);

    pictureBackground.appendChild(openPhotoContainer);
    document.body.appendChild(pictureBackground);
    console.log(sourceImg);
  }
}

function closeOpenPicture() {
  const pictureBackground = document.getElementsByClassName('back')[0];
  pictureBackground.remove();
}
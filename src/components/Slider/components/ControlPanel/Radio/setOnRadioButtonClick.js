export default function ( event ) {

  const activeSlide = document.getElementsByClassName("activeSlide")[0];
  if (activeSlide) {
    activeSlide.classList.remove("activeSlide");
  }

  const desiredSlide = document.querySelector(`.slide[numberSlide=\'${event.currentTarget.value}\']`);
  desiredSlide.classList.add('activeSlide');


  document.getElementsByName('buttonSelectSlide').forEach(button => {
    button.classList.remove('activeRadioButton')
  });
  event.currentTarget.classList.add('activeRadioButton');


}
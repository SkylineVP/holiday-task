import createRadioButton from './Radio';

export function createControlPanel( slides ) {
  const controlPanel = document.createElement("ol");
  controlPanel.classList.add("controlPanel");

  slides.forEach(( slide, index ) => {
    if (index > 7) {
      return 0;
    }
    controlPanel.appendChild(createRadioButton(index, slides));

  });
  return controlPanel
}
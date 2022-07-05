/**
 * Fade Content Function.
 * Replace Class '.hide' for '.appear Class When Scroll Over Element.
 * @return void
 */
export function show(): void {
  const scroll: number = scrollY;
  const elements: NodeListOf<Element> = document.querySelectorAll('.hide');
  elements.forEach( e => {
    const position = e.getBoundingClientRect();
      if ( scroll >= ( position.height - position.top ) ) {
        e.classList.replace('hide', 'appear');
      }
  })
}
/**
 * Fade Content Function.
 * Replace Class '.hide' for '.appear Class When Scroll Over Element.
 * @return void
 */
export function show(): void {
  const offsetDoc = document.body.getBoundingClientRect().top;
  const elements: NodeListOf<Element> = document.querySelectorAll('.hide');

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
      if ( (scrollY - offsetDoc) >= position ) {
        el.classList.replace('hide', 'appear');
      }
  })
}
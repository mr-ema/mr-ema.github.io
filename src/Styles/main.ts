import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-column: 1/13;
  background-color: ${props => props.theme.bg.primary};
  color: ${props => props.theme.fg.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 70px;
  margin-left: -30px;
  position: relative;

  @media (max-width: 900px) {
    grid-column: 1/13;
    padding: 0 3rem;
    margin-left: 0;
  }
`

// Functions
/**
 * Genere a random number
 * @params min: number, max: number
 * @return number
 */
export function random(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() *  (max - min + 1) + min)
}
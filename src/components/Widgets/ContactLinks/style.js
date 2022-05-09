import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 2%;
  width: fit-content;
  height: fit-content;
  z-index: 2;
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  .link {
    display: block;
    color: #ee666e;
    cursor: pointer;
    font-size: 2.6rem;
    padding: .6rem;
    opacity: .8;
    text-decoration: none;

    &:hover {
      opacity: 1;
    }
  }
`
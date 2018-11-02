import styled from 'styled-components'

const Flex = styled.div`
  display: ${props => props.inline ? "inline-flex" : "flex"};
  ${props => props.alignCenter && `align-items: center`};
`

export default Flex
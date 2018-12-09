import styled from 'styled-components'

export default styled.div`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  ${props => props.alignCenter && `align-items: center`};
`

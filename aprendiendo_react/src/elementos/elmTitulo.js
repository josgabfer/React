import styled from 'styled-components';

// Se crea un styled component 
//Entre los backtips se ingresa el codigo para realizar el estilo
const H1 = styled.h1`
    color: ${props => props.color};
    font-weight: bold;
`;
export default H1;
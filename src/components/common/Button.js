import styled, { css } from 'styled-components';

const Button = styled.button`
color: white;
background:${p => p.secondary ? 'black' : '#f8049c'};
font-weight:bold;
box-shadow: none;
border:none;
width:100%;
display:block;
white-space:none;

${p => p.large ? css`
    padding: 15px;
    border-radius: 5px;
    font-size: 1.5em;
` : css`
    padding: 8px;
    border-radius: 4px;
    font-size: 1em;
`}

    &:disabled {
        color: #666;
        background:#eee;
    }
`;

export { Button };
//export default Button;
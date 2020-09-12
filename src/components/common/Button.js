import styled, { css } from 'styled-components';

const LargeStyles = ({ large }) => {
    if (large) {
        return css`
            padding: 10px;
            border-radius: 5px;
            font-size: 1.5em;
        `
    } else {
        return css`
            padding: 8px;
            border-radius: 4px;
            font-size: 1em;
        `
    }
}

const Button = styled.button`
color: white;
background:${p => p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
font-weight:bold;
box-shadow: none;
border:none;
width:100%;
display:block;
white-space:none;
${LargeStyles};

    &:disabled {
        color: #666;
        background:#eee;
    }
`;

export { Button };
//export default Button;
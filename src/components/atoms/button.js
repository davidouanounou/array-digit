import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
    font-family: Roboto;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #000;
    height: 36px;
    width: 36px;
    outline: none;
    transition: all ease .4s;
    border-radius: 4px;
    border: 1px solid #F4F6F9;
    background-color: #22D089;
    cursor: pointer;
    :disabled {
        background-color: #E5E7EB;
        color: #999999;
        cursor: not-allowed;
    };
    :hover {
        background-color: ${darken(0.1, '#22D089')};
    };
    :hover:disabled {
        background-color: #E5E7EB;
    }
`;

export default Button;
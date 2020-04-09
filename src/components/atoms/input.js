import styled from 'styled-components';
import { darken } from 'polished';

const Input = styled.input`
    font-family: Roboto;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #000;
    height: 18px;
    outline: none;
    transition: all ease .4s;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #E5E7EB;
    :focus {
        border: 1px solid ${darken(0.3, '#E5E7EB')};
    }
    :disabled {
        background-color: #E5E7EB;
        cursor: not-allowed;
    }
    ::placeholder {
        color: #7C859E;
    }
`;

export default Input;

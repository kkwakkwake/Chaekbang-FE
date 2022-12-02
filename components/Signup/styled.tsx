import styled from '@emotion/styled';
import { Colors } from '../../styles/ColorVariable';

// export const EmotionTest = styled.div`
//   width: 700px;
//   margin: 0 auto;
//   background-color: ${(props) => (props.color ? props.color : 'black')};
// `;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;

  label {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  input {
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 38px;
    font-size: 1rem;
    padding-left: 10px;
    outline: none;
  }
  input:focus {
    box-shadow: 0 0 7px ${Colors.beige};
  }
`;

export const FormWrapper = styled.form`
  width: 300px;
  margin-top: 40px;
`;

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 100px;
`;

export const SignupImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ddd;
`;

export const NameInputWrapper = styled(InputWrapper)``;
export const EmailInputWrapper = styled(InputWrapper)`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    font-size: 0.8rem;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 7px 10px;
    cursor: pointer;
    background-color: ${Colors.beige};
  }
`;
export const PasswordInputWrapper = styled(InputWrapper)`
  position: relative;
  span {
    font-size: 0.7rem;
    position: absolute;
    right: 0;
    bottom: -20px;
    color: red;
  }
`;

export const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 0.9rem;
  }

  input:checked {
    accent-color: ${Colors.green};
  }
`;
export const SignupButton = styled.button`
  border: none;
  padding: 10px 0;
  border-radius: 10px;
  background-color: ${Colors.beige};
  cursor: pointer;
`;

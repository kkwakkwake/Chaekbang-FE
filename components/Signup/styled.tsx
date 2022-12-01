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

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 100px;
`;

export const SignupImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ddd;
`;

export const FormWrapper = styled.div`
  width: 300px;
  margin-top: 40px;
`;

export const NameInputWrapper = styled(InputWrapper)``;
export const EmailInputWrapper = styled(InputWrapper)``;
export const PasswordInputWrapper = styled(InputWrapper)``;

export const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 1rem;
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

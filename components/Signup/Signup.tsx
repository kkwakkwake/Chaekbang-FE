import { useCallback, useEffect, useRef, useState } from 'react';
import {
  SignupWrapper,
  SignupImageWrapper,
  NameInputWrapper,
  EmailInputWrapper,
  PasswordInputWrapper,
  TermsWrapper,
  SignupButton,
} from './styled';

import { FormWrapper } from '../styled';

/*
  이름 유효성검사
  비밀번호 유효성검사
  이메일 유효성검사
  이메일 중복확인
*/

const Signup = () => {
  const [nameInput, setNameInput] = useState<string>('');
  const [emailInput, setEmailInput] = useState<string>('');
  const [pwInput, setPwInput] = useState<string>('');
  const [pwCheckInput, setPwCheckInput] = useState<string>('');
  const [isPwMatch, setIsPwMatch] = useState<boolean>(true);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (pwInput && pwCheckInput) {
      pwInput === pwCheckInput ? setIsPwMatch(true) : setIsPwMatch(false);
    }
  }, [pwInput, pwCheckInput]);

  const signupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPwMatch && isCheckedAll) {
      console.log(
        '회원가입',
        nameInput,
        emailInput,
        pwInput,
        pwCheckInput,
        isPwMatch,
      );
    }
  };

  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false);
  const [isCheckedOne, setIsCheckedOne] = useState<boolean>(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState<boolean>(false);

  useEffect(() => {
    if (isCheckedOne && isCheckedTwo) {
      setIsCheckedAll(true);
    } else {
      setIsCheckedAll(false);
    }
  }, [isCheckedOne, isCheckedTwo]);

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'checkAll') {
      setIsCheckedAll(e.target.checked);
      setIsCheckedOne(e.target.checked);
      setIsCheckedTwo(e.target.checked);
    } else if (e.target.name === 'check1') {
      setIsCheckedOne(e.target.checked);
    } else if ((e.target.name = 'check2')) {
      setIsCheckedTwo(e.target.checked);
    }
  };

  return (
    <SignupWrapper>
      <SignupImageWrapper>image</SignupImageWrapper>
      <FormWrapper onSubmit={signupSubmit}>
        <NameInputWrapper>
          <label>이름</label>
          <input
            type="text"
            ref={nameRef}
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            required
          />
        </NameInputWrapper>
        <EmailInputWrapper>
          <div>
            <label>이메일</label>
            <span>중복확인</span>
          </div>
          <input
            type="email"
            ref={emailRef}
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
        </EmailInputWrapper>
        <PasswordInputWrapper>
          <label>비밀번호</label>
          <input
            type="password"
            ref={pwRef}
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            required
          />
        </PasswordInputWrapper>

        <PasswordInputWrapper>
          <label>비밀번호 확인</label>
          <input
            type="password"
            value={pwCheckInput}
            onChange={(e) => setPwCheckInput(e.target.value)}
            required
          />
          {isPwMatch || <span>비밀번호가 일치하지 않습니다</span>}
        </PasswordInputWrapper>
        <TermsWrapper>
          <label>
            <input
              type="checkbox"
              name="checkAll"
              checked={isCheckedAll}
              onChange={checkboxHandler}
            />
            약관 전체동의
          </label>
          <label>
            <input
              type="checkbox"
              checked={isCheckedOne}
              name="check1"
              onChange={checkboxHandler}
            />
            이용약관 동의(필수)
          </label>
          <label>
            <input
              type="checkbox"
              checked={isCheckedTwo}
              name="check2"
              onChange={checkboxHandler}
            />
            개인정보 수집 및 이용동의(필수)
          </label>
          <SignupButton>회원가입</SignupButton>
        </TermsWrapper>
      </FormWrapper>
    </SignupWrapper>
  );
};

export default Signup;

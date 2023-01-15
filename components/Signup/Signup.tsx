import { useCallback, useEffect, useRef, useState } from 'react';
import {
  SignupWrapper,
  SignupImageWrapper,
  NameInputWrapper,
  EmailInputWrapper,
  PasswordInputWrapper,
  TermsWrapper,
  SignupButton,
  InvalidMessage,
} from './styled';

import { FormWrapper } from '../styled';

const Signup = () => {
  const [nameInput, setNameInput] = useState<string>('');
  const [emailInput, setEmailInput] = useState<string>('');
  const [pwInput, setPwInput] = useState<string>('');
  const [pwCheckInput, setPwCheckInput] = useState<string>('');

  const [isPwMatch, setIsPwMatch] = useState<boolean>(true);
  const [isName, setIsName] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);

  const [emailChecked, setEmailChecked] = useState<boolean>(false);
  const [emailInvalid, setEmailInvalid] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const InvalidMessages = {
    name: '2-6글자 한글로 입력해주세요',
    email: {
      isEmail: '유효하지 않은 이메일 형식입니다',
      emailInvalid: {
        true: '사용할 수 없는 이메일입니다',
        false: '사용 가능한 이메일입니다',
      },
    },
    pw: '비밀번호가 일치하지 않습니다',
  };

  useEffect(() => {
    if (pwInput && pwCheckInput) {
      pwInput === pwCheckInput ? setIsPwMatch(true) : setIsPwMatch(false);
    }
  }, [pwInput, pwCheckInput]);

  /** 이름 유효성 검사 */
  const checkName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameRegex = /^[가-힣]{2,6}$/;
    setNameInput(e.target.value);
    setIsName(nameRegex.test(e.target.value));
  };

  /** 이메일 유효성 검사 */
  const checkEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setEmailInput(e.target.value);
    setEmailChecked(false);
    setIsEmail(emailRegex.test(e.target.value));
  };

  const checkEmailValid = () => {
    if (!emailInput || !isEmail) {
      return emailRef.current?.focus();
    }
    if (emailInput === 'hi@hi.com') {
      setEmailChecked(true);
      setEmailInvalid(true);
    } else {
      setEmailChecked(true);
      setEmailInvalid(false);
    }
  };

  const signupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isName) {
      return nameRef.current?.focus();
    }
    if (!isEmail) {
      return emailRef.current?.focus();
    } else {
    }

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

  /** 약관 유효성 검사 */
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
            onChange={checkName}
            placeholder="2글자 이상 6글자 이하"
            required
          />
          {nameInput
            ? isName || <InvalidMessage>{InvalidMessages.name}</InvalidMessage>
            : null}
        </NameInputWrapper>
        <EmailInputWrapper>
          <div>
            <label>이메일</label>
            <button onClick={checkEmailValid}>중복확인</button>
          </div>
          <input
            type="text"
            ref={emailRef}
            value={emailInput}
            onChange={checkEmail}
            required
          />
          {emailChecked ? (
            emailInvalid ? (
              <InvalidMessage>
                {InvalidMessages.email.emailInvalid.true}
              </InvalidMessage>
            ) : (
              <InvalidMessage>
                {InvalidMessages.email.emailInvalid.false}
              </InvalidMessage>
            )
          ) : null}
          {emailChecked
            ? null
            : emailInput
            ? isEmail || (
                <InvalidMessage>{InvalidMessages.email.isEmail}</InvalidMessage>
              )
            : null}
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
          {isPwMatch || <InvalidMessage>{InvalidMessages.pw}</InvalidMessage>}
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

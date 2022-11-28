import { useState } from "react";
import { EmotionTest } from "./styled";

const Signup = () => {
  const [changeColor, setChangeColor] = useState<string>("");

  const change = () => {
    setChangeColor("blue");
  };

  return (
    <>
      <div>image</div>
      <button onClick={change}>change</button>
      <EmotionTest color={changeColor}>emotion test</EmotionTest>
      <form>
        <div>
          <label>이름</label>
          <input type="text" />
        </div>
        <div>
          <label>이메일</label>
          <input type="text" />
        </div>
        <div>
          <label>비밀번호</label>
          <input type="password" />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input type="password" />
        </div>
        <div id="terms-conditions">
          <label>
            <input type="checkbox" name="checkAll" />
            모든 약관에 동의
          </label>
          <label>
            <input type="checkbox" name="check1" />
            개인정보처리방침에 동의 (필수)
          </label>
          <label>
            <input type="checkbox" name="check2" />
            이용 약관에 동의 (필수)
          </label>
          <button>회원가입</button>
        </div>
      </form>
    </>
  );
};

export default Signup;

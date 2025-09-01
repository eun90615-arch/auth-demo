import {signup} from './firebase/firebase-auth.js';

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const errorMessage = document.getElementById("error-message");
const submitButton = document.getElementById("signup-button");

/* 
    1. 버튼클릭 - 입력값 확인
    2. 누락된 값 또는 비번 불일치 -> 에러표시
    3. 모든 값들이 통과되면 Firebase signup() 호출
    4. 가입 성공 시 -> 이메일 인증(실제이메일 기재) -> 로그인 페이지로 이동
    5. 가입 실패 시 -> 사용자에게 에러메세지 표시
*/

// 1. 에러 메세지를 보여주는 함수
// error텍스트를 보여주고 .hidden 클래스 숨김 -> 에러영역 표시
const showError = (message) => {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden')
}
// 에러메세지 숨기기
const hideError = (message) => {
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden')
}

// 2. 회원가입 버튼이 클릭되면 함수 실행
submitButton.addEventListener('click', async () => {
    // 클릭하면 기존에 보였던 에러메세지 숨김
    hideError();

    // 입력값들을 변수에 담음. -> trim() : 공백제거
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // 입력값을 하나라도 입력하지 않으면 '모든 항목을 입력하세요' 에러를 보여주고 함수 종료
    if (!name || !email || !password || !confirmPassword) {
        showError("모든 항목을 입력하세요");
        return;
    }

    // 비밀번호와 비밀번호 확인 불일치
    if (password !== confirmPassword) {
        showError("비밀번호가 일치하지 않습니다.");
        return;
    }

    // 위 조건을 모두 통과하면 signup() 함수를 실행해서 Firebase에 회원가입 시도
    try {
        const user = await signup(email, password, name);
        alert("인증 이메일을 발송했습니다. 이메일을 확인해주세요");

        // 성공하면 로그인 페이지로 이동
        window.location.href="login.html";

        // 브라우저 콘솔에 가입된 사용자 정보 확인
        console.log("가입된 사용자: ",user);
    }

    // 에러가 나면 콘솔에 출력하고, 사용자에게 에러메세지 출력
    catch(error) {
        console.error("회원가입 실패: ", error.message);
        showError(`회원가입 실패: ${error.message}`);
    }
})
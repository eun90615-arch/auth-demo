Kakao.init('34206a3b00a24735130b11bea7bbe771');
Kakao.isInitialized();

console.log(Kakao.isInitialized());

document.getElementById("kakao-login-btn").addEventListener('click',()=>{
    Kakao.Auth.authorize({
        redirectUri:'https://eun90615-arch.github.io/auth-demo/kakao-callback.html'
    })
})
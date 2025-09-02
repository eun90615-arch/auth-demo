Kakao.init('34206a3b00a24735130b11bea7bbe771');
Kakao.isInitialized();

console.log(Kakao.isInitialized());

document.getElementById("kakao-login-btn").addEventListener('click',()=>{
    Kakao.Auth.authorize({
        redirectUri:'http://127.0.0.1:5500/kakao-callback.html'
    })
})
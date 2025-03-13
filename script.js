document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    function appendMessage(text, className) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", className);
        messageDiv.textContent = text;
        chatBox.appendChild(messageDiv);
        
        // 最新メッセージまでスクロール
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function sendMessage() {
        const userText = userInput.value.trim();
        if (userText === "") return;

        appendMessage(userText, "user-message");
        userInput.value = "";

        fetch("http://127.0.0.1:5000/get_response", {  // サーバーのURLを明記
            method: "POST",
            body: JSON.stringify({ message: userText }),
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"  // Acceptヘッダーも追加
            }
        })
        .then(response => response.json())
        .then(data => appendMessage(data.response, "bot-message"))
        .catch(error => console.error("エラー:", error));

    sendBtn.addEventListener("click", sendMessage);
    
    // エンターキーで送信
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
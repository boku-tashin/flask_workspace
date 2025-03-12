document.getElementById('send-btn').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        var chatBox = document.getElementById('chat-box');
        var userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = "あなた: " + userInput;
        chatBox.appendChild(userMessage);

        // サーバーに入力を送信して応答を取得
        fetch('/get_response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'message': userInput })
        })
        .then(response => response.json())
        .then(data => {
            var botMessage = document.createElement('div');
            botMessage.classList.add('bot-message');
            botMessage.textContent = "ボット: " + data.response;
            chatBox.appendChild(botMessage);

            // スクロールを一番下に
            chatBox.scrollTop = chatBox.scrollHeight;
        });

        // ユーザー入力をクリア
        document.getElementById('user-input').value = '';
    }
});
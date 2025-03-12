from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

# チャットボットの作成
chatbot = ChatBot('MyBot')

# トレーナーを設定
trainer = ChatterBotCorpusTrainer(chatbot)

# 英語のコーパスをトレーニング
trainer.train("chatterbot.corpus.english")

# チャットボットと会話
while True:
    try:
        user_input = input("あなた: ")
        bot_response = chatbot.get_response(user_input)
        print("ボット: ", bot_response)
    except (KeyboardInterrupt, EOFError, SystemExit):
        print("\n終了します。")
        break
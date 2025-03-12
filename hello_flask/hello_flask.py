# Flaskのインポート ---（※１）
from flask import Flask

# インスタンス作成 ---（※２）
app: Flask = Flask(__name__)


# ルーティング ---（※３）
@app.route("/")
def hello_world():
    age:int = 19
    return "<h1>あなたの年齢は" +age + "歳です。</h1>"


# アプリケーションの実行 ---（※４）
if __name__ == "__main__":
    app.run()

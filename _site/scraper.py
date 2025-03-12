import logging
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

logging.basicConfig(level=logging.INFO)
logging.info("スクレイピングを開始します")

# ChromeDriverManager().install() で取得したパスを Service に渡す
service = Service(ChromeDriverManager().install())

# サービスを渡して ChromeDriver を起動
driver = webdriver.Chrome(service=service)

driver.get("https://www.rakuten.ne.jp/gold/bring-sg/")

# 商品名の取得
product_names = driver.find_elements(By.CLASS_NAME, "product-name")  # クラス名を実際のものに変更してください
for product in product_names:
    logging.info(f"商品名: {product.text}")

# 価格の取得
prices = driver.find_elements(By.CLASS_NAME, "price")  # クラス名を実際のものに変更してください
for price in prices:
    logging.info(f"価格: {price.text}")

# 他に取得したい情報があれば、同様に find_elements を使用して取得

driver.quit()
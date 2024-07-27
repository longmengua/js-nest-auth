# js-auth-middlerware-server

## launch server

- start server
  - yarn run start:dev

## google certificate application

- 實作 Google Authentication Sign-In 需要申請 OAuth 2.0 的 token，以下是申請步驟：
  - 進入 Google Cloud Console:
    - 打開 Google Cloud Console，如果沒有 Google 帳號，先註冊一個。
  - 建立一個新專案:
    - 點擊左上角的下拉選單，選擇"新建專案"並填寫專案名稱及其他必要資訊，然後點擊"創建"。
  - 啟用 OAuth 同意畫面:
    - 在左側選單中，找到 "API 和服務" -> "OAuth 同意畫面"，選擇應用的使用範圍（內部或外部），填寫應用名稱、支援郵件等資訊。
  - 建立 OAuth 2.0 客戶端 ID:
    - 在左側選單中，找到 "憑證" -> "建立憑證" -> "OAuth 客戶端 ID"。選擇應用類型（如 Web 應用），填寫授權的重導向 URI（如 http://localhost:3000/auth/google/callback）。
  - 下載憑證:
    - 完成後，會生成一個客戶端 ID 和客戶端密鑰，可以選擇下載 JSON 檔案，這個檔案會包含你需要的憑證資訊。

## 

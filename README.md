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

## apple certificate application

- 實作 Apple 登入需要申請 Apple ID 服務的 token，以下是詳細步驟：
  - 申請 Apple 開發者帳號：
    - 如果還沒有，請前往 Apple Developer 註冊並申請開發者帳號。
  - 創建 App ID：
    - 進入 Apple Developer Account，導航到 Certificates, Identifiers & Profiles -> Identifiers -> +，創建新的 App ID。
  - 啟用 Sign In with Apple：
    - 在創建 App ID 的過程中，確保勾選 "Sign In with Apple" 選項。
  - 創建服務 ID：
    - 在 Identifiers -> + -> Services ID，創建一個新的服務 ID。這個服務 ID 將用於 Web 和其他平台的 Apple 登入。
  - 設定重導向 URI：
    - 在 Services ID 中設置重導向 URI（例如：https://yourapp.com/auth/apple/callback）。
  - 生成密鑰：
    - 進入 Keys -> +，創建新的密鑰，並確保選擇 "Sign In with Apple"。下載生成的 .p8 密鑰檔案。
      - .p8 檔案是純文字檔案

- 取得 APPLE_TEAM_ID
  - 登入 Apple Developer Account：
  - 前往 Apple Developer Account 並登入。
  - 檢查團隊 ID：
  - 點擊你的名字，然後在下拉選單中選擇 "Membership"。在 "Membership Details" 中，你會看到 Team ID。

- 取得 APPLE_CLIENT_ID
  - 登入 Apple Developer Account：
  - 前往 Apple Developer Account 並登入。
  - 檢查 App ID：
  - 前往 Certificates, Identifiers & Profiles -> Identifiers。找到你為應用創建的 App ID。這個 App ID 就是你的 APPLE_CLIENT_ID。

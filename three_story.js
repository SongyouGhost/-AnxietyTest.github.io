var story = [
        {
          id: 0,
          text: "你好！歡迎來到尤尼改造公司<br>我們是現今業界最強的外貌基因改造公司<br>致力於讓所有人都擁有自己的獨特<br>請問你今天也是來改造的嗎？",
          choices: [
            { text: "是的", nextId: 1 },
          ],
          avatars: ""
        },
        {
          id: 1,
          text: '在這之前<br>我們要先和你說明<br>本公司為什麼要提供這樣的服務。',
          choices: [
            { text: "(繼續)", nextId: 2 },
          ],
          avatars: ""
        },
        {
          id: 2,
          text: "那麼在進行改造之前，我們要先來填寫一些基本資料和進行簡單的測驗來評估您的需求。",
          choices: [
            { text: "沒問題!", nextId: 3 },
          ],
          avatars: "this_is.png"
        },
        {
          id: 3,
          text: "<a href='one_survey.html'>填寫問卷</a>",
          choices: [
          ],
          avatars: ""
        }
      ];
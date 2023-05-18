var story = [
        {
          id: 0,
          text: "<h2>MBTI測驗</h2><br><input id='inputNumber' type='text' placeholder='輸入文字'>" + "{number}" + "<input type='submit' value='確認'>" 
          + "<label for='name'>Name:</label><input type='text' id='name' name='name'><br><br><label for='phone'>Phone:</label><input type='text' id='phone' name='phone'><br><br><button onclick='submitForm()'>Submit</button><div id='output'></div>",
          choices: [
            { text: "繼續", nextId: 1 },
          ],
          avatars: "ImageMBTI.png"
        },
        {
          id: 1,
          text: '${name}<br>Phone: ${phone}',
          choices: [
            { text: "有些", nextId: 2 },
            { text: "不", nextId: 3 }
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 2,
          text: "<p>社恐？</p>",
          choices: [
            { text: "有", nextId: 4 },
            { text: "沒阿", nextId: 5 },
          ],
          avatars: "this_is.png"
        },
        {
          id: 3,
          text: "<p>規則？</p>",
          choices: [
            { text: "就是要拿來打破的", nextId: 9 },
            { text: "為了社會是必須的", nextId: 6 },
            { text: "不會讓別人不適就好", nextId: 16 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 4,
          text: "<p>理性嗎？</p>",
          choices: [
            { text: "是", nextId: 7 },
            { text: "不", nextId: 8 }
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 5,
          text: "<p>有點雞掰?</p>",
          choices: [
            { text: "不", nextId: 18 },
            { text: "多多少少", nextId: 14 }
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 6,
          text: "<p>強加於他人之上?</p>",
          choices: [
            { text: "是", nextId: 10 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 7,
          text: "<p>感性嗎?</p>",
          choices: [
            { text: "是", nextId: 18 },
            { text: "不", nextId: 11 },
            { text: "哭天喊地", nextId: 19 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 8,
          text: "<p>感性嗎</p>",
          choices: [
            { text: "是", nextId: 18 },
            { text: "哭天喊地", nextId: 19 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 9,
          text: "<p>極限運動?</p>",
          choices: [
            { text: "爽啦", nextId: 20 },
            { text: "我寧願吸毒", nextId: 13 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 10,
          text: "<p>透過大吼大叫?</p>",
          choices: [
            { text: "沒錯", nextId: 21 },
            { text: "不", nextId: 22 }
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 11,
          text: "<p>確定?</p>",
          choices: [
            { text: "鐵石心腸", nextId: 23 },
            { text: "很複雜啦", nextId: 12 }
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 12,
          text: "<p>重型機械？</p>",
          choices: [
            { text: "超愛", nextId: 24 },
            { text: "還好啦", nextId: 25 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 13,
          text: "<p>安靜吸</p>",
          choices: [
            { text: "恩恩", nextId: 28 },
            { text: "才不", nextId: 27 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 14,
          text: "<p>懶?</p>",
          choices: [
            { text: "對阿", nextId: 15 },
            { text: "沒", nextId: 29 }
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 15,
          text: "<p>星座運勢?</p>",
          choices: [
            { text: "最近水逆了哭哭", nextId: 26 },
            { text: "狗屁", nextId: 31 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 16,
          text: "<p>約炮?</p>",
          choices: [
            { text: "可能喔", nextId: 17 },
            { text: "*附誦佛經", nextId: 30 }
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 17,
          text: "<p>有受過大學教育嗎?</p>",
          choices: [
            { text: "性別研究學", nextId: 32 },
            { text: "沒", nextId: 33 }
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 18,
          text: "<h2>INFJ</h2>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 19,
          text: "<p>INFP</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 20,
          text: "<p>ESTP</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 21,
          text: "<p>ESTJ</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 22,
          text: "<p>ISTJ</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 23,
          text: "<p>INTJ</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 24,
          text: "<p>ISTP</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 25,
          text: "<p>INTP</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 26,
          text: "<p>ENFP</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 27,
          text: "<p>ESFP</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 28,
          text: "<p>ISFP</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 29,
          text: "<p>ENTJ</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 30,
          text: "<p>INFJ</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 31,
          text: "<p>ENTP</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 32,
          text: "<p>ENFJ</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 33,
          text: "<p>ESFJ</p>",
          choices: [
            { text: "好的", nextId: 34 },
          ],
          avatars: "doodle_art.png"
        },
        {
          id: 34,
          text: "<p><a href='index_grid.html'>真是謝囉回到首頁</a></p>",
          choices: [
            { text: "重新開始", nextId: 0 },
          ],
          avatars: "doodle_art.png"
        },
      ];
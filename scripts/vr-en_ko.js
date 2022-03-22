//------------------------- 개별 키 정보 --------------------------
const keyParams = [
  {type: "normal", lang: "ko", name: "`", positionX: -5.5, positionY: 3, keyImage: "images/qwerty/normal/100.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "1", positionX: -4.5, positionY: 3, keyImage: "images/qwerty/normal/101.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "2", positionX: -3.5, positionY: 3, keyImage: "images/qwerty/normal/102.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "3", positionX: -2.5, positionY: 3, keyImage: "images/qwerty/normal/103.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "4", positionX: -1.5, positionY: 3, keyImage: "images/qwerty/normal/104.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "5", positionX: -0.5, positionY: 3, keyImage: "images/qwerty/normal/105.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "6", positionX: 0.5, positionY: 3, keyImage: "images/qwerty/normal/106.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "7", positionX: 1.5, positionY: 3, keyImage: "images/qwerty/normal/107.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "8", positionX: 2.5, positionY: 3, keyImage: "images/qwerty/normal/108.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "9", positionX: 3.5, positionY: 3, keyImage: "images/qwerty/normal/109.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "0", positionX: 4.5, positionY: 3, keyImage: "images/qwerty/normal/110.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "backspace", positionX: 5.5, positionY: 3, keyImage: "images/qwerty/common/del.png", width: 1, height: 1},

  {type: "shift", lang: "ko", name: "~", positionX: -5.5, positionY: 3, keyImage: "images/qwerty/shift/100.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "!", positionX: -4.5, positionY: 3, keyImage: "images/qwerty/shift/101.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "@", positionX: -3.5, positionY: 3, keyImage: "images/qwerty/shift/102.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "#", positionX: -2.5, positionY: 3, keyImage: "images/qwerty/shift/103.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "$", positionX: -1.5, positionY: 3, keyImage: "images/qwerty/shift/104.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "%", positionX: -0.5, positionY: 3, keyImage: "images/qwerty/shift/105.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "^", positionX: 0.5, positionY: 3, keyImage: "images/qwerty/shift/106.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "&", positionX: 1.5, positionY: 3, keyImage: "images/qwerty/shift/107.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "*", positionX: 2.5, positionY: 3, keyImage: "images/qwerty/shift/108.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "(", positionX: 3.5, positionY: 3, keyImage: "images/qwerty/shift/109.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: ")", positionX: 4.5, positionY: 3, keyImage: "images/qwerty/shift/110.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "backspace", positionX: 5.5, positionY: 3, keyImage: "images/qwerty/common/del.png", width: 1, height: 1},

  {type: "normal", lang: "en", name: "`", positionX: -5.5, positionY: 3, keyImage: "images/qwerty/normal/100.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "1", positionX: -4.5, positionY: 3, keyImage: "images/qwerty/normal/101.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "2", positionX: -3.5, positionY: 3, keyImage: "images/qwerty/normal/102.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "3", positionX: -2.5, positionY: 3, keyImage: "images/qwerty/normal/103.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "4", positionX: -1.5, positionY: 3, keyImage: "images/qwerty/normal/104.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "5", positionX: -0.5, positionY: 3, keyImage: "images/qwerty/normal/105.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "6", positionX: 0.5, positionY: 3, keyImage: "images/qwerty/normal/106.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "7", positionX: 1.5, positionY: 3, keyImage: "images/qwerty/normal/107.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "8", positionX: 2.5, positionY: 3, keyImage: "images/qwerty/normal/108.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "9", positionX: 3.5, positionY: 3, keyImage: "images/qwerty/normal/109.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "0", positionX: 4.5, positionY: 3, keyImage: "images/qwerty/normal/110.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "backspace", positionX: 5.5, positionY: 3, keyImage: "images/qwerty/common/del.png", width: 1, height: 1},

  {type: "shift", lang: "en", name: "~", positionX: -5.5, positionY: 3, keyImage: "images/qwerty/shift/100.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "!", positionX: -4.5, positionY: 3, keyImage: "images/qwerty/shift/101.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "@", positionX: -3.5, positionY: 3, keyImage: "images/qwerty/shift/102.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "#", positionX: -2.5, positionY: 3, keyImage: "images/qwerty/shift/103.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "$", positionX: -1.5, positionY: 3, keyImage: "images/qwerty/shift/104.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "%", positionX: -0.5, positionY: 3, keyImage: "images/qwerty/shift/105.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "^", positionX: 0.5, positionY: 3, keyImage: "images/qwerty/shift/106.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "&", positionX: 1.5, positionY: 3, keyImage: "images/qwerty/shift/107.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "*", positionX: 2.5, positionY: 3, keyImage: "images/qwerty/shift/108.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "(", positionX: 3.5, positionY: 3, keyImage: "images/qwerty/shift/109.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: ")", positionX: 4.5, positionY: 3, keyImage: "images/qwerty/shift/110.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "backspace", positionX: 5.5, positionY: 3, keyImage: "images/qwerty/common/del.png", width: 1, height: 1},


  {type: "normal", lang: "ko", name: "ㅂ", positionX: -5.5, positionY: 2, keyImage: "images/qwerty/normal/200.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅈ", positionX: -4.5, positionY: 2, keyImage: "images/qwerty/normal/201.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㄷ", positionX: -3.5, positionY: 2, keyImage: "images/qwerty/normal/202.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㄱ", positionX: -2.5, positionY: 2, keyImage: "images/qwerty/normal/203.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅅ", positionX: -1.5, positionY: 2, keyImage: "images/qwerty/normal/204.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅛ", positionX: -0.5, positionY: 2, keyImage: "images/qwerty/normal/205.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅕ", positionX: 0.5, positionY: 2, keyImage: "images/qwerty/normal/206.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅑ", positionX: 1.5, positionY: 2, keyImage: "images/qwerty/normal/207.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅐ", positionX: 2.5, positionY: 2, keyImage: "images/qwerty/normal/208.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅔ", positionX: 3.5, positionY: 2, keyImage: "images/qwerty/normal/209.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "blank", positionX: 4.5, positionY: 2, keyImage: "images/qwerty/common/blank.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "blank", positionX: 5.5, positionY: 2, keyImage: "images/qwerty/common/blank.png", width: 1, height: 1},

  {type: "shift", lang: "ko", name: "ㅃ", positionX: -5.5, positionY: 2, keyImage: "images/qwerty/shift/200.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅉ", positionX: -4.5, positionY: 2, keyImage: "images/qwerty/shift/201.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㄸ", positionX: -3.5, positionY: 2, keyImage: "images/qwerty/shift/202.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㄲ", positionX: -2.5, positionY: 2, keyImage: "images/qwerty/shift/203.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅆ", positionX: -1.5, positionY: 2, keyImage: "images/qwerty/shift/204.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅛ", positionX: -0.5, positionY: 2, keyImage: "images/qwerty/shift/205.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅕ", positionX: 0.5, positionY: 2, keyImage: "images/qwerty/shift/206.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅑ", positionX: 1.5, positionY: 2, keyImage: "images/qwerty/shift/207.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅒ", positionX: 2.5, positionY: 2, keyImage: "images/qwerty/shift/208.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅖ", positionX: 3.5, positionY: 2, keyImage: "images/qwerty/shift/209.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "blank", positionX: 4.5, positionY: 2, keyImage: "images/qwerty/common/blank.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "blank", positionX: 5.5, positionY: 2, keyImage: "images/qwerty/common/blank.png", width: 1, height: 1},

  {type: "normal", lang: "en", name: "q", positionX: -5.5, positionY: 2, keyImage: "images/qwerty/normal/200.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "w", positionX: -4.5, positionY: 2, keyImage: "images/qwerty/normal/201.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "e", positionX: -3.5, positionY: 2, keyImage: "images/qwerty/normal/202.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "r", positionX: -2.5, positionY: 2, keyImage: "images/qwerty/normal/203.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "t", positionX: -1.5, positionY: 2, keyImage: "images/qwerty/normal/204.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "y", positionX: -0.5, positionY: 2, keyImage: "images/qwerty/normal/205.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "u", positionX: 0.5, positionY: 2, keyImage: "images/qwerty/normal/206.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "i", positionX: 1.5, positionY: 2, keyImage: "images/qwerty/normal/207.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "o", positionX: 2.5, positionY: 2, keyImage: "images/qwerty/normal/208.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "p", positionX: 3.5, positionY: 2, keyImage: "images/qwerty/normal/209.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "blank", positionX: 4.5, positionY: 2, keyImage: "images/qwerty/common/blank.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "blank", positionX: 5.5, positionY: 2, keyImage: "images/qwerty/common/blank.png", width: 1, height: 1},

  {type: "shift", lang: "en", name: "Q", positionX: -5.5, positionY: 2, keyImage: "images/qwerty/shift/200.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "W", positionX: -4.5, positionY: 2, keyImage: "images/qwerty/shift/201.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "E", positionX: -3.5, positionY: 2, keyImage: "images/qwerty/shift/202.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "R", positionX: -2.5, positionY: 2, keyImage: "images/qwerty/shift/203.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "T", positionX: -1.5, positionY: 2, keyImage: "images/qwerty/shift/204.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "Y", positionX: -0.5, positionY: 2, keyImage: "images/qwerty/shift/205.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "U", positionX: 0.5, positionY: 2, keyImage: "images/qwerty/shift/206.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "I", positionX: 1.5, positionY: 2, keyImage: "images/qwerty/shift/207.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "O", positionX: 2.5, positionY: 2, keyImage: "images/qwerty/shift/208.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "P", positionX: 3.5, positionY: 2, keyImage: "images/qwerty/shift/209.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "blank", positionX: 4.5, positionY: 2, keyImage: "images/qwerty/common/blank.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "blank", positionX: 5.5, positionY: 2, keyImage: "images/qwerty/common/blank.png", width: 1, height: 1},


  {type: "normal", lang: "ko", name: "ㅁ", positionX: -5.5, positionY: 1, keyImage: "images/qwerty/normal/300.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㄴ", positionX: -4.5, positionY: 1, keyImage: "images/qwerty/normal/301.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅇ", positionX: -3.5, positionY: 1, keyImage: "images/qwerty/normal/302.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㄹ", positionX: -2.5, positionY: 1, keyImage: "images/qwerty/normal/303.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅎ", positionX: -1.5, positionY: 1, keyImage: "images/qwerty/normal/304.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅗ", positionX: -0.5, positionY: 1, keyImage: "images/qwerty/normal/305.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅓ", positionX: 0.5, positionY: 1, keyImage: "images/qwerty/normal/306.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅏ", positionX: 1.5, positionY: 1, keyImage: "images/qwerty/normal/307.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅣ", positionX: 2.5, positionY: 1, keyImage: "images/qwerty/normal/308.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "blank", positionX: 3.5, positionY: 1, keyImage: "images/qwerty/common/blank.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "enter", positionX: 5.0, positionY: 1, keyImage: "images/number/common/enter.png", width: 2, height: 1},

  {type: "shift", lang: "ko", name: "ㅁ", positionX: -5.5, positionY: 1, keyImage: "images/qwerty/shift/300.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㄴ", positionX: -4.5, positionY: 1, keyImage: "images/qwerty/shift/301.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅇ", positionX: -3.5, positionY: 1, keyImage: "images/qwerty/shift/302.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㄹ", positionX: -2.5, positionY: 1, keyImage: "images/qwerty/shift/303.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅎ", positionX: -1.5, positionY: 1, keyImage: "images/qwerty/shift/304.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅗ", positionX: -0.5, positionY: 1, keyImage: "images/qwerty/shift/305.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅓ", positionX: 0.5, positionY: 1, keyImage: "images/qwerty/shift/306.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅏ", positionX: 1.5, positionY: 1, keyImage: "images/qwerty/shift/307.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅣ", positionX: 2.5, positionY: 1, keyImage: "images/qwerty/shift/308.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "blank", positionX: 3.5, positionY: 1, keyImage: "images/qwerty/common/blank.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "enter", positionX: 5.0, positionY: 1, keyImage: "images/number/common/enter.png", width: 2, height: 1},

  {type: "normal", lang: "en", name: "a", positionX: -5.5, positionY: 1, keyImage: "images/qwerty/normal/300.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "s", positionX: -4.5, positionY: 1, keyImage: "images/qwerty/normal/301.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "d", positionX: -3.5, positionY: 1, keyImage: "images/qwerty/normal/302.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "f", positionX: -2.5, positionY: 1, keyImage: "images/qwerty/normal/303.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "g", positionX: -1.5, positionY: 1, keyImage: "images/qwerty/normal/304.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "h", positionX: -0.5, positionY: 1, keyImage: "images/qwerty/normal/305.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "j", positionX: 0.5, positionY: 1, keyImage: "images/qwerty/normal/306.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "k", positionX: 1.5, positionY: 1, keyImage: "images/qwerty/normal/307.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "l", positionX: 2.5, positionY: 1, keyImage: "images/qwerty/normal/308.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "blank", positionX: 3.5, positionY: 1, keyImage: "images/qwerty/common/blank.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "enter", positionX: 5.0, positionY: 1, keyImage: "images/number/common/enter.png", width: 2, height: 1},

  {type: "shift", lang: "en", name: "A", positionX: -5.5, positionY: 1, keyImage: "images/qwerty/shift/300.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "S", positionX: -4.5, positionY: 1, keyImage: "images/qwerty/shift/301.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "D", positionX: -3.5, positionY: 1, keyImage: "images/qwerty/shift/302.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "F", positionX: -2.5, positionY: 1, keyImage: "images/qwerty/shift/303.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "G", positionX: -1.5, positionY: 1, keyImage: "images/qwerty/shift/304.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "H", positionX: -0.5, positionY: 1, keyImage: "images/qwerty/shift/305.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "J", positionX: 0.5, positionY: 1, keyImage: "images/qwerty/shift/306.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "K", positionX: 1.5, positionY: 1, keyImage: "images/qwerty/shift/307.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "L", positionX: 2.5, positionY: 1, keyImage: "images/qwerty/shift/308.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "blank", positionX: 3.5, positionY: 1, keyImage: "images/qwerty/common/blank.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "enter", positionX: 5.0, positionY: 1, keyImage: "images/number/common/enter.png", width: 2, height: 1},


  {type: "normal", lang: "ko", name: "shift-lower", positionX: -4.5, positionY: 0, keyImage: "images/qwerty/normal/600.png", width: 3, height: 1},
  {type: "normal", lang: "ko", name: "ㅋ", positionX: -2.5, positionY: 0, keyImage: "images/qwerty/normal/400.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅌ", positionX: -1.5, positionY: 0, keyImage: "images/qwerty/normal/401.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅊ", positionX: -0.5, positionY: 0, keyImage: "images/qwerty/normal/402.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅍ", positionX: 0.5, positionY: 0, keyImage: "images/qwerty/normal/403.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅠ", positionX: 1.5, positionY: 0, keyImage: "images/qwerty/normal/404.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅜ", positionX: 2.5, positionY: 0, keyImage: "images/qwerty/normal/405.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "ㅡ", positionX: 3.5, positionY: 0, keyImage: "images/qwerty/normal/406.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "korean", positionX: 4.5, positionY: 0, keyImage: "images/qwerty/common/ko.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "clear", positionX: 5.5, positionY: 0, keyImage: "images/qwerty/common/clear.png", width: 1, height: 1},

  {type: "shift", lang: "ko", name: "shift-upper", positionX: -4.5, positionY: 0, keyImage: "images/qwerty/shift/600.png", width: 3, height: 1},
  {type: "shift", lang: "ko", name: "ㅋ", positionX: -2.5, positionY: 0, keyImage: "images/qwerty/shift/400.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅌ", positionX: -1.5, positionY: 0, keyImage: "images/qwerty/shift/401.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅊ", positionX: -0.5, positionY: 0, keyImage: "images/qwerty/shift/402.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅍ", positionX: 0.5, positionY: 0, keyImage: "images/qwerty/shift/403.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅠ", positionX: 1.5, positionY: 0, keyImage: "images/qwerty/shift/404.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅜ", positionX: 2.5, positionY: 0, keyImage: "images/qwerty/shift/405.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "ㅡ", positionX: 3.5, positionY: 0, keyImage: "images/qwerty/shift/406.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "korean", positionX: 4.5, positionY: 0, keyImage: "images/qwerty/common/ko.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "clear", positionX: 5.5, positionY: 0, keyImage: "images/qwerty/common/clear.png", width: 1, height: 1},

  {type: "normal", lang: "en", name: "shift-lower", positionX: -4.5, positionY: 0, keyImage: "images/qwerty/normal/600.png", width: 3, height: 1},
  {type: "normal", lang: "en", name: "z", positionX: -2.5, positionY: 0, keyImage: "images/qwerty/normal/400.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "x", positionX: -1.5, positionY: 0, keyImage: "images/qwerty/normal/401.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "c", positionX: -0.5, positionY: 0, keyImage: "images/qwerty/normal/402.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "v", positionX: 0.5, positionY: 0, keyImage: "images/qwerty/normal/403.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "b", positionX: 1.5, positionY: 0, keyImage: "images/qwerty/normal/404.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "n", positionX: 2.5, positionY: 0, keyImage: "images/qwerty/normal/405.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "m", positionX: 3.5, positionY: 0, keyImage: "images/qwerty/normal/406.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "english", positionX: 4.5, positionY: 0, keyImage: "images/qwerty/common/en.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "clear", positionX: 5.5, positionY: 0, keyImage: "images/qwerty/common/clear.png", width: 1, height: 1},

  {type: "shift", lang: "en", name: "shift-upper", positionX: -4.5, positionY: 0, keyImage: "images/qwerty/shift/600.png", width: 3, height: 1},
  {type: "shift", lang: "en", name: "Z", positionX: -2.5, positionY: 0, keyImage: "images/qwerty/shift/400.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "X", positionX: -1.5, positionY: 0, keyImage: "images/qwerty/shift/401.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "C", positionX: -0.5, positionY: 0, keyImage: "images/qwerty/shift/402.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "V", positionX: 0.5, positionY: 0, keyImage: "images/qwerty/shift/403.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "B", positionX: 1.5, positionY: 0, keyImage: "images/qwerty/shift/404.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "N", positionX: 2.5, positionY: 0, keyImage: "images/qwerty/shift/405.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "M", positionX: 3.5, positionY: 0, keyImage: "images/qwerty/shift/406.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "english", positionX: 4.5, positionY: 0, keyImage: "images/qwerty/common/en.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "clear", positionX: 5.5, positionY: 0, keyImage: "images/qwerty/common/clear.png", width: 1, height: 1},


  {type: "normal", lang: "ko", name: "-", positionX: -5.5, positionY: -1, keyImage: "images/qwerty/normal/500.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "=", positionX: -4.5, positionY: -1, keyImage: "images/qwerty/normal/501.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "\\", positionX: -3.5, positionY: -1, keyImage: "images/qwerty/normal/502.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "[", positionX: -2.5, positionY: -1, keyImage: "images/qwerty/normal/503.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "]", positionX: -1.5, positionY: -1, keyImage: "images/qwerty/normal/504.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "space", positionX: 0, positionY: -1, keyImage: "images/qwerty/common/space.png", width: 2, height: 1},
  {type: "normal", lang: "ko", name: ";", positionX: 1.5, positionY: -1, keyImage: "images/qwerty/normal/505.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "'", positionX: 2.5, positionY: -1, keyImage: "images/qwerty/normal/506.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: ",", positionX: 3.5, positionY: -1, keyImage: "images/qwerty/normal/507.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: ".", positionX: 4.5, positionY: -1, keyImage: "images/qwerty/normal/508.png", width: 1, height: 1},
  {type: "normal", lang: "ko", name: "/", positionX: 5.5, positionY: -1, keyImage: "images/qwerty/normal/509.png", width: 1, height: 1},

  {type: "shift", lang: "ko", name: "_", positionX: -5.5, positionY: -1, keyImage: "images/qwerty/shift/500.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "+", positionX: -4.5, positionY: -1, keyImage: "images/qwerty/shift/501.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "|", positionX: -3.5, positionY: -1, keyImage: "images/qwerty/shift/502.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "{", positionX: -2.5, positionY: -1, keyImage: "images/qwerty/shift/503.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "}", positionX: -1.5, positionY: -1, keyImage: "images/qwerty/shift/504.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "space", positionX: 0, positionY: -1, keyImage: "images/qwerty/common/space.png", width: 2, height: 1},
  {type: "shift", lang: "ko", name: ":", positionX: 1.5, positionY: -1, keyImage: "images/qwerty/shift/505.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "", positionX: 2.5, positionY: -1, keyImage: "images/qwerty/shift/506.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "<", positionX: 3.5, positionY: -1, keyImage: "images/qwerty/shift/507.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: ">", positionX: 4.5, positionY: -1, keyImage: "images/qwerty/shift/508.png", width: 1, height: 1},
  {type: "shift", lang: "ko", name: "?", positionX: 5.5, positionY: -1, keyImage: "images/qwerty/shift/509.png", width: 1, height: 1},

  {type: "normal", lang: "en", name: "-", positionX: -5.5, positionY: -1, keyImage: "images/qwerty/normal/500.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "=", positionX: -4.5, positionY: -1, keyImage: "images/qwerty/normal/501.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "\\", positionX: -3.5, positionY: -1, keyImage: "images/qwerty/normal/502.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "[", positionX: -2.5, positionY: -1, keyImage: "images/qwerty/normal/503.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "]", positionX: -1.5, positionY: -1, keyImage: "images/qwerty/normal/504.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "space", positionX: 0, positionY: -1, keyImage: "images/qwerty/common/space.png", width: 2, height: 1},
  {type: "normal", lang: "en", name: ";", positionX: 1.5, positionY: -1, keyImage: "images/qwerty/normal/505.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "'", positionX: 2.5, positionY: -1, keyImage: "images/qwerty/normal/506.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: ",", positionX: 3.5, positionY: -1, keyImage: "images/qwerty/normal/507.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: ".", positionX: 4.5, positionY: -1, keyImage: "images/qwerty/normal/508.png", width: 1, height: 1},
  {type: "normal", lang: "en", name: "/", positionX: 5.5, positionY: -1, keyImage: "images/qwerty/normal/509.png", width: 1, height: 1},

  {type: "shift", lang: "en", name: "_", positionX: -5.5, positionY: -1, keyImage: "images/qwerty/shift/500.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "+", positionX: -4.5, positionY: -1, keyImage: "images/qwerty/shift/501.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "|", positionX: -3.5, positionY: -1, keyImage: "images/qwerty/shift/502.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "{", positionX: -2.5, positionY: -1, keyImage: "images/qwerty/shift/503.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "}", positionX: -1.5, positionY: -1, keyImage: "images/qwerty/shift/504.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "space", positionX: 0, positionY: -1, keyImage: "images/qwerty/common/space.png", width: 2, height: 1},
  {type: "shift", lang: "en", name: ":", positionX: 1.5, positionY: -1, keyImage: "images/qwerty/shift/505.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "", positionX: 2.5, positionY: -1, keyImage: "images/qwerty/shift/506.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "<", positionX: 3.5, positionY: -1, keyImage: "images/qwerty/shift/507.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: ">", positionX: 4.5, positionY: -1, keyImage: "images/qwerty/shift/508.png", width: 1, height: 1},
  {type: "shift", lang: "en", name: "?", positionX: 5.5, positionY: -1, keyImage: "images/qwerty/shift/509.png", width: 1, height: 1}

];

// 키캡을 생성 한다.
const buildKeypad = function (scene, parent, type, lang) {
  keyParams.forEach(key => {
    if(type == key.type){
      if(lang == key.lang){
        buildKeyCap(scene, parent, key.name, key.positionX, key.positionY, key.keyImage, key.width, key.height);
      }
    }
  })
};

// 키보드 뒷 판넬을 생성한다.
const buildKeyboardPanel = function (scene, parent) {
  var img = new Image();
  img.src = "images/qwerty/common/bground.png";
  var mat = new BABYLON.StandardMaterial("mat", scene);
  mat.diffuseTexture = new BABYLON.Texture(img.src, scene);

  // 한면에만 텍스쳐 이미지를 입힌다.
  var faceUV = new Array(6);
  for (var i = 0; i < 6; i++) {
    faceUV[i] = new BABYLON.Vector4(0, 0, 0, 0);
  }
  faceUV[1] = new BABYLON.Vector4(0, 0, 1, 1);

  let keyCap = BABYLON.MeshBuilder.CreateBox("keyboardPanel", {width: 13, height: 6, depth: 0.2, faceUV: faceUV}, scene);
  keyCap.position.z = 0.2;
  keyCap.position.y = 1;
  //keyCap.parent = parent;
  keyCap.material = mat;
}

// 개별 키캡을 생성한다.
const buildKeyCap = function (scene, parent, name, positionX, positionY, capImage, width, height) {

  var img = new Image();
  img.src = capImage;
  var mat = new BABYLON.StandardMaterial("mat", scene);
  mat.diffuseTexture = new BABYLON.Texture(img.src, scene);
  mat.diffuseTexture.hasAlpha = true;
  //mat.opacityFresnel = false;
  //mat.shadowLevel = 0.4;
  mat.diffuseColor = new BABYLON.Color3(1, 1, 1);

  // 한면에만 텍스쳐 이미지를 입힌다.
  var faceUV = new Array(6);
  for (var i = 0; i < 6; i++) {
    faceUV[i] = new BABYLON.Vector4(0, 0, 0, 0);
  }
  faceUV[1] = new BABYLON.Vector4(0, 0, 1, 1);

  let keyCap = BABYLON.MeshBuilder.CreateBox(name, {width: width, height: height, depth: 0.3, faceUV: faceUV}, scene);
  keyCap.position.x = positionX;
  keyCap.position.y = positionY;
  keyCap.parent = parent;
  keyCap.material = mat;

  return keyCap;

};

const enterKeyCap = function (scene, parent, name, positionX, positionY, capImage) {

  var img = new Image();
  img.src = "images/number/common/enter.png";;
  var mat = new BABYLON.StandardMaterial("mat", scene);
  mat.diffuseTexture = new BABYLON.Texture(img.src, scene);

  // 한면에만 텍스쳐 이미지를 입힌다.
  var faceUV = new Array(6);
  for (var i = 0; i < 6; i++) {
    faceUV[i] = new BABYLON.Vector4(0, 0, 0, 0);
  }
  faceUV[1] = new BABYLON.Vector4(0, 0, 1, 1);

  var keyCap = BABYLON.MeshBuilder.CreateBox("nkeyBottom", {width: 2, height: 1, depth: 0.3, faceUV: faceUV}, scene);
  keyCap.position.x = positionX - 0.5;
  keyCap.position.y = positionY;
  keyCap.parent = parent;
  keyCap.material = mat;
  /*
  var keyTop = BABYLON.MeshBuilder.CreateBox("nkeyTop", {width: 1, height: 1, depth: 0.3, faceUV: faceUV}, scene);
  keyTop.position.x = positionX;
  keyTop.position.y = positionY + 1;
  keyTop.parent = parent;
  //keyTop.material = mat;

  var img = new Image();
  img.src = "images/qwerty/common/enter2.png";;
  var mat = new BABYLON.StandardMaterial("mat", scene);
  mat.diffuseTexture = new BABYLON.Texture(img.src, scene);

  // 한면에만 텍스쳐 이미지를 입힌다.
  var faceUV = new Array(6);
  for (var i = 0; i < 6; i++) {
    faceUV[i] = new BABYLON.Vector4(0, 0, 0, 0);
  }
  faceUV[1] = new BABYLON.Vector4(0, 0, 1, 1);

  var keyCap = BABYLON.Mesh.MergeMeshes([keyBottom, keyTop], true, false, null, false, false);
  keyCap.name = name;
  keyCap.parent = parent;
  //keyCap.material = mat;
  */
  return keyCap;

};

// 생성된 키캡 매쉬를 모두 제거
const removeAllKeypad = function(parent){
  for(let i = parent._children.length - 1; i >= 0 ; i--) {
    let mesh = parent._children[i];
    if(mesh.name != "keyboardPanel"){
      //console.log("mesh n: " + mesh.name);
      mesh.dispose(true, false);
    }
  }
};

// scene 생성
const createScene = async function(engine) {

  const scale = 0.2;
  const scene = new BABYLON.Scene(engine);

  //const alpha =  3*Math.PI/2;
  const alpha = -Math.PI/2;
  const beta = Math.PI/2;
  const radius = 80*scale;
  const target = new BABYLON.Vector3(0, 0, 0);

  const camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, scene);
  camera.wheelDeltaPercentage = 0.01;
  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = 2.0;


  // sky background --------------------------------------------------------------
  var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
  var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("images/TropicalSunnyDay", scene);
  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.disableLighting = true;
  skybox.material = skyboxMaterial;
  skybox.isPickable = false;

  // VR 디바이스로 전송
  const xrHelper = await scene.createDefaultXRExperienceAsync();

  // 키보드 레이아웃용 부모 노드
  const keyboard = new BABYLON.TransformNode("keyboard");

  const plane = BABYLON.Mesh.CreatePlane("plane", 12, scene, false, BABYLON.Mesh.DEFAULTSIDE);
  //plane.parent = keyboard;
  plane.position.y = 2.8;

  const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);

  const vrInput = new BABYLON.GUI.InputText("vrInput");
  vrInput.top = "-180px";
  vrInput.width = 1;
  vrInput.height = 0.12;
  //vrInput.left = "200px";
  vrInput.text = "";
  vrInput.alpha = 0.7;
  vrInput.fontSize = 40;
  vrInput.color = "white";
  vrInput.background = "#232626";
  vrInput.isReadOnly = true;
  advancedTexture.addControl(vrInput);

  const logoImg = new BABYLON.GUI.Image("logo", "images/footer_logo.png");
  logoImg.top = "470px";
  logoImg.width = 0.22;
  logoImg.height = 0.15;
  logoImg.left = "0px";
  advancedTexture.addControl(logoImg);

  /*
  const inputField = document.createElement('input');
  inputField.id = "inputField";
  inputField.type = "text";
  inputField.style.position = 'absolute';
  inputField.style.bottom = '40px';
  inputField.style.right = '20px';
  inputField.style.display = 'none';
  document.body.appendChild(inputField);
   */

  // 키보드 클릭 소리
  var typingSound = new BABYLON.Sound("typingSound", "sounds/typingSound.mp3", scene);

  // 캔버스 로딩 이전에 선처리 -----------------------------------------------------
  var observer = scene.onBeforeRenderObservable.add(() => {
    buildKeyboardPanel(scene, keyboard);
    buildKeypad(scene, keyboard, "shift", "en");
    removeAllKeypad(keyboard);
    buildKeypad(scene, keyboard, "normal", "en");
    scene.onBeforeRenderObservable.remove(observer);
  });

  // 키캡 입력 시 다운 처리
  const pointerToKey = new Map();
  scene.onPointerObservable.add((pointerInfo) => {
    switch (pointerInfo.type) {
      case BABYLON.PointerEventTypes.POINTERDOWN:
        // Only take action if the pointer is down on a mesh
        if(pointerInfo.pickInfo.hit) {
          let pickedMesh = pointerInfo.pickInfo.pickedMesh;
          let pointerId = pointerInfo.event.pointerId;
          if (pickedMesh.parent === keyboard) {
            pickedMesh.position.z += 0.2; // Move the key downward
            pointerToKey.set(pointerId, {
              mesh: pickedMesh,
              note: pointerInfo.pickInfo.pickedMesh.name //pianoSound.play(pointerInfo.pickInfo.pickedMesh.name) // Play the sounds of the note
            });
          }
        }
        break;
      case BABYLON.PointerEventTypes.POINTERUP:
        let pointerId = pointerInfo.event.pointerId;
        // Only take action if the released pointer was recorded in pointerToKey
        if (pointerToKey.has(pointerId)) {
          pointerToKey.get(pointerId).mesh.position.z -= 0.2; // Move the key upward
          //pointerToKey.get(pointerId).note.stop(); // Stop the sounds of the note
          pointerToKey.delete(pointerId);
        }
        break;
    }
  });

  // 포인터 선택 값 처리
  scene.onPointerDown = function (evt, pickResult) {
    // 키캡 선택 시에만 처리
    if(pickResult.pickedMesh != null && pickResult.pickedMesh.name != "plane" && pickResult.pickedMesh.name != "keyboardPanel" && pickResult.pickedMesh.name != "vr_controller_01_mrhat_vrtroller_mrhat"){
      console.log("key.name: " + pickResult.pickedMesh.name)
      // 키보드 버튼 클릭 음
      typingSound.play();

      // 눌려진 키캡 테두리 표시
      var hl = new BABYLON.HighlightLayer("hl", scene);
      let alpha = 0.06;
      hl.blurHorizontalSize = 0.8;
      hl.blurVerticalSize = 0.8;
      hl.addMesh(pickResult.pickedMesh, BABYLON.Color3.Blue());
      hl.outerGlow = false;
      setTimeout(function(){
        hl.removeMesh(pickResult.pickedMesh);
      }, 300);

      //버튼 입력 값
      let key = pickResult.pickedMesh.name;

      var text = vrInput.text;

      if(key == "space"){
        key=" ";
        vrInput.text =  text + key;
        //vrInput.onFocus();
      }else if(key == "backspace") {  // 한글이 입력된 후 백스페이스 처리?? -> 이전 글자 분해, 입력값 하나 뺀 후 한글 재조합 ... (이전 입력글자가 콤보인 경우 판단해야함)

        // 마지막 입력된 문자에 대해 처리
        let lastWord = text.substring(text.length-1);
        // 1. 글자가 한글인지 확인
        if(Hangul.isComplete(lastWord)){
          // 2. 한글일 경우 조합된 값 분해, 단 분해한 값이 1 이상일 경우 해당
          let disassembleWord = Hangul.disassemble(lastWord);
          // 3. 분해된 한글의 마지막 배열 값을 삭제(배열 크기가 1보다 클 경우 해당 1개일 경우는 그냥 삭제 처리
          if(disassembleWord.length > 1){
            disassembleWord.pop();
            // 4. 한글 다시 조합
            let lastWord = Hangul.assemble(disassembleWord);
            // 5. 텍스트 박스에 출력
            vrInput.text = text.substring(0, text.length - 1) + lastWord;
          }else{
            // 마지막 입력값 삭제
            text = text.substring(0, text.length - 1);
            vrInput.text = text
          }
        }else{
          // 마지막 입력값 삭제
          text = text.substring(0, text.length - 1);
          vrInput.text = text
        }

      }else if(key == "blank"){

      }else if(key == "shift-lower"){
        let koKey = scene.getMeshByName("korean");
        if(koKey == null){
          removeAllKeypad(keyboard);
          buildKeypad(scene, keyboard, "shift", "en");
        }else{
          removeAllKeypad(keyboard);
          buildKeypad(scene, keyboard, "shift", "ko");
        }
      }else if(key == "shift-upper"){
        let koKey = scene.getMeshByName("korean");
        if(koKey == null){
          removeAllKeypad(keyboard);
          buildKeypad(scene, keyboard, "normal", "en");
        }else{
          removeAllKeypad(keyboard);
          buildKeypad(scene, keyboard, "normal", "ko");
        }
      }else if(key == "korean"){
        removeAllKeypad(keyboard);
        buildKeypad(scene, keyboard, "normal", "en");
      }else if(key == "english"){
        removeAllKeypad(keyboard);
        buildKeypad(scene, keyboard, "normal", "ko");
      }else if(key == "enter"){
        vrInput.text = "";
      }else if(key == "clear"){
        vrInput.text = "";
      }else if(key == "korean"){
        vrInput.text = "";
      }else if(key == "english"){
        vrInput.text = "";
      }else{
        let koKey = scene.getMeshByName("korean");
        if(koKey == null){
          vrInput.text += key;
        }else{ // 한글입력 처리
          writeKorean(key, vrInput);
        }
      }
    }
  }

  return scene;
}

//------------------------- 한글 입력 --------------------------
//index
let chosung_index = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"]; //19개
let joongsung_index = ["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ"]; //22개
let jongsung_index = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ","ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", //28개
  "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

let Jcombo_index=["ㄳ","ㄵ","ㄶ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅄ"]; //11개
let Jcombo=["ㄱㅅ","ㄴㅈ","ㄴㅎ","ㄹㄱ","ㄹㅁ","ㄹㅂ","ㄹㅅ","ㄹㅌ","ㄹㅍ","ㄹㅎ","ㅂㅅ"];
let Mcombo_index =['ㅘ','ㅙ','ㅚ','ㅝ','ㅞ','ㅟ','ㅢ']; //7개
let Mcombo=['ㅗㅏ','ㅗㅐ','ㅗㅣ','ㅜㅓ','ㅜㅔ','ㅜㅣ','ㅡㅣ'];

// 자음, 모음 구분 함수
const JM = function(char_uni){ // 글자가 자음인가 모음인가?
  if(char_uni >= 12593 && char_uni <= 12622){
    return "J";
  }else if(char_uni >= 12623 && char_uni <= 12643){
    return "M";
  }else{
    return "";
  }
}

// 입력된 한글값 조합 처리를 한다.
const writeKorean = function(key, vrInput){

  //조합된 값
  var hangeul = "";
  // vrInput 값
  var text = vrInput.text
  //vrInput 마지막 문자
  var lasttext = text.substring(text.length-1);

  //입력된 값이 한글인지 확인 하여 처리 한다.
  let isHangeulKey = false;
  chosung_index.forEach(inkey => {
    if(inkey == key){
      isHangeulKey = true;
    }
  });
  joongsung_index.forEach(inkey => {
    if(inkey == key){
      isHangeulKey = true;
    }
  });

  if(isHangeulKey) {

    if(lasttext != ""){//마지막 문자가 공백이 아닐 경우만 실행
      //마지막 문자의 유니코드
      var lasttext_uni = lasttext.charCodeAt(0);
      //1. 마지막 글자의 초성,중성,종성과 인덱스 구하기
      var chosung;
      var joongsung;
      var jongsung;
      var jong_idx;
      var joong_idx;
      var cho_idx;

      if(JM(lasttext_uni)=="J"){ //마지막 문자가 하나의 자음만 있는 경우
        chosung = lasttext;
        joongsung = "";
        jongsung = "";
      }else if(JM(lasttext_uni)=="M"){ //마지막 문자가 하나의 모음만 있는 경우
        chosung = "";
        joongsung = lasttext;
        jongsung = "";
      }else{ //마지막 문자가 하나의 자음이나 모음이 아닌경우
        //마지막 문자에서 AC00을 뺀다
        var lastchar_uni_cal = lasttext_uni-44032;
        //마지막 문자의 초성, 중성, 종성의 인덱스 구하기
        //한글음절위치 = ((초성index * 21) + 중성index) * 28 + 종성index
        jong_idx = lastchar_uni_cal % 28;
        joong_idx = (Math.floor(lastchar_uni_cal/28)) % 21;
        cho_idx = Math.floor((Math.floor(lastchar_uni_cal / 28)) / 21);
        //마지막 문자의 초성, 중성, 종성 구하기
        chosung = chosung_index[cho_idx];
        joongsung = joongsung_index[joong_idx];
        jongsung = jongsung_index[jong_idx];
      }
      //마지막 문자가 하나의 자음이나 모음이 아닌경우  초,중,종 구하기 끝

      //console.log("마지막문자 :  " + lasttext);
      //console.log("마지막 문자의 초성,index : " + chosung + cho_idx);
      //console.log("마지막 문자의 중성,index : " + joongsung + joong_idx);
      //console.log("마지막 문자의 종성,index : " + jongsung + jong_idx);

      if(chosung == undefined && joongsung == undefined && jongsung == undefined){
        // 이전 입력한 글자가 한글이 아닌경우 (숫자/기호)

        //input란에  바로 출력
        vrInput.text = text + key;

      }else{

        //2. 방금 친 글자 모음인지 자음인지 구별
        var key_jm = JM(key.charCodeAt(0));
        //console.log("방금 친 글자 : " + key +  " / 자음모음 : " + key_jm);
        var str_uni;
        var key_idx;

        //3. 글자 재조합
        if(lasttext==chosung&&key_jm=="J"){ //앞에 자음만 있는 경우 + 자음
          //console.log("앞에 자음만 있는 경우 + 자음");
          var newja = chosung+key;
          if(Jcombo.indexOf(newja)!=-1){ //앞자음 + 뒷자음 = 콤보인 경우 --->
            newja = Jcombo_index[Jcombo.indexOf(newja)];
            text = text.substring(0,text.length-1);
            vrInput.text = text + newja;
          }else{ //앞자음 + 뒷자음 = 콤보 아님
            vrInput.text = text + key;
          }
        }else if(lasttext == chosung && key_jm == "M"){ //앞에 자음만 있는경우 + 모음
          //console.log("앞에 자음만 있는 경우 + 모음");
          key_idx = joongsung_index.indexOf(key);
          if(Jcombo_index.indexOf(lasttext)!= -1){ //앞 자음이 콤보인경우 --->
            var newja = Jcombo[Jcombo_index.indexOf(lasttext)];
            var newja1 = newja.substring(0,1);
            var newja2 = newja.substring(1,newja.length);
            //console.log("앞 자음의 콤보 쪼개기 : " + newja1 + ", " + newja2);
            var newja2_idx = chosung_index.indexOf(newja2);
            var str_uni =( (newja2_idx*21) + key_idx ) * 28  + 44032;
            var str=String.fromCharCode(str_uni);
            hangeul = newja1+str;
            text=text.substring(0,text.length-1);
            vrInput.text = text + hangeul;
          }else{//앞 자음이 콤보가 아닌 경우 ex) ㄱ + ㅏ  가
            cho_idx = chosung_index.indexOf(chosung);
            var str_uni =( (cho_idx*21) + key_idx ) * 28  + 44032;
            var hangeul=String.fromCharCode(str_uni);
            text=text.substring(0,text.length-1);
            vrInput.text = text + hangeul;
          }
        }else if(lasttext==joongsung&&key_jm=="J"){ //앞에 모음만 있는 경우 + 자음
          //console.log("앞에 모음만 있는 경우 + 자음");
          vrInput.text = text + key;
        }else if(lasttext==joongsung&&key_jm=="M"){ //앞에 모음만 있는 경우 + 모음
          //console.log("앞에 모음만 있는 경우 + 모음 ");
          var newchar = lasttext+key;
          //모음이 콤보인 경우
          if(Mcombo.indexOf(newchar)!=-1){
            newchar = Mcombo_index[Mcombo.indexOf(newchar)];
            text=text.substring(0,text.length-1);
            vrInput.text = text + newchar;
          }else{ //모음이 콤보 아닌 경우
            vrInput.text = text + key;
          }
        }else if(jongsung!="" && key_jm=="J"){ //3-1 이전글자 종성이 있는경우 + 자음
          //console.log("이전글자 종성이 있는 경우 + 자음");
          var newjong_idx = Jcombo.indexOf(jongsung+key);
          //console.log(newjong_idx);
          if(newjong_idx!=-1){ //이전글자 종성 + 입력한 자음이 Combo에 있는 경우ex) 갈+ㄱ = 갉
            newjong=Jcombo_index[newjong_idx];
            newjong_idx=jongsung_index.indexOf(newjong);
            str_uni = ((cho_idx * 21) + joong_idx) * 28 + newjong_idx + 44032;
            hangeul= String.fromCharCode(str_uni);
            //console.log("새로 조합한 문자 : " + hangeul);
            text=text.substring(0,text.length-1);
            vrInput.text = text + hangeul;
          }else{  //이전글자 종성 + 입력한 자음이 Combo에 없는 경우  ex) 각+ㅇ =각ㅇ
            vrInput.text = text + key;
          }
        }else if(jongsung != "" && key_jm == "M"){ //3-2 이전글자 종성이 있는 경우 + 모음  ex) 강 + ㅏ  = 가아   값 + ㅏ + 갑 사
          //console.log("이전글자 종성이 있는경우 + 모음");
          var newjong_idx = Jcombo_index.indexOf(jongsung);
          key_idx=joongsung_index.indexOf(key);
          if(newjong_idx!=-1){ //종성이 콤보인경우
            var newjong = Jcombo[newjong_idx];
            var newjong1 = newjong.substring(0,1);
            var newjong2 = newjong.substring(1,newjong.length);
            var newjong1_idx = jongsung_index.indexOf(newjong1);
            var newjong2_idx = chosung_index.indexOf(newjong2);
            var str_uni1 =( (cho_idx*21) + joong_idx ) * 28 + newjong1_idx + 44032;
            var str_uni2 = ((newjong2_idx * 21) + key_idx ) * 28 + 44032;
            hangeul = String.fromCharCode(str_uni1) + String.fromCharCode(str_uni2);
            //console.log("새로 조합한 문자 : " + hangeul);
            text=text.substring(0,text.length-1);
            vrInput.text = text + hangeul;
          }else{ //종성이 콤보가 아닌경우 ex 강+ㅏ  가 아
            var newcho_idx = chosung_index.indexOf(jongsung);
            var str_uni1 =( (cho_idx*21) + joong_idx ) * 28 + 44032;
            var str_uni2 =( (newcho_idx*21) + key_idx ) * 28 + 44032;
            //console.log(jong_idx);
            hangeul = String.fromCharCode(str_uni1) + String.fromCharCode(str_uni2);
            //console.log("새로 조합한 문자 : " + hangeul);
            text=text.substring(0,text.length-1);
            vrInput.text = text + hangeul;
          }
        }else if(jongsung == "" && key_jm == "J"){ //3-3 이전글자 종성이 없는 경우 + 자음 ex) 가 + ㅇ = 강, 가 + ㅉ = 가ㅉ
          //console.log("이전글자 종성이 없는 경우 + 자음");
          key_idx = jongsung_index.indexOf(key);
          if(key_idx!=-1){ //입력한 자음이 받침이 될 수 있는 경우
            str_uni = ( (cho_idx*21)+joong_idx ) * 28 +key_idx + 44032;
            hangeul = String.fromCharCode(str_uni);
            //console.log("새로 조합한 문자 : " + hangeul);
            text=text.substring(0,text.length-1);
            vrInput.text = text + hangeul;
          }else{ //입력한 자음이 받침이 될 수 없는 경우
            vrInput.text = text + key;
          }
        }else if(jongsung=="" && key_jm=="M"){ //3-4 이전글자 종성이 없는 경우 + 모음
          //console.log("이전글자 종성이 없는 경우 + 모음");
          var mcom = joongsung+key; // ㅜㅣ
          var mcom_idx = Mcombo.indexOf(mcom);
          if(mcom_idx!=-1){ //이전글자 모음(중성) + 친 글자(모음) = 콤보인경우 ex. 구 + ㅣ = 귀
            mcom=Mcombo_index[mcom_idx];
            mcom_idx=joongsung_index.indexOf(mcom);
            str_uni = ((cho_idx*21 )  + mcom_idx ) * 28 + 44032;
            hangeul = String.fromCharCode(str_uni);
            //console.log("새로 조합한 문자 : " + hangeul);
            text=text.substring(0,text.length-1);
            vrInput.text = text + hangeul;
          }else{ //이전글자 모음(중성) + 친글자(모음) 콤보 아닌경우 ex.구 + ㅏ = 구ㅏ
            //console.log("이전글자 모음 + 친글자 모음 ");
            vrInput.text = text + key;
          }
        }

      }

    }else{ //마지막 문자가 공백이 아닌경우 끝, 마지막 문자가 공백이면 --> 숫자/기호인 경우도 체크 되어야함
      //input란에  바로 출력
      vrInput.text = text + key;
    }
  }else{ // 영문 입력 시
    vrInput.text += key;
  }

};




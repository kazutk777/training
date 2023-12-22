"use strict";
let button = document.querySelector('button');
const mark = ["♠", "♦", "♣", "♥"];

const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13",];
let result = [];
for (let i = 0; i < mark.length; i++) {
  for (let j = 0; j < num.length; j++) {
    let card = { mark: mark[i], num: num[j] };
    result.push(card);
  }
}
const imgList = [
  'images/spade/card_spade_01.png',
  'images/spade/card_spade_02.png',
  'images/spade/card_spade_03.png',
  'images/spade/card_spade_04.png',
  'images/spade/card_spade_05.png',
  'images/spade/card_spade_06.png',
  'images/spade/card_spade_07.png',
  'images/spade/card_spade_08.png',
  'images/spade/card_spade_09.png',
  'images/spade/card_spade_10.png',
  'images/spade/card_spade_11.png',
  'images/spade/card_spade_12.png',
  'images/spade/card_spade_13.png',
  'images/daia/card_diamond_01.png',
  'images/daia/card_diamond_02.png',
  'images/daia/card_diamond_03.png',
  'images/daia/card_diamond_04.png',
  'images/daia/card_diamond_05.png',
  'images/daia/card_diamond_06.png',
  'images/daia/card_diamond_07.png',
  'images/daia/card_diamond_08.png',
  'images/daia/card_diamond_09.png',
  'images/daia/card_diamond_10.png',
  'images/daia/card_diamond_11.png',
  'images/daia/card_diamond_12.png',
  'images/daia/card_diamond_13.png',
  'images/club/card_club_01.png',
  'images/club/card_club_02.png',
  'images/club/card_club_03.png',
  'images/club/card_club_04.png',
  'images/club/card_club_05.png',
  'images/club/card_club_06.png',
  'images/club/card_club_07.png',
  'images/club/card_club_08.png',
  'images/club/card_club_09.png',
  'images/club/card_club_10.png',
  'images/club/card_club_11.png',
  'images/club/card_club_12.png',
  'images/club/card_club_13.png',
  'images/heart/card_heart_01.png',
  'images/heart/card_heart_02.png',
  'images/heart/card_heart_03.png',
  'images/heart/card_heart_04.png',
  'images/heart/card_heart_05.png',
  'images/heart/card_heart_06.png',
  'images/heart/card_heart_07.png',
  'images/heart/card_heart_08.png',
  'images/heart/card_heart_09.png',
  'images/heart/card_heart_10.png',
  'images/heart/card_heart_11.png',
  'images/heart/card_heart_12.png',
  'images/heart/card_heart_13.png'];


button.addEventListener('click', () => {
  let rand_ParentArray = [];
  let rand_ChildArray = [];
  let result_Parent = [];
  let result_Child = [];
  let resultStr = ['ロイヤルフラッシュ', 'ストレートフラッシュ', 'フォーカード', 'フルハウス', 'フラッシュ', 'ストレート', 'スリーオブアカインド', 'ツーペア', 'ワンペア', 'ハイカード'];
  let parentStr;
  let childStr;
  let imageOutputP_array = [];
  let imageOutputC_array = [];

  for (let i = 0; i < 10; i++) {
    while (true) {
      let tmp = Math.floor(Math.random() * (52));
      if (!rand_ParentArray.includes(tmp) && i < 5) {
        rand_ParentArray.push(tmp);
        break;
      }
      else if (!rand_ParentArray.includes(tmp) && i >= 5 && !rand_ChildArray.includes(tmp)) {
        rand_ChildArray.push(tmp);
        break;
      }
    }
  }
  for (let i = 0; i < 5; i++) {
    let numP = rand_ParentArray[i];
    let numC = rand_ChildArray[i];
    result_Parent[i] = result[numP];
    result_Child[i] = result[numC];
    imageOutputP_array[i] = imgList[numP];
    imageOutputC_array[i] = imgList[numC];
  }

  let Pmark_array = [];
  let Cmark_array = [];
  let Pnum_array = [];
  let Cnum_array = [];
  for (let i = 0; i < 5; i++) {
    Pmark_array.push(result_Parent[i].mark);
    Cmark_array.push(result_Child[i].mark);
    Cnum_array.push(Number(result_Child[i].num));
    Pnum_array.push(Number(result_Parent[i].num));
  }

  function compareFunc(a, b) {
    return a - b;
  };
  let compareNumC_array = Cnum_array.sort(compareFunc);
  let compareNumP_array = Pnum_array.sort(compareFunc);

  function sameMark_array(comNum_array) {
    let index;
    let comNum1 = comNum_array[0];
    let comNum2 = comNum_array[1];
    let comNum3 = comNum_array[2];
    let comNum4 = comNum_array[3];
    let comNum5 = comNum_array[4];

    if (comNum2 === comNum3 - 1 && comNum2 === comNum4 - 2 && comNum2 === comNum5 - 3) {
      if (comNum5 === 13 && comNum1 === 1) {
        index = 0
      }
      else if (comNum2 === 2 && comNum1 === 1) {
        index = 1;
      }
      else if (comNum1 !== 1 && comNum1 === comNum2 - 1) {
        index = 1;
      }
      else {
        index = 4
      }
    }
    else {
      index = 4
    }
    return index;
  }
  function sameNumfunc(compareCountNum, search_count_sec) {
    let index;
    for (let i = 0; i < 5; i++) {
      if (compareCountNum[i] === 4) {
        index = 2;
        break;
      } else if (compareCountNum[i] === 3) {
        index = 6;
      }
    }
    if (compareCountNum[0] === 2 && compareCountNum[2] === 3 || compareCountNum[0] === 3 && compareCountNum[3] === 2) {
      index = 3;
    }
    else if (search_count_sec.length === 4) {
      index = 7;
    } else if (search_count_sec.length === 2) {
      index = 8;
    }
    return index;
  }

  function straight(comNum_array) {
    let index;
    let comNum1 = comNum_array[0];
    let comNum2 = comNum_array[1];
    let comNum3 = comNum_array[2];
    let comNum4 = comNum_array[3];
    let comNum5 = comNum_array[4];
    if (comNum2 === comNum3 - 1 && comNum2 === comNum4 - 2 && comNum2 === comNum5 - 3) {
      if (comNum5 === 13 && comNum1 === 1) {
        index = 5;
      }
      else if (comNum2 === 2 && comNum1 === 1) {
        index = 5;
      }
      else if (comNum1 !== 1 && comNum1 === comNum2 - 1) {
        index = 5;
      }
      return index;
    }
  }

  function highcard(compareNum) {
    let highcard_array;
    for (let i = 0; i < 5; i++) {
      if (compareNum[i] === 1) {
        compareNum[i] = 14;
      }
    }
    highcard_array = compareNum.sort(compareFunc);
    return highcard_array;
  }


  let countP = 0;
  let countC = 0;
  for (let i = 1; i <= 4; i++) {
    if (Pmark_array[0] === Pmark_array[i]) {
      countP++;
    }
    if (Cmark_array[0] === Cmark_array[i]) {
      countC++
    }
  }

  let countP_Array = [];
  let countC_Array = [];
  for (let i = 0; i < 5; i++) {
    countP_Array[i] = 0;
    countC_Array[i] = 0;
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (compareNumP_array[i] === compareNumP_array[j]) {
        countP_Array[i] = countP_Array[i] + 1;
      }
      if (compareNumC_array[i] === compareNumC_array[j]) {
        countC_Array[i] = countC_Array[i] + 1;
      }
    }
  }
  let compare_CountP = countP_Array.sort(compareFunc);
  let compare_CountC = countC_Array.sort(compareFunc);
  const searchList = [2];
  let search_countP_second = compare_CountP.filter(el => searchList.includes(el));
  let search_countC_second = compare_CountC.filter(el => searchList.includes(el));
  let indexP;
  let indexC;

  if (countP === 4) {
    indexP = sameMark_array(compareNumP_array);
    parentStr = resultStr[indexP];
  } else {
    countP = 0;
  }
  if (countC === 4) {
    indexC = sameMark_array(compareNumC_array);
    childStr = resultStr[indexC];
  } else {
    countC = 0;
  }

  let highcardP_array;
  let highcardC_array;
  let highcard_array;

  function roleSelection(compare_Count,search_count_sec,compareNum_array){
      
  let number = 0;
  let returnArray=[];
  let index;
  let roleName;
  while (roleName === undefined) {
    switch (number) {
      case 0:
        index = sameNumfunc(compare_Count, search_count_sec);
        roleName = resultStr[index];
        number++;
        break;
      case 1:
        index = straight(compareNum_array);
        roleName = resultStr[index];
        number++;
        break;
      case 2:
        highcard_array = highcard(compareNum_array);
        index = 9;
        roleName = resultStr[9];
        break;
      default:
        break;
    }
  }
  returnArray.push(roleName,index);
  return returnArray;
  }
  
  let receivePArray= roleSelection(compare_CountP,search_countP_second,compareNumP_array);
  highcardP_array=highcard_array;
  parentStr=receivePArray[0];
  indexP=receivePArray[1];
  
  let receiveCArray=roleSelection(compare_CountC,search_countC_second,compareNumC_array);
  highcardC_array=highcard_array;
  childStr=receiveCArray[0];
  indexC=receiveCArray[1];


  let fightResultStr = ['WIN', 'LOSE', 'DRAW'];
  let fightResultP;
  let fightResultC;
  if (indexP < indexC) {
    fightResultP = fightResultStr[0];
    fightResultC = fightResultStr[1];
  }
  else if (indexP > indexC) {
    fightResultP = fightResultStr[1];
    fightResultC = fightResultStr[0];
  }
  else if (indexP === 9 && indexC === 9) {
    for (let i = 4; i >= 0; i--) {
      if (highcardP_array[i] > highcardC_array[i]) {
        fightResultP = fightResultStr[0];
        fightResultC = fightResultStr[1];
        break;
      }
      else if (highcardP_array[i] < highcardC_array[i]) {
        fightResultP = fightResultStr[1];
        fightResultC = fightResultStr[0];
        break;
      }
      else if (highcardP_array[i] === highcardC_array[9] && i === 0) {
        fightResultP = fightResultStr[2];
        fightResultC = fightResultStr[2];
      }
      else {
        continue;
      }
    }
  }
  else {
    fightResultP = fightResultStr[2];
    fightResultC = fightResultStr[2];
  }
  let parentResult = document.querySelector('.parentResult');
  let childResult = document.querySelector('.childResult');
  let parentRole = document.querySelector('.rolename');
  let childRole = document.querySelector('.rolenamechild');

  let trampcardArray = document.querySelectorAll('.trampcard');

  for (let i = 0; i < trampcardArray.length; i++) {
    if (i < 5) {
      trampcardArray[i].innerHTML = `<img src='${imageOutputP_array[i]}' width='80px' height='120px'>`;
    } else if (i >= 5) {
      trampcardArray[i].innerHTML = `<img src='${imageOutputC_array[i - 5]}' width='80px' height='120px'>`;
    }
  }

  parentRole.innerHTML = parentStr;
  childRole.innerHTML = childStr;
  parentResult.innerHTML = fightResultP;
  childResult.innerHTML = fightResultC;
});
const startWord = () => {
   let word = document.getElementById('word').innerText;
   let myword = document.getElementById('myword').value;

   //마지막 index설정
   let lastword = word[word.length - 1];
   let firstword = myword[0];

   if (lastword === firstword) {
      //일치하는 경우
      document.getElementById('result').innerText = '정답!!';
      document.getElementById('word').innerText = myword;
      document.getElementById('myword').innerText = '';
   } else {
      //일치하지 않는 경우
      document.getElementById('result').innerText = '땡!!';
   }
};

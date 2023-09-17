// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// クリックされたら、文字列を変更する
btn.addEventListener('click', () => {
  // テキストボックスに入力された文字列を取得する
  text.textContent = 'ボタンをクリックしました';
})
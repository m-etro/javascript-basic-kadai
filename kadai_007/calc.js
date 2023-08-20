// 変数numに0～20までのランダムな整数を代入する
let num = Math.floor(Math.random() * 21);
// 変数numが３と５の倍数なら“3と5の倍数です”と出力する
if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です")
}
// 変数numが３の倍数なら“3の倍数です”と出力する
else if (num % 3 === 0) {
  console.log("3の倍数です");
}
// 変数numが5の倍数なら“5の倍数です”と出力する
else if (num % 5 === 0) {
  console.log("5の倍数です")
}
// それ以外の場合： 変数(num)を出力する
else {
  console.log(num)
}









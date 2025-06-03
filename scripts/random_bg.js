var totalCount = 8;
var num = Math.ceil(Math.random() * totalCount);
document.getElementById("images").src = 'assets/background/' + num + '.png';

console.log('🖼️ Đã lựa chọn ảnh nền số ' + num)
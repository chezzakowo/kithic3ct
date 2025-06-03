// Kiểm tra phiên bản
caches.has('site-static-v18').then(function(hasCache) {
	if (!hasCache) {} else {
		caches.delete("site-static-v18");
		alert("⚠️ Bạn đang ở phiên bản cũ của Website. Reload để cập nhật thời gian mới nhất");
	}
}).catch(function() {
	console.error('🚨 Đã gặp lỗi!' + e)
});


// Kiểm tra ngày
var countDownDate = new Date("Jun 05, 2025   00:00:00").getTime();
var x = setInterval(function() {


	var now = new Date().getTime();

	var distance = countDownDate - now;


	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);


	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
	if (distance < 0) {

		clearInterval(x);

		document.getElementById("days").innerHTML = 0;
		document.getElementById("hours").innerHTML = 0;
		document.getElementById("minutes").innerHTML = 0;
		document.getElementById("seconds").innerHTML = 0;
	}
}, 1000);


// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js')
//         .then((reg) => console.log('Service Worker Register', reg))
//         .catch((err) => console.log('Service Worker Not Register', err))
// }

// Bắt lỗi

console.log(`
  _    _ _   _     _      ____       _   
 | |  (_) | | |   (_)    |___ \\     | |  
 | | ___| |_| |__  _  ___  __) | ___| |_ 
 | |/ / | __| '_ \\| |/ __||__ < / __| __|
 |   <| | |_| | | | | (__ ___) | (__| |_ 
 |_|\\_\\_|\\__|_| |_|_|\\___|____/ \\___|\\__|
                                         
 Kì thi tuyển sinh 10 thành phố Cần Thơ 
 Làm bởi Chez_ (https://bento.me/chezzakowo) - Source gốc bởi Trương Anh Khoa(anhkhoatqt11) (https://github.com/anhkhoatqt11/demnguockithi)
 Trang web này là một bản fork của source anhkhoatqt11/demnguockithi

 Web này của mình là mã nguồn mở đấy! https://github.com/chezzakowo/kithic3ct
`);
console.error(`
  
 __        __    __  __    __        __      __  __  __  __ 
/  |      /  |  /  |/  |  /  |      /  \    /  |/  |/  |/  |
$$ |      $$ |  $$ |$$ |  $$ |      $$  \  /$$/ $$ |$$ |$$ |
$$ |      $$ |  $$ |$$ |  $$ |       $$  \/$$/  $$ |$$ |$$ |
$$ |      $$ |  $$ |$$ |  $$ |        $$  $$/   $$ |$$ |$$ |
$$ |      $$ |  $$ |$$ |  $$ |         $$$$/    $$/ $$/ $$/ 
$$ |_____ $$ \__$$ |$$ \__$$ |          $$ |     __  __  __ 
$$       |$$    $$/ $$    $$/           $$ |    /  |/  |/  |
$$$$$$$$/  $$$$$$/   $$$$$$/            $$/     $$/ $$/ $$/ 
                                                            
                                                            
ĐÂY KHÔNG PHẢI LÀ TRANG WEB CHÍNH THÚC CỦA SỞ GIÁO DỤC CẦN THƠ                                                            
  `)
console.log("ℹ️🕛 Thời gian hiện tại trên máy user: " + new Date().getTime())


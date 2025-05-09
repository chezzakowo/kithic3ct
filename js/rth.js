console.log('⏳ Đợi 5 giây trước khi chuyển trang...');
setTimeout(function () {
    console.log('🔙 Đang chuyển trang');
    window.location.href = '/';
}, 5000);

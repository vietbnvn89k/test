var login = document.querySelector('#dangnhap')
var dangnhap = document.querySelector('#doimatkhau')
var flogin = function(){
   var kientra = confirm('Chưa làm')
   if (kientra == true) {
        alert('chức năng sẽ hoàn thiện trong ngày mai')
        window.open('https://vietbnvn89k.github.io/LuaDao.com/')
   }
   else {

   }
}
login.addEventListener('click', flogin)
dangnhap.addEventListener('click', flogin)

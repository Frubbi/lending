// темная тема
let currentTheme = 'light';
const list = document.querySelectorAll('.el_1-name');
const boxs = document.querySelectorAll('.el_1');
const tem11 =document.querySelectorAll('.tem1');
const cont = document.querySelectorAll('.blank_text1');
// const circle2 = document.querySelectorAll('.circle2');
// const circle = document.querySelectorAll('.circle');
function changeTheme() {
    if (currentTheme == 'light') {
        for (let i =0; i< tem11.length; i++) {
            tem11[i].style.background = '#404b5a';
        }
        // for (let i =0; i< circle2.length; i++) {
        //     circle2[i].style.background = '#607085';
        // }
        // for (let i =0; i< circle.length; i++) {
        //     circle[i].style.border = '6px solid #607085';
        // }
        for (let i =0; i< cont.length; i++) {
            cont[i].style.color = 'white';
        }
        document.body.style.background = "#607085";
        document.getElementById('text_2_t').style.color= "white";
        document.getElementById('introduction').style.background= "#607085";
        document.getElementById('i2').style.background= "#404b5a";
        document.getElementById('catalog').style.background= "#607085";
        document.querySelector('.footer').style.background = "#607085";
        for (let i =0; i< boxs.length; i++) {
            boxs[i].style.background = '#607085';
        }
        for (let i =0; i< list.length; i++) {
            list[i].style.color = 'white';
        }
        currentTheme = 'dark';
    } else {
        for (let i =0; i< tem11.length; i++) {
            tem11[i].style.background = '#9FCCFF';
        }
        for (let i =0; i< cont.length; i++) {
            cont[i].style.color = 'black';
        }
        document.getElementById('text_2_t').style.color = "#FF789E"
        document.body.style.background = "white";
        document.getElementById('introduction').style.background= "white";
        document.getElementById('i2').style.background= "#FF789E";
        document.getElementById('catalog').style.background= "white";
        document.querySelector('.footer').style.background = "#b4b4b4";
        for (let i =0; i< boxs.length; i++) {
            boxs[i].style.background = 'white';
        }
        for (let i =0; i< list.length; i++) {
            list[i].style.color = 'black';
        }
        currentTheme = 'light';
    }

}
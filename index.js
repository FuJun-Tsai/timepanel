let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let date = new Date().getDate();
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();

document.querySelector('#year').innerText = year;
document.querySelector('#month').innerText = `${month}月`;
document.querySelector('#date').innerText = date;

// 時鐘繪製
function clockDraw() {
    document.querySelector('#hour').style.transform = `translate(-50%, -50%) rotate(${ hour * (360 / 12) }deg)`;
    document.querySelector('#minute').style.transform = `translate(-50%, -50%) rotate(${ minute * (360 / 60) }deg)`;
    document.querySelector('#second').style.transform = `translate(-50%, -50%) rotate(${ second * 360 / 60 + 45}deg)`;
}

// 時間欄位
function timeReset() {
    document.querySelectorAll('#dialog input[type="number"]')[0].value = hour;
    document.querySelectorAll('#dialog input[type="number"]')[1].value = minute;
    document.querySelectorAll('#dialog input[type="number"]')[2].value = second;
}

// 時間更新
function timeUpdate() {
    hour = document.querySelectorAll('#dialog input[type="number"]')[0].value;
    minute = document.querySelectorAll('#dialog input[type="number"]')[1].value;
    second = document.querySelectorAll('#dialog input[type="number"]')[2].value;

    clockDraw();
}

// 初始化
timeReset();
clockDraw();

// 監聽彈跳窗關閉
const timeUpdateDialog = document.getElementById('dialog');
timeUpdateDialog.addEventListener('hidden.bs.modal', () => {
    // 把數值寫回 input[number]
    timeReset();
});

document.querySelectorAll('#dialog input[type="number"]').forEach(item => {
    item.addEventListener('input', (e)=> {
        console.log(e.target.value);
        // 值在時間極值內
        if(Number(e.target.value) <= Number(e.target.max) && Number(e.target.value) >= Number(e.target.min)){
            document.querySelector('.modal-footer .close').removeAttribute('disabled');
        } else {
            document.querySelector('.modal-footer .close').setAttribute('disabled', '');
        }
    })
})
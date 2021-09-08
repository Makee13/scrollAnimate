// Lấy 4 phần kích thước chiều cao trình duyệt
const CURRENT_WD_HEIGHT = window.innerHeight/5 * 4;
const BOXES = document.querySelectorAll('.box')

window.onscroll = execute

// Hàm thực hiện đặt class để ẩn đi các box
BOXES.forEach(function(box, index) {
    if(index >= 3) {
        if(index % 2 === 0) {
            box.classList.add('slideOutRight');
        }
        else {
            box.classList.add('slideOutLeft');
        }
    }
})

function execute() {
    BOXES.forEach((box, index) => {

        let boxTop = box.getBoundingClientRect().top;

        // So sánh box của top với 4 phần chiều cao trình duyệt
        if(boxTop < CURRENT_WD_HEIGHT) {
            box.classList.add('slideIn');
        }
        else {
            box.classList.remove('slideIn');
        }
    })
}
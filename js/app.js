let main_img = document.querySelector('.main__img')
let main_img_box = document.querySelector('.main__img-box')

let img1 = document.querySelector('.img-1')
let img2 = document.querySelector('.img-2')
let img3 = document.querySelector('.img-3')
let img4 = document.querySelector('.img-4')


img1.addEventListener('click', function(){
    main_img_box.href = './img/1.jpg'
    main_img_box.download = '1'
    main_img.src = './img/1.jpg'
    main_img.alt = '1'
})

img2.addEventListener('click', function(){
    main_img_box.href = './img/2.jpg'
    main_img_box.download = '2'
    main_img.src = './img/2.jpg'
    main_img.alt = '2'
})

img3.addEventListener('click', function(){
    main_img_box.href = './img/3.jpg'
    main_img_box.download = '3'
    main_img.src = './img/3.jpg'
    main_img.alt = '3'
})

img4.addEventListener('click', function(){
    main_img_box.href = './img/4.jpg'
    main_img_box.download = '4'
    main_img.src = './img/4.jpg'
    main_img.alt = '4'
})
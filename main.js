const input = document.getElementById('textinput')
input.addEventListener('input', ()=>{
    const logo = document.getElementById("logo")
    logo.classList.add('disappear')
    const main_block = document.getElementById("main_block")
    main_block.classList.add('top')
    const ele = document.createElement('template')
    ele.innerHTML=`<img src="//www.baidu.com/img/flexible/logo/pc/result@2.png" alt="到百度首页" title="到百度首页">`
    main_block.appendChild(ele)
})

const submit = document.getElementById('submit')
submit.addEventListener('click', ()=>{
    let url="https://www.baidu.com/s?wd="+input.value;
    window.location = url
})
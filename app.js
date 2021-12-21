wrapper = document.querySelector('.wrapper'),
toast = wrapper.querySelector('.toast'),
wifiicon = wrapper.querySelector('.icon'),
title = wrapper.querySelector('span'),
subTitle = wrapper.querySelector('p'),
closeicon = wrapper.querySelector('.close-icon');

window.onload = () => {
  
    function ajax(){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = () => {
           if(xhr.status == 200 && xhr.status < 300){
            // console.log("Online");
            toast.classList.remove('offline')
            title.innerText = "Tarmoqda internet ishlayapti."
            subTitle.innerText = "Gazini bosing"
            wifiicon.innerHTML = " <i class='la la-wifi'></i>"
            closeicon.onclick = () => {
                wrapper.classList.add('hide')
            }
            setTimeout(() => {
                wrapper.classList.add('hide')
            },5000)
           }else{
                offline()
           }
            // console.log(xhr.response);
        }
        xhr.onerror = () => {
            offline();
            // console.log("Offline");
        }
        xhr.send();
    }
    function offline(){
        wrapper.classList.remove('hide')
        toast.classList.add('offline')
        title.innerText = "Tarmoqda internet yoq"
        subTitle.innerText = "uzr..."
        wifiicon.innerHTML = "<i class='la la-times'></i>"
    }
    setInterval(() => {
        ajax();
    },100)
}



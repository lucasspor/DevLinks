function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    
    // pegar a img
    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/profile_img.jpg')
    } else {
        img.setAttribute('src', './assets/profile-light.png')
    }

    
}

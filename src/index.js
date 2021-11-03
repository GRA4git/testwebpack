import logoImg from '../assets/logo.png'
import "./style.css" 
const logo = document.createElement('img')
const wrap = document.getElementById('wrapper')
logo.src = logoImg
logo.classList.add("surt")

const hello = (name) => console.log(`Hello, ${name}`)
hello("hasan")
wrap.append(logo)
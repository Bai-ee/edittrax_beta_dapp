document.onreadystatechange = function(){    
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
}

const opensource = document.getElementById('open')
const acidbeach = document.getElementById('acid')
const burnt = document.getElementById('burnt')
const boxed = document.getElementById('box')

opensource.addEventListener('click', getIndexPage)
acidbeach.addEventListener('click', getIndex2Page)
burnt.addEventListener('click', getIndex3Page)
boxed.addEventListener('click', getIndex4Page)


function getIndexPage(){    
    window.location.href = "./index.html"    
}

function getIndex2Page(){    
    window.location.href = "./index2.html"
}

function getIndex3Page(){    
    window.location.href = "./index3.html"
}

function getIndex4Page(){    
    window.location.href = "./index4.html"
}



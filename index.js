document.getElementById("vizsgal").onclick = function(){
    elso = document.getElementById("elso").value;
    masodik = document.getElementById("masodik").value;
    harmadik= document.getElementById("harmadik").value;
    negyedik= document.getElementById("negyedik").value;
    otodik= document.getElementById("otodik").value;
    if(elso=="1"){
        document.getElementById("elso").style.color = "green";
    }else{
        document.getElementById("elso").style.color = "red";
    }


    if(masodik=="1"){
        document.getElementById("masodik").style.color = "green";
    }else{
        document.getElementById("masodik").style.color = "red";
    }


    if(harmadik=="1"){
        document.getElementById("harmadik").style.color = "green";
    }else{
        document.getElementById("harmadik").style.color = "red";
    }


    if(negyedik=="1"){
        document.getElementById("negyedik").style.color = "green";
    }else{
        document.getElementById("negyedik").style.color = "red";
    }


    if(otodik=="1"){
        document.getElementById("otodik").style.color = "green";
    }else{
        document.getElementById("otodik").style.color = "red";
    }


}
document.getElementById("vizsgal").onclick = function(){
    elso = document.getElementById("elso").value;
    masodik = document.getElementById("masodik").value;
    harmadik= document.getElementById("harmadik").value;
    negyedik= document.getElementById("negyedik").value;
    otodik= document.getElementById("otodik").value;
    elso1 = document.getElementById("elso1").value;
    masodik2 = document.getElementById("masodik2").value;
    harmadik3= document.getElementById("harmadik3").value;
    negyedik4= document.getElementById("negyedik4").value;
    otodik5= document.getElementById("otodik5").value;
    let megoldás=[
      "Pireneusi-félsziget",
      "Pó-síkság",
      "Lengyel-alföld",
      "Cseh-erdő",
      "Dinári-hegység",
      "Shetlamd-szigetek",
      "Normandia",
      "Baleár-szigetek",
      "Öland",
      "Jón-szigetek"
    ]
    let beirt=[
      elso,masodik,harmadik,negyedik,otodik,
      elso1,masodik2,harmadik3,negyedik4,otodik5,
    ]
    let szoveg=[
      'elso','masodik','harmadik','negyedik','otodik',
      'elso1','masodik2','harmadik3','negyedik4','otodik5',
    ]
    console.log(beirt[0])
    for(let i = 0; i < megoldás.length; i++){
      if(megoldás[i]==beirt[i]){
        console.log(szoveg[i]);
        document.getElementById(szoveg[i]).style.color = "green";
      }
      else{
        document.getElementById(szoveg[i]).style.color = "red";
      }
    }
}
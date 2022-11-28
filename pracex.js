function raices(){
    var a = parseInt( document.getElementById("a").value);
    var b=0
    var c=1
    var d=1
    document.write(b+",")
    document.write(c+",")
    document.write(d+",")
    for(let i=4;i<=a;i++){
        f=c+d+b
        b=c
        c=d
        d=f
        document.write(f+",")
       // document.getElementById('raiz').innerHTML=+f+","
    } }
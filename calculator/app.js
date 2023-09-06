function cal()
{
    let a=document.getElementById('display').value;
    let f='';
    f= a.replace(/x/g,'*');
    document.getElementById('display').value= eval(f);
}
function del()
{
    let str=document.getElementById('display').value;
    str=str.slice(0,-1);
    document.getElementById('display').value=str;
}
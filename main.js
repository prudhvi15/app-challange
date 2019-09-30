function largest()
{
const guest=document.getElementById("guest").value;
 const str1=document.getElementById("str1").value;
 const str2=document.getElementById("str2").value;
 const long=Math.max(str1.length,str2.length);
 document.getElementById("result").innerHTML=guest+", Longest length is:"+long;

}
document.getElementById("addButton").addEventListener('click',largest);
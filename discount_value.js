function discount$(price,rate){
	var discount$ = (price*rate)/100;
	return discount$;
}
function net(price,rate,discount$)	{
	var net = price - discount$(price,rate);
	return net;
}
function cal(){
var price= parseFloat(document.getElementById("price").value);
var rate= parseFloat(document.getElementById("rate").value);
if (isNaN(price)||isNaN(rate))
			{
				alert("values are invalid")
			}
			else
			{
				if (price>1000|| price<0){
	alert ("Item price should be between 0 or 1000");
}
else
	{
		if (rate>70|| rate <0)
		{
			alert("discount % should be between 0 and 70")
		}
		else
		{

				document.getElementById("discount$").value= discount$(rate,price);
				document.getElementById("net").value= net(price,rate,discount$);
			}
		}
	}
}
window.onload = function(){
    document.getElementById("cal").onclick = cal;
}
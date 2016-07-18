/* 
 * Exercise 6.3 Temperature Converter
 * Modify Temp Converter code so that uses buttons defined by the button id elements
 * Dovi Wilensky, CS81, 17Jul2016              
 */
 
 var report = function(celcius, farenheit) {
	 document.getElementById("result").innerHTML =
		celcius + "\xb0C = " + farenheit + "\xb0F";
 };
  document.getElementById("f_to_c").onclick = function() {
	 var f = document.getElementById("temperature").value;
	 report((f - 32) / 1.8, f);
 };
  document.getElementById("c_to_f").onclick = function() {
	 var c = document.getElementById("temperature").value;
	 report(c, 1.8 * c +  32);
 };

function isEmpty(element, label)
{
	var val = element.value;
	if (val.trim() == "" || val == null)
	{
		document.getElementById(element.id + "Error").innerHTML = " Please Enter " + element.alt;
		element.style.border = "1px RED SOLID";
		label.style.color = "red";
		
		return false;
	}
	else
	{
		document.getElementById(element.id + "Error").innerHTML = "";
		element.style.border = "";
		label.style.color = "";
		return true;
	}
}


function isSelected(element, label)
{
	var val = element.selectedIndex;
	if (val == 0)
	{
		document.getElementById(element.id + "Error").innerHTML = " Please Select " + element.title;
		element.style.border = "1px RED SOLID";
		label.style.color = "red";
		return false;
	}
	else
	{
		document.getElementById(element.id + "Error").innerHTML = "";
		element.style.border = "";
		label.style.color = "";
		return true;
	}
}


function checkEmail(email, label)
{
	var emailValue = email.value;
	var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(emailValue.match(pattern))
	{
		document.getElementById(email.id+"Error").innerHTML = "";
		email.border = "";
		label.style.color = "";
		return true;
	}
	else
	{
		document.getElementById(email.id+"Error").innerHTML = " Please Enter Correct Email Address";
		email.border="1px RED SOLID";
		label.style.color = "red";
		return false;
	}
}


function checkPassword(passBox1, passBox2)
{
	var pwd = passBox1.value;
	var confirmPwd = passBox2.value;
	if (pwd.length > 5 )
	{
		if(pwd != confirmPwd)
		{
			document.getElementById(passBox1.id +"Error").innerHTML = " Both password must be same ";
			passBox1.style.border="1px RED SOLID";
			
			document.getElementById(passBox2.id + "Error").innerHTML = " Both password must be same ";
			passBox2.style.border="1px RED SOLID";
			return false;
		}
		return true;
	}
	else
	{
		document.getElementById(passBox1.id +"Error").innerHTML = " Password must be greater than 6 characters ";
		passBox1.style.border="1px RED SOLID";
		
		document.getElementById(passBox2.id + "Error").innerHTML = " Both password must be same ";
		passBox2.style.border="1px RED SOLID";
		
		return false;
	}
}

function checkMobileNo(mobile, label)
{
	var mobileValue = mobile.value;
	
	var pattern = /^[7-9][0-9]{9}$/;
	var result = pattern.test(mobileValue);
	
	if( mobileValue.length = 10)
	{
		label.style.color = "";
		if (result == false)
		{
			document.getElementById(mobile.id + "Error").innerHTML = " Please Specify Correct Mobile no. ";
			label.style.color = "red";
			return false;
		}
		
		return true;
	}
	else
	{
		document.getElementById(mobile.id + "Error").innerHTML = " Length of Mobile No. should be 10 ";
		label.style.color = "red";
		return false;
	}
}


function validateForm()
{
	var toc = document.getElementById("toc");
	
	var email 	  = isEmpty(document.getElementById("email"), document.getElementById("emailLabel")) && checkEmail(document.getElementById("email"),document.getElementById("emailLabel"));
	var pwd 	  = isEmpty(document.getElementById("pwd"),document.getElementById("pwdLabel")) && checkPassword(document.getElementById("pwd"),document.getElementById("confirmPwd"));
	var location  = isSelected(document.getElementById("location"), document.getElementById("locationLabel"));
	var mobile 	  = isEmpty(document.getElementById("mobile"), document.getElementById("mobileLabel")) && checkMobileNo(document.getElementById("mobile"),document.getElementById("mobileLabel"));
	var exp 	  = isSelected(document.getElementById("exp"), document.getElementById("expLabel"));
	var industry  = isSelected(document.getElementById("industry"), document.getElementById("industryLabel"));
	var area 	  = isSelected(document.getElementById("area"), document.getElementById("areaLabel"));
	var keySkills = isEmpty(document.getElementById("keySkills"), document.getElementById("keySkillsLabel"));
	var headline  = isEmpty(document.getElementById("headline"), document.getElementById("headlineLabel"));
	var edu 	  = isSelected(document.getElementById("edu"), document.getElementById("eduLabel"));
		
	var result = toc.checked && email && pwd && location && mobile && exp && industry && area && keySkills && headline && edu;
	
	
	if(toc.checked)
	{	
		if (result == true)
		{
			alert("Registration Successfully");
			return true;
		}
		document.getElementById("tocDiv").innerHTML = " ";
		return false;
	}
	else
	{
		document.getElementById("tocDiv").innerHTML = " Please Accept the Terms and Conditions ";
		return false;
	}
}


function loadCountryList(element)
{
	
	element.innerHTML = "\n\t\t\t\t<option value=\"0\" label=\"Select Country\">Select Country</option>\n\t\t\t\t<option value=\"1\" label=\"Australia\">Australia</option>\n\t\t\t\t<option value=\"2\" label=\"Bahrain\">Bahrain</option>\n\t\t\t\t<option value=\"3\" label=\"Bangladesh\">Bangladesh</option>\n\t\t\t\t<option value=\"4\" label=\"Belgium\">Belgium</option>\n\t\t\t\t<option value=\"5\" label=\"Canada\">Canada</option>\n\t\t\t\t<option value=\"6\" label=\"Doha\">Doha</option>\n\t\t\t\t<option value=\"7\" label=\"Dubai\">Dubai</option>\n\t\t\t\t<option value=\"8\" label=\"France\">France</option>\n\t\t\t\t<option value=\"9\" label=\"Germany\">Germany</option>\n\t\t\t\t<option value=\"10\" label=\"Hong Kong\">Hong Kong</option>\n\t\t\t\t<option value=\"12\" label=\"Indonesia\">Indonesia</option>\n\t\t\t\t<option value=\"13\" label=\"Ireland\">Ireland</option>\n\t\t\t\t<option value=\"14\" label=\"Italy\">Italy</option>\n\t\t\t\t<option value=\"15\" label=\"Japan\">Japan</option>\n\t\t\t\t<option value=\"16\" label=\"Kenya\">Kenya</option>\n\t\t\t\t<option value=\"17\" label=\"Kuwait\">Kuwait</option>\n\t\t\t\t<option value=\"18\" label=\"Lebanon\">Lebanon</option>\n\t\t\t\t<option value=\"19\" label=\"Libya\">Libya</option>\n\t\t\t\t<option value=\"20\" label=\"Malaysia\">Malaysia</option>\n\t\t\t\t<option value=\"21\" label=\"Maldives\">Maldives</option>\n\t\t\t\t<option value=\"22\" label=\"Mauritius\">Mauritius</option>\n\t\t\t\t<option value=\"23\" label=\"Mexico\">Mexico</option>\n\t\t\t\t<option value=\"24\" label=\"Nepal\">Nepal</option>\n\t\t\t\t<option value=\"25\" label=\"Netherlands\">Netherlands</option>\n\t\t\t\t<option value=\"26\" label=\"New Zealand\">New Zealand</option>\n\t\t\t\t<option value=\"27\" label=\"Norway\">Norway</option>\n\t\t\t\t<option value=\"28\" label=\"Oman\">Oman</option>\n\t\t\t\t<option value=\"29\" label=\"Pakistan\">Pakistan</option>\n\t\t\t\t<option value=\"30\" label=\"Qatar\">Qatar</option>\n\t\t\t\t<option value=\"31\" label=\"Quilon\">Quilon</option>\n\t\t\t\t<option value=\"32\" label=\"Russia\">Russia</option>\n\t\t\t\t<option value=\"33\" label=\"Saudi Arabia\">Saudi Arabia</option>\n\t\t\t\t<option value=\"34\" label=\"Singapore\">Singapore</option>\n\t\t\t\t<option value=\"35\" label=\"South Africa\">South Africa</option>\n\t\t\t\t<option value=\"36\" label=\"South Korea\">South Korea</option>\n\t\t\t\t<option value=\"37\" label=\"Spain\">Spain</option>\n\t\t\t\t<option value=\"38\" label=\"Sri Lanka\">Sri Lanka</option>\n\t\t\t\t<option value=\"39\" label=\"Sweden\">Sweden</option>\n\t\t\t\t<option value=\"40\" label=\"Switzerland\">Switzerland</option>\n\t\t\t\t<option value=\"41\" label=\"Thailand\">Thailand</option>\n\t\t\t\t<option value=\"42\" label=\"UAE\">UAE</option>\n\t\t\t\t<option value=\"43\" label=\"UK\">UK</option>\n\t\t\t\t<option value=\"44\" label=\"US\">US</option>\n\t\t\t\t<option value=\"45\" label=\"Yemen\">Yemen</option>\n\t\t\t\t<option value=\"46\" label=\"Zimbabwe\">Zimbabwe</option>\n\t\t\t"

}

function loadCityList(element)
{
	element.innerHTML = "\n\t\t\t\t<option>Select City</option>\n\t\t\t\t<option>Delhi</option>\n\t\t\t\t<option>Mumbai</option>\n\t\t\t\t<option>Hyderabad</option>\n\t\t\t\t<option>Chennai</option>\n\t\t\t\t<option>Kolkata</option>\n\t\t\t\t<option>Raipur</option>\n\t\t\t\t<option>Panji </option>\n\t\t\t\t<option>Vasco Da Gama</option>\n\t\t\t\t<option>Ahmedabad</option>\n\t\t\t\t<option>Bhuj</option>\n\t\t\t\t<option>Gandhinagar</option>\n\t\t\t\t<option>Rajkot</option>\n\t\t\t\t<option>Surat</option>\n\t\t\t\t<option>Vadodara</option>\n\t\t\t\t<option>Chandigarh</option>\n\t\t\t\t<option>Faridabad</option>\n\t\t\t\t<option>Panipat</option>\n\t\t\t\t<option>Rohtak</option>\n\t\t\t\t<option>Dalhousie</option>\n\t\t\t\t<option>Dharmasal</option>\n\t\t\t\t<option>Kulu/Manali</option>\n\t\t\t\t<option>ShimlaJammu</option>\n\t\t\t\t<option>Srinagar</option>\n\t\t\t\t<option>Dhanbad</option>\n\t\t\t\t<option>Jamshedpur</option>\n\t\t\t\t<option>RanchiBengaluru </option>\n\t\t\t\t<option>Dharwad</option>\n\t\t\t\t<option>Mangalore</option>\n\t\t\t\t<option>Mysoru</option>\n\t\t\t\t<option>Cochin</option>\n\t\t\t\t<option>Kochi</option>\n\t\t\t\t<option>Kollam</option>\n\t\t\t\t<option>Kozhikode</option>\n\t\t\t\t<option>Thrissur</option>\n\t\t\t\t<option>Trivandrum</option>\n\t\t\t\t<option>Bhopal</option>\n\t\t\t\t<option>Gwalior</option>\n\t\t\t\t<option>Indore</option>\n\t\t\t\t<option>Jabalpur</option>\n\t\t\t\t<option>UjjainAhmednagar</option>\n\t\t\t\t<option>Aurangabad</option>\n\t\t\t\t<option>Jalgaon</option>\n\t\t\t\t<option>Kolhapur</option>\n\t\t\t\t<option>Mumbai </option>\n\t\t\t\t<option>Nagpur</option>\n\t\t\t\t<option>Nasik</option>\n\t\t\t\t<option>Pune</option>\n\t\t\t\t<option>Bhubaneshwar</option>\n\t\t\t\t<option>Cuttack</option>\n\t\t\t\t<option>Puri</option>\n\t\t\t\t<option>Rourkela</option>\n\t\t\t\t<option>Amritsar</option>\n\t\t\t\t<option>Bathinda</option>\n\t\t\t\t<option>Jalandhar</option>\n\t\t\t\t<option>Ludhiana</option>\n\t\t\t\t<option>Mohali</option>\n\t\t\t\t<option>Pathankot</option>\n\t\t\t\t<option>Patiala</option>\n\t\t\t\t<option>Ajmer</option>\n\t\t\t\t<option>Jaipur</option>\n\t\t\t\t<option>Jaisalmer</option>\n\t\t\t\t<option>Jodhpur</option>\n\t\t\t\t<option>Kota</option>\n\t\t\t\t<option>Udaipur</option>\n\t\t\t\t<option>Chennai</option>\n\t\t\t\t<option>Coimbatore</option>\n\t\t\t\t<option>Cuddalore</option>\n\t\t\t\t<option>Madurai</option>\n\t\t\t\t<option>Tirunalveli</option>\n\t\t\t\t<option>Trichy</option>\n\t\t\t\t<option>Tuticorin</option>\n\t\t\t\t<option>Vellore</option>\n\t\t\t\t<option>Pondicherry</option>\n\t\t\t\t<option>Agra</option>\n\t\t\t\t<option>Aligarh</option>\n\t\t\t\t<option>Allahabad</option>\n\t\t\t\t<option>Bareilly</option>\n\t\t\t\t<option>Faizabad</option>\n\t\t\t\t<option>Ghaziabad</option>\n\t\t\t\t<option>Gorakhpur</option>\n\t\t\t\t<option>Kanpur</option>\n\t\t\t\t<option>Lucknow</option>\n\t\t\t\t<option>Mathura</option>\n\t\t\t\t<option>Meerut</option>\n\t\t\t\t<option>Noida</option>\n\t\t\t\t<option>Varanasi</option>\n\t\t\t\t<option>Dehradun</option>\n\t\t\t\t<option>Roorkee</option>\n\t\t\t\t<option>Durgapur</option>\n\t\t\t\t<option>Kharagpur</option>\n\t\t\t";

}



function changeDropdown(element)
{
	var country = document.getElementById("country").checked;
	
	if (country == true)
	{
		loadCountryList(element)
	}
	else
	{
		loadCityList(element);
	}

}

function loadAreaList()
{
	var industry = document.getElementById("industry").selectedIndex;
	switch (industry)
	{
		case 1:
				document.getElementById("area").innerHTML = "<OPTION> Select Functional Area  </OPTION><OPTION>Client-Server</OPTION><OPTION>Mainframe</OPTION> <OPTION>Mobile</OPTION><OPTION>Middleware</OPTION><OPTION>System Programming</OPTION>";
				break;
		case 2:
				document.getElementById("area").innerHTML = "<OPTION> Select Functional Area </OPTION><OPTION>Account</OPTION><OPTION>Finance</OPTION><OPTION>Tax</OPTION> <OPTION>CS</OPTION><OPTION>Audit</OPTION>";
				break;
		case 3:
				document.getElementById("area").innerHTML = "<OPTION> Select Functional Area   </OPTION><OPTION>Networking</OPTION><OPTION>Security</OPTION><OPTION>CRM</OPTION> <OPTION>ERP</OPTION><OPTION>C1</OPTION>";
				break;
		case 4:
				document.getElementById("area").innerHTML = "<OPTION> Select Functional Area  </OPTION><OPTION>Markating</OPTION><OPTION>PR</OPTION><OPTION>MR</OPTION><OPTION>Security Service </OPTION><OPTION>C1</OPTION>";
				break;
		case 5:
				document.getElementById("area").innerHTML = "<OPTION> Select Functional Area  </OPTION><OPTION>Export</OPTION><OPTION>Import</OPTION><OPTION>Manufacturaing</OPTION> <OPTION>C1</OPTION><OPTION>C1</OPTION>";
				break;
	}
}
function showInfo(optionValue)
{
	//alert('you selected : ' + optionValue);
	
	switch (optionValue)
	{
		case 1:
				alert('No of elements in form ' + document.forms[0].id + ' : ' + document.forms[0].elements.length);
				break;
				
		case 2:
				alert('Method of form ' + document.forms[0].id + ' is : ' + document.forms[0].method);
				break;
				
		case 3:
				var totalElements = document.forms[0].elements;
				var disp = "";
				for(var i=0; i< totalElements.length ; i++) 
				{
					disp = disp + totalElements[i].id + " : " +totalElements[i].value + "\n";  
				}
				alert(disp);
				break;
				
		case 4:
				alert('innerHTML of First Anchor is : ' + document.anchors[0].innerHTML);
				break;
				
		case 5:
				alert('No. of Forms in Document : ' + document.forms.length);
				break;
				
		case 6:
				alert('Name of the First Form in Document : ' + document.forms[0].getAttribute('name'));
				break;
				
		case 7:
				alert('No. of Images in Document : ' + document.images.length);
				break;
				
		case 8:
				alert('ID of first Image in Document : ' + document.images[0].id );
				break;
				
		case 9:
				document.images[0].style.border = "3px blue solid";
				break;
				
		case 10:
				document.images[0].height = document.images[0].height + 50;
				document.images[0].width = document.images[0].width + 50
				break;
				
		case 11:
				document.images[0].vspace = 10;
				document.images[0].hspace = 10;
				break;
				
		case 12:
				//document.images[0].longDesc = "This is Long Description of Image"
				alert(document.images[0].longDesc);
				break;
				
		case 13:
				document.images[0].src = document.images[0].lowsrc;
				break;
				
		case 14:
				alert('Name of First Image : ' + document.images[0].name ); 
				break;
				
		case 15:
				document.images[0].src = "images/chrome.png";
				break;
				
		case 16:
				var val = prompt("Value of hreflang Attribute is : " + document.links[0].hreflang, "");
				
				document.links[0].hreflang = val;
				break;

	}
	
	
}
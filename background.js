chrome.browserAction.onClicked.addListener(function(activeTab){
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET", "https://maker.ifttt.com/trigger/pray1/with/key/lJnpW-kbxzdFfL-GxdC8vD6LCk0LahkFEvayv2KbRP4", true); 	
	//xhr.setRequestHeader("Content-type", "application/json");
	
	xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) // если всё прошло хорошо, выполняем, что в скобках
	{
	 if (window.Notification) {
		new window.Notification("Pray", {
	    icon: 'icon.png',
	    body: '+1'
	  });
	}
	}
	xhr.send();//xhr.send({"value1":"1","value2":"2","value3":"3"});
});

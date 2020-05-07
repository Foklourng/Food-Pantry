let spreadsheetID = "1849CSeI6TmOPOeuwDMdPDa5f-xDNT6aCOr1OZB96kwQ"; // Sheet ID
                //let url = "https://spreadsheets.google.com/feeds/list/"+spreadsheetID+"/od6/public/values?alt=json";
                let url ="https://spreadsheets.google.com/feeds/list/"+spreadsheetID+"/od6/public/values?alt=json";
				
				jQuery.getJSON(url, function(data){
                let entry = data.feed.entry;
				var c =2, itemN;
				
                    jQuery(entry).each(function(){
                        let pic = this.gsx$picture.$t;
                        let name = this.gsx$name.$t;
                        let stat = this.gsx$status.$t;
                        let lim = this.gsx$limit.$t;
                        let type = this.gsx$type.$t;

                        jQuery("#t-body").append(`
                            <tr>
                                <td><img src="Images//${pic}" alt="Laptop" height="150" width="150" ></td>                              
                                <td>${name}</td>
                                <td>${stat}</td>
                                <td>${lim}</td>
								<td><button class="btn" class="editbtn"value='${c}' onclick="setIN(value)" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-edit"  "></i></button>
								
								<button class="btn" class="editbtn"value='${c}' onclick="setIN(value)"  data-toggle="modal" data-target="#exampleModalCenter3"><i class="fa fa-trash"  "></i></button></td>
                            </tr>
                        `);
                        c++;
					});
                    lastNum =c;
                });
				var lastNum;
		function sub(){
				var image = document.getElementById('myImg');
				var imgIn = document.getElementById('sub');
				image.style.display = "block";
				console.log("Image Display");
				var file = imgIn.value.split("\\");
				var fileName = file[file.length-1];
				image.src = "Images//"+fileName;
				console.log("Image Display is at " + image.src);
				console.log('name' + document.getElementById('firstN').value);
				console.log('status' + document.getElementById('status').value);
				console.log('limit' + document.getElementById('limit').value);
				console.log('Image' + fileName);
		}
		function sub2(){
				var image = document.getElementById('myImg2');
				var imgIn = document.getElementById('sub2');
				image.style.display = "block";
				console.log("Image Display");
				var file = imgIn.value.split("\\");
				var fileName = file[file.length-1];
				image.src = "Images//"+fileName;
				console.log("Image Display is at " + image.src);
				console.log('name -' + document.getElementById('firstN2').value);
				console.log('status -' + document.getElementById('status2').value);
				console.log('limit -' + document.getElementById('limit2').value);
				console.log('Image -' + image.src);
		}

         function setIN(c){
			 
			itemN =c;
			console.log("itemN is " + itemN);
		  }
		  function returnIN(){
				return itemN;
		  }
		 
		  function returnLN(){
			  console.log("Last Number is " + lastNum);
			return lastNum;
	  }
		  

		function filter(t){
			var c =2;
			console.log("Hello");
                    $("#t-body").empty();

                    jQuery.getJSON(url, function(data){
                let entry = data.feed.entry;
                    jQuery(entry).each(function(){
						let pic = this.gsx$picture.$t;
                        let name = this.gsx$name.$t;
                        let stat = this.gsx$status.$t;
                        let lim = this.gsx$limit.$t;
                        let type = this.gsx$type.$t;
						if(t== "1"){
							if(type == "canned")
							{
							jQuery("#t-body").append(`
								<tr>
									<td><img src="Images//${pic}" alt="Laptop" height="150" width="150" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
									<td><button class="btn" class="editbtn"value='${c}' onclick="setIN(value)" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-edit"  "></i></button>
								<button class="btn" class="editbtn"value='${c}' onclick="setIN(value)"  data-toggle="modal" data-target="#exampleModalCenter3"><i class="fa fa-trash"  "></i></button></td>
								</tr>
							`);
							c++;
							}
						}else if(t== "2"){
							if(type == "cereal")
							{
							jQuery("#t-body").append(`
								<tr>
									<td><img src="Images//${pic}" alt="Laptop" height="150" width="150" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
									<td><button class="btn" class="editbtn"value='${c}' onclick="setIN(value)" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-edit"  "></i></button>
								<button class="btn" class="editbtn"value='${c}' onclick="setIN(value)"  data-toggle="modal" data-target="#exampleModalCenter3"><i class="fa fa-trash"  "></i></button></td>
								</tr>
							`);
							c++;
							}
						}else if(t== "3"){
							if(type == "Refrigerator")
							{
							jQuery("#t-body").append(`
								<tr>
									<td><img src="Images//${pic}" alt="Laptop" height="150" width="150" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
									<td><button class="btn" class="editbtn"value='${c}' onclick="setIN(value)" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-edit"  "></i></button>
								<button class="btn" class="editbtn"value='${c}' onclick="setIN(value)"  data-toggle="modal" data-target="#exampleModalCenter3"><i class="fa fa-trash"  "></i></button></td>
								</tr>
							`);
							c++;
							}
						}else if(t== "4"){
							if(type == "Personal/Toiletries")
							{
							jQuery("#t-body").append(`
								<tr>
									<td><img src="Images//${pic}" alt="Laptop" height="150" width="150" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
									<td><button class="btn" class="editbtn"value='${c}' onclick="setIN(value)" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-edit"  "></i></button>
								<button class="btn" class="editbtn"value='${c}' onclick="setIN(value)"  data-toggle="modal" data-target="#exampleModalCenter3"><i class="fa fa-trash"  "></i></button></td>
								</tr>
							`);
							c++;
							}
						}
						else if(t== "5"){
							if(type == "Other")
							{
							jQuery("#t-body").append(`
								<tr>
									<td><img src="Images//${pic}" alt="Laptop" height="150" width="150" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
									<td><button class="btn" class="editbtn"value='${c}' onclick="setIN(value)" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-edit"  "></i></button>
								<button class="btn" class="editbtn"value='${c}' onclick="setIN(value)"  data-toggle="modal" data-target="#exampleModalCenter3"><i class="fa fa-trash"  "></i></button></td>
								</tr>
							`);
							c++;
							}
						}
						else if(t== "6"){
							jQuery("#t-body").append(`
								<tr>
									<td><img src="Images//${pic}" alt="Laptop" height="150" width="150" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
									<td><button class="btn" class="editbtn"value='${c}' onclick="setIN(value)" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-edit"  "></i></button>
								<button class="btn" class="editbtn"value='${c}' onclick="setIN(value)"  data-toggle="modal" data-target="#exampleModalCenter3"><i class="fa fa-trash"  "></i></button></td>
								</tr>
							`);
							c++;
							
						}
                    });
                
                    
                });
                }
				
	function submit(){
		var a = document.getElementById("firstN").value;
		var b = document.getElementById("status").value;
		var c = document.getElementById("limit").value;
		var d = document.getElementById("firstN").value;
		console.log(a);
		console.log(b);
		console.log(c);
		console.log(d);

	}     
			
	$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#t-body tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



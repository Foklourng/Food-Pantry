
//Display all the items from the google spreadsheet
let spreadsheetID = "1849CSeI6TmOPOeuwDMdPDa5f-xDNT6aCOr1OZB96kwQ"; // Sheet ID
                
                let url ="https://spreadsheets.google.com/feeds/list/"+spreadsheetID+"/od6/public/values?alt=json";
				//Query the data in Json format
				jQuery.getJSON(url, function(data){
				let entry = data.feed.entry;
				//Query each data from every column
                    jQuery(entry).each(function(){
                        let pic = this.gsx$picture.$t;
                        let name = this.gsx$name.$t;
                        let stat = this.gsx$status.$t;
                        let lim = this.gsx$limit.$t;
                        let type = this.gsx$type.$t;
						//Append every data into the table body inside the main page
                        jQuery("#t-body").append(`
                            <tr>
                                <td><img src="Images//${pic}" alt="Laptop" height="150" width="150" ></td>                              
                                <td>${name}</td>
                                <td>${stat}</td>
                                <td>${lim}</td>
                            </tr>
                        `);

                    });
                    
                });

        //Filter function: To display sorted items according to selected type into the table body in the main page
		function filter(t){
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
							if(type == "Canned")
							{
							jQuery("#t-body").append(`
								<tr>
									<td><img src="Images//${pic}" alt="Laptop" height="150" width="150" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
								</tr>
							`);
							}
						}else if(t== "2"){
							if(type == "Cereal")
							{
							jQuery("#t-body").append(`
								<tr>
									<td><img src="Images//${pic}" alt="Laptop" height="150" width="150" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
								</tr>
							`);
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
								</tr>
							`);
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
								</tr>
							`);
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
								</tr>
							`);
							}
						}
						else if(t== "6"){
							jQuery("#t-body").append(`
								<tr>
									<td><img src="Images//${pic}" alt="Laptop" height="150" width="150" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
								</tr>
							`);
							
						}
                    });
                
                    
                });
                }
				
			            
	//	Search function	
	$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#t-body tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



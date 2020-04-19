let spreadsheetID = "1849CSeI6TmOPOeuwDMdPDa5f-xDNT6aCOr1OZB96kwQ"; // Sheet ID
                //let url = "https://spreadsheets.google.com/feeds/list/"+spreadsheetID+"/od6/public/values?alt=json";
                let url ="https://spreadsheets.google.com/feeds/list/"+spreadsheetID+"/od6/public/values?alt=json";
                jQuery.getJSON(url, function(data){
                let entry = data.feed.entry;
                    jQuery(entry).each(function(){
                        let pic = this.gsx$picture.$t;
                        let name = this.gsx$name.$t;
                        let stat = this.gsx$status.$t;
                        let lim = this.gsx$limit.$t;
                        let type = this.gsx$type.$t;

                        jQuery("#t-body").append(`
                            <tr>
                                <td><img src=${pic} alt="Laptop" height="200" width="200" ></td>       
                                <td>${name}</td>
                                <td>${stat}</td>
                                <td>${lim}</td>
                            </tr>
                        `);

                    });
                    
                });

        
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
							if(type == "Can")
							{
							jQuery("#t-body").append(`
								<tr>
									<td><img src=${pic} alt="Laptop" height="200" width="200" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
								</tr>
							`);
							}
						}else if(t== "2"){
							if(type == "Snack")
							{
							jQuery("#t-body").append(`
								<tr>
									<td><img src=${pic} alt="Laptop" height="200" width="200" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
								</tr>
							`);
							}
						}else if(t== "3"){
							if(type == "Drink")
							{
							jQuery("#t-body").append(`
								<tr>
									<td><img src=${pic} alt="Laptop" height="200" width="200" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
								</tr>
							`);
							}
						}else if(t== "4"){
							if(type == "Noodle")
							{
							jQuery("#t-body").append(`
								<tr>
									<td><img src=${pic} alt="Laptop" height="200" width="200" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
								</tr>
							`);
							}
						}
						else if(t== "5"){
							jQuery("#t-body").append(`
								<tr>
									<td><img src=${pic} alt="Laptop" height="200" width="200" ></td>                              
									<td>${name}</td>
									<td>${stat}</td>
									<td>${lim}</td>
								</tr>
							`);
							
						}

                    });
                
                    
                });
                }
				
			            
			
	$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#t-body tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


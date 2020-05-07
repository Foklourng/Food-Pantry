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
                                <td><img src="Images//${pic}" alt="Laptop" height="150" width="150" ></td>                              
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
							if(type == "canned")
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
							if(type == "cereal")
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
				
			            
			
	$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#t-body tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



// Basic example
$(document).ready(function () {
  $('#t01').DataTable({
    "pagingType": "simple" // "simple" option for 'Previous' and 'Next' buttons only
  });
  $('.dataTables_length').addClass('bs-select');
});
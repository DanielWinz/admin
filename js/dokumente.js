/**
 * @author wenzd
 * Implementing filter function for data
 */
$(document).ready(function(){
	
	var counter_excel = 0;
	var counter_word = 0;
	var counter_ppt = 0;
	var counter_pdf = 0;
	
	$("#excel").click(function(){
		
		console.log("wert von: " + counter_excel);
		
		if(counter_excel % 2 == 0){
			$(".bg-danger").hide();
			$(".bg-primary").hide();
			$(".bg-warning").hide();	
		}
		
		else{
			$(".bg-danger").show();
			$(".bg-primary").show();
			$(".bg-warning").show();
		}
		
		counter_excel++;
	});
	
	$("#word").click(function(){
		
		console.log("wert von: " + counter_word);
		
		if(counter_word % 2 == 0){
			$(".bg-danger").hide();
			$(".bg-success").hide();
			$(".bg-warning").hide();	
		}
		
		else{
			$(".bg-danger").show();
			$(".bg-success").show();
			$(".bg-warning").show();
		}
		
		counter_word++;
	});
	
	$("#ppt").click(function(){
		
		if(counter_ppt % 2 == 0){
			$(".bg-danger").hide();
			$(".bg-success").hide();
			$(".bg-primary").hide();	
		}
		
		else{
			$(".bg-danger").show();
			$(".bg-success").show();
			$(".bg-primary").show();
		}
		
		counter_ppt++;
	});
	
	$("#pdf").click(function(){
		
		if(counter_pdf % 2 == 0){
			$(".bg-warning").hide();
			$(".bg-success").hide();
			$(".bg-primary").hide();	
		}
		
		else{
			$(".bg-warning").show();
			$(".bg-success").show();
			$(".bg-primary").show();
		}
		
		counter_pdf++;
	});
	
});

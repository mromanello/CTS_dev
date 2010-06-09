/*
* Client for CTS webservices.
*/
function CTS_client(){
	this.ctsurl=null;
	this.callback=null;
	/*
	* TODO write doc
	*/
	this.selectService=function(ctsURL){
		if(ctsURL!=null)this.ctsurl=ctsURL;
	}
	/*
	* TODO write doc
	*/
	this.isServiceSelected=function(){
		return this.ctsurl!=null;
	}
	/*
	* TODO write doc
	*/
	this.getPassage=function(ctsURN,callbackFunction){
		if(this.isServiceSelected()){
			var citation=new CanonicalReference(ctsURN);
			var getPassageURL="?request=GetPassagePlus&inv=fhg-inventory.xml&withXSLT=true";
			if(callbackFunction!=null)this.callback=callbackFunction;
			if(citation.isValidCtsUrn(ctsURN)){
				var callURL=this.ctsurl+getPassageURL+"&urn="+ctsURN;
				log(callURL);
				$.ajax({
				 url: callURL,
				 dataType: "html",
				 success: callbackFunction
			   });
			}
		}
		else{
			throw("No CTS service selected.");
		}
	}
}
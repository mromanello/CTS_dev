/*
* Utility function
*/
function concat(input,suffix){
	var count=0;
	var res="";
	for(i in input){
		res+=input[i];
		count++;
		if(count<input.length)
		res+=":";
	}
	return res;
}

/*
* Checks whether a console for debugging is available or not
*/
function isConsoleAvailable(){
		if(!window.console || !console.firebug){
			return false;
		}
		else{
			return true;
		}
	}
/*
* Wraps a log writing functionality.
* Prints logs only when an output is available.
*/
function log(msg,mode){
	if(mode==null||mode=='info'){
		mode="info"
		if(isConsoleAvailable()){
				console.info(msg);
		}
	}
	else if(mode=='error'){
		if(isConsoleAvailable()){
				console.error(msg);
		}
	}
	else if(mode=='warning'){
		if(isConsoleAvailable()){
				console.warn(msg);
		}
	}
}

function CanonicalReference(input){
	/*
	* Object properties
	*/
	var work=null;
	var passage=null;
	var edition=null;
	var namespace=null;
	var textgroup=null;
	var edition=null;
	var chunks=null;
	/*
	* TODO
	*/
	this.setValuesFromURN=function(input){
		this.chunks = input.split(':');
		//this.setNamespace(concat([chunks[0],chunks[1],chunks[2]],':'));
		this.setNamespace(this.chunks[2]);
		this.setTextGroup(this.chunks[3].split('.')[0]);
		this.setWork(this.chunks[3].split('.')[1]);
		if(this.isEdition())this.setEdition(this.chunks[3].split('.')[2]);
		if(this.hasPassage())this.setPassage(this.chunks[4]);
	}
	/*
	* Checks whether the citation object has a passage reference or not.
	*/
	this.hasPassage=function(){
		return this.chunks.length==5;
	}
	/*
	* Checks whether the citation object has a passage reference or not.
	*/
	this.isEdition=function(){
		return this.chunks[3].split('.').length==3;
	}
	/*
	* Checks the syntax of the input string.
	* If true the string is a CTS URN.
	*/
	this.isValidCtsUrn=function(input){
		if(input.split(':').length>=4 && input.split(':')[0]=="urn"){
			return true;
		}
		else{
			return false;
		}
	}
	/*
	* Test for Ajax requests.
	*/
	this.testAjax=function(){
		$.ajax({
		 url: 'test-ajax.html',
		 success: function(data) {
		   alert('Load was performed.');
		   return 'done';
		 }
	   });
	}
	
	this.getLevels=function(){
		if(this.passage!=null){
			return this.passage.split('.').length;
		}
	}
	
	/*
	* Init function for CanonicalReference object
	*/
	this.init=function(input){
		if(input!=null){
			if(this.isValidCtsUrn(input)){
				this.setValuesFromURN(input);
				log("\""+input+"\"" +"is a CTS URN.");
			}
			else{
				log("\""+input+"\"" +"is not a CTS URN.",'warning');
			}
		}
		log("New CanonicalReference object initialized.");
	}
	/*
	*
	*/
	this.setTextGroup=function(input){
		this.textgroup=input;
		log("TextGroup property set to \""+this.getTextGroup()+"\".");
	}
	/*
	*
	*/
	this.getTextGroup=function(input){
		return this.textgroup;
	}
	/*
	*
	*/
	this.setWork=function(input){
		this.work=input;
		log("Work property set to \""+this.getWork()+"\".");
	}
	/*
	*
	*/
	this.getWork=function(){
		return this.work;
	}
	/*
	*
	*/
	this.setPassage=function(input){
		this.passage=input;
		log("Passage property set to \""+this.getPassage()+"\".");
	}
	/*
	*
	*/
	this.getPassage=function(){
		return this.passage;
	}
	/*
	*
	*/
	this.setNamespace=function(input){
		this.namespace=input;
		log("Namespace property set to \""+this.getNamespace()+"\".");
	}
	/*
	*
	*/
	this.getNamespace=function(){
		return this.namespace;
	}
	/*
	*
	*/
	this.setEdition=function(input){
		this.edition=input;
		log("Edition property set to \""+this.getEdition()+"\".");
	}
	/*
	*
	*/
	this.getEdition=function(){
		return this.edition;
	}
	//
	this.init(input);
}
var test='urn:cts:greekLit:tlg0008.tlg001.fhg01:1.1';
var client = new CTS_client();
client.selectService('http://fragments-repo.appspot.com/CTS');
var cref=new CanonicalReference(test);
if(cref.hasPassage()) log(cref.getLevels());
client.getPassage(test,function(data){$('#res').html(data)});
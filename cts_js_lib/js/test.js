// CTS URN as string
var test='urn:cts:greekLit:tlg0003.tlg001.perseus-eng1:1.22';

// Create a citation object from a CTS URN
var cref=new CanonicalReference(test);

// Initialize the client
var client = new CTS_client();

// Connect to a CTS webservice
client.selectService('http://www.perseus.tufts.edu/hopper/CTS');

// Writes to the console how many levels the citation has (if it has a passage element)
if(cref.hasPassage()) console.log(cref.getLevels());

// Get the text passage specified in the URN and push the XML returned by the CTS webservice
// into an HTML element
client.getPassage(test,function(data){console.log(data)});
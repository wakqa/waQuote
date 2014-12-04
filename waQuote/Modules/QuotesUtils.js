/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'QuotesUtils' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(QuotesUtils.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.executeQuery = function executeQuery(param1, param2) {
    var result = [];
	var result2 = [];
	var result3 = [];
    if (param1 != "Topic") {
        result = ds.Topic.query("Name eq :1", param1).QuotesCollection.Quotes;
        if (param2 != "Nationality") {
            result2 = result.query("Nationality eq :1", param2).Words;
            result3 = result.query("Nationality eq :1", param2).Author;

        }

    }
    //var c = b.query("Profession eq :1",param3);
    var res = new Array;
    
    
    for (var i = 0; i < result.length; i++) {
        res.push({
            Quote: result2[i],
            Author : result3[i]
        });
    };
	
    return res;
};
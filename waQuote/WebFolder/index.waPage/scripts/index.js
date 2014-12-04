
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var combobox8 = {};	// @combobox
	var combobox7 = {};	// @combobox
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	combobox8.change = function combobox8_change (event)// @startlock
	{// @endlock
		result=QuotesUtils.executeQuery($$('combobox7').getValue(),$$('combobox8').getValue());
	   sources.result.sync();
	};// @lock

	combobox7.change = function combobox7_change (event)// @startlock
	{// @endlock
		
		
	   result=QuotesUtils.executeQuery($$('combobox7').getValue(),$$('combobox8').getValue());
	   sources.result.sync();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		nationalities.push({nationality:"Nationality"});
		nationalities.push({nationality:"American"});
		nationalities.push({nationality:"British"});
		source.nationalities.sync();
		
		professions.push({profession:"Profession"});
		professions.push({profession:"Actor"});
		professions.push({profession:"Actress"});
		professions.push({profession:"Politician"});
		professions.push({profession:"Clergyman"});
		source.professions.sync();


	};// @lock

// @region eventManager// @startlock
	WAF.addListener("combobox8", "change", combobox8.change, "WAF");
	WAF.addListener("combobox7", "change", combobox7.change, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock

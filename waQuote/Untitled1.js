////var quote = ds.Quote.query("Nationality eq :1","British")[0];
////var topic = ds.Topic.query("Name eq :1","Art")[0];

////var qbt = new ds.QuotesByTopic({Quotes: quote, Topics: topic});
////qbt.save();

//ds.QuotesByTopic.all().Quotes;

var a = ds.Topic.query("Name eq :1","Art").QuotesCollection.Quotes;
var b = a.query("Nationality eq :1","British");
b.query("Profession eq :1","*");
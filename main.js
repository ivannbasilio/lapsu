var lapsu = require('./lapsu.js')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite uma data (formato mm/dd/aaaa): ', date => {
	var timeAgo = lapsu.timeago(new Date(date))
 
	if (timeAgo) {
		console.log('\n Isso ocorreu há ' + timeAgo)
	} 

  	readline.close();
});

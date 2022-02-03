const lapsu = {
	timeago(date) {
		if (isNaN(Date.parse(date))) {
  			console.log('Isso não é um um formato de data válido')
  			return;
		}

		var seconds  = Math.floor((new Date() - date) / 1000);
  		var interval = seconds / 31536000;

  		if (interval > 1) {
    		return Math.floor(interval) + ' anos atrás';
  		}
  		
  		interval = seconds / 2592000;
  		if (interval > 1) {
    		return Math.floor(interval) + ' meses atrás';
  		}
  		
  		interval = seconds / 86400;
  		if (interval > 1) {
    		return Math.floor(interval) + 'd atrás';
  		}
  		
  		interval = seconds / 3600;
  		if (interval > 1) {
    		return Math.floor(interval) + 'h atrás';
  		}
  		
  		interval = seconds / 60;
  		if (interval > 1) {
    		return Math.floor(interval) + 'm atrás';
  		}
  			
  		return Math.floor(seconds) + 's atrás';
  	}		
}

module.exports = lapsu
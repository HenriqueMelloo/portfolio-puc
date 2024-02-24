// TDD - Test Driven Development
var newMap = new Map();

class HistoryMap {

}

// 11.11.2011 as 11:00hs da noite
newMap.set('11/11/11/2011 - 23:30 - URL', { title: 'Titulo do site', url: 'url sozinha' });
//newMap.set('11/11/11/2011 - 23:30 - URL', {});
newMap.set('11/11/11/2011 - 23:31 - URL', {});


var result = newMap.get('11/11/11/2011 - 23:30 - URL');
console.log(result)
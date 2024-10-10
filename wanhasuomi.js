function showme(){

// <!-- stoppi -->
var stop = -1;

// <!-- waihdetaan caicki yxittäiset cirjaimet wanhaxi somexi -->
var input1k = document.formi.wanhasuomi.value = document.formi.wanhasuomi.value.toLowerCase();
while((input1k.search('k'))!=stop) input1k=input1k.replace('k','c');
while((input1k.search('v'))!=stop) input1k=input1k.replace('v','w');

// <!-- waihdetaan caicki caxi-cirjain yhdistelmät wanhaxi somexi  -->
var input2k = input1k;
while((input2k.search('cc'))!=stop) input2k=input2k.replace('cc','ck');
while((input2k.search('cs'))!=stop) input2k=input2k.replace('cs','x');
while((input2k.search('uo'))!=stop) input2k=input2k.replace('uo','oo');
while((input2k.search('uu'))!=stop) input2k=input2k.replace('uu','w');
while((input2k.search('hd'))!=stop) input2k=input2k.replace('hd','dh');
while((input2k.search('ii'))!=stop) input2k=input2k.replace('ii','ij');
while((input2k.search('ts'))!=stop) input2k=input2k.replace('ts','tz');
while((input2k.search('ht'))!=stop) input2k=input2k.replace('ht','ct');
while((input2k.search('lt'))!=stop) input2k=input2k.replace('lt','ld');
while((input2k.search('mp'))!=stop) input2k=input2k.replace('mp','mb');
while((input2k.search('rt'))!=stop) input2k=input2k.replace('rt','rdh');
while((input2k.search('oi'))!=stop) input2k=input2k.replace('oi','oj');

// <!-- waihdetaan caicki colmi-cirjain yhdistelmät wanhaxi suomexi  -->
var input3k = input2k;
while((input3k.search('aua'))!=stop) input3k=input3k.replace('aua','auua');
while((input3k.search('iva'))!=stop) input3k=input3k.replace('iva','iua');
while((input3k.search('d\u00e4'))!=stop) input3k=input3k.replace('d\u00e4','dhe');
while((input3k.search('da'))!=stop) input3k=input3k.replace('da','dha');
while((input3k.search('de'))!=stop) input3k=input3k.replace('de','dhe');
while((input3k.search('\u00e4\u00e4'))!=stop) input3k=input3k.replace('\u00e4\u00e4','ie');
while((input3k.search('rce'))!=stop) input3k=input3k.replace('rce','rche');
while((input3k.search('ncui'))!=stop) input3k=input3k.replace('ncui','nqui');
while((input3k.search('cristi'))!=stop) input3k=input3k.replace('cristi','christi');
while((input3k.search('ja '))!=stop) input3k=input3k.replace('ja ','ia ');

// <!-- waihdetaan caicki loput yhdistelmät wanhaxi somexi  -->
var input4k = input3k;
while((input4k.search('\u00e4'))!=stop) input4k=input4k.replace('\u00e4','e');
while((input4k.search('soom'))!=stop) input4k=input4k.replace('soom','som');
while((input4k.search('ttaa'))!=stop) input4k=input4k.replace('ttaa','tta');
while((input4k.search('cristi'))!=stop) input4k=input4k.replace('cristi','christi');
while((input4k.search('ntee'))!=stop) input4k=input4k.replace('ntee','nde');
while((input4k.search('toom'))!=stop) input4k=input4k.replace('toom','dom');


// <!-- näytetään tulos caicen cansan ihmeteltäwäxi  -->
document.write('<html>\n<head><style>@import url(https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap);font-family: UnifrakturMaguntia, cursive;</style></head><body>' + input4k.fontcolor('black') + '\n<br>\n<br>\n<a href="muunna.htm">Tacaisin</a></body>\n</html>');}

const fs = require('fs');
const cheerio = require('cheerio');

const file = fs.readFileSync('./trace.html');

const $ = cheerio.load(file);


$('h1').attr('data-step');
// Returns 'Start in the second div'

$('body > div').eq(1).data('step')
// Returns 'Get the 4th aside element inside this div'

$('body > div').eq(1).children('aside').eq(3).data('step')
// Returns 'Search for the first sibling article of the element with id fenab45pBLoqxKIIpTr1'

$('#fenab45pBLoqxKIIpTr1').eq(0).siblings('article').eq(0).data('step')
// Returns 'Go to the 3rd div of the parent of my parent'

$('#fenab45pBLoqxKIIpTr1').eq(0).parent().parent().children('div').eq(2).data('step')
// Returns 'Find the last child of the element with the following step data: Almundo NodeConf'

$('[data-step="Almundo NodeConf"]').children().last().data('step')
// Returns 'Find the parent of the link element that has a URL that contains the word challenge'

$('a').filter(function (index, element) {
  const attribs = element.attribs;
  if (!attribs) {
    return false;
  }
  return (attribs.href || '').indexOf('challenge') > -1;
}).eq(0).parent().data('step')  // THERE ARE 2 LINKS MATCHING!!!! Let's arbitrarily choose the first one :facepalm:
// Returns 'You found me, now get the first div of the last article of the element with id abENg49tAehk5R9UcxAc'
// (following the other match shows 'The answer is in Lake Giovanna', which makes no sense)


$('#abENg49tAehk5R9UcxAc').children('article').last().children('div').first().data('step')
// Returns 'Get the 4th last article from the element whose data step ends with 2018'

$('*').filter(function (index, element) {
  const attribs = element.attribs;
  if (!attribs) return false;
  const step = attribs['data-step'];
  if (!step) return false;
  return step.endsWith('2018') && element.children.length >=4
}).children('article').eq(-4).data('step')
// Returns 'Get the 3rd child of the first code element that appears deep inside the div with id abe491WLrX3B8R5Dg1rM'

$('#abe491WLrX3B8R5Dg1rM').find('code').children().eq(2).data('step')
// Returns 'Finally, the answer to this challenge is the id of the element you found in the previous step'

$('*').filter(function (index, element) {
  const attribs = element.attribs;
  if (!attribs) return false;
  const step = attribs['data-step'];
  if (!step) return false;
  return step.endsWith('2018') && element.children.length >= 4
}).children('article').eq(-4).attr('id')
// Returns '8SOZdOG9nSaRsVoBRhDm'

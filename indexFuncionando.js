/*
{\rtf1\ansi\ansicpg1252\deff0\deflang1046{\fonttbl{\f0\fnil\fcharset0 MS Sans Serif;}{\f1\fnil MS Sans Serif;}}
\viewkind4\uc1\pard\f0\fs20 Reuni\'e3o \f1 n\'e3o p\'e3o c\'e3o
\par }
*/

const rtfDictionary = {
  "'e3": "ã",
  "'99": "teste"
};

/**
 * Encontra se o valor existir na string
 * @param {string} str
 * @returns {string[]}
 */

function regexTest(str) {
  const myRegex = /\'[0-9a-f]+/g;
  const arrMatched = str.match(myRegex);
  return arrMatched;
}

function replaceArrayRegex(replaceString, find, replace) {
  var regex;
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
}

console.log(
  replaceArrayRegex(
    `{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang1046{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}
    //   \\viewkind4\\uc1\\pard\\f0\\fs20 Reuni\'e3o n\'e3o p\'e3o c\'e3o \'99 \'99 \'ff 11 \'99\\f1
    //   \\par }`,
    Object.keys(rtfDictionary),
    Object.values(rtfDictionary)
  )
);
/**
 * Executa replace em todas ocorrencias usando o dicionario
 * @param {string[]} key
 */
// function dictionaryReplace(key) {
//   console.log(key);
//   // rtfDictionary[key]
// }

// console.log(
//   regexTest(`{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang1046{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}
//   \\viewkind4\\uc1\\pard\\f0\\fs20 Reuni\'e3o n\'e3o p\'e3o c\'e3o \'99 \'99 \'ff 11 \'99\\f1
//   \\par }`)
// );

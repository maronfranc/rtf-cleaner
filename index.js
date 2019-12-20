const testString = `{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang1046{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}
//   \\viewkind4\\uc1\\pard\\f0\\fs20 Reuni\'e3o n\'e3o p\'e3o c\'e3o \'99 \'99 \'ff 11 \'99\\f1
//   \\par }`;

const rtfDictionary = {
  "’20": "Space",
  "’21": "!",
  "’22": '"',
  "’23": "#",
  "’24": "$",
  "’25": "%",
  "’26": "&",
  "’27": "'",
  "’28": "(",
  "’29": ")",
  "’2a": "*",
  "’2b": "+",
  "’2c": ",",
  // Hyphen(use\_fornonbreakinghyphen)
  "’2d": "-",
  "’2e": ".",
  "’2f": "/",
  "’3a": ":",
  "’3b": ";",
  "’3c": "<",
  "’3d": "=",
  "’3e": ">",
  "’3f": "?",
  "’40": "@",
  "’5b": "[",
  "’5c": "\\",
  "’5d": "]",
  "’5e": "^",
  "’5f": "_",
  "’60": "`",
  "’7b": "{",
  "’7c": "|",
  "’7d": "}",
  "’7e": "~",
  "’80": "Eurocharacter",
  "’82": "͵",
  "’83": "ƒ",
  "’84": ",,",
  "’85": "...",
  "’86": "†",
  "’87": "‡",
  "’88": "∘",
  "’89": "‰",
  "’8a": "Š",
  "’8b": "‹",
  "’8c": "Œ",
  "’8e": "Ž",
  "’91": "‘",
  "’92": "’",
  "’93": "“",
  "’94": "”",
  "’95": "•",
  "’96": "–",
  "’97": "—",
  "’98": "~",
  "’99": "™",
  "’9a": "š",
  "’9b": "›",
  "’9c": "œ",
  "’9e": "ž",
  "’9f": "Ÿ",
  "~": "Nonbreakingspace",
  "'a1": "¡",
  "'a2": "¢",
  "'a3": "£",
  "'a4": "¤",
  "'a5": "¥",
  "'a6": "¦",
  "'a7": "§",
  "'a8": "¨",
  "'a9": "©",
  "'aa": "ª",
  "'ab": "«",
  "'ac": "¬",
  "-": "(-)",
  "'ae": "®",
  "'af": "¯",
  "'b0": "°",
  "'b1": "±",
  "'b2": "²",
  "'b3": "³",
  "'b4": "´",
  "'b5": "µ",
  "'b6": "¶",
  "'b7": "·",
  "'b8": "¸",
  "'b9": "¹",
  "'ba": "º",
  "'bb": "»",
  "'bc": "¼",
  "'bd": "½",
  "'be": "¾",
  "'bf": "¿",
  "'c0": "À",
  "'c1": "Á",
  "'c2": "Â",
  "'c3": "Ã",
  "'c4": "Ä",
  "'c5": "Å",
  "'c6": "Æ",
  "'c7": "Ç",
  "'c8": "È",
  "'c9": "É",
  "'ca": "Ê",
  "'cb": "Ë",
  "'cc": "Ì",
  "'cd": "Í",
  "'ce": "Î",
  "'cf": "Ï",
  "'d0": "Ð",
  "'d1": "Ñ",
  "'d2": "Ò",
  "'d3": "Ó",
  "'d4": "Ô",
  "'d5": "Õ",
  "'d6": "Ö",
  "'d7": "×",
  "'d8": "Ø",
  "'d9": "Ù",
  "'da": "Ú",
  "'db": "Û",
  "'dc": "Ü",
  "'dd": "Ý",
  "'de": "Þ",
  "'df": "ß",
  "'e0": "à",
  "'e1": "á",
  "'e2": "â",
  "'e3": "ã",
  "'e4": "ä",
  "'e5": "å",
  "'e6": "æ",
  "'e7": "ç",
  "'e8": "è",
  "'e9": "é",
  "'ea": "ê",
  "'eb": "ë",
  "'ec": "ì",
  "'ed": "í",
  "'ee": "î",
  "'ef": "ï",
  "'f0": "ð",
  "'f1": "ñ",
  "'f2": "ò",
  "'f3": "ó",
  "'f4": "ô",
  "'f5": "õ",
  "'f6": "ö",
  "'f7": "÷",
  "'f8": "ø",
  "'f9": "ù",
  "'fa": "ú",
  "'fb": "û",
  "'fc": "ü",
  "'fd": "ý",
  "'fe": "þ",
  "'ff": "ÿ"
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

/**
 * Recebe string e troca os valores de acordo com o dicionario
 * @param {string} str
 * @param {{string: string}} dictionary
 * @returns {string} string com valores substitiudos
 */
function replaceArrayRegex(str, dictionary) {
  const find = Object.keys(dictionary);
  const replace = Object.values(dictionary);
  var regex;
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    str = str.replace(regex, replace[i]);
  }
  return str;
}

console.log(replaceArrayRegex(testString, rtfDictionary));

const tagsSorted = function (dict) {
  let keys = Object.keys(dict)

  for (var i = keys.length; i >= 0; i--) {
    for (var j = keys.length; j > 0; j--) {
      if (dict[keys[i]] < dict[keys[j]]) {
        let temp = keys[j]
        keys[j] = keys[i]
        keys[i] = temp
      }
    }
  }

  return keys
}

const slugify = function (text) {
  let lowercasedstring = text.toString().toLowerCase()

  // removes diactrics and accents from string
  // useful for my french blog ;)
  //
  let accentlessText = lowercasedstring
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  return accentlessText
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
    .replace(/:/g, "") // remove colon
}

module.exports = { tagsSorted, slugify }

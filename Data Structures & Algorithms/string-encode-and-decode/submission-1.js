class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
    const encoded = (str) =>
        str
          .split('')
          .map(ch => ch.charCodeAt())
          .join('#');

    return strs
      .map(s => `[${encoded(s)}]`)
      .join('-');
}
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    if (!str) return [];

    const decoded = (str) =>
        !str
          ? ''
          : str
              .split('#')
              .map(ch =>
                  String.fromCharCode(ch)
              )
              .join('');

    return str
      .split('-')
      .map(s =>
          decoded(s.slice(1, -1))
      );
}
}

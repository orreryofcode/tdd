export const areAnagrams = (str1, str2) => {
  const word1 = str1.toLowerCase().split("").sort().join("").trim();
  const word2 = str2.toLowerCase().split("").sort().join("").trim();

  if (word1 === word2) {
    return true;
  } else {
    return false;
  }
};

console.log(areAnagrams("conversation", "voices rant on"));

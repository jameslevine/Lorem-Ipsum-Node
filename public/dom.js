function paragraphFunc() {
  let paragraphNumber = document.getElementById("paragraph").value;
  let sentenceNumber = document.getElementById("sentence").value;
  console.log(paragraphNumber);
  apiCall(paragraphNumber, sentenceNumber);
};

function apiCall(x, y) {
  const LoremApiRequest = new XMLHttpRequest();
  const loremURL = `https://baconipsum.com/api/?type=meat-and-filler&paras=${x}&sentences=${y}&start-with-lorem=1`;
  console.log(loremURL);
  LoremApiRequest.onreadystatechange = () => {
  if (LoremApiRequest.readyState == 4 && LoremApiRequest.status == 200) {
    const loremIpsum = JSON.parse(LoremApiRequest.responseText);
    console.log(loremIpsum);
    document.getElementById("lorem-text").textContent = loremIpsum;
}
}
LoremApiRequest.open('GET', loremURL, true);
LoremApiRequest.send();
}

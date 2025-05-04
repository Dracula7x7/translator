function translateText() {
  const text = document.getElementById("inputText").value;
  const targetLanguage = document.getElementById("languageSelect").value;

  fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("outputText").innerText = data.responseData.translatedText;
    })
    .catch(error => {
      document.getElementById("outputText").innerText = "حدث خطأ أثناء الترجمة.";
    });
}

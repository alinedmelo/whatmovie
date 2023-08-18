const submitBtn = document.getElementById("submitBtn");
const userInput = document.getElementById("userInput");
const response = document.getElementById("response");

submitBtn.addEventListener("click", async () => {
    const inputText = userInput.value;

    // Fazer uma solicitação à API do GPT-3.5
    const responseText = await getMovieSuggestions(inputText);

    // Mostrar a resposta na interface
    response.innerHTML = `<p><strong>Bot:</strong> ${responseText}</p>`;
});

async function getMovieSuggestions(input) {
    const apiKey = "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"; // Substitua pelo seu próprio chave de API
    const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

    const requestData = {
        prompt: input,
        max_tokens: 50
    };

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestData)
    });

    const responseData = await response.json();
    return responseData.choices[0].text.trim();
}
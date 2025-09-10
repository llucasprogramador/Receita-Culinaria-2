document.addEventListener("DOMContentLoaded", () => {
  // Seleção de todos os elementos HTML
  const recipeTittleEl = document.getElementById("recipe-title")
  const recipeDescription = document.getElementById("recipe-description")
  const ingredientsListEl = document.getElementById("ingredients-list")
  const stepNumberEl = document.getElementById("step-number")
  const stepImageEl = document.getElementById("step-image")
  const stepTextEl = document.getElementById("step-text")
  const timerDisplayEl = document.getElementById("timer-display")
  const stepCompletedCheckbox = document.getElementById("step-completed-checkbox")
  const prevStepBtn = document.getElementById("prev-step-btn")
  const nextStepBtn = document.getElementById("next-step-btn")
  const restartRecipeBtn = document.getElementById("restart-recipe-btn")
  const messageBox = document.getElementById("message-box")
  const messageText = document.getElementById("message-text")
  const closeMessageBtn = document.getElementById("close-message-btn")

  const recipe = {
        name: 'Massa à Carbonara',
        description: 'Massa al dente, mergulhada em um molho aveludado e finalizada com o toque de frescor dos temperos. Cada garfada é uma experiência.',
        ingredients: [
            '320 g de macarrão (preferencialmente espaguete ou rigatoni)',
            '150 g de guanciale (ou pancetta)',
            '3 gemas de ovo',
            '1 ovo inteiro',
            '100 g de queijo Pecorino Romano ralado',
            'Pimenta-do-reino preta moída na hora',
            'Sal grosso para a água do macarrão'
        ],
    steps: [
      {
        text: "Corte o guanciale em cubos pequenos e uniformes. Coloque os cubos em uma frigideira fria em fogo baixo. Cozinhe lentamente até que a gordura derreta e o guanciale fique crocante. Retire a frigideira do fogo e separe o guanciale crocante, deixando a gordura derretida na frigideira.",
        image: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-38a0-622f-88bb-4e2e1dd330b3/raw?se=2025-09-10T13%3A52%3A59Z&sp=r&sv=2024-08-04&sr=b&scid=07f53efd-afb1-5189-914f-57108f8fba05&skoid=24a7dec3-38fc-4904-b888-8abe0855c442&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-09T19%3A59%3A48Z&ske=2025-09-10T19%3A59%3A48Z&sks=b&skv=2024-08-04&sig=6papdLjNkaNUhUAaZc3SSKjjbOL0EY8n5vAzIuag42E%3D",
        timer: 600, // 10 minutos
      },
      {
        text: "Ferva uma panela grande com água e adicione uma quantidade generosa de sal grosso. Adicione o macarrão e cozinhe conforme as instruções da embalagem até que fique al dente. Antes de escorrer, reserve cerca de uma concha da água do cozimento.",
        image: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-0db8-622f-ae13-df609d8336d7/raw?se=2025-09-10T13%3A52%3A59Z&sp=r&sv=2024-08-04&sr=b&scid=7bdb12f9-518d-5f87-8eb7-b5ceaa754eab&skoid=24a7dec3-38fc-4904-b888-8abe0855c442&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-09T20%3A02%3A14Z&ske=2025-09-10T20%3A02%3A14Z&sks=b&skv=2024-08-04&sig=kT%2B1Fb0c0or1DTXF8F5%2BliLauT8gL3WO6ZK3ebCHHp0%3D",
        timer: 1320, // 22 minutos
      },
      {
        text: "Em uma tigela grande, bata as 3 gemas e o ovo inteiro. Adicione o Pecorino Romano ralado e misture bem. Tempere com bastante pimenta-do-reino moída na hora. Misture até formar uma pasta cremosa.",
        image: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-1ac0-622f-8a44-2ee9c4192e45/raw?se=2025-09-10T13%3A52%3A59Z&sp=r&sv=2024-08-04&sr=b&scid=95813a56-4c01-5f0d-a1ba-456d6c7d2ccb&skoid=24a7dec3-38fc-4904-b888-8abe0855c442&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-09T20%3A02%3A05Z&ske=2025-09-10T20%3A02%3A05Z&sks=b&skv=2024-08-04&sig=1IA3syNXAxGUQLufxrbfGv6iRJ52/3KCc5mZLIBea5M%3D",
        timer: 480, // 8 minutos
      },
      {
        text: "Com a frigideira do guanciale ainda quente, adicione o macarrão escorrido e a mistura de ovos e queijo (FORA DO FOGO!). Misture vigorosamente, adicionando a água do cozimento reservada aos poucos, até que o molho fique cremoso. Adicione o guanciale crocante e misture novamente.",
        image: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-994c-622f-ba04-24fcb1a57ca1/raw?se=2025-09-10T13%3A52%3A59Z&sp=r&sv=2024-08-04&sr=b&scid=9af5f937-665d-502d-b24b-b59ca756788a&skoid=24a7dec3-38fc-4904-b888-8abe0855c442&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-10T07%3A50%3A12Z&ske=2025-09-11T07%3A50%3A12Z&sks=b&skv=2024-08-04&sig=roo/iyq6HDJ%2BioCQa3MJP46m0S43kQtQpqTiodDry84%3D",
        timer: 300, // 15 minutos
      },
      {
        text: "Sirva imediatamente em pratos quentes. Finalize com mais pimenta-do-reino moída na hora e, se desejar, um pouco mais de Pecorino Romano ralado. Bom apetite!",
        image: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-4e4c-622f-abf6-2a4de0506a27/raw?se=2025-09-10T13%3A53%3A00Z&sp=r&sv=2024-08-04&sr=b&scid=ef6716e8-5fe3-5a21-95ca-e0c6e386506c&skoid=24a7dec3-38fc-4904-b888-8abe0855c442&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-10T07%3A49%3A41Z&ske=2025-09-11T07%3A49%3A41Z&sks=b&skv=2024-08-04&sig=nAMKgsbE5IK7huT4fGW9ddx2WqyjGDH71anwDuVtIpE%3D",
        timer: 120, // 45 minutos
      },
    ],
  }

  // Variáveis de estado
  let currentStepIndex = 0
  let timerInterval = null
  let timerRemaining = 0

  // Funções do aplicativo
  function showMessage(message) {
    messageText.textContent = message
    messageBox.style.display = "flex"
  }

  function hideMessage() {
    messageBox.style.display = "none"
  }

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval)
      timerInterval = null
    }
  }

  function startStepTimer(durationinSeconds) {
    stopTimer()
    timerRemaining = durationinSeconds
    timerDisplayEl.textContent = formatTime(timerRemaining)

    timerInterval = setInterval(() => {
      timerRemaining--
      if (timerRemaining >= 0) {
        timerDisplayEl.textContent = formatTime(timerRemaining)
      } else {
        stopTimer()
        showMessage("Tempo do passo esgotado!")
      }
    }, 1000)
  }

  function showStep(stepIndex) {
    // Valida o índice do passo
    if (stepIndex < 0 || stepIndex >= recipe.steps.length) {
      return
    }

    currentStepIndex = stepIndex
    const currentStep = recipe.steps[currentStepIndex]

    // Atualiza o conteúdo da página com base no passo atual
    stepTextEl.textContent = currentStep.text
    console.log("[v0] Loading image:", currentStep.image)
    stepImageEl.src = currentStep.image
    stepImageEl.style.display = "block"
    stepCompletedCheckbox.checked = false

    // Inicia ou para o cronômetro
    if (currentStep.timer > 0) {
      startStepTimer(currentStep.timer)
    } else {
      stopTimer()
      timerDisplayEl.textContent = "00:00"
    }

    // Habilita/desabilita os botões de navegação
    prevStepBtn.disabled = currentStepIndex === 0
    nextStepBtn.disabled = currentStepIndex === recipe.steps.length - 1
  }

  function nextStep() {
    if (currentStepIndex < recipe.steps.length - 1) {
      showStep(currentStepIndex + 1)
    }
  }

  function prevStep() {
    if (currentStepIndex > 0) {
      showStep(currentStepIndex - 1)
    }
  }

  function restartRecipe() {
    stopTimer()
    showStep(0)
    showMessage("Receita reiniciada! Vamos cozinhar do zero.")
  }

  // Event Listeners
  nextStepBtn.addEventListener("click", nextStep)
  prevStepBtn.addEventListener("click", prevStep)
  restartRecipeBtn.addEventListener("click", restartRecipe)
  closeMessageBtn.addEventListener("click", hideMessage)

  // Inicialização do aplicativo
  function initialize() {
    // Preenche o título, a descrição e os ingredientes
    recipeTittleEl.textContent = recipe.name
    recipeDescription.textContent = recipe.description
    ingredientsListEl.innerHTML = ""
    recipe.ingredients.forEach((ingredient) => {
      const li = document.createElement("li")
      li.textContent = ingredient
      ingredientsListEl.appendChild(li)
    })

    // Exibe o primeiro passo
    showStep(currentStepIndex)
  }

  initialize()
})
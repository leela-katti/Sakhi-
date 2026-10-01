let step = 0;
let userAge = "";
let userVillage = "";
let userNeed = "";

function selectLanguage(language) {
    document.getElementById("output").innerText =
        "🌸 " + language + " selected. Now you can talk to Sakhi AI.";
}

function startVoice() {

    const output = document.getElementById("output");

    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        output.innerText =
            "❌ Voice recognition is not supported in this browser.";
        return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "te-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    output.innerText = "🎙️ Listening... Please speak.";

    recognition.start();

    recognition.onresult = function(event) {

        const text = event.results[0][0].transcript;

        output.innerText =
            "👩 You said: " + text;

        processAnswer(text);
    };

    recognition.onerror = function(event) {

        output.innerText =
            "❌ Voice error: " + event.error;
    };
}


function processAnswer(text) {

    const output = document.getElementById("output");

    if (step === 0) {

        output.innerText =
            "🌸 Sakhi: Tappakunda Akka ❤️\n\n" +
            "Mee age entha? 🎙️";

            speakText("Tappakunda Akka. Mee age entha?");

        step = 1;
    }

    else if (step === 1) {

        userAge = text;

        output.innerText =
            "🌸 Sakhi: Thank you Akka ❤️\n\n" +
            "Meeru village lo untunnara? 🎙️";

            speakText("Thank you Akka. Meeru village lo untunnara?");

        step = 2;
    }

    else if (step === 2) {

        userVillage = text;

        output.innerText =
            "🌸 Sakhi: Okay Akka ❤️\n\n" +
            "Meeku job or skill training kosam help kavala? 🎙️";

            speakText("Okay Akka. Meeku job or skill training kosam help kavala?");

        step = 3;
    }

    else if (step === 3) {

        userNeed = text;

        output.innerText =
            "🌸 Sakhi AI\n\n" +
            "Mee information base cheskoni " +
            "suitable resource ni check chesthunnanu... 🔍\n\n" +
            "📚 Women Skill Training\n\n" +
            "📄 Documents:\n" +
            "✔ Aadhaar\n" +
            "✔ Mobile Number\n" +
            "✔ Bank Details\n\n" +
            "👉 Next Step: Apply process ni step-by-step chepthanu.";

            speakText("Mee information base cheskoni suitable resource ni check chesthunnanu.");
            speakText( "Mee kosam Women Skill Training resource suitable ga undi. " +
    "Kavalasina documents Aadhaar, mobile number, bank details. " +
    "Next step lo apply process ni step by step chepthanu.");
        document.getElementById("applyBox").style.display = "block";
        document.getElementById("documentsBox").style.display = "block";
        step = 4;
    }
}
function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "te-IN";
    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
let documentStep = 0;
let applyStep = 1;

function showApplyProcess() {
    applyStep = 1;
    showNextApplyStep();
}

function showNextApplyStep() {

    const steps = document.getElementById("applySteps");

    if (applyStep === 1) {

        steps.innerHTML =
            "<h3>🌸 Step 1</h3>" +
            "<p>📄 Mee Aadhaar ready ga petukondi.</p>" +
            "<button onclick='nextApplyStep()'>➡️ NEXT</button>";

        speakText("Step one. Mee Aadhaar ready ga petukondi.");

    } else if (applyStep === 2) {

        steps.innerHTML =
            "<h3>🌸 Step 2</h3>" +
            "<p>📱 Mee mobile number enter cheyyandi.</p>" +
            "<button onclick='nextApplyStep()'>➡️ NEXT</button>";

        speakText("Step two. Mee mobile number enter cheyyandi.");

    } else if (applyStep === 3) {

        steps.innerHTML =
            "<h3>🌸 Step 3</h3>" +
            "<p>📩 Mee mobile ki OTP vastundi.</p>" +
            "<button onclick='nextApplyStep()'>➡️ NEXT</button>";

        speakText("Step three. Mee mobile ki OTP vastundi.");

    } else if (applyStep === 4) {

        steps.innerHTML =
            "<h3>🌸 Step 4</h3>" +
            "<p>🔢 OTP enter cheyyandi.</p>" +
            "<button onclick='nextApplyStep()'>➡️ NEXT</button>";

        speakText("Step four. OTP enter cheyyandi.");

    } else if (applyStep === 5) {

        steps.innerHTML =
            "<h3>🌸 Step 5</h3>" +
            "<p>✅ Submit button press cheyyandi.</p>" +
            "<button onclick='finishApplyProcess()'>✅ COMPLETE</button>";

        speakText("Step five. Submit button press cheyyandi.");
    }
}

function nextApplyStep() {
    applyStep++;
    showNextApplyStep();
}

function finishApplyProcess() {

    document.getElementById("applySteps").innerHTML =
        "<h3>🎉 Application Process Complete!</h3>" +
        "<p>🌸 Sakhi AI guided you successfully.</p>";

    speakText("Application process complete. Sakhi AI guided you successfully.");
}
function documentAnswer(answer) {

    if (answer === "yes") {

        document.getElementById("documentQuestion").innerHTML =
            "<h3>📱 Step 2</h3>" +
            "<p>📱 Mee daggara mobile number unda?</p>" +
            "<button onclick=\"documentAnswer('mobile_yes')\">✅ YES</button>" +
            "<button onclick=\"documentAnswer('mobile_no')\">❌ NO</button>";

        speakText("Mee daggara mobile number unda?");

    } else if (answer === "no") {

        document.getElementById("documentQuestion").innerHTML =
            "<h3>🌸 Parledhu Akka</h3>" +
            "<p>Munduga Aadhaar arrange cheskundam.</p>";

        speakText("Parledhu Akka. Munduga Aadhaar arrange cheskundam.");

    } else if (answer === "mobile_yes") {

        document.getElementById("documentQuestion").innerHTML =
            "<h3>🏦 Step 3</h3>" +
            "<p>🏦 Mee daggara bank account unda?</p>" +
            "<button onclick=\"documentAnswer('bank_yes')\">✅ YES</button>" +
            "<button onclick=\"documentAnswer('bank_no')\">❌ NO</button>";

        speakText("Mee daggara bank account unda?");

    } else if (answer === "mobile_no") {

        document.getElementById("documentQuestion").innerHTML =
            "<h3>🌸 Parledhu Akka</h3>" +
            "<p>Munduga mobile number arrange cheskondi.</p>";

        speakText("Parledhu Akka. Munduga mobile number arrange cheskondi.");

    } else if (answer === "bank_yes") {

        document.getElementById("documentQuestion").innerHTML =
            "<h3>✅ Documents Check Complete</h3>" +
            "<p>Mee basic documents ready ga unnayi.</p>" +
            "<button onclick=\"finishDocumentsCheck()\">➡️ NEXT</button>";

        speakText("Mee basic documents ready ga unnayi.");

    } else if (answer === "bank_no") {

        document.getElementById("documentQuestion").innerHTML =
            "<h3>🌸 Parledhu Akka</h3>" +
            "<p>Bank account kosam help teesukondi.</p>";

        speakText("Parledhu Akka. Bank account kosam help teesukondi.");
    }
}


function finishDocumentsCheck() {

    document.getElementById("documentQuestion").innerHTML =
    "<h3>🎉 Ready to Apply!</h3>" +
    "<p>🌸 Mee documents check complete ayyindi.</p>" +
    "<p>Meeru application process start cheyyavachu.</p>" +
    "<button onclick=\"startApplication()\">🚀 START APPLICATION</button>";

    speakText("Mee documents check complete. You are ready to apply.");
}
function startDocumentsCheck() {

    document.getElementById("documentQuestion").innerHTML =
        "<h3>📄 Documents Check</h3>" +
        "<p>📌 Mee daggara Aadhaar unda?</p>" +
        "<button onclick=\"documentAnswer('yes')\">✅ YES</button>" +
        "<button onclick=\"documentAnswer('no')\">❌ NO</button>";

    speakText("Mee daggara Aadhaar unda?");
}
function startApplication() {

    document.getElementById("documentQuestion").innerHTML =
        "<h3>🚀 Application Started</h3>" +
        "<p>🌸 Tension padakandi Akka.</p>" +
        "<p>Nenu meeku step-by-step ga guide chesthanu.</p>" +
        "<button onclick=\"showApplicationStep1()\">➡️ CONTINUE</button>";

    speakText(
        "Tension padakandi Akka. Nenu meeku step by step ga guide chesthanu."
    );
}
function showApplicationStep1() {

    document.getElementById("documentQuestion").innerHTML =
        "<h3>🌸 Application — Step 1</h3>" +
        "<p>📄 Mee Aadhaar details ready ga pettukondi.</p>" +
        "<button onclick=\"showApplicationStep2()\">➡️ NEXT</button>";

    speakText(
        "Step one. Mee Aadhaar details ready ga pettukondi."
    );
}
function showApplicationStep2() {

    document.getElementById("documentQuestion").innerHTML =
        "<h3>🌸 Application — Step 2</h3>" +
        "<p>📱 Mee mobile number enter cheyyandi.</p>" +
        "<button onclick=\"showApplicationStep3()\">➡️ NEXT</button>";

    speakText(
        "Step two. Mee mobile number enter cheyyandi."
    );
}
function showApplicationStep3() {

    document.getElementById("documentQuestion").innerHTML =
        "<h3>🌸 Application — Step 3</h3>" +
        "<p>📩 Mee mobile ki vachina OTP enter cheyyandi.</p>" +
        "<button onclick=\"showApplicationStep4()\">➡️ NEXT</button>";

    speakText(
        "Step three. Mee mobile ki vachina OTP enter cheyyandi."
    );
}
function showApplicationStep4() {

    document.getElementById("documentQuestion").innerHTML =
        "<h3>🌸 Application — Step 4</h3>" +
        "<p>✅ Details anni correct ga unnaya check cheyyandi.</p>" +
        "<button onclick=\"completeApplication()\">🚀 SUBMIT APPLICATION</button>";

    speakText(
        "Step four. Mee details anni correct ga unnaya check chesi submit application button press cheyyandi."
    );
}
function completeApplication() {

    document.getElementById("documentQuestion").innerHTML =
        "<h3>🎉 Application Submitted Successfully!</h3>" +
        "<p>🌸 Sakhi AI meeku application process lo guide chesindi.</p>" +
        "<p>✅ Mee next step complete ayyindi.</p>" +
        "<p>❤️ Thank you for using Sakhi AI.</p>";

    speakText(
        "Application submitted successfully. Sakhi AI guided you through the process."
    );
}
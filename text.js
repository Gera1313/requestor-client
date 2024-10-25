function displaySentence() {
    const input = document.getElementById("inputField").value;
    const outputDiv = document.getElementById("output");
    let phrase = "";

    switch (input) {
        case "1":
            phrase = "Thanks @, verified the changes and awaiting requestor approval.";
            break;

        case "2":
            phrase = "Hi ®, verified the changes in PROD. Closing this request now. Thanks!!!!";
            break;

        case "3":
            // 1. use backticks here to wrap up phrase 3 instead of "" since it's not plain text.
            // 2. also use <br> instead of \n
            // 3. also use &gt; for the weird characters cuz sometimes that messes up the how it's displayed.
            phrase = `KAPS System Area: <br> 
                      Edit Property<br> 
                      URL: <br>
                      <a href=https://tx-uat.kaps.kelmar.co/KAPS/core/prowners/cp_property_edit/32722100" target="_blank">
                      https://tx-uat.kaps.kelmar.co/KAPS/core/prowners/cp_property_edit/32722100</a><br>
                      Click Path: <br>
                      KAPS Menu &gt; Holders, Reports, Properties (core) &gt; Property &gt; Edit Property<br>
                      Problem Statement: <br>
                      As part of the Texas Reconciliation Project, the Kelmar Reconciliation Team has requested a data fix to correct Texas securities Data.`;
            break;
    }
    
    // 4. change it to innerHTML here since you have links and HTML elements in the phase 3 text.
    outputDiv.innerHTML = phrase;
}
window.rboxlo = [];

// Active link in sidebar
document.onreadystatechange = function() {
    if (document.readyState == "interactive") {
        let elements = document.querySelectorAll("[laid]");

        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];

            if (element.getAttribute("laid") == window.rboxlo.laid) {
                let link = element.getElementsByTagName("a")[0];
                
                element.classList.add("active");
                link.classList.add("text-white");
            }
        }
    }
}

// Copying
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        return;
    }

    navigator.clipboard.writeText(text);
}

function copyUUID() { copyTextToClipboard(document.getElementById("uuid").textContent); }
function copyLastVersionUUID() { copyTextToClipboard(document.getElementById("lastVersionUUID").textContent); }
function copyInternalName() { copyTextToClipboard(document.getElementById("internalName").textContent); }
if (!localStorage.getItem("ownerToken")) {

    localStorage.setItem(
        "ownerToken",
        crypto.randomUUID()
    );

}

function sendMessage() {

    const message =
        document.getElementById("messageInput").value;

    fetch("/api/add_message.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:
            "content=" + encodeURIComponent(message) +
            "&ownerToken=" +
            encodeURIComponent(
                localStorage.getItem("ownerToken")
            )
    })
    .then(response => response.json())
    .then(data => {

        document.getElementById("messageInput").value = "";

        loadMessages();

    });

}

function deleteMessage(id) {

    fetch("/api/delete_message.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:
            "id=" + id +
            "&ownerToken=" +
            encodeURIComponent(
                localStorage.getItem("ownerToken")
            ) +
            "&isAdmin=" +
            encodeURIComponent(
                localStorage.getItem("isAdmin")
            )
    })
    .then(response => response.json())
    .then(data => {

        loadMessages();

    });

}

function editMessage(id, oldContent) {

    const newContent =
        prompt("Nowa treść wiadomości:", oldContent);

    if (!newContent) {
        return;
    }

    fetch("/api/update_message.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:
            "id=" + id +
            "&content=" + encodeURIComponent(newContent) +
            "&ownerToken=" +
            encodeURIComponent(
                localStorage.getItem("ownerToken")
            ) +
            "&isAdmin=" +
            encodeURIComponent(
                localStorage.getItem("isAdmin")
            )
    })
    .then(response => response.json())
    .then(data => {

        loadMessages();

    });

}

function logout() {

    localStorage.removeItem("isAdmin");

    location.reload();

}

function loadMessages() {

    if (localStorage.getItem("isAdmin") === "true") {

        if (document.getElementById("adminInfo")) {

            document.getElementById("adminInfo").innerHTML =
                "Zalogowano jako administrator " +
                "<button onclick='logout()'>Wyloguj</button>";

        }

        if (document.getElementById("adminButton")) {

            document.getElementById("adminButton").style.display =
                "none";

        }

    }

    fetch("/api/messages.php")
        .then(response => response.json())
        .then(data => {

            let html = "";

            data.forEach(message => {

                const date = new Date(message.created_at);

                date.setHours(date.getHours() + 2);

                const time =
                    date.toLocaleTimeString();

                const isOwner =
                    message.owner_token ===
                    localStorage.getItem("ownerToken");

                const isAdmin =
                    localStorage.getItem("isAdmin") === "true";

                html += `
                    <p>
                        ${message.content}
                        <small>(${time})</small>

                        <button
                            onclick="editMessage(${message.id}, '${message.content}')"
                            ${(!isOwner && !isAdmin) ? "disabled" : ""}>
                            Edytuj
                        </button>

                        <button
                            onclick="deleteMessage(${message.id})"
                            ${(!isOwner && !isAdmin) ? "disabled" : ""}>
                            Usuń
                        </button>
                    </p>
                `;

            });

            document.getElementById("messages").innerHTML = html;

        });

}

loadMessages();

setInterval(loadMessages, 3000);
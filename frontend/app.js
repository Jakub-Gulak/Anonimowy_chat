if (!localStorage.getItem("ownerToken")) {

    localStorage.setItem(
        "ownerToken",
        crypto.randomUUID()
    );

}

function sendMessage() {

    const message =
        document.getElementById("messageInput").value;

    fetch("http://localhost:8080/api/add_message.php", {
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

    fetch("http://localhost:8080/api/delete_message.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:
            "id=" + id +
            "&ownerToken=" +
            encodeURIComponent(
                localStorage.getItem("ownerToken")
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

    fetch("http://localhost:8080/api/update_message.php", {
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
            )
    })
    .then(response => response.json())
    .then(data => {

        loadMessages();

    });

}

function loadMessages() {

    fetch("http://localhost:8080/api/messages.php")
        .then(response => response.json())
        .then(data => {

            let html = "";

            data.forEach(message => {

                const time =
                    message.created_at.split(" ")[1];

                const isOwner =
                    message.owner_token ===
                    localStorage.getItem("ownerToken");

                html += `
                    <p>
                        ${message.content}
                        <small>(${time})</small>

                        <button
                            onclick="editMessage(${message.id}, '${message.content}')"
                            ${!isOwner ? "disabled" : ""}>
                            Edytuj
                        </button>

                        <button
                            onclick="deleteMessage(${message.id})"
                            ${!isOwner ? "disabled" : ""}>
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
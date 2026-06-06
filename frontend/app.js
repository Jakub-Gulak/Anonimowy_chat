function sendMessage() {

    const message =
        document.getElementById("messageInput").value;

    fetch("http://localhost:8080/api/add_message.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "content=" + encodeURIComponent(message)
    })
    .then(response => response.json())
    .then(data => {

        console.log(data);

        document.getElementById("messageInput").value = "";

        loadMessages();

    });

}

function loadMessages() {

    fetch("http://localhost:8080/api/messages.php")
        .then(response => response.json())
        .then(data => {

            let html = "";

            data.forEach(message => {
                html += `<p>${message.content}</p>`;
            });

            document.getElementById("messages").innerHTML = html;

        });

}

loadMessages();
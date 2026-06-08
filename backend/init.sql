-- Tabela wiadomości czatu
CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    owner_token VARCHAR(64) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela administratorów
CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Konto administratora
INSERT INTO admins (username, password)
VALUES (
    'admin',
    '$2a$12$Xz6u9qwbidw6NbhLdzznb.d41z8D2F.rPZPgpTYfCVaxaXnhmDgNW'
);
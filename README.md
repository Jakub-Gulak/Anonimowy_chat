## Opis projektu

Projekt został wykonany w ramach zajęć i przedstawia prostą aplikację webową umożliwiającą anonimową wymianę wiadomości między użytkownikami.

Aplikacja działa bez rejestracji i logowania użytkowników. Każdy użytkownik może dodawać wiadomości, a czat automatycznie odświeża się co kilka sekund, dzięki czemu nowe wiadomości są widoczne bez ręcznego przeładowywania strony.

Dodatkowo zaimplementowano panel administratora umożliwiający zarządzanie wiadomościami.

---

## Zastosowane technologie

### Frontend
- HTML
- CSS
- JavaScript
- Fetch API

### Backend
- PHP

### Baza danych
- MySQL

### DevOps i wdrożenie
- Docker
- Docker Compose
- GitHub
- GitHub Actions (CI/CD)
- Microsoft Azure (Virtual Machine)

---

## Funkcjonalności

### Użytkownik

- dodawanie wiadomości
- wyświetlanie wiadomości w czasie rzeczywistym
- automatyczne odświeżanie czatu co 3 sekundy
- edycja własnych wiadomości
- usuwanie własnych wiadomości
- wyświetlanie godziny wysłania wiadomości

### Administrator

- logowanie do panelu administratora
- możliwość edycji wszystkich wiadomości
- możliwość usuwania wszystkich wiadomości
- wylogowanie z panelu administratora

---

## Mechanizmy bezpieczeństwa

W projekcie zastosowano podstawowe mechanizmy bezpieczeństwa:

### Hashowanie haseł

### Filtrowanie wulgaryzmów

### Ograniczenie uprawnień użytkownika

---

## REST API

Aplikacja udostępnia REST API umożliwiające komunikację z backendem.

### Pobieranie wiadomości

```http
GET /api/messages.php
```

Przykład:

```bash
curl http://localhost:8080/api/messages.php
```

### Dodawanie wiadomości

```http
POST /api/add_message.php
```

Przykład:

```bash
curl -X POST http://localhost:8080/api/add_message.php ^
-d "content=Wiadomosc z curl&ownerToken=test123"
```

### Edycja wiadomości

```http
POST /api/update_message.php
```

### Usuwanie wiadomości

```http
POST /api/delete_message.php
```

---

## Konteneryzacja

Aplikacja została skonteneryzowana przy użyciu Dockera.

Uruchamiane są dwa kontenery:

### PHP + Apache

Odpowiada za działanie aplikacji webowej.

### MySQL

Odpowiada za przechowywanie wiadomości i danych administratorów.

---

## CI/CD

Projekt wykorzystuje GitHub Actions.

Po każdym wysłaniu zmian do repozytorium GitHub automatycznie uruchamiany jest workflow sprawdzający poprawność projektu.

Dzięki temu możliwe jest automatyczne wdrażanie kolejnych wersji aplikacji.

---

## Wdrożenie w chmurze

Aplikacja została wdrożona na platformę Microsoft Azure z wykorzystaniem maszyny wirtualnej.

Na serwerze uruchomiono środowisko Docker Compose zawierające aplikację PHP oraz bazę danych MySQL.

Dzięki publicznemu adresowi IP aplikacja jest dostępna z poziomu dowolnego urządzenia posiadającego dostęp do Internetu.

---

## Uruchomienie projektu lokalnie

git clone ...

cd Anonimowy-chat

w konsoli: docker compose up -d --build

otworzenie w przeglądarce adresu: http://localhost:8080/frontend/index.html

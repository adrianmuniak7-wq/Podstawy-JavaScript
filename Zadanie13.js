// 5. Rozszerzenie: Funkcja główna przyjmująca współrzędne jako parametry
async function getWeather(latitude, longitude) {
    // Uwaga do endpointu: poprawiono zniekształcony znak z zadania na poprawne '&current='
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

    // 4. Zabezpieczenie kodu blokiem try...catch
    try {
        console.log(`Pobieranie danych dla współrzędnych: ${latitude}, ${longitude}...`);
        
        // 1 & 2. Wywołanie fetch() z użyciem await
        const response = await fetch(url);

        // Rozszerzenie własne: fetch() domyślnie nie wyrzuca błędu dla kodów 4xx i 5xx.
        // Własnoręcznie sprawdzamy, czy odpowiedź jest prawidłowa.
        if (!response.ok) {
            throw new Error(`Błąd HTTP: ${response.status} - ${response.statusText}`);
        }

        // 2. Konwersja odpowiedzi do formatu JSON (wymaga await)
        const data = await response.json();

        // Zabezpieczenie przed brakiem struktury 'current' w odpowiedzi
        if (!data.current) {
            throw new Error("Brak wymaganych danych w odpowiedzi z API.");
        }

        // 3. Wyciągnięcie konkretnych wartości z obiektu
        const temperature = data.current.temperature_2m;
        const windSpeed = data.current.wind_speed_10m;

        // Wyświetlenie wyników
        console.log("--- AKTUALNA POGODA ---");
        console.log(`Temperatura: ${temperature}°C`);
        console.log(`Prędkość wiatru: ${windSpeed} km/h`);
        
        // Wywołanie własnej funkcji pomocniczej
        console.log(`Ocena wiatru: ${analyzeWindCondition(windSpeed)}`);

    } catch (error) {
        // 4. Obsługa i czytelne wypisanie błędu
        console.error("Wystąpił problem z pobieraniem danych pogodowych:");
        console.error(error.message);
    }
}

// Rozszerzenie własne: Funkcja pomocnicza interpretująca prędkość wiatru
function analyzeWindCondition(speed) {
    if (speed < 10) return "Słaby (praktycznie bezwietrznie)";
    if (speed < 30) return "Umiarkowany (odczuwalny wiatr)";
    if (speed < 60) return "Silny (uważaj na zewnątrz)";
    return "Bardzo silny / Wichura";
}

// Wywołania testowe

// Prawidłowe wywołanie dla Katowic
getWeather(50.29, 19.10);

// Rozszerzenie własne: Test obsługi błędów (przekazanie błędnych współrzędnych poza zakresem)
// getWeather(1000, 2000);

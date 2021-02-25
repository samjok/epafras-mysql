## Kirjatietokanta
Tämä koodirepositorio sisältää Node.js-backendin, joka käyttää MySQL-tietokantaa. Sovelluksen käyttötarkoitus on toimia kirjatietokantana, johon voi lisätä ja poistaa kirjoja.

### Ohjeet sovelluksen käynnistämiseen

Tämä sovellus käyttää MySQL-tietokantaa ja yhdistääksesi sovelluksen omaan tietokantaasi lisää seuraavat ympäristömuuttujat .env-tiedostoon:

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
DB_PORT=

JWT_SECRET=
```
Sovellus käynnistyy komennolla
```
npm start
```

Tai nodemonin kanssa komennolla
```
npm run watch
```

# WeIce Cream. Made with passion

## HTML+CSS > Projekt grupowy

### GoIT fullstack developer course

### [Zobacz online na GitHub Pages >>](https://brzozanet.github.io/goit-projekt-html-css/)

**Strona WebStudio**, firmy zajmującej się projektowaniem i wdrażaniem rozwiązań aplikacji
intenetowych oraz rozwiązań graficznych. Zawiera trzy główne działy: _Agencja_, _Portfolio_ oraz
_Kontakt_. W pełni responsywny projekt powstał w oparciu o strategię _Mobile First_ w celu poprawy
doświadczeń użytkownika na urządzeniach mobilnych, poprawę pozycjonowania w wynikach wyszukiwania,
szybsze ładowanie stron, elastyczność i skalowalność oraz minimalizację zbędnych elementów. Z kolei
zastosowanie preprocesora SASS spowodowało większą zwięzłość i czytelność kodu, możliwość
wprowadzenia zmiennych oraz obsługi zagnieżdżania oraz modularność.

Wykorzystane technologie i rozwiązania:

- Figma
- HTML
- CSS
- CSS BEM
- SASS
- Flexbox
- JavaScript
- GIT & GitHub

![Screenshot App](https://raw.githubusercontent.com/brzozanet/goit-projekt-html-css/main/src/images/gh-cover-goit-html-css.png)

# parcel-project-template

## Zalezności

Na komputerze musi być zainstalowana LTS-wersja [Node.js](https://nodejs.org/en/).

## Przed rozpoczęciem pracy

Jeden raz na projekt zainstalować wszystkie zalezności.

```shell
npm ci
```

### Praca

Włączyć tryp pracy.

```shell
npm run dev
```

W przeglądarce przejść na [http://localhost:1234](http://localhost:1234).

### Deploy

Kod będzie automatycznie się zbierać i robić deploy aktualnej wersji projektu na GitHub Pages, w
gałąź `gh-pages`, za kazdym razem jeśli zostaną wprowadzone zmiany w `main`. Na przykład, po
bezpośrenim push lub po przyjęciu pull-request. Aby to działało musimy w pliku `package.json`
zmienić pole `homepage` i skrypt `build`, zmieniając `nazwe_uzytkownika` i `nazwe_repozytorium` na
swoje.

```json
"homepage": "https://nazwa_uzytkownika.github.io/nazwa_repozytorium",
"scripts": {
  "build": "parcel build src/*.html --public-url /nazwa_repozytorium/"
},
```

Po jakimś czasie stronę mozna będzie zobaczyć na zywo pod adresem który jest wpisany w poprawione
właściwości `homepage`, na przykład
[https://brzozanet.github.io/goit-projekt-html-css-6/](https://brzozanet.github.io/goit-projekt-html-css-6/)

<!-- [https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template). -->

## Pliki i folderzy

- Wszystkie partials plików styłów powinny być w folderze `src/sass` i importować się w
  `src/sass/main.scss`
- Zdjęcia dodawajcie w folder `src/images`, przed tym zoptymizujcie te zdjęcia które dodajecie.
  Program po prostu kopiuje wykorzystane zdjęcia aby system nie musiał optymizować je, bo na słabych
  komputerach to moze zająć duzo czasu.

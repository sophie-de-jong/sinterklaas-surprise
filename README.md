# Sinterklaas Surprise — eenvoudige 4-cijfer website

Deze kleine statische site geeft een plek om een Sinterklaas-gedicht te tonen en een 4-cijferige code in te voeren. Bij de juiste code verschijnt het bericht "Goed gedaan!" — de echte verrassing stop je zelf in de doos.

Bestanden:
- `index.html` — de pagina met het gedicht en invoervelden.
- `styles.css` — eenvoudige, mobiele styling.
- `script.js` — logica voor de 4-cijfer invoer en controle.

Code aanpassen:
- Open `script.js` en wijzig de regel `const DEFAULT_CODE = "1234";` naar de gewenste code.
- Je kunt ook de code via de URL opgeven, bijvoorbeeld `index.html?code=4287`.

Gedicht aanpassen:
- Open `index.html` en vervang de tekst in het element met id `poem-text` door je eigen gedicht.

Pagina lokaal openen op je telefoon:
1. Plaats de bestanden op je computer.
2. De eenvoudigste manier is een klein HTTP-servertje starten in de map:

```bash
cd /pad/naar/de/map
python3 -m http.server 8000
```

Open op je telefoon de URL `http://<jouw-computer-ip>:8000` en navigeer naar `index.html`.

Alternatief: je kunt `index.html` direct openen in de browser (file://), maar sommige mobiele browsers blokkeren het automatisch focussen of numeric keyboards.

Wil je dat ik het gedicht en hints alvast invul en een specifieke code instel? Geef de code en het gedicht door, dan pas ik het aan.

# Javascript1_email_pozdravy

*Vytvořte funkci, která vloží do e-mailu rozloučení.*

Vytvořte si repozitář ze šablony [cviceni-email](https://github.com/Czechitas-podklady-WEB/cviceni-email) se stránkou obsahující šablonu jednoduchého e-mailu.

Každý e-mail je třeba zakončit zdvořilým pozdravem.

1. V souboru `index.js` vytvořte funkci bez parametrů s názvem `goodbye`. Tato funkce vloží do odstavce s třídou `email__closing` rozloučení „Na shledanou“.
2. Zavolejte funkci `goodbye()` na konci souboru `index.js`. Ověřte, že se na zobrazené stránce správně změnil pozdrav na konci e-mailu.
3. Končit e-mail jen slovy „Na shledanou“ je nezdvořilé. Přidejte proto do funkce `goodbye` parametr představující jméno pisatele e-mailu. Funkce do posledního odstavce vloží koncový pozdrav i se jménem. Příklad použití:

```
goodbye('Pavel Ovesný');
```

Ve stránce bude

```
S pozdravem Pavel Ovesný
```

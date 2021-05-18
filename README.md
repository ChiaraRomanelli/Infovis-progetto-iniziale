# Infovis-progetto-iniziale
Progetto di Visualizzazione delle informazioni, Università Roma Tre, a.a. 2020-2021, svolto da Chiara Romanelli matricola 476128.

# Specifiche del progetto
Crea un file json con dei dati multivariati: ci sono 10 data-cases e ogni data-case ha quattro variabili quantitative i cui valori sono tutti positivi. In base a questi dati disegna 10 casette (è sufficiente la silhouette) con diverse caratteristiche (altezza, larghezza, altezza del tetto, ecc) associando ogni caratteristica ad una variabile. Facendo click con il pulsante sinistro su una caratteristica di una casetta, tutte le casette si dispongono in un'ordine da sinistra a destra corrispondente al valore dei rispettivi data-case per la variabile associata a quella caratteristica. Fai in modo che i cambi di disposizione delle casette avvengano con un'animazione fluida. Usa le scale di D3.js per mappare il dominio delle variabili (che è arbitrario) nel range dei valori che ti servono, che invece è determinato dalla tua interfaccia.

Le caratteristiche sulle quali è possibile cliccare per ordinare le case da sinistra verso destra sono:

- **ALTEZZA DELLA CASA**: cliccando sul lato della casa,
- **LARGHEZZA DELLA CASA**: cliccando sulla base della casa,
- **ALTEZZA DELLA PORTA**: cliccando sulla porta,
- **LATO DEL TETTO**: cliccando sul tetto.

# Versione utilizzata
La versione di D3.js utilizzata è stata la v6

# Sviluppo in locale
Il progetto può essere eseguito lanciando il comando python -m SimpleHTTPServer porta oppure python -m http.server porta se si usa la versione 3 di python.
In seguito aprire il borwser di riferimento e digitare http:://localhost:[porta]


<p align="center">
  <img src="public/boolean-logo.png" alt="Boolean logo" width="35">
</p>

<h1 align="center">EX – Snack Custom Hooks (React)</h1>

Esercizio React sviluppato con **Vite**, focalizzato sulla creazione e l’utilizzo di **Custom Hooks** per isolare e riutilizzare logiche di stato ed effetti collaterali.

Il progetto è strutturato seguendo **snack incrementali**, ciascuno dedicato alla realizzazione di un hook personalizzato con uno scopo specifico.

---

## Obiettivo dell’esercizio

- Creare custom hooks riutilizzabili
- Comprendere come incapsulare logica con `useState` e `useEffect`
- Gestire effetti persistenti e relative cleanup function
- Separare logica e interfaccia per migliorare la leggibilità del codice

---

## Descrizione generale

L’applicazione raccoglie tre snack dedicati alla costruzione di hook personalizzati, ognuno con una responsabilità ben definita.

## 📌 Snack 1: useSwitch() – Toggle Booleano

**Obiettivo:** Creare un custom hook per alternare un valore booleano tra `true` e `false`.

### Requisiti

1. Il valore iniziale deve essere `false`.
2. L’hook deve restituire:
   - Il valore corrente
   - Una funzione `toggle()` per invertirlo
3. Ogni chiamata a `toggle()` deve alternare:
   - `true → false`
   - `false → true`

### Concetti applicati

- `useState`
- Aggiornamento funzionale dello stato
- Ritorno di array (pattern simile a `useState`)

---

## 📌 Snack 2: useDate() – Data e Ora in Tempo Reale

**Obiettivo:** Creare un custom hook che restituisca la data e l’ora correnti, aggiornandosi automaticamente ogni secondo.

### Requisiti

1. Restituire un oggetto `Date`.
2. Aggiornare automaticamente il valore ogni secondo.
3. Utilizzare `useEffect()` per:
   - Creare un `setInterval`
   - Pulire l’intervallo con la cleanup function

### Concetti applicati

- `useState`
- `useEffect`
- Effetti persistenti
- Cleanup function per evitare memory leak

---

## 📌 Snack 3: useCustomPointer() – Cursore Personalizzato

**Obiettivo:** Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

### Requisiti

1. Accettare in input:
   - Una stringa (es. emoji)
   - Oppure un JSX component
2. Posizionare il componente al posto del cursore nativo.
3. Aggiornare la posizione ad ogni movimento del mouse.
4. Rimuovere correttamente l’event listener nella cleanup function.

### Concetti applicati

- Event listener su `mousemove`
- Stato per tracciare coordinate `x` e `y`
- Effetti collaterali con `useEffect`
- Separazione tra logica e UI

---

## Struttura del progetto

Ogni snack è organizzato in:

- Un file dedicato all’hook (`useNomeHook.jsx`)
- Un componente che ne dimostra l’utilizzo

---

## Tecnologie utilizzate

- React
- Vite
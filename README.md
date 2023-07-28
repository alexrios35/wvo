---
author: Alex Rios
sha256: 
---

# Objeto Visible en la Ventana

`WVO: Window Visible Object “Objeto Visible en la Ventana”`

Simple detector de nodos HTML.

**Código:**

```js
function wvo() {
    document.querySelectorAll('*[wvo]').forEach(object => {
        let {
            top,
            bottom
        } = object.getBoundingClientRect();

        top = Math.round(top);
        bottom = Math.round(bottom);

        const state = (top < window.innerHeight && bottom > 0) ? 'on' : 'off';

        object.setAttribute('wvo', state);
    });
};

setInterval(wvo, 20);
```

**Lógica:**

Hablando en un sentido matemático, la idea detrás de la detección de nodos en base al marco de la ventana se logra mediante el siguiente calculo:

Si la base superior del nodo es menor a la base inferior de la ventana y la base inferior del nodo es mayor a la base superior de la ventana, entonces es ==positivo==, de lo contrario, todo lo demás es ==negativo==.

---

==Figura 1==: El nodo está dentro del marco de la ventana del navegador.

![[Figure 1.canvas|Figure 1]]

Se sustituye el valor `off` por `on` del atributo `wvo`.

---

==Figura 2==: El nodo está parcialmente fuera del marco de la ventana del navegador.

![[Figure 2.canvas|Figure 2]]

El valor permanece.

---

==Figura 3==: El nodo está fuera del marco de la ventana del navegador.

![[Figure 3.canvas|Figure 3]]

Sustitución del valor `on` previamente asignado al atributo `wvo` por `off`.

---

Expresado como…

➡️ Matemáticas

```
a < b ⇔ c > d δ 1 | 0
```

➡️ Pseudo Código

```
SI (A ES MENOR QUE B) Y (C ES MAYOR QUE D)
ENTONCES
	ALTERNAR_COLOR(CIERTO)
SINO
	ALTERNAR_COLOR(FALSO)
FI
```

| `a < b` | `c > d` | `=` |
|:-------:|:-------:|:------:|
|   ✔️    |   ✔️    |   🔲   |
|   ❌    |   ✔️    |   🔳   |
|   ✔️    |   ❌    |   ⬜   |
|   ❌    |   ❌    |   ⬜   |

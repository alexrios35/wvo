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

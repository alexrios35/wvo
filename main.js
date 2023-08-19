window.addEventListener('load', () => {

    setTimeout(function() {
        const screenload_node = document.querySelector('#screenload');
        screenload_node.style.transition = '0.5s all';
        screenload_node.style.opacity = '0';

        setTimeout(function() {
            screenload_node.remove();
        }, 500);
    }, 1000);

    setInterval(wvo, 100);
});

function wvo() {
    document.querySelectorAll('*[wvo]').forEach(object => {
        let {
            top,
            bottom
        } = object.getBoundingClientRect();

        top = Math.round(top);
        bottom = Math.round(bottom);

        object.setAttribute('wvo', ((top < window.innerHeight && bottom > 0) ? 'on' : 'off'));
    });
};

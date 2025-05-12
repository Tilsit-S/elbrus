//blog-табы
(function () {
    const tabs =  Array.prototype.slice.apply(document.querySelectorAll('.blog__tabs-item'));
    const content =  Array.prototype.slice.apply(document.querySelectorAll('.blog__content-item'));

    document.getElementById('blogTabs').addEventListener('click', e => {
        if (e.target.classList.contains('blog__tabs-item')) {
            let tabSelect = tabs.indexOf(e.target);
            tabs.map( item => item.classList.remove('active'));
            tabs[tabSelect].classList.add('active');

            content.map( content => content.classList.remove('active'));
            content[tabSelect].classList.add('active');
        }
    })
})();
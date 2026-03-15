document.addEventListener('DOMContentLoaded', () => {

    const track = document.getElementById('t');
    const dotsEl = document.getElementById('dots');
    const cards = track.querySelectorAll('.card');
    const cardW = 146;
    let idx = 0;

    cards.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'dot' + (i === 0 ? ' active' : '');
        d.onclick = () => goTo(i);
        dotsEl.appendChild(d);
    });

    function goTo(i) {
        const vis = Math.floor((track.parentElement.offsetWidth - 100) / cardW);
        idx = Math.max(0, Math.min(i, cards.length - vis));
        track.style.transform = `translateX(-${idx * cardW}px)`;
        dotsEl.querySelectorAll('.dot').forEach((d, j) => d.classList.toggle('active', j === idx));
    }

    document.querySelector('.btn.p').onclick = () => goTo(idx - 1);
    document.querySelector('.btn.n').onclick = () => goTo(idx + 1);

    cards.forEach(c => c.onclick = () => {
        cards.forEach(x => x.classList.remove('active'));
        c.classList.add('active');
    });

    setInterval(() => {
        const vis = Math.floor((track.parentElement.offsetWidth - 100) / cardW);
        idx >= cards.length - vis ? goTo(0) : goTo(idx + 1);
    }, 2500);

});
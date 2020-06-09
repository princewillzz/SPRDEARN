function create_subscription_cards() {
    let body = document.getElementById('subscription_card');
    for (let i = 1; i <= 3; i++) {
        body.appendChild(card(i));
    }
}
function card(i) {
    let element = document.createElement('div');
    element.className = 'card';

    // element 1
    let img = document.createElement('div');
    img.className = 'card-image';

    // element 2
    let card_text = document.createElement('div');
    card_text.className = 'card-text';
    let date = document.createElement('data');
    date.className = 'date';
    let d = new Date();
    date.innerHTML = d.getHours() + ":" + d.getMinutes();
    card_text.appendChild(date);
    let h = document.createElement('h2');
    h.innerHTML = `Post ${i + 1}`;
    card_text.appendChild(h);
    let p = document.createElement('p');
    p.innerHTML = 'Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunteligendi dolor';
    card_text.appendChild(p);

    // element 3
    let card_stats = document.createElement('div');
    card_stats.className = 'card-stats';

    let stat = document.createElement('div');
    stat.className = 'stat';
    let value = document.createElement('div');
    value.className = 'value';
    value.innerHTML = 4 + '<sup>' + 'm';
    stat.appendChild(value);
    let type = document.createElement('div');
    type.className = 'type';
    type.innerHTML = 'read';
    stat.appendChild(type);
    card_stats.appendChild(stat);
    //...
    let el = document.createElement('div');
    el.className = 'stat border';
    let vl = document.createElement('div');
    vl.className = 'value';
    vl.innerHTML = 5123;
    let ty = document.createElement('div');
    ty.className = 'type';
    ty.innerHTML = 'views';
    el.appendChild(vl);
    el.appendChild(ty);
    card_stats.appendChild(el);
    //...
    let st = document.createElement('div');
    st.className = 'stat';
    let v = document.createElement('div');
    v.className = 'value';
    v.innerHTML = 32;
    st.appendChild(v);
    let di = document.createElement('div');
    di.className = 'type';
    di.innerHTML = 'comments';
    st.appendChild(di);
    card_stats.appendChild(st);
    //...

    element.appendChild(img);
    element.appendChild(card_text);
    element.appendChild(card_stats);
    return element;

}

create_subscription_cards();
let time = document.addEventListener('DOMContentLoaded', () => {
    let date = document.querySelector('data');
    let d = new Date();
    time = d.getHours() + ":" + d.getMinutes();
    if (time !== date.innerHTML) date.innerHTML = time;
});


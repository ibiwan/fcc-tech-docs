let navht = 0

function resizeHeader() {
    let pusher = $('#nav-push')
    let nav = $('#navbar')

    navht = pusher.is(':visible') ? nav.height() : 0

    pusher.height(navht);
}

function scroller() {
    let tgt = $(this.hash)
    let nav = $('#navbar')
    $('html,body').animate({
        scrollTop: tgt.position().top - navht
    })
    return false
}

$(() => {
    resizeHeader();
    $(window).resize(resizeHeader);
    $('.nav-link').click(scroller);
    $('.code-block, .nav-link').addClass('pop');
})
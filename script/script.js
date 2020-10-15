$.noConflict();
jQuery(document).ready(($) => {

    // $('.slick-prev').eq(0).text('<p>OK</p>')
    /* let prev = document.getElementsByClassName('slick-prev');
    console.log(prev.innerHTtml); */
    let count = 0;
    $('#burger, #cross, #opacity').on('click', () => {
        count++;
        if (count % 2 == 1) {
            $('#burger-wrap').css({ height: '110px' });
            $('#opacity').css({ visibility: 'visible', opacity: '1' });
        } else {
            $('#burger-wrap').css({ height: '0' });
            $('#opacity').css({ opacity: '0' });
            setTimeout(() => {
                $('#opacity').css({ visibility: 'hidden' });
            }, 500);
        }
    })

    $('.slider').slick({
        mobileFirst: true,
    })
    /* $('#previous').on('click', () => {
        for (let i = 0; i < $('.slide').length; i++) {
                $('.slide').eq(i).css({ display: 'none' });
                $('.slide').eq(i - 1).css({ display: 'flex' });

        }

    }) */
});
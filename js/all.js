// 畫面縮放及定位功能
function AutoWidth() {
    var Width = document.body.offsetWidth;
    $('.phone-box').css('width', Width - 400);
}

function AutoCenter() {
    var OuterW = document.getElementById('Outer').offsetWidth;
    var InnerW = document.getElementById('Inner').offsetWidth;
    var OuterH = document.getElementById('Outer').offsetHeight;
    var InnerH = document.getElementById('Inner').offsetHeight;

    $('.phone-box').scrollLeft((InnerW - OuterW) / 2);
    $('.phone-box').scrollTop((InnerH - OuterH) / 2);

    $('.phone').css({
        'transform': 'scale(100%)',
        '-webkit-transform': 'scale(100%)'
    });
    $('#Window-Size').val(100);
    $('.range-text').text('100%');
}

AutoWidth();
AutoCenter();

window.onresize = function () {
    AutoWidth();
};

// 畫面大小
$('#Window-Size').on("input", function () {
    var Per = $(this).val() + '%';
    $('.range-text').text(Per);
    $('.phone').css({
        'transform': 'scale(' + Per + ')',
        '-webkit-transform': 'scale(' + Per + ')'
    });
});

// 畫面置中
$('#Move-Center').click(function () {
    AutoCenter();
})

// 格式擇一
$('.choose-one').click(function () {
    $(this).parent().find('.choose-one').removeClass('--click');
    $(this).addClass('--click');
})

// 背景設定函數
var Back_Solid = function () {
    var Css_Value = $('.back-set-solid').val();
    $('.phone').css({
        'background': 'none',
        'background-color': Css_Value
    });
    $('#Image').css('display', 'none');
}

var Back_Gradient = function () {
    var Gra1 = $('.gradient_1').val();
    var Gra2 = $('.gradient_2').val();
    var Deg = $('.gradient_deg').val() + 'deg';
    var Css_Value = 'linear-gradient(' + Deg + ',' + Gra1 + ' 0%,' + Gra2 + ' 100%)';
    $('.phone').css({
        'background-color': 'none',
        'background': Css_Value
    });
    $('#Image').css('display', 'none');
}

$('#Img-Btn').click(function () {
    $('#Board-Img').click();
})

var Back_Image = function () {
    var file = $('#Board-Img')[0].files[0];
    var reader = new FileReader;
    reader.onload = function (e) {
        var Css_Value = e.target.result;
        $('#Image').attr('src', Css_Value);
        $('#Image').css('display', 'block');
    };
    try {
        reader.readAsDataURL(file);
    } catch { }
}

$('#Board-Img').change(Back_Image);
$('.back-set-gradient').on('input', Back_Gradient);
$('.back-set-solid').on('input', Back_Solid);

//切換背景模式
$('.back-li').click(function () {
    var Back_kind = $('.back-li').index(this);
    $('.back-set').removeClass('--show');
    $('.back-set').eq(Back_kind).addClass('--show');

    switch (Back_kind) {
        case 0:
            Back_Solid();
            break;
        case 1:
            Back_Gradient();
            break;
        case 2:
            Back_Image();
            break;
    }
})

// 物件顯示
$('.checkbox-btn').click(function () {
    $(this).toggleClass('--click');
})
// 模式擇一
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

$('.checkbox-board').click(function () {
    $('.border').toggleClass('--hide');
})

$('.checkbox-divider').click(function () {
    $('.divider').toggleClass('--hide');
})

$('.checkbox-logo').click(function () {
    $('#Logo').toggleClass('--hide');
})

$('.boarder-set').on('input', function () {
    var BorCol = $(this).val();
    $('.border').css('border-color', BorCol);
    $('.divider').css('background-color', BorCol);
    $('.cls-1').css('fill', BorCol);
})

// 文字編輯
$('#Titlebox').keyup(function () {
    var Tx = $(this).val();
    $('.block-title-text').text(Tx);
})
$('#Textbox').keyup(function () {
    var Tx = $(this).val();
    $('.block-desc-text').text(Tx);
})

// 格式按鈕點選
$('.font-li').click(function () {
    $(this).toggleClass('--click');
})

// 標題格式設定
$('#Title button').click(function () {
    var Level = $('#Title .level .--click').val();
    var Bold = $('#Title .bold.--click').val();
    if (Bold == undefined) {
        Bold = "normal";
    }
    var Italic = $('#Title .italic.--click').val();
    if (Italic == undefined) {
        Italic = "normal";
    }
    var Underline = $('#Title .underline.--click').val();
    if (Underline == undefined) {
        Underline = "none";
    }
    $('.block-title-text').css(
        {
            'text-align': Level,
            'font-weight': Bold,
            'font-style': Italic,
            'text-decoration': Underline
        }
    );
})
$('#Title .color').on('input', function () {
    var Color = $('#Title .color').val();
    $('.block-title-text').css('color', Color);
})
$('#Title .size').change(function () {
    var Size = $('#Title .size').val() + 'px';
    $('.block-title-text').css('font-size', Size);
})

// 內文格式設定
$('#Desc button').click(function () {
    var Level = $('#Desc .level').find('.--click').val();
    var Bold = $('#Desc .bold.--click').val();
    if (Bold == undefined) {
        Bold = "normal";
    }
    var Italic = $('#Desc .italic.--click').val();
    if (Italic == undefined) {
        Italic = "normal";
    }
    var Underline = $('#Desc .underline.--click').val();
    if (Underline == undefined) {
        Underline = "none";
    }
    $('.block-desc-text').css(
        {
            'text-align': Level,
            'font-weight': Bold,
            'font-style': Italic,
            'text-decoration': Underline
        }
    );
})
$('#Desc .color').on('input', function () {
    var Color = $('#Desc .color').val();
    $('.block-desc-text').css('color', Color);
})
$('#Desc .size').change(function () {
    var Size = $('#Desc .size').val() + 'px';
    $('.block-desc-text').css('font-size', Size);
})

// 匯出圖片檔
function screenshot() {
    AutoCenter();

    html2canvas(
        document.querySelector('#ScreenShot'), { scale: 10 }
    ).then(function (canvas) {
        var Today = new Date();
        var Y = (Today.getFullYear()).toString();
        var M = (Today.getMonth()+1).toString();
        if(M.length<2){
            M = "0"+M;
        }
        var D = (Today.getDate()).toString();
        if(D.length<2){
            D = "0"+D;
        }
        var a = document.createElement('a');

        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");

        a.download = '文字版'+Y+M+D+'.jpg';
        a.click();

        $('canvas').remove();
    }
    );
}

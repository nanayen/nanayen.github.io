// 日期設定
$('#Apply-Setdate').click(function () {

    var DateYM = $('#Setdate').val();
    var DateY = DateYM.substr(0, 4);
    var DateM = DateYM.substr(-2, 2);

    if (DateYM != '') {
        $('.date-li').removeClass('--show');
        $('.date-num').text('');

        $('#Year').text(DateY);
        $('#Month').text(DateM)

        var DateDays = new Date(DateY, DateM, 0);
        var GetDays = DateDays.getDate();

        var FstDate = new Date(DateY, DateM - 1, 1);
        var FstWeek = FstDate.getDay();

        for (let i = 0; i < GetDays; i++) {
            $('.date-li').eq(FstWeek + i).addClass('--show');
            $('.date-num').eq(FstWeek + i).text(1 + i);
        }

        $('.--choose').removeClass('--choose');
        $('.lock-noselect').addClass('--lock');
    }
})

// 選取工具
$('#Select-None').click(function () {
    $('.--choose').removeClass('--choose');
})
$('#Select-All').click(function () {
    $('.date-li.--show').addClass('--choose');
})

// 單一日期選取
$('.date-li').click(function () {
    $(this).toggleClass('--choose');
})

// 文字編輯
$('#Apply-Settext').click(function () {
    var Text = $('#Textbox').val();
    $('.--choose .date-text').text(Text);
    $('#Textbox').val('');
})

// 文字清除
$('#Clear-Settext').click(function () {
    $('.--choose .date-text').text('');
    $('#Textbox').val('');
})

// 文字其他格式
$('.font-li').click(function () {
    $(this).toggleClass('--click');
})

// 格式設定
$('#Apply-Setformat').click(function () {
    var Color = $('#TextSet .color').val();
    var Size = $('#TextSet .size').val() + 'px';
    var Level = $('#TextSet .level').find('.--click').val();
    var Vertical = $('#TextSet .vertical').find('.--click').val();
    var Bold = $('#TextSet .bold.--click').val();
    if (Bold == undefined) {
        Bold = "normal";
    }
    var Italic = $('#TextSet .italic.--click').val();
    if (Italic == undefined) {
        Italic = "normal";
    }
    var Underline = $('#TextSet .underline.--click').val();
    if (Underline == undefined) {
        Underline = "none";
    }
    $('.--choose').css({
        'text-align': Level,
        'align-items':Vertical
    });    
    $('.--choose .date-text').css({
        'color':Color,
        'font-size':Size,
        'font-weight':Bold,
        'font-style':Italic,
        'text-decoration':Underline
    });
})

// 格式重設
$('#Clear-Setformat').click(function () {

    $('#TextSet .color').val('#4F1644');
    $('#TextSet .size').val('12');
    $('#TextSet .format-li').removeClass('--click');
    $('#TextSet .level .center').addClass('--click');
    $('#TextSet .vertical .flex-start').addClass('--click');
    $('#TextSet .font-li').removeClass('--click');

    $('.--choose .date-text').css({
        'color':'#4F1644',
        'font-size':'12px',
        'font-weight':'normal',
        'font-style':'normal',
        'text-decoration':'none'
    });
    $('.--choose').css({
        'text-align':'center',
        'align-items':'flex-start'
    });
})

// 物件顯示
$('.checkbox-divider').click(function () {
    $('.divider').toggleClass('--hide');
})

$('.checkbox-logo').click(function () {
    $('#Logo').toggleClass('--hide');
})

$('.boarder-set').on('input', function () {
    var BorCol = $(this).val();
    $('.date-title').css('color',BorCol);
    $('.week-li').css('color',BorCol);

    $('.date-style').remove();
    $('.date').append('<style class="date-style">.date-li.--show::before{background-color:'+BorCol+'}</style>');

    $('.divider').css('background-color', BorCol);
    $('.cls-1').css('fill', BorCol);
})

$('.datenum-set').on('input', function () {
    var BorCol = $(this).val();
    $('.date-num').css('color',BorCol);
})

// 匯出圖片檔
$('#btnSave').click(function () {

    $('.--choose').removeClass('--choose');
    AutoCenter();
    
    html2canvas(
        document.getElementById('ScreenShot'), { scale: 10 }
        ).then(function (canvas) {

        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        var DateYM = $('#Setdate').val();
        var DateY = DateYM.substr(0, 4);
        var DateM = DateYM.substr(-2, 2);

        a.download = DateY + DateM + '日程表.jpg';
        a.click();

        $('canvas').remove();
    });
})
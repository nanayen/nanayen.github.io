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

// 全部清空
$('#Clear-All').click(function () {
    $('.check').fadeIn(300);
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
})

// 選取工具
$('#Select-None').click(function () {
    $('.--choose').removeClass('--choose');
})
$('#Select-All').click(function () {
    $('.--show').addClass('--choose');
})

// 單一日期選取
$('.date-li').click(function () {
    $(this).toggleClass('--choose');
})

// 文字編輯
$('#Apply-Settext').click(function () {
    var Text = $('#Textbox').val();
    $('.--choose').find('.date-text').text(Text);
    $('#Textbox').val('');
})

// 文字清除
$('#Clear-Settext').click(function () {
    $('.--choose').find('.date-text').text('');
    $('#Textbox').val('');
})

// 格式擇一
$('.choose-one').click(function () {
    $(this).parent().find('.choose-one').removeClass('--click');
    $(this).addClass('--click');
})

// 文字其他格式
$('.font-li').click(function () {
    $(this).toggleClass('--click');
})

// 格式設定
$('#Apply-Setformat').click(function () {
    var Color = $('.color').val();
    var Size = $('.size').val() + 'px';
    var Level = $('.level').find('.--click').val();
    var Vertical = $('.vertical').find('.--click').val();
    var Bold = $('.bold.--click').val();
    if (Bold == undefined) {
        Bold = "normal";
    }
    var Italic = $('.italic.--click').val();
    if (Italic == undefined) {
        Italic = "normal";
    }
    var Underline = $('.underline.--click').val();
    if (Underline == undefined) {
        Underline = "none";
    }
    $('.--choose').find('.date-text').css('color', Color);
    $('.--choose').find('.date-text').css('font-size', Size);
    $('.--choose').css('text-align', Level);
    $('.--choose').css('align-items', Vertical);
    $('.--choose').find('.date-text').css('font-weight', Bold);
    $('.--choose').find('.date-text').css('font-style', Italic);
    $('.--choose').find('.date-text').css('text-decoration', Underline);
})

// 控制表重設函數
function FormatBox_reset() {
    $('.color').val('#4F1644');
    $('.size').val('12');
    $('.format-li').removeClass('--click');
    $('.level').find('.center').addClass('--click');
    $('.vertical').find('.flex-start').addClass('--click');
    $('.font-li').removeClass('--click');
}

// 格式重設
$('#Clear-Setformat').click(function () {
    $('.--choose').find('.date-text').css('color', '#4F1644');
    $('.--choose').find('.date-text').css('font-size', '12px');
    $('.--choose').css('text-align', 'center');
    $('.--choose').css('align-items', 'flex-start');
    $('.--choose').find('.date-text').css('font-weight', 'normal');
    $('.--choose').find('.date-text').css('font-style', 'normal');
    $('.--choose').find('.date-text').css('text-decoration', 'none');
    FormatBox_reset();
})

// 對話框，不要清空
$('#No').click(function () {
    $('.check').fadeOut(300);
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
})

// 對話框，全部清空
$('#Yes').click(function () {

    $('.date-text').css('color', '#4F1644');
    $('.date-text').css('font-size', '12px');
    $('.date-li').css('text-align', 'center');
    $('.date-li').css('align-items', 'flex-start');
    $('.date-text').css('font-weight', 'normal');
    $('.date-text').css('font-style', 'normal');
    $('.date-text').css('text-decoration', 'none');
    FormatBox_reset();
    $('.date-text').text('');

    $('.--choose').removeClass('--choose');
    $('.check').fadeOut(300);

    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
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
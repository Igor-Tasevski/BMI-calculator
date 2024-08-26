

$("document").ready(function () {



    $("form").on("submit", function (event) {
        event.preventDefault();
        var resultDiv = $(".title")



       
        $(".title").animate({ fontSize: '1.8em' }, "slow").delay(5000).fadeOut(2000);


        function calcBMI() {

            var weight = $("#weight").val();
            var height = $("#height").val();
            var bmi = weight / (height * height);
            return bmi.toFixed(2);

        }



        function bmiState() {


            if (calcBMI() > 17 && calcBMI() < 18.4) {

                return " <img src ='./images_man/Man 1.png'> <br> <img src= './images_women/woman 1.png'> Under weight - Follow this link <a href = 'https://www.healthline.com/nutrition/how-to-gain-weight'> to increase your weight on healthy way "

            }


            if (calcBMI() > 18.5 && calcBMI() < 24.9) {
                return " <img src ='./images_man/Man 2.png'> <br><img src= './images_women/woman 2.png'> Follow this link to <a href = 'https://www.nia.nih.gov/health/healthy-eating-nutrition-and-diet/maintaining-healthy-weight'>  keep that weight"
            }
            if (calcBMI() > 25 && calcBMI() < 29.9) {
                return "<img src ='./images_man/Man 3.png'> <br><img src= './images_women/woman 3.png'>Overweight - Follow this link  <a href = 'https://www.medicalnewstoday.com/articles/322345'> to lower your weight";
            }
            if (calcBMI() > 30 && calcBMI() < 34.9) {
                return "<img src ='./images_man/Man 4.png'><br> <img src= './images_women/woman 4.png'>Overweight class - Follow this link  <a href = 'https://www.medicalnewstoday.com/articles/322345'> to lower your weight"
            }

        }
        resultDiv.html(calcBMI() + " --> " + bmiState())




    });


});









$("document").ready(function () {
    // create the image rotator
    setInterval("rotateImages()", 4000);
});

function rotateImages() {
    var oCurPhoto = $('#hero div.current');
    var oNxtPhoto = oCurPhoto.next();
    if (oNxtPhoto.length == 0)
        oNxtPhoto = $('#hero div:first');

    oCurPhoto.removeClass('current').addClass('previous');
    oNxtPhoto.css({ opacity: 0.0 }).addClass('current')
        .animate({ opacity: 1.0 }, 1000,
            function () {
                oCurPhoto.removeClass('previous');
            });
}











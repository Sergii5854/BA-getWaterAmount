window.onload = function () {

    function getWaterAmount(data) {
        var sum = 0
        var between = null
        var left = null
        var right = data[data.length - 1];

        data.forEach(function (elem, index) {

            if (left > elem) {
                sum = sum + (left - elem)
            } else {
                left = elem;
                between = index;
            }

        });

        for (i = data.length - 1; i > between; i--) {

            if (data[i] > right) {
                right = data[i];
            }

            sum = sum - ( data[between] - right );

        }

        return sum;

    }

    var a = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]  //10
    var b = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]  // 17
    var c = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]  // 10
    var d = [7, 0, 1, 3, 4, 1, 2, 1]  // 9
    var e = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]  // 10
    var f = [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
    var j = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
    var k = [2, 2, 2, 2, 2] // 0


    console.group('getWaterAmount');
    console.log('getWaterAmount(' + a + ') // 10 => ', getWaterAmount(a))
    console.log('getWaterAmount(' + b + ') // 17 => ', getWaterAmount(b))
    console.log('getWaterAmount(' + c + ') // 10 => ', getWaterAmount(c))
    console.log('getWaterAmount(' + d + ') // 9 => ', getWaterAmount(d))
    console.log('getWaterAmount(' + e + ') // 10 => ', getWaterAmount(e))
    console.log('getWaterAmount(' + f + ') // 4 => ', getWaterAmount(f))
    console.log('getWaterAmount(' + j + ') // 24 => ', getWaterAmount(j))
    console.log('getWaterAmount(' + k + ') // 0 => ', getWaterAmount(k))


    console.groupEnd();
};
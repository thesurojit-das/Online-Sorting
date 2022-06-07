var arr = new Array();
    function task() {
        let item = document.getElementById('input').value;
        l = item.length;
        arr = item.split(',').map(x => +x);
        document.getElementById('show').innerHTML = "Entered Array " + arr;
    }
    function Reset() {
        arr.length = 0;
        document.getElementById('input').value = ""
        document.getElementById('show').innerHTML = ""
        document.getElementById('res').innerHTML = ""
    }
    function cal() {
        if (arr.length <= 0) {
            arr.length = 0;
            document.getElementById('res').innerHTML = "";
        }
        else {
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < (arr.length - 1); j++) {
                    if (arr[j] > arr[j + 1]) {
                        var temp = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j + 1] = temp
                    }
                }
                document.getElementById('res').innerHTML = "Sorted " + arr
            }
        }
    }
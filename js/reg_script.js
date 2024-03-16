document.addEventListener('DOMContentLoaded', function () {
    var isEditable = true;


    document.getElementById('edit').addEventListener('click', function () {
        isEditable = true;
        enableInputs();
    });

    document.getElementById('regForm').addEventListener('submit', function (event) {
        event.preventDefault();

        if (!isEditable) return;

        var inputs = document.querySelectorAll('.inputField');
        var regExpRegNo = /^[0-9]-{2}[A-Z]{3}[0-9]{4}$/;
        var regExpEmail = /^[a-zA-Z0-9._-]+@vitstudent.ac.in$/;
        var isEmpty = false;

        for (var i = 0; i < 7; i++) {
            var input = inputs[i];
            var reqdmsg = document.getElementById('reqdmsg' + (i + 1));
            if (input.value.trim() === '') {
                reqdmsg.innerText = "Required field";
                isEmpty = true;
            } else {
                reqdmsg.innerText = "";
            }
        }
        for (var i = 0; i < 4; i++) {
            var regInput = document.getElementById('reg' + (i + 1)).value.trim();
            var eIDInput = document.getElementById('eID' + (i + 1)).value.trim();
            var regMsg = document.getElementById('message' + (i + 1));
            var eIDMsg = document.getElementById('message' + (i + 5));

            if (regInput !== '' && !regExpRegNo.test(regInput)) {
                regMsg.innerText = "Invalid Registration No";
                return;
            } else {
                regMsg.innerText = "";
            }

            if (eIDInput !== '' && !regExpEmail.test(eIDInput)) {
                eIDMsg.innerText = "Invalid email ID";
                return;
            } else {
                eIDMsg.innerText = "";
            }
        }

        if (isEmpty) {
            return;
        }

        isEditable = false;
        disableInputs();
        document.getElementById('edit').style.display = "block";
        document.getElementById('submitBtn').style.display = "none";

        return false;
    });

    document.getElementById('edit').addEventListener('click', function (event) {
       event.preventDefault();
       enableInputs();
       document.getElementById('edit').style.display = "none";
        document.getElementById('submitBtn').style.display = "block";
    });

    function enableInputs() {
        var inputs = document.querySelectorAll('.inputField');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].removeAttribute('disabled');
        }
    }

    function disableInputs() {
        var inputs = document.querySelectorAll('.inputField');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute('disabled', 'disabled');
        }
    }
});
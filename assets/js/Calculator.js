let inputvalues = {};
function calculateAge() {
    if (!validateInputs("divForm")) {
        $('#dResult').text("-- ")
        $('#mResult').text("-- ")
        $('#yResult').text("-- ")
        return
    } else {
        getInputValues([
            'day',
            'month',
            'year'
        ])
        let dateInicial = new Date(inputvalues.year + "-" + inputvalues.month + "-" + inputvalues.day);
        let ActualDate = new Date();
        let maxDay = new Date(inputvalues.year, inputvalues.month, 0).getDate();
        if (ActualDate < dateInicial || maxDay<inputvalues.day) {
            paintInputs("divForm")
            return
        }
        let diferencia = ActualDate - dateInicial;
        let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        let meses = Math.floor(dias / 30.44); // Asumiendo un promedio de 30.44 días por mes
        let años = Math.floor(meses / 12);
        $('#dResult').text(dias + " ")
        $('#mResult').text(meses + " ")
        $('#yResult').text(años + " ")
    }

}
function validateInputs(div) {

    let inputs = document.querySelectorAll("div#" + div + " input");
    let labels = document.querySelectorAll("div#" + div + " label");
    let correct = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].style.borderColor = "red";
            labels[i].style.color = "red";
            correct = false
        } else {
            inputs[i].style.borderColor = "gray";
            labels[i].style.color = "gray";
        }
    }
    return correct;

}
function paintInputs(div) {
    let inputs = document.querySelectorAll("div#" + div + " input");
    let labels = document.querySelectorAll("div#" + div + " label");
    for (let i = 0; i < inputs.length; i++) {
        labels[i].style.color = "red";
        inputs[i].style.borderColor = "red";
    }

}
function getInputValues(obj) {
    inputvalues
    obj.forEach(function (id) {
        const campo = $('#' + id);
        inputvalues[id] = campo.val();
    });

}

function validateDate(evt, val, limit) {

    var keyCode = evt.which ? evt.which : evt.keyCode;

    if (keyCode < 48 || keyCode > 57) {
        evt.preventDefault();
    }

    var valorNum = parseInt(val + String.fromCharCode(keyCode), 10);

    if (valorNum > Number(limit)) {
        evt.preventDefault();
    }
}
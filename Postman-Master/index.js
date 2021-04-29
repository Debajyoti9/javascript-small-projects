console.log('This is my Javascript Code');


let jsonRadio = document.getElementById("jsonRadio");

let paramsRadio = document.getElementById("paramsRadio");

let parameterBox = document.getElementById("parameterBox");
let requestJsonBox = document.getElementById("requestJsonBox");
let countParams = 0;

parameterBox.style.display = "none";


function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
};


jsonRadio.addEventListener("click", () => {
    parameterBox.style.display = "none";
    requestJsonBox.style.display = "block";
});


paramsRadio.addEventListener("click", () => {
    requestJsonBox.style.display = "none";
    parameterBox.style.display = "block";
});

let addPrams = document.getElementById("addPrams");

addPrams.addEventListener("click", () => {
    let params = document.getElementById('params');

    let string = `<div class="form-row res my-2">
        <label for="url" class="col-sm-2 col-form-label">Parameter ${countParams+2}</label>
        <div class="col-md-4">
            <input type="text" class="form-control" id="parameterKey${countParams+2}" placeholder="Enter Parameter ${countParams+2} Key">
        </div>
        <div class="col-md-4">
            <input type="text" class="form-control bt" id="parameterValue${countParams+2}" placeholder="Enter Parameter ${countParams+2} Value">
        </div>
        <button id="addParam" class="btn btn-primary mx-4 deleteParams">-</button>
    </div>`;
    //conver the element into Dom Mode
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);

    let deleteParams = document.getElementsByClassName('deleteParams');

    for (item of deleteParams) {
        item.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        })
    }
    countParams++;

});


let submit = document.getElementById('submit');

submit.addEventListener("click", () => {
    document.getElementById("responseJsonText").value = "Please Wait we are fetching response..."

    let url = document.getElementById("urlField").value;
    let requestType = document.querySelector("input[name = 'requestType']:checked").value;
    let contentType = document.querySelector("input[name = 'contentType']:checked").value;
    if (contentType == "params") {
        data = {};
        for (i = 0; i <= countParams + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value;
            }
            data = JSON.stringify(data);
        }
    } else {
        data = document.getElementById('requestJsonText').value;
    }

    console.log("url is: " + url);
    console.log("requestType is: " + requestType);
    console.log("contentType is: " + contentType);
    console.log("data is: " + data);

    if (requestType == "GET") {
        fetch(url, {
                method: 'GET'
            }).then(response => response.text())
            .then((text) => {
                document.getElementById('responseJsonText').value = text;
            })
    } else if (requestType == "POST") {
        fetch(url, {
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }).then(response => response.text())
            .then((text) => {
                document.getElementById('responseJsonText').value = text;
            })
    }

});
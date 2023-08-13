let page = 0;
let data = 3;
let jsonLength = 0;
const JSONPATH = './data.json'

function loadTable(text='next-page') {
    console.log(text)
    if(text === 'on-load') {
        fetch(JSONPATH)
            .then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData);
                jsonLength = jsonData.length;

                let container = document.getElementById("container");
                for (let i = 0; i < data; i++) {
                    renderTable(i, jsonData, container);
                }

            });
    }
    else {
        page += 1;
        console.log(page);

        fetch(JSONPATH)
            .then((response) => response.json())
            .then((jsonData) => {

                const maxNumberOfPages = Math.ceil(jsonLength / data);
                if (page < maxNumberOfPages) {
                    let container = document.getElementById("container");

                    const maxPeopleOnLastPage = Math.min(data * page + data, jsonLength);
                    for (let i = data * page; i < maxPeopleOnLastPage; i++) {
                        renderTable(i,jsonData,container);
                    }
                } else {
                    alert("No More People!");
                }
            });

        for (let i = 0; i < Math.min(data, jsonLength - (page - 1) * data); i++) {
            let table = document.getElementById("" + i);
            table.remove();
        }
    }

    document.getElementById("para").innerHTML = text === 'on-load' ?
        "CURRENTLY " + data + " PEOPLE SHOWING" :
        (   jsonLength - page * data > 0 ?
            "CURRENTLY " + Math.min(data, jsonLength - page * data) + " PEOPLE SHOWING" :
            "NO MORE PEOPLE!"   );
}

function renderTable(i, jsonData, container) {
    let table = document.createElement("table");
    table.id = "" + (i-data*page);

    let item = jsonData[i];
    console.log(item);

    let vals = Object.values(item);

    let tr1 = document.createElement("tr");
    let th = document.createElement("th");
    th.rowSpan = 2;

    th.innerText = i + 1;
    let td1 = document.createElement("td");
    td1.innerText = "Name: " + vals[0];

    tr1.appendChild(th);
    tr1.appendChild(td1);
    table.appendChild(tr1);

    let tr2 = document.createElement("tr");
    let td2 = document.createElement("td");
    td2.innerText = "Location: " + vals[1];

    tr2.appendChild(td2);
    table.appendChild(tr2);
    container.appendChild(table);
}

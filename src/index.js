/* global Dicoogle */
var $ = require('jquery')

export default class MyPlugin {

    constructor() {
        // TODO initialize plugin here
    }

    /**
     * @param {DOMElement} parent
     * @param {DOMElement} slot
     */
    render(parent, slot) {
        // TODO mount a new web component here
        const div = document.createElement('div');

        var data = {query: "Modality:SM", field: ["uri", "SeriesInstanceUID", "modality"], keyword: "true"};
        $.ajax({
            url: "search",
            data: data,
            success: function (data, status) {
                //div.innerHTML = JSON.stringify(data);
                //div.innerHTML = MyPlugin.buildTableHeader();
                MyPlugin.buildTable(div, data);
                console.log(data);
                //console.log(JSON.stringify(data));
                parent.appendChild(div);
            },
            dataType: 'json'
        });

    }


    static drawButton(parent, suid) {
        const div = document.createElement('div');
        const btnBuy = document.createElement('input');
        btnBuy.setAttribute('type', 'button');
        btnBuy.setAttribute('value', 'open viewer');
        btnBuy.setAttribute('class', 'btn btn_dicoogle btn-xs');
        btnBuy.setAttribute('style', 'background-position: left;background-size: 15px;padding-left: 16px;background-repeat: no-repeat ; background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDk3MS4yOTkgOTcxLjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDk3MS4yOTkgOTcxLjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNTA4LjQ1LDY0MC41YzExLDAsMjAtOSwyMC0yMHYtOS4zYzAtMTEtOS0yMC0yMC0yMGgtMzM0Yy0xMSwwLTIwLDktMjAsMjB2OS4zYzAsMTEsOSwyMCwyMCwyMEg1MDguNDV6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTcxOC4xNSwyMjguMmMtMzEuNC0zMS40LTY3LjktNTYtMTA4LjctNzMuM2wtMC4yLTAuMWMtMTMuMy01LjYtMjguNjk5LTAuOC0zNi41LDExLjNsLTIzLjE5OSwzNi4xICAgIGMtNS44MDEtMi0xMi0zLjItMTguNC0zLjdjLTEuOS0wLjEtMy45LTAuMi01LjktMC4yYy01LjM5OSwwLTEwLjY5OSwwLjYtMTUuOCwxLjdsNDAuOS02My44bDEyLjctMTkuOCAgICBjOC44OTktMTMuOSw0Ljg5OS0zMi41LTkuMTAxLTQxLjRMNDQ0LjY1LDQuN2MtNS0zLjItMTAuNi00LjctMTYuMi00LjdjLTkuODk5LDAtMTkuNiw0LjktMjUuMywxMy44bC0xOTAuMSwyOTYuNCAgICBjLTguOSwxMy45LTQuOSwzMi41LDkuMSw0MS40bDIwLjcsMTMuM2wtOS40LDE0LjdsLTkuNCwxNC43bC01LjksOS4yYy04LjksMTMuODk5LTQuOSwzMi41LDkuMSw0MS4zOTlsMTcuOCwxMS40ICAgIGMxMy45LDguOSwzMi41LDQuOSw0MS40LTkuMWw1LjktOS4ybDkuMzk5LTE0LjdsOS40LTE0LjdsMjAuNCwxMy4xMDFjNSwzLjE5OSwxMC42LDQuNjk5LDE2LjE5OSw0LjY5OSAgICBjOS45LDAsMTkuNjAxLTQuODk5LDI1LjMwMS0xMy44bDc4LTEyMS43YzEuNiw3LjIsNC4xOTksMTQsNy44LDIwLjNjMy4xLDUuNSw2LjgsMTAuNiwxMS4xLDE1LjFjMTQuNCwxNS4yLDM0LjksMjQuNiw1Ny42MDEsMjMuOSAgICBjNDAuMS0xLjIsNzIuNjk5LTMzLjgsNzMuOC03My45YzAuMy05LjgtMS4zLTE5LjItNC40LTI3LjljMjAuOSwxMS40LDQwLjMsMjUuOSw1Ny42MDEsNDMuMmM0Ny42LDQ3LjYsNzMuOCwxMTAuOCw3My44LDE3OC4xMDEgICAgYzAsNjcuMy0yNi4yLDEzMC41LTczLjgsMTc4LjFjLTI5LjYwMSwyOS42LTY1LjIsNTAuOS0xMDQuMTAxLDYyLjhjLTIuODk5LDAuOS01Ljg5OSwxLjMtOC44OTksMS4zaC05OC40ICAgIGMtMTYuNiwwLTMwLTEzLjM5OS0zMC0zMFY2NzUuMmgtMTQzLjN2MzYuNjk5djQ3LjR2NTAuOWMzLjEtMC4yLDYuMy0wLjMwMSw5LjM5OS0wLjMwMUg0NzYuMzVoMzUuODk5SDY4My41NWgyMy42aDIuMyAgICBjMzQuMi02LjEsNjAuMy0zNiw2MC4zLTcyYzAtMjIuMTk5LTkuODk5LTQyLjEtMjUuNS01NS41YzE5LjItMjQuMTk5LDM1LjEwMS01MC44LDQ3LjItNzkuMzk5YzE3LjgtNDIuMiwyNi45LTg3LDI2LjktMTMzLjEwMSAgICBjMC00Ni4xLTktOTAuODk5LTI2LjktMTMzLjFDNzc0LjE1LDI5Ni4xLDc0OS41NSwyNTkuNSw3MTguMTUsMjI4LjJ6IE01MjUuMjUsMzAxLjdjLTEyLjY5OSwwLTIzLjMtOC42LTI2LjM5OS0yMC40ICAgIGMtMC42MDEtMi4yLTAuOS00LjYtMC45LTdjMC0xMy41LDkuOC0yNC43LDIyLjctMjYuOWMxLjUtMC4zLDMuMS0wLjQsNC43LTAuNGMxNS4xLDAsMjcuMywxMi4yLDI3LjMsMjcuMyAgICBTNTQwLjM1LDMwMS43LDUyNS4yNSwzMDEuN3ogTTcwNy4xNSw3NjEuMmMtMy4yLDEuNS02LjgsMi4zLTEwLjYsMi4zYy0xMC4xMDEsMC0xOC44MDEtNS44LTIyLjktMTQuMyAgICBjLTEuNy0zLjQtMi42LTcuMzAxLTIuNi0xMS4zMDFjMC0xNC4xLDExLjM5OS0yNS42LDI1LjYtMjUuNmMzLjgsMCw3LjQsMC44LDEwLjYsMi4zYzEuNywwLjgsMy40LDEuOCw0LjksMi45ICAgIGM2LjEsNC43LDEwLjEsMTIsMTAuMSwyMC4zQzcyMi4xNSw3NDguMyw3MTUuOTUsNzU3LjIsNzA3LjE1LDc2MS4yeiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik0yNjkuODUsODQ1LjNjLTY1LjQsNC44LTExNi45LDU5LjQtMTE2LjksMTI2aDUyNC4yYzE2LjYsMCwzMC0xMy40LDMwLTMwdi00OC4xVjg0NWgtNDI3LjkgICAgQzI3Ni4wNSw4NDUsMjcyLjk1LDg0NS4xLDI2OS44NSw4NDUuM3oiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)');
        btnBuy.addEventListener('click', e => {
            window.open("/tmg/dwsp?seriesuid=" + suid, '_blank');
        });

        div.appendChild(btnBuy);

        parent.appendChild(div);
    }

    static buildTable(divParent, data) {
        var tbl = document.createElement('table');
        tbl.setAttribute('class', 'table table-hover table-bordered table-condensed');
        tbl.setAttribute('border', '1');

        var headers = ['ID', 'Name', 'Date', 'Description', 'Institution', ''];

        var patientHeaders = ['PatientID', 'PatientName', 'Gender'];
        var studyHeaders = ['Date', 'Description', 'Institution'];
        var seriesHeaders = ['Description', '#Images', ''];

        MyPlugin.buildHeader(tbl, headers);

        headers = ['PatientID', 'PatientName', 'StudyDate', 'StudyDescription', 'InstitutionName'];

        MyPlugin.buildBody(tbl, headers, data);



        divParent.appendChild(tbl)
    }

    static buildHeader(parent, headersData) {
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');


        for (var x in headersData) {
            var th = document.createElement('th');
            th.setAttribute('class', 'sort-column');

            if (headersData[x] == '') {
                th.setAttribute('style', 'align:center; width:30px; max-width:30px;');
            }


            var thdiv = document.createElement("div");
            thdiv.setAttribute('class', 'th-inner table-header-column');
            thdiv.setAttribute('data-field', x.toLowerCase());
            thdiv.setAttribute('style', 'margin:10px 5px;');
            thdiv.innerHTML = headersData[x];

            th.appendChild(thdiv)
            tr.appendChild(th);

            thead.appendChild(th);
        }

        parent.appendChild(thead);
    }

    static buildBody(parent, ids, data) {
        var tbdy = document.createElement('tbody');
        var series = new Array();

        for (var item in data.results) {
            if (series.includes(data.results[item].fields['SeriesInstanceUID'])) {
                continue;
            } else {
                series.push(data.results[item].fields['SeriesInstanceUID']);
            }

            var tr = document.createElement('tr');

            for (var x in ids) {
                var td = document.createElement('td');
                td.setAttribute('style', 'align:left');

                var tdDiv = document.createElement('div');
                tdDiv.setAttribute('style', 'cursor:pointer');
                tdDiv.innerHTML = data.results[item].fields[ids[x]];
                td.appendChild(tdDiv);
                tr.appendChild(td);
            }
            var td = document.createElement('td');
            td.setAttribute('style', 'align:left');

            MyPlugin.drawButton(td, data.results[item].fields['SeriesInstanceUID']);

            tr.appendChild(td);
            tbdy.appendChild(tr);
        }


        parent.appendChild(tbdy);
    }
}

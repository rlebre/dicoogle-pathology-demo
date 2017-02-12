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
        console.log(div);
        parent.appendChild(div);
    }

    static buildTable(divParent, data) {
        //var html = "<div class=&quot;react-bs-table-container&quot; style=&quot;height:100%;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1&quot;&gt; &lt;div class=&quot;table-header-wrapper&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0&quot;&gt; &lt;div class=&quot;table-header&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0&quot; style=&quot;height: 36px;&quot;&gt; &lt;table class=&quot;table table-hover table-bordered table-condensed&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0&quot;&gt; &lt;thead data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0&quot;&gt; &lt;tr data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0&quot;&gt; &lt;th class=&quot; sort-column&quot; style=&quot;text-align: right; width: 130px; max-width: 130px;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$0&quot;&gt; &lt;div class=&quot;th-inner table-header-column&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$0.0&quot; data-field=&quot;id&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$0.0.0&quot;&gt;ID&lt;/span&gt;&lt;span class=&quot;order&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$0.0.1&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 5px;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$0.0.1.0&quot;&gt;&lt;/span&gt;&lt;/span&gt; &lt;/div&gt; &lt;/th&gt; &lt;th class=&quot; sort-column&quot; style=&quot;text-align: left; width: 327px; max-width: 327px;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$1&quot;&gt; &lt;div class=&quot;th-inner table-header-column&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$1.0&quot; data-field=&quot;name&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$1.0.0&quot;&gt;Name&lt;/span&gt;&lt;span class=&quot;order&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$1.0.1&quot;&gt;&lt;span class=&quot;dropdown&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$1.0.1.0&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 0 10px 5px;color:#ccc;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$1.0.1.0.0&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;dropup&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$1.0.1.1&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 0;color:#ccc;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$1.0.1.1.0&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/div&gt; &lt;/th&gt; &lt;th class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$0&quot; style=&quot;width: 269px;&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$0.0&quot;&gt;Date&lt;/span&gt;&lt;span class=&quot;order&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$0.1&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 5px;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$0.1.0&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/th&gt; &lt;th class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$1&quot; style=&quot;width: 416px;&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$1.0&quot;&gt;Description&lt;/span&gt;&lt;span class=&quot;order&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$1.1&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 5px;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$1.1.0&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/th&gt; &lt;th class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$2&quot; style=&quot;width: 368px;&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$2.0&quot;&gt;Institution&lt;/span&gt;&lt;span class=&quot;order&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$2.1&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 5px;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$2.1.0&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/th&gt; &lt;th class=&quot; sort-column&quot; style=&quot;text-align: center; width: 46px; max-width: 46px;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$5&quot;&gt; &lt;div class=&quot;th-inner table-header-column&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$5.0&quot; data-field=&quot;Select&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$5.0.0&quot;&gt;#S&lt;/span&gt;&lt;span class=&quot;order&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$5.0.1&quot;&gt;&lt;span class=&quot;dropdown&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$5.0.1.0&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 0 10px 5px;color:#ccc;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$5.0.1.0.0&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&quot;dropup&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$5.0.1.1&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 0;color:#ccc;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.0.0.0.0.0.1:$5.0.1.1.0&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/div&gt; &lt;/th&gt; &lt;/tr&gt; &lt;/thead&gt; &lt;/table&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class=&quot;table-container&quot; style=&quot;height:100%;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1&quot;&gt; &lt;table class=&quot;table table-striped table-bordered table-hover table-condensed&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0&quot; style=&quot;margin-top: -36px;&quot;&gt; &lt;thead data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0&quot;&gt; &lt;tr data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0&quot;&gt; &lt;th class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$0&quot; style=&quot;width: 130px;&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$0.0&quot;&gt;ID&lt;/span&gt;&lt;span class=&quot;order&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$0.1&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 5px;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$0.1.0&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/th&gt; &lt;th class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$1&quot; style=&quot;width: 327px;&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$1.0&quot;&gt;Name&lt;/span&gt;&lt;span class=&quot;order&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$1.1&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 5px;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$1.1.0&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/th&gt; &lt;th class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$0&quot; style=&quot;width: 160px;&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$0.0&quot;&gt;Date&lt;/span&gt;&lt;span class=&quot;order&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$0.1&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 5px;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$0.1.0&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/th&gt; &lt;th class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$1&quot; style=&quot;width: 247px;&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$1.0&quot;&gt;Description&lt;/span&gt;&lt;span class=&quot;order&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$1.1&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 5px;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$1.1.0&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/th&gt; &lt;th class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$2&quot; style=&quot;width: 219px;&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$2.0&quot;&gt;Institution&lt;/span&gt;&lt;span class=&quot;order&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$2.1&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 5px;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$2.1.0&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/th&gt; &lt;th style=&quot;display: none; width: 0px;&quot; class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$5&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$5.0&quot;&gt;#S&lt;/span&gt;&lt;span class=&quot;order&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$5.1&quot;&gt;&lt;span class=&quot;caret&quot; style=&quot;margin:10px 5px;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.0.0.1:$5.1.0&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/th&gt; &lt;/tr&gt; &lt;/thead&gt; &lt;tbody data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1&quot;&gt; &lt;tr class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0&quot;&gt; &lt;td style=&quot;text-align:right;&quot; class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$0&quot;&gt; &lt;div class=&quot;&quot; style=&quot;cursor:pointer;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$0.0&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$0.0.0&quot;&gt;&amp;nbsp; &lt;/span&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$0.0.1&quot;&gt;25377M9&lt;/span&gt;&lt;/div&gt; &lt;/td&gt; &lt;td style=&quot;text-align:left;&quot; class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$1&quot;&gt; &lt;div class=&quot;&quot; style=&quot;cursor:pointer;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$1.0&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$1.0.0&quot;&gt;&amp;nbsp; &lt;/span&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$1.0.1&quot;&gt;HAND,AP^upper extremities&lt;/span&gt;&lt;/div&gt; &lt;/td&gt; &lt;td style=&quot;text-align:center;&quot; class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$2&quot;&gt; &lt;div class=&quot;&quot; style=&quot;cursor:pointer;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$2.0&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$2.0.0&quot;&gt;&amp;nbsp; &lt;/span&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$2.0.1&quot;&gt;M&lt;/span&gt;&lt;/div&gt; &lt;/td&gt; &lt;td style=&quot;text-align:center;&quot; class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$3&quot;&gt; &lt;div class=&quot;&quot; style=&quot;cursor:pointer;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$3.0&quot;&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$3.0.0&quot;&gt;&amp;nbsp; &lt;/span&gt;&lt;span data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$3.0.1&quot;&gt;1&lt;/span&gt;&lt;/div&gt; &lt;/td&gt; &lt;td style=&quot;text-align:center;display:none;&quot; class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$4&quot;&gt; &lt;div data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$4.0&quot;&gt;&lt;/div&gt; &lt;/td&gt; &lt;td style=&quot;text-align:center;display:none;&quot; class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$5&quot;&gt; &lt;div class=&quot;advancedOptions 25377M9&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$5.0&quot;&gt; &lt;div type=&quot;checkbox&quot; label=&quot;&quot; class=&quot;form-group&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$5.0.0&quot;&gt; &lt;div class=&quot;checkbox&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$5.0.0.$checkboxRadioWrapper&quot;&gt;&lt;input type=&quot;checkbox&quot; label=&quot;&quot; class=&quot;&quot; data-reactid=&quot;.0.1.1.0.2.1.0.0.1.1.0.1.$0.1:$5.0.0.$checkboxRadioWrapper.$input&quot;&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/tbody&gt; &lt;/table&gt; &lt;/div&gt; &lt;/div>";


        var tbl = document.createElement('table');
        tbl.setAttribute('class', 'table table-hover table-bordered table-condensed');
        tbl.setAttribute('border', '1');

        var thead = document.createElement('thead');
        var tr = document.createElement('tr');

        var headers = ['ID', 'Name', 'Date', 'Description', 'Institution', '  '];

        for(var x in headers){
            var th = document.createElement('th');
            th.setAttribute('class', 'sort-column');

            var thdiv = document.createElement("div");
            thdiv.setAttribute('class', 'th-inner table-header-column');
            thdiv.setAttribute('data-field', x.toLowerCase());
            thdiv.setAttribute('style', 'margin:10px 5px;');
            thdiv.innerHTML = headers[x];

            th.appendChild(thdiv)
            tr.appendChild(th);

            thead.appendChild(th);
        }

        tbl.appendChild(thead);


        var tbdy = document.createElement('tbody');


        headers = ['PatientID', 'PatientName', 'StudyDate', 'StudyDescription', 'InstitutionName'];

        for (var item in data.results) {
            console.log(data.results[item].fields);
            var tr = document.createElement('tr');

            for(var x in headers){
                var td = document.createElement('td');
                td.setAttribute('style', 'align:left');

                var tdDiv = document.createElement('div');
                tdDiv.setAttribute('style', 'cursor:pointer');
                tdDiv.innerHTML = data.results[item].fields[headers[x]];
                td.appendChild(tdDiv);
                tr.appendChild(td);
            }
            var td = document.createElement('td');
            td.setAttribute('style', 'align:left');

            MyPlugin.drawButton(td, data.results[item].fields['SeriesInstanceUID']);

            tr.appendChild(td);
            tbdy.appendChild(tr);
        }


        tbl.appendChild(tbdy);

        divParent.appendChild(tbl)

    }
}

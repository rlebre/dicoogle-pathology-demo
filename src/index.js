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
        div.setAttribute('class', 'container');

        var data = {
            query: "Modality:SM",
            field: ["SOPInstanceUID", "SeriesInstanceUID", "PatientName", "StudyDate"],
            keyword: "true"
        };
        $.ajax({
            url: "search",
            data: data,
            traditional: true,
            success: function (data, status) {
                console.log(data);
                var map = new Map();
                for (var i in data.results) {

                    map.set(data.results[i].fields["SeriesInstanceUID"], data.results[i].fields);
                }

                MyPlugin.buildGallery(div, map);
            },
            dataType: 'json'
        });

        parent.appendChild(div);
    }

    static buildGallery(div, data) {


        var divRow = document.createElement('div');
        divRow.setAttribute('class', 'row');

        var divTitle = document.createElement('div');
        divTitle.setAttribute('class', 'col-lg-12');

        var header = document.createElement('h1');
        header.setAttribute('class', 'page-header');
        header.innerHTML = "Digital Pathology Images";

        divTitle.appendChild(header); // appends header to div header container
        divRow.appendChild(divTitle); // appends title to gallery row

        // building gallery items
        data.forEach(function (value, key, map) {
                console.log(value);
                var divImage = document.createElement('div');
                divImage.setAttribute('class', 'col-lg-4 col-md-6 col-xs-6');
                divImage.setAttribute('style', 'margin-bottom: 30px;');

                var a = document.createElement('a');
                a.setAttribute('class', 'thumbnail');
                a.setAttribute('style', 'text-decoration: none;');
                a.setAttribute('href', "/tmg/dwsp?seriesuid=" + value["SeriesInstanceUID"]);
                a.setAttribute('target', '_blank');

                var thumbnail = document.createElement('img');
                thumbnail.setAttribute('class', 'img-responsive');
                thumbnail.setAttribute('src', "/dic2png?thumbnail=true&SOPInstanceUID=" + value["SOPInstanceUID"]);
                thumbnail.setAttribute('style', 'max-height:250px;height:250px;width:250px;max-width:250px;');
                thumbnail.setAttribute('onerror', "if (this.src != '/assets/image-not-found.png') this.src = '/assets/image-not-found.png';");

                var divCaption = document.createElement('div');
                divCaption.setAttribute('class', 'caption');
                var pPN = document.createElement('p');
                pPN.innerHTML = "Patient Name: ".bold() + value["PatientName"];
                var pDate = document.createElement('p');
                pDate.innerHTML = "Date: ".bold() + value["StudyDate"].substring(0, 4) + "-" + value["StudyDate"].substring(4, 6) + "-" + value["StudyDate"].substring(6, 8);


                divCaption.appendChild(pPN);
                divCaption.appendChild(pDate);

                $.ajax({
                    url: "/tmg/dwsp/pinfo",
                    data: {SeriesInstanceUID: value["SeriesInstanceUID"]},
                    traditional: true,
                    success: function (data, status) {
                        var pRes = document.createElement('p');
                        pRes.innerHTML = "Resolution: ".bold() + data.width + 'x' + data.height;
                        divCaption.appendChild(pRes);
                    },
                    dataType: 'json'
                });

                a.appendChild(thumbnail);
                a.appendChild(divCaption);
                divImage.appendChild(a);
                divRow.appendChild(divImage);
            }
        );

        div.appendChild(divRow);
    }
}

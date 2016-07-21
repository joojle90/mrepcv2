import {
    Page, NavController
}
from 'ionic-angular';
import {
    MrepcData
}
from '../../providers/mrepc-data';
import {
    ShowdetailsPage
}
from '../showdetails/showdetails';

@
Page({
    templateUrl: 'build/pages/myseminar/myseminar.html',
    providers: [MrepcData]
})
export class MyseminarPage {
    static get parameters() {
        return [
          [NavController], [MrepcData]
        ]
    }
    constructor(nav, mrepcdata) {
        this.nav = nav;
        this.mrepcdata = mrepcdata;

        mrepcdata.load();

        this.myseminarlist = [];

        this.loadDataMyseminar();
    }

    loadDataMyseminar() {
        var monthname = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

        return this.mrepcdata.getMrepcseminar().then(data => {
            this.myseminarlist = data.sort((a,b) => {
                var thedatea = a.eventdetail[0].startdate.split(" ");
                var setdatea = new Date (thedatea[2], monthname.indexOf(thedatea[1].toLowerCase()), thedatea[0]);
                var thedateb = b.eventdetail[0].startdate.split(" ");
                var setdateb = new Date (thedateb[2], monthname.indexOf(thedateb[1].toLowerCase()), thedateb[0]);
                return setdateb - setdatea;
            });
            this.myseminarlist = this.myseminarlist.slice(0, 2);
        });
    }

    myseminardetail(event) {
        var imgpic = event.image;
        this.nav.push(ShowdetailsPage, {
            evenpic: imgpic,
            eventdetails: event.eventdetail[0],
            eventlike: event.like
        });
    }
}

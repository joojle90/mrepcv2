import {
    IonicApp, Page, NavController, ActionSheet, Alert, Config, NavParams, Platform
}
from 'ionic-angular';
//import {
//    ElasticHeader
//}
//from '../../directives/elastic-header/elastic-header';
//import {
//    YoutubeVideo
//}
//from '../../directives/youtube/youtube';
//import {
//    BookticketPage
//}
//from '../../pages/bookticket/bookticket';

/*
  Generated class for the PlayvideoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@
Page({
    templateUrl: 'build/pages/showdetails/showdetails.html'
})
export class ShowdetailsPage {
    static get parameters() {
        return [
          [IonicApp], [NavController], [Config], [NavParams]
        ]
    }
    constructor(app, nav, config, navParams, platform) {
        this.app = app;
        this.nav = nav;
        this.navParams = navParams;
        this.platform = platform;
        this.config = config;
        this.geteventdetails = this.navParams.data;

        this.nowdate = new Date();
        this.newdate;

        this.eventselected = [];
        this.loadeventdetails();
    }

    loadeventdetails() {
        var eventitems = [];
        var items = {};
        var itemicons = ["time", "speedometer", "people", "map"];
        var itemdescs = ["Start date", "End date", "Visitors", "Location"];
        var j = 0;

        for (var i in this.geteventdetails.eventdetails) {
            var details = this.geteventdetails.eventdetails[i];

            if (j < 4) {
                eventitems.push({
                    "item": details,
                    "itemicon": ""
                });
            } else {
                eventitems.push({
                    "item": details,
                    itemicon: itemicons[j - 4],
                    "itemdesc": itemdescs[j - 4]
                });
            }
            j++;
        }

        items.eventitems = eventitems;
        console.log(items.eventitems);
        return this.eventselected = eventitems;
    }

//    bookticket() {
//        this.nav.push(BookticketPage);
//    }
//
//    loadcomingsoondate() {
//        var monthname = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
//
//        var thedate = this.geteventdetails.moviedetails.showtime.split(" ");
//        var setdate = new Date (thedate[2], monthname.indexOf(thedate[1].toLowerCase()), thedate[0]);
//
//        this.newdate = setdate;
//    }

    presentActionSheet() {
            let actionSheet = ActionSheet.create({
                title: 'Share',
                buttons: [{
                    text: 'Facebook',
                    icon: 'social-facebook',
                    style: 'facebook',
                    handler: () => {
                        test('facebook');
                    }
            }, {
                    text: 'Twitter',
                    icon: 'social-twitter',
                    style: 'twitter',
                    handler: () => {
                        console.log('Archive clicked');
                    }
            }, {
                    text: 'Instagram',
                    icon: 'social-instagram',
                    style: 'instagram',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
            }, {
                    text: 'Path',
                    icon: 'social-pinterest',
                    style: 'path',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
            }]
            });
            this.nav.present(actionSheet);
        }
        //
        //    showToast(message, position) {
        //        this.platform.ready().then(() => {
        //            window.plugins.toast.show(message, "short", position);
        //        });
        //    }

//    var test(sharebtn) {
//        //var message = 'Thanks for sharing via '+sharebtn;
//        //window.plugins.toast.show(message, "short", 'bottom');
//        let alert = Alert.create({
//            title: 'On Progress!',
//            subTitle: 'Thanks for sharing via ' + sharebtn,
//            buttons: ['Ok']
//        });
//        console.log(alert);
//        //this.nav.present(alert);
//    }
}

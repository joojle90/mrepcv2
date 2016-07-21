import {
    Page, NavController, NavParams
}
from 'ionic-angular';
import {
    MrepcData
}
from '../../providers/mrepc-data';

/*
  Generated class for the CategoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@
Page({
    templateUrl: 'build/pages/tutorial/tutorial.html'
})
export class TutorialPage {
    static get parameters() {
        return [
          [NavController], [NavParams]
        ]
    }
    constructor(nav, params) {
        this.nav = nav;
        this.item = params.data.item;
    }
}

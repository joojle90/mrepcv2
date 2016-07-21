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
    templateUrl: 'build/pages/byproductdetails/byproductdetails.html'
})
export class ByproductDetailsPage {
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

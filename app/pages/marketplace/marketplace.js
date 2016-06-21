import {
    Page, NavController
}
from 'ionic-angular';
import {
    ByproductPage
}
from '../byproduct/byproduct';
import {
    BysupplierPage
}
from '../bysupplier/bysupplier';

/*
  Generated class for the TabsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@
Page({
    templateUrl: 'build/pages/marketplace/marketplace.html',
})
export class MarketplacePage {
    static get parameters() {
        return [
          [NavController]
        ]
    }
    constructor(nav) {
        this.nav = nav;
        this.tab1Root = ByproductPage;
        this.tab2Root = BysupplierPage;
//        this.tab3Root = CategoryPage;
    }
}

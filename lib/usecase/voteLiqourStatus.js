/**
 * お酒リストで「飲んだよ」ボタンクリックしたときに
 * LocaleStorageに投票時のデータを保存する
 */
import Cookies from 'js-cookie';

const LIQOUR_LOAD_KEY = 'yuriyoi_liqour_voted';

const voteLiqourStatus = {
    load() {
        console.log('...load');
        const items = Cookies.get( LIQOUR_LOAD_KEY );
        if( !items ) return;
        console.log(11,items);
    },

    put( liqId ) {
        // IDをもらって、存在しなければ追加。存在したら削除。
        const _id = liqId;
        const items = Cookies.get( LIQOUR_LOAD_KEY );

        const baseItems = ( () => {
            const _id = [ String(liqId) ];
            if( !items ) return [ ..._id ];
            return [ items, ..._id ];
        } )();

        const putItems = baseItems.join(',');
        Cookies.set( LIQOUR_LOAD_KEY, putItems )
    },
};

export default voteLiqourStatus;
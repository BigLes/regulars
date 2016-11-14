/**
 * Created by Oleksandr Lisovyk on 03.11.2016.
 */
'use strict';

import React    from 'react';
import Header   from '../../components/header/Header';
import Loader   from '../../components/loader/Loader';
import Popup    from '../../components/popup/Popup';

const ListPage = React.createClass({
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <Loader/>
                    <Popup/>
                </main>
            </div>
        );
    }
});

export default ListPage;

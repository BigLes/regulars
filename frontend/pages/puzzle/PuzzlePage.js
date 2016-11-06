/**
 * Created by Oleksandr Lisovyk on 03.11.2016.
 */
'use strict';

import React    from 'react';
import Header   from '../../components/header/Header';
import Loader   from '../../components/loader/Loader';

const ListPage = React.createClass({
    render() {
        return (
            <div>
                <Header></Header>
                <main>
                    <Loader></Loader>
                </main>
            </div>
        );
    }
});

export default ListPage;

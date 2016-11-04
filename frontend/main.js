/**
 * Created by Oleksandr Lisovyk on 1.11.2016.
 */
'use strict';

import React        from 'react';
import ReactDOM     from 'react-dom';
import PuzzlePage   from './pages/puzzle/PuzzlePage';
import {Router, Route, browserHistory} from 'react-router';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={PuzzlePage} />
        </Router>,
        document.getElementById('mount')
    );
});

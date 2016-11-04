/**
 * Created by Oleksandr Lisovyk on 04.11.2016.
 */
'use strict';

import {StyleSheet} from 'aphrodite';
import constants    from '../../constants/styles';

export default StyleSheet.create({
    header: {
        fontSize: 'larger',
        borderBottom: `1px solid ${constants.lightGrey}`,
        color: constants.darkGrey,
        textAlign: 'center'
    }
});

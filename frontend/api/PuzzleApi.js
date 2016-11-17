/**
 * Created by Oleksandr Lisovyk on 17.11.2016.
 */
'use strict';

import fetch    from '../utils/fetch';
import config   from 'config';

const url = config.apiUrl + 'puzzles/';

const PuzzleApi = {

    get: () => {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    },

    getOne: (id) => {
        return fetch(url + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    },

    create: (puzzle) => {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(puzzle),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    },

    update: (puzzle) => {
        return fetch(url + puzzle.id, {
            method: 'PUT',
            body: JSON.stringify(puzzle),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    },

    remove: (id) => {
        return fetch(url + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
};

export default PuzzleApi;

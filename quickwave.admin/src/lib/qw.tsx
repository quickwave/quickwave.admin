﻿
// A '.tsx' file enables JSX support in the TypeScript compiler,
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


import React = require('react');
import ReactDOM = require('react-dom');
import rb = require('react-bootstrap');
var b: any = rb;
//require('react-forms');


export module App {

    export class QuickWaveApplication {

        start_application() {
            toastr.info('Application started');
        }
    }

}



// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-1-08-Yuri-Gabutero24//sw.js", {
    scope: "/ICS2O-Unit-1-08-Yuri-Gabutero24/",
  })
}

function myButtonClicked() {
  alert("Hello, World!")
}

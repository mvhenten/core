#!/usr/bin/env node
"use strict";
"use server";


require("inline-mocha")(module);

describe(__filename, function() {
    it("should analyze 'functions.js'", require('./framework').buildTest("functions.js"));
});
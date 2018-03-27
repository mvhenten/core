#!/usr/bin/env node
"use strict";
"use server";


require("inline-mocha")(module);

describe(__filename, function() {
    this.timeout(6000);
    it("should analyze 'bigfile.js'", require('./framework').buildTest("bigfile.js"));
});
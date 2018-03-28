#!/usr/bin/env node
"use strict";
"use server";


require("inline-mocha")(module);

describe(__filename, function() {
    it("should analyze 'simple.js'", require('./framework').buildTest("simple.js"));
});
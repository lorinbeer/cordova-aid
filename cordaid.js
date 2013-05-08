

var config = require("./config");
var exec = require("child_process").exec;

function main() {


}

function execCallback(error, stdout, stderr) {
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
    if (error != null) {
        console.log("exec error: " + error);
    }
}

function clone(options) {
   var target = config.repos.base + config.repos[options.repo]; 
   child = exec("git clone " + target, execCallback); 
}


clone({"repo":"mobile-spec"});

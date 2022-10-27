const fs = require("fs");
var fse = require('fs-extra');
var source = process.cwd() + "/tempsource";
var dest = process.cwd() + "/tempdest";

 function copyFolder() {
    try{
        console.log(source)
        console.log(dest)
        if (!fs.existsSync(dest)){
            fs.mkdirSync(dest, { recursive: true });
        }
        //copy directory content including subfolders
        fse.copy(source, dest, function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log("success!");
        }
      }); 

    }catch(e) {
      console.log("Error while copying the funtions" + e);
    }
  }

  copyFolder();


// // const PaletteManagerPath = `${homedir}/se-node-red-palette_manager/package.json`
// // const PaletterManagerJson = require(PaletteManagerPath);
// var batFilesUninstall = [
//   "se-node-red-palette_manager_offline_uninstall.bat",
//   "se-node-red-modbus_offline_uninstall.bat",
//   "se-node-red-machine_advisor_offline_uninstall.bat",
//   "se-node-red-harmony_hub_offline_uninstall.bat",
//   "se-node-red-aveva_insight_offline_uninstall.bat",
// ];
// const nodes = {
//   Palette_Manager: "se-node-red-palette_manager_offline_install.js",
//   Modbus_Tag: "se-node-red-modbus_offline_install.js",
//   Harmony_Hub: "se-node-red-harmony_hub_offline_install.js",
//   Aveva_Insight: "se-node-red-aveva_insight_offline_install.js",
//   Machine_Advisor: "se-node-red-machine_advisor_offline_install.js"
// };
// const nodes1 = {
//   Palette_Manager: "se-node-red-palette_manager_offline_install.js"
// };

// // getallprocess()
// // UninstalltheNodes(batFilesUninstall);
// // runbatchFileExec(nodes);
// // InstallHigherVersionNodes(nodes);
// // VerifyPaletteManagerVersion('1.0.0')
//   // VerifyOnlineInstallation('se-node-red-machine_advisor');
//   // InstallOnlineAvevInsight('2.1.1');
//   // InstallOnlineModbus('3.1.0');
//   // InstallOnlineHarmonyHub('2.0.0');
//   // InstallOnlineMachineAdvisor('2.1.0');
// //   uninstalltonlineNodes();

//   // runNodeRed();
//   // closeNodeRed()
  
//   // async function runNodeRed() {
//   //   const {stdout} = await exec("Node-Red");
//   //    res = JSON.parse(JSON.stringify(stdout));
//   //   console.log(res);
//   //   console.log("Node-red command executed");
//   // }





  
//     function closeNodeRed() {
//     const {stdout} =  exec("taskkill /F /IM node.exe");
//     const response = JSON.parse(JSON.stringify(stdout));
//     console.log(response);
  
//   };
  
// async function uninstalltonlineNodes() {

//   const onlinenodes = {
//     Modbus_Tag: "se-node-red-modbus",
//     Harmony_Hub: "se-node-red-harmony_hub",
//     Aveva_Insight: "se-node-red-aveva_insight",
//     Machine_Advisor: "se-node-red-machine_advisor"
//   };

//   try{
//       currentfilepath = homedir + "/.node-red";
//       await process.chdir(currentfilepath);
//       for (const [key, value] of Object.entries(onlinenodes)) {
//         console.log('uninstalling the online node ' + key);
//         const cmdinstallnode = await exec("npm uninstall " + value);
//         const noderesponse = JSON.parse(JSON.stringify(cmdinstallnode.stdout));
//         console.log(noderesponse);
//         let noderemovemessge = noderesponse.split(' ')[0];
//         expect(['audited','removed','up']).include(noderemovemessge);
//       }
//       await process.chdir(rootDirectory);
//   }catch(e) {
//     console.log("Error while uninstalling the online installion nodes" + e);
//   }
// }


// async function OnlinePrerequisiteSteps() {
//   try {
//   const cmdregister = await exec("npm set registry https://wain05400.apa.gad.schneider-electric.com:4878/");
//   const registryres = JSON.parse(JSON.stringify(cmdregister.stdout));
//   console.log("The response of changing the setting the registry is " + registryres);
//  //npm config rm proxy
//  const cmdrmproxy = await exec("npm config rm proxy");
//  const removeProxy = JSON.parse(JSON.stringify(cmdrmproxy.stdout));
//  console.log("The response of removing proxy is " + removeProxy);
// //  //  npm config rm http-proxy
//  const cmdhttpproxy = await exec("npm config rm http-proxy");
//  const removehttpProxy = JSON.parse(JSON.stringify(cmdhttpproxy.stdout));
//  console.log("The response of removing http proxy is " + removehttpProxy);
// //  // npm config rm https-proxy
//  const cmdhttpsproxy = await exec("npm config rm https-proxy");
//  const removehttpsProxy = JSON.parse(JSON.stringify(cmdhttpsproxy.stdout));
//  console.log("The response of removing https proxy is " + removehttpsProxy);
//   }catch(e){
//     console.log("Error while executing the preinstalled steps for online installion nodes" + e);
//   }

// }

// async function InstallOnlineAvevInsight(version) {
//   try{
//     await OnlinePrerequisiteSteps();
//     currentfilepath = homedir + "/.node-red";
//     await process.chdir(currentfilepath);
//     const cmdinstallnode = await exec('npm install se-node-red-aveva_insight');
//     const noderesponse = JSON.parse(JSON.stringify(cmdinstallnode.stdout));
//     var Node = ((((noderesponse.split("+")[1]).trim()).split(' ')[0]).split("@")[0]).trim();
//     var Version = ((((noderesponse.split("+")[1]).trim()).split(' ')[0]).split("@")[1]).trim();
//     console.log("The node is " + Node);
//     console.log("The version is " + Version);
//     console.log("*******************************************");
//     expect(Version.toString()).include(version);
//     await process.chdir(rootDirectory);
//     console.log("current working directory is" + process.cwd());
//   }catch(e){
//     console.log("Error while installing the online Aveva Insight" + e);
//   }
// }

// async function InstallOnlineModbus(version) {
//   try{
//     await OnlinePrerequisiteSteps();
//     currentfilepath = homedir + "/.node-red";
//     await process.chdir(currentfilepath);
//     const cmdinstallnode = await exec('npm install se-node-red-modbus');
//     const noderesponse = JSON.parse(JSON.stringify(cmdinstallnode.stdout));
//     var Node = ((((noderesponse.split("+")[1]).trim()).split(' ')[0]).split("@")[0]).trim();
//     var Version = ((((noderesponse.split("+")[1]).trim()).split(' ')[0]).split("@")[1]).trim();
//     console.log("The node is " + Node);
//     console.log("The version is " + Version);
//     console.log("*******************************************");
//     expect(Version.toString()).include(version);
//     await process.chdir(rootDirectory);
//     console.log("current working directory is" + process.cwd());
//   }catch(e){
//     console.log("Error while installing the online se-node-red-modbus" + e);
//   }
// }


// async function InstallOnlineHarmonyHub(version) {
//   try{
//     await OnlinePrerequisiteSteps();
//     currentfilepath = homedir + "/.node-red";
//     await process.chdir(currentfilepath);
//     const cmdinstallnode = await exec('npm install se-node-red-harmony_hub');
//     const noderesponse = JSON.parse(JSON.stringify(cmdinstallnode.stdout));
//     var Node = ((((noderesponse.split("+")[1]).trim()).split(' ')[0]).split("@")[0]).trim();
//     var Version = ((((noderesponse.split("+")[1]).trim()).split(' ')[0]).split("@")[1]).trim();
//     console.log("The node is " + Node);
//     console.log("The version is " + Version);
//     console.log("*******************************************");
//     expect(Version.toString()).include(version);
//     await process.chdir(rootDirectory);
//     console.log("current working directory is" + process.cwd());
//   }catch(e){
//     console.log("Error while installing the online se-node-red-harmony_hub" + e);
//   }
// }

// async function InstallOnlineMachineAdvisor(version) {
//   try{
//     await OnlinePrerequisiteSteps();
//     currentfilepath = homedir + "/.node-red";
//     await process.chdir(currentfilepath);
//     const cmdinstallnode = await exec('npm install se-node-red-machine_advisor');
//     const noderesponse = JSON.parse(JSON.stringify(cmdinstallnode.stdout));
//     var Node = ((((noderesponse.split("+")[1]).trim()).split(' ')[0]).split("@")[0]).trim();
//     var Version = ((((noderesponse.split("+")[1]).trim()).split(' ')[0]).split("@")[1]).trim();
//     console.log("The node is " + Node);
//     console.log("The version is " + Version);
//     console.log("*******************************************");
//     expect(Version.toString()).include(version);
//     await process.chdir(rootDirectory);
//     console.log("current working directory is" + process.cwd());
//   }catch(e){
//     console.log("Error while installing the online se-node-red-machine_advisor" + e);
//   }
// }


// async function InstallOnlinePaletteManager(version) {
//   try{
//     await OnlinePrerequisiteSteps();
//     currentfilepath = homedir + "/.node-red";
//     await process.chdir(currentfilepath);
//     const cmdinstallnode = await exec('npm install se-node-red-palette-manager');
//     const noderesponse = JSON.parse(JSON.stringify(cmdinstallnode.stdout));
//     var Node = ((((noderesponse.split("+")[1]).trim()).split(' ')[0]).split("@")[0]).trim();
//     var Version = ((((noderesponse.split("+")[1]).trim()).split(' ')[0]).split("@")[1]).trim();
//     console.log("The node is " + Node);
//     console.log("The version is " + Version);
//     console.log("*******************************************");
//     expect(Version.toString()).include(version);
//     await process.chdir(rootDirectory);
//     console.log("current working directory is" + process.cwd());
//   }catch(e){
//     console.log("Error while installing the online palette Manager" + e);
//   }
// }

// async function VerifyOnlineInstallation(node) {
//   const onlinenodes = {
//     Palette_Manager: "npm install se-node-red-palette-manager",
//     Modbus_Tag: "npm install se-node-red-modbus",
//     Harmony_Hub: "npm install se-node-red-harmony_hub",
//     Aveva_Insight: "npm install se-node-red-aveva_insight",
//     Machine_Advisor: "npm install se-node-red-machine_advisor"
//   };

//   //npm set registry https://wain05400.apa.gad.schneider-electric.com:4878/
//   const cmdregister = await exec("npm set registry https://wain05400.apa.gad.schneider-electric.com:4878/");
//   const registryres = JSON.parse(JSON.stringify(cmdregister.stdout));
//   console.log("The response of changing the setting the registry is " + registryres);
//  //npm config rm proxy
//  const cmdrmproxy = await exec("npm config rm proxy");
//  const removeProxy = JSON.parse(JSON.stringify(cmdrmproxy.stdout));
//  console.log("The response of removing proxy is " + removeProxy);
// //  //  npm config rm http-proxy
//  const cmdhttpproxy = await exec("npm config rm http-proxy");
//  const removehttpProxy = JSON.parse(JSON.stringify(cmdhttpproxy.stdout));
//  console.log("The response of removing http proxy is " + removehttpProxy);
// //  // npm config rm https-proxy
//  const cmdhttpsproxy = await exec("npm config rm https-proxy");
//  const removehttpsProxy = JSON.parse(JSON.stringify(cmdhttpsproxy.stdout));
//  console.log("The response of removing https proxy is " + removehttpsProxy);

//     currentfilepath = homedir + "/.node-red";
//     await process.chdir(currentfilepath);
//     const cmdinstallnode = await exec('npm install ' + node);
//     const noderesponse = JSON.parse(JSON.stringify(cmdinstallnode.stdout));
//     var Node = ((((noderesponse.split("+")[1]).trim()).split(' ')[0]).split("@")[0]).trim();
//     var Version = ((((noderesponse.split("+")[1]).trim()).split(' ')[0]).split("@")[1]).trim();
//     console.log("The node is " + Node);
//     console.log("The version is " + Version);
//     console.log("*******************************************");
//     // expect(Version).toBe('^2.1.1');
//     expect(Version.toString()).include('2.1.0');
//   await process.chdir(rootDirectory);
//   console.log("current working directory is" + process.cwd());
// }


// async function VerifyPaletteManagerVersion() {
//  var expected = PaletterManagerJson.version
//   console.log(PaletterManagerJson.version)
//   expect(expected).equal("1.0.0");
// }

// async function InstallHigherVersionNodes(nodes) {
//   for (const [key, value] of Object.entries(nodes)) {
//     let currentDir;
//     console.log("current working directory is" + process.cwd());
//     currentDir = process.cwd() + "/Downloads/sdata/HigherVersion/" + key;
//     await process.chdir(currentDir);
//     console.log("current working directory is" + process.cwd());
//     const {stdout} = await exec("node " + value);
//     // const child = await exec("start cmd.exe /K node " + value);
//     const res = JSON.parse(JSON.stringify(stdout));
//     console.log(res);
//     await process.chdir(rootDirectory);
//     console.log("current working directory is" + process.cwd());
//   }
// }

// async function runbatchFileExec(nodes) {
//   for (const [key, value] of Object.entries(nodes)) {
//     let currentDir;
//     console.log("current working directory is" + process.cwd());
//     currentDir = process.cwd() + "/Downloads/sdata/" + key;
//     await process.chdir(currentDir);
//     console.log("current working directory is" + process.cwd());
//     const {stdout} = await exec("node " + value);
//     // const child = await exec("start cmd.exe /K node " + value);
//     const res = JSON.parse(JSON.stringify(stdout));
//     console.log(res);
//     await process.chdir(rootDirectory);
//     console.log("current working directory is" + process.cwd());
//   }
// }

// async function VerifyPaletteManagerVersion(expectedText) {
// 	// console.log(testData)
//     // console.log("Expected Text " + expectedText);
//     // var expectedText = testData["expected_text"];
//     var actual_text = PaletterManagerJson.version;
//     if (fs.existsSync(PaletteManagerPath)) {
// 	  console.log("Expected Text " + expectedText);
// 	  console.log("Actual Text " +actual_text);
//     expect(actual_text).to.be.true(expectedText)
// 	  //  expect(actual_text).to.include(expectedText);
// 	  }else {
// 			console.log("Node Palette Manager is not installed");
// 	  }
// }

// async function UninstalltheNodes(batFiles) {
//   for (const batchfile of batFiles) {
//     let currentfilepath;
//     currentfilepath = homedir + "/" + batchfile;
//     console.log(currentfilepath);
//     if (fs.existsSync(currentfilepath)) {
//       console.log("The currentfilepath is " + currentfilepath);
//       await process.chdir(homedir);
//       const { stdout } = await exec(`${batchfile}`);
//       // const child = await spawn("cmd.exe", ['/c',currentfilepath],{detached:true});
//       const res = JSON.parse(JSON.stringify(stdout));
//       await process.chdir(rootDirectory);
//       console.log("The file is uninstalled successfully " + res);
//     } else {
//       console.log("This file " + currentfilepath + " not exist");
//     }
//   }
// }

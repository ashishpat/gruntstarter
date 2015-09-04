# Gruntstarter
This is a demo application to showcase usage of the Grunt task runner.

It was written for a presentation on automation, featuring Grunt for development automation and Boxstarter for software installation automation.

## Installation

You must have node.js installed. I recommend getting it from Chocolatey, so you can: `cinst nodejs.install`.

Once node.js is installed, you'll have to install the Grunt CLI, Bower, and TypeScript globally:

```Powershell
npm install grunt-cli -g
npm install bower -g
npm install typescript -g
npm install manifoldjs -g
```

Once the global packages are installed, clone the repo and install the dependencies:

```Powershell
git clone git://github.com/szul/gruntstarter.git
cd gruntstarter
npm init
cd static
bower init
```

You can now run the `grunt` commands or `node server.js` to see the test web page consuming the grunt output.

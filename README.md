# AzureDevOps Extension

This project uses the [Svelte] framework (https://svelte.dev).


* Note: you need [Node.js] (https://nodejs.org) installed. *


## Start

Installation of dependencies ...

`` bash
cd my-teen-extension
npm install
`` ``

... then start the webpack server:

`` bash
npm run start: dev
`` ``

The extension is started at [localhost: 3000] (http: // localhost: 3000). You should then see your application running. Edit a component file in `src`, save it, and the page should reload with your changes (hot reload).


## Configuration

In `src / App.svetle`, change the` projectName` and `repoName` variables to match your project.


## Pack the extension

`` bash
npm run package
`` ``

* Note: don't forget to update the package version in `vss-extension.json`. *

## Publish the package

You will need a PAT (Personal Access Token) to use the publish.


`` bash
npm run publish
`` ``

## Information

To use the api's of the `azure-devops-extension-api` framework, it is necessary to have sufficient rights see [Scopes] (https://docs.microsoft.com/en-us/azure/devops/extend/ develop / manifest? view = azure-devops # scopes).

For the demo, the extension will look for the commits of an Azure DevOps repo, it therefore needs the authorization to query Azure Repos, it is then necessary to modify the scope of the extension, for the demo we will use the scope according to `vso.code_full` (for a production application, take the most restrictive (s) according to your needs of course) this` scope` property is to be defined in the `vss-extension.json` file.

When you modify the scopes and if the package has already been published beforehand, you must validate the new authorizations in `Organization settings / Extensions`, otherwise you will have CORS type errors.


## Debug

To use debug mode you need to package (and publish by hand) or publish the application in dev mode.

`` bash
npm run package: dev
`` ``

or

`` bash
npm run publish: dev
`` ``

* Note: it is not possible to publish the `dev` package over the` release` package. *

* Workaround: modify the `name` property of the` vss-extension.json` file for each change of publication mode (dev or release) to be able to have the two extensions coexist on Azure DevOps *

Once the application is installed on Azure DevOps and in `dev` mode, if you navigate on it you will have a loading icon that runs indefinitely, because in` dev` mode (see the `configs \ dev.json` file ), the browser redirects all network calls to the url defined by the `basePath` property, namely" https: // localhost: 3000 ", * it's magic, so it's that of my local server! : laughing: *

You will then have understood it by launching your local server, you will then be able to debug your application.

Here we go, we run the command:

`` bash
npm run start: dev-ado
`` ``

Your extension is now displayed in Azure DevOps, so you can edit your files locally and enjoy the power of hot reload: blush:

* Tech Info: so that the browser can resolve your extension files (dist folder), the command `npm run start: dev-ado` starts the webpack server in a mode that allows you to serve your files from the` / dist folder `rather than in memory *


Enjoy!

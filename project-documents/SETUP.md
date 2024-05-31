# Getting Started with COD Stat Tracking App

This file is a step-by-step guide to setting up our COD Stat Tracking App. To view me in markdown mode, click on the book with a magnifying glass in the top right corner.

## Project Set-Up

We will be using Yarn rather than npm, why? It's better. We will no longer use package-lock.json but rather yarn.lock.

Step 1: Install Node.js and Yarn

- Download and install [Node.js](https://nodejs.org)

- Yarn comes bundled with Node.js, so you should have Yarn installed after install Node.js

- To check if the install was succesful, run `yarn --version` & `node --version`.

Step 2: Install Dependencies

- Run the following command to install all dependencies: `yarn install`

- As mentioned earlier, package-lock.json is replaced by yarn.lock but yarn.lock populates package.json.

- If you accidentally use npm, simply run `rm package-lock.json` & `rm yarn.lock` and then run `yarn install` again, we don't want to mix both of them together because then computer go BOOM!

Step 3: Run Project

- Once dependencies are installed, run `yarn start`.

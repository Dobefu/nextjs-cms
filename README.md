# NextJS CMS

## Getting Started

To set up this project, you will need to have Node.js installed on your system. Make sure to use the version that is in the [.nvmrc](./.nvmrc) file.

[NVM](https://github.com/nvm-sh/nvm) can be used to manage Node.js versions. Install NVM by following the instructions in the [NVM GitHub repository](https://github.com/nvm-sh/nvm#installation-and-update). Once NVM is installed, you can run `nvm install` to use the correct version automatically.

- Install the dependencies
  ```bash
  make install
  ```
- Set up an OAuth application in GitHub and copy the keys to the `.env` file
- Start the database container:
  ```bash
  make db-start
  ```
- Initialize the database:
  ```bash
  make db-reset
  ```
- Run the development server:
  ```bash
  make watch
  ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

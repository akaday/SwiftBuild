# SwiftBuild

## Building with Ninja

* Install Ninja on your local machine:
  * On Ubuntu, run `sudo apt-get update` followed by `sudo apt-get install ninja-build`.
* Configure the project to use Ninja:
  * Ensure that the `build` script in your `package.json` is compatible with Ninja.
* Build the project using Ninja:
  * Run `ninja` in the project root directory to start the build process.
* Verify the Ninja installation locally:
  * Run `ninja --version` to check the installed version of Ninja.

## Using Custom Build Rules and Actions

* Define custom build rules and actions in the `jobs.build.steps` section of `build.yml`.
* Use the `run` keyword to execute custom commands or scripts.
* Utilize existing GitHub Actions or create your own actions to perform custom tasks.
* Define environment variables in the `jobs.build.steps` section to control custom build rules.
* Use the `env` keyword to set environment variables that can be used in subsequent steps.
* Modify the build commands to use these environment variables for custom behavior.
* Use conditional statements in the `jobs.build.steps` section to execute custom build rules based on specific conditions.
* Utilize the `if` keyword to define conditions for executing particular steps.
* Combine conditionals with environment variables or custom scripts to create complex build rules.

## Using Docker in the Build Process

* Add a step to set up Docker in the `jobs.build.steps` section of `build.yml`.
* Use the `run` keyword to execute Docker commands or scripts.
* Define environment variables in the `jobs.build.steps` section to control Docker-related tasks.
* Use the `env` keyword to set environment variables that can be used in subsequent steps.
* Modify the build commands to use these environment variables for Docker-related behavior.
* Use conditional statements in the `jobs.build.steps` section to execute Docker-related tasks based on specific conditions.
* Utilize the `if` keyword to define conditions for executing particular Docker steps.
* Combine conditionals with environment variables or custom scripts to create complex Docker-related build rules.

## Setting Up the Development Environment

### Prerequisites

* Ensure you have Node.js (version 14) and npm installed on your machine.
* Install Ninja on your local machine:
  * On Ubuntu, run `sudo apt-get update` followed by `sudo apt-get install ninja-build`.

### Cloning the Repository

* Clone the repository to your local machine using `git clone <repository-url>`.
* Navigate to the project directory using `cd <repository-directory>`.

### Installing Dependencies

* Run `npm install` to install the required dependencies.

### Verifying Installations

* Verify the Ninja installation by running `ninja --version`.
* Verify the Node.js installation by running `node -v`.
* Verify the npm installation by running `npm -v`.

### Running the Application

* Use `npm start` to start the application.

### Running Tests

* Use `npm test` to run the test suite.

### Running Linting

* Use `npm run lint` to run the linter and check for code quality issues.

### Building the Project

* Use `ninja` in the project root directory to start the build process.

### Troubleshooting Common Issues

* If you encounter any issues during the setup or build process, refer to the troubleshooting section in the `README.md` file for common solutions.

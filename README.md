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

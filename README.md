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

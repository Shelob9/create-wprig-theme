# Create WPRIG Theme

Create a new WordPress starter theme powered by [WPRig](https://wprig.io/).

## Why Use This?
This tool is designed for a developer who wants to use [WPRig](https://wprig.io/) as a starter theme. It is not designed with contributing to WPRig in mind. In that case, [follow these installation instructions](https://github.com/wprig/wprig#how-to-install-wp-rig).

I wrote this at contributor day. It's not done yet.

## What Does This Do?
TL;DR - Makes a new theme, installs dependencies and sets up git origins.

Creates a new theme based on the latest version (2.0+) of WPRig with your own git repo as the origin and [https://github.com/wprig/wprig](https://github.com/wprig/wprig) as an upstream. As you develop your theme, you push your changes to your own git repo while maintaining the option to pull upstream changes if/ when you wish to. Also, it runs `npm install` and such.

## What Are The Security Concerns?
When you run this program, code from a remote servers -- Github and npm -- is download and executed on your machine. You should use [freedom one](https://www.gnu.org/philosophy/free-sw.en.html) to read the code -- it's not a lot -- before running this program. Or trust me. Or when it's ready, I hope this can be moved to the repo to WPRig org.

## Got Thaughts About This?
Awesome! [Let's Discuss In This Issue](https://github.com/wprig/wprig/issues/2300)
## Usage
**DON'T USE THIS YET**

### Before You Begin
Make sure you have installed everything that you need for WPRig - [WPRig](https://wprig.io/)

### How It Will Work
* Create a new Git repo with Github or GitLab or whatever.
* Swith to the theme directory.
* Create new theme with slug "my-theme" using https://github.com/you/my-theme as the git origin.
    * `npx create-wprig-theme create https://github.com/you/my-theme my-theme`
    
### Command Arguments
* `create [gitUrl] [slug]`
   * `[gitUrl]` The URL for your remote git repo.
   * `[slug]` The slug for your theme.
    
### Usage For Testing
__ This is way more complex then it should be, I'm not done __

* Create a Git(hub/lab/bucket) repo with nothing in it.
* `git clone git@github.com:Shelob9/create-wprig-theme.git`
* `cd create-wprig-theme`
* `node index.js create  https://github.com/you/my-theme t7




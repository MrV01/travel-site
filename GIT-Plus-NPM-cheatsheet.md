[Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

--- GIT ---
( Install from git-scm.com if not installed yet ;-) )

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/TravelSite

$ git --version
git version 2.9.2.windows.1

### Set up User Name & E-mail
$ git config --global user.name "Vlad"
$ git config --global user.email "VladV454@gmail.com"

### Ready  to GO

$ cd < New dir for GIT repositiory>
### Create new repositiory
$ git init
Initialized empty Git repository in C:/Users/Vlad/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/TravelSite/.git/

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/TravelSite (master)
$

### Add all files to the staging area

$ git add -A
warning: LF will be replaced by CRLF in app/index.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/TravelSite (master)
$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   app/assets/images/.DS_Store
        new file:   app/assets/images/Thumbs.db
        new file:   app/assets/images/first-trip-hi-dpi-i.jpg
        new file:   app/assets/images/first-trip-hi-dpi.jpg
        new file:   app/assets/images/first-trip-i.jpg
        new file:   app/assets/images/first-trip.jpg
        new file:   app/assets/images/hero--large-hi-dpi-i.jpg
        new file:   app/assets/images/hero--large-hi-dpi.jpg
        new file:   app/assets/images/hero--large-i.jpg
        new file:   app/assets/images/hero--large.jpg
        new file:   app/assets/images/hero--medium-hi-dpi-i.jpg
        new file:   app/assets/images/hero--medium-hi-dpi.jpg
        new file:   app/assets/images/hero--medium-i.jpg
        new file:   app/assets/images/hero--medium.jpg
        new file:   app/assets/images/hero--small-hi-dpi-i.jpg
        new file:   app/assets/images/hero--small-hi-dpi.jpg
        new file:   app/assets/images/hero--small-i.jpg
        new file:   app/assets/images/hero--small.jpg
        new file:   app/assets/images/hero--smaller-hi-dpi-i.jpg
        new file:   app/assets/images/hero--smaller-hi-dpi.jpg
        new file:   app/assets/images/hero--smaller-i.jpg
        new file:   app/assets/images/hero--smaller.jpg
        new file:   app/assets/images/icons/clear-view-escapes.svg
        new file:   app/assets/images/icons/comment.svg
        new file:   app/assets/images/icons/facebook.svg
        new file:   app/assets/images/icons/fire.svg
        new file:   app/assets/images/icons/globe.svg
        new file:   app/assets/images/icons/instagram.svg
        new file:   app/assets/images/icons/mail.svg
        new file:   app/assets/images/icons/rain.svg
        new file:   app/assets/images/icons/star.svg
        new file:   app/assets/images/icons/twitter.svg
        new file:   app/assets/images/icons/wifi.svg
        new file:   app/assets/images/icons/youtube.svg
        new file:   app/assets/images/our-start-hi-dpi-i.jpg
        new file:   app/assets/images/our-start-hi-dpi.jpg
        new file:   app/assets/images/our-start-i.jpg
        new file:   app/assets/images/our-start-landscape-hi-dpi-i.jpg
        new file:   app/assets/images/our-start-landscape-hi-dpi.jpg
        new file:   app/assets/images/our-start-landscape-i.jpg
        new file:   app/assets/images/our-start-landscape-small-i.jpg
        new file:   app/assets/images/our-start-landscape-small.jpg
        new file:   app/assets/images/our-start-landscape.jpg
        new file:   app/assets/images/our-start-portrait-hi-dpi-i.jpg
        new file:   app/assets/images/our-start-portrait-hi-dpi.jpg
        new file:   app/assets/images/our-start-portrait-i.jpg
        new file:   app/assets/images/our-start-portrait.jpg
        new file:   app/assets/images/our-start.jpg
        new file:   app/assets/images/testimonial-cat-hi-dpi-i.jpg
        new file:   app/assets/images/testimonial-cat-hi-dpi.jpg
        new file:   app/assets/images/testimonial-cat-i.jpg
        new file:   app/assets/images/testimonial-cat.jpg
        new file:   app/assets/images/testimonial-jane-hi-dpi-i.jpg
        new file:   app/assets/images/testimonial-jane-hi-dpi.jpg
        new file:   app/assets/images/testimonial-jane-i.jpg
        new file:   app/assets/images/testimonial-jane.jpg
        new file:   app/assets/images/testimonial-john-hi-dpi-i.jpg
        new file:   app/assets/images/testimonial-john-hi-dpi.jpg
        new file:   app/assets/images/testimonial-john-i.jpg
        new file:   app/assets/images/testimonial-john.jpg
        new file:   app/assets/images/testimonials-bg.jpg
        new file:   app/index.html
        new file:   index.html
        new file:   package.json

#### Commit the staging as first commit
$ git commit -m "My first commit"
[master (root-commit) 106731f] My first commit
warning: LF will be replaced by CRLF in app/index.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory.
 64 files changed, 110 insertions(+)
.........................................

####  Checkout back what was commited
$ git checkout -- .

#### Change the gears,  Clone some "nice pets-project" from github
$ cd ..
$ git clone https://github.com/LearnWebCode/welcome-to-git.git
Cloning into 'welcome-to-git'...
remote: Counting objects: 9, done.
remote: Total 9 (delta 0), reused 0 (delta 0), pack-reused 9
Unpacking objects: 100% (9/9), done.
Checking connectivity... done.

#####  Now create account on the github.com, unless do not exist already :-)
#####  And Create empty repositiory
####  Clone Professor's  travel-site  template  from github.com to you computer
$ git clone https://github.com/LearnWebCode/travel-site-files.git
Cloning into 'travel-site-files'...
remote: Counting objects: 83, done.
remote: Compressing objects: 100% (76/76), done.
remote: Total 83 (delta 5), reused 83 (delta 5), pack-reused 0
Unpacking objects: 100% (83/83), done.
Checking connectivity... done.

#### Rename the repository to your own new name:  travel-site
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy
$ mv travel-site-files travel-site

#### Now  PUSH to  your own gitHub account.
###  Check where git is going to PUSH files first:
$ git remote -v
origin  https://github.com/LearnWebCode/travel-site-files.git (fetch)
origin  https://github.com/LearnWebCode/travel-site-files.git (push)

### Modify destinations to new repository, like :
#### https://github.com/MrV01/travel-site.git
$ git remote set-url origin https://github.com/MrV01/travel-site.git
$ git remote -v
origin  https://github.com/MrV01/travel-site.git (fetch)
origin  https://github.com/MrV01/travel-site.git (push)

####  PUSH  master branch to your repositiory:
$ git push origin master
To https://github.com/MrV01/travel-site.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/MrV01/travel-site.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

####  OK,  PULL the files to desktop computer first:
$ git pull
remote: Counting objects: 27, done.
remote: Total 27 (delta 3), reused 3 (delta 3), pack-reused 24
Unpacking objects: 100% (27/27), done.
From https://github.com/MrV01/travel-site
   d013c11..87960ef  master     -> origin/master
Updating d013c11..87960ef
Fast-forward
 app/assets/styles/styles.css | 15 +++++++++++++++
 app/index.html               |  8 +++++---
 app/temp/styles/styles.css   | 14 ++++++++++++++
 gulpfile.js                  | 39 +++++++++++++++++++++++++++++++++++++++
 package.json                 | 16 ++++++++++++++++
 5 files changed, 89 insertions(+), 3 deletions(-)
 create mode 100644 app/assets/styles/styles.css
 create mode 100644 app/temp/styles/styles.css
 create mode 100644 gulpfile.js
 create mode 100644 package.json

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$
#######  Now PUSH again ( Laptop changes have been applied locally now. )

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git push origin master
Everything up-to-date

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)

##############################################
###  NODE.JS    +   NPM
###  1. AUTOMATION
###  2. ORGANIZATION
##############################################

### USE  JQuery  in the travel-site  project.
$ npm install jquery
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- jquery@3.1.1

npm WARN travel-site@1.0.0 No description
npm WARN travel-site@1.0.0 No repository field.
npm WARN travel-site@1.0.0 No license field.

####  To stay organized, and keep track of packages, we
####  are going to use for the project,
####  Start over. Remove Jquery & other npm modules
$ rm -rf node_modules

####  Start over with NPM init  command
####  It creates fresh  package.json config file.
$ npm init

####  Now install npm modules into the project locally.
####  Using --save option to keep list of installed modules in
####  package.json file dependencies section:
## "dependencies": {
##   "jquery": "^3.1.1"
##  }


$ npm install jquery --save
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- jquery@3.1.1

$ npm install normalize.css --save
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- normalize.css@5.0.0
####  !!!!
### If we remove the node_modules, we can install them back
####  using command:  npm install
####  !!!! npm will install appropriate modules from the list
####  package.json  dependencies: { }
####
$ rm -rf node_modules

$ npm install
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
+-- jquery@3.1.1
`-- normalize.css@5.0.0

###########  GULP.JS   ###################
### Install gulp-cli   Globally on the computer.
npm install gulp-cli --global

### Install GULP for the local project:
### npm install gulp --save-dev

$ npm install gulp --save-dev
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- gulp@3.9.1
  +-- archy@1.0.0
  +-- chalk@1.1.3
  | +-- ansi-styles@2.2.1
  | +-- escape-string-regexp@1.0.5
  | +-- has-ansi@2.0.0
  | | `-- ansi-regex@2.1.1
  | +-- strip-ansi@3.0.1
  | `-- supports-color@2.0.0
  +-- deprecated@0.0.1
  +-- gulp-util@3.0.8
  | +-- array-differ@1.0.0
  | +-- array-uniq@1.0.3
  | +-- beeper@1.1.1
  | +-- dateformat@2.0.0
  | +-- fancy-log@1.3.0
  | | `-- time-stamp@1.0.1
  | +-- gulplog@1.0.0
  | | `-- glogg@1.0.0
  | +-- has-gulplog@0.1.0
  | | `-- sparkles@1.0.0

#########
#########   Development dependencies added to package.json
### "devDependencies": {
###  "gulp": "^3.9.1"
### }

#########   First GULP plugin gulp-watch
$ npm install gulp-watch --save-dev

> fsevents@1.1.0 install C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\node_modules\fsevents
> node install

travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- gulp-watch@4.3.11
  +-- anymatch@1.3.0
  | `-- arrify@1.0.1
  +-- chokidar@1.6.1
  | +-- async-each@1.0.1
  | +-- fsevents@1.1.0
  | | +-- nan@2.5.1
  | | `-- node-pre-gyp@0.6.33
  | |   +-- mkdirp@0.5.1

#############
############# In order to Fix the WARNING regarding outdated minimatch &
#############  graceful-fs
############
$ npm install -g minimatch@3.0.2
C:\Users\Vlad\AppData\Roaming\npm
`-- minimatch@3.0.2
  `-- brace-expansion@1.1.6
    +-- balanced-match@0.4.2
    `-- concat-map@0.0.1

$ npm install -g graceful-fs@4.1.11
    C:\Users\Vlad\AppData\Roaming\npm
    `-- graceful-fs@4.1.11

### And update npm itself to the most recent version
$ npm install -g npm

#############################################
#### Install other gulp plug-in's
#############################################
$ npm install gulp-postcss --save-dev
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- gulp-postcss@6.3.0
....
$ npm install autoprefixer --save-dev
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- autoprefixer@6.7.3
  +-- browserslist@1.7.4
...........
$ npm install postcss-simple-vars --save-dev
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- postcss-simple-vars@3.0.0
..............
$ npm install postcss-nested --save-dev
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- postcss-nested@1.0.0
...............
$ npm install postcss-import --save-dev
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- postcss-import@9.1.0
  +-- object-assign@4.1.1
  +-- promise-each@2.2.0
  | `-- any-promise@0.1.0
  `-- read-cache@1.0.0

########### Browsersync
$ npm install browser-sync --save-dev
npm WARN deprecated node-uuid@1.4.7: use uuid module instead
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- browser-sync@2.18.8
  +-- browser-sync-client@2.4.5
  | +-- etag@1.8.0
  | `-- fresh@0.3.0


      Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
      $ npm uninstall --save node-uuid
      - node-uuid@1.4.7 node_modules\node-uuid

      Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
      $ npm install --save uuid
      npm WARN deprecated node-uuid@1.4.7: use uuid module instead
      travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
      +-- browser-sync@2.18.8
      | `-- localtunnel@1.8.2
      |   `-- request@2.78.0
      |     `-- node-uuid@1.4.7
      `-- uuid@3.0.1

###  Fix the npm WARN   deprecated node-uuid by updating npm module  request
$ npm install -g request

#### Install NPM postcss-mixins package:
$ npm install postcss-mixins --save-dev
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- postcss-mixins@5.4.1
  +-- globby@6.1.0
  | +-- array-union@1.0.2
  | +-- glob@7.1.1
  | | +-- fs.realpath@1.0.0
  | | `-- minimatch@3.0.3
  | `-- object-assign@4.1.1
  +-- postcss-js@0.2.0
  | `-- camelcase-css@1.0.1
  `-- sugarss@0.2.0

#################################################
GIT  Branches  Aside
#################################################

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch count-to-ien

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch
  count-to-ien
* master

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch -d count-to-ien
Deleted branch count-to-ien (was 1f6565a).

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch
* master

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch count-to-ten

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch
  count-to-ten
* master

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout count-to-ten
Switched to branch 'count-to-ten'

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-ten)
$
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-ten)
$ git status
On branch count-to-ten
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-ten)
$ git status
On branch count-to-ten
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   app/index.html

no changes added to commit (use "git add" and/or "git commit -a")

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-ten)
$ git add -A

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-ten)
$ git commit -m 'Counted to 10'
[count-to-ten 34932d0] Counted to 10
 1 file changed, 3 insertions(+)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-ten)
$ git status
On branch count-to-ten
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-ten)
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout cont-to-ten
error: pathspec 'cont-to-ten' did not match any file(s) known to git.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout count-to-ten
Switched to branch 'count-to-ten'

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-ten)
$ git status
On branch count-to-ten
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-ten)
$
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout count-to-ten
Switched to branch 'count-to-ten'

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-ten)
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout count-to-ten
Switched to branch 'count-to-ten'

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-ten)
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git merge count-to-ten
Updating 1f6565a..34932d0
Fast-forward
 app/index.html | 12 ++++++++++++
 1 file changed, 12 insertions(+)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git push origin master
Counting objects: 12, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (12/12), done.
Writing objects: 100% (12/12), 1.11 KiB | 0 bytes/s, done.
Total 12 (delta 6), reused 0 (delta 0)
remote: Resolving deltas: 100% (6/6), completed with 2 local objects.
To https://github.com/MrV01/travel-site.git
   1f6565a..34932d0  master -> master

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch count-to-fifteen

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch
  count-to-fifteen
  count-to-ten
* master

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkuot count-to-fifteen
git: 'checkuot' is not a git command. See 'git --help'.

Did you mean this?
        checkout

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout count-to-fifteen
Switched to branch 'count-to-fifteen'

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-fifteen)
$
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-fifteen)
$ git commit -am 'counted to 15'
[count-to-fifteen 118ac12] counted to 15
 1 file changed, 6 insertions(+)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-fifteen)
$ git push origin count-to-fifteen
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 422 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/MrV01/travel-site.git
 * [new branch]      count-to-fifteen -> count-to-fifteen

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-fifteen)
$ git commit -am 'counted to 17'
[count-to-fifteen 205545b] counted to 17
 1 file changed, 2 insertions(+)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-fifteen)
$ git push origin count-to-fifteen
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 409 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/MrV01/travel-site.git
   118ac12..205545b  count-to-fifteen -> count-to-fifteen

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-fifteen)
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-fifteen)
$ git commit -am 'counted to 17'
[count-to-fifteen 205545b] counted to 17
 1 file changed, 2 insertions(+)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-fifteen)
$ git push origin count-to-fifteen
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 409 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/MrV01/travel-site.git
   118ac12..205545b  count-to-fifteen -> count-to-fifteen

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (count-to-fifteen)
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git pull origin master
remote: Counting objects: 1, done.
remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (1/1), done.
From https://github.com/MrV01/travel-site
 * branch            master     -> FETCH_HEAD
   34932d0..6c55a9e  master     -> origin/master
Updating 34932d0..6c55a9e
Fast-forward
 app/index.html | 8 ++++++++
 1 file changed, 8 insertions(+)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branches
git: 'branches' is not a git command. See 'git --help'.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch
  count-to-fifteen
  count-to-ten
* master

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git pull origin master
From https://github.com/MrV01/travel-site
 * branch            master     -> FETCH_HEAD
Already up-to-date.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch -d count-to-ten
Deleted branch count-to-ten (was 34932d0).

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch -d count-to-fifteen
Deleted branch count-to-fifteen (was 205545b).

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branc
git: 'branc' is not a git command. See 'git --help'.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch
* master

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git commit -am 'Removed test <UL> numbers removed. First part git branch lesson completed'
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git commit -am 'Removed test <UL> numbers removed. First part git branch lesson completed'
[master d060e89] Removed test <UL> numbers removed. First part git branch lesson completed
 1 file changed, 19 deletions(-)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git push
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 443 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/MrV01/travel-site.git
   6c55a9e..d060e89  master -> master

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch
* master

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout -b our-features
Switched to a new branch 'our-features'

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$ git branch
  master
* our-features

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$ git status
On branch our-features
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   app/assets/styles/modules/_row.css
        modified:   app/assets/styles/styles.css
        modified:   app/index.html
        modified:   app/temp/styles/styles.css

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        app/assets/styles/modules/_feature-item.css
        app/assets/styles/modules/_section-title.css

no changes added to commit (use "git add" and/or "git commit -a")

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$ git commit -am 'Our features inthe middle of Part 1. ( end of the day commit)'
warning: LF will be replaced by CRLF in app/assets/styles/styles.css.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
[our-features warning: LF will be replaced by CRLF in app/assets/styles/styles.css.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
3095597] Our features inthe middle of Part 1. ( end of the day commit)
warning: LF will be replaced by CRLF in app/assets/styles/styles.css.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
 4 files changed, 80 insertions(+), 22 deletions(-)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$ git status
On branch our-features
Untracked files:
  (use "git add <file>..." to include in what will be committed)

        app/assets/styles/modules/_feature-item.css
        app/assets/styles/modules/_section-title.css

nothing added to commit but untracked files present (use "git add" to track)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$ git add -A

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$ git status
On branch our-features
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   app/assets/styles/modules/_feature-item.css
        new file:   app/assets/styles/modules/_section-title.css


Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$ git commit -am 'Our features inthe middle of Part 1. ( end of the day commit 2)'
[our-features d07f2ae] Our features inthe middle of Part 1. ( end of the day commit 2)
 2 files changed, 19 insertions(+)
 create mode 100644 app/assets/styles/modules/_feature-item.css
 create mode 100644 app/assets/styles/modules/_section-title.css

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$ git status
On branch our-features
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$ git push origin our-features
Counting objects: 20, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (18/18), done.
Writing objects: 100% (20/20), 6.77 KiB | 0 bytes/s, done.
Total 20 (delta 7), reused 0 (delta 0)
remote: Resolving deltas: 100% (7/7), completed with 5 local objects.
To https://github.com/MrV01/travel-site.git
 * [new branch]      our-features -> our-features

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$
##############################################
GIT merge branch our-features to master
################################################

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$ git add -A
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$ git commit -m 'Completed the Our features section'
[our-features warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
6f10b7f] Completed the Our features section
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
 2 files changed, 2 insertions(+), 2 deletions(-)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$ git push origin our-features
Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (10/10), 860 bytes | 0 bytes/s, done.
Total 10 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/MrV01/travel-site.git
   73405df..6f10b7f  our-features -> our-features

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (our-features)
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git merge our-features --no-ff
error: Your local changes to the following files would be overwritten by merge:
        app/temp/styles/styles.css
Please commit your changes or stash them before you can merge.
Aborting

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   app/temp/styles/styles.css

no changes added to commit (use "git add" and/or "git commit -a")

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git add app/temp/styles/styles.css
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git merge our-features --no-ff
Merge made by the 'recursive' strategy.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
 app/assets/styles/modules/_feature-item.css        | 33 +++++++++
 .../styles/modules/_generic-content-container.css  |  3 +-
 app/assets/styles/modules/_row.css                 | 21 ++++--
 app/assets/styles/modules/_section-title.css       | 31 ++++++++
 app/assets/styles/styles.css                       |  8 ++-
 app/index.html                                     | 43 +++++++----
 app/temp/styles/styles.css                         | 84 +++++++++++++++++++++-
 7 files changed, 199 insertions(+), 24 deletions(-)
 create mode 100644 app/assets/styles/modules/_feature-item.css
 create mode 100644 app/assets/styles/modules/_section-title.css

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git push origin master
Counting objects: 1, done.
Writing objects: 100% (1/1), 219 bytes | 0 bytes/s, done.
Total 1 (delta 0), reused 0 (delta 0)
To https://github.com/MrV01/travel-site.git
   d060e89..fd81f9b  master -> master

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$

##################################################
GIT new branch for section "testimonials"
##################################################

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ # new bbanch testimonials

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$  git chekout -b testimonials
git: 'chekout' is not a git command. See 'git --help'.

Did you mean this?
        checkout

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$  git checkout -b testimonials
M       app/temp/styles/styles.css
Switched to a new branch 'testimonials'

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (testimonials)
$

#####################################################
### Create "Sprites"  collections of the icons in one file
#####################################################
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout -b gulp-sprite
Switched to a new branch 'gulp-sprite'
## Install gulp-svg-sprite gulp plugin as npm package.
$ npm install gulp-svg-sprite@1.3.1 --save-dev

> phantomjs-prebuilt@2.1.14 install C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\node_modules\phantomjs-prebuilt
> node install.js

PhantomJS not found on PATH
Downloading https://github.com/Medium/phantomjs/releases/download/v2.1.1/phantomjs-2.1.1-windows.zip
Saving to C:\Users\Vlad\AppData\Local\Temp\phantomjs\phantomjs-2.1.1-windows.zip
Receiving...

Received 17767K total.
Extracting zip contents
Removing C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\node_modules\phantomjs-prebuilt\lib\phantom
Copying extracted folder C:\Users\Vlad\AppData\Local\Temp\phantomjs\phantomjs-2.1.1-windows.zip-extract-1489085978123\phantomjs-2.1.1-windows -> C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\node_modules\phantomjs-prebuilt\lib\phantom
Writing location.js file
Done. Phantomjs binary available at C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\node_modules\phantomjs-prebuilt\lib\phantom\bin\phantomjs.exe
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- gulp-svg-sprite@1.3.1
  +-- svg-sprite@1.3.6
  | +-- async@2.1.5
  | +-- css-selector-parser@1.3.0
  | +-- cssmin@0.4.3
  | +-- cssom@0.3.2
  | +-- glob@7.1.1
  | | `-- minimatch@3.0.3
  | +-- lodash@4.17.4
  | +-- lodash.pluck@3.1.2
  | | +-- lodash._baseget@3.7.2
  | | +-- lodash._topath@3.8.1
  | | `-- lodash.map@3.1.4
  | |   +-- lodash._arraymap@3.0.0
  | |   +-- lodash._basecallback@3.3.1
  | |   | +-- lodash._baseisequal@3.0.7
  | |   | | `-- lodash.istypedarray@3.0.6
  | |   | +-- lodash._bindcallback@3.0.1
  | |   | `-- lodash.pairs@3.0.1
  | |   `-- lodash._baseeach@3.0.4
  | +-- mustache@2.3.0
  | +-- phantomjs-prebuilt@2.1.14
  | | +-- es6-promise@4.0.5
  | | +-- extract-zip@1.5.0
  | | | +-- concat-stream@1.5.0
  | | | | +-- readable-stream@2.0.6
  | | | | | `-- isarray@1.0.0
  | | | | `-- typedarray@0.0.6
  | | | +-- debug@0.7.4
  | | | +-- mkdirp@0.5.0
  | | | | `-- minimist@0.0.8
  | | | `-- yauzl@2.4.1
  | | |   `-- fd-slicer@1.0.1
  | | |     `-- pend@1.2.0
  | | +-- hasha@2.2.0
  | | | `-- is-stream@1.1.0
  | | +-- kew@0.7.0
  | | +-- progress@1.1.8
  | | `-- request-progress@2.0.1
  | |   `-- throttleit@1.0.0
  | +-- prettysize@0.0.3
  | +-- svgo@0.7.0
  | | +-- coa@1.0.1
  | | | `-- q@1.4.1
  | | +-- colors@1.1.2
  | | +-- csso@2.2.1
  | | | `-- clap@1.1.2
  | | +-- js-yaml@3.6.1
  | | | `-- esprima@2.7.3
  | | +-- sax@1.2.2
  | | `-- whet.extend@0.9.9
  | +-- vinyl@1.2.0
  | +-- winston@2.3.1
  | | +-- async@1.0.0
  | | +-- colors@1.0.3
  | | +-- cycle@1.0.3
  | | +-- eyes@0.1.8
  | | `-- stack-trace@0.0.9
  | +-- xmldom@0.1.22
  | +-- xpath@0.0.23
  | `-- yargs@5.0.0
  |   +-- lodash.assign@4.2.0
  |   +-- window-size@0.2.0
  |   `-- yargs-parser@3.2.0
  |     `-- camelcase@3.0.0
  `-- vinyl@1.2.0

### Install  npm module to rename file
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (gulp-sprite)
 $ npm install gulp-rename --save-dev
 travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
 `-- gulp-rename@1.2.2

### Install npm module to remove directory
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (gulp-sprite)
$ npm install del --save-dev
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- del@2.2.2
  +-- globby@5.0.0
  | `-- glob@7.1.1
  |   `-- minimatch@3.0.3
  +-- is-path-cwd@1.0.0
  +-- is-path-in-cwd@1.0.0
  | `-- is-path-inside@1.0.0
  |   `-- path-is-inside@1.0.2
  +-- object-assign@4.1.1
  `-- rimraf@2.6.1
    `-- glob@7.1.1
      `-- minimatch@3.0.3

/* postcss plugin can transform #ffffff to rgba() format */
$ npm install postcss-hexrgba --save-dev
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- postcss-hexrgba@0.2.1
// installed  and added postcss-hexrgba into styles.js

// Install webpack in order to run NODE.JS modules in
//  Browser environments.
$ npm install webpack -g
$ npm install webpack -g
C:\Users\Vlad\AppData\Roaming\npm\webpack -> C:\Users\Vlad\AppData\Roaming\npm\node_modules\webpack\bin\webpack.js
C:\Users\Vlad\AppData\Roaming\npm
`-- webpack@2.2.1
  +-- acorn@4.0.11
  +-- acorn-dynamic-import@2.0.2
  +-- ajv@4.11.5
  | +-- co@4.6.0
  | `-- json-stable-stringify@1.0.1
  |   `-- jsonify@0.0.0
  +-- ajv-keywords@1.5.1
  +-- async@2.1.5
  | `-- lodash@4.17.4
  +-- enhanced-resolve@3.1.0
  | +-- graceful-fs@4.1.11
  | `-- object-assign@4.1.1
  +-- interpret@1.0.1
  +-- json-loader@0.5.4
  +-- loader-runner@2.3.0
  +-- loader-utils@0.2.17
  | +-- big.js@3.1.3
  | +-- emojis-list@2.1.0
  | `-- json5@0.5.1
  +-- memory-fs@0.4.1
  | +-- errno@0.1.4
  | | `-- prr@0.0.0
  | `-- readable-stream@2.2.6
  |   +-- buffer-shims@1.0.0
  |   +-- core-util-is@1.0.2
  |   +-- inherits@2.0.3
  |   +-- isarray@1.0.0
  |   +-- process-nextick-args@1.0.7
  |   `-- util-deprecate@1.0.2
  +-- mkdirp@0.5.1
  | `-- minimist@0.0.8
  +-- node-libs-browser@2.0.0
  | +-- assert@1.4.1
  | +-- browserify-zlib@0.1.4
  | | `-- pako@0.2.9
  | +-- buffer@4.9.1
  | | +-- base64-js@1.2.0
  | | `-- ieee754@1.1.8
  | +-- console-browserify@1.1.0
  | | `-- date-now@0.1.4
  | +-- constants-browserify@1.0.0
  | +-- crypto-browserify@3.11.0
  | | +-- browserify-cipher@1.0.0
  | | | +-- browserify-aes@1.0.6
  | | | | `-- buffer-xor@1.0.3
  | | | +-- browserify-des@1.0.0
  | | | | `-- des.js@1.0.0
  | | | `-- evp_bytestokey@1.0.0
  | | +-- browserify-sign@4.0.0
  | | | +-- bn.js@4.11.6
  | | | +-- browserify-rsa@4.0.1
  | | | +-- elliptic@6.4.0
  | | | | +-- brorand@1.1.0
  | | | | +-- hash.js@1.0.3
  | | | | +-- hmac-drbg@1.0.0
  | | | | +-- minimalistic-assert@1.0.0
  | | | | `-- minimalistic-crypto-utils@1.0.1
  | | | `-- parse-asn1@5.1.0
  | | |   `-- asn1.js@4.9.1
  | | +-- create-ecdh@4.0.0
  | | +-- create-hash@1.1.2
  | | | +-- cipher-base@1.0.3
  | | | +-- ripemd160@1.0.1
  | | | `-- sha.js@2.4.8
  | | +-- create-hmac@1.1.4
  | | +-- diffie-hellman@5.0.2
  | | | `-- miller-rabin@4.0.0
  | | +-- pbkdf2@3.0.9
  | | +-- public-encrypt@4.0.0
  | | `-- randombytes@2.0.3
  | +-- domain-browser@1.1.7
  | +-- events@1.1.1
  | +-- https-browserify@0.0.1
  | +-- os-browserify@0.2.1
  | +-- path-browserify@0.0.0
  | +-- process@0.11.9
  | +-- punycode@1.4.1
  | +-- querystring-es3@0.2.1
  | +-- stream-browserify@2.0.1
  | +-- stream-http@2.6.3
  | | +-- builtin-status-codes@3.0.0
  | | +-- to-arraybuffer@1.0.1
  | | `-- xtend@4.0.1
  | +-- string_decoder@0.10.31
  | +-- timers-browserify@2.0.2
  | | `-- setimmediate@1.0.5
  | +-- tty-browserify@0.0.0
  | +-- url@0.11.0
  | | +-- punycode@1.3.2
  | | `-- querystring@0.2.0
  | +-- util@0.10.3
  | | `-- inherits@2.0.1
  | `-- vm-browserify@0.0.4
  |   `-- indexof@0.0.1
  +-- source-map@0.5.6
  +-- supports-color@3.2.3
  | `-- has-flag@1.0.0
  +-- tapable@0.2.6
  +-- uglify-js@2.8.13
  | +-- uglify-to-browserify@1.0.2
  | `-- yargs@3.10.0
  |   +-- camelcase@1.2.1
  |   +-- cliui@2.1.0
  |   | +-- center-align@0.1.3
  |   | | +-- align-text@0.1.4
  |   | | | +-- longest@1.0.1
  |   | | | `-- repeat-string@1.6.1
  |   | | `-- lazy-cache@1.0.4
  |   | +-- right-align@0.1.3
  |   | `-- wordwrap@0.0.2
  |   `-- window-size@0.1.0
  +-- watchpack@1.3.1
  | `-- chokidar@1.6.1
  |   +-- anymatch@1.3.0
  |   | +-- arrify@1.0.1
  |   | `-- micromatch@2.3.11
  |   |   +-- arr-diff@2.0.0
  |   |   | `-- arr-flatten@1.0.1
  |   |   +-- array-unique@0.2.1
  |   |   +-- braces@1.8.5
  |   |   | +-- expand-range@1.8.2
  |   |   | | `-- fill-range@2.2.3
  |   |   | |   +-- is-number@2.1.0
  |   |   | |   +-- isobject@2.1.0
  |   |   | |   `-- randomatic@1.1.6
  |   |   | +-- preserve@0.2.0
  |   |   | `-- repeat-element@1.1.2
  |   |   +-- expand-brackets@0.1.5
  |   |   | `-- is-posix-bracket@0.1.1
  |   |   +-- extglob@0.3.2
  |   |   +-- filename-regex@2.0.0
  |   |   +-- kind-of@3.1.0
  |   |   | `-- is-buffer@1.1.5
  |   |   +-- normalize-path@2.0.1
  |   |   +-- object.omit@2.0.1
  |   |   | +-- for-own@0.1.5
  |   |   | | `-- for-in@1.0.2
  |   |   | `-- is-extendable@0.1.1
  |   |   +-- parse-glob@3.0.4
  |   |   | +-- glob-base@0.3.0
  |   |   | `-- is-dotfile@1.0.2
  |   |   `-- regex-cache@0.4.3
  |   |     +-- is-equal-shallow@0.1.3
  |   |     `-- is-primitive@2.0.0
  |   +-- async-each@1.0.1
  |   +-- glob-parent@2.0.0
  |   +-- is-binary-path@1.0.1
  |   | `-- binary-extensions@1.8.0
  |   +-- is-glob@2.0.1
  |   | `-- is-extglob@1.0.0
  |   +-- path-is-absolute@1.0.1
  |   `-- readdirp@2.1.0
  |     +-- minimatch@3.0.3
  |     | `-- brace-expansion@1.1.6
  |     |   +-- balanced-match@0.4.2
  |     |   `-- concat-map@0.0.1
  |     `-- set-immediate-shim@1.0.1
  +-- webpack-sources@0.1.5
  | `-- source-list-map@0.1.8
  `-- yargs@6.6.0
    +-- camelcase@3.0.0
    +-- cliui@3.2.0
    | `-- wrap-ansi@2.1.0
    +-- decamelize@1.2.0
    +-- get-caller-file@1.0.2
    +-- os-locale@1.4.0
    | `-- lcid@1.0.0
    |   `-- invert-kv@1.0.0
    +-- read-pkg-up@1.0.1
    | +-- find-up@1.1.2
    | | +-- path-exists@2.1.0
    | | `-- pinkie-promise@2.0.1
    | |   `-- pinkie@2.0.4
    | `-- read-pkg@1.1.0
    |   +-- load-json-file@1.1.0
    |   | +-- parse-json@2.2.0
    |   | | `-- error-ex@1.3.1
    |   | |   `-- is-arrayish@0.2.1
    |   | +-- pify@2.3.0
    |   | `-- strip-bom@2.0.0
    |   |   `-- is-utf8@0.2.1
    |   +-- normalize-package-data@2.3.6
    |   | +-- hosted-git-info@2.2.0
    |   | +-- is-builtin-module@1.0.0
    |   | | `-- builtin-modules@1.1.1
    |   | +-- semver@5.3.0
    |   | `-- validate-npm-package-license@3.0.1
    |   |   +-- spdx-correct@1.0.2
    |   |   | `-- spdx-license-ids@1.2.2
    |   |   `-- spdx-expression-parse@1.0.4
    |   `-- path-type@1.1.0
    +-- require-directory@2.1.1
    +-- require-main-filename@1.0.1
    +-- set-blocking@2.0.0
    +-- string-width@1.0.2
    | +-- code-point-at@1.1.0
    | +-- is-fullwidth-code-point@1.0.0
    | | `-- number-is-nan@1.0.1
    | `-- strip-ansi@3.0.1
    |   `-- ansi-regex@2.1.1
    +-- which-module@1.0.0
    +-- y18n@3.2.1
    `-- yargs-parser@4.2.1
      `-- camelcase@3.0.0

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\webpack\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.1: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

//
// local installation of webpack  for gulp automation
//
$ npm install webpack --save-dev
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- webpack@2.2.1
  +-- acorn@4.0.11
  +-- acorn-dynamic-import@2.0.2
  | `-- acorn@4.0.11
  +-- ajv@4.11.5
  | +-- co@4.6.0
  | `-- json-stable-stringify@1.0.1
  |   `-- jsonify@0.0.0
  +-- ajv-keywords@1.5.1
  +-- async@2.1.5
  | `-- lodash@4.17.4
  +-- enhanced-resolve@3.1.0
  | +-- graceful-fs@4.1.11
  | `-- object-assign@4.1.1
  +-- json-loader@0.5.4
  +-- loader-runner@2.3.0
  +-- loader-utils@0.2.17
  | +-- big.js@3.1.3
  | +-- emojis-list@2.1.0
  | +-- json5@0.5.1
  | `-- object-assign@4.1.1
  +-- memory-fs@0.4.1
  | +-- errno@0.1.4
  | | `-- prr@0.0.0
  | `-- readable-stream@2.2.6
  |   `-- isarray@1.0.0
  +-- node-libs-browser@2.0.0
  | +-- assert@1.4.1
  | +-- browserify-zlib@0.1.4
  | | `-- pako@0.2.9
  | +-- buffer@4.9.1
  | | +-- base64-js@1.2.0
  | | +-- ieee754@1.1.8
  | | `-- isarray@1.0.0
  | +-- console-browserify@1.1.0
  | | `-- date-now@0.1.4
  | +-- constants-browserify@1.0.0
  | +-- crypto-browserify@3.11.0
  | | +-- browserify-cipher@1.0.0
  | | | +-- browserify-aes@1.0.6
  | | | | `-- buffer-xor@1.0.3
  | | | +-- browserify-des@1.0.0
  | | | | `-- des.js@1.0.0
  | | | `-- evp_bytestokey@1.0.0
  | | +-- browserify-sign@4.0.0
  | | | +-- bn.js@4.11.6
  | | | +-- browserify-rsa@4.0.1
  | | | +-- elliptic@6.4.0
  | | | | +-- brorand@1.1.0
  | | | | +-- hash.js@1.0.3
  | | | | +-- hmac-drbg@1.0.0
  | | | | +-- minimalistic-assert@1.0.0
  | | | | `-- minimalistic-crypto-utils@1.0.1
  | | | `-- parse-asn1@5.1.0
  | | |   `-- asn1.js@4.9.1
  | | +-- create-ecdh@4.0.0
  | | +-- create-hash@1.1.2
  | | | +-- cipher-base@1.0.3
  | | | +-- ripemd160@1.0.1
  | | | `-- sha.js@2.4.8
  | | +-- create-hmac@1.1.4
  | | +-- diffie-hellman@5.0.2
  | | | `-- miller-rabin@4.0.0
  | | +-- pbkdf2@3.0.9
  | | +-- public-encrypt@4.0.0
  | | `-- randombytes@2.0.3
  | +-- domain-browser@1.1.7
  | +-- events@1.1.1
  | +-- https-browserify@0.0.1
  | +-- os-browserify@0.2.1
  | +-- path-browserify@0.0.0
  | +-- process@0.11.9
  | +-- querystring-es3@0.2.1
  | +-- readable-stream@2.2.6
  | | `-- isarray@1.0.0
  | +-- stream-browserify@2.0.1
  | | `-- readable-stream@2.2.6
  | |   `-- isarray@1.0.0
  | +-- stream-http@2.6.3
  | | +-- builtin-status-codes@3.0.0
  | | +-- readable-stream@2.2.6
  | | | `-- isarray@1.0.0
  | | `-- to-arraybuffer@1.0.1
  | +-- timers-browserify@2.0.2
  | | `-- setimmediate@1.0.5
  | +-- tty-browserify@0.0.0
  | +-- url@0.11.0
  | | +-- punycode@1.3.2
  | | `-- querystring@0.2.0
  | +-- util@0.10.3
  | | `-- inherits@2.0.1
  | `-- vm-browserify@0.0.4
  +-- supports-color@3.2.3
  +-- tapable@0.2.6
  +-- uglify-js@2.8.13
  | +-- uglify-to-browserify@1.0.2
  | `-- yargs@3.10.0
  |   +-- cliui@2.1.0
  |   | +-- center-align@0.1.3
  |   | | +-- align-text@0.1.4
  |   | | | `-- longest@1.0.1
  |   | | `-- lazy-cache@1.0.4
  |   | +-- right-align@0.1.3
  |   | `-- wordwrap@0.0.2
  |   `-- window-size@0.1.0
  +-- watchpack@1.3.1
  | +-- async@2.1.5
  | | `-- lodash@4.17.4
  | `-- graceful-fs@4.1.11
  `-- webpack-sources@0.1.5
    `-- source-list-map@0.1.8

//
// 1. Install and setup Babel
//  Three packages :  babel-core ( babel ) babel-loader (babel-webpack integration)
//                    babel-preset-es2015 ( version of java script to generate)
$ npm install babel-core babel-loader babel-preset-es2015 --save-dev
+-- babel-core@6.24.0
| +-- babel-code-frame@6.22.0
| | +-- esutils@2.0.2
| | `-- js-tokens@3.0.1
| +-- babel-generator@6.24.0
| | +-- detect-indent@4.0.0
| | | `-- repeating@2.0.1
| | |   `-- is-finite@1.0.2
| | +-- jsesc@1.3.0
| | +-- lodash@4.17.4
| | `-- trim-right@1.0.1
| +-- babel-helpers@6.23.0
| +-- babel-messages@6.23.0
| +-- babel-register@6.24.0
| | +-- core-js@2.4.1
| | +-- home-or-tmp@2.0.0
| | | `-- os-tmpdir@1.0.2
| | +-- lodash@4.17.4
| | `-- source-map-support@0.4.13
| +-- babel-runtime@6.23.0
| | `-- regenerator-runtime@0.10.3
| +-- babel-template@6.23.0
| | `-- lodash@4.17.4
| +-- babel-traverse@6.23.1
| | +-- globals@9.16.0
| | +-- invariant@2.2.2
| | | `-- loose-envify@1.3.1
| | `-- lodash@4.17.4
| +-- babel-types@6.23.0
| | +-- lodash@4.17.4
| | `-- to-fast-properties@1.0.2
| +-- babylon@6.16.1
| +-- convert-source-map@1.4.0
| +-- lodash@4.17.4
| +-- minimatch@3.0.3
| `-- private@0.1.7
+-- babel-loader@6.4.1
| +-- find-cache-dir@0.1.1
| | +-- commondir@1.0.1
| | `-- pkg-dir@1.0.0
| `-- object-assign@4.1.1
`-- babel-preset-es2015@6.24.0
  +-- babel-plugin-check-es2015-constants@6.22.0
  +-- babel-plugin-transform-es2015-arrow-functions@6.22.0
  +-- babel-plugin-transform-es2015-block-scoped-functions@6.22.0
  +-- babel-plugin-transform-es2015-block-scoping@6.23.0
  | `-- lodash@4.17.4
  +-- babel-plugin-transform-es2015-classes@6.23.0
  | +-- babel-helper-define-map@6.23.0
  | | `-- lodash@4.17.4
  | +-- babel-helper-function-name@6.23.0
  | +-- babel-helper-optimise-call-expression@6.23.0
  | `-- babel-helper-replace-supers@6.23.0
  +-- babel-plugin-transform-es2015-computed-properties@6.22.0
  +-- babel-plugin-transform-es2015-destructuring@6.23.0
  +-- babel-plugin-transform-es2015-duplicate-keys@6.22.0
  +-- babel-plugin-transform-es2015-for-of@6.23.0
  +-- babel-plugin-transform-es2015-function-name@6.22.0
  +-- babel-plugin-transform-es2015-literals@6.22.0
  +-- babel-plugin-transform-es2015-modules-amd@6.24.0
  +-- babel-plugin-transform-es2015-modules-commonjs@6.24.0
  | `-- babel-plugin-transform-strict-mode@6.22.0
  +-- babel-plugin-transform-es2015-modules-systemjs@6.23.0
  | `-- babel-helper-hoist-variables@6.22.0
  +-- babel-plugin-transform-es2015-modules-umd@6.24.0
  +-- babel-plugin-transform-es2015-object-super@6.22.0
  +-- babel-plugin-transform-es2015-parameters@6.23.0
  | +-- babel-helper-call-delegate@6.22.0
  | `-- babel-helper-get-function-arity@6.22.0
  +-- babel-plugin-transform-es2015-shorthand-properties@6.22.0
  +-- babel-plugin-transform-es2015-spread@6.22.0
  +-- babel-plugin-transform-es2015-sticky-regex@6.22.0
  | `-- babel-helper-regex@6.22.0
  |   `-- lodash@4.17.4
  +-- babel-plugin-transform-es2015-template-literals@6.22.0
  +-- babel-plugin-transform-es2015-typeof-symbol@6.23.0
  +-- babel-plugin-transform-es2015-unicode-regex@6.22.0
  | `-- regexpu-core@2.0.0
  |   +-- regenerate@1.3.2
  |   +-- regjsgen@0.2.0
  |   `-- regjsparser@0.1.5
  |     `-- jsesc@0.5.0
  `-- babel-plugin-transform-regenerator@6.22.0
    `-- regenerator-transform@0.9.8

#####
##### Completed the header branch in git
##### merge to master, then create new branch: reveal-on-scroll
#####

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (header)
$ git status
On branch header
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (header)
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git merge header
Updating e4cf093..8b2afae
Fast-forward
 app/assets/scripts/app.js                  |     6 +
 app/assets/scripts/modules/MobileMenu.js   |    52 +
 app/assets/styles/base/_variables.css      |     2 +-
 app/assets/styles/modules/_large-hero.css  |     6 +
 app/assets/styles/modules/_primary-nav.css |    59 +
 app/assets/styles/modules/_site-header.css |   145 +
 app/assets/styles/styles.css               |     6 +-
 app/index.html                             |    37 +-
 app/temp/scripts/App.js                    | 10423 +++++++++++++++++++++++++++
 app/temp/styles/styles.css                 |   229 +-
 gulp/tasks/scripts.js                      |    15 +
 gulp/tasks/styles.js                       |     7 +-
 gulp/tasks/watch.js                        |     8 +
 gulpfile.js                                |     5 +
 package.json                               |     9 +-
 webpack.config.js                          |    21 +
 16 files changed, 11008 insertions(+), 22 deletions(-)
 create mode 100644 app/assets/scripts/app.js
 create mode 100644 app/assets/scripts/modules/MobileMenu.js
 create mode 100644 app/assets/styles/modules/_primary-nav.css
 create mode 100644 app/assets/styles/modules/_site-header.css
 create mode 100644 app/temp/scripts/App.js
 create mode 100644 gulp/tasks/scripts.js
 create mode 100644 webpack.config.js

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git push origin master
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/MrV01/travel-site.git
   e4cf093..8b2afae  master -> master

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout -b reveal-on-scroll
Switched to a new branch 'reveal-on-scroll'

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (reveal-on-scroll)
$

################################################
Install waypoints npm package to deal with page scrolling events
###############################################
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (reveal-on-scroll)
$ npm install waypoints --save
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- waypoints@4.0.1

########################################
## Create new branch sticky-header
########################################
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (reveal-on-scroll)
$ git status
On branch reveal-on-scroll
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   app/assets/styles/modules/_reveal-item.css

no changes added to commit (use "git add" and/or "git commit -a")

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (reveal-on-scroll)
$ git add -A

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (reveal-on-scroll)
$ git status
On branch reveal-on-scroll
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   app/assets/styles/modules/_reveal-item.css


Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (reveal-on-scroll)
$ git commit -m "Completed the rveal on scroll behavior"
[reveal-on-scroll e1045bb] Completed the rveal on scroll behavior
 1 file changed, 1 insertion(+), 1 deletion(-)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (reveal-on-scroll)
$ git status
On branch reveal-on-scroll
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (reveal-on-scroll)
$ git push origin reveal-on-scroll
Counting objects: 7, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 670 bytes | 0 bytes/s, done.
Total 7 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/MrV01/travel-site.git
   51a1e16..e1045bb  reveal-on-scroll -> reveal-on-scroll

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (reveal-on-scroll)
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git merge reveal-on-scroll
Updating 8b2afae..e1045bb
Fast-forward
 app/assets/scripts/app.js                    |   14 +-
 app/assets/scripts/modules/RevealOnScroll.js |   46 ++
 app/assets/styles/modules/_reveal-item.css   |   12 +
 app/assets/styles/styles.css                 |    4 +-
 app/index.html                               |    5 +-
 app/temp/scripts/App.js                      | 1040 +++++++++++++++++++++++---
 app/temp/styles/styles.css                   |   17 +-
 package.json                                 |    3 +-
 8 files changed, 1046 insertions(+), 95 deletions(-)
 create mode 100644 app/assets/scripts/modules/RevealOnScroll.js
 create mode 100644 app/assets/styles/modules/_reveal-item.css

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout -b sticky-header
Switched to a new branch 'sticky-header'

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (sticky-header)
$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 3 commits.
  (use "git push" to publish your local commits)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git push origin master
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/MrV01/travel-site.git
   8b2afae..e1045bb  master -> master

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout sticky-header
Switched to branch 'sticky-header'

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (sticky-header)
$ git status
On branch sticky-header
nothing to commit, working tree clean

##############################################
### Building stcky-header for DESKTop users
##############################################

# Using same Waypoint npm package ( useful )

#####
#####  Highlight Current Page Section
#####   in main menu
#####
# Added new id="our-beginning-link" into index.html: <li><a href="#our-beginning" id="our-beginning-link"
# ! And custom attribute ( data-matching-link="#our-beginning-link"  ) to  div id="our-beginning"
#   <div id="our-beginning" class="page-section" data-matching-link="#our-beginning-link">
### Same with "features" and "Testimonials"
# <li><a href="#features" id="features-link">Features</a></li>
# <div id="features" class="page-section page-section--blue" data-matching-link="#features-link">
####
# <li><a href="#testimonials" id="testimonials-link">Testimonials</a></li>
# <div id="testimonials" class="page-section page-section--no-b-padding-until-large page-section--testimonials" data-matching-link="#testimonials-link">
#####

#######################################
### Install jquery-smooth-scroll npm package
#######################################

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (sticky-header)
$ npm install jquery-smooth-scroll --save
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- jquery-smooth-scroll@2.1.2

################
#### Sticky-header merge:

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git merge sticky-header
Auto-merging app/temp/styles/styles.css
Merge made by the 'recursive' strategy.
warning: LF will be replaced by CRLF in app/temp/scripts/App.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
 app/assets/scripts/app.js                  |   5 +
 app/assets/styles/modules/_primary-nav.css |   4 +
 app/assets/styles/modules/_site-header.css |  12 +-
 app/index.html                             |  12 +-
 app/temp/scripts/App.js                    | 817 +++++++++++++++++++++++------
 app/temp/styles/styles.css                 |  21 +-
 package.json                               |   1 +
 7 files changed, 691 insertions(+), 181 deletions(-)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$
##########################
# Create new branch: create-modal
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout -b create-modal
Switched to a new branch 'create-modal'

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (create-modal)

##################################
### branch create-modal merged to master.
##################################
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git add -A
warning: LF will be replaced by CRLF in app/temp/scripts/App.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git commit -m 'misc ./temp files commit to clean up  master branch'
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git push origin master
Everything up-to-date

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git merge create-modal
Updating 5f0c9ff..d7ca024
Fast-forward
 app/assets/scripts/app.js                    |   9 +--
 app/assets/scripts/modules/Modal.js          |  41 +++++++++++
 app/assets/styles/modules/_modal.css         |  51 ++++++++++++++
 app/assets/styles/modules/_section-title.css |   5 ++
 app/assets/styles/modules/_social-icons.css  |  26 +++++++
 app/assets/styles/modules/_wrapper.css       |   6 +-
 app/assets/styles/styles.css                 |   4 ++
 app/index.html                               |  23 +++++-
 app/temp/scripts/App.js                      | 100 +++++++++++++++++++++++----
 app/temp/styles/styles.css                   |  90 +++++++++++++++++++++++-
 10 files changed, 332 insertions(+), 23 deletions(-)
 create mode 100644 app/assets/scripts/modules/Modal.js
 create mode 100644 app/assets/styles/modules/_modal.css
 create mode 100644 app/assets/styles/modules/_social-icons.css

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git push origin master
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/MrV01/travel-site.git
   5f0c9ff..d7ca024  master -> master
################################################
Lazyloading branch   for Lazy loading of images.
##############################################

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git branch lazyloading

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout lazyloading
M       app/temp/scripts/App.js
M       app/temp/styles/styles.css
Switched to branch 'lazyloading'

#################################################################
##  Installing npm package lazysizes
### https://www.npmjs.com/package/lazysizes
###################################################
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (lazyloading)
$ npm install lazysizes --save
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- lazysizes@3.0.0

################################################
## Rebiulded apps,, using multi-entries points webpack.config.js
###################################################

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (lazyloading)
$ gulp watch
[10:51:54] Using gulpfile ~\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\gulpfile.js
[10:51:54] Starting 'watch'...
[10:51:54] Finished 'watch' after 39 ms
[BS] Access URLs:
 -------------------------------------
       Local: http://localhost:3000
    External: http://192.168.1.54:3000
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.1.54:3001
 -------------------------------------
[BS] Serving files from: app
[10:52:11] Starting 'scripts'...
(node:6272) DeprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic, see https://github.com/webpack/loader-utils/issues/56
parseQuery() will be replaced with getOptions() in the next major version of loader-utils.
Hash: 1c30478e1054ea17c9d1
Version: webpack 2.2.1
Time: 3643ms
    Asset     Size  Chunks                    Chunk Names
   App.js   317 kB       0  [emitted]  [big]  App
Vendor.js  19.9 kB       1  [emitted]         Vendor
chunk    {0} App.js (App) 313 kB [entry] [rendered]
    [0] ./~/jquery/dist/jquery.js 268 kB {0} [built]
    [1] ./~/waypoints/lib/noframework.waypoints.js 21.1 kB {0} [built]
    [2] ./app/assets/scripts/modules/MobileMenu.js 3.3 kB {0} [built]
    [3] ./app/assets/scripts/modules/Modal.js 2.25 kB {0} [built]
    [4] ./app/assets/scripts/modules/RevealOnScroll.js 2.85 kB {0} [built]
    [5] ./app/assets/scripts/modules/StickyHeader.js 4.53 kB {0} [built]
    [7] ./~/jquery-smooth-scroll/jquery.smooth-scroll.js 9.85 kB {0} [built]
    [8] ./app/assets/scripts/App.js 1.44 kB {0} [built]
chunk    {1} Vendor.js (Vendor) 17.2 kB [entry] [rendered]
    [6] ./~/lazysizes/lazysizes.js 17.1 kB {1} [built]
    [9] ./app/assets/scripts/Vendor.js 36 bytes {1} [built]
[10:52:15] Finished 'scripts' after 3.82 s
[10:52:15] Starting 'scriptsRefresh'...
[BS] Reloading Browsers...
[10:52:15] Finished 'scriptsRefresh' after 20 ms

#################################################
###  Branch Lazyloading completed, merged to master, created
###  new branch browser-support
#################################################
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (lazyloading)
$ git status
On branch lazyloading
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   app/assets/scripts/modules/StickyHeader.js
        modified:   app/assets/styles/modules/_page-section.css
        modified:   app/index.html
        modified:   app/temp/scripts/App.js
        modified:   app/temp/styles/styles.css

no changes added to commit (use "git add" and/or "git commit -a")

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (lazyloading)
$ git add -A
warning: LF will be replaced by CRLF in app/temp/scripts/App.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (lazyloading)
$ git status
warning: LF will be replaced by CRLF in app/temp/scripts/App.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
On branch lazyloading
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   app/assets/scripts/modules/StickyHeader.js
        modified:   app/assets/styles/modules/_page-section.css
        modified:   app/index.html
        modified:   app/temp/scripts/App.js
        modified:   app/temp/styles/styles.css


Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (lazyloading)
$ git status
warning: LF will be replaced by CRLF in app/temp/scripts/App.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
On branch lazyloading
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   app/assets/scripts/modules/StickyHeader.js
        modified:   app/assets/styles/modules/_page-section.css
        modified:   app/index.html
        modified:   app/temp/scripts/App.js
        modified:   app/temp/styles/styles.css


Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (lazyloading)
$ git commit -m 'LazyLoading is completed. JQuery method .load replaced by on("load", ) problem revealed and resolved . Next: legacy Browser Support L.52'
[lazyloading warning: LF will be replaced by CRLF in app/temp/scripts/App.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
cc7c28e] LazyLoading is completed. JQuery method .load replaced by on("load", ) problem revealed and resolved . Next: legacy Browser Support L.52
warning: LF will be replaced by CRLF in app/temp/scripts/App.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
 5 files changed, 80 insertions(+), 19 deletions(-)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (lazyloading)
$ git status
On branch lazyloading
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (lazyloading)
$ git push origin lazyloading
Counting objects: 16, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (15/15), done.
Writing objects: 100% (16/16), 2.79 KiB | 0 bytes/s, done.
Total 16 (delta 9), reused 0 (delta 0)
remote: Resolving deltas: 100% (9/9), completed with 8 local objects.
To https://github.com/MrV01/travel-site.git
   3cdf3ca..cc7c28e  lazyloading -> lazyloading

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (lazyloading)
$ git status
On branch lazyloading
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (lazyloading)
$ git status
On branch lazyloading
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (lazyloading)
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git merge lazyloading
Updating d7ca024..cc7c28e
Fast-forward
 app/assets/scripts/Vendor.js                |   1 +
 app/assets/scripts/modules/StickyHeader.js  |  31 +-
 app/assets/styles/modules/_page-section.css |  12 +-
 app/index.html                              |  27 +-
 app/temp/scripts/App.js                     |  42 +-
 app/temp/scripts/Vendor.js                  | 778 ++++++++++++++++++++++++++++
 app/temp/styles/styles.css                  |   9 +-
 package.json                                |   1 +
 webpack.config.js                           |   7 +-
 9 files changed, 880 insertions(+), 28 deletions(-)
 create mode 100644 app/assets/scripts/Vendor.js
 create mode 100644 app/temp/scripts/Vendor.js

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git checkout -b browser-support
Switched to a new branch 'browser-support'

## ====================================================
### Install npm package  picturefill
##  to imitate  responsive images ( "magic" ) of <picture> and <srcset> elemants on older browsers
############################
$ npm install picturefill --save
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- picturefill@3.0.2

#######################################################
##### Next : .SVG backup to .PNG for the rest 3% of outdated browsers
########################################################
# Plan.
# 1 Use Gulp to automatically create PNG of our SVG icon sprite
# 2 Send the PNG version to the browsers, that don't support SVG
# ( Use Modernizr to test the browser capabilities )

##### Install package gulp-svg2png@0.3.0
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (browser-support)
$ npm install gulp-svg2png@0.3.0 --save-dev
npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
npm WARN deprecated tough-cookie@2.2.2: ReDoS vulnerability parsing Set-Cookie https://nodesecurity.io/advisories/130

> phantomjs@1.9.20 install C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\node_modules\svg2png\node_modules\phantomj s
> node install.js

PhantomJS not found on PATH
Downloading https://github.com/Medium/phantomjs/releases/download/v1.9.19/phantomjs-1.9.8-windows.zip
Saving to C:\Users\Vlad\AppData\Local\Temp\phantomjs\phantomjs-1.9.8-windows.zip
Receiving...

Received 7292K total.
Extracting zip contents
Removing C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\node_modules\svg2png\node_modules\phantomjs\lib\phantom
Copying extracted folder C:\Users\Vlad\AppData\Local\Temp\phantomjs\phantomjs-1.9.8-windows.zip-extract-1490495980420\phantomjs-1.9.8-windows -> C:\ Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\node_modules\svg2png\node_modules\phantomjs\lib\phantom
Writing location.js file
Done. Phantomjs binary available at C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\node_modules\svg2png\node_modules \phantomjs\lib\phantom\phantomjs.exe
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- gulp-svg2png@0.3.0
  +-- gulp-util@2.2.20
  | +-- chalk@0.5.1
  | | +-- ansi-styles@1.1.0
  | | +-- has-ansi@0.1.0
  | | | `-- ansi-regex@0.2.1
  | | +-- strip-ansi@0.3.0
  | | `-- supports-color@0.2.0
  | +-- dateformat@1.0.12
  | | +-- get-stdin@4.0.1
  | | `-- meow@3.7.0
  | |   +-- camelcase-keys@2.1.0
  | |   | `-- camelcase@2.1.1
  | |   +-- loud-rejection@1.6.0
  | |   | +-- currently-unhandled@0.4.1
  | |   | | `-- array-find-index@1.0.2
  | |   | `-- signal-exit@3.0.2
  | |   +-- map-obj@1.0.1
  | |   +-- object-assign@4.1.1
  | |   +-- redent@1.0.0
  | |   | +-- indent-string@2.1.0
  | |   | `-- strip-indent@1.0.1
  | |   `-- trim-newlines@1.0.0
  | +-- lodash._reinterpolate@2.4.1
  | +-- lodash.template@2.4.1
  | | +-- lodash._escapestringchar@2.4.1
  | | +-- lodash.defaults@2.4.1
  | | | +-- lodash._objecttypes@2.4.1
  | | | `-- lodash.keys@2.4.1
  | | +-- lodash.escape@2.4.1
  | | | +-- lodash._escapehtmlchar@2.4.1
  | | | | `-- lodash._htmlescapes@2.4.1
  | | | `-- lodash._reunescapedhtml@2.4.1
  | | |   `-- lodash.keys@2.4.1
  | | +-- lodash.keys@2.4.1
  | | | +-- lodash._isnative@2.4.1
  | | | +-- lodash._shimkeys@2.4.1
  | | | `-- lodash.isobject@2.4.1
  | | +-- lodash.templatesettings@2.4.1
  | | `-- lodash.values@2.4.1
  | |   `-- lodash.keys@2.4.1
  | +-- minimist@0.2.0
  | +-- through2@0.5.1
  | | +-- readable-stream@1.0.34
  | | `-- xtend@3.0.0
  | `-- vinyl@0.2.3
  +-- map-stream@0.1.0
  `-- svg2png@1.1.1
    `-- phantomjs@1.9.20
      +-- fs-extra@0.26.7
      | `-- graceful-fs@4.1.11
      `-- request@2.67.0
        +-- bl@1.0.3
        | `-- readable-stream@2.0.6
        |   `-- isarray@1.0.0
        +-- form-data@1.0.1
        | `-- async@2.2.0
        |   `-- lodash@4.17.4
        +-- node-uuid@1.4.8
        +-- qs@5.2.1
        `-- tough-cookie@2.2.2

#########
######## Install gulp-modernizer
#########
Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (browser-support)
$ npm install gulp-modernizr --save-dev
npm WARN deprecated win-spawn@2.0.0: use [cross-spawn](https://github.com/IndigoUnited/node-cross-spawn) or [cross-spawn-async](https://github.com/IndigoUnited/node-cross-spawn-async) instead.
npm WARN deprecated minimatch@0.3.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue

> customizr@1.0.0-alpha postinstall C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\node_modules\customizr
> node scripts/postinstall.js

travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- gulp-modernizr@1.0.0-alpha
  +-- customizr@1.0.0-alpha
  | +-- colors@0.6.2
  | +-- deep-equal@0.1.2
  | +-- glob@3.2.11
  | | `-- minimatch@0.3.0
  | +-- mkdirp@0.3.5
  | +-- modernizr@3.4.0
  | | +-- doctrine@1.2.3
  | | | `-- isarray@1.0.0
  | | +-- file@0.2.2
  | | +-- find-parent-dir@0.3.0
  | | +-- lodash@4.17.4
  | | +-- remarkable@1.7.1
  | | | +-- argparse@0.1.16
  | | | | `-- underscore.string@2.4.0
  | | | `-- autolinker@0.15.3
  | | +-- requirejs@2.1.22
  | | `-- yargs@6.6.0
  | |   `-- camelcase@3.0.0
  | +-- nopt@2.1.2
  | +-- optimist@0.6.1
  | | `-- minimist@0.0.10
  | +-- promised-io@0.3.5
  | +-- underscore@1.5.2
  | `-- win-spawn@2.0.0
  +-- grunt-legacy-log@0.1.3
  | +-- colors@0.6.2
  | +-- grunt-legacy-log-utils@0.1.1
  | | +-- colors@0.6.2
  | | `-- lodash@2.4.2
  | +-- hooker@0.2.3
  | +-- lodash@2.4.2
  | `-- underscore.string@2.3.3
  +-- gulp-util@2.2.20
  | +-- chalk@0.5.1
  | | +-- ansi-styles@1.1.0
  | | +-- has-ansi@0.1.0
  | | | `-- ansi-regex@0.2.1
  | | +-- strip-ansi@0.3.0
  | | `-- supports-color@0.2.0
  | +-- dateformat@1.0.12
  | +-- lodash._reinterpolate@2.4.1
  | +-- lodash.template@2.4.1
  | | +-- lodash.escape@2.4.1
  | | +-- lodash.keys@2.4.1
  | | `-- lodash.templatesettings@2.4.1
  | +-- minimist@0.2.0
  | +-- through2@0.5.1
  | | `-- xtend@3.0.0
  | `-- vinyl@0.2.3
  `-- through2@0.4.2
    +-- readable-stream@1.0.34
    `-- xtend@2.1.2
      `-- object-keys@0.4.0


####
#### Modernizr  gulp-modernizr will create javascript file
#### for us to test a client  browser for features in present.
####

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (browser-support)
$ gulp icons
[00:49:50] Using gulpfile ~\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\gulpfile.js
[00:49:50] Starting 'beginClean'...
[00:49:50] Finished 'beginClean' after 21 ms
[00:49:50] Starting 'createSprite'...
[00:49:51] Finished 'createSprite' after 839 ms
[00:49:51] Starting 'createPngCopy'...
[00:49:51] Starting 'copySpriteCSS'...
[00:49:54] Finished 'copySpriteCSS' after 3.34 s
[00:49:58] Finished 'createPngCopy' after 7.4 s
[00:49:58] Starting 'copySpriteGraphic'...
[00:49:58] Finished 'copySpriteGraphic' after 15 ms
[00:49:58] Starting 'endClean'...
[00:49:58] Finished 'endClean' after 6.71 ms
[00:49:58] Starting 'icons'...
[00:49:58] Finished 'icons' after 11 μs

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (browser-support)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (browser-support)
$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git push origin master
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/MrV01/travel-site.git
   d7ca024..cc7c28e  master -> master

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git merge browser-support
Updating cc7c28e..aeef626
Fast-forward
 app/assets/images/sprites/sprite-0f9283b3.svg |    1 -
 app/assets/images/sprites/sprite-8eb89099.png |  Bin 0 -> 18081 bytes
 app/assets/images/sprites/sprite-8eb89099.svg |    1 +
 app/assets/scripts/Vendor.js                  |    3 +
 app/assets/styles/modules/_reveal-item.css    |    2 +-
 app/assets/styles/modules/_row.css            |    7 +-
 app/assets/styles/modules/_site-header.css    |    4 +-
 app/assets/styles/modules/_sprite.css         |   79 +-
 app/index.html                                |    1 +
 app/temp/scripts/App.js                       |   10 +-
 app/temp/scripts/Vendor.js                    | 2419 ++++++++++++++++++++++++-
 app/temp/scripts/modernizr.js                 |  864 +++++++++
 app/temp/styles/styles.css                    |  103 +-
 gulp/tasks/modernizr.js                       |   17 +
 gulp/tasks/scripts.js                         |    6 +-
 gulp/tasks/sprites.js                         |   36 +-
 gulp/templates/sprite.css                     |    5 +
 gulpfile.js                                   |    7 +-
 package.json                                  |    3 +
 19 files changed, 3459 insertions(+), 109 deletions(-)
 delete mode 100644 app/assets/images/sprites/sprite-0f9283b3.svg
 create mode 100644 app/assets/images/sprites/sprite-8eb89099.png
 create mode 100644 app/assets/images/sprites/sprite-8eb89099.svg
 create mode 100644 app/temp/scripts/modernizr.js
 create mode 100644 gulp/tasks/modernizr.js

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$

####################################
### Install gulp-imagemin
####################################

$ npm install gulp-imagemin --save-dev

> gifsicle@3.0.4 postinstall C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\node_modules\gifsicle
> node lib/install.js

  √ gifsicle pre-build test passed successfully

> jpegtran-bin@3.2.0 postinstall C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\node_modules\jpegtran-bin
> node lib/install.js

  √ jpegtran pre-build test passed successfully

> optipng-bin@3.1.2 postinstall C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\node_modules\optipng-bin
> node lib/install.js

  √ optipng pre-build test passed successfully
travel-site@1.0.0

C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
`-- gulp-imagemin@3.2.0
  +-- imagemin@5.2.2
  | +-- file-type@3.9.0
  | +-- globby@5.0.0
  | | +-- glob@7.1.1
  | | | `-- minimatch@3.0.3
  | | `-- object-assign@4.1.1
  | `-- promise.pipe@3.0.0
  +-- imagemin-gifsicle@5.1.0
  | +-- exec-buffer@3.1.0
  | | +-- execa@0.5.1
  | | | +-- cross-spawn@4.0.2
  | | | | `-- lru-cache@4.0.2
  | | | |   +-- pseudomap@1.0.2
  | | | |   `-- yallist@2.1.2
  | | | +-- get-stream@2.3.1
  | | | | `-- object-assign@4.1.1
  | | | +-- npm-run-path@2.0.2
  | | | | `-- path-key@2.0.1
  | | | `-- strip-eof@1.0.0
  | | +-- p-finally@1.0.0
  | | `-- tempfile@1.1.1
  | |   `-- uuid@2.0.3
  | +-- gifsicle@3.0.4
  | | +-- bin-build@2.2.0
  | | | +-- archive-type@3.2.0
  | | | +-- decompress@3.0.0
  | | | | +-- buffer-to-vinyl@1.1.0
  | | | | | +-- readable-stream@2.2.6
  | | | | | | `-- isarray@1.0.0
  | | | | | +-- uuid@2.0.3
  | | | | | `-- vinyl@1.2.0
  | | | | +-- decompress-tar@3.1.0
  | | | | | +-- is-tar@1.0.0
  | | | | | +-- object-assign@2.1.1
  | | | | | +-- strip-dirs@1.1.1
  | | | | | | +-- is-absolute@0.1.7
  | | | | | | | `-- is-relative@0.1.3
  | | | | | | +-- is-natural-number@2.1.1
  | | | | | | `-- sum-up@1.0.3
  | | | | | +-- tar-stream@1.5.2
  | | | | | | +-- end-of-stream@1.4.0
  | | | | | | | `-- once@1.4.0
  | | | | | | `-- readable-stream@2.2.6
  | | | | | |   `-- isarray@1.0.0
  | | | | | +-- through2@0.6.5
  | | | | | | `-- readable-stream@1.0.34
  | | | | | `-- vinyl@0.4.6
  | | | | |   `-- clone@0.2.0
  | | | | +-- decompress-tarbz2@3.1.0
  | | | | | +-- is-bzip2@1.0.0
  | | | | | +-- object-assign@2.1.1
  | | | | | +-- seek-bzip@1.0.5
  | | | | | | `-- commander@2.8.1
  | | | | | +-- through2@0.6.5
  | | | | | | `-- readable-stream@1.0.34
  | | | | | `-- vinyl@0.4.6
  | | | | |   `-- clone@0.2.0
  | | | | +-- decompress-targz@3.1.0
  | | | | | +-- is-gzip@1.0.0
  | | | | | +-- object-assign@2.1.1
  | | | | | +-- through2@0.6.5
  | | | | | | `-- readable-stream@1.0.34
  | | | | | `-- vinyl@0.4.6
  | | | | |   `-- clone@0.2.0
  | | | | +-- decompress-unzip@3.4.0
  | | | | | +-- is-zip@1.0.0
  | | | | | +-- stat-mode@0.2.2
  | | | | | `-- vinyl@1.2.0
  | | | | +-- stream-combiner2@1.1.1
  | | | | | +-- duplexer2@0.1.4
  | | | | | `-- readable-stream@2.2.6
  | | | | |   `-- isarray@1.0.0
  | | | | +-- vinyl-assign@1.2.1
  | | | | | +-- object-assign@4.1.1
  | | | | | `-- readable-stream@2.2.6
  | | | | |   `-- isarray@1.0.0
  | | | | `-- vinyl-fs@2.4.4
  | | | |   +-- duplexify@3.5.0
  | | | |   | +-- end-of-stream@1.0.0
  | | | |   | +-- readable-stream@2.2.6
  | | | |   | | `-- isarray@1.0.0
  | | | |   | `-- stream-shift@1.0.0
  | | | |   +-- glob-stream@5.3.5
  | | | |   | +-- glob@5.0.15
  | | | |   | +-- glob-parent@3.1.0
  | | | |   | | `-- is-glob@3.1.0
  | | | |   | |   `-- is-extglob@2.1.1
  | | | |   | +-- ordered-read-streams@0.3.0
  | | | |   | +-- through2@0.6.5
  | | | |   | | `-- readable-stream@1.0.34
  | | | |   | |   `-- isarray@0.0.1
  | | | |   | +-- to-absolute-glob@0.1.1
  | | | |   | | `-- extend-shallow@2.0.1
  | | | |   | `-- unique-stream@2.2.1
  | | | |   +-- graceful-fs@4.1.11
  | | | |   +-- gulp-sourcemaps@1.6.0
  | | | |   | +-- graceful-fs@4.1.11
  | | | |   | +-- strip-bom@2.0.0
  | | | |   | `-- vinyl@1.2.0
  | | | |   +-- is-valid-glob@0.3.0
  | | | |   +-- lazystream@1.0.0
  | | | |   | `-- readable-stream@2.2.6
  | | | |   |   `-- isarray@1.0.0
  | | | |   +-- lodash.isequal@4.5.0
  | | | |   +-- merge-stream@1.0.1
  | | | |   | `-- readable-stream@2.2.6
  | | | |   |   `-- isarray@1.0.0
  | | | |   +-- object-assign@4.1.1
  | | | |   +-- readable-stream@2.2.6
  | | | |   | `-- isarray@1.0.0
  | | | |   +-- strip-bom@2.0.0
  | | | |   +-- strip-bom-stream@1.0.0
  | | | |   +-- through2-filter@2.0.0
  | | | |   +-- vali-date@1.0.0
  | | | |   `-- vinyl@1.2.0
  | | | +-- download@4.4.3
  | | | | +-- caw@1.2.0
  | | | | | +-- get-proxy@1.1.0
  | | | | | | `-- rc@1.1.7
  | | | | | |   +-- deep-extend@0.4.1
  | | | | | |   `-- strip-json-comments@2.0.1
  | | | | | `-- is-obj@1.0.1
  | | | | +-- filenamify@1.2.1
  | | | | | +-- filename-reserved-regex@1.0.0
  | | | | | +-- strip-outer@1.0.0
  | | | | | `-- trim-repeated@1.0.0
  | | | | +-- got@5.7.1
  | | | | | +-- create-error-class@3.0.2
  | | | | | | `-- capture-stack-trace@1.0.0
  | | | | | +-- duplexer2@0.1.4
  | | | | | +-- is-redirect@1.0.0
  | | | | | +-- is-retry-allowed@1.1.0
  | | | | | +-- lowercase-keys@1.0.0
  | | | | | +-- node-status-codes@1.0.0
  | | | | | +-- object-assign@4.1.1
  | | | | | +-- readable-stream@2.2.6
  | | | | | | `-- isarray@1.0.0
  | | | | | +-- timed-out@3.1.3
  | | | | | +-- unzip-response@1.0.2
  | | | | | `-- url-parse-lax@1.0.0
  | | | | |   `-- prepend-http@1.0.4
  | | | | +-- gulp-decompress@1.2.0
  | | | | | `-- readable-stream@2.2.6
  | | | | |   `-- isarray@1.0.0
  | | | | +-- is-url@1.2.2
  | | | | +-- object-assign@4.1.1
  | | | | +-- read-all-stream@3.1.0
  | | | | | `-- readable-stream@2.2.6
  | | | | |   `-- isarray@1.0.0
  | | | | +-- readable-stream@2.2.6
  | | | | | `-- isarray@1.0.0
  | | | | +-- vinyl@1.2.0
  | | | | +-- vinyl-fs@2.4.4
  | | | | | +-- glob-stream@5.3.5
  | | | | | | +-- glob@5.0.15
  | | | | | | +-- glob-parent@3.1.0
  | | | | | | | `-- is-glob@3.1.0
  | | | | | | |   `-- is-extglob@2.1.1
  | | | | | | +-- ordered-read-streams@0.3.0
  | | | | | | +-- through2@0.6.5
  | | | | | | | `-- readable-stream@1.0.34
  | | | | | | |   `-- isarray@0.0.1
  | | | | | | `-- unique-stream@2.2.1
  | | | | | +-- graceful-fs@4.1.11
  | | | | | +-- strip-bom@2.0.0
  | | | | | `-- strip-bom-stream@1.0.0
  | | | | `-- ware@1.3.0
  | | | |   `-- wrap-fn@0.1.5
  | | | |     `-- co@3.1.0
  | | | +-- exec-series@1.0.3
  | | | | +-- async-each-series@1.1.0
  | | | | `-- object-assign@4.1.1
  | | | `-- url-regex@3.2.0
  | | |   `-- ip-regex@1.0.3
  | | +-- bin-wrapper@3.0.2
  | | | +-- bin-check@2.0.0
  | | | | `-- executable@1.1.0
  | | | +-- bin-version-check@2.1.0
  | | | | +-- bin-version@1.0.4
  | | | | | `-- find-versions@1.2.1
  | | | | |   `-- semver-regex@1.0.0
  | | | | `-- semver-truncate@1.1.2
  | | | |   `-- semver@5.3.0
  | | | +-- each-async@1.1.1
  | | | | `-- onetime@1.1.0
  | | | +-- lazy-req@1.1.0
  | | | `-- os-filter-obj@1.0.3
  | | `-- logalot@2.1.0
  | |   +-- figures@1.7.0
  | |   | `-- object-assign@4.1.1
  | |   `-- squeak@1.3.0
  | |     +-- console-stream@0.1.1
  | |     `-- lpad-align@1.1.0
  | |       `-- lpad@2.0.1
  | `-- is-gif@1.0.0
  +-- imagemin-jpegtran@5.0.2
  | +-- is-jpg@1.0.0
  | `-- jpegtran-bin@3.2.0
  +-- imagemin-optipng@5.2.1
  | +-- is-png@1.0.0
  | `-- optipng-bin@3.1.2
  +-- imagemin-svgo@5.2.1
  | `-- is-svg@2.1.0
  |   `-- html-comment-regex@1.1.1
  +-- plur@2.1.2
  | `-- irregular-plurals@1.2.0
  +-- pretty-bytes@4.0.2
  `-- through2-concurrent@1.1.1

  $ npm install gulp-usemin --seve-dev
  travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
  `-- gulp-usemin@0.3.28
    +-- glob@7.1.1
    | `-- minimatch@3.0.3
    `-- gulp-concat@2.6.1
      +-- concat-with-sourcemaps@1.0.4
      `-- vinyl@2.0.1
        +-- clone-buffer@1.0.0
        +-- clone-stats@1.0.0
        +-- cloneable-readable@1.0.0
        +-- remove-trailing-separator@1.0.1
        `-- replace-ext@1.0.0

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
  $ npm install gulp-usemin --save-dev
  travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
  `-- gulp-usemin@0.3.28

#########################
###### Add extra packages to accompany "usemin" in the production files "uglification"
#########################
#### Install npm for the files revision, CSS compress, JS compress
#### npm install gulp-rev gulp-cssnano gulp-uglify --save-dev
#####

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ npm install gulp-rev gulp-cssnano gulp-uglify --save-dev
travel-site@1.0.0 C:\Users\Vlad\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site
+-- gulp-cssnano@2.1.2
| +-- cssnano@3.10.0
| | +-- defined@1.0.0
| | +-- has@1.0.1
| | | `-- function-bind@1.1.0
| | +-- object-assign@4.1.1
| | +-- postcss-calc@5.3.1
| | | +-- postcss-message-helpers@2.0.0
| | | `-- reduce-css-calc@1.3.0
| | |   +-- math-expression-evaluator@1.2.16
| | |   `-- reduce-function-call@1.0.2
| | +-- postcss-colormin@2.2.2
| | | `-- colormin@1.1.2
| | |   +-- color@0.11.4
| | |   | +-- color-convert@1.9.0
| | |   | | `-- color-name@1.1.2
| | |   | `-- color-string@0.3.0
| | |   `-- css-color-names@0.0.4
| | +-- postcss-convert-values@2.6.1
| | +-- postcss-discard-comments@2.0.4
| | +-- postcss-discard-duplicates@2.1.0
| | +-- postcss-discard-empty@2.1.0
| | +-- postcss-discard-overridden@0.1.1
| | +-- postcss-discard-unused@2.2.3
| | | `-- uniqs@2.0.0
| | +-- postcss-filter-plugins@2.0.2
| | | `-- uniqid@4.1.1
| | |   `-- macaddress@0.2.8
| | +-- postcss-merge-idents@2.1.7
| | +-- postcss-merge-longhand@2.0.2
| | +-- postcss-merge-rules@2.1.2
| | | +-- caniuse-api@1.5.3
| | | | +-- lodash.memoize@4.1.2
| | | | `-- lodash.uniq@4.5.0
| | | +-- postcss-selector-parser@2.2.3
| | | | +-- flatten@1.0.2
| | | | +-- indexes-of@1.0.1
| | | | `-- uniq@1.0.1
| | | `-- vendors@1.0.1
| | +-- postcss-minify-font-values@1.0.5
| | | `-- object-assign@4.1.1
| | +-- postcss-minify-gradients@1.0.5
| | +-- postcss-minify-params@1.2.2
| | | `-- alphanum-sort@1.0.2
| | +-- postcss-minify-selectors@2.1.1
| | +-- postcss-normalize-charset@1.1.1
| | +-- postcss-normalize-url@3.0.8
| | | +-- is-absolute-url@2.1.0
| | | `-- normalize-url@1.9.1
| | |   +-- object-assign@4.1.1
| | |   `-- query-string@4.3.2
| | |     +-- object-assign@4.1.1
| | |     `-- strict-uri-encode@1.1.0
| | +-- postcss-ordered-values@2.2.3
| | +-- postcss-reduce-idents@2.4.0
| | +-- postcss-reduce-initial@1.0.1
| | +-- postcss-reduce-transforms@1.0.4
| | +-- postcss-svgo@2.1.6
| | +-- postcss-unique-selectors@2.0.2
| | `-- postcss-zindex@2.2.0
| `-- object-assign@4.1.1
+-- gulp-rev@7.1.2
| +-- modify-filename@1.1.0
| +-- object-assign@4.1.1
| +-- rev-hash@1.0.0
| +-- rev-path@1.0.0
| +-- sort-keys@1.1.2
| | `-- is-plain-obj@1.1.0
| `-- vinyl-file@1.3.0
|   +-- graceful-fs@4.1.11
|   +-- strip-bom@2.0.0
|   +-- strip-bom-stream@1.0.0
|   `-- vinyl@1.2.0
`-- gulp-uglify@2.1.2
  +-- lodash@4.17.4
  +-- make-error-cause@1.2.2
  | `-- make-error@1.2.3
  `-- uglify-save-license@0.4.1

##### Modified ./gulp/tasks/build.js  file:

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ gulp build
[21:00:34] Using gulpfile ~\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\gulpfile.js
[21:00:34] Starting 'deleteDistFolder'...
[21:00:35] Finished 'deleteDistFolder' after 15 ms
[21:00:35] Starting 'optimizeImages'...
[21:00:35] Starting 'usemin'...
[21:00:39] Finished 'usemin' after 4.53 s
[21:00:43] gulp-imagemin: Minified 51 images (saved 320 kB - 8.3%)
[21:00:43] Finished 'optimizeImages' after 8.46 s
[21:00:43] Starting 'build'...
[21:00:43] Finished 'build' after 8.8 μs

#############################################
### Added copyGeneralFiles tast to build task
#############################################

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ gulp build
[21:21:35] Using gulpfile ~\Documents\PROGRAMMING\HTML5\GitAWebDeveloperJobUdemy\travel-site\gulpfile.js
[21:21:35] Starting 'deleteDistFolder'...
[21:21:35] Starting 'copyGeneralFiles'...
[21:21:35] Finished 'deleteDistFolder' after 41 ms
[21:21:35] Starting 'optimizeImages'...
[21:21:35] Starting 'usemin'...
[21:21:40] Finished 'copyGeneralFiles' after 4.97 s
[21:21:40] Finished 'usemin' after 4.98 s
[21:21:44] gulp-imagemin: Minified 51 images (saved 320 kB - 8.3%)
[21:21:44] Finished 'optimizeImages' after 8.91 s
[21:21:44] Starting 'build'...
[21:21:44] Finished 'build' after 11 μs

#######################
#### In order to be published  in GIThub free server:
### 1. Output directory has been renamed into  ./docs
### 2. In URLs directory passes /assets/... were changed to ../../assets/...
#######################

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git status
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in docs/assets/scripts/App-a34f8d3289.js.
The file will have its original line endings in your working directory.
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   GIT-Plus-NPM-cheatsheet.txt
        modified:   app/assets/styles/modules/_page-section.css
        modified:   app/assets/styles/modules/_sprite.css
        modified:   app/index.html
        modified:   app/temp/styles/styles.css
        deleted:    dist/assets/scripts/App.js
        deleted:    dist/assets/scripts/Vendor.js
        deleted:    dist/assets/styles/styles.css
        renamed:    dist/assets/images/first-trip-hi-dpi-i.jpg -> docs/assets/images/first-trip-hi-dpi-i.jpg
        renamed:    dist/assets/images/first-trip-hi-dpi.jpg -> docs/assets/images/first-trip-hi-dpi.jpg
        renamed:    dist/assets/images/first-trip-i.jpg -> docs/assets/images/first-trip-i.jpg
        renamed:    dist/assets/images/first-trip-low-res-i.jpg -> docs/assets/images/first-trip-low-res-i.jpg
        renamed:    dist/assets/images/first-trip-low-res.jpg -> docs/assets/images/first-trip-low-res.jpg
        renamed:    dist/assets/images/first-trip.jpg -> docs/assets/images/first-trip.jpg
        renamed:    dist/assets/images/hero--large-hi-dpi-i.jpg -> docs/assets/images/hero--large-hi-dpi-i.jpg
        renamed:    dist/assets/images/hero--large-hi-dpi.jpg -> docs/assets/images/hero--large-hi-dpi.jpg
        renamed:    dist/assets/images/hero--large-i.jpg -> docs/assets/images/hero--large-i.jpg
        renamed:    dist/assets/images/hero--large.jpg -> docs/assets/images/hero--large.jpg
        renamed:    dist/assets/images/hero--medium-hi-dpi-i.jpg -> docs/assets/images/hero--medium-hi-dpi-i.jpg
        renamed:    dist/assets/images/hero--medium-hi-dpi.jpg -> docs/assets/images/hero--medium-hi-dpi.jpg
        renamed:    dist/assets/images/hero--medium-i.jpg -> docs/assets/images/hero--medium-i.jpg
        renamed:    dist/assets/images/hero--medium.jpg -> docs/assets/images/hero--medium.jpg
        renamed:    dist/assets/images/hero--small-hi-dpi-i.jpg -> docs/assets/images/hero--small-hi-dpi-i.jpg
        renamed:    dist/assets/images/hero--small-hi-dpi.jpg -> docs/assets/images/hero--small-hi-dpi.jpg
        renamed:    dist/assets/images/hero--small-i.jpg -> docs/assets/images/hero--small-i.jpg
        renamed:    dist/assets/images/hero--small.jpg -> docs/assets/images/hero--small.jpg
        renamed:    dist/assets/images/hero--smaller-hi-dpi-i.jpg -> docs/assets/images/hero--smaller-hi-dpi-i.jpg
        renamed:    dist/assets/images/hero--smaller-hi-dpi.jpg -> docs/assets/images/hero--smaller-hi-dpi.jpg
        renamed:    dist/assets/images/hero--smaller-i.jpg -> docs/assets/images/hero--smaller-i.jpg
        renamed:    dist/assets/images/hero--smaller.jpg -> docs/assets/images/hero--smaller.jpg
        renamed:    dist/assets/images/our-start-hi-dpi-i.jpg -> docs/assets/images/our-start-hi-dpi-i.jpg
        renamed:    dist/assets/images/our-start-hi-dpi.jpg -> docs/assets/images/our-start-hi-dpi.jpg
        renamed:    dist/assets/images/our-start-i.jpg -> docs/assets/images/our-start-i.jpg
        renamed:    dist/assets/images/our-start-landscape-hi-dpi-i.jpg -> docs/assets/images/our-start-landscape-hi-dpi-i.jpg
        renamed:    dist/assets/images/our-start-landscape-hi-dpi.jpg -> docs/assets/images/our-start-landscape-hi-dpi.jpg
        renamed:    dist/assets/images/our-start-landscape-i.jpg -> docs/assets/images/our-start-landscape-i.jpg
        renamed:    dist/assets/images/our-start-landscape-small-i.jpg -> docs/assets/images/our-start-landscape-small-i.jpg
        renamed:    dist/assets/images/our-start-landscape-small.jpg -> docs/assets/images/our-start-landscape-small.jpg
        renamed:    dist/assets/images/our-start-landscape.jpg -> docs/assets/images/our-start-landscape.jpg
        renamed:    dist/assets/images/our-start-portrait-hi-dpi-i.jpg -> docs/assets/images/our-start-portrait-hi-dpi-i.jpg
        renamed:    dist/assets/images/our-start-portrait-hi-dpi.jpg -> docs/assets/images/our-start-portrait-hi-dpi.jpg
        renamed:    dist/assets/images/our-start-portrait-i.jpg -> docs/assets/images/our-start-portrait-i.jpg
        renamed:    dist/assets/images/our-start-portrait.jpg -> docs/assets/images/our-start-portrait.jpg
        renamed:    dist/assets/images/our-start.jpg -> docs/assets/images/our-start.jpg
        renamed:    dist/assets/images/sprites/sprite-8eb89099.png -> docs/assets/images/sprites/sprite-8eb89099.png
        renamed:    dist/assets/images/sprites/sprite-8eb89099.svg -> docs/assets/images/sprites/sprite-8eb89099.svg
        renamed:    dist/assets/images/testimonial-cat-hi-dpi-i.jpg -> docs/assets/images/testimonial-cat-hi-dpi-i.jpg
        renamed:    dist/assets/images/testimonial-cat-hi-dpi.jpg -> docs/assets/images/testimonial-cat-hi-dpi.jpg
        renamed:    dist/assets/images/testimonial-cat-i.jpg -> docs/assets/images/testimonial-cat-i.jpg
        renamed:    dist/assets/images/testimonial-cat.jpg -> docs/assets/images/testimonial-cat.jpg
        renamed:    dist/assets/images/testimonial-jane-hi-dpi-i.jpg -> docs/assets/images/testimonial-jane-hi-dpi-i.jpg
        renamed:    dist/assets/images/testimonial-jane-hi-dpi.jpg -> docs/assets/images/testimonial-jane-hi-dpi.jpg
        renamed:    dist/assets/images/testimonial-jane-i.jpg -> docs/assets/images/testimonial-jane-i.jpg
        renamed:    dist/assets/images/testimonial-jane.jpg -> docs/assets/images/testimonial-jane.jpg
        renamed:    dist/assets/images/testimonial-john-hi-dpi-i.jpg -> docs/assets/images/testimonial-john-hi-dpi-i.jpg
        renamed:    dist/assets/images/testimonial-john-hi-dpi.jpg -> docs/assets/images/testimonial-john-hi-dpi.jpg
        renamed:    dist/assets/images/testimonial-john-i.jpg -> docs/assets/images/testimonial-john-i.jpg
        renamed:    dist/assets/images/testimonial-john.jpg -> docs/assets/images/testimonial-john.jpg
        renamed:    dist/assets/images/testimonials-bg.jpg -> docs/assets/images/testimonials-bg.jpg
        new file:   docs/assets/scripts/App-a34f8d3289.js
        new file:   docs/assets/scripts/Vendor-8a86e2a2de.js
        new file:   docs/assets/styles/styles-c5f444f3fa.css
        renamed:    dist/index.html -> docs/index.html
        modified:   gulp/tasks/build.js
        modified:   gulp/templates/sprite.css
        modified:   package.json


Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git commit -m 'Completed build task and modified directory structure and file passes up to github requirements'
[master warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in docs/assets/scripts/App-a34f8d3289.js.
The file will have its original line endings in your working directory.
917a1ca] Completed build task and modified directory structure and file passes up to github requirements
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in docs/assets/scripts/App-a34f8d3289.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory.
 66 files changed, 218 insertions(+), 16448 deletions(-)
 delete mode 100644 dist/assets/scripts/App.js
 delete mode 100644 dist/assets/scripts/Vendor.js
 delete mode 100644 dist/assets/styles/styles.css
 rename {dist => docs}/assets/images/first-trip-hi-dpi-i.jpg (100%)
 rename {dist => docs}/assets/images/first-trip-hi-dpi.jpg (100%)
 rename {dist => docs}/assets/images/first-trip-i.jpg (100%)
 rename {dist => docs}/assets/images/first-trip-low-res-i.jpg (100%)
 rename {dist => docs}/assets/images/first-trip-low-res.jpg (100%)
 rename {dist => docs}/assets/images/first-trip.jpg (100%)
 rename {dist => docs}/assets/images/hero--large-hi-dpi-i.jpg (100%)
 rename {dist => docs}/assets/images/hero--large-hi-dpi.jpg (100%)
 rename {dist => docs}/assets/images/hero--large-i.jpg (100%)
 rename {dist => docs}/assets/images/hero--large.jpg (100%)
 rename {dist => docs}/assets/images/hero--medium-hi-dpi-i.jpg (100%)
 rename {dist => docs}/assets/images/hero--medium-hi-dpi.jpg (100%)
 rename {dist => docs}/assets/images/hero--medium-i.jpg (100%)
 rename {dist => docs}/assets/images/hero--medium.jpg (100%)
 rename {dist => docs}/assets/images/hero--small-hi-dpi-i.jpg (100%)
 rename {dist => docs}/assets/images/hero--small-hi-dpi.jpg (100%)
 rename {dist => docs}/assets/images/hero--small-i.jpg (100%)
 rename {dist => docs}/assets/images/hero--small.jpg (100%)
 rename {dist => docs}/assets/images/hero--smaller-hi-dpi-i.jpg (100%)
 rename {dist => docs}/assets/images/hero--smaller-hi-dpi.jpg (100%)
 rename {dist => docs}/assets/images/hero--smaller-i.jpg (100%)
 rename {dist => docs}/assets/images/hero--smaller.jpg (100%)
 rename {dist => docs}/assets/images/our-start-hi-dpi-i.jpg (100%)
 rename {dist => docs}/assets/images/our-start-hi-dpi.jpg (100%)
 rename {dist => docs}/assets/images/our-start-i.jpg (100%)
 rename {dist => docs}/assets/images/our-start-landscape-hi-dpi-i.jpg (100%)
 rename {dist => docs}/assets/images/our-start-landscape-hi-dpi.jpg (100%)
 rename {dist => docs}/assets/images/our-start-landscape-i.jpg (100%)
 rename {dist => docs}/assets/images/our-start-landscape-small-i.jpg (100%)
 rename {dist => docs}/assets/images/our-start-landscape-small.jpg (100%)
 rename {dist => docs}/assets/images/our-start-landscape.jpg (100%)
 rename {dist => docs}/assets/images/our-start-portrait-hi-dpi-i.jpg (100%)
 rename {dist => docs}/assets/images/our-start-portrait-hi-dpi.jpg (100%)
 rename {dist => docs}/assets/images/our-start-portrait-i.jpg (100%)
 rename {dist => docs}/assets/images/our-start-portrait.jpg (100%)
 rename {dist => docs}/assets/images/our-start.jpg (100%)
 rename {dist => docs}/assets/images/sprites/sprite-8eb89099.png (100%)
 rename {dist => docs}/assets/images/sprites/sprite-8eb89099.svg (100%)
 rename {dist => docs}/assets/images/testimonial-cat-hi-dpi-i.jpg (100%)
 rename {dist => docs}/assets/images/testimonial-cat-hi-dpi.jpg (100%)
 rename {dist => docs}/assets/images/testimonial-cat-i.jpg (100%)
 rename {dist => docs}/assets/images/testimonial-cat.jpg (100%)
 rename {dist => docs}/assets/images/testimonial-jane-hi-dpi-i.jpg (100%)
 rename {dist => docs}/assets/images/testimonial-jane-hi-dpi.jpg (100%)
 rename {dist => docs}/assets/images/testimonial-jane-i.jpg (100%)
 rename {dist => docs}/assets/images/testimonial-jane.jpg (100%)
 rename {dist => docs}/assets/images/testimonial-john-hi-dpi-i.jpg (100%)
 rename {dist => docs}/assets/images/testimonial-john-hi-dpi.jpg (100%)
 rename {dist => docs}/assets/images/testimonial-john-i.jpg (100%)
 rename {dist => docs}/assets/images/testimonial-john.jpg (100%)
 rename {dist => docs}/assets/images/testimonials-bg.jpg (100%)
 create mode 100644 docs/assets/scripts/App-a34f8d3289.js
 create mode 100644 docs/assets/scripts/Vendor-8a86e2a2de.js
 create mode 100644 docs/assets/styles/styles-c5f444f3fa.css
 rename {dist => docs}/index.html (97%)

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
nothing to commit, working tree clean

Vlad@openareadesktop MINGW64 ~/Documents/PROGRAMMING/HTML5/GitAWebDeveloperJobUdemy/travel-site (master)
$ git push origin master
Counting objects: 27, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (24/24), done.
Writing objects: 100% (27/27), 56.89 KiB | 0 bytes/s, done.
Total 27 (delta 10), reused 0 (delta 0)
remote: Resolving deltas: 100% (10/10), completed with 10 local objects.
To https://github.com/MrV01/travel-site.git
   405c439..917a1ca  master -> master

##############################################
### Finally enable  "GitHub Pages"  from  https://github.com/MrV01/travel-site.git
###   "settings" menu  Source: "master branch/docs folder"  -> Save
### ( docs ) pages for our repo on github
##############################################
### URL name of the travel web site is :
###  https://mrv01.github.io/travel-site/
###


######  SUCCESS !!!!

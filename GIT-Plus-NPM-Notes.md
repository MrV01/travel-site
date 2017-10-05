[Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


--- GIT ---
[Install from git-scm.com if not installed](git-scm.com )

$ git --version
git version 2.9.2.windows.1

### Set up  Global GIT User Name & E-mail
$ git config --global user.name "Vlad"
$ git config --global user.email "VladV454@gmail.com"

### Ready  to GO

$ cd < New dir for GIT repositiory>

### Create new repositiory
$ git init
Initialized empty Git repository in
$

### Add all files to the staging area
$ git add -A

$ git status
On branch master

#### Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)


#### Commit the staging as first commit
$ git commit -m "My first commit"

####  Checkout back what was commited
$ git checkout

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

#######  Now PUSH again ( Laptop changes have been applied locally now. )

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

$ npm install normalize.css --save

####  !!!!
### If we remove the node_modules, we can install them back
####  using command:  npm install
####  !!!! npm will install appropriate modules from the list
####  package.json  dependencies: { }
####
$ rm -rf node_modules

$ npm install

###########  GULP.JS   ###################
### Install gulp-cli   Globally on the computer.
npm install gulp-cli --global

### Install GULP for the local project:
### npm install gulp --save-dev

$ npm install gulp --save-dev

#########
#########   Development dependencies added to package.json
### "devDependencies": {
###  "gulp": "^3.9.1"
### }

#########   First GULP plugin gulp-watch
$ npm install gulp-watch --save-dev


#############
############# In order to Fix the WARNING regarding outdated minimatch &
#############  graceful-fs
############
$ npm install -g minimatch@3.0.2

$ npm install -g graceful-fs@4.1.11
### When desirable, update npm itself to the most recent version . Attention!!!   Does not Play well with  
$ npm install -g npm

#############################################
#### Install other gulp plug-in's
#############################################
$ npm install gulp-postcss --save-dev
$ npm install autoprefixer --save-dev
$ npm install postcss-simple-vars --save-dev
$ npm install postcss-nested --save-dev
$ npm install postcss-import --save-dev

########### Browsersync
$ npm install browser-sync --save-dev

$ npm uninstall --save node-uuid
      - node-uuid@1.4.7 node_modules\node-uuid

$ npm install --save uuid
      npm WARN deprecated node-uuid@1.4.7: use uuid module instead

###  Fix the npm WARN   deprecated node-uuid by updating npm module  request
$ npm install -g request

#### Install NPM postcss-mixins package:
$ npm install postcss-mixins --save-dev

#################################################
GIT  Branches  Aside
#################################################

$ git branch count-to-ien

$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

$ git branch
  count-to-ien
* master

$ git branch -d count-to-ien
Deleted branch count-to-ien (was 1f6565a).

$ git branch
* master

$ git branch count-to-ten

$ git branch
  count-to-ten
* master

$ git checkout count-to-ten
Switched to branch 'count-to-ten'

$ git status
On branch count-to-ten
nothing to commit, working tree clean

$ git status
On branch count-to-ten
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   app/index.html

no changes added to commit (use "git add" and/or "git commit -a")

$ git add -A

$ git commit -m 'Counted to 10'
[count-to-ten 34932d0] Counted to 10
 1 file changed, 3 insertions(+)

$ git status
On branch count-to-ten
nothing to commit, working tree clean

$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

$ git checkout count-to-ten
Switched to branch 'count-to-ten'

$ git status
On branch count-to-ten
nothing to commit, working tree clean

$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

$ git checkout count-to-ten
Switched to branch 'count-to-ten'

$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

$ git merge count-to-ten
Updating 1f6565a..34932d0
Fast-forward
 app/index.html | 12 ++++++++++++
 1 file changed, 12 insertions(+)

$ git push origin master
Counting objects: 12, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (12/12), done.
Writing objects: 100% (12/12), 1.11 KiB | 0 bytes/s, done.
Total 12 (delta 6), reused 0 (delta 0)
remote: Resolving deltas: 100% (6/6), completed with 2 local objects.
To https://github.com/MrV01/travel-site.git
   1f6565a..34932d0  master -> master

$ git branch count-to-fifteen

$ git branch
  count-to-fifteen
  count-to-ten
* master

$ git checkout count-to-fifteen
Switched to branch 'count-to-fifteen'

$ git commit -am 'counted to 15'
[count-to-fifteen 118ac12] counted to 15
 1 file changed, 6 insertions(+)

$ git push origin count-to-fifteen
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 422 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/MrV01/travel-site.git
 * [new branch]      count-to-fifteen -> count-to-fifteen

$ git commit -am 'counted to 17'
[count-to-fifteen 205545b] counted to 17
 1 file changed, 2 insertions(+)

$ git push origin count-to-fifteen
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 409 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/MrV01/travel-site.git
   118ac12..205545b  count-to-fifteen -> count-to-fifteen

$ git commit -am 'counted to 17'
[count-to-fifteen 205545b] counted to 17
 1 file changed, 2 insertions(+)

$ git push origin count-to-fifteen
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 409 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/MrV01/travel-site.git
   118ac12..205545b  count-to-fifteen -> count-to-fifteen

$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

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

$ git branch
  count-to-fifteen
  count-to-ten
* master

$ git pull origin master
From https://github.com/MrV01/travel-site
 * branch            master     -> FETCH_HEAD
Already up-to-date.

$ git branch -d count-to-ten
Deleted branch count-to-ten (was 34932d0).

$ git branch -d count-to-fifteen
Deleted branch count-to-fifteen (was 205545b).

$ git branch
* master

$ git commit -am 'Removed test <UL> numbers removed. First part git branch lesson completed'
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

$ git commit -am 'Removed test <UL> numbers removed. First part git branch lesson completed'
[master d060e89] Removed test <UL> numbers removed. First part git branch lesson completed
 1 file changed, 19 deletions(-)

$ git push
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 443 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/MrV01/travel-site.git
   6c55a9e..d060e89  master -> master

$ git branch
* master

$ git checkout -b our-features
Switched to a new branch 'our-features'

$ git branch
  master
* our-features

$ git status
On branch our-features
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    no changes added to commit (use "git add" and/or "git commit -a")

$ git commit -am 'Our features inthe middle of Part 1. ( end of the day commit)'
 4 files changed, 80 insertions(+), 22 deletions(-)

$ git status
On branch our-features
Untracked files:
  (use "git add <file>..." to include in what will be committed)

        app/assets/styles/modules/

$ git add -A

$ git status
On branch our-features
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   app/assets/styles/modules/

$ git commit -am 'Our features inthe middle of Part 1. ( end of the day commit 2)'
[our-features d07f2ae] Our features inthe middle of Part 1. ( end of the day commit 2)
 2 files changed, 19 insertions(+)
 create mode 100644 app/assets/styles/modules/feature-item.css
 create mode 100644 app/assets/styles/modules/section-title.css

$ git status
On branch our-features
nothing to commit, working tree clean

$ git push origin our-features
Counting objects: 20, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (18/18), done.
Writing objects: 100% (20/20), 6.77 KiB | 0 bytes/s, done.
Total 20 (delta 7), reused 0 (delta 0)
remote: Resolving deltas: 100% (7/7), completed with 5 local objects.
To https://github.com/MrV01/travel-site.git
 * [new branch]      our-features -> our-features

##############################################
GIT merge branch our-features to master
################################################

$ git add -A
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.

$ git commit -m 'Completed the Our features section'
[our-features warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
 2 files changed, 2 insertions(+), 2 deletions(-)

$ git push origin our-features
Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (10/10), 860 bytes | 0 bytes/s, done.
Total 10 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/MrV01/travel-site.git
   73405df..6f10b7f  our-features -> our-features

$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

$ git merge our-features --no-ff
error: Your local changes to the following files would be overwritten by merge:
        app/temp/styles/styles.css
Please commit your changes or stash them before you can merge.
Aborting

$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   app/temp/styles/styles.css

no changes added to commit (use "git add" and/or "git commit -a")

$ git add app/temp/styles/styles.css
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.

$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

$ git merge our-features --no-ff
Merge made by the 'recursive' strategy.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.
 app/assets/styles/modules/feature-item.css        | 33 +++++++++
 .../styles/modules/generic-content-container.css  |  3 +-
 app/assets/styles/modules/row.css                 | 21 ++++--
 app/assets/styles/modules/section-title.css       | 31 ++++++++
 app/assets/styles/styles.css                       |  8 ++-
 app/index.html                                     | 43 +++++++----
 app/temp/styles/styles.css                         | 84 +++++++++++++++++++++-
 7 files changed, 199 insertions(+), 24 deletions(-)
 create mode 100644 app/assets/styles/modules/feature-item.css
 create mode 100644 app/assets/styles/modules/section-title.css

$ git push origin master
Counting objects: 1, done.
Writing objects: 100% (1/1), 219 bytes | 0 bytes/s, done.
Total 1 (delta 0), reused 0 (delta 0)
To https://github.com/MrV01/travel-site.git
   d060e89..fd81f9b  master -> master


##################################################
GIT new branch for section "testimonials"
##################################################

$  git checkout -b testimonials
M       app/temp/styles/styles.css
Switched to a new branch 'testimonials'


#####################################################
### Create "Sprites"  collections of the icons in one file
#####################################################
$ git checkout -b gulp-sprite
Switched to a new branch 'gulp-sprite'
## Install gulp-svg-sprite gulp plugin as npm package.
$ npm install gulp-svg-sprite@1.3.1 --save-dev

### Install  npm module to rename file
 $ npm install gulp-rename --save-dev

### Install npm module to remove directory
$ npm install del --save-dev

<!--  postcss plugin can transform #ffffff to rgba() format  -->
$ npm install postcss-hexrgba --save-dev

<!-- // Install webpack in order to run NODE.JS modules in
//  Browser environments. -->
$ npm install webpack -g

//
// local installation of webpack  for gulp automation
//
$ npm install webpack --save-dev

//
// 1. Install and setup Babel
//  Three packages :  babel-core ( babel ) babel-loader (babel-webpack integration)
//                    babel-preset-es2015 ( version of java script to generate)
$ npm install babel-core babel-loader babel-preset-es2015 --save-dev


#####
##### Completed the header branch in git
##### merge to master, then create new branch: reveal-on-scroll
#####

$ git status
On branch header
nothing to commit, working tree clean

$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

$ git merge header
Updating e4cf093..8b2afae
Fast-forward
 app/assets/scripts/app.js                  |     6 +
 app/assets/scripts/modules/MobileMenu.js   |    52 +
 app/assets/styles/base/variables.css      |     2 +-
 app/assets/styles/modules/large-hero.css  |     6 +
 app/assets/styles/modules/primary-nav.css |    59 +
 app/assets/styles/modules/site-header.css |   145 +
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
 create mode 100644 app/assets/styles/modules/primary-nav.css
 create mode 100644 app/assets/styles/modules/site-header.css
 create mode 100644 app/temp/scripts/App.js
 create mode 100644 gulp/tasks/scripts.js
 create mode 100644 webpack.config.js

$ git push origin master
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/MrV01/travel-site.git
   e4cf093..8b2afae  master -> master

$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

$ git checkout -b reveal-on-scroll
Switched to a new branch 'reveal-on-scroll'


################################################
### Install waypoints npm package to deal with page scrolling events
###############################################
$ npm install waypoints --save

########################################
## Create new branch sticky-header
########################################

$ git status
On branch reveal-on-scroll
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   app/assets/styles/modules/

$ git add -A

$ git status
On branch reveal-on-scroll
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   app/assets/styles/modules/

$ git commit -m "Completed the rveal on scroll behavior"
[reveal-on-scroll e1045bb] Completed the rveal on scroll behavior
 1 file changed, 1 insertion(+), 1 deletion(-)

$ git status
On branch reveal-on-scroll
nothing to commit, working tree clean

$ git push origin reveal-on-scroll
Counting objects: 7, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 670 bytes | 0 bytes/s, done.
Total 7 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/MrV01/travel-site.git
   51a1e16..e1045bb  reveal-on-scroll -> reveal-on-scroll

$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

$ git merge reveal-on-scroll
```
Updating 8b2afae..e1045bb
Fast-forward
 app/assets/scripts/app.js                    |   14 +-
 app/assets/scripts/modules/RevealOnScroll.js |   46 ++
 app/assets/styles/modules/reveal-item.css   |   12 +
 app/assets/styles/styles.css                 |    4 +-
 app/index.html                               |    5 +-
 app/temp/scripts/App.js                      | 1040 +++++++++++++++++++++++---
 app/temp/styles/styles.css                   |   17 +-
 package.json                                 |    3 +-
 8 files changed, 1046 insertions(+), 95 deletions(-)
 create mode 100644 app/assets/scripts/modules/RevealOnScroll.js
 create mode 100644 app/assets/styles/modules/reveal-item.css
```

$ git checkout -b sticky-header
Switched to a new branch 'sticky-header'

$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 3 commits.
  (use "git push" to publish your local commits)

$ git push origin master
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/MrV01/travel-site.git
   8b2afae..e1045bb  master -> master

$ git checkout sticky-header
Switched to branch 'sticky-header'

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

```html
 Added new id="our-beginning-link" into index.html: <li><a href="#our-beginning" id="our-beginning-link"
 ! And custom attribute ( data-matching-link="#our-beginning-link"  ) to  div id="our-beginning"
   <div id="our-beginning" class="page-section" data-matching-link="#our-beginning-link">
Same with "features" and "Testimonials"
 <li><a href="#features" id="features-link">Features</a></li>
 <div id="features" class="page-section page-section--blue" data-matching-link="#features-link">
 <li><a href="#testimonials" id="testimonials-link">Testimonials</a></li>
 <div id="testimonials" class="page-section page-section--no-b-padding-until-large page-section--testimonials" data-matching-link="#testimonials-link">
```

#######################################
### Install jquery-smooth-scroll npm package
#######################################

$ npm install jquery-smooth-scroll --save

################
#### Sticky-header merge:
################

$ git merge sticky-header
```
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
```

##########################
# Create new branch: create-modal
################

$ git checkout -b create-modal
Switched to a new branch 'create-modal'


##################################
### branch create-modal merged to master.
##################################
$ git add -A
warning: LF will be replaced by CRLF in app/temp/scripts/App.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.

$ git commit -m 'misc ./temp files commit to clean up  master branch'
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

$ git push origin master
Everything up-to-date

$ git merge create-modal
```
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
```

$ git push origin master
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/MrV01/travel-site.git
   5f0c9ff..d7ca024  master -> master

################################################
### Lazyloading branch   for Lazy loading of images.
##############################################

$ git branch lazyloading

$ git checkout lazyloading
M       app/temp/scripts/App.js
M       app/temp/styles/styles.css
Switched to branch 'lazyloading'

#################################################################
##  Installing npm package lazysizes
### https://www.npmjs.com/package/lazysizes
###################################################

$ npm install lazysizes --save


################################################
## Rebiulded apps,, using multi-entries points webpack.config.js
###################################################

$ gulp watch
[10:51:54] Using gulpfile
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

$ git status
On branch lazyloading
```
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   app/assets/scripts/modules/StickyHeader.js
        modified:   app/assets/styles/modules/_page-section.css
        modified:   app/index.html
        modified:   app/temp/scripts/App.js
        modified:   app/temp/styles/styles.css

no changes added to commit (use "git add" and/or "git commit -a")
```

$ git add -A
warning: LF will be replaced by CRLF in app/temp/scripts/App.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/temp/styles/styles.css.
The file will have its original line endings in your working directory.

$ git status
```
On branch lazyloading
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   app/assets/scripts/modules/StickyHeader.js
        modified:   app/assets/styles/modules/_page-section.css
        modified:   app/index.html
        modified:   app/temp/scripts/App.js
        modified:   app/temp/styles/styles.css

```


$ git commit -m "LazyLoading is completed."

 5 files changed, 80 insertions(+), 19 deletions(-)

$ git status
On branch lazyloading
nothing to commit, working tree clean

$ git push origin lazyloading
Counting objects: 16, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (15/15), done.
Writing objects: 100% (16/16), 2.79 KiB | 0 bytes/s, done.
Total 16 (delta 9), reused 0 (delta 0)
remote: Resolving deltas: 100% (9/9), completed with 8 local objects.
To https://github.com/MrV01/travel-site.git
   3cdf3ca..cc7c28e  lazyloading -> lazyloading

$ git status
On branch lazyloading
nothing to commit, working tree clean


$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

$ git merge lazyloading
```
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
```

$ git checkout -b browser-support
Switched to a new branch 'browser-support'

## ====================================================
### Install npm package  picturefill
##  to imitate  responsive images ( "magic" ) of <picture> and <srcset> elemants on older browsers
############################
$ npm install picturefill --save

#######################################################
##### Next : .SVG backup to .PNG for the rest 3% of outdated browsers
########################################################
Plan.
1. Use Gulp to automatically create PNG of our SVG icon sprite
2.  Send the PNG version to the browsers, that don't support SVG
3.  Use Modernizr to test the browser capabilities )

##### Install package gulp-svg2png@0.3.0

$ npm install gulp-svg2png@0.3.0 --save-dev



#########
## Install gulp-modernizer
#########

$ npm install gulp-modernizr --save-dev
npm WARN deprecated win-spawn@2.0.0: use [cross-spawn](https://github.com/IndigoUnited/node-cross-spawn) or [cross-spawn-async](https://github.com/IndigoUnited/node-cross-spawn-async) instead.
npm WARN deprecated minimatch@0.3.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue


####
## Modernizr  gulp-modernizr will create javascript file
## for us to test a client  browser for features in present.
####

$ gulp icons
[00:49:50] Using gulpfile [00:49:50] Starting 'beginClean'...
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


$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

$ git push origin master
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/MrV01/travel-site.git
   d7ca024..cc7c28e  master -> master

$ git merge browser-support
```
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
```

####################################
### Install gulp-imagemin
####################################

$ npm install gulp-imagemin --save-dev


  $ npm install gulp-usemin --seve-dev

  $ npm install gulp-usemin --save-dev

#######################
###### Add extra packages to accompany "usemin" in the production files "uglification"
#########################
#### Install npm for the files revision, CSS compress, JS compress
#### npm install gulp-rev gulp-cssnano gulp-uglify --save-dev
#####

$ npm install gulp-rev gulp-cssnano gulp-uglify --save-dev

##### Modified ./gulp/tasks/build.js  file:

$ gulp build
[21:00:34] Using gulpfile [21:00:34] Starting 'deleteDistFolder'...
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

$ gulp build
[21:21:35] Using gulpfile
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

$ git status

```
The file will have its original line endings in your working directory.
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   GIT-Plus-NPM-cheatsheet.txt
        modified:       renamed:    dist/assets/images/testimonials-bg.jpg -> docs/assets/images/testimonials-bg.jpg
        new file:   docs/assets/scripts/App-a34f8d3289.js
        new file:   docs/assets/scripts/Vendor-8a86e2a2de.js
        new file:   docs/assets/styles/styles-c5f444f3fa.css
        renamed:    dist/index.html -> docs/index.html
        modified:   gulp/tasks/build.js
        modified:   gulp/templates/sprite.css
        modified:   package.json
```

$ git commit -m 'Completed build task and modified directory structure and file passes up to github requirements'
 create mode 100644 docs/assets/scripts/Vendor-8a86e2a2de.js
 create mode 100644 docs/assets/styles/styles-c5f444f3fa.css
 rename {dist => docs}/index.html (97%)

$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
nothing to commit, working tree clean


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
### Finally enable  "GitHub Pages"  from  
##############################################
https://github.com/MrV01/travel-site.git
 "settings" menu  Source: "master branch/docs folder"  -> Save
 ( docs ) pages for our repo on github
##############################################
### URL name of the travel web site is :
###  https://mrv01.github.io/travel-site/
###


SUCCESSFULLY REPEATED!!!!

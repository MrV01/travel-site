
   Taking Care About GIT branches.

1. Create/Commit/Push to remote  New branch

    1. Create new branch on local mashine

          git branch   new-branch-name

    2.  Switch to branch new-branch-name on local mashine

         git checkout new-branch-name

    3.  Commit  changes to  new-branch-name  on local mashine

        git status

        git add -A

        git commit -m "new-branch-name initial commit"

    4.  When working in team.  Push  new-branch-name to the remote mashine/github

        git fetch origin
        git push origin   new-branch-name

    5.  Switch local  branch to master

       git  checkout master


    6. When working in team.  Pull  ( Fetch and Merge )  master branch from the remote .

        git fetch origin
        git pull origin master


    7.  When working in team.  Track ( Fetch and  Checkout ) some-branch  from the remote  to local mashine. No Merge, just Checkout to keep track of changes locally.

        git fetch origin
        git checkout --track origin/some-branch


    8.  Merge   new-branch-name to the master branch on local mashine.

        git  checkout master
        git  merge  new-branch-name

   9.  Push  master  branch to  remote repository

        git  push origin master



2.   Clean up after merge, pull request, etc.

    1. List branches on the local mashine.  ( Lists referencies to remote(s) as well )

         git branch -a

        ## Remote branches list.
         git branch -r   

    2.  Prune/Cleanup the local references to remote branch(es).
        - List only of branches that can be deleted on the local mashine.

          git remote prune origin --dry-run

      - Actually prune/cleanup the local references to non-existent remote branches.  (same command minus --dry-run)

          git remote prune origin

    3.  Delete local branch on the local mashine - workstation

          git branch -d  name-of-branch-to-delete

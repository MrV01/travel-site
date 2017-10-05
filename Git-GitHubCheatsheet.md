
    Create/Commit/Push to remote  New branch

    1. Create new branch on local mashine

          git branch   new-branch-name

    2.  Switch to branch new-branch-name

         git checkout new-branch-name

    3.  




  Clean up after merge, pull request, etc.

1. List branches on the local mashine.  ( Lists referencies to remote(s) as well )

     git branch -a

2.  Prune/Cleanup the local references to remote branch(es).
    - List only of branches that can be deleted on the local mashine.

      git remote prune origin --dry-run

  - Actually prune/cleanup the local references to non-existent remote branches.  (same command minus --dry-run)

      git remote prune origin

3.  Delete local branch on the local mashine - workstation

      git branch -d  name-of-branch-to-delete

import os
from s3_mysql_backup import download_last_db_backup
from s3_mysql_backup import mkdirs
from fabric.api import task
from fabric.context_managers import cd
from fabric.operations import local

@task
def deploy_to_nginx(mp='/mnt/src/'):
    """
    deploy to host volume, source and last database backup
    called in ecs container
    """
    dest = '%sangular-dropbox.sfblur.com/' % mp

    # write to host os
    mkdirs(dest)
    print 'verified dir %s' % dest
        
    # copy every thing except .git
    # 
    local('rsync -arhv --delete --exclude ".git" ./dist/* %s' % dest)

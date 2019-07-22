# Python application that can automate/manage your microService/Macro
# Uses boto module* documentation on boto 2.0 github.com/boto. 
# M.Brohi

#Launching an Instance >>> from ec2_launch_instance import launch_instance
#                      >>> launch_instance()
# dependencies https://pypi.org/project/boto/#files


import os
import time
import boto
import boto.manage.cmdshell

def launch_instance(ami='ami-73411831a',
                    instance_type='t1.micro',
                    key_name='paws',
                    key_extension='.pem',
                    key_dir='~/.ssh',
                    group_name='paws',
                    ssh_port=22,
                    cidr='0.0.0.0/0',
                    tag='paws',
                    user_data=None,
                    cmd_shell=True,
                    login_user='ec2-user',
                    ssh_passwd=None):

cmd = None

try:
    key = ec2.get_all_key_pairs(keynames=[key_name])[0]
except ec2.ResponseError, e:
    if e.code == 'InvalidKeyPair.NotFound'
        print 'Creating keypair:' %s % key_name
        key = ec2.create_key_pair(key_name)
        key.save(key_dir)
    else:
        raise
try:
    group = ec2.get_all_security_groups(groupnames=[group_name])[0]
except ec2.ResponseError, e:
    if e.code == 'InvalidPermission.Duplicate':
        print 'Security Group: %s already authorized' % group_name
    else:
        raise

reservation = ec2.run_instances(ami,
                                key_name=key_name,
                                security_groups=[group_name],
                                instance_type=instance_type,
                                user_data=user_data)
instance = reservation.instances[0]

print 'waiting for instance'
while instance.state != 'running':
    print '.'
    time.sleep(5)
    instance.update()
print 'done'

instance.add_tag(tag)

if cmd_shell
    key_path = os.path.join(os.path.expanduser(key_dir),
                            key_name+key_extension)
    cmd = boto.manage.cmdshell.sshclient_from_instance(instance, key_path, user_name=login_user)

return (instance, cmd)
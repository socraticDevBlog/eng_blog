---
title: "simple project: automate the encryption of backup files"
date: 2021-07-21
author: "SocraticDev"
image: ../../images/merlin-encrypteur.png
tags:
  - security
  - programming
  - linux
is_archived: true
---

A good file backup strategy is to keep a copy of the files on a different physical medium than the original as well as a copy of the same files in another physical location. An excellent option for undertaking your backups at a different location is to send them to the `cloud`. We can often use a free option with the big players `Google`,` Microsoft` or `Dropbox`.

However, we must be careful and consider the fate of these files entrusted to a foreign infrastructure. Are we comfortable that our files are made available to hackers in the event of a security breach? Or, a little less serious, are we comfortable with these tech goliaths exploiting the content of our files?

My answer is no. And the solution I propose is to store only encrypted files on the public cloud. That is, on servers made available and managed by someone other than yourself.

##### Manual process under `linux`
In `linux`, the process is very simple. In less than 3 command lines, the contents of a directory are encrypted using the `GPG - GNU Privacy Guard` library. However, the backup process should be performed regularly and consistently. The best option is automation. Automating will prevent us from making errors and above all will prevent us from laziness neglecting these maneuvers which will save our lives in the event of a hardware failure or ransomware attack.

##### Automate using `bash` scripts

In terms of automation, the most economical way is to script commands executed manually on a terminal.

Scripting is often a temporary and intermediate step. Before arriving at a robust and professional solution, we get our toes wet by quickly producing reusable scripts.

For example, in the time of a night, I coded two `bash` scripts to meet my need. A first script to encrypt a directory. A second script to decrypt the encrypted file. With these two scripts I am able to save time in the backup process. And above all, it motivates me to stay disciplined and regularly backup my files.

> These scripts are available and ready to be used: [https://github.com/socraticDevBlog/encrypted-backupsialis(https://github.com/socraticDevBlog/encrypted-backups)

The `encrypt.sh` file compresses the contents of a directory; that is, it reduces it to a compressed file. Then, it uses the `GPG` library to encrypt it. `GPG` needs a` passphrase` for its symmetric encryption algorithm. So our script hands over to this library which opens a modal window and asks the user to enter a 'password' phrase.

We will use this same password to decrypt our directory.

```
# compress given directory to a custom named archive
archive_filename=${archive}-$(date +"%Y-%m-%d").tar.gz
tar -zcvf ${archive_filename} ${dir_path}/*

# encrypt archived file
gpg --output ${archive_filename}.gpg --symmetric $archive_filename

# remove temporary compressed directory
rm ${archive_filename}
```

The `decrypt.sh` file is used to decrypt the encrypted directory. It simply performs the reverse actions of the encryption process. In the end, we will find the original directory containing all the original files!

```
# decrypt file to compressed archive
gpg --output $archive_file_name --decrypt ${1}

# decompress archive to original folder
tar xzvf ${archive_file_name}

# remove compressed archive
rm ${archive_file_name}
```

##### Conclusion

Thanks to these two scripts I feel armed to implement a healthy strategy of backing up personal files to the public cloud.

However, I plan to modify these scripts and possibly automate the backup process from A to Z. That is to say schedule a regular process (daily or weekly) which will take care of sending a set of backups to the cloud. This will give me peace of mind: in the event of a technical problem or a ransomware attack, I will be able to recover my essential data in no time.

If you are tempted to use a strategy similar to mine, I would love to hear about it. Never hesitate to contact me via `Twitter` or` LinkedIn` to start a tech talk!

`Translation by Google translate`

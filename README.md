# api-git
api for github, bitbucket, git

libraries for github
https://developer.github.com/v3/libraries/


https://github.com/pksunkara/octonode


https://github.com/k33g/gh3
- read only, frontend

https://github.com/github-tools/github


## Install

    install.bat


## API architecture

### query tree

    + organisation: list
        + repository: list
            + info
            + file
                + all: tree
                    + point
                        + all: list
                        + id: content
                    + content: text
                + add
                + remove
                + create

            + description
            + name
            + url
            + user
                + list
            + stars
            + fork



### examples

organisation/*/repository/*/file/all

organisation/*/repository/*/file/*/point/all

organisation/*/repository/*/file/*/content

organisation/*/repository/*/file/*/point/all

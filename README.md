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


## API github

### source
+ git
+ github
+ bitbucket
+ ...

### organisation
+ username
+ company
+ project

### repository

### file
lista lub drzewo plików

### folder
lista lub drzewo katalogów

### section
struktura paragrafów/akapitów
rozwiązanie do zarządzania punktami w plikach, zamiast całą treścią,
możliwe jest łatwiejsze przenoszenie małych częsci plików pomiedzy nimi.
Ułatwia podgląd zawartości

## query tree

+ source: list
    + organisation: list
        + repository: list
            + section
                + all: tree
                + id: content
                + move
                + copy
                + duplicate
                + update
                + delete

            + file
                + all: tree

                + name
                    + read
                        + section
                            + all: list
                            + id: content
                    + update
                    + delete

                + create

            + folder
                + all: tree
                + id: CRUD


            + info
            + description
            + name
            + url
            + user
                + list
            + stars
            + fork




### examples


source/*/organisation/*/repository/*/section/*/all

source/*/organisation/*/repository/*/folder/*/all

source/*/organisation/*/repository/*/file/all

source/*/organisation/*/repository/*/file/*/section/all

source/*/organisation/*/repository/*/file/*/content

source/*/organisation/*/repository/*/file/*/point/all


## API Wordpress

    + domain

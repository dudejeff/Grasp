#!/usr/bin/env sh

git clone https://Bfine@bitbucket.org/octaltech/grasp_beta_signups.git

cd grasp_beta_signups

sudo npm install -g

echo "Installed, now try running the command \"grasp_beta_signups\" and a file called \"users.csv\" should appear in the directory in which you run that."
read -n1 -r -p "Press space to continue..." key


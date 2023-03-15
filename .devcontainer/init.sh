#!/bin/bash
sudo chown vscode:vscode .venv
pipenv install

sudo chown vscode:vscode node_modules
npm install

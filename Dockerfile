FROM fogcitymarathoner/angular-dev-deploy

ADD bower.json /bower.json
ADD package.json /package.json
ADD Gruntfile.js /Gruntfile.js
ADD app /app
ADD fabfile.py  /fabfile.py
RUN grunt build

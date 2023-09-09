
# Intall NODEJS
wget https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh
bash install.sh
source ~/.bashrc

nvm install 18
nvm use 18

# install app
mkdir /home/server/birqsil-front
chown server:www-data /home/server/birqsil-front
cd /home/server/birqsil-front
git clone https://github.com/supermetrolog/birqsil-front.git .
echo "API_BASE_URL=http://api.birqsil.com/v1
      MENU_DOMAIN=http://birqsil.com" > .env

# build
npm install
chown -R server:www-data .
npm run cabinet:build
npm run menu:build


echo "server {
          server_name cabinet.birqsil.com;

          location / {
              try_files $uri $uri/ /index.php?$query_string;
          }

          error_log /var/log/nginx/cabinet.error.log;
          access_log /var/log/nginx/cabinet.access.log combined if=$loggable;
      }
" > /etc/nginx/conf.d/cabinet.birqsil.com.conf
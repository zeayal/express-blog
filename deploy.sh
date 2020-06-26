echo "开始拉去最新代码";

git checkout master;

git pull

pm2 restart all;

echo "切换到 master 分支";
git checkout master;

echo "开始拉去最新代码";
git pull;

echo "安装 npm 依赖";
yarn;

;//引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random;
//使用mockjs模拟数据
Mock.mock('/api/select', (req,
  res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
  let list = [];
  for (let i = 0; i <5; i++) {
    let listObject = {
      name: Random.csentence(2, 3).replace(/。$/,""), //随机生成一段中文文本。
      phone: Random.integer(10000000000,19999999999),
      id: Random.integer(100, 9999), //返回一个随机的整数。
    }
    list.push(listObject);
  }
  return {
    data: list
  }
})

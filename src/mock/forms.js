import layoutDynamicUi from 'layout-dynamic-ui'; //引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random;
//使用mockjs模拟数据
Mock.mock('/api/select', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
  let list = [];
  for (let i = 0; i < 5; i++) {
    let listObject = {
      name: Random.cname(), //随机生成一段中文文本。
      phone: Random.integer(10000000000, 19999999999),
      id: Random.integer(100, 9999), //返回一个随机的整数。
    }
    list.push(listObject);
  }
  return {
    data: list
  }
})
Mock.mock(new RegExp('/test/getUserInfo.*'), 'get', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据.
  let request = layoutDynamicUi.util.urlToObj(req['url']);
  let list = [];
  let pageSize = parseInt(request['pageSize']) || 10;
  for (let i = 0; i < 10; i++) {
    let listObject = {
      nickName: Random.cname(), //随机生成一段中文文本。
      phone: Random.integer(10000000000, 19999999999),
      id: Random.integer(100, 9999), //返回一个随机的整数。
      userType: Random.integer(0, 2),
      birthday: Random.date(),
      updatedTime: Random.date(),
      createdTime: Random.date(),
    }
    list.push(listObject);
  }
  return request['isPageHelper']+'' =='true'? {
    data: {
      list: list,
      currentPage: request['pageNum'],
      pageSize: pageSize,
      total: 100
    }
  } : {
    data: list
  }
})

export default {
  interfaces: [{
    id: '123',
    name: '',
    route: '/user',
    method: 'get',
    ruleFile: 'user/rule/getuser.rule.json',
    status: 'mock',
    urls: {
      online: 'http://localhost:5000/api/user'
    }
  },
  {
    id: '321',
    name: 'ss',
    route: '/user',
    method: 'post',
    ruleFile: 'user/rule/getuser.rule.json',
    status: 'mock',
    urls: {
      online: 'http://localhost:5000/api/user'
    }
  },
  {
    id: '3211',
    name: 'ss',
    route: '/user/:id',
    method: 'put',
    ruleFile: 'user/rule/getuser.rule.json',
    status: 'mock',
    urls: {
      online: 'http://localhost:5000/api/user'
    }
  },
  {
    id: '3212',
    name: 'ss',
    route: '/user/:id',
    method: 'delete',
    ruleFile: 'user/rule/getuser.rule.json',
    status: 'mock',
    urls: {
      online: 'http://localhost:5000/api/user'
    }
  }
]
};

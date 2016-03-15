import InterfaceManager from './interfacemanager';
import Mock from 'mockjs';
class ModelRoute {
  constructor(profile) {
    this.profile = profile;
  }
  route(router) {
    // router.route('/managers')
    // .get(function(req, res, next){
    //   console.log('------------------');
    //   	User.pageList()
    //     .done(function(data){
    //       console.log(data);
    //       res.json(data);
    //     });
    // })
    const profile = this.profile;
    router.route(this.profile.route)[this.profile.method](
      (req, res) => {
        let data = {};
        if (profile.status === 'mock') {
          console.log(profile.ruleFileJson.response);
          data = Mock.mock(profile.ruleFileJson.response);
        }
        // const data = {
        //   saner: 'sss'
        // };
        res.json(data);
      }
    );
  }
}
let interfacemanager;
let _router;
ModelRoute.createRoute = () => {
  const keys = Object.keys(interfacemanager._interfaceMap);
  // interfacemanager._interfaceMap.keys();
  keys.forEach((appinterface) => {
    new ModelRoute(interfacemanager._interfaceMap[appinterface]).route(_router);
  });
};

// 初始化
ModelRoute.init = (profile, router) => {
  _router = router;
  interfacemanager = new InterfaceManager(profile);
  ModelRoute.createRoute();
};

export default ModelRoute;

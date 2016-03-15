import fs from 'fs';
import path from 'path';

class InterfaceManager {
  constructor(options) {
    //
    this._interfaceMap = {};
    this._clientInterfaces = {};
    this._loadProfiles(options);
  }

  _loadProfiles(profiles) {
    if (!profiles) return;
    console.info('Title:', profiles.title, 'Version:', profiles.version);
    // 状态
    if (profiles.status === undefined) {
      throw new Error('There is no status specified in interface configuration!');
    }

    // {String} The interface status in using.
    this._status = profiles.status;
    this._rulebase = profiles.rulebase;
    // 接口
    const interfaces = profiles.interfaces || [];
    for (let i = interfaces.length - 1; i >= 0; i--) {
      this._addProfile(interfaces[i]);
      console.info(`Interface[${interfaces[i].id}] is loaded.`);
    }
  }

  _addProfile(prof) {
    if (!prof || !prof.id) {
      console.error('Can not add interface profile without id!');
      return false;
    }
    if (!/^((\w+\.)*\w+)$/.test(prof.id)) {
      console.error(`Invalid id:  ${prof.id}`);
      return false;
    }
    if (this.isProfileExisted(prof.id)) {
      console.error(`Can not repeat to add interface [ ${prof.id} ]!
        Please check your interface configuration file!`);
      return false;
    }

    // 单个规则(接口)文件
    prof.ruleFile = path.join(__dirname, `../${this._rulebase}/${prof.ruleFile}`);

    if (!this._isUrlsValid(prof.urls) && !fs.existsSync(prof.ruleFile)) {
      console.error('Profile is deprecated:\n',
        prof, '\nNo urls is configured and No ruleFile is available');
      return false;
    }

    // 判断当前接口的状态 (如果当前状态不是mock或者没有定义的话,都自动用总的状态)
    if (!(prof.status in prof.urls || prof.status === 'mock' || prof.status === 'mockerr')) {
      prof.status = this._status;
    }
    if ((prof.status === 'mock' || prof.status === 'mockerr')
      && fs.existsSync(prof.ruleFile)) {
      prof.ruleFileJson = JSON.parse(fs.readFileSync(prof.ruleFile));
    }
    // 当前规则请求类型(后面是不是加上只是restful)
    prof.method = {
      post: 'post',
      get: 'get',
      put: 'put',
      delete: 'delete'
    }
      [(prof.method || 'GET').toLowerCase()];
    prof.dataType = {
      json: 'json',
      text: 'text',
      jsonp: 'jsonp'
    }
      [(prof.dataType || 'json').toLowerCase()];
    prof.isRuleStatic = !!prof.isRuleStatic || false;
    prof.isCookieNeeded = !!prof.isCookieNeeded || false;
    prof.signed = !!prof.signed || false;
    prof.timeout = prof.timeout || 10000;

    // prof.format
    // prof.filter         = ...
    this._interfaceMap[prof.id] = prof;

    this._clientInterfaces[prof.id] = {
      id: prof.id,
      method: prof.method,
      dataType: prof.dataType
    };

    return true;
  }

  isProfileExisted(interfaceId) {
    return !!this._interfaceMap[interfaceId];
  }

  _isUrlsValid(urls) {
    if (!urls) return false;
    return true;
    // for (let i in urls) {
    //   i;
    //   return true;
    // }
    // return false;
  }

}

export default InterfaceManager;

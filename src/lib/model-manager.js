const modelMap = new Map();

const ModelManager = {
  init: () => {
    modelMap.set('tenant-a', 'tenant-a model');
    modelMap.set('tenant-b', 'tenant-b model');
    modelMap.set('tenant-c', 'tenant-c model');
  },
  get: (tenant) => {
    return modelMap.get(tenant);
  },
  set: (tenant, model) => {
    modelMap.set(tenant, model);
  }
}

export { ModelManager }